# -*- coding: utf-8 -*-
"""
Category 16 Part 2 (Procedures 19 to 35) - 17 procedures
"""

CAT16_PART2 = [
    # 19. CCF Direct SOV Puncture
    {
        "id": "ccf-direct-sov-puncture-embolization",
        "name": "Transorbital / Direct Superior Ophthalmic Vein Puncture for Carotid-Cavernous Fistula (CCF)",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-CCF-019",
        "rghsCode": "694 / 19",
        "icd10": "I67.848 (Other cerebrovascular disease) / H05.20",
        "indications": [
            "Direct or indirect carotid-cavernous fistula with severe ocular jeopardy (threatened vision, marked proptosis, elevated intraocular pressure > 30 mmHg)",
            "Failed transfemoral transvenous access due to occluded or severely tortuous inferior petrosal sinus (IPS)",
            "Prominent, dilated, arterialized superior ophthalmic vein (SOV) visualized on orbital Doppler ultrasound or CT",
            "Urgent intervention to prevent permanent visual loss from central retinal vein occlusion or ischemic optic neuropathy"
        ],
        "preOpCriteria": [
            "Ophthalmology consult with baseline visual acuity, fundoscopy, and IOP measurement documented",
            "High-resolution orbital Doppler ultrasound mapping SOV depth, diameter, and flow reversal",
            "Normal coagulation panel (INR <= 1.3, Platelets >= 100,000/uL)",
            "General anesthesia with ocular surgical field sterilization"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "21G Echogenic Micropuncture Needle & 4F Pediatric Sheath", "spec": "4 cm needle with 4F 7 cm micro-sheath", "standardStore": "Neuro IR Store" },
            { "category": "Arterial Guide Catheter", "name": "5F / 6F Diagnostic Catheter (Femoral)", "spec": "100 cm for simultaneous roadmapping", "standardStore": "Angio Suite Store" },
            { "category": "Microcatheter", "name": "Headway 17 / Excelsior SL-10 Microcatheter", "spec": "150 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.014 in Transend / Synchro Wire", "spec": "200 cm length, shapeable soft tip", "standardStore": "Neuro IR Store" },
            { "category": "Detachable Coils", "name": "Target / Axium Detachable Bare Platinum & Fibered Coils", "spec": "Assorted coils (3 mm to 14 mm)", "standardStore": "Neuro IR Store" },
            { "category": "Liquid Embolic", "name": "Onyx 18 / Onyx 34", "spec": "EVOH liquid embolic", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Femoral 5F arterial access established for continuous roadmapping DSA of the internal and external carotid arteries under GA.",
            "Sterilize ocular region; under high-frequency ultrasound guidance, puncture the arterialized superior ophthalmic vein directly through the upper eyelid crease or via anterior orbitotomy.",
            "Aspirate brisk arterialized venous blood to confirm intraluminal position; advance 0.018-inch wire and introduce a 4F micro-sheath into the SOV.",
            "Navigate microcatheter over 0.014-inch microwire posteriorly through the SOV directly into the cavernous sinus.",
            "Acquire control angiogram to verify catheter tip position inside the posterior and intercavernous venous compartments.",
            "Deploy detachable platinum and fibered coils sequentially to pack the cavernous sinus until the fistulous communication is obliterated.",
            "Perform simultaneous carotid DSA confirming complete cessation of CCF shunting with preservation of internal carotid artery flow.",
            "Withdraw microcatheter and SOV sheath; achieve manual compression hemostasis over orbit for 15 minutes."
        ],
        "complications": [
            "Retrobulbar hemorrhage causing orbital compartment syndrome and acute visual loss (1 - 3%)",
            "Transient worsening of ophthalmoplegia / cranial nerve palsy (CN III, IV, VI) (5 - 10%)",
            "Ophthalmic vein thrombosis / eyelid hematoma (3 - 5%)",
            "Carotid artery injury or stroke (<1%)"
        ],
        "maayTariffInr": 98000,
        "vendorContacts": [
            "Medtronic Neuro (+91 98293 11223)",
            "Stryker Neuro (+91 98294 22334)",
            "MicroVention India (+91 98296 44556)"
        ],
        "consent": {
            "nameHi": "ट्रांसऑर्बिटल / सुपीरियर ऑप्थैल्मिक वेन पंक्चर द्वारा CCF एम्बोलाइजेशन (आंख के रास्ते कैरोटिड-कैवर्नस फिस्टुला का इलाज)",
            "indicationEn": "Direct needle puncture of the swollen eye vein to pack and cure carotid-cavernous fistula threatening vision.",
            "indicationHi": "आंख की फूली हुई नस (SOV) में सीधे सुई लगाकर दिमाग के पीछे कैवर्नस साइनस के फिस्टुला को कॉइल्स से बंद करना ताकि रोशनी बचाई जा सके।",
            "descriptionEn": "When standard routes through the leg fail, interventional radiologists gently puncture the dilated vein above the eyeball under ultrasound guidance. A microcatheter is steered into the abnormal connection behind the eye to seal it with soft coils.",
            "descriptionHi": "जब जांघ की नस से रास्ता बंद हो, तो आंख के ऊपरी हिस्से की सूजी हुई नस में सोनोग्राफी से देखते हुए एक बारीक सुई डाली जाती है। वहां से कैथेटर आंख के पीछे ले जाकर खून के रिसाव वाले हिस्से को बारीक तारों (कॉइल्स) से पूरी तरह बंद कर दिया जाता है जिससे आंख की रोशनी बच जाती है।",
            "benefitsEn": [
                "Direct, sight-saving intervention when transfemoral routes are blocked.",
                "Rapid reversal of severe eye bulging (proptosis), pain, redness, and high eye pressure.",
                "Protects the optic nerve and preserves vision."
            ],
            "benefitsHi": [
                "आंख की रोशनी बचाने वाला अत्यंत प्रभावशाली उपचार जब जांघ का रास्ता बंद हो।",
                "आंख का बाहर निकलना, भयानक लाली, दर्द और आंख का बढ़ा हुआ दबाव तुरंत सामान्य होना।",
                "दृष्टि तंत्रिका (ऑप्टिक नर्व) को स्थायी नुकसान से बचाना।"
            ],
            "specificRisksEn": [
                "Bleeding behind the eyeball (retrobulbar hematoma) requiring emergency decompression (1-3%)",
                "Temporary double vision or droopy eyelid (5-10%)",
                "Bruising and swelling around the eyelid",
                "Eye infection (rare, <0.5%)"
            ],
            "specificRisksHi": [
                "आंख के पीछे खून का रिसाव (हेमेटोमा 1-3%)।",
                "अस्थायी तौर पर दो-दो दिखना या पलक का झुकना (5-10%)।",
                "आंख के चारों ओर सूजन व नील पड़ना।",
                "संक्रमण का दुर्लभ जोखिम।"
            ],
            "alternativesEn": "Surgical cut-down orbitotomy, transfemoral transvenous attempt via alternative veins, or open surgical packing.",
            "alternativesHi": "आंख का ऑपरेशन करके नस खोलना, जांघ के रास्ते दूसरा प्रयास, अथवा केवल दवाइयां।",
            "sedationTypeEn": "General anesthesia with endotracheal intubation.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 20. CCF Transfemoral Transvenous Occlusion
    {
        "id": "ccf-transfemoral-transvenous-occlusion",
        "name": "Transfemoral Transvenous Occlusion of Direct and Indirect CCFs",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-CCF-020",
        "rghsCode": "694 / 20",
        "icd10": "I67.848 (Other cerebrovascular disease) / H05.20",
        "indications": [
            "Carotid-cavernous fistula (Barrow Type B, C, D indirect dural fistulae, or Type A direct CCF)",
            "Progressive ocular symptoms: chemosis, exophthalmos, cranial nerve VI/III palsies, elevated intraocular pressure",
            "Presence of patent inferior petrosal sinus (IPS) providing direct transfemoral retrograde access to cavernous sinus",
            "Secondary cortical venous drainage presenting intracranial hemorrhage risk"
        ],
        "preOpCriteria": [
            "Complete bilateral internal and external carotid angiography identifying all arterial feeders and cavernous compartments",
            "Venous phase imaging documenting IPS patency and anterior/posterior cavernous sinus anatomy",
            "Coagulation within standard limits (INR <= 1.4, Platelets >= 80,000/uL)",
            "General anesthesia readiness"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "6F Femoral Venous Sheath + 5F Arterial Sheath", "spec": "Dual groin access kit", "standardStore": "Angio Suite Store" },
            { "category": "Guiding Catheter", "name": "6F Envoy / Guider Catheter", "spec": "90 cm length for internal jugular cannulation", "standardStore": "Neuro IR Store" },
            { "category": "Microcatheter", "name": "Excelsior SL-10 / Headway 17 / Scepter C Balloon Catheter", "spec": "150 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.014 in Synchro-14 / Traxcess Wire", "spec": "200 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Embolic Agents", "name": "Detachable Platinum Coils & Onyx 18 / 34", "spec": "Microcoils (2-12 mm) and EVOH liquid embolic", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Establish 5F arterial access for roadmapping and 6F femoral venous access under general anesthesia.",
            "Navigate 6F guide catheter into the internal jugular vein up to the jugular bulb.",
            "Superselectively cannulate the inferior petrosal sinus (IPS) using a 0.014-inch microwire and microcatheter.",
            "Advance microcatheter across the IPS directly into the posterior cavernous sinus compartment.",
            "Perform superselective microcatheter injection to delineate the cavernous sinus anatomy, intercavernous connections, and draining SOV.",
            "Successively deploy detachable platinum coils (and Onyx liquid embolic if needed) to pack the cavernous sinus densely.",
            "Perform simultaneous carotid arteriography; observe elimination of fistulous flow and normalization of ophthalmic vein drainage.",
            "Confirm preservation of internal carotid artery patency and withdrawal of catheters."
        ],
        "complications": [
            "Transient cranial nerve paresis (CN III, IV, VI) from cavernous mass effect / inflammation (5 - 8%)",
            "Coil protrusion or liquid embolic migration into ICA causing stroke (<1.5%)",
            "Venous perforation during IPS crossing (<1%)",
            "Femoral access hematoma (1 - 2%)"
        ],
        "maayTariffInr": 105000,
        "vendorContacts": [
            "Medtronic Neuro (+91 98293 11223)",
            "Stryker Neuro (+91 98294 22334)",
            "MicroVention India (+91 98296 44556)"
        ],
        "consent": {
            "nameHi": "ट्रांसफेमोरल ट्रांसवेनस कैरोटिड-कैवर्नस फिस्टुला (CCF) ऑक्लूजन (जांघ की नीली नस के रास्ते आंख के फिस्टुला को कॉइल्स से बंद करना)",
            "indicationEn": "Transvenous coil embolization via groin vein through petrosal sinus to seal abnormal brain-eye fistula.",
            "indicationHi": "जांघ की नीली नस (वेन) के रास्ते जाकर आंख के पीछे मौजूद कैरोटिड-कैवर्नस फिस्टुला (CCF) को कॉइल्स द्वारा बंद करना।",
            "descriptionEn": "A microcatheter is guided from the femoral vein in the groin up the neck into the veins behind the eye. Soft platinum coils are packed inside the cavernous space to permanently seal the high-pressure leak.",
            "descriptionHi": "जांघ की नस से कैथेटर को गर्दन के रास्ते सिर के अंदर आंख के पिछले हिस्से (कैवर्नस साइनस) तक पहुंचाया जाता है। वहां मुलायम प्लेटिनम के तार (कॉइल्स) भरकर असामान्य दबाव और खून के रिसाव को पूरी तरह बंद कर दिया जाता है।",
            "benefitsEn": [
                "Gold standard, minimally invasive cure for carotid-cavernous fistulae.",
                "Completely cures eye redness, swelling, protruding eyeball, and loud bruits in the head.",
                "Preserves normal vision and carotid artery flow."
            ],
            "benefitsHi": [
                "कैरोटिड-कैवर्नस फिस्टुला को ठीक करने की सबसे सुरक्षित एवं सफल न्यूनतम चीर-फाड़ वाली विधि।",
                "आंख का बाहर आना, लालिमा, दर्द और सिर में चलने वाली तेज आवाज से पूर्ण राहत।",
                "आंख की रोशनी और दिमाग की मुख्य नस को सुरक्षित बनाए रखना।"
            ],
            "specificRisksEn": [
                "Temporary double vision or eyelid droop due to pressure on eye nerves (5-8%)",
                "Very rare stroke from coil migration (<1.5%)",
                "Groin bruise or hematoma",
                "Incomplete closure requiring direct orbital approach"
            ],
            "specificRisksHi": [
                "नसों पर अस्थायी दबाव के कारण कुछ समय के लिए दो-दो दिखना (डबल विजन) या पलक झुकना (5-8%)।",
                "स्ट्रोक या लकवे का अत्यंत दुर्लभ जोखिम (<1.5%)।",
                "जांघ में खून का थक्का।",
                "नस पूरी तरह न बंद होने पर सीधे आंख से सुई लगाने की जरूरत पड़ना।"
            ],
            "alternativesEn": "Direct superior ophthalmic vein puncture, open surgical ligation, or conservative observation (for low-flow asymptomatic indirect fistulae).",
            "alternativesHi": "सीधे आंख की नस से पंक्चर, सिर का ऑपरेशन, अथवा केवल दवाइयों से निगरानी।",
            "sedationTypeEn": "General anesthesia with endotracheal intubation.",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 21. VGAM: Neonatal Transarterial Embolization
    {
        "id": "vgam-neonatal-transarterial-embolization",
        "name": "Transarterial Embolization of Vein of Galen Aneurysmal Malformations (VGAM) in Neonates",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-VGAM-021",
        "rghsCode": "694 / 21",
        "icd10": "Q28.2 (Arteriovenous malformation of cerebral vessels)",
        "indications": [
            "Neonatal vein of Galen aneurysmal malformation presenting with intractable high-output congestive heart failure (Bicetre Score 8-12)",
            "Progressive multi-organ failure, pulmonary hypertension, or cerebral venous hypertension",
            "Hydrocephalus, macrocephaly, or intracranial hemorrhage in infants with VGAM",
            "Staged embolization to reduce high-flow arteriovenous shunt volume and stabilize hemodynamics"
        ],
        "preOpCriteria": [
            "Multidisciplinary pediatric neuro-ICU stabilization with echocardiography assessing cardiac output and pulmonary pressures",
            "Bicetre Score calculated to determine immediate versus deferred intervention",
            "Ultrasound-guided umbilical artery or femoral artery access readiness",
            "Specialized pediatric neuro-anesthesia with strict hypothermia, fluid, and contrast limits (<4 mL/kg)"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "3F / 4F Pediatric Introducer Sheath", "spec": "5-7 cm length", "standardStore": "Pediatric IR Store" },
            { "category": "Guiding Catheter", "name": "4F Guider / Envoy Pediatric Guiding Catheter", "spec": "65-90 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Microcatheter", "name": "Magic 1.2F / Marathon / Sonic Microcatheter", "spec": "Flow-directed or steerable microcatheter", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.008 in / 0.010 in Mirage Steerable Wire", "spec": "200 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Liquid Embolic & Glue", "name": "Histoacryl (n-BCA) + Lipiodol or Onyx 18", "spec": "Rapid polymerizing cyanoacrylate glue or EVOH", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Pediatric femoral or umbilical artery 3F/4F access under general anesthesia in temperature-controlled room.",
            "Careful non-ionic contrast DSA through 4F catheter to delineate choroidal and mural feeding arteries directly shunting into the dilated median prosencephalic vein (vein of Galen).",
            "Navigate flow-directed or steerable 1.2F microcatheter over 0.008-inch wire superselectively into the highest-flow choroidal or subependymal arterial feeder.",
            "Wedge microcatheter at the immediate fistulous entry into the vein.",
            "Infuse calibrated n-BCA glue emulsion (60-70% n-BCA in Lipiodol) or Onyx under continuous fluoroscopy to occlude the fistulous orifice without letting glue escape into pulmonary venous circulation.",
            "Immediately withdraw microcatheter to prevent catheter gluing.",
            "Assess immediate reduction in cardiac preload and improvement in diastolic aortic pressure on arterial line.",
            "Perform staged embolization: close 1-3 dominant feeders; defer remaining feeders to avoid acute intracranial venous congestion; achieve hemostasis."
        ],
        "complications": [
            "Intraventricular or subarachnoid hemorrhage from acute venous hypertension (5 - 8%)",
            "Glue pulmonary embolism if embolic escapes through wide fistula into heart/lungs (2 - 4%)",
            "Cerebral infarction or ischemic parenchymal injury (3 - 5%)",
            "Femoral artery thrombosis in neonate (<3%)"
        ],
        "maayTariffInr": 155000,
        "vendorContacts": [
            "Balt India (+91 98295 33445)",
            "Medtronic Neuro (+91 98293 11223)",
            "Guerbet India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "नवजात में वेन ऑफ गैलेन एन्यूरिज्मल मालफॉर्मेशन (VGAM) ट्रांसआर्टेरियल एम्बोलाइजेशन (नवजात शिशु के दिमाग की विकृत नस का ग्लू से उपचार)",
            "indicationEn": "Life-saving endovascular glue embolization of massive brain vascular shunt in newborn with heart failure.",
            "indicationHi": "नवजात शिशु के दिमाग में नसों के विशाल गुच्छे (वेन ऑफ गैलेन मालफॉर्मेशन) के कारण दिल का दौरा पड़ने पर नसों को मेडिकल ग्लू से बंद करना।",
            "descriptionEn": "Under expert pediatric anesthesia, a hair-thin catheter is guided into the newborn's brain vessels. Medical glue is precisely injected into the abnormal short-circuits to reduce the massive blood flow overload on the baby's struggling heart.",
            "descriptionHi": "विशेष बाल न्यूरो-एनेस्थीसिया में नवजात शिशु की नस से बहुत बारीक कैथेटर दिमाग की उन असामान्य नसों तक ले जाया जाता है जो दिल पर अत्यधिक बोझ डाल रही हैं। वहां विशेष मेडिकल ग्लू (गोंद) डालकर असामान्य रक्त प्रवाह को बंद किया जाता है ताकि बच्चे के दिल और दिमाग को बचाया जा सके।",
            "benefitsEn": [
                "Life-saving procedure that reverses fatal high-output cardiac failure in newborns.",
                "Stabilizes cerebral hemodynamics and prevents multi-organ collapse.",
                "Allows normal brain development and neurological maturation."
            ],
            "benefitsHi": [
                "नवजात शिशु के दिल की गंभीर विफलता को ठीक कर जीवन रक्षा करने वाला एकमात्र उपाय।",
                "मस्तिष्क में रक्त संचार सामान्य कर अन्य अंगों (गुर्दे, फेफड़े) को फेल होने से बचाना।",
                "बच्चे के दिमाग के सामान्य विकास और मानसिक क्षमता को सुरक्षित रखना।"
            ],
            "specificRisksEn": [
                "Intracranial bleeding due to pressure changes in the baby's fragile brain (5-8%)",
                "Glue migration to lungs causing pulmonary embolism (2-4%)",
                "Brain stroke from arterial compromise",
                "Need for multiple staged sessions as baby grows"
            ],
            "specificRisksHi": [
                "नाजुक मस्तिष्क में रक्तचाप बदलने से ब्लीडिंग/हेमरेज का जोखिम (5-8%)।",
                "ग्लू का कण फेफड़ों में जाने का खतरा (2-4%)।",
                "दिमाग में खून का दौरा कम होना।",
                "जैसे-जैसे बच्चा बड़ा होता है, कई चरणों में इलाज की आवश्यकता होना।"
            ],
            "alternativesEn": "Intensive neonatal medical cardiac support alone (near 100% mortality without embolization in severe neonates).",
            "alternativesHi": "केवल आईसीयू में दवाइयों द्वारा दिल का सहारा (गंभीर शिशुओं में बिना इस प्रक्रिया के जीवित बचने की संभावना नगण्य होती है)।",
            "sedationTypeEn": "General endotracheal pediatric anesthesia with continuous arterial line and temperature regulation.",
            "sedationTypeHi": "विशेष बाल न्यूरो जनरल एनेस्थीसिया (पूर्ण बेहोशी)।"
        }
    },

    # 22. SDAVF: Transcatheter Embolization
    {
        "id": "sdavf-transcatheter-embolization",
        "name": "Transcatheter Embolization of Spinal Dural Arteriovenous Fistulae (SDAVF)",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-SDAVF-022",
        "rghsCode": "694 / 22",
        "icd10": "I67.848 (Other cerebrovascular disease) / G95.1",
        "indications": [
            "Spinal dural arteriovenous fistula presenting with progressive paraparesis, sensory loss, gait ataxia, or sphincter dysfunction (Foix-Alajouanine syndrome)",
            "Spinal MRI demonstrating T2 cord hyperintensity and perimedullary serpentine flow voids (venous congestive myelopathy)",
            "Confirmed radiculomeningeal artery feeder supplying fistula on selective spinal DSA",
            "Patient with progressive myelopathy where anterior spinal artery does not arise from the same pedicle"
        ],
        "preOpCriteria": [
            "Selective spinal DSA of all intercostal, lumbar, and vertebral artery levels identifying exact fistulous level and confirming Adamkiewicz artery origin",
            "Coagulation within surgical thresholds (INR <= 1.4, Platelets >= 80,000/uL)",
            "Neuromonitoring standby (somatosensory and motor evoked potentials: SSEP/MEP)",
            "General anesthesia readiness"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "5F / 6F Introducer Sheath", "spec": "11 cm length", "standardStore": "Angio Suite Store" },
            { "category": "Guide Catheter", "name": "5F / 6F Cobra C2 / Mikaelson / Headhunter Catheter", "spec": "100 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Microcatheter", "name": "Marathon / Headway Duo / Sonic DMSO-Compatible Microcatheter", "spec": "150 cm length with 1.3F-1.5F tip", "standardStore": "Neuro IR Store" },
            { "category": "Microguidewire", "name": "0.010 in Mirage / Traxcess Wire", "spec": "200 cm length", "standardStore": "Neuro IR Store" },
            { "category": "Liquid Embolic Agent", "name": "Onyx 18 / Squid 12 / Histoacryl Glue (n-BCA)", "spec": "Liquid embolic with DMSO solvent", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Catheterize the culprit segmental intercostal or lumbar artery using 5F Cobra catheter over 0.035-inch Glidewire under GA.",
            "Perform high-resolution roadmap spinal DSA: strictly verify that the anterior spinal artery (hairpin radiculomedullary branch / artery of Adamkiewicz) DOES NOT arise from this pedicle.",
            "Navigate DMSO-compatible microcatheter superselectively into the radiculomeningeal feeder artery right at the intervertebral foramen.",
            "Wedge microcatheter tip at the dural nerve sleeve junction.",
            "Prime microcatheter with 0.25 mL DMSO; infuse Onyx 18 slowly under continuous fluoroscopic roadmapping.",
            "Critical technique: push liquid embolic completely across the dura into the proximal foot of the medullary coronal draining vein (1-2 mm into vein) to permanently disconnect the fistula.",
            "Cease injection if embolic threatens to reflux into the main intercostal trunk or radiculomedullary branches.",
            "Perform completion spinal DSA of culprit and adjacent levels confirming complete fistula obliteration and patent anterior spinal artery."
        ],
        "complications": [
            "Spinal cord infarction / acute paraplegia from accidental anterior or posterior spinal artery embolization (1 - 3%)",
            "Temporary worsening of leg weakness or sensory symptoms from cord edema (5 - 10%)",
            "Catheter retention (<1%)",
            "Incomplete cure requiring microsurgical clipping (15 - 20%)"
        ],
        "maayTariffInr": 110000,
        "vendorContacts": [
            "Medtronic Neuro (+91 98293 11223)",
            "Stryker Neuro (+91 98294 22334)",
            "MicroVention India (+91 98296 44556)"
        ],
        "consent": {
            "nameHi": "स्पाइनल ड्यूरल आर्टेरियोवीनस फिस्टुला (SDAVF) ट्रांसकैथेटर एम्बोलाइजेशन (रीढ़ की हड्डी के फिस्टुला का नस द्वारा इलाज)",
            "indicationEn": "Transcatheter liquid embolic closure of spinal cord dural fistula causing progressive leg weakness and paralysis.",
            "indicationHi": "रीढ़ की हड्डी के पर्दे में नस के गलत जुड़ाव (SDAVF) को तरल दवा से बंद करना जिससे पैरों की कमजोरी व लकवा ठीक हो सके।",
            "descriptionEn": "A microcatheter is navigated from the groin into the specific rib or back artery feeding the spinal cord fistula. Liquid embolic is injected into the abnormal shunt to eliminate the venous congestion and reverse spinal cord swelling.",
            "descriptionHi": "जांघ की नस से कैथेटर को पीठ की उस धमनी तक पहुंचाया जाता है जो रीढ़ की हड्डी के फिस्टुला को खून दे रही है। वहां विशेष तरल दवा डालकर उस असामान्य कनेक्शन को हमेशा के लिए सील कर दिया जाता है जिससे रीढ़ की हड्डी पर दबाव घटता है और पैरों की ताकत लौट आती है।",
            "benefitsEn": [
                "Reverses progressive spinal cord swelling (congestive myelopathy) and prevents permanent wheelchair confinement.",
                "Substantially improves walking ability, leg sensation, and bladder/bowel control.",
                "Minimally invasive alternative to open spinal laminectomy and surgery."
            ],
            "benefitsHi": [
                "रीढ़ की हड्डी की सूजन घटाकर मरीज को हमेशा के लिए व्हीलचेयर या बिस्तर पर जाने से बचाना।",
                "पैरों की चलने की ताकत, सुन्नता और पेशाब-शौच के नियंत्रण में महत्वपूर्ण सुधार।",
                "बिना रीढ़ की हड्डी काटे (बिना ओपन सर्जरी) कैथेटर द्वारा सफल इलाज।"
            ],
            "specificRisksEn": [
                "Spinal cord stroke / acute paraplegia if embolic enters spinal feeding artery (1-3%)",
                "Transient worsening of leg stiffness or numbness (5-10%)",
                "Incomplete occlusion requiring neurosurgical clip ligation (15-20%)",
                "Groin puncture site hematoma"
            ],
            "specificRisksHi": [
                "दवा रीढ़ की मुख्य नस में जाने से अचानक पैरों में कमजोरी या लकवे का जोखिम (1-3%)।",
                "प्रक्रिया के बाद कुछ दिनों तक पैरों में जकड़न या भारीपन (5-10%)।",
                "पूरी तरह बंद न होने पर रीढ़ के छोटे ऑपरेशन (क्लिपिंग) की जरूरत पड़ना (15-20%)।",
                "जांघ में खून का थक्का।"
            ],
            "alternativesEn": "Microsurgical disconnection via hemilaminectomy, or conservative progression to permanent paraplegia.",
            "alternativesHi": "रीढ़ का ओपन ऑपरेशन (माइक्रोसर्जिकल क्लिपिंग), अथवा बिना इलाज के स्थायी लकवा होना।",
            "sedationTypeEn": "General anesthesia with neurophysiological spinal monitoring (SSEP/MEP).",
            "sedationTypeHi": "पूर्ण बेहोशी (जनरल एनेस्थीसिया)।"
        }
    },

    # 23. CAS Distal Filter Protection
    {
        "id": "cas-distal-filter-protection",
        "name": "Extracranial Carotid Artery Stenting (CAS) with Distal Filter Embolic Protection",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-CAS-023",
        "rghsCode": "694 / 23",
        "icd10": "I65.2 (Occlusion and stenosis of carotid artery)",
        "indications": [
            "Symptomatic internal carotid artery stenosis >= 50% (NASCET) presenting with TIA or non-disabling ischemic stroke",
            "Asymptomatic severe carotid stenosis >= 70-80% in surgical high-risk candidates (hostile neck, radiation, prior CEA, tracheostomy)",
            "High cervical carotid bifurcation (above C2) inaccessible to open carotid endarterectomy (CEA)",
            "Severe contralateral carotid occlusion requiring rapid revascularization"
        ],
        "preOpCriteria": [
            "CTA or carotid duplex ultrasound documenting degree of stenosis, plaque morphology (calcified vs ulcerated), and arch anatomy (Type I, II, III)",
            "Pre-treatment dual antiplatelet therapy for >= 5 days (Aspirin 150 mg + Clopidogrel 75 mg daily)",
            "Pre-procedure baseline neurological assessment and serum creatinine <= 1.5 mg/dL",
            "Readiness for intra-procedural IV Atropine (0.6-1.0 mg) to prevent carotid sinus bradycardia"
        ],
        "hardware": [
            { "category": "Vascular Access", "name": "8F Radiofocus Introducer Sheath", "spec": "11 cm length, 0.035 in valve", "standardStore": "Angio Suite Store" },
            { "category": "Guiding Sheath", "name": "6F / 8F Shuttle / Vista Brite Tip Guiding Sheath", "spec": "90 cm length, high-support shaft", "standardStore": "Neuro IR Store" },
            { "category": "Embolic Protection Device", "name": "SpiderFX / FilterWire EZ / AngioGuard Embolic Protection Filter", "spec": "Porous polyurethane/nitinol filter basket on 0.014 in wire (3-7 mm)", "standardStore": "Neuro IR Store" },
            { "category": "Carotid Stent", "name": "Carotid Wallstent / Precise Pro Nitinol Stent", "spec": "Closed-cell or open-cell nitinol stent (7-10 mm x 30-40 mm)", "standardStore": "Neuro IR Store" },
            { "category": "PTA Balloon Catheter", "name": "Ultraverse / Submax Monorail Balloon Catheter", "spec": "4.5 - 5.5 mm x 20 mm post-dilation balloon", "standardStore": "Neuro IR Store" },
            { "category": "Hemodynamic Drug", "name": "Inj Atropine Sulphate", "spec": "0.6 mg/mL ampoules for pre-dilation bolus", "standardStore": "Angio Suite Store" }
        ],
        "techniqueSteps": [
            "Femoral or radial access; position 6F/8F guiding sheath in the common carotid artery under local anesthesia and conscious sedation.",
            "Acquire magnified cervical and intracranial DSA demonstrating baseline stenosis and intracranial collateral flow.",
            "Cross the tight carotid stenosis carefully with the distal embolic protection device (SpiderFX or FilterWire EZ) on a 0.014-inch wire.",
            "Deploy the protective filter basket in the straight segment of the cervical ICA distal to the lesion; verify full circumferential wall apposition.",
            "Administer IV Atropine (0.6-1.0 mg) to prevent severe bradycardia / asystole triggered by carotid sinus baroreceptor stretch.",
            "Gentle pre-dilation with a 3.0-3.5 mm balloon if the lesion is sub-occlusive.",
            "Deploy self-expanding carotid stent (Wallstent or Precise Pro) spanning the entire plaque from distal normal ICA to common carotid.",
            "Perform post-dilation with a 5.0-5.5 mm balloon within the stent margin under fluoroscopic roadmapping.",
            "Advance recovery catheter over the wire; capture and retrieve the filter basket containing captured debris.",
            "Perform completion cervical and intracranial DSA confirming widely patent stent, no residual stenosis (<20%), and no distal intracranial emboli.",
            "Hemostasis using vascular closure device (Angio-Seal or Perclose)."
        ],
        "complications": [
            "Periprocedural ischemic stroke from micro-debris escaping the filter (1.5 - 3%)",
            "Hemodynamic instability: profound bradycardia, hypotension, or vasovagal syncope (10 - 20%)",
            "Hyperperfusion syndrome / intracranial hemorrhage following abrupt flow restoration (1 - 2%)",
            "Puncture site groin hematoma or pseudoaneurysm (1 - 2%)",
            "Carotid dissection or stent thrombosis (<1%)"
        ],
        "maayTariffInr": 82000,
        "vendorContacts": [
            "Medtronic Neuro (+91 98293 11223)",
            "Boston Scientific (+91 98293 66554)",
            "Cordis Interventional (+91 98292 44321)"
        ],
        "consent": {
            "nameHi": "कैरोटिड आर्टरी स्टेंटिंग (CAS) डिस्टल फिल्टर प्रोटेक्शन के साथ (गले की मुख्य नस में सुरक्षात्मक फिल्टर लगाकर स्टेंट डालना)",
            "indicationEn": "Stenting of severely narrowed neck artery (carotid) with a protective umbrella filter to prevent future stroke.",
            "indicationHi": "गले की मुख्य नस (कैरोटिड धमनी) में 70% से अधिक रुकावट होने पर भविष्य में लकवे (स्ट्रोक) से बचने हेतु फिल्टर लगाकर स्टेंट डालना।",
            "descriptionEn": "Under local anesthesia, a tiny umbrella-like filter is opened in the neck artery above the blockage to catch any loose plaque debris. A medical metal stent is then deployed to widen the artery permanently, and the filter with trapped debris is removed.",
            "descriptionHi": "जांघ की नस से कैथेटर गले की संकरी नस तक ले जाया जाता है। नस खोलने से पहले दिमाग की तरफ जाने वाले रास्ते पर एक बारीक छतरी जैसा सुरक्षा फिल्टर खोला जाता है ताकि नस की गंदगी दिमाग में न जाए। फिर स्टेंट डालकर नस खोल दी जाती है और छतरी को गंदगी सहित बाहर निकाल लिया जाता है।",
            "benefitsEn": [
                "Reduces the risk of severe debilitating stroke by >80% in patients with tight carotid narrowing.",
                "Non-surgical procedure without neck incisions, general anesthesia, or risk of neck nerve injuries.",
                "Rapid recovery with return to normal activity within 48 hours."
            ],
            "benefitsHi": [
                "गले की संकरी नस को खोलकर भविष्य में होने वाले जानलेवा लकवे के खतरे को 80% से अधिक घटाना।",
                "बिना गले में चीरा लगाए (बिना ओपन सर्जरी) और बिना पूर्ण बेहोशी के सुरक्षित उपचार।",
                "मात्र 2 दिनों में अस्पताल से छुट्टी और सामान्य दिनचर्या में वापसी।"
            ],
            "specificRisksEn": [
                "Minor or major stroke during the procedure (1.5-3%)",
                "Temporary drop in heart rate and blood pressure requiring medication (10-20%)",
                "Bleeding or hematoma at the groin puncture site (1-2%)",
                "Hyperperfusion headache or bleeding from sudden high blood flow (1-2%)"
            ],
            "specificRisksHi": [
                "प्रक्रिया के समय दिमाग में कण जाने से लकवे का जोखिम (1.5-3%)।",
                "नस फूलने के समय दिल की धड़कन व ब्लड प्रेशर का अस्थायी रूप से कम होना (10-20%)।",
                "जांघ में खून का थक्का या सूजन।",
                "अचानक तेज खून का दौरा शुरू होने से सिरदर्द या सूजन (1-2%)।"
            ],
            "alternativesEn": "Carotid endarterectomy (open surgical plaque removal), or medical therapy with intensive statins and blood thinners (higher stroke risk if tight stenosis).",
            "alternativesHi": "गले की ओपन सर्जरी (कैरोटिड एंडआर्टेरेक्टॉमी), अथवा केवल खून पतला करने की गोलियां (जिसमें स्ट्रोक का खतरा बना रहता है)।",
            "sedationTypeEn": "Local anesthesia at groin with conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (लोकल एनेस्थीसिया) एवं हल्की शामक दवा।"
        }
    },

    # 24. TCAR Flow Reversal
    {
        "id": "tcar-flow-reversal-stenting",
        "name": "Transcarotid Artery Revascularization (TCAR) with Dynamic Flow Reversal",
        "category": "Neurovascular & Neurointerventional Surgery",
        "code": "NEURO-CAS-024",
        "rghsCode": "694 / 24",
        "icd10": "I65.2 (Occlusion and stenosis of carotid artery)",
        "indications": [
            "Severe carotid artery stenosis in patients with hostile aortic arch anatomy (Type III arch, bovine arch, heavy aortic calcification) where transfemoral access carries high stroke risk",
            "High surgical risk patients with significant cardiopulmonary comorbidities",
            "Symptomatic or asymptomatic tight carotid bifurcation stenosis",
            "Prior neck dissection or radiation where open surgical endarterectomy is hazardous"
        ],
        "preOpCriteria": [
            "Neck ultrasound/CTA confirming common carotid artery puncture site at least 5 cm proximal to carotid bifurcation",
            "Dual antiplatelet therapy established (Aspirin + Clopidogrel)",
            "Patent femoral vein for trans-femoral venous flow return circuit",
            "Local anesthesia with conscious sedation or light GA"
        ],
        "hardware": [
            { "category": "TCAR System", "name": "ENROUTE Transcarotid Neuroprotection System & Sheath", "spec": "Dedicated transcarotid access sheath and dynamic flow reversal circuit with micro-filter", "standardStore": "Neuro IR Store" },
            { "category": "Venous Return Sheath", "name": "ENROUTE Venous Return Sheath", "spec": "7F / 8F sheath placed in common femoral vein", "standardStore": "Neuro IR Store" },
            { "category": "Carotid Stent", "name": "ENROUTE Transcarotid Stent System", "spec": "Self-expanding nitinol stent specifically sized for TCAR", "standardStore": "Neuro IR Store" },
            { "category": "Balloon Catheter", "name": "ENROUTE 0.014 in PTA Balloon", "spec": "4.0 - 5.5 mm x 20 mm rapid exchange balloon", "standardStore": "Neuro IR Store" },
            { "category": "Puncture Set", "name": "Transcarotid Micropuncture Set", "spec": "21G needle with 0.018 in wire", "standardStore": "Neuro IR Store" }
        ],
        "techniqueSteps": [
            "Under local anesthesia with mild sedation, make a small 1-2 cm transverse cutdown or percutaneous puncture above the clavicle to expose the common carotid artery (CCA).",
            "Place a 7F venous sheath in the common femoral vein.",
            "Cannulate the CCA and insert the ENROUTE transcarotid arterial sheath; clamp/snare the proximal CCA to establish complete flow arrest.",
            "Connect the arterial sheath to the venous sheath through the external ENROUTE flow reversal filter circuit.",
            "Because pressure in the brain is higher than in the femoral vein, blood flows in REVERSE from the brain down into the carotid sheath and through the filter into the femoral vein.",
            "Under continuous high-rate flow reversal (making embolization into the brain physically impossible), cross the lesion with 0.014-inch wire.",
            "Perform balloon pre-dilation and deploy the self-expanding ENROUTE carotid stent.",
            "Post-dilate stent as needed; verify full expansion and absence of residual debris on the external circuit filter.",
            "Discontinue flow reversal; restore antegrade carotid circulation.",
            "Perform completion angiography confirming widely patent carotid reconstruction; remove sheath and secure CCA with surgical purse-string or ProGlide."
        ],
        "complications": [
            "Periprocedural stroke (lowest among all stenting modalities, <1.0%)",
            "Cervical hematoma at carotid cutdown site (1 - 2%)",
            "Intolerance to flow reversal (transient TIA during reversal requiring rapid completion) (2 - 3%)",
            "Cranial nerve injury (recurrent laryngeal or hypoglossal) (<1%)"
        ],
        "maayTariffInr": 125000,
        "vendorContacts": [
            "Silk Road Medical / Boston Scientific (+91 98293 66554)",
            "Medtronic Neuro (+91 98293 11223)",
            "Stryker Neuro (+91 98294 22334)"
        ],
        "consent": {
            "nameHi": "ट्रांसकैरोटिड आर्टरी रिवास्कुलराइजेशन (TCAR - उल्टे रक्त प्रवाह की सुरक्षा में गले की नस में स्टेंट डालना)",
            "indicationEn": "Direct collarbone-level carotid stenting with high-rate flow reversal to prevent any debris from reaching the brain.",
            "indicationHi": "गले के निचले हिस्से से सीधे नस में जाकर, रक्त प्रवाह को अस्थायी रूप से उल्टा बहाकर स्टेंट लगाना ताकि स्ट्रोक का खतरा 0% के करीब रहे।",
            "descriptionEn": "Through a tiny puncture just above the collarbone, the blood flow in the neck artery is temporarily reversed so it flows away from the brain into an external filter. Under this total protective backflow, a stent is safely placed, ensuring no particle can ever travel to the brain.",
            "descriptionHi": "हंसली की हड्डी के पास गले के निचले हिस्से में एक छोटा कट लगाकर नस में नली डाली जाती है। एक विशेष मशीन द्वारा खून के बहाव को कुछ मिनटों के लिए दिमाग की तरफ जाने से रोककर उल्टी दिशा में बहाया जाता है और बाहर फिल्टर से छानकर पैर की नस में वापस भेजा जाता है। इस उल्टे बहाव की आड़ में स्टेंट लगाया जाता है जिससे दिमाग में कचरा जाने की संभावना शून्य हो जाती है।",
            "benefitsEn": [
                "Lowest stroke rate (<1%) among all carotid intervention techniques in high-risk patients.",
                "Completely avoids navigating catheters through diseased, calcified aortic arches.",
                "Fast recovery with minimal discomfort and hospital stay under 24-48 hours."
            ],
            "benefitsHi": [
                "दुनिया में कैरोटिड स्टेंटिंग की सभी विधियों में सबसे कम स्ट्रोक दर (<1%)।",
                "छाती की मुख्य नस (महाधमनी) के रास्ते नहीं जाना पड़ता, जिससे बुजुर्ग व कमजोर मरीजों में स्ट्रोक का खतरा नहीं रहता।",
                "बहुत छोटा चीरा, कम दर्द और 24-48 घंटे में मरीज घर जा सकता है।"
            ],
            "specificRisksEn": [
                "Minor neck wound bruising or hematoma (1-2%)",
                "Temporary dizziness or intolerance to flow reversal during procedure (2-3%)",
                "Stroke risk (exceedingly rare, <1%)",
                "Temporary hoarseness of voice (<1%)"
            ],
            "specificRisksHi": [
                "गले के छोटे चीरे वाली जगह पर हल्का खून का थक्का या सूजन (1-2%)।",
                "खून का बहाव उल्टा रहने के दौरान हल्का चक्कर आना (2-3%)।",
                "स्ट्रोक का अत्यंत दुर्लभ खतरा (<1%)।",
                "आवाज में हल्का भारीपन (<1%)।"
            ],
            "alternativesEn": "Transfemoral carotid stenting with filter, open carotid endarterectomy (CEA), or aggressive medical therapy.",
            "alternativesHi": "जांघ के रास्ते स्टेंटिंग (फिल्टर के साथ), गले का बड़ा ऑपरेशन (एंडआर्टेरेक्टॉमी), अथवा दवाइयां।",
            "sedationTypeEn": "Local anesthesia with light conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (लोकल एनेस्थीसिया) एवं हल्की शामक दवा।"
        }
    }
]

print(f"Loaded CAT16_PART2: {len(CAT16_PART2)} procedures")
