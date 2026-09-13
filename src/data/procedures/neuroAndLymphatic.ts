import { ProcedureBlueprint } from '../../types/clinical';

export const NEURO_AND_LYMPHATIC_PROCEDURES: ProcedureBlueprint[] = [
  {
    "id": "stroke-adapt-thrombectomy",
    "name": "Acute Ischemic Stroke: Mechanical Thrombectomy (ADAPT Direct Aspiration & Stent Retriever)",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-MT-01",
    "rghsCode": "694 / 01",
    "icd10": "I63.50 (Cerebral infarction due to unspecified occlusion of cerebral artery)",
    "indications": [
      "Acute ischemic stroke secondary to large vessel occlusion (LVO) of anterior circulation (ICA terminus, M1/proximal M2 MCA) within 6 hours of symptom onset",
      "Extended window (6-24 hours) with salvageable penumbra meeting DAWN or DEFUSE-3 clinical-imaging mismatch criteria",
      "Baseline NIHSS >= 6 and pre-stroke modified Rankin Scale (mRS) 0-1",
      "NCCT ASPECTS score >= 6 (or selected low ASPECTS >= 3 on perfusion mismatch)"
    ],
    "preOpCriteria": [
      "Stat NCCT brain ruling out intracranial hemorrhage (ICH) and large established core infarction",
      "CT Angiography / MR Angiography demonstrating target large vessel occlusion",
      "CT Perfusion / Diffusion MRI confirming mismatch (ischemic core vs ischemic penumbra)",
      "Rapid groin access readiness without delaying for IV rtPA or tenecteplase infusion response"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "8F / 6F Femoral or Radial Vascular Introducer Sheath",
        "spec": "8F 11 cm Radiofocus or 6F Slender Glidesheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guide Sheath / Catheter",
        "name": "8F Balloon Guide Catheter (FlowGate2 / Cello) or 6F Long Guiding Sheath (Neuron MAX 088)",
        "spec": "90 cm length, 0.088 inch inner diameter",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Aspiration Catheter",
        "name": "Large Bore Distal Aspiration Catheter (React 71 / Sofia Plus / RED 72 / ACE 68)",
        "spec": "0.068 - 0.072 inch ID, 132 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "0.021 inch Trevo Trak 21 / Marksman / Phenom 21 Microcatheter",
        "spec": "150 cm length, 0.021 inch ID",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microguidewire",
        "name": "0.014 inch Synchro-14 / Traxcess Steerable Microguidewire",
        "spec": "200 cm - 300 cm, soft shapeable tip",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Stent Retriever",
        "name": "Solitaire Platinum / Trevo NXT Stent Retriever",
        "spec": "4 mm x 40 mm or 6 mm x 40 mm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Aspiration Pump & Tubing",
        "name": "Penumbra ENGINE / Medtronic Aspiration Tubing and Canister",
        "spec": "Dedicated continuous vacuum pump (-29 inHg)",
        "standardStore": "Neuro IR Store"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided right common femoral artery puncture (or right radial if femoral tortuous/occluded) with placement of 8F short sheath.",
      "Navigation of 8F Balloon Guide Catheter (BGC) or 6F 088 guide sheath over 0.035 Stiff Glidewire and 5F select catheter into cervical internal carotid artery (high cervical segment).",
      "Triaxial / Biaxial assembly: Introduce large-bore aspiration catheter (RED 72 / React 71) over 0.021 microcatheter and 0.014 microguidewire into distal M1/M2 segment.",
      "ADAPT First-pass Aspiration: Advance aspiration catheter directly to proximal clot face under roadmap; attach aspiration tubing connected to Penumbra ENGINE canister.",
      "Engage vacuum; monitor flow. If flow stops, hold contact aspiration for 90 seconds to allow ingestion/engagement of thrombus, then slowly withdraw catheter under continuous aspiration.",
      "If ADAPT aspiration unsuccessful: Cross clot with microcatheter and 0.014 microwire into distal branch; deploy Solitaire or Trevo stent retriever across occlusion; allow 3-5 min integration.",
      "Inflate BGC balloon to induce temporary carotid flow arrest; pull stent retriever and aspiration catheter simultaneously under continuous syringe/pump aspiration.",
      "Deflate BGC balloon; perform post-thrombectomy runs evaluating TICI revascularization grade (target eTICI 2b/2c/3). Check for distal emboli or vessel perforation."
    ],
    "complications": [
      "Intracranial vessel perforation or arterial dissection (subarachnoid hemorrhage)",
      "Distal non-target embolization to previously uninvolved vascular territories",
      "Symptomatic intracranial hemorrhage (sICH / reperfusion injury)",
      "Groin site pseudoaneurysm, retroperitoneal hematoma, or limb ischemia"
    ],
    "maayTariffInr": 120000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 88231)",
      "Stryker Neurovascular (+91 98292 44321)",
      "Penumbra India (+91 98291 99876)"
    ]
  },
  {
    "id": "stroke-solumbra-thrombectomy",
    "name": "Acute Ischemic Stroke: Combined Stent Retriever & Contact Aspiration Catheter (Solumbra Technique)",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-MT-02",
    "rghsCode": "694 / 02",
    "icd10": "I63.40 (Cerebral infarction due to embolism of cerebral artery)",
    "indications": [
      "Emergent anterior circulation large vessel occlusion (ICA terminus / Carotid T, MCA M1 bifurcation, tandem lesions)",
      "High-thrombus-burden occlusions and fibrin-rich resistant clots failing single-modality aspiration",
      "Stroke presentation within 24 hours of last known normal meeting thrombectomy criteria"
    ],
    "preOpCriteria": [
      "Multiphasic CTA or CT perfusion showing proximal occlusion with viable penumbra",
      "Exclusion of established widespread infarct (ASPECTS < 6 or core > 70cc)",
      "Conscious sedation or endotracheal intubation protocol with strict MAP control (MAP > 80-90 mmHg to maintain collaterals)"
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "Neuron MAX 088 / Ballast Long Guiding Sheath 6F",
        "spec": "90 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Aspiration Catheter",
        "name": "Sofia 6F (0.070) / Catalyst 7 / AXS Vecta 71",
        "spec": "131 cm - 132 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "Marksman / Trevo Trak 21 Microcatheter",
        "spec": "150 cm length, 0.021 inch ID",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microguidewire",
        "name": "Synchro Standard 0.014 inch Guidewire",
        "spec": "200 cm, shaped tip",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Stent Retriever",
        "name": "Solitaire X Platinum / Trevo NXT ProVue",
        "spec": "4 mm x 20 mm or 4 mm x 40 mm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Accessories",
        "name": "Rotating Hemostatic Valves (Tuohy-Borst) x 3 & 60 mL VacLok Syringe",
        "spec": "Sterile high-vacuum lockable syringes",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Transfemoral / transradial access with 8F/6F sheath. Position Neuron MAX 088 high in the cervical internal carotid artery.",
      "Coaxially track the aspiration catheter (Sofia 6F / Catalyst 7) over Marksman microcatheter and 0.014 wire into the cavernous / petrous ICA segment.",
      "Microcatheter navigation carefully across the occluding thrombus into the distal patent MCA branch under roadmapping; confirm intraluminal position via gentle micro-injection.",
      "Deploy the stent retriever across the clot bed, leaving the distal 1/3 in normal vessel and proximal 2/3 spanning thrombus. Allow 4-5 minutes for clot strut integration.",
      "Advance the distal aspiration catheter over the microcatheter up to the proximal margin of the deployed stent retriever and clot face.",
      "Apply powerful continuous syringe/pump aspiration on the intermediate aspiration catheter.",
      "Pin the microcatheter to the stent retriever and partially resheath the stent retriever into the aspiration catheter tip (corking the clot at the mouth).",
      "Simultaneously retract the entire assembly (stent retriever + aspiration catheter) under constant guide-catheter syringe aspiration.",
      "Perform control run; document complete revascularization (eTICI 3/2c) and confirm absence of embolization in new territory (ENT)."
    ],
    "complications": [
      "Clot shearing with embolization into anterior cerebral artery (A2/A3) or distal MCA branches",
      "Endothelial denudation, dissection, or vasospasm from aggressive traction",
      "Vessel avulsion or perforation requiring emergent rescue balloon/coiling",
      "Intracerebral hemorrhage (petechial HI-1/2 vs parenchymal hematoma PH-1/2)"
    ],
    "maayTariffInr": 125000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 88231)",
      "MicroVention Terumo (+91 98293 11223)",
      "Stryker Neurovascular (+91 98292 44321)"
    ]
  },
  {
    "id": "stroke-basilar-thrombectomy-stent",
    "name": "Acute Ischemic Stroke: Basilar Artery Emergent Mechanical Thrombectomy & Rescue Intracranial Stenting",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-MT-03",
    "rghsCode": "694 / 03",
    "icd10": "I63.01 (Cerebral infarction due to thrombosis of basilar artery)",
    "indications": [
      "Acute basilar artery occlusion (BAO) presenting with coma, quadriplegia, locked-in syndrome, or fluctuating brainstem ischemia",
      "Presentation up to 24 hours (or beyond in progressive locked-in cases with preserved brainstem on DWI)",
      "pc-ASPECTS score >= 6 on NCCT or MRI brain"
    ],
    "preOpCriteria": [
      "Stat CTA head/neck or brain MRI demonstrating mid/distal basilar artery or top-of-basilar occlusion",
      "Airway security: Emergent endotracheal intubation and mechanical ventilation",
      "Blood pressure augmentation (permissive hypertension, systolic 140-180 mmHg) pending revascularization",
      "IV loading dose of GP IIb/IIIa inhibitor (Tirofiban) or Cangrelor ready if underlying intracranial atherosclerotic stenosis (ICAD) necessitates rescue stenting"
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F 90 cm Cook Shuttle / Neuron MAX 088 Sheath",
        "spec": "90 cm length, high-support hydrophilic",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Intermediate Catheter",
        "name": "Sofia 5F or 6F Distal Access Catheter",
        "spec": "125 cm - 131 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "Phenom 21 / Trevo Trak 21 Microcatheter",
        "spec": "150 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Stent Retriever",
        "name": "Trevo NXT 4x30 / Embotrap III Revascularization Device",
        "spec": "4 mm - 5 mm diameter",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Intracranial Balloon / Stent",
        "name": "Gateway PTA Balloon & Wingspan Stent System / Solitaire AB",
        "spec": "Balloon 2.0-2.5 mm; Wingspan 3.0x15 mm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Antiplatelet",
        "name": "Inj Tirofiban (Aggrastat)",
        "spec": "Infusion 50 mcg/mL vial",
        "standardStore": "ICU / Neuro Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Femoral or radial puncture; cannulate dominant vertebral artery (V2 segment) using 6F guiding sheath over glide system.",
      "Track 5F/6F distal aspiration catheter coaxially into distal V3/V4 segment of vertebral artery near the vertebrobasilar junction.",
      "Deliver microcatheter and 0.014 microwire gently through the basilar occlusion into one of the posterior cerebral arteries (P1/P2 segment).",
      "Perform aspiration and/or stent-retriever thrombectomy pass to extract acute embolic thrombus.",
      "Angiographic evaluation: If underlying severe fixed atheromatous stenosis (>70%) with immediate re-thrombosis or sluggish flow is observed (ICAD-related BAO), initiate IV Tirofiban bolus (10 mcg/kg over 3 min, then 0.15 mcg/kg/min).",
      "Submaximal balloon angioplasty: Introduce undersized coronary/neuro PTA balloon (e.g. Gateway 2.0 mm x 9 mm) and inflate slowly to nominal pressure (4-6 atm).",
      "Deploy self-expanding intracranial stent (Wingspan or Solitaire AB permanent detachment) across the stenosis to maintain long-term vessel patency.",
      "Confirm excellent TICI 3 perfusion across basilar trunk, anterior inferior cerebellar arteries (AICA), superior cerebellar arteries (SCA), and bilateral PCAs without distal branch cut-offs."
    ],
    "complications": [
      "Fatal brainstem hemorrhage (reperfusion bleeding into ischemic pons/midbrain)",
      "Perforation of basilar trunk or delicate perforating pontine branch vessels",
      "Acute in-stent thrombosis requiring emergent intra-arterial fibrinolytics/antagonists",
      "Vertebral artery dissection at the skull base during catheter manipulation"
    ],
    "maayTariffInr": 135000,
    "vendorContacts": [
      "Stryker Neurovascular (+91 98292 44321)",
      "Medtronic Neurovascular (+91 98290 88231)",
      "MicroVention Terumo (+91 98293 11223)"
    ]
  },
  {
    "id": "aneurysm-primary-coiling",
    "name": "Intracranial Aneurysm: Primary Endovascular Coiling with Detachable Microcoils",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-AN-01",
    "rghsCode": "694 / 04",
    "icd10": "I60.9 (Nontraumatic subarachnoid hemorrhage) / I67.1 (Cerebral aneurysm nonruptured)",
    "indications": [
      "Acute ruptured saccular intracranial aneurysm presenting with subarachnoid hemorrhage (WFNS Grade I-IV)",
      "Unruptured intracranial aneurysm with high risk of rupture (size > 7 mm, daughter sac, rapid growth, family history, posterior circulation)",
      "Narrow neck morphology (dome-to-neck ratio >= 2 or neck < 4 mm)"
    ],
    "preOpCriteria": [
      "Non-contrast CT showing subarachnoid hemorrhage (modified Fisher grade)",
      "Diagnostic 3D rotational cerebral angiography defining exact neck dimensions, parent vessel relationship, and optimal working projections",
      "General endotracheal anesthesia with arterial line BP monitoring and neuro-monitoring",
      "Systemic anticoagulation: Heparin bolus (70 IU/kg) and titration to ACT 250-300 sec (in unruptured, or post-first-coil in ruptured cases)"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "6F Introducer Sheath",
        "spec": "11 cm Radiofocus",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guiding Catheter",
        "name": "6F Envoy / Guider Softip / Neuron 070 Guiding Catheter",
        "spec": "90 cm - 100 cm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "Headway 17 / SL-10 / Excelsior SL-10 Microcatheter",
        "spec": "1.7F, 0.017 inch ID, 150 cm, pre-shaped 45/90/J-tip",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microguidewire",
        "name": "Synchro-14 / Traxcess-14 Steerable Guidewire",
        "spec": "0.014 inch, 200 cm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Framing Microcoils",
        "name": "Axium 3D / Target 360 / Orbit Galaxy 3D Detachable Coils",
        "spec": "Complex spherical framing coils, 3 mm - 12 mm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Filling & Finishing Coils",
        "name": "Target Helical / Axium Helical / MicroPlex Helical Coils",
        "spec": "Soft and extra-soft finishing coils, 1 mm - 4 mm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Detachment Controller",
        "name": "Manufacturer Instant Detachment Box & Cables",
        "spec": "Electronic / mechanical detachment unit",
        "standardStore": "Neuro IR Store"
      }
    ],
    "techniqueSteps": [
      "Right common femoral artery 6F puncture; place 6F guiding catheter in cervical internal carotid or vertebral artery.",
      "Calibrated 3D rotational angiogram with 3D roadmapping to choose two orthogonal working views displaying neck and parent vessel without overlap.",
      "Steam-shape the microcatheter tip (if non-preshape) to mirror the angle of aneurysm takeoff.",
      "Advance the 0.017 microcatheter over 0.014 wire with extreme delicacy into the center of the aneurysm sac (avoiding the ruptured bleb).",
      "Deploy a 3D framing coil sized strictly to the average diameter of the aneurysm dome; verify stable 360-degree basket formation protecting the neck.",
      "Confirm stability on un-subtracted fluoroscopy; detach framing coil using the electrical or thermal detachment handle.",
      "Sequentially pack filling coils of progressively decreasing diameters and softness until dense coil pack is achieved.",
      "Deploy ultra-soft finishing coils to occlude residual crevices at the neck until Raymond-Roy Class I (complete occlusion) is obtained without parent artery protrusion.",
      "Perform completion multi-angle angiogram and post-procedure non-contrast head CT."
    ],
    "complications": [
      "Intra-procedural aneurysm re-rupture / perforation (catheter kick or coil penetration)",
      "Parent artery thromboembolism or coil herniation across neck into parent branch",
      "Delayed aneurysm recurrence / coil compaction requiring retreatment",
      "Access site groin hematoma or pseudoaneurysm"
    ],
    "maayTariffInr": 110000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 88231)",
      "Stryker Neurovascular (+91 98292 44321)",
      "MicroVention Terumo (+91 98293 11223)"
    ]
  },
  {
    "id": "aneurysm-balloon-assisted-coiling",
    "name": "Intracranial Aneurysm: Balloon-Assisted Coiling for Wide-Neck Cerebral Aneurysm",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-AN-02",
    "rghsCode": "694 / 05",
    "icd10": "I60.10 (Nontraumatic subarachnoid hemorrhage from middle cerebral artery) / I67.1",
    "indications": [
      "Wide-necked intracranial aneurysm (neck >= 4 mm or dome-to-neck ratio < 1.5)",
      "Aneurysms arising at major arterial bifurcations (ACom, MCA bifurcation, Basilar apex)",
      "Ruptured wide-necked aneurysms where dual antiplatelet therapy for stenting is contraindicated"
    ],
    "preOpCriteria": [
      "Dual femoral access or single 6F/7F large-bore access for dual-catheter setup",
      "Heparinization maintained with ACT 250-300 seconds throughout the procedure",
      "Pre-procedure 3D rotational angiogram assessing parent vessel caliber proximal and distal to aneurysm neck"
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F / 7F Long Guiding Catheter (Envoy DA / Benchmark)",
        "spec": "0.071 - 0.088 inch ID, 90 cm - 100 cm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Remodeling Balloon",
        "name": "Scepter C / TransForm / HyperForm Compliant Occlusion Balloon",
        "spec": "4 mm x 10 mm or 4 mm x 15 mm, dual/single lumen",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Aneurysm Microcatheter",
        "name": "Excelsior SL-10 / Headway 17 Microcatheter",
        "spec": "1.7F, 150 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microguidewire",
        "name": "Traxcess 14 / Synchro Standard 0.014",
        "spec": "200 cm length, shapeable platinum tip",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Detachable Coils",
        "name": "Target 360 / Axium 3D Complex & Soft Coils",
        "spec": "Framing, filling, and finishing detachable microcoils",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Inflation Syringe",
        "name": "1 mL Syringe with 50:50 Saline-Contrast Mixture",
        "spec": "Precise non-luer lock micro-inflation volume",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Place 6F/7F guide catheter into cervical internal carotid or dominant vertebral artery.",
      "Navigate the compliant remodeling balloon catheter (Scepter C / HyperForm) across the aneurysm neck over a 0.014 microguidewire.",
      "Jail or deliver the coiling microcatheter (SL-10) directly into the aneurysm sac alongside the deflated balloon.",
      "Inflate the remodeling balloon gently across the neck using 50:50 contrast mixture until complete neck coverage and parent artery seal is confirmed.",
      "Deploy the framing coil inside the aneurysm sac; the inflated balloon prevents coil loop herniation into the parent vessel.",
      "Deflate balloon partially to verify coil stability within the sac. Re-inflate balloon prior to detaching each coil.",
      "Continue sequential coil delivery and dense packing with intermittent balloon inflations (inflation periods kept under 2-3 minutes to prevent distal ischemia).",
      "Following final coil detachment, deflate balloon completely and perform control angiography to confirm parent artery patency and absence of thrombus.",
      "Withdraw balloon and microcatheter; maintain sheath until heparin wears off or use vascular closure device (AngioSeal)."
    ],
    "complications": [
      "Thrombus formation on the balloon surface or distal ischemic stroke",
      "Parent artery dissection or rupture from over-inflation of compliant balloon",
      "Coil herniation or unraveling into parent vessel upon balloon deflation",
      "Intra-saccular pressure rise with aneurysm rupture during balloon inflation"
    ],
    "maayTariffInr": 115000,
    "vendorContacts": [
      "MicroVention Terumo (+91 98293 11223)",
      "Stryker Neurovascular (+91 98292 44321)",
      "Medtronic Neurovascular (+91 98290 88231)"
    ]
  },
  {
    "id": "aneurysm-stent-assisted-coiling",
    "name": "Intracranial Aneurysm: Stent-Assisted Coiling with Laser-Cut / Braided Microstents",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-AN-03",
    "rghsCode": "694 / 06",
    "icd10": "I67.1 (Cerebral aneurysm, nonruptured) / I60.8",
    "indications": [
      "Unruptured or subacute wide-necked intracranial aneurysms with dome-to-neck ratio < 1.5",
      "Fusiform, dissecting, or recurrent recanalized aneurysms after prior simple coiling",
      "Bifurcation aneurysms requiring Y-stenting or cross-over reconstruction (Neuroform Atlas / Enterprise 2)"
    ],
    "preOpCriteria": [
      "Mandatory pre-procedure dual antiplatelet therapy (DAPT): Aspirin 150 mg + Ticagrelor 90 mg BID (or Clopidogrel 75 mg with platelet function VerifyNow PRU 60-208) for at least 5-7 days",
      "High-resolution 3D rotational angiography with multiplanar vessel diameter measurement",
      "Platelet function / resistance testing documented"
    ],
    "hardware": [
      {
        "category": "Guiding Catheter",
        "name": "6F 070 Neuron / Envoy DA Guiding Catheter",
        "spec": "90 cm - 100 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Stent Delivery Microcatheter",
        "name": "Excelsior SL-10 (for Neuroform Atlas) or Prowler Select Plus (for Enterprise 2)",
        "spec": "1.7F - 2.1F ID, 150 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Coiling Microcatheter",
        "name": "Headway 17 / XT-17 Microcatheter",
        "spec": "0.017 inch ID, 150 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Intracranial Microstent",
        "name": "Neuroform Atlas / Enterprise 2 Vascular Reconstruction Device",
        "spec": "Diameters 3.0 mm - 4.5 mm, lengths 15 mm - 30 mm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Detachable Coils",
        "name": "Target 360 Ultra / Axium Prime Detachable Coils",
        "spec": "Complex and soft helical coils",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microguidewire",
        "name": "Synchro-14 / Traxcess-14",
        "spec": "0.014 inch, 200 cm - 300 cm",
        "standardStore": "Neuro IR Store"
      }
    ],
    "techniqueSteps": [
      "Femoral / radial access; deliver 6F guiding catheter into high cervical internal carotid or vertebral artery.",
      "Jailing technique or trans-strut technique: Navigate coiling microcatheter (Headway 17) into the aneurysm sac FIRST (jailing technique).",
      "Navigate stent delivery catheter (Excelsior SL-10 / Prowler Select Plus) past the aneurysm neck into the distal parent artery.",
      "Deploy the self-expanding intracranial microstent (Neuroform Atlas / Enterprise 2) across the aneurysm neck, ensuring >= 5 mm landing zones proximal and distal.",
      "Verify complete stent wall apposition via flat-panel CT (VasoCT) or high-resolution fluoroscopy.",
      "Through the jailed microcatheter (or by crossing through stent struts with a secondary coiling microcatheter), pack detachable coils into the aneurysm dome.",
      "The stent scaffolding provides permanent mechanical neck bridge, preventing coil protrusion into the parent lumen.",
      "Pack aneurysm to high coil packing density until complete angiographic exclusion.",
      "Withdraw coiling microcatheter; perform final runs in multiple angles confirming stent patency, branch flow preservation, and lack of platelet aggregations."
    ],
    "complications": [
      "Acute or subacute in-stent thrombosis / thromboembolism (requires urgent Glycoprotein IIb/IIIa antagonist)",
      "Intracranial hemorrhage related to dual antiplatelet therapy",
      "Stent displacement, incomplete expansion, or migration across wide neck",
      "Vessel dissection or wire perforation in distal parent branch"
    ],
    "maayTariffInr": 130000,
    "vendorContacts": [
      "Stryker Neurovascular (+91 98292 44321)",
      "Cerenovus / Johnson & Johnson (+91 98294 66778)",
      "Medtronic Neurovascular (+91 98290 88231)"
    ]
  },
  {
    "id": "aneurysm-flow-diverter-stent",
    "name": "Intracranial Aneurysm: Flow Diverter Stent Deployment (Pipeline / Surpass / FRED)",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-AN-04",
    "rghsCode": "694 / 07",
    "icd10": "I67.1 (Giant/wide-neck cerebral aneurysm nonruptured)",
    "indications": [
      "Large or giant unruptured intracranial aneurysms (> 10 mm) of internal carotid artery (petrous, cavernous, paraophthalmic, supraclinoid segments)",
      "Fusiform, dissecting, or blister-like aneurysms with no distinct neck",
      "Recurrent wide-neck aneurysms failing previous coiling or clipping"
    ],
    "preOpCriteria": [
      "Strict dual antiplatelet therapy for 7-10 days: Aspirin (150 mg/day) + Ticagrelor (90 mg BID) or Clopidogrel with confirmed PRU < 180",
      "Quantitative measurement of proximal and distal parent vessel calibers on 3D angiography to ensure accurate stent sizing (avoiding undersizing)",
      "Absence of systemic bleeding diathesis or intracranial hemorrhage within last 3 weeks"
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "Neuron MAX 088 / Ballast 6F Guiding Sheath",
        "spec": "90 cm length, 0.088 inch lumen",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Intermediate Catheter",
        "name": "Phenom Plus / Navien 058 / Sofia 5F",
        "spec": "115 cm - 120 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Delivery Microcatheter",
        "name": "Phenom 27 / Marksman / VIA 27 Microcatheter",
        "spec": "0.027 inch ID, 150 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Flow Diverter Device",
        "name": "Pipeline Vantage / Surpass Evolve / FRED Flow Diverter",
        "spec": "Braid of 48-64 cobalt-chromium and platinum wires, sizes 2.5 mm - 5.0 mm diameter x 12 mm - 35 mm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microguidewire",
        "name": "Synchro-14 / Traxcess-14",
        "spec": "0.014 inch, 300 cm exchange length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Rescue Angioplasty Balloon",
        "name": "Transform / Gateway Balloon Catheter",
        "spec": "2.5 mm - 4.0 mm diameter x 10 mm length",
        "standardStore": "Neuro IR Store"
      }
    ],
    "techniqueSteps": [
      "Triaxial system positioning: 6F 088 sheath in cervical ICA, intermediate catheter (Phenom Plus) in petrocavernous ICA, and 0.027 delivery microcatheter navigated distal to aneurysm.",
      "Perform high-resolution roadmap and select ideal working angle for flow diverter deployment.",
      "Advance the Flow Diverter (Pipeline Vantage / FRED) through the 0.027 microcatheter under continuous heparinized flush.",
      "Deploy the device across the aneurysm neck using unsheathing and gentle pushing technique to ensure device expansion and high metal coverage (30-35% surface area) across the neck.",
      "Observe for full wall apposition proximal and distal to the aneurysm; evaluate with VasoCT (high-resolution flat detector CT).",
      "If stent is poorly apposed or fish-mouthed, perform gentle balloon angioplasty with compliant remodeling balloon to ensure complete endothelial seal.",
      "Angiographic run showing immediate intra-saccular flow stagnation (O’Kelly-Marotta O’KM score B/C) with normal runoff in parent artery and ophthalmic/choroidal branches.",
      "Post-procedure strict blood pressure control (SBP < 130 mmHg) to prevent delayed parenchymal ipsilateral hemorrhage."
    ],
    "complications": [
      "Delayed ipsilateral parenchymal hemorrhage (DIPH) or delayed aneurysm rupture",
      "Acute or subacute flow diverter in-stent thrombosis",
      "Side-branch occlusion (anterior choroidal or ophthalmic artery ischemic events)",
      "Incomplete stent expansion or migration requiring rescue ballooning / second telescoping stent"
    ],
    "maayTariffInr": 150000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 88231)",
      "Stryker Neurovascular (+91 98292 44321)",
      "MicroVention Terumo (+91 98293 11223)"
    ]
  },
  {
    "id": "aneurysm-web-device",
    "name": "Intracranial Aneurysm: Intra-saccular Flow Disruption with Woven EndoBridge (WEB Device)",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-AN-05",
    "rghsCode": "694 / 08",
    "icd10": "I60.11 (Nontraumatic subarachnoid hemorrhage from anterior communicating artery) / I67.1",
    "indications": [
      "Wide-neck bifurcation aneurysms (Basilar apex, MCA bifurcation, ACom, ICA terminus)",
      "Ruptured wide-neck bifurcation aneurysms where single antiplatelet or no antiplatelet therapy is desired",
      "Neck width >= 4 mm or dome-to-neck ratio <= 1"
    ],
    "preOpCriteria": [
      "High-precision 3D rotational angiography with multiplanar reconstruction to measure aneurysm width, height, and neck accurately for WEB sizing",
      "Selection of WEB shape (WEB Single Layer SL vs WEB Single Layer Sphere SLS) matching dome anatomy",
      "General endotracheal anesthesia with tight mean arterial pressure control"
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "6F 90 cm Neuron MAX 088 or Benchmark Guide Catheter",
        "spec": "0.088 inch / 0.071 inch ID",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Intermediate Catheter",
        "name": "Sofia 5F or Navien 058 Intermediate Catheter",
        "spec": "115 cm - 125 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "WEB Delivery Microcatheter",
        "name": "VIA 17, VIA 21, or VIA 27 Microcatheter",
        "spec": "Sized to match WEB implant caliber (0.017, 0.021, or 0.027 inch)",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Intrasaccular Flow Disrupter",
        "name": "WEB SL / SLS Device (MicroVention)",
        "spec": "Diameters 3 mm - 11 mm, heights 2 mm - 9 mm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Detachment Controller",
        "name": "WEB Electro-thermal Detachment Controller",
        "spec": "Handheld battery-powered detachment unit",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microguidewire",
        "name": "Traxcess 14 / Synchro-14",
        "spec": "0.014 inch, 200 cm",
        "standardStore": "Neuro IR Store"
      }
    ],
    "techniqueSteps": [
      "Establish triaxial access with 6F guide sheath and intermediate catheter in cervical ICA or vertebral artery.",
      "Track dedicated VIA microcatheter over 0.014 microwire into the central axis of the aneurysm dome.",
      "Select WEB device matching aneurysm width (typically 1 mm larger than average width to ensure lateral compression against walls).",
      "Advance the WEB device through the VIA catheter; deploy the distal half inside the aneurysm dome.",
      "Carefully push the system to appose the distal surface against the aneurysm roof while unsheathing the proximal marker.",
      "Confirm that the proximal recess and marker of the WEB device align precisely at or just inside the aneurysm neck plane without protruding into the parent bifurcation.",
      "Perform VasoCT / rotational angiogram verifying complete lateral apposition and non-compromise of adjacent bifurcation daughter branches.",
      "Check for flow stasis inside the WEB mesh basket; trigger detachment using the WEB electro-thermal controller.",
      "Perform follow-up runs showing stable position, intra-saccular contrast stasis, and completely patent parent branches."
    ],
    "complications": [
      "Protrusion of proximal WEB marker into parent vessel with thromboembolic risk",
      "Under-sizing leading to device tilting, migration, or persistent neck aneurysm filling",
      "Aneurysm perforation during VIA microcatheter positioning",
      "Thrombus formation on the proximal device surface requiring IV antiplatelet rescue"
    ],
    "maayTariffInr": 140000,
    "vendorContacts": [
      "MicroVention Terumo (+91 98293 11223)",
      "Medtronic Neurovascular (+91 98290 88231)"
    ]
  },
  {
    "id": "bavm-onyx-embolization",
    "name": "Brain Arteriovenous Malformation (bAVM): Superselective Microcatheter Embolization with Liquid Embolic (Onyx / Squid)",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-AVM-01",
    "rghsCode": "694 / 09",
    "icd10": "Q28.2 (Arteriovenous malformation of cerebral vessels)",
    "indications": [
      "Spetzler-Martin Grade I-V bAVMs: Pre-surgical devascularization to reduce operative blood loss",
      "Targeted endovascular cure for small (<3 cm) bAVMs with accessible single or few feeding pedicles",
      "Preradiosurgical volume reduction or targeted embolization of high-risk angioarchitectural features (associated flow aneurysms, venous ectasias)"
    ],
    "preOpCriteria": [
      "High-resolution multi-vessel cerebral DSA defining nidal angioarchitecture, transit times, and venous drainage pattern (superficial vs deep)",
      "Pre-op MRI brain with functional mapping (fMRI / tractography) if near eloquent cortex",
      "General anesthesia with invasive arterial blood pressure line and strict normotension/hypotension control"
    ],
    "hardware": [
      {
        "category": "Guiding Sheath / Catheter",
        "name": "6F Envoy / Guider Softip Guiding Catheter",
        "spec": "90 cm - 100 cm length, 0.070 inch ID",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Intermediate Catheter",
        "name": "Navien 058 / Sofia 5F Intermediate Catheter",
        "spec": "115 cm - 125 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Detachable Tip Microcatheter",
        "name": "Apollo / Sonic / Marathon Detachable Tip Microcatheter",
        "spec": "1.5F tip, 1.5 cm or 3.0 cm detachable distal segment, DMSO-compatible",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microguidewire",
        "name": "Mirage 0.008 / Hybrid 0.007 / Traxcess-14 Microguidewire",
        "spec": "0.008 - 0.014 inch, flexible hydrophilic steerable tip",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Non-Adhesive Liquid Embolic",
        "name": "Onyx-18 / Onyx-34 / Squid-12 / Squid-18",
        "spec": "Ethylene-vinyl alcohol (EVOH) copolymer dissolved in DMSO with micronized tantalum",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Solvent",
        "name": "Dimethyl Sulfoxide (DMSO)",
        "spec": "Dedicated sterile vials with DMSO-compatible syringes",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Vessel Shaker",
        "name": "Vortex Mixer for Onyx / Squid",
        "spec": "Continuous agitation for minimum 20 minutes before use",
        "standardStore": "Neuro IR Store"
      }
    ],
    "techniqueSteps": [
      "Femoral access; position 6F guiding catheter in cervical internal carotid or dominant vertebral artery.",
      "Vortex shake Onyx vials for at least 20 minutes prior to anticipated injection.",
      "Superselectively navigate the DMSO-compatible detachable-tip microcatheter (Apollo / Sonic) over a 0.008/0.014 wire wedged directly into the nidal feeding pedicle.",
      "Perform microcatheter superselective roadmapping to rule out normal en passage parenchymal branches.",
      "Flush the microcatheter dead space with 0.25 mL sterile DMSO over precisely 90 seconds to avoid vascular toxicity.",
      "Slowly inject Onyx-18 under continuous subtracted fluoroscopic roadmapping to build a solid proximal reflux plug (1-1.5 cm) around the detachable tip.",
      "Pause injection for 1-2 minutes to allow plug solidification, then resume steady forward injection forcing the liquid embolic through the bAVM nidus.",
      "Observe penetration across the entire nidal compartments while vigilantly ensuring draining veins remain patent until nidal filling is near-complete.",
      "Stop injection if involuntary early venous occlusion or dangerous non-target reflux occurs.",
      "Aspirate gently on the microcatheter and snap back to detach the catheter tip, leaving the tip embedded safely in the cast. Perform completion DSA."
    ],
    "complications": [
      "Normal perfusion pressure breakthrough (NPPB) with acute brain edema or massive intracranial hemorrhage",
      "Premature draining vein occlusion resulting in catastrophic nidal rupture",
      "Microcatheter entrapment / gluing in cerebral vasculature during withdrawal",
      "Ischemic stroke from non-target embolization of en passage arterial branches"
    ],
    "maayTariffInr": 135000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 88231)",
      "Balt Extrusion / Coral Healthcare (+91 98295 77889)",
      "MicroVention Terumo (+91 98293 11223)"
    ]
  },
  {
    "id": "davf-transvenous-embolization",
    "name": "Dural Arteriovenous Fistula (dAVF): Transvenous Coil & Liquid Embolic Embolization of Transverse / Sigmoid Sinus",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-DAVF-01",
    "rghsCode": "694 / 10",
    "icd10": "I67.1 (Cerebral arteriovenous fistula) / G93.8 (Dural fistula)",
    "indications": [
      "Cognard Type IIa, IIb, IIa+b, or Borden Type II dAVFs of transverse-sigmoid sinus presenting with pulsatile tinnitus or increased ICP",
      "Isolated transverse/sigmoid sinus segment with cortical venous reflux (high risk of intracranial hemorrhage)",
      "Failed or unsuitable transarterial access due to multiple tortuous micro-feeders"
    ],
    "preOpCriteria": [
      "Complete 6-vessel cerebral digital subtraction angiography demonstrating fistula location, sinus patency, and absence of critical normal brain venous drainage into the affected sinus pouch",
      "Venous phase analysis confirming alternative cerebral venous outflow pathway (contralateral sinus, superior sagittal sinus)",
      "Full systemic heparinization (ACT 250-300 sec)"
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "7F / 8F Introducer Sheath (Internal Jugular or Femoral Vein)",
        "spec": "11 cm length, large bore",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Venous Guiding Catheter",
        "name": "6F / 7F 90 cm Cook Shuttle / Envoy Guiding Catheter",
        "spec": "90 cm length, high-flow hydrophilic",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Intermediate Catheter",
        "name": "Sofia 6F / Navien 058 Distal Catheter",
        "spec": "115 cm - 125 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Headway 17 / Echelon 10 Microcatheter",
        "spec": "1.7F, 150 cm length, DMSO-compatible if Onyx used",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Embolic Coils",
        "name": "Target XXL / Concerto / Ruby Large-Volume Detachable Coils",
        "spec": "0.018 - 0.020 inch system, diameters 6 mm - 20 mm, lengths up to 50 cm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Liquid Embolic",
        "name": "Onyx-34 / Squid-34 or PHIL 30%",
        "spec": "High-viscosity liquid embolic agent",
        "standardStore": "Neuro IR Store"
      }
    ],
    "techniqueSteps": [
      "Obtain right common femoral artery access for diagnostic arterial monitoring runs and right internal jugular or femoral vein access for therapeutic transvenous delivery.",
      "Advance 6F/7F venous guide catheter into the internal jugular bulb and guide intermediate catheter into the diseased sigmoid sinus.",
      "Navigate microcatheter retrogradely across the sinus lumen into the isolated dAVF sinus pouch.",
      "Deploy high-volume, long detachable coils (Ruby / Target XXL) into the sinus pouch to build a tight scaffolding across the fistulous venous segment.",
      "Once mechanical scaffold is dense, inject Onyx-34 or PHIL through the microcatheter to achieve complete interstitial sealing of all dural arteriovenous shunts.",
      "Simultaneously perform repeat carotid and vertebral arterial angiography to monitor progressive fistula closure.",
      "Verify complete cessation of arteriovenous shunting, complete obliteration of the diseased sinus segment, and preservation of normal cortical venous drainage into the contralateral sinus.",
      "Withdraw venous catheters and obtain groin/neck hemostasis."
    ],
    "complications": [
      "Inadvertent occlusion of critical normal cortical venous drainage causing venous infarction and brain edema",
      "Sinus perforation with intracranial subdural or epidural hemorrhage",
      "Transient or permanent cranial nerve palsy (CN IX, X, XI from jugular bulb compression)",
      "Venous thrombosis propagation into contralateral transverse or straight sinus"
    ],
    "maayTariffInr": 125000,
    "vendorContacts": [
      "Penumbra India (+91 98291 99876)",
      "Medtronic Neurovascular (+91 98290 88231)",
      "MicroVention Terumo (+91 98293 11223)"
    ]
  },
  {
    "id": "davf-transarterial-embolization",
    "name": "Dural Arteriovenous Fistula: Transarterial Microcatheter Embolization with Non-Adhesive Liquid Embolic (PHIL / Onyx)",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-DAVF-02",
    "rghsCode": "694 / 11",
    "icd10": "I67.1 (Cerebral dural arteriovenous fistula) / G93.8",
    "indications": [
      "Borden Type I-III / Cognard Type I-IV dAVFs with dominant arterial feeders (middle meningeal, occipital, ascending pharyngeal)",
      "Fistulas with cortical venous reflux exhibiting high annual risk of intracranial hemorrhage (8-15%/year)",
      "Transvenous route inaccessible due to chronically thrombosed or absent venous sinus access"
    ],
    "preOpCriteria": [
      "Superselective multi-angle angiography mapping every transosseous and dural feeder",
      "Confirmation that chosen arterial branch does not harbor dangerous external-internal carotid (ECA-ICA) or ECA-vertebral anastomoses",
      "General anesthesia with muscle relaxation to avoid patient movement during prolonged roadmapped sub-millimeter injections"
    ],
    "hardware": [
      {
        "category": "Guiding Catheter",
        "name": "6F Envoy / Guider Softip Guiding Catheter",
        "spec": "90 cm - 100 cm, 0.070 ID",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Distal Access Catheter",
        "name": "Navien 058 / Sofia 5F Catheter",
        "spec": "115 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Detachable-Tip Microcatheter",
        "name": "Apollo / Sonic 1.5F Microcatheter",
        "spec": "165 cm length, 1.5 cm / 3 cm detachable tip",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Steerable Microguidewire",
        "name": "Mirage 0.008 / Hybrid 0.007 Microguidewire",
        "spec": "200 cm length, ultra-flexible tip",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Liquid Embolic Agent",
        "name": "PHIL (Precipitating Hydrophobic Injectable Liquid) 25% / Onyx-18",
        "spec": "Iodine-bonded non-adhesive liquid embolic",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "DMSO Flush Kit",
        "name": "DMSO 1 mL ampoules & DMSO-compatible syringes",
        "spec": "Special low-deadspace syringes",
        "standardStore": "Neuro IR Store"
      }
    ],
    "techniqueSteps": [
      "Femoral access with 6F guide catheter positioned in the external carotid artery (ECA).",
      "Coaxially advance intermediate catheter into the proximal middle meningeal artery (MMA) or occipital artery.",
      "Superselect the dominant dural fistulous branch with an Apollo detachable-tip microcatheter over a 0.008-0.014 microwire, wedging the tip directly at the dural shunt foot.",
      "Perform high-magnification subselective angiography to ensure zero dangerous anastomoses (e.g. middle meningeal to ophthalmic artery via recurrent meningeal, or ascending pharyngeal to hypoglossal branch).",
      "Prime microcatheter with DMSO (0.25 mL over 90 seconds).",
      "Inject PHIL 25% or Onyx-18 under continuous subtraction fluoroscopy, allowing reflux to form a proximal cast around the detachable tip.",
      "Drive the liquid embolic through the arterial feeder directly ACROSS the fistulous dural connection into the proximal ectatic draining vein (the primary therapeutic target).",
      "Continue slow injection until all converging arterial transdural feeders are retrograde-opacified and obliterated.",
      "Detach microcatheter tip under gentle aspiration and steady traction; perform diagnostic internal and external carotid angiograms documenting 100% cure."
    ],
    "complications": [
      "Inadvertent embolization of cranial nerves (CN VII via petrosal branch of MMA, causing facial palsy)",
      "Liquid embolic migration into ICA or vertebral artery through unvisualized transosseous anastomoses",
      "Premature venous occlusion without obliteration of all arterial feeders resulting in shunt rupture",
      "Microcatheter breakage or retention during detachment"
    ],
    "maayTariffInr": 130000,
    "vendorContacts": [
      "MicroVention Terumo (+91 98293 11223)",
      "Medtronic Neurovascular (+91 98290 88231)",
      "Balt Extrusion (+91 98295 77889)"
    ]
  },
  {
    "id": "ccf-direct-embolization",
    "name": "Carotid-Cavernous Fistula (Direct Type A): Transarterial / Transvenous Detachable Coil & Balloon Occlusion",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-CCF-01",
    "rghsCode": "694 / 12",
    "icd10": "I67.1 (Arteriovenous fistula of cerebral vessels, carotid-cavernous)",
    "indications": [
      "Barrow Type A direct high-flow communication between internal carotid artery cavernous trunk and cavernous sinus (post-traumatic skull base fracture or ruptured cavernous aneurysm)",
      "Rapidly progressive pulsatile exophthalmos, chemosis, elevated intraocular pressure, ocular bruit, or impending vision loss",
      "Cortical venous reflux with intracranial hemorrhage risk"
    ],
    "preOpCriteria": [
      "Urgent diagnostic DSA with cross-compression maneuvers (Huber maneuver / Mehringer maneuver) to determine the exact tear site in the cavernous ICA wall",
      "Assessment of Circle of Willis collaterals (anterior and posterior communicating arteries) to determine parent artery sacrifice tolerance if required",
      "Full systemic heparinization"
    ],
    "hardware": [
      {
        "category": "Guiding Catheter",
        "name": "6F / 7F 90 cm Guiding Catheter (Envoy / Neuron)",
        "spec": "90 cm length, high support",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Rebar 18 Microcatheter",
        "spec": "1.7F - 2.4F, 150 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Steerable Microguidewire",
        "name": "Transend 14 / Synchro-14",
        "spec": "0.014 inch, 200 cm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Detachable Balloons / Coils",
        "name": "Goldballoon / Target 360 Large Volume Microcoils",
        "spec": "Detachable silicone balloons or 10-20 mm 3D coils",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Liquid Embolic",
        "name": "Onyx-34 / Squid-34",
        "spec": "High-density EVOH liquid embolic",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Covered Stent (Backup)",
        "name": "PK Papyrus / GraftMaster Covered Coronary/Neuro Stent",
        "spec": "3.0 mm - 4.5 mm diameter x 15-20 mm length",
        "standardStore": "Neuro IR Store"
      }
    ],
    "techniqueSteps": [
      "Obtain femoral arterial access and femoral venous access (for potential transvenous inferior petrosal sinus route).",
      "Position 6F/7F guide catheter in the petrous segment of the injured internal carotid artery.",
      "Transarterial route: Under high-resolution roadmapping, navigate microcatheter directly through the wall tear from the cavernous ICA lumen into the cavernous sinus venous compartment.",
      "Deploy large-caliber 3D framing coils (10-18 mm) into the cavernous sinus venous spaces to reduce velocity and create a dense mechanical trap.",
      "If detachable balloon is utilized, inflate balloon inside the cavernous sinus pouch until the shunt is fully occluded, confirming parent ICA lumen remains fully patent on test injection; detach balloon.",
      "If using coils and Onyx: Seal the cavernous sinus with Onyx-34 under transient balloon occlusion of the parent ICA across the defect to prevent liquid reflux into ICA lumen.",
      "Alternatively, deploy a covered stent (PK Papyrus / GraftMaster) across the carotid tear in the cavernous segment to exclude the fistula while preserving ICA flow.",
      "Perform control angiography of internal and external carotid arteries to confirm total closure of the fistula, complete restoration of intracranial cerebral perfusion, and decompression of ophthalmic veins."
    ],
    "complications": [
      "Parent internal carotid artery occlusion or dissection",
      "Coil / balloon herniation into the intracranial ICA causing acute ischemic stroke",
      "Transient worsening of cranial neuropathies (CN III, IV, VI palsies) from cavernous mass effect / edema",
      "Embolization into the ophthalmic vein with central retinal vein occlusion"
    ],
    "maayTariffInr": 125000,
    "vendorContacts": [
      "Stryker Neurovascular (+91 98292 44321)",
      "Medtronic Neurovascular (+91 98290 88231)",
      "MicroVention Terumo (+91 98293 11223)"
    ]
  },
  {
    "id": "ccf-indirect-embolization",
    "name": "Carotid-Cavernous Fistula (Indirect / Barrow B, C, D): Transvenous Embolization via Inferior Petrosal Sinus (IPS) or SOV",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-CCF-02",
    "rghsCode": "694 / 13",
    "icd10": "I67.1 (Indirect dural carotid-cavernous fistula)",
    "indications": [
      "Dural arteriovenous fistulas involving cavernous sinus supplied by meningeal branches of ICA (Type B), ECA (Type C), or both (Type D)",
      "Progressive red eye, proptosis, chemosis, diplopia, glaucoma refractory to topical therapy, or visual acuity deterioration",
      "Retrograde cortical venous drainage with intracranial hemorrhage hazard"
    ],
    "preOpCriteria": [
      "Complete 4-vessel cerebral angiography detailing cavernous sinus compartment drainage and ipsilateral/contralateral inferior petrosal sinus (IPS) patency",
      "Ophthalmological evaluation including visual acuity, fundoscopy, and intraocular pressure (IOP)",
      "Full systemic heparinization"
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F Introducer Sheath (Femoral Vein)",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guiding Catheter",
        "name": "6F 90 cm Envoy / Vista Brite Tip Catheter",
        "spec": "90 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Intermediate Catheter",
        "name": "Sofia 5F / Navien 058 Catheter",
        "spec": "115 cm - 125 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "Headway 17 / Excelsior SL-10 Microcatheter",
        "spec": "1.7F, 150 cm length, DMSO-compatible",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microguidewire",
        "name": "Synchro-14 / Traxcess-14",
        "spec": "0.014 inch, 200 cm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Embolic Coils",
        "name": "Target 360 Soft / Axium Prime Coils",
        "spec": "Complex and helical detachable microcoils, 2 mm - 8 mm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Liquid Embolic",
        "name": "Onyx-18 or PHIL 25%",
        "spec": "Sterile non-adhesive liquid embolic",
        "standardStore": "Neuro IR Store"
      }
    ],
    "techniqueSteps": [
      "Place 5F diagnostic catheter in common/internal carotid artery from femoral artery for control angiography.",
      "From right femoral vein, advance 6F guiding catheter into the ipsilateral internal jugular vein at the skull base near the jugular foramen.",
      "Under roadmapping, cannulate the inferior petrosal sinus (IPS) using 5F intermediate catheter and Headway 17 microcatheter over a 0.014 wire.",
      "If IPS is occluded, gently re-canalize with a hydrophilic wire or navigate via facial vein -> angular vein -> superior ophthalmic vein (SOV), or directly perform surgical SOV cutdown.",
      "Advance microcatheter into the anterior and posterior compartments of the involved cavernous sinus.",
      "Perform micro-venogram to confirm location within cavernous sinus without extravasation.",
      "Deploy detachable microcoils densely throughout the cavernous sinus compartments until flow stagnation is achieved.",
      "Follow with slow micro-infusion of Onyx-18 / PHIL to cast the intercavernous crevices and occlude incoming fine meningeal feeders.",
      "Perform simultaneous bilateral ECA/ICA runs confirming 100% fistula obliteration, decompression of the superior ophthalmic vein, and intact parent ICA flow."
    ],
    "complications": [
      "IPS rupture with retroclival / subarachnoid hemorrhage during cannulation",
      "Transient exacerbation of 6th nerve palsy from cavernous sinus swelling/thrombosis",
      "Ophthalmic vein thrombosis with acute IOP elevation (paradoxical worsening)",
      "Onyx migration into petrosal sinuses or intracranial venous circulation"
    ],
    "maayTariffInr": 125000,
    "vendorContacts": [
      "MicroVention Terumo (+91 98293 11223)",
      "Stryker Neurovascular (+91 98292 44321)",
      "Medtronic Neurovascular (+91 98290 88231)"
    ]
  },
  {
    "id": "cas-distal-filter",
    "name": "Carotid Artery Stenting (CAS) with Distal Filter Embolic Protection Device (SpiderFX / AngioGuard)",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-CAS-01",
    "rghsCode": "694 / 14",
    "icd10": "I65.21 (Occlusion and stenosis of right carotid artery) / I65.22 (Left)",
    "indications": [
      "Symptomatic internal carotid artery stenosis >= 50% (NASCET) presenting with TIA or minor stroke",
      "Asymptomatic high-grade carotid stenosis >= 70-80% in patients with high surgical risk for CEA (hostile neck, radiation arteritis, high bifurcation, restenosis after CEA, severe cardiopulmonary comorbidity)",
      "Normal life expectancy > 5 years"
    ],
    "preOpCriteria": [
      "Carotid Duplex and CTA/MRA neck confirming plaque characteristics, aortic arch type (Type I-III), and tortuosity",
      "Dual antiplatelet therapy (Aspirin 150 mg + Clopidogrel 75 mg) for >= 5 days pre-procedure",
      "Pre-procedure atropine (0.6 - 1.0 mg IV) ready on table to counteract carotid sinus reflex bradycardia/hypotension",
      "Systemic heparinization titrated to ACT 250-300 seconds"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "6F / 8F 90 cm Guiding Sheath (Cook Shuttle / Vista Brite Tip)",
        "spec": "6F 90 cm long sheath, 0.088 inch compatible",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter (H1) / Simmons 2 (SIM2) Catheter",
        "spec": "100 cm - 125 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Embolic Protection Device",
        "name": "SpiderFX / AngioGuard RX / FilterWire EZ Distal Filter",
        "spec": "Pore size 100-140 um, compatible with landing zone 3-7 mm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Carotid Stent",
        "name": "Acculink / Precise Pro RX / Wallstent Carotid Stent",
        "spec": "Self-expanding nitinol or elgiloy stent, tapered or straight, 6-8-10 mm x 30-40 mm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Pre/Post-Dilation Balloons",
        "name": "Ultra-thin PTA Balloon Catheters",
        "spec": "Pre-dilation 3.5 mm x 20 mm; Post-dilation 5.0 mm x 20 mm non-compliant",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Hemostatic Device",
        "name": "Angio-Seal 6F / 8F VIP Vascular Closure Device",
        "spec": "Bioresorbable collagen plug",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Right common femoral artery 6F/8F access; establish ACT 250-300 sec with IV heparin.",
      "Aortic arch aortogram in LAO 30-45 to define arch anatomy; select and cannulate common carotid artery (CCA) using 5F SIM2 or H1 catheter over stiff wire.",
      "Exchange for 6F 90 cm Cook Shuttle guiding sheath positioned securely in the mid/distal common carotid artery.",
      "Perform magnification baseline CCA/ICA angiogram showing stenosis percentage and intracranial intracranial AP/lateral runs with parenchymal blush.",
      "Carefully steer the Distal Embolic Protection Filter (SpiderFX / FilterWire) across the stenosis under roadmap; deploy filter in the high cervical ICA straight segment.",
      "Pre-dilate high-grade stenosis with 3.5 mm x 20 mm balloon if necessary to allow stent passage.",
      "Administer 0.6 mg IV atropine prior to any balloon expansion to preempt vagal bradycardia.",
      "Advance and deploy self-expanding carotid stent (Precise / Acculink) spanning from healthy ICA to proximal CCA.",
      "Post-dilate within stent lumen using a 5.0 mm - 5.5 mm non-compliant balloon.",
      "Advance the recovery retrieval sheath over the wire, collapse the filter containing captured plaque debris, and withdraw from body.",
      "Perform completion cervical and intracranial angiograms to verify stent expansion, absence of dissection, and normal intracranial branch runoff without distal emboli."
    ],
    "complications": [
      "Periprocedural thromboembolic stroke (debris escaping filter or during filter crossing)",
      "Hyperperfusion syndrome / intracranial hemorrhage (strict SBP < 120-130 mmHg required)",
      "Sustained carotid sinus hypotension and bradycardia requiring vasopressors",
      "Internal carotid artery dissection or filter entrapment"
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 88231)",
      "Cordis / Johnson & Johnson (+91 98294 66778)",
      "Abbott Vascular (+91 98296 22110)"
    ]
  },
  {
    "id": "cas-proximal-protection",
    "name": "Carotid Artery Stenting with Proximal Balloon Occlusion Flow Reversal Protection (Mo.Ma System)",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-CAS-02",
    "rghsCode": "694 / 15",
    "icd10": "I65.23 (Occlusion and stenosis of bilateral carotid arteries) / I65.2",
    "indications": [
      "High-grade symptomatic or asymptomatic carotid stenosis with high-risk vulnerable, ulcerated, or heavily calcified / thrombus-containing plaques",
      "Severe distal ICA tortuosity or lack of adequate landing zone (> 3 cm) for a distal filter",
      "Hostile plaque morphology where crossing with a guidewire prior to protection poses prohibitive embolic hazard"
    ],
    "preOpCriteria": [
      "Pre-op CTA assessing external carotid artery (ECA) and common carotid artery (CCA) calibers for balloon seating",
      "Confirmed patency of Circle of Willis collaterals to tolerate temporary carotid clamping flow arrest",
      "Dual antiplatelet therapy (Aspirin + Clopidogrel) on board"
    ],
    "hardware": [
      {
        "category": "Proximal Protection System",
        "name": "Mo.Ma Ultra Proximal Protection System",
        "spec": "8F / 9F double-balloon guiding catheter with independent ECA and CCA occlusion balloons",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Stiff Amplatz / Super Stiff Wire",
        "spec": "260 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Lesion Crossing Wire",
        "name": "0.014 inch BMW / Choice PT Guidewire",
        "spec": "300 cm exchange length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Carotid Stent",
        "name": "Wallstent / Precise Pro RX Carotid Stent",
        "spec": "7-10 mm diameter x 30-40 mm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Aspiration Syringes",
        "name": "Mo.Ma Dedicated Debris Aspiration Kit & 60 mL Syringes",
        "spec": "Integrated 30 um blood filter kit",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "PTA Balloon",
        "name": "Non-compliant PTA Dilatation Balloon Catheter",
        "spec": "5.0 mm x 20 mm",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided right femoral access with 9F sheath; administer systemic heparin (ACT > 250 s).",
      "Cannulate external carotid artery (ECA) over 0.035 wire; track the Mo.Ma device into position with the distal balloon in the ECA and the proximal balloon in the CCA.",
      "Inflate the distal balloon in the ECA to prevent retrograde collateral supply.",
      "Inflate the proximal balloon in the CCA to completely block antegrade carotid inflow, establishing complete flow arrest / back-bleeding flow reversal.",
      "ONLY NOW cross the unprotected, high-risk ulcerated carotid stenosis with a 0.014 microwire under complete cerebral flow protection.",
      "Deploy the carotid stent across the bifurcation lesion.",
      "Post-dilate the stent using a 5.0 mm balloon.",
      "Vigorously aspirate 60-120 mL of blood from the carotid bifurcation through the Mo.Ma aspiration port using the specialized 60 mL syringes; filter aspirated blood to inspect captured macro-debris.",
      "Aspirate until blood is completely clear of debris; deflate ECA balloon, then deflate CCA balloon to restore normal antegrade carotid flow.",
      "Perform completion cerebral and carotid angiography."
    ],
    "complications": [
      "Intolerance to carotid clamping (syncope, focal deficits from poor Circle of Willis cross-flow)",
      "ECA or CCA dissection caused by balloon occlusion",
      "Plaque displacement during sheath seating in CCA",
      "Groin hematoma or femoral artery complication from 9F sheath"
    ],
    "maayTariffInr": 105000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 88231)",
      "Jaipur Surgical / Cordis (+91 98294 66778)"
    ]
  },
  {
    "id": "mma-embolization-sdh",
    "name": "Middle Meningeal Artery (MMA) Embolization for Chronic Refractory / Recurrent Subdural Hematoma",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-MMA-01",
    "rghsCode": "694 / 16",
    "icd10": "I62.00 (Nontraumatic chronic subdural hematoma)",
    "indications": [
      "Chronic subdural hematoma (cSDH) in elderly patients with recurrent hematoma post-surgical burr-hole evacuation",
      "Primary standalone treatment for subacute/chronic symptomatic subdural hematoma without acute brain herniation or midline shift > 5 mm",
      "cSDH in patients with coagulopathies or requiring uninterrupted anticoagulation"
    ],
    "preOpCriteria": [
      "Non-contrast CT brain demonstrating chronic hypodense or mixed-density subdural collection with neomembrane enhancement on contrast/CTA",
      "Absence of immediate life-threatening uncal herniation (pupillary asymmetry, GCS < 9 requiring emergent surgical craniotomy)",
      "Normal renal function for iodinated contrast administration"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radial or Femoral Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guiding Catheter",
        "name": "5F / 6F Envoy / Benchmark / MPD Catheter",
        "spec": "100 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "1.7F - 2.0F Progreat / Headway 17 / Echelon 10 Microcatheter",
        "spec": "150 cm length, DMSO-compatible if liquid embolic planned",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microguidewire",
        "name": "0.014 inch Synchro-14 / Traxcess-14 Steerable Wire",
        "spec": "200 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Particulate Embolic",
        "name": "Polyvinyl Alcohol (PVA) Particles / Embosphere Microspheres",
        "spec": "150 - 250 um or 300 - 500 um sizes",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Liquid Embolic (Alternative)",
        "name": "Onyx-18 / PHIL 25%",
        "spec": "1.5 mL vial with DMSO kit",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microcoils",
        "name": "Pushable / Detachable Microcoils",
        "spec": "1.5 mm - 2.5 mm for proximal trunk occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Right radial artery (preferred) or right femoral artery puncture; administer 3000 IU heparin.",
      "Cannulate external carotid artery (ECA); position 5F/6F guide catheter in proximal internal maxillary artery.",
      "Superselect the middle meningeal artery (MMA) with a 1.7F/2.0F microcatheter over a 0.014 wire.",
      "MANDATORY SAFETY CHECK: Perform high-magnification subselective MMA angiogram in AP and lateral to identify any meningolacrimal or sphenoidal anastomosis connecting to the ophthalmic artery (choroidal blush / retinal supply).",
      "Advance microcatheter past the petrosal branch takeoff (to avoid facial nerve ischemia) into anterior (frontal) and posterior (parietal) convexities.",
      "Slowly inject 150-250 um PVA particles or Embosphere microspheres mixed with dilute contrast under continuous fluoroscopy until dense parenchymal neomembrane stasis is achieved.",
      "Alternatively, administer Onyx-18 / PHIL to obtain continuous cast penetration throughout the dural vascular network.",
      "Deploy 1-2 small pushable microcoils at the proximal main MMA stem to prevent collateral re-canalization.",
      "Repeat on the contralateral MMA if bilateral chronic subdural hematomas are present. Document devascularization on post-embolization ECA run."
    ],
    "complications": [
      "Accidental ophthalmic artery embolization through meningolacrimal anastomoses causing monocular blindness",
      "Facial nerve palsy (CN VII) from reflux into the petrosal branch of MMA",
      "Acute expansion of subdural hematoma requiring emergent burr hole evacuation",
      "Radial artery spasm or access occlusion"
    ],
    "maayTariffInr": 90000,
    "vendorContacts": [
      "Terumo India (+91 98291 55678)",
      "Medtronic Neurovascular (+91 98290 88231)",
      "MicroVention Terumo (+91 98293 11223)"
    ]
  },
  {
    "id": "icad-wingspan-stenting",
    "name": "Intracranial Atherosclerotic Disease (ICAD): Balloon Angioplasty & Wingspan Intracranial Stenting",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-ICAD-01",
    "rghsCode": "694 / 17",
    "icd10": "I66.0 (Occlusion and stenosis of middle cerebral artery) / I65.2",
    "indications": [
      "Severe symptomatic intracranial atherosclerotic stenosis (70-99%) of intracranial ICA, MCA (M1), basilar artery, or intracranial vertebral artery (V4)",
      "Recurrent TIA or ischemic stroke in the vascular territory despite aggressive medical management (dual antiplatelets, high-intensity statin, strict SBP control)",
      "Documented territorial hypoperfusion on CT/MR perfusion imaging"
    ],
    "preOpCriteria": [
      "Confirmed medical failure under dual antiplatelet therapy for >= 30 days",
      "Pre-op CTA/MRA and baseline catheter DSA confirming stenosis severity by WASID criteria",
      "Platelet function testing (VerifyNow PRU 60-180, Aspirin ARU < 550)",
      "Procedure performed under general anesthesia with tight invasive blood pressure regulation"
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "Neuron MAX 088 / Shuttle 6F Guiding Sheath",
        "spec": "90 cm length, high-support access",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Intermediate Catheter",
        "name": "Navien 058 / Sofia 5F Intermediate Catheter",
        "spec": "115 cm - 125 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Submaximal PTA Balloon",
        "name": "Gateway PTA Dilatation Catheter",
        "spec": "1.5 mm - 3.0 mm diameter x 9 mm - 15 mm length, over-the-wire 0.014",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Intracranial Stent",
        "name": "Wingspan Stent System with Gateway Delivery Catheter",
        "spec": "Self-expanding nitinol stent, 2.5 mm - 4.5 mm diameter x 9 mm - 20 mm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Exchange Microguidewire",
        "name": "Synchro-14 / Transend 14 Platinum Floppy",
        "spec": "0.014 inch, 300 cm exchange length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Antiplatelet Infusion",
        "name": "Inj Tirofiban (Aggrastat)",
        "spec": "IV infusion ready for acute in-stent platelet thrombosis",
        "standardStore": "ICU / Neuro Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Triaxial access: Place 6F sheath in cervical ICA/VA, advance Navien intermediate catheter to petrous/cavernous ICA or V3/V4.",
      "Carefully cross the intracranial stenosis using a 0.014 inch 300 cm exchange microwire; anchor wire tip in a safe distal branch.",
      "Select a Gateway PTA balloon sized to 80% of the normal non-diseased vessel diameter (submaximal angioplasty).",
      "Advance the Gateway balloon across the stenosis; inflate very slowly at 1 atmosphere every 15-30 seconds up to nominal pressure (6 atm); hold for 30 seconds and slowly deflate.",
      "Perform control angiogram; if residual stenosis <= 50% and no flow-limiting dissection, consider balloon-only angioplasty.",
      "If significant elastic recoil (>50%) or dissection flap is seen: Deliver the Wingspan self-expanding stent over the exchange wire.",
      "Deploy the Wingspan stent across the lesion, ensuring 3 mm overlap beyond both ends of the target stenosis.",
      "Confirm stent expansion and complete restoration of forward laminar flow without compromising adjacent perforating branches (snowplow effect).",
      "Maintain continuous IV heparin for 24 hours; maintain strict SBP 100-120 mmHg to prevent reperfusion hemorrhage."
    ],
    "complications": [
      "Intracranial arterial rupture or catastrophic vessel perforation during ballooning",
      "Perforator infarction from atheromatous debris snowplowing into lenticulostriate or pontine branches",
      "Acute in-stent thrombosis requiring immediate intra-arterial Tirofiban infusion",
      "Reperfusion parenchymal hemorrhage in chronic low-flow territory"
    ],
    "maayTariffInr": 135000,
    "vendorContacts": [
      "Stryker Neurovascular (+91 98292 44321)",
      "Medtronic Neurovascular (+91 98290 88231)"
    ]
  },
  {
    "id": "dsa-diagnostic-cerebral",
    "name": "Diagnostic 4-Vessel / 6-Vessel Cerebral Digital Subtraction Angiography (DSA) with 3D Rotational Angiography",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-DSA-01",
    "rghsCode": "694 / 18",
    "icd10": "Z01.818 (Encounter for other preprocedural examination) / I67.9",
    "indications": [
      "Definitive diagnostic evaluation of suspected cerebral aneurysms, AVMs, dAVFs, vasculitis, and Moyamoya disease",
      "Gold-standard pre-surgical and endovascular roadmapping for vascular head and neck lesions",
      "Inconclusive or discordant findings on non-invasive CTA or MRA"
    ],
    "preOpCriteria": [
      "Serum Creatinine <= 1.5 mg/dL (eGFR > 45 mL/min/1.73m2)",
      "Normal coagulation parameters: INR < 1.5, Platelets > 50,000 /uL",
      "Patient fasting for 4-6 hours; informed consent for cerebral angiography risks"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "4F / 5F Femoral or Radial Vascular Sheath",
        "spec": "11 cm Radiofocus sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheters",
        "name": "5F Simmons 2 (SIM2) / Judkins Right 4 (JR4) / Vertebral Catheter",
        "spec": "100 cm length, 0.035 - 0.038 inch inner lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Diagnostic Guidewire",
        "name": "0.035 inch Radifocus Glidewire (J-tip or Angle Tip)",
        "spec": "150 cm length, hydrophilic coated",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Contrast Media",
        "name": "Iso-osmolar Non-ionic Iodinated Contrast (Visipaque / Omnipaque 300/350)",
        "spec": "100 mL vials",
        "standardStore": "Pharmacy Central"
      },
      {
        "category": "High-Pressure Manifold",
        "name": "3-Way Stopcock Manifold with Pressure Monitoring Line",
        "spec": "Infusion lines and continuous heparinized flush bag",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Closure Device",
        "name": "Angio-Seal 6F / TR Band Radial Band",
        "spec": "Femoral or radial vascular hemostatic device",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Puncture right common femoral artery (or right radial artery using 20G micro-puncture) under local anesthesia.",
      "Advance 0.035 Glidewire into the descending aorta; advance 5F diagnostic catheter (JR4, Vertebral, or SIM2) over wire.",
      "Sequentially cannulate bilateral common carotid arteries (CCA), internal carotid arteries (ICA), external carotid arteries (ECA), and bilateral vertebral arteries (VA).",
      "Acquire biplane DSA runs in standard AP, lateral, and oblique views using dedicated automatic power injector (ICA: 6 mL at 4 mL/s; VA: 6 mL at 3 mL/s; CCA: 8 mL at 5 mL/s).",
      "Perform 3D rotational angiogram (cone-beam CT) on identified pathologies (aneurysms, malformations) with 3D reconstructed volume rendering.",
      "Perform dynamic cross-compression (Allcock maneuver) to test anterior communicating and posterior communicating artery collateral flows.",
      "Document complete arterial, capillary, and late venous phase transit.",
      "Remove catheter and sheath; achieve immediate hemostasis using vascular closure device (Angio-Seal) or TR Band radial compression band."
    ],
    "complications": [
      "Transient or permanent embolic ischemic stroke (air or plaque embolus < 0.5-1%)",
      "Arterial dissection of carotid or vertebral artery from catheter tip trauma",
      "Contrast-induced nephropathy or severe anaphylactoid reaction",
      "Puncture site hematoma, retroperitoneal hemorrhage, or radial spasm"
    ],
    "maayTariffInr": 35000,
    "vendorContacts": [
      "Terumo India (+91 98291 55678)",
      "Cook Medical (+91 98292 33445)",
      "GE Healthcare / Siemens Healthineers (+91 98295 11990)"
    ]
  },
  {
    "id": "ipss-bilateral-sampling",
    "name": "Inferior Petrosal Sinus Sampling (IPSS) Bilateral Simultaneous with Peripheral ACTH for Cushing's Disease",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-IPSS-01",
    "rghsCode": "694 / 19",
    "icd10": "E24.0 (Pituitary-dependent Cushing's disease) / E24.9",
    "indications": [
      "Differential diagnosis of ACTH-dependent hypercortisolemia (Cushing's disease vs ectopic ACTH-secreting neuroendocrine tumor)",
      "Pre-operative lateralization of pituitary ACTH-secreting microadenoma not clearly visualized on 3T pituitary MRI",
      "Discordant high-dose dexamethasone suppression or CRH stimulation test results"
    ],
    "preOpCriteria": [
      "Active hypercortisolemia confirmed prior to procedure (elevated 24-hr urinary free cortisol or late-night salivary cortisol)",
      "Normal coagulation profile: INR < 1.5, Platelets > 80,000 /uL",
      "Stat availability of IV Corticotropin-Releasing Hormone (CRH 100 mcg) or Desmopressin (DDAVP 10 mcg)",
      "Arrangement with central endocrine lab for immediate cold centrifugation and EDTA ice-slurry tube handling"
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "Dual 5F / 6F Femoral Venous Sheaths (Right & Left Groin)",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheters",
        "name": "5F Headhunter (H1) / Vertebral / MPV Venous Catheters",
        "spec": "100 cm length, paired matching length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheters",
        "name": "1.7F - 2.0F Dedicated Microcatheters (SL-10 / Progreat)",
        "spec": "130 cm - 150 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microguidewire",
        "name": "0.014 inch Hydrophilic Guidewires",
        "spec": "180 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Stimulation Drug",
        "name": "Inj Ovine CRH (100 mcg) or Desmopressin (DDAVP 10 mcg)",
        "spec": "Sterile IV injection ampoule",
        "standardStore": "Pharmacy Central"
      },
      {
        "category": "Lab Consumables",
        "name": "Chilled EDTA Lavender Tubes on Wet Ice (numbered -5, 0, +2, +5, +10, +15 min)",
        "spec": "30 pre-labeled tubes for simultaneous central/peripheral draws",
        "standardStore": "Lab Stores"
      }
    ],
    "techniqueSteps": [
      "Bilateral femoral vein access under local anesthesia; insert 5F/6F sheaths in right and left femoral veins.",
      "Position diagnostic catheters into the internal jugular veins at the base of the skull.",
      "Coaxially advance 1.7F/2.0F microcatheters over 0.014 wires selectively into the right and left inferior petrosal sinuses (IPS).",
      "Perform gentle simultaneous bilateral retrograde venograms in AP projection to confirm catheter tips are wedged in the petrosal sinuses (draining pituitary plexuses) and identify any plexiform anatomical variations.",
      "Place a peripheral venous cannula for simultaneous peripheral blood draws.",
      "Draw baseline (-5 min and 0 min) simultaneous blood samples from Left IPS, Right IPS, and Peripheral vein.",
      "Administer IV CRH (100 mcg) or Desmopressin (10 mcg) as a rapid intravenous bolus.",
      "Draw timed simultaneous blood samples at +2 min, +5 min, +10 min, and +15 min from all three ports into chilled EDTA tubes.",
      "Immediately place all blood tubes in ice-water slurry and transport directly to endocrine laboratory for ACTH and prolactin analysis (prolactin ratio validates IPS catheter location).",
      "Withdraw catheters and sheaths; achieve venous hemostasis with manual pressure."
    ],
    "complications": [
      "Inferior petrosal sinus rupture or cavernous sinus thrombosis",
      "Brainstem ischemia or pontine hemorrhage (extremely rare from petrosal vein trauma)",
      "Transient 6th cranial nerve palsy",
      "Groin site hematoma or deep vein thrombosis"
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Cook Medical (+91 98292 33445)",
      "Terumo India (+91 98291 55678)",
      "Ferring Pharmaceuticals (+91 98296 88123)"
    ]
  },
  {
    "id": "epistaxis-microcoil-embolization",
    "name": "Epistaxis: Superselective Sphenopalatine & Facial Artery Embolization for Intractable Nosebleed",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-EPIST-01",
    "rghsCode": "694 / 20",
    "icd10": "R04.0 (Epistaxis) / I77.8",
    "indications": [
      "Severe, intractable posterior epistaxis failing anterior and posterior nasal packing / balloon tamponade",
      "Recurrent massive epistaxis unsuitable for or failing endoscopic sphenopalatine artery ligation",
      "Epistaxis associated with skull base trauma, juvenile angiofibroma, or vascular malformations"
    ],
    "preOpCriteria": [
      "Direct visualization or CT angiography ruling out anterior ethmoidal artery bleeding (which originates from ophthalmic artery and CANNOT be embolized transarterially due to blindness risk)",
      "Coagulation profile evaluation and correction of severe thrombocytopenia / coagulopathy",
      "Removal of posterior packing under fluoroscopic observation during or immediately after embolization"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Femoral or Radial Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter (H1) / Vertebral Catheter",
        "spec": "100 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "1.9F - 2.4F Progreat / Turbo Elite Microcatheter",
        "spec": "130 cm length, 0.021 - 0.017 inch lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microguidewire",
        "name": "0.014 inch Glidewire GT / Synchro-14",
        "spec": "200 cm length, steerable",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Particulate Embolics",
        "name": "PVA Particles (Contour / Bead Block)",
        "spec": "355 - 500 um or 500 - 710 um (never use < 300 um)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcoils",
        "name": "Pushable Fibered Platinum Microcoils",
        "spec": "0.018 inch, 2 mm - 3 mm diameters",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Gelatin Sponge",
        "name": "Gelfoam Sterile Absorbable Gelatin",
        "spec": "Calibrated pledgets / torpedoes",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Establish femoral or radial arterial access with 5F sheath.",
      "Cannulate ipsilateral and contralateral external carotid arteries (ECA); perform diagnostic DSA runs.",
      "CRITICAL SAFETY STEP: Perform internal carotid artery (ICA) angiogram to exclude ophthalmic artery collateralization to the nasal mucosa and rule out cavernous ICA pseudoaneurysm / rupture.",
      "Select internal maxillary artery (IMAX) with 5F catheter; advance 2.0F microcatheter superselectively into the terminal IMAX / sphenopalatine artery trunk.",
      "Confirm tip is distal to middle meningeal and accessory meningeal artery branches.",
      "Inject 355-500 um PVA particles suspended in contrast slowly under continuous fluoroscopy until mucosal hyperemia and vascular blush are completely eliminated.",
      "Deploy 1-2 fibered platinum microcoils (2-3 mm) in the distal sphenopalatine branch to prevent recanalization.",
      "Superselect the ipsilateral facial artery; if ascending palatine or superior labial branches supply the bleed, perform selective particle embolization.",
      "Perform completion ECA and ICA angiograms verifying complete devascularization without reflux into internal carotid circulation."
    ],
    "complications": [
      "Accidental ophthalmic artery embolization causing irreversible blindness",
      "Facial pain, trismus, or palatal soft tissue necrosis (ischemic ulceration)",
      "Facial nerve (CN VII) paresis from reflux into stylomastoid branch of occipital or posterior auricular artery",
      "Groin hematoma"
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Terumo India (+91 98291 55678)",
      "Cook Medical (+91 98292 33445)",
      "Boston Scientific India (+91 98293 44556)"
    ]
  },
  {
    "id": "jna-preop-embolization",
    "name": "Juvenile Nasopharyngeal Angiofibroma (JNA): Pre-operative Superselective Devascularization with PVA Particles",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-JNA-01",
    "rghsCode": "694 / 21",
    "icd10": "D10.6 (Benign neoplasm of nasopharynx, angiofibroma)",
    "indications": [
      "Radkowski / Fisch Stage I-IV Juvenile Nasopharyngeal Angiofibroma in adolescent males scheduled for surgical resection",
      "Pre-operative devascularization performed 24-48 hours prior to open or endoscopic surgical excision to minimize intraoperative blood loss",
      "Recurrent or residual angiofibroma with high surgical bleeding risk"
    ],
    "preOpCriteria": [
      "Contrast-enhanced MRI and CTA skull base detailing tumor boundaries, skull base erosion, and intracranial extension",
      "Documented cross-consultation with ENT Skull Base surgeon; surgery booked within 24-48 hours post-embolization",
      "Detailed mapping of both external and internal carotid blood supplies"
    ],
    "hardware": [
      {
        "category": "Guiding Catheter",
        "name": "5F / 6F Envoy / Guider Softip Guiding Catheter",
        "spec": "90 cm - 100 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "Progreat 2.4F / 2.0F or Headway 17 Microcatheter",
        "spec": "130 cm - 150 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microguidewire",
        "name": "0.014 inch Synchro-14 / Glidewire GT",
        "spec": "200 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Calibrated Microspheres",
        "name": "PVA Particles (Contour) or Embosphere Microspheres",
        "spec": "300 - 500 um and 500 - 710 um vials",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcoils",
        "name": "Pushable Fibered Coils",
        "spec": "2 mm - 4 mm diameters for branch sacrifice after particle devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Contrast Media",
        "name": "Non-ionic Low Osmolar Contrast (Omnipaque 350)",
        "spec": "100 mL vials",
        "standardStore": "Pharmacy Central"
      }
    ],
    "techniqueSteps": [
      "Perform bilateral common, internal, and external carotid arteriography to delineate all feeding vessels (internal maxillary, ascending pharyngeal, accessory meningeal, and Vidian branches).",
      "Position 5F/6F guide catheter in the ipsilateral external carotid artery.",
      "Superselect the internal maxillary artery branches supplying the tumor nidus with a 2.0F microcatheter.",
      "Rigorous scrutiny for dangerous ECA-ICA anastomoses (mandibulo-vidian, recurrent meningeal to ophthalmic, artery of foramen rotundum).",
      "Slowly infuse 300-500 um PVA particles or Embospheres mixed with contrast under continuous roadmap fluoroscopy until tumor blush is completely obliterated.",
      "Superselect and embolize the ascending pharyngeal artery branches (neuromeningeal trunk carefully preserved) and contralateral ECA supply if bilateral feeders exist.",
      "Deploy 1-2 microcoils in the proximal trunk of main feeders to consolidate thrombosis.",
      "Perform post-embolization internal and external carotid angiograms confirming >90% reduction in tumor vascular blush.",
      "Transfer patient directly to ENT surgical team for resection within 24-48 hours."
    ],
    "complications": [
      "Inadvertent blindness via ophthalmic artery embolization",
      "Cranial nerve IX, X, XII deficits from ascending pharyngeal neuromeningeal trunk embolization",
      "Skin necrosis of the cheek or palate necrosis",
      "Stroke from reflux into internal carotid artery"
    ],
    "maayTariffInr": 50000,
    "vendorContacts": [
      "Terumo India (+91 98291 55678)",
      "Merit Medical (+91 98297 33441)",
      "Cook Medical (+91 98292 33445)"
    ]
  },
  {
    "id": "paraganglioma-preop-embolization",
    "name": "Head & Neck Hypervascular Paraganglioma (Glomus Jugulare / Vagale / Carotid Body Tumor) Pre-op Embolization",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-GLOM-01",
    "rghsCode": "694 / 22",
    "icd10": "D35.2 (Benign neoplasm of carotid body) / D35.6 (Paraganglioma)",
    "indications": [
      "Shamblin Group II or III Carotid Body Tumors, Glomus Jugulare, Glomus Tympanicum, or Glomus Vagale tumors planned for operative resection",
      "Devascularization to decrease intraoperative hemorrhage, shorten operative duration, and improve cranial nerve preservation rates",
      "Palliative embolization for pain or bleeding control in unresectable lesions"
    ],
    "preOpCriteria": [
      "Plasma and 24-hour urinary fractionated metanephrines and catecholamines to rule out functional secreting paraganglioma (alpha-blockade with phenoxybenzamine required if secreting)",
      "Multi-detector CT / MRI showing skull base bone destruction and jugular bulb involvement",
      "Complete 4-vessel cerebral DSA evaluating carotid encasement and Circle of Willis collateral reserve"
    ],
    "hardware": [
      {
        "category": "Guiding Catheter",
        "name": "6F Envoy / Vista Brite Tip Catheter",
        "spec": "90 cm length, high stability",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "1.7F Headway 17 / Echelon 10 Microcatheter",
        "spec": "150 cm length, DMSO-compatible",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microguidewire",
        "name": "0.014 inch Traxcess / Synchro-14",
        "spec": "200 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Liquid Embolic",
        "name": "Onyx-18 / Onyx-34 or PHIL 25%",
        "spec": "1.5 mL vials with DMSO delivery kit",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Particulate Embolic",
        "name": "Embosphere Microspheres / PVA Particles",
        "spec": "300 - 500 um and 500 - 700 um",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Percutaneous Direct Needle (Alternative)",
        "name": "21G Chiba Needle for Direct Puncture Embolization",
        "spec": "7 cm - 10 cm echogenic needle",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Catheterize external carotid artery; perform selective angiograms of ascending pharyngeal artery (dominant feeder for glomus jugulare/vagale), occipital, and lingual/facial branches.",
      "Perform ICA and VA runs to detect dangerous caroticotympanic branches or muscular vertebral collateral connections.",
      "Superselect the pharyngeal trunk of the ascending pharyngeal artery using 1.7F microcatheter.",
      "Identify and protect the neuromeningeal trunk (hypoglossal and jugular branches) supplying lower cranial nerves IX, X, XI, XII.",
      "Inject 300-500 um Embospheres or Onyx-18 slowly under subtraction fluoroscopy until dense parenchymal tumor penetration is achieved.",
      "For large Carotid Body Tumors (Shamblin III): If transarterial feeders are inaccessible, perform direct percutaneous puncture of tumor bed with 21G Chiba needle under ultrasound/fluoroscopy, confirm non-vascular puddle, and slowly inject Onyx-18 or 34 directly into tumor stroma until 80-90% devascularization is reached.",
      "Perform completion angiograms of CCA, ICA, and ECA documenting total devascularization and widely patent main carotid vessels."
    ],
    "complications": [
      "Lower cranial nerve paralysis (dysphagia, vocal cord palsy, tongue deviation from CN IX-XII injury)",
      "Hypertensive crisis during embolization from sudden catecholamine release (keep IV phentolamine / labetalol on hand)",
      "Stroke from reflux of liquid embolic or particles into the internal carotid or vertebral arteries",
      "Post-embolization pain and swelling compromising upper airway"
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 88231)",
      "Merit Medical (+91 98297 33441)",
      "MicroVention Terumo (+91 98293 11223)"
    ]
  },
  {
    "id": "carotid-blowout-covered-stent",
    "name": "Carotid Blowout Syndrome (CBS): Emergent Covered Stent Exclusion (Viabahn / PK Papyrus)",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-CBS-01",
    "rghsCode": "694 / 23",
    "icd10": "I77.2 (Rupture of artery) / C76.0 (Head and neck cancer)",
    "indications": [
      "Impending or acute catastrophic transoral/cervical hemorrhage from necrotic or tumor-infiltrated carotid artery (Carotid Blowout Syndrome)",
      "Post-radiation arteritis with pseudoaneurysm formation or blowout in head and neck cancer patients",
      "Patients who fail or cannot tolerate balloon test occlusion for parent vessel sacrifice"
    ],
    "preOpCriteria": [
      "Immediate airway management: Endotracheal intubation with cuff hyperinflation to prevent fatal blood aspiration",
      "Direct pressure / packing on cervical/oropharyngeal bleeding source; active resuscitation with packed red cells",
      "Rapid transfer to neuroangio suite; emergent groin puncture without delay"
    ],
    "hardware": [
      {
        "category": "Guiding Sheath",
        "name": "7F / 8F 90 cm Cook Shuttle Guiding Sheath",
        "spec": "90 cm length, high-support access",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Covered Stent Graft",
        "name": "Gore Viabahn Endoprosthesis with Propaten or PK Papyrus Covered Stent",
        "spec": "Viabahn 6-8 mm diameter x 50 mm length; or PK Papyrus 4-5 mm x 20 mm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Guidewires",
        "name": "0.035 Stiff Glidewire & 0.014 inch Stiff Choice PT Wire",
        "spec": "260 cm - 300 cm exchange lengths",
        "standardStore": "Central IR Store"
      },
      {
        "category": "PTA Balloon",
        "name": "Non-compliant PTA Dilatation Balloon",
        "spec": "6.0 mm x 40 mm",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Antiplatelet",
        "name": "IV Tirofiban / Eptifibatide or Aspirin",
        "spec": "Platelet inhibition protocol post-stent placement",
        "standardStore": "ICU / Neuro Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided common femoral access; insert 8F sheath; administer 3000 IU heparin.",
      "Rapid selective common carotid arteriogram to identify site of pseudoaneurysm, active extravasation, or wall disruption.",
      "Advance 0.035 Stiff Glidewire past the lesion into the distal internal or external carotid artery.",
      "Deploy 8F Cook Shuttle sheath into the proximal common carotid artery.",
      "Cross the rupture site with an exchange-length 0.014 or 0.035 wire.",
      "Position the Gore Viabahn covered stent graft across the blowout defect, ensuring at least 10 mm healthy landing zone proximal and distal to the necrosis.",
      "Deploy the self-expanding covered stent under high-resolution fluoroscopy.",
      "Post-dilate the stent graft gently using an appropriately sized non-compliant balloon to ensure complete sealing against the arterial wall.",
      "Perform completion arteriogram showing instant, complete exclusion of the pseudoaneurysm / extravasation, with widely patent carotid lumen and brisk intracranial perfusion.",
      "Initiate single/dual antiplatelet therapy (Aspirin + Clopidogrel) to prevent acute stent graft thrombosis."
    ],
    "complications": [
      "Delayed stent graft infection and re-blowout in an irradiated, contaminated, or infected surgical bed",
      "Acute in-stent thrombosis causing hemispheric cerebral infarction",
      "Endoleak with recurrent hemorrhage requiring secondary overlapping stent",
      "Carotid sinus collapse or arterial rupture from overdilation"
    ],
    "maayTariffInr": 110000,
    "vendorContacts": [
      "W.L. Gore & Associates (+91 98298 44332)",
      "Biotronik India (+91 98294 55667)",
      "Cook Medical (+91 98292 33445)"
    ]
  },
  {
    "id": "carotid-blowout-parent-sacrifice",
    "name": "Carotid Blowout Syndrome: Permanent Parent Vessel Sacrifice with Balloon Test Occlusion (BTO) & Coiling",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-CBS-02",
    "rghsCode": "694 / 24",
    "icd10": "I77.2 (Rupture of carotid artery) / T81.0",
    "indications": [
      "Acute Carotid Blowout Syndrome where covered stenting is impossible due to extensive infected bed, gross carotid disintegration, or bifurcation destruction",
      "Uncontrollable active carotid blowout where covered stents have failed or are unavailable",
      "Documented adequate intracranial collateral cross-flow through Circle of Willis"
    ],
    "preOpCriteria": [
      "Emergency endotracheal intubation protecting the airway; aggressive fluid and blood resuscitation",
      "Rapid assessment of Circle of Willis anatomy on CTA or emergent angiography",
      "Emergency Balloon Test Occlusion (BTO) with clinical neuro checks (if conscious) or angiographic venous phase symmetry evaluation under general anesthesia"
    ],
    "hardware": [
      {
        "category": "Guiding Catheter",
        "name": "7F / 8F 90 cm Guiding Sheath / Catheter",
        "spec": "90 cm length, high-flow",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Occlusion Balloon",
        "name": "HyperForm / Scepter C Compliant Occlusion Balloon Catheter",
        "spec": "4 mm - 7 mm diameter, double/single lumen",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "High-Volume Detachable Coils",
        "name": "Target XXL / Ruby / Concerto Large Volume Coils",
        "spec": "Diameters 6 mm - 14 mm, lengths 30 cm - 60 cm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Vascular Plugs (Alternative)",
        "name": "Amplatzer Vascular Plug II / 4",
        "spec": "6 mm - 12 mm diameters",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Rebar 18 Microcatheter",
        "spec": "150 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Liquid Embolic (Backup)",
        "name": "Onyx-34 or PHIL 30%",
        "spec": "Dense liquid embolic agent",
        "standardStore": "Neuro IR Store"
      }
    ],
    "techniqueSteps": [
      "Obtain femoral arterial access; position guide catheter in the common carotid artery proximal to the rupture.",
      "Perform contralateral carotid and vertebral angiography to confirm robust collateral flow through the anterior and posterior communicating arteries.",
      "Advance compliant occlusion balloon across the bleeding site; inflate balloon to achieve immediate temporary hemostasis and perform test occlusion.",
      "Trap-door parent vessel occlusion technique: Advance microcatheter DISTAL to the blowout site; pack high-volume detachable coils (Ruby / Target XXL) or deploy Amplatzer Vascular Plug to seal the back-bleeding distal outflow.",
      "Withdraw microcatheter proximal to the blowout defect; densely pack coils or deploy a second vascular plug to occlude the antegrade inflow.",
      "Optional: Inject liquid embolic (Onyx-34) into the coil matrix to ensure permanent, impervious thrombotic seal across the diseased carotid segment.",
      "Perform control angiography of the contralateral internal carotid and vertebral arteries: Confirm complete retrograde cross-filling of the hemisphere without delayed venous transit.",
      "Verify zero contrast extravasation from the sacrificed carotid segment."
    ],
    "complications": [
      "Delayed hemispheric ischemic stroke or watershed infarction despite passing BTO",
      "Embolization from proximal carotid stump thrombus to intracranial branches",
      "Recurrent hemorrhage via retrograde collateral replenishment",
      "Puncture site bleeding in coagulopathic oncological patient"
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "MicroVention Terumo (+91 98293 11223)",
      "Medtronic Neurovascular (+91 98290 88231)",
      "Abbott Vascular (+91 98296 22110)"
    ]
  },
  {
    "id": "venous-sinus-stenting-iih",
    "name": "Intracranial Venous Sinus Stenting for Idiopathic Intracranial Hypertension (IIH) with Venous Manometry",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-VSS-01",
    "rghsCode": "694 / 25",
    "icd10": "G93.2 (Benign intracranial hypertension / Pseudotumor cerebri)",
    "indications": [
      "Idiopathic Intracranial Hypertension (Pseudotumor Cerebri) with progressive papilledema, visual field deficits, or intractable headaches refractory to maximal medical therapy (Acetazolamide, Topiramate)",
      "Demonstrated focal venous outflow stenosis of the transverse-sigmoid sinus junction on MRV/CTV",
      "Documented trans-stenotic pressure gradient >= 8 mmHg on catheter venous manometry"
    ],
    "preOpCriteria": [
      "Lumbar puncture confirming opening pressure > 25 cm H2O with normal CSF composition",
      "Complete neuro-ophthalmology assessment: Optical Coherence Tomography (OCT) of retinal nerve fiber layer and Humphrey visual fields",
      "Pre-procedure dual antiplatelet therapy (Aspirin 150 mg + Clopidogrel 75 mg) for 5-7 days pre-op",
      "Full systemic heparinization during procedure (ACT 250-300 sec)"
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F / 7F 90 cm Guiding Sheath (Cook Shuttle / Vista Brite Tip)",
        "spec": "90 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Intermediate Catheter",
        "name": "Sofia 6F / Navien 058 Distal Catheter",
        "spec": "115 cm - 125 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Diagnostic Microcatheter",
        "name": "Headway 17 / Rebar 18 Microcatheter",
        "spec": "150 cm length with pressure monitoring line",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Venous Stent",
        "name": "Zilver 635 / Protégé EverFlex / Precise Nitinol Stent",
        "spec": "Self-expanding biliary/vascular nitinol stent, 7 mm - 9 mm diameter x 30 mm - 60 mm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Steerable Guidewire",
        "name": "0.014 inch / 0.018 inch Stiff Steerable Wire",
        "spec": "300 cm exchange length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Pressure Transducer",
        "name": "Arterial/Venous Invasive Pressure Transducer Kit",
        "spec": "Calibrated digital manometry transducer connected to lab monitor",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Right common femoral vein access with 7F sheath; administer IV heparin (70 IU/kg).",
      "Advance 7F 90 cm sheath into the right internal jugular vein at the skull base.",
      "Track intermediate catheter (Sofia 6F) and microcatheter across the jugular bulb, sigmoid sinus, and transverse sinus into the superior sagittal sinus (SSS).",
      "Venous Manometry: Connect microcatheter to calibrated pressure transducer; perform continuous pressure pullback recording from SSS, torcula, proximal transverse sinus, through the stenosis, to the sigmoid sinus and jugular bulb.",
      "Confirm trans-stenotic pressure gradient >= 8 mmHg across the transverse-sigmoid junction.",
      "Perform retrograde venography in orthogonal views to precisely map the landing zones, ensuring stent avoids covering the vein of Labbe junction if possible.",
      "Exchange for a stiff 0.014 or 0.018 guidewire parked securely in the mid-superior sagittal sinus.",
      "Deliver self-expanding nitinol stent (7-9 mm diameter x 40-60 mm length) spanning the stenotic segment from the proximal transverse sinus into the sigmoid sinus.",
      "Deploy stent under fluoroscopic roadmapping; ensure full expansion across the arachnoid granulation / fibrous web.",
      "Repeat manometric pullback: Confirm abolition of trans-stenotic gradient (< 2-3 mmHg remaining) and brisk contrast clearance on completion venogram."
    ],
    "complications": [
      "Dural sinus rupture / tear with catastrophic intracranial hemorrhage",
      "Acute or subacute stent thrombosis requiring emergent thrombolysis",
      "Retrograde thrombosis of the vein of Labbé with venous hemorrhagic infarction",
      "Transient ipsilateral retro-orbital or ear pain from dural stretch"
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Cook Medical (+91 98292 33445)",
      "Medtronic Vascular (+91 98290 88231)",
      "Cordis India (+91 98294 66778)"
    ]
  },
  {
    "id": "osteoid-osteoma-rfa",
    "name": "Osteoid Osteoma: CT-Guided Percutaneous Radiofrequency Ablation (RFA) with Drill Access",
    "category": "Neurointerventional & Lymphatic",
    "code": "MSK-RFA-01",
    "rghsCode": "695 / 01",
    "icd10": "M89.8X9 (Other specified disorders of bone) / D16.2",
    "indications": [
      "Classic osteoid osteoma presenting with severe nocturnal bone pain relieved dramatically by NSAIDs",
      "Characteristic radiologic nidus (< 1.5 cm diameter) surrounded by dense reactive cortical sclerosis on CT",
      "Pain refractory to long-term medical therapy or intolerance to chronic NSAID administration"
    ],
    "preOpCriteria": [
      "High-resolution non-contrast CT bone window (< 1 mm slices) confirming exact location of nidus",
      "MRI evaluation excluding malignant mimics (osteosarcoma, Brodie abscess) and assessing soft tissue edema",
      "Proximity check: Nidus must be >= 1.0-1.5 cm from major motor nerves or spinal cord (requires neuroprotective thermocouples or hydrodissection if close)",
      "General endotracheal anesthesia (intense pain occurs during thermal heating)"
    ],
    "hardware": [
      {
        "category": "Bone Access System",
        "name": "Bonopty / Osteo-Site Bone Biopsy & Drill Trephine System",
        "spec": "11G - 13G coaxial cannula with hand drill/trocar",
        "standardStore": "Central IR Store"
      },
      {
        "category": "RFA System",
        "name": "Medtronic Cool-tip / Boston Scientific RF Generator",
        "spec": "Dedicated RF generator with peristaltic cooling pump",
        "standardStore": "Central IR Store"
      },
      {
        "category": "RFA Electrode",
        "name": "Cool-tip Single RF Ablation Electrode",
        "spec": "17G needle, 10 cm - 15 cm length, 5 mm - 7 mm active tip exposure",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Thermal Monitoring",
        "name": "Independent Thermocouple Needle",
        "spec": "20G sensory thermocouple for adjacent nerve protection",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Biopsy Core Needle",
        "name": "13G / 14G Trephine Bone Core Biopsy Needle",
        "spec": "Coaxial with outer cannula for histological confirmation",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Grounding Pads",
        "name": "Dual Dispersive Grounding Pads",
        "spec": "Standard electrosurgical patient pads",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Position patient in CT gantry; perform thin-slice helical CT through the affected bone.",
      "Mark cutaneous entry point; prepare and drape under strict sterile surgical precautions.",
      "Administer local anesthetic down to periosteum; make 3 mm stab incision.",
      "Introduce 11G/13G Bonopty coaxial cannula onto the bone cortex; confirm trajectory aiming directly at the center of the lucent nidus.",
      "Advance the bone drill through the dense sclerotic cortical rim under intermittent low-dose CT verification until the drill tip penetrates the center of the nidus.",
      "Remove drill core; obtain needle core biopsy specimen of the nidus for histopathological verification.",
      "Insert the 17G Cool-tip RF electrode through the cannula into the nidus, ensuring the active exposed tip (5 mm) is entirely contained within the bone nidus (retract outer metallic cannula 1 cm to avoid skin burns).",
      "Apply continuous radiofrequency energy, heating the nidus to 90°C for precisely 4 to 6 minutes.",
      "Turn off generator; allow passive cooling. Administer tract thermal coagulation during electrode withdrawal to prevent seeding.",
      "Perform completion CT documenting absence of cortical fracture, hematoma, or soft tissue injury.",
      "Apply sterile pressure dressing; wake patient and monitor in recovery."
    ],
    "complications": [
      "Thermal injury to adjacent peripheral nerves (causing motor weakness or paresthesia)",
      "Post-procedural iatrogenic cortical fracture through the drilled bone track",
      "Skin burn or muscle tract necrosis",
      "Osteomyelitis or secondary septic arthritis"
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic India (+91 98290 88231)",
      "Boston Scientific India (+91 98293 44556)",
      "Stryker India (+91 98292 44321)"
    ]
  },
  {
    "id": "sacroiliac-rf-neurotomy",
    "name": "Sacroiliac Joint CT-Guided Radiofrequency Neurotomy / Cooled RFA for Chronic Refractory Sacroiliac Arthropathy",
    "category": "Neurointerventional & Lymphatic",
    "code": "MSK-SIJ-01",
    "rghsCode": "695 / 02",
    "icd10": "M46.1 (Sacroiliitis, not elsewhere classified) / M53.3",
    "indications": [
      "Chronic intractable sacroiliac joint pain (> 6 months) refractory to physical therapy, medications, and intra-articular steroid injections",
      "Confirmed positive diagnostic response (>= 75% pain relief) on two separate diagnostic lateral branch nerve blocks (L5 dorsal ramus and S1-S3 lateral branches)",
      "Pain affecting ambulation, sitting tolerance, and quality of life"
    ],
    "preOpCriteria": [
      "Dual diagnostic local anesthetic blocks documenting unequivocal relief",
      "Pelvic CT / MRI excluding active infectious sacroiliitis, ankylosing spondylitis syndesmophyte bridge, or sacral insufficiency fracture",
      "Absence of cardiac pacemaker (or clearance from cardiology with magnet ready for RF application)",
      "Intact coagulation profile"
    ],
    "hardware": [
      {
        "category": "RFA System",
        "name": "Avanos SInergy Cooled RF Generator / Stryker Multigen RF System",
        "spec": "Multi-channel cooled RF generator with peristaltic fluid pump",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Cooled RF Probes",
        "name": "17G Cooled RF Electrodes (SInergy)",
        "spec": "15 cm length, 2 mm - 4 mm active tip with internal water circulation",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Introducer Needles",
        "name": "17G Insulated Introducer Needles",
        "spec": "10 cm - 15 cm length with depth markers",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Bupivacaine 0.5% & Inj Lignocaine 2%",
        "spec": "Sterile injection vials",
        "standardStore": "Pharmacy Central"
      },
      {
        "category": "Grounding Pad",
        "name": "Dispersive Patient Return Electrode",
        "spec": "Electrosurgical grounding pad",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient placed in prone position on CT table; perform baseline low-dose volumetric CT from L5 to S4.",
      "Identify target neural structures: L5 dorsal ramus (junction of sacral ala and S1 superior articular process) and lateral sacral branches of S1, S2, and S3 dorsal rami (lateral margin of posterior sacral foramina).",
      "Infiltrate skin and subcutaneous tissues with 1% lidocaine under sterile conditions.",
      "Under CT guidance, place 17G insulated introducer needles in a circumferential pattern (clock-face distribution at 1:00, 2:30, 4:00, 5:30) 8-10 mm lateral to the S1, S2, and S3 posterior sacral foraminal rims.",
      "Position a needle at the L5 dorsal ramus groove between S1 SAP and sacral ala.",
      "Confirm tip positions on CT cross-sections (ensuring needles are strictly outside the sacral foramina to prevent central canal/ventral root injury).",
      "Perform sensory motor electrical stimulation: 50 Hz sensory threshold < 0.5V (reproducing concordant buttock pain); 2 Hz motor stimulation up to 2.0V showing absence of lower extremity muscle twitching.",
      "Inject 1 mL of 0.5% bupivacaine through each cannula for peri-neural anesthesia.",
      "Insert cooled RF probes; activate cooled RF generator at 60°C for 150 seconds per lesion, creating large spherical (8-10 mm) overlapping thermal ablation zones.",
      "Remove needles; dress puncture sites with sterile adhesive bandages. Evaluate post-procedure motor function in recovery."
    ],
    "complications": [
      "Thermal injury to S1/S2 motor nerve roots resulting in foot drop or bladder dysfunction",
      "Deafferentation neuritis / post-ablation neuropathic flare (1-2 weeks duration)",
      "Subcutaneous infection or abscess",
      "Punctate skin burn from dislodged grounding pad or superficial needle tip"
    ],
    "maayTariffInr": 35000,
    "vendorContacts": [
      "Avanos Medical India (+91 98299 11234)",
      "Stryker India (+91 98292 44321)",
      "Boston Scientific (+91 98293 44556)"
    ]
  },
  {
    "id": "celiac-plexus-neurolysis",
    "name": "Celiac Plexus Neurolysis (CPN): Fluoroscopy / CT-Guided Trans-aortic / Retro-crural Percutaneous Alcohol Injection",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-CPN-01",
    "rghsCode": "695 / 03",
    "icd10": "C25.9 (Malignant neoplasm of pancreas) / R52.1 (Chronic intractable pain)",
    "indications": [
      "Severe, intractable abdominal pain secondary to unresectable pancreatic adenocarcinoma, gastric cancer, or cholangiocarcinoma",
      "Intolerable opioid adverse effects (severe constipation, sedation, nausea) or escalating opioid tolerance",
      "Life expectancy < 12 months with goal of palliative pain reduction"
    ],
    "preOpCriteria": [
      "Contrast-enhanced abdominal CT defining celiac axis anatomy, tumor infiltration, celiac lymphadenopathy, and aortic position",
      "Coagulation screen: INR < 1.5, Platelets > 60,000 /uL",
      "Pre-hydration with 500-1000 mL IV normal saline to prevent severe postural hypotension from sympathetic blockade",
      "Patient informed regarding post-procedural diarrhea and orthostatic hypotension"
    ],
    "hardware": [
      {
        "category": "Puncture Needles",
        "name": "20G - 22G 15 cm - 20 cm Chiba Needles",
        "spec": "Echogenic / bevel tip, flexible, 20 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Neurolytic Agent",
        "name": "Dehydrated Alcohol (Absolute Ethanol 99%)",
        "spec": "Sterile 10 mL ampoules (total 30-50 mL required)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Bupivacaine 0.5% Preservative Free",
        "spec": "20 mL vial",
        "standardStore": "Pharmacy Central"
      },
      {
        "category": "Radiographic Contrast",
        "name": "Non-ionic Contrast (Omnipaque 300)",
        "spec": "50 mL vial",
        "standardStore": "Pharmacy Central"
      },
      {
        "category": "Extension Tubing & Syringes",
        "name": "High-pressure Extension Tubing & 10 mL Luer Lock Syringes",
        "spec": "Low compliance, alcohol-resistant",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Place patient in prone position on CT table (or anterior approach supine if prone intolerable due to severe abdominal pain).",
      "Administer 500 mL IV normal saline preload.",
      "Acquire planning CT through T12-L1 level identifying celiac trunk origin, superior mesenteric artery (SMA), diaphragmatic crura, and abdominal aorta.",
      "Anterior trans-hepatic / trans-gastric route (if supine) or Posterior trans-aortic / retro-crural bilateral route (if prone): Under CT guidance, advance 20G 15-20 cm Chiba needle through posterior back muscles, through aorta (trans-aortic approach), until tip lies in anterior pre-aortic retroperitoneal fat around the celiac trunk base.",
      "Aspirate needle; verify negative for blood and urine.",
      "Test injection: Inject 3-5 mL of 50:50 contrast and 0.5% bupivacaine mixture under CT fluoroscopy to demonstrate crescentic, bilateral retroperitoneal spread around celiac axis and SMA without intravascular, intra-pleural, or psoas tracking.",
      "Administer 10 mL 0.5% bupivacaine to provide local anesthesia, wait 2-3 minutes.",
      "Slowly inject 30 to 40 mL of 99% absolute dehydrated ethanol in divided 5 mL aliquots with real-time CT monitoring to verify circumferential neurolytic distribution.",
      "Flush needle with 2 mL normal saline during withdrawal to prevent alcohol track pain and skin necrosis.",
      "Maintain patient supine, monitor blood pressure closely for orthostatic hypotension for 4-6 hours."
    ],
    "complications": [
      "Transient orthostatic hypotension (due to splanchnic vasodilation; managed with IV fluids)",
      "Transient diarrhea / hyperperistalsis (parasympathetic dominance for 48-72 hours)",
      "Retroperitoneal hematoma or aortic pseudoaneurysm",
      "Paraplegia / anterior spinal cord ischemia from inadvertent Artery of Adamkiewicz or lumbar artery injection"
    ],
    "maayTariffInr": 30000,
    "vendorContacts": [
      "Cook Medical (+91 98292 33445)",
      "Becton Dickinson India (+91 98293 88776)",
      "Neon Laboratories (+91 98291 33221)"
    ]
  },
  {
    "id": "superior-hypogastric-block",
    "name": "Superior Hypogastric Plexus Block: Percutaneous Neurolysis for Intractable Malignant Pelvic Pain",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-SHP-01",
    "rghsCode": "695 / 04",
    "icd10": "C53.9 (Malignant neoplasm of cervix uteri) / R52.1",
    "indications": [
      "Severe, intractable pelvic visceral pain secondary to advanced cervical, uterine, ovarian, bladder, prostate, or colorectal cancer",
      "Pain failing oral opioids or associated with unmanageable drug-related side effects",
      "Pelvic visceral tenesmus, spasms, and cramping"
    ],
    "preOpCriteria": [
      "Pelvic MRI or CT showing tumor extent, iliac vessel anatomy, and ruling out extensive retroperitoneal fibrosis distorting L5-S1 junction",
      "Coagulation parameters: INR < 1.5, Platelets > 60,000 /uL",
      "Diagnostic prognostic block performed with 0.5% bupivacaine demonstrating >= 50% pain relief prior to definitive chemical neurolysis"
    ],
    "hardware": [
      {
        "category": "Puncture Needles",
        "name": "20G - 22G 15 cm Chiba Needles (Paired)",
        "spec": "15 cm length, calibrated depth markings",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Neurolytic Solution",
        "name": "10% Aqueous Phenol or 99% Dehydrated Ethanol",
        "spec": "Sterile 10 mL ampoules (total 15-20 mL)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Bupivacaine 0.5%",
        "spec": "20 mL vial",
        "standardStore": "Pharmacy Central"
      },
      {
        "category": "Contrast Media",
        "name": "Non-ionic Low Osmolar Contrast (Omnipaque 300)",
        "spec": "50 mL vial",
        "standardStore": "Pharmacy Central"
      },
      {
        "category": "Extension Sets",
        "name": "Flexible High-Pressure Tubing",
        "spec": "Luer lock connection tubing",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Position patient prone with a pillow under the lower abdomen to flatten lumbar lordosis.",
      "CT planning scan at the L5-S1 intervertebral disc space and aortic bifurcation level.",
      "Identify the retroperitoneal space anterior to the lower third of L5 vertebral body and upper sacral promontory, sandwiched between the common iliac vessels.",
      "Bilateral posterolateral approach: Insert two 20G 15 cm Chiba needles bilaterally, 5-7 cm lateral to midline, angling 30-45 degrees medially under the L5 transverse process and across the anterolateral aspect of L5-S1 disc.",
      "Alternatively, perform trans-discal puncture through L5-S1 disc directly into pre-vertebral space.",
      "Verify needle tip is positioned in the retroperitoneum anterior to the L5-S1 promontory, medial to the iliac vessels.",
      "Aspirate meticulously to confirm absence of blood (common iliac vessels), urine (ureter), or CSF.",
      "Inject 3-4 mL of non-ionic contrast: Document smooth, bilateral retroperitoneal spread lining the anterior L5-S1 vertebral contour without vascular runoff.",
      "Inject 5 mL of 0.5% bupivacaine per side, wait 5 minutes.",
      "Slowly inject 8-10 mL of 10% aqueous phenol or absolute ethanol bilaterally.",
      "Flush needle with 1 mL saline and withdraw; monitor lower extremity sensations and bladder function."
    ],
    "complications": [
      "Accidental puncture of common iliac vein or artery with retroperitoneal hematoma",
      "Inadvertent somatic L5/S1 nerve root injury causing paresthesia or foot weakness",
      "Ureteral injury or puncture",
      "Transient bladder or bowel dysfunction"
    ],
    "maayTariffInr": 32000,
    "vendorContacts": [
      "Cook Medical (+91 98292 33445)",
      "Becton Dickinson India (+91 98293 88776)",
      "Neon Laboratories (+91 98291 33221)"
    ]
  },
  {
    "id": "ganglion-impar-neurolysis",
    "name": "Ganglion Impar Neurolysis: Transcoccygeal Percutaneous Neurolytic Block for Perineal and Rectal Carcinoma Pain",
    "category": "Neurointerventional & Lymphatic",
    "code": "NEURO-GIM-01",
    "rghsCode": "695 / 05",
    "icd10": "C20 (Malignant neoplasm of rectum) / C51.9 (Vulva) / R52.1",
    "indications": [
      "Intractable malignant perineal, perianal, rectal, vulvar, or distal vaginal pain from advanced pelvic neoplasms",
      "Coccydynia or severe post-radiation tenesmoid perineal burning refractory to conservative therapy",
      "Sympathetically mediated pelvic/perineal cancer pain with intolerable opioid side effects"
    ],
    "preOpCriteria": [
      "Pre-procedure diagnostic block with local anesthetic achieving >= 50% temporary relief of perineal burning pain",
      "Pelvic CT/MRI evaluating sacrococcygeal anatomy and ruling out active local infection / tumor ulceration over the coccyx",
      "Normal coagulation parameters (INR < 1.5, Platelets > 60,000 /uL)"
    ],
    "hardware": [
      {
        "category": "Puncture Needle",
        "name": "22G 2.5 - 3.5 inch Spinal Needle (Quincke / Chiba)",
        "spec": "22G, 7 cm - 9 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Neurolytic Agent",
        "name": "Dehydrated Ethanol 99% or Phenol 6-8% in Glycerin",
        "spec": "Sterile ampoules (3-5 mL total volume)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Bupivacaine 0.5% & Lignocaine 2%",
        "spec": "10 mL - 20 mL vials",
        "standardStore": "Pharmacy Central"
      },
      {
        "category": "Contrast Media",
        "name": "Non-ionic Iodinated Contrast (Omnipaque 300)",
        "spec": "20 mL vial",
        "standardStore": "Pharmacy Central"
      },
      {
        "category": "Syringes",
        "name": "2 mL and 5 mL Luer Lock Syringes with Connector Tubing",
        "spec": "Low-deadspace sterile syringes",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Position patient prone with a pillow under the pelvis; separate buttocks with wide adhesive tape.",
      "Sterilize the sacrococcygeal region thoroughly with chlorhexidine/betadine.",
      "Under lateral fluoroscopy or CT guidance, palpate and identify the sacrococcygeal junction or intercoccygeal joint.",
      "Infiltrate skin with 1-2 mL 2% lidocaine over the sacrococcygeal joint.",
      "Transcoccygeal approach: Advance the 22G spinal needle directly through the midline sacrococcygeal ligament / joint disc under lateral fluoroscopy until the tip barely emerges into the retro-rectal precoccygeal space of Walther.",
      "Verify needle tip is just anterior to the anterior cortex of the coccyx (confirming it has not penetrated the posterior rectal wall).",
      "Aspirate to verify negative for air, blood, or stool.",
      "Inject 1-2 mL non-ionic contrast: Observe characteristic \"comma-shaped\" or smooth vertical linear radiopaque contrast spread anterior to the sacrococcygeal junction in lateral projection.",
      "Administer 2 mL 0.5% bupivacaine, followed by slow injection of 3-5 mL 99% dehydrated alcohol or 6% phenol.",
      "Flush needle with 0.5 mL saline and withdraw needle; apply small sterile dressing.",
      "Keep patient resting flat in recovery for 1-2 hours; check for complete relief of perineal allodynia."
    ],
    "complications": [
      "Rectal puncture with pelvic or retro-rectal abscess / fistula formation",
      "Inadvertent alcohol tracking to somatic sacral nerve roots causing motor weakness",
      "Urinary or fecal incontinence (rare with low volumes)",
      "Subcutaneous tissue necrosis at coccyx"
    ],
    "maayTariffInr": 25000,
    "vendorContacts": [
      "Becton Dickinson India (+91 98293 88776)",
      "Cook Medical (+91 98292 33445)",
      "Neon Laboratories (+91 98291 33221)"
    ]
  },
  {
    "id": "intranodal-lymphangiography",
    "name": "Intranodal Lymphangiography: Ultrasound-Guided Bilateral Inguinal Lymph Node Micro-Puncture & Lipiodol Infusion",
    "category": "Neurointerventional & Lymphatic",
    "code": "LYMPH-INL-01",
    "rghsCode": "695 / 06",
    "icd10": "I89.8 (Other specified noninfective disorders of lymphatic vessels) / I89.0",
    "indications": [
      "Diagnostic localization of lymphatic leak in postoperative chylothorax, chyloperitoneum (chylous ascites), or lymphatic fistulas",
      "Essential first step for Thoracic Duct Embolization (TDE) to opacify the retroperitoneal lymphatic trunks and cisterna chyli",
      "Therapeutic lymphangiography: Sclerosis of minor lymphatic leaks secondary to the inflammatory/viscous properties of Lipiodol"
    ],
    "preOpCriteria": [
      "Pleural / peritoneal fluid analysis confirming chyle (Triglycerides > 110 mg/dL and presence of chylomicrons)",
      "Coagulation profile: INR < 1.5, Platelets > 50,000 /uL",
      "High-fat meal (cream / butter / walnut oil) administered 4-6 hours prior to procedure to increase mesenteric chyle flow and enhance cisterna chyli dilation",
      "Absence of known severe allergy to poppy seed oil or Lipiodol"
    ],
    "hardware": [
      {
        "category": "Puncture Needles",
        "name": "25G - 27G 1.5-inch Butterfly or Micro-Needles",
        "spec": "25G echogenic needle with short connecting tubing",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Lipiodol Contrast",
        "name": "Lipiodol Ultra-Fluid (Ethiodized Poppyseed Oil)",
        "spec": "10 mL ampoules (Guerbet) x 2",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Infusion Pump",
        "name": "Dedicated Syringe Infusion Pump (Micro-infusion)",
        "spec": "Infusion rate capability 0.2 - 0.5 mL/min",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Syringes & Connectors",
        "name": "10 mL Polycarbonate Lipiodol-resistant Syringes",
        "spec": "Lipiodol-compatible plastic syringes",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Ultrasound",
        "name": "High-Frequency Linear Ultrasound Probe (10-15 MHz)",
        "spec": "Sterile sheath covered",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient supine on fluoroscopy/angiography table; clean and drape bilateral inguinal regions.",
      "High-frequency ultrasound examination of bilateral groins to identify suitable superficial inguinal lymph nodes (target node size 8-15 mm with distinct hypoechoic cortex and echogenic fatty hilum).",
      "Administer 0.5 mL 1% lidocaine subcutaneously over the chosen inguinal node.",
      "Under real-time ultrasound guidance, insert 25G butterfly needle into the transition zone between the lymph node cortex and hilum.",
      "Connect needle tubing to 10 mL polycarbonate syringe loaded with Lipiodol Ultra-Fluid mounted on syringe pump.",
      "Initiate slow manual test injection under live fluoroscopy: Confirm smooth arborizing filling of efferent lymphatic channels without nodal extravasation or venous washout.",
      "Start continuous automated infusion of Lipiodol at 0.2 to 0.4 mL/minute (maximum total dose 15-20 mL in adults to prevent pulmonary oil embolism).",
      "Intermittently record fluoroscopic spot images of the pelvis, lumbar lymphatic trunks, and upper abdomen at 10-15 minute intervals as Lipiodol ascends into the retroperitoneum.",
      "Document sequential opacification of iliac lymphatic chains, lumbar trunks, cisterna chyli (at L1-L2), and the thoracic duct.",
      "Once cisterna chyli and thoracic duct are clearly delineated, proceed immediately to percutaneous thoracic duct access."
    ],
    "complications": [
      "Pulmonary oil micro-embolism (choking, dyspnea, transient hypoxia if total dose > 20 mL or direct venous extravasation occurs)",
      "Lymph node rupture and local tissue extravasation causing sterile granuloma",
      "Transitory pain at inguinal puncture site",
      "Allergic hypersensitivity to ethiodized oil"
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98292 33445)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "thoracic-duct-embolization",
    "name": "Thoracic Duct Embolization (TDE): Transabdominal Cisterna Chyli Puncture, Catheterization, and Coil / Glue Occlusion",
    "category": "Neurointerventional & Lymphatic",
    "code": "LYMPH-TDE-01",
    "rghsCode": "695 / 07",
    "icd10": "I89.8 (Chylothorax) / I97.89 (Postprocedural chylothorax)",
    "indications": [
      "High-output postoperative chylothorax (> 500-1000 mL/day) following esophagectomy, lung resection, cardiac surgery, or neck dissection",
      "Persistent chylothorax failing conservative therapy (NPO, total parenteral nutrition, octreotide/somatostatin) after 7-14 days",
      "Nontraumatic or idiopathic chylothorax with high morbidity"
    ],
    "preOpCriteria": [
      "Successful intranodal lymphangiography opacifying cisterna chyli or lower thoracic duct",
      "Correction of severe metabolic derangements, lymphopenia, and hypoproteinemia secondary to prolonged chyle drainage",
      "Sedation with adequate analgesia or general anesthesia with muscle relaxation"
    ],
    "hardware": [
      {
        "category": "Puncture Needles",
        "name": "21G - 22G 15 cm - 20 cm Chiba Access Needle",
        "spec": "Echogenic tip, 22G, 20 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microguidewire",
        "name": "0.014 inch / 0.018 inch Hydrophilic Platinum Floppy Wire",
        "spec": "Transend 14 / V-18 Control Wire, 300 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "1.7F - 2.0F Progreat / Headway 17 / True Form Microcatheter",
        "spec": "130 cm - 150 cm length",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Embolic Coils",
        "name": "Pushable / Detachable Platinum Microcoils",
        "spec": "0.014 - 0.018 inch, 2 mm - 6 mm diameters",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Tissue Adhesive Glue",
        "name": "N-Butyl Cyanoacrylate (NBCA / Histoacryl)",
        "spec": "0.5 mL ampoules with Lipiodol mix (1:1 to 1:4 ratio)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Non-ionic Flush",
        "name": "5% Dextrose in Water (D5W)",
        "spec": "Ionic-free flush to prevent premature NBCA polymerization",
        "standardStore": "Pharmacy Central"
      }
    ],
    "techniqueSteps": [
      "Confirm opacification of cisterna chyli / retroperitoneal confluence (L1-T12) on live fluoroscopy following intranodal lymphangiography.",
      "Under fluoroscopic guidance in AP and slight oblique projections, advance a 22G 20 cm Chiba needle transabdominally through the anterior abdominal wall directly into the cisterna chyli.",
      "Remove stylet; observe spontaneous slow return of milky/oily fluid or inject small puff of water-soluble contrast to confirm intra-ductal placement.",
      "Carefully advance a 0.014 inch steerable guidewire (Transend 14) through the needle into the thoracic duct, navigating up to the midthoracic or superior leak site.",
      "Track 1.7F/2.0F microcatheter over the wire into the thoracic duct.",
      "Perform thoracic duct lymphangiogram through the microcatheter using dilute contrast to pinpoint the precise leak site (focal extravasation into pleural cavity).",
      "Advance microcatheter just distal to the leak (or if leak is high in neck, position at the supradiaphragmatic duct trunk).",
      "Deploy 2 mm - 4 mm platinum microcoils into the thoracic duct to create a mechanical scaffold.",
      "Flush the microcatheter dead space thoroughly with 5% Dextrose (D5W).",
      "Inject 1:2 or 1:3 mixture of N-butyl cyanoacrylate (NBCA) glue and Lipiodol into the coil matrix under continuous fluoroscopy until the thoracic duct is completely occluded.",
      "Immediately aspirate and withdraw the microcatheter to prevent gluing of catheter tip.",
      "Perform completion fluoroscopy confirming dense coil-glue cast and lack of forward chyle transit."
    ],
    "complications": [
      "Glue migration through venous junction into pulmonary arterial circulation (pulmonary embolism)",
      "Bowel perforation, mesenteric hematoma, or pancreatitis from transabdominal needle passes",
      "Lower extremity lymphedema or chronic diarrhea / protein-losing enteropathy",
      "Recurrent chylothorax secondary to collateral lymphatic channel development"
    ],
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Terumo India (+91 98291 55678)",
      "Cook Medical (+91 98292 33445)",
      "B. Braun Medical India (+91 98298 77665)"
    ]
  },
  {
    "id": "thoracic-duct-disruption",
    "name": "Thoracic Duct Disruption / Maceration for Intractable Postoperative Chylothorax when Cannulation Fails",
    "category": "Neurointerventional & Lymphatic",
    "code": "LYMPH-TDD-01",
    "rghsCode": "695 / 08",
    "icd10": "I89.8 (Chylothorax) / T81.89",
    "indications": [
      "High-output postoperative chylothorax where cisterna chyli or thoracic duct cannot be selectively catheterized due to hypoplasia, plexiform duct variant, or sharp angulation",
      "Failed thoracic duct embolization in a patient who is a poor surgical candidate for thoracic duct ligation",
      "Persistent chylous fistula with visible cisterna chyli target on lymphangiography"
    ],
    "preOpCriteria": [
      "Prior intranodal lymphangiography clearly opacifying the retroperitoneal lymphatic trunks and anatomical location of cisterna chyli",
      "Failed attempt at micro-wire and microcatheter cannulation of the thoracic duct lumen",
      "Coagulation status verified (INR < 1.5, Platelets > 60,000 /uL)"
    ],
    "hardware": [
      {
        "category": "Puncture Needles",
        "name": "18G - 20G 15 cm - 20 cm Chiba / Trocar Needles",
        "spec": "18G - 20G cutting/bevel needle, 20 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Disruption Guidewires",
        "name": "0.035 inch Stiff Glidewire / Rosen Heavy Duty Wire",
        "spec": "150 cm - 260 cm length, J-tip",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Introducer Sheath",
        "name": "4F / 5F 10 cm Vascular Introducer Sheath",
        "spec": "Radiopaque sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% & Bupivacaine 0.5%",
        "spec": "20 mL vials",
        "standardStore": "Pharmacy Central"
      }
    ],
    "techniqueSteps": [
      "Position patient supine under fluoroscopic roadmapping with previously opacified cisterna chyli / retroperitoneal lymphatic confluence.",
      "Under local anesthesia and conscious sedation, advance an 18G/20G Chiba needle transabdominally directly into the retroperitoneal lymphatic confluence.",
      "Instead of selective intraluminal cannulation, perform mechanical disruption: Repeatedly pass the 18G/20G needle tip through the cisterna chyli and adjacent lymphatic channels in multiple angles to mechanically transect and disrupt the lymphatic plexus.",
      "Pass a 0.035 inch stiff guidewire or J-tip Glidewire through the needle and manipulate it with back-and-forth scissor/cheese-wire motions to further lacerate and disrupt the retroperitoneal lymphatic trunks.",
      "This mechanical maceration diverts chyle from the high-pressure thoracic duct into the low-pressure retroperitoneum, where extensive lymphatic-venous communications absorb the fluid, thereby decompressing the intrathoracic leak and allowing the pleural defect to heal.",
      "Perform completion fluoroscopy confirming extravasation of Lipiodol into the retroperitoneal soft tissues and lack of forward transit into the thoracic duct.",
      "Withdraw needle and apply pressure dressing; monitor chest tube output over the subsequent 48-72 hours."
    ],
    "complications": [
      "Retroperitoneal hematoma or aortic / vena caval puncture",
      "Transient chylous ascites",
      "Bowel injury or peritonitis",
      "Failure to stop chylothorax requiring re-intervention"
    ],
    "maayTariffInr": 60000,
    "vendorContacts": [
      "Cook Medical (+91 98292 33445)",
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "retrograde-td-cannulation",
    "name": "Retrograde Transvenous Thoracic Duct Cannulation via Left Internal Jugular / Subclavian Angle",
    "category": "Neurointerventional & Lymphatic",
    "code": "LYMPH-RTD-01",
    "rghsCode": "695 / 09",
    "icd10": "I89.8 (Disorders of lymphatic vessels) / I97.89",
    "indications": [
      "Postoperative chylothorax or lymphatic leak in patients where transabdominal cisterna chyli puncture is impossible (absent cisterna chyli, severe obesity, severe ascites, or surgical mesh)",
      "Supraclavicular lymphatic fistulas or thoracic duct outlet strictures / thoracic duct outlet syndrome",
      "Diagnostic retrograde lymphangiography of the upper thoracic duct"
    ],
    "preOpCriteria": [
      "Pre-op ultrasound and CT neck/chest examining the left venous angle (Pirogoff junction) between the left internal jugular vein and subclavian vein",
      "Rule out left internal jugular / brachiocephalic vein thrombosis",
      "Systemic heparinization (low dose 3000 IU) during venous catheter manipulation"
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F 45 cm - 90 cm Guiding Sheath (Cook Shuttle / Vista Brite Tip)",
        "spec": "Positioned via right femoral vein or left basilic vein",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "4F / 5F Cobra C2 / Headhunter / MPA Catheter",
        "spec": "100 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "1.7F - 2.0F Progreat / SL-10 / Headway Microcatheter",
        "spec": "130 cm - 150 cm length, shapeable tip",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microguidewire",
        "name": "0.014 inch Fielder XT / Synchro-14 / Mirage 0.008",
        "spec": "200 cm - 300 cm, fine-tip hydrophilic steerable",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Microcoils",
        "name": "Detachable Platinum Microcoils",
        "spec": "0.014 inch, 2 mm - 4 mm",
        "standardStore": "Neuro IR Store"
      },
      {
        "category": "Ultrasound",
        "name": "High-Resolution Vascular Ultrasound",
        "spec": "For direct left IJV/venous angle visualization",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Obtain right common femoral vein access (or left brachial vein access); advance 6F guiding catheter/sheath into the left brachiocephalic vein near the left internal jugular-subclavian venous junction.",
      "Identify the left venous angle (angle of Pirogoff) where the thoracic duct terminates via a bicuspid competent valve.",
      "Under high-resolution roadmapping, navigate a 5F catheter and 1.7F microcatheter with a flexible 0.014 wire probing the postero-medial wall of the venous angle.",
      "Carefully cross the competent bicuspid lympho-venous valve with the microguidewire (Fielder XT or Synchro) to enter the terminal ampulla of the thoracic duct.",
      "Advance the microcatheter retrogradely down into the cervical and thoracic segments of the thoracic duct.",
      "Perform retrograde lymphangiogram using dilute water-soluble non-ionic contrast to visualize the duct anatomy and location of the leak or laceration.",
      "Advance microcatheter across the leak into the mid-thoracic duct.",
      "Deploy detachable microcoils and/or liquid embolic (Onyx or NBCA glue) across the leak site to achieve permanent occlusion.",
      "Perform completion retrograde venogram confirming no spill into the mediastinum/pleura and complete venous patency of the left subclavian and IJV."
    ],
    "complications": [
      "Venous angle / subclavian vein tear or dissection",
      "Inadvertent coil herniation into the brachiocephalic vein and pulmonary circulation",
      "Damage to adjacent phrenic nerve or left recurrent laryngeal nerve",
      "Pneumothorax from neck needle passes (if direct percutaneous trans-neck access utilized)"
    ],
    "maayTariffInr": 90000,
    "vendorContacts": [
      "Cook Medical (+91 98292 33445)",
      "Terumo India (+91 98291 55678)",
      "Medtronic Neurovascular (+91 98290 88231)"
    ]
  },
  {
    "id": "lymphocele-drainage-sclerotherapy",
    "name": "Postoperative Pelvic / Retroperitoneal Lymphocele Percutaneous Catheter Drainage & Sclerosant Instillation (Bleomycin / Doxycycline)",
    "category": "Neurointerventional & Lymphatic",
    "code": "LYMPH-SCL-01",
    "rghsCode": "695 / 10",
    "icd10": "I89.8 (Other specified disorders of lymphatic vessels) / I97.89 (Postoperative lymphocele)",
    "indications": [
      "Symptomatic postoperative pelvic or retroperitoneal lymphocele following pelvic lymphadenectomy (prostate, gynecologic malignancies) or renal transplantation",
      "Compression of adjacent structures causing lower extremity deep vein thrombosis (iliac vein compression), hydronephrosis (ureteral compression), or pain",
      "Secondary infected lymphocele (lymphangitis / pelvic abscess)"
    ],
    "preOpCriteria": [
      "Pelvic ultrasound or contrast-enhanced CT documenting lymphocele size, septations, and relation to transplanted kidney / iliac vessels",
      "Exclusion of urinoma by fluid creatinine analysis (lymph fluid creatinine equals serum creatinine; urinoma fluid creatinine is 10-50x serum level)",
      "Absence of systemic sepsis or coagulopathy"
    ],
    "hardware": [
      {
        "category": "Puncture Needle",
        "name": "18G Trocar / Chiba Access Needle",
        "spec": "18G, 15 cm length, echogenic tip",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 inch J-Tip Stiff Glidewire / Rosen Wire",
        "spec": "150 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Catheter",
        "name": "8F - 10F All-Purpose Locking Pigtail Drainage Catheter",
        "spec": "Hydrophilic coated, multiple large sideholes",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Bleomycin (15-30 IU) or Doxycycline (500-1000 mg) / Povidone Iodine 10%",
        "spec": "Sterile vials for reconstitution in saline",
        "standardStore": "Pharmacy Central"
      },
      {
        "category": "Drainage Bag",
        "name": "Closed Gravity Drainage Bag with 3-Way Stopcock",
        "spec": "Sterile drainage collection system",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Plan safe percutaneous access route under ultrasound or CT avoiding bowel, bladder, and iliac vessels.",
      "Under sterile technique, administer local anesthesia down to lymphocele capsule.",
      "Puncture lymphocele using 18G trocar needle; aspirate clear, pale yellow lymphatic fluid.",
      "Send fluid for cell count, culture, and fluid creatinine/urea (to definitively exclude urinoma).",
      "Pass 0.035 Stiff Glidewire into the cavity; dilate tract with 8F fascial dilator.",
      "Insert 8F/10F locking pigtail drainage catheter; coil pigtail securely inside cavity and lock suture.",
      "Evacuate fluid completely; record baseline volume.",
      "Sclerotherapy protocol (once daily drainage < 50-100 mL/24h): Perform cavitogram with dilute contrast to rule out peritoneal communication or vascular extravasation.",
      "Instill sclerosant: Reconstitute Bleomycin 15-30 IU (or Doxycycline 500 mg) in 20-30 mL saline; instill into empty lymphocele via stopcock.",
      "Clamp catheter for 2 to 4 hours while having patient rotate positions (supine, prone, lateral decubitus) to coat all walls.",
      "Re-open catheter to free gravity drainage.",
      "Repeat sclerotherapy every 24-48 hours until 24-hour drainage is < 10-15 mL; pull catheter after confirming cavity obliteration on follow-up ultrasound."
    ],
    "complications": [
      "Inadvertent puncture of iliac artery or vein with pelvic hemorrhage",
      "Bowel perforation / peritonitis during initial catheter placement",
      "Severe pelvic pain or chemical peritonitis if sclerosant extravasates into peritoneal cavity",
      "Secondary bacterial infection of the drained lymphocele cavity"
    ],
    "maayTariffInr": 30000,
    "vendorContacts": [
      "Cook Medical (+91 98292 33445)",
      "Merit Medical (+91 98297 33441)",
      "Dr. Reddy’s Laboratories / Cipla (+91 98290 66554)"
    ]
  }
];
