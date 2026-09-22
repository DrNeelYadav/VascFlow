# -*- coding: utf-8 -*-
"""
Part 1C: Retroperitoneal, Peritoneal, Thyroid & Neck Biopsies (Procedures 21 to 31)
"""

DATA_PART1C = [
    {
        "id": "ct-retroperitoneal-mass-biopsy",
        "name": "CT-Guided Retroperitoneal Mass / Lymph Node Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV021",
        "rghsCode": "693 / 42",
        "icd10": "C48.0 (Malignant neoplasm of retroperitoneum) / C77.2 (Intra-abdominal lymph nodes)",
        "indications": [
            "Retroperitoneal mass suspicious for soft tissue sarcoma (liposarcoma, leiomyosarcoma)",
            "Enlarged retroperitoneal / para-aortic lymphadenopathy suspicious for lymphoma or testicular cancer metastasis",
            "Differentiating retroperitoneal fibrosis (RPF / IgG4-RD) from malignant infiltration",
            "Confirmation of retroperitoneal recurrence following oncological resection"
        ],
        "preOpCriteria": [
            "Coagulation profile within 48h: INR <= 1.4, Platelets >= 60,000/uL",
            "Contrast CT reviewed to plan posterior, trans-iliopsoas, or lateral extraperitoneal access",
            "Fasting for 4 hours; IV access verified",
            "Safe distance maintained from aorta, IVC, renal hilum, and lumbar nerve plexus"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G Coaxial Biopsy Needle System", "spec": "17G x 15-20 cm introducer cannula with 18G semi-automated core needle", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "CT Accessories", "name": "Radiopaque Skin Grid & Laser Pointer", "spec": "Sterile skin localization grid", "standardStore": "CT Suite D-9211" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "20 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin & Flow Cytometry Transport Media", "spec": "10% formalin and RPMI medium for lymphoma profiling", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient prone or in lateral oblique posture on the CT table with skin grid across lumbar back.",
            "Acquire low-dose planning CT images through the retroperitoneum; map the target lesion and calculate needle path.",
            "Plan trajectory through the erector spinae or quadratus lumborum muscles, avoiding the kidney, colon, aorta, and IVC.",
            "Prep, drape, and infiltrate 15-20 mL 2% Lignocaine into skin, lumbar musculature, and retroperitoneal fat.",
            "Advance 17G coaxial needle under intermittent CT fluoroscopy or check scans until tip touches mass capsule.",
            "Pass 18G cutting needle through cannula and deploy into viable non-necrotic portion of the tumor.",
            "Harvest 2-3 substantial core specimens; divide between formalin and RPMI medium for lymphoma immunophenotyping.",
            "Withdraw needle; perform non-contrast CT to rule out retroperitoneal hemorrhage or hematoma; apply pressure dressing."
        ],
        "complications": [
            "Lumbar back pain or muscular stiffness (15-20%)",
            "Retroperitoneal hematoma (2-4%, usually contained)",
            "Transient femoral or lumbar nerve neuropraxia / leg paresthesia (<1%)",
            "Major retroperitoneal hemorrhage (<0.5%)",
            "Inadvertent colonic or renal injury (<0.2%)"
        ],
        "maayTariffInr": 8500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित रेट्रोपेरिटोनियल गांठ / लिम्फ नोड कोर बायोप्सी",
            "indicationEn": "Histopathological evaluation of deep retroperitoneal tumor (sarcoma, lymphoma, metastatic adenopathy).",
            "indicationHi": "पेट के पिछले हिस्से (रेट्रोपेरिटोनियम) की गांठ, लिम्फोमा, सारकोमा या ग्रंथियों की जांच हेतु सीटी स्कैन द्वारा टुकड़ा लेना।",
            "descriptionEn": "Under precise CT scanning, a coaxial biopsy needle is guided through the back muscles into the deep retroperitoneal mass while carefully avoiding the aorta, vena cava, intestines, and kidneys to obtain tissue cores for cancer analysis.",
            "descriptionHi": "सीटी स्कैन की थ्री-डी निगरानी में पीठ के रास्ते एक बारीक सुई बड़ी रक्तवाहिकाओं (Aorta/IVC) और आंतों को बचाते हुए पेट के गहरे पिछले हिस्से की गांठ तक पहुंचाई जाती है और कैंसर की पुष्टि हेतु टुकड़ा निकाला जाता है।",
            "benefitsEn": [
                "Definitively classifies sarcoma or lymphoma subtypes without major exploratory abdominal surgery.",
                "Sub-millimeter CT guidance avoids catastrophe to vital retroperitoneal vessels.",
                "Provides tissue for flow cytometry and molecular tumor markers."
            ],
            "benefitsHi": [
                "बिना पेट खोले ही सारकोमा या लिम्फोमा कैंसर का सटीक प्रकार पता चलता है।",
                "सीटी स्कैन से शरीर की मुख्य नसों को नुकसान से पूरी तरह बचाया जा सकता है।",
                "आधुनिक कीमोथेरेपी और दवाइयां तय करने के लिए आवश्यक जांचें हो पाती हैं।"
            ],
            "specificRisksEn": [
                "Back pain and muscular soreness for 1-2 days (15-20%).",
                "Retroperitoneal hematoma (internal blood collection) (2-4%).",
                "Temporary numbness or tingling down the thigh from nerve irritation (<1%).",
                "Major internal bleeding requiring blood transfusion (<0.5%).",
                "Inadequate tissue sample (<5%)."
            ],
            "specificRisksHi": [
                "कमर या पीठ की मांसपेशियों में 1-2 दिन दर्द (15-20%)।",
                "पेट के पिछले हिस्से में खून का थक्का जमना (2-4%)।",
                "जांघ में अस्थायी झनझनाहट या सुन्नपन (<1%)।",
                "गंभीर ब्लीडिंग जिसके लिए अतिरिक्त उपचार की आवश्यकता पड़े (<0.5%)।",
                "सैंपल पर्याप्त न आने पर दोबारा जांच का जोखिम (<5%)।"
            ],
            "alternativesEn": "Diagnostic laparoscopy, open retroperitoneal biopsy via flank incision, or empirical systemic therapy.",
            "alternativesHi": "ऑपरेशन द्वारा चीरा लगाकर टुकड़ा लेना (Laparoscopy / Open Biopsy) अथवा केवल अंदाजे से दवा देना।",
            "sedationTypeEn": "Local anesthesia with monitored IV conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
        }
    },
    {
        "id": "ct-deep-pelvic-presacral-biopsy",
        "name": "CT-Guided Deep Pelvic / Presacral Mass Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV022",
        "rghsCode": "693 / 42",
        "icd10": "C76.3 (Malignant neoplasm of pelvis) / D48.0 (Neoplasm of uncertain behavior of bone and articular cartilage)",
        "indications": [
            "Presacral / retrorectal mass suspicious for chordoma, schwannoma, teratoma, or sarcoma",
            "Deep pelvic sidewall recurrence following surgical resection of rectal, ovarian, or cervical cancer",
            "Enlarged deep internal or external iliac lymph nodes obscured by pelvic bones and bladder",
            "Evaluation of non-healing presacral collection or chronic granuloma"
        ],
        "preOpCriteria": [
            "Coagulation status: INR <= 1.4, Platelets >= 60,000/uL",
            "Contrast-enhanced pelvic CT or MRI reviewed to establish transgluteal or trans-sciatic notch trajectory",
            "Fasting for 4 hours; bowel preparation / rectal emptying advised prior to procedure",
            "Mapping to strictly avoid sciatic nerve, gluteal vessels, rectum, and bladder"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G Coaxial Biopsy Needle System", "spec": "17G x 15-20 cm introducer with 18G semi-automated core needle", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "CT Accessories", "name": "Radiopaque Skin Grid & Laser Marker", "spec": "Sterile pelvic localization grid", "standardStore": "CT Suite D-9211" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "20 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin Vials & Touch Imprint Slides", "spec": "10% formalin and cytology slides", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient prone on the CT gantry with a pillow beneath pelvis to elevate hips.",
            "Acquire thin-section planning CT through the sacrum and pelvis; apply radiopaque grid across the buttock.",
            "Select a transgluteal approach traversing the greater sciatic foramen medial to the sciatic nerve and gluteal vessels, directly into the presacral space.",
            "Sterilize and drape buttock; infiltrate 15-20 mL 2% Lignocaine through skin, gluteus maximus, and sacrospinous ligament.",
            "Advance 17G coaxial cannula under intermittent CT guidance; check needle tip within presacral tumor.",
            "Fire 18G cutting needle during held expiration; obtain 2-3 tissue cores avoiding the rectal wall.",
            "Verify core adequacy and prepare touch imprints for cytopathology confirmation.",
            "Carefully retract coaxial needle; acquire post-biopsy pelvic CT to exclude hematoma or rectal wall violation; apply pressure dressing."
        ],
        "complications": [
            "Gluteal pain and buttock tenderness (15-25%)",
            "Sciatic nerve irritation / transient shooting leg pain (1-3%)",
            "Pelvic hematoma or gluteal bleeding (1-3%)",
            "Inadvertent rectal puncture with pelvic infection (<0.5%)",
            "Inadequate tissue sample (<5%)"
        ],
        "maayTariffInr": 9000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित गहरी पेडू / प्रीसेक्रल गांठ कोर बायोप्सी",
            "indicationEn": "Histopathological diagnosis of deep pelvic or presacral mass (chordoma, schwannoma, pelvic recurrence).",
            "indicationHi": "पेल्विस (पेडू) के गहरे हिस्से या रीढ़ की हड्डी के निचले भाग (प्रीसेक्रल) की गांठ से सीटी स्कैन द्वारा टुकड़ा लेना।",
            "descriptionEn": "Guided by millimeter CT navigation, a coaxial biopsy needle is steered through the buttock into the deep presacral mass while strictly avoiding the sciatic nerve, rectum, and major pelvic blood vessels to obtain diagnostic tissue cores.",
            "descriptionHi": "सीटी स्कैन की थ्री-डी निगरानी में नितंब (कूल्हे) के रास्ते एक बारीक सुई बड़ी नसों (Sciatic Nerve) और मलाशय (लैट्रिन के रास्ते) को बचाते हुए पेडू की गहरी गांठ तक पहुंचाई जाती है और जांच के लिए टुकड़ा निकाला जाता है।",
            "benefitsEn": [
                "Allows safe sampling of presacral and deep pelvic lesions inaccessible by standard surgery.",
                "Sub-millimeter CT guidance protects the sciatic nerve and pelvic organs from injury.",
                "Differentiates nerve tumors (schwannoma) from malignant chordoma or cancer recurrence."
            ],
            "benefitsHi": [
                "गहराई में स्थित गांठों की बिना किसी बड़े ऑपरेशन के सुरक्षित जांच हो जाती है।",
                "पैर की मुख्य नस (सायटिका नस) और मलाशय पूरी तरह सुरक्षित रहते हैं।",
                "गांठ साधारण है या कैंसर, इसका सटीक पता चलता है जिससे सही इलाज संभव होता है।"
            ],
            "specificRisksEn": [
                "Buttock pain and local tenderness for 2-3 days (15-25%).",
                "Pelvic hematoma or internal bleeding (1-3%).",
                "Temporary sharp tingling or nerve pain down the leg (1-3%).",
                "Rare rectal puncture or pelvic infection (<0.5%).",
                "Need for repeat procedure if tissue is insufficient (<5%)."
            ],
            "specificRisksHi": [
                "कूल्हे में 2-3 दिन हल्का दर्द या खिंचाव (15-25%)।",
                "पेडू के अंदर खून का थक्का जमना (1-3%)।",
                "पैर में हल्की झनझनाहट या करंट जैसा दर्द (1-3%, दवा से ठीक हो जाता है)।",
                "मलाशय में सुई लगने या संक्रमण का अत्यंत दुर्लभ खतरा (<0.5%)।",
                "सैंपल पर्याप्त न आने पर दोबारा जांच की संभावना (<5%)।"
            ],
            "alternativesEn": "Transrectal ultrasound-guided biopsy, exploratory open/laparoscopic pelvic surgery, or serial pelvic MRI monitoring.",
            "alternativesHi": "लैट्रिन के रास्ते से दूरबीन/अल्ट्रासाउंड बायोप्सी, पेडू का बड़ा ऑपरेशन, या एमआरआई से केवल निगरानी।",
            "sedationTypeEn": "Local anesthesia with monitored IV conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
        }
    },
    {
        "id": "usg-mesenteric-omental-biopsy",
        "name": "Ultrasound-Guided Mesenteric Mass / Omental Cake Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV023",
        "rghsCode": "693 / 41",
        "icd10": "C48.1 (Malignant neoplasm of specified parts of peritoneum) / C78.6 (Secondary malignant neoplasm of retroperitoneum and peritoneum)",
        "indications": [
            "Thickened, nodular omental caking in suspected peritoneal carcinomatosis (ovarian, gastric, colorectal cancer)",
            "Mesenteric mass suspicious for gastrointestinal stromal tumor (GIST), lymphoma, or desmoid tumor",
            "Tuberculous peritonitis / peritoneal tuberculosis with nodular omental thickening",
            "Unexplained ascites with mesenteric root lymphadenopathy"
        ],
        "preOpCriteria": [
            "Coagulation profile: INR <= 1.4, Platelets >= 50,000/uL",
            "Pre-procedure ultrasound establishing omental cake thickness (>10 mm) directly beneath the abdominal wall",
            "Fasting for 4 hours; patient positioned supine comfortably",
            "Color Doppler mapping to avoid epigastric and mesenteric blood vessels"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G Automated Core Biopsy Needle", "spec": "18G x 10-15 cm automated cutting needle with 15-20 mm throw", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "Linear / Curvilinear Probe", "spec": "High-frequency linear (5-12 MHz) or curved (3.5-5 MHz) array", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "15 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Preparation", "name": "Formalin Vials & GeneXpert Medium", "spec": "10% formalin plus sterile saline for mycobacterial PCR", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient supine; sonographically map the anterior abdominal wall and omental cake.",
            "Select an area of maximal omental thickening, ensuring safe clearance from underlying peristaltic small bowel loops.",
            "Prep and drape the anterior abdominal wall under aseptic precautions.",
            "Infiltrate 10-15 mL 2% Lignocaine into skin, subcutaneous fat, rectus sheath, and parietal peritoneum.",
            "Make a 2-mm skin nick; introduce 18G automated needle under real-time acoustic control into the omental mass.",
            "Trigger needle firing mechanism during shallow breathing, keeping throw strictly within omentum and away from bowel wall.",
            "Obtain 2-3 firm core biopsies; transfer to formalin for IHC and sterile saline for GeneXpert/culture.",
            "Scan omentum and peritoneal space with Color Doppler for active bleeding; apply sterile pressure dressing."
        ],
        "complications": [
            "Abdominal wall soreness and mild cramping (10-15%)",
            "Intra-omental or peritoneal hematoma (1-2%)",
            "Inadvertent bowel perforation (<0.2%)",
            "Localized peritonitis (<0.2%)",
            "Inadequate tissue showing only fibrofatty tissue (<5%)"
        ],
        "maayTariffInr": 5000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित मेसेंटेरिक गांठ / ओमेंटल केक बायोप्सी",
            "indicationEn": "Histological confirmation of omental cake or mesenteric mass (ovarian/GI metastasis or tuberculosis).",
            "indicationHi": "पेट की आंतरिक चर्बी की परत (ओमेंटम) या नसों की गांठ में कैंसर, टीबी या मेटास्टेसिस की जांच हेतु सोनोग्राफी द्वारा टुकड़ा लेना।",
            "descriptionEn": "Under real-time ultrasound monitoring, a fine core biopsy needle is introduced through the front abdominal wall directly into the thickened omental tissue while carefully avoiding the underlying intestines to collect tissue for analysis.",
            "descriptionHi": "सोनोग्राफी में देखकर पेट के आगे की त्वचा को सुन्न करके एक बारीक सुई आंतों को बचाते हुए पेट के पर्दे (ओमेंटम) की गांठ में डाली जाती है और कैंसर या टीबी की जांच हेतु छोटा टुकड़ा निकाला जाता है।",
            "benefitsEn": [
                "Provides definitive diagnosis of peritoneal carcinomatosis or abdominal tuberculosis without surgery.",
                "Real-time ultrasound visualization ensures intestinal loops are completely avoided.",
                "Enables prompt start of neoadjuvant chemotherapy or anti-tubercular therapy."
            ],
            "benefitsHi": [
                "बिना पेट खोले ही पेट के कैंसर या पेट की टीबी की पक्की पुष्टि हो जाती है।",
                "सोनोग्राफी में आंतें लाइव दिखती हैं जिससे आंत में चोट लगने का खतरा नहीं रहता।",
                "कीमोथेरेपी या टीबी की दवा तुरंत शुरू करने में अत्यंत सहायक।"
            ],
            "specificRisksEn": [
                "Abdominal wall pain and mild tenderness for 1-2 days (10-15%).",
                "Small hematoma or bleeding within the omentum (1-2%).",
                "Inadvertent bowel wall puncture (<0.2%).",
                "Infection or localized peritonitis (<0.2%).",
                "Sample containing only normal fat requiring repeat test (<5%)."
            ],
            "specificRisksHi": [
                "पेट में 1-2 दिन हल्का दर्द या भारीपन (10-15%)।",
                "ओमेंटम में खून का छोटा थक्का जमना (1-2%)।",
                "आंत में सुई लगने का अत्यंत दुर्लभ जोखिम (<0.2%)।",
                "पेट में संक्रमण या सूजन का दुर्लभ खतरा (<0.2%)।",
                "सैंपल में केवल साधारण चर्बी आने पर दोबारा जांच की आवश्यकता (<5%)।"
            ],
            "alternativesEn": "Diagnostic laparoscopy with surgical omental biopsy, CT-guided biopsy, or paracentesis for fluid cytology.",
            "alternativesHi": "दूरबीन द्वारा पेट की जांच (Diagnostic Laparoscopy) या पेट के पानी की जांच (Paracentesis)।",
            "sedationTypeEn": "Local anesthesia with optional conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार हल्की शामक दवा।"
        }
    },
    {
        "id": "usg-peritoneal-deposit-biopsy",
        "name": "Ultrasound-Guided Peritoneal Deposit Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV024",
        "rghsCode": "693 / 41",
        "icd10": "C48.2 (Malignant neoplasm of peritoneum, unspecified) / C78.6 (Secondary neoplasm of peritoneum)",
        "indications": [
            "Discrete nodular peritoneal implants along abdominal wall, diaphragm, or pelvic peritoneum",
            "Staging of suspected gynecological (ovarian/fallopian tube) or gastrointestinal carcinomatosis",
            "Confirmation of recurrent peritoneal malignancy in patients with prior surgical debulking",
            "Differentiating peritoneal carcinomatosis from pseudomyxoma peritonei or tuberculous peritonitis"
        ],
        "preOpCriteria": [
            "Coagulation testing: INR <= 1.4, Platelets >= 50,000/uL",
            "Peritoneal nodule thickness >= 5-8 mm verified on high-frequency linear ultrasound",
            "Fasting for 3 hours; patient supine or semi-recumbent",
            "Color Doppler mapping of epigastric / abdominal wall vessels"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G / 20G Semi-Automated Core Biopsy Needle", "spec": "18G/20G x 10 cm core biopsy needle with 10-15 mm throw", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Frequency Linear Probe", "spec": "7 - 12 MHz linear array for superficial peritoneal visualization", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "10 mL ampoule", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin Vials & Molecular Kits", "spec": "10% formalin and saline container", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient comfortably supine; scan abdominal wall with high-frequency linear transducer to pinpoint nodular deposit.",
            "Verify deposit is adherent to parietal peritoneum, measuring thickness and checking underlying fluid or bowel movement.",
            "Sterilize and drape chosen puncture site under sterile surgical conditions.",
            "Infiltrate 5-10 mL 2% Lignocaine into skin, muscle layers, and peritoneal surface adjacent to nodule.",
            "Advance 18G/20G core needle under continuous real-time high-resolution sonographic control into nodule center.",
            "Trigger cutting needle tangential to abdominal wall to prevent penetration of deeper visceral structures.",
            "Obtain 2-3 distinct core specimens; examine for fleshy diagnostic tumor tissue.",
            "Scan area with Color Doppler for abdominal wall or peritoneal hematoma; apply sterile adhesive dressing."
        ],
        "complications": [
            "Abdominal wall bruise or local tenderness (10-15%)",
            "Peritoneal hematoma (1-2%)",
            "Inadvertent bowel serosal scratch (<0.2%)",
            "Localized infection (<0.2%)",
            "Inadequate tissue sample (<5%)"
        ],
        "maayTariffInr": 5000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित पेरिटोनियल जमाव (डिपॉजिट) कोर बायोप्सी",
            "indicationEn": "Histopathological diagnosis of nodular peritoneal cancer implants or tuberculosis.",
            "indicationHi": "पेट की भीतरी झिल्ली (पेरिटोनियम) पर जमी कैंसर की छोटी गांठों से सोनोग्राफी द्वारा सीधा टुकड़ा लेना।",
            "descriptionEn": "Under high-frequency ultrasound visualization, a fine biopsy needle is guided through the skin into a superficial nodular deposit on the peritoneal wall while safely avoiding deeper bowel loops to harvest tissue for analysis.",
            "descriptionHi": "उच्च-रिज़ॉल्यूशन सोनोग्राफी से देखकर पेट की त्वचा को सुन्न करके एक महीन सुई पेट की अंदरूनी दीवार पर जमी छोटी गांठ में डाली जाती है और आंतों को बचाते हुए जांच हेतु टुकड़ा निकाला जाता है।",
            "benefitsEn": [
                "Achieves definitive tissue confirmation of peritoneal carcinomatosis through a tiny needle puncture.",
                "Avoids the need for diagnostic surgical laparoscopy or general anesthesia.",
                "Enables molecular analysis to select optimal targeted or immunotherapy drugs."
            ],
            "benefitsHi": [
                "बिना पेट खोले केवल सुई से पेरिटोनियल कैंसर या टीबी की पक्की पुष्टि हो जाती है।",
                "बड़े ऑपरेशन या पूरी बेहोशी की आवश्यकता नहीं पड़ती।",
                "आधुनिक दवाओं के चुनाव के लिए आवश्यक जांचें तुरंत हो जाती हैं।"
            ],
            "specificRisksEn": [
                "Pain and local bruising at the puncture site (10-15%).",
                "Small hematoma or bleeding along the peritoneal lining (1-2%).",
                "Accidental bowel irritation (<0.2%).",
                "Local wound infection (<0.2%).",
                "Sample containing only fibrous scar tissue (<5%)."
            ],
            "specificRisksHi": [
                "सुई लगने की जगह पर 1-2 दिन हल्का दर्द या नील पड़ना (10-15%)।",
                "झिल्ली के अंदर हल्का खून का थक्का (1-2%)।",
                "आंत की सतह में मामूली रगड़ का अत्यंत दुर्लभ जोखिम (<0.2%)।",
                "संक्रमण का जोखिम (<0.2%)।",
                "सैंपल में ट्यूमर की जगह साधारण रेशा आने पर दोबारा जांच (<5%)।"
            ],
            "alternativesEn": "Diagnostic laparoscopy, CT-guided biopsy, or cytology of peritoneal ascitic fluid.",
            "alternativesHi": "दूरबीन द्वारा पेट का ऑपरेशन (Laparoscopy), सीटी बायोप्सी, या पेट के पानी की जांच।",
            "sedationTypeEn": "Local anesthesia with optional conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार हल्की शामक दवा।"
        }
    },
    {
        "id": "usg-thyroid-fnac",
        "name": "Ultrasound-Guided Thyroid Fine Needle Aspiration Cytology (FNAC)",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV025",
        "rghsCode": "693 / 41",
        "icd10": "E04.1 (Nontoxic single thyroid nodule) / C73 (Malignant neoplasm of thyroid gland)",
        "indications": [
            "Thyroid nodule meeting EU-TIRADS or ACR-TIRADS 3, 4, or 5 suspicious ultrasound criteria",
            "Nodule with microcalcifications, marked hypoechogenicity, irregular margins, or taller-than-wide shape",
            "Thyroid nodule associated with ipsilateral suspicious cervical lymphadenopathy",
            "Prior history of neck irradiation or family history of medullary thyroid carcinoma"
        ],
        "preOpCriteria": [
            "Anticoagulant / antiplatelet history reviewed (Aspirin held 3 days if clinical risk allows, though fine 23-25G needle is safe)",
            "High-resolution neck ultrasound documenting nodule size, TIRADS category, and vascularity",
            "Patient informed to avoid swallowing or speaking during active needle insertion",
            "Coagulation: normal platelet count and INR"
        ],
        "hardware": [
            { "category": "Aspiration Needle", "name": "23G - 25G Fine Needle with Clear Hub", "spec": "23G/25G x 1.0 - 1.5 inch needle with 10 mL syringe", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Frequency Linear Neck Probe", "spec": "8 - 15 MHz high-resolution linear array", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2% (Optional)", "spec": "Subcutaneous wheal (1-2 mL) or topical anesthetic cream", "standardStore": "DDC-14 Central" },
            { "category": "Cytology Supplies", "name": "Glass Slides & Fixative Spray", "spec": "Frosted glass slides with 95% ethanol and air-dried slides", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient supine with a shoulder roll to extend the neck comfortably.",
            "Perform ultrasound mapping of thyroid gland; measure nodule and characterize suspicious focal features.",
            "Clean anterior neck with povidone-iodine / chlorhexidine under sterile conditions.",
            "Optional: raise tiny dermal wheal with 0.5 mL 2% Lignocaine over entry point.",
            "Introduce 23G-25G needle along linear probe axis under continuous real-time acoustic visualization (in-plane technique).",
            "Advance needle tip into solid hypoechoic nodular component; instruct patient: 'Do not swallow, do not speak'.",
            "Perform capillary action / gentle negative pressure fanning passes (4-6 excursions) within the nodule over 10-15 seconds.",
            "Withdraw needle; immediately express droplets onto glass slides, smear gently, fix half in 95% ethanol (Papanicolaou stain) and air-dry half (Giemsa stain); apply manual compression for 5 minutes."
        ],
        "complications": [
            "Mild localized neck soreness or minor bruising (5-10%)",
            "Transient vagal dizziness or lightheadedness (1-2%)",
            "Minor intrathyroidal hematoma (1-2%, resolves spontaneously)",
            "Significant neck hematoma requiring airway observation (<0.1%)",
            "Inadequate Bethesda Category I cytology requiring repeat FNAC (<5-8%)"
        ],
        "maayTariffInr": 2800,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित थायरॉयड फाइन नीडल एस्पिरेशन (FNAC - बारीक सुई से कोशिका जांच)",
            "indicationEn": "Cytological evaluation of suspicious thyroid nodule to differentiate benign colloid nodule from thyroid cancer.",
            "indicationHi": "थायरॉयड ग्रंथि की गांठ में कैंसर अथवा साधारण गिल्टी की पहचान हेतु अत्यंत बारीक सुई से पानी/कोशिका की जांच (FNAC)।",
            "descriptionEn": "Using high-resolution ultrasound, an ultra-thin needle is guided precisely into the thyroid nodule in the front of the neck to aspirate microscopic cells for Bethesda classification without surgery.",
            "descriptionHi": "गर्दन के आगे थायरॉयड ग्रंथि को हाई-डेफिनिशन सोनोग्राफी से देखते हुए एक बहुत बारीक सुई गांठ में डाली जाती है और बिना किसी चीरे के कुछ ही सेकंड में कोशिकाओं का सैंपल लेकर कैंसर की जांच की जाती है।",
            "benefitsEn": [
                "Gold-standard non-surgical test to rule out thyroid cancer (Bethesda reporting system).",
                "Near-painless day-care procedure taking only a few minutes without stitches or scars.",
                "Prevents unnecessary thyroid removal surgery in over 80-90% of benign thyroid nodules."
            ],
            "benefitsHi": [
                "थायरॉयड कैंसर की जांच का सबसे सटीक और सरल तरीका।",
                "बिना किसी चीरे या टांके के मात्र 5 मिनट में बिना दर्द के जांच हो जाती है।",
                "80-90% मरीजों में थायरॉयड निकालने के गैर-जरूरी ऑपरेशन से बचाव होता है।"
            ],
            "specificRisksEn": [
                "Mild local soreness or small skin bruise for 1-2 days (5-10%).",
                "Small hematoma inside thyroid nodule (1-2%, harmless).",
                "Transient lightheadedness or dizziness during needle insertion (1-2%).",
                "Sample containing insufficient cells (Bethesda I), requiring repeat test (<5-8%).",
                "Extremely rare major hematoma causing breathing difficulty (<0.1%)."
            ],
            "specificRisksHi": [
                "गर्दन में सुई की जगह पर हल्का दर्द या छोटा सा नील पड़ना (5-10%)।",
                "गांठ के अंदर खून का हल्का थक्का जमना (1-2%)।",
                "घबराहट या हल्का चक्कर आना (1-2%)।",
                "सैंपल में कोशिकाएं कम आने पर दोबारा जांच की आवश्यकता (<5-8%)।",
                "गर्दन में अधिक खून बहने का अत्यंत दुर्लभ खतरा (<0.1%)।"
            ],
            "alternativesEn": "Thyroid Core Needle Biopsy (CNB), surgical diagnostic hemithyroidectomy, or ultrasound surveillance.",
            "alternativesHi": "मोटी सुई से कोर बायोप्सी (CNB), ऑपरेशन करके आधा थायरॉयड निकालना, या सोनोग्राफी से केवल निगरानी।",
            "sedationTypeEn": "Local skin anesthesia or topical numbing spray/cream.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) अथवा सुन्न करने वाली क्रीम।"
        }
    },
    {
        "id": "usg-thyroid-core-biopsy",
        "name": "Ultrasound-Guided Thyroid Core Needle Biopsy (CNB)",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV026",
        "rghsCode": "693 / 41",
        "icd10": "C73 (Malignant neoplasm of thyroid gland) / E04.2 (Nontoxic multinodular goiter)",
        "indications": [
            "Repeatedly non-diagnostic (Bethesda I) or indeterminate (Bethesda III/IV - AUS/FLUS) thyroid FNAC",
            "Suspected medullary thyroid carcinoma, anaplastic thyroid carcinoma, or thyroid lymphoma",
            "Dense calcified or sclerotic thyroid nodules where fine needles fail to yield cellular material",
            "Evaluation of post-radiation or fibrosing thyroiditis"
        ],
        "preOpCriteria": [
            "Coagulation status: INR <= 1.3, Platelets >= 80,000/uL",
            "Anticoagulant and antiplatelet drugs safely paused (Aspirin 5 days, DOACs 48 hours)",
            "High-resolution ultrasound demonstrating safe approach distance from common carotid artery and trachea",
            "Informed consent detailing neck hematoma precautions"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G / 20G Spring-Loaded Core Needle", "spec": "18G/20G x 10 cm automated needle with 10-15 mm throw, echogenic tip", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Frequency Linear Neck Probe", "spec": "10 - 15 MHz linear array with dedicated superficial preset", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "10 mL ampoule", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin Vials & Molecular Kits", "spec": "10% neutral buffered formalin vials", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Place patient supine with neck extension; map thyroid nodule, carotid artery, jugular vein, and trachea with Color Doppler.",
            "Plan a trans-isthmic or lateral in-plane approach keeping needle parallel to the probe and pointing away from the carotid artery.",
            "Sterilize anterior neck; infiltrate 5-8 mL 2% Lignocaine into subcutaneous fat and thyroid capsule under real-time vision.",
            "Introduce 18G/20G core needle under continuous sonographic guidance into the anterior margin of the nodule.",
            "Verify needle excursion trajectory; instruct patient to hold breath without swallowing.",
            "Trigger automated cutting mechanism; swiftly withdraw needle and confirm intact tissue core in specimen notch.",
            "Obtain 1-2 core passes; transfer to formalin for histopathology and immunohistochemistry (calcitonin, TTF-1, Ki-67).",
            "Perform immediate manual compression of thyroid bed for 10 minutes; scan neck with Doppler to rule out hematoma; apply pressure dressing."
        ],
        "complications": [
            "Neck pain and soreness radiating to ear/jaw (10-15%)",
            "Subcapsular or intrathyroidal hematoma (2-4%)",
            "Transient hoarseness / recurrent laryngeal nerve neuropraxia (<1%)",
            "Major cervical hematoma requiring surgical evacuation (<0.2%)",
            "Tracheal puncture with transient hemoptysis (<0.1%)"
        ],
        "maayTariffInr": 4800,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित थायरॉयड कोर नीडल बायोप्सी (CNB - सुई द्वारा ऊतक टुकड़ा)",
            "indicationEn": "Histological core biopsy for inconclusive thyroid FNAC, suspected thyroid lymphoma, or anaplastic cancer.",
            "indicationHi": "थायरॉयड की बारीक सुई जांच (FNAC) अधूरी रहने पर, या दुर्लभ लिम्फोमा/कैंसर की पक्की पुष्टि हेतु सुई से टुकड़ा लेना।",
            "descriptionEn": "Under high-frequency real-time ultrasound guidance, an automated core needle is precisely inserted into the thyroid nodule in the neck, keeping strictly away from the carotid artery and windpipe, to obtain a solid tissue core for histological architecture.",
            "descriptionHi": "सोनोग्राफी की निगरानी में गर्दन को सुन्न करके एक विशेष बायोप्सी सुई खून की मुख्य नस (कैरॉटिड) और सांस की नली को बचाते हुए थायरॉयड की गांठ में डाली जाती है और जांच के लिए ठोस टुकड़ा निकाला जाता है।",
            "benefitsEn": [
                "Drastically reduces inconclusive results (Bethesda III/IV) compared to FNAC alone.",
                "Preserves tissue architecture to diagnose thyroid lymphoma, medullary cancer, and follicular neoplasms.",
                "Helps avoid diagnostic surgery in over 85% of indeterminate thyroid nodules."
            ],
            "benefitsHi": [
                "बारीक सुई की तुलना में अधूरी रिपोर्ट आने की संभावना न के बराबर रहती है।",
                "थायरॉयड के जटिल कैंसर, लिम्फोमा और फॉलिकुलर ट्यूमर की स्पष्ट पहचान होती है।",
                "थायरॉयड के गैर-जरूरी ऑपरेशन से बचाव में अत्यंत प्रभावी।"
            ],
            "specificRisksEn": [
                "Neck pain radiating to ear or jaw for 1-2 days (10-15%).",
                "Hematoma in neck or thyroid gland (2-4%, usually self-limiting).",
                "Temporary voice change / hoarseness due to vocal cord nerve bruising (<1%).",
                "Major hematoma causing airway pressure (<0.2%).",
                "Sample fragmentation (<3%)."
            ],
            "specificRisksHi": [
                "गर्दन, कान या जबड़े में 1-2 दिन हल्का दर्द (10-15%)।",
                "थायरॉयड के आसपास खून का थक्का जमना (2-4%)।",
                "आवाज में अस्थायी भारीपन या बदलाव (<1%, कुछ दिनों में ठीक हो जाता है)।",
                "गर्दन में अत्यधिक खून बहने से सांस में रुकावट का दुर्लभ खतरा (<0.2%)।",
                "टुकड़ा टूटने या कम आने की संभावना (<3%)।"
            ],
            "alternativesEn": "Repeat thyroid FNAC with molecular panel, diagnostic hemithyroidectomy surgery, or clinical and ultrasound surveillance.",
            "alternativesHi": "दोबारा एफएनएसी जांच, ऑपरेशन द्वारा आधा थायरॉयड निकालना, या केवल सोनोग्राफी से निगरानी।",
            "sedationTypeEn": "Local anesthesia with optional mild oral conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार हल्की शामक दवा।"
        }
    },
    {
        "id": "usg-parathyroid-fnac-pth-washout",
        "name": "Ultrasound-Guided Parathyroid Mass FNAC with Parathyroid Hormone (PTH) Washout",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV027",
        "rghsCode": "693 / 41",
        "icd10": "E21.0 (Primary hyperparathyroidism) / D35.1 (Benign neoplasm of parathyroid gland)",
        "indications": [
            "Localization and confirmation of suspected parathyroid adenoma in primary hyperparathyroidism",
            "Differentiating parathyroid lesion from thyroid nodule or cervical lymph node",
            "Re-operative neck surgery for persistent or recurrent hyperparathyroidism with discordant Sestamibi / 4D-CT findings",
            "Ectopic parathyroid tissue confirmation prior to targeted minimally invasive parathyroidectomy"
        ],
        "preOpCriteria": [
            "Serum Calcium, Phosphate, and intact Parathyroid Hormone (iPTH) documented",
            "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
            "Technetium-99m Sestamibi / SPECT-CT and neck ultrasound reviewed",
            "Laboratory coordination confirmed for STAT needle washout iPTH assay"
        ],
        "hardware": [
            { "category": "Aspiration Needle", "name": "25G Fine Needle with Syringe", "spec": "25G x 1.5 inch needle with 5 mL syringe and 1 mL sterile normal saline", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Resolution Linear Neck Probe", "spec": "10 - 15 MHz linear transducer", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "5 mL ampoule", "standardStore": "DDC-14 Central" },
            { "category": "Biochemical Supplies", "name": "Saline Washout Tubes & EDTA Tubes", "spec": "1 mL sterile normal saline wash tubes for iPTH chemiluminescence", "standardStore": "Biochemistry Special Lab" }
        ],
        "techniqueSteps": [
            "Position patient supine with neck hyperextension; identify polar parathyroid lesion (polar vessel / hypoechoic oval gland).",
            "Map recurrent laryngeal nerve groove and carotid sheath with Color Doppler.",
            "Sterilize anterior neck; raise tiny dermal wheal of 2% Lignocaine.",
            "Introduce 25G needle under direct real-time in-plane sonographic guidance into the center of the parathyroid lesion.",
            "Make 3-4 gentle capillary excursions without high negative suction to prevent bloody dilution.",
            "Withdraw needle; express small cellular drop onto slide for cytopathology.",
            "Immediately flush needle lumen with exactly 1.0 mL of sterile normal saline into an EDTA / plain tube labeled 'Needle Washout'.",
            "Dispatch immediately on ice to biochemistry lab for iPTH measurement (iPTH in washout > serum iPTH confirms parathyroid origin); compress neck 5 minutes."
        ],
        "complications": [
            "Localized neck soreness or bruise (5-10%)",
            "Periparathyroid or capsular hematoma (1-2%)",
            "Parathyroid capsular fibrosis / rupture complicating subsequent surgery (<1%)",
            "Transient voice alteration (<0.5%)",
            "Inadequate washout volume (<2%)"
        ],
        "maayTariffInr": 3800,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Merit Medical Systems (+91 98294 56789)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित पैराथायरॉयड गांठ FNAC एवं PTH वॉशआउट जांच",
            "indicationEn": "Biochemical and cytological confirmation of parathyroid adenoma causing hyperparathyroidism.",
            "indicationHi": "रक्त में कैल्शियम बढ़ाने वाली पैराथायरॉयड ग्रंथि की गांठ की पहचान हेतु बारीक सुई द्वारा हार्मोन (PTH) वॉशआउट जांच।",
            "descriptionEn": "Under high-frequency ultrasound guidance, an ultra-thin needle is inserted into the suspected parathyroid gland behind the thyroid. A tiny cellular sample is collected and the needle is flushed with saline to measure parathyroid hormone (PTH) concentration directly.",
            "descriptionHi": "सोनोग्राफी से थायरॉयड के पीछे स्थित पैराथायरॉयड ग्रंथि को देखकर एक बहुत बारीक सुई से सैंपल लिया जाता है और सुई को सलाइन से धोकर उसमें पैराथायरॉयड हार्मोन (PTH) का स्तर नापा जाता है ताकि गांठ की सटीक पुष्टि हो सके।",
            "benefitsEn": [
                "Definitively confirms parathyroid origin by demonstrating extremely high PTH in the needle washout.",
                "Prevents negative neck explorations in patients with discordant scans.",
                "Enables focused, minimally invasive parathyroidectomy with minimal surgical scarring."
            ],
            "benefitsHi": [
                "गांठ पैराथायरॉयड की ही है, इसका शत-प्रतिशत सटीक और पक्का प्रमाण मिलता है।",
                "गलत जगह चीरा लगाने या असफल ऑपरेशन के जोखिम से पूरी तरह बचाव।",
                "छोटे और दूरबीन वाले ऑपरेशन द्वारा सफल इलाज संभव बनाता है।"
            ],
            "specificRisksEn": [
                "Mild soreness or minor skin bruising at front of neck (5-10%).",
                "Small hematoma around parathyroid gland (1-2%).",
                "Parathyroid tissue inflammation (<1%).",
                "Temporary mild voice hoarseness (<0.5%).",
                "Needle washout contaminated with blood requiring re-test (<2%)."
            ],
            "specificRisksHi": [
                "गर्दन में सुई की जगह पर हल्का दर्द या छोटा सा निशान (5-10%)।",
                "ग्रंथि के पास खून का हल्का थक्का जमना (1-2%)।",
                "ग्रंथि में हल्की सूजन (<1%)।",
                "आवाज में अस्थायी बदलाव (<0.5%)।",
                "खून अधिक मिलने पर जांच दोबारा करने की आवश्यकता (<2%)।"
            ],
            "alternativesEn": "4D-CT parathyroid imaging, Technetium-99m Sestamibi SPECT scan, or bilateral neck exploratory surgery.",
            "alternativesHi": "4D-सीटी स्कैन, सेस्टामिबी स्कैन, या सीधे दोनों तरफ गर्दन खोलकर ऑपरेशन करना।",
            "sedationTypeEn": "Local anesthesia to the skin.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
        }
    },
    {
        "id": "usg-cervical-ln-fnac-washout",
        "name": "Ultrasound-Guided Cervical Lymph Node FNAC with Thyroglobulin / Calcitonin Washout",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV028",
        "rghsCode": "693 / 41",
        "icd10": "C77.0 (Secondary malignant neoplasm of lymph nodes of head, face and neck) / C73 (Thyroid cancer)",
        "indications": [
            "Suspicious cervical lymph node in patients with known or treated papillary thyroid carcinoma (PTC)",
            "Suspected nodal metastasis in medullary thyroid carcinoma (MTC) for Calcitonin washout",
            "Cystic or necrotic cervical lymph nodes where cytology alone is frequently false-negative",
            "Preoperative mapping of lateral neck compartments (Levels II-V) prior to neck dissection"
        ],
        "preOpCriteria": [
            "Serum Thyroglobulin (Tg) or Calcitonin documented",
            "Neck ultrasound documenting round shape, loss of fatty hilum, microcalcifications, or cystic changes",
            "Coagulation: normal platelet count and INR",
            "Coordination with biochemistry for immediate needle washout assay"
        ],
        "hardware": [
            { "category": "Aspiration Needle", "name": "23G - 25G Fine Aspiration Needle", "spec": "23G/25G x 1.0-1.5 inch needle with 5 mL syringe and 1.0 mL sterile normal saline", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Frequency Linear Neck Probe", "spec": "10 - 15 MHz linear array", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "5 mL ampoule", "standardStore": "DDC-14 Central" },
            { "category": "Assay Containers", "name": "Saline Washout Vials & Cytology Slides", "spec": "Plain/EDTA vials for Tg / Calcitonin washout and glass slides for cytology", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient supine with head turned away from target lymph node station.",
            "Scan lateral neck compartments (Levels II through VI) to identify suspicious lymph nodes.",
            "Sterilize the lateral neck under sterile precautions; raise intradermal wheal with 0.5 mL 2% Lignocaine.",
            "Introduce 23G-25G needle under direct real-time linear probe visualization into the solid cortex of the lymph node.",
            "Perform capillary fanning passes across the nodal cortex, avoiding the internal jugular vein and carotid artery.",
            "Withdraw needle; express one drop for cytological smears (Papanicolaou and Giemsa).",
            "Rinse needle barrel and hub with exactly 1.0 mL sterile saline into dedicated washout vial labeled for Thyroglobulin (or Calcitonin).",
            "Send washout for chemiluminescent immunoassay (washout Tg > serum Tg confirms metastatic thyroid cancer); apply pressure for 5 minutes."
        ],
        "complications": [
            "Neck soreness or mild skin ecchymosis (5-10%)",
            "Intranodal hematoma (1-2%)",
            "Carotid or jugular puncture (<0.5%, easily controlled with manual pressure)",
            "Vagal dizziness (1-2%)",
            "Diluted washout requiring repeat aspiration (<2%)"
        ],
        "maayTariffInr": 3500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित गर्दन लिम्फ नोड FNAC एवं थायरोग्लोबुलिन / कैल्सीटोनिन वॉशआउट",
            "indicationEn": "Detection of metastatic thyroid cancer in cervical lymph nodes via cytology and tumor marker washout.",
            "indicationHi": "थायरॉयड कैंसर के गर्दन की ग्रंथियों (लिम्फ नोड्स) में फैलने की जांच हेतु बारीक सुई द्वारा थायरोग्लोबुलिन/कैल्सीटोनिन वॉशआउट।",
            "descriptionEn": "Under high-resolution ultrasound, an ultra-fine needle is placed into a suspicious neck lymph node. Cells are collected for microscopy, and the needle is rinsed with saline to test for microscopic amounts of thyroid cancer proteins (Thyroglobulin or Calcitonin).",
            "descriptionHi": "गर्दन की संदिग्ध ग्रंथि को सोनोग्राफी से देखकर बहुत बारीक सुई द्वारा कोशिकाओं का सैंपल लिया जाता है और सुई को सलाइन से धोकर थायरॉयड कैंसर के प्रोटीन (थायरोग्लोबुलिन/कैल्सीटोनिन) की जांच की जाती है।",
            "benefitsEn": [
                "Near 100% sensitivity for detecting metastatic thyroid cancer even in cystic or tiny lymph nodes.",
                "Eliminates false-negative cytological results from cystic fluid.",
                "Directs precise surgical neck dissection, sparing disease-free compartments."
            ],
            "benefitsHi": [
                "थायरॉयड कैंसर ग्रंथि में फैला है या नहीं, इसकी लगभग 100% सटीक पुष्टि होती है।",
                "पानी वाली ग्रंथियों में भी जांच कभी फेल नहीं होती।",
                "ऑपरेशन के दौरान केवल प्रभावित हिस्से को ही निकालने में मदद मिलती है, बाकी गर्दन बच जाती है।"
            ],
            "specificRisksEn": [
                "Neck soreness and small skin bruising for 1-2 days (5-10%).",
                "Small hematoma inside the lymph node (1-2%).",
                "Minor vascular nick readily controlled with manual pressure (<0.5%).",
                "Lightheadedness or dizziness during the procedure (1-2%).",
                "Washout dilution requiring repeat test (<2%)."
            ],
            "specificRisksHi": [
                "गर्दन में 1-2 दिन हल्का दर्द या छोटा सा नील पड़ना (5-10%)।",
                "ग्रंथि के अंदर खून का हल्का थक्का जमना (1-2%)।",
                "पास की नस में हल्की सुई लगना जो 5 मिनट दबाने से ठीक हो जाती है (<0.5%)।",
                "घबराहट या हल्का चक्कर आना (1-2%)।",
                "सैंपल में अधिक खून मिलने पर दोबारा जांच की आवश्यकता (<2%)।"
            ],
            "alternativesEn": "Core needle biopsy of cervical lymph node, surgical excisional lymph node biopsy under anesthesia, or serial ultrasound surveillance.",
            "alternativesHi": "मोटी सुई से कोर बायोप्सी, ऑपरेशन करके पूरी ग्रंथि निकालना (Excisional Biopsy), या सोनोग्राफी से निगरानी।",
            "sedationTypeEn": "Local anesthesia to the skin.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
        }
    },
    {
        "id": "usg-cervical-ln-core-biopsy",
        "name": "Ultrasound-Guided Cervical Lymph Node Core Needle Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV029",
        "rghsCode": "693 / 41",
        "icd10": "C85.91 (Non-Hodgkin lymphoma of lymph nodes of head, face, and neck) / A18.2 (Tuberculous peripheral lymphadenopathy)",
        "indications": [
            "Suspected lymphoma requiring preserved tissue architecture for WHO classification and flow cytometry",
            "Metastatic squamous cell carcinoma of unknown head and neck primary (HNSCC)",
            "Repeatedly non-diagnostic or necrotic FNAC of enlarged cervical lymph nodes",
            "Differentiating tuberculous lymphadenitis from fungal, sarcoid, or malignant lymphadenopathy"
        ],
        "preOpCriteria": [
            "Coagulation profile: INR <= 1.4, Platelets >= 60,000/uL",
            "High-resolution ultrasound demonstrating lymph node size >= 10-15 mm and safe clearance from internal jugular vein and carotid artery",
            "Antiplatelet medications held appropriately",
            "Fasting 2-3 hours; patient supine with head supported"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G / 20G Spring-Loaded Core Needle", "spec": "18G/20G x 10 cm automated needle with 10-15 mm excursion, echogenic tip", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Frequency Linear Neck Probe", "spec": "10 - 15 MHz linear array with vascular preset", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "10 mL ampoule", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin Vials & Flow Cytometry RPMI", "spec": "10% formalin, RPMI transport medium, and saline for GeneXpert", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient supine with head rotated away from target neck side.",
            "Use linear ultrasound probe and Color Doppler to map the enlarged lymph node and identify carotid artery, internal jugular vein, and accessory nerve.",
            "Sterilize the lateral neck; infiltrate 5-8 mL 2% Lignocaine into skin and perinodal capsule under direct visualization.",
            "Advance 18G/20G core needle along probe axis (in-plane) into the solid cortex of the node, pointing away from the great vessels.",
            "Trigger cutting mechanism; swiftly retrieve needle and inspect core for white, fleshy lymphoid tissue.",
            "Obtain 2-3 core passes; distribute into formalin (histopathology/IHC), RPMI (flow cytometry), and saline (GeneXpert MTB).",
            "Apply firm manual pressure over the puncture site for 10 minutes.",
            "Re-scan lateral neck with Color Doppler to verify absence of hematoma or pseudoaneurysm; apply compression dressing."
        ],
        "complications": [
            "Neck pain and muscular soreness (10-15%)",
            "Cervical hematoma or bruising (2-4%)",
            "Transient accessory / facial nerve neuropraxia (<0.5%)",
            "Carotid or jugular vascular injury (<0.2%)",
            "Inadequate tissue sample (<3%)"
        ],
        "maayTariffInr": 4500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित गर्दन लिम्फ नोड कोर बायोप्सी",
            "indicationEn": "Histological subtyping of enlarged neck lymph nodes (lymphoma, tuberculosis, or metastatic cancer).",
            "indicationHi": "गर्दन की बढ़ी हुई गिल्टियों (लिम्फ नोड) में लिम्फोमा कैंसर, टीबी या मेटास्टेसिस की जांच हेतु सुई से ठोस टुकड़ा लेना।",
            "descriptionEn": "Under real-time high-resolution ultrasound guidance, an automated core needle is placed into the cortex of the enlarged neck lymph node to obtain intact tissue cores for cancer staging and flow cytometry while strictly avoiding major neck vessels.",
            "descriptionHi": "गर्दन को सुन्न करके, सोनोग्राफी में खून की मुख्य नसों (जुगुलर और कैरॉटिड) को बचाते हुए एक विशेष बायोप्सी सुई द्वारा लिम्फ नोड से ठोस टुकड़ा निकाला जाता है ताकि लिम्फोमा कैंसर या टीबी की पक्की पहचान हो सके।",
            "benefitsEn": [
                "Provides intact tissue architecture essential for WHO lymphoma subtyping and molecular profiling.",
                "Near-100% diagnostic yield for tuberculosis and metastatic head & neck cancers.",
                "Spares patients the pain, scarring, and operating theater expenses of surgical lymph node excision."
            ],
            "benefitsHi": [
                "लिम्फोमा कैंसर के सटीक प्रकार और टीबी का पक्का पता चलता है।",
                "बारीक सुई की तुलना में रिपोर्ट फेल होने का जोखिम बहुत कम रहता है।",
                "गर्दन पर बिना कोई बड़ा चीरा लगाए या बेहोश किए ओपीडी में ही पूरी जांच हो जाती है।"
            ],
            "specificRisksEn": [
                "Local neck pain and soreness for 1-2 days (10-15%).",
                "Hematoma or swelling in the neck (2-4%, usually self-limiting).",
                "Temporary numbness or shoulder weakness from nerve irritation (<0.5%).",
                "Rare vascular injury requiring extended compression (<0.2%).",
                "Inadequate tissue sample requiring surgical biopsy (<3%)."
            ],
            "specificRisksHi": [
                "गर्दन में 1-2 दिन हल्का दर्द या खिंचाव (10-15%)।",
                "गर्दन में खून का थक्का जमना या हल्की सूजन (2-4%)।",
                "कंधे या जबड़े की नस पर खिंचाव से अस्थायी कमजोरी (<0.5%)।",
                "खून की नस में चोट लगने का अत्यंत दुर्लभ खतरा (<0.2%)।",
                "सैंपल पर्याप्त न आने पर ऑपरेशन द्वारा गिल्टी निकालने की आवश्यकता (<3%)।"
            ],
            "alternativesEn": "Surgical excisional lymph node biopsy under local/general anesthesia, repeat FNAC, or empirical medical trial.",
            "alternativesHi": "ऑपरेशन करके पूरी गिल्टी बाहर निकालना (Excision Biopsy) या दोबारा बारीक सुई से जांच।",
            "sedationTypeEn": "Local anesthesia with optional mild oral conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार हल्की शामक दवा।"
        }
    },
    {
        "id": "usg-salivary-gland-fnac",
        "name": "Ultrasound-Guided Salivary Gland (Parotid / Submandibular) FNAC",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV030",
        "rghsCode": "693 / 41",
        "icd10": "D11.0 (Benign neoplasm of parotid gland) / C08.9 (Malignant neoplasm of major salivary gland)",
        "indications": [
            "Focal solid or cystic mass in parotid or submandibular salivary gland (Milan System classification)",
            "Differentiating benign pleomorphic adenoma or Warthin tumor from salivary gland carcinomas",
            "Evaluation of salivary gland involvement in lymphoma or Sjögren syndrome",
            "Sampling of intraparotid lymphadenopathy"
        ],
        "preOpCriteria": [
            "Coagulation: normal platelet count and INR",
            "High-resolution ultrasound documenting lesion depth (superficial vs deep lobe parotid) and relationship to retromandibular vein and external carotid artery",
            "Patient informed to avoid facial grimacing or chewing during needle placement",
            "Cytopathologist on-site for rapid on-site adequacy evaluation (ROSE)"
        ],
        "hardware": [
            { "category": "Aspiration Needle", "name": "23G - 25G Fine Aspiration Needle", "spec": "23G/25G x 1.0-1.5 inch needle with 10 mL syringe", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Frequency Linear Probe", "spec": "8 - 15 MHz linear transducer", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "5 mL ampoule (optional dermal wheal)", "standardStore": "DDC-14 Central" },
            { "category": "Cytology Supplies", "name": "Glass Slides & Cyto-Fixative", "spec": "95% ethanol fixative slides and air-dried slides", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient supine with head turned to contralateral side.",
            "Sonographically identify the salivary lesion; map facial nerve plane and retromandibular vessels using Color Doppler.",
            "Sterilize cheek / submandibular skin under aseptic conditions.",
            "Optional: raise 0.5 mL 2% Lignocaine subcutaneous wheal.",
            "Introduce 23G-25G needle under direct real-time in-plane sonographic guidance directly into the solid portion of the mass.",
            "Perform 4-6 gentle capillary fanning excursions within the nodule over 10 seconds.",
            "Withdraw needle, express aspirate onto glass slides, smear gently, and fix in 95% ethanol for Milan System cytological assessment.",
            "Apply manual digital pressure over salivary gland puncture site for 5 minutes."
        ],
        "complications": [
            "Local cheek / jaw pain or minor bruise (5-10%)",
            "Transient facial nerve twitching / neuropraxia (<0.2%, virtually absent with 25G needle)",
            "Intraglandular hematoma (1-2%)",
            "Salivary fistula (<0.1%)",
            "Non-diagnostic aspirate (Milan I) requiring repeat FNAC (<5-8%)"
        ],
        "maayTariffInr": 2800,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित लार ग्रंथि (पैरोटिड / सबमैंडिबुलर) FNAC",
            "indicationEn": "Cytological evaluation of parotid or submandibular salivary gland lump (pleomorphic adenoma, cancer).",
            "indicationHi": "कान के पास या जबड़े के नीचे की लार ग्रंथि (पैरोटिड/सबमैंडिबुलर) की गांठ में कैंसर या साधारण गिल्टी की जांच हेतु बारीक सुई की जांच।",
            "descriptionEn": "Under high-frequency ultrasound guidance, an ultra-thin needle is inserted into the salivary gland lump in the face or upper neck to collect microscopic cells for the Milan System of reporting without affecting the facial nerve.",
            "descriptionHi": "सोनोग्राफी से चेहरे की नस (Facial Nerve) को बचाते हुए कान या जबड़े के पास की लार ग्रंथि की गांठ में बहुत बारीक सुई डालकर कोशिकाओं का सैंपल लिया जाता है। इसमें चेहरे पर कोई निशान नहीं पड़ता।",
            "benefitsEn": [
                "Accurately differentiates benign pleomorphic adenoma and Warthin tumor from malignant salivary tumors.",
                "Protects the facial nerve from unnecessary extensive exploratory surgery.",
                "Painless day-care procedure taking only a few minutes."
            ],
            "benefitsHi": [
                "गांठ साधारण है या कैंसर, इसका शत-प्रतिशत सटीक पता चलता है।",
                "चेहरे की नस (Facial Nerve) को चोट लगने से बचाने में मदद मिलती है।",
                "बिना किसी चीरे या टांके के ओपीडी में ही 5 मिनट में जांच हो जाती है।"
            ],
            "specificRisksEn": [
                "Mild soreness or swelling over cheek/jaw (5-10%).",
                "Small bruise or hematoma inside the salivary gland (1-2%).",
                "Extremely rare temporary twitching of facial nerve (<0.2%).",
                "Extremely rare small salivary leak (<0.1%).",
                "Inadequate cell sample requiring repeat procedure (<5-8%)."
            ],
            "specificRisksHi": [
                "गाल या जबड़े में 1-2 दिन हल्का दर्द या सूजन (5-10%)।",
                "ग्रंथि के अंदर खून का छोटा थक्का (1-2%)।",
                "चेहरे की नस में अस्थायी खिंचाव का अत्यंत दुर्लभ खतरा (<0.2%)।",
                "लार का हल्का रिसाव (<0.1%)।",
                "सैंपल में कोशिकाएं कम आने पर दोबारा जांच की संभावना (<5-8%)।"
            ],
            "alternativesEn": "Core needle biopsy of salivary gland, superficial parotidectomy / surgical excision, or MRI monitoring.",
            "alternativesHi": "मोटी सुई से कोर बायोप्सी, ऑपरेशन द्वारा ग्रंथि निकालना (Parotidectomy), या एमआरआई से निगरानी।",
            "sedationTypeEn": "Local skin anesthesia or topical numbing spray.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
        }
    },
    {
        "id": "usg-salivary-gland-core-biopsy",
        "name": "Ultrasound-Guided Salivary Gland Core Needle Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV031",
        "rghsCode": "693 / 41",
        "icd10": "C08.9 (Malignant neoplasm of salivary gland) / D11.9 (Benign neoplasm of salivary gland)",
        "indications": [
            "Inconclusive or indeterminate salivary gland FNAC (Milan Category III/IV)",
            "Suspected salivary gland lymphoma, adenoid cystic carcinoma, or mucoepidermoid carcinoma",
            "Large or infiltrative salivary mass where histopathological grading and immunohistochemistry are required",
            "Recurrent salivary gland tumor prior to revision surgery"
        ],
        "preOpCriteria": [
            "Coagulation profile: INR <= 1.3, Platelets >= 80,000/uL",
            "High-resolution ultrasound with Color Doppler mapping facial nerve trajectory and retromandibular vein",
            "Patient instructed to remain completely still without swallowing or speaking during firing",
            "Fasting 2 hours; local surgical consent obtained"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G / 20G Spring-Loaded Core Needle", "spec": "18G/20G x 10 cm automated needle with 10 mm short throw, echogenic tip", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Frequency Linear Neck Probe", "spec": "10 - 15 MHz linear array", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "10 mL ampoule", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin Vials & Flow Cytometry Media", "spec": "10% formalin and RPMI medium for lymphoma analysis", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient supine with head rotated away from affected salivary gland.",
            "Perform comprehensive ultrasound assessment of parotid or submandibular mass, noting distance from retromandibular vein and external carotid artery.",
            "Select in-plane approach tangential to facial nerve plane, choosing a short-throw (10 mm) needle.",
            "Sterilize cheek / submandibular region; infiltrate 5 mL 2% Lignocaine into subcutaneous fat and glandular capsule.",
            "Introduce 18G/20G core needle under continuous real-time sonographic guidance into the periphery of the lesion.",
            "Trigger 10 mm cutting throw strictly within tumor boundary under direct acoustic vision.",
            "Obtain 1-2 core specimens; transfer to formalin for histopathology, IHC, and molecular translocation testing.",
            "Apply immediate direct manual pressure over the cheek / jaw for 10-15 minutes; scan with Doppler to confirm hemostasis."
        ],
        "complications": [
            "Cheek or jaw tenderness and swelling (10-15%)",
            "Intraglandular hematoma (2-4%)",
            "Transient facial nerve neuropraxia / weakness (<0.5%)",
            "Salivary fistula (<0.2%)",
            "Tumor spillage / seeding (<0.1%)"
        ],
        "maayTariffInr": 4500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित लार ग्रंथि कोर बायोप्सी",
            "indicationEn": "Histopathological diagnosis of indeterminate or malignant salivary gland mass (lymphoma, adenoid cystic carcinoma).",
            "indicationHi": "लार ग्रंथि की जटिल गांठ, लिम्फोमा या कैंसर की पक्की पहचान हेतु सुई द्वारा ठोस टुकड़ा लेना।",
            "descriptionEn": "Under high-frequency ultrasound guidance, an automated short-throw core biopsy needle is precisely inserted into the salivary gland mass while strictly avoiding the facial nerve branches and retromandibular blood vessels to obtain intact tissue cores.",
            "descriptionHi": "सोनोग्राफी से चेहरे की नस (Facial Nerve) और रक्तवाहिकाओं को बचाते हुए लार ग्रंथि की गांठ में एक बारीक बायोप्सी सुई डाली जाती है और ठोस टुकड़ा निकाला जाता है ताकि कैंसर का सटीक प्रकार पता चल सके।",
            "benefitsEn": [
                "Near-100% diagnostic accuracy for salivary gland tumors, preventing unnecessary total parotidectomy.",
                "Preserves tissue architecture essential for lymphoma and carcinoma immunohistochemistry.",
                "Performs real-time needle tracking to keep the facial nerve completely safe."
            ],
            "benefitsHi": [
                "लार ग्रंथि के कैंसर की लगभग शत-प्रतिशत सटीक पुष्टि होती है।",
                "चेहरे की नस को पूरी तरह सुरक्षित रखते हुए जांच की जाती है।",
                "पूरी ग्रंथि निकालने के बड़े और जोखिम भरे ऑपरेशन से बचाव होता है।"
            ],
            "specificRisksEn": [
                "Cheek or jaw pain and local swelling for 1-2 days (10-15%).",
                "Hematoma or bleeding inside the salivary gland (2-4%).",
                "Temporary facial nerve weakness (mouth droop) due to local anesthetic or nerve bruising (<0.5%, recovers fully).",
                "Small salivary leak / fistula (<0.2%).",
                "Inadequate tissue sample (<3%)."
            ],
            "specificRisksHi": [
                "गाल या जबड़े में 1-2 दिन हल्का दर्द या सूजन (10-15%)।",
                "ग्रंथि के अंदर खून का थक्का जमना (2-4%)।",
                "चेहरे की नस पर खिंचाव से मुंह का अस्थायी तिरछापन या कमजोरी (<0.5%, जो पूरी तरह ठीक हो जाती है)।",
                "लार का हल्का रिसाव (<0.2%)।",
                "सैंपल पर्याप्त न आने पर दोबारा जांच की आवश्यकता (<3%)।"
            ],
            "alternativesEn": "Surgical superficial parotidectomy / submandibular gland excision under general anesthesia, or repeat FNAC.",
            "alternativesHi": "बेहोश करके ऑपरेशन द्वारा ग्रंथि निकालना (Parotidectomy) या दोबारा बारीक सुई से जांच।",
            "sedationTypeEn": "Local anesthesia with optional mild IV sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार हल्की शामक दवा।"
        }
    }
]
