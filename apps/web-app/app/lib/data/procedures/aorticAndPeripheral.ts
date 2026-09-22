import { ProcedureBlueprint } from '../../types/clinical';

export const AORTIC_AND_PERIPHERAL_PROCEDURES: ProcedureBlueprint[] = [
  {
    "id": "evar-bifurcated-modular",
    "name": "Endovascular Abdominal Aortic Aneurysm Repair (EVAR) with Modular Bifurcated Stent-Graft System",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV001A",
    "rghsCode": "693 / 31",
    "icd10": "I71.4 (Abdominal aortic aneurysm, without rupture)",
    "indications": [
      "Infrarenal abdominal aortic aneurysm (AAA) with maximal diameter >= 5.5 cm in males or >= 5.0 cm in females",
      "Rapidly expanding infrarenal AAA (growth rate > 1.0 cm/year or > 0.5 cm in 6 months)",
      "Symptomatic non-ruptured infrarenal AAA (back, flank, or abdominal pain attributable to aneurysm expansion)",
      "Saccular infrarenal or juxtarenal aortic aneurysm regardless of diameter due to high rupture risk"
    ],
    "preOpCriteria": [
      "Contrast-enhanced High-Resolution CT Angiography (slice thickness <= 1 mm) of Chest-Abdomen-Pelvis with bilateral lower limb runoff",
      "Proximal infrarenal aortic neck length >= 10-15 mm, neck diameter <= 32 mm, and infrarenal neck angulation <= 60 degrees",
      "Distal landing zone in common iliac arteries with length >= 15 mm and non-aneurysmal caliber (diameter <= 20 mm)",
      "Adequate iliofemoral access vessel luminal caliber (>= 6-7 mm) without circumferential calcification or extreme tortuosity",
      "Cardiac clearance: Transthoracic echocardiography (LVEF estimation) and non-invasive ischemia workup; baseline renal function (eGFR) and coagulation profile (INR < 1.4, Platelets > 75,000/uL)"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Ultra-Low Profile / High-Flow Introducer Sheath Set",
        "spec": "18F - 20F Gore DrySeal Flex / Cook Check-Flo introducer sheaths",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Perclose Device",
        "name": "Abbott Perclose ProGlide / ProStyle Suture-Mediated Closure System",
        "spec": "Dual pre-close technique per femoral artery access site",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Diagnostic & Sizing Catheter",
        "name": "5F Marker Pigtail Sizing Catheter",
        "spec": "100 cm, 1 cm radiopaque gold band calibrations",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Support Guidewires",
        "name": "Super Stiff Exchange Guidewires",
        "spec": "0.035\" 260 cm / 300 cm Boston Scientific Amplatz Super Stiff / Cook Lunderquist Extra-Stiff",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Steerable Catheters & Wires",
        "name": "Hydrophilic Angiographic Catheters & Glidewires",
        "spec": "5F Cobra C2 / Simmons 1 catheter and 0.035\" 260 cm Terumo Radiofocus Glidewire (angled tip)",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Endograft System",
        "name": "Modular Bifurcated Aortic Stent-Graft System (Main Body & Contralateral Limb)",
        "spec": "Gore Excluder AAA / Medtronic Endurant IIs / Cook Zenith Flex modular system sized to 15-20% oversizing",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Molding Balloon",
        "name": "Large-Volume Compliant Aortic Balloon Catheter",
        "spec": "Gore Tri-Lobe / Medtronic Reliant balloon catheter for graft apposition and junction sealing",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Bilateral common femoral artery access obtained under real-time ultrasound guidance and pre-closed using dual Perclose ProStyle devices deployed at 10 and 2 o'clock orientations.",
      "Systemic anticoagulation initiated with intravenous unfractionated heparin (70-100 IU/kg) targeting an activated clotting time (ACT) of 250-300 seconds throughout the procedure.",
      "Bilateral retrograde insertion of 5F sheaths, exchange over stiff wires for 18F/20F DrySeal sheaths, and positioning of a 5F calibrated marker pigtail catheter in the upper abdominal aorta.",
      "Abdominal aortography performed in LAO/cranial or dedicated neck-perpendicular projection to delineate the lowest renal artery origin (landing zone 3) and aortic bifurcation.",
      "Introduction of the main bifurcated aortic body over a Lunderquist stiff wire via the ipsilateral iliac system and precise alignment of the proximal fabric edge immediately below the lowest renal artery orifice.",
      "Controlled deployment of the main aortic bifurcation endograft; immediate confirmation of patent renal arteries without compromise of origin orifices.",
      "Cannulation of the contralateral endograft gate from the contralateral femoral access using a 5F Cobra/Simmons catheter and steerable Glidewire; rotation of fluoroscopy to verify intradural/in-graft cannulation.",
      "Exchange for a stiff wire, introduction and accurate deployment of the contralateral iliac limb extending down to the common iliac bifurcation (landing zone 5), carefully preserving the internal iliac (hypogastric) artery origin.",
      "Deployment of the ipsilateral iliac limb extension to seal the ipsilateral common iliac landing zone.",
      "Systematic balloon remodeling using a compliant tri-lobe / Reliant balloon across the proximal aortic seal zone, modular overlap junctions, and distal iliac seal zones.",
      "Completion digital subtraction angiography (DSA) via pigtail in the suprarenal aorta to verify aneurysm exclusion, patency of bilateral renal arteries, bilateral hypogastric arterial preservation, and absence of Type I, II, or III endoleaks.",
      "Removal of large-bore delivery sheaths and execution of pre-close hemostasis using ProStyle knot-tying suture advance, followed by peripheral pulse palpation and Doppler confirmation of distal runoff."
    ],
    "complications": [
      "Type IA / IB endoleak (proximal or distal seal failure risking persistent aneurysm pressurization)",
      "Accidental coverage or dissection of renal artery ostia requiring emergency renal stenting or fenestration",
      "Iliac limb thrombosis or graft kinking causing acute lower limb ischemia",
      "Access vessel rupture, dissection, or retroperitoneal hematoma from large-bore sheath manipulation",
      "Post-implantation syndrome (systemic inflammatory response with pyrexia and elevated CRP)",
      "Distal microembolization / trash foot syndrome"
    ],
    "maayTariffInr": 125000,
    "vendorContacts": [
      "Medtronic India Vascular / Jaipur Territory Lead (+91 98290 22441)",
      "W. L. Gore & Associates India (+91 98291 44552)",
      "Cook Medical India Pvt Ltd (+91 98292 66773)"
    ]
  },
  {
    "id": "tevar-thoracic-aneurysm",
    "name": "Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aortic Aneurysm with Landing Zone Optimization",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV002A",
    "rghsCode": "693 / 32",
    "icd10": "I71.2 (Thoracic aortic aneurysm, without rupture)",
    "indications": [
      "Descending thoracic aortic aneurysm (DTAA) with maximum diameter >= 5.5 cm in low-risk surgical patients or >= 6.0 cm in high-risk patients",
      "Rapid thoracic aneurysm expansion (> 5 mm within 6 months or > 10 mm per year)",
      "Saccular aneurysm or penetrating atherosclerotic ulcer (PAU) of descending thoracic aorta with high risk of transmural rupture",
      "Symptomatic thoracic aortic aneurysm with chest or intrascapular back pain"
    ],
    "preOpCriteria": [
      "Gated Thoracic and Abdominopelvic CT Angiography with fine-cut MPR/3D volume rendering",
      "Proximal landing zone length >= 20 mm in healthy non-aneurysmal aorta (Ishimaru Zones 2-4); assessment of left subclavian artery (LSA) and vertebral artery dominance",
      "Evaluation of distal landing zone (>= 20 mm above celiac axis) and assessment of Adamkiewicz artery origin level (typically T8-L1)",
      "CSF drainage catheter placement pre-operatively for extensive descending aortic coverage (> 20 cm) or previous infrarenal aortic repair",
      "Cardiopulmonary functional assessment (TTE, spirometry/PFT), baseline creatinine, and blood cross-matching"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Large Bore DrySeal Sheath Set",
        "spec": "20F - 24F Gore DrySeal Flex sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Vascular Closure",
        "name": "ProStyle Suture-Mediated Closure Devices",
        "spec": "Dual or triple pre-close per access side",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Diagnostic & Sizing",
        "name": "5F Marker Pigtail Sizing Catheter",
        "spec": "100 cm, 1 cm calibrated gold radiopaque bands",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Extra-Stiff Guidewires",
        "name": "Ultra-Stiff Aortic Guidewires",
        "spec": "0.035\" 300 cm Cook Lunderquist Extra-Stiff / Boston Scientific Backup Meier wire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Thoracic Stent-Graft",
        "name": "Thoracic Aortic Stent-Graft System",
        "spec": "Medtronic Valiant Navion / Gore TAG Conformable / Cook Zenith Alpha thoracic graft with 10-15% diameter oversizing",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Remodeling Balloon",
        "name": "Thoracic Compliant Balloon Catheter",
        "spec": "Gore Tri-Lobe / Medtronic Reliant balloon catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Hemodynamic Control",
        "name": "Rapid Ventricular Pacing (RVP) Catheter",
        "spec": "6F Bipolar pacing catheter via internal jugular/femoral vein for transient systolic hypotension (< 80 mmHg) during deployment",
        "standardStore": "Cath Lab Cardiac Store"
      }
    ],
    "techniqueSteps": [
      "General anesthesia with continuous arterial line monitoring in both right and left radial arteries to detect accidental left subclavian artery compromise.",
      "Active CSF drainage initialized with intracranial/intrathecal pressure transducer maintained at <= 10-12 mmHg.",
      "Ultrasound-guided retrograde puncture of unilateral common femoral artery with pre-closure using two Perclose ProStyle devices; secondary 5F femoral or radial access for diagnostic pigtail.",
      "Full heparinization administered to achieve target ACT >= 250-300 seconds.",
      "Retrograde delivery of 5F marker pigtail to aortic arch; perform arch aortography in 45-60 degree LAO projection to clearly profile the Ishimaru landing zones (Zone 2 LSA origin to Zone 4).",
      "Exchange diagnostic wire for a 0.035\" 300 cm Lunderquist wire positioned in the ascending aorta with gentle curved tip resting non-traumatically above the aortic valve.",
      "Introduction of thoracic stent-graft delivery system over the stiff wire and precise anatomical tracking through tortuous iliofemoral and visceral aortic segments.",
      "Induction of controlled transient systemic hypotension (MAP < 50-60 mmHg) via rapid ventricular pacing or IV pharmacologic agent (nitroglycerin/adenosine) to minimize \"wind-sock\" displacement effect.",
      "Accurate and controlled deployment of the thoracic stent-graft immediately distal to or covering LSA (with prior or concurrent revascularization/bypass if dominant left vertebral artery present).",
      "If multi-component modular graft is utilized, deploy distal extension components maintaining >= 5 cm overlap to prevent modular disconnection.",
      "Judicious gentle compliant balloon molding at graft landing zones and overlap joints avoiding ballooning in fragile dissection or PAU edges.",
      "Completion thoracic and abdominal aortography confirming total aneurysm exclusion, patency of arch branches (innominate, LCCA, LSA) and visceral branch origins, without Type IA, IB, or III endoleaks.",
      "Removal of large-bore sheath, ProStyle pre-close suture knot delivery, hemostatic confirmation, and immediate post-procedural neurological exam of lower extremities."
    ],
    "complications": [
      "Spinal cord ischemia resulting in paraplegia or paraparesis (incidence 2-8%)",
      "Stroke / Cerebrovascular accident secondary to arch wire manipulation or branch coverage",
      "Type IA endoleak (proximal gutter or inadequate landing zone seal)",
      "Retrograde Type A aortic dissection triggered by balloon molding or bare stent edge trauma",
      "Access artery disruption or retroperitoneal hemorrhage",
      "Aortoesophageal or aortobronchial fistulization (late complication in large saccular/infective aneurysms)"
    ],
    "maayTariffInr": 135000,
    "vendorContacts": [
      "Medtronic India Vascular Division (+91 98290 22441)",
      "W. L. Gore & Associates (+91 98291 44552)",
      "Cook Medical Interventional (+91 98292 66773)"
    ]
  },
  {
    "id": "tevar-acute-type-b-dissection",
    "name": "TEVAR for Acute Complicated Stanford Type B Aortic Dissection (Entry Tear Coverage)",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV003A",
    "rghsCode": "693 / 33",
    "icd10": "I71.01 (Dissection of thoracic aorta, Stanford type B)",
    "indications": [
      "Acute complicated Stanford Type B aortic dissection (symptom onset <= 14 days) with malperfusion syndrome (renal, mesenteric, spinal, or lower limb ischemia)",
      "Ruptured or impending rupture of acute Type B dissection (hemothorax, mediastinal hematoma, periaortic effusion)",
      "Refractory unremitting chest/back pain despite maximum tolerated anti-impulse medical therapy",
      "Refractory hypertension requiring >= 3 intravenous antihypertensive agents",
      "High-risk anatomical features of early progression (initial false lumen diameter >= 22 mm, primary entry tear > 10 mm on lesser curvature)"
    ],
    "preOpCriteria": [
      "Electrocardiogram-gated High-Resolution CTA of Chest, Abdomen, and Pelvis identifying primary proximal intimal tear, true and false lumen anatomy, and visceral takeoff origins",
      "Strict systolic blood pressure target < 120 mmHg and heart rate < 60 bpm achieved with IV beta-blockers (Esmolol / Labetalol)",
      "Pre-procedure baseline neurological evaluation, spinal cord perfusion pressure monitoring, and CSF drain placement if extensive coverage (> 15 cm) planned",
      "Renal function tests, serum lactate, base deficit, and coagulation profile (INR < 1.4, Platelets > 80,000/uL)"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Hydrophilic Sheaths & Closure Devices",
        "spec": "18F - 22F DrySeal Flex Sheath and dual Perclose ProStyle devices",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic & Pressure Monitoring",
        "name": "5F Marker Pigtail Catheter & Pressure Transducer",
        "spec": "100 cm pigtail with invasive true vs false lumen simultaneous pressure measurement",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewires",
        "name": "Hydrophilic & Ultra-Stiff Guidewires",
        "spec": "0.035\" 260 cm Stiff Glidewire and 0.035\" 300 cm Lunderquist Extra-Stiff Wire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Intravascular Ultrasound",
        "name": "IVUS Catheter System",
        "spec": "Philips Visions PV .035 IVUS catheter for unambiguous true lumen verification and branch origin evaluation",
        "standardStore": "Cath Lab IVUS Console"
      },
      {
        "category": "Endograft",
        "name": "Tapered Thoracic Stent-Graft System",
        "spec": "Medtronic Valiant Navion / Gore TAG Conformable sized with conservative 0-5% oversizing relative to true lumen / non-dissected arch diameter",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Distal Uncovered Stent",
        "name": "PETTICOAT Provisional Uncovered Nitinol Stent",
        "spec": "Zenith Dissection Bare Nitinol Stent for distal visceral segment stabilization without occluding side branches",
        "standardStore": "Special Consignment Store"
      }
    ],
    "techniqueSteps": [
      "Continuous invasive arterial pressure monitoring in right upper extremity and bilateral femoral access established under sonographic vision.",
      "Catheterization of the TRUE LUMEN confirmed by multimodal technique: IVUS intravascular ultrasound visualization of visceral takeoff anatomy and contrast injection demonstrating synchronous pulsatility.",
      "Heparinization to achieve ACT 250-300 seconds.",
      "Arch aortography performed in steep LAO projection to profile the primary intimal tear located just distal to the left subclavian artery (Zone 2/3).",
      "Advancement of 0.035\" 300 cm Lunderquist wire into the ascending aorta within the TRUE lumen.",
      "Thoracic stent-graft positioned across the primary proximal entry tear with proximal landing in Ishimaru Zone 2 (with LSA bypass/revascularization if indicated) or Zone 3.",
      "Controlled deployment under transient systemic hypotension (systolic BP 70-80 mmHg) induced with rapid ventricular pacing or adenosine.",
      "CRITICAL SAFETY DIRECTIVE: Avoid high-pressure balloon remodeling at the proximal and distal landing zones to prevent iatrogenic retrograde Type A dissection and downstream true-lumen collapse.",
      "If dynamic visceral malperfusion persists post-entry coverage, deploy distal provisional bare-metal stent (PETTICOAT technique) across thoracoabdominal aorta to re-expand the collapsed true lumen while maintaining intercostal and visceral patency.",
      "Repeat aortic and visceral angiography to assess true lumen re-expansion, thrombosis of the thoracic false lumen, and brisk perfusion of celiac, SMA, renal, and iliofemoral vessels.",
      "Perclose suture closure of femoral access and transfer to ICU for strict anti-impulse management (target SBP 100-120 mmHg)."
    ],
    "complications": [
      "Retrograde Type A aortic dissection (RTAD) - potentially fatal emergency requiring immediate median sternotomy",
      "Spinal cord ischemia / paraplegia from intercostal and lumbar artery false-lumen thrombosis",
      "Persistent visceral or lower-extremity malperfusion due to static branch dissection",
      "Aortic rupture / false lumen perforation during device navigation",
      "Stroke / transient ischemic attack"
    ],
    "maayTariffInr": 140000,
    "vendorContacts": [
      "Medtronic India Interventional (+91 98290 22441)",
      "Cook Medical Vascular Division (+91 98292 66773)",
      "Philips Healthcare IVUS Solutions (+91 98294 11223)"
    ]
  },
  {
    "id": "fevar-bevar-juxtarenal-thoracoabdominal",
    "name": "Fenestrated / Branched Endovascular Aortic Repair (FEVAR / BEVAR) for Juxtarenal and Thoracoabdominal Aneurysms",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV004A",
    "rghsCode": "693 / 34",
    "icd10": "I71.6 (Thoracoabdominal aortic aneurysm, without rupture)",
    "indications": [
      "Juxtarenal, pararenal, or Crawford Extent I-IV thoracoabdominal aortic aneurysms (TAAA) with insufficient non-aneurysmal neck length (< 10 mm)",
      "Severe infrarenal neck angulation (> 60 degrees) or reverse taper neck precluding standard infrarenal EVAR in patients unfit for open surgery",
      "Post-dissection thoracoabdominal aneurysm expansion >= 5.5-6.0 cm"
    ],
    "preOpCriteria": [
      "Thin-cut (<= 0.75 mm) ECG-gated CTA from thoracic inlet to femoral bifurcations with precise 3D center-line reconstruction of target visceral vessels (celiac, SMA, bilateral renals)",
      "Customized device planning: calculation of clock-face positions, longitudinal distances, branch takeoff angulations, and vessel diameters",
      "Prophylactic lumbar cerebrospinal fluid (CSF) drain placement 24h prior to procedure to mitigate spinal cord ischemia",
      "Baseline cardiac evaluation (dobutamine stress echo / coronary angiogram), pulmonary function tests, and renal clearance (eGFR > 30 mL/min/1.73m2 preferred)"
    ],
    "hardware": [
      {
        "category": "Main Endograft System",
        "name": "Custom-Made / Off-the-Shelf Fenestrated/Branched Endograft",
        "spec": "Cook Zenith Fenestrated / Cook T-Branch / Gore Thoracoabdominal Multibranch System with 4 branch/fenestration configurations",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Bridging Stent-Grafts",
        "name": "Balloon-Expandable & Self-Expanding Covered Stents",
        "spec": "Atrium Advanta V12 / Gore Viabahn VBX balloon-expandable covered stents (6-8 mm x 22-38 mm)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Large-Bore Sheaths",
        "name": "Large-Bore Hydrophilic Sheaths",
        "spec": "20F - 24F Gore DrySeal Flex sheaths (bilateral groin) and 8.5F - 10F steerable introducer sheaths (Cook Flexor / Medtronic Heli-FX)",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Upper Extremity Access",
        "name": "Long Steerable / Guiding Sheaths",
        "spec": "6F - 8F 90 cm Cook Destination / Shuttle sheaths via left axillary / brachial artery access",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheters & Wires",
        "name": "Steerable Microcatheters and Intermediate Catheters",
        "spec": "0.014\" - 0.018\" Terumo Runthrough / Command wires and 2.4F Progreat microcatheters",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Compliant Molding Balloon",
        "name": "Large Diameter Compliant Balloon",
        "spec": "Gore Tri-Lobe / Reliant balloon catheter",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "General endotracheal anesthesia, continuous CSF drainage monitoring, and systemic anticoagulation titrated to maintain ACT > 250-300 seconds.",
      "Surgical cutdown or percutaneous ultrasound-guided access to bilateral common femoral arteries and left axillary / brachial artery.",
      "Marker pigtail angiogram to map visceral takeoff levels under fluoroscopic roadmapping.",
      "Advancement and deployment of the main fenestrated/branched aortic endograft over a Lunderquist stiff wire, meticulously aligning fenestrations/cuffs with celiac, SMA, and right/left renal ostia.",
      "Cannulation of each target visceral vessel through fenestrations/branches using steerable guiding catheters (e.g., Cook Flexor / TourGuide) or from upper extremity access for down-facing cuffs.",
      "Engagement of target arteries (Celiac, SMA, Right Renal, Left Renal) with microcatheter and 0.014\"/0.018\" stiff wires (e.g., Rosen / Platinum Plus).",
      "Tracking of balloon-expandable covered stents (Viabahn VBX / Advanta V12) into each target visceral vessel, ensuring at least 15 mm seal in healthy target artery and adequate intra-aortic flare (trumpet flare) inside the main endograft lumen.",
      "Balloon flaring of the bridging stent-graft ostium inside the main aortic graft using a larger balloon (e.g., 8-10 mm non-compliant balloon) to achieve an airtight mechanical seal.",
      "Deployment of distal bifurcated or unibody aortic components and iliac limb extensions as required.",
      "Systematic completion multi-phase rotational angiography evaluating patency of all 4 visceral branches, absence of Type I, II, or III endoleaks (especially Type IIIC gutter leaks around bridging stents).",
      "Hemostasis of femoral and axillary access sites using pre-placed closure devices or surgical primary suture; intensive care monitoring of spinal cord and renal status."
    ],
    "complications": [
      "Target visceral vessel occlusion or dissection (loss of kidney or bowel infarction)",
      "Spinal cord ischemia and permanent paraplegia (5-10% in extensive TAAA repairs)",
      "Type IIIC endoleak (bridging stent-graft connection leak or disconnection)",
      "Stroke / upper extremity neurological deficits from axillary/brachial manipulation",
      "Acute tubular necrosis or contrast-induced nephropathy"
    ],
    "maayTariffInr": 160000,
    "vendorContacts": [
      "Cook Medical India - Aortic Division (+91 98292 66773)",
      "W. L. Gore & Associates India (+91 98291 44552)",
      "Getinge / Atrium Medical India (+91 98290 88771)"
    ]
  },
  {
    "id": "chevar-parallel-grafts",
    "name": "Chimney / Snorkel EVAR (ChEVAR) with Parallel Renal and Visceral Covered Stents",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV005A",
    "rghsCode": "693 / 35",
    "icd10": "I71.4 (Abdominal aortic aneurysm, without rupture) / I71.6",
    "indications": [
      "Juxtarenal, pararenal, or short-neck (< 10 mm) infrarenal abdominal aortic aneurysms in emergency or emergent settings where custom fenestrated grafts are unavailable",
      "Hostile infrarenal neck (severe conical shape, thrombus lining, angulation > 60 degrees) precluding standard EVAR in patients unfit for open clamp repair",
      "Rescue bail-out during EVAR for accidental coverage of a renal artery ostium"
    ],
    "preOpCriteria": [
      "CTA Abdomen-Pelvis with 3D reconstructed neck dimensions, renal artery origins, and branch takeoff angles",
      "Left axillary or brachial artery luminal caliber >= 6-7 mm (or bilateral upper extremity access if bilateral chimneys required)",
      "Evaluation of suprarenal aortic neck quality (length >= 15 mm in healthy parallel landing zone to accommodate gutter seal)",
      "Baseline creatinine, eGFR, coagulation indices, and blood crossmatch"
    ],
    "hardware": [
      {
        "category": "Aortic Stent-Graft",
        "name": "Modular Infrarenal Aortic Endograft System",
        "spec": "Endurant II / Gore Excluder bifurcated system sized with 20-30% oversizing to accommodate parallel chimney gutters",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Chimney Covered Stents",
        "name": "Balloon-Expandable Covered Stents",
        "spec": "Advanta V12 / Gore Viabahn VBX (5-7 mm diameter x 28-38 mm length)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Long Guiding Sheaths",
        "name": "Long Steerable / Shuttle Sheaths",
        "spec": "6F - 7F 90 cm Terumo Destination / Cook Flexor sheaths via brachial/axillary access",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Support Guidewires",
        "name": "Stiff 0.014\" - 0.035\" Guidewires",
        "spec": "0.014\" Spartacore / Grand Slam wires and 0.035\" Rosen / Amplatz Stiff wires",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Access Closure",
        "name": "Suture-Mediated Closure Devices",
        "spec": "ProStyle closure systems for femoral access",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Molding Balloon",
        "name": "Kissing Balloon Remodeling Catheters",
        "spec": "Aortic compliant balloon (Reliant) and dual peripheral non-compliant balloons for simultaneous kissing post-dilation",
        "standardStore": "Cath Lab Peripheral Store"
      }
    ],
    "techniqueSteps": [
      "Establish bilateral common femoral artery access and left axillary (or left brachial) artery access under ultrasound guidance.",
      "Administer weight-adjusted heparin to achieve ACT >= 250-300 seconds throughout intervention.",
      "From the upper extremity access, navigate 6F/7F long guiding sheaths (90 cm) into the abdominal aorta; selectively cannulate target renal arteries (and/or SMA) with angled catheters and support wires.",
      "Park balloon-expandable covered stents (e.g., Viabahn VBX or Advanta V12) well within the target renal arteries with proximal stent segments extending 10-15 mm above the planned proximal edge of the aortic endograft.",
      "Advance the main bifurcated aortic endograft from the femoral access over a Lunderquist wire to the desired suprarenal/pararenal level.",
      "Simultaneous deployment: partially deploy the aortic endograft while maintaining continuous fluoroscopic visualization of the chimney stents; immediately deploy the parallel renal covered stents.",
      "Cannulate the contralateral aortic gate from the contralateral femoral access and deploy the contralateral iliac limb; deploy ipsilateral limb extension.",
      "Execute synchronized \"kissing\" balloon post-dilation: simultaneously inflate the large aortic compliant balloon in the aortic neck and the peripheral balloons within the chimney covered stents to crush the gutters and establish complete apposition.",
      "Perform multi-projection completion angiography in AP, oblique, and lateral views to inspect renal artery perfusion and vigorously search for gutter-related Type IA endoleaks.",
      "Withdraw upper extremity and femoral hardware; achieve hemostasis at puncture sites with surgical cutdown closure or pre-close devices; verify upper extremity radial/ulnar pulses."
    ],
    "complications": [
      "Type IA gutter endoleak (persistent channel between aortic wall, aortic endograft, and parallel chimney grafts)",
      "Chimney covered stent compression, kink, or thrombosis leading to acute renal infarction",
      "Stroke, brachial plexus injury, or upper extremity arterial thrombosis from axillary access",
      "Aortic wall rupture from aggressive simultaneous kissing post-dilation",
      "Distal microembolization"
    ],
    "maayTariffInr": 145000,
    "vendorContacts": [
      "Medtronic India Interventional (+91 98290 22441)",
      "W. L. Gore & Associates India (+91 98291 44552)",
      "Getinge Group India (+91 98290 88771)"
    ]
  },
  {
    "id": "pevar-percutaneous-preclose",
    "name": "Percutaneous EVAR (PEVAR) with Totally Percutaneous Pre-Close Suture Technique",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV006A",
    "rghsCode": "693 / 36",
    "icd10": "I71.4 (Abdominal aortic aneurysm, without rupture)",
    "indications": [
      "Elective or urgent EVAR candidates meeting anatomical criteria for endovascular repair who prefer minimally invasive totally percutaneous access without surgical groin cutdown",
      "Obese patients with deep inguinal creases where surgical exposure carries high surgical site infection (SSI) or lymphocele risk",
      "Fast-track day-surgery / early ambulation endovascular aortic repair protocols"
    ],
    "preOpCriteria": [
      "Pre-procedure CTA or vascular ultrasound confirming non-calcified, plaque-free anterior common femoral artery (CFA) wall at puncture zone",
      "CFA diameter >= 6.0 mm without high-grade stenosis, circumferential calcification, or excessive scar tissue from prior groin surgery",
      "Absence of morbid obesity precluding ultrasound-guided perpendicular puncture trajectory",
      "Standard EVAR anatomical and physiological eligibility"
    ],
    "hardware": [
      {
        "category": "Suture Closure Devices",
        "name": "Perclose ProGlide / ProStyle Suture-Mediated Closure Devices",
        "spec": "4 units (2 per groin) for pre-close technique",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Vascular Access",
        "name": "Micropuncture Access Set",
        "spec": "21G echogenic needle, 0.018\" nitinol wire, and 4F coaxial transition dilator",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Large-Bore Introducer",
        "name": "Hydrophilic Coated Large Bore Sheaths",
        "spec": "18F - 20F Gore DrySeal Flex sheaths",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Aortic Endograft",
        "name": "Low-Profile Bifurcated Modular EVAR System",
        "spec": "Medtronic Endurant IIs / Gore Excluder low-profile delivery system",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Guidewires",
        "name": "Stiff Exchange Wires",
        "spec": "0.035\" 260 cm Lunderquist Extra-Stiff / Amplatz Super Stiff wires",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Suture Trimmer",
        "name": "Abbott Perclose Suture Trimmer & Knot Pusher",
        "spec": "Dedicated suture management tools",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Real-time high-resolution ultrasound mapping of bilateral common femoral arteries; identify femoral head landmark on fluoroscopy and ensure puncture is well above the CFA bifurcation and below the inguinal ligament.",
      "Micropuncture 21G needle cannulation of the anterior wall of CFA; confirm pulsatile arterial backflow and insert 0.018\" wire followed by 4F transitional dilator.",
      "Perform femoral angiogram via 4F dilator to confirm optimal mid-CFA anterior wall puncture location without local dissection.",
      "Exchange 0.018\" wire for a standard 0.035\" J-wire. Insert first Perclose ProStyle device rotated to 10 o'clock position; deploy needles, retrieve sutures, and secure suture tails with mosquito clamp without tying knot.",
      "Reintroduce 0.035\" wire through the device lumen, remove first device, and insert second ProStyle device rotated to 2 o'clock position; deploy needles and clamp second pair of sutures.",
      "Serial progressive dilation of the arteriotomy over a stiff wire up to 18F/20F; introduce large-bore DrySeal sheath smoothly without twisting to protect pre-placed sutures.",
      "Perform standard modular EVAR deployment, gate cannulation, limb extension, and compliant balloon molding.",
      "At procedure completion, reverse heparin if indicated or proceed with full anticoagulation.",
      "Withdraw large-bore delivery sheath while maintaining a safety 0.035\" guidewire across the arteriotomy; sequentially cinch and push down the pre-placed ProStyle suture knots using the suture trimmer/knot pusher.",
      "Confirm immediate macroscopic hemostasis around the safety wire; gently pull the wire while locking the final knots with the suture trimmer.",
      "Check distal lower extremity pulses and perform Doppler ultrasound on table to confirm patent CFA lumen without stenosis or local pseudoaneurysm formation."
    ],
    "complications": [
      "Pre-close failure requiring emergency surgical cutdown or bailout covered stent placement",
      "Iatrogenic CFA lumen narrowing / stenosis from overly aggressive suture cinching",
      "Femoral pseudoaneurysm, groin hematoma, or retroperitoneal bleeding",
      "Dissection of external iliac or common femoral artery",
      "Distal arterial thrombosis"
    ],
    "maayTariffInr": 120000,
    "vendorContacts": [
      "Abbott Vascular India (+91 98290 33221)",
      "Medtronic India Interventional (+91 98290 22441)",
      "W. L. Gore & Associates India (+91 98291 44552)"
    ]
  },
  {
    "id": "endoleak-transarterial-coiling",
    "name": "Endoleak Treatment: Transarterial Superselective Coiling of Type II Lumbar / IMA Endoleak",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV007A",
    "rghsCode": "693 / 37",
    "icd10": "T82.898A (Complication of vascular graft, endoleak) / I71.4",
    "indications": [
      "Persistent or expanding Type II endoleak following EVAR associated with abdominal aortic aneurysm sac growth >= 5 mm over serial CT/duplex follow-up",
      "Type II endoleak with high intrasac pressure demonstrated on pressure-sensing microcatheterization",
      "Symptomatic aneurysm sac enlargement following endovascular repair"
    ],
    "preOpCriteria": [
      "Triphasic CTA Abdomen with delayed venous/washout phase precisely identifying feeding collaterals (e.g., enlarged Inferior Mesenteric Artery via Drummond/Riolan arcade, or retrogradely filling lumbar arteries via internal iliac/iliolumbar network)",
      "Duplex ultrasound confirming bidirectional flow within the excluded aneurysm sac",
      "Renal function and coagulation status (INR < 1.5, Platelets > 60,000/uL)"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "6F Introducer Sheath",
        "spec": "11 cm / 25 cm 6F sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guiding Catheter",
        "name": "6F Guiding Catheter",
        "spec": "90 cm / 100 cm 6F Vista Brite Tip / Mach 1 guiding catheter (JR4, RDC, or multipurpose shape)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter System",
        "name": "Steerable High-Flow Microcatheter",
        "spec": "2.0F - 2.4F 130 cm / 150 cm Progreat / Renegade HI-FLO / TruFill microcatheter with 0.014\" Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Detachable Coils",
        "name": "Controlled Detachable Microcoils",
        "spec": "Boston Scientific Interlock / Medtronic Concerto / Target 0.014\"-0.018\" fibered detachable coils (lengths 10-30 cm, diameters 2-10 mm)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Liquid Embolic Agent",
        "name": "Ethylene Vinyl Alcohol Copolymer (Onyx) / Glue",
        "spec": "Onyx-18 / Onyx-34 or Glubran2 / Lipiodol mixture with DMSO-compatible microcatheter",
        "standardStore": "Cath Lab Neuro IR Store"
      }
    ],
    "techniqueSteps": [
      "Unilateral retrograde common femoral artery or transbrachial access established with a 6F sheath.",
      "Systemic heparinization with 3000-5000 IU unfractionated heparin.",
      "For IMA pathway: Selectively cannulate the Superior Mesenteric Artery (SMA) with 6F guide; perform high-pressure DSA demonstrating retrograde filling through the Arc of Riolan or Marginal Artery of Drummond into the IMA trunk and aneurysm sac.",
      "For Lumbar pathway: Selectively cannulate the internal iliac artery (hypogastric) branches (iliolumbar, middle sacral, or superior gluteal artery) leading retrogradely to the culprit lumbar feeder.",
      "Navigate 2.0F-2.4F microcatheter coaxially through tortuous mesenteric/pelvic collaterals directly into the patent Type II endoleak nidus inside the excluded aneurysm sac.",
      "Perform microcatheter DSA to define the exact endoleak cavity dimensions and identify any secondary outflow lumbar channels.",
      "Deploy detachable packing and finishing microcoils densely within the central endoleak nidus, ensuring embolization is not limited to the feeding vessel alone (to prevent collateral recruitment).",
      "If cavity persists, administer Onyx-18 or Onyx-34 liquid embolic under continuous subtracted fluoroscopic roadmap following DMSO priming until complete casting of the nidus is achieved.",
      "Perform control SMA / internal iliac angiography demonstrating total cessation of flow into the aneurysm sac with preservation of bowel perfusion arcades.",
      "Withdraw hardware and achieve access closure with closure device or manual compression."
    ],
    "complications": [
      "Colonic / bowel ischemia due to non-target embolization of critical marginal mesenteric arcades",
      "Endoleak recurrence via newly recruited collateral channels",
      "Microcatheter entrapment during liquid embolic injection",
      "Femoral / brachial access pseudoaneurysm or hematoma"
    ],
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic India - Embolics Division (+91 98290 22441)",
      "Boston Scientific India Interventional (+91 98293 88991)",
      "Terumo India Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "endoleak-direct-puncture-embolization",
    "name": "Endoleak Treatment: Direct Translumbar / Transcaval Sac Puncture and Onyx / Thrombin Embolization",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV008A",
    "rghsCode": "693 / 38",
    "icd10": "T82.898A (Endoleak) / I71.4",
    "indications": [
      "Persistent Type II endoleak with significant aneurysm sac expansion (>= 5 mm) where transarterial collateral access has failed or is anatomically impossible due to small/tortuous vessels",
      "Rapid sac expansion with inaccessible lumbar or middle sacral nidus post-EVAR",
      "Endoleak of indeterminate origin with enlarging aneurysm cavity"
    ],
    "preOpCriteria": [
      "Thin-slice contrast CT identifying exact spatial coordinates of the patent endoleak cavity in relation to the spine, vena cava, psoas muscle, and aortic endograft",
      "Absolute exclusion of Type I or Type III endoleak requiring endograft relining",
      "Coagulation indices: Platelets > 80,000/uL, INR < 1.3 to avoid uncontrollable retroperitoneal hemorrhage",
      "Patient capable of maintaining prone or lateral decubitus position under deep sedation / general anesthesia"
    ],
    "hardware": [
      {
        "category": "Puncture Needle System",
        "name": "Translumbar / Chiba Access Needle",
        "spec": "18G - 20G 15 cm / 20 cm Chiba or Trocar tip needle with depth markers",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter System",
        "name": "DMSO-Compatible Microcatheter Set",
        "spec": "2.4F 105 cm Marathon / Rebar / Progreat microcatheter with 0.014\" steerable wire",
        "standardStore": "Cath Lab Neuro IR Store"
      },
      {
        "category": "Embolic Coils",
        "name": "Fibered Pushable & Detachable Coils",
        "spec": "0.018\" / 0.035\" Nester / Interlock coils (diameters 4-16 mm)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Liquid Embolic & Thrombin",
        "name": "Onyx Liquid Embolic / Human Thrombin",
        "spec": "Onyx-34 (EVOH copolymer) vials and Topical/Surgical Human Thrombin (1000-5000 IU/mL)",
        "standardStore": "Cath Lab Neuro IR Store"
      },
      {
        "category": "Pressure Line",
        "name": "Invasive Sac Manometry Line",
        "spec": "High-pressure transducer connected to arterial monitor for pre- and post-embolization intrasac pressure measurement",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient placed in prone or slight left lateral decubitus position on the fluoroscopy/CT-angio hybrid table under conscious sedation or general anesthesia.",
      "Under fluoroscopic / cone-beam CT guidance, plan translumbar entry trajectory at L2-L4 level, avoiding the transverse process, renal parenchyma, and IVC.",
      "Advance an 18G/20G Chiba needle from the left flank directly into the thrombus-filled aneurysm sac targeting the hyperdense endoleak cavity identified on roadmapping.",
      "Confirm pulsatile arterial blood return through the needle; connect pressure transducer to record initial peak systolic intrasac pressure.",
      "Inject small volume of non-ionic contrast to perform digital subtraction sacography, verifying opacification of the endoleak nidus and connecting inflow/outflow lumbar vessels without stent-graft puncture.",
      "Introduce a 0.014\" or 0.018\" guidewire and coaxial 2.4F microcatheter into the cavity for stable access.",
      "Deploy microcoils into the outflow branches and pack the core of the cavity.",
      "Prime microcatheter with 0.25 mL DMSO and slowly inject Onyx-34 under continuous fluoroscopic visualization, building a dense cast occupying the entire nidus until complete arterial stasis is achieved.",
      "Alternatively, instill 2-5 mL of human thrombin (1000 IU/mL) into the isolated cavity to produce immediate stable intra-sac clot.",
      "Repeat pressure manometry confirming drop of intrasac pulse pressure to non-pulsatile venous-equivalent levels.",
      "Gently withdraw needle while applying local compression; check flank tract with ultrasound for extravasation."
    ],
    "complications": [
      "Retroperitoneal hematoma from needle tract bleeding",
      "Accidental puncture or structural damage to the aortic stent-graft fabric",
      "Non-target embolization of Onyx into systemic arterial or venous circulation",
      "Inadvertent neural trauma (lumbar plexus / nerve root irritation)",
      "Psoas muscle abscess or hematoma"
    ],
    "maayTariffInr": 90000,
    "vendorContacts": [
      "Medtronic India Neurovascular / Peripheral (+91 98290 22441)",
      "Cook Medical Interventional (+91 98292 66773)",
      "Meril Life Sciences (+91 98292 11990)"
    ]
  },
  {
    "id": "endoleak-type-ia-cuff-extension",
    "name": "Endoleak Treatment: Proximal Cuff Extension / Giant Palmaz Stent Placement for Type IA Endoleak",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV009A",
    "rghsCode": "693 / 39",
    "icd10": "T82.898A (Endoleak) / I71.4",
    "indications": [
      "Immediate or delayed high-flow Type IA endoleak following EVAR with ongoing systemic pressurization of the aneurysm sac",
      "Caudal migration of the main aortic bifurcated stent-graft resulting in loss of proximal infrarenal seal",
      "Aortic neck dilation post-EVAR leading to gutter leak around the proximal fabric"
    ],
    "preOpCriteria": [
      "High-resolution CT Angiography quantifying distance between lowest renal artery and top of stent-graft, residual non-aneurysmal neck length, and aortic neck diameter",
      "Assessment of iliofemoral access vessels for large-bore sheath re-entry (18F-20F)",
      "Coagulation screen: INR < 1.4, Platelets > 75,000/uL; crossmatched packed red blood cells on standby"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Large-Bore Introducer Sheath",
        "spec": "18F - 20F Gore DrySeal Flex / Cook Check-Flo Sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Aortic Extension Cuff",
        "name": "Aortic Extension Stent-Graft Cuff",
        "spec": "Gore Excluder Aortic Extender / Medtronic Endurant Aortic Cuff sized with 15-20% oversizing relative to native neck",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Large Balloon-Expandable Stent",
        "name": "Uncovered High-Radial-Force Stent",
        "spec": "Cordis Palmaz XL Stent (P3008 / P4014) mounted on large balloon for extreme radial force apposition",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Large-Volume Balloon",
        "name": "Aortic Remodeling & Post-Dilation Balloon",
        "spec": "Medtronic Reliant / Boston Scientific Maxi LD (20-30 mm diameter)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewires",
        "name": "Extra-Stiff Guidewires",
        "spec": "0.035\" 260 cm Cook Lunderquist / Amplatz Extra-Stiff Wire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Retrograde common femoral artery access obtained via pre-close or cutdown; 18F/20F DrySeal sheath positioned in the distal aorta.",
      "Systemic heparinization with 5000 IU unfractionated heparin (target ACT > 250s).",
      "Position 5F pigtail catheter in suprarenal aorta; perform high-pressure DSA in LAO cranial projection to precisely define the relationship of the lowest renal artery to the proximal endograft margin and the Type IA leak jet.",
      "Advance a Lunderquist stiff wire into the ascending aorta.",
      "For Type IA due to migration or gap: deliver an aortic extension cuff over the wire; align the upper margin precisely at the lower border of the lowest renal artery ostium.",
      "Deploy the aortic cuff ensuring significant overlap (>= 15-20 mm) with the existing main body endograft.",
      "In cases of persistent gutter or resistant neck calcium: deliver a balloon-expandable Palmaz XL stent mounted on a 24-28 mm non-compliant Maxi LD balloon across the neck-graft interface to provide rigid radial seal.",
      "Inflate compliant Reliant balloon systematically across the proximal landing zone to ensure circumferential seal.",
      "Perform completion high-pressure aortic arch and suprarenal DSA to confirm complete seal of Type IA endoleak and uninterrupted patency of both renal arteries.",
      "Deploy vascular closure devices at femoral access sites and confirm pedal pulses."
    ],
    "complications": [
      "Inadvertent coverage or occlusion of one or both renal arteries requiring urgent chimney or fenestrated salvage",
      "Rupture or dissection of the calcified infrarenal aortic neck from over-dilation",
      "Persistent refractory Type IA endoleak requiring surgical conversion or FEVAR conversion",
      "Iliac or femoral arterial disruption from re-access"
    ],
    "maayTariffInr": 110000,
    "vendorContacts": [
      "Medtronic India Vascular (+91 98290 22441)",
      "W. L. Gore & Associates India (+91 98291 44552)",
      "Cordis Interventional India (+91 98290 99882)"
    ]
  },
  {
    "id": "cerab-technique",
    "name": "Aortoiliac Occlusive Disease: Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB Technique)",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV010A",
    "rghsCode": "693 / 40",
    "icd10": "I74.0 (Embolism and thrombosis of abdominal aorta / Leriche syndrome)",
    "indications": [
      "Extensive aortoiliac occlusive disease (TASC-II Type C and D lesions) involving the distal aorta and bilateral common iliac origins",
      "Leriche syndrome (severe claudication, erectile dysfunction, absent femoral pulses)",
      "Recurrent aortoiliac in-stent restenosis or severe circumferential kissing stent mismatch",
      "Patients with high surgical risk for open aortobifemoral bypass (hostile abdomen, multiple laparotomies, severe cardiopulmonary disease)"
    ],
    "preOpCriteria": [
      "CT Angiography of Aorta and Bilateral Lower Extremities demonstrating occlusive lesion length, distal aortic caliber (>= 16-18 mm), and iliac bifurcation runoff",
      "Evaluation of common femoral access vessels for dual 7F-10F sheaths",
      "Baseline ankle-brachial index (ABI), creatinine, coagulation parameters"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Bilateral Femoral Introducer Sheaths",
        "spec": "9F - 10F 45 cm sheath (for aortic component) and 7F - 8F 45 cm sheath (for iliac limbs)",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Covered Aortic Stent",
        "name": "Balloon-Expandable Covered Stent (Aortic Body)",
        "spec": "Gore Viabahn VBX (11 mm expandable up to 16 mm, length 29-39 mm) or Atrium Advanta V12 Large Diameter (12-16 mm)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Covered Iliac Stents",
        "name": "Balloon-Expandable Covered Stents (Iliac Limbs)",
        "spec": "Gore Viabahn VBX / Advanta V12 (7-9 mm diameter x 39-59 mm length)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Guidewires",
        "name": "Hydrophilic & Stiff Wires",
        "spec": "0.035\" 260 cm Terumo Radiofocus Glidewire and 0.035\" Amplatz Super Stiff wires",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Angioplasty Balloons",
        "name": "Non-Compliant Angioplasty Balloons",
        "spec": "12-16 mm high-pressure balloon for aortic barrel flaring; dual 7-9 mm balloons for kissing post-dilation",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided retrograde bilateral common femoral artery puncture; place 6F sheaths and administer 5000-7500 IU IV heparin (ACT > 250s).",
      "Cross distal aortic and bilateral common iliac occlusions using 0.035\" angled Glidewires supported by 5F Cobra/Kumpe catheters into the infrarenal aorta.",
      "Exchange wires for 0.035\" Amplatz Super Stiff wires; pre-dilate calcified iliac segments with 5-6 mm angioplasty balloons.",
      "Upsize access to 9F/10F on one side and 7F/8F on the contralateral side.",
      "Deploy the primary balloon-expandable covered stent (aortic body, e.g., 12 mm x 39 mm Advanta V12 or 11 mm VBX) in the distal aorta approximately 15-20 mm above the anatomical carina.",
      "Flare the distal 5-10 mm of the aortic covered stent using a 14 mm or 16 mm non-compliant balloon, creating a conical funnel/barrel geometry.",
      "Simultaneously advance two balloon-expandable covered stents (7-9 mm diameter) from bilateral groins into the flared distal segment of the aortic stent, extending into the common iliac arteries.",
      "Simultaneous inflation: inflate both iliac covered stents together within the distal flared cuff of the aortic stent to achieve anatomical reconstruction without geometric radial mismatch or gutters.",
      "Systematically post-dilate the iliac covered stents throughout their entire length to reference common iliac calibers, preserving the internal iliac artery bifurcations.",
      "Perform completion pelvic DSA and pressure gradient assessment from suprarenal aorta to common femoral arteries (target gradient < 5 mmHg).",
      "Withdraw sheaths and achieve hemostasis using vascular closure devices; verify immediate restoration of palpable bilateral femoral and distal pedal pulses."
    ],
    "complications": [
      "Aortic or iliac rupture secondary to over-dilation of calcified vessels",
      "Distal embolization to femoral, popliteal, or tibial vessels",
      "Accidental occlusion of inferior mesenteric artery or critical lumbar collateral",
      "Groin hematoma / pseudoaneurysm"
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "W. L. Gore & Associates India (+91 98291 44552)",
      "Getinge / Atrium Medical India (+91 98290 88771)",
      "Cook Medical India (+91 98292 66773)"
    ]
  },
  {
    "id": "aortoiliac-kissing-stenting",
    "name": "Aortoiliac Kissing Balloon Angioplasty and Kissing Bare-Metal / Covered Stenting",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV011A",
    "rghsCode": "693 / 41",
    "icd10": "I74.0 (Atherosclerosis of aorta and iliac bifurcation)",
    "indications": [
      "Bilateral or unilateral common iliac artery ostial stenosis extending into the aortic bifurcation (TASC-II Type B and C lesions)",
      "Severe claudication (Rutherford Category 2-3) or critical limb ischemia with rest pain/ulcers",
      "Prevention of contralateral iliac ostial plaque shift during unilateral common iliac stenting"
    ],
    "preOpCriteria": [
      "Pelvic CTA or duplex ultrasound defining calcification extent, luminal diameters of distal aorta (>= 14 mm) and common iliacs (>= 7 mm)",
      "Adequate distal runoff in external and internal iliac arteries",
      "Coagulation profile (INR < 1.5, Platelets > 60,000/uL), baseline ABI"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Bilateral 6F - 7F Introducer Sheaths",
        "spec": "11 cm / 25 cm 6F-7F Terumo Radifocus Sheaths",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Kissing Stents",
        "name": "Balloon-Expandable Bare-Metal or Covered Stents",
        "spec": "Express LD / Omnilink Elite / Dynamic or Advanta V12 covered stents (7-9 mm x 20-30 mm)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Kissing Angioplasty Balloons",
        "name": "Non-Compliant Angioplasty Balloons",
        "spec": "Matched pair of 7-9 mm x 40 mm high-pressure balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewires",
        "name": "Support Guidewires",
        "spec": "Matched pair 0.035\" 260 cm Amplatz Super Stiff or Rosen guidewires",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Access Closure",
        "name": "Vascular Closure Devices",
        "spec": "Angio-Seal VIP 6F/8F or Perclose ProStyle",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Bilateral retrograde common femoral artery ultrasound-guided puncture and 6F/7F sheath placement.",
      "Administer 5000 IU unfractionated heparin IV.",
      "Advance 0.035\" steerable wires across both common iliac lesions into the abdominal aorta under fluoroscopic guidance.",
      "Position dual marker catheters or perform simultaneous bilateral contrast injection to pinpoint the exact aortic carina.",
      "Simultaneous pre-dilation: introduce matched non-compliant angioplasty balloons (e.g., 6 mm x 40 mm) into both common iliac ostia extending 5 mm into the distal aorta and inflate simultaneously.",
      "Deliver two matched balloon-expandable stents simultaneously over the stiff wires into both common iliac ostia, positioning the proximal 3-5 mm of both stents protruding into the distal aorta in a symmetric \"kissing\" configuration.",
      "Simultaneous deployment: inflate both stent balloons synchronously to matching pressure (typically 10-12 atm) to guarantee equal radial expansion and prevent asymmetrical crushing of one stent by the other.",
      "Perform synchronized post-dilation with non-compliant balloons if required to optimize lumen gain.",
      "Perform completion pelvic digital subtraction angiography and measure trans-lesional pull-back pressure gradients (residual systolic gradient < 5 mmHg considered optimal).",
      "Remove sheaths and achieve hemostasis using vascular closure devices (Angio-Seal / ProStyle)."
    ],
    "complications": [
      "Iliac artery rupture from excessive sizing or balloon pressure",
      "Distal embolization of plaque fragments into the popliteal or tibial runoffs",
      "Asymmetric stent protrusion or crushing of contralateral ostium",
      "Groin hematoma or retroperitoneal bleeding"
    ],
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Boston Scientific India (+91 98293 88991)",
      "Abbott Vascular India (+91 98290 33221)",
      "Getinge / Atrium Medical (+91 98290 88771)"
    ]
  },
  {
    "id": "iliac-cto-subintimal-stenting",
    "name": "Common and External Iliac Artery Chronic Total Occlusion (CTO) Crossing with Subintimal Angioplasty and Stenting",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV012A",
    "rghsCode": "693 / 42",
    "icd10": "I74.3 (Embolism and thrombosis of arteries of lower extremities) / I70.21",
    "indications": [
      "Chronic total occlusion of common iliac artery (CIA) or external iliac artery (EIA) (TASC-II Type C and D)",
      "Severe lifestyle-limiting claudication or critical limb-threatening ischemia (Rutherford 3-6) refractory to medical therapy",
      "Failed endoluminal recanalization attempts requiring subintimal dissection and re-entry"
    ],
    "preOpCriteria": [
      "CTA or MRA with multiplanar reconstruction showing CTO length, degree of calcification, and reconstitution of patent femoral runoff",
      "Assessment of contralateral crossover feasibility or ipsilateral retrograde access suitability",
      "Baseline ankle-brachial index (ABI), renal panel, and bleeding parameters"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Long Guiding Sheath",
        "spec": "6F - 7F 45 cm / 55 cm Balkin / Destination crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "CTO Guidewires",
        "name": "Dedicated CTO Hydrophilic & Stiff Wires",
        "spec": "0.035\" 260 cm Stiff Glidewire (angled/straight) and 0.018\" / 0.014\" Command / Astato CTO wires",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Support Catheters",
        "name": "Angled Support Catheters",
        "spec": "5F 90 cm / 100 cm Quick-Cross / CXI / Navicross support catheters",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Re-entry Device",
        "name": "True-Lumen Re-Entry Device (Optional)",
        "spec": "Cordis OUTBACK Elite / Medtronic Pioneer Plus re-entry catheter",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Stents",
        "name": "Self-Expanding Nitinol & Balloon-Expandable Stents",
        "spec": "Smart Control / Epic Nitinol self-expanding stents (8-10 mm for CIA, 7-8 mm for EIA) and balloon-expandable stents for ostial CIA",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Angioplasty Balloons",
        "name": "High-Pressure PTA Balloons",
        "spec": "5 mm - 8 mm non-compliant balloons (40-80 mm length)",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Access contralateral common femoral artery; advance 6F/7F 45 cm Balkin sheath over the aortic bifurcation into the diseased iliac system (or perform direct ipsilateral retrograde puncture under US guidance).",
      "Systemic heparinization with 5000-7000 IU unfractionated heparin (ACT > 250s).",
      "Perform baseline pelvic DSA demonstrating CTO proximal cap and distal reconstitution.",
      "Attack the proximal CTO cap using an angled 0.035\" Stiff Glidewire supported by a CXI / Quick-Cross catheter; deliberately create a subintimal loop (\"knuckle wire\" technique).",
      "Propel the looped wire atraumatically through the subintimal space across the occluded segment under biplane fluoroscopic monitoring.",
      "Re-enter the distal true lumen spontaneously by gently torqueing the wire loop into the patent reconstituted vessel lumen; verify true lumen position by microcatheter contrast injection or use Outback Elite re-entry catheter under fluoroscopic marker alignment.",
      "Exchange for a stiff 0.035\" Amplatz guidewire.",
      "Perform progressive pre-dilation along the entire subintimal track with a 5 mm or 6 mm high-pressure balloon.",
      "Deploy self-expanding nitinol stents (e.g., 8-10 mm in CIA, 7-8 mm in EIA) with 10-15 mm overlap across diseased segments, avoiding stenting across the inguinal ligament / common femoral bifurcation.",
      "Post-dilate the deployed stents with 7-9 mm balloons to achieve full vessel wall apposition.",
      "Perform completion DSA confirming brisk, in-line laminar flow to the common femoral and deep femoral arteries without dissection flaps or distal embolization."
    ],
    "complications": [
      "Iliac artery perforation or transmural rupture during subintimal tracking (requires immediate balloon tamponade and covered stent bailout)",
      "Failure to re-enter true lumen leading to extensive subintimal dissection extension into CFA",
      "Distal embolization into infra-inguinal runoff",
      "Retroperitoneal hemorrhage"
    ],
    "maayTariffInr": 70000,
    "vendorContacts": [
      "Cordis Interventional (+91 98290 99882)",
      "Boston Scientific India (+91 98293 88991)",
      "Terumo India Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "sfa-cto-recanalization-dcb",
    "name": "Superficial Femoral Artery (SFA) Long Segment CTO Recanalization and Drug-Coated Balloon (DCB) Angioplasty",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV013A",
    "rghsCode": "693 / 43",
    "icd10": "I70.211 (Atherosclerosis of native arteries of extremities with intermittent claudication)",
    "indications": [
      "Symptomatic long-segment (> 15 cm) superficial femoral artery chronic total occlusion (TASC-II C and D) with lifestyle-limiting claudication (Rutherford 3) or CLTI (Rutherford 4-6)",
      "Non-healing ischemic foot ulcer or gangrene secondary to femoropopliteal occlusive disease",
      "Failed conservative exercise and cilostazol medical therapy"
    ],
    "preOpCriteria": [
      "Duplex ultrasound and lower extremity CTA/MRA confirming occlusion length, distal reconstitution above the knee, and tibial runoff status (at least one patent tibial artery to the foot)",
      "Pre-procedure ABI (< 0.6) and pulse volume recording (PVR)",
      "Absence of untreated ipsilateral inflow (aortoiliac) stenosis"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Long Hydrophilic Crossover Sheath",
        "spec": "6F 45 cm / 55 cm Terumo Destination or Cook Flexor sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Support Catheter",
        "name": "Low-Profile Support Catheter",
        "spec": "0.018\" / 0.035\" Quick-Cross / CXI catheter (90 cm / 135 cm)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "CTO Guidewires",
        "name": "Front-Line & Crossing Guidewires",
        "spec": "0.035\" angled Glidewire and 0.018\" Terumo Glidewire Advantage / V-18 Control wire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Pre-Dilation Balloon",
        "name": "Standard Semi-Compliant / Non-Compliant Balloons",
        "spec": "4 mm - 5 mm x 100-200 mm peripheral balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drug-Coated Balloon",
        "name": "Paclitaxel-Eluting Peripheral Balloon",
        "spec": "Medtronic IN.PACT Admiral / BD Lutonix / Boston Scientific Ranger DCB (5-6 mm x 150-200 mm)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Bailout Stent",
        "name": "Self-Expanding Nitinol Stents",
        "spec": "Supera / LifeStent / Innova nitinol stent (5-6 mm x 100-150 mm) for flow-limiting dissection",
        "standardStore": "Special Consignment Store"
      }
    ],
    "techniqueSteps": [
      "Contralateral common femoral artery access obtained under US guidance; cross the aortic bifurcation with a 6F 45 cm Destination sheath parked in the ipsilateral common femoral artery.",
      "Systemic heparinization with 5000 IU unfractionated heparin (ACT > 250s).",
      "Perform baseline femoropopliteal DSA to delineate SFA origin, CTO cap, collateral channels, and distal landing zone.",
      "Engage proximal CTO cap with 0.035\" angled Glidewire and support catheter; advance using subintimal knuckle-wire technique or intraluminal micro-dissection.",
      "Re-enter distal true lumen above the popliteal artery; verify intraluminal position via contrast puff through the support catheter.",
      "Exchange for 0.018\" or 0.035\" stiff wire (e.g., Rosen / V-18).",
      "Systematic vessel preparation: perform full-length pre-dilation with an under-sized non-compliant balloon (e.g., 4 mm or 5 mm) inflated for 60-120 seconds to establish uniform channel and assess vessel recoil/dissection.",
      "Delivery and deployment of Drug-Coated Balloon (DCB) sized 1:1 with reference vessel diameter (typically 5 mm or 6 mm x 150-200 mm).",
      "Maintain DCB inflation at nominal pressure for a full 180 seconds (3 minutes) to guarantee adequate paclitaxel drug transfer into the vessel wall.",
      "Perform follow-up angiography: inspect for flow-limiting dissection (Type C-F) or residual stenosis > 30%.",
      "If severe flow-limiting dissection occurs, deploy focal self-expanding nitinol bailout stents, preserving the \"leave nothing behind\" strategy wherever possible.",
      "Completion angiography of distal popliteal and three-vessel tibial runoff to confirm preservation of in-line distal flow without emboli."
    ],
    "complications": [
      "Flow-limiting dissection requiring bailout stenting",
      "Arterial perforation with extravasation into thigh compartments",
      "Distal microembolization to tibial or pedal arteries",
      "Access site hematoma or pseudoaneurysm"
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Medtronic India - Peripheral (+91 98290 22441)",
      "BD / Bard India Interventional (+91 98291 77665)",
      "Boston Scientific India (+91 98293 88991)"
    ]
  },
  {
    "id": "sfa-directional-rotational-atherectomy-dcb",
    "name": "SFA Directional / Rotational Atherectomy Followed by Drug-Coated Balloon (DCB) Angioplasty",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV014A",
    "rghsCode": "693 / 44",
    "icd10": "I70.211 / I70.212 (Atherosclerosis of extremities with severe calcification)",
    "indications": [
      "Moderate-to-severely calcified stenotic or occlusive lesions of the superficial femoral and popliteal arteries",
      "Eccentric fibrocalcific plaques precluding symmetric balloon expansion or resulting in severe dissection with balloon alone",
      "Vessel debulking prior to DCB to maximize antiproliferative drug penetration and avoid permanent metal stent implantation in flexion zones"
    ],
    "preOpCriteria": [
      "CTA or fluoroscopic roadmapping demonstrating eccentric or circumferential \"sheet-like\" calcium (PACSS Grade 3-4 calcification)",
      "Lumbar and femoral inflow verified patent without high-grade stenosis",
      "Renal function within safe range, coagulation profile normal (INR < 1.4, Platelets > 80,000/uL)"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Long Guiding Sheath",
        "spec": "6F - 7F 45 cm / 55 cm Cook Flexor or Destination sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Distal Embolic Protection",
        "name": "Distal Filter Protection System",
        "spec": "Boston Scientific FilterWire EZ / Medtronic SpiderFX (4.0 - 7.0 mm)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Atherectomy Device",
        "name": "Directional / Rotational Atherectomy System",
        "spec": "Medtronic HawkOne / Jetstream / Straub Rotarex S (6F / 7F compatible)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Dedicated Guidewire",
        "name": "Atherectomy Specific Guidewire",
        "spec": "0.014\" SpiderFX wire / ThruWay wire / Jetstream specific wire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drug-Coated Balloon",
        "name": "Paclitaxel-Eluting DCB",
        "spec": "IN.PACT Admiral / Ranger DCB (5-6 mm x 80-150 mm)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Vasodilator Infusion",
        "name": "Intra-Arterial Vasodilator Cocktails",
        "spec": "Inj Nitroglycerin 200 ug and Inj Verapamil 2.5 mg to prevent distal spasm",
        "standardStore": "Cath Lab Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Contralateral crossover or antegrade ipsilateral common femoral artery access placed with a 6F/7F sheath under ultrasound guidance.",
      "Full systemic heparinization achieved (target ACT > 250-300 seconds).",
      "Cross the calcified SFA lesion with a dedicated 0.014\" guidewire; advance wire into distal popliteal artery.",
      "MANDATORY STEP: Deploy a distal embolic protection filter (e.g., SpiderFX or FilterWire EZ) in the distal popliteal artery below the lesion and above the tibial trifurcation to capture macro/micro-debris.",
      "Deliver the directional atherectomy catheter (HawkOne) or rotational aspiration device (Jetstream / Rotarex) over the dedicated wire.",
      "Execute systematic atherectomy passes: for directional atherectomy, perform continuous cutting and plaque packing in 4 quadrants (12, 3, 6, 9 o'clock) under live fluoroscopic monitoring, cleaning the nosecone collection chamber as required.",
      "For rotational aspiration (Jetstream), activate cutter blades with continuous infusion-aspiration to pulverize and vacuum thrombus/plaque simultaneously.",
      "Perform intermediate angiography showing plaque debulking, lumen gain >= 50%, and absence of perforation.",
      "Follow debulking with low-pressure pre-dilation (4-5 mm non-compliant balloon) if needed, followed by DCB (e.g., 5.5-6.0 mm) inflated for 180 seconds for complete antiproliferative drug transfer.",
      "Retrieve the distal protection filter and inspect for debris; perform completion runoffs to verify patent anterior tibial, posterior tibial, and peroneal arteries.",
      "Withdraw sheath and achieve hemostasis with vascular closure device."
    ],
    "complications": [
      "Distal embolization clogging distal filter or escaping into tibial runoff",
      "Arterial perforation / pseudoaneurysm from aggressive directional cutting passes",
      "Severe vasospasm of popliteal / tibial vessels requiring intra-arterial vasodilators",
      "Device entrapment or mechanical cutter failure"
    ],
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic India Interventional (+91 98290 22441)",
      "Boston Scientific India (+91 98293 88991)",
      "BD / Bard Vascular India (+91 98291 77665)"
    ]
  },
  {
    "id": "sfa-popliteal-viabahn-covered-stenting",
    "name": "SFA and Popliteal Artery Covered Stenting with Self-Expanding Viabahn Stent-Graft for Complex TASC D Lesions",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV015A",
    "rghsCode": "693 / 45",
    "icd10": "I70.213 (Atherosclerosis of native arteries with ulceration) / I70.218",
    "indications": [
      "Extensive, diffuse TASC-II Type D femoropopliteal occlusive disease (> 20 cm) with heavy calcification or chronic total occlusion",
      "Severe recurrent in-stent restenosis (ISR) of SFA bare-metal stents refractory to repeat balloon angioplasty or DCB",
      "Femoropopliteal arterial rupture or acute perforation complicating aggressive atherectomy/angioplasty",
      "Arteriovenous fistula or traumatic pseudoaneurysm of the SFA/popliteal artery"
    ],
    "preOpCriteria": [
      "CT Angiography confirming distal landing zone in patent P1/P2 popliteal segment with adequate lumen (>= 4.5 mm) above the knee joint flexion crease",
      "Adequate distal runoff: at least one continuous, robust tibial vessel to the ankle/foot to maintain runoff velocity and prevent graft thrombosis",
      "Platelets > 80,000/uL, INR < 1.4; commitment to long-term dual antiplatelet therapy (DAPT: Aspirin + Clopidogrel) post-procedure"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Long Hydrophilic Introducer Sheath",
        "spec": "6F - 7F 45 cm / 55 cm Gore DrySeal Flex or Terumo Destination sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Endoprosthesis",
        "name": "Heparin-Bonded Self-Expanding Covered Stent",
        "spec": "Gore Viabahn Endoprosthesis with Propaten bioactive heparin surface (5-7 mm diameter x 100-250 mm length)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Pre- & Post-Dilation Balloons",
        "name": "Non-Compliant Angioplasty Balloons",
        "spec": "5.0 mm - 6.0 mm x 40-100 mm high-pressure balloons (e.g., Boston Scientific Mustang)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewires",
        "name": "Heavy-Duty Support Guidewires",
        "spec": "0.018\" / 0.035\" 260 cm Rosen / Amplatz Stiff or Glidewire Advantage",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Establish contralateral retrograde or ipsilateral antegrade CFA access; position 6F/7F guiding sheath in the proximal SFA.",
      "Administer intravenous heparin targeting ACT > 250s.",
      "Recanalize SFA/popliteal occlusion intraluminally or subintimally using 0.035\" Glidewire and support catheter; re-enter the true lumen in the P1 popliteal segment.",
      "Exchange for a 0.018\" or 0.035\" heavy-duty support guidewire (e.g., Rosen wire).",
      "Perform thorough pre-dilation along the entire target length with a 5 mm non-compliant balloon at 10-12 atm.",
      "Select Viabahn stent-graft with 5-10% diameter oversizing relative to the reference distal popliteal caliber (avoid aggressive oversizing to prevent edge stenosis).",
      "Deploy the Viabahn endoprosthesis from distal to proximal; if multiple grafts are required, overlap consecutive devices by at least 15-20 mm with the smaller or distal graft deployed first.",
      "Post-dilate the entire length of the covered stent-graft, paying meticulous attention to proximal and distal landing zone transitions using a 5-6 mm non-compliant balloon.",
      "Perform completion high-resolution DSA to confirm wall apposition, absence of endoleaks, unobstructed popliteal runoff, and brisk three-vessel tibial runoffs.",
      "Secure access site hemostasis; initiate loading doses of Clopidogrel (300-600 mg) and Aspirin (150-325 mg)."
    ],
    "complications": [
      "Early or late covered stent thrombosis (highest risk if poor distal tibial runoff < 1 vessel)",
      "Edge stenosis at proximal or distal landing zone due to intimal hyperplasia",
      "Distal embolization during crossing or deployment",
      "Stent-graft fracture or compression in the P3 flexion zone across the knee joint"
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "W. L. Gore & Associates India (+91 98291 44552)",
      "Boston Scientific India Interventional (+91 98293 88991)",
      "Terumo India Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "sfa-popliteal-supera-interwoven-stenting",
    "name": "SFA Dedicated Interwoven Nitinol Stenting (Supera) for Popliteal / Distal SFA with High Torsional Stress",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV016A",
    "rghsCode": "693 / 46",
    "icd10": "I70.211 / I70.212 (Atherosclerosis of femoropopliteal arteries)",
    "indications": [
      "Severe stenotic or occlusive disease of distal SFA (Hunter's canal) and P1, P2, and P3 popliteal segments subjected to extreme mechanical stresses (torsion, compression, elongation, and flexion)",
      "Heavy calcification in the popliteal artery where balloon angioplasty demonstrates severe elastic recoil or flow-limiting dissection",
      "Popliteal lesions where standard laser-cut nitinol stents carry high fracture rates (> 20-30%)"
    ],
    "preOpCriteria": [
      "Pre-procedure CTA or DSA showing lesion anatomy extending into or across the knee joint",
      "Exact measurement of reference vessel diameter under non-magnified calibrated conditions (Supera requires strict 1:1 matching without oversizing to prevent elongation)",
      "Patent distal tibial runoff vessels; baseline ABI and coagulation profile"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Long Introducer Sheath",
        "spec": "6F 45 cm / 55 cm Cook Flexor or Terumo Destination sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Interwoven Nitinol Stent",
        "name": "Supera Interwoven High-Radial-Force Nitinol Stent",
        "spec": "Abbott Supera Stent (5.0 - 6.5 mm diameter x 40-150 mm length)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Pre-Dilation Balloon",
        "name": "1:1 Non-Compliant Angioplasty Balloon",
        "spec": "High-pressure balloon matched 1:1 to nominal vessel diameter (e.g., 5.0 mm x 40-100 mm)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewires",
        "name": "Stiff 0.014\" Guidewires",
        "spec": "0.014\" 300 cm Abbott Spartacore / Boston Scientific Grand Slam wire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Obtain antegrade ipsilateral common femoral or contralateral retrograde crossover access using a 6F sheath.",
      "Administer 5000 IU IV heparin to achieve therapeutic ACT (> 250s).",
      "Cross the distal SFA / popliteal lesion intraluminally with a 0.014\" or 0.018\" wire and support catheter; confirm true lumen entry.",
      "CRITICAL PREPARATION: Perform aggressive 1:1 non-compliant balloon pre-dilation along the entire lesion length. Supera is not self-expanding in the traditional sense and cannot open heavy calcium by itself; full pre-dilation channel is mandatory.",
      "Exact sizing: Select Supera stent diameter matching the nominal vessel diameter (1:1 ratio) - NEVER oversize, as oversizing causes elongation, cell collapse, and drastically reduces radial strength.",
      "Controlled deployment: advance Supera delivery system; utilize steady two-handed deployment technique without pushing or pulling the catheter, keeping the delivery tip steady and allowing the interwoven braid to deploy at its nominal pitch.",
      "Fluoroscopic verification of nominal deployment pitch (ensure no elongation > 10% or over-compression).",
      "Perform post-dilation with non-compliant balloon matching stent diameter at nominal pressures (6-8 atm) to smooth cell braid apposition.",
      "Perform dynamic flexion views (bent knee fluoroscopy) to confirm stent structural integrity without kinking, pinching, or luminal reduction.",
      "Completion angiography confirming in-line runoff and absence of distal emboli; closure of femoral access."
    ],
    "complications": [
      "Stent elongation (deployment error leading to decreased radial force and early restenosis)",
      "Stent compression / accordioning from excessive forward force during deployment",
      "Distal embolization into tibial vessels",
      "Access site hematoma or pseudoaneurysm"
    ],
    "maayTariffInr": 90000,
    "vendorContacts": [
      "Abbott Vascular India (+91 98290 33221)",
      "Terumo India Medical (+91 98291 55678)",
      "Cook Medical India (+91 98292 66773)"
    ]
  },
  {
    "id": "popliteal-aneurysm-viabahn-exclusion",
    "name": "Popliteal Artery Aneurysm Exclusion with Percutaneous Viabahn Covered Stent-Graft",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV017A",
    "rghsCode": "693 / 47",
    "icd10": "I72.4 (Aneurysm of artery of lower extremity, popliteal)",
    "indications": [
      "Asymptomatic popliteal artery aneurysm with maximum transverse diameter >= 2.0 cm or containing eccentric mural thrombus (high risk of acute thromboembolism)",
      "Symptomatic popliteal aneurysm (local compression of tibial nerve or popliteal vein, chronic microembolization / blue toe syndrome)",
      "High surgical risk or hostile groin/popliteal space precluding open surgical medial/posterior bypass with saphenous vein"
    ],
    "preOpCriteria": [
      "High-resolution CT Angiography or duplex ultrasound confirming adequate proximal (P1) and distal (P3) landing zones with length >= 15-20 mm and non-aneurysmal caliber (diameter <= 8-9 mm)",
      "Patency of at least 1-2 distal tibial runoff vessels to the foot (runoff patency is the primary predictor of long-term covered stent patency)",
      "Ruling out concomitant abdominal aortic aneurysm (coexists in 40-50% of popliteal aneurysm cases)",
      "Full blood counts, baseline ABI, and coagulation profile"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Antegrade / Crossover Introducer Sheath",
        "spec": "6F - 7F 45 cm / 55 cm Terumo Destination or Cook Flexor sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Stent-Graft System",
        "name": "Flexible Heparin-Bonded Covered Stent-Graft",
        "spec": "Gore Viabahn Endoprosthesis with Propaten bioactive surface (6-8 mm diameter x 100-250 mm length)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Guidewires",
        "name": "Support Guidewires",
        "spec": "0.018\" 260 cm V-18 Control wire or 0.035\" 260 cm Rosen stiff wire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Angioplasty Balloons",
        "name": "Non-Compliant Post-Dilation Balloons",
        "spec": "6.0 mm - 8.0 mm x 40 mm high-pressure balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Vascular Closure",
        "name": "Vascular Closure Device",
        "spec": "Perclose ProStyle or Angio-Seal VIP 6F/8F",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided antegrade ipsilateral CFA puncture (or contralateral crossover if proximal thigh habitus prevents antegrade trajectory); position 6F/7F sheath.",
      "Administer 5000 IU unfractionated heparin IV (ACT > 250s).",
      "Perform popliteal angiography in AP, oblique, and lateral projections to define the proximal neck, aneurysm sac dimensions, genicular collateral origins, and distal landing zone.",
      "Carefully advance a 0.035\" Glidewire across the aneurysmal sac into the patent distal popliteal artery and anterior/posterior tibial artery; exchange for a 0.035\" Rosen wire.",
      "Select Viabahn stent-graft sized to 5-10% oversizing relative to the proximal and distal landing zones (avoid aggressive oversizing).",
      "Deploy the Viabahn covered stent-graft starting from the healthy distal P3 zone and extending across the aneurysm sac into the healthy P1 proximal zone (maintaining >= 2 cm seal at each end).",
      "If multiple overlapping grafts are needed, overlap by at least 20-30 mm.",
      "Gently post-dilate the proximal and distal landing zones using a non-compliant balloon matching reference vessel diameter; avoid ballooning the unsupported segment within the free aneurysm sac.",
      "Perform completion multi-projection angiograms (in neutral and 90-degree flexed knee positions) to confirm total aneurysm exclusion, absence of endoleaks, patency of stent lumen, and brisk tibial runoff.",
      "Close femoral access site; initiate long-term dual antiplatelet therapy (Aspirin + Clopidogrel)."
    ],
    "complications": [
      "Endoleak (Type IA or IB seal failure; Type II endoleak via retrograde genicular branch flow)",
      "Acute or subacute stent-graft thrombosis (especially with poor tibial runoff)",
      "Kinking or structural deformation upon extreme knee flexion",
      "Distal microembolization during wire/catheter manipulation across mural thrombus"
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "W. L. Gore & Associates India (+91 98291 44552)",
      "Boston Scientific India (+91 98293 88991)",
      "Terumo India Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "btk-tibial-balloon-angioplasty",
    "name": "Below-the-Knee (BTK) Tibial Artery Balloon Angioplasty with Dedicated Long Tapered Balloons for CLTI",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV018A",
    "rghsCode": "693 / 48",
    "icd10": "I70.221 / I70.222 / I70.223 (Atherosclerosis of native arteries with rest pain / ulceration)",
    "indications": [
      "Critical Limb-Threatening Ischemia (CLTI / Rutherford Category 4, 5, and 6) with ischemic rest pain, non-healing neuroischemic ulcers, or gangrene",
      "Severe multi-level infrapopliteal / tibial arterial occlusive disease (anterior tibial, posterior tibial, or peroneal artery occlusions)",
      "In-line angiosome-directed arterial revascularization to facilitate foot wound healing and limb salvage"
    ],
    "preOpCriteria": [
      "Pre-procedure diagnostic duplex or CTA showing infrapopliteal occlusions and identifying the primary target angiosome artery corresponding to the ulcer bed",
      "Toe pressure < 30 mmHg or transcutaneous oxygen pressure (TcPO2) < 30 mmHg",
      "Coagulation status: INR < 1.5, Platelets > 60,000/uL; baseline renal panel"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Long Antegrade Introducer Sheath",
        "spec": "4F - 5F 45 cm / 55 cm Terumo Destination or Cook Flexor sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Support Microcatheters",
        "name": "Low-Profile Tibial Support Catheter",
        "spec": "1.9F - 2.1F 135 cm / 150 cm Terumo Finecross / Boston Scientific Corsair / Quick-Cross",
        "standardStore": "Central IR Store"
      },
      {
        "category": "0.014\" Guidewires",
        "name": "Steerable Hydrophilic & CTO Guidewires",
        "spec": "0.014\" 300 cm Asahi Sion Blue / Command 14 / Astato XS 20 / Fielder FC",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Dedicated Long Balloons",
        "name": "Ultra-Long 0.014\" BTK Angioplasty Balloons",
        "spec": "Medtronic Amphirion Deep / Cook Advance Micro 14 / Boston Scientific Coyote (1.5 - 3.5 mm diameter x 120-220 mm length, straight and tapered)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Antispasmodic Cocktail",
        "name": "Intra-Arterial Vasodilator Infusion",
        "spec": "Nitroglycerin (100-200 ug) + Papaverine or Verapamil (1-2.5 mg) diluted in heparinized saline",
        "standardStore": "Cath Lab Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Establish ultrasound-guided antegrade common femoral artery access (preferred) using a 4F or 5F sheath to maximize torque transmission and tactile feedback.",
      "Administer weight-based unfractionated heparin (50-70 IU/kg) targeting ACT 200-250 seconds; administer intra-arterial nitroglycerin (100 ug) to suppress vasospasm.",
      "Perform high-resolution magnified digital subtraction angiography of the popliteal trifurcation, calf runoff, ankle, and pedal arch.",
      "Select the target angiosome-feeding tibial artery (e.g., anterior tibial for dorsal foot ulcer; posterior tibial for heel/plantar ulcer).",
      "Engage the target tibial vessel ostium using a 1.9F-2.1F microcatheter and steerable 0.014\" guidewire.",
      "Delicately navigate the 0.014\" wire across the long tibial occlusion utilizing gentle rotatory motion under roadmapping, staying strictly intraluminal.",
      "Confirm intraluminal position at the ankle level by injecting micro-puffs of contrast via the microcatheter; advance wire into the dorsalis pedis or plantar artery.",
      "Deliver a dedicated long 0.014\" balloon (e.g., 2.0-2.5 mm x 220 mm) across the full length of the diseased tibial segment.",
      "Prolonged balloon inflation: inflate balloon slowly to nominal pressure (6-8 atm) and maintain inflation for a minimum of 180-240 seconds (3-4 minutes) to minimize elastic recoil and dissection.",
      "Stepwise overlapping balloon angioplasty: if vessel tapers, use a tapered balloon or smaller balloon distally (1.5-2.0 mm) and larger balloon proximally (2.5-3.0 mm).",
      "Perform completion high-detail angiography from knee to toes, evaluating in-line uninterrupted pulsatile blood flow to the target angiosome ulcer bed without flow-limiting dissection or distal emboli.",
      "Remove sheath with manual compression or 4F closure device; apply light dressing."
    ],
    "complications": [
      "Tibial vessel perforation or rupture (requires prolonged low-pressure balloon tamponade or microcoil embolization of muscular branch)",
      "Severe tibial arterial spasm refractory to vasodilators",
      "Flow-limiting dissection causing acute vessel closure",
      "Distal microembolization to the pedal arch / digital arteries",
      "Groin hematoma"
    ],
    "maayTariffInr": 60000,
    "vendorContacts": [
      "Medtronic India Peripheral (+91 98290 22441)",
      "Boston Scientific India (+91 98293 88991)",
      "Cook Medical Interventional (+91 98292 66773)"
    ]
  },
  {
    "id": "btk-retrograde-pedal-rendezvous",
    "name": "BTK Retrograde Pedal / Transpedal / Transmetatarsal Arterial Access and Rendezvous Recanalization",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV019A",
    "rghsCode": "693 / 49",
    "icd10": "I70.228 (Atherosclerosis of extremities with other complications / non-healing ulcer)",
    "indications": [
      "Critical Limb-Threatening Ischemia (CLTI) with flush chronic total occlusion of tibial vessels where antegrade recanalization has failed",
      "Antegrade subintimal dissection failure (inability to re-enter distal true lumen at the ankle level)",
      "Solitary patent distal pedal or plantar target vessel requiring urgent revascularization to prevent major limb amputation"
    ],
    "preOpCriteria": [
      "High-resolution vascular ultrasound mapping of the distal anterior tibial / dorsalis pedis, posterior tibial / retromalleolar, or lateral plantar artery at the foot level, assessing luminal diameter (>= 1.2 mm) and calcification",
      "Failed or impossible antegrade wire crossing attempt during current or prior session",
      "Acceptable coagulation parameters (INR < 1.4, Platelets > 60,000/uL)"
    ],
    "hardware": [
      {
        "category": "Pedal Access Kit",
        "name": "Pedal Access Micropuncture Set",
        "spec": "21G echogenic micropuncture needle (4 cm / 7 cm) with 0.018\" nitinol wire and 2.9F - 4F pedal sheath",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheters",
        "name": "Dedicated Low-Profile Microcatheters",
        "spec": "1.7F - 2.1F 135 cm / 150 cm Asahi Corsair / Finecross / Terumo Progreat",
        "standardStore": "Central IR Store"
      },
      {
        "category": "0.014\" Guidewires",
        "name": "Specialized Retrograde CTO Guidewires",
        "spec": "0.014\" 300 cm Asahi Regalia / Gaia Third / Fielder XT / Command 14",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Snare System",
        "name": "Microsnare Retrieval System",
        "spec": "2 mm - 4 mm Amplatz GooseNeck or EN Snare for antegrade-retrograde rendezvous capture",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Angioplasty Balloons",
        "name": "Ultra-Low Profile 0.014\" Balloons",
        "spec": "1.5 - 2.5 mm x 40-150 mm semi-compliant/non-compliant balloons",
        "standardStore": "Special Consignment Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with foot rotated and stabilized; prepare both the groin (antegrade sheath already placed) and the distal foot in sterile field.",
      "Under direct high-frequency ultrasound guidance (15-18 MHz probe) and fluoroscopic roadmapping, perform micropuncture of the patent distal dorsalis pedis or posterior tibial artery using a 21G echogenic needle.",
      "Upon pulsatile arterial blood return, advance a 0.018\" nitinol wire or 0.014\" Command wire into the pedal artery; insert a 2.9F or 4F low-profile pedal sheath or use \"sheathless\" technique with a 1.9F microcatheter.",
      "Administer 2000-3000 IU IV heparin and intra-arterial cocktail (100 ug Nitroglycerin) to prevent vasospasm.",
      "Advance the 0.014\" retrograde wire supported by the microcatheter retrogradely across the distal cap of the tibial CTO (retrograde cap is typically softer and less calcified than antegrade cap).",
      "Traverse the tibial occlusion retrogradely into the popliteal artery or antegrade guide sheath.",
      "Rendezvous technique: either exteriorize the retrograde wire through the antegrade sheath (flossing the entire limb with a 300 cm wire) or advance an antegrade snare to capture the retrograde wire in the popliteal artery/sheath.",
      "Once through-and-through \"floss\" wire access is secured, perform all subsequent balloon angioplasty antegradely over the stable rail using dedicated long 0.014\" balloons (2.0-3.0 mm).",
      "Perform completion angiography confirming patent, non-dissected tibial artery and restored distal pedal pulse.",
      "Remove pedal access hardware; achieve hemostasis at the pedal puncture site using prolonged manual compression (10-15 minutes) or low-pressure internal balloon tamponade (inflating an antegrade balloon across the pedal puncture site for 3-5 minutes)."
    ],
    "complications": [
      "Pedal artery thrombosis or dissection (loss of the only remaining runoff target)",
      "Compartment syndrome of the foot or deep plantar space hematoma",
      "Arterial spasm refractory to vasodilators",
      "Pseudoaneurysm of dorsalis pedis or posterior tibial artery"
    ],
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Asahi Intecc India (+91 98290 66554)",
      "Medtronic India Peripheral (+91 98290 22441)",
      "Boston Scientific India (+91 98293 88991)"
    ]
  },
  {
    "id": "pedal-arch-loop-angioplasty",
    "name": "Pedal Arch Reconstruction and Plantar Artery Loop Angioplasty for Neuroischemic Diabetic Foot Ulcer",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV020A",
    "rghsCode": "693 / 50",
    "icd10": "E11.51 / E11.621 (Type 2 diabetes mellitus with diabetic foot ulcer and peripheral angiopathy)",
    "indications": [
      "Non-healing diabetic neuroischemic ulcer (Wagner Grade 2-4) or forefoot gangrene with interrupted pedal arch anatomy",
      "Critical limb-threatening ischemia where revascularization of a single tibial artery fails to achieve wound healing due to pedal arch discontinuity",
      "Complete restoration of the \"pedal loop\" (connection between dorsalis pedis/deep plantar artery and lateral plantar artery) to optimize forefoot tissue perfusion"
    ],
    "preOpCriteria": [
      "High-magnification selective digital subtraction angiography of the foot in AP, lateral, and oblique projections delineating pedal arch integrity (Categories: Complete, Incomplete, Absent)",
      "Identification of target communicating vessels (dorsalis pedis, lateral plantar, deep plantar branch, medial plantar artery)",
      "Serum creatinine and baseline renal parameters"
    ],
    "hardware": [
      {
        "category": "Antegrade Guiding Sheath",
        "name": "Low-Profile Antegrade Sheath",
        "spec": "4F - 5F 45 cm / 55 cm Terumo Destination or Cook Flexor sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Support Microcatheter",
        "name": "Ultra-Flexible Steerable Microcatheter",
        "spec": "1.7F - 1.9F 150 cm Asahi Corsair / Terumo Finecross / Boston Scientific Corsair Pro",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Micro-Guidewires",
        "name": "Hydrophilic Polymer-Jacketed 0.014\" Wires",
        "spec": "0.014\" 300 cm Asahi Sion Blue / Fielder XT / Regalia / Terumo Runthrough Extra Floppy",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Micro-Balloons",
        "name": "Ultra-Low-Profile 0.014\" Angioplasty Balloons",
        "spec": "1.25 mm - 2.0 mm diameter x 20-80 mm length (e.g., Medtronic Euphora / Boston Scientific Emerge / Abbott Trek)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Intra-Arterial Vasodilators",
        "name": "Microvascular Antispasmodic Cocktail",
        "spec": "Nitroglycerin (50-100 ug) and Iloprost / Papaverine diluted in saline",
        "standardStore": "Cath Lab Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Obtain antegrade CFA access with 4F/5F sheath; administer systemic heparin (50-70 IU/kg) and intra-arterial nitroglycerin (100 ug) directly into the popliteal artery.",
      "Perform detailed magnification pedal angiography in lateral and AP/oblique projections to visualize the deep plantar branch, lateral plantar artery, and digital branches.",
      "Recanalize the straight tibial inflow vessel (either anterior or posterior tibial artery) down to the ankle.",
      "Navigate a 1.7F microcatheter and 0.014\" floppy polymer wire (Asahi Sion Blue) through the dorsalis pedis into the deep plantar artery, looping into the lateral plantar artery (or reverse: from posterior tibial around the lateral plantar artery through the deep plantar branch into the dorsalis pedis).",
      "Confirm continuous intraluminal wire tracking around the complete pedal loop without exit into foot soft tissues.",
      "Advance an ultra-low-profile 1.5 mm or 2.0 mm micro-balloon (e.g., 1.5 mm x 40 mm) over the wire across the pedal loop.",
      "Perform meticulous low-pressure balloon dilation (4-6 atm for 120-180 seconds) around the plantar curve and communicating branches, taking extreme care not to overstretch small digital origins.",
      "Perform completion high-magnification pedal DSA: verify complete restoration of continuous pulsatile flow through the deep plantar arch, brisk capillary blush in the ulcer bed, and absence of microvascular spasm or perforation.",
      "Remove sheath and achieve hemostasis."
    ],
    "complications": [
      "Pedal arch rupture or deep plantar branch perforation (requires immediate prolonged low-pressure balloon tamponade or micro-sponge/thrombin injection)",
      "Severe pedal microvascular spasm resulting in paradoxical distal hypoperfusion",
      "Distal embolization to digital terminal vessels (blue toe / digital necrosis)",
      "Pedal hematoma causing compartment compression"
    ],
    "maayTariffInr": 70000,
    "vendorContacts": [
      "Asahi Intecc India (+91 98290 66554)",
      "Medtronic India Peripheral (+91 98290 22441)",
      "Boston Scientific India (+91 98293 88991)"
    ]
  },
  {
    "id": "ali-catheter-directed-thrombolysis-aspiration",
    "name": "Acute Lower Extremity Limb Ischemia (ALI): Catheter-Directed Thrombolysis (CDT) with tPA and Aspiration Embolectomy",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV021A",
    "rghsCode": "693 / 51",
    "icd10": "I74.3 (Embolism and thrombosis of arteries of the lower extremities) / I74.5",
    "indications": [
      "Acute lower extremity limb ischemia of duration < 14 days, Rutherford Class I (viable) or Class IIa (marginally threatened limb with sensory loss limited to toes)",
      "Acute native arterial thrombosis or bypass graft occlusion (prosthetic or autologous vein graft) with persistent runoff bed",
      "Acute embolic occlusion of popliteal or tibial vessels unsuitable for surgical balloon catheter embolectomy"
    ],
    "preOpCriteria": [
      "Clinical staging confirming Rutherford Category I or IIa (Class IIb immediately threatened limbs require emergent surgical revascularization or hybrid intervention; Class III irreversible dead limbs are contraindicated)",
      "Absolute contraindications ruled out: active internal bleeding, recent hemorrhagic stroke (< 3 months), recent major surgery/trauma (< 10 days), intracranial neoplasm",
      "Baseline coagulation status: Fibrinogen level (> 150 mg/dL), INR, aPTT, Platelet count (> 100,000/uL)"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Long Introducer Sheath",
        "spec": "5F - 6F 45 cm Destination or Balkin crossover sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Infusion Catheter",
        "name": "Dedicated Multi-Sidehole Thrombolysis Catheter",
        "spec": "4F - 5F 90-135 cm Cook Fountain / Boston Scientific Uni-Fuse / Cragg-McNamara catheter (infusion length 10-50 cm)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Thrombolytic Agent",
        "name": "Recombinant Tissue Plasminogen Activator (r-tPA)",
        "spec": "Inj Alteplase / Tenecteplase (50 mg vial)",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Aspiration Catheter",
        "name": "Large-Lumen Manual / Mechanical Aspiration Catheter",
        "spec": "6F - 8F Cook Pronto / Penumbra Indigo CAT 6/CAT 8 mechanical aspiration system",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Guidewires",
        "name": "Hydrophilic Guidewires",
        "spec": "0.035\" 260 cm Terumo Radiofocus Glidewire (angled/straight)",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Contralateral crossover or ipsilateral antegrade CFA access obtained under ultrasound guidance; 5F/6F sheath placed.",
      "Baseline DSA defining thrombosed arterial segment, distal clot burden, and collateral outflow.",
      "Cross the thrombus with 0.035\" Glidewire and 5F catheter; verify intraluminal position distal to the occlusion.",
      "Perform initial rapid pulse-spray or mechanical aspiration: advance aspiration catheter (Penumbra Indigo or large-bore 6F/7F catheter) to debulk fresh embolic clot under continuous vacuum aspiration.",
      "Embed a multi-sidehole infusion catheter (e.g., Uni-Fuse / Fountain with 10-20 cm infusion zone) directly across the residual thrombus burden.",
      "Administer initial intrathrombus bolus of Alteplase (5 mg over 10-15 minutes), followed by continuous low-dose infusion (0.5 - 1.0 mg/hour) along with sub-therapeutic systemic heparin (300-500 IU/hour) via sheath to prevent pericatheter thrombosis.",
      "Transfer patient to ICU/HDU with continuous limb neurovascular observations and 4-6 hourly monitoring of serum Fibrinogen and aPTT (pause tPA if Fibrinogen drops < 100-150 mg/dL).",
      "Return patient to angio suite at 12-24 hours for repeat angiography; advance catheter or discontinue infusion once thrombolysis is complete.",
      "Treat underlying causative anatomical lesion (e.g., underlying SFA stenosis or popliteal plaque) with angioplasty, DCB, or stenting.",
      "Completion angiography confirming brisk distal runoff and restoration of palpable pedal pulses."
    ],
    "complications": [
      "Major intracranial or retroperitoneal hemorrhage (incidence 1-3%)",
      "Distal thromboembolism into tibial or digital runoff during clot disruption",
      "Access site hematoma or pseudoaneurysm",
      "Compartment syndrome of calf upon reperfusion (requires immediate fasciotomy monitoring)",
      "Systemic hypofibrinogenemia"
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Boehringer Ingelheim India (Alteplase) (+91 98290 55443)",
      "Penumbra India Interventional (+91 98291 88772)",
      "Cook Medical India (+91 98292 66773)"
    ]
  },
  {
    "id": "ali-rotational-mechanical-thrombectomy-rotarex",
    "name": "Acute Limb Ischemia: Percutaneous Rotational Mechanical Thrombectomy (Rotarex / Straub Medical)",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV022A",
    "rghsCode": "693 / 52",
    "icd10": "I74.3 / I74.5 (Acute arterial embolism and thrombosis)",
    "indications": [
      "Acute or subacute lower limb ischemia (symptom duration < 4-6 weeks) with extensive thrombus burden in native arteries or bypass grafts",
      "High-risk surgical patients or patients with absolute contraindications to systemic/catheter thrombolysis (recent stroke, recent major surgery, active peptic ulcer)",
      "Rapid restoration of in-line arterial flow required to prevent imminent tissue necrosis"
    ],
    "preOpCriteria": [
      "CTA or bedside duplex demonstrating occlusion length and absence of heavy circumferential calcification that could jam the rotational head",
      "Vessel caliber >= 3.0 mm (Rotarex 6F requires vessel diameter >= 3.0 mm; 8F requires >= 5.0 mm)",
      "Platelet count > 60,000/uL, INR < 1.5"
    ],
    "hardware": [
      {
        "category": "Mechanical Thrombectomy System",
        "name": "Rotarex S Rotational Excisional Thrombectomy System",
        "spec": "Straub Medical / BD Rotarex S catheter (6F x 135 cm or 8F x 110 cm) with dedicated drive console",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Dedicated Guidewire",
        "name": "Rotarex Dedicated Guidewire",
        "spec": "0.018\" 300 cm steel core specialized guidewire",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Vascular Access",
        "name": "Long Hydrophilic Introducer Sheath",
        "spec": "6F - 8F 45 cm / 55 cm Terumo Destination or Cook Flexor sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Adjunctive Balloons",
        "name": "Non-Compliant Angioplasty Balloons",
        "spec": "5.0 mm - 7.0 mm x 40-100 mm peripheral balloons for underlying stenosis",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Vasodilator Infusion",
        "name": "Intra-Arterial Vasodilator Solution",
        "spec": "Nitroglycerin 200 ug + Verapamil 2.5 mg",
        "standardStore": "Cath Lab Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Obtain contralateral crossover or antegrade ipsilateral CFA access; place 6F or 8F sheath under ultrasound guidance.",
      "Administer 5000-7500 IU IV heparin to maintain ACT > 250 seconds.",
      "Perform baseline angiogram profiling the occluded arterial segment and distal reconstitution.",
      "Cross the occlusion intraluminally with a 0.035\" Glidewire; exchange for the dedicated 0.018\" Rotarex guidewire through a support catheter.",
      "Verify that the radiopaque tip of the 0.018\" wire is positioned well distal to the target segment in a large patent vessel.",
      "Introduce the Rotarex S catheter over the dedicated wire to a point 1-2 cm proximal to the occlusion.",
      "Activate the Rotarex drive unit (rotational speed ~40,000 - 60,000 RPM creates vortex vacuum that detaches, fragments, and continuously aspirates thrombus into the collection bag).",
      "Slowly advance the rotating catheter through the thrombosed segment at a steady rate of 5-10 mm per second under intermittent fluoroscopy (never advance forcefully without wire rotation).",
      "Perform 1-3 slow passes until clear lumen is restored; inspect the effluent collection bag for evacuated organized thrombus.",
      "Perform intermediate angiogram to assess debulking and detect any underlying atherosclerotic stenosis or residual thrombus.",
      "Treat the underlying culprit stenosis with balloon angioplasty, DCB, or stenting as indicated.",
      "Completion angiography from popliteal down to pedal arch to verify excellent runoffs without distal emboli."
    ],
    "complications": [
      "Distal embolization of thrombus fragments into tibial vessels",
      "Vessel wall dissection or perforation caused by aggressive forward advancement",
      "Device entrapment or wire shearing (strictly avoid using non-dedicated guidewires)",
      "Transient hemoglobinuria from mechanical erythrocyte lysis during prolonged activation"
    ],
    "maayTariffInr": 85000,
    "vendorContacts": [
      "BD / Straub Medical India (+91 98291 77665)",
      "Terumo India Medical (+91 98291 55678)",
      "Medtronic India Interventional (+91 98290 22441)"
    ]
  },
  {
    "id": "renal-artery-stenting-aras",
    "name": "Renal Artery Balloon Angioplasty and Stenting for Atherosclerotic Renal Artery Stenosis (ARAS) with Flash Pulmonary Edema",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV023A",
    "rghsCode": "693 / 53",
    "icd10": "I15.0 (Renovascular hypertension) / I70.1 (Atherosclerosis of renal artery)",
    "indications": [
      "Hemodynamically significant atherosclerotic renal artery stenosis (>= 70% lumen reduction or trans-lesional systolic gradient >= 20 mmHg) presenting with Pickering syndrome (recurrent flash pulmonary edema)",
      "Refractory renovascular hypertension resistant to >= 3 maximally tolerated antihypertensive medications including a diuretic",
      "Rapidly declining renal function in the setting of severe bilateral ARAS or solitary functioning kidney with high-grade stenosis"
    ],
    "preOpCriteria": [
      "Renal duplex ultrasound or CTA/MRA documenting ostial/proximal renal artery stenosis >= 70% and preserved renal pole-to-pole bipolar length >= 8.5-9.0 cm (to exclude end-stage atrophy)",
      "Renal resistive index (RI) < 0.80 on duplex (RI > 0.80 correlates with irreversible parenchymal damage and poor revascularization response)",
      "Serum creatinine, eGFR, potassium, and baseline arterial blood pressure"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Guiding Sheath / Catheter",
        "spec": "6F 45 cm / 55 cm RDC / Renal Double Curve or Multipurpose guiding sheath / catheter",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Support Guidewires",
        "name": "Specialized 0.014\" Support Guidewires",
        "spec": "0.014\" 190 cm / 300 cm Boston Scientific Spartacore / Abbott Grand Slam / Terumo Runthrough",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Renal Stent System",
        "name": "Balloon-Expandable Peripheral / Renal Stents",
        "spec": "Cordis Palmaz Blue / Medtronic Resolute Onyx / Express SD / Herculink (5.0 - 7.0 mm diameter x 12-18 mm length)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Distal Protection Filter (Optional)",
        "name": "Embolic Protection Device",
        "spec": "Medtronic SpiderFX / Boston Scientific FilterWire EZ (3.5 - 5.5 mm)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Pressure Wire (Optional)",
        "name": "Intravascular Trans-lesional Pressure Wire",
        "spec": "PressureWire X / Volcano Verrata for hyperemic systolic trans-stenotic pressure ratio (Pd/Pa < 0.90)",
        "standardStore": "Cath Lab Physiology Console"
      }
    ],
    "techniqueSteps": [
      "Retrograde common femoral artery access obtained with 6F sheath under ultrasound guidance; administer 5000 IU unfractionated heparin IV.",
      "Engage the renal artery ostium using a 6F RDC guiding catheter or Destination sheath.",
      "Perform selective renal DSA in shallow LAO or RAO projection (matching vessel takeoff) to unmask the ostial bifurcation and calculate percent diameter stenosis.",
      "If physiological assessment needed, measure resting and dopamine-induced trans-lesional gradient (systolic gradient >= 20 mmHg or mean gradient >= 10 mmHg confirms hemodynamically significant lesion).",
      "Cross the stenosis with a 0.014\" Spartacore or Grand Slam steerable wire parked safely in a distal segmental branch.",
      "Optionally deploy a distal embolic protection filter in the main renal trunk prior to branching.",
      "Select a low-profile balloon-expandable renal stent sized 1:1 to the reference post-stenotic vessel diameter (typically 5.0 - 6.5 mm x 15 mm).",
      "Position the stent so that approximately 1-2 mm of the proximal stent edge protrudes into the aortic lumen to guarantee complete coverage of the ostial plaque.",
      "Deploy the stent at nominal-to-high pressure (10-14 atm) under breath-hold fluoroscopy.",
      "Post-flare the aortic ostial portion of the stent using a larger non-compliant balloon or by pulling back the stent balloon slightly to create a smooth trumpet flare.",
      "Repeat renal angiography and pressure wire pull-back demonstrating complete lesion elimination (residual stenosis < 10%, pressure gradient abolished) and normal nephrogram blush.",
      "Retrieve filter if placed; achieve femoral hemostasis with Angio-Seal or Perclose."
    ],
    "complications": [
      "Renal artery rupture or dissection (potentially requiring emergency covered stent placement or nephrectomy)",
      "Atheroembolism resulting in acute renal failure (cholesterol crystal embolization / \"trash kidney\")",
      "Stent thrombosis or distal branch occlusion",
      "Groin hematoma or retroperitoneal bleeding"
    ],
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Medtronic India Vascular (+91 98290 22441)",
      "Cordis Interventional India (+91 98290 99882)",
      "Boston Scientific India (+91 98293 88991)"
    ]
  },
  {
    "id": "mesenteric-artery-stenting-cmi",
    "name": "Mesenteric Artery Stenting (SMA and Celiac Trunk) for Chronic Mesenteric Ischemia (Intestinal Angina)",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV024A",
    "rghsCode": "693 / 54",
    "icd10": "K55.1 (Chronic vascular disorders of intestine / mesenteric ischemia)",
    "indications": [
      "Chronic mesenteric ischemia (CMI) presenting with classic triad: postprandial abdominal pain (intestinal angina), food fear (sitophobia), and progressive significant weight loss",
      "Severe ostial stenosis or occlusion of Superior Mesenteric Artery (SMA) and/or Celiac Trunk (typically >= 2 of the 3 mesenteric vessels involved)",
      "Asymptomatic high-grade SMA stenosis in patients undergoing major aortic reconstruction"
    ],
    "preOpCriteria": [
      "Triphasic CT Angiography of Abdomen with sagittal reconstructions demonstrating sharp downward angulation of SMA/celiac takeoff, calcification extent, and mesenteric arcade collaterals (Arc of Riolan / Pancreaticoduodenal arches)",
      "Exclusion of active intra-abdominal malignancy or peptic ulcer disease via endoscopy",
      "Nutritional optimization, baseline renal function, and bleeding panel"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Upper Extremity / Femoral Guiding Sheath",
        "spec": "6F 90 cm Cook Shuttle / Destination sheath via left brachial/radial access (preferred due to downward takeoff) or 6F 45 cm RDC sheath via femoral access",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic & Support Catheter",
        "name": "Mikaelson / Cobra / Multipurpose Catheter",
        "spec": "5F 100 cm Mikaelson or C2 catheter and 0.014\" Quick-Cross support catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "0.014\" Guidewires",
        "name": "Steerable Support Guidewires",
        "spec": "0.014\" 300 cm Boston Scientific Spartacore / Abbott Grand Slam / Terumo Runthrough",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Mesenteric Stent System",
        "name": "Balloon-Expandable Covered / Bare Metal Stents",
        "spec": "Advanta V12 / Gore Viabahn VBX covered stent (preferred for patency) or Express LD / Omnilink bare stent (6.0 - 8.0 mm x 15-28 mm)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Post-Dilation Balloon",
        "name": "Non-Compliant Angioplasty Balloons",
        "spec": "6.0 mm - 8.0 mm x 20 mm high-pressure balloon",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Left brachial artery or left radial artery access established under ultrasound guidance (antegrade approach provides superior pushability and alignment with the acutely downward-pointing mesenteric ostia; alternatively retrograde CFA access).",
      "Administer 5000 IU unfractionated heparin IV (ACT > 250s).",
      "Advance 6F 90 cm guiding sheath over a wire into the upper abdominal aorta.",
      "Perform lateral abdominal aortography in steep 90-degree lateral projection to profile the ostia of both Celiac Axis and SMA.",
      "Cannulate the SMA ostium using a 5F Mikaelson or Cobra catheter; advance a 0.014\" Spartacore or Grand Slam stiff wire across the ostial stenosis into the distal straight SMA main stem.",
      "Exchange catheter for a balloon-expandable covered stent (Viabahn VBX or Advanta V12) sized 1:1 with reference SMA caliber (typically 6-8 mm diameter). Covered stents demonstrate significantly lower restenosis rates than bare-metal stents in the mesenteric circulation.",
      "Position stent with 1-2 mm extending into the aortic lumen to avoid geographic miss of ostial plaque.",
      "Deploy stent under breath-hold fluoroscopy at nominal pressure (8-10 atm).",
      "Flare the aortic portion of the stent using a larger diameter non-compliant balloon to ensure smooth funnel transition.",
      "Perform lateral and AP completion DSA confirming complete revascularization, brisk flow into jejunal/ileal branches, and absence of distal embolization or dissection.",
      "Achieve access site hemostasis; initiate dual antiplatelet therapy."
    ],
    "complications": [
      "Mesenteric artery dissection or rupture during balloon dilation (life-threatening emergency)",
      "Distal mesenteric thromboembolism causing acute bowel infarction",
      "Upper extremity access complications: brachial artery thrombosis, median nerve neuropathy, pseudoaneurysm",
      "In-stent restenosis or thrombosis"
    ],
    "maayTariffInr": 85000,
    "vendorContacts": [
      "W. L. Gore & Associates India (+91 98291 44552)",
      "Getinge / Atrium Medical India (+91 98290 88771)",
      "Boston Scientific India (+91 98293 88991)"
    ]
  },
  {
    "id": "acute-sma-thromboembolism-aspiration-cdt",
    "name": "Acute Superior Mesenteric Artery (SMA) Thromboembolism Percutaneous Aspiration Embolectomy and Catheter Thrombolysis",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV025A",
    "rghsCode": "693 / 55",
    "icd10": "K55.011 / K55.012 (Acute vascular disorders of intestine / acute mesenteric ischemia)",
    "indications": [
      "Acute mesenteric ischemia (AMI) due to SMA thromboembolism with hyperacute onset severe out-of-proportion abdominal pain, in early stages without clinical signs of overt transmural bowel necrosis / perforation",
      "Early post-embolic SMA occlusion in high-risk surgical patients unsuitable for open surgical embolectomy",
      "Non-occlusive mesenteric ischemia (NOMI) or acute thrombotic occlusion with persistent visceral vasospasm"
    ],
    "preOpCriteria": [
      "Urgent contrast CTA Abdomen demonstrating filling defect / abrupt cut-off in the mid-to-distal SMA (typically 3-8 cm distal to ostium, sparing the first jejunal branches in cardioembolic cases)",
      "Absence of definitive signs of transmural bowel gangrene (no pneumatosis intestinalis, portomesenteric venous gas, or free intraperitoneal air requiring immediate laparotomy)",
      "Serum lactate level, arterial blood gas base deficit, and coagulation parameters"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Large-Bore Guiding Sheath",
        "spec": "6F - 7F 45 cm / 90 cm Cook Shuttle or Destination sheath (femoral or left brachial)",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Aspiration Thrombectomy System",
        "name": "Mechanical / Continuous Vacuum Aspiration System",
        "spec": "Penumbra Indigo CAT 6 / CAT 8 continuous aspiration catheter with Lightning intelligent aspiration tubing",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Infusion Catheter",
        "name": "Multi-Sidehole Thrombolysis Catheter",
        "spec": "4F 90 cm Cook Fountain or Uni-Fuse infusion catheter (infusion length 5-10 cm)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Thrombolytic / Vasodilator",
        "name": "Thrombolytic & Vasodilator Agents",
        "spec": "Inj Alteplase (r-tPA) and Inj Papaverine Hydrochloride (30-60 mg/hr infusion)",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Guidewires",
        "name": "Support Guidewires",
        "spec": "0.014\" - 0.018\" 300 cm Command 14 / V-18 Control wire",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Immediate femoral or left brachial access with 6F/7F sheath; administer initial IV heparin bolus (5000 IU).",
      "Selective cannulation of the SMA using 6F guiding sheath and perform rapid DSA confirming location of embolic lodge (typically distal to middle colic artery origin).",
      "Advance Penumbra Indigo CAT 6 or CAT 8 aspiration catheter directly to the face of the thrombus over a 0.014\"/0.018\" wire.",
      "Engage intelligent vacuum aspiration; make controlled slow forward passes through the thrombus burden, clearing embolic fragments until flow sensor indicates clear arterial fluid.",
      "Perform control SMA angiogram to evaluate restoration of main stem flow and identify residual peripheral branch occlusions.",
      "If branch occlusion persists, administer pulse-spray Alteplase (2-4 mg in divided doses) directly into the clot via microcatheter.",
      "If intense peripheral mesenteric vasoconstriction persists, institute continuous intra-arterial infusion of Papaverine (30-60 mg/hr) via the catheter parked in the proximal SMA.",
      "Urgent multidisciplinary surgical consultation: perform serial physical exams and lactate checks to rule out evolving focal bowel ischemia requiring second-look diagnostic laparoscopy or resection.",
      "Wean infusions and withdraw hardware upon clinical resolution and hemodynamic normalization."
    ],
    "complications": [
      "Unrecognized transmural bowel gangrene with subsequent perforation and septic shock",
      "Mesenteric arterial dissection or rupture during aspiration passes",
      "Intraperitoneal hemorrhage or gastrointestinal bleeding from fibrinolysis",
      "Access site hematoma"
    ],
    "maayTariffInr": 80000,
    "vendorContacts": [
      "Penumbra India Interventional (+91 98291 88772)",
      "Boehringer Ingelheim India (+91 98290 55443)",
      "Cook Medical India (+91 98292 66773)"
    ]
  },
  {
    "id": "innominate-artery-angioplasty-stenting",
    "name": "Innominate (Brachiocephalic) Artery Severe Stenosis / Occlusion Balloon Angioplasty and Covered Stenting",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV026A",
    "rghsCode": "693 / 56",
    "icd10": "I65.8 (Occlusion and stenosis of other precerebral arteries / brachiocephalic)",
    "indications": [
      "Severe symptomatic stenosis or occlusion of the innominate (brachiocephalic) artery causing right hemisphere transient ischemic attacks (TIAs) / stroke or right upper extremity claudication",
      "Subclavian-carotid steal syndrome secondary to innominate artery pathology",
      "Pre-operative revascularization prior to coronary artery bypass grafting requiring right internal mammary artery"
    ],
    "preOpCriteria": [
      "Arch CTA with cerebral angiographic circle of Willis reconstructions evaluating intracranial collateral pathways and vertebral artery flow direction",
      "Carotid and vertebral duplex ultrasound showing flow reversal or dampened pulsatility in right common carotid and right vertebral arteries",
      "Baseline neurological assessment, platelet count, INR, and antiplatelet pre-loading"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Femoral & Brachial Sheaths",
        "spec": "7F - 8F 90 cm Cook Shuttle / Destination sheath (femoral) and 4F - 5F right brachial access sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Cerebral Protection (Optional)",
        "name": "Embolic Protection Filters",
        "spec": "Two SpiderFX or FilterWire EZ filters (one deployed in right internal carotid artery, one in right vertebral artery)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Guidewires",
        "name": "Support & Stiff Guidewires",
        "spec": "0.035\" 260 cm Amplatz Super Stiff wire and 0.014\" Grand Slam wires",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Stent System",
        "name": "Large-Diameter Balloon-Expandable Covered Stent",
        "spec": "Gore Viabahn VBX / Atrium Advanta V12 / Express LD (9.0 - 12.0 mm diameter x 20-38 mm length)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Post-Dilation Balloon",
        "name": "High-Pressure Non-Compliant Balloon",
        "spec": "10.0 mm - 12.0 mm x 20 mm balloon for ostial flaring",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Retrograde right common femoral artery access placed with 7F/8F long sheath; secondary right brachial artery access established for through-and-through control or dual injection.",
      "Full heparinization with 5000-7000 IU IV heparin (target ACT > 250-300s).",
      "Perform aortic arch angiography in 30-45 degree LAO projection to profile the innominate artery takeoff and bifurcation into right subclavian and right common carotid.",
      "Carefully cross the innominate stenosis with a steerable wire and support catheter from femoral access (or retrogradely from right brachial access in CTO cases).",
      "If embolic protection utilized, deploy filters in the right internal carotid artery and right vertebral artery via right brachial access.",
      "Exchange for a heavy-duty 0.035\" Amplatz Super Stiff wire anchored in the right subclavian or right carotid artery.",
      "Pre-dilate the lesion carefully with an undersized balloon (e.g., 6 mm or 7 mm).",
      "Deploy a large-diameter balloon-expandable covered stent (Viabahn VBX or Advanta V12, 10-12 mm diameter) with the proximal 1-2 mm flaring into the aortic arch and distal end stopping short of the carotid-subclavian bifurcation.",
      "Post-dilate the stent to nominal diameter (10-12 mm) and flare the aortic ostium.",
      "Perform completion cerebral and arch angiography: confirm full lesion resolution, normal antegrade flow in right common carotid, right internal carotid, and right vertebral arteries, and absence of distal embolic cut-offs.",
      "Retrieve embolic protection filters; achieve access hemostasis with closure device."
    ],
    "complications": [
      "Cerebrovascular accident / embolic stroke in right anterior or posterior circulation",
      "Iatrogenic dissection or rupture of innominate artery / aortic arch junction",
      "Accidental jailing or occlusion of the right common carotid artery origin",
      "Brachial or femoral access site thrombosis or hematoma"
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "W. L. Gore & Associates India (+91 98291 44552)",
      "Medtronic India Interventional (+91 98290 22441)",
      "Boston Scientific India (+91 98293 88991)"
    ]
  },
  {
    "id": "subclavian-stenosis-steal-syndrome-stenting",
    "name": "Subclavian Artery Proximal Stenosis / Subclavian Steal Syndrome Balloon Angioplasty and Stenting",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV027A",
    "rghsCode": "693 / 57",
    "icd10": "I65.2 (Occlusion and stenosis of vertebral artery / Subclavian steal syndrome) / I70.21",
    "indications": [
      "Subclavian Steal Syndrome: retrograde flow in the ipsilateral vertebral artery causing posterior circulation ischemic symptoms (vertigo, syncope, ataxia, diplopia) triggered by upper extremity exertion",
      "Severe upper limb ischemia (claudication, resting hand pain, digital ulceration)",
      "Coronary-Subclavian Steal Syndrome: angina in patients with internal mammary artery (LIMA) bypass graft to LAD due to proximal subclavian artery stenosis"
    ],
    "preOpCriteria": [
      "Arch and head/neck CTA or duplex ultrasound demonstrating > 70% proximal subclavian stenosis proximal to the vertebral artery takeoff, and retrograde or alternating flow in the ipsilateral vertebral artery",
      "Upper extremity blood pressure differential (> 15-20 mmHg systolic difference between arms)",
      "Coagulation indices: INR < 1.4, Platelets > 80,000/uL; dual antiplatelet loading (Aspirin + Clopidogrel)"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Femoral / Brachial Introducer Sheaths",
        "spec": "6F - 7F 90 cm Cook Shuttle / Destination sheath (femoral) and optional 4F-5F ipsilateral brachial sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheters",
        "name": "Headhunter / Simmons / Headliner Catheter",
        "spec": "5F 100 cm H1 / Simmons 2 / JR4 catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewires",
        "name": "Steerable & Support Guidewires",
        "spec": "0.035\" 260 cm Stiff Glidewire and 0.035\" Amplatz Super Stiff wire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Stent System",
        "name": "Balloon-Expandable Peripheral Stents",
        "spec": "Express LD / Omnilink Elite / Dynamic / Advanta V12 covered stent (7.0 - 10.0 mm diameter x 20-30 mm length)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Post-Dilation Balloon",
        "name": "High-Pressure Non-Compliant Balloon",
        "spec": "8.0 mm - 10.0 mm x 20 mm balloon for ostial expansion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Right common femoral artery retrograde access established with 6F/7F sheath; administer 5000 IU unfractionated heparin IV.",
      "Advance 5F diagnostic catheter to the aortic arch; perform arch angiography in 45-60 degree LAO projection to clearly profile the left subclavian artery (LSA) origin and relationship to the left vertebral artery.",
      "Carefully cross the proximal subclavian stenosis with an angled 0.035\" Glidewire and 5F catheter, avoiding wire prolapse or trauma to the vertebral artery ostium.",
      "Advance wire into the axillary / brachial artery; exchange for a 0.035\" Amplatz Super Stiff wire.",
      "CRITICAL LANDING ZONE VERIFICATION: Accurately measure the distance between the aortic ostium and the vertebral artery origin (must preserve vertebral takeoff).",
      "Deliver a balloon-expandable stent (typically 8.0 - 9.0 mm x 20-30 mm) over the stiff wire; align the proximal edge flush with the aortic wall and distal edge stopping at least 5 mm proximal to the vertebral artery origin.",
      "Deploy stent under breath-hold fluoroscopy at nominal pressure (10-12 atm).",
      "Perform post-dilation of the proximal stent margin to ensure complete apposition with the aortic contour.",
      "Perform completion arch and selective left subclavian angiography: confirm complete relief of stenosis, instantaneous conversion of vertebral artery flow from retrograde to normal robust antegrade cranial perfusion, and brisk arm runoff.",
      "Withdraw hardware and achieve femoral hemostasis with vascular closure device."
    ],
    "complications": [
      "Vertebral or posterior circulation stroke from plaque atheroembolism",
      "Accidental jailing or occlusion of the vertebral artery or internal mammary artery (LIMA)",
      "Subclavian arterial rupture from over-dilation",
      "Distal upper extremity embolization"
    ],
    "maayTariffInr": 70000,
    "vendorContacts": [
      "Boston Scientific India (+91 98293 88991)",
      "Abbott Vascular India (+91 98290 33221)",
      "Medtronic India Interventional (+91 98290 22441)"
    ]
  },
  {
    "id": "cfa-ivl-shockwave-dcb",
    "name": "Common Femoral Artery (CFA) Calcified Plaque Shockwave Intravascular Lithotripsy (IVL) and DCB Angioplasty",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV028A",
    "rghsCode": "693 / 58",
    "icd10": "I70.211 / I70.212 (Atherosclerosis of common femoral artery)",
    "indications": [
      "Severe, eccentric or concentric circumferential calcification of the common femoral artery bifurcation (causing claudication or CLTI) in patients with prohibitive surgical risk for open endarterectomy (hostile groin, prior irradiation, multiple groin surgeries, obesity)",
      "Endovascular treatment of CFA without permanent stent placement across the hip flexion crease",
      "Facilitation of large-bore vascular access (for TAVR, EVAR, or Impella) through heavily calcified, stenotic CFA vessels"
    ],
    "preOpCriteria": [
      "CTA or duplex ultrasound documenting circumferential or horseshoe calcification (calcium arc > 180-270 degrees, thickness > 1.5 mm) in the CFA trunk extending toward the superficial/profunda femoral bifurcation",
      "Evaluation of contralateral crossover access route (since ipsilateral CFA puncture is precluded by lesion)",
      "Baseline ABI, renal panel, and bleeding parameters"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Contralateral Crossover Guiding Sheath",
        "spec": "6F - 7F 45 cm Cook Flexor or Terumo Destination sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Intravascular Lithotripsy Catheter",
        "name": "Peripheral IVL Catheter System",
        "spec": "Shockwave Medical M5+ / L6 Peripheral IVL Catheter (5.5 - 7.0 mm diameter x 60 mm length, 300 pulses)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "IVL Generator & Connector",
        "name": "Shockwave IVL Generator",
        "spec": "Dedicated portable lithotripsy pulse console and cable connector",
        "standardStore": "Cath Lab Console Store"
      },
      {
        "category": "Drug-Coated Balloon",
        "name": "High-Dose Paclitaxel-Eluting DCB",
        "spec": "Medtronic IN.PACT Admiral / Boston Scientific Ranger DCB (6.0 - 7.0 mm x 40-60 mm)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Support Guidewires",
        "name": "Extra-Support 0.014\" Guidewires",
        "spec": "0.014\" 300 cm Abbott Spartacore / Boston Scientific Grand Slam",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided retrograde puncture of the contralateral common femoral artery; place 6F/7F crossover sheath and administer 5000 IU IV heparin.",
      "Cross the aortic bifurcation and park the sheath in the ipsilateral external iliac artery immediately above the diseased CFA.",
      "Perform baseline pelvic and femoral bifurcation DSA profiling the CFA lesion and origins of both SFA and profunda femoris.",
      "Cross the calcified CFA stenosis with a 0.014\" extra-support guidewire (Spartacore / Grand Slam); advance wire into the distal SFA or profunda.",
      "Select Shockwave M5+ or L6 IVL balloon catheter sized 1:1 to the reference CFA diameter (typically 6.0 - 7.0 mm).",
      "Advance the IVL catheter across the calcified plaque; inflate balloon to 4 atm (sub-nominal pressure to ensure acoustic wall contact without vessel stretching).",
      "Administer acoustic shockwave lithotripsy pulses: deliver cycles of 30 pulses per cycle (up to maximum 300 pulses per catheter), while observing crack propagation and progressive balloon profile expansion on fluoroscopy.",
      "After each 30-pulse cycle, briefly inflate balloon to 6 atm (nominal) to maximize lumen gain, then deflate to allow distal perfusion.",
      "Perform post-lithotripsy angiography to verify significant calcium fracture and luminal compliance gain without dissection.",
      "Follow IVL with a paclitaxel drug-coated balloon (DCB, sized 1:1, 6.0 - 7.0 mm) inflated at nominal pressure for a full 180 seconds to prevent restenosis while preserving the \"leave nothing behind\" principle across the hip flexion crease.",
      "Completion angiography confirming brisk laminar flow into both SFA and profunda femoris without dissection flaps.",
      "Remove crossover hardware; close contralateral access site with vascular closure device."
    ],
    "complications": [
      "Severe dissection extending into profunda femoris or SFA",
      "Distal embolization of micro-calcific debris into tibial runoff",
      "Vessel perforation / pseudoaneurysm",
      "Contralateral groin hematoma"
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Shockwave Medical / Cordis India (+91 98290 99882)",
      "Medtronic India Peripheral (+91 98290 22441)",
      "Boston Scientific India (+91 98293 88991)"
    ]
  },
  {
    "id": "femoral-pseudoaneurysm-thrombin-injection",
    "name": "External Iliac / Common Femoral Artery Iatrogenic Pseudoaneurysm Percutaneous US-Guided Thrombin Injection",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV029A",
    "rghsCode": "693 / 59",
    "icd10": "I72.4 (Pseudoaneurysm of artery of lower extremity) / T81.718A",
    "indications": [
      "Post-catheterization iatrogenic femoral or external iliac artery pseudoaneurysm with persistent circulating flow",
      "Expanding groin swelling with audible systolic bruit following diagnostic or interventional femoral vascular access",
      "Failed ultrasound-guided probe compression therapy"
    ],
    "preOpCriteria": [
      "Color Doppler ultrasound confirming false aneurysm sac with classic \"yin-yang\" swirling color jet and identifying clear communicating neck connecting to native artery",
      "Measurement of pseudoaneurysm neck dimensions: neck length >= 3-5 mm and neck width (narrow neck is favorable; wide neck > 5-8 mm requires balloon protection during injection)",
      "Exclusion of active groin sepsis / infected pseudoaneurysm (infected pseudoaneurysms require open surgical debridement and arterial reconstruction)"
    ],
    "hardware": [
      {
        "category": "Ultrasound System",
        "name": "High-Resolution Vascular Ultrasound Machine",
        "spec": "Linear array 7-12 MHz transducer with color and spectral Doppler capability",
        "standardStore": "Angio Suite USG"
      },
      {
        "category": "Puncture Needle",
        "name": "Spinal / Chiba Puncture Needle",
        "spec": "21G - 22G 4 cm - 9 cm echogenic needle with stylet",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Thrombin Agent",
        "name": "Human / Bovine Thrombin Solution",
        "spec": "Topical/Surgical Recombinant or Human Thrombin (typically 1000 IU/mL concentration in sterile saline)",
        "standardStore": "Cath Lab Pharmacy"
      },
      {
        "category": "Syringe & Connector",
        "name": "Low-Volume Luer-Lock Syringe",
        "spec": "1 mL tuberculin / insulin luer-lock syringe with 0.1 mL micro-graduations",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with affected groin shaved and prepped with chlorhexidine under sterile conditions.",
      "Perform meticulous duplex ultrasound mapping to locate the arterial defect, pseudoaneurysm neck, and the circulating sac fundus.",
      "Directly visualize the communicating neck and native femoral artery throughout the procedure.",
      "Under real-time ultrasound guidance, insert a 21G or 22G spinal needle into the pseudoaneurysm sac, directing the tip into the peripheral fundus furthest away from the neck (NEVER near the neck origin).",
      "Confirm tip position within the jet; aspirate a small amount of pulsatile blood to verify free intraluminal positioning.",
      "Slowly and incrementally inject 0.2 to 0.5 mL (200 to 500 IU) of thrombin solution over 10-20 seconds while observing live gray-scale and color Doppler.",
      "Observe instantaneous formation of echogenic thrombus spreading across the sac and immediate cessation of the \"yin-yang\" color flow jet.",
      "Immediately interrogate the native common femoral, superficial femoral, and profunda femoris arteries with color Doppler to confirm unrestricted, high-velocity pulsatile flow without thrombus protrusion.",
      "Check distal pedal pulses with pulse palpation and Doppler.",
      "Remove needle; apply gentle sterile dressing; advise bed rest for 2-4 hours followed by repeat duplex scan at 24 hours."
    ],
    "complications": [
      "Non-target arterial thromboembolism: thrombin leakage into native femoral artery causing acute lower limb ischemia",
      "Anaphylaxis / allergic reaction to bovine thrombin preparations (minimized by using human thrombin)",
      "Groin infection / abscess formation",
      "Recurrence of pseudoaneurysm (typically with multilocular sacs or persistent antiplatelet/anticoagulant therapy)"
    ],
    "maayTariffInr": 25000,
    "vendorContacts": [
      "Pfizer India / Surgical Specialties (+91 98290 77112)",
      "Baxter Healthcare India (+91 98291 99883)",
      "Terumo India Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "femoral-pseudoaneurysm-covered-stent",
    "name": "Femoral Pseudoaneurysm Neck Covered Stent-Graft Exclusion",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV030A",
    "rghsCode": "693 / 60",
    "icd10": "I72.4 / T81.718A (Postprocedural vascular complication / pseudoaneurysm)",
    "indications": [
      "Large or wide-necked (> 6-8 mm) femoral / external iliac artery pseudoaneurysm unsuitable for direct percutaneous thrombin injection due to high risk of native arterial embolization",
      "Rapidly expanding or ruptured femoral pseudoaneurysm with active extravasation",
      "Recurrent pseudoaneurysm following failed thrombin injection or surgical repair attempts"
    ],
    "preOpCriteria": [
      "CTA or duplex ultrasound defining pseudoaneurysm neck origin in relation to CFA bifurcation and inguinal ligament",
      "Distal landing zone caliber in superficial femoral or external iliac artery (minimum 5-6 mm) ensuring that covering the neck will not sacrifice an essential profunda femoris artery",
      "Coagulation status, baseline hemoglobin/hematocrit, and blood group crossmatching"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Contralateral Crossover Introducer Sheath",
        "spec": "7F - 8F 45 cm Cook Flexor or Terumo Destination sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Covered Stent-Graft",
        "name": "Flexible Self-Expanding or Balloon-Expandable Covered Stent",
        "spec": "Gore Viabahn Endoprosthesis (6.0 - 9.0 mm x 50-100 mm) or Atrium Advanta V12 (7-9 mm x 38-59 mm)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Guidewires",
        "name": "Support Guidewires",
        "spec": "0.035\" 260 cm Amplatz Super Stiff or Rosen guidewire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Angioplasty Balloons",
        "name": "Non-Compliant Angioplasty Balloons",
        "spec": "6.0 mm - 8.0 mm x 40 mm high-pressure balloons",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Access Closure",
        "name": "Vascular Closure Device",
        "spec": "Angio-Seal VIP 8F or Perclose ProStyle",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Obtain ultrasound-guided retrograde access via the contralateral common femoral artery; advance 7F/8F crossover sheath into the ipsilateral external iliac artery.",
      "Systemic heparinization with 5000 IU IV heparin.",
      "Perform pelvic and femoral digital subtraction angiography in multiple projections (RAO and LAO) to profile the precise neck of the pseudoaneurysm and identify the profunda femoris origin.",
      "Carefully advance a 0.035\" Glidewire across the parent artery defect into the superficial femoral artery; exchange for an Amplatz Super Stiff wire.",
      "Select covered stent (Viabahn or Advanta V12) with 5-10% diameter oversizing relative to the parent artery and sufficient length to extend at least 15-20 mm proximal and distal to the pseudoaneurysm neck.",
      "Advance the covered stent-graft across the neck defect, taking care to preserve the profunda femoris artery origin whenever anatomically feasible.",
      "Deploy the covered stent-graft under continuous fluoroscopy.",
      "Post-dilate the stent edges and body with an appropriately sized non-compliant balloon at nominal pressure.",
      "Perform completion angiography: confirm immediate and complete exclusion of the pseudoaneurysm sac with absence of endoleaks, wide patency of parent vessel, and preservation of distal runoff.",
      "Remove crossover sheath and achieve hemostasis with vascular closure device; palpate distal pedal pulses."
    ],
    "complications": [
      "Inadvertent occlusion of the profunda femoris artery origin",
      "Endoleak (Type I or Type II) resulting in continued sac pressurization",
      "Covered stent kinking or thrombosis across the hip joint line",
      "Distal embolization"
    ],
    "maayTariffInr": 85000,
    "vendorContacts": [
      "W. L. Gore & Associates India (+91 98291 44552)",
      "Getinge / Atrium Medical India (+91 98290 88771)",
      "Cook Medical India (+91 98292 66773)"
    ]
  },
  {
    "id": "popliteal-artery-entrapment-provocation-planning",
    "name": "Popliteal Artery Entrapment Syndrome (PAES) Diagnostic Dynamic Provocation Angiography and Endovascular Planning",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV031A",
    "rghsCode": "693 / 61",
    "icd10": "I77.89 (Other specified disorders of arteries / popliteal entrapment)",
    "indications": [
      "Young, athletic patients (< 40 years) presenting with calf claudication, cold foot, or paresthesias triggered by exercise",
      "Dynamic compression or occlusion of the popliteal artery during active plantarflexion or passive dorsiflexion of the ankle",
      "Differentiating anatomical entrapment (Types I-IV: abnormal gastrocnemius muscle insertion) from functional entrapment (Type VI) prior to surgical myotomy"
    ],
    "preOpCriteria": [
      "Duplex ultrasound demonstrating loss of popliteal artery Doppler flow during sustained active plantarflexion against resistance",
      "MRI / MRA of the knee joint delineating gastrocnemius muscle belly anatomy and popliteal neurovascular bundle course",
      "Baseline pedal pulses, ABI at rest and post-exercise"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "4F - 5F Introducer Sheath",
        "spec": "11 cm 4F/5F Terumo Radiofocus Sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheters",
        "name": "Marker Pigtail / Straight Flush Catheter",
        "spec": "4F 65 cm / 100 cm calibrated pigtail or multi-sidehole catheter",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewires",
        "name": "Hydrophilic Guidewires",
        "spec": "0.035\" 150 cm / 260 cm Terumo Radiofocus Glidewire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Foot Positioner",
        "name": "Radiolucent Dynamic Foot Rig",
        "spec": "Custom radiolucent pedal positioning rig for sustained active plantarflexion and dorsiflexion",
        "standardStore": "Angio Suite Console"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided ipsilateral antegrade or contralateral crossover CFA access established with a 4F/5F sheath.",
      "Administer 3000 IU unfractionated heparin IV.",
      "Advance 4F marker catheter into the distal superficial femoral artery / P1 popliteal segment.",
      "Perform baseline resting digital subtraction angiography of the popliteal artery in AP and lateral projections with foot in neutral relaxed position (measure baseline lumen, detect medial deviation, post-stenotic dilation, or intraluminal thrombus).",
      "Instruct patient to perform sustained forceful ACTIVE plantarflexion against footboard resistance; acquire continuous high-frame-rate DSA.",
      "Observe for dynamic compression, flattening, complete luminal occlusion, or lateral displacement of the popliteal artery.",
      "Repeat dynamic DSA during PASSIVE ankle dorsiflexion.",
      "Examine distal tibial runoff in both neutral and provoked positions to assess for microemboli or secondary distal occlusions.",
      "Document findings: anatomical deviation vs muscular hypertrophy compression; provide detailed anatomical mapping for surgical gastrocnemius release/decompression.",
      "Remove sheath and achieve hemostasis."
    ],
    "complications": [
      "Access site hematoma or pseudoaneurysm",
      "Distal embolization of pre-existing mural thrombus during forceful provocation maneuvers",
      "Arterial spasm",
      "Contrast allergy / nephropathy"
    ],
    "maayTariffInr": 35000,
    "vendorContacts": [
      "Terumo India Medical (+91 98291 55678)",
      "Cook Medical India (+91 98292 66773)",
      "Boston Scientific India (+91 98293 88991)"
    ]
  },
  {
    "id": "upper-extremity-digital-ischemia-angioplasty",
    "name": "Upper Extremity Digital Ischemia: Brachial-Radial-Ulnar Runoff Balloon Angioplasty",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV032A",
    "rghsCode": "693 / 62",
    "icd10": "I73.0 (Raynaud syndrome) / I70.228 (Upper extremity peripheral vascular disease)",
    "indications": [
      "Severe upper extremity digital ischemia with rest pain, non-healing digital pulp ulcers, or gangrene (secondary to systemic sclerosis/scleroderma, Buerger disease / TAO, or hypothenar hammer syndrome)",
      "Atherosclerotic or thromboangiitic occlusions of the radial, ulnar, superficial palmar arch, or common digital arteries",
      "Failed conservative medical therapy with prostacyclin analogues and calcium channel blockers"
    ],
    "preOpCriteria": [
      "High-resolution upper extremity duplex or CTA confirming patency of subclavian and axillary inflow and identifying focal or diffuse forearm/palmar occlusions",
      "Palmar arch evaluation via Allen test and duplex Doppler",
      "Coagulation parameters: INR < 1.4, Platelets > 80,000/uL"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Low-Profile Introducer Sheath",
        "spec": "4F 11 cm / 25 cm Terumo Radiofocus sheath (brachial or retrograde femoral)",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Microcatheter System",
        "name": "Steerable Microcatheter",
        "spec": "1.7F - 2.0F 135 cm / 150 cm Asahi Corsair / Terumo Progreat",
        "standardStore": "Central IR Store"
      },
      {
        "category": "0.014\" Guidewires",
        "name": "Extra-Floppy Steerable Guidewires",
        "spec": "0.014\" 300 cm Asahi Sion Blue / Fielder XT / Terumo Runthrough Extra Floppy",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Micro-Balloons",
        "name": "Dedicated Micro-Angioplasty Balloons",
        "spec": "1.25 mm - 2.5 mm diameter x 20-80 mm length (e.g., Medtronic Euphora / Abbott Trek)",
        "standardStore": "Special Consignment Store"
      },
      {
        "category": "Vasodilator Infusion",
        "name": "Continuous Antispasmodic Infusion",
        "spec": "Nitroglycerin (100 ug boluses) + Verapamil (1 mg) or Iloprost infusion to control severe vasospasm",
        "standardStore": "Cath Lab Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Establish ultrasound-guided antegrade ipsilateral brachial artery puncture (mid-arm) using a 4F sheath (or retrograde femoral access with long 4F 90 cm sheath).",
      "Administer 3000-5000 IU unfractionated heparin IV and intra-arterial cocktail (200 ug Nitroglycerin + 2.5 mg Verapamil) directly into the brachial artery.",
      "Perform magnification digital subtraction angiography of the forearm, wrist, palmar arches, and digital vessels in neutral open-hand position.",
      "Identify critical target vessel supplying the ischemic finger (e.g., radial artery to deep palmar arch, or ulnar artery to superficial palmar arch and digital branches).",
      "Carefully advance a 1.7F microcatheter and 0.014\" soft wire across the stenosis/occlusion into the target digital branch under high-magnification roadmapping.",
      "Advance an ultra-low-profile micro-balloon (1.5 - 2.0 mm diameter x 40 mm).",
      "Perform slow, gradual low-pressure inflation (4-6 atm for 120-180 seconds) to dilate the diseased forearm and palmar segments while avoiding over-expansion of delicate hand vasculature.",
      "Repeat angiogram with vasodilators to verify restored laminar flow through the palmar arch into the digital arteries with prominent digital pulp capillary blush.",
      "Remove 4F sheath and achieve hemostasis with manual compression (10-15 minutes) to avoid brachial artery thrombosis."
    ],
    "complications": [
      "Intense, refractory microvascular spasm",
      "Palmar or digital arterial perforation with hand compartment hematoma",
      "Brachial access site thrombosis or median nerve compression",
      "Distal digital microembolization"
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Asahi Intecc India (+91 98290 66554)",
      "Medtronic India Interventional (+91 98290 22441)",
      "Abbott Vascular India (+91 98290 33221)"
    ]
  },
  {
    "id": "endovascular-foreign-body-snare-retrieval",
    "name": "Endovascular Retrieval of Sheared / Fractured Peripheral Guidewire or Balloon Catheter",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV033A",
    "rghsCode": "693 / 63",
    "icd10": "T81.598A (Foreign body accidentally left during procedure) / T82.898A",
    "indications": [
      "Iatrogenic intra-arterial fracture or shearing of guidewire tip, microcatheter, or balloon catheter fragment during peripheral endovascular procedures",
      "Embolized unexpanded stent or fragment migrating into distal arterial tree",
      "Prevention of acute arterial thrombosis, vessel wall perforation, or distal ischemic necrosis"
    ],
    "preOpCriteria": [
      "Immediate biplane fluoroscopic localization of foreign body: identification of proximal and distal ends, orientation, and relationship to branch takeoffs",
      "Assessment of vessel caliber housing the fragment",
      "Maintenance of full systemic anticoagulation (ACT > 250s) to prevent thrombus formation around the retained intravascular hardware"
    ],
    "hardware": [
      {
        "category": "Retrieval Snare Systems",
        "name": "Multi-Loop & GooseNeck Snare Systems",
        "spec": "Medtronic EnSnare (3-loop, 4-8 mm or 9-15 mm) / Cook Amplatz GooseNeck Snare (2.5 mm, 4 mm, 7 mm diameter)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guiding Sheath",
        "name": "Large-Bore Introducer / Guiding Sheath",
        "spec": "6F - 8F 45 cm / 90 cm Cook Shuttle or Destination sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Microcatheter & Wires",
        "name": "Steerable Microcatheter",
        "spec": "2.4F Progreat or Renegade microcatheter with 0.014\" Glidewire GT",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Biliary / Urological Basket (Alternative)",
        "name": "Helical Wire Basket",
        "spec": "Dormia helical basket / zero-tip nitinol basket",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Maintain or establish large-bore vascular access (6F to 8F sheath) ipsilateral or contralateral to the foreign body location.",
      "Maintain therapeutic systemic heparinization throughout.",
      "Advance the guiding sheath into close proximity with the proximal or free edge of the fractured hardware.",
      "Deliver the Amplatz GooseNeck snare or EnSnare device through the guiding sheath or dedicated delivery catheter.",
      "Deploy the snare loops immediately adjacent to the free end of the fractured guidewire or catheter.",
      "Gently rotate and advance the snare loop around the free tip under biplane fluoroscopy.",
      "Once the loop encompasses the foreign body, cinch the snare catheter down tightly over the loop to grasp the fragment securely.",
      "Keep continuous tension on the snare while drawing the captured foreign body into the tip of the large guiding sheath.",
      "CRITICAL SAFETY STEP: If the foreign body is too large or deformed to enter the sheath lumen smoothly, withdraw the entire assembly (snare, fragment, and guiding sheath) en bloc through the arteriotomy as a single unit.",
      "Perform control angiography of the target vessel to confirm complete removal of the foreign body and verify vessel wall integrity without dissection, rupture, or spasm.",
      "Achieve access hemostasis with manual compression or surgical closure."
    ],
    "complications": [
      "Arterial laceration or dissection caused by traction of jagged metallic fragment",
      "Distal displacement / migration of the fragment into smaller inaccessible vessels",
      "Vessel rupture requiring emergency covered stenting or surgical arteriotomy",
      "Thrombus formation around the hardware fragment during manipulation"
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 66773)",
      "Medtronic India Interventional (+91 98290 22441)",
      "Boston Scientific India (+91 98293 88991)"
    ]
  },
  {
    "id": "retroperitoneal-hemorrhage-balloon-tamponade-coiling",
    "name": "Retroperitoneal Hemorrhage Control: Internal Iliac Artery Balloon Tamponade and Coil Embolization",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV034A",
    "rghsCode": "693 / 64",
    "icd10": "K66.1 (Hemoperitoneum) / I77.2 (Rupture of artery) / T81.20",
    "indications": [
      "Life-threatening retroperitoneal hemorrhage or deep pelvic hematoma following complex endovascular intervention, pelvic fracture, or high femoral arteriotomy",
      "Refractory hemorrhagic shock despite massive blood product transfusion and resuscitative measures",
      "Active extravasation / pseudoaneurysm arising from internal iliac artery (hypogastric) branches (anterior or posterior trunk)"
    ],
    "preOpCriteria": [
      "Emergency CTA Abdomen-Pelvis demonstrating contrast extravasation into retroperitoneum or pelvis, or acute intra-procedural hemodynamic collapse following high puncture/sheath manipulation",
      "Massive transfusion protocol (MTP) activated: PRBCs, FFP, Platelets, Cryoprecipitate",
      "Emergency access to fluoroscopy suite or hybrid operating room"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Contralateral / Radial Sheath",
        "spec": "6F 45 cm / 90 cm Cook Shuttle or Destination sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Occlusion Balloon Catheter",
        "name": "Compliant Aortic / Iliac Occlusion Balloon",
        "spec": "Medtronic Reliant / Boston Scientific Coda balloon (10-30 mm diameter)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Diagnostic & Guiding Catheters",
        "name": "Cobra / Roberts Uterine / RDC Catheters",
        "spec": "5F 100 cm C2 / RUC / Mikaelson catheters",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter System",
        "name": "High-Flow Steerable Microcatheter",
        "spec": "2.4F - 2.8F 130 cm Terumo Progreat / Boston Scientific Renegade HI-FLO",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Agents",
        "name": "Pushable & Detachable Fibered Coils & Gelfoam",
        "spec": "0.018\" / 0.035\" Nester / Interlock coils (4-12 mm) and Gelfoam slurry",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Covered Stent (Optional)",
        "name": "Balloon-Expandable Covered Stent",
        "spec": "Gore Viabahn VBX / Advanta V12 (7-10 mm x 38-59 mm) for direct external/internal iliac injury",
        "standardStore": "Special Consignment Store"
      }
    ],
    "techniqueSteps": [
      "Immediate contralateral CFA or left brachial/radial access established while resuscitation continues.",
      "EMERGENCY HEMODYNAMIC STABILIZATION: Advance a large compliant occlusion balloon (Coda / Reliant) into the common or internal iliac artery immediately proximal to the bleeding site; inflate balloon with dilute contrast to achieve immediate balloon tamponade and arrest exsanguinating hemorrhage.",
      "Maintain inflation while blood pressure stabilizes and crossmatched blood products are infused.",
      "Deflate balloon intermittently to perform rapid pelvic digital subtraction angiography and locate the precise bleeding vessel (e.g., iliolumbar, superior gluteal, internal pudendal, or obturator branch).",
      "Navigate 2.4F-2.8F microcatheter superselectively into the bleeding branch over a 0.014\" Glidewire.",
      "Deploy fibered embolization microcoils (Nester / Interlock) densely across the site of extravasation, packing from distal to proximal (\"sandwich\" technique to prevent collateral back-bleeding).",
      "Administer Gelfoam slurry if widespread parenchymal/muscular capillary bed oozing is present.",
      "If main internal iliac trunk or external iliac junction is disrupted, deploy a covered stent-graft (Viabahn VBX) across the rupture site.",
      "Perform completion pelvic angiography demonstrating total cessation of extravasation, preservation of contralateral pelvic collaterals, and normal lower limb runoff.",
      "Transfer patient to ICU for continuous invasive hemodynamic monitoring and serial hematocrit checks."
    ],
    "complications": [
      "Pelvic ischemic necrosis, buttock claudication, or rectal necrosis (if bilateral internal iliacs are sacrificed)",
      "Abdominal compartment syndrome secondary to massive retroperitoneal hematoma",
      "Distal thromboembolism",
      "Coagulopathy of trauma / hypothermia"
    ],
    "maayTariffInr": 80000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 66773)",
      "Boston Scientific India (+91 98293 88991)",
      "Medtronic India Interventional (+91 98290 22441)"
    ]
  },
  {
    "id": "radial-artery-pseudoaneurysm-thrombin-injection",
    "name": "Radial Artery Pseudoaneurysm Post-Coronary / Neuro Intervention Ultrasound-Guided Compression and Thrombin Injection",
    "category": "Aortic & Peripheral Arterial Interventions",
    "code": "2849-AV035A",
    "rghsCode": "693 / 65",
    "icd10": "I72.1 (Aneurysm of artery of upper extremity / radial pseudoaneurysm) / T81.718A",
    "indications": [
      "Iatrogenic radial artery pseudoaneurysm following transradial coronary, peripheral, or neurointerventional catheterization",
      "Painful, expanding pulsatile mass at the wrist with characteristic \"to-and-fro\" or \"yin-yang\" Doppler flow",
      "Failed mechanical band compression therapy (TR Band / Radicompression)"
    ],
    "preOpCriteria": [
      "High-resolution duplex ultrasound of the wrist confirming radial pseudoaneurysm sac, measurement of neck length/width, and patency of the ulnar artery",
      "Modified Allen test or duplex confirmation of complete palmar arch flow supplied by the ulnar artery",
      "Exclusion of infected pseudoaneurysm / suppurative thrombophlebitis"
    ],
    "hardware": [
      {
        "category": "Ultrasound System",
        "name": "High-Frequency Linear Ultrasound Probe",
        "spec": "12-18 MHz high-resolution musculoskeletal / vascular linear transducer",
        "standardStore": "Angio Suite USG"
      },
      {
        "category": "Puncture Needle",
        "name": "Fine Echogenic Needle",
        "spec": "25G - 27G 2.5 cm needle / tuberculin syringe assembly",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Thrombin Solution",
        "name": "Human Thrombin Solution",
        "spec": "Recombinant or Human Thrombin diluted to 500-1000 IU/mL in sterile saline",
        "standardStore": "Cath Lab Pharmacy"
      },
      {
        "category": "Pneumatic Compression Band",
        "name": "Radial Compression Band",
        "spec": "Terumo TR Band / Merit Radia-Stop for post-procedural immobilization",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with wrist extended on an armboard; clean wrist with chlorhexidine and apply sterile drape.",
      "Place high-frequency ultrasound transducer over the radial pseudoaneurysm; measure sac dimensions, neck diameter, and distance to the skin.",
      "Compress the neck slightly with the ultrasound transducer to slow down flow velocity without occluding the native radial artery.",
      "Under continuous direct real-time ultrasound guidance, insert a 25G needle into the superficial fundus of the pseudoaneurysm sac (keeping needle tip as far as possible from the neck).",
      "Aspirate minimal blood to confirm intraluminal positioning.",
      "Slowly inject 0.1 to 0.2 mL of thrombin solution (100-200 IU) while monitoring color flow in real time.",
      "Observe immediate cessation of swirling flow and complete thrombotic consolidation of the sac within 5-10 seconds.",
      "Immediately evaluate the underlying native radial artery: confirm unobstructed, triphasic antegrade flow along the entire radial lumen and into the deep palmar branch.",
      "Inspect ulnar artery and distal digital perfusion using pulse oximetry on the thumb and index finger.",
      "Apply light sterile dressing and radial compression band without excessive tension; discharge with instructions to avoid heavy lifting with the wrist for 48 hours."
    ],
    "complications": [
      "Accidental injection of thrombin into native radial artery causing radial thrombosis or hand/digital ischemia",
      "Distal digital embolization",
      "Local hematoma or cutaneous necrosis",
      "Recurrence of pseudoaneurysm"
    ],
    "maayTariffInr": 25000,
    "vendorContacts": [
      "Pfizer India Surgical (+91 98290 77112)",
      "Terumo India Medical (+91 98291 55678)",
      "Baxter Healthcare India (+91 98291 99883)"
    ]
  }
];
