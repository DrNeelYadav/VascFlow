# -*- coding: utf-8 -*-
"""
Part 1B: Spleen, Pancreas, Thorax & Adrenal Biopsies (Procedures 10 to 20)
"""

DATA_PART1B = [
    {
        "id": "usg-native-spleen-core-biopsy",
        "name": "Ultrasound-Guided Native Spleen Core Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV010",
        "rghsCode": "693 / 41",
        "icd10": "D73.89 (Other diseases of spleen) / C85.90 (Non-Hodgkin lymphoma, unspecified)",
        "indications": [
            "Splenomegaly with unexplained focal hypoechoic lesions suspicious for lymphoma",
            "Disseminated mycobacterial or fungal infection with splenic microabscesses",
            "Diagnosis of splenic sarcoidosis or non-caseating granulomatous disease",
            "Exclusion of metastatic disease in patients with known primary malignancy"
        ],
        "preOpCriteria": [
            "Coagulation profile strictly verified: INR <= 1.3, Platelets >= 80,000/uL",
            "Blood type and screen with 2 units packed red cells available on standby",
            "Pre-procedure ultrasound establishing a safe subcostal / intercostal window below pleural reflection",
            "Fasting 4 hours; patient trained in breath-holding technique"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G / 20G Coaxial Core Biopsy System", "spec": "19G outer introducer with 20G/18G automated cutting needle (11-15 cm)", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Resolution Curved Probe", "spec": "3.5 - 5 MHz curvilinear with needle guide", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "15 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Hemostatic Agent", "name": "Gelfoam Slurry / Torpedoes", "spec": "Absorbable gelatin sponge for tract embolization", "standardStore": "Central IR Consignment Store" }
        ],
        "techniqueSteps": [
            "Position patient in right lateral decubitus position to elevate the left flank and spleen.",
            "Locate splenic focal lesion using real-time sonography, selecting a tract crossing normal splenic parenchyma without traversing the costodiaphragmatic recess.",
            "Sterilize and drape left lower lateral thoracic and abdominal wall.",
            "Infiltrate 10-15 mL 2% Lignocaine into skin, intercostal space, and splenic capsule.",
            "Introduce 19G coaxial needle under real-time guidance to the splenic capsule during suspended respiration.",
            "Advance 20G/18G core biopsy needle into target lesion and trigger cutting mechanism.",
            "Obtain 1-2 core biopsies rapidly; prepare immediate slide smears and deposit cores in formalin.",
            "Deploy gelatin sponge slurry through the coaxial cannula to seal the splenic tract and prevent hemorrhage; monitor with color Doppler for 10 minutes."
        ],
        "complications": [
            "Left upper quadrant or left shoulder tip pain (15-25%)",
            "Subcapsular splenic hematoma (2-4%)",
            "Significant hemoperitoneum requiring embolization or splenectomy (<1%)",
            "Pneumothorax from pleural recess transgression (<0.5%)",
            "Inadvertent colonic laceration (<0.1%)"
        ],
        "maayTariffInr": 6000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित तिल्ली (प्लीहा / स्प्लीन) कोर बायोप्सी",
            "indicationEn": "Histological characterization of splenic lesions, suspected lymphoma, tuberculosis, or sarcoidosis.",
            "indicationHi": "तिल्ली (स्प्लीन) की गांठ, लिम्फोमा कैंसर, टीबी या सारकॉइडोसिस की पुष्टि हेतु सुई द्वारा टुकड़ा लेना।",
            "descriptionEn": "Under real-time ultrasound guidance, a fine coaxial needle is carefully inserted between the lower left ribs into the spleen to harvest small tissue cores, followed by sealing the needle track to prevent bleeding.",
            "descriptionHi": "बाईं पसली के नीचे तिल्ली को सोनोग्राफी से देखकर, त्वचा को सुन्न करके एक महीन सुई से तिल्ली की गांठ का छोटा टुकड़ा निकाला जाता है और खून रोकने के लिए सुई के रास्ते को तुरंत सील किया जाता है।",
            "benefitsEn": [
                "Provides essential histopathological diagnosis of lymphoma or granulomatous disease.",
                "Prevents the high morbidity and risk of open diagnostic surgical splenectomy.",
                "Enables rapid initiation of targeted chemotherapy or anti-tubercular medication."
            ],
            "benefitsHi": [
                "तिल्ली के कैंसर (लिम्फोमा) या टीबी का सटीक पता चलता है जिससे सही समय पर दवा शुरू हो सके।",
                "पूरी तिल्ली निकालने के बड़े ऑपरेशन (Splenectomy) से बचाव होता है।",
                "कम समय में सटीक डायग्नोसिस मिलता है।"
            ],
            "specificRisksEn": [
                "Left side flank or shoulder pain (15-25%, usually responds to analgesics).",
                "Splenic hematoma or subcapsular bleeding (2-4%).",
                "Severe bleeding requiring blood transfusion, catheter embolization, or emergency surgery (<1%).",
                "Small pneumothorax (air leak in chest) (<0.5%).",
                "Sample fragmentation or non-diagnostic yield (<5%)."
            ],
            "specificRisksHi": [
                "बाईं तरफ पसली या कंधे में हल्का दर्द (15-25%, दवा से ठीक हो जाता है)।",
                "तिल्ली के अंदर या ऊपर खून का थक्का (हेमेटोमा) (2-4%)।",
                "गंभीर रक्तस्राव जिसके लिए खून चढ़ाने या इमरजेंसी नस बंद करने की जरूरत पड़े (<1%)।",
                "फेफड़े में हल्की हवा का रिसाव (<0.5%)।",
                "सैंपल छोटा आने पर दोबारा जांच का जोखिम (<5%)।"
            ],
            "alternativesEn": "Diagnostic laparoscopic or open splenectomy, PET-CT scan surveillance, or bone marrow examination if systemic lymphoma is suspected.",
            "alternativesHi": "ऑपरेशन द्वारा पूरी तिल्ली निकालना, पीईटी-सीटी स्कैन, या बोन मैरो (हड्डी के गूदे) की जांच।",
            "sedationTypeEn": "Local anesthesia with IV analgesia and conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक व शामक दवा।"
        }
    },
    {
        "id": "ct-splenic-lesion-biopsy",
        "name": "CT-Guided Splenic Lesion Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV011",
        "rghsCode": "693 / 42",
        "icd10": "D73.89 (Splenic disease) / C85.90 (Non-Hodgkin lymphoma)",
        "indications": [
            "Deep, small, or subdiaphragmatic splenic lesions not visible on ultrasonography",
            "High-risk lesion location adjacent to splenic flexure of colon or left pleural dome",
            "Obese patients with thick subcutaneous mantle where acoustic shadow obscures spleen",
            "Precise coaxial biopsy with immediate gelatin sponge tract embolization"
        ],
        "preOpCriteria": [
            "Coagulation testing: INR <= 1.3, Platelets >= 80,000/uL",
            "Hemoglobin >= 9.5 g/dL; blood crossmatched",
            "Fasting 4 hours; intravenous access secured",
            "Pre-procedure CT reviewed to define angle avoiding left pleura and splenic hilum"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "19G / 20G Coaxial Biopsy Set", "spec": "19G x 10-15 cm introducer with 20G automated cutting needle", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "CT Accessories", "name": "Radiopaque Skin Marking Grid", "spec": "Sterile adhesive grid", "standardStore": "CT Suite D-9211" },
            { "category": "Hemostatic Embolic", "name": "Gelfoam Embolic Slurry Kit", "spec": "Absorbable gelatin sponge with 3-way stopcock", "standardStore": "Central IR Consignment Store" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "20 mL vial", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient in right lateral oblique or prone position on the CT gantry.",
            "Acquire low-dose planning CT images through the upper abdomen; identify the splenic lesion.",
            "Select skin entry point below the costodiaphragmatic pleural reflection and clear of the colon.",
            "Infiltrate local anesthetic (10-15 mL 2% Lignocaine) along planned intercostal tract.",
            "Advance 19G coaxial needle toward target; verify needle tip position with volumetric CT check slices.",
            "Deploy 20G cutting needle into lesion; obtain 2 distinct core passes for histopathology and flow cytometry.",
            "Inject gelatin sponge pledgets through the coaxial cannula while withdrawing across the splenic parenchyma.",
            "Obtain completion CT scan to confirm lack of hemoperitoneum or pneumothorax; admit for 6 hours of observation."
        ],
        "complications": [
            "Splenic parenchymal hematoma (2-4%)",
            "Left flank / pleuritic pain (15-20%)",
            "Pneumothorax requiring observation (<1%)",
            "Delayed splenic bleeding requiring transcatheter embolization (<0.5%)",
            "Colonic perforation (<0.1%)"
        ],
        "maayTariffInr": 9000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित तिल्ली (प्लीहा / स्प्लीन) गांठ बायोप्सी",
            "indicationEn": "Accurate cross-sectional biopsy of deep or obscured splenic lesions suspicious for lymphoma or metastases.",
            "indicationHi": "तिल्ली की गहराई में स्थित गांठों से सीटी स्कैन की निगरानी में सुरक्षित टुकड़ा लेना।",
            "descriptionEn": "Guided by high-precision CT scanning, a thin coaxial biopsy needle is steered between the ribs into the splenic mass while completely avoiding the lung, colon, and main splenic blood vessels, followed by tract plugging.",
            "descriptionHi": "सीटी स्कैन की थ्री-डी निगरानी में फेफड़े और आंतों को बचाते हुए पसली के रास्ते एक सुई तिल्ली की गांठ तक पहुंचाई जाती है और जांच हेतु टुकड़ा लेकर खून रोकने के लिए सुई का रास्ता सील कर दिया जाता है।",
            "benefitsEn": [
                "Allows safe sampling of deep lesions inaccessible to ultrasound guidance.",
                "Sub-millimeter CT verification eliminates injury to adjacent pleural space or splenic colon.",
                "Provides diagnostic tissue to classify hematological malignancies without open surgery."
            ],
            "benefitsHi": [
                "गहराई में स्थित गांठों से भी सुरक्षित रूप से टुकड़ा निकाला जा सकता है।",
                "फेफड़े और बड़ी आंत को किसी भी चोट से बचाने की सबसे सटीक तकनीक।",
                "बिना पेट खोले लिम्फोमा या कैंसर की सटीक पहचान हो जाती है।"
            ],
            "specificRisksEn": [
                "Pain in left lower chest and shoulder (15-20%).",
                "Internal splenic hematoma (2-4%).",
                "Pneumothorax (air leak in chest) (<1%).",
                "Bleeding needing transarterial embolization or surgery (<0.5%).",
                "Inadequate tissue sample requiring repeat biopsy (<5%)."
            ],
            "specificRisksHi": [
                "बाईं छाती या कंधे में हल्का दर्द (15-20%)।",
                "तिल्ली के अंदर खून का थक्का जमना (2-4%)।",
                "छाती में हल्की हवा का रिसाव (न्यूमोथोरैक्स) (<1%)।",
                "रक्तस्राव जिसके लिए नस बंद करने के प्रोसीजर की जरूरत पड़े (<0.5%)।",
                "टुकड़ा अपर्याप्त आने पर दोबारा जांच का जोखिम (<5%)।"
            ],
            "alternativesEn": "Surgical splenectomy, diagnostic bone marrow biopsy, or empirical clinical monitoring with PET-CT.",
            "alternativesHi": "पूरी तिल्ली निकालने का ऑपरेशन, बोन मैरो जांच, अथवा पीईटी-सीटी से निगरानी।",
            "sedationTypeEn": "Local anesthesia with monitored IV conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और हल्की शामक दवा।"
        }
    },
    {
        "id": "usg-pancreatic-mass-core-biopsy",
        "name": "Ultrasound-Guided Pancreatic Mass Core Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV012",
        "rghsCode": "693 / 41",
        "icd10": "C25.9 (Malignant neoplasm of pancreas, unspecified) / D37.7 (Neoplasm of uncertain behavior of pancreas)",
        "indications": [
            "Large anteriorly located pancreatic body or tail mass readily visualized through epigastric acoustic window",
            "Confirmation of locally advanced or metastatic pancreatic adenocarcinoma prior to palliative chemotherapy",
            "Differentiating pancreatic neuroendocrine tumor (pNET) or lymphoma from adenocarcinoma",
            "Evaluation of autoimmune pancreatitis (IgG4-related disease) mass mimicking malignancy"
        ],
        "preOpCriteria": [
            "Coagulation profile: INR <= 1.4, Platelets >= 60,000/uL",
            "Fasting for at least 6 hours to minimize gastric and duodenal distension",
            "Triple-phase abdominal CT reviewed to identify relationship with celiac axis, SMA, and portal vein",
            "Clear acoustic trajectory confirmed on pre-procedure sonography without traversing colon"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G / 20G Coaxial Core Biopsy System", "spec": "19G x 15 cm introducer with 20G/18G automated cutting needle", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "Curvilinear Abdominal Probe with Guide", "spec": "3.5 - 5.0 MHz with multi-angle biopsy bracket", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "20 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin Vials & Saline", "spec": "10% neutral buffered formalin with cytology slides for touch prep", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient supine; apply gentle transducer compression in the epigastrium to displace overlying bowel gas and stomach.",
            "Use Color Doppler to map the superior mesenteric artery, portal vein, and splenic vein relative to the pancreatic tumor.",
            "Sterilize the epigastrium and infiltrate 15 mL 2% Lignocaine through skin, linea alba, and down to retroperitoneal anterior pararenal space.",
            "Introduce 19G coaxial needle under real-time acoustic control, traversing left hepatic lobe or collapsed stomach wall if unavoidable.",
            "Position needle tip within the viable peripheral rim of the pancreatic mass, strictly avoiding the pancreatic duct and mesenteric vessels.",
            "Pass 20G or 18G cutting needle through cannula and obtain 2-3 tissue cores during suspended respiration.",
            "Examine cores for firm white tumor tissue; deposit into formalin and prepare touch prep for immediate cytopathologist review.",
            "Withdraw needle, compress epigastrium for 5 minutes, and verify absence of retroperitoneal or intraperitoneal hemorrhage."
        ],
        "complications": [
            "Post-biopsy acute pancreatitis (1-3%, usually mild)",
            "Epigastric or back pain (10-20%)",
            "Retroperitoneal hematoma or intra-abdominal bleeding (<1%)",
            "Tumor tract seeding (<0.05%)",
            "Inadvertent vascular laceration (SMA/SMV) (<0.2%)"
        ],
        "maayTariffInr": 5500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित अग्न्याशय गांठ (पैंक्रियाटिक मास) कोर बायोप्सी",
            "indicationEn": "Histological confirmation of pancreatic tumor to direct systemic chemotherapy or surgery.",
            "indicationHi": "अग्न्याशय (पैंक्रियाज) की गांठ में कैंसर की पुष्टि और कीमोथेरेपी अथवा ऑपरेशन तय करने हेतु सुई से टुकड़ा लेना।",
            "descriptionEn": "Under real-time ultrasound monitoring, a fine biopsy needle is guided through the upper abdomen into the pancreatic tumor while avoiding major surrounding blood vessels, obtaining tissue cores for cancer pathology.",
            "descriptionHi": "पेट के ऊपरी हिस्से को सुन्न करके, सोनोग्राफी से देखते हुए बड़ी नसों को बचाकर एक बारीक सुई अग्न्याशय की गांठ में पहुंचाई जाती है और कैंसर की पुष्टि हेतु टुकड़ा निकाला जाता है।",
            "benefitsEn": [
                "Definitively confirms adenocarcinoma, neuroendocrine tumor, or lymphoma to select optimal chemotherapy.",
                "Spares patients with inoperable cancer from unnecessary exploratory surgical laparotomy.",
                "Allows evaluation of molecular markers for targeted oncology drugs."
            ],
            "benefitsHi": [
                "कैंसर के प्रकार की सटीक पुष्टि होती है जिससे सही कीमोथेरेपी तुरंत शुरू की जा सकती है।",
                "बिना पेट खोले ही पूरी जांच हो जाती है, बड़े ऑपरेशन की जरूरत नहीं पड़ती।",
                "आधुनिक टारगेटेड दवाओं के लिए आवश्यक मार्कर जांच संभव होती है।"
            ],
            "specificRisksEn": [
                "Mild acute pancreatitis (inflammation of pancreas with abdominal pain) (1-3%).",
                "Epigastric or back pain for 1-2 days (10-20%).",
                "Retroperitoneal hematoma or bleeding (<1%).",
                "Very rare injury to adjacent blood vessels (<0.2%).",
                "Sample containing only fibrotic tissue requiring repeat test (<5%)."
            ],
            "specificRisksHi": [
                "पैंक्रियाज में अस्थायी सूजन (पैंक्रियाटाइटिस) और पेट दर्द (1-3%, दवा से ठीक हो जाता है)।",
                "पेट के ऊपरी हिस्से या पीठ में हल्का दर्द (10-20%)।",
                "पेट के अंदर खून का थक्का जमना (<1%)।",
                "पास की खून की नसों में चोट लगने का अत्यंत दुर्लभ खतरा (<0.2%)।",
                "सैंपल में पर्याप्त ट्यूमर न आने पर दोबारा जांच की संभावना (<5%)।"
            ],
            "alternativesEn": "Endoscopic ultrasound-guided biopsy (EUS-FNB), CT-guided biopsy, or surgical exploratory laparotomy with intraoperative biopsy.",
            "alternativesHi": "एंडोस्कोपिक अल्ट्रासाउंड बायोप्सी (EUS-FNB), सीटी-निर्देशित बायोप्सी, या ऑपरेशन करके टुकड़ा लेना।",
            "sedationTypeEn": "Local anesthesia with IV analgesia and conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक व शामक दवा।"
        }
    },
    {
        "id": "ct-pancreatic-mass-biopsy",
        "name": "CT-Guided Pancreatic Head / Body / Tail Mass Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV013",
        "rghsCode": "693 / 42",
        "icd10": "C25.0 (Malignant neoplasm of head of pancreas) / C25.1 (Malignant neoplasm of body of pancreas)",
        "indications": [
            "Deeply situated pancreatic head, uncinate process, body, or tail mass obscured by bowel gas on USG",
            "Inconclusive endoscopic ultrasound (EUS) biopsy or altered surgical upper GI anatomy (e.g. Roux-en-Y)",
            "Confirmation of locally advanced unresectable pancreatic cancer prior to systemic chemotherapy or radiotherapy",
            "Evaluation of retroperitoneal recurrence following pancreaticoduodenectomy (Whipple procedure)"
        ],
        "preOpCriteria": [
            "Coagulation testing: INR <= 1.4, Platelets >= 60,000/uL",
            "Contrast-enhanced CT / MRI reviewed to establish safe anterior transgastric, transhepatic, or posterior retroperitoneal path",
            "Fasting for 6 hours; peripheral IV line functional",
            "Renal function documented if IV contrast is required for CT-fluoroscopy guidance"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G / 20G Coaxial Biopsy Needle System", "spec": "17G/19G x 15-20 cm coaxial cannula with 18G/20G semi-automated core needle", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "CT Accessories", "name": "Radiopaque Skin Grid & Laser Pointer", "spec": "Sterile skin localization grid", "standardStore": "CT Suite D-9211" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "20 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin Vials & Touch Prep Slides", "spec": "10% formalin and glass slides for rapid on-site cytopathology review", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient supine, prone, or decubitus depending on selected trajectory (anterior transgastric vs posterior retroperitoneal).",
            "Acquire low-dose planning CT through the pancreas; apply radiopaque grid to skin.",
            "Calculate entry site, angle, and depth; ensure path avoids colon, aorta, IVC, and mesenteric root vessels.",
            "Prep and drape skin; infiltrate 15-20 mL 2% Lignocaine into skin, deep musculature, and retroperitoneum.",
            "Advance coaxial introducer needle incrementally with intermittent CT check scans to confirm position in tumor margin.",
            "Pass 18G or 20G automated cutting needle through cannula and obtain 2-3 core biopsies during breath-hold.",
            "Inspect cores visually for viable tumor; perform touch imprint smears for rapid evaluation.",
            "Remove needle and perform completion CT to exclude retroperitoneal hemorrhage or significant hematoma; apply pressure dressing."
        ],
        "complications": [
            "Post-biopsy acute pancreatitis (1-3%)",
            "Back and abdominal discomfort (15-20%)",
            "Retroperitoneal hematoma (<1%)",
            "Transient fever or bacteremia (<1%)",
            "Major vascular injury requiring intervention (<0.2%)"
        ],
        "maayTariffInr": 9500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित अग्न्याशय (सिर / धड़ / पूंछ) गांठ कोर बायोप्सी",
            "indicationEn": "Precision image-guided biopsy of deeply seated pancreatic tumor for oncology treatment planning.",
            "indicationHi": "अग्न्याशय (पैंक्रियाज) के सिर, शरीर या पूंछ की गहरी गांठ से सीटी स्कैन द्वारा सुरक्षित टुकड़ा लेना।",
            "descriptionEn": "Utilizing high-resolution CT guidance, a coaxial biopsy needle is precisely navigated through the abdomen or back into the deep pancreatic mass while avoiding major arteries and veins, obtaining tissue for cancer classification.",
            "descriptionHi": "सीटी स्कैन की थ्री-डी छवियों की सहायता से पेट या पीठ के रास्ते एक बारीक सुई बड़ी नसों और आंतों को बचाते हुए अग्न्याशय की गांठ तक पहुंचाई जाती है और कैंसर की जांच के लिए टुकड़ा निकाला जाता है।",
            "benefitsEn": [
                "Enables safe biopsy of deep pancreatic head/body masses that cannot be visualized on ultrasound.",
                "Sub-millimeter CT guidance minimizes risk of damaging the aorta, portal vein, or superior mesenteric vessels.",
                "Provides essential histology to initiate life-prolonging chemotherapy or radiotherapy."
            ],
            "benefitsHi": [
                "अल्ट्रासाउंड पर न दिखने वाली गहरी गांठों की भी सुरक्षित जांच संभव होती है।",
                "सीटी स्कैन से शरीर की मुख्य नसों (Aorta, Portal Vein) को नुकसान से बचाया जा सकता है।",
                "कीमोथेरेपी और कैंसर का सटीक इलाज शुरू करने के लिए प्रामाणिक रिपोर्ट मिलती है।"
            ],
            "specificRisksEn": [
                "Mild acute pancreatitis (1-3%, usually resolves with conservative care).",
                "Abdominal or back pain for 24-48 hours (15-20%).",
                "Retroperitoneal hematoma or internal bleeding (<1%).",
                "Rare major vascular laceration (<0.2%).",
                "Inconclusive biopsy due to dense desmoplastic stroma (<5%)."
            ],
            "specificRisksHi": [
                "पैंक्रियाज में हल्की सूजन (Pancreatitis) और पेट दर्द (1-3%)।",
                "पेट या पीठ में 1-2 दिन दर्द (15-20%)।",
                "पेट के पिछले हिस्से में खून का थक्का जमना (<1%)।",
                "बड़ी नस में चोट लगने का अत्यंत दुर्लभ खतरा (<0.2%)।",
                "गांठ में केवल कड़ा रेशा (Stroma) आने पर दोबारा जांच की आवश्यकता (<5%)।",
            ],
            "alternativesEn": "Endoscopic ultrasound biopsy (EUS-FNB), diagnostic surgical laparoscopy/laparotomy, or empirical systemic therapy.",
            "alternativesHi": "दूरबीन द्वारा एंडोस्कोपिक बायोप्सी (EUS), ऑपरेशन करके टुकड़ा लेना, या केवल अंदाजे से दवा देना।",
            "sedationTypeEn": "Local anesthesia with monitored IV conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
        }
    },
    {
        "id": "eus-fna-fnb-pancreas",
        "name": "Endoscopic Ultrasound-Guided Fine Needle Aspiration / Biopsy (EUS-FNA/FNB) of Pancreas",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV014",
        "rghsCode": "693 / 43",
        "icd10": "C25.9 (Pancreatic neoplasm) / D13.6 (Benign neoplasm of pancreas)",
        "indications": [
            "Solid or cystic pancreatic head, uncinate, body, or tail mass requiring histological sampling",
            "Suspected pancreatic neuroendocrine tumor (pNET), solid pseudopapillary neoplasm, or cystic mucinous neoplasm",
            "Staging and sampling of regional peripancreatic and celiac lymph nodes",
            "High-risk surgical candidate where percutaneous transabdominal approach is hindered by intervening colon or vessels"
        ],
        "preOpCriteria": [
            "Coagulation screen: INR <= 1.5, Platelets >= 50,000/uL",
            "Fasting 6-8 hours; pre-anesthesia clearance for deep conscious sedation or general anesthesia",
            "CT or MRI demonstrating lesion accessible via transgastric or transduodenal acoustic window",
            "Prophylactic antibiotic administration if cystic component is present"
        ],
        "hardware": [
            { "category": "Endosonoscope", "name": "Linear Echoendoscope System", "spec": "Curved linear array echoendoscope with 3.7 mm working channel", "standardStore": "Endoscopy Suite Store" },
            { "category": "Biopsy Needle", "name": "22G / 25G EUS Core Biopsy Needle (Franseen / Fork-Tip)", "spec": "Acquire / SharkCore / EchoTip ProCore needle (22G/25G)", "standardStore": "Endoscopy Suite Consignment Store" },
            { "category": "Aspiration System", "name": "VacuStent / Syringe with Stopcock", "spec": "20 mL locking negative pressure aspiration syringe", "standardStore": "Endoscopy Consumables Store" },
            { "category": "Cytology Supplies", "name": "ROSE Cyto-Fixative & Cell Block Vials", "spec": "95% ethanol slides, air-dried slides, and formalin for cell block", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Administer IV sedation/analgesia; introduce linear echoendoscope through mouth into stomach and duodenum.",
            "Sonographically survey the pancreatic parenchyma, duct, surrounding vessels, and lymph node stations.",
            "Locate the target mass and establish a clean transmural acoustic window through gastric or duodenal wall, verifying lack of interposed vessels with Color Doppler.",
            "Advance 22G/25G Franseen or fork-tip needle through the endoscope channel into the mass under continuous real-time EUS vision.",
            "Remove stylet; apply negative suction or slow-pull capillary technique while making 3-4 gentle fanning passes through the lesion.",
            "Retract needle inside the sheath, withdraw from endoscope, and express core into formalin / prepare smears for Rapid On-Site Evaluation (ROSE).",
            "Repeat for 2-3 passes until ROSE confirms diagnostic malignant or representative cells.",
            "Examine the puncture site in the stomach/duodenum for bleeding or perforation; gently withdraw endoscope."
        ],
        "complications": [
            "Post-EUS acute pancreatitis (1-2%)",
            "Infection / cystic collection seeding (<1%)",
            "Intraluminal gastric/duodenal bleeding (<1%)",
            "Sore throat, nausea, and abdominal cramping (5-10%)",
            "Transmural perforation (<0.2%)"
        ],
        "maayTariffInr": 12000,
        "vendorContacts": [
            "Boston Scientific India (+91 98293 45678)",
            "Olympus Medical Systems India (+91 98299 01234)"
        ],
        "consent": {
            "nameHi": "एंडोस्कोपिक अल्ट्रासाउंड-निर्देशित फाइन नीडल एस्पिरेशन / बायोप्सी (EUS-FNA/FNB) अग्न्याशय",
            "indicationEn": "Minimally invasive internal endoscopic ultrasound biopsy of pancreatic tumors and cysts.",
            "indicationHi": "मुंह के रास्ते दूरबीन (एंडोस्कोप) डालकर पेट के अंदर से ही अग्न्याशय की गांठ का टुकड़ा लेना।",
            "descriptionEn": "Under sedation, an endoscope equipped with an ultrasound probe at its tip is passed through the mouth into the stomach. Through the stomach wall, a tiny flexible needle is guided directly into the adjacent pancreas to take small tissue cores without any skin cuts.",
            "descriptionHi": "मरीज को हल्की बेहोशी/शामक दवा देकर मुंह के रास्ते दूरबीन पेट में डाली जाती है। पेट के अंदर से ही अल्ट्रासाउंड की मदद से अग्न्याशय की गांठ में बारीक सुई डालकर टुकड़ा निकाला जाता है। बाहर त्वचा पर कोई चीरा नहीं लगता।",
            "benefitsEn": [
                "Highest diagnostic accuracy for pancreatic tumors without traversing the outer abdominal wall.",
                "Near-zero risk of peritoneal tumor seeding or major external bleeding.",
                "Simultaneous evaluation of regional lymph nodes and rapid on-site diagnosis (ROSE)."
            ],
            "benefitsHi": [
                "बाहर पेट पर कोई निशान या चीरा नहीं लगता और सटीकता सबसे अधिक होती है।",
                "ट्यूमर के पेट में फैलने का जोखिम नगण्य रहता है।",
                "जांच के दौरान ही आसपास की ग्रंथियों (लिम्फ नोड्स) की भी जांच हो जाती है।"
            ],
            "specificRisksEn": [
                "Mild acute pancreatitis (1-2%).",
                "Throat irritation, temporary bloating, or mild abdominal pain (5-10%).",
                "Bleeding from the stomach or duodenal puncture site (<1%).",
                "Infection if a cystic lesion is biopsied (<1%).",
                "Extremely rare perforation of stomach or duodenum (<0.2%)."
            ],
            "specificRisksHi": [
                "पैंक्रियाज में सूजन (पैंक्रियाटाइटिस) का हल्का खतरा (1-2%)।",
                "गले में खराश, पेट में भारीपन या हल्का दर्द (5-10%)।",
                "पेट के अंदर पंक्चर स्थल से हल्का खून रिसाव (<1%)।",
                "गांठ में सिस्ट (पानी) होने पर संक्रमण का हल्का जोखिम (<1%)।",
                "आमाशय या आंत में छेद होने का अत्यंत दुर्लभ खतरा (<0.2%)।"
            ],
            "alternativesEn": "Percutaneous CT-guided pancreatic biopsy, percutaneous ultrasound biopsy, or diagnostic surgical resection/laparotomy.",
            "alternativesHi": "बाहर से सीटी स्कैन या अल्ट्रासाउंड द्वारा बायोप्सी, अथवा पेट का बड़ा ऑपरेशन।",
            "sedationTypeEn": "Intravenous conscious sedation or monitored anesthesia care (MAC).",
            "sedationTypeHi": "नस द्वारा बेहोशी/शामक दवा (Conscious Sedation / MAC)।"
        }
    },
    {
        "id": "ct-lung-core-biopsy-coaxial",
        "name": "CT-Guided Percutaneous Lung Core Needle Biopsy (Coaxial Technique)",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV015",
        "rghsCode": "693 / 42",
        "icd10": "C34.90 (Malignant neoplasm of unspecified part of bronchus or lung) / R91.8 (Other abnormal findings on diagnostic imaging of lung)",
        "indications": [
            "Solitary pulmonary nodule (SPN > 8 mm) or lung mass highly suspicious for primary lung carcinoma",
            "Peripheral lung lesion inaccessible to conventional fiberoptic bronchoscopy",
            "Tissue requirement for molecular testing (EGFR, ALK, ROS1, PD-L1) and next-generation sequencing",
            "Suspected lung metastasis in a patient with an extrapulmonary primary cancer"
        ],
        "preOpCriteria": [
            "Coagulation status: INR <= 1.4, Platelets >= 50,000/uL",
            "Platelet antiaggregants / anticoagulants held appropriately (Aspirin/Clopidogrel 5-7 days)",
            "Chest CT reviewed to choose shortest aerated lung parenchymal path avoiding bullae and pulmonary vessels",
            "Patient capable of following breath-hold instructions; oxygen saturation >= 92% on room air"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "19G / 20G Coaxial Lung Biopsy System", "spec": "19G introducer needle with 20G automated spring-loaded cutting needle (10-15 cm)", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "CT Localization", "name": "Radio-opaque Skin Grid & Laser Alignment", "spec": "CT skin localization grid with fiducial markers", "standardStore": "CT Suite D-9211" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "15 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Emergency Equipment", "name": "8F - 10F Emergency Chest Drain Kit & Heimlich Valve", "spec": "Pigtail chest tube set with trocar for pneumothorax", "standardStore": "CT Suite Emergency Cabinet" }
        ],
        "techniqueSteps": [
            "Position patient prone, supine, or lateral decubitus depending on nodule location (lesion down or dependent position preferred).",
            "Perform helical low-dose planning CT across the region of interest; place radiopaque grid on chest wall.",
            "Select skin entry site to ensure perpendicular pleural crossing and minimize aerated lung transit distance (<2-3 cm).",
            "Scrub, drape, and administer 10-15 mL 2% Lignocaine from skin down to the parietal pleura.",
            "Introduce 19G coaxial needle through chest wall; advance through pleura in a single swift motion during breath-hold.",
            "Verify needle tip inside or abutting the lung nodule on confirmation CT slices.",
            "Pass 20G cutting needle through coaxial cannula into the nodule; fire mechanism to harvest 2-3 core tissue samples.",
            "Optionally instill saline or blood patch along parenchymal tract during cannula withdrawal; obtain immediate post-biopsy expiratory CT to evaluate for pneumothorax or pulmonary hemorrhage; place patient biopsy-side down for 2 hours."
        ],
        "complications": [
            "Pneumothorax (15-25%, with 3-5% requiring chest tube / pigtail catheter placement)",
            "Hemoptysis / alveolar hemorrhage (5-10%, usually self-limiting streak hemoptysis)",
            "Pleuritic chest pain (10-15%)",
            "Air embolism (<0.02%, rare but catastrophic; avoid coughing with open cannula)",
            "Hemothorax requiring tube thoracostomy (<0.5%)"
        ],
        "maayTariffInr": 8500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Merit Medical Systems (+91 98294 56789)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित फेफड़ा कोर नीडल बायोप्सी (कोएक्सियल तकनीक)",
            "indicationEn": "Histopathological diagnosis and genetic/molecular profiling of lung nodule or lung mass.",
            "indicationHi": "फेफड़े की गांठ या कैंसर की पुष्टि और आधुनिक जेनेटिक/टारगेटेड जांच हेतु सीटी स्कैन की निगरानी में टुकड़ा लेना।",
            "descriptionEn": "Under low-dose CT guidance, a coaxial biopsy needle is precisely inserted through the chest wall into the lung nodule during breath-holding to obtain small tissue cores for cancer staging and mutation testing.",
            "descriptionHi": "सीटी स्कैन मशीन में देखकर, छाती की त्वचा को सुन्न करके सांस रोकते हुए एक बारीक सुई फेफड़े की गांठ तक पहुंचाई जाती है और जांच के लिए छोटा सा टुकड़ा निकाला जाता है।",
            "benefitsEn": [
                "Highest accuracy (>95%) for diagnosing lung cancer in peripheral nodules unreachable by bronchoscopy.",
                "Provides sufficient tissue cores for EGFR, ALK, PD-L1 mutation analysis to select targeted immunotherapy.",
                "Minimally invasive alternative to surgical wedge resection or thoracotomy."
            ],
            "benefitsHi": [
                "फेफड़े के कैंसर की 95% से अधिक सटीकता से पुष्टि होती है।",
                "आधुनिक इम्यूनोथेरेपी और टारगेटेड दवाइयां तय करने के लिए जेनेटिक जांच हेतु पर्याप्त टिशू मिलता है।",
                "बिना छाती का बड़ा ऑपरेशन किए केवल सुई से जांच पूरी हो जाती है।"
            ],
            "specificRisksEn": [
                "Pneumothorax (air leaking into the chest cavity causing lung collapse) (15-25%, with 3-5% needing a temporary chest drainage tube).",
                "Hemoptysis (coughing up streaks of blood) for 24 hours (5-10%, usually settles on its own).",
                "Chest wall pain at the puncture site (10-15%).",
                "Hemothorax (blood in chest cavity) requiring drainage (<0.5%).",
                "Extremely rare air bubble entering blood vessel (air embolism) (<0.02%)."
            ],
            "specificRisksHi": [
                "न्यूमोथोरैक्स (फेफड़े से हवा का रिसाव होना) (15-25% मरीजों में, जिनमें से 3-5% में छाती में अस्थायी नली डालने की जरूरत पड़ सकती है)।",
                "खांसी में खून की छींटें आना (5-10%, सामान्यतः आराम करने से स्वतः बंद हो जाता है)।",
                "छाती में सुई लगने वाली जगह पर हल्का दर्द (10-15%)।",
                "छाती में खून इकट्ठा होना (<0.5%)।",
                "खून की नस में हवा का बुलबुला जाने का अत्यंत दुर्लभ जोखिम (<0.02%)।"
            ],
            "alternativesEn": "Bronchoscopy with transbronchial lung biopsy / radial EBUS, surgical thoracoscopic (VATS) wedge biopsy, or PET-CT imaging surveillance.",
            "alternativesHi": "दूरबीन द्वारा सांस की नली से बायोप्सी (Bronchoscopy), छाती का दूरबीन वाला ऑपरेशन (VATS), अथवा केवल पीईटी-सीटी से निगरानी।",
            "sedationTypeEn": "Local anesthesia with optional mild IV sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार हल्की शामक दवा।"
        }
    },
    {
        "id": "ct-lung-fnac",
        "name": "CT-Guided Percutaneous Lung Fine Needle Aspiration (FNAC)",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV016",
        "rghsCode": "693 / 42",
        "icd10": "R91.1 (Solitary pulmonary nodule) / C34.90 (Lung neoplasm)",
        "indications": [
            "Small sub-centimeter pulmonary nodules (<10 mm) where core cutting needle carries excessive risk",
            "Cavitary or necrotic lung lesions with high risk of hemoptysis from cutting needle",
            "Rapid cytological confirmation of small-cell lung carcinoma or recurrent known malignancy",
            "Microbiological cytology and fungal / AFB stain in suspected pulmonary tuberculosis or aspergilloma"
        ],
        "preOpCriteria": [
            "Coagulation profile: INR <= 1.5, Platelets >= 50,000/uL",
            "Fasting 3-4 hours; baseline vital signs and respiratory rate recorded",
            "Chest CT reviewed to determine trajectory through least amount of aerated lung parenchyma",
            "Cytopathologist on-site for immediate adequacy assessment (ROSE)"
        ],
        "hardware": [
            { "category": "Aspiration Needle", "name": "22G Chiba / Spinal Aspiration Needle", "spec": "22G x 9-15 cm needle with clear hub and stylet", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "Aspiration Syringe", "name": "10 mL / 20 mL Aspiration Syringe with Pistol Grip", "spec": "Syringe holder for continuous negative pressure suction", "standardStore": "CT Suite D-9211" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "10 mL ampoule", "standardStore": "DDC-14 Central" },
            { "category": "Cytology Supplies", "name": "Glass Slides & Fixative Spray", "spec": "Air-dried and 95% ethanol fixative slides with Giemsa / Papanicolaou stains", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient comfortably on CT table (prone, supine, or lateral) based on nodule location.",
            "Acquire localized planning CT slices; mark skin entry site using gantry laser lights.",
            "Sterilize and drape chest wall; infiltrate 2% Lignocaine from skin down to pleura.",
            "Advance 22G Chiba needle across pleura directly into target nodule during held respiration.",
            "Perform CT check slice verifying needle tip position within the lesion.",
            "Attach 10 mL syringe, apply gentle negative pressure, and move needle back and forth 3-4 times within the nodule.",
            "Release suction before exiting lesion; withdraw needle and immediately spray aspirate onto glass slides.",
            "Perform immediate on-site cytological review (ROSE); obtain post-procedure CT scan to exclude pneumothorax."
        ],
        "complications": [
            "Pneumothorax (10-18%, ~2-3% needing chest drain)",
            "Mild hemoptysis / blood-tinged sputum (5-8%)",
            "Chest wall soreness (5-10%)",
            "Vasovagal episode (2-4%)",
            "Non-diagnostic aspirate requiring repeat or core biopsy (<10%)"
        ],
        "maayTariffInr": 6500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित फेफड़ा फाइन नीडल एस्पिरेशन (FNAC - बारीक सुई से कोशिका जांच)",
            "indicationEn": "Cytological confirmation of lung nodule or infectious infiltrate using ultra-fine needle aspiration.",
            "indicationHi": "फेफड़े की छोटी गांठ या टीबी/इन्फेक्शन की जांच हेतु सीटी स्कैन द्वारा अत्यंत बारीक सुई से कोशिकाओं की जांच (FNAC)।",
            "descriptionEn": "Under low-dose CT scanning, an ultra-thin needle is precisely inserted into the lung nodule during breath-holding to aspirate microscopic cells for rapid cytological testing.",
            "descriptionHi": "सीटी स्कैन की निगरानी में छाती को सुन्न करके एक बहुत बारीक सुई फेफड़े की गांठ में डाली जाती है और कोशिकाओं का सैंपल लेकर कैंसर या टीबी की तुरंत जांच की जाती है।",
            "benefitsEn": [
                "Significantly lower risk of bleeding compared to thick cutting needles.",
                "Ideal for very small nodules (<1 cm) or delicate cavitary lesions.",
                "Rapid on-site cytopathology review provides preliminary results within minutes."
            ],
            "benefitsHi": [
                "मोटी सुई की तुलना में खून बहने का खतरा काफी कम रहता है।",
                "1 सेमी से छोटी या खोखली गांठों के लिए सबसे सुरक्षित तकनीक।",
                "कुछ ही मिनटों में प्रारंभिक जांच रिपोर्ट मिल जाती है।"
            ],
            "specificRisksEn": [
                "Pneumothorax (air leak in lung) (10-18%, ~2-3% requiring tube placement).",
                "Mild blood in cough (5-8%, clears quickly).",
                "Chest wall discomfort (5-10%).",
                "Sample inadequate for complete genetic mutation testing (<10%).",
                "Vasovagal dizziness during needle insertion (2-4%)."
            ],
            "specificRisksHi": [
                "फेफड़े से हवा का रिसाव (न्यूमोथोरैक्स) (10-18%, 2-3% में नली डालने की जरूरत)।",
                "खांसी में हल्का खून आना (5-8%, जल्दी ठीक हो जाता है)।",
                "छाती में सुई लगने की जगह पर हल्का दर्द (5-10%)।",
                "विस्तृत जेनेटिक जांच के लिए सैंपल कम पड़ने का जोखिम (<10%)।",
                "चक्कर आना या घबराहट (2-4%)।"
            ],
            "alternativesEn": "CT-guided core cutting biopsy, bronchoscopic biopsy, sputum cytology, or serial CT surveillance.",
            "alternativesHi": "मोटी सुई से कोर बायोप्सी, दूरबीन जांच (Bronchoscopy), या सीटी स्कैन से निगरानी।",
            "sedationTypeEn": "Local anesthesia with optional mild oral/IV conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार हल्की शामक दवा।"
        }
    },
    {
        "id": "usg-subpleural-lung-biopsy",
        "name": "Ultrasound-Guided Peripheral Subpleural Lung Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV017",
        "rghsCode": "693 / 41",
        "icd10": "C34.90 (Lung neoplasm) / J98.4 (Other disorders of lung)",
        "indications": [
            "Peripheral subpleural lung consolidation or mass directly abutting the parietal pleura",
            "Subpleural lesion with absent intervening aerated lung, creating a clear acoustic window",
            "Patients with severe respiratory distress, emphysema, or inability to hold breath under CT",
            "Bedside biopsy in ICU / HDU settings for critically ill ventilated patients"
        ],
        "preOpCriteria": [
            "Coagulation parameters: INR <= 1.4, Platelets >= 50,000/uL",
            "Bedside ultrasound confirming lesion abuts the chest wall with loss of normal lung sliding and absence of aerated lung artifact",
            "Fasting for 3 hours (unless urgent ICU bedside)",
            "Color Doppler mapping to identify and avoid intercostal neurovascular bundles"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G Automated Core Biopsy Needle", "spec": "18G x 10-15 cm automated cutting needle with 15-20 mm throw", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "Linear / Curvilinear Ultrasound Probe", "spec": "High-frequency 7-12 MHz linear probe for pleural wall, 3.5-5 MHz for mass", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "15 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin Vials & Microbiology Vials", "spec": "10% formalin plus sterile saline container for culture", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient seated leaning forward or lateral decubitus with target side up.",
            "Perform sonographic assessment to identify the pleural abutment, internal vascularity, and respiratory movement of the subpleural consolidation.",
            "Select intercostal space along superior border of lower rib to avoid intercostal vessels.",
            "Sterilize and drape chest wall; infiltrate 10 mL 2% Lignocaine into skin, intercostal muscles, and parietal pleura.",
            "Advance 18G automated needle under real-time acoustic visualization through pleura directly into solid mass.",
            "Trigger cutting mechanism under direct vision, ensuring needle throw stays entirely within solid consolidation and does not enter aerated lung.",
            "Obtain 2-3 cores; deposit into formalin for histopathology and saline for mycobacterial/fungal PCR.",
            "Scan pleura immediately with ultrasound: presence of 'lung sliding' or 'comet-tail' artifacts excludes pneumothorax; apply dressing."
        ],
        "complications": [
            "Pneumothorax (<3-5%, dramatically lower than CT due to absent aerated lung transit)",
            "Hemoptysis (<3%)",
            "Chest wall pain at puncture site (10-15%)",
            "Pleural fluid leak / reactive effusion (2-3%)",
            "Intercostal artery laceration (<0.2%)"
        ],
        "maayTariffInr": 5500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित सबप्लूरल फेफड़ा गांठ कोर बायोप्सी",
            "indicationEn": "Real-time ultrasound-guided biopsy of peripheral lung mass touching the chest wall.",
            "indicationHi": "छाती की दीवार से सटी फेफड़े की बाहरी गांठ से सोनोग्राफी द्वारा सीधा टुकड़ा लेना।",
            "descriptionEn": "Under direct real-time ultrasound guidance, a biopsy needle is placed between the ribs into a peripheral lung lesion abutting the chest wall, avoiding normal aerated lung and greatly reducing pneumothorax risk.",
            "descriptionHi": "सोनोग्राफी की सीधी निगरानी में छाती को सुन्न करके पसली के ऊपर से सुई सीधे फेफड़े की गांठ में डाली जाती है। क्योंकि गांठ छाती की दीवार से चिपकी होती है, इसलिए फेफड़े से हवा लीक होने का खतरा बहुत कम रहता है।",
            "benefitsEn": [
                "Significantly lower pneumothorax risk (<3-5%) compared to CT-guided lung biopsy.",
                "Real-time continuous needle tracking provides maximum safety.",
                "Can be performed comfortably at bedside even in patients with respiratory distress."
            ],
            "benefitsHi": [
                "सीटी स्कैन बायोप्सी की तुलना में फेफड़े में हवा लीक होने का जोखिम न के बराबर।",
                "सुई की हर हलचल स्क्रीन पर लाइव दिखती है जिससे सुरक्षा अधिकतम रहती है।",
                "सांस फूलने वाले या गंभीर मरीजों में भी बेड पर ही आसानी से हो जाती है।"
            ],
            "specificRisksEn": [
                "Pneumothorax (air leak) in <3-5% (very rare requirement for chest tube).",
                "Mild blood-streaked sputum (2-3%).",
                "Localized chest wall soreness (10-15%).",
                "Sample containing only collapsed lung tissue (<5%).",
                "Pleural fluid accumulation (<2%)."
            ],
            "specificRisksHi": [
                "फेफड़े में हल्की हवा का रिसाव (न्यूमोथोरैक्स) (<3-5%)।",
                "खांसी में खून का हल्का अंश आना (2-3%)।",
                "छाती में सुई लगने की जगह पर हल्का दर्द (10-15%)।",
                "सैंपल में ट्यूमर की जगह साधारण सिकुड़ा हुआ फेफड़ा आने का जोखिम (<5%)।",
                "छाती में हल्का पानी बनना (<2%)।"
            ],
            "alternativesEn": "CT-guided lung biopsy, bronchoscopy with transbronchial biopsy, or surgical resection.",
            "alternativesHi": "सीटी-निर्देशित बायोप्सी, दूरबीन द्वारा फेफड़े की जांच, या ऑपरेशन।",
            "sedationTypeEn": "Local anesthesia with optional mild IV sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार हल्की शामक दवा।"
        }
    },
    {
        "id": "ct-mediastinal-mass-biopsy",
        "name": "CT-Guided Mediastinal Mass Core Needle Biopsy (Anterior, Middle, Posterior)",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV018",
        "rghsCode": "693 / 42",
        "icd10": "C38.3 (Malignant neoplasm of mediastinum, unspecified) / D15.2 (Benign neoplasm of mediastinum)",
        "indications": [
            "Anterior mediastinal mass suspicious for thymoma, lymphoma, germ cell tumor, or thyroid substernal extension",
            "Middle mediastinal mass or subcarinal / paratracheal lymphadenopathy",
            "Posterior mediastinal neurogenic tumor (schwannoma, neurofibroma) or paravertebral mass",
            "Histological typing and immunohistochemistry to avoid invasive median sternotomy"
        ],
        "preOpCriteria": [
            "Coagulation profile: INR <= 1.4, Platelets >= 60,000/uL",
            "Contrast-enhanced chest CT carefully evaluated to map internal mammary vessels, aorta, SVC, and pulmonary trunk",
            "Supine positioning tolerance evaluated (exclude severe superior vena cava syndrome / airway collapse)",
            "Fasting 4 hours; intravenous line in lower extremity if SVC obstruction present"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G / 20G Coaxial Biopsy Needle System", "spec": "17G/19G x 10-15 cm introducer with 18G/20G automated cutting needle", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "CT Accessories", "name": "Radiopaque Skin Grid & Laser Marker", "spec": "Sterile skin grid for precise parasternal / paravertebral approach", "standardStore": "CT Suite D-9211" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "20 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Emergency Equipment", "name": "Thoracostomy Kit & Resuscitation Drugs", "spec": "Chest drainage tube and crash cart available", "standardStore": "CT Suite Emergency Cabinet" }
        ],
        "techniqueSteps": [
            "Position patient supine (anterior mediastinum) or prone (posterior mediastinum) on CT couch.",
            "Acquire contrast-enhanced CT slices to highlight mediastinal vasculature (internal mammary vessels, SVC, aorta).",
            "Select an extrapleural parasternal, trans-sternal, or paravertebral access path avoiding aerated lung.",
            "Prep, drape, and administer 15-20 mL 2% Lignocaine from skin through costal cartilage/intercostal space into mediastinal fat.",
            "Advance coaxial introducer needle incrementally under intermittent CT guidance directly into mediastinal tumor margin.",
            "Fire 18G/20G cutting needle during suspended respiration; obtain 2-3 tissue cores for histopathology and flow cytometry.",
            "Inspect cores for fleshy diagnostic tumor; deposit into formalin and saline for immunophenotyping.",
            "Carefully withdraw needle; acquire post-biopsy non-contrast CT to rule out anterior mediastinal hematoma, hemothorax, or pneumothorax."
        ],
        "complications": [
            "Anterior mediastinal hematoma (2-4%, usually self-limiting)",
            "Pneumothorax (5-10%, ~2% needing drainage)",
            "Retrosternal or chest wall pain (15-20%)",
            "Internal mammary artery or major vascular injury (<0.5%)",
            "Transient phrenic or recurrent laryngeal nerve neuropraxia (<0.2%)"
        ],
        "maayTariffInr": 9500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित मीडियास्टाइनल गांठ कोर बायोप्सी (अग्र, मध्य, पश्च मीडियास्टिनम)",
            "indicationEn": "Precise histological diagnosis of chest/mediastinal tumor (thymoma, lymphoma, germ cell tumor, neurogenic tumor).",
            "indicationHi": "छाती के बीच के हिस्से (मीडियास्टिनम) में मौजूद गांठ (थाइमोमा, लिम्फोमा या नसों की गांठ) से सीटी स्कैन द्वारा टुकड़ा लेना।",
            "descriptionEn": "Under sub-millimeter CT guidance, a specialized biopsy needle is steered beside the breastbone or spine into the central chest mass while avoiding the heart, aorta, and lungs to obtain tissue for cancer classification.",
            "descriptionHi": "सीटी स्कैन की थ्री-डी निगरानी में छाती को सुन्न करके, दिल और मुख्य रक्तवाहिकाओं को बचाते हुए पसली या रीढ़ के पास से एक बारीक सुई छाती की बीच वाली गांठ तक पहुंचाई जाती है और जांच हेतु टुकड़ा निकाला जाता है।",
            "benefitsEn": [
                "Definitively classifies lymphoma, thymoma, or germ cell tumors without open chest surgery (sternotomy).",
                "Sub-millimeter CT precision protects the heart, aorta, and great veins from injury.",
                "Enables targeted chemotherapy or radiotherapy without major surgical recovery."
            ],
            "benefitsHi": [
                "छाती की हड्डी चीरे (Sternotomy) बिना ही लिम्फोमा, थाइमोमा या कैंसर का पक्का पता चलता है।",
                "सीटी की मदद से दिल और मुख्य रक्तवाहिकाएं पूरी तरह सुरक्षित रहती हैं।",
                "बड़ा ऑपरेशन टाला जा सकता है और सही दवा जल्दी शुरू हो जाती है।"
            ],
            "specificRisksEn": [
                "Chest pain and retrosternal soreness for 1-2 days (15-20%).",
                "Small mediastinal hematoma (bleeding inside chest) (2-4%).",
                "Pneumothorax (air leaking into pleural space) (5-10%, ~2% needing tube).",
                "Injury to internal mammary or mediastinal vessels (<0.5%).",
                "Inadequate tissue for complex lymphoma subtyping (<5%)."
            ],
            "specificRisksHi": [
                "छाती के बीच में 1-2 दिन दर्द या भारीपन (15-20%)।",
                "छाती के अंदर खून का हल्का थक्का जमना (2-4%)।",
                "फेफड़े से हवा का रिसाव (5-10%, 2% में नली डालने की जरूरत पड़ सकती है)।",
                "खून की नस में चोट लगने का दुर्लभ जोखिम (<0.5%)।",
                "सैंपल कम पड़ने पर दोबारा जांच का जोखिम (<5%)।"
            ],
            "alternativesEn": "Surgical anterior mediastinotomy (Chamberlain procedure), video-assisted thoracoscopic surgery (VATS), or median sternotomy.",
            "alternativesHi": "छाती की हड्डी या पसली खोलकर ऑपरेशन द्वारा टुकड़ा लेना (Chamberlain / VATS / Sternotomy)।",
            "sedationTypeEn": "Local anesthesia with monitored IV conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
        }
    },
    {
        "id": "ct-pleural-mass-biopsy",
        "name": "CT-Guided Pleural Mass / Thickening Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV019",
        "rghsCode": "693 / 42",
        "icd10": "C45.0 (Mesothelioma of pleura) / C78.2 (Secondary malignant neoplasm of pleura)",
        "indications": [
            "Nodular or circumferential pleural thickening suspicious for malignant pleural mesothelioma",
            "Metastatic pleural deposits from adenocarcinoma (lung, breast, ovary)",
            "Chronic tuberculous pleurisy or fibrothorax with negative pleural fluid cytology",
            "Solitary fibrous tumor of the pleura"
        ],
        "preOpCriteria": [
            "Coagulation profile: INR <= 1.4, Platelets >= 60,000/uL",
            "Contrast-enhanced chest CT evaluated to identify areas of nodular pleural thickening (>5 mm)",
            "Trajectory planned tangential to chest wall to maximize pleural core length and avoid deep aerated lung",
            "Fasting 4 hours; baseline vital signs documented"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G Cutting Core Biopsy System", "spec": "18G x 10 cm semi-automated or automated needle with coaxial cannula", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "CT Accessories", "name": "Radiopaque Skin Grid & Laser Guide", "spec": "Sterile localization grid", "standardStore": "CT Suite D-9211" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "15 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Preparation", "name": "Formalin Vials & Saline Vials", "spec": "10% neutral buffered formalin with saline for GeneXpert MTB testing", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient in prone, supine, or decubitus posture placing the target pleural thickening uppermost or dependent.",
            "Acquire thin-section planning CT; mark skin entry site using laser lights.",
            "Select an oblique tangential approach traversing the thickened parietal/visceral pleura while skimming the lung surface to prevent parenchymal puncture.",
            "Clean, drape, and infiltrate 10-15 mL 2% Lignocaine into skin, intercostal space, and down to the pleural plaque.",
            "Introduce coaxial needle along tangential path under CT guidance into the thickened pleura.",
            "Pass 18G cutting needle through cannula and trigger within the pleural nodule.",
            "Obtain 2-3 tissue cores for histopathology (including calretinin, WT1 for mesothelioma) and GeneXpert for tuberculosis.",
            "Withdraw needle; perform completion CT scan checking for pneumothorax or hemothorax; apply dressing."
        ],
        "complications": [
            "Pneumothorax (5-10%, rarely requiring drainage if purely tangential)",
            "Chest wall / intercostal pain (10-15%)",
            "Pleural bleeding / small hemothorax (1-3%)",
            "Subcutaneous emphysema (<2%)",
            "Tumor tract seeding in malignant mesothelioma (<0.5%)"
        ],
        "maayTariffInr": 8000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित प्लूरल (फेफड़े की झिल्ली) गांठ / मोटाई बायोप्सी",
            "indicationEn": "Histological characterization of pleural thickening (mesothelioma, pleural metastases, or tuberculosis).",
            "indicationHi": "फेफड़े की बाहरी झिल्ली (प्लूरल) की सूजन, गांठ, टीबी या मेसोथेलियोमा कैंसर की पुष्टि हेतु सीटी स्कैन द्वारा टुकड़ा लेना।",
            "descriptionEn": "Under precise CT guidance, an automated biopsy needle is directed along the chest wall into the thickened pleural lining to collect tissue cores for cancer histology and molecular testing while minimizing lung puncture.",
            "descriptionHi": "सीटी स्कैन में देखकर छाती को सुन्न करके एक बारीक सुई फेफड़े की बाहरी झिल्ली (प्लूरल) की गांठ में तिरछी डाली जाती है ताकि अंदर फेफड़े को नुकसान पहुंचाए बिना झिल्ली का टुकड़ा जांच के लिए निकाला जा सके।",
            "benefitsEn": [
                "Essential for definitive diagnosis of malignant pleural mesothelioma and pleural metastases.",
                "Differentiates chronic tuberculous pleurisy from malignancy when fluid cytology is inconclusive.",
                "Minimally invasive alternative to surgical video-assisted thoracoscopic (VATS) pleural biopsy."
            ],
            "benefitsHi": [
                "फेफड़े की झिल्ली के कैंसर (Mesothelioma) या टीबी की पक्की पुष्टि होती है।",
                "पानी की जांच में कुछ न आने पर यह जांच बीमारी की जड़ तक पहुंचती है।",
                "दूरबीन वाले बड़े ऑपरेशन (VATS) से बचाव होता है।"
            ],
            "specificRisksEn": [
                "Pneumothorax (air leak in chest) (5-10%, usually mild).",
                "Chest wall or intercostal nerve pain (10-15%).",
                "Small hemothorax (blood in pleural cavity) (1-3%).",
                "Rare needle tract tumor seeding in mesothelioma (<0.5%).",
                "Insufficient diagnostic tissue requiring repeat procedure (<5%)."
            ],
            "specificRisksHi": [
                "फेफड़े से हल्की हवा का रिसाव (5-10%)।",
                "पसलियों में हल्का दर्द (10-15%)।",
                "झिल्ली के अंदर खून का रिसाव (1-3%)।",
                "सुई के रास्ते में गांठ के अंश छूटने का दुर्लभ जोखिम (<0.5%)।",
                "टिशू कम आने पर दोबारा जांच की आवश्यकता (<5%)।"
            ],
            "alternativesEn": "Medical thoracoscopy / pleuroscopy, surgical VATS pleural biopsy, or empirical medical treatment.",
            "alternativesHi": "दूरबीन द्वारा फेफड़े की झिल्ली की जांच (Thoracoscopy / VATS) अथवा अंदाजे से टीबी/दवा शुरू करना।",
            "sedationTypeEn": "Local anesthesia with optional conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार हल्की शामक दवा।"
        }
    },
    {
        "id": "ct-adrenal-gland-biopsy",
        "name": "CT-Guided Adrenal Gland Core Needle Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV020",
        "rghsCode": "693 / 42",
        "icd10": "C74.90 (Malignant neoplasm of unspecified adrenal gland) / D44.10 (Neoplasm of uncertain behavior of adrenal gland)",
        "indications": [
            "Enlarging solitary adrenal mass in a patient with known malignancy (e.g. lung, melanoma, renal cell carcinoma)",
            "Differentiating adrenal cortical carcinoma (ACC) or adrenal metastasis from benign adenoma",
            "Investigation of suspected bilateral adrenal enlargement due to tuberculosis, histoplasmosis, or lymphoma",
            "Assessment of atypical non-functioning adrenal mass when imaging is indeterminate"
        ],
        "preOpCriteria": [
            "MANDATORY BIOCHEMICAL EXCLUSION OF PHEOCHROMOCYTOMA: Normal 24-hour urinary or plasma free metanephrines / normetanephrines",
            "Coagulation testing within 48h: INR <= 1.4, Platelets >= 60,000/uL",
            "Contrast-enhanced CT / MRI reviewed to choose posterior transhepatic (right) or transsplenic/retroperitoneal (left) approach",
            "Fasting 4 hours; blood pressure well controlled (<140/90 mmHg)"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G / 20G Coaxial Biopsy Needle Set", "spec": "17G/19G x 13-15 cm introducer with 18G/20G automated cutting needle", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "CT Accessories", "name": "Radiopaque Skin Grid & Laser Pointer", "spec": "CT skin localization grid", "standardStore": "CT Suite D-9211" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "20 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Emergency Medications", "name": "IV Alpha / Beta Blockers & Vasopressors", "spec": "Phentolamine, Labetalol, and Esmolol available on call", "standardStore": "CT Suite Emergency Cabinet" }
        ],
        "techniqueSteps": [
            "Position patient prone or in modified decubitus position on the CT table.",
            "Acquire low-dose planning CT slices through the adrenal glands; identify the adrenal mass.",
            "Select trajectory: for right adrenal, transhepatic or direct posterior approach avoiding kidney and IVC; for left adrenal, posterior paravertebral retroperitoneal approach avoiding spleen, kidney, and pancreas.",
            "Sterilize and drape the posterior flank; infiltrate 15 mL 2% Lignocaine from skin down to perinephric/adrenal space.",
            "Advance coaxial introducer needle incrementally under intermittent CT confirmation into the edge of the adrenal mass.",
            "Deploy 18G or 20G automated cutting needle into the mass during breath-hold; retrieve 2-3 core tissue specimens.",
            "Continuously monitor non-invasive blood pressure and pulse during each needle firing to detect sudden adrenergic surges.",
            "Withdraw coaxial cannula; perform completion CT to exclude retroperitoneal or subcapsular hematoma; admit for 4 hours of vital signs surveillance."
        ],
        "complications": [
            "Retroperitoneal or periadrenal hematoma (2-4%, usually self-limiting)",
            "Hypertensive crisis during puncture if occult pheochromocytoma (<0.5%)",
            "Pneumothorax from pleural transgression (<1-2%)",
            "Flank pain / soreness (10-15%)",
            "Inadvertent renal or splenic capsule laceration (<0.2%)"
        ],
        "maayTariffInr": 9000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित एड्रिनल ग्रंथि (अधिवृक्क ग्रंथि) कोर बायोप्सी",
            "indicationEn": "Histological characterization of adrenal mass to distinguish metastasis, carcinoma, or infection.",
            "indicationHi": "गुर्दे के ऊपर स्थित एड्रिनल ग्रंथि की गांठ में कैंसर, टीबी या मेटास्टेसिस की जांच हेतु सीटी स्कैन द्वारा टुकड़ा लेना।",
            "descriptionEn": "Under sub-millimeter CT guidance, a coaxial biopsy needle is steered through the back into the adrenal gland while strictly avoiding adjacent kidneys, liver, spleen, and major blood vessels to harvest tissue for pathological analysis.",
            "descriptionHi": "सीटी स्कैन की थ्री-डी निगरानी में पीठ के रास्ते एक बारीक सुई सीधे गुर्दे के ऊपर मौजूद एड्रिनल ग्रंथि की गांठ में डाली जाती है ताकि आसपास के अंगों को बचाते हुए जांच के लिए टुकड़ा निकाला जा सके।",
            "benefitsEn": [
                "Definitively proves whether adrenal enlargement represents cancer metastasis or benign adenoma.",
                "Essential for cancer staging and choosing between surgery, chemotherapy, or radiotherapy.",
                "Minimally invasive day-care procedure avoiding laparoscopic surgical adrenalectomy."
            ],
            "benefitsHi": [
                "गांठ साधारण है या फेफड़े/अन्य कैंसर से आई हुई है, इसका शत-प्रतिशत सटीक पता चलता है।",
                "कैंसर के सही स्टेज और इलाज (कीमोथेरेपी या ऑपरेशन) तय करने में अनिवार्य जांच।",
                "बिना पेट या पीठ का ऑपरेशन किए केवल सुई से जांच पूरी हो जाती है।"
            ],
            "specificRisksEn": [
                "Flank pain and soreness for 1-2 days (10-15%).",
                "Periadrenal or retroperitoneal hematoma (bleeding around adrenal gland) (2-4%).",
                "Severe hypertensive crisis (sudden dangerous blood pressure spike) if occult pheochromocytoma (<0.5%).",
                "Small pneumothorax (air leak in chest) (<1-2%).",
                "Inadequate tissue sample (<5%)."
            ],
            "specificRisksHi": [
                "कमर में 1-2 दिन हल्का दर्द या खिंचाव (10-15%)।",
                "एड्रिनल ग्रंथि के आसपास खून का थक्का जमना (2-4%)।",
                "फियोक्रोमोसाइटोमा होने पर अचानक खतरनाक रूप से ब्लड प्रेशर बढ़ना (<0.5%)।",
                "फेफड़े से हल्की हवा का रिसाव (न्यूमोथोरैक्स) (<1-2%)।",
                "सैंपल पर्याप्त न आने पर दोबारा जांच का जोखिम (<5%)।"
            ],
            "alternativesEn": "Laparoscopic surgical adrenalectomy without prior biopsy, PET-CT metabolic surveillance, or dedicated chemical shift MRI.",
            "alternativesHi": "ऑपरेशन द्वारा पूरी एड्रिनल ग्रंथि निकालना, पीईटी-सीटी स्कैन, या विशेष एमआरआई जांच से निगरानी।",
            "sedationTypeEn": "Local anesthesia with monitored IV conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
        }
    }
]
