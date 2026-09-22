/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 *
 * Statutory Bilingual (Hindi & English) Informed Consent Templates
 * for 104 Non-Vascular Interventional Radiology Procedures:
 * - Category 1: Image-Guided Percutaneous Biopsies & Cytology (1 to 53)
 * - Category 2: Catheter Drainages, Fluid Aspiration & Stenting (54 to 91)
 * - Category 20: Gastrointestinal & Enteric Interventions (92 to 104)
 *
 * Compliant with National Medical Commission (NMC), Indian Medical Council,
 * and Supreme Court Guidelines (Samira Kohli vs. Dr. Prabha Manchanda Standard).
 */

import { ProcedureConsentTemplate } from '../consentData';

export const NON_VASCULAR_CONSENT_TEMPLATES: Record<string, ProcedureConsentTemplate> = {
  "usg-liver-biopsy-parenchymal": {
    "id": "usg-liver-biopsy-parenchymal",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Liver Biopsy (Non-targeted Parenchymal / Medical Liver)",
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
  },
  "usg-focal-liver-lesion-biopsy": {
    "id": "usg-focal-liver-lesion-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Focal Liver Lesion Core Needle Biopsy",
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
  },
  "usg-liver-transplant-biopsy": {
    "id": "usg-liver-transplant-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Liver Allograft / Transplant Protocol Biopsy",
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
  },
  "usg-liver-abscess-infiltrative-biopsy": {
    "id": "usg-liver-abscess-infiltrative-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Liver Abscess Wall / Infiltrative Mass Biopsy",
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
  },
  "tglb-transjugular-liver-biopsy": {
    "id": "tglb-transjugular-liver-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Transjugular Liver Biopsy (TGLB)",
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
  },
  "usg-native-kidney-biopsy": {
    "id": "usg-native-kidney-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Native Kidney Biopsy (Cortical Core)",
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
  },
  "usg-renal-transplant-biopsy": {
    "id": "usg-renal-transplant-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Renal Allograft / Transplant Biopsy",
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
  },
  "usg-renal-mass-core-biopsy": {
    "id": "usg-renal-mass-core-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Renal Mass Core Needle Biopsy",
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
  },
  "ct-renal-mass-core-biopsy": {
    "id": "ct-renal-mass-core-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "CT-Guided Renal Mass Core Needle Biopsy",
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
  },
  "usg-native-spleen-core-biopsy": {
    "id": "usg-native-spleen-core-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Native Spleen Core Biopsy",
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
  },
  "ct-splenic-lesion-biopsy": {
    "id": "ct-splenic-lesion-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "CT-Guided Splenic Lesion Biopsy",
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
  },
  "usg-pancreatic-mass-core-biopsy": {
    "id": "usg-pancreatic-mass-core-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Pancreatic Mass Core Biopsy",
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
  },
  "ct-pancreatic-mass-biopsy": {
    "id": "ct-pancreatic-mass-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "CT-Guided Pancreatic Head / Body / Tail Mass Biopsy",
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
      "गांठ में केवल कड़ा रेशा (Stroma) आने पर दोबारा जांच की आवश्यकता (<5%)।"
    ],
    "alternativesEn": "Endoscopic ultrasound biopsy (EUS-FNB), diagnostic surgical laparoscopy/laparotomy, or empirical systemic therapy.",
    "alternativesHi": "दूरबीन द्वारा एंडोस्कोपिक बायोप्सी (EUS), ऑपरेशन करके टुकड़ा लेना, या केवल अंदाजे से दवा देना।",
    "sedationTypeEn": "Local anesthesia with monitored IV conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की शामक दवा।"
  },
  "eus-fna-fnb-pancreas": {
    "id": "eus-fna-fnb-pancreas",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Endoscopic Ultrasound-Guided Fine Needle Aspiration / Biopsy (EUS-FNA/FNB) of Pancreas",
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
  },
  "ct-lung-core-biopsy-coaxial": {
    "id": "ct-lung-core-biopsy-coaxial",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "CT-Guided Percutaneous Lung Core Needle Biopsy (Coaxial Technique)",
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
  },
  "ct-lung-fnac": {
    "id": "ct-lung-fnac",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "CT-Guided Percutaneous Lung Fine Needle Aspiration (FNAC)",
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
  },
  "usg-subpleural-lung-biopsy": {
    "id": "usg-subpleural-lung-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Peripheral Subpleural Lung Biopsy",
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
  },
  "ct-mediastinal-mass-biopsy": {
    "id": "ct-mediastinal-mass-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "CT-Guided Mediastinal Mass Core Needle Biopsy (Anterior, Middle, Posterior)",
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
  },
  "ct-pleural-mass-biopsy": {
    "id": "ct-pleural-mass-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "CT-Guided Pleural Mass / Thickening Biopsy",
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
  },
  "ct-adrenal-gland-biopsy": {
    "id": "ct-adrenal-gland-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "CT-Guided Adrenal Gland Core Needle Biopsy",
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
  },
  "ct-retroperitoneal-mass-biopsy": {
    "id": "ct-retroperitoneal-mass-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "CT-Guided Retroperitoneal Mass / Lymph Node Biopsy",
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
  },
  "ct-deep-pelvic-presacral-biopsy": {
    "id": "ct-deep-pelvic-presacral-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "CT-Guided Deep Pelvic / Presacral Mass Biopsy",
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
  },
  "usg-mesenteric-omental-biopsy": {
    "id": "usg-mesenteric-omental-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Mesenteric Mass / Omental Cake Biopsy",
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
  },
  "usg-peritoneal-deposit-biopsy": {
    "id": "usg-peritoneal-deposit-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Peritoneal Deposit Biopsy",
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
  },
  "usg-thyroid-fnac": {
    "id": "usg-thyroid-fnac",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Thyroid Fine Needle Aspiration Cytology (FNAC)",
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
  },
  "usg-thyroid-core-biopsy": {
    "id": "usg-thyroid-core-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Thyroid Core Needle Biopsy (CNB)",
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
  },
  "usg-parathyroid-fnac-pth-washout": {
    "id": "usg-parathyroid-fnac-pth-washout",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Parathyroid Mass FNAC with Parathyroid Hormone (PTH) Washout",
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
  },
  "usg-cervical-ln-fnac-washout": {
    "id": "usg-cervical-ln-fnac-washout",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Cervical Lymph Node FNAC with Thyroglobulin / Calcitonin Washout",
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
  },
  "usg-cervical-ln-core-biopsy": {
    "id": "usg-cervical-ln-core-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Cervical Lymph Node Core Needle Biopsy",
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
  },
  "usg-salivary-gland-fnac": {
    "id": "usg-salivary-gland-fnac",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Salivary Gland (Parotid / Submandibular) FNAC",
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
  },
  "usg-salivary-gland-core-biopsy": {
    "id": "usg-salivary-gland-core-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Salivary Gland Core Needle Biopsy",
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
  },
  "usg-breast-core-biopsy-14g": {
    "id": "usg-breast-core-biopsy-14g",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Breast Core Needle Biopsy (14-Gauge Automated)",
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
  },
  "usg-breast-vabb": {
    "id": "usg-breast-vabb",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Breast Vacuum-Assisted Core Biopsy (VABB)",
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
  },
  "stereotactic-breast-vabb": {
    "id": "stereotactic-breast-vabb",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Stereotactic / Tomosynthesis-Guided Vacuum-Assisted Breast Biopsy",
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
  },
  "mri-breast-biopsy": {
    "id": "mri-breast-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "MRI-Guided Breast Core Needle / Vacuum Biopsy",
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
  },
  "trus-prostate-biopsy-12core": {
    "id": "trus-prostate-biopsy-12core",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Transrectal Prostate Biopsy (TRUS-Biopsy, 12-Core Systematic)",
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
  },
  "mri-us-fusion-transperineal-prostate-biopsy": {
    "id": "mri-us-fusion-transperineal-prostate-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "MRI-Ultrasound Fusion Targeted Transperineal Prostate Biopsy",
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
  },
  "mri-us-fusion-transrectal-prostate-biopsy": {
    "id": "mri-us-fusion-transrectal-prostate-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "MRI-Ultrasound Fusion Targeted Transrectal Prostate Biopsy",
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
  },
  "ct-bone-biopsy-jamshidi": {
    "id": "ct-bone-biopsy-jamshidi",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "CT-Guided Bone Biopsy with Jamshidi Trephine Needle",
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
  },
  "ct-bone-biopsy-mechanical-drill": {
    "id": "ct-bone-biopsy-mechanical-drill",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "CT-Guided Bone Biopsy with Powered Mechanical Drill (Bonopty / OnControl)",
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
  },
  "ct-sclerotic-vertebral-biopsy": {
    "id": "ct-sclerotic-vertebral-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "CT-Guided Sclerotic Vertebral Body Core Biopsy",
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
  },
  "ct-lytic-vertebral-biopsy": {
    "id": "ct-lytic-vertebral-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "CT-Guided Lytic Vertebral Lesion Biopsy",
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
  },
  "ct-sacral-iliac-bone-biopsy": {
    "id": "ct-sacral-iliac-bone-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "CT-Guided Sacral / Iliac Bone Core Biopsy",
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
  },
  "ct-appendicular-bone-biopsy": {
    "id": "ct-appendicular-bone-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "CT-Guided Appendicular Skeleton Bone Biopsy",
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
  },
  "usg-soft-tissue-extremity-biopsy": {
    "id": "usg-soft-tissue-extremity-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Soft Tissue Extremity Mass Core Needle Biopsy",
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
  },
  "usg-subcutaneous-nodule-fnac": {
    "id": "usg-subcutaneous-nodule-fnac",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Subcutaneous Nodule FNAC",
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
  },
  "usg-subcutaneous-mass-core-biopsy": {
    "id": "usg-subcutaneous-mass-core-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Subcutaneous Lipomatous / Fibrous Mass Core Biopsy",
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
  },
  "usg-superficial-ln-fnac": {
    "id": "usg-superficial-ln-fnac",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Superficial Lymph Node (Axillary, Inguinal, Supraclavicular) FNAC",
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
  },
  "usg-superficial-ln-core-biopsy": {
    "id": "usg-superficial-ln-core-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Ultrasound-Guided Superficial Lymph Node Core Biopsy",
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
  },
  "fluoroscopic-endobiliary-forceps-biopsy": {
    "id": "fluoroscopic-endobiliary-forceps-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Fluoroscopic Endobiliary Forceps Biopsy",
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
  },
  "fluoroscopic-endobiliary-brush-cytology": {
    "id": "fluoroscopic-endobiliary-brush-cytology",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Fluoroscopic Endobiliary Brush Cytology",
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
  },
  "transvascular-endomyocardial-biopsy": {
    "id": "transvascular-endomyocardial-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Transvascular Endomyocardial Biopsy (Right Ventricular Septal)",
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
  },
  "transvenous-renal-mass-biopsy": {
    "id": "transvenous-renal-mass-biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "nameEn": "Transvenous Renal Mass Biopsy",
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
  },
  "usg-liver-abscess-aspiration": {
    "id": "usg-liver-abscess-aspiration",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Ultrasound-Guided Liver Abscess Aspiration",
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
  },
  "pcd-amebic-liver-abscess": {
    "id": "pcd-amebic-liver-abscess",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Ultrasound-Guided Percutaneous Catheter Drainage (PCD) of Amebic Liver Abscess",
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
  },
  "pcd-pyogenic-liver-abscess": {
    "id": "pcd-pyogenic-liver-abscess",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Ultrasound-Guided Percutaneous Catheter Drainage of Pyogenic Liver Abscess",
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
  },
  "usg-hydatid-cyst-pair": {
    "id": "usg-hydatid-cyst-pair",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Ultrasound-Guided Percutaneous Drainage of Hydatid Cyst (PAIR Technique)",
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
  },
  "modified-pair-pd-hydatid-cyst": {
    "id": "modified-pair-pd-hydatid-cyst",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Modified PAIR-PD (Percutaneous Aspiration, Injection, Re-aspiration with Drainage) of Hydatid Cyst",
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
  },
  "ct-subdiaphragmatic-abscess-drainage": {
    "id": "ct-subdiaphragmatic-abscess-drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "CT-Guided Percutaneous Subdiaphragmatic Abscess Drainage",
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
  },
  "ct-subhepatic-abscess-drainage": {
    "id": "ct-subhepatic-abscess-drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "CT-Guided Percutaneous Subhepatic Abscess Drainage",
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
  },
  "ct-pancreatic-pseudocyst-drainage": {
    "id": "ct-pancreatic-pseudocyst-drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "CT-Guided Percutaneous Pancreatic Pseudocyst Drainage",
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
  },
  "ct-wopn-drainage": {
    "id": "ct-wopn-drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "CT-Guided Percutaneous Walled-Off Pancreatic Necrosis (WOPN) Drainage",
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
  },
  "stepup-percutaneous-pancreatic-necrosectomy": {
    "id": "stepup-percutaneous-pancreatic-necrosectomy",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Percutaneous Catheter Debridement / Step-Up Necrosectomy for Infected Pancreatic Necrosis",
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
  },
  "ct-splenic-abscess-drainage": {
    "id": "ct-splenic-abscess-drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "CT-Guided Percutaneous Splenic Abscess Drainage",
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
  },
  "ct-retroperitoneal-psoas-abscess-drainage": {
    "id": "ct-retroperitoneal-psoas-abscess-drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "CT-Guided Percutaneous Retroperitoneal / Psoas Abscess Drainage",
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
  },
  "usg-iliopsoas-abscess-drainage": {
    "id": "usg-iliopsoas-abscess-drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Ultrasound-Guided Iliopsoas Abscess Catheter Drainage",
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
  },
  "usg-transabdominal-pelvic-abscess-drainage": {
    "id": "usg-transabdominal-pelvic-abscess-drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Ultrasound-Guided Transabdominal Pelvic Abscess Drainage",
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
  },
  "usg-transrectal-pelvic-abscess-drainage": {
    "id": "usg-transrectal-pelvic-abscess-drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Ultrasound-Guided Transrectal Pelvic Abscess Catheter Drainage",
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
  },
  "usg-transvaginal-pelvic-abscess-drainage": {
    "id": "usg-transvaginal-pelvic-abscess-drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Ultrasound-Guided Transvaginal Pelvic Abscess Catheter Drainage",
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
  },
  "ct-gluteal-infragluteal-deep-pelvic-abscess-drainage": {
    "id": "ct-gluteal-infragluteal-deep-pelvic-abscess-drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "CT-Guided Gluteal / Infragluteal Deep Pelvic Abscess Drainage",
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
  },
  "usg-diagnostic-paracentesis": {
    "id": "usg-diagnostic-paracentesis",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Ultrasound-Guided Paracentesis (Diagnostic)",
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
  },
  "usg-therapeutic-large-volume-paracentesis": {
    "id": "usg-therapeutic-large-volume-paracentesis",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Ultrasound-Guided Large-Volume Therapeutic Paracentesis with Albumin Replacement",
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
  },
  "tunneled-peritoneal-catheter-placement-ascites": {
    "id": "tunneled-peritoneal-catheter-placement-ascites",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Tunneled Peritoneal Drainage Catheter Placement (PleurX / Rocket) for Malignant Ascites",
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
  },
  "peritoneovenous-denver-shunt-placement": {
    "id": "peritoneovenous-denver-shunt-placement",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Peritoneovenous Shunt Placement (Denver Shunt)",
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
  },
  "usg-thoracentesis-diagnostic-therapeutic": {
    "id": "usg-thoracentesis-diagnostic-therapeutic",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Ultrasound-Guided Thoracentesis (Diagnostic & Therapeutic)",
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
  },
  "small-bore-pigtail-insertion-pleural-effusion": {
    "id": "small-bore-pigtail-insertion-pleural-effusion",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Small-Bore Pigtail Catheter Insertion for Pleural Effusion",
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
  },
  "large-bore-icd-insertion-hemothorax-empyema": {
    "id": "large-bore-icd-insertion-hemothorax-empyema",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Large-Bore Intercostal Drain (ICD) Insertion for Hemothorax / Empyema",
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
  },
  "intracavitary-fibrinolytic-therapy-loculated-empyema": {
    "id": "intracavitary-fibrinolytic-therapy-loculated-empyema",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Image-Guided Intracavitary Fibrinolytic / Enzyme Therapy for Loculated Empyema (tPA/DNase)",
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
  },
  "tunneled-pleural-catheter-placement-effusion": {
    "id": "tunneled-pleural-catheter-placement-effusion",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Tunneled Pleural Drainage Catheter Placement (PleurX) for Refractory Malignant Pleural Effusion",
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
  },
  "pcd-lung-abscess": {
    "id": "pcd-lung-abscess",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Percutaneous Catheter Drainage of Lung Abscess",
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
  },
  "pcd-pneumothorax-heimlich-valve-placement": {
    "id": "pcd-pneumothorax-heimlich-valve-placement",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Percutaneous Catheter Drainage of Pneumothorax (Aspiration & Heimlich Valve Placement)",
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
  },
  "usg-pericardiocentesis-diagnostic-evacuative": {
    "id": "usg-pericardiocentesis-diagnostic-evacuative",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Ultrasound-Guided Pericardiocentesis (Diagnostic & Evacuative)",
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
  },
  "indwelling-pericardial-catheter-malignant-effusion": {
    "id": "indwelling-pericardial-catheter-malignant-effusion",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Indwelling Pericardial Catheter Placement for Malignant Pericardial Effusion",
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
  },
  "pcd-urinoma-drainage": {
    "id": "pcd-urinoma-drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Percutaneous Catheter Drainage of Urinoma",
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
  },
  "pcd-biloma-drainage": {
    "id": "pcd-biloma-drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Percutaneous Catheter Drainage of Biloma",
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
  },
  "pcd-lymphocele-drainage": {
    "id": "pcd-lymphocele-drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Percutaneous Drainage of Lymphocele",
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
  },
  "percutaneous-lymphocele-sclerotherapy": {
    "id": "percutaneous-lymphocele-sclerotherapy",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Percutaneous Lymphocele Sclerotherapy (Ethanol, Doxycycline, Bleomycin, Povidone-Iodine)",
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
  },
  "pcd-retroperitoneal-hematoma-aspiration": {
    "id": "pcd-retroperitoneal-hematoma-aspiration",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Percutaneous Aspiration and Drainage of Retroperitoneal Hematoma",
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
  },
  "usg-soft-tissue-muscle-hematoma-evacuation": {
    "id": "usg-soft-tissue-muscle-hematoma-evacuation",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Ultrasound-Guided Soft Tissue / Muscle Hematoma Evacuation",
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
  },
  "sclerotherapy-simple-hepatic-cysts": {
    "id": "sclerotherapy-simple-hepatic-cysts",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Sclerotherapy of Simple Hepatic Cysts",
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
  },
  "sclerotherapy-adpkd-renal-cysts": {
    "id": "sclerotherapy-adpkd-renal-cysts",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "nameEn": "Sclerotherapy of Autosomal Dominant Polycystic Kidney Disease (ADPKD) Cysts",
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
  },
  "prg-gastropexy-t-fasteners": {
    "id": "prg-gastropexy-t-fasteners",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "nameEn": "Percutaneous Radiologic Gastrostomy (PRG) with Gastropexy T-Fasteners",
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
  },
  "direct-percutaneous-radiologic-jejunostomy": {
    "id": "direct-percutaneous-radiologic-jejunostomy",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "nameEn": "Direct Percutaneous Radiologic Jejunostomy (PRJ)",
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
  },
  "prgj-catheter-insertion": {
    "id": "prgj-catheter-insertion",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "nameEn": "Percutaneous Radiologic Gastrojejunostomy (PRGJ) Catheter Insertion",
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
  },
  "fluoroscopic-exchange-repositioning-gj-tubes": {
    "id": "fluoroscopic-exchange-repositioning-gj-tubes",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "nameEn": "Fluoroscopy-Guided Exchange and Repositioning of Gastrojejunostomy Tubes",
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
  },
  "balloon-dilatation-esophageal-peptic-strictures": {
    "id": "balloon-dilatation-esophageal-peptic-strictures",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "nameEn": "Balloon Dilatation of Esophageal Anastomotic / Peptic Strictures",
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
  },
  "esophageal-covered-sems-deployment": {
    "id": "esophageal-covered-sems-deployment",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "nameEn": "Percutaneous Deployment of Covered Self-Expanding Metal Stents (SEMS) for Esophageal Carcinoma",
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
  },
  "closure-tracheoesophageal-bronchoesophageal-fistulas": {
    "id": "closure-tracheoesophageal-bronchoesophageal-fistulas",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "nameEn": "Endovascular / Radiologic Closure of Tracheoesophageal and Bronchoesophageal Fistulas",
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
  },
  "balloon-dilatation-gastroduodenal-strictures": {
    "id": "balloon-dilatation-gastroduodenal-strictures",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "nameEn": "Balloon Dilatation of Benign Gastroduodenal Strictures",
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
  },
  "percutaneous-enteral-stenting-malignant-outlet-obstruction": {
    "id": "percutaneous-enteral-stenting-malignant-outlet-obstruction",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "nameEn": "Percutaneous Enteral Stenting for Malignant Gastric Outlet Obstruction (Enteral SEMS)",
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
  },
  "colonic-sems-deployment-malignant-obstruction": {
    "id": "colonic-sems-deployment-malignant-obstruction",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "nameEn": "Transanal / Fluoroscopic Deployment of Colonic SEMS for Malignant Bowel Obstruction",
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
  },
  "balloon-dilatation-colonic-anastomotic-strictures": {
    "id": "balloon-dilatation-colonic-anastomotic-strictures",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "nameEn": "Fluoroscopy-Guided Balloon Dilation of Colonic Anastomotic Strictures",
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
  },
  "percutaneous-cecostomy-colonic-pseudo-obstruction": {
    "id": "percutaneous-cecostomy-colonic-pseudo-obstruction",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "nameEn": "Percutaneous Cecostomy for Colonic Pseudo-Obstruction (Ogilvie Syndrome)",
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
  },
  "fluoroscopic-nasojejunal-feeding-tube-placement": {
    "id": "fluoroscopic-nasojejunal-feeding-tube-placement",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "nameEn": "Fluoroscopic Nasojejunal (NJ) Feeding Tube Placement with Steerable Guidewire",
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
};

export function getNonVascularConsentTemplate(id: string): ProcedureConsentTemplate | undefined {
  return NON_VASCULAR_CONSENT_TEMPLATES[id];
}

export default NON_VASCULAR_CONSENT_TEMPLATES;
