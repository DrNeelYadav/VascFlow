import { ProcedureBlueprint } from '../../types/clinical';

export const VENOUS_AND_DRAINAGE_PROCEDURES: ProcedureBlueprint[] = [
  {
    "id": "dvt-catheter-directed-thrombolysis",
    "name": "Acute Iliofemoral Deep Vein Thrombosis: Catheter-Directed Thrombolysis (CDT)",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN001A",
    "rghsCode": "693 / 31",
    "icd10": "I80.209 (Phlebitis and thrombophlebitis of unspecified deep vessels of lower extremity)",
    "indications": [
      "Symptomatic acute iliofemoral deep vein thrombosis with symptom duration < 14 days",
      "Phlegmasia cerulea dolens or limb-threatening acute venous hypertension",
      "Extensive lower limb swelling with high anticipated risk of severe post-thrombotic syndrome (PTS)",
      "Good functional ambulatory baseline with low estimated bleeding risk profile"
    ],
    "preOpCriteria": [
      "Duplex ultrasound or CT venography documenting occlusive common femoral/iliac vein or IVC thrombosis",
      "Platelet count >= 60,000/uL, INR <= 1.4, baseline aPTT and serum fibrinogen >= 200 mg/dL",
      "Absence of active internal hemorrhage, recent major surgery or trauma (< 14 days), or stroke/intracranial neoplasm (< 3 months)",
      "Continuous ICU / HDU monitoring bed arranged with dedicated syringe infusion pumps and q4-6h fibrinogen monitoring protocol"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "6F Radiofocus Introducer Sheath",
        "spec": "11 cm length, 0.035-inch compatible, radiopaque tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Access Needle",
        "name": "21G Echogenic Micropuncture Needle",
        "spec": "7 cm length with 0.018-inch Nitinol wire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Terumo Glidewire Angled",
        "spec": "260 cm length, hydrophilic coated",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Kumpe / Berenstein Catheter",
        "spec": "100 cm length, hydrophilic coated tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Infusion Catheter",
        "name": "Cragg-McNamara Valved Infusion Catheter",
        "spec": "4F-5F, 135 cm length with 20-50 cm multi-sidehole infusion segment",
        "standardStore": "Interventional Store"
      },
      {
        "category": "Occluding Guidewire",
        "name": "End-hole occluding wire with sidehole delivery lumen",
        "spec": "Matched to 135 cm infusion catheter",
        "standardStore": "Interventional Store"
      },
      {
        "category": "Thrombolytic Agent",
        "name": "Recombinant Tissue Plasminogen Activator (Alteplase)",
        "spec": "50 mg vial for reconstitution in normal saline",
        "standardStore": "SMS Central Pharmacy"
      },
      {
        "category": "Infusion Hardware",
        "name": "Dedicated Syringe Infusion Pumps",
        "spec": "Dual channel micro-rate delivery pump",
        "standardStore": "ICU / HDU"
      }
    ],
    "techniqueSteps": [
      "Position patient prone or supine with knee slightly flexed. Prep and drape the ipsilateral popliteal fossa under full sterile precautions.",
      "Under real-time ultrasound guidance, puncture the ipsilateral popliteal vein or distal superficial femoral vein in an antegrade direction using a 21G echogenic micropuncture needle.",
      "Introduce a 0.018-inch Nitinol wire into the distal venous system, exchange through a 4F coaxial dilator, and place a 6F 11 cm vascular sheath.",
      "Perform baseline ascending venography through the sheath to delineate thrombus burden, venous valve competence, and the patent distal landing zone.",
      "Carefully negotiate a 5F angled hydrophilic catheter and 0.035-inch Glidewire across the occlusive iliofemoral thrombus into the infrarenal IVC.",
      "Exchange over a 260 cm exchange wire for a dedicated multi-sidehole infusion catheter (e.g., Cragg-McNamara), sizing the sidehole segment (20 to 50 cm) to completely span the thrombosed venous segment.",
      "Deliver an initial manual pulse-spray bolus of 5 mg reconstituted Alteplase along the thrombus length using locked syringes.",
      "Initiate continuous catheter-directed infusion of Alteplase at 0.5 to 1.0 mg/hour in sterile saline, while running subtherapeutic unfractionated heparin (300-500 IU/hr) through the sheath side-arm to prevent perisheath clotting.",
      "Transfer patient to HDU/ICU. Monitor vital signs, puncture site, neurological status, serial fibrinogen every 4-6 hours (maintaining > 150 mg/dL), and complete blood count.",
      "Return to the angiographic suite at 18-24 hours for repeat venography. Evaluate clot dissolution, perform adjuvant balloon angioplasty or venous stenting if underlying May-Thurner anatomical compression is unmasked, and remove the infusion system."
    ],
    "complications": [
      "Major retroperitoneal, pelvic, or gastrointestinal hemorrhage (1-3%)",
      "Intracranial hemorrhage (< 1%) necessitating emergency non-contrast head CT and cryoprecipitate administration",
      "Systemic hypofibrinogenemia (< 100 mg/dL) requiring reduction or temporary discontinuation of thrombolytic infusion",
      "Access site hematoma, pseudoaneurysm, or popliteal vein injury",
      "Symptomatic pulmonary embolism due to clot dislodgement during wire manipulation"
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 11223)",
      "Medtronic Interventional (+91 98291 33445)",
      "Cook Medical India (+91 98292 44556)"
    ]
  },
  {
    "id": "dvt-pharmacomechanical-thrombectomy-angiojet",
    "name": "Acute Iliofemoral DVT: Pharmacomechanical Catheter-Directed Thrombectomy (AngioJet / ClotTriever)",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN002A",
    "rghsCode": "693 / 32",
    "icd10": "I80.1 (Phlebitis and thrombophlebitis of femoral vein)",
    "indications": [
      "Acute extensive iliofemoral deep venous thrombosis (< 14 days duration)",
      "Impending venous gangrene or severe phlegmasia cerulea dolens requiring rapid mechanical clearance",
      "Relative contraindication to prolonged ICU thrombolytic infusions (intermediate bleeding risk)",
      "Need for rapid single-session single-stage venous recanalization"
    ],
    "preOpCriteria": [
      "Diagnostic duplex or CT venogram showing extensive occlusive thrombus in external iliac, common iliac, or common femoral vein",
      "Serum potassium, renal function panel, and baseline hemoglobin/hematocrit checked",
      "Absence of severe renal impairment or severe congestive heart failure that could worsen with fluid load / hemolysis",
      "Pre-procedure hydration protocol initiated (1-1.5 mL/kg/h normal saline) to mitigate hemolysis-induced nephropathy"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "8F Radiofocus Introducer Sheath",
        "spec": "11 cm or 23 cm length, hemostatic valve",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Access Needle",
        "name": "21G Echogenic Access Needle",
        "spec": "7 cm length with 0.018-inch wire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Stiff Hydrophilic Glidewire",
        "spec": "260 cm length, stiff angled shaft",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "PMT Catheter",
        "name": "AngioJet ZelanteDVT / Solent Omni Thrombectomy Catheter",
        "spec": "8F / 6F catheter with Power Pulse delivery capability",
        "standardStore": "Boston Scientific Consignment"
      },
      {
        "category": "Console Unit",
        "name": "AngioJet Ultra Thrombectomy System Console",
        "spec": "Drive unit with sterile tubing pack and waste collection bag",
        "standardStore": "Angio Suite Main"
      },
      {
        "category": "Fibrinolytic Agent",
        "name": "Recombinant Tissue Plasminogen Activator (Alteplase)",
        "spec": "10-20 mg diluted in 100-250 mL normal saline for Power Pulse",
        "standardStore": "SMS Pharmacy"
      },
      {
        "category": "Angioplasty Balloon",
        "name": "High-Pressure Venous PTA Balloon",
        "spec": "10-14 mm diameter x 40-60 mm length, 0.035-inch compatible",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Under ultrasound guidance and local anesthesia, access the ipsilateral popliteal or distal femoral vein using a 21G needle and place an 8F introducer sheath.",
      "Perform baseline venogram to assess the distal and proximal extents of iliofemoral thrombus.",
      "Cross the occluded deep venous segment into the inferior vena cava using a 0.035-inch stiff angled hydrophilic guidewire and 5F diagnostic catheter.",
      "Prime the AngioJet ZelanteDVT catheter with the console and load the Power-Pulse lytic solution (10-20 mg Alteplase in 100 mL saline).",
      "Switch the AngioJet unit to Power-Pulse mode and advance the catheter across the thrombus, spraying the lytic agent directly into the clot substance under low pressure.",
      "Allow a 20-30 minute dwell time for the thrombolytic solution to break down the fibrin matrix.",
      "Switch the AngioJet console to active rheolytic aspiration mode. Pull the catheter slowly backward through the thrombosed segment at a speed of 1-2 mm/sec under continuous fluoroscopy.",
      "Limit continuous AngioJet runtime to < 240 seconds per run to prevent severe hemoglobinuria, hyperkalemia, and bradyarrhythmia.",
      "Perform intermediate check venography. Repeat 1-2 aspiration passes if substantial residual thrombus persists.",
      "Assess for underlying anatomical vein stenosis (May-Thurner syndrome); dilate residual focal stenosis with a high-pressure balloon (10-12 mm) and proceed with self-expanding venous stenting if indicated.",
      "Ensure post-procedure intravenous bicarbonate/saline hydration to alkalinize urine and clear free plasma hemoglobin."
    ],
    "complications": [
      "Intravascular hemolysis causing transient macroscopic hemoglobinuria and acute tubular necrosis (ATN)",
      "Severe bradycardia or heart block during rheolysis in close proximity to the right atrium (adenosine release)",
      "Systemic hypokalemia or hyperkalemia secondary to rapid erythrocyte destruction",
      "Embolization of thrombus fragments into the pulmonary circulation",
      "Vessel wall dissection or perforation from high-velocity saline jets"
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 11223)",
      "Inari Medical / Distributor (+91 98293 88776)",
      "Becton Dickinson / Bard (+91 98294 22331)"
    ]
  },
  {
    "id": "dvt-large-bore-aspiration-thrombectomy",
    "name": "Acute Iliofemoral DVT: Dedicated Large-Bore Venous Mechanical Aspiration Thrombectomy (Inari ClotTriever / Indigo)",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN003A",
    "rghsCode": "693 / 33",
    "icd10": "I80.2 (Phlebitis and thrombophlebitis of other deep vessels of lower extremities)",
    "indications": [
      "Extensive acute or subacute iliofemoral deep vein thrombosis",
      "High bleeding risk or absolute contraindications to thrombolytic therapy (recent intracranial bleed, gastrointestinal ulcer bleed, recent trauma)",
      "Post-partum or perioperative patient with acute iliofemoral DVT needing instant thrombus extraction",
      "Single-session, non-thrombolytic, complete venous recanalization strategy"
    ],
    "preOpCriteria": [
      "Duplex ultrasound or contrast-enhanced CT venogram identifying occlusive clot burden in common iliac, external iliac, and common femoral veins",
      "Ipsilateral popliteal or small saphenous vein caliber sufficient for 11F to 16F sheath insertion",
      "Normal baseline coagulation profile or documented therapeutic anticoagulation initiated",
      "Vascular access site free of skin infection or severe burn"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "ClotTriever 13F/16F Sheath with Funnel Delivery System",
        "spec": "Self-expanding Nitinol radiopaque funnel with integrated dilator",
        "standardStore": "Cath Lab Main"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Extra-Stiff Amplatz Guidewire",
        "spec": "260 cm length, 4 cm floppy tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Torcon NB Advantage Kumpe Catheter",
        "spec": "100 cm length, 0.035-inch compatible",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Mechanical Thrombectomy",
        "name": "Inari ClotTriever Thrombectomy Catheter",
        "spec": "Expandable coring element and collection mesh bag, 0.035-inch compatible",
        "standardStore": "Inari Consignment"
      },
      {
        "category": "Aspiration System",
        "name": "Penumbra Lightning 12F / Indigo CAT12 Aspiration System",
        "spec": "12F continuous intelligent vacuum aspiration catheter",
        "standardStore": "Penumbra Consignment"
      },
      {
        "category": "Angioplasty Balloon",
        "name": "Atlas High-Pressure PTA Balloon",
        "spec": "12-14 mm diameter, 40 mm length, rated burst pressure >= 18 atm",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Closure System",
        "name": "Purse-string suture or Perclose ProGlide Vascular Closure Device",
        "spec": "Suture-mediated access site hemostasis system",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Position patient prone or supine with leg elevated. Sterilize and drape the popliteal region.",
      "Under ultrasound guidance, puncture the ipsilateral popliteal vein or distal femoral vein using a 21G needle and 0.018-inch wire.",
      "Upsize through sequential dilatation over a 0.035-inch stiff wire and place the dedicated ClotTriever 13F or 16F sheath with the expandable funnel tip positioned within the distal vein.",
      "Advance a 5F angled catheter and 0.035-inch hydrophilic wire across the thrombosed iliofemoral venous segment into the inferior vena cava.",
      "Exchange for a 0.035-inch extra-stiff Amplatz guidewire.",
      "Advance the ClotTriever catheter over the stiff wire past the proximal extent of the thrombus into the IVC.",
      "Deploy the expandable coring element and collection basket in the proximal patent vein segment under fluoroscopy.",
      "Slowly withdraw the deployed ClotTriever element down through the common iliac, external iliac, and femoral veins, peeling and coring the adherent clot off the vein wall into the basket.",
      "Collapse the basket into the funnel sheath and extract the captured organized thrombus out onto sterile gauze.",
      "Flush and clean the basket, repeat 2-4 passes until follow-up venogram confirms complete lumen clearance and restoration of brisk in-line flow.",
      "Identify residual underlying mechanical stenosis (May-Thurner spur); perform high-pressure balloon angioplasty (12 mm) and proceed with dedicated venous stenting.",
      "Remove sheath and achieve hemostasis using a figure-of-eight subcutaneous purse-string suture or manual compression."
    ],
    "complications": [
      "Iatrogenic venous dissection or intimal disruption from aggressive coring",
      "Distal embolization or caval clot propulsion causing pulmonary embolism",
      "Access site hematoma, popliteal arteriovenous fistula, or popliteal pseudoaneurysm",
      "Excessive blood loss during large-bore aspiration (mitigated by automated flow sensors)",
      "Residual resistant chronic synechiae or web-like fibrous stenosis"
    ],
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Inari Medical / Medtronic India (+91 98293 88776)",
      "Penumbra India (+91 98291 99887)",
      "Becton Dickinson India (+91 98294 22331)"
    ]
  },
  {
    "id": "chronic-pts-recanalization-stenting",
    "name": "Chronic Iliofemoral Post-Thrombotic Syndrome (PTS): Recanalization and Dedicated Venous Stenting (Venovo / Abre / Wallstent)",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN004A",
    "rghsCode": "693 / 34",
    "icd10": "I87.0 (Postthrombotic syndrome)",
    "indications": [
      "Severe intractable Post-Thrombotic Syndrome with Villalta score >= 15 or CEAP Class C4-C6 (severe stasis dermatitis, active venous ulceration)",
      "Chronic occlusion or high-grade fibrotic narrowing of the common iliac vein, external iliac vein, or common femoral vein",
      "May-Thurner syndrome (iliac vein compression) complicated by chronic fibrotic occlusion",
      "Failed conservative compression therapy and wound care for > 6 months"
    ],
    "preOpCriteria": [
      "Multi-detector CT venography or MR venography detailing chronic occlusion length, collateral pathway, and patent inflow/outflow landing zones",
      "Pre-procedure clinical assessment including Villalta and CEAP scoring",
      "Adequate deep venous inflow demonstrated from the deep femoral vein (profunda femoris) or femoral vein",
      "Anticoagulation protocol planned (low-molecular-weight heparin transitioned to direct oral anticoagulant or warfarin)"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "9F - 10F Check-Flo Performer Introducer Sheath",
        "spec": "23 cm - 35 cm length, radiopaque tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Recanalization Wire",
        "name": "0.035-inch Astato / Confianza / Radiofocus Glidewire Stiff",
        "spec": "260 cm length, stiff angled/tapered tip for chronic fibrotic crossing",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Support Catheter",
        "name": "Quick-Cross / Navicross Support Catheter",
        "spec": "0.035-inch compatible, 90-135 cm length, braided shaft",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "High-Pressure Balloon",
        "name": "Atlas Gold / Conquest PTA Dilatation Catheter",
        "spec": "10-14 mm diameter, 40-60 mm length, burst pressure up to 24-30 atm",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Dedicated Venous Stent",
        "name": "BD Venovo / Medtronic Abre / Boston Wallstent Venous Stent",
        "spec": "Self-expanding Nitinol open/closed cell, 14-18 mm diameter x 60-120 mm length",
        "standardStore": "Cath Lab Consignment"
      },
      {
        "category": "Post-Dilation Balloon",
        "name": "XXL Venous PTA Balloon",
        "spec": "14-16 mm diameter, 40 mm length",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Intravascular Ultrasound",
        "name": "Philips Volcano / Boston Scientific IVUS Catheter",
        "spec": "0.035-inch compatible 20 MHz venous IVUS catheter",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Under ultrasound guidance and local anesthesia, access the ipsilateral mid-superficial femoral vein, popliteal vein, or ipsilateral internal jugular vein for through-and-through rendezvous.",
      "Place a 9F or 10F sheath and perform selective multi-angle venography to visualize collateral baskets and chronic occlusion stumps.",
      "Utilize a stiff braided support catheter (Navicross) and a dedicated stiff angled hydrophilic Glidewire or chronic total occlusion (CTO) stiff wire to negotiate the dense fibrous synechiae and recanalize the true venous lumen.",
      "Confirm intraluminal re-entry into the inferior vena cava via orthogonal digital subtraction angiography and aspirating non-pulsatile dark venous blood.",
      "Exchange for a 0.035-inch extra-stiff Amplatz guidewire.",
      "Perform Intravascular Ultrasound (IVUS) to measure vein diameters, assess wall thickness, accurately locate the internal iliac confluence, and identify the exact cavoatrial and iliac landing zones.",
      "Pre-dilate the entire chronically occluded tract using a high-pressure balloon (10 mm to 12 mm) inflated to 18-24 atmospheres to break rigid fibrotic bands (\"waisting\" must be effaced).",
      "Deploy dedicated self-expanding venous stents (e.g., Venovo or Abre 14-16 mm in external iliac, 16-18 mm in common iliac). The stent should extend 2-4 mm into the IVC to prevent edge recoil, without jailing the contralateral common iliac vein.",
      "Overlap multiple stents by at least 2-3 cm, landing proximally in the IVC and distally in healthy venous tissue above the deep femoral vein confluence.",
      "Perform aggressive post-dilation of all stents with high-pressure balloon sizing (14 mm common iliac, 12 mm external iliac) matching the adjacent reference healthy vessel.",
      "Conduct final completion venography and IVUS run confirming wide lumen restoration, brisk washout into the IVC, and immediate elimination of collateral retroperitoneal bypass flow."
    ],
    "complications": [
      "Iatrogenic iliac vein rupture or retroperitoneal extravasation (requires immediate balloon tamponade or covered stent deployment)",
      "Acute in-stent thrombosis within 30 days due to inadequate inflow or non-compliance with anticoagulation",
      "Stent migration or embolization into the right atrium or pulmonary artery",
      "Contralateral iliac vein thrombosis secondary to excessive stent overhang across the caval bifurcation",
      "Chronic groin seroma or hematoma at the puncture site"
    ],
    "maayTariffInr": 80000,
    "vendorContacts": [
      "Becton Dickinson India (+91 98294 22331)",
      "Medtronic Interventional (+91 98291 33445)",
      "Boston Scientific India (+91 98290 11223)"
    ]
  },
  {
    "id": "ivc-filter-placement-infrarenal",
    "name": "Inferior Vena Cava (IVC) Filter Placement: Infrarenal, Retrievable Filter via Right Femoral or Internal Jugular Vein",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN005A",
    "rghsCode": "693 / 35",
    "icd10": "Z92.89 (Personal history of other medical treatment - IVC filter placement)",
    "indications": [
      "Acute lower extremity deep vein thrombosis or pulmonary embolism with absolute contraindication to therapeutic anticoagulation (e.g., active major bleeding, pending neurosurgery)",
      "Recurrent pulmonary embolism despite documented therapeutic anticoagulation",
      "Massive PE with residual extensive free-floating iliofemoral thrombus where recurrent embolization would prove fatal",
      "Severe polytrauma or neurotrauma at very high risk of thromboembolism with bleeding contraindications"
    ],
    "preOpCriteria": [
      "Pre-procedure ultrasound or contrast imaging confirming presence and proximal extent of DVT",
      "Baseline renal function and coagulation parameters evaluated",
      "Review of vascular access site anatomy (right internal jugular or right common femoral vein)",
      "Clear multidisciplinary plan established for planned filter retrieval within 30-90 days"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "7F-8F Dedicated IVC Filter Delivery Sheath",
        "spec": "55 cm - 65 cm length, radiopaque tip, 0.035-inch compatible",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Access Needle",
        "name": "18G/21G Echogenic Vascular Needle",
        "spec": "7 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch J-Tip Rosen or Hydrophilic Guidewire",
        "spec": "180 cm length, stiff body",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Calibrated Marker Pigtail Catheter",
        "spec": "100 cm length, 1 cm radiopaque interval markings",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "IVC Filter Implantation System",
        "name": "Cook Günther Tulip / Denali / Celect Retrievable IVC Filter System",
        "spec": "Nitinol or stainless steel conical retrievable filter with femoral/jugular delivery introducer",
        "standardStore": "Central IR Consignment"
      },
      {
        "category": "Contrast Media",
        "name": "Non-ionic iodinated contrast medium (Iohexol 350)",
        "spec": "100 mL bottle",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Sterilize and drape either the right common femoral or right internal jugular access site. Apply local anesthesia with 1% lidocaine.",
      "Under ultrasound guidance, cannulate the chosen vein using a micropuncture or 18G needle, advance the 0.035-inch guidewire into the IVC, and place a 5F sheath.",
      "Advance a 5F calibrated marker pigtail catheter to the lower cavoatrial junction and perform inferior cavography (AP and steep oblique views).",
      "Meticulously identify: (a) Lowest renal vein inflow, (b) Caval transverse diameter (must be <= 28 mm for standard filters; mega-cava if > 28 mm), (c) Duplication or transposition of IVC, (d) Luminal thrombus inside the IVC.",
      "Select the deployment site in the infrarenal IVC, ideally placing the filter apex just below the lowest renal vein ostium to prevent dead space for stagnation and thrombus build-up.",
      "Exchange for the dedicated manufacturer filter delivery sheath over an extra-stiff wire, seating the radiopaque tip markers at the predetermined infrarenal target.",
      "Introduce the preloaded retrievable filter into the sheath. Under strict fluoroscopic guidance, hold the pusher rod stationary while withdrawing the outer sheath (sheath retraction technique).",
      "Confirm symmetrical radial expansion of filter struts and ensure the retrieval hook/apex is centrally aligned within the IVC lumen.",
      "Perform completion cavogram via the delivery sheath or pigtail catheter to verify filter position, lack of tilt (< 15 degrees), strut integrity, and renal vein patency.",
      "Withdraw delivery hardware, apply manual pressure to access site for 10-15 minutes, apply pressure dressing, and register patient in the departmental IVC Filter Retrieval Registry."
    ],
    "complications": [
      "IVC filter tilt (> 15 degrees) or eccentric positioning impairing retrieval",
      "Caval wall perforation by filter struts (> 3 mm beyond wall) potentially injuring duodenum, aorta, or ureter",
      "Filter migration cranially into the right heart or caudal prolapse",
      "Acute or subacute IVC thrombosis occluding venous outflow (2-4%)",
      "Access site hematoma or pseudoaneurysm formation"
    ],
    "maayTariffInr": 35000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 44556)",
      "Becton Dickinson India (+91 98294 22331)",
      "Cordis / Cardinal Health (+91 98290 88776)"
    ]
  },
  {
    "id": "ivc-filter-placement-suprarenal",
    "name": "IVC Filter Placement: Suprarenal Placement for Gonadal / Renal Vein Thrombosis or Pregnancy",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN006A",
    "rghsCode": "693 / 36",
    "icd10": "I82.2 (Embolism and thrombosis of vena cava)",
    "indications": [
      "Thrombus propagating into the infrarenal IVC up to or above the level of the renal veins",
      "Renal vein thrombosis or left gonadal (ovarian/testicular) vein thrombosis extending into the IVC",
      "Pregnant patient in 2nd or 3rd trimester requiring IVC interruption where expanding uterus compresses the infrarenal cava",
      "Anatomical variants: Duplicated IVC with thrombus or circumaortic left renal vein confluence"
    ],
    "preOpCriteria": [
      "Abdominal CT venography or dedicated MRI demonstrating thrombus extending into suprarenal or inter-renal cava",
      "Renal function tests with baseline eGFR evaluated",
      "Confirmation that suprarenal caval diameter is within manufacturer specifications (<= 28 mm)",
      "Pre-procedure multidisciplinary consultation with obstetric or nephrology team"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "8F High-Flow Delivery Introducer Sheath",
        "spec": "65 cm length, jugular approach dedicated",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Access Needle",
        "name": "21G Echogenic Needle",
        "spec": "7 cm length with 0.018-inch Nitinol wire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Rosen Heavy-Duty Guidewire",
        "spec": "260 cm length, 1.5 mm J-tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Calibrated Marker Pigtail Catheter",
        "spec": "100 cm length, 1 cm radiopaque markers",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Retrievable IVC Filter",
        "name": "Denali / Celect Platinum Suprarenal-Rated Filter",
        "spec": "Self-centering Nitinol anchors, cephalic hook",
        "standardStore": "Central IR Consignment"
      }
    ],
    "techniqueSteps": [
      "Sterilize right neck and achieve right internal jugular vein access under real-time ultrasound guidance (preferred for suprarenal alignment).",
      "Advance 0.035-inch Rosen wire and 5F calibrated pigtail catheter into the inferior vena cava above the iliac confluence.",
      "Perform biplane digital subtraction cavogram to identify: (a) Exact ostia of right and left renal veins, (b) Hepatic vein confluences, (c) Extent of cranial thrombus projection.",
      "Select the suprarenal landing zone: Target the segment between the highest renal vein and the lowest major hepatic vein (typically T12 to L1 vertebral body).",
      "Advance the dedicated jugular filter delivery sheath over the stiff wire until the radiopaque marker matches the suprarenal landing target.",
      "Introduce the pre-packaged filter. Confirm by fluoroscopy that the filter apex points toward the right atrium without crossing into the atrium.",
      "Deploy the filter using the sheath retraction method while holding the inner pusher shaft completely immovable.",
      "Perform completion cavogram demonstrating full strut apposition against the suprarenal caval wall, widely patent renal vein inflows beneath the filter base, and brisk unobstructed caval runoff.",
      "Remove delivery sheath over wire, obtain jugular vein hemostasis with manual pressure, and log retrieval plan."
    ],
    "complications": [
      "Occlusion or thrombosis of renal vein orifices resulting in acute renal impairment",
      "Strut migration into hepatic veins or right atrium",
      "Caval wall perforation with retroperitoneal or retrohepatic hematoma",
      "Difficulty during future retrieval due to extensive endothelialization at the visceral segment",
      "Tilt of the filter within the wider suprarenal caval segment"
    ],
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Becton Dickinson India (+91 98294 22331)",
      "Cook Medical India (+91 98292 44556)"
    ]
  },
  {
    "id": "ivc-filter-retrieval-routine",
    "name": "Routine Endovascular IVC Filter Retrieval with Loop Snare",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN007A",
    "rghsCode": "693 / 37",
    "icd10": "Z46.89 (Encounter for fitting and adjustment of other specified devices)",
    "indications": [
      "Resolution of transient venous thromboembolism risk or successful resumption of safe anticoagulation therapy",
      "Prophylactic filter placed in trauma/orthopedic patient following mobilization and recovery",
      "Prevention of long-term IVC filter complications (caval occlusion, strut fracture, organ penetration)",
      "Dwell time typically within 3 to 12 weeks of implantation"
    ],
    "preOpCriteria": [
      "Pre-retrieval abdominal CT or duplex showing no significant thrombus (> 25% filter cone volume) trapped within the filter",
      "No active symptomatic PE within previous 2 weeks and patient safely anticoagulated or without PE recurrence",
      "Normal renal function and baseline coagulation profile (INR <= 1.5, Platelets >= 50,000/uL)",
      "Patient informed and consented regarding potential conversion to advanced techniques if embedded"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "8F - 10F Extra-Long Vascular Introducer Sheath",
        "spec": "45 cm - 55 cm length, PTFE-lined, radiopaque marker",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Access Needle",
        "name": "21G Echogenic Micropuncture Needle",
        "spec": "7 cm length with 0.018-inch wire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Hydrophilic Bentson / Glidewire",
        "spec": "180 cm length",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Endovascular Snare",
        "name": "Amplatz GooseNeck Snare Kit / EN Snare",
        "spec": "10-15 mm / 18-30 mm loop diameter, 120 cm catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Calibrated Pigtail Catheter",
        "spec": "100 cm length",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Sterilize and drape the right neck region. Perform ultrasound-guided puncture of the right internal jugular vein and insert an 8F-10F retrieval sheath.",
      "Advance a 5F pigtail catheter down into the infrarenal IVC and perform a preliminary inferior cavogram to verify: (a) Filter position, (b) Strut integrity, (c) Absence of trapped thrombus > 25% cone volume.",
      "Introduce the 10-15 mm GooseNeck snare through its delivery catheter and advance it down the retrieval sheath toward the filter apex hook.",
      "Form the snare loop in the IVC lumen just superior to the hook and manipulate it to encircle the filter apex hook.",
      "Once hooked, tighten the snare loop securely around the filter hook neck.",
      "Advance the outer retrieval sheath firmly downward over the snare catheter while maintaining steady axial tension on the snare wire.",
      "Engage the apex of the filter within the radiopaque metal collar of the sheath.",
      "Continue advancing the sheath downward over the filter legs, collapsing the struts inward until the entire filter is smoothly sheathed within the retrieval catheter.",
      "Withdraw the collapsed filter and sheath assembly as a single unit out through the right internal jugular vein access.",
      "Re-advance a diagnostic pigtail catheter and perform a completion cavogram to exclude caval dissection, mural extravasation, or residual thrombus.",
      "Achieve manual hemostasis at the neck access site."
    ],
    "complications": [
      "Failure of filter capture due to severe apex tilt against the caval wall",
      "Strut fracture or limb separation during collapse",
      "IVC dissection or intimal disruption",
      "Thrombus release and subsequent pulmonary embolism",
      "Neck hematoma or carotid artery puncture"
    ],
    "maayTariffInr": 32000,
    "vendorContacts": [
      "Medtronic Interventional (+91 98291 33445)",
      "Cook Medical India (+91 98292 44556)",
      "Becton Dickinson India (+91 98294 22331)"
    ]
  },
  {
    "id": "ivc-filter-retrieval-complex-forceps",
    "name": "Complex / Advanced IVC Filter Retrieval: Endobronchial Forceps Dissection of Embedded Filter Tip",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN008A",
    "rghsCode": "693 / 38",
    "icd10": "T82.898A (Other specified complication of vascular prosthetic devices)",
    "indications": [
      "Failed routine loop snare retrieval due to severe hook tilt (> 15 degrees) embedded within endothelialized caval wall",
      "Prolonged filter dwell time (> 6 months) with hyperplastic fibrotic tissue cap encapsulating the retrieval hook",
      "Strut penetration into retroperitoneal structures with patient experiencing chronic back/abdominal pain",
      "Desire to avoid major open surgical caval exploration and venotomy"
    ],
    "preOpCriteria": [
      "Pre-procedure contrast-enhanced CT of abdomen and pelvis with 3D reconstructed views to map hook embedding depth, tilt angle, and retroperitoneal strut protrusion",
      "Normal baseline coagulation profile (INR <= 1.4, Platelets >= 70,000/uL)",
      "Full blood bank cross-match (2 units packed red blood cells on standby)",
      "Procedure performed under general anesthesia or deep sedation with continuous arterial line monitoring"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "11F - 16F Extra-Long Armored Check-Flo Sheath",
        "spec": "55 cm - 65 cm length, reinforced braided wall",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Access Needle",
        "name": "21G Echogenic Needle",
        "spec": "7 cm length with 0.018-inch wire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Biopsy Forceps",
        "name": "Rigid Endobronchial / Alligator Biopsy Forceps",
        "spec": "Optical or standard flexible/rigid 2.0 mm diameter x 100 cm length, serrated jaws",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Snare / Steerable Sheath",
        "name": "Oscor Destino Reach / Agilis Steerable Sheath",
        "spec": "8.5F - 11F bidirectional deflection sheath",
        "standardStore": "Cath Lab Consignment"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Meier / Amplatz Super Stiff Guidewire",
        "spec": "260 cm length, 1 cm floppy tip",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Under general anesthesia, secure right internal jugular vein access under ultrasound guidance and upsize to an 11F to 14F reinforced sheath positioned in the upper IVC.",
      "Perform digital subtraction cavography to visualize the embedded filter hook and surrounding endothelial hyperplastic collar.",
      "Advance a steerable sheath (e.g., Destino or Agilis) through the outer sheath to articulate toward the wall where the hook is buried.",
      "Introduce rigid or flexible endobronchial alligator biopsy forceps through the steerable catheter under continuous fluoroscopy.",
      "Under high-resolution biplane fluoroscopy, open the forceps jaws and meticulously grasp the fibrotic tissue encapsulation around the filter tip.",
      "Gently dissect and peel away the covering endothelial pseudointima using repetitive micro-traction movements.",
      "Once the metallic hook is mobilized and freed, grasp the filter apex securely with the teeth of the forceps.",
      "Apply firm downward counter-traction with the outer large-bore reinforced sheath while pulling upward on the forceps.",
      "Invert the filter apex directly into the mouth of the armored sheath, collapsing the primary and secondary struts into the lumen.",
      "Withdraw the forceps, captured filter, and outer sheath en bloc under continuous fluoroscopy.",
      "Advance a pigtail catheter and perform completion multi-projection cavography to rule out transmural rupture, extravasation, or dissection of the IVC."
    ],
    "complications": [
      "Transmural caval rupture with massive retroperitoneal hemorrhage (emergency balloon tamponade/stent graft required)",
      "Strut fracture with embolization into pulmonary trunk",
      "Transient hemodynamic instability secondary to vagal or caval traction",
      "Air embolism via large-bore jugular sheath",
      "Access site hematoma"
    ],
    "maayTariffInr": 60000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 44556)",
      "Olympus Medical India (+91 98295 11234)",
      "Boston Scientific India (+91 98290 11223)"
    ]
  },
  {
    "id": "ivc-filter-retrieval-complex-laser",
    "name": "Complex IVC Filter Retrieval: Laser Sheath / Rigid Bronchial Forceps Assisted Removal of Endothelialized Struts",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN009A",
    "rghsCode": "693 / 39",
    "icd10": "T82.898A (Other specified complication of vascular prosthetic devices)",
    "indications": [
      "Chronically embedded retrievable IVC filter with dwell time > 1-2 years",
      "Heavy circumferential fibrotic endothelialization and calcification binding struts to the vena cava wall",
      "Failed conventional mechanical forceps dissection due to dense fibrosis",
      "Symptomatic caval stenosis or chronic recurring back/flank pain secondary to strut penetration"
    ],
    "preOpCriteria": [
      "Multi-detector high-resolution CT angiogram with bone windows showing circumferential endothelialization and strut protrusion distance",
      "Vascular surgical backup informed and standby operating room available",
      "Cardiac / vascular intensive care bed reserved, 4 units PRBC cross-matched",
      "Pre-procedure echocardiogram and complete metabolic evaluation"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "14F - 16F Armored Vascular Sheath",
        "spec": "55 cm length, radiopaque tip, valve adapter",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Excimer Laser System",
        "name": "Philips Spectranetics CVX-300 Excimer Laser System",
        "spec": "XeCl 308 nm cold ultraviolet photoablation unit",
        "standardStore": "Cath Lab Equipment"
      },
      {
        "category": "Laser Sheath",
        "name": "Spectranetics GlideLight / SLS II Laser Sheath",
        "spec": "12F - 14F laser catheter, 0.035-inch compatible lumen",
        "standardStore": "Philips Consignment"
      },
      {
        "category": "Endovascular Snare",
        "name": "Loop Snare / Pinces Forceps",
        "spec": "15 mm loop diameter, reinforced shaft",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Occlusion Balloon",
        "name": "Coda High-Pressure Occlusion Balloon",
        "spec": "32 mm diameter x 40 mm length (for emergency caval rupture control)",
        "standardStore": "Cath Lab Emergency Shelf"
      }
    ],
    "techniqueSteps": [
      "Under general anesthesia and radial arterial line monitoring, cannulate the right internal jugular vein and insert a 14F armored sheath.",
      "Perform digital subtraction cavography in two orthogonal planes to characterize strut incorporation and calcification.",
      "Grasp the filter apex hook using a heavy loop snare or endobronchial forceps, and lock the snare tightly to maintain continuous axial tension.",
      "Thread the 12F or 14F Spectranetics Excimer laser sheath over the snare catheter down to the apex of the embedded filter.",
      "Calibrate the Excimer laser console (fluency 45-60 mJ/mm2, repetition rate 40-60 Hz).",
      "Activate the laser foot pedal in 5-10 second bursts with gentle continuous forward pressure, vaporizing the dense scar tissue and collagen bonds surrounding the apex and primary struts.",
      "Advance the laser sheath incrementally over each embedded strut while maintaining constant coaxially-aligned counter-traction on the snare.",
      "Once the dense scar sleeve is photoablated, collapse the filter entirely into the outer armored sheath.",
      "Slowly withdraw the laser sheath, snare, and encapsulated filter en bloc from the patient.",
      "Immediately perform completion digital subtraction cavogram with balloon occlusion catheter immediately ready on table to verify caval integrity and rule out extravasation.",
      "Maintain patient in post-op ICU for 24 hours with serial hematocrit tracking."
    ],
    "complications": [
      "Full-thickness caval wall disruption leading to severe retroperitoneal exsanguination (managed by Coda balloon occlusion and emergent surgery/stent graft)",
      "Thermal or photoacoustic damage to adjacent retroperitoneal organs (duodenum, aorta)",
      "Thermal strut fracture with retained fragments in the caval wall",
      "Air embolism or massive retroperitoneal hematoma",
      "Puncture site bleeding and pseudoaneurysm"
    ],
    "maayTariffInr": 95000,
    "vendorContacts": [
      "Philips India / Spectranetics (+91 98296 22334)",
      "Cook Medical India (+91 98292 44556)",
      "Medtronic Interventional (+91 98291 33445)"
    ]
  },
  {
    "id": "pe-mechanical-thrombectomy-flowtriever",
    "name": "Acute Massive / Submassive Pulmonary Embolism: Catheter-Directed Mechanical Aspiration Thrombectomy (Inari FlowTriever)",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN010A",
    "rghsCode": "693 / 40",
    "icd10": "I26.02 (Saddle embolus of pulmonary artery with acute cor pulmonale)",
    "indications": [
      "Acute massive (high-risk) pulmonary embolism presenting with systemic hypotension, cardiogenic shock, or refractory hypoxemia",
      "Submassive (intermediate-high risk) PE with objective evidence of right ventricular dysfunction (RV/LV ratio > 0.9 on CT/Echo) and elevated cardiac biomarkers (Troponin, NT-proBNP)",
      "Absolute or relative contraindications to systemic or catheter-directed thrombolysis (recent hemorrhagic stroke, active bleed, major surgery < 14 days)",
      "Rapidly deteriorating patient despite initial parenteral anticoagulation"
    ],
    "preOpCriteria": [
      "CT Pulmonary Angiography (CTPA) documenting large central, saddle, or lobar pulmonary arterial clot burden",
      "Transthoracic echocardiogram demonstrating acute cor pulmonale, McConnell sign, or RV dilatation",
      "Informed consent and immediate availability of intensive care resuscitation team and ECMO backup",
      "Right common femoral vein access mapped by ultrasound"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Inari FlowTriever Large-Bore 20F/24F DrySeal Sheath",
        "spec": "20F - 24F, 33 cm length, radiopaque marker, hemostatic valve",
        "standardStore": "Cath Lab Main"
      },
      {
        "category": "Access Needle",
        "name": "21G Echogenic Needle",
        "spec": "7 cm length with 0.018-inch Nitinol wire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Amplatz Extra-Stiff Guidewire",
        "spec": "260 cm length, 1 cm floppy tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Steerable Catheter",
        "name": "FlowTriever TriVerter / Steerable Catheter System",
        "spec": "20F-24F aspiration guide catheter with bidirectional steering",
        "standardStore": "Inari Consignment"
      },
      {
        "category": "Thrombectomy Catheter",
        "name": "FlowTriever Catheter with Self-Expanding Nitinol Disks",
        "spec": "T1, T2, T3 self-expanding braided disks for mechanical clot engagement",
        "standardStore": "Inari Consignment"
      },
      {
        "category": "Aspiration Syringe",
        "name": "FlowSaver / 60 mL Vacuum Lock Aspiration Syringe",
        "spec": "60 mL vacuum-locking locking mechanism with blood return filtration kit",
        "standardStore": "Inari Consignment"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Berman Angiographic / Grollman Catheter",
        "spec": "100 cm length with balloon-tipped flow guidance",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Prep and drape bilateral groins. Administer local anesthesia and light conscious sedation with continuous pulse oximetry and arterial line monitoring.",
      "Perform ultrasound-guided right common femoral vein puncture and upsize sequentially over a stiff wire to the 20F or 24F FlowTriever sheath.",
      "Under fluoroscopic guidance, advance a 5F Berman balloon catheter or angled pigtail catheter across the right atrium, tricuspid valve, and right ventricular outflow tract (RVOT) into the main pulmonary artery.",
      "Record baseline pulmonary artery pressures (systolic, diastolic, mean). Perform selective pulmonary angiography.",
      "Exchange for a 0.035-inch Amplatz extra-stiff guidewire positioned deep in the descending lower lobe pulmonary branch.",
      "Advance the 20F/24F FlowTriever aspiration guide catheter over the stiff wire into the target pulmonary artery directly abutting the thrombus.",
      "Apply powerful manual suction using the 60 mL FlowTriever vacuum-lock syringe while advancing the catheter tip into the thrombus to aspirate central clot.",
      "For adherent or rubbery organized thrombus, deploy the FlowTriever self-expanding Nitinol disks through the catheter into the clot, pull the disks back to engage and mechanically entrap the clot, and aspirate en bloc into the large bore sheath.",
      "Filter the aspirated blood through the FlowSaver blood return system and autotransfuse back to the patient via the femoral sheath side-arm to eliminate blood loss.",
      "Repeat aspiration passes in bilateral main and lobar branches until repeat pulmonary angiography confirms dramatic reduction in clot burden and restoration of parenchymal perfusion.",
      "Re-measure pulmonary artery pressures, documenting significant drop in mean PA pressure (typically > 10-15 mmHg) and stabilization of systemic blood pressure.",
      "Remove hardware and achieve hemostasis with double Perclose ProGlide or deep figure-of-eight purse string suture."
    ],
    "complications": [
      "Pulmonary artery branch perforation or dissection leading to fatal pseudoaneurysm or hemoptysis",
      "Transient severe reperfusion pulmonary edema (PE-RPE)",
      "Right ventricular outflow tract injury or induced ventricular tachycardia / fibrillation",
      "Severe bradycardia or asystole triggered during passage across the tricuspid valve / bundle branches",
      "Femoral vein access site hematoma or retroperitoneal bleeding"
    ],
    "maayTariffInr": 90000,
    "vendorContacts": [
      "Inari Medical / Medtronic (+91 98293 88776)",
      "Penumbra India (+91 98291 99887)",
      "Boston Scientific India (+91 98290 11223)"
    ]
  },
  {
    "id": "pe-ultrasound-accelerated-thrombolysis-ekos",
    "name": "Acute Pulmonary Embolism: Ultrasound-Accelerated Catheter-Directed Thrombolysis (EKOS System with Low-Dose tPA)",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN011A",
    "rghsCode": "693 / 41",
    "icd10": "I26.92 (First episode of acute pulmonary embolism with acute cor pulmonale)",
    "indications": [
      "Acute submassive (intermediate-high risk) PE with RV strain (RV/LV ratio >= 0.9) and biomarker elevation",
      "Normotensive patients with extensive bilateral central/lobar pulmonary emboli developing progressive hypoxemia or tachycardia",
      "Patient requiring rapid RV unloading with substantially minimized thrombolytic dose (8-24 mg total Alteplase)",
      "Severe clot burden with elevated risk of major bleeding from standard systemic thrombolysis"
    ],
    "preOpCriteria": [
      "CTPA demonstrating bilateral main or lobar pulmonary artery thromboembolism",
      "Echocardiographic confirmation of right ventricular dysfunction",
      "Serum fibrinogen >= 150 mg/dL, Platelets >= 50,000/uL, INR <= 1.5",
      "Absence of intracranial hemorrhage history, active internal bleeding, or major cranial surgery within 3 months"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "6F Radiofocus Introducer Sheaths (Bilateral or Unilateral Dual-Lumen)",
        "spec": "11 cm length, radiopaque tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Access Needle",
        "name": "21G Echogenic Needle",
        "spec": "7 cm length with 0.018-inch wire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Terumo Glidewire Angled / Rosen Wire",
        "spec": "260 cm length, stiff body",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Grollman / Pigtail Catheter",
        "spec": "100 cm length, calibrated marker",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "EKOS System",
        "name": "EKOS EkoSonic Endovascular Catheter System",
        "spec": "5.4F infusion catheter with 12 cm or 24 cm treatment zone and matching ultrasound core",
        "standardStore": "Boston Scientific Consignment"
      },
      {
        "category": "Control Unit",
        "name": "EKOS MicroSonic Control Unit and Connector Cables",
        "spec": "Dual-channel acoustic pulse generator console",
        "standardStore": "Cath Lab Equipment"
      },
      {
        "category": "Thrombolytic Agent",
        "name": "Recombinant Tissue Plasminogen Activator (Alteplase)",
        "spec": "10-20 mg total dose for low-rate bilateral infusion (0.5-1.0 mg/hr/catheter)",
        "standardStore": "SMS Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Under local anesthesia and ultrasound guidance, access the right common femoral vein (or bilateral common femoral veins) and place 6F introducer sheaths.",
      "Advance a 5F Grollman or pigtail catheter over a 0.035-inch Glidewire across the right heart into the left and right main pulmonary arteries.",
      "Record baseline pulmonary artery pressures and perform selective pulmonary angiography documenting bilateral clot burden.",
      "Deploy the 5.4F EKOS infusion catheter over a stiff Rosen wire into the right main/lobar pulmonary artery, ensuring the 12-24 cm acoustic treatment zone completely bridges the clot.",
      "If treating bilaterally, place a second EKOS catheter into the left main/lobar pulmonary artery via the contralateral femoral or double-puncture ipsilateral access.",
      "Insert the EKOS ultrasonic core wires into the infusion catheters and lock them into position.",
      "Connect the catheters and core wires to the EKOS MicroSonic generator console and initiate high-frequency, low-energy ultrasound emission (acoustic pulse thrombolysis unwinds fibrin strands).",
      "Start continuous infusion of Alteplase at 0.5 to 1.0 mg/hour per catheter along with coolant normal saline infusion (35 mL/hr) through the core lumen.",
      "Run systemic subtherapeutic unfractionated heparin (300-500 IU/hr) through the sheath side-arms.",
      "Transfer patient to ICU. Maintain treatment for 6 to 12 hours (total Alteplase dose 12-24 mg). Monitor fibrinogen and vital signs every 4 hours.",
      "At 12 hours, turn off ultrasound, discontinue lytic infusion, remove catheters and sheaths, and achieve manual puncture site compression."
    ],
    "complications": [
      "Access site hematoma or pseudoaneurysm",
      "Major internal bleeding or intracranial hemorrhage (< 1%)",
      "Transient cardiac arrhythmias during right ventricular passage",
      "Catheter kink or ultrasonic core wire fracture",
      "Reperfusion pulmonary injury or localized alveolar hemorrhage"
    ],
    "maayTariffInr": 70000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 11223)",
      "Cook Medical India (+91 98292 44556)"
    ]
  },
  {
    "id": "pe-low-dose-catheter-directed-infusion",
    "name": "Acute Pulmonary Embolism: Low-Dose Catheter-Directed Infusion Thrombolysis via Bilateral Pigtail Catheters",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN012A",
    "rghsCode": "693 / 42",
    "icd10": "I26.92 (First episode of acute pulmonary embolism with acute cor pulmonale)",
    "indications": [
      "Submassive pulmonary embolism with RV dysfunction where specialized mechanical or ultrasound-assisted systems are unavailable",
      "Patient requiring controlled, low-dose local thrombolysis to rapidly lower pulmonary vascular resistance and RV strain",
      "Cost-effective catheter-directed pharmacologic reperfusion in high-risk patients",
      "Extensive bilateral central pulmonary embolism failing conservative anticoagulation"
    ],
    "preOpCriteria": [
      "CTPA showing occlusive thrombus in right and left main pulmonary artery branches",
      "Echocardiogram documenting RV dilatation and elevated estimated pulmonary pressures",
      "Normal baseline coagulation and absence of active bleeding contraindications",
      "High-dependency monitoring bed arranged with dedicated syringe infusion pumps"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "6F Introducer Sheaths (Bilateral Femoral)",
        "spec": "11 cm length, hemostatic valve",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Hydrophilic Glidewire Angled",
        "spec": "260 cm length, stiff shaft",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Diagnostic / Infusion Catheter",
        "name": "5F Multi-Sidehole Pigtail Catheters (Custom sidehole modification or Cragg-McNamara)",
        "spec": "100 cm length, calibrated radiopaque markers",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Thrombolytic Agent",
        "name": "Recombinant Tissue Plasminogen Activator (Alteplase)",
        "spec": "50 mg vial",
        "standardStore": "SMS Central Pharmacy"
      },
      {
        "category": "Infusion Pump",
        "name": "Precision Syringe Infusion Pumps",
        "spec": "Dual channel syringe driver",
        "standardStore": "ICU / HDU"
      }
    ],
    "techniqueSteps": [
      "Sterilize bilateral groin regions under aseptic protocol. Puncture bilateral common femoral veins under ultrasound guidance and insert 6F sheaths.",
      "Under fluoroscopic guidance, advance 5F pigtail catheters over 0.035-inch Glidewires across the right ventricle into the pulmonary artery trunk.",
      "Record baseline pulmonary arterial hemodynamics (mean PAP > 25 mmHg indicates pulmonary hypertension).",
      "Position one pigtail catheter in the right main pulmonary artery thrombus and the other in the left main pulmonary artery thrombus.",
      "Perform initial gentle mechanical clot maceration by gently rotating the pigtail catheters within the central thrombi.",
      "Administer a loading bolus of 2-4 mg Alteplase into each pulmonary artery over 15 minutes.",
      "Connect both catheters to dedicated syringe pumps delivering Alteplase at 0.5 mg/hour per lung (total 1.0 mg/hr) along with subtherapeutic heparin via the sheaths.",
      "Transfer patient to ICU for continuous telemetry, invasive arterial pressure monitoring, and serial fibrinogen assays every 4-6 hours.",
      "Continue infusion for 12 to 18 hours (maximum Alteplase dose <= 20 mg).",
      "Repeat bedside echocardiography or return to cath lab for repeat hemodynamic measurement and pulmonary angiogram confirming reduction in RV strain and clot clearance before hardware removal."
    ],
    "complications": [
      "Groin access site bleeding and retroperitoneal hematoma",
      "Major systemic bleeding or intracranial hemorrhage",
      "Arrhythmias (RBBB, PVCs, sustained ventricular tachycardia) during catheter positioning",
      "Distal embolization of fragmented clot causing temporary hypoxia spike",
      "Pulmonary artery pseudoaneurysm"
    ],
    "maayTariffInr": 35000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 11223)",
      "Cook Medical India (+91 98292 44556)"
    ]
  },
  {
    "id": "cteph-balloon-pulmonary-angioplasty-bpa",
    "name": "Chronic Thromboembolic Pulmonary Hypertension (CTEPH): Balloon Pulmonary Angioplasty (BPA) with Pressure-Wire Guidance",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN013A",
    "rghsCode": "693 / 43",
    "icd10": "I27.24 (Chronic thromboembolic pulmonary hypertension)",
    "indications": [
      "Inoperable Chronic Thromboembolic Pulmonary Hypertension (CTEPH) deemed surgically inaccessible (distal segmental/subsegmental webs, bands, pouch lesions)",
      "Persistent or recurrent pulmonary hypertension following pulmonary endarterectomy (PEA)",
      "High-risk surgical candidate with prohibitive comorbidities for open sternotomy / hypothermic circulatory arrest",
      "WHO Functional Class II-IV with elevated mean pulmonary artery pressure (>= 25 mmHg) and elevated pulmonary vascular resistance (PVR > 3 Wood units)"
    ],
    "preOpCriteria": [
      "Right heart catheterization confirming precapillary pulmonary hypertension (mPAP >= 25 mmHg, PAWP <= 15 mmHg, PVR >= 3 Wood Units)",
      "High-resolution CTPA and catheter digital subtraction pulmonary angiography delineating segmental and subsegmental webs, ring-like stenoses, and pouches",
      "Patient on therapeutic anticoagulation for at least 3 months prior to procedure",
      "Stepwise multi-session strategy planned (treating 1-2 segments per session to avert reperfusion edema)"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "6F - 8F Long Guiding Sheath (Destination / Ansel)",
        "spec": "90 cm length, angled or multipurpose curve",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Access Needle",
        "name": "21G Echogenic Needle",
        "spec": "7 cm length with 0.018-inch wire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.014-inch PTCA Hydrophilic Guidewire (BMW / Sion Black / Runthrough)",
        "spec": "300 cm exchange length, soft polymer jacket tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Pressure Wire",
        "name": "PressureWire X / OmniWire Fractional Flow Reserve Wire",
        "spec": "0.014-inch sensor wire for fractional distal-to-proximal pressure ratio (Pd/Pa)",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "BPA Balloon",
        "name": "Semi-Compliant PTCA Dilatation Balloons",
        "spec": "1.5 mm to 4.0 mm diameter x 10 mm to 20 mm length, 0.014-inch compatible",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "6F Judkins Right (JR4) / Multipurpose Guiding Catheter",
        "spec": "100 cm length",
        "standardStore": "Cath Lab Store"
      }
    ],
    "techniqueSteps": [
      "Secure right common femoral vein or right internal jugular access under ultrasound guidance. Place a 6F or 8F 90 cm long guiding sheath.",
      "Administer intravenous unfractionated heparin to maintain activated clotting time (ACT) between 200-250 seconds throughout the procedure.",
      "Engage the target segmental pulmonary artery branch using a 6F JR4 or multipurpose guiding catheter under digital subtraction fluoroscopy.",
      "Perform selective subsegmental pulmonary angiogram in tailored oblique views to clearly visualize webs, slits, ring-like narrowings, or pouches.",
      "Advance a 0.014-inch soft hydrophilic workhorse guidewire (or pressure wire) carefully across the fibrotic web lesions into the distal branch.",
      "Perform pressure wire interrogation: Measure proximal pulmonary artery pressure (Pa) and pressure distal to the stenosis (Pd); Pd/Pa ratio < 0.8 indicates hemodynamic significance.",
      "Select an undersized semi-compliant coronary balloon (1.5 to 2.5 mm for initial dilation) to minimize vascular injury and reperfusion lung injury.",
      "Inflate the balloon gently to nominal pressure (4-6 atm) for 15-30 seconds to disrupt fibrotic webs and bands, observing disappearance of the balloon waist.",
      "Perform completion subsegmental angiogram and pressure-wire check (target Pd/Pa > 0.8 without contrast extravasation or parenchymal staining).",
      "Limit treatment to 1-2 pulmonary segments per session; schedule subsequent staged BPA sessions at 2-4 week intervals.",
      "Transfer patient to cardiac step-down unit with close monitoring for hemoptysis, oxygen desaturation, and reperfusion pulmonary edema."
    ],
    "complications": [
      "Reperfusion Pulmonary Edema (RPE) in the treated vascular bed (manifesting as cough, hypoxia, and alveolar infiltration)",
      "Pulmonary artery branch perforation or wire injury resulting in brisk hemoptysis (requires immediate balloon occlusion, reversal of heparin, and coil embolization if refractory)",
      "Subsegmental dissection or thrombosis",
      "Right ventricular failure from fluid overload during multi-vessel instrumentation",
      "Groin hematoma"
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Terumo India Medical (+91 98291 55678)",
      "Abbott Vascular India (+91 98297 33445)",
      "Boston Scientific India (+91 98290 11223)"
    ]
  },
  {
    "id": "svc-syndrome-recanalization-stenting",
    "name": "Superior Vena Cava (SVC) Syndrome: Sharp Recanalization and Bilateral Kissing Brachiocephalic-to-SVC Stenting",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN014A",
    "rghsCode": "693 / 44",
    "icd10": "I87.1 (Compression of vein - SVC obstruction)",
    "indications": [
      "Severe or life-threatening SVC syndrome (Grade 3-4: cerebral edema, stridor, laryngeal edema, marked facial/upper extremity plethora)",
      "Malignant SVC obstruction secondary to non-small cell lung cancer, mediastinal lymphoma, or metastatic adenopathy refractory to urgent chemo-radiation",
      "Benign chronic SVC occlusion secondary to chronic indwelling dialysis catheters or pacemaker wires",
      "Failure of primary balloon angioplasty due to rigid external neoplastic compression and elastic recoil"
    ],
    "preOpCriteria": [
      "Contrast-enhanced thoracic CT angiogram detailing length of SVC occlusion, patent azygos arch, collateral venous pathways, and airway compromise",
      "Platelet count >= 50,000/uL, INR <= 1.5",
      "Patient positioned with head elevated 30-45 degrees to mitigate cerebral edema",
      "Anesthesia standby with emergency airway equipment ready in case of acute airway collapse"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "Dual 9F - 10F Check-Flo Vascular Sheaths (Femoral and Bilateral Brachial/Basilic)",
        "spec": "35 cm - 65 cm length, radiopaque tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Access Needle",
        "name": "21G Echogenic Needle and Micropuncture Kit",
        "spec": "7 cm length with 0.018-inch wire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Sharp Recanalization System",
        "name": "Rösch-Uchida Transjugular Biopsy Needle / Outback Re-entry Device",
        "spec": "16G - 19G curved puncture needle, 0.018-inch compatible",
        "standardStore": "Cath Lab Consignment"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Astato 30 / Confianza CTO Stiff Guidewires",
        "spec": "260 cm length, penetrative stiff tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Large-Bore Venous Stents",
        "name": "Cook Z-Stent / Medtronic Abre / BD Venovo / Boston Wallstent",
        "spec": "Self-expanding dedicated stents, 14-18 mm diameter x 60-100 mm length",
        "standardStore": "Cath Lab Consignment"
      },
      {
        "category": "Kissing PTA Balloons",
        "name": "High-Pressure Dilatation Balloons (Atlas / Conquest)",
        "spec": "10-14 mm diameter x 40 mm length",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Snare System",
        "name": "Amplatz GooseNeck Snare Kit",
        "spec": "15-20 mm loop, 120 cm catheter",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Establish dual vascular access: Right common femoral vein (inferior approach) and right/left basilic or brachial vein (superior approach) under ultrasound guidance.",
      "Perform synchronous superior and inferior venography to characterize the chronic occlusion gap, distance to right atrium, and collateral outflow.",
      "Attempt conventional retrograde and antegrade recanalization using stiff 0.035-inch angled Glidewires supported by 5F Kumpe catheters.",
      "If blunt recanalization fails, perform sharp recanalization: Advance a Rösch-Uchida transjugular needle or 19G Chiba needle through a curved guiding sheath from the superior vein, targeting a GooseNeck snare or balloon placed at the caval stump from the femoral route.",
      "Under strict biplane fluoroscopy, puncture across the fibrotic occlusion into the lumen of the opposite receiving catheter/snare.",
      "Pass a 0.014-inch or 0.018-inch wire through the needle, capture it with the inferior snare, and externalize it through the femoral sheath to establish continuous through-and-through wire access.",
      "Pre-dilate the recanalized occluded SVC tract with 8 mm to 10 mm high-pressure angioplasty balloons.",
      "For bilateral brachiocephalic involvement, prepare kissing self-expanding venous stents (e.g., 12-14 mm x 60 mm Abre or Wallstent) deployed simultaneously from bilateral arm veins into the central SVC, extending into the cavoatrial junction.",
      "Alternatively, deploy a 14-18 mm dedicated large-bore self-expanding stent across the SVC down into the upper right atrium, ensuring the stent does not migrate.",
      "Perform simultaneous post-dilation using kissing high-pressure balloons (10-12 mm) inflated synchronously to achieve optimal radial expansion.",
      "Perform final completion venography via arm veins confirming instantaneous drainage of the upper extremity venous system, brisk forward caval flow, and complete decompression of collateral chest wall veins.",
      "Secure access sites and monitor patient in elevated upright position; facial edema typically resolves dramatically within 24 to 48 hours."
    ],
    "complications": [
      "Perforation of SVC into mediastinum or pericardial space causing rapid cardiac tamponade (requires immediate pericardial drain and covered stent)",
      "Stent migration or embolization into the right ventricle or pulmonary artery",
      "Acute in-stent thrombosis requiring urgent catheter-directed thrombectomy",
      "Air embolism through upper extremity sheath systems",
      "Cerebral hyperperfusion syndrome following acute relief of long-standing venous hypertension"
    ],
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 44556)",
      "Medtronic Interventional (+91 98291 33445)",
      "Becton Dickinson India (+91 98294 22331)"
    ]
  },
  {
    "id": "evla-gsv-incompetence",
    "name": "Endovenous Laser Ablation (EVLA 1470nm) for Great Saphenous Vein (GSV) Incompetence",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN015A",
    "rghsCode": "693 / 45",
    "icd10": "I83.90 (Asymptomatic varicose veins of unspecified lower extremity)",
    "indications": [
      "Symptomatic Great Saphenous Vein (GSV) incompetence with saphenofemoral junction (SFJ) reflux > 0.5 seconds on duplex ultrasound",
      "CEAP Clinical Class C2 to C6 (visible varicose veins, chronic lower leg edema, stasis pigmentation, lipodermatosclerosis, active/healed venous ulcer)",
      "Aching, heaviness, throbbing, and nocturnal leg cramps refractory to conservative graduated compression stockings",
      "Recurrent superficial thrombophlebitis secondary to high-pressure truncal saphenous reflux"
    ],
    "preOpCriteria": [
      "Standing duplex ultrasound mapping documenting GSV diameter (typically >= 5.5 mm), location of reflux, tortuosity, and competency of deep venous system",
      "Patent deep venous system confirmed (absence of occlusive deep vein thrombosis)",
      "Absence of severe peripheral arterial disease (Ankle-Brachial Index >= 0.8)",
      "Patient ambulatory and capable of immediate post-procedure walking"
    ],
    "hardware": [
      {
        "category": "Laser System",
        "name": "1470 nm Diode Endovenous Laser Generator",
        "spec": "Targeted water-absorption wavelength generator (6-10 W output)",
        "standardStore": "Endovenous Laser Suite"
      },
      {
        "category": "Laser Fiber",
        "name": "Radial-Emitting Laser Fiber (Corona 360 / Radial 2ring)",
        "spec": "600 um core diameter, 360-degree cylindrical emission jacket",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Access Sheath",
        "name": "6F Radial Introducer Sheath Kit",
        "spec": "11 cm length with 21G echogenic needle and 0.018-inch wire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch J-Tip Guidewire",
        "spec": "150 cm length, soft tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Tumescent Infusion System",
        "name": "Klein Tumescent Infiltration Pump / Dedicated Syringes",
        "spec": "Foot-pedal automated peristaltic infiltration pump with 20G spinal needle",
        "standardStore": "Endovenous Suite"
      },
      {
        "category": "Ultrasound Scanner",
        "name": "High-Frequency Linear Vascular Ultrasound Probe",
        "spec": "7-15 MHz vascular probe with sterile sheath",
        "standardStore": "USG Suite"
      }
    ],
    "techniqueSteps": [
      "Place patient supine on operating table with reverse-Trendelenburg tilt to maximize saphenous vein engorgement. Pre-mark the course of the incompetent GSV under ultrasound.",
      "Sterilize the lower extremity from groin to ankle and drape under aseptic conditions.",
      "Under ultrasound guidance, puncture the GSV at the knee level (or lowest point of reflux) using a 21G echogenic needle, advance 0.018-inch wire, and insert the 6F introducer sheath.",
      "Introduce the 1470 nm radial-emitting laser fiber into the GSV and advance it cephalad toward the saphenofemoral junction (SFJ).",
      "CRITICAL SAFETY STEP: Using ultrasound in longitudinal and transverse views, position the red guiding aiming beam / fiber tip exactly 2.0 cm distal to the saphenofemoral junction (below the epigastric vein ostium) to prevent thermal injury to the common femoral vein.",
      "Prepare cold tumescent anesthetic solution (500 mL normal saline, 30 mL 2% lidocaine with adrenaline 1:100,000, and 10 mL 8.4% sodium bicarbonate).",
      "Under continuous ultrasound monitoring, infiltrate tumescent fluid into the perivenous saphenous sheath along the entire course of the vein, creating a circumferential hypoechoic halo >= 10 mm around the GSV.",
      "Verify: (a) Vein lumen is fully compressed onto the fiber, (b) Surrounding skin and sensory saphenous nerve are thermally insulated, (c) Fiber tip position remains strictly 2 cm below SFJ.",
      "Place the table in full Trendelenburg position to empty the venous blood from the leg.",
      "Don laser safety goggles. Activate the 1470 nm laser at 7-8 Watts and withdraw the radial fiber at a continuous steady speed of 1 mm/second using an automated pullback device or calibrated manual withdrawal, delivering a linear endovenous energy density (LEED) of 60-80 J/cm.",
      "Deactivate the laser upon reaching the sheath, remove the fiber and sheath, and confirm immediate non-compressibility and thrombotic occlusion of the GSV on duplex.",
      "Apply sterile dressings, class II graduated compression stockings (20-30 mmHg), and instruct patient to ambulate immediately for 30 minutes."
    ],
    "complications": [
      "Endothermal Heat-Induced Thrombosis (EHIT Class 1-4) extending into the common femoral vein",
      "Saphenous nerve paresthesia or cutaneous numbness (distal calf puncture)",
      "Skin thermal burns or hyperpigmentation due to inadequate perivenous tumescence",
      "Superficial thrombophlebitis of tributary varicose clusters",
      "Deep vein thrombosis or pulmonary embolism (< 0.5%)"
    ],
    "maayTariffInr": 30000,
    "vendorContacts": [
      "Biolitec Medical India (+91 98298 77665)",
      "NeoLaser Medical / Distributor (+91 98291 44332)",
      "Becton Dickinson India (+91 98294 22331)"
    ]
  },
  {
    "id": "rfa-gsv-ssv-reflux",
    "name": "Radiofrequency Ablation (RFA / ClosureFast) for GSV and Small Saphenous Vein (SSV) Reflux",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN016A",
    "rghsCode": "693 / 46",
    "icd10": "I83.891 (Varicose veins of unspecified lower extremity with other complications)",
    "indications": [
      "Incompetent Great Saphenous Vein (GSV) or Small Saphenous Vein (SSV) with reflux duration > 0.5 seconds on duplex",
      "Symptomatic CEAP C2-C6 disease with leg pain, heaviness, swelling, or stasis ulceration",
      "Recurrent SSV reflux with saphenopopliteal junction (SPJ) insufficiency",
      "Desire for uniform, temperature-controlled, segmental heating with minimal post-operative ecchymosis"
    ],
    "preOpCriteria": [
      "Pre-operative standing venous duplex mapping of GSV / SSV diameter, depth from skin, and junctional anatomy",
      "Deep venous system patency verified without acute or chronic deep venous obstruction",
      "Peripheral pulse examination documented (ABI >= 0.8)",
      "Absence of active localized skin infection at puncture site"
    ],
    "hardware": [
      {
        "category": "RFA Generator",
        "name": "ClosureFast Radiofrequency Generator",
        "spec": "Constant temperature feedback delivery unit (120 degrees Celsius)",
        "standardStore": "Endovenous Suite"
      },
      {
        "category": "RFA Catheter",
        "name": "ClosureFast Segmental RFA Catheter",
        "spec": "7F catheter with 7 cm heating coil element and thermocouple sensor",
        "standardStore": "Medtronic Consignment"
      },
      {
        "category": "Access Sheath",
        "name": "7F Dedicated Introducer Sheath",
        "spec": "11 cm length with 0.025-inch guidewire and 21G needle",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Tumescent Pump",
        "name": "Peristaltic Tumescent Infiltration Pump",
        "spec": "Adjustable flow rate with sterile foot pedal",
        "standardStore": "Endovenous Suite"
      },
      {
        "category": "Ultrasound System",
        "name": "Color Doppler Ultrasound Scanner",
        "spec": "High-frequency linear 7-12 MHz transducer",
        "standardStore": "USG Room"
      }
    ],
    "techniqueSteps": [
      "Position patient supine (for GSV) or prone (for SSV). Map the saphenous truncal course and tributary clusters with ultrasound.",
      "Prep and drape the limb. Access the target vein (GSV at knee or SSV at mid-calf) under ultrasound using a 21G needle and advance a 7F sheath.",
      "Introduce the 7F ClosureFast catheter into the vein and navigate the 7 cm heating element toward the junction.",
      "CRITICAL SAFETY STEP: For GSV, place the catheter tip exactly 2.0 cm distal to the saphenofemoral junction. For SSV, position the tip 2.0 cm distal to the saphenopopliteal junction (SPJ) under high-resolution ultrasound.",
      "Administer cold tumescent local anesthesia (lidocaine with adrenaline in chilled saline) circumferentially into the saphenous compartment under ultrasound guidance, achieving >= 10 mm tissue cuff around the vein.",
      "Place patient in Trendelenburg position. Re-verify tip position 2 cm from deep junction.",
      "Activate the RFA generator: Deliver a 20-second heating cycle at 120 degrees Celsius. Perform two 20-second cycles on the most proximal segment adjacent to the junction.",
      "Retract the catheter by precisely 7 cm matching the external shaft markings to align the heating coil with the next adjacent venous segment.",
      "Deliver one 20-second cycle per 7 cm segment along the entire length of the incompetent truncal vein down to the access site.",
      "Perform completion ultrasound: Confirm vein wall coaptation, absence of intraluminal flow, and patent deep vein (CFV or popliteal vein) without thrombus protrusion.",
      "Remove catheter, apply sterile compression dressing and class II graduated compression stockings, and ambulate immediately."
    ],
    "complications": [
      "Endothermal Heat-Induced Thrombosis (EHIT) into the popliteal or common femoral vein",
      "Sural nerve thermal injury / sensory paresthesia during SSV ablation (minimized by ablating only upper two-thirds of calf)",
      "Localized skin ecchymosis, induration, or phlebitis",
      "Cutaneous hyperpigmentation along the treated tract",
      "Rare arteriovenous fistula formation"
    ],
    "maayTariffInr": 32000,
    "vendorContacts": [
      "Medtronic Interventional (+91 98291 33445)",
      "Becton Dickinson India (+91 98294 22331)"
    ]
  },
  {
    "id": "ntnt-venous-ablation-clarivein-venaseal",
    "name": "Non-Thermal Non-Tumescent (NTNT) Venous Ablation: Mechanochemical Ablation (ClariVein) / Cyanoacrylate Glue (VenaSeal)",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN017A",
    "rghsCode": "693 / 47",
    "icd10": "I83.90 (Asymptomatic varicose veins of unspecified lower extremity)",
    "indications": [
      "Incompetent Great or Small Saphenous Vein reflux requiring endovenous treatment without tumescent anesthesia injections",
      "Patients with high anxiety, needle phobia, or intolerance to multiple tumescent needle punctures",
      "Tortuous saphenous veins located in close proximity to cutaneous nerves (e.g., distal GSV near saphenous nerve, SSV near sural nerve)",
      "Patients with contraindications to compression stockings (e.g., mild-to-moderate peripheral arterial disease with ABI 0.6-0.8)"
    ],
    "preOpCriteria": [
      "Duplex ultrasound mapping of saphenous anatomy, caliber (ideally 4 mm to 12 mm), and reflux parameters",
      "Confirmation of patent deep venous system",
      "Absence of known hypersensitivity to cyanoacrylate compounds or sclerosant agents (polidocanol/STS)",
      "Absence of acute superficial or deep venous thrombosis"
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "5F / 6F Micro-Access Introducer Kit",
        "spec": "11 cm length with 21G echogenic needle and 0.018-inch wire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Glue Delivery System",
        "name": "VenaSeal Closure System Dispenser and Delivery Catheter",
        "spec": "5F catheter with dedicated repeating dispenser gun and n-butyl cyanoacrylate adhesive",
        "standardStore": "Medtronic Consignment"
      },
      {
        "category": "MOCA System",
        "name": "ClariVein Mechanochemical Ablation Catheter",
        "spec": "2.63F motorized catheter with rotating dispersion wire tip",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Sclerosant Agent",
        "name": "Sodium Tetradecyl Sulfate (Fibrovein 3%) or Polidocanol (Asclera 2%)",
        "spec": "2 mL ampoules for liquid injection via ClariVein",
        "standardStore": "SMS Pharmacy"
      },
      {
        "category": "Ultrasound System",
        "name": "High-Resolution Linear Vascular Ultrasound Unit",
        "spec": "10-15 MHz probe with sterile cover",
        "standardStore": "USG Suite"
      }
    ],
    "techniqueSteps": [
      "Position patient supine or prone. Sterilize and drape the extremity under sterile precautions.",
      "Under ultrasound guidance, puncture the GSV or SSV using a 21G needle and place the dedicated 5F delivery sheath.",
      "FOR CYANOACRYLATE GLUE (VenaSeal): Advance the 5F delivery catheter over a 0.035-inch wire and position the catheter tip precisely 5.0 cm distal to the saphenofemoral junction under continuous ultrasound visualization.",
      "CRITICAL SAFETY STEP: Apply firm compression with the ultrasound probe over the saphenofemoral junction to prevent glue migration into the common femoral vein.",
      "Deliver the initial bolus of 0.10 mL cyanoacrylate glue, hold firm ultrasound probe compression at the junction for 3 full minutes to ensure polymerization.",
      "Retract the catheter 3 cm, deliver subsequent 0.09 mL glue aliquots every 3 cm down the vein, applying manual compression for 30 seconds after each injection.",
      "FOR MECHANOCHEMICAL ABLATION (ClariVein): Position the rotating tip 2.0 cm below the SFJ. Activate the motor drive unit to rotate the tip at 3,500 RPM to disrupt the endothelium, while simultaneously infusing 2-3% Polidocanol/STS at 1 mL/minute during steady manual withdrawal.",
      "Confirm total occlusion and complete absence of flow in the treated saphenous vein on completion duplex ultrasound.",
      "Remove hardware, apply adhesive bandage; no tumescent anesthesia or post-procedure compression stockings required for VenaSeal."
    ],
    "complications": [
      "Glue extension into the common femoral vein or popliteal vein (EGIT - Endovenous Glue-Induced Thrombosis)",
      "Transient phlebitic inflammatory reaction (redness, tenderness along vein tract in 10-15% of glue cases)",
      "Cutaneous hypersensitivity reaction to cyanoacrylate polymer",
      "Hyperpigmentation or localized induration",
      "Distal micro-embolization"
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Interventional (+91 98291 33445)",
      "Vascular Solutions / Merit (+91 98299 11223)"
    ]
  },
  {
    "id": "ugfs-foam-sclerotherapy",
    "name": "Ultrasound-Guided Foam Sclerotherapy (UGFS) with Polidocanol / STS for Venous Leg Ulcers and Recurrent Varices",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN018A",
    "rghsCode": "693 / 48",
    "icd10": "I83.009 (Varicose veins of unspecified lower extremity with ulcer)",
    "indications": [
      "Active or healed venous leg ulcers (CEAP C5-C6) with underlying incompetent perforator veins or tributary varices",
      "Recurrent varicose veins following previous surgical stripping or endovenous thermal ablation",
      "Extensive tortuous superficial tributary varicose clusters unsuitable for endovenous catheter traversal",
      "Vascular malformations or venous lakes with localized venous hypertension"
    ],
    "preOpCriteria": [
      "Duplex ultrasound mapping identifying incompetent perforator veins, tributary networks, and patency of deep venous system",
      "Absence of known patent foramen ovale (PFO) or history of migraine with aura",
      "Absence of active deep vein thrombosis or severe peripheral arterial disease (ABI >= 0.8)",
      "Informed consent regarding transient visual disturbances and cutaneous hyperpigmentation risks"
    ],
    "hardware": [
      {
        "category": "Sclerosant Drug",
        "name": "Polidocanol (Asclera 1%-3%) or Sodium Tetradecyl Sulfate (STS 1%-3%)",
        "spec": "2 mL ampoules",
        "standardStore": "SMS Pharmacy"
      },
      {
        "category": "Foam Generation Device",
        "name": "Tessari Double-Syringe System with 3-Way Stopcock / Filter",
        "spec": "Two 5 mL luer-lock syringes connected via 0.2 um bacterial air filter and 3-way connector",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Puncture Needles",
        "name": "23G - 25G Butterfly Needles / Echogenic Micropuncture Needles",
        "spec": "Short bevel, tubing adapter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Ultrasound System",
        "name": "Color Doppler Ultrasound Scanner",
        "spec": "High-frequency 10-15 MHz linear probe",
        "standardStore": "USG Suite"
      },
      {
        "category": "Compression System",
        "name": "Multi-layer Elastic Compression Bandaging / Class II Stockings",
        "spec": "30-40 mmHg high-compression stockings",
        "standardStore": "Surgical Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with leg slightly elevated. Sterilize the target ulcer margin, medial calf, or varicose clusters.",
      "Under real-time ultrasound guidance, cannulate the targeted incompetent tributary or perforator vein using a 23G or 25G butterfly needle. Confirm intraluminal position by spontaneous dark venous blood return.",
      "Prepare Tessari foam: Mix 1 part liquid sclerosant (e.g., 2% or 3% Polidocanol) with 4 parts sterile room air (or CO2/O2 mix) using 20 rapid pumping cycles between two luer-lock syringes through a 3-way stopcock until dense, micro-bubble foam is created.",
      "Limit total foam volume to a maximum of 10 mL per session to prevent neurological or systemic micro-embolic complications.",
      "Slowly inject 2-4 mL of micro-foam into the target vein under real-time ultrasound guidance.",
      "Observe the hyperechoic foam displacement of intraluminal blood, endovenous spasm, and ensure the foam does not freely flow into the deep venous system (common femoral or popliteal vein).",
      "Apply immediate manual massage and compression over the treated cluster to disperse foam throughout the varices.",
      "Cannulate additional tributary clusters if needed, keeping within the 10 mL total foam dose limit.",
      "Apply eccentric foam pads over the injected veins, followed by multi-layer compression bandaging or 30-40 mmHg compression stockings.",
      "Instruct patient to walk actively for 20-30 minutes immediately following the procedure and wear compression stockings day and night for 7-14 days."
    ],
    "complications": [
      "Skin hyperpigmentation (hemosiderin staining) along the treated veins (10-20%)",
      "Transient visual disturbances (scintillating scotoma) or migraine-like headache due to micro-bubble paradoxical embolization",
      "Skin necrosis or ulceration if sclerosant extravasates into subcutaneous tissue or is inadvertently injected into an intradermal arteriole",
      "Superficial thrombophlebitis requiring needle evacuation of trapped coagulum",
      "Deep vein thrombosis (< 1%)"
    ],
    "maayTariffInr": 18000,
    "vendorContacts": [
      "Chemopharma / STD Pharmaceuticals (+91 98290 44321)",
      "Biolitec Medical India (+91 98298 77665)"
    ]
  },
  {
    "id": "percutaneous-nephrostomy-pcn",
    "name": "Percutaneous Nephrostomy (PCN): Ultrasound and Fluoroscopy Guided Posterior Lower Pole Calyx Puncture and 8.5F/10F Catheter",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-NV019A",
    "rghsCode": "693 / 49",
    "icd10": "N13.9 (Obstructive and reflux uropathy, unspecified)",
    "indications": [
      "Moderate-to-severe obstructive hydronephrosis secondary to calculus, malignant pelvic tumor (cervix, bladder, prostate), or retroperitoneal fibrosis",
      "Urosepsis or pyonephrosis complicating ureteral obstruction requiring emergency decompression",
      "Urinary diversion for ureteral fistula, leak, or iatrogenic transection",
      "Access tract creation for subsequent antegrade ureteral stenting or percutaneous stone extraction"
    ],
    "preOpCriteria": [
      "Ultrasound or non-contrast CT documenting hydronephrosis and pelvicalyceal system dilation",
      "Coagulation screen: Platelet count >= 50,000/uL, INR <= 1.5",
      "Broad-spectrum intravenous antibiotics initiated prior to puncture, especially if pyonephrosis is suspected",
      "Patient hemodynamic stability and blood pressure optimized"
    ],
    "hardware": [
      {
        "category": "Access Needle",
        "name": "18G Trocar / 21G Chiba Echogenic Needle",
        "spec": "15 cm - 20 cm length, calibrated depth markings",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch J-Tip Heavy-Duty Rosen / Amplatz Guidewire",
        "spec": "150 cm length, stiff body, soft J-tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Fascial Dilators",
        "name": "Biliary / Renal Fascial Dilator Set",
        "spec": "6F, 8F, 10F, 12F radiopaque polypropylene dilators",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Nephrostomy Catheter",
        "name": "8.5F - 10.2F Locking Pigtail Nephrostomy Catheter (Cook / Boston / BD)",
        "spec": "Hydrophilic coated, suture-locking loop with connecting tube",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Contrast Medium",
        "name": "Non-ionic iodinated contrast medium (Iohexol 300)",
        "spec": "50 mL bottle diluted 50:50 with normal saline",
        "standardStore": "SMS Pharmacy"
      },
      {
        "category": "Drainage Bag",
        "name": "Sterile Urine Collection Drainage Bag",
        "spec": "2000 mL with anti-reflux valve",
        "standardStore": "Surgical Store"
      }
    ],
    "techniqueSteps": [
      "Position patient prone (or prone-oblique with ipsilateral side elevated 30 degrees). Sterilize and drape the flank under strict aseptic technique.",
      "Identify the posterior lower pole calyx of the kidney using high-resolution ultrasound (the lower pole posterior calyx provides an avascular puncture route along Brodel line, avoiding major interlobar vessels).",
      "Infiltrate local anesthesia (1% lidocaine) from the skin down to the renal capsule under real-time ultrasound guidance.",
      "Under continuous ultrasound monitoring, advance an 18G needle (or 21G needle with 0.018-inch wire system) through the retroperitoneal fat and renal parenchyma into the chosen lower pole posterior calyx.",
      "Remove inner stylet; confirm position by aspirating clear urine or purulent fluid. Send urine for microbiological culture and Gram stain.",
      "Under fluoroscopic visualization, gently inject 3-5 mL of dilute non-ionic contrast medium (nephrostogram) to map the calyces, renal pelvis, and pelvi-ureteric junction.",
      "Advance a 0.035-inch stiff Rosen or Amplatz guidewire through the needle and coil it securely within the renal pelvis or upper ureter.",
      "Make a 3-4 mm skin nick at the puncture site. Perform serial fascial tract dilatation using 6F, 8F, and 10F dilators over the guidewire.",
      "Advance an 8.5F or 10.2F locking pigtail nephrostomy catheter over the wire until the loop is positioned centrally in the renal pelvis.",
      "Withdraw the guidewire and stiffening cannula. Pull the locking drawstring to form the complete pigtail loop, anchor the suture mechanism, and verify proper loop formation under fluoroscopy.",
      "Perform a final nephrostogram demonstrating prompt contrast drainage through the catheter without parenchymal extravasation.",
      "Secure the catheter to the flank skin using 2-0 silk suture and a dedicated drain fixation dressing (e.g., Drain-Guard / Statlock). Connect to a sterile urine bag."
    ],
    "complications": [
      "Renal parenchymal or interlobar arterial injury resulting in severe hematuria or retroperitoneal hematoma",
      "Pneumothorax or hemothorax (if intercostal puncture above the 11th/12th rib is performed)",
      "Bacteremia, septic shock, or worsening urosepsis secondary to high-pressure contrast injection",
      "Catheter dislodgement or kinking",
      "Inadvertent puncture of colon, spleen, or liver"
    ],
    "maayTariffInr": 18000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 44556)",
      "Boston Scientific India (+91 98290 11223)",
      "Becton Dickinson India (+91 98294 22331)"
    ]
  },
  {
    "id": "antegrade-dj-ureteral-stent",
    "name": "Antegrade Double-J (DJ) Ureteral Stent Placement for Benign or Malignant Ureteric Obstruction",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-NV020A",
    "rghsCode": "693 / 50",
    "icd10": "N13.1 (Hydronephrosis with ureteral stricture)",
    "indications": [
      "Ureteral obstruction (benign stricture, calculus, or advanced pelvic malignancy) refractory to retrograde cystoscopic stent placement",
      "Distorted lower urinary tract anatomy (neobladder, ileal conduit, severe prostate enlargement) precluding retrograde access",
      "Ureteral fistulae (ureterovaginal, ureterocutaneous) or iatrogenic operative ureteral injury requiring internal stenting",
      "Internalization of drainage in patients with established percutaneous nephrostomy"
    ],
    "preOpCriteria": [
      "Established PCN access or planned simultaneous percutaneous nephrostomy puncture",
      "Nephrostogram detailing the location, length, and degree of ureteral obstruction",
      "Coagulation profile within acceptable limits (INR <= 1.5, Platelets >= 60,000/uL)",
      "Urinary tract infection treated or controlled with appropriate systemic antibiotics"
    ],
    "hardware": [
      {
        "category": "Vascular / Urologic Sheath",
        "name": "7F - 8F Ansel / Flexor Introducer Sheath",
        "spec": "25 cm - 45 cm length, radiopaque tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Hydrophilic Glidewire Angled & 0.035-inch Amplatz Stiff Wire",
        "spec": "260 cm length, stiff body",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Angiographic Catheter",
        "name": "5F Kumpe / Cobra C2 / Headhunter Catheter",
        "spec": "65 cm - 100 cm length",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Ureteral Stent Kit",
        "name": "Universa / Cook Antegrade Double-J Ureteral Stent Set",
        "spec": "6F - 8F caliber x 22 cm - 28 cm length, multi-sidehole polyurethane stent with pusher and release mechanism",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Safety Catheter",
        "name": "8.5F Locking Pigtail Nephrostomy Catheter (Optional temporary safety drain)",
        "spec": "Standard pigtail catheter for concurrent 24-48h nephrostomy safety decompression",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Sterilize and drape the flank around the existing PCN tract (or achieve fresh ultrasound-guided mid/lower calyx access).",
      "Perform an antegrade nephrostogram to identify the pelvi-ureteric junction, ureteral course, and point of obstruction.",
      "Advance a 5F angled hydrophilic catheter and 0.035-inch Glidewire through the PCN tract into the renal pelvis and manipulate down the ureter.",
      "Carefully probe and cross the site of ureteric obstruction/stricture with the hydrophilic wire into the urinary bladder.",
      "Confirm intravesical location by advancing the wire until it coils freely within the bladder lumen, and verify by contrast injection.",
      "Exchange over a 260 cm exchange-length stiff wire for a 7F or 8F vascular sheath, advancing the sheath tip past the stricture into the bladder.",
      "Measure the required stent length (typically 24 cm to 26 cm) using bony landmarks (L1-L2 to pubic symphysis) or calibrated marker catheter.",
      "Advance the double-J ureteral stent over the wire through the sheath until the distal pigtail loop is positioned inside the bladder lumen.",
      "Retract the sheath into the renal pelvis while holding the stent in place with the pusher catheter, deploying the distal loop into the bladder.",
      "Under fluoroscopic monitoring, withdraw the guidewire past the renal pelvis to allow the proximal pigtail loop to reform completely within the renal pelvis.",
      "Perform check contrast injection: Confirm excellent position of both distal (bladder) and proximal (renal pelvis) J-loops, with prompt bladder emptying.",
      "Optionally place a temporary 8.5F safety nephrostomy tube (capped for 24 hours) or remove tract hardware and apply sterile pressure dressing."
    ],
    "complications": [
      "Ureteral perforation or false tract creation during crossing of tight strictures",
      "Stent malposition (distal loop deployed in ureter instead of bladder, or proximal loop displaced into parenchyma)",
      "Severe bladder spasm and hematuria from an oversized intravesical loop",
      "Transient bacteremia or urosepsis",
      "Early stent encrustation or occlusion"
    ],
    "maayTariffInr": 25000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 44556)",
      "Boston Scientific India (+91 98290 11223)",
      "Becton Dickinson India (+91 98294 22331)"
    ]
  },
  {
    "id": "pcnl-access-tract-dilation",
    "name": "Percutaneous Nephrolithotomy (PCNL) Access Tract Creation with Balloon or Serial Amplatz Dilation up to 30F",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-NV021A",
    "rghsCode": "693 / 51",
    "icd10": "N20.0 (Calculus of kidney)",
    "indications": [
      "Large staghorn or complex multi-calyceal renal calculi (> 2 cm diameter)",
      "Lower pole renal calculi > 1.5 cm with unfavourable lower pole infundibular anatomy refractory to ESWL and RIRS",
      "Calculi in caliceal diverticula requiring direct percutaneous puncture and tract establishment",
      "Cooperative endourology / interventional radiology dual-procedure stone clearance"
    ],
    "preOpCriteria": [
      "High-resolution non-contrast CT abdomen (CT KUB) with 3D bone and kidney reconstruction delineating stone burden, retrorenal colon position, and calyceal orientation",
      "Negative pre-procedure urine culture or documented sensitivity-specific antibiotic therapy",
      "Coagulation screen within normal limits (INR <= 1.3, Platelets >= 80,000/uL)",
      "Retrograde ureteral catheter placed by urologist to opacify the pelvicalyceal system with dilute contrast/air"
    ],
    "hardware": [
      {
        "category": "Access Needle",
        "name": "18G Echogenic Diamond-Tip Percutaneous Needle",
        "spec": "20 cm length, two-part trocar needle",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Amplatz Extra-Stiff Guidewire & 0.035-inch Safety J-Wire",
        "spec": "150 cm length, stiff shaft, 3 cm floppy tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Nephrostomy Balloon Dilator",
        "name": "NephroMax / Ultra-Thin High-Pressure Balloon Dilator Kit",
        "spec": "30F outer diameter x 12 cm balloon length, rated burst pressure 17-20 atm, with 30F Amplatz working sheath",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Serial Dilators",
        "name": "Amplatz Renal Dilator Set",
        "spec": "8F to 30F radiopaque dilators with matching working sheaths",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Contrast Media",
        "name": "Dilute Non-Ionic Contrast (Iohexol 300 / Normal Saline 1:1)",
        "spec": "100 mL bottle",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Position patient prone with abdomen supported by gel bolsters under general anesthesia. Clean and drape the operative flank.",
      "Under fluoroscopic guidance, inject dilute contrast and air through the retrograde ureteral catheter to generate an air-contrast pyelogram defining anterior and posterior calyces.",
      "Select the optimal targeted calyx (typically posterior lower pole or posterior middle pole calyx) directly aligned with the stone axis to provide straight rigid nephroscope access.",
      "Under combined ultrasound and biplane fluoroscopic guidance (\"bulls-eye\" technique at 30-degree cranial angulation), advance an 18G diamond-tip needle along the avascular line of Brodel into the target calyx.",
      "Confirm caliceal entry by needle aspiration of urine/contrast and free contrast flow into the renal pelvis.",
      "Advance a 0.035-inch stiff Amplatz working guidewire down into the renal pelvis and coil it deeply down the ureter.",
      "Place a second parallel 0.035-inch safety guidewire using a dual-lumen catheter.",
      "Incise the skin and dorsolumbar fascia (approx. 10 mm incision) adjacent to the guidewires.",
      "Perform primary tract dilation over the working wire using an 8F/10F fascial dilator.",
      "Advance the 30F high-pressure NephroMax balloon catheter over the working wire until the radiopaque markers bridge the caliceal neck and skin tract.",
      "Inflate the balloon to 17-20 atmospheres using the dedicated inflation syringe, fully effacing the renal parenchymal and fascial waisting.",
      "Slide the 30F Amplatz working sheath smoothly over the fully inflated balloon directly into the target calyx.",
      "Deflate and remove the balloon catheter, leaving the 30F Amplatz sheath and safety wire in place.",
      "Hand over the established 30F percutaneous renal access tract to the surgical endourology team for rigid nephroscopy and ultrasonic/laser lithotripsy."
    ],
    "complications": [
      "Severe arterial hemorrhage from interlobar or segmental vessel injury requiring urgent transcatheter embolization",
      "Pleural puncture causing hydrothorax or pneumothorax (especially with 10th or 11th intercostal punctures)",
      "Inadvertent retrorenal colonic perforation",
      "Pelvicalyceal tear or extravasation leading to retroperitoneal urinoma",
      "Septic shock secondary to high-pressure irrigation in an infected system"
    ],
    "maayTariffInr": 35000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 11223)",
      "Cook Medical India (+91 98292 44556)",
      "Becton Dickinson India (+91 98294 22331)"
    ]
  },
  {
    "id": "percutaneous-ureteral-stricture-balloon-dilation",
    "name": "Percutaneous Balloon Dilation of Benign Ureteral Stricture with Cutting / High-Pressure Balloon and Temporary Stenting",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-NV022A",
    "rghsCode": "693 / 52",
    "icd10": "N13.5 (Crossing vessel and stricture of ureter without hydronephrosis)",
    "indications": [
      "Benign ureteral stricture secondary to impacted calculus, previous ureteroscopy, or pelvic radiotherapy",
      "Benign stricture of uretero-pelvic junction (secondary UPJ obstruction) after failed pyeloplasty",
      "Benign uretero-enteric anastomotic stricture (following Bricker ileal conduit or neobladder reconstruction)",
      "Short-segment stricture (< 2 cm length) in a patient unfit for open or laparoscopic ureteral re-implantation"
    ],
    "preOpCriteria": [
      "CT urography or antegrade nephrostogram measuring stricture length (ideally < 2 cm), location, and vascular relations (ruling out crossing vessels)",
      "Clear urine culture or targeted pre-procedural antibiotic therapy",
      "Normal coagulation profile (INR <= 1.4, Platelets >= 70,000/uL)",
      "Patient consented for temporary large-bore stenting (8F-10F) for 6 to 8 weeks post-dilation"
    ],
    "hardware": [
      {
        "category": "Vascular / Urologic Sheath",
        "name": "8F - 9F Flexor Ansel Guiding Sheath",
        "spec": "35 cm - 45 cm length, radiopaque tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Amplatz Super Stiff Guidewire & 0.035-inch Radiofocus Glidewire",
        "spec": "260 cm length, stiff body",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Catheter",
        "name": "5F Kumpe / Cobra Catheter",
        "spec": "65 cm length",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Cutting / High-Pressure Balloon",
        "name": "Boston Scientific Peripheral Cutting Balloon / Conquest High-Pressure Balloon",
        "spec": "6 mm - 8 mm diameter x 20 mm - 40 mm length, 0.035-inch compatible, burst pressure up to 24-30 atm",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endopyelotomy Stent",
        "name": "InLay / Universa Dual-Diameter Ureteral Stent",
        "spec": "8/12F or 7/14F tapered endopyelotomy/endoureterotomy stent x 24-28 cm length",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Access the pelvicalyceal system through the existing percutaneous nephrostomy tract (or achieve fresh upper/middle calyx puncture for direct ureteral alignment).",
      "Perform an antegrade pyeloureterogram to define the exact margins, length, and caliber of the ureteral stricture.",
      "Advance a 5F angled catheter and 0.035-inch hydrophilic Glidewire across the stricture into the bladder or bowel conduit.",
      "Exchange over a 260 cm Amplatz stiff wire for an 8F guiding sheath, positioning the sheath tip immediately proximal to the stricture.",
      "Advance a 6 mm to 8 mm high-pressure or peripheral cutting balloon across the stricture under fluoroscopy, centering the balloon waist across the narrowest point.",
      "Inflate the balloon slowly with a pressure manometer up to 18-24 atmospheres until the waist is completely and smoothly effaced.",
      "Maintain full balloon inflation for 2 to 3 minutes to achieve sustained radial mechanical stretch and disruption of circumferential scar tissue.",
      "Deflate the balloon and perform check contrast injection to rule out transmural rupture or extravasation.",
      "Deploy a large-bore ureteral stent (e.g., 8F-10F standard DJ stent or 8/12F endopyelotomy stent with expanded caliber across the dilated zone) to scaffold the ureter during healing.",
      "Position the distal loop in the bladder and proximal loop in the renal pelvis.",
      "Place a temporary 8.5F safety nephrostomy tube, connect to closed drainage for 48 hours, and plan stent removal in 6-8 weeks."
    ],
    "complications": [
      "Full-thickness ureteral laceration or avulsion requiring urgent nephrostomy diversion or surgical repair",
      "Severe hematuria from injury to adjacent crossing vessels (e.g., iliac vessels at pelvi-brim)",
      "Stricture recurrence requiring repeat intervention or surgical reconstruction",
      "Urosepsis from infected urine extravasation",
      "Stent migration or painful bladder tenesmus"
    ],
    "maayTariffInr": 28000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 11223)",
      "Cook Medical India (+91 98292 44556)",
      "Becton Dickinson India (+91 98294 22331)"
    ]
  },
  {
    "id": "percutaneous-radiologic-gastrostomy-prg",
    "name": "Percutaneous Radiologic Gastrostomy (PRG) with T-Fastener Gastropexy and 14F-18F Balloon-Retained Tube",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-NV023A",
    "rghsCode": "693 / 53",
    "icd10": "Z93.1 (Gastrostomy status)",
    "indications": [
      "Long-term enteral nutritional support (> 4-6 weeks) in patients with severe dysphagia due to head and neck cancer, esophageal obstruction, or neurogenic disorders (ALS, stroke, traumatic brain injury)",
      "Failed or contraindicated percutaneous endoscopic gastrostomy (PEG) due to severe trismus, pharyngeal tumor obstruction, or inability to transilluminate",
      "Gastric decompression in chronic mechanical bowel obstruction secondary to peritoneal carcinomatosis",
      "Palliative venting gastrostomy for intractable nausea/vomiting in terminal intra-abdominal malignancy"
    ],
    "preOpCriteria": [
      "Cross-sectional imaging (CT abdomen) confirming favorable gastric anatomy and ruling out severe hepatomegaly or interposition of transverse colon across the anterior gastric wall",
      "Platelet count >= 50,000/uL, INR <= 1.5",
      "Nasogastric or orogastric tube placed for gastric insufflation (or direct needle insufflation planned)",
      "Patient fasted for at least 8 hours; prophylactic intravenous antibiotic administered 30 minutes prior to procedure"
    ],
    "hardware": [
      {
        "category": "Insufflation Catheter",
        "name": "Nasogastric Tube / 5F VanSonnenberg Insufflation Catheter",
        "spec": "12F - 14F NGT or small bore catheter for stomach air distension",
        "standardStore": "Surgical Store"
      },
      {
        "category": "Gastropexy Kit",
        "name": "Cook / Avanos Cope Gastropexy T-Fastener Set",
        "spec": "Three or four 19G slotted needles preloaded with nylon suture and absorbable T-bars",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Access Needle",
        "name": "18G Trocar Puncture Needle",
        "spec": "7 cm length with bevel marker",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Heavy-Duty Rosen / Amplatz Guidewire",
        "spec": "150 cm length, stiff body, 1.5 mm J-tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Serial Dilators",
        "name": "Fascial Dilator Set",
        "spec": "8F, 10F, 12F, 14F, 16F, 18F radiopaque polypropylene dilators",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Gastrostomy Tube",
        "name": "14F - 18F Balloon-Retained Radiologic Gastrostomy Feeding Tube",
        "spec": "Silicone tube with 5 mL retention balloon and external retention bolster",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Contrast Media",
        "name": "Non-ionic contrast medium (Iohexol 300)",
        "spec": "50 mL bottle",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Position patient supine. Insufflate 500 to 1000 mL of room air into the stomach via the nasogastric tube to achieve massive gastric distension and push the transverse colon downward.",
      "Under fluoroscopic observation, evaluate the gastric contour and rule out overlying colon or left hepatic lobe.",
      "Identify the puncture site: Puncture target is located on the mid-anterior gastric body, midway between greater and lesser curvatures, approximately 3-4 cm below the costal margin.",
      "Infiltrate skin and subcutaneous tissues generously with 1% lidocaine.",
      "Deploy 3 or 4 gastropexy T-fasteners in a triangular or square configuration around the planned central puncture site under fluoroscopy. Pull tension on the nylon sutures to appose the anterior gastric wall firmly against the anterior parietal peritoneum, securing with retention crimps.",
      "Puncture the central target within the gastropexy perimeter using an 18G trocar needle directed toward the gastric antrum and pylorus.",
      "Confirm intraluminal gastric placement by free aspiration of air and injection of 10 mL dilute contrast, verifying rugal fold mucosal coating.",
      "Advance a 0.035-inch heavy-duty Rosen or Amplatz guidewire through the needle and coil it generously within the gastric antrum/duodenum.",
      "Make a 5 mm skin incision between the T-fasteners. Dilate the tract sequentially over the wire from 8F to 18F using lubricated fascial dilators.",
      "Advance a 14F to 18F balloon-retained silicone gastrostomy tube over the guidewire into the stomach.",
      "Inflate the retention balloon with 5 mL sterile water and pull the tube gently back until the balloon snugs securely against the anterior gastric wall.",
      "Slide the external bolster down against the skin, locking the tube without excessive tension.",
      "Perform check contrast study through the gastrostomy tube lumen, confirming brisk intragastric contrast dispersion without any peritoneal leak.",
      "Fasten dressings; initiate sterile water flushes at 6 hours, followed by enteral liquid feeding at 12-24 hours. Release T-fastener sutures after 10-14 days."
    ],
    "complications": [
      "Peritonitis secondary to premature tube dislodgement or loss of gastropexy before tract maturation",
      "Inadvertent puncture of transverse colon leading to gastrocolic fistula",
      "Puncture of the left hepatic lobe or superior/inferior epigastric arteries with hemoperitoneum",
      "Peristomal skin excoriation, maceration, or localized cellulitis",
      "Aspiration pneumonia during gastric air distension"
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Avanos Medical India (+91 98290 88771)",
      "Cook Medical India (+91 98292 44556)",
      "Boston Scientific India (+91 98290 11223)"
    ]
  },
  {
    "id": "percutaneous-radiologic-gastrojejunostomy-prgj",
    "name": "Percutaneous Radiologic Gastrojejunostomy (PRGJ) for Post-Pyloric Feeding in Gastric Outlet Obstruction",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-NV024A",
    "rghsCode": "693 / 54",
    "icd10": "K31.1 (Adult hypertrophic pyloric stenosis / Gastric outlet obstruction)",
    "indications": [
      "Severe recurrent pulmonary aspiration or intractable gastroesophageal reflux disease (GERD) complicating standard gastrostomy feeding",
      "Gastric outlet obstruction (GOO) secondary to unresectable gastric or duodenal cancer where post-pyloric enteral nutrition is needed",
      "Severe diabetic gastroparesis or post-surgical gastric atony refractory to prokinetic pharmacotherapy",
      "Simultaneous gastric decompression (via gastric port) and enteral feeding (via jejunal port) in a single access device"
    ],
    "preOpCriteria": [
      "Abdominal CT detailing pyloroduodenal anatomy, patency of proximal jejunum, and absence of extensive small bowel carcinomatosis",
      "Platelet count >= 50,000/uL, INR <= 1.5",
      "Prophylactic intravenous antibiotics administered 30 minutes prior",
      "Nasogastric tube in place for stomach air insufflation"
    ],
    "hardware": [
      {
        "category": "Gastropexy Kit",
        "name": "Cope Gastropexy T-Fastener Set",
        "spec": "Three 19G preloaded T-fasteners with retainers",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Hydrophilic Glidewire (260 cm) & Amplatz Super Stiff Wire (260 cm)",
        "spec": "Stiff angled shaft, high lubricity",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Directional Catheter",
        "name": "5F Kumpe / Multipurpose / Headhunter Catheter",
        "spec": "100 cm length, braided shaft",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Serial Dilators",
        "name": "Tear-Away Sheath / Dilator Set",
        "spec": "16F - 18F Peel-Away introducer sheath",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "GJ Feeding Tube",
        "name": "Cook / Avanos 16F/9F or 18F/9F Gastrojejunostomy Tube",
        "spec": "Dual-lumen silicone tube with 16F/18F gastric decompression port, 9F weighted jejunal extension limb (70-90 cm), and 5 mL retention balloon",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Contrast Media",
        "name": "Non-ionic contrast (Iohexol 300)",
        "spec": "50 mL bottle",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Insufflate stomach with 500-800 mL room air via NGT. Under fluoroscopic guidance, deploy 3 gastropexy T-fasteners over the anterior gastric body angled toward the antrum.",
      "Puncture centrally within the gastropexy perimeter using an 18G needle, aiming the tip directly toward the pyloric canal.",
      "Advance a 5F angled directional catheter and 0.035-inch hydrophilic Glidewire through the needle into the gastric antrum.",
      "Carefully manipulate the wire and catheter across the pylorus, through the duodenal sweep (C-loop), past the Ligament of Treitz, and deeply into the proximal jejunal loops.",
      "Exchange for a 260 cm 0.035-inch Amplatz super-stiff guidewire, maintaining deep jejunal wire purchase.",
      "Make an 8 mm skin incision and dilate the tract to 18F using serial dilators or an 18F peel-away sheath over the stiff wire.",
      "Advance the dedicated gastrojejunostomy tube over the wire, carefully steering the long 9F jejunal feeding limb through the stomach, pylorus, and duodenum until its tip lies well beyond the Ligament of Treitz.",
      "Peel away the introducer sheath, inflate the gastric retention balloon with 5 mL sterile water, and gently pull the tube back until the balloon anchors against the anterior stomach wall.",
      "Lock the external skin bolster in position.",
      "Perform dual-port fluoroscopic contrast validation: Inject contrast through the jejunal port to verify brisk peristaltic flow down the jejunum without retrograde duodenal reflux. Inject contrast through the gastric port to confirm stomach decompression capability.",
      "Secure external dressings; initiate continuous post-pyloric pump feeding at 20 mL/hr after 6-12 hours, titrating up to target caloric goal."
    ],
    "complications": [
      "Retrograde displacement or curling of the jejunal limb back into the stomach causing vomiting/aspiration",
      "Small bowel volvulus or intussusception along the jejunal catheter",
      "Peritonitis or peri-stomal leakage",
      "Catheter lumen occlusion (requires frequent flushing protocols with warm water)",
      "Transient ileus or localized jejunal perforation"
    ],
    "maayTariffInr": 28000,
    "vendorContacts": [
      "Avanos Medical India (+91 98290 88771)",
      "Cook Medical India (+91 98292 44556)",
      "Boston Scientific India (+91 98290 11223)"
    ]
  },
  {
    "id": "percutaneous-cecostomy-colostomy",
    "name": "Percutaneous Cecostomy / Colostomy Catheter Placement for Colonic Decompression in Ogilvie Syndrome",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-NV025A",
    "rghsCode": "693 / 55",
    "icd10": "K59.89 (Other specified functional intestinal disorders - Ogilvie syndrome)",
    "indications": [
      "Acute Colonic Pseudo-Obstruction (Ogilvie Syndrome) with massive cecal distension (cecal diameter >= 10-12 cm) failing conservative therapy and intravenous neostigmine",
      "High risk of impending cecal ischemia and perforation where colonoscopic decompression has failed or is contraindicated",
      "Unresectable distal large bowel obstruction in poor-surgical-candidate palliative patients requiring urgent colonic venting",
      "Antegrade colonic enema (Malone antegrade continence enema alternative) for intractable fecal incontinence or neurogenic bowel"
    ],
    "preOpCriteria": [
      "CT abdomen confirming massive cecal dilation without mechanical bowel obstruction or pneumoperitoneum",
      "Careful CT evaluation confirming anterior abdominal wall contact of the cecum without overlying small bowel loops",
      "Platelet count >= 50,000/uL, INR <= 1.5",
      "Broad-spectrum gram-negative and anaerobic antimicrobial coverage administered"
    ],
    "hardware": [
      {
        "category": "Colopexy Kit",
        "name": "Cope Gastropexy / Colopexy T-Fastener Set",
        "spec": "Four 19G preloaded T-fasteners with suture locks",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Puncture Needle",
        "name": "18G Trocar Needle",
        "spec": "7 cm length with stylet",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Heavy-Duty Rosen Guidewire",
        "spec": "150 cm length, stiff body",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Serial Dilators",
        "name": "Fascial Dilator Set",
        "spec": "8F, 10F, 12F, 14F dilators",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Cecostomy Catheter",
        "name": "12F - 14F Balloon-Retained Retention Catheter / Locking Pigtail Catheter",
        "spec": "Large lumen silicone catheter with sideholes",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Ultrasound System",
        "name": "Curved Array Ultrasound Transducer",
        "spec": "3.5-5 MHz abdominal probe",
        "standardStore": "USG Suite"
      }
    ],
    "techniqueSteps": [
      "Position patient supine. Clean and drape the right lower quadrant of the abdomen.",
      "Under combined real-time ultrasound and fluoroscopic guidance, identify the distended, gas-filled cecum and confirm absence of intervening small bowel loops or mesenteric vessels.",
      "Infiltrate skin and abdominal wall down to the parietal peritoneum with 1% lidocaine.",
      "Deploy 3 to 4 colopexy T-fasteners in a square configuration through the abdominal wall into the cecal lumen under fluoroscopy. Fasten the sutures to anchor the anterior cecal wall securely against the anterior peritoneum.",
      "Puncture the central cecal target between the T-fasteners with an 18G trocar needle.",
      "Aspirate foul gas and liquid stool to verify intraluminal position, and inject 10 mL dilute contrast to demonstrate cecal mucosal haustration.",
      "Advance a 0.035-inch heavy-duty Rosen wire through the needle and coil it within the ascending colon.",
      "Dilate the tract sequentially over the wire up to 12F or 14F using lubricated fascial dilators.",
      "Advance a 12F or 14F balloon-retained catheter or locking pigtail drainage catheter over the wire into the cecum.",
      "Inflate retention balloon with 3-5 mL sterile water (or lock pigtail loop), snug gently against the anterior wall, and secure the external flange.",
      "Perform check contrast study through the catheter confirming immediate massive decompression of the colon without intraperitoneal leak.",
      "Connect catheter to an open drainage bag with low-pressure suction or gravity siphon for continuous colonic decompression."
    ],
    "complications": [
      "Intraperitoneal fecal contamination and generalized bacterial peritonitis",
      "Cecal wall perforation or tear during tract dilation",
      "Bleeding from epigastric or mesenteric arcade vessels",
      "Peristomal infection and necrotizing fasciitis",
      "Persistent colocutaneous fistula after tube removal"
    ],
    "maayTariffInr": 25000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 44556)",
      "Avanos Medical India (+91 98290 88771)"
    ]
  },
  {
    "id": "percutaneous-abdominopelvic-abscess-drainage",
    "name": "Percutaneous Drainage of Complex Multi-Loculated Abdominopelvic Abscess under CT/US Guidance",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-NV026A",
    "rghsCode": "693 / 56",
    "icd10": "K65.0 (Generalized peritonitis / Abdominal abscess)",
    "indications": [
      "Complex multi-loculated intra-abdominal, retroperitoneal, or pelvic abscess collections (post-operative, post-appendiceal, or Crohn-related)",
      "Symptomatic septic collection with fever, leukocytosis, and localized abdominal tenderness refractory to systemic antibiotic therapy",
      "Collections >= 3 cm with a safe percutaneous acoustic/radiologic access window",
      "Poor surgical candidates where re-laparotomy carries unacceptable morbidity and mortality"
    ],
    "preOpCriteria": [
      "Contrast-enhanced CT of abdomen and pelvis mapping collection size, loculations, viscous density, and safe trajectory avoiding bowel, bladder, and major vessels",
      "Coagulation profile: Platelet count >= 50,000/uL, INR <= 1.5",
      "Intravenous broad-spectrum antimicrobial coverage initiated",
      "Transgluteal, transrectal, or transvaginal route planned if pelvic collection is jailed below the pelvic brim"
    ],
    "hardware": [
      {
        "category": "Puncture Needle",
        "name": "18G Trocar / 20G Chiba Echogenic Needle",
        "spec": "15 cm - 20 cm length, calibrated depth markings",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Rosen / Amplatz Extra-Stiff Guidewire",
        "spec": "150 cm length, 1.5 mm J-tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Fascial Dilators",
        "name": "Radiopaque Serial Dilators",
        "spec": "8F, 10F, 12F, 14F, 16F dilators",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Drainage Catheter",
        "name": "12F - 16F Large-Bore Locking Pigtail / Sump Drainage Catheter",
        "spec": "Hydrophilic coated, multi-sidehole large lumen with string lock",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Fibrinolytic Agent (Optional)",
        "name": "Recombinant Tissue Plasminogen Activator (Alteplase) / Dornase Alfa",
        "spec": "2-4 mg Alteplase for intracavitary lavage of thick multi-loculated pus",
        "standardStore": "SMS Pharmacy"
      },
      {
        "category": "Drainage Bag",
        "name": "Closed Gravity Drainage Bag with Anti-Reflux Valve",
        "spec": "1000 mL collection bag",
        "standardStore": "Surgical Store"
      }
    ],
    "techniqueSteps": [
      "Position patient prone, supine, or lateral depending on the pre-planned CT access trajectory. Sterilize and drape the entry site.",
      "Administer local anesthesia (1% lidocaine) from the skin down to the abscess wall under ultrasound or CT fluoroscopy.",
      "Advance an 18G trocar needle into the largest loculation of the abscess collection, avoiding intervening bowel, solid organs, or major vessels.",
      "Remove needle stylet and aspirate frank pus. Collect 10-20 mL of aspirate for urgent Gram stain, aerobic/anaerobic cultures, and fungal culture.",
      "Under CT or fluoroscopic guidance, inject 5 mL of dilute contrast to evaluate cavity boundaries, internal septations, and rule out fistulous communication with bowel.",
      "Advance a 0.035-inch Amplatz stiff wire through the needle, allowing it to coil widely within the cavity to break loose internal septations.",
      "Dilate the tract sequentially over the wire using 10F, 12F, and 14F fascial dilators.",
      "Advance a 12F to 16F multi-sidehole locking pigtail drainage catheter over the wire into the deepest aspect of the abscess cavity.",
      "Withdraw the wire, engage and lock the pigtail drawstring, and aspirate all readily mobilizable purulent fluid until resistance is met.",
      "Gently irrigate the cavity with small aliquots (10-20 mL) of sterile normal saline until the return is relatively clear.",
      "For dense fibrinous multi-loculated collections, instill 2-4 mg of Alteplase in 20 mL saline, clamp the catheter for 2 hours, and then reopen to gravity drainage.",
      "Anchor the catheter securely to the skin with 2-0 silk and a dedicated drain retention dressing; connect to closed gravity drainage."
    ],
    "complications": [
      "Inadvertent enterotomy or colonic perforation leading to enterocutaneous fistula",
      "Intra-cavitary or retroperitoneal hemorrhage from vascular branch laceration",
      "Transient bacteremia, septic shower, or endotoxic shock during aggressive cavity lavage",
      "Catheter lumen occlusion by thick fibrinous debris requiring regular flush protocols",
      "Persistent fistulous communication with the gastrointestinal or biliary tract"
    ],
    "maayTariffInr": 20000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 44556)",
      "Becton Dickinson India (+91 98294 22331)",
      "Boston Scientific India (+91 98290 11223)"
    ]
  },
  {
    "id": "percutaneous-necrosectomy-won",
    "name": "Percutaneous Necrosectomy and Multi-Catheter Irrigation for Walled-Off Pancreatic Necrosis (WON)",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-NV027A",
    "rghsCode": "693 / 57",
    "icd10": "K85.90 (Acute pancreatitis without necrosis or infection - WON / Infected Necrosis)",
    "indications": [
      "Infected walled-off pancreatic necrosis (WON) presenting >= 4 weeks following acute necrotizing pancreatitis with ongoing sepsis, organ failure, or failure to thrive",
      "Step-up approach component: Primary percutaneous catheter drainage failing to clear large solid non-liquefied necrotic debris",
      "Anatomically inaccessible collections for endoscopic transmural cystogastrostomy (e.g., paracolic gutter extension, distant flank necrosis)",
      "Critically ill ICU patients unfit for open surgical necrosectomy"
    ],
    "preOpCriteria": [
      "Contrast-enhanced pancreatic CT or MRI (MRCP) demonstrating encapsulated collection with high percentage of non-liquefied solid necrotic debris (WON)",
      "Retroperitoneal left flank (pararenal space) access pathway identified, avoiding splenic flexure of colon and spleen",
      "Platelet count >= 50,000/uL, INR <= 1.5",
      "Procedure performed in angio-CT suite or cath lab with intensive care sedation/anesthesia monitoring"
    ],
    "hardware": [
      {
        "category": "Puncture Needle",
        "name": "18G Echogenic Trocar Needle",
        "spec": "20 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Extra-Stiff Amplatz Guidewire",
        "spec": "150 cm length, stiff body",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Amplatz Dilator Set",
        "name": "Amplatz Renal / Necrosectomy Dilators and Sheaths",
        "spec": "16F to 28F/30F dilators with corresponding radiopaque working sheaths",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Large-Bore Drain",
        "name": "20F - 28F Dual-Lumen Sump Drainage Catheters (Argyle / VanSonnenberg)",
        "spec": "Radiopaque silicone sump catheters with continuous irrigation/aspiration capability",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Endoscopic Debridement (Optional)",
        "name": "Flexible Choledochoscope / Nephroscope & Dormia Baskets",
        "spec": "Rigid/flexible endoscope with grasping forceps for mechanical necrosectomy",
        "standardStore": "Endoscopy / OT"
      },
      {
        "category": "Irrigation System",
        "name": "Continuous Saline Flushing Manifold",
        "spec": "High-volume saline irrigation system (500-1000 mL/24h)",
        "standardStore": "ICU Store"
      }
    ],
    "techniqueSteps": [
      "Position patient in right lateral decubitus or semi-prone position. Clean and drape the left flank.",
      "Under CT or combined US/fluoroscopy, identify the retroperitoneal path into the necrosum through the left anterior pararenal space, staying strictly posterior to the descending colon.",
      "Puncture the necrosis cavity using an 18G needle, aspirate cloudy necrotic fluid for microbiological culture, and inject 10 mL contrast to define cavity margins under fluoroscopy.",
      "Advance a 0.035-inch extra-stiff Amplatz guidewire into the collection, carefully manipulating it through the solid debris.",
      "TRACT DILATION: Dilate the cutaneous-retroperitoneal tract over the wire sequentially up to 24F to 28F using Amplatz dilators, and advance a 28F Amplatz working sheath into the cavity.",
      "Decompress the collection by manual suction; introduce a rigid nephroscope or flexible choledochoscope through the sheath.",
      "Under direct vision with low-pressure saline irrigation, mechanically grasp, fragment, and extract avascular black/grey necrotic pancreatic slough using stone baskets and grasping forceps.",
      "Avoid pulling adherent tissue at cavity margins to prevent major retroperitoneal vascular avulsion.",
      "Following debridement, place two large-bore catheters (e.g., 20F-24F sump or silicone drains) through the tract into dependent areas of the cavity.",
      "Establish a continuous high-volume closed saline irrigation protocol (e.g., 250-500 mL normal saline every 6 hours) in the ICU.",
      "Perform staged repeat percutaneous necrosectomy sessions every 3-5 days until follow-up CT confirms complete resolution of necrosis and clean granulation tissue."
    ],
    "complications": [
      "Catastrophic retroperitoneal arterial hemorrhage from pseudoaneurysm rupture (splenic, gastroduodenal, or superior mesenteric branches)",
      "Colonic necrosis or colocutaneous fistula formation from retroperitoneal enzymatic erosion",
      "Persistent pancreaticocutaneous fistula requiring long-term drainage and octreotide",
      "Sepsis or septic shock triggered during cavity debridement",
      "Retroperitoneal tracking of infection along psoas muscle planes"
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 44556)",
      "Boston Scientific India (+91 98290 11223)",
      "Becton Dickinson India (+91 98294 22331)"
    ]
  },
  {
    "id": "hydatid-cyst-pair-procedure",
    "name": "Hydatid Cyst of Liver: PAIR Procedure (Puncture, Aspiration, Injection of Hypertonic Saline/Alcohol, Re-Aspiration)",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-NV028A",
    "rghsCode": "693 / 58",
    "icd10": "B67.0 (Infection of liver due to Echinococcus granulosus)",
    "indications": [
      "Hepatic cystic echinococcosis (Echinococcus granulosus) classified as WHO Gharbi Type CE1 (unilocular simple cyst) or CE3a (cyst with detached endocyst / water-lily sign)",
      "Symptomatic or enlarging hydatid cyst > 5 cm in diameter",
      "Patients failing or refusing surgery, or high-risk surgical candidates",
      "Concomitant anti-helminthic medical coverage with Albendazole"
    ],
    "preOpCriteria": [
      "High-resolution ultrasound and contrast-enhanced CT of abdomen confirming WHO CE1 or CE3a cyst morphology and absence of biliary communication",
      "CRITICAL: Pre-treatment with oral Albendazole (10-15 mg/kg/day) for at least 7 to 14 days prior to kill protoscolices and reduce cyst wall tension",
      "Exclusion of WHO CE2, CE3b, CE4, or CE5 (solid/heavily calcified or multi-daughter cyst lesions better managed surgically or with PEVAC)",
      "Intravenous hydrocortisone (100 mg) and chlorpheniramine administered on table to prevent anaphylaxis; emergency epinephrine available"
    ],
    "hardware": [
      {
        "category": "Puncture Needle",
        "name": "18G / 20G Chiba Needle or One-Step Drainage Catheter",
        "spec": "15 cm - 20 cm length, echogenic tip with stylet",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch J-Tip Guidewire",
        "spec": "150 cm length",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Drainage Catheter",
        "name": "6F - 8.5F Locking Pigtail Catheter",
        "spec": "Hydrophilic coated, suture retention",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Scolicidal Agent 1",
        "name": "Hypertonic Saline (20% NaCl Solution)",
        "spec": "100 mL sterile bottles",
        "standardStore": "SMS Central Pharmacy"
      },
      {
        "category": "Scolicidal Agent 2",
        "name": "Absolute Alcohol (99.5% Sterile Ethanol)",
        "spec": "Ampoules for injection",
        "standardStore": "SMS Central Pharmacy"
      },
      {
        "category": "Contrast Media",
        "name": "Non-ionic contrast (Iohexol 300)",
        "spec": "50 mL bottle",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Position patient supine. Ensure peripheral intravenous line is free-flowing with resuscitation medications (epinephrine, antihistamines) ready.",
      "Under continuous real-time ultrasound guidance, identify a trajectory that traverses at least 1-2 cm of normal intervening liver parenchyma before entering the cyst (this parenchymal cuff acts as a seal to prevent free peritoneal leakage).",
      "PUNCTURE (P): Advance an 18G/20G needle (or 6F pigtail catheter over needle) into the center of the hydatid cyst under ultrasound.",
      "ASPIRATION (A): Aspirate approximately 30-50% of the crystal-clear hydatid fluid (\"rock water\" appearance) to decompress intracystic pressure. Send fluid for immediate microscopic examination for hooklets/scolices and test for bilirubin.",
      "CYSTOGRAPHY: Inject 10-20 mL dilute non-ionic contrast and perform careful fluoroscopy. Meticulously verify: (a) Endocyst detachment, (b) ABSOLUTE ABSENCE of cysto-biliary fistula (no contrast filling of intrahepatic bile ducts). If biliary communication is found, ABORT injection of scolicidal agent immediately to avoid chemical sclerosing cholangitis.",
      "INJECTION (I): Instill hypertonic saline (20% NaCl) or 95% absolute ethanol in a volume equal to approximately one-third of the aspirated cyst volume.",
      "DWELL TIME: Leave the scolicidal agent inside the cyst for exactly 15 to 20 minutes to achieve complete parasiticidal scolicidal kill.",
      "RE-ASPIRATION (R): Completely aspirate all injected scolicidal fluid along with the remaining cyst contents until the cyst cavity is completely collapsed.",
      "Withdraw the needle/catheter while keeping negative suction to prevent tracking along the tract.",
      "Continue oral Albendazole therapy for 4 weeks post-procedure; monitor patient in HDU for 24 hours for delayed allergic reaction."
    ],
    "complications": [
      "Severe anaphylactic shock due to peritoneal spillage of hydatid antigen fluid",
      "Chemical sclerosing cholangitis if scolicidal agent enters an undetected cysto-biliary communication",
      "Secondary peritoneal echinococcosis from spillage along the tract",
      "Intra-cystic bacterial superinfection / abscess formation",
      "Intra-abdominal hemorrhage or biliary fistula"
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 44556)",
      "Becton Dickinson India (+91 98294 22331)",
      "Boston Scientific India (+91 98290 11223)"
    ]
  },
  {
    "id": "hydatid-cyst-pevac-procedure",
    "name": "Hydatid Cyst of Liver: PEVAC Procedure (Percutaneous Evacuation of Cyst Contents) with Wide-Bore Cannula",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-NV029A",
    "rghsCode": "693 / 59",
    "icd10": "B67.0 (Infection of liver due to Echinococcus granulosus)",
    "indications": [
      "Hepatic hydatid cysts classified as WHO Type CE2 (multi-vesicular, multi-daughter cysts) or CE3b (daughter cysts within folded membranes)",
      "Complex hydatid cysts with thick gelatinous matrix, multiple daughter vesicles, or detached laminated membranes unsuitable for needle PAIR",
      "Hydatid cyst with confirmed cysto-biliary communication where chemical scolicidal agents are strictly contraindicated",
      "Recurrent hydatid cysts following failed medical or PAIR therapy"
    ],
    "preOpCriteria": [
      "CT or MRI liver confirming multi-daughter cyst architecture (CE2/CE3b) and evaluating proximity to major portal and hepatic veins",
      "Pre-procedure Albendazole therapy administered for at least 14 days",
      "Coagulation parameters: INR <= 1.4, Platelets >= 70,000/uL",
      "Anaphylaxis prophylaxis protocol initiated (IV dexamethasone/hydrocortisone on table)"
    ],
    "hardware": [
      {
        "category": "Puncture Needle",
        "name": "18G Trocar Access Needle",
        "spec": "20 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Extra-Stiff Amplatz Guidewire",
        "spec": "150 cm length",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Large-Bore Access Sheath",
        "name": "12F - 16F Amplatz Renal / Vascular Introducer Sheath",
        "spec": "With radiopaque tip and dilators",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Evacuation Cannula",
        "name": "Wide-Bore Aspiration Cannula / Large-Bore Suction Device",
        "spec": "12F - 14F rigid/semi-rigid multi-sidehole evacuation cannula",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Catheter",
        "name": "14F - 16F Multi-Sidehole Locking Pigtail Drainage Catheter",
        "spec": "Large lumen silicone catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Surgical Suction Unit",
        "name": "High-Vacuum Continuous Surgical Suction Machine",
        "spec": "Equipped with dedicated filter traps for daughter cysts",
        "standardStore": "Angio Suite Main"
      }
    ],
    "techniqueSteps": [
      "Position patient supine. Maintain strict anaphylaxis resuscitation protocol with arterial line monitoring.",
      "Under real-time ultrasound guidance, traverse normal hepatic parenchyma to puncture the main cyst cavity using an 18G trocar needle.",
      "Aspirate fluid to decompress internal pressure, and introduce a 0.035-inch extra-stiff Amplatz guidewire into the cyst.",
      "Perform serial tract dilatation over the wire up to 14F or 16F using Amplatz dilators, and advance a 14F/16F working sheath directly into the cyst cavity.",
      "Insert the wide-bore evacuation cannula connected to high-vacuum surgical suction through the sheath.",
      "Systematically aspirate and evacuate all solid daughter cysts, gelatinous matrix, and floating germinative laminated membranes into the suction canister filter trap.",
      "Perform continuous isotonic saline irrigation through the sheath while aspirating until the effluent is completely free of membranes and daughter vesicles.",
      "Perform cystoscopy using a flexible choledochoscope through the sheath: Inspect the inner cyst wall under direct vision to confirm complete evacuation of parasitic material and identify any occult bile leaks.",
      "Perform completion fluoroscopic cystogram to evaluate cyst collapse and delineate any cysto-biliary fistulous communication.",
      "Advance a 14F or 16F large-bore locking pigtail catheter over the wire to dependent cavity drainage.",
      "Keep catheter on gravity drainage; if bile drainage occurs, maintain catheter until biliary communication closes spontaneously. Remove catheter once drainage drops below 10 mL/day."
    ],
    "complications": [
      "Anaphylactic reaction or severe allergic urticaria/bronchospasm",
      "Persistent high-output biliary fistula requiring endoscopic sphincterotomy and biliary stenting",
      "Secondary bacterial infection of the evacuated residual cavity",
      "Hemorrhage from the cyst wall or liver parenchymal tract",
      "Intraperitoneal spillage of daughter cyst contents"
    ],
    "maayTariffInr": 30000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 44556)",
      "Boston Scientific India (+91 98290 11223)",
      "Becton Dickinson India (+91 98294 22331)"
    ]
  },
  {
    "id": "percutaneous-liver-abscess-drainage",
    "name": "Percutaneous Drainage of Amebic / Pyogenic Liver Abscess with Locking Pigtail Catheter",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-NV030A",
    "rghsCode": "693 / 60",
    "icd10": "K75.0 (Abscess of liver - Pyogenic / Amebic)",
    "indications": [
      "Pyogenic liver abscess or complicated amebic liver abscess >= 5 cm in diameter",
      "Amebic liver abscess failing to respond to 48-72 hours of intravenous metronidazole",
      "Impending abscess rupture (subcapsular location, marked cortical thinning, left lobe abscess abutting pericardium)",
      "Severe clinical sepsis, high swinging fever, or severe localized right upper quadrant pain"
    ],
    "preOpCriteria": [
      "Abdominal ultrasound or contrast CT detailing location (right vs left lobe), size, liquefaction stage, and safe transhepatic route",
      "Coagulation screen: Platelet count >= 50,000/uL, INR <= 1.5",
      "Intravenous antibiotic (third-generation cephalosporin + metronidazole) initiated",
      "Left lobe abscess assessed carefully to ensure transhepatic window avoiding cardiac/pericardial structures"
    ],
    "hardware": [
      {
        "category": "Puncture Needle",
        "name": "18G Echogenic Trocar Needle / 20G Chiba Needle",
        "spec": "15 cm - 20 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Rosen Heavy-Duty / Amplatz Guidewire",
        "spec": "150 cm length, J-tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Fascial Dilators",
        "name": "Vascular / Biliary Dilators",
        "spec": "8F, 10F, 12F radiopaque dilators",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Drainage Catheter",
        "name": "10F - 12F Locking Pigtail Catheter (Skater / Cook Multipurpose)",
        "spec": "Hydrophilic coated, suture-locking loop with connecting tube",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Bag",
        "name": "Closed Sterile Collection Bag with Anti-Reflux Valve",
        "spec": "1000 mL capacity",
        "standardStore": "Surgical Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine or left lateral oblique. Sterilize and drape the right lower chest and flank.",
      "Under real-time ultrasound guidance, select a subcostal or low intercostal (below the 10th rib to avoid pleural transgression) approach that traverses at least 1-2 cm of healthy liver parenchyma.",
      "Infiltrate 1% lidocaine generously into the skin, intercostal muscles, and liver capsule.",
      "Advance the 18G trocar needle into the necrotic center of the liver abscess under continuous ultrasound visualization.",
      "Remove inner stylet and aspirate 20-50 mL of thick purulent fluid (anchovy-sauce appearance in amebic, creamy foul pus in pyogenic). Send samples for Gram stain, aerobic/anaerobic culture, amebic serology, and fungal stains.",
      "Advance a 0.035-inch heavy-duty Rosen or Amplatz guidewire through the needle and coil it within the abscess cavity under fluoroscopy or ultrasound.",
      "Dilate the transhepatic tract over the wire using 8F and 10F/12F dilators.",
      "Advance a 10F or 12F locking pigtail drainage catheter over the wire into the cavity.",
      "Remove the wire and stiffener, pull the locking suture to form the pigtail loop, and lock the hub securely.",
      "Aspirate all readily drainable purulent collection until the cavity collapses on ultrasound.",
      "Gently flush the cavity with small aliquots (10-20 mL) of normal saline until clear; avoid vigorous high-pressure flushing.",
      "Secure catheter to the skin using 2-0 silk suture and a dedicated drainage fixation device; connect to a closed gravity bag."
    ],
    "complications": [
      "Pneumothorax, hemothorax, or empyema from transpleural puncture (intercostal route above 10th rib)",
      "Severe intra-abdominal or intra-hepatic hemorrhage from laceration of intercostal, portal, or hepatic vessels",
      "Intraperitoneal rupture or leak of purulent fluid causing generalized peritonitis",
      "Transient septicemia and bacteremic shock post-drainage",
      "Catheter blockage by thick necrotic slough"
    ],
    "maayTariffInr": 18000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 44556)",
      "Becton Dickinson India (+91 98294 22331)",
      "Boston Scientific India (+91 98290 11223)"
    ]
  },
  {
    "id": "fallopian-tube-recanalization-ftr",
    "name": "Fallopian Tube Recanalization (FTR) for Proximal Tubal Obstruction in Female Infertility",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-NV031A",
    "rghsCode": "693 / 61",
    "icd10": "N97.1 (Female infertility of tubal origin)",
    "indications": [
      "Bilateral or unilateral proximal fallopian tube obstruction (cornual obstruction) documented on hysterosalpingography (HSG) or laparoscopy",
      "Female infertility due to amorphous mucus plugs, cellular debris, or non-obliterative fibrous synechiae at the utero-tubal junction",
      "Desire to avoid costly in-vitro fertilization (IVF) or invasive surgical tubal re-anastomosis",
      "Preserved distal fallopian tubal anatomy (absence of severe hydrosalpinx or dense pelvic adhesions)"
    ],
    "preOpCriteria": [
      "Diagnostic HSG demonstrating proximal tubal non-filling with normal uterine cavity morphology",
      "Procedure scheduled during the early follicular phase of the menstrual cycle (Day 5 to Day 10, following cessation of menses)",
      "Negative serum beta-hCG pregnancy test prior to procedure",
      "Absence of active pelvic inflammatory disease (PID), unexplained vaginal bleeding, or purulent cervicitis",
      "Prophylactic oral antibiotics (Doxycycline 100 mg BID) initiated 24 hours prior"
    ],
    "hardware": [
      {
        "category": "Hysterosalpingography Set",
        "name": "Vacuum Cervical Cannula / Foley HSG Catheter Kit",
        "spec": "5F - 7F balloon retention catheter with contrast delivery luer-lock",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guiding Catheter",
        "name": "FTR Guiding Catheter (Cook / Terumo)",
        "spec": "5F curved uterine catheter (multipurpose or cornual curve), 45-65 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "Cook / Terumo 3F Microcatheter",
        "spec": "3F coaxial microcatheter, 90 cm length, atraumatic radiopaque tip",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Micro-Guidewire",
        "name": "0.015-inch - 0.018-inch Hydrophilic Steerable Microwire",
        "spec": "130 cm length, soft platinum floppy tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Contrast Media",
        "name": "Water-Soluble Non-Ionic Contrast (Iopamidol / Iohexol 300)",
        "spec": "50 mL bottle",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Position patient in lithotomy position on the fluoroscopy table. Clean external genitalia, vagina, and cervix with povidone-iodine.",
      "Place a sterile vaginal speculum to visualize the external cervical os. Infiltrate 2% lidocaine for a paracervical block if needed.",
      "Cannulate the endocervical canal using a 5F balloon HSG catheter, inflate balloon with 1.5-2 mL saline, and seat against internal os.",
      "Inject 5-10 mL of water-soluble non-ionic contrast medium to perform baseline fluoroscopic hysterosalpingogram, confirming proximal obstruction and excluding uterine pathology.",
      "Introduce the 5F cornual guiding catheter coaxially through the cervical catheter and engage the target uterine cornu (tubal ostium).",
      "Perform selective cornual salpingography to confirm true anatomic obstruction versus transient cornual spasm (administer sublingual isosorbide dinitrate or IV glucagon if spasm suspected).",
      "If obstruction persists, advance a 3F coaxial microcatheter and 0.015-inch or 0.018-inch hydrophilic micro-guidewire through the guide catheter to the point of occlusion.",
      "Under high-resolution magnification fluoroscopy, gently manipulate and rotate the micro-guidewire across the proximal tubal obstruction into the mid-ampullary lumen.",
      "Advance the 3F microcatheter over the wire into the ampulla, remove the micro-guidewire, and inject dilute contrast.",
      "Demonstrate free, brisk contrast spill into the peritoneal cavity, outlining the delicate mucosal folds of the ampulla and fimbriae.",
      "Withdraw catheters, repeat selective procedure on the contralateral fallopian tube if bilaterally occluded, and obtain a completion pelvic spot film showing bilateral free peritoneal contrast dispersion."
    ],
    "complications": [
      "Tubal perforation by microwire or microcatheter (typically benign and heals spontaneously if non-ionic contrast used)",
      "Post-procedure pelvic infection or reactivation of pelvic inflammatory disease (PID)",
      "Transient mild uterine cramping or vasovagal episode during cornual instrumentation",
      "Minor self-limiting vaginal spotting",
      "Increased risk of subsequent ectopic pregnancy (patients counseled to seek early ultrasound upon positive pregnancy test)"
    ],
    "maayTariffInr": 20000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 44556)",
      "Terumo India Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "fluoroscopic-esophageal-stricture-dilation",
    "name": "Fluoroscopically Guided Balloon Dilation of Benign Esophageal Stricture (Post-Caustic / Anastomotic)",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-NV032A",
    "rghsCode": "693 / 62",
    "icd10": "K22.2 (Esophageal obstruction - stricture)",
    "indications": [
      "Benign esophageal strictures secondary to corrosive/caustic ingestion, post-esophagectomy surgical anastomosis, or radiation therapy",
      "Severe progressive dysphagia (Modified Dysphagia Score 3-4: liquids only or complete aphagia) refractory to medical antireflux therapy",
      "Tight, eccentric, or tortuous strictures impassable by standard flexible endoscopes where guidewire negotiation under fluoroscopy is safer",
      "Recurrent peptic esophageal strictures failing endoscopic bougienage"
    ],
    "preOpCriteria": [
      "Barium or water-soluble contrast esophagogram detailing stricture level, length, internal caliber, and presence of sinus tracts or diverticula",
      "Patient fasted for at least 8 hours to prevent pulmonary aspiration",
      "Platelet count >= 50,000/uL, INR <= 1.5",
      "Emergency airway suction ready and local oropharyngeal lidocaine spray administered"
    ],
    "hardware": [
      {
        "category": "Guidewire",
        "name": "0.035-inch Hydrophilic Glidewire Angled & 0.035-inch Amplatz Super Stiff Guidewire",
        "spec": "260 cm length, stiff body",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Directional Catheter",
        "name": "5F Kumpe / Multipurpose Catheter",
        "spec": "100 cm length, radiopaque tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Esophageal Dilatation Balloon",
        "name": "Boston Scientific CRE / Microvasive Esophageal Balloon Catheter",
        "spec": "Radial expanding multi-diameter balloon (e.g., 10-12 mm, 12-15 mm, 15-18 mm diameter x 55 mm length), 0.035-inch wire compatible",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Inflation Syringe",
        "name": "Dedicated High-Pressure Inflation Manometer Syringe",
        "spec": "30 mL capacity, calibrated in atmospheres (0-12 atm)",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Contrast Media",
        "name": "Water-Soluble Non-Ionic Contrast (Iohexol / Gastrografin)",
        "spec": "100 mL bottle",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Position patient seated or semi-erect in left posterior oblique orientation on the fluoroscopy table. Administer 10% topical lidocaine spray to the posterior pharynx.",
      "Administer a small test sip of water-soluble non-ionic contrast to visualize the proximal stricture shelf and verify lumen axis under fluoroscopy.",
      "Introduce a 5F angled hydrophilic catheter and 0.035-inch Glidewire transorally (using a bite-block) down the pharynx into the upper esophagus.",
      "Under high-resolution fluoroscopy, carefully probe and cross the narrow stricture lumen with the soft floppy Glidewire into the distal esophagus and stomach.",
      "Advance the 5F catheter into the stomach, confirm position by contrast injection, and exchange for a 260 cm 0.035-inch Amplatz super-stiff guidewire.",
      "Select an appropriately sized balloon catheter based on stricture tightness (rule of thumb: initial balloon diameter should not exceed stricture caliber by > 3-4 mm; \"rule of threes\").",
      "Advance the esophageal dilatation balloon over the stiff wire and center the radiopaque balloon markers directly across the stricture.",
      "Connect the inflation device filled with dilute 50:50 contrast/saline and gradually inflate the balloon under continuous fluoroscopy.",
      "Observe the appearance of the focal waist indentation on the balloon and maintain inflation until the waist completely effaces (or up to recommended burst pressure for 60-90 seconds).",
      "Deflate the balloon, reposition slightly if needed, or perform a second step-up inflation if using a multi-diameter (CRE) balloon.",
      "Remove balloon catheter over the wire. Perform immediate post-dilation water-soluble contrast esophagogram to assess lumen patency and rigorously exclude transmural esophageal perforation.",
      "Observe patient for 2-4 hours; monitor for chest pain, surgical emphysema, tachycardia, or fever before initiating clear liquids."
    ],
    "complications": [
      "Full-thickness esophageal perforation and acute mediastinitis (emergency surgical/stenting consultation indicated)",
      "Severe mucosal laceration with significant upper gastrointestinal bleeding",
      "Pulmonary aspiration of retained esophageal contents during instrumentation",
      "Transient retrosternal chest pain or odynophagia",
      "Stricture recurrence requiring serial dilation protocols"
    ],
    "maayTariffInr": 25000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 11223)",
      "Cook Medical India (+91 98292 44556)"
    ]
  },
  {
    "id": "percutaneous-retrieval-embolized-port-fragment",
    "name": "Endovascular / Percutaneous Retrieval of Embolized or Fractured Central Line / Port Fragments Using Goose-Neck Snare",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-VN033A",
    "rghsCode": "693 / 63",
    "icd10": "T82.598A (Other mechanical complication of other cardiac and vascular devices)",
    "indications": [
      "Fracture and intravascular embolization of central venous catheter, PICC, chemoport catheter fragment, or broken guidewire",
      "Foreign body lodged within the superior vena cava, right atrium, right ventricle, or pulmonary arterial tree",
      "Prevention of lethal complications including cardiac perforation, malignant arrhythmias, endocarditis, and pulmonary infarction",
      "Urgent minimally invasive retrieval avoiding open cardiotomy / sternotomy"
    ],
    "preOpCriteria": [
      "Chest radiograph and non-contrast thoracic CT detailing the exact location, orientation, and landing ends (free ends vs impacted ends) of the foreign fragment",
      "Coagulation screen: Platelet count >= 50,000/uL, INR <= 1.5",
      "Vascular access site selected (right common femoral vein or right internal jugular vein depending on fragment axis)",
      "Continuous ECG telemetry monitoring established during intracardiac manipulation"
    ],
    "hardware": [
      {
        "category": "Vascular Sheath",
        "name": "8F - 10F Check-Flo Performer Introducer Sheath",
        "spec": "23 cm - 35 cm length, radiopaque tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Hydrophilic Glidewire & 0.035-inch Stiff Wire",
        "spec": "260 cm length",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Guiding / Hooking Catheter",
        "name": "5F Kumpe / Headhunter / Pigtail Catheter",
        "spec": "100 cm length, radiopaque tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Endovascular Snare Kit",
        "name": "Amplatz GooseNeck Snare / EN Snare Multi-Loop System",
        "spec": "10 mm - 15 mm or 18 mm - 30 mm loop diameter, 120 cm retrieval catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Biopsy Forceps (Optional)",
        "name": "Myocardial / Flexible Endobronchial Forceps",
        "spec": "For grasping flush or endothelialized embedded foreign body ends",
        "standardStore": "Cath Lab Consignment"
      }
    ],
    "techniqueSteps": [
      "Sterilize and drape the right groin. Puncture the right common femoral vein under ultrasound guidance and place an 8F or 9F introducer sheath.",
      "Perform preliminary fluoroscopy and digital spot imaging to identify the exact position of both ends of the fractured catheter fragment.",
      "Advance an 8F guiding catheter or sheath into the IVC/right atrium.",
      "If both ends of the fragment are lodged against vessel walls or trabeculae (no free end), use a 5F pigtail catheter or hooked catheter over a wire to engage the midsection of the fragment and pull it down into the IVC to free one end.",
      "Introduce the Amplatz GooseNeck snare (sized approximately 1.5 times the target vessel diameter) through its delivery catheter.",
      "Advance the opened snare loop under continuous orthogonal fluoroscopy over the free end of the foreign body.",
      "Once the free tip is inside the snare loop, advance the outer snare catheter forward while maintaining wire position, tightly cinching the snare loop around the fragment.",
      "Under firm tension, draw the captured fragment tip snugly into the tip of the large-bore vascular sheath.",
      "CRITICAL SAFETY STEP: Do not force a fragment with wide cross-sectional profile through a narrow sheath valve; withdraw the sheath, snare, and captured catheter fragment en bloc through the femoral puncture.",
      "Inspect the retrieved fragment on sterile table to verify 100% complete recovery of all broken parts against pre-op radiographic measurements.",
      "Achieve manual pressure hemostasis at the femoral access site for 10-15 minutes."
    ],
    "complications": [
      "Intracardiac arrhythmias (PVCs, ventricular tachycardia, AF) induced during catheter manipulation",
      "Tricuspid valve leaflet laceration or chordae tendineae rupture",
      "Right ventricular or caval wall perforation",
      "Fragment snapping or secondary fracture during aggressive traction",
      "Femoral vein puncture hematoma"
    ],
    "maayTariffInr": 35000,
    "vendorContacts": [
      "Medtronic Interventional (+91 98291 33445)",
      "Cook Medical India (+91 98292 44556)",
      "Becton Dickinson India (+91 98294 22331)"
    ]
  },
  {
    "id": "retroperitoneal-pelvic-hematoma-drainage",
    "name": "Retroperitoneal / Pelvic Hematoma Percutaneous Evacuation and Drainage",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-NV034A",
    "rghsCode": "693 / 64",
    "icd10": "M79.81 (Nontraumatic hematoma of soft tissue / Pelvic hematoma)",
    "indications": [
      "Large symptomatic retroperitoneal, iliopsoas, or pelvic hematoma causing severe mass effect, femoral nerve compression, or intractable pain",
      "Secondary bacterial superinfection of a pre-existing post-operative or post-traumatic retroperitoneal hematoma",
      "Non-expanding, chronic liquefied or semi-solid hematoma in an anticoagulated patient stabilized after bleeding source control",
      "Failed conservative watchful waiting with progressive elevation of inflammatory markers and pain"
    ],
    "preOpCriteria": [
      "Contrast-enhanced multiphasic CT (arterial and delayed venous phases) verifying complete absence of active arterial contrast extravasation (pseudoaneurysm/blush must be embolized prior to drainage)",
      "Underlying coagulopathy fully corrected (INR <= 1.4, Platelets >= 70,000/uL, anticoagulants paused/reversed)",
      "Safe percutaneous retroperitoneal or transgluteal trajectory identified on CT",
      "Broad-spectrum intravenous antibiotics administered prior to evacuation"
    ],
    "hardware": [
      {
        "category": "Puncture Needle",
        "name": "18G Echogenic Trocar Needle",
        "spec": "15 cm - 20 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Rosen / Extra-Stiff Amplatz Guidewire",
        "spec": "150 cm length, stiff body",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Dilators",
        "name": "Fascial Serial Dilator Set",
        "spec": "8F to 16F radiopaque dilators",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Drainage Catheter",
        "name": "14F - 16F Multi-Sidehole Large-Bore Locking Pigtail Drainage Catheter",
        "spec": "Suture-locked loop, large inner lumen for viscous bloody/fibrinous fluid",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Lytic Agent (Optional)",
        "name": "Recombinant Tissue Plasminogen Activator (Alteplase)",
        "spec": "2-4 mg Alteplase in 20 mL saline for instillation into dense organized clot",
        "standardStore": "SMS Central Pharmacy"
      },
      {
        "category": "Drainage Bag",
        "name": "Closed Vacuum / Gravity Drainage Bag",
        "spec": "1000 mL collection system",
        "standardStore": "Surgical Store"
      }
    ],
    "techniqueSteps": [
      "Position patient prone, supine, or lateral oblique depending on pre-planned CT access window. Clean and drape the entry site.",
      "Infiltrate local anesthesia (1% lidocaine) along the planned retroperitoneal tract under CT fluoroscopy or ultrasound.",
      "Advance an 18G trocar needle into the center of the liquefied hematoma, avoiding retroperitoneal nerves, iliac vessels, and ureters.",
      "Remove needle stylet and aspirate dark, altered liquefied hematoma. Send fluid for microbiological culture to rule out occult infection.",
      "Advance a 0.035-inch stiff Amplatz guidewire through the needle, allowing the wire to coil within the hematoma cavity to mechanically break fibrous septa.",
      "Perform serial tract dilatation over the wire up to 14F or 16F using fascial dilators.",
      "Advance a 14F to 16F large-bore multi-sidehole locking pigtail catheter over the wire into the deepest aspect of the hematoma.",
      "Remove wire, lock the pigtail drawstring, and aspirate all readily mobilizable liquefied clot using 50 mL syringes until no further fluid returns.",
      "For dense, non-liquefied, organized fibrinous clot, instill 2-4 mg of Alteplase in 30 mL normal saline into the hematoma, clamp the catheter for 2 hours, and then reopen to gravity/low-vacuum drainage.",
      "Secure catheter to skin with 2-0 silk and a drain fixation device; connect to a closed gravity drainage bag.",
      "Maintain catheter on gentle daily flushes until output drops below 15-20 mL/day and follow-up imaging confirms hematoma resolution."
    ],
    "complications": [
      "Reactivation of acute retroperitoneal bleeding due to premature cavity decompression (requires immediate angiography and transcatheter embolization)",
      "Secondary iatrogenic bacterial infection converting sterile hematoma into an abscess",
      "Femoral or lumbosacral plexus nerve injury during needle placement",
      "Catheter obstruction by thick fibrinous clot fragments",
      "Inadvertent puncture of retroperitoneal colon or iliac vascular branches"
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 44556)",
      "Becton Dickinson India (+91 98294 22331)",
      "Boston Scientific India (+91 98290 11223)"
    ]
  },
  {
    "id": "page-kidney-subcapsular-hematoma-decompression",
    "name": "Subcapsular Renal Hematoma (Page Kidney) Percutaneous Decompression",
    "category": "Venous Thromboembolism & Non-Vascular Drainage",
    "code": "2849-NV035A",
    "rghsCode": "693 / 65",
    "icd10": "I15.1 (Hypertension secondary to other renal disorders / Page Kidney)",
    "indications": [
      "Page Kidney phenomenon: Severe, refractory secondary renin-mediated systemic hypertension caused by extrinsic compression of the renal parenchyma by a subcapsular hematoma",
      "Subcapsular renal hematoma secondary to renal biopsy, trauma, lithotripsy, or anticoagulant therapy causing severe flank pain and parenchymal hypoperfusion",
      "Progressive deterioration of ipsilateral renal function with elevated resistive indices on renal Doppler ultrasound",
      "Minimally invasive alternative to surgical open capsulotomy / decortication"
    ],
    "preOpCriteria": [
      "CT angiography or contrast CT abdomen documenting subcapsular collection compressing and flattening underlying renal parenchyma (\"Page kidney sign\")",
      "Confirmation of absence of active ongoing parenchymal bleeding or pseudoaneurysm on arterial phase CT",
      "Coagulation screen: Platelet count >= 50,000/uL, INR <= 1.4",
      "Continuous arterial line or automated blood pressure tracking initiated (risk of post-decompression hypotension)"
    ],
    "hardware": [
      {
        "category": "Puncture Needle",
        "name": "20G - 21G Chiba / Echogenic Micropuncture Needle",
        "spec": "15 cm length with 0.018-inch Nitinol wire",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035-inch Rosen / Bentson Soft-Tip Guidewire",
        "spec": "150 cm length, floppy tip",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Dilators",
        "name": "Vascular / Renal Dilator Set",
        "spec": "6F, 8F, 10F dilators",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Drainage Catheter",
        "name": "8.5F - 10F Multi-Sidehole Locking Pigtail Catheter",
        "spec": "Soft silicone/polyurethane, suture-locking loop",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Ultrasound System",
        "name": "High-Resolution Curved and Linear Ultrasound Probes",
        "spec": "3.5-7 MHz with color Doppler capability",
        "standardStore": "USG Suite"
      }
    ],
    "techniqueSteps": [
      "Position patient prone or prone-oblique with flank exposed. Monitor arterial blood pressure continuously.",
      "Under high-resolution ultrasound guidance, visualize the crescentic subcapsular hematoma flattening the renal cortex.",
      "Infiltrate skin and abdominal wall with 1% lidocaine down to the renal capsule under direct ultrasound guidance.",
      "Carefully advance a 20G or 21G echogenic needle tangentially into the subcapsular space under real-time ultrasound, taking extreme care NOT to violate or puncture the underlying renal parenchyma.",
      "Aspirate dark, altered bloody fluid to confirm subcapsular positioning and immediately confirm fall in intracapsular pressure.",
      "Advance a 0.018-inch Nitinol wire through the needle, upsize through a 4F coaxial dilator to a 0.035-inch soft-tip Rosen wire, allowing the wire to gently conform to the subcapsular crescent around the kidney.",
      "Gently dilate the track over the wire up to 8F or 10F using soft fascial dilators.",
      "Advance an 8.5F or 10F locking pigtail catheter over the wire into the subcapsular hematoma.",
      "Withdraw the guidewire, lock the pigtail loop, and slowly aspirate the remaining liquefied hematoma under ultrasound observation until the renal cortex expands back to normal contour.",
      "Perform check contrast injection under fluoroscopy: Confirm that contrast outlines the subcapsular space without extravasation into the renal parenchyma or collecting system.",
      "Secure catheter to the skin using 2-0 silk and a sterile drainage dressing; connect to closed gravity drainage.",
      "Monitor blood pressure closely: Rapid relief of renal parenchymal ischemia frequently results in dramatic normalization of blood pressure within hours."
    ],
    "complications": [
      "Puncture laceration of underlying compressed renal parenchyma resulting in brisk intra-renal hemorrhage or hematuria",
      "Pneumothorax if high intercostal approach is used",
      "Secondary infection converting sterile subcapsular hematoma into a perinephric abscess",
      "Severe transient hypotension following rapid decompression of high renin-angiotensin state",
      "Catheter dislodgement or kink"
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 44556)",
      "Becton Dickinson India (+91 98294 22331)",
      "Boston Scientific India (+91 98290 11223)"
    ]
  }
];
