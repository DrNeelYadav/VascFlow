/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 * 
 * Statutory Bilingual (Hindi & English) Informed Consent Data Catalog
 * Compliant with National Medical Commission (NMC), Indian Medical Council &
 * Supreme Court Guidelines (Samira Kohli vs. Dr. Prabha Manchanda Standard).
 */

export interface ProcedureConsentTemplate {
  id: string;
  category: string;
  nameEn: string;
  nameHi: string;
  indicationEn: string;
  indicationHi: string;
  descriptionEn: string;
  descriptionHi: string;
  benefitsEn: string[];
  benefitsHi: string[];
  specificRisksEn: string[];
  specificRisksHi: string[];
  alternativesEn: string;
  alternativesHi: string;
  sedationTypeEn: string;
  sedationTypeHi: string;
}

export const GENERAL_RISKS_EN = [
  "Bleeding, hematoma (blood collection), or swelling at the catheter puncture site (Groin / Neck / Arm).",
  "Pain, localized discomfort, or bruising requiring pain medications.",
  "Infection at the puncture site or systemic bacteremia requiring antibiotic therapy.",
  "Allergic reaction to iodinated contrast media (ranging from skin hives/itching to severe bronchospasm or anaphylaxis).",
  "Contrast-Induced Nephropathy / Acute Kidney Injury (temporary or permanent decline in renal filtration).",
  "Vascular injury, arterial spasm, dissection, thrombosis, or pseudoaneurysm formation.",
  "Vasovagal reaction (sudden drop in blood pressure and heart rate during needle puncture or balloon inflation).",
  "Technical failure or inability to successfully complete the procedure due to anatomical complexity.",
  "Rare requirement for emergency open vascular surgery, blood transfusion, or Intensive Care Unit (ICU) admission."
];

export const GENERAL_RISKS_HI = [
  "कैथेटर डालने के स्थान (जांघ / गर्दन / हाथ) पर रक्तस्राव, हेमेटोमा (खून का थक्का जमना) अथवा सूजन होना।",
  "प्रक्रिया स्थल पर दर्द, असहजता या नील पड़ना जिसके लिए दर्द निवारक दवाइयों की आवश्यकता हो सकती है।",
  "संक्रमण (Infection) अथवा रक्त में जीवाणु संक्रमण (Bacteremia) जिसके लिए एंटीबायोटिक उपचार की आवश्यकता हो सकती है।",
  "कंट्रास्ट डाई से एलर्जी (हल्की खुजली/चकत्तों से लेकर सांस लेने में अत्यधिक तकलीफ या एनाफिलेक्सिस तक)।",
  "कंट्रास्ट द्वारा गुर्दों (किडनी) पर प्रभाव / रीनल डैमेज, विशेष रूप से पूर्व-मौजूदा किडनी रोग या मधुमेह के रोगियों में।",
  "रक्तवाहिनी में चोट, सिकुड़न (Spasm), आंतरिक परत का फटना (Dissection), थक्का जमना अथवा स्यूडोएन्यूरिज्म बनना।",
  "वेसोवेगल प्रतिक्रिया (सुई अथवा बैलून फुलाने के समय अचानक रक्तचाप एवं धड़कन कम होना)।",
  "शारीरिक विकृति या नसों की जटिल बनावट के कारण प्रक्रिया का तकनीकी रूप से असफल होना।",
  "अत्यंत दुर्लभ परिस्थितियों में आपातकालीन ओपन सर्जरी, रक्त चढ़ाने (Blood Transfusion) या आईसीयू (ICU) में भर्ती की आवश्यकता।"
];

export const STATUTORY_DECLARATION_EN = {
  voluntaryConsentTitle: "PATIENT & LEGAL GUARDIAN VOLUNTARY DECLARATION",
  understandingClause: "I hereby declare that the nature of my illness, the purpose and steps of the proposed interventional procedure, the expected benefits, potential complications, and alternative medical/surgical treatment options have been explained to me in detail by the doctor in a language that I fully understand (Hindi / English / Mother tongue).",
  questionClause: "I have had ample opportunity to ask questions regarding the procedure, anesthesia, risks, recovery period, and potential need for emergency interventions. All my questions have been answered to my complete satisfaction.",
  bloodTransfusionClause: "I authorize the administration of local anesthesia, sedation, pain relief medications, iodinated contrast media, and blood or blood products if deemed medically necessary during the course of the procedure.",
  emergencyClause: "I understand that unforeseen medical emergencies or acute clinical deterioration may occur during interventional radiology procedures. In such an event, I authorize the clinical team to administer resuscitation, emergency medications, intubation, ICU transfer, or emergency open surgical conversion as deemed necessary to preserve life.",
  noGuaranteeClause: "I understand that the practice of medicine and interventional radiology is not an exact science, and no guarantee or assurance has been given to me by anyone regarding the absolute success or complete cure from this procedure.",
  signatureClause: "I voluntarily and of my own free will give my informed consent for this procedure without any pressure, duress, or undue influence."
};

export const STATUTORY_DECLARATION_HI = {
  voluntaryConsentTitle: "मरीज एवं विधिक अभिभावक / परिजन की स्वैच्छिक घोषणा",
  understandingClause: "मैं एतद्द्वारा यह घोषणा करता/करती हूँ कि मुझे मेरी बीमारी, प्रस्तावित इंटरवेंशनल प्रक्रिया के उद्देश्य, प्रक्रिया के तरीके, संभावित लाभ, ज्ञात जोखिम एवं जटिलताओं तथा उपलब्ध वैकल्पिक उपचार विधियों के बारे में डॉक्टर द्वारा मेरी समझ में आने वाली सरल भाषा (हिंदी/मातृभाषा) में भली-भांति समझा दिया गया है।",
  questionClause: "मुझे इस प्रक्रिया, बेहोशी (एनेस्थीसिया), जोखिमों एवं संभावित आपातकालीन परिस्थितियों के संबंध में प्रश्न पूछने का पूरा अवसर दिया गया है तथा मेरे सभी प्रश्नों का संतोषजनक उत्तर प्राप्त हुआ है।",
  bloodTransfusionClause: "मैं प्रक्रिया के दौरान आवश्यकता पड़ने पर स्थानीय सुन्नता (Local Anesthesia), बेहोशी की दवाइयां (Sedation), कंट्रास्ट डाई, तथा जीवन रक्षक रक्त अथवा रक्त अवयव (Blood Products) चढ़ाने की पूर्ण सहमति प्रदान करता/करती हूँ।",
  emergencyClause: "मैं भली-भांति समझता/समझती हूँ कि प्रक्रिया के दौरान अप्रत्याशित आपातकालीन स्थिति उत्पन्न हो सकती है। ऐसी स्थिति में मरीज का जीवन बचाने हेतु डॉक्टरों द्वारा रिससिटेशन, आईसीयू (ICU) में भर्ती, सांस नली डालना अथवा आपातकालीन ओपन सर्जरी करने की पूरी अनुमति देता/देती हूँ।",
  noGuaranteeClause: "मैं समझता/समझती हूँ कि चिकित्सा विज्ञान एवं इंटरवेंशनल तकनीक में पूर्ण सफलता अथवा बीमारी से शत-प्रतिशत मुक्ति की कोई निश्चित गारंटी नहीं दी जा सकती है, और मुझे ऐसी कोई झूठी गारंटी नहीं दी गई है।",
  signatureClause: "मैंने इस सहमति पत्र को स्वयं पढ़ लिया है / मुझे पढ़कर सुना व समझा दिया गया है। मैं बिना किसी दबाव, भय या अनुचित प्रभाव के पूर्ण होशोहवास में स्वेच्छा से अपनी सहमति प्रदान करता/करती हूँ।"
};

export const PROCEDURE_CONSENT_TEMPLATES: Record<string, ProcedureConsentTemplate> = {
  tips: {
    id: "tips",
    category: "Hepatobiliary & Portal Hypertension",
    nameEn: "Transjugular Intrahepatic Portosystemic Shunt (TIPS / DIPS)",
    nameHi: "ट्रांसजुगुलर इंट्राहेपेटिक पोर्टोसिस्टेमिक शंट (टिप्स / डिप्स - यकृत की नसों का बाईपास स्टेंट)",
    indicationEn: "Cirrhosis with recurrent/refractory variceal bleeding or tense refractory ascites unresponsive to medical therapy.",
    indicationHi: "लिवर सिरोसिस के कारण पेट में अत्यधिक पानी भरना (रिफ्रैक्ट्री असाइटिस) अथवा भोजन की नली में बार-बार नसों का फटना व खून की उल्टी होना।",
    descriptionEn: "Under fluoroscopic X-ray and ultrasound guidance, a small tube (catheter) is inserted through the internal jugular vein in the neck into the liver. A needle is used to create a channel between the hepatic vein and portal vein inside the liver, which is then held open using a specialized covered metallic stent-graft (Gore Viatorr) to decompress portal high pressure.",
    descriptionHi: "यह एक बिना चीर-फाड़ की तकनीक है जिसमें गले की नस (जुगुलर वेन) के माध्यम से एक बारीक कैथेटर डालकर एक्स-रे एवं सोनोग्राफी की मदद से लिवर के अंदर हेपेटिक वेन और पोर्टल वेन के बीच एक नया रास्ता बनाया जाता है। इस रास्ते में एक विशेष आवरणयुक्त धातु का स्टेंट (Viatorr Stent) लगाया जाता है ताकि लिवर का बढ़ा हुआ रक्तचाप सामान्य हो सके।",
    benefitsEn: [
      "Substantial reduction in portal hypertension, preventing life-threatening gastrointestinal variceal bleeding.",
      "Significant improvement or resolution of refractory ascites, reducing the need for repeated abdominal fluid taps (paracentesis).",
      "Bridge to liver transplantation or long-term symptom relief without open abdominal surgery."
    ],
    benefitsHi: [
      "पोर्टल हाइपरटेंशन कम होना, जिससे जानलेवा खून की उल्टी अथवा काले मल का खतरा बहुत कम हो जाता है।",
      "पेट में पानी (असाइटिस) भरने की समस्या में भारी कमी, जिससे बार-बार पेट से पानी निकालने की जरूरत नहीं पड़ती।",
      "बिना पेट का बड़ा ऑपरेशन किए लिवर ट्रांसप्लांट तक का सुरक्षित विकल्प।"
    ],
    specificRisksEn: [
      "Hepatic Encephalopathy: Altered mental state, confusion, lethargy, or sleep disturbances (15-30% cases, usually manageable with medications).",
      "Intraperitoneal Hemorrhage: Bleeding into the abdominal cavity from liver puncture requiring blood transfusion or urgent embolization.",
      "Acute stent thrombosis or early occlusion requiring re-intervention / catheter thrombectomy.",
      "Hemobilia: Bleeding into the biliary ducts presenting as jaundice or melena.",
      "Right-sided heart strain or congestive cardiac failure due to sudden increase in venous return."
    ],
    specificRisksHi: [
      "हेपेटिक एन्सेफैलोपैथी: मानसिक भ्रम, अत्यधिक सुस्ती, नींद में बदलाव अथवा बेहोशी (15-30% मामलों में, दवाओं द्वारा नियंत्रित)।",
      "पेट के भीतर आंतरिक रक्तस्राव: लिवर में सुई लगने से पेट में खून बहना, जिसके लिए खून चढ़ाने या नस बंद करने की जरूरत पड़ सकती है।",
      "स्टेंट का बंद होना: स्टेंट में खून का थक्का जमने से उसका अवरुद्ध होना, जिसे दोबारा प्रक्रिया करके खोलना पड़ सकता है।",
      "पित्त की नली में रक्तस्राव (हीमोबिलिया): पीलिया अथवा मल में खून आना।",
      "अचानक खून का बहाव दिल की तरफ बढ़ने से हृदय पर दबाव अथवा हार्ट फेलियर का जोखिम।"
    ],
    alternativesEn: "Medical therapy with non-selective beta blockers, repeated endoscopic band ligation (EVBL), repeated large-volume paracentesis with albumin, surgical portosystemic shunt, or emergent liver transplantation.",
    alternativesHi: "दवाइयां (बीटा-ब्लॉकर्स), एंडोस्कोपी द्वारा बार-बार छल्ले (Banding) लगाना, बार-बार पेट से सुई द्वारा पानी निकालना, ओपन शंट सर्जरी अथवा लिवर ट्रांसप्लांट।",
    sedationTypeEn: "Conscious Sedation with Local Anesthesia or Monitored Anesthesia Care (MAC) / General Anesthesia.",
    sedationTypeHi: "गले में स्थानीय सुन्नता का इंजेक्शन (Local Anesthesia) एवं हल्की बेहोशी/शांत करने की दवाइयां (Conscious Sedation) अथवा पूर्ण बेहोशी।"
  },
  tace: {
    id: "tace",
    category: "Interventional Oncology",
    nameEn: "Transcatheter Arterial Chemoembolization (cTACE / DEB-TACE)",
    nameHi: "ट्रांसकैथेटर आर्टीरियल कीमोएम्बोलाइजेशन (टीएसीई / लिवर की गांठ में कीमोथेरेपी एवं नस बंदी)",
    indicationEn: "Primary liver cancer (Hepatocellular Carcinoma / HCC) or hypervascular liver metastases not amenable to curative surgical resection.",
    indicationHi: "लिवर का कैंसर (हेपेटोसेलुलर कार्सिनोमा - HCC) अथवा लिवर में फैली गांठें जिन्हें ऑपरेशन द्वारा काटना संभव न हो।",
    descriptionEn: "Under local anesthesia and fluoroscopic guidance, a microcatheter is guided from the femoral artery in the groin directly into the small arterial branches supplying the liver tumor. Anti-cancer chemotherapeutic medication (Doxorubicin) mixed with Lipiodol or drug-eluting beads is delivered directly into the tumor, followed by embolizing particles (Gelfoam/Beads) to cut off the tumor's blood supply.",
    descriptionHi: "जांघ की नस (फेमोरल धमनी) से एक सूक्ष्म कैथेटर एक्स-रे की सहायता से लिवर की रसोली (ट्यूमर) को खून पहुंचाने वाली महीन नसों तक ले जाया जाता है। वहां कैंसर रोधी कीमोथेरेपी दवा (Doxorubicin) और लिपिओडोल सीधे गांठ में छोड़ी जाती है तथा नसों को कणों (Embolic agents) द्वारा बंद कर दिया जाता है ताकि कैंसर की खुराक बंद हो जाए।",
    benefitsEn: [
      "Direct targeted delivery of high-dose chemotherapy inside the tumor with minimal systemic side effects compared to intravenous chemo.",
      "Ischemic necrosis (starvation) and shrinkage of the liver tumor, stabilizing disease and prolonging survival.",
      "Potential downstaging to make the patient eligible for curative liver resection or transplant."
    ],
    benefitsHi: [
      "कीमोथेरेपी की अधिकतम मात्रा सीधे गांठ में पहुंचती है, जिससे पूरे शरीर पर नस द्वारा दी जाने वाली कीमो जैसा दुष्प्रभाव (जैसे बाल झड़ना, अत्यधिक उल्टी) नहीं होता।",
      "गांठ को मिलने वाला खून बंद होने से गांठ सिकुड़ती है एवं कैंसर का बढ़ना रुकता है।",
      "गांठ छोटी होने पर आगे चलकर लिवर ऑपरेशन अथवा ट्रांसप्लांट का अवसर बन सकता है।"
    ],
    specificRisksEn: [
      "Post-Embolization Syndrome (PES): Fever, severe right upper abdominal pain, nausea, and vomiting for 24-72 hours (expected in 60-80% cases).",
      "Transient or permanent hepatic decompensation (worsening jaundice, ascites, or encephalopathy).",
      "Liver abscess or ischemic necrosis requiring prolonged antibiotic therapy or percutaneous drainage.",
      "Non-target embolization to gallbladder (acute ischemic cholecystitis), stomach, or pancreas.",
      "Bone marrow suppression (temporary drop in white blood cells or platelets) from chemotherapy."
    ],
    specificRisksHi: [
      "पोस्ट-एम्बोलाइजेशन सिंड्रोम: प्रक्रिया के बाद 1 से 3 दिन तक बुखार, पेट के ऊपरी दाहिने हिस्से में तेज दर्द, जी मिचलाना व उल्टी (अधिकांश मरीजों में संभावित)।",
      "लिवर के कार्य में अस्थायी गिरावट: पीलिया बढ़ना, पेट में पानी आना या सुस्ती आना।",
      "लिवर में मवाद/फोड़ा (Abscess) बनना, जिसके लिए एंटीबायोटिक या नली डालकर मवाद निकालने की आवश्यकता हो सकती है।",
      "दवा का किसी अन्य अंग (जैसे पित्ताशय/पित्त की थैली, आमाशय) में चले जाना जिससे वहां सूजन या घाव हो सकता है।",
      "कीमोथेरेपी दवा के कारण रक्त कणिकाओं (WBC/Platelets) में अस्थायी गिरावट।"
    ],
    alternativesEn: "Surgical liver resection, liver transplantation, systemic targeted oral therapy (Sorafenib / Lenvatinib / Immunotherapy), percutaneous thermal ablation (RFA/MWA), or best supportive palliative care.",
    alternativesHi: "लिवर की गांठ का चीर-फाड़ वाला ऑपरेशन, लिवर ट्रांसप्लांट, कैंसर की अंग्रेजी गोलियां (Sorafenib/Lenvatinib/Immunotherapy), सुई द्वारा गांठ जलाना (RFA), अथवा केवल दर्द निवारक देखभाल।",
    sedationTypeEn: "Local Anesthesia at groin puncture with intravenous analgesia and antiemetic conscious sedation.",
    sedationTypeHi: "जांघ में सुन्न करने का इंजेक्शन (Local Anesthesia) तथा दर्द एवं उल्टी रोकने वाली शामक दवाइयां।"
  },
  bae: {
    id: "bae",
    category: "Thoracic & Vascular Interventions",
    nameEn: "Bronchial Artery Embolization (BAE)",
    nameHi: "ब्रोंकियल आर्टीरियल एम्बोलाइजेशन (बीएई - फेफड़ों से खून की उल्टी रोकने हेतु नस बंदी)",
    indicationEn: "Severe, recurrent, or life-threatening hemoptysis (coughing up blood) secondary to tuberculosis, bronchiectasis, aspergilloma, or lung cancer.",
    indicationHi: "खांसी में अत्यधिक या बार-बार खून आना (हीमोप्टाइसिस), टीबी (Tuberculosis), ब्रोन्किइक्टेसिस, फंगस की गांठ अथवा फेफड़े के कैंसर के कारण।",
    descriptionEn: "Under local anesthesia and fluoroscopy, a catheter is inserted through the femoral artery in the groin into the aorta and directed into the abnormal, hypertrophied bronchial arteries supplying the bleeding lung area. Embolic PVA particles or micro-coils are injected to occlude the abnormal vessels and arrest active bleeding.",
    descriptionHi: "जांघ की नस से कैथेटर फेफड़ों को खून पहुंचाने वाली ब्रोंकियल धमनियों में डाला जाता है। एक्स-रे पर खून बहने वाली असामान्य नसों को पहचानकर विशेष कणों (PVA Particles) अथवा सूक्ष्म छल्लों (Coils) द्वारा उन्हें बंद कर दिया जाता है ताकि खून आना तुरंत रुक सके।",
    benefitsEn: [
      "Immediate, life-saving cessation of massive hemoptysis (success rate 85-95%).",
      "Avoidance of emergency high-risk open thoracotomy / lung resection in unstable patients.",
      "Preservation of remaining lung parenchyma."
    ],
    benefitsHi: [
      "जानलेवा खांसी में खून आने की स्थिति में तुरंत राहत (85% से 95% सफलता दर)।",
      "गंभीर स्थिति में फेफड़े के बड़े व जोखिम भरे ऑपरेशन से बचाव।",
      "स्वस्थ फेफड़े को नुकसान पहुंचाए बिना केवल खून बहने वाली नस का सटीक उपचार।"
    ],
    specificRisksEn: [
      "Non-target embolization to Anterior Spinal Artery (Adamkiewicz artery) potentially leading to spinal cord ischemia or paraplegia (lower limb paralysis - rare, <0.5-1%, but severe).",
      "Pleuritic chest pain, retrosternal burning, and low-grade fever lasting 24-48 hours.",
      "Transient dysphagia (difficulty swallowing) due to shared esophageal arterial branches.",
      "Recurrent hemoptysis over months to years due to collateral vessel revascularization (10-20%).",
      "Bronchial wall necrosis or mediastinal extravasation (extremely rare)."
    ],
    specificRisksHi: [
      "रीढ़ की हड्डी (Spinal Cord) की नस में कण जाने का दुर्लभ खतरा (<1%), जिससे दोनों पैरों में कमजोरी या पक्षाघात (Paralysis) हो सकता है (अत्यंत सावधानी बरती जाती है)।",
      "छाती में दर्द, सीने में भारीपन व हल्का बुखार जो 1 से 2 दिन रह सकता है।",
      "खाना निगलने में अस्थायी कठिनाई (भोजन नली की शाखाओं के कारण)।",
      "कुछ महीनों या वर्षों बाद नई नसें बनने से दोबारा खांसी में खून आना (10-20% संभावना)।",
      "सांस की नली की दीवार में क्षति का अत्यंत दुर्लभ जोखिम।"
    ],
    alternativesEn: "Conservative medical management (cough suppressants, antifibrinolytics/tranexamic acid, antibiotics), rigid bronchoscopy with balloon tamponade, or emergency open thoracic lung resection (lobectomy).",
    alternativesHi: "दवाइयों द्वारा इलाज (Tranexamic acid, एंटीबायोटिक), ब्रोंकोस्कोपी द्वारा नली डालना अथवा फेफड़े का बड़ा ऑपरेशन (Lobectomy)।",
    sedationTypeEn: "Local anesthesia with mild intravenous sedation.",
    sedationTypeHi: "जांघ में स्थानीय सुन्नता का इंजेक्शन एवं हल्की शामक दवाइयां।"
  },
  ptbd: {
    id: "ptbd",
    category: "Hepatobiliary Interventions",
    nameEn: "Percutaneous Transhepatic Biliary Drainage (PTBD) & Stenting",
    nameHi: "परक्यूटेनियस ट्रांसहेपेटिक बिलियरी ड्रेनेज (पीटीबीडी - पित्त की नली में बाहर से ड्रेनेज अथवा स्टेंट डालना)",
    indicationEn: "Obstructive jaundice with dilated intrahepatic biliary ducts due to bile duct cancer (cholangiocarcinoma), gallbladder cancer, periampullary carcinoma, or surgical strictures.",
    indicationHi: "पित्त की नली में रुकावट के कारण गंभीर पीलिया (Obstructive Jaundice), खुजली, पित्त नली का कैंसर, पित्ताशय का कैंसर या ऑपरेशन के बाद नली का सिकुड़ना।",
    descriptionEn: "Under local anesthesia, ultrasound, and fluoroscopy, a thin needle is passed through the right or left lateral chest/abdominal wall directly into an obstructed intrahepatic bile duct. A guidewire is negotiated past the obstruction into the small intestine, and an external-internal drainage catheter or self-expanding metallic stent (SEMS) is deployed to restore normal bile flow.",
    descriptionHi: "पेट अथवा पसली के दाहिने हिस्से से सुन्न करने का इंजेक्शन देकर सोनोग्राफी व एक्स-रे की निगरानी में लिवर की पित्त नली में एक बारीक सुई डाली जाती है। तार की मदद से रुकावट को पार करते हुए एक प्लास्टिक की ड्रेनेज नली अथवा धातु की जाली (Metallic Stent) स्थापित की जाती है जिससे पित्त आंतों में अथवा बाहर थैली में बह सके।",
    benefitsEn: [
      "Rapid reduction in serum bilirubin, relieving intractable pruritus (severe itching) and preventing liver failure.",
      "Clearance of biliary sepsis / suppurative cholangitis.",
      "Essential step to allow palliative chemotherapy or planned radical surgery."
    ],
    benefitsHi: [
      "पीलिया (Bilirubin) में त्वरित गिरावट, जिससे असहनीय खुजली से तुरंत राहत मिलती है और लिवर फेल होने से बचता है।",
      "पित्त में इन्फेक्शन (Cholangitis) और गंभीर सेप्सिस का खात्मा।",
      "आगे की कीमोथेरेपी अथवा बड़े ऑपरेशन के लिए मरीज की शारीरिक स्थिति को सुदृढ़ बनाना।"
    ],
    specificRisksEn: [
      "Biliary sepsis, high-grade fever with rigors/chills requiring intensive IV antibiotics (10-15%).",
      "Hemobilia (bleeding into the bile ducts or drainage tube) requiring conservative monitoring or transcatheter arterial embolization.",
      "Bile leak into the abdominal cavity causing localized peritonitis or biloma.",
      "Pneumothorax / Hemothorax (air or blood in lung space) when accessing via intercostal route.",
      "External tube dislodgement, blockage by sludge, or skin excoriation requiring repositioning."
    ],
    specificRisksHi: [
      "पित्त में संक्रमण (Sepsis): तेज कंपकंपी के साथ बुखार आना, जिसके लिए तेज एंटीबायोटिक दवाओं की आवश्यकता होती है।",
      "पित्त नली से रक्तस्राव (Hemobilia): ड्रेनेज नली में खून आना, जिसे रोकने हेतु कभी-कभी नस बंद करने की प्रक्रिया करनी पड़ सकती है।",
      "पेट में पित्त का रिसाव (Bile Leak): पेट में दर्द अथवा सूजन।",
      "पसली के रास्ते सुई जाने पर फेफड़े में हवा (Pneumothorax) या पानी/खून का रिसाव।",
      "नली का अपनी जगह से खिसकना, पित्त के गाद से नली का बंद होना अथवा त्वचा पर छाले होना।"
    ],
    alternativesEn: "Endoscopic Retrograde Cholangiopancreatography (ERCP) with endoscopic biliary stenting, surgical biliary bypass (hepaticojejunostomy), or supportive medical management.",
    alternativesHi: "मुंह के रास्ते दूरबीन द्वारा पित्त की नली में स्टेंट डालना (ERCP), चीर-फाड़ द्वारा बाईपास सर्जरी अथवा केवल लक्षण निवारक दवाइयां।",
    sedationTypeEn: "Local Anesthesia with IV conscious sedation and broad-spectrum IV antibiotic cover.",
    sedationTypeHi: "स्थानीय सुन्नता का इंजेक्शन, दर्द निवारक शामक दवाइयां एवं नस द्वारा एंटीबायोटिक।"
  },
  uae: {
    id: "uae",
    category: "Gynecological & Pelvic Interventions",
    nameEn: "Uterine Artery Embolization (UAE / UFE)",
    nameHi: "यूटेराइन आर्टीरियल एम्बोलाइजेशन (यूएई / बच्चेदानी की रसौली - फाइब्रॉएड की नस बंदी)",
    indicationEn: "Symptomatic uterine leiomyomata (fibroids) with menorrhagia/pelvic pressure, uterine adenomyosis, or intractable postpartum hemorrhage (PPH).",
    indicationHi: "बच्चेदानी में रसौली (Uterine Fibroids) के कारण अत्यधिक व दर्दनाक माहवारी, पेट में भारीपन, अथवा प्रसव के बाद अत्यधिक रक्तस्राव (PPH)।",
    descriptionEn: "Under local anesthesia via a tiny puncture in the groin or wrist, a microcatheter is guided into both uterine arteries supplying the fibroids. Spherical embolic microspheres are injected to shut off the arterial blood supply to the fibroids, causing them to shrink and die while preserving the normal uterus.",
    descriptionHi: "जांघ अथवा कलाई की नस में एक छोटे से सुई के छेद द्वारा बारीक कैथेटर बच्चेदानी की रसौली को खून देने वाली दोनों नसों तक पहुंचाया जाता है। वहां विशेष सूक्ष्म कण छोड़कर रसौली की खून की आपूर्ति बंद कर दी जाती है, जिससे रसौली सिकुड़कर खत्म हो जाती है और बच्चेदानी सुरक्षित बच जाती है।",
    benefitsEn: [
      "Uterus-preserving non-surgical procedure: No surgical scar, no removal of the uterus (hysterectomy).",
      "Rapid resolution of heavy menstrual bleeding (90% success) and reduction in fibroid bulk.",
      "Minimal hospital stay (usually 24 hours) and fast return to normal activities (1-2 weeks)."
    ],
    benefitsHi: [
      "बिना बच्चेदानी निकाले रसौली का संपूर्ण इलाज: पेट पर कोई बड़ा चीरा या टांका नहीं लगता।",
      "माहवारी में अत्यधिक रक्तस्राव से 90% से अधिक महिलाओं को स्थायी राहत।",
      "अस्पताल में केवल 1 दिन का ठहराव एवं 1-2 सप्ताह में सामान्य दिनचर्या में वापसी।"
    ],
    specificRisksEn: [
      "Post-procedure ischemic pelvic cramping pain and nausea (significant in first 12-24 hours, managed with PCA/analgesia).",
      "Vaginal discharge or passage of necrotic fibroid tissue over subsequent weeks to months.",
      "Post-embolization low-grade fever.",
      "Premature menopause / ovarian dysfunction due to non-target utero-ovarian anastomotic flow (1-5%, higher in women >45 yrs).",
      "Uterine infection / endometritis requiring antibiotics or, very rarely, hysterectomy."
    ],
    specificRisksHi: [
      "प्रक्रिया के बाद 12 से 24 घंटे तक पेडू में तेज मरोड़/दर्द एवं जी मिचलाना (दवाइयों द्वारा नियंत्रित किया जाता है)।",
      "कुछ हफ्तों तक योनि मार्ग से स्राव अथवा रसौली के मृत टुकड़ों का बाहर निकलना।",
      "प्रक्रिया के बाद हल्का बुखार।",
      "अंडकोष (Ovary) पर प्रभाव से माहवारी का जल्दी बंद होना (45 वर्ष से अधिक उम्र में 1-5% संभावना)।",
      "बच्चेदानी में संक्रमण, जिसके लिए एंटीबायोटिक अथवा अत्यंत दुर्लभ मामलों में बच्चेदानी निकालने की जरूरत पड़ सकती है।"
    ],
    alternativesEn: "Total or subtotal abdominal/laparoscopic hysterectomy (removal of uterus), myomectomy (surgical removal of fibroids), medical therapy (hormones, tranexamic acid, GnRH analogues), or endometrial ablation.",
    alternativesHi: "बच्चेदानी निकालने का ऑपरेशन (Hysterectomy), दूरबीन द्वारा केवल रसौली निकालना (Myomectomy), अथवा हॉर्मोनल दवाइयां/इंजेक्शन।",
    sedationTypeEn: "Local anesthesia with IV analgesia, antiemetic cover, and conscious sedation.",
    sedationTypeHi: "जांघ में सुन्नता का इंजेक्शन, नस द्वारा दर्द निवारक एवं शामक दवाइयां।"
  },
  biopsy: {
    id: "biopsy",
    category: "Non-Vascular Interventions",
    nameEn: "Percutaneous Image-Guided Core Needle Biopsy",
    nameHi: "इमेज-गाइडेड कोर नीडल बायोप्सी (सीटी अथवा सोनोग्राफी द्वारा मांस का टुकड़ा निकालना)",
    indicationEn: "Tissue diagnosis and histopathological / molecular typing of suspicious masses in liver, lung, kidney, retroperitoneum, or soft tissue.",
    indicationHi: "लिवर, फेफड़े, गुर्दे, पेट के पीछे या किसी अन्य अंग में बनी गांठ/रसोली की जांच (कैंसर अथवा टीबी आदि का पता लगाने हेतु)।",
    descriptionEn: "Under local anesthesia and real-time CT scan or ultrasound guidance, a specialized biopsy needle is precisely introduced through the skin into the target lesion to obtain tiny tissue cores for laboratory pathological analysis.",
    descriptionHi: "गांठ वाले स्थान पर सुन्न करने का इंजेक्शन देकर सीटी स्कैन अथवा सोनोग्राफी की सीधी निगरानी में एक बारीक बायोप्सी सुई द्वारा गांठ से जांच हेतु मांस का एक अत्यंत छोटा टुकड़ा निकाला जाता है।",
    benefitsEn: [
      "Accurate definitive histological diagnosis without requiring open diagnostic surgery.",
      "Enables targeted precision oncological therapy, chemotherapy, or tuberculosis treatment.",
      "Outpatient or short daycare procedure."
    ],
    benefitsHi: [
      "बिना कोई बड़ा चीरा लगाए बीमारी (कैंसर, टीबी आदि) की सटीक व पक्की जांच।",
      "सही दवा एवं उपचार तुरंत शुरू करने में अत्यंत सहायक।",
      "कुछ ही घंटों में मरीज को छुट्टी मिल जाती है।"
    ],
    specificRisksEn: [
      "Localized pain, soreness, and minor skin bruising at the needle puncture site.",
      "Internal bleeding or hematoma in the biopsied organ.",
      "Pneumothorax (air leak causing lung collapse) during lung/thoracic biopsy (10-25%, ~5% requiring temporary intercostal chest tube).",
      "Hemoptysis (coughing up blood) after lung biopsy.",
      "Inadequate or non-diagnostic tissue sample requiring repeat biopsy (<5-10%).",
      "Needle tract tumor seeding (extremely rare, <0.01%)."
    ],
    specificRisksHi: [
      "सुई लगने की जगह पर हल्का दर्द, सूजन अथवा नील पड़ना।",
      "संबंधित अंग के अंदर खून का रिसाव या थक्का जमना।",
      "फेफड़े की बायोप्सी में फेफड़े से हवा का रिसाव (Pneumothorax - 10-20%), जिसमें लगभग 5% मरीजों में छाती में पतली नली डालने की जरूरत पड़ सकती है।",
      "फेफड़े की बायोप्सी के बाद थूक में थोड़ा खून आना।",
      "मांस का नमूना जांच हेतु अपर्याप्त निकलना, जिससे दोबारा जांच की जरूरत पड़ सकती है (<5-10%)।",
      "सुई के रास्ते में कैंसर के कण फैलने का अत्यंत दुर्लभ खतरा।"
    ],
    alternativesEn: "Surgical diagnostic open/laparoscopic excision biopsy, endoscopic biopsy (bronchoscopy / EUS), or empirical medical treatment without tissue confirmation.",
    alternativesHi: "चीरा लगाकर गांठ निकालना (Surgical Biopsy), दूरबीन द्वारा जांच (Endoscopy), अथवा बिना बायोप्सी के अंदाजे से दवा शुरू करना।",
    sedationTypeEn: "Local anesthesia with subcutaneous lidocaine infiltration (mild conscious sedation if requested/anxious).",
    sedationTypeHi: "सुई लगाने के स्थान पर स्थानीय सुन्नता (Local Anesthesia) का इंजेक्शन (आवश्यकता पड़ने पर हल्का शामक)।"
  },
  pcn: {
    id: "pcn",
    category: "Genitourinary Interventions",
    nameEn: "Percutaneous Nephrostomy (PCN) & Antegrade Stenting",
    nameHi: "परक्यूटेनियस नेफ्रोस्टॉमी (पीसीएन - गुर्दे से सीधे पेशाब की नली डालना)",
    indicationEn: "Obstructive uropathy with hydronephrosis due to ureteric stones, cervical/bladder malignancies, retroperitoneal fibrosis, or pyonephrosis.",
    indicationHi: "पेशाब की नली में रुकावट के कारण गुर्दे में पेशाब का जमाव (Hydronephrosis), पथरी, कैंसर अथवा गुर्दे में मवाद (Pyonephrosis) के कारण गुर्दे खराब होने का खतरा।",
    descriptionEn: "Under local anesthesia and ultrasound/fluoroscopy guidance, a needle is guided through the flank into the renal collecting system (pelvicalyceal system). A soft pigtail drainage catheter is positioned to divert urine externally into a bag, relieving pressure and saving kidney function.",
    descriptionHi: "कमर के पिछले हिस्से में सुन्न करने का इंजेक्शन देकर सोनोग्राफी व एक्स-रे की मदद से गुर्दे की पेशाब की थैली में एक बारीक सुई डाली जाती है। तार की मदद से एक मुड़ी हुई नली (Pigtail Catheter) स्थापित कर पेशाब को बाहर थैली में निकाला जाता है जिससे गुर्दे की सूजन व दबाव कम हो सके।",
    benefitsEn: [
      "Immediate decompression of blocked kidney, preventing permanent irreversible renal failure.",
      "Rapid drainage of infected urine (pyonephrosis), treating life-threatening urosepsis.",
      "Alleviation of severe flank pain."
    ],
    benefitsHi: [
      "रुके हुए गुर्दे से दबाव तुरंत कम होना, जिससे गुर्दे स्थायी रूप से खराब होने से बचते हैं।",
      "संक्रमित पेशाब व मवाद का तुरंत निकास, जिससे जानलेवा इन्फेक्शन से बचाव होता है।",
      "कमर के असहनीय दर्द से त्वरित राहत।"
    ],
    specificRisksEn: [
      "Hematuria (blood in urine) - commonly transient, rarely severe requiring embolization.",
      "Perinephric hematoma or urine leak around the kidney.",
      "Post-procedure fever and septicemia.",
      "Pneumothorax or pleural transgression in high intercostal punctures.",
      "Catheter kink, blockage, or accidental slippage requiring tube exchange."
    ],
    specificRisksHi: [
      "पेशाब में खून आना (अधिकतर मामलों में 1-2 दिन में स्वतः ठीक हो जाता है, दुर्लभ में नस बंद करने की जरूरत)।",
      "गुर्दे के आसपास खून या पेशाब का रिसाव।",
      "प्रक्रिया के बाद कंपकंपी के साथ बुखार या इन्फेक्शन।",
      "ऊंची पसली से सुई जाने पर फेफड़े के पर्दे में चोट।",
      "नली का मुड़ना, बंद होना या बाहर खिंच जाना, जिसके लिए नली बदलनी पड़ सकती है।"
    ],
    alternativesEn: "Retrograde ureteric double-J (DJ) stenting via cystoscopy, open/laparoscopic nephrostomy, or urgent hemodialysis.",
    alternativesHi: "पेशाब के रास्ते दूरबीन द्वारा डीजे स्टेंट (DJ Stent) डालना अथवा चीर-फाड़ वाला ऑपरेशन।",
    sedationTypeEn: "Local infiltration anesthesia combined with intravenous analgesia and conscious sedation.",
    sedationTypeHi: "कमर के हिस्से में स्थानीय सुन्नता (Local Anesthesia) का इंजेक्शन एवं नस द्वारा दर्द निवारक व शामक दवा।"
  },
  fistuloplasty: {
    id: "fistuloplasty",
    category: "Dialysis & Venous Access",
    nameEn: "Dialysis AV Fistula / Graft Outflow Angioplasty (Fistuloplasty)",
    nameHi: "डायलिसिस फिस्टुलोप्लास्टी (डायलिसिस फिस्टुला की नस को गुब्बारे द्वारा खोलना)",
    indicationEn: "Stenosis, poor dialysis flow rates (<300 mL/min), elevated venous pressures, or arm swelling in hemodialysis patients.",
    indicationHi: "डायलिसिस के फिस्टुला की नस का सिकुड़ जाना, डायलिसिस सही से न होना, मशीन में अत्यधिक प्रेशर आना अथवा हाथ में अत्यधिक सूजन होना।",
    descriptionEn: "Under local anesthesia and real-time X-ray guidance, a small sheath is placed into the dialysis fistula. A high-pressure non-compliant balloon catheter is navigated across the narrowed segment and inflated to 20-30 atmospheres pressure to stretch open the stenosis and salvage the fistula.",
    descriptionHi: "फिस्टुला की नस में सुन्न करके एक बारीक नली डाली जाती है। एक्स-रे पर नस की सिकुड़न देखकर एक विशेष उच्च-दाब गुब्बारा (High Pressure Balloon) वहां ले जाकर फुलाया जाता है जिससे नस का रास्ता दोबारा चौड़ा हो जाता है और फिस्टुला काम करने लगता है।",
    benefitsEn: [
      "Salvage of existing dialysis access, avoiding placement of painful temporary neck catheters.",
      "Restoration of adequate dialysis blood flow and resolution of limb swelling.",
      "Non-surgical procedure done under local anesthesia."
    ],
    benefitsHi: [
      "वर्तमान फिस्टुला को बंद होने से बचाना, जिससे गले में दर्दनाक अस्थायी डायलिसिस नली (Catheter) डालने की जरूरत नहीं पड़ती।",
      "डायलिसिस सही रफ्तार से होने लगना एवं हाथ की सूजन खत्म होना।",
      "बिना किसी बड़े ऑपरेशन के स्थानीय सुन्नता में तुरंत सफल उपचार।"
    ],
    specificRisksEn: [
      "Vessel rupture or extravasation during balloon inflation (requiring prolonged balloon tamponade or emergency covered stent placement).",
      "Early re-thrombosis or failure to achieve adequate lumen expansion.",
      "Access site hematoma or pseudoaneurysm formation.",
      "Venous spasm or transient chest discomfort during central vein plasty."
    ],
    specificRisksHi: [
      "गुब्बारा फुलाते समय अत्यधिक दबाव से नस का फटना (नस में विशेष कवर्ड स्टेंट लगाकर तुरंत बंद किया जाता है)।",
      "प्रक्रिया के तुरंत बाद नस में दोबारा खून का थक्का जमना।",
      "सुई लगने की जगह पर खून का थक्का जमना या सूजन।",
      "छाती की मुख्य नस खोलते समय सीने में अस्थायी भारीपन महसूस होना।"
    ],
    alternativesEn: "Creation of a new surgical AV fistula on the other arm, surgical patch angioplasty, or placement of a tunneled hemodialysis catheter (Permacath).",
    alternativesHi: "दूसरे हाथ पर नया फिस्टुला बनाना, नस का चीर-फाड़ वाला ऑपरेशन, अथवा गले में पक्का डायलिसिस कैथेटर (Permacath) डालना।",
    sedationTypeEn: "Local infiltration anesthesia at the access site with IV analgesia / conscious sedation as needed during high-pressure balloon inflation.",
    sedationTypeHi: "नस में सुई लगाने की जगह पर स्थानीय सुन्नता, तथा गुब्बारा फुलाते समय दर्द से राहत हेतु नस द्वारा दर्द निवारक दवा।"
  },
  varicose: {
    id: "varicose",
    category: "Peripheral Venous Interventions",
    nameEn: "Endovenous Laser / Radiofrequency Ablation (EVLA / RFA) for Varicose Veins",
    nameHi: "वेरिकोज वेन्स का लेजर / रेडियोफ्रीक्वेंसी उपचार (पैरों की उभरी व खराब नसों को अंदर से बंद करना)",
    indicationEn: "Symptomatic lower limb varicose veins with saphenofemoral incompetence, leg heaviness, stasis dermatitis, or non-healing venous ulcers.",
    indicationHi: "पैरों में नसों का गुच्छा बनना, उभरी हुई नीली नसें, पैरों में दर्द, भारीपन, त्वचा का काला पड़ना अथवा न भरने वाले पैर के घाव (Venous Ulcer)।",
    descriptionEn: "Under local tumescent anesthesia and ultrasound guidance, a thin laser or radiofrequency fiber is inserted into the diseased saphenous vein through a 2mm puncture. Heat energy is delivered along the vein to permanently seal it shut, redirecting venous blood to healthy deep veins.",
    descriptionHi: "पैर की खराब नस में सोनोग्राफी की मदद से एक बारीक लेजर फाइबर या तार डाला जाता है। नस के चारों ओर सुन्न करने वाला तरल डालकर लेजर की गर्मी से खराब नस को अंदर से स्थायी रूप से सील कर दिया जाता है। खून स्वतः स्वस्थ नसों से बहने लगता है।",
    benefitsEn: [
      "Complete elimination of unsightly bulging veins and prompt relief of leg heaviness and pain.",
      "No surgical incisions, no surgical stripping, minimal bruising.",
      "Walk-in walk-out daycare procedure; patient ambulates immediately after."
    ],
    benefitsHi: [
      "पैरों की उभरी व बदसूरत नसों से पूर्ण छुटकारा तथा दर्द व भारीपन से तुरंत आराम।",
      "कोई चीरा या टांका नहीं, कोई घाव नहीं।",
      "डे-केयर प्रक्रिया: मरीज प्रक्रिया के तुरंत बाद अपने पैरों पर चलकर घर जा सकता है।"
    ],
    specificRisksEn: [
      "Skin burns or hyperpigmentation along the treated vein course.",
      "Saphenous or sural nerve paresthesia (temporary numbness or tingling sensation in foot/ankle).",
      "Superficial thrombophlebitis (firm, tender vein cord for 1-2 weeks).",
      "Endovenous Heat-Induced Thrombosis (EHIT) or deep vein thrombosis (DVT - rare, <1%).",
      "Recurrence of tributary veins over time."
    ],
    specificRisksHi: [
      "त्वचा पर हल्का खिंचाव, जलन अथवा त्वचा का रंग हल्का गहरा होना।",
      "पैर के तलवे या पंजे में अस्थायी सुन्नपन अथवा झनझनाहट (नसों में खिंचाव के कारण)।",
      "बंद की गई नस में कुछ दिनों तक कड़ापन व हल्का दर्द।",
      "गहरी नस में खून का थक्का जमना (DVT - अत्यंत दुर्लभ, <1%)।",
      "भविष्य में पैरों की अन्य छोटी नसों का उभरना।"
    ],
    alternativesEn: "High surgical ligation and stripping of saphenous vein, ultrasound-guided foam sclerotherapy alone, or lifelong medical compression stockings.",
    alternativesHi: "चीरा लगाकर नस को खींचकर बाहर निकालने का पुराना ऑपरेशन (Stripping), केवल फोम इंजेक्शन द्वारा नस बंद करना, अथवा जीवन भर तंग मोजे (Stockings) पहनना।",
    sedationTypeEn: "Tumescent local anesthesia along the perivenous sheath with optional light conscious sedation.",
    sedationTypeHi: "नस के चारों ओर विशेष सुन्न करने वाला तरल (Tumescent Anesthesia) तथा आवश्यकतानुसार हल्का शामक।"
  },
  evar: {
    id: "evar",
    category: "Aortic & Complex Endovascular",
    nameEn: "Endovascular Aneurysm Repair (EVAR / TEVAR)",
    nameHi: "एंडोवैस्कुलर एओर्टिक एन्यूरिज्म रिपेयर (इवार / महाधमनी की थैली में स्टेंट ग्राफ्ट लगाना)",
    indicationEn: "Abdominal or Thoracic Aortic Aneurysm (AAA / TAA) at high risk of fatal rupture, or acute aortic dissection.",
    indicationHi: "छाती अथवा पेट की मुख्य महाधमनी (Aorta) का गुब्बारे की तरह फूल जाना अथवा फटने का खतरा (Aneurysm/Dissection)।",
    descriptionEn: "Under regional or general anesthesia, through a percutaneous access in the groins, a large covered metallic stent-graft is guided inside the aorta under fluoroscopy and deployed across the aneurysm to exclude the high-pressure arterial flow from the weakened aortic wall.",
    descriptionHi: "जांघ की दोनों नसों के माध्यम से एक्स-रे की निगरानी में एक विशेष मजबूत धातु की जाली व कपड़े से बना स्टेंट-ग्राफ्ट महाधमनी के अंदर ले जाकर फुलाया जाता है। यह स्टेंट फूली हुई कमजोर नस को अंदर से सहारा देकर रक्त के सीधे दबाव से अलग कर देता है जिससे नस फटने से बच जाती है।",
    benefitsEn: [
      "Prevents catastrophic, fatal rupture of the aorta without extensive open chest or abdominal surgery.",
      "Significantly reduced mortality, blood loss, and recovery time compared to open surgery.",
      "Shorter ICU and hospital stay."
    ],
    benefitsHi: [
      "महाधमनी फटने के जानलेवा खतरे से बचाव, बिना छाती या पेट का बड़ा ऑपरेशन किए।",
      "ओपन सर्जरी की तुलना में रक्तस्राव एवं मृत्यु के जोखिम में भारी कमी।",
      "कम समय में तेज रिकवरी और अस्पताल से शीघ्र छुट्टी।"
    ],
    specificRisksEn: [
      "Endoleak (persistent blood flow into the aneurysm sac around the graft, requiring surveillance or re-intervention).",
      "Graft migration, limb occlusion, or stent collapse.",
      "Vascular access site injury (femoral artery dissection, thrombosis, or rupture requiring surgical repair).",
      "Renal impairment from contrast or coverage of accessory renal arteries.",
      "Lower limb or pelvic ischemia; rare paraplegia in TEVAR.",
      "Conversion to emergency open surgical aortic repair."
    ],
    specificRisksHi: [
      "एंडोलीक (Endoleak): स्टेंट के किनारे से थैली में खून का हल्का रिसाव जारी रहना, जिसकी भविष्य में निगरानी या अतिरिक्त उपचार की जरूरत हो सकती है।",
      "स्टेंट का अपनी जगह से खिसकना अथवा स्टेंट की एक शाखा में खून जमना।",
      "जांघ की धमनी में चोट या फटना, जिसके लिए तत्काल सर्जरी की आवश्यकता हो सकती है।",
      "कंट्रास्ट डाई अथवा गुर्दे की नस पर प्रभाव से किडनी की कार्यप्रणाली में गिरावट।",
      "पैरों अथवा पेडू में खून की कमी; छाती की महाधमनी में स्टेंट लगाने पर रीढ़ की हड्डी पर असर का दुर्लभ खतरा।",
      "आपातकाल में खुला ऑपरेशन करने की आवश्यकता पड़ना।"
    ],
    alternativesEn: "Open surgical repair with synthetic Dacron graft placement under cross-clamping, or conservative watchful waiting with blood pressure control (if aneurysm is small).",
    alternativesHi: "छाती या पेट को पूरी तरह खोलकर महाधमनी बदलने का बड़ा ऑपरेशन (Open Aortic Surgery) अथवा केवल ब्लड प्रेशर नियंत्रित कर निगरानी रखना।",
    sedationTypeEn: "Regional spinal/epidural anesthesia or monitored general anesthesia with endotracheal intubation.",
    sedationTypeHi: "कमर का निचला हिस्सा सुन्न करने का इंजेक्शन (Spinal/Epidural Anesthesia) अथवा पूर्ण बेहोशी (General Anesthesia)।"
  }
};

import { VASCULAR_AND_AORTIC_CONSENT_TEMPLATES } from './procedures/vascularAndAorticConsent';
import { ONCOLOGY_AND_HBP_CONSENT_TEMPLATES } from './procedures/oncologyAndHbpConsent';
import { VENOUS_AND_DIALYSIS_CONSENT_TEMPLATES } from './procedures/venousAndDialysisConsent';
import { MSK_SPINE_CONSENT_TEMPLATES } from './procedures/mskSpineConsent';
import { NON_VASCULAR_CONSENT_TEMPLATES } from './procedures/nonVascularConsent';
import { VASCULAR_VENOUS_EXTENDED_CONSENT_TEMPLATES } from './procedures/vascularVenousExtendedConsent';
import { PELVIC_UROLOGY_NEURO_PEDIATRIC_CONSENT } from './procedures/pelvicUrologyNeuroPediatricConsent';

Object.assign(PROCEDURE_CONSENT_TEMPLATES, VASCULAR_AND_AORTIC_CONSENT_TEMPLATES);
Object.assign(PROCEDURE_CONSENT_TEMPLATES, ONCOLOGY_AND_HBP_CONSENT_TEMPLATES);
Object.assign(PROCEDURE_CONSENT_TEMPLATES, VENOUS_AND_DIALYSIS_CONSENT_TEMPLATES);
Object.assign(PROCEDURE_CONSENT_TEMPLATES, MSK_SPINE_CONSENT_TEMPLATES);
Object.assign(PROCEDURE_CONSENT_TEMPLATES, NON_VASCULAR_CONSENT_TEMPLATES);
Object.assign(PROCEDURE_CONSENT_TEMPLATES, VASCULAR_VENOUS_EXTENDED_CONSENT_TEMPLATES);
Object.assign(PROCEDURE_CONSENT_TEMPLATES, PELVIC_UROLOGY_NEURO_PEDIATRIC_CONSENT);

export {
  VASCULAR_AND_AORTIC_CONSENT_TEMPLATES,
  VASCULAR_AND_AORTIC_PREPARATION_CRITERIA,
  type ProcedureClinicalPreparation
} from './procedures/vascularAndAorticConsent';

export {
  ONCOLOGY_AND_HBP_CONSENT_TEMPLATES
} from './procedures/oncologyAndHbpConsent';

export {
  VENOUS_AND_DIALYSIS_CONSENT_TEMPLATES,
  VENOUS_AND_DIALYSIS_PREP_CRITERIA,
  type ClinicalPrepCriteria
} from './procedures/venousAndDialysisConsent';

export {
  MSK_SPINE_CONSENT_TEMPLATES
} from './procedures/mskSpineConsent';

export {
  NON_VASCULAR_CONSENT_TEMPLATES
} from './procedures/nonVascularConsent';

export {
  VASCULAR_VENOUS_EXTENDED_CONSENT_TEMPLATES
} from './procedures/vascularVenousExtendedConsent';

export {
  PELVIC_UROLOGY_NEURO_PEDIATRIC_CONSENT
} from './procedures/pelvicUrologyNeuroPediatricConsent';

export const ADDITIONAL_MASTER_CONSENT_TEMPLATES: Record<string, ProcedureConsentTemplate> = {
  'consent-venous-ablation': {
    id: 'consent-venous-ablation',
    category: 'Venous Interventions',
    nameEn: 'Endovenous Thermal & Non-Thermal Ablation / VenaSeal Cyanoacrylate Closure',
    nameHi: 'वेरीकोज वेन्स के लिए एंडोवेनस लेजर / आरएफए / वेनासील ग्लू एब्लेशन सहमति पत्र',
    indicationEn: 'Symptomatic varicose veins, chronic venous insufficiency (CEAP C2-C6), venous stasis dermatitis or ulceration.',
    indicationHi: 'वेरीकोज वेन्स, पैरों में सूजन, दर्द, नसों का फूलना, त्वचा का काला पड़ना अथवा शिरापरक छाले (वेनस अल्सर)।',
    descriptionEn: 'Under ultrasound guidance, a microcatheter or laser/radiofrequency fiber is navigated into the incompetent saphenous vein (GSV/SSV) or perforator. In VenaSeal, proprietary medical cyanoacrylate glue is dispensed in controlled aliquots with external compression to permanently seal the vein. In laser/RFA, tumescent anesthesia is injected followed by controlled thermal energy delivery to seal the refluxing vein.',
    descriptionHi: 'सोनोग्राफी (अल्ट्रासाउंड) की निगरानी में एक बारीक कैथेटर अथवा लेजर/आरएफए फाइबर को पैर की खराब नस (GSV/SSV) में डाला जाता है। वेनासील (VenaSeal) तकनीक में विशेष मेडिकल ग्लू (गोंद) डालकर नस को स्थाई रूप से चिपका दिया जाता है, जिससे चीरे और ट्यूमेसेंट एनेस्थीसिया की आवश्यकता नहीं पड़ती। लेजर/आरएफए में नियंत्रित ऊष्मा देकर नस को बंद किया जाता है।',
    benefitsEn: [
      'Elimination of abnormal venous reflux and pooling in the lower leg without surgical stripping.',
      'Significant reduction in leg heaviness, swelling, aching, and accelerated healing of venous ulcers.',
      'Minimally invasive, rapid recovery with same-day return to normal activities.'
    ],
    benefitsHi: [
      'बिना किसी बड़े ऑपरेशन या चीरे के पैर की खराब नसों में खून के उल्टे बहाव को स्थाई रूप से बंद करना।',
      'पैरों के भारीपन, दर्द और सूजन से तुरंत राहत तथा नसों के घाव (वेनस अल्सर) का तेजी से भरना।',
      'प्रक्रिया के तुरंत बाद उसी दिन चलने-फिरने और सामान्य दिनचर्या में लौटने की सुविधा।'
    ],
    specificRisksEn: [
      'Superficial thrombophlebitis (sterile inflammatory reaction along the treated vein causing tender cord, treated with NSAIDs).',
      'Endovenous heat-induced thrombosis (EHIT) or rare extension of thrombus/glue into the deep venous system (DVT).',
      'Saphenous or sural nerve sensory injury causing transient skin numbness or tingling.',
      'Skin hyperpigmentation along the course of the treated vein.',
      'Recurrence of tributary varicose veins requiring secondary sclerotherapy.'
    ],
    specificRisksHi: [
      'सुपरफिशियल थ्रोम्बोफ्लेबाइटिस (उपचारित नस में सूजन या कड़ापन), जो सामान्य दर्दनिवारक दवाइयों से ठीक हो जाता है।',
      'डीप वेन थ्रोम्बोसिस (DVT) या ग्लू/थक्के का गहरी नसों में चले जाने का दुर्लभ जोखिम।',
      'त्वचा की नसों पर असर से पैर के किसी भाग में सुन्नपन या झनझनाहट होना।',
      'उपचारित नस के ऊपर की त्वचा पर हल्का कालापन आना।',
      'भविष्य में अन्य शाखाओं में वेरीकोज वेन्स का पुनः उभरना जिसके लिए फोम स्क्लेरोथेरेपी की आवश्यकता हो सकती है।'
    ],
    alternativesEn: 'High ligation and surgical stripping of saphenous vein under spinal anesthesia, foam sclerotherapy alone, or lifelong graduated compression stockings.',
    alternativesHi: 'ऑपरेशन द्वारा नस को चीरा लगाकर बाहर निकालना (सर्जिकल स्ट्रिपिंग), केवल फोम स्क्लेरोथेरेपी अथवा जीवन भर कम्प्रेशन मोजे पहनना।',
    sedationTypeEn: 'Local anesthesia with perivenous tumescent infiltration (for thermal ablation) or minimal local anesthesia alone (for VenaSeal glue closure).',
    sedationTypeHi: 'स्थानीय सुन्न करने का इंजेक्शन (Local Anesthesia); वेनासील में ट्यूमेसेंट की भी आवश्यकता नहीं होती।'
  },
  'consent-venous-sclerotherapy': {
    id: 'consent-venous-sclerotherapy',
    category: 'Venous Interventions',
    nameEn: 'Ultrasound-Guided Foam Sclerotherapy & Perforator Vein Embolization',
    nameHi: 'अल्ट्रासाउंड गाइडेड फोम स्क्लेरोथेरेपी एवं परफोरेटर वेन एम्बोलाइजेशन सहमति पत्र',
    indicationEn: 'Residual varicose tributaries, incompetent perforator veins, spider telangiectasias, and venous ulcer bed veins.',
    indicationHi: 'वेरीकोज वेन्स की मुड़ी-तुड़ी शाखाएं, परफोरेटर नसों की खराबी अथवा शिरापरक घाव (वेनस अल्सर)।',
    descriptionEn: 'Under real-time ultrasound guidance, fine needles or microcatheters are positioned directly into the diseased varicose veins or incompetent perforators. A sclerosant microfoam (Sodium Tetradecyl Sulfate or Polidocanol) or cyanoacrylate glue is injected, causing chemical endovenous spasm, endothelial thrombosis, and permanent fibrosis.',
    descriptionHi: 'सोनोग्राफी द्वारा देखकर खराब मुड़ी हुई नसों या परफोरेटर नसों में बारीक सुई डालकर दवा का झाग (फोम स्क्लेरोसैंट) अथवा मेडिकल ग्लू डाला जाता है, जिससे खराब नसें सिकुड़कर हमेशा के लिए बंद हो जाती हैं।',
    benefitsEn: [
      'Targeted non-surgical eradication of tortuous branch varices and incompetent perforator veins.',
      'Relief of local pain and acceleration of chronic venous ulcer healing.',
      'Day-care procedure with zero downtime.'
    ],
    benefitsHi: [
      'बिना ऑपरेशन के खराब नसों का सटीक उपचार।',
      'पैरों के घाव भरने में तीव्रता एवं दर्द में कमी।',
      'प्रक्रिया के तुरंत बाद सामान्य दिनचर्या में वापसी।'
    ],
    specificRisksEn: [
      'Skin necrosis or ulceration from accidental extravasation of sclerosant into subcutaneous tissue.',
      'Cutaneous hyperpigmentation (hemosiderin staining) along the treated veins.',
      'Deep vein thrombosis (DVT) from spillover of foam or glue.',
      'Transient visual scotomas, aura, or migraine-like headache (rare microbubble effect in patent foramen ovale).'
    ],
    specificRisksHi: [
      'दवा के नस से बाहर चले जाने पर त्वचा पर छाला या घाव बनना।',
      'नस के स्थान पर त्वचा का काला पड़ना।',
      'गहरी नसों में थक्का जमने (DVT) का जोखिम।',
      'सिरदर्द अथवा आँखों के आगे कुछ पलों के लिए धुंधलापन या तारे नजर आना।'
    ],
    alternativesEn: 'Surgical stab phlebectomy, SEPS (subfascial endoscopic perforator surgery), or conservative compression therapy.',
    alternativesHi: 'छोटे चीरे लगाकर नसों को खींचना (सर्जिकल फ्लेबेक्टॉमी) अथवा कम्प्रेशन मोजे पहनना।',
    sedationTypeEn: 'None required or minimal local infiltration at skin puncture sites.',
    sedationTypeHi: 'किसी विशेष बेहोशी की आवश्यकता नहीं होती; केवल सुई लगाने की जगह पर सुन्न किया जाता है।'
  },
  'consent-bcs-embolization': {
    id: 'consent-bcs-embolization',
    category: 'Hepatobiliary & Portal Interventions',
    nameEn: 'Variceal & Portosystemic Collateral Embolization (Coils, Cyanoacrylate Glue & Coils+Glue)',
    nameHi: 'बड-शियारी एवं पोर्टल हाइपरटेंशन: वेरीसील एवं कोलेटरल नसों का कॉइल एवं मेडिकल ग्लू एम्बोलाइजेशन सहमति पत्र',
    indicationEn: 'Life-threatening bleeding from gastroesophageal or ectopic varices, hepatic encephalopathy due to large spontaneous portosystemic shunts, or persistent steal in Budd-Chiari syndrome.',
    indicationHi: 'बड-शियारी सिंड्रोम अथवा लिवर सिरोसिस में खाने की नली या आमाशय की नसों (वेरिक्स) से जानलेवा रक्तस्राव, बेहोशी (एन्सेफैलोपैथी), अथवा आंतरिक बाईपास नसों में खून का बहाव रोकना।',
    descriptionEn: 'Under biplane fluoroscopy, a vascular sheath is placed (transjugular or transhepatic). Catheters and microcatheters are navigated superselectively into the bleeding varices or portosystemic collaterals. Occlusion is achieved using metallic microcoils, n-BCA cyanoacrylate medical glue mixed with Lipiodol, or a combined coil-and-glue scaffold.',
    descriptionHi: 'कैथ-लैब में गर्दन (IJV) या पेट (लिवर) के रास्ते से कैथेटर डालकर खून बहाने वाली फूली हुई नसों तक पहुंचा जाता है। इसके पश्चात सूक्ष्म माइक्रो-कॉइल्स, विशेष मेडिकल ग्लू (n-BCA Histoacryl) अथवा दोनों का सम्मिलित उपयोग करके उन नसों को पूरी तरह बंद कर दिया जाता है।',
    benefitsEn: [
      'Immediate, definitive cessation of active internal variceal bleeding refractory to endoscopic band ligation.',
      'Prevention of lethal re-bleeding and improvement in systemic portal hemodynamics.',
      'Reversal of severe hepatic encephalopathy caused by large splenorenal or portosystemic shunts.'
    ],
    benefitsHi: [
      'एंडोस्कोपी से न रुकने वाले जानलेवा आंतरिक रक्तस्राव पर तत्काल पूर्ण रोक।',
      'दोबारा खून बहने से सुरक्षा एवं लिवर की नसों में रक्त प्रवाह का सुधार।',
      'बड़ी बाईपास नसों के कारण होने वाली लिवर की बेहोशी (एन्सेफैलोपैथी) से बचाव।'
    ],
    specificRisksEn: [
      'Non-target embolization of cyanoacrylate glue or coils into the pulmonary circulation (pulmonary embolism) or systemic arteries.',
      'Portal vein thrombosis or sudden increase in portal hypertension leading to ascites or bleeding from alternative varices.',
      'Intraperitoneal hemorrhage or liver capsule injury during transhepatic puncture.',
      'Glue adherence to microcatheter requiring delicate extraction.'
    ],
    specificRisksHi: [
      'ग्लू अथवा कॉइल का फेफड़ों में चले जाना (पल्मोनरी एम्बोलिज्म)।',
      'पोर्टल वेन में थक्का जमना अथवा अन्य नसों में दबाव बढ़कर जलोदर (पेट में पानी) या रक्तस्राव होना।',
      'लिवर में सुई डालने से आंतरिक रक्तस्राव का जोखिम।',
      'माइक्रो-कैथेटर पर ग्लू चिपकने का तकनीकी जोखिम।'
    ],
    alternativesEn: 'Repeated endoscopic variceal band ligation / sclerotherapy, emergency open devascularization surgery (Sugiura procedure), or emergency liver transplantation.',
    alternativesHi: 'बार-बार एंडोस्कोपी द्वारा छल्ले (Band) लगाना, पेट खोलकर बड़ा ऑपरेशन करना अथवा लिवर ट्रांसप्लांट।',
    sedationTypeEn: 'Local anesthesia with IV conscious sedation or general anesthesia for unstable patients.',
    sedationTypeHi: 'लोकल एनेस्थीसिया के साथ नसों द्वारा बेहोशी की दवाई (IV Sedation) अथवा पूर्ण बेहोशी (General Anesthesia)।'
  },
  'consent-bcs-angioplasty': {
    id: 'consent-bcs-angioplasty',
    category: 'Hepatobiliary & Portal Interventions',
    nameEn: 'Budd-Chiari Syndrome: Hepatic Vein & IVC Balloon Angioplasty / Stenting',
    nameHi: 'बड-शियारी सिंड्रोम: लिवर की नसों एवं महाशिरा (IVC) का बैलून एंजियोप्लास्टी एवं स्टेंटिंग सहमति पत्र',
    indicationEn: 'Budd-Chiari Syndrome with hepatic venous outflow obstruction, refractory ascites, liver congestion, and acute hepatomegaly.',
    indicationHi: 'बड-शियारी सिंड्रोम: लिवर से खून निकालने वाली नसों (हेपेटिक वेन) अथवा मुख्य नस (IVC) में रुकावट, पेट में अत्यधिक पानी भरना (जलोदर) एवं लिवर फेलियर का खतरा।',
    descriptionEn: 'Under digital subtraction angiography (DSA), access is obtained via the internal jugular or femoral vein. Strictures, membranes, or chronic total occlusions in the hepatic veins or IVC are traversed with specialized guidewires, dilated using high-pressure balloons, and stabilized with dedicated self-expanding venous stents.',
    descriptionHi: 'गर्दन या जांघ की नस से कैथेटर डालकर लिवर की बंद नसों तक पहुंचा जाता है। इसके पश्चात विशेष बैलून फुलाकर नस की रुकावट को खोला जाता है और आवश्यकतानुसार स्टेंट (धातु की जाली) लगाकर नस को खुला रखा जाता है ताकि लिवर का खून सुचारू रूप से दिल तक पहुंच सके।',
    benefitsEn: [
      'Restores physiological hepatic venous outflow and relieves severe sinusoidal congestion.',
      'Rapid regression of ascites, preservation of functioning liver parenchyma, and prevention of liver cirrhosis.',
      'Avoids the high morbidity and mortality of surgical portosystemic shunts or emergency liver transplant.'
    ],
    benefitsHi: [
      'लिवर की नसों का रास्ता खुलना और लिवर में खून का जमाव समाप्त होना।',
      'पेट का पानी (जलोदर) तेजी से कम होना और लिवर सिरोसिस से बचाव।',
      'बड़े सर्जिकल ऑपरेशन या आपातकालीन लिवर ट्रांसप्लांट से बचाव।'
    ],
    specificRisksEn: [
      'Hepatic vein or IVC rupture requiring emergency covered stenting or open surgical rescue.',
      'In-stent thrombosis requiring acute thrombolysis or anticoagulation adjustment.',
      'Stent migration into the right atrium or pulmonary artery.',
      'Re-stenosis over long term necessitating repeat angioplasty surveillance.'
    ],
    specificRisksHi: [
      'नस फटने का दुर्लभ जोखिम जिसके लिए तुरंत आपातकालीन स्टेंट-ग्राफ्ट लगाना पड़ सकता है।',
      'स्टेंट में दोबारा थक्का जमना जिसके लिए खून पतला करने वाली दवाइयों की जरूरत होती है।',
      'स्टेंट का दिल या फेफड़े की तरफ खिसकना।',
      'भविष्य में पुनः नस सिकुड़ना जिसके लिए दोबारा बैलूनिंग की आवश्यकता हो सकती है।'
    ],
    alternativesEn: 'Transjugular Intrahepatic Portosystemic Shunt (TIPS), surgical meso-caval or porto-caval shunting, or liver transplantation.',
    alternativesHi: 'टिप्स (TIPS) प्रक्रिया, सर्जिकल शंट ऑपरेशन अथवा लिवर ट्रांसप्लांट।',
    sedationTypeEn: 'Local anesthesia with IV conscious sedation or general anesthesia.',
    sedationTypeHi: 'स्थानीय सुन्न करने का इंजेक्शन और नसों द्वारा आराम की दवाई (IV Sedation)।'
  },
  'consent-brto-parto': {
    id: 'consent-brto-parto',
    category: 'Hepatobiliary & Portal Interventions',
    nameEn: 'Balloon / Plug / Coil-Assisted Retrograde Transvenous Obliteration (BRTO / PARTO / CARTO)',
    nameHi: 'बीआरटीओ / पार्टो / कार्टो: गैस्ट्रिक वेरिक्स (आमाशय की नसों) का ट्रांसवीनस ऑब्लिट्रेशन सहमति पत्र',
    indicationEn: 'Large gastric fundic varices (IGV-1 / GOV-2) with gastrorenal shunt, refractory gastric variceal hemorrhage, or severe hepatic encephalopathy.',
    indicationHi: 'आमाशय (पेट) के ऊपरी हिस्से की फूली हुई नसों (गैस्ट्रिक वेरिक्स) से खून बहना अथवा बड़ी शंट नस के कारण बार-बार लिवर की बेहोशी (एन्सेफैलोपैथी) होना।',
    descriptionEn: 'Via femoral vein access, a catheter is advanced retrogradely through the left renal vein into the gastrorenal shunt. The outflow is occluded using a balloon catheter, vascular plug, or microcoils, and a sclerosant mixture (STS / Lipiodol) or gelfoam slurry is delivered retrogradely to thrombose the varices.',
    descriptionHi: 'जांघ की नस के रास्ते से कैथेटर को बाएं गुर्दे की नस के जरिए गैस्ट्रो-रीनल शंट में पहुंचाया जाता है। वहां एक अस्थायी बैलून, प्लग अथवा कॉइल लगाकर बहाव रोका जाता है और विशेष स्क्लेरोसिंग दवा भरकर पेट की फूली हुई नसों को पूरी तरह सुखा दिया जाता है।',
    benefitsEn: [
      'Near 100% eradication rate of dangerous gastric varices without worsening hepatic encephalopathy.',
      'Unlike TIPS, BRTO actually increases hepatopetal portal flow and preserves liver synthetic function.',
      'Definitive secondary prophylaxis against lethal variceal re-bleeding.'
    ],
    benefitsHi: [
      'आमाशय की फूली नसों से रक्तस्राव का 100% तक स्थाई समाधान।',
      'लिवर में खून के बहाव को बढ़ाकर लिवर की कार्यक्षमता को बेहतर बनाए रखना।',
      'भविष्य में जानलेवा उल्टी में खून आने से स्थाई सुरक्षा।'
    ],
    specificRisksEn: [
      'Worsening of esophageal varices or ascites due to diversion of portal flow.',
      'Left renal vein thrombosis or hemoglobinuria/hemolysis from sclerosant leakage.',
      'Balloon rupture during occlusion requiring plug conversion (PARTO).',
      'Groin hematoma or retroperitoneal bleeding.'
    ],
    specificRisksHi: [
      'खाने की नली (एसोफेगस) की नसों में दबाव बढ़ना जिसके लिए बाद में एंडोस्कोपी की आवश्यकता हो सकती है।',
      'गुर्दे की नस में सूजन अथवा पेशाब में लाल रंग आना (दवा का प्रभाव)।',
      'जांघ में खून का थक्का जमना (हेमेटोमा)।'
    ],
    alternativesEn: 'Endoscopic cyanoacrylate glue injection, TIPS (Transjugular Intrahepatic Portosystemic Shunt), or surgical splenectomy with devascularization.',
    alternativesHi: 'एंडोस्कोपी द्वारा मेडिकल ग्लू का इंजेक्शन, टिप्स (TIPS) प्रक्रिया अथवा तिल्ली निकालने का ऑपरेशन।',
    sedationTypeEn: 'Local anesthesia with IV conscious sedation.',
    sedationTypeHi: 'लोकल एनेस्थीसिया एवं नसों द्वारा दर्द निवारक व शांत करने की दवा (Conscious Sedation)।'
  }
};

Object.assign(PROCEDURE_CONSENT_TEMPLATES, ADDITIONAL_MASTER_CONSENT_TEMPLATES);

/**
 * Retrieve a bilingual consent template by ID or procedure key.
 */
export function getConsentForProcedure(consentIdOrProcedureId: string): ProcedureConsentTemplate | undefined {
  if (ADDITIONAL_MASTER_CONSENT_TEMPLATES[consentIdOrProcedureId]) {
    return ADDITIONAL_MASTER_CONSENT_TEMPLATES[consentIdOrProcedureId];
  }
  if (PROCEDURE_CONSENT_TEMPLATES[consentIdOrProcedureId]) {
    return PROCEDURE_CONSENT_TEMPLATES[consentIdOrProcedureId];
  }
  const match = Object.values(PROCEDURE_CONSENT_TEMPLATES).find(
    (c) =>
      c.id.toLowerCase() === consentIdOrProcedureId.toLowerCase() ||
      consentIdOrProcedureId.toLowerCase().includes(c.id.toLowerCase())
  );
  if (match) return match;
  return Object.values(ADDITIONAL_MASTER_CONSENT_TEMPLATES)[0];
}

