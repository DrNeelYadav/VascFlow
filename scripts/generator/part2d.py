# -*- coding: utf-8 -*-
"""
Part 2D: Urinoma, Biloma, Lymphocele, Hematoma & Cyst Sclerotherapy (Procedures 84 to 91)
"""

DATA_PART2D = [
    {
        "id": "pcd-urinoma-drainage",
        "name": "Percutaneous Catheter Drainage of Urinoma",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV084",
        "rghsCode": "693 / 41",
        "icd10": "N28.89 (Other specified disorders of kidney and ureter) / S37.1 (Injury of ureter)",
        "indications": [
            "Encapsulated retroperitoneal urine collection (urinoma) following iatrogenic ureteral injury, trauma, or calculus rupture",
            "Urinoma producing severe flank pain, pyrexia, persistent ileus, or impending secondary bacterial infection",
            "Decompression of perinephric or pelvic urine collection to prevent retroperitoneal fibrosis, stricture, and loss of renal function",
            "Diagnostic fluid sampling to demonstrate high creatinine level relative to serum (confirming urine extravasation)"
        ],
        "preOpCriteria": [
            "Coagulation parameters: INR <= 1.4, Platelets >= 50,000/uL",
            "Contrast CT urogram or ultrasound documenting size, exact location, and proximity to kidney/ureter",
            "Broad-spectrum antimicrobial prophylaxis initiated (Ceftriaxone / Amikacin)",
            "Concomitant plan for antegrade or retrograde ureteral stenting (Double-J stent / PCN) to divert upstream urinary flow"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "8.5F - 10F Locking Pigtail Catheter", "spec": "8.5F/10F x 25 cm hydrophilic locking loop catheter with Trocar and Seldinger set", "standardStore": "Central IR Consignment Store" },
            { "category": "Puncture Needle", "name": "18G - 21G Chiba Needle", "spec": "18G/21G x 15 cm echogenic access needle", "standardStore": "D9211 CT Suite Store" },
            { "category": "Guidewire", "name": "0.035 Stiff Amplatz Wire", "spec": "145 cm J-tip guidewire", "standardStore": "Cath Lab Main Store" },
            { "category": "Ultrasound / CT", "name": "Ultrasound & CT Fluoroscopy Systems", "spec": "3.5 MHz curved probe and multi-slice CT", "standardStore": "USG Suite 922" },
            { "category": "Drainage Bag", "name": "Standard Closed Urine Bag", "spec": "2000 mL collection bag with anti-reflux valve", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient prone or in lateral oblique posture; identify urinoma via ultrasound or non-contrast CT.",
            "Sterilize the flank or lower back skin; infiltrate 10-15 mL 2% Lignocaine down to the retroperitoneal fascia under image guidance.",
            "Advance 18G/21G Chiba needle into the center of the encapsulated fluid collection under real-time acoustic/CT guidance.",
            "Aspirate 10-20 mL of clear yellowish or turbid fluid; send urgently for biochemical fluid Creatinine, Potassium, and bacterial culture.",
            "Insert 0.035 Amplatz guidewire through needle and coil multiple loops within the collection cavity.",
            "Dilate entry tract over wire with 8F and 10F serial fascial dilators.",
            "Advance 8.5F-10F locking pigtail catheter over wire into collection; lock the pigtail securely.",
            "Evacuate collection completely; connect catheter to closed gravity drainage bag; secure catheter to skin with 2-0 silk and fixation dressing; coordinate upstream ureteral stenting/PCN to achieve source control."
        ],
        "complications": [
            "Secondary infection / purulent abscess transformation of urinoma (3-5%)",
            "Persistent urinary leakage requiring prolonged drainage (10-20% if ureter not stented)",
            "Localized flank pain and discomfort (10-15%)",
            "Catheter occlusion or kinking (5-8%)",
            "Retroperitoneal hematoma (<1%)"
        ],
        "maayTariffInr": 5500,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "यूरिनोमा (गुर्दे के बाहर रिसे हुए पेशाब की थैली) की नली द्वारा निकासी (PCD)",
            "indicationEn": "Percutaneous catheter drainage of an encapsulated retroperitoneal urine collection (urinoma) caused by urinary leak or trauma.",
            "indicationHi": "चोट, पथरी या ऑपरेशन के बाद गुर्दे अथवा पेशाब की नली (यूरेटर) से रिसकर पेट/कमर में जमा हुए पेशाब (यूरिनोमा) को नली डालकर बाहर निकालना।",
            "descriptionEn": "Under real-time ultrasound or CT guidance, the flank is numbed with local anesthesia. A fine needle is passed into the urine collection to confirm the fluid, and a flexible pigtail catheter is placed to continuously drain the leaking urine into an external bag while the urinary tract heals.",
            "descriptionHi": "सोनोग्राफी या सीटी स्कैन में रिसे हुए पेशाब की थैली को देखकर, कमर को सुन्न करके एक पतली नली डाली जाती है जो सारा जमा पेशाब बाहर बैग में निकाल देती है ताकि संक्रमण न फैले और पेशाब की नली ठीक हो सके।",
            "benefitsEn": [
                "Immediately relieves severe flank pain, abdominal distension, and high fever.",
                "Prevents toxic chemical peritonitis, abscess formation, and chronic retroperitoneal scarring.",
                "Safeguards kidney function and facilitates spontaneous healing of the injured ureter."
            ],
            "benefitsHi": [
                "कमर के असहनीय दर्द, पेट के फूलने और तेज बुखार से तुरंत मुक्ति।",
                "पेशाब में मवाद पड़ने और अंदरूनी अंगों में स्थायी सिकुड़न से पूरा बचाव।",
                "गुर्दे को खराब होने से बचाना और पेशाब की नली के घाव को जल्दी भरने में मदद।"
            ],
            "specificRisksEn": [
                "Infection of the stagnant urine requiring strong antibiotics (3-5%).",
                "Ongoing urinary drainage requiring the tube to remain for several weeks until ureter heals (10-20%).",
                "Flank ache and soreness around the catheter site (10-15%).",
                "Tube kinking or slipping out requiring replacement (5-8%).",
                "Need for additional internal DJ stenting or PCN to stop the leak."
            ],
            "specificRisksHi": [
                "रिसे हुए पेशाब में बैक्टीरिया पनपने से मवाद बनना (3-5%)।",
                "पेशाब की नली का सुराख बंद होने तक कुछ हफ्तों तक नली लगी रहने की जरूरत (10-20%)।",
                "कमर में नली वाली जगह पर हल्का दर्द (10-15%)।",
                "नली का मुड़ जाना या खिसकना (5-8%)।",
                "पेशाब का रिसाव पूरी तरह रोकने के लिए अंदरूनी डीजे स्टेंट डालने की आवश्यकता।"
            ],
            "alternativesEn": "Open surgical repair and drainage under general anesthesia, retrograde double-J (DJ) stenting alone (may be inadequate for large collections), or watchful waiting.",
            "alternativesHi": "बेहोश करके पेट या कमर का बड़ा ऑपरेशन, केवल अंदरूनी डीजे स्टेंट डालना, या केवल दवाइयां।",
            "sedationTypeEn": "Local anesthesia with optional IV analgesia.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार दर्द निवारक दवा।"
        }
    },
    {
        "id": "pcd-biloma-drainage",
        "name": "Percutaneous Catheter Drainage of Biloma",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV085",
        "rghsCode": "693 / 41",
        "icd10": "K83.8 (Other specified diseases of biliary tract) / K91.89 (Other postprocedural complications of digestive system)",
        "indications": [
            "Encapsulated intrahepatic or perihepatic bile collection (biloma) following cholecystectomy, liver resection, or trauma",
            "Biloma producing right upper quadrant pain, persistent fever, nausea, or secondary bacterial infection (infected biloma)",
            "Decompression of tense bile collection to prevent bile peritonitis, hepatic abscess, or mass effect on portal triad",
            "Fluid aspiration confirming high total bilirubin (confirming bile leak) and guiding microbiological treatment"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "Pre-procedure ultrasound or CT abdomen characterizing biloma size, location, and potential communication with biliary tree",
            "Parenteral antibiotics covering enteric gram-negative bacilli and anaerobes (Piperacillin-Tazobactam)",
            "Plan for post-drainage cholangiography / ERCP or PTBD if high-output persistent biliary fistula is identified"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "8.5F - 10F Locking Pigtail Catheter", "spec": "8.5F/10F x 25 cm hydrophilic loop catheter with Trocar/Seldinger components", "standardStore": "Central IR Consignment Store" },
            { "category": "Access Needle", "name": "18G Chiba / Trocar Needle", "spec": "18G x 15 cm with echogenic tip", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Probe", "name": "Curvilinear Abdominal Probe", "spec": "3.5 - 5.0 MHz with Color Doppler", "standardStore": "USG Suite 922" },
            { "category": "Guidewire", "name": "0.035 Stiff Amplatz Wire", "spec": "145 cm J-tip wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Drainage Bag", "name": "Closed Bile Drainage Bag", "spec": "1000 mL bag with anti-reflux valve", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient supine or left lateral oblique; evaluate biloma using real-time ultrasound and Color Doppler.",
            "Choose a needle trajectory traversing a small margin of normal liver parenchyma (to prevent peritoneal bile leak) away from portal structures and colon.",
            "Sterilize the right upper quadrant or flank; infiltrate 10-15 mL 2% Lignocaine into skin, subcutis, and liver capsule.",
            "Under continuous ultrasound visualization, advance 18G needle directly into the center of the biloma; confirm aspiration of golden-yellow, dark green, or murky bile.",
            "Send fluid for bilirubin quantification, Gram stain, and aerobic/anaerobic cultures; pass 0.035 stiff wire and curl within the cavity.",
            "Dilate tract over wire using 8F and 10F dilators.",
            "Advance 8.5F-10F locking pigtail catheter over wire into the cavity; lock the pigtail securely under ultrasound.",
            "Aspirate the cavity completely; connect catheter to closed gravity bile bag; anchor with 2-0 silk suture and adhesive dressing; chart daily bile output."
        ],
        "complications": [
            "Secondary bacterial superinfection / cholangitis (3-5%)",
            "Persistent biliary-cutaneous fistula requiring biliary stenting (ERCP / PTBD) (15-25%)",
            "Bile leak into free peritoneal cavity causing localized peritonitis (1-2%)",
            "Intrahepatic hematoma or hemobilia (<1%)",
            "Catheter blockage or accidental dislodgement (5-8%)"
        ],
        "maayTariffInr": 6000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "बाइलोमा (लिवर या पित्त की नली से रिसे पित्त की थैली) की नली द्वारा निकासी (PCD)",
            "indicationEn": "Percutaneous catheter drainage of an encapsulated bile collection (biloma) resulting from gall bladder surgery, liver injury, or trauma.",
            "indicationHi": "पित्ताशय (गॉलब्लैडर) के ऑपरेशन या चोट के बाद लिवर के आसपास जमा हुए पित्त (बाइलोमा) को सोनोग्राफी देखकर नली डालकर बाहर निकालना।",
            "descriptionEn": "Under real-time ultrasound guidance, the right upper belly is numbed with local anesthesia. A fine needle is guided into the bile collection, and a soft pigtail catheter is placed to continuously drain the leaking green bile into an external bag, preventing infection and allowing the liver and bile ducts to heal.",
            "descriptionHi": "सोनोग्राफी में रिसे हुए पित्त की थैली को देखकर, पेट के ऊपरी दाहिने हिस्से को सुन्न करके एक पतली नली डाली जाती है। यह नली सारा हरा-पीला पित्त बाहर बैग में निकाल देती है जिससे पेट का दर्द, बुखार और पीलिया तुरंत ठीक हो जाते हैं।",
            "benefitsEn": [
                "Immediately relieves severe right upper abdominal pain, nausea, and fever.",
                "Prevents life-threatening bile peritonitis, hepatic abscess, and septic shock.",
                "Avoids high-risk emergency open surgical re-exploration."
            ],
            "benefitsHi": [
                "पेट दर्द, जी मिचलाना, उल्टी और बुखार में तुरंत चमत्कारिक राहत।",
                "पित्त के पेट में फैलने और लिवर में मवाद पड़ने के जानलेवा खतरे से पूरा बचाव।",
                "दोबारा पेट फाड़कर बड़ा ऑपरेशन करने के भारी जोखिम से बचाव।"
            ],
            "specificRisksEn": [
                "Ongoing bile drainage requiring the tube to remain in place for a few weeks until the bile duct leak seals (15-25%).",
                "Infection of the stagnant bile requiring antibiotics (3-5%).",
                "Mild abdominal pain or irritation around the catheter (5-10%).",
                "Need for additional internal bile duct stenting (ERCP / PTBD) to stop the leak.",
                "Tube clogging with thick bile sludge requiring saline flushes (5-8%)."
            ],
            "specificRisksHi": [
                "पित्त की नली का सुराख पूरी तरह बंद होने तक कुछ हफ्तों तक नली लगे रहने की आवश्यकता (15-25%)।",
                "जमे हुए पित्त में बैक्टीरिया पनपने से मवाद का खतरा (3-5%)।",
                "नली वाली जगह पर हल्का दर्द या खिंचाव (5-10%)।",
                "पित्त का रिसाव पूरी तरह रोकने के लिए पित्त की नली में अंदरूनी स्टेंट (ERCP) डालने की जरूरत पड़ सकती है।",
                "गाढ़ा पित्त जमने से नली का बंद होना (5-8%)।"
            ],
            "alternativesEn": "Open surgical re-exploration with peritoneal lavage and T-tube placement, endoscopic ERCP biliary stenting alone, or conservative observation.",
            "alternativesHi": "दोबारा पेट का बड़ा ऑपरेशन करना, मुंह के रास्ते दूरबीन से स्टेंट (ERCP) डालना, या केवल दवाइयां।",
            "sedationTypeEn": "Local anesthesia with optional IV analgesia.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार दर्द निवारक दवा।"
        }
    },
    {
        "id": "pcd-lymphocele-drainage",
        "name": "Percutaneous Drainage of Lymphocele",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV086",
        "rghsCode": "693 / 41",
        "icd10": "I89.8 (Other specified noninfective disorders of lymphatic vessels and lymph nodes)",
        "indications": [
            "Symptomatic post-surgical pelvic or retroperitoneal lymphocele following renal transplantation, pelvic lymphadenectomy, or vascular reconstruction",
            "Lymphocele producing mass effect: hydronephrosis (ureteral compression), deep vein thrombosis (iliac vein compression), or lower extremity lymphedema",
            "Infected lymphocele producing pelvic pain, leukocytosis, and pyrexia",
            "First-stage diagnostic fluid evacuation and cavity preparation prior to definitive sclerotherapy"
        ],
        "preOpCriteria": [
            "Coagulation parameters: INR <= 1.4, Platelets >= 50,000/uL",
            "Ultrasound and contrast CT/MRI documenting lymphocele size, septations, and displacement of ureter/transplant graft/iliac vessels",
            "Parenteral antibiotic prophylaxis initiated",
            "Aseptic procedure setup"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "8F - 10F Locking Pigtail Catheter", "spec": "8F/10F x 25 cm hydrophilic locking loop catheter", "standardStore": "Central IR Consignment Store" },
            { "category": "Ultrasound Probe", "name": "Curvilinear Abdominal Probe", "spec": "3.5 - 5.0 MHz curved transducer", "standardStore": "USG Suite 922" },
            { "category": "Access Needle", "name": "18G Echogenic Needle", "spec": "18G x 15 cm with depth calibration", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Guidewire", "name": "0.035 J-Tip Guidewire", "spec": "145 cm stainless steel wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Collection System", "name": "Closed Drainage Bag", "spec": "1000 mL bag with anti-reflux valve", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient supine; scan lower abdomen/iliac fossa with ultrasound to identify lymphocele and relationship to iliac vessels and transplanted kidney/ureter.",
            "Scrub, prep, and drape lower quadrant aseptically.",
            "Infiltrate 10 mL 2% Lignocaine into skin and abdominal musculature down to collection wall under ultrasound guidance.",
            "Introduce 18G needle under real-time guidance directly into center of lymphocele; confirm aspiration of clear straw-colored lymphatic fluid.",
            "Send fluid for protein, triglycerides, creatinine, cell count, and microbiology (ruling out urinoma and infection); advance 0.035 wire into cavity.",
            "Dilate tract with 8F and 10F dilators over wire.",
            "Advance 8F-10F locking pigtail catheter over wire into collection; lock pigtail securely under ultrasound confirmation.",
            "Evacuate collection completely; connect to closed gravity drainage bag; record daily 24-hour lymphatic output in preparation for sclerotherapy."
        ],
        "complications": [
            "Secondary infection / infected lymphocele transformation (3-6%)",
            "Persistent high-output lymphatic drainage (20-30%, requires chemical sclerosis)",
            "Iliac vessel injury (<0.2%)",
            "Catheter occlusion or dislodgement (5-8%)",
            "Localized pelvic pain (5-10%)"
        ],
        "maayTariffInr": 5000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "लिम्फोसील (लसिका ग्रंथि सर्जरी के बाद जमा लसिका पानी) की नली द्वारा निकासी (PCD)",
            "indicationEn": "Ultrasound-guided catheter drainage of a post-operative lymphocele compressing pelvic blood vessels or the ureter.",
            "indicationHi": "किडनी ट्रांसप्लांट या कैंसर ऑपरेशन के बाद पेड़ू/कमर में जमा हुए लसिका के पानी (लिम्फोसील) को सोनोग्राफी देखकर नली द्वारा बाहर निकालना।",
            "descriptionEn": "Under real-time ultrasound guidance, local numbing is applied to the lower abdomen. A fine needle is guided into the lymph fluid collection away from blood vessels, and a thin pigtail tube is placed to continuously empty the fluid into a bag, relieving pressure on the kidneys and legs.",
            "descriptionHi": "सोनोग्राफी स्क्रीन पर खून की नसों और गुर्दे से बचाते हुए, पेट के निचले हिस्से को सुन्न करके एक पतली नली लसिका के पानी में डाली जाती है। यह नली सारा पानी बाहर निकाल देती है जिससे पैर की सूजन और पेशाब की नली पर बना दबाव तुरंत ठीक हो जाता है।",
            "benefitsEn": [
                "Immediately relieves compression on transplanted kidney, ureter, and leg veins.",
                "Prevents deep vein thrombosis (DVT) and obstructive kidney injury.",
                "First crucial step before permanently sealing the cavity with sclerotherapy."
            ],
            "benefitsHi": [
                "ट्रांसप्लांट वाली किडनी, पेशाब की नली और जांघ की नसों पर बना दबाव तुरंत खत्म होना।",
                "पैर में खून का थक्का जमने (DVT) और किडनी फेल होने के खतरे से बचाव।",
                "नली डालकर भविष्य में दवा डालकर थैली को हमेशा के लिए सुखाने का रास्ता तैयार करना।"
            ],
            "specificRisksEn": [
                "Infection getting into the clear lymphatic fluid (3-6%).",
                "Ongoing fluid production requiring the tube to stay in place for several days/weeks (20-30%).",
                "Pelvic discomfort or soreness around the drain (5-10%).",
                "Accidental slipping or bending of the tube (5-8%).",
                "Need for chemical sclerotherapy or laparoscopic fenestration if drainage does not stop."
            ],
            "specificRisksHi": [
                "साफ पानी में बैक्टीरिया जाने से मवाद पड़ने का खतरा (3-6%)।",
                "लसिका का रिसाव जारी रहने से नली कई दिनों तक लगी रहने की जरूरत (20-30%)।",
                "पेड़ू में नली वाली जगह पर हल्का दर्द या भारीपन (5-10%)।",
                "नली का मुड़ना या बाहर खिसक जाना (5-8%)।",
                "पानी बंद न होने पर नली में दवा डालने (Sclerotherapy) या दूरबीन से ऑपरेशन की जरूरत।"
            ],
            "alternativesEn": "Laparoscopic peritoneal marsupialization / fenestration under general anesthesia, simple needle aspiration alone (high recurrence >80%), or open surgery.",
            "alternativesHi": "दूरबीन द्वारा पेट में खिड़की बनाने का ऑपरेशन (Laparoscopic Fenestration), केवल सुई से पानी खींचना (80% दोबारा भरने का खतरा), या बड़ा ऑपरेशन।",
            "sedationTypeEn": "Local anesthesia alone.",
            "sedationTypeHi": "केवल स्थानीय सुन्नता (Local Anesthesia)।"
        }
    },
    {
        "id": "percutaneous-lymphocele-sclerotherapy",
        "name": "Percutaneous Lymphocele Sclerotherapy (Ethanol, Doxycycline, Bleomycin, Povidone-Iodine)",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV087",
        "rghsCode": "693 / 41",
        "icd10": "I89.8 (Other specified noninfective disorders of lymphatic vessels and lymph nodes)",
        "indications": [
            "Persistent symptomatic pelvic or retroperitoneal lymphocele with daily output < 100-150 mL following catheter drainage",
            "Failure of simple catheter drainage alone to achieve spontaneous cavity obliteration",
            "Chemical sclerosis of lymphatic endothelial lining to achieve permanent fibrosis and prevent recurrence",
            "Alternative to laparoscopic peritoneal fenestration in post-renal transplant or post-pelvic lymphadenectomy patients"
        ],
        "preOpCriteria": [
            "Indwelling drainage catheter in place with fluoroscopic lymphocelogram confirming absence of communication with peritoneal cavity, ureter, or major vascular structures",
            "Daily drainage volume < 100 mL/24h and fluid clear/non-infected (negative gram stain/culture)",
            "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
            "Sclerosant selected and prepared: 96% Absolute Ethanol, Doxycycline (500-1000 mg in 20-50 mL saline), Bleomycin (15-30 IU), or 10% Povidone-Iodine"
        ],
        "hardware": [
            { "category": "Sclerosant Agent", "name": "Doxycycline / Absolute Ethanol / Bleomycin", "spec": "Doxycycline 500 mg vials / Absolute dehydrated alcohol ampoules / Bleomycin 15 IU", "standardStore": "DDC-14 Central" },
            { "category": "Contrast Medium", "name": "Non-Ionic Iodinated Contrast (Omnipaque 300)", "spec": "50 mL vial for fluoroscopic cavity delineation", "standardStore": "Cath Lab Main Store" },
            { "category": "Fluoroscopy System", "name": "Digital C-Arm Fluoroscopy Machine", "spec": "High-resolution roadmapping unit", "standardStore": "Cath Lab Main Store" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "10 mL for intra-cavity pre-instillation pain control", "standardStore": "DDC-14 Central" },
            { "category": "Syringes", "name": "Sterile 20 mL Luer Lock Syringes with 3-Way Stopcock", "spec": "Solvent-resistant syringes", "standardStore": "Central IR Consignment Store" }
        ],
        "techniqueSteps": [
            "Perform fluoroscopic cavity cystogram via existing catheter using 50% non-ionic contrast; record cavity volume and verify no extravasation into peritoneum or retroperitoneal veins.",
            "Aspirate contrast and lymphatic fluid completely to minimize dilution of the sclerosant agent.",
            "Pre-instill 5-10 mL 1% Lignocaine into cavity for 5 minutes if using Ethanol or Doxycycline to blunt visceral chemical pain.",
            "Instill selected sclerosant agent (e.g. Doxycycline 500-1000 mg dissolved in 20-30 mL saline, or 96% Ethanol equal to 25-50% of measured cavity volume, max 50 mL).",
            "Clamp the drainage catheter for precisely 30 to 60 minutes.",
            "Instruct patient to rotate position every 10-15 minutes (supine, left lateral, prone, right lateral) to ensure uniform contact of sclerosant with all endothelial walls.",
            "Unclamp the catheter; completely aspirate and evacuate all sclerosant agent; reconnect catheter to gravity drainage.",
            "Repeat sclerotherapy sessions daily or alternate days for 2-4 sessions until 24-hour drainage falls below 10-15 mL; obtain ultrasound to confirm cavity obliteration, then remove catheter."
        ],
        "complications": [
            "Chemical burning pain during sclerosant dwell time (20-40%, controlled with intracavitary lignocaine and IV analgesia)",
            "Systemic ethanol absorption / intoxication or hypotension (1-2% if high-volume ethanol used)",
            "Secondary infection / abscess formation (2-4%)",
            "Allergic reaction to sclerosant (<1%)",
            "Failure of sclerosis requiring laparoscopic fenestration (5-10%)"
        ],
        "maayTariffInr": 7500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "लिम्फोसील स्केलेरोथेरेपी (लसिका की थैली को केमिकल दवा डालकर हमेशा के लिए सुखाना)",
            "indicationEn": "Chemical sclerosis of a persistent lymphocele cavity using sclerosing agents (Doxycycline, Ethanol, or Bleomycin) to permanently stop fluid leak.",
            "indicationHi": "नली से लगातार पानी आना बंद न होने पर लिम्फोसील की थैली में विशेष दवा (डॉक्सीसाइक्लिन, एथेनॉल या ब्लियोमाइसिन) डालकर थैली को अंदर से हमेशा के लिए चिपकाना व सुखाना।",
            "descriptionEn": "Through the existing drainage catheter, an X-ray dye test confirms that the cavity is completely closed. A special chemical medication (such as Doxycycline or Alcohol) is injected into the cavity. The tube is clamped for 30-60 minutes while the patient turns side to side so the medication coats the entire inner lining, irritating the walls so they scar and permanently stick shut.",
            "descriptionHi": "मौजूदा नली के रास्ते एक्स-रे डाई डालकर पहले थैली की जांच की जाती है। फिर नली से एक विशेष दवा थैली के अंदर डाली जाती है और 30 से 60 मिनट के लिए नली बंद रखी जाती है। इस दौरान मरीज को करवट बदलने को कहा जाता है ताकि दवा थैली की दीवारों को आपस में चिपकाकर हमेशा के लिए बंद कर दे। इसके बाद दवा निकाल ली जाती है।",
            "benefitsEn": [
                "Permanently cures stubborn lymphatic fluid leak without open surgery.",
                "Allows the drainage tube to be safely removed within a few days.",
                "Over 85-95% success rate in preventing lymphocele recurrence."
            ],
            "benefitsHi": [
                "बिना किसी चीरे या ऑपरेशन के लसिका के पानी के रिसाव को हमेशा के लिए समाप्त करना।",
                "कुछ ही दिनों में नली को हमेशा के लिए बाहर निकालना संभव होना।",
                "85 से 95% मामलों में बीमारी को दोबारा लौटने से रोकने में अत्यंत सफल।"
            ],
            "specificRisksEn": [
                "Chemical burning sensation or pain in the pelvis during dwell time (20-40%, managed with local numbing and painkillers).",
                "Mild fever or flu-like symptoms for 1-2 days (10-15%).",
                "Infection of the cavity requiring antibiotics (2-4%).",
                "Failure to seal completely, requiring repeat session or keyhole surgery (5-10%).",
                "Slight dizziness if alcohol is used (<2%)."
            ],
            "specificRisksHi": [
                "दवा अंदर रहने के दौरान पेड़ू में हल्की जलन या दर्द महसूस होना (20-40%, दर्द निवारक से ठीक हो जाता है)।",
                "प्रक्रिया के बाद 1-2 दिन हल्का बुखार या बदन दर्द (10-15%)।",
                "थैली में संक्रमण होना (2-4%)।",
                "पूरी तरह न सूखने पर दोबारा दवा डालने या दूरबीन ऑपरेशन की आवश्यकता (5-10%)।",
                "अल्कोहल के इस्तेमाल से हल्का नशा या चक्कर जैसा लगना (<2%)।"
            ],
            "alternativesEn": "Laparoscopic peritoneal fenestration / marsupialization under general anesthesia, prolonged simple catheter drainage, or open surgical excision.",
            "alternativesHi": "दूरबीन द्वारा पेट में खिड़की बनाने का ऑपरेशन (Laparoscopic Fenestration), लंबे समय तक नली लगाए रखना, या बड़ा ऑपरेशन।",
            "sedationTypeEn": "Local intracavitary anesthesia with IV analgesia / mild sedation.",
            "sedationTypeHi": "नली के अंदर सुन्न करने की दवा और नस द्वारा दर्द निवारक इंजेक्शन।"
        }
    },
    {
        "id": "pcd-retroperitoneal-hematoma-aspiration",
        "name": "Percutaneous Aspiration and Drainage of Retroperitoneal Hematoma",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV088",
        "rghsCode": "693 / 41",
        "icd10": "K68.11 (Postprocedural retroperitoneal abscess/hematoma) / S36.892 (Contusion of retroperitoneum)",
        "indications": [
            "Secondary infection of a retroperitoneal hematoma (fever, leukocytosis, gas on CT) following pelvic fracture, surgery, or anticoagulation",
            "Massive expanding retroperitoneal hematoma causing severe compressive femoral neuropathy or bowel obstruction AFTER active arterial bleeding has been ruled out / embolized",
            "Chronic liquefied retroperitoneal hematoma producing intractable pain, nausea, and mechanical compression",
            "Diagnostic sampling to rule out abscess or mycotic transformation"
        ],
        "preOpCriteria": [
            "CT-Angiography confirming complete absence of active arterial contrast extravasation / pseudoaneurysm (embolization must precede drainage if active bleeding exists)",
            "Coagulation status normalized: INR <= 1.4, Platelets >= 75,000/uL, anticoagulants reversed",
            "Broad-spectrum intravenous antibiotics initiated",
            "CT or ultrasound guidance ready"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "12F - 16F Large-Bore Locking Catheter", "spec": "12F-16F multi-hole sump or pigtail drainage catheter with large side-eyelets", "standardStore": "Central IR Consignment Store" },
            { "category": "Puncture Needle", "name": "18G Trocar Introducer Needle", "spec": "18G x 15-20 cm needle with large lumen", "standardStore": "D9211 CT Suite Store" },
            { "category": "Guidewire", "name": "0.035 Super Stiff Amplatz Wire", "spec": "145 cm heavy-duty wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Fascial Dilators", "name": "Vascular / Tract Dilator Set", "spec": "8F, 10F, 12F, 14F, 16F dilators", "standardStore": "D9211 CT Suite Store" },
            { "category": "Saline Flush Kit", "name": "Normal Saline Irrigation Kit", "spec": "500 mL sterile saline with 50 mL catheter-tip syringe", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient prone or lateral decubitus on CT table; acquire contrast-enhanced CT to confirm absence of active pseudoaneurysm or blush.",
            "Select posterolateral trans-muscular trajectory through quadratus lumborum avoiding kidney, colon, and ureter.",
            "Sterilize flank skin; infiltrate 15-20 mL 2% Lignocaine down to retroperitoneal fascia under CT fluoroscopy.",
            "Advance 18G needle into the center of the liquefied hematoma; aspirate dark, altered 'crankcase oil' liquefied blood and send for culture.",
            "Introduce 0.035 stiff wire and curl loops within the collection cavity.",
            "Dilate entry tract progressively up to 14F or 16F over the stiff wire.",
            "Introduce 12F-16F large-bore drainage catheter over wire; confirm complete deployment inside the hematoma on CT.",
            "Aspirate thick lysed blood; perform gentle low-pressure sterile saline irrigation; attach to gravity drainage bag; anchor securely with 2-0 silk suture."
        ],
        "complications": [
            "Reactivation of retroperitoneal hemorrhage / rebleeding (3-5%, requires immediate transarterial embolization)",
            "Secondary infection / abscess transformation of remaining clot (5-10%)",
            "Catheter occlusion by thick, non-liquefied blood clots (10-20%)",
            "Femoral nerve sensory paresthesia (2-4%)",
            "Localized flank pain (15-20%)"
        ],
        "maayTariffInr": 7000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित रेट्रोपेरिटोनियल हेमेटोमा निकासी (कमर के अंदरूनी जमे हुए खून की थैली को निकालना)",
            "indicationEn": "CT-guided aspiration and large-bore catheter drainage of an infected or severely compressive retroperitoneal blood clot (hematoma).",
            "indicationHi": "चोट, खून पतला करने की दवाओं या ऑपरेशन के बाद कमर के अंदरूनी हिस्से में जमे हुए बड़े खून के थक्के (हेमेटोमा) को सीटी स्कैन देखकर नली द्वारा बाहर निकालना।",
            "descriptionEn": "After confirming that there is no active bleeding using a CT angiogram, the flank is numbed with local anesthesia. A large-bore drainage tube is carefully placed through the back muscles into the liquefied blood collection to safely remove the blood clot and relieve severe nerve compression and pain.",
            "descriptionHi": "सीटी एंजियोग्राफी द्वारा यह पक्का करने के बाद कि कोई नस खुली नहीं है, कमर की पीठ को सुन्न करके एक विशेष नली जमे हुए खून के थक्के में डाली जाती है। यह नली पिघले हुए काले-भूरे खून को बाहर निकाल देती है जिससे कमर और जांघ की नसों पर बना भारी दबाव तुरंत हट जाता है।",
            "benefitsEn": [
                "Relieves severe compressive back and leg pain caused by large internal blood collections.",
                "Prevents life-threatening infection of the pooled blood into a massive abscess.",
                "Avoids high-risk emergency open surgery which can trigger uncontrollable bleeding."
            ],
            "benefitsHi": [
                "कमर और पैर में खून का थक्का जमने से होने वाले भयंकर दर्द से तुरंत राहत।",
                "जमे हुए खून में गंभीर मवाद या सेप्सिस बनने के जानलेवा खतरे से बचाव।",
                "पेट फाड़कर किए जाने वाले बड़े और अत्यधिक रक्तस्राव वाले ऑपरेशन से बचाव।"
            ],
            "specificRisksEn": [
                "Re-bleeding from damaged vessels as pressure drops, requiring urgent angiographic coiling (3-5%).",
                "Tube blockage with thick, jelly-like blood clots requiring saline flushes (10-20%).",
                "Infection getting into the remaining blood clot (5-10%).",
                "Temporary numbness or weakness in the front of the thigh (2-4%).",
                "Flank soreness and muscle stiffness (15-20%)."
            ],
            "specificRisksHi": [
                "दबाव हटने पर दोबारा खून रिसने का जोखिम, जिसके लिए तुरंत नस बंद करने की प्रक्रिया (Embolization) करनी पड़ सकती है (3-5%)।",
                "खून के कड़े थक्कों से नली का बार-बार बंद होना (10-20%)।",
                "बचे हुए खून में बैक्टीरिया का संक्रमण होना (5-10%)।",
                "जांघ के अगले हिस्से में अस्थायी सुन्नपन या भारीपन (2-4%)।",
                "कमर की मांसपेशियों में कुछ दिनों तक दर्द व जकड़न (15-20%)।"
            ],
            "alternativesEn": "Conservative watchful waiting with blood transfusions and pain management, open surgical retroperitoneal evacuation, or transarterial embolization alone.",
            "alternativesHi": "केवल दवाइयों और खून चढ़ाने पर निर्भर रहना, बेहोश करके बड़ा ऑपरेशन, या केवल नसों की एंजियोग्राफी।",
            "sedationTypeEn": "Local anesthesia with IV conscious sedation and hemodynamic monitoring.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक/दर्द निवारक दवा।"
        }
    },
    {
        "id": "usg-soft-tissue-muscle-hematoma-evacuation",
        "name": "Ultrasound-Guided Soft Tissue / Muscle Hematoma Evacuation",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV089",
        "rghsCode": "693 / 41",
        "icd10": "M62.89 (Other specified disorders of muscle) / T81.0 (Hemorrhage and hematoma complicating a procedure)",
        "indications": [
            "Symptomatic rectus sheath, iliopsoas, gluteal, or thigh muscle hematoma in anticoagulated or trauma patients",
            "Severe localized pain, swelling, rapid hemoglobin drop, or impending compartment syndrome of an extremity",
            "Secondary bacterial infection of a soft tissue hematoma (abscess transformation)",
            "Failed spontaneous reabsorption of large chronic liquefied hematoma causing mass effect on adjacent neurovascular bundles"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.5, Platelets >= 50,000/uL; therapeutic anticoagulation held or reversed (Protamine / Vitamin K / PCC) if active bleeding suspected",
            "Color Doppler ultrasound documenting liquefied center and absence of active arterial pseudoaneurysm or jet",
            "Aseptic procedure tray and appropriate needle/catheter prepared",
            "Baseline limb pulses and neurological status charted"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "8.5F - 10F Pigtail Catheter / 16G Large Needle", "spec": "8.5F/10F locking loop catheter or 14G-16G large-bore cannula", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Probe", "name": "Linear & Curvilinear High-Resolution Probes", "spec": "7.5 - 12 MHz linear probe for superficial muscle, 3.5 MHz curved for deep pelvic muscle", "standardStore": "USG Suite 922" },
            { "category": "Guidewire", "name": "0.035 J-Tip Guidewire", "spec": "80-145 cm stainless steel wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Syringes & Tubing", "name": "50 mL Luer Lock Syringes with 3-Way Stopcock", "spec": "Manual evacuation kit", "standardStore": "DDC-14 Central" },
            { "category": "Drainage Bag", "name": "Gravity Drainage Bag", "spec": "1000 mL closed collection bag", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient comfortably based on hematoma site; perform ultrasound survey with Color Doppler to confirm liquefaction and rule out active arterial pseudoaneurysm.",
            "Prep skin widely with chlorhexidine; infiltrate 10-15 mL 2% Lignocaine into skin and muscle sheath.",
            "For simple aspiration: introduce 14G-16G needle into center of collection; aspirate liquefied altered dark blood until resistance is met.",
            "For catheter placement: introduce 18G needle, advance 0.035 wire, dilate tract to 10F, and advance 8.5F-10F locking pigtail catheter.",
            "Lock pigtail; evacuate contents completely; confirm collapse of muscle collection on ultrasound.",
            "Send aspirated sample for bacterial culture and Gram stain; connect catheter to closed gravity bag or apply pressure dressing after needle withdrawal; monitor limb girth and distal pulses."
        ],
        "complications": [
            "Re-bleeding into the muscle cavity (2-4%, requires compression or transcatheter embolization)",
            "Secondary bacterial infection of remaining clot (2-5%)",
            "Catheter blockage by firm clots (5-10%)",
            "Transient muscle tenderness and bruising (15-25%)",
            "Skin ecchymosis around puncture site (<5%)"
        ],
        "maayTariffInr": 3500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सोनोग्राफी-निर्देशित मांसपेशी / त्वचा के अंदरूनी खून के थक्के की निकासी (हेमेटोमा ड्रेनेज)",
            "indicationEn": "Ultrasound-guided aspiration or catheter drainage of a painful muscle or soft tissue hematoma caused by trauma, anticoagulation, or surgery.",
            "indicationHi": "चोट, खून पतला करने वाली दवाओं या ऑपरेशन के बाद मांसपेशी (जैसे पेट, जांघ या कूल्हे) में जमे खून के बड़े थक्के (हेमेटोमा) को सोनोग्राफी देखकर सुई या नली द्वारा बाहर निकालना।",
            "descriptionEn": "Under real-time ultrasound guidance, the swelling is scanned to ensure no active bleeding vessel remains. Local numbing is given, and a needle or soft drainage tube is guided into the collection to aspirate the dark liquefied blood, immediately relieving swelling, pain, and pressure on adjacent nerves.",
            "descriptionHi": "सोनोग्राफी से मांसपेशी में जमे खून को देखकर, त्वचा को सुन्न करके एक सुई या पतली नली डाली जाती है। यह नली सारा जमा हुआ काला खून बाहर खींच लेती है जिससे सूजन, असहनीय दर्द और नसों पर बना दबाव तुरंत ठीक हो जाता है।",
            "benefitsEn": [
                "Immediate relief of severe muscle pain, tightness, and dangerous tissue swelling.",
                "Prevents the pooled blood from turning into an infected abscess.",
                "Avoids surgical incisions and muscle cutting in high-risk patients on blood thinners."
            ],
            "benefitsHi": [
                "मांसपेशी के भयंकर खिंचाव, दर्द और खतरनाक सूजन से तुरंत मुक्ति।",
                "जमे हुए खून में मवाद पड़ने और घाव सड़ने के खतरे से पूरा बचाव।",
                "खून पतला करने की दवा ले रहे मरीजों में बिना चीरा लगाए सुरक्षित उपचार।"
            ],
            "specificRisksEn": [
                "Mild muscle soreness and bruising around the site for a few days (15-25%).",
                "Re-accumulation of blood requiring repeat aspiration (2-4%).",
                "Tube clogging with solid jelly-like blood clots (5-10%).",
                "Infection entering the blood collection (2-5%).",
                "Temporary skin numbness around the puncture mark (<2%)."
            ],
            "specificRisksHi": [
                "मांसपेशी में कुछ दिनों तक हल्का दर्द और नील पड़ना (15-25%)।",
                "खून दोबारा जमा होने पर दोबारा सुई लगाने की जरूरत (2-4%)।",
                "खून के कड़े टुकड़ों से नली का बंद होना (5-10%)।",
                "अंदरूनी हिस्से में संक्रमण का जोखिम (2-5%)।",
                "सुई के निशान के पास हल्का सुन्नपन (<2%)।"
            ],
            "alternativesEn": "Surgical incision and evacuation of hematoma in the operating theatre, conservative ice packs and bed rest, or compression bandages.",
            "alternativesHi": "ऑपरेशन थिएटर में चीरा लगाकर खून निकालना, बर्फ की सिकाई और आराम, या केवल दवाइयां।",
            "sedationTypeEn": "Local anesthesia alone.",
            "sedationTypeHi": "केवल स्थानीय सुन्नता (Local Anesthesia)।"
        }
    },
    {
        "id": "sclerotherapy-simple-hepatic-cysts",
        "name": "Sclerotherapy of Simple Hepatic Cysts",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV090",
        "rghsCode": "693 / 41",
        "icd10": "K76.89 (Other specified diseases of liver) / Q44.6 (Cystic disease of liver)",
        "indications": [
            "Large symptomatic simple hepatic cyst (>5-10 cm) causing persistent right upper quadrant pain, early satiety, or palpable mass",
            "Extrinsic mass effect compressing biliary tree (obstructive jaundice) or portal vein/IVC",
            "Recurrence of symptoms following prior simple needle aspiration (aspiration alone has >90% recurrence rate)",
            "Destruction of secretor epithelial cyst lining using absolute alcohol (99% Ethanol) or Minocycline/Doxycycline to achieve permanent obliteration"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "Triple-phase CT or MRI confirming benign simple cyst (thin wall, no mural nodules, no internal septations) and ruling out biliary cystadenoma, echinococcal hydatid cyst, or cyst communicating with biliary tree",
            "Pre-procedure hydatid serology (Echinococcus IgG ELISA) negative",
            "NPO 4-6 hours; informed consent documented"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "8.5F Locking Pigtail Catheter", "spec": "8.5F x 25 cm alcohol-resistant locking loop catheter with Trocar/Seldinger set", "standardStore": "Central IR Consignment Store" },
            { "category": "Sclerosant", "name": "99% Absolute Dehydrated Ethanol / Doxycycline", "spec": "Sterile absolute alcohol vials (preservative-free) or Doxycycline 1 g", "standardStore": "DDC-14 Central" },
            { "category": "Contrast Media", "name": "Non-Ionic Iodinated Contrast", "spec": "50 mL contrast for cystography", "standardStore": "Cath Lab Main Store" },
            { "category": "Ultrasound Transducer", "name": "Curvilinear Abdominal Probe", "spec": "3.5 MHz probe with needle guide", "standardStore": "USG Suite 922" },
            { "category": "Syringes", "name": "Alcohol-Resistant Luer-Lock Syringes", "spec": "20 mL and 50 mL polypropylene syringes with 3-way stopcocks", "standardStore": "Central IR Consignment Store" }
        ],
        "techniqueSteps": [
            "Position patient supine; scan liver with ultrasound to identify cyst and choose safe trajectory through 1-2 cm of normal liver parenchyma (preventing peritoneal spillage).",
            "Sterilize right upper quadrant skin; infiltrate 10-15 mL 2% Lignocaine down to liver capsule under real-time acoustic control.",
            "Introduce 18G needle into center of cyst under ultrasound; advance 0.035 wire and dilate tract to 8.5F.",
            "Advance 8.5F alcohol-resistant pigtail catheter over wire into cyst; lock loop securely.",
            "Aspirate cyst fluid completely and measure total volume (send fluid for cytology, CEA, CA 19-9, and bilirubin).",
            "Inject 20-30 mL non-ionic contrast under fluoroscopy (cystogram) to strictly verify absence of contrast passage into intrahepatic bile ducts.",
            "Aspirate all contrast; pre-instill 5 mL 1% Lignocaine into cyst cavity.",
            "Slowly instill 99% Absolute Ethanol equivalent to 15-25% of aspirated volume (maximum 50-100 mL per session); clamp catheter for 15-20 minutes while rotating patient into left/right lateral and prone positions.",
            "Aspirate all ethanol completely to avoid systemic absorption; flush cavity with saline; remove catheter or keep to gravity for 24h if repeat session planned."
        ],
        "complications": [
            "Chemical burning pain during ethanol dwell time (15-25%, managed with intracavitary lignocaine and IV analgesia)",
            "Systemic alcohol intoxication / flushed sensation / mild inebriation (2-5% if dwell time exceeds 20 minutes)",
            "Transient transaminitis / mild liver enzyme elevation (10-15%)",
            "Intraperitoneal alcohol leak causing severe chemical peritonitis (<0.5%, prevented by transhepatic route)",
            "Cyst recurrence requiring repeat sclerotherapy (5-10%)"
        ],
        "maayTariffInr": 9000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "लिवर की साधारण पानी की गांठ (हेपेटिक सिस्ट) की स्केलेरोथेरेपी (अल्कोहल डालकर गांठ को सुखाना)",
            "indicationEn": "Percutaneous drainage and chemical sclerotherapy of a large, symptomatic simple liver cyst using absolute alcohol to permanently prevent fluid recurrence.",
            "indicationHi": "लिवर में बनी पानी की बड़ी गांठ (सिस्ट) से दर्द और भारीपन होने पर, गांठ का सारा पानी निकालकर उसमें विशेष मेडिकल अल्कोहल (एथेनॉल) डालकर गांठ को हमेशा के लिए सुखाना।",
            "descriptionEn": "Under ultrasound guidance, the abdomen is numbed and a thin catheter is placed into the liver cyst to remove all fluid. An X-ray dye test confirms the cyst is separate from bile ducts. Pure medical alcohol is injected into the empty cyst for 15-20 minutes to destroy the inner lining so it can never produce fluid again, after which the alcohol is completely sucked back out.",
            "descriptionHi": "सोनोग्राफी से लिवर की पानी की थैली को देखकर, त्वचा को सुन्न करके एक बारीक नली डाली जाती है और सारा पानी निकाल लिया जाता है। एक्स-रे से यह जांचने के बाद कि थैली का पित्त की नली से कोई संबंध नहीं है, थैली में 15 से 20 मिनट के लिए मेडिकल अल्कोहल (एथेनॉल) भरा जाता है ताकि थैली की अंदरूनी परत नष्ट हो जाए और दोबारा पानी न बने। फिर सारा अल्कोहल वापस खींच लिया जाता है।",
            "benefitsEn": [
                "Permanently cures large, painful liver cysts with a 90-95% success rate.",
                "Eliminates the high 90% recurrence rate of simple needle aspiration.",
                "Avoids laparoscopic or open surgical cyst de-roofing (deroofing/fenestration) and general anesthesia."
            ],
            "benefitsHi": [
                "बिना पेट काटे 90 से 95% मामलों में लिवर की पानी की गांठ को हमेशा के लिए सुखाना।",
                "केवल सुई से पानी निकालने पर जो गांठ दोबारा भर जाती है, उसे स्थायी रूप से ठीक करना।",
                "ऑपरेशन और बेहोशी के भारी जोखिम से 100% बचाव।"
            ],
            "specificRisksEn": [
                "Temporary burning sensation or ache in the upper abdomen during alcohol instillation (15-25%, managed with pain relievers).",
                "Mild feeling of warmth, dizziness, or lightheadedness from minor alcohol absorption (2-5%).",
                "Mild fever or temporary rise in liver enzymes (10-15%).",
                "Small risk of cyst fluid returning requiring a second session (5-10%).",
                "Bleeding or infection in the liver (<1%)."
            ],
            "specificRisksHi": [
                "अल्कोहल अंदर रहने के दौरान पेट के ऊपरी हिस्से में हल्की जलन या दर्द (15-25%, दर्द की दवा से ठीक हो जाता है)।",
                "अल्कोहल के हल्के असर से शरीर में गर्मी लगना या हल्का चक्कर आना (2-5%)।",
                "प्रक्रिया के बाद हल्का बुखार या लिवर की जांच में थोड़ा उतार-चढ़ाव (10-15%)।",
                "गांठ के पूरी तरह न सूखने पर दोबारा दवा डालने की जरूरत पड़ना (5-10%)।",
                "लिवर में हल्का खून रिसने का जोखिम (<1%)।"
            ],
            "alternativesEn": "Laparoscopic or open surgical cyst deroofing / fenestration under general anesthesia, or simple needle aspiration alone (high recurrence).",
            "alternativesHi": "दूरबीन या चीरे द्वारा गांठ की छत काटने का ऑपरेशन (Laparoscopic Deroofing), या केवल सुई से पानी खींचना।",
            "sedationTypeEn": "Local anesthesia with IV conscious sedation and analgesia.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक/दर्द निवारक दवा।"
        }
    },
    {
        "id": "sclerotherapy-adpkd-renal-cysts",
        "name": "Sclerotherapy of Autosomal Dominant Polycystic Kidney Disease (ADPKD) Cysts",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV091",
        "rghsCode": "693 / 41",
        "icd10": "Q61.2 (Polycystic kidney, adult type / ADPKD) / N28.1 (Cyst of kidney, acquired)",
        "indications": [
            "Dominant, exceptionally large painful cyst (>5-8 cm) in patients with Autosomal Dominant Polycystic Kidney Disease (ADPKD)",
            "Intractable chronic flank/abdominal pain refractory to analgesics due to capsular stretch by dominant cyst",
            "Renal cyst causing extrinsic compression of renal pelvic-infundibular drainage resulting in localized obstruction",
            "Selective volume reduction of dominant cyst to relieve pain while preserving residual functioning nephrons"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "Pre-procedure CT/MRI identifying dominant cyst responsible for focal pain; confirming absence of calcifications, septations, or enhancement (Bosniak IIF/III/IV excluded)",
            "Baseline serum creatinine, eGFR, and blood pressure recorded",
            "Absolute alcohol (99% Ethanol) or Doxycycline/Bleomycin prepared"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "7F - 8.5F Alcohol-Resistant Locking Pigtail Catheter", "spec": "7F/8.5F x 25 cm polyurethane catheter with locking string", "standardStore": "Central IR Consignment Store" },
            { "category": "Ultrasound Probe", "name": "Curvilinear High-Resolution Probe", "spec": "3.5 - 5.0 MHz curved transducer with biopsy guidance line", "standardStore": "USG Suite 922" },
            { "category": "Sclerosant", "name": "99% Absolute Ethanol / Doxycycline", "spec": "Preservative-free sterile ethanol ampoules or Doxycycline 500 mg", "standardStore": "DDC-14 Central" },
            { "category": "Contrast Medium", "name": "Non-Ionic Contrast", "spec": "50 mL contrast for fluoroscopic cystogram", "standardStore": "Cath Lab Main Store" },
            { "category": "Fluoroscopy System", "name": "Digital C-Arm Fluoroscopy Machine", "spec": "Real-time radiographic imaging", "standardStore": "Cath Lab Main Store" }
        ],
        "techniqueSteps": [
            "Position patient prone or lateral oblique; scan kidney with ultrasound to locate dominant culprit cyst causing capsular distension.",
            "Sterilize flank; infiltrate 10-15 mL 2% Lignocaine into skin, subcutis, and renal capsule under ultrasound.",
            "Introduce 18G needle under direct ultrasound guidance into the center of the dominant cyst; advance 0.035 wire and dilate tract to 8F.",
            "Advance 7F-8.5F alcohol-resistant pigtail catheter over wire into cyst cavity; lock loop securely.",
            "Completely aspirate cyst fluid and measure total volume; perform fluoroscopic cystography to strictly confirm absence of communication with the renal calyces or pelvicalyceal collecting system.",
            "Completely aspirate contrast; pre-instill 3-5 mL 1% Lignocaine into cavity to blunt chemical pain.",
            "Instill 99% Absolute Ethanol (equal to 15-20% of aspirated volume, max 30-50 mL) or Doxycycline solution (500 mg in 20 mL saline); clamp catheter for 15 minutes while rotating patient into prone, oblique, and lateral postures.",
            "Completely aspirate all sclerosant; flush cavity with saline; verify total fluid removal on ultrasound; withdraw catheter smoothly and apply sterile compression dressing."
        ],
        "complications": [
            "Flank chemical burning pain during sclerotherapy (20-30%, managed with analgesia)",
            "Microscopic hematuria (5-10%, self-limiting)",
            "Transient creatinine rise or renal parenchymal irritation (2-4%)",
            "Inadvertent pelvicalyceal sclerosant extravasation (<0.2%, prevented by strict pre-sclerosis cystogram)",
            "Recurrence of cyst or compensatory enlargement of adjacent cysts (10-15%)"
        ],
        "maayTariffInr": 8500,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "पॉलीसिस्टिक किडनी रोग (ADPKD) की प्रमुख पानी की गांठ की स्केलेरोथेरेपी (अल्कोहल द्वारा सिस्ट सुखाना)",
            "indicationEn": "Percutaneous aspiration and chemical sclerosis of a dominant, painful kidney cyst in autosomal dominant polycystic kidney disease (ADPKD).",
            "indicationHi": "आनुवंशिक पॉलीसिस्टिक किडनी रोग (ADPKD) में असहनीय दर्द पैदा करने वाली सबसे बड़ी पानी की गांठ को सुखाकर कमर के दर्द से राहत दिलाना और बची हुई किडनी को सुरक्षित रखना।",
            "descriptionEn": "With the patient lying on their stomach, ultrasound locates the specific large cyst causing painful stretching of the kidney capsule. Under local anesthesia, a small catheter is placed into the cyst to drain all fluid. After confirming with X-ray dye that the cyst does not connect to the urinary collecting system, medical alcohol or medication is instilled for 15 minutes to permanently collapse the cyst before being completely removed.",
            "descriptionHi": "मरीज को पेट के बल लिटाकर सोनोग्राफी से दर्द पैदा करने वाली सबसे बड़ी गांठ को देखा जाता है। कमर को सुन्न करके एक पतली नली गांठ में डाली जाती है और सारा पानी निकाल लिया जाता है। एक्स-रे से यह पक्का करने के बाद कि गांठ का पेशाब की नली से कोई संपर्क नहीं है, 15 मिनट के लिए मेडिकल अल्कोहल भरा जाता है ताकि गांठ हमेशा के लिए सूख जाए। फिर दवा को पूरी तरह बाहर खींच लिया जाता है।",
            "benefitsEn": [
                "Immediately relieves severe, chronic flank and back pain caused by cyst stretching.",
                "Selectively collapses dominant cysts without harming remaining functioning kidney tissue.",
                "Minimally invasive day-care procedure avoiding high-risk surgical cyst unroofing."
            ],
            "benefitsHi": [
                "कमर और पीठ के पुराने असहनीय खिंचाव वाले दर्द से तुरंत स्थाई आराम।",
                "बची हुई सामान्य किडनी को कोई नुकसान पहुंचाए बिना केवल दुखने वाली बड़ी गांठ को खत्म करना।",
                "बिना किसी बड़े ऑपरेशन या चीरे के मात्र सुन्न करके होने वाला सुरक्षित उपचार।"
            ],
            "specificRisksEn": [
                "Flank burning or pain while medication is in the cyst (20-30%, managed with local numbing).",
                "Pinkish or bloody urine (microscopic hematuria) for 1-2 days (5-10%).",
                "Cyst refilling or neighboring cysts enlarging over time (10-15%).",
                "Temporary slight rise in kidney blood values (<3%).",
                "Infection of the treated cyst (<2%)."
            ],
            "specificRisksHi": [
                "दवा अंदर रहने के दौरान कमर में हल्की जलन या दर्द महसूस होना (20-30%)।",
                "पेशाब में 1-2 दिन हल्का गुलाबी रंग या खून का अंश आना (5-10%)।",
                "बीमारी के आनुवंशिक होने के कारण भविष्य में पास की किसी अन्य गांठ का बढ़ना (10-15%)।",
                "किडनी की जांच (क्रिएटिनिन) में हल्का अस्थायी उतार-चढ़ाव (<3%)।",
                "गांठ में संक्रमण होना (<2%)।"
            ],
            "alternativesEn": "Laparoscopic or open surgical cyst decortication, lifelong oral pain medications, or watchful waiting.",
            "alternativesHi": "दूरबीन या चीरे द्वारा गांठ की दीवार काटने का ऑपरेशन (Surgical Decortication), केवल दर्द की गोलियां खाना, या इंतजार करना।",
            "sedationTypeEn": "Local anesthesia with IV analgesia / mild conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक दवा।"
        }
    }
]
