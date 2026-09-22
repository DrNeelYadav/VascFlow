# -*- coding: utf-8 -*-
"""
Category 16 Part 3 (Procedures 25 to 35) - 11 procedures
"""

CAT16_PART3 = [
    # 25. CAS Mo.Ma Proximal Protection
    {
        "id": "cas-proximal-balloon-moma",
        "name": "Carotid Stenting with Proximal Balloon Occlusion Protection (Mo.Ma System)",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-CAS-025",
        "rghsCode": "694 / 25",
        "icd10": "I65.2 (Occlusion and stenosis of carotid artery)",
        "indications": [
            "Carotid artery stenosis with high-risk vulnerable, ulcerated, or friable atheromatous plaque where passing a distal filter carries high embolization risk",
            "Severe tortuosity of the distal cervical internal carotid artery preventing safe landing of a distal filter",
            "Symptomatic high-grade carotid bifurcation stenosis",
            "Heavy thrombus-containing carotid stenosis"
        ],
        "preOpCriteria": [
            "CTA demonstrating patent common carotid and external carotid branches for balloon landing",
            "Dual antiplatelet therapy for >= 5 days (Aspirin + Clopidogrel)",
            "Assessment of circle of Willis collaterals via CTA/DSA",
            "Femoral access readiness for large-bore 9F guide sheath"
        ],
        "hardware": [
            { "category": "Proximal Protection Device", "name": "Mo.Ma Ultra Proximal Protection System", "spec": "9F catheter with dual balloons for CCA and ECA occlusion", "standardStore": "Neuro IR Store" },
            { "category": "Carotid Stent", "name": "Carotid Wallstent / Precise Pro Nitinol Stent", "spec": "7-10 mm x 30-40 mm self-expanding stent", "standardStore": "Neuro IR Store" },
            { "category": "PTA Balloon", "name": "Submax / Ultraverse Monorail Balloon", "spec": "4.5-5.5 mm x 20 mm", "standardStore": "Neuro IR Store" },
            { "category": "Aspiration Syringes", "name": "60 mL High-Volume Luer-Lock Syringes with Filter Set", "spec": "Cell-saver blood aspiration and micro-debris filter", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "9F femoral arterial access under local anesthesia and conscious sedation.",
            "Navigate the Mo.Ma catheter into the common carotid artery (CCA) with its distal tip positioned in the external carotid artery (ECA).",
            "Before crossing the carotid plaque, inflate the ECA balloon to block ECA back-bleeding, then inflate the CCA balloon to arrest all forward flow in the carotid system.",
            "Under complete flow arrest and passive retrograde flow, safely cross the fragile carotid plaque with a 0.014-inch wire.",
            "Perform balloon pre-dilation and deploy the self-expanding carotid stent across the lesion.",
            "Perform post-dilation with appropriately sized balloon.",
            "Vigorously aspirate 60-120 mL of blood from the carotid system through the Mo.Ma port, capturing all loose debris released during stenting.",
            "Flush and filter the aspirated blood; deflate the ECA balloon and then the CCA balloon to restore antegrade cerebral flow.",
            "Perform completion DSA confirming widely patent stent and complete brain perfusion; close access with dual Angio-Seal or ProGlide."
        ],
        "complications": [
            "Transient cerebral ischemia / intolerance to balloon clamping (5 - 8%)",
            "Bradycardia and hypotension from carotid sinus compression (10 - 15%)",
            "Femoral puncture site hematoma from 9F sheath (2 - 3%)",
            "Periprocedural stroke (<1.5%)"
        ],
        "maayTariffInr": 95000,
        "vendorContacts": [
            "Medtronic Neuro (+91 98293 11223)",
            "Cordis Interventional (+91 98292 44321)",
            "Boston Scientific (+91 98293 66554)"
        ],
        "consent": {
            "nameHi": "मो.मा (Mo.Ma) प्रॉक्सिमल बैलून ऑक्लूजन कैरोटिड स्टेंटिंग (गले की नस में रक्त प्रवाह रोककर सुरक्षित स्टेंट डालना)",
            "indicationEn": "Carotid stenting under complete upstream balloon flow arrest to safely treat fragile, soft, or clot-filled carotid plaques.",
            "indicationHi": "गले की संकरी नस में जहां मैल (प्लाक) बहुत नरम या टूटने वाला हो, वहां गुब्बारा फुलाकर खून का बहाव पूरी तरह रोककर सुरक्षित स्टेंट लगाना।",
            "descriptionEn": "Before touching the delicate carotid blockage, two small balloons temporarily stop blood flow in the neck artery completely. The stent is expanded while flow is stopped, and all dislodged debris is sucked out with a syringe before blood flow is allowed to resume.",
            "descriptionHi": "नस की रुकावट को छूने से पहले दो छोटे गुब्बारे फुलाकर कुछ मिनटों के लिए गले की नस में खून का दौरा बिल्कुल रोक दिया जाता है। रुके हुए खून के दौरान स्टेंट डालकर नस खोली जाती है और नस में छूटा सारा कचरा सिरिंज से चूसकर बाहर निकाल लिया जाता है, फिर गुब्बारे खाली कर खून चालू किया जाता है।",
            "benefitsEn": [
                "Total brain protection before the fragile blockage is ever crossed with a wire.",
                "Ideal for ulcerated, soft, or clot-laden carotid plaques where filters can fail.",
                "Enables complete evacuation of all dislodged particles before restoring flow."
            ],
            "benefitsHi": [
                "ब्लॉकेज को छूने से पहले ही दिमाग को 100% सुरक्षित करने की विशेष तकनीक।",
                "उन अत्यधिक नाजुक या थक्के वाली नसों के लिए सर्वोत्तम जहां सामान्य फिल्टर काम नहीं कर सकते।",
                "स्टेंट लगाने के दौरान छूटे सारे बारीक कणों को सिरिंज से पूरी तरह बाहर निकाल लेना।"
            ],
            "specificRisksEn": [
                "Dizziness or temporary weakness during balloon inflation if opposite side blood flow is slow (5-8%)",
                "Drop in heart rate and blood pressure requiring temporary medicine (10-15%)",
                "Groin bleeding or hematoma from larger access sheath (2-3%)",
                "Stroke risk (<1.5%)"
            ],
            "specificRisksHi": [
                "गुब्बारा फूला रहने के दौरान हल्का चक्कर आना या कमजोरी महसूस होना (5-8%)।",
                "ब्लड प्रेशर या धड़कन कम होना।",
                "जांघ में 9F नली के कारण हल्का खून का थक्का (2-3%)।",
                "स्ट्रोक का दुर्लभ जोखिम (<1.5%)।"
            ],
            "alternativesEn": "Distal filter carotid stenting, open surgical endarterectomy (CEA), or aggressive medical therapy.",
            "alternativesHi": "फिल्टर के साथ स्टेंटिंग, गले का बड़ा ऑपरेशन (ओपन सर्जरी), अथवा केवल दवाइयां।",
            "sedationTypeEn": "Local anesthesia with conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (लोकल एनेस्थीसिया) एवं हल्की शामक दवा।"
        }
    },

    # 26. Vertebral Artery Origin Stenting
    {
        "id": "vertebral-artery-origin-stenting",
        "name": "Extracranial Vertebral Artery Origin Angioplasty and Stenting",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-VA-026",
        "rghsCode": "694 / 26",
        "icd10": "I65.0 (Occlusion and stenosis of vertebral artery)",
        "indications": [
            "Symptomatic severe vertebral artery origin stenosis (>= 50-70%) presenting with posterior circulation ischemia (vertigo, drop attacks, diplopia, ataxia, visual field deficits)",
            "Recurrent vertebrobasilar TIA or stroke despite maximal medical therapy (dual antiplatelets and high-intensity statin)",
            "Hypoplastic or occluded contralateral vertebral artery creating critical dependency on the stenotic vessel",
            "Bilateral tight vertebral artery ostial stenoses"
        ],
        "preOpCriteria": [
            "CTA or MRA confirming severe ostial vertebral artery narrowing and documenting subclavian artery take-off angle",
            "Pre-procedure dual antiplatelet therapy for >= 5 days (Aspirin 150 mg + Clopidogrel 75 mg)",
            "Renal function evaluated (serum creatinine <= 1.5 mg/dL)",
            "Brachial blood pressure measured bilaterally"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F Femoral / Radial Introducer Sheath", "spec": "11 cm length, 0.035 in valve", "standardStore": "Angio Suite Store" },
            { "category": "Guiding Catheter", "name": "6F JR4 / Multi-Purpose (MP) / Hockey Stick Guiding Catheter", "spec": "90-100 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.014 in Choice Extra Support / BMW Microwire", "spec": "190 cm length, shapeable platinum tip", "standardStore": "Neuro IR Store" },
            { "category": "Balloon-Expandable Stent", "name": "Resolute Onyx / Promus Premier / Omnilink Elite Stent", "spec": "Balloon-expandable drug-eluting or bare metal stent (4.0-5.5 mm diameter x 12-18 mm length)", "standardStore": "Neuro IR Store" },
            { "category": "Inflation Device", "name": "20-30 atm High-Pressure Inflation Syringe", "spec": "Dedicated manometer inflation unit", "standardStore": "Angio Suite Store" }
        ],
        "techniqueSteps": [
            "Right common femoral or radial 6F access under local anesthesia.",
            "Catheterize the subclavian artery using 6F JR4 or MP guiding catheter; perform digital subtraction angiography of the vertebral artery origin at oblique projections (ipsilateral anterior oblique) to unmask the ostium.",
            "Administer 3,000-5,000 IU unfractionated heparin IV to achieve therapeutic ACT.",
            "Cross the tight vertebral ostial stenosis with a 0.014-inch extra-support coronary microwire.",
            "Direct stenting or pre-dilation with a 2.5-3.0 mm balloon if the lesion is calcified or severely tight.",
            "Advance a low-profile balloon-expandable stent (4.0-5.5 mm diameter) across the ostium, ensuring 1-2 mm of stent protrudes into the subclavian lumen to ensure complete ostial coverage.",
            "Inflate stent to nominal pressure (10-14 atm) for 30-45 seconds under fluoroscopic roadmapping.",
            "Deflate balloon; perform completion DSA verifying full stent expansion, elimination of stenosis (<10% residual), and brisk antegrade basilar artery flow.",
            "Withdraw wire and catheter; secure femoral access with closure device or radial band."
        ],
        "complications": [
            "Vertebral artery dissection or rupture during balloon inflation (<1.5%)",
            "Distal embolization causing cerebellar or brainstem stroke (1 - 2%)",
            "In-stent restenosis on long-term follow-up (10 - 20% for bare metal, 5-8% for DES)",
            "Access site hematoma (1 - 2%)"
        ],
        "maayTariffInr": 78000,
        "vendorContacts": [
            "Medtronic Neurovascular (+91 98293 11223)",
            "Boston Scientific (+91 98293 66554)",
            "Abbott Vascular India (+91 98297 12345)"
        ],
        "consent": {
            "nameHi": "वर्टिब्रल आर्टरी ओरिजिन एंजियोप्लास्टी एवं स्टेंटिंग (सिर के पीछे खून ले जाने वाली मुख्य नस में स्टेंट डालना)",
            "indicationEn": "Balloon expansion and stenting of severe blockage at the origin of vertebral artery to stop dizzy spells, fainting, and brainstem strokes.",
            "indicationHi": "सिर के पिछले हिस्से (मस्तिष्क स्तंभ व सेरिबेलम) को खून देने वाली वर्टिब्रल नस के मुंह पर रुकावट होने से चक्कर आना, लड़खड़ाहट व लकवे से बचाव हेतु स्टेंट डालना।",
            "descriptionEn": "Under local anesthesia, a balloon-expandable metal stent is passed through a catheter from the wrist or groin into the base of the vertebral artery in the neck. The stent is inflated to permanently open the narrow entrance and restore full blood flow to the balance centers of the brain.",
            "descriptionHi": "कलाई या जांघ की नस से कैथेटर को गर्दन के निचले हिस्से में वर्टिब्रल धमनी के उद्गम स्थल तक ले जाया जाता है। वहां एक गुब्बारे पर लगा धातु का स्टेंट फुलाकर नस के संकरे मुंह को हमेशा के लिए चौड़ा कर दिया जाता है जिससे चक्कर आने और बेहोशी की समस्या तुरंत ठीक हो जाती है।",
            "benefitsEn": [
                "Completely relieves recurrent vertigo, unsteadiness, drop attacks, and double vision.",
                "Prevents life-threatening posterior circulation and brainstem strokes.",
                "Minimally invasive day-care or 24-hour hospital stay procedure."
            ],
            "benefitsHi": [
                "बार-बार चक्कर आना, आंखों के आगे अंधेरा छाना, लड़खड़ाकर गिरना व दो-दो दिखने की समस्या से पूर्ण मुक्ति।",
                "सिर के पीछे दिमाग के मुख्य नियंत्रण केंद्र (ब्रेनस्टेम) के जानलेवा लकवे से बचाव।",
                "बिना बड़े ऑपरेशन के केवल 24 घंटे में छुट्टी।"
            ],
            "specificRisksEn": [
                "Stroke in posterior circulation from debris dislodgement (1-2%)",
                "Vessel wall tear or dissection requiring additional stent (<1.5%)",
                "Stent narrowing over time (restenosis 5-10%)",
                "Puncture site bruising or hematoma"
            ],
            "specificRisksHi": [
                "प्रक्रिया के समय दिमाग के पिछले हिस्से में कण जाने से लकवे का जोखिम (1-2%)।",
                "नस की दीवार में खिंचाव या खरोंच (<1.5%)।",
                "भविष्य में स्टेंट के अंदर दोबारा हल्की सिकुड़न आना (5-10%)।",
                "कलाई या जांघ में हल्का खून का थक्का।"
            ],
            "alternativesEn": "Aggressive dual antiplatelet and statin medical therapy, surgical vertebral transposition/bypass, or conservative monitoring.",
            "alternativesHi": "खून पतला करने की दवाइयां, गर्दन का बड़ा बाईपास ऑपरेशन, अथवा केवल देखरेख।",
            "sedationTypeEn": "Local anesthesia with mild conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (लोकल एनेस्थीसिया)।"
        }
    },

    # 27. Subclavian Steal Syndrome
    {
        "id": "subclavian-steal-angioplasty-stenting",
        "name": "Subclavian Steal Syndrome Balloon Angioplasty and Stenting",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-SUBCL-027",
        "rghsCode": "694 / 27",
        "icd10": "I65.3 (Occlusion and stenosis of bilateral precerebral arteries) / I65.2",
        "indications": [
            "Severe stenosis or occlusion of the proximal subclavian artery (pre-vertebral segment) causing reversal of flow in the ipsilateral vertebral artery",
            "Vertebrobasilar insufficiency symptoms triggered by arm exercise (vertigo, syncope, ataxia, blurred vision - subclavian steal)",
            "Upper extremity ischemic symptoms (arm claudication, coldness, finger ulceration, pulse deficit, inter-arm SBP difference > 20-30 mmHg)",
            "Planned coronary artery bypass graft (CABG) utilizing ipsilateral internal mammary artery (LIMA) in the presence of subclavian stenosis"
        ],
        "preOpCriteria": [
            "Bilateral arm blood pressures documented (inter-arm difference > 20 mmHg)",
            "Color Doppler ultrasound or CTA arch confirming flow reversal in the ipsilateral vertebral artery",
            "Pre-procedure antiplatelet therapy (Aspirin 150 mg daily)",
            "Assessment of radial/brachial access in addition to femoral access"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F / 7F Introducer Sheaths (Femoral +/- Brachial)", "spec": "11 cm length", "standardStore": "Angio Suite Store" },
            { "category": "Guiding Sheath / Catheter", "name": "6F / 7F Shuttle / Vista Brite Tip Guiding Sheath", "spec": "90 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Guidewires", "name": "0.035 in Glidewire Advantage + 0.014 in Extra Support Wire", "spec": "180-260 cm length", "standardStore": "Angio Suite Store" },
            { "category": "Subclavian Stent", "name": "Omnilink Elite / Express LD Balloon-Expandable Stent", "spec": "Large-diameter balloon-expandable stent (7-10 mm diameter x 20-30 mm length)", "standardStore": "Neuro IR Store" },
            { "category": "Inflation Device", "name": "20 atm High-Pressure Inflation Unit", "spec": "Dedicated manometer syringe", "standardStore": "Angio Suite Store" }
        ],
        "techniqueSteps": [
            "Right common femoral 6F/7F access established; position guiding sheath in the aortic arch under fluoroscopy.",
            "Arch aortogram to visualize left/right subclavian origin, relation to vertebral artery take-off, and retrograde vertebral flow.",
            "Administer 5,000 IU heparin IV.",
            "Carefully cross the proximal subclavian stenosis from the femoral approach, or through combined retrograde brachial puncture if antegrade crossing fails.",
            "Exchange for a stiff 0.035-inch Rosen or 0.014-inch extra-support wire positioned in the axillary artery.",
            "Pre-dilate lesion with a 5-6 mm balloon if severely calcified.",
            "Deploy a 7-10 mm balloon-expandable stent accurately across the ostium of the subclavian artery, taking extreme care NOT to compromise the take-off of the downstream vertebral artery.",
            "Perform post-dilation to nominal pressure until the stent is fully expanded and opposed to the aortic wall.",
            "Completion angiography documenting restoration of normal, brisk antegrade flow in both the subclavian artery and the ipsilateral vertebral artery (abolition of steal phenomenon).",
            "Puncture site hemostasis with Angio-Seal or manual pressure."
        ],
        "complications": [
            "Distal arm atheroembolism / digital ischemia (1 - 2%)",
            "Vertebral artery occlusion if stent inadvertently covers vertebral take-off (<1%)",
            "Subclavian arterial rupture from balloon oversizing (<0.5%)",
            "Puncture site hematoma or pseudoaneurysm (1 - 2%)"
        ],
        "maayTariffInr": 82000,
        "vendorContacts": [
            "Abbott Vascular (+91 98297 12345)",
            "Boston Scientific (+91 98293 66554)",
            "Medtronic India (+91 98293 11223)"
        ],
        "consent": {
            "nameHi": "सबक्लेवियन स्टील सिंड्रोम एंजियोप्लास्टी एवं स्टेंटिंग (हाथ की नस की रुकावट खोलकर दिमाग में खून की चोरी रोकना)",
            "indicationEn": "Stenting of blocked shoulder artery (subclavian) to stop arm exercise from stealing blood backwards from the brain.",
            "indicationHi": "कंधे और हाथ को खून देने वाली मुख्य नस (सबक्लेवियन) की रुकावट को स्टेंट से खोलना जिससे हाथ हिलाने पर दिमाग का खून उल्टी दिशा में न खिंचे।",
            "descriptionEn": "When the main shoulder artery is blocked, blood flows backwards down from the brain into the arm, causing dizziness whenever the arm is moved. A metal stent is placed through a catheter to open the blockage, restoring normal flow to both arm and brain.",
            "descriptionHi": "जब कंधे की मुख्य नस बंद हो जाती है, तो हाथ को खून पहुंचाने के लिए दिमाग की नस से खून उल्टा बहने लगता है जिसे 'सबक्लेवियन स्टील' कहते हैं। इससे हाथ से काम करने पर चक्कर और बेहोशी आती है। जांघ की नस से कैथेटर ले जाकर वहां एक मजबूत स्टेंट डालकर नस खोल दी जाती है जिससे हाथ व दिमाग दोनों का रक्त प्रवाह सामान्य हो जाता है।",
            "benefitsEn": [
                "Completely cures exercise-induced vertigo, blackouts, and unsteadiness.",
                "Restores normal strong pulses, warmth, and strength to the affected arm.",
                "Normalizes blood pressure equality between both arms."
            ],
            "benefitsHi": [
                "हाथ से काम करने पर आने वाले चक्कर, आंखों के आगे अंधेरा छाने और बेहोशी से पूर्ण छुटकारा।",
                "कमजोर और ठंडे पड़े हाथ में खून की पूरी ताकत और गर्माहट वापस आना।",
                "दोनों हाथों का ब्लड प्रेशर बराबर सामान्य होना।"
            ],
            "specificRisksEn": [
                "Debris traveling down into arm or hand causing temporary finger pain (1-2%)",
                "Accidental covering of neck branch (<1%)",
                "Vessel wall tear (<0.5%)",
                "Groin access site hematoma"
            ],
            "specificRisksHi": [
                "हाथ की उंगलियों में कचरा जाने से दर्द या सुन्नता (1-2%)।",
                "पास की नस पर स्टेंट का असर (<1%)।",
                "नस फटना (<0.5%)।",
                "जांघ में खून का थक्का जमना।"
            ],
            "alternativesEn": "Carotid-subclavian bypass surgery, axillo-axillary bypass, or medical management without arm exercise.",
            "alternativesHi": "गर्दन का बड़ा बाईपास ऑपरेशन (सर्जरी), अथवा हाथ का इस्तेमाल कम करके दवाइयां लेना।",
            "sedationTypeEn": "Local anesthesia with conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (लोकल एनेस्थीसिया)।"
        }
    },

    # 28. ICAS Gateway Balloon Angioplasty
    {
        "id": "icas-gateway-balloon-angioplasty",
        "name": "Intracranial Atherosclerotic Stenosis (ICAS) Balloon Angioplasty (Gateway Balloon)",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-ICAS-028",
        "rghsCode": "694 / 28",
        "icd10": "I67.848 (Other cerebrovascular disease) / I65.2",
        "indications": [
            "Severe intracranial atherosclerotic stenosis (70-99%) of intracranial ICA, M1 MCA, basilar artery, or intracranial vertebral artery",
            "Recurrent TIA or stroke in the target territory despite maximal dual antiplatelet therapy, high-intensity statin, and strict BP control",
            "Under-dilated stenosis causing hypoperfusion refractory to medical management",
            "Stand-alone balloon angioplasty or pre-dilation prior to Wingspan stenting"
        ],
        "preOpCriteria": [
            "Documented failure of aggressive medical management per SAMMPRIS trial criteria",
            "CTA/DSA defining exact lesion length, reference vessel diameter, and absence of excessive vessel tortuosity",
            "Pre-treatment dual antiplatelet therapy (Aspirin + Clopidogrel) confirmed with VerifyNow PRU testing",
            "General anesthesia with continuous invasive hemodynamic monitoring"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F Guiding Sheath (Neuron MAX / Envoy)", "spec": "90 cm length, high-support", "standardStore": "Neuro IR Store" },
            { "category": "Distal Access Catheter", "name": "Sofia 5F / Navien 058 Intermediate Catheter", "spec": "115-125 cm length", "standardStore": "Neuro IR Store" },
            { "category": "PTA Balloon Catheter", "name": "Gateway PTA Balloon Catheter (Stryker Neurovascular)", "spec": "Ultra-low profile semi-compliant balloon (1.5 - 3.5 mm diameter x 9 - 15 mm length), 0.014 in wire", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.014 in Synchro-14 Steerable Wire", "spec": "300 cm exchange length", "standardStore": "Neuro IR Store" },
            { "category": "Inflation Syringe", "name": "Precision Digital Inflation Syringe", "spec": "Slow manual atmospheric titration", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Position 6F guide sheath in high cervical ICA or vertebral artery with intermediate catheter in petrous/cavernous segment under GA.",
            "Acquire working roadmaps profiling the intracranial stenosis with zero foreshortening.",
            "Administer 3,000-5,000 IU heparin IV.",
            "Carefully cross the intracranial stenosis using a 300 cm exchange-length 0.014-inch Synchro microwire; anchor wire distally in a safe straight branch.",
            "Select Gateway balloon sized to 80% of normal parent vessel diameter (undersized to prevent intracranial rupture).",
            "Track Gateway balloon across the stenosis under fluoroscopic roadmapping.",
            "Ultra-slow inflation: increase pressure by 1 atm every 15-30 seconds up to nominal pressure (6-8 atm) to gently dilate the plaque without dissection.",
            "Maintain inflation for 60 seconds; slowly deflate completely over 30 seconds.",
            "Perform control DSA through guide catheter: assess luminal gain (>50% improvement), rule out flow-limiting dissection or acute recoil.",
            "Maintain distal wire position for 10-15 minutes of observation; if recoil is severe, proceed to stenting."
        ],
        "complications": [
            "Intracranial arterial rupture / fatal subarachnoid hemorrhage (1.5 - 3%)",
            "Vessel dissection causing acute vessel closure and massive stroke (3 - 5%)",
            "Hyperperfusion syndrome / intracerebral hemorrhage (1 - 2%)",
            "Restenosis or acute vessel recoil on follow-up (15 - 25%)"
        ],
        "maayTariffInr": 85000,
        "vendorContacts": [
            "Stryker Neurovascular (+91 98294 22334)",
            "Medtronic Neuro (+91 98293 11223)",
            "Boston Scientific (+91 98293 66554)"
        ],
        "consent": {
            "nameHi": "इंट्राक्रैनियल एथेरोस्क्लेरोटिक स्टेनोसिस (ICAS) गेटवे बैलून एंजियोप्लास्टी (दिमाग के अंदर की संकरी नस को विशेष गुब्बारे से खोलना)",
            "indicationEn": "Sub-nominal gentle balloon expansion of severely narrowed brain artery to prevent recurrent disabling stroke.",
            "indicationHi": "दिमाग के भीतर की मुख्य नस में 70% से अधिक चर्बी जमने से बार-बार आने वाले लकवे को रोकने हेतु विशेष सूक्ष्म गुब्बारे से नस खोलना।",
            "descriptionEn": "Under general anesthesia, a hair-thin medical balloon (Gateway balloon) is navigated deep inside the brain into the tight blockage. It is inflated very slowly and gently to widen the channel and restore critical blood supply to brain cells.",
            "descriptionHi": "पूर्ण बेहोशी में जांघ की नस से बाल जैसी पतली नली दिमाग के अंदर की संकरी नस तक ले जाई जाती है। वहां एक विशेष सूक्ष्म गुब्बारा बहुत धीरे-धीरे फुलाया जाता है ताकि नस की दीवार पर बिना कोई झटका दिए रास्ता चौड़ा किया जा सके और दिमाग में खून का दौरा सामान्य हो सके।",
            "benefitsEn": [
                "Improves blood flow in tight intracranial blockages failing all medical therapies.",
                "Reduces the risk of massive, catastrophic ischemic strokes in the territory of the narrowed vessel.",
                "Minimally invasive, avoiding open skull brain surgery."
            ],
            "benefitsHi": [
                "दवाइयों के बावजूद बार-बार लकवे के झटके आने की समस्या से राहत।",
                "दिमाग की बंद होती नस को खोलकर बड़े व जानलेवा स्ट्रोक से सुरक्षा।",
                "बिना सिर खोले केवल कैथेटर द्वारा उपचार।"
            ],
            "specificRisksEn": [
                "Brain artery rupture causing intracranial hemorrhage (1.5-3%)",
                "Arterial dissection causing acute blockage and stroke (3-5%)",
                "Hyperperfusion bleeding from sudden restored flow (1-2%)",
                "Early re-narrowing (elastic recoil)"
            ],
            "specificRisksHi": [
                "दिमाग की नाजुक नस में खिंचाव से नस फटने का गंभीर जोखिम (1.5-3%)।",
                "नस की अंदरूनी परत में चीरा आने से अचानक नस बंद होना व स्ट्रोक (3-5%)।",
                "अचानक खून का दौरा बढ़ने से दिमाग में सूजन या ब्लीडिंग (1-2%)।",
                "नस का दोबारा सिकुड़ना।"
            ],
            "alternativesEn": "Intracranial stenting (Wingspan), maximal medical therapy (dual antiplatelets, statin, BP control), or EC-IC bypass.",
            "alternativesHi": "दिमाग में स्टेंट डालना (विंग्सपैन), केवल दवाइयां, अथवा सर्जिकल बाईपास।",
            "sedationTypeEn": "General anesthesia with continuous arterial line monitoring.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 29. ICAS Wingspan Stenting
    {
        "id": "icas-wingspan-stenting",
        "name": "Intracranial Stenting for ICAS (Wingspan Stent System)",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-ICAS-029",
        "rghsCode": "694 / 29",
        "icd10": "I67.848 (Other cerebrovascular disease) / I65.2",
        "indications": [
            "Severe symptomatic intracranial stenosis (70-99%) refractory to maximal medical management with recurrent TIA/stroke > 7 days from last event",
            "Significant residual stenosis or flow-limiting dissection following Gateway balloon angioplasty",
            "Severe hemodynamic compromise with impaired cerebrovascular reserve demonstrated on perfusion imaging",
            "Intracranial ICA, M1 MCA, or basilar artery atherosclerotic disease"
        ],
        "preOpCriteria": [
            "Pre-procedure dual antiplatelet therapy for >= 5-7 days (Aspirin 150 mg + Clopidogrel 75 mg)",
            "Therapeutic platelet inhibition verified by VerifyNow (PRU 60-180)",
            "Strict non-contrast head CT confirming lack of fresh hemorrhagic transformation",
            "General anesthesia with invasive arterial line monitoring"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F Guiding Sheath (Neuron MAX 088)", "spec": "90 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Distal Catheter", "name": "Navien 058 / Sofia 5F Intermediate Catheter", "spec": "115-125 cm length", "standardStore": "Neuro IR Store" },
            { "category": "PTA Balloon", "name": "Gateway PTA Balloon (Undersized)", "spec": "1.5 - 3.0 mm x 9 - 15 mm", "standardStore": "Neuro IR Store" },
            { "category": "Intracranial Stent", "name": "Wingspan Stent System with Gateway Delivery Catheter", "spec": "Self-expanding nitinol open-cell microstent (2.5 - 4.5 mm diameter x 9 - 20 mm length)", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.014 in Synchro-14 Exchange Wire", "spec": "300 cm length", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Deliver 6F guide sheath and intermediate catheter into high cervical/petrous ICA or vertebral artery under GA.",
            "Cross intracranial stenosis with 300 cm exchange 0.014-inch microwire; advance Gateway balloon across the lesion.",
            "Perform gentle pre-dilation with Gateway balloon at nominal pressure (6-8 atm) to create a channel for the stent.",
            "Deflate and remove Gateway balloon while strictly pinning the 300 cm microwire in place.",
            "Advance the Wingspan stent delivery catheter over the exchange wire across the dilated segment.",
            "Verify stent markers span at least 3 mm beyond the proximal and distal margins of the atherosclerotic plaque.",
            "Deploy the self-expanding Wingspan nitinol stent by slowly retracting the outer sheath while holding the inner core stationary.",
            "The open-cell nitinol struts expand, tacking down any dissected intimal flaps and establishing long-term radial scaffold support.",
            "Perform completion DSA: verify excellent stent expansion, wall apposition, residual stenosis <30%, and widely patent distal intracranial branches.",
            "Continue strict dual antiplatelet therapy."
        ],
        "complications": [
            "Periprocedural stroke / perforator branch occlusion (snowplow effect into lenticulostriate or pontine perforators) (4 - 7%)",
            "Intracranial hemorrhage from hyperperfusion or wire perforation (2 - 4%)",
            "Acute or subacute in-stent thrombosis (3 - 5%)",
            "In-stent restenosis on long-term follow-up (15 - 25%)"
        ],
        "maayTariffInr": 115000,
        "vendorContacts": [
            "Stryker Neurovascular (+91 98294 22334)",
            "Medtronic Neuro (+91 98293 11223)",
            "Boston Scientific (+91 98293 66554)"
        ],
        "consent": {
            "nameHi": "विंग्सपैन (Wingspan) इंट्राक्रैनियल स्टेंटिंग (दिमाग के अंदर की नस में स्थायी जालीदार स्टेंट डालना)",
            "indicationEn": "Permanent intracranial stent implantation to keep severely narrowed brain artery open after recurrent medical failures.",
            "indicationHi": "दवाइयों के बावजूद दिमाग की नस में 70% से अधिक रुकावट के कारण बार-बार स्ट्रोक आने पर नस में स्थायी जालीदार स्टेंट डालना।",
            "descriptionEn": "A flexible self-expanding micro-stent (Wingspan stent) is delivered through a catheter into the narrowed brain artery. It acts as an internal scaffold, permanently holding the vessel open and preventing recurrent blockages.",
            "descriptionHi": "दिमाग की गंभीर रूप से बंद नस में कैथेटर द्वारा एक अत्यंत बारीक, लचीला धातु का स्टेंट पहुंचाया जाता है। यह स्टेंट नस के अंदर खुलकर स्थायी ढांचा (सपोर्ट) बना देता है जिससे नस हमेशा खुली रहती है और दोबारा खून का थक्का नहीं जमता।",
            "benefitsEn": [
                "Definitive structural support preventing acute vessel recoil or intimal collapse.",
                "Restores critical blood flow in patients facing imminent large territory brain infarction.",
                "Proven salvage for patients failing aggressive medical management."
            ],
            "benefitsHi": [
                "दिमाग की नस को स्थायी रूप से खुला रखने का पक्का ढांचा।",
                "उन मरीजों के लिए जीवन रक्षक जहां सभी दवाइयां बेअसर साबित हो चुकी हों।",
                "भविष्य में बड़े और जानलेवा लकवे से सुरक्षा।"
            ],
            "specificRisksEn": [
                "Perforator stroke (small side branch blockage from displaced plaque) (4-7%)",
                "Brain hemorrhage from sudden rush of restored blood (hyperperfusion) (2-4%)",
                "Blood clot forming inside the stent (3-5%)",
                "Lifelong blood-thinning medication compliance required"
            ],
            "specificRisksHi": [
                "प्लाक खिसकने से बारीक शाखाएं बंद होने पर लकवे का जोखिम (4-7%)।",
                "अचानक तेज खून का दौरा शुरू होने से दिमाग में रक्तस्राव/हेमरेज (2-4%)।",
                "स्टेंट में थक्का जमना (3-5%)।",
                "खून पतला करने वाली दवाइयों को नियमित लेना अनिवार्य होना।"
            ],
            "alternativesEn": "Balloon angioplasty alone, maximal dual antiplatelet and statin therapy, or extracranial-intracranial bypass.",
            "alternativesHi": "केवल गुब्बारे से नस खोलना, केवल दवाइयां, अथवा दिमाग का बाईपास ऑपरेशन।",
            "sedationTypeEn": "General anesthesia with continuous arterial line monitoring.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 30. MMA Embolization for Chronic SDH
    {
        "id": "mma-embolization-chronic-sdh",
        "name": "Middle Meningeal Artery (MMA) Embolization for Subacute and Chronic Subdural Hematoma (SDH)",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-MMA-030",
        "rghsCode": "694 / 30",
        "icd10": "I62.03 (Chronic subdural hemorrhage) / I62.00",
        "indications": [
            "Recurrent chronic subdural hematoma following previous burr-hole craniostomy and drainage",
            "Subacute or chronic subdural hematoma with membrane neovascularity in elderly patients high-risk for open surgery",
            "Adjuvant embolization immediately following surgical evacuation to prevent re-bleeding",
            "Mildly symptomatic chronic SDH without acute midline shift > 5 mm"
        ],
        "preOpCriteria": [
            "Non-contrast CT brain demonstrating chronic/subacute SDH with hyperdense neomembranes and measureable thickness",
            "Coagulation profile reviewed (safe for femoral/radial access)",
            "Assessment of external carotid artery branching to exclude dangerous ophthalmic anastomoses",
            "Local anesthesia with mild conscious sedation"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "5F / 6F Radial or Femoral Introducer Sheath", "spec": "11 cm length", "standardStore": "Angio Suite Store" },
            { "category": "Guiding Catheter", "name": "5F / 6F Envoy / Guider Catheter", "spec": "95-100 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Microcatheter", "name": "Headway Duo / Marathon / Progreat 2.0F", "spec": "150 cm length, DMSO-compatible if using liquid embolic", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.010 in / 0.014 in Steerable Wire", "spec": "200 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Embolic Agent", "name": "PVA Particles (150-250 um) or Onyx 18 / Squid 12", "spec": "Microparticles or non-adhesive EVOH liquid embolic", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Right radial or common femoral 5F/6F access under local anesthesia.",
            "Selectively cannulate the external carotid artery (ECA) using a 5F/6F guide catheter.",
            "Perform high-magnification DSA of the middle meningeal artery (MMA) in frontal and lateral projections.",
            "CRITICAL: strictly rule out a meningolacrimal or meningo-ophthalmic anastomotic branch arising from the anterior MMA branch that connects to the ophthalmic artery.",
            "Advance microcatheter over 0.010/0.014-inch wire into the anterior (frontal) branch of the MMA, followed by the posterior (parietal) branch.",
            "Demonstrate characteristic 'cotton-wool' neovascular blush of the subdural neomembranes.",
            "Infuse calibrated PVA particles (150-250 um) mixed with contrast, or Onyx 18, penetrating the capillary bed of the outer subdural neomembranes.",
            "Continue embolization until complete stasis of both frontal and parietal branches is achieved.",
            "Perform completion ECA angiogram confirming devascularization of the MMA with preservation of normal facial and internal maxillary branches.",
            "Withdraw catheters; secure access site hemostasis."
        ],
        "complications": [
            "Non-target embolization to ophthalmic artery causing visual loss (<0.5% with meticulous roadmapping)",
            "Facial nerve palsy if petrosal branch of MMA is embolized (<0.5%)",
            "Transient headache or local temporal pain (10 - 20%, self-limiting)",
            "Access site bruising (1 - 2%)"
        ],
        "maayTariffInr": 72000,
        "vendorContacts": [
            "Medtronic Neuro (+91 98293 11223)",
            "Cook Medical India (+91 98292 34567)",
            "Balt India (+91 98295 33445)"
        ],
        "consent": {
            "nameHi": "मिडिल मेनिनजियल आर्टरी (MMA) एम्बोलाइजेशन (दिमाग के पुराने जमे खून / सबड्यूरल हेमेटोमा को सुखाने हेतु नस बंदी)",
            "indicationEn": "Transcatheter embolization of middle meningeal artery to cure and prevent recurrent chronic subdural brain bleeding without skull surgery.",
            "indicationHi": "बुजुर्गों में सिर की चोट के बाद दिमाग के पर्दे के नीचे जमे पुराने खून (क्रोनिक सबड्यूरल हेमेटोमा) को बिना सिर में छेद किए नस बंद करके सुखाना।",
            "descriptionEn": "Through a tiny puncture in the wrist or groin, a microcatheter is navigated into the artery supplying the bleeding membranes around the brain. Microscopic particles or medical liquid are injected to cut off the blood supply, stopping the leak and allowing the hematoma to shrink naturally.",
            "descriptionHi": "कलाई या जांघ की नस से एक बारीक नली सिर के पर्दे को खून पहुंचाने वाली नस (MMA) तक ले जाई जाती है। वहां विशेष सूक्ष्म कण डालकर उन नसों को बंद कर दिया जाता है जिनसे बार-बार खून रिसता रहता है। नस बंद होते ही खून रिसना रुक जाता है और जमा हुआ पुराना खून धीरे-धीरे अपने आप सूख जाता है।",
            "benefitsEn": [
                "Cures chronic brain hematomas without open skull surgery or burr-hole drill holes.",
                "Reduces hematoma recurrence rate from 30% down to under 3-5%.",
                "Safe, comfortable procedure performed under local anesthesia with same-day or next-day discharge."
            ],
            "benefitsHi": [
                "बिना सिर की हड्डी में छेद किए या बिना ऑपरेशन के दिमाग में जमे खून का पक्का इलाज।",
                "दोबारा खून जमने के खतरे को 30% से घटाकर मात्र 3-5% करना।",
                "स्थानीय सुन्नता में होने वाला अत्यंत सुरक्षित उपचार, 24 घंटे में मरीज की अस्पताल से छुट्टी।"
            ],
            "specificRisksEn": [
                "Temporary headache or temple aching for 1-2 days (10-20%)",
                "Accidental vision damage if dye/particles enter eye artery (extremely rare, <0.5%)",
                "Temporary facial nerve irritation (<0.5%)",
                "Persistent hematoma requiring surgical burr hole if large midline shift exists"
            ],
            "specificRisksHi": [
                "उपचार के बाद 1-2 दिन तक कनपटी में हल्का सिरदर्द (10-20%)।",
                "दवा आंख की नस में जाने का अत्यंत दुर्लभ जोखिम (<0.5%)।",
                "चेहरे की तंत्रिका पर अस्थायी असर।",
                "यदि खून की गांठ बहुत बड़ी हो तो बाद में छोटा छेद करने की जरूरत पड़ना।"
            ],
            "alternativesEn": "Surgical burr-hole craniostomy and drain placement, open craniotomy with membranectomy, or conservative observation with steroids.",
            "alternativesHi": "सिर की हड्डी में छेद करके नली डालना (बर्र होल सर्जरी), सिर का बड़ा ऑपरेशन, अथवा केवल दवाइयां।",
            "sedationTypeEn": "Local anesthesia with mild conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (लोकल एनेस्थीसिया)।"
        }
    },

    # 31. Dural Venous Sinus Stenting for IIH
    {
        "id": "dural-venous-sinus-stenting-iih",
        "name": "Dural Venous Sinus Stenting for Idiopathic Intracranial Hypertension (IIH)",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-SINUS-031",
        "rghsCode": "694 / 31",
        "icd10": "G93.2 (Benign intracranial hypertension)",
        "indications": [
            "Idiopathic intracranial hypertension (pseudotumor cerebri) with medically refractory papilledema, visual field loss, or intractable headache",
            "Demonstrated high-grade transverse-sigmoid sinus junction stenosis on MR venography (MRV) or catheter venography",
            "Direct venous manometry confirming trans-stenotic pressure gradient >= 8 - 10 mmHg",
            "Failure or intolerance of maximal medical therapy (Acetazolamide / Topiramate)"
        ],
        "preOpCriteria": [
            "Formal ophthalmology visual field testing (Humphrey perimetry) and optical coherence tomography (OCT) documenting papilledema grade",
            "Lumbar puncture documenting elevated opening pressure (>25 cm H2O) with normal CSF constituents",
            "Pre-procedure dual antiplatelet therapy for 5 days (Aspirin 150 mg + Clopidogrel 75 mg)",
            "Venous manometry protocol ready"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F / 7F Femoral Venous Sheath", "spec": "11 cm length", "standardStore": "Angio Suite Store" },
            { "category": "Guiding Catheter", "name": "6F Shuttle / Neuron MAX Guiding Catheter", "spec": "90 cm length positioned in internal jugular vein", "standardStore": "Neuro IR Store" },
            { "category": "Venous Microcatheter", "name": "Headway 21 / Excelsior SL-10 Microcatheter", "spec": "150 cm length with pressure monitoring hub", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.014 in Synchro-14 Steerable Wire", "spec": "200-300 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Venous Sinus Stent", "name": "Zilver Vena / Precise Pro / Protégé Self-Expanding Nitinol Stent", "spec": "Large-diameter flexible nitinol stent (7-9 mm diameter x 30-40 mm length)", "standardStore": "Neuro IR Store" },
            { "category": "Manometry System", "name": "Invasive Hemodynamic Pressure Transducer Unit", "spec": "Direct venous pressure measurement setup", "standardStore": "Angio Suite Store" }
        ],
        "techniqueSteps": [
            "Femoral venous 6F/7F access under conscious sedation or general anesthesia.",
            "Advance 6F guide catheter into the internal jugular bulb.",
            "Navigate microcatheter over 0.014-inch microwire across the sigmoid sinus, transverse sinus stenosis, and into the superior sagittal sinus (SSS).",
            "Venous Manometry Pullback: record continuous pressures in SSS, torcular, transverse sinus proximal to stenosis, transverse-sigmoid junction, sigmoid sinus, and jugular bulb.",
            "Confirm significant trans-stenotic pressure gradient (gradient >= 8 mmHg, typically 10-25 mmHg).",
            "Administer 5,000 IU heparin IV.",
            "Advance 7-9 mm diameter self-expanding nitinol stent (Zilver Vena or Precise Pro) across the stenotic transverse sinus segment.",
            "Carefully deploy the stent spanning the entire web/stenosis, ensuring the proximal end does not compromise the vein of Labbe or torcular.",
            "Repeat venous manometry pullback across the stented segment: confirm immediate abolition of the pressure gradient (<2-3 mmHg).",
            "Control venography showing brisk laminar venous outflow without residual stenosis.",
            "Withdraw catheters and achieve venous hemostasis with manual compression."
        ],
        "complications": [
            "Dural sinus perforation / acute subdural hemorrhage (<1%)",
            "Transient ipsilateral retroauricular / neck pain from sinus wall stretch (15 - 20%, self-limiting)",
            "Stent thrombosis (1 - 2%)",
            "In-stent stenosis requiring repeat ballooning (3 - 5%)"
        ],
        "maayTariffInr": 98000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Cordis Interventional (+91 98292 44321)",
            "Medtronic Neuro (+91 98293 11223)"
        ],
        "consent": {
            "nameHi": "ड्यूरल वीनस साइनस स्टेंटिंग (IIH / स्यूडो-ट्यूमर सेरेब्राई में दिमाग की नीली नस में स्टेंट डालना)",
            "indicationEn": "Stenting of narrowed brain venous sinus to cure high intracranial pressure, severe headache, and preserve failing eyesight.",
            "indicationHi": "दिमाग में पानी का दबाव (इंट्राक्रैनियल प्रेशर) बढ़ने से आंखों की रोशनी जाने और तेज सिरदर्द को रोकने हेतु दिमाग की बड़ी नीली नस में स्टेंट डालना।",
            "descriptionEn": "Under sedation, a flexible metal stent is guided through the groin vein up into the narrowed main drainage vein inside the skull. The stent opens the pinched vein, allowing trapped brain fluid to drain normally and instantly relieving pressure on the eye nerves.",
            "descriptionHi": "जांघ की नीली नस से कैथेटर को दिमाग की गंदा खून निकालने वाली मुख्य नस (साइनस) तक पहुंचाया जाता है जहां सिकुड़न के कारण दबाव बढ़ रहा होता है। वहां एक लचीला जालीदार स्टेंट डालकर नस को चौड़ा कर दिया जाता है जिससे दिमाग का बढ़ा हुआ दबाव तुरंत सामान्य हो जाता है और आंखों की रोशनी बच जाती है।",
            "benefitsEn": [
                "Rapid, permanent resolution of papilledema (optic nerve swelling) and preservation of vision.",
                "Cures chronic refractory daily headaches and pulsatile whooshing sounds in the ears.",
                "Avoids brain surgery or permanent ventriculoperitoneal (VP) shunt placement."
            ],
            "benefitsHi": [
                "आंखों की नसों की सूजन (पैपिलोएडेमा) तुरंत घटकर आंखों की घटती रोशनी पूरी तरह सुरक्षित होना।",
                "सालों पुराने भयानक सिरदर्द और कान में चलने वाली सीटी जैसी आवाजों से स्थायी मुक्ति।",
                "सिर में परमानेंट पाइप (वीपी शंट) डालने के बड़े ऑपरेशन से बचाव।"
            ],
            "specificRisksEn": [
                "Temporary ear or neck aching for a few days due to stent expansion (15-20%)",
                "Sinus tear or brain bleeding (<1%)",
                "Stent clotting requiring blood thinners (1-2%)",
                "Need for blood-thinning medication for 6 months"
            ],
            "specificRisksHi": [
                "स्टेंट खुलने से कान के पीछे या गर्दन में कुछ दिनों तक हल्का दर्द (15-20%)।",
                "नस में खरोंच या ब्लीडिंग का दुर्लभ जोखिम (<1%)।",
                "स्टेंट में खून का थक्का जमना (1-2%)।",
                "6 महीने तक खून पतला करने वाली दवाइयां लेना आवश्यक होना।"
            ],
            "alternativesEn": "Ventriculoperitoneal (VP) shunt surgery, optic nerve sheath fenestration (ONSF), high-dose Acetazolamide, or bariatric weight loss surgery.",
            "alternativesHi": "सिर में शंट पाइप डालने का ऑपरेशन (VP Shunt), आंख के पर्दे की सर्जरी, दवाइयां, अथवा वजन घटाने की सर्जरी।",
            "sedationTypeEn": "Conscious sedation or general anesthesia with continuous pressure monitoring.",
            "sedationTypeHi": "सचेत बेहोशी (कॉन्शस सेडेशन) अथवा पूर्ण बेहोशी।"
        }
    },

    # 32. CVST: Catheter-Directed Thrombolysis and Thrombectomy
    {
        "id": "cvst-thrombectomy-thrombolysis",
        "name": "Catheter-Directed Thrombolysis and Thrombectomy for Cerebral Venous Sinus Thrombosis (CVST)",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-CVST-032",
        "rghsCode": "694 / 32",
        "icd10": "I67.6 (Nonpyogenic thrombosis of intracranial venous system)",
        "indications": [
            "Severe cerebral venous sinus thrombosis with progressive neurological deterioration, refractory seizures, or coma despite therapeutic systemic heparinization",
            "Extensive thrombosis involving multiple dural sinuses (superior sagittal, straight, bilateral transverse sinuses)",
            "Venous hemorrhagic infarction with worsening mass effect and intracranial hypertension",
            "Failure of medical anticoagulation after 24-48 hours with impending herniation"
        ],
        "preOpCriteria": [
            "MRV or CTV documenting occluded dural venous sinuses with thrombus burden",
            "Baseline NCCT brain mapping existing venous infarctions and hemorrhages",
            "Systemic anticoagulation paused or titrated prior to groin access",
            "General anesthesia with neuro-intensive care readiness"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "7F / 8F Femoral Venous Sheath", "spec": "11 cm length, high-flow", "standardStore": "Angio Suite Store" },
            { "category": "Venous Guiding Catheter", "name": "6F / 8F Neuron MAX / Guider Catheter", "spec": "90 cm length positioned in internal jugular vein", "standardStore": "Neuro IR Store" },
            { "category": "Large-Bore Aspiration Catheter", "name": "Indigo CAT 8 / Penumbra Lightning 7 / Sofia Plus", "spec": "Large-bore aspiration catheter with automated suction engine", "standardStore": "Neuro IR Store" },
            { "category": "Thrombectomy Device", "name": "Solitaire Platinum / Trevo Stent Retriever (6x40 mm)", "spec": "For clot maceration and extraction", "standardStore": "Neuro IR Store" },
            { "category": "Fibrinolytic Agent", "name": "Inj Alteplase (rtPA)", "spec": "10-20 mg for intra-sinus pulse spray infusion", "standardStore": "SMS Pharmacy DDC-14" }
        ],
        "techniqueSteps": [
            "Femoral venous 8F access; navigate 8F guide catheter into the dominant internal jugular vein and up to the jugular bulb under GA.",
            "Cross occluded transverse and sigmoid sinuses with a 0.035-inch Glidewire and 5F diagnostic catheter directly into the superior sagittal sinus (SSS).",
            "Advance large-bore aspiration catheter (Indigo CAT 8 or Sofia Plus) directly into the dense venous thrombus in the SSS.",
            "Perform mechanical aspiration thrombectomy using continuous vacuum suction engine, clearing large volumes of dark red venous clot.",
            "Perform mechanical clot maceration using a 6x40 mm stent retriever or Fogarty balloon catheter to fragment organized thrombus.",
            "Pulse-spray infusion of micro-dose rtPA (5-10 mg dissolved in saline) directly into the clot bed under fluoroscopic monitoring.",
            "Continue serial passes from anterior SSS down through the torcular and transverse-sigmoid sinuses until robust venous outflow is restored.",
            "Control CTV / DSA showing patent superior sagittal and transverse sinuses with brisk venous drainage into the jugular vein.",
            "Achieve femoral venous hemostasis; resume therapeutic systemic heparinization post-procedure."
        ],
        "complications": [
            "Intracranial hemorrhage or expansion of pre-existing venous hemorrhagic infarction (5 - 8%)",
            "Sinus wall perforation or tearing (<1.5%)",
            "Distal pulmonary embolism from clot fragmentation (<2%)",
            "Femoral access site hematoma (2 - 3%)"
        ],
        "maayTariffInr": 92000,
        "vendorContacts": [
            "Penumbra India (+91 98295 33445)",
            "Medtronic Neuro (+91 98293 11223)",
            "Stryker Neuro (+91 98294 22334)"
        ],
        "consent": {
            "nameHi": "सेरेब्रल वीनस साइनस थ्रोम्बोसिस (CVST) थ्रोम्बेक्टोमी एवं कैथेटर थ्रोम्बोलीसिस (दिमाग की नीली नसों से खून का थक्का खींचना व घोलना)",
            "indicationEn": "Emergent catheter-directed clot extraction and dissolving medication for extensive, life-threatening brain venous sinus blood clots.",
            "indicationHi": "दिमाग की बड़ी नीली नसों (साइनस) में खून का थक्का जमने से बेहोशी, दौरे या जान का खतरा होने पर कैथेटर द्वारा थक्का बाहर निकालना।",
            "descriptionEn": "Under general anesthesia, large flexible suction tubes and clot-dissolving medicine are navigated directly into the clogged brain veins from the groin. Powerful suction pulls out massive clots, instantly relieving venous pressure and saving the brain from venous infarction.",
            "descriptionHi": "पूर्ण बेहोशी में जांघ की नस से एक चौड़ी नली सीधे दिमाग की बंद बड़ी नीली नसों (साइनस) तक पहुंचाई जाती है। वहां वैक्यूम सक्शन और विशेष दवा द्वारा खून के बड़े-बड़े थक्कों को बाहर खींच लिया जाता है जिससे दिमाग का गंदा खून बहना दोबारा शुरू हो जाता है और मरीज की जान बचती है।",
            "benefitsEn": [
                "Life-saving emergency intervention when heparin and blood thinners fail.",
                "Reopens critical venous outflow and prevents massive brain swelling and coma.",
                "Dramatically accelerates neurological recovery in critically ill patients."
            ],
            "benefitsHi": [
                "जब साधारण खून पतला करने की दवाइयां असर न कर रही हों तब जान बचाने वाला आपातकालीन उपचार।",
                "दिमाग की बंद नसों को तुरंत खोलकर कोमा या मृत्यु से बचाना।",
                "मरीज के होश में लौटने और लकवे से ठीक होने की संभावना को बहुत तेज करना।"
            ],
            "specificRisksEn": [
                "Bleeding into the brain or enlargement of pre-existing hemorrhage (5-8%)",
                "Sinus wall damage (<1.5%)",
                "Clot fragments traveling to lungs (<2%)",
                "Puncture site bleeding in groin"
            ],
            "specificRisksHi": [
                "दिमाग के अंदर रक्तस्राव (हेमरेज) होने या पहले से मौजूद ब्लीडिंग के बढ़ने का जोखिम (5-8%)।",
                "नस की अंदरूनी परत में चोट (<1.5%)।",
                "थक्के का बारीक टुकड़ा फेफड़ों में जाने का दुर्लभ खतरा (<2%)।",
                "जांघ में खून का रिसाव।"
            ],
            "alternativesEn": "Continued medical anticoagulation with IV unfractionated heparin, decompressive hemicraniectomy, or supportive palliative neuro-ICU care.",
            "alternativesHi": "केवल नस द्वारा हैपरिन का इंजेक्शन, सिर की हड्डी का आधा हिस्सा हटाने का ऑपरेशन (डीकंप्रेसिव क्रेनिएक्टॉमी), अथवा आईसीयू देखभाल।",
            "sedationTypeEn": "General anesthesia with endotracheal intubation.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 33. IPSS for Cushing's Syndrome
    {
        "id": "ipss-cushings-syndrome",
        "name": "Inferior Petrosal Sinus Sampling (IPSS) for ACTH-Dependent Cushing's Syndrome",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-IPSS-033",
        "rghsCode": "694 / 33",
        "icd10": "E24.0 (Pituitary-dependent Cushing's disease)",
        "indications": [
            "ACTH-dependent Cushing's syndrome with inconclusive or negative pituitary MRI (microadenoma < 6 mm)",
            "Differentiating pituitary Cushing's disease from ectopic ACTH-secreting neuroendocrine tumors (lung, pancreas, thymus)",
            "Lateralization of ACTH hypersecretion to left vs right pituitary hemi-gland prior to targeted transsphenoidal micro-adenomectomy",
            "Persistent or recurrent hypercortisolemia following prior pituitary surgery"
        ],
        "preOpCriteria": [
            "Confirmed ACTH-dependent hypercortisolemia (elevated 24h urinary free cortisol, high late-night salivary cortisol, unsuppressed high-dose dexamethasone)",
            "Pre-procedure morning baseline labs (electrolytes, PT/INR <= 1.4, Platelets >= 100,000/uL)",
            "Pre-ordered Corticotropin-Releasing Hormone (CRH 100 mcg) or Desmopressin (DDAVP 10 mcg) for central stimulation",
            "Pre-labeled EDTA tubes on ice with rapid centrifuge and lab dispatch protocol"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "5F / 6F Bilateral Femoral Venous Sheaths + 4F Peripheral Line", "spec": "Dual groin venous access + peripheral IV", "standardStore": "Angio Suite Store" },
            { "category": "Diagnostic Catheters", "name": "5F Headhunter / Simmons / MPA Catheters (Pair)", "spec": "90-100 cm length matched pair for bilateral simultaneous cannulation", "standardStore": "Neuro IR Store" },
            { "category": "Microcatheters (Optional)", "name": "1.7F Excelsior SL-10 Microcatheters (Pair)", "spec": "For deep petrosal sinus placement", "standardStore": "Neuro IR Store" },
            { "category": "Guidewires", "name": "0.035 in / 0.014 in Steerable Hydrophilic Wires", "spec": "180 cm length", "standardStore": "Angio Suite Store" },
            { "category": "Stimulation Drug", "name": "Ovine CRH (100 mcg) / Inj Desmopressin (10 mcg)", "spec": "Lyophilized powder reconstituted with sterile water", "standardStore": "Endocrine IR Store" }
        ],
        "techniqueSteps": [
            "Bilateral femoral venous 5F/6F punctures under local anesthesia and mild sedation; place peripheral IV for simultaneous peripheral blood sampling.",
            "Administer 3,000 IU unfractionated heparin IV to prevent catheter-related thrombosis.",
            "Simultaneously navigate matched 5F diagnostic catheters into the bilateral internal jugular veins and superselectively into the bilateral inferior petrosal sinuses (IPS).",
            "Perform gentle retrograde venography under digital roadmapping to confirm catheter tip position at the junction of the IPS and cavernous sinus; verify absence of collateral anomalies.",
            "Simultaneously draw baseline (-5 min, -1 min) blood samples from Left IPS, Right IPS, and Peripheral vein for ACTH and Prolactin.",
            "Administer IV CRH (100 mcg) or DDAVP (10 mcg) bolus over 1 minute.",
            "Draw simultaneous synchronized blood samples from all 3 ports at exactly +2, +5, +10, and +15 minutes post-stimulation into chilled EDTA tubes.",
            "Centrifuge tubes immediately at 4 deg C; separate plasma and freeze for ACTH and prolactin assays (IPS:peripheral ACTH ratio >2 basal or >3 stimulated confirms pituitary disease; inter-sinus ratio >1.4 lateralizes tumor).",
            "Withdraw catheters; achieve groin hemostasis with manual pressure."
        ],
        "complications": [
            "Brainstem stroke or venous infarction from petrosal sinus thrombosis or deep catheterization (<0.2%)",
            "Groin puncture site hematoma (1 - 2%)",
            "Transient headache or ear fullness during venography (5%)",
            "Transient flushing or facial warmth following CRH injection (15%)"
        ],
        "maayTariffInr": 45000,
        "vendorContacts": [
            "Terumo India (+91 98291 55678)",
            "Cook Medical India (+91 98292 34567)",
            "Ferring Pharmaceuticals (+91 98298 77665)"
        ],
        "consent": {
            "nameHi": "इन्फीरियर पेट्रोसल साइनस सैंपलिंग (IPSS - कुशिंग सिंड्रोम में दिमाग की नस से हार्मोन की सटीक जांच)",
            "indicationEn": "Simultaneous bilateral blood sampling from brain petrosal veins to pinpoint pituitary vs ectopic source of severe Cushing's disease.",
            "indicationHi": "कुशिंग सिंड्रोम (हार्मोन की गंभीर बीमारी) में यह पता लगाने के लिए कि बीमारी दिमाग की ग्रंथि (पिट्यूटरी) से है या शरीर के किसी अन्य अंग से, दिमाग की दोनों तरफ की नसों से खून का नमूना लेना।",
            "descriptionEn": "Under local anesthesia, small catheters are guided from both groin veins up to the drainage veins right next to the pituitary gland. Blood samples are drawn simultaneously from both sides of the brain and the arm after a stimulating injection to identify the exact tumor location.",
            "descriptionHi": "जांघ की दोनों नसों में सुन्न करने का इंजेक्शन देकर बारीक नलियां गर्दन से होते हुए दिमाग में पिट्यूटरी ग्रंथि के दोनों तरफ की नसों (पेट्रोसल साइनस) तक पहुंचाई जाती हैं। वहां से और हाथ की नस से एक साथ हार्मोन (ACTH) की जांच के लिए खून के नमूने लिए जाते हैं ताकि ट्यूमर के सही स्थान का 100% सटीक पता चल सके।",
            "benefitsEn": [
                "100% gold standard accuracy in confirming pituitary origin versus occult lung/pancreas tumors.",
                "Accurately lateralizes the microadenoma to the right or left side, guiding the surgeon to cure Cushing's disease.",
                "Prevents unnecessary exploratory brain surgery or failed operations."
            ],
            "benefitsHi": [
                "कुशिंग बीमारी के कारण का शत-प्रतिशत सटीक पता लगाने की दुनिया की सर्वश्रेष्ठ जांच।",
                "ट्यूमर दिमाग के दाईं तरफ है या बाईं तरफ, यह तय करके सर्जन को सटीक ऑपरेशन करने में मदद करना।",
                "गलत जगह ऑपरेशन होने या बीमारी छूट जाने के खतरे से बचाव।"
            ],
            "specificRisksEn": [
                "Groin puncture site bruising or hematoma (1-2%)",
                "Temporary ear fullness, dizziness, or headache during dye injection (5%)",
                "Transient facial flushing from stimulating medicine (15%)",
                "Brainstem stroke (extremely rare, <0.2%)"
            ],
            "specificRisksHi": [
                "जांघ में हल्का खून का थक्का या नीला निशान (1-2%)।",
                "दवा डालने के समय कान में भारीपन या हल्का सिरदर्द।",
                "हार्मोन का इंजेक्शन देने पर चेहरे पर क्षणिक गर्माहट महसूस होना।",
                "नस में थक्का जमने का अत्यंत दुर्लभ जोखिम (<0.2%)।"
            ],
            "alternativesEn": "High-dose dexamethasone suppression test, whole-body Gallium-68 DOTATATE PET-CT, or empiric pituitary surgery.",
            "alternativesHi": "दवाइयों द्वारा हार्मोन जांच, पूरे शरीर का पेट-सीटी स्कैन, अथवा बिना जांच के अंदाजे से सिर का ऑपरेशन।",
            "sedationTypeEn": "Local anesthesia with minimal conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (लोकल एनेस्थीसिया)।"
        }
    },

    # 34. Spinal AVM: Glomus / Juvenile
    {
        "id": "spinal-avm-glomus-embolization",
        "name": "Embolization of Spinal Arteriovenous Malformations (Glomus / Juvenile Types)",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-SPINE-034",
        "rghsCode": "694 / 34",
        "icd10": "Q28.2 (Arteriovenous malformation of cerebral vessels) / G95.1",
        "indications": [
            "Intramedullary glomus-type spinal arteriovenous malformation (AVM) with recurrent spinal subarachnoid or intramedullary hemorrhage (hematomyelia)",
            "Juvenile-type metameric spinal arteriovenous malformation presenting with progressive paraparesis, sensory loss, and sphincter dysfunction",
            "Targeted embolization of high-flow intranidal or flow-related aneurysms prior to surgical resection",
            "Palliative reduction of high-volume spinal cord arteriovenous shunting"
        ],
        "preOpCriteria": [
            "Complete multi-level spinal digital subtraction angiography mapping anterior spinal artery (ASA), posterior spinal arteries (PSA), and nidal compartments",
            "Pre-procedure baseline neurological examination and motor score documented",
            "Coagulation parameters within surgical thresholds (INR <= 1.3, Platelets >= 100,000/uL)",
            "General anesthesia with intraoperative neuromonitoring (SSEP, MEP, D-wave)"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F Guiding Sheath", "spec": "90 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Diagnostic Catheter", "name": "5F Cobra C2 / Mikaelson Catheter", "spec": "100 cm length for selective segmental injection", "standardStore": "Neuro IR Store" },
            { "category": "Microcatheter", "name": "Sonic / Apollo / Marathon DMSO-Compatible Detachable-Tip Microcatheter", "spec": "150 cm length with 1.2F-1.5F tip", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.008 in / 0.010 in Mirage / Hybrid Wire", "spec": "200 cm length, ultra-soft tip", "standardStore": "Neuro IR Store" },
            { "category": "Liquid Embolic Agent", "name": "Onyx 18 / Squid 12 / Histoacryl Glue (n-BCA)", "spec": "Low-viscosity EVOH or cyanoacrylate glue", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Position 6F guiding catheter in the feeding intercostal, lumbar, or vertebral artery supplying the anterior/posterior spinal artery under GA.",
            "Establish continuous baseline SSEP and motor evoked potential (MEP) recordings.",
            "Navigate 1.2F-1.5F detachable-tip microcatheter over 0.008-inch wire superselectively through the anterior spinal artery directly into the glomus AVM nidus.",
            "Perform superselective microcatheter DSA: confirm wedging at the nidal core, confirm that the anterior spinal artery continues past the nidus to supply normal spinal cord distal to the lesion.",
            "Pharmacological provocative testing if awake or with SSEP/MEP (Amobarbital 25 mg or Lidocaine 10-20 mg): observe for loss of motor potentials.",
            "Flush microcatheter with saline and prime with 0.25 mL DMSO.",
            "Slowly infuse low-viscosity liquid embolic (Onyx 18 or Squid 12) under high-frame-rate subtracted roadmapping.",
            "Permeate the intramedullary nidus while strictly preventing reflux into the upstream anterior spinal artery trunk.",
            "Snap-retract the detachable microcatheter tip; perform completion multi-level spinal DSA confirming nidal obliteration and preserved normal anterior spinal artery flow."
        ],
        "complications": [
            "Spinal cord infarction and irreversible paraplegia/quadriplegia from anterior spinal artery occlusion (2 - 5%)",
            "Intra-medullary hemorrhage during or after embolization (3 - 5%)",
            "Transient deterioration in lower extremity motor/sensory function (10 - 15%)",
            "Catheter entrapment (<1%)"
        ],
        "maayTariffInr": 118000,
        "vendorContacts": [
            "Medtronic Neuro (+91 98293 11223)",
            "Stryker Neuro (+91 98294 22334)",
            "Balt India (+91 98295 33445)"
        ],
        "consent": {
            "nameHi": "स्पाइनल आर्टेरियोवीनस मालफॉर्मेशन (AVM) ग्लोमस एम्बोलाइजेशन (रीढ़ की हड्डी के अंदर नसों के गुच्छे का तरल दवा से इलाज)",
            "indicationEn": "Superselective microcatheter embolization of dangerous intramedullary spinal cord vascular tangle to prevent paralysis and spine hemorrhage.",
            "indicationHi": "रीढ़ की हड्डी (स्पाइनल कॉर्ड) के अंदर नसों के खतरनाक गुच्छे (AVM) को फटने और लकवा होने से बचाने हेतु बारीक नली द्वारा तरल दवा से सील करना।",
            "descriptionEn": "Under neuro-monitoring and general anesthesia, an ultra-thin microcatheter is guided through the arteries of the back into the spinal cord's blood vessels. Medical liquid embolic is carefully injected into the abnormal vascular tangle to seal the high-pressure leak while protecting normal spinal cord blood flow.",
            "descriptionHi": "विशेष न्यूरो-मॉनिटरिंग और पूर्ण बेहोशी में जांघ की नस से बाल जैसी पतली नली रीढ़ की हड्डी को खून देने वाली नस के अंदर पहुंचाई जाती है। वहां असामान्य गुच्छे के अंदर विशेष तरल दवा डालकर उसे बंद किया जाता है ताकि रीढ़ की हड्डी में खून का रिसाव न हो और मरीज लकवे से बच सके।",
            "benefitsEn": [
                "Treats deep, delicate spinal cord vascular malformations without dangerous open spine cutting.",
                "Stops repeated catastrophic bleeding inside the spinal cord (hematomyelia).",
                "Preserves existing leg motor strength, walking ability, and urinary control."
            ],
            "benefitsHi": [
                "बिना रीढ़ की हड्डी को चीरे अत्यंत नाजुक गुच्छे का आधुनिक सुरक्षित उपचार।",
                "रीढ़ की हड्डी के अंदर बार-बार खून बहने और अचानक दोनों पैरों के सुन्न व बेजान होने से बचाव।",
                "चलने-फिरने की ताकत और पेशाब-शौच के नियंत्रण को सुरक्षित बनाए रखना।"
            ],
            "specificRisksEn": [
                "Permanent leg paralysis (paraplegia) if spinal artery blood supply is compromised (2-5%)",
                "Spinal bleeding during or after procedure (3-5%)",
                "Temporary numbness or weakness in legs (10-15%)",
                "Need for staged procedures"
            ],
            "specificRisksHi": [
                "रीढ़ की मुख्य नस प्रभावित होने पर पैरों में स्थायी लकवे का गंभीर जोखिम (2-5%)।",
                "प्रक्रिया के दौरान या बाद में रीढ़ में ब्लीडिंग का खतरा (3-5%)।",
                "पैरों में अस्थायी कमजोरी या झनझनाहट (10-15%)।",
                "गुच्छे के बड़े होने पर एक से अधिक बार इलाज की आवश्यकता।"
            ],
            "alternativesEn": "High-risk open microsurgical resection, stereotactic spine radiosurgery, or supportive conservative therapy.",
            "alternativesHi": "रीढ़ का अत्यधिक जोखिम भरा ओपन ऑपरेशन, स्पाइन रेडिएशन, अथवा केवल दवाइयां।",
            "sedationTypeEn": "General anesthesia with continuous spinal cord neuro-monitoring (SSEP/MEP).",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 35. CSF-Venous Fistula Embolization
    {
        "id": "csf-venous-fistula-embolization",
        "name": "Embolization of CSF-Venous Fistulas with Onyx / Glue for Intracranial Hypotension",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-CSF-035",
        "rghsCode": "694 / 35",
        "icd10": "G96.0 (Cerebrospinal fluid leak) / G97.0",
        "indications": [
            "Spontaneous intracranial hypotension (SIH) with classic orthostatic headaches, brain sagging, and pachymeningeal enhancement on brain MRI",
            "Confirmed CSF-venous fistula (CVF) localized on digital subtraction myelography (DSM) or dynamic decubitus CT myelography",
            "Failure of conservative management, bed rest, hydration, and targeted epidural blood patching (EBP)",
            "Direct shunting of cerebrospinal fluid from a spinal nerve root sleeve directly into an adjacent paraspinal/epidural vein"
        ],
        "preOpCriteria": [
            "Definitive localization of the culprit CSF-venous fistula level (typically thoracic, T4-T11) via lateral decubitus dynamic DSM or CT myelogram",
            "Pre-procedure laboratory screen (INR <= 1.4, Platelets >= 80,000/uL)",
            "Venous access planned via femoral or jugular vein",
            "General anesthesia or deep conscious sedation"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F Femoral Venous Sheath", "spec": "11 cm length", "standardStore": "Angio Suite Store" },
            { "category": "Guiding Catheter", "name": "5F / 6F MPA / Cobra / Renal Double Curve Catheter", "spec": "90-100 cm length for azygos/hemi-azygos and intercostal vein selection", "standardStore": "Neuro IR Store" },
            { "category": "Microcatheter", "name": "Marathon / Headway Duo / Sonic DMSO-Compatible Microcatheter", "spec": "150 cm length with 1.3F-1.5F tip", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.010 in Mirage / Hybrid Wire", "spec": "200 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Liquid Embolic Agent", "name": "Onyx 18 / Squid 12 / Histoacryl Glue (n-BCA)", "spec": "EVOH liquid embolic or cyanoacrylate", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Right common femoral venous 6F access under local anesthesia and sedation.",
            "Navigate guide catheter into the azygos (right side) or hemi-azygos/accessory hemi-azygos vein (left side).",
            "Select the specific intercostal vein corresponding to the proven level of the CSF-venous fistula under fluoroscopy.",
            "Advance DMSO-compatible microcatheter over 0.010-inch microwire into the paraspinal/epidural venous plexus draining the nerve root sleeve diverticulum.",
            "Perform superselective microcatheter venogram to confirm opacification of the fistulous connection at the lateral spinal nerve sleeve.",
            "Flush microcatheter with saline and prime with 0.25 mL DMSO.",
            "Infuse Onyx 18 or n-BCA glue slowly under continuous fluoroscopic roadmapping, completely packing and casting the paraspinal vein and the fistulous junction.",
            "Verify complete obliteration of the draining vein without reflux into the azygos trunk or epidural venous channels.",
            "Withdraw microcatheter; confirm complete venous occlusion on control venography.",
            "Achieve femoral venous hemostasis with manual pressure."
        ],
        "complications": [
            "Rebound intracranial hypertension (severe non-orthostatic headache from sudden normalization of CSF pressure, treated with acetazolamide) (15 - 25%)",
            "Transient radicular intercostal pain or numbness (5 - 10%)",
            "Non-target liquid embolic migration into pulmonary circulation (<1%)",
            "Femoral access site hematoma (1 - 2%)"
        ],
        "maayTariffInr": 88000,
        "vendorContacts": [
            "Medtronic Neuro (+91 98293 11223)",
            "Balt India (+91 98295 33445)",
            "Stryker Neuro (+91 98294 22334)"
        ],
        "consent": {
            "nameHi": "CSF-वीनस फिस्टुला एम्बोलाइजेशन (दिमाग के पानी की नस में रिसाव का कैथेटर द्वारा इलाज)",
            "indicationEn": "Transvenous liquid embolic closure of an abnormal fistula draining brain/spinal fluid directly into veins, curing severe low-pressure headaches.",
            "indicationHi": "रीढ़ की नस में असामान्य छेद (CSF-वीनस फिस्टुला) के कारण दिमाग का पानी खून में बह जाने और खड़े होने पर भयानक सिरदर्द होने का नस द्वारा इलाज।",
            "descriptionEn": "Through the vein in the groin, a tiny microcatheter is steered into the specific back vein that is abnormally sucking fluid out of the spinal cord. Medical glue or liquid embolic is injected to permanently block the vein, curing the fluid leak and restoring brain fluid pressure.",
            "descriptionHi": "जांघ की नीली नस से कैथेटर को पीठ की उस विशेष नस तक ले जाया जाता है जो रीढ़ की हड्डी से दिमाग के पानी (CSF) को सीधे खून में खींचकर बहा रही है। वहां विशेष मेडिकल लिक्विड (Onyx) डालकर उस लीक होने वाली नस को पूरी तरह बंद कर दिया जाता है जिससे दिमाग का पानी बहना रुक जाता है और सिरदर्द तुरंत ठीक हो जाता है।",
            "benefitsEn": [
                "Cures debilitating, agonizing low-pressure headaches that occur upon standing.",
                "Reverses brain sagging, subdural fluid collections, and cranial nerve stretch.",
                "Minimally invasive cure without requiring open spinal surgery or laminectomy."
            ],
            "benefitsHi": [
                "खड़े होते ही होने वाले असहनीय सिरदर्द (लो-प्रेशर हेडेक) से 100% पक्का छुटकारा।",
                "दिमाग के नीचे खिसकने (ब्रेन सैगिंग) और नसों पर खिंचाव की समस्या का तुरंत निवारण।",
                "बिना रीढ़ की हड्डी काटे केवल नस के रास्ते स्थायी व सुरक्षित इलाज।"
            ],
            "specificRisksEn": [
                "Rebound high intracranial pressure (temporary headache when lying down, treated with mild water pills) (15-25%)",
                "Temporary rib or chest nerve aching (5-10%)",
                "Groin bruise or bleeding",
                "Embolic migration into lung vein (<1%)"
            ],
            "specificRisksHi": [
                "नस बंद होने के बाद कुछ दिन दिमाग में पानी का दबाव बढ़ने से लेटने पर सिरदर्द होना (15-25%, दवाइयों से ठीक हो जाता है)।",
                "छाती या पसली की नस में कुछ दिनों तक हल्का दर्द (5-10%)।",
                "जांघ में खून का थक्का।",
                "दवा का कण फेफड़ों में जाने का अत्यंत दुर्लभ जोखिम (<1%)।"
            ],
            "alternativesEn": "Surgical spinal nerve root ligation/clip placement via open laminectomy, repeated targeted epidural blood patching, or bed rest with caffeine.",
            "alternativesHi": "रीढ़ का ओपन ऑपरेशन करके नस बांधना (सर्जरी), बार-बार ब्लड पैच लगाना, अथवा बिस्तर पर लेटे रहना।",
            "sedationTypeEn": "General anesthesia or deep conscious sedation.",
            "sedationTypeHi": "गहरी सचेत बेहोशी अथवा पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    }
]

print(f"Loaded CAT16_PART3: {len(CAT16_PART3)} procedures")
