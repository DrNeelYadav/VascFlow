# -*- coding: utf-8 -*-
"""
Neuro and Head/Neck Generator
Covers Category 16 (Neurovascular - 35 procedures) and Category 17 (Endocrine/Head/Neck - 16 procedures)
Total: 51 procedures
"""
import json

NEURO_HEAD_NECK_ITEMS = [
    # Cat 16: 1. DSA
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
    # Cat 16: 2. Stent Retriever Thrombectomy
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
    }
]

print("Base NEURO_HEAD_NECK_ITEMS initialized")
