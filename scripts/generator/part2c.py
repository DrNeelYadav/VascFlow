# -*- coding: utf-8 -*-
"""
Part 2C: Peritoneovenous Shunt, Thoracic & Pericardial Drainages (Procedures 74 to 83)
"""

DATA_PART2C = [
    {
        "id": "peritoneovenous-denver-shunt-placement",
        "name": "Peritoneovenous Shunt Placement (Denver Shunt)",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV074",
        "rghsCode": "693 / 41",
        "icd10": "R18.0 (Malignant ascites) / K70.31 (Cirrhosis with ascites)",
        "indications": [
            "Intractable, refractory cirrhotic or chylous ascites in patients ineligible for TIPS or liver transplant",
            "Malignant ascites causing rapid protein loss and cachexia through frequent paracenteses",
            "Patient unable to manage external tunneled drainage catheters or living in remote rural regions",
            "Preservation of endogenous albumin and electrolytes by re-infusing ascites directly into central venous circulation"
        ],
        "preOpCriteria": [
            "Coagulation parameters: INR <= 1.5, Platelets >= 50,000/uL",
            "Peritoneal fluid evaluation: Absolute polymorphonuclear cell count < 250/uL, negative cultures (ruling out SBP)",
            "Absence of congestive heart failure (Normal or mildly depressed ejection fraction) or severe pulmonary hypertension",
            "General anesthesia or deep monitored anesthesia tolerance in hybrid OR / cath lab"
        ],
        "hardware": [
            { "category": "Shunt System", "name": "Denver Peritoneovenous Shunt Kit", "spec": "Dual miter valve pump chamber with 11.5F fenestrated peritoneal tube and 12F radiopaque venous catheter", "standardStore": "Central IR Consignment Store" },
            { "category": "Subcutaneous Tunneler", "name": "Long Subcutaneous Tunneler Rod", "spec": "45-60 cm malleable stainless steel tunneling shaft with bullet tip", "standardStore": "Central IR Consignment Store" },
            { "category": "Vascular Access", "name": "12F Peel-Away Sheath Introducer Set", "spec": "12F x 14 cm peel-away sheath with 0.035 wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Ultrasound Transducer", "name": "Vascular & Abdominal Ultrasound Probes", "spec": "Linear 7-12 MHz and Curvilinear 3.5 MHz probes", "standardStore": "USG Suite 922" },
            { "category": "Fluoroscopy", "name": "Digital C-Arm / Cath Lab Flat Panel", "spec": "Real-time roadmapping with cine run recording", "standardStore": "Cath Lab Main Store" }
        ],
        "techniqueSteps": [
            "Position patient supine; prep and drape right neck, chest, and anterior abdominal wall under general anesthesia or conscious sedation.",
            "Under ultrasound guidance, puncture right internal jugular vein with 18G needle; insert 0.035 wire and dilate to place a 12F peel-away sheath.",
            "Make a 4 cm transverse incision over lower right ribcage / costal margin; create a subcutaneous pocket for the Denver compressible pump chamber.",
            "Tunnel the venous arm of the catheter subcutaneously from costal pocket over the clavicle to the right neck venotomy site.",
            "Under fluoroscopy, advance venous catheter through peel-away sheath until tip rests at the superior vena cava / right atrial junction.",
            "Puncture peritoneal cavity through lower margin of the costal pocket; introduce 11.5F fenestrated peritoneal limb into right paracolic gutter.",
            "Connect peritoneal and venous limbs to the manual pump chamber; test valve patency and aspirate ascites freely.",
            "Implant pump chamber securely over lower ribs so patient can compress it postoperatively; close all surgical incisions in layers."
        ],
        "complications": [
            "Acute circulatory overload / pulmonary edema (3-5%, requires prophylactic furosemide)",
            "Disseminated Intravascular Coagulation (DIC) from rapid peritoneal thromboplastin re-infusion (2-4%)",
            "Shunt thrombosis / valve occlusion (10-20%)",
            "Bacterial sepsis / peritonitis (3-6%)",
            "Superior vena cava thrombosis (1-3%)"
        ],
        "maayTariffInr": 18000,
        "vendorContacts": [
            "BD India / CareFusion Denver Shunt (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "पेरिटोनियोवीनस शंट (डेनवर शंट - पेट का पानी नसों में डालने का पंप) प्रत्यारोपण",
            "indicationEn": "Internal peritoneovenous shunt implantation to continuously pump refractory ascites from abdomen into the bloodstream.",
            "indicationHi": "दवाइयों और सुई से आराम न आने पर पेट के जिद्दी पानी (जलोदर) को शरीर के अंदर ही खून की मुख्य नस में वापस पहुंचाने हेतु डेनवर शंट पंप लगाना।",
            "descriptionEn": "Under anesthesia, a specialized internal tube with a tiny one-way manual pump valve is implanted entirely under the skin. One end sits in the abdominal fluid, the pump rests over the lower ribs, and the other end enters a vein in the neck. The fluid automatically drains into the bloodstream, preserving body proteins.",
            "descriptionHi": "मरीज को बेहोश या सुन्न करके, चमड़ी के नीचे एक आंतरिक नली और छोटा पंप बिठाया जाता है। इसका एक सिरा पेट के पानी में रहता है और दूसरा सिरा गर्दन की बड़ी नस में डाला जाता है। पेट का सारा पानी अपने आप छनकर खून में चला जाता है जिससे बार-बार पेट से पानी निकालने की जरूरत नहीं पड़ती।",
            "benefitsEn": [
                "Completely internal system without any external tubes, bags, or risk of fluid leakage.",
                "Recycles essential body proteins and electrolytes back into the blood.",
                "Permanently ends the need for weekly painful needle paracentesis."
            ],
            "benefitsHi": [
                "शरीर के बाहर कोई नली या बैग नहीं लटकता, पूरा सिस्टम चमड़ी के अंदर रहता है।",
                "पेट के पानी में मौजूद कीमती प्रोटीन शरीर में वापस लौटकर मरीज की कमजोरी दूर करते हैं।",
                "हर हफ्ते सुई से पानी निकलवाने के असहनीय दर्द और झंझट से हमेशा के लिए छुटकारा।"
            ],
            "specificRisksEn": [
                "Shunt blockage by protein or fibrin clot requiring revision (10-20%).",
                "Sudden heart volume overload or shortness of breath requiring water pills (3-5%).",
                "Blood clotting disturbances (DIC) from sudden re-infusion of abdominal fluid (2-4%).",
                "Infection of the shunt requiring surgical removal (3-6%).",
                "Neck vein blood clot (<3%)."
            ],
            "specificRisksHi": [
                "गाढ़ा प्रोटीन जमने से शंट पंप का बंद होना (10-20%)।",
                "एक साथ बहुत पानी खून में जाने से दिल पर दबाव या सांस फूलना (3-5%)।",
                "खून के थक्के जमने की प्रक्रिया में अस्थायी गड़बड़ी (2-4%)।",
                "शंट में संक्रमण होने पर उसे ऑपरेशन करके निकालना पड़ना (3-6%)।",
                "गर्दन की नस में खून का थक्का जमना (<3%)।"
            ],
            "alternativesEn": "Repeated needle paracentesis, tunneled external drainage catheter (PleurX), or TIPS stent.",
            "alternativesHi": "बार-बार सुई से पानी निकलवाना, बाहरी पक्की नली (PleurX) डालना, या लिवर का स्टेंट (TIPS)।",
            "sedationTypeEn": "General anesthesia or deep monitored conscious sedation.",
            "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा गहन शामक दवा।"
        }
    },
    {
        "id": "usg-thoracentesis-diagnostic-therapeutic",
        "name": "Ultrasound-Guided Thoracentesis (Diagnostic & Therapeutic)",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV075",
        "rghsCode": "693 / 41",
        "icd10": "J90 (Pleural effusion, not elsewhere classified) / J91.0 (Malignant pleural effusion)",
        "indications": [
            "New-onset undiagnosed pleural effusion requiring biochemical, microbiological, and cytological analysis (Light's criteria)",
            "Symptomatic moderate to large pleural effusion producing dyspnea, orthopnea, or hypoxemia",
            "Suspected parapneumonic effusion or empyema requiring urgent pH and culture evaluation",
            "Tuberculous pleural effusion or congestive heart failure effusion refractory to diuretics"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.5, Platelets >= 50,000/uL",
            "Thoracic ultrasound demonstrating pleural fluid depth >= 15 mm at proposed puncture site",
            "Patient able to sit upright leaning forward over a cardiac table (or lateral decubitus if immobile)",
            "Sterile vacuum collection bottles and collection tubes prepared"
        ],
        "hardware": [
            { "category": "Thoracentesis Kit", "name": "Over-The-Needle Centesis Catheter Set", "spec": "8F x 10 cm polyurethane catheter with self-sealing safety valve and 18G introducer needle", "standardStore": "Room 922 USG Procedure Cabinet" },
            { "category": "Ultrasound Transducer", "name": "Linear & Curvilinear Probes", "spec": "3.5 MHz curved and 7.5 MHz high-frequency linear probes", "standardStore": "USG Suite 922" },
            { "category": "Drainage Bottles", "name": "Evacuated Vacuum Drainage Canister", "spec": "1000 mL glass vacuum bottle with connection line and three-way stopcock", "standardStore": "DDC-14 Central" },
            { "category": "Specimen Tubes", "name": "Pleural Fluid Analysis Tubes", "spec": "Heparinized tube (pH), EDTA (cell count), plain tube (protein/LDH), and culture bottles", "standardStore": "Microbiology Collection Unit" }
        ],
        "techniqueSteps": [
            "Position patient comfortably seated upright leaning over bedside table; perform thoracic ultrasound from posterior approach.",
            "Identify lung base, diaphragm, and subdiaphragmatic organs (liver on right, spleen on left); mark rib interspace with maximal fluid depth.",
            "Prep and drape posterior hemithorax under aseptic conditions.",
            "Infiltrate 5-10 mL 2% Lignocaine into skin, intercostal muscles, and parietal pleura, marching over the superior border of the rib to avoid neurovascular bundle.",
            "Advance 8F over-the-needle centesis catheter into pleural space; verify smooth aspiration of pleural fluid.",
            "Advance soft plastic cannula into pleural cavity while withdrawing sharp needle; connect three-way stopcock and aspiration line.",
            "Collect 50-60 mL for diagnostic tests (LDH, protein, glucose, pH, Gram/AFB stain, cytology); then connect vacuum canister for therapeutic drainage.",
            "Drain up to 1000-1500 mL smoothly; stop immediately if patient develops persistent cough, chest tightness, or vasovagal symptoms.",
            "Withdraw catheter at end-expiration; apply airtight sterile dressing; obtain post-procedure ultrasound to verify lung re-expansion and absence of pneumothorax."
        ],
        "complications": [
            "Pneumothorax (1-2%, reduced to <0.5% with real-time USG)",
            "Re-expansion pulmonary edema (REPE) (<1% if drainage capped at 1.5 L)",
            "Post-procedure cough / chest tightness (10-15%)",
            "Intercostal artery laceration / hemothorax (<0.2%)",
            "Vasovagal syncope (1-2%)"
        ],
        "maayTariffInr": 2500,
        "vendorContacts": [
            "Jaipur Surgical / BD India (+91 98290 12345)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "सोनोग्राफी-निर्देशित थोरासेंटेसिस (फेफड़े के पर्दे से पानी निकालना - जांच एवं उपचार)",
            "indicationEn": "Ultrasound-guided pleural fluid aspiration (thoracentesis) to relieve breathlessness and analyze fluid for infection or cancer.",
            "indicationHi": "फेफड़े के चारों तरफ छाती में भरे पानी (प्लूरल इफ्यूजन) को सोनोग्राफी देखकर सुई द्वारा निकालना ताकि सांस लेने में तुरंत आराम मिले और पानी की जांच हो सके।",
            "descriptionEn": "With the patient sitting comfortably, an ultrasound probe accurately maps the fluid in the chest away from the lung and diaphragm. A local numbing injection is applied to the back ribs, and a soft plastic tube is placed into the fluid pocket to gently drain up to 1 to 1.5 liters of fluid.",
            "descriptionHi": "मरीज को बैठाकर पीठ की तरफ से सोनोग्राफी द्वारा फेफड़े और डायाफ्राम से सुरक्षित जगह चुनी जाती है। पसली के ऊपर सुन्न करने का टीका लगाकर एक पतली प्लास्टिक की नली से 1 से 1.5 लीटर पानी आराम से बाहर निकाला जाता है।",
            "benefitsEn": [
                "Immediate, dramatic relief of severe breathlessness and chest heaviness.",
                "Provides definitive laboratory diagnosis (TB, infection, heart failure, or cancer).",
                "High safety margin with real-time ultrasound guidance eliminating lung injury."
            ],
            "benefitsHi": [
                "सांस फूलने, घबराहट और छाती के भारीपन से तुरंत चमत्कारिक राहत।",
                "पानी की जांच से टीबी, मवाद या कैंसर का सटीक और तुरंत पता लगना।",
                "सोनोग्राफी देखकर करने से फेफड़े में सुई लगने का जोखिम बिल्कुल नगण्य।"
            ],
            "specificRisksEn": [
                "Coughing or chest tightness as the lung re-expands (10-15%, temporary).",
                "Small air leak around the lung (pneumothorax) (<1%).",
                "Rare lung fluid swelling (re-expansion pulmonary edema) if drained too fast (<0.5%).",
                "Bleeding from intercostal blood vessels (<0.2%).",
                "Dizziness or temporary fainting sensation (1-2%)."
            ],
            "specificRisksHi": [
                "फेफड़ा दोबारा फूलने पर हल्की खांसी या छाती में खिंचाव (10-15%)।",
                "फेफड़े के पर्दे में हल्की हवा आना (न्यूमोथोरैक्स) (<1%)।",
                "अचानक बहुत अधिक पानी निकालने से फेफड़े में सूजन का दुर्लभ खतरा (<0.5%)।",
                "पसली की नस से हल्का खून रिसना (<0.2%)।",
                "हल्का चक्कर या कमजोरी महसूस होना (1-2%)।"
            ],
            "alternativesEn": "Blind clinical bedside needle tapping (high risk of pneumothorax), intercostal chest tube drain, or medical therapy alone.",
            "alternativesHi": "बिना सोनोग्राफी के अंदाजे से सुई लगाना (जिसमें फेफड़ा फटने का खतरा रहता है), छाती में बड़ा पाइप डालना, या केवल दवाइयां लेना।",
            "sedationTypeEn": "Local anesthesia alone.",
            "sedationTypeHi": "केवल स्थानीय सुन्नता (Local Anesthesia)।"
        }
    },
    {
        "id": "small-bore-pigtail-insertion-pleural-effusion",
        "name": "Small-Bore Pigtail Catheter Insertion for Pleural Effusion",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV076",
        "rghsCode": "693 / 41",
        "icd10": "J90 (Pleural effusion, not elsewhere classified) / J91.0 (Malignant pleural effusion)",
        "indications": [
            "Recurrent symptomatic pleural effusion requiring continuous multi-day drainage",
            "Complicated parapneumonic effusion requiring slow controlled evacuation",
            "Malignant pleural effusion planned for bedside chemical pleurodesis (Talc, Bleomycin, or Doxycycline)",
            "Patient comfort preference: 8F-14F pigtail catheter causes significantly less pain than traditional large-bore chest tubes"
        ],
        "preOpCriteria": [
            "INR <= 1.5, Platelets >= 50,000/uL",
            "Ultrasound documentation of free-flowing or minimally septated pleural fluid collection",
            "Chest radiograph / CT review confirming fluid volume and diaphragm position",
            "Underwater seal chest drainage system (ICD bag / Bulau bottle) ready at bedside"
        ],
        "hardware": [
            { "category": "Pigtail Catheter", "name": "8.5F - 12F Locking Pleural Pigtail Catheter Set", "spec": "8.5F/12F x 25-30 cm locking loop catheter with Trocar and Seldinger insertion components", "standardStore": "Central IR Consignment Store" },
            { "category": "Ultrasound Probe", "name": "Curvilinear & Linear Ultrasound Probes", "spec": "3.5 MHz and 7.5 MHz transducers", "standardStore": "USG Suite 922" },
            { "category": "Guidewire", "name": "0.035 J-Tip Guidewire", "spec": "145 cm stainless steel wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Chest Drainage System", "name": "Underwater Seal Chest Drainage Unit", "spec": "Single/dual chamber water-seal drainage bottle with tubing and connector", "standardStore": "DDC-14 Central" },
            { "category": "Fixation", "name": "Pleural Catheter Fixation Dressing", "spec": "Adhesive anchoring pad and 2-0 silk suture", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient seated leaning forward or semirecumbent; evaluate hemithorax with ultrasound to mark ideal intercostal space (posterior axillary or mid-axillary line, 5th-7th ICS).",
            "Scrub, prep, and drape chest wall under sterile surgical conditions.",
            "Infiltrate 10-15 mL 2% Lignocaine into skin, periosteum of upper rib edge, and pleura until fluid is freely aspirated into syringe.",
            "Advance 18G introducer needle over superior border of rib into pleural space; confirm free return of pleural fluid.",
            "Pass 0.035 J-tip guidewire through needle into pleural cavity; verify smooth entry without resistance.",
            "Make small 3 mm skin nick; dilate tract with 8F-10F fascial dilator over wire.",
            "Advance 8.5F-12F locking pigtail catheter over wire into pleural space; pull back needle/stiffener and tighten locking string.",
            "Connect catheter to underwater seal drainage bottle; clamp temporarily after initial 1000 mL to avoid re-expansion pulmonary edema; secure catheter with 2-0 silk suture and protective dressing."
        ],
        "complications": [
            "Pneumothorax / air leak (1-2%)",
            "Catheter occlusion by fibrin or blood (5-8%)",
            "Re-expansion pulmonary edema (<1%)",
            "Intercostal neuralgia / pain at insertion site (5-10%)",
            "Catheter kinking or accidental pullout (3-5%)"
        ],
        "maayTariffInr": 4500,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "फेफड़े के पर्दे में बारीक पिगटेल कैथेटर नली डालना (प्लूरल इफ्यूजन निकासी)",
            "indicationEn": "Small-bore pigtail catheter placement into the pleural space for continuous, pain-free drainage of chest fluid.",
            "indicationHi": "फेफड़े के चारों तरफ बार-बार भरने वाले पानी को धीरे-धीरे लगातार निकालने हेतु छाती में एक बारीक और लचीली नली (पिगटेल कैथेटर) डालना।",
            "descriptionEn": "Under real-time ultrasound guidance, the chest wall is numbed with local anesthesia. A very thin, flexible pigtail tube (much smaller and far less painful than traditional thick chest pipes) is guided between the ribs into the chest fluid and connected to an underwater seal bottle.",
            "descriptionHi": "सोनोग्राफी से फेफड़े के पानी को देखकर, पसली के पास की त्वचा को सुन्न करके एक बहुत पतली और लचीली नली (पिगटेल कैथेटर) डाली जाती है। यह पारंपरिक मोटे पाइप की तुलना में बिल्कुल दर्द नहीं करती और पानी को लगातार बोतल में निकालती रहती है।",
            "benefitsEn": [
                "Far less painful and much better tolerated than thick conventional chest tubes.",
                "Provides continuous, controlled drainage over several days, allowing full lung re-expansion.",
                "Can be used to instill medications (pleurodesis) to prevent fluid from returning."
            ],
            "benefitsHi": [
                "पारंपरिक मोटे पाइप की तुलना में इसमें दर्द लगभग न के बराबर होता है।",
                "कई दिनों तक लगातार पानी बाहर निकलता रहता है जिससे सिकुड़ा हुआ फेफड़ा पूरी तरह खुल जाता है।",
                "इस नली के जरिए पानी दोबारा न भरे इसके लिए दवा (Pleurodesis) भी डाली जा सकती है।"
            ],
            "specificRisksEn": [
                "Mild chest wall ache or coughing as the lung expands (5-10%).",
                "Tube blockage by thick protein requiring saline flushing (5-8%).",
                "Small air leak (pneumothorax) (<2%).",
                "Accidental dislodgement if caught on clothing (3-5%).",
                "Infection around the insertion site (<2%)."
            ],
            "specificRisksHi": [
                "फेफड़ा फूलने पर छाती में हल्का दर्द या खांसी (5-10%)।",
                "गाढ़ा पानी होने से नली बंद होना, जिसे सलाइन से धोना पड़ सकता है (5-8%)।",
                "छाती में हल्की हवा रिसना (<2%)।",
                "कपड़ों में उलझकर नली का बाहर निकल जाना (3-5%)।",
                "नली वाली जगह पर हल्की लाली या संक्रमण (<2%)।"
            ],
            "alternativesEn": "Large-bore rigid chest tube (ICD, very painful), repeated needle thoracentesis, or surgical pleuroscopy.",
            "alternativesHi": "छाती में मोटा कठोर पाइप डालना (अत्यधिक दर्दनाक), बार-बार सुई से पानी निकालना, या दूरबीन से ऑपरेशन (VATS)।",
            "sedationTypeEn": "Local anesthesia with optional mild IV analgesia.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार दर्द निवारक दवा।"
        }
    },
    {
        "id": "large-bore-icd-insertion-hemothorax-empyema",
        "name": "Large-Bore Intercostal Drain (ICD) Insertion for Hemothorax / Empyema",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV077",
        "rghsCode": "693 / 41",
        "icd10": "J86.9 (Pyothorax / Empyema without fistula) / S27.1 (Traumatic hemothorax)",
        "indications": [
            "Acute traumatic or post-surgical hemothorax with ongoing blood accumulation requiring rapid evacuation and monitoring",
            "Frankly purulent, thick, loculated empyema (stage II/III) where small-bore pigtail catheters fail or become occluded",
            "Massive tension pneumothorax or large bronchopleural fistula requiring high-flow suction drainage",
            "Need for urgent lung re-expansion to prevent fibrothorax, trapped lung, and emergency thoracotomy"
        ],
        "preOpCriteria": [
            "Coagulation status: INR <= 1.5, Platelets >= 50,000/uL (in trauma, proceed with resuscitation in tandem)",
            "Point-of-care thoracic ultrasound confirming fluid collection and diaphragm boundary",
            "Patient supine with arm abducted over head (triangle of safety: anterior border of latissimus dorsi, lateral border of pectoralis major, apex of axilla, 5th intercostal space)",
            "Three-chamber thoracic drainage unit and underwater seal ready"
        ],
        "hardware": [
            { "category": "Chest Tube", "name": "Large-Bore Intercostal Chest Tube (24F - 32F)", "spec": "Straight / curved medical-grade PVC chest tube with radiopaque sentinel line and trocar", "standardStore": "Central IR Consignment Store" },
            { "category": "Surgical Instruments", "name": "Minor Thoracostomy Instrument Tray", "spec": "Scalpel #11, curved Kelly/Rochester Pean forceps, mayo scissors, needle holder", "standardStore": "D9211 CT Suite Store" },
            { "category": "Sutures", "name": "Heavy Silk Suture with Curved Needle", "spec": "1-0 or 2-0 Silk with cutting needle for mattress anchoring and purse-string suture", "standardStore": "DDC-14 Central" },
            { "category": "Drainage System", "name": "Under-Water Seal Chest Drainage Canister", "spec": "Dual/triple chamber thoracic suction unit with graduated collection chamber", "standardStore": "DDC-14 Central" },
            { "category": "Ultrasound Unit", "name": "Portable Sonography Machine", "spec": "3.5 MHz abdominal probe for diaphragmatic mapping", "standardStore": "USG Suite 922" }
        ],
        "techniqueSteps": [
            "Position patient semirecumbent (30-45 degrees) with ipsilateral arm elevated and hand placed behind head.",
            "Sonographically verify free pleural space within the 'safe triangle' (5th intercostal space, anterior/mid-axillary line).",
            "Widely prep with chlorhexidine/povidone-iodine and drape hemithorax aseptically.",
            "Generously infiltrate 15-25 mL 2% Lignocaine into skin, subcutis, intercostal muscles, and periosteum of 6th rib, finishing with parietal pleura.",
            "Make a 2.5-3 cm transverse skin incision over the 6th rib; blunt-dissect subcutaneous tissues down to intercostal fascia.",
            "Direct curved Kelly clamp over the superior margin of the 6th rib; push firmly through the intercostal muscles and parietal pleura into pleural space with a controlled 'pop'.",
            "Spread clamp jaws widely to create a 2 cm tract; insert gloved index finger into pleural cavity to confirm entry, feel lung/diaphragm, and sweep away adhesions.",
            "Grasp tip of 24F-32F chest tube with Kelly clamp; guide tube along finger tract directed posteriorly and superiorly (or basally for hemothorax).",
            "Ensure all side-eyelets are well within the pleural cavity; connect to underwater seal system; secure tube with 1-0 silk horizontal mattress and stay sutures; apply occlusive petroleum gauze dressing."
        ],
        "complications": [
            "Severe chest wall pain and intercostal nerve neuralgia (30-50%)",
            "Subcutaneous emphysema (2-5%)",
            "Diaphragm, liver, or spleen laceration (<0.5%, prevented by staying above 5th ICS and using finger sweep)",
            "Chest tube malposition (intrafissural or subcutaneous) (3-5%)",
            "Empyema or insertion site surgical wound infection (2-4%)"
        ],
        "maayTariffInr": 5000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "छाती में बड़ा इंटरकोस्टल ड्रेन (ICD चेस्ट ट्यूब) डालना (खून या गाढ़े मवाद की निकासी)",
            "indicationEn": "Urgent placement of a large-bore chest tube (ICD) to drain heavy blood (hemothorax) or thick infected pus (empyema) from around the lung.",
            "indicationHi": "चोट या गंभीर संक्रमण के कारण फेफड़े के चारों तरफ छाती में भरे खून (हीमोथोरैक्स) या गाढ़े मवाद (एम्पाइमा) को बाहर निकालने के लिए छाती में नली (ICD पाइप) डालना।",
            "descriptionEn": "Under local anesthesia and pain-relieving sedation, the chest wall within the safe area under the armpit is numbed. A small incision is made between the ribs, and a sturdy plastic drainage tube (ICD) is guided into the chest cavity and connected to an underwater drainage bottle to immediately expand the collapsed lung.",
            "descriptionHi": "बगल के नीचे सुरक्षित जगह को सुन्न करने का इंजेक्शन देकर, पसलियों के बीच एक छोटा चीरा लगाया जाता है। इसके बाद एक प्लास्टिक का चेस्ट ड्रेन पाइप छाती के अंदर डाला जाता है जो सारा खून या मवाद बाहर बोतल में निकाल देता है जिससे फेफड़ा तुरंत खुल जाता है।",
            "benefitsEn": [
                "Life-saving emergency evacuation of massive blood or infected pus compressing the lungs and heart.",
                "Instantly relieves severe respiratory distress and prevents lung collapse (atelectasis).",
                "Monitors ongoing bleeding rate to decide if open chest surgery is required."
            ],
            "benefitsHi": [
                "फेफड़े और दिल पर दबाव डाल रहे भारी खून या मवाद को तुरंत निकालकर जान बचाना।",
                "सांस लेने की भयंकर तकलीफ को फौरन ठीक करना और फेफड़े को पूरी तरह खोलना।",
                "अंदरूनी खून बहने की रफ्तार पर सीधी नजर रखना ताकि समय रहते आगे का इलाज हो सके।"
            ],
            "specificRisksEn": [
                "Moderate to severe pain at the chest tube site requiring strong pain medicines (30-50%).",
                "Air leaking under the chest skin (subcutaneous emphysema) (2-5%).",
                "Tube kinking, clogging with thick blood clots, or dislodging (3-5%).",
                "Inadvertent injury to adjacent organs or vessels (<0.5%).",
                "Wound infection around the tube site (2-4%)."
            ],
            "specificRisksHi": [
                "छाती में नली पड़ने से तेज दर्द होना जिसके लिए दर्द निवारक दवाइयां दी जाती हैं (30-50%)।",
                "चमड़ी के नीचे हल्की हवा भरना (2-5%)।",
                "खून के थक्के जमने से नली का बंद होना या मुड़ जाना (3-5%)।",
                "पसली की नसों या आसपास के अंगों में खरोंच का अत्यंत दुर्लभ जोखिम (<0.5%)।",
                "चीरे वाली जगह पर संक्रमण होना (2-4%)।"
            ],
            "alternativesEn": "Emergency open surgical thoracotomy, video-assisted thoracoscopic surgery (VATS), or repeated needle aspiration.",
            "alternativesHi": "छाती का बड़ा ऑपरेशन (Thoracotomy), दूरबीन से ऑपरेशन (VATS), या बार-बार सुई से निकालना।",
            "sedationTypeEn": "Generous local anesthesia with IV conscious sedation / opioids.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा मजबूत दर्द निवारक/शामक दवा।"
        }
    },
    {
        "id": "intracavitary-fibrinolytic-therapy-loculated-empyema",
        "name": "Image-Guided Intracavitary Fibrinolytic / Enzyme Therapy for Loculated Empyema (tPA/DNase)",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV078",
        "rghsCode": "693 / 41",
        "icd10": "J86.0 (Pyothorax with fistula) / J86.9 (Pyothorax without fistula)",
        "indications": [
            "Loculated, fibrinous parapneumonic effusion or organized empyema failing to drain through chest tube (MIST-2 protocol)",
            "CT evidence of multiloculated pleural collections with thick pleural peel and trapped lung",
            "High surgical risk patient unfit for general anesthesia and Video-Assisted Thoracoscopic Surgery (VATS) decortication",
            "Clearing intrapleural fibrin adhesions and dissolving viscous DNA-rich bacterial slough using Alteplase (tPA) and Dornase Alfa (DNase)"
        ],
        "preOpCriteria": [
            "Functioning, correctly positioned pleural pigtail or chest drain confirmed on CT/radiograph",
            "Absence of active bronchopleural fistula, major hemothorax, or recent intracranial hemorrhage (<3 months)",
            "Coagulation status: INR <= 1.5, Platelets >= 60,000/uL",
            "ICU / HDU monitoring bed available; Alteplase (10 mg) and Dornase Alfa (5 mg) reconstituted at bedside"
        ],
        "hardware": [
            { "category": "Fibrinolytic Drugs", "name": "Tissue Plasminogen Activator (tPA / Alteplase)", "spec": "10 mg Alteplase reconstituted in 30-50 mL sterile normal saline", "standardStore": "DDC-14 Central" },
            { "category": "Enzyme Therapy", "name": "Dornase Alfa (Pulmozyme / DNase)", "spec": "5 mg Dornase Alfa diluted in 30 mL sterile normal saline", "standardStore": "DDC-14 Central" },
            { "category": "Chest Tube Assembly", "name": "3-Way Stopcock & Luer Connectors", "spec": "High-pressure 3-way stopcock with luer-lock extension tubing", "standardStore": "Central IR Consignment Store" },
            { "category": "Drainage System", "name": "Closed Thoracic Suction Drainage System", "spec": "Under-water seal drainage unit with -20 cm H2O suction capability", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Review baseline chest CT and verify catheter position within the loculated collection; confirm chest drain is patent.",
            "Reconstitute 10 mg Alteplase (tPA) in 30 mL sterile 0.9% saline; reconstitute 5 mg Dornase Alfa (DNase) in 30 mL saline.",
            "Swab catheter connector with chlorhexidine; attach 3-way stopcock directly to chest catheter.",
            "Slowly instill 10 mg tPA into the pleural cavity; flush immediately with 10 mL normal saline.",
            "Instill 5 mg DNase into the pleural space; flush with 10 mL normal saline.",
            "Clamp the drainage catheter for precisely 1 to 2 hours, instructing patient to gently change position (supine, lateral decubitus, sitting) to distribute the enzymes across all locules.",
            "Unclamp the catheter after 2 hours; connect to low-pressure continuous wall suction (-10 to -20 cm H2O) or water seal; record drainage volume and appearance.",
            "Repeat the combined tPA/DNase instillation twice daily (every 12 hours) for up to 6 doses (3 days) according to the MIST-2 protocol, monitoring chest radiographs daily."
        ],
        "complications": [
            "Intrapleural hemorrhage / secondary hemothorax (2-4%, requires monitoring of drainage color and hematocrit)",
            "Transient chest pain during drug instillation (10-15%, pre-medicate with analgesics)",
            "Systemic bleeding (<1%)",
            "Failure to dissolve thick peel requiring surgical VATS decortication (10-15%)",
            "Pleural fluid leak around catheter (<2%)"
        ],
        "maayTariffInr": 15000,
        "vendorContacts": [
            "Boehringer Ingelheim India (+91 98290 66666)",
            "Roche Products India (+91 98291 77777)"
        ],
        "consent": {
            "nameHi": "छाती के पर्दे में फाइब्रिनोलिटिक / एंजाइम दवा डालना (tPA/DNase थेरेपी - जमे हुए मवाद को घोलना)",
            "indicationEn": "Intrapleural injection of specialized clot-dissolving and DNA-cleaving enzymes (tPA and DNase) to liquefy thick loculated empyema without major chest surgery.",
            "indicationHi": "छाती में कई थैलियों में जमे गाढ़े मवाद (एम्पाइमा) को बिना बड़ा ऑपरेशन किए घोलकर निकालने हेतु नली द्वारा विशेष दवाइयां (tPA और DNase) डालना।",
            "descriptionEn": "When thick pus forms multiple locked pockets that cannot drain through a tube, specialized clot-dissolving medications (tPA and DNase) are injected directly through the existing chest catheter. The tube is clamped for 1-2 hours to allow the medications to melt the thick pus and membranes, after which it drains out easily.",
            "descriptionHi": "जब छाती का मवाद दही की तरह जम जाता है और नली से बाहर नहीं निकलता, तो मौजूदा नली के जरिए मवाद को पिघलाने वाली विशेष दवाइयां डाली जाती हैं। नली को 1-2 घंटे बंद रखा जाता है ताकि दवा मवाद के जाले को पूरी तरह घोल दे, फिर नली खोलकर सारा पिघला हुआ मवाद बाहर निकाल लिया जाता है।",
            "benefitsEn": [
                "Dissolves stubborn, multiloculated pus pockets that otherwise require open rib-spreading surgery.",
                "Fully opens trapped lung tissue and restores natural breathing capacity.",
                "Proven MIST-2 protocol drastically reduces the need for surgical decortication."
            ],
            "benefitsHi": [
                "जमे हुए मवाद के कड़े जालों को पूरी तरह घोलकर बाहर निकालना जिससे छाती फाड़ने के बड़े ऑपरेशन से बचाव होता है।",
                "सिकुड़े हुए फेफड़े को पूरी तरह खोलकर सामान्य सांस बहाल करना।",
                "अंतर्राष्ट्रीय स्तर पर प्रमाणित विधि जिससे मरीज बिना सर्जरी के जल्दी ठीक होता है।"
            ],
            "specificRisksEn": [
                "Chest burning or pain during enzyme instillation (10-15%, managed with pain relievers).",
                "Bleeding inside the chest cavity (hemothorax) (2-4%).",
                "Incomplete clearance of very old thick rind requiring VATS surgery (10-15%).",
                "Temporary fever spike as digested infection drains out (5-10%).",
                "Allergic reaction to enzymes (<1%)."
            ],
            "specificRisksHi": [
                "दवा डालते समय छाती में हल्की जलन या दर्द महसूस होना (10-15%)।",
                "छाती के अंदर हल्का रक्तस्राव होना (2-4%)।",
                "मवाद बहुत पुराना और सख्त होने पर अंततः दूरबीन सर्जरी (VATS) की आवश्यकता पड़ना (10-15%)।",
                "मवाद पिघलने के दौरान हल्का बुखार या कंपकंपी (5-10%)।",
                "दवा से एलर्जी होने का दुर्लभ जोखिम (<1%)।"
            ],
            "alternativesEn": "Video-Assisted Thoracoscopic Surgery (VATS) decortication under general anesthesia, open thoracotomy, or prolonged ineffective chest tube irrigation.",
            "alternativesHi": "बेहोशी में छाती का बड़ा या दूरबीन ऑपरेशन (VATS Decortication), या केवल साधारण पानी से नली धोना।",
            "sedationTypeEn": "Local catheter instillation with IV analgesia / premedication.",
            "sedationTypeHi": "नली के जरिए स्थानीय दवा और नस द्वारा दर्द निवारक दवा।"
        }
    },
    {
        "id": "tunneled-pleural-catheter-placement-effusion",
        "name": "Tunneled Pleural Drainage Catheter Placement (PleurX) for Refractory Malignant Pleural Effusion",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV079",
        "rghsCode": "693 / 41",
        "icd10": "J91.0 (Malignant pleural effusion) / C34.90 (Malignant neoplasm of bronchus or lung)",
        "indications": [
            "Symptomatic recurrent malignant pleural effusion in lung, breast, or ovarian carcinoma requiring repeated hospital visits",
            "Trapped lung / non-expandable lung where chemical pleurodesis is ineffective and contraindicated",
            "Patient-centered outpatient palliative care enabling self-directed, home-based drainage with vacuum bottles",
            "Elimination of repetitive emergency room visits for thoracentesis in end-stage oncological patients"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.5, Platelets >= 50,000/uL",
            "Thoracic ultrasound documenting significant pleural fluid pocket and absence of extensive solid chest wall tumor invasion",
            "Patient / family willing and capable of learning sterile vacuum drainage protocol at home",
            "Local skin healthy over proposed anterior-lateral subcutaneous tunnel route"
        ],
        "hardware": [
            { "category": "Tunneled Catheter", "name": "PleurX Tunneled Pleural Catheter Kit", "spec": "15.5F silicone fenestrated catheter with polyester cuff and self-sealing one-way valve", "standardStore": "Central IR Consignment Store" },
            { "category": "Tunneler", "name": "Malleable Subcutaneous Tunneler & 16F Peel-Away Sheath", "spec": "Curved stainless steel tunneling rod with disposable tear-away sheath", "standardStore": "Central IR Consignment Store" },
            { "category": "Guidewire", "name": "0.038 J-Tip Guidewire", "spec": "70 cm heavy duty guidewire", "standardStore": "Central IR Consignment Store" },
            { "category": "Ultrasound Probe", "name": "Curvilinear Probe", "spec": "3.5 MHz transducer", "standardStore": "USG Suite 922" },
            { "category": "Drainage Bottles", "name": "PleurX Vacuum Drainage Canisters", "spec": "1000 mL glass vacuum drainage bottles with sterile procedure kits", "standardStore": "Central IR Consignment Store" }
        ],
        "techniqueSteps": [
            "Position patient in lateral decubitus or semi-recumbent posture with arm elevated; identify effusion with ultrasound.",
            "Mark pleural insertion site in 6th/7th intercostal space mid-axillary line; mark separate skin tunnel exit site 5-8 cm inferior-anteriorly.",
            "Scrub, prep, and drape hemithorax under strict surgical sterility.",
            "Infiltrate 15-20 mL 1% Lignocaine with adrenaline along proposed subcutaneous tunnel and pleural insertion site.",
            "Make small 1 cm incision at insertion site and 5 mm incision at exit site; pull fenestrated silicone catheter from exit to entry using tunneler.",
            "Ensure the polyester retention cuff lies 1-2 cm inside the tunnel from the exit aperture to stimulate fibrous fixation.",
            "Puncture pleural space with 18G needle at entry incision over superior rib edge; insert 0.038 wire; advance 16F peel-away sheath over wire.",
            "Peel away sheath while advancing fenestrated catheter into pleural cavity; confirm easy aspiration of fluid through safety valve.",
            "Close entry incision with 3-0 absorbable subcuticular sutures; anchor exit catheter with suture and attach sterile cap; connect initial vacuum bottle to evacuate up to 1000 mL."
        ],
        "complications": [
            "Pleural infection / empyema (2-4%, prevented with strict aseptic technique)",
            "Catheter blockage by fibrin or tumor flakes (5-8%, cleared with tPA or saline)",
            "Pain during home vacuum drainage (10-15%, managed by slowing vacuum flow clamp)",
            "Tumor seeding along the subcutaneous tract (<1%)",
            "Catheter accidental removal or cuff extrusion (1-3%)"
        ],
        "maayTariffInr": 12000,
        "vendorContacts": [
            "BD India / CareFusion PleurX (+91 98290 12345)",
            "Rocket Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "टनल युक्त प्लूरल कैथेटर (PleurX पक्की नली) प्रत्यारोपण (कैंसर के छाती के पानी हेतु)",
            "indicationEn": "Placement of an indwelling tunneled pleural catheter (PleurX) for comfortable, home-based drainage of recurrent malignant pleural effusion.",
            "indicationHi": "कैंसर के कारण फेफड़े में बार-बार भरने वाले पानी को घर पर ही बिना दर्द के निकालने के लिए चमड़ी के नीचे से पक्की नली (PleurX कैथेटर) डालना।",
            "descriptionEn": "Under local anesthesia and mild sedation, a soft silicone tube with a protective cuff is tunneled beneath the chest skin into the pleural fluid space. The tube has a self-sealing valve, allowing the patient or caregiver to painlessly drain chest fluid at home into vacuum bottles whenever breathing feels tight.",
            "descriptionHi": "छाती को सुन्न करके, एक विशेष सिलिकॉन की पतली नली चमड़ी के नीचे से फेफड़े के पानी में डाली जाती है। इस नली में एक सेफ्टी वाल्व लगा होता है, जिससे मरीज जब चाहे घर पर ही वैक्यूम बोतल जोड़कर आसानी से पानी निकाल सकता है और बार-बार अस्पताल आने की जरूरत नहीं पड़ती।",
            "benefitsEn": [
                "Completely eliminates repeated emergency hospital admissions and painful needle taps.",
                "Enables patient to control their own symptom relief at home with simple vacuum bottles.",
                "Works effectively even if the lung is trapped and cannot fully re-expand."
            ],
            "benefitsHi": [
                "बार-बार अस्पताल में भर्ती होने और सुई से पानी निकलवाने के असहनीय कष्ट से हमेशा के लिए मुक्ति।",
                "घर पर ही जब भी सांस फूले, आसानी से वैक्यूम बोतल द्वारा पानी निकालने की पूरी स्वतंत्रता।",
                "फेफड़ा यदि कड़ा होकर पूरी तरह न भी खुल पाए, तब भी यह नली सांस में पूरा आराम देती है।"
            ],
            "specificRisksEn": [
                "Infection traveling into the chest (empyema) (2-4%, avoided by careful sterile home dressing).",
                "Tube clogging with protein flakes (5-8%, cleared with saline or clot-dissolving flush).",
                "Temporary chest ache while vacuum bottle is pulling fluid (10-15%).",
                "Leakage of fluid around the skin before the cuff heals (2-4%).",
                "Accidental pulling out of the tube (1-3%)."
            ],
            "specificRisksHi": [
                "नली के जरिए छाती में संक्रमण होने का जोखिम (2-4%, सफाई रखने से बचाव संभव)।",
                "नली में गाढ़ा कचरा जमने से रुकावट (5-8%)।",
                "बोतल में पानी खींचते समय छाती में हल्का दर्द या खिंचाव (10-15%)।",
                "घाव पूरी तरह सूखने से पहले नली के किनारे से हल्का पानी रिसना (2-4%)।",
                "जोर से खिंचने पर नली का बाहर निकल जाना (1-3%)।"
            ],
            "alternativesEn": "Frequent hospital needle thoracentesis every 1-2 weeks, surgical chemical pleurodesis with talc, or chest tube placement.",
            "alternativesHi": "हर हफ्ते अस्पताल आकर सुई से पानी निकलवाना, ऑपरेशन द्वारा फेफड़े का पर्दा चिपकाना (Pleurodesis), या सामान्य चेस्ट पाइप।",
            "sedationTypeEn": "Local anesthesia with monitored conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
        }
    },
    {
        "id": "pcd-lung-abscess",
        "name": "Percutaneous Catheter Drainage of Lung Abscess",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV080",
        "rghsCode": "693 / 41",
        "icd10": "J85.2 (Abscess of lung without pneumonia) / J85.1 (Abscess of lung with pneumonia)",
        "indications": [
            "Severe, large (>4-5 cm) or refractory lung abscess failing to improve after 10-14 days of optimal intravenous antibiotic therapy",
            "Poorly draining cavity causing persistent high swinging pyrexia, severe productive cough, or sepsis",
            "Lung abscess abutting the visceral and parietal pleura with pleural symphysis (preventing pneumothorax)",
            "Patients who are poor surgical candidates for lung resection (lobectomy) due to severe debility or respiratory failure"
        ],
        "preOpCriteria": [
            "Coagulation parameters: INR <= 1.4, Platelets >= 60,000/uL",
            "Contrast CT of chest documenting pleural symphysis / adhesion (abscess directly touching chest wall without intervening aerated lung) to prevent fatal tension pneumothorax or empyema",
            "Broad-spectrum IV antibiotic therapy initiated",
            "Patient able to tolerate prone, lateral, or sitting posture in CT / fluoroscopy room"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "8.5F - 10F Locking Pigtail Catheter", "spec": "8.5F/10F x 25 cm hydrophilic locking loop catheter with Trocar/Seldinger set", "standardStore": "Central IR Consignment Store" },
            { "category": "CT Guidance Needle", "name": "18G Chiba / Trocar Needle", "spec": "18G x 15 cm echogenic needle with stylet", "standardStore": "D9211 CT Suite Store" },
            { "category": "Guidewire", "name": "0.035 Stiff Amplatz Wire", "spec": "145 cm J-tip wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Underwater Seal", "name": "Underwater Seal Chest Drainage Unit", "spec": "Dual chamber underwater seal container with suction port", "standardStore": "DDC-14 Central" },
            { "category": "Microbiology Kit", "name": "Anaerobic & Aerobic Culture Vials", "spec": "Sterile transport media for pus and fungal/mycobacterial workup", "standardStore": "Microbiology Collection Unit" }
        ],
        "techniqueSteps": [
            "Position patient in CT scanner (prone or oblique) such that the abscess cavity is in the dependent position to prevent spillage into contralateral bronchus.",
            "Acquire fine-cut planning CT images; confirm that trajectory passes directly through adherent pleura into abscess without traversing healthy aerated lung parenchyma.",
            "Sterilize thoracic skin; infiltrate 15 mL 2% Lignocaine into skin, intercostal space, and pleural rind.",
            "Under CT guidance, advance 18G needle directly through chest wall into the necrotic center of the lung abscess; confirm frank foul pus aspiration.",
            "Send samples for aerobic, anaerobic, fungal, and AFB cultures; advance 0.035 stiff wire and curl inside abscess cavity.",
            "Carefully dilate entry tract over wire using 8F and 10F dilators.",
            "Advance 8.5F-10F locking pigtail catheter over wire; confirm loop deployment inside the abscess on CT.",
            "Evacuate pus; gently flush with 5 mL sterile saline (avoiding excessive pressure to prevent broncho-aspiration); connect catheter to underwater seal drainage system."
        ],
        "complications": [
            "Bronchopleural fistula / pneumothorax (5-10%)",
            "Empyema from pleural contamination (3-6%)",
            "Hemoptysis / pulmonary parenchymal hemorrhage (2-5%)",
            "Endobronchial aspiration into healthy lung segments (1-2%, prevented by dependent patient positioning)",
            "Systemic air embolism (<0.2%)"
        ],
        "maayTariffInr": 7500,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "सीटी-निर्देशित फेफड़े के फोड़े से मवाद निकासी (PCD - लंग एब्सेस ड्रेनेज)",
            "indicationEn": "CT-guided catheter drainage of a large, refractory lung abscess to resolve severe pulmonary sepsis without lung resection.",
            "indicationHi": "दवाइयों से ठीक न होने वाले फेफड़े के बड़े फोड़े (लंग एब्सेस) से सीटी स्कैन देखकर बारीक नली द्वारा मवाद बाहर निकालना ताकि फेफड़ा काटने से बच सके।",
            "descriptionEn": "Under real-time CT scan guidance and local anesthesia, an entry path through the chest wall where the abscess touches the ribs is selected. A thin needle is guided into the lung abscess cavity, and a soft pigtail drainage tube is placed to safely empty the infected pus into an underwater seal bottle.",
            "descriptionHi": "सीटी स्कैन में फेफड़े के फोड़े की सटीक जगह देखकर, पसली के रास्ते को सुन्न किया जाता है। फिर एक पतली नली सीधे फोड़े में डाली जाती है जो सारा गाढ़ा मवाद बाहर बोतल में निकाल देती है ताकि मरीज को फेफड़ा काटने का बड़ा ऑपरेशन न कराना पड़े।",
            "benefitsEn": [
                "Evacuates life-threatening pulmonary sepsis in patients unresponsive to antibiotics.",
                "Preserves vital lung parenchyma and avoids high-risk surgical lung resection (lobectomy).",
                "Rapidly resolves high fever, toxic coughing, and chest pain."
            ],
            "benefitsHi": [
                "एंटीबायोटिक से ठीक न होने वाले जानलेवा फेफड़े के संक्रमण को तुरंत खत्म करना।",
                "फेफड़े को कटने से बचाकर मरीज की सांस लेने की क्षमता को पूरी तरह सुरक्षित रखना।",
                "तेज बुखार, बदबूदार खांसी और छाती के दर्द में तुरंत आराम।"
            ],
            "specificRisksEn": [
                "Coughing up blood (hemoptysis) (2-5%).",
                "Air leak or connection to airways (bronchopleural fistula) (5-10%).",
                "Infection leaking into chest lining (empyema) (3-6%).",
                "Sudden coughing fit during drainage (5-10%).",
                "Pus blockage of the tube requiring saline flushes."
            ],
            "specificRisksHi": [
                "खांसी में खून आना (2-5%)।",
                "सांस की नली में छेद होने से छाती में हवा रिसना (5-10%)।",
                "फेफड़े के पर्दे में मवाद फैलने का जोखिम (3-6%)।",
                "नली डालते समय या मवाद निकलते समय तेज खांसी आना (5-10%)।",
                "गाढ़ा मवाद जमने से नली का बंद होना।"
            ],
            "alternativesEn": "Major surgical lung resection (lobectomy/pneumonectomy) under general anesthesia, or prolonged conservative intravenous antibiotic therapy alone.",
            "alternativesHi": "ऑपरेशन करके फेफड़े का सड़ा हुआ हिस्सा या पूरा फेफड़ा काटना (Lobectomy), या केवल दवाइयों पर निर्भर रहना।",
            "sedationTypeEn": "Local anesthesia with monitored conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
        }
    },
    {
        "id": "pcd-pneumothorax-heimlich-valve-placement",
        "name": "Percutaneous Catheter Drainage of Pneumothorax (Aspiration & Heimlich Valve Placement)",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV081",
        "rghsCode": "693 / 41",
        "icd10": "J93.0 (Spontaneous tension pneumothorax) / J93.11 (Primary spontaneous pneumothorax)",
        "indications": [
            "Primary or secondary spontaneous pneumothorax with symptom duration > 24 hours or lung collapse > 20-30%",
            "Iatrogenic pneumothorax following CT-guided lung biopsy, central venous catheterization, or thoracentesis",
            "Ambulatory outpatient management allowing patient mobility without bulky underwater seal water bottles",
            "Tension pneumothorax stabilization following initial needle decompression"
        ],
        "preOpCriteria": [
            "Patient sitting or semi-recumbent; vital signs documented (oxygen saturation, heart rate, blood pressure)",
            "Point-of-care thoracic ultrasound demonstrating absence of lung sliding, barcode sign on M-mode, and lung point",
            "Chest radiograph or ultrasound confirming pneumothorax extent",
            "Heimlich flutter valve / compact ambulatory chest drain kit ready"
        ],
        "hardware": [
            { "category": "Pneumothorax Kit", "name": "8F - 10F Pneumothorax Catheter Set with Heimlich Valve", "spec": "Polyurethane radiopaque pigtail catheter with blunt-tip stylet and one-way Heimlich flutter valve", "standardStore": "Central IR Consignment Store" },
            { "category": "Valve", "name": "Heimlich Flutter Valve", "spec": "One-way rubber flutter valve in clear casing preventing air re-entry into chest", "standardStore": "Central IR Consignment Store" },
            { "category": "Ultrasound Probe", "name": "High-Frequency Linear Probe", "spec": "7.5 - 12 MHz vascular/small parts transducer", "standardStore": "USG Suite 922" },
            { "category": "Aspiration Syringe", "name": "60 mL Syringe with 3-Way Stopcock", "spec": "Manual evacuation syringe set", "standardStore": "DDC-14 Central" },
            { "category": "Fixation", "name": "Chest Tube Anchor Dressing", "spec": "Occlusive transparent dressing with suture lock", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient supine with head elevated 30-45 degrees; verify pneumothorax with thoracic ultrasound (absence of lung sliding in 2nd/3rd anterior intercostal space).",
            "Prep anterior chest wall aseptically; infiltrate 5-10 mL 2% Lignocaine into 2nd intercostal space mid-clavicular line (or 4th-5th intercostal space anterior axillary line).",
            "Advance 18G needle over superior border of rib until air bubbles are easily aspirated into liquid-filled syringe.",
            "Insert guidewire into pleural cavity; advance 8F-10F pigtail catheter over wire into apical pleural space.",
            "Connect 3-way stopcock and 60 mL syringe; manually aspirate free intrapleural air until resistance is met (typically 500-2000 mL).",
            "Attach the one-way Heimlich flutter valve to the catheter, observing correct directional arrows (allowing air out but blocking air entry).",
            "Verify flutter valve action during expiration/coughing; confirm lung re-expansion with ultrasound and follow-up chest radiograph.",
            "Secure catheter with adhesive fixation device; patient can mobilize and ambulate immediately."
        ],
        "complications": [
            "Subcutaneous emphysema around catheter site (2-4%)",
            "Catheter occlusion or kinking (<3%)",
            "Persistent air leak requiring underwater seal suction (5-10%)",
            "Re-expansion pulmonary edema (<0.5%)",
            "Intercostal nerve irritation (3-5%)"
        ],
        "maayTariffInr": 3500,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "फेफड़े की हवा निकालना एवं हीमलिक वाल्व लगाना (न्यूमोथोरैक्स कैथेटर ड्रेनेज)",
            "indicationEn": "Percutaneous pigtail catheter evacuation of trapped pleural air (pneumothorax) with a one-way Heimlich flutter valve for mobile recovery.",
            "indicationHi": "छाती में फेफड़े के बाहर हवा भर जाने (न्यूमोथोरैक्स) पर सांस की तकलीफ दूर करने के लिए बारीक नली डालकर हवा निकालना और वन-वे हीमलिक वाल्व लगाना।",
            "descriptionEn": "Under ultrasound guidance and local numbing, a fine pigtail tube is placed between the upper ribs into the trapped air pocket around the lung. A specialized one-way valve (Heimlich valve) is attached, letting trapped air escape when breathing or coughing while preventing air from re-entering, allowing the patient to walk and recover without heavy water bottles.",
            "descriptionHi": "सोनोग्राफी से फेफड़े के बाहर भरी हवा को देखकर, छाती को सुन्न करके एक बहुत पतली नली डाली जाती है। इस नली पर एक विशेष वन-वे वाल्व (Heimlich Valve) लगा दिया जाता है, जिससे मरीज के खांसने या सांस छोड़ने पर हवा बाहर निकल जाती है लेकिन वापस अंदर नहीं जा सकती। मरीज बिना किसी भारी बोतल के आराम से चल-फिर सकता है।",
            "benefitsEn": [
                "Immediately relieves breathlessness and allows the collapsed lung to re-expand.",
                "Compact ambulatory valve enables walking and home recovery without hospital water bottles.",
                "Painless small-caliber tube replacing thick, painful emergency chest pipes."
            ],
            "benefitsHi": [
                "सांस फूलने से तुरंत राहत और सिकुड़े हुए फेफड़े का फौरन दोबारा खुलना।",
                "छोटा वाल्व लगे होने से मरीज बिना भारी बोतल के आसानी से चल-फिर सकता है।",
                "पारंपरिक मोटे चेस्ट पाइप की तुलना में अत्यधिक दर्दरहित और सुविधाजनक।"
            ],
            "specificRisksEn": [
                "Coughing or chest irritation as the lung inflates (5-10%).",
                "Air spreading under the chest skin (subcutaneous emphysema) (2-4%).",
                "Continuous large air leak requiring connection to hospital suction bottle (5-10%).",
                "Dislodgement of the catheter if pulled (2-4%).",
                "Mild local soreness at the tube site (3-5%)."
            ],
            "specificRisksHi": [
                "फेफड़ा फूलते समय हल्की खांसी या छाती में खिंचाव (5-10%)।",
                "चमड़ी के नीचे थोड़ी हवा फैलना (2-4%)।",
                "फेफड़े में बड़ा सुराख होने पर अस्पताल की मशीन से नली जोड़ने की जरूरत पड़ना (5-10%)।",
                "नली का खिसक जाना (2-4%)।",
                "नली वाली जगह पर हल्का दर्द (3-5%)।"
            ],
            "alternativesEn": "Traditional large-bore intercostal chest tube (ICD) attached to heavy underwater water-seal bottle, simple needle aspiration alone, or surgical repair.",
            "alternativesHi": "छाती में मोटा पाइप डालकर भारी पानी की बोतल से जोड़ना, केवल सुई से हवा खींचना, या ऑपरेशन।",
            "sedationTypeEn": "Local anesthesia alone.",
            "sedationTypeHi": "केवल स्थानीय सुन्नता (Local Anesthesia)।"
        }
    },
    {
        "id": "usg-pericardiocentesis-diagnostic-evacuative",
        "name": "Ultrasound-Guided Pericardiocentesis (Diagnostic & Evacuative)",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV082",
        "rghsCode": "693 / 41",
        "icd10": "I30.9 (Acute pericarditis, unspecified) / I31.3 (Pericardial effusion, noninflammatory)",
        "indications": [
            "Emergency cardiac tamponade: Beck's triad (hypotension, jugular venous distension, muffled heart sounds) with pulsus paradoxus",
            "Hemodynamically significant moderate-to-large pericardial effusion producing dyspnea, orthopnea, or tachycardia",
            "Diagnostic sampling for suspected tuberculous pericarditis, purulent bacterial pericarditis, or neoplastic effusion",
            "Decompression of pericardial space prior to life-threatening cardiovascular collapse"
        ],
        "preOpCriteria": [
            "Emergency procedure in tamponade; if stable, verify INR <= 1.5, Platelets >= 50,000/uL",
            "Echocardiography / bedside ultrasound confirming pericardial fluid depth >= 10 mm (subxiphoid, apical, or parasternal window) and right ventricular diastolic collapse",
            "Continuous ECG, non-invasive BP, and pulse oximetry monitoring established",
            "Emergency resuscitation medications (Atropine, Adrenaline, IV fluids) at bedside"
        ],
        "hardware": [
            { "category": "Pericardiocentesis Kit", "name": "Pericardiocentesis Access Kit", "spec": "18G x 12-15 cm echogenic needle with side-arm tubing and 0.035 guidewire", "standardStore": "Cath Lab Main Store" },
            { "category": "Ultrasound / Echo", "name": "Phased Array Cardiac Ultrasound Probe", "spec": "2.0 - 4.0 MHz cardiac echo probe with continuous ECG tracing", "standardStore": "USG Suite 922" },
            { "category": "Guidewire", "name": "0.035 J-Tip Guidewire", "spec": "80 cm fluoroscopy-compatible J-wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Aspiration Syringe", "name": "50 mL Luer Lock Syringe with 3-Way Stopcock", "spec": "Sterile high-volume syringe kit", "standardStore": "DDC-14 Central" },
            { "category": "Emergency Medications", "name": "Inj Atropine & Adrenaline", "spec": "0.6 mg Atropine and 1:1000 Adrenaline ampoules", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient in semi-Fowler position (30-45 degrees); attach continuous ECG leads and pulse oximeter.",
            "Perform bedside echocardiogram to evaluate maximal fluid pocket and select access route (subxiphoid trajectory directed toward left shoulder, or apical/parasternal window).",
            "Prep subxiphoid region and anterior chest wall with povidone-iodine; infiltrate 10-15 mL 2% Lignocaine into skin, subcutis, and rectus sheath down to pericardium.",
            "Advance 18G echogenic needle under real-time ultrasound guidance at a 30-45 degree angle beneath the costal margin toward the left shoulder.",
            "Maintain continuous gentle negative pressure on syringe; enter pericardial sac with sudden loss of resistance and aspiration of non-clotting pericardial fluid.",
            "Confirm needle position with agitated saline contrast echocardiography ('bubble test' showing bubbles in pericardium, NOT in cardiac chambers).",
            "Collect 50-100 mL for urgent diagnostic testing (cell count, protein/LDH, GeneXpert MTB, adenosine deaminase [ADA], cytology, and culture).",
            "Carefully evacuate fluid slowly (200-500 mL) while observing immediate hemodynamic recovery (blood pressure rise, resolution of pulsus paradoxus); withdraw needle or exchange for drain if indicated."
        ],
        "complications": [
            "Cardiac chamber puncture (right ventricle / atrium) (1-2%, managed with immediate aspiration/repositioning)",
            "Coronary artery laceration (<0.5%)",
            "Ventricular arrhythmias or severe vasovagal bradycardia (2-4%, pre-medicate with Atropine if needed)",
            "Liver laceration or pneumothorax (<0.5%)",
            "Re-accumulation of fluid (15-25% without indwelling catheter)"
        ],
        "maayTariffInr": 8000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "इको/सोनोग्राफी-निर्देशित पेरीकार्डियोसेंटेसिस (दिल की थैली से पानी निकालना - जीवन रक्षक प्रक्रिया)",
            "indicationEn": "Emergency or elective ultrasound-guided needle drainage of fluid from around the heart (pericardial effusion) to relieve cardiac tamponade.",
            "indicationHi": "दिल के चारों तरफ थैली में भरे पानी (पेरीकार्डियल इफ्यूजन) से दिल पर पड़ने वाले जानलेवा दबाव (कार्डियक टैम्पोनेड) को हटाने और जांच हेतु सुई द्वारा पानी निकालना।",
            "descriptionEn": "Under real-time ultrasound/echocardiography guidance and continuous heart-rate monitoring, local numbing is applied below the chest bone. A special needle is gently guided into the pericardial sac surrounding the heart, and trapped fluid is aspirated, immediately relieving pressure and allowing the heart to beat normally.",
            "descriptionHi": "सोनोग्राफी और ईसीजी मशीन पर लगातार दिल की धड़कन देखते हुए, छाती की निचली हड्डी के नीचे सुन्न करने का इंजेक्शन लगाकर एक बहुत बारीक सुई दिल की बाहरी थैली में डाली जाती है। वहां जमा पानी बाहर खींचते ही दिल पर बना जानलेवा दबाव तुरंत हट जाता है और बीपी सामान्य हो जाता है।",
            "benefitsEn": [
                "Life-saving emergency relief from fatal heart compression (cardiac tamponade).",
                "Instant improvement in blood pressure, breathing, and blood circulation.",
                "Provides vital diagnostic fluid to detect tuberculosis, infection, or cancer."
            ],
            "benefitsHi": [
                "दिल पर पड़ने वाले जानलेवा दबाव से तुरंत जीवन रक्षा।",
                "रक्तचाप (बीपी), सांस और दिल की धड़कन में क्षण भर में चमत्कारी सुधार।",
                "पानी की जांच से टीबी, संक्रमण या कैंसर की सटीक पहचान।"
            ],
            "specificRisksEn": [
                "Temporary irregular heartbeats or slow pulse (vasovagal bradycardia) (2-4%).",
                "Accidental needle scratch to heart wall requiring monitoring (1-2%).",
                "Fluid filling back up over days or weeks (15-25%).",
                "Extremely rare injury to heart vessels (<0.5%).",
                "Pneumothorax or liver puncture (<0.5%)."
            ],
            "specificRisksHi": [
                "दिल की धड़कन का अस्थायी रूप से अनियमित या धीमा होना (2-4%)।",
                "दिल की मांसपेशी पर सुई का हल्का स्पर्श या खरोंच (1-2%)।",
                "बीमारी के कारण कुछ दिनों या हफ्तों में पानी का दोबारा भर जाना (15-25%)।",
                "दिल की नस में चोट लगने का अत्यंत दुर्लभ खतरा (<0.5%)।",
                "फेफड़े या लिवर में हल्की सुई लगने का जोखिम (<0.5%)।"
            ],
            "alternativesEn": "Emergency open surgical pericardial window (thoracotomy/subxiphoid window) under general anesthesia, or continuous medical inotropic support.",
            "alternativesHi": "छाती खोलकर दिल का बड़ा ऑपरेशन (Pericardial Window) अथवा केवल नसों द्वारा दवाइयां देना।",
            "sedationTypeEn": "Local anesthesia with monitored cardiac sedation and emergency readiness.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और गहन कार्डियक निगरानी।"
        }
    },
    {
        "id": "indwelling-pericardial-catheter-malignant-effusion",
        "name": "Indwelling Pericardial Catheter Placement for Malignant Pericardial Effusion",
        "category": "Non-Vascular: Catheter Drainage & Stenting",
        "code": "2849-NV083",
        "rghsCode": "693 / 41",
        "icd10": "I31.3 (Pericardial effusion) / C79.89 (Secondary malignant neoplasm of other specified sites)",
        "indications": [
            "Recurrent symptomatic malignant pericardial effusion (lung, breast carcinoma, lymphoma, leukemia)",
            "Cardiac tamponade recurring rapidly within days of simple needle pericardiocentesis",
            "Need for extended multi-day controlled pericardial drainage to allow visceral and parietal pericardium to adhere",
            "Access for intrapericardial instillation of sclerosing or chemotherapeutic agents (Bleomycin, Cisplatin, Thiotepa)"
        ],
        "preOpCriteria": [
            "Coagulation status: INR <= 1.4, Platelets >= 60,000/uL",
            "Echocardiogram documenting persistent or recurring pericardial collection >= 10-15 mm depth",
            "Continuous ECG and hemodynamic monitoring in cath lab / ICU setting",
            "Closed gravity pericardial drainage system prepared"
        ],
        "hardware": [
            { "category": "Drainage Catheter", "name": "6F - 8F Locking Pigtail Pericardial Catheter Set", "spec": "6F/8F x 20 cm soft polyurethane multi-hole catheter with locking string and J-tip wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Guidewire", "name": "0.035 Rosen / Amplatz J-Tip Wire", "spec": "145 cm flexible stainless steel guidewire", "standardStore": "Cath Lab Main Store" },
            { "category": "Ultrasound / Echo", "name": "Echocardiography Machine", "spec": "Phased array probe with agitated saline bubble software", "standardStore": "USG Suite 922" },
            { "category": "Dilators", "name": "Vascular Dilator Set", "spec": "6F and 8F short dilators", "standardStore": "Cath Lab Main Store" },
            { "category": "Drainage System", "name": "Closed Pericardial Drainage Bag System", "spec": "500-1000 mL bag with anti-reflux valve and 3-way stopcock", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient at 45 degrees elevation; connect continuous ECG monitor and arterial line / pulse oximeter.",
            "Identify optimal subxiphoid or lower parasternal window using echocardiography.",
            "Scrub, prep, and drape subxiphoid area aseptically; infiltrate 10-15 mL 2% Lignocaine into skin and retrosternal tissues.",
            "Introduce 18G puncture needle under ultrasound guidance into the pericardial space; confirm non-clotting pericardial fluid return.",
            "Inject 5 mL agitated saline to verify pericardial contrast swirl on echo; advance 0.035 Rosen J-wire into pericardium, coiling smoothly along cardiac contour.",
            "Dilate subxiphoid tract with 6F-8F dilators over wire.",
            "Advance 6F-8F locking pigtail catheter over wire into posterior pericardial gutter; lock pigtail string and withdraw wire.",
            "Evacuate initial 200-400 mL slowly; connect catheter to closed sterile gravity drainage bag; secure catheter to epigastric skin with 2-0 silk suture and adhesive wing; transfer patient to ICU with q4h drainage charting."
        ],
        "complications": [
            "Cardiac arrhythmia (atrial fibrillation, premature ventricular contractions) (3-6%)",
            "Right ventricular epicardial abrasion (<1%)",
            "Catheter occlusion by fibrin / malignant debris (5-10%, cleared with gentle sterile saline flush)",
            "Catheter-related purulent pericarditis / infection (1-3%)",
            "Catheter dislodgement (3-5%)"
        ],
        "maayTariffInr": 10000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Jaipur Surgical / BD India (+91 98290 12345)"
        ],
        "consent": {
            "nameHi": "दिल की थैली में पक्की नली (इंड्वेलिंग पेरीकार्डियल कैथेटर) डालना (कैंसर के पानी की निरंतर निकासी)",
            "indicationEn": "Placement of a temporary indwelling catheter in the pericardial sac for continuous multi-day drainage of recurrent malignant fluid around the heart.",
            "indicationHi": "कैंसर के कारण दिल के चारों तरफ बार-बार भरने वाले पानी को कई दिनों तक लगातार बाहर निकालने हेतु दिल की थैली में बारीक नली (कैथेटर) डालना।",
            "descriptionEn": "Under ultrasound/echocardiogram guidance and heart-rate monitoring, local numbing is administered below the breastbone. A thin, flexible soft pigtail tube is guided into the sac surrounding the heart and connected to a closed drainage bag, allowing continuous drainage over 2-4 days so fluid does not rapidly build back up.",
            "descriptionHi": "सोनोग्राफी और ईसीजी की निगरानी में छाती की हड्डी के नीचे सुन्न करके, एक बहुत पतली और मुलायम नली दिल की थैली में डाली जाती है। इस नली को एक बैग से जोड़ दिया जाता है जो 2 से 4 दिन तक लगातार पानी बाहर निकालता रहता है ताकि दिल पर दोबारा दबाव न बने।",
            "benefitsEn": [
                "Prevents sudden, life-threatening recurrence of fluid around the heart (recurrent tamponade).",
                "Allows the heart layers to stick together (pericardiodesis), reducing long-term recurrence.",
                "Enables injection of cancer medications directly into the heart sac if needed."
            ],
            "benefitsHi": [
                "दिल के चारों तरफ दोबारा पानी भरने से होने वाले जानलेवा खतरे से लगातार सुरक्षा।",
                "दिल की दोनों परतों को आपस में चिपकाकर हमेशा के लिए पानी का बनना बंद करने में सहायक।",
                "आवश्यकता पड़ने पर इस नली के रास्ते कैंसर-रोधी दवा दिल की थैली में डाली जा सकती है।"
            ],
            "specificRisksEn": [
                "Temporary irregular heartbeats (arrhythmia) during catheter placement (3-6%).",
                "Catheter clogging with protein flakes (5-10%, managed with saline flushes).",
                "Infection traveling along the catheter into the heart sac (1-3%).",
                "Dislodgement of the catheter requiring reinsertion (3-5%).",
                "Mild chest ache or epigastric discomfort while tube is in place (5-10%)."
            ],
            "specificRisksHi": [
                "नली डालते समय दिल की धड़कन का कुछ समय के लिए तेज या अनियमित होना (3-6%)।",
                "गाढ़े पानी से नली में रुकावट आना (5-10%)।",
                "नली के रास्ते दिल की थैली में संक्रमण का जोखिम (1-3%)।",
                "नली का खिसक जाना (3-5%)।",
                "नली रहने तक छाती या पेट के ऊपरी हिस्से में हल्का दर्द (5-10%)।"
            ],
            "alternativesEn": "Surgical pericardial window through thoracotomy or subxiphoid surgical incision, or repeated needle aspirations.",
            "alternativesHi": "बेहोश करके छाती का ऑपरेशन (Surgical Pericardial Window) या बार-बार सुई से पानी निकालना।",
            "sedationTypeEn": "Local anesthesia with monitored cardiac sedation in ICU/Cath lab.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आईसीयू/कैथ लैब में गहन निगरानी।"
        }
    }
]
