# -*- coding: utf-8 -*-
"""
Part 1A: Liver & Kidney Biopsies (Procedures 1 to 9)
"""

DATA_PART1A = [
    {
        "id": "usg-liver-biopsy-parenchymal",
        "name": "Ultrasound-Guided Liver Biopsy (Non-targeted Parenchymal / Medical Liver)",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV001",
        "rghsCode": "693 / 41",
        "icd10": "K76.0 (Fatty liver) / K74.60 (Unspecified cirrhosis of liver)",
        "indications": [
            "Histological staging of chronic hepatitis B or C infection",
            "Evaluation of unexplained elevated transaminases / abnormal liver enzymes",
            "Diagnosis and grading of non-alcoholic steatohepatitis (NASH / MASH)",
            "Assessment of autoimmune hepatitis, primary biliary cholangitis, or metabolic storage disease"
        ],
        "preOpCriteria": [
            "Coagulation screen within 48h: INR <= 1.4, Platelets >= 60,000/uL",
            "Hemoglobin >= 9.0 g/dL; blood group and crossmatch confirmed",
            "Fasting for at least 4 hours prior to elective procedure",
            "Pre-procedure abdominal ultrasound ruling out gross ascites along needle trajectory"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "16G / 18G Menghini / Tru-Cut Core Biopsy Needle", "spec": "15 cm length, automated spring-loaded with 20 mm notch", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "Curvilinear Ultrasound Probe with Needle Guide", "spec": "3.5 - 5.0 MHz with multi-angle biopsy bracket", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "20 mL vial (preservative-free)", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Histopathology Formalin Container", "spec": "10% neutral buffered formalin container with pre-printed labels", "standardStore": "Pathology Receiving Counter" }
        ],
        "techniqueSteps": [
            "Perform preliminary right upper quadrant ultrasonography to identify segment VI/VII away from large vessels and gallbladder.",
            "Sterilize the lateral lower intercostal or subcostal skin and drape under aseptic precautions.",
            "Infiltrate local anesthetic (10-15 mL of 2% Lignocaine) from dermis down to the liver capsule under real-time ultrasound guidance.",
            "Make a 2-mm skin nick; introduce the 16G or 18G core biopsy needle under continuous real-time acoustic visualization.",
            "Instruct the patient to hold breath at end-expiration; rapidly advance needle into liver parenchyma and trigger the cutting mechanism.",
            "Withdraw the needle swiftly, transfer specimen into 10% formalin, and confirm adequate portal tract representation (>1.5 cm core length).",
            "Scan liver capsule and subcapsular space with color Doppler for active hemorrhage or expanding hematoma.",
            "Apply sterile compression dressing; place patient in right lateral decubitus position for 2 hours of strict bed rest."
        ],
        "complications": [
            "Right upper quadrant pleuritic pain radiating to right shoulder (20-30%)",
            "Subcapsular or intrahepatic hematoma (1-3%)",
            "Significant hemoperitoneum requiring blood transfusion or transarterial embolization (<0.5%)",
            "Biliary leak or transient hemobilia (<0.2%)",
            "Pneumothorax or inadvertent pleural transgression (<0.1%)"
        ],
        "maayTariffInr": 4800,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित लिवर बायोप्सी (नॉन-टारगेटेड पैरेन्काइमल / मेडिकल लिवर)",
            "indicationEn": "Evaluation of diffuse liver disease, staging of cirrhosis, hepatitis, or abnormal liver function tests.",
            "indicationHi": "लिवर की गंभीर बीमारी, हेपेटाइटिस, फैटी लिवर या सिरोसिस के सटीक कारण और स्थिति की जांच हेतु लिवर का टुकड़ा लेना।",
            "descriptionEn": "Under local anesthesia and continuous real-time ultrasound visualization, a specialized core biopsy needle is advanced through the right lower chest/abdominal wall into the liver tissue to obtain a tiny tissue core for laboratory histopathological examination.",
            "descriptionHi": "सोनोग्राफी (अल्ट्रासाउंड) की निगरानी में पेट के दाईं तरफ की त्वचा को सुन्न करके एक बारीक बायोप्सी सुई लिवर में डाली जाती है और जांच के लिए लिवर के ऊतक (टिशू) का छोटा सा टुकड़ा निकाला जाता है।",
            "benefitsEn": [
                "Provides gold-standard histopathological diagnosis of diffuse liver inflammation, fibrosis, or cirrhosis.",
                "Enables precise staging to guide antiviral, immunosuppressive, or targeted lifestyle pharmacotherapy.",
                "Avoids the need for open or laparoscopic surgical liver tissue sampling."
            ],
            "benefitsHi": [
                "लिवर की सूजन, फाइब्रोसिस या सिरोसिस की सटीक स्थिति का पता चलता है जिससे सही इलाज संभव होता है।",
                "दवाइयों के चयन और भविष्य की योजना तय करने के लिए यह सबसे प्रामाणिक जांच है।",
                "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुई द्वारा जांच पूरी हो जाती है।"
            ],
            "specificRisksEn": [
                "Transient right upper quadrant or shoulder tip pain (20-30%).",
                "Subcapsular liver hematoma or localized internal bleeding (1-3%).",
                "Severe intraperitoneal hemorrhage requiring blood transfusion or catheter embolization (<0.5%).",
                "Inadvertent puncture of gallbladder, bile ducts, or lung margin with pneumothorax (<0.2%).",
                "Inadequate tissue sample requiring repeat biopsy (<3%)."
            ],
            "specificRisksHi": [
                "पेट के ऊपरी दाहिने हिस्से या कंधे में हल्का दर्द (20-30% मरीजों में, जो दवा से ठीक हो जाता है)।",
                "लिवर के अंदर या सतह पर खून का थक्का (हेमेटोमा) जमना (1-3%)।",
                "अत्यधिक रक्तस्राव (Bleeding) जिसके लिए रक्त चढ़ाने या नस बंद करने के ऑपरेशन की आवश्यकता हो (<0.5%)।",
                "पित्त की थैली या फेफड़े में सुई लगने से पित्त रिसाव या हवा भरना (न्यूमोथोरैक्स) (<0.2%)।",
                "टुकड़ा अपर्याप्त आने पर दोबारा बायोप्सी करने की संभावना (<3%)।"
            ],
            "alternativesEn": "Non-invasive fibrosis assessment (Transient Elastography / FibroScan), serum biomarker panels, or Transjugular Liver Biopsy (TGLB) if coagulopathy is present.",
            "alternativesHi": "फाइब्रोस्कैन (FibroScan) जांच, खून की विशेष जांचें, अथवा गर्दन की नस द्वारा बायोप्सी (TGLB)।",
            "sedationTypeEn": "Local anesthesia with optional mild oral/intravenous conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं आवश्यकतानुसार हल्की शामक दवा।"
        }
    },
    {
        "id": "usg-focal-liver-lesion-biopsy",
        "name": "Ultrasound-Guided Focal Liver Lesion Core Needle Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV002",
        "rghsCode": "693 / 41",
        "icd10": "C22.0 (Liver cell carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
        "indications": [
            "Characterization of focal solid hepatic mass suspicious for primary liver carcinoma (HCC / Cholangiocarcinoma)",
            "Confirmation and molecular profiling of suspected metastatic liver deposits (colorectal, breast, lung)",
            "Differentiating benign lesions (adenoma, focal nodular hyperplasia) from well-differentiated malignancy",
            "Evaluation of inconclusive multi-phase dynamic CT or contrast MRI liver findings"
        ],
        "preOpCriteria": [
            "Coagulation profile: INR <= 1.5, Platelets >= 50,000/uL",
            "Cross-sectional imaging (contrast CT / MRI) reviewed within prior 4 weeks",
            "Fasting for 4 hours; baseline vital signs documented",
            "Target lesion confirmed visible on pre-procedure bedside ultrasound with safe non-vascular acoustic window"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G Coaxial Core Biopsy System", "spec": "17G introducer cannula with 18G semi-automated cutting needle (15-20 cm)", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "Dedicated Abdominal Probe", "spec": "3.5 - 5 MHz curved array with needle guidance bracket", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "20 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Preparation", "name": "Formalin Vials & Glass Slides", "spec": "10% formalin plus glass slides for touch imprint cytology", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Scan liver to localize target focal lesion; plan needle path traversing an intervening rim of normal liver parenchyma to minimize tumor seeding.",
            "Sterilize and drape right upper abdomen or epigastrium under strict surgical asepsis.",
            "Infiltrate skin, subcutaneous tissues, and Glisson's capsule with 10-15 mL 2% Lignocaine.",
            "Advance 17G coaxial introducer needle under direct real-time sonographic guidance to the margin of the focal lesion.",
            "Remove stylet and insert 18G cutting biopsy needle through coaxial cannula into viable non-necrotic tumor margin.",
            "Fire cutting mechanism during suspended respiration; obtain 2-3 adequate core specimens through the single puncture tract.",
            "Inspect cores for fleshy viable tumor tissue and prepare optional touch imprint cytology.",
            "Perform coaxial tract embolization with gelatin sponge slurry if vascular vascularity is high; withdraw cannula and apply pressure dressing."
        ],
        "complications": [
            "Capsular or intrahepatic bleeding / hematoma (1-2%)",
            "Tumor tract seeding (<0.1% with coaxial technique)",
            "Right upper quadrant pain and vasovagal reaction (5-10%)",
            "Hemoperitoneum requiring emergency intervention (<0.5%)",
            "Inadvertent bowel or gallbladder perforation (<0.2%)"
        ],
        "maayTariffInr": 5200,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Boston Scientific India (+91 98293 45678)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित फोकल लिवर गांठ कोर बायोप्सी",
            "indicationEn": "Histopathological diagnosis and molecular typing of focal liver mass (suspected cancer or metastasis).",
            "indicationHi": "लिवर में मौजूद संदिग्ध गांठ या कैंसर की पुष्टि और प्रकार जानने हेतु सुई द्वारा टुकड़ा लेना।",
            "descriptionEn": "Using high-resolution real-time ultrasound, a fine coaxial biopsy needle is precisely guided into the focal liver mass to extract small core tissue specimens for pathological and immunohistochemical analysis.",
            "descriptionHi": "अल्ट्रासाउंड मशीन से गांठ को देखते हुए पेट पर सुन्न करने का इंजेक्शन लगाकर बारीक सुई सीधे गांठ तक पहुंचाई जाती है और जांच के लिए ऊतक (टिशू) निकाला जाता है।",
            "benefitsEn": [
                "Confirms histological diagnosis and determines whether tumor is primary liver cancer or metastasis.",
                "Provides tissue for immunohistochemistry and genetic mutations to guide targeted oncology therapy.",
                "Minimally invasive day-care procedure avoiding surgical exploratory laparotomy."
            ],
            "benefitsHi": [
                "गांठ कैंसर की है या साधारण, इसका शत-प्रतिशत सटीक पता चलता है।",
                "कीमोथेरेपी या टारगेटेड दवाइयां तय करने के लिए आवश्यक जांचें हो पाती हैं।",
                "बिना पेट खोले केवल सुई से कुछ ही मिनटों में प्रक्रिया पूरी हो जाती है।"
            ],
            "specificRisksEn": [
                "Localized pain at biopsy site (10-15%).",
                "Internal liver bleeding or hematoma around the lesion (1-2%).",
                "Significant hemoperitoneum requiring embolization or blood transfusion (<0.5%).",
                "Extremely rare needle tract tumor seeding (<0.1%).",
                "Sample showing only necrosis requiring repeat procedure (<5%)."
            ],
            "specificRisksHi": [
                "सुई लगाने की जगह पर हल्का दर्द या भारीपन (10-15%)।",
                "लिवर के अंदर हल्का खून का थक्का जमना (1-2%)।",
                "अत्यधिक रक्तस्राव जिसके लिए अतिरिक्त इलाज की जरूरत पड़ सकती है (<0.5%)।",
                "सुई के रास्ते में ट्यूमर फैलने का अत्यंत दुर्लभ खतरा (<0.1%)।",
                "गांठ में मृत ऊतक (Necrosis) आने पर दोबारा जांच की आवश्यकता (<5%)।"
            ],
            "alternativesEn": "Empirical oncology treatment based on imaging/serum tumor markers, PET-CT correlation, or surgical diagnostic resection.",
            "alternativesHi": "केवल सीटी/एमआरआई और खून की जांचों के आधार पर दवा देना, या ऑपरेशन करके गांठ निकालना।",
            "sedationTypeEn": "Local anesthesia with optional conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) व आवश्यकतानुसार हल्की शामक दवा।"
        }
    },
    {
        "id": "usg-liver-transplant-biopsy",
        "name": "Ultrasound-Guided Liver Allograft / Transplant Protocol Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV003",
        "rghsCode": "693 / 41",
        "icd10": "T86.41 (Liver transplant rejection) / T86.49 (Other complications of liver transplant)",
        "indications": [
            "Investigation of acute liver allograft dysfunction (elevated LFTs, hyperbilirubinemia)",
            "Differentiation between acute cellular rejection, ischemic cholangiopathy, and CMV infection",
            "Protocol surveillance biopsy at 1, 3, or 5 years post-transplantation",
            "Evaluation of recurrence of primary disease (HCV, NASH, autoimmune hepatitis) in graft"
        ],
        "preOpCriteria": [
            "Platelets >= 50,000/uL, INR <= 1.5 (correct with fresh frozen plasma or platelets if required)",
            "Doppler ultrasound confirming patency of hepatic artery, portal vein, and hepatic veins",
            "Fasting for 4 hours; blood pressure well controlled (<140/90 mmHg)",
            "Exclusion of biliary dilation or perihepatic fluid collection along planned trajectory"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G Automated Core Biopsy Needle", "spec": "15 cm length, 15-20 mm throw, echogenic tip", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Resolution Vascular/Abdominal Probe", "spec": "3.5 - 6.0 MHz broadband curved probe", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "10 mL ampoule", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Transplant Histology & Electron Microscopy Vials", "spec": "Formalin vial and glutaraldehyde/Michel medium", "standardStore": "Transplant Coordinator Store" }
        ],
        "techniqueSteps": [
            "Review transplant anatomy (subcostal scar, organ orientation, vascular anastomosis).",
            "Perform comprehensive Doppler scan verifying hepatic artery resistive index (0.55-0.75) and unobstructed outflow.",
            "Identify an accessible peripheral zone of the transplant liver (segment V or VI) away from hilar vascular anastomoses.",
            "Sterilize the right hypochondrium and administer 10 mL 2% Lignocaine down to allograft capsule.",
            "Introduce 18G biopsy needle under continuous real-time US monitoring tangential to capsule avoiding deep hilar vessels.",
            "Fire needle to obtain 1-2 core specimens with at least 10 complete portal tracts.",
            "Examine graft capsule with color Doppler for active bleeding; apply direct manual pressure over entry site for 10 minutes.",
            "Maintain strict bed rest for 4-6 hours with hourly blood pressure and pulse monitoring."
        ],
        "complications": [
            "Allograft subcapsular hematoma (2-4%)",
            "Significant intraperitoneal bleeding requiring transfusion (<1%)",
            "Hepatic artery pseudoaneurysm or arteriovenous fistula (<0.5%)",
            "Bile leak or peritonitis (<0.2%)",
            "Vasovagal syncope or transient hypotension (3-5%)"
        ],
        "maayTariffInr": 6500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित लिवर प्रत्यारोपण (ट्रांसप्लांट) ग्राफ्ट बायोप्सी",
            "indicationEn": "Suspected acute or chronic rejection, viral recurrence, or protocol assessment of transplanted liver.",
            "indicationHi": "प्रत्यारोपित (ट्रांसप्लांटेड) लिवर में खराबी, रिजेक्शन (अस्वीकृति) या संक्रमण की पहचान हेतु ग्राफ्ट से टुकड़ा लेना।",
            "descriptionEn": "Under real-time ultrasound guidance, an automated biopsy needle is carefully placed into the peripheral transplanted liver graft to collect tissue samples for determining graft rejection or disease recurrence.",
            "descriptionHi": "अल्ट्रासाउंड से ट्रांसप्लांट किए गए नए लिवर को देखकर त्वचा को सुन्न करके एक महीन सुई से छोटा टुकड़ा निकाला जाता है ताकि रिजेक्शन का तुरंत पता लगाकर दवा बदली जा सके।",
            "benefitsEn": [
                "Definitively diagnoses acute cellular rejection to initiate life-saving pulse steroid or immunosuppressive therapy.",
                "Distinguishes drug toxicity or viral infection from immunological rejection.",
                "Protects the survival and longevity of the liver transplant graft."
            ],
            "benefitsHi": [
                "ट्रांसप्लांट रिजेक्शन की तुरंत सटीक पहचान होती है जिससे सही समय पर ग्राफ्ट को बचाया जा सकता है।",
                "दवा के दुष्प्रभाव और इन्फेक्शन के बीच अंतर स्पष्ट होता है।",
                "नए लिवर की लंबी उम्र और कार्यक्षमता सुनिश्चित होती है।"
            ],
            "specificRisksEn": [
                "Pain and soreness over transplant site (15-20%).",
                "Subcapsular hematoma or localized bleeding (2-4%).",
                "Vascular injury or arterioportal fistula in the graft (<0.5%).",
                "Major bleed requiring transfusion or laparotomy (<1%).",
                "Inadequate tissue sample (<3%)."
            ],
            "specificRisksHi": [
                "ट्रांसप्लांट वाली जगह पर दर्द या खिंचाव (15-20%)।",
                "ग्राफ्ट के आसपास खून का रिसाव या हेमेटोमा (2-4%)।",
                "ग्राफ्ट की खून की नसों में चोट लगने का दुर्लभ जोखिम (<0.5%)।",
                "गंभीर रक्तस्राव जिसके लिए खून चढ़ाने की जरूरत पड़े (<1%)।",
                "सैंपल पर्याप्त न आने पर दोबारा जांच का जोखिम (<3%)।"
            ],
            "alternativesEn": "Empirical escalation of immunosuppression (corticosteroid pulse), repeat Doppler ultrasound, or transjugular liver allograft biopsy.",
            "alternativesHi": "अनुमान के आधार पर स्टेरॉयड/दवाइयां बढ़ाना, या गर्दन की नस से बायोप्सी करना (TGLB)।",
            "sedationTypeEn": "Local anesthesia with monitored conscious sedation.",
            "sedationTypeHi": "लोकल एनेस्थीसिया (सुन्न करना) और हल्की शामक दवा।"
        }
    },
    {
        "id": "usg-liver-abscess-infiltrative-biopsy",
        "name": "Ultrasound-Guided Liver Abscess Wall / Infiltrative Mass Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV004",
        "rghsCode": "693 / 41",
        "icd10": "K75.0 (Abscess of liver) / C22.9 (Malignant neoplasm of liver, unspecified)",
        "indications": [
            "Atypical cystic-necrotic liver lesion unresponsive to standard antimicrobial therapy",
            "Differentiating chronic pyogenic / tubercular liver abscess from necrotic cholangiocarcinoma or necrotic metastasis",
            "Sampling thickened nodular abscess wall or enhancing septa",
            "Microbiological culture and histopathological confirmation of fungal or mycobacterial hepatic granulomas"
        ],
        "preOpCriteria": [
            "Coagulation status: INR <= 1.5, Platelets >= 50,000/uL",
            "Broad-spectrum IV antibiotic coverage administered pre-procedure",
            "Fasting for 4 hours; baseline hemodynamic stability verified",
            "US/CT review showing accessible thickened peripheral wall away from central liquefaction"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G Coaxial Core Biopsy System", "spec": "17G outer cannula with 18G semi-automated core needle", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "Curvilinear Abdominal Probe", "spec": "3.5 - 5.0 MHz with puncture guidance line", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "15 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Lab Supplies", "name": "Sterile Culture Bottles & Formalin Container", "spec": "Aerobic/anaerobic, fungal, AFB GeneXpert vials + formalin", "standardStore": "Microbiology Collection Unit" }
        ],
        "techniqueSteps": [
            "Sonographically survey the necrotic mass; identify the thickest viable non-liquefied mural nodule or rim.",
            "Aseptically clean and drape the abdominal wall overlying the selected puncture site.",
            "Infiltrate 2% Lignocaine into skin, subcutaneous fat, and parietal peritoneum.",
            "Introduce 17G coaxial introducer needle targeting the solid peripheral wall under real-time acoustic control.",
            "Aspirate any high-pressure purulent fluid first to decompress cavity, sending aspirate for bacterial/mycobacterial PCR.",
            "Pass 18G core needle through coaxial sheath and fire across the enhancing wall or solid septations.",
            "Obtain 2-3 core tissue samples for histology, AFB stain, GeneXpert, and fungal culture.",
            "Optionally instill 1-2 mL of antibiotic solution through the sheath; remove needle and apply sterile compression dressing."
        ],
        "complications": [
            "Transient bacteremia or post-procedure rigors / fever spike (5-10%)",
            "Intrahepatic bleeding or hematoma (1-3%)",
            "Peritoneal spillage causing localized peritonitis (<1%)",
            "Pain requiring intravenous analgesia (10-15%)",
            "Sample showing non-diagnostic necrotic debris (<8%)"
        ],
        "maayTariffInr": 5000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Merit Medical Systems (+91 98294 56789)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित लिवर फोड़ा दीवार / इन्फिल्ट्रेटिव गांठ बायोप्सी",
            "indicationEn": "Differentiating necrotic malignancy from refractory infectious abscess of the liver.",
            "indicationHi": "लिवर के जटिल फोड़े (मवाद) की दीवार से टुकड़ा लेकर कैंसर अथवा टीबी/फंगल संक्रमण की जांच करना।",
            "descriptionEn": "Under real-time ultrasound guidance, a needle is directed into the solid thickened wall or nodules of a liver collection to obtain tissue and fluid for combined microbiological culture and cancer histology.",
            "descriptionHi": "अल्ट्रासाउंड की मदद से सुन्न करने के बाद सुई द्वारा लिवर के फोड़े की बाहरी दीवार या ठोस हिस्से से टुकड़ा और मवाद निकाला जाता है ताकि टीबी, फंगस या कैंसर की पुष्टि हो सके।",
            "benefitsEn": [
                "Accurately separates necrotic liver tumors from ordinary bacterial abscesses.",
                "Enables targeted anti-tubercular, anti-fungal, or oncology chemotherapy based on tissue culture.",
                "Relieves diagnostic confusion in non-healing liver lesions."
            ],
            "benefitsHi": [
                "यह स्पष्ट होता है कि गांठ साधारण मवाद की है या कैंसर की।",
                "टीबी, फंगस या बैक्टीरिया के अनुसार सटीक एंटीबायोटिक तय की जा सकती है।",
                "दवाओं से ठीक न होने वाले फोड़ों का सही समाधान मिलता है।"
            ],
            "specificRisksEn": [
                "Post-procedure fever spike or chills (5-10%).",
                "Pain at the puncture site (10-15%).",
                "Bleeding from the vascular liver wall or subcapsular hematoma (1-3%).",
                "Fluid leak into abdominal cavity (<1%).",
                "Only dead necrotic material obtained, requiring repeat test (<8%)."
            ],
            "specificRisksHi": [
                "जांच के बाद बुखार या कंपकंपी आना (5-10%, दवा से नियंत्रित)।",
                "पेट में सुई लगने वाली जगह पर दर्द (10-15%)।",
                "लिवर की दीवार से खून का रिसाव (1-3%)।",
                "पेट में मवाद का हल्का रिसाव (<1%)।",
                "केवल मृत टिशू आने पर दोबारा जांच की आवश्यकता (<8%)।"
            ],
            "alternativesEn": "Empirical broad-spectrum antimicrobial trial, percutaneous pigtail drainage alone, or diagnostic surgical resection/laparotomy.",
            "alternativesHi": "अंदाजे से दवाइयां चलाना, केवल मवाद निकालने की नली डालना, या पेट का बड़ा ऑपरेशन करना।",
            "sedationTypeEn": "Local anesthesia with IV analgesia and conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक व शामक दवा।"
        }
    },
    {
        "id": "tglb-transjugular-liver-biopsy",
        "name": "Transjugular Liver Biopsy (TGLB)",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV005",
        "rghsCode": "693 / 36",
        "icd10": "K74.60 (Unspecified cirrhosis) / R58 (Hemorrhage, not elsewhere classified)",
        "indications": [
            "Liver biopsy in patients with severe coagulopathy (INR > 1.5, Platelets < 50,000/uL)",
            "Presence of moderate-to-severe ascites precluding percutaneous transthoracic access",
            "Morbid obesity, mechanical ventilation, or small shrunken cirrhotic liver",
            "Simultaneous measurement of Hepatic Venous Pressure Gradient (HVPG) and liver histology"
        ],
        "preOpCriteria": [
            "Coagulation profile reviewed; blood products on standby",
            "Fasting 4-6 hours; patient lying comfortably in supine position",
            "Ultrasound documentation of patent right internal jugular vein (RIJV)",
            "Renal panel and contrast allergy history documented"
        ],
        "hardware": [
            { "category": "TGLB Set", "name": "Cook Quick-Core / LABS Transjugular Liver Biopsy Set", "spec": "7F x 50-60 cm sheath with 18G/19G x 60 cm spring-loaded biopsy needle", "standardStore": "Central IR Consignment Store" },
            { "category": "Vascular Access", "name": "7F Vascular Introducer Sheath", "spec": "11 cm sheath with 0.035-inch J-wire and 18G/21G needle", "standardStore": "Cath Lab Access Cabinet" },
            { "category": "Diagnostic Catheter", "name": "5F MPA / Cobra / Rosch Catheter", "spec": "65-100 cm length", "standardStore": "Cath Lab Main Store" },
            { "category": "Manometry Line", "name": "Electronic Pressure Transducer Kit", "spec": "Calibrated pressure line for HVPG recording", "standardStore": "Cath Lab Bio-Station" }
        ],
        "techniqueSteps": [
            "Under ultrasound guidance, cannulate right internal jugular vein and place 7F vascular sheath.",
            "Advance 0.035 guidewire and 5F catheter through SVC and right atrium into inferior vena cava (IVC).",
            "Select right (or middle) hepatic vein under fluoroscopy; obtain free hepatic venous pressure (FHVP).",
            "Advance catheter into wedged position (or inflate balloon) to measure wedged hepatic venous pressure (WHVP); calculate HVPG (WHVP - FHVP).",
            "Exchange for 7F curved guiding sheath placed deeply into the right hepatic vein pointing anteriorly and inferiorly.",
            "Perform hepatic venogram to confirm position well within liver parenchyma and rule out capsular proximity.",
            "Advance 18G/19G Quick-Core needle through sheath, instruct patient to hold breath, and deploy needle into anterior parenchyma.",
            "Aspirate and retrieve core; repeat for 2-3 passes until sufficient portal tracts obtained; perform post-biopsy venogram verifying no extravasation."
        ],
        "complications": [
            "Transient cardiac arrhythmias during atrial catheter transit (5-10%, benign)",
            "Liver capsule perforation and hemoperitoneum (<1-2%)",
            "Hepatic hematoma or intrahepatic vascular injury (1-2%)",
            "Neck puncture site hematoma or pseudoaneurysm (<1%)",
            "Transient hemobilia (<0.5%)"
        ],
        "maayTariffInr": 35000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "ट्रांसजुगुलर लिवर बायोप्सी (TGLB - गर्दन की नस द्वारा लिवर बायोप्सी)",
            "indicationEn": "Liver tissue diagnosis in patients with bleeding disorders, low platelets, or severe abdominal fluid (ascites).",
            "indicationHi": "खून पतला होने, प्लेटलेट्स कम होने या पेट में पानी (जलोदर/Ascites) होने पर गर्दन की नस के रास्ते सुरक्षित लिवर का टुकड़ा लेना।",
            "descriptionEn": "Under fluoroscopic and ultrasound guidance, a tiny tube is inserted into the jugular vein in the neck and guided down through the heart into the liver vein. A specialized flexible biopsy needle is used to obtain liver tissue from within the bloodstream without puncturing the abdominal wall.",
            "descriptionHi": "गर्दन की मुख्य नस (जुगुलर नस) को सुन्न करके एक्स-रे और कैथ लैब की निगरानी में एक बारीक नली लिवर की नस तक पहुंचाई जाती है और अंदर ही अंदर से लिवर का टुकड़ा लिया जाता है। इससे पेट पर कोई चीरा नहीं लगता और खून बहने का खतरा न्यूनतम रहता है।",
            "benefitsEn": [
                "Allows safe liver biopsy even in severe bleeding risk or advanced liver cirrhosis.",
                "Zero risk of direct transabdominal peritoneal bleeding.",
                "Permits simultaneous measurement of liver vein pressure (HVPG) to assess portal hypertension severity."
            ],
            "benefitsHi": [
                "गंभीर ब्लीडिंग रिस्क या पेट में पानी होने पर भी बिना किसी खतरे के लिवर का टुकड़ा लिया जा सकता है।",
                "पेट की बाहरी सतह पर कोई घाव या खून रिसाव का जोखिम नहीं होता।",
                "साथ ही लिवर की नसों का प्रेशर (HVPG) भी नप जाता है जिससे बीमारी की गंभीरता का सटीक पता चलता है।"
            ],
            "specificRisksEn": [
                "Temporary heart rhythm irregularity while crossing the heart chamber (5-10%, settles quickly).",
                "Neck hematoma or swelling at the puncture site (1-2%).",
                "Rare liver capsule puncture causing internal bleeding (1-2%).",
                "Transient abdominal or shoulder pain (5-10%).",
                "Fragmented or inadequate sample requiring repeat biopsy (<5%)."
            ],
            "specificRisksHi": [
                "नली हृदय से गुजरते समय दिल की धड़कन का अस्थायी रूप से अनियंत्रित होना (5-10%, तुरंत ठीक हो जाता है)।",
                "गर्दन के पंक्चर स्थल पर सूजन या खून का थक्का जमना (1-2%)।",
                "लिवर की बाहरी झिल्ली में सुई लगने से पेट में खून का रिसाव (1-2%)।",
                "कंधे या पेट में हल्का अस्थायी दर्द (5-10%)।",
                "सैंपल छोटा या टूटा हुआ आने पर दोबारा जांच की आवश्यकता (<5%)।"
            ],
            "alternativesEn": "Transcutaneous ultrasound-guided biopsy after massive platelet/plasma transfusion, non-invasive fibrosis testing (FibroScan), or clinical empirical management.",
            "alternativesHi": "रक्त और प्लेटलेट्स चढ़ाकर पेट के रास्ते बायोप्सी, फाइब्रोस्कैन, या केवल दवाओं से इलाज।",
            "sedationTypeEn": "Local anesthesia to the neck with continuous ECG monitoring and conscious sedation.",
            "sedationTypeHi": "गर्दन पर स्थानीय सुन्नता (Local Anesthesia), ईसीजी निगरानी और हल्की शामक दवा।"
        }
    },
    {
        "id": "usg-native-kidney-biopsy",
        "name": "Ultrasound-Guided Native Kidney Biopsy (Cortical Core)",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV006",
        "rghsCode": "693 / 41",
        "icd10": "N04.9 (Nephrotic syndrome) / N17.9 (Acute kidney failure)",
        "indications": [
            "Unexplained nephrotic syndrome or persistent heavy proteinuria (>1-2 g/day)",
            "Rapidly progressive glomerulonephritis (RPGN) or unexplained acute kidney injury",
            "Systemic lupus erythematosus (SLE) nephritis staging (ISN/RPS classification)",
            "Unexplained hematuria with impaired renal filtration"
        ],
        "preOpCriteria": [
            "Strict blood pressure control (target < 140/90 mmHg, preferably < 130/80 mmHg)",
            "Coagulation parameters: INR <= 1.3, Platelets >= 100,000/uL, normal bleeding time",
            "Pre-procedure ultrasound documenting two functioning kidneys of normal size (>9 cm) and ruling out hydronephrosis",
            "Fasting for 4 hours; crossmatched blood available on call"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "16G / 18G Automated Spring-Loaded Renal Biopsy Needle", "spec": "16G x 15 cm, 15-20 mm excursion depth, echogenic tip", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "Curvilinear High-Resolution Probe", "spec": "3.5 - 5.0 MHz with needle guide bracket", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "20 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Renal Biopsy Kit", "name": "Renal Pathology Specimen Vials", "spec": "Formalin (Light Microscopy), Glutaraldehyde (Electron Microscopy), Michel's media (Immunofluorescence)", "standardStore": "Nephrology Procedure Cart" }
        ],
        "techniqueSteps": [
            "Position the patient prone with a firm sandbag/pillow under abdomen to flatten lumbar lordosis.",
            "Sonographically identify the lower pole of the left kidney (preferred for mobility and safety).",
            "Verify adequate cortical thickness (>12 mm) and observe respiratory excursion.",
            "Prep and drape the flank; administer 10-15 mL 2% Lignocaine from skin to renal capsule under direct vision.",
            "Make small dermatotomy; introduce 16G or 18G automated needle down to the renal capsule targeting the lower pole cortex.",
            "Instruct patient to hold breath at mid-inspiration; advance needle through capsule into renal cortex and trigger firing mechanism.",
            "Withdraw needle immediately; separate cores under dissecting loupe/stereomicroscope to confirm glomeruli count (>10-15 glomeruli).",
            "Divide cores into formalin, Michel's media, and glutaraldehyde; scan lower pole with color Doppler for hematoma, then maintain supine bed rest for 6 hours."
        ],
        "complications": [
            "Microscopic hematuria (expected, 90-95%)",
            "Macroscopic (gross) hematuria (2-5%, resolves spontaneously)",
            "Perirenal or subcapsular hematoma (5-10%, usually asymptomatic)",
            "Major hemorrhage requiring blood transfusion or transarterial renal embolization (<1%)",
            "Arteriovenous fistula or renal pseudoaneurysm (<0.5%)"
        ],
        "maayTariffInr": 5500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित मूल गुर्दा (नेगेटिव किडनी) बायोप्सी (कॉर्टिकल कोर)",
            "indicationEn": "Evaluation of nephrotic syndrome, acute kidney injury, lupus nephritis, or unexplained renal disease.",
            "indicationHi": "गुर्दे की खराबी, पेशाब में प्रोटीन या खून आना, नेफ्रोटिक सिंड्रोम या ल्यूपस नेफ्राइटिस की सटीक पहचान हेतु गुर्दे का टुकड़ा लेना।",
            "descriptionEn": "Under real-time ultrasound monitoring, an automated biopsy needle is carefully advanced through the back muscles into the outer cortex of the lower pole of the kidney to obtain microscopic tissue containing filtering units (glomeruli).",
            "descriptionHi": "मरीज को पेट के बल लिटाकर, पीठ के निचले हिस्से को सुन्न करने के बाद सोनोग्राफी (अल्ट्रासाउंड) से देखते हुए सुई द्वारा गुर्दे के बाहरी हिस्से (कॉर्टेक्स) से बहुत छोटा टुकड़ा निकाला जाता है।",
            "benefitsEn": [
                "Provides definitive microscopic, immunofluorescence, and electron microscopic diagnosis of kidney disease.",
                "Enables targeted therapy (e.g. specific immunosuppression vs steroids) to preserve kidney function and prevent dialysis.",
                "Accurately assesses the reversibility and degree of kidney chronicity/scarring."
            ],
            "benefitsHi": [
                "गुर्दे की बीमारी का सही नाम और प्रकार पता चलता है जिससे डायलिसिस से बचने का उपचार तय होता है।",
                "स्टेरॉयड या इम्यूनोसप्रेसिव दवाइयों का सही चुनाव संभव हो पाता है।",
                "गुर्दे में आई खराबी ठीक हो सकती है या नहीं, इसका सटीक पूर्वानुमान मिलता है।"
            ],
            "specificRisksEn": [
                "Blood in urine (hematuria) (expected for 1-2 days, rarely persistent in 2-5%).",
                "Flank pain or hematoma around the kidney (5-10%).",
                "Severe hemorrhage requiring blood transfusion or catheter artery embolization (<1%).",
                "Arteriovenous fistula inside the kidney (<0.5%).",
                "Insufficient glomeruli count requiring a repeat biopsy (<5%)."
            ],
            "specificRisksHi": [
                "पेशाब में लाल रंग या खून आना (2-5% मरीजों में, जो आराम और पानी से ठीक हो जाता है)।",
                "पीठ या कमर में दर्द तथा गुर्दे के पास खून का थक्का (हेमेटोमा) (5-10%)।",
                "अत्यधिक रक्तस्राव जिसके लिए खून चढ़ाने या नस बंद करने की जरूरत पड़े (<1%)।",
                "गुर्दे की नसों में असामान्य जुड़ाव (AV Fistula) (<0.5%)।",
                "टुकड़े में पर्याप्त फिल्टर (Glomeruli) न आने पर दोबारा जांच (<5%)।"
            ],
            "alternativesEn": "Empirical treatment with corticosteroids without tissue confirmation, conservative renal surveillance, or surgical open kidney biopsy.",
            "alternativesHi": "बिना बायोप्सी के अंदाजे से स्टेरॉयड शुरू करना, या ऑपरेशन करके गुर्दा खोलकर टुकड़ा लेना।",
            "sedationTypeEn": "Local anesthesia with optional mild IV sedation.",
            "sedationTypeHi": "पीठ पर स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
        }
    },
    {
        "id": "usg-renal-transplant-biopsy",
        "name": "Ultrasound-Guided Renal Allograft / Transplant Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV007",
        "rghsCode": "693 / 41",
        "icd10": "T86.11 (Kidney transplant rejection) / T86.19 (Other kidney transplant complications)",
        "indications": [
            "Deteriorating renal allograft function (rising serum creatinine post-transplant)",
            "Distinction between acute cellular rejection, antibody-mediated rejection (ABMR), and CNI nephrotoxicity",
            "Polyomavirus (BK virus) nephropathy or CMV nephritis assessment",
            "Protocol surveillance biopsy in sensitized or high-immunological risk transplant recipients"
        ],
        "preOpCriteria": [
            "Coagulation screen: INR <= 1.3, Platelets >= 80,000/uL",
            "Blood pressure strictly normalized (< 130/80 mmHg) to reduce post-biopsy bleed risk",
            "Pre-biopsy Doppler scan verifying patent renal transplant artery, vein, and absence of hydronephrosis",
            "Patient fasting 3-4 hours; informed written consent obtained"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "16G / 18G Automated Core Biopsy Needle", "spec": "11-15 cm length, 15 mm throw, echogenic bevel", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "High-Frequency Linear / Curved Probe", "spec": "5 - 7.5 MHz linear or 3.5 - 5 MHz curved", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "10 mL ampoule", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Media", "name": "Triple Transplant Histology Media", "spec": "Formalin (LM), Michel's (IF: C4d stain), Glutaraldehyde (EM)", "standardStore": "Transplant Coordinator Store" }
        ],
        "techniqueSteps": [
            "Position patient supine; locate the transplanted kidney in the right or left iliac fossa.",
            "Perform Doppler imaging to identify the renal cortex of the upper pole, away from the renal hilum, ureter, and iliac vessels.",
            "Sterilize the iliac fossa and drape under strict aseptic surgical conditions.",
            "Infiltrate 2% Lignocaine into skin, subcutaneous layer, and allograft capsule under sonographic guidance.",
            "Advance 16G or 18G automated core needle under continuous real-time visualization tangential to the upper pole cortex.",
            "Trigger biopsy during shallow breathing; verify core sample adequacy and confirm presence of cortical tissue with glomeruli.",
            "Obtain 2 passes, dividing cores for LM, IF (specifically for C4d staining), and EM.",
            "Perform immediate color Doppler assessment of puncture tract to exclude arteriovenous fistula or active bleeding; apply pressure for 10 minutes and enforce supine bed rest for 4 hours."
        ],
        "complications": [
            "Transient microscopic/gross hematuria (2-4%)",
            "Periallograft hematoma (2-5%, mostly subclinical)",
            "Arteriovenous fistula (AVF) or allograft pseudoaneurysm (1-2%)",
            "Major hemorrhage requiring allograft exploration or embolization (<0.5%)",
            "Inadvertent laceration of adjacent colon or iliac vessels (<0.1%)"
        ],
        "maayTariffInr": 6000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित गुर्दा प्रत्यारोपण (किडनी ट्रांसप्लांट) बायोप्सी",
            "indicationEn": "Investigation of kidney transplant dysfunction, acute/chronic graft rejection, or BK virus nephropathy.",
            "indicationHi": "ट्रांसप्लांट की गई नई किडनी में खराबी, सीरम क्रिएटिनिन बढ़ने या ग्राफ्ट रिजेक्शन की जांच हेतु टुकड़ा लेना।",
            "descriptionEn": "Under real-time ultrasound visualization, an automated needle is inserted into the outer cortex of the transplanted kidney located in the lower abdomen to obtain small tissue cores to diagnose transplant rejection or medication toxicity.",
            "descriptionHi": "पेट के निचले हिस्से में मौजूद नई ट्रांसप्लांटेड किडनी को सोनोग्राफी से देखकर, त्वचा को सुन्न करके एक बारीक सुई से गुर्दे का छोटा सा टुकड़ा निकाला जाता है ताकि रिजेक्शन की तुरंत पहचान हो सके।",
            "benefitsEn": [
                "Differentiates acute rejection from anti-rejection drug toxicity (CNI toxicity) or infection.",
                "Allows rapid initiation of targeted therapy to reverse rejection and rescue the transplanted kidney.",
                "Evaluates specific immune markers (C4d) for antibody-mediated rejection."
            ],
            "benefitsHi": [
                "यह स्पष्ट होता है कि किडनी रिजेक्ट हो रही है या दवाओं के दुष्प्रभाव से क्रिएटिनिन बढ़ा है।",
                "समय रहते सही इलाज शुरू करके ट्रांसप्लांटेड किडनी को फेल होने से बचाया जा सकता है।",
                "ग्राफ्ट की सुरक्षा और जीवन अवधि बढ़ाने में अत्यंत सहायक।"
            ],
            "specificRisksEn": [
                "Mild blood in urine (2-4%, usually resolves within 24 hours).",
                "Hematoma around the transplanted kidney (2-5%).",
                "Arteriovenous fistula (AVF) or vascular pseudoaneurysm (1-2%).",
                "Significant bleeding requiring blood transfusion or catheter intervention (<0.5%).",
                "Need for repeat biopsy if sample lacks adequate glomeruli (<3%)."
            ],
            "specificRisksHi": [
                "पेशाब में हल्का लाल रंग आना (2-4%, 24 घंटे में स्वतः ठीक हो जाता है)।",
                "किडनी के आसपास खून का थक्का जमना (2-5%)।",
                "किडनी की नसों में असामान्य जुड़ाव (AVF) या गुब्बारा बनना (1-2%)।",
                "गंभीर ब्लीडिंग जिसके लिए अतिरिक्त उपचार की आवश्यकता पड़े (<0.5%)।",
                "सैंपल पर्याप्त न आने पर दोबारा जांच का जोखिम (<3%)।"
            ],
            "alternativesEn": "Empirical escalation of antirejection medications (IV methylprednisolone pulse), donor-specific antibody (DSA) testing, or watchful waiting.",
            "alternativesHi": "अंदाजे से स्टेरॉयड की तेज खुराक देना, खून में एंटीबॉडी की जांच, अथवा निगरानी रखना।",
            "sedationTypeEn": "Local anesthesia with optional mild oral/IV conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं हल्की शामक दवा।"
        }
    },
    {
        "id": "usg-renal-mass-core-biopsy",
        "name": "Ultrasound-Guided Renal Mass Core Needle Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV008",
        "rghsCode": "693 / 41",
        "icd10": "C64.9 (Malignant neoplasm of unspecified kidney, except renal pelvis) / D41.00 (Neoplasm of uncertain behavior of kidney)",
        "indications": [
            "Histopathological characterization of solid or complex cystic renal mass prior to systemic therapy or percutaneous ablation",
            "Differentiating Renal Cell Carcinoma (RCC) subtypes (clear cell, papillary, chromophobe) from benign oncocytoma or angiomyolipoma",
            "Evaluation of suspected metastatic lesion to the kidney or primary renal lymphoma",
            "Small renal mass (cT1a < 4 cm) under active surveillance protocol in elderly or high-risk surgical candidates"
        ],
        "preOpCriteria": [
            "Coagulation parameters: INR <= 1.4, Platelets >= 60,000/uL",
            "Contrast-enhanced CT or MRI reviewed to assess tumor vascularity, necrosis, and perinephric fat invasion",
            "Fasting 4 hours; blood pressure maintained < 140/90 mmHg",
            "Target lesion clearly visualized on real-time ultrasound with safe acoustic window avoiding bowel and spleen/liver"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G Coaxial Core Biopsy System", "spec": "17G outer cannula with 18G semi-automated cutting needle (15 cm)", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "Curvilinear Abdominal Probe with Guide", "spec": "3.5 - 5.0 MHz with multi-angle needle guide", "standardStore": "USG Suite 922" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "20 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Container", "name": "Formalin Vials & Touch Imprint Slides", "spec": "10% neutral buffered formalin vials and cytology slides", "standardStore": "Pathology Consumables Store" }
        ],
        "techniqueSteps": [
            "Position patient prone or lateral decubitus; sonographically locate the renal tumor and evaluate vascularity using Color Doppler.",
            "Choose a needle trajectory that traverses a thin rim of normal renal parenchyma to promote hemostasis and prevent capsular pseudoaneurysm.",
            "Aseptically prepare and drape flank; infiltrate skin, retroperitoneal fat, and renal capsule with 15 mL 2% Lignocaine.",
            "Introduce 17G coaxial introducer needle under real-time acoustic control to the edge of the viable solid tumor mass.",
            "Remove stylet and insert 18G cutting needle through coaxial cannula into the tumor periphery, avoiding central necrotic areas.",
            "Trigger cutting needle during breath-hold; obtain 2-3 cores for histopathology and immunohistochemical profiling.",
            "Perform tract plugging with Gelfoam slurry if significant hypervascularity is noted; carefully withdraw the coaxial sheath.",
            "Scan kidney and retroperitoneum with ultrasound to verify absence of active bleed or hematoma; apply pressure dressing."
        ],
        "complications": [
            "Flank pain or local discomfort (10-15%)",
            "Perirenal or subcapsular hematoma (2-4%)",
            "Gross hematuria (1-3%, self-limiting)",
            "Major hemorrhage requiring embolization (<0.5%)",
            "Tumor tract seeding (exceedingly rare, <0.01%)"
        ],
        "maayTariffInr": 5500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित गुर्दा गांठ (रीनल मास) कोर नीडल बायोप्सी",
            "indicationEn": "Histopathological typing of kidney tumor to guide targeted therapy, ablation, or surgery.",
            "indicationHi": "गुर्दे की गांठ में कैंसर का प्रकार जानने और सही इलाज (सर्जरी, एब्लेशन या दवा) तय करने हेतु सुई से टुकड़ा लेना।",
            "descriptionEn": "Under real-time sonographic guidance, a coaxial biopsy needle is precisely guided into the solid kidney mass through the back or side to collect tissue cores for pathology and cancer typing.",
            "descriptionHi": "पीठ या कमर के हिस्से को सुन्न करके, सोनोग्राफी से देखते हुए बारीक बायोप्सी सुई सीधे गुर्दे की गांठ में डाली जाती है और जांच के लिए छोटा सा टुकड़ा निकाला जाता है।",
            "benefitsEn": [
                "Definitively confirms whether renal mass is benign (e.g. oncocytoma, angiomyolipoma) or malignant RCC.",
                "Prevents unnecessary kidney removal surgery in benign or metastatic disease.",
                "Provides histological subtype to guide targeted immunotherapy or thermal ablation."
            ],
            "benefitsHi": [
                "गांठ साधारण है या कैंसर (RCC), इसका पक्का पता चलता है।",
                "साधारण गांठ होने पर पूरी किडनी निकालने के बड़े ऑपरेशन से बचा जा सकता है।",
                "कैंसर के प्रकार के अनुसार सही दवा और आधुनिक इलाज तय होता है।"
            ],
            "specificRisksEn": [
                "Flank pain and soreness for 1-2 days (10-15%).",
                "Blood in urine (hematuria) in 1-3% (usually clears spontaneously).",
                "Perirenal hematoma or bleeding around kidney (2-4%).",
                "Severe hemorrhage needing blood transfusion or embolization (<0.5%).",
                "Non-diagnostic or necrotic sample requiring repeat biopsy (<5%)."
            ],
            "specificRisksHi": [
                "कमर में 1-2 दिन तक हल्का दर्द या भारीपन (10-15%)।",
                "पेशाब में खून आना (1-3%, सामान्यतः स्वतः बंद हो जाता है)।",
                "गुर्दे के चारों ओर खून का थक्का जमना (2-4%)।",
                "अत्यधिक रक्तस्राव जिसके लिए नस बंद करने के प्रोसीजर की आवश्यकता हो (<0.5%)।",
                "टुकड़े में केवल मृत हिस्सा आने पर दोबारा बायोप्सी की संभावना (<5%)।"
            ],
            "alternativesEn": "Immediate partial or radical nephrectomy surgery without prior biopsy, percutaneous CT-guided biopsy, or imaging surveillance.",
            "alternativesHi": "बिना बायोप्सी के सीधे ऑपरेशन द्वारा किडनी निकालना, सीटी-निर्देशित बायोप्सी, अथवा सीटी स्कैन से निगरानी रखना।",
            "sedationTypeEn": "Local anesthesia with optional conscious IV sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार हल्की शामक दवा।"
        }
    },
    {
        "id": "ct-renal-mass-core-biopsy",
        "name": "CT-Guided Renal Mass Core Needle Biopsy",
        "category": "Non-Vascular: Image-Guided Biopsies",
        "code": "2849-NV009",
        "rghsCode": "693 / 42",
        "icd10": "C64.9 (Malignant neoplasm of kidney) / D41.01 (Neoplasm of uncertain behavior of right kidney)",
        "indications": [
            "Small endophytic, upper pole, or deeply located renal tumors poorly visualized on ultrasound",
            "Obese patients or acoustic shadowing precluding safe ultrasound guidance",
            "Complex renal mass with intimate relationship to colon, duodenum, or spleen requiring sub-millimeter CT precision",
            "Histological confirmation prior to CT-guided cryoablation or radiofrequency ablation"
        ],
        "preOpCriteria": [
            "Coagulation profile within 48h: INR <= 1.4, Platelets >= 60,000/uL",
            "Renal function: Serum Creatinine and eGFR documented",
            "Fasting 4 hours; IV cannula placed in upper extremity",
            "Prior contrast-enhanced CT reviewed to plan patient positioning (prone, oblique, or lateral)"
        ],
        "hardware": [
            { "category": "Biopsy Needle", "name": "18G Coaxial Bone/Soft Tissue Biopsy Needle Set", "spec": "17G x 13-15 cm introducer with 18G semi-automated core needle", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "CT Localization", "name": "Radiopaque Skin Grid & Laser Marker", "spec": "Adhesive radio-dense grid with CT laser alignment", "standardStore": "CT Suite D-9211" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "20 mL vial", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Preparation", "name": "Formalin Vials & Saline Vials", "spec": "10% formalin and sterile normal saline for molecular diagnostics", "standardStore": "Pathology Receiving Counter" }
        ],
        "techniqueSteps": [
            "Position patient prone or in modified oblique position on the CT table with radiopaque grid on flank.",
            "Perform limited low-dose unenhanced (or contrast-enhanced) planning CT scan to map the renal mass and trajectory.",
            "Mark skin entry site using gantry laser lights; measure depth and angle avoiding pleura, rib, and bowel loops.",
            "Scrub, sterilize, and drape flank; infiltrate 2% Lignocaine from skin down to Gerota's fascia.",
            "Introduce 17G coaxial introducer cannula along calculated trajectory; perform check CT scan to confirm tip at tumor margin.",
            "Pass 18G automated cutting needle through cannula into viable enhancing tumor periphery.",
            "Trigger needle during suspended respiration; obtain 2-3 adequate core specimens.",
            "Perform post-biopsy non-contrast CT to check for perinephric hematoma or retroperitoneal bleeding; apply sterile dressing."
        ],
        "complications": [
            "Perirenal or subcapsular hematoma (3-6%, usually stable)",
            "Flank pain / muscular ache (10-15%)",
            "Gross hematuria (1-3%)",
            "Retroperitoneal bleed requiring intervention (<0.5%)",
            "Pneumothorax if high upper-pole lesion (<0.5%)"
        ],
        "maayTariffInr": 8500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित गुर्दा गांठ (रीनल मास) कोर नीडल बायोप्सी",
            "indicationEn": "Sub-millimeter targeted sampling of deep, endophytic, or ultrasound-obscured kidney masses.",
            "indicationHi": "सोनोग्राफी पर न दिखने वाली या गहराई में स्थित गुर्दे की गांठ की सटीक जांच हेतु सीटी स्कैन की निगरानी में टुकड़ा लेना।",
            "descriptionEn": "Under precise low-dose CT guidance, a coaxial biopsy needle is guided through the back into the deep renal tumor to collect tissue samples while millimeter-by-millimeter avoiding bowel, pleura, and major vessels.",
            "descriptionHi": "सीटी स्कैन मशीन की बारीक निगरानी में पीठ के रास्ते एक सुई सीधे गुर्दे की गहरी गांठ तक पहुंचाई जाती है ताकि आंतों और नसों को बचाते हुए जांच के लिए सुरक्षित टुकड़ा निकाला जा सके।",
            "benefitsEn": [
                "Allows safe sampling of deeply positioned or small kidney tumors that cannot be safely reached under ultrasound.",
                "Provides sub-millimeter precision, avoiding accidental puncture of intestines or lungs.",
                "Delivers definitive diagnosis to plan minimally invasive ablation or targeted therapy."
            ],
            "benefitsHi": [
                "गहराई में स्थित गांठों का भी बिना किसी खतरे के सटीक टुकड़ा लिया जा सकता है।",
                "आंतों या फेफड़ों को चोट लगने से बचाने की सबसे सटीक तकनीक।",
                "गुर्दा कैंसर के सही प्रकार का पता लगाकर सटीक उपचार संभव होता है।"
            ],
            "specificRisksEn": [
                "Flank soreness or muscular pain (10-15%).",
                "Perirenal hematoma or internal bleeding around kidney (3-6%).",
                "Transient blood in urine (1-3%).",
                "Rare major bleeding needing blood transfusion or embolization (<0.5%).",
                "Small pneumothorax for high upper-pole lesions (<0.5%)."
            ],
            "specificRisksHi": [
                "कमर या मांसपेशियों में 1-2 दिन हल्का दर्द (10-15%)।",
                "गुर्दे के आसपास खून का थक्का जमना (3-6%)।",
                "पेशाब में हल्का खून आना (1-3%)।",
                "अत्यधिक रक्तस्राव जिसके लिए अतिरिक्त इलाज की जरूरत पड़े (<0.5%)।",
                "ऊपरी हिस्से की गांठ में फेफड़े में मामूली हवा भरना (<0.5%)।"
            ],
            "alternativesEn": "Ultrasound-guided biopsy (if window accessible), primary surgical resection (nephrectomy), or CT-monitored active surveillance.",
            "alternativesHi": "अल्ट्रासाउंड बायोप्सी, सीधे ऑपरेशन द्वारा गांठ/गुर्दा निकालना, या सीटी स्कैन द्वारा केवल निगरानी।",
            "sedationTypeEn": "Local anesthesia with optional IV conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार हल्की शामक दवा।"
        }
    }
]
