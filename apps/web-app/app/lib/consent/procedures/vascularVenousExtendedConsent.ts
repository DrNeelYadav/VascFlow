import { ProcedureConsentTemplate } from '../consentData';

/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 *
 * Statutory Bilingual Informed Consents for Vascular, Venous, Budd-Chiari, HPB, Arterial, Aortic & Trauma Interventions
 */

export const VASCULAR_VENOUS_EXTENDED_CONSENT_TEMPLATES: Record<string, ProcedureConsentTemplate> = {
  "venaseal-varicose-glue": {
    "id": "venaseal-varicose-glue",
    "category": "Superficial Venous Interventions",
    "nameEn": "VenaSeal Cyanoacrylate Superglue Closure for Varicose Veins",
    "nameHi": "वेनासील मेडिकल सुपरग्लू द्वारा वैरिकोज वेन्स का उपचार (नस चिपकाने की आधुनिक तकनीक)",
    "indicationEn": "Symptomatic varicose veins caused by great or small saphenous vein valve incompetence resulting in leg heaviness, ache, and venous edema.",
    "indicationHi": "पैर की मुख्य नस (ग्रेट या स्मॉल सेफेनस वेन) के वाल्व खराब होने से वैरिकोज नसों का बनना, पैरों में दर्द, भारीपन, सूजन तथा नसें फूलने की समस्या।",
    "descriptionEn": "Under local anesthesia and ultrasound guidance, a tiny catheter is placed inside the diseased saphenous vein. Special medical-grade cyanoacrylate glue is dispensed in tiny drops along the vein while light external compression is applied, instantly sealing the vein shut without heat or tumescent needle punctures.",
    "descriptionHi": "अल्ट्रासाउंड की मदद से सुन्न करने का इंजेक्शन लगाकर पैर की खराब नस में एक बारीक नली डाली जाती है। इसके जरिए मेडिकल ग्रेड का विशेष चिपकाने वाला गोंद (ग्लू) थोड़ी-थोड़ी दूरी पर नस के अंदर डाला जाता है और बाहर से हल्का दबाव देकर खराब नस को तुरंत बंद कर दिया जाता है। इसमें बार-बार सुई चुभाने या सेकने की जरूरत नहीं होती।",
    "benefitsEn": [
      "Instant closure of the diseased refluxing vein, eliminating painful varicose veins.",
      "No need for multiple painful tumescent anesthesia needle pricks along the thigh or leg.",
      "No requirement for hot thermal energy, eliminating risks of nerve heat injury and skin burns.",
      "Patients can walk immediately post-procedure and usually do not require tight compression stockings."
    ],
    "benefitsHi": [
      "खराब नस का तुरंत और पक्का बंद होना जिससे पैरों का दर्द और फूली हुई नसें ठीक हो जाती हैं।",
      "जांघ और टांग में दर्जनों दर्दनाक सुइयां (ट्युमेसेंट एनेस्थीसिया) लगाने की बिल्कुल जरूरत नहीं पड़ती।",
      "गर्मी या सेकने की जरूरत नहीं होने से नसों के जलने या चमड़ी झुलसने का कोई खतरा नहीं रहता।",
      "मरीज प्रक्रिया के तुरंत बाद पैदल चल सकता है और बहुत टाइट मोजे पहनने की बाध्यता नहीं रहती।"
    ],
    "specificRisksEn": [
      "Superficial phlebitis / localized inflammatory redness and tenderness along the treated vein (5-10%).",
      "Foreign body / allergic hypersensitivity reaction to the cyanoacrylate glue (< 0.5%).",
      "Extension of glue or clot into the deep femoral vein (EGIT) (< 1%).",
      "Temporary skin hyperpigmentation or thread vein appearance along the treated line (1-2%)."
    ],
    "specificRisksHi": [
      "इलाज की गई नस के रास्ते पर हल्की लाली, सूजन अथवा छूने पर दर्द (फाइब्रोसिस/फ्लेबाइटिस) होना (5-10%)।",
      "मेडिकल गोंद (ग्लू) से एलर्जी या खुजली की दुर्लभ प्रतिक्रिया (< 0.5%)।",
      "गोंद अथवा खून के थक्के का अंदरूनी मुख्य नस (डीप वेन) में जाने का अत्यंत दुर्लभ खतरा (< 1%)।",
      "इलाज वाले रास्ते पर त्वचा का रंग हल्का गहरा पड़ना या बारीक नसें दिखना (1-2%)।"
    ],
    "alternativesEn": "Endovenous thermal ablation (Laser / Radiofrequency), ultrasound-guided foam sclerotherapy, open surgical stripping and high ligation, or lifelong wearing of medical compression stockings.",
    "alternativesHi": "एंडोवेनस लेजर (EVLA) अथवा रेडियोफ्रीक्वेंसी (RFA) द्वारा नस जलाना, फोम का इंजेक्शन (स्क्लेरोथेरेपी), चीरा लगाकर नस निकालने का ऑपरेशन (सर्जिकल स्ट्रिपिंग), अथवा नियमित मेडिकल कम्प्रेशन मोजे पहनना।",
    "sedationTypeEn": "Local infiltration anesthesia at the single needle puncture site; no extensive tumescent sedation needed.",
    "sedationTypeHi": "केवल सुई डालने के स्थान पर हल्का सुन्न करने वाला इंजेक्शन (लोकल एनेस्थीसिया)।"
  },
  "venous-foam-sclerotherapy-ugfs": {
    "id": "venous-foam-sclerotherapy-ugfs",
    "category": "Superficial Venous Interventions",
    "nameEn": "Ultrasound-Guided Foam Sclerotherapy (UGFS) for Varicose Tributaries",
    "nameHi": "अल्ट्रासाउंड निर्देशित फोम स्क्लेरोथेरेपी (झाग वाले इंजेक्शन से वैरिकोज नसों को सुखाना)",
    "indicationEn": "Tortuous superficial varicose clusters, branch tributaries, or recurrent varicosities following previous surgery or laser treatment.",
    "indicationHi": "पैर में उभरी हुई टेढ़ी-मेढ़ी वैरिकोज नसों के गुच्छे, शाखाएं अथवा पहले हुए ऑपरेशन या लेजर के बाद दोबारा उभरी हुई नसें।",
    "descriptionEn": "A special chemical medication (Sodium Tetradecyl Sulfate) is converted into a microfoam using sterile air. Under ultrasound guidance, this foam is injected directly into the swollen varicose veins, causing the diseased vein walls to collapse, stick together, and gradually dissolve away naturally.",
    "descriptionHi": "दवा (एसटीएस) को विशेष तकनीक से हवा के साथ मिलाकर बारीक गाढ़ा झाग (माइक्रोफोम) बनाया जाता है। सोनोग्राफी मशीन की देखरेख में बारीक सुई द्वारा यह झाग सीधे फूली हुई नसों में डाला जाता है। यह दवा नस की अंदरूनी सतह को सुखाकर चिपका देती है, जिससे नस धीरे-धीरे सूखकर गायब हो जाती है।",
    "benefitsEn": [
      "Minimally invasive, scarless closure of tortuous varicose vein clusters without any surgical cuts.",
      "Can target branch veins and deep feeding channels that cannot be reached with laser fibers.",
      "Can be safely performed as a quick daycare procedure with immediate walking post-treatment."
    ],
    "benefitsHi": [
      "बिना किसी चीरे या टांके के टेढ़ी-मेढ़ी उभरी नसों का सुरक्षित और पक्का इलाज।",
      "उन शाखाओं और नसों तक भी पहुंच संभव जहां लेजर या कैथेटर तार नहीं पहुंच सकता।",
      "डे-केयर प्रक्रिया जिसमें अस्पताल में भर्ती की जरूरत नहीं होती और मरीज तुरंत चलने लगता है।"
    ],
    "specificRisksEn": [
      "Brownish skin hyperpigmentation (hemosiderin staining) over the treated vein site (10-20%, usually fades over months).",
      "Superficial thrombophlebitis / firm tender lumps as the treated vein clots and dissolves (3-5%).",
      "Transient visual blurring, shimmering light (scotoma), or temporary headache (< 1.5%).",
      "Accidental skin necrosis or small ulcer if sclerosant leaks outside the vessel (< 0.2%)."
    ],
    "specificRisksHi": [
      "इलाज वाली जगह की त्वचा पर भूरे-काले रंग के निशान या धब्बे पड़ना (10-20%, जो कई महीनों में हल्के होते हैं)।",
      "नस सूखने के दौरान वहां हल्की गांठ, कड़ापन या छूने पर दर्द होना (3-5%)।",
      "प्रक्रिया के तुरंत बाद आंखों के आगे थोड़ी देर के लिए चमक या हल्का सिरदर्द महसूस होना (< 1.5%)।",
      "दवा नस से बाहर रिसने पर त्वचा पर छोटा घाव या छाला बनना (< 0.2%)।"
    ],
    "alternativesEn": "Surgical phlebectomy (micro-incisions to hook out veins), endovenous laser/radiofrequency ablation, or wearing compression stockings.",
    "alternativesHi": "माइक्रो-फ्लेबेक्टोमी (छोटे चीरे लगाकर नसों को बाहर खींचना), लेजर इलाज, या कम्प्रेशन मोजे पहनना।",
    "sedationTypeEn": "None or minimal local anesthesia at the skin needle entry site.",
    "sedationTypeHi": "किसी बेहोशी की आवश्यकता नहीं; केवल सुई की नोक पर मामूली सुन्नता।"
  },
  "venous-perforator-sclero-glue": {
    "id": "venous-perforator-sclero-glue",
    "category": "Superficial Venous Interventions",
    "nameEn": "Incompetent Venous Perforator Sclerotherapy & Cyanoacrylate Glue Closure",
    "nameHi": "वेनस परफोरेटर नस का स्क्लेरोथेरेपी एवं मेडिकल ग्लू द्वारा उपचार (अल्सर पैदा करने वाली नस को बंद करना)",
    "indicationEn": "Pathological leaking perforator veins in the lower leg causing chronic venous leg ulcers, skin darkening, and severe swelling.",
    "indicationHi": "पिंडली या टखने के पास अंदरूनी और बाहरी नसों को जोड़ने वाली खराब नस (परफोरेटर) से अत्यधिक रिसाव होना, जिसके कारण पैर में न भरने वाला घाव (अल्सर), कालापन और सूजन होना।",
    "descriptionEn": "Under real-time ultrasound guidance, a fine needle is precisely introduced into the defective connecting perforator vein piercing the leg muscle fascia. A minute amount of medical tissue adhesive (glue) or specialized sclerosant foam is injected under deep vein protection to permanently block the high-pressure leak fueling the ulcer.",
    "descriptionHi": "सोनोग्राफी की मदद से एक बारीक सुई को मांसपेशी के छेद से गुजरने वाली उस खराब नस (परफोरेटर) में डाला जाता है जो घाव में गंदा खून भेज रही है। अंदरूनी मुख्य नस को सुरक्षित रखते हुए इसमें विशेष मेडिकल गोंद या सुखाने वाला फोम डाला जाता है जिससे खराब नस तुरंत बंद हो जाती है और घाव तेजी से भरने लगता है।",
    "benefitsEn": [
      "Directly targets and shuts down the root vascular cause of chronic non-healing venous leg ulcers.",
      "Accelerates ulcer healing rates and drastically reduces ulcer recurrence.",
      "Avoids open surgical subfascial ligation (SEPS) incisions in compromised, infected skin tissue."
    ],
    "benefitsHi": [
      "सालों पुराने न भरने वाले पैर के घावों (वेनस अल्सर) की मुख्य जड़ को सीधे बंद करना।",
      "घाव के भरने की गति में भारी सुधार और दोबारा घाव बनने के खतरे में भारी कमी।",
      "सड़े-गले चमड़े पर बड़ा चीरा लगाने या सर्जरी (SEPS) से पूरी तरह बचाव।"
    ],
    "specificRisksEn": [
      "Extension of glue or clot into the deep calf veins (deep vein thrombosis) (< 1%).",
      "Localized tenderness, swelling, or firm nodule beneath the skin (3-5%).",
      "Delayed extrusion of tiny polymerized glue particle through the skin months later (< 1%).",
      "Recurrence of perforator incompetence requiring supplementary sclerotherapy (5%)."
    ],
    "specificRisksHi": [
      "गोंद या थक्का पैर की गहरी मुख्य नस में जाने का अत्यंत दुर्लभ खतरा (DVT) (< 1%)।",
      "सुई वाली जगह पर त्वचा के नीचे हल्की गांठ, कड़ापन या दर्द होना (3-5%)।",
      "कुछ महीनों बाद सूखे हुए गोंद का एक बारीक कण त्वचा से बाहर निकलना (< 1%)।",
      "कुछ समय बाद नस का दोबारा हल्का खुलना जिसके लिए अतिरिक्त इंजेक्शन की जरूरत पड़ सकती है (5%)।"
    ],
    "alternativesEn": "Subfascial Endoscopic Perforator Surgery (SEPS), thermal perforator ablation (RFA/laser), or compression bandaging alone.",
    "alternativesHi": "दूरबीन द्वारा नस काटने की सर्जरी (SEPS), लेजर/रेडियोफ्रीक्वेंसी द्वारा जलाना, अथवा केवल पट्टियां बांधना।",
    "sedationTypeEn": "Targeted local infiltration anesthesia under ultrasound vision.",
    "sedationTypeHi": "अल्ट्रासाउंड द्वारा देखकर नस के आसपास हल्का सुन्न करने का इंजेक्शन (लोकल एनेस्थीसिया)।"
  },
  "gsv-endovenous-laser-rfa-glue": {
    "id": "gsv-endovenous-laser-rfa-glue",
    "category": "Superficial Venous Interventions",
    "nameEn": "Great Saphenous Vein (GSV) Truncal Multi-Modal Ablation (EVLA / RFA / Glue)",
    "nameHi": "ग्रेट सेफेनस वेन (GSV) एंडोवेनस लेजर / रेडियोफ्रीक्वेंसी / ग्लू एब्लेशन (पैर की मुख्य खराब नस का आधुनिक उपचार)",
    "indicationEn": "Extensive great saphenous vein valvular incompetence with groin reflux causing thigh and calf varicose veins, heaviness, edema, or venous ulceration.",
    "indicationHi": "जांघ से लेकर टखने तक की मुख्य नस (GSV) के वाल्व खराब होना, खून का उल्टा बहना, पैरों में नसों का गुच्छा, दर्द, सूजन अथवा पैर में अल्सर (घाव) होना।",
    "descriptionEn": "Under ultrasound visualization, a thin laser fiber or thermal catheter is passed from the knee level up to near the groin. Tumescent fluid is injected around the vein to numb it and protect adjacent tissues. Controlled thermal energy or specialized glue is then applied as the device is drawn back, permanently closing the diseased vein from within.",
    "descriptionHi": "सोनोग्राफी की मदद से घुटने के पास से एक बारीक लेजर तार या हीटिंग कैथेटर जांघ के ऊपरी हिस्से तक नस के अंदर पहुंचाया जाता है। नस के चारों ओर सुन्न करने का ठंडा पानी (ट्युमेसेंट) भरा जाता है ताकि दर्द न हो और आसपास की त्वचा सुरक्षित रहे। इसके बाद लेजर किरण या गर्मी देकर नस को अंदर से पूरी तरह सील कर दिया जाता है।",
    "benefitsEn": [
      "Over 95% long-term success rate in permanently closing the incompetent trunk.",
      "Performed through a tiny needle puncture with no surgical cuts, stitches, or groin scars.",
      "Rapid recovery with return to work and normal activity within 24 to 48 hours."
    ],
    "benefitsHi": [
      "95% से अधिक सफलता दर के साथ खराब नस का हमेशा के लिए बंद होना।",
      "बिना किसी चीरे, टांके या जांघ पर निशान के केवल एक सुई के छेद से सम्पूर्ण उपचार।",
      "मरीज 24 से 48 घंटे के अंदर अपने सामान्य काम-काज और दिनचर्या पर लौट सकता है।"
    ],
    "specificRisksEn": [
      "Endovenous Heat-Induced Thrombosis (EHIT) into the deep femoral vein (0.5-2%).",
      "Transient numbness or tingling along the calf due to saphenous nerve irritation (2-4%).",
      "Superficial thrombophlebitic cord, bruising, or skin discoloration (3-5%).",
      "Rare risk of skin burn prevented by adequate tumescent fluid protection (< 0.1%)."
    ],
    "specificRisksHi": [
      "नस के मुहाने पर खून का थक्का गहरी नस में हल्का आगे बढ़ना (EHIT) (0.5-2%)।",
      "पिंडली के अंदरूनी हिस्से में हल्का सुन्नपन या झनझनाहट महसूस होना (2-4%)।",
      "नस के रास्ते में कड़ापन, नील पड़ना या हल्का दर्द होना (3-5%)।",
      "चमड़ी पर गर्मी का असर या छाला पड़ना (उचित मात्रा में दवा देने से यह खतरा 0.1% से भी कम है)।"
    ],
    "alternativesEn": "Traditional open surgical saphenofemoral ligation and stripping under general/spinal anesthesia, or non-interventional lifelong compression stockings.",
    "alternativesHi": "जांघ पर बड़ा चीरा लगाकर नस को उखाड़कर निकालने का पुराना ऑपरेशन (सर्जिकल स्ट्रिपिंग), अथवा जीवनभर मोजे पहनना।",
    "sedationTypeEn": "Perivenous tumescent local anesthesia under ultrasound guidance with optional mild IV sedation.",
    "sedationTypeHi": "नस के चारों ओर सुन्न करने वाले विशेष घोल का इंजेक्शन (ट्युमेसेंट लोकल एनेस्थीसिया)।"
  },
  "ssv-endovenous-laser-rfa-glue": {
    "id": "ssv-endovenous-laser-rfa-glue",
    "category": "Superficial Venous Interventions",
    "nameEn": "Small Saphenous Vein (SSV) Truncal Endovenous Ablation (EVLA / RFA / Glue)",
    "nameHi": "स्मॉल सेफेनस वेन (SSV) एंडोवेनस लेजर / रेडियोफ्रीक्वेंसी / ग्लू एब्लेशन (पिंडली के पीछे की खराब नस का उपचार)",
    "indicationEn": "Incompetence of the small saphenous vein behind the knee with reflux causing severe calf aches, bulging posterior veins, and lateral ankle ulcers.",
    "indicationHi": "घुटने के पीछे की नस (स्मॉल सेफेनस वेन) के वाल्व खराब होने से पिंडली के पीछे नसों का फूलना, दर्द, कड़ापन तथा टखने के बाहरी हिस्से में घाव होना।",
    "descriptionEn": "With the patient lying on the stomach, a specialized laser fiber or closure catheter is placed into the small saphenous vein in the lower calf and guided up to just below the knee crease. Protective numbing solution is instilled to separate the vein from the sensitive sural nerve before heat or glue closure is performed.",
    "descriptionHi": "मरीज को पेट के बल लिटाकर सोनोग्राफी द्वारा पिंडली के निचले हिस्से से एक बारीक लेजर फाइबर नस के अंदर डालकर घुटने के पीछे तक ले जाया जाता है। पास में स्थित पैर की संवेदी नस (सुरल नर्व) को बचाने के लिए नस के चारों तरफ सुन्न करने का पानी डाला जाता है और फिर लेजर अथवा ग्लू द्वारा नस को बंद कर दिया जाता है।",
    "benefitsEn": [
      "Complete relief from posterior calf heaviness, throbbing night cramps, and ankle ulceration.",
      "Replaces traumatic open surgery in the fragile popliteal crease which carries high wound infection rates.",
      "Permits immediate ambulation with swift return to daily activities."
    ],
    "benefitsHi": [
      "पिंडली के दर्द, रात में नस चढ़ने (क्रैम्प्स) और टखने के अल्सर से पूर्ण और स्थायी राहत।",
      "घुटने के पीछे चीरा लगाने वाले दर्दनाक पुराने ऑपरेशन से बचाव जिसमें घाव पकने का भारी खतरा रहता था।",
      "प्रक्रिया के तुरंत बाद अपने पैरों पर चलने और अगले दिन से काम करने की सुविधा।"
    ],
    "specificRisksEn": [
      "Sural nerve irritation causing temporary numbness or altered sensation over the lateral foot (1-3%).",
      "Clot extension into the popliteal deep vein (< 1%).",
      "Skin bruising or localized phlebitic cord along the calf (2-4%).",
      "Deep vein thrombosis (DVT) in the leg (< 0.5%)."
    ],
    "specificRisksHi": [
      "सुरल नर्व पर असर के कारण पैर के बाहरी किनारे या पंजे में हल्का सुन्नपन या झुनझुनी (1-3%)।",
      "घुटने की गहरी नस (पॉपलीटियल वेन) में खून का थक्का जमने का दुर्लभ खतरा (< 1%)।",
      "पिंडली पर हल्का नील पड़ना या नस में कड़ापन महसूस होना (2-4%)।",
      "पैर की गहरी नसों में थक्का जमना (DVT) (< 0.5%)।"
    ],
    "alternativesEn": "Surgical saphenopopliteal disconnection, foam sclerotherapy, or medical compression therapy.",
    "alternativesHi": "घुटने के पीछे चीरा लगाकर नस काटने की सर्जरी, फोम इंजेक्शन, या कम्प्रेशन मोजे।",
    "sedationTypeEn": "Ultrasound-guided perivenous tumescent local anesthesia with precise hydrodissection.",
    "sedationTypeHi": "अल्ट्रासाउंड की निगरानी में नस के चारों तरफ सुन्न करने का इंजेक्शन (ट्युमेसेंट एनेस्थीसिया)।"
  },
  "varicose-vein-embolization-glue": {
    "id": "varicose-vein-embolization-glue",
    "category": "Superficial Venous Interventions",
    "nameEn": "Varicose Vein & Pelvic Leak Embolization Using Cyanoacrylate Glue",
    "nameHi": "वैरिकोज नस एवं पेल्विक वेन रिफ्लक्स मेडिकल ग्लू एम्बोलाइजेशन (गोंद द्वारा पेल्विक नसों को बंद करना)",
    "indicationEn": "Pelvic venous insufficiency / pelvic congestion syndrome with chronic pelvic pain and recurrent atypical varicose veins in the buttocks, vulva, or thigh.",
    "indicationHi": "पेडू (पेल्विस) की अंदरूनी नसों में खून का अत्यधिक ठहराव (पेल्विक कंजेशन सिंड्रोम), पेट के निचले हिस्से में पुराना दर्द, और जांघ व नितंबों पर फूली हुई वैरिकोज नसों का होना।",
    "descriptionEn": "Via a tiny puncture in the groin or neck vein, a long microcatheter is navigated into the deep pelvic veins under X-ray guidance. Medical cyanoacrylate adhesive mixed with contrast is injected directly into the leaking varices, immediately solidifying into an elastic cast that permanently seals the leaky circuits.",
    "descriptionHi": "जांघ या गर्दन की नस से एक अत्यंत बारीक नली (माइक्रो-कैथेटर) एक्स-रे मशीन की निगरानी में पेडू की खराब नसों तक पहुंचाई जाती है। वहां विशेष मेडिकल गोंद (ग्लू) का इंजेक्शन दिया जाता है, जो नस में पहुंचकर तुरंत जम जाता है और खून के उल्टे बहाव को हमेशा के लिए रोक देता है।",
    "benefitsEn": [
      "Resolves deep seated chronic pelvic pain, heaviness, and painful intercourse (dyspareunia).",
      "Stops the feeding source of recurrent lower extremity and vulvar varicose veins without leg surgery.",
      "Quick recovery with minimal discomfort and outpatient discharge on the same day."
    ],
    "benefitsHi": [
      "पेड़ू में होने वाले पुराने भारीपन, खिंचाव और गंभीर दर्द से स्थायी छुटकारा।",
      "बिना पैर पर चीरा लगाए जांघ और पेल्विस की खराब नसों की मुख्य जड़ को हमेशा के लिए बंद करना।",
      "उसी दिन अस्पताल से छुट्टी और जल्द सामान्य जीवन में वापसी।"
    ],
    "specificRisksEn": [
      "Transient dull pelvic aching or low-grade inflammatory discomfort for 2-5 days (10-15%).",
      "Very rare migration of glue droplets into pulmonary circulation (< 1%).",
      "Catheter tip adherence to the vessel wall during glue discharge (< 0.2%).",
      "Bruising or hematoma at the vascular access site in the groin or neck (1-2%)."
    ],
    "specificRisksHi": [
      "प्रक्रिया के बाद 2 से 5 दिनों तक पेडू में हल्का दर्द या भारीपन महसूस होना (10-15%)।",
      "गोंद के सूक्ष्म कणों का फेफड़ों की नस में चले जाने का अत्यंत दुर्लभ खतरा (< 1%)।",
      "गोंद डालते समय कैथेटर नली के नस से चिपकने का अति-दुर्लभ जोखिम (< 0.2%)।",
      "जांघ या गर्दन में सुई लगने की जगह पर खून जमना (हेमेटोमा) (1-2%)।"
    ],
    "alternativesEn": "Metallic coil embolization, open surgical ovarian vein ligation, laparoscopic clipping, or hormonal suppression therapy.",
    "alternativesHi": "धातु के कॉइल (छल्ले) द्वारा नस बंद करना, दूरबीन द्वारा नसों पर क्लिप लगाना (लेप्रोस्कोपी), या हार्मोनल दवाइयां लेना।",
    "sedationTypeEn": "Local anesthesia at the vascular access site with conscious intravenous sedation.",
    "sedationTypeHi": "सुई लगाने की जगह पर सुन्नता (लोकल एनेस्थीसिया) तथा हल्की राहत देने वाली नस की दवा (सेडेशन)।"
  },
  "varicose-vein-embolization-coils": {
    "id": "varicose-vein-embolization-coils",
    "category": "Superficial Venous Interventions",
    "nameEn": "Varicose Vein & Incompetent Venous Channel Embolization Using Coils",
    "nameHi": "वैरिकोज नस एवं पेल्विक नसों का कॉइल एम्बोलाइजेशन (धातु के छल्लों द्वारा खराब नसों को बंद करना)",
    "indicationEn": "Incompetent ovarian veins and internal iliac venous branches causing chronic pelvic congestion, vulvar varices, and atypical leg varicose veins.",
    "indicationHi": "अंडाशय (ओवेरियन) अथवा पेडू की नसों के वाल्व खराब होने से नसों में खून का रुकना, पेडू का पुराना दर्द तथा जांघ व गुप्तांगों के आसपास उभरी नसें।",
    "descriptionEn": "Under fluoroscopic guidance, a catheter is inserted into the pelvic veins from the groin or neck. Specially designed miniature metallic coils made of platinum or stainless steel with thrombogenic fibers are deployed inside the leaking vein, creating a permanent mechanical clot that blocks abnormal backward flow.",
    "descriptionHi": "गर्दन या जांघ की नस से एक्स-रे की निगरानी में कैथेटर नली को पेट के अंदर अंडाशय या पेडू की खराब नस तक ले जाया जाता है। वहां विशेष रूप से निर्मित छोटे-छोटे धातु के छल्ले (कॉइल्स) छोड़े जाते हैं, जो नस के अंदर एक मजबूत जाल बनाकर खून के उल्टे बहाव को हमेशा के लिए बंद कर देते हैं।",
    "benefitsEn": [
      "Highly safe, precise, and proven method for permanently closing large refluxing pelvic veins.",
      "Instant mechanical occlusion without using heat, surgical cuts, or general anesthesia.",
      "Dramatically reduces chronic pelvic congestion symptoms and recurrence of leg varices."
    ],
    "benefitsHi": [
      "बड़ी और चौड़ी खराब नसों को सुरक्षित और सटीक तरीके से हमेशा के लिए बंद करने की प्रमाणित तकनीक।",
      "बिना किसी चीरे, टांके या बेहोशी के नस के अंदर ही अंदर पक्का इलाज।",
      "पेड़ू के दर्द और पैरों में बार-बार उभरने वाली नसों की समस्या से स्थायी मुक्ति।"
    ],
    "specificRisksEn": [
      "Mild to moderate flank, back, or pelvic aching for several days post-procedure (15-25%).",
      "Coil migration into the renal vein or lungs (< 1%, minimized by using oversized detachable coils).",
      "Venous wall injury, spasm, or small extravasation (< 1%).",
      "Groin or neck puncture site hematoma (1-2%)."
    ],
    "specificRisksHi": [
      "प्रक्रिया के बाद कुछ दिनों तक कमर, पीठ या पेडू में हल्का से मध्यम दर्द रहना (15-25%)।",
      "कॉइल का अपनी जगह से खिसककर फेफड़े या किडनी की नस में जाने का अत्यंत दुर्लभ खतरा (< 1%)।",
      "नस में हल्का खिंचाव, खरोंच या सुई की जगह से खून का रिसाव (< 1%)।",
      "गर्दन या जांघ में सुई डालने की जगह पर सूजन या नील पड़ना (1-2%)।"
    ],
    "alternativesEn": "Cyanoacrylate glue embolization, laparoscopic vein clipping, open surgical ligation, or medical pain management.",
    "alternativesHi": "गोंद (ग्लू) द्वारा एम्बोलाइजेशन, दूरबीन द्वारा नस पर क्लिप लगाना, खुला ऑपरेशन, या केवल दर्द निवारक दवाएं।",
    "sedationTypeEn": "Local anesthesia at the puncture site with mild intravenous sedation.",
    "sedationTypeHi": "लोकल एनेस्थीसिया (सुन्न करने का इंजेक्शन) तथा प्रक्रिया के दौरान आराम के लिए हल्की दवा।"
  },
  "varicose-vein-embolization-glue-coils": {
    "id": "varicose-vein-embolization-glue-coils",
    "category": "Superficial Venous Interventions",
    "nameEn": "Varicose Vein Embolization with Combined Glue & Coils (Sandwich Technique)",
    "nameHi": "जटिल वैरिकोज एवं पेल्विक नसों का संयुक्त ग्लू एवं कॉइल एम्बोलाइजेशन (सैंडविच तकनीक)",
    "indicationEn": "High-flow, wide-caliber, or complex aneurysmal pelvic varicosities and venous malformations where coils or glue alone carry risk of failure or migration.",
    "indicationHi": "पेड़ू की अत्यधिक चौड़ी, जटिल या तेज बहाव वाली वैरिकोज नसें जिनमें केवल कॉइल या केवल गोंद डालने से नस के दोबारा खुलने या दवा बहने का खतरा हो।",
    "descriptionEn": "Under fluoroscopic guidance, protective metallic coils are first deployed at the downstream end of the diseased vein to build an anchoring dam. Liquid medical glue is then injected to fill and obliterate the complex venous nests, followed by additional coils on top (Sandwich technique), guaranteeing complete and durable seal.",
    "descriptionHi": "एक्स-रे की देखरेख में कैथेटर द्वारा नस के निचले हिस्से में पहले धातु के कॉइल लगाए जाते हैं ताकि वे एक मजबूत बांध (डैम) का काम करें। इसके बाद बीच की फूली हुई नसों में मेडिकल ग्लू (गोंद) भरकर पूरी नस को जमाया जाता है और ऊपर से फिर कॉइल लगाए जाते हैं (सैंडविच तकनीक), जिससे नस पूरी तरह और पक्के तौर पर बंद हो जाती है।",
    "benefitsEn": [
      "Provides the highest rate of complete and permanent occlusion in high-flow, wide pelvic varices.",
      "Coil scaffolding completely prevents liquid glue from escaping into the lungs or heart.",
      "Prevents long-term vein recanalization under chronic venous hypertension."
    ],
    "benefitsHi": [
      "अत्यधिक चौड़ी और तेज बहाव वाली नसों में सबसे सुरक्षित और 100% पक्की नस-बंदी।",
      "कॉइल का बांध गोंद को फेफड़ों या दिल में बहकर जाने से पूरी तरह रोकता है।",
      "दबाव के कारण भविष्य में नस के दोबारा खुलने का खतरा समाप्त हो जाता है।"
    ],
    "specificRisksEn": [
      "Transient post-embolization pelvic inflammatory aching and low-grade fever (15-20%).",
      "Catheter gluing or retention during adhesive injection (< 0.5%).",
      "Non-target embolic migration (< 1%).",
      "Puncture site swelling, hematoma, or localized discomfort (1-2%)."
    ],
    "specificRisksHi": [
      "प्रक्रिया के बाद 2-4 दिन तक पेडू में दर्द या हल्का बुखार (पोस्ट-एम्बोलाइजेशन सिंड्रोम) (15-20%)।",
      "गोंद डालते समय नली का नस से चिपकने का अति-दुर्लभ खतरा (< 0.5%)।",
      "दवा या छल्ले का गलत जगह जाने का दुर्लभ खतरा (< 1%)।",
      "जांघ या गर्दन में सुई वाली जगह पर सूजन या दर्द (1-2%)।"
    ],
    "alternativesEn": "Isolated coil embolization, surgical vascular ligation, or open pelvic vascular reconstruction.",
    "alternativesHi": "केवल कॉइल लगाना, केवल गोंद डालना, या पेट खोलकर नस बांधने की बड़ी सर्जरी।",
    "sedationTypeEn": "Local anesthesia combined with monitored intravenous sedation and analgesia.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ नस द्वारा दर्द निवारक एवं आरामदायक सेडेशन।"
  },
  "budd-chiari-collateral-embo-glue": {
    "id": "budd-chiari-collateral-embo-glue",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Budd-Chiari Syndrome: Collateral & Variceal Embolization Using Cyanoacrylate Glue",
    "nameHi": "बड-कियारी सिंड्रोम: मेडिकल ग्लू द्वारा कोलेटरल एवं वैरिकोज नसों का एम्बोलाइजेशन (लीवर की बीमारी में गोंद द्वारा नसों को बंद करना)",
    "indicationEn": "Budd-Chiari syndrome with bleeding gastroesophageal or ectopic varices and abnormal portosystemic collateral veins refractory to medical therapy.",
    "indicationHi": "बड-कियारी सिंड्रोम (लीवर की नसों का जाम होना) के कारण पेट या भोजन नली में अत्यधिक फूली हुई नसों (वैरिक्स) से खून बहना तथा खतरनाक असामान्य नसों का बनना।",
    "descriptionEn": "Via a small catheter guided into the portal or systemic venous system under fluoroscopy, a microcatheter is navigated into the bleeding or hypertensive collaterals. Medical cyanoacrylate glue mixed with contrast is injected to immediately solidify and permanently obliterate the abnormal vessels.",
    "descriptionHi": "एक्स-रे की निगरानी में गर्दन या पेट के रास्ते एक बारीक कैथेटर नली लीवर और पेट की खराब नसों तक पहुंचाई जाती है। वहां विशेष मेडिकल गोंद (ग्लू) का इंजेक्शन दिया जाता है, जो खून के संपर्क में आते ही तुरंत जमकर खतरनाक नसों को हमेशा के लिए सील कर देता है जिससे खून बहना रुक जाता है।",
    "benefitsEn": [
      "Immediate, reliable cessation of life-threatening variceal gastrointestinal hemorrhage.",
      "Permanently blocks abnormal steal vessels, directing blood flow back through the liver.",
      "Avoids high-risk emergency open abdominal surgery in critically ill cirrhotic patients."
    ],
    "benefitsHi": [
      "जानलेवा खून की उल्टी या आंतरिक रक्तस्राव का तुरंत और पक्का नियंत्रण।",
      "खराब नसों को बंद कर खून के प्रवाह को दोबारा लीवर की तरफ मोड़ना।",
      "गंभीर रूप से बीमार मरीज में जानलेवा आपातकालीन पेट के ऑपरेशन से बचाव।"
    ],
    "specificRisksEn": [
      "Non-target migration of glue droplets into pulmonary arteries (< 1.5%).",
      "Catheter tip adherence within the polymerized glue matrix (< 0.5%).",
      "Transient abdominal pain, fever, and transaminase rise (post-embolization syndrome) (15-20%).",
      "Bleeding or hematoma at the vascular access site (2-3%)."
    ],
    "specificRisksHi": [
      "गोंद के सूक्ष्म कणों का फेफड़ों की नसों में चले जाने का दुर्लभ खतरा (< 1.5%)।",
      "दवा डालते समय कैथेटर नली के नस में चिपकने का अति-दुर्लभ जोखिम (< 0.5%)।",
      "प्रक्रिया के बाद 2-3 दिन तक पेट में दर्द, हल्का बुखार और लीवर एंजाइम का बढ़ना (15-20%)।",
      "सुई डालने की जगह पर खून का रिसाव या हेमेटोमा (2-3%)।"
    ],
    "alternativesEn": "Endoscopic variceal band ligation, surgical portosystemic shunt, or TIPS creation alone.",
    "alternativesHi": "दूरबीन (एंडोस्कोपी) द्वारा छल्ले चढ़ाना, पेट का बड़ा ऑपरेशन (सर्जिकल शंट), या केवल टिप्स (TIPS) लगाना।",
    "sedationTypeEn": "Local anesthesia combined with monitored intravenous sedation and analgesia (or general anesthesia if actively bleeding).",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ गहरी बेहोशी/सेडेशन अथवा आवश्यकतानुसार पूर्ण बेहोशी (General Anesthesia)।"
  },
  "budd-chiari-collateral-embo-coils": {
    "id": "budd-chiari-collateral-embo-coils",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
        "nameEn": "Budd-Chiari Syndrome: Spontaneous Shunt & Collateral Embolization Using Coils",
    "nameHi": "बड-कियारी सिंड्रोम: धातु के कॉइल द्वारा कोलेटरल एवं शंट नसों को बंद करना",
    "indicationEn": "Large spontaneous splenorenal or gastrorenal venous shunts in Budd-Chiari syndrome causing hepatic encephalopathy and portal flow steal.",
    "indicationHi": "बड-कियारी सिंड्रोम में प्लीहा (तिल्ली) और गुर्दे के बीच बनी बड़ी असामान्य नस (शंट) के कारण लीवर में खून न जाना, बेहोशी (हिपेटिक एन्सेफेलोपैथी) और खून में अमोनिया बढ़ना।",
    "descriptionEn": "Under fluoroscopy, a catheter is passed into the large abnormal shunt through a neck or groin vein. Specially sized metallic coils with thrombogenic fibers are densely packed inside the shunt to form an occlusive plug, closing the bypass and forcing blood back into the liver.",
    "descriptionHi": "गर्दन या जांघ की नस से एक्स-रे की देखरेख में एक नली उस बड़ी असामान्य नस तक पहुंचाई जाती है जो खून को लीवर से चुराकर सीधे दिल में भेज रही है। वहां विशेष धातु के छल्ले (कॉइल) डाले जाते हैं जो एक जाल बनाकर उस फालतू नस को बंद कर देते हैं, जिससे खून दोबारा लीवर में जाने लगता है और मरीज का दिमाग साफ रहता है।",
    "benefitsEn": [
      "Dramatic improvement in chronic debilitating hepatic encephalopathy and mental confusion.",
      "Restores hepatopetal portal blood flow necessary for liver regeneration and synthetic function.",
      "Minimally invasive endovascular technique without requiring open surgery."
    ],
    "benefitsHi": [
      "बार-बार होने वाली बेहोशी, भ्रांति और मानसिक संतुलन बिगड़ने की समस्या से स्थायी राहत।",
      "लीवर को आवश्यक रक्त प्रवाह वापस मिलना जिससे लीवर के काम करने की क्षमता सुधरती है।",
      "बिना किसी चीरे या टांके के नस के रास्ते से सुरक्षित उपचार।"
    ],
    "specificRisksEn": [
      "Coil migration through the wide shunt into the heart or pulmonary artery (< 1%).",
      "Acute rise in portal pressure precipitating variceal bleeding or ascites (3-5%).",
      "Left flank pain or localized splenic congestion (2-4%).",
      "Puncture site hematoma or bruising (1-2%)."
    ],
    "specificRisksHi": [
      "चौड़ी नस में से कॉइल के खिसककर दिल या फेफड़े की नस में जाने का अत्यंत दुर्लभ खतरा (< 1%)।",
      "नस बंद होने के बाद अचानक पेट में दबाव बढ़ने से उल्टी में खून आने का जोखिम (3-5%)।",
      "बाईं तरफ पेट या कमर में हल्का दर्द और तिल्ली में सूजन (2-4%)।",
      "सुई लगने के स्थान पर खून जमना या सूजन (1-2%)।"
    ],
    "alternativesEn": "Medical management with lactulose/rifaximin, balloon-occluded retrograde obliteration (BRTO), or open surgical shunt ligation.",
    "alternativesHi": "दवाइयां (लैक्टुलोज और रिफैक्सिमिन) लेते रहना, बीआरटीओ (BRTO) प्रक्रिया, या पेट खोलकर नस बांधने की सर्जरी।",
    "sedationTypeEn": "Local anesthesia with moderate intravenous sedation.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ नस द्वारा दर्द निवारक एवं आरामदायक दवा।"
  },
  "budd-chiari-collateral-embo-glue-coils": {
    "id": "budd-chiari-collateral-embo-glue-coils",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Budd-Chiari Syndrome: Complex Variceal & Shunt Embolization with Combined Glue & Coils",
    "nameHi": "बड-कियारी सिंड्रोम: जटिल नसों का संयुक्त कॉइल एवं ग्लू एम्बोलाइजेशन (सैंडविच तकनीक द्वारा सम्पूर्ण नस-बंदी)",
    "indicationEn": "Complex, wide, high-velocity portosystemic collateral shunts and variceal clusters in Budd-Chiari syndrome posing extreme risk of rebleeding or encephalopathy.",
    "indicationHi": "बड-कियारी सिंड्रोम में अत्यधिक चौड़ी, जटिल और तेज बहाव वाली नसें जिनमें केवल कॉइल या केवल गोंद डालने से नस के दोबारा खुलने या दवा बहने का भारी खतरा हो।",
    "descriptionEn": "Under live X-ray roadmapping, protective anchoring coils are deployed downstream in the shunt channel. Medical cyanoacrylate adhesive is then injected to permanently seal the complex variceal nidus, capped with proximal coils (Sandwich closure), preventing both non-target migration and late recanalization.",
    "descriptionHi": "एक्स-रे की निगरानी में कैथेटर द्वारा नस के आगे के मुहाने पर पहले धातु के कॉइल लगाए जाते हैं ताकि वे एक मजबूत दीवार बना दें। इसके बाद बीच की फूली हुई नसों में मेडिकल ग्लू (गोंद) भरकर पूरी नस को जमाया जाता है और ऊपर से फिर कॉइल लगाए जाते हैं, जिससे जटिल नसें पूरी तरह और स्थायी रूप से बंद हो जाती हैं।",
    "benefitsEn": [
      "Achieves the most robust, permanent obliteration of high-flow complex shunts in severe Budd-Chiari.",
      "Coil scaffolding eliminates the risk of liquid glue escaping into the systemic heart/lung circulation.",
      "Dramatically reduces hospital admissions for recurrent gastrointestinal bleeding and encephalopathy."
    ],
    "benefitsHi": [
      "गंभीर बड-कियारी सिंड्रोम में जटिल और बड़ी नसों का सबसे सुरक्षित और 100% पक्का बंद होना।",
      "कॉइल का सुरक्षा ढांचा गोंद को दिल या फेफड़ों में बहकर जाने से पूरी तरह रोकता है।",
      "बार-बार खून की उल्टी और बेहोशी के कारण अस्पताल में भर्ती होने से मुक्ति।"
    ],
    "specificRisksEn": [
      "Transient post-embolization syndrome (fever, RUQ pain, elevated liver enzymes) (15-25%).",
      "Microcatheter adherence in glue cast (< 0.5%).",
      "Acute elevation in portal pressure requiring temporary paracentesis (3-5%).",
      "Access site hematoma or pseudoaneurysm (1-2%)."
    ],
    "specificRisksHi": [
      "प्रक्रिया के बाद 2 से 4 दिनों तक पेट दर्द, हल्का बुखार और लीवर एंजाइम बढ़ना (15-25%)।",
      "गोंद डालते समय बारीक नली के चिपकने का अति-दुर्लभ जोखिम (< 0.5%)।",
      "अचानक पेट में दबाव बढ़ने से कुछ दिनों के लिए पानी (जलोदर) बढ़ना (3-5%)।",
      "गर्दन या जांघ में सुई की जगह पर खून का थक्का जमना (1-2%)।"
    ],
    "alternativesEn": "TIPS revision, isolated coil embolization, or surgical shunt disconnection.",
    "alternativesHi": "टिप्स (TIPS) का संशोधन, केवल कॉइल लगाना, या पेट की खुली सर्जरी।",
    "sedationTypeEn": "Local anesthesia with monitored conscious sedation or general anesthesia.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ गहरी बेहोशी/सेडेशन अथवा आवश्यकतानुसार पूर्ण बेहोशी।"
  },
  "ivc-balloon-cavoplasty-budd-chiari": {
    "id": "ivc-balloon-cavoplasty-budd-chiari",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Inferior Vena Cava (IVC) Balloon Cavoplasty for Budd-Chiari Web / Membrane",
    "nameHi": "इन्फीरियर वेना कावा (IVC) बैलून कैवोप्लास्टी (बड-कियारी सिंड्रोम में मुख्य नस के जाले को गुब्बारे से खोलना)",
    "indicationEn": "Membranous obstruction, web, or focal fibrous stricture of the inferior vena cava in Budd-Chiari syndrome causing severe leg swelling, abdominal ascites, and liver congestion.",
    "indicationHi": "बड-कियारी सिंड्रोम में शरीर की सबसे बड़ी नस (IVC) के अंदर पैदाइशी या पुरानी बीमारी का जाला (मेम्ब्रेन) या सिकुड़न होना, जिसके कारण पैरों में भारी सूजन, पेट में पानी (असाइटिस) और लीवर खराब होना।",
    "descriptionEn": "Via a small puncture in the groin, a large-diameter balloon catheter is guided across the obstructive caval membrane under X-ray visualization. The balloon is inflated to high pressure, tearing the web and fully restoring blood flow from the lower body and liver back to the heart.",
    "descriptionHi": "जांघ की नस से एक्स-रे की निगरानी में एक विशेष बड़ा गुब्बारा (बैलून कैथेटर) महाशिरा (IVC) के अंदर फंसे जाले के आर-पार ले जाया जाता है। वहां गुब्बारे को अत्यधिक दबाव से फुलाया जाता है जिससे जाला फटकर पूरी तरह खुल जाता है और पैरों व लीवर का खून बिना किसी रुकावट के सीधे दिल में जाने लगता है।",
    "benefitsEn": [
      "Instant relief of severe high venous pressure in the lower body and liver.",
      "Prompt reduction in leg edema, abdominal wall venous engorgement, and refractory ascites.",
      "Curative minimally invasive procedure that often avoids need for major liver surgery or transplantation."
    ],
    "benefitsHi": [
      "लीवर और निचले शरीर में रुके हुए अत्यधिक खून के दबाव से तुरंत राहत।",
      "पैरों की भयंकर सूजन, पेट के पानी और पेट पर उभरी नसों में तेजी से कमी।",
      "बिना किसी बड़े ऑपरेशन के केवल गुब्बारे की मदद से बीमारी का स्थायी समाधान।"
    ],
    "specificRisksEn": [
      "Vena cava wall tear or rupture (< 1%, emergency covered stent standby maintained).",
      "Dislodgement of clot causing pulmonary embolism (< 1%).",
      "Transient cardiac rhythm irregularity during heart wire placement (2-4%).",
      "Recurrence of web stenosis over long term requiring re-dilatation or stenting (10-15%)."
    ],
    "specificRisksHi": [
      "गुब्बारा फुलाते समय महाशिरा (नस) के फटने का अत्यंत दुर्लभ जोखिम (< 1%, इसके लिए तुरंत कवर स्टेंट तैयार रखा जाता है)।",
      "जाले पर जमे पुराने थक्के के फेफड़ों में जाने का दुर्लभ खतरा (< 1%)।",
      "दिल के पास तार जाने से दिल की धड़कन का कुछ पलों के लिए अनियमित होना (2-4%)।",
      "भविष्य में जाला दोबारा सिकुड़ना (10-15%), जिसे दोबारा गुब्बारा फुलाकर या स्टेंट लगाकर ठीक किया जाता है।"
    ],
    "alternativesEn": "Permanent metallic IVC stenting, open surgical membranotomy under cardiopulmonary bypass, or cavoatrial bypass surgery.",
    "alternativesHi": "नस में हमेशा के लिए धातु का बड़ा स्टेंट लगाना, दिल की मशीन पर रखकर जाला काटने की ओपन सर्जरी, या बाईपास ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous sedation and analgesia.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ दर्द निवारक एवं आरामदायक सेडेशन।"
  },
  "sharp-recanalization-occluded-hepatic-veins": {
    "id": "sharp-recanalization-occluded-hepatic-veins",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Sharp Recanalization of Completely Occluded Hepatic Veins",
    "nameHi": "लीवर की पूरी तरह बंद नसों को सुई द्वारा खोलना (शार्प रिकैनेलाइजेशन एवं स्टेंटिंग)",
    "indicationEn": "Complete chronic fibrous occlusion of hepatic vein ostia in Budd-Chiari syndrome where standard guidewires fail to pass, with severe liver congestion and refractory ascites.",
    "indicationHi": "बड-कियारी सिंड्रोम में लीवर की मुख्य नसों का मुहाना पूरी तरह बंद हो जाना जहां साधारण तार पार नहीं हो सकता, और मरीज को पेट में अत्यधिक पानी व लीवर फेलियर का खतरा हो।",
    "descriptionEn": "Using dual access from the neck and liver under biplane X-ray and ultrasound guidance, a sharp specialized needle is precisely directed across the dense fibrous occlusion to puncture back into the main vena cava. A wire is snared, the tract is dilated with balloons, and a metallic stent is deployed to re-establish natural liver outflow.",
    "descriptionHi": "गर्दन और पेट दोनों तरफ से सोनोग्राफी और एक्स-रे की निगरानी में बारीक सुई द्वारा बंद पड़ी नस की कठोर रुकावट में सीधा छेद किया जाता है। इसके बाद उस रास्ते से तार निकालकर गुब्बारे से रास्ता चौड़ा किया जाता है और वहां एक पक्की धातु की जाली (स्टेंट) बिठा दी जाती है जिससे लीवर का रुका हुआ खून दोबारा बहने लगता है।",
    "benefitsEn": [
      "Re-establishes natural physiologic hepatic venous drainage, preserving long-term liver function.",
      "Avoids or delays the need for non-physiologic TIPS creation or orthotopic liver transplantation.",
      "Resolves refractory ascites and reverses congestive hepatopathy."
    ],
    "benefitsHi": [
      "लीवर के प्राकृतिक खून के बहाव को दोबारा शुरू करना जिससे लीवर लंबे समय तक स्वस्थ रहता है।",
      "टिप्स (TIPS) जैसे जटिल बाईपास या लीवर ट्रांसप्लांट की जरूरत से बचाव।",
      "पेट में बार-बार भरने वाले पानी (जलोदर) से स्थायी मुक्ति।"
    ],
    "specificRisksEn": [
      "Liver capsule perforation and intra-abdominal hemorrhage (2-4%).",
      "Misdirected puncture into adjacent vessels or bile ducts requiring immediate covered stenting (< 2%).",
      "Acute in-stent thrombosis requiring anticoagulation or catheter thrombolysis (2-3%).",
      "Bile leak or biloma formation (< 1%)."
    ],
    "specificRisksHi": [
      "लीवर की बाहरी झिल्ली में छेद होने से पेट के अंदर खून का रिसाव (2-4%)।",
      "सुई गलत दिशा में जाने से पास की पित्त नली या धमनी में चोट का जोखिम (< 2%)।",
      "स्टेंट में खून का नया थक्का जमना (2-3%) जिसके लिए खून पतला करने की दवा दी जाती है।",
      "पित्त का रिसाव या लीवर में मवाद/पानी जमा होना (< 1%)।"
    ],
    "alternativesEn": "Transjugular Intrahepatic Portosystemic Shunt (TIPS), Direct Intrahepatic Portosystemic Shunt (DIPS), surgical mesoatrial shunt, or liver transplantation.",
    "alternativesHi": "टिप्स (TIPS) अथवा डिप्स (DIPS) बाईपास बनवाना, बड़ा सर्जिकल शंट ऑपरेशन, अथवा लीवर प्रत्यारोपण (ट्रांसप्लांट)।",
    "sedationTypeEn": "Monitored conscious sedation with local anesthesia or general anesthesia.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ गहरी बेहोशी (सेडेशन) अथवा पूर्ण बेहोशी (General Anesthesia)।"
  },
  "transumbilical-vein-recanalization-variceal-embo": {
    "id": "transumbilical-vein-recanalization-variceal-embo",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Transumbilical Vein Recanalization & Variceal Embolization",
    "nameHi": "नाभि की नस (अम्बिलिकल वेन) को खोलकर खतरनाक नसों का एम्बोलाइजेशन",
    "indicationEn": "Bleeding gastric, peristomal, or abdominal wall varices in severe portal hypertension where liver transhepatic or transjugular access routes are blocked or dangerous.",
    "indicationHi": "पोर्टल हाइपरटेंशन के मरीजों में नाभि, पेट की दीवार या भोजन नली की फूली हुई नसों से भयंकर खून बहना, जब लीवर के रास्ते से इलाज करना संभव या सुरक्षित न हो।",
    "descriptionEn": "Under ultrasound guidance, the remnants of the umbilical vein located above the navel are accessed with a needle and dilated with a catheter into the left portal vein. The catheter is then steered directly to the bleeding variceal nests and sealed shut using coils and medical glue.",
    "descriptionHi": "नाभि के ठीक ऊपर स्थित पुरानी बंद नस (अम्बिलिकल वेन) को सोनोग्राफी से देखकर उसमें सुई डाली जाती है और उसे कैथेटर द्वारा खोलकर लीवर की मुख्य नस तक पहुंचाया जाता है। वहां से खून बहने वाली खतरनाक नसों तक पहुंचकर उन्हें कॉइल और मेडिकल गोंद द्वारा हमेशा के लिए बंद कर दिया जाता है।",
    "benefitsEn": [
      "Provides an alternative, life-saving route to control deadly variceal hemorrhage when standard approaches fail.",
      "Direct antegrade access delivers embolics straight into the core of bleeding varices.",
      "Avoids direct liver parenchymal puncture in patients with severe ascites and coagulopathy."
    ],
    "benefitsHi": [
      "जब बाकी सारे रास्ते बंद हों, तब नाभि के रास्ते से जानलेवा रक्तस्राव को रोकने का जीवनरक्षक विकल्प।",
      "खून बहने वाली नसों तक सीधे पहुंचकर उन्हें पक्के तौर पर बंद करने की अचूक क्षमता।",
      "पेट में अत्यधिक पानी भरे होने पर भी बिना लीवर को छेड़े सुरक्षित उपचार।"
    ],
    "specificRisksEn": [
      "Intraperitoneal bleeding along the recanalized umbilical cord track (2-4%).",
      "Acute portal vein thrombosis (< 1%).",
      "Infection or hematoma at the umbilical entry site (2-3%).",
      "Non-target embolic migration into normal portal vein branches (< 1%)."
    ],
    "specificRisksHi": [
      "नाभि के रास्ते से पेट के अंदर खून का रिसाव (2-4%)।",
      "लीवर की मुख्य नस में खून का थक्का जमना (< 1%)।",
      "नाभि के पास संक्रमण (इन्फेक्शन) या खून की गांठ बनना (2-3%)।",
      "दवा या छल्ले का लीवर की सामान्य नसों में चले जाना (< 1%)।"
    ],
    "alternativesEn": "Transjugular variceal embolization, surgical shunt, or high-dose endoscopic glue injection.",
    "alternativesHi": "गर्दन के रास्ते नस बंद करना, पेट का बड़ा ऑपरेशन, अथवा एंडोस्कोपी द्वारा गोंद का इंजेक्शन।",
    "sedationTypeEn": "Local infiltration anesthesia at the periumbilical site combined with intravenous sedation.",
    "sedationTypeHi": "नाभि के आसपास सुन्न करने का इंजेक्शन और नस द्वारा दर्द निवारक सेडेशन।"
  },
  "parallel-tips-refractory-ascites": {
    "id": "parallel-tips-refractory-ascites",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Parallel TIPS Placement for Refractory Ascites & Secondary Shunt Insufficiency",
    "nameHi": "पैरेलल टिप्स (Parallel TIPS) - पेट के पानी के लिए दूसरा समानांतर बाईपास स्टेंट लगाना",
    "indicationEn": "Persistent severe refractory tense ascites or hepatic hydrothorax failing to improve despite a fully open single TIPS stent with residual elevated portal gradient.",
    "indicationHi": "पहले से एक टिप्स (TIPS) स्टेंट लगा होने के बावजूद पेट में भारी पानी (असाइटिस) या फेफड़े में पानी का बार-बार भरना और नस का दबाव कम न होना।",
    "descriptionEn": "Through the neck vein under fluoroscopic guidance, a second, parallel portosystemic shunt is created through a different section of the liver parenchyma. A second covered stent-graft is deployed alongside the first, doubling the decompression capacity to fully normalize portal pressures.",
    "descriptionHi": "गर्दन की नस से एक्स-रे की निगरानी में लीवर के दूसरे हिस्से से होकर एक और समानांतर बाईपास नली (दूसरा टिप्स स्टेंट) डाली जाती है। यह पहले लगे स्टेंट के साथ मिलकर खून के दबाव को पूरी तरह सामान्य कर देती है जिससे पेट में पानी बनना हमेशा के लिए रुक जाता है।",
    "benefitsEn": [
      "Effectively controls refractory ascites when a single maximal shunt fails to relieve high portal pressure.",
      "Eliminates the need for frequent painful abdominal paracentesis (fluid tapping).",
      "Improves nutritional status, mobility, and quality of life in advanced liver cirrhosis."
    ],
    "benefitsHi": [
      "अत्यधिक जिद्दी पेट के पानी पर पूर्ण नियंत्रण जब एक स्टेंट से दबाव कम न हो रहा हो।",
      "बार-बार पेट में सुई लगाकर पानी निकालने (टैपिंग) के दर्द और कमजोरी से स्थायी छुटकारा।",
      "मरीज के पोषण, चलने-फिरने की क्षमता और जीवन की गुणवत्ता में भारी सुधार।"
    ],
    "specificRisksEn": [
      "Severe hepatic encephalopathy (confusion, lethargy, coma) due to double portosystemic shunting (20-30%).",
      "Acute deterioration in liver synthetic function / ischemic hepatitis (3-5%).",
      "Volume overload and congestive heart failure from sudden blood return to the heart (2-4%).",
      "Intra-abdominal hemorrhage during liver parenchymal puncture (2-3%)."
    ],
    "specificRisksHi": [
      "दोहरे बाईपास के कारण खून में अमोनिया बढ़ने से अत्यधिक मानसिक भ्रम, सुस्ती या बेहोशी (एन्सेफेलोपैथी) का उच्च जोखिम (20-30%)।",
      "लीवर के काम करने की क्षमता में अचानक गिरावट (3-5%)।",
      "दिल पर अचानक खून का दबाव बढ़ने से दिल की कमजोरी या सांस फूलना (2-4%)।",
      "लीवर में छेद करते समय पेट के अंदर खून का रिसाव (2-3%)।"
    ],
    "alternativesEn": "TIPS dilation of the primary stent to 10 mm, automated low-flow ascites pump (Alfapump), permanent tunneled peritoneal catheter, or liver transplantation.",
    "alternativesHi": "मौजूदा स्टेंट को और चौड़ा करना, पेट में परमानेंट ड्रेनेज नली डालना, अथवा लीवर ट्रांसप्लांट।",
    "sedationTypeEn": "Monitored conscious sedation with local anesthesia or general anesthesia.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ गहरी बेहोशी (सेडेशन) अथवा पूर्ण बेहोशी (General Anesthesia)।"
  },
  "tips-reduction-hourglass-stent": {
    "id": "tips-reduction-hourglass-stent",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "TIPS Constraint / Reduction for Refractory Encephalopathy (Hourglass Stent)",
    "nameHi": "टिप्स रिडक्शन (TIPS Reduction) - डमरू के आकार के स्टेंट से बाईपास को छोटा करना (बेहोशी ठीक करने के लिए)",
    "indicationEn": "Severe, medically intractable hepatic encephalopathy (coma or confusion) or liver failure following TIPS creation due to excessive shunting.",
    "indicationHi": "टिप्स (TIPS) लगने के बाद अत्यधिक खून का बाईपास होने से मरीज का बार-बार गंभीर बेहोशी में जाना, मानसिक संतुलन खोना या लीवर फेल होना जो दवाइयों से ठीक न हो रहा हो।",
    "descriptionEn": "Via the neck vein, a specialized narrowing stent (pre-tied with a surgical suture into an hourglass waist) or reducing covered graft is positioned inside the over-functioning TIPS stent. This narrows the shunt lumen, restricting excess flow and forcing more detoxifying blood back through the liver.",
    "descriptionHi": "गर्दन की नस से एक विशेष संकरा करने वाला स्टेंट (जो बीच में से धागे से बंधा होने के कारण डमरू जैसा दिखता है) पहले से लगे बड़े टिप्स स्टेंट के अंदर बिठाया जाता है। यह स्टेंट बाईपास के रास्ते को संकरा कर देता है, जिससे फालतू खून का बहाव रुककर दोबारा लीवर से होकर छनने लगता है और मरीज की बेहोशी ठीक हो जाती है।",
    "benefitsEn": [
      "Prompt reversal of severe, debilitating post-TIPS hepatic encephalopathy and coma.",
      "Restores vital portal perfusion to the liver, preventing progressive liver failure.",
      "Preserves a calibrated amount of shunt function to avoid sudden catastrophic variceal rebleeding."
    ],
    "benefitsHi": [
      "टिप्स के बाद होने वाली गंभीर बेहोशी, भ्रांति और कोमा से तुरंत और स्थायी राहत।",
      "लीवर को आवश्यक खून दोबारा मिलना जिससे लीवर फेल होने से बच जाता है।",
      "बाईपास को पूरी तरह बंद किए बिना एक संतुलित रास्ते को खुला रखना ताकि दोबारा खून की उल्टी न हो।"
    ],
    "specificRisksEn": [
      "Acute recurrence of variceal bleeding or ascites due to increased portal pressure (5-10%).",
      "Complete thrombosis and sudden closure of the narrowed TIPS shunt (3-5%).",
      "Migration or displacement of the reducing stent-graft (< 1%).",
      "Transient worsening of liver enzymes (3-5%)."
    ],
    "specificRisksHi": [
      "नस संकरी होने पर पेट में दोबारा दबाव बढ़ने से खून की उल्टी या पेट में पानी लौटना (5-10%)।",
      "संकरा किए गए रास्ते में खून का थक्का जमने से स्टेंट का पूरी तरह बंद हो जाना (3-5%)।",
      "छोटा करने वाले स्टेंट का अपनी जगह से खिसकना (< 1%)।",
      "लीवर एंजाइम का कुछ दिनों के लिए बढ़ना (3-5%)।"
    ],
    "alternativesEn": "Total occlusion of TIPS with coils/vascular plugs, intensive medical therapy in ICU, or emergency liver transplantation.",
    "alternativesHi": "टिप्स को पूरी तरह हमेशा के लिए बंद कर देना, आईसीयू में रहकर अत्यधिक दवाइयां लेना, या लीवर ट्रांसप्लांट।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous sedation (or general anesthesia).",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ सेडेशन अथवा पूर्ण बेहोशी।"
  },
  "hvpg-measurement": {
    "id": "hvpg-measurement",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Hepatic Venous Pressure Gradient (HVPG) Measurement",
    "nameHi": "हिपेटिक वेनस प्रेशर ग्रेडिएंट (HVPG) - लीवर की नसों का सटीक दबाव नापना",
    "indicationEn": "Accurate diagnostic measurement of portal hypertension severity in liver cirrhosis, assessing variceal bleeding risk, and monitoring response to pressure-lowering medications.",
    "indicationHi": "लीवर सिरोसिस में नसों के अंदरूनी दबाव (पोर्टल प्रेशर) की सटीक जांच, खून की उल्टी के खतरे का आकलन, तथा खून का दबाव कम करने वाली दवाइयों के असर की पुष्टि करना।",
    "descriptionEn": "Under local anesthesia, a soft balloon-tipped catheter is introduced through a tiny needle mark in the neck vein into the liver veins. The balloon is temporarily inflated to record the wedged sinusoidal pressure, and deflated to measure free pressure. The exact difference gives the true pressure inside the liver.",
    "descriptionHi": "गर्दन की नस में सुन्न करने का इंजेक्शन लगाकर एक अत्यंत मुलायम गुब्बारे वाली बारीक नली लीवर की नस तक पहुंचाई जाती है। वहां कुछ सेकंड के लिए गुब्बारा फुलाकर लीवर के अंदरूनी दबाव को मशीन पर नापा जाता है और फिर गुब्बारा पिचकाकर सामान्य दबाव नापा जाता है। दोनों का अंतर लीवर का सही दबाव बताता है।",
    "benefitsEn": [
      "The international gold standard test for measuring portal hypertension with absolute precision.",
      "Accurately predicts whether a patient is at high risk of sudden lethal variceal bleeding.",
      "Guides the exact dosage of blood pressure medications to guarantee protective effect."
    ],
    "benefitsHi": [
      "लीवर के नसों के दबाव को नापने की दुनिया की सबसे सटीक और प्रमाणित अंतरराष्ट्रीय जांच।",
      "यह पक्का पता लगना कि मरीज को भविष्य में खून की उल्टी होने का कितना खतरा है।",
      "दवाइयों की सही खुराक तय करना ताकि मरीज को खून बहने से हमेशा सुरक्षित रखा जा सके।"
    ],
    "specificRisksEn": [
      "Transient skipped heartbeats or arrhythmia during catheter passage through the heart (2-3%, resolves immediately).",
      "Small balloon rupture during inflation (< 0.5%).",
      "Minor neck bruising or tenderness at the needle puncture site (1-2%).",
      "Contrast allergy or temporary vasovagal faintness (< 1%)."
    ],
    "specificRisksHi": [
      "नली दिल के पास से गुजरते समय कुछ पलों के लिए दिल की धड़कन का ऊपर-नीचे होना (2-3%, जो तुरंत ठीक हो जाता है)।",
      "जांच के दौरान छोटे गुब्बारे का पंक्चर होना (< 0.5%)।",
      "गर्दन पर सुई वाली जगह पर हल्का दर्द या नील पड़ना (1-2%)।",
      "दवा से मामूली एलर्जी या घबराहट होना (< 1%)।"
    ],
    "alternativesEn": "Non-invasive surrogate markers (FibroScan stiffness, platelet/spleen ratio), upper GI endoscopy for varices, or direct surgical transhepatic portal puncture.",
    "alternativesHi": "फाइब्रोस्कैन (FibroScan), एंडोस्कोपी द्वारा नसों को देखना, अथवा पेट में सुई लगाकर सीधे नापना।",
    "sedationTypeEn": "Local infiltration anesthesia at the neck puncture site; patient remains fully awake and comfortable.",
    "sedationTypeHi": "केवल गर्दन में सुई लगाने की जगह पर सुन्न करने का इंजेक्शन (लोकल एनेस्थीसिया)।"
  },
  "mesenteric-splenoportal-shunt-embolization-he": {
    "id": "mesenteric-splenoportal-shunt-embolization-he",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Mesenteric / Splenoportal Shunt Embolization for Hepatic Encephalopathy",
    "nameHi": "मेसेंट्रिक / स्प्लेनोपोर्टल शंट एम्बोलाइजेशन (बेहोशी पैदा करने वाली असामान्य नस को बंद करना)",
    "indicationEn": "Large spontaneous shunts connecting mesenteric or splenic veins directly to the systemic circulation causing recurrent hepatic encephalopathy and mental confusion.",
    "indicationHi": "आंतों या तिल्ली की नस से शरीर की मुख्य नस में बने बड़े असामान्य रास्ते (शंट) के कारण खून बिना साफ हुए दिमाग में जाना और मरीज का बार-बार मानसिक संतुलन खोना या बेहोश होना।",
    "descriptionEn": "Under fluoroscopic guidance, a catheter is navigated from the groin or neck into the spontaneous bypass shunt. A specialized nitinol mesh plug (Amplatzer Vascular Plug) or coils are deployed to permanently block the abnormal bypass, redirecting blood back through the liver for natural detoxification.",
    "descriptionHi": "एक्स-रे की निगरानी में जांघ या गर्दन की नस से कैथेटर नली को उस असामान्य शंट नस में ले जाया जाता है। वहां एक विशेष धातु की जालीदार डाट (एम्प्लैत्जर वैस्कुलर प्लग) या छल्ले छोड़े जाते हैं, जो उस गलत रास्ते को हमेशा के लिए बंद कर देते हैं। इससे गंदा खून दोबारा लीवर से होकर छनने लगता है और मरीज की मानसिक स्थिति सामान्य हो जाती है।",
    "benefitsEn": [
      "Dramatically cures recurrent hyperammonemic confusion, memory loss, and hepatic coma.",
      "Significantly improves muscle mass, appetite, and general nutritional status.",
      "Avoids open surgical shunt dissection in frail cirrhotic patients."
    ],
    "benefitsHi": [
      "बार-बार होने वाली बेहोशी, याददाश्त जाना और मानसिक भ्रम से स्थायी और जादुई मुक्ति।",
      "मरीज की भूख, मांसपेशियों की ताकत और संपूर्ण स्वास्थ्य में भारी सुधार।",
      "कमजोर सिरोसिस मरीज में पेट के बड़े और खतरनाक ऑपरेशन से पूरी सुरक्षा।"
    ],
    "specificRisksEn": [
      "Acute increase in portal venous pressure with potential trigger of variceal bleeding (5-8%).",
      "Device migration into the inferior vena cava or right atrium (< 1%).",
      "Transient bowel congestion or lower abdominal discomfort (2-4%).",
      "Groin puncture site hematoma (1-2%)."
    ],
    "specificRisksHi": [
      "असामान्य नस बंद होने से पेट में दबाव बढ़ने के कारण खून की उल्टी का हल्का जोखिम (5-8%)।",
      "प्लग का अपनी जगह से खिसककर दिल की नस में जाने का अत्यंत दुर्लभ खतरा (< 1%)।",
      "आंतों में कुछ दिनों के लिए खून का दबाव बढ़ने से हल्का पेट दर्द (2-4%)।",
      "जांघ में सुई लगने की जगह पर सूजन या नील पड़ना (1-2%)।"
    ],
    "alternativesEn": "Medical management with rifaximin/lactulose, surgical shunt ligation, or liver transplantation.",
    "alternativesHi": "जीवनभर दवाइयां (लैक्टुलोज) लेते रहना, पेट खोलकर नस बांधना, या लीवर ट्रांसप्लांट।",
    "sedationTypeEn": "Local anesthesia combined with monitored conscious intravenous sedation.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ नस द्वारा दर्द निवारक एवं आरामदायक सेडेशन।"
  },
  "portal-vein-embolization-pve-ipsilateral": {
    "id": "portal-vein-embolization-pve-ipsilateral",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Portal Vein Embolization (PVE) - Ipsilateral Approach",
    "nameHi": "पोर्टल वेन एम्बोलाइजेशन (PVE) - लीवर सर्जरी से पहले बचे हुए लीवर को बड़ा करने की प्रक्रिया",
    "indicationEn": "Preoperative induction of future liver remnant (FLR) hypertrophy prior to major right hepatectomy for liver cancer, preventing post-hepatectomy liver failure.",
    "indicationHi": "लीवर कैंसर के ऑपरेशन (लीवर का बड़ा हिस्सा निकालने) से पहले, बचे हुए स्वस्थ लीवर के आकार और ताकत को बढ़ाने के लिए की जाने वाली विशेष तैयारी ताकि ऑपरेशन के बाद लीवर फेल न हो।",
    "descriptionEn": "Under ultrasound and X-ray guidance, a small catheter is introduced into the portal veins of the diseased liver side scheduled for surgical removal. Microscopic particles, coils, and medical glue are injected to shut down portal blood to the diseased side, redirecting all nourishing blood to the healthy side so it rapidly grows in size over 3-4 weeks.",
    "descriptionHi": "सोनोग्राफी और एक्स-रे की मदद से पेट के रास्ते उस खराब लीवर की नस में बारीक नली डाली जाती है जिसे ऑपरेशन में काटा जाना है। वहां विशेष बारीक कण और कॉइल डालकर उस हिस्से का खून बंद कर दिया जाता है। सारा पौष्टिक खून बचे हुए स्वस्थ लीवर की तरफ मुड़ जाता है, जिससे वह 3 से 4 हफ्तों में तेजी से बढ़कर बड़ा और मजबूत हो जाता है।",
    "benefitsEn": [
      "Enlarges the future healthy liver remnant by 40% to 70% before surgery.",
      "Makes previously inoperable liver tumors safely resectable with curative intent.",
      "Drastically reduces the risk of fatal post-operative liver failure (PHLF)."
    ],
    "benefitsHi": [
      "ऑपरेशन से पहले बचे हुए स्वस्थ हिस्से के आकार को 40% से 70% तक बढ़ाना।",
      "असाध्य माने जाने वाले बड़े ट्यूमर को भी सुरक्षित ऑपरेशन के योग्य बनाना।",
      "ऑपरेशन के बाद होने वाले जानलेवा लीवर फेलियर के खतरे को लगभग खत्म करना।"
    ],
    "specificRisksEn": [
      "Non-target embolic spillover into the future healthy liver remnant (1-2%).",
      "Transient post-embolization fever, mild abdominal pain, and elevated transaminases (20-30%).",
      "Bleeding or hematoma along the liver puncture track (1-2%).",
      "Failure of the remnant liver to grow adequately due to underlying liver disease (5-8%)."
    ],
    "specificRisksHi": [
      "दवा के कणों का गलती से स्वस्थ लीवर के हिस्से में चले जाना (1-2%)।",
      "प्रक्रिया के बाद 2-3 दिन तक हल्का बुखार, पेट दर्द और लीवर एंजाइम बढ़ना (20-30%)।",
      "लीवर में सुई के रास्ते से पेट के अंदर खून का रिसाव (1-2%)।",
      "सिरोसिस या अत्यधिक कमजोरी के कारण स्वस्थ हिस्से का पर्याप्त रूप से न बढ़ पाना (5-8%)।"
    ],
    "alternativesEn": "ALPPS surgical procedure (two-stage open operation), hepatic arterial chemoembolization (TACE), or systemic chemotherapy alone.",
    "alternativesHi": "दो चरणों वाला बड़ा ऑपरेशन (ALPPS), कीमोथेरेपी (TACE), या केवल दवाइयों द्वारा उपचार।",
    "sedationTypeEn": "Local infiltration anesthesia combined with intravenous conscious sedation.",
    "sedationTypeHi": "सुन्न करने का इंजेक्शन तथा नस द्वारा दर्द निवारक एवं आरामदायक दवा।"
  },
  "portal-vein-embolization-pve-contralateral": {
    "id": "portal-vein-embolization-pve-contralateral",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Portal Vein Embolization (PVE) - Contralateral Approach",
    "nameHi": "पोर्टल वेन एम्बोलाइजेशन (कॉन्ट्रालेटरल एप्रोच) - स्वस्थ हिस्से के रास्ते खराब हिस्से की नस बंद करना",
    "indicationEn": "Preoperative portal vein embolization when the diseased lobe is completely occupied by tumor, preventing safe direct tumor-side needle access.",
    "indicationHi": "जब खराब लीवर का हिस्सा पूरी तरह ट्यूमर से भरा हो और वहां सुई लगाना खतरनाक हो, तब स्वस्थ हिस्से के रास्ते से खराब हिस्से की नस को बंद करके स्वस्थ लीवर को बड़ा करना।",
    "descriptionEn": "Under ultrasound guidance, a fine needle punctures a peripheral portal vein branch in the healthy liver lobe. A catheter is steered across the main portal bifurcation into the diseased lobe's vessels, delivering embolic particles and plugs before sealing the entry track.",
    "descriptionHi": "सोनोग्राफी की निगरानी में एक बारीक सुई स्वस्थ लीवर के रास्ते से डालकर कैथेटर को अंदर ही अंदर मोड़कर खराब हिस्से की नसों तक पहुंचाया जाता है। वहां बारीक कण और कॉइल डालकर उस हिस्से का खून बंद कर दिया जाता है ताकि सारा पौष्टिक खून बचे हुए हिस्से को मिले और वह बड़ा हो सके।",
    "benefitsEn": [
      "Enables safe liver growth stimulation even when the tumor-bearing lobe cannot be safely punctured.",
      "Avoids tumor seeding or needle perforation of friable, vascular cancerous tissue.",
      "Reliably stimulates hypertrophy of the remaining liver segments prior to major surgery."
    ],
    "benefitsHi": [
      "ट्यूमर में सुई चुभाए बिना अत्यंत सुरक्षित तरीके से बचे हुए लीवर को बढ़ाने की सुविधा।",
      "कैंसर के फैलने या ट्यूमर से खून बहने के जोखिम से पूर्ण बचाव।",
      "ऑपरेशन से पहले स्वस्थ लीवर को मजबूत और बड़ा बनाने का प्रमाणित तरीका।"
    ],
    "specificRisksEn": [
      "Accidental injury, spasm, or dissection of the remaining healthy portal vein (< 1%).",
      "Subcapsular hematoma or localized bile leak in the remnant liver (< 1.5%).",
      "Post-PVE inflammatory fever and right upper quadrant discomfort (20-35%).",
      "Inadequate remnant growth requiring cancellation of planned surgery (5-8%)."
    ],
    "specificRisksHi": [
      "स्वस्थ हिस्से की नस में सुई से खरोंच या सिकुड़न आने का दुर्लभ जोखिम (< 1%)।",
      "स्वस्थ लीवर की झिल्ली के नीचे हल्का खून या पित्त जमा होना (< 1.5%)।",
      "प्रक्रिया के बाद हल्का बुखार और पेट के ऊपरी हिस्से में भारीपन (20-35%)।",
      "स्वस्थ लीवर का पर्याप्त न बढ़ पाना जिससे सर्जरी रद्द करनी पड़े (5-8%)।"
    ],
    "alternativesEn": "Ipsilateral PVE (if feasible), ALPPS two-stage surgery, or systemic immunotherapy/chemotherapy.",
    "alternativesHi": "खराब हिस्से के रास्ते कोशिश करना, दो चरणों का ऑपरेशन (ALPPS), या केवल कीमोथेरेपी।",
    "sedationTypeEn": "Local infiltration anesthesia combined with intravenous conscious sedation.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ नस द्वारा दर्द निवारक एवं आरामदायक दवा।"
  },
  "transileocolic-portal-vein-embolization": {
    "id": "transileocolic-portal-vein-embolization",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Transileocolic Surgical-Radiological Portal Vein Embolization",
    "nameHi": "ट्रांस-इलीओकोलिक पोर्टल वेन एम्बोलाइजेशन (छोटे पेट के चीरे द्वारा नस बंद करने की संयुक्त प्रक्रिया)",
    "indicationEn": "Preoperative portal vein embolization during planned staging laparotomy or when percutaneous liver puncture is contraindicated by massive ascites or severe obesity.",
    "indicationHi": "जब पेट में अत्यधिक पानी भरा होने, अत्यधिक मोटापे या ट्यूमर के कारण त्वचा के रास्ते लीवर में सुई लगाना संभव न हो, तब पेट के छोटे चीरे से आंत की नस के रास्ते लीवर की नस बंद करना।",
    "descriptionEn": "In an operating room setting, the surgeon performs a mini-incision in the lower abdomen to isolate an ileocolic vein tributary. The interventional radiologist introduces a catheter through this vein directly into the portal system to embolize the target liver lobe before the incision is closed.",
    "descriptionHi": "ऑपरेशन थिएटर में सर्जन द्वारा पेट के निचले हिस्से में एक छोटा चीरा लगाकर आंत की एक नस निकाली जाती है। रेडियोलॉजिस्ट उस नस के जरिए कैथेटर को लीवर की मुख्य नस में पहुंचाकर खराब हिस्से का खून बंद कर देते हैं, जिससे बिना लीवर को सीधे छेड़े सुरक्षित तरीके से स्वस्थ हिस्सा बड़ा होने लगता है।",
    "benefitsEn": [
      "Allows successful portal embolization when standard percutaneous skin-to-liver access is completely impossible.",
      "Can be seamlessly combined with surgical laparoscopy and tumor staging in a single session.",
      "Completely eliminates the risk of hepatic parenchymal laceration or transhepatic bleeding."
    ],
    "benefitsHi": [
      "जब चमड़ी के रास्ते लीवर में जाना नामुमकिन हो, तब भी लीवर को बड़ा करने की सफल तकनीक।",
      "कैंसर की दूरबीन जांच (लेप्रोस्कोपी) के साथ एक ही बार में दोनों काम पूरे होना।",
      "लीवर फटने या लीवर से खून बहने के खतरे से पूरी तरह सुरक्षा।"
    ],
    "specificRisksEn": [
      "Mesenteric vein thrombosis or localized bowel congestion (< 1%).",
      "Wound infection, hematoma, or delayed healing at the mini-laparotomy site (2-4%).",
      "Non-target embolic migration (< 1%).",
      "Post-embolization fever and temporary transaminase rise (20-25%)."
    ],
    "specificRisksHi": [
      "आंतों की नस में खून का थक्का जमने का दुर्लभ जोखिम (< 1%)।",
      "चीरे वाली जगह पर संक्रमण (इन्फेक्शन), खून जमना या घाव पकना (2-4%)।",
      "दवा का गलत जगह चले जाना (< 1%)।",
      "प्रक्रिया के बाद 2-3 दिन तक हल्का बुखार और थकान (20-25%)।"
    ],
    "alternativesEn": "Percutaneous transhepatic PVE, ALPPS surgery, or non-surgical palliative systemic therapies.",
    "alternativesHi": "चमड़ी के रास्ते सुई से प्रयास, खुला दो-चरणीय ऑपरेशन, या दवाइयां।",
    "sedationTypeEn": "General anesthesia with endotracheal intubation.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) - सांस की नली डालकर पूर्ण सुरक्षित बेहोशी।"
  },
  "transsplenic-portal-mesenteric-stenting": {
    "id": "transsplenic-portal-mesenteric-stenting",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Transsplenic Portal and Mesenteric Vein Angioplasty and Stenting",
    "nameHi": "ट्रांस-स्प्लेनिक पोर्टल एवं मेसेंट्रिक वेन स्टेंटिंग (तिल्ली के रास्ते लीवर व आंतों की बंद नस को स्टेंट से खोलना)",
    "indicationEn": "Severe portal vein and superior mesenteric vein stenosis or total occlusion causing life-threatening variceal bleeding and intestinal ischemia, where transhepatic access is impossible.",
    "indicationHi": "लीवर और आंतों की मुख्य नसों में रुकावट या सिकुड़न के कारण जानलेवा खून की उल्टी, आंतों में खून की कमी (इस्केमिया) और पेट में तेज दर्द होना, जब लीवर के रास्ते से जाना संभव न हो।",
    "descriptionEn": "Under ultrasound and X-ray guidance, a fine needle punctures the splenic vein through the left side of the abdomen. A catheter is advanced across the blocked mesenteric and portal veins, the narrowing is dilated with high-pressure balloons, and a permanent metallic self-expanding stent is deployed to restore wide-open blood flow.",
    "descriptionHi": "सोनोग्राफी की निगरानी में बाईं पसली के नीचे से तिल्ली (स्प्लीन) की नस में एक बारीक सुई डाली जाती है। वहां से कैथेटर को आंतों और लीवर की बंद नस के आर-पार ले जाकर गुब्बारे से फैलाया जाता है और एक मजबूत धातु की जालीदार नली (स्टेंट) बिठा दी जाती है। इससे आंतों और पेट का खून बिना रुकावट दोबारा तेजी से बहने लगता है।",
    "benefitsEn": [
      "Restores vital blood circulation to the intestines, preventing catastrophic bowel gangrene.",
      "Instantly decompresses hypertensive varices, preventing fatal gastrointestinal hemorrhage.",
      "Overcomes anatomical obstructions unreachable through conventional transhepatic liver routes."
    ],
    "benefitsHi": [
      "आंतों में खून का बहाव तुरंत दोबारा चालू करना जिससे आंतों के सड़ने (गैंग्रीन) से बचाव होता है।",
      "खून की उल्टी कराने वाली नसों का दबाव तुरंत घटाकर जानलेवा रक्तस्राव को रोकना।",
      "उन जटिल और बंद नसों को भी खोलना जो सामान्य रास्तों से नहीं खोली जा सकतीं।"
    ],
    "specificRisksEn": [
      "Splenic capsule tear or delayed intra-abdominal bleeding requiring urgent embolization or surgery (2-4%).",
      "Subcapsular splenic hematoma causing left flank and shoulder-tip pain (5-8%).",
      "Acute stent thrombosis requiring urgent catheter-directed thrombolysis (< 2%).",
      "Left-sided pleuritic chest pain or reactive pleural effusion (10-15%)."
    ],
    "specificRisksHi": [
      "तिल्ली की बाहरी झिल्ली फटने से पेट के अंदर खून बहने का जोखिम (2-4%, जिसे तुरंत एम्बोलाइजेशन द्वारा बंद किया जाता है)।",
      "तिल्ली की झिल्ली के नीचे खून जमने से बाईं पसली और कंधे में दर्द (5-8%)।",
      "स्टेंट में खून का नया थक्का जमना (< 2%)।",
      "बाईं तरफ छाती में हल्का दर्द या फेफड़े में मामूली पानी आना (10-15%)।"
    ],
    "alternativesEn": "Open surgical mesentericocaval bypass grafting, surgical thrombectomy, or lifelong anticoagulation alone.",
    "alternativesHi": "पेट खोलकर बड़ा बाईपास ऑपरेशन, खून के थक्के निकालने की सर्जरी, या केवल खून पतला करने की दवाइयां।",
    "sedationTypeEn": "Monitored conscious intravenous sedation combined with local infiltration anesthesia.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ नस द्वारा दर्द निवारक एवं आरामदायक सेडेशन।"
  },
  "ptbd-unilateral-right": {
    "id": "ptbd-unilateral-right",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Transhepatic Biliary Drainage (PTBD) - Right Lobe Unilateral",
    "nameHi": "परक्यूटेनियस ट्रांसहेपेटिक बिलियरी ड्रेनेज (PTBD) - दाहिने लीवर की पित्त नली में ड्रेनेज पाइप डालना",
    "indicationEn": "Malignant or benign biliary obstruction causing severe jaundice, intractable itching, liver dysfunction, or acute cholangitis.",
    "indicationHi": "पित्त की नली में रुकावट (कैंसर या पथरी) के कारण भयंकर पीलिया होना, शरीर में असहनीय खुजली, लीवर में मवाद पड़ना (कोलेंजाइटिस) अथवा लीवर का काम बंद होना।",
    "descriptionEn": "Under local anesthesia and ultrasound/X-ray guidance, a fine needle is passed through the right side of the chest/abdomen into the dilated bile ducts inside the liver. A special drainage tube (internal-external catheter) is navigated past the blockage into the intestines, allowing infected bile to drain freely into a bag and restore normal bile flow.",
    "descriptionHi": "सोनोग्राफी और एक्स-रे की मदद से पसली के रास्ते सुन्न करने का इंजेक्शन लगाकर दाहिने लीवर की सूजी हुई पित्त नली में एक बारीक सुई डाली जाती है। फिर एक विशेष ड्रेनेज नली (कैथेटर) को रुकावट के पार ले जाकर आंतों में पहुंचा दिया जाता है, जिससे रुका हुआ पित्त बाहर थैली में तथा आंतों में बहने लगता है और पीलिया तेजी से उतर जाता है।",
    "benefitsEn": [
      "Rapid, life-saving reduction in toxic bilirubin levels and severe jaundice.",
      "Prompt relief from debilitating cholestatic pruritus (itching) and septic cholangitis.",
      "Normalizes liver enzymes to make the patient eligible for urgent chemotherapy or surgery."
    ],
    "benefitsHi": [
      "जहरीले पीलिया (बिलीरुबिन) के स्तर में तेजी से कमी जो जान बचाती है।",
      "पीलिया के कारण होने वाली भयंकर खुजली और गंभीर संक्रमण (बुखार) से तुरंत राहत।",
      "लीवर को ठीक करना ताकि कैंसर की कीमोथेरेपी या ऑपरेशन शुरू किया जा सके।"
    ],
    "specificRisksEn": [
      "Hemobilia (bleeding into bile ducts) or liver hematoma requiring transfusion or embolization (2-4%).",
      "Transient bacteremic shivering or sepsis triggered by contrast injection (3-5%).",
      "Pneumothorax / air or blood in the lung space due to passage near pleura (1-2%).",
      "Catheter blockage, kinking, or leakage requiring tube repositioning or flushing (5-8%)."
    ],
    "specificRisksHi": [
      "लीवर या पित्त की नली में खून का रिसाव (हेमोबिलिया) जिसके लिए खून चढ़ाने या नस बंद करने की जरूरत पड़ सकती है (2-4%)।",
      "प्रक्रिया के दौरान या बाद में तेज कंपकंपी के साथ बुखार आना (3-5%)।",
      "पसली के रास्ते से जाते समय फेफड़े की झिल्ली पर हल्का असर या हवा भरना (1-2%)।",
      "नली का मुड़ना, बंद होना या किनारे से पित्त का रिसाव होना (5-8%)।"
    ],
    "alternativesEn": "Endoscopic retrograde cholangiopancreatography (ERCP) stenting, open surgical bypass (hepaticojejunostomy), or medical supportive care.",
    "alternativesHi": "दूरबीन (ERCP) द्वारा नीचे से नली डलवाना, पेट का बड़ा ऑपरेशन (बाईपास सर्जरी), या केवल दर्द निवारक दवाइयां।",
    "sedationTypeEn": "Local infiltration anesthesia combined with intravenous sedation and analgesia.",
    "sedationTypeHi": "लोकल एनेस्थीसिया (सुन्न करने का इंजेक्शन) के साथ नस द्वारा दर्द निवारक एवं आरामदायक सेडेशन।"
  },
  "ptbd-unilateral-left": {
    "id": "ptbd-unilateral-left",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Transhepatic Biliary Drainage (PTBD) - Left Lobe Unilateral",
    "nameHi": "परक्यूटेनियस ट्रांसहेपेटिक बिलियरी ड्रेनेज (PTBD) - बाएं लीवर की पित्त नली में ड्रेनेज पाइप डालना",
    "indicationEn": "Isolated left biliary system blockage in Klatskin tumor or when right lobe is atrophied/inaccessible, causing progressive jaundice and cholangitis.",
    "indicationHi": "बाएं लीवर की पित्त नली में रुकावट होना, जब दाहिना लीवर खराब हो चुका हो या वहां से नली डालना संभव न हो, जिसके कारण पीलिया और संक्रमण बढ़ रहा हो।",
    "descriptionEn": "Under ultrasound guidance from below the breastbone (subxiphoid approach), a needle enters the dilated left intrahepatic duct. A catheter is navigated across the obstruction into the duodenum under X-ray, establishing biliary drainage.",
    "descriptionHi": "छाती की हड्डी के ठीक नीचे पेट के बीच से सोनोग्राफी और एक्स-रे की मदद से बाएं लीवर की पित्त नली में बारीक सुई डाली जाती है और रुकावट के पार आंत में कैथेटर बिठा दिया जाता है जिससे पित्त बाहर थैली में निकलने लगता है।",
    "benefitsEn": [
      "Safely drains the left functional liver segments when right side is diseased or blocked.",
      "Avoids the pleural cavity entirely, eliminating risks of pneumothorax.",
      "Swiftly clears jaundice and resolves life-threatening sepsis."
    ],
    "benefitsHi": [
      "बाएं स्वस्थ हिस्से से पित्त निकालकर पूरे शरीर को पीलिया से बचाना।",
      "छाती या फेफड़े को छेड़े बिना सीधे पेट के बीच से सुरक्षित प्रक्रिया।",
      "पीलिया और संक्रमण से तुरंत राहत।"
    ],
    "specificRisksEn": [
      "Bleeding from left hepatic artery branches or hemobilia (1-3%).",
      "Bacteremia / rigors (2-4%).",
      "Bile leakage around the epigastric catheter entry site (< 1%).",
      "Catheter kinking or displacement (3-5%)."
    ],
    "specificRisksHi": [
      "लीवर की नस से खून का रिसाव या खून की उल्टी/मल (1-3%)।",
      "प्रक्रिया के बाद कंपकंपी के साथ बुखार आना (2-4%)।",
      "पेट के ऊपर नली के किनारे से हल्का पित्त रिसना (< 1%)।",
      "नली का मुड़ना या खिसकना (3-5%)।"
    ],
    "alternativesEn": "Right lobe PTBD, ERCP stenting, or surgical bypass.",
    "alternativesHi": "दाहिने हिस्से से नली डालना, एंडोस्कोपी (ERCP), या सर्जरी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ नस द्वारा आरामदायक दवा।"
  },
  "ptbd-bilateral-internal-external": {
    "id": "ptbd-bilateral-internal-external",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Transhepatic Biliary Drainage (PTBD) - Bilateral Internal-External",
    "nameHi": "द्विपक्षीय पीटीबीडी (Bilateral PTBD) - दोनों (दाएं और बाएं) लीवर की नसों में ड्रेनेज नली डालना",
    "indicationEn": "Complete separation of right and left liver bile ducts by advanced hilar tumor (Bismuth Type IV) where single-sided drainage leaves the opposite contaminated lobe infected.",
    "indicationHi": "लीवर के जोड़ पर बड़े कैंसर (क्लैट्सकिन ट्यूमर) के कारण दाएं और बाएं दोनों तरफ की पित्त नलियों का रास्ता अलग-अलग बंद हो जाना, जहां दोनों तरफ नली डाले बिना पीलिया और संक्रमण ठीक नहीं हो सकता।",
    "descriptionEn": "Two separate punctures are performed under ultrasound and fluoroscopy (one from the right flank and one from the epigastrium). Two drainage catheters are guided through each isolated lobe across the tumor into the intestine, ensuring complete liver decompression.",
    "descriptionHi": "सोनोग्राफी और एक्स-रे की मदद से पेट के दोनों तरफ (दाहिनी पसली और पेट के बीच) से अलग-अलग सुई लगाकर दोनों हिस्सों की पित्त नलियों में दो अलग-अलग ड्रेनेज पाइप डाले जाते हैं। दोनों पाइप रुकावट के पार आंतों में पहुंचाए जाते हैं ताकि पूरे लीवर का पित्त बाहर निकल सके।",
    "benefitsEn": [
      "Decompresses 100% of functional liver volume, eradicating isolated lobar sepsis.",
      "Essential preparation for palliative bilateral metal stenting or systemic chemotherapy.",
      "Maximum possible clearance of toxic bile pigments."
    ],
    "benefitsHi": [
      "पूरे लीवर का 100% पित्त निकालकर छुपे हुए संक्रमण को पूरी तरह खत्म करना।",
      "भविष्य में दोनों तरफ पक्की जाली (मेटल स्टेंट) लगाने के लिए आवश्यक आधार तैयार करना।",
      "पीलिया के स्तर में अधिकतम और सबसे तेज गिरावट।"
    ],
    "specificRisksEn": [
      "Higher cumulative bleeding risk due to two liver punctures (3-6%).",
      "Severe post-procedural shivering, fever, or septic shock (4-7%).",
      "Skin irritation and discomfort from managing two external tubes (10-15%).",
      "Electrolyte and bile fluid depletion if tubes drain high volumes externally (5-10%)."
    ],
    "specificRisksHi": [
      "दो जगह छेद होने के कारण लीवर से खून बहने का अधिक जोखिम (3-6%)।",
      "प्रक्रिया के बाद तेज बुखार, कंपकंपी या संक्रमण का खतरा (4-7%)।",
      "पेट पर दो नलियों के रहने से उठने-बैठने में असुविधा और त्वचा का छिलना (10-15%)।",
      "अत्यधिक पित्त बाहर बहने से शरीर में पानी और नमक की कमी (कमजोरी) होना (5-10%)।"
    ],
    "alternativesEn": "Bilateral endoscopic ERCP stenting (if feasible) or palliative medical comfort care.",
    "alternativesHi": "दूरबीन (ERCP) द्वारा दोनों तरफ स्टेंट डलवाना, या केवल दर्द निवारक दवाएं।",
    "sedationTypeEn": "Local infiltration anesthesia combined with monitored intravenous sedation and analgesia.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ नस द्वारा गहरी आरामदायक दवा और दर्द निवारक इंजेक्शन।"
  },
  "biliary-drainage-conversion-external-internal": {
    "id": "biliary-drainage-conversion-external-internal",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "External-to-Internal Biliary Drainage Conversion",
    "nameHi": "पित्त की बाहरी नली को अंदरूनी नली में बदलना (External to Internal Conversion)",
    "indicationEn": "Patients with temporary external drainage tubes desiring conversion to internal drainage to eliminate external bile bags and restore natural digestion.",
    "indicationHi": "मरीज की पित्त की नली जो अभी केवल बाहर थैली में निकल रही है, उसे आगे बढ़ाकर आंतों के अंदर पहुंचाना ताकि बाहर थैली लगाने की जरूरत न रहे और पाचन क्रिया सुधर सके।",
    "descriptionEn": "Under fluoroscopy, a wire is navigated through the existing drainage tube across the biliary stricture into the duodenum. The old tube is exchanged for a multi-hole internal-external catheter that allows bile to flow naturally into the intestine for digestion.",
    "descriptionHi": "एक्स-रे की निगरानी में पहले से डली नली के रास्ते से एक बारीक तार रुकावट के पार आंतों में पहुंचाया जाता है। पुरानी नली को बदलकर एक विशेष छिद्रों वाली नली डाल दी जाती है जो पित्त को सीधे आंत में पहुंचाती है। इसके बाद बाहर का ढक्कन बंद कर दिया जाता है और थैली हटा दी जाती है।",
    "benefitsEn": [
      "Restores natural bile flow into the bowel, resolving severe dehydration, weakness, and malabsorption.",
      "Allows the external tube to be capped, eliminating cumbersome drainage bags.",
      "Significantly improves quality of life and freedom of movement."
    ],
    "benefitsHi": [
      "पित्त का आंत में जाना दोबारा शुरू होना जिससे खाना पचना ठीक होता है और कमजोरी दूर होती है।",
      "बाहर लटकने वाली पित्त की थैली से छुटकारा और नली को बंद रखने की सुविधा।",
      "मरीज के उठने-बैठने, घूमने और जीवन जीने में भारी आसानी।"
    ],
    "specificRisksEn": [
      "Transient bacteremic fever or rigors during manipulation across the stricture (2-4%).",
      "Bleeding or hemobilia from friable tumor tissue (1-2%).",
      "Loss of biliary tract access requiring fresh needle puncture (< 1%).",
      "Duodenal wall irritation or mild pancreatitis (< 0.5%)."
    ],
    "specificRisksHi": [
      "रुकावट के पार तार निकालते समय कंपकंपी या हल्का बुखार आना (2-4%)।",
      "ट्यूमर की जगह से हल्का खून रिसना (1-2%)।",
      "तार फिसलने पर दोबारा सुई लगाने की नौबत आना (< 1%)।",
      "आंत में नली की नोक से हल्की असहजता (< 0.5%)।"
    ],
    "alternativesEn": "Maintaining external drainage bag permanently, or permanent metallic stent insertion.",
    "alternativesHi": "हमेशा बाहर थैली लटकाए रखना, या पक्की धातु की जाली (मेटल स्टेंट) डलवाना।",
    "sedationTypeEn": "Local anesthesia with mild intravenous sedation.",
    "sedationTypeHi": "लोकल एनेस्थीसिया और हल्की आरामदायक दवा।"
  },
  "biliary-balloon-plasty-benign-stricture": {
    "id": "biliary-balloon-plasty-benign-stricture",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Biliary Balloon Dilatation of Benign Strictures",
    "nameHi": "पित्त की नली की सिकुड़न को गुब्बारे से फैलाना (बिलियरी बैलून प्लास्टी)",
    "indicationEn": "Narrowing of bile duct anastomosis following liver transplantation or gallbladder surgery causing recurrent jaundice and infections.",
    "indicationHi": "लीवर ट्रांसप्लांट या पित्त की थैली के ऑपरेशन के बाद टांके वाली जगह पर पित्त की नली का सिकुड़ जाना, जिसके कारण बार-बार पीलिया और बुखार आ रहा हो।",
    "descriptionEn": "A high-pressure angioplasty balloon is passed across the narrowed scar tissue of the bile duct under X-ray guidance. The balloon is inflated to high pressures to stretch and tear the fibrotic scar, restoring the natural caliber of the duct.",
    "descriptionHi": "एक्स-रे की निगरानी में पित्त की नली के रास्ते एक विशेष उच्च-दाब गुब्बारा सिकुड़ी हुई जगह पर ले जाया जाता है। वहां गुब्बारे को अत्यधिक दबाव से फुलाया जाता है जिससे कठोर सिकुड़न फैलकर खुल जाती है और पित्त का रास्ता दोबारा चौड़ा हो जाता है।",
    "benefitsEn": [
      "Durable opening of postoperative strictures without requiring complex re-operation.",
      "Preserves liver transplant graft function and prevents secondary biliary cirrhosis.",
      "Quick recovery with minimal pain."
    ],
    "benefitsHi": [
      "बिना दोबारा पेट का बड़ा ऑपरेशन किए सिकुड़न को सफलतापूर्वक खोलना।",
      "ट्रांसप्लांट किए गए नए लीवर को खराब होने से बचाना।",
      "कम दर्द और अस्पताल से जल्दी छुट्टी।"
    ],
    "specificRisksEn": [
      "Bile duct tear or rupture during high-pressure dilation (1-2%).",
      "Transient bleeding into the bile ducts (2-4%).",
      "Cholangitis / infection requiring antibiotics (3-5%).",
      "Recurrence of narrowing over time requiring repeat dilation (15-20%)."
    ],
    "specificRisksHi": [
      "गुब्बारा फुलाते समय नस या पित्त नली में दरार पड़ना (1-2%)।",
      "नली से हल्का खून का रिसाव (2-4%)।",
      "प्रक्रिया के बाद बुखार या संक्रमण (3-5%)।",
      "कुछ समय बाद सिकुड़न का दोबारा होना (15-20%), जिसके लिए दोबारा गुब्बारा फुलाना पड़ सकता है।"
    ],
    "alternativesEn": "Open surgical revision of hepaticojejunostomy, endoscopic ERCP balloon dilatation, or long-term plastic stenting.",
    "alternativesHi": "पेट खोलकर दोबारा बाईपास सर्जरी, दूरबीन (ERCP) से गुब्बारा फुलाना, या प्लास्टिक स्टेंट।",
    "sedationTypeEn": "Local anesthesia combined with intravenous analgesia and conscious sedation.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ दर्द निवारक एवं आरामदायक सेडेशन।"
  },
  "biliary-uncovered-sems-malignant": {
    "id": "biliary-uncovered-sems-malignant",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Uncovered SEMS Deployment for Malignant Biliary Obstruction",
    "nameHi": "कैंसर की रुकावट में पक्की धातु की जाली (अनकवर्ड मेटल स्टेंट) डालना",
    "indicationEn": "Inoperable bile duct cancer, gallbladder cancer, or pancreatic tumor blocking bile ducts and causing severe jaundice.",
    "indicationHi": "पित्त की नली या अग्न्याशय (पैंक्रियाज) के असाध्य कैंसर के कारण पित्त की नली का पूरी तरह बंद होना और गंभीर पीलिया होना।",
    "descriptionEn": "A permanent self-expanding metallic stent made of flexible nitinol mesh is placed across the cancerous tumor blockage under X-ray guidance. The stent springs open automatically, holding the tumor back and creating a wide, permanent internal tunnel for bile to flow into the bowel.",
    "descriptionHi": "एक्स-रे की मदद से ट्यूमर की रुकावट के आर-पार एक विशेष धातु (निटिनोल) की बनी जालीदार नली (मेटल स्टेंट) पहुंचाई जाती है। यह जाली अंदर पहुंचकर अपने आप पूरी तरह फैल जाती है और ट्यूमर को दबाकर पित्त के बहाव के लिए एक चौड़ा पक्का रास्ता बना देती है। इसके बाद बाहर की सभी नलियां हटा दी जाती हैं।",
    "benefitsEn": [
      "Permanent internal solution that completely eliminates external drainage tubes and bags.",
      "Significantly longer patency than plastic stents (6-12 months).",
      "Open mesh design permits side-branch bile drainage at the liver hilum without causing lobar blockages."
    ],
    "benefitsHi": [
      "बाहर लटकने वाली सभी नलियों और थैलियों से हमेशा के लिए पूर्ण मुक्ति।",
      "प्लास्टिक स्टेंट की तुलना में कई गुना अधिक समय (6 से 12 महीने) तक खुला रहना।",
      "जालीदार बनावट होने से लीवर की अन्य शाखाओं का रास्ता बंद नहीं होता।"
    ],
    "specificRisksEn": [
      "Late tumor ingrowth through the open metal mesh causing recurrent jaundice months later (15-25%).",
      "Bleeding into bile ducts (2-4%).",
      "Post-procedure cholangitis or mild pancreatitis (2-4%).",
      "Stent misplacement or incomplete opening (< 1%)."
    ],
    "specificRisksHi": [
      "कुछ महीनों बाद कैंसर के जाली के छेदों में से अंदर उग आने से पीलिया का दोबारा बढ़ना (15-25%)।",
      "पित्त नली से हल्का खून आना (2-4%)।",
      "प्रक्रिया के बाद बुखार या अग्न्याशय में हल्की सूजन (2-4%)।",
      "जाली का सही जगह पर न खुलना (< 1%)।"
    ],
    "alternativesEn": "Covered metal stenting, plastic biliary stents, lifelong external catheter drainage, or palliative bypass surgery.",
    "alternativesHi": "कवर वाला मेटल स्टेंट, प्लास्टिक स्टेंट, हमेशा बाहर थैली लटकाए रखना, या बाईपास ऑपरेशन।",
    "sedationTypeEn": "Local infiltration anesthesia with intravenous sedation and analgesia.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ नस द्वारा दर्द निवारक एवं आरामदायक सेडेशन।"
  },
  "biliary-covered-sems-stricture-leak": {
    "id": "biliary-covered-sems-stricture-leak",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Covered SEMS Deployment for Biliary Leaks & Distal Strictures",
    "nameHi": "कवर वाला मेटल स्टेंट (Covered SEMS) - पित्त के रिसाव को बंद करने या निचली रुकावट को खोलने के लिए",
    "indicationEn": "Major bile duct leaks following surgery, biliary fistulae, or inoperable distal common bile duct tumors.",
    "indicationHi": "ऑपरेशन के बाद पित्त की नली से पेट में पित्त का रिसाव (लीक) होना, या पित्त नली के निचले हिस्से में कैंसर की रुकावट होना।",
    "descriptionEn": "A self-expanding metallic stent lined with an impermeable synthetic membrane (ePTFE or silicone) is positioned across the leak or tumor under X-ray. The non-porous cover immediately seals the tear from within, while holding the lumen widely patent.",
    "descriptionHi": "एक्स-रे की देखरेख में एक विशेष धातु की जालीदार नली, जिस पर वाटरप्रूफ झिल्ली चढ़ी होती है, उस फटी हुई या बंद जगह पर लगा दी जाती है। यह झिल्लीदार स्टेंट पित्त के रिसाव को अंदर से पूरी तरह सील कर देता है और पित्त को सीधे आंत में पहुंचाता है।",
    "benefitsEn": [
      "Instant internal sealing of postoperative bile leaks, avoiding emergency re-operation.",
      "Complete barrier preventing tumor ingrowth through the stent mesh.",
      "Can be safely removed or adjusted if used for benign conditions."
    ],
    "benefitsHi": [
      "ऑपरेशन के बाद होने वाले खतरनाक पित्त रिसाव का तुरंत पक्का बंद होना।",
      "ट्यूमर को जाली के अंदर घुसने से पूरी तरह रोकना।",
      "जरूरत पड़ने पर इसे भविष्य में बाहर निकाला भी जा सकता है।"
    ],
    "specificRisksEn": [
      "Stent migration into the intestine due to the smooth covered surface (5-8%).",
      "Blockage of the gallbladder duct (cystic duct) leading to acute cholecystitis (3-5%).",
      "Mild pancreatitis from pancreatic duct covering (2-3%).",
      "Bleeding or infection (2-4%)."
    ],
    "specificRisksHi": [
      "चिकनी झिल्ली होने के कारण स्टेंट का फिसलकर आंत में चले जाना (5-8%)।",
      "पित्त की थैली के मुहाने पर झिल्ली आने से पित्त की थैली में सूजन या दर्द (3-5%)।",
      "अग्न्याशय (पैंक्रियाज) की नली पर दबाव से दर्द होना (2-3%)।",
      "हल्का रक्तस्राव या संक्रमण (2-4%)।"
    ],
    "alternativesEn": "Uncovered metal stenting, multiple plastic stents, surgical exploration and repair, or prolonged external drainage.",
    "alternativesHi": "बिना कवर वाला स्टेंट, प्लास्टिक स्टेंट, खुला ऑपरेशन करके टांके लगाना, या लंबे समय तक नली रखना।",
    "sedationTypeEn": "Local anesthesia with monitored conscious intravenous sedation.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ नस द्वारा दर्द निवारक एवं आरामदायक सेडेशन।"
  },
  "intraductal-biliary-rfa-habib": {
    "id": "intraductal-biliary-rfa-habib",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Intraductal Biliary Radiofrequency Ablation (EndoHPB / Habib Catheter)",
    "nameHi": "पित्त की नली के कैंसर को अंदर से रेडियोफ्रीक्वेंसी द्वारा जलाना (EndoHPB / Habib RFA)",
    "indicationEn": "Bile duct cancer (cholangiocarcinoma) blocking the ducts or tumor growing inside previously placed metallic stents.",
    "indicationHi": "पित्त की नली के कैंसर का नली के अंदर ही फैलाव होना या पहले से लगे मेटल स्टेंट के अंदर कैंसर का दोबारा उग जाना।",
    "descriptionEn": "Through the transhepatic access, a specialized catheter with bipolar electrodes is placed inside the tumor stricture. Radiofrequency energy is delivered directly to heat and destroy the inner layer of tumor cells before a stent is placed, cleaning the lumen and delaying tumor re-growth.",
    "descriptionHi": "पित्त नली के रास्ते से एक विशेष बारीक तार ट्यूमर के बीच पहुंचाया जाता है। रेडियोफ्रीक्वेंसी तरंगों द्वारा उच्च तापमान पैदा करके ट्यूमर की अंदरूनी परत को जलाकर नष्ट कर दिया जाता है। इससे रास्ता साफ हो जाता है और भविष्य में स्टेंट के लंबे समय तक खुले रहने की संभावना बहुत बढ़ जाती है।",
    "benefitsEn": [
      "Directly destroys tumor tissue within the bile duct, slowing local cancer progression.",
      "Significantly prolongs the lifespan and patency of metal stents.",
      "Can clear clogged metallic stents without requiring surgical removal."
    ],
    "benefitsHi": [
      "नली के अंदर मौजूद कैंसर की कोशिकाओं को सीधे जलाकर नष्ट करना।",
      "स्टेंट के खुले रहने की अवधि को काफी बढ़ाना।",
      "जाम हो चुके पुराने मेटल स्टेंट को अंदर से साफ करके दोबारा चालू करना।"
    ],
    "specificRisksEn": [
      "Bile duct wall thermal perforation (< 1.5%).",
      "Thermal injury to adjacent hepatic artery causing bleeding (< 1%).",
      "Post-ablation fever and cholangitis (3-5%).",
      "Transient abdominal pain (10-15%)."
    ],
    "specificRisksHi": [
      "गर्मी के कारण पित्त की नली में छेद होने का दुर्लभ जोखिम (< 1.5%)।",
      "पास की खून की नस को चोट पहुंचने से रक्तस्राव (< 1%)।",
      "प्रक्रिया के बाद हल्का बुखार और संक्रमण (3-5%)।",
      "पेट के ऊपरी हिस्से में हल्का दर्द (10-15%)।"
    ],
    "alternativesEn": "Photodynamic therapy (PDT), external beam radiation, standard stenting alone, or systemic chemotherapy.",
    "alternativesHi": "फोटोडायनामिक थेरेपी (PDT), कैंसर की सिकाई (रेडिएशन), केवल स्टेंट लगाना, या कीमोथेरेपी।",
    "sedationTypeEn": "Local infiltration anesthesia combined with intravenous conscious sedation.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ नस द्वारा दर्द निवारक एवं आरामदायक सेडेशन।"
  },
  "biliary-calculi-dormia-basket-removal": {
    "id": "biliary-calculi-dormia-basket-removal",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Removal of Retained Biliary Calculi via Dormia Basket",
    "nameHi": "डॉर्मिया बास्केट (Dormia Basket) द्वारा पित्त की नली की पथरी बाहर निकालना",
    "indicationEn": "Retained stones in the bile ducts after gallbladder surgery or stones that cannot be removed by mouth endoscopy (ERCP).",
    "indicationHi": "पित्त की थैली के ऑपरेशन के बाद नली में फंसी हुई पथरी, या वह पथरी जो मुंह के रास्ते एंडोस्कोपी (ERCP) से नहीं निकाली जा सकी।",
    "descriptionEn": "Through the established skin-to-liver tube track, a miniature expandable wire basket (Dormia basket) is guided under X-ray into the bile duct. The basket is opened, the stone is captured inside the wire cage, and the stone is pulled out through the tube tract or pushed into the intestines.",
    "descriptionHi": "पहले से बने नली के रास्ते से एक्स-रे की देखरेख में एक बारीक तारों वाली टोकरी (डॉर्मिया बास्केट) पित्त नली के अंदर ले जाई जाती है। वहां टोकरी को खोलकर पथरी को तारों के बीच फंसा लिया जाता है और फिर पूरी टोकरी को पथरी सहित बाहर खींच लिया जाता है।",
    "benefitsEn": [
      "Complete, non-surgical extraction of retained stones without requiring open exploration.",
      "Avoids the risks of pancreatitis and bleeding associated with endoscopic sphincterotomy.",
      "Promptly relieves biliary colic pain and prevents recurrent jaundice."
    ],
    "benefitsHi": [
      "बिना पेट काटे पित्त की नली की पथरी को पूरी तरह बाहर निकालना।",
      "मुंह के रास्ते होने वाली जटिलताओं (पैंक्रियाटाइटिस) से बचाव।",
      "पेट के दर्द और बार-बार होने वाले पीलिया से स्थायी छुटकारा।"
    ],
    "specificRisksEn": [
      "Basket entrapment around a very large stone requiring rescue lithotripsy (< 1%).",
      "Bile duct mucosal tear or slight bleeding (1-2%).",
      "Post-procedural cholangitis (2-4%).",
      "Incomplete clearance requiring a second session (5-8%)."
    ],
    "specificRisksHi": [
      "बड़ी पथरी पर टोकरी के फंस जाने का दुर्लभ खतरा (< 1%)।",
      "नली की अंदरूनी सतह पर खरोंच या हल्का खून आना (1-2%)।",
      "प्रक्रिया के बाद हल्का बुखार आना (2-4%)।",
      "कुछ बारीक पत्थरों के रह जाने पर दूसरे चक्कर की जरूरत पड़ना (5-8%)।"
    ],
    "alternativesEn": "Repeat ERCP, open surgical common bile duct exploration (choledocholithotomy), or shockwave lithotripsy.",
    "alternativesHi": "दोबारा ईआरसीपी (ERCP) का प्रयास, पेट खोलकर पित्त नली चीरने का ऑपरेशन, या लेजर तकनीक।",
    "sedationTypeEn": "Local anesthesia with mild intravenous sedation.",
    "sedationTypeHi": "लोकल एनेस्थीसिया और हल्की आरामदायक दवा।"
  },
  "ptcs-ehl-lithotripsy": {
    "id": "ptcs-ehl-lithotripsy",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Cholangioscopy with Electrohydraulic Lithotripsy (EHL)",
    "nameHi": "दूरबीन द्वारा देखकर बिजली के झटके (EHL) से पित्त की पथरी को तोड़ना",
    "indicationEn": "Massive, impacted, or staghorn stones in the intrahepatic bile ducts that are too large to be pulled out with simple baskets.",
    "indicationHi": "लीवर की नसों के अंदर गहराई में फंसी बहुत बड़ी और कठोर पथरियां जिन्हें साधारण टोकरी से नहीं निकाला जा सकता।",
    "descriptionEn": "A tiny flexible digital camera (cholangioscope) is inserted through the skin tract directly into the bile ducts under saline wash. An electrohydraulic spark probe is brought in contact with the stone under direct high-definition video visualization, firing shockwaves that shatter the stone into tiny sand-like particles.",
    "descriptionHi": "नली के रास्ते एक अत्यंत बारीक लचीला डिजिटल कैमरा (कोलेन्जियोस्कोप) सीधे पित्त नली के अंदर ले जाया जाता है। स्क्रीन पर पथरी को साफ़-साफ़ देखते हुए एक बारीक शॉकवेव तार से बिजली के सूक्ष्म झटके दिए जाते हैं, जिससे कठोर से कठोर पथरी भी रेत की तरह बारीक टुकड़ों में टूट जाती है और आसानी से बाहर बह जाती है।",
    "benefitsEn": [
      "Direct 100% visual confirmation ensures accurate stone fragmentation with zero guesswork.",
      "Can crush huge, rock-hard stones that would otherwise require major liver surgery.",
      "Flushes tiny debris naturally into the digestive tract."
    ],
    "benefitsHi": [
      "कैमरे में लाइव देखकर बिल्कुल सटीक तरीके से केवल पथरी को तोड़ना, जिससे नसों को कोई नुकसान नहीं होता।",
      "अत्यंत विशाल पथरियों को भी तोड़ना जिनके लिए पहले लीवर काटना पड़ता था।",
      "सारे बारीक कण प्राकृतिक रूप से आंत में बह जाते हैं।"
    ],
    "specificRisksEn": [
      "Bile duct wall injury from misdirected shockwaves (< 1%).",
      "High-pressure water irrigation causing bacteremic chills or fever (3-5%).",
      "Bleeding from irritated bile duct lining (2-3%).",
      "Need for multiple sittings for extensive staghorn stones (10-15%)."
    ],
    "specificRisksHi": [
      "गलत दिशा में शॉकवेव लगने से नली में चोट का दुर्लभ जोखिम (< 1%)।",
      "धुलाई के पानी के दबाव से कंपकंपी या हल्का बुखार (3-5%)।",
      "नली से हल्का खून आना (2-3%)।",
      "अत्यधिक पथरियां होने पर एक से अधिक बार प्रक्रिया करने की जरूरत (10-15%)।"
    ],
    "alternativesEn": "Holmium laser lithotripsy, partial hepatectomy (surgical liver resection), or open choledochotomy.",
    "alternativesHi": "होलमियम लेजर तकनीक, लीवर का पत्थर वाला हिस्सा काटकर अलग करने की बड़ी सर्जरी, या खुला ऑपरेशन।",
    "sedationTypeEn": "Monitored intravenous conscious sedation with local anesthesia.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ नस द्वारा गहरी आरामदायक दवा और दर्द निवारक।"
  },
  "ptcs-laser-lithotripsy": {
    "id": "ptcs-laser-lithotripsy",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Cholangioscopy with Holmium Laser Lithotripsy",
    "nameHi": "होलमियम लेजर द्वारा पित्त की पथरी को जलाकर बारीक करना (Laser Lithotripsy)",
    "indicationEn": "Hard calcified stones deeply lodged in the liver bile ducts refractory to mechanical methods.",
    "indicationHi": "लीवर की नसों के अंदर फंसी अत्यधिक कठोर, पथरीली गांठें जो किसी अन्य तरीके से नहीं टूट पा रही हों।",
    "descriptionEn": "Under direct vision using a miniature flexible digital camera inside the bile duct, a microscopic laser fiber delivers concentrated Holmium:YAG laser pulses directly on the stone, instantly turning the stone into fine dust without injuring surrounding tissues.",
    "descriptionHi": "पित्त नली के अंदर बारीक कैमरा डालकर स्क्रीन पर पथरी को देखा जाता है। फिर बाल जैसी बारीक लेजर तार से होलमियम लेजर की किरणें सीधे पथरी पर डाली जाती हैं। लेजर की ऊर्जा कठोर पथरी को तुरंत धुएं और धूल में बदल देती है, जिससे नसें पूरी तरह साफ हो जाती हैं।",
    "benefitsEn": [
      "The most precise and powerful stone fragmentation technology available in modern medicine.",
      "Laser energy acts strictly on the stone surface, with virtually zero risk to surrounding tissue.",
      "Can completely pulverize even the hardest stones into harmless dust."
    ],
    "benefitsHi": [
      "आधुनिक चिकित्सा विज्ञान की सबसे सटीक और शक्तिशाली लेजर तकनीक।",
      "लेजर केवल पत्थर पर काम करता है, आसपास की नस को बिल्कुल सुरक्षित रखता है।",
      "कठोर से कठोर पथरी को भी धूल बनाकर पूरी तरह खत्म करने की अचूक क्षमता।"
    ],
    "specificRisksEn": [
      "Laser thermal tissue damage if fiber touches duct wall (< 0.5%).",
      "Transient hemobilia or blood in bile (1-2%).",
      "Infection / cholangitis from fluid wash (2-4%).",
      "Need for second session if heavy stone burden (5-10%)."
    ],
    "specificRisksHi": [
      "लेजर तार से नस की दीवार पर हल्का छाला पड़ने का अति-दुर्लभ जोखिम (< 0.5%)।",
      "हल्का खून आना (1-2%)।",
      "धुलाई के कारण हल्का बुखार आना (2-4%)।",
      "बहुत ज्यादा पथरी होने पर दूसरे सिटिंग की आवश्यकता (5-10%)।"
    ],
    "alternativesEn": "EHL lithotripsy, mechanical basket retrieval, or surgical liver resection.",
    "alternativesHi": "ईएचएल (EHL) शॉकवेव, टोकरी से खींचना, या लीवर का ऑपरेशन।",
    "sedationTypeEn": "Monitored conscious intravenous sedation or general anesthesia.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ गहरी बेहोशी/सेडेशन अथवा पूर्ण बेहोशी।"
  },
  "biliary-rendezvous-ercp": {
    "id": "biliary-rendezvous-ercp",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Biliary Rendez-vous Procedure with ERCP",
    "nameHi": "रोंदेवू प्रक्रिया (Rendezvous Procedure) - पेट और मुंह के दोनों रास्तों से मिलकर पित्त नली खोलना",
    "indicationEn": "Complete failure of standard ERCP cannulation from the mouth due to altered anatomy, severe diverticulum, or tight stricture, requiring joint percutaneous guidance.",
    "indicationHi": "मुंह के रास्ते एंडोस्कोपी (ERCP) द्वारा पित्त की नली का मुंह न मिल पाना या रास्ता न खुल पाना, जहां पेट के रास्ते से तार डालकर नीचे से आ रहे डॉक्टर को रास्ता दिखाया जाता है।",
    "descriptionEn": "Working as a combined team, the radiologist introduces a long wire from the liver above, pushing it all the way down into the intestine. The gastroenterologist uses an endoscope from below to grab this wire, effortlessly sliding their instruments up into the bile duct to clear stones or place stents.",
    "descriptionHi": "रेडियोलॉजिस्ट पेट के रास्ते ऊपर से एक लंबा बारीक तार डालकर उसे आंतों में पहुंचाते हैं। नीचे से मुंह के रास्ते एंडोस्कोपी कर रहे डॉक्टर उस तार को पकड़ लेते हैं और उसी तार के सहारे बिना किसी रुकावट के पित्त नली के अंदर पहुंचकर स्टेंट लगा देते हैं या पथरी निकाल देते हैं। दोनों डॉक्टर मिलकर एक साथ काम करते हैं।",
    "benefitsEn": [
      "Turns an impossible ERCP failure into a 98% successful cannulation.",
      "Drastically reduces the risk of post-ERCP pancreatitis and duodenal trauma.",
      "Accomplishes complete stone clearance and stenting in a single combined sitting."
    ],
    "benefitsHi": [
      "असफल हो चुकी एंडोस्कोपी को 98% सफलता में बदलने का अचूक तरीका।",
      "अग्न्याशय (पैंक्रियाज) में सूजन आने के गंभीर खतरे से भारी बचाव।",
      "एक ही बार में ऊपर और नीचे दोनों तरफ से काम पूरा होकर मरीज को राहत मिलना।"
    ],
    "specificRisksEn": [
      "Post-procedure mild pancreatitis (3-5%).",
      "Bleeding from liver entry or duodenal sphincterotomy (1-2%).",
      "Temporary bile leak along the liver track (1-2%).",
      "Bacteremia or shivering (2-4%)."
    ],
    "specificRisksHi": [
      "प्रक्रिया के बाद पैंक्रियाज में हल्की सूजन आना (3-5%)।",
      "लीवर में सुई वाली जगह या आंत में चीरे से हल्का खून आना (1-2%)।",
      "लीवर के रास्ते से थोड़ा पित्त रिसना (1-2%)।",
      "कंपकंपी या बुखार आना (2-4%)।"
    ],
    "alternativesEn": "Pure percutaneous PTBD stenting, precut needle-knife papillotomy, or open common bile duct exploration.",
    "alternativesHi": "केवल पेट के रास्ते पूरी नली डालना, नीचे चीरा लगाकर जबरदस्ती रास्ता बनाना, या पेट का खुला ऑपरेशन।",
    "sedationTypeEn": "Monitored deep intravenous sedation or general anesthesia.",
    "sedationTypeHi": "गहरी बेहोशी (Deep Sedation) अथवा पूर्ण बेहोशी (General Anesthesia)।"
  },
  "percutaneous-cholecystostomy-transhepatic": {
    "id": "percutaneous-cholecystostomy-transhepatic",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Cholecystostomy (Transhepatic Route)",
    "nameHi": "परक्यूटेनियस कोलेसिस्टोस्टॉमी (ट्रांसहेपेटिक) - पित्त की थैली से मवाद निकालने के लिए लीवर के रास्ते पाइप डालना",
    "indicationEn": "Severe acute infection or gangrene of the gallbladder (acute cholecystitis / empyema) in high-risk, elderly, or ICU patients unfit for surgery.",
    "indicationHi": "पित्त की थैली में गंभीर संक्रमण, मवाद (इम्पाईमा) या थैली के सड़ने का खतरा होना, विशेषकर उन बुजुर्ग या गंभीर रूप से बीमार मरीजों में जो बड़ा ऑपरेशन सहन नहीं कर सकते।",
    "descriptionEn": "Under ultrasound guidance, a drainage tube is passed through a small edge of the liver directly into the inflamed gallbladder under local anesthesia. The infected pus and toxic bile are completely drained into a bag, relieving pain and curing life-threatening infection within hours.",
    "descriptionHi": "सोनोग्राफी की निगरानी में सुन्न करने का इंजेक्शन लगाकर लीवर के एक छोटे हिस्से से होकर पित्त की थैली के अंदर एक बारीक ड्रेनेज पाइप डाल दिया जाता है। थैली में भरा हुआ सारा मवाद और जहरीला पित्त तुरंत बाहर थैली में निकल जाता है, जिससे तेज दर्द और जानलेवा संक्रमण कुछ ही घंटों में शांत हो जाता है।",
    "benefitsEn": [
      "Life-saving emergency decompression of an infected gallbladder without general anesthesia or open surgery.",
      "Dramatic resolution of high fever, septic shock, and severe abdominal pain within 24 hours.",
      "Stabilizes critical ICU patients so they can later undergo safe elective gallbladder removal."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या बेहोशी के पित्त की थैली के मवाद को निकालकर जान बचाना।",
      "24 घंटे के अंदर तेज बुखार, संक्रमण और असहनीय पेट दर्द से पूर्ण राहत।",
      "गंभीर मरीज को खतरे से बाहर निकालना ताकि भविष्य में सुरक्षित रूप से थैली निकाली जा सके।"
    ],
    "specificRisksEn": [
      "Sudden drop in blood pressure or slow heart rate (vasovagal reaction) during puncture (3-5%, treated instantly with IV atropine).",
      "Bleeding from liver tissue (1-2%).",
      "Accidental catheter dislodgement if patient pulls on tube (5-8%).",
      "Bile leak into peritoneum (< 1% when performed via liver route)."
    ],
    "specificRisksHi": [
      "सुई डालते समय अचानक ब्लड प्रेशर या दिल की धड़कन का कम होना (3-5%, जिसे तुरंत दवा देकर ठीक किया जाता है)।",
      "लीवर से हल्का खून का रिसाव (1-2%)।",
      "मरीज द्वारा खिंचने से नली का बाहर निकल जाना (5-8%)।",
      "पेट में पित्त का रिसाव होना (लीवर के रास्ते जाने से यह खतरा 1% से भी कम रहता है)।"
    ],
    "alternativesEn": "Emergency open or laparoscopic cholecystectomy (high mortality in critical patients), or conservative IV antibiotics alone.",
    "alternativesHi": "आपातकालीन खुला ऑपरेशन (जिसमें मरीज की जान का भारी जोखिम होता है), या केवल एंटीबायोटिक दवाइयां।",
    "sedationTypeEn": "Local infiltration anesthesia at the skin and liver capsule with optional light IV sedation.",
    "sedationTypeHi": "लोकल एनेस्थीसिया (सुन्न करने का इंजेक्शन) और हल्की आरामदायक दवा।"
  },
  "percutaneous-cholecystostomy-transperitoneal": {
    "id": "percutaneous-cholecystostomy-transperitoneal",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Cholecystostomy (Transperitoneal Route)",
    "nameHi": "परक्यूटेनियस कोलेसिस्टोस्टॉमी (सीधे पेट के रास्ते पित्त की थैली में ड्रेनेज नली डालना)",
    "indicationEn": "Acute severe gallbladder infection in patients with advanced liver disease, cirrhosis, or bleeding disorders where puncturing the liver carries excessive bleeding risk.",
    "indicationHi": "लीवर की बीमारी (सिरोसिस) या खून न जमने की बीमारी वाले मरीजों में पित्त की थैली का भयंकर संक्रमण, जहां लीवर में सुई चुभाने से बहुत ज्यादा खून बहने का खतरा हो।",
    "descriptionEn": "Under ultrasound guidance, a drainage catheter is placed directly into the front of the swollen gallbladder where it touches the abdominal wall, avoiding the liver completely. Pus and infected bile are drained out immediately.",
    "descriptionHi": "सोनोग्राफी से देखकर पेट की दीवार के सीधे रास्ते से (लीवर को बिल्कुल छुए बिना) पित्त की थैली में सुई डालकर ड्रेनेज नली बिठा दी जाती है। थैली में भरा मवाद तुरंत बाहर निकल जाता है।",
    "benefitsEn": [
      "Completely eliminates liver trauma and bleeding risk in cirrhotic or coagulopathic patients.",
      "Rapid relief of septic shock and severe gallbladder inflammation.",
      "Can be done quickly at the bedside or in the IR suite under local numbing."
    ],
    "benefitsHi": [
      "लीवर को छुए बिना इलाज, जिससे खून बहने का खतरा बिल्कुल खत्म हो जाता है।",
      "संक्रमण और भयंकर पेट दर्द से तत्काल राहत।",
      "बिना बेहोश किए केवल सुन्न करके आसानी से की जाने वाली प्रक्रिया।"
    ],
    "specificRisksEn": [
      "Bile leak into the abdominal cavity causing peritonitis (2-4%).",
      "Premature catheter displacement if not securely anchored (5-10%).",
      "Localized puncture site tenderness (10-15%).",
      "Need to keep the tube in place for several weeks until a firm fibrous tract forms."
    ],
    "specificRisksHi": [
      "पेट के अंदर पित्त का रिसाव होने का जोखिम (2-4%)।",
      "नली के खिसक जाने का खतरा (5-10%)।",
      "सुई वाली जगह पर कुछ दिन दर्द रहना (10-15%)।",
      "पक्का रास्ता बनने तक नली को कुछ हफ्तों तक पेट पर रखना जरूरी होना।"
    ],
    "alternativesEn": "Transhepatic cholecystostomy, emergency open cholecystectomy, or antibiotic therapy alone.",
    "alternativesHi": "लीवर के रास्ते नली डालना, आपातकालीन सर्जरी, या केवल दवाइयां।",
    "sedationTypeEn": "Targeted local infiltration anesthesia under ultrasound vision.",
    "sedationTypeHi": "सोनोग्राफी की निगरानी में सुन्न करने का इंजेक्शन।"
  },
  "percutaneous-cholecystolithotomy-stone-extraction": {
    "id": "percutaneous-cholecystolithotomy-stone-extraction",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Cholecystolithotomy & Gallbladder Stone Extraction",
    "nameHi": "पित्त की थैली की पथरी को नली के रास्ते बाहर निकालना (Cholecystolithotomy)",
    "indicationEn": "Patients with painful gallstones and permanent cholecystostomy tubes who are strictly unfit for gallbladder removal surgery.",
    "indicationHi": "जिन मरीजों के पेट में पहले से पित्त की थैली की नली डली हुई है और वे दिल या फेफड़े की बीमारी के कारण थैली निकालने का ऑपरेशन नहीं करवा सकते, उनकी पथरी को नली के रास्ते बाहर निकालना।",
    "descriptionEn": "Through the mature cholecystostomy tract, a flexible endoscope is inserted into the gallbladder under water irrigation. The gallstones are grasped with baskets or crushed with laser/shockwaves and extracted completely through the tract.",
    "descriptionHi": "पहले से बनी नली के रास्ते से एक बारीक दूरबीन पित्त की थैली के अंदर ले जाई जाती है। वहां स्क्रीन पर देखकर सारी पथरियों को टोकरी से पकड़कर बाहर निकाल लिया जाता है या लेजर से तोड़कर साफ कर दिया जाता है।",
    "benefitsEn": [
      "Completely clears all gallstones without removing the gallbladder or performing surgical incisions.",
      "Allows the permanent external cholecystostomy drainage tube to finally be safely removed.",
      "Safe for high-risk cardiac and pulmonary patients."
    ],
    "benefitsHi": [
      "बिना पित्त की थैली काटे और बिना कोई नया चीरा लगाए सारी पथरियों को बाहर निकालना।",
      "महीनों से पेट पर लटकी हुई ड्रेनेज नली को हमेशा के लिए हटाने का रास्ता साफ होना।",
      "कमजोर दिल और फेफड़ों के मरीजों के लिए अत्यंत सुरक्षित।"
    ],
    "specificRisksEn": [
      "Bile leak into peritoneum during tract dilation (1-2%).",
      "Transient bleeding from the gallbladder lining (2-4%).",
      "Gallstone recurrence over subsequent years because the gallbladder remains in place (20-30%).",
      "Post-procedure fever (2-4%)."
    ],
    "specificRisksHi": [
      "रास्ता चौड़ा करते समय हल्का पित्त रिसना (1-2%)।",
      "थैली के अंदरूनी हिस्से से हल्का खून आना (2-4%)।",
      "चूंकि पित्त की थैली अंदर ही रहती है, इसलिए भविष्य में दोबारा पथरी बनने की संभावना रहना (20-30%)।",
      "हल्का बुखार आना (2-4%)।"
    ],
    "alternativesEn": "Laparoscopic cholecystectomy, keeping the cholecystostomy tube permanently, or oral bile acid dissolution therapy.",
    "alternativesHi": "दूरबीन से पित्त की थैली निकालने का ऑपरेशन, हमेशा नली लगाए रखना, या पथरी गलाने की दवाइयां।",
    "sedationTypeEn": "Monitored intravenous conscious sedation combined with local anesthesia.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ नस द्वारा आरामदायक सेडेशन।"
  },
  "chemical-gallbladder-sclerosis": {
    "id": "chemical-gallbladder-sclerosis",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Chemical Gallbladder Sclerosis / Percutaneous Ablation",
    "nameHi": "केमिकल स्क्लेरोसिस द्वारा पित्त की थैली को सुखाना (बिना ऑपरेशन थैली को बंद करना)",
    "indicationEn": "Permanent non-surgical elimination of the gallbladder in elderly or frail patients dependent on a cholecystostomy tube who cannot undergo surgical removal.",
    "indicationHi": "कमजोर और बुजुर्ग मरीजों में बिना ऑपरेशन किए पित्त की थैली को दवा द्वारा सुखाकर हमेशा के लिए बंद करना ताकि पेट पर लगी नली हमेशा के लिए हट सके।",
    "descriptionEn": "After verifying that the cystic duct is safely closed, a special chemical agent (concentrated medical alcohol or sclerosant) is instilled into the gallbladder lumen for a specific period to chemically ablate the mucosal lining. The gallbladder collapses into a tiny fibrous scar and the tube is permanently removed.",
    "descriptionHi": "यह पक्का करने के बाद कि थैली का रास्ता मुख्य नस में नहीं जा रहा है, नली के जरिए विशेष मेडिकल अल्कोहल या सुखाने वाली दवा पित्त की थैली के अंदर भरी जाती है। यह दवा थैली की अंदरूनी झिल्ली को सुखा देती है जिससे थैली सिकुड़कर हमेशा के लिए बंद हो जाती है और फिर पेट की नली निकाल दी जाती है।",
    "benefitsEn": [
      "Achieves permanent 'chemical removal' of the gallbladder without surgery.",
      "Allows the patient to finally get rid of the annoying external drainage bag.",
      "Permanently prevents recurrent acute cholecystitis."
    ],
    "benefitsHi": [
      "बिना ऑपरेशन के पित्त की थैली का हमेशा के लिए खात्मा (केमिकल रिमूवल)।",
      "पेट पर लगी नली और थैली से हमेशा के लिए आजादी।",
      "भविष्य में दोबारा कभी पित्त की थैली में इन्फेक्शन न होना।"
    ],
    "specificRisksEn": [
      "Intense right upper quadrant burning pain during alcohol instillation requiring strong analgesia (40-60%).",
      "Inadvertent leakage of sclerosant into the common bile duct causing stricture (< 0.5%).",
      "Incomplete sclerosis requiring a second session (10-15%).",
      "Transient feeling of alcohol intoxication (< 2%)."
    ],
    "specificRisksHi": [
      "दवा डालते समय पेट के दाहिने हिस्से में तेज जलन या दर्द होना जिसके लिए तेज दर्द निवारक इंजेक्शन दिया जाता है (40-60%)।",
      "दवा का मुख्य पित्त नली में चले जाने का अत्यंत दुर्लभ खतरा (< 0.5%)।",
      "थैली पूरी तरह न सूखने पर दोबारा दवा डालने की जरूरत (10-15%)।",
      "हल्का नशा या चक्कर महसूस होना (< 2%)।"
    ],
    "alternativesEn": "Keeping the cholecystostomy tube permanently, open cholecystectomy, or laparoscopic cholecystectomy.",
    "alternativesHi": "हमेशा नली लगाए रखना, या पेट का ऑपरेशन करवाना।",
    "sedationTypeEn": "Intravenous analgesia (Fentanyl) and conscious sedation combined with local anesthesia.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ नस द्वारा तेज दर्द निवारक (फेंटानिल) और सेडेशन।"
  },
  "percutaneous-transhepatic-gallbladder-stenting": {
    "id": "percutaneous-transhepatic-gallbladder-stenting",
    "category": "Hepato-Pancreato-Biliary & Portal Hypertension",
    "nameEn": "Percutaneous Transhepatic Gallbladder Stenting",
    "nameHi": "पित्त की थैली से आंत तक अंदरूनी स्टेंट लगाना (Gallbladder Stenting)",
    "indicationEn": "Cholecystostomy tube-dependent patients where the cystic duct is blocked, requiring internal stenting to allow tube removal.",
    "indicationHi": "पित्त की थैली की नली के मुहाने पर रुकावट होना जिसके कारण थैली का पित्त आंत में नहीं जा पा रहा हो, वहां अंदरूनी स्टेंट लगाकर बाहर की नली को हटाना।",
    "descriptionEn": "Under X-ray guidance, a microcatheter is steered from the gallbladder through the convoluted cystic duct into the intestine. A double-pigtail plastic stent is deployed internally with one end in the gallbladder and the other in the intestine. The external tube is then removed.",
    "descriptionHi": "एक्स-रे की निगरानी में पित्त की थैली से होकर एक बारीक तार द्वारा पित्त की थैली की घुमावदार नली को पार करके आंत तक पहुंचाया जाता है। वहां दोनों तरफ छल्लेदार (डबल पिगटेल) स्टेंट छोड़ दिया जाता है। एक सिरा पित्त की थैली में और दूसरा आंत में रहता है, जिससे सारा पित्त अंदर ही अंदर बहने लगता है और बाहर की नली निकाल दी जाती है।",
    "benefitsEn": [
      "Provides an internal bypass for gallbladder drainage, allowing immediate removal of external tubes.",
      "Maintains physiological bile circulation without skin breaches.",
      "Prevents recurrent gallbladder distension and pain."
    ],
    "benefitsHi": [
      "अंदर ही अंदर पित्त के बहाव का रास्ता बनाना जिससे बाहर की नली तुरंत हटाई जा सकती है।",
      "चमड़ी पर कोई घाव या नली न रहने से सामान्य जीवन जीना।",
      "थैली में दोबारा सूजन या दर्द होने से बचाव।"
    ],
    "specificRisksEn": [
      "Cystic duct perforation during wire navigation (1-2%).",
      "Stent migration into the bowel or gallbladder over time (5-8%).",
      "Recurrent cholecystitis if the stent clogs with sludge (10-15%).",
      "Mild pancreatitis (< 2%)."
    ],
    "specificRisksHi": [
      "तार निकालते समय थैली की बारीक नली में खरोंच या छेद होना (1-2%)।",
      "कुछ समय बाद स्टेंट का खिसक जाना (5-8%)।",
      "गंदगी या कचरा जमने से स्टेंट के बंद होने पर दोबारा दर्द होना (10-15%)।",
      "पैंक्रियाज में हल्की सूजन (< 2%)।"
    ],
    "alternativesEn": "Permanent external cholecystostomy, surgical cholecystectomy, or endoscopic gallbladder stenting (EUS-GBD).",
    "alternativesHi": "हमेशा बाहर थैली लटकाए रखना, ऑपरेशन करवाना, या एंडोस्कोपी द्वारा स्टेंट डलवाना।",
    "sedationTypeEn": "Local infiltration anesthesia combined with monitored intravenous sedation.",
    "sedationTypeHi": "लोकल एनेस्थीसिया के साथ नस द्वारा दर्द निवारक एवं आरामदायक सेडेशन।"
  },
  "c3-percutaneous-transhepatic-cholangiography": {
    "id": "c3-percutaneous-transhepatic-cholangiography",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Percutaneous Transhepatic Cholangiography (PTC)",
    "nameHi": "Percutaneous Transhepatic Cholangiography (PTC) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Percutaneous Transhepatic Cholangiography (PTC).",
    "indicationHi": "Percutaneous Transhepatic Cholangiography (PTC) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Percutaneous Transhepatic Cholangiography (PTC).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Percutaneous Transhepatic Cholangiography (PTC) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-percutaneous-covered-sems-deployment-for": {
    "id": "c3-percutaneous-covered-sems-deployment-for",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Percutaneous Covered SEMS Deployment for Biliary Leaks / Strictures",
    "nameHi": "Percutaneous Covered SEMS Deployment for Biliary Leaks / Strictures (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Percutaneous Covered SEMS Deployment for Biliary Leaks / Strictures.",
    "indicationHi": "Percutaneous Covered SEMS Deployment for Biliary Leaks / Strictures (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Percutaneous Covered SEMS Deployment for Biliary Leaks / Strictures.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Percutaneous Covered SEMS Deployment for Biliary Leaks / Strictures का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-percutaneous-biodegradable-biliary-stent-implantation": {
    "id": "c3-percutaneous-biodegradable-biliary-stent-implantation",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Percutaneous Biodegradable Biliary Stent Implantation",
    "nameHi": "Percutaneous Biodegradable Biliary Stent Implantation (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Percutaneous Biodegradable Biliary Stent Implantation.",
    "indicationHi": "Percutaneous Biodegradable Biliary Stent Implantation (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Percutaneous Biodegradable Biliary Stent Implantation.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Percutaneous Biodegradable Biliary Stent Implantation का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-percutaneous-transhepatic-gallbladder-stenting": {
    "id": "c3-percutaneous-transhepatic-gallbladder-stenting",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Percutaneous Transhepatic Gallbladder Stenting",
    "nameHi": "Percutaneous Transhepatic Gallbladder Stenting (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Percutaneous Transhepatic Gallbladder Stenting.",
    "indicationHi": "Percutaneous Transhepatic Gallbladder Stenting (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Percutaneous Transhepatic Gallbladder Stenting.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Percutaneous Transhepatic Gallbladder Stenting का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-hepatic-venous-pressure-gradient-measurement": {
    "id": "c3-hepatic-venous-pressure-gradient-measurement",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Hepatic Venous Pressure Gradient (HVPG) Measurement",
    "nameHi": "Hepatic Venous Pressure Gradient (HVPG) Measurement (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Hepatic Venous Pressure Gradient (HVPG) Measurement.",
    "indicationHi": "Hepatic Venous Pressure Gradient (HVPG) Measurement (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Hepatic Venous Pressure Gradient (HVPG) Measurement.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Hepatic Venous Pressure Gradient (HVPG) Measurement का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-transjugular-intrahepatic-portosystemic-shunt-with": {
    "id": "c3-transjugular-intrahepatic-portosystemic-shunt-with",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Transjugular Intrahepatic Portosystemic Shunt (TIPS) with ePTFE Covered Stent-Graft (Viatorr)",
    "nameHi": "Transjugular Intrahepatic Portosystemic Shunt (TIPS) with ePTFE Covered Stent-Graft (Viatorr) (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Transjugular Intrahepatic Portosystemic Shunt (TIPS) with ePTFE Covered Stent-Graft (Viatorr).",
    "indicationHi": "Transjugular Intrahepatic Portosystemic Shunt (TIPS) with ePTFE Covered Stent-Graft (Viatorr) (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transjugular Intrahepatic Portosystemic Shunt (TIPS) with ePTFE Covered Stent-Graft (Viatorr).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transjugular Intrahepatic Portosystemic Shunt (TIPS) with ePTFE Covered Stent-Graft (Viatorr) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-direct-intrahepatic-portosystemic-shunt-via": {
    "id": "c3-direct-intrahepatic-portosystemic-shunt-via",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Direct Intrahepatic Portosystemic Shunt (DIPS) via Intravascular Ultrasound (IVUS) Guidance",
    "nameHi": "Direct Intrahepatic Portosystemic Shunt (DIPS) via Intravascular Ultrasound (IVUS) Guidance (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Direct Intrahepatic Portosystemic Shunt (DIPS) via Intravascular Ultrasound (IVUS) Guidance.",
    "indicationHi": "Direct Intrahepatic Portosystemic Shunt (DIPS) via Intravascular Ultrasound (IVUS) Guidance (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Direct Intrahepatic Portosystemic Shunt (DIPS) via Intravascular Ultrasound (IVUS) Guidance.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Direct Intrahepatic Portosystemic Shunt (DIPS) via Intravascular Ultrasound (IVUS) Guidance का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-transsplenic-intrahepatic-portosystemic-shunt": {
    "id": "c3-transsplenic-intrahepatic-portosystemic-shunt",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Transsplenic Intrahepatic Portosystemic Shunt",
    "nameHi": "Transsplenic Intrahepatic Portosystemic Shunt (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Transsplenic Intrahepatic Portosystemic Shunt.",
    "indicationHi": "Transsplenic Intrahepatic Portosystemic Shunt (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transsplenic Intrahepatic Portosystemic Shunt.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transsplenic Intrahepatic Portosystemic Shunt का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-parallel-tips-placement-for-refractory": {
    "id": "c3-parallel-tips-placement-for-refractory",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Parallel TIPS Placement for Refractory Ascites",
    "nameHi": "Parallel TIPS Placement for Refractory Ascites (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Parallel TIPS Placement for Refractory Ascites.",
    "indicationHi": "Parallel TIPS Placement for Refractory Ascites (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Parallel TIPS Placement for Refractory Ascites.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Parallel TIPS Placement for Refractory Ascites का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-tips-revision-percutaneous-balloon-angioplasty": {
    "id": "c3-tips-revision-percutaneous-balloon-angioplasty",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "TIPS Revision: Percutaneous Balloon Angioplasty",
    "nameHi": "TIPS Revision: Percutaneous Balloon Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for TIPS Revision: Percutaneous Balloon Angioplasty.",
    "indicationHi": "TIPS Revision: Percutaneous Balloon Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for TIPS Revision: Percutaneous Balloon Angioplasty.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा TIPS Revision: Percutaneous Balloon Angioplasty का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-tips-revision-relining-with-covered": {
    "id": "c3-tips-revision-relining-with-covered",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "TIPS Revision: Relining with Covered Stent-Graft",
    "nameHi": "TIPS Revision: Relining with Covered Stent-Graft (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for TIPS Revision: Relining with Covered Stent-Graft.",
    "indicationHi": "TIPS Revision: Relining with Covered Stent-Graft (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for TIPS Revision: Relining with Covered Stent-Graft.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा TIPS Revision: Relining with Covered Stent-Graft का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-tips-constraint-reduction-for-refractory": {
    "id": "c3-tips-constraint-reduction-for-refractory",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "TIPS Constraint / Reduction for Refractory Encephalopathy (Constricting Suture, Hourglass Stent)",
    "nameHi": "TIPS Constraint / Reduction for Refractory Encephalopathy (Constricting Suture, Hourglass Stent) (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for TIPS Constraint / Reduction for Refractory Encephalopathy (Constricting Suture, Hourglass Stent).",
    "indicationHi": "TIPS Constraint / Reduction for Refractory Encephalopathy (Constricting Suture, Hourglass Stent) (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for TIPS Constraint / Reduction for Refractory Encephalopathy (Constricting Suture, Hourglass Stent).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा TIPS Constraint / Reduction for Refractory Encephalopathy (Constricting Suture, Hourglass Stent) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-tips-occlusion-embolization-for-liver": {
    "id": "c3-tips-occlusion-embolization-for-liver",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "TIPS Occlusion / Embolization for Liver Failure",
    "nameHi": "TIPS Occlusion / Embolization for Liver Failure (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for TIPS Occlusion / Embolization for Liver Failure.",
    "indicationHi": "TIPS Occlusion / Embolization for Liver Failure (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for TIPS Occlusion / Embolization for Liver Failure.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा TIPS Occlusion / Embolization for Liver Failure का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-transjugular-balloon-angioplasty-of-hepatic": {
    "id": "c3-transjugular-balloon-angioplasty-of-hepatic",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Transjugular Balloon Angioplasty of Hepatic Vein Web (Budd-Chiari Syndrome)",
    "nameHi": "Transjugular Balloon Angioplasty of Hepatic Vein Web (Budd-Chiari Syndrome) (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Transjugular Balloon Angioplasty of Hepatic Vein Web (Budd-Chiari Syndrome).",
    "indicationHi": "Transjugular Balloon Angioplasty of Hepatic Vein Web (Budd-Chiari Syndrome) (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transjugular Balloon Angioplasty of Hepatic Vein Web (Budd-Chiari Syndrome).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transjugular Balloon Angioplasty of Hepatic Vein Web (Budd-Chiari Syndrome) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-transjugular-transfemoral-hepatic-vein-stenting": {
    "id": "c3-transjugular-transfemoral-hepatic-vein-stenting",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Transjugular / Transfemoral Hepatic Vein Stenting for Budd-Chiari Syndrome",
    "nameHi": "Transjugular / Transfemoral Hepatic Vein Stenting for Budd-Chiari Syndrome (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Transjugular / Transfemoral Hepatic Vein Stenting for Budd-Chiari Syndrome.",
    "indicationHi": "Transjugular / Transfemoral Hepatic Vein Stenting for Budd-Chiari Syndrome (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transjugular / Transfemoral Hepatic Vein Stenting for Budd-Chiari Syndrome.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transjugular / Transfemoral Hepatic Vein Stenting for Budd-Chiari Syndrome का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-ivc-stenting-for-budd-chiari": {
    "id": "c3-ivc-stenting-for-budd-chiari",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "IVC Stenting for Budd-Chiari Syndrome",
    "nameHi": "IVC Stenting for Budd-Chiari Syndrome (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for IVC Stenting for Budd-Chiari Syndrome.",
    "indicationHi": "IVC Stenting for Budd-Chiari Syndrome (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for IVC Stenting for Budd-Chiari Syndrome.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा IVC Stenting for Budd-Chiari Syndrome का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-combined-transhepatic-and-transjugular-recanalization": {
    "id": "c3-combined-transhepatic-and-transjugular-recanalization",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Combined Transhepatic and Transjugular Recanalization of Budd-Chiari Occlusion",
    "nameHi": "Combined Transhepatic and Transjugular Recanalization of Budd-Chiari Occlusion (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Combined Transhepatic and Transjugular Recanalization of Budd-Chiari Occlusion.",
    "indicationHi": "Combined Transhepatic and Transjugular Recanalization of Budd-Chiari Occlusion (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Combined Transhepatic and Transjugular Recanalization of Budd-Chiari Occlusion.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Combined Transhepatic and Transjugular Recanalization of Budd-Chiari Occlusion का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-meso-caval-stent-shunt-creation": {
    "id": "c3-meso-caval-stent-shunt-creation",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Meso-Caval Stent-Shunt Creation in Chronic Budd-Chiari Syndrome",
    "nameHi": "Meso-Caval Stent-Shunt Creation in Chronic Budd-Chiari Syndrome (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Meso-Caval Stent-Shunt Creation in Chronic Budd-Chiari Syndrome.",
    "indicationHi": "Meso-Caval Stent-Shunt Creation in Chronic Budd-Chiari Syndrome (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Meso-Caval Stent-Shunt Creation in Chronic Budd-Chiari Syndrome.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Meso-Caval Stent-Shunt Creation in Chronic Budd-Chiari Syndrome का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-balloon-occluded-retrograde-transvenous-obliteration": {
    "id": "c3-balloon-occluded-retrograde-transvenous-obliteration",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Balloon-Occluded Retrograde Transvenous Obliteration (BRTO) of Gastric Varices",
    "nameHi": "Balloon-Occluded Retrograde Transvenous Obliteration (BRTO) of Gastric Varices (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Balloon-Occluded Retrograde Transvenous Obliteration (BRTO) of Gastric Varices.",
    "indicationHi": "Balloon-Occluded Retrograde Transvenous Obliteration (BRTO) of Gastric Varices (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Balloon-Occluded Retrograde Transvenous Obliteration (BRTO) of Gastric Varices.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Balloon-Occluded Retrograde Transvenous Obliteration (BRTO) of Gastric Varices का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-plug-assisted-retrograde-transvenous-obliteration": {
    "id": "c3-plug-assisted-retrograde-transvenous-obliteration",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Plug-Assisted Retrograde Transvenous Obliteration (PARTO)",
    "nameHi": "Plug-Assisted Retrograde Transvenous Obliteration (PARTO) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Plug-Assisted Retrograde Transvenous Obliteration (PARTO).",
    "indicationHi": "Plug-Assisted Retrograde Transvenous Obliteration (PARTO) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Plug-Assisted Retrograde Transvenous Obliteration (PARTO).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Plug-Assisted Retrograde Transvenous Obliteration (PARTO) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-coil-assisted-retrograde-transvenous-obliteration": {
    "id": "c3-coil-assisted-retrograde-transvenous-obliteration",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Coil-Assisted Retrograde Transvenous Obliteration (CARTO)",
    "nameHi": "Coil-Assisted Retrograde Transvenous Obliteration (CARTO) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Coil-Assisted Retrograde Transvenous Obliteration (CARTO).",
    "indicationHi": "Coil-Assisted Retrograde Transvenous Obliteration (CARTO) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Coil-Assisted Retrograde Transvenous Obliteration (CARTO).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Coil-Assisted Retrograde Transvenous Obliteration (CARTO) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-vascular-plug-and-gelatin-sponge": {
    "id": "c3-vascular-plug-and-gelatin-sponge",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Vascular Plug and Gelatin Sponge-Assisted Retrograde Transvenous Obliteration (PTO / CARTO-II)",
    "nameHi": "Vascular Plug and Gelatin Sponge-Assisted Retrograde Transvenous Obliteration (PTO / CARTO-II) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Vascular Plug and Gelatin Sponge-Assisted Retrograde Transvenous Obliteration (PTO / CARTO-II).",
    "indicationHi": "Vascular Plug and Gelatin Sponge-Assisted Retrograde Transvenous Obliteration (PTO / CARTO-II) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Vascular Plug and Gelatin Sponge-Assisted Retrograde Transvenous Obliteration (PTO / CARTO-II).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Vascular Plug and Gelatin Sponge-Assisted Retrograde Transvenous Obliteration (PTO / CARTO-II) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-balloon-occluded-antegrade-transvenous-obliteration": {
    "id": "c3-balloon-occluded-antegrade-transvenous-obliteration",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Balloon-Occluded Antegrade Transvenous Obliteration (BATO)",
    "nameHi": "Balloon-Occluded Antegrade Transvenous Obliteration (BATO) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Balloon-Occluded Antegrade Transvenous Obliteration (BATO).",
    "indicationHi": "Balloon-Occluded Antegrade Transvenous Obliteration (BATO) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Balloon-Occluded Antegrade Transvenous Obliteration (BATO).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Balloon-Occluded Antegrade Transvenous Obliteration (BATO) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-percutaneous-transhepatic-obliteration-variceal-embolization": {
    "id": "c3-percutaneous-transhepatic-obliteration-variceal-embolization",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Percutaneous Transhepatic Obliteration (PTO) / Variceal Embolization",
    "nameHi": "Percutaneous Transhepatic Obliteration (PTO) / Variceal Embolization (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Percutaneous Transhepatic Obliteration (PTO) / Variceal Embolization.",
    "indicationHi": "Percutaneous Transhepatic Obliteration (PTO) / Variceal Embolization (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Percutaneous Transhepatic Obliteration (PTO) / Variceal Embolization.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Percutaneous Transhepatic Obliteration (PTO) / Variceal Embolization का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-percutaneous-transsplenic-variceal-embolization": {
    "id": "c3-percutaneous-transsplenic-variceal-embolization",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Percutaneous Transsplenic Variceal Embolization",
    "nameHi": "Percutaneous Transsplenic Variceal Embolization (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Percutaneous Transsplenic Variceal Embolization.",
    "indicationHi": "Percutaneous Transsplenic Variceal Embolization (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Percutaneous Transsplenic Variceal Embolization.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Percutaneous Transsplenic Variceal Embolization का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-transumbilical-vein-recanalization-and-variceal": {
    "id": "c3-transumbilical-vein-recanalization-and-variceal",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Transumbilical Vein Recanalization and Variceal Embolization",
    "nameHi": "Transumbilical Vein Recanalization and Variceal Embolization (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Transumbilical Vein Recanalization and Variceal Embolization.",
    "indicationHi": "Transumbilical Vein Recanalization and Variceal Embolization (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transumbilical Vein Recanalization and Variceal Embolization.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transumbilical Vein Recanalization and Variceal Embolization का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-combined-hepatic-vein-deprivation-simultaneous": {
    "id": "c3-combined-hepatic-vein-deprivation-simultaneous",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Combined Hepatic Vein Deprivation (HVD) / Simultaneous PVE and Hepatic Vein Embolization",
    "nameHi": "Combined Hepatic Vein Deprivation (HVD) / Simultaneous PVE and Hepatic Vein Embolization (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Combined Hepatic Vein Deprivation (HVD) / Simultaneous PVE and Hepatic Vein Embolization.",
    "indicationHi": "Combined Hepatic Vein Deprivation (HVD) / Simultaneous PVE and Hepatic Vein Embolization (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Combined Hepatic Vein Deprivation (HVD) / Simultaneous PVE and Hepatic Vein Embolization.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Combined Hepatic Vein Deprivation (HVD) / Simultaneous PVE and Hepatic Vein Embolization का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c3-percutaneous-transhepatic-portal-vein-recanalization": {
    "id": "c3-percutaneous-transhepatic-portal-vein-recanalization",
    "category": "Hepato-Pancreato-Biliary (HPB) & Portal Hypertension Interventions",
    "nameEn": "Percutaneous Transhepatic Portal Vein Recanalization and Stenting",
    "nameHi": "Percutaneous Transhepatic Portal Vein Recanalization and Stenting (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Percutaneous Transhepatic Portal Vein Recanalization and Stenting.",
    "indicationHi": "Percutaneous Transhepatic Portal Vein Recanalization and Stenting (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Percutaneous Transhepatic Portal Vein Recanalization and Stenting.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Percutaneous Transhepatic Portal Vein Recanalization and Stenting का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Monitored anesthesia care (MAC) with deep conscious sedation or General Anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा अथवा बेहोशी (General Anesthesia) विशेषज्ञ डॉक्टर की देखरेख में।"
  },
  "c4-diagnostic-pelvic-and-lower-extremity": {
    "id": "c4-diagnostic-pelvic-and-lower-extremity",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Diagnostic Pelvic and Lower Extremity Runoff Angiography",
    "nameHi": "Diagnostic Pelvic and Lower Extremity Runoff Angiography (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Diagnostic Pelvic and Lower Extremity Runoff Angiography.",
    "indicationHi": "Diagnostic Pelvic and Lower Extremity Runoff Angiography (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Diagnostic Pelvic and Lower Extremity Runoff Angiography.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Diagnostic Pelvic and Lower Extremity Runoff Angiography का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-common-iliac-artery-balloon-angioplasty": {
    "id": "c4-common-iliac-artery-balloon-angioplasty",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Common Iliac Artery (CIA) Balloon Angioplasty",
    "nameHi": "Common Iliac Artery (CIA) Balloon Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Common Iliac Artery (CIA) Balloon Angioplasty.",
    "indicationHi": "Common Iliac Artery (CIA) Balloon Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Common Iliac Artery (CIA) Balloon Angioplasty.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Common Iliac Artery (CIA) Balloon Angioplasty का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-common-iliac-artery-stenting": {
    "id": "c4-common-iliac-artery-stenting",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Common Iliac Artery Stenting (Bare Metal / Covered)",
    "nameHi": "Common Iliac Artery Stenting (Bare Metal / Covered) (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Common Iliac Artery Stenting (Bare Metal / Covered).",
    "indicationHi": "Common Iliac Artery Stenting (Bare Metal / Covered) (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Common Iliac Artery Stenting (Bare Metal / Covered).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Common Iliac Artery Stenting (Bare Metal / Covered) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-external-iliac-artery-angioplasty-and": {
    "id": "c4-external-iliac-artery-angioplasty-and",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "External Iliac Artery (EIA) Angioplasty and Stenting",
    "nameHi": "External Iliac Artery (EIA) Angioplasty and Stenting (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for External Iliac Artery (EIA) Angioplasty and Stenting.",
    "indicationHi": "External Iliac Artery (EIA) Angioplasty and Stenting (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for External Iliac Artery (EIA) Angioplasty and Stenting.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा External Iliac Artery (EIA) Angioplasty and Stenting का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-covered-endovascular-reconstruction-of-aortic": {
    "id": "c4-covered-endovascular-reconstruction-of-aortic",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB Technique)",
    "nameHi": "Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB Technique) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB Technique).",
    "indicationHi": "Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB Technique) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB Technique).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB Technique) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-common-femoral-artery-percutaneous-lithotripsy": {
    "id": "c4-common-femoral-artery-percutaneous-lithotripsy",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Common Femoral Artery (CFA) Percutaneous Lithotripsy and Stenting",
    "nameHi": "Common Femoral Artery (CFA) Percutaneous Lithotripsy and Stenting (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Common Femoral Artery (CFA) Percutaneous Lithotripsy and Stenting.",
    "indicationHi": "Common Femoral Artery (CFA) Percutaneous Lithotripsy and Stenting (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Common Femoral Artery (CFA) Percutaneous Lithotripsy and Stenting.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Common Femoral Artery (CFA) Percutaneous Lithotripsy and Stenting का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-superficial-femoral-artery-plain-old": {
    "id": "c4-superficial-femoral-artery-plain-old",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Superficial Femoral Artery (SFA) Plain Old Balloon Angioplasty (POBA)",
    "nameHi": "Superficial Femoral Artery (SFA) Plain Old Balloon Angioplasty (POBA) (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Superficial Femoral Artery (SFA) Plain Old Balloon Angioplasty (POBA).",
    "indicationHi": "Superficial Femoral Artery (SFA) Plain Old Balloon Angioplasty (POBA) (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Superficial Femoral Artery (SFA) Plain Old Balloon Angioplasty (POBA).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Superficial Femoral Artery (SFA) Plain Old Balloon Angioplasty (POBA) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-sfa-drug-coated-balloon-angioplasty": {
    "id": "c4-sfa-drug-coated-balloon-angioplasty",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "SFA Drug-Coated Balloon (DCB) Angioplasty",
    "nameHi": "SFA Drug-Coated Balloon (DCB) Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for SFA Drug-Coated Balloon (DCB) Angioplasty.",
    "indicationHi": "SFA Drug-Coated Balloon (DCB) Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for SFA Drug-Coated Balloon (DCB) Angioplasty.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा SFA Drug-Coated Balloon (DCB) Angioplasty का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-sfa-bare-metal-nitinol-stent": {
    "id": "c4-sfa-bare-metal-nitinol-stent",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "SFA Bare-Metal Nitinol Stent Deployment",
    "nameHi": "SFA Bare-Metal Nitinol Stent Deployment (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for SFA Bare-Metal Nitinol Stent Deployment.",
    "indicationHi": "SFA Bare-Metal Nitinol Stent Deployment (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for SFA Bare-Metal Nitinol Stent Deployment.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा SFA Bare-Metal Nitinol Stent Deployment का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-sfa-drug-eluting-stent-implantation": {
    "id": "c4-sfa-drug-eluting-stent-implantation",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "SFA Drug-Eluting Stent (DES) Implantation",
    "nameHi": "SFA Drug-Eluting Stent (DES) Implantation (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for SFA Drug-Eluting Stent (DES) Implantation.",
    "indicationHi": "SFA Drug-Eluting Stent (DES) Implantation (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for SFA Drug-Eluting Stent (DES) Implantation.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा SFA Drug-Eluting Stent (DES) Implantation का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-sfa-covered-stent-graft-placement": {
    "id": "c4-sfa-covered-stent-graft-placement",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "SFA Covered Stent-Graft Placement (Viabahn)",
    "nameHi": "SFA Covered Stent-Graft Placement (Viabahn) (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for SFA Covered Stent-Graft Placement (Viabahn).",
    "indicationHi": "SFA Covered Stent-Graft Placement (Viabahn) (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for SFA Covered Stent-Graft Placement (Viabahn).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा SFA Covered Stent-Graft Placement (Viabahn) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-popliteal-artery-intermittent-claudication-ppa": {
    "id": "c4-popliteal-artery-intermittent-claudication-ppa",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Popliteal Artery Intermittent Claudication / PPA Plain Balloon Angioplasty",
    "nameHi": "Popliteal Artery Intermittent Claudication / PPA Plain Balloon Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Popliteal Artery Intermittent Claudication / PPA Plain Balloon Angioplasty.",
    "indicationHi": "Popliteal Artery Intermittent Claudication / PPA Plain Balloon Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Popliteal Artery Intermittent Claudication / PPA Plain Balloon Angioplasty.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Popliteal Artery Intermittent Claudication / PPA Plain Balloon Angioplasty का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-popliteal-interwoven-nitinol-stent-implantation": {
    "id": "c4-popliteal-interwoven-nitinol-stent-implantation",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Popliteal Interwoven Nitinol Stent (Supera) Implantation",
    "nameHi": "Popliteal Interwoven Nitinol Stent (Supera) Implantation (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Popliteal Interwoven Nitinol Stent (Supera) Implantation.",
    "indicationHi": "Popliteal Interwoven Nitinol Stent (Supera) Implantation (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Popliteal Interwoven Nitinol Stent (Supera) Implantation.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Popliteal Interwoven Nitinol Stent (Supera) Implantation का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-tibioperoneal-trunk-balloon-angioplasty": {
    "id": "c4-tibioperoneal-trunk-balloon-angioplasty",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Tibioperoneal Trunk Balloon Angioplasty",
    "nameHi": "Tibioperoneal Trunk Balloon Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Tibioperoneal Trunk Balloon Angioplasty.",
    "indicationHi": "Tibioperoneal Trunk Balloon Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Tibioperoneal Trunk Balloon Angioplasty.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Tibioperoneal Trunk Balloon Angioplasty का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-anterior-tibial-artery-plain-and": {
    "id": "c4-anterior-tibial-artery-plain-and",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Anterior Tibial Artery (ATA) Plain and Drug-Coated Balloon Angioplasty",
    "nameHi": "Anterior Tibial Artery (ATA) Plain and Drug-Coated Balloon Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Anterior Tibial Artery (ATA) Plain and Drug-Coated Balloon Angioplasty.",
    "indicationHi": "Anterior Tibial Artery (ATA) Plain and Drug-Coated Balloon Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Anterior Tibial Artery (ATA) Plain and Drug-Coated Balloon Angioplasty.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Anterior Tibial Artery (ATA) Plain and Drug-Coated Balloon Angioplasty का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-posterior-tibial-artery-angioplasty": {
    "id": "c4-posterior-tibial-artery-angioplasty",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Posterior Tibial Artery (PTA) Angioplasty",
    "nameHi": "Posterior Tibial Artery (PTA) Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Posterior Tibial Artery (PTA) Angioplasty.",
    "indicationHi": "Posterior Tibial Artery (PTA) Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Posterior Tibial Artery (PTA) Angioplasty.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Posterior Tibial Artery (PTA) Angioplasty का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-peroneal-artery-angioplasty": {
    "id": "c4-peroneal-artery-angioplasty",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Peroneal Artery Angioplasty",
    "nameHi": "Peroneal Artery Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Peroneal Artery Angioplasty.",
    "indicationHi": "Peroneal Artery Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Peroneal Artery Angioplasty.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Peroneal Artery Angioplasty का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-deep-plantar-arch-dorsalis-pedis": {
    "id": "c4-deep-plantar-arch-dorsalis-pedis",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Deep Plantar Arch / Dorsalis Pedis Angioplasty",
    "nameHi": "Deep Plantar Arch / Dorsalis Pedis Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Deep Plantar Arch / Dorsalis Pedis Angioplasty.",
    "indicationHi": "Deep Plantar Arch / Dorsalis Pedis Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Deep Plantar Arch / Dorsalis Pedis Angioplasty.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Deep Plantar Arch / Dorsalis Pedis Angioplasty का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-transcollateral-plantar-arch-revascularization": {
    "id": "c4-transcollateral-plantar-arch-revascularization",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Transcollateral / Plantar Arch Revascularization",
    "nameHi": "Transcollateral / Plantar Arch Revascularization (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Transcollateral / Plantar Arch Revascularization.",
    "indicationHi": "Transcollateral / Plantar Arch Revascularization (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transcollateral / Plantar Arch Revascularization.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transcollateral / Plantar Arch Revascularization का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-retrograde-transpedal-distal-puncture-and": {
    "id": "c4-retrograde-transpedal-distal-puncture-and",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Retrograde Transpedal / Distal Puncture and Revascularization",
    "nameHi": "Retrograde Transpedal / Distal Puncture and Revascularization (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Retrograde Transpedal / Distal Puncture and Revascularization.",
    "indicationHi": "Retrograde Transpedal / Distal Puncture and Revascularization (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Retrograde Transpedal / Distal Puncture and Revascularization.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Retrograde Transpedal / Distal Puncture and Revascularization का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-transiliac-crossover-up-and-over": {
    "id": "c4-transiliac-crossover-up-and-over",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Transiliac Crossover / Up-and-Over Femoral Recanalization",
    "nameHi": "Transiliac Crossover / Up-and-Over Femoral Recanalization (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Transiliac Crossover / Up-and-Over Femoral Recanalization.",
    "indicationHi": "Transiliac Crossover / Up-and-Over Femoral Recanalization (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transiliac Crossover / Up-and-Over Femoral Recanalization.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transiliac Crossover / Up-and-Over Femoral Recanalization का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-subintimal-arterial-flossing-with-antegrade": {
    "id": "c4-subintimal-arterial-flossing-with-antegrade",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Subintimal Arterial Flossing with Antegrade-Retrograde Intervention (SAFARI Technique)",
    "nameHi": "Subintimal Arterial Flossing with Antegrade-Retrograde Intervention (SAFARI Technique) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Subintimal Arterial Flossing with Antegrade-Retrograde Intervention (SAFARI Technique).",
    "indicationHi": "Subintimal Arterial Flossing with Antegrade-Retrograde Intervention (SAFARI Technique) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Subintimal Arterial Flossing with Antegrade-Retrograde Intervention (SAFARI Technique).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Subintimal Arterial Flossing with Antegrade-Retrograde Intervention (SAFARI Technique) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-percutaneous-deep-vein-arterialization": {
    "id": "c4-percutaneous-deep-vein-arterialization",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Percutaneous Deep Vein Arterialization (pDVA / LimFlow System)",
    "nameHi": "Percutaneous Deep Vein Arterialization (pDVA / LimFlow System) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Percutaneous Deep Vein Arterialization (pDVA / LimFlow System).",
    "indicationHi": "Percutaneous Deep Vein Arterialization (pDVA / LimFlow System) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Percutaneous Deep Vein Arterialization (pDVA / LimFlow System).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Percutaneous Deep Vein Arterialization (pDVA / LimFlow System) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-rotational-mechanical-atherectomy": {
    "id": "c4-rotational-mechanical-atherectomy",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Rotational Mechanical Atherectomy (Rotarex / Jetstream)",
    "nameHi": "Rotational Mechanical Atherectomy (Rotarex / Jetstream) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Rotational Mechanical Atherectomy (Rotarex / Jetstream).",
    "indicationHi": "Rotational Mechanical Atherectomy (Rotarex / Jetstream) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Rotational Mechanical Atherectomy (Rotarex / Jetstream).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Rotational Mechanical Atherectomy (Rotarex / Jetstream) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-directional-atherectomy": {
    "id": "c4-directional-atherectomy",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Directional Atherectomy (HawkOne / TurboHawk)",
    "nameHi": "Directional Atherectomy (HawkOne / TurboHawk) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Directional Atherectomy (HawkOne / TurboHawk).",
    "indicationHi": "Directional Atherectomy (HawkOne / TurboHawk) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Directional Atherectomy (HawkOne / TurboHawk).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Directional Atherectomy (HawkOne / TurboHawk) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-orbital-atherectomy": {
    "id": "c4-orbital-atherectomy",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Orbital Atherectomy (Diamondback 360)",
    "nameHi": "Orbital Atherectomy (Diamondback 360) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Orbital Atherectomy (Diamondback 360).",
    "indicationHi": "Orbital Atherectomy (Diamondback 360) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Orbital Atherectomy (Diamondback 360).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Orbital Atherectomy (Diamondback 360) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-laser-atherectomy": {
    "id": "c4-laser-atherectomy",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Laser Atherectomy (Spectranetics Turbo-Elite Excimer Laser)",
    "nameHi": "Laser Atherectomy (Spectranetics Turbo-Elite Excimer Laser) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Laser Atherectomy (Spectranetics Turbo-Elite Excimer Laser).",
    "indicationHi": "Laser Atherectomy (Spectranetics Turbo-Elite Excimer Laser) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Laser Atherectomy (Spectranetics Turbo-Elite Excimer Laser).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Laser Atherectomy (Spectranetics Turbo-Elite Excimer Laser) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-peripheral-intravascular-lithotripsy": {
    "id": "c4-peripheral-intravascular-lithotripsy",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Peripheral Intravascular Lithotripsy (IVL / Shockwave Medical)",
    "nameHi": "Peripheral Intravascular Lithotripsy (IVL / Shockwave Medical) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Peripheral Intravascular Lithotripsy (IVL / Shockwave Medical).",
    "indicationHi": "Peripheral Intravascular Lithotripsy (IVL / Shockwave Medical) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Peripheral Intravascular Lithotripsy (IVL / Shockwave Medical).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Peripheral Intravascular Lithotripsy (IVL / Shockwave Medical) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-catheter-directed-thrombolysis-for-acute": {
    "id": "c4-catheter-directed-thrombolysis-for-acute",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Catheter-Directed Thrombolysis (CDT) for Acute Limb Ischemia (rtPA / Urokinase)",
    "nameHi": "Catheter-Directed Thrombolysis (CDT) for Acute Limb Ischemia (rtPA / Urokinase) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Catheter-Directed Thrombolysis (CDT) for Acute Limb Ischemia (rtPA / Urokinase).",
    "indicationHi": "Catheter-Directed Thrombolysis (CDT) for Acute Limb Ischemia (rtPA / Urokinase) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Catheter-Directed Thrombolysis (CDT) for Acute Limb Ischemia (rtPA / Urokinase).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Catheter-Directed Thrombolysis (CDT) for Acute Limb Ischemia (rtPA / Urokinase) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-continuous-pulse-spray-catheter-directed": {
    "id": "c4-continuous-pulse-spray-catheter-directed",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Continuous Pulse-Spray Catheter-Directed Thrombolysis",
    "nameHi": "Continuous Pulse-Spray Catheter-Directed Thrombolysis (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Continuous Pulse-Spray Catheter-Directed Thrombolysis.",
    "indicationHi": "Continuous Pulse-Spray Catheter-Directed Thrombolysis (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Continuous Pulse-Spray Catheter-Directed Thrombolysis.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Continuous Pulse-Spray Catheter-Directed Thrombolysis का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-hydrodynamic-thrombectomy-for-peripheral-arterial": {
    "id": "c4-hydrodynamic-thrombectomy-for-peripheral-arterial",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Hydrodynamic Thrombectomy (AngioJet) for Peripheral Arterial Occlusion",
    "nameHi": "Hydrodynamic Thrombectomy (AngioJet) for Peripheral Arterial Occlusion (थ्रोम्बेक्टोमी (खून का थक्का निकालना))",
    "indicationEn": "Management and definitive therapeutic intervention for Hydrodynamic Thrombectomy (AngioJet) for Peripheral Arterial Occlusion.",
    "indicationHi": "Hydrodynamic Thrombectomy (AngioJet) for Peripheral Arterial Occlusion (थ्रोम्बेक्टोमी (खून का थक्का निकालना)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Hydrodynamic Thrombectomy (AngioJet) for Peripheral Arterial Occlusion.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Hydrodynamic Thrombectomy (AngioJet) for Peripheral Arterial Occlusion का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-continuous-aspiration-thrombectomy-for-ali": {
    "id": "c4-continuous-aspiration-thrombectomy-for-ali",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Continuous Aspiration Thrombectomy (Penumbra Indigo Lightning 7/12) for ALI",
    "nameHi": "Continuous Aspiration Thrombectomy (Penumbra Indigo Lightning 7/12) for ALI (थ्रोम्बेक्टोमी (खून का थक्का निकालना))",
    "indicationEn": "Management and definitive therapeutic intervention for Continuous Aspiration Thrombectomy (Penumbra Indigo Lightning 7/12) for ALI.",
    "indicationHi": "Continuous Aspiration Thrombectomy (Penumbra Indigo Lightning 7/12) for ALI (थ्रोम्बेक्टोमी (खून का थक्का निकालना)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Continuous Aspiration Thrombectomy (Penumbra Indigo Lightning 7/12) for ALI.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Continuous Aspiration Thrombectomy (Penumbra Indigo Lightning 7/12) for ALI का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-subclavian-artery-balloon-angioplasty-and": {
    "id": "c4-subclavian-artery-balloon-angioplasty-and",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Subclavian Artery Balloon Angioplasty and Stenting",
    "nameHi": "Subclavian Artery Balloon Angioplasty and Stenting (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Subclavian Artery Balloon Angioplasty and Stenting.",
    "indicationHi": "Subclavian Artery Balloon Angioplasty and Stenting (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Subclavian Artery Balloon Angioplasty and Stenting.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Subclavian Artery Balloon Angioplasty and Stenting का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-axillary-artery-angioplasty-and-stent": {
    "id": "c4-axillary-artery-angioplasty-and-stent",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Axillary Artery Angioplasty and Stent-Graft Placement",
    "nameHi": "Axillary Artery Angioplasty and Stent-Graft Placement (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Axillary Artery Angioplasty and Stent-Graft Placement.",
    "indicationHi": "Axillary Artery Angioplasty and Stent-Graft Placement (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Axillary Artery Angioplasty and Stent-Graft Placement.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Axillary Artery Angioplasty and Stent-Graft Placement का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-brachial-artery-thrombectomy-angioplasty": {
    "id": "c4-brachial-artery-thrombectomy-angioplasty",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Brachial Artery Thrombectomy / Angioplasty",
    "nameHi": "Brachial Artery Thrombectomy / Angioplasty (थ्रोम्बेक्टोमी (खून का थक्का निकालना))",
    "indicationEn": "Management and definitive therapeutic intervention for Brachial Artery Thrombectomy / Angioplasty.",
    "indicationHi": "Brachial Artery Thrombectomy / Angioplasty (थ्रोम्बेक्टोमी (खून का थक्का निकालना)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Brachial Artery Thrombectomy / Angioplasty.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Brachial Artery Thrombectomy / Angioplasty का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-radial-artery-spasmolysis-and-recanalization": {
    "id": "c4-radial-artery-spasmolysis-and-recanalization",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Radial Artery Spasmolysis and Recanalization",
    "nameHi": "Radial Artery Spasmolysis and Recanalization (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Radial Artery Spasmolysis and Recanalization.",
    "indicationHi": "Radial Artery Spasmolysis and Recanalization (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Radial Artery Spasmolysis and Recanalization.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Radial Artery Spasmolysis and Recanalization का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-hypothenar-hammer-syndrome-microvascular-recanalization": {
    "id": "c4-hypothenar-hammer-syndrome-microvascular-recanalization",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Hypothenar Hammer Syndrome Microvascular Recanalization and Embolization",
    "nameHi": "Hypothenar Hammer Syndrome Microvascular Recanalization and Embolization (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Hypothenar Hammer Syndrome Microvascular Recanalization and Embolization.",
    "indicationHi": "Hypothenar Hammer Syndrome Microvascular Recanalization and Embolization (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Hypothenar Hammer Syndrome Microvascular Recanalization and Embolization.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Hypothenar Hammer Syndrome Microvascular Recanalization and Embolization का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c4-tibial-pedal-retrograde-puncture-for": {
    "id": "c4-tibial-pedal-retrograde-puncture-for",
    "category": "Vascular: Arterial Revascularization & Limb Salvage",
    "nameEn": "Tibial / Pedal Retrograde Puncture for CLI Limb Salvage",
    "nameHi": "Tibial / Pedal Retrograde Puncture for CLI Limb Salvage (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Tibial / Pedal Retrograde Puncture for CLI Limb Salvage.",
    "indicationHi": "Tibial / Pedal Retrograde Puncture for CLI Limb Salvage (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Tibial / Pedal Retrograde Puncture for CLI Limb Salvage.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Tibial / Pedal Retrograde Puncture for CLI Limb Salvage का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c5-thoracic-endovascular-aortic-repair-for": {
    "id": "c5-thoracic-endovascular-aortic-repair-for",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aneurysm",
    "nameHi": "Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aneurysm (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aneurysm.",
    "indicationHi": "Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aneurysm (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aneurysm.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aneurysm का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-tevar-for-type-b-aortic": {
    "id": "c5-tevar-for-type-b-aortic",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "TEVAR for Type B Aortic Dissection (Complicated Acute / Subacute)",
    "nameHi": "TEVAR for Type B Aortic Dissection (Complicated Acute / Subacute) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for TEVAR for Type B Aortic Dissection (Complicated Acute / Subacute).",
    "indicationHi": "TEVAR for Type B Aortic Dissection (Complicated Acute / Subacute) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for TEVAR for Type B Aortic Dissection (Complicated Acute / Subacute).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा TEVAR for Type B Aortic Dissection (Complicated Acute / Subacute) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-tevar-for-traumatic-aortic-transection": {
    "id": "c5-tevar-for-traumatic-aortic-transection",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "TEVAR for Traumatic Aortic Transection (Blunt Thoracic Aortic Injury)",
    "nameHi": "TEVAR for Traumatic Aortic Transection (Blunt Thoracic Aortic Injury) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for TEVAR for Traumatic Aortic Transection (Blunt Thoracic Aortic Injury).",
    "indicationHi": "TEVAR for Traumatic Aortic Transection (Blunt Thoracic Aortic Injury) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for TEVAR for Traumatic Aortic Transection (Blunt Thoracic Aortic Injury).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा TEVAR for Traumatic Aortic Transection (Blunt Thoracic Aortic Injury) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-distal-bare-stent-extension-for": {
    "id": "c5-distal-bare-stent-extension-for",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Distal Bare-Stent Extension (PETTICOAT Technique) for Aortic Dissection",
    "nameHi": "Distal Bare-Stent Extension (PETTICOAT Technique) for Aortic Dissection (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Distal Bare-Stent Extension (PETTICOAT Technique) for Aortic Dissection.",
    "indicationHi": "Distal Bare-Stent Extension (PETTICOAT Technique) for Aortic Dissection (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Distal Bare-Stent Extension (PETTICOAT Technique) for Aortic Dissection.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Distal Bare-Stent Extension (PETTICOAT Technique) for Aortic Dissection का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-stent-assisted-balloon-induced-intimal": {
    "id": "c5-stent-assisted-balloon-induced-intimal",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Stent-Assisted Balloon-Induced Intimal Disruption and Relamination (STABILISE Technique)",
    "nameHi": "Stent-Assisted Balloon-Induced Intimal Disruption and Relamination (STABILISE Technique) (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Stent-Assisted Balloon-Induced Intimal Disruption and Relamination (STABILISE Technique).",
    "indicationHi": "Stent-Assisted Balloon-Induced Intimal Disruption and Relamination (STABILISE Technique) (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Stent-Assisted Balloon-Induced Intimal Disruption and Relamination (STABILISE Technique).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Stent-Assisted Balloon-Induced Intimal Disruption and Relamination (STABILISE Technique) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-tevar-with-chimney-snorkel-periscope": {
    "id": "c5-tevar-with-chimney-snorkel-periscope",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "TEVAR with Chimney / Snorkel / Periscope Technique (Ch-TEVAR)",
    "nameHi": "TEVAR with Chimney / Snorkel / Periscope Technique (Ch-TEVAR) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for TEVAR with Chimney / Snorkel / Periscope Technique (Ch-TEVAR).",
    "indicationHi": "TEVAR with Chimney / Snorkel / Periscope Technique (Ch-TEVAR) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for TEVAR with Chimney / Snorkel / Periscope Technique (Ch-TEVAR).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा TEVAR with Chimney / Snorkel / Periscope Technique (Ch-TEVAR) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-fenestrated-tevar": {
    "id": "c5-fenestrated-tevar",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Fenestrated TEVAR (FTEVAR)",
    "nameHi": "Fenestrated TEVAR (FTEVAR) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Fenestrated TEVAR (FTEVAR).",
    "indicationHi": "Fenestrated TEVAR (FTEVAR) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Fenestrated TEVAR (FTEVAR).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Fenestrated TEVAR (FTEVAR) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-branched-tevar-for-aortic-arch": {
    "id": "c5-branched-tevar-for-aortic-arch",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Branched TEVAR (BTEVAR) for Aortic Arch Aneurysms",
    "nameHi": "Branched TEVAR (BTEVAR) for Aortic Arch Aneurysms (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Branched TEVAR (BTEVAR) for Aortic Arch Aneurysms.",
    "indicationHi": "Branched TEVAR (BTEVAR) for Aortic Arch Aneurysms (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Branched TEVAR (BTEVAR) for Aortic Arch Aneurysms.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Branched TEVAR (BTEVAR) for Aortic Arch Aneurysms का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-in-situ-laser-fenestration-of": {
    "id": "c5-in-situ-laser-fenestration-of",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "In Situ Laser Fenestration (ISLF) of Aortic Arch Branch Endografts",
    "nameHi": "In Situ Laser Fenestration (ISLF) of Aortic Arch Branch Endografts (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for In Situ Laser Fenestration (ISLF) of Aortic Arch Branch Endografts.",
    "indicationHi": "In Situ Laser Fenestration (ISLF) of Aortic Arch Branch Endografts (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for In Situ Laser Fenestration (ISLF) of Aortic Arch Branch Endografts.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा In Situ Laser Fenestration (ISLF) of Aortic Arch Branch Endografts का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-physician-modified-endovascular-graft-for": {
    "id": "c5-physician-modified-endovascular-graft-for",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Physician-Modified Endovascular Graft (PMEG) for Thoracic Arch / Abdomen",
    "nameHi": "Physician-Modified Endovascular Graft (PMEG) for Thoracic Arch / Abdomen (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Physician-Modified Endovascular Graft (PMEG) for Thoracic Arch / Abdomen.",
    "indicationHi": "Physician-Modified Endovascular Graft (PMEG) for Thoracic Arch / Abdomen (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Physician-Modified Endovascular Graft (PMEG) for Thoracic Arch / Abdomen.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Physician-Modified Endovascular Graft (PMEG) for Thoracic Arch / Abdomen का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-endovascular-abdominal-aortic-aneurysm-repair": {
    "id": "c5-endovascular-abdominal-aortic-aneurysm-repair",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Endovascular Abdominal Aortic Aneurysm Repair (EVAR)",
    "nameHi": "Endovascular Abdominal Aortic Aneurysm Repair (EVAR) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Endovascular Abdominal Aortic Aneurysm Repair (EVAR).",
    "indicationHi": "Endovascular Abdominal Aortic Aneurysm Repair (EVAR) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Endovascular Abdominal Aortic Aneurysm Repair (EVAR).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Endovascular Abdominal Aortic Aneurysm Repair (EVAR) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-percutaneous-evar-with-pre-close": {
    "id": "c5-percutaneous-evar-with-pre-close",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Percutaneous EVAR (PEVAR) with Pre-close Technique (Perclose ProGlide / ProStyle)",
    "nameHi": "Percutaneous EVAR (PEVAR) with Pre-close Technique (Perclose ProGlide / ProStyle) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Percutaneous EVAR (PEVAR) with Pre-close Technique (Perclose ProGlide / ProStyle).",
    "indicationHi": "Percutaneous EVAR (PEVAR) with Pre-close Technique (Perclose ProGlide / ProStyle) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Percutaneous EVAR (PEVAR) with Pre-close Technique (Perclose ProGlide / ProStyle).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Percutaneous EVAR (PEVAR) with Pre-close Technique (Perclose ProGlide / ProStyle) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-fenestrated-evar-for-juxtarenal-suprarenal": {
    "id": "c5-fenestrated-evar-for-juxtarenal-suprarenal",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Fenestrated EVAR (FEVAR) for Juxtarenal / Suprarenal Aneurysms",
    "nameHi": "Fenestrated EVAR (FEVAR) for Juxtarenal / Suprarenal Aneurysms (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Fenestrated EVAR (FEVAR) for Juxtarenal / Suprarenal Aneurysms.",
    "indicationHi": "Fenestrated EVAR (FEVAR) for Juxtarenal / Suprarenal Aneurysms (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Fenestrated EVAR (FEVAR) for Juxtarenal / Suprarenal Aneurysms.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Fenestrated EVAR (FEVAR) for Juxtarenal / Suprarenal Aneurysms का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-branched-evar-for-thoracoabdominal-aortic": {
    "id": "c5-branched-evar-for-thoracoabdominal-aortic",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Branched EVAR (BEVAR) for Thoracoabdominal Aortic Aneurysms (TAAA)",
    "nameHi": "Branched EVAR (BEVAR) for Thoracoabdominal Aortic Aneurysms (TAAA) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Branched EVAR (BEVAR) for Thoracoabdominal Aortic Aneurysms (TAAA).",
    "indicationHi": "Branched EVAR (BEVAR) for Thoracoabdominal Aortic Aneurysms (TAAA) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Branched EVAR (BEVAR) for Thoracoabdominal Aortic Aneurysms (TAAA).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Branched EVAR (BEVAR) for Thoracoabdominal Aortic Aneurysms (TAAA) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-chimney-evar": {
    "id": "c5-chimney-evar",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Chimney EVAR (Ch-EVAR / Snorkel Technique)",
    "nameHi": "Chimney EVAR (Ch-EVAR / Snorkel Technique) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Chimney EVAR (Ch-EVAR / Snorkel Technique).",
    "indicationHi": "Chimney EVAR (Ch-EVAR / Snorkel Technique) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Chimney EVAR (Ch-EVAR / Snorkel Technique).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Chimney EVAR (Ch-EVAR / Snorkel Technique) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-iliac-branch-device-implantation-for": {
    "id": "c5-iliac-branch-device-implantation-for",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Iliac Branch Device (IBD / IBE) Implantation for Common Iliac Aneurysms",
    "nameHi": "Iliac Branch Device (IBD / IBE) Implantation for Common Iliac Aneurysms (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Iliac Branch Device (IBD / IBE) Implantation for Common Iliac Aneurysms.",
    "indicationHi": "Iliac Branch Device (IBD / IBE) Implantation for Common Iliac Aneurysms (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Iliac Branch Device (IBD / IBE) Implantation for Common Iliac Aneurysms.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Iliac Branch Device (IBD / IBE) Implantation for Common Iliac Aneurysms का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-endoanchoring-for-endograft-migration-type": {
    "id": "c5-endoanchoring-for-endograft-migration-type",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "EndoAnchoring (Heli-FX EndoAnchor System) for Endograft Migration / Type IA Endoleak",
    "nameHi": "EndoAnchoring (Heli-FX EndoAnchor System) for Endograft Migration / Type IA Endoleak (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for EndoAnchoring (Heli-FX EndoAnchor System) for Endograft Migration / Type IA Endoleak.",
    "indicationHi": "EndoAnchoring (Heli-FX EndoAnchor System) for Endograft Migration / Type IA Endoleak (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for EndoAnchoring (Heli-FX EndoAnchor System) for Endograft Migration / Type IA Endoleak.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा EndoAnchoring (Heli-FX EndoAnchor System) for Endograft Migration / Type IA Endoleak का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-endovascular-aneurysm-sealing": {
    "id": "c5-endovascular-aneurysm-sealing",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Endovascular Aneurysm Sealing (EVAS)",
    "nameHi": "Endovascular Aneurysm Sealing (EVAS) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Endovascular Aneurysm Sealing (EVAS).",
    "indicationHi": "Endovascular Aneurysm Sealing (EVAS) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Endovascular Aneurysm Sealing (EVAS).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Endovascular Aneurysm Sealing (EVAS) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-transarterial-coiling-liquid-embolization-of": {
    "id": "c5-transarterial-coiling-liquid-embolization-of",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Transarterial Coiling / Liquid Embolization of Type I Endoleak",
    "nameHi": "Transarterial Coiling / Liquid Embolization of Type I Endoleak (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Transarterial Coiling / Liquid Embolization of Type I Endoleak.",
    "indicationHi": "Transarterial Coiling / Liquid Embolization of Type I Endoleak (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transarterial Coiling / Liquid Embolization of Type I Endoleak.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transarterial Coiling / Liquid Embolization of Type I Endoleak का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-direct-translumbar-sac-puncture-and": {
    "id": "c5-direct-translumbar-sac-puncture-and",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Direct Translumbar Sac Puncture and Liquid Embolization for Type II Endoleak",
    "nameHi": "Direct Translumbar Sac Puncture and Liquid Embolization for Type II Endoleak (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Direct Translumbar Sac Puncture and Liquid Embolization for Type II Endoleak.",
    "indicationHi": "Direct Translumbar Sac Puncture and Liquid Embolization for Type II Endoleak (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Direct Translumbar Sac Puncture and Liquid Embolization for Type II Endoleak.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Direct Translumbar Sac Puncture and Liquid Embolization for Type II Endoleak का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-transarterial-mesenteric-lumbar-catheterization-and": {
    "id": "c5-transarterial-mesenteric-lumbar-catheterization-and",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Transarterial Mesenteric / Lumbar Catheterization and Embolization of Type II Endoleak",
    "nameHi": "Transarterial Mesenteric / Lumbar Catheterization and Embolization of Type II Endoleak (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Transarterial Mesenteric / Lumbar Catheterization and Embolization of Type II Endoleak.",
    "indicationHi": "Transarterial Mesenteric / Lumbar Catheterization and Embolization of Type II Endoleak (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transarterial Mesenteric / Lumbar Catheterization and Embolization of Type II Endoleak.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transarterial Mesenteric / Lumbar Catheterization and Embolization of Type II Endoleak का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-transcaval-sac-puncture-and-embolization": {
    "id": "c5-transcaval-sac-puncture-and-embolization",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Transcaval Sac Puncture and Embolization of Type II Endoleak",
    "nameHi": "Transcaval Sac Puncture and Embolization of Type II Endoleak (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Transcaval Sac Puncture and Embolization of Type II Endoleak.",
    "indicationHi": "Transcaval Sac Puncture and Embolization of Type II Endoleak (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transcaval Sac Puncture and Embolization of Type II Endoleak.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transcaval Sac Puncture and Embolization of Type II Endoleak का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-relining-cuff-deployment-for-type": {
    "id": "c5-relining-cuff-deployment-for-type",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Relining / Cuff Deployment for Type III Endoleak",
    "nameHi": "Relining / Cuff Deployment for Type III Endoleak (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Relining / Cuff Deployment for Type III Endoleak.",
    "indicationHi": "Relining / Cuff Deployment for Type III Endoleak (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Relining / Cuff Deployment for Type III Endoleak.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Relining / Cuff Deployment for Type III Endoleak का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-candy-plug-technique-for-false": {
    "id": "c5-candy-plug-technique-for-false",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Candy-Plug Technique for False Lumen Occlusion in Chronic Dissection",
    "nameHi": "Candy-Plug Technique for False Lumen Occlusion in Chronic Dissection (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Candy-Plug Technique for False Lumen Occlusion in Chronic Dissection.",
    "indicationHi": "Candy-Plug Technique for False Lumen Occlusion in Chronic Dissection (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Candy-Plug Technique for False Lumen Occlusion in Chronic Dissection.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Candy-Plug Technique for False Lumen Occlusion in Chronic Dissection का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-knickerbocker-technique-for-false-lumen": {
    "id": "c5-knickerbocker-technique-for-false-lumen",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Knickerbocker Technique for False Lumen Occlusion",
    "nameHi": "Knickerbocker Technique for False Lumen Occlusion (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Knickerbocker Technique for False Lumen Occlusion.",
    "indicationHi": "Knickerbocker Technique for False Lumen Occlusion (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Knickerbocker Technique for False Lumen Occlusion.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Knickerbocker Technique for False Lumen Occlusion का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-false-lumen-coil-and-liquid": {
    "id": "c5-false-lumen-coil-and-liquid",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "False Lumen Coil and Liquid Embolization in Aortic Dissection",
    "nameHi": "False Lumen Coil and Liquid Embolization in Aortic Dissection (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for False Lumen Coil and Liquid Embolization in Aortic Dissection.",
    "indicationHi": "False Lumen Coil and Liquid Embolization in Aortic Dissection (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for False Lumen Coil and Liquid Embolization in Aortic Dissection.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा False Lumen Coil and Liquid Embolization in Aortic Dissection का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-percutaneous-septal-fenestration-for-malperfusion": {
    "id": "c5-percutaneous-septal-fenestration-for-malperfusion",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Percutaneous Septal Fenestration (Balloon / Needle / RF) for Malperfusion Syndrome",
    "nameHi": "Percutaneous Septal Fenestration (Balloon / Needle / RF) for Malperfusion Syndrome (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Percutaneous Septal Fenestration (Balloon / Needle / RF) for Malperfusion Syndrome.",
    "indicationHi": "Percutaneous Septal Fenestration (Balloon / Needle / RF) for Malperfusion Syndrome (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Percutaneous Septal Fenestration (Balloon / Needle / RF) for Malperfusion Syndrome.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Percutaneous Septal Fenestration (Balloon / Needle / RF) for Malperfusion Syndrome का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-endovascular-exclusion-of-mycotic-aortic": {
    "id": "c5-endovascular-exclusion-of-mycotic-aortic",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Endovascular Exclusion of Mycotic Aortic Aneurysm",
    "nameHi": "Endovascular Exclusion of Mycotic Aortic Aneurysm (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Endovascular Exclusion of Mycotic Aortic Aneurysm.",
    "indicationHi": "Endovascular Exclusion of Mycotic Aortic Aneurysm (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Endovascular Exclusion of Mycotic Aortic Aneurysm.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Endovascular Exclusion of Mycotic Aortic Aneurysm का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-endovascular-stent-graft-exclusion-of": {
    "id": "c5-endovascular-stent-graft-exclusion-of",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Endovascular Stent-Graft Exclusion of Aortoenteric Fistula (Bridge to Surgery)",
    "nameHi": "Endovascular Stent-Graft Exclusion of Aortoenteric Fistula (Bridge to Surgery) (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Endovascular Stent-Graft Exclusion of Aortoenteric Fistula (Bridge to Surgery).",
    "indicationHi": "Endovascular Stent-Graft Exclusion of Aortoenteric Fistula (Bridge to Surgery) (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Endovascular Stent-Graft Exclusion of Aortoenteric Fistula (Bridge to Surgery).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Endovascular Stent-Graft Exclusion of Aortoenteric Fistula (Bridge to Surgery) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c5-endovascular-stent-graft-exclusion-of-proc135": {
    "id": "c5-endovascular-stent-graft-exclusion-of-proc135",
    "category": "Vascular: Aortic & Great Vessel Interventions",
    "nameEn": "Endovascular Stent-Graft Exclusion of Aortobronchial Fistula",
    "nameHi": "Endovascular Stent-Graft Exclusion of Aortobronchial Fistula (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Endovascular Stent-Graft Exclusion of Aortobronchial Fistula.",
    "indicationHi": "Endovascular Stent-Graft Exclusion of Aortobronchial Fistula (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Endovascular Stent-Graft Exclusion of Aortobronchial Fistula.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Endovascular Stent-Graft Exclusion of Aortobronchial Fistula का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "General Anesthesia with continuous invasive arterial line blood pressure monitoring or regional spinal anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "c6-renal-artery-balloon-angioplasty": {
    "id": "c6-renal-artery-balloon-angioplasty",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "nameEn": "Renal Artery Balloon Angioplasty (Atherosclerotic / Fibromuscular Dysplasia)",
    "nameHi": "Renal Artery Balloon Angioplasty (Atherosclerotic / Fibromuscular Dysplasia) (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Renal Artery Balloon Angioplasty (Atherosclerotic / Fibromuscular Dysplasia).",
    "indicationHi": "Renal Artery Balloon Angioplasty (Atherosclerotic / Fibromuscular Dysplasia) (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Renal Artery Balloon Angioplasty (Atherosclerotic / Fibromuscular Dysplasia).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Renal Artery Balloon Angioplasty (Atherosclerotic / Fibromuscular Dysplasia) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c6-renal-artery-stenting-with-monorail": {
    "id": "c6-renal-artery-stenting-with-monorail",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "nameEn": "Renal Artery Stenting with Monorail Balloon-Expandable Stent",
    "nameHi": "Renal Artery Stenting with Monorail Balloon-Expandable Stent (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Renal Artery Stenting with Monorail Balloon-Expandable Stent.",
    "indicationHi": "Renal Artery Stenting with Monorail Balloon-Expandable Stent (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Renal Artery Stenting with Monorail Balloon-Expandable Stent.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Renal Artery Stenting with Monorail Balloon-Expandable Stent का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c6-renal-artery-covered-stent-placement": {
    "id": "c6-renal-artery-covered-stent-placement",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "nameEn": "Renal Artery Covered Stent Placement for Iatrogenic / Traumatic Rupture",
    "nameHi": "Renal Artery Covered Stent Placement for Iatrogenic / Traumatic Rupture (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Renal Artery Covered Stent Placement for Iatrogenic / Traumatic Rupture.",
    "indicationHi": "Renal Artery Covered Stent Placement for Iatrogenic / Traumatic Rupture (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Renal Artery Covered Stent Placement for Iatrogenic / Traumatic Rupture.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Renal Artery Covered Stent Placement for Iatrogenic / Traumatic Rupture का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c6-renal-artery-aneurysm-embolization": {
    "id": "c6-renal-artery-aneurysm-embolization",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "nameEn": "Renal Artery Aneurysm Embolization (Stent-Assisted Coiling, Flow Diversion)",
    "nameHi": "Renal Artery Aneurysm Embolization (Stent-Assisted Coiling, Flow Diversion) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Renal Artery Aneurysm Embolization (Stent-Assisted Coiling, Flow Diversion).",
    "indicationHi": "Renal Artery Aneurysm Embolization (Stent-Assisted Coiling, Flow Diversion) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Renal Artery Aneurysm Embolization (Stent-Assisted Coiling, Flow Diversion).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Renal Artery Aneurysm Embolization (Stent-Assisted Coiling, Flow Diversion) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c6-catheter-based-renal-sympathetic-denervation": {
    "id": "c6-catheter-based-renal-sympathetic-denervation",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "nameEn": "Catheter-Based Renal Sympathetic Denervation (RDN) - Radiofrequency (Symplicity Spyral)",
    "nameHi": "Catheter-Based Renal Sympathetic Denervation (RDN) - Radiofrequency (Symplicity Spyral) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Catheter-Based Renal Sympathetic Denervation (RDN) - Radiofrequency (Symplicity Spyral).",
    "indicationHi": "Catheter-Based Renal Sympathetic Denervation (RDN) - Radiofrequency (Symplicity Spyral) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Catheter-Based Renal Sympathetic Denervation (RDN) - Radiofrequency (Symplicity Spyral).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Catheter-Based Renal Sympathetic Denervation (RDN) - Radiofrequency (Symplicity Spyral) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c6-catheter-based-renal-sympathetic-denervation-proc141": {
    "id": "c6-catheter-based-renal-sympathetic-denervation-proc141",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "nameEn": "Catheter-Based Renal Sympathetic Denervation (RDN) - Ultrasound (Paradise System)",
    "nameHi": "Catheter-Based Renal Sympathetic Denervation (RDN) - Ultrasound (Paradise System) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Catheter-Based Renal Sympathetic Denervation (RDN) - Ultrasound (Paradise System).",
    "indicationHi": "Catheter-Based Renal Sympathetic Denervation (RDN) - Ultrasound (Paradise System) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Catheter-Based Renal Sympathetic Denervation (RDN) - Ultrasound (Paradise System).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Catheter-Based Renal Sympathetic Denervation (RDN) - Ultrasound (Paradise System) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c6-celiac-artery-balloon-angioplasty-and": {
    "id": "c6-celiac-artery-balloon-angioplasty-and",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "nameEn": "Celiac Artery Balloon Angioplasty and Stenting",
    "nameHi": "Celiac Artery Balloon Angioplasty and Stenting (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Celiac Artery Balloon Angioplasty and Stenting.",
    "indicationHi": "Celiac Artery Balloon Angioplasty and Stenting (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Celiac Artery Balloon Angioplasty and Stenting.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Celiac Artery Balloon Angioplasty and Stenting का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c6-superior-mesenteric-artery-angioplasty-and": {
    "id": "c6-superior-mesenteric-artery-angioplasty-and",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "nameEn": "Superior Mesenteric Artery (SMA) Angioplasty and Stenting for Chronic Mesenteric Ischemia",
    "nameHi": "Superior Mesenteric Artery (SMA) Angioplasty and Stenting for Chronic Mesenteric Ischemia (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Superior Mesenteric Artery (SMA) Angioplasty and Stenting for Chronic Mesenteric Ischemia.",
    "indicationHi": "Superior Mesenteric Artery (SMA) Angioplasty and Stenting for Chronic Mesenteric Ischemia (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Superior Mesenteric Artery (SMA) Angioplasty and Stenting for Chronic Mesenteric Ischemia.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Superior Mesenteric Artery (SMA) Angioplasty and Stenting for Chronic Mesenteric Ischemia का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c6-retrograde-open-mesenteric-stenting": {
    "id": "c6-retrograde-open-mesenteric-stenting",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "nameEn": "Retrograde Open Mesenteric Stenting (ROMS - Hybrid Procedure)",
    "nameHi": "Retrograde Open Mesenteric Stenting (ROMS - Hybrid Procedure) (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Retrograde Open Mesenteric Stenting (ROMS - Hybrid Procedure).",
    "indicationHi": "Retrograde Open Mesenteric Stenting (ROMS - Hybrid Procedure) (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Retrograde Open Mesenteric Stenting (ROMS - Hybrid Procedure).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Retrograde Open Mesenteric Stenting (ROMS - Hybrid Procedure) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c6-catheter-directed-thrombolysis-for-acute": {
    "id": "c6-catheter-directed-thrombolysis-for-acute",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "nameEn": "Catheter-Directed Thrombolysis for Acute Superior Mesenteric Artery Embolism / Thrombosis",
    "nameHi": "Catheter-Directed Thrombolysis for Acute Superior Mesenteric Artery Embolism / Thrombosis (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Catheter-Directed Thrombolysis for Acute Superior Mesenteric Artery Embolism / Thrombosis.",
    "indicationHi": "Catheter-Directed Thrombolysis for Acute Superior Mesenteric Artery Embolism / Thrombosis (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Catheter-Directed Thrombolysis for Acute Superior Mesenteric Artery Embolism / Thrombosis.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Catheter-Directed Thrombolysis for Acute Superior Mesenteric Artery Embolism / Thrombosis का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c6-mechanical-aspiration-thrombectomy-for-acute": {
    "id": "c6-mechanical-aspiration-thrombectomy-for-acute",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "nameEn": "Mechanical Aspiration Thrombectomy for Acute SMA Occlusion",
    "nameHi": "Mechanical Aspiration Thrombectomy for Acute SMA Occlusion (थ्रोम्बेक्टोमी (खून का थक्का निकालना))",
    "indicationEn": "Management and definitive therapeutic intervention for Mechanical Aspiration Thrombectomy for Acute SMA Occlusion.",
    "indicationHi": "Mechanical Aspiration Thrombectomy for Acute SMA Occlusion (थ्रोम्बेक्टोमी (खून का थक्का निकालना)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Mechanical Aspiration Thrombectomy for Acute SMA Occlusion.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Mechanical Aspiration Thrombectomy for Acute SMA Occlusion का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c6-inferior-mesenteric-artery-angioplasty-and": {
    "id": "c6-inferior-mesenteric-artery-angioplasty-and",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "nameEn": "Inferior Mesenteric Artery (IMA) Angioplasty and Stenting",
    "nameHi": "Inferior Mesenteric Artery (IMA) Angioplasty and Stenting (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Inferior Mesenteric Artery (IMA) Angioplasty and Stenting.",
    "indicationHi": "Inferior Mesenteric Artery (IMA) Angioplasty and Stenting (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Inferior Mesenteric Artery (IMA) Angioplasty and Stenting.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Inferior Mesenteric Artery (IMA) Angioplasty and Stenting का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c6-hepatic-artery-angioplasty-and-stenting": {
    "id": "c6-hepatic-artery-angioplasty-and-stenting",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "nameEn": "Hepatic Artery Angioplasty and Stenting (Post-Orthotopic Liver Transplant Stenosis)",
    "nameHi": "Hepatic Artery Angioplasty and Stenting (Post-Orthotopic Liver Transplant Stenosis) (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Hepatic Artery Angioplasty and Stenting (Post-Orthotopic Liver Transplant Stenosis).",
    "indicationHi": "Hepatic Artery Angioplasty and Stenting (Post-Orthotopic Liver Transplant Stenosis) (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Hepatic Artery Angioplasty and Stenting (Post-Orthotopic Liver Transplant Stenosis).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Hepatic Artery Angioplasty and Stenting (Post-Orthotopic Liver Transplant Stenosis) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c6-splenic-artery-angioplasty-and-stenting": {
    "id": "c6-splenic-artery-angioplasty-and-stenting",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "nameEn": "Splenic Artery Angioplasty and Stenting",
    "nameHi": "Splenic Artery Angioplasty and Stenting (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Splenic Artery Angioplasty and Stenting.",
    "indicationHi": "Splenic Artery Angioplasty and Stenting (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Splenic Artery Angioplasty and Stenting.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Splenic Artery Angioplasty and Stenting का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c6-median-arcuate-ligament-release-post": {
    "id": "c6-median-arcuate-ligament-release-post",
    "category": "Vascular: Visceral & Renal Arterial Interventions",
    "nameEn": "Median Arcuate Ligament Release Post-Surgical Endovascular Celiac Stenting",
    "nameHi": "Median Arcuate Ligament Release Post-Surgical Endovascular Celiac Stenting (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Median Arcuate Ligament Release Post-Surgical Endovascular Celiac Stenting.",
    "indicationHi": "Median Arcuate Ligament Release Post-Surgical Endovascular Celiac Stenting (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Median Arcuate Ligament Release Post-Surgical Endovascular Celiac Stenting.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Median Arcuate Ligament Release Post-Surgical Endovascular Celiac Stenting का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with monitored intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c7-bronchial-artery-embolization-for-massive": {
    "id": "c7-bronchial-artery-embolization-for-massive",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Bronchial Artery Embolization (BAE) for Massive Hemoptysis (PVA, Gelatin, Microspheres)",
    "nameHi": "Bronchial Artery Embolization (BAE) for Massive Hemoptysis (PVA, Gelatin, Microspheres) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Bronchial Artery Embolization (BAE) for Massive Hemoptysis (PVA, Gelatin, Microspheres).",
    "indicationHi": "Bronchial Artery Embolization (BAE) for Massive Hemoptysis (PVA, Gelatin, Microspheres) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Bronchial Artery Embolization (BAE) for Massive Hemoptysis (PVA, Gelatin, Microspheres).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Bronchial Artery Embolization (BAE) for Massive Hemoptysis (PVA, Gelatin, Microspheres) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-non-bronchial-systemic-arterial-embolization": {
    "id": "c7-non-bronchial-systemic-arterial-embolization",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Non-Bronchial Systemic Arterial Embolization for Hemoptysis (Intercostal, IMA, Thyrocervical)",
    "nameHi": "Non-Bronchial Systemic Arterial Embolization for Hemoptysis (Intercostal, IMA, Thyrocervical) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Non-Bronchial Systemic Arterial Embolization for Hemoptysis (Intercostal, IMA, Thyrocervical).",
    "indicationHi": "Non-Bronchial Systemic Arterial Embolization for Hemoptysis (Intercostal, IMA, Thyrocervical) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Non-Bronchial Systemic Arterial Embolization for Hemoptysis (Intercostal, IMA, Thyrocervical).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Non-Bronchial Systemic Arterial Embolization for Hemoptysis (Intercostal, IMA, Thyrocervical) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-left-gastric-artery-embolization-for": {
    "id": "c7-left-gastric-artery-embolization-for",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Left Gastric Artery Embolization for Severe Refractory Peptic Ulcer Bleeding",
    "nameHi": "Left Gastric Artery Embolization for Severe Refractory Peptic Ulcer Bleeding (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Left Gastric Artery Embolization for Severe Refractory Peptic Ulcer Bleeding.",
    "indicationHi": "Left Gastric Artery Embolization for Severe Refractory Peptic Ulcer Bleeding (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Left Gastric Artery Embolization for Severe Refractory Peptic Ulcer Bleeding.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Left Gastric Artery Embolization for Severe Refractory Peptic Ulcer Bleeding का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-gastroduodenal-artery-sandwich-coiling-for": {
    "id": "c7-gastroduodenal-artery-sandwich-coiling-for",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Gastroduodenal Artery (GDA) \"Sandwich\" Coiling for Duodenal Ulcer Bleeding",
    "nameHi": "Gastroduodenal Artery (GDA) \"Sandwich\" Coiling for Duodenal Ulcer Bleeding (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Gastroduodenal Artery (GDA) \"Sandwich\" Coiling for Duodenal Ulcer Bleeding.",
    "indicationHi": "Gastroduodenal Artery (GDA) \"Sandwich\" Coiling for Duodenal Ulcer Bleeding (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Gastroduodenal Artery (GDA) \"Sandwich\" Coiling for Duodenal Ulcer Bleeding.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Gastroduodenal Artery (GDA) \"Sandwich\" Coiling for Duodenal Ulcer Bleeding का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-right-gastric-artery-embolization-for": {
    "id": "c7-right-gastric-artery-embolization-for",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Right Gastric Artery Embolization for Gastric Hemorrhage",
    "nameHi": "Right Gastric Artery Embolization for Gastric Hemorrhage (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Right Gastric Artery Embolization for Gastric Hemorrhage.",
    "indicationHi": "Right Gastric Artery Embolization for Gastric Hemorrhage (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Right Gastric Artery Embolization for Gastric Hemorrhage.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Right Gastric Artery Embolization for Gastric Hemorrhage का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-pancreaticoduodenal-arcade-coiling-glue-embolization": {
    "id": "c7-pancreaticoduodenal-arcade-coiling-glue-embolization",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Pancreaticoduodenal Arcade Coiling / Glue Embolization",
    "nameHi": "Pancreaticoduodenal Arcade Coiling / Glue Embolization (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Pancreaticoduodenal Arcade Coiling / Glue Embolization.",
    "indicationHi": "Pancreaticoduodenal Arcade Coiling / Glue Embolization (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Pancreaticoduodenal Arcade Coiling / Glue Embolization.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Pancreaticoduodenal Arcade Coiling / Glue Embolization का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-transcatheter-embolization-of-diverticular-hemorrhage": {
    "id": "c7-transcatheter-embolization-of-diverticular-hemorrhage",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Transcatheter Embolization of Diverticular Hemorrhage (Microcoils, PVA particles)",
    "nameHi": "Transcatheter Embolization of Diverticular Hemorrhage (Microcoils, PVA particles) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Transcatheter Embolization of Diverticular Hemorrhage (Microcoils, PVA particles).",
    "indicationHi": "Transcatheter Embolization of Diverticular Hemorrhage (Microcoils, PVA particles) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transcatheter Embolization of Diverticular Hemorrhage (Microcoils, PVA particles).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transcatheter Embolization of Diverticular Hemorrhage (Microcoils, PVA particles) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-transcatheter-embolization-of-angiodysplasia-induced": {
    "id": "c7-transcatheter-embolization-of-angiodysplasia-induced",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Transcatheter Embolization of Angiodysplasia-Induced Lower GI Bleeding",
    "nameHi": "Transcatheter Embolization of Angiodysplasia-Induced Lower GI Bleeding (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Transcatheter Embolization of Angiodysplasia-Induced Lower GI Bleeding.",
    "indicationHi": "Transcatheter Embolization of Angiodysplasia-Induced Lower GI Bleeding (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transcatheter Embolization of Angiodysplasia-Induced Lower GI Bleeding.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transcatheter Embolization of Angiodysplasia-Induced Lower GI Bleeding का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-superior-rectal-artery-embolization-for": {
    "id": "c7-superior-rectal-artery-embolization-for",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Superior Rectal Artery Embolization for Refractory Hemorrhoidal Bleeding (Emborrhoid Technique)",
    "nameHi": "Superior Rectal Artery Embolization for Refractory Hemorrhoidal Bleeding (Emborrhoid Technique) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Superior Rectal Artery Embolization for Refractory Hemorrhoidal Bleeding (Emborrhoid Technique).",
    "indicationHi": "Superior Rectal Artery Embolization for Refractory Hemorrhoidal Bleeding (Emborrhoid Technique) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Superior Rectal Artery Embolization for Refractory Hemorrhoidal Bleeding (Emborrhoid Technique).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Superior Rectal Artery Embolization for Refractory Hemorrhoidal Bleeding (Emborrhoid Technique) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-transcatheter-hepatic-arterial-embolization-for": {
    "id": "c7-transcatheter-hepatic-arterial-embolization-for",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Transcatheter Hepatic Arterial Embolization for Blunt Liver Trauma",
    "nameHi": "Transcatheter Hepatic Arterial Embolization for Blunt Liver Trauma (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Transcatheter Hepatic Arterial Embolization for Blunt Liver Trauma.",
    "indicationHi": "Transcatheter Hepatic Arterial Embolization for Blunt Liver Trauma (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transcatheter Hepatic Arterial Embolization for Blunt Liver Trauma.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transcatheter Hepatic Arterial Embolization for Blunt Liver Trauma का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-splenic-artery-embolization-for-high": {
    "id": "c7-splenic-artery-embolization-for-high",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Splenic Artery Embolization for High-Grade Trauma (Proximal Main Trunk Coil Occlusion)",
    "nameHi": "Splenic Artery Embolization for High-Grade Trauma (Proximal Main Trunk Coil Occlusion) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Splenic Artery Embolization for High-Grade Trauma (Proximal Main Trunk Coil Occlusion).",
    "indicationHi": "Splenic Artery Embolization for High-Grade Trauma (Proximal Main Trunk Coil Occlusion) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Splenic Artery Embolization for High-Grade Trauma (Proximal Main Trunk Coil Occlusion).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Splenic Artery Embolization for High-Grade Trauma (Proximal Main Trunk Coil Occlusion) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-selective-distal-embolization-for-splenic": {
    "id": "c7-selective-distal-embolization-for-splenic",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Selective Distal Embolization for Splenic Pseudoaneurysms / Arteriovenous Fistulae",
    "nameHi": "Selective Distal Embolization for Splenic Pseudoaneurysms / Arteriovenous Fistulae (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Selective Distal Embolization for Splenic Pseudoaneurysms / Arteriovenous Fistulae.",
    "indicationHi": "Selective Distal Embolization for Splenic Pseudoaneurysms / Arteriovenous Fistulae (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Selective Distal Embolization for Splenic Pseudoaneurysms / Arteriovenous Fistulae.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Selective Distal Embolization for Splenic Pseudoaneurysms / Arteriovenous Fistulae का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-superselective-transcatheter-renal-embolization-for": {
    "id": "c7-superselective-transcatheter-renal-embolization-for",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Superselective Transcatheter Renal Embolization for Post-Biopsy / Post-PCNL Bleeding",
    "nameHi": "Superselective Transcatheter Renal Embolization for Post-Biopsy / Post-PCNL Bleeding (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Superselective Transcatheter Renal Embolization for Post-Biopsy / Post-PCNL Bleeding.",
    "indicationHi": "Superselective Transcatheter Renal Embolization for Post-Biopsy / Post-PCNL Bleeding (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Superselective Transcatheter Renal Embolization for Post-Biopsy / Post-PCNL Bleeding.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Superselective Transcatheter Renal Embolization for Post-Biopsy / Post-PCNL Bleeding का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-transcatheter-renal-embolization-for-high": {
    "id": "c7-transcatheter-renal-embolization-for-high",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Transcatheter Renal Embolization for High-Grade Blunt / Penetrating Renal Trauma",
    "nameHi": "Transcatheter Renal Embolization for High-Grade Blunt / Penetrating Renal Trauma (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Transcatheter Renal Embolization for High-Grade Blunt / Penetrating Renal Trauma.",
    "indicationHi": "Transcatheter Renal Embolization for High-Grade Blunt / Penetrating Renal Trauma (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transcatheter Renal Embolization for High-Grade Blunt / Penetrating Renal Trauma.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transcatheter Renal Embolization for High-Grade Blunt / Penetrating Renal Trauma का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-renal-angiomyolipoma-prophylactic-embolization": {
    "id": "c7-renal-angiomyolipoma-prophylactic-embolization",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Renal Angiomyolipoma (AML) Prophylactic Embolization",
    "nameHi": "Renal Angiomyolipoma (AML) Prophylactic Embolization (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Renal Angiomyolipoma (AML) Prophylactic Embolization.",
    "indicationHi": "Renal Angiomyolipoma (AML) Prophylactic Embolization (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Renal Angiomyolipoma (AML) Prophylactic Embolization.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Renal Angiomyolipoma (AML) Prophylactic Embolization का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-selective-internal-iliac-branch-embolization": {
    "id": "c7-selective-internal-iliac-branch-embolization",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Selective Internal Iliac / Branch Embolization for Unstable Pelvic Ring Fractures",
    "nameHi": "Selective Internal Iliac / Branch Embolization for Unstable Pelvic Ring Fractures (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Selective Internal Iliac / Branch Embolization for Unstable Pelvic Ring Fractures.",
    "indicationHi": "Selective Internal Iliac / Branch Embolization for Unstable Pelvic Ring Fractures (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Selective Internal Iliac / Branch Embolization for Unstable Pelvic Ring Fractures.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Selective Internal Iliac / Branch Embolization for Unstable Pelvic Ring Fractures का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-superior-gluteal-artery-embolization-for": {
    "id": "c7-superior-gluteal-artery-embolization-for",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Superior Gluteal Artery Embolization for Pelvic Trauma",
    "nameHi": "Superior Gluteal Artery Embolization for Pelvic Trauma (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Superior Gluteal Artery Embolization for Pelvic Trauma.",
    "indicationHi": "Superior Gluteal Artery Embolization for Pelvic Trauma (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Superior Gluteal Artery Embolization for Pelvic Trauma.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Superior Gluteal Artery Embolization for Pelvic Trauma का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-internal-pudendal-artery-embolization-for": {
    "id": "c7-internal-pudendal-artery-embolization-for",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Internal Pudendal Artery Embolization for Pelvic Fracture Bleeding",
    "nameHi": "Internal Pudendal Artery Embolization for Pelvic Fracture Bleeding (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Internal Pudendal Artery Embolization for Pelvic Fracture Bleeding.",
    "indicationHi": "Internal Pudendal Artery Embolization for Pelvic Fracture Bleeding (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Internal Pudendal Artery Embolization for Pelvic Fracture Bleeding.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Internal Pudendal Artery Embolization for Pelvic Fracture Bleeding का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-obturator-artery-embolization": {
    "id": "c7-obturator-artery-embolization",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Obturator Artery Embolization (Corona Mortis Bleeding)",
    "nameHi": "Obturator Artery Embolization (Corona Mortis Bleeding) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Obturator Artery Embolization (Corona Mortis Bleeding).",
    "indicationHi": "Obturator Artery Embolization (Corona Mortis Bleeding) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Obturator Artery Embolization (Corona Mortis Bleeding).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Obturator Artery Embolization (Corona Mortis Bleeding) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-intercostal-artery-embolization-for-thoracic": {
    "id": "c7-intercostal-artery-embolization-for-thoracic",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Intercostal Artery Embolization for Thoracic Trauma / Post-Thoracentesis Bleeding",
    "nameHi": "Intercostal Artery Embolization for Thoracic Trauma / Post-Thoracentesis Bleeding (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Intercostal Artery Embolization for Thoracic Trauma / Post-Thoracentesis Bleeding.",
    "indicationHi": "Intercostal Artery Embolization for Thoracic Trauma / Post-Thoracentesis Bleeding (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Intercostal Artery Embolization for Thoracic Trauma / Post-Thoracentesis Bleeding.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Intercostal Artery Embolization for Thoracic Trauma / Post-Thoracentesis Bleeding का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-lumbar-artery-embolization-for-spontaneous": {
    "id": "c7-lumbar-artery-embolization-for-spontaneous",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Lumbar Artery Embolization for Spontaneous Retroperitoneal Bleeding / Psoas Hematoma",
    "nameHi": "Lumbar Artery Embolization for Spontaneous Retroperitoneal Bleeding / Psoas Hematoma (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Lumbar Artery Embolization for Spontaneous Retroperitoneal Bleeding / Psoas Hematoma.",
    "indicationHi": "Lumbar Artery Embolization for Spontaneous Retroperitoneal Bleeding / Psoas Hematoma (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Lumbar Artery Embolization for Spontaneous Retroperitoneal Bleeding / Psoas Hematoma.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Lumbar Artery Embolization for Spontaneous Retroperitoneal Bleeding / Psoas Hematoma का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-inferior-epigastric-artery-embolization-for": {
    "id": "c7-inferior-epigastric-artery-embolization-for",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Inferior Epigastric Artery Embolization for Rectus Sheath Hematoma",
    "nameHi": "Inferior Epigastric Artery Embolization for Rectus Sheath Hematoma (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Inferior Epigastric Artery Embolization for Rectus Sheath Hematoma.",
    "indicationHi": "Inferior Epigastric Artery Embolization for Rectus Sheath Hematoma (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Inferior Epigastric Artery Embolization for Rectus Sheath Hematoma.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Inferior Epigastric Artery Embolization for Rectus Sheath Hematoma का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-deep-circumflex-iliac-artery-embolization": {
    "id": "c7-deep-circumflex-iliac-artery-embolization",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Deep Circumflex Iliac Artery Embolization",
    "nameHi": "Deep Circumflex Iliac Artery Embolization (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Deep Circumflex Iliac Artery Embolization.",
    "indicationHi": "Deep Circumflex Iliac Artery Embolization (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Deep Circumflex Iliac Artery Embolization.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Deep Circumflex Iliac Artery Embolization का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-transcatheter-embolization-for-intractable-epistaxis": {
    "id": "c7-transcatheter-embolization-for-intractable-epistaxis",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Transcatheter Embolization for Intractable Epistaxis (Sphenopalatine / Internal Maxillary Branches)",
    "nameHi": "Transcatheter Embolization for Intractable Epistaxis (Sphenopalatine / Internal Maxillary Branches) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Transcatheter Embolization for Intractable Epistaxis (Sphenopalatine / Internal Maxillary Branches).",
    "indicationHi": "Transcatheter Embolization for Intractable Epistaxis (Sphenopalatine / Internal Maxillary Branches) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transcatheter Embolization for Intractable Epistaxis (Sphenopalatine / Internal Maxillary Branches).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transcatheter Embolization for Intractable Epistaxis (Sphenopalatine / Internal Maxillary Branches) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-facial-artery-embolization-for-post": {
    "id": "c7-facial-artery-embolization-for-post",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Facial Artery Embolization for Post-Traumatic Maxillofacial Bleeding",
    "nameHi": "Facial Artery Embolization for Post-Traumatic Maxillofacial Bleeding (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Facial Artery Embolization for Post-Traumatic Maxillofacial Bleeding.",
    "indicationHi": "Facial Artery Embolization for Post-Traumatic Maxillofacial Bleeding (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Facial Artery Embolization for Post-Traumatic Maxillofacial Bleeding.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Facial Artery Embolization for Post-Traumatic Maxillofacial Bleeding का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-superselective-transcatheter-arterial-embolization-of": {
    "id": "c7-superselective-transcatheter-arterial-embolization-of",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Superselective Transcatheter Arterial Embolization of Splanchnic Aneurysms / Pseudoaneurysms",
    "nameHi": "Superselective Transcatheter Arterial Embolization of Splanchnic Aneurysms / Pseudoaneurysms (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Superselective Transcatheter Arterial Embolization of Splanchnic Aneurysms / Pseudoaneurysms.",
    "indicationHi": "Superselective Transcatheter Arterial Embolization of Splanchnic Aneurysms / Pseudoaneurysms (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Superselective Transcatheter Arterial Embolization of Splanchnic Aneurysms / Pseudoaneurysms.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Superselective Transcatheter Arterial Embolization of Splanchnic Aneurysms / Pseudoaneurysms का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-ultrasound-guided-percutaneous-thrombin-injection": {
    "id": "c7-ultrasound-guided-percutaneous-thrombin-injection",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Ultrasound-Guided Percutaneous Thrombin Injection for Femoral Pseudoaneurysm",
    "nameHi": "Ultrasound-Guided Percutaneous Thrombin Injection for Femoral Pseudoaneurysm (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Ultrasound-Guided Percutaneous Thrombin Injection for Femoral Pseudoaneurysm.",
    "indicationHi": "Ultrasound-Guided Percutaneous Thrombin Injection for Femoral Pseudoaneurysm (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Ultrasound-Guided Percutaneous Thrombin Injection for Femoral Pseudoaneurysm.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Ultrasound-Guided Percutaneous Thrombin Injection for Femoral Pseudoaneurysm का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-ultrasound-guided-percutaneous-thrombin-injection-proc178": {
    "id": "c7-ultrasound-guided-percutaneous-thrombin-injection-proc178",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Ultrasound-Guided Percutaneous Thrombin Injection for Visceral / Peripheral Pseudoaneurysms",
    "nameHi": "Ultrasound-Guided Percutaneous Thrombin Injection for Visceral / Peripheral Pseudoaneurysms (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Ultrasound-Guided Percutaneous Thrombin Injection for Visceral / Peripheral Pseudoaneurysms.",
    "indicationHi": "Ultrasound-Guided Percutaneous Thrombin Injection for Visceral / Peripheral Pseudoaneurysms (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Ultrasound-Guided Percutaneous Thrombin Injection for Visceral / Peripheral Pseudoaneurysms.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Ultrasound-Guided Percutaneous Thrombin Injection for Visceral / Peripheral Pseudoaneurysms का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-transcatheter-coil-microvascular-plug-occlusion": {
    "id": "c7-transcatheter-coil-microvascular-plug-occlusion",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Transcatheter Coil / Microvascular Plug Occlusion of Iatrogenic Pseudoaneurysms",
    "nameHi": "Transcatheter Coil / Microvascular Plug Occlusion of Iatrogenic Pseudoaneurysms (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Transcatheter Coil / Microvascular Plug Occlusion of Iatrogenic Pseudoaneurysms.",
    "indicationHi": "Transcatheter Coil / Microvascular Plug Occlusion of Iatrogenic Pseudoaneurysms (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transcatheter Coil / Microvascular Plug Occlusion of Iatrogenic Pseudoaneurysms.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transcatheter Coil / Microvascular Plug Occlusion of Iatrogenic Pseudoaneurysms का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-transcatheter-cyanoacrylate-embolization-of-pseudoaneurysms": {
    "id": "c7-transcatheter-cyanoacrylate-embolization-of-pseudoaneurysms",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Transcatheter Cyanoacrylate (Glue) Embolization of Pseudoaneurysms",
    "nameHi": "Transcatheter Cyanoacrylate (Glue) Embolization of Pseudoaneurysms (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Transcatheter Cyanoacrylate (Glue) Embolization of Pseudoaneurysms.",
    "indicationHi": "Transcatheter Cyanoacrylate (Glue) Embolization of Pseudoaneurysms (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Transcatheter Cyanoacrylate (Glue) Embolization of Pseudoaneurysms.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Transcatheter Cyanoacrylate (Glue) Embolization of Pseudoaneurysms का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-covered-stent-exclusion-of-iatrogenic": {
    "id": "c7-covered-stent-exclusion-of-iatrogenic",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Covered Stent Exclusion of Iatrogenic Arterial Dissections / Ruptures",
    "nameHi": "Covered Stent Exclusion of Iatrogenic Arterial Dissections / Ruptures (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Covered Stent Exclusion of Iatrogenic Arterial Dissections / Ruptures.",
    "indicationHi": "Covered Stent Exclusion of Iatrogenic Arterial Dissections / Ruptures (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Covered Stent Exclusion of Iatrogenic Arterial Dissections / Ruptures.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Covered Stent Exclusion of Iatrogenic Arterial Dissections / Ruptures का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-preoperative-tumor-devascularization-embolization": {
    "id": "c7-preoperative-tumor-devascularization-embolization",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Preoperative Tumor Devascularization / Embolization (Hypervascular Bone / RCC / Thyroid Mets)",
    "nameHi": "Preoperative Tumor Devascularization / Embolization (Hypervascular Bone / RCC / Thyroid Mets) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Preoperative Tumor Devascularization / Embolization (Hypervascular Bone / RCC / Thyroid Mets).",
    "indicationHi": "Preoperative Tumor Devascularization / Embolization (Hypervascular Bone / RCC / Thyroid Mets) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Preoperative Tumor Devascularization / Embolization (Hypervascular Bone / RCC / Thyroid Mets).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Preoperative Tumor Devascularization / Embolization (Hypervascular Bone / RCC / Thyroid Mets) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-carotid-blowout-syndrome-covered-stent": {
    "id": "c7-carotid-blowout-syndrome-covered-stent",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Carotid Blowout Syndrome Covered Stent Exclusion",
    "nameHi": "Carotid Blowout Syndrome Covered Stent Exclusion (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Carotid Blowout Syndrome Covered Stent Exclusion.",
    "indicationHi": "Carotid Blowout Syndrome Covered Stent Exclusion (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Carotid Blowout Syndrome Covered Stent Exclusion.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Carotid Blowout Syndrome Covered Stent Exclusion का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c7-carotid-blowout-syndrome-therapeutic-parent": {
    "id": "c7-carotid-blowout-syndrome-therapeutic-parent",
    "category": "Embolotherapy: Trauma, Hemorrhage & Structural Vascular",
    "nameEn": "Carotid Blowout Syndrome Therapeutic Parent Vessel Occlusion (PVO)",
    "nameHi": "Carotid Blowout Syndrome Therapeutic Parent Vessel Occlusion (PVO) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Carotid Blowout Syndrome Therapeutic Parent Vessel Occlusion (PVO).",
    "indicationHi": "Carotid Blowout Syndrome Therapeutic Parent Vessel Occlusion (PVO) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Carotid Blowout Syndrome Therapeutic Parent Vessel Occlusion (PVO).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Carotid Blowout Syndrome Therapeutic Parent Vessel Occlusion (PVO) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with emergency resuscitation support or General Anesthesia if hemodynamically unstable.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा मरीज की गंभीर स्थिति अनुसार तत्काल पूर्ण बेहोशी।"
  },
  "c10-catheter-directed-thrombolysis-for-acute": {
    "id": "c10-catheter-directed-thrombolysis-for-acute",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Catheter-Directed Thrombolysis (CDT) for Acute Iliofemoral Deep Vein Thrombosis (DVT)",
    "nameHi": "Catheter-Directed Thrombolysis (CDT) for Acute Iliofemoral Deep Vein Thrombosis (DVT) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Catheter-Directed Thrombolysis (CDT) for Acute Iliofemoral Deep Vein Thrombosis (DVT).",
    "indicationHi": "Catheter-Directed Thrombolysis (CDT) for Acute Iliofemoral Deep Vein Thrombosis (DVT) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Catheter-Directed Thrombolysis (CDT) for Acute Iliofemoral Deep Vein Thrombosis (DVT).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Catheter-Directed Thrombolysis (CDT) for Acute Iliofemoral Deep Vein Thrombosis (DVT) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-pharmacomechanical-catheter-directed-thrombolysis-using": {
    "id": "c10-pharmacomechanical-catheter-directed-thrombolysis-using",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Pharmacomechanical Catheter-Directed Thrombolysis (PCDT) using AngioJet Clot-Hunter",
    "nameHi": "Pharmacomechanical Catheter-Directed Thrombolysis (PCDT) using AngioJet Clot-Hunter (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Pharmacomechanical Catheter-Directed Thrombolysis (PCDT) using AngioJet Clot-Hunter.",
    "indicationHi": "Pharmacomechanical Catheter-Directed Thrombolysis (PCDT) using AngioJet Clot-Hunter (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Pharmacomechanical Catheter-Directed Thrombolysis (PCDT) using AngioJet Clot-Hunter.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Pharmacomechanical Catheter-Directed Thrombolysis (PCDT) using AngioJet Clot-Hunter का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-acoustic-pulse-thrombolysis-for-iliofemoral": {
    "id": "c10-acoustic-pulse-thrombolysis-for-iliofemoral",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Acoustic Pulse Thrombolysis (EKOSEndoWave System) for Iliofemoral DVT",
    "nameHi": "Acoustic Pulse Thrombolysis (EKOSEndoWave System) for Iliofemoral DVT (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Acoustic Pulse Thrombolysis (EKOSEndoWave System) for Iliofemoral DVT.",
    "indicationHi": "Acoustic Pulse Thrombolysis (EKOSEndoWave System) for Iliofemoral DVT (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Acoustic Pulse Thrombolysis (EKOSEndoWave System) for Iliofemoral DVT.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Acoustic Pulse Thrombolysis (EKOSEndoWave System) for Iliofemoral DVT का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-pure-mechanical-thrombectomy-for-iliofemoral": {
    "id": "c10-pure-mechanical-thrombectomy-for-iliofemoral",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Pure Mechanical Thrombectomy for Iliofemoral DVT (Inari ClotTriever System)",
    "nameHi": "Pure Mechanical Thrombectomy for Iliofemoral DVT (Inari ClotTriever System) (थ्रोम्बेक्टोमी (खून का थक्का निकालना))",
    "indicationEn": "Management and definitive therapeutic intervention for Pure Mechanical Thrombectomy for Iliofemoral DVT (Inari ClotTriever System).",
    "indicationHi": "Pure Mechanical Thrombectomy for Iliofemoral DVT (Inari ClotTriever System) (थ्रोम्बेक्टोमी (खून का थक्का निकालना)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Pure Mechanical Thrombectomy for Iliofemoral DVT (Inari ClotTriever System).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Pure Mechanical Thrombectomy for Iliofemoral DVT (Inari ClotTriever System) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-aspiration-thrombectomy-for-acute-dvt": {
    "id": "c10-aspiration-thrombectomy-for-acute-dvt",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Aspiration Thrombectomy for Acute DVT (Penumbra Lightning Bolt / Indigo System)",
    "nameHi": "Aspiration Thrombectomy for Acute DVT (Penumbra Lightning Bolt / Indigo System) (थ्रोम्बेक्टोमी (खून का थक्का निकालना))",
    "indicationEn": "Management and definitive therapeutic intervention for Aspiration Thrombectomy for Acute DVT (Penumbra Lightning Bolt / Indigo System).",
    "indicationHi": "Aspiration Thrombectomy for Acute DVT (Penumbra Lightning Bolt / Indigo System) (थ्रोम्बेक्टोमी (खून का थक्का निकालना)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Aspiration Thrombectomy for Acute DVT (Penumbra Lightning Bolt / Indigo System).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Aspiration Thrombectomy for Acute DVT (Penumbra Lightning Bolt / Indigo System) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-iliac-vein-balloon-angioplasty-for": {
    "id": "c10-iliac-vein-balloon-angioplasty-for",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Iliac Vein Balloon Angioplasty for May-Thurner Syndrome",
    "nameHi": "Iliac Vein Balloon Angioplasty for May-Thurner Syndrome (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Iliac Vein Balloon Angioplasty for May-Thurner Syndrome.",
    "indicationHi": "Iliac Vein Balloon Angioplasty for May-Thurner Syndrome (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Iliac Vein Balloon Angioplasty for May-Thurner Syndrome.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Iliac Vein Balloon Angioplasty for May-Thurner Syndrome का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-dedicated-venous-stenting-for-may": {
    "id": "c10-dedicated-venous-stenting-for-may",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Dedicated Venous Stenting for May-Thurner Syndrome (Venovo, Abre, Vici, Zilver Vena)",
    "nameHi": "Dedicated Venous Stenting for May-Thurner Syndrome (Venovo, Abre, Vici, Zilver Vena) (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Dedicated Venous Stenting for May-Thurner Syndrome (Venovo, Abre, Vici, Zilver Vena).",
    "indicationHi": "Dedicated Venous Stenting for May-Thurner Syndrome (Venovo, Abre, Vici, Zilver Vena) (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Dedicated Venous Stenting for May-Thurner Syndrome (Venovo, Abre, Vici, Zilver Vena).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Dedicated Venous Stenting for May-Thurner Syndrome (Venovo, Abre, Vici, Zilver Vena) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-recanalization-and-reconstruction-of-chronic": {
    "id": "c10-recanalization-and-reconstruction-of-chronic",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Recanalization and Reconstruction of Chronic Total Occlusions of the IVC",
    "nameHi": "Recanalization and Reconstruction of Chronic Total Occlusions of the IVC (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Recanalization and Reconstruction of Chronic Total Occlusions of the IVC.",
    "indicationHi": "Recanalization and Reconstruction of Chronic Total Occlusions of the IVC (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Recanalization and Reconstruction of Chronic Total Occlusions of the IVC.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Recanalization and Reconstruction of Chronic Total Occlusions of the IVC का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-kissing-venous-stents-deployment-for": {
    "id": "c10-kissing-venous-stents-deployment-for",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "\"Kissing\" Venous Stents Deployment for Caval-Bifurcation Chronic Thrombosis",
    "nameHi": "\"Kissing\" Venous Stents Deployment for Caval-Bifurcation Chronic Thrombosis (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for \"Kissing\" Venous Stents Deployment for Caval-Bifurcation Chronic Thrombosis.",
    "indicationHi": "\"Kissing\" Venous Stents Deployment for Caval-Bifurcation Chronic Thrombosis (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for \"Kissing\" Venous Stents Deployment for Caval-Bifurcation Chronic Thrombosis.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा \"Kissing\" Venous Stents Deployment for Caval-Bifurcation Chronic Thrombosis का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-inferior-vena-cava-filter-placement": {
    "id": "c10-inferior-vena-cava-filter-placement",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Inferior Vena Cava (IVC) Filter Placement (Infrarenal, Jugular / Femoral Approach)",
    "nameHi": "Inferior Vena Cava (IVC) Filter Placement (Infrarenal, Jugular / Femoral Approach) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Inferior Vena Cava (IVC) Filter Placement (Infrarenal, Jugular / Femoral Approach).",
    "indicationHi": "Inferior Vena Cava (IVC) Filter Placement (Infrarenal, Jugular / Femoral Approach) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Inferior Vena Cava (IVC) Filter Placement (Infrarenal, Jugular / Femoral Approach).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Inferior Vena Cava (IVC) Filter Placement (Infrarenal, Jugular / Femoral Approach) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-suprarenal-ivc-filter-placement": {
    "id": "c10-suprarenal-ivc-filter-placement",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Suprarenal IVC Filter Placement",
    "nameHi": "Suprarenal IVC Filter Placement (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Suprarenal IVC Filter Placement.",
    "indicationHi": "Suprarenal IVC Filter Placement (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Suprarenal IVC Filter Placement.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Suprarenal IVC Filter Placement का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-temporary-retrievable-ivc-filter-removal": {
    "id": "c10-temporary-retrievable-ivc-filter-removal",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Temporary / Retrievable IVC Filter Removal (Standard Snare Technique)",
    "nameHi": "Temporary / Retrievable IVC Filter Removal (Standard Snare Technique) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Temporary / Retrievable IVC Filter Removal (Standard Snare Technique).",
    "indicationHi": "Temporary / Retrievable IVC Filter Removal (Standard Snare Technique) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Temporary / Retrievable IVC Filter Removal (Standard Snare Technique).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Temporary / Retrievable IVC Filter Removal (Standard Snare Technique) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-complex-advanced-ivc-filter-retrieval": {
    "id": "c10-complex-advanced-ivc-filter-retrieval",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Complex / Advanced IVC Filter Retrieval (Loop-Snare / Hangman Technique)",
    "nameHi": "Complex / Advanced IVC Filter Retrieval (Loop-Snare / Hangman Technique) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Complex / Advanced IVC Filter Retrieval (Loop-Snare / Hangman Technique).",
    "indicationHi": "Complex / Advanced IVC Filter Retrieval (Loop-Snare / Hangman Technique) (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Complex / Advanced IVC Filter Retrieval (Loop-Snare / Hangman Technique).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Complex / Advanced IVC Filter Retrieval (Loop-Snare / Hangman Technique) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-complex-ivc-filter-retrieval-with": {
    "id": "c10-complex-ivc-filter-retrieval-with",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Complex IVC Filter Retrieval with Endobronchial Forceps",
    "nameHi": "Complex IVC Filter Retrieval with Endobronchial Forceps (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Complex IVC Filter Retrieval with Endobronchial Forceps.",
    "indicationHi": "Complex IVC Filter Retrieval with Endobronchial Forceps (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Complex IVC Filter Retrieval with Endobronchial Forceps.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Complex IVC Filter Retrieval with Endobronchial Forceps का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-complex-ivc-filter-retrieval-with-proc199": {
    "id": "c10-complex-ivc-filter-retrieval-with-proc199",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Complex IVC Filter Retrieval with Excimer Laser Sheath",
    "nameHi": "Complex IVC Filter Retrieval with Excimer Laser Sheath (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Complex IVC Filter Retrieval with Excimer Laser Sheath.",
    "indicationHi": "Complex IVC Filter Retrieval with Excimer Laser Sheath (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Complex IVC Filter Retrieval with Excimer Laser Sheath.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Complex IVC Filter Retrieval with Excimer Laser Sheath का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-superior-vena-cava-syndrome-balloon": {
    "id": "c10-superior-vena-cava-syndrome-balloon",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Superior Vena Cava (SVC) Syndrome Balloon Angioplasty",
    "nameHi": "Superior Vena Cava (SVC) Syndrome Balloon Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Superior Vena Cava (SVC) Syndrome Balloon Angioplasty.",
    "indicationHi": "Superior Vena Cava (SVC) Syndrome Balloon Angioplasty (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Superior Vena Cava (SVC) Syndrome Balloon Angioplasty.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Superior Vena Cava (SVC) Syndrome Balloon Angioplasty का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-svc-stenting-for-malignant-obstruction": {
    "id": "c10-svc-stenting-for-malignant-obstruction",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "SVC Stenting for Malignant Obstruction",
    "nameHi": "SVC Stenting for Malignant Obstruction (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for SVC Stenting for Malignant Obstruction.",
    "indicationHi": "SVC Stenting for Malignant Obstruction (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for SVC Stenting for Malignant Obstruction.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा SVC Stenting for Malignant Obstruction का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-internal-jugular-vein-balloon-angioplasty": {
    "id": "c10-internal-jugular-vein-balloon-angioplasty",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Internal Jugular Vein Balloon Angioplasty and Stenting",
    "nameHi": "Internal Jugular Vein Balloon Angioplasty and Stenting (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Internal Jugular Vein Balloon Angioplasty and Stenting.",
    "indicationHi": "Internal Jugular Vein Balloon Angioplasty and Stenting (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Internal Jugular Vein Balloon Angioplasty and Stenting.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Internal Jugular Vein Balloon Angioplasty and Stenting का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-innominate-brachiocephalic-vein-recanalization-and": {
    "id": "c10-innominate-brachiocephalic-vein-recanalization-and",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Innominate / Brachiocephalic Vein Recanalization and Stenting",
    "nameHi": "Innominate / Brachiocephalic Vein Recanalization and Stenting (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Innominate / Brachiocephalic Vein Recanalization and Stenting.",
    "indicationHi": "Innominate / Brachiocephalic Vein Recanalization and Stenting (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Innominate / Brachiocephalic Vein Recanalization and Stenting.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Innominate / Brachiocephalic Vein Recanalization and Stenting का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-subclavian-vein-stenting-for-thoracic": {
    "id": "c10-subclavian-vein-stenting-for-thoracic",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Subclavian Vein Stenting for Thoracic Outlet Syndrome / Effort Thrombosis (Paget-Schroetter)",
    "nameHi": "Subclavian Vein Stenting for Thoracic Outlet Syndrome / Effort Thrombosis (Paget-Schroetter) (एंडोवास्कुलर स्टेंटिंग उपचार)",
    "indicationEn": "Management and definitive therapeutic intervention for Subclavian Vein Stenting for Thoracic Outlet Syndrome / Effort Thrombosis (Paget-Schroetter).",
    "indicationHi": "Subclavian Vein Stenting for Thoracic Outlet Syndrome / Effort Thrombosis (Paget-Schroetter) (एंडोवास्कुलर स्टेंटिंग उपचार) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Subclavian Vein Stenting for Thoracic Outlet Syndrome / Effort Thrombosis (Paget-Schroetter).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Subclavian Vein Stenting for Thoracic Outlet Syndrome / Effort Thrombosis (Paget-Schroetter) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-catheter-directed-thrombolysis-for-massive": {
    "id": "c10-catheter-directed-thrombolysis-for-massive",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Catheter-Directed Thrombolysis (EKOS) for Massive / Submassive Pulmonary Embolism (PE)",
    "nameHi": "Catheter-Directed Thrombolysis (EKOS) for Massive / Submassive Pulmonary Embolism (PE) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी))",
    "indicationEn": "Management and definitive therapeutic intervention for Catheter-Directed Thrombolysis (EKOS) for Massive / Submassive Pulmonary Embolism (PE).",
    "indicationHi": "Catheter-Directed Thrombolysis (EKOS) for Massive / Submassive Pulmonary Embolism (PE) (ट्रांसकैथेटर एम्बोलाइजेशन (सूक्ष्म नस बंदी)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Catheter-Directed Thrombolysis (EKOS) for Massive / Submassive Pulmonary Embolism (PE).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Catheter-Directed Thrombolysis (EKOS) for Massive / Submassive Pulmonary Embolism (PE) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-percutaneous-mechanical-aspiration-thrombectomy-for": {
    "id": "c10-percutaneous-mechanical-aspiration-thrombectomy-for",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Percutaneous Mechanical Aspiration Thrombectomy for Acute Massive PE (Inari FlowTriever)",
    "nameHi": "Percutaneous Mechanical Aspiration Thrombectomy for Acute Massive PE (Inari FlowTriever) (थ्रोम्बेक्टोमी (खून का थक्का निकालना))",
    "indicationEn": "Management and definitive therapeutic intervention for Percutaneous Mechanical Aspiration Thrombectomy for Acute Massive PE (Inari FlowTriever).",
    "indicationHi": "Percutaneous Mechanical Aspiration Thrombectomy for Acute Massive PE (Inari FlowTriever) (थ्रोम्बेक्टोमी (खून का थक्का निकालना)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Percutaneous Mechanical Aspiration Thrombectomy for Acute Massive PE (Inari FlowTriever).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Percutaneous Mechanical Aspiration Thrombectomy for Acute Massive PE (Inari FlowTriever) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-large-bore-mechanical-thrombectomy-for": {
    "id": "c10-large-bore-mechanical-thrombectomy-for",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Large-Bore Mechanical Thrombectomy for Acute PE (Penumbra Lightning 12 / Lightning Bolt)",
    "nameHi": "Large-Bore Mechanical Thrombectomy for Acute PE (Penumbra Lightning 12 / Lightning Bolt) (थ्रोम्बेक्टोमी (खून का थक्का निकालना))",
    "indicationEn": "Management and definitive therapeutic intervention for Large-Bore Mechanical Thrombectomy for Acute PE (Penumbra Lightning 12 / Lightning Bolt).",
    "indicationHi": "Large-Bore Mechanical Thrombectomy for Acute PE (Penumbra Lightning 12 / Lightning Bolt) (थ्रोम्बेक्टोमी (खून का थक्का निकालना)) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Large-Bore Mechanical Thrombectomy for Acute PE (Penumbra Lightning 12 / Lightning Bolt).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Large-Bore Mechanical Thrombectomy for Acute PE (Penumbra Lightning 12 / Lightning Bolt) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-balloon-pulmonary-angioplasty-for-chronic": {
    "id": "c10-balloon-pulmonary-angioplasty-for-chronic",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Balloon Pulmonary Angioplasty (BPA) for Chronic Thromboembolic Pulmonary Hypertension (CTEPH)",
    "nameHi": "Balloon Pulmonary Angioplasty (BPA) for Chronic Thromboembolic Pulmonary Hypertension (CTEPH) (बैलून एंजियोप्लास्टी एवं स्टेंटिंग)",
    "indicationEn": "Management and definitive therapeutic intervention for Balloon Pulmonary Angioplasty (BPA) for Chronic Thromboembolic Pulmonary Hypertension (CTEPH).",
    "indicationHi": "Balloon Pulmonary Angioplasty (BPA) for Chronic Thromboembolic Pulmonary Hypertension (CTEPH) (बैलून एंजियोप्लास्टी एवं स्टेंटिंग) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Balloon Pulmonary Angioplasty (BPA) for Chronic Thromboembolic Pulmonary Hypertension (CTEPH).",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Balloon Pulmonary Angioplasty (BPA) for Chronic Thromboembolic Pulmonary Hypertension (CTEPH) का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-pulmonary-artery-mechanical-clot-fragmentation": {
    "id": "c10-pulmonary-artery-mechanical-clot-fragmentation",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Pulmonary Artery Mechanical Clot Fragmentation",
    "nameHi": "Pulmonary Artery Mechanical Clot Fragmentation (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Pulmonary Artery Mechanical Clot Fragmentation.",
    "indicationHi": "Pulmonary Artery Mechanical Clot Fragmentation (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Pulmonary Artery Mechanical Clot Fragmentation.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Pulmonary Artery Mechanical Clot Fragmentation का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  },
  "c10-catheter-directed-splanchnic-mesenteric-vein": {
    "id": "c10-catheter-directed-splanchnic-mesenteric-vein",
    "category": "Venous Interventions & Thromboembolic Disease Management",
    "nameEn": "Catheter-Directed Splanchnic Mesenteric Vein Thrombolysis",
    "nameHi": "Catheter-Directed Splanchnic Mesenteric Vein Thrombolysis (इंटरवेंशनल रेडियोलॉजी प्रक्रिया)",
    "indicationEn": "Management and definitive therapeutic intervention for Catheter-Directed Splanchnic Mesenteric Vein Thrombolysis.",
    "indicationHi": "Catheter-Directed Splanchnic Mesenteric Vein Thrombolysis (इंटरवेंशनल रेडियोलॉजी प्रक्रिया) बीमारी के सटीक निदान एवं न्यूनतम चीरे द्वारा उपचार हेतु।",
    "descriptionEn": "Under real-time image guidance (fluoroscopy / ultrasound / CT) and appropriate anesthesia, specialized microcatheters, wires, needles, or implants are carefully guided to the target lesion to treat the pathology with minimal trauma.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी), सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में सुन्न करके या हल्की बेहोशी में बहुत बारीक कैथेटर/सुई द्वारा लक्षित स्थान पर पहुंचकर बीमारी का सफल उपचार किया जाता है। इसमें किसी बड़े चीरे या टांके की आवश्यकता नहीं होती।",
    "benefitsEn": [
      "Minimally invasive, image-guided definitive intervention for Catheter-Directed Splanchnic Mesenteric Vein Thrombolysis.",
      "Significantly lower morbidity, blood loss, and complication rate compared to open surgery.",
      "Rapid post-procedure ambulation, minimal pain, and shortened hospital stay."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई के छेद द्वारा Catheter-Directed Splanchnic Mesenteric Vein Thrombolysis का आधुनिक उपचार।",
      "पारंपरिक सर्जरी की तुलना में रक्तस्राव और संक्रमण का बेहद कम खतरा।",
      "अस्पताल में कम समय रुकना और जल्द से जल्द सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Bleeding, bruising, hematoma, or pseudoaneurysm at the puncture site (1-3%).",
      "Vascular dissection, thrombosis, or arterial spasm requiring vasodilators or balloon angioplasty (<1%).",
      "Non-target distribution of embolic agents or contrast media (<1%).",
      "Allergic reaction to contrast medium or transient contrast-induced nephropathy (<2%).",
      "Technical inability to complete the procedure requiring alternative surgical intervention (<2%)."
    ],
    "specificRisksHi": [
      "सुई लगाने की जगह पर खून का थक्का (हेमेटोमा), सूजन या हल्का रक्तस्राव (1-3%)।",
      "नस में हल्का खिंचाव, सिकुड़न अथवा थक्का जमने की संभावना (<1%)।",
      "कंट्रास्ट डाई से हल्की एलर्जी (खुजली/चकत्ते) अथवा किडनी पर अस्थायी प्रभाव (<2%)।",
      "प्रक्रिया के दौरान जटिल शारीरिक बनावट के कारण पूर्ण सफलता न मिलने पर वैकल्पिक उपचार या सर्जरी की आवश्यकता (<2%)।",
      "प्रक्रिया के बाद हल्का दर्द अथवा बुखार जो दवाइयों से सामान्य हो जाता है।"
    ],
    "alternativesEn": "Open surgical intervention, conservative long-term pharmacotherapy, or watchful clinical surveillance depending on individual clinical risk assessment.",
    "alternativesHi": "पारंपरिक खुला ऑपरेशन (Open Surgery), दीर्घकालिक दवाइयां अथवा रोग की निरंतर निगरानी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation and continuous invasive hemodynamic monitoring.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
  }
};
