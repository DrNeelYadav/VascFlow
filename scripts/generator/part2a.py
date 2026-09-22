# -*- coding: utf-8 -*-
"""
Part 2A: Hepatic, Hydatid & Pancreatic Drainage (Procedures 54 to 63)
"""

DATA_PART2A = [
    {
        "id": "usg-liver-abscess-aspiration",
        "name": "Ultrasound-Guided Liver Abscess Aspiration",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV054",
        "rghsCode": "693 / 41",
        "icd10": "K75.0 (Abscess of liver) / A06.4 (Amebic liver abscess)",
        "indications": [
            "Small to moderate liver abscess (<5 cm) with clinical symptoms of pain and persistent pyrexia",
            "Diagnostic fluid sampling to differentiate amebic (anchovy sauce) from pyogenic (purulent) abscess",
            "Urgent cavity decompression to relieve pain or impending rupture risk",
            "Microbiological culture, Gram stain, and Entamoeba histolytica serology/antigen testing"
        ],
        "preOpCriteria": [
            "Coagulation status: INR <= 1.5, Platelets >= 50,000/uL",
            "Broad-spectrum antimicrobial therapy initiated (IV Metronidazole + 3rd gen Cephalosporin)",
            "Pre-procedure ultrasound documenting clear liquefaction and absence of intervening pleura or gallbladder",
            "Fasting 3-4 hours; baseline vitals stable"
        ],
        "hardware": [
            { "category": "Aspiration Needle", "name": "18G - 20G Chiba / Spinal Aspiration Needle", "spec": "18G/20G x 15-20 cm needle with stylet and echogenic tip", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "Curvilinear Abdominal Probe", "spec": "3.5 - 5.0 MHz curved array", "standardStore": "USG Suite 922" },
            { "category": "Aspiration Syringe", "name": "20 mL / 50 mL Luer Lock Syringes with 3-Way Stopcock", "spec": "Sterile high-volume aspiration kit", "standardStore": "DDC-14 Central" },
            { "category": "Culture Containers", "name": "Sterile Microbiology Specimen Tubes", "spec": "Aerobic, anaerobic culture bottles and sterile transport tube", "standardStore": "Microbiology Collection Unit" }
        ],
        "techniqueSteps": [
            "Position patient supine or left lateral decubitus; sonographically evaluate abscess size, location, and liquefaction.",
            "Choose a needle trajectory traversing a rim of normal liver parenchyma to minimize peritoneal leakage.",
            "Sterilize the right upper abdominal / lower intercostal skin and drape aseptically.",
            "Infiltrate 10-15 mL 2% Lignocaine into skin, subcutaneous fat, and liver capsule under real-time guidance.",
            "Advance 18G/20G Chiba needle under continuous real-time acoustic control directly into the center of the cavity.",
            "Withdraw stylet, attach 3-way stopcock with 50 mL syringe, and aspirate purulent cavity contents until collapsed.",
            "Record total aspirated volume, color, and consistency (e.g. anchovy sauce vs foul-smelling creamy pus).",
            "Withdraw needle; apply gentle compression over puncture site; scan with Color Doppler to confirm lack of bleeding; apply dressing."
        ],
        "complications": [
            "Post-aspiration fever spike / transient bacteremia (5-10%)",
            "Right upper quadrant pain (10-15%)",
            "Intraperitoneal fluid leak / localized peritonitis (1-2%)",
            "Intrahepatic hematoma (<1%)",
            "Abscess recurrence requiring catheter drainage (15-25%)"
        ],
        "maayTariffInr": 3500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित लिवर फोड़ा एस्पिरेशन (मवाद निकालना)",
            "indicationEn": "Needle evacuation and diagnostic culture of liver abscess to relieve pain and guide antibiotics.",
            "indicationHi": "लिवर के फोड़े (अमीबिक या बैक्टीरियल मवाद) से दर्द में तुरंत राहत और सटीक एंटीबायोटिक तय करने हेतु सुई द्वारा मवाद निकालना।",
            "descriptionEn": "Under real-time ultrasound guidance, a needle is inserted through the numbed abdominal wall directly into the liver abscess to aspirate and drain the infected pus completely, sending samples for bacterial and amoebic testing.",
            "descriptionHi": "सोनोग्राफी से लिवर के फोड़े को देखकर, पेट की त्वचा को सुन्न करके एक सुई सीधे मवाद की थैली में डाली जाती है और सिरिंज की मदद से सारा मवाद बाहर खींच लिया जाता है ताकि मरीज को तुरंत दर्द से आराम मिले।",
            "benefitsEn": [
                "Immediate relief of severe abdominal pain and toxic pressure within the liver.",
                "Provides pus for bacterial culture and antibiotic sensitivity testing.",
                "Fast, simple day-care procedure without leaving an indwelling drainage bag."
            ],
            "benefitsHi": [
                "पेट के असहनीय दर्द और भारीपन से तुरंत आराम मिलता है।",
                "मवाद की जांच से सही एंटीबायोटिक दवा का चुनाव संभव होता है।",
                "कोई बाहरी नली या बैग नहीं लगाना पड़ता, कुछ ही मिनटों में प्रक्रिया पूरी हो जाती है।"
            ],
            "specificRisksEn": [
                "Temporary fever spike or chills after aspiration (5-10%, treated with antibiotics).",
                "Right upper quadrant pain for 1-2 days (10-15%).",
                "Mild pus leakage into peritoneal cavity causing localized pain (1-2%).",
                "Abscess re-accumulating, requiring repeat aspiration or catheter drainage (15-25%).",
                "Minor liver bleeding (<1%)."
            ],
            "specificRisksHi": [
                "मवाद निकालने के बाद अस्थायी रूप से बुखार या कंपकंपी आना (5-10%)।",
                "पेट के ऊपरी दाहिने हिस्से में हल्का दर्द (10-15%)।",
                "मवाद का दोबारा भर जाना जिसके लिए नली (कैथेटर) डालने की आवश्यकता पड़ सकती है (15-25%)।",
                "पेट के अंदर हल्का मवाद रिसने का जोखिम (1-2%)।",
                "लिवर में हल्का खून का थक्का जमना (<1%)।"
            ],
            "alternativesEn": "Percutaneous Catheter Drainage (PCD) with indwelling pigtail catheter, medical antibiotic therapy alone (if small), or open surgical drainage.",
            "alternativesHi": "मवाद निकालने के लिए पक्की नली (PCD) डालना, केवल दवाइयों से इलाज, या पेट का बड़ा ऑपरेशन।",
            "sedationTypeEn": "Local anesthesia with optional mild IV analgesia.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक दवा।"
        }
    },
    {
        "id": "pcd-amebic-liver-abscess",
        "name": "Ultrasound-Guided Percutaneous Catheter Drainage (PCD) of Amebic Liver Abscess",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV055",
        "rghsCode": "693 / 41",
        "icd10": "A06.4 (Amebic liver abscess) / K75.0 (Abscess of liver)",
        "indications": [
            "Large amebic liver abscess (>5 cm in diameter or volume > 100 mL)",
            "Failure of medical therapy (persistent fever and pain after 48-72 hours of IV Metronidazole)",
            "Abscess located in left lobe or peripheral right lobe with imminent risk of intraperitoneal or pericardial rupture",
            "Secondarily infected amebic liver abscess with systemic toxic features"
        ],
        "preOpCriteria": [
            "Coagulation screen: INR <= 1.5, Platelets >= 50,000/uL",
            "Intravenous Metronidazole (750 mg TID) and 3rd-generation Cephalosporin administered",
            "Bedside ultrasound confirming safe parenchymal puncture path avoiding pleural reflection and gallbladder",
            "Fasting 4 hours; closed drainage bag and connector ready"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "8.5F - 10F Locking Pigtail Drainage Catheter Kit", "spec": "8.5F/10F x 25-30 cm hydrophilic locking pigtail with trocar and cannula", "standardStore": "Central IR Consignment Store" },
            { "category": "Access Needle & Wire", "name": "18G Chiba Needle & 0.038 J-Tip Stiff Guidewire", "spec": "18G x 15 cm needle with 0.038 x 80 cm Amplatz wire", "standardStore": "Cath Lab Access Cabinet" },
            { "category": "Ultrasound Transducer", "name": "Curvilinear Abdominal Probe", "spec": "3.5 - 5.0 MHz curved array", "standardStore": "USG Suite 922" },
            { "category": "Drainage Bag", "name": "Closed Gravity Drainage Bag System", "spec": "1000 mL sterile collection bag with luer-lock anti-reflux connector", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient supine or left lateral decubitus; sonographically evaluate abscess dimensions and locate the deepest fluid pocket.",
            "Choose a transhepatic trajectory traversing at least 1-2 cm of healthy liver parenchyma.",
            "Sterilize the right flank/hypochondrium and drape under strict sterile surgical precautions.",
            "Infiltrate 15 mL 2% Lignocaine from skin through intercostal/subcostal tissues into Glisson's capsule.",
            "Puncture cavity with 18G needle under real-time acoustic guidance; aspirate characteristic 'anchovy-paste' fluid.",
            "Advance 0.038 J-tip stiff guidewire through needle, coiling multiple loops inside the abscess cavity.",
            "Dilate tract sequentially using 8F and 10F fascial dilators over the guidewire.",
            "Advance 8.5F or 10F locking pigtail catheter over wire into cavity; lock the pigtail suture tightly; evacuate pus completely; connect to closed gravity drainage bag."
        ],
        "complications": [
            "Post-drainage transient bacteremia or rigors (5-10%)",
            "Catheter blockage by thick necrotic debris (5-10%, managed with saline irrigation)",
            "Premature catheter dislodgement (2-4%)",
            "Subcapsular liver bleeding (<1%)",
            "Pneumothorax / empyema if high intercostal approach (<0.5%)"
        ],
        "maayTariffInr": 7000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित परक्यूटेनियस कैथेटर ड्रेनेज (PCD) - अमीबिक लिवर फोड़ा (पिगटेल नली डालना)",
            "indicationEn": "Catheter drainage (PCD) of large amebic liver abscess failing medical therapy or at risk of rupture.",
            "indicationHi": "दवाइयों से ठीक न होने वाले या फटने के कगार पर पहुंचे बड़े अमीबिक लिवर फोड़े में नली (पिगटेल कैथेटर) डालकर मवाद निकालना।",
            "descriptionEn": "Under continuous real-time ultrasound guidance, a soft locking pigtail drainage tube is inserted through the abdominal wall into the large amebic liver abscess to continuously drain the thick necrotic pus into a collection bag until healed.",
            "descriptionHi": "सोनोग्राफी में देखकर पेट के दाहिने हिस्से को सुन्न करके लिवर के बड़े फोड़े में एक विशेष मुड़ी हुई नली (पिगटेल कैथेटर) डाली जाती है, जो थैली से जुड़कर लगातार मवाद बाहर निकालती रहती है जब तक कि फोड़ा पूरी तरह सूख न जाए।",
            "benefitsEn": [
                "Prevents catastrophic, life-threatening rupture of the abscess into the abdomen, chest, or heart sac.",
                "Rapidly resolves fever, toxic symptoms, and severe abdominal pain within 24-48 hours.",
                "Complete cure without any surgical cuts or general anesthesia."
            ],
            "benefitsHi": [
                "फोड़े के फटने के जानलेवा खतरे से तुरंत बचाव होता है।",
                "24 से 48 घंटे के अंदर बुखार, जहर फैलने और गंभीर दर्द से पूरी राहत मिलती है।",
                "बिना किसी बड़े ऑपरेशन या बेहोश किए मात्र एक नली से पूरा इलाज हो जाता है।"
            ],
            "specificRisksEn": [
                "Temporary shivering or fever spike when the drain is placed (5-10%, treated with medications).",
                "Drain tube clogging with thick pus requiring saline flushes (5-10%).",
                "Pain around the catheter insertion site (10-15%).",
                "Accidental pulling out or slipping of the tube (2-4%).",
                "Minor internal bleeding or hematoma (<1%)."
            ],
            "specificRisksHi": [
                "नली डालने के बाद कुछ समय के लिए तेज कंपकंपी या बुखार आना (5-10%)।",
                "गाढ़े मवाद के कारण नली का बंद होना जिसे सलाइन से धोकर चालू किया जाता है (5-10%)।",
                "नली वाली जगह पर 1-2 दिन दर्द (10-15%)।",
                "नली के बाहर खिसकने या निकलने का जोखिम (2-4%)।",
                "लिवर में हल्का खून का थक्का जमना (<1%)।"
            ],
            "alternativesEn": "Repeated needle aspirations, escalated IV antibiotic therapy, or open surgical drainage / laparotomy.",
            "alternativesHi": "बार-बार सुई से मवाद निकालना, केवल तेज दवाइयां चलाना, या पेट का बड़ा ऑपरेशन (Laparotomy)।",
            "sedationTypeEn": "Local anesthesia with IV analgesia and light conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक व शामक दवा।"
        }
    },
    {
        "id": "pcd-pyogenic-liver-abscess",
        "name": "Ultrasound-Guided Percutaneous Catheter Drainage of Pyogenic Liver Abscess",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV056",
        "rghsCode": "693 / 41",
        "icd10": "K75.0 (Abscess of liver) / A41.9 (Sepsis, unspecified organism)",
        "indications": [
            "Pyogenic (bacterial) liver abscess with severe sepsis, high spiking fevers, and leukocytosis",
            "Multiloculated or viscous abscess cavity > 3-4 cm in diameter",
            "Biliary tract-related liver abscess (ascending cholangitis origin)",
            "Immuno-compromised or diabetic patients with high risk of septic shock"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.5, Platelets >= 50,000/uL",
            "Hemodynamic stability supported with IV fluids and broad-spectrum antibiotics (Pip-Taz / Carbapenem)",
            "Bedside ultrasound confirming liquefaction and acoustic access route",
            "Fasting 4 hours; drainage kit ready at bedside"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "10F - 12F Multi-Sidehole Locking Pigtail Catheter", "spec": "10F/12F x 30 cm radiopaque pigtail with large drainage sideholes", "standardStore": "Central IR Consignment Store" },
            { "category": "Access System", "name": "18G Trocar / Chiba Access Set", "spec": "18G x 15 cm needle with 0.038 Amplatz Extra Stiff wire", "standardStore": "Cath Lab Access Cabinet" },
            { "category": "Ultrasound Transducer", "name": "Curvilinear Abdominal Probe", "spec": "3.5 - 5.0 MHz curved array", "standardStore": "USG Suite 922" },
            { "category": "Drainage Bag & Flush", "name": "Closed Drainage Bag & Sterile Saline Flush", "spec": "1000 mL collection bag and 100 mL sterile saline for intermittent irrigation", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient supine or oblique; sonographically survey liver to locate main abscess cavity and internal septations.",
            "Select puncture angle that traverses a healthy parenchymal margin, avoiding pleura, lung, colon, and gallbladder.",
            "Sterilize right upper quadrant; infiltrate 15-20 mL 2% Lignocaine down to Glisson's capsule.",
            "Puncture cavity with 18G needle under continuous real-time acoustic control; aspirate thick creamy bacterial pus.",
            "Pass 0.038 Amplatz Extra Stiff guidewire into cavity, ensuring multiple turns around cavity perimeter.",
            "Serial tract dilation over wire with 8F, 10F, and 12F dilators.",
            "Advance 10F or 12F large-bore locking pigtail catheter into the abscess; securely lock pigtail mechanism.",
            "Completely evacuate viscous pus; gently flush cavity with 10-20 mL sterile normal saline until return is clear; connect to closed gravity bag."
        ],
        "complications": [
            "Transient bacteremic septic spike / rigors (5-10%)",
            "Catheter clogging with thick pus / fibrin (10-15%, managed with saline flushes)",
            "Catheter displacement (2-4%)",
            "Subcapsular hematoma or intrahepatic bleeding (<1%)",
            "Bilio-cutaneous fistula (<1%)"
        ],
        "maayTariffInr": 7500,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित परक्यूटेनियस कैथेटर ड्रेनेज (PCD) - पायोजेनिक लिवर फोड़ा (बड़ा बैक्टीरियल फोड़ा)",
            "indicationEn": "Catheter drainage (PCD) of pyogenic bacterial liver abscess causing sepsis and high fevers.",
            "indicationHi": "बैक्टीरिया द्वारा लिवर में बने गंभीर मवाद के फोड़े में नली (कैथेटर) डालकर लगातार मवाद निकालना ताकि सेप्सिस और बुखार नियंत्रित हो सके।",
            "descriptionEn": "Under real-time ultrasound monitoring, a large-bore locking pigtail drainage catheter is inserted into the bacterial liver abscess to continuously drain out the thick infection and allow regular saline flushes until the infection completely resolves.",
            "descriptionHi": "सोनोग्राफी से देखकर पेट को सुन्न करने के बाद एक विशेष चौड़े छेद वाली मुड़ी हुई नली (पिगटेल कैथेटर) लिवर के फोड़े में डाली जाती है। यह नली लगातार गाढ़ा मवाद बाहर निकालती है और इसके रास्ते सलाइन से धोकर फोड़े को पूरी तरह साफ किया जाता है।",
            "benefitsEn": [
                "Rapidly eliminates severe bacterial sepsis, controlling life-threatening high fevers and chills.",
                "Provides continuous drainage of thick viscous pus that cannot be cleared by simple needle aspiration.",
                "Cures complex multilocular liver abscesses without open abdominal surgery."
            ],
            "benefitsHi": [
                "जानलेवा सेप्सिस और तेज बुखार पर तुरंत नियंत्रण मिलता है।",
                "गाढ़ा मवाद जो सुई से नहीं निकल पाता, वह इस चौड़ी नली से लगातार साफ होता रहता है।",
                "बिना पेट खोले ही मरीज आईसीयू और गंभीर खतरे से बाहर आ जाता है।"
            ],
            "specificRisksEn": [
                "Post-drainage fever and rigors during initial cavity decompression (5-10%).",
                "Tube blockage with thick pus requiring regular saline flushes (10-15%).",
                "Pain and soreness at the catheter exit site (10-15%).",
                "Accidental dislodgement of the catheter (2-4%).",
                "Minor bleeding or hematoma in the liver (<1%)."
            ],
            "specificRisksHi": [
                "नली डालने के तुरंत बाद तेज कंपकंपी या बुखार आना (5-10%)।",
                "गाढ़े मवाद से नली बंद होना जिसे नर्स या डॉक्टर सलाइन से धोकर चालू करते हैं (10-15%)।",
                "नली के पास त्वचा पर 1-2 दिन हल्का दर्द (10-15%)।",
                "नली का खिसकना या बाहर निकल जाना (2-4%)।",
                "लिवर में हल्का खून का रिसाव (<1%)।"
            ],
            "alternativesEn": "Repeated needle aspirations, prolonged intravenous antibiotic therapy alone, or surgical open drainage (laparotomy).",
            "alternativesHi": "बार-बार सुई से मवाद खींचना, केवल दवाओं पर निर्भर रहना, या पेट का बड़ा ऑपरेशन।",
            "sedationTypeEn": "Local anesthesia with IV analgesia and conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक व शामक दवा।"
        }
    },
    {
        "id": "usg-hydatid-cyst-pair",
        "name": "Ultrasound-Guided Percutaneous Drainage of Hydatid Cyst (PAIR Technique)",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV057",
        "rghsCode": "693 / 41",
        "icd10": "B67.0 (Echinococcus granulosus infection of liver) / B67.8 (Echinococcosis, unspecified)",
        "indications": [
            "Unilocular hepatic hydatid cysts (WHO Stage CE1 and CE3a) >= 5 cm in diameter",
            "Symptomatic hydatid cysts unresponsive to albendazole medical therapy alone",
            "Inoperable surgical candidates, recurrent cysts post-surgery, or patient refusal of surgery",
            "Exclusion of communicating biliary fistula (cystobiliary communication)"
        ],
        "preOpCriteria": [
            "MANDATORY PRE-TREATMENT WITH ALBENDAZOLE (400 mg BD) for at least 1-2 weeks prior to reduce risk of secondary peritoneal hydatidosis",
            "Coagulation status: INR <= 1.4, Platelets >= 60,000/uL",
            "Exclusion of biliary communication: pre-procedure MRCP / contrast ultrasound confirming no cystobiliary fistula",
            "Prophylactic IV anti-allergic premedication administered (Hydrocortisone 100 mg + Pheniramine 22.75 mg) with emergency adrenaline on table"
        ],
        "hardware": [
            { "category": "Puncture Needle", "name": "18G - 19G Chiba / Trocar Needle with Stopcock", "spec": "18G/19G x 15-20 cm needle with luer-lock 3-way stopcock", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Scolicidal Agent", "name": "Hypertonic Saline (20% NaCl) / Absolute Alcohol (95%)", "spec": "Sterile 20% hypertonic saline bottles (500 mL) and 95% ethanol", "standardStore": "DDC-14 Central" },
            { "category": "Ultrasound Transducer", "name": "Curvilinear Abdominal Probe", "spec": "3.5 - 5.0 MHz with needle guide", "standardStore": "USG Suite 922" },
            { "category": "Emergency Allergy Kit", "name": "Anaphylaxis Emergency Set", "spec": "Inj Adrenaline (1:1000), Hydrocortisone, Chlorpheniramine, IV fluids", "standardStore": "CT/USG Emergency Crash Cart" }
        ],
        "techniqueSteps": [
            "Position patient supine; confirm continuous vital signs monitoring and venous access.",
            "Sonographically locate hydatid cyst; plan puncture trajectory traversing at least 2 cm of normal liver parenchyma to anchor needle and prevent peritoneal spillage.",
            "Administer prophylactic IV Hydrocortisone and Pheniramine.",
            "Sterilize and drape right hypochondrium; infiltrate 15 mL 2% Lignocaine down to Glisson's capsule.",
            "PUNCTURE: Advance 18G needle under real-time acoustic control into the cyst center.",
            "ASPIRATION: Aspirate 30-50% of the crystal-clear 'rock-water' hydatid fluid; visually verify absence of bile (yellow tint); perform bedside dipstick bilirubin test to rule out cystobiliary fistula.",
            "INJECTION: Slowly inject scolicidal agent (20% Hypertonic Saline or 95% Absolute Alcohol) equal to 1/3 of aspirated volume; leave in cavity for 15-20 minutes contact time to kill protoscolices.",
            "RE-ASPIRATION: Completely aspirate all scolicidal fluid and remaining cyst contents until cyst collapses; withdraw needle; compress site 5 minutes; monitor in recovery for 4 hours."
        ],
        "complications": [
            "Anaphylactic allergic reaction / urticaria / bronchospasm (<1-2%, treated with adrenaline/steroids)",
            "Chemical cholangitis if occult cystobiliary communication missed (<0.5%)",
            "Transient fever or urticarial skin rash (3-5%)",
            "Intrahepatic hematoma (<1%)",
            "Cyst recurrence (<3-5% with proper albendazole coverage)"
        ],
        "maayTariffInr": 6500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "अल्ट्रासाउंड-निर्देशित लिवर हाइडेटिड सिस्ट ड्रेनेज (PAIR तकनीक - पंचर, एस्पिरेशन, इंजेक्शन, री-एस्पिरेशन)",
            "indicationEn": "Minimally invasive chemical sclerosis and evacuation of liver hydatid cyst (Echinococcosis).",
            "indicationHi": "लिवर में कीड़े की पानी वाली थैली (हाइडेटिड सिस्ट / Echinococcus) को बिना ऑपरेशन सुई द्वारा दवा डालकर सुखाना (PAIR तकनीक)।",
            "descriptionEn": "Under real-time ultrasound guidance, the hydatid cyst is punctured with a fine needle, fluid is drawn out, a specialized parasite-killing solution (hypertonic saline/alcohol) is injected to destroy the parasite, and then completely re-aspirated to cure the cyst without surgery.",
            "descriptionHi": "सोनोग्राफी से देखकर पेट को सुन्न करके एक बारीक सुई लिवर की हाइडेटिड सिस्ट में डाली जाती है। सिस्ट का पानी निकालकर अंदर कीड़ों को मारने वाली विशेष दवा (हाइपरटोनिक सलाइन/अल्कोहल) भरी जाती है और 15-20 मिनट बाद सारा तरल वापस खींच लिया जाता है ताकि सिस्ट पूरी तरह सूख जाए।",
            "benefitsEn": [
                "Complete non-surgical cure of hydatid cyst with >95% success rate.",
                "Avoids the high morbidity, prolonged hospitalization, and scars of open surgical cystectomy.",
                "Preserves maximum normal liver tissue."
            ],
            "benefitsHi": [
                "बिना पेट खोले 95% से अधिक सफलता दर के साथ सिस्ट का पक्का इलाज।",
                "बड़े ऑपरेशन, लंबे समय तक अस्पताल में भर्ती और टांकों के निशान से पूरी मुक्ति।",
                "लिवर को बिना नुकसान पहुंचाए कुछ ही घंटों में मरीज घर जा सकता है।"
            ],
            "specificRisksEn": [
                "Allergic reaction (itching, hives, or rarely severe anaphylaxis) from hydatid fluid (<1-2%, managed with emergency anti-allergic drugs).",
                "Mild fever or skin rash for 24-48 hours (3-5%).",
                "Abdominal pain during scolicidal injection (10-15%).",
                "Chemical irritation of bile ducts if occult connection present (<0.5%).",
                "Cyst recurrence requiring repeat procedure (<3-5%)."
            ],
            "specificRisksHi": [
                "सिस्ट के पानी से एलर्जी, खुजली या सांस में तकलीफ (एनाफिलेक्सिस) का हल्का जोखिम (<1-2%, जिसके लिए तुरंत दवाएं तैयार रहती हैं)।",
                "प्रोसीजर के बाद 1-2 दिन हल्का बुखार या चकत्ते (3-5%)।",
                "दवा डालते समय पेट में हल्का दर्द (10-15%)।",
                "पित्त की नली में हल्की सूजन (<0.5%)।",
                "सिस्ट दोबारा उभरने की हल्की संभावना (<3-5%)।"
            ],
            "alternativesEn": "Surgical open or laparoscopic cyst unroofing / pericysectomy, prolonged albendazole therapy alone, or PAIR-PD with catheter drainage.",
            "alternativesHi": "दूरबीन या चीरे द्वारा पेट का ऑपरेशन (Laparoscopic Hydatid Surgery), केवल अलबेंडाजोल गोली खाना, या नली डालना (PAIR-PD)।",
            "sedationTypeEn": "Local anesthesia with IV anti-allergic premedication and conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia), एलर्जी-रोधी दवाइयां और हल्की शामक दवा।"
        }
    },
    {
        "id": "modified-pair-pd-hydatid-cyst",
        "name": "Modified PAIR-PD (Percutaneous Aspiration, Injection, Re-aspiration with Drainage) of Hydatid Cyst",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV058",
        "rghsCode": "693 / 41",
        "icd10": "B67.0 (Echinococcus granulosus of liver) / B67.8 (Echinococcosis, unspecified)",
        "indications": [
            "Large (>10 cm) hydatid cysts with high intracystic pressure",
            "Hydatid cyst containing detached endocyst membranes or daughter cysts (WHO Stage CE2 / CE3b)",
            "Secondarily infected hydatid cyst with purulent content (pyo-hydatid)",
            "Hydatid cyst where complete single-session fluid collapse cannot be achieved with simple needle aspiration"
        ],
        "preOpCriteria": [
            "Albendazole pre-treatment administered for at least 2 weeks",
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "Premedication with IV hydrocortisone and antihistamines; emergency adrenaline readily accessible",
            "Fluoroscopy / Ultrasound dual-modality guidance arranged"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "8.5F - 10F Locking Pigtail Drainage Catheter Kit", "spec": "8.5F/10F x 25 cm pigtail with large sideholes for membrane aspiration", "standardStore": "Central IR Consignment Store" },
            { "category": "Access Needle & Wire", "name": "18G Chiba Needle & 0.035 Stiff Wire", "spec": "18G x 15 cm needle with 0.035 Amplatz Super Stiff wire", "standardStore": "Cath Lab Access Cabinet" },
            { "category": "Scolicidal Agent", "name": "20% Hypertonic Saline Solution", "spec": "Sterile 20% NaCl bottles (500 mL)", "standardStore": "DDC-14 Central" },
            { "category": "Contrast Medium", "name": "Iohexol 300 mg I/mL", "spec": "50 mL contrast for cystography to rule out biliary communication", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient supine; administer IV hydrocortisone and pheniramine premedication.",
            "Under ultrasound guidance, puncture cyst with 18G needle through an intervening rim of normal liver parenchyma.",
            "Aspirate 30-50 mL hydatid fluid; inject contrast medium under fluoroscopy (cystogram) to strictly verify absence of contrast opacification of bile ducts.",
            "Advance 0.035 Amplatz stiff wire into the cyst, coiling it around the cavity.",
            "Dilate tract to 8F/10F; advance 8.5F-10F locking pigtail catheter into the cyst.",
            "Aspirate fluid and detached germinal membranes; instill 20% hypertonic saline for 15 minutes; re-aspirate completely.",
            "Leave pigtail catheter locked in place connected to gravity drainage bag to ensure complete ongoing evacuation of residual membranes and cavity obliteration.",
            "Perform daily catheter flushes with normal saline; remove catheter when daily drainage is <10 mL and cavity is collapsed on follow-up ultrasound."
        ],
        "complications": [
            "Allergic reaction / anaphylactoid symptoms (<2%, treated promptly)",
            "Catheter obstruction with detached laminated membrane debris (10-15%)",
            "Delayed cystobiliary fistula manifested as bilious catheter output (2-4%)",
            "Superficial wound infection or localized pain (10-15%)",
            "Premature catheter displacement (2-4%)"
        ],
        "maayTariffInr": 8500,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "मोडिफाइड PAIR-PD (लिवर हाइडेटिड सिस्ट कैथेटर ड्रेनेज तकनीक)",
            "indicationEn": "Catheter drainage with scolicidal injection (PAIR-PD) for large, complicated, or membrane-containing hydatid cysts.",
            "indicationHi": "बड़ी, जटिल या झिल्ली वाली हाइडेटिड सिस्ट (कीड़े की थैली) में नली (पिगटेल कैथेटर) डालकर दवा से सुखाना और लगातार मवाद/पानी निकालना।",
            "descriptionEn": "Under combined ultrasound and X-ray guidance, a locking drainage tube is placed inside a large complicated hydatid cyst. Contrast dye confirms no leak into bile ducts, scolicidal solution destroys the parasites, and the catheter is kept in place to drain all detached membranes until the cavity permanently collapses.",
            "descriptionHi": "सोनोग्राफी और एक्स-रे की निगरानी में बड़ी हाइडेटिड सिस्ट में एक नली डाली जाती है। डाई डालकर देखा जाता है कि सिस्ट पित्त की नली से नहीं जुड़ी है। फिर कीड़े मारने वाली दवा डालकर सिस्ट की झिल्ली और सारा पानी नली द्वारा बाहर निकाल लिया जाता है जब तक कि थैली पूरी तरह सूख न जाए।",
            "benefitsEn": [
                "Allows safe treatment of huge (>10 cm) or multivesicular hydatid cysts that fail standard single-step needle aspiration.",
                "Continuous catheter drainage ensures all dead parasite membranes are fully evacuated.",
                "High cure rate with minimal risk of peritoneal spillage."
            ],
            "benefitsHi": [
                "10 सेमी से बड़ी या जटिल सिस्ट का भी बिना चीरे के सफल इलाज।",
                "मरी हुई कीड़े की झिल्लियां नली के रास्ते बाहर आ जाती हैं जिससे बीमारी दोबारा नहीं पनपती।",
                "पेट के बड़े और जटिल ऑपरेशन से पूरा बचाव।"
            ],
            "specificRisksEn": [
                "Allergic reaction or hives from parasite proteins (<2%, emergency drugs on hand).",
                "Drain tube blockage by thick parasite membranes (10-15%, cleared by flushing).",
                "Bile appearing in the drain tube if a microscopic bile leak opens (2-4%).",
                "Catheter site soreness (10-15%).",
                "Accidental dislodgement of the catheter (2-4%)."
            ],
            "specificRisksHi": [
                "कीड़े के तत्वों से एलर्जी या खुजली (<2%, जिसके लिए तुरंत दवाएं तैयार रहती हैं)।",
                "झिल्लियों के कारण नली का बंद होना जिसे सलाइन से धोकर चालू किया जाता है (10-15%)।",
                "पित्त की बारीक नस खुलने पर नली में पीला पित्त आना (2-4%)।",
                "नली के पास त्वचा पर हल्का दर्द (10-15%)।",
                "नली का खिसकना या बाहर निकलना (2-4%)।"
            ],
            "alternativesEn": "Surgical open or laparoscopic cyst excision, standard single-step PAIR without drain, or lifelong albendazole medical suppression.",
            "alternativesHi": "ऑपरेशन करके दूरबीन या चीरे से सिस्ट निकालना, बिना नली वाली PAIR तकनीक, या केवल दवाइयां खाना।",
            "sedationTypeEn": "Local anesthesia with IV anti-allergic premedication and conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia), एलर्जी-रोधी दवाइयां और हल्की शामक दवा।"
        }
    },
    {
        "id": "ct-subdiaphragmatic-abscess-drainage",
        "name": "CT-Guided Percutaneous Subdiaphragmatic Abscess Drainage",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV059",
        "rghsCode": "693 / 42",
        "icd10": "K65.1 (Peritoneal abscess) / T81.4XXA (Infection following a procedure)",
        "indications": [
            "Postoperative or post-traumatic subdiaphragmatic (subphrenic) abscess (e.g. post-splenectomy, post-gastrectomy, post-hepatectomy)",
            "Deep subphrenic collection causing persistent sepsis, spiking fever, and diaphragmatic splinting",
            "Acoustically obscured collection under the costal margin impassable under ultrasound",
            "Safe extrapleural catheter drainage avoiding the costodiaphragmatic pleural recess"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.5, Platelets >= 50,000/uL",
            "Contrast-enhanced CT reviewed to locate the pleural reflection (usually crosses the 10th rib in midaxillary line) to plan subpleural trajectory",
            "Broad-spectrum IV antibiotics initiated",
            "Fasting 4 hours; closed drainage bag ready"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "10F - 12F Locking Pigtail Drainage Kit", "spec": "10F/12F x 25 cm pigtail with large sideholes and trocar assembly", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "Guidewire & Needle", "name": "18G Trocar Needle & 0.038 Amplatz Stiff Wire", "spec": "18G x 15 cm needle with 0.038 x 80 cm wire", "standardStore": "CT Suite D-9211" },
            { "category": "CT Accessories", "name": "Radiopaque Skin Grid & Laser Pointer", "spec": "Sterile CT localization grid", "standardStore": "CT Suite D-9211" },
            { "category": "Drainage Bag", "name": "Closed Gravity Collection Bag", "spec": "1000 mL sterile drainage bag with connector", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient prone or lateral decubitus on CT table, placing the affected side accessible.",
            "Acquire low-dose planning CT through the lower chest and upper abdomen; identify the subphrenic abscess and costodiaphragmatic recess.",
            "Plan an oblique caudocranial subcostal or low intercostal trajectory entering below the pleural reflection.",
            "Sterilize and drape skin; infiltrate 15-20 mL 2% Lignocaine into skin, intercostal muscles, and diaphragmatic peritoneum.",
            "Introduce 18G needle along the planned trajectory under CT guidance directly into the subdiaphragmatic collection.",
            "Aspirate pus for Gram stain and culture; advance 0.038 Amplatz wire into the cavity; dilate tract to 10F/12F.",
            "Advance 10F or 12F locking pigtail catheter over wire; confirm complete intra-cavity positioning on CT check slices.",
            "Evacuate pus, flush with 10-20 mL sterile saline, and connect to closed drainage bag; obtain post-procedure CT to confirm lack of pneumothorax."
        ],
        "complications": [
            "Pneumothorax / empyema from inadvertent pleural transgression (2-4%)",
            "Post-drainage transient bacteremic fever spike (5-10%)",
            "Catheter clogging with thick fibrinous pus (5-10%)",
            "Subcapsular hematoma or intercostal vessel injury (<1%)",
            "Catheter dislodgement (2-4%)"
        ],
        "maayTariffInr": 8500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित सबडायाफ्रामैटिक (डायाफ्राम के नीचे) फोड़ा ड्रेनेज (पिगटेल नली डालना)",
            "indicationEn": "Percutaneous catheter drainage of deep post-surgical subdiaphragmatic / subphrenic abscess.",
            "indicationHi": "ऑपरेशन के बाद डायाफ्राम (छाती और पेट के बीच के पर्दे) के नीचे बने गहरे मवाद के फोड़े में सीटी स्कैन द्वारा नली डालना।",
            "descriptionEn": "Under high-precision CT guidance, a drainage tube is inserted beneath the ribs into the deep subdiaphragmatic abscess while strictly avoiding the lung and chest cavity to drain out the infected collection continuously into a bag.",
            "descriptionHi": "सीटी स्कैन की थ्री-डी निगरानी में फेफड़े की झिल्ली को बचाते हुए पसली के नीचे से एक विशेष मुड़ी हुई नली (पिगटेल कैथेटर) डायाफ्राम के नीचे जमे मवाद के फोड़े में डाली जाती है ताकि मवाद लगातार बाहर निकलता रहे और मरीज ठीक हो सके।",
            "benefitsEn": [
                "Drains deep, life-threatening post-surgical abscesses that cannot be seen on ultrasound.",
                "Sub-millimeter CT guidance prevents puncturing the lung cavity (pleura).",
                "Spares critically ill post-operative patients the trauma of emergency re-operation."
            ],
            "benefitsHi": [
                "ऑपरेशन के बाद गहराई में बने जानलेवा फोड़ों की बिना दोबारा पेट खोले सुरक्षित निकासी।",
                "सीटी स्कैन से फेफड़े पूरी तरह सुरक्षित रहते हैं।",
                "दोबारा बड़े और जोखिम भरे ऑपरेशन से मरीज की जान बचाई जा सकती है।"
            ],
            "specificRisksEn": [
                "Air leak into chest cavity (pneumothorax) or empyema (2-4%).",
                "Catheter clogging with thick pus requiring regular saline flushes (5-10%).",
                "Temporary fever and chills when pus is first drained (5-10%).",
                "Local pain at the drain site (10-15%).",
                "Accidental dislodgement of the catheter (2-4%)."
            ],
            "specificRisksHi": [
                "फेफड़े में हल्की हवा का रिसाव या फेफड़े की झिल्ली में संक्रमण का हल्का जोखिम (2-4%)।",
                "गाढ़े मवाद से नली का बंद होना जिसे सलाइन से धोकर साफ किया जाता है (5-10%)।",
                "मवाद निकलने के बाद अस्थायी कंपकंपी या बुखार (5-10%)।",
                "नली वाली जगह पर पसली में हल्का दर्द (10-15%)।",
                "नली का खिसकना या बाहर निकलना (2-4%)।"
            ],
            "alternativesEn": "Emergency open exploratory laparotomy / re-operation, ultrasound-guided drainage (if accessible), or intravenous antibiotics alone.",
            "alternativesHi": "दोबारा पेट खोलने का बड़ा ऑपरेशन (Re-laparotomy), या केवल एंटीबायोटिक दवाइयां देना।",
            "sedationTypeEn": "Local anesthesia with IV analgesia and conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक व शामक दवा।"
        }
    },
    {
        "id": "ct-subhepatic-abscess-drainage",
        "name": "CT-Guided Percutaneous Subhepatic Abscess Drainage",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV060",
        "rghsCode": "693 / 42",
        "icd10": "K65.1 (Peritoneal abscess) / T81.4XXA (Infection following a procedure)",
        "indications": [
            "Subhepatic fluid collection or abscess in Morison's pouch (post-cholecystectomy, post-liver resection, or duodenal ulcer perforation)",
            "Persistent post-operative fever, abdominal guarding, and rising inflammatory markers",
            "Loculated subhepatic collection obscured by overlying hepatic flexure or surgical dressings",
            "Safe catheter drainage avoiding duodenum, hepatic flexure, and biliary tree"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.5, Platelets >= 50,000/uL",
            "Contrast-enhanced CT reviewed to locate hepatic flexure of colon, duodenum, and inferior vena cava",
            "Broad-spectrum IV antibiotics administered",
            "Fasting 4 hours; drainage bag ready"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "10F - 12F Locking Pigtail Drainage Catheter Kit", "spec": "10F/12F x 25-30 cm pigtail with large oval sideholes", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "Access Needle & Wire", "name": "18G Chiba Needle & 0.038 Amplatz Stiff Wire", "spec": "18G x 15 cm needle with 0.038 x 80 cm wire", "standardStore": "CT Suite D-9211" },
            { "category": "CT Accessories", "name": "Radiopaque Skin Grid & Laser Alignment", "spec": "Sterile CT skin grid", "standardStore": "CT Suite D-9211" },
            { "category": "Drainage Bag", "name": "Closed Gravity Collection Bag", "spec": "1000 mL sterile collection bag", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient supine or in slight left lateral tilt on CT couch.",
            "Acquire thin-slice planning CT through the right upper quadrant; map Morison's pouch collection.",
            "Select an anterior or lateral subcostal entry trajectory keeping lateral to the colon and anterior to the kidney.",
            "Sterilize and drape right upper abdomen; infiltrate 15 mL 2% Lignocaine into skin, abdominal wall muscles, and peritoneum.",
            "Introduce 18G needle under CT guidance directly into the subhepatic abscess; verify needle tip position on check slices.",
            "Aspirate purulent/bilious fluid for culture; advance 0.038 Amplatz wire into collection.",
            "Dilate tract to 10F/12F; advance locking pigtail catheter over wire into Morison's pouch.",
            "Evacuate collection completely; lock pigtail; connect to drainage bag; obtain completion CT confirming lack of hematoma or bowel injury."
        ],
        "complications": [
            "Post-procedure fever spike (5-10%)",
            "Catheter clogging by thick fibrin / bile sludge (5-10%)",
            "Inadvertent colonic or duodenal puncture (<0.5%)",
            "Biliary leak through drainage tract (<1%)",
            "Catheter dislodgement (2-4%)"
        ],
        "maayTariffInr": 8000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित सबहेपेटिक (लिवर के नीचे) फोड़ा ड्रेनेज (पिगटेल नली डालना)",
            "indicationEn": "Percutaneous drainage of Morison's pouch / subhepatic abscess following gallbladder or liver surgery.",
            "indicationHi": "पित्त की थैली या लिवर के ऑपरेशन के बाद लिवर के नीचे (मॉरिसन पाउच) में बने मवाद के फोड़े में सीटी स्कैन द्वारा नली डालना।",
            "descriptionEn": "Under CT guidance, a locking pigtail catheter is placed between the liver and right kidney into the subhepatic abscess while avoiding intestines and major blood vessels to continuously drain the infected fluid into a bag.",
            "descriptionHi": "सीटी स्कैन में देखकर आंतों और नसों को बचाते हुए पेट के दाहिने हिस्से से एक मुड़ी हुई नली (पिगटेल कैथेटर) लिवर के नीचे जमे मवाद में डाली जाती है ताकि मवाद लगातार बाहर निकलता रहे और मरीज बिना दोबारा ऑपरेशन के ठीक हो सके।",
            "benefitsEn": [
                "Safely evacuates deep post-operative fluid collections without opening the surgical incision.",
                "Sub-millimeter CT guidance completely protects the duodenum and colon from injury.",
                "Enables rapid recovery from post-surgical sepsis and fever."
            ],
            "benefitsHi": [
                "ऑपरेशन के बाद पेट में बने मवाद की बिना दोबारा चीरा लगाए सुरक्षित निकासी।",
                "सीटी स्कैन से आंतें और नसें पूरी तरह सुरक्षित रहती हैं।",
                "मरीज का बुखार और इन्फेक्शन जल्दी ठीक होता है और अस्पताल से शीघ्र छुट्टी मिलती है।"
            ],
            "specificRisksEn": [
                "Catheter clogging with thick pus requiring saline flushes (5-10%).",
                "Temporary fever and shivering after drain placement (5-10%).",
                "Pain around the catheter exit site (10-15%).",
                "Accidental slipping or pulling out of the catheter (2-4%).",
                "Extremely rare bowel injury (<0.5%)."
            ],
            "specificRisksHi": [
                "गाढ़े मवाद या पित्त के थक्कों से नली का बंद होना (5-10%, सलाइन से साफ किया जाता है)।",
                "नली डालने के बाद हल्का बुखार या कंपकंपी (5-10%)।",
                "नली के पास हल्का दर्द (10-15%)।",
                "नली का खिसकना या बाहर निकलना (2-4%)।",
                "आंत में सुई लगने का अत्यंत दुर्लभ खतरा (<0.5%)।"
            ],
            "alternativesEn": "Re-exploration surgery (open laparotomy), ultrasound-guided drainage (if visible), or conservative medical therapy.",
            "alternativesHi": "दोबारा ऑपरेशन करके पेट खोलना (Re-laparotomy) अथवा केवल एंटीबायोटिक दवाइयां देना।",
            "sedationTypeEn": "Local anesthesia with IV analgesia and conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक व शामक दवा।"
        }
    },
    {
        "id": "ct-pancreatic-pseudocyst-drainage",
        "name": "CT-Guided Percutaneous Pancreatic Pseudocyst Drainage",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV061",
        "rghsCode": "693 / 42",
        "icd10": "K86.3 (Pseudocyst of pancreas) / K85.90 (Acute pancreatitis)",
        "indications": [
            "Symptomatic or complicated pancreatic pseudocyst (>6 cm) persistent >6 weeks following acute pancreatitis",
            "Gastric outlet obstruction, biliary obstruction, or early satiety caused by mass effect",
            "Infected pancreatic pseudocyst presenting with sepsis and fever",
            "Pseudocyst anatomically unsuitable for endoscopic transmural cystogastrostomy (distance from stomach > 1-1.5 cm or altered anatomy)"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "Contrast-enhanced CT or MRCP reviewed to assess cyst wall maturity, absence of pseudoaneurysm, and lack of extensive solid necrosis",
            "Trajectory planned strictly extrapleural and transperitoneal avoiding splenic vessels, SMA, and colon",
            "Fasting 6 hours; broad-spectrum IV antibiotic prophylaxis on board"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "10F - 12F Locking Pigtail Drainage Catheter Kit", "spec": "10F/12F x 30 cm locking pigtail with hydrophilic coating and multiple large sideholes", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "Access Needle & Wire", "name": "18G Chiba Needle & 0.038 Amplatz Extra Stiff Wire", "spec": "18G x 15-20 cm needle with 0.038 x 80 cm wire", "standardStore": "CT Suite D-9211" },
            { "category": "CT Accessories", "name": "Radiopaque Skin Grid & Laser Marker", "spec": "Sterile CT skin grid", "standardStore": "CT Suite D-9211" },
            { "category": "Drainage Bag", "name": "Closed Gravity Drainage Bag", "spec": "1000 mL collection bag with luer connector", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient supine, prone, or lateral depending on pseudocyst location (tail vs body vs head).",
            "Acquire thin-section planning CT; confirm thick mature fibrous capsule (>2-3 mm) and absence of enhancing pseudoaneurysms.",
            "Select trajectory: anterior transgastric (self-sealing tract into stomach) or direct flank retroperitoneal / lateral approach avoiding spleen and colon.",
            "Sterilize and drape abdomen; infiltrate 15-20 mL 2% Lignocaine through skin, deep fascia, and pseudocyst capsule.",
            "Introduce 18G needle into pseudocyst center under CT guidance; aspirate dark 'motor-oil' or clear fluid (send for amylase, lipase, CEA, culture).",
            "Advance 0.038 Amplatz stiff wire into cavity; dilate tract sequentially to 10F/12F.",
            "Advance 10F-12F locking pigtail catheter over wire into cyst; confirm symmetrical pigtail loop on CT check slices.",
            "Evacuate cyst contents; connect to closed gravity bag; manage catheter with regular flushes until daily output is <10 mL and follow-up CT confirms cavity obliteration."
        ],
        "complications": [
            "Secondary infection / abscess transformation of sterile pseudocyst (5-10%)",
            "Pancreaticocutaneous fistula (5-10%, usually closes spontaneously or with Octreotide)",
            "Catheter clogging by thick necrotic debris (5-10%)",
            "Hemorrhage from pseudoaneurysm rupture (<1%)",
            "Catheter dislodgement (2-4%)"
        ],
        "maayTariffInr": 9000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित अग्न्याशय स्यूडोसिस्ट ड्रेनेज (पिगटेल नली डालना)",
            "indicationEn": "Percutaneous catheter drainage of large or infected pancreatic pseudocyst causing symptoms or obstruction.",
            "indicationHi": "पैंक्रियाटाइटिस के बाद अग्न्याशय (पैंक्रियाज) के पास बनी पानी की बड़ी थैली (स्यूडोसिस्ट) में सीटी स्कैन द्वारा नली डालकर पानी निकालना।",
            "descriptionEn": "Under precise CT guidance, a soft locking pigtail catheter is placed through the abdominal wall into the pancreatic fluid collection to continuously drain the enzyme-rich fluid until the cyst completely shrinks and heals.",
            "descriptionHi": "सीटी स्कैन की थ्री-डी निगरानी में पेट की त्वचा को सुन्न करके बड़ी नसों और आंतों को बचाते हुए अग्न्याशय की पानी की थैली में एक मुड़ी हुई नली (पिगटेल कैथेटर) डाली जाती है। यह नली थैली का सारा पानी बाहर निकाल देती है जिससे थैली सूखकर बंद हो जाती है।",
            "benefitsEn": [
                "Relieves severe abdominal pain, nausea, vomiting, and pressure on the stomach.",
                "Effectively treats infected cysts without requiring open pancreatic surgery.",
                "Catheter remains in place until the cavity completely closes, preventing recurrence."
            ],
            "benefitsHi": [
                "पेट दर्द, उल्टी और भारीपन से तुरंत आराम मिलता है।",
                "बिना पेट खोले ही संक्रमित सिस्ट का सफल और पक्का इलाज।",
                "थैली पूरी तरह सूखने तक नली लगी रहती है जिससे बीमारी दोबारा नहीं पनपती।"
            ],
            "specificRisksEn": [
                "Secondary bacterial infection of the fluid requiring prolonged antibiotic therapy (5-10%).",
                "Pancreatic fluid leaking around the tube (pancreatic fistula) for some weeks (5-10%, usually heals on its own).",
                "Drain tube clogging requiring regular saline flushes (5-10%).",
                "Catheter accidentally slipping out (2-4%).",
                "Bleeding from vascular irritation (<1%)."
            ],
            "specificRisksHi": [
                "सिस्ट में बैक्टीरिया का संक्रमण होना जिसके लिए एंटीबायोटिक दवाएं चलती हैं (5-10%)।",
                "नली के रास्ते कुछ हफ्तों तक पैंक्रियाज का पानी रिसना (Fistula) जो दवा और समय के साथ बंद हो जाता है (5-10%)।",
                "नली का बंद होना जिसे सलाइन से धोकर साफ किया जाता है (5-10%)।",
                "नली का बाहर खिसकना या निकलना (2-4%)।",
                "खून का रिसाव (<1%)।"
            ],
            "alternativesEn": "Endoscopic ultrasound-guided cystogastrostomy (EUS-guided drainage), surgical open cystogastrostomy (Roux-en-Y), or conservative medical monitoring.",
            "alternativesHi": "दूरबीन द्वारा पेट के अंदर से नली डालना (EUS Cystogastrostomy), पेट का बड़ा ऑपरेशन, या केवल निगरानी।",
            "sedationTypeEn": "Local anesthesia with IV analgesia and conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक व शामक दवा।"
        }
    },
    {
        "id": "ct-wopn-drainage",
        "name": "CT-Guided Percutaneous Walled-Off Pancreatic Necrosis (WOPN) Drainage",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV062",
        "rghsCode": "693 / 43",
        "icd10": "K85.92 (Acute pancreatitis with other necrosis) / K65.1 (Peritoneal abscess)",
        "indications": [
            "Infected walled-off pancreatic necrosis (WOPN) presenting with persistent sepsis > 4 weeks post-acute necrotizing pancreatitis",
            "Gas within the retroperitoneal necrotic collection on contrast-enhanced CT",
            "First step of the minimally invasive 'Step-Up Approach' for infected necrotizing pancreatitis (PANTER trial protocol)",
            "Decompression of large retroperitoneal necrotic collections extending into paracolic gutters or pelvis"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "Contrast CT carefully evaluated to rule out pseudoaneurysm of splenic, gastroduodenal, or pancreaticoduodenal arteries",
            "Left retroperitoneal / retrocolic approach planned avoiding the colon and spleen",
            "Intensive Care Unit (ICU) / High Dependency Unit (HDU) bed secured post-procedure"
        ],
        "hardware": [
            { "category": "Large-Bore Catheter", "name": "14F - 16F Large-Bore Locking Pigtail Drainage Catheter", "spec": "14F/16F x 30 cm radiopaque catheter with large sideholes for viscous sludge", "standardStore": "Central IR Consignment Store" },
            { "category": "Access Set", "name": "18G Chiba Needle & 0.038 Amplatz Extra Stiff Guidewire", "spec": "18G x 20 cm needle with 0.038 x 100 cm heavy-duty wire", "standardStore": "CT Interventional Suite D-9211" },
            { "category": "Dilators", "name": "Sequential Vascular / Fascial Dilators", "spec": "8F, 10F, 12F, 14F, 16F fascial dilators", "standardStore": "CT Suite D-9211" },
            { "category": "Irrigation Kit", "name": "Continuous / Intermittent Saline Lavage Set", "spec": "3-way stopcock with 500 mL sterile saline bags for regular irrigation", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient prone or in right lateral decubitus on CT gantry to expose the left flank.",
            "Acquire thin-slice contrast CT; map the necrotic collection extending down the left retroperitoneum and paracolic gutter.",
            "Plan a retroperitoneal trajectory via the left flank (posterolateral approach) traversing between the descending colon anteriorly and kidney posteriorly.",
            "Sterilize and drape left flank; infiltrate 20 mL 2% Lignocaine into skin, quadratus lumborum/abdominal muscles, and collection wall.",
            "Introduce 18G needle under CT guidance into the epicenter of the necrotic collection; aspirate turbid, foul-smelling necrotic debris (send for culture).",
            "Advance 0.038 Amplatz extra-stiff wire into collection; sequentially dilate tract up to 14F or 16F.",
            "Advance 14F or 16F large-bore locking catheter over wire into collection; verify symmetrical loop on CT check slices.",
            "Evacuate thick necrotic sludge; gently flush with 50-100 mL saline; connect to closed drainage bag with regular q4-6h saline irrigation protocol."
        ],
        "complications": [
            "Post-procedural sepsis / septic shock due to cavity manipulation (5-10%, requires ICU support)",
            "Catheter clogging by thick solid necrosis (20-30%, requires frequent saline flushes / upsizing)",
            "Pancreaticocutaneous or colocutaneous fistula (5-10%)",
            "Retroperitoneal bleeding from erosion of eroded vessels (1-3%)",
            "Catheter dislodgement (3-5%)"
        ],
        "maayTariffInr": 12000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित वोल्ड-ऑफ पैंक्रियाटिक नेक्रोसिस (WOPN) ड्रेनेज (बड़ी नली डालना - स्टेप-अप एप्रोच)",
            "indicationEn": "Large-bore percutaneous drainage of infected walled-off pancreatic necrosis (Step-Up approach).",
            "indicationHi": "गंभीर पैंक्रियाटाइटिस के बाद पेट के पिछले हिस्से में मरे हुए सड़े ऊतकों और मवाद (WOPN) को निकालने हेतु सीटी स्कैन द्वारा चौड़ी नली डालना।",
            "descriptionEn": "Under CT guidance, a large-bore drainage catheter is guided through the left flank directly into the deep retroperitoneal necrotic cavity, completely bypassing the abdominal organs. This continuously drains out infected pancreatic sludge and allows regular saline washing.",
            "descriptionHi": "सीटी स्कैन की थ्री-डी निगरानी में बाईं कमर के रास्ते से आंतों को बचाते हुए एक विशेष चौड़ी नली (14-16F कैथेटर) सीधे अग्न्याशय के सड़े हुए हिस्से में डाली जाती है। यह नली लगातार सड़े हुए मलबे को बाहर निकालती है और सलाइन से धोकर अंदर की सफाई की जाती है।",
            "benefitsEn": [
                "Proven to reduce death and complications by >50% compared to traditional open surgical necrosectomy (Step-Up Approach).",
                "Resolves severe sepsis and multi-organ failure in over 35-50% of patients without needing surgery.",
                "Provides an established access tract for future percutaneous necrosectomy if required."
            ],
            "benefitsHi": [
                "पुराने बड़े ऑपरेशन की तुलना में मृत्यु दर और जटिलताओं में 50% से अधिक की भारी कमी।",
                "35 से 50% गंभीर मरीज बिना किसी ऑपरेशन के केवल इस नली और धुलाई से ही पूरी तरह ठीक हो जाते हैं।",
                "आईसीयू में वेंटिलेटर और मल्टी-ऑर्गन फेलियर से मरीज को बाहर निकालने का सबसे सफल आधुनिक तरीका।"
            ],
            "specificRisksEn": [
                "Septic shock or sudden shivering/fever during initial drainage (5-10%, managed in ICU).",
                "Catheter clogging with thick chunks of dead tissue requiring frequent washing or upsizing (20-30%).",
                "Pancreatic fluid leaking along the tube track for several weeks (5-10%).",
                "Internal bleeding from damaged blood vessels in the bed of dead pancreas (1-3%).",
                "Need for additional drainage tubes or mechanical debridement (Step-Up) (40-50%)."
            ],
            "specificRisksHi": [
                "मवाद हिलने से प्रोसीजर के बाद अस्थायी सेप्टिक शॉक या तेज बुखार (5-10%, आईसीयू में नियंत्रण)।",
                "सड़े हुए मांस के टुकड़ों से नली का बार-बार बंद होना जिसे सलाइन से धोना पड़ता है (20-30%)।",
                "नली के रास्ते कुछ हफ्तों तक पानी का रिसाव (5-10%)।",
                "सड़े हुए हिस्से की नसों से अंदरूनी खून बहने का गंभीर जोखिम (1-3%)।",
                "आराम न आने पर अतिरिक्त नली डालने या दूरबीन से सफाई करने की आवश्यकता (40-50%)।"
            ],
            "alternativesEn": "Endoscopic transmural necrosectomy (ETN), open surgical necrosectomy / laparotomy, or conservative medical management.",
            "alternativesHi": "दूरबीन द्वारा पेट के अंदर से सफाई (Endoscopic Necrosectomy), खुला बड़ा ऑपरेशन (Open Necrosectomy), या केवल दवाइयां।",
            "sedationTypeEn": "Local anesthesia with monitored continuous IV conscious sedation / ICU support.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia), गहरी शामक दवा और आईसीयू निगरानी।"
        }
    },
    {
        "id": "stepup-percutaneous-pancreatic-necrosectomy",
        "name": "Percutaneous Catheter Debridement / Step-Up Necrosectomy for Infected Pancreatic Necrosis",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV063",
        "rghsCode": "693 / 43",
        "icd10": "K85.92 (Acute pancreatitis with necrosis) / K65.1 (Peritoneal abscess)",
        "indications": [
            "Infected pancreatic necrosis failing to improve clinically after 72 hours of primary percutaneous catheter drainage",
            "Persistent organ failure or systemic sepsis with large volumes of solid necrotic debris in retroperitoneum",
            "Secondary step of the Step-Up Approach (VARD or Sinus Tract Endoscopy / Percutaneous Necrosectomy)",
            "Serial tract dilatation (up to 24F-30F) with mechanical extraction of non-liquefied necrotic sequestra"
        ],
        "preOpCriteria": [
            "Prior percutaneous drain in place >= 7-10 days establishing a mature retroperitoneal sinus tract",
            "Coagulation: INR <= 1.3, Platelets >= 80,000/uL",
            "Contrast CT / CT-angiography within 48h to rule out pseudoaneurysms of visceral arteries",
            "General anesthesia or deep monitored anesthesia care in Hybrid OR / Interventional Suite with ICU bed reserved"
        ],
        "hardware": [
            { "category": "Tract Dilation System", "name": "Nephrostomy / Large-Bore Balloon Dilation Set", "spec": "30F x 10 cm high-pressure radial balloon dilator with 30F Amplatz working sheath", "standardStore": "Central IR Consignment Store" },
            { "category": "Endoscopy & Extraction", "name": "Flexible / Rigid Nephroscope & Grasping Forceps", "spec": "24F-26F nephroscope with continuous warm saline irrigation and stone/tissue grasping forceps", "standardStore": "Endoscopy / IR Dedicated Cabinet" },
            { "category": "Guidewire", "name": "0.035 Amplatz Super Stiff & Lunderquist Wires", "spec": "260 cm heavy-duty stainless steel wires", "standardStore": "Cath Lab Main Store" },
            { "category": "Post-Debridement Drain", "name": "24F - 28F Large-Bore Sump / Malecot Drainage Catheter", "spec": "Triple-lumen continuous irrigation and aspiration sump tube", "standardStore": "Central IR Consignment Store" }
        ],
        "techniqueSteps": [
            "Under general anesthesia or deep sedation, position patient in right lateral decubitus posture.",
            "Advance 0.035 stiff guidewire through existing retroperitoneal drainage catheter into the necrotic cavity under fluoroscopy.",
            "Remove existing catheter; dilate the sinus tract over the wire using a 30F high-pressure balloon dilation catheter.",
            "Advance 30F Amplatz working sheath over the inflated balloon into the necrotic cavity; deflate and remove balloon.",
            "Introduce rigid or flexible nephroscope through the working sheath under continuous warm normal saline irrigation.",
            "Directly visualize black/grey necrotic pancreatic sequestra; grasp and extract non-liquefied slough gently with stone/foreign body forceps under direct vision.",
            "Avoid aggressive traction on adherent tissue to prevent avulsion of retroperitoneal vascular structures.",
            "Place 24F-28F multi-lumen sump irrigation catheter into the debrided cavity; initiate continuous warm saline post-procedure lavage (100-200 mL/hr) and transfer to ICU."
        ],
        "complications": [
            "Severe retroperitoneal hemorrhage from vascular pseudoaneurysm rupture (2-5%, requires urgent embolization)",
            "Septic shock / bacteremic shower during irrigation (5-10%)",
            "Colocutaneous or gastrointestinal fistula (5-10%)",
            "Pancreatic fistula requiring long-term drainage (10-15%)",
            "Need for multiple repeat necrosectomy sessions (60-80%)"
        ],
        "maayTariffInr": 25000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Olympus Medical Systems (+91 98299 01234)"
        ],
        "consent": {
            "nameHi": "परक्यूटेनियस कैथेटर डिब्राइडमेंट / स्टेप-अप नेक्रोसेक्टॉमी (अग्न्याशय के सड़े मांस की दूरबीन द्वारा सफाई)",
            "indicationEn": "Minimally invasive percutaneous endoscopic removal of dead infected pancreatic tissue (Step-Up necrosectomy).",
            "indicationHi": "साधारण नली से आराम न आने पर अग्न्याशय के अंदर जमे सड़े हुए मांस (नेक्रोसिस) को दूरबीन और चिमटी द्वारा बाहर निकालना।",
            "descriptionEn": "Under anesthesia, the existing drain tract in the flank is widened using a high-pressure balloon to place a hollow working sheath. A miniature camera (nephroscope) is introduced into the cavity under continuous saline wash, and grasping forceps gently extract the dead necrotic tissue without major open surgery.",
            "descriptionHi": "मरीज को बेहोश करके, पहले से पड़ी नली के रास्ते को गुब्बारे द्वारा चौड़ा किया जाता है। फिर उस रास्ते से एक बारीक दूरबीन (कैमरा) अंदर ले जाकर स्क्रीन पर देखते हुए सड़े हुए काले मांस के टुकड़ों को चिमटी से खींच-खींचकर बाहर निकाला जाता है और लगातार सलाइन से धोया जाता है।",
            "benefitsEn": [
                "Clears solid infected debris that cannot pass through drainage tubes, curing refractory sepsis.",
                "Avoids massive open surgical abdomen cutting, multi-organ trauma, and high mortality.",
                "Significantly reduces ICU stay and long-term incisional hernia rates."
            ],
            "benefitsHi": [
                "सड़े हुए मांस के जो बड़े टुकड़े नली से नहीं निकल पाते, उन्हें दूरबीन से पूरी तरह निकाल दिया जाता है।",
                "पेट को पूरी तरह फाड़ने के अत्यंत जोखिम भरे और जानलेवा ऑपरेशन से पूरा बचाव।",
                "मरीज के अंगों (किडनी, फेफड़े) को फेल होने से बचाकर आईसीयू से जल्दी ठीक होने में मदद।"
            ],
            "specificRisksEn": [
                "Severe internal bleeding from eroded blood vessels requiring emergency angiographic coiling (2-5%).",
                "Septic shock from bacterial release during debridement (5-10%, managed in ICU).",
                "Need for multiple repeat cleaning sessions (60-80%).",
                "Pancreatic or bowel fistula leaking fluid through the skin (5-10%).",
                "Prolonged hospital stay and wound care."
            ],
            "specificRisksHi": [
                "सड़े हुए हिस्से के अंदर की नसों से अचानक भारी रक्तस्राव का गंभीर खतरा (2-5%, जिसके लिए तुरंत नस बंद करने की जरूरत पड़ सकती है)।",
                "सफाई के दौरान बैक्टीरिया रक्त में फैलने से सेप्टिक शॉक या तेज बुखार (5-10%)।",
                "पूरा कचरा एक बार में साफ न होने पर 2 से 3 बार सफाई करने की आवश्यकता (60-80%)।",
                "आंत या पैंक्रियाज का पानी नली के रास्ते कुछ हफ्तों तक बहना (5-10%)।",
                "लंबे समय तक अस्पताल में भर्ती और ड्रेसिंग की जरूरत।"
            ],
            "alternativesEn": "Video-Assisted Retroperitoneal Debridement (VARD), open surgical necrosectomy (laparotomy), or endoscopic transmural necrosectomy.",
            "alternativesHi": "चीरा लगाकर खुला बड़ा ऑपरेशन (Open Necrosectomy), या मुंह के रास्ते एंडोस्कोपिक सफाई।",
            "sedationTypeEn": "General anesthesia or deep monitored anesthesia care with endotracheal intubation.",
            "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा गहन शामक दवा और आईसीयू सपोर्ट।"
        }
    }
]
