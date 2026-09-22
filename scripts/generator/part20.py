# -*- coding: utf-8 -*-
"""
Part 20: Gastrointestinal & Enteric Interventions (Procedures 92 to 104)
"""

DATA_PART20 = [
    {
        "id": "prg-gastropexy-t-fasteners",
        "name": "Percutaneous Radiologic Gastrostomy (PRG) with Gastropexy T-Fasteners",
        "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
        "code": "2849-NV092",
        "rghsCode": "693 / 41",
        "icd10": "Z93.1 (Gastrostomy status) / K22.2 (Esophageal obstruction)",
        "indications": [
            "Severe neurogenic dysphagia (ALS, stroke, Parkinson's disease, traumatic brain injury) with intact stomach",
            "Obstructing head, neck, or esophageal malignancies preventing oral nutrition where endoscopic PEG cannot pass",
            "Long-term enteral nutritional support (>4-6 weeks) avoiding chronic nasal decubitus of nasogastric tubes",
            "Gastric decompression in advanced mechanical bowel obstruction / carcinomatosis"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "Fasting >= 6-8 hours; nasogastric tube or air insufflation catheter in situ (or 20 mL effervescent granules given if patient can swallow)",
            "Absence of massive uncorrectable ascites, severe gastric varices, or interposition of transverse colon over anterior gastric wall",
            "Broad-spectrum IV antibiotic prophylaxis (Cefazolin 1-2 g) administered 30-60 min prior"
        ],
        "hardware": [
            { "category": "Gastrostomy Kit", "name": "PRG Catheter Kit (14F - 18F Balloon-Retention Gastrostomy Tube)", "spec": "14F-18F silicone balloon-retention feeding tube with bolus and medication ports", "standardStore": "Central IR Consignment Store" },
            { "category": "Gastropexy Fasteners", "name": "Gastropexy T-Fastener Set (Saf-T-Pexy)", "spec": "Kit containing 3-4 absorbable/non-absorbable T-fastener needles with locking suture retainers", "standardStore": "Central IR Consignment Store" },
            { "category": "Puncture & Dilator Set", "name": "Tract Dilation / Peel-Away Sheath Set", "spec": "18G puncture needle, 0.035 stiff wire, serial 8F-18F dilators and 16F/18F peel-away sheath", "standardStore": "Central IR Consignment Store" },
            { "category": "Guidewire", "name": "0.035 Super Stiff Guidewire", "spec": "145 cm J-tip wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Contrast Medium", "name": "Water-Soluble Iodinated Contrast (Omnipaque / Telebrix)", "spec": "50 mL contrast for fluoroscopic stomach distension", "standardStore": "Cath Lab Main Store" }
        ],
        "techniqueSteps": [
            "Position patient supine; insufflate 500-1000 mL room air through nasogastric tube into stomach under fluoroscopy to distend gastric body and displace transverse colon inferiorly.",
            "Use ultrasound / fluoroscopy to mark puncture triangle on anterior abdominal wall between left costal margin, midline, and transverse colon.",
            "Sterilize upper abdomen; infiltrate 15-20 mL 2% Lignocaine down to anterior gastric wall.",
            "Deploy 3 or 4 T-fasteners in a triangular or square configuration, firing needles into the air-filled stomach and securing sutures to anchor anterior gastric wall flush against abdominal wall.",
            "Puncture the center of the gastropexy zone with 18G needle; confirm intragastric air/contrast aspiration.",
            "Advance 0.035 stiff wire into gastric antrum or duodenal sweep; serially dilate tract up to 16F or 18F.",
            "Advance 14F-18F balloon gastrostomy tube through peel-away sheath into stomach; inflate balloon with 5-7 mL sterile water; gently retract until snug against gastric wall.",
            "Inject 15 mL water-soluble contrast through tube to fluoroscopically confirm free intragastric mucosal fold distribution without perigastric leak; connect enteral feeding adapter; dress site."
        ],
        "complications": [
            "Peristomal leakage or localized skin maceration (5-10%)",
            "Inadvertent colon transgression (colocutaneous / gastrocolic fistula) (<1%)",
            "Peritonitis from premature balloon rupture or T-fastener failure (<1%)",
            "Abdominal wall bleeding or rectus sheath hematoma (1-2%)",
            "Tube occlusion or early accidental removal (3-5%)"
        ],
        "maayTariffInr": 9000,
        "vendorContacts": [
            "Avanos Medical India (+91 98290 33333)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "परक्यूटेनियस रेडियोलॉजिक गैस्ट्रोस्टॉमी (PRG - पेट में सीधे खाने की नली डालना)",
            "indicationEn": "Fluoroscopy-guided insertion of a gastrostomy feeding tube directly into the stomach for long-term nutrition when swallowing is impossible.",
            "indicationHi": "गले के कैंसर, पक्षाघात (लकवा) या अन्नप्रणाली की रुकावट के कारण मुंह से खाना न खा पाने पर, पेट की चमड़ी से सीधे आमाशय (पेट) में खाने की नली (PRG ट्यूब) डालना।",
            "descriptionEn": "Under real-time fluoroscopic X-ray guidance, air is placed into the stomach to inflate it safely. The stomach wall is tacked securely to the inside of the belly wall using tiny internal anchors (T-fasteners). A soft feeding tube is then placed directly into the stomach under local anesthesia, allowing liquid meals, milk, and medicines to be given comfortably at home.",
            "descriptionHi": "एक्स-रे स्क्रीन पर पेट (आमाशय) को फुलाकर उसकी सुरक्षित जगह देखी जाती है। पेट को सुन्न करके, छोटे टांकों (T-Fasteners) से आमाशय को पेट की अंदरूनी दीवार से चिपका दिया जाता है। फिर एक मुलायम नली सीधे पेट में डाल दी जाती है जिससे मरीज को घर पर ही दलिया, दूध, सूप और दवाइयां आसानी से दी जा सकती हैं।",
            "benefitsEn": [
                "Provides reliable, comfortable, long-term nutrition without uncomfortable tubes through the nose.",
                "Can be successfully performed even when severe throat or esophageal cancer completely blocks endoscopes.",
                "T-fasteners securely prevent stomach detachment, ensuring high safety and rapid wound healing."
            ],
            "benefitsHi": [
                "नाक में नली डालने के दर्द और गले में होने वाले घावों से हमेशा के लिए मुक्ति।",
                "गले या भोजन नली के गंभीर कैंसर में जहां दूरबीन (Endoscope) नहीं जा सकती, वहां भी यह नली आसानी से डाली जा सकती है।",
                "विशेष टांकों (T-Fasteners) की मदद से नली 100% सुरक्षित रहती है और पेट में रिसाव का खतरा नहीं होता।"
            ],
            "specificRisksEn": [
                "Minor leakage of liquid food or redness around the tube site (5-10%).",
                "Soreness or muscle ache in the upper abdomen for 2-3 days (15-25%).",
                "Accidental dislodgement or clogging of the tube (3-5%).",
                "Rare internal infection (peritonitis) requiring intravenous antibiotics (<1%).",
                "Minor bleeding in the abdominal wall (1-2%)."
            ],
            "specificRisksHi": [
                "नली के किनारे से हल्का खाना रिसना या त्वचा पर लालिमा आना (5-10%)।",
                "पेट में 2 से 3 दिन तक हल्का खिंचाव या दर्द (15-25%)।",
                "नली का मुड़ना या गलती से बाहर खिंच जाना (3-5%)।",
                "पेट के अंदर संक्रमण (Peritonitis) का अत्यंत दुर्लभ खतरा (<1%)।",
                "चमड़ी में हल्का खून का थक्का जमना (1-2%)।"
            ],
            "alternativesEn": "Endoscopic gastrostomy (PEG, often impossible if tumor blocks esophagus), open surgical Stamm gastrostomy under general anesthesia, or prolonged nasogastric (NG) tube feeding.",
            "alternativesHi": "दूरबीन द्वारा नली डालना (PEG), बेहोश करके पेट का ऑपरेशन (Surgical Gastrostomy), या नाक में नली डालकर रखना।",
            "sedationTypeEn": "Local anesthesia with monitored conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
        }
    },
    {
        "id": "direct-percutaneous-radiologic-jejunostomy",
        "name": "Direct Percutaneous Radiologic Jejunostomy (PRJ)",
        "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
        "code": "2849-NV093",
        "rghsCode": "693 / 41",
        "icd10": "Z93.4 (Other artificial openings of gastrointestinal tract) / K31.89 (Other diseases of stomach and duodenum)",
        "indications": [
            "Total gastrectomy, prior subtotal gastric resection, or caustic gastric destruction where gastrostomy is anatomically impossible",
            "Severe gastric outlet obstruction, severe gastroparesis, or recurrent life-threatening pulmonary aspiration of gastric feedings",
            "Direct small bowel enteric access required for elemental enteral nutrition below ligament of Treitz",
            "Alternative to surgical open feeding Witzel jejunostomy in high-risk frail patients"
        ],
        "preOpCriteria": [
            "Coagulation status: INR <= 1.4, Platelets >= 60,000/uL",
            "Pre-procedure barium or water-soluble contrast transit / CT identifying non-dilated proximal jejunal loop in left upper quadrant / umbilical region",
            "Broad-spectrum IV antibiotic prophylaxis given",
            "High-resolution fluoroscopy suite with tilt-table available"
        ],
        "hardware": [
            { "category": "Jejunostomy Kit", "name": "Direct PRJ Enteral Catheter Kit (10F - 12F)", "spec": "10F/12F x 30 cm locking pigtail or retention jejunal feeding tube with non-slip cuff", "standardStore": "Central IR Consignment Store" },
            { "category": "T-Fasteners", "name": "Enteropexy T-Fastener Set", "spec": "Set of 2-3 T-fastener anchor needles", "standardStore": "Central IR Consignment Store" },
            { "category": "Access Needle", "name": "18G Chiba / Trocar Needle", "spec": "18G x 10 cm echogenic needle", "standardStore": "Cath Lab Main Store" },
            { "category": "Guidewire", "name": "0.035 Rosen & Glidewire", "spec": "145 cm flexible guidewire set", "standardStore": "Cath Lab Main Store" },
            { "category": "Peel-Away Sheath", "name": "10F - 12F Peel-Away Introducer Sheath", "spec": "Tear-away vascular sheath", "standardStore": "Central IR Consignment Store" }
        ],
        "techniqueSteps": [
            "Position patient supine; pass steerable catheter through mouth/nose or existing tract into proximal jejunum; inject air and dilute contrast to opacify and distend proximal jejunal loop.",
            "Under fluoroscopy, identify an anteriorly positioned, mobile jejunal loop in left periumbilical abdomen.",
            "Sterilize skin; infiltrate 15 mL 2% Lignocaine into abdominal wall.",
            "Deploy 2-3 T-fastener needles to anchor the selected jejunal loop against the anterior abdominal wall (enteropexy).",
            "Puncture jejunal lumen between fasteners with 18G needle; confirm intraluminal position by contrast injection and mucosal fold outlining.",
            "Advance 0.035 wire antegrade into distal jejunum; serially dilate tract over wire.",
            "Advance 10F-12F peel-away sheath; introduce jejunostomy feeding tube into efferent jejunum; peel away sheath.",
            "Confirm antegrade contrast transit down small bowel without retroperitoneal or peritoneal extravasation; lock retention mechanism; secure with sutures."
        ],
        "complications": [
            "Jejunostomy dislodgement / peritoneal leak requiring emergency exploration (2-4%)",
            "Bowel perforation or bleeding (1-3%)",
            "Peristomal skin excoriation from small bowel enteric enzymes (5-10%)",
            "Jejunal small-bowel volvulus or obstruction around enteropexy (<1%)",
            "Tube occlusion by viscous enteral formulas (5-10%)"
        ],
        "maayTariffInr": 11000,
        "vendorContacts": [
            "Avanos Medical India (+91 98290 33333)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "डायरेक्ट परक्यूटेनियस रेडियोलॉजिक जेजुनोस्टॉमी (PRJ - छोटी आंत में सीधे खाने की नली डालना)",
            "indicationEn": "Fluoroscopy-guided direct placement of a feeding catheter into the small intestine (jejunum) when the stomach cannot be used.",
            "indicationHi": "पेट (आमाशय) का ऑपरेशन होने, पेट पूरी तरह निकाल दिए जाने या आमाशय के काम न करने पर छोटी आंत (जेजुनम) में सीधे खाने की नली डालना।",
            "descriptionEn": "Under real-time fluoroscopic X-ray guidance, an anterior loop of the small intestine (jejunum) is identified and temporarily fixed to the belly wall with tiny internal anchor sutures. Under local anesthesia, a slender feeding tube is inserted directly into the small intestine, allowing specialized liquid nutrition to be infused continuously.",
            "descriptionHi": "एक्स-रे की निगरानी में छोटी आंत के शुरुआती हिस्से को देखकर, पेट की चमड़ी को सुन्न किया जाता है। आंत को छोटे टांकों से पेट की दीवार से सुरक्षित जोड़कर, एक बहुत बारीक नली सीधे छोटी आंत में डाल दी जाती है। इस नली से तरल पोषण सीधे आंत में दिया जाता है।",
            "benefitsEn": [
                "Provides life-saving enteral nutrition when the stomach is surgically absent, obstructed, or diseased.",
                "Bypasses the stomach completely, preventing food from regurgitating into the lungs (aspiration pneumonia).",
                "Avoids open surgical cut-down (Witzel jejunostomy) in fragile patients."
            ],
            "benefitsHi": [
                "आमाशय खराब होने या कटे होने पर भी सीधे आंतों द्वारा मरीज को पूर्ण पोषण देना।",
                "खाना फेफड़ों में जाने (Aspiration Pneumonia) और उल्टी होने के खतरे से 100% बचाव।",
                "कमजोर मरीजों में पेट चीरकर किए जाने वाले बड़े ऑपरेशन से बचाव।"
            ],
            "specificRisksEn": [
                "Digestive enzymes leaking around the tube causing skin redness and irritation (5-10%).",
                "Tube blockage requiring frequent warm water flushing (5-10%).",
                "Dislodgement of the catheter requiring urgent hospital replacement (2-4%).",
                "Internal leak of intestinal fluid requiring emergency intervention (1-3%).",
                "Cramping or diarrhea if feeds are infused too rapidly (10-15%)."
            ],
            "specificRisksHi": [
                "आंतों के पाचक रस के रिसाव से नली के किनारे की त्वचा पर जलन या लाली (5-10%)।",
                "नली में खाना जमने से रुकावट आना (5-10%)।",
                "नली के खिसकने पर तुरंत अस्पताल आकर ठीक करवाने की आवश्यकता (2-4%)।",
                "आंत से रिसाव होने का गंभीर जोखिम (1-3%)।",
                "खाना बहुत तेजी से देने पर दस्त या पेट में मरोड़ लगना (10-15%)।"
            ],
            "alternativesEn": "Surgical open jejunostomy (Witzel technique) under general anesthesia, total parenteral nutrition (TPN) through central vein, or gastrojejunostomy (if stomach present).",
            "alternativesHi": "बेहोश करके पेट का बड़ा ऑपरेशन (Surgical Jejunostomy), नसों द्वारा ग्लूकोज/प्रोटीन की ड्रिप (TPN), या गैस्ट्रोजेजुनोस्टॉमी।",
            "sedationTypeEn": "Local anesthesia with IV conscious sedation and continuous monitoring.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक/दर्द निवारक दवा।"
        }
    },
    {
        "id": "prgj-catheter-insertion",
        "name": "Percutaneous Radiologic Gastrojejunostomy (PRGJ) Catheter Insertion",
        "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
        "code": "2849-NV094",
        "rghsCode": "693 / 41",
        "icd10": "K31.5 (Obstruction of duodenum) / K31.84 (Gastroparesis)",
        "indications": [
            "Severe diabetic or idiopathic gastroparesis with refractory nausea, vomiting, and delayed gastric emptying",
            "Gastric outlet obstruction (duodenal stenosis, inoperable pancreatic carcinoma) requiring concurrent gastric decompression and post-ligament of Treitz jejunal feeding",
            "Dual-lumen enteric management: simultaneous gastric drainage port and jejunal feeding port",
            "Conversion of existing PRG tract to transgastric jejunal feeding"
        ],
        "preOpCriteria": [
            "Coagulation parameters: INR <= 1.4, Platelets >= 60,000/uL",
            "Fasting 6-8 hours; gastric distension setup ready (or existing mature gastrostomy tract available)",
            "Intravenous motilin agonist / prokinetic (Metoclopramide 10 mg / Erythromycin) available to facilitate pyloric transit",
            "Dual-lumen gastrojejunostomy tube and steerable angled catheters ready"
        ],
        "hardware": [
            { "category": "PRGJ Catheter", "name": "Transgastric Dual-Lumen Gastrojejunostomy Tube (16F-22F with 8F-10F jejunal limb)", "spec": "Dual-lumen silicone tube with gastric aspiration ports and 8F x 45 cm weighted/pigtail jejunal limb", "standardStore": "Central IR Consignment Store" },
            { "category": "Steerable Catheter", "name": "5F Kumpe / Cobra / Headhunter Catheter", "spec": "65-100 cm selective hydrophilic catheter", "standardStore": "Cath Lab Main Store" },
            { "category": "Guidewire", "name": "0.035 Terumo Glidewire & 260 cm Amplatz Stiff Wire", "spec": "Hydrophilic angled wire and heavy duty exchange wire", "standardStore": "Cath Lab Main Store" },
            { "category": "T-Fasteners / Access Kit", "name": "Gastrostomy Access Kit", "spec": "T-fasteners, peel-away sheath, and fascial dilators", "standardStore": "Central IR Consignment Store" },
            { "category": "Contrast Medium", "name": "Water-Soluble Iodinated Contrast", "spec": "50 mL Telebrix / Omnipaque", "standardStore": "Cath Lab Main Store" }
        ],
        "techniqueSteps": [
            "Establish transgastric access via new gastropexy puncture or existing mature gastrostomy stoma.",
            "Introduce 5F directional catheter (Kumpe or Cobra) over 0.035 angled Terumo Glidewire through stomach toward antrum.",
            "Under continuous fluoroscopy, navigate wire through the pylorus, duodenal bulb, C-loop, and across the ligament of Treitz into proximal jejunum.",
            "Exchange the hydrophilic wire for a 260 cm 0.035 Amplatz stiff wire anchored deep in the proximal jejunal loops.",
            "Dilate the stoma tract to 18F-22F over the stiff wire.",
            "Advance the dual-lumen PRGJ catheter over the wire: guide long jejunal limb across duodenal C-loop into jejunum while positioning gastric retention balloon/loop in gastric body.",
            "Inflate gastric balloon or lock gastric retention mechanism; withdraw wire.",
            "Inject water-soluble contrast through both ports under fluoroscopy to confirm gastric port decompresses stomach and jejunal port flows freely into small bowel; secure stoma."
        ],
        "complications": [
            "Retrograde migration of jejunal limb back into stomach (10-15%, causing vomiting of feeding formula)",
            "Catheter kinking at pylorus or duodenojejunal flexure (5-8%)",
            "Jejunal lumen clogging by medications (5-10%)",
            "Peristomal leakage or skin breakdown (5-10%)",
            "Minor gastric mucosal bleeding (1-2%)"
        ],
        "maayTariffInr": 12000,
        "vendorContacts": [
            "Avanos Medical India (+91 98290 33333)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "परक्यूटेनियस रेडियोलॉजिक गैस्ट्रोजेजुनोस्टॉमी (PRGJ - पेट के रास्ते छोटी आंत में खाने की नली डालना)",
            "indicationEn": "Placement of a specialized dual-lumen tube through the stomach into the small intestine to simultaneously drain the stomach and provide direct intestinal feeding.",
            "indicationHi": "पेट की रुकावट या गैस्ट्रोपेरेसिस (पेट का खाना आगे न बढ़ना) में, पेट से मवाद/गैस निकालने और साथ ही साथ सीधे छोटी आंत में खाना पहुंचाने हेतु दोहरी नली (PRGJ ट्यूब) डालना।",
            "descriptionEn": "Under fluoroscopic X-ray guidance, a specialized two-in-one tube is inserted through the belly wall into the stomach. A long flexible limb is guided across the stomach and duodenum directly into the small intestine. One port drains excess acidic fluid and vomiting from the stomach, while the other port delivers nutritious liquid food directly into the intestine.",
            "descriptionHi": "एक्स-रे स्क्रीन पर देखकर, पेट की चमड़ी से एक विशेष दोहरी नली डाली जाती है। इसका एक लंबा सिरा आमाशय और ड्युओडेनम को पार करते हुए सीधे छोटी आंत में पहुंचा दिया जाता है। इस नली के एक मुंह से पेट में जमा उल्टी का पानी बाहर निकलता है और दूसरे मुंह से सीधे छोटी आंत में खाना व दवाइयां दी जाती हैं।",
            "benefitsEn": [
                "Two-in-one solution: completely stops chronic vomiting while providing vital nutrition.",
                "Delivers food safely past the blocked stomach directly into the absorbing small intestine.",
                "Avoids dangerous aspiration into the lungs in severe diabetic gastroparesis."
            ],
            "benefitsHi": [
                "एक ही नली से दो फायदे: उल्टी और जी मिचलाने से मुक्ति और साथ ही पूरा पोषण।",
                "रुके हुए पेट को पार करके भोजन सीधे छोटी आंत में पहुंचकर शरीर को ताकत देता है।",
                "उल्टी का खाना सांस की नली में जाने के जानलेवा खतरे से पूरा बचाव।"
            ],
            "specificRisksEn": [
                "The small bowel tip slipping backward into the stomach requiring repositioning (10-15%).",
                "Narrow intestinal tube clogging with ground medicines (5-10%).",
                "Mild soreness or leakage around the tube site (5-10%).",
                "Kinking or curling of the tube inside the bowel (5-8%).",
                "Minor bleeding in the stomach lining (1-2%)."
            ],
            "specificRisksHi": [
                "आंत वाली नली का मुड़कर वापस पेट में फिसल जाना, जिसे दोबारा सेट करना पड़ता है (10-15%)।",
                "नली पतली होने से दवाइयों के कणों से बंद होना (5-10%)।",
                "नली के किनारे हल्का दर्द या रिसाव (5-10%)।",
                "आंत के अंदर नली का उलझना (5-8%)।",
                "पेट की अंदरूनी परत से हल्का खून आना (1-2%)।"
            ],
            "alternativesEn": "Surgical gastrojejunostomy bypass operation under general anesthesia, separate gastrostomy and surgical jejunostomy, or central venous intravenous nutrition (TPN).",
            "alternativesHi": "बेहोश करके पेट का बाईपास ऑपरेशन (Surgical Gastrojejunostomy), अलग-अलग दो ऑपरेशन करना, या नसों द्वारा टीपीएन ड्रिप।",
            "sedationTypeEn": "Local anesthesia with monitored conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
        }
    },
    {
        "id": "fluoroscopic-exchange-repositioning-gj-tubes",
        "name": "Fluoroscopy-Guided Exchange and Repositioning of Gastrojejunostomy Tubes",
        "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
        "code": "2849-NV095",
        "rghsCode": "693 / 41",
        "icd10": "T85.528A (Displacement of gastrointestinal tube) / T85.598A (Other mechanical complication of gastrointestinal tube)",
        "indications": [
            "Retrograde displacement / migration of jejunal feeding limb back into the stomach, resulting in feeding intolerance and vomiting",
            "Mechanical occlusion of jejunal lumen by solidified enteral formula or encrusted medications unresponsive to enzymatic unblocking",
            "Perished, degraded, or fractured gastrojejunostomy tube requiring routine semi-annual or annual exchange",
            "Balloon rupture, deflation, or stomal enlargement with severe peristomal leakage"
        ],
        "preOpCriteria": [
            "Fasting 4-6 hours; enteral feeds stopped >= 4 hours prior",
            "Pre-procedure fluoroscopic contrast check confirming stomal tract maturity (>4 weeks old)",
            "Review of prior tube specifications (Fr size, length of jejunal limb in cm, stomal tract length)",
            "Replacement GJ tube, steerable catheter, and exchange wires ready"
        ],
        "hardware": [
            { "category": "Replacement Tube", "name": "Dual-Lumen GJ Replacement Tube", "spec": "16F-20F tube with 8F-10F jejunal limb matched to patient tract length", "standardStore": "Central IR Consignment Store" },
            { "category": "Guidewires", "name": "0.035 Bentson & 0.035 260 cm Amplatz Stiff Wire", "spec": "Floppy starter wire and heavy duty exchange wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Angled Catheter", "name": "5F Kumpe / Cobra Catheter", "spec": "Hydrophilic directional catheter", "standardStore": "Cath Lab Main Store" },
            { "category": "Contrast Medium", "name": "Water-Soluble Iodinated Contrast", "spec": "30 mL Telebrix / Omnipaque", "standardStore": "Cath Lab Main Store" },
            { "category": "Lubricant", "name": "Sterile Water-Soluble Lubricant Gel", "spec": "Lignocaine 2% jelly", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient supine on fluoroscopy table; clean mature stomal site with chlorhexidine.",
            "Inject 10 mL contrast through jejunal port under fluoroscopy to document tube position, migration into stomach, or occlusion.",
            "Pass 0.035 Bentson or Glidewire through the jejunal port into the intestine (if patent); or deflate gastric balloon and remove displaced tube over a wire.",
            "Through existing stoma, advance 5F Kumpe catheter and angled Glidewire under fluoroscopy across pylorus, duodenal C-loop, and into jejunum.",
            "Exchange Glidewire for 260 cm Amplatz stiff wire anchored deeply in small bowel loop.",
            "Lubricate new GJ tube; advance smoothly over the stiff wire through mature stoma, stomach, and across pylorus into distal jejunum.",
            "Inflate gastric retention balloon with 5 mL sterile water; gently snug balloon against gastric wall.",
            "Perform fluoroscopic contrast checks through both gastric and jejunal lumens to verify correct positioning and absence of extravasation; connect feeding adapters."
        ],
        "complications": [
            "Disruption / loss of stomal tract into peritoneal cavity (<1%, managed with urgent wire recanalization)",
            "Transient mild abdominal cramping (5-10%)",
            "Minor peristomal bleeding or granulation tissue irritation (2-4%)",
            "Immediate re-migration if wire not anchored deep in jejunum (<2%)",
            "Contrast aspiration during coughing (<0.5%)"
        ],
        "maayTariffInr": 4500,
        "vendorContacts": [
            "Avanos Medical India (+91 98290 33333)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "फ्लोरोस्कोपी-निर्देशित गैस्ट्रोजेजुनोस्टॉमी नली बदलना एवं सही जगह बैठाना (GJ Tube Exchange)",
            "indicationEn": "Fluoroscopy-guided replacement or repositioning of a blocked, displaced, or worn-out gastrojejunostomy feeding tube.",
            "indicationHi": "पेट की खाने वाली नली (GJ Tube) के मुड़ जाने, अपनी जगह से खिसक जाने, बंद होने या पुरानी होने पर एक्स-रे देखकर नली को बदलना या सही जगह बैठाना।",
            "descriptionEn": "Under real-time fluoroscopic X-ray guidance, the old or displaced feeding tube is checked with contrast dye. Using a soft flexible wire through the existing healed hole, the path into the small intestine is secured. The old tube is removed and a new tube is smoothly slid over the wire into the small bowel, restoring comfortable feeding without surgery.",
            "descriptionHi": "एक्स-रे स्क्रीन पर देखकर, पुराने छेद से एक बारीक लचीला तार आंत के अंदर पहुंचाया जाता है। फिर पुरानी या खिसकी हुई नली को निकालकर, तार के ऊपर से नई नली को सीधे छोटी आंत में सही जगह पहुंचा दिया जाता है। इसमें कोई नया चीरा या टांका नहीं लगाना पड़ता।",
            "benefitsEn": [
                "Quick, non-surgical outpatient procedure through the existing healed skin hole.",
                "Instantly restores life-sustaining enteral feeding and stops vomiting.",
                "Ensures millimeter-precise tube positioning under live X-ray visualization."
            ],
            "benefitsHi": [
                "पुराने रास्ते से ही बिना किसी नए चीरे या दर्द के मात्र 15 मिनट में नली बदल जाना।",
                "उल्टी रुकना और खाने की नली तुरंत चालू होकर मरीज को पोषण मिलना।",
                "एक्स-रे में देखकर नली को 100% सटीक जगह पर बैठाने की पूरी गारंटी।"
            ],
            "specificRisksEn": [
                "Mild discomfort or soreness around the stoma hole for a few hours (5-10%).",
                "Minor bleeding from stomal granulation tissue (2-4%).",
                "Rare difficulty finding the small bowel path requiring extra procedure time (<3%).",
                "Tube slipping back out of the intestine if patient coughs vigorously (<2%).",
                "Allergic reaction to X-ray contrast dye (<0.5%)."
            ],
            "specificRisksHi": [
                "नली बदलने के बाद छेद के आसपास कुछ घंटों तक हल्का दर्द (5-10%)।",
                "छेद के किनारे से हल्का खून रिसना (2-4%)।",
                "आंत का रास्ता सिकुड़ा होने पर नली बैठाने में थोड़ा अधिक समय लगना (<3%)।",
                "तेज खांसी आने पर नली का दोबारा खिसकना (<2%)।",
                "एक्स-रे डाई से हल्की एलर्जी (<0.5%)।"
            ],
            "alternativesEn": "Endoscopic repositioning under sedation, surgical stoma revision under general anesthesia, or insertion of a new primary gastrostomy.",
            "alternativesHi": "दूरबीन (Endoscopy) द्वारा नली बैठाना, बेहोश करके नया ऑपरेशन, या नाक में नली डालना।",
            "sedationTypeEn": "Local lubricant anesthesia with optional mild IV sedation.",
            "sedationTypeHi": "स्थानीय सुन्न करने वाली जेली और आवश्यकतानुसार हल्की शामक दवा।"
        }
    },
    {
        "id": "balloon-dilatation-esophageal-peptic-strictures",
        "name": "Balloon Dilatation of Esophageal Anastomotic / Peptic Strictures",
        "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
        "code": "2849-NV096",
        "rghsCode": "693 / 41",
        "icd10": "K22.2 (Esophageal obstruction) / K91.89 (Other postprocedural complications of digestive system)",
        "indications": [
            "Benign esophageal peptic strictures secondary to severe gastroesophageal reflux disease (GERD)",
            "Post-surgical esophageal anastomotic strictures following esophagectomy, gastrectomy, or gastric bypass",
            "Corrosive/caustic-induced chronic benign esophageal stenosis refractory to medical therapy",
            "Radiation-induced benign fibrotic esophageal strictures producing severe dysphagia to solids/liquids"
        ],
        "preOpCriteria": [
            "Coagulation status: INR <= 1.4, Platelets >= 50,000/uL",
            "Pre-procedure water-soluble esophagogram confirming stricture level, length, and caliber, and ruling out active perforation",
            "Fasting >= 6 hours; pharyngeal topical anesthesia (Lignocaine spray) and IV conscious sedation ready",
            "Balloon sizes selected (e.g. 10-12-14 mm or 12-15-18 mm Controlled Radial Expansion balloon)"
        ],
        "hardware": [
            { "category": "Dilatation Balloon", "name": "Esophageal Radial Dilation Balloon (CRE / Rigiflex)", "spec": "Wire-guided multi-diameter non-compliant esophageal balloon (10-12-14 mm or 15-18-20 mm x 5.5-8 cm)", "standardStore": "Central IR Consignment Store" },
            { "category": "Inflation Device", "name": "High-Pressure Balloon Inflation Syringe with Gauge", "spec": "30 atm dedicated inflation manometer syringe", "standardStore": "Cath Lab Main Store" },
            { "category": "Guidewire", "name": "0.035 Savary-Gilliard / Amplatz Super Stiff Wire", "spec": "260 cm wire with floppy atraumatic spring tip", "standardStore": "Cath Lab Main Store" },
            { "category": "Contrast Medium", "name": "Water-Soluble Iodinated Contrast", "spec": "Telebrix Gastro / Omnipaque diluted 50% for balloon inflation and post-dilatation check", "standardStore": "Cath Lab Main Store" },
            { "category": "Pharyngeal Spray", "name": "Lignocaine 10% Topical Spray", "spec": "Metered-dose throat spray", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient in semi-recumbent or lateral position under fluoroscopy; administer 3-4 sprays 10% Lignocaine to posterior pharynx followed by IV conscious sedation.",
            "Introduce hydrophilic 0.035 wire and 5F directional catheter orally; navigate gently across esophageal stricture under fluoroscopic roadmapping into stomach.",
            "Inject 5-10 mL water-soluble contrast to verify gastric entry; exchange wire for 260 cm Amplatz stiff wire.",
            "Advance uninflated esophageal radial balloon over the wire, centering the radio-opaque markers directly across the stricture waist.",
            "Inflate balloon with 50% contrast-saline mixture using inflation syringe until balloon waist effacement is fluoroscopically visualized; maintain pressure for 60 to 120 seconds.",
            "Perform incremental step-up radial expansion (e.g. 12 mm, then 13.5 mm, then 15 mm) in accordance with the 'rule of threes' to avoid esophageal rupture.",
            "Deflate balloon completely; withdraw balloon while maintaining guidewire position.",
            "Administer 20-30 mL oral water-soluble contrast under real-time fluoroscopy to verify wide stricture patency and strictly rule out transmural perforation; remove wire; monitor patient for 2-4 hours before initiating clear liquids."
        ],
        "complications": [
            "Esophageal transmural perforation (1-2%, requires immediate stent placement or surgical repair)",
            "Chest pain / substernal burning post-dilation (20-30%, self-limiting over 24 hours)",
            "Mucosal bleeding / hematemesis (2-4%)",
            "Aspiration pneumonia (<1%)",
            "Stricture recurrence requiring repeat dilatations (20-40%)"
        ],
        "maayTariffInr": 8000,
        "vendorContacts": [
            "Boston Scientific India (+91 98290 44444)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "भोजन नली की सिकुड़न को गुब्बारे से चौड़ा करना (एसोफैगल बैलून डाइलेटेशन)",
            "indicationEn": "Fluoroscopy-guided balloon dilation of a narrowed food pipe (esophagus) caused by acid reflux, surgery, radiation, or corrosive burns.",
            "indicationHi": "एसिडिटी, पुराने ऑपरेशन, तेजाब पीने या रेडिएशन के कारण भोजन नली में आई सिकुड़न (स्ट्रिक्चर) को एक्स-रे देखकर विशेष गुब्बारे से फुलाकर चौड़ा करना ताकि खाना आसानी से गले से उतर सके।",
            "descriptionEn": "Under throat numbing spray, mild sedation, and live X-ray guidance, a thin wire is navigated across the narrowed part of the food pipe into the stomach. A specialized high-pressure balloon is slid over the wire and centered across the narrowing, then slowly inflated with fluid to gently stretch open the scar tissue.",
            "descriptionHi": "गले को स्प्रे द्वारा सुन्न करके और हल्की शामक दवा देकर, एक्स-रे स्क्रीन पर एक बारीक तार भोजन नली की सिकुड़न के पार ले जाया जाता है। उस तार पर एक विशेष गुब्बारा (Balloon) चढ़ाकर सिकुड़न वाली जगह पर फुलाया जाता है। गुब्बारे के दबाव से भोजन नली का तंग रास्ता चौड़ा हो जाता है और मरीज आसानी से खाना निगल पाता है।",
            "benefitsEn": [
                "Immediate restoration of normal swallowing, allowing solid and liquid food intake.",
                "Minimally invasive, day-care procedure without cuts or surgical scars.",
                "Relieves painful food impaction, choking, and progressive malnutrition."
            ],
            "benefitsHi": [
                "गले में खाना अटकने और घूंट न उतरने की गंभीर समस्या से तुरंत आराम।",
                "बिना कोई चीरा या ऑपरेशन किए दिन के दिन होने वाला दर्दरहित सुरक्षित उपचार।",
                "मरीज का सामान्य खाना-पीना और वजन दोबारा बहाल होना।"
            ],
            "specificRisksEn": [
                "Substernal chest soreness or painful swallowing for 24-48 hours (20-30%).",
                "Minor bleeding from stretched mucosal scar tissue (2-4%).",
                "Esophageal tear or rupture requiring stent placement or surgery (1-2%).",
                "Stricture re-tightening over months requiring a second balloon session (20-40%).",
                "Temporary throat irritation from the numbing spray (<5%)."
            ],
            "specificRisksHi": [
                "प्रक्रिया के बाद 1 से 2 दिन छाती में हल्का भारीपन या निगलने में दर्द (20-30%)।",
                "सिकुड़न खुलने पर अंदरूनी परत से हल्का खून आना (2-4%)।",
                "भोजन नली में चीरा या छेद होने का दुर्लभ जोखिम, जिसके लिए स्टेंट या ऑपरेशन की जरूरत पड़ सकती है (1-2%)।",
                "कुछ महीनों बाद सिकुड़न दोबारा आने पर दोबारा गुब्बारा फुलाने की आवश्यकता (20-40%)।",
                "गले में हल्की खराश (<5%)।"
            ],
            "alternativesEn": "Rigid bougie dilation (Savary-Gilliard), surgical esophageal resection / replacement under general anesthesia, or permanent feeding gastrostomy (PRG).",
            "alternativesHi": "कठोर प्लास्टिक की सलाखों (Savary Dilators) से फैलाना, भोजन नली का बड़ा ऑपरेशन, या पेट में खाने की नली डालना।",
            "sedationTypeEn": "Topical pharyngeal local anesthesia with IV conscious sedation.",
            "sedationTypeHi": "गले में स्थानीय सुन्न करने वाला स्प्रे और नस द्वारा शामक/दर्द निवारक दवा।"
        }
    },
    {
        "id": "esophageal-covered-sems-deployment",
        "name": "Percutaneous Deployment of Covered Self-Expanding Metal Stents (SEMS) for Esophageal Carcinoma",
        "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
        "code": "2849-NV097",
        "rghsCode": "693 / 41",
        "icd10": "C15.9 (Malignant neoplasm of esophagus) / K22.2 (Esophageal obstruction)",
        "indications": [
            "Inoperable advanced esophageal carcinoma (squamous cell or adenocarcinoma) producing severe grade 3-4 dysphagia",
            "Malignant extrinsic compression of esophagus by lung cancer or mediastinal lymphadenopathy",
            "Palliative relief of dysphagia to restore oral soft/solid diet and eliminate salivary drooling",
            "Rapid single-session recanalization of obstructing tumors refractory to radiotherapy/chemotherapy"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
            "Barium swallow or CT chest defining exact stricture proximal and distal margins, lumen caliber, and relationship to upper esophageal sphincter (UES must be >= 2 cm above stent)",
            "Selection of stent length (tumor length + 2 cm proximal and distal coverage margin)",
            "Covered SEMS (silicone/polyurethane covered nitinol stent, 18-22 mm diameter) prepared"
        ],
        "hardware": [
            { "category": "Esophageal Stent", "name": "Fully/Partially Covered Esophageal SEMS", "spec": "18-20 mm body / 24 mm flared ends x 8-14 cm covered Nitinol self-expanding stent with delivery system", "standardStore": "Central IR Consignment Store" },
            { "category": "Guidewire", "name": "0.035 Super Stiff Amplatz Wire", "spec": "260 cm heavy duty guidewire with atraumatic J-tip", "standardStore": "Cath Lab Main Store" },
            { "category": "Angled Catheter", "name": "5F Kumpe / Cobra Catheter", "spec": "Hydrophilic directional catheter", "standardStore": "Cath Lab Main Store" },
            { "category": "Contrast Medium", "name": "Water-Soluble Non-Ionic Contrast", "spec": "50 mL Telebrix / Omnipaque", "standardStore": "Cath Lab Main Store" },
            { "category": "Pharyngeal Anesthetic", "name": "10% Lignocaine Spray & IV Sedation", "spec": "Topical spray and Midazolam/Fentanyl", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Spray posterior pharynx with 10% Lignocaine; administer IV conscious sedation; position patient in left lateral oblique position under fluoroscopy.",
            "Advance 5F catheter and 0.035 Terumo wire orally across the malignant stricture into the stomach under fluoroscopic roadmapping.",
            "Inject 10 mL water-soluble contrast to mark distal stricture margin; exchange wire for 260 cm Amplatz super-stiff wire.",
            "Place radio-opaque cutaneous markers on chest skin at proximal and distal tumor boundaries.",
            "Advance the covered SEMS delivery system over the stiff wire; align proximal stent flare at least 2 cm above proximal tumor margin.",
            "Under continuous real-time fluoroscopic vision, deploy the self-expanding stent by gradually retracting outer sheath while maintaining forward counter-traction on inner shaft.",
            "Confirm full stent expansion, correct alignment spanning the entire lesion, and lack of proximal/distal migration.",
            "Administer 30 mL oral water-soluble contrast; observe immediate unobstructed contrast passage through stent into stomach; remove delivery system and wire; keep patient upright for 2 hours."
        ],
        "complications": [
            "Severe retrosternal chest pain during stent expansion (30-50%, managed with scheduled analgesics for 48-72h)",
            "Stent migration into stomach (3-6% for fully covered SEMS)",
            "Esophageal perforation or tumor hemorrhage (1-2%)",
            "Globus sensation / foreign body feeling (10-15%)",
            "Tumor overgrowth at stent ends over long-term (10-15%)"
        ],
        "maayTariffInr": 16000,
        "vendorContacts": [
            "Boston Scientific India (+91 98290 44444)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "भोजन नली के कैंसर में कवर्ड मेटल स्टेंट (SEMS जाली) डालना",
            "indicationEn": "Fluoroscopy-guided deployment of a covered self-expanding metal stent (SEMS) across esophageal cancer to restore oral eating and drinking.",
            "indicationHi": "भोजन नली के कैंसर के कारण गले में खाना-पानी पूरी तरह बंद हो जाने पर, एक्स-रे देखकर नली के अंदर कवर्ड मेटल स्टेंट (धातु की जाली) लगाना ताकि मरीज सामान्य खाना खा सके।",
            "descriptionEn": "Under throat spray and conscious sedation, a fine guidewire is passed across the cancer blockage into the stomach under real-time X-ray guidance. A specialized self-expanding covered metal mesh tube (stent) is guided over the wire and released across the tumor. The stent automatically expands, pushing the tumor aside and instantly opening the food pipe.",
            "descriptionHi": "गले को सुन्न करके, एक्स-रे स्क्रीन पर कैंसर की गांठ के आर-पार एक बारीक तार ले जाया जाता है। उस तार के ऊपर से एक सिकुड़ी हुई धातु की जाली (कवर्ड मेटल स्टेंट) गांठ के बीच पहुंचाई जाती है। वहां छोड़ते ही जाली अपने आप पूरी तरह खुल जाती है और कैंसर की गांठ को दबाकर भोजन का रास्ता पूरी तरह खोल देती है।",
            "benefitsEn": [
                "Immediate, dramatic relief of dysphagia, enabling patient to eat soft food and swallow saliva.",
                "Non-surgical 20-minute procedure avoiding major open chest operations in advanced cancer.",
                "Significantly improves quality of life, strength, and nutritional status."
            ],
            "benefitsHi": [
                "पानी और खाना गले से न उतरने की भयंकर तकलीफ से तुरंत चमत्कारिक मुक्ति।",
                "बिना किसी बड़े ऑपरेशन या चीरे के मात्र 20 मिनट में भोजन का रास्ता खुल जाना।",
                "मरीज की कमजोरी दूर होना और सामान्य गरिमापूर्ण जीवन जीने में मदद।"
            ],
            "specificRisksEn": [
                "Moderate to severe chest pain for 2-3 days as the metal stent expands against the tumor (30-50%, treated with strong painkillers).",
                "Foreign body sensation or feeling of fullness behind the breastbone (10-15%).",
                "Stent slipping down into the stomach (migration) (3-6%).",
                "Bleeding from tumor tissue or rare tear in the food pipe wall (1-2%).",
                "Tumor growing over the ends of the stent after several months (10-15%)."
            ],
            "specificRisksHi": [
                "जाली खुलने के कारण छाती में 2 से 3 दिन तक दर्द रहना (30-50%, जिसके लिए दर्द निवारक दवा दी जाती है)।",
                "छाती में कुछ फंसा होने जैसा अहसास होना (10-15%)।",
                "जाली का अपनी जगह से खिसक कर पेट में गिर जाना (3-6%)।",
                "कैंसर की गांठ से हल्का खून रिसना या नली फटने का दुर्लभ जोखिम (1-2%)।",
                "कुछ महीनों बाद कैंसर का जाली के ऊपर दोबारा बढ़ना (10-15%)।"
            ],
            "alternativesEn": "Feeding gastrostomy tube (PRG) directly into the stomach, external beam radiotherapy / chemoradiation, or major surgical esophagectomy.",
            "alternativesHi": "पेट में खाने की नली (PRG) डालना, सिकाई (रेडिएशन), या भोजन नली का बड़ा ऑपरेशन।",
            "sedationTypeEn": "Pharyngeal topical local anesthesia with IV conscious sedation.",
            "sedationTypeHi": "गले में स्थानीय सुन्न करने वाला स्प्रे और नस द्वारा शामक/दर्द निवारक दवा।"
        }
    },
    {
        "id": "closure-tracheoesophageal-bronchoesophageal-fistulas",
        "name": "Endovascular / Radiologic Closure of Tracheoesophageal and Bronchoesophageal Fistulas",
        "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
        "code": "2849-NV098",
        "rghsCode": "693 / 41",
        "icd10": "J86.0 (Pyothorax with fistula) / J95.04 (Tracheo-esophageal fistula)",
        "indications": [
            "Malignant tracheoesophageal (TEF) or bronchoesophageal fistula complicating esophageal or lung carcinoma",
            "Severe uncontrollable paroxysmal coughing and choking immediately upon swallowing liquids (Ono's sign)",
            "Recurrent, life-threatening aspiration pneumonia, chemical pneumonitis, and sepsis due to airway soiling",
            "Endoluminal exclusion of fistula using customized covered esophageal SEMS (with or without companion airway Y-stent)"
        ],
        "preOpCriteria": [
            "Coagulation status: INR <= 1.4, Platelets >= 50,000/uL",
            "Pre-procedure thin-slice CT chest with oral water-soluble contrast and virtual bronchoscopy defining exact fistula orifice, size, and relationship to carina and vocal cords",
            "Airway patency verified (if trachea/bronchus compromised by tumor, dual stenting: airway stent first, then esophageal stent)",
            "Fully covered esophageal SEMS (with silicone or polyurethane membrane spanning >= 2 cm above and below fistula) ready"
        ],
        "hardware": [
            { "category": "Esophageal Stent", "name": "Fully Covered Esophageal SEMS", "spec": "18-20 mm body x 10-14 cm fully covered Nitinol stent with retrieval suture loop", "standardStore": "Central IR Consignment Store" },
            { "category": "Companion Airway Stent", "name": "Tracheobronchial Covered Stent (if indicated)", "spec": "Dedicated silicone Dumon or dynamic Y-stent / covered metallic airway stent", "standardStore": "Central IR Consignment Store" },
            { "category": "Guidewire", "name": "0.035 Super Stiff Amplatz Guidewire", "spec": "260 cm heavy-duty wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Angled Catheter", "name": "5F Hydrophilic Headhunter / Kumpe Catheter", "spec": "100 cm selective catheter", "standardStore": "Cath Lab Main Store" },
            { "category": "Contrast Medium", "name": "Water-Soluble Iso-Osmolar Contrast (Visipaque 320)", "spec": "Iso-osmolar non-ionic contrast (prevents pulmonary edema if aspirated)", "standardStore": "Cath Lab Main Store" }
        ],
        "techniqueSteps": [
            "Administer pharyngeal anesthesia and IV conscious sedation; attach continuous pulse oximeter, ECG, and blood pressure monitor.",
            "Carefully advance 5F catheter and 0.035 wire across esophagus, deliberately avoiding cannulating the fistula tract into the bronchial tree under fluoroscopy.",
            "Inject 5 mL iso-osmolar contrast to outline fistula level and confirm wire is in the distal esophagus and stomach.",
            "Exchange for 260 cm Amplatz super-stiff wire; measure fistula location relative to vertebral and cutaneous radio-opaque markers.",
            "Introduce fully covered esophageal SEMS delivery system over wire; position covered segment to provide at least 2.5-3 cm overlap above and below the fistula opening.",
            "Deploy the covered SEMS under continuous fluoroscopy; confirm full radial expansion sealing the esophageal wall against the fistula defect.",
            "(If airway narrowing is present or provoked, coordinate immediate bronchoscope/tracheal stent deployment).",
            "Perform oral water-soluble contrast swallow test on table; confirm 100% complete seal of fistula with contrast flowing cleanly into stomach and zero spillage into trachea/bronchi."
        ],
        "complications": [
            "Incomplete fistula seal / persistent leak around stent ends (5-10%, requires coaxial overlapping stent)",
            "Tracheal compression / acute airway compromise following esophageal stent expansion (2-4%, requires airway stenting)",
            "Severe retrosternal pain (20-30%)",
            "Stent migration (5-8% in fully covered designs)",
            "Massive fatal hemoptysis from tumor erosion into pulmonary vessels (1-3%)"
        ],
        "maayTariffInr": 18000,
        "vendorContacts": [
            "Boston Scientific India (+91 98290 44444)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "भोजन नली एवं सांस की नली के बीच बने छेद (फिस्टुला) को कवर्ड स्टेंट द्वारा बंद करना",
            "indicationEn": "Radiologic deployment of a fully covered stent to seal an abnormal hole (tracheoesophageal fistula) between the food pipe and windpipe.",
            "indicationHi": "कैंसर के कारण भोजन नली और सांस की नली के बीच बने खतरनाक छेद (फिस्टुला) को कवर्ड जाली (स्टेंट) द्वारा सील करना ताकि खाना सांस की नली में न जाए।",
            "descriptionEn": "When cancer creates an abnormal tunnel between the food pipe and windpipe, eating or drinking causes severe coughing and pneumonia. Under live X-ray guidance and sedation, a specialized fully covered metal stent is accurately placed across the hole in the food pipe, sealing the leak like a waterproof patch so food travels safely into the stomach.",
            "descriptionHi": "कैंसर की वजह से भोजन नली और सांस की नली के बीच छेद हो जाने पर पानी पीते ही भयंकर खांसी और दम घुटने लगता है। एक्स-रे देखकर भोजन नली के अंदर एक विशेष वॉटरप्रूफ धातु की जाली (कवर्ड स्टेंट) लगा दी जाती है जो उस छेद को पूरी तरह बंद कर देती है। इससे खाना या पानी फेफड़ों में जाना तुरंत बंद हो जाता है।",
            "benefitsEn": [
                "Life-saving emergency procedure: immediately stops food and liquid from entering the lungs.",
                "Prevents fatal aspiration pneumonia, lung destruction, and suffocation.",
                "Allows patient to resume drinking and eating soft foods comfortably."
            ],
            "benefitsHi": [
                "पानी पीते ही आने वाली असहनीय खांसी और दम घुटने से तुरंत जीवन रक्षा।",
                "फेफड़े में खाना जाने से होने वाले जानलेवा निमोनिया और सेप्सिस से 100% बचाव।",
                "मरीज का दोबारा मुंह से पानी और तरल भोजन ले पाना संभव होना।"
            ],
            "specificRisksEn": [
                "Severe chest pain for 2-3 days as the stent seals against the tumor (20-30%).",
                "Incomplete sealing or minor leak around the edges requiring an extra stent (5-10%).",
                "Swelling pressing onto the adjacent windpipe causing breathing tightness (2-4%).",
                "Stent slipping out of position (migration) (5-8%).",
                "Bleeding from tumor tissue into the airway (1-3%)."
            ],
            "specificRisksHi": [
                "जाली खुलने से छाती में 2 से 3 दिन तक दर्द रहना (20-30%)।",
                "छेद पूरी तरह बंद न होने पर एक और जाली लगाने की आवश्यकता पड़ना (5-10%)।",
                "जाली के दबाव से सांस की नली पर खिंचाव या सांस लेने में भारीपन (2-4%)।",
                "जाली का अपनी जगह से फिसल जाना (5-8%)।",
                "कैंसर की गांठ से सांस की नली में खून आने का जोखिम (1-3%)।"
            ],
            "alternativesEn": "Permanent feeding gastrostomy (PRG) with complete avoidance of oral intake, dual airway and esophageal surgical repair, or palliative terminal care.",
            "alternativesHi": "मुंह से खाना-पीना हमेशा के लिए बंद करके पेट में नली (PRG) डालना, या बेहोश करके बड़ा जटिल ऑपरेशन।",
            "sedationTypeEn": "Topical pharyngeal local anesthesia with monitored conscious sedation and airway support.",
            "sedationTypeHi": "गले में स्थानीय सुन्न करने वाला स्प्रे और गहन निगरानी में शामक दवा।"
        }
    },
    {
        "id": "balloon-dilatation-gastroduodenal-strictures",
        "name": "Balloon Dilatation of Benign Gastroduodenal Strictures",
        "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
        "code": "2849-NV099",
        "rghsCode": "693 / 41",
        "icd10": "K31.1 (Adult hypertrophic pyloric stenosis) / K31.5 (Obstruction of duodenum)",
        "indications": [
            "Benign peptic pyloric or duodenal bulb strictures secondary to chronic scarring from peptic ulcer disease (PUD)",
            "Post-surgical anastomotic stenosis following Billroth I/II gastrectomy, Whipple procedure, or Roux-en-Y reconstruction",
            "Corrosive/acid ingestion-induced gastric outlet stenosis with preserved gastric motility",
            "Persistent nausea, early satiety, large-volume vomiting of undigested food, and metabolic hypochloremic alkalosis"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
            "Upper GI endoscopy / barium fluoroscopy confirming benign etiology (biopsies negative for gastric carcinoma/lymphoma)",
            "Stomach decompressed with large-bore nasogastric tube lavage >= 12 hours prior to clear retained food residue",
            "Non-compliant angioplasty / GI dilatation balloons (12 to 20 mm diameter) selected"
        ],
        "hardware": [
            { "category": "Dilatation Balloon", "name": "Gastroduodenal Radial Dilation Balloon", "spec": "12-15 mm or 15-18 mm x 4-6 cm non-compliant balloon with dual radio-opaque markers", "standardStore": "Central IR Consignment Store" },
            { "category": "Inflation Manometer", "name": "High-Pressure Inflation Syringe", "spec": "Dedicated 30 atm pressure gauge inflation syringe", "standardStore": "Cath Lab Main Store" },
            { "category": "Guidewire", "name": "0.035 Super Stiff Amplatz Guidewire", "spec": "260 cm wire with atraumatic tip", "standardStore": "Cath Lab Main Store" },
            { "category": "Directional Catheter", "name": "5F Kumpe / Cobra Catheter", "spec": "100 cm hydrophilic catheter", "standardStore": "Cath Lab Main Store" },
            { "category": "Contrast Medium", "name": "Water-Soluble Non-Ionic Contrast", "spec": "Telebrix Gastro / Omnipaque", "standardStore": "Cath Lab Main Store" }
        ],
        "techniqueSteps": [
            "Aspirate residual gastric fluid via NG tube; position patient in right lateral decubitus posture under fluoroscopy.",
            "Administer pharyngeal anesthesia and IV conscious sedation.",
            "Introduce 5F directional catheter and 0.035 hydrophilic wire orally (or transgastrically if mature stoma exists); steer across stomach, through pyloric stricture into distal duodenum.",
            "Confirm intraluminal duodenal wire position by gentle contrast injection; exchange for 260 cm Amplatz stiff wire.",
            "Advance uninflated balloon catheter over the wire; center balloon across the narrowed pyloroduodenal waist.",
            "Slowly inflate balloon with 50% contrast-saline mixture; observe progressive waist disappearance under fluoroscopy; hold inflation for 60 to 90 seconds.",
            "Perform serial incremental dilatations (e.g. 12 mm, then 14 mm, up to 16-18 mm) ensuring mucosal safety.",
            "Deflate balloon; perform completion fluoroscopic water-soluble contrast examination to confirm rapid free gastric emptying into jejunum and rule out duodenal perforation."
        ],
        "complications": [
            "Duodenal / pyloric transmural perforation (1-2%, requires immediate surgical or endoscopic clip repair)",
            "Mucosal bleeding / hematemesis (2-4%)",
            "Abdominal pain / cramping (15-25%)",
            "Re-stenosis requiring repeat dilation sessions (20-35%)",
            "Aspiration of retained gastric contents during sedation (<1%)"
        ],
        "maayTariffInr": 8500,
        "vendorContacts": [
            "Boston Scientific India (+91 98290 44444)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "आमाशय एवं ग्रहणी (पेट व छोटी आंत के जोड़) की सिकुड़न का बैलून डाइलेटेशन",
            "indicationEn": "Fluoroscopy-guided balloon dilation of benign pyloric or duodenal strictures to relieve stomach outlet obstruction.",
            "indicationHi": "पुराने अल्सर, तेजाब या ऑपरेशन के बाद पेट के निकास द्वार (पाइलोरस) या छोटी आंत के शुरुआती हिस्से में आई सिकुड़न को एक्स-रे देखकर गुब्बारे से चौड़ा करना।",
            "descriptionEn": "Under throat numbing spray, sedation, and real-time fluoroscopic guidance, a soft guidewire is steered across the narrowed stomach exit into the duodenum. A specialized radial balloon is inflated with fluid across the tight scar tissue, stretching it open so food and liquids can naturally empty from the stomach into the intestine.",
            "descriptionHi": "गले को सुन्न करके और हल्की शामक दवा देकर, एक्स-रे स्क्रीन पर पेट के निकास द्वार की सिकुड़न के पार एक बारीक तार ले जाया जाता है। उस तार पर विशेष गुब्बारा (Balloon) चढ़ाकर फुलाया जाता है जिससे पेट का तंग रास्ता खुल जाता है और कई दिनों से पेट में रुका हुआ खाना आसानी से पचने के लिए आगे बढ़ जाता है।",
            "benefitsEn": [
                "Instantly relieves chronic nausea, vomiting of old food, and severe abdominal fullness.",
                "Avoids high-risk open surgical bypass (gastrojejunostomy) or stomach resection.",
                "Restores normal oral digestion and weight gain in benign ulcer disease."
            ],
            "benefitsHi": [
                "लगातार होने वाली उल्टी, जी मिचलाने और पेट फूलने की समस्या से तुरंत मुक्ति।",
                "पेट के बड़े बाईपास ऑपरेशन से 100% बचाव।",
                "मरीज का दोबारा भरपेट खाना खा पाना और सामान्य वजन वापस लौटना।"
            ],
            "specificRisksEn": [
                "Abdominal cramping or upper stomach soreness for 1-2 days (15-25%).",
                "Bleeding from stretched ulcer scar tissue (2-4%).",
                "Tear or hole in the duodenal wall requiring surgical repair (1-2%).",
                "Stricture returning over months requiring a second dilation session (20-35%).",
                "Vomiting during the procedure if stomach is not fully empty (<1%)."
            ],
            "specificRisksHi": [
                "प्रक्रिया के बाद 1 से 2 दिन पेट में मरोड़ या हल्का दर्द (15-25%)।",
                "सिकुड़न खुलने पर अंदरूनी परत से हल्का खून आना (2-4%)।",
                "आंत की दीवार में सुराख होने का दुर्लभ जोखिम जिसके लिए ऑपरेशन की जरूरत पड़ सकती है (1-2%)।",
                "कुछ महीनों बाद सिकुड़न दोबारा आने पर दोबारा गुब्बारा फुलाने की आवश्यकता (20-35%)।",
                "पेट पूरी तरह खाली न होने पर प्रक्रिया के दौरान उल्टी आना (<1%)।"
            ],
            "alternativesEn": "Surgical open or laparoscopic gastrojejunostomy bypass, endoscopic balloon dilation, or lifelong nasogastric decompression.",
            "alternativesHi": "दूरबीन या चीरे द्वारा पेट का बाईपास ऑपरेशन (Gastrojejunostomy), या केवल नाक में नली डालकर रखना।",
            "sedationTypeEn": "Topical pharyngeal local anesthesia with IV conscious sedation.",
            "sedationTypeHi": "गले में स्थानीय सुन्न करने वाला स्प्रे और नस द्वारा शामक/दर्द निवारक दवा।"
        }
    },
    {
        "id": "percutaneous-enteral-stenting-malignant-outlet-obstruction",
        "name": "Percutaneous Enteral Stenting for Malignant Gastric Outlet Obstruction (Enteral SEMS)",
        "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
        "code": "2849-NV100",
        "rghsCode": "693 / 41",
        "icd10": "C25.9 (Malignant neoplasm of pancreas) / K31.5 (Obstruction of duodenum)",
        "indications": [
            "Inoperable advanced pancreatic head adenocarcinoma, gastric antral carcinoma, or metastatic cholangiocarcinoma causing gastric outlet obstruction (GOO)",
            "Intractable vomiting, severe dehydration, and inability to tolerate oral nutrition (Gastric Outlet Obstruction Scoring System GOOSS score 0)",
            "Frail patient with short life expectancy or high surgical risk unfit for surgical gastrojejunostomy",
            "Rapid palliation restoring oral liquid/soft diet intake within 24-48 hours"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
            "Pre-procedure contrast CT and water-soluble barium study delineating site, length (usually 3-8 cm), and degree of duodenal obstruction",
            "Large-bore nasogastric tube decompression performed overnight to evacuate stagnant gastric contents",
            "Uncovered or partially covered enteric SEMS (20-22 mm diameter, 6-12 cm length) available"
        ],
        "hardware": [
            { "category": "Enteral Stent", "name": "Self-Expanding Metal Enteral Stent (WallFlex / Cook Enteral SEMS)", "spec": "20-22 mm diameter x 6-12 cm uncovered/partially covered Nitinol stent on 10F delivery system", "standardStore": "Central IR Consignment Store" },
            { "category": "Guidewires", "name": "0.035 Terumo Glidewire & 260 cm Amplatz Super Stiff Wire", "spec": "Hydrophilic angled wire and heavy duty support wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Catheter", "name": "5F Kumpe / Cobra Catheter", "spec": "100 cm selective hydrophilic catheter", "standardStore": "Cath Lab Main Store" },
            { "category": "Contrast Medium", "name": "Water-Soluble Non-Ionic Contrast", "spec": "50 mL Telebrix / Omnipaque", "standardStore": "Cath Lab Main Store" },
            { "category": "Pharyngeal Anesthetic", "name": "10% Lignocaine Spray & Sedation", "spec": "Throat spray and IV analgesia/sedation", "standardStore": "DDC-14 Central" }
        ],
        "techniqueSteps": [
            "Position patient in right lateral oblique posture; spray throat with 10% Lignocaine; administer IV sedation.",
            "Introduce 5F catheter and 0.035 Terumo wire orally (or via transgastric route if stoma exists); steer across gastric antrum.",
            "Under fluoroscopic roadmapping, carefully negotiate the wire across the malignant duodenal stricture into the normal distal duodenum and proximal jejunum.",
            "Inject 10 mL contrast to confirm distal jejunal position and determine stricture margins; exchange for 260 cm Amplatz super-stiff wire.",
            "Advance enteral SEMS delivery system over the wire; center the stent across the tumor stenosis, ensuring at least 2 cm of stent extends beyond proximal and distal tumor margins.",
            "Deploy the self-expanding stent under continuous live fluoroscopy; observe radial expansion locking the mesh across the obstruction.",
            "Verify stent position, patency, and absence of acute complications; perform oral contrast swallow showing free flow into jejunum.",
            "Remove wire and delivery system; keep patient semi-recumbent; begin clear liquid diet after 12 hours, advancing to soft pureed diet over 48 hours."
        ],
        "complications": [
            "Stent re-occlusion by tumor ingrowth/overgrowth (10-15%, managed by repeat coaxial stent placement)",
            "Stent migration into distal bowel (3-5% for covered SEMS, <1% for uncovered SEMS)",
            "Duodenal perforation (<1%)",
            "Bleeding from friable tumor tissue (2-4%)",
            "Mild abdominal discomfort (10-15%)"
        ],
        "maayTariffInr": 18000,
        "vendorContacts": [
            "Boston Scientific India (+91 98290 44444)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "पेट व छोटी आंत के कैंसर में मेटल स्टेंट (एंट्रल / ड्युओडेनल SEMS जाली) लगाना",
            "indicationEn": "Fluoroscopy-guided deployment of a self-expanding metal stent (SEMS) across a cancer blockage in the stomach outlet or duodenum to restore eating.",
            "indicationHi": "अग्न्याशय (पैंक्रियाज) या पेट के कैंसर के कारण आंत का रास्ता बंद होने और लगातार उल्टी होने पर, एक्स-रे देखकर धातु की जाली (SEMS स्टेंट) लगाना ताकि खाना पच सके।",
            "descriptionEn": "When advanced stomach or pancreatic cancer pinches the stomach outlet shut, vomiting prevents any eating. Under live X-ray guidance and sedation, a slender wire is steered through the cancer narrowing into the intestine. A self-expanding metal mesh tube (stent) is slid into place and released. It springs open, widening the blocked bowel so liquids and soft meals can pass easily.",
            "descriptionHi": "पैंक्रियाज या पेट के कैंसर के कारण जब खाना आगे नहीं बढ़ पाता और लगातार उल्टियां होती हैं, तो एक्स-रे स्क्रीन पर देखकर एक बारीक तार आंत के पार पहुंचाया जाता है। उस तार के ऊपर से एक सिकुड़ी हुई धातु की जाली (स्टेंट) रुकावट वाली जगह पर ले जाकर छोड़ दी जाती है। जाली अपने आप चौड़ी होकर कैंसर की रुकावट को खोल देती है जिससे मरीज दोबारा खाना खा सकता है।",
            "benefitsEn": [
                "Immediately relieves relentless vomiting and allows oral intake of liquids and soft diet within 24 hours.",
                "Minimally invasive 30-minute procedure avoiding major surgical bypass in weakened cancer patients.",
                "Significantly shortens hospital stay and restores comfort and quality of life."
            ],
            "benefitsHi": [
                "लगातार होने वाली उल्टियों से तुरंत राहत और 24 घंटे के अंदर मरीज का दोबारा खाना-पीना शुरू होना।",
                "कमजोर कैंसर रोगियों में बिना किसी चीरे या बड़े ऑपरेशन के मात्र 30 मिनट में होने वाला सुरक्षित उपचार।",
                "अस्पताल में भर्ती रहने के समय में कमी और मरीज के जीवन स्तर में उल्लेखनीय सुधार।"
            ],
            "specificRisksEn": [
                "Mild abdominal ache or nausea for 1-2 days (10-15%).",
                "Tumor growing through the mesh over several months, requiring a second stent (10-15%).",
                "Stent slipping out of position (migration) (2-4%).",
                "Minor bleeding from tumor tissue (2-4%).",
                "Rare bowel tear requiring emergency repair (<1%)."
            ],
            "specificRisksHi": [
                "प्रक्रिया के बाद 1-2 दिन पेट में हल्का दर्द या भारीपन (10-15%)।",
                "कुछ महीनों बाद कैंसर का जाली के छेदों से दोबारा अंदर आ जाना, जिसके लिए दूसरी जाली डालनी पड़ सकती है (10-15%)।",
                "जाली का अपनी जगह से खिसक जाना (2-4%)।",
                "कैंसर की गांठ से हल्का खून रिसना (2-4%)।",
                "आंत में सुराख होने का अत्यंत दुर्लभ जोखिम (<1%)।"
            ],
            "alternativesEn": "Open surgical gastrojejunostomy bypass under general anesthesia, permanent feeding jejunostomy tube, or conservative end-of-life care with nasogastric suction.",
            "alternativesHi": "बेहोश करके पेट का बाईपास ऑपरेशन (Gastrojejunostomy), आंत में खाने की नली डालना, या नाक में नली लगाकर रखना।",
            "sedationTypeEn": "Topical pharyngeal local anesthesia with IV conscious sedation.",
            "sedationTypeHi": "गले में स्थानीय सुन्न करने वाला स्प्रे और नस द्वारा शामक/दर्द निवारक दवा।"
        }
    },
    {
        "id": "colonic-sems-deployment-malignant-obstruction",
        "name": "Transanal / Fluoroscopic Deployment of Colonic SEMS for Malignant Bowel Obstruction",
        "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
        "code": "2849-NV101",
        "rghsCode": "693 / 41",
        "icd10": "C18.9 (Malignant neoplasm of colon) / K56.60 (Unspecified intestinal obstruction)",
        "indications": [
            "Acute large bowel obstruction due to left-sided colorectal carcinoma (rectosigmoid, descending colon, or splenic flexure)",
            "Bridge to surgery (BTS): converts emergency high-morbidity laparotomy with colostomy into elective one-stage resection with primary anastomosis",
            "Palliative treatment of bowel obstruction in patients with advanced metastatic colorectal cancer",
            "Relief of massive colonic distension (impending cecal perforation when cecal diameter > 9-10 cm)"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
            "Contrast CT abdomen/pelvis ruling out free colonic perforation / peritonitis and measuring stricture length and location",
            "Gentle rectal cleansing enema with warm saline (avoid aggressive bowel prep to prevent perforation)",
            "Dedicated enteral colonic SEMS (22-25 mm diameter x 6-12 cm length) ready"
        ],
        "hardware": [
            { "category": "Colonic Stent", "name": "Colonic Self-Expanding Metal Stent (WallFlex Colonic)", "spec": "22-25 mm body / 30 mm flared ends x 6-12 cm uncovered Nitinol stent on 10F delivery system", "standardStore": "Central IR Consignment Store" },
            { "category": "Guidewire", "name": "0.035 Terumo Glidewire & 260 cm Amplatz Super Stiff Wire", "spec": "Hydrophilic angled wire and heavy duty support wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Catheter", "name": "5F Kumpe / Cobra Catheter", "spec": "100 cm selective catheter", "standardStore": "Cath Lab Main Store" },
            { "category": "Contrast Medium", "name": "Water-Soluble Non-Ionic Contrast", "spec": "Telebrix / Omnipaque diluted 50%", "standardStore": "Cath Lab Main Store" },
            { "category": "Fluoroscopy System", "name": "Digital C-Arm / Cath Lab Suite", "spec": "Real-time radiographic imaging", "standardStore": "Cath Lab Main Store" }
        ],
        "techniqueSteps": [
            "Position patient in left lateral decubitus or lithotomy position on fluoroscopy table; administer IV analgesia/sedation.",
            "Under fluoroscopy (with or without endoscopic assistance), advance 5F catheter and 0.035 hydrophilic wire transanally to the rectosigmoid tumor.",
            "Inject 10-15 mL water-soluble contrast to outline the distal tumor shelf; carefully negotiate wire through the eccentric malignant lumen into dilated proximal colon.",
            "Confirm proximal intraluminal positioning by contrast injection outlining colonic haustra; exchange for 260 cm Amplatz super-stiff wire.",
            "Advance the colonic SEMS delivery system over the stiff wire; align stent so that proximal and distal margins extend at least 2 cm beyond the tumor boundaries.",
            "Under continuous live fluoroscopy, gradually release the self-expanding stent; observe the stent flares anchoring above and below the stricture waist.",
            "Confirm instant decompression: passage of large volumes of trapped flatus and liquid feces through the expanding stent on the table.",
            "Perform completion fluoroscopy with contrast; withdraw wire; place patient in observation bed; monitor clinical abdominal decompression."
        ],
        "complications": [
            "Colonic perforation (3-5%, requires emergency laparotomy)",
            "Stent migration (2-4% in uncovered stents)",
            "Stent re-obstruction by tumor ingrowth or fecal impaction (5-10%)",
            "Tenesmus, pelvic cramping, or mild rectal bleeding (10-20%)",
            "Transient bacteremia / post-decompression fever (3-5%)"
        ],
        "maayTariffInr": 18000,
        "vendorContacts": [
            "Boston Scientific India (+91 98290 44444)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "बड़ी आंत के कैंसर में मेटल स्टेंट (कोलोनिक SEMS जाली) लगाना (आंत की रुकावट खोलना)",
            "indicationEn": "Fluoroscopy-guided transanal placement of a self-expanding metal stent (SEMS) to unblock a cancerous obstruction in the large intestine (colon).",
            "indicationHi": "बड़ी आंत या मलाशय के कैंसर के कारण शौच का रास्ता पूरी तरह बंद हो जाने और पेट फूलने पर, मलद्वार के रास्ते एक्स-रे देखकर धातु की जाली (कोलोनिक स्टेंट) लगाना ताकि रुकावट खुल सके।",
            "descriptionEn": "When cancer blocks the large bowel, gas and stool build up dangerously, risking bowel rupture. Under X-ray guidance and sedation, a thin wire is navigated through the cancer blockage from the rectum. A self-expanding metal stent is released across the tumor. It automatically expands, opening the bowel and immediately releasing trapped stool and gas, often avoiding an emergency stoma bag operation.",
            "descriptionHi": "बड़ी आंत में कैंसर की गांठ से रुकावट आने पर पेट फूलने लगता है और आंत फटने का जानलेवा खतरा हो जाता है। मलद्वार के रास्ते एक्स-रे स्क्रीन पर देखकर एक बारीक तार रुकावट के पार ले जाया जाता है। तार के ऊपर से धातु की सिकुड़ी हुई जाली (स्टेंट) ले जाकर छोड़ दी जाती है। जाली तुरंत फूलकर आंत का रास्ता खोल देती है जिससे जमा हुआ मल और गैस बाहर निकल जाती है और मरीज को पेट में मल का बैग (Colostomy) लगाने के आपातकालीन ऑपरेशन से राहत मिल जाती है।",
            "benefitsEn": [
                "Immediate, dramatic relief of bowel obstruction, releasing trapped gas and stool on the table.",
                "Avoids emergency open surgery and avoids having a temporary or permanent external colostomy stool bag.",
                "Allows elective, well-planned, and safer single-stage surgery later after patient stabilizes."
            ],
            "benefitsHi": [
                "पेट के अत्यधिक तनाव और आंत फटने के खतरे से तुरंत जान की रक्षा।",
                "पेट पर मल का बैग (Colostomy) लगाने के आपातकालीन और कष्टदायक ऑपरेशन से 100% बचाव।",
                "मरीज की हालत सुधरने के बाद बाद में एक ही बार में शांतिपूर्वक सुरक्षित ऑपरेशन संभव होना।"
            ],
            "specificRisksEn": [
                "Cramping, rectal fullness (tenesmus), or mild rectal bleeding for 1-2 days (10-20%).",
                "Bowel wall tear or perforation requiring emergency surgery (3-5%).",
                "Stent slipping out of position (migration) (2-4%).",
                "Stent re-blocking with hard stool or tumor growth over time (5-10%).",
                "Temporary shivering or fever spike after bowel decompression (3-5%)."
            ],
            "specificRisksHi": [
                "प्रक्रिया के बाद 1-2 दिन पेट में मरोड़ या मलद्वार में भारीपन (10-20%)।",
                "आंत में सुराख या फटने का गंभीर जोखिम जिसके लिए तुरंत ऑपरेशन करना पड़ सकता है (3-5%)।",
                "जाली का अपनी जगह से खिसक जाना (2-4%)।",
                "कड़े मल या दोबारा कैंसर बढ़ने से जाली का बंद होना (5-10%)।",
                "गंदगी निकलने के बाद हल्का बुखार या कंपकंपी (3-5%)।"
            ],
            "alternativesEn": "Emergency exploratory laparotomy with colostomy (Hartmann's procedure / stool bag on belly), loop colostomy, or percutaneous cecostomy.",
            "alternativesHi": "पेट का बड़ा आपातकालीन ऑपरेशन करके पेट पर मल का बैग लगाना (Colostomy), या सीकोस्टॉमी।",
            "sedationTypeEn": "Conscious sedation with local rectal lubricant anesthesia.",
            "sedationTypeHi": "शामक दवा (Conscious Sedation) और स्थानीय सुन्न करने वाली जेली।"
        }
    },
    {
        "id": "balloon-dilatation-colonic-anastomotic-strictures",
        "name": "Fluoroscopy-Guided Balloon Dilation of Colonic Anastomotic Strictures",
        "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
        "code": "2849-NV102",
        "rghsCode": "693 / 41",
        "icd10": "K91.89 (Other postprocedural complications of digestive system) / K62.4 (Stenosis of anus and rectum)",
        "indications": [
            "Benign colonic anastomotic strictures following low anterior resection, colectomy, or reversal of Hartmann's procedure",
            "Symptomatic narrowing producing constipation, tenesmus, pencil-thin stools, and painful defecation",
            "Radiation-induced benign rectosigmoid stenosis following pelvic radiotherapy",
            "Preservation of natural transanal defecation and avoidance of permanent colostomy"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
            "Contrast enema / sigmoidoscopy confirming benign nature (no tumor recurrence) and measuring distance from anal verge",
            "Gentle phosphate or saline enema to clear lower rectum",
            "High-pressure colonic / esophageal dilation balloons (15 to 20 mm diameter) prepared"
        ],
        "hardware": [
            { "category": "Dilatation Balloon", "name": "Colonic / Enteral High-Pressure Balloon (CRE / Rigiflex)", "spec": "15-18 mm or 18-20 mm x 5.5 cm non-compliant balloon with radiopaque markers", "standardStore": "Central IR Consignment Store" },
            { "category": "Inflation Manometer", "name": "High-Pressure Inflation Device", "spec": "30 atm gauge inflation syringe", "standardStore": "Cath Lab Main Store" },
            { "category": "Guidewire", "name": "0.035 Super Stiff Amplatz Wire", "spec": "145-260 cm heavy-duty wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Catheter", "name": "5F Kumpe / Multipurpose Catheter", "spec": "100 cm selective catheter", "standardStore": "Cath Lab Main Store" },
            { "category": "Contrast Medium", "name": "Water-Soluble Iodinated Contrast", "spec": "Telebrix Gastro / Omnipaque", "standardStore": "Cath Lab Main Store" }
        ],
        "techniqueSteps": [
            "Position patient in left lateral or prone oblique posture; administer IV analgesia and conscious sedation.",
            "Introduce 5F catheter and 0.035 Glidewire transanally under fluoroscopic roadmapping to the anastomotic narrowing.",
            "Inject 10-15 mL water-soluble contrast to delineate stricture length and caliber; steer wire across the narrow waist into dilated proximal colon.",
            "Exchange for 0.035 Amplatz super-stiff wire.",
            "Advance uninflated colonic dilation balloon over wire, centering radio-opaque markers directly across the anastomotic scar.",
            "Inflate balloon with 50% contrast-saline mixture; observe progressive waist abolition under fluoroscopy; hold inflation for 60 to 120 seconds.",
            "Perform gentle sequential step-up expansion (e.g. 15 mm, then 16.5 mm, up to 18 mm).",
            "Deflate balloon; perform completion contrast enema under fluoroscopy to confirm wide opening of the stoma and rule out transmural perforation; observe for 2-4 hours."
        ],
        "complications": [
            "Colonic wall perforation (1-2%, requires immediate surgical or endoscopic intervention)",
            "Rectal bleeding / minor mucosal laceration (2-4%)",
            "Pelvic pain and tenesmus (10-15%)",
            "Stricture recurrence requiring repeat dilatation sessions (15-25%)",
            "Transient vasovagal reaction during inflation (1-3%)"
        ],
        "maayTariffInr": 8000,
        "vendorContacts": [
            "Boston Scientific India (+91 98290 44444)",
            "Cook Medical India (+91 98292 34567)"
        ],
        "consent": {
            "nameHi": "बड़ी आंत के ऑपरेशन के जोड़ की सिकुड़न को गुब्बारे से चौड़ा करना (कोलोनिक बैलून डाइलेटेशन)",
            "indicationEn": "Fluoroscopy-guided balloon dilation of a narrowed surgical scar (anastomotic stricture) in the colon or rectum to restore normal bowel movements.",
            "indicationHi": "बड़ी आंत के पूर्व ऑपरेशन के जोड़ (टांकों वाली जगह) पर आई सिकुड़न को एक्स-रे देखकर विशेष गुब्बारे से फुलाकर चौड़ा करना ताकि मरीज को शौच में दर्द और रुकावट से राहत मिल सके।",
            "descriptionEn": "Following bowel surgery, healing can sometimes form a tight ring of scar tissue that makes passing stool painful and difficult. Under live X-ray guidance and sedation, a soft wire is guided through the narrow scar from the rectum. A specialized balloon is inflated across the narrowing, gently stretching the scar tissue open to restore natural bowel passage.",
            "descriptionHi": "आंत के ऑपरेशन के बाद कई बार टांकों वाली जगह पर सिकुड़न आ जाती है जिससे शौच पतली और अत्यधिक दर्द के साथ आती है। मलद्वार के रास्ते एक्स-रे स्क्रीन पर देखकर सिकुड़न के पार एक बारीक तार ले जाया जाता है। उस पर एक विशेष गुब्बारा चढ़ाकर फुलाया जाता है जिससे सिकुड़ा हुआ जोड़ चौड़ा हो जाता है और शौच का रास्ता सामान्य हो जाता है।",
            "benefitsEn": [
                "Restores normal, painless bowel movements and prevents progressive bowel blockage.",
                "Minimally invasive day-care procedure avoiding re-operation or colostomy bag.",
                "High success rate in restoring natural transanal defecation."
            ],
            "benefitsHi": [
                "शौच की रुकावट, दर्द और पेट के भारीपन से तुरंत प्राकृतिक राहत।",
                "दोबारा बड़ा ऑपरेशन करवाने या पेट पर मल का बैग लगाने से पूरा बचाव।",
                "बिना किसी चीरे के दिन के दिन होने वाला अत्यधिक सफल उपचार।"
            ],
            "specificRisksEn": [
                "Pelvic cramping or rectal fullness for 1-2 days (10-15%).",
                "Minor spotting of blood in the stool (2-4%).",
                "Risk of tearing or hole in the bowel wall requiring surgery (1-2%).",
                "Stricture re-tightening over time requiring a second balloon stretch (15-25%).",
                "Dizziness during balloon inflation (1-3%)."
            ],
            "specificRisksHi": [
                "प्रक्रिया के बाद 1-2 दिन पेट में मरोड़ या मलद्वार में हल्का भारीपन (10-15%)।",
                "मल के साथ हल्का खून का दाग आना (2-4%)।",
                "जोड़ पर चीरा या सुराख होने का दुर्लभ जोखिम जिसके लिए ऑपरेशन की जरूरत पड़ सकती है (1-2%)।",
                "कुछ महीनों बाद सिकुड़न दोबारा आने पर दोबारा गुब्बारा फुलाने की आवश्यकता (15-25%)।",
                "गुब्बारा फुलाते समय हल्का चक्कर आना (1-3%)।"
            ],
            "alternativesEn": "Re-operation with surgical stricturoplasty or re-anastomosis under general anesthesia, permanent colostomy, or repeated manual finger/bougie dilation.",
            "alternativesHi": "बेहोश करके दोबारा बड़ा ऑपरेशन करना, पेट पर मल का बैग लगाना (Colostomy), या उंगली से फैलाना।",
            "sedationTypeEn": "Conscious sedation with local rectal anesthetic jelly.",
            "sedationTypeHi": "शामक दवा (Conscious Sedation) और स्थानीय सुन्न करने वाली जेली।"
        }
    },
    {
        "id": "percutaneous-cecostomy-colonic-pseudo-obstruction",
        "name": "Percutaneous Cecostomy for Colonic Pseudo-Obstruction (Ogilvie Syndrome)",
        "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
        "code": "2849-NV103",
        "rghsCode": "693 / 41",
        "icd10": "K59.89 (Other specified functional intestinal disorders) / K56.69 (Other intestinal obstruction)",
        "indications": [
            "Acute massive colonic pseudo-obstruction (Ogilvie syndrome) with cecal diameter > 9-11 cm refractory to Neostigmine and colonoscopic decompression",
            "Impending ischemic cecal perforation in critically ill, postoperative, or ICU patients",
            "Severe neurogenic constipation / fecal incontinence in pediatric or quadriplegic patients requiring antegrade continence enema (Malone ACE / Cecostomy)",
            "Decompression of large bowel obstruction in patients unfit for emergency laparotomy"
        ],
        "preOpCriteria": [
            "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
            "CT abdomen/pelvis or plain abdominal radiograph demonstrating marked cecal distension (>9 cm) without mechanical obstructing mass",
            "Real-time ultrasound and fluoroscopy confirming anterior cecal position abutting right lower quadrant abdominal wall without intervening small bowel",
            "Broad-spectrum IV antibiotic coverage ongoing"
        ],
        "hardware": [
            { "category": "Cecostomy Kit", "name": "Percutaneous Cecostomy Tube Kit (10F - 14F Retention Catheter)", "spec": "10F-14F silicone balloon or locking pigtail catheter with retention bolster", "standardStore": "Central IR Consignment Store" },
            { "category": "T-Fasteners", "name": "Cecopexy T-Fasteners Set", "spec": "Kit containing 3-4 T-fastener needles with locking retention buttons", "standardStore": "Central IR Consignment Store" },
            { "category": "Access Needle", "name": "18G Chiba / Trocar Needle", "spec": "18G x 10 cm echogenic tip needle", "standardStore": "Cath Lab Main Store" },
            { "category": "Guidewire", "name": "0.035 Stiff Rosen / Amplatz Wire", "spec": "145 cm J-tip wire", "standardStore": "Cath Lab Main Store" },
            { "category": "Contrast Medium", "name": "Water-Soluble Non-Ionic Contrast", "spec": "50 mL Telebrix / Omnipaque", "standardStore": "Cath Lab Main Store" }
        ],
        "techniqueSteps": [
            "Position patient supine; scan right lower quadrant with ultrasound to identify maximally distended cecal anterior wall and verify absence of epigastric vessels.",
            "Sterilize right iliac fossa skin; infiltrate 15-20 mL 2% Lignocaine down to anterior cecal wall under ultrasound.",
            "Deploy 3 or 4 T-fasteners in a triangular or square configuration, firing into cecal lumen under ultrasound/fluoroscopic verification and locking sutures to anchor cecum firmly to abdominal wall (cecopexy).",
            "Puncture center of cecopexy zone with 18G needle; confirm free escape of trapped colonic gas and fecal fluid.",
            "Inject 10 mL water-soluble contrast to outline cecal mucosal haustra; advance 0.035 stiff wire and curl inside ascending colon.",
            "Dilate tract over wire with serial 8F to 12F dilators.",
            "Advance 10F-14F locking pigtail or balloon retention catheter over wire into cecum; lock loop or inflate retention balloon with 3-5 mL sterile water.",
            "Connect catheter to bedside drainage bag for immediate continuous decompression of trapped gas and liquid stool; apply sterile dressing."
        ],
        "complications": [
            "Fecal peritonitis / peritoneal leakage (<1% when cecopexy T-fasteners used)",
            "Peristomal skin excoriation from fecal drainage (5-10%)",
            "Abdominal wall cellulitis / wound infection (3-5%)",
            "Catheter blockage by solid feces (5-10%, managed with saline irrigations)",
            "Premature catheter dislodgement (2-4%)"
        ],
        "maayTariffInr": 9500,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Avanos Medical India (+91 98290 33333)"
        ],
        "consent": {
            "nameHi": "परक्यूटेनियस सीकोस्टॉमी (बड़ी आंत में सीधी नली डालकर जानलेवा गैस व फुलाव कम करना)",
            "indicationEn": "Percutaneous catheter placement into the cecum (cecostomy) for urgent decompression of severe colonic pseudo-obstruction (Ogilvie syndrome).",
            "indicationHi": "दवाइयों के बाद भी बड़ी आंत के अत्यधिक फूल जाने (ओगिल्वी सिंड्रोम) से आंत फटने के खतरे को टालने हेतु पेट के दाएं निचले हिस्से से बड़ी आंत में नली (सीकोस्टॉमी) डालना।",
            "descriptionEn": "When severe medical illness causes the large bowel to blow up like a balloon without a mechanical blockage, it can burst. Under ultrasound and live X-ray guidance, the swollen intestine (cecum) in the right lower belly is safely attached to the abdominal wall using tiny internal anchor sutures (cecopexy). A soft drainage tube is placed directly into the intestine, allowing trapped gas and liquid to immediately vent out into a bag.",
            "descriptionHi": "गंभीर बीमारी या ऑपरेशन के बाद जब बड़ी आंत गुब्बारे की तरह फूल जाती है और फटने की कगार पर पहुंच जाती है, तो सोनोग्राफी और एक्स-रे देखकर पेट के दाएं निचले हिस्से को सुन्न किया जाता है। आंत को छोटे टांकों से पेट की दीवार से सुरक्षित जोड़कर, एक पतली नली सीधे बड़ी आंत में डाल दी जाती है। इससे अंदर भरी हुई गैस और गंदा पानी तुरंत बाहर निकल जाता है और आंत फटने से बच जाती है।",
            "benefitsEn": [
                "Life-saving emergency decompression preventing catastrophic cecal rupture and fecal peritonitis.",
                "Avoids emergency open laparotomy, bowel resection, and permanent stoma bags in critically ill ICU patients.",
                "Can also be used for antegrade bowel washouts in chronic severe neurogenic constipation."
            ],
            "benefitsHi": [
                "बड़ी आंत को फटने से बचाकर मरीज की जान की तुरंत रक्षा।",
                "आईसीयू के अत्यंत नाजुक मरीजों में पेट चीरने के जानलेवा ऑपरेशन से 100% बचाव।",
                "भविष्य में आंतों की सफाई के लिए दवा या पानी डालने के रूप में भी उपयोगी।"
            ],
            "specificRisksEn": [
                "Skin irritation or redness from fecal leakage around the tube (5-10%).",
                "Tube blockage with thick stool requiring gentle saline flushes (5-10%).",
                "Wound infection around the skin puncture (3-5%).",
                "Accidental dislodgement of the catheter requiring replacement (2-4%).",
                "Extremely rare leakage into the belly cavity (<1%)."
            ],
            "specificRisksHi": [
                "नली के किनारे से मल रिसने पर त्वचा में लाली या जलन (5-10%)।",
                "कड़े मल से नली का बंद होना जिसे सलाइन से धोना पड़ता है (5-10%)।",
                "नली वाली जगह पर हल्का संक्रमण (3-5%)।",
                "नली का खिसक जाना (2-4%)।",
                "पेट के अंदर गंदगी रिसने का अत्यंत दुर्लभ खतरा (<1%)।"
            ],
            "alternativesEn": "Emergency open surgical cecostomy or right hemicolectomy under general anesthesia, repeated colonoscopic gas suctioning, or medical therapy with Neostigmine.",
            "alternativesHi": "बेहोश करके पेट का बड़ा ऑपरेशन (Laparotomy/Colectomy), दूरबीन (Colonoscopy) से हवा खींचना, या निओस्टिग्माइन इंजेक्शन।",
            "sedationTypeEn": "Local anesthesia with monitored ICU conscious sedation.",
            "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आईसीयू में गहन निगरानी वाली शामक दवा।"
        }
    },
    {
        "id": "fluoroscopic-nasojejunal-feeding-tube-placement",
        "name": "Fluoroscopic Nasojejunal (NJ) Feeding Tube Placement with Steerable Guidewire",
        "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
        "code": "2849-NV104",
        "rghsCode": "693 / 41",
        "icd10": "Z93.4 (Other artificial openings of gastrointestinal tract) / K85.90 (Acute pancreatitis)",
        "indications": [
            "Severe acute necrotizing pancreatitis requiring early post-ligament of Treitz enteral feeding to prevent gut bacterial translocation",
            "Severe gastroparesis, gastric atony, or recurrent vomiting where gastric feeding is contraindicated",
            "High aspiration risk in critically ill, intubated, or neurologically impaired ICU patients",
            "Short-to-intermediate term enteral nutritional support (2-6 weeks) avoiding surgical feeding tubes"
        ],
        "preOpCriteria": [
            "Coagulation: Coagulopathy is not a contraindication (minimal bleeding risk); Platelets >= 30,000/uL",
            "Nasal patency verified; topical nasal vasoconstrictor/decongestant (Xylometazoline drops) administered",
            "Fasting 4 hours; patient upright or semi-recumbent on fluoroscopy table",
            "Enteral feeding tube (8F - 12F x 120-140 cm with tungsten-weighted tip) ready"
        ],
        "hardware": [
            { "category": "Enteral Feeding Tube", "name": "Nasojejunal (NJ) Feeding Tube (8F - 12F)", "spec": "8F-12F x 130-145 cm polyurethane radiopaque feeding tube with weighted tip and internal stylet", "standardStore": "Central IR Consignment Store" },
            { "category": "Steerable Guidewire", "name": "0.035 Terumo Hydrophilic Glidewire Angled", "spec": "180-260 cm angled hydrophilic guidewire", "standardStore": "Cath Lab Main Store" },
            { "category": "Directional Catheter", "name": "5F Kumpe / Cobra Catheter", "spec": "100 cm selective hydrophilic catheter", "standardStore": "Cath Lab Main Store" },
            { "category": "Topical Anesthesia", "name": "2% Lignocaine Jelly & Xylometazoline Drops", "spec": "Sterile lubricating anesthetic gel", "standardStore": "DDC-14 Central" },
            { "category": "Contrast Medium", "name": "Water-Soluble Non-Ionic Contrast", "spec": "20 mL Telebrix / Omnipaque", "standardStore": "Cath Lab Main Store" }
        ],
        "techniqueSteps": [
            "Instill 2-3 drops of Xylometazoline and 5 mL 2% Lignocaine jelly into selected patent nostril.",
            "Introduce 5F directional catheter and 0.035 angled Terumo Glidewire through the nose into pharynx and esophagus under fluoroscopic visualization.",
            "Advance catheter into stomach; gently form a loop along the greater curvature directed toward the pyloric antrum.",
            "Under fluoroscopy, steer the angled Glidewire across the pyloric sphincter into duodenal bulb, sweep around duodenal C-loop, and cross the ligament of Treitz into proximal jejunum.",
            "Confirm jejunal position: inject 5 mL contrast to demonstrate characteristic jejunal feathery mucosal fold pattern.",
            "Exchange the 5F catheter over a 260 cm stiff/exchange wire, or directly slide the 8F-12F weighted NJ feeding tube over the stiff wire into the jejunum.",
            "Verify the NJ tube tip lies at least 20-30 cm past the ligament of Treitz to prevent retrograde gastric reflux.",
            "Carefully remove guidewire while holding forward counter-pressure on the tube; inject 10 mL water-soluble contrast to document free flow into jejunum; secure tube to nose with hypoallergenic tape; clear for enteral feeding immediately."
        ],
        "complications": [
            "Retrograde curling / dislodgement of the tube into stomach during vomiting (5-10%)",
            "Tube clogging by formula or medication pellets (5-10%)",
            "Minor epistaxis (nasal bleeding) (2-4%)",
            "Nasal alar necrosis from tight taping (1-2%)",
            "Transient coughing / pharyngeal gagging (10-15%)"
        ],
        "maayTariffInr": 4000,
        "vendorContacts": [
            "Cook Medical India (+91 98292 34567)",
            "Avanos Medical India (+91 98290 33333)"
        ],
        "consent": {
            "nameHi": "फ्लोरोस्कोपी-निर्देशित नेसोजेजुनल (NJ) खाने की नली डालना (नाक से छोटी आंत तक)",
            "indicationEn": "Fluoroscopy-guided placement of a feeding tube through the nose directly into the small intestine (jejunum) for pancreatitis or stomach paralysis.",
            "indicationHi": "तीव्र अग्न्याशय की सूजन (एक्यूट पैंक्रियाटाइटिस) या पेट के काम न करने पर, एक्स-रे देखकर नाक के रास्ते सीधे छोटी आंत में खाने की नली (NJ Tube) पहुंचाना।",
            "descriptionEn": "Under live X-ray fluoroscopy guidance and nasal numbing gel, a thin, soft steerable wire and feeding tube are guided gently through the nose, down the food pipe, through the stomach, and steered past the pancreas directly into the small intestine (jejunum). This allows vital liquid nutrition to be absorbed without stimulating the inflamed pancreas.",
            "descriptionHi": "नाक में सुन्न करने वाली जेली डालकर, एक्स-रे स्क्रीन पर देखते हुए एक बारीक लचीला तार नाक के रास्ते गले, आमाशय और पैंक्रियाज को पार करते हुए सीधे छोटी आंत (जेजुनम) में ले जाया जाता है। तार के ऊपर से खाने की मुलायम नली वहां पहुंचा दी जाती है। इससे मरीज को बिना पैंक्रियाज को नुकसान पहुंचाए तुरंत पोषण मिलना शुरू हो जाता है।",
            "benefitsEn": [
                "Provides vital early nutrition in severe acute pancreatitis without triggering pancreatic enzyme release.",
                "Bypasses the paralyzed stomach, completely preventing vomiting and aspiration into the lungs.",
                "Quick, non-surgical bedside or fluoroscopy procedure without any cuts or wounds."
            ],
            "benefitsHi": [
                "पैंक्रियाज की गंभीर बीमारी में बिना दर्द बढ़ाए तुरंत जरूरी पोषण देना।",
                "रुके हुए पेट को पार करके खाना सीधे आंत में जाने से उल्टी और फेफड़ों में खाना जाने से 100% बचाव।",
                "बिना किसी चीरे या ऑपरेशन के मात्र 15-20 मिनट में सुरक्षित तरीके से डल जाना।"
            ],
            "specificRisksEn": [
                "Tube slipping or vomiting back into the stomach, requiring repositioning (5-10%).",
                "Minor nosebleed from tube insertion (2-4%).",
                "Tube clogging with thick food or medicine requiring water flush (5-10%).",
                "Gagging, coughing, or throat irritation during insertion (10-15%).",
                "Nasal skin irritation from adhesive tape (1-2%)."
            ],
            "specificRisksHi": [
                "खांसी या उल्टी से नली का आंत से खिसक कर वापस पेट में आ जाना (5-10%)।",
                "नाक से हल्का खून रिसना (2-4%)।",
                "दवाइयों या गाढ़े खाने से नली का बंद होना (5-10%)।",
                "नली डालते समय गले में हल्की उल्टी या खराश जैसा अहसास (10-15%)।",
                "नाक पर चिपकाई गई पट्टी से त्वचा में हल्की लाली (1-2%)।"
            ],
            "alternativesEn": "Total parenteral nutrition (TPN) through a central neck vein drip, surgical or endoscopic jejunostomy tube, or standard nasogastric tube (if stomach tolerates).",
            "alternativesHi": "गर्दन की नस में बड़ी ड्रिप लगाकर पोषण देना (TPN), पेट का ऑपरेशन करके नली डालना, या नाक में सामान्य नली।",
            "sedationTypeEn": "Topical nasal and pharyngeal local anesthesia.",
            "sedationTypeHi": "नाक और गले में स्थानीय सुन्न करने वाली जेली व स्प्रे।"
        }
    }
]
