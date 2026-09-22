# -*- coding: utf-8 -*-
"""
Part 1D: Breast, Prostate, Bone & Soft Tissue, Endobiliary & Transvascular Biopsies (Procedures 32 to 53)
"""

DATA_PART1D = [
    {
        "id": "usg-breast-core-biopsy-14g",
        "name": "Ultrasound-Guided Breast Core Needle Biopsy (14-Gauge Automated)",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV032",
        "rghsCode": "693 / 41",
        "icd10": "C50.919 (Malignant neoplasm of unspecified breast) / N63.0 (Unspecified lump in breast)",
        "indications": [
            "BI-RADS category 4 or 5 solid or complex cystic/solid breast mass detected on mammography or ultrasound",
            "Palpable breast lump requiring histological characterization prior to definitive surgical or oncological therapy",
            "Assessment of receptor status (ER, PR, HER2-neu, Ki-67) for invasive breast carcinoma",
            "Differentiating invasive ductal carcinoma from fibroadenoma, phyllodes tumor, or fat necrosis"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
            "Diagnostic mammogram and breast ultrasound reviewed with lesion quadrant and clock-face position documented",
            "Aspirin / NSAIDs held 3-5 days if feasible; patient supine or slightly rolled with ipsilateral arm raised",
            "Fasting not required; informed consent obtained"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "14G Automated Spring-Loaded Breast Biopsy Needle", "spec": "14G x 10 cm automated cutting needle with 22 mm throw and echogenic tip", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Frequency Linear Breast Probe", "spec": "10 - 15 MHz linear array with dedicated breast software", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2% with Adrenaline", "spec": "10 mL ampoule (1:200,000 epinephrine)", "standardStore": "DDC-14 Central" },
            { "category": "Biopsy Marker", "name": "Titanium Breast Tissue Marker Clip (Optional)", "spec": "14G delivery cannula with radiopaque titanium marker", "standardStore": "Central IR Consignment Store" }
        ],
        "techniqueSteps": [
            "Position patient supine or slightly rolled (contralateral posterior oblique) with ipsilateral hand behind head.",
            "Sonographically locate breast mass; measure dimensions and orient needle parallel to chest wall and pectoralis muscle.",
            "Sterilize breast skin; infiltrate 10 mL 2% Lignocaine with adrenaline into skin, subcutaneous fat, and retromammary space under US guidance.",
            "Make a 2-mm skin dermatotomy using an 11-blade scalpel.",
            "Introduce 14G automated needle under real-time continuous sonographic vision along the long axis of the transducer.",
            "Position needle notch at the anterior margin of the mass, keeping trajectory strictly parallel to chest wall to eliminate pneumothorax risk.",
            "Fire automated needle; confirm needle traversing center of tumor; retrieve core; obtain 3-5 cores for full biomarker profiling.",
            "Deploy titanium tissue marker clip if neoadjuvant chemotherapy is planned; apply direct manual compression for 10-15 minutes and pressure dressing."
        ],
        "complications": [
            "Breast bruising and local hematoma (5-10%, usually self-limiting)",
            "Local pain and breast tenderness (10-15%)",
            "Significant hematoma requiring drainage (<1%)",
            "Skin infection / cellulitis (<0.5%)",
            "Pneumothorax (<0.01% with strict parallel-to-chest-wall technique)"
        ],
        "maayTariffInr": 4500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित स्तन (ब्रेस्ट) कोर नीडल बायोप्सी (14-गेज ऑटोमेटेड)",
            "indicationEn": "Histopathological diagnosis and receptor profiling (ER/PR/HER2) of breast lump or suspected breast cancer.",
            "indicationHi": "स्तन (ब्रेस्ट) की गांठ में कैंसर की पुष्टि, गांठ के प्रकार तथा हार्मोन रिसेप्टर (ER, PR, HER2) की जांच हेतु सुई से टुकड़ा लेना।",
            "descriptionEn": "Under real-time ultrasound guidance, an automated 14-gauge core needle is inserted parallel to the chest wall into the breast lump to collect tissue cores for cancer histology and receptor testing without surgery.",
            "descriptionHi": "स्तन की त्वचा को सुन्न करके, सोनोग्राफी से देखते हुए छाती की दीवार के समानांतर एक विशेष बायोप्सी सुई द्वारा स्तन की गांठ से 3-4 छोटे टुकड़े निकाले जाते हैं ताकि कैंसर और हार्मोन रिसेप्टर्स की पक्की जांच हो सके।",
            "benefitsEn": [
                "Gold-standard non-surgical method for diagnosing breast cancer with >99% accuracy.",
                "Provides ample tissue for complete ER, PR, HER2-neu, and Ki-67 immunohistochemistry.",
                "Avoids surgical excision biopsy, leaving virtually no visible scar."
            ],
            "benefitsHi": [
                "स्तन कैंसर की जांच का 99% से अधिक सटीक और प्रामाणिक तरीका।",
                "हार्मोन रिसेप्टर और आधुनिक दवाओं के चयन के लिए पर्याप्त टिशू मिलता है।",
                "बिना किसी बड़े ऑपरेशन या निशान के ओपीडी में ही कुछ मिनटों में जांच हो जाती है।"
            ],
            "specificRisksEn": [
                "Breast soreness and local bruising for 2-4 days (5-10%).",
                "Hematoma (blood collection) inside breast tissue (1-3%).",
                "Mild bleeding at the skin nick (1-2%).",
                "Extremely rare chest wall injury or pneumothorax (<0.01%).",
                "Need for repeat biopsy if sample is discordant with imaging (<2%)."
            ],
            "specificRisksHi": [
                "स्तन में 2-4 दिन हल्का दर्द या त्वचा पर नील पड़ना (5-10%)।",
                "स्तन के अंदर खून का थक्का (हेमेटोमा) जमना (1-3%)।",
                "त्वचा के छोटे छेद से हल्का खून रिसाव (1-2%)।",
                "छाती की दीवार पर असर का अत्यंत दुर्लभ खतरा (<0.01%)।",
                "रिपोर्ट और सोनोग्राफी में अंतर होने पर दोबारा जांच का हल्का जोखिम (<2%)।"
            ],
            "alternativesEn": "Vacuum-assisted breast biopsy (VABB), surgical open excision biopsy under general anesthesia, or short-term imaging follow-up.",
            "alternativesHi": "वैक्यूम-असिस्टेड बायोप्सी (VABB), ऑपरेशन करके पूरी गांठ निकालना, या सोनोग्राफी से निगरानी।",
            "sedationTypeEn": "Local anesthesia to the breast.",
            "sedationTypeHi": "स्तन पर स्थानीय सुन्नता (Local Anesthesia)।"
        }
    },
    {
        "id": "usg-breast-vabb",
        "name": "Ultrasound-Guided Breast Vacuum-Assisted Core Biopsy (VABB)",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV033",
        "rghsCode": "693 / 43",
        "icd10": "D24.9 (Benign neoplasm of breast) / C50.919 (Breast malignancy)",
        "indications": [
            "Complete therapeutic percutaneous excision of symptomatic benign breast lesions (fibroadenoma, papilloma < 2-3 cm)",
            "High-volume diagnostic sampling of subtle architectural distortion or small complex cysts",
            "Indeterminate (B3) lesions on prior core biopsy (atypical ductal hyperplasia, lobular neoplasia, radial scar)",
            "Cosmetically sensitive scarless breast lesion removal"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.3, Platelets >= 80,000/uL",
            "Complete bilateral mammogram and ultrasound mapping within 6 weeks",
            "Discontinuation of anticoagulants and antiplatelet agents for 5-7 days",
            "Fasting not required; patient supine with ipsilateral arm overhead"
        ],
        "hardware": [
            { "category": "VABB System", "name": "7G - 10G Vacuum-Assisted Breast Biopsy Handpiece & Driver", "spec": "EnCor Enspire / Mammotome Elite / BD EleVation VABB system with rotating cutter and continuous vacuum", "standardStore": "Central IR Consignment Store" },
            { "category": "Ultrasound Transducer", "name": "High-Resolution Linear Probe", "spec": "10 - 15 MHz linear transducer", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2% with Adrenaline & Bicarbonate", "spec": "20-30 mL tumescent anesthetic mixture", "standardStore": "DDC-14 Central" },
            { "category": "Biopsy Marker", "name": "Tissue Localization Clip", "spec": "Titanium / nitinol radiopaque tissue marker", "standardStore": "Central IR Consignment Store" }
        ],
        "techniqueSteps": [
            "Position patient supine-oblique; sonographically measure the lesion in orthogonal planes.",
            "Infiltrate 20-30 mL buffered 1% Lignocaine with adrenaline around and beneath the lesion to create an acoustic cushion over pectoralis muscle.",
            "Make a single 3-mm skin nick; introduce the 8G-10G VABB probe under continuous real-time sonography directly beneath the lesion.",
            "Engage vacuum suction; the tissue is drawn into the specimen aperture, severed cleanly by the motorized rotating cutter, and transported out automatically without needle withdrawal.",
            "Rotate probe clock-wise (360 degrees) under continuous real-time US vision until the entire mass is completely excised.",
            "Confirm complete lesion clearance on orthogonal sonographic views.",
            "Deploy radiopaque titanium clip into the biopsy cavity through the probe cannula to mark the site for future mammographic surveillance.",
            "Aspirate residual hematoma using vacuum; apply firm manual compression for 15-20 minutes, followed by a pressure compression bandage for 24-48 hours."
        ],
        "complications": [
            "Breast hematoma or ecchymosis (5-12%, controlled with compression)",
            "Post-procedure breast discomfort / aching (15-20%)",
            "Skin tethering or subtle subcutaneous fat necrosis (<1%)",
            "Clip migration away from cavity (<1%)",
            "Infection / abscess (<0.5%)"
        ],
        "maayTariffInr": 18000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Merit Medical Systems (+91 98294 56789)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित स्तन वैक्यूम-असिस्टेड कोर बायोप्सी (VABB - बिना चीरे गांठ निकालना)",
            "indicationEn": "Scarless complete removal or large-volume biopsy of benign breast lumps (fibroadenoma, papilloma).",
            "indicationHi": "स्तन की साधारण गांठ (फाइब्रोएडीनोमा/पैपिलोमा) को बिना कोई बड़ा चीरा या टांका लगाए वैक्यूम सुई द्वारा पूरी तरह निकालना।",
            "descriptionEn": "Under real-time ultrasound guidance, a specialized motorized vacuum needle is placed beneath the breast lump through a tiny 3-mm puncture. Continuous vacuum suction draws the lump into the needle where a rotating blade shaves and removes it completely without open surgery.",
            "descriptionHi": "स्तन को सुन्न करके, सोनोग्राफी से देखते हुए मात्र 3 मिमी के छेद से एक विशेष वैक्यूम बायोप्सी प्रोब गांठ के नीचे पहुंचाया जाता है। वैक्यूम और घूमने वाले ब्लेड की मदद से पूरी गांठ को अंदर ही अंदर टुकड़ों में काटकर बाहर निकाल लिया जाता है और स्तन पर कोई निशान नहीं रहता।",
            "benefitsEn": [
                "Complete scarless excision of benign lumps (fibroadenoma) in a 20-minute day-care procedure.",
                "Zero cosmetic deformity or visible surgical scar on the breast.",
                "Provides massive tissue volume for 100% histological certainty."
            ],
            "benefitsHi": [
                "बिना चीरा लगाए केवल 20 मिनट में पूरी गांठ बाहर निकल जाती है।",
                "स्तन पर कोई कट, टांका या बदसूरत निशान नहीं रहता, सुंदरता पूरी तरह बनी रहती है।",
                "पूरी गांठ की जांच होने से रिपोर्ट शत-प्रतिशत प्रामाणिक होती है।"
            ],
            "specificRisksEn": [
                "Hematoma (internal blood collection) or bruising in the breast (5-12%, settles with pressure bandage).",
                "Breast aching or soreness for 3-5 days (15-20%).",
                "Skin indentation or temporary dimpling over the excision site (<1%).",
                "Bleeding requiring delayed re-compression (<1%).",
                "Very rare wound infection (<0.5%)."
            ],
            "specificRisksHi": [
                "स्तन में खून का थक्का जमना या त्वचा पर नील पड़ना (5-12%, पट्टी बांधने से ठीक हो जाता है)।",
                "स्तन में 3-5 दिन हल्का दर्द या खिंचाव (15-20%)।",
                "गांठ निकलने की जगह पर हल्का गड्ढा या त्वचा का खिंचाव (<1%)।",
                "अतिरिक्त ब्लीडिंग जिसके लिए दोबारा पट्टी कसने की आवश्यकता पड़े (<1%)।",
                "संक्रमण का दुर्लभ जोखिम (<0.5%)।"
            ],
            "alternativesEn": "Conventional open surgical excision under local/general anesthesia, standard 14G core needle biopsy, or ultrasound surveillance.",
            "alternativesHi": "चीरा लगाकर स्तन का खुला ऑपरेशन (Lumpectomy), 14-गेज साधारण बायोप्सी, या सोनोग्राफी से निगरानी।",
            "sedationTypeEn": "Tumescent local anesthesia with optional mild oral conscious sedation.",
            "sedationTypeHi": "विशेष स्थानीय सुन्नता (Tumescent Local Anesthesia) और हल्की शामक दवा।"
        }
    },
    {
        "id": "stereotactic-breast-vabb",
        "name": "Stereotactic / Tomosynthesis-Guided Vacuum-Assisted Breast Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV034",
        "rghsCode": "693 / 43",
        "icd10": "R92.0 (Mammographic microcalcifications) / D05.10 (Ductal carcinoma in situ)",
        "indications": [
            "Suspicious clustered, linear, or branching microcalcifications (BI-RADS 4 or 5) invisible on ultrasound",
            "Architectural distortion or subtle asymmetry identified only on digital breast tomosynthesis (DBT)",
            "Detection and sampling of Ductal Carcinoma In Situ (DCIS)",
            "Preoperative histological confirmation prior to oncoplastic breast conservation surgery"
        ],
        "preOpCriteria": [
            "Coagulation testing: INR <= 1.3, Platelets >= 80,000/uL",
            "Digital mammogram / DBT demonstrating calcification cluster is safely accessible (>25-30 mm compressed breast thickness)",
            "Aspirin / antiplatelet agents discontinued 5-7 days prior",
            "Patient capable of remaining motionless in prone or seated position for 30 minutes"
        ],
        "hardware": [
            { "category": "Biopsy System", "name": "9G - 11G Stereotactic / DBT Vacuum Biopsy System", "spec": "Hologic Affirm / Brevera / BD EnCor system with computerized coordinate driver", "standardStore": "Stereotactic Biopsy Suite" },
            { "category": "Mammography Unit", "name": "Dedicated Digital Mammography / DBT System with Biopsy Add-On", "spec": "Upright / prone stereotactic table with stereo-pair tube angulation (+/-15 deg)", "standardStore": "Mammography Department" },
            { "category": "Specimen Radiography", "name": "Specimen Radiography Cabinet (Faxitron)", "spec": "High-magnification digital specimen radiograph unit", "standardStore": "Mammography Department" },
            { "category": "Marker Clip", "name": "Radiopaque Titanium Micro-Marker Clip", "spec": "9G delivery system with bioabsorbable collagen / titanium clip", "standardStore": "Central IR Consignment Store" }
        ],
        "techniqueSteps": [
            "Position patient prone or seated on stereotactic table; apply gentle breast compression targeting the microcalcifications.",
            "Acquire scout stereo-pair mammographic images (+15 and -15 degrees) or DBT sweep; computer calculates 3D coordinates (X, Y, Z depth).",
            "Prep skin; infiltrate 10-15 mL 2% Lignocaine with adrenaline down to the pre-calculated target depth.",
            "Make a 3-mm skin nick; mount 9G-11G vacuum needle on motorized stage and advance to target Z-depth.",
            "Acquire pre-fire stereo check images confirming needle aperture exactly aligned with microcalcifications.",
            "Execute automated 360-degree vacuum aspiration; harvest 6-12 contiguous tissue cores.",
            "Immediately radiograph harvested cores in Faxitron cabinet to verify presence of target microcalcifications in specimens.",
            "Deploy titanium marker clip into biopsy cavity; acquire post-marker release stereo image confirming clip position; apply compression for 15 minutes."
        ],
        "complications": [
            "Breast hematoma or skin bruising (5-10%)",
            "Vasovagal presyncope during compression / upright position (3-5%)",
            "Local breast pain and tenderness (10-15%)",
            "Target calcifications missed, requiring repeat sampling (<2%)",
            "Clip migration (<1%)"
        ],
        "maayTariffInr": 20000,
        "vendorContacts": [
            "Hologic India (+91 98295 67890)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "स्टीरियोटैक्टिक / टोमोसिंथेसिस-निर्देशित स्तन वैक्यूम बायोप्सी",
            "indicationEn": "High-precision computer-guided vacuum biopsy of mammographic microcalcifications invisible on ultrasound.",
            "indicationHi": "मैमोग्राफी में दिखने वाले बारीक सफेद कणों (माइक्रो-कैल्सीफिकेशन) अथवा शुरुआती कैंसर (DCIS) की कंप्यूटर-निर्देशित जांच।",
            "descriptionEn": "Using computerized digital mammography / tomosynthesis 3D coordinates, a vacuum biopsy needle is precisely guided into tiny microcalcifications in the breast to harvest tissue cores, which are immediately X-rayed to confirm successful sampling.",
            "descriptionHi": "कंप्यूटराइज्ड मैमोग्राफी मशीन से थ्री-डी नाप लेकर स्तन की बारीक गांठ या कैल्शियम के कणों में एक विशेष वैक्यूम सुई पहुंचाई जाती है। निकाले गए टुकड़ों का तुरंत एक्स-रे करके देखा जाता है कि बीमारी के कण आ गए हैं या नहीं।",
            "benefitsEn": [
                "Only non-surgical method capable of sampling mammographic microcalcifications.",
                "Diagnoses early non-invasive breast cancer (DCIS) years before it becomes a palpable lump.",
                "Specimen X-ray confirms on the table that target calcifications have been successfully removed."
            ],
            "benefitsHi": [
                "सोनोग्राफी पर न दिखने वाले बारीक कणों की जांच का यह एकमात्र सुरक्षित तरीका है।",
                "शुरुआती कैंसर (DCIS) को गांठ बनने से कई साल पहले ही पकड़ लेता है।",
                "टेबल पर ही टुकड़ों का एक्स-रे करके पक्का कर लिया जाता है कि सही जगह से सैंपल आ गया है।"
            ],
            "specificRisksEn": [
                "Breast bruising and local hematoma (5-10%, usually settles in 1-2 weeks).",
                "Temporary dizziness or vasovagal faintness while compressed (3-5%).",
                "Breast soreness for 2-3 days (10-15%).",
                "Extremely rare failure to retrieve calcifications, requiring repeat procedure (<2%).",
                "Minor clip displacement (<1%)."
            ],
            "specificRisksHi": [
                "स्तन पर हल्का नील पड़ना या खून का थक्का (5-10%)।",
                "दबाव के कारण चक्कर आना या घबराहट (3-5%)।",
                "स्तन में 2-3 दिन हल्का दर्द (10-15%)।",
                "कैल्शियम के कण सैंपल में न आने पर दोबारा जांच की दुर्लभ संभावना (<2%)।",
                "अंदर छोड़ा गया छोटा मार्कर थोड़ा खिसकना (<1%)।"
            ],
            "alternativesEn": "Surgical wire-localized open excision biopsy under general anesthesia, or 6-month mammographic follow-up.",
            "alternativesHi": "तार डालकर ऑपरेशन द्वारा स्तन का टुकड़ा निकालना (Wire Localized Biopsy) या 6 महीने बाद मैमोग्राफी।",
            "sedationTypeEn": "Local anesthesia to the breast.",
            "sedationTypeHi": "स्तन पर स्थानीय सुन्नता (Local Anesthesia)।"
        }
    },
    {
        "id": "mri-breast-biopsy",
        "name": "MRI-Guided Breast Core Needle / Vacuum Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV035",
        "rghsCode": "693 / 43",
        "icd10": "C50.919 (Malignant neoplasm of breast) / R92.8 (Other abnormal findings on diagnostic imaging of breast)",
        "indications": [
            "Suspicious enhancing breast lesion seen only on contrast-enhanced dynamic MRI (MRI-only lesion)",
            "Second-look ultrasound and targeted mammography negative for MRI-detected abnormality",
            "High-risk screening (BRCA1/BRCA2 mutation carriers) with occult dynamic enhancing lesion",
            "Assessing multicentricity or contralateral occult malignancy prior to breast cancer surgery"
        ],
        "preOpCriteria": [
            "Standard MRI safety screening: absence of incompatible pacemakers, ferromagnetic clips, or severe claustrophobia",
            "Renal function: Serum Creatinine and eGFR adequate for Gadolinium-based contrast agent",
            "Coagulation: INR <= 1.3, Platelets >= 80,000/uL",
            "Scheduled during days 7-14 of menstrual cycle (if premenopausal) to minimize background parenchymal enhancement"
        ],
        "hardware": [
            { "category": "MRI Biopsy System", "name": "MRI-Compatible Vacuum Biopsy System", "spec": "9G - 10G fully non-magnetic vacuum biopsy handpiece with titanium components", "standardStore": "MRI Suite Interventional Cabinet" },
            { "category": "MRI Coil & Grid", "name": "Dedicated Breast Biopsy Coil with Compression Grid", "spec": "4-8 channel phased array breast coil with fiducial localization plates", "standardStore": "MRI Suite Main Store" },
            { "category": "MRI Marker", "name": "MRI-Compatible Titanium / Nitinol Tissue Marker Clip", "spec": "Radiopaque and MRI-compatible post-biopsy marker", "standardStore": "Central IR Consignment Store" },
            { "category": "Contrast Agent", "name": "Gadolinium-Based Contrast Agent (GBCA)", "spec": "0.1 mmol/kg IV macrocyclic Gadolinium", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient prone in the dedicated MRI breast coil with target breast immobilized in the grid compression plate.",
            "Acquire non-contrast T1 and dynamic contrast-enhanced T1-weighted fat-suppressed MRI sequences with fiducial markers.",
            "Identify target enhancing lesion; calculate grid coordinate (alpha-numeric hole) and depth (Z-axis).",
            "Displace patient from gantry bore; sterilize breast grid; infiltrate 15 mL 2% Lignocaine with adrenaline.",
            "Make a 3-mm skin nick; insert MRI-compatible 9G/10G needle sleeve with MRI obturator to calculated depth.",
            "Slide patient back into bore; acquire fast T1 verification scan confirming obturator artifact intersects target lesion.",
            "Replace obturator with MRI-compatible vacuum biopsy cutter; harvest 6-12 circumferential tissue cores.",
            "Deploy MRI-compatible titanium marker clip; acquire confirmation scan verifying clip at site; withdraw probe and apply pressure dressing."
        ],
        "complications": [
            "Breast hematoma and bruising (5-12%)",
            "Vasovagal episode or claustrophobia during MRI bore positioning (3-5%)",
            "Local pain and soreness (10-15%)",
            "Lesion non-visualization after contrast washout (<2%)",
            "Allergic reaction to Gadolinium contrast (<0.1%)"
        ],
        "maayTariffInr": 25000,
        "vendorContacts": [
            "Hologic India (+91 98295 67890)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "एमआरआई-निर्देशित स्तन वैक्यूम बायोप्सी",
            "indicationEn": "Biopsy of occult breast lesions visible exclusively on contrast-enhanced MRI (MRI-only lesions).",
            "indicationHi": "केवल एमआरआई पर दिखने वाली और अल्ट्रासाउंड/मैमोग्राफी पर न दिखने वाली अत्यंत बारीक स्तन की गांठ की जांच।",
            "descriptionEn": "Under MRI guidance using dedicated non-magnetic equipment, a vacuum biopsy needle is precisely placed into an MRI-detected enhancing breast lesion to extract tissue cores and deploy a tiny marker clip.",
            "descriptionHi": "एमआरआई मशीन के अंदर विशेष गैर-चुंबकीय वैक्यूम सुई की सहायता से केवल एमआरआई पर दिखने वाली स्तन की गांठ का सटीक टुकड़ा निकाला जाता है और भविष्य की पहचान के लिए छोटा सा क्लिप छोड़ा जाता है।",
            "benefitsEn": [
                "Only available method to biopsy occult breast cancers visible exclusively on MRI.",
                "Essential for high-risk BRCA gene mutation carriers with occult early tumors.",
                "Avoids blind surgical excision and preserves maximum normal breast tissue."
            ],
            "benefitsHi": [
                "केवल एमआरआई पर चमकने वाले छिपे हुए कैंसर को पकड़ने की एकमात्र तकनीक।",
                "हाई-रिस्क और आनुवंशिक (BRCA) मरीजों में जान बचाने वाली शुरुआती जांच।",
                "बिना स्तन का बड़ा ऑपरेशन किए केवल सुई से जांच पूरी हो जाती है।"
            ],
            "specificRisksEn": [
                "Breast hematoma or skin bruising (5-12%, controlled with compression).",
                "Feeling claustrophobic or dizzy inside the MRI scanner (3-5%).",
                "Local breast pain for 2-3 days (10-15%).",
                "Rare allergic reaction to MRI dye (Gadolinium) (<0.1%).",
                "Need for re-testing if lesion enhancement fades rapidly (<2%)."
            ],
            "specificRisksHi": [
                "स्तन में खून का थक्का या नील पड़ना (5-12%)।",
                "एमआरआई मशीन के अंदर घबराहट या चक्कर आना (3-5%)।",
                "स्तन में 2-3 दिन हल्का दर्द (10-15%)।",
                "एमआरआई डाई से हल्की एलर्जी का दुर्लभ खतरा (<0.1%)।",
                "डाई का असर जल्दी खत्म होने पर जांच दोबारा करने की संभावना (<2%)।"
            ],
            "alternativesEn": "MRI-guided wire localization followed by open surgical biopsy, or short-interval (6-month) follow-up MRI.",
            "alternativesHi": "एमआरआई से तार डालकर ऑपरेशन द्वारा टुकड़ा निकालना, या 6 महीने बाद दोबारा एमआरआई कराना।",
            "sedationTypeEn": "Local anesthesia with optional mild oral anti-anxiety sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और घबराहट कम करने की हल्की दवा।"
        }
    },
    {
        "id": "trus-prostate-biopsy-12core",
        "name": "Ultrasound-Guided Transrectal Prostate Biopsy (TRUS-Biopsy, 12-Core Systematic)",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV036",
        "rghsCode": "693 / 41",
        "icd10": "C61 (Malignant neoplasm of prostate) / R97.20 (Elevated prostate specific antigen [PSA])",
        "indications": [
            "Serum Prostate-Specific Antigen (PSA) > 4.0 ng/mL or abnormal PSA density (>0.15 ng/mL2)",
            "Abnormal digital rectal examination (DRE) with palpable nodule or induration",
            "Systematic 12-core sampling of peripheral zone (base, mid, apex bilaterally)",
            "Surveillance biopsy in active surveillance protocols for low-risk prostate carcinoma"
        ],
        "preOpCriteria": [
            "Prophylactic fluoroquinolone / cephalosporin + aminoglycoside coverage (e.g. Ciprofloxacin/Ceftriaxone + Amikacin) administered 1-2 hours prior",
            "Fleet enema / rectal cleansing 2 hours prior to clear rectal ampulla",
            "Coagulation: INR <= 1.4, Platelets >= 50,000/uL; Aspirin held 5-7 days",
            "Urine routine/culture negative for active urinary tract infection"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G Automated Core Biopsy Needle", "spec": "18G x 20-25 cm automated needle with 15-20 mm throw, echogenic tip", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Probe", "name": "Endocavitary Biplane TRUS Transducer", "spec": "5 - 9 MHz biplane endocavitary probe with disposable needle guide", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 1% - 2% (Preservative-Free)", "spec": "10-15 mL with 22G x 20 cm Chiba needle for periprostatic nerve block", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Pre-Labeled 12-Vial Prostate Cassettes", "spec": "12 formalin containers labeled for right/left base, mid, apex, lateral/medial", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient in left lateral decubitus position with knees flexed toward chest.",
            "Perform gentle digital rectal examination; insert lubricated transrectal probe covered with sterile condom.",
            "Survey prostate gland, measure volume (Height x Width x Length x 0.52), and inspect peripheral zone.",
            "Perform bilateral periprostatic nerve block (PPNB): inject 5 mL 1% Lignocaine at the prostatic-seminal vesicle junction bilaterally under vision.",
            "Attach sterile needle guide to probe; introduce 18G automated core needle through rectal wall.",
            "Harvest 12 systematic cores: 6 from right peripheral zone (base lateral/medial, mid lateral/medial, apex lateral/medial) and 6 from left.",
            "Deposit each core into its individually pre-labeled formalin container.",
            "Withdraw probe; apply rectal compression for 2 minutes; instruct patient on hydration and red-flag symptoms (fever, urinary retention)."
        ],
        "complications": [
            "Hematuria (blood in urine) (50-60%, usually mild, self-limiting for 3-7 days)",
            "Hematospermia (blood in semen) (60-80%, can persist for 3-4 weeks)",
            "Rectal bleeding / minor hematochezia (15-20%)",
            "Urinary tract infection / post-biopsy sepsis (1-3%, requires urgent IV antibiotics)",
            "Acute urinary retention requiring temporary catheterization (1-2%)"
        ],
        "maayTariffInr": 4800,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित ट्रांसरेक्टल प्रोस्टेट बायोप्सी (TRUS बायोप्सी - 12-कोर सिस्टेमेटिक)",
            "indicationEn": "Systematic 12-core biopsy of the prostate for elevated PSA or abnormal digital rectal exam.",
            "indicationHi": "पौरुष ग्रंथि (प्रोस्टेट) का पीएसए (PSA) बढ़ने या गांठ होने पर लैट्रिन के रास्ते से 12 व्यवस्थित टुकड़े लेना।",
            "descriptionEn": "Under transrectal ultrasound guidance and local periprostatic nerve block, a specialized needle is placed through the rectal wall into the prostate gland to collect 12 systematic tissue cores from all zones to test for prostate cancer.",
            "descriptionHi": "लैट्रिन के रास्ते से सोनोग्राफी की जांच करके, प्रोस्टेट के आसपास सुन्न करने का इंजेक्शन लगाकर एक बारीक सुई से प्रोस्टेट के विभिन्न हिस्सों से 12 छोटे टुकड़े निकाले जाते हैं ताकि कैंसर की पक्की जांच हो सके।",
            "benefitsEn": [
                "Gold-standard systematic method for diagnosing prostate cancer and Gleason score grading.",
                "Periprostatic local nerve block makes the procedure comfortable with minimal pain.",
                "Enables early curative treatment (robotic surgery or radiation) before cancer spreads."
            ],
            "benefitsHi": [
                "प्रोस्टेट कैंसर और उसके ग्रेड (Gleason Score) का पता लगाने की सबसे प्रामाणिक जांच।",
                "सुन्न करने के विशेष इंजेक्शन से मरीज को दर्द का अहसास न के बराबर होता है।",
                "कैंसर फैलने से पहले ही समय पर सही इलाज शुरू करने में सहायक।"
            ],
            "specificRisksEn": [
                "Blood in urine (hematuria) for a few days (50-60%, self-limiting).",
                "Blood in semen (hematospermia) for 3-4 weeks (60-80%, harmless).",
                "Minor rectal bleeding after bowel movements (15-20%).",
                "Infection / urinary sepsis requiring IV antibiotics (1-3%).",
                "Temporary inability to pass urine (urinary retention) requiring a catheter (1-2%)."
            ],
            "specificRisksHi": [
                "पेशाब में कुछ दिन हल्का लाल रंग या खून आना (50-60%, स्वतः ठीक हो जाता है)।",
                "वीर्य में खून आना जो 3-4 हफ्ते रह सकता है (60-80%, हानिरहित)।",
                "लैट्रिन के साथ हल्का खून रिसाव (15-20%)।",
                "पेशाब का संक्रमण या तेज बुखार (1-3%, जिसमें तुरंत एंटीबायोटिक की जरूरत होती है)।",
                "पेशाब रुकना जिसके लिए कुछ दिन पेशाब की नली लगानी पड़ सकती है (1-2%)।"
            ],
            "alternativesEn": "Multiparametric MRI-targeted transperineal prostate biopsy, serial PSA and PSA velocity monitoring, or empirical medical therapy.",
            "alternativesHi": "पेल्विस के नीचे से ट्रांसपेरिनियल बायोप्सी (Transperineal Biopsy), एमआरआई जांच, अथवा पीएसए की नियमित निगरानी।",
            "sedationTypeEn": "Periprostatic nerve block (local anesthesia) with optional mild sedation.",
            "sedationTypeHi": "प्रोस्टेट की नसों का लोकल ब्लॉक (Local Anesthesia) और हल्की शामक दवा।"
        }
    },
    {
        "id": "mri-us-fusion-transperineal-prostate-biopsy",
        "name": "MRI-Ultrasound Fusion Targeted Transperineal Prostate Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV037",
        "rghsCode": "693 / 43",
        "icd10": "C61 (Malignant neoplasm of prostate) / R97.20 (Elevated PSA)",
        "indications": [
            "PI-RADS 3, 4, or 5 lesion identified on multiparametric prostate MRI (mpMRI)",
            "Anterior gland, transition zone, or apical prostate lesions notoriously missed on standard TRUS",
            "Patients with prior negative TRUS biopsy despite persistently rising PSA",
            "Elimination of post-biopsy urosepsis risk via clean transperineal access"
        ],
        "preOpCriteria": [
            "High-quality multiparametric MRI (T2W, DWI/ADC, DCE) reviewed with PIRADS scoring and ROI contours exported",
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "Single prophylactic dose of oral/IV antibiotic (no intense broad-spectrum cocktail required)",
            "Perineal skin clean; patient suitable for lithotomy positioning under sedation"
        ],
        "hardware": [
            { "category": "Fusion Platform", "name": "MRI-US Fusion Biopsy Navigation System", "spec": "Eigen Artemis / Koelis Trinity / Philips UroNav fusion platform with stepper unit", "standardStore": "Urology / IR Fusion Suite" },
            { "category": "Biopsy Needle", "name": "18G Coaxial Transperineal Biopsy Needle", "spec": "18G x 15-20 cm needle with disposable brachytherapy-style grid", "standardStore": "Central IR Consignment Store" },
            { "category": "Ultrasound Transducer", "name": "Biplane Transrectal Ultrasound Probe", "spec": "Sagittal and transverse array with stepper tracking", "standardStore": "Fusion Suite" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2% + Bupivacaine 0.5%", "spec": "Perineal subcutaneous and pelvic floor block", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient in dorsal lithotomy posture with legs elevated in stirrups.",
            "Sterilize the perineal skin between scrotum and anus under surgical asepsis.",
            "Insert tracking transrectal ultrasound probe; upload mpMRI data into fusion software and perform 3D image co-registration.",
            "Administer perineal subcutaneous and periprostatic / pelvic floor nerve block with 15-20 mL Lignocaine/Bupivacaine.",
            "Verify overlay of MRI-identified PIRADS lesion on live transrectal ultrasound images.",
            "Introduce 18G needle through perineal skin template grid directly into the targeted MRI region of interest.",
            "Harvest 3-5 targeted cores specifically from the PIRADS lesion; followed by systematic template sampling (12-14 cores).",
            "Withdraw needle and probe; apply pressure to perineum for 5 minutes; verify clear spontaneous voiding prior to discharge."
        ],
        "complications": [
            "Perineal bruising and local discomfort (10-15%)",
            "Hematuria (20-30%, clears in 2-4 days)",
            "Urosepsis / severe infection (<0.1%, virtually zero compared to transrectal route)",
            "Hematospermia (40-50%)",
            "Transient urinary retention (2-3%)"
        ],
        "maayTariffInr": 16000,
        "vendorContacts": [
            "Koelis / Jaipur Medical Systems (+91 98296 78901)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "एमआरआई-अल्ट्रासाउंड फ्यूजन लक्षित ट्रांसपेरिनियल प्रोस्टेट बायोप्सी",
            "indicationEn": "MRI-targeted precision biopsy of prostate cancer via the perineum with near-zero infection risk.",
            "indicationHi": "एमआरआई में दिखी प्रोस्टेट की संदिग्ध गांठ की अंडकोष के नीचे की साफ त्वचा (पेरिनियम) द्वारा बिना इन्फेक्शन के सटीक जांच।",
            "descriptionEn": "Using advanced software that fuses prior MRI images onto live ultrasound, an automated needle is guided through the clean skin of the perineum directly into the suspicious prostate lesion without passing through the rectum, eliminating sepsis risk.",
            "descriptionHi": "एमआरआई और सोनोग्राफी को आपस में कंप्यूटर द्वारा जोड़कर, लैट्रिन के रास्ते के बजाय अंडकोष के नीचे की साफ त्वचा (पेरिनियम) के रास्ते सुई सीधे कैंसर की गांठ में पहुंचाई जाती है। इससे गंभीर संक्रमण (Sepsis) का खतरा लगभग शून्य हो जाता है।",
            "benefitsEn": [
                "Near-zero risk of severe blood infection or sepsis (<0.1%) compared to transrectal biopsy.",
                "Accurately reaches anterior and apical prostate cancers frequently missed by conventional methods.",
                "Combines MRI target accuracy with comprehensive systematic tissue mapping."
            ],
            "benefitsHi": [
                "गंभीर इन्फेक्शन या सेप्सिस का खतरा नगण्य (<0.1%) रहता है।",
                "प्रोस्टेट के आगे और गहरे हिस्सों के छिपे हुए कैंसर को पकड़ने की सबसे आधुनिक तकनीक।",
                "एमआरआई में चिन्हित गांठ से सीधे सटीक टुकड़ा लिया जाता है।"
            ],
            "specificRisksEn": [
                "Perineal soreness and skin bruising for 2-3 days (10-15%).",
                "Mild blood in urine for a few days (20-30%).",
                "Blood in semen for 2-3 weeks (40-50%, harmless).",
                "Temporary difficulty in passing urine (urinary retention) (2-3%).",
                "Very rare need for repeat biopsy (<2%)."
            ],
            "specificRisksHi": [
                "अंडकोष के नीचे की त्वचा पर 2-3 दिन हल्का दर्द या नील पड़ना (10-15%)।",
                "पेशाब में कुछ दिन हल्का खून आना (20-30%)।",
                "वीर्य में 2-3 हफ्ते खून का अंश दिखना (40-50%)।",
                "अस्थायी रूप से पेशाब रुकना जिसके लिए कुछ दिन नली लगानी पड़ सकती है (2-3%)।",
                "दोबारा जांच की अत्यंत दुर्लभ संभावना (<2%)।"
            ],
            "alternativesEn": "Transrectal MRI-fusion biopsy, conventional 12-core TRUS biopsy, or active surveillance with serial mpMRI.",
            "alternativesHi": "लैट्रिन के रास्ते से ट्रांसरेक्टल फ्यूजन बायोप्सी, साधारण 12-कोर बायोप्सी, या केवल एमआरआई से निगरानी।",
            "sedationTypeEn": "Local perineal block with conscious IV sedation or spinal anesthesia.",
            "sedationTypeHi": "पेरिनियल लोकल ब्लॉक (Local Anesthesia) और नस द्वारा हल्की बेहोशी/शामक दवा।"
        }
    },
    {
        "id": "mri-us-fusion-transrectal-prostate-biopsy",
        "name": "MRI-Ultrasound Fusion Targeted Transrectal Prostate Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV038",
        "rghsCode": "693 / 43",
        "icd10": "C61 (Malignant neoplasm of prostate) / R97.20 (Elevated PSA)",
        "indications": [
            "Targeted sampling of PIRADS 3, 4, or 5 suspicious lesions identified on multiparametric prostate MRI",
            "Patients undergoing transrectal biopsy where software fusion equipment is available",
            "Targeted lesion cores combined with 12-core systematic template for comprehensive staging",
            "Repeat biopsy after initial negative systematic biopsy in patients with high clinical suspicion"
        ],
        "preOpCriteria": [
            "Prophylactic antibiotic regimen administered (Ciprofloxacin/Ceftriaxone + Amikacin)",
            "Rectal cleaning enema administered 2 hours prior",
            "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
            "Pre-procedure mpMRI DICOM loaded into fusion console with target contours marked"
        ],
        "hardware": [
            { "category": "Fusion System", "name": "MRI-US Fusion Transrectal Biopsy Platform", "spec": "UroNav / Artemis fusion station with electromagnetic or mechanical tracker", "standardStore": "Urology / IR Fusion Suite" },
            { "category": "Biopsy Needle", "name": "18G Automated Core Needle", "spec": "18G x 25 cm automated needle with echogenic tip", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Probe", "name": "Endocavitary Transrectal Probe with Tracker", "spec": "Biplane probe with calibrated spatial tracking sensor", "standardStore": "Fusion Suite" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 1% - 2%", "spec": "15 mL for bilateral periprostatic nerve block", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient in left lateral decubitus position with knees drawn to chest.",
            "Insert tracked endocavitary probe into rectum; perform spatial calibration to register live US with 3D MRI contours.",
            "Administer bilateral periprostatic nerve block (PPNB) under direct US guidance.",
            "Align transrectal biopsy guide with computer-projected MRI target trajectory.",
            "Advance 18G needle through rectal wall into the center of the PIRADS lesion; harvest 3-5 targeted cores.",
            "Complete procedure by performing standard 12-core systematic biopsy of the peripheral zone.",
            "Deposit targeted and systematic cores into separate pre-labeled formalin containers.",
            "Remove probe; compress rectum for 2 minutes; monitor vital signs and voiding."
        ],
        "complications": [
            "Hematuria (50-60%, usually mild)",
            "Hematospermia (60-80%, lasts several weeks)",
            "Rectal bleeding (15-20%)",
            "Post-biopsy infection / sepsis (1-3%, requires prompt IV antibiotics)",
            "Urinary retention (<2%)"
        ],
        "maayTariffInr": 14000,
        "vendorContacts": [
            "Philips Healthcare India (+91 98297 89012)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "एमआरआई-अल्ट्रासाउंड फ्यूजन लक्षित ट्रांसरेक्टल प्रोस्टेट बायोप्सी",
            "indicationEn": "MRI-guided targeted and systematic biopsy of prostate cancer via the transrectal approach.",
            "indicationHi": "एमआरआई में चिन्हित प्रोस्टेट की गांठ की लैट्रिन के रास्ते से कंप्यूटर-निर्देशित सटीक बायोप्सी।",
            "descriptionEn": "Under live ultrasound guidance fused with prior 3D MRI scans, an automated needle is inserted through the rectal wall directly into the MRI-detected tumor to harvest targeted cores along with systematic samples.",
            "descriptionHi": "सोनोग्राफी और एमआरआई को कंप्यूटर स्क्रीन पर एक साथ जोड़कर लैट्रिन के रास्ते से प्रोस्टेट की संदिग्ध गांठ में सुई डालकर सटीक टुकड़े निकाले जाते हैं ताकि कैंसर की पक्की पहचान हो सके।",
            "benefitsEn": [
                "Significantly higher detection rate for clinically significant prostate cancer compared to standard blind TRUS.",
                "Ensures small aggressive tumors seen on MRI are not missed.",
                "Provides accurate tumor localization for focal therapy or nerve-sparing surgery."
            ],
            "benefitsHi": [
                "साधारण बायोप्सी की तुलना में आक्रामक कैंसर को पकड़ने की दर बहुत अधिक होती है।",
                "एमआरआई में दिखने वाली छोटी से छोटी गांठ से भी सटीक टुकड़ा निकाला जाता है।",
                "सर्जरी के दौरान नसों को बचाने और पौरुष क्षमता बनाए रखने में मदद मिलती है।"
            ],
            "specificRisksEn": [
                "Blood in urine for a few days (50-60%).",
                "Blood in semen for 3-4 weeks (60-80%, harmless).",
                "Bleeding from rectum (15-20%).",
                "Urinary tract infection / sepsis requiring hospital treatment (1-3%).",
                "Urinary retention requiring temporary catheter (<2%)."
            ],
            "specificRisksHi": [
                "पेशाब में कुछ दिन खून आना (50-60%)।",
                "वीर्य में 3-4 हफ्ते तक खून का अंश दिखना (60-80%)।",
                "लैट्रिन के रास्ते से हल्का खून बहना (15-20%)।",
                "संक्रमण या तेज बुखार (1-3%, जिसके लिए तुरंत अस्पताल में इलाज आवश्यक होता है)।",
                "पेशाब रुकना जिसके लिए नली लगानी पड़ सकती है (<2%)।"
            ],
            "alternativesEn": "MRI-targeted transperineal prostate biopsy (lower infection risk), conventional TRUS biopsy, or active surveillance.",
            "alternativesHi": "अंडकोष के नीचे से ट्रांसपेरिनियल बायोप्सी (कम इन्फेक्शन रिस्क), साधारण 12-कोर बायोप्सी, या केवल निगरानी।",
            "sedationTypeEn": "Periprostatic nerve block with optional conscious sedation.",
            "sedationTypeHi": "प्रोस्टेट नसों का लोकल ब्लॉक (Local Anesthesia) और हल्की शामक दवा।"
        }
    },
    {
        "id": "ct-bone-biopsy-jamshidi",
        "name": "CT-Guided Bone Biopsy with Jamshidi Trephine Needle",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV039",
        "rghsCode": "693 / 42",
        "icd10": "M89.9 (Disorder of bone, unspecified) / C79.51 (Secondary malignant neoplasm of bone)",
        "indications": [
            "Destructive or mixed osteolytic bone lesion in pelvis, long bones, or vertebral column",
            "Suspected bone metastasis from unknown primary carcinoma",
            "Confirmation of multiple myeloma or solitary plasmacytoma",
            "Chronic osteomyelitis / tubercular skeletal disease requiring microbiological culture"
        ],
        "preOpCriteria": [
            "Coagulation status: INR <= 1.4, Platelets >= 60,000/uL",
            "Recent CT, MRI, or PET-CT reviewed to evaluate cortical breakthrough vs intact bone cortex",
            "Fasting 4 hours; adequate analgesia premedication administered",
            "Needle trajectory mapped perpendicular to bone cortex avoiding adjacent neurovascular bundles"
        ],
        "hardware": [
            { "category": "Bone Needle", "name": "11G / 13G Jamshidi Trephine Bone Biopsy Needle", "spec": "11G/13G x 10-15 cm manual trephine needle with extraction cannula and stylet", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "CT Accessories", "name": "Radiopaque Skin Grid & Laser Pointer", "spec": "Sterile skin localization grid", "standardStore": "CT Suite D-9211" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2% + Bupivacaine 0.5%", "spec": "20 mL for generous subperiosteal infiltration", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin Vials & Microbiology Transport Tubes", "spec": "10% formalin and sterile saline containers for fungal and AFB culture", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient prone, supine, or decubitus on CT table depending on bone lesion location.",
            "Acquire planning CT images; locate cortical breach or thinned cortex for optimal entry site.",
            "Sterilize and drape skin; infiltrate 15-20 mL local anesthetic into skin, subcutaneous tissues, and profusely under the bone periosteum.",
            "Make a 4-mm skin incision with scalpel.",
            "Introduce 11G/13G Jamshidi needle down to the bone surface under CT guidance; confirm needle angle perpendicular to cortex.",
            "Remove trocar stylet; advance trephine cannula through bone cortex with firm clockwise/counter-clockwise rotational pressure.",
            "Advance 15-20 mm into lesion marrow cavity; tilt needle 360 degrees to cleave the bone core base; withdraw needle.",
            "Eject intact bony cylindrical core using probe into formalin; send soft-tissue marrow for microbiology; apply sterile pressure dressing."
        ],
        "complications": [
            "Localized bone pain and deep muscular soreness (15-25%)",
            "Periosteal / subcutaneous hematoma (2-4%)",
            "Pathological fracture through biopsied bone cortex (<1%)",
            "Inadvertent neurovascular bundle injury (<0.5%)",
            "Inadequate crushed bone core (<5%)"
        ],
        "maayTariffInr": 8500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित हड्डी बायोप्सी (जमशीदी ट्रीफाइन सुई द्वारा)",
            "indicationEn": "Histopathological and microbiological diagnosis of bone tumors, metastases, myeloma, or bone tuberculosis.",
            "indicationHi": "हड्डी की गांठ, कैंसर के फैलाव (मेटास्टेसिस), मायलोमा अथवा हड्डी की टीबी की जांच हेतु सीटी स्कैन द्वारा हड्डी का टुकड़ा लेना।",
            "descriptionEn": "Under CT guidance and generous local anesthesia down to the sensitive bone lining (periosteum), a strong Jamshidi bone biopsy needle is rotated through the bone cortex into the tumor to obtain a solid bone core.",
            "descriptionHi": "सीटी स्कैन में देखकर हड्डी की बाहरी झिल्ली को अच्छी तरह सुन्न करके एक मजबूत जमशीदी बायोप्सी सुई द्वारा हड्डी के अंदर से छोटा सा ठोस टुकड़ा निकाला जाता है ताकि कैंसर या टीबी का पक्का पता चल सके।",
            "benefitsEn": [
                "Definitively establishes cancer diagnosis or bone infection without open orthopedic surgery.",
                "Sub-millimeter CT guidance prevents injury to major adjacent nerves and vessels.",
                "Provides both hard cortical bone and soft marrow tissue for pathology and culture."
            ],
            "benefitsHi": [
                "बिना हड्डी का बड़ा ऑपरेशन किए कैंसर या टीबी की पक्की पुष्टि होती है।",
                "सीटी स्कैन की मदद से आसपास की नसें पूरी तरह सुरक्षित रहती हैं।",
                "हड्डी और अंदर के गूदे दोनों की जांच एक साथ हो जाती है।"
            ],
            "specificRisksEn": [
                "Bone pain and deep ache for 2-4 days (15-25%, managed with painkillers).",
                "Local bruising or hematoma around the bone (2-4%).",
                "Small risk of hairline crack or pathological fracture in weakened bone (<1%).",
                "Rare injury to adjacent nerve causing numbness (<0.5%).",
                "Crushed or inadequate bone core requiring repeat procedure (<5%)."
            ],
            "specificRisksHi": [
                "हड्डी में 2-4 दिन गहरा दर्द या खिंचाव (15-25%, दर्द की दवा से नियंत्रित)।",
                "हड्डी के पास खून का थक्का या सूजन (2-4%)।",
                "कमजोर हड्डी में बाल जितनी बारीक दरार (फ्रैक्चर) का हल्का जोखिम (<1%)।",
                "पास की नस में खिंचाव से सुन्नपन का दुर्लभ खतरा (<0.5%)।",
                "हड्डी का टुकड़ा दबने पर दोबारा जांच की आवश्यकता (<5%)।"
            ],
            "alternativesEn": "Surgical open bone biopsy / curettage under general anesthesia, powered mechanical drill biopsy, or empirical medical trial.",
            "alternativesHi": "ऑपरेशन थियेटर में चीरा लगाकर हड्डी का टुकड़ा निकालना (Open Biopsy), या ड्रिल मशीन से बायोप्सी।",
            "sedationTypeEn": "Generous periosteal local anesthesia with monitored IV conscious sedation.",
            "sedationTypeHi": "हड्डी की सतह पर गहरा लोकल एनेस्थीसिया और नस द्वारा शामक/दर्द निवारक दवा।"
        }
    },
    {
        "id": "ct-bone-biopsy-mechanical-drill",
        "name": "CT-Guided Bone Biopsy with Powered Mechanical Drill (Bonopty / OnControl)",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV040",
        "rghsCode": "693 / 43",
        "icd10": "M89.9 (Disorder of bone, unspecified) / C79.51 (Secondary bone malignancy)",
        "indications": [
            "Dense sclerotic or osteoblastic bone lesions (e.g. prostate or breast sclerotic metastases) where manual needles fail",
            "Deep cortical bone lesions through thick, intact cortex (femoral shaft, pelvic ring, sclerotic spine)",
            "Rapid, torque-free bone penetration in patients with severe pain or frail bone stability",
            "Retrieval of uncrushed, high-quality architectural bone core specimens"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "CT reviewed to plan exact entry trajectory through sclerotic cortex",
            "Battery pack charged and sterile drill handpiece checked prior to draping",
            "Patient premedicated with analgesia and conscious sedation"
        ],
        "hardware": [
            { "category": "Powered Drill System", "name": "Motorized Bone Biopsy System (OnControl / Bonopty)", "spec": "Battery-powered drill driver with 11G/13G coaxial cannulas and drill biopsy needles", "standardStore": "Central IR Consignment Store" },
            { "category": "CT Accessories", "name": "Radiopaque Skin Grid & Laser Pointer", "spec": "Sterile CT localization grid", "standardStore": "CT Suite D-9211" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2% + Bupivacaine 0.5%", "spec": "20 mL for deep periosteal block", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin Vials & Microbiology Medium", "spec": "10% formalin and saline transport tubes", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient comfortably on CT couch based on target bone location.",
            "Acquire planning CT images; calculate entry coordinates through dense sclerotic bone.",
            "Aseptically prepare and drape; infiltrate 15-20 mL local anesthetic down to periosteum.",
            "Make 3-4 mm skin nick; introduce coaxial outer cannula to contact dense bone cortex under CT fluoroscopy.",
            "Insert powered drill needle through cannula; attach battery-operated drill handpiece.",
            "Depress drill trigger; penetrate dense cortex smoothly without manual twisting or excessive axial force under CT monitoring.",
            "Advance drill cannula 15-20 mm into sclerotic lesion to core out intact bone cylinder.",
            "Reverse drill, withdraw cannula, and eject intact bone core using extraction rod; confirm lack of hematoma on post-biopsy CT; apply pressure dressing."
        ],
        "complications": [
            "Post-procedure bone ache / soreness (15-20%)",
            "Periosteal hematoma (2-4%)",
            "Drill tip overheating if saline flush not used (<0.5%)",
            "Pathological fracture in heavily diseased bone (<1%)",
            "Adjacent nerve irritation (<0.5%)"
        ],
        "maayTariffInr": 12000,
        "vendorContacts": [
            "Teleflex / Arrow Medical India (+91 98295 67890)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित हड्डी बायोप्सी (पावर्ड मैकेनिकल ड्रिल मशीन द्वारा)",
            "indicationEn": "Motorized drill biopsy of dense, hard, or sclerotic bone lesions (osteoblastic metastases).",
            "indicationHi": "अत्यधिक सख्त या पथरीली हड्डी की गांठों से विशेष आधुनिक ड्रिल मशीन द्वारा सीटी स्कैन की निगरानी में टुकड़ा लेना।",
            "descriptionEn": "Under CT guidance, a miniature battery-powered mechanical drill needle is used to effortlessly and smoothly penetrate extremely dense, hard bone without painful manual twisting to extract an uncrushed bone specimen.",
            "descriptionHi": "सीटी स्कैन में देखकर हड्डी को सुन्न करने के बाद एक विशेष बैटरी वाली महीन ड्रिल मशीन द्वारा बहुत सख्त हड्डी में बिना झटके के बारीक छेद करके अंदर से ठोस टुकड़ा निकाला जाता है। इससे मरीज को जोर लगाने का दर्द नहीं होता।",
            "benefitsEn": [
                "Easily penetrates rock-hard sclerotic bone where manual needles bend or fail.",
                "Extracts intact, uncrushed bone cores with highest diagnostic accuracy.",
                "Fast, smooth procedure with significantly reduced procedural pain and discomfort."
            ],
            "benefitsHi": [
                "अत्यधिक सख्त और पथरीली हड्डी में भी आसानी से और बिना दर्द के जांच हो जाती है।",
                "हड्डी का टुकड़ा दबता या टूटता नहीं है जिससे सबसे सटीक रिपोर्ट मिलती है।",
                "हाथ से घुमाने के झटकों और दर्द से पूरी तरह मुक्ति मिलती है।"
            ],
            "specificRisksEn": [
                "Bone soreness and deep ache for 2-3 days (15-20%, relieved by analgesics).",
                "Small hematoma or bleeding at the bone surface (2-4%).",
                "Microscopic crack or fracture in already weakened bone (<1%).",
                "Temporary nerve irritation or numbness (<0.5%).",
                "Need for repeat test if sample lacks viable tumor (<3%)."
            ],
            "specificRisksHi": [
                "हड्डी में 2-3 दिन हल्का दर्द (15-20%, दवा से ठीक हो जाता है)।",
                "हड्डी के पास खून का छोटा थक्का (2-4%)।",
                "कमजोर हड्डी में बाल जैसी दरार का हल्का जोखिम (<1%)।",
                "नस में हल्का खिंचाव (<0.5%)।",
                "सैंपल में ट्यूमर कम आने पर दोबारा जांच की आवश्यकता (<3%)।"
            ],
            "alternativesEn": "Manual Jamshidi bone biopsy, surgical open bone biopsy, or empirical oncology management.",
            "alternativesHi": "हाथ वाली जमशीदी सुई से बायोप्सी, ऑपरेशन थियेटर में चीरा लगाकर हड्डी काटना, या केवल दवाओं से इलाज।",
            "sedationTypeEn": "Local periosteal anesthesia with monitored IV conscious sedation.",
            "sedationTypeHi": "हड्डी की सतह पर लोकल एनेस्थीसिया और नस द्वारा शामक दवा।"
        }
    },
    {
        "id": "ct-sclerotic-vertebral-biopsy",
        "name": "CT-Guided Sclerotic Vertebral Body Core Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV041",
        "rghsCode": "693 / 42",
        "icd10": "C79.51 (Secondary malignant neoplasm of bone) / M84.58 (Pathological fracture in other disease)",
        "indications": [
            "Dense osteoblastic / sclerotic vertebral body lesion suspicious for metastatic prostate, breast, or carcinoid cancer",
            "Evaluation of single or multiple sclerotic vertebrae of unknown etiology (Paget's vs osteosclerotic myeloma vs metastasis)",
            "Patients with back pain and sclerotic vertebral body without epidural compression",
            "Differentiating chronic sclerosing osteomyelitis from osteosarcoma"
        ],
        "preOpCriteria": [
            "Coagulation profile strictly verified: INR <= 1.3, Platelets >= 80,000/uL",
            "Spine CT and MRI reviewed to plan transpedicular vs extrapedicular access route and confirm spinal canal clearance",
            "Fasting 4 hours; patient capable of lying prone for 30 minutes",
            "Neurological examination documented pre-procedure (motor, sensory, reflexes in lower limbs)"
        ],
        "hardware": [
            { "category": "Bone Biopsy Set", "name": "11G / 13G Transpedicular Vertebral Biopsy Needle", "spec": "11G x 12-15 cm trocared cannula with diamond-tip drill and trephine cutting needle", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "CT Accessories", "name": "Radiopaque Skin Grid & Laser Alignment", "spec": "Sterile CT localization grid", "standardStore": "CT Suite D-9211" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2% + Bupivacaine 0.5%", "spec": "20 mL for paraspinal and periosteal block", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Preparation", "name": "Formalin Vials & Microbiology Kits", "spec": "10% neutral buffered formalin and sterile saline containers", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient strictly prone on CT table with pillows under chest and pelvis to reduce lumbar lordosis.",
            "Acquire thin-slice CT through the target vertebra; map pedicle dimensions (width, height, angle).",
            "Select transpedicular route: entrance at junction of superior articular process and transverse process, aiming through center of pedicle into vertebral body.",
            "Sterilize back; infiltrate 15-20 mL local anesthetic into skin, paraspinal muscles, and pedicle periosteum under CT vision.",
            "Introduce 11G/13G coaxial needle onto posterior pedicle cortex; confirm 'bulls-eye' trajectory on CT check slices avoiding medial pedicle wall.",
            "Advance trephine / drill needle through the dense sclerotic pedicle into the anterior two-thirds of the vertebral body.",
            "Harvest 1-2 dense bony cores; inspect cores for solid bone/marrow; deposit into formalin and saline.",
            "Withdraw needle; perform post-biopsy CT scan to verify pedicle integrity and absence of epidural or paraspinal hematoma; apply pressure dressing."
        ],
        "complications": [
            "Post-procedure back soreness and muscular stiffness (15-20%)",
            "Paraspinal hematoma (1-3%)",
            "Medial pedicle wall breach with transient radicular nerve pain (<1%)",
            "Epidural hematoma or spinal cord irritation (<0.2%)",
            "Pneumothorax in thoracic spine biopsy (<0.5%)"
        ],
        "maayTariffInr": 11000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित रीढ़ की हड्डी (कशेरुका / वर्टिब्रल बॉडी) स्क्लेरोटिक कोर बायोप्सी",
            "indicationEn": "Transpedicular core biopsy of dense or sclerotic vertebral body lesion for cancer metastasis diagnosis.",
            "indicationHi": "रीढ़ की हड्डी (मनके) की सख्त या पथरीली गांठ में कैंसर के फैलाव की जांच हेतु सीटी स्कैन द्वारा सुरक्षित टुकड़ा लेना।",
            "descriptionEn": "Under millimeter CT navigation, a specialized bone biopsy needle is guided through the bony pedicle of the spine into the hard vertebral body while strictly avoiding the spinal cord and spinal nerves to harvest diagnostic bone tissue.",
            "descriptionHi": "सीटी स्कैन की बारीक निगरानी में मरीज को पेट के बल लिटाकर, पीठ को सुन्न करके रीढ़ की हड्डी के मनके (वर्टिब्रा) में नस और स्पाइनल कॉर्ड को बचाते हुए एक विशेष सुई से हड्डी का छोटा टुकड़ा निकाला जाता है।",
            "benefitsEn": [
                "Definitively confirms cancer spread to the spine to guide radiotherapy or targeted medications.",
                "Sub-millimeter CT guidance ensures absolute safety for the spinal cord and nerve roots.",
                "Avoids the high morbidity of major open spinal surgery."
            ],
            "benefitsHi": [
                "रीढ़ की हड्डी में कैंसर के फैलाव की पक्की पुष्टि होती है जिससे समय पर रेडिएशन या दवा शुरू हो सके।",
                "सीटी स्कैन से मुख्य नस (स्पाइनल कॉर्ड) पूरी तरह सुरक्षित रहती है।",
                "रीढ़ की हड्डी के बड़े और जोखिम भरे ऑपरेशन से पूरी तरह बचाव होता है।"
            ],
            "specificRisksEn": [
                "Back pain and soreness for 2-4 days (15-20%).",
                "Small hematoma in back muscles (1-3%).",
                "Temporary shooting pain down the leg or rib due to nerve root irritation (<1%).",
                "Extremely rare bleeding near the spinal cord (epidural hematoma) (<0.2%).",
                "Inadequate tissue sample (<3%)."
            ],
            "specificRisksHi": [
                "पीठ या कमर में 2-4 दिन दर्द (15-20%, दवा से ठीक हो जाता है)।",
                "पीठ की मांसपेशियों में खून का थक्का जमना (1-3%)।",
                "पैर या पसली में करंट जैसा अस्थायी दर्द (नस में हल्का खिंचाव) (<1%)।",
                "स्पाइनल कॉर्ड के पास खून जमने का अत्यंत दुर्लभ खतरा (<0.2%)।",
                "सैंपल कम पड़ने पर दोबारा जांच का जोखिम (<3%)।"
            ],
            "alternativesEn": "Surgical open transpedicular biopsy under general anesthesia, PET-CT surveillance, or empirical radiation therapy.",
            "alternativesHi": "ऑपरेशन करके रीढ़ की हड्डी से टुकड़ा निकालना (Open Spine Biopsy) अथवा केवल लक्षणों के आधार पर इलाज।",
            "sedationTypeEn": "Deep local paraspinal anesthesia with monitored IV conscious sedation.",
            "sedationTypeHi": "पीठ की रीढ़ पर गहरा लोकल एनेस्थीसिया और नस द्वारा शामक/दर्द निवारक दवा।"
        }
    },
    {
        "id": "ct-lytic-vertebral-biopsy",
        "name": "CT-Guided Lytic Vertebral Lesion Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV042",
        "rghsCode": "693 / 42",
        "icd10": "C79.51 (Secondary bone malignancy) / M46.20 (Osteomyelitis of vertebra)",
        "indications": [
            "Destructive osteolytic vertebral collapse with or without soft tissue epidural / paravertebral mass",
            "Suspected solitary plasmacytoma, multiple myeloma, or osteolytic metastasis (lung, breast, renal)",
            "Infectious spondylodiscitis (tuberculous Pott's spine vs pyogenic / fungal discitis)",
            "Histological typing prior to percutaneous vertebroplasty or kyphoplasty"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "Spine MRI reviewed to identify soft-tissue components, cord compression, and disc involvement",
            "Fasting 4 hours; IV line running",
            "Pre-procedure neurological assessment documented"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "13G / 15G Coaxial Vertebral Needle System", "spec": "13G introducer cannula with 15G trephine and 18G semi-automated core needle", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "CT Accessories", "name": "Radiopaque Skin Grid & Laser Pointer", "spec": "Sterile CT localization grid", "standardStore": "CT Suite D-9211" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "20 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Microbiology Medium", "name": "Aerobic, Anaerobic, Fungal, and BACTEC Vials", "spec": "Sterile tubes for culture and GeneXpert MTB/RIF assay", "standardStore": "Microbiology Collection Unit" }
        ],
        "techniqueSteps": [
            "Position patient prone on CT gantry with support pillows beneath chest and hips.",
            "Acquire thin-slice CT through the lytic vertebral level; locate soft tissue marrow replacement and destroyed cortex.",
            "Plan transpedicular or posterolateral extrapedicular approach traversing the lytic epicenter.",
            "Sterilize and drape back; infiltrate 15 mL 2% Lignocaine into skin, paraspinal muscles, and periosteum.",
            "Advance 13G coaxial needle under intermittent CT guidance through the pedicle or soft tissue destruction directly into the lesion.",
            "Verify tip position in the non-necrotic portion of the lytic cavity on CT check slices.",
            "Pass 15G trephine needle or 18G soft tissue cutting needle and harvest 2-3 core tissue passes.",
            "Send cores for histopathology, myeloma stains, GeneXpert MTB, and bacterial/fungal culture; acquire completion CT; apply pressure dressing."
        ],
        "complications": [
            "Post-biopsy back soreness (15-20%)",
            "Paraspinal hematoma (1-3%)",
            "Transient radicular nerve pain (<1%)",
            "Worsening vertebral collapse (<0.5%)",
            "Epidural hematoma (<0.2%)"
        ],
        "maayTariffInr": 10000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित रीढ़ की हड्डी (कशेरुका) लाइटिक घाव कोर बायोप्सी",
            "indicationEn": "Biopsy of bone destruction or collapse in the spine (Pott's spine TB, myeloma, or lytic metastasis).",
            "indicationHi": "रीढ़ की हड्डी के गलने, टूटने, टीबी (पॉट्स स्पाइन), मायलोमा या कैंसर की जांच हेतु सीटी स्कैन द्वारा टुकड़ा लेना।",
            "descriptionEn": "Guided by high-precision CT scanning, a fine biopsy needle is placed through the back into the collapsed or diseased vertebral bone to collect soft tissue and bone fragments for cancer histology and TB/bacterial culture.",
            "descriptionHi": "सीटी स्कैन की थ्री-डी निगरानी में पीठ को सुन्न करके एक बारीक सुई रीढ़ की गली हुई हड्डी या मवाद की गांठ तक पहुंचाई जाती है और जांच हेतु टुकड़ा निकाला जाता है ताकि टीबी या कैंसर का पक्का पता चल सके।",
            "benefitsEn": [
                "Definitively separates spinal tuberculosis from myeloma or metastatic bone cancer.",
                "Enables targeted anti-tubercular therapy or oncology chemotherapy without open spine surgery.",
                "Provides GeneXpert results for drug-resistant tuberculosis within hours."
            ],
            "benefitsHi": [
                "यह स्पष्ट होता है कि रीढ़ की बीमारी टीबी की है या कैंसर की।",
                "बिना रीढ़ खोले कुछ ही घंटों में टीबी और उसकी दवाओं की संवेदनशीलता (GeneXpert) का पता चलता है।",
                "सही समय पर दवा शुरू करके रीढ़ की हड्डी को टेढ़ा होने या लकवे से बचाया जा सकता है।"
            ],
            "specificRisksEn": [
                "Back pain and soreness for 2-3 days (15-20%).",
                "Local hematoma or bleeding in back muscles (1-3%).",
                "Temporary nerve tingling down the leg (<1%).",
                "Very rare bleeding near spinal cord (<0.2%).",
                "Necrotic or inadequate sample requiring repeat biopsy (<5%)."
            ],
            "specificRisksHi": [
                "पीठ में 2-3 दिन हल्का दर्द या खिंचाव (15-20%)।",
                "पीठ की मांसपेशियों में खून का थक्का (1-3%)।",
                "पैर में हल्की झनझनाहट (<1%)।",
                "स्पाइनल कॉर्ड के पास ब्लीडिंग का अत्यंत दुर्लभ जोखिम (<0.2%)।",
                "सैंपल में केवल मृत टिशू आने पर दोबारा जांच की संभावना (<5%)।"
            ],
            "alternativesEn": "Surgical open spinal decompression and biopsy, empirical anti-tubercular therapy, or serial MRI monitoring.",
            "alternativesHi": "रीढ़ का बड़ा ऑपरेशन करके टुकड़ा लेना, या अंदाजे से टीबी की दवा शुरू करना।",
            "sedationTypeEn": "Local anesthesia with monitored IV conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
        }
    },
    {
        "id": "ct-sacral-iliac-bone-biopsy",
        "name": "CT-Guided Sacral / Iliac Bone Core Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV043",
        "rghsCode": "693 / 42",
        "icd10": "C79.51 (Secondary malignant neoplasm of bone) / D48.0 (Neoplasm of bone and articular cartilage)",
        "indications": [
            "Sacral tumor suspicious for chordoma, giant cell tumor (GCT), or chondrosarcoma",
            "Iliac bone lytic or sclerotic lesions suspicious for metastatic disease, lymphoma, or Ewing sarcoma",
            "Sacroiliac joint infection / septic sacroiliitis requiring synovial and bone culture",
            "Atypical pelvic ring lesions detected on staging PET-CT"
        ],
        "preOpCriteria": [
            "Coagulation profile: INR <= 1.4, Platelets >= 60,000/uL",
            "Pelvic CT and MRI reviewed to evaluate sacral canal, sacral neural foramina, and iliac vessels",
            "Fasting 4 hours; patient positioned prone comfortably with hip support",
            "Planning to avoid sacral nerves (S1-S4) and internal iliac neurovascular bundle"
        ],
        "hardware": [
            { "category": "Bone Biopsy Needle", "name": "11G / 13G Trephine Bone Biopsy System", "spec": "11G/13G x 10-15 cm trephine needle with extraction cannula", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "CT Accessories", "name": "Radiopaque Skin Grid & Laser Pointer", "spec": "Sterile CT localization grid", "standardStore": "CT Suite D-9211" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2% + Bupivacaine 0.5%", "spec": "20 mL for periosteal infiltration", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin Vials & Microbiology Media", "spec": "10% formalin and sterile culture containers", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient prone on CT couch with foam pads supporting pelvic crests.",
            "Acquire planning CT through the sacrum and iliac wings; identify target lesion and select entry point.",
            "Plan trajectory avoiding sacral neural foramina, sciatic notch, and deep pelvic viscera.",
            "Sterilize buttock/sacral region; infiltrate 15-20 mL local anesthetic into skin, gluteal fascia, and periosteum.",
            "Introduce 11G/13G coaxial needle onto the outer cortical surface under CT guidance.",
            "Advance trephine needle through the cortex into the center of the sacral or iliac mass with rotary motion.",
            "Harvest 1-2 intact bone core specimens; inspect for diagnostic marrow/bone tissue.",
            "Withdraw needle; perform completion non-contrast CT to rule out pelvic or gluteal hematoma; apply pressure dressing."
        ],
        "complications": [
            "Gluteal / buttock pain and soreness (15-20%)",
            "Local hematoma or bruising (2-4%)",
            "Sacral nerve root irritation with transient sciatica / buttock numbness (<1%)",
            "Pelvic hematoma (<0.5%)",
            "Crushed or fragmented specimen (<3%)"
        ],
        "maayTariffInr": 8500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित सेक्रम / इलिएक (कूल्हे की हड्डी) कोर बायोप्सी",
            "indicationEn": "Histological diagnosis of sacral or pelvic bone tumors, metastases, chordoma, or infection.",
            "indicationHi": "कूल्हे या रीढ़ के निचले हिस्से (सेक्रम/इलिएक) की हड्डी की गांठ, कॉर्डोमा, कैंसर या इन्फेक्शन की जांच हेतु सीटी स्कैन द्वारा टुकड़ा लेना।",
            "descriptionEn": "Under CT guidance and generous local anesthesia, a sturdy bone biopsy needle is guided into the sacrum or iliac pelvic bone while carefully avoiding sacral nerves and pelvic blood vessels to obtain diagnostic bone cores.",
            "descriptionHi": "सीटी स्कैन में देखकर कूल्हे के पिछले हिस्से को अच्छी तरह सुन्न करके एक मजबूत बायोप्सी सुई द्वारा सेक्रम या कूल्हे की हड्डी की गांठ से छोटा सा टुकड़ा निकाला जाता है ताकि बीमारी का सही नाम पता चल सके।",
            "benefitsEn": [
                "Definitively classifies sacral chordoma, giant cell tumor, or cancer metastases without extensive surgery.",
                "Sub-millimeter CT guidance protects the sacral nerves controlling bladder and bowel function.",
                "Enables rapid formulation of surgical, radiological, or chemotherapeutic treatment plans."
            ],
            "benefitsHi": [
                "कॉर्डोमा या कैंसर की गांठ की बिना किसी बड़े ऑपरेशन के सटीक पहचान होती है।",
                "सीटी स्कैन से पेशाब और लैट्रिन को नियंत्रित करने वाली नसें पूरी तरह सुरक्षित रहती हैं।",
                "उपचार की सही दिशा (सर्जरी, रेडिएशन या कीमोथेरेपी) तय करने में अत्यंत सहायक।"
            ],
            "specificRisksEn": [
                "Buttock pain and local tenderness for 2-4 days (15-20%).",
                "Hematoma or bruising in gluteal muscles (2-4%).",
                "Temporary tingling or numbness in the leg or buttock (<1%).",
                "Pelvic internal bleeding (<0.5%).",
                "Inadequate bone tissue (<3%)."
            ],
            "specificRisksHi": [
                "कूल्हे या नितंब में 2-4 दिन हल्का दर्द या खिंचाव (15-20%)।",
                "मांसपेशियों में खून का थक्का जमना या नील पड़ना (2-4%)।",
                "पैर या कूल्हे में झनझनाहट या सुन्नपन (<1%)।",
                "अंदरूनी ब्लीडिंग का दुर्लभ जोखिम (<0.5%)।",
                "सैंपल पर्याप्त न आने पर दोबारा जांच का जोखिम (<3%)।"
            ],
            "alternativesEn": "Surgical open bone biopsy under general anesthesia, or MRI-monitored surveillance.",
            "alternativesHi": "बेहोश करके ऑपरेशन द्वारा हड्डी का टुकड़ा निकालना, या केवल एमआरआई से निगरानी।",
            "sedationTypeEn": "Local periosteal anesthesia with monitored IV conscious sedation.",
            "sedationTypeHi": "हड्डी पर लोकल एनेस्थीसिया और नस द्वारा हल्की शामक दवा।"
        }
    },
    {
        "id": "ct-appendicular-bone-biopsy",
        "name": "CT-Guided Appendicular Skeleton Bone Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV044",
        "rghsCode": "693 / 42",
        "icd10": "M89.9 (Disorder of bone, unspecified) / C40.90 (Malignant neoplasm of unspecified bones of limb)",
        "indications": [
            "Lytic, blastic, or permeative bone lesion in long bones (femur, tibia, humerus, radius, fibula)",
            "Suspected primary bone sarcoma (osteosarcoma, chondrosarcoma, Ewing sarcoma) requiring strict limb-salvage longitudinal biopsy tract",
            "Metastatic bone lesion in extremity bone causing impending pathological fracture",
            "Chronic Brodie's abscess / subacute osteomyelitis requiring microbiological isolation"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "Biopsy tract STRICTLY planned in consultation with orthopedic oncological surgeon along the planned future surgical incision line to allow en-bloc tract excision during limb salvage",
            "Fasting 4 hours; limb securely immobilized on CT table",
            "Avoiding joint transgression, neurovascular bundle, and multiple muscle compartments"
        ],
        "hardware": [
            { "category": "Bone Needle", "name": "11G / 13G Coaxial Bone Trephine Needle", "spec": "11G/13G x 10-15 cm trephine needle with extraction cannula", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "CT Accessories", "name": "Radiopaque Skin Grid & Laser Marker", "spec": "Sterile CT skin grid", "standardStore": "CT Suite D-9211" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2% + Bupivacaine 0.5%", "spec": "20 mL for deep periosteal block", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin Vials & Microbiology Kits", "spec": "10% formalin and sterile saline culture bottles", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient supine or lateral with affected extremity immobilized with sandbags on CT table.",
            "Acquire thin-slice planning CT; mark biopsy entry site strictly along the longitudinal axis of the anticipated future surgical resection scar.",
            "Aseptically prepare and drape limb; infiltrate local anesthetic down to the periosteum under CT vision.",
            "Make small 3-4 mm skin nick; introduce 11G/13G coaxial needle directly through a single anatomical compartment onto the bone cortex.",
            "Advance trephine needle through cortex into the epicenter of the tumor during continuous CT surveillance.",
            "Harvest 2-3 intact bone core specimens; inspect for diagnostic tissue; transfer to formalin and culture vials.",
            "Perform coaxial tract embolization with gelatin sponge or bone wax if indicated to minimize hematoma and tumor seeding.",
            "Obtain completion CT to confirm cortical integrity and absence of expanding hematoma; apply firm compression dressing."
        ],
        "complications": [
            "Extremity pain and bone aching (15-20%)",
            "Subperiosteal or intramuscular hematoma (2-4%)",
            "Iatrogenic fracture of weakened cortex (<1%)",
            "Tumor tract contamination if proper surgical line not adhered to (<0.5%)",
            "Neurovascular injury (<0.2%)"
        ],
        "maayTariffInr": 8000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित हाथ-पैर की हड्डी (अपेंडिकुलर स्केलेटन) कोर बायोप्सी",
            "indicationEn": "Limb-salvage compliant bone biopsy of arm or leg bones (osteosarcoma, Ewing sarcoma, metastasis, infection).",
            "indicationHi": "हाथ या पैर की हड्डी (फीमर, टिबिया, ह्यूमरस) की गांठ, कैंसर (ओस्टियोसारकोमा) या टीबी/इन्फेक्शन की जांच हेतु सीटी स्कैन द्वारा टुकड़ा लेना।",
            "descriptionEn": "Under CT guidance, a bone biopsy needle is inserted along a strict longitudinal surgical path into the bone tumor of the arm or leg to obtain diagnostic bone tissue while preserving future limb-salvage surgical options.",
            "descriptionHi": "सीटी स्कैन में देखकर हाथ या पैर की हड्डी की गांठ में एक विशेष सुई डालकर टुकड़ा निकाला जाता है। सुई का रास्ता इस तरह चुना जाता है कि भविष्य में हाथ या पैर काटने की नौबत न आए और अंग को सुरक्षित बचाया जा सके।",
            "benefitsEn": [
                "Definitively classifies bone sarcoma or metastases while strictly protecting limb-salvage eligibility.",
                "Avoids joint contamination and neurovascular damage through sub-millimeter CT guidance.",
                "Provides essential histology to begin pre-operative chemotherapy or targeted therapy."
            ],
            "benefitsHi": [
                "हड्डी के कैंसर का सटीक पता चलता है और अंग (हाथ या पैर) को सुरक्षित बचाने में मदद मिलती है।",
                "जोड़ों या खून की नसों में बीमारी फैलने का कोई खतरा नहीं रहता।",
                "बिना बड़े चीरे के कीमोथेरेपी शुरू करने के लिए सटीक रिपोर्ट मिलती है।"
            ],
            "specificRisksEn": [
                "Limb pain and bone ache for 2-4 days (15-20%).",
                "Bruising or hematoma in surrounding muscles (2-4%).",
                "Hairline crack or fracture in fragile diseased bone (<1%).",
                "Rare nerve or vessel injury (<0.2%).",
                "Inadequate bone tissue requiring repeat biopsy (<3%)."
            ],
            "specificRisksHi": [
                "हाथ या पैर में 2-4 दिन हल्का दर्द या भारीपन (15-20%)।",
                "मांसपेशियों में खून का थक्का जमना या सूजन (2-4%)।",
                "कमजोर हड्डी में मामूली दरार (फ्रैक्चर) का हल्का जोखिम (<1%)।",
                "नस में चोट का दुर्लभ खतरा (<0.2%)।",
                "सैंपल पर्याप्त न आने पर दोबारा जांच की संभावना (<3%)।"
            ],
            "alternativesEn": "Open surgical incisional bone biopsy by an orthopedic oncologist, or empirical management.",
            "alternativesHi": "ऑपरेशन थियेटर में चीरा लगाकर हड्डी का टुकड़ा निकालना (Open Biopsy)।",
            "sedationTypeEn": "Local periosteal block with monitored IV conscious sedation.",
            "sedationTypeHi": "हड्डी पर गहरा लोकल एनेस्थीसिया और नस द्वारा शामक दवा।"
        }
    },
    {
        "id": "usg-soft-tissue-extremity-biopsy",
        "name": "Ultrasound-Guided Soft Tissue Extremity Mass Core Needle Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV045",
        "rghsCode": "693 / 41",
        "icd10": "C49.9 (Malignant neoplasm of connective and soft tissue, unspecified) / D21.9 (Benign neoplasm of connective and soft tissue)",
        "indications": [
            "Deep intramuscular or subcutaneous soft tissue mass suspicious for soft tissue sarcoma (liposarcoma, leiomyosarcoma, synovial sarcoma)",
            "Differentiation of benign soft tissue tumors (schwannoma, desmoid fibromatosis, hemangioma) from malignancy",
            "Metastatic soft tissue deposits in extremities",
            "Recurrent soft tissue sarcoma following surgical resection"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "Pre-procedure contrast-enhanced MRI reviewed to identify solid viable non-necrotic areas and compartmental anatomy",
            "Biopsy tract planned strictly longitudinally along the planned surgical limb-salvage resection incision",
            "Avoiding cross-compartmental spread and avoiding adjacent major neurovascular bundles"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "14G / 16G Automated Core Needle Biopsy System", "spec": "14G/16G x 10-15 cm automated cutting needle with 20 mm throw, echogenic tip", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Frequency Linear Probe", "spec": "7 - 15 MHz linear array with musculoskeletal preset", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "15 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin Vials & Cytogenetic Media", "spec": "10% formalin and sterile saline for molecular sarcoma translocation testing", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient comfortably with extremity supported on procedure table.",
            "Perform ultrasound examination to evaluate tumor margins, internal vascularity with Color Doppler, and necrotic cystic components.",
            "Select a strictly longitudinal in-plane trajectory within a single anatomical muscle compartment.",
            "Sterilize and drape skin under surgical asepsis.",
            "Infiltrate 10-15 mL 2% Lignocaine into skin, subcutaneous layer, and pseudocapsule of the mass under direct vision.",
            "Make a 2-mm skin nick; advance 14G/16G needle under continuous real-time linear probe visualization into viable solid tumor margin.",
            "Trigger automated cutting mechanism; harvest 3-5 cores from multiple angles through the single skin entry site.",
            "Examine cores for firm diagnostic tumor tissue; deposit into formalin; apply firm manual pressure for 10 minutes and pressure bandage."
        ],
        "complications": [
            "Local muscle pain and soreness (10-15%)",
            "Intramuscular hematoma (2-4%)",
            "Tumor tract contamination (<0.5% when strict longitudinal path followed)",
            "Minor sensory nerve irritation (<0.5%)",
            "Inadequate or necrotic tissue sample (<3%)"
        ],
        "maayTariffInr": 5000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित हाथ-पैर की नरम ऊतक (सॉफ्ट टिशू) गांठ कोर बायोप्सी",
            "indicationEn": "Histopathological diagnosis and molecular grading of extremity soft tissue mass (sarcoma vs benign tumor).",
            "indicationHi": "हाथ या पैर की मांसपेशियों की गहरी गांठ में सारकोमा कैंसर अथवा साधारण गांठ की जांच हेतु सोनोग्राफी द्वारा टुकड़ा लेना।",
            "descriptionEn": "Under real-time ultrasound guidance, an automated core biopsy needle is placed along a strict longitudinal surgical line into the solid portion of the muscle mass to extract tissue cores while strictly preserving limb-salvage options.",
            "descriptionHi": "सोनोग्राफी से देखकर हाथ या पैर की मांसपेशियों की गांठ में एक बारीक बायोप्सी सुई डालकर छोटा टुकड़ा निकाला जाता है। सुई का रास्ता इस तरह रखा जाता है कि भविष्य में पूरा अंग सुरक्षित रहे और कैंसर न फैले।",
            "benefitsEn": [
                "Achieves definitive sarcoma diagnosis, histological grading, and molecular translocation profiling.",
                "Strict longitudinal approach preserves candidacy for limb-sparing oncological surgery.",
                "Avoids the extensive tissue disruption of open surgical biopsy."
            ],
            "benefitsHi": [
                "सारकोमा कैंसर के ग्रेड और प्रकार का शत-प्रतिशत सटीक पता चलता है।",
                "अंग (हाथ या पैर) को कटने से बचाकर सुरक्षित ऑपरेशन करने में मदद मिलती है।",
                "बिना किसी बड़े ऑपरेशन या चीरे के ओपीडी में ही जांच हो जाती है।"
            ],
            "specificRisksEn": [
                "Muscle pain and soreness for 2-3 days (10-15%).",
                "Intramuscular hematoma or swelling (2-4%).",
                "Temporary skin numbness or tingling (<0.5%).",
                "Tumor cell contamination along needle path (<0.5%).",
                "Sample containing only necrosis requiring repeat test (<3%)."
            ],
            "specificRisksHi": [
                "मांसपेशियों में 2-3 दिन हल्का दर्द या खिंचाव (10-15%)।",
                "मांसपेशी के अंदर खून का थक्का या सूजन (2-4%)।",
                "त्वचा में अस्थायी सुन्नपन (<0.5%)।",
                "सुई के रास्ते में ट्यूमर अंश का दुर्लभ जोखिम (<0.5%)।",
                "सैंपल में केवल मृत हिस्सा आने पर दोबारा जांच की आवश्यकता (<3%)।"
            ],
            "alternativesEn": "Surgical open incisional biopsy under regional/general anesthesia, or MRI surveillance.",
            "alternativesHi": "ऑपरेशन करके चीरा लगाकर टुकड़ा निकालना (Open Incisional Biopsy) या एमआरआई से निगरानी।",
            "sedationTypeEn": "Local anesthesia with optional mild IV sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार हल्की शामक दवा।"
        }
    },
    {
        "id": "usg-subcutaneous-nodule-fnac",
        "name": "Ultrasound-Guided Subcutaneous Nodule FNAC",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV046",
        "rghsCode": "693 / 41",
        "icd10": "L98.9 (Disorder of the skin and subcutaneous tissue, unspecified) / C44.90 (Malignant neoplasm of skin)",
        "indications": [
            "Palpable or impalpable subcutaneous nodule of uncertain clinical etiology",
            "Suspected subcutaneous metastases (sister Mary Joseph nodule, cutaneous melanoma or breast recurrence)",
            "Differentiating epidermal inclusion cyst, pilomatricoma, or neurofibroma from malignant soft tissue nodule",
            "Infectious subcutaneous granulomas (mycobacterial / fungal / parasitic cysts)"
        ],
        "preOpCriteria": [
            "Coagulation: normal platelet count and screening",
            "Superficial ultrasound documenting nodule depth, margins, and relationship to dermal layer and deep fascia",
            "Informed verbal and written consent",
            "Clean skin surface without active cellulitis over entry site"
        ],
        "hardware": [
            { "category": "Aspiration Needle", "name": "22G - 24G Fine Needle with Syringe", "spec": "22G/24G x 1.0 inch needle with 5-10 mL syringe", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Frequency Linear Probe", "spec": "10 - 18 MHz ultra-high frequency linear probe", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "2 mL ampoule (optional dermal wheal)", "standardStore": "DDC-14 Central" },
            { "category": "Cytology Supplies", "name": "Glass Slides & Fixative Spray", "spec": "Air-dried and 95% ethanol fixative slides", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient comfortably with the target skin nodule exposed.",
            "Apply generous ultrasound gel; scan nodule with ultra-high frequency linear probe to assess cystic vs solid nature.",
            "Sterilize overlying skin with chlorhexidine swab.",
            "Optional: administer 0.5 mL 2% Lignocaine into superficial dermis.",
            "Introduce 22G-24G needle under real-time in-plane sonographic guidance directly into the nodule center.",
            "Execute 4-6 rapid capillary fanning passes across the nodule over 10 seconds.",
            "Withdraw needle; express aspirate onto glass slides, smear gently, and fix half in 95% alcohol and air-dry half.",
            "Apply direct manual pressure over puncture site for 3 minutes; apply sterile band-aid."
        ],
        "complications": [
            "Minor local tenderness or small bruise (5-10%)",
            "Small subcutaneous hematoma (1-2%)",
            "Superficial skin infection (<0.5%)",
            "Transient vasovagal lightheadedness (<1%)",
            "Inadequate cellularity requiring repeat aspiration (<5%)"
        ],
        "maayTariffInr": 2500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित त्वचा के नीचे की गांठ (सबक्यूटेनियस नोड्यूल) FNAC",
            "indicationEn": "Cytological aspiration of superficial or subcutaneous nodule (cyst, metastasis, or granuloma).",
            "indicationHi": "त्वचा के ठीक नीचे मौजूद छोटी गांठ, गिल्टी या सिस्ट की बारीक सुई द्वारा जांच (FNAC)।",
            "descriptionEn": "Under high-frequency superficial ultrasound guidance, a tiny needle is inserted into a subcutaneous lump to aspirate microscopic cells for rapid cytological diagnosis without any cuts or stitches.",
            "descriptionHi": "सोनोग्राफी से देखकर त्वचा के नीचे की छोटी गांठ में एक बहुत बारीक सुई डालकर कोशिकाओं का सैंपल लिया जाता है। इसमें कोई चीरा या टांका नहीं लगता और दर्द भी न के बराबर होता है।",
            "benefitsEn": [
                "Immediate non-surgical evaluation of skin lumps and suspected cancer recurrences.",
                "Near-painless day-care test completed in under 5 minutes.",
                "Prevents unnecessary surgical excision of benign cysts or lipomas."
            ],
            "benefitsHi": [
                "त्वचा की गांठ साधारण है या कैंसर, इसका 5 मिनट में पता चल जाता है।",
                "बिना किसी दर्द, चीरे या टांके के ओपीडी में ही जांच पूरी।",
                "साधारण सिस्ट होने पर बड़े ऑपरेशन से बचाव होता है।"
            ],
            "specificRisksEn": [
                "Mild soreness or tiny skin bruise for 1-2 days (5-10%).",
                "Small hematoma under the skin (1-2%).",
                "Minor skin infection (<0.5%).",
                "Sample containing insufficient cells requiring repeat test (<5%).",
                "Mild dizziness (<1%)."
            ],
            "specificRisksHi": [
                "सुई की जगह पर 1-2 दिन हल्का दर्द या छोटा सा नील (5-10%)।",
                "त्वचा के नीचे खून का छोटा थक्का (1-2%)।",
                "हल्का संक्रमण (<0.5%)।",
                "कोशिकाएं कम आने पर दोबारा जांच की संभावना (<5%)।",
                "हल्की घबराहट या चक्कर (<1%)।"
            ],
            "alternativesEn": "Surgical open excisional biopsy under local anesthesia, core needle biopsy, or clinical observation.",
            "alternativesHi": "चीरा लगाकर पूरी गांठ बाहर निकालना (Excision Biopsy) या केवल निगरानी रखना।",
            "sedationTypeEn": "Local skin anesthesia or topical numbing spray.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
        }
    },
    {
        "id": "usg-subcutaneous-mass-core-biopsy",
        "name": "Ultrasound-Guided Subcutaneous Lipomatous / Fibrous Mass Core Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV047",
        "rghsCode": "693 / 41",
        "icd10": "D17.9 (Benign lipomatous neoplasm) / C49.9 (Malignant neoplasm of connective tissue)",
        "indications": [
            "Large (>5 cm) or rapidly growing subcutaneous lipomatous lesion suspicious for well-differentiated liposarcoma (WDLPS)",
            "Fibrous or infiltrative subcutaneous mass (dermatofibrosarcoma protuberans [DFSP] or nodular fasciitis)",
            "Inconclusive prior FNAC yielding only mature adipocytes or hypocellular fibrotic material",
            "Preoperative histology to plan surgical margins for atypical subcutaneous tumors"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "High-resolution ultrasound demonstrating mass dimensions, internal echogenicity, septal thickness (>2 mm), and vascularity",
            "Informed consent obtained",
            "Aspirin / NSAIDs paused 3-5 days if feasible"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "16G / 18G Automated Core Biopsy Needle", "spec": "16G/18G x 10 cm automated cutting needle with 15-20 mm throw", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Frequency Linear Probe", "spec": "7 - 15 MHz linear array", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "10 mL ampoule", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin Vials & Molecular Kits", "spec": "10% formalin and saline for MDM2 amplification testing", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient comfortably with subcutaneous mass clearly exposed.",
            "Sonographically survey the entire lesion; identify thickened septa, nodular solid components, or vascularized foci.",
            "Aseptically prepare and drape skin over the mass.",
            "Infiltrate 5-10 mL 2% Lignocaine into skin, subcutaneous layer, and pseudocapsule of the mass.",
            "Make 2-mm skin nick; introduce 16G/18G core needle under continuous real-time linear probe visualization into the solid septal component.",
            "Fire cutting mechanism tangential to underlying deep muscle fascia to prevent fascial transgression.",
            "Harvest 3-4 substantial cores; confirm presence of firm tissue rather than liquefactive fat.",
            "Deposit cores into formalin (for MDM2/CDK4 FISH analysis for liposarcoma); compress puncture site for 5 minutes and apply dressing."
        ],
        "complications": [
            "Local tenderness and bruising (10-15%)",
            "Subcutaneous hematoma (2-4%)",
            "Superficial wound infection (<0.5%)",
            "Fat necrosis nodule (<1%)",
            "Sample containing only mature fat requiring repeat biopsy (<3%)"
        ],
        "maayTariffInr": 4500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित त्वचा के नीचे की चर्बी/फाइब्रस गांठ (लाइपोमा/सारकोमा) कोर बायोप्सी",
            "indicationEn": "Histological differentiation of benign lipoma from liposarcoma or dermatofibrosarcoma protuberans.",
            "indicationHi": "त्वचा के नीचे की बड़ी चर्बी की गांठ (लाइपोमा) में लाइपोसारकोमा कैंसर या अन्य ट्यूमर की पुष्टि हेतु सुई से टुकड़ा लेना।",
            "descriptionEn": "Under real-time ultrasound guidance, an automated core biopsy needle is placed into the thick fibrous components of a large subcutaneous fatty mass to obtain tissue for genetic (MDM2) and histological testing to rule out liposarcoma.",
            "descriptionHi": "सोनोग्राफी से देखकर त्वचा के नीचे की चर्बी की गांठ के कड़े हिस्से में एक बायोप्सी सुई डाली जाती है और ठोस टुकड़ा निकाला जाता है ताकि यह पक्का हो सके कि गांठ साधारण चर्बी (लाइपोमा) की है या कैंसर (लाइपोसारकोमा) की।",
            "benefitsEn": [
                "Definitively differentiates benign lipoma from well-differentiated liposarcoma using MDM2 testing.",
                "Prevents inadequate or incomplete surgical margins in malignant tumors.",
                "Simple outpatient procedure avoiding operating room admission."
            ],
            "benefitsHi": [
                "साधारण चर्बी की गांठ और कैंसर के बीच शत-प्रतिशत सटीक अंतर पता चलता है।",
                "ऑपरेशन से पहले गांठ का सही नाम पता चलने से पूरा और सही इलाज संभव होता है।",
                "बिना भर्ती हुए ओपीडी में ही कुछ मिनटों में जांच पूरी हो जाती है।"
            ],
            "specificRisksEn": [
                "Local pain and bruising for 2-3 days (10-15%).",
                "Hematoma (blood collection) under the skin (2-4%).",
                "Minor skin infection (<0.5%).",
                "Sample showing only mature normal fat (<3%).",
                "Need for surgical excision if results are borderline (<2%)."
            ],
            "specificRisksHi": [
                "गांठ वाली जगह पर 2-3 दिन हल्का दर्द या नील (10-15%)।",
                "त्वचा के नीचे खून का थक्का (2-4%)।",
                "हल्का संक्रमण (<0.5%)।",
                "सैंपल में केवल साधारण चर्बी आने पर दोबारा जांच की आवश्यकता (<3%)।",
                "संदेह रहने पर ऑपरेशन द्वारा जांच कराने की संभावना (<2%)।"
            ],
            "alternativesEn": "Surgical complete open excision biopsy under local/general anesthesia, or clinical/MRI surveillance.",
            "alternativesHi": "ऑपरेशन करके पूरी गांठ निकालना (Excision Biopsy) या एमआरआई से निगरानी रखना।",
            "sedationTypeEn": "Local anesthesia to the skin and mass.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
        }
    },
    {
        "id": "usg-superficial-ln-fnac",
        "name": "Ultrasound-Guided Superficial Lymph Node (Axillary, Inguinal, Supraclavicular) FNAC",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV048",
        "rghsCode": "693 / 41",
        "icd10": "R59.0 (Localized lymphadenopathy) / C77.9 (Secondary malignant neoplasm of lymph node)",
        "indications": [
            "Suspicious axillary lymph node in breast cancer staging or surveillance",
            "Enlarged inguinal lymph node in penile, vulvar, anal, or lower limb melanoma/carcinoma",
            "Left supraclavicular lymphadenopathy (Virchow's node) in suspected gastrointestinal or thoracic malignancy",
            "Tuberculous lymphadenitis screening with GeneXpert / AFB cytology"
        ],
        "preOpCriteria": [
            "Coagulation: normal platelet count and screening",
            "Ultrasound documentation of cortical thickening (>3 mm), loss of fatty hilum, or rounded shape",
            "Skin clean and intact without overlying ulceration",
            "Rapid on-site cytopathology review available"
        ],
        "hardware": [
            { "category": "Aspiration Needle", "name": "22G - 24G Fine Aspiration Needle", "spec": "22G/24G x 1.0-1.5 inch needle with 10 mL syringe", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Frequency Linear Probe", "spec": "8 - 15 MHz linear array with lymph node preset", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "2 mL ampoule (optional dermal wheal)", "standardStore": "DDC-14 Central" },
            { "category": "Cytology Supplies", "name": "Glass Slides & GeneXpert Vials", "spec": "Air-dried, 95% ethanol slides, and sterile saline for GeneXpert MTB", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient supine (axilla: arm abducted; groin: hip abducted; supraclavicular: neck extended).",
            "Sonographically survey the lymph node basin; identify the most suspicious node with eccentric cortical thickening.",
            "Sterilize the skin under sterile surgical precautions.",
            "Optional: raise tiny dermal wheal of 0.5 mL 2% Lignocaine.",
            "Advance 22G-24G needle under continuous real-time in-plane sonographic guidance directly into the thickened cortex, strictly avoiding the axillary/femoral/subclavian vessels.",
            "Perform 4-6 capillary fanning passes across the nodal cortex over 10 seconds.",
            "Withdraw needle; express aspirate onto glass slides, smear gently, and fix in 95% alcohol and air-dry; rinse hub into saline for GeneXpert if infection suspected.",
            "Apply direct manual pressure for 5 minutes; verify absence of hematoma with Color Doppler."
        ],
        "complications": [
            "Local soreness and mild bruising (5-10%)",
            "Intranodal hematoma (1-2%)",
            "Inadvertent adjacent vessel puncture (<0.5%, controlled with 5 min pressure)",
            "Transient dizziness / vasovagal episode (<1%)",
            "Inadequate cellular sample requiring repeat test (<5%)"
        ],
        "maayTariffInr": 2800,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित सतही लिम्फ नोड (कांख / जांघ / हंसली) FNAC",
            "indicationEn": "Cytological evaluation of enlarged superficial lymph nodes (axillary, inguinal, or supraclavicular).",
            "indicationHi": "कांख (बगल), जांघ या हंसली की हड्डी के पास बढ़ी हुई गिल्टी (लिम्फ नोड) में कैंसर या टीबी की बारीक सुई द्वारा जांच (FNAC)।",
            "descriptionEn": "Under high-frequency ultrasound visualization, a fine needle is guided into the thickened cortex of a superficial lymph node in the armpit, groin, or collarbone area to aspirate microscopic cells for cancer and infection testing without cuts or stitches.",
            "descriptionHi": "सोनोग्राफी से कांख, जांघ या गले के निचले हिस्से की बड़ी गिल्टी को देखकर पास की बड़ी नसों को बचाते हुए एक बहुत बारीक सुई से कोशिकाओं का सैंपल लिया जाता है ताकि कैंसर या टीबी का तुरंत पता चल सके।",
            "benefitsEn": [
                "Fast, near-painless test to stage breast, gynecological, or gastrointestinal cancers.",
                "Immediate GeneXpert confirmation for tuberculous lymphadenitis.",
                "Avoids invasive surgical lymph node biopsy in over 90% of cases."
            ],
            "benefitsHi": [
                "कैंसर के फैलाव या टीबी की जांच का सबसे तेज और आसान तरीका।",
                "बिना किसी चीरे या टांके के ओपीडी में ही कुछ मिनटों में जांच पूरी हो जाती है।",
                "90% से अधिक मरीजों में ऑपरेशन करके गिल्टी निकालने की जरूरत नहीं पड़ती।"
            ],
            "specificRisksEn": [
                "Mild local soreness or small bruise for 1-2 days (5-10%).",
                "Small hematoma inside the lymph node (1-2%).",
                "Minor vascular puncture easily managed with manual pressure (<0.5%).",
                "Inadequate cell sample requiring repeat aspiration (<5%).",
                "Mild lightheadedness during needle insertion (<1%)."
            ],
            "specificRisksHi": [
                "सुई लगने की जगह पर 1-2 दिन हल्का दर्द या छोटा सा नील (5-10%)।",
                "गिल्टी के अंदर खून का हल्का थक्का (1-2%)।",
                "पास की नस में हल्की सुई लगना जो दबाने से ठीक हो जाती है (<0.5%)।",
                "कोशिकाएं कम आने पर दोबारा जांच की आवश्यकता (<5%)।",
                "हल्की घबराहट या चक्कर (<1%)।"
            ],
            "alternativesEn": "Core needle lymph node biopsy, surgical excisional biopsy under anesthesia, or clinical surveillance.",
            "alternativesHi": "मोटी सुई से कोर बायोप्सी, ऑपरेशन करके पूरी गिल्टी निकालना, या केवल निगरानी।",
            "sedationTypeEn": "Local skin anesthesia or topical numbing spray.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
        }
    },
    {
        "id": "usg-superficial-ln-core-biopsy",
        "name": "Ultrasound-Guided Superficial Lymph Node Core Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV049",
        "rghsCode": "693 / 41",
        "icd10": "C85.90 (Non-Hodgkin lymphoma) / A18.2 (Tuberculous peripheral lymphadenopathy)",
        "indications": [
            "Superficial lymphadenopathy (axillary, inguinal, supraclavicular) suspicious for lymphoma requiring intact tissue for architecture and IHC",
            "Metastatic breast or melanoma nodal involvement requiring complete biomarker receptor profiling",
            "Repeatedly non-diagnostic, necrotic, or hypocellular FNAC in enlarged superficial lymph nodes",
            "Microbiological isolation and histological confirmation of resistant mycobacterial or fungal infections"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "High-resolution ultrasound demonstrating node size >= 10-15 mm with safe clearance from axillary/femoral/subclavian vessels",
            "Antiplatelet agents paused appropriately",
            "Informed written procedural consent"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "16G / 18G Automated Core Needle", "spec": "16G/18G x 10 cm automated cutting needle with 15-20 mm throw", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Frequency Linear Probe", "spec": "7 - 15 MHz linear array with vascular preset", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "10 mL ampoule", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin Vials & Flow Cytometry Media", "spec": "10% formalin, RPMI medium for lymphoma, and saline for GeneXpert", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient based on anatomical nodal station (axillary, inguinal, or supraclavicular).",
            "Scan nodal station with high-frequency linear transducer and Color Doppler to map adjacent major arteries and veins.",
            "Sterilize and drape skin under surgical asepsis.",
            "Infiltrate 5-10 mL 2% Lignocaine into skin, subcutaneous layer, and perinodal capsule under direct visualization.",
            "Make a 2-mm skin dermatotomy; introduce 16G/18G needle under real-time in-plane guidance into the solid cortex of the node, pointing away from the major vascular bundle.",
            "Trigger automated cutting mechanism; swiftly retrieve needle and inspect core for fleshy lymphoid tissue.",
            "Obtain 2-3 substantial core passes; divide into formalin (IHC), RPMI (flow cytometry), and saline (GeneXpert MTB).",
            "Apply direct manual pressure for 10 minutes; scan with Color Doppler to verify absence of hematoma; apply sterile compression dressing."
        ],
        "complications": [
            "Local soreness and bruising (10-15%)",
            "Intranodal / perinodal hematoma (2-4%)",
            "Inadvertent major vascular puncture (<0.2%)",
            "Transient local nerve irritation (<0.5%)",
            "Inadequate tissue sample (<3%)"
        ],
        "maayTariffInr": 4500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित सतही लिम्फ नोड कोर बायोप्सी",
            "indicationEn": "Histological subtyping of enlarged superficial lymph nodes (lymphoma, metastatic cancer, or tuberculosis).",
            "indicationHi": "कांख, जांघ या हंसली की बढ़ी हुई गिल्टियों में लिम्फोमा कैंसर, टीबी या मेटास्टेसिस की जांच हेतु सुई से ठोस टुकड़ा लेना।",
            "descriptionEn": "Under real-time ultrasound guidance, an automated core biopsy needle is guided into the cortex of an enlarged superficial lymph node to harvest intact tissue cores for cancer pathology and flow cytometry while strictly avoiding major vessels.",
            "descriptionHi": "सोनोग्राफी से देखकर पास की खून की मुख्य नसों को बचाते हुए एक विशेष बायोप्सी सुई द्वारा गिल्टी से ठोस टुकड़ा निकाला जाता है ताकि लिम्फोमा कैंसर, टीबी या अन्य बीमारियों का पक्का और विस्तृत वर्गीकरण हो सके।",
            "benefitsEn": [
                "Preserves tissue architecture essential for complete WHO lymphoma classification and receptor testing.",
                "Higher diagnostic yield (>98%) compared to fine needle aspiration alone.",
                "Spares patients the operating theater cost, pain, and scars of open surgical node excision."
            ],
            "benefitsHi": [
                "लिम्फोमा कैंसर के सटीक प्रकार और टीबी का पक्का पता चलता है।",
                "बारीक सुई की तुलना में रिपोर्ट अधूरी रहने का जोखिम न के बराबर।",
                "ऑपरेशन थियेटर में चीरा लगाकर गिल्टी निकालने के झंझट से पूरी तरह मुक्ति।"
            ],
            "specificRisksEn": [
                "Local pain and soreness for 2-3 days (10-15%).",
                "Hematoma or bruising around the lymph node (2-4%).",
                "Minor vascular nick readily controlled by compression (<0.2%).",
                "Temporary skin numbness or tingling (<0.5%).",
                "Sample containing only necrotic debris requiring repeat biopsy (<3%)."
            ],
            "specificRisksHi": [
                "गिल्टी वाली जगह पर 2-3 दिन हल्का दर्द या खिंचाव (10-15%)।",
                "गिल्टी के पास खून का थक्का जमना या सूजन (2-4%)।",
                "खून की नस में हल्की सुई लगना जो दबाने से ठीक हो जाती है (<0.2%)।",
                "त्वचा पर हल्का सुन्नपन (<0.5%)।",
                "सैंपल में केवल मृत हिस्सा आने पर दोबारा जांच की संभावना (<3%)।"
            ],
            "alternativesEn": "Surgical open excisional biopsy under general/local anesthesia, repeat FNAC, or empirical medical treatment.",
            "alternativesHi": "ऑपरेशन करके पूरी गिल्टी बाहर निकालना (Excisional Biopsy) या दोबारा बारीक सुई से जांच।",
            "sedationTypeEn": "Local anesthesia with optional mild IV sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार हल्की शामक दवा।"
        }
    },
    {
        "id": "fluoroscopic-endobiliary-forceps-biopsy",
        "name": "Fluoroscopic Endobiliary Forceps Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV050",
        "rghsCode": "693 / 43",
        "icd10": "C24.0 (Malignant neoplasm of extrahepatic bile duct) / K83.1 (Obstruction of bile duct)",
        "indications": [
            "Indeterminate biliary stricture (Klatskin tumor / hilar cholangiocarcinoma vs benign inflammatory stricture)",
            "Histological tissue acquisition during Percutaneous Transhepatic Biliary Drainage (PTBD)",
            "Failed or inconclusive endoscopic retrograde cholangiopancreatography (ERCP) brush cytology",
            "Histological confirmation of intrinsic biliary tract malignancy prior to biliary stent placement"
        ],
        "preOpCriteria": [
            "Established percutaneous transhepatic biliary access (7F-8F sheath in place)",
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "Broad-spectrum IV antibiotic prophylaxis administered",
            "Fasting 4 hours; fluoroscopy table and C-arm operational"
        ],
        "hardware": [
            { "category": "Biopsy Forceps", "name": "Flexible Endobiliary Biopsy Forceps", "spec": "1.8 - 2.4 mm flexible jaw forceps, 120 cm length, radiopaque cup", "standardStore": "Central IR Consignment Store" },
            { "category": "Biliary Access", "name": "7F - 8F Transhepatic Vascular / Biliary Sheath", "spec": "Check-Flo / Radiofocus introducer sheath with radiopaque tip", "standardStore": "Cath Lab Access Cabinet" },
            { "category": "Guidewire & Catheter", "name": "0.035 Stiff Glidewire & 5F Kumpe Catheter", "spec": "260 cm angled hydrophilic wire with 100 cm catheter", "standardStore": "Cath Lab Main Store" },
            { "category": "Specimen Container", "name": "Formalin Vials & Pathology Cassettes", "spec": "10% neutral buffered formalin containers", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Under fluoroscopy, advance 0.035 hydrophilic wire and 5F catheter through existing PTBD tract across the biliary stricture into duodenum.",
            "Perform cholangiogram to precisely delineate the proximal and distal margins of the stricture.",
            "Exchange for an 8F vascular/biliary sheath placed with its tip positioned immediately proximal to the stricture margin.",
            "Advance flexible endobiliary biopsy forceps through the sheath under fluoroscopic monitoring directly into the strictured lumen.",
            "Open the forceps jaws; advance into the mucosal lesion; firmly close jaws to bite the tumor tissue; gently pull back to sever the specimen.",
            "Withdraw forceps from sheath; tease out intact tissue bite into formalin; repeat for 3-5 distinct bites.",
            "Perform completion cholangiogram to ensure no biliary perforation or major extravasation.",
            "Re-advance guidewire and replace external-internal biliary drainage catheter (8.5F or 10F) across the stricture; secure to skin."
        ],
        "complications": [
            "Transient hemobilia (5-10%, usually self-limiting venous bleeding)",
            "Post-procedure cholangitis or bacteremia (2-4%)",
            "Bile duct wall perforation (<1%)",
            "Abdominal pain / biliary colic (10-15%)",
            "Catheter displacement (<1%)"
        ],
        "maayTariffInr": 12000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Boston Scientific India (+91 98293 45678)"
        ],
        "consent": {
            "nameHi": "फ्लोरोस्कोपिक एंडोबिलियरी बायोप्सी (पित्त नली के अंदर से चिमटी द्वारा टुकड़ा लेना)",
            "indicationEn": "Transcatheter tissue biopsy of obstructive biliary strictures (cholangiocarcinoma) during PTBD.",
            "indicationHi": "पित्त की नली में रुकावट या कैंसर (कोलेंजियोकार्सिनोमा) की जांच हेतु पित्त की नली के अंदर से विशेष चिमटी द्वारा टुकड़ा लेना।",
            "descriptionEn": "During transhepatic biliary drainage under fluoroscopic X-ray guidance, a miniature flexible forceps instrument is passed through the biliary sheath directly into the bile duct narrowing to take small bites of tissue for cancer pathology.",
            "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी) की निगरानी में पित्त की नली में पड़ी नली के रास्ते से एक बहुत बारीक और लचीली चिमटी (Forceps) अंदर ले जाकर रुकावट वाली जगह से सीधे 3-4 छोटे टुकड़े लिए जाते हैं ताकि कैंसर की पक्की पुष्टि हो सके।",
            "benefitsEn": [
                "Significantly higher diagnostic sensitivity (>70-80%) compared to brush cytology alone.",
                "Performed seamlessly through existing PTBD tract without additional skin punctures.",
                "Provides solid tissue chunks essential for cancer typing and stenting decisions."
            ],
            "benefitsHi": [
                "केवल ब्रश जांच की तुलना में कैंसर पकड़ने की क्षमता (70-80%) बहुत अधिक होती है।",
                "पहले से पड़ी पित्त की नली के रास्ते ही हो जाती है, अलग से कोई नया चीरा नहीं लगता।",
                "स्टंट लगाने और सटीक कीमोथेरेपी तय करने के लिए ठोस टुकड़ा मिल जाता है।"
            ],
            "specificRisksEn": [
                "Hemobilia (bleeding into bile ducts, blood in drainage bag) (5-10%, usually settles on its own).",
                "Bile duct infection / cholangitis with fever (2-4%).",
                "Abdominal pain or biliary colic for 24 hours (10-15%).",
                "Extremely rare tear or perforation of bile duct (<1%).",
                "Sample containing only inflammatory tissue requiring repeat biopsy (<10%)."
            ],
            "specificRisksHi": [
                "पित्त की नली में खून का रिसाव (थैली में लाल रंग दिखना) (5-10%, स्वतः ठीक हो जाता है)।",
                "पित्त में संक्रमण और बुखार (कोलेंजाइटिस) (2-4%)।",
                "पेट में 1 दिन हल्का दर्द या मरोड़ (10-15%)।",
                "पित्त की नली में छेद होने का अत्यंत दुर्लभ जोखिम (<1%)।",
                "सैंपल में केवल सूजन आने पर दोबारा जांच की आवश्यकता (<10%)।"
            ],
            "alternativesEn": "Endoscopic ERCP biopsy / brush cytology, percutaneous transhepatic brush cytology alone, or surgical exploratory laparotomy.",
            "alternativesHi": "दूरबीन (ERCP) द्वारा बायोप्सी, केवल ब्रश से जांच (Brush Cytology), या पेट का बड़ा ऑपरेशन।",
            "sedationTypeEn": "Local anesthesia to biliary entry site with IV analgesia and conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक व शामक दवा।"
        }
    },
    {
        "id": "fluoroscopic-endobiliary-brush-cytology",
        "name": "Fluoroscopic Endobiliary Brush Cytology",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV051",
        "rghsCode": "693 / 43",
        "icd10": "C24.0 (Malignant neoplasm of extrahepatic bile duct) / K83.1 (Obstruction of bile duct)",
        "indications": [
            "Tight or tortuous biliary strictures impassable by biopsy forceps during PTBD",
            "Cytological confirmation of suspected cholangiocarcinoma or pancreatic cancer invading the common bile duct",
            "Surveillance of biliary strictures in primary sclerosing cholangitis (PSC)",
            "Complimentary sampling combined with endobiliary forceps biopsy to increase overall diagnostic yield"
        ],
        "preOpCriteria": [
            "Percutaneous biliary access sheath in place across liver parenchyma",
            "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
            "Prophylactic intravenous antibiotics on board",
            "Fasting 4 hours; fluoroscopic C-arm ready"
        ],
        "hardware": [
            { "category": "Cytology Brush", "name": "Endobiliary Cytology Brush Catheter", "spec": "8F compatible, 2.0 mm diameter bristle brush with radiopaque markers, 120 cm", "standardStore": "Central IR Consignment Store" },
            { "category": "Guidewire & Sheath", "name": "0.035 Guidewire & 7F-8F Biliary Sheath", "spec": "Hydrophilic angled wire and 7F-8F Check-Flo sheath", "standardStore": "Cath Lab Access Cabinet" },
            { "category": "Cytology Supplies", "name": "Glass Slides & CytoLyt Fixative Vials", "spec": "95% ethanol fixative slides and preservative fluid bottles", "standardStore": "Pathology Consumables Store" },
            { "category": "Contrast Medium", "name": "Iohexol 300 mg I/mL", "spec": "50 mL contrast vial for cholangiography", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Perform baseline cholangiogram through existing transhepatic biliary access to outline the stricture location and length.",
            "Pass 0.035 hydrophilic wire across the stricture into the duodenum.",
            "Advance the sheathed cytology brush catheter over the wire until radiopaque markers straddle the strictured segment under fluoroscopy.",
            "Retract the protective sheath to expose the bristles within the malignant narrowing.",
            "Vigorously advance and pull back the brush with 360-degree rotational movements 10-15 times across the stricture to abrade surface tumor cells.",
            "Pull the exposed brush back inside the protective outer sheath before withdrawing from the patient to prevent cell loss in the tract.",
            "Withdraw brush system; immediately extend bristles outside and vigorously smear onto glass slides, cutting brush tip into CytoLyt solution for cell block.",
            "Re-advance wire, verify stricture patency, and replace biliary drainage catheter into stable position."
        ],
        "complications": [
            "Mild transient hemobilia (2-5%)",
            "Post-procedure cholangitis / bacteremia (1-3%)",
            "Biliary colic / discomfort (5-10%)",
            "Brush entrapment or detachment (<0.2%)",
            "False-negative cytology due to submucosal tumor growth (20-30%)"
        ],
        "maayTariffInr": 9000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Boston Scientific India (+91 98293 45678)"
        ],
        "consent": {
            "nameHi": "फ्लोरोस्कोपिक एंडोबिलियरी ब्रश साइटोलॉजी (पित्त नली के अंदर से ब्रश जांच)",
            "indicationEn": "Cytological brushing of biliary strictures for malignant cell detection during PTBD.",
            "indicationHi": "पित्त की नली में रुकावट या पीलिया के कारण की जांच हेतु नली के अंदर से विशेष ब्रश द्वारा कोशिकाओं का सैंपल लेना।",
            "descriptionEn": "Under fluoroscopic X-ray guidance through an existing biliary drainage tube, a miniature cytological brush is passed across the narrowed bile duct and rotated to collect shed cancer cells for microscopic examination.",
            "descriptionHi": "एक्स-रे की निगरानी में पहले से पड़ी पित्त की नली के रास्ते एक बहुत बारीक ब्रश रुकावट वाली जगह पर ले जाया जाता है और वहां रगड़कर कैंसर की कोशिकाओं का सैंपल लिया जाता है।",
            "benefitsEn": [
                "Safe, minimally invasive method to sample tight biliary strictures where forceps cannot pass.",
                "Performed through existing drainage tube without additional skin cuts.",
                "Fast procedure with rapid cytopathology turnaround."
            ],
            "benefitsHi": [
                "सख्त और संकरी रुकावटों में भी आसानी से हो जाती है जहां अन्य उपकरण नहीं जा पाते।",
                "पहले से पड़ी नली के रास्ते ही हो जाती है, कोई नया घाव नहीं बनता।",
                "पीलिया और कैंसर का कारण जानने में अत्यंत मददगार।"
            ],
            "specificRisksEn": [
                "Mild blood in bile drainage bag (2-5%, self-limiting).",
                "Infection / fever (cholangitis) (1-3%).",
                "Abdominal discomfort or cramping (5-10%).",
                "False-negative result (cancer cells not shed on surface, requiring repeat testing) (20-30%).",
                "Extremely rare brush breakage (<0.2%)."
            ],
            "specificRisksHi": [
                "पित्त की थैली में हल्का खून आना (2-5%, स्वतः ठीक हो जाता है)।",
                "पित्त में संक्रमण और बुखार (1-3%)।",
                "पेट में हल्का दर्द या भारीपन (5-10%)।",
                "कोशिकाएं सतह पर न आने पर रिपोर्ट में कैंसर न दिखने का जोखिम (False Negative) (20-30%)।",
                "ब्रश के उपकरण में खराबी का अत्यंत दुर्लभ खतरा (<0.2%)।"
            ],
            "alternativesEn": "Endobiliary forceps biopsy, endoscopic ERCP brush cytology, or diagnostic surgical exploration.",
            "alternativesHi": "चिमटी द्वारा एंडोबिलियरी बायोप्सी (Forceps Biopsy), दूरबीन (ERCP) जांच, या ऑपरेशन।",
            "sedationTypeEn": "Local anesthesia with IV analgesia and conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक व शामक दवा।"
        }
    },
    {
        "id": "transvascular-endomyocardial-biopsy",
        "name": "Transvascular Endomyocardial Biopsy (Right Ventricular Septal)",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV052",
        "rghsCode": "693 / 36",
        "icd10": "T86.21 (Heart transplant rejection) / I42.0 (Dilated cardiomyopathy)",
        "indications": [
            "Surveillance and diagnosis of allograft rejection following orthotopic heart transplantation",
            "Unexplained new-onset heart failure / rapidly progressive cardiomyopathy",
            "Diagnosis of cardiac amyloidosis, sarcoidosis, hemochromatosis, or myocarditis",
            "Evaluation of drug-induced (e.g. anthracycline) cardiotoxicity"
        ],
        "preOpCriteria": [
            "Coagulation status: INR <= 1.4, Platelets >= 80,000/uL",
            "Continuous 12-lead ECG, pulse oximetry, and invasive blood pressure monitoring arranged",
            "Transthoracic echocardiography documenting ventricular anatomy and lack of intracardiac thrombi",
            "Fasting 4 hours; resuscitation drugs and transcutaneous pacing on standby"
        ],
        "hardware": [
            { "category": "Bioptome", "name": "Caves-Schulz / Cordis 7F Flexible Endomyocardial Bioptome", "spec": "7F x 100 cm flexible radiopaque bioptome with 2.3 mm cutting jaws", "standardStore": "Cath Lab Dedicated Cardiac Cabinet" },
            { "category": "Sheath", "name": "7F / 8F Curved Guiding Sheath (Mullins / St. Jude)", "spec": "7F/8F x 45-60 cm sheath with dilator pre-shaped for RV septum", "standardStore": "Cath Lab Access Cabinet" },
            { "category": "Vascular Access", "name": "7F Vascular Introducer Sheath", "spec": "11 cm sheath for right internal jugular vein access", "standardStore": "Cath Lab Access Cabinet" },
            { "category": "Specimen Container", "name": "Formalin Vials & Glutaraldehyde Vials", "spec": "10% formalin (LM/IHC) and glutaraldehyde (Electron Microscopy)", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Under ultrasound guidance, cannulate right internal jugular vein (preferred) and place 7F vascular sheath.",
            "Advance 7F curved guiding sheath over 0.035 wire through SVC, right atrium, and tricuspid valve into right ventricle.",
            "Orient sheath tip anteriorly and medially directly against the muscular interventricular septum (avoiding free RV wall).",
            "Introduce flexible 7F bioptome through sheath under fluoroscopic monitoring until jaws touch the interventricular septum.",
            "Under fluoroscopy in RAO 30 and LAO 60 views, open bioptome jaws, advance gently against septum, and observe premature ventricular contractions (PVCs) confirming myocardial contact.",
            "Firmly close bioptome jaws, pull back gently to sever myocardial specimen, and withdraw bioptome from sheath.",
            "Inspect sample: firm, brown-red myocardial tissue; harvest 4-6 distinct bites from different septal regions.",
            "Transfer specimens into formalin, glutaraldehyde, and Michel's medium; perform immediate post-biopsy echocardiogram to rule out pericardial effusion / tamponade."
        ],
        "complications": [
            "Transient ventricular arrhythmias / PVCs during contact (expected, 80-90%, self-limiting)",
            "Right ventricular free-wall perforation and cardiac tamponade (<0.5-1%, life-threatening, requires pericardiocentesis)",
            "Transient right bundle branch block (RBBB) (2-4%)",
            "Tricuspid valve leaflet trauma / worsening tricuspid regurgitation (<0.5%)",
            "Access site neck hematoma (<1%)"
        ],
        "maayTariffInr": 35000,
        "vendorContacts": [
            "Cordis / Cardinal Health India (+91 98294 56789)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "ट्रांसवैस्कुलर एंडोमायोकार्डियल बायोप्सी (गर्दन की नस द्वारा दिल की मांसपेशी का टुकड़ा लेना)",
            "indicationEn": "Cardiac tissue biopsy from right ventricular septum for heart transplant rejection or cardiomyopathy.",
            "indicationHi": "दिल के ट्रांसप्लांट के बाद रिजेक्शन, मायोकार्डाइटिस या दिल की मांसपेशियों की गंभीर बीमारी (एमाइलॉयडोसिस) की जांच हेतु दिल का टुकड़ा लेना।",
            "descriptionEn": "Under fluoroscopic X-ray and ultrasound guidance in the cardiac cath lab, a specialized bioptome catheter is guided through the jugular vein in the neck into the right ventricle of the heart to safely harvest tiny tissue samples from the muscular septum dividing the heart chambers.",
            "descriptionHi": "कार्डियक कैथ लैब में एक्स-रे और सोनोग्राफी की निगरानी में गर्दन की नस के रास्ते एक विशेष बारीक कैथेटर दिल के अंदर ले जाया जाता है और दिल के दोनों हिस्सों के बीच की दीवार (सेप्टम) से दिल की मांसपेशी का बहुत छोटा सा टुकड़ा लिया जाता है।",
            "benefitsEn": [
                "Gold-standard test for diagnosing and staging cardiac transplant allograft rejection.",
                "Enables targeted pulse immunosuppressive therapy to save the transplanted heart from failure.",
                "Definitively proves amyloidosis, sarcoidosis, or giant-cell myocarditis to direct specific treatment."
            ],
            "benefitsHi": [
                "हार्ट ट्रांसप्लांट के बाद नए दिल को रिजेक्ट होने से बचाने की सबसे प्रामाणिक जांच।",
                "मांसपेशी की गंभीर बीमारी (Amyloidosis/Myocarditis) का पक्का पता चलता है।",
                "समय रहते सही दवा शुरू करके मरीज की जान बचाई जा सकती है।"
            ],
            "specificRisksEn": [
                "Temporary extra heartbeats / arrhythmias while touching heart wall (expected, settles immediately).",
                "Temporary right bundle branch electrical block (2-4%).",
                "Neck puncture site hematoma or soreness (1-2%).",
                "Cardiac wall puncture causing bleeding around heart (tamponade) (<0.5-1%, requires immediate needle drainage).",
                "Tricuspid valve irritation (<0.5%)."
            ],
            "specificRisksHi": [
                "जांच के दौरान दिल की धड़कन का कुछ सेकंड के लिए अनियमित होना (सामान्य, तुरंत ठीक हो जाता है)।",
                "गर्दन पर सुई की जगह पर दर्द या सूजन (1-2%)।",
                "दिल के चारों ओर खून इकट्ठा होने (Cardiac Tamponade) का गंभीर लेकिन दुर्लभ जोखिम (<0.5-1%) जिसके लिए तुरंत नली डालनी पड़ सकती है।",
                "दिल के वाल्व में खिंचाव (<0.5%)।",
                "सैंपल पर्याप्त न आने पर दोबारा जांच का जोखिम (<3%)।"
            ],
            "alternativesEn": "Cardiac MRI with T1/T2 mapping, donor-derived cell-free DNA (dd-cfDNA) blood monitoring, or empirical antirejection treatment.",
            "alternativesHi": "कार्डियक एमआरआई जांच, खून में डीएनए जांच (dd-cfDNA), अथवा केवल दवाओं से निगरानी।",
            "sedationTypeEn": "Local neck anesthesia with continuous ECG monitoring and light IV sedation.",
            "sedationTypeHi": "गर्दन पर स्थानीय सुन्नता (Local Anesthesia), ईसीजी निगरानी और हल्की शामक दवा।"
        }
    },
    {
        "id": "transvenous-renal-mass-biopsy",
        "name": "Transvenous Renal Mass Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV053",
        "rghsCode": "693 / 36",
        "icd10": "C64.9 (Malignant neoplasm of kidney) / I82.3 (Embolism and thrombosis of renal vein)",
        "indications": [
            "Renal mass in patients with severe uncorrectable coagulopathy (INR > 1.8, Platelets < 40,000/uL)",
            "Renal cell carcinoma with extensive tumor thrombus extending into renal vein or inferior vena cava (IVC)",
            "Severe ascites, solitary kidney with central tumor, or morbid obesity precluding percutaneous flank access",
            "Confirmation of intravascular renal tumor thrombus histology prior to cavo-atrial thrombectomy"
        ],
        "preOpCriteria": [
            "Coagulation profile evaluated; blood products on standby",
            "Contrast-enhanced CT or MR venography defining renal vein anatomy and tumor thrombus level",
            "Fasting 4-6 hours; patient supine on fluoroscopy table",
            "Ultrasound documentation of patent right internal jugular or common femoral vein"
        ],
        "hardware": [
            { "category": "Transvenous Biopsy Set", "name": "Cook Quick-Core / LABS Transvenous Biopsy System", "spec": "7F x 60-80 cm curved guiding sheath with 18G/19G x 80 cm cutting needle", "standardStore": "Central IR Consignment Store" },
            { "category": "Vascular Access", "name": "7F - 8F Vascular Introducer Sheath", "spec": "11 cm sheath with 0.035 wire and needle", "standardStore": "Cath Lab Access Cabinet" },
            { "category": "Diagnostic Catheter", "name": "5F Cobra / Renal Double-Curve / RDC Catheter", "spec": "65-100 cm length, 0.035 lumen", "standardStore": "Cath Lab Main Store" },
            { "category": "Contrast Medium", "name": "Iodinated Contrast / CO2 Gas", "spec": "Iohexol 300 for selective renal venography", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Cannulate right internal jugular vein (or common femoral vein) under ultrasound guidance; place 7F-8F vascular sheath.",
            "Advance 0.035 guidewire and 5F Cobra/RDC catheter through IVC into the affected main renal vein.",
            "Perform selective renal venogram to visualize the tumor thrombus or renal parenchymal tumor blush.",
            "Advance 7F guiding sheath deeply into the renal vein branch wedged against or adjacent to the tumor.",
            "Introduce 18G/19G long Quick-Core biopsy needle through sheath; verify position under fluoroscopy in two projections.",
            "Instruct patient to hold breath; deploy cutting needle directly into the intravascular tumor thrombus or renal parenchyma.",
            "Retrieve 2-3 core tissue samples; transfer into formalin for histopathology and immunohistochemistry.",
            "Perform completion renal venogram to verify absence of capsular perforation or contrast extravasation; remove sheath and compress vein."
        ],
        "complications": [
            "Renal vein thrombosis / propagation of tumor thrombus (1-2%)",
            "Renal capsule perforation and retroperitoneal hematoma (<1%)",
            "Transient gross hematuria (2-4%)",
            "Neck or groin access site hematoma (1-2%)",
            "Pulmonary tumor or bland embolism (<0.5%)"
        ],
        "maayTariffInr": 35000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "ट्रांसवीनस रीनल मास बायोप्सी (नस के रास्ते गुर्दे की गांठ/थ्रॉम्बस की बायोप्सी)",
            "indicationEn": "Transvenous biopsy of kidney tumor or renal vein tumor thrombus in high bleeding risk patients.",
            "indicationHi": "खून पतला होने, प्लेटलेट्स कम होने या गुर्दे की नस में कैंसर का थक्का फैलने पर नस के रास्ते गुर्दे की गांठ का टुकड़ा लेना।",
            "descriptionEn": "Under fluoroscopic guidance in the cath lab, a catheter is guided from the neck or groin vein into the renal vein. A specialized needle takes tissue from the kidney tumor or renal vein tumor thrombus from within the bloodstream, eliminating external puncture bleeding.",
            "descriptionHi": "कैथ लैब में गर्दन या जांघ की नस के रास्ते से एक बारीक नली गुर्दे की खून की नस तक पहुंचाई जाती है। नस के अंदर से ही गुर्दे की गांठ या नस में जमे कैंसर के थक्के से टुकड़ा निकाला जाता है। इससे बाहर पेट या पीठ पर कोई चीरा नहीं लगता।",
            "benefitsEn": [
                "Allows safe kidney cancer diagnosis even in severe coagulopathy or bleeding disorders.",
                "Zero risk of direct retroperitoneal muscular bleeding or perinephric hematoma.",
                "Directly samples intravascular tumor thrombus to confirm RCC before major cavo-atrial surgery."
            ],
            "benefitsHi": [
                "गंभीर ब्लीडिंग रिस्क या प्लेटलेट्स कम होने पर भी बिना किसी खतरे के गुर्दे का टुकड़ा लिया जा सकता है।",
                "कमर या पेट में खून बहने का कोई जोखिम नहीं होता।",
                "नस में फैले कैंसर की पक्की पुष्टि होती है जिससे सही ऑपरेशन की योजना बन पाती है।"
            ],
            "specificRisksEn": [
                "Neck or groin puncture site hematoma (1-2%).",
                "Transient blood in urine (2-4%).",
                "Renal capsule tear causing internal bleeding (<1%).",
                "Rare dislodgement of tumor thrombus (<0.5%).",
                "Inadequate tissue sample requiring repeat procedure (<5%)."
            ],
            "specificRisksHi": [
                "गर्दन या जांघ के पंक्चर स्थल पर सूजन या खून का थक्का (1-2%)।",
                "पेशाब में कुछ दिन हल्का खून आना (2-4%)।",
                "गुर्दे की झिल्ली में सुई लगने से अंदरूनी ब्लीडिंग का दुर्लभ जोखिम (<1%)।",
                "नस के थक्के का थोड़ा सा अंश फेफड़े की तरफ खिसकने का दुर्लभ खतरा (<0.5%)।",
                "सैंपल पर्याप्त न आने पर दोबारा जांच की संभावना (<5%)।"
            ],
            "alternativesEn": "Percutaneous flank core biopsy after massive platelet/plasma transfusion, or primary nephrectomy with IVC thrombectomy.",
            "alternativesHi": "रक्त/प्लेटलेट्स चढ़ाकर पीठ के रास्ते बायोप्सी, या सीधे बड़ा ऑपरेशन करके गुर्दा और नस निकालना।",
            "sedationTypeEn": "Local anesthesia with continuous monitoring and conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
        }
    }
]
