# -*- coding: utf-8 -*-
"""
Category 16 Part 1 (Procedures 1 to 18)
"""

CAT16_PART1 = [
    # 1. DSA
    {
        "id": "dsa-4-vessel-cerebral",
        "name": "Diagnostic Four-Vessel Cerebral Digital Subtraction Angiography (DSA)",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-DSA-001",
        "rghsCode": "694 / 01",
        "icd10": "I67.89 (Other specified cerebrovascular disease)",
        "indications": [
            "Gold standard anatomical mapping of intracranial aneurysms, AVMs, dAVFs, and vascular malformations",
            "Preoperative evaluation of extracranial and intracranial arterial stenoses (NASCET/WASID criteria)",
            "Assessment of collateral cerebral circulation (circle of Willis, ophthalmic and leptomeningeal collaterals)",
            "Unexplained subarachnoid hemorrhage with negative non-invasive CT/MR angiography"
        ],
        "preOpCriteria": [
            "Baseline serum creatinine <= 1.5 mg/dL, eGFR >= 45 mL/min, Platelets >= 50,000/uL, INR <= 1.4",
            "Documented non-invasive neuroimaging (CT/CTA or MRI/MRA brain) reviewed",
            "NPO for solid food 6 hours, clear liquids 2 hours prior to elective procedure",
            "Allergy status verified with premedication protocol if history of contrast hypersensitivity"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "5F Radiofocus Introducer Sheath", "spec": "11 cm length, 0.035 in wire compatible", "standardStore": "Angio Suite Store" },
            { "category": "Diagnostic Catheter", "name": "5F Simmons-2 / Berenstein / H1 Diagnostic Catheter", "spec": "100 cm length, hydrophilic coated tip", "standardStore": "Neuro IR Store" },
            { "category": "Guidewire", "name": "0.035 in Radiofocus Glidewire", "spec": "150-180 cm length, angled hydrophilic tip", "standardStore": "Angio Suite Store" },
            { "category": "Contrast Media", "name": "Iso-osmolar Non-ionic Contrast (Iodixanol 320)", "spec": "100 mL bottle, low neurotoxicity", "standardStore": "SMS Pharmacy DDC-14" },
            { "category": "Closure Device", "name": "Angio-Seal VIP 6F Vascular Closure Device", "spec": "Bioresorbable collagen plug and anchor system", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Right common femoral or radial artery retrograde puncture under ultrasound guidance with 5F sheath placement.",
            "Selective catheterization of bilateral common carotid, internal carotid, external carotid, and dominant vertebral arteries using 5F Simmons-2 or H1 catheter over a 0.035-inch Glidewire under continuous fluoroscopy.",
            "Acquisition of digital subtraction angiographic projections (AP, lateral, oblique, and 3D rotational views) with automated contrast power injector.",
            "Assessment of arterial, capillary, and parenchymal/venous phases to evaluate intracranial hemodynamics and transit time.",
            "Reconstruction of 3D volume rendering datasets for aneurysm neck-to-dome ratio or nidus architecture.",
            "Post-procedure catheter withdrawal and femoral hemostasis using Angio-Seal closure device or manual compression for 15 minutes."
        ],
        "complications": [
            "Periprocedural ischemic stroke or transient ischemic attack (TIA) (0.3 - 0.5%)",
            "Arterial dissection (carotid or vertebral artery intimal flap) (<0.4%)",
            "Puncture site groin hematoma or pseudoaneurysm (1 - 2%)",
            "Contrast-induced nephropathy or mild allergic reaction (1%)",
            "Vasospasm responsive to intra-arterial nimodipine or nitroglycerin (1 - 2%)"
        ],
        "maayTariffInr": 18500,
        "vendorContacts": [
            "Terumo India Neuro (+91 98291 55678)",
            "Cordis Interventional (+91 98292 44321)",
            "Medtronic Neurovascular (+91 98293 11223)"
        ],
        "consent": {
            "nameHi": "चार-धमनी मस्तिष्क डिजिटल सबट्रैक्शन एंजियोग्राफी (4-वेसल डीएसए - दिमाग की नसों की विस्तृत जांच)",
            "indicationEn": "Detailed diagnostic visualization of brain arteries to detect aneurysms, vascular malformations, or arterial narrowing.",
            "indicationHi": "दिमाग की धमनियों में एन्यूरिज्म (नस की थैली), एवीएम (नसों का गुच्छा) या रुकावट की सटीक जांच हेतु एक्स-रे एंजियोग्राफी।",
            "descriptionEn": "Under local anesthesia, a thin tube (catheter) is inserted through the groin or wrist artery and advanced to the neck and brain arteries. Safe dye is injected to capture high-definition X-ray pictures of cerebral circulation.",
            "descriptionHi": "जांघ या कलाई की नस को सुन्न करके एक बारीक कैथेटर नली गले व दिमाग की नसों तक ले जाई जाती है और विशेष दवा (कंट्रास्ट) डालकर एक्स-रे द्वारा दिमाग की धमनियों के 3D चित्र लिए जाते हैं।",
            "benefitsEn": [
                "Gold standard precision for diagnosing intracranial vascular lesions invisible on routine scans.",
                "Provides critical 3D anatomical roadmaps necessary for endovascular coiling or neurosurgical intervention.",
                "Real-time evaluation of collateral brain blood supply."
            ],
            "benefitsHi": [
                "दिमाग की नसों की बनावट व बीमारियों की 100% सटीक जांच जो साधारण सीटी या एमआरआई में नहीं दिखती।",
                "एन्यूरिज्म या नसों के गुच्छे के सफल ऑपरेशन अथवा तार द्वारा इलाज (कॉइलिंग) का सही नक्शा तैयार होना।",
                "मस्तिष्क में रक्त संचार की वास्तविक स्थिति का तुरंत पता चलना।"
            ],
            "specificRisksEn": [
                "Transient ischemic attack (TIA) or minor stroke (<0.5%)",
                "Groin or wrist puncture site bruising, bleeding, or hematoma (1-2%)",
                "Arterial spasm or rare intimal dissection (<0.4%)",
                "Temporary contrast allergy or nausea"
            ],
            "specificRisksHi": [
                "अस्थायी लकवा (TIA) या हल्का स्ट्रोक होने का अत्यंत दुर्लभ जोखिम (<0.5%)।",
                "जांघ या कलाई की सुई वाली जगह पर खून का थक्का या सूजन (1-2%)।",
                "नस में क्षणिक सिकुड़न (Spasm) या नस की अंदरूनी परत में हल्की खरोंच (<0.4%)।",
                "कंट्रास्ट डाई से हल्की एलर्जी, खुजली या जी मिचलाना।"
            ],
            "alternativesEn": "CT Angiography (CTA), Magnetic Resonance Angiography (MRA), or conservative clinical monitoring without definitive vascular roadmap.",
            "alternativesHi": "सीटी एंजियोग्राफी (CTA), एमआरआई एंजियोग्राफी (MRA), अथवा बिना विस्तृत जांच के केवल दवाइयों द्वारा निगरानी।",
            "sedationTypeEn": "Local anesthesia at puncture site with conscious sedation if required.",
            "sedationTypeHi": "स्थानीय सुन्नता (लोकल एनेस्थीसिया) एवं आवश्यकतानुसार हल्का शांत करने वाला इंजेक्शन (सचेत बेहोशी)।"
        }
    },

    # 2. Stroke: Stent Retriever
    {
        "id": "stroke-stent-retriever-thrombectomy",
        "name": "Mechanical Thrombectomy for Acute Ischemic Stroke using Stent Retrievers (Solitaire / Trevo)",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-MT-002",
        "rghsCode": "694 / 02",
        "icd10": "I63.50 (Cerebral infarction due to unspecified occlusion of cerebral artery)",
        "indications": [
            "Acute ischemic stroke due to large vessel occlusion (ICA terminus, M1/M2 MCA, basilar artery) within 6 hours of onset",
            "Extended window (6 to 24 hours) with DAWN or DEFUSE-3 clinical-core mismatch on CT perfusion or MRI DWI",
            "Baseline NIHSS >= 6 and pre-stroke modified Rankin Scale (mRS) 0 to 1",
            "Rescue thrombectomy following failure or contraindication of IV thrombolysis"
        ],
        "preOpCriteria": [
            "Non-contrast CT brain ruling out intracranial hemorrhage and large completed infarction (ASPECTS >= 6)",
            "CTA demonstrating target intracranial arterial occlusion with accessible cervical access",
            "Coagulation status checked; intervention initiated immediately without waiting for lab completion if IV tPA started",
            "Anesthesiology standby for conscious sedation or endotracheal intubation"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "8F Radiofocus Introducer Sheath", "spec": "11 cm length, high-flow hemostatic valve", "standardStore": "Angio Suite Store" },
            { "category": "Balloon Guide Catheter", "name": "8F Balloon Guide Catheter (FlowGate2 / Cello)", "spec": "90-95 cm length, 0.084 in inner lumen, compliant occlusion balloon", "standardStore": "Neuro IR Store" },
            { "category": "Microcatheter", "name": "0.021 in Trevo Trak 21 / Marksman Microcatheter", "spec": "150 cm length, dual radiopaque marker", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.014 in Synchro-14 Steerable Microguidewire", "spec": "200 cm length, shapeable platinum tip", "standardStore": "Neuro IR Store" },
            { "category": "Stent Retriever", "name": "Solitaire Platinum / Trevo NXT Stent Retriever", "spec": "4 mm x 40 mm or 6 mm x 40 mm self-expanding nitinol retrieval stent", "standardStore": "Neuro IR Store" },
            { "category": "Aspiration Tubing", "name": "60 mL VacLok Syringe / Direct Aspiration Tubing", "spec": "Vacuum lock aspiration unit", "standardStore": "Angio Suite Store" }
        ],
        "techniqueSteps": [
            "Rapid 8F femoral or radial access with placement of 8F Balloon Guide Catheter (BGC) into the cervical internal carotid artery.",
            "Baseline intracranial DSA confirming large vessel occlusion and collateral filling grade (mTICI 0).",
            "Coaxial advancement of 0.021-inch microcatheter over 0.014-inch Synchro microwire across the thrombus into distal M2/M3 branches.",
            "Deployment of the stent retriever across the thrombus; allow 3-5 minutes for stent struts to integrate into the clot matrix.",
            "Inflate balloon guide catheter in cervical ICA to establish flow arrest and reverse aspiration gradient.",
            "Apply vigorous manual continuous vacuum aspiration on BGC while gently withdrawing the expanded stent retriever and entrapped clot into the guide sheath.",
            "Deflate BGC balloon; perform run DSA to verify mTICI 2b/3 reperfusion and check for distal emboli or vessel perforation.",
            "Hemostasis of groin access using Perclose ProGlide or Angio-Seal."
        ],
        "complications": [
            "Symptomatic intracranial hemorrhage (sICH) (3 - 6%)",
            "Embolization to previously unaffected territories (ENT) (2 - 4%)",
            "Vascular dissection or perforation (1 - 2%)",
            "Re-occlusion requiring repeat pass or glycoprotein IIb/IIIa inhibitor (3 - 5%)"
        ],
        "maayTariffInr": 115000,
        "vendorContacts": [
            "Medtronic Neurovascular (+91 98293 11223)",
            "Stryker Neurovascular (+91 98294 22334)",
            "Penumbra India (+91 98295 33445)"
        ],
        "consent": {
            "nameHi": "एक्यूट इस्केमिक स्ट्रोक: स्टेंट रिट्रीवर द्वारा यांत्रिक थ्रोम्बेक्टोमी (दिमाग की बंद नस से खून का थक्का निकालना)",
            "indicationEn": "Emergent mechanical extraction of blood clot from major brain artery to reverse acute stroke and paralysis.",
            "indicationHi": "अचानक हुए लकवे (स्ट्रोक) में दिमाग की मुख्य नस में फंसे खून के थक्के को स्टेंट द्वारा बाहर निकाल कर लकवे को ठीक करना।",
            "descriptionEn": "Under emergency conditions and local/general anesthesia, a specialized wire mesh stent is passed through a catheter from the groin into the blocked brain artery, catching and pulling out the clot to restore vital brain blood flow.",
            "descriptionHi": "जांघ की नस से एक विशेष तार का कैथेटर दिमाग की बंद नस तक पहुंचाया जाता है। वहां एक बारीक जालीदार स्टेंट खोलकर खून के थक्के को उसमें फंसाया जाता है और वैक्यूम सक्शन के साथ बाहर खींच लिया जाता है जिससे मस्तिष्क में खून का दौरा तुरंत चालू हो सके।",
            "benefitsEn": [
                "Reopens occluded brain artery in over 85% of cases (mTICI 2b/3 revascularization).",
                "Substantially increases the likelihood of regaining independent functional life (mRS 0-2).",
                "Prevents massive life-threatening cerebral edema and brain herniation."
            ],
            "benefitsHi": [
                "दिमाग की बंद नस 85% से अधिक मामलों में तुरंत खुल जाती है।",
                "मरीज के स्थायी अपाहिज होने से बचने और हाथ-पैर चलने की संभावना बहुत अधिक बढ़ जाती है।",
                "दिमाग में खतरनाक सूजन और जान के खतरे को रोकता है।"
            ],
            "specificRisksEn": [
                "Intracranial hemorrhage or bleeding into the infarcted brain tissue (3-6%)",
                "Failure to recanalize occluded artery due to hard or calcified clot (10-15%)",
                "Dislodgement of clot fragments into new brain areas (2-4%)",
                "Vessel wall rupture or dissection requiring emergency rescue measures (1-2%)"
            ],
            "specificRisksHi": [
                "दिमाग के मृत हिस्से में खून का रिसाव (ब्रेन हेमरेज) होना (3-6%)।",
                "थक्का बहुत सख्त होने के कारण नस का पूरी तरह न खुल पाना (10-15%)।",
                "थक्के का टुकड़ा टूटकर दिमाग के दूसरे हिस्से में जाना (2-4%)।",
                "नस की दीवार में खिंचाव या खरोंच (<2%)।"
            ],
            "alternativesEn": "Intravenous thrombolysis (IV tPA/Tenecteplase) alone if within 4.5 hours, or medical supportive intensive neuro-care with high risk of severe permanent disability.",
            "alternativesHi": "केवल नस द्वारा खून पतला करने का टीका (यदि 4.5 घंटे के अंदर हो), अथवा केवल दवाइयों से इलाज जिसमें आजीवन गंभीर अपाहिज रहने का बड़ा जोखिम होता है।",
            "sedationTypeEn": "Conscious sedation or emergency general anesthesia with endotracheal intubation.",
            "sedationTypeHi": "सचेत बेहोशी (कॉन्शस सेडेशन) अथवा आपातकालीन पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 3. Stroke: ADAPT
    {
        "id": "stroke-adapt-aspiration",
        "name": "Contact Aspiration Mechanical Thrombectomy for Stroke (ADAPT Technique)",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-MT-003",
        "rghsCode": "694 / 03",
        "icd10": "I63.40 (Cerebral infarction due to unspecified embolism of cerebral artery)",
        "indications": [
            "Acute anterior circulation large vessel occlusion (ICA, MCA-M1/proximal M2) eligible for direct contact aspiration",
            "Rapid first-line recanalization technique aiming for shortest puncture-to-recanalization time",
            "Soft embolic red clots amenable to direct high-vacuum suction without initial stent deployment",
            "Patient presenting within 6-24 hours with confirmed viable salvageable penumbra"
        ],
        "preOpCriteria": [
            "CTA/MRA demonstrating accessible intracranial occlusion suitable for large-bore aspiration catheter navigation",
            "Absence of severe cervical carotid tortuosity that precludes distal catheter delivery",
            "Coagulation parameters verified; continuous invasive arterial pressure monitoring instituted",
            "Immediate suite transfer from CT console to minimize onset-to-groin puncture latency"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F Long Guiding Sheath (Neuron MAX 088)", "spec": "90 cm length, 0.088 in inner diameter", "standardStore": "Neuro IR Store" },
            { "category": "Large-Bore Aspiration Catheter", "name": "Sofia Plus / React 71 / Penumbra RED 72 Aspiration Catheter", "spec": "0.068 - 0.072 in inner diameter, 132 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Microcatheter / Wire", "name": "Velocity / 3MAX Microcatheter and 0.014 in Glidewire GT", "spec": "150 cm length, hydrophilic coated", "standardStore": "Neuro IR Store" },
            { "category": "Aspiration Pump", "name": "Penumbra Engine / Continuous Vacuum Aspiration System", "spec": "-29 inHg continuous mechanical vacuum pressure", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Femoral or radial puncture; position 6F/8F long guide sheath (Neuron MAX) in distal cervical internal carotid artery.",
            "Navigate large-bore aspiration catheter (RED 72 or Sofia Plus) coaxially over microcatheter and 0.014-inch microwire directly to the proximal face of the thrombus.",
            "Confirm contact with clot via slight push resistance and absence of distal contrast runoff.",
            "Remove microcatheter; connect aspiration catheter to continuous mechanical vacuum pump (-29 inHg).",
            "Maintain contact aspiration for 90 seconds while observing pump canister fluid arrest.",
            "Slowly withdraw the aspiration catheter under continuous vacuum; observe sudden blood rush into canister indicating clot capture.",
            "Perform control angiogram through guide sheath to assess recanalization (TICI 2b/3); proceed to rescue stent retriever if incomplete."
        ],
        "complications": [
            "Distal clot embolization to downstream branches (3 - 5%)",
            "Vessel wall vasospasm or intimal injury (2%)",
            "Intracranial hemorrhagic transformation (2 - 5%)",
            "Need for rescue stent retriever conversion (20 - 30%)"
        ],
        "maayTariffInr": 110000,
        "vendorContacts": [
            "Penumbra India (+91 98295 33445)",
            "MicroVention India (+91 98296 44556)",
            "Medtronic Neurovascular (+91 98293 11223)"
        ],
        "consent": {
            "nameHi": "एडेप्ट तकनीक द्वारा स्ट्रोक थ्रोम्बेक्टोमी (सीधे सक्शन पंप से दिमाग का थक्का खींचना)",
            "indicationEn": "Direct high-vacuum suction removal of blood clot causing acute brain stroke.",
            "indicationHi": "अचानक दिमाग की नस बंद होने पर शक्तिशाली वैक्यूम सक्शन पंप से खून का थक्का खींचकर बाहर निकालना।",
            "descriptionEn": "A wide-bore flexible suction catheter is navigated directly up to the clot in the brain. Powerful continuous vacuum suction is applied to engage and extract the clot in minutes.",
            "descriptionHi": "दिमाग की बंद नस तक एक चौड़ी मुलायम नली पहुंचाई जाती है। शक्तिशाली वैक्यूम मशीन चालू करके खून के थक्के को नली के मुंह पर चिपका कर खींच लिया जाता है, जिससे बंद नस बहुत कम समय में खुल जाती है।",
            "benefitsEn": [
                "Fastest procedural recanalization times with direct aspiration.",
                "High rate of first-pass complete reperfusion (TICI 3) without stent trauma.",
                "Minimizes vascular endothelial irritation."
            ],
            "benefitsHi": [
                "बिना किसी देरी के सबसे कम समय में बंद नस को खोलने की आधुनिक तकनीक।",
                "पहली ही बार में पूरी नस खुलने की अत्यधिक संभावना।",
                "नस की अंदरूनी सतह को कम से कम नुकसान पहुंचना।"
            ],
            "specificRisksEn": [
                "Inability to swallow firm clot requiring rescue stent retriever (20-30%)",
                "Intracranial hemorrhage or micro-bleed (3-5%)",
                "Clot fragments migrating downstream (3%)",
                "Vessel spasm"
            ],
            "specificRisksHi": [
                "थक्का बहुत कड़ा होने पर सक्शन से न निकलना और स्टेंट की सहायता लेनी पड़ना (20-30%)।",
                "दिमाग में रक्तस्राव (हेमरेज) का जोखिम (3-5%)।",
                "थक्के का छोटा कण आगे की बारीक नस में चला जाना।",
                "नस में अस्थायी सिकुड़न।"
            ],
            "alternativesEn": "Stent retriever thrombectomy, intravenous thrombolysis alone, or supportive medical therapy.",
            "alternativesHi": "स्टेंट रिट्रीवर थ्रोम्बेक्टोमी, केवल नस से टीका, अथवा साधारण दवाइयां।",
            "sedationTypeEn": "Conscious sedation with local anesthesia.",
            "sedationTypeHi": "स्थानीय सुन्नता एवं हल्की बेहोशी (Conscious Sedation)।"
        }
    },

    # 4. Stroke: SAVE / CAPTIVE
    {
        "id": "stroke-save-captive-thrombectomy",
        "name": "Combined Stent Retriever and Direct Aspiration Technique (SAVE / CAPTIVE)",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-MT-004",
        "rghsCode": "694 / 04",
        "icd10": "I63.511 (Cerebral infarction due to occlusion of right middle cerebral artery)",
        "indications": [
            "Refractory acute ischemic stroke with heavy clot burden or failed primary single-modality thrombectomy",
            "Large vessel occlusions with high clot friction (e.g. carotid T-occlusions, hyperdense MCA sign)",
            "Aspiration-assisted Stent retriever eXtraction (SAVE) or CAPTIVE technique for maximum first-pass effect (FPE)",
            "Complex terminal ICA and proximal M1 tandem thrombi"
        ],
        "preOpCriteria": [
            "CTA/MRA showing high-volume thromboembolism in proximal intracranial vessels",
            "ASPECTS >= 6 on non-contrast head CT with clinical-core mismatch",
            "Rapid groin access established under 60 minutes from hospital arrival",
            "Appropriate guide catheter support positioned in high cervical ICA"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "8F Balloon Guide Sheath (FlowGate2)", "spec": "95 cm length, 0.084 in lumen", "standardStore": "Neuro IR Store" },
            { "category": "Distal Aspiration Catheter", "name": "React 71 / Sofia Plus Catheter", "spec": "0.071 in ID, 132 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Microcatheter", "name": "Phenom 21 / Trevo Trak 21", "spec": "150 cm length, 0.021 in ID", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "Synchro-14 Guidewire", "spec": "0.014 in, 200 cm, soft tip", "standardStore": "Neuro IR Store" },
            { "category": "Stent Retriever", "name": "Solitaire Platinum / EmboTrap III Revascularization Device", "spec": "4-5 mm x 30-40 mm multi-channel stent retriever", "standardStore": "Neuro IR Store" },
            { "category": "Dual Vacuum System", "name": "Dual Direct Vacuum Syringes / Penumbra Pump", "spec": "High-vacuum dual-port setup", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Deliver 8F Balloon Guide Catheter into high cervical ICA; navigate intermediate aspiration catheter (React 71) over microcatheter to proximal clot margin.",
            "Cross thrombus with microcatheter and deploy stent retriever across the entire clot length.",
            "Pin the clot: advance the aspiration catheter over the stent retriever wire until its tip wedges firmly against the proximal clot face (SAVE / CAPTIVE configuration).",
            "Inflate BGC balloon to arrest antegrade cervical ICA flow.",
            "Connect aspiration pump to intermediate catheter and apply strong syringe aspiration to BGC.",
            "Withdraw stent retriever and intermediate aspiration catheter simultaneously as a single unit under continuous dual aspiration into the guide catheter.",
            "Deflate BGC balloon, perform completion angiography, and assess for complete TICI 3 recanalization."
        ],
        "complications": [
            "Intracranial hemorrhage / hemorrhagic transformation (3 - 5%)",
            "Distal emboli to new vascular territory (1 - 3%)",
            "Vessel perforation during aggressive wedge advancement (<1.5%)",
            "Groin puncture hematoma (1 - 2%)"
        ],
        "maayTariffInr": 125000,
        "vendorContacts": [
            "Medtronic Neurovascular (+91 98293 11223)",
            "Stryker Neuro (+91 98294 22334)",
            "Cerenovus / Johnson & Johnson (+91 98297 55667)"
        ],
        "consent": {
            "nameHi": "संयुक्त स्टेंट एवं सक्शन थ्रोम्बेक्टोमी (SAVE / CAPTIVE तकनीक - जटिल स्ट्रोक में दोहरा उपचार)",
            "indicationEn": "Combined dual-action stent retriever and suction catheter removal of large stubborn brain blood clots.",
            "indicationHi": "दिमाग की बड़ी नस में फंसे भारी या सख्त खून के थक्के को स्टेंट और सक्शन मशीन के संयुक्त प्रयास से बाहर निकालना।",
            "descriptionEn": "Both a wire mesh stent and a wide suction tube are advanced together to pinch the blood clot from both sides. With continuous vacuum from above and below, the clot is trapped and safely removed.",
            "descriptionHi": "इस आधुनिक तकनीक में जालीदार स्टेंट और वैक्यूम नली दोनों को एक साथ थक्के के पास ले जाया जाता है। थक्के को दोनों तरफ से पकड़ कर शक्तिशाली सक्शन के साथ एक ही बार में बाहर खींच लिया जाता है ताकि नस तुरंत खुल जाए।",
            "benefitsEn": [
                "Highest rate of complete single-pass vessel reopening (First-Pass Effect).",
                "Prevents clot fragmentation and downstream showering of emboli.",
                "Effective for large stubborn clots resistant to standard methods."
            ],
            "benefitsHi": [
                "पहली ही बार में पूरी नस खुलने की सर्वाधिक दर (फर्स्ट-पास इफेक्ट)।",
                "थक्के के टुकड़े टूटकर दिमाग में आगे बिखरने का खतरा न्यूनतम।",
                "कठिन और बड़े थक्कों को निकालने में अत्यधिक असरदार।"
            ],
            "specificRisksEn": [
                "Bleeding into the brain (hemorrhagic conversion 3-5%)",
                "Blood vessel tear or dissection (<1.5%)",
                "Failure of recanalization despite multiple attempts",
                "Puncture site hematoma"
            ],
            "specificRisksHi": [
                "दिमाग में खून का रिसाव (हेमरेज 3-5%)।",
                "नस की दीवार में चोट या फटना (<1.5%)।",
                "प्रयास के बावजूद नस का पूरी तरह न खुल पाना।",
                "जांघ में खून का थक्का जमना।"
            ],
            "alternativesEn": "Single-device aspiration or stent retrieval, IV tPA alone, or non-interventional medical therapy.",
            "alternativesHi": "केवल स्टेंट या केवल सक्शन का उपयोग, केवल नस से टीका, अथवा केवल दवाइयां।",
            "sedationTypeEn": "Conscious sedation or endotracheal general anesthesia.",
            "sedationTypeHi": "सचेत बेहोशी अथवा पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 5. Stroke: IA Thrombolysis
    {
        "id": "stroke-ia-thrombolysis-rtpa",
        "name": "Superselective Intra-Arterial Thrombolysis (rtPA) for Acute Cerebral Infarction",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-MT-005",
        "rghsCode": "694 / 05",
        "icd10": "I63.59 (Cerebral infarction due to occlusion of other cerebral artery)",
        "indications": [
            "Distal branch occlusions (M3/M4 MCA, anterior cerebral artery, or posterior cerebral artery) inaccessible to mechanical devices",
            "Residual distal micro-emboli following successful mechanical thrombectomy of proximal large vessel",
            "Early stroke presentation (<6 hours) with small-caliber vessel branch occlusion unsuitable for stent retrieval",
            "Central retinal artery occlusion (CRAO) presenting within ultra-early therapeutic window (<4-6 hours)"
        ],
        "preOpCriteria": [
            "NCCT brain confirming absence of intracranial hemorrhage or large demarcated stroke core",
            "INR <= 1.7, Platelets >= 100,000/uL, normal fibrinogen level (>150 mg/dL)",
            "Strict baseline systolic BP control (<180/105 mmHg)",
            "Microcatheter trackability to target branch confirmed under high-resolution roadmap"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "5F / 6F Introducer Sheath", "spec": "11 cm length, hemostatic valve", "standardStore": "Angio Suite Store" },
            { "category": "Guide Catheter", "name": "6F Envoy / Guider Softip Catheter", "spec": "95 cm length, 0.070 in lumen", "standardStore": "Neuro IR Store" },
            { "category": "Microcatheter", "name": "1.7F - 1.9F Excelsior SL-10 / Echelon 10 Microcatheter", "spec": "150 cm length, 0.0165 in lumen", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.010 - 0.014 in Traxcess / Synchro-10 Wire", "spec": "200 cm length, steerable microtip", "standardStore": "Neuro IR Store" },
            { "category": "Fibrinolytic Drug", "name": "Inj Alteplase (rtPA) / Tenecteplase", "spec": "20-50 mg vial for micro-dose titration (total 5-15 mg IA)", "standardStore": "SMS Pharmacy DDC-14" }
        ],
        "techniqueSteps": [
            "Right common femoral 6F access; place 6F guiding catheter in cervical ICA or vertebral artery.",
            "Perform cerebral DSA to identify the exact distal occluded cortical branch.",
            "Superselectively advance 1.7F microcatheter over 0.010-inch microwire directly into or immediately proximal to the distal thrombus.",
            "Administer intra-arterial rtPA in small aliquots (1 mg/mL diluted in saline) at 0.5 - 1.0 mg/min up to a maximum dose of 10-15 mg under intermittent fluoroscopic checks.",
            "Monitor for branch recanalization and distal runoff every 5 minutes.",
            "Cease infusion immediately upon clot lysis or if extravasation / vessel spasm is noted.",
            "Perform completion DSA; withdraw catheters and secure femoral access site."
        ],
        "complications": [
            "Intracranial hemorrhage (ICH) / hemorrhagic infarction (5 - 8%)",
            "Microcatheter-induced vessel dissection or perforation (1%)",
            "Systemic bleeding or hematoma (1 - 2%)",
            "Distal embolus migration (2%)"
        ],
        "maayTariffInr": 48000,
        "vendorContacts": [
            "Boehringer Ingelheim India (+91 98298 12345)",
            "Stryker Neurovascular (+91 98294 22334)",
            "Terumo Neuro (+91 98291 55678)"
        ],
        "consent": {
            "nameHi": "सुपरसिलेक्टिव इंट्रा-आर्टेरियल थ्रोम्बोलीसिस (दिमाग की नस में सीधे थक्का पिघलाने वाली दवा का इंजेक्शन)",
            "indicationEn": "Direct microcatheter injection of clot-dissolving medication into small, delicate brain arteries.",
            "indicationHi": "दिमाग की बहुत बारीक बंद नस में कैथेटर द्वारा सीधे खून का थक्का पिघलाने वाली दवा (rtPA) डालना।",
            "descriptionEn": "An ultra-thin microcatheter is guided directly to the blocked small branch in the brain. Powerful clot-busting medication is delivered in micro-doses directly onto the clot to dissolve it gently without tearing delicate vessel walls.",
            "descriptionHi": "दिमाग की बहुत बारीक नसों में जहां स्टेंट नहीं जा सकता, वहां बाल जैसी पतली नली पहुंचाकर सीधे थक्के के ऊपर खून पिघलाने वाली विशेष दवा की सूक्ष्म खुराक डाली जाती है जिससे थक्का घुल जाए और नस खुल जाए।",
            "benefitsEn": [
                "Reopens delicate small brain arteries beyond the reach of mechanical extraction devices.",
                "Reduces required drug dosage significantly compared to intravenous delivery, reducing systemic bleeding risks.",
                "Direct visual fluoroscopic confirmation of clot lysis."
            ],
            "benefitsHi": [
                "दिमाग की उन छोटी नसों को खोलता है जहां अन्य उपकरण नहीं पहुंच सकते।",
                "सीधे नस में डालने से दवा की बहुत कम मात्रा लगती है जिससे पूरे शरीर में ब्लीडिंग का खतरा घट जाता है।",
                "एक्स-रे पर थक्के के घुलने की तुरंत पुष्टि होना।"
            ],
            "specificRisksEn": [
                "Intracranial bleeding or hemorrhagic transformation (5-8%)",
                "Delicate small vessel rupture or spasm (<1%)",
                "Incomplete clot dissolution",
                "Access site hematoma"
            ],
            "specificRisksHi": [
                "दिमाग में खून का रिसाव (ब्रेन हेमरेज 5-8%)।",
                "बारीक नस का फटना अथवा सिकुड़ जाना (<1%)।",
                "दवा के बावजूद थक्का पूरी तरह न पिघलना।",
                "जांघ में खून का थक्का जमना।"
            ],
            "alternativesEn": "Intravenous thrombolysis alone, mechanical thrombectomy (if vessel caliber permits), or supportive medical management.",
            "alternativesHi": "केवल नस द्वारा पूरा टीका देना, अथवा केवल दवाइयों से इलाज।",
            "sedationTypeEn": "Conscious sedation with local anesthesia.",
            "sedationTypeHi": "स्थानीय सुन्नता एवं हल्की बेहोशी (Conscious Sedation)।"
        }
    },

    # 6. Stroke: Tandem Occlusion
    {
        "id": "stroke-tandem-angioplasty-stent",
        "name": "Emergent Intracranial Angioplasty and Stenting for Acute Tandem Stroke Occlusions",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-MT-006",
        "rghsCode": "694 / 06",
        "icd10": "I63.512 (Cerebral infarction due to occlusion of left middle cerebral artery)",
        "indications": [
            "Acute tandem occlusion: severe cervical internal carotid artery stenosis/occlusion combined with intracranial large vessel occlusion (ICA terminus or M1 MCA)",
            "Underlying intracranial atherosclerotic stenosis (ICAS) causing acute re-occlusion during thrombectomy",
            "Severe carotid dissection with downstream thromboembolic MCA occlusion",
            "Acute stroke within 24 hours with salvageable core-penumbra mismatch"
        ],
        "preOpCriteria": [
            "CTA demonstrating severe cervical ICA occlusion/tight stenosis with distal intracranial LVO",
            "NCCT ASPECTS >= 6; informed consent regarding necessity of emergency stenting and antiplatelet load",
            "Platelets >= 100,000/uL, baseline INR <= 1.4",
            "Readiness for intra-procedural IV antiplatelet infusion (Tirofiban / Cangrelor / Aspirin)"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "8F Long Sheath / Balloon Guide Catheter", "spec": "90 cm length, high-support shaft", "standardStore": "Neuro IR Store" },
            { "category": "PTA Balloon Catheter", "name": "Submax / Gateway PTA Balloon", "spec": "2.0-3.0 mm x 15-20 mm semi-compliant balloon", "standardStore": "Neuro IR Store" },
            { "category": "Carotid Stent", "name": "Carotid Wallstent / Precise Pro Nitinol Stent", "spec": "7-10 mm x 30-40 mm self-expanding stent", "standardStore": "Neuro IR Store" },
            { "category": "Intracranial Stent", "name": "Wingspan / Enterprise 2 Stent System", "spec": "3.5-4.5 mm x 15-20 mm intracranial stent", "standardStore": "Neuro IR Store" },
            { "category": "Antiplatelet Agent", "name": "Inj Tirofiban (Aggrastat) / Cangrelor", "spec": "Weight-based IV infusion kit", "standardStore": "SMS Pharmacy DDC-14" },
            { "category": "Stent Retriever", "name": "Solitaire Platinum 4x40 mm", "spec": "Retrievable thrombectomy stent", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "8F femoral access; place guide catheter in common carotid artery.",
            "Cross tight cervical carotid lesion with 0.014-inch microwire; perform gentle pre-dilation with 3-4 mm balloon.",
            "Advance intermediate catheter across cervical carotid into petrous/cavernous ICA up to the intracranial occlusion.",
            "Perform intracranial mechanical thrombectomy (Solitaire / aspiration) to achieve intracranial TICI 2b/3 reperfusion.",
            "Administer IV Tirofiban bolus (10 mcg/kg over 3 min) followed by maintenance infusion.",
            "Deploy self-expanding carotid stent (Wallstent or Precise) across the cervical carotid stenosis; perform post-dilation with 5-6 mm balloon.",
            "Perform final cervical and intracranial DSA confirming widely patent tandem segments without distal embolization.",
            "Achieve femoral hemostasis with double Perclose ProGlide closure."
        ],
        "complications": [
            "Intracranial hemorrhage exacerbated by emergency antiplatelet therapy (4 - 7%)",
            "Acute in-stent thrombosis (3 - 5%)",
            "Hyperperfusion syndrome / intracranial hemorrhage following abrupt flow restoration (1 - 3%)",
            "Carotid dissection or distal embolization (2 - 4%)"
        ],
        "maayTariffInr": 135000,
        "vendorContacts": [
            "Boston Scientific Interventional (+91 98293 66554)",
            "Medtronic Neuro (+91 98293 11223)",
            "Stryker Neuro (+91 98294 22334)"
        ],
        "consent": {
            "nameHi": "एक्यूट टैंडम स्ट्रोक: आपातकालीन कैरोटिड एंजियोप्लास्टी, स्टेंटिंग एवं थ्रोम्बेक्टोमी (गले व दिमाग की दोहरी रुकावट का इलाज)",
            "indicationEn": "Emergency reopening of both blocked neck artery (carotid) and blocked brain artery in severe tandem stroke.",
            "indicationHi": "गले की मुख्य नस में भारी सिकुड़न और दिमाग की नस में खून का थक्का - दोनों रुकावटों को एक साथ स्टेंट व थ्रोम्बेक्टोमी से खोलना।",
            "descriptionEn": "In complex strokes where both neck and brain vessels are blocked, doctors first clear the brain clot and then permanently widen and stent the neck artery to restore and protect brain circulation.",
            "descriptionHi": "गंभीर स्ट्रोक में जब गले की नस और दिमाग की नस दोनों बंद हों, तो पहले दिमाग का थक्का खींचा जाता है और फिर गले की नस में स्टेंट (धातु की जालीदार छल्ली) डालकर हमेशा के लिए खोल दिया जाता है।",
            "benefitsEn": [
                "Simultaneous resolution of proximal flow restriction and distal brain infarction.",
                "Prevents immediate catastrophic re-occlusion of brain arteries.",
                "Provides maximal chance of functional neurological recovery in severe tandem strokes."
            ],
            "benefitsHi": [
                "एक ही प्रक्रिया में गले और दिमाग की दोनों रुकावटों का पक्का समाधान।",
                "नस के दोबारा तुरंत बंद होने और जानलेवा स्थिति बनने से बचाव।",
                "गंभीर लकवे से उबरने और स्वतंत्र जीवन जीने का सर्वोत्तम अवसर।"
            ],
            "specificRisksEn": [
                "Brain hemorrhage due to required blood thinners (4-7%)",
                "Hyperperfusion injury (severe headache, seizures, or bleeding from sudden high flow) (1-3%)",
                "Stent clotting or thrombosis (3-5%)",
                "Groin bleeding"
            ],
            "specificRisksHi": [
                "खून पतला करने वाली दवाओं के कारण दिमाग में रक्तस्राव (4-7%)।",
                "अचानक तेज खून का दौरा शुरू होने से सिरदर्द या सूजन (हाइपरपरफ्यूजन सिंड्रोम 1-3%)।",
                "स्टेंट के अंदर दोबारा खून का थक्का जमना (3-5%)।",
                "जांघ में खून बहना।"
            ],
            "alternativesEn": "Isolated mechanical thrombectomy without stenting (high re-occlusion rate), medical therapy alone, or delayed elective carotid stenting.",
            "alternativesHi": "गले में बिना स्टेंट डाले केवल दिमाग का थक्का निकालना (नस दोबारा बंद होने का बहुत अधिक खतरा), अथवा केवल दवाइयां।",
            "sedationTypeEn": "General anesthesia with endotracheal intubation.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 7. Aneurysm: Bare Platinum Coiling
    {
        "id": "aneurysm-detachable-coiling",
        "name": "Endovascular Embolization of Intracranial Aneurysms with Detachable Bare Platinum Coils",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-ANEUR-007",
        "rghsCode": "694 / 07",
        "icd10": "I60.9 (Nontraumatic subarachnoid hemorrhage)",
        "indications": [
            "Ruptured intracranial saccular aneurysm presenting with acute subarachnoid hemorrhage (WFNS Grade I-IV)",
            "Unruptured cerebral aneurysm with high rupture risk factors (size >= 7 mm, daughter sac, posterior circulation, family history)",
            "Narrow-neck aneurysm (dome-to-neck ratio >= 2 or neck < 4 mm) suitable for primary coiling",
            "Surgically inaccessible or high-risk anterior/posterior circulation aneurysms"
        ],
        "preOpCriteria": [
            "3D rotational DSA brain defining aneurysm dimensions, dome-to-neck ratio, and parent vessel relationship",
            "Baseline coagulation within normal range: INR <= 1.3, Platelets >= 100,000/uL",
            "Adequate control of systemic blood pressure (systolic < 140 mmHg in ruptured cases)",
            "General anesthesia readiness with continuous neuro-monitoring"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F Introducer Sheath", "spec": "11 cm length, hemostatic valve", "standardStore": "Angio Suite Store" },
            { "category": "Guiding Catheter", "name": "6F Guider Softip / Envoy MP Catheter", "spec": "95 cm length, 0.070 in ID", "standardStore": "Neuro IR Store" },
            { "category": "Microcatheter", "name": "Excelsior SL-10 / Headway 17 Microcatheter", "spec": "150 cm length, pre-shaped 45 deg or 90 deg tip", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.014 in Synchro-14 / Traxcess Wire", "spec": "200 cm length, shapeable tip", "standardStore": "Neuro IR Store" },
            { "category": "Detachable Coils", "name": "Target 360 / Axium Prime Detachable Platinum Coils", "spec": "Framing, filling, and finishing bare platinum coils (2 mm to 14 mm)", "standardStore": "Neuro IR Store" },
            { "category": "Coil Detachment System", "name": "Electronic / Mechanical Coil Detachment Controller", "spec": "Instantaneous thermal/electrolytic detachment wand", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Femoral 6F access under general anesthesia; position 6F guiding catheter in internal carotid or vertebral artery.",
            "Acquire 3D rotational angiogram to select working angles profiling the aneurysm neck and dome without vessel overlap.",
            "Steam shape 1.7F microcatheter tip; navigate coaxially over 0.014-inch microwire directly into the center of the aneurysm sac.",
            "Deploy a 3D framing platinum coil to create an intrasaccular spherical basket along the aneurysm walls.",
            "Successively pack helical and 3D filling coils into the core of the aneurysm under roadmapping.",
            "Deploy ultrasoft finishing coils at the aneurysm neck until dense packing (>20-25% packing density) and Raymond-Roy Class I complete occlusion are achieved.",
            "Verify total aneurysm occlusion with preservation of parent vessel patency on completion 4-vessel DSA.",
            "Withdraw microcatheter; secure femoral hemostasis using vascular closure device."
        ],
        "complications": [
            "Intraprocedural aneurysm rupture and subarachnoid hemorrhage (1.5 - 3%)",
            "Thromboembolism and ischemic stroke (2 - 4%)",
            "Coil protrusion / herniation into parent artery requiring rescue balloon/stenting (1 - 2%)",
            "Aneurysm recurrence / coil compaction on long-term follow-up (10 - 15%)"
        ],
        "maayTariffInr": 95000,
        "vendorContacts": [
            "Stryker Neurovascular (+91 98294 22334)",
            "Medtronic Neuro (+91 98293 11223)",
            "MicroVention India (+91 98296 44556)"
        ],
        "consent": {
            "nameHi": "मस्तिष्क एन्यूरिज्म डिटैचेबल प्लैटिनम कॉइलिंग (दिमाग की फटी या फूलती नस की थैली में बारीक तार भरना)",
            "indicationEn": "Endovascular packing of brain aneurysm with soft platinum coils to prevent rupture or fatal brain bleeding.",
            "indicationHi": "दिमाग की नस में बने गुब्बारे (एन्यूरिज्म) को फटने या दोबारा ब्रेन हेमरेज होने से बचाने हेतु प्लैटिनम के बारीक तारों (कॉइल्स) से भरना।",
            "descriptionEn": "Under general anesthesia, a microcatheter is navigated from the groin artery up into the brain aneurysm. Ultra-soft detachable platinum coils are delivered one by one into the sac, forming a dense ball that seals off the aneurysm permanently.",
            "descriptionHi": "पूर्ण बेहोशी में जांघ की नस से बाल जैसी पतली नली दिमाग की फूली हुई नस की थैली (एन्यूरिज्म) के अंदर ले जाई जाती है। वहां प्लेटिनम धातु के अत्यंत महीन व मुलायम तार (कॉइल्स) भरकर थैली को पूरी तरह सील कर दिया जाता है ताकि खून अंदर न जा सके।",
            "benefitsEn": [
                "Completely seals off brain aneurysm without opening the skull (no craniotomy).",
                "Prevents fatal repeat subarachnoid hemorrhage in ruptured aneurysms.",
                "Rapid recovery with shorter hospital stay compared to open neurosurgical clipping."
            ],
            "benefitsHi": [
                "बिना सिर की हड्डी काटे (बिना ओपन सर्जरी) दिमाग के एन्यूरिज्म का शत-प्रतिशत सफल इलाज।",
                "दोबारा नस फटने और जानलेवा ब्रेन हेमरेज से पूर्ण सुरक्षा।",
                "ओपन सर्जरी की तुलना में बहुत कम दर्द, कम समय में अस्पताल से छुट्टी और जल्द सामान्य जीवन।"
            ],
            "specificRisksEn": [
                "Intra-procedural aneurysm rupture causing intracranial bleeding (1.5-3%)",
                "Blood clot formation and stroke (2-4%)",
                "Coil loop protruding into parent artery",
                "Long-term coil compaction requiring touch-up"
            ],
            "specificRisksHi": [
                "प्रक्रिया के दौरान कमजोर नस के फटने का जोखिम (1.5-3%)।",
                "थक्का जमने से स्ट्रोक या लकवे का खतरा (2-4%)।",
                "तार का सिरा मुख्य नस में बाहर आना।",
                "भविष्य में कॉइल दबने पर दोबारा जांच या अतिरिक्त उपचार की आवश्यकता (10-15%)।"
            ],
            "alternativesEn": "Open surgical clipping via craniotomy, flow-diverter stent placement, or conservative observation (for unruptured low-risk aneurysms).",
            "alternativesHi": "सिर का ऑपरेशन करके क्लिप लगाना (ओपन सर्जिकल क्लिपिंग), फ्लो-डायवर्टर स्टेंट, अथवा बिना ऑपरेशन निगरानी।",
            "sedationTypeEn": "General anesthesia with continuous endotracheal intubation.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 8. Aneurysm: BACE
    {
        "id": "aneurysm-balloon-assisted-coiling-bace",
        "name": "Balloon-Assisted Coil Embolization (BACE) for Wide-Neck Cerebral Aneurysms",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-ANEUR-008",
        "rghsCode": "694 / 08",
        "icd10": "I67.1 (Cerebral aneurysm, nonruptured)",
        "indications": [
            "Wide-neck cerebral aneurysm (neck >= 4 mm or dome-to-neck ratio < 2) with high risk of coil herniation",
            "Bifurcation aneurysms (e.g. basilar apex, MCA bifurcation, ACom) where branches arise from the neck",
            "Ruptured wide-neck aneurysms in the acute phase where antiplatelet therapy for stenting is contraindicated",
            "Aneurysm neck remodeling during dense packing"
        ],
        "preOpCriteria": [
            "3D rotational angiography mapping parent artery and branch anatomy relative to aneurysm neck",
            "Baseline laboratory workup: INR <= 1.4, Platelets >= 100,000/uL, normal renal function",
            "General anesthesia with neuromuscular blockade to eliminate patient movement",
            "Dual femoral access or single-sheath double catheterization capability"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F Long Guiding Sheath / 7F Sheath", "spec": "90 cm length with dual valve", "standardStore": "Neuro IR Store" },
            { "category": "Remodeling Balloon Catheter", "name": "HyperForm / Scepter C / Transform Compliant Balloon Catheter", "spec": "4 mm x 10-15 mm compliant / hyper-compliant balloon", "standardStore": "Neuro IR Store" },
            { "category": "Coiling Microcatheter", "name": "Excelsior SL-10 / Headway 17", "spec": "150 cm length, pre-shaped tip", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.010 in / 0.014 in Steerable Microguidewires", "spec": "200 cm length, hydrophilic platinum tip", "standardStore": "Neuro IR Store" },
            { "category": "Detachable Platinum Coils", "name": "Target 360 / Axium Prime Coils", "spec": "Detachable bare platinum coils", "standardStore": "Neuro IR Store" },
            { "category": "Balloon Inflation Unit", "name": "1 mL Hamilton / Precision Balloon Syringe", "spec": "50/50 contrast-saline mixture", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Place 6F/7F guide catheter into cervical ICA or vertebral artery under general anesthesia.",
            "Navigate compliant remodeling balloon catheter (HyperForm or Scepter C) across the aneurysm neck over a 0.010-inch wire.",
            "Navigate coiling microcatheter coaxially into the aneurysm dome.",
            "Inflate remodeling balloon gently across the aneurysm neck using dilute contrast to temporarily seal the neck opening.",
            "Deploy and frame the first coil safely against the inflated balloon wall; deflate balloon to confirm coil stability without herniation.",
            "Successively re-inflate balloon during deployment of subsequent filling and finishing coils, deflating between detachments to ensure patent parent vessel flow.",
            "Achieve dense neck occlusion (Raymond-Roy Class I); deflate and withdraw balloon catheter.",
            "Confirm preservation of all bifurcation branches and parent artery patency on final DSA."
        ],
        "complications": [
            "Thromboembolism on balloon surface (2 - 4%)",
            "Arterial dissection from balloon inflation (1 - 2%)",
            "Intraprocedural rupture during balloon overinflation (<2%)",
            "Transient parent vessel vasospasm (3 - 5%)"
        ],
        "maayTariffInr": 105000,
        "vendorContacts": [
            "Medtronic Neurovascular (+91 98293 11223)",
            "MicroVention India (+91 98296 44556)",
            "Stryker Neuro (+91 98294 22334)"
        ],
        "consent": {
            "nameHi": "बैलून-सहायता प्राप्त एन्यूरिज्म कॉइलिंग (BACE - चौड़े मुंह वाले एन्यूरिज्म में गुब्बारे की आड़ से तार भरना)",
            "indicationEn": "Temporary balloon remodeling to safely pack wide-neck brain aneurysms without coil escape.",
            "indicationHi": "चौड़े मुंह वाले एन्यूरिज्म में अस्थायी गुब्बारा फुलाकर सुरक्षात्मक दीवार बनाना ताकि कॉइल की तारें बाहर मुख्य नस में न गिरें।",
            "descriptionEn": "For wide-necked aneurysms, a small medical balloon is inflated across the aneurysm opening while coils are packed inside. Once the coils form a tight stable basket, the balloon is deflated and removed, leaving the artery clear.",
            "descriptionHi": "जिन एन्यूरिज्म का मुंह बहुत चौड़ा होता है, उनमें तार मुख्य नस में खिसक जाने का डर रहता है। इसलिए नस के मुंह पर एक विशेष छोटा गुब्बारा फुलाकर सहारा दिया जाता है और थैली में कॉइल्स भरी जाती हैं। काम पूरा होने पर गुब्बारा निकाल लिया जाता है।",
            "benefitsEn": [
                "Enables safe endovascular coiling of wide-neck and bifurcation aneurysms.",
                "Does not require permanent stent implantation, avoiding lifelong blood thinners.",
                "Allows higher packing density and better long-term occlusion."
            ],
            "benefitsHi": [
                "चौड़े मुंह वाले जटिल एन्यूरिज्म को बिना ओपन सर्जरी सुरक्षित रूप से बंद करना।",
                "दिमाग में कोई स्थायी छल्ली (स्टेंट) नहीं छोड़ी जाती जिससे लंबे समय तक खून पतला करने वाली दवाओं की जरूरत नहीं पड़ती।",
                "थैली को मजबूती से भरकर दोबारा खुलने का खतरा कम करना।"
            ],
            "specificRisksEn": [
                "Temporary clot formation around balloon requiring blood thinners (2-4%)",
                "Arterial dissection or stretch injury (<2%)",
                "Aneurysm rupture during procedure (<2%)",
                "Arterial spasm"
            ],
            "specificRisksHi": [
                "गुब्बारे के आसपास खून का थक्का बनने का जोखिम (2-4%)।",
                "नस की दीवार में खिंचाव या खरोंच (<2%)।",
                "प्रक्रिया के दौरान कमजोर थैली के फटने का खतरा (<2%)।",
                "नस में क्षणिक सिकुड़न।"
            ],
            "alternativesEn": "Stent-assisted coiling (requires dual antiplatelets), flow diverter stent, open surgical clipping, or observation.",
            "alternativesHi": "स्टेंट-सहायता प्राप्त कॉइलिंग (खून पतला करने की दवा जरूरी), फ्लो डायवर्टर, सिर का ऑपरेशन (क्लिपिंग), अथवा निगरानी।",
            "sedationTypeEn": "General anesthesia with endotracheal intubation.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 9. Aneurysm: SACE
    {
        "id": "aneurysm-stent-assisted-coiling-sace",
        "name": "Stent-Assisted Coil Embolization (SACE) for Complex Intracranial Aneurysms",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-ANEUR-009",
        "rghsCode": "694 / 09",
        "icd10": "I67.1 (Cerebral aneurysm, nonruptured)",
        "indications": [
            "Complex wide-neck unruptured aneurysms where balloon remodeling is inadequate to prevent coil herniation",
            "Fusiform or dissecting intracranial aneurysms requiring parent vessel scaffold reconstruction",
            "Recurrent aneurysms with coil compaction following prior coiling",
            "Aneurysms incorporating major branch vessels requiring structural scaffolding"
        ],
        "preOpCriteria": [
            "Mandatory dual antiplatelet therapy (DAPT: Aspirin 150 mg + Clopidogrel 75 mg or Ticagrelor 90 mg BID) for at least 5-7 days prior",
            "Point-of-care platelet reactivity testing (VerifyNow PRUTest) confirming therapeutic P2Y12 inhibition (PRU 60 - 200)",
            "Absence of active intracranial hemorrhage on baseline CT",
            "Elective admission with informed consent regarding long-term antiplatelet compliance"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F Guiding Sheath", "spec": "90 cm length, high-flexibility distal shaft", "standardStore": "Neuro IR Store" },
            { "category": "Intracranial Microstent", "name": "Enterprise 2 / Neuroform Atlas / LVIS Jr Microstent", "spec": "Laser-cut / braided nitinol stent (3.0-4.5 mm x 15-30 mm)", "standardStore": "Neuro IR Store" },
            { "category": "Stent Delivery Catheter", "name": "Prowler Select Plus / Headway 21 Microcatheter", "spec": "150 cm length, 0.021 in lumen", "standardStore": "Neuro IR Store" },
            { "category": "Coiling Microcatheter", "name": "Excelsior SL-10 Microcatheter", "spec": "150 cm length, pre-shaped 45 deg", "standardStore": "Neuro IR Store" },
            { "category": "Detachable Coils", "name": "Target / Axium Detachable Coils", "spec": "Bare platinum coils, assorted sizes", "standardStore": "Neuro IR Store" },
            { "category": "Platelet Function Test", "name": "VerifyNow PRU Cartridge", "spec": "Automated optical platelet assay", "standardStore": "Central Lab" }
        ],
        "techniqueSteps": [
            "Verify therapeutic PRU (60-200); position 6F guiding sheath in the target cervical internal carotid or vertebral artery under GA.",
            "Cross the aneurysm neck with stent delivery microcatheter (Headway 21 or Prowler Select Plus) over 0.014-inch microwire.",
            "Jailing technique: navigate coiling microcatheter into the aneurysm sac prior to deploying the stent, or trans-strut technique after deployment.",
            "Partially or fully deploy self-expanding intracranial microstent (Neuroform Atlas or Enterprise 2) across the neck, establishing a permanent metal scaffold.",
            "Pack detachable platinum coils sequentially through the jailed or trans-strut microcatheter into the aneurysm dome.",
            "The stent struts permanently hold the coil mass inside the sac and reconstruct the parent artery flow channel.",
            "Perform final control DSA confirming complete aneurysm occlusion (Raymond-Roy I) and widely patent stent lumen without in-stent thrombosis.",
            "Continue strict dual antiplatelet regimen post-procedure."
        ],
        "complications": [
            "In-stent acute or subacute thrombosis (2 - 5%)",
            "Thromboembolic stroke (2 - 4%)",
            "Hemorrhagic complications related to dual antiplatelet therapy (1 - 3%)",
            "Stent migration or malapposition (<1.5%)"
        ],
        "maayTariffInr": 118000,
        "vendorContacts": [
            "Stryker Neurovascular (+91 98294 22334)",
            "Cerenovus / J&J (+91 98297 55667)",
            "MicroVention India (+91 98296 44556)"
        ],
        "consent": {
            "nameHi": "स्टेंट-सहायता प्राप्त एन्यूरिज्म कॉइलिंग (SACE - दिमाग की नस में स्थायी जालीदार स्टेंट लगाकर कॉइलिंग)",
            "indicationEn": "Permanent intracranial stent scaffolding combined with coiling for complex, wide-neck brain aneurysms.",
            "indicationHi": "जटिल और चौड़े मुंह वाले एन्यूरिज्म में दिमाग की नस के अंदर स्थायी जालीदार स्टेंट (छल्ली) लगाकर नसों की थैली में कॉइल भरना।",
            "descriptionEn": "A permanent self-expanding flexible metal stent is placed inside the brain artery across the aneurysm neck. The stent forms a protective mesh that holds the coils safely inside the aneurysm and restores the natural vessel shape.",
            "descriptionHi": "दिमाग की मुख्य नस में एन्यूरिज्म के मुंह पर एक बहुत बारीक धातु की जालीदार नली (स्टेंट) छोड़ी जाती है। यह स्टेंट कॉइल्स को बाहर गिरने से रोकता है और नस की प्राकृतिक दीवार को दोबारा बना देता है। इसके बाद थैली में कॉइल्स भर दी जाती हैं।",
            "benefitsEn": [
                "Allows definitive treatment of wide-neck and dissecting aneurysms impossible to coil alone.",
                "Reduces long-term recurrence and coil compaction by fostering endothelial cell healing.",
                "Reconstructs weakened parent vessel wall."
            ],
            "benefitsHi": [
                "अत्यंत जटिल व चौड़े मुंह वाले एन्यूरिज्म का स्थायी एवं सुरक्षित उपचार।",
                "नस की भीतरी परत में नई कोशिकाएं पनपने में मदद मिलती है जिससे भविष्य में बीमारी दोबारा नहीं उभरती।",
                "कमजोर हो चुकी नस की दीवार को स्थायी मजबूती मिलना।"
            ],
            "specificRisksEn": [
                "Stent clotting (thrombosis) leading to stroke (2-5%)",
                "Bleeding risks due to mandatory dual blood thinners (aspirin/clopidogrel) (1-3%)",
                "Aneurysm rupture during manipulation (<2%)",
                "Strict requirement to take blood thinners without missing doses"
            ],
            "specificRisksHi": [
                "स्टेंट में खून का थक्का जमने से स्ट्रोक या लकवे का खतरा (2-5%)।",
                "खून पतला करने वाली दोहरी दवाइयों (एस्पिरिन आदि) के कारण शरीर में कहीं भी ब्लीडिंग का जोखिम (1-3%)।",
                "उपचार के दौरान कमजोर नस के फटने का खतरा (<2%)।",
                "दवाइयों को बिना नागा कई महीनों तक नियमित खाना अनिवार्य होना।"
            ],
            "alternativesEn": "Flow diverter stent, open neurosurgical clipping, balloon-assisted coiling (if suitable), or medical monitoring.",
            "alternativesHi": "फ्लो डायवर्टर स्टेंट, सिर की ओपन सर्जरी (क्लिपिंग), बैलून कॉइलिंग, अथवा केवल दवाइयों से निगरानी।",
            "sedationTypeEn": "General anesthesia with endotracheal intubation.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 10. Aneurysm: Flow Diverter
    {
        "id": "aneurysm-flow-diverter",
        "name": "Flow-Diverter Embolization (Pipeline, Surpass, FRED, Silk) for Unruptured Wide-Neck Aneurysms",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-ANEUR-010",
        "rghsCode": "694 / 10",
        "icd10": "I67.1 (Cerebral aneurysm, nonruptured)",
        "indications": [
            "Large or giant unruptured intracranial aneurysms (>= 10 mm) of the internal carotid artery (petrous to paraclinoid)",
            "Wide-neck, fusiform, blister-like, or dissecting intracranial aneurysms",
            "Aneurysms refractory to or recurring after previous endovascular coiling",
            "Symptomatic mass effect from large aneurysms on cranial nerves (e.g. optic, oculomotor)"
        ],
        "preOpCriteria": [
            "Documented pre-procedure dual antiplatelet therapy for 7-10 days (Aspirin + Ticagrelor or Clopidogrel)",
            "Platelet reactivity confirmed in therapeutic window (VerifyNow PRU 60-180)",
            "3D rotational angiography accurately sizing parent artery diameter proximal and distal to aneurysm",
            "Patient counseling on strict 6-12 month antiplatelet compliance"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "8F Long Guiding Sheath (Neuron MAX 088)", "spec": "90 cm length, 0.088 in inner diameter", "standardStore": "Neuro IR Store" },
            { "category": "Intermediate Catheter", "name": "Navien 058 / Sofia 5F Distal Access Catheter", "spec": "115-125 cm length, flexible tip", "standardStore": "Neuro IR Store" },
            { "category": "Flow Diverter Delivery Catheter", "name": "Phenom 27 / Marksman Microcatheter", "spec": "150 cm length, 0.027 in inner lumen", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.014 in Synchro-14 Guidewire", "spec": "200 cm length, shapeable tip", "standardStore": "Neuro IR Store" },
            { "category": "Flow Diverter Stent", "name": "Pipeline Vantage / Surpass Evolve / FRED Device", "spec": "Braided 48-64 nitinol/platinum wire stent (2.5 - 5.0 mm diameter x 12 - 35 mm length)", "standardStore": "Neuro IR Store" },
            { "category": "Post-Dilation Balloon", "name": "Scepter C / HyperGlide Balloon (Optional)", "spec": "4 mm x 10 mm compliant balloon", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Verify PRU; position 8F Neuron MAX sheath in cervical ICA with intermediate catheter (Navien 058) in cavernous ICA under GA.",
            "Navigate 0.027-inch microcatheter (Phenom 27 or Marksman) across the aneurysm into the distal parent artery over 0.014-inch microwire.",
            "Load and advance the braided flow-diverting stent (Pipeline or Surpass) to the microcatheter tip.",
            "Deploy the flow diverter across the aneurysm neck using unsheathing, pushing, and forward loading to ensure maximal mesh density across the neck and complete wall apposition.",
            "Perform high-resolution flat-panel VasoCT / Cone-Beam CT to verify 100% circumferential wall apposition of the stent struts.",
            "Acquire control DSA demonstrating immediate intra-aneurysmal contrast stasis (O'Kelly-Marotta Phase B/C) and unobstructed flow in covered side branches.",
            "Perform balloon remodeling if any strut malapposition is identified.",
            "Secure vascular access using closure device; continue therapeutic dual antiplatelets."
        ],
        "complications": [
            "Delayed aneurysm rupture prior to complete thrombosis (1 - 2%)",
            "Thromboembolic stroke or side branch occlusion (e.g. ophthalmic, anterior choroidal) (2 - 4%)",
            "Intracerebral hemorrhage associated with dual antiplatelet therapy (1 - 2%)",
            "In-stent stenosis or acute stent thrombosis (2 - 3%)"
        ],
        "maayTariffInr": 145000,
        "vendorContacts": [
            "Medtronic Neurovascular (+91 98293 11223)",
            "Stryker Neuro (+91 98294 22334)",
            "MicroVention India (+91 98296 44556)"
        ],
        "consent": {
            "nameHi": "फ्लो-डायवर्टर स्टेंट एम्बोलाइजेशन (Pipeline / Surpass - रक्त प्रवाह की दिशा बदलने वाली विशेष सूक्ष्म जाली)",
            "indicationEn": "Implantation of ultra-dense flow-diverting stent across wide-neck or giant brain aneurysm to redirect blood flow and cure aneurysm without coiling.",
            "indicationHi": "दिमाग के बड़े व जटिल एन्यूरिज्म में रक्त प्रवाह की दिशा बदलने वाला आधुनिक फ्लो-डायवर्टर स्टेंट लगाना ताकि थैली खुद-ब-खुद सूख कर बंद हो जाए।",
            "descriptionEn": "A dense mesh stent made of 48-64 microscopic wires is placed inside the artery across the aneurysm. It redirects blood flow away from the aneurysm, causing the blood inside the aneurysm to clot and seal naturally over time while preserving normal branches.",
            "descriptionHi": "दिमाग की नस में 48 से 64 बहुत बारीक तारों से बनी एक विशेष घनी जाली (फ्लो डायवर्टर) छोड़ी जाती है। यह जाली खून के बहाव को एन्यूरिज्म के अंदर जाने से रोककर सीधे आगे भेजती है, जिससे एन्यूरिज्म की थैली में खून जाना बंद हो जाता है और वह धीरे-धीरे खुद ही सूखकर बंद हो जाती है।",
            "benefitsEn": [
                "Highest long-term cure rate (>85-90% complete occlusion at 1 year) for large, giant, and wide-neck aneurysms.",
                "Does not require entering the delicate aneurysm sac, reducing rupture risk during surgery.",
                "Enables progressive shrinkage and relief of nerve compression."
            ],
            "benefitsHi": [
                "बड़े और जटिल एन्यूरिज्म को 1 वर्ष में 90% तक पूरी तरह सुखाने में सक्षम विश्व की सबसे आधुनिक तकनीक।",
                "थैली के अंदर सुई या तार डालने की जरूरत नहीं पड़ती, जिससे प्रक्रिया के दौरान नस फटने का खतरा बहुत कम होता है।",
                "थैली सिकुड़ने से मस्तिष्क की नसों पर पड़ने वाला दबाव कम होना।"
            ],
            "specificRisksEn": [
                "Delayed rupture of large aneurysm in first few weeks before complete clotting (1-2%)",
                "Stent thrombosis or stroke requiring emergency intervention (2-4%)",
                "Side branch occlusion (e.g., eye branch or small brain branches)",
                "Need for strict dual blood thinners for 6-12 months"
            ],
            "specificRisksHi": [
                "पूरी तरह बंद होने से पहले शुरुआती हफ्तों में कमजोर नस के फटने का दुर्लभ जोखिम (1-2%)।",
                "स्टेंट में थक्का जमने या स्ट्रोक का खतरा (2-4%)।",
                "आंख या मस्तिष्क की छोटी साइड शाखा में खून का बहाव धीमा होना।",
                "6 से 12 महीने तक खून पतला करने वाली दवाइयों का कड़ाई से सेवन अनिवार्य होना।"
            ],
            "alternativesEn": "Surgical clipping with bypass, traditional stent-assisted coiling, parent vessel sacrifice, or observation.",
            "alternativesHi": "सिर का बड़ा ऑपरेशन व बाईपास (क्लिपिंग), पारंपरिक स्टेंट व कॉइलिंग, मुख्य नस को बंद करना, अथवा केवल दवाइयों से निगरानी।",
            "sedationTypeEn": "General anesthesia with endotracheal intubation.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 11. Aneurysm: WEB Device
    {
        "id": "aneurysm-web-device-disruption",
        "name": "Endosaccular Flow Disruption using the Woven EndoBridge (WEB) Device",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-ANEUR-011",
        "rghsCode": "694 / 11",
        "icd10": "I67.1 (Cerebral aneurysm, nonruptured) / I60.9",
        "indications": [
            "Wide-neck bifurcation aneurysms (basilar apex, MCA bifurcation, ACom, ICA terminus) with dome-to-neck ratio < 2",
            "Acute ruptured wide-neck aneurysms where dual antiplatelet therapy for stenting is contraindicated",
            "Aneurysms with unfavorable neck anatomy where coil embolization carries high herniation risk",
            "Alternative to microsurgical clipping for complex bifurcation aneurysms"
        ],
        "preOpCriteria": [
            "Precise 3D rotational DSA calibration of aneurysm width, height, and neck width to select exact WEB device size",
            "Normal baseline coagulation screen (INR <= 1.4, Platelets >= 100,000/uL)",
            "Single antiplatelet (Aspirin) or DAPT prepared depending on operator protocol",
            "General anesthesia with neuromuscular blockade"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F Long Guide Sheath", "spec": "90 cm length, high-support", "standardStore": "Neuro IR Store" },
            { "category": "WEB Delivery Microcatheter", "name": "VIA 17 / VIA 21 / VIA 27 Microcatheter", "spec": "150 cm length dedicated braided catheter", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.014 in Synchro-14 Guidewire", "spec": "200 cm length, shapeable tip", "standardStore": "Neuro IR Store" },
            { "category": "Intrasaccular Device", "name": "Woven EndoBridge (WEB SLS / SL) Device", "spec": "Dual-layer micro-braided nitinol basket (4 mm to 11 mm diameter)", "standardStore": "Neuro IR Store" },
            { "category": "Detachment Controller", "name": "WEB Electro-Thermal Detachment Controller", "spec": "Instantaneous detachment system", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "6F femoral access; place 6F guide catheter in target ICA or dominant vertebral artery under GA.",
            "Calibrate aneurysm dimensions on 3D roadmapping; select WEB device matching aneurysm average width and height minus 1 mm for compression.",
            "Navigate VIA delivery microcatheter into the center of the aneurysm dome.",
            "Introduce WEB device into VIA microcatheter; deploy by holding the delivery wire steady while unsheathing the microcatheter.",
            "Assess WEB position: device should span the entire aneurysm neck, conform to walls, and not protrude into parent branches.",
            "Acquire control DSA and flat-panel VasoCT to confirm adequate lateral wall apposition and flow disruption.",
            "Detach the WEB device electro-thermally; withdraw VIA microcatheter.",
            "Perform final runs showing immediate intra-saccular stasis and patent bifurcation daughter branches."
        ],
        "complications": [
            "Device protrusion into parent artery requiring rescue stent (1 - 3%)",
            "Thromboembolic stroke (2 - 4%)",
            "Intraprocedural rupture (<1.5%)",
            "Aneurysm remnant or device compression on long-term follow-up (10%)"
        ],
        "maayTariffInr": 140000,
        "vendorContacts": [
            "MicroVention Terumo (+91 98296 44556)",
            "Medtronic Neuro (+91 98293 11223)",
            "Stryker Neuro (+91 98294 22334)"
        ],
        "consent": {
            "nameHi": "वोवेन एंडोब्रिज (WEB) डिवाइस द्वारा एन्यूरिज्म का अंतःसैक्यूलर उपचार (थैली के अंदर विशेष जालीदार टोकरी लगाना)",
            "indicationEn": "Single-device intrasaccular mesh basket deployment for wide-neck bifurcation brain aneurysms.",
            "indicationHi": "दो शाखाओं में बंटने वाली नसों के चौड़े मुंह वाले एन्यूरिज्म में थैली के अंदर ही विशेष जालीदार टोकरी (WEB डिवाइस) लगाकर सुरक्षित बंद करना।",
            "descriptionEn": "A self-expanding, finely woven basket made of micro-braided nitinol wires is delivered directly inside the aneurysm sac. It disrupts the turbulent blood flow at the neck and seals the aneurysm in one step, without requiring coils or stents.",
            "descriptionHi": "दिमाग की नस के कांटे (बाइफरकेशन) पर बने एन्यूरिज्म के अंदर एक विशेष सूक्ष्म जालीदार टोकरी (WEB डिवाइस) खोली जाती है। यह उपकरण थैली के मुंह को अंदर से ही पूरी तरह ढक देता है जिससे खून अंदर जाना बंद हो जाता है और बाहर मुख्य नस में कोई स्टेंट नहीं छोड़ना पड़ता।",
            "benefitsEn": [
                "Single-step definitive treatment without needing dozens of coils.",
                "Does not require permanent stent in the brain artery, significantly reducing long-term blood thinner requirements.",
                "Ideal for ruptured wide-neck aneurysms where stents are dangerous."
            ],
            "benefitsHi": [
                "अनेक कॉइल्स की जगह केवल एक ही अत्याधुनिक डिवाइस से पूरा इलाज।",
                "मुख्य नस में कोई स्टेंट नहीं छोड़ा जाता जिससे लंबे समय तक खून पतला करने वाली दवाइयों की जरूरत नहीं होती।",
                "फटे हुए चौड़े मुंह के एन्यूरिज्म के लिए अत्यंत सुरक्षित।"
            ],
            "specificRisksEn": [
                "Device protrusion into parent vessel (1-3%)",
                "Thromboembolic stroke (2-4%)",
                "Device compression over time requiring follow-up monitoring",
                "Procedure conversion to stent or coiling"
            ],
            "specificRisksHi": [
                "डिवाइस का सिरा मुख्य नस में बाहर आना (1-3%)।",
                "थक्का जमने से स्ट्रोक या लकवे का खतरा (2-4%)।",
                "समय के साथ डिवाइस के दबने से दोबारा जांच की आवश्यकता।",
                "तकनीकी कठिनाई आने पर पारंपरिक स्टेंट या कॉइलिंग में बदलना।"
            ],
            "alternativesEn": "Surgical clipping, stent-assisted coiling, balloon-assisted coiling, or flow diversion.",
            "alternativesHi": "सिर का ऑपरेशन (क्लिपिंग), स्टेंट-सहायता प्राप्त कॉइलिंग, बैलून कॉइलिंग, अथवा फ्लो डायवर्टर।",
            "sedationTypeEn": "General anesthesia with endotracheal intubation.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 12. Aneurysm: Contour Neurovascular System
    {
        "id": "aneurysm-contour-neurovascular-system",
        "name": "Intrasaccular Contour Neurovascular System Implantation",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-ANEUR-012",
        "rghsCode": "694 / 12",
        "icd10": "I67.1 (Cerebral aneurysm, nonruptured)",
        "indications": [
            "Wide-neck bifurcation aneurysms of anterior communicating artery, MCA bifurcation, and basilar apex",
            "Targeting the lower half / neck of the aneurysm rather than the entire sac volume",
            "Unruptured or ruptured cerebral aneurysms suitable for intrasaccular flow disruption without parent vessel stenting",
            "Patients with contraindications to prolonged dual antiplatelet therapy"
        ],
        "preOpCriteria": [
            "High-resolution 3D rotational DSA assessing neck diameter, lower dome geometry, and bifurcation angle",
            "Standard pre-op neurovascular lab profile (creatinine, electrolytes, CBC, PT/INR)",
            "Antiplatelet protocol established per operator discretion (aspirin monotherapy often sufficient)",
            "General anesthesia readiness"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F Guiding Sheath", "spec": "90 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Delivery Microcatheter", "name": "0.021 in / 0.027 in Microcatheter (Neuroslider / VIA 21)", "spec": "150 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.014 in Synchro-14 Guidewire", "spec": "200 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Intrasaccular Implant", "name": "Contour Neurovascular System", "spec": "Self-expanding nitinol mesh disc (5 mm to 14 mm diameter)", "standardStore": "Neuro IR Store" },
            { "category": "Detachment Unit", "name": "Contour Mechanical / Electrolytic Detachment Unit", "spec": "Controlled release handle", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Position 6F guide catheter in cervical ICA or vertebral artery under GA.",
            "Navigate 0.021-inch microcatheter over 0.014-inch microwire into the lower third of the aneurysm sac.",
            "Select Contour size based on maximum neck diameter plus 2-4 mm for oversizing.",
            "Advance Contour implant to microcatheter tip; carefully deploy by unsheathing.",
            "The device self-expands into a dual-layer mesh cup, sealing the aneurysm neck and lower dome while remaining entirely within the sac.",
            "Verify that no portion of the mesh prolapses into bifurcation branches.",
            "Detach the implant mechanically; perform multi-projection control DSA to verify neck flow disruption and branch patency.",
            "Withdraw microcatheter; establish puncture site hemostasis."
        ],
        "complications": [
            "Device migration or branch prolapse (<2%)",
            "Thromboembolism and ischemic stroke (2 - 3%)",
            "Aneurysm perforation during catheterization (<1%)",
            "Incomplete occlusion on long-term follow-up (8 - 12%)"
        ],
        "maayTariffInr": 138000,
        "vendorContacts": [
            "Cerus Endovascular (+91 98293 11223)",
            "Stryker Neurovascular (+91 98294 22334)",
            "MicroVention India (+91 98296 44556)"
        ],
        "consent": {
            "nameHi": "कंटूर न्यूरोवास्कुलर सिस्टम इम्प्लांटेशन (एन्यूरिज्म के मुंह पर अंतःसैक्यूलर सुरक्षात्मक कप लगाना)",
            "indicationEn": "Placement of an intrasaccular shape-memory mesh cup across the neck of wide-neck brain aneurysms.",
            "indicationHi": "चौड़े मुंह वाले मस्तिष्क एन्यूरिज्म के निचले हिस्से में विशेष जालीदार कप (कंटूर सिस्टम) लगाकर थैली के मुंह को सुरक्षित सील करना।",
            "descriptionEn": "A delicate self-expanding mesh cup is placed inside the base of the aneurysm. It acts as an internal plug across the aneurysm opening, stopping blood flow into the weak balloon without touching the normal brain arteries.",
            "descriptionHi": "दिमाग की नस के गुब्बारे (एन्यूरिज्म) के अंदर नीचे के हिस्से में एक विशेष आकार ग्रहण करने वाला बारीक जालीदार कप बैठाया जाता है। यह कप थैली के मुंह को भीतर से ही सील कर देता है और बाहर की सामान्य नसों में खून का बहाव सुचारू बनाए रखता है।",
            "benefitsEn": [
                "Treats the neck of the aneurysm directly without packing the entire fragile dome.",
                "Minimizes foreign metal load in the brain compared to coiling.",
                "Reduces the requirement for prolonged dual blood-thinning medications."
            ],
            "benefitsHi": [
                "नाजुक थैली को पूरी तरह भरने के बजाय केवल उसके मुंह को अंदर से सील करने की आधुनिक तकनीक।",
                "दिमाग में कम से कम धातु छोड़ी जाती है।",
                "लंबे समय तक खून पतला करने की भारी दवाइयों की आवश्यकता नहीं पड़ती।"
            ],
            "specificRisksEn": [
                "Device shift or edge protruding into branch vessel (<2%)",
                "Thrombus formation and stroke (2-3%)",
                "Aneurysm rupture during placement (<1%)",
                "Residual aneurysm neck flow"
            ],
            "specificRisksHi": [
                "उपकरण के किनारे का बाहर सामान्य नस में हल्का सा खिसकना (<2%)।",
                "थक्का जमने से स्ट्रोक का खतरा (2-3%)।",
                "प्रक्रिया के दौरान कमजोर नस के फटने का जोखिम (<1%)।",
                "थैली के मुंह पर थोड़ा रक्त प्रवाह शेष रहना।"
            ],
            "alternativesEn": "WEB device, stent-assisted coiling, surgical clipping, or flow diverter.",
            "alternativesHi": "वेब डिवाइस (WEB), स्टेंट कॉइलिंग, सिर का ऑपरेशन (क्लिपिंग), अथवा फ्लो डायवर्टर।",
            "sedationTypeEn": "General anesthesia with endotracheal intubation.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 13. PVO with BTO
    {
        "id": "therapeutic-pvo-with-bto",
        "name": "Therapeutic Parent Vessel Occlusion (PVO) with Balloon Test Occlusion (BTO)",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-PVO-013",
        "rghsCode": "694 / 13",
        "icd10": "I67.1 (Cerebral aneurysm, nonruptured) / C76.0",
        "indications": [
            "Giant, unclippable, and uncoilable intracranial internal carotid or vertebral artery aneurysms",
            "Advanced skull base neoplasms encasing or invading the internal carotid artery prior to radical surgical resection",
            "Severe traumatic or iatrogenic pseudoaneurysms or high-flow direct carotid-cavernous fistulae with destroyed parent wall",
            "Ruptured dissecting intracranial vertebral artery aneurysms incorporating PICA origin"
        ],
        "preOpCriteria": [
            "Comprehensive 4-vessel cerebral DSA evaluating anterior and posterior communicating arteries",
            "Awake cooperative patient for continuous intra-arterial neurological examination during test occlusion, or neuro-monitoring under EEG/SSEP/tcMEP",
            "Continuous arterial line BP monitoring and systemic anticoagulation (ACT 250-300 sec)",
            "Informed consent regarding risk of delayed ischemia despite passing BTO"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "7F / 8F Introducer Sheaths (Bilateral Femoral)", "spec": "11 cm length, high-flow", "standardStore": "Angio Suite Store" },
            { "category": "BTO Balloon Catheter", "name": "HyperGlide / HyperForm Occlusion Balloon Catheter", "spec": "4-7 mm diameter compliant balloon", "standardStore": "Neuro IR Store" },
            { "category": "Diagnostic Catheter", "name": "5F Headhunter / Simmons Catheter", "spec": "100 cm length for contralateral cross-compression angiogram", "standardStore": "Neuro IR Store" },
            { "category": "Embolic Devices", "name": "Microvascular Plugs (Amplatzer MVP) / Large Detachable Coils", "spec": "MVP 5-9 mm and 0.018/0.035 in fibered coils", "standardStore": "Neuro IR Store" },
            { "category": "Anticoagulation", "name": "Inj Heparin Sodium", "spec": "5000 IU vial with ACT titration", "standardStore": "SMS Pharmacy DDC-14" }
        ],
        "techniqueSteps": [
            "Bilateral femoral arterial access under local anesthesia with conscious sedation.",
            "Systemic heparinization to target ACT 250-300 seconds.",
            "Navigate occlusion balloon catheter into target ICA/VA; position diagnostic catheter in contralateral carotid or vertebral artery.",
            "Inflate balloon to achieve complete flow arrest in target artery; perform contralateral angiography to evaluate cross-flow across anterior and posterior communicating arteries.",
            "Maintain test occlusion for 20-30 minutes with continuous awake neurological assessment (speech, motor power, cranial nerves, mental status).",
            "Hypotensive challenge: lower mean arterial pressure by 20 mmHg with IV labetalol/hydralazine for 10 minutes to unmask watershed vulnerability.",
            "If patient passes BTO clinically and angiographically (venous phase delay <2 sec), proceed to permanent vessel occlusion using detachable coils and Amplatzer microvascular plugs.",
            "Confirm complete parent artery thrombosis and intact collateral cerebral perfusion on completion angiogram."
        ],
        "complications": [
            "Thromboembolism from stagnant column proximal/distal to balloon (2 - 4%)",
            "Delayed cerebral ischemic infarction or watershed ischemia (3 - 5%)",
            "De novo aneurysm formation in collateral circulation over long term (1 - 2%)",
            "Arterial dissection at balloon site (1 - 2%)"
        ],
        "maayTariffInr": 85000,
        "vendorContacts": [
            "Medtronic Neuro (+91 98293 11223)",
            "Cook Medical India (+91 98292 34567)",
            "Stryker Neuro (+91 98294 22334)"
        ],
        "consent": {
            "nameHi": "बैलून टेस्ट ऑक्लूजन (BTO) एवं मुख्य मस्तिष्क धमनी का स्थायी बंद करना (पेरेंट वेसल ऑक्लूजन - PVO)",
            "indicationEn": "Testing collateral brain blood flow and permanently closing an irreparable diseased parent artery supplying giant aneurysm or skull base tumor.",
            "indicationHi": "अत्यंत बड़े व असाध्य एन्यूरिज्म या ट्यूमर से घिरी दिमाग की मुख्य नस को बंद करने से पूर्व गुब्बारे द्वारा जांच (BTO) करना और फिर नस को स्थायी रूप से बंद करना।",
            "descriptionEn": "Before a damaged main brain artery is closed, a temporary balloon blocks it for 20-30 minutes while the patient is carefully checked to ensure the other side of the brain can take over blood supply. If safe, the diseased artery is permanently sealed with coils and plugs.",
            "descriptionHi": "जब दिमाग की कोई मुख्य नस इतनी खराब हो जाए कि उसे बचाया न जा सके, तो पहले उस नस में 20-30 मिनट के लिए अस्थायी गुब्बारा फुलाकर देखा जाता है कि दिमाग के दूसरे हिस्से की नसें खून की आपूर्ति पूरी कर पा रही हैं या नहीं। जांच में पूरी तरह सुरक्षित पाए जाने पर ही उस नस को कॉइल्स व प्लग द्वारा हमेशा के लिए बंद किया जाता है।",
            "benefitsEn": [
                "Definitively cures giant, complex, or ruptured aneurysms untreatable by any other technique.",
                "Enables safe radical surgical removal of skull base cancer by eliminating catastrophic carotid hemorrhage.",
                "Pre-procedure testing verifies brain safety and prevents unheralded strokes."
            ],
            "benefitsHi": [
                "असाध्य व विशालकाय एन्यूरिज्म का स्थायी इलाज जो अन्य किसी विधि से संभव नहीं।",
                "सिर के ट्यूमर के बड़े ऑपरेशन से पहले नस फटने और अचानक अत्यधिक खून बहने के जानलेवा खतरे को खत्म करना।",
                "पहले से गुब्बारे से जांच कर मस्तिष्क के सुरक्षित होने की पक्की तसल्ली करना।"
            ],
            "specificRisksEn": [
                "Failing test occlusion requiring emergency balloon deflation",
                "Delayed stroke or watershed brain ischemia despite passing test (3-5%)",
                "Blood clot formation during balloon inflation (2-4%)",
                "Arterial dissection"
            ],
            "specificRisksHi": [
                "जांच के दौरान हाथ-पैर में कमजोरी आने पर गुब्बारे को तुरंत खाली करना और प्रक्रिया रोकना।",
                "जांच पास करने के बाद भी भविष्य में दिमाग में खून का दौरा कम होने से लकवे का जोखिम (3-5%)।",
                "जांच के समय खून का थक्का जमना (2-4%)।",
                "नस की अंदरूनी परत छिलना।"
            ],
            "alternativesEn": "Extracranial-to-intracranial (EC-IC) bypass surgery followed by parent vessel ligation, flow diversion, or supportive care.",
            "alternativesHi": "ईसी-आईसी सर्जिकल बाईपास ऑपरेशन, फ्लो डायवर्टर, अथवा केवल दवाइयों से देखभाल।",
            "sedationTypeEn": "Local anesthesia with minimal conscious sedation (awake testing required).",
            "sedationTypeHi": "स्थानीय सुन्नता (जांच के दौरान मरीज का पूरी तरह होश में रहकर बात करना अनिवार्य है)।"
        }
    },

    # 14. bAVM: Onyx / Squid
    {
        "id": "bavm-onyx-squid-embolization",
        "name": "Transarterial Onyx / Squid Embolization of Brain Arteriovenous Malformations (bAVM)",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-AVM-014",
        "rghsCode": "694 / 14",
        "icd10": "Q28.2 (Arteriovenous malformation of cerebral vessels)",
        "indications": [
            "Ruptured brain arteriovenous malformation (bAVM) presenting with intracranial hemorrhage",
            "Spetzler-Martin Grade I-III AVMs targeted for curative endovascular embolization or pre-surgical devascularization",
            "Palliative targeted embolization of high-risk angiographic features (flow-related intranidal/pedicular aneurysms, venous ectasias)",
            "Pre-radiosurgery volume reduction for AVMs > 3 cm"
        ],
        "preOpCriteria": [
            "Superselective catheterization anatomy documented on diagnostic DSA (nidus type: compact vs diffuse, en-passage feeders)",
            "Coagulation profile normalized: INR <= 1.3, Platelets >= 100,000/uL",
            "General anesthesia with continuous arterial blood pressure monitoring and induced hypotension capability",
            "DMSO-compatible microcatheter and liquid embolic preparation confirmed"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F Introducer Sheath & Guiding Catheter (Envoy / Guider)", "spec": "6F 95 cm length", "standardStore": "Neuro IR Store" },
            { "category": "DMSO-Compatible Microcatheter", "name": "Marathon / Apollo / Sonic Detachable-Tip Microcatheter", "spec": "150 cm length, 1.3F-1.5F distal tip, 1.5-3.0 cm detachable segment", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.010 in Mirage / Hybrid Microguidewire", "spec": "200 cm length, ultra-flexible atraumatic tip", "standardStore": "Neuro IR Store" },
            { "category": "Liquid Embolic Agent", "name": "Onyx 18 / Onyx 34 / Squid 12 / Squid 18", "spec": "Ethylene vinyl alcohol (EVOH) copolymer dissolved in DMSO with tantalum", "standardStore": "Neuro IR Store" },
            { "category": "Vehicle", "name": "Dimethyl Sulfoxide (DMSO)", "spec": "1 mL sterile vial for microcatheter dead-space priming", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Femoral 6F access; guide catheter positioned in feeding ICA, ECA, or vertebral artery under general anesthesia.",
            "Navigate DMSO-compatible detachable-tip microcatheter (Marathon or Apollo) superselectively into the arterial feeder immediately at the nidal margin.",
            "Perform superselective microcatheter DSA to confirm wedged position, rule out en-passage branch supply to eloquent brain, and identify draining veins.",
            "Flush microcatheter thoroughly with saline, then prime dead space with exactly 0.23-0.28 mL of sterile anhydrous DMSO.",
            "Slowly inject EVOH liquid embolic (Onyx 18 or 34) under continuous subtracted fluoroscopic roadmapping.",
            "Create an embolic plug at the microcatheter tip; allow controlled reflux (<=1 cm onto detachable tip) to lock the catheter.",
            "Push liquid embolic forward in an antegrade 'lava-like' front, permeating the AVM nidus and occluding the proximal draining vein early termination.",
            "Cease injection if unexpected venous outflow occlusion occurs before adequate nidal cast penetration.",
            "Gently snap-retract the microcatheter to separate the detachable tip, leaving the solid EVOH cast securely embedded.",
            "Perform completion DSA documenting nidal volume reduction and patent normal cerebral circulation."
        ],
        "complications": [
            "Intracranial hemorrhage from delayed venous outflow occlusion or normal perfusion pressure breakthrough (NPPB) (3 - 6%)",
            "Ischemic stroke from non-target embolic reflux into normal cortical arteries (2 - 4%)",
            "Microcatheter entrapment / retained catheter tip (<2%)",
            "Vasospasm during microcatheter navigation (2%)"
        ],
        "maayTariffInr": 125000,
        "vendorContacts": [
            "Medtronic Neurovascular (+91 98293 11223)",
            "Balt India / MicroVention (+91 98296 44556)",
            "Stryker Neuro (+91 98294 22334)"
        ],
        "consent": {
            "nameHi": "मस्तिष्क धमनी-शिरा विकृति (bAVM) ओनिक्स / स्क्विड लिक्विड एम्बोलाइजेशन (दिमाग के नसों के गुच्छे को तरल दवा से बंद करना)",
            "indicationEn": "Transarterial injection of liquid embolic copolymer to seal abnormal high-pressure brain AVM tangle and prevent brain hemorrhage.",
            "indicationHi": "दिमाग में धमनियों और शिराओं के असामान्य व खतरनाक गुच्छे (AVM) को फटने और ब्रेन हेमरेज होने से बचाने हेतु तरल दवा (Onyx) से सील करना।",
            "descriptionEn": "Under general anesthesia, an ultra-thin microcatheter is guided deep into the tangled brain vessels. A specialized medical liquid (Onyx) is slowly injected, flowing like molten lava through the abnormal tangle and solidifying permanently into a cast.",
            "descriptionHi": "पूर्ण बेहोशी में जांघ की नस से बाल जितनी बारीक नली दिमाग की नसों के गुच्छे के बिल्कुल पास ले जाई जाती है। वहां एक विशेष तरल दवा (Onyx) डाली जाती है जो गुच्छे के अंदर फैलकर जम जाती है और खराब नसों को हमेशा के लिए बंद कर देती है।",
            "benefitsEn": [
                "Cures or substantially reduces the size of life-threatening brain vascular malformations without brain cutting.",
                "Dramatically reduces bleeding risk and cures AVM-related seizures or headaches.",
                "Makes subsequent surgery or gamma knife radiation dramatically safer."
            ],
            "benefitsHi": [
                "बिना सिर का बड़ा ऑपरेशन किए खतरनाक गुच्छे को 100% सुखाना या आकार बहुत छोटा करना।",
                "भविष्य में जानलेवा ब्रेन हेमरेज और मिर्गी के दौरों से सुरक्षा।",
                "बाद में होने वाले ऑपरेशन या रेडिएशन (गामा नाइफ) को अत्यधिक सुरक्षित बनाना।"
            ],
            "specificRisksEn": [
                "Intracranial hemorrhage due to altered brain hemodynamics (3-6%)",
                "Stroke due to medication inadvertently entering normal brain arteries (2-4%)",
                "Microcatheter tip sticking in the brain vessel (<2%)",
                "Need for multiple staged sessions"
            ],
            "specificRisksHi": [
                "नस बंद होने के बाद दिमाग में दबाव बदलने से रक्तस्राव/हेमरेज का जोखिम (3-6%)।",
                "दवा गलती से सामान्य नस में जाने से लकवा या कमजोरी (2-4%)।",
                "बारीक नली के सिरे का नस में चिपक जाना (<2%)।",
                "बड़े गुच्छे में कई चरणों (Sessions) में इलाज की आवश्यकता होना।"
            ],
            "alternativesEn": "Microsurgical AVM resection, stereotactic radiosurgery (Gamma Knife / CyberKnife), or conservative observation.",
            "alternativesHi": "सिर का बड़ा ऑपरेशन (सर्जिकल रिसेक्शन), गामा नाइफ रेडिएशन, अथवा केवल दवाइयों द्वारा निगरानी।",
            "sedationTypeEn": "General anesthesia with controlled hypotensive monitoring.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 15. bAVM: PHIL
    {
        "id": "bavm-phil-embolization",
        "name": "Transarterial PHIL Embolization of bAVMs",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-AVM-015",
        "rghsCode": "694 / 15",
        "icd10": "Q28.2 (Arteriovenous malformation of cerebral vessels)",
        "indications": [
            "Brain AVMs planned for subsequent stereotactic radiosurgery (SRS) requiring artifact-free CT/MR imaging",
            "Deep seated or eloquent area brain AVMs where metallic streak artifact of tantalum-containing agents impairs follow-up",
            "Compact AVM nidus requiring homogeneous non-adhesive polymer distribution",
            "Ruptured AVM pedicular aneurysm devascularization"
        ],
        "preOpCriteria": [
            "Angiographic mapping confirming appropriate pedicle feeder size for microcatheter delivery",
            "Coagulation normal (INR <= 1.3, Platelets >= 100,000/uL)",
            "General anesthesia with neuro-resuscitation monitoring",
            "PHIL embolic ready with pre-mixed covalently bound iodine (no shaking required)"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F Guiding Catheter Sheath", "spec": "90-95 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Microcatheter", "name": "Scepter Mini / Sonic / Apollo DMSO-Compatible Catheter", "spec": "150 cm length, detachable tip", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.010 in Mirage Wire", "spec": "200 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Liquid Embolic", "name": "PHIL (Precipitating Hydrophobic Injectable Liquid) 25% / 30%", "spec": "Polylactide-co-glycolide (PLGA) with covalently bound triiodophenol in DMSO", "standardStore": "Neuro IR Store" },
            { "category": "Solvent", "name": "DMSO Syringe Unit", "spec": "1 mL pre-packaged anhydrous DMSO", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Deliver 6F guiding catheter to the feeding cervical artery under GA.",
            "Superselectively catheterize the target AVM feeding artery with a DMSO-compatible microcatheter (Sonic or Scepter Mini).",
            "Confirm wedged superselective position; flush catheter with saline and prime with 0.25 mL sterile DMSO.",
            "Inject ready-to-use PHIL embolic slowly under continuous subtracted fluoroscopy.",
            "Observe continuous homogeneous forward precipitation without the dark metallic shadowing of tantalum.",
            "Occlude the nidal compartment and feeder; maintain safe proximal plug.",
            "Aspirate microcatheter or snap-retract detachable tip.",
            "Perform control DSA and post-embolization non-contrast CT to demonstrate minimal beam-hardening artifact."
        ],
        "complications": [
            "Post-embolization intracranial hemorrhage (3 - 5%)",
            "Ischemic stroke from non-target embolization (2 - 3%)",
            "Catheter retention (<1.5%)",
            "Transient headache or regional swelling (5%)"
        ],
        "maayTariffInr": 128000,
        "vendorContacts": [
            "MicroVention Terumo (+91 98296 44556)",
            "Medtronic Neuro (+91 98293 11223)",
            "Stryker Neuro (+91 98294 22334)"
        ],
        "consent": {
            "nameHi": "मस्तिष्क AVM फिल (PHIL) लिक्विड एम्बोलाइजेशन (बिना धातु वाली विशेष तरल दवा से नसों का गुच्छा बंद करना)",
            "indicationEn": "Transarterial embolization of brain AVM using non-metallic radiopaque liquid polymer that causes minimal CT/MRI artifact.",
            "indicationHi": "दिमाग के नसों के गुच्छे को एक नई तरल दवा (PHIL) से बंद करना जो भविष्य के सीटी/एमआरआई स्कैन में कोई रुकावट या काली छाया नहीं छोड़ती।",
            "descriptionEn": "A new generation liquid embolic is delivered through a microcatheter directly into the brain AVM. It solidifies cleanly without metallic powder, allowing crystal-clear CT and MRI scans for future radiosurgery or checkups.",
            "descriptionHi": "दिमाग के गुच्छे में बहुत बारीक नली द्वारा आधुनिक तरल दवा डाली जाती है। यह दवा गुच्छे में जमकर उसे बंद कर देती है और इसमें कोई धातु का पाउडर न होने के कारण बाद में एमआरआई व सीटी स्कैन में दिमाग की नसें बिल्कुल साफ दिखाई देती हैं।",
            "benefitsEn": [
                "Generates virtually zero metallic streak artifacts on follow-up CT and MRI scans.",
                "Ideal preparation for stereotactic radiosurgery (Gamma Knife).",
                "Ready-to-use without requiring 20-30 minutes of mechanical shaking."
            ],
            "benefitsHi": [
                "उपचार के बाद होने वाले सीटी व एमआरआई स्कैन में कोई काली छाया या खराबी नहीं आती।",
                "गामा नाइफ रेडिएशन थेरेपी से पहले नसों के गुच्छे को सिकोड़ने के लिए सर्वोत्तम।",
                "दवा को बिना किसी देरी के तुरंत इस्तेमाल किया जा सकता है।"
            ],
            "specificRisksEn": [
                "Intracranial bleeding during or after procedure (3-5%)",
                "Stroke from accidental spread into normal arteries (2-3%)",
                "Catheter sticking in vessel (<1.5%)",
                "Mild temporary headache"
            ],
            "specificRisksHi": [
                "प्रक्रिया के दौरान या बाद में दिमाग में खून का रिसाव (3-5%)।",
                "दवा सामान्य नस में जाने से लकवे का जोखिम (2-3%)।",
                "नली के चिपकने का दुर्लभ खतरा।",
                "अस्थायी सिरदर्द।"
            ],
            "alternativesEn": "Onyx embolization, open microsurgical resection, stereotactic radiosurgery, or medical therapy.",
            "alternativesHi": "ओनिक्स (Onyx) द्वारा इलाज, सिर का ऑपरेशन (क्लिपिंग/रिसेक्शन), गामा नाइफ, अथवा दवाइयां।",
            "sedationTypeEn": "General anesthesia with endotracheal intubation.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 16. bAVM: Transvenous Retrograde Embolization
    {
        "id": "bavm-transvenous-retrograde-embolization",
        "name": "Transvenous Retrograde Embolization of Ruptured Brain AVMs",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-AVM-016",
        "rghsCode": "694 / 16",
        "icd10": "Q28.2 (Arteriovenous malformation of cerebral vessels) / I61.9",
        "indications": [
            "Small deep brain AVMs (basal ganglia, thalamus, brainstem, ventricles) with single draining vein",
            "Ruptured AVMs where arterial feeders are tortuous, inaccessible, or en-passage",
            "Residual nidus following incomplete surgical resection, radiosurgery, or arterial embolization",
            "High-risk hemorrhagic AVMs where transarterial approach failed to achieve cure"
        ],
        "preOpCriteria": [
            "Detailed venous anatomy verified on DSA showing single dominant draining vein accessible via jugular approach",
            "Coagulation normal (INR <= 1.3, Platelets >= 100,000/uL)",
            "Systemic arterial pressure line and deliberate systemic hypotension protocol ready",
            "Dual access (femoral arterial + femoral venous) arranged"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F Arterial Sheath + 6F/7F Venous Sheath", "spec": "Bilateral femoral access", "standardStore": "Angio Suite Store" },
            { "category": "Venous Guiding Catheter", "name": "6F Neuron MAX / Guider Catheter", "spec": "90 cm length for internal jugular and dural sinus access", "standardStore": "Neuro IR Store" },
            { "category": "Intermediate Catheter", "name": "Distal Access Intermediate Catheter (Sofia 5F / Navien 058)", "spec": "115-125 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Microcatheter System", "name": "Apollo / Marathon DMSO-Compatible Microcatheter", "spec": "150 cm length with detachable tip", "standardStore": "Neuro IR Store" },
            { "category": "Liquid Embolic & Coils", "name": "Onyx 18/34 or PHIL + Detachable Microcoils", "spec": "EVOH liquid embolic and packing coils for venous pressure cook technique", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Place arterial 6F sheath for roadmapping/monitoring and 6F/7F venous sheath for intervention under GA.",
            "Navigate venous guide catheter up into the internal jugular vein and dural sinus (transverse/sigmoid or straight sinus).",
            "Advance intermediate catheter into the single draining vein of the AVM.",
            "Carefully steer detachable-tip microcatheter in a retrograde fashion against venous flow into the draining vein right at the venous-nidal junction.",
            "Pressure Cooker Technique: deploy 1-2 detachable microcoils and a small liquid embolic plug around the microcatheter tip in the draining vein to block retrograde reflux.",
            "Lower systemic mean arterial pressure to 50-60 mmHg via neuro-anesthesiologist.",
            "Inject Onyx or PHIL under high pressure: forced retrograde penetration of the entire nidus occurs back toward the arterial feeders.",
            "Confirm complete nidal cast filling and absence of early venous drainage on simultaneous arterial DSA.",
            "Detach microcatheter tip; pull catheters; normalize blood pressure gradually under strict monitoring."
        ],
        "complications": [
            "Catastrophic intraprocedural AVM rupture from premature venous occlusion without complete nidal kill (4 - 8%)",
            "Venous sinus thrombosis or cerebral venous infarction (3 - 5%)",
            "Ischemic stroke from liquid embolic reflux into arterial vessels (2%)",
            "Severe post-procedural brain edema (4%)"
        ],
        "maayTariffInr": 132000,
        "vendorContacts": [
            "Medtronic Neurovascular (+91 98293 11223)",
            "MicroVention India (+91 98296 44556)",
            "Balt India (+91 98295 33445)"
        ],
        "consent": {
            "nameHi": "ट्रांसवेनस रेट्रोग्रेड bAVM एम्बोलाइजेशन (दिमाग की शिरा/नीली नस के रास्ते उल्टी दिशा से गुच्छे को बंद करना)",
            "indicationEn": "Curative retrograde closure of deep brain AVM through its single draining vein when arterial access is impossible.",
            "indicationHi": "दिमाग के गहरे हिस्से में स्थित नसों के गुच्छे को खून ले जाने वाली नीली नस (शिरा) के रास्ते उल्टी दिशा में जाकर पूरी तरह बंद करना।",
            "descriptionEn": "When arteries to a brain AVM are too dangerous or tiny to navigate, doctors enter through the vein in the groin, steer up into the brain's draining vein in reverse, and inject liquid embolic backwards to cure the entire tangle in one attempt.",
            "descriptionHi": "जब धमनी का रास्ता अत्यधिक जोखिम भरा या बंद हो, तो जांघ की नीली नस (वेन) से कैथेटर दिमाग की गंदा खून निकालने वाली नस में उल्टी दिशा से पहुंचाया जाता है। वहां से विशेष तरल दवा डालकर पूरे गुच्छे को पीछे की ओर से पूरी तरह बंद कर दिया जाता है।",
            "benefitsEn": [
                "Achieves complete 100% cure in deep, inaccessible brain AVMs where surgery is impossible.",
                "Saves patients with recurrent bleeding from inoperable brainstem or thalamic AVMs.",
                "Single-stage definitive obliteration."
            ],
            "benefitsHi": [
                "दिमाग के अत्यंत गहरे व नाजुक हिस्सों के गुच्छों का 100% पक्का इलाज जहां ओपन सर्जरी जानलेवा हो सकती है।",
                "दोबारा ब्रेन हेमरेज होने के खतरे को हमेशा के लिए समाप्त करना।",
                "एक ही बार में पूरी विकृति को नष्ट करने की विशेष क्षमता।"
            ],
            "specificRisksEn": [
                "Intra-procedural brain hemorrhage if vein clots before all arteries are sealed (4-8%)",
                "Brain swelling or venous stroke (3-5%)",
                "Intensive care management required for strict post-op blood pressure control",
                "Catheter entrapment"
            ],
            "specificRisksHi": [
                "प्रक्रिया के दौरान दिमाग में गंभीर रक्तस्राव/हेमरेज का बड़ा जोखिम (4-8%)।",
                "मस्तिष्क में सूजन या नस का थक्का जमना (3-5%)।",
                "प्रक्रिया के बाद आईसीयू में ब्लड प्रेशर को लगातार कम रखने की सख्त जरूरत।",
                "कैथेटर का नस में फंसना।"
            ],
            "alternativesEn": "High-risk microsurgery, stereotactic radiosurgery with multi-year latency, or conservative palliative care.",
            "alternativesHi": "अत्यधिक जोखिम भरी ओपन सर्जरी, गामा नाइफ रेडिएशन (जिसमें असर आने में 2-3 साल लगते हैं), अथवा केवल दवाइयां।",
            "sedationTypeEn": "General anesthesia with strict invasive blood pressure control.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 17. dAVF: Transarterial Liquid Embolization
    {
        "id": "davf-transarterial-embolization-liquid",
        "name": "Transarterial Embolization of Dural Arteriovenous Fistulae (dAVF)",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-DAVF-017",
        "rghsCode": "694 / 17",
        "icd10": "I67.841 (Reversible cerebrovascular vasoconstriction syndrome) / I67.848",
        "indications": [
            "High-risk cranial dural arteriovenous fistulae (Borden Type II/III, Cognard Type IIb-V) with cortical venous reflux (CVR)",
            "Intractable pulsatile tinnitus, progressive cranial neuropathies, or ocular symptoms (chemosis, proptosis)",
            "History of intracranial hemorrhage or venous congestion from dAVF",
            "Accessible transarterial feeders from external carotid artery (middle meningeal, occipital, ascending pharyngeal)"
        ],
        "preOpCriteria": [
            "Complete 6-vessel cerebral DSA defining all dural feeding arteries, fistulous shunt point, and cortical venous drainage",
            "Rule out dangerous dangerous anastomoses to internal carotid or vertebral artery prior to liquid embolic injection",
            "Coagulation within surgical limits (INR <= 1.4, Platelets >= 80,000/uL)",
            "General anesthesia with neuromuscular paralysis"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F Guiding Sheath / Catheter", "spec": "90-95 cm length, high-support", "standardStore": "Neuro IR Store" },
            { "category": "Microcatheter", "name": "Headway Duo / Marathon / Sonic DMSO-Compatible Microcatheter", "spec": "150 cm length, 1.5F tip", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.010 in Mirage / Traxcess Wire", "spec": "200 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Liquid Embolic Agent", "name": "Onyx 18 / Onyx 34 / Squid 18 / PHIL", "spec": "Non-adhesive liquid embolic with tantalum/iodine", "standardStore": "Neuro IR Store" },
            { "category": "Solvent", "name": "DMSO 1 mL Vial", "spec": "Anhydrous solvent", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Place 6F guide catheter in target external carotid artery branch (e.g. MMA, occipital artery) under GA.",
            "Advance DMSO-compatible microcatheter over 0.010-inch microwire superselectively to the exact fistulous point on the dural sinus wall.",
            "Acquire magnified high-frame-rate DSA; confirm no dangerous transdural anastomoses to the ophthalmic, ICA, or vertebral circulation.",
            "Flush microcatheter with saline and prime with 0.25 mL DMSO.",
            "Infuse Onyx or PHIL slowly under continuous fluoroscopic subtraction; allow controlled reflux to create a wedge plug.",
            "Push embolic across the dural fistula point into the proximal origin of the draining vein ('foot of the vein') to eliminate the shunt permanently.",
            "Cease injection once the fistulous communication is completely eradicated.",
            "Perform control DSA of bilateral internal and external carotid arteries confirming total cure of the dAVF."
        ],
        "complications": [
            "Cranial nerve palsies (facial, hypoglossal, trigeminal) from liquid embolic penetration into vasa nervorum (2 - 5%)",
            "Non-target reflux into internal carotid or vertebral arteries causing stroke (1 - 3%)",
            "Intracranial hemorrhage from acute venous outflow alteration (2 - 4%)",
            "Scalp necrosis or severe ear pain from external carotid branch devascularization (1 - 2%)"
        ],
        "maayTariffInr": 115000,
        "vendorContacts": [
            "Medtronic Neurovascular (+91 98293 11223)",
            "Stryker Neuro (+91 98294 22334)",
            "MicroVention India (+91 98296 44556)"
        ],
        "consent": {
            "nameHi": "ड्यूरल आर्टेरियोवीनस फिस्टुला (dAVF) ट्रांसआर्टेरियल लिक्विड एम्बोलाइजेशन (दिमाग के पर्दे की असामान्य नस को बंद करना)",
            "indicationEn": "Transarterial liquid embolic closure of dangerous brain dural fistula to eliminate cortical reflux and stroke/bleeding risk.",
            "indicationHi": "दिमाग के पर्दे (ड्यूरा) में धमनी और नस के खतरनाक सीधे जुड़ाव (फिस्टुला) को बंद करना ताकि ब्रेन हेमरेज व कान में धड़कन जैसी आवाज से मुक्ति मिले।",
            "descriptionEn": "A microcatheter is guided through the neck and scalp arteries directly to the abnormal short-circuit on the brain's protective covering. Specialized liquid embolic is injected to seal the exact leak and cure the fistula permanently.",
            "descriptionHi": "जांघ की नस से कैथेटर को सिर के पर्दे की नसों तक पहुंचाया जाता है जहां धमनी और नस का गलत जुड़ाव हो गया है। वहां विशेष तरल दवा भरकर उस शॉर्ट-सर्किट को हमेशा के लिए बंद कर दिया जाता है जिससे कान में सीटी जैसी आवाज आना बंद हो जाती है और नस फटने का खतरा टल जाता है।",
            "benefitsEn": [
                "Permanently cures high-risk dural fistulae without open skull surgery.",
                "Eliminates life-threatening cortical venous reflux and risk of intracranial hemorrhage.",
                "Immediately relieves distressing pulsatile tinnitus, whooshing sounds in the head, and eye redness."
            ],
            "benefitsHi": [
                "बिना सिर की हड्डी काटे (बिना ओपन सर्जरी) दिमाग के पर्दे के फिस्टुला का 100% पक्का इलाज।",
                "दिमाग में नसों पर बढ़ता दबाव खत्म कर ब्रेन हेमरेज से पूर्ण सुरक्षा।",
                "कान में दिल की धड़कन जैसी लगातार आवाज आने (पल्सेटाइल टिनिटस) से तुरंत राहत।"
            ],
            "specificRisksEn": [
                "Temporary or permanent cranial nerve weakness (facial droop, swallowing difficulty) (2-5%)",
                "Stroke if embolic flows into brain arteries (1-3%)",
                "Scalp numbness, pain, or hair loss along treated artery",
                "Incomplete closure requiring additional transvenous session"
            ],
            "specificRisksHi": [
                "चेहरे या जीभ की तंत्रिका (नर्व) पर असर पड़ने से चेहरे का टेढ़ापन या सुन्नता (2-5%)।",
                "दवा दिमाग की मुख्य नस में जाने से लकवे का जोखिम (1-3%)।",
                "सिर की त्वचा में हल्का दर्द या सुन्नता।",
                "पूरी तरह बंद न होने पर नीली नस (वेन) के रास्ते दूसरे उपचार की आवश्यकता।"
            ],
            "alternativesEn": "Transvenous embolization, open neurosurgical disconnection of fistula, stereotactic radiosurgery, or clinical observation.",
            "alternativesHi": "नीली नस के रास्ते इलाज (ट्रांसवेनस), सिर का ऑपरेशन, गामा नाइफ, अथवा निगरानी।",
            "sedationTypeEn": "General anesthesia with endotracheal intubation.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 18. dAVF: Transvenous Sinus Coil and Liquid Embolic Occlusion
    {
        "id": "davf-transvenous-sinus-occlusion",
        "name": "Transvenous Sinus Coil and Liquid Embolic Occlusion of Cranial dAVFs",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-DAVF-018",
        "rghsCode": "694 / 18",
        "icd10": "I67.841 (Reversible cerebrovascular vasoconstriction syndrome) / I67.848",
        "indications": [
            "Dural arteriovenous fistulae involving isolated, diseased, or non-functional dural venous sinuses (transverse, sigmoid, or superior sagittal sinus)",
            "Cavernous sinus dAVFs refractory to transarterial approaches",
            "Cognard Type IIa/IIb fistulae where the involved sinus segment no longer drains normal brain tissue",
            "Failure of transarterial embolization due to multiple tiny transosseous arterial feeders"
        ],
        "preOpCriteria": [
            "Rigorous assessment of venous phase DSA confirming that the target venous sinus segment does not receive critical normal cerebral cortical venous drainage",
            "Normal baseline coagulation parameters",
            "Internal jugular and dural sinus patency evaluated",
            "General anesthesia with complete paralysis"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F / 7F Femoral Venous Sheath + 5F Arterial Sheath", "spec": "Dual groin access", "standardStore": "Angio Suite Store" },
            { "category": "Venous Guiding Catheter", "name": "6F Guider Softip / Envoy Guiding Catheter", "spec": "90 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Microcatheter", "name": "Excelsior SL-10 / Headway 17 / Echelon 10", "spec": "150 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.014 in Synchro-14 Guidewire", "spec": "200 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Embolic Coils & Liquid", "name": "Bare Platinum & Fibered Detachable Coils + Onyx 34", "spec": "Dense sinus packing coils (6 mm to 20 mm) and liquid embolic", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Femoral arterial 5F access (for control roadmap angiography) and femoral venous 6F/7F access under GA.",
            "Advance 6F venous guide catheter up internal jugular vein into the sigmoid, transverse, or cavernous sinus.",
            "Navigate microcatheter over 0.014-inch microwire directly into the diseased dural sinus segment harboring the fistulous nidus.",
            "Deploy multiple framing and dense filling coils (fibered and bare platinum) to pack the sinus lumen densely from distal to proximal.",
            "Supplement with liquid embolic (Onyx 34) injection into the coil mesh to ensure complete thrombogenic seal across the shunting sinus wall.",
            "Perform simultaneous arterial DSA of bilateral external and internal carotid arteries to verify complete cessation of arteriovenous shunting.",
            "Confirm that normal cerebral venous drainage via adjacent patent sinuses is completely preserved.",
            "Withdraw all catheters; achieve venous and arterial hemostasis."
        ],
        "complications": [
            "Venous infarction or intracranial hypertension if normal draining sinuses are compromised (2 - 5%)",
            "Cranial nerve deficits (especially in cavernous sinus packing: CN III, IV, VI palsies) (3 - 7%)",
            "Venous perforation during catheterization (<1%)",
            "Femoral vein thrombosis or groin hematoma (1 - 2%)"
        ],
        "maayTariffInr": 120000,
        "vendorContacts": [
            "Medtronic Neuro (+91 98293 11223)",
            "Stryker Neuro (+91 98294 22334)",
            "MicroVention India (+91 98296 44556)"
        ],
        "consent": {
            "nameHi": "ट्रांसवेनस ड्यूरल साइनस कॉइलिंग एवं लिक्विड एम्बोलाइजेशन (नीली नस के रास्ते दिमाग के खराब साइनस को कॉइल्स से बंद करना)",
            "indicationEn": "Transvenous coil and liquid occlusion of diseased dural venous sinus harboring complex arteriovenous fistula.",
            "indicationHi": "दिमाग की गंदा खून ले जाने वाली खराब बड़ी नस (साइनस) में कॉइल्स और तरल दवा भरकर फिस्टुला को हमेशा के लिए बंद करना।",
            "descriptionEn": "Through the vein in the groin, catheters are advanced into the brain's venous sinus where the abnormal fistula drains. Soft coils and medical liquid embolic are packed densely inside this isolated sinus to stop the abnormal flow completely.",
            "descriptionHi": "जांघ की नीली नस से कैथेटर को सिर के अंदर की बड़ी वेन (साइनस) तक पहुंचाया जाता है जहां नस का फिस्टुला खुल रहा होता है। उस खराब हिस्से में बहुत सारे बारीक तार (कॉइल्स) और विशेष दवा भरकर उसे पूरी तरह सील कर दिया जाता है ताकि फिस्टुला तुरंत बंद हो जाए।",
            "benefitsEn": [
                "Complete permanent cure of complex dural fistulae refractory to arterial treatment.",
                "Eliminates abnormal high pressure in the brain veins and prevents fatal brain hemorrhage.",
                "Resolves severe eye swelling, double vision, and loud head noises."
            ],
            "benefitsHi": [
                "जटिल फिस्टुला का शत-प्रतिशत पक्का इलाज जो धमनी के रास्ते संभव नहीं होता।",
                "दिमाग की नसों में अत्यधिक दबाव कम करके जानलेवा रक्तस्राव से सुरक्षा।",
                "आंख की सूजन, भेंगापन व कान की तेज आवाजों से पूर्ण मुक्ति।"
            ],
            "specificRisksEn": [
                "Eye muscle nerve weakness (temporary double vision, drooping eyelid) (3-7%)",
                "Brain swelling or venous congestion if adjacent veins are blocked (2-5%)",
                "Puncture site bleeding in groin",
                "Sinus wall tear during coiling (<1%)"
            ],
            "specificRisksHi": [
                "आंख की नसों पर असर पड़ने से अस्थायी तौर पर चीजें दो-दो दिखना (डबल विजन) या पलक झुकना (3-7%)।",
                "दिमाग में सूजन या रुकावट (2-5%)।",
                "जांघ में खून का थक्का जमना।",
                "नस में खिंचाव या छेद (<1%)।"
            ],
            "alternativesEn": "Transarterial embolization, surgical sinus isolation/skeletonization, stereotactic radiosurgery, or conservative management.",
            "alternativesHi": "धमनी के रास्ते इलाज, सिर का ऑपरेशन, गामा नाइफ रेडिएशन, अथवा दवाइयां।",
            "sedationTypeEn": "General anesthesia with endotracheal intubation.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    }
]

print(f"Loaded CAT16_PART1: {len(CAT16_PART1)} procedures")
