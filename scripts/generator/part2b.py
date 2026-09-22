# -*- coding: utf-8 -*-
"""
Part 2B: Pelvic, Psoas & Peritoneal Drainages (Procedures 64 to 73)
"""

DATA_PART2B = [
    {
        "id": "ct-splenic-abscess-drainage",
        "name": "CT-Guided Percutaneous Splenic Abscess Drainage",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV064",
        "rghsCode": "693 / 41",
        "icd10": "D73.3 (Abscess of spleen)",
        "indications": [
            "Unilocular or discrete multilocular splenic abscess in patients unfit for primary splenectomy",
            "Persistent septic spikes and left upper quadrant tenderness despite broad-spectrum intravenous antibiotics",
            "Splenic collection secondary to infective endocarditis, typhoid fever, or contiguous infection",
            "Spleen-preserving catheter drainage in immunocompromised or pediatric/young adult patients"
        ],
        "preOpCriteria": [
            "Coagulation parameters: INR <= 1.4, Platelet count >= 60,000/uL",
            "Diagnostic contrast CT documenting safe percutaneous subcostal or lower intercostal access avoiding left pleura/lung and colon",
            "Broad-spectrum IV antibiotics initiated >= 24 hours prior",
            "NPO for 4-6 hours; baseline vitals and ICU backup confirmed"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "10F - 12F Locking Pigtail Catheter", "spec": "10F/12F x 25-30 cm hydrophilic locking loop catheter with Trocar/Seldinger set", "standardStore": "Central IR Consignment Store" },
            { "category": "Access Needle", "name": "18G Trocar / Chiba Access Needle", "spec": "18G x 15-20 cm echogenic needle with stylet", "standardStore": "D9211 CT Suite Store" },
            { "category": "Guidewire", "name": "0.035 Amplatz Super Stiff Guidewire", "spec": "145 cm length with 3 mm J-tip", "standardStore": "Cath Lab Main Store" },
            { "category": "Fascial Dilator", "name": "8F - 12F Vascular Dilators", "spec": "Serial polyurethane radiopaque dilators", "standardStore": "D9211 CT Suite Store" },
            { "category": "Drainage Bag", "name": "Closed Gravity Drainage Bag System", "spec": "1000 mL collection bag with anti-reflux valve and luer lock connector", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient supine or right lateral oblique on CT table; perform planning scan with 3-5 mm slices through spleen.",
            "Select access route traversing minimal normal splenic parenchyma and avoiding costophrenic sulcus/pleural recess and splenic flexure.",
            "Sterilize left flank/subcostal area; administer 10-15 mL 2% Lignocaine down to the splenic capsule under CT verification.",
            "Advance 18G Chiba needle into the center of the splenic abscess under tandem CT slice confirmation; remove stylet and aspirate frank pus.",
            "Collect pus for aerobic, anaerobic, fungal, and AFB cultures; insert 0.035 Amplatz stiff wire and coil within the cavity.",
            "Dilate the tract sequentially over the wire using 8F, 10F, and 12F fascial dilators.",
            "Advance 10F-12F locking pigtail drainage catheter over the wire into the cavity; lock the pigtail securely and withdraw wire.",
            "Aspirate cavity contents completely; flush gently with 5-10 mL sterile saline without excessive pressure; secure catheter to skin with 2-0 silk and suture wing; attach to closed gravity bag."
        ],
        "complications": [
            "Splenic hemorrhage / subcapsular hematoma (2-5%)",
            "Left pleural transgression / pneumothorax or empyema (1-3%)",
            "Transient bacteremia / septic shock post-drainage (3-6%)",
            "Persistent abscess cavity or secondary multiloculation requiring secondary intervention or splenectomy (10-15%)",
            "Colonic perforation (<0.5%)"
        ],
        "maayTariffInr": 6500,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित तिल्ली (स्प्लीन) के फोड़े से मवाद निकासी (PCD)",
            "indicationEn": "Percutaneous drainage of infected splenic abscess to resolve sepsis and preserve splenic immune function without major surgery.",
            "indicationHi": "तिल्ली (स्प्लीन) के अंदर बने मवाद के फोड़े से संक्रमण व तेज बुखार नियंत्रित करने और बिना तिल्ली निकाले नली द्वारा मवाद साफ करने हेतु।",
            "descriptionEn": "Under real-time CT scan guidance and local numbing injection, a fine needle is guided into the infected splenic abscess. A flexible pigtail drainage tube is placed over a wire into the collection to continuously drain the pus into an external collection bag.",
            "descriptionHi": "सीटी स्कैन में तिल्ली के फोड़े को देखकर, बाईं पसली के नीचे सुन्न करने का इंजेक्शन लगाकर एक बारीक नली (पिगटेल कैथेटर) सीधे मवाद की थैली में डाली जाती है ताकि सारा मवाद बाहर थैली में निकल जाए और मरीज को बड़ा ऑपरेशन न कराना पड़े।",
            "benefitsEn": [
                "Evacuates life-threatening intra-abdominal sepsis promptly.",
                "Preserves the spleen and its vital immunological protection against encapsulated bacteria.",
                "Avoids high-risk emergency open splenectomy surgery and lengthy hospital stays."
            ],
            "benefitsHi": [
                "संक्रमण और तेज बुखार से तुरंत राहत मिलती है।",
                "तिल्ली को कटने से बचाकर शरीर की रोग प्रतिरोधक क्षमता सुरक्षित रखी जाती है।",
                "पेट के बड़े और जोखिम भरे ऑपरेशन (Splenectomy) से बचाव होता है।"
            ],
            "specificRisksEn": [
                "Bleeding from vascular splenic tissue or subcapsular hematoma (2-5%).",
                "Left-sided chest irritation, pleural fluid leak, or minor pneumothorax (1-3%).",
                "Temporary shivering or fever spike after pus drainage (3-6%).",
                "Incomplete pus clearance requiring catheter upsizing or eventual splenectomy (10-15%).",
                "Catheter blockage or accidental dislodgement requiring replacement."
            ],
            "specificRisksHi": [
                "तिल्ली से हल्का रक्तस्राव या खून का थक्का जमने का खतरा (2-5%)।",
                "बाईं छाती के पर्दे में हल्का पानी या हवा रिसने का जोखिम (1-3%)।",
                "मवाद हिलने से नली डालने के तुरंत बाद कंपकंपी या बुखार आना (3-6%)।",
                "मवाद गाढ़ा होने पर नली बदलने या बाद में बड़ा ऑपरेशन करने की जरूरत (10-15%)।",
                "नली का मुड़ना या बाहर खिसक जाना।"
            ],
            "alternativesEn": "Emergency open or laparoscopic splenectomy (surgical removal of the spleen) or prolonged intravenous antibiotics alone (low cure rate for large abscesses).",
            "alternativesHi": "ऑपरेशन करके पूरी तिल्ली बाहर निकालना (Splenectomy) अथवा केवल नसों द्वारा एंटीबायोटिक दवाइयां लेना।",
            "sedationTypeEn": "Local anesthesia with monitored IV conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की बेहोशी/शामक दवा।"
        }
    },
    {
        "id": "ct-retroperitoneal-psoas-abscess-drainage",
        "name": "CT-Guided Percutaneous Retroperitoneal / Psoas Abscess Drainage",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV065",
        "rghsCode": "693 / 41",
        "icd10": "K68.12 (Psoas muscle abscess) / K68.19 (Other retroperitoneal abscess)",
        "indications": [
            "Primary psoas abscess or secondary collection due to spondylodiscitis (Pott's spine), Crohn's disease, or appendicitis",
            "Large symptomatic retroperitoneal collection producing high fever, flank pain, or femoral nerve palsy (psoas sign)",
            "Need for definitive microbiological diagnosis (Pyogenic vs Tubercular cold abscess GeneXpert/AFB)",
            "Failure of conservative antibiotic/antitubercular therapy to resolve fever and inflammatory markers"
        ],
        "preOpCriteria": [
            "INR <= 1.4, Platelets >= 50,000/uL",
            "Contrast-enhanced CT scan delineating abscess extent, bone destruction, and relationship to iliac vessels and ureter",
            "Prone or lateral decubitus tolerance for CT procedure duration (30-45 minutes)",
            "Adequate analgesia planned; IV line established"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "10F - 14F Locking Pigtail Catheter", "spec": "10F-14F x 30 cm locking pigtail drainage catheter with hydrophilic coating", "standardStore": "Central IR Consignment Store" },
            { "category": "Puncture Needle", "name": "18G Trocar Introducer Needle", "spec": "18G x 15-20 cm with echogenic bevel", "standardStore": "D9211 CT Suite Store" },
            { "category": "Guidewire", "name": "0.035 Rosen / Amplatz Stiff Wire", "spec": "145 cm length with flexible atraumatic tip", "standardStore": "Cath Lab Main Store" },
            { "category": "Dilators", "name": "Fascial Dilator Set", "spec": "8F, 10F, 12F, 14F radiopaque dilators", "standardStore": "D9211 CT Suite Store" },
            { "category": "Drainage System", "name": "Closed Urine / Pus Drainage Bag", "spec": "1000 mL bag with anti-reflux valve", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient prone or slightly oblique; acquire pre-procedure axial CT images through retroperitoneum/psoas.",
            "Plan posterolateral needle trajectory entering through erector spinae / quadratus lumborum, avoiding kidney, ureter, and bowel.",
            "Sterilize lumbar/flank skin; infiltrate 15-20 mL 2% Lignocaine into skin, subcutis, and deep muscular fascia.",
            "Advance 18G needle under CT guidance directly into the core of the psoas collection; confirm purulent return.",
            "Aspirate 20-30 mL for urgent Gram stain, bacterial culture, and GeneXpert MTB/RIF; advance 0.035 guidewire into collection.",
            "Perform serial tract dilation up to 12F or 14F over the stiff wire.",
            "Insert 10F-14F locking pigtail catheter; lock pigtail under CT confirmation; evacuate viscous pus completely.",
            "Perform gentle sterile saline irrigation until return is clear; secure catheter to skin with 2-0 silk and fixation patch."
        ],
        "complications": [
            "Transient femoral nerve paresthesia or anterior thigh numbness (2-4%)",
            "Local flank pain and muscle spasm (10-20%)",
            "Bacteremia / septic shock post-drainage (3-5%)",
            "Persistent sinus tract or tubercular cold abscess recurrence (5-10%)",
            "Retroperitoneal hematoma (<1%)"
        ],
        "maayTariffInr": 6000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित सोआस / रेट्रोपेरिटोनियल फोड़ा निकासी (PCD)",
            "indicationEn": "CT-guided percutaneous catheter drainage of deep psoas muscle / retroperitoneal abscess to treat spinal/flank infection.",
            "indicationHi": "कमर की सोआस मांसपेशी या रीढ़ की हड्डी के पास बने गहरे मवाद के फोड़े (टीबी या बैक्टीरियल) को नली द्वारा बाहर निकालने हेतु।",
            "descriptionEn": "With the patient lying on their stomach, a CT scan precisely locates the deep pus collection in the flank muscle. Under local anesthesia, an 18G needle is inserted safely away from nerves and intestines, and a soft drainage tube is guided into the abscess to empty the infected fluid.",
            "descriptionHi": "मरीज को पेट के बल लिटाकर सीटी स्कैन से कमर के अंदरूनी फोड़े को देखा जाता है। पीठ को सुन्न करके, आंतों और नसों से बचाते हुए एक पतली नली मवाद में डाली जाती है जो सारा मवाद बाहर निकाल देती है।",
            "benefitsEn": [
                "Drains deep, inaccessible retroperitoneal pus without major open surgical incisions.",
                "Relieves severe back and groin pain and restores leg mobility.",
                "Provides diagnostic fluid for tuberculosis (GeneXpert) and bacterial identification."
            ],
            "benefitsHi": [
                "बिना चीरा लगाए कमर के अत्यंत गहरे मवाद को पूरी तरह साफ किया जा सकता है।",
                "कमर और जांघ के असहनीय दर्द से राहत मिलती है और पैर की चाल सुधरती है।",
                "मवाद की जांच से टीबी या अन्य बैक्टीरिया की तुरंत पहचान होकर सटीक दवा शुरू होती है।"
            ],
            "specificRisksEn": [
                "Temporary tingling, numbness, or weakness in the thigh from femoral nerve irritation (2-4%).",
                "Local back muscle soreness and stiffness (10-20%).",
                "Fever spike or chills immediately following pus drainage (3-5%).",
                "Abscess re-accumulation if tuberculosis or spine infection persists (5-10%).",
                "Catheter kinking or clogging requiring saline flushes."
            ],
            "specificRisksHi": [
                "जांघ में अस्थायी झनझनाहट या हल्का सुन्नपन होना (2-4%)।",
                "पीठ और कमर में कुछ दिनों तक हल्का दर्द (10-20%)।",
                "मवाद हिलने से प्रक्रिया के बाद तेज बुखार या कंपकंपी आना (3-5%)।",
                "टीबी का पुराना संक्रमण होने पर मवाद दोबारा भरने का जोखिम (5-10%)।",
                "नली में गाढ़ा मवाद जमना, जिसके लिए सलाइन से धोने की जरूरत पड़ सकती है।"
            ],
            "alternativesEn": "Open retroperitoneal surgical cut-down and drainage under general anesthesia, or prolonged antibiotic/anti-tubercular therapy alone.",
            "alternativesHi": "कमर पर बड़ा चीरा लगाकर बेहोशी में मवाद निकालना, या केवल गोलियों और दवाओं से इलाज।",
            "sedationTypeEn": "Local anesthesia with IV analgesia / mild sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक दवा।"
        }
    },
    {
        "id": "usg-iliopsoas-abscess-drainage",
        "name": "Ultrasound-Guided Iliopsoas Abscess Catheter Drainage",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV066",
        "rghsCode": "693 / 41",
        "icd10": "K68.12 (Psoas muscle abscess) / M46.20 (Osteomyelitis of vertebra with abscess)",
        "indications": [
            "Acoustically accessible iliopsoas fluid collection in iliac fossa or groin",
            "Superficial or anteriorly pointing psoas cold abscess / pyogenic collection",
            "Patient unable to undergo CT due to pregnancy, severe hemodynamic instability, or pediatric age",
            "Rapid bedside decompression of tense iliac fossa collection causing severe flexion contracture of hip"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.5, Platelets >= 50,000/uL",
            "Ultrasound documentation of a safe acoustic window free from iliac vessels, femoral nerve, and bowel loops",
            "Pre-procedure antibiotics initiated",
            "Informed consent and baseline vital sign monitoring"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "8F - 10F Locking Pigtail Catheter", "spec": "8F/10F x 25 cm hydrophilic locking loop catheter", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Probe", "name": "Curvilinear & Linear Ultrasound Probes", "spec": "3.5 MHz curved and 7.5-10 MHz linear probes with color Doppler", "standardStore": "USG Suite 922" },
            { "category": "Puncture Needle", "name": "18G Echogenic Introducer Needle", "spec": "18G x 15 cm with depth markers", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Guidewire", "name": "0.035 J-Tip Guidewire", "spec": "145 cm stainless steel wire", "standardStore": "Central IR Consignment Store" },
            { "category": "Collection System", "name": "Sterile Drainage Bag", "spec": "1000 mL capacity with connector", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient supine with hip slightly extended as tolerated; perform real-time ultrasound scan of iliac fossa and groin.",
            "Use Color Doppler to map external iliac vessels and inferior epigastric artery; identify safe anterior extraperitoneal route.",
            "Clean and drape skin aseptically; infiltrate 10-15 mL 2% Lignocaine into abdominal/groin musculature under direct vision.",
            "Advance 18G needle under continuous real-time US visualization into center of collection; verify pus return on aspiration.",
            "Send samples for GeneXpert MTB, Gram stain, and aerobic/anaerobic cultures; feed 0.035 wire into cavity.",
            "Dilate entry tract with 8F-10F dilators over wire.",
            "Introduce 8F-10F locking pigtail catheter over wire; tighten lock suture and confirm loop coiling on ultrasound.",
            "Evacuate collection completely; dress site and secure catheter with adhesive fixation device and suture."
        ],
        "complications": [
            "Femoral cutaneous nerve paresthesia (1-3%)",
            "Iliac fossa hematoma (<1%)",
            "Bowel transgression if atypical trajectory used (<0.2%)",
            "Bacteremic shivers (3-5%)",
            "Catheter obstruction by thick cheesy tubercular pus (10-15%)"
        ],
        "maayTariffInr": 5000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सोनोग्राफी-निर्देशित इलियोसोआस फोड़ा निकासी (PCD)",
            "indicationEn": "Ultrasound-guided drainage of iliopsoas abscess in the lower abdomen/groin to clear infection and relieve leg spasm.",
            "indicationHi": "पेट के निचले हिस्से व जांघ के जोड़ (इलियोसोआस) में बने मवाद को सोनोग्राफी देखकर नली द्वारा बाहर निकालना।",
            "descriptionEn": "Under real-time ultrasound guidance, blood vessels in the groin are identified and protected. A numbing injection is applied, a needle is placed into the collection, and a small tube is inserted to drain the pus completely into an attached bag.",
            "descriptionHi": "सोनोग्राफी स्क्रीन पर खून की नसों से बचाते हुए, पेट के निचले हिस्से को सुन्न करके एक पतली नली मवाद में डाली जाती है जिससे सारा मवाद थैली में आ जाता है और पैर का खिंचाव ठीक होता है।",
            "benefitsEn": [
                "Rapid bedside procedure without radiation exposure.",
                "Instantly relieves severe hip flexion pain and difficulty walking.",
                "Safe, spleen- and organ-sparing minimal intervention."
            ],
            "benefitsHi": [
                "बिना किसी रेडिएशन या बड़े चीरे के तुरंत मवाद बाहर निकाला जाता है।",
                "जांघ और कूल्हे के जकड़न व चलने-फिरने की तकलीफ में तुरंत आराम।",
                "कम समय और कम खर्च में होने वाली सुरक्षित प्रक्रिया।"
            ],
            "specificRisksEn": [
                "Groin soreness or temporary nerve tingling in the upper thigh (1-3%).",
                "Catheter clogging from thick tubercular debris (10-15%).",
                "Transient post-procedure chills (3-5%).",
                "Need for repeat flushing or larger tube placement (<5%)."
            ],
            "specificRisksHi": [
                "जांघ में हल्का दर्द या सुन्नपन (1-3%)।",
                "गाढ़ा मवाद होने पर नली बंद होना जिसके लिए नली साफ करने की जरूरत (10-15%)।",
                "प्रक्रिया के तुरंत बाद हल्का बुखार या कंपकंपी (3-5%)।",
                "मवाद पूरी तरह साफ न होने पर नली बदलने की आवश्यकता (<5%)।"
            ],
            "alternativesEn": "CT-guided catheter drainage, open surgical incision and drainage, or systemic antibiotic therapy.",
            "alternativesHi": "सीटी स्कैन द्वारा नली डालना, चीरा लगाकर ऑपरेशन, या केवल दवाइयां।",
            "sedationTypeEn": "Local anesthesia with optional IV analgesia.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और दर्द निवारक इंजेक्शन।"
        }
    },
    {
        "id": "usg-transabdominal-pelvic-abscess-drainage",
        "name": "Ultrasound-Guided Transabdominal Pelvic Abscess Drainage",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV067",
        "rghsCode": "693 / 41",
        "icd10": "K65.1 (Peritoneal abscess) / N73.5 (Female pelvic peritonitis)",
        "indications": [
            "Postoperative pelvic fluid collection / abscess following appendectomy, colorectal surgery, or gynecological resection",
            "Pelvic inflammatory disease (PID) with tubo-ovarian abscess refractory to medical therapy",
            "Superficial or anteriorly situated pelvic abscess accessible through full urinary bladder acoustic window",
            "Severe pelvic pain, spiking pyrexia, and leukocytosis with localized pelvic mass"
        ],
        "preOpCriteria": [
            "Coagulation status: INR <= 1.5, Platelets >= 50,000/uL",
            "Full urinary bladder or Foley catheter clamped to create acoustic window displacing bowel loops",
            "Pre-procedure antibiotics administered",
            "Absence of uncorrectable coagulopathy"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "8F - 12F Locking Pigtail Catheter", "spec": "Hydrophilic coated with trocar/cannula assembly", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound System", "name": "Curvilinear Abdominal Probe", "spec": "3.5 - 5.0 MHz with needle trajectory software", "standardStore": "USG Suite 922" },
            { "category": "Access Needle", "name": "18G Chiba / Trocar Needle", "spec": "18G x 15-20 cm echogenic tip", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Guidewire", "name": "0.035 Stiff Guidewire", "spec": "145 cm J-tip guidewire", "standardStore": "Central IR Consignment Store" },
            { "category": "Closed Drainage Kit", "name": "External Pus Drainage Bag", "spec": "1000 mL closed bag", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient supine; confirm pelvic collection and relationship to bladder, uterus/prostate, and bowel using ultrasound.",
            "Map safe extraperitoneal or anterior transabdominal route avoiding rectus muscle epigastric vessels and bladder dome.",
            "Sterilize suprapubic region; infiltrate 10-15 mL 2% Lignocaine into skin and anterior abdominal wall down to pelvic peritoneum.",
            "Introduce 18G needle under real-time acoustic control into the pelvic abscess cavity; withdraw stylet and aspirate foul pus.",
            "Send pus for urgent microbiology (aerobic, anaerobic, gram stain); advance 0.035 stiff guidewire into cavity.",
            "Progressively dilate tract over wire using 8F, 10F, and 12F dilators.",
            "Advance 8F-12F locking pigtail catheter over wire; confirm complete curl of pigtail inside the collection.",
            "Aspirate cavity to near collapse; secure catheter with locking suture and adhesive dressing; connect to gravity bag."
        ],
        "complications": [
            "Inadvertent urinary bladder puncture (1-2%, usually self-limiting)",
            "Intraperitoneal leak causing generalized peritonitis (<0.5%)",
            "Pelvic pain and bladder tenesmus (5-10%)",
            "Bowel perforation (<0.2%)",
            "Catheter occlusion requiring irrigation or replacement (5-10%)"
        ],
        "maayTariffInr": 5500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सोनोग्राफी-निर्देशित पेट के रास्ते पेल्विक (पेड़ू) फोड़ा निकासी (PCD)",
            "indicationEn": "Transabdominal catheter drainage of deep pelvic abscess / pus collection following surgery or pelvic infection.",
            "indicationHi": "ऑपरेशन के बाद या संक्रमण से पेड़ू (पेल्विस) में जमा मवाद के फोड़े को पेट के रास्ते नली डालकर बाहर निकालना।",
            "descriptionEn": "With the patient lying supine, real-time ultrasound is used to locate the pelvic abscess through the lower belly while safeguarding the bladder and intestines. A local numbing injection is given, and a locking pigtail tube is inserted into the pus pocket to evacuate it completely.",
            "descriptionHi": "मरीज को सीधा लिटाकर, सोनोग्राफी द्वारा पेशाब की थैली व आंतों से बचाते हुए पेड़ू के फोड़े को देखा जाता है। निचले पेट को सुन्न करके एक पतली घुमावदार नली (पिगटेल) मवाद में डाली जाती है जिससे सारा गंदा पानी बाहर निकल जाता है।",
            "benefitsEn": [
                "Cures deep pelvic infection without reopening surgical incisions.",
                "Reduces fever, pain, and hospital stay dramatically.",
                "Safe bedside technique under direct real-time sonographic observation."
            ],
            "benefitsHi": [
                "बिना दोबारा पेट का ऑपरेशन किए पेड़ू के मवाद को पूरी तरह साफ किया जाता है।",
                "तेज बुखार, पेट के निचले हिस्से के दर्द और भारीपन से तुरंत राहत।",
                "मरीज के जल्दी स्वस्थ होकर घर जाने में सहायक।"
            ],
            "specificRisksEn": [
                "Temporary pain in the lower abdomen or bladder urgency (5-10%).",
                "Minor irritation or puncture of the urinary bladder (1-2%, heals spontaneously).",
                "Fever spike or shivering after evacuation (3-5%).",
                "Blocked or displaced drainage tube requiring saline flushing or revision (5-10%)."
            ],
            "specificRisksHi": [
                "पेड़ू में हल्का दर्द या बार-बार पेशाब आने जैसा लगना (5-10%)।",
                "पेशाब की थैली में हल्का खिंचाव जो अपने आप ठीक हो जाता है (1-2%)।",
                "मवाद निकलने के बाद हल्का बुखार या कंपकंपी आना (3-5%)।",
                "नली में मवाद जमने पर उसे साफ करने या बदलने की जरूरत (5-10%)।"
            ],
            "alternativesEn": "Transrectal or transvaginal catheter drainage, open surgical re-laparotomy, or conservative antibiotic therapy alone.",
            "alternativesHi": "मलद्वार या योनि के रास्ते नली डालना, पेट का बड़ा ऑपरेशन (Laparotomy), या केवल एंटीबायोटिक दवाइयां।",
            "sedationTypeEn": "Local anesthesia with optional IV analgesia.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक दवा।"
        }
    },
    {
        "id": "usg-transrectal-pelvic-abscess-drainage",
        "name": "Ultrasound-Guided Transrectal Pelvic Abscess Catheter Drainage",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV068",
        "rghsCode": "693 / 41",
        "icd10": "K65.1 (Peritoneal abscess) / K68.11 (Postprocedural retroperitoneal abscess)",
        "indications": [
            "Deep pouch of Douglas (rectovesical / rectouterine) abscess abutting the anterior rectal wall",
            "Inability to access pelvic abscess via anterior transabdominal route due to overlying small bowel loops",
            "Post-colorectal, appendiceal, or prostatectomy pelvic collections directly palpable per rectum",
            "Drainage of deep pelvic collection in male patients where transvaginal route is not applicable"
        ],
        "preOpCriteria": [
            "Coagulation screen: INR <= 1.4, Platelets >= 50,000/uL",
            "Pre-procedure rectal enema to evacuate feces from rectal vault",
            "Broad-spectrum IV antibiotic prophylaxis (Ceftriaxone + Metronidazole)",
            "Endocavitary ultrasound probe with biopsy guide available"
        ],
        "hardware": [
            { "category": "Endocavitary Probe", "name": "Transrectal Ultrasound Probe (TRUS)", "spec": "5.0 - 9.0 MHz endorectal biplane probe with sterile needle guide", "standardStore": "USG Suite 922" },
            { "category": "Drainage Catheter", "name": "8F - 10F Locking Pigtail Catheter", "spec": "8F/10F x 25 cm trocar/seldinger locking catheter", "standardStore": "Central IR Consignment Store" },
            { "category": "Puncture Needle", "name": "18G Transrectal Biopsy / Access Needle", "spec": "18G x 25 cm echogenic needle", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Guidewire", "name": "0.035 Stiff Amplatz Wire", "spec": "145 cm J-tip wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Drainage Bag", "name": "Leg Drainage Bag", "spec": "500 mL leg-mounted drainage bag with strap", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient in left lateral decubitus posture with knees flexed; administer IV analgesia/sedation.",
            "Introduce endocavitary TRUS probe covered in sterile sheath with mounted needle guide into rectum.",
            "Identify the deep pelvic abscess directly through the anterior rectal wall; measure distance and wall thickness.",
            "Instill 5-10 mL 1% Lignocaine into rectal mucosa and perirectal fat under real-time guidance.",
            "Advance 18G needle through the guide directly traversing the rectal wall into the collection; verify frank pus return.",
            "Collect pus for culture; insert 0.035 Amplatz guidewire through needle and coil loops inside the abscess cavity.",
            "Withdraw needle; dilate the tract over wire using 8F and 10F dilators.",
            "Advance 8F-10F locking pigtail catheter over wire into the abscess; lock pigtail securely.",
            "Aspirate pus; flush with saline; secure catheter externally to perineal skin or inner thigh; connect to drainage bag."
        ],
        "complications": [
            "Rectal bleeding / minor mucosal hemorrhage (1-3%)",
            "Transient tenesmus or rectal fullness sensation (15-25%)",
            "Transient bacteremia / septic chills (3-6%)",
            "Catheter dislodgement during defecation (5-10%)",
            "Pelvic fistulization (<0.5%)"
        ],
        "maayTariffInr": 6000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "ट्रांसरेक्टल (मलद्वार के रास्ते) सोनोग्राफी-निर्देशित पेल्विक फोड़ा निकासी (PCD)",
            "indicationEn": "Transrectal ultrasound-guided drainage of deep pelvic abscess located behind the bladder or uterus adjacent to the rectum.",
            "indicationHi": "पेड़ू के सबसे गहरे हिस्से (मलाशय के आगे) में बने मवाद को मलद्वार के रास्ते सोनोग्राफी देखकर नली द्वारा बाहर निकालना।",
            "descriptionEn": "Under sedation and transrectal ultrasound visualization, a miniature ultrasound probe is placed into the rectum to view the abscess lying just beyond the rectal wall. Under direct vision, a needle is passed through the numbed rectal wall to place a soft drainage tube directly into the abscess.",
            "descriptionHi": "मरीज को बाईं करवट लिटाकर, मलद्वार के रास्ते एक बारीक दूरबीन/सोनोग्राफी प्रोब डालकर मवाद की थैली को देखा जाता है। रास्ते को सुन्न करके एक पतली नली मवाद में डाल दी जाती है जो सारा मवाद बाहर थैली में निकाल देती है।",
            "benefitsEn": [
                "Safest and shortest direct anatomic route to deep pelvic abscesses inaccessible from the abdomen.",
                "Completely avoids traversing intestines, bladder, or major pelvic vessels.",
                "Immediate relief of high fever, toxic pelvic pressure, and painful defecation."
            ],
            "benefitsHi": [
                "गहरे पेल्विक फोड़े तक पहुंचने का सबसे छोटा और सुरक्षित रास्ता जिसमें पेट की आंतों को कोई खतरा नहीं होता।",
                "पेट को दोबारा चीरने के भारी जोखिम से 100% बचाव।",
                "तेज बुखार, पेड़ू के असहनीय दर्द और शौच की तकलीफ से तुरंत राहत।"
            ],
            "specificRisksEn": [
                "Temporary feeling of rectal fullness or mild tenesmus (15-25%).",
                "Minor rectal spotting or bleeding (1-3%).",
                "Fever spike or shivering after pus evacuation (3-6%).",
                "Catheter slipping out during bowel movements requiring replacement (5-10%)."
            ],
            "specificRisksHi": [
                "मलद्वार में भारीपन या बार-बार शौच जाने जैसी अनुभूति (15-25%)।",
                "हल्का खून का दाग आना जो अपने आप बंद हो जाता है (1-3%)।",
                "मवाद निकलने के बाद अस्थायी कंपकंपी या बुखार (3-6%)।",
                "शौच के समय नली के बाहर खिसकने का जोखिम (5-10%)।"
            ],
            "alternativesEn": "Transgluteal CT-guided drainage, open surgical pelvic drainage, or intravenous antibiotic therapy.",
            "alternativesHi": "कूल्हे के रास्ते सीटी स्कैन द्वारा नली डालना, पेट का बड़ा ऑपरेशन, या केवल दवाइयां।",
            "sedationTypeEn": "Monitored conscious sedation with local rectal mucosal anesthesia.",
            "sedationTypeHi": "शामक दवा (Conscious Sedation) और स्थानीय सुन्न करने वाली जेली/इंजेक्शन।"
        }
    },
    {
        "id": "usg-transvaginal-pelvic-abscess-drainage",
        "name": "Ultrasound-Guided Transvaginal Pelvic Abscess Catheter Drainage",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV069",
        "rghsCode": "693 / 41",
        "icd10": "N73.5 (Female pelvic peritonitis) / N70.93 (Infective tubo-ovarian abscess)",
        "indications": [
            "Ruptured or complex tubo-ovarian abscess (TOA) refractory to 48-72 hours of parenteral antibiotics",
            "Post-hysterectomy or post-cesarean vault hematoma / infected pelvic collection in cul-de-sac",
            "Pelvic abscess in female patients directly abutting the posterior vaginal fornix",
            "Preservation of ovarian reserve and fertility by avoiding surgical salpingo-oophorectomy"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "Pre-procedure bimanual pelvic examination and transvaginal ultrasound documenting proximity to posterior fornix (<1-2 cm)",
            "Broad-spectrum IV antibiotic coverage ongoing",
            "Patient consent and lithotomy position tolerance"
        ],
        "hardware": [
            { "category": "Transvaginal Ultrasound", "name": "Endocavitary Transvaginal Probe (TVS)", "spec": "5.0 - 9.0 MHz multi-frequency TVS probe with needle bracket", "standardStore": "USG Suite 922" },
            { "category": "Drainage Catheter", "name": "8F - 10F Locking Pigtail Catheter", "spec": "8F/10F x 25 cm hydrophilic catheter with locking string", "standardStore": "Central IR Consignment Store" },
            { "category": "Access Needle", "name": "18G Transvaginal Puncture Needle", "spec": "18G x 25-30 cm needle with echogenic tip", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Guidewire", "name": "0.035 Stiff Guidewire", "spec": "145 cm J-tip wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Drainage System", "name": "Thigh-Mounted Drainage Bag", "spec": "500-750 mL bag with secure leg strap", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient in dorsal lithotomy posture; place sterile vaginal speculum and cleanse vagina with povidone-iodine.",
            "Infiltrate 10 mL 2% Lignocaine into posterior vaginal fornix (culdocentesis site) under direct vision.",
            "Insert sterile-sheathed transvaginal probe with biopsy guide; visualize abscess in pouch of Douglas directly.",
            "Pass 18G puncture needle through posterior fornix under continuous ultrasound guidance into the center of the cavity.",
            "Aspirate purulent/turbid fluid for culture and cytology; introduce 0.035 guidewire into cavity.",
            "Dilate vaginal tract over wire with 8F-10F dilators.",
            "Advance 8F-10F locking pigtail catheter over wire into collection; lock the pigtail loop.",
            "Aspirate collection to complete collapse; secure catheter to perineal skin or inner thigh; connect to leg bag."
        ],
        "complications": [
            "Transient vaginal spotting / mild bleeding (2-4%)",
            "Pelvic crampy pain (10-15%)",
            "Post-drainage fever or bacteremia (3-5%)",
            "Premature catheter dislodgement (5-8%)",
            "Bowel injury (<0.2%)"
        ],
        "maayTariffInr": 6000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "ट्रांसवेजाइनल (योनि के रास्ते) सोनोग्राफी-निर्देशित पेल्विक / ओवेरियन फोड़ा निकासी (PCD)",
            "indicationEn": "Transvaginal ultrasound-guided drainage of deep pelvic / tubo-ovarian abscess to cure infection and preserve fertility.",
            "indicationHi": "महिलाओं में बच्चेदानी या अंडाशय के पीछे पेड़ू में बने मवाद के फोड़े को योनि के रास्ते सोनोग्राफी देखकर नली द्वारा बाहर निकालना।",
            "descriptionEn": "Under gentle sedation and local numbing of the vaginal wall, a specialized vaginal ultrasound probe guides a thin needle through the vaginal fornix directly into the pelvic collection, avoiding the abdomen entirely and placing a small drainage catheter.",
            "descriptionHi": "मरीज को हल्की शामक दवा देकर, योनि के रास्ते बारीक सोनोग्राफी प्रोब से मवाद की थैली को देखा जाता है। योनि के ऊपरी हिस्से को सुन्न करके एक पतली नली सीधे मवाद में डाल दी जाती है जिससे सारा संक्रमण बाहर निकल जाता है।",
            "benefitsEn": [
                "Direct, scarless approach to deep female pelvic infections.",
                "Preserves ovaries and fallopian tubes, avoiding emergency surgical removal.",
                "Fast relief from severe pelvic pain, fever, and sepsis."
            ],
            "benefitsHi": [
                "पेट पर बिना कोई चीरा या निशान लगाए अंदरूनी मवाद को पूरी तरह साफ करना।",
                "अंडाशय और बच्चेदानी को कटने से बचाकर महिला की प्रजनन क्षमता सुरक्षित रखना।",
                "पेड़ू के असहनीय दर्द और तेज बुखार से तुरंत आराम।"
            ],
            "specificRisksEn": [
                "Mild pelvic cramping or vaginal spotting for 1-2 days (2-4%).",
                "Post-procedure fever spike (3-5%).",
                "Catheter slipping out requiring reinsertion (5-8%).",
                "Incomplete drainage of multilocular abscess requiring surgical backup (<5%)."
            ],
            "specificRisksHi": [
                "पेड़ू में हल्का दर्द, मरोड़ या योनि से हल्का खून का दाग (2-4%)।",
                "प्रक्रिया के बाद अस्थायी बुखार (3-5%)।",
                "नली का खिसक जाना जिसके लिए दोबारा नली लगानी पड़ सकती है (5-8%)।",
                "गांठ में कई खाने होने पर मवाद पूरी तरह न निकल पाना (<5%)।"
            ],
            "alternativesEn": "Laparoscopic or open surgical drainage with salpingo-oophorectomy (removal of ovary/tube), or intravenous antibiotics alone.",
            "alternativesHi": "दूरबीन या चीरा लगाकर अंडाशय व नली का ऑपरेशन, या केवल एंटीबायोटिक दवाइयां।",
            "sedationTypeEn": "Conscious sedation with local vaginal mucosal anesthesia.",
            "sedationTypeHi": "शामक दवा (Conscious Sedation) और स्थानीय सुन्न करने वाला इंजेक्शन।"
        }
    },
    {
        "id": "ct-gluteal-infragluteal-deep-pelvic-abscess-drainage",
        "name": "CT-Guided Gluteal / Infragluteal Deep Pelvic Abscess Drainage",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV070",
        "rghsCode": "693 / 41",
        "icd10": "K65.1 (Peritoneal abscess) / K68.12 (Psoas/pelvic abscess)",
        "indications": [
            "Deep pelvic abscess in the presacral space, ischiorectal fossa, or true pelvis inaccessible transabdominally",
            "Transgluteal access through greater sciatic foramen infrapiriform compartment avoiding sciatic nerve",
            "Failure or contraindicated transrectal / transvaginal drainage route",
            "Post-Miles operation (abdominoperineal resection) or pelvic exenteration infected collections"
        ],
        "preOpCriteria": [
            "Coagulation parameters: INR <= 1.4, Platelets >= 50,000/uL",
            "Planning CT documenting safe trajectory traversing sacrosciatic ligament as close to sacrum as possible to spare sciatic nerve and superior/inferior gluteal vessels",
            "Prone tolerance on CT gantry for 30-45 minutes",
            "Broad-spectrum antibiotics initiated"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "10F - 12F Locking Pigtail Catheter", "spec": "10F/12F x 30 cm hydrophilic locking catheter", "standardStore": "Central IR Consignment Store" },
            { "category": "CT Guidance Needle", "name": "18G Trocar Needle", "spec": "18G x 15-20 cm needle with echogenic tip", "standardStore": "D9211 CT Suite Store" },
            { "category": "Guidewire", "name": "0.035 Stiff Amplatz Wire", "spec": "145 cm J-tip wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Dilators", "name": "Serial Fascial Dilators", "spec": "8F, 10F, 12F dilators", "standardStore": "D9211 CT Suite Store" },
            { "category": "Drainage Bag", "name": "Closed Drainage Bag", "spec": "1000 mL bag with anti-reflux valve", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient prone on CT couch; obtain 3-5 mm axial images through buttocks and pelvis.",
            "Select infrapiriform transgluteal trajectory as close to the sacral margin as possible to safeguard the sciatic nerve and gluteal vessels.",
            "Sterilize buttock skin; infiltrate 15-20 mL 2% Lignocaine into gluteal skin, fat, and deep muscle down to sciatic notch.",
            "Advance 18G trocar needle incrementally under CT fluoroscopy into the deep presacral/pelvic collection.",
            "Aspirate pus for microbiology; advance 0.035 stiff wire and curl several loops within cavity.",
            "Progressively dilate gluteal tract over wire using 8F to 12F dilators.",
            "Advance 10F-12F locking pigtail catheter over wire into the pelvic abscess; lock pigtail securely under CT verification.",
            "Evacuate collection completely; confirm decompression on CT scan; secure catheter to buttock skin with suture and tape."
        ],
        "complications": [
            "Sciatic nerve irritation / transient radiating buttock/leg pain (3-6%)",
            "Gluteal muscle soreness and difficulty sitting (20-30%)",
            "Inferior gluteal vessel bleeding (<1%)",
            "Catheter kinking or dislodgement when sitting (5-10%)",
            "Bacteremia / post-drainage pyrexia (3-5%)"
        ],
        "maayTariffInr": 6500,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित कूल्हे (ग्लूटियल) के रास्ते गहरा पेल्विक फोड़ा निकासी (PCD)",
            "indicationEn": "CT-guided transgluteal catheter drainage of deep pelvic / presacral abscess via the buttock route.",
            "indicationHi": "पेड़ू के गहरे हिस्से या रीढ़ की निचली हड्डी (सैक्रम) के पास बने मवाद के फोड़े को कूल्हे के रास्ते सीटी स्कैन देखकर नली द्वारा निकालना।",
            "descriptionEn": "With the patient lying on their stomach in the CT scanner, the deep pelvic pus is mapped. A safe path through the buttock muscle is selected away from the sciatic nerve, numbing medicine is injected, and a drainage catheter is placed to clear the infection.",
            "descriptionHi": "मरीज को पेट के बल लिटाकर सीटी स्कैन में कूल्हे की मुख्य नस (सायटिका नर्व) को बचाते हुए, कूल्हे को सुन्न करके एक बारीक नली पेड़ू के गहरे फोड़े में डाली जाती है ताकि मवाद बाहर निकल सके।",
            "benefitsEn": [
                "Direct access to deep presacral and pelvic spaces completely blocked from the front of the abdomen.",
                "Avoids dangerous open surgical pelvic re-exploration.",
                "Immediate resolution of deep pelvic pain, fever, and sepsis."
            ],
            "benefitsHi": [
                "पेट के सामने से अगम्य गहरे मवाद तक कूल्हे के सुरक्षित रास्ते से सीधा पहुंचना।",
                "पेट के बड़े और जानलेवा ऑपरेशन से पूरा बचाव।",
                "गंभीर संक्रमण, तेज बुखार और दर्द से तुरंत राहत।"
            ],
            "specificRisksEn": [
                "Temporary pain or shooting sensation down the back of the leg due to sciatic nerve proximity (3-6%).",
                "Buttock soreness and difficulty sitting comfortably while the tube is in place (20-30%).",
                "Bleeding from small gluteal vessels (<1%).",
                "Dislodgement or bending of the catheter when sitting down (5-10%)."
            ],
            "specificRisksHi": [
                "सायटिका नस के पास होने से पैर में अस्थायी झनझनाहट या करंट जैसा दर्द (3-6%)।",
                "नली लगे रहने तक बैठने में तकलीफ या कूल्हे में दर्द (20-30%)।",
                "हल्का खून रिसने का जोखिम (<1%)।",
                "बैठते समय नली के मुड़ने या खिसकने का खतरा (5-10%)।"
            ],
            "alternativesEn": "Open surgical re-exploration under general anesthesia, transrectal drainage, or systemic medical antibiotic management.",
            "alternativesHi": "बेहोश करके पेट या कूल्हे का बड़ा ऑपरेशन, मलद्वार के रास्ते नली डालना, या केवल दवाइयां।",
            "sedationTypeEn": "Local anesthesia with IV conscious sedation and analgesia.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक/शामक दवा।"
        }
    },
    {
        "id": "usg-diagnostic-paracentesis",
        "name": "Ultrasound-Guided Paracentesis (Diagnostic)",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV071",
        "rghsCode": "693 / 41",
        "icd10": "R18.8 (Other ascites) / K70.31 (Alcoholic cirrhosis with ascites)",
        "indications": [
            "New-onset ascites of unknown etiology in patients with suspected cirrhosis, malignancy, or heart failure",
            "Suspicion of spontaneous bacterial peritonitis (SBP) in cirrhotic patients with fever, pain, or encephalopathy",
            "Rule out peritoneal carcinomatosis, tuberculosis peritonitis, or chylous ascites",
            "Calculation of Serum-Ascites Albumin Gradient (SAAG) and cell count with differential"
        ],
        "preOpCriteria": [
            "Coagulation: Routine coagulopathy in cirrhosis (elevated INR / thrombocytopenia) is NOT an absolute contraindication; Platelets >= 30,000/uL",
            "Real-time ultrasound confirming adequate fluid pocket (depth >= 2-3 cm) free from adherent bowel loops",
            "Patient voided immediately prior or Foley catheter in situ to decompress bladder",
            "Sterile collection tubes ready (blood culture bottles, EDTA, plain tube)"
        ],
        "hardware": [
            { "category": "Aspiration Needle", "name": "20G - 22G Echogenic Spinal / Introducer Needle", "spec": "20G/22G x 7-9 cm needle with stylet", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound System", "name": "Curvilinear Abdominal Probe", "spec": "3.5 - 5.0 MHz with Color Doppler", "standardStore": "USG Suite 922" },
            { "category": "Syringes & Collection", "name": "20 mL / 50 mL Luer Lock Syringes & Specimen Kit", "spec": "Sterile syringes with aerobic/anaerobic blood culture bottles", "standardStore": "Microbiology Collection Unit" },
            { "category": "Local Anesthetic", "name": "Inj Lignocaine 2%", "spec": "5 mL ampoule", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient supine with slight head elevation; perform ultrasound survey of abdomen to identify largest fluid pocket (usually left lower quadrant, 2 fingerbreadths medial and cephalad to ASIS).",
            "Use Color Doppler to verify absence of inferior epigastric vessels or abdominal wall varices along needle path.",
            "Sterilize the selected skin site and drape under aseptic precautions.",
            "Infiltrate 3-5 mL 2% Lignocaine into skin, subcutis, and parietal peritoneum under ultrasound observation.",
            "Use Z-track technique (displacing skin 1-2 cm) to introduce 20G/22G needle directly into peritoneal cavity under real-time vision.",
            "Aspirate 30-50 mL of ascitic fluid smoothly; record gross appearance (straw-colored, cloudy, bloody, or chylous).",
            "Inoculate 10 mL directly into aerobic and anaerobic blood culture bottles at bedside; aliquot into EDTA (cell count) and plain tube (biochemistry/SAAG).",
            "Withdraw needle rapidly; release skin (sealing puncture tract); apply light pressure and sterile adhesive band-aid."
        ],
        "complications": [
            "Puncture site ascitic fluid leak (1-2%)",
            "Localized abdominal wall hematoma (<0.5%)",
            "Inadvertent bowel perforation (<0.1%, managed conservatively)",
            "Localized mild discomfort (5-10%)"
        ],
        "maayTariffInr": 2000,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Hindustan Syringes / Dispovan (+91 98291 55555)"
        ],
        "consent": {
            "nameHi": "सोनोग्राफी-निर्देशित डायग्नोस्टिक पैरासेंटेसिस (पेट से जांच हेतु पानी निकालना)",
            "indicationEn": "Ultrasound-guided diagnostic sampling of abdominal fluid (ascites) to detect infection (SBP) or determine the cause of swelling.",
            "indicationHi": "पेट में भरे पानी (जलोदर/Ascites) की जांच हेतु सोनोग्राफी देखकर सुई द्वारा थोड़ा पानी निकालना ताकि संक्रमण या लिवर की बीमारी का पता चल सके।",
            "descriptionEn": "Under real-time ultrasound guidance, the abdominal wall is numbed with local anesthetic. A thin needle is advanced into the abdominal fluid pocket away from intestines and blood vessels, and a small sample (30-50 mL) is drawn for laboratory tests.",
            "descriptionHi": "सोनोग्राफी स्क्रीन पर आंतों से सुरक्षित जगह देखकर, पेट की त्वचा को सुन्न करके एक बहुत बारीक सुई से 30 से 50 मिलीलीटर पानी जांच के लिए निकाला जाता है।",
            "benefitsEn": [
                "Provides life-saving diagnosis of Spontaneous Bacterial Peritonitis (SBP).",
                "Determines whether fluid is due to cirrhosis, kidney failure, tuberculosis, or cancer.",
                "Quick, painless 5-minute procedure performed safely under ultrasound."
            ],
            "benefitsHi": [
                "पेट के पानी में घातक संक्रमण (SBP) की तुरंत पहचान कर सही एंटीबायोटिक शुरू करने में मदद।",
                "पानी भरने के सटीक कारण (लिवर, टीबी, कैंसर या किडनी) का पता लगाना।",
                "मात्र 5 मिनट में होने वाली दर्दरहित और सुरक्षित जांच।"
            ],
            "specificRisksEn": [
                "Minor fluid leaking through the needle hole onto skin (1-2%).",
                "Small bruise or swelling at the puncture mark (<0.5%).",
                "Mild localized soreness for a few hours (5-10%).",
                "Extremely rare needle nick to bowel loop (<0.1%)."
            ],
            "specificRisksHi": [
                "सुई के निशान से थोड़ा पानी टपकना (1-2%)।",
                "सुई वाली जगह पर हल्का नील पड़ना (<0.5%)।",
                "पेट में हल्का दर्द या भारीपन (5-10%)।",
                "आंत पर खरोंच लगने का अत्यंत दुर्लभ खतरा (<0.1%)।"
            ],
            "alternativesEn": "Blind clinical bedside paracentesis (higher risk of bowel injury) or empirical medical treatment without diagnosis.",
            "alternativesHi": "बिना सोनोग्राफी के अंदाजे से सुई डालना (जिसमें आंत फटने का ज्यादा खतरा होता है), या बिना जांच के दवा शुरू करना।",
            "sedationTypeEn": "Local anesthesia alone.",
            "sedationTypeHi": "केवल स्थानीय सुन्नता (Local Anesthesia)।"
        }
    },
    {
        "id": "usg-therapeutic-large-volume-paracentesis",
        "name": "Ultrasound-Guided Large-Volume Therapeutic Paracentesis with Albumin Replacement",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV072",
        "rghsCode": "693 / 41",
        "icd10": "R18.8 (Other ascites) / K74.60 (Unspecified cirrhosis of liver)",
        "indications": [
            "Tense, refractory ascites unresponsive to maximum tolerated diuretic therapy (Spironolactone + Furosemide)",
            "Severe abdominal discomfort, respiratory compromise due to diaphragmatic elevation, or early satiety in cirrhotic ascites",
            "Malignant ascites secondary to peritoneal carcinomatosis producing severe abdominal distension",
            "Scheduled periodic maintenance paracentesis in end-stage liver disease"
        ],
        "preOpCriteria": [
            "Platelets >= 30,000/uL, INR acceptable for cirrhosis",
            "Serum Albumin level known; 20% Intravenous Albumin ordered (6-8 g of Albumin per liter of ascites removed over 5 liters)",
            "Pre-procedure blood pressure and renal function (Serum Creatinine/eGFR) verified",
            "Voided bladder confirmed; patient positioned comfortably"
        ],
        "hardware": [
            { "category": "Paracentesis Set", "name": "High-Flow Paracentesis Catheter Kit (Caldwell / Centesis)", "spec": "6F - 8F multi-sidehole sheath-needle assembly with tubing connector", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound System", "name": "Curvilinear Abdominal Probe", "spec": "3.5 MHz curved array", "standardStore": "USG Suite 922" },
            { "category": "IV Albumin", "name": "Human Albumin 20% Infusion", "spec": "100 mL vials (20 g / 100 mL) for post-paracentesis infusion", "standardStore": "DDC-14 Central" },
            { "category": "Drainage System", "name": "High-Volume Vacuum Drainage Bottles / Gravity Drainage Tubing", "spec": "Sterile high-flow tubing set with roller clamp and collection canister", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient in semi-recumbent position tilted slightly to the left; sonographically identify deep pocket in left lower quadrant.",
            "Use Color Doppler to rule out abdominal wall collateral vessels; mark puncture site 3-4 cm superior-medial to left anterior superior iliac spine.",
            "Prep and drape skin; infiltrate 10 mL 2% Lignocaine into skin, subcutis, and peritoneum.",
            "Apply Z-track technique; advance 6F-8F multi-sidehole centesis catheter assembly into peritoneal fluid pocket under real-time guidance.",
            "Remove sharp stylet; advance soft radiopaque cannula smoothly over the needle; attach high-flow drainage tubing.",
            "Drain fluid by gravity or gentle controlled vacuum; monitor patient vitals, comfort, and drainage rate (1-2 liters per 15-20 min).",
            "When volume exceeds 5 liters, administer IV 20% Albumin (8 grams per liter of ascites evacuated) to prevent Paracentesis-Induced Circulatory Dysfunction (PICD).",
            "Upon completion of desired drainage (typically 5 to 10 liters), withdraw cannula swiftly; apply pressure for 5 minutes; apply pressure dressing; keep patient supine for 2 hours."
        ],
        "complications": [
            "Paracentesis-Induced Circulatory Dysfunction (PICD) / hypotension / renal failure (2-5% if albumin under-dosed)",
            "Persistent fluid leak from puncture site (2-5%)",
            "Electrolyte disturbances (hyponatremia) (5-10%)",
            "Abdominal wall hematoma (<1%)",
            "Secondary peritoneal infection (<0.5%)"
        ],
        "maayTariffInr": 3500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Reliance Life Sciences / Albumin Supply (+91 98290 88888)"
        ],
        "consent": {
            "nameHi": "सोनोग्राफी-निर्देशित लार्ज-वॉल्यूम पैरासेंटेसिस (पेट से अधिक मात्रा में पानी निकालना एवं एल्ब्यूमिन चढ़ाना)",
            "indicationEn": "Large-volume removal of tense abdominal fluid (ascites) with IV albumin infusion to relieve severe abdominal pressure and breathing difficulty.",
            "indicationHi": "दवाइयों से आराम न मिलने पर पेट में अत्यधिक भरे पानी (जलोदर) को नली द्वारा निकालकर सांस व पेट के भारीपन में राहत देना तथा कमजोरी से बचाव हेतु एल्ब्यूमिन का टीका चढ़ाना।",
            "descriptionEn": "Under ultrasound guidance, a soft multi-hole catheter is placed through a numbed spot on the left lower belly into the abdominal fluid. Several liters of fluid (5 to 10 liters) are drained smoothly. Intravenous human albumin is given through an IV drip to protect blood pressure and kidney function.",
            "descriptionHi": "सोनोग्राफी से पेट के बाएं निचले हिस्से में सुरक्षित जगह देखकर, त्वचा को सुन्न करके एक पतली नली डाली जाती है और पेट से 5 से 10 लीटर पानी बाहर निकाला जाता है। रक्तचाप और गुर्दों को सुरक्षित रखने के लिए नस द्वारा एल्ब्यूमिन की बोतल चढ़ाई जाती है।",
            "benefitsEn": [
                "Immediate, dramatic relief of severe abdominal tightness, breathlessness, and leg swelling.",
                "Enables patient to eat, breathe, and sleep comfortably.",
                "IV Albumin replacement prevents dangerous post-drainage blood pressure drops and kidney strain."
            ],
            "benefitsHi": [
                "पेट के अत्यधिक तनाव, सांस फूलने और भारीपन से तुरंत चमत्कारिक आराम मिलता है।",
                "मरीज का खाना-पीना और सोना सहज हो जाता है।",
                "एल्ब्यूमिन चढ़ाने से बीपी कम होने और गुर्दों (किडनी) पर दबाव पड़ने का कोई खतरा नहीं रहता।"
            ],
            "specificRisksEn": [
                "Temporary drop in blood pressure, dizziness, or weakness (2-5%).",
                "Persistent leaking of water from the needle site for 1-2 days (2-5%).",
                "Electrolyte imbalance (drop in sodium level) (5-10%).",
                "Bruise or small blood collection under the skin (<1%).",
                "Rapid re-accumulation of fluid requiring repeat procedures."
            ],
            "specificRisksHi": [
                "पानी निकलने से रक्तचाप (बीपी) कम होना या हल्का चक्कर आना (2-5%)।",
                "सुई वाले छेद से 1-2 दिन तक पानी का रिसाव होना (2-5%)।",
                "खून में नमक (सोडियम) का स्तर कम होना (5-10%)।",
                "पेट की दीवार में हल्का खून का थक्का जमना (<1%)।",
                "लिवर की बीमारी के कारण कुछ हफ्तों बाद दोबारा पानी भर जाना।"
            ],
            "alternativesEn": "Higher doses of oral diuretics (water pills, which can cause kidney damage), Transjugular Intrahepatic Portosystemic Shunt (TIPS), or indwelling tunneled peritoneal catheter.",
            "alternativesHi": "पेशाब की ज्यादा गोलियां लेना (जिससे गुर्दे खराब हो सकते हैं), लिवर का स्टेंट (TIPS ऑपरेशन), या पक्की नली डालना।",
            "sedationTypeEn": "Local anesthesia alone.",
            "sedationTypeHi": "केवल स्थानीय सुन्नता (Local Anesthesia)।"
        }
    },
    {
        "id": "tunneled-peritoneal-catheter-placement-ascites",
        "name": "Tunneled Peritoneal Drainage Catheter Placement (PleurX / Rocket) for Malignant Ascites",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV073",
        "rghsCode": "693 / 41",
        "icd10": "R18.0 (Malignant ascites) / C78.6 (Secondary malignant neoplasm of retroperitoneum and peritoneum)",
        "indications": [
            "Refractory malignant ascites requiring frequent hospital visits for paracentesis (e.g. ovarian, gastric, or pancreatic cancer)",
            "Palliative symptom control allowing patient/family to perform comfortable home drainage",
            "Failure of systemic chemotherapy or diuretics to control rapid peritoneal fluid recurrence",
            "Patient preference to avoid recurrent traumatic needle punctures and emergency room visits"
        ],
        "preOpCriteria": [
            "Coagulation status: INR <= 1.5, Platelets >= 50,000/uL",
            "Ultrasound confirming significant ascites pocket and healthy skin along proposed subcutaneous tunnel path in lower abdomen",
            "Absence of severe loculation or generalized peritonitis",
            "Dedicated patient/caregiver training plan arranged for sterile vacuum bottle drainage at home"
        ],
        "hardware": [
            { "category": "Tunneled Catheter", "name": "PleurX / Rocket Tunneled Peritoneal Catheter Set", "spec": "15.5F silicone fenestrated catheter with polyester cuff and safety valve", "standardStore": "Central IR Consignment Store" },
            { "category": "Tunneler", "name": "Subcutaneous Tunneler & Peel-Away Introducer Sheath", "spec": "Plastic/metal tunneling rod with 16F peel-away sheath", "standardStore": "Central IR Consignment Store" },
            { "category": "Ultrasound Probe", "name": "Curvilinear Probe", "spec": "3.5 MHz ultrasound transducer", "standardStore": "USG Suite 922" },
            { "category": "Guidewire", "name": "0.038 J-Tip Guidewire", "spec": "70 cm heavy duty guidewire", "standardStore": "Central IR Consignment Store" },
            { "category": "Home Drainage Kit", "name": "Vacuum Drainage Bottles", "spec": "1000 mL evacuated vacuum glass/plastic bottles with line connector", "standardStore": "Central IR Consignment Store" }
        ],
        "techniqueSteps": [
            "Position patient supine; perform ultrasound evaluation of lower abdomen; mark insertion site (anterior lower quadrant) and separate tunnel exit site 5-8 cm inferior-laterally.",
            "Scrub, prep, and drape abdominal wall widely under strict sterile surgical precautions.",
            "Infiltrate 15-20 mL 1-2% Lignocaine with adrenaline along the proposed subcutaneous tunnel and peritoneal entry site.",
            "Make 1 cm skin incision at entry site and 5 mm incision at exit site; attach catheter to tunneler and pull from exit to entry incision.",
            "Position polyester cuff 1-2 cm inside the subcutaneous tunnel from exit site to promote tissue ingrowth.",
            "Puncture peritoneal cavity with 18G needle at entry incision under ultrasound guidance; introduce 0.038 J-wire.",
            "Pass 16F peel-away sheath over the wire into the peritoneal cavity; peel away sheath while advancing fenestrated catheter into pelvis.",
            "Attach drainage line; confirm free gravity flow of ascites; close entry incision with absorbable subcuticular sutures; secure exit site with suture and sterile protective dressing."
        ],
        "complications": [
            "Peritoneal bacterial peritonitis / catheter tract infection (2-5%)",
            "Catheter clogging by fibrinous or malignant debris (5-8%)",
            "Hypotension or electrolyte depletion if excessive fluid drained at once (2-4%)",
            "Tumor seeding along subcutaneous tract (<1%)",
            "Subcutaneous fluid leakage prior to cuff tissue integration (2-4%)"
        ],
        "maayTariffInr": 12000,
        "vendorContacts": [
            "BD India / CareFusion PleurX (+91 98290 12345)",
            "Rocket Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "टनल युक्त पेरिटोनियल कैथेटर (PleurX / रॉकेट पक्की नली) प्रत्यारोपण (कैंसर के पेट के पानी हेतु)",
            "indicationEn": "Placement of a tunneled indwelling peritoneal catheter for comfortable, home-based drainage of refractory malignant ascites.",
            "indicationHi": "कैंसर के कारण पेट में बार-बार भरने वाले पानी को घर पर ही आसानी से खाली करने के लिए चमड़ी के नीचे से पक्की नली (PleurX कैथेटर) डालना।",
            "descriptionEn": "Under local anesthesia and mild sedation, a soft silicone tube with a protective cuff is placed under the skin of the abdomen into the fluid space. The tube remains securely in place, allowing the patient or family to safely drain fluid at home using vacuum bottles without hospital visits.",
            "descriptionHi": "पेट की त्वचा को सुन्न करके, एक विशेष सिलिकॉन की नली चमड़ी के नीचे से पेट के अंदर डाली जाती है। इस नली में एक सेफ्टी वाल्व लगा होता है, जिससे मरीज को बार-बार अस्पताल नहीं आना पड़ता और घर पर ही वैक्यूम बोतल जोड़कर आसानी से पानी निकाल लिया जाता है।",
            "benefitsEn": [
                "Eliminates repeated, painful needle punctures and emergency room admissions.",
                "Enables convenient, symptom-guided fluid drainage in the comfort of home.",
                "Significantly improves quality of life, breathing, appetite, and mobility in palliative care."
            ],
            "benefitsHi": [
                "बार-बार सुई चुभवाने और अस्पताल की इमरजेंसी में भर्ती होने से हमेशा के लिए मुक्ति।",
                "घर पर ही जब भी पेट में भारीपन हो, आसानी से पानी निकालने की पूरी सुविधा।",
                "मरीज की जीवन गुणवत्ता, भूख, चलने-फिरने और नींद में उत्कृष्ट सुधार।"
            ],
            "specificRisksEn": [
                "Infection entering through the tube or peritonitis (2-5%, prevented with sterile technique).",
                "Tube blockage by protein or tumor flakes (5-8%, managed with saline or tPA flushes).",
                "Fluid leaking around the skin exit site before healing (2-4%).",
                "Weakness or low blood pressure if drained too rapidly at home (2-4%).",
                "Accidental dislodgement if pulled firmly."
            ],
            "specificRisksHi": [
                "नली के रास्ते पेट में संक्रमण होने का जोखिम (2-5%, साफ-सफाई रखने से बचाव संभव)।",
                "नली में कैंसर के कण या कचरा जमने से रुकावट (5-8%)।",
                "घाव पूरी तरह सूखने से पहले नली के किनारे से हल्का पानी रिसना (2-4%)।",
                "एक साथ बहुत अधिक पानी निकालने से बीपी कम होना या कमजोरी (2-4%)।",
                "जोर से खिंचने पर नली का बाहर निकल जाना।"
            ],
            "alternativesEn": "Frequent hospital-based needle paracentesis every 1-2 weeks, systemic chemotherapy, or placement of an internal peritoneovenous shunt.",
            "alternativesHi": "हर हफ्ते अस्पताल आकर सुई से पानी निकलवाना, केवल कीमोथेरेपी, या अंदरूनी शंट डालना।",
            "sedationTypeEn": "Local anesthesia with monitored conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
        }
    }
]
