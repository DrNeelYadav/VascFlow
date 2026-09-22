/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 * 
 * Statutory Specialized Bilingual (Hindi & English) Informed Consent Templates
 * and Clinical Preparation Criteria for Interventional Oncology & Hepatobiliary Interventions.
 * Aligned with NMC Guidelines, CIRSE, SIR Standards, and the Supreme Court Samira Kohli Precedent.
 */

import { ProcedureConsentTemplate } from '../consentData';

export interface ProcedureClinicalPreparation {
  procedureId: string;
  procedureName: string;
  preOpCriteriaEn: string[];
  preOpCriteriaHi: string[];
  fastingHours: number;
  hydrationProtocolEn: string;
  hydrationProtocolHi: string;
  bloodProductsTargetEn: string;
  bloodProductsTargetHi: string;
  antibioticProphylaxisEn: string;
  antibioticProphylaxisHi: string;
  specialPrecautionsEn: string[];
  specialPrecautionsHi: string[];
}

export const ONCOLOGY_AND_HBP_CONSENT_TEMPLATES: Record<string, ProcedureConsentTemplate> = {
  "ctace-lipiodol-doxorubicin": {
    "id": "ctace-lipiodol-doxorubicin",
    "category": "Interventional Oncology",
    "nameEn": "Conventional Transarterial Chemoembolization (cTACE) with Lipiodol and Doxorubicin",
    "nameHi": "कन्वेंशनल ट्रांसकैथेटर आर्टीरियल कीमोएम्बोलाइजेशन (सी-टीएसीई / लिपिओडोल एवं डॉक्सोरूबिसिन द्वारा लिवर कैंसर नस बंदी)",
    "indicationEn": "Intermediate-stage hepatocellular carcinoma (BCLC-B), unresectable solitary HCC > 3 cm, or bridging/downstaging to liver transplantation.",
    "indicationHi": "लिवर का प्राथमिक कैंसर (हेपेटोसेलुलर कार्सिनोमा - HCC), बिना ऑपरेशन वाली 3 सेमी से बड़ी गांठ, अथवा लिवर ट्रांसप्लांट से पूर्व गांठ को नियंत्रित करने हेतु।",
    "descriptionEn": "Under local anesthesia and real-time fluoroscopic guidance, a microcatheter is navigated through the femoral or radial artery into tumor-feeding hepatic arterial branches. An emulsion of chemotherapy (Doxorubicin) and Lipiodol is injected directly into the tumor, followed by absorbable gelatin sponge (Gelfoam) particles to block tumor blood flow and induce ischemic necrosis.",
    "descriptionHi": "जांघ या कलाई की धमनी में सुन्न करने का इंजेक्शन देकर बारीक कैथेटर को एक्स-रे की निगरानी में सीधे लिवर की गांठ को खून पहुंचाने वाली नसों में पहुंचाया जाता है। वहां कैंसर-रोधी दवा (डॉक्सोरूबिसिन) और लिपिओडोल का मिश्रण सीधे गांठ में डाला जाता है तथा जेलफोम के कणों से नस को बंद कर दिया जाता है ताकि कैंसर की खुराक रुक सके और गांठ नष्ट हो जाए।",
    "benefitsEn": [
      "Direct delivery of high-dose chemotherapy into the tumor with minimal systemic toxicity.",
      "Arterial embolization starves the tumor, resulting in tumor necrosis and shrinkage.",
      "Prolongs survival and acts as a bridge to surgical resection or liver transplantation."
    ],
    "benefitsHi": [
      "कीमोथेरेपी की अधिकतम मात्रा सीधे गांठ में पहुंचती है, जिससे पूरे शरीर पर दुष्प्रभाव (जैसे बाल झड़ना या गंभीर कमजोरी) नहीं होता।",
      "गांठ को मिलने वाला खून बंद होने से कैंसर की गांठ सूखती और सिकुड़ती है।",
      "मरीज की जीवन प्रत्याशा बढ़ती है तथा लिवर ट्रांसप्लांट या ऑपरेशन का अवसर मिल सकता है।"
    ],
    "specificRisksEn": [
      "Post-Embolization Syndrome (PES): Right upper quadrant abdominal pain, fever, nausea, and vomiting (60-80%, lasts 24-72 hours).",
      "Transient hepatic decompensation, transaminitis, jaundice, or ascites.",
      "Liver abscess or ischemic biloma requiring antibiotics or percutaneous drainage.",
      "Non-target embolization to gallbladder (acute ischemic cholecystitis), stomach, or pancreas.",
      "Contrast-Induced Nephropathy (CIN) and femoral access hematoma."
    ],
    "specificRisksHi": [
      "पोस्ट-एम्बोलाइजेशन सिंड्रोम: 1 से 3 दिन तक पेट के ऊपरी हिस्से में दर्द, बुखार, उल्टी व जी मिचलाना (60-80% मरीजों में सामान्य)।",
      "लिवर के कार्य में अस्थायी गिरावट: पीलिया बढ़ना, पेट में पानी आना या लिवर एंजाइम बढ़ना।",
      "लिवर में मवाद/फोड़ा (Abscess) या पित्त रिसाव (Biloma) होना, जिसके लिए नली डालने की जरूरत पड़ सकती है।",
      "गलती से दवा का पित्त की थैली (पित्ताशय) या आमाशय में जाना जिससे वहां सूजन हो सकती है।",
      "कंट्रास्ट डाई से गुर्दों पर असर तथा जांघ के पंक्चर स्थल पर खून का थक्का (हेमेटोमा)।"
    ],
    "alternativesEn": "Drug-eluting bead TACE (DEB-TACE), Y-90 radioembolization (TARE), surgical resection, liver transplantation, systemic targeted therapy/immunotherapy (Atezolizumab + Bevacizumab, Lenvatinib, Sorafenib), or palliative supportive care.",
    "alternativesHi": "डीईबी-टीएसीई (DEB-TACE), वाई-90 रेडियोएम्बोलाइजेशन, लिवर का ऑपरेशन, लिवर ट्रांसप्लांट, इम्यूनोथेरेपी/टारगेटेड दवाइयां, अथवा केवल लक्षण निवारक देखभाल।",
    "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and antiemetic premedication.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ नस द्वारा दर्द व उल्टी रोकने वाली शामक दवाइयां (Conscious Sedation)।"
  },
  "deb-tace-dcbeads-lifepearl": {
    "id": "deb-tace-dcbeads-lifepearl",
    "category": "Interventional Oncology",
    "nameEn": "Drug-Eluting Bead TACE (DEB-TACE) with DC Beads / LifePearl",
    "nameHi": "ड्रग-एल्यूटिंग बीड टीएसीई (DEB-TACE - सूक्ष्म मनकों द्वारा धीमी गति से कीमोथेरेपी रिलीज एवं नस बंदी)",
    "indicationEn": "Intermediate-stage hepatocellular carcinoma (BCLC-B) where low systemic peak anthracycline levels and sustained intratumoral drug delivery are required.",
    "indicationHi": "लिवर का कैंसर (HCC) जिसमें कीमोथेरेपी का दुष्प्रभाव पूरे शरीर पर कम से कम रखने और लंबे समय तक गांठ में दवा छोड़े रखने की आवश्यकता हो।",
    "descriptionEn": "Under fluoroscopic guidance, a microcatheter is advanced into the arterial feeders of the tumor. Precision-calibrated microspheres (70-150 um or 100-300 um DC Bead/LifePearl) pre-loaded with Doxorubicin are slowly infused to provide simultaneous embolization and sustained local chemotherapy release over several weeks.",
    "descriptionHi": "जांघ की नस से माइक्रो-कैथेटर द्वारा लिवर की रसोली को खून देने वाली धमनियों में पहुंचा जाता है। वहां कैंसर-रोधी दवा से भरे विशेष सूक्ष्म मनके (70-150 माइक्रोन) धीरे-धीरे छोड़े जाते हैं, जो नस को बंद करने के साथ-साथ हफ्तों तक सीधे गांठ में दवा छोड़ते रहते हैं।",
    "benefitsEn": [
      "Significantly lower systemic doxorubicin blood levels compared to conventional TACE, reducing systemic toxicity.",
      "Higher intratumoral drug concentration with sustained local pharmacokinetics.",
      "Standardized and reproducible bead sizing and embolization endpoint."
    ],
    "benefitsHi": [
      "कन्वेंशनल टीएसीई की तुलना में खून में कीमोथेरेपी का फैलाव बहुत कम, जिससे शरीर पर दुष्प्रभाव कम होता है।",
      "गांठ के अंदर दवा का उच्च स्तर हफ्तों तक बना रहता है, जिससे कैंसर कोशिकाएं नष्ट होती हैं।",
      "सटीक आकार के मनकों से गांठ की नसों की सटीक बंदी।"
    ],
    "specificRisksEn": [
      "Post-embolization syndrome (fever, pain, nausea in 40-60%).",
      "Microvascular biliary ischemia leading to biloma, biliary stricture, or liver abscess.",
      "Hepatic artery spasm or dissection during microcatheterization.",
      "Non-target bead reflux into cystic or gastrointestinal branches.",
      "Transient elevation of liver transaminases (AST/ALT)."
    ],
    "specificRisksHi": [
      "पोस्ट-एम्बोलाइजेशन सिंड्रोम: हल्का बुखार, पेट दर्द व जी मिचलाना (40-60% मामलों में)।",
      "पित्त की बारीक नलियों में रक्त प्रवाह रुकने से पित्त रिसाव (Biloma) या सिकुड़न होना।",
      "कैथेटर डालने के दौरान लिवर की नस में खिंचाव या आंतरिक परत छिलना।",
      "दवा के मनकों का पित्त की थैली या पेट की अन्य नसों में बह जाना।",
      "प्रक्रिया के बाद लिवर एंजाइम (SGOT/SGPT) में अस्थायी वृद्धि।"
    ],
    "alternativesEn": "Conventional Lipiodol TACE, Y-90 Radioembolization (TARE), thermal ablation (MWA/RFA), systemic immunotherapy/TKI, or surgical resection.",
    "alternativesHi": "कन्वेंशनल टीएसीई, वाई-90 रेडियोएम्बोलाइजेशन, सुई द्वारा गांठ जलाना (MWA/RFA), इम्यूनोथेरेपी, अथवा सर्जरी।",
    "sedationTypeEn": "Local anesthesia at vascular access site with intravenous conscious sedation.",
    "sedationTypeHi": "जांघ में स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक व दर्द निवारक दवा।"
  },
  "btace-balloon-occluded-tace": {
    "id": "btace-balloon-occluded-tace",
    "category": "Interventional Oncology",
    "nameEn": "Balloon-Occluded Transarterial Chemoembolization (B-TACE)",
    "nameHi": "बैलून-ओक्लूडेड ट्रांसकैथेटर आर्टीरियल कीमोएम्बोलाइजेशन (बी-टीएसीई / माइक्रो-बैलून फुलाकर लिवर कैंसर में दबाव युक्त कीमोथेरेपी)",
    "indicationEn": "Refractory or recurrent hepatocellular carcinoma, hypovascular HCC, tumors with arterial-portal shunting, or tumors where pressure-directed emulsion delivery is needed.",
    "indicationHi": "लिवर का कैंसर जो सामान्य टीएसीई से ठीक न हुआ हो, कम नसों वाली गांठें, अथवा जहां बैलून फुलाकर दवा को दबाव के साथ गांठ की गहराई तक पहुंचाना जरूरी हो।",
    "descriptionEn": "A specialized microballoon catheter is navigated into the feeding segmental artery and inflated to temporarily block arterial inflow. Under balloon occlusion, hemodynamic pressure drops distally, allowing dense and deep forced infusion of Lipiodol-chemotherapy emulsion into the tumor microvasculature without reflux into non-target vessels.",
    "descriptionHi": "एक विशेष अति-बारीक बैलून कैथेटर को रसोली की नस में ले जाकर फुलाया जाता है जिससे नस का प्रवाह अस्थायी रूप से रुक जाता है। फिर बैलून के रास्ते दबाव के साथ कीमोथेरेपी और लिपिओडोल सीधे गांठ के अंदर गहराई तक छोड़ी जाती है, जिससे दवा बाहर नहीं छलकती और गांठ पूरी तरह भर जाती है।",
    "benefitsEn": [
      "Forced penetration of chemoembolic emulsion into tumor sinusoids and daughter nodules.",
      "Complete prevention of proximal embolic reflux into non-target arteries.",
      "Enhanced tumor necrosis rate in tumors refractory to conventional cTACE."
    ],
    "benefitsHi": [
      "दबाव के कारण दवा गांठ की बारीक से बारीक शाखाओं और छोटी गांठों में गहराई तक समा जाती है।",
      "दवा का सामान्य अंगों की नसों में उल्टी दिशा में बहने का जोखिम पूरी तरह खत्म होता है।",
      "कठिन और बार-बार होने वाले ट्यूमर में कैंसर नष्ट होने की दर बहुत अधिक होती है।"
    ],
    "specificRisksEn": [
      "Arterial dissection or spasm at balloon anchoring site.",
      "Microballoon rupture during high-pressure inflation.",
      "Post-embolization syndrome (RUQ pain, fever, nausea).",
      "Focal ischemic cholangiopathy or biloma.",
      "Temporary worsening of liver biochemistry."
    ],
    "specificRisksHi": [
      "बैलून फुलाने के स्थान पर नस की आंतरिक परत छिलना या नस में खिंचाव (Spasm)।",
      "बैलून का अधिक दबाव से फट जाना।",
      "पोस्ट-एम्बोलाइजेशन सिंड्रोम: पेट के ऊपरी हिस्से में तेज दर्द, बुखार और उल्टी।",
      "पित्त की नली में खून की कमी से छाला या पित्त रिसाव (Biloma)।",
      "लिवर एंजाइम्स में अस्थायी उछाल।"
    ],
    "alternativesEn": "Conventional TACE, DEB-TACE, Y-90 Radioembolization (TARE), Hepatic arterial infusion chemotherapy (HAIC), systemic therapy, or surgical options.",
    "alternativesHi": "कन्वेंशनल टीएसीई, डीईबी-टीएसीई, वाई-90 रेडियोएम्बोलाइजेशन, एचएआईसी (HAIC), अथवा सिस्टेमिक दवाइयां।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation and opioid analgesia for balloon occlusion discomfort.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) तथा बैलून फुलाते समय होने वाले दर्द से राहत हेतु नस द्वारा दर्द निवारक व शामक दवा।"
  },
  "tare-sirt-mapping-tc99m-maa": {
    "id": "tare-sirt-mapping-tc99m-maa",
    "category": "Interventional Oncology",
    "nameEn": "Transarterial Radioembolization (TARE / SIRT) Mapping Angiogram with Tc-99m MAA & Coil Skeletonization",
    "nameHi": "ट्रांसआर्टीरियल रेडियोएम्बोलाइजेशन (TARE / SIRT) मैपिंग एंजियोग्राफी - टेक्नीशियम-99m MAA एवं कॉइल स्केलेटनाइजेशन (रेडिएशन खुराक निर्धारण जांच)",
    "indicationEn": "Pre-treatment simulation and dosimetry mapping for Yttrium-90 radioembolization; quantification of lung shunt fraction and exclusion of non-target gastrointestinal flow.",
    "indicationHi": "लिवर कैंसर में वाई-90 (Y-90) रेडिएशन के सूक्ष्म कण डालने से पहले की जाने वाली आवश्यक मैपिंग जांच; फेफड़ों में जाने वाले रेडिएशन (Lung Shunt) की गणना एवं पेट की अन्य नसों में बहाव की रोकथाम।",
    "descriptionEn": "Under local anesthesia and fluoroscopy, a microcatheter is navigated into the hepatic arteries. Coil embolization (skeletonization) of extrahepatic branches (e.g., gastroduodenal, right gastric, falciform) is performed if necessary. A radiotracer (Tc-99m Macroaggregated Albumin) is injected at the planned treatment position, followed immediately by SPECT-CT / gamma camera scan to measure lung shunting and ensure safety before Y-90 administration.",
    "descriptionHi": "जांघ की नस से कैथेटर लिवर की धमनियों में ले जाया जाता है। यदि आवश्यक हो तो पेट और आंतों की तरफ जाने वाली छोटी नसों को सूक्ष्म छल्लों (Coils) से बंद किया जाता है ताकि रेडिएशन गलत जगह न जाए। फिर एक सुरक्षित रेडियोएक्टिव दवा (Tc-99m MAA) लिवर की नस में छोड़ी जाती है और तुरंत न्यूक्लियर स्कैन करके देखा जाता है कि फेफड़ों या आंतों में रेडिएशन का रिसाव कितना है।",
    "benefitsEn": [
      "Essential statutory safety step to prevent catastrophic radiation pneumonitis or gastrointestinal ulceration.",
      "Accurate calculation of personalized radiation dose for maximum tumor destruction.",
      "Identifies aberrant vascular anatomy and prevents non-target tissue damage."
    ],
    "benefitsHi": [
      "फेफड़ों में रेडिएशन निमोनिया और आमाशय में जानलेवा अल्सर होने से बचाने के लिए अनिवार्य सुरक्षा जांच।",
      "कैंसर को पूरी तरह नष्ट करने हेतु रेडिएशन की सटीक व्यक्तिगत खुराक का निर्धारण।",
      "असामान्य नसों की पहचान कर उन्हें सुरक्षित रूप से बंद करना।"
    ],
    "specificRisksEn": [
      "Vascular injury, arterial spasm, or dissection during microcatheterization.",
      "Microcoil migration or incomplete target vessel occlusion.",
      "Groin puncture site hematoma or pseudoaneurysm.",
      "Test failure requiring repeat mapping if tracer is unstable or shunting is indeterminate."
    ],
    "specificRisksHi": [
      "बारीक नस में कैथेटर से चोट, खिंचाव या आंतरिक परत फटना।",
      "माइक्रो-कॉइल का अपनी जगह से खिसकना या नस का पूरी तरह बंद न होना।",
      "जांघ में सुई लगने की जगह पर खून का थक्का (हेमेटोमा) बनना।",
      "फेफड़ों में अधिक रिसाव दिखने पर वाई-90 उपचार रद्द होने अथवा दोबारा जांच करने की संभावना।"
    ],
    "alternativesEn": "Systemic therapy (Immunotherapy / TKI), Transarterial chemoembolization (TACE), external beam radiation therapy (SBRT), or palliative therapy without radioembolization.",
    "alternativesHi": "कीमोएम्बोलाइजेशन (TACE), इम्यूनोथेरेपी/गोलियां, बाहरी रेडिएशन (SBRT), अथवा केवल दर्द निवारक उपचार।",
    "sedationTypeEn": "Local anesthesia with mild conscious sedation.",
    "sedationTypeHi": "जांघ में सुन्नता का इंजेक्शन (Local Anesthesia) और हल्की शामक दवा।"
  },
  "tare-sirt-glass-therasphere": {
    "id": "tare-sirt-glass-therasphere",
    "category": "Interventional Oncology",
    "nameEn": "Transarterial Radioembolization (TARE / SIRT) Delivery of Y-90 Glass Microspheres (TheraSphere)",
    "nameHi": "ट्रांसआर्टीरियल रेडियोएम्बोलाइजेशन (TARE / SIRT) - वाई-90 ग्लास माइक्रोस्फीयर (थेरास्फीयर / लिवर कैंसर में आंतरिक रेडिएशन थेरेपी)",
    "indicationEn": "Unresectable hepatocellular carcinoma with portal vein tumor thrombosis (PVTT VP1-VP3), radiation segmentectomy, or bridging/downstaging to transplant.",
    "indicationHi": "लिवर का कैंसर (HCC) जिसमें पोर्टल नस में ट्यूमर का थक्का जम गया हो, जिसे ऑपरेशन से निकालना संभव न हो, अथवा रेडिएशन सेमोन्टेक्टॉमी द्वारा गांठ को पूर्णतः नष्ट करने हेतु।",
    "descriptionEn": "Under local anesthesia and fluoroscopy, a microcatheter is advanced to the exact tumor feeding branch mapped during simulation. Millions of microscopic glass beads containing radioactive Yttrium-90 (pure beta emitter) are flushed directly into the tumor. The microspheres lodge in the tumor capillaries and deliver localized, high-dose tumoricidal radiation (> 120-400 Gy) while sparing normal liver tissue.",
    "descriptionHi": "मैपिंग जांच द्वारा तय किए गए सटीक स्थान पर माइक्रो-कैथेटर द्वारा वाई-90 (Y-90) रेडिएशन से युक्त कांच के लाखों सूक्ष्म मनके (ग्लास माइक्रोस्फीयर) सीधे कैंसर की गांठ में छोड़े जाते हैं। ये मनके गांठ की सूक्ष्म नलियों में फंसकर अत्यधिक शक्तिशाली बीटा रेडिएशन (120 से 400 ग्रे) सीधे कैंसर पर छोड़ते हैं, जिससे सामान्य लिवर को नुकसान पहुंचाए बिना कैंसर नष्ट हो जाता है।",
    "benefitsEn": [
      "High tumor response rate with potent tumoricidal radiation delivered from inside the tumor.",
      "Safe in patients with portal vein thrombosis (PVT) where TACE is contraindicated due to ischemic risk.",
      "Outpatient or overnight daycare procedure with minimal systemic radiation exposure."
    ],
    "benefitsHi": [
      "गांठ के अंदर से ही अत्यधिक शक्तिशाली रेडिएशन देकर कैंसर को समाप्त करने की अचूक क्षमता।",
      "पोर्टल नस में ट्यूमर होने पर भी सुरक्षित, जहां सामान्य टीएसीई (TACE) लिवर फेल होने के डर से नहीं की जा सकती।",
      "अस्पताल में केवल 1 दिन का ठहराव तथा शरीर के बाहर रेडिएशन का कोई खतरा नहीं।"
    ],
    "specificRisksEn": [
      "Radiation-Induced Liver Disease (RILD): Jaundice, ascites, hepatomegaly without mechanical obstruction (1-5%).",
      "Radiation pneumonitis if lung shunting exceeds planned dosimetry limits.",
      "Non-target gastrointestinal ulceration if beads reflux into gastric/duodenal arteries (severe, intractable pain).",
      "Radiation cholecystitis requiring surgical or percutaneous drainage.",
      "Post-radioembolization fatigue, nausea, and abdominal pain lasting 1-2 weeks."
    ],
    "specificRisksHi": [
      "रेडिएशन-इंड्यूस्ड लिवर डिजीज (RILD): लिवर पर रेडिएशन के असर से पीलिया या पेट में पानी आना (1-5%)।",
      "फेफड़ों में रेडिएशन निमोनिया होने का दुर्लभ जोखिम।",
      "आमाशय या आंतों में मनके जाने से गंभीर पेट दर्द और ठीक न होने वाला अल्सर।",
      "पित्त की थैली में रेडिएशन के कारण सूजन (Radiation Cholecystitis)।",
      "प्रक्रिया के बाद 1 से 2 सप्ताह तक थकान, हल्का पेट दर्द व जी मिचलाना।"
    ],
    "alternativesEn": "Y-90 resin microspheres (SIR-Spheres), Systemic immunotherapy / Tyrosine kinase inhibitors (Atezolizumab/Bevacizumab, Lenvatinib), TACE (if no portal vein thrombosis), or best supportive care.",
    "alternativesHi": "वाई-90 रेजिन मनके (SIR-Spheres), इम्यूनोथेरेपी/टारगेटेड गोलियां, टीएसीई (यदि पोर्टल वेन खुली हो), अथवा दर्द निवारक देखभाल।",
    "sedationTypeEn": "Local anesthesia with intravenous conscious sedation; acrylic beta-radiation shielding used during administration.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा; रेडिएशन से बचाव हेतु विशेष एक्रिलिक शील्ड का उपयोग।"
  },
  "tare-sirt-resin-sirspheres": {
    "id": "tare-sirt-resin-sirspheres",
    "category": "Interventional Oncology",
    "nameEn": "Transarterial Radioembolization (TARE / SIRT) Delivery of Y-90 Resin Microspheres (SIR-Spheres)",
    "nameHi": "ट्रांसआर्टीरियल रेडियोएम्बोलाइजेशन (TARE / SIRT) - वाई-90 रेजिन माइक्रोस्फीयर (एसआईआर-स्फियर्स / लिवर में कैंसर की गांठों का रेडिएशन उपचार)",
    "indicationEn": "Unresectable colorectal cancer liver metastases (mCRC) refractory to systemic chemotherapy, neuroendocrine tumor liver metastases, or multifocal hepatocellular carcinoma.",
    "indicationHi": "बड़ी आंत के कैंसर से लिवर में फैली गांठें (Colorectal Metastases) जो कीमोथेरेपी से ठीक न हुई हों, न्यूरोएंडोक्राइन ट्यूमर, अथवा लिवर का बहु-गांठों वाला कैंसर।",
    "descriptionEn": "Under local anesthesia and fluoroscopy, biocompatible resin microspheres (20-60 um) labeled with Yttrium-90 are slowly injected into the hepatic arteries suspended in 5% Dextrose. Because each resin sphere carries lower activity than glass, tens of millions of spheres are delivered, producing a combined micro-embolic and high-dose localized internal radiation therapy.",
    "descriptionHi": "जांघ की नस से कैथेटर द्वारा वाई-90 युक्त रेजिन के लाखों सूक्ष्म मनके (20-60 माइक्रोन) ग्लूकोज के पानी (D5W) में मिलाकर लिवर की नसों में छोड़े जाते हैं। ये मनके गांठों की सूक्ष्म रक्त वाहिकाओं को बंद भी करते हैं और सीधे कैंसर की कोशिकाओं पर भारी मात्रा में रेडिएशन डालकर उन्हें नष्ट करते हैं।",
    "benefitsEn": [
      "Significant objective tumor response and disease control in chemo-refractory liver metastases.",
      "Preserves quality of life with lower toxicity compared to salvage systemic chemotherapy regimens.",
      "Can be synergized with radiosensitizing fluoropyrimidine chemotherapy."
    ],
    "benefitsHi": [
      "कीमोथेरेपी से अप्रभावी हो चुके कैंसर में भी रसोली को सिकोड़ने और नियंत्रित करने की उच्च क्षमता।",
      "तीसरे-चौथे चरण की भारी कीमोथेरेपी की तुलना में बहुत कम दुष्प्रभाव।",
      "मरीज के जीवन की गुणवत्ता और आयु में सुधार।"
    ],
    "specificRisksEn": [
      "Non-target gastrointestinal embolization causing severe gastric or duodenal ulceration.",
      "Radiation-Induced Liver Disease (RILD) or radiation hepatitis (ascites, jaundice, hepatomegaly).",
      "Premature stasis during infusion leading to incomplete delivery or reflux.",
      "Post-SIRT asthenia, fever, nausea, and abdominal pain.",
      "Radiation pneumonitis (rare if lung shunt fraction < 15%)."
    ],
    "specificRisksHi": [
      "आमाशय या आंतों में मनके जाने से गंभीर पेट दर्द व अल्सर बनना।",
      "लिवर में रेडिएशन सूजन (Radiation Hepatitis) जिससे पीलिया या पेट में पानी भर सकता है।",
      "प्रक्रिया के दौरान नसें जल्दी बंद होने से पूरी खुराक न जा पाना।",
      "प्रक्रिया के बाद अत्यधिक कमजोरी, बुखार, उल्टी व पेट दर्द (1-2 सप्ताह तक)।",
      "फेफड़ों में रेडिएशन निमोनिया होने का जोखिम।"
    ],
    "alternativesEn": "Salvage systemic chemotherapy (Trifluridine-Tipiracil, Regorafenib), hepatic arterial infusion chemotherapy (HAIC), external beam radiation, or best supportive care.",
    "alternativesHi": "अन्य कीमोथेरेपी दवाइयां, लिवर धमनी कीमोथेरेपी (HAIC), बाहरी रेडिएशन (SBRT), अथवा लक्षण निवारक देखभाल।",
    "sedationTypeEn": "Local anesthesia with conscious sedation; beta-radiation acrylic shielding maintained throughout.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक दवाइयां।"
  },
  "tare-radiation-segmentectomy": {
    "id": "tare-radiation-segmentectomy",
    "category": "Interventional Oncology",
    "nameEn": "TARE Radiation Segmentectomy for Early Solitary HCC in High-Risk Locations",
    "nameHi": "टीएआरई रेडिएशन सेग्मेंटेक्टॉमी (लिवर के जटिल स्थान पर स्थित कैंसर की गांठ का लक्षित उच्च-रेडिएशन उपचार)",
    "indicationEn": "Solitary early-stage HCC (<= 5 cm) in segments I (caudate), VII, or VIII adjacent to hepatic veins or bile ducts where surgery or thermal ablation is contraindicated.",
    "indicationHi": "लिवर के कठिन स्थान (जैसे मुख्य नसों या पित्त नली के पास) में स्थित 5 सेमी तक की कैंसर गांठ, जहां ऑपरेशन या सुई से जलाना संभव या सुरक्षित न हो।",
    "descriptionEn": "Under fluoroscopy and cone-beam CT (CBCT) guidance, a microcatheter is advanced ultraselectively into 1 to 2 segment-specific tumor feeding arteries. An ultra-high radiation dose (> 190 to 400 Gy) of Yttrium-90 glass microspheres is delivered specifically to that anatomic Couinaud segment, achieving complete ablation of the tumor and its surrounding segment comparable to surgical segmentectomy.",
    "descriptionHi": "एक्स-रे एवं आधुनिक कोन-बीम सीटी की मदद से माइक्रो-कैथेटर को रसोली की अत्यंत सूक्ष्म नसों तक पहुंचाया जाता है। वहां वाई-90 रेडिएशन के मनकों द्वारा अत्यधिक उच्च खुराक (190 से 400 ग्रे) केवल उसी हिस्से (सेगमेंट) में छोड़ी जाती है, जिससे बिना पेट पर चीरा लगाए ऑपरेशन जैसी पूर्ण सफलता मिलती है और बाकी लिवर सुरक्षित रहता है।",
    "benefitsEn": [
      "Curative-intent ablative response comparable to surgical resection without surgical morbidity.",
      "Complete pathological necrosis of the target tumor and its microvascular segment.",
      "Preserves surrounding functional liver parenchyma, ideal for patients with cirrhosis or portal hypertension."
    ],
    "benefitsHi": [
      "बिना किसी बड़े ऑपरेशन या चीरे के सर्जिकल रिसेक्शन जितना प्रभावी और अचूक उपचार।",
      "कैंसर की गांठ और उसके आसपास के सूक्ष्म कणों का पूर्ण विनाश।",
      "सिरोसिस या कमजोर लिवर वाले मरीजों में बाकी लिवर पर कोई दुष्प्रभाव नहीं।"
    ],
    "specificRisksEn": [
      "Focal hepatic segment necrosis, biloma, or bile duct injury.",
      "Transient focal capsular pain radiating to the right shoulder.",
      "Arterial spasm preventing complete delivery of the calculated radiation dose.",
      "Post-embolization transaminitis and low-grade fever.",
      "Radiation cholecystitis if segment IV/V branches communicate with cystic bed."
    ],
    "specificRisksHi": [
      "उपचारित हिस्से में पित्त रिसाव (Biloma) या पित्त नली में सिकुड़न।",
      "लिवर के पर्दे पर खिंचाव के कारण दाहिने कंधे व पेट में अस्थायी दर्द।",
      "नस में ऐंठन आने से दवा की पूरी मात्रा न जा पाना।",
      "लिवर एंजाइम्स में अस्थायी वृद्धि और हल्का बुखार।",
      "पित्त की थैली में सूजन का हल्का जोखिम।"
    ],
    "alternativesEn": "Surgical anatomic segmentectomy, microwave ablation (if safe window exists), stereotactic body radiation therapy (SBRT), or conventional TACE.",
    "alternativesHi": "लिवर का खुला ऑपरेशन (Segmentectomy), माइक्रोवेव एब्लेशन, बाहरी रेडिएशन (SBRT), अथवा सामान्य टीएसीई।",
    "sedationTypeEn": "Local anesthesia with intravenous analgesia and conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक व शामक दवा।"
  },
  "hepatic-rfa-expandable-needle": {
    "id": "hepatic-rfa-expandable-needle",
    "category": "Interventional Oncology",
    "nameEn": "Hepatic Radiofrequency Ablation (RFA) with Multi-Tined Expandable Needle for HCC",
    "nameHi": "लिवर कैंसर हेतु रेडियोफ्रीक्वेंसी एब्लेशन (RFA - छतरीनुमा सुई द्वारा उच्च तापमान से गांठ को जलाना)",
    "indicationEn": "Early-stage hepatocellular carcinoma (single nodule <= 3 cm, or up to 3 nodules <= 3 cm each) in patients unsuitable for or declining surgical resection.",
    "indicationHi": "शुरुआती लिवर कैंसर (3 सेमी तक की एकल गांठ या 3 सेमी तक की अधिकतम 3 गांठें) जहां बिना चीर-फाड़ के गांठ को सुई द्वारा जलाकर पूरी तरह नष्ट करना हो।",
    "descriptionEn": "Under local anesthesia, conscious sedation, and real-time ultrasound or CT guidance, an expandable RFA needle electrode is inserted through the skin into the center of the liver tumor. Multiple curved metallic tines are deployed outward like an umbrella. Radiofrequency alternating electrical current is applied, heating the tumor tissue to 60-100°C to cause complete coagulative thermal necrosis with a safe 5-10 mm margin.",
    "descriptionHi": "सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में एक विशेष आर.एफ.ए. सुई को पेट की त्वचा के रास्ते लिवर की गांठ में डाला जाता है। गांठ के अंदर पहुंचकर सुई से कई बारीक तार छतरी की तरह खुल जाते हैं। इसके बाद रेडियोफ्रीक्वेंसी तरंगों द्वारा गांठ का तापमान 60 से 100 डिग्री सेल्सियस तक बढ़ाया जाता है, जिससे कैंसर की गांठ जलकर पूरी तरह नष्ट हो जाती है।",
    "benefitsEn": [
      "Curative thermal ablation equivalent to surgical resection for small HCC (<= 3 cm).",
      "Minimally invasive, needle-puncture technique with no surgical abdominal incision.",
      "Rapid recovery, minimal hospital stay (usually 24 hours), and minimal blood loss."
    ],
    "benefitsHi": [
      "3 सेमी तक की छोटी गांठों में खुले ऑपरेशन जितना ही पक्का और सफल इलाज।",
      "बिना किसी बड़े चीरे या टांके के केवल एक सुई के छेद द्वारा संपूर्ण उपचार।",
      "त्वरित रिकवरी, खून की कोई हानि नहीं और केवल 24 घंटे में अस्पताल से छुट्टी।"
    ],
    "specificRisksEn": [
      "Intraperitoneal hemorrhage from liver capsule puncture requiring blood transfusion or embolization.",
      "Thermal injury to adjacent organs (gallbladder, diaphragm, colon, or stomach).",
      "Biliary stricture or biloma if tumor is close to major biliary confluence.",
      "Heat-sink effect causing incomplete ablation if tumor is adjacent to vessels > 3 mm.",
      "Grounding pad skin burns on thighs; post-ablation syndrome (low-grade fever, malaise)."
    ],
    "specificRisksHi": [
      "लिवर के पर्दे से पेट में आंतरिक रक्तस्राव, जिसके लिए खून चढ़ाने या नस बंद करने की जरूरत पड़ सकती है।",
      "गर्मी के कारण पास के अंगों (पित्त की थैली, डायाफ्राम, बड़ी आंत या पेट) में जलने की चोट।",
      "पित्त की बड़ी नली के पास होने पर नली में सिकुड़न या पित्त रिसाव (Biloma)।",
      "बड़ी खून की नस के पास होने पर गर्मी बह जाने से गांठ का कुछ हिस्सा अधूरा जलना (Heat-sink effect)।",
      "जांघ पर लगी अर्थिंग प्लेट से त्वचा जलना; प्रक्रिया के बाद 2-3 दिन हल्का बुखार व कमजोरी।"
    ],
    "alternativesEn": "Microwave ablation (MWA), surgical partial hepatectomy, liver transplantation, stereotactic body radiation therapy (SBRT), or transarterial chemoembolization (TACE).",
    "alternativesHi": "माइक्रोवेव एब्लेशन (MWA), लिवर का ऑपरेशन (Hepatectomy), लिवर ट्रांसप्लांट, एसबीआरटी (SBRT), अथवा टीएसीई (TACE)।",
    "sedationTypeEn": "Local anesthesia infiltration with deep conscious sedation or general anesthesia.",
    "sedationTypeHi": "त्वचा और लिवर के पर्दे पर सुन्न करने का इंजेक्शन तथा नस द्वारा गहरी शामक व दर्द निवारक दवा (Deep Sedation)।"
  },
  "hepatic-mwa-water-cooled": {
    "id": "hepatic-mwa-water-cooled",
    "category": "Interventional Oncology",
    "nameEn": "Hepatic Microwave Ablation (MWA) with Water-Cooled Antenna for Liver Tumors",
    "nameHi": "लिवर ट्यूमर हेतु माइक्रोवेव एब्लेशन (MWA - वाटर-कूल्ड एंटीना द्वारा सूक्ष्म तरंगों से गांठ को जलाना)",
    "indicationEn": "Colorectal liver metastases (<= 4 cm), hepatocellular carcinoma, or neuroendocrine metastases, especially lesions near blood vessels where MWA overcomes the heat-sink effect.",
    "indicationHi": "बड़ी आंत अथवा अन्य अंगों से लिवर में फैली गांठें (Metastases) या लिवर का प्राथमिक कैंसर (HCC), विशेषकर बड़ी खून की नसों के पास स्थित गांठें जहां माइक्रोवेव तेजी से असर करता है।",
    "descriptionEn": "Under ultrasound or CT fluoroscopy guidance, a specialized internally water-cooled microwave antenna is placed directly into the liver tumor. Electromagnetic microwave energy (915 MHz or 2.45 GHz) is delivered, causing rapid rotation of water molecules, generating friction heat (> 100°C), and creating a large, predictable spherical zone of thermal destruction within minutes.",
    "descriptionHi": "सोनोग्राफी अथवा सीटी स्कैन की सहायता से एक ठंडे पानी के परिसंचरण वाला विशेष माइक्रोवेव एंटीना सीधे लिवर की गांठ में डाला जाता है। माइक्रोवेव तरंगों द्वारा गांठ के अंदर के पानी के अणुओं में अत्यधिक कंपन पैदा किया जाता है, जिससे कुछ ही मिनटों में 100 डिग्री से अधिक तापमान उत्पन्न होकर पूरी कैंसर गांठ जलकर नष्ट हो जाती है।",
    "benefitsEn": [
      "Faster heating and larger, more uniform ablation zones compared to RFA.",
      "Effective near large blood vessels (> 3 mm) by overcoming the convective cooling heat-sink effect.",
      "No electrical grounding pads required, eliminating risk of grounding pad burns."
    ],
    "benefitsHi": [
      "आरएफए (RFA) की तुलना में बहुत तेज हीटिंग और बड़ी गोलाकार गांठों को कुछ ही मिनटों में जलाने की क्षमता।",
      "बड़ी खून की नसों के पास होने पर भी नस के बहते खून से गर्मी कम नहीं होती (Heat-sink से मुक्ति)।",
      "शरीर पर कोई अर्थिंग प्लेट लगाने की जरूरत नहीं होती, जिससे जलने का कोई डर नहीं रहता।"
    ],
    "specificRisksEn": [
      "Intraperitoneal bleeding or subcapsular hematoma from hepatic puncture.",
      "Thermal injury to diaphragm (causing shoulder tip pain or diaphragmatic hernia), colon, or gallbladder.",
      "Liver abscess in necrotic ablation cavity, particularly in patients with previous bilio-enteric anastomosis.",
      "Pneumothorax or pleural effusion during subdiaphragmatic needle trajectory.",
      "Post-ablation syndrome (fever, nausea, pain for 48-72 hours)."
    ],
    "specificRisksHi": [
      "लिवर में सुई लगने से पेट के अंदर खून का रिसाव या खून का थक्का जमना।",
      "गर्मी से डायाफ्राम (छाती व पेट के बीच का पर्दा), आंत या पित्त की थैली में चोट।",
      "जली हुई जगह पर मवाद या फोड़ा (Abscess) बनना, विशेषकर जिन मरीजों के पित्त के पहले ऑपरेशन हुए हों।",
      "फेफड़े के पर्दे में हवा (Pneumothorax) या पानी का रिसाव।",
      "प्रक्रिया के बाद 2-3 दिन तक बुखार, दर्द व उल्टी की शिकायत।"
    ],
    "alternativesEn": "Radiofrequency ablation (RFA), cryoablation, surgical wedge resection / hepatectomy, SBRT, or systemic chemotherapy/targeted agents.",
    "alternativesHi": "रेडियोफ्रीक्वेंसी एब्लेशन (RFA), क्रायोएब्लेशन (बर्फ से जमाना), लिवर की सर्जरी, बाहरी रेडिएशन, अथवा कीमोथेरेपी।",
    "sedationTypeEn": "Deep conscious sedation or general anesthesia with controlled breath-holding.",
    "sedationTypeHi": "गहरी शामक दवाइयां (Deep Sedation) अथवा सांस पर नियंत्रण हेतु पूर्ण बेहोशी (General Anesthesia)।"
  },
  "hepatic-cryoablation-argon-helium": {
    "id": "hepatic-cryoablation-argon-helium",
    "category": "Interventional Oncology",
    "nameEn": "Hepatic Cryoablation with Argon-Helium Gas System & Continuous Ice-Ball Monitoring",
    "nameHi": "लिवर ट्यूमर हेतु क्रायोएब्लेशन (अत्यधिक ठंडक एवं बर्फ के गोले द्वारा कैंसर की गांठ को जमाकर नष्ट करना)",
    "indicationEn": "Primary or secondary liver tumors situated close to liver capsule, diaphragm, gallbladder, or sensitive structures where precise ice-ball visualization is essential.",
    "indicationHi": "लिवर का कैंसर जो लिवर के पर्दे, डायाफ्राम या पित्त की थैली के एकदम करीब हो, जहां सीटी पर बर्फ के गोले को स्पष्ट देखकर जलाए बिना जमाना सुरक्षित रहता है।",
    "descriptionEn": "Under CT guidance, 2 to 4 thin cryoprobes are placed into the tumor. Pressurized Argon gas is expanded through the probe tips (Joule-Thomson effect), cooling tissue down to -140°C and forming an ice-ball seen clearly on CT. After a freeze-thaw-freeze cycle with Helium gas (+40°C), cellular membranes rupture, causing complete cell death while preserving the collagen framework of nearby bile ducts.",
    "descriptionHi": "सीटी स्कैन की निगरानी में 2 से 4 बारीक सुइयां (Cryoprobes) गांठ में डाली जाती हैं। आर्गन गैस के दबाव से सुई की नोक का तापमान माइनस 140 डिग्री (-140°C) तक गिर जाता है, जिससे सीटी पर बर्फ का एक गोला साफ बनता दिखाई देता है। दो बार बर्फ जमाने और हीलियम गैस से पिघलाने के चक्र द्वारा कैंसर कोशिकाएं फटकर नष्ट हो जाती हैं।",
    "benefitsEn": [
      "Clear visualization of the ice-ball margin on CT, preventing collateral damage to adjacent organs.",
      "Significantly less procedural pain compared to heat-based thermal ablation (RFA/MWA).",
      "Preserves connective tissue collagen matrix, protecting adjacent large bile ducts and blood vessels."
    ],
    "benefitsHi": [
      "सीटी स्कैन पर बर्फ का गोला बिल्कुल साफ दिखाई देता है, जिससे पास के अंगों को सुरक्षित रखा जा सकता है।",
      "गर्मी से जलाने (RFA/MWA) की तुलना में इसमें प्रक्रिया के दौरान बहुत ही कम दर्द होता है।",
      "पित्त की बड़ी नलियों और नसों का प्राकृतिक ढांचा नष्ट नहीं होता।"
    ],
    "specificRisksEn": [
      "Cryoshock syndrome: Severe systemic inflammatory response, DIC, and multi-organ failure (rare in tumors < 4 cm).",
      "Hepatic capsular cracking or fracture leading to intraperitoneal hemorrhage.",
      "Unsealed needle tract bleeding due to lack of thermal cautery (requires tract plugging).",
      "Transient myoglobinuria and acute kidney injury from massive intracellular release.",
      "Post-procedure low-grade fever and local pain."
    ],
    "specificRisksHi": [
      "क्रायोशॉक सिंड्रोम: अत्यधिक ठंडक से शरीर में सूजन की गंभीर प्रतिक्रिया या रक्त जमने में खराबी (4 सेमी से छोटी गांठों में दुर्लभ)।",
      "बर्फ जमने के कारण लिवर के पर्दे में दरार आना और पेट में खून का रिसाव।",
      "सुई के रास्ते से खून बहना (क्योंकि इसमें गर्मी से नसें सील नहीं होतीं, अतः विशेष जेल भरा जाता है)।",
      "मांसपेशी प्रोटीन टूटने से पेशाब का रंग गहरा होना और गुर्दों पर अस्थायी असर।",
      "प्रक्रिया के बाद हल्का बुखार और दर्द।"
    ],
    "alternativesEn": "Microwave ablation (MWA), radiofrequency ablation (RFA), irreversible electroporation (IRE), surgical resection, or systemic therapy.",
    "alternativesHi": "माइक्रोवेव एब्लेशन, रेडियोफ्रीक्वेंसी एब्लेशन, नैनोनाइफ (IRE), सर्जरी, अथवा कीमोथेरेपी।",
    "sedationTypeEn": "Conscious sedation with local anesthesia or general anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक दवाइयां अथवा हल्की बेहोशी।"
  },
  "ire-nanoknife-pancreatic-lapc": {
    "id": "ire-nanoknife-pancreatic-lapc",
    "category": "Interventional Oncology",
    "nameEn": "Irreversible Electroporation (IRE / NanoKnife) for Locally Advanced Pancreatic Adenocarcinoma (LAPC)",
    "nameHi": "अग्न्याशय (पैंक्रियाज) के कैंसर हेतु इरिवर्सिबल इलेक्ट्रोपोरेशन (नैनोनाइफ / बिजली के झटकों द्वारा बिना जलाए कैंसर का खात्मा)",
    "indicationEn": "Locally advanced pancreatic adenocarcinoma (LAPC Stage III) encasing celiac axis, SMA, or portal confluence without distant metastases after induction chemotherapy.",
    "indicationHi": "पैंक्रियाज (अग्न्याशय) का गंभीर कैंसर जो पेट की मुख्य नसों से लिपटा होने के कारण ऑपरेशन योग्य न हो, लेकिन शरीर के अन्य अंगों में न फैला हो।",
    "descriptionEn": "Under general anesthesia with complete neuromuscular paralysis, 2 to 6 monopolar needle electrodes are placed around the pancreatic tumor under CT guidance. Short, high-voltage electrical pulses (up to 3000V) synchronized with the cardiac ECG R-wave are delivered. This creates permanent nanoscale pores in cancer cell membranes causing apoptosis, while sparing the collagen scaffolding of major encased arteries and veins.",
    "descriptionHi": "पूर्ण बेहोशी और मांसपेशियों को शिथिल करने की दवा देकर सीटी स्कैन की निगरानी में 2 से 6 विशेष सुइयां पैंक्रियाज के कैंसर के चारों तरफ लगाई जाती हैं। दिल की धड़कन (ECG) से तालमेल बिठाकर अत्यंत उच्च वोल्टेज (3000 वोल्ट) के बिजली के झटके दिए जाते हैं। इससे कैंसर कोशिकाओं में सूक्ष्म छिद्र होकर वे नष्ट हो जाती हैं, लेकिन पास की बड़ी खून की नसें सुरक्षित बच जाती हैं।",
    "benefitsEn": [
      "Non-thermal ablation mechanism: Does not rely on heat, preserving adjacent major blood vessels (SMA, celiac, portal vein).",
      "Provides local tumor control and prolongs survival in surgically unresectable LAPC.",
      "Preserves gastrointestinal wall and ductal integrity without thermal perforation."
    ],
    "benefitsHi": [
      "बिना गर्मी के काम करने वाली तकनीक: पेट की मुख्य धमनियों व नसों को बिना जलाए सुरक्षित रखती है।",
      "ऑपरेशन न हो सकने वाले पैंक्रियाज कैंसर के मरीजों में रोग नियंत्रण और जीवन प्रत्याशा बढ़ाती है।",
      "आंतों और पित्त की नलियों के जलने या फटने का कोई खतरा नहीं।"
    ],
    "specificRisksEn": [
      "Cardiac arrhythmias (ventricular tachycardia or fibrillation if cardiac synchronization slips).",
      "Acute necrotizing or interstitial post-ablation pancreatitis.",
      "Superior mesenteric vein (SMV) or portal vein thrombosis.",
      "Duodenal perforation or pancreatic duct fistula.",
      "Intra-abdominal hemorrhage or pseudoaneurysm formation."
    ],
    "specificRisksHi": [
      "दिल की धड़कन में अनियमितता (Cardiac Arrhythmia) का गंभीर जोखिम (यदि ईसीजी तालमेल में गड़बड़ी हो)।",
      "पैंक्रियाज में तीव्र सूजन (Acute Pancreatitis) होना।",
      "पेट की मुख्य नसों (Portal/SMV) में खून का थक्का जमना।",
      "छोटी आंत (Duodenum) में छेद होना अथवा पैंक्रियाज से रस का रिसाव (Fistula)।",
      "पेट के अंदर खून बहना या नस की दीवार कमजोर होना।"
    ],
    "alternativesEn": "Continued second-line systemic chemotherapy (FOLFIRINOX, Gemcitabine-Nab-Paclitaxel), stereotactic body radiotherapy (SBRT), surgical exploration for irreversible vascular reconstruction, or palliative bypass stenting.",
    "alternativesHi": "कीमोथेरेपी जारी रखना, स्टीरियोटैक्टिक रेडिएशन (SBRT), जटिल वैस्कुलर बाईपास सर्जरी, अथवा केवल पित्त की नली में स्टेंट डालकर पीलिया रोकना।",
    "sedationTypeEn": "General anesthesia with absolute neuromuscular blockade (paralysis) and continuous ECG R-wave synchronization.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia), मांसपेशियों को पूरी तरह सुन्न करने वाली दवा तथा दिल की धड़कन के साथ निरंतर इलेक्ट्रॉनिक तालमेल।"
  },
  "ire-central-hepatic-malignancies": {
    "id": "ire-central-hepatic-malignancies",
    "category": "Interventional Oncology",
    "nameEn": "Irreversible Electroporation (IRE / NanoKnife) for Central Hepatic Malignancies Near Major Biliary/Vascular Pedicles",
    "nameHi": "लिवर की मुख्य नसों व पित्त नलियों के पास स्थित कैंसर हेतु इरिवर्सिबल इलेक्ट्रोपोरेशन (नैनोनाइफ - नॉन-थर्मल एब्लेशन)",
    "indicationEn": "Centrally located or perihilar hepatic malignancies (< 3.5 cm) abutting main portal veins or biliary bifurcations where thermal ablation carries high risk of stricture and surgery is not feasible.",
    "indicationHi": "लिवर के केंद्र में मुख्य पित्त नली या बड़ी नसों से चिपकी हुई 3.5 सेमी तक की गांठें, जहां गर्मी से जलाने (RFA/MWA) से नली बंद होने का खतरा हो और ऑपरेशन संभव न हो।",
    "descriptionEn": "Under general anesthesia with complete muscle relaxation and ECG synchronization, parallel 19G needle electrodes are placed around the central tumor under CT guidance. High-voltage electrical pulses are delivered to induce permanent nanoscale cellular perforation, destroying malignant cells while sparing the structural integrity of adjacent major bile ducts and portal branches.",
    "descriptionHi": "पूर्ण बेहोशी में सीटी स्कैन की निगरानी से 2 से 4 बारीक सुइयां लिवर के केंद्र की गांठ के चारों ओर लगाई जाती हैं। दिल की धड़कन से तालमेल रखते हुए बिजली के नियंत्रित झटके दिए जाते हैं, जिससे कैंसर कोशिकाएं नष्ट हो जाती हैं और पास की नाजुक पित्त नली व मुख्य नसें पूरी तरह सुरक्षित बच जाती हैं।",
    "benefitsEn": [
      "Spares bile duct integrity: No thermal bile duct stricture, biloma, or hemobilia.",
      "Overcomes heat-sink effect: Electric field is unaffected by high-flow hepatic vessels.",
      "Provides effective local tumor ablation in otherwise inoperable central liver locations."
    ],
    "benefitsHi": [
      "पित्त की नली को कोई आंच नहीं आती, जिससे पीलिया या नली बंद होने का डर नहीं रहता।",
      "बड़ी नसों के पास बहते खून से इसके असर पर कोई फर्क नहीं पड़ता।",
      "लिवर के अत्यधिक नाजुक हिस्से में बिना ऑपरेशन के गांठ का अचूक खात्मा।"
    ],
    "specificRisksEn": [
      "Cardiac arrhythmias during pulse delivery (requires emergency pacing / defibrillation readiness).",
      "Portal vein thrombosis or transient vasospasm.",
      "Intrahepatic hematoma or capsular bleeding.",
      "Transient elevation of transaminases and mild jaundice.",
      "Pneumothorax if needles traverse intercostal spaces."
    ],
    "specificRisksHi": [
      "बिजली के झटके के समय दिल की धड़कन में गड़बड़ी।",
      "लिवर की मुख्य नस में खून का थक्का जमना।",
      "सुई के रास्ते में खून का थक्का या लिवर में आंतरिक रक्तस्राव।",
      "लिवर एंजाइम और पीलिया में अस्थायी वृद्धि।",
      "पसली के रास्ते सुई जाने पर फेफड़े के पर्दे में हवा का रिसाव।"
    ],
    "alternativesEn": "Radiation segmentectomy (Y-90 TARE), stereotactic body radiotherapy (SBRT), surgical central hepatectomy / trisegmentectomy, or systemic therapy.",
    "alternativesHi": "वाई-90 रेडिएशन (TARE), एसबीआरटी (SBRT), लिवर का अत्यंत जोखिम भरा बड़ा ऑपरेशन, अथवा कीमोथेरेपी।",
    "sedationTypeEn": "General anesthesia with complete paralytic muscle relaxation and ECG synchronization.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia), मांसपेशियों को पूर्ण शिथिल करने की दवा और ईसीजी सिंक्रोनाइजेशन।"
  },
  "lung-mwa-early-nsclc": {
    "id": "lung-mwa-early-nsclc",
    "category": "Interventional Oncology",
    "nameEn": "Percutaneous Microwave Ablation of Early-Stage Non-Small Cell Lung Cancer (NSCLC)",
    "nameHi": "शुरुआती फेफड़े के कैंसर हेतु सीटी-निर्देशित माइक्रोवेव एब्लेशन (MWA - सुई द्वारा सूक्ष्म तरंगों से फेफड़े की गांठ को जलाना)",
    "indicationEn": "Medically inoperable early-stage NSCLC (T1a-T2a, <= 3-4 cm, Stage IA/IB) due to severe COPD, poor pulmonary reserve, or advanced age; or patient refusal of surgical lobectomy.",
    "indicationHi": "शुरुआती चरण का फेफड़े का कैंसर (3-4 सेमी तक) जहां सांस की बीमारी (COPD), दिल की कमजोरी या अधिक उम्र के कारण फेफड़े का ऑपरेशन (Lobectomy) संभव न हो।",
    "descriptionEn": "Under local anesthesia, conscious sedation, and real-time CT guidance, a thin microwave antenna is guided through the chest wall directly into the lung tumor. High-frequency microwave energy is delivered for 4-8 minutes to generate extreme heat (> 60-100°C), producing coagulative necrosis of the cancer with a clear circumferential parenchymal safety margin.",
    "descriptionHi": "छाती की त्वचा को सुन्न करके सीटी स्कैन की सीधी निगरानी में एक बारीक माइक्रोवेव एंटीना सुई को पसलियों के बीच से सीधे फेफड़े की गांठ में पहुंचाया जाता है। 4 से 8 मिनट तक माइक्रोवेव ऊर्जा छोड़कर गांठ को 60 से 100 डिग्री तापमान पर पूरी तरह जला दिया जाता है, जिससे कैंसर नष्ट हो जाता है और स्वस्थ फेफड़ा सुरक्षित रहता है।",
    "benefitsEn": [
      "Excellent local tumor control rate (85-95%) comparable to surgery in medically frail patients.",
      "Lung parenchymal preservation: No reduction in forced vital capacity or post-op ventilator dependence.",
      "Short hospital stay (usually 24-48 hours) without large thoracotomy incisions."
    ],
    "benefitsHi": [
      "कमजोर व बुजुर्ग मरीजों में भी बिना बड़े ऑपरेशन के कैंसर नष्ट होने की 85-95% सफलता दर।",
      "फेफड़े के बाकी स्वस्थ हिस्से को कोई नुकसान नहीं, जिससे सांस लेने की क्षमता बरकरार रहती है।",
      "छाती पर कोई बड़ा चीरा नहीं, दर्द बहुत कम और 1-2 दिन में अस्पताल से छुट्टी।"
    ],
    "specificRisksEn": [
      "Pneumothorax: Air leaking from punctured lung into chest cavity (30-50%; 10-15% require temporary chest tube placement).",
      "Hemoptysis: Coughing up blood post-procedure (usually mild and transient, < 1% severe).",
      "Pleural effusion or reactive pleuritis causing chest wall pain.",
      "Pulmonary hemorrhage or parenchymal hematoma around the ablation zone.",
      "Bronchopleural fistula or lung abscess (rare, < 1%)."
    ],
    "specificRisksHi": [
      "फेफड़े से हवा का रिसाव (Pneumothorax): 30-50% मरीजों में छाती में हवा भर जाना, जिसमें से 10-15% मरीजों में हवा निकालने हेतु छाती में पतली नली (चेस्ट ट्यूब) डालनी पड़ती है।",
      "खांसी में खून आना (हीमोप्टाइसिस): आमतौर पर थोड़ा थूक में खून आना जो 1-2 दिन में रुक जाता है।",
      "फेफड़े के पर्दे में पानी भरना या सीने में तेज दर्द।",
      "गांठ के चारों तरफ फेफड़े में खून का जमाव।",
      "फेफड़े में मवाद या सांस की नली का छेद (अत्यंत दुर्लभ, < 1%)।"
    ],
    "alternativesEn": "Surgical video-assisted thoracic surgery (VATS) lobectomy / segmentectomy, stereotactic body radiation therapy (SBRT / CyberKnife), cryoablation, or systemic therapy.",
    "alternativesHi": "दूरबीन द्वारा फेफड़े का ऑपरेशन (VATS Lobectomy), साइबरनाइफ / रेडिएशन थेरेपी (SBRT), क्रायोएब्लेशन, अथवा कीमोथेरेपी।",
    "sedationTypeEn": "Local anesthesia with monitored conscious sedation or general anesthesia with single-lung ventilation.",
    "sedationTypeHi": "छाती में स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक दवा अथवा आवश्यकतानुसार सामान्य बेहोशी।"
  },
  "lung-cryoablation-pleural-metastases": {
    "id": "lung-cryoablation-pleural-metastases",
    "category": "Interventional Oncology",
    "nameEn": "Percutaneous Lung Cryoablation for Pulmonary Metastases Adjacent to Pleura or Chest Wall",
    "nameHi": "फेफड़े व छाती के पर्दे के कैंसर हेतु क्रायोएब्लेशन (बर्फ जमाकर फेफड़े की गांठों का दर्द रहित खात्मा)",
    "indicationEn": "Oligometastatic pulmonary metastases situated abutted against the visceral/parietal pleura, pericardium, or chest wall where heat ablation causes severe pain and cryoablation is well tolerated.",
    "indicationHi": "फेफड़े की गांठें जो छाती की दीवार, पसली अथवा फेफड़े के पर्दे के पास हों, जहां गर्मी से जलाने पर असहनीय दर्द होता है और बर्फ जमाकर इलाज करना अत्यंत सुरक्षित व दर्द रहित रहता है।",
    "descriptionEn": "Under CT guidance, 1 to 3 cryoprobes are inserted through the chest wall into the peripheral lung metastasis. Pressurized Argon gas is cycled to freeze the tumor to -140°C, forming an ice-ball precisely visualized on CT. A dual freeze-thaw-freeze cycle destroys the cancer cells while minimizing severe pleural burning pain typical of thermal ablation.",
    "descriptionHi": "सीटी स्कैन की निगरानी में पसलियों के बीच से 1 से 3 बारीक क्रायो-सुइयां फेफड़े की गांठ में पहुंचाई जाती हैं। आर्गन गैस द्वारा गांठ को शून्य से 140 डिग्री नीचे (-140°C) तक जमाकर बर्फ का गोला बनाया जाता है। दो बार जमाने और पिघलाने की प्रक्रिया से कैंसर कोशिकाएं नष्ट हो जाती हैं और मरीज को गर्मी वाले दर्द से पूरी राहत मिलती है।",
    "benefitsEn": [
      "Significantly less intercostal pleural pain compared to radiofrequency or microwave ablation.",
      "Ice-ball boundary is clearly visible on CT, allowing preservation of adjacent chest wall muscles and ribs.",
      "High local tumor control for peripheral and subpleural metastases."
    ],
    "benefitsHi": [
      "आरएफए या माइक्रोवेव की तुलना में पसलियों और सीने में दर्द बिल्कुल न के बराबर।",
      "सीटी स्कैन पर बर्फ का घेरा साफ दिखता है, जिससे छाती की दीवार व पसलियों को नुकसान नहीं पहुंचता।",
      "फेफड़े के बाहरी हिस्से की गांठों का सुरक्षित व पक्का इलाज।"
    ],
    "specificRisksEn": [
      "Pneumothorax requiring chest tube drainage (25-40%).",
      "Hemothorax (bleeding into pleural cavity from chest wall vessel puncture).",
      "Hemoptysis (minor in 10-20%, rare severe).",
      "Cryo-induced chest wall numbness or transient intercostal nerve paresthesia.",
      "Pleural effusion or reactive fibrothorax."
    ],
    "specificRisksHi": [
      "फेफड़े से हवा का रिसाव (Pneumothorax - 25-40%), जिसके लिए छाती में पतली नली डालनी पड़ सकती है।",
      "फेफड़े के पर्दे में खून का रिसाव (Hemothorax)।",
      "खांसी में थोड़ा खून आना (10-20% मरीजों में)।",
      "पसलियों की नसों में अत्यधिक ठंडक लगने से छाती की त्वचा में सुन्नपन या झनझनाहट।",
      "फेफड़े के पर्दे में पानी भरना।"
    ],
    "alternativesEn": "Surgical wedge resection, stereotactic body radiation therapy (SBRT), microwave ablation, or systemic chemotherapy/immunotherapy.",
    "alternativesHi": "फेफड़े का ऑपरेशन, साइबरनाइफ / रेडिएशन (SBRT), माइक्रोवेव एब्लेशन, अथवा कीमोथेरेपी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation.",
    "sedationTypeHi": "छाती में स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
  },
  "renal-cryoablation-rcc-temperature-sensors": {
    "id": "renal-cryoablation-rcc-temperature-sensors",
    "category": "Interventional Oncology",
    "nameEn": "Renal Cell Carcinoma (RCC) Percutaneous Cryoablation with Real-Time Temperature Sensors",
    "nameHi": "गुर्दे (किडनी) के कैंसर हेतु क्रायोएब्लेशन (RCC - तापमान सेंसर व बर्फ द्वारा गुर्दे की रसोली का सुरक्षित विनाश)",
    "indicationEn": "Small renal mass (cT1a RCC <= 4 cm), solitary functioning kidney, bilateral RCC, hereditary RCC (von Hippel-Lindau), or high surgical risk for partial nephrectomy.",
    "indicationHi": "गुर्दे का छोटा कैंसर (T1a RCC <= 4 सेमी), केवल एक ही किडनी होना, दोनों किडनियों में गांठें, अथवा जहां किडनी काटने का ऑपरेशन (Nephrectomy) अत्यधिक जोखिम भरा हो।",
    "descriptionEn": "Under CT fluoroscopy guidance and local anesthesia, multiple cryoprobes are inserted into the renal tumor. A thermocouple sensor needle is placed at the critical margin adjacent to the renal pelvis, ureter, or colon. Argon gas delivers dual 10-minute freeze cycles reaching -140°C. Real-time temperature sensors and CT imaging verify that the lethal isotherm (-20°C to -40°C) covers the tumor while shielding critical structures.",
    "descriptionHi": "कमर के रास्ते सीटी स्कैन की निगरानी में बारीक क्रायो-सुइयां गुर्दे की रसोली में डाली जाती हैं। पेशाब की नली और आंत की सुरक्षा हेतु वहां तापमान मापने वाली सुई भी लगाई जाती है। आर्गन गैस से 10-10 मिनट के दो फ्रीज चक्रों द्वारा रसोली को शून्य से 140 डिग्री नीचे जमाया जाता है। तापमान सेंसर यह सुनिश्चित करता है कि कैंसर पूरी तरह जम जाए और आसपास के अंग सुरक्षित रहें।",
    "benefitsEn": [
      "Maximum nephron preservation: Protects renal function and avoids long-term dialysis in high-risk patients.",
      "Oncological cure rates (95-98%) comparable to open or laparoscopic partial nephrectomy for T1a tumors.",
      "Minimal blood loss and outpatient or short overnight daycare stay."
    ],
    "benefitsHi": [
      "गुर्दे की कार्यक्षमता पूरी तरह सुरक्षित रहती है, जिससे भविष्य में डायलिसिस का खतरा नहीं होता।",
      "4 सेमी तक की गांठों में दूरबीन वाले ऑपरेशन जितनी ही 95-98% अचूक सफलता।",
      "रक्तस्राव न के बराबर और केवल 1 दिन में अस्पताल से छुट्टी।"
    ],
    "specificRisksEn": [
      "Perirenal hematoma or retroperitoneal hemorrhage (usually self-limiting, rarely requiring embolization).",
      "Hematuria (blood in urine for 24-48 hours).",
      "Cryo-injury to ureter or renal collecting system causing stricture or urine leak.",
      "Paresthesia or motor weakness in flank/lumbar nerves (temporary flank numbness).",
      "Pneumothorax if accessing upper pole renal lesions."
    ],
    "specificRisksHi": [
      "गुर्दे के आसपास खून का थक्का (Hematoma) जमना।",
      "पेशाब में 1-2 दिन तक खून आना (Hematuria)।",
      "पेशाब की नली में अत्यधिक ठंडक से सिकुड़न या पेशाब का रिसाव।",
      "कमर की नसों पर असर से कुछ हफ्तों तक कमर में सुन्नपन या भारीपन।",
      "ऊपरी हिस्से की गांठ में फेफड़े के निचले पर्दे में हवा का हल्का रिसाव।"
    ],
    "alternativesEn": "Laparoscopic or robotic partial nephrectomy, microwave ablation, active surveillance (for frail elderly patients), or radical nephrectomy.",
    "alternativesHi": "दूरबीन अथवा रोबोट द्वारा गुर्दे का ऑपरेशन (Partial Nephrectomy), माइक्रोवेव एब्लेशन, अथवा पूरी किडनी निकालना।",
    "sedationTypeEn": "Local anesthesia with monitored conscious sedation or light general anesthesia.",
    "sedationTypeHi": "कमर में स्थानीय सुन्नता (Local Anesthesia) तथा नस द्वारा दर्द निवारक व शामक दवा।"
  },
  "renal-mwa-t1a-tumors": {
    "id": "renal-mwa-t1a-tumors",
    "category": "Interventional Oncology",
    "nameEn": "Renal Microwave Ablation (MWA) for T1a Renal Parenchymal Tumors",
    "nameHi": "गुर्दे की गांठ हेतु माइक्रोवेव एब्लेशन (MWA - सूक्ष्म तरंगों की गर्मी से गुर्दे के ट्यूमर को जलाना)",
    "indicationEn": "Small exophytic or parenchymal renal tumors (<= 4 cm) in patients with significant cardiovascular comorbidities, elderly patients, or solitary kidney.",
    "indicationHi": "गुर्दे की 4 सेमी तक की गांठें, विशेषकर उन मरीजों में जिनकी उम्र अधिक हो, दिल की बीमारी हो अथवा जिन्हें ऑपरेशन का जोखिम न दिया जा सकता हो।",
    "descriptionEn": "Under real-time CT guidance, a single water-cooled microwave antenna is guided into the renal tumor. Microwave energy (60-80W) is applied for 3 to 6 minutes, generating fast, intense thermal destruction of the tumor with a 5 mm parenchymal margin, followed by antenna tract ablation.",
    "descriptionHi": "कमर से सीटी स्कैन की निगरानी में एक विशेष ठंडे पानी वाला माइक्रोवेव एंटीना सीधे गुर्दे की रसोली में डाला जाता है। 3 से 6 मिनट तक उच्च आवृत्ति की माइक्रोवेव तरंगें छोड़कर अत्यधिक गर्मी से कैंसर की गांठ को पूरी तरह जलाकर नष्ट कर दिया जाता है।",
    "benefitsEn": [
      "Fast procedure time (often single antenna, < 10 min ablation time).",
      "Preserves global renal function while eradicating the malignant tumor.",
      "No incisions, low blood loss, and same-day or 24-hour discharge."
    ],
    "benefitsHi": [
      "अत्यंत कम समय में (केवल 3 से 6 मिनट की हीटिंग) संपूर्ण उपचार।",
      "किडनी के बाकी स्वस्थ हिस्से को बचाकर कैंसर का खात्मा।",
      "बिना किसी चीरे के तुरंत राहत और 24 घंटे में छुट्टी।"
    ],
    "specificRisksEn": [
      "Thermal injury to renal pelvis or ureter resulting in urine leak or hydronephrosis.",
      "Perinephric hematoma from renal vascular puncture.",
      "Hematuria (blood in urine).",
      "Bowel thermal injury (if descending/ascending colon is adjacent without hydrodissection).",
      "Post-ablation flank pain and low-grade fever."
    ],
    "specificRisksHi": [
      "गर्मी के कारण गुर्दे की पेशाब थैली या नली में चोट जिससे पेशाब का रिसाव हो सकता है।",
      "गुर्दे के आसपास खून का थक्का जमना।",
      "पेशाब में खून आना।",
      "पास की आंत में गर्मी से जलने की चोट (यदि पहले से दूरी न बनाई जाए)।",
      "कमर में दर्द और हल्का बुखार।"
    ],
    "alternativesEn": "Renal cryoablation, robotic partial nephrectomy, radiofrequency ablation (RFA), or active surveillance.",
    "alternativesHi": "गुर्दे का क्रायोएब्लेशन (बर्फ से जमाना), रोबोटिक ऑपरेशन, आरएफए, अथवा केवल नियमित निगरानी।",
    "sedationTypeEn": "Local anesthesia with deep conscious sedation.",
    "sedationTypeHi": "कमर में स्थानीय सुन्नता और नस द्वारा गहरी शामक दवा।"
  },
  "renal-angioinfarction-ethanol-aml": {
    "id": "renal-angioinfarction-ethanol-aml",
    "category": "Interventional Oncology",
    "nameEn": "Superselective Renal Angio-Infarction with Absolute Ethanol / Particles for Giant Angiomyolipoma (AML)",
    "nameHi": "गुर्दे की रसौली हेतु सुपर-सिलेक्टिव एंजियो-इन्फार्कशन (किडनी की एंजियोमायोलिपोमा गांठ में एथेनॉल व कणों द्वारा नस बंदी)",
    "indicationEn": "Giant renal angiomyolipoma (AML > 4 cm), aneurysm formation > 5 mm within AML carrying high risk of spontaneous life-threatening retroperitoneal rupture (Wunderlich syndrome), or acute hematuria.",
    "indicationHi": "गुर्दे की 4 सेमी से बड़ी एंजियोमायोलिपोमा (AML) रसौली, रसोली में 5 मिमी से बड़े गुब्बारे (Aneurysm) बनना जिससे अचानक फटने और जानलेवा आंतरिक रक्तस्राव का खतरा हो।",
    "descriptionEn": "Under local anesthesia and fluoroscopic roadmapping, a microcatheter is guided superselectively into the small arterial branches supplying the angiomyolipoma. Absolute ethanol mixed with Lipiodol, followed by PVA particles or microcoils, is carefully injected to permanently destroy the abnormal vascular bed and shrink the tumor while sparing all surrounding normal renal tissue.",
    "descriptionHi": "जांघ की धमनी से एक अति-बारीक कैथेटर सीधे गुर्दे की रसोली को खून देने वाली नसों में ले जाया जाता है। वहां एब्सोल्यूट अल्कोहल (Ethanol) और लिपिओडोल का मिश्रण तथा विशेष कण (PVA Particles/Coils) छोड़े जाते हैं, जिससे रसोली की खराब नसें स्थायी रूप से बंद हो जाती हैं और रसोली सूखकर सिकुड़ जाती है जबकि स्वस्थ गुर्दा सुरक्षित बचता है।",
    "benefitsEn": [
      "Completely eliminates the risk of catastrophic spontaneous retroperitoneal hemorrhage.",
      "Maximally preserves normal renal parenchymal tissue compared to partial or total nephrectomy.",
      "Marked shrinkage of tumor bulk over 3 to 12 months."
    ],
    "benefitsHi": [
      "रसोली के अचानक फटने और पेट में जानलेवा खून बहने के खतरे का 100% खात्मा।",
      "किडनी को काटने या निकालने से बचाव और स्वस्थ गुर्दे का पूर्ण संरक्षण।",
      "कुछ ही महीनों में रसोली का आकार बहुत छोटा हो जाना।"
    ],
    "specificRisksEn": [
      "Post-Embolization Syndrome: Severe flank pain, fever, nausea, vomiting for 48-72 hours (expected in > 80%).",
      "Non-target ethanol reflux into main renal artery causing partial renal infarction or acute kidney injury.",
      "Punctured access site pseudoaneurysm or groin hematoma.",
      "Liquefaction necrosis of tumor forming a perirenal abscess requiring drainage.",
      "Need for repeat embolization if collaterals develop over time."
    ],
    "specificRisksHi": [
      "पोस्ट-एम्बोलाइजेशन सिंड्रोम: कमर में तेज दर्द, बुखार, उल्टी और जी मिचलाना (80% से अधिक मरीजों में सामान्य)।",
      "दवा का मुख्य गुर्दे की नस में बह जाना जिससे स्वस्थ गुर्दे को नुकसान पहुंच सकता है।",
      "जांघ में सुई लगने की जगह पर खून का थक्का जमना।",
      "रसोली गलने के कारण मवाद या फोड़ा बनना जिसके लिए नली डालनी पड़ सकती है।",
      "भविष्य में नई नसें बनने पर दोबारा प्रक्रिया की आवश्यकता की संभावना।"
    ],
    "alternativesEn": "Partial nephrectomy (surgical removal of tumor), radical nephrectomy (complete kidney removal), mTOR inhibitors (Everolimus), or conservative observation.",
    "alternativesHi": "गुर्दा निकालने का ऑपरेशन (Nephrectomy), अंग्रेजी दवाइयां (Everolimus), अथवा केवल निगरानी रखना।",
    "sedationTypeEn": "Local anesthesia with intravenous analgesia and conscious sedation.",
    "sedationTypeHi": "जांघ में स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा तेज दर्द निवारक व शामक दवा।"
  },
  "total-renal-arterial-embolization": {
    "id": "total-renal-arterial-embolization",
    "category": "Interventional Oncology",
    "nameEn": "Total Renal Arterial Embolization for End-Stage Renal Tumor Palliation / Gross Hematuria",
    "nameHi": "गुर्दे की मुख्य धमनी का संपूर्ण एम्बोलाइजेशन (लिवर/किडनी के लाइलाज कैंसर में गंभीर रक्तस्राव रोकने हेतु पूरी नस बंदी)",
    "indicationEn": "Intractable gross hematuria, severe refractory flank pain, or paraneoplastic symptoms from unresectable advanced renal cell carcinoma; or pre-operative embolization before difficult nephrectomy.",
    "indicationHi": "गुर्दे के अंतिम चरण के कैंसर के कारण पेशाब में अत्यधिक जानलेवा खून आना, असहनीय कमर दर्द, अथवा अत्यधिक बड़ी रसोली के ऑपरेशन से पहले खून का बहाव रोकने हेतु।",
    "descriptionEn": "Under fluoroscopic guidance, a vascular sheath is placed in the femoral artery and a catheter is advanced into the main renal artery of the diseased kidney. Embolic agents including absolute ethanol, calibrated microspheres, and large metallic embolization coils or vascular plugs are deployed to completely shut down all arterial blood flow into the kidney.",
    "descriptionHi": "जांघ की धमनी से कैथेटर को सीधे बीमार गुर्दे की मुख्य धमनी (Main Renal Artery) में ले जाया जाता है। वहां एब्सोल्यूट अल्कोहल, विशेष कण और धातु के छल्ले (Coils/Vascular Plugs) डालकर गुर्दे की पूरी रक्त आपूर्ति को स्थायी रूप से बंद कर दिया जाता है, जिससे पेशाब में खून आना तुरंत रुक जाता है और कैंसर की गांठ सिकुड़ जाती है।",
    "benefitsEn": [
      "Immediate, life-saving cessation of massive gross hematuria and recurrent blood transfusions.",
      "Dramatic relief of intractable cancer-related flank pain.",
      "Significantly reduces surgical blood loss and operative time if preceding palliative nephrectomy."
    ],
    "benefitsHi": [
      "पेशाब में जानलेवा खून बहने पर तुरंत रोक और बार-बार खून चढ़ाने की जरूरत से मुक्ति।",
      "कैंसर के असहनीय कमर दर्द से स्थाई राहत।",
      "आगे ऑपरेशन होने की स्थिति में ऑपरेशन के दौरान भारी रक्तस्राव का जोखिम खत्म होना।"
    ],
    "specificRisksEn": [
      "Post-infarction syndrome: Severe flank pain, high fever, nausea, and vomiting lasting 3-5 days (expected in nearly all patients).",
      "Irreversible complete loss of function of the embolized kidney (intended outcome).",
      "Non-target coil migration or particle reflux into aorta or mesenteric vessels.",
      "Psoas muscle or colonic ischemia.",
      "Groin access site hematoma or pseudoaneurysm."
    ],
    "specificRisksHi": [
      "पोस्ट-इन्फार्कशन सिंड्रोम: 3 से 5 दिन तक तेज कमर दर्द, तेज बुखार और उल्टी (लगभग सभी मरीजों में संभावित)।",
      "उस गुर्दे का पूरी तरह काम करना बंद हो जाना (यह प्रक्रिया का तय लक्ष्य है)।",
      "धातु के छल्ले का खिसककर महाधमनी या पेट की अन्य नसों में चले जाना।",
      "कमर की मांसपेशियों या आंत में खून की कमी।",
      "जांघ में सुई लगने की जगह पर खून का थक्का जमना।"
    ],
    "alternativesEn": "Emergency palliative open nephrectomy, radiation therapy (hemostatic SBRT), continuous bladder irrigation, or best supportive comfort care.",
    "alternativesHi": "आपातकालीन बड़ा ऑपरेशन (Nephrectomy), ब्लीडिंग रोकने हेतु रेडिएशन, अथवा केवल लक्षण निवारक देखभाल।",
    "sedationTypeEn": "Local anesthesia with patient-controlled analgesia (PCA) or IV opioid conscious sedation.",
    "sedationTypeHi": "जांघ में स्थानीय सुन्नता और नस द्वारा तेज दर्द निवारक (Opioids) व शामक दवाइयां।"
  },
  "adrenal-mwa-recurrent-metastases": {
    "id": "adrenal-mwa-recurrent-metastases",
    "category": "Interventional Oncology",
    "nameEn": "Percutaneous Microwave Ablation for Recurrent Adrenal Metastases",
    "nameHi": "एड्रीनल ग्रंथि (अधिवृक्क ग्रंथि) की कैंसर गांठ हेतु माइक्रोवेव एब्लेशन (MWA द्वारा एड्रीनल ट्यूमर को जलाना)",
    "indicationEn": "Oligometastatic adrenal gland recurrence (<= 4 cm) from lung, renal, or melanoma primaries, in surgical non-candidates or following prior contralateral adrenalectomy.",
    "indicationHi": "फेफड़े, गुर्दे अथवा त्वचा के कैंसर से एड्रीनल ग्रंथि में फैली 4 सेमी तक की गांठें, जहां ऑपरेशन संभव न हो अथवा दूसरी एड्रीनल ग्रंथि पहले से निकाली जा चुकी हो।",
    "descriptionEn": "Under CT fluoroscopy guidance and invasive arterial blood pressure monitoring, hydrodissection with 5% Dextrose is performed to displace the IVC, bowel, and liver away from the adrenal gland. A water-cooled microwave antenna is guided into the adrenal metastasis and thermal energy is delivered to destroy the tumor while anesthesiologists manage potential catecholamine-induced hypertensive crisis.",
    "descriptionHi": "सीटी स्कैन और ब्लड प्रेशर की निरंतर निगरानी में ग्लूकोज का पानी डालकर एड्रीनल ग्रंथि को आंतों और मुख्य नसों से अलग किया जाता है। फिर माइक्रोवेव सुई डालकर गांठ को गर्मी से जलाया जाता है। प्रक्रिया के दौरान एड्रीनल हॉर्मोन निकलने से ब्लड प्रेशर बढ़ने पर तुरंत दवाइयां देकर उसे नियंत्रित रखा जाता है।",
    "benefitsEn": [
      "Effective local tumor control and eradication of solitary adrenal metastases.",
      "Preserves adrenal cortical function, avoiding steroid-dependence if a rim of normal cortex remains.",
      "Avoids morbid retroperitoneal open or laparoscopic adrenal surgery."
    ],
    "benefitsHi": [
      "एड्रीनल ग्रंथि में कैंसर के फैलाव को पूरी तरह नष्ट करने में सक्षम।",
      "ग्रंथि के सामान्य हिस्से को बचाकर जीवन भर स्टेरॉयड दवाइयों पर निर्भरता से बचाव।",
      "पेट के बड़े व जटिल ऑपरेशन से पूर्ण बचाव।"
    ],
    "specificRisksEn": [
      "Severe hypertensive crisis during ablation due to catecholamine release (systolic BP > 220 mmHg requiring IV vasodilators).",
      "Pneumothorax or hemothorax during trans-diaphragmatic needle path.",
      "Primary adrenal insufficiency (Addisonian crisis) requiring lifelong hormone replacement.",
      "Retroperitoneal hematoma or IVC/renal vein injury.",
      "Thermal injury to adjacent colon, kidney, or pancreas tail."
    ],
    "specificRisksHi": [
      "गांठ जलने के समय हॉर्मोन निकलने से अचानक ब्लड प्रेशर का खतरनाक स्तर तक बढ़ना (जिसके लिए विशेष इंजेक्शन दिए जाते हैं)।",
      "फेफड़े के निचले पर्दे में हवा या खून का रिसाव।",
      "एड्रीनल ग्रंथि के कमजोर होने से भविष्य में स्टेरॉयड गोलियों की आवश्यकता होना।",
      "कमर के पीछे खून का थक्का या नस में चोट।",
      "पास की आंत, गुर्दे या पैंक्रियाज में जलने की चोट।"
    ],
    "alternativesEn": "Laparoscopic or robotic adrenalectomy, stereotactic body radiation therapy (SBRT), systemic targeted therapy/immunotherapy, or cryoablation.",
    "alternativesHi": "दूरबीन द्वारा एड्रीनल निकालना (Adrenalectomy), साइबरनाइफ / रेडिएशन (SBRT), इम्यूनोथेरेपी, अथवा बर्फ से जमाना।",
    "sedationTypeEn": "General anesthesia with continuous invasive arterial line blood pressure monitoring and vasodilator infusions.",
    "sedationTypeHi": "धमनी में बीपी की सीधी निगरानी वाली नली (Arterial Line) और ब्लड प्रेशर नियंत्रक दवाओं के साथ पूर्ण बेहोशी (General Anesthesia)।"
  },
  "adrenal-vein-sampling-acth": {
    "id": "adrenal-vein-sampling-acth",
    "category": "Interventional Oncology",
    "nameEn": "Adrenal Vein Sampling (AVS) with ACTH Stimulation for Primary Aldosteronism (Conn's Syndrome)",
    "nameHi": "एड्रीनल वेन सैंपलिंग (AVS - दोनों एड्रीनल ग्रंथियों से हॉर्मोन की रक्त जांच हेतु कैथेटर प्रक्रिया)",
    "indicationEn": "Confirmed primary aldosteronism to distinguish between unilateral aldosterone-producing adenoma (surgical candidate) and bilateral adrenal hyperplasia (medical therapy).",
    "indicationHi": "प्राइमरी एल्डोस्टेरोनिज्म (कोन्स सिंड्रोम) के कारण अत्यधिक ब्लड प्रेशर एवं पोटेशियम की कमी; यह तय करने हेतु कि केवल एक तरफ की गांठ जिम्मेदार है (ऑपरेशन योग्य) या दोनों तरफ की ग्रंथियां (दवाइयों द्वारा इलाज)।",
    "descriptionEn": "Under local anesthesia and fluoroscopy, thin curved catheters are inserted through the femoral veins in both groins and advanced into the tiny right and left adrenal veins. Blood samples are drawn before and during continuous intravenous ACTH (Cosyntropin) stimulation to measure cortisol and aldosterone levels and calculate the lateralization index.",
    "descriptionHi": "जांघ की दोनों नसों में सुन्न करके एक्स-रे की निगरानी में बारीक कैथेटर दोनों एड्रीनल ग्रंथियों की सूक्ष्म नसों में डाले जाते हैं। हॉर्मोन (ACTH) का इंजेक्शन देकर दोनों तरफ से और शरीर की मुख्य नस से खून के नमूने लिए जाते हैं, जिससे यह पक्का हो सके कि कौन सी ग्रंथि अधिक हॉर्मोन बना रही है।",
    "benefitsEn": [
      "Gold standard diagnostic procedure: Prevents unnecessary surgical adrenalectomy if disease is bilateral.",
      "Ensures curative surgical excision if disease is confirmed unilateral (cures severe hypertension).",
      "Avoids lifelong high-dose antihypertensive medications."
    ],
    "benefitsHi": [
      "अचूक व सर्वश्रेष्ठ जांच: यदि दोनों तरफ बीमारी हो तो व्यर्थ के बड़े ऑपरेशन से बचाती है।",
      "यदि केवल एक तरफ बीमारी हो तो सटीक ऑपरेशन द्वारा गंभीर ब्लड प्रेशर को जड़ से ठीक करने का रास्ता खोलती है।",
      "जीवन भर ढेर सारी दवाइयों के सेवन से मुक्ति।"
    ],
    "specificRisksEn": [
      "Adrenal vein rupture or thrombosis during contrast injection (causing severe flank pain and adrenal infarction).",
      "Technical failure: Inability to successfully cannulate the tiny right adrenal vein (5-10% failure rate).",
      "Groin puncture site hematoma.",
      "Vasovagal reaction during venous manipulation.",
      "Allergic reaction to contrast dye."
    ],
    "specificRisksHi": [
      "एड्रीनल की अत्यंत बारीक नस का फटना या उसमें खून का थक्का जमना, जिससे कमर में तेज दर्द हो सकता है।",
      "दाहिनी एड्रीनल नस की जटिल बनावट के कारण कैथेटर न पहुंच पाना और जांच अधूरी रहना (5-10% संभावना)।",
      "जांघ में सुई के स्थान पर खून का थक्का जमना।",
      "चक्कर आना या ब्लड प्रेशर अचानक कम होना।",
      "कंट्रास्ट डाई से एलर्जी।"
    ],
    "alternativesEn": "Empirical medical management with mineralocorticoid receptor antagonists (Spironolactone / Eplerenone) or adrenal CT/MRI alone (often misleading in up to 40% of cases).",
    "alternativesHi": "बिना जांच के स्पाइरोनोलैक्टोन (Spironolactone) की गोलियां खाना, अथवा केवल सीटी स्कैन पर भरोसा करना (जो 40% मामलों में गलत हो सकता है)।",
    "sedationTypeEn": "Local anesthesia at bilateral femoral venous puncture sites with minimal conscious sedation.",
    "sedationTypeHi": "जांघों में स्थानीय सुन्नता (Local Anesthesia) और बहुत ही हल्की शामक दवा (ताकि हॉर्मोन स्तर पर असर न पड़े)।"
  },
  "osteoid-osteoma-ct-guided-rfa": {
    "id": "osteoid-osteoma-ct-guided-rfa",
    "category": "Interventional Oncology",
    "nameEn": "Osteoid Osteoma CT-Guided Percutaneous Radiofrequency Ablation (RFA)",
    "nameHi": "हड्डी के ऑस्टियोइड ऑस्टियोमा हेतु सीटी-निर्देशित रेडियोफ्रीक्वेंसी एब्लेशन (RFA - हड्डी की दर्दनाक गांठ को सुई द्वारा जलाना)",
    "indicationEn": "Symptomatic osteoid osteoma of long bones (femur, tibia, humerus) or spine with characteristic nocturnal bone pain relieved by NSAIDs.",
    "indicationHi": "हड्डी में ऑस्टियोइड ऑस्टियोमा की दर्दनाक गांठ, जिसमें रात में अत्यधिक हड्डी का दर्द होता है और पेनकिलर खाने से अस्थायी राहत मिलती है।",
    "descriptionEn": "Under CT guidance and general or spinal anesthesia, a bone biopsy drill/trocar is driven through the dense bone cortex directly into the vascular nidus of the tumor. An RFA electrode is inserted through the cannula into the nidus. Radiofrequency thermal energy is applied at 90°C for 4 to 6 minutes to thermally destroy the nidus and permanently deactivate pain-producing prostaglandins.",
    "descriptionHi": "सीटी स्कैन की निगरानी में हड्डी को सुन्न करके एक बारीक बोन ड्रिल/सुई द्वारा हड्डी के अंदर स्थित गांठ (Nidus) में छेद किया जाता है। फिर एक विशेष आर.एफ.ए. सुई डालकर 90 डिग्री तापमान पर 4 से 6 मिनट तक गर्म किया जाता है, जिससे दर्द पैदा करने वाली गांठ पूरी तरह जल जाती है और दर्द हमेशा के लिए खत्म हो जाता है।",
    "benefitsEn": [
      "Instant and permanent pain relief (success rate > 90-95%) usually within 24-48 hours.",
      "Preserves bone structural integrity: No open bone guttering, bone grafting, or internal fixation plates needed.",
      "Rapid return to weight-bearing and normal sports activities within 1-2 weeks."
    ],
    "benefitsHi": [
      "24 से 48 घंटे में हड्डी के असहनीय दर्द से हमेशा के लिए 90-95% अचूक मुक्ति।",
      "हड्डी को काटने, खुरचने या प्लेट लगाने की बिल्कुल जरूरत नहीं पड़ती; हड्डी मजबूत बनी रहती है।",
      "1 से 2 सप्ताह में मरीज सामान्य चलने-फिरने और खेलकूद में लौट सकता है।"
    ],
    "specificRisksEn": [
      "Thermal injury to adjacent skin (burn) or peripheral motor/sensory nerves.",
      "Secondary bone fracture through the drill hole if excessive weight bearing occurs prematurely.",
      "Osteomyelitis or bone infection (rare, < 1%).",
      "Transient increase in localized bone pain in the first 24 hours.",
      "Incomplete ablation requiring repeat procedure (< 5%)."
    ],
    "specificRisksHi": [
      "हड्डी के पास की त्वचा या नस (Nerve) में जलने की चोट।",
      "प्रक्रिया के तुरंत बाद अधिक वजन डालने पर ड्रिल किए गए छेद से हड्डी में फ्रैक्चर का जोखिम।",
      "हड्डी में संक्रमण (Osteomyelitis - अत्यंत दुर्लभ, < 1%)।",
      "शुरुआती 24 घंटे में हल्का दर्द बढ़ना।",
      "गांठ का कुछ हिस्सा बचने पर दोबारा प्रक्रिया की आवश्यकता (5% से कम)।"
    ],
    "alternativesEn": "Open surgical en bloc resection / curettage with internal fixation, CT-guided percutaneous cryoablation, laser ablation, or long-term high-dose NSAID medical therapy.",
    "alternativesHi": "हड्डी का खुला ऑपरेशन (Curettage/Excision), लेजर या बर्फ से जमाना, अथवा लगातार लंबे समय तक दर्द निवारक दवाइयां खाना।",
    "sedationTypeEn": "General anesthesia or regional spinal/epidural anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "cryo-cementoplasty-osseous-metastases": {
    "id": "cryo-cementoplasty-osseous-metastases",
    "category": "Interventional Oncology",
    "nameEn": "Painful Osseous Metastases Percutaneous Cryoablation Combined with Cementoplasty (Cryo-Cementoplasty)",
    "nameHi": "हड्डी के कैंसर व फैलाव हेतु क्रायो-सीमेंटोप्लास्टी (बर्फ द्वारा रसोली का विनाश एवं हड्डी में विशेष सीमेंट भरना)",
    "indicationEn": "Severe intractable bone pain and mechanical instability from osteolytic metastases in pelvis, sacrum, acetabulum, or long bones refractory to radiation or chemotherapy.",
    "indicationHi": "कैंसर के कारण कूल्हे, रीढ़ या हाथ-पैर की हड्डी गलने, कमजोर होने और असहनीय दर्द होने पर, जहां रेडिएशन या कीमोथेरेपी से दर्द ठीक न हो रहा हो।",
    "descriptionEn": "Under CT fluoroscopy guidance, cryoprobes are inserted into the bone tumor to freeze and ablate the malignancy, eradicating the sensory periosteal nerve supply. Following active probe thawing, bone cement cannulas are placed and high-viscosity polymethylmethacrylate (PMMA) bone cement is injected to consolidate and mechanically stabilize the eroded bone.",
    "descriptionHi": "सीटी स्कैन की निगरानी में बारीक क्रायो-सुइयां हड्डी की कैंसर गांठ में डालकर बर्फ जमाकर कैंसर कोशिकाओं और दर्द वाली नसों को नष्ट किया जाता है। इसके बाद विशेष नली द्वारा हड्डी के खोखले हिस्से में चिकित्सीय सीमेंट (PMMA Bone Cement) भरा जाता है, जिससे हड्डी तुरंत मजबूत हो जाती है और टूटने से बच जाती है।",
    "benefitsEn": [
      "Immediate, dual-action relief: Thermal nerve ablation stops pain, while cement restores bone structural strength.",
      "Prevents catastrophic pathological fractures in weight-bearing bones (acetabulum, pelvic ring).",
      "Permits early ambulation and improves quality of life without open orthopedic plate fixation."
    ],
    "benefitsHi": [
      "दोहरा असर: बर्फ जमाने से असहनीय दर्द तुरंत खत्म होता है और सीमेंट भरने से हड्डी को ताकत मिलती है।",
      "हड्डी के अचानक टूटने (Pathological Fracture) के खतरे से बचाव।",
      "बिना किसी बड़े ऑर्थोपेडिक ऑपरेशन या प्लेट लगाए मरीज तुरंत चलने-फिरने लगता है।"
    ],
    "specificRisksEn": [
      "Cement extravasation (leakage) into adjacent joints, soft tissues, or spinal canal.",
      "Venous cement embolism to lungs causing dyspnea or hypoxia (monitored closely).",
      "Transient blood pressure drop during cement curing (monomer toxicity).",
      "Peripheral nerve thermal injury or paresthesia.",
      "Local hematoma or infection."
    ],
    "specificRisksHi": [
      "सीमेंट का जोड़, पास की मांसपेशियों या नसों में लीक होना।",
      "सीमेंट के सूक्ष्म कणों का खून की नली द्वारा फेफड़ों में जाने का दुर्लभ जोखिम।",
      "सीमेंट जमते समय ब्लड प्रेशर में अस्थायी गिरावट।",
      "कमर या पैर की नस में खिंचाव या सुन्नपन।",
      "हड्डी के आसपास खून जमना या संक्रमण।"
    ],
    "alternativesEn": "External beam radiation therapy alone, open orthopedic resection and reconstruction with prosthetic hardware, systemic bisphosphonates/analgesics, or pure cementoplasty without ablation.",
    "alternativesHi": "केवल रेडिएशन सिकाई, हड्डी का बड़ा ऑपरेशन व रॉड/प्लेट लगाना, केवल पेनकिलर गोलियां, अथवा बिना बर्फ जमाए केवल सीमेंट भरना।",
    "sedationTypeEn": "General anesthesia or deep conscious sedation with local infiltration.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा नस द्वारा गहरी शामक व दर्द निवारक दवा।"
  },
  "vertebroplasty-kyphoplasty-neoplastic-collapse": {
    "id": "vertebroplasty-kyphoplasty-neoplastic-collapse",
    "category": "Interventional Oncology",
    "nameEn": "Percutaneous Vertebroplasty / Balloon Kyphoplasty for Neoplastic Vertebral Collapse",
    "nameHi": "रीढ़ की हड्डी के कैंसर हेतु पर्क्यूटेनियस वर्टिब्रोप्लास्टी / बैलून काइफोप्लास्टी (रीढ़ के मनके में बैलून फुलाकर सीमेंट भरना)",
    "indicationEn": "Severe intractable back pain and vertebral collapse secondary to myeloma, lymphoma, or metastatic carcinoma, with intact posterior vertebral body wall and no cord compression.",
    "indicationHi": "मल्टीपल मायलोमा या कैंसर के कारण रीढ़ की हड्डी के मनके का दबना, धंसना और असहनीय पीठ दर्द, जिससे मरीज का उठना-बैठना बंद हो गया हो।",
    "descriptionEn": "Under local anesthesia, conscious sedation, and high-resolution fluoroscopy/CT guidance, a hollow cannula is placed transpedicularly into the collapsed vertebral body. In kyphoplasty, an inflatable bone tamp balloon is expanded to restore vertebral height and create a cavity. Medical-grade PMMA bone cement is injected to consolidate and stabilize the fractured vertebra.",
    "descriptionHi": "पीठ में सुन्न करके एक्स-रे और सीटी की निगरानी में एक पतली नली रीढ़ के मनके में डाली जाती है। काइफोप्लास्टी में एक छोटा बैलून फुलाकर दबे हुए मनके को वापस ऊपर उठाया जाता है और खाली जगह बनाई जाती है। फिर उसमें विशेष बोन सीमेंट भर दिया जाता है, जो 15 मिनट में पत्थर जैसा सख्त होकर रीढ़ को तुरंत सहारा देता है।",
    "benefitsEn": [
      "Dramatic, near-instant relief of disabling back pain in 85-95% of patients within hours.",
      "Restores vertebral body height and corrects spinal kyphotic deformity.",
      "Enables immediate weight bearing, walking, and prevents prolonged bed-bound complications."
    ],
    "benefitsHi": [
      "प्रक्रिया के कुछ ही घंटों में रीढ़ के असहनीय दर्द से 85-95% मरीजों को तुरंत राहत।",
      "दबे हुए मनके की ऊंचाई दोबारा बहाल होना और कूबड़ निकलने से बचाव।",
      "मरीज उसी दिन अपने पैरों पर चलने-फिरने लगता है और बिस्तर पर पड़े रहने की तकलीफों से बच जाता है।"
    ],
    "specificRisksEn": [
      "Cement extravasation posteriorly into spinal canal or neural foramen causing spinal cord or nerve root compression (rarely requiring emergent surgical decompression).",
      "Venous cement embolization to pulmonary arteries (monitored by fluoroscopy).",
      "Pedicle fracture or cortical blowout.",
      "Adjacent segment vertebral fractures over subsequent months.",
      "Infection or localized hematoma."
    ],
    "specificRisksHi": [
      "सीमेंट का रीढ़ की नस (Spinal Cord) की तरफ लीक होना जिससे पैरों में कमजोरी आ सकती है (अत्यंत सावधानी बरती जाती है)।",
      "सीमेंट के कणों का फेफड़ों की नस में जाने का दुर्लभ जोखिम।",
      "रीढ़ की हड्डी में अतिरिक्त दरार आना।",
      "भविष्य में ऊपर या नीचे वाले कमजोर मनके में फ्रैक्चर होना।",
      "संक्रमण या खून का थक्का।"
    ],
    "alternativesEn": "Conservative bed rest, heavy opioid narcotics, rigid external spinal bracing, surgical open spinal decompression and pedicle screw instrumentation, or radiation therapy alone.",
    "alternativesHi": "लगातार बिस्तर पर लेटे रहना, भारी पेनकिलर दवाइयां, पीठ पर कड़ा बेल्ट बांधना, रीढ़ की बड़ी ओपन सर्जरी व पेंच (Screws) लगाना, अथवा केवल सिकाई।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation or general anesthesia.",
    "sedationTypeHi": "पीठ में स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक दवा अथवा सामान्य बेहोशी।"
  },
  "debiri-colorectal-liver-metastases": {
    "id": "debiri-colorectal-liver-metastases",
    "category": "Interventional Oncology",
    "nameEn": "Transarterial Chemoembolization for Colorectal Liver Metastases using Irinotecan Beads (DEBIRI)",
    "nameHi": "बड़ी आंत के लिवर कैंसर फैलाव हेतु डीईबीआईआरआई (DEBIRI - इरीनोटीकेन युक्त बीड्स द्वारा कीमोएम्बोलाइजेशन)",
    "indicationEn": "Colorectal cancer liver metastases (mCRC) refractory to standard systemic oxaliplatin and irinotecan regimens (FOLFOX / FOLFIRI).",
    "indicationHi": "बड़ी आंत (कोलन) के कैंसर से लिवर में फैली गांठें जो सामान्य कीमोथेरेपी से ठीक न हो रही हों और जिन्हें ऑपरेशन द्वारा निकालना संभव न हो।",
    "descriptionEn": "Under local anesthesia and fluoroscopy, a microcatheter is positioned selectively into the hepatic arteries feeding the colorectal metastases. Calibrated drug-eluting microspheres (70-150 um or 100-300 um) loaded with Irinotecan (100 mg) are infused slowly, releasing high local concentrations of active SN-38 chemotherapy inside the metastases with low systemic blood levels.",
    "descriptionHi": "जांघ की नस से कैथेटर को सीधे लिवर की उन नसों में ले जाया जाता है जो आंत के कैंसर की गांठों को खून पहुंचाती हैं। वहां कैंसर रोधी दवा (इरीनोटीकेन) से भरे विशेष सूक्ष्म मनके छोड़े जाते हैं। ये मनके गांठ के अंदर पहुंचकर हफ्तों तक भारी मात्रा में दवा छोड़ते हैं और गांठ की नसों को बंद कर कैंसर को समाप्त करते हैं।",
    "benefitsEn": [
      "High objective response rate (60-75%) in chemo-refractory metastatic colorectal disease.",
      "Significantly lower systemic side effects (such as severe diarrhea and neutropenia) compared to IV irinotecan.",
      "Can downstage lesions to become surgically resectable or ablatable."
    ],
    "benefitsHi": [
      "कीमोथेरेपी से निष्प्रभावी हो चुके कैंसर में भी 60-75% गांठों के सिकुड़ने की उच्च दर।",
      "नस द्वारा दी जाने वाली कीमोथेरेपी की तुलना में गंभीर दस्त और कमजोरी का बहुत कम खतरा।",
      "गांठें छोटी होने पर आगे चलकर ऑपरेशन संभव हो सकता है।"
    ],
    "specificRisksEn": [
      "Severe acute intra-procedural abdominal and RUQ pain (expected due to irinotecan-induced vasospasm and capsular ischemia; managed with aggressive analgesia).",
      "Post-embolization syndrome (fever, nausea, transaminitis).",
      "Biliary ischemia, biloma, or cholecystitis.",
      "Transient severe diarrhea (cholinergic response).",
      "Hepatic artery dissection or groin hematoma."
    ],
    "specificRisksHi": [
      "प्रक्रिया के दौरान पेट में तेज दर्द होना (इरीनोटीकेन दवा के असर से नसों में खिंचाव, जिसे दर्द निवारक दवाओं से ठीक किया जाता है)।",
      "पोस्ट-एम्बोलाइजेशन सिंड्रोम: बुखार, उल्टी और लिवर एंजाइम्स में वृद्धि।",
      "पित्त की नली में खून की कमी से छाला (Biloma) या पित्ताशय में सूजन।",
      "अस्थायी रूप से पतले दस्त लगना।",
      "जांघ की नस में चोट या खून का थक्का।"
    ],
    "alternativesEn": "Y-90 radioembolization (TARE), hepatic arterial infusion chemotherapy (HAIC), systemic salvage therapies (Trifluridine-Tipiracil, Regorafenib), or palliative supportive care.",
    "alternativesHi": "वाई-90 रेडियोएम्बोलाइजेशन, लिवर पोर्ट कीमोथेरेपी (HAIC), अन्य गोलियां, अथवा लक्षण निवारक देखभाल।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation, preemptive high-dose IV opioids, and prophylactic atropine.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ नस द्वारा तेज दर्द निवारक (Opioids) और दस्त/दर्द से बचाव हेतु एट्रोपिन का इंजेक्शन।"
  },
  "haic-port-catheter-implantation": {
    "id": "haic-port-catheter-implantation",
    "category": "Interventional Oncology",
    "nameEn": "Hepatic Arterial Infusion Chemotherapy (HAIC) Port-Catheter Surgical / Radiological Implantation",
    "nameHi": "लिवर धमनी कीमोथेरेपी हेतु पोर्ट-कैथेटर प्रत्यारोपण (HAIC Port - लिवर में सीधे कीमोथेरेपी देने हेतु स्थायी पोर्ट लगाना)",
    "indicationEn": "Advanced hepatocellular carcinoma with portal vein tumor thrombosis (PVTT), diffuse multinodular HCC, or extensive colorectal liver metastases unsuitable for TACE or surgery.",
    "indicationHi": "लिवर का अत्यधिक फैला हुआ कैंसर या बड़ी आंत से लिवर में फैला कैंसर, जिसमें पोर्टल नस में ट्यूमर होने के कारण टीएसीई नहीं की जा सकती और सीधे लिवर में कीमोथेरेपी देने की आवश्यकता हो।",
    "descriptionEn": "Under local anesthesia and fluoroscopy, a catheter is inserted via the femoral or left subclavian artery into the proper hepatic artery. The gastroduodenal artery (GDA) is coil embolized to prevent non-target gastrointestinal toxicity. The catheter is connected to a subcutaneous titanium port chamber implanted under the skin of the groin or chest, allowing repeated long-term high-dose continuous infusions of chemotherapy (FOLFOX / Cisplatin).",
    "descriptionHi": "जांघ या छाती की नस से एक स्थायी बारीक कैथेटर लिवर की मुख्य धमनी में डाला जाता है। आमाशय की तरफ जाने वाली नस को छल्ले (Coil) से बंद कर दिया जाता है ताकि दवा आंतों में न जाए। कैथेटर के दूसरे सिरे को त्वचा के नीचे एक छोटे टाइटेनियम बटन (Port) से जोड़ दिया जाता है। इस पोर्ट में सुई लगाकर सीधे लिवर में कई दिनों तक लगातार कीमोथेरेपी दी जा सकती है।",
    "benefitsEn": [
      "Delivers very high local drug concentrations directly to the liver with first-pass hepatic extraction.",
      "Proven high response rates and survival benefit in advanced HCC with major portal vein invasion.",
      "Avoids repeated painful vascular catheterizations; infusion can be administered comfortably via external pump."
    ],
    "benefitsHi": [
      "पूरे शरीर को बचाते हुए कीमोथेरेपी की अत्यधिक मात्रा सीधे लिवर में पहुंचती है।",
      "पोर्टल नस में ट्यूमर वाले गंभीर मरीजों में भी कैंसर को सिकोड़ने की अचूक क्षमता।",
      "बार-बार नस में सुई लगाने की जरूरत नहीं; एक ही पोर्ट से घर पर या वार्ड में आसानी से दवा दी जा सकती है।"
    ],
    "specificRisksEn": [
      "Catheter displacement, tip migration, or kink requiring radiological repositioning.",
      "Hepatic artery thrombosis or occlusion cutting off arterial infusion.",
      "Subcutaneous port pocket infection or hematoma.",
      "Gastrointestinal ulceration if un-embolized collaterals carry chemotherapy to stomach/duodenum.",
      "Extra-arterial chemotherapy extravasation."
    ],
    "specificRisksHi": [
      "कैथेटर का अपनी जगह से खिसकना या मुड़ जाना।",
      "लिवर की नस में खून का थक्का जमने से नस बंद होना।",
      "त्वचा के नीचे पोर्ट के स्थान पर इन्फेक्शन या खून जमना।",
      "आमाशय में दवा जाने से पेट में अल्सर या दर्द होना।",
      "कैथेटर से दवा का त्वचा के नीचे रिसाव होना।"
    ],
    "alternativesEn": "Systemic therapy with Atezolizumab + Bevacizumab or Lenvatinib, Transarterial Radioembolization (TARE), repeated transarterial chemoembolization (if PV open), or palliative best supportive care.",
    "alternativesHi": "इम्यूनोथेरेपी/गोलियां, वाई-90 रेडियोएम्बोलाइजेशन, बार-बार टीएसीई, अथवा केवल लक्षण निवारक देखभाल।",
    "sedationTypeEn": "Local anesthesia with subcutaneous lidocaine infiltration and mild conscious sedation.",
    "sedationTypeHi": "त्वचा पर स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
  },
  "tace-neuroendocrine-liver-metastases": {
    "id": "tace-neuroendocrine-liver-metastases",
    "category": "Interventional Oncology",
    "nameEn": "Transarterial Chemoembolization (TACE) for Symptomatic / Progressive Hepatic Neuroendocrine Tumor (NET) Metastases",
    "nameHi": "न्यूरोएंडोक्राइन लिवर ट्यूमर हेतु टीएसीई (NET Metastases - हॉर्मोनल लक्षणों व गांठों के खात्मे हेतु कीमोएम्बोलाइजेशन)",
    "indicationEn": "Unresectable, progressive, or highly symptomatic hepatic metastases from gastroenteropancreatic neuroendocrine tumors (GEP-NET) causing carcinoid syndrome (flushing, diarrhea, bronchospasm).",
    "indicationHi": "पेट या पैंक्रियाज के न्यूरोएंडोक्राइन कैंसर का लिवर में फैलाव, जिसके कारण अत्यधिक दस्त, चेहरा लाल पड़ना (Flushing) अथवा हॉर्मोन के अत्यधिक स्राव से गंभीर तकलीफें हो रही हों।",
    "descriptionEn": "Under fluoroscopic guidance, a microcatheter is advanced into the hypervascular arterial branches feeding the neuroendocrine liver metastases. Doxorubicin or Streptozocin mixed with Lipiodol or calibrated microspheres is injected to cut off the tumor blood supply and suppress excessive hormonal hypersecretion.",
    "descriptionHi": "जांघ की नस से कैथेटर लिवर में फैली न्यूरोएंडोक्राइन कैंसर की गांठों तक पहुंचाया जाता है। वहां कैंसर-रोधी दवा (डॉक्सोरूबिसिन/स्ट्रेप्टोजोसिन) और सूक्ष्म कण छोड़े जाते हैं। इससे गांठों का रक्त प्रवाह बंद हो जाता है, कैंसर कोशिकाएं मरती हैं और हॉर्मोन का बनना बंद होकर लक्षणों में तुरंत आराम मिलता है।",
    "benefitsEn": [
      "Marked, durable relief of debilitating carcinoid syndrome symptoms (flushing, diarrhea) in > 80% of patients.",
      "Significant radiographic disease control and stabilization of progressive metastases.",
      "Prolongs progression-free and overall survival."
    ],
    "benefitsHi": [
      "80% से अधिक मरीजों को बार-बार दस्त और चेहरा लाल पड़ने (Carcinoid Syndrome) से तुरंत स्थायी राहत।",
      "लिवर में कैंसर की गांठों का बढ़ना रुकना और उनका सिकुड़ना।",
      "मरीज की जीवन प्रत्याशा और जीवन की गुणवत्ता में भारी सुधार।"
    ],
    "specificRisksEn": [
      "Carcinoid Crisis: Acute life-threatening massive release of vasoactive hormones causing extreme hypotension/hypertension, bronchospasm, and cardiac arrhythmia (prevented with continuous IV Octreotide).",
      "Post-embolization syndrome (fever, pain, nausea).",
      "Hepatic failure or ischemic biloma.",
      "Hepatic abscess formation (heightened in patients with prior Whipple surgery).",
      "Femoral puncture site hematoma."
    ],
    "specificRisksHi": [
      "कार्सिनॉइड क्राइसिस (Carcinoid Crisis): नस बंद होने पर अचानक भारी मात्रा में हॉर्मोन रिलीज होने से ब्लड प्रेशर का खतरनाक रूप से गिरना या बढ़ना (ऑक्ट्रियोटाइड दवा से बचाव किया जाता है)।",
      "पोस्ट-एम्बोलाइजेशन सिंड्रोम: बुखार, उल्टी और पेट दर्द।",
      "लिवर में कमजोरी या पित्त रिसाव।",
      "लिवर में मवाद बनना (विशेषकर जिनके पहले आंत के ऑपरेशन हुए हों)।",
      "जांघ में सुई की जगह खून का थक्का जमना।"
    ],
    "alternativesEn": "Transarterial bland embolization (TAE), Peptide Receptor Radionuclide Therapy (PRRT with Lu-177 DOTATATE), systemic somatostatin analogues (Octreotide/Lanreotide), targeted agents (Everolimus/Sunitinib), or surgery.",
    "alternativesHi": "ब्लैंड एम्बोलाइजेशन (TAE), पीआरआरटी रेडिएशन (Lu-177 PRRT), सोमाटोस्टैटिन इंजेक्शन, टारगेटेड गोलियां, अथवा ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation and continuous octreotide cover.",
    "sedationTypeHi": "जांघ में स्थानीय सुन्नता, नस द्वारा शामक दवा और ऑक्ट्रियोटाइड ड्रिप।"
  },
  "tae-bland-embolization-net-metastases": {
    "id": "tae-bland-embolization-net-metastases",
    "category": "Interventional Oncology",
    "nameEn": "Transarterial Bland Embolization (TAE) with Calibrated Microspheres for Neuroendocrine Liver Metastases",
    "nameHi": "न्यूरोएंडोक्राइन लिवर ट्यूमर हेतु ब्लैंड एम्बोलाइजेशन (बिना कीमोथेरेपी के केवल सूक्ष्म मनकों द्वारा नस बंदी)",
    "indicationEn": "Hepatic metastases from neuroendocrine tumors where ischemic occlusion of hypervascular tumor feeders is desired without chemotherapy toxicity.",
    "indicationHi": "लिवर में फैले न्यूरोएंडोक्राइन कैंसर की गांठें, जहां बिना किसी कीमोथेरेपी दवा के केवल सूक्ष्म मनकों द्वारा खून का बहाव बंद करके गांठों को सुखाना हो।",
    "descriptionEn": "Under fluoroscopic guidance, a microcatheter is navigated into tumor-supplying branches of the hepatic arteries. Calibrated bland microspheres (100-300 um or 300-500 um) or PVA particles are infused slowly without chemotherapy until complete arterial stasis is achieved, causing severe tumor ischemia and necrosis.",
    "descriptionHi": "जांघ की नस से कैथेटर को लिवर की गांठों की नसों में पहुंचाया जाता है। वहां बिना किसी कैंसर रोधी दवा के केवल विशेष सूक्ष्म मनके (Microspheres) छोड़े जाते हैं, जो नसों में जाकर फंस जाते हैं और गांठों को मिलने वाले खून को पूरी तरह रोक देते हैं। खून न मिलने से कैंसर कोशिकाएं सूखकर खत्म हो जाती हैं।",
    "benefitsEn": [
      "Equally effective ischemic tumor necrosis as TACE for neuroendocrine tumors without chemotherapy-related systemic or hepatotoxicity.",
      "Rapid control of carcinoid flushing and endocrine diarrhea.",
      "Can be safely repeated multiple times as disease recurs."
    ],
    "benefitsHi": [
      "कीमोथेरेपी के दुष्प्रभावों के बिना ही टीएसीई (TACE) जितना ही अचूक और प्रभावी परिणाम।",
      "दस्त और चेहरे के लाल पड़ने के लक्षणों पर तुरंत रोक।",
      "भविष्य में आवश्यकता पड़ने पर बिना किसी डर के दोबारा की जा सकती है।"
    ],
    "specificRisksEn": [
      "Post-embolization syndrome (fever, pain, nausea in 60-80%).",
      "Carcinoid crisis from acute mediator release (managed with Octreotide).",
      "Hepatic insufficiency or ischemic biloma.",
      "Non-target particle reflux into cystic or gastric arteries.",
      "Groin hematoma."
    ],
    "specificRisksHi": [
      "पोस्ट-एम्बोलाइजेशन सिंड्रोम: बुखार, पेट दर्द व जी मिचलाना।",
      "हॉर्मोन निकलने से कार्सिनॉइड क्राइसिस (ऑक्ट्रियोटाइड दवा से नियंत्रण)।",
      "लिवर के कार्य में अस्थायी गिरावट या पित्त रिसाव।",
      "मनकों का पित्त की थैली या आमाशय की नसों में जाना।",
      "जांघ में सुई की जगह खून जमना।"
    ],
    "alternativesEn": "TACE with Doxorubicin/Streptozocin, PRRT (Lu-177), systemic somatostatin analogues, or liver transplantation.",
    "alternativesHi": "कीमोथेरेपी युक्त टीएसीई (TACE), पीआरआरटी रेडिएशन, सोमाटोस्टैटिन इंजेक्शन, अथवा ट्रांसप्लांट।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation and octreotide cover.",
    "sedationTypeHi": "जांघ में स्थानीय सुन्नता और नस द्वारा हल्की शामक दवा।"
  },
  "sarcoma-palliative-tace-cryoablation": {
    "id": "sarcoma-palliative-tace-cryoablation",
    "category": "Interventional Oncology",
    "nameEn": "Soft Tissue Sarcoma Palliative Transarterial Chemoembolization and Cryoablation",
    "nameHi": "सॉफ्ट टिश्यू सारकोमा हेतु पेलिएटिव टीएसीई एवं क्रायोएब्लेशन (मांसपेशियों के बड़े कैंसर में नस बंदी एवं बर्फ द्वारा विनाश)",
    "indicationEn": "Advanced, inoperable, or recurrent pelvic/extremity/retroperitoneal soft tissue sarcoma causing intractable pain, bleeding, ulceration, or mass effect refractory to systemic therapy.",
    "indicationHi": "मांसपेशियों या हड्डियों के आसपास का बड़ा सारकोमा कैंसर (Soft Tissue Sarcoma) जो ऑपरेशन योग्य न हो, जिससे तेज दर्द, खून बहना या गांठ का घाव बन गया हो।",
    "descriptionEn": "Under fluoroscopy and CT guidance, a two-stage or combined procedure is performed: First, transarterial chemoembolization (TACE) using Doxorubicin and calibrated particles is delivered into tumor arteries to stop bleeding and shrink the mass. Second, percutaneous cryoablation probes freeze the tumor bulk down to -140°C, providing pain relief and cytoreduction.",
    "descriptionHi": "सीटी स्कैन और एक्स-रे की मदद से दो चरणों में इलाज किया जाता है: पहले जांघ की नस से कैथेटर द्वारा कैंसर की गांठ में कीमोथेरेपी और सूक्ष्म कण डालकर खून बहना रोका जाता है। फिर सुई द्वारा गांठ के अंदर शून्य से 140 डिग्री नीचे बर्फ जमाई जाती है, जिससे कैंसर की गांठ सिकुड़ जाती है और असहनीय दर्द से मुक्ति मिलती है।",
    "benefitsEn": [
      "Effective hemostasis: Rapid cessation of severe tumor bleeding.",
      "Dramatic palliative pain relief by destroying sensory nociceptors.",
      "Reduces tumor bulk and controls local disease progression without extensive amputation."
    ],
    "benefitsHi": [
      "कैंसर की गांठ से बह रहे खून पर तुरंत रोक।",
      "दर्द वाली नसों को बर्फ से जमाकर असहनीय दर्द से तुरंत राहत।",
      "अंग काटने (Amputation) के बिना ही गांठ को सिकोड़कर नियंत्रित करना।"
    ],
    "specificRisksEn": [
      "Post-procedure tumor necrosis and secondary infected ulceration / abscess requiring wound care.",
      "Cryoshock or myoglobinuria from rapid tumor breakdown.",
      "Peripheral nerve thermal injury (foot drop or wrist drop if near major nerve trunks).",
      "Skin necrosis or frostbite burns over superficial tumor components.",
      "Access site bleeding or hematoma."
    ],
    "specificRisksHi": [
      "गांठ गलने के कारण घाव में मवाद या इन्फेक्शन होना, जिसके लिए ड्रेसिंग की जरूरत हो।",
      "गांठ के टूटने से पेशाब में प्रोटीन आना या बुखार।",
      "पास की नस में ठंडक लगने से हाथ या पैर के पंजे में कमजोरी (Foot Drop)।",
      "त्वचा पर बर्फ से छाला या घाव बनना।",
      "सुई की जगह पर खून का थक्का जमना।"
    ],
    "alternativesEn": "High-dose palliative external beam radiation, major radical surgical resection or limb amputation, systemic salvage chemotherapy, or hospice comfort care.",
    "alternativesHi": "भारी रेडिएशन सिकाई, पूरा हाथ या पैर काटने का बड़ा ऑपरेशन (Amputation), अन्य कीमोथेरेपी, अथवा केवल दर्द निवारक दवाइयां।",
    "sedationTypeEn": "General anesthesia or deep conscious sedation with multimodal analgesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा गहरी शामक व तेज दर्द निवारक दवा।"
  },
  "thyroid-mwa-benign-nodules": {
    "id": "thyroid-mwa-benign-nodules",
    "category": "Interventional Oncology",
    "nameEn": "Percutaneous Microwave Ablation for Benign Symptomatic Thyroid Nodules",
    "nameHi": "थायरॉयड की गांठ हेतु माइक्रोवेव एब्लेशन (बिना चीरे के सुई द्वारा थायरॉयड गांठ को जलाकर सिकोड़ना)",
    "indicationEn": "Benign, solid or predominantly solid thyroid nodules (Bethesda II) causing cosmetic neck deformity, compressive symptoms (dysphagia, foreign body sensation, choking), in patients wishing to avoid neck surgery and scar.",
    "indicationHi": "थायरॉयड की गैर-कैंसर वाली गांठ (Benign Nodule) जिसके कारण गले में सूजन दिखती हो, सांस लेने या खाना निगलने में रुकावट होती हो, और मरीज बिना गर्दन पर चीरा लगाए इलाज चाहता हो।",
    "descriptionEn": "Under local anesthesia and high-resolution ultrasound guidance, hydrodissection with 5% Dextrose/saline is performed into the danger triangle to isolate the recurrent laryngeal nerve. A thin 16G internally cooled microwave antenna is inserted into the thyroid nodule. Using the moving-shot technique, microwave power (20-35W) is applied unit by unit until the entire nodule turns hyperechoic.",
    "descriptionHi": "गले को सुन्न करके अल्ट्रासाउंड की सीधी निगरानी में आवाज की नस (Recurrent Laryngeal Nerve) को बचाने हेतु पानी डालकर सुरक्षित दूरी बनाई जाती है। फिर एक पतली माइक्रोवेव सुई थायरॉयड की गांठ में डाली जाती है। सुई को धीरे-धीरे हिलाते हुए कुछ ही मिनटों में सूक्ष्म तरंगों से पूरी गांठ को जला दिया जाता है, जिससे गांठ सूखकर सिकुड़ जाती है।",
    "benefitsEn": [
      "Scarless procedure: Done through a 1mm needle puncture with zero surgical neck scar.",
      "Preserves thyroid function: No postoperative hypothyroidism; lifelong thyroxine hormone pills are avoided.",
      "Outpatient daycare procedure: Patient walks home within 2-3 hours with immediate symptom improvement."
    ],
    "benefitsHi": [
      "गर्दन पर कोई चीरा या टांका नहीं, कोई निशान नहीं पड़ता।",
      "थायरॉयड ग्रंथि सुरक्षित रहती है, जिससे जीवन भर थायरॉयड की गोलियां (Thyroxine) खाने की जरूरत नहीं पड़ती।",
      "डे-केयर इलाज: केवल 2-3 घंटे में मरीज बिना किसी दर्द के घर जा सकता है।"
    ],
    "specificRisksEn": [
      "Transient voice hoarseness or recurrent laryngeal nerve thermal paresis (usually recovers in days to weeks, < 1% permanent).",
      "Subcapsular thyroid hematoma or neck swelling.",
      "Mild skin burn or blister at puncture site.",
      "Pain radiating to teeth, ear, or chest during heating.",
      "Nodule recurrence requiring touch-up ablation over subsequent years (< 5%)."
    ],
    "specificRisksHi": [
      "आवाज में अस्थायी भारीपन या बैठना (आमतौर पर कुछ दिनों या हफ्तों में स्वतः ठीक हो जाता है, < 1% स्थायी)।",
      "गर्दन में हल्का खून जमना या सूजन।",
      "सुई की जगह पर त्वचा में हल्की जलन।",
      "हीटिंग के दौरान जबड़े, कान या सीने में हल्का दर्द महसूस होना।",
      "कुछ वर्षों बाद गांठ के बचे हुए हिस्से को दोबारा सिकोड़ने की जरूरत (5% से कम)।"
    ],
    "alternativesEn": "Open surgical thyroid lobectomy / hemithyroidectomy, endoscopic scarless thyroidectomy, radiofrequency ablation (RFA), radioactive iodine therapy (if toxic nodule), or conservative observation.",
    "alternativesHi": "गर्दन का खुला ऑपरेशन (Thyroidectomy), दूरबीन द्वारा ऑपरेशन, रेडियोफ्रीक्वेंसी एब्लेशन, अथवा केवल निगरानी रखना।",
    "sedationTypeEn": "Local anesthesia infiltration with mild conscious sedation.",
    "sedationTypeHi": "गर्दन में स्थानीय सुन्नता (Local Anesthesia) और बहुत ही हल्की शामक दवा।"
  },
  "pei-cystic-thyroid-lymph-nodes": {
    "id": "pei-cystic-thyroid-lymph-nodes",
    "category": "Interventional Oncology",
    "nameEn": "Percutaneous Ethanol Ablation (PEI) for Cystic Thyroid Nodules and Recurrent Cervical Lymph Nodes",
    "nameHi": "थायरॉयड की पानी वाली गांठ एवं गर्दन की गांठों हेतु एथेनॉल एब्लेशन (PEI - अल्कोहल द्वारा गांठ को सुखाना)",
    "indicationEn": "Relapsing symptomatic benign thyroid cysts (> 50% cystic component) after simple aspiration, or recurrent papillary thyroid carcinoma cervical lymph node metastases in surgically hostile neck.",
    "indicationHi": "थायरॉयड की पानी भरी गांठें (Cyst) जिनमें से पानी निकालने के बाद दोबारा पानी भर जाता हो, अथवा गर्दन की कैंसर वाली पुरानी गांठें जहां दोबारा ऑपरेशन संभव न हो।",
    "descriptionEn": "Under ultrasound guidance and local anesthesia, a fine needle is introduced into the cyst and fluid is completely aspirated. Sterile absolute ethanol (99.5%) is slowly instilled into the collapsed cavity and allowed to dwell for 5-10 minutes before re-aspiration. The ethanol denatures proteins, obliterates internal lining cells, and induces permanent fibrosis.",
    "descriptionHi": "सोनोग्राफी की निगरानी में गले को सुन्न करके एक पतली सुई से गांठ का सारा पानी बाहर खींच लिया जाता है। फिर उसी सुई से गांठ के अंदर शुद्ध अल्कोहल (Absolute Ethanol) डाला जाता है। यह दवा 5 से 10 मिनट अंदर रहकर गांठ की अंदरूनी झिल्ली को सुखा देती है, जिससे भविष्य में दोबारा पानी नहीं भरता और गांठ खत्म हो जाती है।",
    "benefitsEn": [
      "High success rate (> 90% volume reduction) for pure or predominantly cystic nodules in 1-2 sessions.",
      "Simple, low-cost daycare procedure taking less than 15-20 minutes.",
      "Avoids neck surgery, general anesthesia, and preserves natural thyroid gland function."
    ],
    "benefitsHi": [
      "1 या 2 बार में ही 90% से अधिक गांठ सूखकर स्थायी रूप से समाप्त हो जाती है।",
      "अत्यंत सरल, सुरक्षित और केवल 15-20 मिनट में होने वाला सस्ता इलाज।",
      "बिना किसी बड़े ऑपरेशन या बेहोशी के तुरंत राहत।"
    ],
    "specificRisksEn": [
      "Transient stinging burning pain radiating to jaw or ear if ethanol leaks into capsule.",
      "Voice hoarseness from recurrent laryngeal nerve irritation (transient in < 1%).",
      "Local hematoma or soft tissue edema in neck.",
      "Intra-cystic hemorrhage during aspiration.",
      "Incomplete collapse requiring repeat injection."
    ],
    "specificRisksHi": [
      "दवा के हल्के रिसाव से जबड़े या कान में कुछ मिनटों के लिए तेज जलन या दर्द।",
      "आवाज में कुछ दिनों के लिए हल्का भारीपन।",
      "गर्दन में हल्की सूजन या खून का थक्का।",
      "गांठ में दोबारा थोड़ा खून रिसना।",
      "कुछ मामलों में एक बार और दवा डालने की जरूरत पड़ना।"
    ],
    "alternativesEn": "Thermal ablation (RFA/MWA), surgical thyroid lobectomy, simple repeat fine needle aspiration alone (high recurrence > 70%), or active observation.",
    "alternativesHi": "माइक्रोवेव या आरएफए से जलाना, गर्दन का ऑपरेशन, केवल सुई से पानी निकालना (जिसमें 70% दोबारा भर जाता है), अथवा निगरानी।",
    "sedationTypeEn": "Local anesthesia infiltration with subcutaneous lidocaine.",
    "sedationTypeHi": "गले में स्थानीय सुन्नता का इंजेक्शन (Local Infiltration)।"
  },
  "pelvic-rfa-hydrodissection-air": {
    "id": "pelvic-rfa-hydrodissection-air",
    "category": "Interventional Oncology",
    "nameEn": "CT-Guided Percutaneous Radiofrequency Ablation of Pelvic Recurrences with Hydrodissection / Air Dissection",
    "nameHi": "पेल्विक कैंसर के फैलाव हेतु सीटी-निर्देशित आरएफए एवं हाइड्रोडिसेक्शन (श्रोणि की गांठ को पानी/हवा का घेरा बनाकर जलाना)",
    "indicationEn": "Locally recurrent gynecological (cervical, ovarian, endometrial), rectal, or prostate malignancies in the pelvis adjacent to ureters, rectum, bladder, or lumbosacral plexus.",
    "indicationHi": "बच्चेदानी, अंडाशय, मलाशय या प्रोस्टेट के कैंसर का पेडू (Pelvis) में दोबारा लौटना, जो पेशाब की थैली, आंत या नसों के पास स्थित हो और ऑपरेशन संभव न हो।",
    "descriptionEn": "Under CT guidance, hydrodissection (5% Dextrose) or air dissection is performed by injecting fluid/gas through an 18G needle to physically push the rectum, bladder, and sciatic nerve > 10 mm away from the recurrence. An RFA needle electrode is positioned in the tumor center, and radiofrequency energy is delivered to thermally ablate the malignant mass without collateral thermal injury to nearby organs.",
    "descriptionHi": "सीटी स्कैन की निगरानी में एक बारीक सुई द्वारा पेडू की गांठ और आंत/पेशाब की थैली के बीच ग्लूकोज का पानी या हवा भरकर 10 मिमी से अधिक सुरक्षित दूरी बनाई जाती है। फिर आरएफए सुई द्वारा गांठ के केंद्र में गर्मी पैदा करके कैंसर को जला दिया जाता है, जिससे आसपास के महत्वपूर्ण अंग पूरी तरह सुरक्षित रहते हैं।",
    "benefitsEn": [
      "Enables safe curative or palliative ablation of deep pelvic tumors previously deemed inaccessible.",
      "Prevents catastrophic thermal perforation of rectum, bladder, or irreversible sciatic nerve palsy.",
      "Significant relief of deep pelvic pain and controls local disease progression."
    ],
    "benefitsHi": [
      "गंभीर और कठिन स्थानों पर स्थित पेडू के कैंसर का बिना चीर-फाड़ के सुरक्षित खात्मा।",
      "आंत या पेशाब की थैली फटने और पैर की नसों (Sciatic Nerve) के सुन्न होने से 100% सुरक्षा।",
      "पेडू के असहनीय दर्द से तुरंत राहत।"
    ],
    "specificRisksEn": [
      "Bowel perforation or enterocutaneous / rectovaginal fistula if hydrodissection barrier fails.",
      "Ureteral thermal injury causing stricture or urinary leak (managed with pre-procedure DJ stent).",
      "Sciatic nerve or lumbosacral plexopathy (foot drop, leg numbness).",
      "Pelvic hematoma or abscess in the necrotic cavity.",
      "Grounding pad burns or post-ablation syndrome."
    ],
    "specificRisksHi": [
      "दूरी कम होने पर आंत में छेद या फिस्टुला (Fistula) बनने का दुर्लभ खतरा।",
      "पेशाब की नली में चोट (बचाव हेतु पहले से डीजे स्टेंट डाला जाता है)।",
      "पैर की मुख्य नस पर असर से पैर में कमजोरी या सुन्नपन।",
      "गांठ के स्थान पर खून का थक्का या मवाद बनना।",
      "प्रक्रिया के बाद हल्का बुखार व कमजोरी।"
    ],
    "alternativesEn": "Pelvic exenteration surgery, stereotactic body radiation therapy (SBRT), cryoablation, systemic palliative chemotherapy, or nerve block pain management.",
    "alternativesHi": "अत्यंत जोखिम भरा पेल्विक ऑपरेशन (Exenteration), साइबरनाइफ रेडिएशन, क्रायोएब्लेशन, अथवा नसों का दर्द निवारक ब्लॉक।",
    "sedationTypeEn": "Deep conscious sedation or general anesthesia.",
    "sedationTypeHi": "नस द्वारा गहरी शामक दवाइयां अथवा सामान्य बेहोशी।"
  },
  "thermal-ablation-retroperitoneal-lymphadenopathy": {
    "id": "thermal-ablation-retroperitoneal-lymphadenopathy",
    "category": "Interventional Oncology",
    "nameEn": "Palliative Thermal Ablation of Painful Retroperitoneal Lymphadenopathy",
    "nameHi": "पेट के पीछे की दर्दनाक कैंसर गांठों हेतु थर्मल एब्लेशन (Retroperitoneal Lymph Nodes - सुई द्वारा नसों पर दबाव देने वाली गांठों को जलाना)",
    "indicationEn": "Painful, bulky retroperitoneal metastatic lymphadenopathy (para-aortic, aortocaval) compressing somatic nerves or causing intractable back/radicular pain refractory to systemic therapies and narcotics.",
    "indicationHi": "पेट के पीछे महाधमनी व रीढ़ की हड्डी के पास कैंसर की गांठों का बढ़ना, जिससे नसों पर भारी दबाव पड़ने से पीठ व पैरों में असहनीय दर्द होता हो।",
    "descriptionEn": "Under CT fluoroscopic guidance and continuous neurological monitoring, hydrodissection is performed to separate the metastatic lymph nodes from the duodenum, colon, and major vessels. Microwave or cryoablation probes are deployed into the nodal mass. Ablation is titrated to devitalize the tumor mass and decompress neural impingement without thermal neurolysis of the lumbar plexus.",
    "descriptionHi": "सीटी स्कैन की निगरानी में ग्लूकोज का पानी डालकर गांठों को महाधमनी, मुख्य नस और आंतों से अलग किया जाता है। फिर माइक्रोवेव या क्रायो सुई डालकर गांठ को जलाकर या जमाकर सिकोड़ दिया जाता है, जिससे रीढ़ की नसों पर पड़ रहा दबाव खत्म हो जाता है और दर्द से तुरंत राहत मिलती है।",
    "benefitsEn": [
      "Rapid, dramatic relief of deep intractable cancer back/flank pain.",
      "Decompresses critical retroperitoneal vessels, ureters, and lumbar nerves.",
      "Significant reduction in daily narcotic opioid medication requirements."
    ],
    "benefitsHi": [
      "कैंसर के असहनीय पीठ व कमर दर्द से तुरंत जादुई राहत।",
      "खून की बड़ी नसों, पेशाब की नली और पैरों की नसों पर पड़ रहे दबाव का खात्मा।",
      "तेज पेनकिलर और अफीम वाली दवाइयों की जरूरत में भारी कमी।"
    ],
    "specificRisksEn": [
      "Thermal or mechanical injury to aorta, IVC, or renal vessels causing catastrophic retroperitoneal hemorrhage.",
      "Duodenal or ureteral thermal perforation.",
      "Lumbar nerve plexus injury causing motor weakness or severe radiculopathy in legs.",
      "Retroperitoneal abscess formation.",
      "Post-ablation pain flare."
    ],
    "specificRisksHi": [
      "महाधमनी या मुख्य नस में चोट से खून बहने का जोखिम।",
      "छोटी आंत या पेशाब की नली में जलने की चोट।",
      "पैरों की मुख्य नसों में चोट जिससे पैर में कमजोरी या सुन्नपन आ सकता है।",
      "पेट के पीछे मवाद या फोड़ा बनना।",
      "प्रक्रिया के तुरंत बाद कुछ घंटों तक दर्द का हल्का बढ़ना।"
    ],
    "alternativesEn": "Stereotactic body radiotherapy (SBRT), surgical retroperitoneal lymph node dissection (RPLND), celiac/splanchnic neurolytic nerve block, or systemic chemotherapy.",
    "alternativesHi": "एसबीआरटी रेडिएशन, पेट का बड़ा ऑपरेशन (RPLND), सीलिएक नर्व ब्लॉक (नसों को सुन्न करना), अथवा कीमोथेरेपी।",
    "sedationTypeEn": "General anesthesia or deep conscious sedation.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा गहरी शामक दवा।"
  },
  "chest-wall-desmoid-mwa": {
    "id": "chest-wall-desmoid-mwa",
    "category": "Interventional Oncology",
    "nameEn": "Percutaneous Microwave Ablation of Chest Wall / Desmoid Fibromatosis Tumor",
    "nameHi": "छाती की दीवार के डेस्मॉइड ट्यूमर हेतु माइक्रोवेव एब्लेशन (MWA - छाती की रसोली को बिना ऑपरेशन के जलाना)",
    "indicationEn": "Symptomatic, progressive extra-abdominal desmoid fibromatosis or chest wall soft tissue tumors causing pain or functional restriction, where wide surgical resection causes major chest wall deformity.",
    "indicationHi": "छाती की दीवार या पसलियों में डेस्मॉइड ट्यूमर (Desmoid Fibromatosis) की गांठ जो लगातार बढ़ रही हो, दर्द कर रही हो और जिसे ऑपरेशन से निकालने पर छाती की विकृति का खतरा हो।",
    "descriptionEn": "Under CT or ultrasound guidance and local anesthesia with deep sedation, hydrodissection is placed between the desmoid tumor and the parietal pleura, pericardium, and skin. A water-cooled microwave antenna is guided into the fibrous tumor. High-frequency microwave energy is delivered in overlapping zones to induce coagulative necrosis of the tumor while sparing chest wall integrity.",
    "descriptionHi": "सोनोग्राफी और सीटी स्कैन की निगरानी में पानी डालकर गांठ को फेफड़े के पर्दे, दिल के पर्दे और त्वचा से अलग किया जाता है। फिर ठंडे पानी के परिसंचरण वाला माइक्रोवेव एंटीना गांठ में डालकर सूक्ष्म तरंगों से पूरी गांठ को जला दिया जाता है, जिससे छाती की दीवार को काटे बिना गांठ नष्ट हो जाती है।",
    "benefitsEn": [
      "Avoids extensive chest wall full-thickness resection, rib removal, and synthetic mesh reconstruction.",
      "High rates of local disease stabilization and significant pain reduction.",
      "Preserves respiratory mechanics and upper extremity shoulder function."
    ],
    "benefitsHi": [
      "पसलियां काटने, छाती पर बड़ा घाव होने और जाली लगाने के बड़े ऑपरेशन से पूर्ण बचाव।",
      "गांठ का बढ़ना रुकना और दर्द से तुरंत राहत।",
      "छाती की सांस लेने की ताकत और कंधे की गति पूरी तरह सामान्य बनी रहना।"
    ],
    "specificRisksEn": [
      "Pneumothorax or pleural effusion requiring intercostal tube placement.",
      "Full-thickness thermal skin burn or necrosis if tumor infiltrates subcutaneous tissue.",
      "Thermal injury to intercostal neurovascular bundle causing temporary intercostal neuralgia.",
      "Secondary infection or tumor fluid collection.",
      "Need for secondary ablation due to infiltrative desmoid margins."
    ],
    "specificRisksHi": [
      "फेफड़े के पर्दे में हवा या पानी का रिसाव (चेस्ट ट्यूब डालने की जरूरत पड़ सकती है)।",
      "त्वचा पास होने पर त्वचा में जलने की चोट या छाला पड़ना।",
      "पसली की नस में खिंचाव से कुछ हफ्तों तक सीने में झनझनाहट या दर्द।",
      "जली हुई जगह पर मवाद या पानी का जमाव।",
      "गांठ की जड़ों को पूरी तरह सुखाने हेतु भविष्य में दोबारा प्रक्रिया की संभावना।"
    ],
    "alternativesEn": "Surgical wide local excision with chest wall reconstruction, cryoablation, systemic medical therapy (Sorafenib, Desmoid gamma-secretase inhibitors - Nirogacestat), or active watchful waiting.",
    "alternativesHi": "छाती का खुला ऑपरेशन (Resection & Reconstruction), क्रायोएब्लेशन, विशेष अंग्रेजी दवाइयां (Nirogacestat/Sorafenib), अथवा केवल निगरानी।",
    "sedationTypeEn": "Local anesthesia with deep conscious sedation.",
    "sedationTypeHi": "छाती में स्थानीय सुन्नता और नस द्वारा गहरी शामक दवा।"
  },
  "fiducial-marker-placement-sbrt": {
    "id": "fiducial-marker-placement-sbrt",
    "category": "Interventional Oncology",
    "nameEn": "Percutaneous Fiducial Marker Placement (Gold Seeds) for Stereotactic Body Radiation Therapy (SBRT)",
    "nameHi": "रेडिएशन थेरेपी हेतु फिड्यूशियल मार्कर लगाना (SBRT - सटीक रेडिएशन सिकाई हेतु सोने के सूक्ष्म दानों का प्रत्यारोपण)",
    "indicationEn": "Prior to CyberKnife or robotic SBRT for tumors in lung, liver, prostate, pancreas, or spine that require real-time respiratory motion tracking.",
    "indicationHi": "फेफड़े, लिवर, पैंक्रियाज अथवा रीढ़ के कैंसर में साइबरनाइफ या रोबोटिक रेडिएशन (SBRT) से पहले, ताकि सांस लेते समय ट्यूमर के हिलने पर भी रेडिएशन बिल्कुल सटीक गांठ पर ही पड़े।",
    "descriptionEn": "Under ultrasound or CT guidance and local anesthesia, a thin 18-20G pre-loaded needle is inserted into or immediately adjacent to the tumor. Three to four pure gold radiopaque seeds (0.8 x 3 mm) or gold coil markers are deployed in non-collinear geometry. These permanent metallic fiducials provide spatial coordinates for real-time robotic radiation beam alignment.",
    "descriptionHi": "सोनोग्राफी अथवा सीटी स्कैन की निगरानी में उस जगह को सुन्न करके एक पतली सुई सीधे कैंसर की गांठ के पास पहुंचाई जाती है। सुई के रास्ते 3 से 4 सोने के बने अत्यंत सूक्ष्म दाने (Gold Seeds) वहां स्थापित कर दिए जाते हैं। ये सोने के दाने एक्स-रे पर चमकते हैं और रेडिएशन मशीन को सांस लेते समय भी कैंसर पर अचूक निशाना साधने में मदद करते हैं।",
    "benefitsEn": [
      "Sub-millimeter targeting accuracy during stereotactic radiation, maximizing tumor destruction.",
      "Significantly minimizes radiation exposure to surrounding healthy lungs, liver, and bowel.",
      "Quick, minimally invasive outpatient daycare procedure (15-30 minutes)."
    ],
    "benefitsHi": [
      "रेडिएशन मशीन को 1 मिलीमीटर से भी कम त्रुटि के साथ कैंसर पर सटीक वार करने की सुविधा।",
      "आसपास के स्वस्थ फेफड़े, लिवर या आंतों को रेडिएशन के नुकसान से पूर्ण सुरक्षा।",
      "केवल 15 से 30 मिनट में होने वाली सरल डे-केयर प्रक्रिया।"
    ],
    "specificRisksEn": [
      "Fiducial migration from target position prior to radiation planning scan (requiring replacement).",
      "Pneumothorax during transthoracic lung marker deployment (15-25%, ~5% require chest drain).",
      "Minor local hematoma or puncture site soreness.",
      "Mild hemoptysis after lung placement.",
      "Allergic reaction to local anesthetic."
    ],
    "specificRisksHi": [
      "सोने के दाने का अपनी जगह से खिसक जाना, जिससे दोबारा दाना लगाने की जरूरत पड़ सकती है।",
      "फेफड़े में सुई लगाने पर हवा का रिसाव (Pneumothorax - 15-25%)।",
      "सुई की जगह पर हल्का दर्द या खून का थक्का।",
      "फेफड़े में दाना डालने के बाद थूक में थोड़ा खून आना।",
      "सुन्न करने वाली दवा से हल्की एलर्जी।"
    ],
    "alternativesEn": "Non-fiducial surface-guided radiation tracking, 4D-CT respiratory gating without markers, or surgical resection.",
    "alternativesHi": "बिना सोने के दानों के केवल 4D-सीटी द्वारा रेडिएशन (कम सटीक), अथवा ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia infiltration with minimal sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) का इंजेक्शन।"
  },
  "spinal-metastasis-rfa-steerable-electrode": {
    "id": "spinal-metastasis-rfa-steerable-electrode",
    "category": "Interventional Oncology",
    "nameEn": "CT-Guided Transpedicular Biopsy and RF Ablation of Spinal Metastasis with Steerable Curved Electrode",
    "nameHi": "रीढ़ की हड्डी के कैंसर हेतु सीटी-निर्देशित आरएफए एवं बायोप्सी (स्टीयरेबल इलेक्ट्रोड द्वारा रीढ़ की गांठ को जलाना एवं सीमेंट भरना)",
    "indicationEn": "Painful osteolytic metastatic lesions in thoracic or lumbar vertebral body causing intractable back pain, with intact or treated posterior cortex, combined with vertebral cement stabilization.",
    "indicationHi": "छाती या कमर की रीढ़ की हड्डी के मनके में कैंसर की दर्दनाक गांठ, जिसके कारण मरीज चलने-फिरने या लेटने में भी अत्यधिक दर्द से कराह रहा हो।",
    "descriptionEn": "Under CT fluoroscopy guidance and local/general anesthesia, a transpedicular access cannula is navigated into the vertebral body. A core biopsy is obtained. An articulated steerable bipolar RFA electrode is deployed and guided selectively into the tumor. Precise bipolar radiofrequency energy is applied to coagulate the tumor and sensory periosteal nerves, followed immediately by bone cement injection (vertebroplasty).",
    "descriptionHi": "सीटी स्कैन की निगरानी में रीढ़ की हड्डी के मनके में पीछे से एक पतली नली डाली जाती है। जांच हेतु मांस का टुकड़ा (बायोप्सी) लेने के बाद एक विशेष मुड़ने वाली आरएफए सुई सीधे कैंसर की गांठ में पहुंचाई जाती है। रेडियोफ्रीक्वेंसी तरंगों से कैंसर और दर्द वाली नसों को जलाकर तुरंत वहां बोन सीमेंट भर दिया जाता है, जिससे रीढ़ मजबूत हो जाती है।",
    "benefitsEn": [
      "Targeted destruction of radioresistant metastases combined with structural bone reinforcement.",
      "Immediate, profound relief of severe cancer spine pain (85-90% success rate).",
      "Prevents progressive vertebral collapse and catastrophic spinal cord compression."
    ],
    "benefitsHi": [
      "रेडिएशन से न दबने वाले कैंसर को भी अंदर से जलाकर नष्ट करना और सीमेंट से हड्डी को ताकत देना।",
      "रीढ़ के असहनीय दर्द से 85-90% मरीजों को तुरंत स्थाई राहत।",
      "रीढ़ की हड्डी को टूटने और रीढ़ की नस (Spinal Cord) दबने से बचाना।"
    ],
    "specificRisksEn": [
      "Thermal injury to the spinal cord or exiting nerve roots causing lower limb weakness, paralysis, or radiculopathy.",
      "Cement leakage into spinal canal or epidural venous plexus requiring surgical decompression.",
      "Pedicle fracture or dural tear with cerebrospinal fluid (CSF) leak.",
      "Pulmonary cement embolism.",
      "Transient increase in localized pain in first 24 hours."
    ],
    "specificRisksHi": [
      "रीढ़ की नस (Spinal Cord) में गर्मी पहुंचने से पैरों में कमजोरी या लकवा (Paralysis) का अत्यंत गंभीर जोखिम (अत्यंत सावधानी बरती जाती है)।",
      "सीमेंट का रीढ़ की नसों में लीक होना।",
      "हड्डी में दरार या रीढ़ के पानी (CSF) का रिसाव।",
      "सीमेंट का फेफड़ों की नसों में जाना।",
      "शुरुआती 24 घंटे में हल्का दर्द।"
    ],
    "alternativesEn": "Open spinal decompressive surgery with pedicle screw fixation, stereotactic body radiation therapy (SBRT), pure vertebroplasty without ablation, or high-dose opioid analgesics.",
    "alternativesHi": "रीढ़ की बड़ी सर्जरी व रॉड/पेंच लगाना, साइबरनाइफ रेडिएशन, बिना जलाए केवल सीमेंट भरना, अथवा केवल पेनकिलर दवाइयां।",
    "sedationTypeEn": "General anesthesia or deep conscious sedation with local anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा स्थानीय सुन्नता के साथ गहरी शामक दवा।"
  },
  "tips-creation-viatorr": {
    "id": "tips-creation-viatorr",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Transjugular Intrahepatic Portosystemic Shunt (TIPS) Creation with Controlled-Expansion Covered Stent",
    "nameHi": "ट्रांसजुगुलर इंट्राहेपेटिक पोर्टोसिस्टेमिक शंट (टिप्स - गर्दन की नस द्वारा लिवर में बाईपास स्टेंट डालना)",
    "indicationEn": "Cirrhosis with portal hypertension presenting as recurrent/refractory variceal bleeding or tense refractory ascites unresponsive to medical therapy.",
    "indicationHi": "लिवर सिरोसिस एवं पोर्टल हाइपरटेंशन के कारण भोजन की नली में बार-बार नसों का फटना व खून की उल्टी होना, अथवा पेट में बार-बार पानी भरना (Refractory Ascites)।",
    "descriptionEn": "Under fluoroscopy and ultrasound guidance, access is obtained via the right internal jugular vein in the neck. A catheter and specialized needle are advanced into the hepatic vein. A puncture is made through liver parenchyma into the intrahepatic portal vein branch. The tract is dilated with an angioplasty balloon and lined with a specialized PTFE-covered stent-graft (Gore Viatorr) to create a permanent low-resistance bypass between the portal and systemic venous circulations.",
    "descriptionHi": "गले की नस (जुगुलर वेन) में सुन्न करके एक्स-रे और सोनोग्राफी की सीधी निगरानी में एक बारीक कैथेटर लिवर तक पहुंचाया जाता है। लिवर के अंदर एक विशेष सुई द्वारा लिवर की नसों (हेपेटिक वेन और पोर्टल वेन) के बीच एक नया रास्ता बनाया जाता है। उस रास्ते में एक आवरणयुक्त धातु का स्टेंट (Viatorr Stent) लगाया जाता है, जिससे पोर्टल नस का बढ़ा हुआ रक्तचाप तुरंत सामान्य हो जाता है।",
    "benefitsEn": [
      "Immediate decompression of portal hypertension, preventing life-threatening gastrointestinal variceal bleeding (> 90% hemostasis).",
      "Dramatic reduction or elimination of ascites and hydrothorax, ending the need for frequent abdominal fluid taps.",
      "Crucial bridge to orthotopic liver transplantation or long-term symptom control."
    ],
    "benefitsHi": [
      "पोर्टल नस का अत्यधिक दबाव तुरंत कम होना, जिससे जानलेवा खून की उल्टी पर 90% से अधिक रोक लगती है।",
      "पेट में पानी भरने की समस्या का समाधान, जिससे बार-बार पेट से पानी निकालने (टैपिंग) से मुक्ति मिलती है।",
      "लिवर ट्रांसप्लांट तक मरीज की जान बचाने वाला सर्वश्रेष्ठ विकल्प।"
    ],
    "specificRisksEn": [
      "Hepatic Encephalopathy (HE): Confusion, memory loss, drowsiness, or coma due to bypass of toxins past liver parenchyma (20-35%; managed with lactulose and rifaximin).",
      "Intraperitoneal hemorrhage: Liver capsular perforation during needle pass (1-3%; may require emergency embolization or blood transfusion).",
      "Acute stent thrombosis or early occlusion requiring re-intervention.",
      "Hemobilia or bilio-venous fistula causing jaundice.",
      "Right heart failure or pulmonary edema due to sudden increased venous return to the heart."
    ],
    "specificRisksHi": [
      "हेपेटिक एन्सेफैलोपैथी: लिवर का खून सीधे दिल में जाने से खून में अमोनिया बढ़ना, जिसके कारण मानसिक भ्रम, अत्यधिक सुस्ती या बेहोशी (20-35% मामलों में, दवाओं से नियंत्रित)।",
      "लिवर के पर्दे में सुई लगने से पेट के अंदर खून का रिसाव (1-3%) जिसके लिए खून चढ़ाने या नस बंद करने की जरूरत पड़ सकती है।",
      "स्टेंट में खून का थक्का जमने से स्टेंट का बंद होना।",
      "पित्त की नली में खून जाना (पीलिया या काले दस्त)।",
      "खून का बहाव अचानक दिल की तरफ बढ़ने से दिल पर दबाव या सांस फूलना।"
    ],
    "alternativesEn": "Lifelong non-selective beta-blockers, repeated endoscopic variceal band ligation (EVBL), repeated large-volume paracentesis with albumin, surgical portosystemic shunt, or emergent liver transplantation.",
    "alternativesHi": "दवाइयां (बीटा-ब्लॉकर्स), एंडोस्कोपी द्वारा बार-बार छल्ले (Banding) लगवाना, बार-बार पेट से पानी निकालना, ओपन शंट सर्जरी, अथवा लिवर ट्रांसप्लांट।",
    "sedationTypeEn": "Conscious sedation with local anesthesia or general anesthesia.",
    "sedationTypeHi": "गले में स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक दवाइयां अथवा पूर्ण बेहोशी।"
  },
  "tips-revision-angioplasty-relining": {
    "id": "tips-revision-angioplasty-relining",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "TIPS Revision: Balloon Angioplasty and Relining of Stenosed Shunt Tract",
    "nameHi": "टिप्स रिवीजन (TIPS Revision - सिकुड़े या बंद हुए टिप्स स्टेंट को गुब्बारे व नए स्टेंट द्वारा दोबारा खोलना)",
    "indicationEn": "TIPS dysfunction (shunt stenosis > 50% or occlusion) presenting as recurrent variceal hemorrhage, reaccumulation of ascites, or portosystemic gradient (PSG) >= 12 mmHg on Doppler surveillance.",
    "indicationHi": "पूर्व में लगे टिप्स स्टेंट का सिकुड़ जाना या बंद हो जाना, जिसके कारण दोबारा खून की उल्टी होना, पेट में फिर से पानी भरना अथवा सोनोग्राफी पर स्टेंट में बहाव धीमा दिखना।",
    "descriptionEn": "Under local anesthesia and fluoroscopy via the internal jugular vein, a catheter and guidewire are negotiated across the occluded or stenosed TIPS stent into the portal vein. Balloon angioplasty is performed to dilate in-stent intimal hyperplasia or hepatic vein outflow stenosis. A new covered stent-graft is deployed across the diseased segment (relining) to restore low-pressure shunt flow.",
    "descriptionHi": "गले की नस से कैथेटर को पुराने बंद स्टेंट के अंदर से पार कराते हुए पोर्टल नस तक ले जाया जाता है। वहां एक विशेष गुब्बारा (Balloon) फुलाकर स्टेंट के अंदर जमी परत को फैलाया जाता है। यदि आवश्यक हो तो एक नया आवरणयुक्त स्टेंट (Stent-Graft) पुराने स्टेंट के अंदर स्थापित कर दिया जाता है, जिससे रुका हुआ खून दोबारा पूरी रफ्तार से बहने लगता है।",
    "benefitsEn": [
      "Restores patency and adequate flow through the TIPS shunt without creating a new liver puncture tract.",
      "Promptly halts recurrent variceal hemorrhage and resolves worsening ascites.",
      "Short, minimally invasive transjugular procedure avoiding emergency surgery."
    ],
    "benefitsHi": [
      "बिना लिवर में दोबारा नया छेद किए पुराने स्टेंट को सफलतापूर्वक चालू करना।",
      "दोबारा खून की उल्टी और पेट में पानी भरने की समस्या पर तुरंत रोक।",
      "गले के एक छोटे छेद द्वारा तुरंत राहत।"
    ],
    "specificRisksEn": [
      "Inability to traverse chronic total stent occlusion requiring de novo TIPS puncture.",
      "Hepatic encephalopathy exacerbation following restored high shunt flow.",
      "Distal embolization of thrombus into the intrahepatic portal branches.",
      "Stent graft fracture, rupture, or displacement.",
      "Puncture site hematoma in the neck."
    ],
    "specificRisksHi": [
      "पुराने स्टेंट के अत्यधिक कड़े होने पर तार का आर-पार न हो पाना और नया शंट बनाने की जरूरत पड़ना।",
      "स्टेंट खुलते ही खून में अमोनिया बढ़ने से सुस्ती या भ्रम होना।",
      "स्टेंट के अंदर जमा खून का थक्का लिवर की अन्य नसों में जाना।",
      "स्टेंट में खिंचाव या चोट।",
      "गर्दन में सुई की जगह पर खून का थक्का जमना।"
    ],
    "alternativesEn": "De novo TIPS placement through an alternative hepatic vein, surgical portosystemic shunt, repeated endoscopic banding, or emergent liver transplantation.",
    "alternativesHi": "लिवर में दूसरी जगह बिल्कुल नया टिप्स (TIPS) बनाना, ओपन बाईपास सर्जरी, बार-बार एंडोस्कोपी बैन्डिंग, अथवा लिवर ट्रांसप्लांट।",
    "sedationTypeEn": "Local anesthesia with mild conscious sedation.",
    "sedationTypeHi": "गले में स्थानीय सुन्नता और नस द्वारा हल्की शामक दवा।"
  },
  "tips-with-variceal-embolization": {
    "id": "tips-with-variceal-embolization",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "TIPS with Simultaneous Coronary / Gastroesophageal Variceal Coil and Gelfoam Embolization",
    "nameHi": "टिप्स के साथ भोजन नली व आमाशय की फूली हुई नसों की बंदी (TIPS + Variceal Embolization - स्टेंट एवं नसों में छल्ले डालना)",
    "indicationEn": "Acute or recurrent life-threatening variceal bleeding with large patent left gastric (coronary) or posterior gastric veins that maintain persistent bleeding risk even after TIPS decompression.",
    "indicationHi": "लिवर सिरोसिस के कारण भोजन नली या आमाशय की नसों का फटना, जानलेवा खून की उल्टी होना, जहां केवल टिप्स स्टेंट लगाने के बाद भी बची हुई बड़ी नसों से दोबारा ब्लीडिंग का भारी खतरा हो।",
    "descriptionEn": "Following successful TIPS shunt creation between the hepatic and portal veins, a microcatheter is guided into the enlarged bleeding coronary (left gastric) and gastroesophageal variceal veins. Multiple metallic embolization coils and sclerosant / Gelfoam or glue are injected to permanently obliterate the varices, eliminating persistent retrograde bleeding channels.",
    "descriptionHi": "गले की नस से लिवर में टिप्स स्टेंट लगाने के बाद उसी कैथेटर द्वारा सीधे भोजन नली और आमाशय की फूली हुई खून की नसों (Varices) में पहुंचा जाता है। वहां धातु के सूक्ष्म छल्ले (Coils) और विशेष दवा डालकर उन नसों को अंदर से पूरी तरह बंद कर दिया जाता है, जिससे भविष्य में नस फटने और खून की उल्टी का खतरा हमेशा के लिए समाप्त हो जाता है।",
    "benefitsEn": [
      "Dual-mechanism protection: TIPS lowers systemic portal pressure while coil embolization physically seals the bleeding varices.",
      "Significantly lower re-bleeding rate (< 5-10%) compared to TIPS alone.",
      "Immediate definitive arrest of ongoing massive acute gastrointestinal bleeding."
    ],
    "benefitsHi": [
      "दोहरा सुरक्षा कवच: टिप्स स्टेंट लिवर का प्रेशर कम करता है और छल्ले फूली हुई नसों को स्थायी रूप से सील कर देते हैं।",
      "केवल टिप्स की तुलना में दोबारा खून की उल्टी होने का जोखिम बहुत कम (< 5-10%)।",
      "चल रहे गंभीर रक्तस्राव पर तुरंत जीवन रक्षक नियंत्रण।"
    ],
    "specificRisksEn": [
      "Non-target coil migration or glue embolization into the pulmonary circulation or portal trunk.",
      "Hepatic encephalopathy from altered shunt hemodynamics.",
      "Portal vein thrombosis if sclerosant spills into the main portal branch.",
      "Intraperitoneal hemorrhage or liver puncture site bleed.",
      "Pleural effusion or transient chest discomfort."
    ],
    "specificRisksHi": [
      "धातु के छल्ले या दवा का खिसककर फेफड़ों या लिवर की मुख्य नस में चले जाना।",
      "लिवर का खून सीधे शरीर में जाने से सुस्ती, मानसिक भ्रम या बेहोशी (Encephalopathy)।",
      "दवा के रिसाव से मुख्य पोर्टल नस में खून का थक्का जमना।",
      "पेट के अंदर खून का रिसाव।",
      "सीने में भारीपन या फेफड़े के पर्दे में हल्का पानी।"
    ],
    "alternativesEn": "TIPS creation alone without variceal embolization, emergency endoscopic band ligation (EVBL) with cyanoacrylate glue injection, balloon tamponade (Sengstaken-Blakemore tube), or emergency surgical shunt.",
    "alternativesHi": "बिना नसों को बंद किए केवल टिप्स स्टेंट लगाना, एंडोस्कोपी द्वारा बार-बार छल्ले व गोंद (Glue) लगाना, नाक से गुब्बारा डालकर नस दबाना, अथवा ओपन सर्जरी।",
    "sedationTypeEn": "Conscious sedation with local anesthesia or general anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और शामक दवा अथवा सामान्य बेहोशी।"
  },
  "brto-gastric-varices": {
    "id": "brto-gastric-varices",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Balloon-Occluded Retrograde Transvenous Obliteration (BRTO) of Gastric Varices",
    "nameHi": "बीआरईटीओ (BRTO - गैस्ट्रिक वेरिसेस / आमाशय की फूली हुई नसों को गुब्बारे व दवा द्वारा बंद करना)",
    "indicationEn": "Cirrhosis with bleeding or high-risk fundal gastric varices (Sarin type GOV2 / IGV1) draining via a gastrorenal or gastrocaval shunt, particularly in patients with baseline encephalopathy where TIPS is contraindicated.",
    "indicationHi": "लिवर सिरोसिस के कारण आमाशय (पेट) के अंदर फूली हुई नसें (Gastric Varices), जिनसे जानलेवा खून की उल्टी हो रही हो या होने का भारी खतरा हो, विशेषकर उन मरीजों में जिनमें सुस्ती (Encephalopathy) के कारण टिप्स स्टेंट नहीं लगाया जा सकता।",
    "descriptionEn": "Under local anesthesia and fluoroscopy, an occlusion balloon catheter is inserted through the femoral or jugular vein and navigated retrogradely into the gastrorenal shunt draining the gastric varices. The balloon is inflated to halt outflow. A sclerosing agent (Sodium Tetradecyl Sulfate / Ethanolamine Oleate foam) is slowly injected into the varices and allowed to dwell for several hours to permanently thrombose and obliterate the variceal complex.",
    "descriptionHi": "जांघ या गले की नस के रास्ते एक विशेष गुब्बारा कैथेटर आमाशय से जुड़ी गुर्दे की नस (Gastrorenal Shunt) में पहुंचाया जाता है। वहां गुब्बारा फुलाकर खून का निकास रोक दिया जाता है। फिर आमाशय की फूली हुई नसों में नस सुखाने वाली विशेष दवा (फोम) भरी जाती है। यह दवा नसों के अंदर खून का थक्का जमाकर उन्हें हमेशा के लिए सुखाकर बंद कर देती है।",
    "benefitsEn": [
      "High success rate (> 90-95%) for definitive eradication of life-threatening gastric varices.",
      "Improves liver function and portal hepatic perfusion by directing blood back through the liver (unlike TIPS).",
      "Significantly decreases or resolves baseline hepatic encephalopathy."
    ],
    "benefitsHi": [
      "आमाशय की जानलेवा फूली नसों को हमेशा के लिए खत्म करने में 90-95% अचूक सफलता दर।",
      "टिप्स के विपरीत, यह खून को वापस लिवर की तरफ मोड़ता है जिससे लिवर की कार्यप्रणाली सुधरती है।",
      "मरीज की पुरानी सुस्ती और भूलने की बीमारी (Encephalopathy) में भारी सुधार होता है।"
    ],
    "specificRisksEn": [
      "Worsening of esophageal varices or new ascites due to diversion of pressure to the liver (may require follow-up banding).",
      "Sclerosant leakage into systemic circulation causing pulmonary edema, hemolysis, or acute tubular necrosis.",
      "Renal vein thrombosis or balloon rupture during dwell time.",
      "Post-procedure fever, retrosternal / epigastric pain, and hemoglobinuria.",
      "Femoral puncture site hematoma."
    ],
    "specificRisksHi": [
      "दबाव लिवर की तरफ जाने से भोजन नली की अन्य नसों का फूलना या पेट में हल्का पानी आना (जिसके लिए एंडोस्कोपी बैन्डिंग की जा सकती है)।",
      "दवा के मुख्य खून में जाने से फेफड़ों में सूजन या गुर्दों पर अस्थायी असर।",
      "गुर्दे की नस में खून का थक्का जमना या गुब्बारे का समय से पहले पिचकना।",
      "प्रक्रिया के बाद 1-2 दिन बुखार, पेट दर्द और पेशाब का रंग लाल होना।",
      "जांघ में सुई की जगह खून का थक्का जमना।"
    ],
    "alternativesEn": "Endoscopic cyanoacrylate glue injection, TIPS with variceal embolization, PARTO / CARTO, partial splenic embolization, or surgical splenorenal shunt / devascularization.",
    "alternativesHi": "एंडोस्कोपी द्वारा गोंद (Glue) लगाना, टिप्स (TIPS) स्टेंट लगाना, पार्टो (PARTO) तकनीक, अथवा ओपन सर्जरी।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
    "sedationTypeHi": "जांघ में स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक दवा।"
  },
  "parto-gastric-varices": {
    "id": "parto-gastric-varices",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Plug-Assisted Retrograde Transvenous Obliteration (PARTO) of Gastric Varices",
    "nameHi": "पार्टो (PARTO - वैस्कुलर प्लग एवं जिलेटिन स्पंज द्वारा आमाशय की फूली नसों को स्थायी रूप से बंद करना)",
    "indicationEn": "Gastric fundal varices draining via a gastrorenal shunt in cirrhotic patients, providing a rapid single-session alternative to BRTO without indwelling balloon dwell time.",
    "indicationHi": "लिवर सिरोसिस के कारण आमाशय (पेट) की जानलेवा फूली हुई नसें; जिसमें बिना घंटों तक गुब्बारा फुलाए एक ही बार में धातु के विशेष प्लग और जेलफोम द्वारा नसों को तुरंत सील कर दिया जाता है।",
    "descriptionEn": "Under local anesthesia and fluoroscopy via the femoral vein, a delivery sheath is guided into the gastrorenal shunt. An Amplatzer vascular plug is deployed into the narrowest draining neck of the shunt to create mechanical occlusion. Absorbable gelatin sponge (Gelfoam) slurry mixed with contrast is injected through a microcatheter to immediately and permanently thrombose the gastric varices.",
    "descriptionHi": "जांघ की नस से कैथेटर को आमाशय से जुड़ी खून की मुख्य नस (Gastrorenal Shunt) में ले जाया जाता है। वहां एक धातु की जालीदार डाट (Amplatzer Vascular Plug) स्थापित कर दी जाती है जो नस के मुंह को तुरंत बंद कर देती है। फिर जेलफोम और दवा डालकर आमाशय की फूली हुई नसों को अंदर से पूरी तरह सुखा दिया जाता है।",
    "benefitsEn": [
      "Single-session rapid procedure: Completely eliminates the uncomfortable 4-hour balloon catheter indwelling time of BRTO.",
      "Lower risk of sclerosant-induced systemic hemolysis and renal failure (uses inert Gelfoam rather than toxic STS liquid).",
      "Immediate permanent mechanical occlusion of the gastrorenal shunt."
    ],
    "benefitsHi": [
      "एक ही बार में तुरंत पूरा होने वाला इलाज: बीआरईटीओ (BRTO) की तरह घंटों तक जांघ में फूला हुआ गुब्बारा रखने की जरूरत नहीं।",
      "गुर्दों पर बुरा असर पड़ने या पेशाब में खून आने का कोई खतरा नहीं (हानिरहित जेलफोम का उपयोग)।",
      "प्लग द्वारा नस का तुरंत और स्थायी रूप से बंद होना।"
    ],
    "specificRisksEn": [
      "Plug migration into the left renal vein or inferior vena cava (IVC) if undersized.",
      "Worsening or exacerbation of esophageal varices due to redirected portal pressure.",
      "Incomplete variceal thrombosis requiring secondary coil embolization.",
      "Transient ascites accumulation.",
      "Access site groin hematoma."
    ],
    "specificRisksHi": [
      "प्लग का आकार छोटा होने पर खिसककर गुर्दे की मुख्य नस में चले जाना।",
      "दबाव बढ़ने से भोजन नली की अन्य नसों का उभरना।",
      "गांठ का कुछ हिस्सा अधूरा बंद होना जिसके लिए अतिरिक्त छल्ले डालने पड़ सकते हैं।",
      "पेट में हल्का पानी आना।",
      "जांघ में सुई की जगह खून का थक्का जमना।"
    ],
    "alternativesEn": "BRTO with balloon catheter, CARTO (coil-assisted), TIPS creation, endoscopic cyanoacrylate glue injection, or surgical shunt.",
    "alternativesHi": "बीआरईटीओ (गुब्बारे द्वारा), कार्टो (छल्लों द्वारा), टिप्स (TIPS) स्टेंट, एंडोस्कोपी द्वारा गोंद लगाना, अथवा ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
    "sedationTypeHi": "जांघ में स्थानीय सुन्नता और नस द्वारा हल्की शामक दवा।"
  },
  "carto-gastric-varices": {
    "id": "carto-gastric-varices",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Coil-Assisted Retrograde Transvenous Obliteration (CARTO) of Gastric Varices",
    "nameHi": "कार्टो (CARTO - माइक्रो-कॉइल्स एवं जेलफोम द्वारा आमाशय की फूली हुई नसों की बंदी)",
    "indicationEn": "Gastric varices with gastrorenal shunt where anatomy (e.g., short shunt neck, tortuous course, or large diameter > 20 mm) is unsuitable for a rigid vascular plug or balloon catheter.",
    "indicationHi": "आमाशय की फूली हुई नसें जहां नस की अत्यधिक चौड़ाई या टेढ़े-मेढ़े रास्ते के कारण प्लग या गुब्बारा लगाना संभव न हो और धातु के छल्लों (Coils) द्वारा नस को बंद करना जरूरी हो।",
    "descriptionEn": "Under fluoroscopic guidance via the femoral vein, a microcatheter is navigated into the gastrorenal shunt. Multiple detachable or pushable metallic embolization coils are packed tightly across the outflow tract to form a dense coil scaffold. Gelatin sponge slurry or sclerosant foam is injected into the variceal nidus behind the coil framework, sealing the varices completely.",
    "descriptionHi": "जांघ की नस से कैथेटर को आमाशय की नस में पहुंचाया जाता है। वहां धातु के कई सूक्ष्म छल्ले (Coils) एक-दूसरे के ऊपर कसकर बिछाए जाते हैं, जिससे छल्लों का एक मजबूत जाल बन जाता है। इसके बाद उस जाल के पीछे विशेष दवा और जेलफोम भरकर आमाशय की फूली नसों को हमेशा के लिए बंद कर दिया जाता है।",
    "benefitsEn": [
      "Highly adaptable to tortuous, short, or wide-necked shunts where plugs fail to anchor.",
      "Immediate mechanical occlusion without requiring prolonged balloon inflation.",
      "Eliminates risk of balloon rupture or catheter slippage."
    ],
    "benefitsHi": [
      "अत्यधिक टेढ़ी-मेढ़ी और चौड़ी नसों में भी छल्लों द्वारा आसानी से पक्की पकड़ और बंदी।",
      "गुब्बारा फुलाए बिना तुरंत नस का बंद होना।",
      "गुब्बारा फटने या खिसकने का कोई जोखिम नहीं।"
    ],
    "specificRisksEn": [
      "Coil migration into left renal vein, IVC, or pulmonary circulation if anchoring is insecure.",
      "Incomplete occlusion requiring higher number of coils or supplementary sclerosant.",
      "Exacerbation of esophageal varices due to portal flow redirection.",
      "Access site hematoma or pseudoaneurysm.",
      "Transient post-procedure fever and pain."
    ],
    "specificRisksHi": [
      "छल्लों के खिसककर गुर्दे की नस या फेफड़ों में जाने का जोखिम (यदि नस बहुत चौड़ी हो)।",
      "नस पूरी तरह बंद न होने पर अतिरिक्त छल्ले डालने की जरूरत पड़ना।",
      "भोजन नली की अन्य नसों में खून का दबाव बढ़ना।",
      "जांघ में खून का थक्का जमना।",
      "प्रक्रिया के बाद हल्का बुखार व दर्द।"
    ],
    "alternativesEn": "PARTO with vascular plug, traditional BRTO, TIPS with variceal embolization, or endoscopic glue injection.",
    "alternativesHi": "पार्टो (प्लग द्वारा), बीआरईटीओ (गुब्बारे द्वारा), टिप्स (TIPS) स्टेंट, अथवा एंडोस्कोपी द्वारा गोंद लगाना।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
    "sedationTypeHi": "जांघ में स्थानीय सुन्नता और नस द्वारा हल्की शामक दवा।"
  },
  "pac-brto-gastric-varices": {
    "id": "pac-brto-gastric-varices",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Vascular-Plug Assisted Retrograde Transvenous Obliteration with Cyanoacrylate (PAC-BRTO)",
    "nameHi": "पैक-बीआरईटीओ (PAC-BRTO - वैस्कुलर प्लग एवं मेडिकल गोंद द्वारा गैस्ट्रिक वेरिसेस की तुरंत बंदी)",
    "indicationEn": "Gastric varices draining via high-flow, large gastrorenal shunts where rapid, permanent polymerizing obliteration with n-BCA tissue glue is indicated without balloon catheterization.",
    "indicationHi": "आमाशय की फूली हुई नसें जिनमें बहुत तेज रफ्तार से खून बह रहा हो, जहां वैस्कुलर प्लग लगाने के साथ-साथ मेडिकल गोंद (Cyanoacrylate Glue) डालकर नसों को तुरंत पत्थर जैसा जमाना हो।",
    "descriptionEn": "Under fluoroscopic guidance via femoral venous access, an Amplatzer vascular plug is deployed across the outflow neck of the gastrorenal shunt. A microcatheter is advanced through or alongside the plug directly into the gastric varices. N-butyl cyanoacrylate (n-BCA / Histoacryl) glue mixed with Lipiodol is injected. The glue polymerizes within seconds upon contact with blood, permanently casting and obliterating the entire variceal network.",
    "descriptionHi": "जांघ की नस से कैथेटर ले जाकर पहले मुख्य नस के मुंह पर एक धातु का प्लग लगाया जाता है। फिर एक अति-बारीक कैथेटर द्वारा आमाशय की फूली नसों के अंदर विशेष मेडिकल गोंद (Glue) और लिपिओडोल का मिश्रण डाला जाता है। खून के संपर्क में आते ही यह गोंद कुछ ही सेकंड में सख्त होकर जम जाती है और पूरी नस को तुरंत पत्थर जैसा सील कर देती है।",
    "benefitsEn": [
      "Near-instantaneous permanent polymerization: Zero balloon dwell time and zero risk of glue dislodgement behind the plug.",
      "Handles very large, high-flow gastrorenal shunts resistant to foam sclerosant.",
      "Superior long-term obliteration rate (> 98%) with near-zero recurrence."
    ],
    "benefitsHi": [
      "कुछ ही सेकंड में नसों का पत्थर जैसा जम जाना: गुब्बारा रखने की कोई जरूरत नहीं।",
      "अत्यधिक चौड़ी और तेज खून के बहाव वाली नसों का भी अचूक इलाज।",
      "नसों के दोबारा फूलने की संभावना न के बराबर (< 2%)।"
    ],
    "specificRisksEn": [
      "Catheter gluing / entrapment: Microcatheter tip adhering to polymerized glue if not flushed and withdrawn immediately.",
      "Non-target glue embolization through collateral channels into pulmonary arteries.",
      "Worsening of esophageal varices due to abrupt portal pressure elevation.",
      "Abdominal cramping and post-procedure fever.",
      "Puncture site groin hematoma."
    ],
    "specificRisksHi": [
      "दवा जमते समय कैथेटर की नोक का चिपक जाना (जिससे बचने हेतु तुरंत कैथेटर खींचा जाता है)।",
      "गोंद के सूक्ष्म कणों का फेफड़ों की नसों में चले जाना।",
      "भोजन नली की अन्य नसों में दबाव बढ़ना।",
      "पेट में मरोड़ या हल्का बुखार।",
      "जांघ में सुई की जगह खून जमना।"
    ],
    "alternativesEn": "PARTO with Gelfoam, conventional BRTO with foam sclerosant, TIPS with coil embolization, or endoscopic glue injection.",
    "alternativesHi": "पार्टो (जेलफोम द्वारा), बीआरईटीओ (फोम द्वारा), टिप्स (TIPS) स्टेंट, अथवा एंडोस्कोपी द्वारा गोंद लगाना।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
    "sedationTypeHi": "जांघ में स्थानीय सुन्नता और नस द्वारा शामक दवा।"
  },
  "pto-ectopic-varices": {
    "id": "pto-ectopic-varices",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Percutaneous Transhepatic Obliteration (PTO) of Ectopic Duodenal / Stomal Varices",
    "nameHi": "एक्टोपिक वेरिसेस हेतु परक्यूटेनियस ट्रांसहेपेटिक ओब्लिट्रेशन (PTO - छोटी आंत या स्टोमा की फूली नसों को लिवर के रास्ते बंद करना)",
    "indicationEn": "Severe, life-threatening gastrointestinal bleeding from ectopic varices (duodenal, jejunal, colonic, or stomal varices) inaccessible to standard endoscopy in patients with portal hypertension.",
    "indicationHi": "लिवर सिरोसिस के कारण छोटी आंत (Duodenum), बड़ी आंत या पेट पर बने मल के रास्ते (Stoma) के आसपास फूली हुई नसों से लगातार या जानलेवा खून बहना, जहां सामान्य एंडोस्कोपी नहीं पहुंच पाती।",
    "descriptionEn": "Under local anesthesia and ultrasound/fluoroscopy guidance, a needle is placed percutaneously through the right liver lobe into an intrahepatic portal vein branch. A catheter is navigated antegrade through the portal system into the mesenteric veins feeding the ectopic bleeding varices. Metallic coils, Gelfoam, or sclerosant/glue are delivered directly into the ectopic varices to permanently arrest the hemorrhage.",
    "descriptionHi": "सोनोग्राफी और एक्स-रे की निगरानी में पेट के दाहिने हिस्से से लिवर की मुख्य नस (पोर्टल वेन) में एक बारीक सुई डाली जाती है। तार और कैथेटर के सहारे आंतों की उस नस तक पहुंचा जाता है जहां से खून बह रहा है। वहां सूक्ष्म धातु के छल्ले (Coils) और विशेष दवा डालकर फूली हुई नसों को अंदर से पूरी तरह सील कर दिया जाता है ताकि खून बहना तुरंत बंद हो सके।",
    "benefitsEn": [
      "Direct targeted treatment for life-threatening bleeding sites that cannot be reached or treated by endoscopy.",
      "Immediate definitive cessation of obscure lower or mid-gut hemorrhage.",
      "Avoids emergency high-risk open bowel resection in decompensated cirrhotic patients."
    ],
    "benefitsHi": [
      "उन जानलेवा नसों का सटीक इलाज जहां एंडोस्कोपी दूरबीन नहीं पहुंच सकती।",
      "आंतों या स्टोमा से बह रहे खून पर तुरंत जीवन रक्षक नियंत्रण।",
      "गंभीर सिरोसिस के मरीज में आंत काटने के बड़े व जोखिम भरे ऑपरेशन से बचाव।"
    ],
    "specificRisksEn": [
      "Intraperitoneal hemorrhage from the transhepatic liver puncture tract (requires tract plug embolization).",
      "Portal vein thrombosis or mesenteric venous infarction.",
      "Biliary puncture, biloma, or hemobilia.",
      "Variceal recurrence or shift of bleeding to other sites.",
      "Post-procedure fever and abdominal tenderness."
    ],
    "specificRisksHi": [
      "लिवर में सुई लगने के रास्ते से पेट में खून का रिसाव (जिससे बचने हेतु सुई का रास्ता कॉइल/जेल से बंद किया जाता है)।",
      "लिवर या आंत की मुख्य नस में खून का थक्का जमना।",
      "पित्त की नली में चोट या पित्त का रिसाव।",
      "भविष्य में किसी अन्य जगह पर नसों का फूलना।",
      "प्रक्रिया के बाद पेट दर्द और हल्का बुखार।"
    ],
    "alternativesEn": "TIPS creation to decompress global portal pressure, surgical stomal revision or bowel resection, endoscopic band ligation (if reachable), or conservative blood transfusion support.",
    "alternativesHi": "टिप्स (TIPS) स्टेंट लगाना, स्टोमा का दोबारा ऑपरेशन या आंत काटना, अथवा केवल खून चढ़ाकर दवाइयां देना।",
    "sedationTypeEn": "Local anesthesia with IV analgesia and conscious sedation.",
    "sedationTypeHi": "लिवर के ऊपर स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक व शामक दवा।"
  },
  "ptp-ehpvo-stenting": {
    "id": "ptp-ehpvo-stenting",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Percutaneous Transhepatic Portography and Portal Vein Stenting for Chronic EHPVO",
    "nameHi": "ईएचपीवीओ हेतु पोर्टल नस स्टेंटिंग (EHPVO Stenting - लिवर की सूखी/बंद पोर्टल नस को खोलकर धातु का स्टेंट लगाना)",
    "indicationEn": "Extrahepatic Portal Vein Obstruction (EHPVO) with cavernous transformation causing recurrent severe variceal bleeding, hypersplenism, or portal biliopathy in non-cirrhotic patients where Rex shunt is anatomically impossible.",
    "indicationHi": "लिवर के बाहर की मुख्य पोर्टल नस का बचपन या पुरानी बीमारी से बंद हो जाना (EHPVO), नसों का जाल (Cavernoma) बनना, बार-बार खून की उल्टी होना, तिल्ली (Spleen) अत्यधिक बढ़ना अथवा पित्त की नली पर दबाव पड़ना।",
    "descriptionEn": "Under ultrasound and fluoroscopy, access into the intrahepatic portal branches is obtained via a transhepatic (or trans-splenic) approach. A guidewire and crossing catheter recanalize the chronically occluded main portal trunk through the cavernoma. Serial balloon angioplasty is performed, and large-diameter self-expanding metallic stents (SEMS) are deployed to restore physiologic hepatopetal portal blood flow directly into the liver.",
    "descriptionHi": "सोनोग्राफी की मदद से लिवर (या तिल्ली) के रास्ते बारीक तार डालकर बरसों से बंद पड़ी मुख्य पोर्टल नस के रास्ते को पार किया जाता है। विशेष गुब्बारे (Balloon) फुलाकर रास्ते को चौड़ा किया जाता है और धातु का एक मजबूत स्टेंट (Metallic Stent) स्थापित कर दिया जाता है। इससे आंतों का सारा खून दोबारा सीधे लिवर के अंदर बहने लगता है और बढ़ा हुआ दबाव खत्म हो जाता है।",
    "benefitsEn": [
      "Physiologic reconstruction: Restores normal portal perfusion to the liver and relieves extrahepatic hypertension.",
      "Definitive resolution of recurrent variceal hemorrhage and decompression of portal biliopathy.",
      "Reversal of massive splenomegaly and pancytopenia (hypersplenism)."
    ],
    "benefitsHi": [
      "प्राकृतिक रक्त प्रवाह की बहाली: आंतों का खून दोबारा सामान्य रूप से लिवर में जाने लगता है।",
      "बार-बार खून की उल्टी होने से मुक्ति और पित्त नली पर पड़ रहा दबाव समाप्त होना।",
      "तिल्ली (Spleen) का आकार छोटा होना तथा खून के कणों (प्लेटलेट्स/WBC) में सुधार।"
    ],
    "specificRisksEn": [
      "Failure to recanalize chronic fibrotic portal occlusion.",
      "Portal vein rupture or intraperitoneal extravasation during high-pressure balloon dilation.",
      "Early stent thrombosis requiring catheter-directed thrombolysis or anticoagulation.",
      "Hemoperitoneum from transhepatic or trans-splenic parenchymal tract puncture.",
      "Biliary injury or hemobilia."
    ],
    "specificRisksHi": [
      "वर्षों पुरानी कड़क नस के कारण तार आर-पार न हो पाना और प्रक्रिया का असफल होना।",
      "गुब्बारा फुलाते समय पुरानी नस का फटना या पेट में खून का रिसाव।",
      "स्टेंट में खून का थक्का जमने से स्टेंट का तुरंत बंद होना।",
      "लिवर या तिल्ली के सुई वाले छेद से पेट में खून बहना।",
      "पित्त की नली में चोट या पीलिया।"
    ],
    "alternativesEn": "Surgical Meso-Rex bypass or distal splenorenal shunt (Warren shunt), repeated lifelong endoscopic band ligation with sclerotherapy, or splenectomy with devascularization (Sugiura procedure).",
    "alternativesHi": "रेक्स शंट (Meso-Rex Bypass) सर्जरी, तिल्ली निकालने का ऑपरेशन (Splenectomy), अथवा जीवन भर एंडोस्कोपी द्वारा छल्ले लगवाना।",
    "sedationTypeEn": "Deep conscious sedation or general anesthesia.",
    "sedationTypeHi": "नस द्वारा गहरी शामक दवाइयां (Deep Sedation) अथवा पूर्ण बेहोशी।"
  },
  "spontaneous-shunt-embolization": {
    "id": "spontaneous-shunt-embolization",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Mesenteric-Caval / Splenorenal Spontaneous Shunt Embolization for Refractory Hepatic Encephalopathy",
    "nameHi": "स्वतः बने शंट का एम्बोलाइजेशन (लिवर सिरोसिस में अत्यधिक सुस्ती व बेहोशी रोकने हेतु स्प्लेनोरीनल शंट की नस बंदी)",
    "indicationEn": "Recurrent or persistent debilitating hepatic encephalopathy (West Haven Grade III-IV) in cirrhotic patients with large spontaneous portosystemic shunts (splenorenal or gastrorenal shunt > 8-10 mm) with preserved liver function (MELD < 15).",
    "indicationHi": "लिवर सिरोसिस के मरीजों में बार-बार गहरी सुस्ती, मानसिक भ्रम या बेहोशी (Hepatic Encephalopathy) होना, जो शरीर में खुद बन गई बड़ी नसों (Spontaneous Shunt) के कारण हो, जहां दवाइयों से कोई आराम न मिल रहा हो।",
    "descriptionEn": "Under local anesthesia and fluoroscopy via the femoral or internal jugular vein, a guiding catheter is positioned into the outflow of the spontaneous portosystemic shunt (e.g., left renal vein or IVC). An oversized Amplatzer vascular plug or detachable coils are deployed across the shunt trunk to completely halt non-physiologic systemic toxin shunting and redirect mesenteric portal blood flow back through the detoxifying liver parenchyma.",
    "descriptionHi": "जांघ या गले की नस से कैथेटर को उस असामान्य बड़ी नस (शंट) में ले जाया जाता है जो आंतों के अशुद्ध खून को बिना लिवर में साफ हुए सीधे शरीर में भेज रही होती है। वहां एक विशेष धातु की डाट (Vascular Plug) या छल्ले (Coils) डालकर उस नस को हमेशा के लिए बंद कर दिया जाता है। इससे सारा खून दोबारा लिवर में जाकर साफ होने लगता है।",
    "benefitsEn": [
      "Complete resolution or dramatic reduction of debilitating hepatic encephalopathy episodes (> 80% success).",
      "Restores normal mental clarity, cognitive function, and prevents recurrent hospital readmissions.",
      "Improves hepatic synthetic function and decreases MELD score by restoring intrahepatic portal perfusion."
    ],
    "benefitsHi": [
      "80% से अधिक मरीजों में बार-बार बेहोशी और सुस्ती की गंभीर समस्या से हमेशा के लिए मुक्ति।",
      "मानसिक स्पष्टता और सोचने-समझने की क्षमता दोबारा पूरी तरह सामान्य होना।",
      "लिवर में खून जाने से लिवर की कार्यक्षमता और ताकत में सुधार।"
    ],
    "specificRisksEn": [
      "Acute portal hypertension elevation causing new variceal bleeding or new/worsened ascites.",
      "Plug migration into the inferior vena cava (IVC) or pulmonary arteries if undersized.",
      "Mesenteric venous thrombosis if shunt closure precipitates extreme portal stagnation.",
      "Renal vein thrombosis or access site hematoma.",
      "Post-embolization abdominal pain and fever."
    ],
    "specificRisksHi": [
      "शंट बंद होने से लिवर का प्रेशर अचानक बढ़ने पर भोजन नली की नसों से खून बहना या पेट में पानी आना।",
      "धातु के प्लग का खिसककर दिल या फेफड़ों की मुख्य नस में चले जाना।",
      "आंतों की नसों में खून का थक्का जमना।",
      "गुर्दे की नस में थक्का या जांघ में खून जमना।",
      "प्रक्रिया के बाद पेट दर्द और बुखार।"
    ],
    "alternativesEn": "Medical therapy with high-dose lactulose, rifaximin, L-ornithine L-aspartate (LOLA), partial surgical shunt banding/ligation, or orthotopic liver transplantation.",
    "alternativesHi": "लगातार लैक्टुलोज और रिफैक्सिमिन की दवाइयां खाना, चीर-फाड़ वाला ऑपरेशन, अथवा लिवर ट्रांसप्लांट।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
    "sedationTypeHi": "जांघ में स्थानीय सुन्नता और नस द्वारा हल्की शामक दवा।"
  },
  "splenic-artery-embolization-partial": {
    "id": "splenic-artery-embolization-partial",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Partial / Proximal Splenic Artery Embolization (SAE) for Hypersplenism and Portal Pressure Reduction",
    "nameHi": "आंशिक स्प्लेनिक धमनी एम्बोलाइजेशन (SAE - तिल्ली की नस को आंशिक रूप से बंद कर प्लेटलेट्स बढ़ाना व लिवर का प्रेशर घटाना)",
    "indicationEn": "Cirrhosis with severe hypersplenism (thrombocytopenia < 50,000/uL, leukopenia) precluding necessary chemotherapy or surgery, or portal hypertension with massive splenomegaly.",
    "indicationHi": "लिवर सिरोसिस के कारण तिल्ली (Spleen) का बहुत अधिक बढ़ना, खून में प्लेटलेट्स की अत्यधिक कमी होना (< 50,000) जिसके कारण कैंसर का इलाज या अन्य ऑपरेशन न हो पा रहे हों, अथवा लिवर का बढ़ा हुआ दबाव।",
    "descriptionEn": "Under local anesthesia and fluoroscopy, a catheter is navigated from the femoral artery into the splenic artery. Metallic coils or calibrated microspheres are injected into the distal splenic branches to infarct 50-70% of the enlarged splenic parenchyma, or metallic coils are placed in the main proximal splenic artery to dampen high arterial inflow while preserving protective collateral viability.",
    "descriptionHi": "जांघ की नस से कैथेटर को तिल्ली (Spleen) को खून देने वाली मुख्य धमनी में ले जाया जाता है। वहां धातु के छल्ले (Coils) या विशेष सूक्ष्म कण डालकर तिल्ली के 50 से 70% हिस्से की खून की आपूर्ति बंद कर दी जाती है। इससे तिल्ली सिकुड़ जाती है, प्लेटलेट्स तेजी से बढ़ते हैं और लिवर का प्रेशर कम हो जाता है।",
    "benefitsEn": [
      "Significant and sustained elevation of platelet and white blood cell counts, curing hypersplenism.",
      "Lowers portal pressure and decreases bleeding risk without surgical splenectomy.",
      "Preserves remaining immunological splenic tissue against encapsulated bacterial infections."
    ],
    "benefitsHi": [
      "खून में प्लेटलेट्स और सफेद रक्त कणिकाओं में भारी और स्थायी बढ़ोतरी।",
      "तिल्ली निकालने के बड़े ऑपरेशन के बिना ही लिवर का प्रेशर कम होना और ब्लीडिंग का खतरा टलना।",
      "बची हुई तिल्ली शरीर में संक्रमण से लड़ने की ताकत बनाए रखती है।"
    ],
    "specificRisksEn": [
      "Post-Splenic Embolization Syndrome: Severe left upper quadrant pain, high fever, and nausea lasting 4-7 days (expected in nearly all patients).",
      "Splenic abscess formation requiring antibiotics or percutaneous drainage (2-5%).",
      "Left pleural effusion or left lower lobe atelectasis/pneumonia.",
      "Non-target embolization to pancreas or stomach causing pancreatitis or gastric ulcer.",
      "Splenic rupture (rare, < 1%)."
    ],
    "specificRisksHi": [
      "पोस्ट-एम्बोलाइजेशन सिंड्रोम: 4 से 7 दिन तक पेट के बाएं हिस्से में तेज दर्द, तेज बुखार और उल्टी (अधिकांश मरीजों में संभावित)।",
      "तिल्ली में मवाद या फोड़ा (Splenic Abscess) बनना जिसके लिए नली डालनी पड़ सकती है।",
      "बाएं फेफड़े के पर्दे में पानी भरना या खांसी।",
      "दवा का पैंक्रियाज या पेट में जाने से वहां सूजन या छाला।",
      "तिल्ली के फटने का अत्यंत दुर्लभ जोखिम।"
    ],
    "alternativesEn": "Open or laparoscopic total splenectomy, transjugular intrahepatic portosystemic shunt (TIPS), thrombopoietin receptor agonists (Eltrombopag / Avatrombopag), or conservative observation.",
    "alternativesHi": "तिल्ली निकालने का बड़ा ऑपरेशन (Splenectomy), टिप्स (TIPS) स्टेंट, प्लेटलेट बढ़ाने वाली गोलियां (Eltrombopag), अथवा केवल निगरानी।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation and scheduled multi-modal analgesia.",
    "sedationTypeHi": "जांघ में स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा तेज दर्द निवारक व शामक दवा।"
  },
  "sae-splenic-steal-syndrome": {
    "id": "sae-splenic-steal-syndrome",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Splenic Artery Embolization for Splenic Steal Syndrome Post-Orthotopic Liver Transplant (OLT)",
    "nameHi": "लिवर ट्रांसप्लांट के बाद स्प्लेनिक आर्टरी एम्बोलाइजेशन (Splenic Steal Syndrome - तिल्ली की नस बंद कर नए लिवर में खून का बहाव बढ़ाना)",
    "indicationEn": "Splenic artery steal syndrome (SASS) following orthotopic liver transplantation, where an enlarged splenic artery diverts arterial flow away from the hepatic graft, causing graft ischemia, elevated transaminases, or biliary strictures.",
    "indicationHi": "लिवर ट्रांसप्लांट (Liver Transplant) के बाद तिल्ली की नस द्वारा सारा खून अपनी तरफ खींच लेना (Splenic Steal), जिसके कारण नए लिवर को पर्याप्त खून न मिलना, लिवर एंजाइम बढ़ना अथवा पित्त की नली में खराबी आना।",
    "descriptionEn": "Under local anesthesia and fluoroscopy via femoral access, a catheter is navigated into the celiac axis and splenic artery. Pressure manometry and angiography confirm diversion of flow to the spleen and sluggish hepatic artery filling. Metallic coils or an Amplatzer vascular plug are deployed in the proximal splenic artery, increasing vascular resistance and immediately redistributing abundant arterial blood flow into the transplanted liver.",
    "descriptionHi": "जांघ की नस से कैथेटर को पेट की मुख्य धमनी से तिल्ली की नस में ले जाया जाता है। एक्स-रे पर देखा जाता है कि तिल्ली सारा खून खींच रही है और नए लिवर को खून नहीं मिल पा रहा। वहां धातु के छल्ले (Coils) या प्लग डालकर तिल्ली की नस को आंशिक रूप से बंद कर दिया जाता है, जिससे सारा खून मुड़कर सीधे नए लिवर में जाने लगता है।",
    "benefitsEn": [
      "Immediately restores brisk arterial blood supply to the transplanted liver graft.",
      "Prevents catastrophic hepatic artery thrombosis, ischemic graft necrosis, and re-transplantation.",
      "Reverses graft dysfunction and promotes healing of ischemic biliary anastomoses."
    ],
    "benefitsHi": [
      "ट्रांसप्लांट किए गए नए लिवर में खून का बहाव तुरंत सामान्य और तेज हो जाना।",
      "नए लिवर की नस में थक्का जमने और लिवर फेल होने से 100% जीवन रक्षक बचाव।",
      "लिवर की पित्त नलियों को गलने और सिकुड़ने से बचाना।"
    ],
    "specificRisksEn": [
      "Splenic infarction causing left upper quadrant pain and fever.",
      "Non-target coil migration into the celiac axis or hepatic artery (catastrophic graft injury).",
      "Splenic abscess requiring percutaneous drainage.",
      "Transient increase in pancreatic enzymes.",
      "Puncture site groin hematoma."
    ],
    "specificRisksHi": [
      "तिल्ली में खून कम होने से बाएं हिस्से में दर्द और बुखार।",
      "धातु के छल्ले का खिसककर नए लिवर की मुख्य नस में चले जाने का दुर्लभ जोखिम।",
      "तिल्ली में मवाद बनना।",
      "पैंक्रियाज के एंजाइम में अस्थायी वृद्धि।",
      "जांघ में सुई की जगह खून जमना।"
    ],
    "alternativesEn": "Surgical relaparotomy with open splenic artery ligation or banding, surgical splenectomy, or urgent liver re-transplantation.",
    "alternativesHi": "पेट दोबारा खोलकर तिल्ली की नस को धागे से बांधने का बड़ा ऑपरेशन (Surgical Ligation), अथवा दोबारा लिवर ट्रांसप्लांट।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
    "sedationTypeHi": "जांघ में स्थानीय सुन्नता और नस द्वारा हल्की शामक दवा।"
  },
  "pve-ipsilateral-approach": {
    "id": "pve-ipsilateral-approach",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Portal Vein Embolization (PVE) - Ipsilateral Approach for Future Liver Remnant (FLR) Hypertrophy",
    "nameHi": "पोर्टल वेन एम्बोलाइजेशन (PVE - लिवर के बड़े ऑपरेशन से पहले स्वस्थ हिस्से को बड़ा करने हेतु नस बंदी - उसी तरफ से)",
    "indicationEn": "Planned major hepatic resection (right hepatectomy or extended right hepatectomy) for colorectal liver metastases, cholangiocarcinoma, or HCC where future liver remnant (FLR) is inadequate (< 20-25% in normal liver, < 40% in cirrhosis).",
    "indicationHi": "लिवर के कैंसर के बड़े ऑपरेशन से पहले, जहां बचने वाले स्वस्थ लिवर (FLR) का आकार बहुत छोटा हो और ऑपरेशन के बाद लिवर फेल होने का खतरा हो; अतः ऑपरेशन से पहले स्वस्थ हिस्से को बड़ा करने हेतु।",
    "descriptionEn": "Under local anesthesia and ultrasound/fluoroscopy guidance, a needle punctures an intrahepatic portal branch within the diseased liver lobe planned for future surgical removal (ipsilateral access). A catheter is guided into the right portal vein branches. Calibrated microspheres, Gelfoam, and metallic coils or glue are injected to permanently block right portal flow, diverting 100% of portal blood to the healthy left lobe to stimulate rapid liver regeneration (hypertrophy) over 3-6 weeks.",
    "descriptionHi": "पेट के दाहिने हिस्से को सुन्न करके सीटी/सोनोग्राफी की मदद से बीमार लिवर (जिसे बाद में काटा जाना है) की नस में सुई डाली जाती है। वहां से विशेष कण और छल्ले डालकर उस हिस्से की पोर्टल नस को बंद कर दिया जाता है। सारा खून स्वस्थ बाएं हिस्से की तरफ मुड़ जाता है, जिससे वह हिस्सा 3 से 6 सप्ताह में तेजी से बढ़कर दोगुना हो जाता है और सुरक्षित ऑपरेशन संभव हो पाता है।",
    "benefitsEn": [
      "Stimulates 40-70% volumetric growth (hypertrophy) of the future liver remnant within 3-4 weeks.",
      "Converts previously inoperable, high-risk patients into safe candidates for curative liver resection.",
      "Spares the healthy future liver remnant (left lobe) from needle puncture or trauma.",
      "Dramatically reduces postoperative liver failure and mortality after major hepatectomy."
    ],
    "benefitsHi": [
      "स्वस्थ लिवर का आकार 3 से 4 हफ्तों में 40 से 70% तक बढ़ जाना।",
      "असाध्य और जोखिम भरे मरीजों को भी सुरक्षित और सफल ऑपरेशन के योग्य बनाना।",
      "बचने वाले स्वस्थ हिस्से में कोई सुई या छेद नहीं किया जाता, वह पूरी तरह सुरक्षित रहता है।",
      "ऑपरेशन के बाद लिवर फेल होने के जानलेवा खतरे से पूर्ण बचाव।"
    ],
    "specificRisksEn": [
      "Inadvertent non-target embolization of left portal vein branches (catastrophic loss of resectability).",
      "Intraperitoneal bleeding or subcapsular hematoma from liver puncture tract.",
      "Portal vein thrombosis extending into the main portal vein trunk.",
      "Biliary injury or biloma formation.",
      "Failure of the remnant liver to sufficiently hypertrophy (especially in severe cirrhosis or post-chemotherapy liver)."
    ],
    "specificRisksHi": [
      "गलती से स्वस्थ बाएं हिस्से की नस में दवा चले जाने का गंभीर जोखिम (जिससे ऑपरेशन रद्द हो सकता है)।",
      "लिवर में सुई लगने की जगह से पेट में खून का रिसाव।",
      "मुख्य पोर्टल नस में खून का थक्का जमना।",
      "पित्त की नली में चोट या पित्त रिसाव।",
      "सिरोसिस या अत्यधिक कीमोथेरेपी के कारण स्वस्थ हिस्से का पर्याप्त न बढ़ पाना।"
    ],
    "alternativesEn": "Two-stage surgical hepatectomy with portal vein ligation, Associating Liver Partition and Portal vein ligation for Staged hepatectomy (ALPPS), contralateral approach PVE, or non-surgical systemic/locoregional therapy.",
    "alternativesHi": "दो चरणों वाला बड़ा ऑपरेशन (ALPPS सर्जरी), दूसरी तरफ से पीवीई (Contralateral PVE), अथवा केवल कीमोथेरेपी दवाइयां।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
    "sedationTypeHi": "लिवर पर स्थानीय सुन्नता और नस द्वारा दर्द निवारक व शामक दवा।"
  },
  "pve-contralateral-nbca": {
    "id": "pve-contralateral-nbca",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Portal Vein Embolization (PVE) - Contralateral Approach with n-BCA Glue and Lipiodol",
    "nameHi": "पोर्टल वेन एम्बोलाइजेशन (PVE - विपरीत बाएं हिस्से से मेडिकल गोंद द्वारा दाहिने लिवर की नस बंदी)",
    "indicationEn": "Planned right hepatectomy where technical or anatomical factors (e.g., bulky right lobe tumor mass occupying the entire right parenchyma) make ipsilateral right-sided needle puncture impossible or hazardous.",
    "indicationHi": "दाहिने लिवर के कैंसर के बड़े ऑपरेशन से पहले, जहां दाहिने हिस्से में बहुत बड़ी गांठ होने के कारण वहां सुई लगाना संभव या सुरक्षित न हो, अतः बाएं स्वस्थ हिस्से से सुई डालकर दाहिनी नस को बंद करना।",
    "descriptionEn": "Under ultrasound guidance, an intrahepatic portal branch of the left liver lobe is accessed. A catheter is navigated across the portal bifurcation into the right portal branches. Under rigorous fluoroscopic roadmapping, a mixture of N-butyl cyanoacrylate (n-BCA tissue glue) and Lipiodol is injected into the right portal tree to achieve immediate, permanent cast occlusion, redirecting all portal inflow to the left lobe to induce rapid hypertrophy.",
    "descriptionHi": "सोनोग्राफी की निगरानी में बाएं स्वस्थ लिवर की नस में बारीक सुई डाली जाती है। वहां से कैथेटर को दाहिनी नस में ले जाया जाता है। फिर विशेष मेडिकल गोंद (Glue) और लिपिओडोल का मिश्रण दाहिने लिवर की नसों में छोड़ा जाता है। यह गोंद तुरंत जमकर दाहिनी नसों को पूरी तरह सील कर देती है, जिससे सारा खून बाएं हिस्से में बहने लगता है और वह तेजी से बड़ा हो जाता है।",
    "benefitsEn": [
      "Technically straightforward catheter trajectory: Straight push from left portal vein into right portal branches.",
      "n-BCA glue produces dense, non-recanalizing portal occlusion with faster and more robust remnant hypertrophy than particles.",
      "Avoids puncturing through right lobe malignant tumors, completely preventing needle-track tumor seeding."
    ],
    "benefitsHi": [
      "कैथेटर का रास्ता सीधा और आसान होना जिससे प्रक्रिया जल्दी पूरी होती है।",
      "मेडिकल गोंद (Glue) से नसें इतनी मजबूत बंद होती हैं कि लिवर बहुत तेजी से और बड़ा होता है।",
      "कैंसर की गांठ में कोई सुई नहीं लगती, जिससे कैंसर के कण फैलने का खतरा शून्य हो जाता है।"
    ],
    "specificRisksEn": [
      "Glue spillover or reflux into the left portal vein or main trunk (catastrophic thrombosis of healthy remnant).",
      "Puncture site hematoma or bile leak in the precious future liver remnant.",
      "Catheter gluing / entrapment during injection.",
      "Transient post-embolization transaminitis and fever.",
      "Intra-abdominal hemorrhage."
    ],
    "specificRisksHi": [
      "गोंद का छलककर स्वस्थ बाएं हिस्से की नस में आ जाना (अत्यंत गंभीर जोखिम, जिससे बचने हेतु अत्यंत सावधानी बरती जाती है)।",
      "स्वस्थ बाएं हिस्से में सुई लगने से वहां खून या पित्त का रिसाव।",
      "गोंद जमते समय कैथेटर की नोक का चिपक जाना।",
      "प्रक्रिया के बाद 1-2 दिन हल्का बुखार और दर्द।",
      "पेट में आंतरिक रक्तस्राव।"
    ],
    "alternativesEn": "Ipsilateral PVE with particles/coils, surgical portal vein ligation (PVL), ALPPS procedure, or trans-splenic access PVE.",
    "alternativesHi": "दाहिनी तरफ से पीवीई (Ipsilateral PVE), ऑपरेशन द्वारा नस बांधना, अथवा एएलपीएस (ALPPS) सर्जरी।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
  },
  "hvd-lvd-simultaneous": {
    "id": "hvd-lvd-simultaneous",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Hepatic Vein Deprivation (HVD / Liver Venous Deprivation LVD): Simultaneous PVE and Hepatic Vein Plug/Coils",
    "nameHi": "लिवर वेनस डिप्राइवेशन (LVD / HVD - पोर्टल नस एवं हेपेटिक नस दोनों की एक साथ बंदी द्वारा लिवर को अत्यधिक तेजी से बढ़ाना)",
    "indicationEn": "Extremely small future liver remnant (FLR < 20% in normal liver, < 30-35% in cirrhotic or heavily pre-treated post-chemo liver) requiring maximum acceleration of hypertrophy before extended hepatectomy, where standard PVE alone is inadequate.",
    "indicationHi": "लिवर के बड़े ऑपरेशन से पहले जब बचने वाला स्वस्थ लिवर अत्यधिक छोटा हो, मरीज को बहुत अधिक कीमोथेरेपी लग चुकी हो और सामान्य पीवीई (PVE) से लिवर पर्याप्त न बढ़ पा रहा हो; अतः दोनों नसों को एक साथ बंद कर लिवर को रिकॉर्ड समय में बड़ा करना।",
    "descriptionEn": "In a single combined intervention, two procedures are performed simultaneously: First, portal vein embolization (PVE) of the right portal branches is completed using particles/glue. Second, access is obtained into the right hepatic vein (via transjugular or transhepatic approach), and a large Amplatzer vascular plug and coils are deployed to occlude the right and middle hepatic venous outflow, completely depriving the diseased liver of both inflow and outflow to trigger explosive contralateral hypertrophy.",
    "descriptionHi": "एक ही प्रक्रिया में दोहरी तकनीक अपनाई जाती है: पहले दाहिने लिवर की पोर्टल नस को कणों या गोंद से बंद किया जाता है। फिर उसी समय गले या पेट के रास्ते दाहिने लिवर की मुख्य निकास नस (Hepatic Vein) में एक बड़ा धातु का प्लग और छल्ले लगाकर उसे भी पूरी तरह बंद कर दिया जाता है। इससे बीमार हिस्से का आना और जाना दोनों बंद हो जाते हैं और स्वस्थ बायां लिवर मात्र 1 से 2 हफ्ते में अत्यधिक तेजी से बड़ा हो जाता है।",
    "benefitsEn": [
      "Significantly faster and greater hypertrophy of the remnant liver (up to 50-60% increase in 7-14 days) compared to PVE alone.",
      "Abolishes veno-venous collaterals that blunt hypertrophy after conventional PVE.",
      "Provides a minimally invasive percutaneous alternative to the highly morbid surgical ALPPS procedure."
    ],
    "benefitsHi": [
      "केवल 7 से 14 दिनों में स्वस्थ लिवर का आकार 50 से 60% तक बढ़ जाना (सामान्य पीवीई से दोगुना तेज)।",
      "चोरी-छिपे बनने वाली नसों को रोककर पूरा पोषण स्वस्थ हिस्से में भेजना।",
      "जोखिम भरी ओपन एएलपीएस (ALPPS) सर्जरी से पूर्ण बचाव।"
    ],
    "specificRisksEn": [
      "Massive right lobe hepatic congestion and necrosis causing transient severe transaminitis, pain, and fever.",
      "Non-target vascular plug migration into inferior vena cava (IVC) or right atrium.",
      "Inadvertent occlusion of the middle hepatic vein trunk when draining the remnant segments.",
      "Intraperitoneal hemorrhage from liver access tracts.",
      "Ascites or transient liver decompensation."
    ],
    "specificRisksHi": [
      "दाहिने हिस्से में खून रुकने से 2-3 दिन तक तेज पेट दर्द, तेज बुखार और लिवर एंजाइम बढ़ना।",
      "धातु के प्लग का खिसककर दिल या महाशिरा (IVC) में चले जाना।",
      "स्वस्थ हिस्से को खून देने वाली बीच की नस का बंद होना।",
      "लिवर के सुई वाले रास्ते से पेट में खून का रिसाव।",
      "पेट में अस्थायी रूप से पानी आना।"
    ],
    "alternativesEn": "Conventional PVE alone, surgical Associating Liver Partition and Portal vein ligation (ALPPS), two-stage surgical resection, or systemic therapy.",
    "alternativesHi": "केवल सामान्य पीवीई (PVE), खुली सर्जरी (ALPPS), अथवा कीमोथेरेपी दवाइयां।",
    "sedationTypeEn": "Conscious sedation with local anesthesia or light general anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक दवाइयां अथवा हल्की बेहोशी।"
  },
  "tjlb-tract-plug": {
    "id": "tjlb-tract-plug",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Transjugular Liver Biopsy (TJLB) with Core Biopsy Needle and Post-Biopsy Tract Plug Embolization",
    "nameHi": "ट्रांसजुगुलर लिवर बायोप्सी (TJLB - गले की नस के रास्ते लिवर से मांस का टुकड़ा निकालना एवं छेद को सील करना)",
    "indicationEn": "Diffuse liver parenchymal disease (cirrhosis, unexplained hepatitis, graft rejection post-OLT) in patients with severe coagulopathy (INR > 1.5, Platelets < 50,000/uL) or massive tense ascites where percutaneous liver biopsy carries unacceptable bleeding risk.",
    "indicationHi": "लिवर की बीमारी, पीलिया या सिरोसिस की जांच हेतु लिवर से मांस का टुकड़ा (बायोप्सी) निकालना, विशेषकर उन मरीजों में जिनका खून बहुत पतला हो, प्लेटलेट्स बहुत कम हों या पेट में भारी पानी भरा हो, जहां बाहर से सुई लगाना जानलेवा हो सकता है।",
    "descriptionEn": "Under local anesthesia and ultrasound guidance, access is gained into the right internal jugular vein in the neck. A long curved cannula is advanced under fluoroscopy into the right hepatic vein inside the liver. A specialized spring-loaded core biopsy needle is fired through the vein wall into the liver tissue to obtain core specimens. Following sampling, the biopsy tract is plugged with metallic microcoils or Gelfoam torpedoes to prevent internal bleeding.",
    "descriptionHi": "गले की नस (जुगुलर वेन) को सुन्न करके एक बारीक नली एक्स-रे की निगरानी में लिवर की नस (हेपेटिक वेन) तक पहुंचाई जाती है। नस के अंदर से ही एक विशेष बायोप्सी सुई द्वारा लिवर के मांस का एक अत्यंत छोटा टुकड़ा निकाला जाता है। टुकड़ा निकालने के बाद सुई के रास्ते को तुरंत छोटे छल्ले (Coils) या विशेष जेल से सील कर दिया जाता है ताकि खून बिल्कुल न बहे।",
    "benefitsEn": [
      "Safe liver biopsy in patients with severe bleeding disorders or massive ascites where percutaneous biopsy is strictly contraindicated.",
      "Any potential bleeding from the puncture decompresses harmlessly back into the hepatic vein circulation rather than the abdominal cavity.",
      "Simultaneous hemodynamic measurement of Hepatic Venous Pressure Gradient (HVPG) can be performed during the same access."
    ],
    "benefitsHi": [
      "खून पतला होने या पेट में पानी होने पर भी 100% सुरक्षित बायोप्सी।",
      "यदि सुई से थोड़ा खून निकलता भी है तो वह पेट में नहीं बहता, बल्कि नस के अंदर ही बह जाता है।",
      "उसी समय लिवर के बढ़े हुए ब्लड प्रेशर (HVPG) की भी सटीक जांच हो जाती है।"
    ],
    "specificRisksEn": [
      "Liver capsular perforation causing intraperitoneal hemorrhage (1-2%; managed with tract coil embolization).",
      "Hemobilia (puncture into adjacent intrahepatic bile duct causing transient melena or biliary colic).",
      "Neck puncture site hematoma or accidental carotid artery puncture (< 1%).",
      "Transient cardiac arrhythmia (premature ventricular contractions) during wire transit through right atrium.",
      "Inadequate tissue specimen for histopathological diagnosis (< 3%)."
    ],
    "specificRisksHi": [
      "सुई लिवर के बाहरी पर्दे को पार करने पर पेट में खून का रिसाव (1-2%) जिसे छल्ले डालकर सील किया जाता है।",
      "पित्त की नली में सुई लगने से थोड़े समय के लिए पेट दर्द या मल में खून आना।",
      "गर्दन में सुई की जगह पर खून का थक्का जमना।",
      "तार दिल से गुजरते समय कुछ पलों के लिए दिल की धड़कन तेज या अनियमित होना।",
      "मांस का टुकड़ा छोटा होने पर जांच में कठिनाई होना (< 3%)।"
    ],
    "alternativesEn": "Percutaneous ultrasound-guided core liver biopsy (if platelets and INR can be temporarily corrected), laparoscopic surgical biopsy, or non-invasive fibrosis testing (FibroScan / MR elastography - provides no histology).",
    "alternativesHi": "पेट के रास्ते बाहर से सुई द्वारा बायोप्सी (यदि खून ठीक किया जा सके), दूरबीन द्वारा सर्जरी, अथवा फाइब्रोस्कैन (FibroScan - जो बीमारी का कारण नहीं बता सकता)।",
    "sedationTypeEn": "Local anesthesia with mild conscious sedation.",
    "sedationTypeHi": "गले में स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
  },
  "hvpg-measurement": {
    "id": "hvpg-measurement",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Hepatic Venous Pressure Gradient (HVPG) Catheter Measurement with Wedged/Free Manometry",
    "nameHi": "एचवीपीजी माप (HVPG Measurement - गले की नस द्वारा लिवर के अंदर का रक्तचाप नापने की जांच)",
    "indicationEn": "Gold standard diagnostic hemodynamic assessment of sinusoidal portal hypertension in chronic liver disease: stratifies risk of variceal bleeding (HVPG >= 12 mmHg), decompensation (HVPG >= 10 mmHg), guides beta-blocker response, and assesses surgical resection safety.",
    "indicationHi": "लिवर सिरोसिस में पोर्टल नसों का वास्तविक रक्तचाप नापने की अचूक व सर्वोत्तम जांच; यह जानने हेतु कि खून की उल्टी का खतरा कितना है (HVPG >= 12 mmHg), लिवर कितना कमजोर है, और बीपी की दवाएं काम कर रही हैं या नहीं।",
    "descriptionEn": "Under local anesthesia and ultrasound guidance, access is obtained into the right internal jugular vein. A balloon-tipped occlusion catheter is guided under fluoroscopy into the right or middle hepatic vein. Pressures are recorded in the wedged position (balloon inflated to measure sinusoidal pressure) and in the free hepatic vein position. The difference represents the Hepatic Venous Pressure Gradient (HVPG).",
    "descriptionHi": "गले की नस में सुन्न करके एक्स-रे की निगरानी में एक अत्यंत बारीक गुब्बारा कैथेटर लिवर की नस में ले जाया जाता है। वहां गुब्बारे को हल्का फुलाकर और पिचकाकर कंप्यूटर द्वारा लिवर की नसों का सटीक दबाव (प्रेशर) नापा जाता है। यह पूरी तरह दर्दरहित जांच है जो केवल 15 से 20 मिनट में हो जाती है।",
    "benefitsEn": [
      "Gold standard prognostic biomarker for portal hypertension: Quantifies risk of variceal hemorrhage, ascites, and survival.",
      "Identifies hemodynamic non-responders to beta-blocker therapy who require early TIPS or aggressive banding.",
      "Crucial safety criteria before major surgical resection in cirrhotic patients (HVPG must be < 10 mmHg)."
    ],
    "benefitsHi": [
      "लिवर के प्रेशर की सबसे सटीक और पक्की जांच जो किसी अन्य टेस्ट या सोनोग्राफी से संभव नहीं है।",
      "यह तय करना कि मरीज को चल रही दवाइयां फायदा कर रही हैं या स्टेंट लगाने की जरूरत है।",
      "लिवर के किसी भी बड़े ऑपरेशन से पहले सुरक्षा की अचूक पुष्टि।"
    ],
    "specificRisksEn": [
      "Transient cardiac arrhythmia (atrial or ventricular ectopic beats) as catheter crosses right atrium.",
      "Hepatic vein wall injury or localized extravasation during balloon over-inflation.",
      "Neck puncture site hematoma.",
      "Vasovagal reaction (drop in blood pressure/heart rate during catheter passage).",
      "Contrast media allergic reaction."
    ],
    "specificRisksHi": [
      "कैथेटर दिल से गुजरते समय कुछ सेकंड के लिए दिल की धड़कन का तेज होना।",
      "गुब्बारा फुलाते समय नस पर हल्का दबाव पड़ना।",
      "गर्दन में सुई की जगह पर हल्का खून जमना या दर्द।",
      "चक्कर आना या घबराहट होना।",
      "डाई से हल्की एलर्जी।"
    ],
    "alternativesEn": "Non-invasive assessment of portal hypertension using Liver Stiffness Measurement (FibroScan / Transient Elastography) combined with platelet count (Baveno VII criteria - non-invasive, but indirect).",
    "alternativesHi": "फाइब्रोस्कैन (FibroScan) और प्लेटलेट्स की जांच (जो केवल अनुमान लगा सकती है, सटीक प्रेशर नहीं नाप सकती)।",
    "sedationTypeEn": "Local anesthesia at right internal jugular vein with minimal or no sedation.",
    "sedationTypeHi": "गले में स्थानीय सुन्नता (Local Anesthesia); किसी बेहोशी की आवश्यकता नहीं होती।"
  },
  "ptbd-right-lobe-access": {
    "id": "ptbd-right-lobe-access",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Percutaneous Transhepatic Biliary Drainage (PTBD) - Right Lobe Access with Internal-External Catheter",
    "nameHi": "परक्यूटेनियस ट्रांसहेपेटिक बिलियरी ड्रेनेज (PTBD - दाहिने हिस्से से पित्त की नली में ड्रेनेज नली डालना)",
    "indicationEn": "Severe obstructive jaundice and suppurative cholangitis secondary to inoperable right or common hepatic duct malignancies (cholangiocarcinoma, gallbladder cancer, pancreatic cancer) or failed ERCP.",
    "indicationHi": "पित्त की नली में रुकावट के कारण अत्यधिक पीलिया (Bilirubin > 10-20 mg/dL), पूरे शरीर में असहनीय खुजली, पित्त में गंभीर इन्फेक्शन (Cholangitis), जहां मुंह के रास्ते दूरबीन (ERCP) से नली न डल पा रही हो।",
    "descriptionEn": "Under local anesthesia, conscious sedation, and combined ultrasound/fluoroscopic guidance, a fine 21G needle is guided through the right intercostal space into a dilated peripheral bile duct in the right liver lobe. A guidewire is negotiated past the obstruction into the duodenum. An 8.5F or 10F multi-sidehole internal-external drainage catheter is positioned across the blockage to drain bile both internally into the intestine and externally into a drainage bag.",
    "descriptionHi": "पेट और पसली के दाहिने हिस्से को सुन्न करके सोनोग्राफी व एक्स-रे की निगरानी में लिवर की पित्त नली में एक बारीक सुई डाली जाती है। तार की मदद से रुकावट को पार करते हुए एक विशेष प्लास्टिक की ड्रेनेज नली स्थापित की जाती है। यह नली रुकावट को खोलकर पित्त को आंतों के अंदर और बाहर एक थैली में निकालती है जिससे पीलिया तुरंत उतर जाता है।",
    "benefitsEn": [
      "Rapid, life-saving clearance of high serum bilirubin, relieving intractable pruritus (itching) and anorexia.",
      "Immediate decompression of infected, pus-filled bile ducts, treating life-threatening septic shock.",
      "Essential therapeutic requirement allowing initiation of palliative chemotherapy or planned curative surgery."
    ],
    "benefitsHi": [
      "पीलिया में तुरंत तेज गिरावट और असहनीय खुजली से तुरंत मुक्ति।",
      "पित्त के इन्फेक्शन और मवाद का निकास, जिससे जानलेवा सेप्सिस से मरीज की जान बचती है।",
      "आगे की कीमोथेरेपी या कैंसर का ऑपरेशन शुरू करने हेतु अनिवार्य कदम।"
    ],
    "specificRisksEn": [
      "Biliary sepsis: High fever with chills and rigors during duct manipulation (10-15%; managed with aggressive IV antibiotics).",
      "Hemobilia: Bleeding into the bile ducts or drainage catheter from crossed intrahepatic vessels (may require transcatheter embolization).",
      "Bile leakage into peritoneal cavity causing localized peritonitis, pain, or biloma.",
      "Pneumothorax, hemothorax, or pleuritis due to right intercostal puncture trajectory.",
      "Catheter dislodgement, occlusion by biliary sludge, or pericatheter leakage requiring tube exchange."
    ],
    "specificRisksHi": [
      "पित्त का संक्रमण (Sepsis): प्रक्रिया के दौरान या बाद में तेज कंपकंपी के साथ बुखार आना (10-15%) जिसके लिए तेज एंटीबायोटिक जरूरी होते हैं।",
      "ड्रेनेज नली में खून आना (Hemobilia) जिसके लिए कभी-कभी नस बंद करने की जरूरत पड़ सकती है।",
      "पेट में पित्त का रिसाव जिससे पेट दर्द या सूजन हो सकती है।",
      "पसली के रास्ते सुई जाने पर फेफड़े के पर्दे में हवा या पानी का रिसाव।",
      "नली का खिसकना, पित्त के कचरे से नली बंद होना या नली के पास से रिसाव होना।"
    ],
    "alternativesEn": "Endoscopic Retrograde Cholangiopancreatography (ERCP) with plastic or metal stenting, surgical biliary-enteric bypass (hepaticojejunostomy), or supportive palliative medical management.",
    "alternativesHi": "मुंह के रास्ते दूरबीन द्वारा स्टेंट डालना (ERCP), पेट खोलकर बाईपास ऑपरेशन, अथवा केवल लक्षण निवारक दवाइयां।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation and mandatory broad-spectrum IV antibiotic cover.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia), नस द्वारा दर्द निवारक व शामक दवाइयां तथा तेज एंटीबायोटिक।"
  },
  "ptbd-left-lobe-access": {
    "id": "ptbd-left-lobe-access",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Percutaneous Transhepatic Biliary Drainage (PTBD) - Left Lobe Ductal Access",
    "nameHi": "परक्यूटेनियस ट्रांसहेपेटिक बिलियरी ड्रेनेज (PTBD - बाएं हिस्से से पित्त की नली में ड्रेनेज नली डालना)",
    "indicationEn": "Obstructive jaundice with isolated left intrahepatic biliary duct obstruction (Bismuth type IIIb/IV hilar cholangiocarcinoma, prior right hepatectomy, or right lobe atrophy).",
    "indicationHi": "लिवर के बाएं हिस्से की पित्त नलियों में रुकावट (Klatskin Tumor/कैंसर), दाहिने लिवर का पहले ऑपरेशन हो चुका होना, अथवा दाहिनी नली सिकुड़ने के कारण बाएं हिस्से से ड्रेनेज की आवश्यकता।",
    "descriptionEn": "Under direct ultrasound guidance in the epigastrium (subxiphoid approach), a 21G Chiba needle punctures a dilated segment III or II left intrahepatic bile duct. Fluoroscopy confirms bile access, and a steerable guidewire navigates across the confluence or hilar stricture into the duodenum. An 8.5F or 10F internal-external drainage catheter is positioned to decompress the left hepatic lobe.",
    "descriptionHi": "पेट के ऊपरी हिस्से (सीने की हड्डी के ठीक नीचे) सोनोग्राफी द्वारा देखकर बाएं लिवर की पित्त नली में एक बारीक सुई डाली जाती है। एक्स-रे पर तार को रुकावट के पार आंतों में पहुंचाकर एक प्लास्टिक की ड्रेनेज नली स्थापित की जाती है। इससे बाएं लिवर का रुका हुआ सारा पित्त आंतों और बाहर थैली में बहने लगता है।",
    "benefitsEn": [
      "Epigastric / subxiphoid approach completely avoids the pleural space, eliminating risk of pneumothorax or hemothorax.",
      "Significantly less respiratory movement pain compared to right intercostal puncture.",
      "Rapid reduction of bilirubin and resolution of left lobe cholangitis."
    ],
    "benefitsHi": [
      "पेट के बीच से होने के कारण फेफड़े या पसली को कोई आंच नहीं आती; फेफड़े में हवा या पानी भरने का खतरा शून्य।",
      "सांस लेते समय पसलियों में दर्द बिल्कुल नहीं होता।",
      "पीलिया तुरंत कम होना और इन्फेक्शन से मुक्ति।"
    ],
    "specificRisksEn": [
      "Biliary sepsis / septicemia during wire manipulation.",
      "Catheter kink or sharp angulation at the anterior abdominal wall requiring repositioning.",
      "Bile leakage causing epigastric peritonitis or subcapsular biloma.",
      "Hemobilia from left portal vein branch crossing.",
      "Skin irritation or pericatheter leakage."
    ],
    "specificRisksHi": [
      "प्रक्रिया के दौरान तेज कंपकंपी के साथ बुखार (सेप्सिस)।",
      "पेट की त्वचा पर नली का मुड़ना (Kinking) जिससे नली का बहाव रुक सकता है।",
      "पेट में पित्त का रिसाव जिससे दर्द या सूजन हो सकती है।",
      "ड्रेनेज नली में थोड़ा खून आना (Hemobilia)।",
      "त्वचा पर पित्त लगने से जलन या छाला।"
    ],
    "alternativesEn": "Right lobe PTBD access, ERCP with left ductal stenting, surgical bypass, or best supportive care.",
    "alternativesHi": "दाहिने हिस्से से पीटीबीडी (Right PTBD), दूरबीन द्वारा स्टेंट (ERCP), अथवा ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
    "sedationTypeHi": "पेट पर स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
  },
  "biliary-metallic-stenting-sems": {
    "id": "biliary-metallic-stenting-sems",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Biliary Metallic Stenting (SEMS) for Unresectable Malignant Klatskin Tumor (Bismuth III/IV)",
    "nameHi": "पित्त नली के कैंसर हेतु मेटैलिक स्टेंटिंग (SEMS - धातु की जालीदार नली डालकर पीलिया का स्थायी इलाज)",
    "indicationEn": "Inoperable malignant biliary obstruction (Klatskin tumor / hilar cholangiocarcinoma, gallbladder cancer, pancreatic head adenocarcinoma) with expected survival > 3 months, aiming for catheter-free internal biliary drainage.",
    "indicationHi": "पित्त की नली या पित्ताशय (गॉलब्लैडर) का कैंसर जो ऑपरेशन योग्य न हो, जिसके कारण गंभीर पीलिया हो गया हो; पेट से बाहर लटकने वाली प्लास्टिक की नली को हटाकर अंदर ही धातु की जाली (Metallic Stent) लगाने हेतु।",
    "descriptionEn": "Under fluoroscopic guidance following biliary access, a self-expanding metallic stent (SEMS, uncovered or partially covered, 8-10 mm diameter) is advanced over a stiff guidewire across the malignant stricture into the duodenum or common bile duct. The stent is deployed, expanding by radial force to push open the tumor blockage and restore permanent natural internal bile flow into the bowel, allowing the external tube to be removed.",
    "descriptionHi": "एक्स-रे की निगरानी में पित्त नली की रुकावट के आर-पार एक विशेष धातु की जालीदार नली (Metallic Stent) पहुंचाई जाती है। वहां स्टेंट को खोल दिया जाता है। यह स्टेंट कैंसर की रुकावट को दोनों तरफ धकेलकर रास्ता चौड़ा कर देता है, जिससे सारा पित्त दोबारा प्राकृतिक रूप से आंतों में पचने लगता है और बाहर लटकी नली को हमेशा के लिए हटा दिया जाता है।",
    "benefitsEn": [
      "Catheter-free internal drainage: Completely eliminates the painful external drainage tube and bag, dramatically improving quality of life.",
      "Significantly longer patency (6-12 months) compared to plastic stents.",
      "Rapid normalization of bilirubin allowing initiation of systemic palliative chemotherapy."
    ],
    "benefitsHi": [
      "बाहर लटकने वाली नली और थैली से हमेशा के लिए पूर्ण मुक्ति, जिससे मरीज का जीवन सामान्य और गरिमापूर्ण हो जाता है।",
      "प्लास्टिक स्टेंट की तुलना में यह धातु का स्टेंट 6 से 12 महीने या उससे भी अधिक समय तक खुला रहता है।",
      "पीलिया तुरंत उतरने से कैंसर की कीमोथेरेपी समय पर शुरू हो पाती है।"
    ],
    "specificRisksEn": [
      "Tumor ingrowth or overgrowth through stent mesh causing recurrent biliary obstruction over time.",
      "Post-procedure cholangitis or biliary sepsis.",
      "Early stent migration or incomplete expansion across dense fibrotic tumor.",
      "Hemobilia or pancreatitis (if stent crosses ampulla of Vater).",
      "Pain or discomfort in the right upper abdomen during stent self-expansion."
    ],
    "specificRisksHi": [
      "कुछ महीनों बाद कैंसर के जाली के अंदर या ऊपर बढ़ जाने से स्टेंट का दोबारा बंद होना।",
      "प्रक्रिया के बाद बुखार या पित्त में संक्रमण (Cholangitis)।",
      "कठिन गांठ के कारण स्टेंट का पूरा न फैल पाना या खिसकना।",
      "पित्त में थोड़ा खून आना या पैंक्रियाज में सूजन।",
      "स्टेंट फैलते समय पेट के ऊपरी हिस्से में हल्का दर्द महसूस होना।"
    ],
    "alternativesEn": "Long-term external-internal plastic catheter drainage with routine 3-monthly tube exchanges, endoscopic metal stenting (ERCP), surgical biliary bypass, or supportive care.",
    "alternativesHi": "प्लास्टिक की नली को हर 3 महीने में बदलते रहना, मुंह के रास्ते दूरबीन (ERCP) से स्टेंट डालना, अथवा बाईपास ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia with IV analgesia and conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक व शामक दवा।"
  },
  "bilateral-y-stent-biliary": {
    "id": "bilateral-y-stent-biliary",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Bilateral Y-Stent or Stent-in-Stent Biliary Metallic Reconstruction for Hilar Cholangiocarcinoma",
    "nameHi": "बाइलेटरल वाई-स्टेंट / स्टेंट-इन-स्टेंट बिलियरी रिकंस्ट्रक्शन (लिवर के दोनों हिस्सों की पित्त नलियों में 'Y' आकार का दोहरा स्टेंट लगाना)",
    "indicationEn": "High-grade malignant hilar biliary obstruction (Klatskin tumor Bismuth type IIIA, IIIB, or IV) with separation of right and left hepatic duct confluences requiring drainage of both liver lobes to resolve jaundice and prevent unilateral cholangitis.",
    "indicationHi": "लिवर के केंद्र में कैंसर की गांठ (Klatskin Tumor Bismuth III/IV) जिसके कारण दाहिनी और बाईं दोनों तरफ की पित्त नलियां अलग-अलग बंद हो गई हों, जहां पीलिया उतारने और इन्फेक्शन से बचाने हेतु दोनों तरफ एक साथ 'Y' आकार में स्टेंट लगाना अनिवार्य हो।",
    "descriptionEn": "Using bilateral percutaneous access (both right and left transhepatic tracts), guidewires are manipulated past the hilar bifurcation into the duodenum. Two self-expanding metallic stents are deployed in a 'Y' configuration or 'Stent-in-Stent' technique (advancing the second stent through the open interstices of the first stent), creating a unified internal drainage channel for both liver lobes.",
    "descriptionHi": "पेट के दोनों तरफ (दाएं और बाएं) से बारीक तार डालकर दोनों तरफ की रुकावटों को पार किया जाता है। फिर धातु के दो स्टेंट एक-दूसरे के अंदर से 'Y' (वाई) आकार में इस तरह जोड़े जाते हैं कि दोनों लिवर का पित्त एक ही मुख्य रास्ते से सीधे आंतों में बहने लगे। इससे दोनों तरफ की बाहर लटकी नलियां हटा दी जाती हैं।",
    "benefitsEn": [
      "Drains > 80-90% of total functioning liver volume, maximizing jaundice clearance.",
      "Prevents lethal unilateral cholangitis in an undrained contaminated hepatic lobe.",
      "Completely eliminates bilateral external drainage bags, restoring patient dignity and comfort."
    ],
    "benefitsHi": [
      "दोनों तरफ के 80-90% से अधिक लिवर का पित्त अंदर बहने लगता है जिससे गंभीर पीलिया तुरंत उतरता है।",
      "किसी एक तरफ पित्त रुकने से होने वाले जानलेवा इन्फेक्शन (Cholangitis) से 100% बचाव।",
      "दोनों तरफ लटकने वाली बदबूदार थैलियों से हमेशा के लिए पूर्ण मुक्ति।"
    ],
    "specificRisksEn": [
      "Technically challenging procedure: Failure to negotiate both branches into bowel requiring combined external catheter maintenance.",
      "Severe post-procedure biliary sepsis requiring prolonged ICU admission and intensive antibiotics.",
      "Tumor ingrowth causing asymmetrical stent re-occlusion.",
      "Bilateral puncture risks: Hemobilia, pneumothorax, or biloma.",
      "Stent mesh collapse during cross-stent dilation."
    ],
    "specificRisksHi": [
      "जटिल प्रक्रिया: किसी एक तरफ तार पार न होने पर उस तरफ अस्थायी नली रखनी पड़ सकती है।",
      "प्रक्रिया के बाद गंभीर सेप्सिस या कंपकंपी वाला बुखार जिसके लिए आईसीयू में भर्ती की आवश्यकता हो सकती है।",
      "कुछ महीनों बाद कैंसर बढ़ने से किसी एक शाखा का बंद होना।",
      "दोनों तरफ छेद होने के कारण फेफड़े में हवा या पित्त रिसाव का जोखिम।",
      "जाली फैलाते समय स्टेंट पर अत्यधिक दबाव पड़ना।"
    ],
    "alternativesEn": "Bilateral long-term external plastic catheter drainage, unilateral stenting alone (high cholangitis risk), palliative bypass surgery, or supportive comfort care.",
    "alternativesHi": "दोनों तरफ प्लास्टिक की नलियां और थैलियां जीवन भर लगाए रखना, केवल एक तरफ स्टेंट डालना (जिसमें दूसरी तरफ मवाद का भारी खतरा रहता है), अथवा केवल दवाइयां।",
    "sedationTypeEn": "Deep conscious sedation or general anesthesia.",
    "sedationTypeHi": "नस द्वारा गहरी शामक व दर्द निवारक दवाइयां (Deep Sedation) अथवा पूर्ण बेहोशी।"
  },
  "biliary-balloon-dilation-stricture": {
    "id": "biliary-balloon-dilation-stricture",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Percutaneous Transhepatic Biliary Balloon Dilation for Benign Anastomotic / Post-Cholecystectomy Stricture",
    "nameHi": "पित्त की नली की सिकुड़न हेतु बैलून डाइलेशन (पित्ताशय ऑपरेशन के बाद सिकुड़ी पित्त नली को गुब्बारे द्वारा फुलाकर खोलना)",
    "indicationEn": "Benign biliary stricture following laparoscopic cholecystectomy (bile duct clipping/thermal injury), liver transplantation (duct-to-duct / choledochocholedochostomy stricture), or hepaticojejunostomy anastomotic stenosis.",
    "indicationHi": "पित्त की थैली (गॉलब्लैडर) के ऑपरेशन या लिवर ट्रांसप्लांट के बाद पित्त की मुख्य नली का सिकुड़ जाना (Benign Stricture), जिसके कारण बार-बार पीलिया होना, पेट दर्द और बुखार आना।",
    "descriptionEn": "Under local anesthesia and fluoroscopy via an existing PTBD access tract, a high-pressure non-compliant angioplasty balloon (6 to 10 mm diameter) is advanced across the benign stricture. The balloon is inflated to 12-18 atmospheres pressure to stretch and disrupt the dense fibrotic scar. A large-bore (10-14F) internal-external catheter is placed across the dilated segment for 4 to 8 weeks to maintain patency during tissue healing.",
    "descriptionHi": "पीटीबीडी के रास्ते से एक्स-रे की निगरानी में एक विशेष उच्च-दाब गुब्बारा (High Pressure Balloon) सिकुड़ी हुई नली में ले जाया जाता है। गुब्बारे को भारी दबाव (12 से 18 एटमॉस्फियर) से फुलाया जाता है जिससे सिकुड़ा हुआ हिस्सा पूरी तरह चौड़ा हो जाता है। नली को दोबारा सिकुड़ने से रोकने हेतु कुछ हफ्तों के लिए एक प्लास्टिक की नली अंदर रखी जाती है, जिसे बाद में हटा दिया जाता है।",
    "benefitsEn": [
      "High long-term clinical success rate (75-85%) for permanent resolution of benign biliary strictures.",
      "Avoids complex, high-morbidity surgical revision (redo hepaticojejunostomy) in a scarred abdomen.",
      "Preserves the natural biliary anatomy without requiring permanent metallic stents."
    ],
    "benefitsHi": [
      "75 से 85% मरीजों में बिना किसी ऑपरेशन के सिकुड़न का स्थायी रूप से ठीक हो जाना।",
      "पेट के अत्यधिक जटिल व जोखिम भरे दोबारा ऑपरेशन (Redo Surgery) से पूर्ण बचाव।",
      "अंदर कोई धातु का स्टेंट नहीं छोड़ना पड़ता; नली ठीक होते ही प्लास्टिक नली निकाल ली जाती है।"
    ],
    "specificRisksEn": [
      "Bile duct rupture or tearing during high-pressure balloon inflation (managed with temporary covered stent or catheter drainage).",
      "Biliary sepsis / post-dilation cholangitis.",
      "Hemobilia from mucosal tearing.",
      "Stricture recurrence over months to years requiring repeat balloon dilation (15-25%).",
      "Severe procedural pain during high-pressure balloon inflation."
    ],
    "specificRisksHi": [
      "गुब्बारा फुलाते समय अत्यधिक दबाव से पित्त नली का फटना (जिसके लिए तुरंत कवर वाला स्टेंट लगाया जाता है)।",
      "प्रक्रिया के बाद कंपकंपी के साथ बुखार या पित्त में इन्फेक्शन।",
      "पित्त में थोड़ा खून आना।",
      "कुछ महीनों या वर्षों बाद नली का दोबारा सिकुड़ना (15-25%) जिसके लिए दोबारा गुब्बारा फुलाना पड़ सकता है।",
      "गुब्बारा फुलाते समय पेट में तेज दर्द होना।"
    ],
    "alternativesEn": "Endoscopic retrograde balloon dilation and multiple plastic stent placement (ERCP), surgical revision hepaticojejunostomy, permanent fully covered metallic stent placement, or supportive care.",
    "alternativesHi": "मुंह के रास्ते दूरबीन (ERCP) से गुब्बारा फुलाना व प्लास्टिक स्टेंट डालना, पेट का बड़ा ऑपरेशन (बाईपास), अथवा कवर्ड स्टेंट लगाना।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation and aggressive opioid analgesia during balloon inflation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और गुब्बारा फुलाते समय होने वाले दर्द से राहत हेतु नस द्वारा तेज दर्द निवारक व शामक दवा।"
  },
  "percutaneous-biliary-stone-removal": {
    "id": "percutaneous-biliary-stone-removal",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Percutaneous Transhepatic Removal of Retained Biliary Calculi with Dormia Basket and Balloon Sweep",
    "nameHi": "पित्त नली की पथरी निकालना (Dormia Basket & Balloon Sweep - पीटीबीडी के रास्ते से पित्त की पथरी को बाहर निकालना या आंतों में धकेलना)",
    "indicationEn": "Retained, impacted, or recurrent common bile duct (CBD) or intrahepatic stones following cholecystectomy or failed endoscopic ERCP (altered surgical anatomy: Billroth II, Roux-en-Y gastric bypass).",
    "indicationHi": "पित्त की नली (CBD) में फंसी हुई पथरी, पीलिया और दर्द, विशेषकर उन मरीजों में जिनके आमाशय या आंतों के पहले ऑपरेशन (Roux-en-Y/Bypass) हो चुके हों और मुंह के रास्ते दूरबीन (ERCP) से पथरी न निकल पा रही हो।",
    "descriptionEn": "Under fluoroscopic guidance through an established mature PTBD tract, a steerable catheter, Dormia stone extraction basket, and occlusion sweep balloon are introduced into the bile duct. The stones are either captured in the mechanical basket and retrieved externally through a vascular sheath, or gently pushed through the relaxed ampulla of Vater into the small intestine.",
    "descriptionHi": "पीटीबीडी के रास्ते से एक्स-रे की निगरानी में एक विशेष तार की टोकरी (Dormia Basket) और गुब्बारा पित्त की नली में पहुंचाया जाता है। पथरी को तार की टोकरी में पकड़कर बाहर निकाल लिया जाता है अथवा गुब्बारे से धकेलकर आंतों के अंदर बहा दिया जाता है, जहां से वह मल के रास्ते बाहर निकल जाती है।",
    "benefitsEn": [
      "Complete clearance of retained biliary calculi without open bile duct surgery (choledochotomy).",
      "High success rate (> 90-95%) even in complex postsurgical altered anatomy where ERCP is impossible.",
      "Restores normal bile flow and allows complete removal of the percutaneous drainage tube."
    ],
    "benefitsHi": [
      "बिना पेट या पित्त नली को चीरे 90-95% अचूक सफलता से पथरी का पूर्ण खात्मा।",
      "जिन मरीजों में पहले ऑपरेशन के कारण मुंह से दूरबीन (ERCP) नहीं जा सकती, उनके लिए एकमात्र सुरक्षित विकल्प।",
      "पथरी निकलते ही बाहर लटकी नली को हमेशा के लिए निकाल दिया जाता है।"
    ],
    "specificRisksEn": [
      "Dormia basket stone impaction: Basket jamming on a large hard stone requiring lithotripsy or sheath enlargement.",
      "Biliary tract mucosal laceration or perforation.",
      "Hemobilia or transient blood in drainage catheter.",
      "Post-procedure cholangitis or pancreatitis (if ampulla of Vater traumatized).",
      "Incomplete stone clearance requiring secondary session."
    ],
    "specificRisksHi": [
      "बड़ी पथरी होने पर तार की टोकरी का पथरी के साथ नली में फंस जाना (जिसे विशेष तकनीक से तोड़ा जाता है)।",
      "पित्त की नली की अंदरूनी झिल्ली में खरोंच या छेद होना।",
      "ड्रेनेज नली में थोड़ा खून आना।",
      "प्रक्रिया के बाद बुखार आना या पैंक्रियाज में हल्की सूजन।",
      "पथरी के टुकड़े बचने पर दोबारा सफाई की आवश्यकता।"
    ],
    "alternativesEn": "Open or laparoscopic common bile duct exploration (CBDE) with T-tube placement, balloon-assisted enteroscopy ERCP, percutaneous laser lithotripsy, or conservative observation.",
    "alternativesHi": "पेट खोलकर पित्त नली काटने का बड़ा ऑपरेशन (CBDE), विशेष लंबी दूरबीन द्वारा ईआरसीपी, अथवा लेजर द्वारा पथरी तोड़ना।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
  },
  "percutaneous-cholangioscopy-lithotripsy": {
    "id": "percutaneous-cholangioscopy-lithotripsy",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Percutaneous Transhepatic Cholangioscopy and Laser / Electrohydraulic Lithotripsy",
    "nameHi": "पर्क्यूटेनियस कोलैंजियोस्कोपी एवं लेजर लिथोट्रिप्सी (पित्त नली के अंदर कैमरा डालकर लेजर द्वारा बड़ी पथरियों को तोड़ना)",
    "indicationEn": "Large, impacted, or complex intrahepatic / extrahepatic biliary stones (> 15 mm, intrahepatic hepatolithiasis, or Caroli disease) resistant to basket extraction or failed ERCP.",
    "indicationHi": "लिवर के अंदर या पित्त की नली में फंसी बहुत बड़ी और कड़क पथरियां (15 मिमी से बड़ी), जो सामान्य टोकरी से न निकल रही हों और दूरबीन (ERCP) से भी न टूट रही हों।",
    "descriptionEn": "Through a mature, dilated transhepatic tract (12-16F), an ultra-thin flexible fiberoptic or digital cholangioscope (SpyGlass) is introduced directly into the biliary tree. Under direct endoscopic visual monitoring, a Holmium:YAG laser fiber or Electrohydraulic Lithotripsy (EHL) probe is touched directly to the stones. Shockwave energy fragments the large stones into fine gravel, which is flushed into the intestine.",
    "descriptionHi": "पीटीबीडी के रास्ते से एक अति-बारीक लचीला कैमरा (Cholangioscope) सीधे पित्त नली के अंदर डाला जाता है। स्क्रीन पर पथरी को अपनी आंखों से देखते हुए लेजर फाइबर को पथरी से छुआया जाता है। लेजर की ऊर्जा से बड़ी से बड़ी कड़क पथरी रेत की तरह बारीक चूर्ण में टूट जाती है, जिसे पानी से धोकर आंतों में बहा दिया जाता है।",
    "benefitsEn": [
      "Direct visual certainty: Eliminates blind fluoroscopic manipulation and achieves complete duct clearance.",
      "Crushes stones of any size or hardness (including giant intrahepatic stones).",
      "Prevents recurrent suppurative cholangitis, liver abscesses, and secondary biliary cirrhosis."
    ],
    "benefitsHi": [
      "कैमरे द्वारा सीधी नजर से पथरी को देखकर तोड़ने की 100% सटीक तकनीक।",
      "कितनी भी बड़ी और सख्त पथरी हो, लेजर से उसका टूटना बिल्कुल तय होता है।",
      "बार-बार मवाद पड़ने, लिवर में फोड़ा बनने और लिवर खराब होने से बचाव।"
    ],
    "specificRisksEn": [
      "Biliary tract thermal injury or wall perforation from misplaced laser energy.",
      "Biliary sepsis from pressurized irrigation fluid (requires antibiotic coverage and low-pressure flushing).",
      "Hemobilia from mucosal trauma.",
      "Transient elevation of liver transaminases.",
      "Need for multiple sessions if massive intrahepatic stone burden."
    ],
    "specificRisksHi": [
      "लेजर की किरण गलत जगह लगने पर पित्त नली की दीवार में छेद या घाव होना।",
      "धुलाई के पानी के दबाव से खून में इन्फेक्शन फैलना और तेज बुखार आना।",
      "पित्त में खून आना।",
      "लिवर एंजाइम बढ़ना।",
      "पथरियों की संख्या बहुत अधिक होने पर 2 या 3 बार में प्रक्रिया करने की आवश्यकता।"
    ],
    "alternativesEn": "Major surgical liver resection (partial hepatectomy for regional hepatolithiasis), open choledocholithotomy with T-tube, shockwave lithotripsy (ESWL), or lifelong drainage catheters.",
    "alternativesHi": "लिवर का प्रभावित हिस्सा काटने का बड़ा ऑपरेशन (Hepatectomy), पेट खोलकर पित्त नली काटना, अथवा जीवन भर नली लगाए रखना।",
    "sedationTypeEn": "Deep conscious sedation or general anesthesia.",
    "sedationTypeHi": "नस द्वारा गहरी शामक व दर्द निवारक दवाइयां अथवा पूर्ण बेहोशी।"
  },
  "percutaneous-endobiliary-biopsy": {
    "id": "percutaneous-endobiliary-biopsy",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Percutaneous Transhepatic Endobiliary Biopsy (Forceps and Brushing) for Indeterminate Stricture",
    "nameHi": "एंडोबिलियरी बायोप्सी एवं ब्रशिंग (पित्त नली के अंदर से चिमटी द्वारा मांस का टुकड़ा लेना - कैंसर की पक्की जांच)",
    "indicationEn": "Indeterminate biliary stricture of the common hepatic duct or hilum on CT/MRCP where tissue diagnosis is essential to differentiate cholangiocarcinoma from benign stricture, particularly after failed or non-diagnostic ERCP brushing.",
    "indicationHi": "पित्त की नली में रुकावट का कारण स्पष्ट न होना; यह पक्का पता लगाने हेतु कि रुकावट कैंसर की गांठ है या केवल पुरानी सिकुड़न, विशेषकर जब दूरबीन (ERCP) से बायोप्सी संभव न हुई हो।",
    "descriptionEn": "Under fluoroscopic guidance through an existing or newly placed transhepatic sheath, a flexible micro-forceps biopsy instrument and cytological brush are negotiated across the biliary stricture. Under real-time X-ray visualization, multiple tissue bite specimens (3 to 6 cores) are obtained from the shoulder and center of the stricture, followed by endobiliary brush cytology for definitive histopathological analysis.",
    "descriptionHi": "पीटीबीडी के रास्ते से एक्स-रे पर देखते हुए एक बहुत बारीक लचीली चिमटी (Forceps) और ब्रश को सीधे पित्त नली की रुकावट वाले स्थान पर पहुंचाया जाता है। वहां से गांठ के मांस के 3 से 6 अत्यंत सूक्ष्म टुकड़े और कोशिकाएं जांच हेतु निकाली जाती हैं, ताकि कैंसर का प्रकार और सटीक दवा तय की जा सके।",
    "benefitsEn": [
      "Significantly higher diagnostic sensitivity and specificity (80-85%) for cholangiocarcinoma compared to ERCP brush cytology alone.",
      "Provides true tissue architecture and sufficient core sample for molecular profiling and immunohistochemistry.",
      "Prevents unnecessary radical open surgery if stricture is proven benign or inflammatory."
    ],
    "benefitsHi": [
      "दूरबीन (ERCP) की तुलना में कैंसर पकड़ने की 80-85% अधिक सटीक और पक्की क्षमता।",
      "मांस का पर्याप्त टुकड़ा मिलने से कैंसर की आधुनिक जांचें (IHC/Genetics) संभव हो पाती हैं।",
      "यदि बीमारी सामान्य सूजन निकले तो मरीज व्यर्थ के बड़े ऑपरेशन से बच जाता है।"
    ],
    "specificRisksEn": [
      "Hemobilia: Bleeding into bile ducts from the vascular tumor surface (usually self-limiting, rarely requiring embolization).",
      "Bile duct perforation or tear during forceps manipulation.",
      "Post-procedure cholangitis or fever.",
      "False negative or non-diagnostic specimen (10-15%) requiring repeat biopsy.",
      "Vasovagal reaction or pain during tissue grasping."
    ],
    "specificRisksHi": [
      "टुकड़ा लेते समय थोड़ा खून निकलना जो नली में आ सकता है (आमतौर पर स्वतः बंद हो जाता है)।",
      "पित्त नली में छोटा छेद होना।",
      "प्रक्रिया के बाद हल्का बुखार या इन्फेक्शन।",
      "टुकड़े में केवल मृत कोशिकाएं आने पर दोबारा जांच की जरूरत पड़ना (10-15%)।",
      "टुकड़ा काटते समय पेट में हल्का दर्द होना।"
    ],
    "alternativesEn": "Endoscopic ultrasound-guided fine needle aspiration (EUS-FNA), ERCP with repeat brush cytology, direct surgical exploration and frozen section biopsy, or empirical surgical resection.",
    "alternativesHi": "पेट के अंदर सोनोग्राफी वाली दूरबीन (EUS) से सुई लगाना, ईआरसीपी ब्रश जांच, अथवा सीधे ऑपरेशन करके मांस काटना।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक दवा।"
  },
  "endobiliary-rfa-malignancy": {
    "id": "endobiliary-rfa-malignancy",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Endobiliary Radiofrequency Ablation (RFA) for Malignant Biliary Obstruction",
    "nameHi": "एंडोबिलियरी रेडियोफ्रीक्वेंसी एब्लेशन (RFA - पित्त नली के अंदर से कैंसर की गांठ को जलाकर स्टेंट की उम्र बढ़ाना)",
    "indicationEn": "Unresectable cholangiocarcinoma, gallbladder cancer, or pancreatic carcinoma causing malignant biliary obstruction, performed prior to metallic stenting or for in-stent tumor ingrowth re-canalization.",
    "indicationHi": "पित्त की नली या पित्ताशय का कैंसर; धातु का स्टेंट लगाने से पहले गांठ को अंदर से जलाना ताकि स्टेंट साल भर से अधिक खुला रहे, अथवा पुराने स्टेंट में कैंसर दोबारा घुस आने पर उसे अंदर से जलाकर रास्ता खोलना।",
    "descriptionEn": "Under fluoroscopic guidance through a transhepatic access, a specialized bipolar endobiliary RFA catheter (Habib EndoHPB) is positioned across the malignant bile duct stricture. Bipolar radiofrequency thermal energy (7-10W for 90-120 seconds) is delivered, inducing coagulative necrosis and tumor debulking within a 5 mm depth, followed immediately by balloon clearing and metallic stent deployment.",
    "descriptionHi": "पीटीबीडी के रास्ते से एक्स-रे की निगरानी में एक विशेष आर.एफ.ए. कैथेटर पित्त नली की कैंसर वाली रुकावट में पहुंचाया जाता है। वहां रेडियोफ्रीक्वेंसी ऊर्जा द्वारा 90 से 120 सेकंड तक हल्का करंट देकर कैंसर की कोशिकाओं को 5 मिमी गहराई तक जलाकर नष्ट कर दिया जाता है। इसके बाद वहां धातु का स्टेंट लगाया जाता है, जिससे रास्ता बहुत चौड़ा हो जाता है और लंबे समय तक खुला रहता है।",
    "benefitsEn": [
      "Significantly prolongs metallic stent patency (by 3-6 months) by suppressing inward tumor growth.",
      "Reduces local tumor volume and clears necrotic debris from occluded existing stents.",
      "Associated with improved overall patient survival compared to stenting alone."
    ],
    "benefitsHi": [
      "धातु के स्टेंट की उम्र 3 से 6 महीने और बढ़ जाना, जिससे बार-बार स्टेंट बंद होने का झंझट नहीं रहता।",
      "कैंसर की गांठ सिकुड़ना और बंद हो चुके पुराने स्टेंट का दोबारा खुल जाना।",
      "मरीज की जीवन प्रत्याशा और स्वास्थ्य में उल्लेखनीय सुधार।"
    ],
    "specificRisksEn": [
      "Bile duct thermal perforation or rupture (requires emergency covered stent placement).",
      "Hemobilia from thermal injury to adjacent hepatic arterial branches (pseudoaneurysm).",
      "Biliary sepsis or post-ablation cholangitis.",
      "Hepatic abscess formation.",
      "Transient epigastric pain during heating."
    ],
    "specificRisksHi": [
      "गर्मी के कारण पित्त नली में छेद होना (जिसके लिए तुरंत कवर्ड स्टेंट लगाया जाता है)।",
      "पास की खून की नस में चोट लगने से पित्त में खून बहना।",
      "प्रक्रिया के बाद बुखार आना या पित्त में इन्फेक्शन।",
      "लिवर में मवाद या फोड़ा बनना।",
      "हीटिंग के दौरान पेट में हल्का दर्द महसूस होना।"
    ],
    "alternativesEn": "Metallic stenting alone without endobiliary RFA, systemic chemotherapy, external beam radiation therapy / SBRT, or photodynamic therapy (PDT).",
    "alternativesHi": "बिना जलाए केवल साधारण स्टेंट डालना, कीमोथेरेपी, अथवा बाहरी रेडिएशन सिकाई।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation and analgesia.",
    "sedationTypeHi": "स्थानीय सुन्नता और नस द्वारा दर्द निवारक व शामक दवा।"
  },
  "ptc-cholecystostomy": {
    "id": "ptc-cholecystostomy",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Percutaneous Transhepatic Cholecystostomy (PTC) for Acute Cholecystitis in High-Risk Patients",
    "nameHi": "परक्यूटेनियस ट्रांसहेपेटिक कोलेसिस्टोस्टॉमी (पित्त की थैली में बाहर से नली डालकर मवाद व इन्फेक्शन निकालना)",
    "indicationEn": "Severe acute calculous or acalculous cholecystitis in critically ill, elderly, or septic ICU patients with prohibitive surgical risk for emergency laparoscopic cholecystectomy.",
    "indicationHi": "पित्त की थैली (गॉलब्लैडर) में तीव्र इन्फेक्शन, सूजन व मवाद भरना (Acute Cholecystitis), तेज बुखार और पेट दर्द, जहां मरीज की गंभीर स्थिति या अधिक उम्र के कारण तुरंत ऑपरेशन करना जानलेवा हो सकता हो।",
    "descriptionEn": "Under real-time ultrasound and fluoroscopic guidance, a needle is guided from the skin through a small bridge of normal liver tissue directly into the gallbladder lumen (transhepatic route). Infected, purulent bile and pus are completely aspirated. A soft, locked 8F to 10F pigtail catheter is deployed inside the gallbladder and secured to an external bag to establish immediate decompression.",
    "descriptionHi": "पेट के दाहिने हिस्से को सुन्न करके सोनोग्राफी पर देखते हुए लिवर के रास्ते पित्त की थैली में एक पतली सुई डाली जाती है। थैली में भरा हुआ सारा गंदा पित्त और मवाद बाहर खींच लिया जाता है। फिर वहां एक मुड़ी हुई प्लास्टिक की नली (Pigtail Catheter) डालकर बाहर थैली से जोड़ दिया जाता है जिससे पित्ताशय की सूजन तुरंत खत्म हो जाती है।",
    "benefitsEn": [
      "Immediate, life-saving resolution of gallbladder sepsis and peritonitis within 24-48 hours.",
      "Minimally invasive bedside or angio suite procedure under local anesthesia avoiding general anesthesia.",
      "Cures acute cholecystitis in acalculous disease, or serves as a safe bridge to elective surgery in calculous disease."
    ],
    "benefitsHi": [
      "24 से 48 घंटे के भीतर जानलेवा इन्फेक्शन, मवाद और पेट दर्द से तुरंत राहत।",
      "बिना किसी बड़े ऑपरेशन या बेहोशी के केवल स्थानीय सुन्नता में तुरंत होने वाला जीवन रक्षक इलाज।",
      "मरीज के ठीक होने पर भविष्य में सुविधानुसार सुरक्षित ऑपरेशन का अवसर।"
    ],
    "specificRisksEn": [
      "Bile leakage into peritoneal cavity causing localized biliary peritonitis or biloma.",
      "Intraperitoneal bleeding or liver puncture hematoma from transhepatic route.",
      "Accidental catheter dislodgement or slippage prior to mature tract formation (requires prompt replacement).",
      "Vaso-vagal bradycardia during gallbladder puncture and aspiration.",
      "Blocked catheter by viscous sludge or gallstones."
    ],
    "specificRisksHi": [
      "पेट में पित्त का हल्का रिसाव जिससे थोड़ा दर्द हो सकता है।",
      "लिवर के रास्ते सुई जाने पर खून का थक्का जमना।",
      "नली का अपनी जगह से खिसक जाना (जिसके लिए तुरंत नई नली डाली जाती है)।",
      "सुई लगते समय दिल की धड़कन धीमी होना या चक्कर आना।",
      "गाढ़े कचरे या पथरी से नली का बंद होना।"
    ],
    "alternativesEn": "Emergency open or laparoscopic cholecystectomy (high surgical mortality in unstable patients), endoscopic transpapillary gallbladder drainage (ETGBD), endoscopic ultrasound-guided gallbladder drainage (EUS-GBD), or conservative IV antibiotics alone.",
    "alternativesHi": "आपातकालीन बड़ा ऑपरेशन (Cholecystectomy - जो गंभीर मरीज में जानलेवा हो सकता है), दूरबीन द्वारा अंदर से ड्रेनेज, अथवा केवल एंटीबायोटिक दवाइयां।",
    "sedationTypeEn": "Local anesthesia infiltration with mild conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की दर्द निवारक दवा।"
  },
  "transcholecystic-biliary-stenting": {
    "id": "transcholecystic-biliary-stenting",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Transcholecystic Biliary Access and Cystic Duct Stenting",
    "nameHi": "ट्रांसकोलेसिस्टिक बिलियरी एक्सेस एवं स्टेंटिंग (पित्त की थैली के रास्ते से पित्त नली में जाकर स्टेंट लगाना)",
    "indicationEn": "Malignant or benign distal common bile duct (CBD) obstruction in patients with non-dilated intrahepatic bile ducts where transhepatic duct puncture is technically impossible, or failed ERCP in presence of an existing cholecystostomy.",
    "indicationHi": "पित्त की मुख्य नली (CBD) में नीचे रुकावट होना, जहां लिवर की अंदरूनी नलियां पतली होने के कारण बाहर से नली न डल पा रही हो और मुंह से दूरबीन (ERCP) भी न जा पा रही हो; अतः पित्त की थैली के रास्ते से जाकर स्टेंट लगाना।",
    "descriptionEn": "Under fluoroscopic guidance via an existing cholecystostomy tract or fresh transhepatic gallbladder access, a steerable glide catheter and hydrophilic guidewire are manipulated through the tortuous spiral valves of Heister in the cystic duct into the common bile duct. The wire is advanced across the distal obstruction into the duodenum. Balloon angioplasty is performed and a metallic or plastic stent is deployed to re-establish internal biliary flow.",
    "descriptionHi": "पित्त की थैली के रास्ते से एक्स-रे पर देखते हुए एक बहुत बारीक मुड़ने वाले तार को थैली की घुमावदार नली (Cystic Duct) से पार कराते हुए मुख्य पित्त नली में पहुंचाया जाता है। वहां से रुकावट को पार करके आंतों तक पहुंचा जाता है। फिर गुब्बारा फुलाकर और धातु का स्टेंट लगाकर पित्त का रास्ता दोबारा चालू कर दिया जाता है।",
    "benefitsEn": [
      "Ingenious salvage technique: Achieves internal biliary drainage when both ERCP and standard transhepatic PTBD have failed.",
      "Avoids difficult high-risk puncture of non-dilated intrahepatic bile ducts.",
      "Permits subsequent removal of external drainage catheters."
    ],
    "benefitsHi": [
      "जब मुंह की दूरबीन (ERCP) और लिवर की नली (PTBD) दोनों फेल हो जाएं, तब पीलिया ठीक करने का अनोखा व सफल उपाय।",
      "लिवर की पतली नलियों में खतरनाक सुई लगाने से बचाव।",
      "इलाज के बाद बाहर लटकी नली को हटाने की सुविधा।"
    ],
    "specificRisksEn": [
      "Failure to traverse the tortuous spiral cystic duct valves requiring alternative approach.",
      "Cystic duct perforation or tear causing peritoneal bile leak.",
      "Hemobilia from cystic artery branch crossing.",
      "Post-procedure cholangitis or pancreatitis.",
      "Catheter dislodgement."
    ],
    "specificRisksHi": [
      "पित्त की थैली की नली के बहुत अधिक टेढ़े-मेढ़े होने के कारण तार आर-पार न हो पाना।",
      "थैली की नली में छेद होना और पेट में पित्त रिसना।",
      "पित्त में खून आना।",
      "प्रक्रिया के बाद बुखार या पैंक्रियाज में सूजन।",
      "नली का खिसकना।"
    ],
    "alternativesEn": "Attempted repeated ERCP with advanced rendezvous, ultrasound-guided left lobe PTBD, surgical biliary-enteric bypass, or endoscopic ultrasound-guided choledochoduodenostomy (EUS-CD).",
    "alternativesHi": "दोबारा ईआरसीपी की कोशिश, बाएं हिस्से से पीटीबीडी, पेट का बड़ा ऑपरेशन (बाईपास), अथवा ईयूएस (EUS) द्वारा स्टेंट।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
  },
  "ptbd-covered-stent-bile-leak": {
    "id": "ptbd-covered-stent-bile-leak",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Percutaneous Transhepatic Biliary Covered Stent Deployment for Postoperative Bile Duct Injury / Leak",
    "nameHi": "ऑपरेशन के बाद पित्त रिसाव हेतु कवर्ड स्टेंट (Bile Leak Covered Stent - कवर्ड स्टेंट लगाकर पित्त के रिसाव को तुरंत सील करना)",
    "indicationEn": "Iatrogenic bile duct injury with active major bile leak / transection / laceration following laparoscopic cholecystectomy or liver surgery with persistent high-output biliary fistula refractory to simple drainage.",
    "indicationHi": "पित्त की थैली या लिवर के ऑपरेशन के दौरान पित्त की मुख्य नली कट जाना या फट जाना, जिसके कारण पेट में भारी मात्रा में पित्त का रिसाव (Bile Leak) हो रहा हो और साधारण नली डालने से भी रिसाव बंद न हो रहा हो।",
    "descriptionEn": "Under fluoroscopic guidance via a percutaneous transhepatic access, a stiff guidewire is carefully negotiated across the disrupted, leaking segment of the bile duct into the duodenum. A fully or partially covered self-expanding metallic stent-graft (e.g., Gore Viabil) is deployed across the leak site. The impervious PTFE membrane instantly seals the hole in the duct wall, redirecting 100% of bile flow internally and allowing the fistula to heal.",
    "descriptionHi": "एक्स-रे की निगरानी में लिवर के रास्ते से पित्त की कटी हुई नली के आर-पार तार पहुंचाकर एक विशेष कपड़े व जाली से बना आवरणयुक्त स्टेंट (Covered Stent) लगाया जाता है। यह स्टेंट कटे हुए छेद को अंदर से पूरी तरह ढककर सील कर देता है। इससे पित्त का पेट में बहना तुरंत बंद हो जाता है और सारा पित्त आंतों में जाने लगता है, जिससे घाव तुरंत सूख जाता है।",
    "benefitsEn": [
      "Immediate definitive cessation of active intraperitoneal bile leakage without major surgical repair.",
      "Prevents devastating biloma, life-threatening biliary peritonitis, and intra-abdominal sepsis.",
      "Avoids complex emergency surgical reconstruction (hepaticojejunostomy) in an inflamed, friable operative field."
    ],
    "benefitsHi": [
      "बिना पेट का दोबारा बड़ा ऑपरेशन किए पित्त के रिसाव पर तुरंत 100% रोक।",
      "पेट में पित्त भरने, इन्फेक्शन और जानलेवा सेप्सिस से मरीज की जान बचाना।",
      "सूजे हुए नाजुक पेट में दोबारा चीर-फाड़ वाले जोखिम भरे ऑपरेशन से बचाव।"
    ],
    "specificRisksEn": [
      "Inability to negotiate wire across completely transected / clipped bile duct requiring surgical conversion.",
      "Covered stent migration into the duodenum if poorly anchored.",
      "Post-procedure cholangitis or side-branch biliary occlusion by the covered membrane.",
      "Hemobilia from adjacent vascular injury.",
      "Catheter tract bleeding or pain."
    ],
    "specificRisksHi": [
      "नली पूरी तरह कटी होने पर तार का आर-पार न हो पाना और बड़ा ऑपरेशन करने की मजबूरी।",
      "कवर्ड स्टेंट का खिसककर आंतों में चले जाना।",
      "कवर के कारण पास की अन्य छोटी पित्त नलियों का मुंह बंद होना और बुखार आना।",
      "पित्त में खून आना।",
      "सुई की जगह पर दर्द।"
    ],
    "alternativesEn": "Emergency surgical Roux-en-Y hepaticojejunostomy repair, endoscopic covered metal stenting (if reachable via ERCP), long-term external percutaneous drainage alone, or conservative watchful waiting.",
    "alternativesHi": "पेट दोबारा खोलकर आंत से जोड़ने का बड़ा ऑपरेशन (Roux-en-Y), दूरबीन (ERCP) से स्टेंट डालना, अथवा केवल ड्रेनेज नली लगाकर महीनों इंतजार करना।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता और नस द्वारा दर्द निवारक व शामक दवा।"
  },
  "percutaneous-biloma-abscess-drainage": {
    "id": "percutaneous-biloma-abscess-drainage",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Percutaneous Drainage of Postoperative Biloma / Subhepatic Abscess",
    "nameHi": "बिलोमा एवं लिवर मवाद का परक्यूटेनियस ड्रेनेज (पेट या लिवर में जमे पित्त व मवाद को सुई व नली द्वारा बाहर निकालना)",
    "indicationEn": "Infected fluid collection, biloma, or subhepatic / subphrenic abscess following cholecystectomy, liver resection, trauma, or liver transplantation presenting with fever, leukocytosis, and localized sepsis.",
    "indicationHi": "पित्ताशय, लिवर के ऑपरेशन या चोट के बाद पेट में पित्त का जमाव (Biloma) अथवा मवाद का फोड़ा (Abscess) बनना, जिसके कारण तेज बुखार, पेट दर्द और सेप्सिस हो गया हो।",
    "descriptionEn": "Under real-time ultrasound or CT guidance and local anesthesia, a needle is guided through the abdominal wall directly into the fluid collection avoiding bowel and major blood vessels. Diagnostic fluid is aspirated for microbiology. A soft 8.5F to 12F multi-sidehole pigtail catheter is introduced over a guidewire, locked securely inside the cavity, and connected to an external drainage bag to evacuate all infected fluid.",
    "descriptionHi": "सोनोग्राफी अथवा सीटी स्कैन की सीधी निगरानी में पेट को सुन्न करके एक बारीक सुई सीधे मवाद या पित्त के जमाव में डाली जाती है। जांच हेतु थोड़ा मवाद खींचने के बाद तार की मदद से एक मुड़ी हुई प्लास्टिक की ड्रेनेज नली (Pigtail Catheter) स्थापित कर दी जाती है। सारा गंदा पानी और मवाद तुरंत बाहर थैली में निकल जाता है जिससे मरीज को तुरंत राहत मिलती है।",
    "benefitsEn": [
      "Immediate, definitive source control of intra-abdominal sepsis without surgical re-exploration.",
      "Rapid resolution of fever, systemic bacteremia, and abdominal pain within 24-48 hours.",
      "Minimally invasive bedside or ultrasound-suite procedure done safely under local anesthesia."
    ],
    "benefitsHi": [
      "बिना दोबारा पेट खोले मवाद और इन्फेक्शन का 100% सुरक्षित निकास।",
      "24 से 48 घंटे में तेज बुखार, कंपकंपी और पेट दर्द से त्वरित मुक्ति।",
      "केवल स्थानीय सुन्नता में कुछ ही मिनटों में होने वाला सरल और सुरक्षित इलाज।"
    ],
    "specificRisksEn": [
      "Bowel perforation if needle traverses intervening bowel loops (minimized with cross-sectional CT/US planning).",
      "Hemorrhage or hematoma from vascular puncture along trajectory.",
      "Transient bacteremic spike (shaking chills / fever) during initial catheter flushing.",
      "Catheter blockage by thick fibrin/pus requiring saline irrigation or exchange.",
      "Catheter displacement or premature dislodgement."
    ],
    "specificRisksHi": [
      "सुई के रास्ते में आंत आने पर आंत में चोट का दुर्लभ खतरा (सोनोग्राफी देखकर बचाव किया जाता है)।",
      "सुई के रास्ते से खून का रिसाव।",
      "नली डालते समय कुछ पलों के लिए तेज कंपकंपी या बुखार का उछाल।",
      "गाढ़े मवाद से नली का बंद होना (जिसके लिए नली की सलाइन से सफाई की जाती है)।",
      "नली का अपनी जगह से खिसक जाना।"
    ],
    "alternativesEn": "Open or laparoscopic surgical drainage and washout, exploratory laparotomy, or intravenous antibiotic therapy alone (ineffective for walled-off collections > 3-4 cm).",
    "alternativesHi": "पेट दोबारा खोलने का बड़ा ऑपरेशन (Laparotomy), अथवा केवल एंटीबायोटिक दवाइयां (जो बड़े फोड़े में काम नहीं करतीं)।",
    "sedationTypeEn": "Local anesthesia infiltration with mild conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
  },
  "portal-vein-recanalization-thrombolysis": {
    "id": "portal-vein-recanalization-thrombolysis",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Percutaneous Transhepatic Portal Vein Recanalization & Thrombolysis in Acute PVT",
    "nameHi": "तीव्र पोर्टल नस थक्का निवारण (Acute PVT Thrombolysis - लिवर की मुख्य नस का ताजा थक्का घोलना एवं नस को खोलना)",
    "indicationEn": "Acute or subacute non-cirrhotic or cirrhotic portal vein thrombosis (PVT) with progressive bowel ischemia, worsening ascites, or extending thrombus into mesenteric veins refractory to systemic anticoagulation.",
    "indicationHi": "लिवर की मुख्य पोर्टल नस में अचानक खून का थक्का जमना (Acute PVT), नसों का बंद होना, आंतों में खून का बहाव रुककर आंत गलने (Bowel Gangrene) का भारी खतरा होना, जहां खून पतला करने वाली दवाएं असर न कर रही हों।",
    "descriptionEn": "Under ultrasound guidance, transhepatic (or trans-splenic / transjugular) access is obtained into the portal venous system. A guidewire and catheter are navigated across the thrombus in the main portal trunk and superior mesenteric vein (SMV). Mechanical aspiration thrombectomy is performed to extract fresh clots, followed by catheter-directed thrombolysis (Alteplase / r-tPA) infusion directly into the thrombus, with balloon angioplasty or stenting if underlying stenosis is unmasked.",
    "descriptionHi": "सोनोग्राफी की मदद से लिवर (या तिल्ली) के रास्ते एक बारीक कैथेटर पोर्टल नस में जमे ताजे थक्के के अंदर पहुंचाया जाता है। वहां विशेष चूषण कैथेटर (Aspiration Catheter) से थक्के को बाहर खींचा जाता है और थक्का घोलने वाली चमत्कारी दवा (tPA) सीधे थक्के के अंदर छोड़ी जाती है। यदि नस में सिकुड़न हो तो गुब्बारा फुलाकर स्टेंट लगा दिया जाता है जिससे आंतें गलने से बच जाती हैं।",
    "benefitsEn": [
      "Immediate restoration of mesenteric and portal venous outflow, preventing catastrophic bowel infarction and death.",
      "Significantly higher recanalization rate (> 85-90%) compared to systemic anticoagulation alone.",
      "Prevents permanent chronic cavernous transformation and intractable long-term portal hypertension."
    ],
    "benefitsHi": [
      "आंतों के खून का बहाव तुरंत चालू होना, जिससे आंतों के सड़े हिस्से को काटने के बड़े ऑपरेशन और मौत से 100% बचाव।",
      "केवल खून पतला करने वाली दवाइयों की तुलना में थक्के के पूरी तरह घुलने की 85-90% अचूक दर।",
      "भविष्य में जीवन भर के लिए पोर्टल नस सूखने और नसों के गुच्छे बनने से बचाव।"
    ],
    "specificRisksEn": [
      "Severe systemic hemorrhage: Major bleeding from puncture tract or gastrointestinal tract during tPA infusion (5-10%).",
      "Intraperitoneal bleeding from transhepatic or trans-splenic access site.",
      "Distal embolization of thrombus fragments into intrahepatic portal branches.",
      "Re-thrombosis upon cessation of lytic infusion.",
      "Allergic reaction to thrombolytic agents."
    ],
    "specificRisksHi": [
      "थक्का घोलने वाली तेज दवा (tPA) के कारण शरीर में कहीं भी खून बहने का जोखिम (5-10%)।",
      "लिवर या तिल्ली में सुई लगने की जगह से पेट में खून का रिसाव।",
      "थक्के के छोटे टुकड़े लिवर की अन्य शाखाओं में जाना।",
      "दवा बंद करने पर दोबारा थक्का जमना।",
      "दवा से एलर्जी।"
    ],
    "alternativesEn": "Systemic intravenous unfractionated heparin / therapeutic LMWH alone, emergency surgical thrombectomy (high failure/re-thrombosis rate), or emergency bowel resection for frank infarction.",
    "alternativesHi": "केवल नस द्वारा हेपारिन ड्रिप (दवा) चालू रखना, पेट खोलकर नस से थक्का निकालने का ऑपरेशन, अथवा आंत गलने पर आंत काटना।",
    "sedationTypeEn": "Conscious sedation with local anesthesia or light general anesthesia in ICU setting.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और शामक दवा अथवा आईसीयू में हल्की बेहोशी।"
  },
  "tips-stent-graft-reduction": {
    "id": "tips-stent-graft-reduction",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "TIPS Stent Graft Reduction (Constrained Stent) for Refractory Post-TIPS Encephalopathy",
    "nameHi": "टिप्स स्टेंट रिडक्शन (Constrained Stent - टिप्स स्टेंट को अंदर से सिकोड़कर बेहोशी व सुस्ती का इलाज)",
    "indicationEn": "Severe, disabling, recurrent or medically refractory hepatic encephalopathy (West Haven Grade III/IV) or high-output cardiac failure developing after TIPS creation despite maximum medical therapy.",
    "indicationHi": "टिप्स (TIPS) स्टेंट लगने के बाद मरीज को अत्यधिक गहरी सुस्ती, मानसिक भ्रम या बार-बार कोमा जैसी स्थिति होना, अथवा दिल पर अत्यधिक दबाव पड़ना, जो किसी भी दवा से ठीक न हो रहा हो।",
    "descriptionEn": "Under local anesthesia and fluoroscopy via the internal jugular vein, a catheter is navigated into the widely patent TIPS stent. A constrained stent technique (deploying a smaller-diameter covered stent-graft inside a partially constrained parallel balloon or deploying an hourglass-configured reduction stent-graft) is executed to narrow the shunt lumen from 10 mm down to 5-7 mm, reducing portosystemic shunt fraction while preserving just enough flow to prevent acute variceal re-bleeding.",
    "descriptionHi": "गले की नस से पुराने टिप्स स्टेंट के अंदर पहुंचा जाता है। वहां एक विशेष तकनीक या 'Hourglass' (डमरू के आकार का) छोटा स्टेंट पुराने स्टेंट के अंदर लगा दिया जाता है। इससे स्टेंट का रास्ता 10 मिमी से घटकर 5 से 7 मिमी रह जाता है। खून का दिल में जाना कम हो जाता है और सारा खून दोबारा लिवर में जाकर साफ होने लगता है, जिससे मरीज की बेहोशी तुरंत दूर हो जाती है।",
    "benefitsEn": [
      "Prompt, dramatic resolution of debilitating post-TIPS hepatic encephalopathy (success rate > 75-80%).",
      "Restores cognitive performance and eliminates frequent hospital readmissions.",
      "Relieves high-output cardiac strain while preserving partial portal decompression."
    ],
    "benefitsHi": [
      "75 से 80% मरीजों में गंभीर सुस्ती, मानसिक भ्रम और बेहोशी से तुरंत मुक्ति।",
      "मरीज की सोचने-समझने और बात करने की क्षमता दोबारा पूरी तरह सामान्य होना।",
      "दिल पर पड़ रहा अत्यधिक दबाव तुरंत खत्म होना।"
    ],
    "specificRisksEn": [
      "Complete acute thrombosis of the reduced TIPS shunt requiring emergency thrombectomy.",
      "Recurrence of severe variceal bleeding or tense ascites due to elevated portal pressure.",
      "Inability to achieve desired lumen diameter (too loose or too tight).",
      "Neck puncture site hematoma.",
      "Contrast-induced nephropathy."
    ],
    "specificRisksHi": [
      "स्टेंट के अत्यधिक संकरा होने पर स्टेंट में खून का थक्का जमना और स्टेंट का पूरी तरह बंद होना।",
      "लिवर का प्रेशर दोबारा बढ़ने से फिर से खून की उल्टी होना या पेट में पानी भरना।",
      "स्टेंट का मनचाहे आकार में न सिकुड़ पाना।",
      "गर्दन में खून का थक्का जमना।",
      "डाई से गुर्दों पर असर।"
    ],
    "alternativesEn": "Total transcatheter TIPS occlusion with vascular plug/coils (high variceal re-bleeding risk), intensive medical therapy with rifaximin, lactulose, and BCAAs, or urgent liver transplantation.",
    "alternativesHi": "टिप्स स्टेंट को पूरी तरह बंद कर देना (जिससे तुरंत खून की उल्टी का भारी खतरा रहता है), भारी दवाइयां जारी रखना, अथवा तुरंत लिवर ट्रांसप्लांट।",
    "sedationTypeEn": "Local anesthesia with mild conscious sedation.",
    "sedationTypeHi": "गले में स्थानीय सुन्नता और नस द्वारा हल्की शामक दवा।"
  },
  "percutaneous-coil-biliovenous-fistula": {
    "id": "percutaneous-coil-biliovenous-fistula",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Percutaneous Transhepatic Coil Embolization of Bilio-Venous / Bilio-Arterial Fistula Causing Hemobilia",
    "nameHi": "बिलियो-वैस्कुलर फिस्टुला हेतु कॉइल एम्बोलाइजेशन (पित्त नली व खून की नस के बीच बने छेद को छल्लों द्वारा बंद करना)",
    "indicationEn": "Severe, life-threatening hemobilia or high-grade bacteremia secondary to an abnormal communication (fistula) between a hepatic artery/portal vein and the intrahepatic biliary tree following liver biopsy, trauma, or PTBD placement.",
    "indicationHi": "लिवर की बायोप्सी, चोट या पीटीबीडी नली डालने के बाद पित्त की नली और खून की नस आपस में जुड़ जाना (Fistula), जिसके कारण पित्त की थैली/नली से लगातार भारी खून बहना (Hemobilia) अथवा बार-बार खून में जानलेवा इन्फेक्शन फैलना।",
    "descriptionEn": "Under fluoroscopic and angiographic guidance, the fistulous communication is mapped either transhepatically via the biliary drainage tract or transarterially via the femoral artery. Microcatheters are guided directly to the point of vascular-biliary communication. Detachable platinum microcoils, Gelfoam, or n-BCA tissue glue are deployed to tightly seal the fistula, arresting bleeding while preserving downstream parenchymal perfusion.",
    "descriptionHi": "एक्स-रे की निगरानी में जांघ की नस या लिवर की ड्रेनेज नली के रास्ते से उस बारीक छेद तक पहुंचा जाता है जहां से खून पित्त की नली में रिस रहा है। वहां सूक्ष्म धातु के छल्ले (Coils) या विशेष मेडिकल गोंद डालकर उस छेद को अंदर से पूरी तरह सील कर दिया जाता है, जिससे खून बहना तुरंत बंद हो जाता है और बाकी लिवर को कोई नुकसान नहीं होता।",
    "benefitsEn": [
      "Immediate definitive cessation of life-threatening hemobilia without requiring open liver resection.",
      "Prevents clot-induced acute biliary colic and obstructive jaundice.",
      "Stabilizes hemoglobin and eliminates the need for emergency blood transfusions."
    ],
    "benefitsHi": [
      "पित्त की नली में खून बहने पर तुरंत 100% जीवन रक्षक रोक।",
      "खून के थक्के जमने से होने वाले असहनीय पेट दर्द और पीलिया से तुरंत राहत।",
      "लिवर का ऑपरेशन किए बिना ही मरीज की स्थिति तुरंत सामान्य होना।"
    ],
    "specificRisksEn": [
      "Hepatic parenchymal ischemia or focal infarction from necessary arterial vessel occlusion.",
      "Non-target coil migration into the main biliary tree or portal vein.",
      "Persistent or recurrent bleeding requiring secondary embolization.",
      "Biliary stricture formation at the fistula site.",
      "Puncture site hematoma."
    ],
    "specificRisksHi": [
      "नस बंद होने से लिवर के एक छोटे हिस्से में खून की कमी होना।",
      "छल्ले का खिसककर पित्त की मुख्य नली में चले जाना।",
      "खून का रिसाव पूरी तरह न रुकने पर दोबारा प्रक्रिया की आवश्यकता।",
      "उस जगह पर पित्त नली का हल्का सिकुड़ना।",
      "सुई की जगह पर खून जमना।"
    ],
    "alternativesEn": "Open surgical hepatic artery ligation, surgical partial liver resection, temporary balloon tamponade via drainage catheter, or conservative blood transfusion.",
    "alternativesHi": "पेट खोलकर नस बांधने या लिवर काटने का बड़ा ऑपरेशन, नली द्वारा गुब्बारा फुलाकर नस दबाना, अथवा केवल खून चढ़ाना।",
    "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता और नस द्वारा दर्द निवारक व शामक दवा।"
  },
  "selective-hepatic-artery-embolization-hemobilia": {
    "id": "selective-hepatic-artery-embolization-hemobilia",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Selective Hepatic Artery Embolization for Post-Liver Biopsy / Trauma Hemobilia",
    "nameHi": "लिवर धमनी का चयनात्मक एम्बोलाइजेशन (बायोप्सी या चोट के बाद लिवर से जानलेवा रक्तस्राव रोकने हेतु नस बंदी)",
    "indicationEn": "Massive upper gastrointestinal bleeding or hemobilia secondary to hepatic artery pseudoaneurysm, arterioportal fistula, or parenchymal laceration following percutaneous liver biopsy, hepatobiliary surgery, or blunt abdominal trauma.",
    "indicationHi": "लिवर बायोप्सी, ऑपरेशन या सड़क दुर्घटना में चोट लगने के बाद लिवर की धमनी का गुब्बारे की तरह फूल जाना (Pseudoaneurysm), खून की उल्टी होना, पेट में या पित्त की नली में भारी जानलेवा रक्तस्राव होना।",
    "descriptionEn": "Under local anesthesia and fluoroscopy via femoral arterial access, a diagnostic catheter engages the celiac axis and proper hepatic artery. Selective angiography identifies the bleeding pseudoaneurysm or extravasation point. A microcatheter is navigated superselectively into the injured vessel, and microcoils, Gelfoam, or liquid embolic glue are deployed across the bleeding site to achieve immediate, definitive hemostasis.",
    "descriptionHi": "जांघ की नस से कैथेटर को सीधे लिवर की धमनी में ले जाया जाता है। एक्स-रे पर खून बहने वाले स्थान और फूली हुई नस (Pseudoaneurysm) की तुरंत पहचान की जाती है। फिर एक अति-बारीक कैथेटर द्वारा धातु के सूक्ष्म छल्ले (Coils) या विशेष मेडिकल गोंद डालकर उस फटी हुई नस को तुरंत बंद कर दिया जाता है, जिससे जानलेवा खून बहना उसी क्षण रुक जाता है।",
    "benefitsEn": [
      "Immediate life-saving cessation of massive arterial hemorrhage (> 95% success rate).",
      "Avoids emergency high-risk open laparotomy and hepatic resection in hemodynamically unstable patients.",
      "Superselective technique maximally preserves surrounding healthy liver parenchyma."
    ],
    "benefitsHi": [
      "जानलेवा रक्तस्राव पर तुरंत 95% से अधिक अचूक सफलता से पूर्ण रोक।",
      "गंभीर स्थिति में पेट खोलने के बड़े और जानलेवा ऑपरेशन से 100% बचाव।",
      "केवल खून बहने वाली नस को बंद किया जाता है, बाकी स्वस्थ लिवर पूरी तरह सुरक्षित रहता है।"
    ],
    "specificRisksEn": [
      "Focal hepatic parenchymal ischemia or segmental infarction.",
      "Ischemic cholecystitis if cystic artery originates from the embolized segment.",
      "Post-embolization syndrome (RUQ pain, fever, nausea).",
      "Recurrent bleeding from collateral revascularization requiring repeat embolization.",
      "Groin puncture site hematoma or pseudoaneurysm."
    ],
    "specificRisksHi": [
      "नस बंद होने से लिवर के एक छोटे हिस्से में खून की कमी होना (लिवर इसे आसानी से सहन कर लेता है)।",
      "पित्त की थैली की नस पास होने पर पित्ताशय में हल्की सूजन।",
      "प्रक्रिया के बाद 1-2 दिन पेट दर्द और हल्का बुखार।",
      "अन्य नसों से दोबारा रिसाव होने पर दोबारा प्रक्रिया की आवश्यकता।",
      "जांघ में सुई की जगह खून जमना।"
    ],
    "alternativesEn": "Emergency surgical laparotomy with hepatic artery ligation or partial hepatectomy, surgical packing, or conservative management with massive blood transfusions (high mortality).",
    "alternativesHi": "आपातकालीन खुला ऑपरेशन करके नस बांधना या लिवर काटना, अथवा केवल खून चढ़ाते रहना (जो अत्यधिक जानलेवा हो सकता है)।",
    "sedationTypeEn": "Local anesthesia with IV analgesia and conscious sedation.",
    "sedationTypeHi": "जांघ में स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक व शामक दवा।"
  },
  "trans-splenic-portal-access-salvage": {
    "id": "trans-splenic-portal-access-salvage",
    "category": "Hepatobiliary & Portal Hypertension",
    "nameEn": "Trans-Splenic Portal Venous Access and Portography for Complex Portal Vein Occlusion Salvage",
    "nameHi": "ट्रांस-स्प्लेनिक पोर्टल एक्सेस (तिल्ली के रास्ते से लिवर की बंद पोर्टल नस को खोलने हेतु उन्नत तकनीक)",
    "indicationEn": "Chronic total portal vein occlusion (CTO), refractory post-transplant portal stenosis, or EHPVO where conventional transhepatic or transjugular access has failed or is anatomically impossible.",
    "indicationHi": "लिवर की मुख्य पोर्टल नस का पूरी तरह बंद हो जाना, जहां लिवर या गले के रास्ते से नस को खोलना संभव न हुआ हो; अतः तिल्ली (Spleen) के रास्ते से जाकर बंद नस को खोलने का विशेष व अंतिम सफल उपाय।",
    "descriptionEn": "Under direct ultrasound and fluoroscopic guidance, a fine micropuncture needle is guided into a peripheral intrasplenic vein tributary. A guidewire and 4-5F catheter are advanced antegrade into the splenic vein and main portal trunk. Once the chronic occlusion is negotiated into the intrahepatic portal branches, balloon recanalization and stenting are performed. The trans-splenic parenchymal tract is embolized with coils and Gelfoam/glue upon sheath withdrawal to prevent hemoperitoneum.",
    "descriptionHi": "सोनोग्राफी की सीधी निगरानी में तिल्ली (Spleen) की एक बारीक नस में बहुत पतली सुई डाली जाती है। वहां से तार और कैथेटर को आगे बढ़ाकर बरसों से बंद पड़ी मुख्य पोर्टल नस के रास्ते को खोला जाता है। नस को गुब्बारे से फुलाकर स्टेंट लगा दिया जाता है। काम पूरा होने के बाद तिल्ली के सुई वाले छेद को धातु के छल्लों और दवा से पक्का सील कर दिया जाता है ताकि पेट में खून न बहे।",
    "benefitsEn": [
      "Unique salvage avenue: Successfully recanalizes portal occlusions when all other approaches have failed.",
      "Direct antegrade push vector allows crossing of dense calcified fibrous portal vein caps.",
      "Restores physiological mesenteric blood flow directly to the liver."
    ],
    "benefitsHi": [
      "जब सभी रास्ते बंद हो जाएं तब भी पोर्टल नस को खोलने का अचूक और चमत्कारी विकल्प।",
      "सीधे रास्ते से जोर लगाने की सुविधा जिससे कड़क से कड़क बंद नस भी खुल जाती है।",
      "आंतों का खून दोबारा सीधे लिवर में बहने लगता है।"
    ],
    "specificRisksEn": [
      "Intraperitoneal hemorrhage or splenic rupture from parenchymal puncture (managed with mandatory tract coil embolization).",
      "Subcapsular splenic hematoma.",
      "Left pleural effusion or pneumothorax during intercostal access.",
      "Failure to cross chronic calcified portal vein occlusion.",
      "Early re-thrombosis requiring anticoagulation."
    ],
    "specificRisksHi": [
      "तिल्ली में सुई लगने के रास्ते से पेट में खून का रिसाव (जिससे बचने हेतु छेद को छल्लों व जेल से पक्का सील किया जाता है)।",
      "तिल्ली के अंदर खून का थक्का जमना।",
      "पसली के रास्ते सुई जाने पर फेफड़े के पर्दे में हल्का पानी या हवा का रिसाव।",
      "नस बहुत अधिक कड़क होने पर तार का आर-पार न हो पाना।",
      "प्रक्रिया के बाद दोबारा थक्का जमना।"
    ],
    "alternativesEn": "Surgical Meso-Rex or splenorenal bypass, repeated endoscopic variceal band ligation, permanent medical therapy, or conservative management.",
    "alternativesHi": "पेट का बड़ा बाईपास ऑपरेशन, जीवन भर एंडोस्कोपी द्वारा छल्ले लगवाना, अथवा केवल दवाइयां।",
    "sedationTypeEn": "Deep conscious sedation or general anesthesia.",
    "sedationTypeHi": "नस द्वारा गहरी शामक दवाइयां (Deep Sedation) अथवा पूर्ण बेहोशी।"
  }
};

export const ONCOLOGY_AND_HBP_CLINICAL_PREP: Record<string, ProcedureClinicalPreparation> = {
  "ctace-lipiodol-doxorubicin": {
    "procedureId": "ctace-lipiodol-doxorubicin",
    "procedureName": "Conventional TACE with Lipiodol and Doxorubicin",
    "preOpCriteriaEn": [
      "Child-Pugh score <= 7 (Class A or early B); ECOG performance status 0-1",
      "Total bilirubin < 2.5 mg/dL; Serum albumin >= 2.8 g/dL; INR <= 1.5; Platelets >= 50,000/uL",
      "Patent main portal vein trunk on triphasic contrast CT or MRI (no VP4 thrombus)",
      "Creatinine clearance > 45 mL/min"
    ],
    "preOpCriteriaHi": [
      "चाइल्ड-प्यू स्कोर <= 7 (क्लास A या शुरुआती B); सामान्य शारीरिक सक्रियता (ECOG 0-1)",
      "कुल बिलीरुबिन < 2.5 mg/dL; एल्ब्यूमिन >= 2.8 g/dL; INR <= 1.5; प्लेटलेट्स >= 50,000/uL",
      "सीटी/एमआरआई पर मुख्य पोर्टल नस का खुला होना (मुख्य नस में ट्यूमर का थक्का न होना)",
      "किडनी की कार्यक्षमता सामान्य (क्रिएटिनिन क्लीयरेंस > 45 mL/min)"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline at 1 mL/kg/h for 4 hours pre-procedure and 6 hours post-procedure for renal contrast protection.",
    "hydrationProtocolHi": "प्रक्रिया से 4 घंटे पहले और 6 घंटे बाद तक नॉर्मल सलाइन ड्रिप 1 mL/kg/घंटे की दर से गुर्दों की सुरक्षा हेतु।",
    "bloodProductsTargetEn": "Keep Platelets >= 50,000/uL (transfuse RDP/SDP if lower); Correct INR <= 1.5 with FFP or Vitamin K.",
    "bloodProductsTargetHi": "प्लेटलेट्स 50,000 से अधिक रखें; यदि INR 1.5 से अधिक हो तो प्लाज्मा (FFP) चढ़ाएं।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV + Inj Metronidazole 500mg IV 1 hour prior to femoral puncture; Inj Ondansetron 8mg IV + Inj Dexamethasone 8mg IV for antiemetic prophylaxis.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पूर्व नस द्वारा सेफ्ट्रिएक्सोन 1 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम तथा उल्टी रोकने का इंजेक्शन।",
    "specialPrecautionsEn": [
      "Hold ACE-inhibitors and ARBs on morning of procedure.",
      "Hold Metformin 48 hours post-procedure until renal function confirmed stable.",
      "Check baseline ECG and echocardiogram (LVEF >= 50% required for Doxorubicin).",
      "Post-procedure 4-6 hours strict supine bed rest with sandbag over femoral puncture site."
    ],
    "specialPrecautionsHi": [
      "प्रक्रिया की सुबह बीपी की दवा (ACEi/ARB) न लें।",
      "डायबिटीज की मेटफॉर्मिन गोली प्रक्रिया के बाद 48 घंटे तक बंद रखें।",
      "डॉक्सोरूबिसिन कीमोथेरेपी से पहले दिल की इकोकार्डियोग्राफी (LVEF >= 50%) आवश्यक है।",
      "प्रक्रिया के बाद जांघ पर 4 से 6 घंटे रेत की थैली रखकर सीधा लेटना अनिवार्य है।"
    ]
  },
  "deb-tace-dcbeads-lifepearl": {
    "procedureId": "deb-tace-dcbeads-lifepearl",
    "procedureName": "Drug-Eluting Bead TACE (DEB-TACE)",
    "preOpCriteriaEn": [
      "Child-Pugh score 5-7 (Class A or early B); ECOG PS 0-1",
      "Total Bilirubin < 2.0 mg/dL; AST/ALT < 5x upper limit of normal; Albumin >= 3.0 g/dL",
      "Platelets >= 60,000/uL; INR <= 1.4; Absolute neutrophil count > 1500/uL",
      "Main portal vein patent on Doppler ultrasound or contrast CT/MRI"
    ],
    "preOpCriteriaHi": [
      "लिवर फंक्शन चाइल्ड-प्यू स्कोर 5-7 (क्लास A या शुरुआती B)",
      "कुल बिलीरुबिन < 2.0 mg/dL; लिवर एंजाइम सामान्य से 5 गुना से कम; एल्ब्यूमिन >= 3.0 g/dL",
      "प्लेटलेट्स >= 60,000/uL; INR <= 1.4; न्यूट्रोफिल काउंट > 1500/uL",
      "पोर्टल वेन खुली होना अनिवार्य"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "0.9% Normal Saline at 1 mL/kg/h initiated 4 hours prior and continued for 6 hours post-procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप प्रक्रिया से 4 घंटे पूर्व और 6 घंटे पश्चात तक 1 mL/kg/घंटे की रफ्तार से।",
    "bloodProductsTargetEn": "Platelets >= 60,000/uL; INR <= 1.4. Transfuse platelets or FFP if parameters below threshold.",
    "bloodProductsTargetHi": "प्लेटलेट्स 60,000 से अधिक और INR 1.4 से कम रखें; आवश्यकतानुसार प्लेटलेट या एफएफपी चढ़ाएं।",
    "antibioticProphylaxisEn": "Inj Cefuroxime 1.5g IV + Inj Metronidazole 500mg IV 1 hour prior to sheath insertion; Inj Granisetron 1mg IV for antiemesis.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले सेफ्यूरोक्साइम 1.5 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम तथा ग्रैनिसेट्रॉन उल्टी रोधी दवा।",
    "specialPrecautionsEn": [
      "Reconstitute Doxorubicin with DC Bead/LifePearl 90-120 minutes before planned delivery.",
      "Assess cardiac baseline with ECG and 2D Echo (ejection fraction >= 50%).",
      "Monitor for slow injection rate (1 mL/min) under continuous fluoroscopy to avoid reflux.",
      "Post-procedure 6-hour bed rest with puncture site compression."
    ],
    "specialPrecautionsHi": [
      "दवा के मनके प्रक्रिया से 90-120 मिनट पहले तैयार किए जाते हैं।",
      "हृदय की कार्यप्रणाली (2D Echo) की जांच अनिवार्य।",
      "मनके अत्यंत धीमी गति से छोड़े जाते हैं ताकि विपरीत दिशा में न बहें।",
      "प्रक्रिया पश्चात 6 घंटे का बेड रेस्ट।"
    ]
  },
  "btace-balloon-occluded-tace": {
    "procedureId": "btace-balloon-occluded-tace",
    "procedureName": "Balloon-Occluded Transarterial Chemoembolization (B-TACE)",
    "preOpCriteriaEn": [
      "Child-Pugh score <= 7 (Class A/B); ECOG PS 0-1",
      "Target tumor vessel diameter suitable for microballoon (1.8 - 3.5 mm)",
      "Platelet count >= 50,000/uL; INR <= 1.5; Serum creatinine <= 1.6 mg/dL",
      "Absence of main trunk portal vein occlusion"
    ],
    "preOpCriteriaHi": [
      "चाइल्ड-प्यू स्कोर <= 7; शारीरिक स्थिति अच्छी (ECOG 0-1)",
      "ट्यूमर की नस का आकार माइक्रो-बैलून हेतु उपयुक्त (1.8 से 3.5 मिमी)",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5; सीरम क्रिएटिनिन <= 1.6 mg/dL",
      "मुख्य पोर्टल नस खुली होनी चाहिए"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 1 mL/kg/h for 4 hours pre-procedure and 6 hours post-procedure.",
    "hydrationProtocolHi": "प्रक्रिया पूर्व 4 घंटे व पश्चात 6 घंटे तक नॉर्मल सलाइन ड्रिप 1 mL/kg/घंटे की दर से।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5. Blood group and cross-match ready.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL तथा INR 1.5 से कम; ब्लड ग्रुपिंग व क्रॉस-मैच तैयार।",
    "antibioticProphylaxisEn": "Inj Cefazolin 2g IV (or Inj Ceftriaxone 1g IV) + Inj Metronidazole 500mg IV 1 hour prior; Inj Tramadol 50mg IV for visceral pain.",
    "antibioticProphylaxisHi": "प्रक्रिया से पूर्व सेफाजोलिन 2 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम तथा दर्द निवारक ट्रामाडोल इंजेक्शन।",
    "specialPrecautionsEn": [
      "Calibrate microballoon pressure manometer syringe accurately with 50% diluted contrast.",
      "Monitor stump arterial pressure before and after microballoon inflation.",
      "Ensure gentle deflation and slow withdrawal to avoid vessel shearing.",
      "Post-procedure compression at puncture site with bed rest for 6 hours."
    ],
    "specialPrecautionsHi": [
      "बैलून में 50% घुली हुई डाई का उपयोग और दबाव मीटर की सटीक निगरानी।",
      "बैलून फुलाने के बाद नस का दबाव जांचना।",
      "नस को क्षति से बचाने हेतु बैलून को धीरे-धीरे सिकोड़कर निकालना।",
      "प्रक्रिया के बाद 6 घंटे तक सीधा लेटना आवश्यक।"
    ]
  },
  "tare-sirt-mapping-tc99m-maa": {
    "procedureId": "tare-sirt-mapping-tc99m-maa",
    "procedureName": "TARE / SIRT Mapping Angiogram with Tc-99m MAA",
    "preOpCriteriaEn": [
      "ECOG performance status 0-1; Child-Pugh Score <= 7",
      "Total Bilirubin <= 2.0 mg/dL; Albumin >= 3.0 g/dL",
      "Same-day coordination confirmed with Nuclear Medicine department for SPECT-CT",
      "Adequate renal function for intra-arterial iodinated contrast administration"
    ],
    "preOpCriteriaHi": [
      "मरीज की सक्रियता अच्छी (ECOG 0-1); चाइल्ड-प्यू स्कोर <= 7",
      "कुल बिलीरुबिन <= 2.0 mg/dL; एल्ब्यूमिन >= 3.0 g/dL",
      "न्यूक्लियर मेडिसिन विभाग में उसी दिन स्पेक्ट-सीटी (SPECT-CT) का पूर्व-निर्धारण",
      "किडनी की कार्यक्षमता डाई के उपयोग हेतु उपयुक्त"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 1 mL/kg/h for 4 hours prior and 4 hours after mapping.",
    "hydrationProtocolHi": "जांच से 4 घंटे पहले और 4 घंटे बाद तक नॉर्मल सलाइन ड्रिप 1 mL/kg/घंटे की दर से।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स 50,000 से अधिक और INR 1.5 से कम रखें।",
    "antibioticProphylaxisEn": "Inj Cefazolin 1g IV 1 hour prior to arterial puncture.",
    "antibioticProphylaxisHi": "धमनी पंक्चर से 1 घंटा पूर्व सेफाजोलिन 1 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Tc-99m MAA dose (150-200 MBq / 4-5 mCi) ordered and verified with Nuclear Medicine RSO.",
      "Immediate transfer to Nuclear Medicine on stretcher post-procedure for planar and SPECT-CT imaging.",
      "Calculate Lung Shunt Fraction (LSF) to ensure lung dose < 30 Gy per treatment (< 50 Gy cumulative).",
      "Compress arterial puncture site for 20 minutes; bed rest for 4-6 hours."
    ],
    "specialPrecautionsHi": [
      "रेडियोएक्टिव आइसोटोप (Tc-99m MAA) की खुराक रेडिएशन सेफ्टी ऑफिसर द्वारा प्रमाणित होनी चाहिए।",
      "प्रक्रिया के तुरंत बाद मरीज को स्ट्रेचर पर न्यूक्लियर मेडिसिन स्कैन हेतु ले जाया जाता है।",
      "फेफड़ों में जाने वाले अंश की गणना (लंग शंट < 20% होना अनिवार्य)।",
      "जांघ की नस पर 20 मिनट दबाव और 4 से 6 घंटे का बेड रेस्ट।"
    ]
  },
  "tare-sirt-glass-therasphere": {
    "procedureId": "tare-sirt-glass-therasphere",
    "procedureName": "TARE Delivery of Y-90 Glass Microspheres (TheraSphere)",
    "preOpCriteriaEn": [
      "Tc-99m MAA mapping completed within 14-21 days showing lung shunt fraction < 20% (lung dose < 30 Gy)",
      "Absence of extrahepatic gastrointestinal tracer uptake on mapping SPECT-CT",
      "Total Bilirubin <= 2.0 mg/dL; Albumin >= 3.0 g/dL; Child-Pugh Score <= 7",
      "Y-90 dose calibrated and verified by Medical Physicist/RSO on morning of delivery"
    ],
    "preOpCriteriaHi": [
      "14-21 दिन के भीतर हुई मैपिंग में फेफड़ों का शंट 20% से कम होना अनिवार्य",
      "मैपिंग सीटी पर पेट या आंतों में कोई दवा का रिसाव न होना",
      "बिलीरुबिन <= 2.0 mg/dL; एल्ब्यूमिन >= 3.0 g/dL; लिवर फंक्शन चाइल्ड-प्यू <= 7",
      "रेडियोएक्टिव खुराक मेडिकल फिजिसिस्ट एवं आर.एस.ओ. द्वारा प्रमाणित"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 1 mL/kg/h for 4 hours pre-op and 6 hours post-op.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप प्रक्रिया पूर्व 4 घंटे व पश्चात 6 घंटे तक 1 mL/kg/घंटे की दर से।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV 1 hour prior; Inj Ondansetron 8mg IV + Inj Pantoprazole 40mg IV.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम + ऑनडैनसेट्रॉन 8 मिलीग्राम + पैंटोप्राजोल 40 मिलीग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Rigid beta-radiation acrylic shielding box and dosimeter badges worn by all personnel.",
      "Perform pre-administration flush to check line patency; prime delivery apparatus with saline.",
      "Perform post-delivery waste radiation survey (< 2% residual activity target).",
      "Patient transferred for post-procedure Bremsstrahlung SPECT-CT or Y-90 PET-CT to document tumor coverage."
    ],
    "specialPrecautionsHi": [
      "रेडिएशन से बचाव हेतु एक्रिलिक बॉक्स और स्टाफ द्वारा टीएलडी बैज का उपयोग।",
      "दवा छोड़ने से पहले और बाद में सलाइन फ्लश द्वारा नली की पूर्ण जांच।",
      "प्रक्रिया के तुरंत बाद न्यूक्लियर विभाग में पीईटी-सीटी (PET-CT) द्वारा रेडिएशन की स्थिति की पुष्टि।",
      "जांघ पर पट्टी और 6 घंटे का बेड रेस्ट।"
    ]
  },
  "tare-sirt-resin-sirspheres": {
    "procedureId": "tare-sirt-resin-sirspheres",
    "procedureName": "TARE Delivery of Y-90 Resin Microspheres (SIR-Spheres)",
    "preOpCriteriaEn": [
      "Tc-99m MAA mapping demonstrating lung shunt fraction < 15% (or 15-20% with dose reduction)",
      "No non-target gastrointestinal uptake on mapping SPECT-CT",
      "Absolute neutrophil count > 1500/uL; Platelet count > 80,000/uL; INR <= 1.4",
      "Total Bilirubin <= 1.8 mg/dL; Albumin >= 3.0 g/dL"
    ],
    "preOpCriteriaHi": [
      "मैपिंग जांच में फेफड़ों का शंट 15% से कम होना अनिवार्य",
      "आंतों या आमाशय में कोई रिसाव न होना",
      "न्यूट्रोफिल > 1500/uL; प्लेटलेट्स > 80,000/uL; INR <= 1.4",
      "कुल बिलीरुबिन <= 1.8 mg/dL; एल्ब्यूमिन >= 3.0 g/dL"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 1 mL/kg/h for 4 hours pre-procedure and 6 hours post-procedure.",
    "hydrationProtocolHi": "प्रक्रिया से 4 घंटे पहले व 6 घंटे बाद तक नॉर्मल सलाइन ड्रिप 1 mL/kg/घंटे की दर से।",
    "bloodProductsTargetEn": "Platelets >= 80,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 80,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV + Inj Ondansetron 8mg IV + Inj Dexamethasone 4mg IV 1 hour prior.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम + ऑनडैनसेट्रॉन 8 मिलीग्राम + डेक्सामेथासोन 4 मिलीग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Use 5% Dextrose in Water (D5W) exclusively for sphere suspension; sterile water or saline will cause sphere aggregation.",
      "Infuse slowly (pulse-pause technique) alternating with contrast puffs to detect slowing of forward flow.",
      "Stop delivery immediately upon noticing contrast stasis to prevent retrograde spill.",
      "Post-delivery PET/CT or Bremsstrahlung SPECT/CT within 2-4 hours."
    ],
    "specialPrecautionsHi": [
      "दवा के मनकों को केवल 5% ग्लूकोज (D5W) में मिलाना अनिवार्य (सलाइन में मनके जम जाते हैं)।",
      "अत्यंत धीमी गति से रुक-रुक कर दवा छोड़ना ताकि नस में बहाव धीमा होते ही रोका जा सके।",
      "नस बंद होते ही तुरंत प्रक्रिया रोक दी जाती है ताकि विपरीत रिसाव न हो।",
      "प्रक्रिया के 2-4 घंटे में न्यूक्लियर स्कैन द्वारा पुष्टि।"
    ]
  },
  "tare-radiation-segmentectomy": {
    "procedureId": "tare-radiation-segmentectomy",
    "procedureName": "TARE Radiation Segmentectomy",
    "preOpCriteriaEn": [
      "Target lesion confined to <= 2 hepatic segments on multiphasic CT/MRI",
      "Child-Pugh Class A (score 5-6); MELD <= 9; Platelets >= 70,000/uL",
      "Total Bilirubin <= 1.5 mg/dL; Serum Albumin >= 3.2 g/dL",
      "Pre-procedure mapping confirmed target territory coverage with zero GI shunting"
    ],
    "preOpCriteriaHi": [
      "गांठ लिवर के 1 या 2 सेगमेंट तक ही सीमित होनी चाहिए",
      "लिवर फंक्शन चाइल्ड-प्यू क्लास A (स्कोर 5-6); MELD <= 9; प्लेटलेट्स >= 70,000/uL",
      "कुल बिलीरुबिन <= 1.5 mg/dL; एल्ब्यूमिन >= 3.2 g/dL",
      "मैपिंग में लक्षित हिस्से की पुष्टि और आंतों में शून्य रिसाव"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 1 mL/kg/h for 4 hours prior and 6 hours after procedure.",
    "hydrationProtocolHi": "प्रक्रिया से 4 घंटे पहले और 6 घंटे बाद तक नॉर्मल सलाइन ड्रिप 1 mL/kg/घंटे की दर से।",
    "bloodProductsTargetEn": "Platelets >= 70,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 70,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Cefazolin 1g IV + Inj Ondansetron 8mg IV 1 hour prior.",
    "antibioticProphylaxisHi": "सेफाजोलिन 1 ग्राम + ऑनडैनसेट्रॉन 8 मिलीग्राम नस द्वारा 1 घंटा पहले।",
    "specialPrecautionsEn": [
      "Perform intra-procedural dual-phase CBCT to calculate exact target segment volume.",
      "Ensure targeted absorbed radiation dose exceeds 190-400 Gy to the perfusing segment.",
      "Strict anti-reflux microcatheter technique with slow delivery to prevent retrograde spill.",
      "PET-CT within 4 hours to verify selective segmental dose confinement."
    ],
    "specialPrecautionsHi": [
      "प्रक्रिया के दौरान सीटी द्वारा उपचारित हिस्से के सटीक आयतन की गणना।",
      "रेडिएशन खुराक 190 से 400 ग्रे के बीच रखी जाती है।",
      "कैथेटर को स्थिर रखकर अत्यंत सावधानी से दवा छोड़ना।",
      "प्रक्रिया के 4 घंटे में पीईटी-सीटी (PET-CT) द्वारा पुष्टि।"
    ]
  },
  "hepatic-rfa-expandable-needle": {
    "procedureId": "hepatic-rfa-expandable-needle",
    "procedureName": "Hepatic Radiofrequency Ablation (RFA) with Multi-Tined Needle",
    "preOpCriteriaEn": [
      "Child-Pugh Class A or well-compensated Class B; ECOG PS 0-1",
      "Platelet count >= 50,000/uL; INR <= 1.5; aPTT normal",
      "Tumor distance >= 10 mm from main biliary confluence and gastrointestinal tract",
      "NPO for 6 hours; conscious sedation or general anesthesia clearance confirmed"
    ],
    "preOpCriteriaHi": [
      "लिवर फंक्शन चाइल्ड-प्यू A या B; सामान्य शारीरिक स्थिति (ECOG 0-1)",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5; रक्त जमने की जांचें सामान्य",
      "गांठ मुख्य पित्त नली और आंतों से कम से कम 10 मिमी दूर होनी चाहिए",
      "प्रक्रिया से 6 घंटे पहले भूखा (NPO) रहना अनिवार्य"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline at 100 mL/h during and for 4 hours post-procedure.",
    "hydrationProtocolHi": "प्रक्रिया के दौरान एवं बाद में 4 घंटे तक नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL तथा INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Cefazolin 2g IV (or Inj Ceftriaxone 1g IV) 30-60 minutes before skin puncture.",
    "antibioticProphylaxisHi": "प्रक्रिया से 30-60 मिनट पूर्व सेफाजोलिन 2 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Apply four dispersive hydrogel grounding pads evenly on clean, shaved bilateral thighs.",
      "Ensure real-time impedance monitoring during RF deployment; look for impedance roll-off.",
      "Perform tract ablation during needle withdrawal (temperature > 70°C) to prevent track seeding.",
      "Immediate post-ablation contrast-enhanced CT or CEUS to verify complete margin coverage."
    ],
    "specialPrecautionsHi": [
      "दोनों जांघों पर 4 अर्थिंग पैड साफ व शेव की गई त्वचा पर ठीक से चिपकाना।",
      "मशीन पर इम्पीडेंस रोल-ऑफ की निगरानी ताकि पूरी गांठ जलने की पुष्टि हो सके।",
      "सुई निकालते समय सुई के रास्ते को गर्म करना ताकि कैंसर के कण न फैलें और खून न बहे।",
      "प्रक्रिया के तुरंत बाद सीटी स्कैन द्वारा गांठ के पूरी तरह जलने की पुष्टि।"
    ]
  },
  "hepatic-mwa-water-cooled": {
    "procedureId": "hepatic-mwa-water-cooled",
    "procedureName": "Hepatic Microwave Ablation (MWA) with Water-Cooled Antenna",
    "preOpCriteriaEn": [
      "Child-Pugh Class A; Bilirubin < 2.0 mg/dL; Albumin >= 3.0 g/dL",
      "Platelets >= 60,000/uL; INR <= 1.4; aPTT normal",
      "Oligometastatic status or controlled primary disease confirmed on PET-CT within 4 weeks",
      "Patient cleared for deep sedation or general anesthesia"
    ],
    "preOpCriteriaHi": [
      "लिवर फंक्शन चाइल्ड-प्यू क्लास A; बिलीरुबिन < 2.0 mg/dL",
      "प्लेटलेट्स >= 60,000/uL; INR <= 1.4",
      "पीईटी-सीटी पर शरीर के अन्य हिस्सों में कैंसर का नियंत्रित होना",
      "बेहोशी (Anesthesia) हेतु फिटनेस प्रमाण पत्र"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline at 100 mL/h starting 2 hours prior and continued for 4 hours post-ablation.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा प्रक्रिया से 2 घंटे पूर्व व 4 घंटे पश्चात तक।",
    "bloodProductsTargetEn": "Platelets >= 60,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 60,000/uL तथा INR 1.4 से कम रखें।",
    "antibioticProphylaxisEn": "Inj Cefuroxime 1.5g IV + Inj Metronidazole 500mg IV 1 hour prior (or Piperacillin-Tazobactam 4.5g if prior biliary instrumentation).",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले सेफ्यूरोक्साइम 1.5 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Verify continuous chilled saline circulation loop in antenna shaft prior to power delivery.",
      "Consider hydrodissection (5% Dextrose infusion) if tumor lies < 5 mm from colon, stomach, or gallbladder.",
      "Perform active track ablation at 35-45W during antenna removal.",
      "Obtain immediate post-ablation contrast CT to document >= 5 mm ablative margin."
    ],
    "specialPrecautionsHi": [
      "एंटीना में ठंडे पानी का बहाव ठीक से चालू होने की पुष्टि करना ताकि नली गर्म न हो।",
      "आंत या पित्त की थैली पास होने पर ग्लूकोज का पानी डालकर दूरी बनाना (Hydrodissection)।",
      "सुई निकालते समय रास्ते को गर्म करना ताकि खून न बहे।",
      "प्रक्रिया के तुरंत बाद सीटी स्कैन द्वारा 5 मिमी सुरक्षित घेरे की पुष्टि।"
    ]
  },
  "hepatic-cryoablation-argon-helium": {
    "procedureId": "hepatic-cryoablation-argon-helium",
    "procedureName": "Hepatic Cryoablation with Argon-Helium System",
    "preOpCriteriaEn": [
      "Platelet count >= 70,000/uL; INR <= 1.4; Fibrinogen >= 150 mg/dL",
      "Tumor diameter <= 5 cm (larger tumors carry heightened risk of post-thaw cryoshock)",
      "Adequate renal and hepatic functional reserve (Bilirubin < 2.0 mg/dL, Cr < 1.5 mg/dL)",
      "Argon and Helium gas cylinder pressures verified > 2000 psi prior to procedure"
    ],
    "preOpCriteriaHi": [
      "प्लेटलेट्स >= 70,000/uL; INR <= 1.4; फाइब्रिनोजेन सामान्य",
      "गांठ का आकार 5 सेमी से कम होना चाहिए (बड़ी गांठों में क्रायोशॉक का खतरा)",
      "लिवर और किडनी के कार्य सामान्य",
      "आर्गन और हीलियम गैस सिलेंडर का पर्याप्त दबाव जांचना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline at 150 mL/h during and 6 hours post-procedure with forced alkaline diuresis (Sodium Bicarbonate if large tumor) to prevent myoglobinuric nephropathy.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 150 mL/घंटा तथा गुर्दों की सुरक्षा हेतु आवश्यकतानुसार सोडा बाईकार्ब ड्रिप।",
    "bloodProductsTargetEn": "Platelets >= 70,000/uL; INR <= 1.4. Blood cross-matched (2 units PRBC on standby).",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 70,000/uL; 2 यूनिट ब्लड क्रॉस-मैच कराकर सुरक्षित रखना।",
    "antibioticProphylaxisEn": "Inj Cefuroxime 1.5g IV 1 hour prior to needle insertion.",
    "antibioticProphylaxisHi": "सुई डालने से 1 घंटा पहले सेफ्यूरोक्साइम 1.5 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Ensure multiple cryoprobes are spaced 1.5-2.0 cm apart to create synergized lethal ice ball.",
      "Maintain continuous real-time CT monitoring to ensure ice ball extends 5 mm beyond tumor margin.",
      "Perform tract plugging with gelatin sponge slurry during probe withdrawal to prevent hemorrhage.",
      "Monitor urine output and color for myoglobinuria post-procedure."
    ],
    "specialPrecautionsHi": [
      "सुइयों के बीच 1.5 से 2 सेमी की दूरी ताकि बर्फ का गोला एकसमान बने।",
      "सीटी स्कैन पर लगातार निगरानी ताकि बर्फ गांठ से 5 मिमी बाहर तक जाए।",
      "सुई निकालते समय खून रोकने हेतु विशेष जेल प्लग लगाना।",
      "प्रक्रिया के बाद पेशाब के रंग और मात्रा की निगरानी।"
    ]
  },
  "ire-nanoknife-pancreatic-lapc": {
    "procedureId": "ire-nanoknife-pancreatic-lapc",
    "procedureName": "IRE (NanoKnife) for Pancreatic LAPC",
    "preOpCriteriaEn": [
      "ECOG performance status 0-1; Stable disease on chemotherapy for >= 3-4 months",
      "Absence of distant metastases on staging CT and PET-CT within 3 weeks",
      "Normal baseline 12-lead ECG; QTc interval < 460 ms; No cardiac pacemaker or implantable defibrillator",
      "Platelet count >= 70,000/uL; INR <= 1.4"
    ],
    "preOpCriteriaHi": [
      "शारीरिक स्थिति अच्छी (ECOG 0-1); कम से कम 3-4 महीने की कीमोथेरेपी के बाद रोग स्थिर होना",
      "3 सप्ताह के भीतर हुए पीईटी-सीटी पर शरीर के अन्य हिस्सों में फैलाव न होना",
      "ईसीजी सामान्य, दिल में कोई पेसमेकर (Pacemaker) या मेटल उपकरण न होना",
      "प्लेटलेट्स >= 70,000/uL; INR <= 1.4"
    ],
    "fastingHours": 8,
    "hydrationProtocolEn": "IV 0.9% Normal Saline at 125 mL/h starting 4 hours pre-procedure and continuing in ICU.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 125 mL/घंटा प्रक्रिया से 4 घंटे पहले और आईसीयू में निरंतर।",
    "bloodProductsTargetEn": "Platelets >= 70,000/uL; INR <= 1.4. Cross-match 2 units PRBC.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 70,000/uL; 2 यूनिट ब्लड क्रॉस-मैच तैयार रखना।",
    "antibioticProphylaxisEn": "Inj Piperacillin-Tazobactam 4.5g IV + Inj Octreotide 100 mcg SC (prophylaxis against pancreatitis).",
    "antibioticProphylaxisHi": "पाइपेरासिलिन-टैजोबैक्टम 4.5 ग्राम तथा पैंक्रियाटाइटिस से बचाव हेतु ऑक्ट्रियोटाइड इंजेक्शन।",
    "specialPrecautionsEn": [
      "Absolute neuromuscular paralysis (train-of-four 0/4) confirmed by anesthesiologist before pulse delivery.",
      "AccuSync ECG trigger unit connected to guarantee pulses fire only during absolute cardiac refractory period.",
      "Maintain parallel probe spacing (1.5 - 2.2 cm) with active tip exposure 15-20 mm.",
      "Admit to Surgical ICU post-procedure with cardiac telemetry and continuous amylase/lipase monitoring."
    ],
    "specialPrecautionsHi": [
      "मांसपेशियों का पूर्ण शिथिलीकरण (Paralysis) होना अनिवार्य ताकि बिजली के झटके से झटके न लगें।",
      "दिल के आराम के क्षणों में ही करंट देने हेतु ईसीजी ट्रिगर यूनिट से जुड़ाव।",
      "सुइयों के बीच 1.5 से 2.2 सेमी की बिल्कुल समानांतर दूरी रखना।",
      "प्रक्रिया के बाद मरीज को कार्डियक आईसीयू (ICU) में भर्ती कर धड़कन और खून की जांचों की निगरानी।"
    ]
  },
  "ire-central-hepatic-malignancies": {
    "procedureId": "ire-central-hepatic-malignancies",
    "procedureName": "IRE for Central Hepatic Malignancies",
    "preOpCriteriaEn": [
      "ECOG 0-1; Child-Pugh Score <= 7; Bilirubin < 2.0 mg/dL",
      "Normal sinus rhythm on 12-lead ECG; baseline QTc < 460 ms",
      "Platelets >= 60,000/uL; INR <= 1.4",
      "Pre-procedure biliary drainage performed if obstructive jaundice present"
    ],
    "preOpCriteriaHi": [
      "चाइल्ड-प्यू स्कोर <= 7; बिलीरुबिन < 2.0 mg/dL",
      "ईसीजी सामान्य; दिल में कोई पेसमेकर न होना",
      "प्लेटलेट्स >= 60,000/uL; INR <= 1.4",
      "यदि पीलिया हो तो पहले पित्त की नली में ड्रेनेज होना आवश्यक"
    ],
    "fastingHours": 8,
    "hydrationProtocolEn": "IV 0.9% Normal Saline at 100 mL/h for 4 hours pre-procedure and 6 hours post-procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा प्रक्रिया से 4 घंटे पूर्व व 6 घंटे पश्चात।",
    "bloodProductsTargetEn": "Platelets >= 60,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 60,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV + Inj Metronidazole 500mg IV 1 hour prior to needle placement.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम नस द्वारा 1 घंटा पहले।",
    "specialPrecautionsEn": [
      "Continuous train-of-four monitoring (0/4) throughout pulse application.",
      "AccuSync trigger module verified with zero latency on cardiac monitor.",
      "CT reconstruction to ensure probe parallelism divergence is strictly < 1 mm.",
      "Post-procedure 24-hour cardiac telemetry monitoring in high dependency unit."
    ],
    "specialPrecautionsHi": [
      "पूरी प्रक्रिया के दौरान मरीज की मांसपेशियों का पूरी तरह शिथिल रहना।",
      "ईसीजी सिंक्रोनाइजर का शून्य देरी से काम करना।",
      "सीटी स्कैन पर सुइयों का बिल्कुल सीधा और समानांतर होना।",
      "प्रक्रिया के बाद 24 घंटे आईसीयू/एचडीयू में दिल की धड़कन की निगरानी।"
    ]
  },
  "lung-mwa-early-nsclc": {
    "procedureId": "lung-mwa-early-nsclc",
    "procedureName": "Percutaneous Lung Microwave Ablation for NSCLC",
    "preOpCriteriaEn": [
      "Biopsy-proven Stage IA/IB NSCLC (<= 4 cm) or high-suspicion FDG-avid growing nodule",
      "Pulmonary function tests reviewed: FEV1 > 0.8 L or DLCO > 35% predicted",
      "Platelet count >= 70,000/uL; INR <= 1.4",
      "CT scan demonstrates safe needle trajectory avoiding central pulmonary hilar vessels"
    ],
    "preOpCriteriaHi": [
      "बायोप्सी या पीईटी-सीटी पर शुरुआती फेफड़े के कैंसर की पुष्टि",
      "फेफड़ों की क्षमता (PFT) जांचना: FEV1 > 0.8 L",
      "प्लेटलेट्स >= 70,000/uL; INR <= 1.4",
      "सीटी स्कैन पर मुख्य नसों से हटकर सुरक्षित रास्ता होना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 75 mL/h during and 4 hours post-procedure (avoid fluid overload in COPD).",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 75 mL/घंटा (सांस के मरीजों में अत्यधिक पानी से बचाव)।",
    "bloodProductsTargetEn": "Platelets >= 70,000/uL; INR <= 1.4. Type & screen ready.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 70,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Amoxicillin-Clavulanate 1.2g IV (or Cefuroxime 1.5g IV) 1 hour prior; Inj Codeine / Tramadol for cough suppression.",
    "antibioticProphylaxisHi": "एमोक्सीसिलीन-क्लैवुलैनेट 1.2 ग्राम तथा खांसी रोकने हेतु कोडीन/ट्रामाडोल इंजेक्शन।",
    "specialPrecautionsEn": [
      "Patient must maintain quiet, shallow breathing during CT needle placement; avoid coughing.",
      "Immediate post-procedure chest CT to detect pneumothorax or parenchymal hemorrhage.",
      "Chest tube insertion kit (10-14F pigtail with Heimlich valve / underwater seal) immediately ready in suite.",
      "Follow-up upright chest X-ray at 4 hours and 24 hours post-ablation."
    ],
    "specialPrecautionsHi": [
      "सुई लगाते समय मरीज को शांति से धीमी सांस लेनी होती है, खांसना बिल्कुल मना है।",
      "प्रक्रिया के तुरंत बाद सीटी स्कैन द्वारा हवा के रिसाव की जांच।",
      "कमरे में तुरंत छाती में नली (चेस्ट ट्यूब) डालने का सामान तैयार रखना।",
      "प्रक्रिया के 4 घंटे और 24 घंटे बाद छाती का एक्स-रे।"
    ]
  },
  "lung-cryoablation-pleural-metastases": {
    "procedureId": "lung-cryoablation-pleural-metastases",
    "procedureName": "Percutaneous Lung Cryoablation for Pleural Metastases",
    "preOpCriteriaEn": [
      "Oligometastatic lung lesions (<= 3 cm) with controlled extrapulmonary disease",
      "Platelet count >= 70,000/uL; INR <= 1.4",
      "Adequate pulmonary reserve: Room air SaO2 >= 92%",
      "Argon and Helium gas tanks tested and confirmed at > 2000 psi"
    ],
    "preOpCriteriaHi": [
      "3 सेमी तक की फेफड़े की गांठें और अन्य अंगों में बीमारी नियंत्रित",
      "प्लेटलेट्स >= 70,000/uL; INR <= 1.4",
      "कमरे की हवा में ऑक्सीजन (SaO2) >= 92%",
      "आर्गन और हीलियम गैस सिलेंडर का पूरा भरा होना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 70,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 70,000/uL तथा INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Cefuroxime 1.5g IV 1 hour prior to chest puncture.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले सेफ्यूरोक्साइम 1.5 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Avoid cryoprobe movement during active freeze phase (frozen tissue is brittle; torque can cause lung laceration).",
      "Continuous CT monitoring to ensure ice ball margin extends 5 mm beyond metastasis into normal lung.",
      "Pigtail catheter kit available on sterile tray for immediate pneumothorax drainage if required.",
      "Post-procedure chest radiograph at 4 hours and 24 hours."
    ],
    "specialPrecautionsHi": [
      "बर्फ जमने के दौरान सुई को बिल्कुल न हिलाएं, हिलने पर फेफड़ा कटने का खतरा रहता है।",
      "सीटी स्कैन पर बर्फ का घेरा गांठ से 5 मिमी बाहर तक जाने की पुष्टि।",
      "छाती में हवा भरने पर तुरंत नली डालने का सामान तैयार रखना।",
      "4 घंटे और 24 घंटे बाद छाती का एक्स-रे।"
    ]
  },
  "renal-cryoablation-rcc-temperature-sensors": {
    "procedureId": "renal-cryoablation-rcc-temperature-sensors",
    "procedureName": "Renal Cryoablation for RCC with Temperature Sensors",
    "preOpCriteriaEn": [
      "Contrast-enhanced CT/MRI confirming solid renal mass <= 4 cm (cT1a)",
      "Pre-op serum creatinine and eGFR documented; baseline urinalysis normal",
      "Platelet count >= 70,000/uL; INR <= 1.4; aPTT normal",
      "Patient positioned comfortably in prone or lateral decubitus position"
    ],
    "preOpCriteriaHi": [
      "सीटी/एमआरआई पर 4 सेमी तक की गुर्दे की रसोली की पुष्टि",
      "किडनी फंक्शन (Creatinine/eGFR) की पूर्व जांच",
      "प्लेटलेट्स >= 70,000/uL; INR <= 1.4",
      "मरीज का पेट या करवट के बल लेटने में समर्थ होना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h for 4 hours pre-procedure and 6 hours post-procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा प्रक्रिया पूर्व व 6 घंटे पश्चात तक।",
    "bloodProductsTargetEn": "Platelets >= 70,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 70,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Cefazolin 2g IV (or Cefuroxime 1.5g IV) 1 hour prior to flank puncture.",
    "antibioticProphylaxisHi": "कमर में सुई लगाने से 1 घंटा पहले सेफाजोलिन 2 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Perform hydrodissection (5% Dextrose) or air dissection if colon lies < 10 mm from renal mass.",
      "Position thermocouple needle between tumor and renal collecting system / ureter (keep temp > 0°C).",
      "Maintain dual freeze cycle: 10 min freeze, 5 min thaw, 10 min freeze.",
      "Post-procedure flank CT to verify absence of active hematoma before transfer to ward."
    ],
    "specialPrecautionsHi": [
      "आंत पास होने पर ग्लूकोज का पानी डालकर दूरी बनाना (Hydrodissection)।",
      "पेशाब की नली के पास तापमान सेंसर रखना ताकि उसका तापमान शून्य से ऊपर रहे।",
      "10 मिनट जमाना, 5 मिनट पिघलाना और फिर 10 मिनट जमाना।",
      "वार्ड में भेजने से पहले सीटी स्कैन द्वारा खून के रिसाव की जांच।"
    ]
  },
  "renal-mwa-t1a-tumors": {
    "procedureId": "renal-mwa-t1a-tumors",
    "procedureName": "Renal Microwave Ablation for T1a Tumors",
    "preOpCriteriaEn": [
      "Biopsy or multiphasic CT/MRI proving T1a renal mass (<= 4 cm)",
      "Serum creatinine < 2.0 mg/dL; baseline coagulation profile normal",
      "Platelet count >= 60,000/uL; INR <= 1.4",
      "Adequate distance (> 10 mm) from renal pelvicalyceal system or retrograde pyeloperfusion planned"
    ],
    "preOpCriteriaHi": [
      "सीटी पर 4 सेमी तक की गुर्दे की गांठ की पुष्टि",
      "सीरम क्रिएटिनिन < 2.0 mg/dL",
      "प्लेटलेट्स >= 60,000/uL; INR <= 1.4",
      "पेशाब की मुख्य नली से पर्याप्त दूरी होना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h for 2 hours prior and 4 hours post-procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 60,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 60,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Cefuroxime 1.5g IV 1 hour prior to procedure.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले सेफ्यूरोक्साइम 1.5 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "If tumor is close to bowel, inject 150-300 mL 5% Dextrose (hydrodissection) to create > 10 mm safety margin.",
      "Consider cold saline retrograde ureteric perfusion via DJ stent if tumor abuts renal pelvis.",
      "Track cautery at 30W during antenna removal.",
      "Bed rest with sandbag compression over puncture site for 4 hours."
    ],
    "specialPrecautionsHi": [
      "आंत पास होने पर ग्लूकोज का पानी डालकर 10 मिमी की दूरी बनाना।",
      "पेशाब की नली बचाने हेतु आवश्यकतानुसार ठंडा सलाइन बहाना।",
      "सुई निकालते समय ट्रैक को गर्म करके सील करना।",
      "कमर पर 4 घंटे का बेड रेस्ट।"
    ]
  },
  "renal-angioinfarction-ethanol-aml": {
    "procedureId": "renal-angioinfarction-ethanol-aml",
    "procedureName": "Superselective Renal Angio-Infarction for AML",
    "preOpCriteriaEn": [
      "Contrast-enhanced CT/MRI confirming fat-containing renal AML > 4 cm or aneurysm > 5 mm",
      "Baseline serum creatinine and eGFR documented",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "Hydration confirmed adequate"
    ],
    "preOpCriteriaHi": [
      "सीटी स्कैन पर 4 सेमी से बड़ी या 5 मिमी एन्यूरिज्म वाली रसौली की पुष्टि",
      "किडनी फंक्शन टेस्ट सामान्य",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "मरीज का पर्याप्त हाइड्रेशन"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 1 mL/kg/h for 4 hours prior and 6 hours post-procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 1 mL/kg/घंटा प्रक्रिया से 4 घंटे पूर्व व 6 घंटे पश्चात।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV + Inj Ondansetron 8mg IV 1 hour prior; Inj Tramadol 50-100mg IV for post-infarction pain.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम + ऑनडैनसेट्रॉन 8 मिलीग्राम तथा दर्द निवारक ट्रामाडोल इंजेक्शन।",
    "specialPrecautionsEn": [
      "Use microcatheter exclusively with gentle non-reflux hand injections of absolute ethanol (1:1 Lipiodol mix).",
      "Wait 2 minutes after ethanol injection before flushing to prevent wash-out into main renal artery.",
      "Perform completion angiogram verifying preservation of all normal renal interlobar branches.",
      "Bed rest for 6 hours with groin compression."
    ],
    "specialPrecautionsHi": [
      "माइक्रो-कैथेटर द्वारा अत्यंत सावधानी से दवा छोड़ना ताकि मुख्य नस में न जाए।",
      "दवा छोड़ने के बाद 2 मिनट इंतजार करना ताकि दवा अपनी जगह जम जाए।",
      "प्रक्रिया के अंत में स्वस्थ गुर्दे की नसों के खुले होने की पुष्टि।",
      "जांघ पर पट्टी और 6 घंटे का बेड रेस्ट।"
    ]
  },
  "total-renal-arterial-embolization": {
    "procedureId": "total-renal-arterial-embolization",
    "procedureName": "Total Renal Arterial Embolization",
    "preOpCriteriaEn": [
      "Confirmation of unresectable RCC with massive hematuria or planned nephrectomy",
      "Contralateral kidney function assessed and verified adequate (if not on hemodialysis)",
      "Coagulation profile reviewed: Platelets >= 50,000/uL; INR <= 1.5",
      "Adequate blood cross-matched (2-4 units PRBC on standby)"
    ],
    "preOpCriteriaHi": [
      "पेशाब में अत्यधिक खून बहने की पुष्टि",
      "दूसरे गुर्दे की कार्यक्षमता सामान्य होना (यदि डायलिसिस पर न हो)",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "2 से 4 यूनिट ब्लड क्रॉस-मैच तैयार रखना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h (if not anuric on hemodialysis).",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5; Transfuse PRBC to maintain Hb >= 8.0 g/dL.",
    "bloodProductsTargetHi": "हीमोग्लोबिन 8 से अधिक रखने हेतु रक्त चढ़ाना; प्लेटलेट्स 50,000 से अधिक।",
    "antibioticProphylaxisEn": "Inj Cefoperazone-Sulbactam 1.5g IV + Inj Tramadol 100mg IV + Inj Paracetamol 1g IV.",
    "antibioticProphylaxisHi": "सेफोपेराजोन-सलबैक्टम 1.5 ग्राम तथा तेज दर्द निवारक दवाइयां नस द्वारा।",
    "specialPrecautionsEn": [
      "Verify contralateral renal function on contrast CT/renogram.",
      "Position balloon occlusion catheter or high-torque 5F sheath to prevent embolic reflux into aorta.",
      "Pack main renal artery trunk tightly with fibered coils or Amplatzer vascular plug.",
      "Anticipate post-infarction syndrome: establish scheduled IV opioids and antiemetics for 72 hours."
    ],
    "specialPrecautionsHi": [
      "दूसरे गुर्दे के सही काम करने की पक्की जांच।",
      "दवा या छल्ले को महाधमनी में जाने से रोकने हेतु विशेष सावधानी।",
      "गुर्दे की नस को छल्लों से पूरी तरह कसकर बंद करना।",
      "प्रक्रिया के बाद 72 घंटे तक तेज दर्द निवारक दवाइयों का नियमित प्रबंध।"
    ]
  },
  "adrenal-mwa-recurrent-metastases": {
    "procedureId": "adrenal-mwa-recurrent-metastases",
    "procedureName": "Adrenal Microwave Ablation",
    "preOpCriteriaEn": [
      "Biochemical exclusion of functional pheochromocytoma (normal plasma/urinary metanephrines)",
      "Pre-treatment alpha-blockade (Prazosin/Phenoxybenzamine) if baseline borderline hypertension",
      "Platelet count >= 70,000/uL; INR <= 1.4",
      "Invasive arterial BP line and rapid vasodilators (Sodium Nitroprusside/Labetalol) ready at bedside"
    ],
    "preOpCriteriaHi": [
      "फियोक्रोमोसाइटोमा (Pheochromocytoma) की खून व पेशाब जांच द्वारा अनुपस्थिति की पुष्टि",
      "ब्लड प्रेशर नियंत्रित रखने हेतु पहले से अल्फा-ब्लॉकर गोलियां शुरू करना",
      "प्लेटलेट्स >= 70,000/uL; INR <= 1.4",
      "ब्लड प्रेशर तुरंत कम करने वाले इंजेक्शन (नाइट्रोप्रुसाइड/लैबेटालोल) तैयार रखना"
    ],
    "fastingHours": 8,
    "hydrationProtocolEn": "IV 0.9% Normal Saline at 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 70,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 70,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Cefuroxime 1.5g IV 1 hour prior to puncture.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले सेफ्यूरोक्साइम 1.5 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Perform hydrodissection with 150-300 mL 5% Dextrose to separate tumor from IVC (right) or spleen/colon (left).",
      "Continuous beat-to-beat arterial line monitoring during microwave power cycles.",
      "Administer IV Hydrocortisone 100mg if bilateral adrenal tissue is compromised.",
      "Post-procedure chest/abdominal CT to confirm absence of pneumothorax or retroperitoneal bleeding."
    ],
    "specialPrecautionsHi": [
      "ग्लूकोज का पानी डालकर मुख्य नसों व आंतों से सुरक्षित दूरी बनाना।",
      "हीटिंग के दौरान प्रति सेकंड ब्लड प्रेशर की निरंतर निगरानी।",
      "हॉर्मोन की कमी से बचाव हेतु हाइड्रोकार्टिसोन इंजेक्शन की व्यवस्था।",
      "प्रक्रिया पश्चात सीटी स्कैन द्वारा जांच।"
    ]
  },
  "adrenal-vein-sampling-acth": {
    "procedureId": "adrenal-vein-sampling-acth",
    "procedureName": "Adrenal Vein Sampling (AVS) with ACTH Stimulation",
    "preOpCriteriaEn": [
      "Hypokalemia corrected: Serum Potassium maintained >= 3.5 - 4.0 mEq/L prior to sampling",
      "Spironolactone / Eplerenone withheld for >= 6 weeks; ACEi/ARBs/Beta-blockers switched to Alpha-blockers/CCB",
      "Cosyntropin (synthetic ACTH 50 ug/h infusion or 250 ug bolus) protocol finalized",
      "Platelet count >= 50,000/uL; INR <= 1.5"
    ],
    "preOpCriteriaHi": [
      "पोटेशियम की कमी पूरी की गई हो (पोटेशियम >= 3.5-4.0 mEq/L)",
      "स्पाइरोनोलैक्टोन की गोली 6 हफ्ते पहले बंद की गई हो",
      "सिंथेटिक एसीटीएच (ACTH) इंजेक्शन की व्यवस्था",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 75 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 75 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL तथा INR 1.5 से कम।",
    "antibioticProphylaxisEn": "None routinely indicated for diagnostic venous catheterization unless prolonged.",
    "antibioticProphylaxisHi": "रूटीन में एंटीबायोटिक की आवश्यकता नहीं होती।",
    "specialPrecautionsEn": [
      "Bilateral simultaneous femoral venous access preferred to avoid temporal hormonal fluctuation.",
      "Perform rapid intra-procedural cortisol assay (if available) to verify right adrenal cannulation (selectivity index > 3-5).",
      "Gentle hand contrast test injections only; power injection strictly prohibited in adrenal veins.",
      "Bed rest with groin compression for 3-4 hours post-sampling."
    ],
    "specialPrecautionsHi": [
      "दोनों जांघों से एक साथ खून के नमूने लेना ताकि समय के अंतर से हॉर्मोन न बदले।",
      "दाहिनी नस में कैथेटर सही होने की तुरंत पुष्टि।",
      "एड्रीनल नस में डाई केवल हाथ से अत्यंत धीरे छोड़ना, मशीन द्वारा डाई छोड़ना सख्त मना है।",
      "प्रक्रिया के बाद जांघ पर 3-4 घंटे का बेड रेस्ट।"
    ]
  },
  "osteoid-osteoma-ct-guided-rfa": {
    "procedureId": "osteoid-osteoma-ct-guided-rfa",
    "procedureName": "CT-Guided RFA for Osteoid Osteoma",
    "preOpCriteriaEn": [
      "Thin-slice CT or MRI demonstrating characteristic radiolucent nidus (<= 1.5 cm) with surrounding cortical sclerosis",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "General or spinal anesthesia clearance confirmed",
      "Critical distance (> 10 mm) confirmed from major motor nerves or spinal cord"
    ],
    "preOpCriteriaHi": [
      "सीटी स्कैन पर 1.5 सेमी से छोटे स्पष्ट निडस (Nidus) की पुष्टि",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "एनेस्थीसिया (बेहोशी) हेतु फिटनेस प्रमाण पत्र",
      "मुख्य नसों और रीढ़ की हड्डी से 10 मिमी से अधिक दूरी"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline at 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Cefazolin 2g IV 30-60 minutes before bone drill puncture.",
    "antibioticProphylaxisHi": "हड्डी में ड्रिल करने से 1 घंटा पहले सेफाजोलिन 2 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Grounding pads applied securely to thighs.",
      "Maintain electrode tip temperature at 90°C strictly for 4 to 6 minutes.",
      "Instill cold saline on skin incision to avoid skin contact thermal injury.",
      "Non-weight bearing or partial weight bearing for 7-14 days if lesion in femoral neck/shaft."
    ],
    "specialPrecautionsHi": [
      "जांघों पर अर्थिंग पैड ठीक से लगाना।",
      "सुई की नोक का तापमान 90 डिग्री पर 4 से 6 मिनट बनाए रखना।",
      "त्वचा को जलने से बचाने हेतु ठंडा पानी डालना।",
      "जांघ की हड्डी की गांठ होने पर 1-2 हफ्ते तक पैर पर पूरा वजन न डालना।"
    ]
  },
  "cryo-cementoplasty-osseous-metastases": {
    "procedureId": "cryo-cementoplasty-osseous-metastases",
    "procedureName": "Cryo-Cementoplasty for Osseous Metastases",
    "preOpCriteriaEn": [
      "Osteolytic lesion with intact or partially breached cortex evaluated on multiplanar CT",
      "Platelet count >= 70,000/uL; INR <= 1.4",
      "Pre-op analgesic requirements and baseline ambulation score recorded",
      "PMMA cement with barium opacifier and high-pressure cement injection gun verified"
    ],
    "preOpCriteriaHi": [
      "सीटी स्कैन पर हड्डी की कमजोरी और गांठ की सटीक जांच",
      "प्लेटलेट्स >= 70,000/uL; INR <= 1.4",
      "मरीज के दर्द और चलने-फिरने की क्षमता का पूर्व मूल्यांकन",
      "विशेष मेडिकल बोन सीमेंट और सीमेंट गन तैयार रखना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during and 4 hours post-procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 70,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 70,000/uL तथा INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Cefazolin 2g IV (or Teicoplanin 400mg IV) 1 hour prior to bone entry.",
    "antibioticProphylaxisHi": "हड्डी में प्रवेश से 1 घंटा पहले सेफाजोलिन 2 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Perform complete cryoablation cycle (dual freeze-thaw) prior to cement introduction.",
      "Ensure bone cavity is dry and probe tracks coagulated/thawed before cement injection.",
      "Inject PMMA cement under continuous real-time CT fluoroscopy; stop immediately if cortical breach leak seen.",
      "Bed rest for 2 hours while cement fully polymerizes; gradual ambulation."
    ],
    "specialPrecautionsHi": [
      "सीमेंट भरने से पहले बर्फ जमाने की पूरी प्रक्रिया समाप्त करना।",
      "सीटी स्कैन पर लगातार देखते हुए अत्यंत धीरे-धीरे टूथपेस्ट जैसी गाढ़ी सीमेंट भरना।",
      "सीमेंट बाहर निकलते ही तुरंत इंजेक्शन रोकना।",
      "सीमेंट पूरी तरह सूखने तक 2 घंटे का बेड रेस्ट।"
    ]
  },
  "vertebroplasty-kyphoplasty-neoplastic-collapse": {
    "procedureId": "vertebroplasty-kyphoplasty-neoplastic-collapse",
    "procedureName": "Percutaneous Vertebroplasty / Balloon Kyphoplasty",
    "preOpCriteriaEn": [
      "MRI Spine confirming acute marrow edema on STIR sequences matching clinical pain level",
      "Intact posterior vertebral wall verified on CT (no retropulsed bone fragment into canal)",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "Absence of active systemic bacteremia or discitis"
    ],
    "preOpCriteriaHi": [
      "एमआरआई पर मनके के ताजे फ्रैक्चर और सूजन (Edema) की पुष्टि",
      "सीटी स्कैन पर मनके की पिछली दीवार का साबुत होना",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "रीढ़ में कोई इन्फेक्शन या मवाद न होना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 75 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 75 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Cefazolin 2g IV 30-60 minutes prior to skin incision.",
    "antibioticProphylaxisHi": "प्रक्रिया से 30-60 मिनट पहले सेफाजोलिन 2 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Mix PMMA cement to viscous doughy toothpaste consistency before injection.",
      "Inject cement strictly under continuous biplane fluoroscopic monitoring.",
      "Halt cement delivery immediately upon any sign of posterior venous plexus filling or cortical leak.",
      "Patient remains supine flat for 1 hour post-procedure, followed by assisted mobilization."
    ],
    "specialPrecautionsHi": [
      "सीमेंट को टूथपेस्ट जैसा गाढ़ा होने पर ही मनके में भरना।",
      "एक्स-रे पर लगातार देखते हुए 1-1 बूंद सीमेंट भरना।",
      "पीछे की तरफ सीमेंट जाते ही तुरंत इंजेक्शन रोक देना।",
      "प्रक्रिया के बाद 1 घंटा सीधा लेटना, फिर धीरे-धीरे उठकर चलना।"
    ]
  },
  "debiri-colorectal-liver-metastases": {
    "procedureId": "debiri-colorectal-liver-metastases",
    "procedureName": "DEBIRI for Colorectal Liver Metastases",
    "preOpCriteriaEn": [
      "Biopsy-proven colorectal liver metastases; failed at least 1-2 systemic lines",
      "Liver-dominant disease (extrahepatic metastases minimal or stable)",
      "Bilirubin < 2.0 mg/dL; Albumin >= 3.0 g/dL; ECOG PS 0-1",
      "Platelet count >= 70,000/uL; INR <= 1.4"
    ],
    "preOpCriteriaHi": [
      "बायोप्सी द्वारा प्रमाणित बड़ी आंत के लिवर कैंसर का फैलाव",
      "बीमारी मुख्य रूप से लिवर तक ही सीमित होना",
      "बिलीरुबिन < 2.0 mg/dL; एल्ब्यूमिन >= 3.0 g/dL",
      "प्लेटलेट्स >= 70,000/uL; INR <= 1.4"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 1 mL/kg/h for 4 hours pre-procedure and 6 hours post-procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 1 mL/kg/घंटा प्रक्रिया पूर्व व पश्चात।",
    "bloodProductsTargetEn": "Platelets >= 70,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 70,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV + Inj Ondansetron 8mg IV + Inj Dexamethasone 8mg IV + Inj Atropine 0.6mg SC (to prevent cholinergic cramps).",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम + ऑनडैनसेट्रॉन 8 मिलीग्राम + पेट दर्द व मरोड़ से बचाव हेतु एट्रोपिन इंजेक्शन।",
    "specialPrecautionsEn": [
      "Pre-load 100 mg Irinotecan onto DC Bead/LifePearl 2 hours before delivery.",
      "Pre-medicate with high-dose intra-arterial lidocaine (50-100 mg) immediately prior to bead delivery to mitigate pain.",
      "Deliver beads extremely slowly over 15-20 minutes.",
      "Strict 6-hour bed rest post-procedure with puncture compression."
    ],
    "specialPrecautionsHi": [
      "इरीनोटीकेन दवा को मनकों में 2 घंटे पहले लोड करना।",
      "दर्द रोकने हेतु नस में दवा छोड़ने से पहले सुन्न करने की दवा (लिडोकेन) देना।",
      "मनकों को 15-20 मिनट तक अत्यंत धीरे-धीरे छोड़ना।",
      "जांघ पर पट्टी और 6 घंटे का बेड रेस्ट।"
    ]
  },
  "haic-port-catheter-implantation": {
    "procedureId": "haic-port-catheter-implantation",
    "procedureName": "HAIC Port-Catheter Implantation",
    "preOpCriteriaEn": [
      "Child-Pugh Class A or B (<= 8 points); ECOG PS 0-2",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "Absence of severe extrahepatic disease precluding liver-directed therapy",
      "CT angiography mapping of celiac axis and variant hepatic anatomy"
    ],
    "preOpCriteriaHi": [
      "लिवर फंक्शन चाइल्ड-प्यू A या B (स्कोर <= 8)",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "लिवर के बाहर गंभीर बीमारी न होना",
      "सीटी एंजियोग्राफी द्वारा लिवर की नसों की बनावट की जांच"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Cefazolin 2g IV 30-60 minutes before skin cut for port pocket.",
    "antibioticProphylaxisHi": "पोर्ट की पॉकेट बनाने से 1 घंटा पहले सेफाजोलिन 2 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Prophylactically coil-embolize gastroduodenal artery (GDA) and right gastric artery to prevent GI ulceration.",
      "Fix catheter tip securely using microcoils or side-hole anchoring techniques.",
      "Flush port with heparinized saline (100 IU/mL) following implantation.",
      "Perform completion DSA or test methylene blue/contrast injection to confirm exclusive hepatic perfusion."
    ],
    "specialPrecautionsHi": [
      "आमाशय की नसों को छल्लों से बंद करना ताकि कीमोथेरेपी आंतों में न जाए।",
      "कैथेटर की नोक को मजबूती से स्थिर करना।",
      "पोर्ट में हेपारिन सलाइन भरकर सील करना ताकि खून न जमे।",
      "एक्स-रे पर डाई डालकर पुष्टि करना कि दवा केवल लिवर में ही जा रही है।"
    ]
  },
  "tace-neuroendocrine-liver-metastases": {
    "procedureId": "tace-neuroendocrine-liver-metastases",
    "procedureName": "TACE for Neuroendocrine Liver Metastases",
    "preOpCriteriaEn": [
      "Biopsy or Gallium-68 DOTANOC/DOTATATE PET-CT proving well/moderately differentiated NET metastases",
      "Hepatic tumor burden assessed (< 50-70% total liver involvement preferred)",
      "Platelet count >= 50,000/uL; INR <= 1.5; Bilirubin < 2.0 mg/dL",
      "Continuous Octreotide IV infusion running prior to arterial puncture"
    ],
    "preOpCriteriaHi": [
      "डोटाटॉक पीईटी-सीटी या बायोप्सी द्वारा न्यूरोएंडोक्राइन ट्यूमर की पुष्टि",
      "लिवर में बीमारी 50-70% से कम हिस्से में होना",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "कार्सिनॉइड क्राइसिस से बचाव हेतु ऑक्ट्रियोटाइड ड्रिप चालू होना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 1 mL/kg/h for 4 hours pre-procedure and 6 hours post-procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 1 mL/kg/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV + Inj Metronidazole 500mg IV 1 hour prior (or Piperacillin-Tazobactam 4.5g if prior bilio-enteric bypass).",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Continuous IV Octreotide infusion (50-100 mcg/h) initiated 2 hours prior and maintained throughout to prevent carcinoid crisis.",
      "Have IV Octreotide boluses (100-500 mcg) immediately ready on sterile tray for sudden hemodynamic collapse.",
      "Staged lobar treatment recommended if bilobar disease to avoid acute liver failure.",
      "Monitor blood pressure continuously every 5 minutes."
    ],
    "specialPrecautionsHi": [
      "प्रक्रिया के 2 घंटे पहले से ऑक्ट्रियोटाइड ड्रिप चालू रखना ताकि ब्लड प्रेशर अचानक न गिरे।",
      "आपातकाल हेतु अतिरिक्त ऑक्ट्रियोटाइड इंजेक्शन तैयार रखना।",
      "यदि दोनों तरफ गांठें हों तो एक बार में एक ही तरफ का इलाज करना सुरक्षित रहता है।",
      "लगातार ब्लड प्रेशर की निगरानी।"
    ]
  },
  "tae-bland-embolization-net-metastases": {
    "procedureId": "tae-bland-embolization-net-metastases",
    "procedureName": "TAE for Neuroendocrine Liver Metastases",
    "preOpCriteriaEn": [
      "Biopsy or Somatostatin receptor imaging confirmed NET metastases",
      "Bilirubin < 2.0 mg/dL; Albumin >= 3.0 g/dL; Platelets >= 50,000/uL",
      "Main portal vein patent on Doppler ultrasound or contrast CT",
      "Octreotide infusion initiated pre-procedure"
    ],
    "preOpCriteriaHi": [
      "जांचों द्वारा न्यूरोएंडोक्राइन कैंसर की पुष्टि",
      "बिलीरुबिन < 2.0 mg/dL; एल्ब्यूमिन >= 3.0 g/dL; प्लेटलेट्स >= 50,000/uL",
      "लिवर की मुख्य पोर्टल नस खुली होना",
      "ऑक्ट्रियोटाइड ड्रिप पहले से चालू होना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 1 mL/kg/h for 4 hours pre-procedure and 6 hours post-procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 1 mL/kg/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV + Inj Metronidazole 500mg IV 1 hour prior.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Continuous Octreotide IV infusion running to avert carcinoid crisis.",
      "Administer calibrated 100-300 um particles slowly until near-stasis (clearing within 5 cardiac cycles).",
      "Never perform total whole-liver embolization in a single setting; treat lobar or segmental.",
      "Bed rest with puncture site compression for 6 hours."
    ],
    "specialPrecautionsHi": [
      "कार्सिनॉइड क्राइसिस से बचाव हेतु ऑक्ट्रियोटाइड ड्रिप निरंतर चालू रखना।",
      "सूक्ष्म मनकों को अत्यंत धीरे-धीरे छोड़ना।",
      "एक बार में पूरे लिवर का नहीं, केवल एक हिस्से का ही इलाज करना।",
      "जांघ पर पट्टी और 6 घंटे का बेड रेस्ट।"
    ]
  },
  "sarcoma-palliative-tace-cryoablation": {
    "procedureId": "sarcoma-palliative-tace-cryoablation",
    "procedureName": "Sarcoma Palliative TACE and Cryoablation",
    "preOpCriteriaEn": [
      "Histologically confirmed soft tissue sarcoma unsuitable for curative wide surgical margins",
      "Platelet count >= 70,000/uL; INR <= 1.4",
      "Distance from major motor nerves documented on MRI",
      "Echocardiogram completed (LVEF >= 50% for Doxorubicin TACE)"
    ],
    "preOpCriteriaHi": [
      "बायोप्सी द्वारा सारकोमा कैंसर की पुष्टि",
      "प्लेटलेट्स >= 70,000/uL; INR <= 1.4",
      "एमआरआई पर मुख्य नसों से दूरी की जांच",
      "हृदय की 2D इको जांच (LVEF >= 50%)"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 150 mL/h with Sodium Bicarbonate diuresis for 6 hours post-cryoablation.",
    "hydrationProtocolHi": "नॉर्मल सलाइन व सोडा बाईकार्ब ड्रिप 150 mL/घंटा गुर्दों की सुरक्षा हेतु।",
    "bloodProductsTargetEn": "Platelets >= 70,000/uL; INR <= 1.4. PRBC cross-matched.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 70,000/uL; खून क्रॉस-मैच तैयार।",
    "antibioticProphylaxisEn": "Inj Piperacillin-Tazobactam 4.5g IV (or Cefazolin 2g IV) 1 hour prior to procedure.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले पाइपरासिलिन-टैजोबैक्टम 4.5 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Embolize feeding arteries first to devascularize tumor and prevent bleeding during probe insertion.",
      "Apply warm saline packs / barrier gel on skin overlying superficial cryoprobes to avoid skin frostbite.",
      "Continuously monitor motor nerve stimulation if probes are placed < 1.5 cm from major nerve trunks.",
      "Check urine output and post-procedure serum CPK / myoglobin levels."
    ],
    "specialPrecautionsHi": [
      "पहले नसों को बंद करना ताकि सुई डालते समय खून न बहे।",
      "त्वचा को बर्फ से जलने से बचाने हेतु गर्म पानी की सिकाई या जेल लगाना।",
      "मुख्य नसों के पास सुई होने पर पैर/हाथ की गति की लगातार जांच।",
      "प्रक्रिया के बाद पेशाब की मात्रा और मांसपेशियों के एंजाइम की जांच।"
    ]
  },
  "thyroid-mwa-benign-nodules": {
    "procedureId": "thyroid-mwa-benign-nodules",
    "procedureName": "Thyroid Microwave Ablation for Benign Nodules",
    "preOpCriteriaEn": [
      "Two separate ultrasound-guided FNACs or Core Biopsies confirming benign pathology (Bethesda Category II)",
      "Normal baseline thyroid function tests (Free T3, Free T4, TSH)",
      "Platelet count >= 70,000/uL; INR <= 1.3",
      "Pre-procedure vocal cord mobility documented by indirect laryngoscopy"
    ],
    "preOpCriteriaHi": [
      "कम से कम दो बार बायोप्सी (FNAC) द्वारा गांठ के गैर-कैंसर (Benign) होने की पुष्टि",
      "थायरॉयड हॉर्मोन टेस्ट (T3, T4, TSH) सामान्य",
      "प्लेटलेट्स >= 70,000/uL; INR <= 1.3",
      "गले के डॉक्टर द्वारा वोकल कॉर्ड (आवाज के तारों) की सामान्य जांच"
    ],
    "fastingHours": 4,
    "hydrationProtocolEn": "Oral clear fluids allowed up to 2 hours pre-procedure.",
    "hydrationProtocolHi": "प्रक्रिया से 2 घंटे पहले तक पानी पिया जा सकता है।",
    "bloodProductsTargetEn": "Platelets >= 70,000/uL; INR <= 1.3.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 70,000/uL और INR 1.3 से कम।",
    "antibioticProphylaxisEn": "Oral Amoxicillin-Clavulanate 625mg or Inj Cefazolin 1g IV 1 hour prior (optional).",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले एक एंटीबायोटिक गोली या इंजेक्शन।",
    "specialPrecautionsEn": [
      "Hydrodissection: Inject 10-30 mL 5% Dextrose into danger triangle (tracheoesophageal groove) to insulate recurrent laryngeal nerve.",
      "Continuous voice monitoring: Patient asked to speak / count numbers during active power delivery.",
      "Stop power immediately if voice changes, pitch alters, or significant cough triggered.",
      "Apply ice pack over neck puncture site for 30-60 minutes post-procedure."
    ],
    "specialPrecautionsHi": [
      "आवाज की नस को गर्मी से बचाने हेतु ग्लूकोज का पानी डालकर सुरक्षित घेरा बनाना (Hydrodissection)।",
      "हीटिंग के दौरान मरीज से लगातार बात करना या गिनती बुलवाना ताकि आवाज की तुरंत जांच होती रहे।",
      "आवाज में जरा सा भी बदलाव आते ही तुरंत हीटिंग रोक देना।",
      "प्रक्रिया के बाद गर्दन पर 30-60 मिनट तक बर्फ की सिकाई।"
    ]
  },
  "pei-cystic-thyroid-lymph-nodes": {
    "procedureId": "pei-cystic-thyroid-lymph-nodes",
    "procedureName": "Percutaneous Ethanol Ablation (PEI)",
    "preOpCriteriaEn": [
      "Ultrasound confirmed thyroid cyst or recurrent nodal metastasis; cytology confirmed benign cyst or papillary recurrence",
      "Platelet count >= 50,000/uL; INR <= 1.4",
      "Normal baseline vocal cord function",
      "Sterile ampoule of 99.5% absolute dehydrated ethanol available"
    ],
    "preOpCriteriaHi": [
      "सोनोग्राफी और बायोप्सी द्वारा पानी की गांठ की पुष्टि",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.4",
      "आवाज के तार सामान्य होना",
      "शुद्ध एब्सोल्यूट अल्कोहल का उपलब्ध होना"
    ],
    "fastingHours": 2,
    "hydrationProtocolEn": "Oral hydration allowed.",
    "hydrationProtocolHi": "पानी पीने की अनुमति है।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "None routinely required under strict sterile skin preparation.",
    "antibioticProphylaxisHi": "एंटीबायोटिक की आवश्यकता नहीं होती।",
    "specialPrecautionsEn": [
      "Aspirate internal cyst fluid as completely as possible before ethanol instillation.",
      "Instill ethanol volume equal to 50-70% of aspirated fluid volume (maximum 5-10 mL per session).",
      "Retain needle tip strictly within cyst under continuous real-time ultrasound to prevent extracapsular extravasation.",
      "Apply local pressure over puncture site for 10-15 minutes post-procedure."
    ],
    "specialPrecautionsHi": [
      "दवा डालने से पहले गांठ का पूरा पानी बाहर निकालना।",
      "निकाले गए पानी के 50-70% के बराबर ही अल्कोहल डालना।",
      "सुई को गांठ के बिल्कुल अंदर रखना ताकि दवा बाहर न रिसे।",
      "प्रक्रिया के बाद गर्दन पर 10-15 मिनट हाथ से दबाव रखना।"
    ]
  },
  "pelvic-rfa-hydrodissection-air": {
    "procedureId": "pelvic-rfa-hydrodissection-air",
    "procedureName": "Pelvic RFA with Hydrodissection",
    "preOpCriteriaEn": [
      "Pre-procedure pelvic MRI confirming recurrent mass location and distance to bowel/sacrum",
      "Retrograde ureteric double-J (DJ) stenting performed if mass abuts ureter (< 5 mm)",
      "Platelet count >= 60,000/uL; INR <= 1.4",
      "Bowel preparation (polyethylene glycol clear liquid diet) completed 24 hours prior"
    ],
    "preOpCriteriaHi": [
      "एमआरआई पर गांठ की स्थिति और आंतों से दूरी की पक्की जांच",
      "पेशाब की नली पास होने पर पहले से डीजे स्टेंट (DJ Stent) डाला होना",
      "प्लेटलेट्स >= 60,000/uL; INR <= 1.4",
      "पेट साफ करने हेतु एक दिन पहले दवा लेना (Bowel Prep)"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 60,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 60,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV + Inj Metronidazole 500mg IV 1 hour prior to pelvic puncture.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Use 5% Dextrose exclusively for hydrodissection (Normal saline conducts electrical current and will spread thermal damage).",
      "Maintain continuous infusion during RF heating to replenish fluid barrier as it absorbs.",
      "Perform tract ablation during needle withdrawal.",
      "Post-procedure pelvic CT to document complete tumor coverage and exclude hematoma."
    ],
    "specialPrecautionsHi": [
      "दूरी बनाने हेतु केवल 5% ग्लूकोज का पानी इस्तेमाल करना (सलाइन बिजली का संवाहक होता है जिससे नुकसान हो सकता है)।",
      "हीटिंग के दौरान पानी की परत को लगातार बनाए रखना।",
      "सुई निकालते समय रास्ते को गर्म करना।",
      "प्रक्रिया के बाद सीटी स्कैन द्वारा पूर्ण सुरक्षा की पुष्टि।"
    ]
  },
  "thermal-ablation-retroperitoneal-lymphadenopathy": {
    "procedureId": "thermal-ablation-retroperitoneal-lymphadenopathy",
    "procedureName": "Thermal Ablation of Retroperitoneal Lymphadenopathy",
    "preOpCriteriaEn": [
      "Contrast CT/MRI documenting bulky retroperitoneal adenopathy causing neural impingement",
      "DJ stent placed if adenopathy causes ureteral hydronephrosis",
      "Platelet count >= 70,000/uL; INR <= 1.4",
      "Clearance for general anesthesia or deep sedation"
    ],
    "preOpCriteriaHi": [
      "सीटी/एमआरआई पर नसों को दबाने वाली गांठों की पुष्टि",
      "पेशाब की नली पर दबाव होने पर डीजे स्टेंट (DJ Stent) डाला होना",
      "प्लेटलेट्स >= 70,000/uL; INR <= 1.4",
      "बेहोशी हेतु फिटनेस प्रमाण पत्र"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 70,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 70,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV + Inj Metronidazole 500mg IV 1 hour prior.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Vigorous hydrodissection with 5% Dextrose to maintain > 10 mm barrier from duodenum, IVC, and aorta.",
      "Consider motor evoked potential (MEP) monitoring if lesion borders the psoas and lumbar plexus.",
      "Tract ablation performed during antenna withdrawal.",
      "Post-procedure abdominal CT before extubation to exclude retroperitoneal hematoma."
    ],
    "specialPrecautionsHi": [
      "महाधमनी और आंतों से 10 मिमी की सुरक्षित दूरी बनाने हेतु ग्लूकोज का पानी डालना।",
      "पैरों की नसों की सक्रियता की लगातार निगरानी।",
      "सुई निकालते समय ट्रैक को सील करना।",
      "प्रक्रिया के तुरंत बाद सीटी स्कैन द्वारा आंतरिक रक्तस्राव की जांच।"
    ]
  },
  "chest-wall-desmoid-mwa": {
    "procedureId": "chest-wall-desmoid-mwa",
    "procedureName": "Chest Wall Desmoid Microwave Ablation",
    "preOpCriteriaEn": [
      "Core biopsy confirmed desmoid-type fibromatosis with beta-catenin nuclear positivity",
      "MRI chest wall documenting depth of invasion, pleural contact, and muscle involvement",
      "Platelet count >= 70,000/uL; INR <= 1.4",
      "Clearance for conscious sedation or general anesthesia"
    ],
    "preOpCriteriaHi": [
      "बायोप्सी द्वारा डेस्मॉइड ट्यूमर की पक्की पुष्टि",
      "एमआरआई पर पसलियों और फेफड़े के पर्दे से जुड़ाव की जांच",
      "प्लेटलेट्स >= 70,000/uL; INR <= 1.4",
      "बेहोशी हेतु फिटनेस प्रमाण पत्र"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 75 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 75 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 70,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 70,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Cefazolin 2g IV 1 hour prior to procedure.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले सेफाजोलिन 2 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Perform extensive hydrodissection with 5% Dextrose between tumor and pleura to prevent thermal pneumothorax.",
      "Apply cold saline wet gauze / ice barrier over skin to prevent cutaneous thermal burns.",
      "Titrate power carefully (30-50W) given dense collagenous desmoid tissue matrix.",
      "Post-procedure chest X-ray at 4 hours to rule out pneumothorax."
    ],
    "specialPrecautionsHi": [
      "फेफड़े के पर्दे को बचाने हेतु ग्लूकोज का पानी डालकर सुरक्षित दूरी बनाना।",
      "त्वचा को जलने से बचाने हेतु ऊपर ठंडी पट्टी या बर्फ लगाना।",
      "शक्ति को नियंत्रित (30-50W) रखना।",
      "प्रक्रिया के 4 घंटे बाद छाती का एक्स-रे।"
    ]
  },
  "fiducial-marker-placement-sbrt": {
    "procedureId": "fiducial-marker-placement-sbrt",
    "procedureName": "Percutaneous Fiducial Marker Placement for SBRT",
    "preOpCriteriaEn": [
      "SBRT radiation oncologist prescription confirmed (number and geometry of gold seeds verified)",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "Pre-loaded sterile gold fiducial marker needle kits (0.8 x 3-5 mm) available",
      "Simulation CT scheduled 3-7 days post-placement (to allow tissue settlement)"
    ],
    "preOpCriteriaHi": [
      "रेडिएशन ऑन्कोलॉजिस्ट द्वारा सोने के दानों की संख्या का निर्धारण",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "सोने के दानों वाली विशेष सुइयों की उपलब्धता",
      "दाने लगाने के 3-7 दिन बाद रेडिएशन प्लानिंग सीटी का निर्धारण"
    ],
    "fastingHours": 4,
    "hydrationProtocolEn": "Routine oral or IV hydration.",
    "hydrationProtocolHi": "सामान्य पानी या ड्रिप।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Cefazolin 1g IV 1 hour prior (or oral Amoxicillin-Clavulanate).",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले एक एंटीबायोटिक खुराक।",
    "specialPrecautionsEn": [
      "Deploy minimum 3 fiducials in non-collinear configuration with >= 15-20 mm separation for 3D rotation tracking.",
      "Ensure markers are seated within or within 5 mm of tumor periphery without entering central necrosis.",
      "Post-procedure chest radiograph at 2-4 hours if lung approach utilized.",
      "Advise patient to avoid vigorous activity for 48 hours to prevent seed migration."
    ],
    "specialPrecautionsHi": [
      "कम से कम 3 सोने के दाने अलग-अलग कोणों पर 1.5 से 2 सेमी की दूरी पर लगाना ताकि 3D ट्रैकिंग हो सके।",
      "दानों को गांठ के अंदर या बिल्कुल किनारे लगाना।",
      "फेफड़े में लगाने के 2-4 घंटे बाद छाती का एक्स-रे।",
      "दाने खिसकने से बचाने हेतु 48 घंटे तक भारी काम न करना।"
    ]
  },
  "spinal-metastasis-rfa-steerable-electrode": {
    "procedureId": "spinal-metastasis-rfa-steerable-electrode",
    "procedureName": "Spinal Metastasis RFA with Steerable Electrode",
    "preOpCriteriaEn": [
      "Pre-procedure MRI Spine confirming vertebral metastasis with intact posterior cortical margin",
      "Absence of epidural spinal cord compression (ESCC score <= 1b)",
      "Platelet count >= 70,000/uL; INR <= 1.4",
      "Neurological examination documented baseline lower extremity motor/sensory status"
    ],
    "preOpCriteriaHi": [
      "एमआरआई पर रीढ़ की गांठ की पुष्टि और पिछली दीवार का सुरक्षित होना",
      "रीढ़ की मुख्य नस (Spinal Cord) पर गंभीर दबाव न होना",
      "प्लेटलेट्स >= 70,000/uL; INR <= 1.4",
      "पैरों की ताकत और संवेदना की पूर्व जांच"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 75 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 75 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 70,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 70,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Cefazolin 2g IV 30-60 minutes before transpedicular puncture.",
    "antibioticProphylaxisHi": "रीढ़ में प्रवेश से 1 घंटा पहले सेफाजोलिन 2 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Maintain active steerable electrode tip strictly >= 10-15 mm away from posterior vertebral body cortex.",
      "Perform continuous motor nerve / somatosensory evoked potential (SSEP/MEP) monitoring if available.",
      "Follow ablation immediately with high-viscosity PMMA bone cement injection under continuous CT fluoroscopy.",
      "Perform post-procedure neurological examination in recovery; flat bed rest for 2 hours."
    ],
    "specialPrecautionsHi": [
      "सुई की नोक को रीढ़ की मुख्य नस से कम से कम 10-15 मिमी आगे रखना।",
      "पैरों की नसों की धड़कन और ताकत की लगातार जांच।",
      "जलाने के तुरंत बाद सीटी पर देखते हुए गाढ़ा बोन सीमेंट भरना।",
      "प्रक्रिया के बाद पैरों की ताकत की तुरंत जांच और 2 घंटे का बेड रेस्ट।"
    ]
  },
  "tips-creation-viatorr": {
    "procedureId": "tips-creation-viatorr",
    "procedureName": "TIPS Creation with Viatorr Covered Stent",
    "preOpCriteriaEn": [
      "Pre-procedure Doppler ultrasound or triphasic CT/MRI proving patent main portal vein and hepatic veins",
      "MELD score calculated (caution if MELD > 18-20 due to increased 90-day post-TIPS mortality)",
      "2D Echocardiogram: Normal right ventricular systolic pressure (RVSP < 45-50 mmHg) and absence of severe tricuspid regurgitation",
      "Platelets >= 50,000/uL; INR <= 1.5 (FFP/platelet cover arranged)"
    ],
    "preOpCriteriaHi": [
      "डॉपलर सोनोग्राफी या सीटी स्कैन द्वारा पोर्टल नस और लिवर की नसों का खुला होना अनिवार्य",
      "लिवर स्कोर (MELD) का मूल्यांकन (स्कोर 18 से अधिक होने पर अतिरिक्त सावधानी)",
      "हृदय की 2D इको जांच: दिल का दायां हिस्सा मजबूत होना और फेफड़ों की नसों में उच्च दाब न होना",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5; रक्त व प्लाज्मा तैयार रखना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure; avoid saline overload in advanced ascites/cirrhosis.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा (अत्यधिक पानी चढ़ाने से बचाव)।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5; 2-4 units PRBC cross-matched and available in blood bank.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL; INR <= 1.5; 2-4 यूनिट ब्लड क्रॉस-मैच तैयार।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 2g IV (or Cefotaxime 2g IV) 1 hour prior to neck access; continue broad-spectrum IV antibiotics for 24-48 hours.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले सेफ्ट्रिएक्सोन 2 ग्राम नस द्वारा और 24-48 घंटे तक एंटीबायोटिक जारी रखना।",
    "specialPrecautionsEn": [
      "Measure baseline wedged/free hepatic venous pressure and right atrial pressure.",
      "Target post-TIPS portosystemic gradient (PSG) < 12 mmHg (or > 50% drop from baseline) to balance variceal decompression against encephalopathy risk.",
      "Viatorr covered stent length measured precisely: ensure bare section sits cleanly inside portal vein without covering bifurcation.",
      "Post-procedure ICU admission with hourly neurological monitoring (West Haven encephalopathy criteria) and Doppler US at 24 hours."
    ],
    "specialPrecautionsHi": [
      "स्टेंट लगाने से पहले और बाद में नस का दबाव (प्रेशर) नापना।",
      "नसों का प्रेशर 12 mmHg से कम करने का लक्ष्य ताकि खून बहना रुके और सुस्ती का खतरा भी कम रहे।",
      "स्टेंट की लंबाई का सटीक चयन।",
      "प्रक्रिया पश्चात 24 घंटे आईसीयू में भर्ती, मरीज के होशोहवास की जांच और 24 घंटे पर डॉपलर अल्ट्रासाउंड।"
    ]
  },
  "tips-revision-angioplasty-relining": {
    "procedureId": "tips-revision-angioplasty-relining",
    "procedureName": "TIPS Revision Angioplasty and Relining",
    "preOpCriteriaEn": [
      "Color Doppler ultrasound showing TIPS shunt velocity < 50-60 cm/s or > 200 cm/s, or complete absence of flow",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "Recent clinical recurrence of ascites or GI bleeding documented",
      "Right internal jugular vein patency confirmed"
    ],
    "preOpCriteriaHi": [
      "डॉपलर सोनोग्राफी पर पुराने स्टेंट में बहाव धीमा होने या बंद होने की पुष्टि",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "मरीज को दोबारा ब्लीडिंग या पेट में पानी भरने की तकलीफ होना",
      "गले की जुगुलर नस खुली होना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 75 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 75 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV 1 hour prior to jugular puncture.",
    "antibioticProphylaxisHi": "गले में पंक्चर से 1 घंटा पहले सेफ्ट्रिएक्सोन 1 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Have high-pressure non-compliant balloons (8-10 mm) and hydrophilic coated wires ready.",
      "Perform pressure manometry: record baseline PSG, post-angioplasty PSG, and post-relining PSG.",
      "If acute thrombus present inside stent, consider rheolytic thrombectomy or catheter-directed thrombolysis before ballooning.",
      "Doppler ultrasound surveillance at 1 month, 3 months, and every 6 months."
    ],
    "specialPrecautionsHi": [
      "उच्च-दाब वाले गुब्बारे और नए स्टेंट तैयार रखना।",
      "प्रक्रिया के पहले और बाद में नस का प्रेशर नापना।",
      "स्टेंट में ताजा थक्का होने पर उसे पहले बाहर खींचना या घोलना।",
      "1 महीने और 3 महीने बाद डॉपलर सोनोग्राफी द्वारा निगरानी।"
    ]
  },
  "tips-with-variceal-embolization": {
    "procedureId": "tips-with-variceal-embolization",
    "procedureName": "TIPS with Simultaneous Variceal Embolization",
    "preOpCriteriaEn": [
      "Active or recently halted upper gastrointestinal variceal bleeding confirmed on endoscopy",
      "Airway secured (endotracheal intubation present if massive hematemesis or encephalopathic)",
      "Platelet count >= 50,000/uL; INR <= 1.5; PRBC transfusing",
      "Pre-procedure portal vein patency established"
    ],
    "preOpCriteriaHi": [
      "एंडोस्कोपी द्वारा भोजन नली या पेट की फूली नसों से खून बहने की पुष्टि",
      "सांस की नली सुरक्षित होना (गंभीर ब्लीडिंग में सांस की नली डाली होना)",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5; खून चढ़ाने की व्यवस्था",
      "पोर्टल नस का खुला होना"
    ],
    "fastingHours": 4,
    "hydrationProtocolEn": "IV fluids titrated with blood products to maintain mean arterial pressure > 65 mmHg.",
    "hydrationProtocolHi": "ब्लड प्रेशर सामान्य बनाए रखने हेतु ड्रिप और रक्त चढ़ाना।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5; Keep Hb >= 8.0 g/dL with PRBC transfusions.",
    "bloodProductsTargetHi": "हीमोग्लोबिन 8 से ऊपर रखना; प्लेटलेट्स 50,000 से अधिक।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 2g IV immediately; continue IV antibiotics for 5-7 days.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 2 ग्राम नस द्वारा तुरंत देना और 5-7 दिन तक एंटीबायोटिक जारी रखना।",
    "specialPrecautionsEn": [
      "Selectively catheterize left gastric / posterior gastric veins using 2.7F microcatheter and steerable wire.",
      "Deploy pushable or detachable coils sized 20-30% larger than target vessel diameter to prevent migration.",
      "Perform post-embolization portography to verify complete cessation of retrograde flow into varices.",
      "Transfer to Medical ICU for post-resuscitation hemodynamic surveillance."
    ],
    "specialPrecautionsHi": [
      "माइक्रो-कैथेटर द्वारा फूली हुई नसों में अत्यंत सावधानी से जाना।",
      "नस के आकार से 20-30% बड़े छल्लों का उपयोग ताकि वे अपनी जगह से खिसकें नहीं।",
      "एक्स-रे पर जांच कर पक्का करना कि फूली हुई नसों में खून जाना बिल्कुल बंद हो गया है।",
      "प्रक्रिया पश्चात मरीज को आईसीयू में भर्ती कर निगरानी रखना।"
    ]
  },
  "brto-gastric-varices": {
    "procedureId": "brto-gastric-varices",
    "procedureName": "BRTO for Gastric Varices",
    "preOpCriteriaEn": [
      "Contrast-enhanced CT abdomen demonstrating gastric varices draining via a gastrorenal or gastrocaval shunt",
      "Endoscopy confirming high-risk or actively bleeding fundal varices",
      "Platelet count >= 50,000/uL; INR <= 1.5; Serum Creatinine < 1.8 mg/dL",
      "Balloon occlusion catheter and STS / Ethanolamine Oleate sclerosant ready"
    ],
    "preOpCriteriaHi": [
      "सीटी स्कैन पर आमाशय की फूली नसों और गैस्ट्रो-रीनल शंट की पुष्टि",
      "एंडोस्कोपी पर आमाशय में फटने वाली नसों की जांच",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5; क्रिएटिनिन < 1.8 mg/dL",
      "विशेष ओक्लूजन बैलून और फोम दवा की व्यवस्था"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h with Inj Haptoglobin or forced diuresis to prevent hemoglobinuric renal toxicity.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा गुर्दों की सुरक्षा हेतु।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV 1 hour prior to venous puncture.",
    "antibioticProphylaxisHi": "नस पंक्चर से 1 घंटा पहले सेफ्ट्रिएक्सोन 1 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Test balloon inflation under fluoroscopy using 50% contrast to ensure complete shunt occlusion without distal slippage.",
      "Mix 3% Sodium Tetradecyl Sulfate (STS) with Lipiodol and air in 1:1:2 ratio (Tessari method) to create dense radio-opaque sclerosant foam.",
      "Maintain balloon inflation for 2 to 4 hours dwell time; verify thrombosis on spot fluoroscopy before deflation.",
      "Schedule upper GI endoscopy at 1 month to monitor and treat secondary esophageal varices."
    ],
    "specialPrecautionsHi": [
      "एक्स-रे पर गुब्बारा फुलाकर पक्का करना कि खून का बहाव पूरी तरह रुक गया है।",
      "दवा का विशेष झाग (Foam) बनाकर नसों में भरना।",
      "गुब्बारे को 2 से 4 घंटे तक फुलाकर रखना ताकि नसें पक्की तरह जम जाएं।",
      "1 महीने बाद एंडोस्कोपी द्वारा अन्य नसों की जांच।"
    ]
  },
  "parto-gastric-varices": {
    "procedureId": "parto-gastric-varices",
    "procedureName": "PARTO for Gastric Varices",
    "preOpCriteriaEn": [
      "Contrast CT showing gastrorenal shunt with distinct narrow neck suitable for vascular plug sizing (shunt diameter 4-18 mm)",
      "Endoscopy confirming Sarin GOV2 or IGV1 gastric varices",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "Amplatzer Vascular Plug II / Type 4 (sized 30-50% larger than shunt neck) ready"
    ],
    "preOpCriteriaHi": [
      "सीटी स्कैन पर शंट की संकरी गर्दन की पुष्टि (आकार 4 से 18 मिमी)",
      "एंडोस्कोपी पर आमाशय की फूली नसों की जांच",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "नस के आकार से 30-50% बड़े एम्प्लाट्जर वैस्कुलर प्लग की व्यवस्था"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 75 mL/h during and 4 hours post-procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 75 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Cefazolin 2g IV 1 hour prior to sheath insertion.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले सेफाजोलिन 2 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Size the vascular plug 30-50% larger than the constriction diameter of the shunt to prevent migration.",
      "Deliver Gelfoam slurry or sponge torpedoes through a microcatheter positioned anterior to the plug.",
      "Perform completion shuntography demonstrating complete occlusion of the shunt and disappearance of variceal blush.",
      "Bed rest with puncture site compression for 4 hours; early discharge often feasible next morning."
    ],
    "specialPrecautionsHi": [
      "प्लग का साइज नस से 30-50% बड़ा रखना ताकि वह फिसले नहीं।",
      "प्लग लगाने के बाद आगे की तरफ जेलफोम भरकर नसों को पूरी तरह सील करना।",
      "एक्स-रे पर जांच कर पक्का करना कि नस पूरी तरह बंद हो गई है।",
      "जांघ पर 4 घंटे का बेड रेस्ट।"
    ]
  },
  "carto-gastric-varices": {
    "procedureId": "carto-gastric-varices",
    "procedureName": "CARTO for Gastric Varices",
    "preOpCriteriaEn": [
      "Contrast-enhanced CT abdomen demonstrating gastric varices and complex gastrorenal shunt anatomy",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "Sufficient detachable and pushable embolization coils (0.035\" and 0.018\") available in room",
      "Upper GI endoscopy confirming bleeding or high-risk fundal varices"
    ],
    "preOpCriteriaHi": [
      "सीटी स्कैन पर आमाशय की फूली नसों और टेढ़े-मेढ़े शंट की जांच",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "विभिन्न आकारों के पर्याप्त धातु के छल्ले (Coils) उपलब्ध होना",
      "एंडोस्कोपी पर फूली हुई नसों की पुष्टि"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 75 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 75 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Cefazolin 2g IV 1 hour prior to venous access.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले सेफाजोलिन 2 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Deploy first coil (framing coil) oversized by 20-30% with high friction to anchor securely.",
      "Pack subsequent filling coils tightly (packing density > 25%) before injecting gelfoam slurry.",
      "Perform post-embolization venogram to ensure complete cessation of contrast transit through shunt.",
      "Bed rest for 4-6 hours with groin compression."
    ],
    "specialPrecautionsHi": [
      "पहला छल्ला नस से 20-30% बड़ा लगाना ताकि वह मजबूती से टिक जाए।",
      "बाकी छल्लों को कसकर भरना ताकि एक घना जाल बन सके।",
      "एक्स-रे पर डाई डालकर पक्का करना कि खून का बहाव पूरी तरह रुक चुका है।",
      "जांघ पर 4-6 घंटे का बेड रेस्ट।"
    ]
  },
  "pac-brto-gastric-varices": {
    "procedureId": "pac-brto-gastric-varices",
    "procedureName": "PAC-BRTO with Cyanoacrylate Glue",
    "preOpCriteriaEn": [
      "Large gastrorenal shunt confirmed on contrast CT with high risk of variceal rupture",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "n-BCA (Histoacryl) glue, Lipiodol, and 5% Dextrose flush ready on sterile table",
      "Plug sized 30-50% larger than target landing zone"
    ],
    "preOpCriteriaHi": [
      "सीटी स्कैन पर तेज बहाव वाले बड़े शंट की पुष्टि",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "मेडिकल गोंद (Glue), लिपिओडोल और 5% ग्लूकोज का पानी तैयार रखना",
      "शंट से 30-50% बड़े वैस्कुलर प्लग की व्यवस्था"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 75 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 75 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Cefazolin 2g IV 1 hour prior to procedure.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले सेफाजोलिन 2 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Flush microcatheter with 5% Dextrose prior to glue injection (ionic saline triggers premature glue polymerization inside catheter).",
      "Mix n-BCA with Lipiodol in 1:1 to 1:2 ratio depending on desired polymerization speed.",
      "Aspirate and withdraw microcatheter immediately following glue delivery to prevent catheter entrapment.",
      "Perform completion fluoroscopy to verify complete glue cast distribution in variceal nidus."
    ],
    "specialPrecautionsHi": [
      "कैथेटर को केवल 5% ग्लूकोज से धोना (सलाइन से धोते ही गोंद नली के अंदर ही जम जाएगी)।",
      "गोंद और लिपिओडोल का सटीक अनुपात में मिश्रण।",
      "दवा छोड़ते ही कैथेटर को एक झटके में बाहर खींचना ताकि नली अंदर न चिपके।",
      "एक्स-रे पर पूरी तरह गोंद के जमने की पुष्टि।"
    ]
  },
  "pto-ectopic-varices": {
    "procedureId": "pto-ectopic-varices",
    "procedureName": "Percutaneous Transhepatic Obliteration (PTO)",
    "preOpCriteriaEn": [
      "Contrast CT angiography or mesenteric portography localizing ectopic duodenal/stomal varices",
      "Endoscopic exclusion of standard esophageal/gastric bleeding sources",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "Tract embolization material (coils, Gelfoam torpedoes) prepared for parenchymal tract closure"
    ],
    "preOpCriteriaHi": [
      "सीटी एंजियोग्राफी द्वारा छोटी आंत या स्टोमा की फूली नसों की पहचान",
      "एंडोस्कोपी द्वारा पेट की अन्य नसों की जांच",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "लिवर का छेद बंद करने हेतु कॉइल्स और जेलफोम तैयार रखना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5; PRBC cross-matched.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL; खून क्रॉस-मैच तैयार।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV + Inj Metronidazole 500mg IV 1 hour prior.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Use 21G micropuncture needle under ultrasound guidance to access peripheral portal branch.",
      "Embolize varices completely with pushable microcoils and Gelfoam or glue.",
      "Mandatory transhepatic tract embolization with coils and Gelfoam during sheath withdrawal to prevent hemoperitoneum.",
      "Strict 6-hour supine bed rest with right hypochondrial compression."
    ],
    "specialPrecautionsHi": [
      "सोनोग्राफी पर देखकर अत्यंत बारीक सुई से लिवर की नस में जाना।",
      "छल्लों और दवा से नसों को पूरी तरह बंद करना।",
      "नली बाहर निकालते समय लिवर के सुई वाले छेद को कॉइल व जेल से पक्का सील करना।",
      "प्रक्रिया के बाद 6 घंटे तक सीधा लेटना।"
    ]
  },
  "ptp-ehpvo-stenting": {
    "procedureId": "ptp-ehpvo-stenting",
    "procedureName": "Percutaneous Portal Vein Stenting for EHPVO",
    "preOpCriteriaEn": [
      "Contrast CT/MRI Portography documenting cavernoma anatomy and patent intrahepatic portal branches (left/right branches)",
      "Upper GI endoscopy confirming portal hypertensive manifestations",
      "Platelet count >= 40,000/uL; INR <= 1.5",
      "Self-expanding metallic stents (SEMS 10-14 mm diameter) and crossing wires (Glidewire Advantage / Astato) ready"
    ],
    "preOpCriteriaHi": [
      "सीटी पोर्टोग्राफी पर कैवरनोमा और लिवर के अंदर की शाखाओं के खुले होने की पुष्टि",
      "एंडोस्कोपी द्वारा पोर्टल हाइपरटेंशन की जांच",
      "प्लेटलेट्स >= 40,000/uL; INR <= 1.5",
      "10 से 14 मिमी आकार के धातु के स्टेंट और विशेष क्रॉसिंग तारों की उपलब्धता"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5; 2 units PRBC cross-matched.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL; 2 यूनिट ब्लड तैयार रखना।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 2g IV + Inj Metronidazole 500mg IV 1 hour prior.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 2 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Have transhepatic and trans-splenic access sets available; bilateral approach may be required for through-and-through wire rendezvous.",
      "Initiate intra-procedural systemic heparin anticoagulation (5000 IU) once lesion is successfully crossed.",
      "Tract plug embolization with coils and Gelfoam mandatory upon sheath retrieval.",
      "Post-procedure therapeutic low molecular weight heparin (LMWH) transitioning to oral anticoagulation for >= 6-12 months."
    ],
    "specialPrecautionsHi": [
      "लिवर और तिल्ली दोनों तरफ से तार डालने की व्यवस्था रखना।",
      "नस पार होते ही खून पतला करने का हेपारिन इंजेक्शन लगाना।",
      "लिवर का सुई वाला छेद बंद करने हेतु कॉइल्स लगाना।",
      "प्रक्रिया के बाद 6 से 12 महीने तक खून पतला करने की दवाइयां नियमित चालू रखना।"
    ]
  },
  "spontaneous-shunt-embolization": {
    "procedureId": "spontaneous-shunt-embolization",
    "procedureName": "Spontaneous Portosystemic Shunt Embolization",
    "preOpCriteriaEn": [
      "Contrast-enhanced CT abdomen demonstrating large spontaneous splenorenal / gastrorenal shunt (> 8-10 mm)",
      "Clinical encephalopathy refractory to maximum medical therapy (Lactulose + Rifaximin)",
      "Preserved hepatic function: MELD score <= 15; Bilirubin < 2.5 mg/dL",
      "Upper GI endoscopy within 2 weeks confirming absence of high-risk esophageal varices"
    ],
    "preOpCriteriaHi": [
      "सीटी स्कैन पर 8-10 मिमी से बड़े स्वतः बने शंट की पुष्टि",
      "दवाइयों के बावजूद बार-बार बेहोशी या मानसिक भ्रम होना",
      "लिवर फंक्शन बहुत अधिक खराब न होना (MELD <= 15)",
      "एंडोस्कोपी द्वारा भोजन नली में फटने वाली नसों का न होना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 75 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 75 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Cefazolin 2g IV 1 hour prior to procedure.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले सेफाजोलिन 2 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Perform occlusion test with sizing balloon to measure change in portal pressure before definitive plug release.",
      "Size vascular plug 30-50% larger than narrowest segment of shunt to prevent migration.",
      "Monitor for sudden appearance of severe ascites or GI bleeding post-procedure.",
      "Bed rest for 4 hours with groin compression."
    ],
    "specialPrecautionsHi": [
      "प्लग छोड़ने से पहले गुब्बारा फुलाकर लिवर के दबाव की जांच करना।",
      "प्लग का साइज नस से 30-50% बड़ा रखना ताकि वह फिसले नहीं।",
      "प्रक्रिया के बाद पेट में पानी या ब्लीडिंग के लक्षणों पर कड़ी नजर रखना।",
      "जांघ पर 4 घंटे का बेड रेस्ट।"
    ]
  },
  "splenic-artery-embolization-partial": {
    "procedureId": "splenic-artery-embolization-partial",
    "procedureName": "Partial Splenic Artery Embolization",
    "preOpCriteriaEn": [
      "Cirrhosis with severe thrombocytopenia (< 50,000/uL) and documented splenomegaly on ultrasound/CT",
      "Pre-procedure vaccinations administered >= 2 weeks prior (Pneumococcal, Meningococcal, Hib vaccines)",
      "Platelet count documented; INR <= 1.5",
      "Adequate splenic volume assessed on CT (target 50-70% volume infarction; avoid > 70% to prevent abscess)"
    ],
    "preOpCriteriaHi": [
      "सोनोग्राफी/सीटी पर तिल्ली का बहुत बड़ा होना और प्लेटलेट्स 50,000 से कम होना",
      "प्रक्रिया से कम से कम 2 हफ्ते पहले न्यूमोकोकल, मेनिंगोकोकल और हिब (Hib) के टीके लगे होना अनिवार्य",
      "प्लेटलेट्स और INR की जांच",
      "तिल्ली के 50-70% हिस्से को ही बंद करने की योजना (70% से अधिक बंद करने पर मवाद का खतरा)"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h for 4 hours pre-procedure and 6 hours post-procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 30,000/uL (transfuse 1 unit SDP if lower for access safety); INR <= 1.5.",
    "bloodProductsTargetHi": "जांघ में सुई लगाने हेतु प्लेटलेट्स कम से कम 30,000-50,000 रखें।",
    "antibioticProphylaxisEn": "Inj Cefuroxime 1.5g IV + Inj Metronidazole 500mg IV 1 hour prior; continue oral/IV antibiotics for 5 days post-procedure.",
    "antibioticProphylaxisHi": "सेफ्यूरोक्साइम 1.5 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम नस द्वारा और प्रक्रिया पश्चात 5 दिन तक एंटीबायोटिक।",
    "specialPrecautionsEn": [
      "Position microcatheter distal to dorsal pancreatic and greater pancreatic arteries to protect pancreatic blood supply.",
      "Administer 300-500 um or 500-700 um calibrated microspheres slowly; halt embolization once 50-60% parenchymal devascularization is reached.",
      "Establish scheduled IV opioid analgesia and antiemetics for post-embolization pain management.",
      "Bed rest for 6 hours with groin puncture site compression."
    ],
    "specialPrecautionsHi": [
      "पैंक्रियाज की नसों से आगे जाकर दवा छोड़ना ताकि पैंक्रियाज को आंच न आए।",
      "तिल्ली का केवल 50-60% हिस्सा ही बंद होने पर प्रक्रिया तुरंत रोक देना।",
      "प्रक्रिया के बाद 4-5 दिन तक तेज दर्द निवारक दवाइयों का नियमित प्रबंध।",
      "जांघ पर पट्टी और 6 घंटे का बेड रेस्ट।"
    ]
  },
  "sae-splenic-steal-syndrome": {
    "procedureId": "sae-splenic-steal-syndrome",
    "procedureName": "Splenic Artery Embolization for Splenic Steal",
    "preOpCriteriaEn": [
      "Post-liver transplant Doppler ultrasound showing hepatic artery resistive index (RI) > 0.8 or sluggish/absent flow, with hyperdynamic splenic artery flow",
      "Transplant surgeon and hepatologist multidisciplinary consensus confirmed",
      "Platelet count >= 50,000/uL; INR <= 1.5; Tacrolimus/immunosuppression levels maintained",
      "Metallic embolization coils (0.035\" packing coils) or vascular plug available"
    ],
    "preOpCriteriaHi": [
      "ट्रांसप्लांट के बाद डॉपलर सोनोग्राफी पर लिवर की नस में खून कम और तिल्ली में अत्यधिक बहाव की पुष्टि",
      "ट्रांसप्लांट सर्जन और लिवर विशेषज्ञों की सहमति",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5; दवाइयों का स्तर सामान्य",
      "धातु के विशेष छल्ले और प्लग तैयार रखना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Piperacillin-Tazobactam 4.5g IV (or current post-transplant prophylactic antibiotic regimen).",
    "antibioticProphylaxisHi": "ट्रांसप्लांट वाली एंटीबायोटिक ड्रिप नस द्वारा चालू रखना।",
    "specialPrecautionsEn": [
      "Deploy coils in main proximal splenic artery trunk (distal to dorsal pancreatic artery) to reduce inflow while maintaining splenic viability via gastroepiploic collaterals.",
      "Perform completion celiac angiogram demonstrating robust, instantaneous enhancement of the hepatic artery graft.",
      "Monitor liver biochemistry (AST, ALT, Bilirubin) at 6, 12, and 24 hours post-procedure.",
      "Bed rest for 6 hours with groin compression."
    ],
    "specialPrecautionsHi": [
      "छल्ले तिल्ली की मुख्य नस के शुरुआती हिस्से में लगाना ताकि तिल्ली को थोड़ा खून मिलता रहे।",
      "प्रक्रिया के अंत में एक्स-रे पर देखना कि नए लिवर में खून का बहाव तेज हो गया है।",
      "प्रक्रिया पश्चात 6, 12 और 24 घंटे पर लिवर फंक्शन टेस्ट।",
      "जांघ पर पट्टी और 6 घंटे का बेड रेस्ट।"
    ]
  },
  "pve-ipsilateral-approach": {
    "procedureId": "pve-ipsilateral-approach",
    "procedureName": "Portal Vein Embolization - Ipsilateral Approach",
    "preOpCriteriaEn": [
      "Volumetric CT/MRI liver protocol demonstrating inadequate Future Liver Remnant (FLR ratio < 20% in normal, < 30% in steatohepatitis, < 40% in cirrhosis)",
      "Surgical multidisciplinary oncology board clearance for planned curative resection",
      "Platelet count >= 60,000/uL; INR <= 1.4",
      "Main portal trunk and left portal vein verified widely patent without thrombus"
    ],
    "preOpCriteriaHi": [
      "सीटी स्कैन पर बचने वाले स्वस्थ लिवर (FLR) का आकार कम होने की पुष्टि",
      "ऑपरेशन करने वाले सर्जनों की टीम द्वारा संस्तुति",
      "प्लेटलेट्स >= 60,000/uL; INR <= 1.4",
      "मुख्य पोर्टल नस और बाईं नस का पूरी तरह खुला होना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during and for 4 hours post-procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 60,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 60,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV + Inj Metronidazole 500mg IV 1 hour prior.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Navigate 5F reverse-curve catheter (Simmons/Shepherd Hook) into right portal branches from ipsilateral access.",
      "Embolize segment V, VI, VII, VIII branches completely with 100-300 um microspheres followed by pushable coils.",
      "Preserve segment IV branches unless extended right hepatectomy specifically planned.",
      "Embolize parenchymal access tract with Gelfoam/coils upon sheath removal to prevent bleeding.",
      "Schedule 3-week follow-up volumetric CT to measure remnant growth rate."
    ],
    "specialPrecautionsHi": [
      "दाहिनी तरफ की सभी शाखाओं (5, 6, 7, 8) को कणों और छल्लों से पूरी तरह बंद करना।",
      "बाईं तरफ की नसों को पूरी तरह खुला और सुरक्षित रखना।",
      "सुई निकालते समय लिवर के रास्ते को जेलफोम व कॉइल्स से बंद करना।",
      "3 हफ्ते बाद सीटी स्कैन द्वारा लिवर की बढ़ोतरी की जांच।"
    ]
  },
  "pve-contralateral-nbca": {
    "procedureId": "pve-contralateral-nbca",
    "procedureName": "Contralateral PVE with n-BCA Glue",
    "preOpCriteriaEn": [
      "Volumetric CT showing insufficient FLR (< 25-30%) with extensive right lobe tumor precluding ipsilateral puncture",
      "Platelet count >= 70,000/uL; INR <= 1.4",
      "Pre-procedure glue dilution ratio calculated (n-BCA to Lipiodol 1:4 to 1:6 for optimal transit)",
      "5% Dextrose flush primed on sterile table"
    ],
    "preOpCriteriaHi": [
      "सीटी स्कैन पर बचने वाले लिवर का आकार कम होना और दाहिने हिस्से में बड़ी गांठ होना",
      "प्लेटलेट्स >= 70,000/uL; INR <= 1.4",
      "मेडिकल गोंद और लिपिओडोल का सटीक अनुपात तैयार रखना",
      "केवल 5% ग्लूकोज के पानी से नली धोना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 70,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 70,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV + Inj Metronidazole 500mg IV 1 hour prior.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Access left portal branch as peripherally as possible using 21G needle under direct US guidance.",
      "Flush catheter with 5% Dextrose exclusively before and after glue delivery.",
      "Retract microcatheter briskly the instant glue reaches the right portal branch origins to avoid left reflux or catheter gluing.",
      "Tract embolization of left lobe puncture tract with Gelfoam/coils upon sheath removal.",
      "Follow-up CT volumetry at 3-4 weeks."
    ],
    "specialPrecautionsHi": [
      "सोनोग्राफी पर देखकर बाएं हिस्से की बाहरी नस में अत्यंत बारीक सुई लगाना।",
      "कैथेटर को केवल 5% ग्लूकोज से धोना।",
      "गोंद छोड़ते ही कैथेटर को तेजी से पीछे खींचना ताकि वह अंदर न चिपके।",
      "सुई निकालते समय बाएं लिवर के छेद को कॉइल/जेल से पक्का सील करना।",
      "3-4 हफ्ते बाद सीटी स्कैन द्वारा जांच।"
    ]
  },
  "hvd-lvd-simultaneous": {
    "procedureId": "hvd-lvd-simultaneous",
    "procedureName": "Hepatic Vein Deprivation (HVD / LVD)",
    "preOpCriteriaEn": [
      "Borderline FLR ratio assessed on 3D CT volumetry (< 20% in normal parenchyma, < 35% in damaged liver)",
      "Surgical multidisciplinary clearance for subsequent major hepatectomy",
      "Platelet count >= 70,000/uL; INR <= 1.4; Bilirubin < 2.0 mg/dL",
      "Amplatzer Vascular Plug II (sized 12-22 mm) and delivery sheaths ready for hepatic vein deployment"
    ],
    "preOpCriteriaHi": [
      "3D सीटी स्कैन पर बचने वाले लिवर का आकार खतरनाक रूप से कम होना",
      "ट्रांसप्लांट/कैंसर सर्जनों की संयुक्त सहमति",
      "प्लेटलेट्स >= 70,000/uL; INR <= 1.4; बिलीरुबिन < 2.0 mg/dL",
      "12 से 22 मिमी आकार के बड़े वैस्कुलर प्लग और छल्ले तैयार रखना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during and 6 hours post-procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 70,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 70,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 2g IV + Inj Metronidazole 500mg IV 1 hour prior.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 2 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Complete right portal vein embolization first using particles or n-BCA glue.",
      "Cannulate right hepatic vein (RHV); deploy oversized vascular plug (30-50% larger than RHV diameter) > 15-20 mm distal to IVC junction to prevent central displacement.",
      "Add detachable coils behind plug to ensure complete outflow cessation.",
      "Embolize all parenchymal access tracks thoroughly upon withdrawal.",
      "CT volumetry scan scheduled at day 7-14 to assess rapid kinetic growth rate."
    ],
    "specialPrecautionsHi": [
      "पहले पोर्टल नस को बंद करना, उसके बाद हेपेटिक नस में प्लग लगाना।",
      "प्लग को मुख्य नस (IVC) से 15-20 मिमी दूर लगाना ताकि वह खिसके नहीं।",
      "प्लग के पीछे अतिरिक्त छल्ले लगाना ताकि निकास पूरी तरह रुक जाए।",
      "लिवर के सभी छेदों को कॉइल/जेल से पक्का सील करना।",
      "प्रक्रिया के 7 से 14 दिन बाद सीटी स्कैन द्वारा तेज बढ़ोतरी की जांच।"
    ]
  },
  "tjlb-tract-plug": {
    "procedureId": "tjlb-tract-plug",
    "procedureName": "Transjugular Liver Biopsy (TJLB)",
    "preOpCriteriaEn": [
      "Indication confirmed for histology in patient with high bleeding risk (Platelets < 50,000 or INR > 1.5) or tense ascites",
      "Right internal jugular vein patency confirmed on ultrasound",
      "Platelet count >= 30,000/uL (transfuse 1 unit SDP if lower for neck puncture safety)",
      "Biopsy kit (18-19G Quick-Core or LABS needle) and tract plug coils/Gelfoam ready"
    ],
    "preOpCriteriaHi": [
      "खून पतला होने या पेट में पानी के कारण गले से बायोप्सी की आवश्यकता की पुष्टि",
      "सोनोग्राफी पर गले की नस (जुगुलर वेन) खुली होना",
      "गले में सुई लगाने हेतु प्लेटलेट्स कम से कम 30,000 रखें",
      "बायोप्सी सुई और छेद सील करने हेतु कॉइल्स/जेल तैयार रखना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 75 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 75 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 30,000/uL; INR <= 2.0 (TJLB safely performed at higher INR than percutaneous approach).",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 30,000/uL (यह जांच पेट वाली बायोप्सी से कहीं अधिक सुरक्षित है)।",
    "antibioticProphylaxisEn": "Inj Cefazolin 1g IV 1 hour prior to neck access.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले सेफाजोलिन 1 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Select right hepatic vein; direct needle anteriorly or anteromedially (towards liver parenchyma, away from capsular surface).",
      "Obtain 2 to 3 core specimens (target >= 10-15 portal tracts, length >= 1.5 cm).",
      "Perform tract plug embolization using 0.035\" pushable coils or Gelfoam torpedo through cannula before retrieval.",
      "Perform post-embolization tract venogram to confirm hemostasis.",
      "Patient recovers in supine position for 2-4 hours with neck dressing."
    ],
    "specialPrecautionsHi": [
      "सुई का मुंह हमेशा लिवर के अंदर की तरफ रखना, बाहर के पर्दे की तरफ नहीं।",
      "जांच हेतु 2 से 3 अच्छे टुकड़े लेना।",
      "सुई निकालते समय रास्ते में कॉइल या जेल भरकर छेद को पक्का बंद करना।",
      "एक्स-रे पर खून रुकने की पुष्टि।",
      "प्रक्रिया पश्चात 2 से 4 घंटे आराम।"
    ]
  },
  "hvpg-measurement": {
    "procedureId": "hvpg-measurement",
    "procedureName": "HVPG Measurement Manometry",
    "preOpCriteriaEn": [
      "Clinical indication documented (variceal bleeding risk stratification, beta-blocker monitoring, or pre-resection workup)",
      "Patient must have fasted for 6 hours (food intake increases portal blood flow and falsely elevates HVPG)",
      "Vasoactive drugs (beta-blockers, nitrates) withheld on morning of test if assessing baseline, or recorded if testing response",
      "Right internal jugular vein patency confirmed"
    ],
    "preOpCriteriaHi": [
      "प्रक्रिया का उद्देश्य स्पष्ट होना (दवाइयों का असर देखना या ऑपरेशन की तैयारी)",
      "मरीज का 6 घंटे भूखा रहना अनिवार्य (खाना खाने से लिवर का प्रेशर बढ़ जाता है जिससे जांच गलत हो सकती है)",
      "जांच की सुबह बीपी/बीटा-ब्लॉकर गोलियों के संबंध में डॉक्टर के निर्देश का पालन",
      "गले की नस खुली होना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "Keep IV hydration minimal (avoid volume boluses that alter filling pressures).",
    "hydrationProtocolHi": "अत्यधिक ड्रिप न लगाएं ताकि नसों का दबाव कृत्रिम रूप से न बदले।",
    "bloodProductsTargetEn": "Platelets >= 30,000/uL; INR <= 2.0 (safe at low platelet counts via transjugular route).",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 30,000/uL (गले से होने के कारण यह बहुत कम प्लेटलेट्स में भी सुरक्षित है)।",
    "antibioticProphylaxisEn": "None routinely required for diagnostic hemodynamic catheterization.",
    "antibioticProphylaxisHi": "रूटीन में एंटीबायोटिक की आवश्यकता नहीं होती।",
    "specialPrecautionsEn": [
      "Zero the pressure transducer at the mid-axillary line (right atrial level).",
      "Perform minimum 3 consecutive measurements of Wedged Hepatic Venous Pressure (WHVP) and Free Hepatic Venous Pressure (FHVP); readings must be stable within 1 mmHg.",
      "Calculate HVPG = WHVP - FHVP (Normal: 1-5 mmHg; Clinically significant portal hypertension CSPH: >= 10 mmHg; Severe: >= 12 mmHg).",
      "Bed rest for 2 hours post-procedure; early discharge."
    ],
    "specialPrecautionsHi": [
      "दबाव नापने वाली मशीन को दिल के स्तर पर शून्य पर सेट करना।",
      "सटीकता हेतु कम से कम 3 बार लगातार दबाव नापना।",
      "प्रेशर का अंतर निकालना (सामान्य: 1-5 mmHg; गंभीर बीमारी: 10-12 mmHg से अधिक)।",
      "प्रक्रिया पश्चात केवल 2 घंटे आराम और फिर छुट्टी।"
    ]
  },
  "ptbd-right-lobe-access": {
    "procedureId": "ptbd-right-lobe-access",
    "procedureName": "PTBD - Right Lobe Access",
    "preOpCriteriaEn": [
      "Dilated intrahepatic biliary radicles (IHBRD) confirmed on ultrasound or MRCP/CT",
      "Platelet count >= 50,000/uL; INR <= 1.5 (correct coagulopathy prior to puncture)",
      "Adequate IV broad-spectrum antibiotics running for at least 2-4 hours prior",
      "8.5F to 10.2F internal-external drainage ring catheter kit and drainage bag ready"
    ],
    "preOpCriteriaHi": [
      "सोनोग्राफी या एमआरसीपी (MRCP) पर पित्त की नलियों में रुकावट और फैलाव की पुष्टि",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5; खून जमने की जांचें सही करना",
      "प्रक्रिया से कम से कम 2-4 घंटे पहले से एंटीबायोटिक ड्रिप चालू होना",
      "8.5 से 10 नंबर की ड्रेनेज नली और थैली तैयार रखना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h starting 4 hours prior and continued post-procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5; 1-2 units PRBC cross-matched.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL; खून क्रॉस-मैच तैयार।",
    "antibioticProphylaxisEn": "Inj Piperacillin-Tazobactam 4.5g IV (or Cefoperazone-Sulbactam 3g IV) 1-2 hours prior to puncture; mandatory continuation for 3-5 days.",
    "antibioticProphylaxisHi": "पाइपेरासिलिन-टैजोबैक्टम 4.5 ग्राम नस द्वारा और प्रक्रिया के बाद 3-5 दिन तक जारी रखना।",
    "specialPrecautionsEn": [
      "Select peripheral segment VI or VII bile duct under ultrasound to avoid central portal vein or hepatic artery puncture.",
      "Perform contrast cholangiogram using diluted non-ionic contrast; avoid over-distension of infected biliary tree to prevent bacteremia.",
      "Secure drainage catheter skin disc with 2-0 silk sutures and waterproof adhesive dressing.",
      "Monitor drainage bag output and color hourly for first 6 hours; keep external bag below puncture level."
    ],
    "specialPrecautionsHi": [
      "सोनोग्राफी पर देखकर लिवर के बाहरी किनारे की पित्त नली में ही सुई डालना।",
      "डाई बहुत अधिक दबाव से न भरना ताकि खून में इन्फेक्शन न फैले।",
      "नली को त्वचा पर टांके लगाकर और मजबूत टेप से पक्का चिपकाना।",
      "शुरुआती 6 घंटे तक हर घंटे नली से निकलने वाले पित्त के रंग और मात्रा की निगरानी रखना; थैली को हमेशा पेट से नीचे रखना।"
    ]
  },
  "ptbd-left-lobe-access": {
    "procedureId": "ptbd-left-lobe-access",
    "procedureName": "PTBD - Left Lobe Access",
    "preOpCriteriaEn": [
      "Dilated left intrahepatic bile ducts (segment II or III >= 4 mm) on ultrasound/MRCP",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "Broad-spectrum IV antibiotics running pre-procedure",
      "Subxiphoid sterile field prepared"
    ],
    "preOpCriteriaHi": [
      "सोनोग्राफी/एमआरसीपी पर बाएं लिवर की नली 4 मिमी से अधिक चौड़ी होना",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "एंटीबायोटिक ड्रिप पहले से चालू होना",
      "पेट के ऊपरी हिस्से की त्वचा की सफाई"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Piperacillin-Tazobactam 4.5g IV (or Cefoperazone-Sulbactam 3g IV) 1 hour prior.",
    "antibioticProphylaxisHi": "पाइपेरासिलिन-टैजोबैक्टम 4.5 ग्राम नस द्वारा 1 घंटा पहले।",
    "specialPrecautionsEn": [
      "Direct needle into segment III duct pointing towards the hepatic hilum under real-time ultrasound.",
      "Avoid high punctures through the left triangular ligament or xiphoid notch.",
      "Secure catheter carefully with tension-free loop to prevent catheter kinking during sitting/bending.",
      "Connect to sterile drainage bag kept dependent."
    ],
    "specialPrecautionsHi": [
      "सोनोग्राफी पर देखकर सुई को सीधे पित्त नली के अंदर पहुंचाना।",
      "नली को इस तरह घुमाव देकर चिपकाना कि उठने-बैठने पर नली मुड़े नहीं।",
      "थैली को हमेशा पेट के स्तर से नीचे रखना।",
      "पित्त की मात्रा की नियमित डायरी बनाना।"
    ]
  },
  "biliary-metallic-stenting-sems": {
    "procedureId": "biliary-metallic-stenting-sems",
    "procedureName": "Biliary Metallic Stenting (SEMS)",
    "preOpCriteriaEn": [
      "Cholangiogram or MRCP delineating stricture length, proximal extent, and lobar drainage target (>= 50% liver volume drained)",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "Self-expanding metallic stent (SEMS, uncovered or partially covered, 8-10 mm diameter, 6-10 cm length) verified",
      "Broad-spectrum IV antibiotics covering enterococci and gram-negative bacilli running"
    ],
    "preOpCriteriaHi": [
      "एमआरसीपी पर रुकावट की लंबाई और स्थान की स्पष्ट जांच",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "8 से 10 मिमी व्यास का उपयुक्त लंबाई वाला धातु का स्टेंट उपलब्ध होना",
      "एंटीबायोटिक ड्रिप चालू होना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Piperacillin-Tazobactam 4.5g IV 1 hour prior; continue IV antibiotics for 48 hours.",
    "antibioticProphylaxisHi": "पाइपेरासिलिन-टैजोबैक्टम 4.5 ग्राम नस द्वारा और 2 दिन तक एंटीबायोटिक जारी रखना।",
    "specialPrecautionsEn": [
      "Deploy stent with 10-15 mm margin above and below stricture to accommodate tumor overgrowth.",
      "Option to leave safety wire or small temporary internal-external tube for 24-48 hours until stent fully expands.",
      "Perform completion cholangiogram to ensure free flow of contrast into the duodenum.",
      "Check bilirubin, liver enzymes, and CBC at 24 and 48 hours."
    ],
    "specialPrecautionsHi": [
      "रुकावट के दोनों तरफ 10-15 मिमी अतिरिक्त स्टेंट रखना ताकि कैंसर बढ़ने पर भी नली बंद न हो।",
      "स्टेंट पूरी तरह खुलने तक 1-2 दिन छोटी सुरक्षा नली रखना।",
      "एक्स-रे पर डाई डालकर आंतों में पित्त के बहने की पुष्टि।",
      "24 और 48 घंटे बाद पीलिया (Bilirubin) की जांच।"
    ]
  },
  "bilateral-y-stent-biliary": {
    "procedureId": "bilateral-y-stent-biliary",
    "procedureName": "Bilateral Y-Stent Biliary Reconstruction",
    "preOpCriteriaEn": [
      "High-resolution MRCP / triphasic CT detailing Bismuth III/IV hilar anatomy with dilated bilateral ductal systems",
      "Platelet count >= 60,000/uL; INR <= 1.4",
      "Pair of dedicated open-cell / large-mesh SEMS (e.g., Niti-S Biliary Large-Cell / Y-stent) ready",
      "Bilateral sterile prep (right flank and epigastrium)"
    ],
    "preOpCriteriaHi": [
      "एमआरसीपी पर दोनों तरफ की नलियां अलग-अलग बंद होने की पुष्टि",
      "प्लेटलेट्स >= 60,000/uL; INR <= 1.4",
      "विशेष 'Y' आकार वाले दो धातु के स्टेंट उपलब्ध होना",
      "पेट के दोनों तरफ (दाएं व बाएं) की तैयारी"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 125 mL/h during and post-procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 125 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 60,000/uL; INR <= 1.4; 2 units PRBC cross-matched.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 60,000/uL; 2 यूनिट ब्लड तैयार।",
    "antibioticProphylaxisEn": "Inj Piperacillin-Tazobactam 4.5g IV + Inj Amikacin 500mg IV 1 hour prior; mandatory continuation for 5 days.",
    "antibioticProphylaxisHi": "पाइपेरासिलिन-टैजोबैक्टम 4.5 ग्राम + एमिकासिन 500 मिलीग्राम नस द्वारा और 5 दिन तक जारी रखना।",
    "specialPrecautionsEn": [
      "Deploy first SEMS with wide-cell mesh across bifurcation; balloon-dilate the side mesh cell before inserting second contralateral stent.",
      "Perform simultaneous bilateral completion cholangiography to document patent lumen in both limbs.",
      "Leave bilateral safety internal-external catheters for 48 hours to confirm cholangitis resolution before capping/removal.",
      "Discharge on oral fluoroquinolone/cefixime prophylactic antibiotics for 7 days."
    ],
    "specialPrecautionsHi": [
      "पहला स्टेंट डालकर उसकी जाली के छेद को गुब्बारे से फैलाना, फिर दूसरा स्टेंट उसमें से आर-पार निकालना।",
      "एक्स-रे पर दोनों तरफ से डाई डालकर दोनों शाखाओं के पूरी तरह खुले होने की पुष्टि।",
      "1-2 दिन सुरक्षा नली रखना, इन्फेक्शन ठीक होने पर ही नली निकालना।",
      "घर जाने के बाद 7 दिन तक एंटीबायोटिक गोलियां नियमित लेना।"
    ]
  },
  "biliary-balloon-dilation-stricture": {
    "procedureId": "biliary-balloon-dilation-stricture",
    "procedureName": "Percutaneous Biliary Balloon Dilation",
    "preOpCriteriaEn": [
      "Pre-existing PTBD tract mature (>= 5-7 days post-drainage)",
      "Cholangiogram showing focal discrete benign stricture (< 2 cm in length)",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "High-pressure balloons (6-10 mm diameter, 2-4 cm length) and inflation syringe with manometer ready"
    ],
    "preOpCriteriaHi": [
      "पीटीबीडी नली डले हुए कम से कम 5 से 7 दिन हो चुके हों",
      "एक्स-रे पर 2 सेमी से छोटी सिकुड़न की पुष्टि",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "उच्च-दाब गुब्बारा और प्रेशर मीटर तैयार रखना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 2g IV (or Piperacillin-Tazobactam 4.5g IV) 1 hour prior to dilation.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले सेफ्ट्रिएक्सोन 2 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Inflate balloon gradually until balloon waist disappears completely; maintain full inflation for 60 to 120 seconds.",
      "Perform check cholangiogram immediately upon deflation to rule out ductal rupture or extravasation.",
      "Upsize to a 10F to 12F catheter across the dilated segment as a splint for 4-6 weeks.",
      "Post-procedure observation for 4 hours; discharge with tube capped or to gravity bag."
    ],
    "specialPrecautionsHi": [
      "गुब्बारे को धीरे-धीरे फुलाना जब तक कि सिकुड़न का निशान गायब न हो जाए; 1 से 2 मिनट तक फूला रखना।",
      "गुब्बारा पिचकाते ही तुरंत डाई डालकर देखना कि नली कहीं से कटी या फटी तो नहीं।",
      "रास्ते को खुला रखने हेतु 4 से 6 सप्ताह के लिए बड़ी नली अंदर रखना।",
      "4 घंटे बाद मरीज को डिस्चार्ज करना।"
    ]
  },
  "percutaneous-biliary-stone-removal": {
    "procedureId": "percutaneous-biliary-stone-removal",
    "procedureName": "Percutaneous Biliary Stone Removal",
    "preOpCriteriaEn": [
      "PTBD access tract mature (>= 7-10 days post-initial drainage) with 8-10F catheter in situ",
      "Cholangiogram confirming number, size (< 10-15 mm), and location of retained stones",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "Dormia basket (4-wire/6-wire helical), stone extraction balloons, and introducer sheaths ready"
    ],
    "preOpCriteriaHi": [
      "पीटीबीडी नली डले हुए कम से कम 7 से 10 दिन हो चुके हों",
      "एक्स-रे पर पथरी की संख्या, आकार (10-15 मिमी से छोटी) और स्थान की पुष्टि",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "डोरमिया टोकरी और गुब्बारा तैयार रखना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 75 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 75 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV 1 hour prior to stone manipulation.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले सेफ्ट्रिएक्सोन 1 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Administer IV Glucagon (1 mg) or Hyoscine butylbromide to relax the sphincter of Oddi before pushing stones into the duodenum.",
      "Ensure stone size is smaller than sheath diameter before pulling basket back through the liver parenchymal tract.",
      "Perform completion cholangiogram demonstrating complete ductal stone clearance and free passage of contrast into bowel.",
      "Replace 8F safety catheter; clamp next day and remove in clinic if patient remains asymptomatic."
    ],
    "specialPrecautionsHi": [
      "पथरी को आंत में धकेलने से पहले आंत का मुंह ढीला करने हेतु विशेष इंजेक्शन लगाना।",
      "लिवर के रास्ते बाहर खींचते समय पथरी का आकार नली से छोटा होना अनिवार्य।",
      "प्रक्रिया के अंत में एक्स-रे पर देखना कि एक भी पथरी नहीं बची है।",
      "1-2 दिन सुरक्षा नली रखना, सब ठीक रहने पर नली निकाल देना।"
    ]
  },
  "percutaneous-cholangioscopy-lithotripsy": {
    "procedureId": "percutaneous-cholangioscopy-lithotripsy",
    "procedureName": "Percutaneous Cholangioscopy and Laser Lithotripsy",
    "preOpCriteriaEn": [
      "Transhepatic tract sequentially dilated over 2-3 sessions to 12-16F to accommodate flexible cholangioscope",
      "Platelet count >= 60,000/uL; INR <= 1.4",
      "Holmium:YAG laser console or EHL unit calibrated and safety goggles available in room",
      "Continuous warm saline irrigation system prepared"
    ],
    "preOpCriteriaHi": [
      "नली के रास्ते को 2-3 बार में फैलाकर 12-16 नंबर तक चौड़ा किया जा चुका हो",
      "प्लेटलेट्स >= 60,000/uL; INR <= 1.4",
      "होल्मियम लेजर मशीन और सुरक्षा चश्मे तैयार रखना",
      "धुलाई हेतु गुनगुने सलाइन का प्रबंध"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 60,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 60,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Piperacillin-Tazobactam 4.5g IV 1 hour prior; continue IV antibiotics post-procedure.",
    "antibioticProphylaxisHi": "पाइपेरासिलिन-टैजोबैक्टम 4.5 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Fire laser pulses strictly under direct visual contact with stone center; never fire against bile duct mucosa.",
      "Maintain low-pressure gravity saline irrigation to avoid triggering bacteremia and rigors.",
      "Flush fragments into duodenum using sweep balloon following fragmentation.",
      "Leave a 10F to 12F safety drainage tube post-procedure; verify duct clearance on follow-up cholangiogram."
    ],
    "specialPrecautionsHi": [
      "लेजर केवल पथरी पर ही चलाना, नली की दीवार पर बिल्कुल नहीं।",
      "धुलाई का पानी कम दबाव से बहाना ताकि बुखार न चढ़े।",
      "टुकड़ों को गुब्बारे से आंत में बहाना।",
      "प्रक्रिया के बाद सुरक्षा नली रखना और एक्स-रे द्वारा पूर्ण सफाई की पुष्टि।"
    ]
  },
  "percutaneous-endobiliary-biopsy": {
    "procedureId": "percutaneous-endobiliary-biopsy",
    "procedureName": "Percutaneous Endobiliary Biopsy",
    "preOpCriteriaEn": [
      "Transhepatic access sheath (7F or 8F) positioned in bile duct proximal to stricture",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "Cholangiogram accurately mapping stricture length and margins",
      "Endobiliary forceps (Cordis / Cook Medical 1.8 mm to 2.4 mm) and cytology brush ready"
    ],
    "preOpCriteriaHi": [
      "पित्त नली में 7-8 नंबर की नली स्थापित होना",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "एक्स-रे पर रुकावट की लंबाई और सीमाओं की स्पष्ट जांच",
      "विशेष बायोप्सी चिमटी और ब्रश तैयार रखना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 75 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 75 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV 1 hour prior to biopsy manipulation.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले सेफ्ट्रिएक्सोन 1 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Direct forceps jaws strictly under fluoroscopy towards the thickened tumor shelf; take 3-5 distinct bite specimens.",
      "Place core specimens immediately in 10% neutral buffered formalin; prepare cytology brush smears on alcohol-fixed glass slides.",
      "Perform completion cholangiogram to ensure no contrast extravasation or persistent ductal hemorrhage.",
      "Re-insert internal-external drainage catheter across stricture to maintain decompression."
    ],
    "specialPrecautionsHi": [
      "एक्स-रे पर देखकर गांठ के कड़क हिस्से से ही 3-5 अच्छे टुकड़े लेना।",
      "टुकड़ों को तुरंत फॉर्मेलिन में और ब्रश की स्लाइड बनाकर पैथोलॉजी भेजना।",
      "जांच के बाद डाई डालकर देखना कि खून तो नहीं बह रहा।",
      "रास्ता खुला रखने हेतु ड्रेनेज नली दोबारा स्थापित करना।"
    ]
  },
  "endobiliary-rfa-malignancy": {
    "procedureId": "endobiliary-rfa-malignancy",
    "procedureName": "Endobiliary RFA for Malignant Obstruction",
    "preOpCriteriaEn": [
      "Histologically or radiologically confirmed malignant biliary stricture",
      "Stricture length and distance to portal vein / hepatic artery assessed on CT",
      "Platelet count >= 50,000/uL; INR <= 1.4",
      "Bipolar endobiliary RFA catheter (Habib EndoHPB) and RF generator tested"
    ],
    "preOpCriteriaHi": [
      "जांचों द्वारा पित्त नली के कैंसर की पुष्टि",
      "सीटी स्कैन पर गांठ की लंबाई और नसों से दूरी की जांच",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.4",
      "हबीब आर.एफ.ए. कैथेटर और मशीन तैयार रखना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.4.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.4 से कम।",
    "antibioticProphylaxisEn": "Inj Piperacillin-Tazobactam 4.5g IV 1 hour prior to RFA delivery.",
    "antibioticProphylaxisHi": "पाइपेरासिलिन-टैजोबैक्टम 4.5 ग्राम नस द्वारा 1 घंटा पहले।",
    "specialPrecautionsEn": [
      "Position bipolar electrode strictly within stricture margin under continuous fluoroscopy.",
      "Deliver 7-10W power for precisely 90-120 seconds per segment; allow 60-second cooldown before moving probe.",
      "Perform post-RFA balloon sweep or dilation to clear charred coagulated debris.",
      "Deploy metallic stent immediately across ablated segment; verify brisk duodenal drainage."
    ],
    "specialPrecautionsHi": [
      "कैथेटर को एक्स-रे पर देखकर बिल्कुल गांठ के बीच में रखना।",
      "7 से 10 वॉट करंट ठीक 90 से 120 सेकंड तक देना।",
      "जले हुए कचरे को गुब्बारे से साफ करना।",
      "जलाने के तुरंत बाद धातु का स्टेंट स्थापित करना।"
    ]
  },
  "ptc-cholecystostomy": {
    "procedureId": "ptc-cholecystostomy",
    "procedureName": "Percutaneous Cholecystostomy",
    "preOpCriteriaEn": [
      "Ultrasound or CT confirming acute cholecystitis (gallbladder wall thickening > 4 mm, distension, pericholecystic fluid, sonographic Murphy sign)",
      "Surgical team documentation confirming patient is prohibitive high-risk for acute surgery",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "8F to 10F locking pigtail drainage catheter kit ready"
    ],
    "preOpCriteriaHi": [
      "सोनोग्राफी/सीटी पर पित्त की थैली में सूजन, मवाद और दीवार मोटी होने की पुष्टि",
      "सर्जन द्वारा ऑपरेशन अत्यधिक जोखिम भरा होने की लिखित पुष्टि",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "8 से 10 नंबर की पिगटेल ड्रेनेज नली तैयार रखना"
    ],
    "fastingHours": 4,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV + Inj Metronidazole 500mg IV immediately (or continue current ICU broad-spectrum regimen).",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Transhepatic approach strongly preferred (puncturing through liver bed into gallbladder) to seal tract and prevent free peritoneal bile leak.",
      "Aspirate thick purulent bile completely; send specimen for gram stain, aerobic/anaerobic culture and sensitivity.",
      "Lock pigtail securely inside gallbladder lumen; confirm loop under fluoroscopy with small contrast puff.",
      "Catheter must remain in place for minimum 3-4 weeks to allow a mature fibrous tract to form before tube removal."
    ],
    "specialPrecautionsHi": [
      "सुई को लिवर के रास्ते से ही डालना ताकि पेट में पित्त न फैले।",
      "निकाले गए मवाद को तुरंत लैब में बैक्टीरिया जांच (Culture) हेतु भेजना।",
      "पिगटेल छल्ले को थैली के अंदर लॉक करके एक्स-रे पर पक्का करना।",
      "नली को कम से कम 3 से 4 हफ्ते तक लगा रहना आवश्यक ताकि रास्ता पक्का बन सके।"
    ]
  },
  "transcholecystic-biliary-stenting": {
    "procedureId": "transcholecystic-biliary-stenting",
    "procedureName": "Transcholecystic Biliary Access and Stenting",
    "preOpCriteriaEn": [
      "Gallbladder in situ (or mature cholecystostomy tube present); distal CBD obstruction documented on contrast CT",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "Angled hydrophilic guidewires (Glidewire Advantage / Radiofocus) and torque catheters ready",
      "Metallic or plastic biliary stents available"
    ],
    "preOpCriteriaHi": [
      "पित्त की थैली मौजूद होना या नली पहले से डली होना; सीटी पर नली में रुकावट की पुष्टि",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "अत्यधिक लचीले और मुड़ने वाले विशेष तार तैयार रखना",
      "उपयुक्त स्टेंट उपलब्ध होना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 75 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 75 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 2g IV 1 hour prior to cystic duct manipulation.",
    "antibioticProphylaxisHi": "प्रक्रिया से 1 घंटा पहले सेफ्ट्रिएक्सोन 2 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Inject small contrast puffs to map the tortuous cystic duct spiral valves under roadmap fluoroscopy.",
      "Advance angled hydrophilic wire gently without force to avoid cystic duct dissection.",
      "Once through-and-through duodenal access confirmed, exchange for stiff Amplatz wire before stent delivery.",
      "Leave safety cholecystostomy catheter in place for 48 hours; cap and remove once internal drainage is proven."
    ],
    "specialPrecautionsHi": [
      "एक्स-रे पर लगातार डाई डालकर घुमावदार नली का रास्ता देखना।",
      "तार को बिल्कुल धीरे-धीरे घुमाते हुए आगे बढ़ाना, जोर बिल्कुल न लगाना।",
      "आंतों में पहुंचने के बाद ही मजबूत तार पर स्टेंट स्थापित करना।",
      "2 दिन तक सुरक्षा नली रखना, सब ठीक रहने पर ही नली निकालना।"
    ]
  },
  "ptbd-covered-stent-bile-leak": {
    "procedureId": "ptbd-covered-stent-bile-leak",
    "procedureName": "Biliary Covered Stent for Bile Duct Injury",
    "preOpCriteriaEn": [
      "Cholangiogram, CT, or MRCP confirming ductal tear / high-output biliary fistula",
      "Simultaneous percutaneous drainage of any large intra-abdominal biloma collections established",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "Fully covered self-expanding metallic stent (e.g., Gore Viabil / Hanarostent 8-10 mm diameter) ready"
    ],
    "preOpCriteriaHi": [
      "सीटी या एक्स-रे पर पित्त नली फटने और भारी रिसाव की पुष्टि",
      "पेट में जमा पित्त को निकालने हेतु अलग से नली डली होना",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "8 से 10 मिमी आकार का पूरी तरह कवर्ड स्टेंट तैयार रखना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Piperacillin-Tazobactam 4.5g IV 1 hour prior to stent deployment.",
    "antibioticProphylaxisHi": "पाइपेरासिलिन-टैजोबैक्टम 4.5 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Position covered stent so the impermeable membrane bridges the entire injury zone with >= 10 mm healthy margins.",
      "Perform completion cholangiogram to verify 100% seal of the leak with instantaneous flow into bowel.",
      "Monitor external biloma drain output: output should plummet towards zero within 24-48 hours.",
      "Remove external biloma drain once output is < 15-20 mL/day."
    ],
    "specialPrecautionsHi": [
      "कवर्ड स्टेंट को इस तरह लगाना कि वह फटे हुए छेद से दोनों तरफ 10 मिमी आगे तक जाए।",
      "एक्स-रे पर डाई डालकर देखना कि रिसाव पूरी तरह रुक गया है और सारा पित्त आंत में जा रहा है।",
      "पेट वाली नली से निकलने वाले रिसाव की निगरानी: 24-48 घंटे में रिसाव बिल्कुल बंद हो जाना चाहिए।",
      "रिसाव बंद होते ही पेट वाली नली निकाल दी जाती है।"
    ]
  },
  "percutaneous-biloma-abscess-drainage": {
    "procedureId": "percutaneous-biloma-abscess-drainage",
    "procedureName": "Percutaneous Biloma / Abscess Drainage",
    "preOpCriteriaEn": [
      "Ultrasound or contrast CT documenting drainable fluid collection / abscess (>= 3-4 cm)",
      "Platelet count >= 50,000/uL; INR <= 1.5",
      "8.5F to 12F locking pigtail catheter kit and drainage bag ready",
      "Empirical broad-spectrum IV antibiotics initiated"
    ],
    "preOpCriteriaHi": [
      "सीटी या सोनोग्राफी पर 3-4 सेमी से बड़े फोड़े या पानी के जमाव की पुष्टि",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5",
      "8.5 से 12 नंबर की ड्रेनेज नली और थैली तैयार रखना",
      "एंटीबायोटिक ड्रिप चालू होना"
    ],
    "fastingHours": 4,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 75 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 75 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV + Inj Metronidazole 500mg IV (or continue current culture-directed regimen).",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Choose direct cutaneous trajectory avoiding pleura, liver capsule tears, and colon.",
      "Aspirate cavity as completely as possible; send fluid for gram stain, aerobic, anaerobic, and fungal cultures.",
      "Flush catheter with 10 mL sterile saline every 8 hours post-procedure to prevent sludge blockage.",
      "Monitor daily drainage volume; remove tube once output is < 10-15 mL/day and repeat imaging confirms cavity collapse."
    ],
    "specialPrecautionsHi": [
      "आंतों और फेफड़े को बचाते हुए सबसे छोटे और सुरक्षित रास्ते से सुई डालना।",
      "मवाद को लैब में कल्चर जांच हेतु तुरंत भेजना।",
      "नली को बंद होने से बचाने हेतु दिन में दो बार साफ पानी से धीरे से फ्लश करना।",
      "मवाद निकलना बंद होने (< 10-15 mL/दिन) और सोनोग्राफी पर फोड़ा सूखने पर नली निकाल दी जाती है।"
    ]
  },
  "portal-vein-recanalization-thrombolysis": {
    "procedureId": "portal-vein-recanalization-thrombolysis",
    "procedureName": "Portal Vein Recanalization and Thrombolysis",
    "preOpCriteriaEn": [
      "Multiphasic contrast CT demonstrating acute occlusive thrombus (< 14-21 days old) in portal vein / SMV without extensive cavernoma",
      "Absence of recent major surgery (< 10-14 days), active internal bleeding, or recent stroke (contraindications to tPA)",
      "Fibrinogen level >= 150 mg/dL; Platelet count >= 60,000/uL; INR <= 1.5",
      "ICU bed reserved for continuous catheter-directed thrombolysis monitoring"
    ],
    "preOpCriteriaHi": [
      "सीटी स्कैन पर 14-21 दिन के भीतर जमे ताजे थक्के की पुष्टि",
      "मरीज का हाल ही में कोई बड़ा ऑपरेशन न हुआ हो और दिमाग में ब्लीडिंग न हुई हो",
      "फाइब्रिनोजेन >= 150 mg/dL; प्लेटलेट्स >= 60,000/uL",
      "आईसीयू (ICU) में बेड आरक्षित होना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 60,000/uL; INR <= 1.5; Cryoprecipitate available if Fibrinogen drops < 100 mg/dL.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 60,000/uL; फाइब्रिनोजेन कम होने पर क्रायोप्रेसिपिटेट तैयार।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 2g IV 1 hour prior to venous puncture.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 2 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Cross thrombus with hydrophilic wire; perform pulse-spray tPA (5-10 mg) or aspiration thrombectomy.",
      "Continuous catheter thrombolysis with r-tPA (0.5 to 1.0 mg/h) combined with low-dose systemic heparin (500 IU/h) via sideport.",
      "Check Fibrinogen and aPTT every 6 hours in ICU; stop tPA if Fibrinogen drops < 100 mg/dL.",
      "Tract embolization with coils and Gelfoam upon sheath retrieval once lysis is terminated."
    ],
    "specialPrecautionsHi": [
      "थक्के के अंदर सीधे tPA दवा छोड़ना और थक्के को बाहर खींचना।",
      "आईसीयू में धीमी गति से tPA ड्रिप चालू रखना।",
      "हर 6 घंटे में खून जमने की जांच (Fibrinogen) करना।",
      "नली निकालते समय सुई वाले छेद को कॉइल से सील करना।"
    ]
  },
  "tips-stent-graft-reduction": {
    "procedureId": "tips-stent-graft-reduction",
    "procedureName": "TIPS Stent Graft Reduction",
    "preOpCriteriaEn": [
      "Refractory West Haven Grade III/IV hepatic encephalopathy documented despite maximal Lactulose + Rifaximin + LOLA therapy",
      "Baseline Doppler showing widely patent TIPS shunt with high velocities (> 180-200 cm/s)",
      "Endoscopy within 48 hours to assess underlying variceal status",
      "Hourglass reduction stent-graft or parallel balloon-in-stent hardware ready"
    ],
    "preOpCriteriaHi": [
      "दवाइयों के बावजूद गंभीर मानसिक भ्रम और बेहोशी की पुष्टि",
      "डॉपलर सोनोग्राफी पर टिप्स स्टेंट का पूरी तरह खुला होना और तेज बहाव होना",
      "एंडोस्कोपी द्वारा भोजन नली की नसों की जांच",
      "विशेष रिडक्शन स्टेंट तैयार रखना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 75 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 75 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL और INR 1.5 से कम।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV 1 hour prior to jugular puncture.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Measure portosystemic gradient (PSG) before and after reduction: Target post-reduction PSG between 10 and 14 mmHg.",
      "Avoid over-constriction (PSG > 15-18 mmHg) which triggers fatal variceal hemorrhage.",
      "Perform completion portogram to verify preserved forward shunt flow without complete stasis.",
      "Doppler ultrasound at 24 hours to verify patent reduced lumen."
    ],
    "specialPrecautionsHi": [
      "स्टेंट छोटा करने से पहले और बाद में नस का प्रेशर नापना (लक्ष्य: 10 से 14 mmHg)।",
      "स्टेंट को अत्यधिक संकरा न करना ताकि दोबारा ब्लीडिंग न शुरू हो जाए।",
      "एक्स-रे पर देखना कि खून का बहाव चालू है।",
      "24 घंटे बाद डॉपलर सोनोग्राफी द्वारा जांच।"
    ]
  },
  "percutaneous-coil-biliovenous-fistula": {
    "procedureId": "percutaneous-coil-biliovenous-fistula",
    "procedureName": "Embolization of Bilio-Vascular Fistula",
    "preOpCriteriaEn": [
      "Active hemobilia (gross blood in PTBD tube, melena, or hematemesis with drop in Hb)",
      "Contrast-enhanced CT angiography or catheter cholangiogram delineating vascular-biliary fistula site",
      "Platelet count >= 50,000/uL; INR <= 1.5; PRBC cross-matched",
      "2.0-2.4F microcatheter and 0.014\"-0.018\" detachable microcoils ready"
    ],
    "preOpCriteriaHi": [
      "ड्रेनेज नली में ताजा खून आने और हीमोग्लोबिन गिरने की पुष्टि",
      "सीटी एंजियोग्राफी द्वारा खून बहने वाली नस की सटीक पहचान",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5; खून तैयार रखना",
      "माइक्रो-कैथेटर और सूक्ष्म छल्ले (Coils) तैयार रखना"
    ],
    "fastingHours": 4,
    "hydrationProtocolEn": "IV fluids running to maintain hemodynamic stability.",
    "hydrationProtocolHi": "ब्लड प्रेशर सामान्य बनाए रखने हेतु ड्रिप।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5; Maintain Hb >= 8.0 g/dL.",
    "bloodProductsTargetHi": "हीमोग्लोबिन 8 से अधिक रखना; प्लेटलेट्स 50,000 से अधिक।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV + Inj Metronidazole 500mg IV 1 hour prior.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Superselectively cannulate the offending arterial or venous pedicle using 0.014\" steerable microguidewire.",
      "Deploy detachable microcoils across the fistula neck ('front and back door' technique to prevent collateral refilling).",
      "Perform completion DSA and check cholangiogram: verify complete cessation of blood extravasation into biliary ducts.",
      "Flush PTBD tube gently with saline to clear old intrabiliary clots."
    ],
    "specialPrecautionsHi": [
      "अति-बारीक तार से सीधे खून बहने वाली नस के मुंह तक पहुंचना।",
      "छल्लों को छेद के आगे और पीछे दोनों तरफ लगाना ताकि किसी अन्य शाखा से खून न आए।",
      "एक्स-रे पर जांच कर पक्का करना कि पित्त नली में खून का रिसाव पूरी तरह बंद हो चुका है।",
      "ड्रेनेज नली को हल्के सलाइन से साफ करना ताकि पुराने थक्के निकल जाएं।"
    ]
  },
  "selective-hepatic-artery-embolization-hemobilia": {
    "procedureId": "selective-hepatic-artery-embolization-hemobilia",
    "procedureName": "Hepatic Artery Embolization for Hemobilia",
    "preOpCriteriaEn": [
      "Hemobilia or unexplained acute post-biopsy drop in hemoglobin documented",
      "Triphasic CT angiography demonstrating pseudoaneurysm or active contrast extravasation in liver",
      "Coagulation profile checked; Platelets >= 50,000/uL; INR <= 1.5; PRBC transfusing",
      "5F diagnostic catheters and 2.0-2.4F microcatheters ready"
    ],
    "preOpCriteriaHi": [
      "बायोप्सी या चोट के बाद हीमोग्लोबिन तेजी से गिरने की पुष्टि",
      "सीटी एंजियोग्राफी पर लिवर की नस फटने या गुब्बारा बनने की जांच",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.5; खून चढ़ाने की व्यवस्था",
      "माइक्रो-कैथेटर और छल्ले तैयार रखना"
    ],
    "fastingHours": 4,
    "hydrationProtocolEn": "IV fluids titrated with blood products to maintain systolic BP > 90 mmHg.",
    "hydrationProtocolHi": "ब्लड प्रेशर सामान्य बनाए रखने हेतु ड्रिप व रक्त चढ़ाना।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.5; Keep Hb >= 8.0 g/dL with blood transfusions.",
    "bloodProductsTargetHi": "हीमोग्लोबिन 8 से अधिक रखना; प्लेटलेट्स 50,000 से अधिक।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 1g IV + Inj Metronidazole 500mg IV 1 hour prior.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 1 ग्राम + मेट्रोनिडाजोल 500 मिलीग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Isolate neck of pseudoaneurysm; perform sandwich embolization (coiling distal and proximal to breach) to prevent collateral back-bleeding.",
      "Perform completion DSA of entire hepatic tree to ensure complete devascularization of pseudoaneurysm.",
      "Post-procedure 6 hours strict bed rest with puncture site compression.",
      "Monitor hemoglobin and hematocrit at 4, 8, and 24 hours post-embolization."
    ],
    "specialPrecautionsHi": [
      "फूली हुई नस के आगे और पीछे दोनों तरफ छल्ले लगाना ताकि उल्टी दिशा से खून न आए।",
      "एक्स-रे पर पूरी तरह खून रुकने की पुष्टि करना।",
      "जांघ पर पट्टी और 6 घंटे का बेड रेस्ट।",
      "प्रक्रिया के 4, 8 और 24 घंटे बाद हीमोग्लोबिन की जांच।"
    ]
  },
  "trans-splenic-portal-access-salvage": {
    "procedureId": "trans-splenic-portal-access-salvage",
    "procedureName": "Trans-Splenic Portal Venous Access",
    "preOpCriteriaEn": [
      "Contrast CT/MRI documenting chronic portal vein occlusion with failure of prior transhepatic/transjugular recanalization",
      "Spleen size documented (splenomegaly facilitates safe splenic parenchymal puncture)",
      "Platelet count >= 50,000/uL; INR <= 1.4",
      "Coils and Gelfoam/glue ready for immediate tract embolization upon sheath retrieval"
    ],
    "preOpCriteriaHi": [
      "सीटी स्कैन पर बंद पोर्टल नस की पुष्टि और अन्य रास्तों के असफल होने का इतिहास",
      "सोनोग्राफी पर तिल्ली का बढ़ा होना (जिससे सुई लगाना आसान और सुरक्षित हो जाता है)",
      "प्लेटलेट्स >= 50,000/uL; INR <= 1.4",
      "तिल्ली का छेद बंद करने हेतु कॉइल्स और जेलफोम तैयार रखना"
    ],
    "fastingHours": 6,
    "hydrationProtocolEn": "IV 0.9% Normal Saline 100 mL/h during procedure.",
    "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 100 mL/घंटा।",
    "bloodProductsTargetEn": "Platelets >= 50,000/uL; INR <= 1.4; 2 units PRBC cross-matched.",
    "bloodProductsTargetHi": "प्लेटलेट्स >= 50,000/uL; 2 यूनिट ब्लड तैयार रखना।",
    "antibioticProphylaxisEn": "Inj Ceftriaxone 2g IV 1 hour prior to splenic puncture.",
    "antibioticProphylaxisHi": "सेफ्ट्रिएक्सोन 2 ग्राम नस द्वारा।",
    "specialPrecautionsEn": [
      "Puncture a peripheral splenic vein branch under real-time ultrasound guidance using 21G micropuncture needle.",
      "Systemic heparin anticoagulation (5000 IU) administered once wire crosses into portal system.",
      "Mandatory coil and Gelfoam/glue embolization of the intrasplenic parenchymal tract during sheath withdrawal to prevent hemoperitoneum.",
      "Bed rest for 6 hours; post-procedure abdominal ultrasound at 4 hours to confirm hemostasis."
    ],
    "specialPrecautionsHi": [
      "सोनोग्राफी पर देखकर तिल्ली के बाहरी किनारे की नस में 21G की बारीक सुई डालना।",
      "नस पार होते ही खून पतला करने का हेपारिन इंजेक्शन लगाना।",
      "नली बाहर निकालते समय तिल्ली के सुई वाले रास्ते को कॉइल और जेल से 100% पक्का सील करना।",
      "6 घंटे का बेड रेस्ट और 4 घंटे बाद सोनोग्राफी द्वारा पेट में खून न होने की पुष्टि।"
    ]
  }
};

export function getOncologyHbpConsentTemplate(id: string): ProcedureConsentTemplate | undefined {
  return ONCOLOGY_AND_HBP_CONSENT_TEMPLATES[id];
}

export function getOncologyHbpClinicalPrep(id: string): ProcedureClinicalPreparation | undefined {
  return ONCOLOGY_AND_HBP_CLINICAL_PREP[id];
}

// Aliases for flexible imports
export const ONCOLOGY_HBP_CONSENT_TEMPLATES = ONCOLOGY_AND_HBP_CONSENT_TEMPLATES;
export const ONCOLOGY_HBP_CLINICAL_PREP = ONCOLOGY_AND_HBP_CLINICAL_PREP;

export default ONCOLOGY_AND_HBP_CONSENT_TEMPLATES;
