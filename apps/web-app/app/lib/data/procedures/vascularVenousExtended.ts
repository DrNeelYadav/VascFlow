import { ProcedureBlueprint } from '../../types/clinical';

/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 *
 * Master Catalog for Vascular, Venous, Budd-Chiari, HPB, Arterial, Aortic & Trauma Interventions
 * (Categories 3, 4, 5, 6, 7, 10)
 */

export const VASCULAR_VENOUS_EXTENDED_PROCEDURES: ProcedureBlueprint[] = [
  {
    "id": "venaseal-varicose-glue",
    "name": "VenaSeal Cyanoacrylate Superglue Closure of Great/Small Saphenous Vein",
    "category": "Superficial Venous Interventions",
    "code": "2849-VN010A",
    "rghsCode": "492 / 12",
    "icd10": "I83.91 (Varicose veins of right lower extremity with pain)",
    "indications": [
      "Symptomatic incompetence of Great Saphenous Vein (GSV) or Small Saphenous Vein (SSV) with duplex reflux duration > 0.5 seconds",
      "Venous stasis symptoms including swelling, throbbing ache, heaviness, and restlessness refractory to compression stockings",
      "Inability to tolerate compression hosiery or contraindications to thermal ablation (e.g., nerve proximity without tumescence tolerance)"
    ],
    "preOpCriteria": [
      "Standing venous duplex mapping documenting truncal saphenous diameter (3 mm to 12 mm) and saphenofemoral junction (SFJ) reflux",
      "Exclusion of acute deep vein thrombosis (DVT) or extensive post-thrombotic femoral vein occlusion",
      "Coagulation panel within normal parameters; patient able to ambulate immediately post-procedure"
    ],
    "hardware": [
      {
        "category": "Glue Closure Kit",
        "name": "VenaSeal Closure System",
        "spec": "5F delivery catheter, 3 mL dispenser gun, 8F introducer sheath",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Access Guidewire",
        "name": "0.035-inch J-Tip Guidewire",
        "spec": "150 cm length, PTFE coated",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Micro-Introducer Kit",
        "name": "5F Micro-Introducer Access Set",
        "spec": "21G echogenic needle, 0.018 nitinol wire, 5F co-axial sheath",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Ultrasound Accessories",
        "name": "Sterile Ultrasound Probe Sheath & Acoustic Gel",
        "spec": "Latex-free sterile barrier sleeve",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Position patient in reverse Trendelenburg on the fluoroscopy/ultrasound table with sterile draping of target lower limb.",
      "Under direct ultrasound guidance, puncture target GSV at upper calf or knee level using 21G echogenic needle.",
      "Advance 0.035 guidewire into common femoral vein under sonographic visualization; place 5F VenaSeal delivery sheath.",
      "Introduce VenaSeal delivery catheter through sheath; position radiopaque marker tip precisely 5.0 cm distal to saphenofemoral junction (SFJ).",
      "Apply firm manual transducer compression directly over SFJ to compress common femoral vein and prevent cranial glue migration.",
      "Dispense initial 0.1 mL bolus of proprietary cyanoacrylate glue; immediately apply external transducer pressure for 3 continuous minutes.",
      "Retract catheter in successive 3 cm increments, dispensing 0.1 mL glue followed by 30 seconds of firm localized external compression along entire treated vein length.",
      "Remove sheath, apply sterile adhesive bandage at puncture site, verify complete sonographic occlusion of treated vein with intact patency of common femoral vein, and ambulate patient immediately."
    ],
    "complications": [
      "Superficial phlebitis / localized inflammatory erythema along treated vein track (5-10%)",
      "Thrombus extension into deep system / Endovenous Glue-Induced Thrombosis (EGIT) (< 1%)",
      "Hypersensitivity / foreign-body allergic reaction to cyanoacrylate (< 0.5%)",
      "Transient skin pigmentation or telangiectatic matting (1-2%)"
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic India Pvt Ltd (+91 98290 88234)",
      "SMS Central Pharmacy Daycare Store (+91 141 2560291)"
    ]
  },
  {
    "id": "venous-foam-sclerotherapy-ugfs",
    "name": "Ultrasound-Guided Foam Sclerotherapy (UGFS) for Varicose Tributaries & Perforators",
    "category": "Superficial Venous Interventions",
    "code": "2849-VN011A",
    "rghsCode": "492 / 14",
    "icd10": "I83.892 (Varicose veins of left lower extremity with other complications)",
    "indications": [
      "Tortuous superficial varicose tributary clusters refractory to or unsuitable for endovenous catheter traversal",
      "Recurrent varicose veins following previous surgical stripping or thermal ablation",
      "Venous stasis ulceration (CEAP C6) surrounding incompetent perforating veins needing rapid obliteration"
    ],
    "preOpCriteria": [
      "Standing venous color Doppler ultrasound mapping of varicose tributary networks and refluxing perforators",
      "Negative history of symptomatic patent foramen ovale (PFO), transient ischemic attack, or severe migraine with aura",
      "Absence of acute superficial or deep venous thrombophlebitis"
    ],
    "hardware": [
      {
        "category": "Sclerosant Drug",
        "name": "Sodium Tetradecyl Sulfate (STS) 3% (Fibrovein / Setrol)",
        "spec": "2 mL ampoules, detergent sclerosant",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Foam Formulation Set",
        "name": "Tessari 3-Way Stopcock System",
        "spec": "Two 5 mL luer-lock silicone-free syringes with 0.2 um air filter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Needles",
        "name": "23G - 25G Scalp Vein / Butterfly Needles",
        "spec": "Short tubing, ultra-thin wall",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Compression Bandages",
        "name": "Multi-layer Short Stretch Compression Bandages",
        "spec": "10 cm x 5 m elastic cohesive bandage",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with treated limb elevated 30 degrees to empty superficial venous pools.",
      "Prepare microfoam using Tessari technique: 1 part 3% Sodium Tetradecyl Sulfate mixed with 4 parts room air via 20 rapid pump cycles across 3-way stopcock until dense, velvety white foam is obtained.",
      "Under direct ultrasound visualization, cannulate target varicose clusters or perforator veins with 23G/25G needle.",
      "Confirm intraluminal position by subtle blood flashback; slowly inject 2 to 4 mL of dense microfoam under real-time ultrasound monitoring.",
      "Observe acoustic shadow of foam displacing blood column and inducing immediate intense endovenous spasm.",
      "Apply immediate external eccentric compression pad over treated clusters; maintain total foam volume below 10 mL per session to minimize systemic embolization.",
      "Apply graduated Class II elastic stocking or multi-layer compression bandage; advise patient to walk continuously for 30 minutes."
    ],
    "complications": [
      "Skin hyperpigmentation / hemosiderin staining along treated vein track (10-20%)",
      "Transient visual disturbances / scotoma or migraine-like headache due to microbubble paradox (< 1.5%)",
      "Superficial thrombophlebitis requiring anti-inflammatory analgesia (3-5%)",
      "Cutaneous necrosis from accidental extravasation (< 0.2%)"
    ],
    "maayTariffInr": 18000,
    "vendorContacts": [
      "Jaipur Surgical & Pharma Distributors (+91 98291 44556)",
      "STD Pharmaceutical / Indian Agent (+91 98290 11223)"
    ]
  },
  {
    "id": "venous-perforator-sclero-glue",
    "name": "Incompetent Venous Perforator Sclerotherapy & Cyanoacrylate Glue Closure",
    "category": "Superficial Venous Interventions",
    "code": "2849-VN012A",
    "rghsCode": "492 / 15",
    "icd10": "I87.2 (Venous insufficiency chronic peripheral) / I83.018",
    "indications": [
      "Pathological incompetent calf perforating veins (Cockett, Boyd, or Dodd perforators > 3.5 mm diameter, reflux > 0.35 s)",
      "Active or recurrent venous stasis ulcers (CEAP C5/C6) situated directly above or adjacent to refluxing perforators",
      "Refractory lipodermatosclerosis and gaiter-zone venous eczema not healing with compression alone"
    ],
    "preOpCriteria": [
      "Duplex ultrasound mapping precisely marking fascial defect location and measuring perforator depth and angle",
      "Documented patency of adjacent deep posterior tibial and peroneal veins",
      "Absence of active cellulitis at the planned puncture site"
    ],
    "hardware": [
      {
        "category": "Tissue Adhesive",
        "name": "N-Butyl Cyanoacrylate (Histoacryl / Glubran 2)",
        "spec": "1 mL ampoule pure surgical tissue glue",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Lipiodol Vehicle",
        "name": "Lipiodol Ultra-Fluid Contrast",
        "spec": "10 mL ampoule iodized ethyl esters of poppyseed oil",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Puncture Needle",
        "name": "21G - 22G Echogenic Spinal Needle",
        "spec": "7 cm length with echogenic marker tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Flush Solution",
        "name": "Dextrose 5% in Water (D5W)",
        "spec": "100 mL non-ionic flush solution",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with slight leg elevation; identify incompetent perforator piercing muscular fascia under high-frequency linear US.",
      "Administer 1-2 mL 1% lignocaine in subcutaneous tissue adjacent to but not compressing the perforator.",
      "Introduce 21G echogenic needle under continuous transverse sonographic guidance directly into the subfascial perforating stalk.",
      "Confirm intravascular entry by gentle blood aspiration; thoroughly flush needle with 2 mL non-ionic D5W to eliminate ionic blood elements.",
      "Apply firm compression on the adjacent deep vein using ultrasound probe to guard against deep migration.",
      "Slowly inject 0.2 to 0.4 mL of 1:1 mixture of NBCA and Lipiodol into the perforator lumen under direct real-time imaging.",
      "Maintain probe pressure for 60 seconds; immediately retract needle and verify instantaneous echogenic cast formation and Doppler flow cessation.",
      "Apply local pressure dressing followed by knee-high graduated compression bandage."
    ],
    "complications": [
      "Deep vein thrombosis from non-target glue spill into posterior tibial/peroneal veins (< 1%)",
      "Localized inflammatory foreign-body granuloma or tenderness (3-5%)",
      "Skin extrusion of polymerized glue droplet after several months (< 1%)",
      "Residual or recurrent perforator reflux requiring repeat sclerotherapy (5%)"
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "B. Braun Medical India (+91 98292 66778)",
      "Guerbet India Pvt Ltd (+91 98290 12345)"
    ]
  },
  {
    "id": "gsv-endovenous-laser-rfa-glue",
    "name": "Great Saphenous Vein (GSV) Truncal Multi-Modal Ablation (EVLA / RFA / Glue)",
    "category": "Superficial Venous Interventions",
    "code": "2849-VN013A",
    "rghsCode": "492 / 01",
    "icd10": "I83.92 (Varicose veins of left lower extremity) / I83.812",
    "indications": [
      "Truncal Great Saphenous Vein incompetence (saphenofemoral junction reflux > 0.5 s, trunk diameter 4 - 15 mm)",
      "CEAP Clinical Class C2 to C6 chronic venous disease with significant heaviness, ache, edema, or active ulcer",
      "Refractory venous stasis dermatitis or bleeding from calf varicosities originating from GSV reflux"
    ],
    "preOpCriteria": [
      "Preoperative detailed ultrasound standing mapping noting GSV caliber at SFJ, mid-thigh, and knee",
      "Verification of normal patency and respiratory phasicity of common femoral and deep femoral veins",
      "Assessment of skin integrity; absence of acute ascending superficial phlebitis"
    ],
    "hardware": [
      {
        "category": "Laser System",
        "name": "1470 nm Radial Fiber Laser Set (or ClosureFast RFA Catheter)",
        "spec": "2-ring radial emission fiber, 0.035 wire compatible",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Access Sheath",
        "name": "6F 11 cm Introducer Sheath",
        "spec": "Hemostatic valve, radiopaque marker",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Tumescent Infusion",
        "name": "Tumescent Infiltration Pump & Needle Set",
        "spec": "18G spinal / Klein needle with peristaltic tubing",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Anesthetic Mixture",
        "name": "Klein Tumescent Anesthetic Solution",
        "spec": "500 mL normal saline + 2% lignocaine 30 mL + adrenaline 1:1000 0.5 mL + 8.4% NaHCO3 10 mL",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Perform ultrasound-guided micro-puncture of GSV at knee or mid-calf; advance 0.035 guidewire into pelvic veins.",
      "Introduce 6F vascular sheath; advance radial 1470 nm laser fiber (or 7F ClosureFast RFA catheter) up to saphenofemoral junction.",
      "Accurately position active fiber tip exactly 2.0 to 2.5 cm distal to the SFJ, safely distal to the superficial epigastric vein confluence under transverse and sagittal US view.",
      "Infiltrate 250 - 400 mL cold tumescent local anesthesia solution into the perivenous saphenous sheath along the entire treated length under US guidance (producing circumferential echolucent halo sign).",
      "Confirm vein collapse around the fiber and verify safe distance (> 10 mm) from skin and saphenous nerve.",
      "Activate 1470 nm laser generator at 7-8 Watts, delivering continuous pullback at 1 mm/s to achieve 60 - 80 J/cm Linear Endovenous Energy Density (LEED) (or 2 cycles at 120 deg C for RFA).",
      "Perform immediate post-ablation Doppler ultrasound demonstrating non-compressible, thickened, occluded GSV with patent common femoral vein flow.",
      "Apply sterile dressing and Class II graduated compression stocking; ambulate patient immediately."
    ],
    "complications": [
      "Endovenous Heat-Induced Thrombosis (EHIT Class 1-4) (0.5-2%)",
      "Saphenous nerve transient sensory paresthesia / numbness (2-4%)",
      "Superficial thrombophlebitis along treated segment (3-5%)",
      "Skin thermal injury / burn (prevented by adequate tumescence, < 0.1%)"
    ],
    "maayTariffInr": 32000,
    "vendorContacts": [
      "Biolitec India Medical (+91 98297 88990)",
      "Medtronic ClosureFast Vascular (+91 98290 88234)"
    ]
  },
  {
    "id": "ssv-endovenous-laser-rfa-glue",
    "name": "Small Saphenous Vein (SSV) Truncal Endovenous Ablation (EVLA / RFA / Glue)",
    "category": "Superficial Venous Interventions",
    "code": "2849-VN014A",
    "rghsCode": "492 / 02",
    "icd10": "I83.93 (Varicose veins of bilateral lower extremities) / I83.893",
    "indications": [
      "Incompetent Small Saphenous Vein (SSV) with saphenopopliteal junction (SPJ) reflux > 0.5 s causing posterior calf varices",
      "Venous stasis ulceration over lateral malleolus (CEAP C6) fed by incompetent SSV reflux column",
      "Painful posterior calf heaviness and aching exacerbated by standing"
    ],
    "preOpCriteria": [
      "Duplex ultrasound mapping in prone position detailing SPJ confluence into popliteal vein and relationship to sural nerve",
      "Identification of cranial extension of SSV (Giacomini vein) if present",
      "Documentation of popliteal and tibial deep vein patency"
    ],
    "hardware": [
      {
        "category": "Laser System",
        "name": "1470 nm Radial Emission Laser Fiber",
        "spec": "Slim radial fiber, 0.035 wire compatible",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Access Kit",
        "name": "5F Micro-Introducer Vascular Sheath Set",
        "spec": "11 cm, 21G echogenic needle",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Tumescent Equipment",
        "name": "Hydrodissection Tumescent Infusion Kit",
        "spec": "500 mL cold buffered saline with 1% lignocaine & adrenaline",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Hydrophilic Angle Guidewire",
        "spec": "150 cm Glidewire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Position patient prone on the procedure table with foot elevated on a supportive foam pad.",
      "Cannulate distal SSV at mid-to-lower calf or just superior to lateral malleolus under ultrasound guidance using 21G needle.",
      "Advance 0.035 wire and 5F sheath into the popliteal vein; introduce radial laser fiber.",
      "Carefully position laser tip exactly 2.0 cm distal to the saphenopopliteal junction (SPJ) under strict duplex imaging to protect popliteal vein.",
      "Perform generous perivenous tumescent hydrodissection, specifically separating the SSV from the intimately adherent sural nerve in the middle/lower calf.",
      "Deliver 1470 nm laser energy at 5-6 Watts with controlled continuous pullback (50 - 60 J/cm LEED).",
      "Re-examine SPJ and popliteal vein with color Doppler to confirm total SSV occlusion and unimpeded popliteal venous flow without thrombus protrusion.",
      "Place sterile adhesive dressing and apply thigh-length Class II graduated compression stocking."
    ],
    "complications": [
      "Sural nerve thermal injury causing lateral foot sensory paresthesia (1-3%)",
      "Endovenous heat-induced thrombosis (EHIT) into popliteal vein (< 1%)",
      "Popliteal vein thermal injury (mitigated by strictly maintaining 2.0 cm margin from SPJ)",
      "Superficial thrombophlebitis in residual calf tributaries (2-4%)"
    ],
    "maayTariffInr": 30000,
    "vendorContacts": [
      "Biolitec India Medical (+91 98297 88990)",
      "Cath Lab Consumables Store Jaipur (+91 141 2560291)"
    ]
  },
  {
    "id": "varicose-vein-embolization-glue",
    "name": "Varicose Vein & Pelvic Leak Embolization Using Cyanoacrylate Glue",
    "category": "Superficial Venous Interventions",
    "code": "2849-VN015A",
    "rghsCode": "492 / 16",
    "icd10": "I86.2 (Pelvic varices) / I83.90",
    "indications": [
      "Pelvic venous disorders / pelvic congestion syndrome with vulvar, perineal, or atypical upper thigh varicose veins",
      "Incompetent internal iliac vein tributaries (obturator, internal pudendal, uterine) causing recurrent leg varicosities",
      "High-flow tortuous varicose venous nests unsuitable for catheter-based ablation"
    ],
    "preOpCriteria": [
      "Pelvic MR venography or contrast CT demonstrating dilated (> 6 mm) tortuous pelvic and ovarian venous plexuses",
      "Diagnostic selective pelvic venography confirming retrograde reflux into perineal/thigh collaterals",
      "Normal renal parameters and coagulation profile"
    ],
    "hardware": [
      {
        "category": "Tissue Adhesive",
        "name": "Glubran 2 / Histoacryl NBCA Medical Glue",
        "spec": "1 mL ampoules cyanoacrylate surgical adhesive",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule iodized poppyseed oil",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat / Cantata Microcatheter Set",
        "spec": "130 cm length with 0.014 Glidewire GT",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guiding Sheath",
        "name": "6F 45 cm - 65 cm Guiding Sheath / MPA Catheter",
        "spec": "Flexor / Destination sheath",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Flush",
        "name": "Dextrose 5% Water (D5W)",
        "spec": "Non-ionic flush vials",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Obtain right common femoral vein access under ultrasound guidance; place 6F 45 cm vascular guiding sheath.",
      "Cannulate ipsilateral/contralateral internal iliac vein branch or ovarian vein using 5F Cobra/MPA catheter.",
      "Perform selective roadmap venography during Valsalva maneuver to delineate pelvic escape points and dependent varicose clusters.",
      "Co-axially advance 2.7F microcatheter superselectively into the nidus of the incompetent pelvic tributary.",
      "Flush microcatheter thoroughly with 10 mL 5% Dextrose in Water to remove all ionic blood residues that could polymerize glue prematurely.",
      "Under live fluoroscopic roadmapping, slowly inject 1:1 to 1:2 mixture of NBCA glue and Lipiodol into the target varicose nest until complete cast filling occurs.",
      "Aspirate and instantly withdraw microcatheter immediately after injection to avoid catheter gluing within the vessel.",
      "Perform completion venography via parent catheter confirming complete obliteration of pelvic reflux pathways."
    ],
    "complications": [
      "Non-target embolization of glue droplets to pulmonary arterial circulation (< 1%)",
      "Post-embolization thrombophlebitic pelvic pain and transient low-grade fever (10-15%)",
      "Microcatheter adhesion / retention requiring intervention (< 0.2%)",
      "Groin puncture site hematoma (1-2%)"
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "GEM Italy / Indian Surgical Agency (+91 98291 55678)",
      "Terumo Interventional India (+91 98292 33445)"
    ]
  },
  {
    "id": "varicose-vein-embolization-coils",
    "name": "Varicose Vein & Incompetent Venous Channel Embolization Using Coils",
    "category": "Superficial Venous Interventions",
    "code": "2849-VN016A",
    "rghsCode": "492 / 17",
    "icd10": "I86.2 (Pelvic varices) / I83.89",
    "indications": [
      "Ovarian vein incompetence with reflux causing severe pelvic congestion syndrome and vulvar varicosities",
      "Large (> 8 mm) incompetent internal iliac tributary veins feeding leg varices",
      "Massive atypical perforators or venous aneurysm sacs requiring mechanical cross-sectional occlusion"
    ],
    "preOpCriteria": [
      "Contrast-enhanced CT or MR venogram defining ovarian vein diameter and competent/incompetent valve morphology",
      "Multidisciplinary exclusion of primary gynecologic pathology as cause of pelvic pain",
      "Normal platelet count and coagulation status"
    ],
    "hardware": [
      {
        "category": "Embolic Coils",
        "name": "0.035-inch Fibered Pushable & Detachable Coils",
        "spec": "Cook Nester / Boston Interlock 8 mm to 16 mm diameters",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Cobra C2 / MPA / Simmons Catheter",
        "spec": "100 cm length, 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Vascular Sheath",
        "name": "6F 45 cm - 90 cm Long Introducer Sheath",
        "spec": "Flexor / Ansel guiding sheath",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guidewires",
        "name": "0.035-inch Amplatz Super Stiff & Glidewire",
        "spec": "260 cm length, 1 cm floppy tip",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Puncture right common femoral vein or right internal jugular vein; place 6F long guiding sheath.",
      "Engage target left or right ovarian vein (or branch of internal iliac vein) using 5F Cobra/MPA catheter.",
      "Advance catheter into the distal pelvic segment of the vein; perform selective venogram with Valsalva maneuver.",
      "Deploy anchoring framing coil sized 20 - 30% larger than vein caliber at the distal-most target segment above the pelvic inlet.",
      "Pack dense nested fibered microcoils and macrocoils in stacked configuration to create an occlusive thrombogenic mesh.",
      "Gradually withdraw catheter cranial-ward, deploying additional coils along the mid-and-proximal third of the ovarian vein to within 2 cm of renal vein confluence.",
      "Perform completion venogram after 10 minutes confirming total flow cessation and absence of distal pelvic filling.",
      "Remove vascular sheath and achieve puncture site hemostasis via manual compression."
    ],
    "complications": [
      "Coil migration into left renal vein, IVC, or pulmonary artery (< 1%)",
      "Transient flank, back, or pelvic pain secondary to venous thrombosis (15-25%)",
      "Venous wall perforation / extravasation during coil positioning (< 1%)",
      "Recurrent reflux via collateral venous channels (5-8%)"
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Boston Scientific India (+91 98290 66778)"
    ]
  },
  {
    "id": "varicose-vein-embolization-glue-coils",
    "name": "Varicose Vein & Tributary Embolization with Combined Glue & Coils (Sandwich Technique)",
    "category": "Superficial Venous Interventions",
    "code": "2849-VN017A",
    "rghsCode": "492 / 18",
    "icd10": "I86.2 (Pelvic varices) / I83.2",
    "indications": [
      "High-flow complex pelvic varicosities with wide-caliber draining veins at risk of liquid embolic spillover",
      "Aneurysmal incompetent ovarian veins (> 12 mm) where coils alone carry high risk of recanalization",
      "Massive recurrent varicose conduits fed by deep pelvic venous malformations or collaterals"
    ],
    "preOpCriteria": [
      "Multi-detector CT venography detailing inflow, nidus, and outflow venous pathways",
      "Adequate baseline renal function for iodinated contrast load",
      "Confirmed informed consent for multi-modality embolotherapy"
    ],
    "hardware": [
      {
        "category": "Detachable Coils",
        "name": "0.018 - 0.035 inch Detachable Metallic Coils",
        "spec": "Boston Interlock / Medtronic Concerto (8 mm - 16 mm)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Tissue Adhesive",
        "name": "N-Butyl Cyanoacrylate (Glubran 2 / Histoacryl)",
        "spec": "1 mL ampoules pure surgical glue",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter System",
        "name": "2.7F Progreat / Cantata Microcatheter",
        "spec": "130 cm length with 0.014 steerable guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Contrast Vehicle",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Access Sheath",
        "name": "6F 55 cm - 90 cm Guiding Sheath",
        "spec": "Shuttle / Flexor sheath",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Establish transjugular or transfemoral access; navigate 6F guiding sheath into the incompetent ovarian or hypogastric vein.",
      "Coaxially advance 2.7F microcatheter through sheath to the distal-most dependent pelvic varicose tributary.",
      "Deploy distal mechanical coil nest (1 to 2 detachable coils) to establish a mechanical scaffold barrier preventing downstream glue embolization.",
      "Flush microcatheter with 10 mL non-ionic 5% Dextrose in Water to clear ionic blood.",
      "Under fluoroscopic subtraction roadmapping, inject 1 to 2 mL of 1:1.5 NBCA-Lipiodol emulsion directly into the intervening variceal nest between coils.",
      "Rapidly retract microcatheter into sheath; advance 5F catheter to the proximal segment of the vein.",
      "Deploy proximal capping coils to complete the Sandwich occlusion, trapping the glue cast and ensuring absolute cross-sectional mechanical and chemical stasis.",
      "Perform completion venography confirming total exclusion of the variceal complex and stability of embolic material."
    ],
    "complications": [
      "Accidental catheter entrapment during glue delivery (< 0.5%)",
      "Non-target embolic migration through collateral channels (< 1%)",
      "Post-embolization inflammatory pain syndrome (15-20%)",
      "Puncture site hematoma or pseudoaneurysm (< 1%)"
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 66778)",
      "Terumo Interventional India (+91 98292 33445)"
    ]
  },
  {
    "id": "budd-chiari-collateral-embo-glue",
    "name": "Budd-Chiari Syndrome: Collateral & Variceal Embolization Using Cyanoacrylate Glue",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB040",
    "rghsCode": "693 / 35",
    "icd10": "I82.0 (Budd-Chiari syndrome) / I85.01 (Esophageal varices with bleeding)",
    "indications": [
      "Budd-Chiari syndrome with massive bleeding gastroesophageal varices or ectopic peristomal/duodenal varices refractory to endoscopic band ligation",
      "Prominent systemic collateral pathways diverting portal and hepatic blood flow, compromising effective hepatic parenchymal perfusion",
      "Pre- or post-TIPS/DIPS persistence of high-risk variceal channels with persistent portosystemic pressure gradient"
    ],
    "preOpCriteria": [
      "Triphasic abdominal CT or MR venography detailing hepatic vein occlusion, IVC caliber, and precise variceal/collateral anatomy",
      "Platelets >= 50,000/uL, INR <= 1.6; PRBC and FFP matched and available in blood bank",
      "Endotracheal intubation if ongoing active upper GI hematemesis or hepatic encephalopathy"
    ],
    "hardware": [
      {
        "category": "Tissue Adhesive",
        "name": "N-Butyl Cyanoacrylate (Histoacryl / Glubran 2)",
        "spec": "1 mL ampoules pure surgical monomer adhesive",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Contrast Vehicle",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule iodized poppyseed oil",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Microcatheter System",
        "name": "2.4F / 2.7F Progreat Microcatheter Set",
        "spec": "130 cm length with 0.014 steerable Glidewire GT",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guiding Sheath",
        "name": "7F 45 cm Flexor / Destination Guiding Sheath",
        "spec": "7F, radiopaque tip, high torque control",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Flush Solution",
        "name": "Dextrose 5% in Water (D5W)",
        "spec": "Non-ionic flush vials",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Obtain ultrasound-guided right internal jugular vein or transhepatic portal vein access; place 7F vascular sheath.",
      "Navigate into the portal venous circulation (transhepatic, transjugular via TIPS/DIPS, or trans-splenic route).",
      "Perform portal and collateral roadmapping venogram identifying the feeding left gastric, posterior gastric, or short gastric variceal trunks.",
      "Coaxially advance 2.4F/2.7F microcatheter superselectively into the dependent nidus of the variceal complex, well past any normal portal branches.",
      "Thoroughly flush microcatheter with 10 mL non-ionic 5% Dextrose in Water to clear all ionic blood and saline residues.",
      "Prepare NBCA-Lipiodol emulsion in a 1:1.5 to 1:3 ratio based on flow velocity; inject slowly under continuous fluoroscopic subtraction subtraction until complete filling of the variceal channels is achieved.",
      "Aspirate microcatheter and retract rapidly from the sheath in one continuous motion to prevent catheter entrapment in the polymerization matrix.",
      "Perform completion portal venography demonstrating complete occlusion of the varices with preserved flow in main portal branches."
    ],
    "complications": [
      "Non-target glue embolization to pulmonary vascular bed (< 1.5%)",
      "Catheter tip adherence / fracture in portal venous system (< 0.5%)",
      "Transient worsening of ascites or portal hypertension if main outflow is compromised (< 2%)",
      "Puncture site hematoma or hemoperitoneum (1-3%)"
    ],
    "maayTariffInr": 62000,
    "vendorContacts": [
      "B. Braun Medical India (+91 98292 66778)",
      "Terumo Interventional India (+91 98292 33445)"
    ]
  },
  {
    "id": "budd-chiari-collateral-embo-coils",
    "name": "Budd-Chiari Syndrome: Spontaneous Shunt & Collateral Embolization Using Coils",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB041",
    "rghsCode": "693 / 36",
    "icd10": "I82.0 (Budd-Chiari syndrome) / K76.6 (Portal hypertension)",
    "indications": [
      "Large spontaneous splenorenal, gastrorenal, or retroperitoneal collaterals causing portal flow steal and recurrent severe hepatic encephalopathy",
      "High-flow collateral shunts causing ineffective liver perfusion and failure of clinical improvement following TIPS or DIPS",
      "Aneurysmal variceal draining channels with imminent rupture risk in chronic Budd-Chiari syndrome"
    ],
    "preOpCriteria": [
      "CT portography confirming shunt anatomy, diameter (> 10 mm), and absence of cavernous portal vein transformation that relies solely on shunt",
      "Documentation of hepatic functional reserve (CTP score, Rotterdam BCS-PI)",
      "Correction of severe coagulopathy (Platelets > 50,000/uL, INR < 1.7)"
    ],
    "hardware": [
      {
        "category": "Detachable Coils",
        "name": "0.035-inch Detachable & Fibered Pushable Coils",
        "spec": "Cook Nester / Boston Interlock 10 mm to 20 mm",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Vascular Sheath",
        "name": "7F - 8F 45 cm Guiding Sheath",
        "spec": "Flexor / Ansel braided sheath",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Cobra C2 / Renal Double Curve (RDC) Catheter",
        "spec": "100 cm length, 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewires",
        "name": "0.035-inch Amplatz Super Stiff & Stiff Glidewires",
        "spec": "260 cm length, 1 cm floppy tip",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Establish right femoral vein or right internal jugular vein access; advance 7F/8F guiding sheath into the left renal vein or collateral drainage point.",
      "Cannulate the spontaneous splenorenal or gastrorenal shunt using 5F Cobra/RDC catheter.",
      "Perform selective baseline digital subtraction venography and measure pressure gradients across the shunt.",
      "Size the target landing zone precisely; select first detachable coil 20 - 30% larger than maximum shunt diameter.",
      "Deploy and detach anchoring coil under fluoroscopy, verifying absolute stability without distal migration into the IVC.",
      "Pack subsequent dense fibered thrombogenic coils within the scaffold until complete flow arrest is visualized.",
      "Wait 10 minutes; repeat selective venography confirming complete mechanical occlusion of the shunt.",
      "Measure post-embolization portal pressure; remove sheaths and apply manual compression hemostasis."
    ],
    "complications": [
      "Coil migration through the shunt into the left renal vein, IVC, or heart (< 1%)",
      "Acute increase in portal venous pressure triggering variceal hemorrhage (3-5%)",
      "Splenic infarction or left flank pain following splenorenal shunt closure (2-4%)",
      "Access site hematoma or pseudoaneurysm (1-2%)"
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Boston Scientific India (+91 98290 66778)"
    ]
  },
  {
    "id": "budd-chiari-collateral-embo-glue-coils",
    "name": "Budd-Chiari Syndrome: Complex Variceal & Shunt Embolization with Combined Glue & Coils",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB042",
    "rghsCode": "693 / 37",
    "icd10": "I82.0 (Budd-Chiari syndrome) / I85.01 / K76.6",
    "indications": [
      "Wide-caliber, high-flow hypertensive portosystemic collateral shunts where neither coils nor glue alone offer safe, complete occlusion",
      "Refractory hepatic encephalopathy and recurrent variceal hemorrhage in post-TIPS/DIPS Budd-Chiari patients with massive gastrorenal shunts",
      "Ectopic retroperitoneal / stomal varices with large outflow veins draining directly into the systemic cava"
    ],
    "preOpCriteria": [
      "Comprehensive multi-phase CT or MR portography measuring shunt flow dynamics, inflow and outflow diameters",
      "Baseline HVPG and direct portal venous pressure measurements",
      "Cross-matched blood products available; baseline renal panel and coagulogram verified"
    ],
    "hardware": [
      {
        "category": "Detachable Coils",
        "name": "0.018 - 0.035 inch Interlocking Detachable Coils",
        "spec": "Boston Interlock / Medtronic Concerto (10 mm - 18 mm)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Tissue Adhesive",
        "name": "N-Butyl Cyanoacrylate (Glubran 2 / Histoacryl)",
        "spec": "1 mL ampoules pure medical adhesive",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Contrast Vehicle",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat / Cantata Microcatheter",
        "spec": "130 cm length with 0.014 steerable wire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guiding Sheath",
        "name": "7F 45 cm - 65 cm Braided Guiding Sheath",
        "spec": "Flexor / Shuttle sheath",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Establish transjugular or transfemoral access; position 7F guiding sheath at the outflow of the collateral shunt under fluoroscopic roadmap.",
      "Advance 2.7F microcatheter coaxially into the variceal outflow channel.",
      "Deploy distal anchoring detachable coils to create a compact mechanical basket/dam at the systemic outflow junction.",
      "Flush microcatheter thoroughly with 10 mL non-ionic 5% Dextrose in Water to remove all ionic blood residue.",
      "Inject 2 to 4 mL of 1:1.5 NBCA-Lipiodol emulsion directly into the variceal nidus upstream of the coil dam under continuous fluoroscopy.",
      "Immediately withdraw microcatheter to prevent glue adherence to the device.",
      "Deploy additional proximal coils (Sandwich configuration) within the inflow feeding channel to lock the cast and prevent re-canalization.",
      "Perform completion portal and collateral angiography verifying absolute flow cessation and absence of non-target embolic migration."
    ],
    "complications": [
      "Non-target glue or coil migration to systemic venous circulation (< 1%)",
      "Microcatheter entrapment in glue cast (< 0.5%)",
      "Post-embolization syndrome (fever, RUQ pain, transient transaminase rise) (15-25%)",
      "Transient elevation in portal hypertension requiring paracentesis (3-5%)"
    ],
    "maayTariffInr": 72000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 66778)",
      "Terumo Interventional India (+91 98292 33445)"
    ]
  },
  {
    "id": "ivc-balloon-cavoplasty-budd-chiari",
    "name": "Inferior Vena Cava (IVC) Balloon Cavoplasty for Budd-Chiari Web / Membrane",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB043",
    "rghsCode": "693 / 38",
    "icd10": "I82.0 (Budd-Chiari syndrome) / I87.1 (Compression of vein)",
    "indications": [
      "Membranous or short-segment focal web-like obstruction of the suprahepatic or retrohepatic Inferior Vena Cava in Budd-Chiari syndrome",
      "Severe lower extremity edema, prominent abdominal wall caput medusae, and hepatomegaly secondary to caval outflow obstruction",
      "IVC pressure gradient > 5-10 mmHg across the retrohepatic / suprahepatic stenosis"
    ],
    "preOpCriteria": [
      "Cavography and abdominal CT documenting focal web/membrane with proximal caval dilatation",
      "Measurement of right atrial and infrahepatic IVC pressures",
      "Normal coagulation parameters (INR <= 1.5, Platelets >= 60,000/uL)"
    ],
    "hardware": [
      {
        "category": "High Pressure Balloon",
        "name": "Large-Bore High Pressure PTA Balloon (XXL / Atlas Gold)",
        "spec": "18 mm to 24 mm diameter x 40 mm length, 0.035 wire compatible",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Vascular Sheath",
        "name": "10F - 12F 11 cm - 25 cm Femoral Introducer Sheath",
        "spec": "Check-Flo / Radiofocus sheath",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guidewires",
        "name": "0.035-inch Amplatz Extra-Stiff / Super Stiff Guidewire",
        "spec": "260 cm length, 1 cm floppy tip",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Inflation Device",
        "name": "30 atm High-Pressure Endoflator / Syringe",
        "spec": "Calibrated pressure gauge",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Obtain ultrasound-guided right common femoral vein access; place 10F/12F introducer sheath.",
      "Advance 5F pigtail catheter into infrahepatic IVC; perform inferior vena cavogram in AP and lateral projections.",
      "Measure pull-through pressure gradient across the membranous obstruction into the right atrium.",
      "Cross the central fenestration or pinhole membrane using 0.035 hydrophilic wire and 5F multipurpose catheter into the superior vena cava/right atrium.",
      "Exchange for an Amplatz Super Stiff 0.035 guidewire anchored securely in the SVC.",
      "Advance large-diameter (18 mm to 24 mm) non-compliant angioplasty balloon across the caval membrane.",
      "Inflate balloon with 50:50 contrast-saline mixture under fluoroscopy until complete effacement of the waist is observed.",
      "Perform completion cavography and pullback manometry confirming gradient abolition (< 2-3 mmHg) and brisk unobstructed caval flow into the heart."
    ],
    "complications": [
      "IVC rupture / intraperitoneal extravasation (< 1%, emergency covered stent standby required)",
      "Pulmonary embolism from dislodged chronic thrombus overlying membrane (< 1%)",
      "Transient cardiac arrhythmia during wire manipulation in right atrium (2-4%)",
      "Restenosis requiring repeat dilatation or stent placement (10-15%)"
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 66778)",
      "Becton Dickinson India (+91 98291 33221)"
    ]
  },
  {
    "id": "sharp-recanalization-occluded-hepatic-veins",
    "name": "Percutaneous Sharp Recanalization of Completely Occluded Hepatic Veins",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB044",
    "rghsCode": "693 / 39",
    "icd10": "I82.0 (Budd-Chiari syndrome)",
    "indications": [
      "Complete chronic flush occlusion of hepatic venous ostia with failure of conventional blunt hydrophilic guidewire recanalization",
      "Intractable ascites and congestive hepatopathy in Budd-Chiari syndrome with patent intrahepatic venous trunks disconnected from IVC",
      "Preservation of native hepatic venous drainage to avoid TIPS in young patients with preserved liver synthetic function"
    ],
    "preOpCriteria": [
      "Triphasic CT / MR showing length of occlusion between intrahepatic vein stump and IVC (< 20 mm)",
      "Transjugular and transhepatic dual access planned with biplane fluoroscopy and ultrasound support",
      "Adequate coagulogram with platelet count > 60,000/uL and INR < 1.5"
    ],
    "hardware": [
      {
        "category": "Sharp Puncture System",
        "name": "Rösch-Uchida Liver Access Set / Chiba 18G Needle / Colapinto",
        "spec": "16G/18G sharp trocar puncture needle set",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Vascular Sheaths",
        "name": "Dual Sheaths: 8F 45 cm Jugular + 6F 25 cm Transhepatic",
        "spec": "Braided radiopaque sheaths",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Target Snare",
        "name": "Amplatz GooseNeck Snare Kit",
        "spec": "10 mm - 15 mm loop snare, 0.035 compatible",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "PTA Balloon & Stent",
        "name": "Conquest PTA Balloon & Venous Stent (Venovo / Wallstent)",
        "spec": "8-10 mm balloon, 10-12 mm x 60 mm stent",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Establish dual vascular access: retrograde 8F sheath via right internal jugular vein and antegrade 6F sheath via percutaneous transhepatic route into the occluded hepatic vein branch.",
      "Perform simultaneous venograms from jugular and transhepatic sheaths in biplane fluoroscopy to align the target occluded segment.",
      "Deploy an Amplatz GooseNeck snare in the IVC via jugular sheath as a fluoroscopic target.",
      "Advance 18G sharp Chiba/Rösch-Uchida needle from the intrahepatic venous stump through the fibrous occlusive tissue directly into the center of the snare target.",
      "Confirm intraluminal IVC puncture by blood aspiration; pass 0.018/0.035 wire through needle and capture with snare in the IVC.",
      "Exteriorize wire through the jugular sheath, establishing continuous through-and-through 'flossing' access.",
      "Perform serial balloon angioplasty across the recanalized fibrous tract up to 8 - 10 mm diameter.",
      "Deploy dedicated self-expanding metallic venous stent (10 mm - 12 mm) spanning the junction into the IVC; post-dilate and verify brisk unobstructed flow."
    ],
    "complications": [
      "Capsular hepatic perforation and catastrophic intra-abdominal bleeding (2-4%)",
      "Intraperitoneal wire extravasation requiring embolization or stent-graft (< 2%)",
      "Acute stent thrombosis requiring immediate thrombolysis (2-3%)",
      "Puncture site biliary leak or biloma (< 1%)"
    ],
    "maayTariffInr": 68000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Becton Dickinson India (+91 98291 33221)"
    ]
  },
  {
    "id": "transumbilical-vein-recanalization-variceal-embo",
    "name": "Transumbilical Vein Recanalization & Variceal Embolization",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB045",
    "rghsCode": "693 / 40",
    "icd10": "K76.6 (Portal hypertension) / I85.01",
    "indications": [
      "Severe bleeding gastric or ectopic varices in portal hypertension where transhepatic and transjugular routes are anatomically contraindicated",
      "Massive abdominal wall caput medusae with bleeding peristomal or umbilical varices",
      "Direct antegrade portal access required for variceal embolization or portal vein stent placement"
    ],
    "preOpCriteria": [
      "Ultrasound and contrast CT evaluating the course, patency, and recanalizability of the ligamentum teres / paraumbilical vein",
      "Assessment of umbilical wall skin infection; normal local anatomy",
      "Platelets >= 50,000/uL, INR <= 1.5; blood products available"
    ],
    "hardware": [
      {
        "category": "Micro-Puncture Kit",
        "name": "Echogenic Micropuncture Access Set",
        "spec": "21G needle, 0.018 nitinol wire, 4F/5F coaxial dilator",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Vascular Sheath",
        "name": "5F / 6F 11 cm Introducer Sheath",
        "spec": "Hemostatic valve",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Embolic Materials",
        "name": "Pushable Fibered Coils & Gelfoam Sponge",
        "spec": "0.035 coils (6-12 mm) and calibrated slurry",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Tissue Adhesive",
        "name": "NBCA Glue (Histoacryl) & Lipiodol",
        "spec": "1 mL ampoule with 10 mL Lipiodol",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Position patient supine; sterilize periumbilical region; identify the fibrous cord of the umbilical vein entering the left portal vein under ultrasound.",
      "Infiltrate local anesthesia; puncture the patent or collapsed umbilical vein lumen 2-3 cm superior to the umbilicus using 21G echogenic needle.",
      "Pass 0.018 wire into the left portal vein branch under fluoroscopic guidance; dilate track and place 5F vascular sheath.",
      "Perform direct portal venography mapping portal vein anatomy, variceal channels, and flow direction.",
      "Catheterize the bleeding gastroesophageal or peristomal varices using 5F Cobra catheter and 2.7F microcatheter.",
      "Perform dense embolization using microcoils and 1:1 NBCA-Lipiodol glue or sclerosant foam until complete stagnation.",
      "Retract catheter back into the umbilical vein; deploy fibered coils and Gelfoam slurry along the intrahepatic umbilical track to prevent hemoperitoneum.",
      "Apply compression dressing over the periumbilical puncture site."
    ],
    "complications": [
      "Intra-abdominal hemorrhage / hemoperitoneum along track (2-4%)",
      "Acute portal vein thrombosis (< 1%)",
      "Puncture site hematoma or umbilical infection (2-3%)",
      "Inadvertent non-target portal branch embolization (< 1%)"
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Terumo Interventional India (+91 98292 33445)"
    ]
  },
  {
    "id": "parallel-tips-refractory-ascites",
    "name": "Parallel TIPS Placement for Refractory Ascites & Secondary Shunt Insufficiency",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB046",
    "rghsCode": "693 / 41",
    "icd10": "K76.6 (Portal hypertension) / R18.0 (Malignant ascites) / K70.31",
    "indications": [
      "Refractory tense ascites or persistent hydrothorax failing to resolve despite fully patent single 8-10 mm TIPS with residual portosystemic gradient (PSG) > 12 mmHg",
      "Massive portosystemic collateral shunt with incomplete decompression across primary shunt",
      "Severe Budd-Chiari syndrome with persistent severe sinusoidal congestion after single TIPS/DIPS"
    ],
    "preOpCriteria": [
      "Doppler ultrasound and multi-phase CT liver evaluating primary TIPS patency, liver volumes, and left/right portal branches",
      "Direct portosystemic gradient manometry demonstrating persistent PSG >= 12-15 mmHg",
      "Absence of severe uncontrolled hepatic encephalopathy (West Haven Grade III-IV)"
    ],
    "hardware": [
      {
        "category": "TIPS Sheath",
        "name": "10F 40 cm TIPS Introducer Sheath",
        "spec": "10F outer lumen with radiopaque marker tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Puncture Set",
        "name": "Rösch-Uchida Transjugular Liver Access Set (RUPS-100)",
        "spec": "14G stiffening cannula with 16G trocar needle",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Covered Stent-Graft",
        "name": "VIATORR TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8 mm - 10 mm diameter (6-8 cm covered + 2 cm bare)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "PTA Balloon",
        "name": "High Pressure Non-Compliant Balloon (Mustang / Conquest)",
        "spec": "8 mm x 60 mm length",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Obtain ultrasound-guided right internal jugular vein access; advance 10F TIPS sheath into the IVC.",
      "Select an alternative hepatic vein (e.g., left or middle hepatic vein) or separate IVC transcaval site if right hepatic vein already harbors primary TIPS.",
      "Perform parenchymal transjugular puncture targeting the contralateral (left or right) main portal branch under fluoroscopic guidance and indirect portogram.",
      "Aspirate portal venous blood; advance 0.035 stiff guidewire deeply into the mesenteric or splenic vein.",
      "Dilate the newly created intrahepatic parenchymal tract with 8 mm balloon.",
      "Deploy second VIATORR ePTFE-covered stent-graft spanning from the portal branch into the hepatic vein/IVC parallel to the first shunt.",
      "Perform post-dilation of second stent-graft to 8 mm; measure simultaneous right atrial and portal pressures.",
      "Confirm drop in portosystemic gradient to target (< 8-10 mmHg); close jugular access site with manual pressure."
    ],
    "complications": [
      "Severe acute hepatic encephalopathy secondary to excessive total portosystemic shunting (20-30%)",
      "Acute liver failure / ischemic hepatitis from portal steal (3-5%)",
      "Parenchymal hemoperitoneum or subcapsular hematoma (2-3%)",
      "Right heart volume overload / acute heart failure (2-4%)"
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "W.L. Gore & Associates India (+91 98290 55432)",
      "Cook Medical India (+91 98292 33445)"
    ]
  },
  {
    "id": "tips-reduction-hourglass-stent",
    "name": "TIPS Constraint / Reduction for Refractory Encephalopathy (Hourglass Stent)",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB047",
    "rghsCode": "693 / 42",
    "icd10": "K72.90 (Hepatic encephalopathy) / T82.858A",
    "indications": [
      "Severe, debilitating, medically refractory hepatic encephalopathy (West Haven Grade III-IV) following TIPS creation",
      "Rapid onset progressive liver failure or hyperbilirubinemia secondary to excessive portal flow diversion",
      "High-output cardiac failure triggered by excessive portosystemic shunt volume"
    ],
    "preOpCriteria": [
      "Clinical evaluation excluding non-shunt causes of encephalopathy (constipation, GI bleed, infection, electrolyte imbalance)",
      "Direct shunt venography and manometry measuring baseline PSG and flow velocity",
      "Pre-procedure baseline CTP and MELD scores calculated"
    ],
    "hardware": [
      {
        "category": "Reducing Stent-Graft",
        "name": "Viabahn / Fluency Covered Stent-Graft (or Dedicated Hourglass Reducer)",
        "spec": "10 mm - 12 mm diameter x 40-60 mm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Constraint Hardware",
        "name": "Pre-Mounted Suture Constrained Bare Metal Stent (Palmaz / Express)",
        "spec": "Constricted to 5 mm - 6 mm hourglass waist using 3-0 silk/prolene tie",
        "standardStore": "Central IR Store"
      },
      {
        "category": "PTA Balloons",
        "name": "Dual Non-Compliant Angioplasty Balloons",
        "spec": "5 mm and 10 mm diameter balloons",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Access Sheath",
        "name": "10F 40 cm Braided Introducer Sheath",
        "spec": "Flexor / Destination sheath",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Puncture right internal jugular vein; advance 10F sheath into the existing patent TIPS endoprosthesis.",
      "Perform direct shunt venogram and measure baseline portosystemic gradient (PSG, usually < 5-8 mmHg in overshunting).",
      "Prepare constraint device: an open-cell balloon-expandable stent (Palmaz) tied at its midsection with a 3-0 surgical suture to restrict maximum waist expansion to 5-6 mm.",
      "Mount constrained stent on 8 mm angioplasty balloon; advance inside the existing TIPS stent lumen.",
      "Inflate balloon to deploy the constrained stent, producing a stable hourglass configuration.",
      "Deploy a 10 mm covered stent-graft (Viabahn) across the hourglass framework to reline the tract and force all flow through the calibrated central constriction.",
      "Measure post-reduction PSG, ensuring a controlled increase back to 10 - 14 mmHg without precipitating acute variceal rebleeding.",
      "Perform completion portal venogram demonstrating restored hepatopetal flow to intrahepatic branches; remove jugular sheath."
    ],
    "complications": [
      "Acute recurrence of variceal hemorrhage or refractory ascites due to excessive shunt narrowing (5-10%)",
      "Complete acute thrombosis of the narrowed TIPS shunt (3-5%)",
      "Migration of the constrained stent-graft into portal vein or IVC (< 1%)",
      "Transient worsening of liver function tests (3-5%)"
    ],
    "maayTariffInr": 78000,
    "vendorContacts": [
      "W.L. Gore & Associates India (+91 98290 55432)",
      "Becton Dickinson India (+91 98291 33221)"
    ]
  },
  {
    "id": "hvpg-measurement",
    "name": "Hepatic Venous Pressure Gradient (HVPG) Measurement & Transjugular Liver Hemodynamics",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB048",
    "rghsCode": "693 / 43",
    "icd10": "K76.6 (Portal hypertension) / R94.5",
    "indications": [
      "Gold standard diagnostic quantification of sinusoidal portal hypertension in chronic liver disease (Cirrhosis, NASH, Viral Hepatitis)",
      "Risk stratification for variceal bleeding (HVPG >= 10 mmHg indicates CSPH; >= 12 mmHg predicts acute bleeding risk)",
      "Assessment of hemodynamic response to non-selective beta-blockers (NSBB) (>= 20% drop or HVPG < 12 mmHg)"
    ],
    "preOpCriteria": [
      "Fasting 4-6 hours; patient in quiet resting state without vasoactive infusions",
      "Baseline non-invasive fibrosis assessment (FibroScan / APRI / FIB-4)",
      "Ultrasound documentation of patent right internal jugular vein and hepatic veins"
    ],
    "hardware": [
      {
        "category": "Balloon Catheter",
        "name": "7F Occlusion Balloon Catheter (Berman / Edwards Swan-Ganz)",
        "spec": "7F, 80 cm length with 10 mm compliant latex balloon",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Pressure Transducer",
        "name": "Calibrated Electronic Pressure Transducer & Monitor Line",
        "spec": "Single-use sterile physiological strain-gauge transducer",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Access Kit",
        "name": "6F 11 cm Vascular Introducer Sheath",
        "spec": "Radiopaque tip with side-arm",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch J-Tip 150 cm Guidewire",
        "spec": "PTFE coated fixed core",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Obtain ultrasound-guided right internal jugular vein access; place 6F vascular sheath.",
      "Connect external pressure transducer zeroed at mid-axillary line (right atrial level) to physiological recording monitor.",
      "Navigate 7F balloon catheter into the right hepatic vein under fluoroscopy.",
      "Advance catheter into wedged position 3-4 cm from IVC junction; inflate balloon with 0.5-1.0 mL air until complete hepatic vein occlusion.",
      "Confirm wedging with 1 mL contrast injection showing parenchymal sinusoidal blush without retrograde reflux.",
      "Record Wedged Hepatic Venous Pressure (WHVP) continuously until stable plateau (>= 30-45 seconds); repeat in triplicate.",
      "Deflate balloon; measure Free Hepatic Venous Pressure (FHVP) in the hepatic vein within 1-2 cm of IVC; record in triplicate.",
      "Calculate HVPG = WHVP - FHVP; record right atrial pressure and IVC pressure; remove sheath and apply dressing."
    ],
    "complications": [
      "Transient cardiac ectopy or premature ventricular contractions during catheter passage (2-3%)",
      "Balloon rupture during wedging (< 0.5%)",
      "Hepatic vein wall extravasation / subcapsular hematoma (< 0.2%)",
      "Puncture site hematoma in the neck (1-2%)"
    ],
    "maayTariffInr": 15000,
    "vendorContacts": [
      "Edwards Lifesciences India (+91 98291 77665)",
      "SMS Cath Lab Store Jaipur (+91 141 2560291)"
    ]
  },
  {
    "id": "mesenteric-splenoportal-shunt-embolization-he",
    "name": "Mesenteric / Splenoportal Shunt Embolization for Hepatic Encephalopathy",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB049",
    "rghsCode": "693 / 44",
    "icd10": "K72.90 (Hepatic encephalopathy) / K76.6",
    "indications": [
      "Large spontaneous portosystemic shunt (mesocaval, splenorenal, inferior mesenteric-systemic) driving chronic refractory hepatic encephalopathy",
      "Recurrent hospital admissions for hyperammonemic coma in cirrhotic patients with preserved liver synthetic reserve (MELD < 15)",
      "Hepatopetal portal flow restoration to improve liver function and muscle wasting"
    ],
    "preOpCriteria": [
      "Contrast-enhanced abdominal CT portography evaluating shunt dimensions and confirming intrahepatic portal tree patency",
      "Baseline fasting serum ammonia levels and baseline psychometric hepatic encephalopathy score (PHES)",
      "Coagulation correction (INR < 1.6, Platelets > 50,000/uL)"
    ],
    "hardware": [
      {
        "category": "Vascular Plugs",
        "name": "Amplatzer Vascular Plug (AVP II / AVP 4)",
        "spec": "10 mm to 22 mm multi-layer nitinol mesh plug",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Embolic Coils",
        "name": "0.035-inch Fibered Pushable Coils (Nester)",
        "spec": "10 mm - 16 mm diameter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guiding Sheaths",
        "name": "7F - 8F 45 cm - 90 cm Guiding Sheaths",
        "spec": "Flexor / Shuttle guiding sheath",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Simmons 1 / Cobra C2 / MPA Catheter",
        "spec": "100 cm length",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Access femoral vein or transhepatic portal vein under ultrasound guidance; place 7F/8F guiding sheath.",
      "Cannulate the spontaneous mesenteric-systemic or splenorenal shunt channel under fluoroscopic roadmapping.",
      "Perform selective occlusion test using balloon catheter; measure portal pressure response (must not increase portal pressure acutely > 20 mmHg).",
      "Select an Amplatzer Vascular Plug sized 30-50% larger than the shunt landing zone.",
      "Advance delivery cable through sheath; deploy the vascular plug across the narrowest zone of the shunt.",
      "Deploy adjunctive fibered coils within the nitinol mesh to accelerate intra-mesh thrombosis.",
      "Perform follow-up angiography after 10 minutes confirming complete shunt occlusion and diversion of mesenteric blood flow into the liver.",
      "Measure final portal pressure; remove sheaths and obtain groin hemostasis."
    ],
    "complications": [
      "Acute increase in portal pressure triggering de novo variceal bleeding (5-8%)",
      "Plug migration into the inferior vena cava or right atrium (< 1%)",
      "Transient mesenteric venous congestion or bowel edema (2-4%)",
      "Groin puncture site hematoma (1-2%)"
    ],
    "maayTariffInr": 68000,
    "vendorContacts": [
      "Abbott Vascular India (+91 98290 33441)",
      "Cook Medical India (+91 98292 33445)"
    ]
  },
  {
    "id": "portal-vein-embolization-pve-ipsilateral",
    "name": "Percutaneous Portal Vein Embolization (PVE) - Ipsilateral Approach",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB050",
    "rghsCode": "693 / 45",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Induction of Future Liver Remnant (FLR) hypertrophy prior to planned major hepatectomy (right hepatectomy or extended right trisectionectomy)",
      "Standardized FLR < 20% in normal liver, < 30% in post-chemotherapy / steatotic liver, or < 40% in cirrhotic liver",
      "Prevention of Post-Hepatectomy Liver Failure (PHLF) in colorectal liver metastases or hilar cholangiocarcinoma"
    ],
    "preOpCriteria": [
      "CT volumetry calculating total functional liver volume (TFLV) and baseline standardized future liver remnant (sFLR)",
      "Triphasic CT detailing portal vein branching variants (trifurcation, separate right posterior sectoral branch)",
      "Platelets >= 60,000/uL, INR <= 1.4; absence of extrahepatic metastases"
    ],
    "hardware": [
      {
        "category": "Embolic Particulates",
        "name": "Polyvinyl Alcohol (PVA) Particles / Microspheres",
        "spec": "300 - 500 um & 500 - 710 um vials",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Tissue Adhesive",
        "name": "N-Butyl Cyanoacrylate (Histoacryl) & Lipiodol",
        "spec": "1 mL ampoule with 10 mL Lipiodol",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Vascular Plugs & Coils",
        "name": "Amplatzer Vascular Plug (AVP II) / 0.035 Fibered Coils",
        "spec": "8 mm - 12 mm plug with pushable coils",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter System",
        "name": "2.7F Progreat Microcatheter Set",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Access Kit",
        "name": "Nephrostomy / Micropuncture Set with 6F Sheath",
        "spec": "21G needle, 0.018 wire, 6F 25 cm sheath",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Perform ultrasound-guided puncture of a right peripheral portal vein branch (ipsilateral approach, preserving future liver remnant from needle trauma).",
      "Advance 0.018 wire into main portal trunk; place 6F vascular sheath; perform baseline portal portogram and pressure measurement.",
      "Catheterize right portal vein branches sequentially using 5F Cobra catheter and 2.7F microcatheter.",
      "Infuse PVA particles (300-500 um and 500-710 um) suspended in contrast into all segmental right portal branches (Segments 5, 6, 7, 8) until complete distal stasis.",
      "Occlude the right main portal trunk with an Amplatzer Vascular Plug or dense coil pack to prevent recanalization.",
      "Perform completion portography ensuring robust diversion of all portal blood flow exclusively into the left liver segments (Segments 2, 3, 4).",
      "Meticulously embolize the transhepatic puncture track with Gelfoam torpedoes, coils, or NBCA glue upon sheath withdrawal to prevent hemoperitoneum.",
      "Schedule repeat CT volumetry at 3 to 4 weeks post-procedure to evaluate FLR kinetic growth rate."
    ],
    "complications": [
      "Non-target portal embolization to future liver remnant segments (1-2%)",
      "Portal vein thrombosis extending into main trunk (< 1%)",
      "Post-PVE syndrome (mild fever, transaminitis, RUQ discomfort) (20-30%)",
      "Intra-abdominal hemorrhage along parenchymal track (1-2%)"
    ],
    "maayTariffInr": 68000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Guerbet India Pvt Ltd (+91 98290 12345)"
    ]
  },
  {
    "id": "portal-vein-embolization-pve-contralateral",
    "name": "Percutaneous Portal Vein Embolization (PVE) - Contralateral Approach",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB051",
    "rghsCode": "693 / 46",
    "icd10": "C22.0 / C78.7 (Liver malignancy)",
    "indications": [
      "Preoperative portal vein embolization when the tumor entirely replaces the right lobe, precluding safe tumor-free ipsilateral puncture",
      "Right portal vein branches acutely angulated making catheter manipulation from ipsilateral track technically impossible",
      "Extended right hepatectomy requiring simultaneous segment 4 embolization (extended PVE)"
    ],
    "preOpCriteria": [
      "CT volumetry confirming inadequate sFLR (< 20-30%)",
      "High-resolution ultrasound identifying an accessible, safe segment 2 or 3 peripheral portal branch",
      "Platelets >= 60,000/uL, normal coagulation profile"
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "Micropuncture 21G Access Set with 6F Sheath",
        "spec": "21G echogenic needle, 0.018 nitinol wire, 6F 11 cm sheath",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Particulate Embolics",
        "name": "Embozene Microspheres / PVA Particles (400-700 um)",
        "spec": "Calibrated spherical embolics",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Plugs & Coils",
        "name": "AVP II Vascular Plug & Microcoils",
        "spec": "10-14 mm plug with 0.018 microcoils",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Reverse Catheter",
        "name": "5F Reverse Curve Catheter (Simmons / Sos Omni)",
        "spec": "100 cm length",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Under ultrasound guidance, puncture a peripheral branch of the left portal vein (segment 3) avoiding central bile ducts.",
      "Advance 0.035 wire into the main portal vein; position 6F sheath; perform portal venogram.",
      "Use reverse-curve catheter (Simmons 2 / SOS Omni) to hook the origin of the right portal vein.",
      "Selectively advance microcatheter into anterior and posterior sectoral branches of the right liver.",
      "Administer particulate PVA/microspheres until peripheral vascular bed pruning is complete.",
      "Occlude the proximal right portal vein with an Amplatzer Vascular Plug or coils.",
      "Perform completion angiogram verifying brisk exclusively left-sided portal flow.",
      "Plug the parenchymal track through segment 3 with Gelfoam or microcoils during sheath removal."
    ],
    "complications": [
      "Accidental injury or dissection of the left portal vein / FLR inflow (< 1%)",
      "Subcapsular hematoma or bile leak in the future remnant (< 1.5%)",
      "PVE failure to induce adequate hypertrophy (5-8%)",
      "Transient transaminase rise (20-35%)"
    ],
    "maayTariffInr": 70000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Becton Dickinson India (+91 98291 33221)"
    ]
  },
  {
    "id": "transileocolic-portal-vein-embolization",
    "name": "Transileocolic Surgical-Radiological Portal Vein Embolization",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB052",
    "rghsCode": "693 / 47",
    "icd10": "C22.0 / C78.7 (Liver malignancy)",
    "indications": [
      "Portal vein embolization in patients undergoing simultaneous exploratory laparotomy / staging laparoscopy",
      "Failed or technically impossible percutaneous transhepatic access due to massive ascites or morbid obesity",
      "Contraindication to liver puncture due to surface metastatic implants"
    ],
    "preOpCriteria": [
      "Combined surgical and interventional radiology team coordination in hybrid OR",
      "Baseline CT volumetry documenting inadequate future liver remnant",
      "Anesthetic clearance for mini-laparotomy and general anesthesia"
    ],
    "hardware": [
      {
        "category": "Vascular Sheath",
        "name": "6F 25 cm Introducer Sheath",
        "spec": "Check-Flo / Radiofocus sheath",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolic Particulates",
        "name": "PVA Particles (355-500 um & 500-710 um)",
        "spec": "Calibrated vials",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat Microcatheter Set",
        "spec": "130 cm length with 0.014 wire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Surgical Accessories",
        "name": "Vascular Cutdown & Purse-String Sutures",
        "spec": "4-0 Prolene on small vascular needle",
        "standardStore": "OT Store"
      }
    ],
    "techniqueSteps": [
      "Under general anesthesia, surgeon performs a small 4-5 cm right lower quadrant mini-laparotomy and identifies an ileocolic mesenteric vein tributary.",
      "Place a 4-0 Prolene purse-string suture; cannulate vein and introduce 6F vascular sheath antegrade into the superior mesenteric and portal vein.",
      "Under portable or hybrid room fluoroscopy, advance catheter into the right main portal vein.",
      "Perform selective right portal embolization with PVA particles and coils/plugs identical to standard PVE.",
      "Verify complete right portal occlusion and unhindered flow to left liver remnant.",
      "Withdraw sheath; surgeon ties the purse-string suture and ligates the tributary vein.",
      "Close mini-laparotomy incision in layers; transfer patient to surgical recovery."
    ],
    "complications": [
      "Mesenteric vein thrombosis / small bowel ischemia (< 1%)",
      "Wound hematoma or surgical site infection (2-4%)",
      "Non-target portal embolization to left liver (< 1%)",
      "Post-embolization fever and pain (20-25%)"
    ],
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "SMS Hospital Central OT Store (+91 141 2560291)"
    ]
  },
  {
    "id": "transsplenic-portal-mesenteric-stenting",
    "name": "Transsplenic Portal and Mesenteric Vein Angioplasty and Stenting",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB053",
    "rghsCode": "693 / 48",
    "icd10": "I81 (Portal vein thrombosis) / K76.6",
    "indications": [
      "Chronic non-cirrhotic portal vein and superior mesenteric vein stenosis or occlusion causing intractable variceal bleeding and intestinal ischemia",
      "Post-pancreatectomy or post-liver transplant portal venous anastomotic strictures unreachable via transhepatic route",
      "Severe symptomatic portal biliopathy with extensive cavernous collateral transformation"
    ],
    "preOpCriteria": [
      "Splenic duplex and contrast CT confirming spleen volume, patent splenic vein caliber (> 5 mm), and safe subcapsular puncture route",
      "Platelet count >= 50,000/uL, INR <= 1.5; blood products available",
      "Ascites drained prior to procedure to reduce splenic capsule shearing risk"
    ],
    "hardware": [
      {
        "category": "Micropuncture Kit",
        "name": "21G Echogenic Micropuncture Access Set",
        "spec": "15 cm needle, 0.018 nitinol wire, 4F coaxial dilator",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Vascular Sheath",
        "name": "6F - 8F 25 cm - 45 cm Braided Introducer Sheath",
        "spec": "Flexor / Radiofocus sheath",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Self-Expanding Stent",
        "name": "Self-Expanding Dedicated Venous Stent (Venovo / Wallstent / Abre)",
        "spec": "10 mm - 14 mm diameter x 60 - 80 mm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Track Embolization",
        "name": "Pushable Microcoils & Gelfoam Torpedoes",
        "spec": "0.035 coils (6-8 mm)",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine; under ultrasound and fluoroscopy, identify a safe peripheral splenic parenchyma access track into a splenic vein branch.",
      "Puncture splenic vein with 21G echogenic needle; advance 0.018 wire into main splenic vein and portal vein.",
      "Exchange for 6F/8F vascular sheath; perform splenoportogram outlining stricture or occlusion.",
      "Cross the portal/mesenteric vein stenosis using 0.035 hydrophilic wire and 5F catheter.",
      "Perform pre-dilatation using 6 mm - 8 mm angioplasty balloon.",
      "Deploy dedicated self-expanding metallic venous stent (10 mm - 14 mm) across the stricture; post-dilate with non-compliant balloon.",
      "Verify brisk in-line portal flow and disappearance of collateral hypertensive pathways on completion portogram.",
      "Meticulously embolize the trans-splenic parenchymal tract with dense coils and Gelfoam during sheath withdrawal to prevent subcapsular splenic hematoma or hemoperitoneum."
    ],
    "complications": [
      "Splenic capsule rupture / delayed hemoperitoneum requiring emergency embolization or splenectomy (2-4%)",
      "Subcapsular splenic hematoma (5-8%)",
      "Stent thrombosis or migration (< 2%)",
      "Transient left pleuritic pain (10-15%)"
    ],
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Becton Dickinson India (+91 98291 33221)",
      "Boston Scientific India (+91 98290 66778)"
    ]
  },
  {
    "id": "ptbd-unilateral-right",
    "name": "Percutaneous Transhepatic Biliary Drainage (PTBD) - Right Lobe Unilateral",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB054",
    "rghsCode": "693 / 49",
    "icd10": "K83.1 (Obstruction of bile duct) / C22.1 / C24.0",
    "indications": [
      "Malignant obstructive jaundice secondary to inoperable right biliary ductal obstruction (Klatskin tumor Bismuth Type I-IIIa, cholangiocarcinoma, or metastatic nodal compression)",
      "Acute suppurative cholangitis with right intrahepatic ductal dilatation requiring emergent decompression",
      "Preoperative portal vein embolization preparation requiring deep right biliary decompression to improve remnant function"
    ],
    "preOpCriteria": [
      "MRCP or triphasic contrast CT liver defining right anterior and posterior sectoral duct dilatation",
      "Coagulation correction (Platelets >= 50,000/uL, INR <= 1.5); broad-spectrum IV antibiotics administered (e.g. Cefoperazone-Sulbactam)",
      "Correction of severe dehydration and electrolyte imbalance"
    ],
    "hardware": [
      {
        "category": "Puncture Needle",
        "name": "21G / 22G Chiba Percutaneous Access Needle",
        "spec": "15 cm - 20 cm length, echogenic tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Drainage Catheter",
        "name": "8.5F - 10.2F Ring Biliary Drainage Catheter",
        "spec": "35-40 cm length, hydrophilic coated with multiple side-holes",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewires",
        "name": "0.018 Nitinol & 0.035 Amplatz Super Stiff Guidewires",
        "spec": "0.018 60 cm and 0.035 260 cm with 1 cm floppy tip",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Access Set",
        "name": "Neff Percutaneous Access Set (NPAS-100)",
        "spec": "4F/6F co-axial dilator set",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with right arm abducted; perform local sterile preparation and drape right flank/intercostal space.",
      "Infiltrate local anesthesia from skin down to liver capsule at 10th or 11th intercostal space between mid- and anterior-axillary line.",
      "Under ultrasound guidance, puncture a peripheral segment 6 or 7 right intrahepatic bile duct using 21G Chiba needle.",
      "Aspirate bile; confirm ductal entry with gentle cholangiogram under fluoroscopy.",
      "Pass 0.018 nitinol wire into central duct; exchange through Neff set for 0.035 hydrophilic Glidewire.",
      "Navigate Glidewire and 5F Kumpe/Cobra catheter past the obstruction across the ampulla of Vater into the duodenum.",
      "Exchange for 0.035 Amplatz Super Stiff wire; dilate tract with 8F and 10F serial dilators.",
      "Advance 8.5F/10.2F Ring internal-external drainage catheter with side-holes positioned across the stricture into the duodenum; lock pigtail, connect to drainage bag, and secure to flank skin."
    ],
    "complications": [
      "Hemobilia or subcapsular liver hematoma from hepatic artery/portal branch puncture (2-4%)",
      "Bacteremia / septic shock during contrast injection into infected ducts (3-5%)",
      "Pneumothorax / hemothorax from pleura crossing through 10th interspace (1-2%)",
      "Catheter dislodgement, kinking, or leakage (5-8%)"
    ],
    "maayTariffInr": 28000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Boston Scientific India (+91 98290 66778)"
    ]
  },
  {
    "id": "ptbd-unilateral-left",
    "name": "Percutaneous Transhepatic Biliary Drainage (PTBD) - Left Lobe Unilateral",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB055",
    "rghsCode": "693 / 50",
    "icd10": "K83.1 / C22.1 (Intrahepatic bile duct carcinoma)",
    "indications": [
      "Isolated left hepatic duct obstruction (Bismuth Type IIIb Klatskin tumor, left lobar atrophy, or left hepatic resection planning)",
      "Right lobe tumor replacement with exclusive functional left liver remnant requiring urgent decompression",
      "Failed or technically inaccessible right-sided biliary drainage due to severe ascites or pleural effusion"
    ],
    "preOpCriteria": [
      "High-resolution ultrasound or MRCP identifying dilated segment 2 or 3 left duct branches accessible via epigastric approach",
      "Coagulation screen: INR < 1.5, Platelets > 50,000/uL",
      "Pre-procedure broad-spectrum antibiotic coverage"
    ],
    "hardware": [
      {
        "category": "Puncture Needle",
        "name": "21G Echogenic Chiba Needle",
        "spec": "15 cm length",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Access Set",
        "name": "Neff Percutaneous Access Set",
        "spec": "Co-axial 4F/6F dilators with 0.018 wire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Drainage Catheter",
        "name": "8.5F - 10.2F Hydrophilic Biliary Catheter",
        "spec": "Ring internal-external pigtail",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Amplatz Extra Stiff Guidewire",
        "spec": "260 cm length",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine; prep epigastric subxiphoid region under sterile conditions.",
      "Under direct ultrasound guidance, puncture a dilated segment 3 duct in the left lobe from a subxiphoid approach, angling cranial-ward.",
      "Aspirate bile to confirm intraluminal position; inject non-ionic contrast to map left hepatic duct arborization.",
      "Introduce 0.018 wire; exchange through Neff set for 0.035 hydrophilic wire and 5F catheter.",
      "Carefully steer through the confluence and cross the obstruction into the duodenum.",
      "Exchange for Amplatz Extra Stiff wire; sequentially dilate tract.",
      "Deploy 8.5F/10.2F Ring biliary internal-external catheter with side-holes spanning the obstruction into the duodenum.",
      "Lock pigtail in duodenum; confirm excellent internal drainage of bile on contrast run; suture to epigastric skin."
    ],
    "complications": [
      "Hemobilia or left branch pseudoaneurysm (1-3%)",
      "Cholangitis / bacteremia (2-4%)",
      "Bile peritonitis from subcapsular leak (< 1%)",
      "Catheter dislodgement / kinking (3-5%)"
    ],
    "maayTariffInr": 28000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Terumo Interventional India (+91 98292 33445)"
    ]
  },
  {
    "id": "ptbd-bilateral-internal-external",
    "name": "Percutaneous Transhepatic Biliary Drainage (PTBD) - Bilateral Internal-External",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB056",
    "rghsCode": "693 / 51",
    "icd10": "K83.1 / C24.0 (Extrahepatic bile duct carcinoma) / C22.1",
    "indications": [
      "High-grade hilar cholangiocarcinoma (Bismuth Type IV) isolating right and left biliary systems completely",
      "Bilateral infected cholangitis refractory to unilateral drainage with persistent un-drained contaminated lobe",
      "Preparation for definitive bilateral metallic stenting or brachytherapy"
    ],
    "preOpCriteria": [
      "MRCP confirming complete disconnection of right and left ductal systems (no communication across confluence)",
      "Cross-matched blood on standby; aggressive pre-procedure IV hydration and antibiotic regimen",
      "Normal or corrected coagulogram (INR <= 1.5, Platelets >= 50,000/uL)"
    ],
    "hardware": [
      {
        "category": "Drainage Catheters (Pair)",
        "name": "Two 8.5F - 10.2F Ring Biliary Drainage Catheters",
        "spec": "Matched pair internal-external pigtail catheters",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Puncture Needles",
        "name": "Dual 21G Chiba Access Needles",
        "spec": "15 cm and 20 cm lengths",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guidewires",
        "name": "Two 0.035-inch Amplatz Super Stiff Guidewires",
        "spec": "260 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Access Sets",
        "name": "Two Neff Percutaneous Access Sets",
        "spec": "4F/6F dilator sets",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "First stage: Perform right transhepatic intercostal puncture of segment 6/7 duct under US; cross into duodenum and place 8.5F/10.2F internal-external catheter.",
      "Second stage: Perform left subxiphoid puncture of segment 3 duct under US; advance wire through isolated left hepatic duct past confluence.",
      "Cross through the tight hilar occlusion into the common bile duct and duodenum alongside the right catheter.",
      "Exchange over stiff wire and dilate tract to 10F.",
      "Advance second 8.5F/10.2F Ring biliary internal-external catheter into duodenum.",
      "Perform dual-tube contrast cholangiogram verifying complete bilateral decompression of both lobes without dead-space puddling.",
      "Lock both pigtails securely; attach both tubes to external drainage bags and apply sterile dressings to flank and epigastric puncture sites."
    ],
    "complications": [
      "Increased risk of hemobilia from dual parenchymal punctures (3-6%)",
      "Post-procedural sepsis / endotoxemia (4-7%)",
      "Bile leakage around catheter puncture tracks (3-5%)",
      "Transient worsening of renal function due to hyperbilirubinemia / sepsis (2-4%)"
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Boston Scientific India (+91 98290 66778)"
    ]
  },
  {
    "id": "biliary-drainage-conversion-external-internal",
    "name": "External-to-Internal Biliary Drainage Conversion",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB057",
    "rghsCode": "693 / 52",
    "icd10": "K83.1 / Z96.89",
    "indications": [
      "Conversion of existing external biliary drainage catheter (placed emergently during acute sepsis/stricture) to internal-external catheter after inflammation resolves",
      "Restoration of natural enterohepatic bile circulation to reverse severe fluid, sodium, and bile-salt depletion",
      "Step-down preparation prior to definitive biliary stent deployment"
    ],
    "preOpCriteria": [
      "Pre-existing external biliary catheter in situ for >= 3 to 7 days with resolution of acute fever/cholangitis",
      "Clean baseline catheter check verifying clear bile flow without purulent discharge",
      "INR <= 1.5, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Hydrophilic Guidewire",
        "name": "0.035-inch Stiff-Shaft Hydrophilic Glidewire (Angle Tip)",
        "spec": "180 cm length, high pushability",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Torque Catheter",
        "name": "5F Kumpe / Cobra C2 / Headhunter Catheter",
        "spec": "65 cm - 100 cm length",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Exchange Wire",
        "name": "0.035-inch Amplatz Super Stiff Guidewire",
        "spec": "260 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Biliary Catheter",
        "name": "8.5F - 10.2F Ring Internal-External Biliary Drainage Catheter",
        "spec": "Multiple side-holes spanning duodenum",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Prep existing biliary tube site under sterile conditions; attach injection port and perform tubogram to assess stricture morphology.",
      "Cut locking suture of existing external pigtail catheter; advance 0.035 hydrophilic angle-tip Glidewire through catheter into intrahepatic duct.",
      "Carefully retract external catheter over wire, maintaining wire tip access; introduce 5F Kumpe directional catheter.",
      "Manipulate hydrophilic wire and directional catheter through the tight biliary stricture into the common bile duct and across the ampulla into the duodenum.",
      "Confirm duodenal wire loop; exchange hydrophilic wire for 0.035 Amplatz Super Stiff wire.",
      "Advance 8.5F or 10.2F Ring internal-external drainage catheter over the stiff wire into the duodenum.",
      "Position side-holes with proximal holes above stricture in liver and distal holes below in duodenum.",
      "Lock pigtail; cap the external hub after 24-48 hours to establish complete internal enterohepatic bile drainage."
    ],
    "complications": [
      "Transient bacteremia / rigors during manipulation across stricture (2-4%)",
      "Loss of biliary tract access requiring re-puncture (< 1%)",
      "Hemobilia from granulation tissue at stricture site (1-2%)",
      "Perforation of common bile duct or duodenal wall (< 0.5%)"
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Boston Scientific India (+91 98290 66778)"
    ]
  },
  {
    "id": "biliary-balloon-plasty-benign-stricture",
    "name": "Percutaneous Biliary Balloon Dilatation of Benign Anastomotic Strictures",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB058",
    "rghsCode": "693 / 53",
    "icd10": "K83.1 (Benign biliary stricture) / K91.89 (Postprocedural complications of digestive system)",
    "indications": [
      "Benign hepaticojejunostomy (HJ) or duct-to-duct anastomotic stricture following liver transplantation or cholecystectomy",
      "Benign postoperative or post-traumatic biliary strictures refractory to endoscopic retroversion",
      "Recurrent episodes of ascending cholangitis and progressive cholestatic pruritus"
    ],
    "preOpCriteria": [
      "MRCP confirming isolated focal stricture at surgical anastomosis with upstream duct dilatation",
      "Exclusion of malignant recurrence via brush cytology or imaging",
      "Coagulation panel within normal limits; broad-spectrum antibiotic prophylaxis"
    ],
    "hardware": [
      {
        "category": "High Pressure Balloon",
        "name": "Non-Compliant High Pressure PTA Balloon (Conquest / Atlas Gold)",
        "spec": "6 mm to 10 mm diameter x 20-40 mm length (up to 20-30 atm)",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Cutting Balloon",
        "name": "Peripheral Cutting Balloon (Wolverine / Scoreflex)",
        "spec": "6 mm - 8 mm diameter x 15 mm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Biliary Stent/Stylet",
        "name": "12F - 14F Large-Bore Biliary Dilating Splinting Catheter",
        "spec": "Removable temporary silicone/polyurethane stenting catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Amplatz Super Stiff Guidewire",
        "spec": "260 cm length",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Perform transhepatic puncture or utilize pre-existing PTBD tract to cross the anastomotic stricture into the jejunal loop with 0.035 wire.",
      "Exchange for Amplatz Super Stiff guidewire anchored in the efferent jejunal loop.",
      "Advance 6 mm to 10 mm high-pressure non-compliant angioplasty balloon across the waist of the fibrotic anastomosis.",
      "Inflate balloon to 16-24 atm using pressure manometer until the resistant waist completely effaces under fluoroscopy.",
      "Maintain full inflation for 2 to 3 minutes to rupture dense scar tissue (optional: use cutting balloon for resistant waist).",
      "Deflate balloon and perform completion cholangiogram demonstrating wide-caliber patent anastomosis and rapid gravity emptying into bowel.",
      "Deploy large-bore 12F/14F removable internal-external catheter across the treated segment to serve as an internal splint for 4-6 weeks.",
      "Re-assess after 6 weeks with capping trial; remove catheter once permanent patency is documented."
    ],
    "complications": [
      "Anastomotic rupture / bile leak into peritoneal cavity (1-2%)",
      "Transient hemobilia from mucosal tearing (2-4%)",
      "Acute cholangitis requiring parenteral antibiotics (3-5%)",
      "Late recurrence of stricture requiring repeat dilatation or surgical revision (15-20%)"
    ],
    "maayTariffInr": 35000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 66778)",
      "Cook Medical India (+91 98292 33445)"
    ]
  },
  {
    "id": "biliary-uncovered-sems-malignant",
    "name": "Percutaneous Uncovered Self-Expanding Metal Stent (SEMS) Deployment for Malignant Biliary Obstruction",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB059",
    "rghsCode": "693 / 54",
    "icd10": "C22.1 (Intrahepatic bile duct carcinoma) / C24.0 / C25.0",
    "indications": [
      "Inoperable malignant hilar or mid-biliary obstruction (Bismuth Type II-IV cholangiocarcinoma, gallbladder cancer, pancreatic head cancer)",
      "Palliation of malignant obstructive jaundice to allow initiation of palliative chemotherapy (bilirubin < 2.0 mg/dL)",
      "Intractable severe pruritus, recurrent biliary sepsis, and cholangitis in terminal oncologic patients"
    ],
    "preOpCriteria": [
      "Oncology multidisciplinary tumor board confirmation of unresectability",
      "Cholangiogram measuring stricture length and required stent length (allowing 10-15 mm landing zones above and below tumor)",
      "INR <= 1.5, Platelets >= 50,000/uL; prophylactic IV antibiotics"
    ],
    "hardware": [
      {
        "category": "Metallic Stent",
        "name": "Uncovered Self-Expanding Biliary Nitinol Stent (Zilver 635 / Epic / E-Luminexx)",
        "spec": "8 mm - 10 mm diameter x 60 mm - 100 mm length, 6F delivery system",
        "standardStore": "Central IR Store"
      },
      {
        "category": "PTA Balloon",
        "name": "High-Pressure Pre-Dilatation Balloon Catheter",
        "spec": "6 mm - 8 mm diameter x 40 mm length",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Amplatz Super Stiff Guidewire",
        "spec": "260 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Temporary Drain",
        "name": "8.5F Safety Biliary Drainage Catheter",
        "spec": "Over-the-wire pigtail",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Utilize established transhepatic biliary access; cross the malignant stricture with 0.035 wire and 5F catheter into the duodenum.",
      "Exchange for 0.035 Amplatz Super Stiff wire; perform calibrated baseline cholangiogram defining tumor margins.",
      "Perform pre-dilatation across the tumor waist using a 6 mm to 8 mm angioplasty balloon if high-grade resistant stenosis.",
      "Introduce the 6F uncovered nitinol stent delivery system; align radiopaque markers across the tumor, ensuring 10-15 mm normal duct coverage at both ends.",
      "Deploy the uncovered nitinol stent under continuous fluoroscopy; observe progressive radial expansion embedding into tumor tissue (open mesh preserves side-branch drainage at the hilum).",
      "Perform post-deployment balloon dilation (8 mm) if residual central waist exceeds 30%.",
      "Perform completion cholangiogram verifying rapid contrast emptying into duodenum and patent proximal side branches.",
      "Place a temporary 8.5F safety internal-external catheter across the stent; cap after 24-48 hours and remove after confirming clinical jaundice resolution."
    ],
    "complications": [
      "Tumor ingrowth through uncovered stent mesh over 6-9 months causing recurrent jaundice (15-25%)",
      "Stent migration (exceedingly rare with uncovered mesh, < 1%)",
      "Post-procedural cholangitis or hemobilia (3-5%)",
      "Acute pancreatitis if stent traverses ampulla across pancreatic duct (< 2%)"
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Boston Scientific India (+91 98290 66778)"
    ]
  },
  {
    "id": "biliary-covered-sems-stricture-leak",
    "name": "Percutaneous Covered SEMS Deployment for Biliary Leaks & Distal Strictures",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB060",
    "rghsCode": "693 / 55",
    "icd10": "K83.1 / K91.840 (Postprocedural bile duct leak) / C25.0",
    "indications": [
      "Major iatrogenic biliary duct lacerations or cystic duct leaks following cholecystectomy refractory to plastic stenting",
      "Inoperable distal malignant common bile duct obstruction (Pancreatic cancer, ampullary carcinoma) where covered stent prevents tumor ingrowth",
      "Bilio-enteric or bilio-cutaneous fistulae requiring durable exclusion"
    ],
    "preOpCriteria": [
      "Contrast CT and cholangiography confirming site of leak or distal stricture location well below the biliary bifurcation (> 2 cm from hilum to avoid lobar isolation)",
      "Platelets >= 50,000/uL, INR <= 1.5",
      "Broad-spectrum antibiotic coverage"
    ],
    "hardware": [
      {
        "category": "Covered Stent",
        "name": "Fully Covered Self-Expanding Biliary Metal Stent (Viabil / WallFlex Biliary)",
        "spec": "10 mm diameter x 60 mm - 80 mm length, ePTFE/silicone covered",
        "standardStore": "Central IR Store"
      },
      {
        "category": "PTA Balloon",
        "name": "8 mm - 10 mm Dilatation Balloon Catheter",
        "spec": "8 mm x 40 mm",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Amplatz Extra Stiff Guidewire",
        "spec": "260 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Sheath",
        "name": "8F - 9F 25 cm Vascular / Biliary Sheath",
        "spec": "Radiofocus / Flexor sheath",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Access intrahepatic duct via percutaneous transhepatic route; navigate 0.035 wire across the laceration/stricture into the duodenum.",
      "Exchange for 8F/9F vascular sheath and Amplatz Extra Stiff guidewire.",
      "Perform accurate roadmap cholangiography identifying the exact breach or distal tumor margins.",
      "Introduce covered stent delivery system; align fully covered membrane directly over the leak site or stricture with 15 mm overlap.",
      "Deploy covered stent under live fluoroscopic vision; ensure the proximal covered edge does not cover the bifurcation of right or left main ducts.",
      "Post-dilate stent with 8-10 mm balloon to ensure complete wall coaptation and seal of the extravasation site.",
      "Perform completion cholangiogram demonstrating instantaneous cessation of contrast extravasation and prompt laminar duodenal run-off.",
      "Maintain safety drainage catheter in place for 24-48 hours before removal."
    ],
    "complications": [
      "Distal stent migration into duodenum due to smooth covered membrane (5-8%)",
      "Acute cholecystitis from covered membrane occluding cystic duct orifice (3-5%)",
      "Acute pancreatitis from pancreatic duct occlusion (2-3%)",
      "Transient hemobilia or cholangitis (2-4%)"
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "W.L. Gore & Associates India (+91 98290 55432)",
      "Boston Scientific India (+91 98290 66778)"
    ]
  },
  {
    "id": "intraductal-biliary-rfa-habib",
    "name": "Intraductal Biliary Radiofrequency Ablation (EndoHPB / Habib Catheter)",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB061",
    "rghsCode": "693 / 56",
    "icd10": "C22.1 / C24.0 (Bile duct cancer)",
    "indications": [
      "Malignant endobiliary tumor ingrowth or overgrowth occluding previously deployed metallic biliary stents",
      "Primary intraductal ablation of malignant biliary strictures prior to metal stenting to extend stent patency and improve survival",
      "Palliative local tumor control for non-resectable cholangiocarcinoma"
    ],
    "preOpCriteria": [
      "Cholangiography confirming tumor length and cross-sectional location within bile ducts",
      "Bipolar RFA generator calibrated and tested (Habib EndoHPB system)",
      "Coagulation parameters verified (Platelets > 60,000/uL, INR < 1.4)"
    ],
    "hardware": [
      {
        "category": "Biliary RFA Catheter",
        "name": "Habib EndoHPB Bipolar RFA Catheter",
        "spec": "8F, 0.035 wire compatible, dual ring bipolar electrodes (5-10 mm spacing)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "RF Generator",
        "name": "Dedicated High-Frequency RFA Generator (VIO / Habib)",
        "spec": "10 Watts power output, automatic impedance control",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Hydrophilic Angle Guidewire",
        "spec": "260 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Stent or Balloon",
        "name": "Uncovered Nitinol Stent or Dilatation Balloon",
        "spec": "8 mm - 10 mm diameter",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Obtain percutaneous transhepatic access across the malignant biliary stricture into duodenum with 0.035 guidewire.",
      "Introduce 8F Habib EndoHPB bipolar RFA catheter over the wire under fluoroscopic guidance.",
      "Position the two radiopaque bipolar electrode rings directly within the tumor stricture.",
      "Activate generator delivering 7 to 10 Watts of bipolar radiofrequency energy for 90 to 120 seconds per target zone.",
      "Observe localized coagulative necrosis and tissue vapor bubbles on fluoroscopy.",
      "Shift catheter 10 mm along the stricture for overlapping burn cycles until entire tumor length is treated.",
      "Perform balloon sweeps or dilatation (8 mm) to clear charred necrotic tissue from the lumen.",
      "Deploy self-expanding metallic stent (SEMS) across the newly cleared canal; place temporary internal-external safety drain."
    ],
    "complications": [
      "Thermal bile duct perforation / rupture (< 1.5%)",
      "Hepatic artery pseudoaneurysm / severe hemobilia from thermal injury (< 1%)",
      "Acute post-ablation cholangitis / bacteremia (3-5%)",
      "Transient pancreatitis (< 1%)"
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 66778)",
      "Jaipur Surgical Agency (+91 98291 44556)"
    ]
  },
  {
    "id": "biliary-calculi-dormia-basket-removal",
    "name": "Percutaneous Transhepatic Removal of Retained Biliary Calculi via Dormia Basket",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB062",
    "rghsCode": "693 / 57",
    "icd10": "K80.50 (Calculus of bile duct without cholangitis)",
    "indications": [
      "Retained or recurrent common bile duct / intrahepatic stones refractory to or impossible via ERCP (post-Billroth II, Roux-en-Y gastric bypass, duodenal diverticulum)",
      "Intrahepatic hepatolithiasis (Oriental cholangiohepatitis) requiring segmental stone clearance",
      "Impacted biliary calculi following T-tube removal or failed endoscopic sphincterotomy"
    ],
    "preOpCriteria": [
      "Established mature transhepatic tract (>= 8F - 10F) or post-T-tube cutaneous tract (>= 3-4 weeks mature)",
      "Cholangiogram precisely localizing stone count, diameters, and ductal anatomy",
      "Antibiotic prophylaxis coverage; INR <= 1.4, Platelets >= 60,000/uL"
    ],
    "hardware": [
      {
        "category": "Stone Extraction Basket",
        "name": "Dormia Biliary Stone Retrieval Basket / ZeroTip Basket",
        "spec": "4-wire helical or flat wire basket, 15 mm - 25 mm capture diameter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Introducer Sheath",
        "name": "8F - 10F 11 cm - 25 cm Vascular Sheath with Valve",
        "spec": "Radiofocus / Flexor sheath",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Occlusion Balloon",
        "name": "Fogarty / Biliary Stone Sizing Balloon Catheter",
        "spec": "8 mm - 12 mm compliant balloon",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Amplatz Extra Stiff Guidewire",
        "spec": "260 cm length",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Access the biliary tree through existing mature transhepatic or T-tube tract; place 8F/10F sheath.",
      "Perform baseline cholangiogram outlining all retained stones and documenting distal sphincter of Oddi patency.",
      "Advance Dormia basket catheter over 0.035 wire into the bile duct distal to the stone.",
      "Open the 4-wire basket in the bile duct; gently manipulate and rotate the basket until the stone falls into the helical wire cage.",
      "Close the basket firmly around the stone under fluoroscopy.",
      "Withdraw the closed basket holding the captured stone through the transhepatic sheath out of the body (or push downstream into duodenum if < 6 mm).",
      "Repeat extraction maneuvers for remaining stone fragments.",
      "Use an occlusion balloon catheter to sweep the biliary tree and flush with copious saline.",
      "Perform completion cholangiogram verifying complete duct clearance without residual filling defects; place temporary 8F safety catheter."
    ],
    "complications": [
      "Basket impaction on large stone requiring mechanical lithotripsy or rescue (< 1%)",
      "Bile duct laceration or mucosal dissection (1-2%)",
      "Post-procedural cholangitis or pancreatitis (2-4%)",
      "Puncture tract disruption and hemoperitoneum (< 1%)"
    ],
    "maayTariffInr": 32000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Boston Scientific India (+91 98290 66778)"
    ]
  },
  {
    "id": "ptcs-ehl-lithotripsy",
    "name": "Percutaneous Transhepatic Cholangioscopy (PTCS) with Electrohydraulic Lithotripsy (EHL)",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB063",
    "rghsCode": "693 / 58",
    "icd10": "K80.50 / K80.30 (Calculus of bile duct with cholangitis)",
    "indications": [
      "Large (> 15 mm), impacted, or staghorn intrahepatic and common bile duct calculi impossible to extract with standard baskets",
      "Hepatolithiasis refractory to mechanical extraction and endoscopic access",
      "Indeterminate biliary strictures requiring direct digital visualization and targeted biopsy"
    ],
    "preOpCriteria": [
      "Mature transhepatic tract dilated up to 14F - 16F over serial sessions",
      "High-resolution digital flexible choledochoscope / SpyGlass Discover console operational",
      "Negative blood cultures; active continuous antibiotic cover"
    ],
    "hardware": [
      {
        "category": "Digital Choledochoscope",
        "name": "Flexible Video Cholangioscope (SpyGlass Discover / Olympus CHF)",
        "spec": "9F - 11F outer diameter with working biopsy/irrigation channel",
        "standardStore": "Central IR Store"
      },
      {
        "category": "EHL Generator & Probe",
        "name": "Electrohydraulic Lithotripsy Generator & 1.9F Probe",
        "spec": "Northgate / Walz EHL spark generator with flexible probe",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Saline Irrigation Set",
        "name": "Continuous Pressurized Normal Saline Irrigation Line",
        "spec": "Pressure bag infusion set with stopcock",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Drainage Tube",
        "name": "14F Malecot / Ring Biliary Catheter",
        "spec": "Large-bore silicone drainage tube",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Introduce 14F/16F sheath over stiff wire into the mature transhepatic biliary tract.",
      "Introduce flexible digital cholangioscope through the sheath under continuous saline irrigation.",
      "Visually inspect intrahepatic ducts, identifying the impacted calculus under direct digital color video.",
      "Pass 1.9F EHL probe through the working channel until the active spark tip touches the center of the stone under direct vision.",
      "Deliver short bursts of electrohydraulic shockwaves (1 to 2 pulses/sec at 60-80% power) under continuous irrigation.",
      "Observe stone fragmentation into gravel (< 3 mm fragments) as shockwaves disintegrate the crystal matrix.",
      "Flush fragments into the duodenum or extract larger pieces with mini-baskets.",
      "Directly inspect duct walls to verify absence of thermal injury and confirm 100% stone clearance.",
      "Place 14F temporary biliary decompression catheter."
    ],
    "complications": [
      "Ductal perforation from misdirected EHL shockwaves (< 1%)",
      "Severe cholangitis or fluid overload from high-pressure saline irrigation (3-5%)",
      "Hemobilia from mucosal trauma (2-3%)",
      "Transient bacteremic rigors (5-8%)"
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 66778)",
      "Olympus Medical Systems India (+91 98290 99887)"
    ]
  },
  {
    "id": "ptcs-laser-lithotripsy",
    "name": "Percutaneous Transhepatic Cholangioscopy with Holmium Laser Lithotripsy",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB064",
    "rghsCode": "693 / 59",
    "icd10": "K80.50 / K80.30",
    "indications": [
      "Extremely hard, calcified, or impacted bilirubin stones in intrahepatic biliary tree unreachable by ERCP",
      "Recurrent hepatolithiasis in patients with altered postsurgical surgical anatomy (Roux-en-Y hepaticojejunostomy)",
      "Stricture-associated calculi requiring simultaneous direct visualization, fragment dusting, and stricturoplasty"
    ],
    "preOpCriteria": [
      "Tract matured to 12F - 14F; holmium laser console calibrated (365 um fiber)",
      "Antibiotic prophylaxis; normal coagulogram",
      "Informed consent for direct laser-assisted cholangioscopy"
    ],
    "hardware": [
      {
        "category": "Holmium Laser Console",
        "name": "Holmium:YAG Laser System (Lumenis / Quanta)",
        "spec": "2100 nm wavelength, 0.5 - 1.2 Joules / 10-20 Hz",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Laser Fiber",
        "name": "365 um / 200 um Flexible Endobiliary Laser Fiber",
        "spec": "Bare-tip silica laser transmission fiber",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Digital Choledochoscope",
        "name": "SpyGlass Discover / Flexible Video Cholangioscope",
        "spec": "Slim digital scope with 1.2 mm instrument channel",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Stiff Guidewire",
        "spec": "260 cm length",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Advance flexible digital cholangioscope through the 12F transhepatic sheath under saline irrigation.",
      "Navigate directly to the targeted impacted calculus.",
      "Pass 365 um Holmium laser fiber through scope channel; position tip exactly 1 mm from stone surface under direct vision.",
      "Activate Holmium:YAG laser at 0.8 J, 10 Hz ('dusting mode') under continuous visual feedback.",
      "Vaporize stone surface in a painting motion, fracturing the stone into dust and tiny fragments (< 2 mm).",
      "Wash pulverized dust into duodenum with saline irrigation; basket out any remaining fragments > 3 mm.",
      "Inspect entire biliary tree to confirm complete stone-free status.",
      "Place 10.2F safety biliary catheter."
    ],
    "complications": [
      "Laser thermal injury to bile duct wall (< 0.5%)",
      "Transient hemobilia (1-2%)",
      "Cholangitis / bacteremia (2-4%)",
      "Fluid absorption / hypothermia from prolonged irrigation (1-2%)"
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 66778)",
      "Lumenis India Pvt Ltd (+91 98291 88776)"
    ]
  },
  {
    "id": "biliary-rendezvous-ercp",
    "name": "Percutaneous Biliary Rendez-vous Procedure with ERCP",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB065",
    "rghsCode": "693 / 60",
    "icd10": "K83.1 / K80.50",
    "indications": [
      "Failed retrograde selective common bile duct cannulation during ERCP due to difficult anatomy, periampullary diverticulum, or tight distal stricture",
      "Combined percutaneous-endoscopic salvage of complex biliary trauma or post-surgical transection",
      "Facilitation of endoscopic retrograde biliary stent placement with minimal papillary trauma"
    ],
    "preOpCriteria": [
      "Combined scheduling of interventional radiologist and gastroenterologist in hybrid room or endoscopy suite",
      "Anesthetic clearance for combined prone/supine sedated endoscopy",
      "Coagulation parameters verified (INR <= 1.5, Platelets >= 50,000/uL)"
    ],
    "hardware": [
      {
        "category": "PTBD Set",
        "name": "21G Chiba Needle & 4F/6F Access Set",
        "spec": "Percutaneous biliary access set",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Long Guidewire",
        "name": "0.035-inch / 0.025-inch Long Hydrophilic Guidewire",
        "spec": "450 cm length with angled floppy tip",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endoscope Snare",
        "name": "Endoscopic Retrieval Snare / Dormia Basket",
        "spec": "Through-the-duodenoscope snare",
        "standardStore": "Endoscopy Store"
      },
      {
        "category": "Biliary Catheter",
        "name": "5F Kumpe / Multipurpose Catheter",
        "spec": "100 cm length",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Under ultrasound and fluoroscopy, perform right or left percutaneous transhepatic biliary puncture.",
      "Navigate a 0.035 450 cm hydrophilic guidewire antegrade across the biliary obstruction, through the papilla, and deep into the distal duodenum.",
      "Gastroenterologist introduces duodenoscope into duodenum; visualizes the wire emerging from the major ampulla.",
      "Gastroenterologist snares the percutaneous wire through the scope, or cannulates alongside the taut wire (rendezvous technique).",
      "Antegrade traction on the wire straightens the distal bile duct, allowing effortless retrograde sphincterotome or catheter advancement into the bile duct.",
      "Gastroenterologist completes retrograde sphincterotomy, stone extraction, or plastic/metal stent deployment.",
      "Radiologist removes or maintains safety external biliary drain based on post-procedure seal.",
      "Apply sterile dressing at transhepatic puncture site."
    ],
    "complications": [
      "Post-ERCP pancreatitis (3-5%)",
      "Hemobilia or subcapsular liver hematoma (1-2%)",
      "Duodenal perforation (< 0.5%)",
      "Bile leak at transhepatic liver puncture site (1-2%)"
    ],
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Boston Scientific India (+91 98290 66778)"
    ]
  },
  {
    "id": "percutaneous-cholecystostomy-transhepatic",
    "name": "Percutaneous Cholecystostomy (Transhepatic Route)",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB066",
    "rghsCode": "693 / 61",
    "icd10": "K81.0 (Acute cholecystitis) / K81.2 (Calculous cholecystitis with acute)",
    "indications": [
      "Severe acute calculous or acalculous cholecystitis in critically ill, septic, or elderly patients with high surgical risk (ASA III-V)",
      "Empyema of gallbladder, gangrenous cholecystitis, or gallbladder perforation with localized collection",
      "Bridge to delayed elective cholecystectomy after clinical stabilization in ICU"
    ],
    "preOpCriteria": [
      "Ultrasound confirming distended gallbladder with thickened wall (> 3 mm), pericholecystic fluid, and positive sonographic Murphy sign",
      "Review of liver bare area of gallbladder bed for safe transhepatic needle passage (crossing liver parenchyma prevents bile leakage into peritoneum)",
      "Coagulation optimization (Platelets > 50,000/uL, INR < 1.6)"
    ],
    "hardware": [
      {
        "category": "Pigtail Drainage Catheter",
        "name": "8F - 10F Locking Pigtail Drainage Catheter (Multipurpose / Dawson-Mueller)",
        "spec": "Hydrophilic coated with trocar/needle assembly",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Puncture Needle",
        "name": "18G Trocar Needle or 21G Chiba Micropuncture Kit",
        "spec": "15 cm length with echogenic tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Amplatz Extra Stiff / Rosen Guidewire",
        "spec": "150 cm length with J-tip",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Connecting Set",
        "name": "Biliary Drainage Tube Connecting Line & Drainage Bag",
        "spec": "Luer-lock tubing with anti-reflux valve",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with right upper quadrant exposed; perform sterile prep and drape.",
      "Infiltrate local anesthesia from skin down through intercostal space into liver capsule under ultrasound.",
      "Under real-time ultrasound guidance, insert 18G needle (or 21G micropuncture) through the liver parenchyma directly into the mid-body of the gallbladder through the bare area (transhepatic route).",
      "Aspirate thick purulent or dark bile; send sample immediately for gram stain and aerobic/anaerobic cultures.",
      "Inject 2 to 5 mL non-ionic contrast under fluoroscopy confirming intraluminal positioning and assessing cystic duct patency.",
      "Pass 0.035 Amplatz/Rosen wire, coiling several loops securely in the gallbladder fundus.",
      "Dilate tract to 8F or 10F over wire.",
      "Advance 8F/10F locking pigtail drainage catheter; lock pigtail firmly; confirm bile flow, secure to skin with suture and adhesive lock, and connect to drainage bag."
    ],
    "complications": [
      "Vasovagal bradycardia / hypotension during gallbladder puncture or dilation (3-5%)",
      "Bile peritonitis or intra-abdominal spill (< 1% via transhepatic route)",
      "Bleeding / intrahepatic hematoma from liver parenchymal transit (1-2%)",
      "Catheter dislodgement or premature pullout (5-8%)"
    ],
    "maayTariffInr": 18000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Boston Scientific India (+91 98290 66778)"
    ]
  },
  {
    "id": "percutaneous-cholecystostomy-transperitoneal",
    "name": "Percutaneous Cholecystostomy (Transperitoneal Route)",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB067",
    "rghsCode": "693 / 62",
    "icd10": "K81.0 (Acute cholecystitis)",
    "indications": [
      "Acute cholecystitis in patients with severe coagulopathy, advanced cirrhosis, liver tumor, or severe hepatopathy where liver puncture carries high bleeding risk",
      "Distended, tense gallbladder fundus directly abutting the anterior abdominal wall without intervening colon or liver tissue",
      "Failed or anatomically precluded transhepatic access"
    ],
    "preOpCriteria": [
      "Ultrasound proving complete abutment of gallbladder fundus to parietal peritoneum without interposed colon or omentum",
      "Verification that patient will remain cooperative or sedated during needle puncture",
      "Platelets >= 50,000/uL, INR <= 1.5"
    ],
    "hardware": [
      {
        "category": "Catheter",
        "name": "8F - 10F Locking Pigtail Catheter (One-Step Trocar / Seldinger)",
        "spec": "Locking loop with multiple drainage holes",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Access Set",
        "name": "18G Echogenic Needle & 0.035 Stiff Wire",
        "spec": "18G 7 cm needle, 150 cm wire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Drainage Accessories",
        "name": "Sterile Bile Drainage Bag & Lock Fixation Device",
        "spec": "Statlock catheter retention device",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Sterilize right subcostal abdomen; infiltrate local anesthesia into rectus muscle and peritoneum under US.",
      "Puncture anterior gallbladder fundus directly under ultrasound guidance avoiding all surrounding hepatic tissue.",
      "Aspirate purulent bile; confirm intraluminal position on ultrasound and fluoroscopic contrast run.",
      "Advance 0.035 stiff J-wire, coiling multiple safety loops in gallbladder lumen.",
      "Perform single-step dilation to 8F or 10F.",
      "Deploy 8F/10F locking pigtail catheter; lock string tightly to ensure pigtail holds gallbladder wall securely against anterior abdominal wall.",
      "Aspirate contents to decompress tense gallbladder; connect to gravity drainage bag and suture securely."
    ],
    "complications": [
      "Bile peritonitis / bile leak into peritoneal cavity (higher risk than transhepatic, 2-4%)",
      "Inadvertent colonic or duodenal puncture (< 0.5%)",
      "Catheter dislodgement / retraction into peritoneal space (5-10%)",
      "Puncture site pain and localized tenderness (10-15%)"
    ],
    "maayTariffInr": 18000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Boston Scientific India (+91 98290 66778)"
    ]
  },
  {
    "id": "percutaneous-cholecystolithotomy-stone-extraction",
    "name": "Percutaneous Cholecystolithotomy and Endoscopic Gallbladder Stone Extraction",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB068",
    "rghsCode": "693 / 63",
    "icd10": "K80.20 (Calculus of gallbladder without cholecystitis)",
    "indications": [
      "Symptomatic gallstone disease in patients unfit for laparoscopic or open cholecystectomy due to severe cardiopulmonary comorbidity or hostile frozen abdomen",
      "Gallstone-related acute cholecystitis with persistent cholecystostomy tube dependency wanting permanent stone clearance",
      "Calculus impacted in gallbladder neck causing persistent mucocele"
    ],
    "preOpCriteria": [
      "Mature percutaneous transhepatic cholecystostomy tract (in situ >= 3-4 weeks)",
      "Ultrasound or cholecystogram documenting gallstone count, sizes, and patent cystic duct",
      "Coagulation profile within normal limits; prophylactic antibiotics"
    ],
    "hardware": [
      {
        "category": "Flexible Endoscope",
        "name": "Digital Flexible Choledochoscope / Nephroscope",
        "spec": "11F - 15F flexible scope with working channel",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Access Sheath",
        "name": "12F - 16F Amplatz Renal Dilator & Working Sheath Set",
        "spec": "Teflon working sheath",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Stone Basket",
        "name": "ZeroTip / Dormia Nitinol Stone Retrieval Baskets",
        "spec": "15-25 mm baskets",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Laser / Lithotripter",
        "name": "Holmium Laser Fiber / EHL Probe",
        "spec": "365 um fiber for stone fragmentation",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Pass 0.035 stiff wire through existing cholecystostomy catheter into gallbladder; remove old catheter.",
      "Sequentially dilate the mature transhepatic tract up to 14F - 16F using Amplatz dilators over wire.",
      "Introduce 14F/16F Amplatz working sheath into the gallbladder lumen under fluoroscopic control.",
      "Pass flexible choledochoscope through the working sheath under continuous saline irrigation.",
      "Directly visualize the gallstones; capture whole stones with Dormia basket and extract through the sheath.",
      "For stones > 10 mm, deliver Holmium laser or EHL energy to fragment them into extractable pieces.",
      "Clear all stones until the gallbladder mucosal lining and cystic duct orifice are visually confirmed completely stone-free.",
      "Place a 12F Foley or Malecot temporary catheter; perform tubogram after 1 week before catheter removal."
    ],
    "complications": [
      "Gallbladder perforation / bile peritonitis during tract dilation (1-2%)",
      "Transient hemobilia (2-4%)",
      "Recurrence of gallstones over subsequent 3-5 years (20-30%)",
      "Vasovagal reaction during tract dilation (3-5%)"
    ],
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Boston Scientific India (+91 98290 66778)"
    ]
  },
  {
    "id": "chemical-gallbladder-sclerosis",
    "name": "Chemical Gallbladder Sclerosis / Percutaneous Contact Dissolution",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB069",
    "rghsCode": "693 / 64",
    "icd10": "K82.8 (Other specified diseases of gallbladder) / K81.1",
    "indications": [
      "Definitive non-surgical gallbladder obliteration in high-surgical-risk patients with recurrent cholecystitis to prevent lifelong cholecystostomy tube dependency",
      "Chronic cholecystostomy tube dependent patients desiring tube removal but unfit for cholecystectomy",
      "Exclusion of cystic duct patency and complete mucosal ablation"
    ],
    "preOpCriteria": [
      "Mature cholecystostomy tract in place >= 4 weeks",
      "Fluoroscopic cholecystogram demonstrating cystic duct occlusion (spontaneous or induced by coil/glue embolization to prevent sclerant entering CBD)",
      "Normal liver function tests and coagulogram"
    ],
    "hardware": [
      {
        "category": "Sclerosing Agent",
        "name": "Absolute Alcohol (99% Ethanol) / Sodium Tetradecyl Sulfate 3%",
        "spec": "Sterile 10 mL ampoules",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Cystic Duct Occlusion",
        "name": "Microcoils & Gelfoam Torpedoes",
        "spec": "0.018 microcoils (3 mm - 5 mm)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Catheter",
        "name": "8F Locking Pigtail Catheter",
        "spec": "Dual lumen irrigation catheter",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Mucolytic Agent",
        "name": "N-Acetylcysteine (NAC) Solution",
        "spec": "20% solution for mucus breakdown",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Confirm complete cystic duct occlusion on cholecystogram (if patent, embolize cystic duct with microcoils and Gelfoam via microcatheter).",
      "Instill 10-20 mL N-acetylcysteine solution into gallbladder for 15 minutes to dissolve adherent mucus layer; aspirate completely.",
      "Infuse absolute 99% ethanol (or 3% STS sclerosant foam) volume equal to 80% of gallbladder capacity (typically 15-25 mL).",
      "Leave alcohol in contact with gallbladder mucosal wall for 20 minutes under intermittent aspiration and gentle agitation.",
      "Evacuate alcohol completely to avoid systemic absorption.",
      "Repeat second cycle of chemical sclerosis for 15 minutes.",
      "Aspirate empty, place catheter to gravity drainage for 48 hours; repeat ultrasound at 1 week confirming gallbladder collapse and fibrosis; remove tube."
    ],
    "complications": [
      "Severe right upper quadrant pain during alcohol contact requiring IV analgesia (40-60%)",
      "Systemic ethanol intoxication / inebriation (< 2%)",
      "Sclerant leak into common bile duct causing biliary stricture (prevented by strict cystic duct occlusion check, < 0.5%)",
      "Persistent mucosal secretion requiring repeat sclerosis (10-15%)"
    ],
    "maayTariffInr": 32000,
    "vendorContacts": [
      "SMS Pharmacy DDC-14 (+91 141 2560291)",
      "Jaipur Surgical Distributors (+91 98291 44556)"
    ]
  },
  {
    "id": "percutaneous-transhepatic-gallbladder-stenting",
    "name": "Percutaneous Transhepatic Gallbladder Stenting (Cystic Duct Recanalization & Stenting)",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "code": "2849-HPB070",
    "rghsCode": "693 / 65",
    "icd10": "K81.0 / K82.8 / K83.1",
    "indications": [
      "Recanalization and internal drainage of gallbladder in cholecystostomy-dependent patients unfit for surgery",
      "Malignant cystic duct obstruction causing acute cholecystitis in inoperable pancreatic or gallbladder cancer",
      "Restoration of internal physiological gallbladder drainage without permanent external bags"
    ],
    "preOpCriteria": [
      "Established transhepatic cholecystostomy with cleared gallstones or acalculous cholecystitis",
      "Cholangiography documenting anatomy of cystic duct and junction with common bile duct",
      "INR <= 1.5, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Biliary Stent",
        "name": "7F - 8.5F Double-Pigtail Polyurethane Biliary Stent",
        "spec": "10 cm - 15 cm length with duodenal/CBD retention pigtails",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat / Cantata Microcatheter",
        "spec": "130 cm length with 0.014 Glidewire GT",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Hydrophilic Angle Guidewire & Stiff Wire",
        "spec": "260 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Pushing Catheter",
        "name": "7F / 8.5F Stent Pusher Catheter",
        "spec": "Radiopaque tip stent delivery pusher",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Access gallbladder lumen through existing cholecystostomy tract.",
      "Navigate 2.7F microcatheter and 0.014 wire into the spiral valves of Heister in the cystic duct.",
      "Cross cystic duct into the common bile duct and advance wire into the duodenum.",
      "Exchange for 0.035 hydrophilic wire and 5F directional catheter; gently dilate cystic duct with 4 mm - 6 mm balloon.",
      "Advance 7F or 8.5F double-pigtail stent over wire across the cystic duct.",
      "Deploy distal pigtail in the duodenum or common bile duct, and proximal pigtail securely inside the gallbladder lumen.",
      "Verify unobstructed contrast flow from gallbladder through stent into bowel.",
      "Remove external cholecystostomy tube; verify absence of percutaneous leak."
    ],
    "complications": [
      "Cystic duct perforation / bile peritonitis during wire manipulation (1-2%)",
      "Stent migration into duodenum or retraction into gallbladder (5-8%)",
      "Acute recurrent cholecystitis from stent occlusion (10-15%)",
      "Transient pancreatitis (< 2%)"
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 33445)",
      "Boston Scientific India (+91 98290 66778)"
    ]
  },
  {
    "id": "c3-percutaneous-transhepatic-cholangiography",
    "name": "Percutaneous Transhepatic Cholangiography (PTC)",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP360A",
    "rghsCode": "693 / 18 / 20",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Percutaneous Transhepatic Cholangiography (PTC) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Transhepatic Cholangiography (PTC).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-percutaneous-covered-sems-deployment-for",
    "name": "Percutaneous Covered SEMS Deployment for Biliary Leaks / Strictures",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP305A",
    "rghsCode": "693 / 18 / 15",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Percutaneous Covered SEMS Deployment for Biliary Leaks / Strictures refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Covered SEMS Deployment for Biliary Leaks / Strictures.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-percutaneous-biodegradable-biliary-stent-implantation",
    "name": "Percutaneous Biodegradable Biliary Stent Implantation",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP450A",
    "rghsCode": "693 / 18 / 10",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Percutaneous Biodegradable Biliary Stent Implantation refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Biodegradable Biliary Stent Implantation.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-percutaneous-transhepatic-gallbladder-stenting",
    "name": "Percutaneous Transhepatic Gallbladder Stenting",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP553A",
    "rghsCode": "693 / 18 / 13",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Percutaneous Transhepatic Gallbladder Stenting refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Transhepatic Gallbladder Stenting.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-hepatic-venous-pressure-gradient-measurement",
    "name": "Hepatic Venous Pressure Gradient (HVPG) Measurement",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP688A",
    "rghsCode": "693 / 18 / 48",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Hepatic Venous Pressure Gradient (HVPG) Measurement refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Hepatic Venous Pressure Gradient (HVPG) Measurement.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-transjugular-intrahepatic-portosystemic-shunt-with",
    "name": "Transjugular Intrahepatic Portosystemic Shunt (TIPS) with ePTFE Covered Stent-Graft (Viatorr)",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP814A",
    "rghsCode": "693 / 18 / 24",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Transjugular Intrahepatic Portosystemic Shunt (TIPS) with ePTFE Covered Stent-Graft (Viatorr) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transjugular Intrahepatic Portosystemic Shunt (TIPS) with ePTFE Covered Stent-Graft (Viatorr).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-direct-intrahepatic-portosystemic-shunt-via",
    "name": "Direct Intrahepatic Portosystemic Shunt (DIPS) via Intravascular Ultrasound (IVUS) Guidance",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP385A",
    "rghsCode": "693 / 18 / 45",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Direct Intrahepatic Portosystemic Shunt (DIPS) via Intravascular Ultrasound (IVUS) Guidance refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Direct Intrahepatic Portosystemic Shunt (DIPS) via Intravascular Ultrasound (IVUS) Guidance.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-transsplenic-intrahepatic-portosystemic-shunt",
    "name": "Transsplenic Intrahepatic Portosystemic Shunt",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP241A",
    "rghsCode": "693 / 18 / 51",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Transsplenic Intrahepatic Portosystemic Shunt refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transsplenic Intrahepatic Portosystemic Shunt.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-parallel-tips-placement-for-refractory",
    "name": "Parallel TIPS Placement for Refractory Ascites",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP281A",
    "rghsCode": "693 / 18 / 41",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Parallel TIPS Placement for Refractory Ascites refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Parallel TIPS Placement for Refractory Ascites.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-tips-revision-percutaneous-balloon-angioplasty",
    "name": "TIPS Revision: Percutaneous Balloon Angioplasty",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP429A",
    "rghsCode": "693 / 18 / 39",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for TIPS Revision: Percutaneous Balloon Angioplasty refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for TIPS Revision: Percutaneous Balloon Angioplasty.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-tips-revision-relining-with-covered",
    "name": "TIPS Revision: Relining with Covered Stent-Graft",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP333A",
    "rghsCode": "693 / 18 / 43",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for TIPS Revision: Relining with Covered Stent-Graft refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for TIPS Revision: Relining with Covered Stent-Graft.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-tips-constraint-reduction-for-refractory",
    "name": "TIPS Constraint / Reduction for Refractory Encephalopathy (Constricting Suture, Hourglass Stent)",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP200A",
    "rghsCode": "693 / 18 / 10",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for TIPS Constraint / Reduction for Refractory Encephalopathy (Constricting Suture, Hourglass Stent) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for TIPS Constraint / Reduction for Refractory Encephalopathy (Constricting Suture, Hourglass Stent).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-tips-occlusion-embolization-for-liver",
    "name": "TIPS Occlusion / Embolization for Liver Failure",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP537A",
    "rghsCode": "693 / 18 / 47",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for TIPS Occlusion / Embolization for Liver Failure refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for TIPS Occlusion / Embolization for Liver Failure.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-transjugular-balloon-angioplasty-of-hepatic",
    "name": "Transjugular Balloon Angioplasty of Hepatic Vein Web (Budd-Chiari Syndrome)",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP254A",
    "rghsCode": "693 / 18 / 14",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Transjugular Balloon Angioplasty of Hepatic Vein Web (Budd-Chiari Syndrome) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transjugular Balloon Angioplasty of Hepatic Vein Web (Budd-Chiari Syndrome).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-transjugular-transfemoral-hepatic-vein-stenting",
    "name": "Transjugular / Transfemoral Hepatic Vein Stenting for Budd-Chiari Syndrome",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP359A",
    "rghsCode": "693 / 18 / 19",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Transjugular / Transfemoral Hepatic Vein Stenting for Budd-Chiari Syndrome refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transjugular / Transfemoral Hepatic Vein Stenting for Budd-Chiari Syndrome.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-ivc-stenting-for-budd-chiari",
    "name": "IVC Stenting for Budd-Chiari Syndrome",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP640A",
    "rghsCode": "693 / 18 / 50",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for IVC Stenting for Budd-Chiari Syndrome refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for IVC Stenting for Budd-Chiari Syndrome.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-combined-transhepatic-and-transjugular-recanalization",
    "name": "Combined Transhepatic and Transjugular Recanalization of Budd-Chiari Occlusion",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP971A",
    "rghsCode": "693 / 18 / 31",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Combined Transhepatic and Transjugular Recanalization of Budd-Chiari Occlusion refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Combined Transhepatic and Transjugular Recanalization of Budd-Chiari Occlusion.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-meso-caval-stent-shunt-creation",
    "name": "Meso-Caval Stent-Shunt Creation in Chronic Budd-Chiari Syndrome",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP933A",
    "rghsCode": "693 / 18 / 43",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Meso-Caval Stent-Shunt Creation in Chronic Budd-Chiari Syndrome refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Meso-Caval Stent-Shunt Creation in Chronic Budd-Chiari Syndrome.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-balloon-occluded-retrograde-transvenous-obliteration",
    "name": "Balloon-Occluded Retrograde Transvenous Obliteration (BRTO) of Gastric Varices",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP285A",
    "rghsCode": "693 / 18 / 45",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Balloon-Occluded Retrograde Transvenous Obliteration (BRTO) of Gastric Varices refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Balloon-Occluded Retrograde Transvenous Obliteration (BRTO) of Gastric Varices.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-plug-assisted-retrograde-transvenous-obliteration",
    "name": "Plug-Assisted Retrograde Transvenous Obliteration (PARTO)",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP218A",
    "rghsCode": "693 / 18 / 28",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Plug-Assisted Retrograde Transvenous Obliteration (PARTO) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Plug-Assisted Retrograde Transvenous Obliteration (PARTO).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-coil-assisted-retrograde-transvenous-obliteration",
    "name": "Coil-Assisted Retrograde Transvenous Obliteration (CARTO)",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP310A",
    "rghsCode": "693 / 18 / 20",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Coil-Assisted Retrograde Transvenous Obliteration (CARTO) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Coil-Assisted Retrograde Transvenous Obliteration (CARTO).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-vascular-plug-and-gelatin-sponge",
    "name": "Vascular Plug and Gelatin Sponge-Assisted Retrograde Transvenous Obliteration (PTO / CARTO-II)",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP506A",
    "rghsCode": "693 / 18 / 16",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Vascular Plug and Gelatin Sponge-Assisted Retrograde Transvenous Obliteration (PTO / CARTO-II) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Vascular Plug and Gelatin Sponge-Assisted Retrograde Transvenous Obliteration (PTO / CARTO-II).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-balloon-occluded-antegrade-transvenous-obliteration",
    "name": "Balloon-Occluded Antegrade Transvenous Obliteration (BATO)",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP192A",
    "rghsCode": "693 / 18 / 52",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Balloon-Occluded Antegrade Transvenous Obliteration (BATO) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Balloon-Occluded Antegrade Transvenous Obliteration (BATO).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-percutaneous-transhepatic-obliteration-variceal-embolization",
    "name": "Percutaneous Transhepatic Obliteration (PTO) / Variceal Embolization",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP768A",
    "rghsCode": "693 / 18 / 28",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Percutaneous Transhepatic Obliteration (PTO) / Variceal Embolization refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Transhepatic Obliteration (PTO) / Variceal Embolization.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-percutaneous-transsplenic-variceal-embolization",
    "name": "Percutaneous Transsplenic Variceal Embolization",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP955A",
    "rghsCode": "693 / 18 / 15",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Percutaneous Transsplenic Variceal Embolization refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Transsplenic Variceal Embolization.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-transumbilical-vein-recanalization-and-variceal",
    "name": "Transumbilical Vein Recanalization and Variceal Embolization",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP842A",
    "rghsCode": "693 / 18 / 52",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Transumbilical Vein Recanalization and Variceal Embolization refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transumbilical Vein Recanalization and Variceal Embolization.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-combined-hepatic-vein-deprivation-simultaneous",
    "name": "Combined Hepatic Vein Deprivation (HVD) / Simultaneous PVE and Hepatic Vein Embolization",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP456A",
    "rghsCode": "693 / 18 / 16",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Combined Hepatic Vein Deprivation (HVD) / Simultaneous PVE and Hepatic Vein Embolization refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Combined Hepatic Vein Deprivation (HVD) / Simultaneous PVE and Hepatic Vein Embolization.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c3-percutaneous-transhepatic-portal-vein-recanalization",
    "name": "Percutaneous Transhepatic Portal Vein Recanalization and Stenting",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "code": "2849-HP971A",
    "rghsCode": "693 / 18 / 31",
    "icd10": "K76.6 (Portal hypertension) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Clinically documented indication for Percutaneous Transhepatic Portal Vein Recanalization and Stenting refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Kit",
        "name": "Rosch-Uchida / Colapinto Transjugular Access Set",
        "spec": "16G 0.038 curved puncture needle with 10F sheath",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Covered Stent",
        "name": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion",
        "spec": "8-10 mm diameter, 7-8 cm covered length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "PTBD Set",
        "name": "8F - 10F Ring-McLean / Dawson-Mueller Biliary Drainage Catheter",
        "spec": "Radiopaque locking loop with Mac-Loc",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Transhepatic Portal Vein Recanalization and Stenting.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Gore Medical (+91 98290 55443)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-diagnostic-pelvic-and-lower-extremity",
    "name": "Diagnostic Pelvic and Lower Extremity Runoff Angiography",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR463A",
    "rghsCode": "693 / 32 / 23",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Diagnostic Pelvic and Lower Extremity Runoff Angiography refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Diagnostic Pelvic and Lower Extremity Runoff Angiography.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-common-iliac-artery-balloon-angioplasty",
    "name": "Common Iliac Artery (CIA) Balloon Angioplasty",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR237A",
    "rghsCode": "693 / 32 / 47",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Common Iliac Artery (CIA) Balloon Angioplasty refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Common Iliac Artery (CIA) Balloon Angioplasty.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-common-iliac-artery-stenting",
    "name": "Common Iliac Artery Stenting (Bare Metal / Covered)",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR771A",
    "rghsCode": "693 / 32 / 31",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Common Iliac Artery Stenting (Bare Metal / Covered) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Common Iliac Artery Stenting (Bare Metal / Covered).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-external-iliac-artery-angioplasty-and",
    "name": "External Iliac Artery (EIA) Angioplasty and Stenting",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR976A",
    "rghsCode": "693 / 32 / 36",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for External Iliac Artery (EIA) Angioplasty and Stenting refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for External Iliac Artery (EIA) Angioplasty and Stenting.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-covered-endovascular-reconstruction-of-aortic",
    "name": "Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB Technique)",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR580A",
    "rghsCode": "693 / 32 / 40",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB Technique) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB Technique).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-common-femoral-artery-percutaneous-lithotripsy",
    "name": "Common Femoral Artery (CFA) Percutaneous Lithotripsy and Stenting",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR999A",
    "rghsCode": "693 / 32 / 59",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Common Femoral Artery (CFA) Percutaneous Lithotripsy and Stenting refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Common Femoral Artery (CFA) Percutaneous Lithotripsy and Stenting.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-superficial-femoral-artery-plain-old",
    "name": "Superficial Femoral Artery (SFA) Plain Old Balloon Angioplasty (POBA)",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR273A",
    "rghsCode": "693 / 32 / 33",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Superficial Femoral Artery (SFA) Plain Old Balloon Angioplasty (POBA) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Superficial Femoral Artery (SFA) Plain Old Balloon Angioplasty (POBA).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-sfa-drug-coated-balloon-angioplasty",
    "name": "SFA Drug-Coated Balloon (DCB) Angioplasty",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR528A",
    "rghsCode": "693 / 32 / 38",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for SFA Drug-Coated Balloon (DCB) Angioplasty refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for SFA Drug-Coated Balloon (DCB) Angioplasty.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-sfa-bare-metal-nitinol-stent",
    "name": "SFA Bare-Metal Nitinol Stent Deployment",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR508A",
    "rghsCode": "693 / 32 / 18",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for SFA Bare-Metal Nitinol Stent Deployment refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for SFA Bare-Metal Nitinol Stent Deployment.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-sfa-drug-eluting-stent-implantation",
    "name": "SFA Drug-Eluting Stent (DES) Implantation",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR743A",
    "rghsCode": "693 / 32 / 53",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for SFA Drug-Eluting Stent (DES) Implantation refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for SFA Drug-Eluting Stent (DES) Implantation.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-sfa-covered-stent-graft-placement",
    "name": "SFA Covered Stent-Graft Placement (Viabahn)",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR312A",
    "rghsCode": "693 / 32 / 22",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for SFA Covered Stent-Graft Placement (Viabahn) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for SFA Covered Stent-Graft Placement (Viabahn).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-popliteal-artery-intermittent-claudication-ppa",
    "name": "Popliteal Artery Intermittent Claudication / PPA Plain Balloon Angioplasty",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR105A",
    "rghsCode": "693 / 32 / 15",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Popliteal Artery Intermittent Claudication / PPA Plain Balloon Angioplasty refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Popliteal Artery Intermittent Claudication / PPA Plain Balloon Angioplasty.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-popliteal-interwoven-nitinol-stent-implantation",
    "name": "Popliteal Interwoven Nitinol Stent (Supera) Implantation",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR355A",
    "rghsCode": "693 / 32 / 15",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Popliteal Interwoven Nitinol Stent (Supera) Implantation refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Popliteal Interwoven Nitinol Stent (Supera) Implantation.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-tibioperoneal-trunk-balloon-angioplasty",
    "name": "Tibioperoneal Trunk Balloon Angioplasty",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR276A",
    "rghsCode": "693 / 32 / 36",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Tibioperoneal Trunk Balloon Angioplasty refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Tibioperoneal Trunk Balloon Angioplasty.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-anterior-tibial-artery-plain-and",
    "name": "Anterior Tibial Artery (ATA) Plain and Drug-Coated Balloon Angioplasty",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR326A",
    "rghsCode": "693 / 32 / 36",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Anterior Tibial Artery (ATA) Plain and Drug-Coated Balloon Angioplasty refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Anterior Tibial Artery (ATA) Plain and Drug-Coated Balloon Angioplasty.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-posterior-tibial-artery-angioplasty",
    "name": "Posterior Tibial Artery (PTA) Angioplasty",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR854A",
    "rghsCode": "693 / 32 / 14",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Posterior Tibial Artery (PTA) Angioplasty refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Posterior Tibial Artery (PTA) Angioplasty.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-peroneal-artery-angioplasty",
    "name": "Peroneal Artery Angioplasty",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR985A",
    "rghsCode": "693 / 32 / 45",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Peroneal Artery Angioplasty refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Peroneal Artery Angioplasty.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-deep-plantar-arch-dorsalis-pedis",
    "name": "Deep Plantar Arch / Dorsalis Pedis Angioplasty",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR697A",
    "rghsCode": "693 / 32 / 57",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Deep Plantar Arch / Dorsalis Pedis Angioplasty refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Deep Plantar Arch / Dorsalis Pedis Angioplasty.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-transcollateral-plantar-arch-revascularization",
    "name": "Transcollateral / Plantar Arch Revascularization",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR533A",
    "rghsCode": "693 / 32 / 43",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Transcollateral / Plantar Arch Revascularization refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcollateral / Plantar Arch Revascularization.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-retrograde-transpedal-distal-puncture-and",
    "name": "Retrograde Transpedal / Distal Puncture and Revascularization",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR596A",
    "rghsCode": "693 / 32 / 56",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Retrograde Transpedal / Distal Puncture and Revascularization refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Retrograde Transpedal / Distal Puncture and Revascularization.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-transiliac-crossover-up-and-over",
    "name": "Transiliac Crossover / Up-and-Over Femoral Recanalization",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR803A",
    "rghsCode": "693 / 32 / 13",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Transiliac Crossover / Up-and-Over Femoral Recanalization refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transiliac Crossover / Up-and-Over Femoral Recanalization.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-subintimal-arterial-flossing-with-antegrade",
    "name": "Subintimal Arterial Flossing with Antegrade-Retrograde Intervention (SAFARI Technique)",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR877A",
    "rghsCode": "693 / 32 / 37",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Subintimal Arterial Flossing with Antegrade-Retrograde Intervention (SAFARI Technique) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Subintimal Arterial Flossing with Antegrade-Retrograde Intervention (SAFARI Technique).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-percutaneous-deep-vein-arterialization",
    "name": "Percutaneous Deep Vein Arterialization (pDVA / LimFlow System)",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR821A",
    "rghsCode": "693 / 32 / 31",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Percutaneous Deep Vein Arterialization (pDVA / LimFlow System) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Deep Vein Arterialization (pDVA / LimFlow System).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-rotational-mechanical-atherectomy",
    "name": "Rotational Mechanical Atherectomy (Rotarex / Jetstream)",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR713A",
    "rghsCode": "693 / 32 / 23",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Rotational Mechanical Atherectomy (Rotarex / Jetstream) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Rotational Mechanical Atherectomy (Rotarex / Jetstream).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-directional-atherectomy",
    "name": "Directional Atherectomy (HawkOne / TurboHawk)",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR906A",
    "rghsCode": "693 / 32 / 16",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Directional Atherectomy (HawkOne / TurboHawk) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Directional Atherectomy (HawkOne / TurboHawk).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-orbital-atherectomy",
    "name": "Orbital Atherectomy (Diamondback 360)",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR738A",
    "rghsCode": "693 / 32 / 48",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Orbital Atherectomy (Diamondback 360) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Orbital Atherectomy (Diamondback 360).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-laser-atherectomy",
    "name": "Laser Atherectomy (Spectranetics Turbo-Elite Excimer Laser)",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR546A",
    "rghsCode": "693 / 32 / 56",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Laser Atherectomy (Spectranetics Turbo-Elite Excimer Laser) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Laser Atherectomy (Spectranetics Turbo-Elite Excimer Laser).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-peripheral-intravascular-lithotripsy",
    "name": "Peripheral Intravascular Lithotripsy (IVL / Shockwave Medical)",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR969A",
    "rghsCode": "693 / 32 / 29",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Peripheral Intravascular Lithotripsy (IVL / Shockwave Medical) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Peripheral Intravascular Lithotripsy (IVL / Shockwave Medical).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-catheter-directed-thrombolysis-for-acute",
    "name": "Catheter-Directed Thrombolysis (CDT) for Acute Limb Ischemia (rtPA / Urokinase)",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR873A",
    "rghsCode": "693 / 32 / 33",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Catheter-Directed Thrombolysis (CDT) for Acute Limb Ischemia (rtPA / Urokinase) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Catheter-Directed Thrombolysis (CDT) for Acute Limb Ischemia (rtPA / Urokinase).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-continuous-pulse-spray-catheter-directed",
    "name": "Continuous Pulse-Spray Catheter-Directed Thrombolysis",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR877A",
    "rghsCode": "693 / 32 / 37",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Continuous Pulse-Spray Catheter-Directed Thrombolysis refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Continuous Pulse-Spray Catheter-Directed Thrombolysis.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-hydrodynamic-thrombectomy-for-peripheral-arterial",
    "name": "Hydrodynamic Thrombectomy (AngioJet) for Peripheral Arterial Occlusion",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR495A",
    "rghsCode": "693 / 32 / 55",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Hydrodynamic Thrombectomy (AngioJet) for Peripheral Arterial Occlusion refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Hydrodynamic Thrombectomy (AngioJet) for Peripheral Arterial Occlusion.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-continuous-aspiration-thrombectomy-for-ali",
    "name": "Continuous Aspiration Thrombectomy (Penumbra Indigo Lightning 7/12) for ALI",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR461A",
    "rghsCode": "693 / 32 / 21",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Continuous Aspiration Thrombectomy (Penumbra Indigo Lightning 7/12) for ALI refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Continuous Aspiration Thrombectomy (Penumbra Indigo Lightning 7/12) for ALI.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-subclavian-artery-balloon-angioplasty-and",
    "name": "Subclavian Artery Balloon Angioplasty and Stenting",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR848A",
    "rghsCode": "693 / 32 / 58",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Subclavian Artery Balloon Angioplasty and Stenting refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Subclavian Artery Balloon Angioplasty and Stenting.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-axillary-artery-angioplasty-and-stent",
    "name": "Axillary Artery Angioplasty and Stent-Graft Placement",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR360A",
    "rghsCode": "693 / 32 / 20",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Axillary Artery Angioplasty and Stent-Graft Placement refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Axillary Artery Angioplasty and Stent-Graft Placement.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-brachial-artery-thrombectomy-angioplasty",
    "name": "Brachial Artery Thrombectomy / Angioplasty",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR503A",
    "rghsCode": "693 / 32 / 13",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Brachial Artery Thrombectomy / Angioplasty refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Brachial Artery Thrombectomy / Angioplasty.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-radial-artery-spasmolysis-and-recanalization",
    "name": "Radial Artery Spasmolysis and Recanalization",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR318A",
    "rghsCode": "693 / 32 / 28",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Radial Artery Spasmolysis and Recanalization refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Radial Artery Spasmolysis and Recanalization.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-hypothenar-hammer-syndrome-microvascular-recanalization",
    "name": "Hypothenar Hammer Syndrome Microvascular Recanalization and Embolization",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR518A",
    "rghsCode": "693 / 32 / 28",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Hypothenar Hammer Syndrome Microvascular Recanalization and Embolization refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Hypothenar Hammer Syndrome Microvascular Recanalization and Embolization.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c4-tibial-pedal-retrograde-puncture-for",
    "name": "Tibial / Pedal Retrograde Puncture for CLI Limb Salvage",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "code": "2849-AR103A",
    "rghsCode": "693 / 32 / 13",
    "icd10": "I70.219 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Clinically documented indication for Tibial / Pedal Retrograde Puncture for CLI Limb Salvage refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F - 6F Terumo Glidesheath Slender / Destination Sheath",
        "spec": "45 cm - 90 cm braided crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire & Balloon",
        "name": "0.014 / 0.018 Command / V-18 Guidewire & Ultraverse / Mustang Balloon",
        "spec": "150 cm - 300 cm hydrophilic wires and 2-6 mm balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Peripheral Stent",
        "name": "Self-Expanding Nitinol Bare / Drug-Eluting Stent (Innova / Zilver PTX)",
        "spec": "5 - 8 mm diameter x 40 - 150 mm length",
        "standardStore": "Cath Lab Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Tibial / Pedal Retrograde Puncture for CLI Limb Salvage.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Boston Scientific (+91 98291 22334)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-thoracic-endovascular-aortic-repair-for",
    "name": "Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aneurysm",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO950A",
    "rghsCode": "693 / 31 / 10",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aneurysm refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aneurysm.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-tevar-for-type-b-aortic",
    "name": "TEVAR for Type B Aortic Dissection (Complicated Acute / Subacute)",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO726A",
    "rghsCode": "693 / 31 / 36",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for TEVAR for Type B Aortic Dissection (Complicated Acute / Subacute) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for TEVAR for Type B Aortic Dissection (Complicated Acute / Subacute).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-tevar-for-traumatic-aortic-transection",
    "name": "TEVAR for Traumatic Aortic Transection (Blunt Thoracic Aortic Injury)",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO110A",
    "rghsCode": "693 / 31 / 20",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for TEVAR for Traumatic Aortic Transection (Blunt Thoracic Aortic Injury) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for TEVAR for Traumatic Aortic Transection (Blunt Thoracic Aortic Injury).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-distal-bare-stent-extension-for",
    "name": "Distal Bare-Stent Extension (PETTICOAT Technique) for Aortic Dissection",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO206A",
    "rghsCode": "693 / 31 / 16",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Distal Bare-Stent Extension (PETTICOAT Technique) for Aortic Dissection refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Distal Bare-Stent Extension (PETTICOAT Technique) for Aortic Dissection.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-stent-assisted-balloon-induced-intimal",
    "name": "Stent-Assisted Balloon-Induced Intimal Disruption and Relamination (STABILISE Technique)",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO459A",
    "rghsCode": "693 / 31 / 19",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Stent-Assisted Balloon-Induced Intimal Disruption and Relamination (STABILISE Technique) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Stent-Assisted Balloon-Induced Intimal Disruption and Relamination (STABILISE Technique).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-tevar-with-chimney-snorkel-periscope",
    "name": "TEVAR with Chimney / Snorkel / Periscope Technique (Ch-TEVAR)",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO789A",
    "rghsCode": "693 / 31 / 49",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for TEVAR with Chimney / Snorkel / Periscope Technique (Ch-TEVAR) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for TEVAR with Chimney / Snorkel / Periscope Technique (Ch-TEVAR).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-fenestrated-tevar",
    "name": "Fenestrated TEVAR (FTEVAR)",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO283A",
    "rghsCode": "693 / 31 / 43",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Fenestrated TEVAR (FTEVAR) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Fenestrated TEVAR (FTEVAR).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-branched-tevar-for-aortic-arch",
    "name": "Branched TEVAR (BTEVAR) for Aortic Arch Aneurysms",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO610A",
    "rghsCode": "693 / 31 / 20",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Branched TEVAR (BTEVAR) for Aortic Arch Aneurysms refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Branched TEVAR (BTEVAR) for Aortic Arch Aneurysms.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-in-situ-laser-fenestration-of",
    "name": "In Situ Laser Fenestration (ISLF) of Aortic Arch Branch Endografts",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO563A",
    "rghsCode": "693 / 31 / 23",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for In Situ Laser Fenestration (ISLF) of Aortic Arch Branch Endografts refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for In Situ Laser Fenestration (ISLF) of Aortic Arch Branch Endografts.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-physician-modified-endovascular-graft-for",
    "name": "Physician-Modified Endovascular Graft (PMEG) for Thoracic Arch / Abdomen",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO943A",
    "rghsCode": "693 / 31 / 53",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Physician-Modified Endovascular Graft (PMEG) for Thoracic Arch / Abdomen refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Physician-Modified Endovascular Graft (PMEG) for Thoracic Arch / Abdomen.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-endovascular-abdominal-aortic-aneurysm-repair",
    "name": "Endovascular Abdominal Aortic Aneurysm Repair (EVAR)",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO198A",
    "rghsCode": "693 / 31 / 58",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Endovascular Abdominal Aortic Aneurysm Repair (EVAR) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Endovascular Abdominal Aortic Aneurysm Repair (EVAR).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-percutaneous-evar-with-pre-close",
    "name": "Percutaneous EVAR (PEVAR) with Pre-close Technique (Perclose ProGlide / ProStyle)",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO691A",
    "rghsCode": "693 / 31 / 51",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Percutaneous EVAR (PEVAR) with Pre-close Technique (Perclose ProGlide / ProStyle) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous EVAR (PEVAR) with Pre-close Technique (Perclose ProGlide / ProStyle).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-fenestrated-evar-for-juxtarenal-suprarenal",
    "name": "Fenestrated EVAR (FEVAR) for Juxtarenal / Suprarenal Aneurysms",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO104A",
    "rghsCode": "693 / 31 / 14",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Fenestrated EVAR (FEVAR) for Juxtarenal / Suprarenal Aneurysms refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Fenestrated EVAR (FEVAR) for Juxtarenal / Suprarenal Aneurysms.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-branched-evar-for-thoracoabdominal-aortic",
    "name": "Branched EVAR (BEVAR) for Thoracoabdominal Aortic Aneurysms (TAAA)",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO304A",
    "rghsCode": "693 / 31 / 14",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Branched EVAR (BEVAR) for Thoracoabdominal Aortic Aneurysms (TAAA) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Branched EVAR (BEVAR) for Thoracoabdominal Aortic Aneurysms (TAAA).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-chimney-evar",
    "name": "Chimney EVAR (Ch-EVAR / Snorkel Technique)",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO280A",
    "rghsCode": "693 / 31 / 40",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Chimney EVAR (Ch-EVAR / Snorkel Technique) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Chimney EVAR (Ch-EVAR / Snorkel Technique).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-iliac-branch-device-implantation-for",
    "name": "Iliac Branch Device (IBD / IBE) Implantation for Common Iliac Aneurysms",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO720A",
    "rghsCode": "693 / 31 / 30",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Iliac Branch Device (IBD / IBE) Implantation for Common Iliac Aneurysms refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Iliac Branch Device (IBD / IBE) Implantation for Common Iliac Aneurysms.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-endoanchoring-for-endograft-migration-type",
    "name": "EndoAnchoring (Heli-FX EndoAnchor System) for Endograft Migration / Type IA Endoleak",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO980A",
    "rghsCode": "693 / 31 / 40",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for EndoAnchoring (Heli-FX EndoAnchor System) for Endograft Migration / Type IA Endoleak refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for EndoAnchoring (Heli-FX EndoAnchor System) for Endograft Migration / Type IA Endoleak.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-endovascular-aneurysm-sealing",
    "name": "Endovascular Aneurysm Sealing (EVAS)",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO836A",
    "rghsCode": "693 / 31 / 46",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Endovascular Aneurysm Sealing (EVAS) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Endovascular Aneurysm Sealing (EVAS).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-transarterial-coiling-liquid-embolization-of",
    "name": "Transarterial Coiling / Liquid Embolization of Type I Endoleak",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO266A",
    "rghsCode": "693 / 31 / 26",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Transarterial Coiling / Liquid Embolization of Type I Endoleak refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Coiling / Liquid Embolization of Type I Endoleak.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-direct-translumbar-sac-puncture-and",
    "name": "Direct Translumbar Sac Puncture and Liquid Embolization for Type II Endoleak",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO992A",
    "rghsCode": "693 / 31 / 52",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Direct Translumbar Sac Puncture and Liquid Embolization for Type II Endoleak refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Direct Translumbar Sac Puncture and Liquid Embolization for Type II Endoleak.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-transarterial-mesenteric-lumbar-catheterization-and",
    "name": "Transarterial Mesenteric / Lumbar Catheterization and Embolization of Type II Endoleak",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO319A",
    "rghsCode": "693 / 31 / 29",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Transarterial Mesenteric / Lumbar Catheterization and Embolization of Type II Endoleak refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Mesenteric / Lumbar Catheterization and Embolization of Type II Endoleak.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-transcaval-sac-puncture-and-embolization",
    "name": "Transcaval Sac Puncture and Embolization of Type II Endoleak",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO746A",
    "rghsCode": "693 / 31 / 56",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Transcaval Sac Puncture and Embolization of Type II Endoleak refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcaval Sac Puncture and Embolization of Type II Endoleak.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-relining-cuff-deployment-for-type",
    "name": "Relining / Cuff Deployment for Type III Endoleak",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO654A",
    "rghsCode": "693 / 31 / 14",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Relining / Cuff Deployment for Type III Endoleak refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Relining / Cuff Deployment for Type III Endoleak.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-candy-plug-technique-for-false",
    "name": "Candy-Plug Technique for False Lumen Occlusion in Chronic Dissection",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO742A",
    "rghsCode": "693 / 31 / 52",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Candy-Plug Technique for False Lumen Occlusion in Chronic Dissection refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Candy-Plug Technique for False Lumen Occlusion in Chronic Dissection.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-knickerbocker-technique-for-false-lumen",
    "name": "Knickerbocker Technique for False Lumen Occlusion",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO224A",
    "rghsCode": "693 / 31 / 34",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Knickerbocker Technique for False Lumen Occlusion refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Knickerbocker Technique for False Lumen Occlusion.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-false-lumen-coil-and-liquid",
    "name": "False Lumen Coil and Liquid Embolization in Aortic Dissection",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO443A",
    "rghsCode": "693 / 31 / 53",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for False Lumen Coil and Liquid Embolization in Aortic Dissection refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for False Lumen Coil and Liquid Embolization in Aortic Dissection.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-percutaneous-septal-fenestration-for-malperfusion",
    "name": "Percutaneous Septal Fenestration (Balloon / Needle / RF) for Malperfusion Syndrome",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO632A",
    "rghsCode": "693 / 31 / 42",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Percutaneous Septal Fenestration (Balloon / Needle / RF) for Malperfusion Syndrome refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Septal Fenestration (Balloon / Needle / RF) for Malperfusion Syndrome.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-endovascular-exclusion-of-mycotic-aortic",
    "name": "Endovascular Exclusion of Mycotic Aortic Aneurysm",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO348A",
    "rghsCode": "693 / 31 / 58",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Endovascular Exclusion of Mycotic Aortic Aneurysm refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Endovascular Exclusion of Mycotic Aortic Aneurysm.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-endovascular-stent-graft-exclusion-of",
    "name": "Endovascular Stent-Graft Exclusion of Aortoenteric Fistula (Bridge to Surgery)",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO413A",
    "rghsCode": "693 / 31 / 23",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Endovascular Stent-Graft Exclusion of Aortoenteric Fistula (Bridge to Surgery) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Endovascular Stent-Graft Exclusion of Aortoenteric Fistula (Bridge to Surgery).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c5-endovascular-stent-graft-exclusion-of-proc135",
    "name": "Endovascular Stent-Graft Exclusion of Aortobronchial Fistula",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "code": "2849-AO740A",
    "rghsCode": "693 / 31 / 50",
    "icd10": "I71.4 (Abdominal aortic aneurysm) / I71.01 (Thoracic aortic dissection)",
    "indications": [
      "Clinically documented indication for Endovascular Stent-Graft Exclusion of Aortobronchial Fistula refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "High-Flow Sheath",
        "name": "18F - 22F DrySeal Flex / Check-Flo Introducer Sheath",
        "spec": "Hydrophilic coated large bore introducer set",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Perclose ProGlide Suture-Mediated Closure System",
        "spec": "Dual pre-close arteriotomy suture devices",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft / Thoracic Endoprosthesis (Endurant / Valiant)",
        "spec": "Polyester / ePTFE with self-expanding nitinol skeleton",
        "standardStore": "Cath Lab High-Security Locker"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Endovascular Stent-Graft Exclusion of Aortobronchial Fistula.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Cardiovascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c6-renal-artery-balloon-angioplasty",
    "name": "Renal Artery Balloon Angioplasty (Atherosclerotic / Fibromuscular Dysplasia)",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "code": "2849-VR683A",
    "rghsCode": "693 / 34 / 43",
    "icd10": "I70.1 (Atherosclerosis of renal artery) / K55.1 (Chronic vascular disorders of intestine)",
    "indications": [
      "Clinically documented indication for Renal Artery Balloon Angioplasty (Atherosclerotic / Fibromuscular Dysplasia) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F Ansel / Fortress Guiding Sheath",
        "spec": "45 cm - 55 cm with radiopaque marker",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Balloon-Expandable Stent",
        "name": "Renal / Visceral Chromium-Cobalt Balloon-Expandable Stent (Omnilink / Dynamic)",
        "spec": "5 - 7 mm diameter x 15 - 19 mm length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat Microcatheter System",
        "spec": "130 cm with 0.014 microwire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Renal Artery Balloon Angioplasty (Atherosclerotic / Fibromuscular Dysplasia).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Abbott Vascular (+91 98292 44556)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c6-renal-artery-stenting-with-monorail",
    "name": "Renal Artery Stenting with Monorail Balloon-Expandable Stent",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "code": "2849-VR551A",
    "rghsCode": "693 / 34 / 11",
    "icd10": "I70.1 (Atherosclerosis of renal artery) / K55.1 (Chronic vascular disorders of intestine)",
    "indications": [
      "Clinically documented indication for Renal Artery Stenting with Monorail Balloon-Expandable Stent refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F Ansel / Fortress Guiding Sheath",
        "spec": "45 cm - 55 cm with radiopaque marker",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Balloon-Expandable Stent",
        "name": "Renal / Visceral Chromium-Cobalt Balloon-Expandable Stent (Omnilink / Dynamic)",
        "spec": "5 - 7 mm diameter x 15 - 19 mm length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat Microcatheter System",
        "spec": "130 cm with 0.014 microwire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Renal Artery Stenting with Monorail Balloon-Expandable Stent.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Abbott Vascular (+91 98292 44556)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c6-renal-artery-covered-stent-placement",
    "name": "Renal Artery Covered Stent Placement for Iatrogenic / Traumatic Rupture",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "code": "2849-VR793A",
    "rghsCode": "693 / 34 / 53",
    "icd10": "I70.1 (Atherosclerosis of renal artery) / K55.1 (Chronic vascular disorders of intestine)",
    "indications": [
      "Clinically documented indication for Renal Artery Covered Stent Placement for Iatrogenic / Traumatic Rupture refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F Ansel / Fortress Guiding Sheath",
        "spec": "45 cm - 55 cm with radiopaque marker",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Balloon-Expandable Stent",
        "name": "Renal / Visceral Chromium-Cobalt Balloon-Expandable Stent (Omnilink / Dynamic)",
        "spec": "5 - 7 mm diameter x 15 - 19 mm length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat Microcatheter System",
        "spec": "130 cm with 0.014 microwire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Renal Artery Covered Stent Placement for Iatrogenic / Traumatic Rupture.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Abbott Vascular (+91 98292 44556)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c6-renal-artery-aneurysm-embolization",
    "name": "Renal Artery Aneurysm Embolization (Stent-Assisted Coiling, Flow Diversion)",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "code": "2849-VR122A",
    "rghsCode": "693 / 34 / 32",
    "icd10": "I70.1 (Atherosclerosis of renal artery) / K55.1 (Chronic vascular disorders of intestine)",
    "indications": [
      "Clinically documented indication for Renal Artery Aneurysm Embolization (Stent-Assisted Coiling, Flow Diversion) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F Ansel / Fortress Guiding Sheath",
        "spec": "45 cm - 55 cm with radiopaque marker",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Balloon-Expandable Stent",
        "name": "Renal / Visceral Chromium-Cobalt Balloon-Expandable Stent (Omnilink / Dynamic)",
        "spec": "5 - 7 mm diameter x 15 - 19 mm length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat Microcatheter System",
        "spec": "130 cm with 0.014 microwire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Renal Artery Aneurysm Embolization (Stent-Assisted Coiling, Flow Diversion).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Abbott Vascular (+91 98292 44556)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c6-catheter-based-renal-sympathetic-denervation",
    "name": "Catheter-Based Renal Sympathetic Denervation (RDN) - Radiofrequency (Symplicity Spyral)",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "code": "2849-VR189A",
    "rghsCode": "693 / 34 / 49",
    "icd10": "I70.1 (Atherosclerosis of renal artery) / K55.1 (Chronic vascular disorders of intestine)",
    "indications": [
      "Clinically documented indication for Catheter-Based Renal Sympathetic Denervation (RDN) - Radiofrequency (Symplicity Spyral) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F Ansel / Fortress Guiding Sheath",
        "spec": "45 cm - 55 cm with radiopaque marker",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Balloon-Expandable Stent",
        "name": "Renal / Visceral Chromium-Cobalt Balloon-Expandable Stent (Omnilink / Dynamic)",
        "spec": "5 - 7 mm diameter x 15 - 19 mm length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat Microcatheter System",
        "spec": "130 cm with 0.014 microwire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Catheter-Based Renal Sympathetic Denervation (RDN) - Radiofrequency (Symplicity Spyral).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Abbott Vascular (+91 98292 44556)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c6-catheter-based-renal-sympathetic-denervation-proc141",
    "name": "Catheter-Based Renal Sympathetic Denervation (RDN) - Ultrasound (Paradise System)",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "code": "2849-VR658A",
    "rghsCode": "693 / 34 / 18",
    "icd10": "I70.1 (Atherosclerosis of renal artery) / K55.1 (Chronic vascular disorders of intestine)",
    "indications": [
      "Clinically documented indication for Catheter-Based Renal Sympathetic Denervation (RDN) - Ultrasound (Paradise System) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F Ansel / Fortress Guiding Sheath",
        "spec": "45 cm - 55 cm with radiopaque marker",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Balloon-Expandable Stent",
        "name": "Renal / Visceral Chromium-Cobalt Balloon-Expandable Stent (Omnilink / Dynamic)",
        "spec": "5 - 7 mm diameter x 15 - 19 mm length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat Microcatheter System",
        "spec": "130 cm with 0.014 microwire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Catheter-Based Renal Sympathetic Denervation (RDN) - Ultrasound (Paradise System).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Abbott Vascular (+91 98292 44556)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c6-celiac-artery-balloon-angioplasty-and",
    "name": "Celiac Artery Balloon Angioplasty and Stenting",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "code": "2849-VR333A",
    "rghsCode": "693 / 34 / 43",
    "icd10": "I70.1 (Atherosclerosis of renal artery) / K55.1 (Chronic vascular disorders of intestine)",
    "indications": [
      "Clinically documented indication for Celiac Artery Balloon Angioplasty and Stenting refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F Ansel / Fortress Guiding Sheath",
        "spec": "45 cm - 55 cm with radiopaque marker",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Balloon-Expandable Stent",
        "name": "Renal / Visceral Chromium-Cobalt Balloon-Expandable Stent (Omnilink / Dynamic)",
        "spec": "5 - 7 mm diameter x 15 - 19 mm length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat Microcatheter System",
        "spec": "130 cm with 0.014 microwire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Celiac Artery Balloon Angioplasty and Stenting.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Abbott Vascular (+91 98292 44556)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c6-superior-mesenteric-artery-angioplasty-and",
    "name": "Superior Mesenteric Artery (SMA) Angioplasty and Stenting for Chronic Mesenteric Ischemia",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "code": "2849-VR492A",
    "rghsCode": "693 / 34 / 52",
    "icd10": "I70.1 (Atherosclerosis of renal artery) / K55.1 (Chronic vascular disorders of intestine)",
    "indications": [
      "Clinically documented indication for Superior Mesenteric Artery (SMA) Angioplasty and Stenting for Chronic Mesenteric Ischemia refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F Ansel / Fortress Guiding Sheath",
        "spec": "45 cm - 55 cm with radiopaque marker",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Balloon-Expandable Stent",
        "name": "Renal / Visceral Chromium-Cobalt Balloon-Expandable Stent (Omnilink / Dynamic)",
        "spec": "5 - 7 mm diameter x 15 - 19 mm length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat Microcatheter System",
        "spec": "130 cm with 0.014 microwire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Superior Mesenteric Artery (SMA) Angioplasty and Stenting for Chronic Mesenteric Ischemia.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Abbott Vascular (+91 98292 44556)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c6-retrograde-open-mesenteric-stenting",
    "name": "Retrograde Open Mesenteric Stenting (ROMS - Hybrid Procedure)",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "code": "2849-VR164A",
    "rghsCode": "693 / 34 / 24",
    "icd10": "I70.1 (Atherosclerosis of renal artery) / K55.1 (Chronic vascular disorders of intestine)",
    "indications": [
      "Clinically documented indication for Retrograde Open Mesenteric Stenting (ROMS - Hybrid Procedure) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F Ansel / Fortress Guiding Sheath",
        "spec": "45 cm - 55 cm with radiopaque marker",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Balloon-Expandable Stent",
        "name": "Renal / Visceral Chromium-Cobalt Balloon-Expandable Stent (Omnilink / Dynamic)",
        "spec": "5 - 7 mm diameter x 15 - 19 mm length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat Microcatheter System",
        "spec": "130 cm with 0.014 microwire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Retrograde Open Mesenteric Stenting (ROMS - Hybrid Procedure).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Abbott Vascular (+91 98292 44556)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c6-catheter-directed-thrombolysis-for-acute",
    "name": "Catheter-Directed Thrombolysis for Acute Superior Mesenteric Artery Embolism / Thrombosis",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "code": "2849-VR281A",
    "rghsCode": "693 / 34 / 41",
    "icd10": "I70.1 (Atherosclerosis of renal artery) / K55.1 (Chronic vascular disorders of intestine)",
    "indications": [
      "Clinically documented indication for Catheter-Directed Thrombolysis for Acute Superior Mesenteric Artery Embolism / Thrombosis refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F Ansel / Fortress Guiding Sheath",
        "spec": "45 cm - 55 cm with radiopaque marker",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Balloon-Expandable Stent",
        "name": "Renal / Visceral Chromium-Cobalt Balloon-Expandable Stent (Omnilink / Dynamic)",
        "spec": "5 - 7 mm diameter x 15 - 19 mm length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat Microcatheter System",
        "spec": "130 cm with 0.014 microwire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Catheter-Directed Thrombolysis for Acute Superior Mesenteric Artery Embolism / Thrombosis.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Abbott Vascular (+91 98292 44556)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c6-mechanical-aspiration-thrombectomy-for-acute",
    "name": "Mechanical Aspiration Thrombectomy for Acute SMA Occlusion",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "code": "2849-VR796A",
    "rghsCode": "693 / 34 / 56",
    "icd10": "I70.1 (Atherosclerosis of renal artery) / K55.1 (Chronic vascular disorders of intestine)",
    "indications": [
      "Clinically documented indication for Mechanical Aspiration Thrombectomy for Acute SMA Occlusion refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F Ansel / Fortress Guiding Sheath",
        "spec": "45 cm - 55 cm with radiopaque marker",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Balloon-Expandable Stent",
        "name": "Renal / Visceral Chromium-Cobalt Balloon-Expandable Stent (Omnilink / Dynamic)",
        "spec": "5 - 7 mm diameter x 15 - 19 mm length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat Microcatheter System",
        "spec": "130 cm with 0.014 microwire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Mechanical Aspiration Thrombectomy for Acute SMA Occlusion.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Abbott Vascular (+91 98292 44556)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c6-inferior-mesenteric-artery-angioplasty-and",
    "name": "Inferior Mesenteric Artery (IMA) Angioplasty and Stenting",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "code": "2849-VR998A",
    "rghsCode": "693 / 34 / 58",
    "icd10": "I70.1 (Atherosclerosis of renal artery) / K55.1 (Chronic vascular disorders of intestine)",
    "indications": [
      "Clinically documented indication for Inferior Mesenteric Artery (IMA) Angioplasty and Stenting refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F Ansel / Fortress Guiding Sheath",
        "spec": "45 cm - 55 cm with radiopaque marker",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Balloon-Expandable Stent",
        "name": "Renal / Visceral Chromium-Cobalt Balloon-Expandable Stent (Omnilink / Dynamic)",
        "spec": "5 - 7 mm diameter x 15 - 19 mm length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat Microcatheter System",
        "spec": "130 cm with 0.014 microwire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Inferior Mesenteric Artery (IMA) Angioplasty and Stenting.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Abbott Vascular (+91 98292 44556)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c6-hepatic-artery-angioplasty-and-stenting",
    "name": "Hepatic Artery Angioplasty and Stenting (Post-Orthotopic Liver Transplant Stenosis)",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "code": "2849-VR538A",
    "rghsCode": "693 / 34 / 48",
    "icd10": "I70.1 (Atherosclerosis of renal artery) / K55.1 (Chronic vascular disorders of intestine)",
    "indications": [
      "Clinically documented indication for Hepatic Artery Angioplasty and Stenting (Post-Orthotopic Liver Transplant Stenosis) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F Ansel / Fortress Guiding Sheath",
        "spec": "45 cm - 55 cm with radiopaque marker",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Balloon-Expandable Stent",
        "name": "Renal / Visceral Chromium-Cobalt Balloon-Expandable Stent (Omnilink / Dynamic)",
        "spec": "5 - 7 mm diameter x 15 - 19 mm length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat Microcatheter System",
        "spec": "130 cm with 0.014 microwire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Hepatic Artery Angioplasty and Stenting (Post-Orthotopic Liver Transplant Stenosis).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Abbott Vascular (+91 98292 44556)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c6-splenic-artery-angioplasty-and-stenting",
    "name": "Splenic Artery Angioplasty and Stenting",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "code": "2849-VR853A",
    "rghsCode": "693 / 34 / 13",
    "icd10": "I70.1 (Atherosclerosis of renal artery) / K55.1 (Chronic vascular disorders of intestine)",
    "indications": [
      "Clinically documented indication for Splenic Artery Angioplasty and Stenting refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F Ansel / Fortress Guiding Sheath",
        "spec": "45 cm - 55 cm with radiopaque marker",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Balloon-Expandable Stent",
        "name": "Renal / Visceral Chromium-Cobalt Balloon-Expandable Stent (Omnilink / Dynamic)",
        "spec": "5 - 7 mm diameter x 15 - 19 mm length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat Microcatheter System",
        "spec": "130 cm with 0.014 microwire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Splenic Artery Angioplasty and Stenting.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Abbott Vascular (+91 98292 44556)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c6-median-arcuate-ligament-release-post",
    "name": "Median Arcuate Ligament Release Post-Surgical Endovascular Celiac Stenting",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "code": "2849-VR371A",
    "rghsCode": "693 / 34 / 31",
    "icd10": "I70.1 (Atherosclerosis of renal artery) / K55.1 (Chronic vascular disorders of intestine)",
    "indications": [
      "Clinically documented indication for Median Arcuate Ligament Release Post-Surgical Endovascular Celiac Stenting refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F Ansel / Fortress Guiding Sheath",
        "spec": "45 cm - 55 cm with radiopaque marker",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Balloon-Expandable Stent",
        "name": "Renal / Visceral Chromium-Cobalt Balloon-Expandable Stent (Omnilink / Dynamic)",
        "spec": "5 - 7 mm diameter x 15 - 19 mm length",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat Microcatheter System",
        "spec": "130 cm with 0.014 microwire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Median Arcuate Ligament Release Post-Surgical Endovascular Celiac Stenting.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Abbott Vascular (+91 98292 44556)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c7-bronchial-artery-embolization-for-massive",
    "name": "Bronchial Artery Embolization (BAE) for Massive Hemoptysis (PVA, Gelatin, Microspheres)",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR514A",
    "rghsCode": "693 / 15 / 24",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Bronchial Artery Embolization (BAE) for Massive Hemoptysis (PVA, Gelatin, Microspheres) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Bronchial Artery Embolization (BAE) for Massive Hemoptysis (PVA, Gelatin, Microspheres).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-non-bronchial-systemic-arterial-embolization",
    "name": "Non-Bronchial Systemic Arterial Embolization for Hemoptysis (Intercostal, IMA, Thyrocervical)",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR379A",
    "rghsCode": "693 / 15 / 39",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Non-Bronchial Systemic Arterial Embolization for Hemoptysis (Intercostal, IMA, Thyrocervical) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Non-Bronchial Systemic Arterial Embolization for Hemoptysis (Intercostal, IMA, Thyrocervical).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-left-gastric-artery-embolization-for",
    "name": "Left Gastric Artery Embolization for Severe Refractory Peptic Ulcer Bleeding",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR899A",
    "rghsCode": "693 / 15 / 59",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Left Gastric Artery Embolization for Severe Refractory Peptic Ulcer Bleeding refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Left Gastric Artery Embolization for Severe Refractory Peptic Ulcer Bleeding.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-gastroduodenal-artery-sandwich-coiling-for",
    "name": "Gastroduodenal Artery (GDA) \"Sandwich\" Coiling for Duodenal Ulcer Bleeding",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR250A",
    "rghsCode": "693 / 15 / 10",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Gastroduodenal Artery (GDA) \"Sandwich\" Coiling for Duodenal Ulcer Bleeding refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Gastroduodenal Artery (GDA) \"Sandwich\" Coiling for Duodenal Ulcer Bleeding.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-right-gastric-artery-embolization-for",
    "name": "Right Gastric Artery Embolization for Gastric Hemorrhage",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR386A",
    "rghsCode": "693 / 15 / 46",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Right Gastric Artery Embolization for Gastric Hemorrhage refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Right Gastric Artery Embolization for Gastric Hemorrhage.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-pancreaticoduodenal-arcade-coiling-glue-embolization",
    "name": "Pancreaticoduodenal Arcade Coiling / Glue Embolization",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR580A",
    "rghsCode": "693 / 15 / 40",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Pancreaticoduodenal Arcade Coiling / Glue Embolization refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Pancreaticoduodenal Arcade Coiling / Glue Embolization.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-transcatheter-embolization-of-diverticular-hemorrhage",
    "name": "Transcatheter Embolization of Diverticular Hemorrhage (Microcoils, PVA particles)",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR907A",
    "rghsCode": "693 / 15 / 17",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Transcatheter Embolization of Diverticular Hemorrhage (Microcoils, PVA particles) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Embolization of Diverticular Hemorrhage (Microcoils, PVA particles).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-transcatheter-embolization-of-angiodysplasia-induced",
    "name": "Transcatheter Embolization of Angiodysplasia-Induced Lower GI Bleeding",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR779A",
    "rghsCode": "693 / 15 / 39",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Transcatheter Embolization of Angiodysplasia-Induced Lower GI Bleeding refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Embolization of Angiodysplasia-Induced Lower GI Bleeding.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-superior-rectal-artery-embolization-for",
    "name": "Superior Rectal Artery Embolization for Refractory Hemorrhoidal Bleeding (Emborrhoid Technique)",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR308A",
    "rghsCode": "693 / 15 / 18",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Superior Rectal Artery Embolization for Refractory Hemorrhoidal Bleeding (Emborrhoid Technique) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Superior Rectal Artery Embolization for Refractory Hemorrhoidal Bleeding (Emborrhoid Technique).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-transcatheter-hepatic-arterial-embolization-for",
    "name": "Transcatheter Hepatic Arterial Embolization for Blunt Liver Trauma",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR626A",
    "rghsCode": "693 / 15 / 36",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Transcatheter Hepatic Arterial Embolization for Blunt Liver Trauma refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Hepatic Arterial Embolization for Blunt Liver Trauma.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-splenic-artery-embolization-for-high",
    "name": "Splenic Artery Embolization for High-Grade Trauma (Proximal Main Trunk Coil Occlusion)",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR584A",
    "rghsCode": "693 / 15 / 44",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Splenic Artery Embolization for High-Grade Trauma (Proximal Main Trunk Coil Occlusion) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Splenic Artery Embolization for High-Grade Trauma (Proximal Main Trunk Coil Occlusion).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-selective-distal-embolization-for-splenic",
    "name": "Selective Distal Embolization for Splenic Pseudoaneurysms / Arteriovenous Fistulae",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR755A",
    "rghsCode": "693 / 15 / 15",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Selective Distal Embolization for Splenic Pseudoaneurysms / Arteriovenous Fistulae refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Selective Distal Embolization for Splenic Pseudoaneurysms / Arteriovenous Fistulae.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-superselective-transcatheter-renal-embolization-for",
    "name": "Superselective Transcatheter Renal Embolization for Post-Biopsy / Post-PCNL Bleeding",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR488A",
    "rghsCode": "693 / 15 / 48",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Superselective Transcatheter Renal Embolization for Post-Biopsy / Post-PCNL Bleeding refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Superselective Transcatheter Renal Embolization for Post-Biopsy / Post-PCNL Bleeding.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-transcatheter-renal-embolization-for-high",
    "name": "Transcatheter Renal Embolization for High-Grade Blunt / Penetrating Renal Trauma",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR325A",
    "rghsCode": "693 / 15 / 35",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Transcatheter Renal Embolization for High-Grade Blunt / Penetrating Renal Trauma refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Renal Embolization for High-Grade Blunt / Penetrating Renal Trauma.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-renal-angiomyolipoma-prophylactic-embolization",
    "name": "Renal Angiomyolipoma (AML) Prophylactic Embolization",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR918A",
    "rghsCode": "693 / 15 / 28",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Renal Angiomyolipoma (AML) Prophylactic Embolization refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Renal Angiomyolipoma (AML) Prophylactic Embolization.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-selective-internal-iliac-branch-embolization",
    "name": "Selective Internal Iliac / Branch Embolization for Unstable Pelvic Ring Fractures",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR364A",
    "rghsCode": "693 / 15 / 24",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Selective Internal Iliac / Branch Embolization for Unstable Pelvic Ring Fractures refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Selective Internal Iliac / Branch Embolization for Unstable Pelvic Ring Fractures.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-superior-gluteal-artery-embolization-for",
    "name": "Superior Gluteal Artery Embolization for Pelvic Trauma",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR653A",
    "rghsCode": "693 / 15 / 13",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Superior Gluteal Artery Embolization for Pelvic Trauma refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Superior Gluteal Artery Embolization for Pelvic Trauma.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-internal-pudendal-artery-embolization-for",
    "name": "Internal Pudendal Artery Embolization for Pelvic Fracture Bleeding",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR597A",
    "rghsCode": "693 / 15 / 57",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Internal Pudendal Artery Embolization for Pelvic Fracture Bleeding refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Internal Pudendal Artery Embolization for Pelvic Fracture Bleeding.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-obturator-artery-embolization",
    "name": "Obturator Artery Embolization (Corona Mortis Bleeding)",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR579A",
    "rghsCode": "693 / 15 / 39",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Obturator Artery Embolization (Corona Mortis Bleeding) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Obturator Artery Embolization (Corona Mortis Bleeding).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-intercostal-artery-embolization-for-thoracic",
    "name": "Intercostal Artery Embolization for Thoracic Trauma / Post-Thoracentesis Bleeding",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR354A",
    "rghsCode": "693 / 15 / 14",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Intercostal Artery Embolization for Thoracic Trauma / Post-Thoracentesis Bleeding refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Intercostal Artery Embolization for Thoracic Trauma / Post-Thoracentesis Bleeding.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-lumbar-artery-embolization-for-spontaneous",
    "name": "Lumbar Artery Embolization for Spontaneous Retroperitoneal Bleeding / Psoas Hematoma",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR646A",
    "rghsCode": "693 / 15 / 56",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Lumbar Artery Embolization for Spontaneous Retroperitoneal Bleeding / Psoas Hematoma refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Lumbar Artery Embolization for Spontaneous Retroperitoneal Bleeding / Psoas Hematoma.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-inferior-epigastric-artery-embolization-for",
    "name": "Inferior Epigastric Artery Embolization for Rectus Sheath Hematoma",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR328A",
    "rghsCode": "693 / 15 / 38",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Inferior Epigastric Artery Embolization for Rectus Sheath Hematoma refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Inferior Epigastric Artery Embolization for Rectus Sheath Hematoma.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-deep-circumflex-iliac-artery-embolization",
    "name": "Deep Circumflex Iliac Artery Embolization",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR481A",
    "rghsCode": "693 / 15 / 41",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Deep Circumflex Iliac Artery Embolization refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Deep Circumflex Iliac Artery Embolization.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-transcatheter-embolization-for-intractable-epistaxis",
    "name": "Transcatheter Embolization for Intractable Epistaxis (Sphenopalatine / Internal Maxillary Branches)",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR757A",
    "rghsCode": "693 / 15 / 17",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Transcatheter Embolization for Intractable Epistaxis (Sphenopalatine / Internal Maxillary Branches) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Embolization for Intractable Epistaxis (Sphenopalatine / Internal Maxillary Branches).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-facial-artery-embolization-for-post",
    "name": "Facial Artery Embolization for Post-Traumatic Maxillofacial Bleeding",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR919A",
    "rghsCode": "693 / 15 / 29",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Facial Artery Embolization for Post-Traumatic Maxillofacial Bleeding refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Facial Artery Embolization for Post-Traumatic Maxillofacial Bleeding.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-superselective-transcatheter-arterial-embolization-of",
    "name": "Superselective Transcatheter Arterial Embolization of Splanchnic Aneurysms / Pseudoaneurysms",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR448A",
    "rghsCode": "693 / 15 / 58",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Superselective Transcatheter Arterial Embolization of Splanchnic Aneurysms / Pseudoaneurysms refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Superselective Transcatheter Arterial Embolization of Splanchnic Aneurysms / Pseudoaneurysms.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-ultrasound-guided-percutaneous-thrombin-injection",
    "name": "Ultrasound-Guided Percutaneous Thrombin Injection for Femoral Pseudoaneurysm",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR824A",
    "rghsCode": "693 / 15 / 34",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Ultrasound-Guided Percutaneous Thrombin Injection for Femoral Pseudoaneurysm refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Ultrasound-Guided Percutaneous Thrombin Injection for Femoral Pseudoaneurysm.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-ultrasound-guided-percutaneous-thrombin-injection-proc178",
    "name": "Ultrasound-Guided Percutaneous Thrombin Injection for Visceral / Peripheral Pseudoaneurysms",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR658A",
    "rghsCode": "693 / 15 / 18",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Ultrasound-Guided Percutaneous Thrombin Injection for Visceral / Peripheral Pseudoaneurysms refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Ultrasound-Guided Percutaneous Thrombin Injection for Visceral / Peripheral Pseudoaneurysms.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-transcatheter-coil-microvascular-plug-occlusion",
    "name": "Transcatheter Coil / Microvascular Plug Occlusion of Iatrogenic Pseudoaneurysms",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR657A",
    "rghsCode": "693 / 15 / 17",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Transcatheter Coil / Microvascular Plug Occlusion of Iatrogenic Pseudoaneurysms refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Coil / Microvascular Plug Occlusion of Iatrogenic Pseudoaneurysms.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-transcatheter-cyanoacrylate-embolization-of-pseudoaneurysms",
    "name": "Transcatheter Cyanoacrylate (Glue) Embolization of Pseudoaneurysms",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR819A",
    "rghsCode": "693 / 15 / 29",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Transcatheter Cyanoacrylate (Glue) Embolization of Pseudoaneurysms refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Cyanoacrylate (Glue) Embolization of Pseudoaneurysms.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-covered-stent-exclusion-of-iatrogenic",
    "name": "Covered Stent Exclusion of Iatrogenic Arterial Dissections / Ruptures",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR939A",
    "rghsCode": "693 / 15 / 49",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Covered Stent Exclusion of Iatrogenic Arterial Dissections / Ruptures refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Covered Stent Exclusion of Iatrogenic Arterial Dissections / Ruptures.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-preoperative-tumor-devascularization-embolization",
    "name": "Preoperative Tumor Devascularization / Embolization (Hypervascular Bone / RCC / Thyroid Mets)",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR824A",
    "rghsCode": "693 / 15 / 34",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Preoperative Tumor Devascularization / Embolization (Hypervascular Bone / RCC / Thyroid Mets) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Preoperative Tumor Devascularization / Embolization (Hypervascular Bone / RCC / Thyroid Mets).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-carotid-blowout-syndrome-covered-stent",
    "name": "Carotid Blowout Syndrome Covered Stent Exclusion",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR872A",
    "rghsCode": "693 / 15 / 32",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Carotid Blowout Syndrome Covered Stent Exclusion refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Carotid Blowout Syndrome Covered Stent Exclusion.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c7-carotid-blowout-syndrome-therapeutic-parent",
    "name": "Carotid Blowout Syndrome Therapeutic Parent Vessel Occlusion (PVO)",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "code": "2849-TR594A",
    "rghsCode": "693 / 15 / 54",
    "icd10": "T14.91 (Traumatic hemorrhage) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Clinically documented indication for Carotid Blowout Syndrome Therapeutic Parent Vessel Occlusion (PVO) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Emergency Access",
        "name": "5F - 6F Radiofocus Introducer Sheath Kit",
        "spec": "11 cm rapid femoral / radial access",
        "standardStore": "Emergency Cath Lab Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.7F Merit Maestro / Progreat Microcatheter",
        "spec": "130-150 cm superselective high flow",
        "standardStore": "Emergency IR Unit"
      },
      {
        "category": "Embolic Devices",
        "name": "Detachable & Pushable Microcoils (Concerto / Nester) & Gelfoam",
        "spec": "2 - 10 mm diameter fibered platinum coils",
        "standardStore": "DDC-14 Central Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Carotid Blowout Syndrome Therapeutic Parent Vessel Occlusion (PVO).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c10-catheter-directed-thrombolysis-for-acute",
    "name": "Catheter-Directed Thrombolysis (CDT) for Acute Iliofemoral Deep Vein Thrombosis (DVT)",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN761A",
    "rghsCode": "693 / 21 / 21",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Catheter-Directed Thrombolysis (CDT) for Acute Iliofemoral Deep Vein Thrombosis (DVT) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Catheter-Directed Thrombolysis (CDT) for Acute Iliofemoral Deep Vein Thrombosis (DVT).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-pharmacomechanical-catheter-directed-thrombolysis-using",
    "name": "Pharmacomechanical Catheter-Directed Thrombolysis (PCDT) using AngioJet Clot-Hunter",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN440A",
    "rghsCode": "693 / 21 / 50",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Pharmacomechanical Catheter-Directed Thrombolysis (PCDT) using AngioJet Clot-Hunter refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Pharmacomechanical Catheter-Directed Thrombolysis (PCDT) using AngioJet Clot-Hunter.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-acoustic-pulse-thrombolysis-for-iliofemoral",
    "name": "Acoustic Pulse Thrombolysis (EKOSEndoWave System) for Iliofemoral DVT",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN329A",
    "rghsCode": "693 / 21 / 39",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Acoustic Pulse Thrombolysis (EKOSEndoWave System) for Iliofemoral DVT refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Acoustic Pulse Thrombolysis (EKOSEndoWave System) for Iliofemoral DVT.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-pure-mechanical-thrombectomy-for-iliofemoral",
    "name": "Pure Mechanical Thrombectomy for Iliofemoral DVT (Inari ClotTriever System)",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN970A",
    "rghsCode": "693 / 21 / 30",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Pure Mechanical Thrombectomy for Iliofemoral DVT (Inari ClotTriever System) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Pure Mechanical Thrombectomy for Iliofemoral DVT (Inari ClotTriever System).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-aspiration-thrombectomy-for-acute-dvt",
    "name": "Aspiration Thrombectomy for Acute DVT (Penumbra Lightning Bolt / Indigo System)",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN892A",
    "rghsCode": "693 / 21 / 52",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Aspiration Thrombectomy for Acute DVT (Penumbra Lightning Bolt / Indigo System) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Aspiration Thrombectomy for Acute DVT (Penumbra Lightning Bolt / Indigo System).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-iliac-vein-balloon-angioplasty-for",
    "name": "Iliac Vein Balloon Angioplasty for May-Thurner Syndrome",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN560A",
    "rghsCode": "693 / 21 / 20",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Iliac Vein Balloon Angioplasty for May-Thurner Syndrome refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Iliac Vein Balloon Angioplasty for May-Thurner Syndrome.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-dedicated-venous-stenting-for-may",
    "name": "Dedicated Venous Stenting for May-Thurner Syndrome (Venovo, Abre, Vici, Zilver Vena)",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN769A",
    "rghsCode": "693 / 21 / 29",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Dedicated Venous Stenting for May-Thurner Syndrome (Venovo, Abre, Vici, Zilver Vena) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Dedicated Venous Stenting for May-Thurner Syndrome (Venovo, Abre, Vici, Zilver Vena).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-recanalization-and-reconstruction-of-chronic",
    "name": "Recanalization and Reconstruction of Chronic Total Occlusions of the IVC",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN905A",
    "rghsCode": "693 / 21 / 15",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Recanalization and Reconstruction of Chronic Total Occlusions of the IVC refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Recanalization and Reconstruction of Chronic Total Occlusions of the IVC.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-kissing-venous-stents-deployment-for",
    "name": "\"Kissing\" Venous Stents Deployment for Caval-Bifurcation Chronic Thrombosis",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN297A",
    "rghsCode": "693 / 21 / 57",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for \"Kissing\" Venous Stents Deployment for Caval-Bifurcation Chronic Thrombosis refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for \"Kissing\" Venous Stents Deployment for Caval-Bifurcation Chronic Thrombosis.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-inferior-vena-cava-filter-placement",
    "name": "Inferior Vena Cava (IVC) Filter Placement (Infrarenal, Jugular / Femoral Approach)",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN614A",
    "rghsCode": "693 / 21 / 24",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Inferior Vena Cava (IVC) Filter Placement (Infrarenal, Jugular / Femoral Approach) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Inferior Vena Cava (IVC) Filter Placement (Infrarenal, Jugular / Femoral Approach).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-suprarenal-ivc-filter-placement",
    "name": "Suprarenal IVC Filter Placement",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN405A",
    "rghsCode": "693 / 21 / 15",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Suprarenal IVC Filter Placement refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Suprarenal IVC Filter Placement.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-temporary-retrievable-ivc-filter-removal",
    "name": "Temporary / Retrievable IVC Filter Removal (Standard Snare Technique)",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN685A",
    "rghsCode": "693 / 21 / 45",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Temporary / Retrievable IVC Filter Removal (Standard Snare Technique) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Temporary / Retrievable IVC Filter Removal (Standard Snare Technique).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-complex-advanced-ivc-filter-retrieval",
    "name": "Complex / Advanced IVC Filter Retrieval (Loop-Snare / Hangman Technique)",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN330A",
    "rghsCode": "693 / 21 / 40",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Complex / Advanced IVC Filter Retrieval (Loop-Snare / Hangman Technique) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Complex / Advanced IVC Filter Retrieval (Loop-Snare / Hangman Technique).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-complex-ivc-filter-retrieval-with",
    "name": "Complex IVC Filter Retrieval with Endobronchial Forceps",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN606A",
    "rghsCode": "693 / 21 / 16",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Complex IVC Filter Retrieval with Endobronchial Forceps refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Complex IVC Filter Retrieval with Endobronchial Forceps.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-complex-ivc-filter-retrieval-with-proc199",
    "name": "Complex IVC Filter Retrieval with Excimer Laser Sheath",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN578A",
    "rghsCode": "693 / 21 / 38",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Complex IVC Filter Retrieval with Excimer Laser Sheath refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Complex IVC Filter Retrieval with Excimer Laser Sheath.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-superior-vena-cava-syndrome-balloon",
    "name": "Superior Vena Cava (SVC) Syndrome Balloon Angioplasty",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN382A",
    "rghsCode": "693 / 21 / 42",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Superior Vena Cava (SVC) Syndrome Balloon Angioplasty refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Superior Vena Cava (SVC) Syndrome Balloon Angioplasty.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-svc-stenting-for-malignant-obstruction",
    "name": "SVC Stenting for Malignant Obstruction",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN518A",
    "rghsCode": "693 / 21 / 28",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for SVC Stenting for Malignant Obstruction refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for SVC Stenting for Malignant Obstruction.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-internal-jugular-vein-balloon-angioplasty",
    "name": "Internal Jugular Vein Balloon Angioplasty and Stenting",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN346A",
    "rghsCode": "693 / 21 / 56",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Internal Jugular Vein Balloon Angioplasty and Stenting refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Internal Jugular Vein Balloon Angioplasty and Stenting.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-innominate-brachiocephalic-vein-recanalization-and",
    "name": "Innominate / Brachiocephalic Vein Recanalization and Stenting",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN326A",
    "rghsCode": "693 / 21 / 36",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Innominate / Brachiocephalic Vein Recanalization and Stenting refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Innominate / Brachiocephalic Vein Recanalization and Stenting.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-subclavian-vein-stenting-for-thoracic",
    "name": "Subclavian Vein Stenting for Thoracic Outlet Syndrome / Effort Thrombosis (Paget-Schroetter)",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN670A",
    "rghsCode": "693 / 21 / 30",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Subclavian Vein Stenting for Thoracic Outlet Syndrome / Effort Thrombosis (Paget-Schroetter) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Subclavian Vein Stenting for Thoracic Outlet Syndrome / Effort Thrombosis (Paget-Schroetter).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-catheter-directed-thrombolysis-for-massive",
    "name": "Catheter-Directed Thrombolysis (EKOS) for Massive / Submassive Pulmonary Embolism (PE)",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN127A",
    "rghsCode": "693 / 21 / 37",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Catheter-Directed Thrombolysis (EKOS) for Massive / Submassive Pulmonary Embolism (PE) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Catheter-Directed Thrombolysis (EKOS) for Massive / Submassive Pulmonary Embolism (PE).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-percutaneous-mechanical-aspiration-thrombectomy-for",
    "name": "Percutaneous Mechanical Aspiration Thrombectomy for Acute Massive PE (Inari FlowTriever)",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN367A",
    "rghsCode": "693 / 21 / 27",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Percutaneous Mechanical Aspiration Thrombectomy for Acute Massive PE (Inari FlowTriever) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Mechanical Aspiration Thrombectomy for Acute Massive PE (Inari FlowTriever).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-large-bore-mechanical-thrombectomy-for",
    "name": "Large-Bore Mechanical Thrombectomy for Acute PE (Penumbra Lightning 12 / Lightning Bolt)",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN578A",
    "rghsCode": "693 / 21 / 38",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Large-Bore Mechanical Thrombectomy for Acute PE (Penumbra Lightning 12 / Lightning Bolt) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Large-Bore Mechanical Thrombectomy for Acute PE (Penumbra Lightning 12 / Lightning Bolt).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-balloon-pulmonary-angioplasty-for-chronic",
    "name": "Balloon Pulmonary Angioplasty (BPA) for Chronic Thromboembolic Pulmonary Hypertension (CTEPH)",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN817A",
    "rghsCode": "693 / 21 / 27",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Balloon Pulmonary Angioplasty (BPA) for Chronic Thromboembolic Pulmonary Hypertension (CTEPH) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Balloon Pulmonary Angioplasty (BPA) for Chronic Thromboembolic Pulmonary Hypertension (CTEPH).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-pulmonary-artery-mechanical-clot-fragmentation",
    "name": "Pulmonary Artery Mechanical Clot Fragmentation",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN782A",
    "rghsCode": "693 / 21 / 42",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Pulmonary Artery Mechanical Clot Fragmentation refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Pulmonary Artery Mechanical Clot Fragmentation.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  },
  {
    "id": "c10-catheter-directed-splanchnic-mesenteric-vein",
    "name": "Catheter-Directed Splanchnic Mesenteric Vein Thrombolysis",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "code": "2849-VN194A",
    "rghsCode": "693 / 21 / 54",
    "icd10": "I82.40 (Acute deep vein thrombosis) / I26.99 (Pulmonary embolism)",
    "indications": [
      "Clinically documented indication for Catheter-Directed Splanchnic Mesenteric Vein Thrombolysis refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 10F Introducer Sheath",
        "spec": "Popliteal / Jugular / Femoral vein access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombectomy Device",
        "name": "Mechanical Aspiration / Thrombectomy Catheter (Inari ClotTriever / Penumbra Lightning)",
        "spec": "Dedicated large-bore venous clot retrieval",
        "standardStore": "Cath Lab Locker"
      },
      {
        "category": "Venous Stent",
        "name": "Dedicated High Radial Force Venous Stent (Venovo / Abre / Zilver Vena)",
        "spec": "12 - 16 mm diameter x 60 - 120 mm length",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Catheter-Directed Splanchnic Mesenteric Vein Thrombolysis.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "BD Interventional (+91 98290 66778)",
      "Inari Medical India (+91 98293 88990)"
    ]
  }
];
