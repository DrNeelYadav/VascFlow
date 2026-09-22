/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 * 
 * Specialized Bilingual (Hindi & English) Informed Consent Data Catalog
 * & Cath-Lab Clinical Preparation Protocols for:
 * - Aortic & Peripheral Arterial Interventions (EVAR, TEVAR, FEVAR, ChEVAR, BTK, CERAB)
 * - Arterial Embolization & Pelvic Interventions (BAE, UAE, PAE, GAE, Trauma, GI Bleeds)
 * - Rare Syndromes & Complex Vascular Disorders (Budd-Chiari, May-Thurner, Nutcracker, KTS, HHT, FMD)
 * - Carotid Artery Stenting & Acute Stroke Mechanical Thrombectomy
 * 
 * Compliant with National Medical Commission (NMC), Indian Medical Council &
 * Supreme Court Guidelines (Samira Kohli vs. Dr. Prabha Manchanda Standard).
 */

import { ProcedureConsentTemplate } from '../consentData';

export interface ProcedureClinicalPreparation {
  id: string;
  procedureNameEn: string;
  procedureNameHi: string;
  fastingHoursSolid: number;
  fastingHoursLiquid: number;
  npoInstructionsEn: string;
  npoInstructionsHi: string;
  mandatoryLabs: {
    hb: string;
    platelets: string;
    inr: string;
    aptt: string;
    creatinine: string;
    viralSerology: string;
    bloodGrouping: string;
  };
  imagingProtocolEn: string;
  imagingProtocolHi: string;
  medicationHoldsEn: {
    antiplatelets: string;
    anticoagulants: string;
    metformin: string;
    antihypertensives: string;
  };
  medicationHoldsHi: {
    antiplatelets: string;
    anticoagulants: string;
    metformin: string;
    antihypertensives: string;
  };
  hydrationProtocolEn: string;
  hydrationProtocolHi: string;
  bloodProductsArrangedEn: string;
  bloodProductsArrangedHi: string;
  specialPrecautionsEn: string[];
  specialPrecautionsHi: string[];
}

/**
 * Master Dictionary of Bilingual Informed Consent Templates
 * Total Specialized Procedures: 108
 */
export const VASCULAR_AND_AORTIC_CONSENT_TEMPLATES: Record<string, ProcedureConsentTemplate> = {
  "evar-bifurcated-modular": {
  "id": "evar-bifurcated-modular",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Endovascular Abdominal Aortic Aneurysm Repair (EVAR) with Modular Bifurcated Stent-Graft System",
  "nameHi": "एंडोवैस्कुलर एब्डॉमिनल एओर्टिक एन्यूरिज्म रिपेयर (इवार / पेट की महाधमनी में स्टेंट ग्राफ्ट लगाना)",
  "indicationEn": "Infrarenal abdominal aortic aneurysm (AAA) with maximal diameter >= 5.5 cm in males or >= 5.0 cm in females; Rapidly expanding infrarenal AAA (growth rate > 1.0 cm/year or > 0.5 cm in 6 months); Symptomatic non-ruptured infrarenal AAA (back, flank, or abdominal pain attributable to aneurysm expansion); Saccular infrarenal or juxtarenal aortic aneurysm regardless of diameter due to high rupture risk",
  "indicationHi": "पेट की मुख्य महाधमनी (इन्फ्रारेनल एओर्टा) का आकार 5.0-5.5 सेमी से अधिक फूल जाना अथवा फटने के उच्च जोखिम वाला एन्यूरिज्म।",
  "descriptionEn": "Bilateral common femoral artery access obtained under real-time ultrasound guidance and pre-closed using dual Perclose ProStyle devices deployed at 10 and 2 o'clock orientations. Systemic anticoagulation initiated with intravenous unfractionated heparin (70-100 IU/kg) targeting an activated clotting time (ACT) of 250-300 seconds throughout the procedure. Bilateral retrograde insertion of 5F sheaths, exchange over stiff wires for 18F/20F DrySeal sheaths, and positioning of a 5F calibrated marker pigtail catheter in the upper abdominal aorta. Abdominal aortography performed in LAO/cranial or dedicated neck-perpendicular projection to delineate the lowest renal artery origin (landing zone 3) and aortic bifurcation.",
  "descriptionHi": "दोनों जांघों की नसों (फेमोरल धमनियों) में बिना बड़ा चीरा लगाए एक्स-रे (फ्लुओरोस्कोपी) की निगरानी में एक विशेष दो मुंहा आवरणयुक्त धातु का स्टेंट-ग्राफ्ट महाधमनी के अंदर स्थापित किया जाता है, जिससे रक्त का बहाव कमजोर नस से हटकर सीधे स्टेंट से होने लगता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of endovascular abdominal aortic aneurysm repair (evar) with modular bifurcated stent-graft system without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "पेट की महाधमनी फटने के 80-90% जानलेवा खतरे से संपूर्ण बचाव।",
    "बिना पेट का बड़ा चीरा लगाए (ओपन सर्जरी रहित) न्यूनतम रक्तस्राव एवं सुरक्षित उपचार।",
    "अस्पताल में मात्र 2-3 दिन का ठहराव एवं 1-2 सप्ताह में सामान्य दिनचर्या में वापसी।"
  ],
  "specificRisksEn": [
    "Type IA / IB endoleak (proximal or distal seal failure risking persistent aneurysm pressurization)",
    "Accidental coverage or dissection of renal artery ostia requiring emergency renal stenting or fenestration",
    "Iliac limb thrombosis or graft kinking causing acute lower limb ischemia",
    "Access vessel rupture, dissection, or retroperitoneal hematoma from large-bore sheath manipulation",
    "Post-implantation syndrome (systemic inflammatory response with pyrexia and elevated CRP)",
    "Distal microembolization / trash foot syndrome"
  ],
  "specificRisksHi": [
    "एंडोलीक (Endoleak): स्टेंट के किनारे या शाखाओं से थैली में खून का रिसाव जारी रहना (10-15%), जिसकी आगे निगरानी या अतिरिक्त कोइलिंग की आवश्यकता हो सकती है।",
    "गुर्दे की धमनियों (Renal Arteries) के मुहाने पर प्रभाव, जिससे गुर्दे की कार्यक्षमता में गिरावट हो सकती है।",
    "स्टेंट की पैर वाली शाखा में खून का थक्का जमना (Iliac Limb Thrombosis) जिससे पैर में खून की कमी हो सकती है।",
    "जांघ की नस में चोट, हेमेटोमा अथवा स्यूडोएन्यूरिज्म बनना।",
    "पोस्ट-इम्प्लांटेशन सिंड्रोम (प्रक्रिया के बाद 2-3 दिन तक हल्का बुखार एवं शरीर में सूजन के लक्षण)।"
  ],
  "alternativesEn": "Open surgical aortic repair with synthetic graft replacement, or conservative medical management with strict anti-impulse blood pressure control.",
  "alternativesHi": "पेट का बड़ा खुला ऑपरेशन (Open Surgical Aortic Repair with Dacron Graft) अथवा रक्तचाप नियंत्रित कर केवल नियमित निगरानी रखना (Watchful Waiting)।",
  "sedationTypeEn": "Regional spinal anesthesia or monitored conscious sedation with local anesthesia.",
  "sedationTypeHi": "रीढ़ की हड्डी में सुन्नता का इंजेक्शन (Spinal Anesthesia) अथवा पूर्ण बेहोशी (General Anesthesia)।"
},
  "tevar-thoracic-aneurysm": {
  "id": "tevar-thoracic-aneurysm",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aortic Aneurysm with Landing Zone Optimization",
  "nameHi": "थोरेसिक एंडोवैस्कुलर एओर्टिक रिपेयर (टेवार / छाती की महाधमनी में स्टेंट-ग्राफ्ट लगाना)",
  "indicationEn": "Descending thoracic aortic aneurysm (DTAA) with maximum diameter >= 5.5 cm in low-risk surgical patients or >= 6.0 cm in high-risk patients; Rapid thoracic aneurysm expansion (> 5 mm within 6 months or > 10 mm per year); Saccular aneurysm or penetrating atherosclerotic ulcer (PAU) of descending thoracic aorta with high risk of transmural rupture; Symptomatic thoracic aortic aneurysm with chest or intrascapular back pain",
  "indicationHi": "छाती की अवरोही महाधमनी (Descending Thoracic Aorta) का 5.5-6.0 सेमी से अधिक फूल जाना, तेजी से बढ़ना अथवा फटने का आसन्न जोखिम।",
  "descriptionEn": "General anesthesia with continuous arterial line monitoring in both right and left radial arteries to detect accidental left subclavian artery compromise. Active CSF drainage initialized with intracranial/intrathecal pressure transducer maintained at <= 10-12 mmHg. Ultrasound-guided retrograde puncture of unilateral common femoral artery with pre-closure using two Perclose ProStyle devices; secondary 5F femoral or radial access for diagnostic pigtail. Full heparinization administered to achieve target ACT >= 250-300 seconds.",
  "descriptionHi": "जांघ की धमनी के माध्यम से एक्स-रे व दिल की धड़कन को नियंत्रित करते हुए छाती की महाधमनी में एक विशेष लचीला आवरणयुक्त स्टेंट-ग्राफ्ट पहुंचाया जाता है और फूले हुए हिस्से पर खोलकर महाधमनी की दीवार को सुरक्षित किया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of thoracic endovascular aortic repair (tevar) for descending thoracic aortic aneurysm with landing zone optimization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "छाती की महाधमनी फटने के अत्यंत जानलेवा जोखिम से तुरंत जीवन रक्षा।",
    "छाती को पूरी तरह खोलने (Thoracotomy) और हार्ट-लंग मशीन के गंभीर खतरों से बचाव।",
    "आईसीयू और अस्पताल में बहुत कम समय का ठहराव।"
  ],
  "specificRisksEn": [
    "Spinal cord ischemia resulting in paraplegia or paraparesis (incidence 2-8%)",
    "Stroke / Cerebrovascular accident secondary to arch wire manipulation or branch coverage",
    "Type IA endoleak (proximal gutter or inadequate landing zone seal)",
    "Retrograde Type A aortic dissection triggered by balloon molding or bare stent edge trauma",
    "Access artery disruption or retroperitoneal hemorrhage",
    "Aortoesophageal or aortobronchial fistulization (late complication in large saccular/infective aneurysms)"
  ],
  "specificRisksHi": [
    "रीढ़ की हड्डी में खून की आपूर्ति कम होने से दोनों पैरों में कमजोरी या पक्षाघात (Spinal Cord Ischemia / Paraplegia - 2-6% जोखिम)।",
    "मस्तिष्क में खून की नस में थक्का जाने से स्ट्रोक (Stroke / पक्षाघात - 2-4% जोखिम)।",
    "प्रॉक्सिमल एंडोलीक (Type IA Endoleak - स्टेंट के ऊपरी किनारे से रिसाव)।",
    "रिट्रोग्रेड टाइप ए डिसेक्शन (महाधमनी की उल्टी दिशा में परत फटना)।",
    "बाएं हाथ की नस (Left Subclavian Artery) ढकने की स्थिति में बाएं हाथ में कमजोरी या चक्कर आना।"
  ],
  "alternativesEn": "Open surgical aortic repair with synthetic graft replacement, or conservative medical management with strict anti-impulse blood pressure control.",
  "alternativesHi": "छाती का बड़ा ऑपरेशन (Open Thoracoabdominal Aortic Repair) अथवा केवल गहन रक्तचाप नियंत्रण।",
  "sedationTypeEn": "General endotracheal anesthesia with continuous arterial blood pressure and invasive monitoring.",
  "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) सांस की नली (Endotracheal tube) एवं दोनों हाथों में धमनी लाइन के साथ।"
},
  "tevar-acute-type-b-dissection": {
  "id": "tevar-acute-type-b-dissection",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "TEVAR for Acute Complicated Stanford Type B Aortic Dissection (Entry Tear Coverage)",
  "nameHi": "एक्यूट कॉम्प्लिकेटेड टाइप बी एओर्टिक डिसेक्शन टेवार (महाधमनी का पर्दा फटने पर आपातकालीन स्टेंट ग्राफ्ट)",
  "indicationEn": "Acute complicated Stanford Type B aortic dissection (symptom onset <= 14 days) with malperfusion syndrome (renal, mesenteric, spinal, or lower limb ischemia); Ruptured or impending rupture of acute Type B dissection (hemothorax, mediastinal hematoma, periaortic effusion); Refractory unremitting chest/back pain despite maximum tolerated anti-impulse medical therapy; Refractory hypertension requiring >= 3 intravenous antihypertensive agents; High-risk anatomical features of early progression (initial false lumen diameter >= 22 mm, primary entry tear > 10 mm on lesser curvature)",
  "indicationHi": "छाती की महाधमनी की आंतरिक परत अचानक फटना (Type B Dissection) जिसके साथ आंतों, गुर्दों या पैरों में खून की रुकावट (Malperfusion), अनियंत्रित दर्द या फटने का खतरा हो।",
  "descriptionEn": "Continuous invasive arterial pressure monitoring in right upper extremity and bilateral femoral access established under sonographic vision. Catheterization of the TRUE LUMEN confirmed by multimodal technique: IVUS intravascular ultrasound visualization of visceral takeoff anatomy and contrast injection demonstrating synchronous pulsatility. Heparinization to achieve ACT 250-300 seconds. Arch aortography performed in steep LAO projection to profile the primary intimal tear located just distal to the left subclavian artery (Zone 2/3).",
  "descriptionHi": "जांघ की नस से आपातकालीन कैथेटर द्वारा महाधमनी के असली रास्ते (True Lumen) में पहुंचकर जहां से पर्दा फटा है (Entry Tear) उस पर आवरणयुक्त स्टेंट-ग्राफ्ट लगाया जाता है, जिससे खून का बहाव सही रास्ते में लौट आता है और झूठा रास्ता (False Lumen) बंद हो जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of tevar for acute complicated stanford type b aortic dissection (entry tear coverage) without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "महाधमनी फटने एवं मल्टी-ऑर्गन फेलियर (गुर्दे, आंतें या पैर खराब होने) से तत्काल जीवन रक्षा।",
    "महाधमनी की प्राकृतिक बनावट और खून के बहाव का तुरंत पुनरुद्धार (Aortic Remodeling)।",
    "अत्यंत उच्च जोखिम वाली ओपन चेस्ट सर्जरी से बचाव।"
  ],
  "specificRisksEn": [
    "Retrograde Type A aortic dissection (RTAD) - potentially fatal emergency requiring immediate median sternotomy",
    "Spinal cord ischemia / paraplegia from intercostal and lumbar artery false-lumen thrombosis",
    "Persistent visceral or lower-extremity malperfusion due to static branch dissection",
    "Aortic rupture / false lumen perforation during device navigation",
    "Stroke / transient ischemic attack"
  ],
  "specificRisksHi": [
    "रिट्रोग्रेड टाइप ए डिसेक्शन (Retrograde Type A Dissection - दिल की तरफ महाधमनी फटना, जो जानलेवा आपातकाल है)।",
    "रीढ़ की हड्डी पर असर से पैरों में पक्षाघात (Paraplegia)।",
    "आंतों या गुर्दे की नसों में खून की कमी बने रहना (Static Malperfusion) जिसके लिए अतिरिक्त स्टेंट की आवश्यकता हो।",
    "झूठे रास्ते में तार जाने से महाधमनी में छेद होना (Aortic Perforation)।",
    "मस्तिष्क में थक्का जाने से स्ट्रोक का जोखिम।"
  ],
  "alternativesEn": "Open surgical aortic repair with synthetic graft replacement, or conservative medical management with strict anti-impulse blood pressure control.",
  "alternativesHi": "अत्यंत जोखिम वाली आपातकालीन ओपन एओर्टिक सर्जरी अथवा केवल आईसीयू में दवाइयों द्वारा गहन रक्तचाप नियंत्रण (Anti-impulse medical therapy)।",
  "sedationTypeEn": "General endotracheal anesthesia with continuous arterial blood pressure and invasive monitoring.",
  "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) आपातकालीन श्वसन व कार्डियक मॉनिटरिंग के साथ।"
},
  "fevar-bevar-juxtarenal-thoracoabdominal": {
  "id": "fevar-bevar-juxtarenal-thoracoabdominal",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Fenestrated / Branched Endovascular Aortic Repair (FEVAR / BEVAR) for Juxtarenal and Thoracoabdominal Aneurysms",
  "nameHi": "फेनेस्ट्रेटेड / ब्रांक्ड एंडोवैस्कुलर एओर्टिक रिपेयर (फेवार / बेवार - गुर्दे व आंतों की शाखाओं वाला विशेष स्टेंट)",
  "indicationEn": "Juxtarenal, pararenal, or Crawford Extent I-IV thoracoabdominal aortic aneurysms (TAAA) with insufficient non-aneurysmal neck length (< 10 mm); Severe infrarenal neck angulation (> 60 degrees) or reverse taper neck precluding standard infrarenal EVAR in patients unfit for open surgery; Post-dissection thoracoabdominal aneurysm expansion >= 5.5-6.0 cm",
  "indicationHi": "गुर्दे व आंतों की नसों के पास (Juxtarenal/Pararenal) अथवा थोरेको-एब्डॉमिनल महाधमनी का विशाल एन्यूरिज्म, जहां सामान्य स्टेंट लगाने की जगह न हो।",
  "descriptionEn": "General endotracheal anesthesia, continuous CSF drainage monitoring, and systemic anticoagulation titrated to maintain ACT > 250-300 seconds. Surgical cutdown or percutaneous ultrasound-guided access to bilateral common femoral arteries and left axillary / brachial artery. Marker pigtail angiogram to map visceral takeoff levels under fluoroscopic roadmapping. Advancement and deployment of the main fenestrated/branched aortic endograft over a Lunderquist stiff wire, meticulously aligning fenestrations/cuffs with celiac, SMA, and right/left renal ostia.",
  "descriptionHi": "यह विश्व की सबसे उन्नत एंडोवैस्कुलर तकनीकों में से एक है। मरीज के शरीर की 3D सीटी स्कैन मैपिंग के आधार पर विशेष खिड़कियों (Fenestrations) अथवा शाखाओं (Branches) वाला स्टेंट महाधमनी में लगाया जाता है, और प्रत्येक खिड़की से गुर्दे व आंतों की नसों में छोटे आवरणयुक्त स्टेंट जोड़कर खून का बहाव अक्षुण्ण रखा जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of fenestrated / branched endovascular aortic repair (fevar / bevar) for juxtarenal and thoracoabdominal aneurysms without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "गुर्दे, आंतें और लिवर को सुरक्षित रखते हुए जटिलतम एन्यूरिज्म का पूर्ण उपचार।",
    "छाती व पेट को एक साथ खोलने वाली अत्यंत भयानक ओपन सर्जरी (Thoracoabdominal Aneurysm Repair) से बचाव।",
    "शारीरिक रूप से कमजोर व बुजुर्ग मरीजों के लिए सुरक्षित विकल्प।"
  ],
  "specificRisksEn": [
    "Target visceral vessel occlusion or dissection (loss of kidney or bowel infarction)",
    "Spinal cord ischemia and permanent paraplegia (5-10% in extensive TAAA repairs)",
    "Type IIIC endoleak (bridging stent-graft connection leak or disconnection)",
    "Stroke / upper extremity neurological deficits from axillary/brachial manipulation",
    "Acute tubular necrosis or contrast-induced nephropathy"
  ],
  "specificRisksHi": [
    "गुर्दे या आंतों की नस में स्टेंट बंद होना या फटना (Loss of target renal/visceral branch), जिससे डायलिसिस या आंतों के ऑपरेशन की जरूरत पड़ सकती है।",
    "रीढ़ की हड्डी पर असर से पैरों में स्थायी पक्षाघात (Spinal Cord Ischemia / Paraplegia - 5-10% जोखिम)।",
    "शाखाओं के जोड़ों से रक्त रिसाव (Type IIIC Gutter Endoleak)।",
    "हाथ या गर्दन की नसों में तार डालने से स्ट्रोक या हाथ में तंत्रिका क्षति।",
    "कंट्रास्ट डाई से गुर्दे की कार्यक्षमता में गिरावट (Contrast-Induced AKI)।"
  ],
  "alternativesEn": "Open surgical aortic repair with synthetic graft replacement, or conservative medical management with strict anti-impulse blood pressure control.",
  "alternativesHi": "ओपन थोरेको-एब्डॉमिनल एन्यूरिज्म सर्जरी (अत्यंत उच्च मृत्यु दर 15-25%) अथवा केवल दर्द निवारक/पैलिएटिव देखभाल।",
  "sedationTypeEn": "General endotracheal anesthesia with continuous arterial blood pressure and invasive monitoring.",
  "sedationTypeHi": "पूर्ण बेहोशी (General Endotracheal Anesthesia) निरंतर इनवेसिव धमनी व केंद्रीय शिरा मॉनिटरिंग के साथ।"
},
  "chevar-parallel-grafts": {
  "id": "chevar-parallel-grafts",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Chimney / Snorkel EVAR (ChEVAR) with Parallel Renal and Visceral Covered Stents",
  "nameHi": "चिमनी / स्नोर्कल इवार (ChEVAR - गुर्दे की नसों के समानांतर स्टेंट लगाकर महाधमनी रिपेयर)",
  "indicationEn": "Juxtarenal, pararenal, or short-neck (< 10 mm) infrarenal abdominal aortic aneurysms in emergency or emergent settings where custom fenestrated grafts are unavailable; Hostile infrarenal neck (severe conical shape, thrombus lining, angulation > 60 degrees) precluding standard EVAR in patients unfit for open clamp repair; Rescue bail-out during EVAR for accidental coverage of a renal artery ostium",
  "indicationHi": "गुर्दे की नसों के अत्यंत समीप का एन्यूरिज्म (Short Neck < 10 mm) जहां आपातकालीन स्थिति में कस्टम फेनेस्ट्रेटेड स्टेंट उपलब्ध न हो या ओपन सर्जरी संभव न हो।",
  "descriptionEn": "Establish bilateral common femoral artery access and left axillary (or left brachial) artery access under ultrasound guidance. Administer weight-adjusted heparin to achieve ACT >= 250-300 seconds throughout intervention. From the upper extremity access, navigate 6F/7F long guiding sheaths (90 cm) into the abdominal aorta; selectively cannulate target renal arteries (and/or SMA) with angled catheters and support wires. Park balloon-expandable covered stents (e.g., Viabahn VBX or Advanta V12) well within the target renal arteries with proximal stent segments extending 10-15 mm above the planned proximal edge of the aortic endograft.",
  "descriptionHi": "हाथ की नस (Axillary/Brachial Artery) से गुर्दे की नसों में समानांतर स्टेंट (चिमनी स्टेंट) डाले जाते हैं तथा जांघ से महाधमनी का मुख्य स्टेंट डाला जाता है। दोनों को एक साथ खोलकर गुर्दे की नसों को चालू रखते हुए महाधमनी के एन्यूरिज्म को सुरक्षित सील किया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of chimney / snorkel evar (chevar) with parallel renal and visceral covered stents without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "बिना हफ्तों तक कस्टम स्टेंट का इंतजार किए तुरंत उपलब्ध ऑफ-द-शेल्फ उपकरणों से जटिल एन्यूरिज्म का इलाज।",
    "गुर्दे की नसों को सुरक्षित बचाते हुए महाधमनी फटने के खतरे से मुक्ति।",
    "ओपन सर्जरी के अयोग्य मरीजों के लिए जीवन रक्षक मिनिमली इनवेसिव विकल्प।"
  ],
  "specificRisksEn": [
    "Type IA gutter endoleak (persistent channel between aortic wall, aortic endograft, and parallel chimney grafts)",
    "Chimney covered stent compression, kink, or thrombosis leading to acute renal infarction",
    "Stroke, brachial plexus injury, or upper extremity arterial thrombosis from axillary access",
    "Aortic wall rupture from aggressive simultaneous kissing post-dilation",
    "Distal microembolization"
  ],
  "specificRisksHi": [
    "गटर एंडोलीक (Type IA Gutter Endoleak - समानांतर स्टेंटों के बीच की खाली जगह से खून का रिसाव 5-15%)।",
    "चिमनी स्टेंट का दबना या बंद होना, जिससे गुर्दे में खून की कमी हो सकती है।",
    "हाथ की नस के रास्ते तार जाने से स्ट्रोक अथवा हाथ की तंत्रिका (Brachial Plexus) पर दबाव।",
    "अत्यधिक बैलून फुलाने से महाधमनी की दीवार में चोट।",
    "जांघ या हाथ के पंक्चर स्थल पर खून का थक्का जमना।"
  ],
  "alternativesEn": "Open surgical aortic repair with synthetic graft replacement, or conservative medical management with strict anti-impulse blood pressure control.",
  "alternativesHi": "ओपन क्लैम्प एओर्टिक सर्जरी, फेनेस्ट्रेटेड स्टेंट-ग्राफ्ट (FEVAR), अथवा केवल दवाइयों द्वारा रक्तचाप नियंत्रण।",
  "sedationTypeEn": "Regional spinal anesthesia or monitored conscious sedation with local anesthesia.",
  "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा डीप मॉनिटर्ड एनेस्थीसिया केयर (MAC)।"
},
  "pevar-percutaneous-preclose": {
  "id": "pevar-percutaneous-preclose",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Percutaneous EVAR (PEVAR) with Totally Percutaneous Pre-Close Suture Technique",
  "nameHi": "परक्यूटेनियस इवार (PEVAR - बिना जांघ काटे टांके वाली सुई द्वारा स्टेंट ग्राफ्ट लगाना)",
  "indicationEn": "Elective or urgent EVAR candidates meeting anatomical criteria for endovascular repair who prefer minimally invasive totally percutaneous access without surgical groin cutdown; Obese patients with deep inguinal creases where surgical exposure carries high surgical site infection (SSI) or lymphocele risk; Fast-track day-surgery / early ambulation endovascular aortic repair protocols",
  "indicationHi": "पेट की महाधमनी का एन्यूरिज्म (AAA) जिसमें जांघ पर चीरा लगाए बिना केवल सुई के छेद द्वारा स्टेंट डालना प्रस्तावित हो।",
  "descriptionEn": "Real-time high-resolution ultrasound mapping of bilateral common femoral arteries; identify femoral head landmark on fluoroscopy and ensure puncture is well above the CFA bifurcation and below the inguinal ligament. Micropuncture 21G needle cannulation of the anterior wall of CFA; confirm pulsatile arterial backflow and insert 0.018\" wire followed by 4F transitional dilator. Perform femoral angiogram via 4F dilator to confirm optimal mid-CFA anterior wall puncture location without local dissection. Exchange 0.018\" wire for a standard 0.035\" J-wire. Insert first Perclose ProStyle device rotated to 10 o'clock position; deploy needles, retrieve sutures, and secure suture tails with mosquito clamp without tying knot.",
  "descriptionHi": "सोनोग्राफी की मदद से जांघ की मुख्य धमनी में केवल सुई चुभोकर विशेष टांके लगाने वाले यंत्र (Perclose ProStyle) पहले से स्थापित किए जाते हैं। इसके बाद स्टेंट डालकर प्रक्रिया पूर्ण होने पर बाहर से ही धागा खींचकर नस का छेद पूर्णतः सील कर दिया जाता है, जिससे कोई सर्जिकल चीरा नहीं लगता।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of percutaneous evar (pevar) with totally percutaneous pre-close suture technique without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "जांघ पर कोई सर्जिकल चीरा या बड़ा घाव नहीं, संक्रमण और लिम्फोसील (पानी भरने) का शून्य खतरा।",
    "प्रक्रिया के कुछ ही घंटों बाद मरीज अपने पैरों पर चल-फिर सकता है (Early Ambulation)।",
    "अस्पताल से अगले ही दिन शीघ्र छुट्टी और न्यूनतम दर्द।"
  ],
  "specificRisksEn": [
    "Pre-close failure requiring emergency surgical cutdown or bailout covered stent placement",
    "Iatrogenic CFA lumen narrowing / stenosis from overly aggressive suture cinching",
    "Femoral pseudoaneurysm, groin hematoma, or retroperitoneal bleeding",
    "Dissection of external iliac or common femoral artery",
    "Distal arterial thrombosis"
  ],
  "specificRisksHi": [
    "परक्लोज़ उपकरण द्वारा नस न सिल पाना (Pre-close failure - 2-5%), जिसके लिए आपातकालीन छोटा सर्जिकल चीरा लगाना पड़ सकता है।",
    "जांघ की नस के मुहाने पर सिकुड़न (Femoral Artery Stenosis) आना।",
    "जांघ के अंदर खून का रिसाव, हेमेटोमा या स्यूडोएन्यूरिज्म बनना।",
    "इवार प्रक्रिया से जुड़े मानक जोखिम (एंडोलीक, स्टेंट की शाखा बंद होना)।"
  ],
  "alternativesEn": "Open surgical aortic repair with synthetic graft replacement, or conservative medical management with strict anti-impulse blood pressure control.",
  "alternativesHi": "पारंपरिक सर्जिकल कटडाउन द्वारा जांघ की नस खोलकर इवार करना अथवा ओपन एओर्टिक सर्जरी।",
  "sedationTypeEn": "Regional spinal anesthesia or monitored conscious sedation with local anesthesia.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवाइयां (Conscious Sedation) अथवा स्पाइनल एनेस्थीसिया।"
},
  "endoleak-transarterial-coiling": {
  "id": "endoleak-transarterial-coiling",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Endoleak Treatment: Transarterial Superselective Coiling of Type II Lumbar / IMA Endoleak",
  "nameHi": "एंडोलीक का ट्रांस-आर्टीरियल कोइलिंग उपचार (इवार के बाद थैली में लीक बंद करने हेतु छल्ले डालना)",
  "indicationEn": "Persistent or expanding Type II endoleak following EVAR associated with abdominal aortic aneurysm sac growth >= 5 mm over serial CT/duplex follow-up; Type II endoleak with high intrasac pressure demonstrated on pressure-sensing microcatheterization; Symptomatic aneurysm sac enlargement following endovascular repair",
  "indicationHi": "इवार (EVAR) के बाद पेट की महाधमनी की थैली में लंबर या आईएमए (IMA) धमनियों से उल्टे खून के बहाव के कारण थैली का आकार बढ़ना (Type II Endoleak ≥ 5 मिमी)।",
  "descriptionEn": "Unilateral retrograde common femoral artery or transbrachial access established with a 6F sheath. Systemic heparinization with 3000-5000 IU unfractionated heparin. For IMA pathway: Selectively cannulate the Superior Mesenteric Artery (SMA) with 6F guide; perform high-pressure DSA demonstrating retrograde filling through the Arc of Riolan or Marginal Artery of Drummond into the IMA trunk and aneurysm sac. For Lumbar pathway: Selectively cannulate the internal iliac artery (hypogastric) branches (iliolumbar, middle sacral, or superior gluteal artery) leading retrogradely to the culprit lumbar feeder.",
  "descriptionHi": "जांघ की नस से एक अत्यंत सूक्ष्म कैथेटर (Microcatheter) आंतों व पेडू की नसों के टेढ़े-मेढ़े रास्तों से होता हुआ सीधे महाधमनी की थैली में उस जगह ले जाया जाता है जहां खून रिस रहा है। वहां सूक्ष्म धातु के छल्ले (Microcoils) और विशेष मेडिकल गोंद/लिक्विड डालकर रिसाव को जड़ से सील कर दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of endoleak treatment: transarterial superselective coiling of type ii lumbar / ima endoleak without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "महाधमनी की थैली को फटने से बचाने का सटीक व सुरक्षित उपचार।",
    "बिना पेट खोले या पूर्व में लगे स्टेंट को छेड़े केवल सूक्ष्म तार द्वारा सफल इलाज।",
    "अस्पताल में 24 घंटे का अल्प ठहराव।"
  ],
  "specificRisksEn": [
    "Colonic / bowel ischemia due to non-target embolization of critical marginal mesenteric arcades",
    "Endoleak recurrence via newly recruited collateral channels",
    "Microcatheter entrapment during liquid embolic injection",
    "Femoral / brachial access pseudoaneurysm or hematoma"
  ],
  "specificRisksHi": [
    "आंतों की नसों में दवा या छल्ला जाने से आंत में खून की कमी (Bowel Ischemia / Colonic Infarction का दुर्लभ जोखिम)।",
    "अन्य शाखाओं से दोबारा रिसाव शुरू होना (Recurrence of Endoleak - 15-20%)।",
    "लिक्विड एम्बोलिक डालते समय सूक्ष्म कैथेटर का नस में चिपक जाना।",
    "जांघ के पंक्चर स्थल पर खून का थक्का।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "पीठ की तरफ से सीधे सुई डालकर थैली बंद करना (Translumbar Puncture), ओपन सर्जिकल लिगेशन, अथवा केवल सीटी स्कैन द्वारा निगरानी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की बेहोशी/दर्द निवारक दवाइयां (Conscious Sedation)।"
},
  "endoleak-direct-puncture-embolization": {
  "id": "endoleak-direct-puncture-embolization",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Endoleak Treatment: Direct Translumbar / Transcaval Sac Puncture and Onyx / Thrombin Embolization",
  "nameHi": "कमर के रास्ते सीधे सुई द्वारा एंडोलीक एम्बोलाइजेशन (Translumbar / Transcaval Puncture & Onyx)",
  "indicationEn": "Persistent Type II endoleak with significant aneurysm sac expansion (>= 5 mm) where transarterial collateral access has failed or is anatomically impossible due to small/tortuous vessels; Rapid sac expansion with inaccessible lumbar or middle sacral nidus post-EVAR; Endoleak of indeterminate origin with enlarging aneurysm cavity",
  "indicationHi": "इवार के बाद बढ़ता हुआ टाइप 2 एंडोलीक, जहां नसों के अंदर से पहुंचना असंभव हो चुका हो और महाधमनी फटने का खतरा बढ़ रहा हो।",
  "descriptionEn": "Patient placed in prone or slight left lateral decubitus position on the fluoroscopy/CT-angio hybrid table under conscious sedation or general anesthesia. Under fluoroscopic / cone-beam CT guidance, plan translumbar entry trajectory at L2-L4 level, avoiding the transverse process, renal parenchyma, and IVC. Advance an 18G/20G Chiba needle from the left flank directly into the thrombus-filled aneurysm sac targeting the hyperdense endoleak cavity identified on roadmapping. Confirm pulsatile arterial blood return through the needle; connect pressure transducer to record initial peak systolic intrasac pressure.",
  "descriptionHi": "मरीज को पेट के बल (औंधा) लिटाकर सीटी स्कैन व एक्स-रे की लाइव 3D निगरानी में पीठ/कमर के रास्ते एक लंबी बारीक सुई सीधे महाधमनी की थैली में डाली जाती है। थैली का प्रेशर नापकर उसमें विशेष सूक्ष्म छल्ले व ऑनिक्स (Onyx) लिक्विड डालकर कैविटी को पूर्णतः जाम कर दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of endoleak treatment: direct translumbar / transcaval sac puncture and onyx / thrombin embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "जटिल व दुर्गम एंडोलीक का सीधा, अचूक और स्थायी समाधान।",
    "पूर्व में लगे एओर्टिक स्टेंट को बिना नुकसान पहुंचाए थैली के अंदर का दबाव तुरंत शून्य करना।",
    "ओपन पेट की सर्जरी के जोखिम से पूर्ण बचाव।"
  ],
  "specificRisksEn": [
    "Retroperitoneal hematoma from needle tract bleeding",
    "Accidental puncture or structural damage to the aortic stent-graft fabric",
    "Non-target embolization of Onyx into systemic arterial or venous circulation",
    "Inadvertent neural trauma (lumbar plexus / nerve root irritation)",
    "Psoas muscle abscess or hematoma"
  ],
  "specificRisksHi": [
    "कमर और पेट के पीछे आंतरिक रक्तस्राव (Retroperitoneal Hematoma)।",
    "सुई से महाधमनी के स्टेंट के कपड़े में छेद होने का जोखिम।",
    "ऑनिक्स लिक्विड का फेफड़े या मुख्य नसों में चले जाना (Non-target Embolization)।",
    "कमर की नसों या मांसपेशियों में दर्द/खिंचाव।",
    "संक्रमण या पस पड़ना (Psoas Abscess)।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "नसों के रास्ते कैथेटर द्वारा प्रयास (Transarterial Embolization) अथवा बड़ा खुला ऑपरेशन।",
  "sedationTypeEn": "General endotracheal anesthesia with continuous arterial blood pressure and invasive monitoring.",
  "sedationTypeHi": "गहरी शामक बेहोशी (Deep Conscious Sedation) अथवा पूर्ण बेहोशी (General Anesthesia)।"
},
  "endoleak-type-ia-cuff-extension": {
  "id": "endoleak-type-ia-cuff-extension",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Endoleak Treatment: Proximal Cuff Extension / Giant Palmaz Stent Placement for Type IA Endoleak",
  "nameHi": "टाइप 1A एंडोलीक सुधार: प्रॉक्सिमल कफ एक्सटेंशन एवं पाल्माज़ स्टेंट (महाधमनी स्टेंट के ऊपरी रिसाव को सील करना)",
  "indicationEn": "Immediate or delayed high-flow Type IA endoleak following EVAR with ongoing systemic pressurization of the aneurysm sac; Caudal migration of the main aortic bifurcated stent-graft resulting in loss of proximal infrarenal seal; Aortic neck dilation post-EVAR leading to gutter leak around the proximal fabric",
  "indicationHi": "इवार स्टेंट के ऊपरी सिरे पर महाधमनी की गर्दन ढीली पड़ने या स्टेंट खिसकने से सीधा हाई-प्रेशर रक्त रिसाव (Type IA Endoleak), जो तुरंत फटने का अत्यधिक गंभीर खतरा है।",
  "descriptionEn": "Retrograde common femoral artery access obtained via pre-close or cutdown; 18F/20F DrySeal sheath positioned in the distal aorta. Systemic heparinization with 5000 IU unfractionated heparin (target ACT > 250s). Position 5F pigtail catheter in suprarenal aorta; perform high-pressure DSA in LAO cranial projection to precisely define the relationship of the lowest renal artery to the proximal endograft margin and the Type IA leak jet. Advance a Lunderquist stiff wire into the ascending aorta.",
  "descriptionHi": "जांघ की नस से एक बड़ा अतिरिक्त आवरणयुक्त स्टेंट (एओर्टिक कफ) या एक अत्यंत शक्तिशाली धातु का स्टेंट (Palmaz Giant Stent) महाधमनी के ऊपरी स्वस्थ हिस्से में ले जाकर भारी गुब्बारे के दबाव से फैलाया जाता है, जिससे स्टेंट महाधमनी की दीवार से पूरी ताकत से चिपक जाता है और रिसाव बंद हो जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of endoleak treatment: proximal cuff extension / giant palmaz stent placement for type ia endoleak without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "महाधमनी के तुरंत फटने के जानलेवा खतरे का तत्काल समाधान।",
    "पूर्व में लगे स्टेंट की लाइफ बढ़ना और एन्यूरिज्म का पूर्ण अलगाव।",
    "अत्यंत जोखिम भरी इमरजेंसी ओपन एओर्टिक सर्जरी से बचाव।"
  ],
  "specificRisksEn": [
    "Inadvertent coverage or occlusion of one or both renal arteries requiring urgent chimney or fenestrated salvage",
    "Rupture or dissection of the calcified infrarenal aortic neck from over-dilation",
    "Persistent refractory Type IA endoleak requiring surgical conversion or FEVAR conversion",
    "Iliac or femoral arterial disruption from re-access"
  ],
  "specificRisksHi": [
    "गुर्दे की मुख्य धमनियों (Renal Arteries) के मुहाने का ढक जाना, जिससे तुरंत रीनल स्टेंटिंग या बाईपास की जरूरत पड़ सकती है।",
    "महाधमनी की दीवार में अत्यधिक दबाव से चीरा या फटन (Aortic Rupture)।",
    "रिसाव पूरी तरह बंद न होना (Persistent Leak) जिसके लिए अतिरिक्त चिमनी या सर्जरी लगे।",
    "जांघ की धमनी में चोट या रक्तस्राव।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "आपातकालीन ओपन एओर्टिक सर्जरी और स्टेंट निकालना (Surgical Conversion) अथवा एंडोएंकर (EndoAnchors) लगाना।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) इनवेसिव प्रेशर लाइन के साथ।"
},
  "cerab-technique": {
  "id": "cerab-technique",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Aortoiliac Occlusive Disease: Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB Technique)",
  "nameHi": "महाधमनी विभाजन का कवर्ड स्टेंट द्वारा पुनर्निर्माण (CERAB तकनीक - पेट व जांघ की नसों का बाईपास स्टेंट)",
  "indicationEn": "Extensive aortoiliac occlusive disease (TASC-II Type C and D lesions) involving the distal aorta and bilateral common iliac origins; Leriche syndrome (severe claudication, erectile dysfunction, absent femoral pulses); Recurrent aortoiliac in-stent restenosis or severe circumferential kissing stent mismatch; Patients with high surgical risk for open aortobifemoral bypass (hostile abdomen, multiple laparotomies, severe cardiopulmonary disease)",
  "indicationHi": "महाधमनी के निचले हिस्से और दोनों जांघों की मुख्य नसों (Iliac Arteries) में गंभीर रुकावट (TASC II C/D Aortoiliac Occlusion) जिसके कारण चलने पर दोनों कूल्हों व पैरों में तेज दर्द (Claudication) अथवा नपुंसकता (Leriche Syndrome) हो।",
  "descriptionEn": "Ultrasound-guided retrograde bilateral common femoral artery puncture; place 6F sheaths and administer 5000-7500 IU IV heparin (ACT > 250s). Cross distal aortic and bilateral common iliac occlusions using 0.035\" angled Glidewires supported by 5F Cobra/Kumpe catheters into the infrarenal aorta. Exchange wires for 0.035\" Amplatz Super Stiff wires; pre-dilate calcified iliac segments with 5-6 mm angioplasty balloons. Upsize access to 9F/10F on one side and 7F/8F on the contralateral side.",
  "descriptionHi": "दोनों जांघों की नसों से एक साथ बैलून-एक्सपैंडेबल कवर्ड स्टेंट महाधमनी में डाला जाता है और उसके नीचे दोनों इलिएक नसों में दो अन्य स्टेंट एक साथ जोड़कर महाधमनी के प्राकृतिक कांटे (Bifurcation) का नया आवरणयुक्त रास्ता बना दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of aortoiliac occlusive disease: covered endovascular reconstruction of aortic bifurcation (cerab technique) without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "पैरों और पेडू में भरपूर रक्त संचार की तुरंत बहाली; चलने पर होने वाले असहनीय दर्द से पूर्ण मुक्ति।",
    "पेट के बड़े सर्जिकल बाईपास (Aortobifemoral Bypass) के जोखिमों व चीरे से बचाव।",
    "लंबे समय तक नसों के खुले रहने (Patency) की उच्च सफलता दर।"
  ],
  "specificRisksEn": [
    "Aortic or iliac rupture secondary to over-dilation of calcified vessels",
    "Distal embolization to femoral, popliteal, or tibial vessels",
    "Accidental occlusion of inferior mesenteric artery or critical lumbar collateral",
    "Groin hematoma / pseudoaneurysm"
  ],
  "specificRisksHi": [
    "कैल्शियम से जमी नस का गुब्बारा फुलाते समय फटना (Arterial Rupture - अत्यंत दुर्लभ लेकिन गंभीर)।",
    "पैरों के निचले हिस्से में खून का थक्का या कचरा बह जाना (Distal Embolization / Trash Foot)।",
    "स्टेंट में दोबारा थक्का जमना (Acute In-Stent Thrombosis)।",
    "जांघ के पंक्चर स्थल पर हेमेटोमा या स्यूडोएन्यूरिज्म।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन एओर्टोबाइफेमोरल बाईपास सर्जरी (Aortobifemoral Bypass) अथवा एक्सिलरी-बाइफेमोरल बाईपास।",
  "sedationTypeEn": "Regional spinal anesthesia or monitored conscious sedation with local anesthesia.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की बेहोशी (Conscious Sedation) अथवा स्पाइनल एनेस्थीसिया।"
},
  "aortoiliac-kissing-stenting": {
  "id": "aortoiliac-kissing-stenting",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Aortoiliac Kissing Balloon Angioplasty and Kissing Bare-Metal / Covered Stenting",
  "nameHi": "एओर्टो-इलिएक किसिंग स्टेंटिंग (महाधमनी व दोनों इलिएक नसों में एक साथ दो स्टेंट लगाना)",
  "indicationEn": "Bilateral or unilateral common iliac artery ostial stenosis extending into the aortic bifurcation (TASC-II Type B and C lesions); Severe claudication (Rutherford Category 2-3) or critical limb ischemia with rest pain/ulcers; Prevention of contralateral iliac ostial plaque shift during unilateral common iliac stenting",
  "indicationHi": "महाधमनी के विभाजन स्थल (Bifurcation) पर दोनों तरफ की इलिएक नसों में अत्यधिक सिकुड़न (Severe Stenosis) जिससे पैरों में खून का बहाव रुक रहा हो।",
  "descriptionEn": "Bilateral retrograde common femoral artery ultrasound-guided puncture and 6F/7F sheath placement. Administer 5000 IU unfractionated heparin IV. Advance 0.035\" steerable wires across both common iliac lesions into the abdominal aorta under fluoroscopic guidance. Position dual marker catheters or perform simultaneous bilateral contrast injection to pinpoint the exact aortic carina.",
  "descriptionHi": "दोनों जांघों की धमनियों से दो बैलून और दो स्टेंट एक साथ महाधमनी के मुहाने पर लाए जाते हैं और 'किसिंग' (एक साथ मिलकर) फुलाए जाते हैं ताकि एक नस का कचरा दूसरी नस में न जाए और दोनों नसों का रास्ता पूरी तरह चौड़ा हो जाए।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of aortoiliac kissing balloon angioplasty and kissing bare-metal / covered stenting without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "दोनों पैरों में रक्त प्रवाह का तत्काल पुनरुद्धार और चलने की क्षमता में भारी सुधार।",
    "स्थानीय सुन्नता में न्यूनतम चीरे द्वारा त्वरित प्रक्रिया।",
    "ओपन सर्जिकल बाईपास से बचाव।"
  ],
  "specificRisksEn": [
    "Iliac artery rupture from excessive sizing or balloon pressure",
    "Distal embolization of plaque fragments into the popliteal or tibial runoffs",
    "Asymmetric stent protrusion or crushing of contralateral ostium",
    "Groin hematoma or retroperitoneal bleeding"
  ],
  "specificRisksHi": [
    "धमनी की दीवार का फटना (Arterial Rupture/Dissection)।",
    "पैरों के पंजों में थक्का चले जाना (Distal Embolization)।",
    "समय के साथ स्टेंट में दोबारा सिकुड़न (Restenosis - 10-15%)।",
    "जांघ में रक्तस्राव या हेमेटोमा।"
  ],
  "alternativesEn": "Open surgical bypass grafting (e.g., femoropopliteal / distal vein bypass), open endarterectomy, or conservative medical therapy with supervised exercise.",
  "alternativesHi": "ओपन सर्जिकल एंडार्टेरेक्टॉमी, एओर्टोबाइफेमोरल बाईपास अथवा दवाइयों व व्यायाम द्वारा उपचार।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवाएं (Conscious Sedation)।"
},
  "iliac-cto-subintimal-stenting": {
  "id": "iliac-cto-subintimal-stenting",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Common and External Iliac Artery Chronic Total Occlusion (CTO) Crossing with Subintimal Angioplasty and Stenting",
  "nameHi": "इलिएक धमनी के पुराने पूर्ण अवरोध को खोलना (Iliac CTO सब-इंटिमल एंजियोप्लास्टी व स्टेंटिंग)",
  "indicationEn": "Chronic total occlusion of common iliac artery (CIA) or external iliac artery (EIA) (TASC-II Type C and D); Severe lifestyle-limiting claudication or critical limb-threatening ischemia (Rutherford 3-6) refractory to medical therapy; Failed endoluminal recanalization attempts requiring subintimal dissection and re-entry",
  "indicationHi": "जांघ की मुख्य इलिएक धमनी का 100% पूर्ण और पुराना अवरोध (Chronic Total Occlusion - CTO) जिसके कारण पैर में गंभीर दर्द या घाव हो।",
  "descriptionEn": "Access contralateral common femoral artery; advance 6F/7F 45 cm Balkin sheath over the aortic bifurcation into the diseased iliac system (or perform direct ipsilateral retrograde puncture under US guidance). Systemic heparinization with 5000-7000 IU unfractionated heparin (ACT > 250s). Perform baseline pelvic DSA demonstrating CTO proximal cap and distal reconstitution. Attack the proximal CTO cap using an angled 0.035\" Stiff Glidewire supported by a CXI / Quick-Cross catheter; deliberately create a subintimal loop (\"knuckle wire\" technique).",
  "descriptionHi": "विशेष लचीले गाइडवायर और कैथेटर द्वारा बंद पड़ी नस की दीवार की परतों के बीच (सब-इंटिमल रास्ता) एक नया रास्ता बनाकर पार किया जाता है, जिसे फिर गुब्बारे से फुलाकर धातु का मजबूत सेल्फ-एक्सपैंडिंग स्टेंट स्थापित कर दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of common and external iliac artery chronic total occlusion (cto) crossing with subintimal angioplasty and stenting without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "पूरी तरह बंद हो चुकी नस को दोबारा चालू कर पैर को कटने (Amputation) से बचाना।",
    "पैरों के असहनीय दर्द से स्थायी मुक्ति और घावों का भरना।",
    "बिना बाईपास सर्जरी के मिनिमली इनवेसिव उपचार।"
  ],
  "specificRisksEn": [
    "Iliac artery perforation or transmural rupture during subintimal tracking (requires immediate balloon tamponade and covered stent bailout)",
    "Failure to re-enter true lumen leading to extensive subintimal dissection extension into CFA",
    "Distal embolization into infra-inguinal runoff",
    "Retroperitoneal hemorrhage"
  ],
  "specificRisksHi": [
    "धमनी की दीवार में छेद होना (Perforation/Rupture) जिसके लिए आपातकालीन कवर्ड स्टेंट की जरूरत हो।",
    "असली रास्ते (True Lumen) में तार का पुनः प्रवेश न हो पाना (Re-entry failure)।",
    "पैर के निचले हिस्से में खून का थक्का जाना।",
    "जांघ में हेमेटोमा।"
  ],
  "alternativesEn": "Open surgical bypass grafting (e.g., femoropopliteal / distal vein bypass), open endarterectomy, or conservative medical therapy with supervised exercise.",
  "alternativesHi": "फेमोरो-फेमोरल क्रॉस-ओवर बाईपास सर्जरी (Fem-Fem Bypass) अथवा एओर्टोफेमोरल बाईपास।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ आईवी शामक दवाइयां।"
},
  "sfa-cto-recanalization-dcb": {
  "id": "sfa-cto-recanalization-dcb",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Superficial Femoral Artery (SFA) Long Segment CTO Recanalization and Drug-Coated Balloon (DCB) Angioplasty",
  "nameHi": "जांघ की धमनी (SFA) के पुराने अवरोध की रीकैनेलाइजेशन एवं दवा वाले गुब्बारे (DCB) से एंजियोप्लास्टी",
  "indicationEn": "Symptomatic long-segment (> 15 cm) superficial femoral artery chronic total occlusion (TASC-II C and D) with lifestyle-limiting claudication (Rutherford 3) or CLTI (Rutherford 4-6); Non-healing ischemic foot ulcer or gangrene secondary to femoropopliteal occlusive disease; Failed conservative exercise and cilostazol medical therapy",
  "indicationHi": "जांघ की सुपरफिशियल फेमोरल धमनी (SFA) का लंबा व पुराना 100% अवरोध जिसके कारण कुछ कदम चलने पर पिंडलियों में तेज दर्द (Claudication) अथवा पैर की उंगलियों में कालापन/घाव (CLTI) हो।",
  "descriptionEn": "Contralateral common femoral artery access obtained under US guidance; cross the aortic bifurcation with a 6F 45 cm Destination sheath parked in the ipsilateral common femoral artery. Systemic heparinization with 5000 IU unfractionated heparin (ACT > 250s). Perform baseline femoropopliteal DSA to delineate SFA origin, CTO cap, collateral channels, and distal landing zone. Engage proximal CTO cap with 0.035\" angled Glidewire and support catheter; advance using subintimal knuckle-wire technique or intraluminal micro-dissection.",
  "descriptionHi": "जांघ की नस में सुन्न करके तार द्वारा बंद नस को खोला जाता है। पहले सामान्य गुब्बारे से नस को फैलाकर उस पर एक विशेष दवायुक्त गुब्बारा (Drug-Coated Balloon - Paclitaxel) फुलाया जाता है, जो नस की दीवार में दवा छोड़ देता है ताकि नस भविष्य में दोबारा न सिकुड़े।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of superficial femoral artery (sfa) long segment cto recanalization and drug-coated balloon (dcb) angioplasty without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "पैर में सामान्य खून का बहाव तुरंत बहाल होना; बिना दर्द के चलने की क्षमता लौटना।",
    "शरीर में कोई धातु का स्टेंट छोड़े बिना (Leave Nothing Behind) नस का प्राकृतिक उपचार।",
    "गंभीर अल्सर व गैंग्रीन के मरीजों में पैर कटने (Amputation) से बचाव।"
  ],
  "specificRisksEn": [
    "Flow-limiting dissection requiring bailout stenting",
    "Arterial perforation with extravasation into thigh compartments",
    "Distal microembolization to tibial or pedal arteries",
    "Access site hematoma or pseudoaneurysm"
  ],
  "specificRisksHi": [
    "नस की आंतरिक परत फटना (Flow-limiting Dissection) जिसके लिए प्रोविजनल स्टेंट लगाना पड़ सकता है।",
    "पैर के निचले हिस्से (पिंडली/पंजे) में थक्का जाना (Distal Embolization)।",
    "भविष्य में नस का पुनः सिकुड़ना (Restenosis - 15-20% एक वर्ष में)।",
    "पंक्चर स्थल पर हेमेटोमा या नील पड़ना।"
  ],
  "alternativesEn": "Open surgical bypass grafting (e.g., femoropopliteal / distal vein bypass), open endarterectomy, or conservative medical therapy with supervised exercise.",
  "alternativesHi": "जांघ का सर्जिकल फेमोरो-पॉपलीटील बाईपास (Fem-Pop Bypass with Saphenous Vein) अथवा केवल दवाइयां।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवाइयां।"
},
  "sfa-directional-rotational-atherectomy-dcb": {
  "id": "sfa-directional-rotational-atherectomy-dcb",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "SFA Directional / Rotational Atherectomy Followed by Drug-Coated Balloon (DCB) Angioplasty",
  "nameHi": "एसएफए एथेरेक्टॉमी एवं डीसीबी एंजियोप्लास्टी (नस के अंदर जमी सख्त पथरी/कैल्शियम को छीलना)",
  "indicationEn": "Moderate-to-severely calcified stenotic or occlusive lesions of the superficial femoral and popliteal arteries; Eccentric fibrocalcific plaques precluding symmetric balloon expansion or resulting in severe dissection with balloon alone; Vessel debulking prior to DCB to maximize antiproliferative drug penetration and avoid permanent metal stent implantation in flexion zones",
  "indicationHi": "जांघ की धमनी में अत्यधिक सख्त कैल्शियम (Severe Calcification) की परत जमना, जहां साधारण गुब्बारे से नस पूरी तरह नहीं खुल पाती।",
  "descriptionEn": "Contralateral crossover or antegrade ipsilateral common femoral artery access placed with a 6F/7F sheath under ultrasound guidance. Full systemic heparinization achieved (target ACT > 250-300 seconds). Cross the calcified SFA lesion with a dedicated 0.014\" guidewire; advance wire into distal popliteal artery. MANDATORY STEP: Deploy a distal embolic protection filter (e.g., SpiderFX or FilterWire EZ) in the distal popliteal artery below the lesion and above the tibial trifurcation to capture macro/micro-debris.",
  "descriptionHi": "नस के अंदर एक विशेष सूक्ष्म कटर या घूमने वाला डायमंड-टिप बुर्र (Atherectomy Device) ले जाया जाता है, जो नस की सख्त पथरी को छीलकर चिकना कर देता है। इसके पश्चात दवायुक्त गुब्बारे (DCB) से नस को पूरी तरह चौड़ा कर दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of sfa directional / rotational atherectomy followed by drug-coated balloon (dcb) angioplasty without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "सख्त पथरीली नस का 100% सटीक फैलाव बिना स्टेंट डाले।",
    "नस की दीवार में दवा (Paclitaxel) का बेहतर अवशोषण और लंबे समय तक नस का खुला रहना।",
    "ओपन बाईपास सर्जरी से बचाव।"
  ],
  "specificRisksEn": [
    "Distal embolization clogging distal filter or escaping into tibial runoff",
    "Arterial perforation / pseudoaneurysm from aggressive directional cutting passes",
    "Severe vasospasm of popliteal / tibial vessels requiring intra-arterial vasodilators",
    "Device entrapment or mechanical cutter failure"
  ],
  "specificRisksHi": [
    "छीले गए कैल्शियम के महीन कणों का पंजे में जाकर नस बंद करना (Distal Embolization - 2-5%), जिसके बचाव हेतु फिल्टर (Distal Filter) प्रयोग किया जाता है।",
    "नस की दीवार में छेद (Perforation) या फटन।",
    "नस की ऐंठन (Spasm) या रक्तस्राव।",
    "जांघ में रक्त का थक्का।"
  ],
  "alternativesEn": "Open surgical bypass grafting (e.g., femoropopliteal / distal vein bypass), open endarterectomy, or conservative medical therapy with supervised exercise.",
  "alternativesHi": "ओपन सर्जिकल एंडार्टेरेक्टॉमी, फेमोरो-पॉपलीटील बाईपास, अथवा पारंपरिक स्टेंटिंग।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ आईवी दर्द निवारक दवाएं।"
},
  "sfa-popliteal-viabahn-covered-stenting": {
  "id": "sfa-popliteal-viabahn-covered-stenting",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "SFA and Popliteal Artery Covered Stenting with Self-Expanding Viabahn Stent-Graft for Complex TASC D Lesions",
  "nameHi": "एसएफए व पॉपलीटील धमनी में वायाभान कवर्ड स्टेंट लगाना (जटिल व लंबी रुकावटों के लिए आंतरिक ग्राफ्ट)",
  "indicationEn": "Extensive, diffuse TASC-II Type D femoropopliteal occlusive disease (> 20 cm) with heavy calcification or chronic total occlusion; Severe recurrent in-stent restenosis (ISR) of SFA bare-metal stents refractory to repeat balloon angioplasty or DCB; Femoropopliteal arterial rupture or acute perforation complicating aggressive atherectomy/angioplasty; Arteriovenous fistula or traumatic pseudoaneurysm of the SFA/popliteal artery",
  "indicationHi": "जांघ और घुटने की धमनी का अत्यधिक लंबा व जटिल अवरोध (TASC II D Lesion > 20-25 सेमी) जहां साधारण एंजियोप्लास्टी के विफल होने की संभावना बहुत अधिक हो।",
  "descriptionEn": "Establish contralateral retrograde or ipsilateral antegrade CFA access; position 6F/7F guiding sheath in the proximal SFA. Administer intravenous heparin targeting ACT > 250s. Recanalize SFA/popliteal occlusion intraluminally or subintimally using 0.035\" Glidewire and support catheter; re-enter the true lumen in the P1 popliteal segment. Exchange for a 0.018\" or 0.035\" heavy-duty support guidewire (e.g., Rosen wire).",
  "descriptionHi": "जांघ की धमनी के बंद हिस्से को तार से पार करके अंदर एक अत्यंत लचीला, कपड़े (ePTFE) के आवरण से मढ़ा हुआ धातु का स्टेंट-ग्राफ्ट (Gore Viabahn) स्थापित किया जाता है, जो नस के अंदर ही कृत्रिम बाईपास का कार्य करता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of sfa and popliteal artery covered stenting with self-expanding viabahn stent-graft for complex tasc d lesions without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "अत्यंत लंबे व जटिल अवरोधों में 4-5 वर्ष तक नस के खुले रहने की उत्कृष्ट सफलता दर (70-80%)।",
    "ओपन सर्जिकल बाईपास के समान परिणाम बिना पैर पर 20-30 सेमी लंबा चीरा लगाए।",
    "गंभीर पैर के घावों और गैंग्रीन से बचाव।"
  ],
  "specificRisksEn": [
    "Early or late covered stent thrombosis (highest risk if poor distal tibial runoff < 1 vessel)",
    "Edge stenosis at proximal or distal landing zone due to intimal hyperplasia",
    "Distal embolization during crossing or deployment",
    "Stent-graft fracture or compression in the P3 flexion zone across the knee joint"
  ],
  "specificRisksHi": [
    "कवर्ड स्टेंट के मुहाने पर सिकुड़न (Edge Stenosis) अथवा स्टेंट में अचानक थक्का जमना (Acute Thrombosis - 5-10%)।",
    "घुटने की छोटी शाखाओं (Genicular Collaterals) का ढक जाना।",
    "पैर में थक्का जाना।",
    "जांघ में रक्तस्राव।"
  ],
  "alternativesEn": "Open surgical bypass grafting (e.g., femoropopliteal / distal vein bypass), open endarterectomy, or conservative medical therapy with supervised exercise.",
  "alternativesHi": "ओपन सर्जिकल फेमोरो-पॉपलीटील वीनस बाईपास (Fem-Pop Saphenous Bypass) अथवा केवल साधारण एंजियोप्लास्टी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवाइयां।"
},
  "sfa-popliteal-supera-interwoven-stenting": {
  "id": "sfa-popliteal-supera-interwoven-stenting",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "SFA Dedicated Interwoven Nitinol Stenting (Supera) for Popliteal / Distal SFA with High Torsional Stress",
  "nameHi": "सुपेरा इंटरवोवन स्टेंटिंग (घुटने की मुड़ने वाली धमनी हेतु अत्यधिक लचीला व मजबूत स्टेंट)",
  "indicationEn": "Severe stenotic or occlusive disease of distal SFA (Hunter's canal) and P1, P2, and P3 popliteal segments subjected to extreme mechanical stresses (torsion, compression, elongation, and flexion); Heavy calcification in the popliteal artery where balloon angioplasty demonstrates severe elastic recoil or flow-limiting dissection; Popliteal lesions where standard laser-cut nitinol stents carry high fracture rates (> 20-30%)",
  "indicationHi": "घुटने के पीछे की पॉपलीटील धमनी में सिकुड़न या रुकावट, जहां पैर मोड़ने पर साधारण स्टेंट टूट या मुड़ सकते हैं।",
  "descriptionEn": "Obtain antegrade ipsilateral common femoral or contralateral retrograde crossover access using a 6F sheath. Administer 5000 IU IV heparin to achieve therapeutic ACT (> 250s). Cross the distal SFA / popliteal lesion intraluminally with a 0.014\" or 0.018\" wire and support catheter; confirm true lumen entry. CRITICAL PREPARATION: Perform aggressive 1:1 non-compliant balloon pre-dilation along the entire lesion length. Supera is not self-expanding in the traditional sense and cannot open heavy calcium by itself; full pre-dilation channel is mandatory.",
  "descriptionHi": "यह एक विशेष प्रकार के बुने हुए उच्च-शक्ति लचीले धातु (Interwoven Nitinol) का स्टेंट है, जो घुटने के लगातार मुड़ने, खिंचने और घूमने (Torsion, Flexion & Compression) के दबाव को बिना टूटे झेलता है और नस को खुला रखता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of sfa dedicated interwoven nitinol stenting (supera) for popliteal / distal sfa with high torsional stress without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "घुटने की धमनी में स्टेंट टूटने (Fracture) का शून्य खतरा।",
    "पैर मोड़कर बैठने या पालथी मारने पर भी नस में खून का निर्बाध प्रवाह।",
    "पैर के गैंग्रीन से बचाव और लंबी उम्र तक टिकाऊ परिणाम।"
  ],
  "specificRisksEn": [
    "Stent elongation (deployment error leading to decreased radial force and early restenosis)",
    "Stent compression / accordioning from excessive forward force during deployment",
    "Distal embolization into tibial vessels",
    "Access site hematoma or pseudoaneurysm"
  ],
  "specificRisksHi": [
    "स्टेंट को खोलते समय खिंचाव या लंबाई में गड़बड़ी (Elongation / Compression failure)।",
    "स्टेंट के अंदर दोबारा खून का थक्का जमना।",
    "नस की दीवार में खिंचाव से दर्द।",
    "जांघ में रक्तस्राव।"
  ],
  "alternativesEn": "Open surgical bypass grafting (e.g., femoropopliteal / distal vein bypass), open endarterectomy, or conservative medical therapy with supervised exercise.",
  "alternativesHi": "केवल दवायुक्त गुब्बारा (DCB), ओपन सर्जिकल बाईपास, अथवा बेयर-मेटल स्टेंट।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ शामक दवा।"
},
  "popliteal-aneurysm-viabahn-exclusion": {
  "id": "popliteal-aneurysm-viabahn-exclusion",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Popliteal Artery Aneurysm Exclusion with Percutaneous Viabahn Covered Stent-Graft",
  "nameHi": "पॉपलीटील धमनी के एन्यूरिज्म का कवर्ड स्टेंट द्वारा उपचार (घुटने के पीछे की फूली नस में स्टेंट)",
  "indicationEn": "Asymptomatic popliteal artery aneurysm with maximum transverse diameter >= 2.0 cm or containing eccentric mural thrombus (high risk of acute thromboembolism); Symptomatic popliteal aneurysm (local compression of tibial nerve or popliteal vein, chronic microembolization / blue toe syndrome); High surgical risk or hostile groin/popliteal space precluding open surgical medial/posterior bypass with saphenous vein",
  "indicationHi": "घुटने के पीछे की मुख्य धमनी (Popliteal Artery) का 2 सेमी से अधिक फूल जाना (Aneurysm), जिससे पैर में थक्का जमने या पैर कटने का गंभीर खतरा हो।",
  "descriptionEn": "Ultrasound-guided antegrade ipsilateral CFA puncture (or contralateral crossover if proximal thigh habitus prevents antegrade trajectory); position 6F/7F sheath. Administer 5000 IU unfractionated heparin IV (ACT > 250s). Perform popliteal angiography in AP, oblique, and lateral projections to define the proximal neck, aneurysm sac dimensions, genicular collateral origins, and distal landing zone. Carefully advance a 0.035\" Glidewire across the aneurysmal sac into the patent distal popliteal artery and anterior/posterior tibial artery; exchange for a 0.035\" Rosen wire.",
  "descriptionHi": "जांघ की नस से घुटने के पीछे फूले हुए हिस्से के दोनों तरफ स्वस्थ नस में आवरणयुक्त स्टेंट (Viabahn Stent-Graft) खोल दिया जाता है, जिससे एन्यूरिज्म की थैली में खून जाना बंद हो जाता है और पैर में थक्का जमने का खतरा खत्म हो जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of popliteal artery aneurysm exclusion with percutaneous viabahn covered stent-graft without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "घुटने के पीछे की नस फटने अथवा अचानक थक्का जमने से पैर कटने (Amputation) से 95% बचाव।",
    "घुटने के पीछे बड़ा चीरा लगाए बिना मिनिमली इनवेसिव सफल इलाज।",
    "अस्पताल से 1-2 दिन में छुट्टी।"
  ],
  "specificRisksEn": [
    "Endoleak (Type IA or IB seal failure; Type II endoleak via retrograde genicular branch flow)",
    "Acute or subacute stent-graft thrombosis (especially with poor tibial runoff)",
    "Kinking or structural deformation upon extreme knee flexion",
    "Distal microembolization during wire/catheter manipulation across mural thrombus"
  ],
  "specificRisksHi": [
    "घुटने के लगातार अत्यधिक मुड़ने से स्टेंट मुड़ना या बंद होना (Graft Kinking/Thrombosis - 5-10%)।",
    "एंडोलीक (Type IB या Type II - थैली में हल्का रिसाव)।",
    "पिंडली की नसों में थक्का चले जाना।",
    "जांघ में हेमेटोमा।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल बाईपास (घुटने के पीछे नस का ऑपरेशन व वेन बाईपास) अथवा केवल एंटीकोआगुलेशन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ शामक दवाइयां अथवा स्पाइनल एनेस्थीसिया।"
},
  "btk-tibial-balloon-angioplasty": {
  "id": "btk-tibial-balloon-angioplasty",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Below-the-Knee (BTK) Tibial Artery Balloon Angioplasty with Dedicated Long Tapered Balloons for CLTI",
  "nameHi": "घुटने के नीचे पिंडली की नसों की बैलून एंजियोप्लास्टी (BTK Angioplasty - डायबिटिक पैर को कटने से बचाना)",
  "indicationEn": "Critical Limb-Threatening Ischemia (CLTI / Rutherford Category 4, 5, and 6) with ischemic rest pain, non-healing neuroischemic ulcers, or gangrene; Severe multi-level infrapopliteal / tibial arterial occlusive disease (anterior tibial, posterior tibial, or peroneal artery occlusions); In-line angiosome-directed arterial revascularization to facilitate foot wound healing and limb salvage",
  "indicationHi": "डायबिटीज या धूम्रपान के कारण घुटने के नीचे पिंडली की तीनों नसों (एंटीरियर टिबियल, पोस्टीरियर टिबियल, पेरोनियल) का बंद होना, जिससे पैर में असहनीय दर्द, न भरने वाले घाव या गैंग्रीन (CLTI) हो।",
  "descriptionEn": "Establish ultrasound-guided antegrade common femoral artery access (preferred) using a 4F or 5F sheath to maximize torque transmission and tactile feedback. Administer weight-based unfractionated heparin (50-70 IU/kg) targeting ACT 200-250 seconds; administer intra-arterial nitroglycerin (100 ug) to suppress vasospasm. Perform high-resolution magnified digital subtraction angiography of the popliteal trifurcation, calf runoff, ankle, and pedal arch. Select the target angiosome-feeding tibial artery (e.g., anterior tibial for dorsal foot ulcer; posterior tibial for heel/plantar ulcer).",
  "descriptionHi": "जांघ की नस से 0.014\" के अत्यंत पतले तार और लंबे टेपर्ड गुब्बारों (1.5-3.0 मिमी व्यास, 10-20 सेमी लंबाई) द्वारा घुटने के नीचे से लेकर पैर के तलवे तक की बंद नसों को धीरे-धीरे फैलाकर खून का सीधा बहाव घाव वाले हिस्से (Angiosome) तक पहुंचाया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of below-the-knee (btk) tibial artery balloon angioplasty with dedicated long tapered balloons for clti without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "डायबिटिक पैर के घावों को तुरंत ऑक्सीजन व खून पहुंचाकर पैर को कटने (Major Amputation) से बचाना।",
    "रात में होने वाले असहनीय पैर दर्द (Rest Pain) से तुरंत मुक्ति।",
    "पूरी प्रक्रिया केवल सुई के छेद द्वारा स्थानीय सुन्नता में संपन्न।"
  ],
  "specificRisksEn": [
    "Tibial vessel perforation or rupture (requires prolonged low-pressure balloon tamponade or microcoil embolization of muscular branch)",
    "Severe tibial arterial spasm refractory to vasodilators",
    "Flow-limiting dissection causing acute vessel closure",
    "Distal microembolization to the pedal arch / digital arteries",
    "Groin hematoma"
  ],
  "specificRisksHi": [
    "पिंडली की पतली नसों में सिकुड़न (Spasm) या आंतरिक परत फटना (Dissection)।",
    "गुब्बारा फुलाते समय नस का फटना (Vessel Rupture) जिसके लिए प्रोलॉन्गड बैलून टैम्पोनेड की जरूरत हो।",
    "प्रक्रिया के कुछ हफ्तों बाद नस का दोबारा सिकुड़ना (Restenosis)।",
    "कंट्रास्ट डाई से गुर्दे पर प्रभाव।"
  ],
  "alternativesEn": "Open surgical bypass grafting (e.g., femoropopliteal / distal vein bypass), open endarterectomy, or conservative medical therapy with supervised exercise.",
  "alternativesHi": "माइक्रोवैस्कुलर डिस्टल बाईपास सर्जरी (Femoral to Tibial/Pedal Bypass) अथवा पैर/उंगलियों का विच्छेदन (Amputation)।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवाइयां।"
},
  "btk-retrograde-pedal-rendezvous": {
  "id": "btk-retrograde-pedal-rendezvous",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "BTK Retrograde Pedal / Transpedal / Transmetatarsal Arterial Access and Rendezvous Recanalization",
  "nameHi": "पैर के पंजे से उल्टी दिशा में नस खोलना (रिवर्स पीडल / ट्रांस-मेटाटार्सल रेंडेवू तकनीक)",
  "indicationEn": "Critical Limb-Threatening Ischemia (CLTI) with flush chronic total occlusion of tibial vessels where antegrade recanalization has failed; Antegrade subintimal dissection failure (inability to re-enter distal true lumen at the ankle level); Solitary patent distal pedal or plantar target vessel requiring urgent revascularization to prevent major limb amputation",
  "indicationHi": "घुटने के नीचे की नसों का ऐसा कड़ा अवरोध जिसे ऊपर जांघ से पार करना असंभव हो चुका हो और पैर कटने की कगार पर हो।",
  "descriptionEn": "Position patient supine with foot rotated and stabilized; prepare both the groin (antegrade sheath already placed) and the distal foot in sterile field. Under direct high-frequency ultrasound guidance (15-18 MHz probe) and fluoroscopic roadmapping, perform micropuncture of the patent distal dorsalis pedis or posterior tibial artery using a 21G echogenic needle. Upon pulsatile arterial blood return, advance a 0.018\" nitinol wire or 0.014\" Command wire into the pedal artery; insert a 2.9F or 4F low-profile pedal sheath or use \"sheathless\" technique with a 1.9F microcatheter. Administer 2000-3000 IU IV heparin and intra-arterial cocktail (100 ug Nitroglycerin) to prevent vasospasm.",
  "descriptionHi": "सोनोग्राफी की मदद से पैर के पंजे या तलवे की अत्यंत बारीक (1.5 मिमी) नस में सुई डालकर उल्टी दिशा (नीचे से ऊपर) में बारीक तार डाला जाता है। ऊपर और नीचे के तारों को आपस में मिलाकर (Rendezvous) पूरी बंद नस को सफलतापूर्वक खोल दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of btk retrograde pedal / transpedal / transmetatarsal arterial access and rendezvous recanalization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "ऊपर से असफल हो चुकी 100% बंद नसों को खोलने की अंतिम व अचूक जीवन रक्षक तकनीक।",
    "डायबिटिक पैर के गंभीर घाव में तुरंत खून की आपूर्ति बहाल कर पैर को कटने से बचाना।",
    "अत्यंत परिष्कृत तकनीक जिससे पैर कटने से बच जाता है।"
  ],
  "specificRisksEn": [
    "Pedal artery thrombosis or dissection (loss of the only remaining runoff target)",
    "Compartment syndrome of the foot or deep plantar space hematoma",
    "Arterial spasm refractory to vasodilators",
    "Pseudoaneurysm of dorsalis pedis or posterior tibial artery"
  ],
  "specificRisksHi": [
    "पंजे की पतली नस में थक्का जमना या चोट लगना (Pedal Access Occlusion)।",
    "पंजे के पंक्चर स्थल पर सूजन, दर्द या हेमेटोमा।",
    "नस का फटना।",
    "कंट्रास्ट डाई का असर।"
  ],
  "alternativesEn": "Open surgical bypass grafting (e.g., femoropopliteal / distal vein bypass), open endarterectomy, or conservative medical therapy with supervised exercise.",
  "alternativesHi": "पैर का विच्छेदन (Below-Knee Amputation) अथवा जटिल सर्जिकल वेन बाईपास।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ आईवी शामक व दर्द निवारक दवा।"
},
  "pedal-arch-loop-angioplasty": {
  "id": "pedal-arch-loop-angioplasty",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Pedal Arch Reconstruction and Plantar Artery Loop Angioplasty for Neuroischemic Diabetic Foot Ulcer",
  "nameHi": "पैर के तलवे का लूप पुनर्निर्माण (पीडल आर्च लूप एंजियोप्लास्टी - तलवे की नसों का चक्र खोलना)",
  "indicationEn": "Non-healing diabetic neuroischemic ulcer (Wagner Grade 2-4) or forefoot gangrene with interrupted pedal arch anatomy; Critical limb-threatening ischemia where revascularization of a single tibial artery fails to achieve wound healing due to pedal arch discontinuity; Complete restoration of the \"pedal loop\" (connection between dorsalis pedis/deep plantar artery and lateral plantar artery) to optimize forefoot tissue perfusion",
  "indicationHi": "डायबिटिक पैर में तलवे और पंजे की नसों के चक्र (Pedal Arch) का बंद होना, जिससे पैर के अंगूठे या तलवे का घाव ठीक न हो रहा हो और गैंग्रीन फैल रहा हो।",
  "descriptionEn": "Obtain antegrade CFA access with 4F/5F sheath; administer systemic heparin (50-70 IU/kg) and intra-arterial nitroglycerin (100 ug) directly into the popliteal artery. Perform detailed magnification pedal angiography in lateral and AP/oblique projections to visualize the deep plantar branch, lateral plantar artery, and digital branches. Recanalize the straight tibial inflow vessel (either anterior or posterior tibial artery) down to the ankle. Navigate a 1.7F microcatheter and 0.014\" floppy polymer wire (Asahi Sion Blue) through the dorsalis pedis into the deep plantar artery, looping into the lateral plantar artery (or reverse: from posterior tibial around the lateral plantar artery through the deep plantar branch into the dorsalis pedis).",
  "descriptionHi": "एक सूक्ष्म 0.014\" तार को पैर के ऊपर की नस (Dorsalis Pedis) से तलवे की नस (Plantar Artery) के रास्ते पूरा 360 डिग्री का चक्कर घुमाकर तलवे के पूरे रक्त चक्र को अत्यंत छोटे गुब्बारों (1.5-2.0 मिमी) से खोल दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of pedal arch reconstruction and plantar artery loop angioplasty for neuroischemic diabetic foot ulcer without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "पैर के तलवे और उंगलियों तक खून का भरपूर प्राकृतिक चक्र बहाल होना।",
    "डायबिटिक फुट अल्सर का तेजी से भरना और गैंग्रीन का खात्मा।",
    "पैर के विच्छेदन से 90% बचाव।"
  ],
  "specificRisksEn": [
    "Pedal arch rupture or deep plantar branch perforation (requires immediate prolonged low-pressure balloon tamponade or micro-sponge/thrombin injection)",
    "Severe pedal microvascular spasm resulting in paradoxical distal hypoperfusion",
    "Distal embolization to digital terminal vessels (blue toe / digital necrosis)",
    "Pedal hematoma causing compartment compression"
  ],
  "specificRisksHi": [
    "तलवे की अत्यंत सूक्ष्म नस का फटना या ऐंठन में जाना (Arch Rupture/Spasm)।",
    "उंगलियों की नसों में थक्का जाना।",
    "पंजे में असहजता या दर्द।",
    "री-थ्रोम्बोसिस।"
  ],
  "alternativesEn": "Open surgical bypass grafting (e.g., femoropopliteal / distal vein bypass), open endarterectomy, or conservative medical therapy with supervised exercise.",
  "alternativesHi": "पैर या उंगलियों का सर्जिकल विच्छेदन (Amputation) अथवा केवल ड्रेसिंग व दवाएं।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ आईवी एनाल्जेसिया।"
},
  "ali-catheter-directed-thrombolysis-aspiration": {
  "id": "ali-catheter-directed-thrombolysis-aspiration",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Acute Lower Extremity Limb Ischemia (ALI): Catheter-Directed Thrombolysis (CDT) with tPA and Aspiration Embolectomy",
  "nameHi": "पैर में अचानक थक्का जमने का आपातकालीन उपचार (ALI: कैथेटर-डायरेक्टेड थ्रोम्बोलाइज़िस व एस्पिरेशन)",
  "indicationEn": "Acute lower extremity limb ischemia of duration < 14 days, Rutherford Class I (viable) or Class IIa (marginally threatened limb with sensory loss limited to toes); Acute native arterial thrombosis or bypass graft occlusion (prosthetic or autologous vein graft) with persistent runoff bed; Acute embolic occlusion of popliteal or tibial vessels unsuitable for surgical balloon catheter embolectomy",
  "indicationHi": "पैर की नस में अचानक खून का थक्का जमने से पैर का अचानक ठंडा, सफेद/नीला पड़ जाना, सुन्न होना और असहनीय दर्द (Acute Limb Ischemia Rutherford I/IIa)।",
  "descriptionEn": "Contralateral crossover or ipsilateral antegrade CFA access obtained under ultrasound guidance; 5F/6F sheath placed. Baseline DSA defining thrombosed arterial segment, distal clot burden, and collateral outflow. Cross the thrombus with 0.035\" Glidewire and 5F catheter; verify intraluminal position distal to the occlusion. Perform initial rapid pulse-spray or mechanical aspiration: advance aspiration catheter (Penumbra Indigo or large-bore 6F/7F catheter) to debulk fresh embolic clot under continuous vacuum aspiration.",
  "descriptionHi": "जांघ की नस से थक्के के अंदर सीधे एक छिद्रों वाला विशेष कैथेटर (Multi-sidehole Catheter) स्थापित किया जाता है। इसके माध्यम से थक्का गलाने वाली जीवन रक्षक दवा (Alteplase / r-tPA) सीधे थक्के में 12-24 घंटे तक बूंद-बूंद पहुंचाई जाती है तथा बड़े थक्कों को सिरिंज द्वारा खींचकर बाहर निकाल लिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of acute lower extremity limb ischemia (ali): catheter-directed thrombolysis (cdt) with tpa and aspiration embolectomy without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "अचानक बंद हुए पैर में खून का बहाव तुरंत बहाल कर पैर कटने से तत्काल जीवन रक्षा।",
    "बिना पैर का बड़ा ऑपरेशन किए केवल दवा द्वारा थक्के का संपूर्ण खात्मा।",
    "पैर की मांसपेशियों और नसों को स्थायी नुकसान से बचाना।"
  ],
  "specificRisksEn": [
    "Major intracranial or retroperitoneal hemorrhage (incidence 1-3%)",
    "Distal thromboembolism into tibial or digital runoff during clot disruption",
    "Access site hematoma or pseudoaneurysm",
    "Compartment syndrome of calf upon reperfusion (requires immediate fasciotomy monitoring)",
    "Systemic hypofibrinogenemia"
  ],
  "specificRisksHi": [
    "शरीर में अन्यत्र गंभीर रक्तस्राव का जोखिम, विशेष रूप से मस्तिष्क में रक्तस्राव (Intracranial Hemorrhage - 1-2%) या पेट में खून बहना।",
    "पंक्चर स्थल पर भारी रक्तस्राव या हेमेटोमा (5-10%)।",
    "थक्के के छोटे टुकड़े नीचे पंजे में चले जाना (Distal Embolization)।",
    "कंपार्टमेंट सिंड्रोम (खून का बहाव वापस आने पर पैर में अत्यधिक सूजन व दबाव बढ़ना)।"
  ],
  "alternativesEn": "Open surgical Fogarty balloon embolectomy, surgical bypass grafting, or major limb amputation.",
  "alternativesHi": "आपातकालीन सर्जिकल थ्रोम्बेक्टॉमी (Fogarty Catheter Embolectomy) अथवा पैर का विच्छेदन (Amputation)।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ आईसीयू में निरंतर निगरानी।"
},
  "ali-rotational-mechanical-thrombectomy-rotarex": {
  "id": "ali-rotational-mechanical-thrombectomy-rotarex",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Acute Limb Ischemia: Percutaneous Rotational Mechanical Thrombectomy (Rotarex / Straub Medical)",
  "nameHi": "रोटारेक्स मैकेनिकल थ्रोम्बेक्टॉमी (घूमने वाले कटर द्वारा पैर का थक्का काटकर बाहर निकालना)",
  "indicationEn": "Acute or subacute lower limb ischemia (symptom duration < 4-6 weeks) with extensive thrombus burden in native arteries or bypass grafts; High-risk surgical patients or patients with absolute contraindications to systemic/catheter thrombolysis (recent stroke, recent major surgery, active peptic ulcer); Rapid restoration of in-line arterial flow required to prevent imminent tissue necrosis",
  "indicationHi": "पैर की नस में ताजा या सब-एक्यूट थक्का जमना, जहां थक्का गलाने वाली दवा (tPA) से ब्लीडिंग का खतरा हो अथवा तुरंत थक्का निकालना आवश्यक हो।",
  "descriptionEn": "Obtain contralateral crossover or antegrade ipsilateral CFA access; place 6F or 8F sheath under ultrasound guidance. Administer 5000-7500 IU IV heparin to maintain ACT > 250 seconds. Perform baseline angiogram profiling the occluded arterial segment and distal reconstitution. Cross the occlusion intraluminally with a 0.035\" Glidewire; exchange for the dedicated 0.018\" Rotarex guidewire through a support catheter.",
  "descriptionHi": "जांघ की नस से 40,000 से 60,000 चक्कर प्रति मिनट घूमने वाला एक विशेष कैथेटर (Straub Rotarex) नस में ले जाया जाता है, जो थक्के को काटकर महीन चूरा बना देता है और उसी समय वैक्यूम द्वारा सारे थक्के को शरीर से बाहर खींच लेता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of acute limb ischemia: percutaneous rotational mechanical thrombectomy (rotarex / straub medical) without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "बिना किसी थक्का गलाने वाली दवा के कुछ ही मिनटों में नस का तुरंत खुल जाना।",
    "मस्तिष्क या पेट में ब्लीडिंग का शून्य जोखिम (tPA-free treatment)।",
    "अस्पताल व आईसीयू में रहने के समय में भारी कमी।"
  ],
  "specificRisksEn": [
    "Distal embolization of thrombus fragments into tibial vessels",
    "Vessel wall dissection or perforation caused by aggressive forward advancement",
    "Device entrapment or wire shearing (strictly avoid using non-dedicated guidewires)",
    "Transient hemoglobinuria from mechanical erythrocyte lysis during prolonged activation"
  ],
  "specificRisksHi": [
    "घूमने वाले कटर से नस की दीवार में चोट या फटना (Arterial Perforation/Dissection)।",
    "कटे हुए थक्के के टुकड़े पंजे की नसों में चले जाना।",
    "लाल रक्त कोशिकाओं का टूटना (Hemolysis - पेशाब का रंग लाल/काला होना)।",
    "कैथेटर का कैल्शियम में फंसना।"
  ],
  "alternativesEn": "Open surgical Fogarty balloon embolectomy, surgical bypass grafting, or major limb amputation.",
  "alternativesHi": "कैथेटर-डायरेक्टेड थ्रोम्बोलाइज़िस (tPA), ओपन सर्जिकल फॉगार्टी एम्बोलेक्टॉमी, अथवा पैर का विच्छेदन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ आईवी शामक दवा।"
},
  "renal-artery-stenting-aras": {
  "id": "renal-artery-stenting-aras",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Renal Artery Balloon Angioplasty and Stenting for Atherosclerotic Renal Artery Stenosis (ARAS) with Flash Pulmonary Edema",
  "nameHi": "गुर्दे की धमनी की स्टेंटिंग (Renal Artery Stenting - अनियंत्रित बीपी व फेफड़ों में पानी भरने का उपचार)",
  "indicationEn": "Hemodynamically significant atherosclerotic renal artery stenosis (>= 70% lumen reduction or trans-lesional systolic gradient >= 20 mmHg) presenting with Pickering syndrome (recurrent flash pulmonary edema); Refractory renovascular hypertension resistant to >= 3 maximally tolerated antihypertensive medications including a diuretic; Rapidly declining renal function in the setting of severe bilateral ARAS or solitary functioning kidney with high-grade stenosis",
  "indicationHi": "गुर्दे की मुख्य धमनी में अत्यधिक सिकुड़न (ARAS > 70%), जिसके कारण 3-4 दवाइयों के बावजूद अनियंत्रित ब्लड प्रेशर, गुर्दे का सूखना अथवा फेफड़ों में बार-बार अचानक पानी भरना (Flash Pulmonary Edema)।",
  "descriptionEn": "Retrograde common femoral artery access obtained with 6F sheath under ultrasound guidance; administer 5000 IU unfractionated heparin IV. Engage the renal artery ostium using a 6F RDC guiding catheter or Destination sheath. Perform selective renal DSA in shallow LAO or RAO projection (matching vessel takeoff) to unmask the ostial bifurcation and calculate percent diameter stenosis. If physiological assessment needed, measure resting and dopamine-induced trans-lesional gradient (systolic gradient >= 20 mmHg or mean gradient >= 10 mmHg confirms hemodynamically significant lesion).",
  "descriptionHi": "जांघ या हाथ की नस से एक सूक्ष्म बैलून-माउंटेड स्टेंट गुर्दे की सिकुड़ी हुई धमनी में ले जाकर फुलाया जाता है। यह स्टेंट नस को पूरी तरह चौड़ा कर देता है जिससे गुर्दे को भरपूर खून मिलने लगता है और खतरनाक बीपी सामान्य होने लगता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of renal artery balloon angioplasty and stenting for atherosclerotic renal artery stenosis (aras) with flash pulmonary edema without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "घातक ब्लड प्रेशर का नियंत्रण और फेफड़ों में जानलेवा पानी भरने (Flash Pulmonary Edema) से पूर्ण बचाव।",
    "गुर्दे की कार्यक्षमता का संरक्षण और डायलिसिस पर जाने के खतरे में कमी।",
    "दवाइयों की संख्या और खुराक में भारी कमी।"
  ],
  "specificRisksEn": [
    "Renal artery rupture or dissection (potentially requiring emergency covered stent placement or nephrectomy)",
    "Atheroembolism resulting in acute renal failure (cholesterol crystal embolization / \"trash kidney\")",
    "Stent thrombosis or distal branch occlusion",
    "Groin hematoma or retroperitoneal bleeding"
  ],
  "specificRisksHi": [
    "गुर्दे की धमनी का फटना (Renal Artery Rupture - जानलेवा आपातकाल)।",
    "कोलेस्ट्रॉल के कणों का गुर्दे के अंदरूनी ऊतकों में फैलना (Cholesterol Atheroembolism) जिससे गुर्दा अस्थायी या स्थायी रूप से खराब हो सकता है।",
    "स्टेंट में थक्का जमना अथवा स्टेंट का खिसकना।",
    "कंट्रास्ट डाई से गुर्दे पर प्रभाव।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "अधिकतम संभव दवाइयों द्वारा रक्तचाप नियंत्रण अथवा ओपन सर्जिकल रीनल आर्टरी बाईपास।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवा।"
},
  "mesenteric-artery-stenting-cmi": {
  "id": "mesenteric-artery-stenting-cmi",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Mesenteric Artery Stenting (SMA and Celiac Trunk) for Chronic Mesenteric Ischemia (Intestinal Angina)",
  "nameHi": "आंतों की धमनी की स्टेंटिंग (Mesenteric Stenting - खाना खाने के बाद पेट में तेज दर्द का इलाज)",
  "indicationEn": "Chronic mesenteric ischemia (CMI) presenting with classic triad: postprandial abdominal pain (intestinal angina), food fear (sitophobia), and progressive significant weight loss; Severe ostial stenosis or occlusion of Superior Mesenteric Artery (SMA) and/or Celiac Trunk (typically >= 2 of the 3 mesenteric vessels involved); Asymptomatic high-grade SMA stenosis in patients undergoing major aortic reconstruction",
  "indicationHi": "आंतों की मुख्य धमनियों (सीलिएक और एसएमए) में गंभीर सिकुड़न, जिसके कारण खाना खाने के 20-30 मिनट बाद पेट में असहनीय दर्द (Intestinal Angina) और डर के मारे खाना न खाने से अत्यधिक वजन गिरना (Chronic Mesenteric Ischemia)।",
  "descriptionEn": "Left brachial artery or left radial artery access established under ultrasound guidance (antegrade approach provides superior pushability and alignment with the acutely downward-pointing mesenteric ostia; alternatively retrograde CFA access). Administer 5000 IU unfractionated heparin IV (ACT > 250s). Advance 6F 90 cm guiding sheath over a wire into the upper abdominal aorta. Perform lateral abdominal aortography in steep 90-degree lateral projection to profile the ostia of both Celiac Axis and SMA.",
  "descriptionHi": "जांघ अथवा हाथ की नस से आंतों को खून पहुंचाने वाली मुख्य धमनी (Superior Mesenteric Artery / Celiac) में एक मजबूत आवरणयुक्त या अनकवर्ड धातु का स्टेंट स्थापित किया जाता है, जिससे आंतों को भोजन पचाने हेतु पर्याप्त रक्त मिलने लगता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of mesenteric artery stenting (sma and celiac trunk) for chronic mesenteric ischemia (intestinal angina) without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "खाना खाने के बाद होने वाले भयंकर पेट दर्द से तत्काल पूर्ण मुक्ति।",
    "सामान्य रूप से भोजन करने की क्षमता लौटना और वजन में सुधार।",
    "आंतें सूखने या सड़ने (Bowel Gangrene / Infarction) के जानलेवा खतरे से बचाव।"
  ],
  "specificRisksEn": [
    "Mesenteric artery dissection or rupture during balloon dilation (life-threatening emergency)",
    "Distal mesenteric thromboembolism causing acute bowel infarction",
    "Upper extremity access complications: brachial artery thrombosis, median nerve neuropathy, pseudoaneurysm",
    "In-stent restenosis or thrombosis"
  ],
  "specificRisksHi": [
    "आंत की नस का फटना या डिसेक्शन होना (Mesenteric Rupture / Dissection)।",
    "स्टेंट में थक्का जमना जिससे आंत में अचानक खून रुक सकता है (Acute Mesenteric Ischemia)।",
    "आंतों की छोटी शाखाओं में कचरा चले जाना।",
    "जांघ या हाथ में हेमेटोमा।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "पेट खोलकर आंतों की नस का सर्जिकल बाईपास (Mesenteric Bypass Surgery) अथवा सर्जिकल एंडार्टेरेक्टॉमी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ शामक दवाइयां।"
},
  "acute-sma-thromboembolism-aspiration-cdt": {
  "id": "acute-sma-thromboembolism-aspiration-cdt",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Acute Superior Mesenteric Artery (SMA) Thromboembolism Percutaneous Aspiration Embolectomy and Catheter Thrombolysis",
  "nameHi": "आंत की नस में अचानक थक्का जमने का आपातकालीन उपचार (Acute SMA Embolectomy - आंत सड़ने से बचाव)",
  "indicationEn": "Acute mesenteric ischemia (AMI) due to SMA thromboembolism with hyperacute onset severe out-of-proportion abdominal pain, in early stages without clinical signs of overt transmural bowel necrosis / perforation; Early post-embolic SMA occlusion in high-risk surgical patients unsuitable for open surgical embolectomy; Non-occlusive mesenteric ischemia (NOMI) or acute thrombotic occlusion with persistent visceral vasospasm",
  "indicationHi": "आंत की मुख्य धमनी (SMA) में दिल से थक्का आकर अचानक फंस जाना, जिससे पेट में असहनीय जानलेवा दर्द, उल्टी और आंत सड़ने (Acute Mesenteric Ischemia) का अत्यंत गंभीर खतरा हो।",
  "descriptionEn": "Immediate femoral or left brachial access with 6F/7F sheath; administer initial IV heparin bolus (5000 IU). Selective cannulation of the SMA using 6F guiding sheath and perform rapid DSA confirming location of embolic lodge (typically distal to middle colic artery origin). Advance Penumbra Indigo CAT 6 or CAT 8 aspiration catheter directly to the face of the thrombus over a 0.014\"/0.018\" wire. Engage intelligent vacuum aspiration; make controlled slow forward passes through the thrombus burden, clearing embolic fragments until flow sensor indicates clear arterial fluid.",
  "descriptionHi": "जांघ या हाथ की नस से आपातकालीन रूप से बड़ा कैथेटर आंत की नस में ले जाकर वैक्यूम सक्शन (Aspiration) द्वारा थक्के को सीधे खींचकर बाहर निकाला जाता है और बचे हुए सूक्ष्म थक्कों को दवा (tPA/Vasodilator) द्वारा तुरंत घोल दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of acute superior mesenteric artery (sma) thromboembolism percutaneous aspiration embolectomy and catheter thrombolysis without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "आंतों को सड़ने (Infarction/Gangrene) से बचाकर तुरंत मरीज की जान बचाना।",
    "आंतों को काटकर बाहर निकालने वाले अत्यंत जोखिम भरे बड़े ऑपरेशन से बचाव।",
    "खून का बहाव तुरंत बहाल होने से सामान्य आंतों का संरक्षण।"
  ],
  "specificRisksEn": [
    "Unrecognized transmural bowel gangrene with subsequent perforation and septic shock",
    "Mesenteric arterial dissection or rupture during aspiration passes",
    "Intraperitoneal hemorrhage or gastrointestinal bleeding from fibrinolysis",
    "Access site hematoma"
  ],
  "specificRisksHi": [
    "आंतों में पहले से गैंग्रीन हो चुका होना, जिसके लिए पेट खोलकर सड़ी हुई आंत काटना आवश्यक हो सकता है।",
    "आंत की नस का फटना या छिद्र होना।",
    "खून का बहाव वापस आने पर रीपरफ्यूज़न इंजरी (Reperfusion Injury / Metabolic Acidosis)।",
    "थक्का गलाने वाली दवा से ब्लीडिंग का जोखिम।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "आपातकालीन पेट की ओपन सर्जरी (Exploratory Laparotomy & Surgical Embolectomy / Bowel Resection)।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा गहन मॉनिटर्ड केयर आईसीयू बैकअप के साथ।"
},
  "innominate-artery-angioplasty-stenting": {
  "id": "innominate-artery-angioplasty-stenting",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Innominate (Brachiocephalic) Artery Severe Stenosis / Occlusion Balloon Angioplasty and Covered Stenting",
  "nameHi": "इनॉमिनेट धमनी की स्टेंटिंग (छाती से दाहिने हाथ व दिमाग की मुख्य नस की रुकावट खोलना)",
  "indicationEn": "Severe symptomatic stenosis or occlusion of the innominate (brachiocephalic) artery causing right hemisphere transient ischemic attacks (TIAs) / stroke or right upper extremity claudication; Subclavian-carotid steal syndrome secondary to innominate artery pathology; Pre-operative revascularization prior to coronary artery bypass grafting requiring right internal mammary artery",
  "indicationHi": "छाती से निकलने वाली इनॉमिनेट (ब्रेकियोसेफेलिक) धमनी में गंभीर सिकुड़न, जिससे दाहिने हाथ में कमजोरी/दर्द अथवा दिमाग में खून की कमी से चक्कर व टीआईए (TIA) के दौरे आते हों।",
  "descriptionEn": "Retrograde right common femoral artery access placed with 7F/8F long sheath; secondary right brachial artery access established for through-and-through control or dual injection. Full heparinization with 5000-7000 IU IV heparin (target ACT > 250-300s). Perform aortic arch angiography in 30-45 degree LAO projection to profile the innominate artery takeoff and bifurcation into right subclavian and right common carotid. Carefully cross the innominate stenosis with a steerable wire and support catheter from femoral access (or retrogradely from right brachial access in CTO cases).",
  "descriptionHi": "जांघ या हाथ की नस से एक मजबूत आवरणयुक्त या बेयर-मेटल स्टेंट इनॉमिनेट धमनी में ले जाकर फुलाया जाता है। दिमाग में कचरा जाने से रोकने हेतु विशेष सुरक्षा फिल्टर (Embolic Protection Device) का उपयोग किया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of innominate (brachiocephalic) artery severe stenosis / occlusion balloon angioplasty and covered stenting without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "दाहिने हाथ और मस्तिष्क में पूर्ण रक्त प्रवाह की तुरंत बहाली।",
    "स्ट्रोक (पक्षाघात) और बेहोशी/चक्कर आने के दौरों से पूर्ण मुक्ति।",
    "छाती की हड्डी चीरने वाले ओपन ऑपरेशन (Median Sternotomy Bypass) से बचाव।"
  ],
  "specificRisksEn": [
    "Cerebrovascular accident / embolic stroke in right anterior or posterior circulation",
    "Iatrogenic dissection or rupture of innominate artery / aortic arch junction",
    "Accidental jailing or occlusion of the right common carotid artery origin",
    "Brachial or femoral access site thrombosis or hematoma"
  ],
  "specificRisksHi": [
    "प्रक्रिया के दौरान दिमाग में थक्का जाने से स्ट्रोक (Stroke - 2-4% जोखिम)।",
    "महाधमनी या इनॉमिनेट नस का फटना।",
    "दाहिने हाथ की नसों में थक्का जाना।",
    "जांघ में रक्तस्राव।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल बाईपास (Aorto-innominate / Carotid-subclavian bypass) अथवा दवाइयों द्वारा उपचार।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवाइयां अथवा पूर्ण बेहोशी।"
},
  "subclavian-stenosis-steal-syndrome-stenting": {
  "id": "subclavian-stenosis-steal-syndrome-stenting",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Subclavian Artery Proximal Stenosis / Subclavian Steal Syndrome Balloon Angioplasty and Stenting",
  "nameHi": "सबक्लेवियन स्टील सिंड्रोम स्टेंटिंग (हाथ हिलाने पर दिमाग का खून खिंचने व चक्कर आने का इलाज)",
  "indicationEn": "Subclavian Steal Syndrome: retrograde flow in the ipsilateral vertebral artery causing posterior circulation ischemic symptoms (vertigo, syncope, ataxia, diplopia) triggered by upper extremity exertion; Severe upper limb ischemia (claudication, resting hand pain, digital ulceration); Coronary-Subclavian Steal Syndrome: angina in patients with internal mammary artery (LIMA) bypass graft to LAD due to proximal subclavian artery stenosis",
  "indicationHi": "हाथ की मुख्य सबक्लेवियन धमनी में सिकुड़न, जिससे हाथ हिलाने या काम करने पर दिमाग का खून उल्टी दिशा में हाथ में बहने लगता है (Subclavian Steal Syndrome) और मरीज को चक्कर, आंखों के आगे अंधेरा या कमजोरी आती है।",
  "descriptionEn": "Right common femoral artery retrograde access established with 6F/7F sheath; administer 5000 IU unfractionated heparin IV. Advance 5F diagnostic catheter to the aortic arch; perform arch angiography in 45-60 degree LAO projection to clearly profile the left subclavian artery (LSA) origin and relationship to the left vertebral artery. Carefully cross the proximal subclavian stenosis with an angled 0.035\" Glidewire and 5F catheter, avoiding wire prolapse or trauma to the vertebral artery ostium. Advance wire into the axillary / brachial artery; exchange for a 0.035\" Amplatz Super Stiff wire.",
  "descriptionHi": "जांघ या हाथ की नस से कैथेटर ले जाकर सबक्लेवियन नस की सिकुड़न को गुब्बारे से फैलाकर धातु का स्टेंट स्थापित किया जाता है, जिससे हाथ का खून सामान्य हो जाता है और दिमाग से खून खिंचना तुरंत बंद हो जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of subclavian artery proximal stenosis / subclavian steal syndrome balloon angioplasty and stenting without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "चक्कर आना, आंखों के आगे अंधेरा छाना और हाथ में दर्द तुरंत पूरी तरह बंद होना।",
    "हाथ में सामान्य नाड़ी व शक्ति की वापसी।",
    "गर्दन के सर्जिकल बाईपास से बचाव।"
  ],
  "specificRisksEn": [
    "Vertebral or posterior circulation stroke from plaque atheroembolism",
    "Accidental jailing or occlusion of the vertebral artery or internal mammary artery (LIMA)",
    "Subclavian arterial rupture from over-dilation",
    "Distal upper extremity embolization"
  ],
  "specificRisksHi": [
    "वर्टिब्रल नस या दिमाग में थक्का जाने से स्ट्रोक (Stroke - 1-2%)।",
    "धमनी की दीवार में चीरा (Dissection) या फटना।",
    "हाथ में थक्का जाना।",
    "पंक्चर स्थल पर हेमेटोमा।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "गर्दन का खुला ऑपरेशन (Carotid-Subclavian Bypass / Transposition) अथवा केवल रक्त पतला करने की दवाएं।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवाइयां।"
},
  "cfa-ivl-shockwave-dcb": {
  "id": "cfa-ivl-shockwave-dcb",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Common Femoral Artery (CFA) Calcified Plaque Shockwave Intravascular Lithotripsy (IVL) and DCB Angioplasty",
  "nameHi": "कॉमन फेमोरल धमनी की शॉकवेव लिथोट्रिप्सी (IVL) एवं डीसीबी (जांघ के जोड़ की नस में जमी पथरी को साउंड वेव से फोड़ना)",
  "indicationEn": "Severe, eccentric or concentric circumferential calcification of the common femoral artery bifurcation (causing claudication or CLTI) in patients with prohibitive surgical risk for open endarterectomy (hostile groin, prior irradiation, multiple groin surgeries, obesity); Endovascular treatment of CFA without permanent stent placement across the hip flexion crease; Facilitation of large-bore vascular access (for TAVR, EVAR, or Impella) through heavily calcified, stenotic CFA vessels",
  "indicationHi": "जांघ के जोड़ की मुख्य धमनी (CFA) में अत्यधिक सख्त पथरी/कैल्शियम जमना, जहां जोड़ होने के कारण सामान्य स्टेंट नहीं लगाया जा सकता और पैर में खून रुक रहा हो।",
  "descriptionEn": "Ultrasound-guided retrograde puncture of the contralateral common femoral artery; place 6F/7F crossover sheath and administer 5000 IU IV heparin. Cross the aortic bifurcation and park the sheath in the ipsilateral external iliac artery immediately above the diseased CFA. Perform baseline pelvic and femoral bifurcation DSA profiling the CFA lesion and origins of both SFA and profunda femoris. Cross the calcified CFA stenosis with a 0.014\" extra-support guidewire (Spartacore / Grand Slam); advance wire into the distal SFA or profunda.",
  "descriptionHi": "नस के अंदर एक विशेष शॉकवेव बैलून (Shockwave IVL) ले जाकर ध्वनि तरंगों (Sonic Pressure Waves) के झटके दिए जाते हैं। यह तरंगें नस की दीवार को बिना फाड़े अंदर जमी सख्त पथरी को चूर-चूर कर देती हैं, जिसके बाद दवा वाले गुब्बारे (DCB) से नस को पूरी तरह खोल दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of common femoral artery (cfa) calcified plaque shockwave intravascular lithotripsy (ivl) and dcb angioplasty without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "जांघ के जोड़ पर बिना स्टेंट डाले (No Stent at Flexion Zone) अत्यधिक सख्त नस का संपूर्ण फैलाव।",
    "भविष्य में स्टेंट टूटने या सिकुड़ने का कोई जोखिम नहीं।",
    "ओपन सर्जिकल एंडार्टेरेक्टॉमी और जांघ के घाव के संक्रमण से बचाव।"
  ],
  "specificRisksEn": [
    "Severe dissection extending into profunda femoris or SFA",
    "Distal embolization of micro-calcific debris into tibial runoff",
    "Vessel perforation / pseudoaneurysm",
    "Contralateral groin hematoma"
  ],
  "specificRisksHi": [
    "नस की आंतरिक परत फटना (Dissection)।",
    "कैल्शियम के बारीक कण नीचे बह जाना।",
    "नस में ऐंठन या रक्तस्राव।",
    "जांघ में हेमेटोमा।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल फेमोरल एंडार्टेरेक्टॉमी (Surgical Endarterectomy with Patch Plasty) अथवा बाईपास।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवा।"
},
  "femoral-pseudoaneurysm-thrombin-injection": {
  "id": "femoral-pseudoaneurysm-thrombin-injection",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "External Iliac / Common Femoral Artery Iatrogenic Pseudoaneurysm Percutaneous US-Guided Thrombin Injection",
  "nameHi": "जांघ के स्यूडोएन्यूरिज्म में थ्रॉम्बिन इंजेक्शन (नस के रिसाव वाले खून के गोले को सुई द्वारा जमाना)",
  "indicationEn": "Post-catheterization iatrogenic femoral or external iliac artery pseudoaneurysm with persistent circulating flow; Expanding groin swelling with audible systolic bruit following diagnostic or interventional femoral vascular access; Failed ultrasound-guided probe compression therapy",
  "indicationHi": "एंजियोग्राफी या दिल की प्रक्रिया के बाद जांघ की नस से खून रिसने के कारण त्वचा के नीचे धड़कता हुआ खून का गोला (Iatrogenic Pseudoaneurysm) बन जाना।",
  "descriptionEn": "Position patient supine with affected groin shaved and prepped with chlorhexidine under sterile conditions. Perform meticulous duplex ultrasound mapping to locate the arterial defect, pseudoaneurysm neck, and the circulating sac fundus. Directly visualize the communicating neck and native femoral artery throughout the procedure. Under real-time ultrasound guidance, insert a 21G or 22G spinal needle into the pseudoaneurysm sac, directing the tip into the peripheral fundus furthest away from the neck (NEVER near the neck origin).",
  "descriptionHi": "सोनोग्राफी की सीधी लाइव स्क्रीन पर देखते हुए एक बारीक सुई स्यूडोएन्यूरिज्म की थैली के केंद्र में डाली जाती है और कुछ बूंदें थ्रॉम्बिन (Thrombin) दवा छोड़ी जाती है। थ्रॉम्बिन दवा थैली के खून को 5-10 सेकंड के भीतर ठोस थक्का बना देती है, जबकि मुख्य नस में खून सामान्य बहता रहता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of external iliac / common femoral artery iatrogenic pseudoaneurysm percutaneous us-guided thrombin injection without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "बिना कोई ऑपरेशन या चीरा लगाए कुछ ही सेकंड में खून के गोले का शत-प्रतिशत स्थायी इलाज।",
    "अत्यंत सुरक्षित, दर्द रहित और डे-केयर प्रक्रिया (सफलता दर > 98%)।",
    "गोला फटने और भारी रक्तस्राव के खतरे से तुरंत मुक्ति।"
  ],
  "specificRisksEn": [
    "Non-target arterial thromboembolism: thrombin leakage into native femoral artery causing acute lower limb ischemia",
    "Anaphylaxis / allergic reaction to bovine thrombin preparations (minimized by using human thrombin)",
    "Groin infection / abscess formation",
    "Recurrence of pseudoaneurysm (typically with multilocular sacs or persistent antiplatelet/anticoagulant therapy)"
  ],
  "specificRisksHi": [
    "थ्रॉम्बिन दवा का मुख्य धमनी में चले जाना जिससे पैर की नस बंद हो सकती है (Non-target Arterial Thrombosis - < 1% अत्यंत दुर्लभ)।",
    "थ्रॉम्बिन दवा से एलर्जी (Allergic Reaction)।",
    "संक्रमण या फोड़ा बनना।",
    "गोले का पूरी तरह न जमना जिससे दोबारा इंजेक्शन की जरूरत पड़े।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "सोनोग्राफी द्वारा लगातार दबाव देना (Ultrasound-guided compression), सर्जिकल रिपेयर (चीरा लगाकर नस सिलना), अथवा कवर्ड स्टेंट।",
  "sedationTypeEn": "Regional spinal anesthesia or monitored conscious sedation with local anesthesia.",
  "sedationTypeHi": "त्वचा पर स्थानीय सुन्नता (Local Anesthesia) का इंजेक्शन।"
},
  "femoral-pseudoaneurysm-covered-stent": {
  "id": "femoral-pseudoaneurysm-covered-stent",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Femoral Pseudoaneurysm Neck Covered Stent-Graft Exclusion",
  "nameHi": "जांघ के स्यूडोएन्यूरिज्म में कवर्ड स्टेंट लगाना (फटी हुई नस के मुहाने को अंदर से सील करना)",
  "indicationEn": "Large or wide-necked (> 6-8 mm) femoral / external iliac artery pseudoaneurysm unsuitable for direct percutaneous thrombin injection due to high risk of native arterial embolization; Rapidly expanding or ruptured femoral pseudoaneurysm with active extravasation; Recurrent pseudoaneurysm following failed thrombin injection or surgical repair attempts",
  "indicationHi": "जांघ की नस का ऐसा विशाल स्यूडोएन्यूरिज्म जिसकी गर्दन बहुत चौड़ी हो (> 8 मिमी) अथवा जहां थ्रॉम्बिन इंजेक्शन विफल हो गया हो या देने पर मुख्य नस में थक्का जाने का खतरा हो।",
  "descriptionEn": "Obtain ultrasound-guided retrograde access via the contralateral common femoral artery; advance 7F/8F crossover sheath into the ipsilateral external iliac artery. Systemic heparinization with 5000 IU IV heparin. Perform pelvic and femoral digital subtraction angiography in multiple projections (RAO and LAO) to profile the precise neck of the pseudoaneurysm and identify the profunda femoris origin. Carefully advance a 0.035\" Glidewire across the parent artery defect into the superficial femoral artery; exchange for an Amplatz Super Stiff wire.",
  "descriptionHi": "दूसरी जांघ या हाथ की नस से एक आवरणयुक्त धातु का स्टेंट (Covered Stent) जांघ की क्षतिग्रस्त नस के अंदर ले जाकर खोल दिया जाता है। यह स्टेंट नस के छेद को अंदर से पूरी तरह ढक देता है जिससे थैली में खून जाना तुरंत बंद हो जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of femoral pseudoaneurysm neck covered stent-graft exclusion without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "फटी हुई नस का तुरंत पूर्ण आंतरिक सीलिंग और रक्तस्राव की रोकथाम।",
    "जांघ में बड़ा चीरा लगाकर नस सिलने के जोखिम और संक्रमण से बचाव।",
    "पैर में सामान्य रक्त संचार की तुरंत बहाली।"
  ],
  "specificRisksEn": [
    "Inadvertent occlusion of the profunda femoris artery origin",
    "Endoleak (Type I or Type II) resulting in continued sac pressurization",
    "Covered stent kinking or thrombosis across the hip joint line",
    "Distal embolization"
  ],
  "specificRisksHi": [
    "कवर्ड स्टेंट में थक्का जमना (Stent Thrombosis)।",
    "स्टेंट के किनारे से थैली में खून का रिसाव (Endoleak)।",
    "जांघ की डीप फेमोरल नस (Profunda Femoris) का मुहाना ढक जाना।",
    "जांघ में हेमेटोमा या संक्रमण।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल वैस्कुलर रिपेयर (जांघ खोलकर नस पर पैच लगाना)।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ शामक दवा।"
},
  "popliteal-artery-entrapment-provocation-planning": {
  "id": "popliteal-artery-entrapment-provocation-planning",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Popliteal Artery Entrapment Syndrome (PAES) Diagnostic Dynamic Provocation Angiography and Endovascular Planning",
  "nameHi": "पॉपलीटील आर्टरी एंट्रैपमेंट डायग्नोस्टिक प्रोवोकेशन एंजियोग्राफी (घुटने की नस दबने की विशेष जांच)",
  "indicationEn": "Young, athletic patients (< 40 years) presenting with calf claudication, cold foot, or paresthesias triggered by exercise; Dynamic compression or occlusion of the popliteal artery during active plantarflexion or passive dorsiflexion of the ankle; Differentiating anatomical entrapment (Types I-IV: abnormal gastrocnemius muscle insertion) from functional entrapment (Type VI) prior to surgical myotomy",
  "indicationHi": "कम उम्र के युवाओं/खिलाड़ियों में दौड़ने या पंजा मोड़ने पर घुटने के पीछे की नस पर मांसपेशी का दबाव पड़ने से पैर में दर्द व सुन्नपन (PAES)।",
  "descriptionEn": "Ultrasound-guided ipsilateral antegrade or contralateral crossover CFA access established with a 4F/5F sheath. Administer 3000 IU unfractionated heparin IV. Advance 4F marker catheter into the distal superficial femoral artery / P1 popliteal segment. Perform baseline resting digital subtraction angiography of the popliteal artery in AP and lateral projections with foot in neutral relaxed position (measure baseline lumen, detect medial deviation, post-stenotic dilation, or intraluminal thrombus).",
  "descriptionHi": "जांघ की नस से कैथेटर घुटने की धमनी में डालकर सामान्य स्थिति में तथा पैर के पंजे को नीचे की तरफ पूरी ताकत से मोड़कर (Active Plantar Flexion) एक्स-रे डाई इंजेक्ट की जाती है, ताकि नस के दबने का सटीक स्तर व प्रभाव देखा जा सके।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of popliteal artery entrapment syndrome (paes) diagnostic dynamic provocation angiography and endovascular planning without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "बीमारी का 100% सटीक व निर्णायक निदान, जिससे अनावश्यक उपचार से बचाव होता है।",
    "आगे की सुधारात्मक सर्जरी की सटीक योजना बनाने में अत्यंत सहायक।",
    "पैर की नस को स्थायी रूप से बंद होने से बचाने का समय पर अवसर।"
  ],
  "specificRisksEn": [
    "Access site hematoma or pseudoaneurysm",
    "Distal embolization of pre-existing mural thrombus during forceful provocation maneuvers",
    "Arterial spasm",
    "Contrast allergy / nephropathy"
  ],
  "specificRisksHi": [
    "जांघ के पंक्चर स्थल पर दर्द, सूजन या नील पड़ना।",
    "कंट्रास्ट डाई से एलर्जी।",
    "नस में अस्थायी ऐंठन (Arterial Spasm)।",
    "थक्का जमने का दुर्लभ जोखिम।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "डायनामिक एमआर एंजियोग्राफी (Dynamic MRI) अथवा केवल डॉप्लर सोनोग्राफी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) - मरीज का होश में रहना आवश्यक है ताकि वह पंजा मोड़ सके।"
},
  "upper-extremity-digital-ischemia-angioplasty": {
  "id": "upper-extremity-digital-ischemia-angioplasty",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Upper Extremity Digital Ischemia: Brachial-Radial-Ulnar Runoff Balloon Angioplasty",
  "nameHi": "हाथ व उंगलियों की नसों की एंजियोप्लास्टी (हाथ की उंगलियों में कालापन व दर्द का इलाज)",
  "indicationEn": "Severe upper extremity digital ischemia with rest pain, non-healing digital pulp ulcers, or gangrene (secondary to systemic sclerosis/scleroderma, Buerger disease / TAO, or hypothenar hammer syndrome); Atherosclerotic or thromboangiitic occlusions of the radial, ulnar, superficial palmar arch, or common digital arteries; Failed conservative medical therapy with prostacyclin analogues and calcium channel blockers",
  "indicationHi": "हाथ की ब्रेकियल, रेडियल, अलनर या उंगलियों की नसों में रुकावट जिससे उंगलियों में असहनीय दर्द, ठंडक, घाव या उंगलियां काली पड़ने (Digital Gangrene) का खतरा हो।",
  "descriptionEn": "Establish ultrasound-guided antegrade ipsilateral brachial artery puncture (mid-arm) using a 4F sheath (or retrograde femoral access with long 4F 90 cm sheath). Administer 3000-5000 IU unfractionated heparin IV and intra-arterial cocktail (200 ug Nitroglycerin + 2.5 mg Verapamil) directly into the brachial artery. Perform magnification digital subtraction angiography of the forearm, wrist, palmar arches, and digital vessels in neutral open-hand position. Identify critical target vessel supplying the ischemic finger (e.g., radial artery to deep palmar arch, or ulnar artery to superficial palmar arch and digital branches).",
  "descriptionHi": "जांघ या हाथ की मुख्य नस से अत्यंत बारीक तार और 1.5 से 2.5 मिमी के सूक्ष्म गुब्बारे हाथ व हथेली की नसों में ले जाकर फुलाए जाते हैं और नस की ऐंठन रोकने वाली दवाएं छोड़ी जाती हैं, जिससे उंगलियों तक गर्म खून का प्रवाह लौट आता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of upper extremity digital ischemia: brachial-radial-ulnar runoff balloon angioplasty without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "उंगलियों को कटने (Finger Amputation) से बचाना।",
    "हाथ के असहनीय दर्द से तुरंत राहत और घावों का तेजी से भरना।",
    "हाथ की प्राकृतिक कार्यक्षमता की बहाली।"
  ],
  "specificRisksEn": [
    "Intense, refractory microvascular spasm",
    "Palmar or digital arterial perforation with hand compartment hematoma",
    "Brachial access site thrombosis or median nerve compression",
    "Distal digital microembolization"
  ],
  "specificRisksHi": [
    "हाथ की अत्यंत संवेदनशील नसों में तेज ऐंठन (Severe Arterial Spasm)।",
    "नस का फटना या थक्का जमना।",
    "पंक्चर स्थल पर हेमेटोमा।",
    "उंगलियों में सुन्नपन।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "सर्जिकल बाईपास, केवल नस फैलाने वाली दवाइयां (Prostacyclin/IV Vasodilators), अथवा उंगलियों का विच्छेदन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ आईवी दर्द निवारक दवाइयां।"
},
  "endovascular-foreign-body-snare-retrieval": {
  "id": "endovascular-foreign-body-snare-retrieval",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Endovascular Retrieval of Sheared / Fractured Peripheral Guidewire or Balloon Catheter",
  "nameHi": "नस के अंदर टूटे हुए तार या कैथेटर को फंदे (स्नेयर) द्वारा बाहर निकालना",
  "indicationEn": "Iatrogenic intra-arterial fracture or shearing of guidewire tip, microcatheter, or balloon catheter fragment during peripheral endovascular procedures; Embolized unexpanded stent or fragment migrating into distal arterial tree; Prevention of acute arterial thrombosis, vessel wall perforation, or distal ischemic necrosis",
  "indicationHi": "मेडिकल प्रक्रिया के दौरान दिल या नस के अंदर किसी गाइडवायर, कैथेटर, पोर्ट-ए-कैथ या स्टेंट के टुकड़े का टूटकर बह जाना (Intravascular Foreign Body)।",
  "descriptionEn": "Maintain or establish large-bore vascular access (6F to 8F sheath) ipsilateral or contralateral to the foreign body location. Maintain therapeutic systemic heparinization throughout. Advance the guiding sheath into close proximity with the proximal or free edge of the fractured hardware. Deliver the Amplatz GooseNeck snare or EnSnare device through the guiding sheath or dedicated delivery catheter.",
  "descriptionHi": "जांघ या गले की नस से एक विशेष फंदा (Gooseneck Snare) एक्स-रे की निगरानी में नस के अंदर ले जाया जाता है। टूटे हुए उपकरण के सिरे को फंदे में फंसाकर धीरे से खींचते हुए बाहर निकाल लिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of endovascular retrieval of sheared / fractured peripheral guidewire or balloon catheter without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "नस या दिल में फंसे टुकड़े को बिना कोई चीर-फाड़ किए कुछ ही मिनटों में सुरक्षित बाहर निकालना।",
    "ओपन हार्ट सर्जरी या छाती/पेट खोलने के भयानक ऑपरेशन से शत-प्रतिशत बचाव।",
    "नस में थक्का जमने, संक्रमण या दिल में छेद होने के जानलेवा खतरे से तुरंत मुक्ति।"
  ],
  "specificRisksEn": [
    "Arterial laceration or dissection caused by traction of jagged metallic fragment",
    "Distal displacement / migration of the fragment into smaller inaccessible vessels",
    "Vessel rupture requiring emergency covered stenting or surgical arteriotomy",
    "Thrombus formation around the hardware fragment during manipulation"
  ],
  "specificRisksHi": [
    "टुकड़े को खींचते समय नस की दीवार में चोट या फटन।",
    "टुकड़े का टूटकर और आगे दिल या फेफड़े में चले जाना।",
    "टुकड़े को निकालने में तकनीकी विफलता जिसके लिए ओपन सर्जरी की आवश्यकता पड़ सकती है।",
    "पंक्चर स्थल पर रक्तस्राव।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल एक्सप्लोरेशन (छाती या नस खोलकर टुकड़ा निकालना)।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवा।"
},
  "retroperitoneal-hemorrhage-balloon-tamponade-coiling": {
  "id": "retroperitoneal-hemorrhage-balloon-tamponade-coiling",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Retroperitoneal Hemorrhage Control: Internal Iliac Artery Balloon Tamponade and Coil Embolization",
  "nameHi": "पेट के पीछे भारी रक्तस्राव पर बैलून द्वारा तत्काल रोक व कोइलिंग (जीवन रक्षक एम्बोलाइजेशन)",
  "indicationEn": "Life-threatening retroperitoneal hemorrhage or deep pelvic hematoma following complex endovascular intervention, pelvic fracture, or high femoral arteriotomy; Refractory hemorrhagic shock despite massive blood product transfusion and resuscitative measures; Active extravasation / pseudoaneurysm arising from internal iliac artery (hypogastric) branches (anterior or posterior trunk)",
  "indicationHi": "एंजियोग्राफी के बाद या चोट लगने से पेट के पीछे की जगह में भारी जानलेवा रक्तस्राव (Retroperitoneal Hemorrhage) और मरीज का ब्लड प्रेशर गिरना।",
  "descriptionEn": "Immediate contralateral CFA or left brachial/radial access established while resuscitation continues. EMERGENCY HEMODYNAMIC STABILIZATION: Advance a large compliant occlusion balloon (Coda / Reliant) into the common or internal iliac artery immediately proximal to the bleeding site; inflate balloon with dilute contrast to achieve immediate balloon tamponade and arrest exsanguinating hemorrhage. Maintain inflation while blood pressure stabilizes and crossmatched blood products are infused. Deflate balloon intermittently to perform rapid pelvic digital subtraction angiography and locate the precise bleeding vessel (e.g., iliolumbar, superior gluteal, internal pudendal, or obturator branch).",
  "descriptionHi": "आपातकालीन रूप से जांघ की नस से खून बहने वाली जगह पर एक गुब्बारा फुलाकर तुरंत रक्तस्राव रोक दिया जाता है (Balloon Tamponade)। इसके पश्चात सूक्ष्म कैथेटर से खून बहाने वाली नस के अंदर धातु के छल्ले (Coils) या लिक्विड डालकर नस को स्थायी रूप से बंद कर दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of retroperitoneal hemorrhage control: internal iliac artery balloon tamponade and coil embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "भारी आंतरिक रक्तस्राव से मरीज की तत्काल जीवन रक्षा।",
    "रक्तचाप का तुरंत सामान्य होना और शॉक से बचाव।",
    "अत्यंत जोखिम भरी आपातकालीन ओपन सर्जरी से बचाव।"
  ],
  "specificRisksEn": [
    "Pelvic ischemic necrosis, buttock claudication, or rectal necrosis (if bilateral internal iliacs are sacrificed)",
    "Abdominal compartment syndrome secondary to massive retroperitoneal hematoma",
    "Distal thromboembolism",
    "Coagulopathy of trauma / hypothermia"
  ],
  "specificRisksHi": [
    "रक्तस्राव पूरी तरह न रुकना जिसके लिए अतिरिक्त कोइलिंग या सर्जरी लगे।",
    "नितंब या पेडू की मांसपेशियों में दर्द/खून की कमी।",
    "जांघ की नस में चोट।",
    "गुर्दे पर अत्यधिक ब्लीडिंग व शॉक का असर।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "आपातकालीन ओपन सर्जिकल लैप्रोटोमी व हेमोस्टेसिस (अत्यंत उच्च मृत्यु दर)।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ शामक दवा अथवा पूर्ण बेहोशी।"
},
  "radial-artery-pseudoaneurysm-thrombin-injection": {
  "id": "radial-artery-pseudoaneurysm-thrombin-injection",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Radial Artery Pseudoaneurysm Post-Coronary / Neuro Intervention Ultrasound-Guided Compression and Thrombin Injection",
  "nameHi": "कलाई की नस के स्यूडोएन्यूरिज्म का थ्रॉम्बिन इंजेक्शन उपचार (हाथ के खून के गोले को जमाना)",
  "indicationEn": "Iatrogenic radial artery pseudoaneurysm following transradial coronary, peripheral, or neurointerventional catheterization; Painful, expanding pulsatile mass at the wrist with characteristic \"to-and-fro\" or \"yin-yang\" Doppler flow; Failed mechanical band compression therapy (TR Band / Radicompression)",
  "indicationHi": "कलाई के रास्ते एंजियोग्राफी होने के बाद कलाई की नस (Radial Artery) से रिसाव के कारण धड़कता हुआ दर्दनाक खून का गोला बन जाना।",
  "descriptionEn": "Position patient supine with wrist extended on an armboard; clean wrist with chlorhexidine and apply sterile drape. Place high-frequency ultrasound transducer over the radial pseudoaneurysm; measure sac dimensions, neck diameter, and distance to the skin. Compress the neck slightly with the ultrasound transducer to slow down flow velocity without occluding the native radial artery. Under continuous direct real-time ultrasound guidance, insert a 25G needle into the superficial fundus of the pseudoaneurysm sac (keeping needle tip as far as possible from the neck).",
  "descriptionHi": "सोनोग्राफी की निगरानी में एक अत्यंत बारीक सुई से गोले के केंद्र में थ्रॉम्बिन की कुछ बूंदें इंजेक्ट की जाती हैं, जिससे गोला तुरंत जमकर बंद हो जाता है और कलाई की मुख्य नस चालू रहती है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of radial artery pseudoaneurysm post-coronary / neuro intervention ultrasound-guided compression and thrombin injection without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "कलाई पर बिना कोई चीरा लगाए 10 सेकंड में संपूर्ण सफल इलाज।",
    "गोला फटने और हाथ में रक्तस्राव के खतरे से तुरंत मुक्ति।",
    "प्रक्रिया के तुरंत बाद मरीज घर जा सकता है।"
  ],
  "specificRisksEn": [
    "Accidental injection of thrombin into native radial artery causing radial thrombosis or hand/digital ischemia",
    "Distal digital embolization",
    "Local hematoma or cutaneous necrosis",
    "Recurrence of pseudoaneurysm"
  ],
  "specificRisksHi": [
    "कलाई की मुख्य नस या उंगलियों में थक्का जाना (< 1%)।",
    "थ्रॉम्बिन से हल्की एलर्जी।",
    "स्थानीय सूजन या नील पड़ना।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "कलाई पर टीआर-बैंड द्वारा लगातार दबाव (Compression Band) अथवा सर्जिकल रिपेयर।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "त्वचा पर स्थानीय सुन्नता (Local Anesthesia) का इंजेक्शन।"
},
  "bae-massive-hemoptysis": {
  "id": "bae-massive-hemoptysis",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Bronchial Artery Embolization (BAE) for Massive Hemoptysis",
  "nameHi": "ब्रोंकियल आर्टीरियल एम्बोलाइजेशन (बीएई / फेफड़े से खून की उल्टी रोकने हेतु नस बंदी)",
  "indicationEn": "Life-threatening massive hemoptysis (>300-600 mL/24h or >100 mL/h with respiratory compromise); Submassive hemoptysis refractory to conservative / anti-fibrinolytic therapy; Underlying pulmonary tuberculosis, post-tubercular bronchiectasis, aspergilloma, or cavitary lung disease",
  "indicationHi": "खांसी में जानलेवा भारी खून आना (Massive Hemoptysis > 300-600 mL/24h), टीबी (Tuberculosis), ब्रोन्किइक्टेसिस, फंगस बॉल (Aspergilloma) या फेफड़े के कैंसर के कारण।",
  "descriptionEn": "Ultrasound-guided retrograde right common femoral artery puncture; insertion of 5F vascular sheath. Descending thoracic aortography (pigtail catheter at T4-T6 level) in AP and shallow LAO/RAO views to identify origin of bronchial arteries. Selective bronchial artery cannulation with 5F Mikaelson or Cobra catheter. High-resolution DSA to evaluate hypertrophy, tortuosity, parenchymal hypervascularity, shunts, and meticulously check for the anterior spinal artery (Artery of Adamkiewicz / hairpin loop).",
  "descriptionHi": "जांघ की नस से एक सूक्ष्म कैथेटर फेफड़ों को खून पहुंचाने वाली असामान्य ब्रोंकियल धमनियों में ले जाया जाता है। अत्यधिक सावधानी से रीढ़ की हड्डी की नस (Adamkiewicz Artery) की जांच के बाद विशेष सूक्ष्म कणों (PVA Particles) या छल्लों (Microcoils) द्वारा खून बहाने वाली नस को बंद कर दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of bronchial artery embolization (bae) for massive hemoptysis without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "खांसी में खून आने की जानलेवा आपातकालीन स्थिति में 85-95% तुरंत स्थायी रोक।",
    "गंभीर व नाजुक स्थिति में फेफड़े का बड़ा व खतरनाक ऑपरेशन (Lobectomy) करने से बचाव।",
    "स्वस्थ फेफड़े को नुकसान पहुंचाए बिना केवल खून बहने वाली नस का सटीक उपचार।"
  ],
  "specificRisksEn": [
    "Spinal cord ischemia / anterior spinal artery embolization causing transverse myelitis / paraplegia (<1%)",
    "Transitory retrosternal / intercostal chest pain and dysphagia",
    "Bronchial wall / esophageal necrosis",
    "Non-target embolization to systemic circulation (stroke, limb ischemia) via pulmonary venous shunts"
  ],
  "specificRisksHi": [
    "रीढ़ की हड्डी की नस (Anterior Spinal Artery) में गलती से कण चले जाने पर दोनों पैरों में पक्षाघात (Paralysis / Paraplegia - < 1% अत्यंत दुर्लभ लेकिन गंभीर)।",
    "छाती में दर्द, सीने में भारीपन व हल्का बुखार (24-48 घंटे तक)।",
    "खाना निगलने में अस्थायी दर्द/कठिनाई (भोजन नली की शाखाओं के कारण)।",
    "भविष्य में नई नसें बनने से दोबारा खून आना (10-20% संभावना)।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "दवाइयां (Tranexamic acid, कफ सिरप), ब्रोंकोस्कोपी द्वारा बैलून लगाना, अथवा फेफड़े का सर्जिकल ऑपरेशन (Lobectomy)।",
  "sedationTypeEn": "Regional spinal anesthesia or monitored conscious sedation with local anesthesia.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवाइयां (Conscious Sedation)।"
},
  "nbsa-embolization-recurrent-hemoptysis": {
  "id": "nbsa-embolization-recurrent-hemoptysis",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Non-Bronchial Systemic Arterial (NBSA) Embolization for Recurrent Hemoptysis",
  "nameHi": "नॉन-ब्रोंकियल सिस्टमिक आर्टरी एम्बोलाइजेशन (NBSA - फेफड़े के बाहर की अतिरिक्त नसों की बंदी)",
  "indicationEn": "Recurrent or persistent hemoptysis post-bronchial artery embolization; Pleural thickening > 3 mm or apical fibrocavitary disease recruiting chest wall collaterals; Transpleural systemic collateral supply from intercostal, internal mammary, subclavian, lateral thoracic, or inferior phrenic arteries",
  "indicationHi": "ब्रोंकियल धमनी बंद करने के बावजूद दोबारा खांसी में खून आना, जो छाती की दीवार (इन्टरकोस्टल, इंटरनल मेमोरी, सबस्कैपुलर) की नसों से फेफड़े में रिस रहा हो।",
  "descriptionEn": "Right common femoral arterial access under ultrasound guidance; 5F sheath placement. Selective catheterization of ipsilateral subclavian artery, internal mammary artery (IMA), costocervical / thyrocervical trunk, and thoracic intercostal arteries using 5F Headhunter or Simmons-1. For lower lobe/basal bleeding, selective catheterization of the ipsilateral inferior phrenic artery via celiac trunk or direct aortic origin. DSA acquisition identifying transpleural hypervascular arborization, parenchymal blush, and systemic-to-pulmonary vascular shunting.",
  "descriptionHi": "छाती की दीवार, पसलियों और कंधे की नसों (Intercostal & Internal Mammary Arteries) की सूक्ष्म शाखाओं में कैथेटर ले जाकर विशेष कणों या छल्लों द्वारा फेफड़े में जा रहे असामान्य खून के बहाव को सील किया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of non-bronchial systemic arterial (nbsa) embolization for recurrent hemoptysis without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "बार-बार होने वाले जटिल रक्तस्राव का संपूर्ण समाधान।",
    "फेफड़े के गंभीर क्रोनिक संक्रमण में रक्तस्राव से जीवन रक्षा।",
    "ओपन थोरेसिक सर्जरी से बचाव।"
  ],
  "specificRisksEn": [
    "Intercostal nerve ischemia / chronic neuropathic chest wall pain",
    "Spinal cord ischemia from occult radiculomedullary feeders",
    "Internal mammary territory ischemia (skin blanching / sternal necrosis)",
    "Diaphragmatic dysfunction following inferior phrenic artery embolization"
  ],
  "specificRisksHi": [
    "रीढ़ की हड्डी की शाखाओं (Spinal Branches) में कण जाने का दुर्लभ खतरा।",
    "छाती की दीवार व पसलियों में अस्थायी दर्द।",
    "त्वचा या मांसपेशियों में सुन्नपन।",
    "पंक्चर स्थल पर हेमेटोमा।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन थोरेकोटॉमी और फेफड़े का विच्छेदन अथवा आजीवन दवाइयां।",
  "sedationTypeEn": "Regional spinal anesthesia or monitored conscious sedation with local anesthesia.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ शामक दवा।"
},
  "rasmussen-pa-embolization": {
  "id": "rasmussen-pa-embolization",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Pulmonary Artery Pseudoaneurysm (Rasmussen Aneurysm) Embolization",
  "nameHi": "रासमुसेन एन्यूरिज्म एम्बोलाइजेशन (टीबी की कैविटी में फेफड़े की पल्मोनरी धमनी का फटना)",
  "indicationEn": "Active hemoptysis arising from cavity-associated pulmonary arterial pseudoaneurysm (Rasmussen aneurysm); Traumatic, iatrogenic (Swan-Ganz catheter-induced), or infectious pulmonary artery pseudoaneurysm; High rupture risk pulmonary arterial ectasia / saccular dilation within tubercular cavity",
  "indicationHi": "फेफड़े की पुरानी टीबी की कैविटी में पल्मोनरी धमनी की शाखा में बना स्यूडोएन्यूरिज्म (Rasmussen Aneurysm), जिससे अचानक मुंह से फव्वारे जैसा भारी खून बहता है।",
  "descriptionEn": "Right common femoral vein ultrasound-guided puncture; insertion of 6F/7F long guiding sheath. Navigation across the right heart chambers (RA -> RV -> Main PA) using a Berman/Grollman catheter over a 0.035\" stiff hydrophilic wire under continuous ECG monitoring. Digital subtraction pulmonary angiography (CTPA correlation) targeting the affected segmental pulmonary artery feeding the pseudoaneurysm. Stable positioning of guiding sheath in the main/lobar pulmonary trunk.",
  "descriptionHi": "जांघ की शिरा (Femoral Vein) के रास्ते दिल के दाहिने हिस्से से होते हुए फेफड़े की मुख्य धमनी (Pulmonary Artery) में कैथेटर पहुंचाया जाता है और फूली हुई नस के मुहाने पर धातु के सूक्ष्म छल्ले (Microcoils) अथवा वैस्कुलर प्लग डालकर नस को पूरी तरह बंद किया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of pulmonary artery pseudoaneurysm (rasmussen aneurysm) embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "अत्यंत घातक और अचानक होने वाले जानलेवा रक्तस्राव से तुरंत शत-प्रतिशत जीवन रक्षा।",
    "पल्मोनरी सर्कुलेशन के कम दबाव वाले सुरक्षित रास्ते से सटीक सीलिंग।",
    "आपातकालीन फेफड़े के बड़े ऑपरेशन से बचाव।"
  ],
  "specificRisksEn": [
    "Aneurysm rupture / exsanguination during wire/catheter manipulation",
    "Pulmonary infarction / wedge necrosis",
    "Cardiac dysrhythmias (transient RBBB / ventricular ectopy during heart crossing)",
    "Embolic migration of coil/plug into distal pulmonary arterial bed"
  ],
  "specificRisksHi": [
    "कैविटी में एन्यूरिज्म का प्रक्रिया के दौरान ही अचानक फट जाना।",
    "फेफड़े के संबंधित हिस्से में खून की कमी (Pulmonary Infarction)।",
    "छल्ले का अपनी जगह से खिसकना।",
    "हृदय की धड़कन में अस्थायी असंतुलन (Arrhythmia)।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "अत्यंत उच्च जोखिम वाली आपातकालीन पल्मोनरी रीसेक्शन सर्जरी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ शामक दवा अथवा पूर्ण बेहोशी।"
},
  "lga-embolization-peptic-ulcer": {
  "id": "lga-embolization-peptic-ulcer",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Upper GI Bleed: Left Gastric Artery (LGA) Coil & Gelfoam Embolization",
  "nameHi": "आमाशय के अल्सर से भारी रक्तस्राव की नस बंदी (LGA Embolization - खून की उल्टी का इलाज)",
  "indicationEn": "Massive upper gastrointestinal bleeding from gastric body / lesser curvature peptic ulcer refractory to endoscopic clipping/thermal therapy; Forrest Class Ia/Ib bleeding ulcer with hemodynamic instability; High-risk endoscopic recurrence or inaccessible lesser curve ulceration",
  "indicationHi": "पेट के अल्सर (Gastric Peptic Ulcer) से भारी रक्तस्राव या काले दस्त, जो एंडोस्कोपी द्वारा क्लिप लगाने के बाद भी दोबारा बहने लगा हो या रुक न रहा हो।",
  "descriptionEn": "Right common femoral artery retrograde access under ultrasound; 5F sheath insertion. Celiac axis angiography using 5F Yashiro catheter to identify left gastric artery origin, caliber, and presence of aberrant left hepatic artery branches. Selective engaged cannulation of LGA and DSA runs demonstrating contrast extravasation, pseudoaneurysm, or hypervascular ulcer crater. Superselective cannulation with 2.0F/2.4F microcatheter into anterior/posterior descending gastric branches feeding the ulcer crater.",
  "descriptionHi": "जांघ की नस से पेट की मुख्य सीलिएक धमनी के रास्ते आमाशय को खून देने वाली लेफ्ट गैस्ट्रिक धमनी (LGA) में माइक्रोकैथेटर ले जाया जाता है। वहां धातु के सूक्ष्म छल्ले (Coils) और जेलफोम (Gelfoam) डालकर खून बहाने वाली नस को तुरंत बंद कर दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of upper gi bleed: left gastric artery (lga) coil & gelfoam embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "खून की उल्टी और काले दस्त से तुरंत मुक्ति, मरीज की जान बचाना।",
    "पेट का बड़ा चीरा लगाकर आमाशय का ऑपरेशन करने से पूर्ण बचाव।",
    "आमाशय को अन्य नसों से खून मिलता रहने के कारण पेट की दीवार सुरक्षित रहना।"
  ],
  "specificRisksEn": [
    "Gastric mucosal necrosis / ischemic perforation (<1% due to rich gastric collaterals)",
    "Non-target embolization to aberrant left hepatic artery causing focal liver infarct",
    "Reflux into splenic or common hepatic artery",
    "Rebleeding from right gastric or gastroepiploic collaterals"
  ],
  "specificRisksHi": [
    "आमाशय की दीवार में खून की कमी या छाले (Gastric Ischemia - समृद्ध कोलेटरल्स के कारण बहुत दुर्लभ)।",
    "अन्य नसों से दोबारा हल्का रक्तस्राव (Recurrent Bleeding - 5-10%)।",
    "दवा का अग्न्याशय (Pancreas) या प्लीहा में जाना।",
    "जांघ में हेमेटोमा।"
  ],
  "alternativesEn": "Emergency exploratory laparotomy with open surgical ligation, packing, or organ resection, with blood product resuscitation.",
  "alternativesHi": "दोबारा एंडोस्कोपी द्वारा प्रयास अथवा आपातकालीन ओपन गैस्ट्रिक सर्जरी (Gastrotomy & Ulcer Underrunning)।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवा।"
},
  "gda-sandwich-embolization": {
  "id": "gda-sandwich-embolization",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Upper GI Bleed: Gastroduodenal Artery (GDA) Sandwich Coil Embolization",
  "nameHi": "गैस्ट्रोडुओडनल धमनी की 'सैंडविच' कोइलिंग (GDA Sandwich Coiling - आंत के अल्सर से रक्तस्राव की रोक)",
  "indicationEn": "Massive or recurrent duodenal bulb peptic ulcer bleeding (posterior wall erosions into GDA); Failed endoscopic hemostasis for Forrest Ia/Ib or IIa duodenal ulcer; Hemodynamically unstable patient with active contrast blush in the duodenal C-loop",
  "indicationHi": "ग्रहणी (Duodenum) के अल्सर से अत्यधिक ब्लीडिंग, जहां नस आगे और पीछे दोनों तरफ से खून खींचती है।",
  "descriptionEn": "Right common femoral artery ultrasound-guided puncture and 5F sheath placement. Celiac axis and common hepatic artery angiography to demonstrate GDA anatomy and extravasation. Superselective cannulation of GDA with 2.7F microcatheter. Execution of Sandwich Technique (crucial to prevent back-bleeding from SMA retrograde supply via anterior/posterior inferior pancreaticoduodenal arteries):",
  "descriptionHi": "गैस्ट्रोडुओडनल धमनी (GDA) में अल्सर के आगे (Distal) और अल्सर के पीछे (Proximal) दोनों तरफ सूक्ष्म धातु के छल्ले (Coils) सैंडविच की तरह पैक किए जाते हैं, ताकि उल्टे बहाव (Back-bleeding via SMA) से भी खून न बह सके।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of upper gi bleed: gastroduodenal artery (gda) sandwich coil embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "ग्रहणी के अल्सर से होने वाले जानलेवा रक्तस्राव की 95% अचूक रोक।",
    "बैक-ब्लीडिंग के खतरे का संपूर्ण खात्मा।",
    "आपातकालीन पेट के ऑपरेशन से बचाव।"
  ],
  "specificRisksEn": [
    "Rebleeding due to failure of back-door occlusion (retrograde fill from inferior pancreaticoduodenal arcade)",
    "Duodenal wall ischemia / stricture (rare)",
    "Hepatic artery dissection or inadvertent coil protrusion into proper hepatic artery",
    "Acute pancreatitis due to branch occlusion"
  ],
  "specificRisksHi": [
    "ग्रहणी या अग्न्याशय में सूजन (Pancreatitis / Duodenal Ischemia)।",
    "छल्ले का अपनी जगह से थोड़ा खिसकना।",
    "जांघ में रक्तस्राव।"
  ],
  "alternativesEn": "Emergency exploratory laparotomy with open surgical ligation, packing, or organ resection, with blood product resuscitation.",
  "alternativesHi": "इमरजेंसी सर्जिकल डुओडेनोटॉमी और अल्सर को टांकों द्वारा बांधना।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ शामक दवा।"
},
  "right-short-gastric-embolization": {
  "id": "right-short-gastric-embolization",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Upper GI Bleed: Right Gastric / Short Gastric Artery Microcoil Embolization",
  "nameHi": "राइट गैस्ट्रिक व शॉर्ट गैस्ट्रिक धमनी एम्बोलाइजेशन (आमाशय की शाखाओं की सूक्ष्म कोइलिंग)",
  "indicationEn": "Pyloric or antral ulcer hemorrhage supplied by the right gastric artery (RGA); Gastric fundal ulcer bleeding or splenic hilum pathology involving short gastric branches; Endoscopically refractory upper GI bleeding failing routine LGA/GDA devascularization",
  "indicationHi": "आमाशय के ऊपरी हिस्से या पाइलोरस के अल्सर या ट्यूमर से होने वाला ब्लीडिंग जो एंडोस्कोपी से नियंत्रित न हो।",
  "descriptionEn": "Right common femoral artery retrograde puncture and 5F sheath placement. Selective proper hepatic and splenic artery angiograms to visualize the right gastric artery (arising from proper or left hepatic artery) or short gastric arteries (arising from distal splenic branches). Coaxial navigation of 1.9F/2.4F microcatheter into small-caliber, highly tortuous target vessels under roadmap guidance. Magnification DSA to confirm direct extravasation or pseudoaneurysm at the pyloric or fundic margin.",
  "descriptionHi": "माइक्रोकैथेटर द्वारा आमाशय की छोटी शाखाओं में जाकर केवल खून बहने वाली महीन नस में 0.014\" के सूक्ष्म छल्ले या जेलफोम डालकर रक्तस्राव रोका जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of upper gi bleed: right gastric / short gastric artery microcoil embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "अत्यंत सटीक और लक्षित उपचार, जिससे आमाशय के बाकी हिस्से पर कोई असर नहीं पड़ता।",
    "खून की भारी कमी से तुरंत राहत।",
    "ओपन सर्जरी से बचाव।"
  ],
  "specificRisksEn": [
    "Hepatic artery spasm or intimal dissection",
    "Splenic focal infarction (for short gastric embolization)",
    "Target vessel perforation with stiff microguidewire",
    "Recurrent bleeding via collateral intramural gastric networks"
  ],
  "specificRisksHi": [
    "अस्थायी पेट दर्द।",
    "अन्य शाखाओं से रिसाव।",
    "पंक्चर स्थल पर हेमेटोमा।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल लिगेशन अथवा एंडोस्कोपिक क्लिपिंग।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "lgib-colic-microcoil-embolization": {
  "id": "lgib-colic-microcoil-embolization",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Lower GI Bleed: Superselective Colic Branch Microcoil Embolization",
  "nameHi": "बड़ी आंत से भारी रक्तस्राव की सुपरसिलेक्टिव कोइलिंग (Lower GI Bleed - मलाशय से खून आने का इलाज)",
  "indicationEn": "Acute, severe lower gastrointestinal bleeding (LGIB) with hemodynamic compromise; Active contrast extravasation demonstrated on CT Mesenteric Angiography in ileocolic, right, middle, or left colic artery branches; Endoscopically unmanageable or failed colonoscopic clip application for diverticular or angiodysplastic bleed",
  "indicationHi": "बड़ी आंत के डायवर्टिकुलोसिस, वाहिका विकृति (Angiodysplasia) या अल्सर से गुदा मार्ग से लगातार भारी लाल खून आना (Massive LGIB), जिससे हीमोग्लोबिन तेजी से गिर रहा हो।",
  "descriptionEn": "Right common femoral artery retrograde access under ultrasound; 5F sheath placement. Selective Superior Mesenteric Artery (SMA) or Inferior Mesenteric Artery (IMA) catheterization using 5F Simmons-1 or Cobra catheter. High-frame rate DSA (4-6 fps) with bowel motion suppression (Inj Buscopan / Glucagon 1 mg IV) to capture subtle extravasation. Superselective microcatheterization down to the vasa recta level immediately supplying the diverticulum or bleeding focus (strictly distal to the marginal artery of Drummond).",
  "descriptionHi": "जांघ की नस से एसएमए अथवा आईएमए के रास्ते बड़ी आंत की दीवार के पास स्थित वासा रेक्टा (Vasa Recta - 1 मिमी से पतली नस) तक माइक्रोकैथेटर ले जाया जाता है। केवल उस एक नस में 1-2 सूक्ष्म छल्ले (Microcoils) डालकर ब्लीडिंग रोक दी जाती है ताकि आंत के बाकी हिस्से का खून न रुके।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of lower gi bleed: superselective colic branch microcoil embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "बड़ी आंत से जानलेवा ब्लीडिंग का तुरंत सटीक खात्मा।",
    "बड़ी आंत को काटकर बाहर निकालने (Emergency Colectomy / Stoma) के भयानक ऑपरेशन से शत-प्रतिशत बचाव।",
    "मरीज के प्राकृतिक मल मार्ग का पूर्ण संरक्षण।"
  ],
  "specificRisksEn": [
    "Segmental bowel ischemia / ischemic colitis (1-3% with superselective vasa recta technique)",
    "Bowel stricture or delayed perforation",
    "Target vasa recta dissection or spasm simulating hemostasis",
    "Rebleeding from collateral marginal vessels"
  ],
  "specificRisksHi": [
    "आंत के उस छोटे टुकड़े में खून की कमी या छाला (Bowel Ischemia / Stricture - सुपरसिलेक्टिव तकनीक से < 2-3%)।",
    "आंत में दोबारा ब्लीडिंग होना।",
    "जांघ के पंक्चर स्थल पर हेमेटोमा।"
  ],
  "alternativesEn": "Emergency exploratory laparotomy with open surgical ligation, packing, or organ resection, with blood product resuscitation.",
  "alternativesHi": "आपातकालीन पेट खोलकर बड़ी आंत काटना (Total or Partial Colectomy with Colostomy Bag) अथवा कोलोनोस्कोपी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवा।"
},
  "sra-embolization-rectal-bleed": {
  "id": "sra-embolization-rectal-bleed",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Lower GI Bleed: Superior Rectal Artery (SRA) Microcoil Embolization",
  "nameHi": "सुपीरियर रेक्टल धमनी की कोइलिंग (SRA Embolization - मलाशय से ब्लीडिंग व बवासीर की आधुनिक नस बंदी)",
  "indicationEn": "Refractory lower GI rectal hemorrhage secondary to advanced rectal neoplasm, severe hemorrhoidal bleed, or solitary rectal ulcer; Radiation proctitis with torrential bleeding unresponsive to topical formalin or APC argon plasma coagulation; Patients unfit for surgical resection or transanal suture ligation",
  "indicationHi": "मलाशय (Rectum) से अत्यधिक रक्तस्राव, गंभीर बवासीर (Severe Bleeding Hemorrhoids) जहां सर्जरी जोखिम भरी हो, अथवा रेडिएशन प्रोक्टाइटिस।",
  "descriptionEn": "Retrograde right common femoral artery puncture and 5F sheath placement. Inferior Mesenteric Artery (IMA) cannulation using a 5F Simmons-1 catheter formed in the abdominal aorta. Selective IMA angiogram in shallow RAO view to visualize the terminal continuation into the superior rectal artery (SRA) and its terminal bifurcation into right and left branches. Coaxial navigation of 2.0F microcatheter into both terminal branches of the SRA.",
  "descriptionHi": "जांघ या कलाई की नस से मलाशय को खून देने वाली सुपीरियर रेक्टल धमनी की शाखाओं में सूक्ष्म कैथेटर ले जाकर छोटे छल्ले डाले जाते हैं, जिससे मलाशय के बढ़े हुए रक्तचाप व ब्लीडिंग में भारी कमी आती है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of lower gi bleed: superior rectal artery (sra) microcoil embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "गुदा मार्ग पर बिना कोई चीरा या घाव लगाए ब्लीडिंग से तुरंत राहत।",
    "दर्द रहित और डे-केयर प्रक्रिया।",
    "गुदा के मल नियंत्रण (Sphincter Continence) को कोई नुकसान नहीं।"
  ],
  "specificRisksEn": [
    "Rectal mucosal ischemic necrosis (rare due to robust middle/inferior rectal anastomoses)",
    "Transient tenesmus and pelvic cramping pain",
    "Accidental embolization of left colic artery branch causing left-sided ischemic colitis",
    "Puncture site hematoma"
  ],
  "specificRisksHi": [
    "मलाशय में हल्का दर्द या भारीपन का अहसास (Tenesmus)।",
    "अस्थायी हल्का बुखार।",
    "पंक्चर स्थल पर सूजन।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "सर्जिकल बवासीर ऑपरेशन (Hemorrhoidectomy), बैंडिंग, अथवा कोलोनोस्कोपिक उपचार।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ हल्की शामक दवा।"
},
  "trauma-pelvic-fracture-embolization": {
  "id": "trauma-pelvic-fracture-embolization",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Trauma: Pelvic Fracture Hemodynamic Instability Gelfoam Slurry Embolization",
  "nameHi": "पेल्विक फ्रैक्चर में जानलेवा रक्तस्राव की आपातकालीन एम्बोलाइजेशन (कूल्हे की हड्डी टूटने पर नस बंदी)",
  "indicationEn": "Severe pelvic ring fracture (vertical shear, APC-II/III, lateral compression) with ongoing hemodynamic shock despite external binder application and transfusion; Active arterial contrast extravasation or extensive pelvic retroperitoneal hematoma on trauma contrast CT; Persistent transfusion requirement (>4 units PRBCs/24h) directly attributable to pelvic fractures",
  "indicationHi": "सड़क दुर्घटना में कूल्हे की हड्डी (Pelvic Bone Fracture) टूटने के कारण पेडू के अंदर भारी ब्लीडिंग, अनियंत्रित शॉक और जान का तत्काल खतरा।",
  "descriptionEn": "Emergency ultrasound-guided common femoral artery cannulation (contralateral or ipsilateral unaffected side) with 5F or 6F sheath. Abdominal aortography and pelvic DSA using 5F Omni Flush catheter positioned at L3/L4 bifurcation to assess bilateral internal and external iliac trees. Rapid crossover / selective engagement of the affected internal iliac artery (IIA) using a 5F Cobra C2 or Roberts catheter. Selective anterior division IIA angiography in 20-30 degree ipsilateral oblique view.",
  "descriptionHi": "जांघ की नस से आपातकालीन रूप से दोनों तरफ की इंटरनल इलिएक धमनियों में कैथेटर ले जाकर विशेष अवशोष्य जेलफोम स्लरी (Gelfoam Slurry) छोड़ी जाती है। यह दवा पेडू की टूटी हड्डियों के आसपास खून बहाने वाली सभी नसों को तुरंत जाम कर देती है, जिससे रक्तस्राव फौरन रुक जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of trauma: pelvic fracture hemodynamic instability gelfoam slurry embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "दुर्घटना के गंभीर मरीजों में अनियंत्रित रक्तस्राव से तुरंत जीवन रक्षा।",
    "रक्तचाप का तुरंत सामान्य होना और शॉक से बचाव।",
    "अत्यंत घातक व असफल रहने वाली ओपन पेल्विक ब्लीडिंग सर्जरी से बचाव।"
  ],
  "specificRisksEn": [
    "Gluteal muscle necrosis or Morel-Lavallee lesion ischemia",
    "Pelvic nerve palsy / sciatic neuropathy from ischemic damage",
    "Bladder necrosis or erectile dysfunction",
    "Distal lower extremity accidental thromboembolism"
  ],
  "specificRisksHi": [
    "नितंब (Buttock) की मांसपेशियों या त्वचा में रक्त की कमी से दर्द (Gluteal Claudication/Necrosis - बहुत दुर्लभ)।",
    "पैर में थक्का जाना।",
    "गंभीर चोट के कारण मल्टी-ऑर्गन फेलियर का जोखिम।"
  ],
  "alternativesEn": "Emergency exploratory laparotomy with open surgical ligation, packing, or organ resection, with blood product resuscitation.",
  "alternativesHi": "ओपन सर्जिकल पेल्विक पैकिंग (Surgical Pre-peritoneal Pelvic Packing) अथवा एक्सटर्नल फिक्सेशन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता अथवा आपातकालीन पूर्ण बेहोशी (General Anesthesia)।"
},
  "trauma-superselective-pelvic-branch-embolization": {
  "id": "trauma-superselective-pelvic-branch-embolization",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Trauma: Superselective Internal Pudendal / Obturator / Superior Gluteal Artery Microcoil Embolization",
  "nameHi": "पेल्विक ट्रॉमा सुपरसिलेक्टिव ब्रांच कोइलिंग (कूल्हे की विशिष्ट खून बहाने वाली नस की सूक्ष्म बंदी)",
  "indicationEn": "Hemodynamically stabilized pelvic trauma patient with focal arterial contrast extravasation, pseudoaneurysm, or AV fistula; Targeted branch injury: Superior Gluteal (sacroiliac disruption), Obturator (pubic ramus fracture), or Internal Pudendal artery; Desire to avoid global internal iliac occlusion and prevent gluteal/pelvic floor ischemia",
  "indicationHi": "कूल्हे की चोट या फ्रैक्चर के बाद सीटी स्कैन पर विशिष्ट धमनियों (Internal Pudendal, Obturator, Superior Gluteal) से सीधा खून का फव्वारा (Active Extravasation) दिखना।",
  "descriptionEn": "Retrograde common femoral artery access and 5F sheath insertion; cross bifurcation to the injured internal iliac artery. Targeted selective angiogram of posterior division (for superior gluteal artery) or anterior division (for obturator and internal pudendal branches). Superselective microcatheter advancement into the bleeding vessel to a point immediately adjacent to the laceration or pseudoaneurysm. Deployment of mechanically detachable soft microcoils to trap and occlude the injured vessel segment both distal and proximal to the injury.",
  "descriptionHi": "माइक्रोकैथेटर द्वारा सीधे खून बहाने वाली विशिष्ट धमनी की नोक तक पहुंचकर सूक्ष्म धातु के छल्लों (Microcoils) द्वारा केवल उस घायल नस को सील किया जाता है, जिससे बाकी पेडू का रक्त संचार पूरी तरह सामान्य रहता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of trauma: superselective internal pudendal / obturator / superior gluteal artery microcoil embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "सटीक टारगेटेड हेमोस्टेसिस, अन्य अंगों पर कोई असर नहीं।",
    "नितंब या जननांगों में खून की कमी के जोखिम से बचाव।",
    "त्वरित जीवन रक्षा।"
  ],
  "specificRisksEn": [
    "Superior gluteal ischemic necrosis (if non-superselective occlusion occurs)",
    "Transient or permanent erectile dysfunction / clitoral numbness",
    "Vessel dissection / rupture during superselective wire crossing",
    "Groin hematoma"
  ],
  "specificRisksHi": [
    "अन्य फ्रैक्चर स्थलों से दोबारा रिसाव।",
    "नितंब में हल्का दर्द।",
    "पंक्चर स्थल पर रक्तस्राव।"
  ],
  "alternativesEn": "Emergency exploratory laparotomy with open surgical ligation, packing, or organ resection, with blood product resuscitation.",
  "alternativesHi": "ओपन सर्जिकल लिगेशन अथवा पेल्विक पैकिंग।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा अथवा पूर्ण बेहोशी।"
},
  "trauma-proximal-splenic-artery-embolization": {
  "id": "trauma-proximal-splenic-artery-embolization",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Trauma: High-Grade Splenic Laceration Proximal Splenic Artery Embolization (Plug / Coils)",
  "nameHi": "तिल्ली (प्लीहा) की चोट पर प्रॉक्सिमल स्प्लेनिक धमनी एम्बोलाइजेशन (तिल्ली को कटने से बचाना)",
  "indicationEn": "Hemodynamically stable or stabilized blunt splenic injury Grade III, IV, or V (AAST Classification); Multiple parenchymal lacerations or diffuse intrasplenic contrast pooling without focal pseudoaneurysm; Goal to lower intrasplenic perfusion pressure while preserving splenic immune function via collateral flow (short gastric & pancreatic branches)",
  "indicationHi": "पेट पर चोट लगने से तिल्ली फटना (High-grade Splenic Laceration Grade III-V), जिससे पेट में आंतरिक रक्तस्राव हो रहा हो लेकिन मरीज बातचीत कर रहा हो।",
  "descriptionEn": "Right common femoral artery retrograde access under ultrasound; 5F or 6F sheath placement. Celiac axis and selective splenic artery angiography using 5F Yashiro catheter. Advance catheter into the main splenic artery trunk to identify the dorsal pancreatic and great pancreatic (arteria pancreatica magna) artery takeoff. Target proximal landing zone: strictly distal to the dorsal pancreatic artery takeoff and proximal to the arteria pancreatica magna / splenic hilum.",
  "descriptionHi": "जांघ की नस से तिल्ली की मुख्य धमनी के शुरुआती हिस्से (Proximal Trunk) में एक वैस्कुलर प्लग (Amplatzer Plug) या बड़े छल्ले स्थापित किए जाते हैं। इससे तिल्ली के अंदर खून का दबाव गिर जाता है और रक्तस्राव तुरंत बंद हो जाता है, जबकि तिल्ली को पेट की अन्य कोलेटरल नसों से खून मिलता रहता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of trauma: high-grade splenic laceration proximal splenic artery embolization (plug / coils) without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "तिल्ली को ऑपरेशन द्वारा काटकर बाहर निकालने (Splenectomy) से 90% बचाव।",
    "शरीर की रोग प्रतिरोधक क्षमता (Immunity) का पूर्ण संरक्षण।",
    "पेट पर बिना कोई बड़ा चीरा लगाए आंतरिक रक्तस्राव की त्वरित रोकथाम।"
  ],
  "specificRisksEn": [
    "Total splenic infarction / abscess formation requiring splenectomy (<3%)",
    "Left pleural effusion and atelectasis",
    "Coil / plug migration or incorrect deployment covering celiac trunk or dorsal pancreatic artery",
    "Post-splenic embolization syndrome (pain, fever, leukocytosis)"
  ],
  "specificRisksHi": [
    "तिल्ली में बड़ा इन्फार्क्शन या फोड़ा बनना (Splenic Abscess - 3-5%)।",
    "रक्तस्राव जारी रहना जिसके लिए आपातकालीन सर्जरी की आवश्यकता पड़ सकती है।",
    "प्रक्रिया के बाद बाएं कंधे और पेट के ऊपरी हिस्से में दर्द व बुखार।",
    "अग्न्याशय में सूजन।"
  ],
  "alternativesEn": "Emergency exploratory laparotomy with open surgical ligation, packing, or organ resection, with blood product resuscitation.",
  "alternativesHi": "आपातकालीन पेट खोलकर तिल्ली निकाल देना (Open Splenectomy) अथवा आईसीयू में केवल निगरानी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवाइयां।"
},
  "trauma-distal-splenic-microcoil-embolization": {
  "id": "trauma-distal-splenic-microcoil-embolization",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Trauma: Splenic Parenchymal Pseudoaneurysm Superselective Distal Microcoil Embolization",
  "nameHi": "तिल्ली के स्यूडोएन्यूरिज्म की डिस्टल माइक्रोकोइलिंग (तिल्ली के घाव की सुपरसिलेक्टिव नस बंदी)",
  "indicationEn": "Blunt abdominal trauma with isolated focal splenic pseudoaneurysm or arteriovenous fistula on CT; Delayed presentation of traumatic splenic rupture / expanding intraparenchymal hematoma; Hemodynamically stable patient where preservation of remaining splenic parenchyma is paramount",
  "indicationHi": "तिल्ली की चोट के बाद तिल्ली के अंदर रक्त का फव्वारा (Active Jet) या स्यूडोएन्यूरिज्म बनना, जिसके फटने से अचानक भारी रक्तस्राव हो सकता है।",
  "descriptionEn": "Ultrasound-guided retrograde right common femoral artery puncture; 5F sheath insertion. Selective celiac and main splenic artery angiography. Identification of the injured polar or intrasplenic segmental branch supplying the pseudoaneurysm. Coaxial superselective catheterization using a 2.0F microcatheter directly into the segmental or subsegmental feeder.",
  "descriptionHi": "माइक्रोकैथेटर को तिल्ली के अंदर सीधे घाव वाली छोटी धमनी तक ले जाकर केवल उस जगह सूक्ष्म छल्ले डाले जाते हैं। पूरी तिल्ली सुरक्षित रहती है और केवल चोटिल हिस्सा बंद हो जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of trauma: splenic parenchymal pseudoaneurysm superselective distal microcoil embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "तिल्ली के 95% से अधिक हिस्से का पूर्ण संरक्षण।",
    "स्यूडोएन्यूरिज्म के फटने के जानलेवा खतरे से तुरंत बचाव।",
    "न्यूनतम दर्द और तेज रिकवरी।"
  ],
  "specificRisksEn": [
    "Segmental splenic infarction (<10-15% of spleen volume; usually asymptomatic)",
    "Pseudoaneurysm rupture during microcatheter manipulation",
    "Splenic abscess formation",
    "Persistent flow via secondary collateral feeding branches"
  ],
  "specificRisksHi": [
    "तिल्ली के एक छोटे हिस्से में इन्फार्क्शन।",
    "हल्का बुखार व पेट दर्द।",
    "पंक्चर स्थल पर हेमेटोमा।"
  ],
  "alternativesEn": "Emergency exploratory laparotomy with open surgical ligation, packing, or organ resection, with blood product resuscitation.",
  "alternativesHi": "प्रॉक्सिमल स्प्लेनिक एम्बोलाइजेशन अथवा ओपन स्प्लेनेक्टॉमी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "trauma-hepatic-bleeding-embolization": {
  "id": "trauma-hepatic-bleeding-embolization",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Trauma: Hepatic Parenchymal Bleeding & Pseudoaneurysm Microcoil / Liquid Embolization",
  "nameHi": "लिवर की चोट व रक्तस्राव की एम्बोलाइजेशन (लिवर फटने पर आपातकालीन नस बंदी)",
  "indicationEn": "Blunt or penetrating liver trauma (Grade III-V AAST) with active arterial blush or expanding intrahepatic pseudoaneurysm on CT; Post-surgical ongoing hepatic hemorrhage following perihepatic packing or damage control laparotomy; Hemobilia presenting with Quincke triad (biliary colic, jaundice, upper GI bleeding) following liver trauma",
  "indicationHi": "चोट लगने से लिवर की गंभीर क्षति (Hepatic Laceration Grade III-V), लिवर से पेट में भारी खून बहना या लिवर का स्यूडोएन्यूरिज्म।",
  "descriptionEn": "Ultrasound-guided retrograde right common femoral artery puncture; 5F sheath placement. Celiac axis, common hepatic, and superior mesenteric artery (SMA) arteriography to evaluate hepatic arterial anatomy and detect replaced right hepatic artery from SMA. Confirm portal vein opacification on delayed venous phase angiography. Superselective cannulation of right or left hepatic arterial segmental branch feeding the parenchymal laceration / pseudoaneurysm using 2.4F microcatheter.",
  "descriptionHi": "जांघ की नस से लिवर को खून पहुंचाने वाली हेपेटिक धमनी की घायल शाखा में माइक्रोकैथेटर ले जाया जाता है। वहां सूक्ष्म छल्ले या मेडिकल लिक्विड डालकर खून बहने वाली नस को तुरंत सील कर दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of trauma: hepatic parenchymal bleeding & pseudoaneurysm microcoil / liquid embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "लिवर फटने से होने वाले जानलेवा रक्तस्राव की तुरंत बिना ऑपरेशन रोक।",
    "लिवर के बड़े ऑपरेशन और लिवर का हिस्सा काटने (Hepatic Resection) से बचाव।",
    "लिवर को पोर्टल वेन से 75% खून मिलता रहने के कारण लिवर की कार्यक्षमता सुरक्षित रहना।"
  ],
  "specificRisksEn": [
    "Hepatic necrosis / ischemic hepatitis (elevated AST/ALT transaminases)",
    "Bile duct necrosis / ischemic stricture / intrahepatic biloma",
    "Liver abscess formation requiring percutaneous drainage",
    "Gallbladder ischemia / acute ischemic cholecystitis if cystic artery involved"
  ],
  "specificRisksHi": [
    "लिवर में फोड़ा बनना (Liver Abscess) या लिवर नेक्रोसिस (3-5%)।",
    "पित्त की नली में चोट या रिसाव (Biloma)।",
    "लिवर एंजाइम (SGOT/SGPT) में अस्थायी वृद्धि।",
    "रक्तस्राव जारी रहना।"
  ],
  "alternativesEn": "Emergency exploratory laparotomy with open surgical ligation, packing, or organ resection, with blood product resuscitation.",
  "alternativesHi": "आपातकालीन पेट खोलकर लिवर की सर्जिकल पैकिंग अथवा हेपेक्टॉमी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा अथवा पूर्ण बेहोशी।"
},
  "trauma-renal-artery-embolization": {
  "id": "trauma-renal-artery-embolization",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Trauma: Renal Artery Pseudoaneurysm / Active Extravasation Superselective Microcoil Embolization",
  "nameHi": "गुर्दे की चोट व रक्तस्राव की सुपरसिलेक्टिव एम्बोलाइजेशन (गुर्दा फटने पर नस बंदी)",
  "indicationEn": "Blunt or penetrating renal trauma (Grade III-IV AAST) with active arterial contrast extravasation, pseudoaneurysm, or large retroperitoneal hematoma; Gross persistent hematuria with hemodynamic instability due to segmental renal artery branch laceration; Preservation of maximum viable functioning nephron mass in traumatic kidney injury",
  "indicationHi": "चोट के कारण गुर्दे का फटना (Renal Trauma Grade III-IV), पेशाब में भारी खून आना (Gross Hematuria) अथवा गुर्दे का स्यूडोएन्यूरिज्म।",
  "descriptionEn": "Right common femoral artery retrograde access under ultrasound guidance; 5F sheath placement. Selective main renal artery catheterization using 5F RDC or Cobra catheter; baseline high-resolution DSA in AP and oblique projections. Identification of active contrast extravasation, arteriovenous shunting, or pseudoaneurysm arising from anterior/posterior division or interlobar branches. Coaxial superselective cannulation of the bleeding interlobar or arcuate vessel using 2.0F/2.4F microcatheter.",
  "descriptionHi": "जांघ की नस से गुर्दे के अंदर केवल खून बहाने वाली छोटी चोटिल धमनी तक माइक्रोकैथेटर ले जाकर सूक्ष्म छल्ले (Microcoils) डाले जाते हैं। इससे खून बहना तुरंत बंद हो जाता है और बाकी स्वस्थ गुर्दा पूरी तरह सुरक्षित रहता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of trauma: renal artery pseudoaneurysm / active extravasation superselective microcoil embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "गुर्दे को ऑपरेशन द्वारा काटकर बाहर निकालने (Nephrectomy) से 90% बचाव।",
    "गुर्दे की कार्यक्षमता (Renal Function) का अधिकतम संरक्षण।",
    "पेशाब में भारी खून आने से तुरंत मुक्ति।"
  ],
  "specificRisksEn": [
    "Focal renal cortical infarction (planned/minimized to <10%)",
    "Post-embolization syndrome (flank pain, fever, nausea)",
    "Contrast-induced acute kidney injury (CI-AKI)",
    "Renal artery main trunk dissection or spasm"
  ],
  "specificRisksHi": [
    "गुर्दे के एक छोटे हिस्से में खून की कमी (Segmental Renal Infarction)।",
    "प्रक्रिया के बाद हल्का बुखार व कमर दर्द (Post-embolization syndrome)।",
    "रक्तचाप में अस्थायी बदलाव।",
    "पंक्चर स्थल पर हेमेटोमा।"
  ],
  "alternativesEn": "Emergency exploratory laparotomy with open surgical ligation, packing, or organ resection, with blood product resuscitation.",
  "alternativesHi": "ओपन सर्जिकल नेफ्रेक्टॉमी (गुर्दा निकालना) अथवा कंजरवेटिव बेड रेस्ट।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ हल्की शामक दवा।"
},
  "pph-covered-stenting-viabahn": {
  "id": "pph-covered-stenting-viabahn",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Post-Pancreatectomy Hemorrhage (PPH): Hepatic / Gastroduodenal Stump Covered Stenting (Viabahn)",
  "nameHi": "व्हिपल ऑपरेशन के बाद रक्तस्राव पर कवर्ड स्टेंट लगाना (PPH Viabahn Stenting - जानलेवा ब्लीडिंग का इलाज)",
  "indicationEn": "Severe delayed Post-Pancreatectomy Hemorrhage (ISGPS Grade C PPH) following Whipple procedure / pancreaticoduodenectomy; Pseudoaneurysm of common hepatic artery (CHA) or gastroduodenal artery (GDA) stump with active bleeding or sentry bleed into surgical drains; Mandatory preservation of hepatic arterial flow to prevent fulminant ischemic liver necrosis or biliary anastomotic breakdown",
  "indicationHi": "अग्न्याशय के बड़े ऑपरेशन (Whipple Procedure) के बाद पित्त या पाचक रस के रिसाव से मुख्य धमनी गलकर फटना (Post-Pancreatectomy Hemorrhage)।",
  "descriptionEn": "Right common femoral artery puncture under ultrasound; placement of 6F or 7F long guiding sheath (45 cm). Selective celiac trunk catheterization and baseline DSA in AP and RAO cranial views to map CHA, proper hepatic artery (PHA), and GDA stump pseudoaneurysm. Exchange over a 0.035\" stiff guidewire (Rosen or Amplatz) placed deeply into the right or left hepatic artery. Advance the 6F/7F guiding sheath into the common hepatic artery to provide robust support.",
  "descriptionHi": "जांघ की नस से हेपेटिक धमनी के अंदर आवरणयुक्त स्टेंट (Viabahn Stent-Graft) ले जाकर फटी हुई जगह पर खोल दिया जाता है। यह स्टेंट नस के घाव को अंदर से सील कर देता है और लिवर को खून का बहाव चालू रखता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of post-pancreatectomy hemorrhage (pph): hepatic / gastroduodenal stump covered stenting (viabahn) without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "व्हिपल सर्जरी के बाद होने वाली 50-70% घातक ब्लीडिंग से तुरंत जीवन रक्षा।",
    "लिवर को खून पहुंचाते हुए फटी हुई नस की त्वरित सीलिंग।",
    "अत्यंत जोखिम भरी दोबारा पेट खोलने की सर्जरी से बचाव।"
  ],
  "specificRisksEn": [
    "Stent-graft thrombosis causing acute hepatic ischemia",
    "Endoleak (Type I or Type II) with persistent pseudoaneurysm perfusion",
    "Hepatic artery dissection or spasm during device delivery",
    "Stent infection secondary to adjacent pancreatic fluid collection / infected fistula"
  ],
  "specificRisksHi": [
    "संक्रमित पेट में स्टेंट में इन्फेक्शन होना (Stent-graft Sepsis)।",
    "स्टेंट में थक्का जमना जिससे लिवर में खून की कमी हो सकती है।",
    "एंडोलीक या दोबारा ब्लीडिंग।",
    "जांघ में रक्तस्राव।"
  ],
  "alternativesEn": "Emergency exploratory laparotomy with open surgical ligation, packing, or organ resection, with blood product resuscitation.",
  "alternativesHi": "आपातकालीन री-लैप्रोटोमी और सर्जिकल लिगेशन (अत्यंत उच्च मृत्यु दर)।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा अथवा पूर्ण बेहोशी।"
},
  "pph-coil-isolation-thrombin": {
  "id": "pph-coil-isolation-thrombin",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Post-Pancreatectomy Hemorrhage: Pseudoaneurysm Coil Isolation & Percutaneous / Transcatheter Thrombin Injection",
  "nameHi": "अग्न्याशय ऑपरेशन पश्चात स्यूडोएन्यूरिज्म का कोइलिंग व थ्रॉम्बिन उपचार",
  "indicationEn": "Grade B or C post-pancreatectomy hemorrhage where anatomy or vessel tortuosity precludes covered stent graft placement; Isolated pseudoaneurysm arising from branch of splenic, left gastric, or jejunal artery with intact alternate liver perfusion; Direct percutaneous ultrasound-guided thrombin injection for accessible superficial visceral pseudoaneurysm sacs",
  "indicationHi": "व्हिपल सर्जरी के बाद गैस्ट्रोडुओडनल या हेपेटिक धमनी के ठूंठ (Stump) पर बना स्यूडोएन्यूरिज्म, जहां स्टेंट लगाना संभव न हो।",
  "descriptionEn": "Transcatheter Route: Femoral arterial access and selective cannulation of the parent feeding vessel (e.g., splenic, dorsal pancreatic, or jejunal branch). Advance 2.0F microcatheter across the pseudoaneurysm neck: perform coil trapping (coiling outflow branch, followed by sac or parent artery packing across the defect). Percutaneous Route (for large accessible pseudoaneurysm sacs): Ultrasound-guided direct puncture of the pseudoaneurysm center using a 22G Chiba needle. Confirm intra-saccular tip position with color Doppler \"yin-yang\" sign and blood aspiration.",
  "descriptionHi": "कैथेटर द्वारा स्यूडोएन्यूरिज्म के मुहाने को छल्लों से अलग (Isolation) किया जाता है और थैली में सीधे कैथेटर या त्वचा के रास्ते थ्रॉम्बिन दवा डालकर उसे जमा दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of post-pancreatectomy hemorrhage: pseudoaneurysm coil isolation & percutaneous / transcatheter thrombin injection without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "फटने के कगार पर पहुंचे स्यूडोएन्यूरिज्म का संपूर्ण खात्मा।",
    "पुनः ओपन सर्जरी के भयानक खतरे से बचाव।",
    "रक्तस्राव की तत्काल रोकथाम।"
  ],
  "specificRisksEn": [
    "Distal thromboembolism into portal or mesenteric circulation",
    "Aneurysmal sac rupture during direct puncture or catheter advancement",
    "Allergic reaction to bovine thrombin preparation",
    "Ischemic bowel or liver infarction"
  ],
  "specificRisksHi": [
    "थ्रॉम्बिन का मुख्य हेपेटिक धमनी में चले जाना।",
    "थैली का प्रक्रिया के दौरान फटना।",
    "संक्रमण।"
  ],
  "alternativesEn": "Emergency exploratory laparotomy with open surgical ligation, packing, or organ resection, with blood product resuscitation.",
  "alternativesHi": "ओपन सर्जिकल लिगेशन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "splenic-aneurysm-covered-stent": {
  "id": "splenic-aneurysm-covered-stent",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Splenic Artery Aneurysm (SAA): Endovascular Covered Stent-Graft Exclusion",
  "nameHi": "तिल्ली की धमनी के एन्यूरिज्म का कवर्ड स्टेंट द्वारा उपचार (SAA Viabahn Exclusion)",
  "indicationEn": "True splenic artery aneurysm > 2 cm in diameter or documented rapid enlargement (>0.5 cm/yr); Splenic artery aneurysm in women of childbearing age, during pregnancy, or prior to liver transplantation; Symptomatic or ruptured splenic artery aneurysm with favorable non-calcified proximal and distal landing zones (>15 mm) in the mid-splenic artery",
  "indicationHi": "तिल्ली (प्लीहा) की मुख्य धमनी का 2 सेमी से अधिक फूल जाना (Splenic Artery Aneurysm), विशेष रूप से गर्भवती महिलाओं या लिवर सिरोसिस के मरीजों में फटने का उच्च खतरा।",
  "descriptionEn": "Retrograde right common femoral artery puncture under ultrasound; insertion of 7F long guiding sheath into upper abdominal aorta. Selective celiac axis catheterization and engagement of the main splenic artery origin. Deliver stiff 0.035\" Rosen or Amplatz wire into the distal splenic artery past the aneurysm neck into the splenic hilum. Track 7F Ansel sheath across the tortuous celiac-splenic take-off over the stiff wire.",
  "descriptionHi": "जांघ की नस से तिल्ली की धमनी के अंदर एन्यूरिज्म के आर-पार एक लचीला आवरणयुक्त स्टेंट (Viabahn) स्थापित किया जाता है, जिससे थैली में खून जाना बंद हो जाता है और तिल्ली को खून चालू रहता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of splenic artery aneurysm (saa): endovascular covered stent-graft exclusion without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "एन्यूरिज्म फटने के 70% जानलेवा खतरे से संपूर्ण मुक्ति।",
    "तिल्ली (प्लीहा) का 100% संरक्षण (तिल्ली निकालने की जरूरत नहीं पड़ती)।",
    "पेट पर बिना कोई चीरा लगाए न्यूनतम इनवेसिव सफल इलाज।"
  ],
  "specificRisksEn": [
    "Inability to track device due to extreme splenic artery tortuosity (\"gun-barrel\" effect)",
    "Endoleak (Type I or Type II via collateral branches) leading to persistent sac pressure",
    "Stent thrombosis resulting in splenic infarction",
    "Vessel rupture during delivery or post-dilatation"
  ],
  "specificRisksHi": [
    "तिल्ली की नस में अत्यधिक घुमाव के कारण स्टेंट मुड़ना या बंद होना (Stent Kinking/Thrombosis)।",
    "एंडोलीक।",
    "तिल्ली में आंशिक इन्फार्क्शन।",
    "जांघ में हेमेटोमा।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल एन्यूरिज्म रीसेक्शन अथवा स्प्लेनेक्टॉमी (तिल्ली निकालना)।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "splenic-aneurysm-sac-packing-onyx": {
  "id": "splenic-aneurysm-sac-packing-onyx",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Splenic Artery Aneurysm (SAA): Sac Packing with Detachable Coils & Onyx / Thrombin",
  "nameHi": "तिल्ली के एन्यूरिज्म की छल्लों व ऑनिक्स लिक्विड द्वारा पैकिंग (SAA Sac Packing)",
  "indicationEn": "Splenic artery aneurysm > 2 cm with excessive tortuosity, wide neck, or bifurcated hilar location unsuitable for covered stenting; Saccular aneurysm of splenic artery branch where parent vessel preservation is required; Recurrent flow or endoleak following previous stent-grafting",
  "indicationHi": "तिल्ली की नस का एन्यूरिज्म जो बहुत अधिक टेढ़ा-मेढ़ा हो या जहां शाखाएं निकल रही हों और स्टेंट लगाना संभव न हो।",
  "descriptionEn": "Right common femoral artery access and 6F guiding sheath placement into the splenic artery trunk. Roadmap fluoroscopy to identify aneurysm neck and parent vessel takeoff. Advance DMSO-compatible microcatheter (e.g., Rebar 18) directly into the center of the aneurysm sac. Deploy 3D framing detachable coils along the aneurysm wall to construct a stabilizing scaffold/basket (\"framing coil basket\").",
  "descriptionHi": "माइक्रोकैथेटर द्वारा सीधे एन्यूरिज्म की फूली हुई थैली के अंदर जाकर उसे सूक्ष्म छल्लों (Coils) और मेडिकल लिक्विड (Onyx/Glue) से पूरी तरह भर दिया जाता है, जिससे थैली ठोस हो जाती है और फटने का खतरा खत्म हो जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of splenic artery aneurysm (saa): sac packing with detachable coils & onyx / thrombin without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "जटिल व टेढ़े-मेढ़े एन्यूरिज्म का सुरक्षित और स्थायी उपचार।",
    "तिल्ली और आसपास के अंगों का संरक्षण।",
    "ओपन पेट की सर्जरी से बचाव।"
  ],
  "specificRisksEn": [
    "Onyx / coil herniation or migration into distal splenic bed causing splenic infarction",
    "Aneurysmal sac rupture during microcoil framing",
    "Microcatheter entrapment in Onyx polymer",
    "Post-embolization syndrome (pain, fever)"
  ],
  "specificRisksHi": [
    "ऑनिक्स लिक्विड का तिल्ली की मुख्य नस में चले जाना।",
    "तिल्ली में इन्फार्क्शन और हल्का पेट दर्द/बुखार।",
    "थैली का प्रक्रिया के दौरान फटना।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल लिगेशन अथवा स्प्लेनेक्टॉमी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "renal-artery-aneurysm-stent-assisted-coiling": {
  "id": "renal-artery-aneurysm-stent-assisted-coiling",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Renal Artery Aneurysm (RAA): Stent-Assisted Coiling at Main Renal Bifurcation",
  "nameHi": "गुर्दे की धमनी के एन्यूरिज्म की स्टेंट-असिस्टेड कोइलिंग (गुर्दा बचाते हुए थैली में छल्ले डालना)",
  "indicationEn": "Wide-necked (>4 mm or dome-to-neck ratio < 2) true renal artery aneurysm > 2 cm at the primary bifurcation; Symptomatic RAA (refractory renovascular hypertension, flank pain, hematuria); Renal artery aneurysm in women of childbearing age due to severe catastrophic rupture risk during pregnancy",
  "indicationHi": "गुर्दे की मुख्य धमनी के विभाजन स्थल पर 2 सेमी से बड़ा एन्यूरिज्म (Renal Artery Aneurysm - RAA), जिसके फटने या थक्का बनने से गुर्दा खराब होने का खतरा हो।",
  "descriptionEn": "Ultrasound-guided retrograde right common femoral artery puncture; insertion of 6F long guiding sheath into the renal artery. Selective renal angiogram detailing the aneurysm neck, relationship to anterior/posterior divisions, and parent vessel dimensions. Deliver a 0.014\" wire into the major outflow branch spanning across the aneurysm neck. Advance the microcatheter through or jailing alongside the stent delivery system into the aneurysm sac (\"jailing technique\").",
  "descriptionHi": "गुर्दे की मुख्य नस में एक जालीदार स्टेंट लगाया जाता है ताकि नस का रास्ता खुला रहे। फिर स्टेंट की जालियों के बीच से एक माइक्रोकैथेटर एन्यूरिज्म की थैली में डालकर उसे सूक्ष्म छल्लों से भर दिया जाता है। स्टेंट छल्लों को मुख्य नस में गिरने से रोकता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of renal artery aneurysm (raa): stent-assisted coiling at main renal bifurcation without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "गुर्दे को पूरी तरह सुरक्षित रखते हुए एन्यूरिज्म फटने के खतरे से 100% बचाव।",
    "गुर्दे की नस खुली रहना और गुर्दा खराब होने से बचाव।",
    "अत्यंत जटिल ओपन वैस्कुलर सर्जरी (Ex-vivo Bench Reconstruction) से बचाव।"
  ],
  "specificRisksEn": [
    "Thrombosis of the stent or renal segmental branches causing partial renal infarction",
    "Coil migration through stent struts into segmental renal vasculature",
    "Renal artery dissection from guiding sheath / stent manipulation",
    "Distal micro-embolism and acute deterioration of renal function"
  ],
  "specificRisksHi": [
    "छल्ले का स्टेंट से फिसलकर गुर्दे की छोटी नस में चले जाना।",
    "गुर्दे की धमनी में थक्का जमना।",
    "गुर्दे की कार्यप्रणाली में अस्थायी गिरावट।",
    "जांघ में हेमेटोमा।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल एन्यूरिज्म रिपेयर अथवा ऑटो-ट्रांसप्लांटेशन (गुर्दा बाहर निकालकर रिपेयर कर दोबारा लगाना)।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "renal-pseudoaneurysm-post-pcnl-nephrectomy": {
  "id": "renal-pseudoaneurysm-post-pcnl-nephrectomy",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Renal Artery Pseudoaneurysm Post-Partial Nephrectomy / PCNL Superselective Microcoil Embolization",
  "nameHi": "गुर्दे की पथरी सर्जरी (PCNL) के बाद पेशाब में खून आने पर सुपरसिलेक्टिव कोइलिंग",
  "indicationEn": "Severe gross hematuria or retroperitoneal hemorrhage following partial nephrectomy, percutaneous nephrolithotomy (PCNL), or percutaneous renal biopsy; Contrast CT or Doppler showing active pseudoaneurysm or high-flow arteriovenous fistula (AVF); Hemodynamic instability or rapid drop in hematocrit post-urological intervention",
  "indicationHi": "गुर्दे की पथरी के ऑपरेशन (PCNL) या आंशिक नेफ्रेक्टॉमी के बाद पेशाब में भारी लाल खून आना (Gross Hematuria) अथवा खून के थक्के बनने से पेशाब रुक जाना।",
  "descriptionEn": "Ultrasound-guided retrograde right common femoral artery puncture; 5F sheath insertion. Selective main renal artery angiogram using 5F RDC catheter in AP and RAO/LAO projections. Identify the surgical clip / nephrostomy tract and detect the injured interlobar or arcuate branch showing pseudoaneurysm sac or rapid venous filling (AVF). Superselective cannulation of the tiny feeding vessel using a 2.0F microcatheter over a 0.014\" guidewire.",
  "descriptionHi": "जांघ की नस से गुर्दे के अंदर केवल उस छोटी सी घायल नस (Pseudoaneurysm / AV Fistula) तक माइक्रोकैथेटर ले जाया जाता है। वहां 1-2 सूक्ष्म छल्ले डालकर ब्लीडिंग तुरंत रोक दी जाती है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of renal artery pseudoaneurysm post-partial nephrectomy / pcnl superselective microcoil embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "पेशाब में खून आना 10-15 मिनट के भीतर शत-प्रतिशत बंद।",
    "गुर्दा निकालने (Nephrectomy) के खतरे से 98% बचाव।",
    "मरीज को 24 घंटे के भीतर अस्पताल से छुट्टी।"
  ],
  "specificRisksEn": [
    "Minor wedge-shaped focal renal parenchymal infarction (<5% of kidney volume)",
    "Reflux of embolic material into main renal artery branch",
    "Transient worsening of gross hematuria as existing parenchymal clots wash out",
    "Pseudoaneurysm recurrence or delayed rupture"
  ],
  "specificRisksHi": [
    "गुर्दे के एक छोटे से हिस्से में खून की कमी (< 5% सेगमेंटल इन्फार्क्शन)।",
    "हल्का कमर दर्द या बुखार।",
    "पंक्चर स्थल पर सूजन।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जरी द्वारा गुर्दा निकालना अथवा निरंतर ब्लैडर वॉश व रक्त चढ़ाना।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ हल्की शामक दवा।"
},
  "uae-primary-pph-gelfoam": {
  "id": "uae-primary-pph-gelfoam",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Uterine Artery Embolization (UAE) for Primary Postpartum Hemorrhage (PPH) with Gelfoam Slurry",
  "nameHi": "प्रसव के बाद भारी रक्तस्राव पर बच्चेदानी की नस बंदी (PPH UAE - प्रसूता की जान व बच्चेदानी बचाना)",
  "indicationEn": "Severe primary postpartum hemorrhage refractory to uterotonic agents (Oxytocin, Ergometrine, Carboprost, Misoprostol) and uterine balloon tamponade (Bakri balloon); Persistent bleeding from uterine atony, genital tract lacerations, or coagulopathy post-vaginal or cesarean delivery; Desire to avoid emergent peripartum hysterectomy and preserve future fertility in hemodynamically stabilized patient",
  "indicationHi": "डिलीवरी या सिजेरियन के बाद बच्चेदानी से अत्यधिक जानलेवा रक्तस्राव (Primary Postpartum Hemorrhage), जो दवाइयों या मसाज से न रुक रहा हो।",
  "descriptionEn": "Bilateral or unilateral right common femoral artery puncture under ultrasound; 5F sheath placement. Non-selective pelvic DSA using a pigtail/flush catheter to assess uterine enlargement and identify active extravasation or pseudoaneurysm. Selective catheterization of the contralateral internal iliac artery and anterior division using a 5F Roberts Uterine Catheter (RUC) or Cobra C2. Superselective cannulation of the ascending uterine artery with a 2.7F microcatheter, placing the tip beyond the cervicovaginal branch.",
  "descriptionHi": "जांघ की नस से आपातकालीन कैथेटर बच्चेदानी को खून देने वाली दोनों यूटेराइन धमनियों में डाला जाता है। वहां विशेष अवशोष्य जेलफोम (Gelfoam Slurry) छोड़ी जाती है, जो रक्तस्राव तुरंत बंद कर देती है और कुछ हफ्तों में स्वतः घुल जाती है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of uterine artery embolization (uae) for primary postpartum hemorrhage (pph) with gelfoam slurry without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "अत्यधिक रक्तस्राव से प्रसूता की तत्काल जीवन रक्षा।",
    "बच्चेदानी को काटकर बाहर निकालने (Emergency Hysterectomy) से 90-95% बचाव।",
    "भविष्य में पुनः मां बनने की क्षमता (Fertility Preservation) का संरक्षण।"
  ],
  "specificRisksEn": [
    "Transient pelvic pain, fever, and leukocytosis (post-embolization syndrome)",
    "Endometritis / pelvic infection",
    "Uterine necrosis (extremely rare with temporary Gelfoam slurry)",
    "Groin puncture site hematoma or pseudoaneurysm"
  ],
  "specificRisksHi": [
    "रक्तस्राव जारी रहना जिसके कारण अंतिम विकल्प के रूप में बच्चेदानी निकालनी पड़े।",
    "प्रक्रिया के बाद पेडू में दर्द या ऐंठन।",
    "हल्का बुखार या योनि स्राव।",
    "जांघ में हेमेटोमा।"
  ],
  "alternativesEn": "Emergency exploratory laparotomy with open surgical ligation, packing, or organ resection, with blood product resuscitation.",
  "alternativesHi": "आपातकालीन ऑपरेशन द्वारा बच्चेदानी निकालना (Emergency Peripartum Hysterectomy) अथवा यूटेराइन पैकिंग।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ आईवी दर्द निवारक व शामक दवा।"
},
  "placenta-accreta-balloon-occlusion": {
  "id": "placenta-accreta-balloon-occlusion",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Prophylactic Internal Iliac Artery Balloon Occlusion Catheters for Placenta Accreta Spectrum (PAS)",
  "nameHi": "प्लेसेंटा एक्रेटा में बैलून कैथेटर लगाना (सिजेरियन के दौरान अत्यधिक ब्लीडिंग रोकने की पूर्व-तैयारी)",
  "indicationEn": "Antenatally diagnosed Placenta Accreta Spectrum (Placenta Increta or Percreta) scheduled for elective or semi-emergent Cesarean delivery; High risk of catastrophic hemorrhage during placental separation or Cesarean hysterectomy; Targeted temporary pelvic arterial devascularization to optimize surgical field visualization and reduce blood loss",
  "indicationHi": "गर्भावस्था में आंवल (Placenta) का बच्चेदानी की दीवार में गहराई तक धंस जाना (Placenta Accreta / Increta / Percreta), जिससे सिजेरियन के समय जानलेवा ब्लीडिंग का अत्यधिक खतरा हो।",
  "descriptionEn": "Patient positioned on hybrid operating table or transferred from IR suite; bilateral common femoral artery puncture under ultrasound; placement of 6F sheaths in both groins. Selective catheterization of bilateral internal iliac arteries (IIA) using 5F Cobra catheters. Exchange over 0.035\" stiff guidewires to position 8-10 mm compliant occlusion balloon catheters within the main anterior division or proximal trunk of both internal iliac arteries. Test balloon inflation with 1:1 contrast/saline under fluoroscopy to confirm complete vessel occlusion without migration; immediately deflate balloons.",
  "descriptionHi": "सिजेरियन ऑपरेशन से ठीक पहले दोनों जांघों की नसों से पेडू की मुख्य नसों (Internal Iliac Arteries) में गुब्बारे वाले कैथेटर स्थापित किए जाते हैं। जैसे ही शिशु का जन्म होता है, गुब्बारे फुलाकर बच्चेदानी का खून अस्थायी रूप से रोक दिया जाता है, जिससे सर्जन बिना भारी रक्तस्राव के सुरक्षित सर्जरी कर सकते हैं।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of prophylactic internal iliac artery balloon occlusion catheters for placenta accreta spectrum (pas) without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "सिजेरियन के दौरान जानलेवा भारी रक्तस्राव में 80% से अधिक की कमी।",
    "रक्त चढ़ाने (Blood Transfusion) की आवश्यकता में भारी कमी।",
    "मां और नवजात शिशु दोनों की सुरक्षा।"
  ],
  "specificRisksEn": [
    "Internal iliac or external iliac artery thrombosis / dissection",
    "Distal lower extremity ischemia from accidental external iliac occlusion",
    "Balloon rupture or catheter migration during patient manipulation",
    "Puncture site bleeding or retroperitoneal hematoma"
  ],
  "specificRisksHi": [
    "गुब्बारा फुलाने से धमनी की दीवार में चोट या फटना (< 1%)।",
    "पैरों की नसों में थक्का जमना (Arterial/Venous Thrombosis)।",
    "जांघ के पंक्चर स्थल पर हेमेटोमा।",
    "बच्चेदानी निकालने (Hysterectomy) की आवश्यकता फिर भी पड़ सकती है यदि प्लेसेंटा बहुत गहरा हो।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "बिना बैलून कैथेटर के पारंपरिक सिजेरियन हिस्टेरेक्टॉमी (अत्यधिक भारी रक्तस्राव का जोखिम)।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) - बाद में सिजेरियन हेतु स्पाइनल/जनरल एनेस्थीसिया।"
},
  "ufe-uterine-fibroids-microspheres": {
  "id": "ufe-uterine-fibroids-microspheres",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Uterine Fibroid Embolization (UFE) using Calibrated Microspheres (500-700 / 700-900 um)",
  "nameHi": "बच्चेदानी की रसौली की नस बंदी (Uterine Fibroid Embolization - UFE / बिना ऑपरेशन रसौली का इलाज)",
  "indicationEn": "Symptomatic uterine leiomyomas (heavy menstrual bleeding, pelvic bulk pain, urinary frequency); Desire for uterine preservation and avoidance of hysterectomy or myomectomy; Failed or refused hormonal medical management (progestins, GnRH analogues)",
  "indicationHi": "बच्चेदानी में रसौली (Fibroids) के कारण अत्यधिक व दर्दनाक माहवारी, खून की भारी कमी (Anemia), पेट में भारीपन या बार-बार पेशाब आना।",
  "descriptionEn": "Right common femoral or left radial artery access under ultrasound; 5F sheath placement. Pelvic aortography (optional) followed by selective catheterization of the contralateral internal iliac artery using a 5F Roberts Uterine Catheter. Superselective cannulation of the horizontal segment of the uterine artery using a 2.4F/2.7F microcatheter, positioned well distal to the cervicovaginal branch to prevent vaginal necrosis. DSA showing characteristic hypervascular fibroid blush (\"corymb of vessels\"). Check for utero-ovarian anastomoses.",
  "descriptionHi": "जांघ या कलाई की नस में एक छोटे से सुई के छेद द्वारा दोनों यूटेराइन धमनियों में माइक्रोकैथेटर पहुंचाया जाता है। वहां विशेष कैलिब्रेटेड माइक्रोस्फीयर कण (500-700 / 700-900 um) छोड़े जाते हैं, जो रसौली को मिलने वाला खून बंद कर देते हैं। रसौली धीरे-धीरे सूखकर सिकुड़ जाती है और बच्चेदानी सुरक्षित बच जाती है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of uterine fibroid embolization (ufe) using calibrated microspheres (500-700 / 700-900 um) without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "बिना बच्चेदानी निकाले (Uterus Preservation) रसौली का 100% संपूर्ण व स्थायी इलाज।",
    "पेट पर कोई बड़ा चीरा या टांका नहीं, कोई निशान नहीं।",
    "माहवारी में अत्यधिक रक्तस्राव से 90% महिलाओं को तुरंत स्थायी राहत।",
    "अस्पताल में केवल 24 घंटे का ठहराव और 1 सप्ताह में काम पर वापसी।"
  ],
  "specificRisksEn": [
    "Post-Embolization Syndrome (severe pelvic cramping, low-grade fever, nausea)",
    "Vaginal expulsion of necrotic submucosal fibroid (transcervical sloughing)",
    "Premature ovarian failure / transient amenorrhea (<1-2% under age 40; up to 8% >45 yrs)",
    "Inadvertent non-target embolization to ovaries or bladder"
  ],
  "specificRisksHi": [
    "प्रक्रिया के बाद 12 से 24 घंटे तक पेडू में तेज मरोड़/दर्द और उल्टी (Post-Embolization Syndrome - दवाओं द्वारा नियंत्रित)।",
    "हल्का बुखार और कुछ हफ्तों तक योनि से स्राव अथवा मृत रसौली के टुकड़ों का निकलना।",
    "अंडकोष (Ovary) पर प्रभाव से माहवारी का समय से पहले बंद होना (45 वर्ष से अधिक उम्र में 1-5%)।",
    "बच्चेदानी में संक्रमण (Endometritis - < 1%)।"
  ],
  "alternativesEn": "Total or subtotal abdominal/laparoscopic hysterectomy, myomectomy, or medical hormonal therapy.",
  "alternativesHi": "बच्चेदानी निकालने का ऑपरेशन (Hysterectomy), दूरबीन द्वारा केवल रसौली निकालना (Myomectomy), अथवा हार्मोनल दवाइयां।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ आईवी दर्द निवारक (PCA) एवं शामक दवाइयां।"
},
  "uae-symptomatic-adenomyosis": {
  "id": "uae-symptomatic-adenomyosis",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Uterine Artery Embolization for Symptomatic Diffuse / Focal Adenomyosis",
  "nameHi": "एडेनोमायोसिस की यूटेराइन आर्टरी एम्बोलाइजेशन (बच्चेदानी की सूजन व दर्दनाक माहवारी का इलाज)",
  "indicationEn": "Severe, debilitating dysmenorrhea and menorrhagia refractory to medical therapy (LNG-IUS, oral dienogest, GnRH analogues); Diffuse or focal adenomyosis with junctional zone thickness > 12 mm on MRI; Desire for uterine preservation and avoidance of definitive hysterectomy",
  "indicationHi": "बच्चेदानी की दीवार में सूजन व ग्रंथियों का फैलाव (Adenomyosis), जिससे माहवारी में असहनीय दर्द (Dysmenorrhea) और अत्यधिक ब्लीडिंग हो।",
  "descriptionEn": "Retrograde right common femoral or left transradial arterial access; 5F sheath placement. Selective cannulation of contralateral internal iliac artery and anterior division with 5F Roberts catheter. Coaxial superselective catheterization of the ascending uterine artery beyond the cervicovaginal branch using 2.4F microcatheter. Angiography revealing diffuse hypervascular myometrial enlargement without discrete circumscribed fibroid margins.",
  "descriptionHi": "यूटेराइन धमनियों में माइक्रोकैथेटर द्वारा सूक्ष्म कण डालकर बच्चेदानी की रोगग्रस्त आंतरिक परतों का असामान्य रक्त प्रवाह कम किया जाता है, जिससे बच्चेदानी की सूजन घटती है और दर्द समाप्त हो जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of uterine artery embolization for symptomatic diffuse / focal adenomyosis without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "बच्चेदानी को निकाले बिना गंभीर पेडू दर्द और ब्लीडिंग से 80-85% स्थायी राहत।",
    "बिना किसी सर्जिकल चीरे के सुरक्षित इलाज।",
    "जीवन की गुणवत्ता में भारी सुधार।"
  ],
  "specificRisksEn": [
    "Severe acute ischemic pelvic pain requiring prolonged opioid analgesia",
    "Transient amenorrhea or permanent ovarian insufficiency in perimenopausal women",
    "Endometritis or delayed uterine infection",
    "Non-target embolization to bladder or ovaries"
  ],
  "specificRisksHi": [
    "प्रक्रिया के बाद शुरुआती 24 घंटे में तेज पेडू दर्द व मरोड़।",
    "संक्रमण या बुखार।",
    "समय के साथ लक्षणों की आंशिक पुनरावृत्ति (15-20%)।"
  ],
  "alternativesEn": "Total or subtotal abdominal/laparoscopic hysterectomy, myomectomy, or medical hormonal therapy.",
  "alternativesHi": "हिस्टेरेक्टॉमी (बच्चेदानी निकालना), हार्मोनल आईयूडी (Mirena), अथवा GnRH इंजेक्शन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ आईवी एनाल्जेसिया व शामक दवा।"
},
  "uterine-avm-embolization-onyx-glue": {
  "id": "uterine-avm-embolization-onyx-glue",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Uterine Arteriovenous Malformation (AVM) Superselective Embolization with Onyx / Glue",
  "nameHi": "बच्चेदानी की रक्तवाहिनी विकृति की एम्बोलाइजेशन (Uterine AVM - जानलेवा ब्लीडिंग का इलाज)",
  "indicationEn": "Catastrophic, recurrent vaginal bleeding secondary to congenital or acquired uterine arteriovenous malformation (often post-D&C, Cesarean section, or trophoblastic disease); Color Doppler demonstrating high-velocity, low-resistance mosaic turbulence within myometrium (PSV > 50-80 cm/s, RI < 0.4); Avoidance of curettage (which precipitates torrential fatal hemorrhage)",
  "indicationHi": "गर्भपात या डीएंडसी (D&C) के बाद बच्चेदानी में नसों का असामान्य गुच्छा (Uterine AVM) बनना, जिससे अचानक फव्वारे जैसा भारी रक्तस्राव हो। डीएंडसी करने पर जान जाने का खतरा होता है।",
  "descriptionEn": "Ultrasound-guided right common femoral artery puncture; 5F sheath placement. Pelvic DSA and selective bilateral uterine arteriography identifying high-flow AVM nidus with immediate venous shunting into enlarged pelvic/internal iliac veins. Superselective microcatheterization of primary feeding arterial vessels directly into the proximal AVM nidus using DMSO-compatible microcatheter. If high-flow arteriovenous shunt: prime with a soft detachable microcoil or flow-directed glue (N-BCA:Lipiodol 1:2) to slow transit.",
  "descriptionHi": "जांघ की नस से माइक्रोकैथेटर द्वारा बच्चेदानी के नसों के गुच्छे के केंद्र (Nidus) में पहुंचकर विशेष मेडिकल गोंद (Glue / Glubran) अथवा ऑनिक्स (Onyx) इंजेक्ट किया जाता है, जो गुच्छे को तुरंत ठोस बनाकर ब्लीडिंग बंद कर देता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of uterine arteriovenous malformation (avm) superselective embolization with onyx / glue without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "अत्यंत घातक रक्तस्राव की तत्काल शत-प्रतिशत रोक।",
    "बच्चेदानी का पूर्ण संरक्षण, आपातकालीन हिस्टेरेक्टॉमी से बचाव।",
    "भविष्य में सामान्य गर्भधारण की संभावना का संरक्षण।"
  ],
  "specificRisksEn": [
    "Pulmonary embolism of liquid embolic via pelvic venous drainage",
    "Uterine necrosis or endometrial cavity scarring",
    "Microcatheter entrapment during Onyx casting",
    "Recurrence from ovarian or transpelvic collateral recruitment"
  ],
  "specificRisksHi": [
    "गोंद का पेल्विक शिराओं या फेफड़ों में चले जाना (Pulmonary Embolism - बहुत दुर्लभ)।",
    "बच्चेदानी की दीवार में आंशिक नेक्रोसिस।",
    "पेडू में दर्द व बुखार।"
  ],
  "alternativesEn": "Open surgical excision with high intraoperative bleeding risk, targeted medical therapy (Sirolimus), or lifelong compression therapy.",
  "alternativesHi": "आपातकालीन हिस्टेरेक्टॉमी (बच्चेदानी निकालना)।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा अथवा पूर्ण बेहोशी।"
},
  "ectopic-cervical-scar-chemoembolization": {
  "id": "ectopic-cervical-scar-chemoembolization",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Ectopic Pregnancy (Cervical / Cesarean Scar): Bilateral Uterine Artery Chemoembolization with Methotrexate",
  "nameHi": "सिजेरियन स्कार / सर्वाइकल एक्टोपिक गर्भधारण की कीमोएम्बोलाइजेशन (नसों द्वारा दवा व नस बंदी)",
  "indicationEn": "Hemodynamically stable cervical pregnancy or Cesarean scar pregnancy (CSP) with high risk of uterine rupture and torrential hemorrhage during evacuation; Failure of systemic intramuscular Methotrexate therapy with persistent gestational cardiac activity or rising beta-hCG; Fertility-sparing management to achieve avascular necrosis prior to ultrasound-guided hysteroscopic or suction curettage",
  "indicationHi": "गर्भ का बच्चेदानी के पुराने सिजेरियन के टांकों (Scar) या बच्चेदानी के मुंह (Cervix) पर ठहर जाना, जिसके फटने से अत्यधिक जानलेवा ब्लीडिंग हो सकती है।",
  "descriptionEn": "Retrograde right common femoral artery puncture under ultrasound; 5F sheath insertion. Selective catheterization of the contralateral internal iliac artery and anterior division using 5F Roberts Uterine Catheter. Superselective microcatheterization of the cervicovaginal or ascending uterine artery supplying the ectopic gestational sac. High-resolution DSA demonstrating hypervascular trophoblastic blush at the lower uterine segment or cervix.",
  "descriptionHi": "यूटेराइन धमनियों में माइक्रोकैथेटर डालकर सीधे असामान्य गर्भ को कैंसर रोधी दवा (Methotrexate) दी जाती है तथा नसों को जेलफोम से बंद कर दिया जाता है, जिससे गर्भ वहीं समाप्त होकर सूख जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of ectopic pregnancy (cervical / cesarean scar): bilateral uterine artery chemoembolization with methotrexate without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "बिना बच्चेदानी फटे और बिना ऑपरेशन के खतरनाक एक्टोपिक गर्भ का सफल समाधान।",
    "बच्चेदानी का पूर्ण संरक्षण।",
    "भारी रक्तस्राव और हिस्टेरेक्टॉमी से बचाव।"
  ],
  "specificRisksEn": [
    "Delayed uterine rupture / perforation requiring emergent laparotomy",
    "Systemic methotrexate toxicities (stomatitis, elevated transaminases, myelosuppression)",
    "Severe vaginal bleeding during subsequent surgical evacuation",
    "Post-embolization pain and fever"
  ],
  "specificRisksHi": [
    "गर्भ का पूरी तरह समाप्त न होना जिससे बाद में अतिरिक्त दवा या सर्जरी लगे।",
    "योनि से रक्तस्राव।",
    "मेथोट्रेक्सेट दवा के हल्के दुष्प्रभाव।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन अथवा लैप्रोस्कोपिक सर्जिकल रिसेक्शन, हिस्टेरेक्टॉमी, अथवा प्रणालीगत मेथोट्रेक्सेट इंजेक्शन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "pae-bph-microspheres": {
  "id": "pae-bph-microspheres",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Prostatic Artery Embolization (PAE) for Symptomatic BPH using 300-500 um Microspheres",
  "nameHi": "प्रोस्टेट धमनी एम्बोलाइजेशन (PAE - बिना चीरे या पेशाब की नली काटे गदूद का आधुनिक इलाज)",
  "indicationEn": "Moderate-to-severe lower urinary tract symptoms (LUTS) secondary to BPH (IPSS > 18, QoL score >= 3, Qmax < 12 mL/s); Prostate gland enlargement > 40-50 cc (particularly beneficial in large glands > 80-100 cc where TURP has high morbidity); Refractory urinary retention with catheter dependence, or patients unfit / unwilling for transurethral resection (TURP) / enucleation (HoLEP)",
  "indicationHi": "उम्र बढ़ने के कारण प्रोस्टेट ग्रंथि (गदूद - BPH) का बढ़ जाना, जिससे पेशाब रुक-रुक कर आना, रात में बार-बार उठना, पेशाब में रुकावट या बार-बार कैथेटर लगना।",
  "descriptionEn": "Retrograde right common femoral artery or left transradial artery access; insertion of 5F hydrophilic sheath. Crossover into contralateral internal iliac artery; perform 3D Cone Beam CT (CBCT) with non-ionic contrast injection in shallow ipsilateral oblique (30-35 deg) with caudal angulation (10 deg). Identify the origin of the prostatic artery (PA): type I (anterior division), type II (superior vesical), type III (obturator), or type IV (internal pudendal). Superselective cannulation of the 1-1.5 mm prostatic artery using a 1.9F/2.0F microcatheter over a 0.014\" microwire under roadmap guidance.",
  "descriptionHi": "जांघ या कलाई की नस से 1 मिमी से भी पतले माइक्रोकैथेटर द्वारा प्रोस्टेट ग्रंथि को खून देने वाली दोनों प्रोस्टेटिक धमनियों में सूक्ष्म कण (300-500 um Microspheres) छोड़े जाते हैं। गदूद को खून मिलना बंद होने से वह सूखकर सिकुड़ जाता है और पेशाब का रास्ता खुल जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of prostatic artery embolization (pae) for symptomatic bph using 300-500 um microspheres without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "पेशाब के रास्ते दूरबीन या ब्लेड से प्रोस्टेट काटने (TURP Surgery) से शत-प्रतिशत बचाव।",
    "पेशाब का स्वतः स्वाभाविक नियंत्रण और धार में भारी सुधार।",
    "यौन दुर्बलता (Erectile Dysfunction) या वीर्य के उल्टे बहने (Retrograde Ejaculation) का शून्य खतरा।",
    "डे-केयर प्रक्रिया: 24 घंटे में छुट्टी और दर्द रहित रिकवरी।"
  ],
  "specificRisksEn": [
    "Non-target embolization causing ischemic rectal ulceration or ischemic cystitis / bladder wall necrosis",
    "Transient dysuria, hematuria, or perineal discomfort (post-PAE syndrome in 10-20%)",
    "Transient acute urinary retention requiring catheter placement for 3-7 days",
    "Balanitis or penile skin ischemic breakdown (if internal pudendal collateral reflux)"
  ],
  "specificRisksHi": [
    "दवा का पेशाब की थैली (Bladder) या मलाशय की नसों में चले जाना (Non-target Embolization - < 1-2%)।",
    "प्रक्रिया के बाद 2-3 दिन तक पेशाब में जलन, बार-बार हाजत या हल्का दर्द (Post-PAE Symptoms)।",
    "अस्थायी रूप से कुछ दिनों हेतु कैथेटर की आवश्यकता पड़ना।",
    "पेशाब में हल्का खून आना।"
  ],
  "alternativesEn": "Transurethral resection of the prostate (TURP), robotic/open prostatectomy, or medical therapy with alpha-blockers.",
  "alternativesHi": "पेशाब के रास्ते दूरबीन का ऑपरेशन (TURP / Laser Prostatectomy), दवाइयां (Tamsulosin, Finasteride), अथवा परमानेंट कैथेटर।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवा।"
},
  "pae-prostate-cancer-hematuria": {
  "id": "pae-prostate-cancer-hematuria",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Prostatic Artery Embolization for Intractable Hematuria Secondary to Advanced Prostate Carcinoma",
  "nameHi": "प्रोस्टेट कैंसर में पेशाब से खून आने पर प्रोस्टेट एम्बोलाइजेशन (PAE for Hematuria)",
  "indicationEn": "Life-threatening or persistent gross hematuria secondary to locally advanced, castrate-resistant prostate cancer (CRPC) invading the bladder base/urethra; Failure of palliative radiotherapy, transurethral fulguration, and bladder irrigation; Severe transfusion dependency in palliative oncology patients unfit for radical surgery",
  "indicationHi": "उन्नत प्रोस्टेट कैंसर के कारण पेशाब में लगातार भारी खून आना (Intractable Hematuria), जिससे मरीज को बार-बार खून चढ़ाना पड़ रहा हो।",
  "descriptionEn": "Right common femoral artery access under ultrasound; 5F sheath placement. Selective pelvic angiogram to delineate pathological tumor hypervascularity, disorganized neoplastic vessels, and prostatic feeders. Superselective cannulation of the tumor-feeding prostatic arteries and accessory branches using 2.0F microcatheter. Roadmap verification to prevent non-target reflux into the middle rectal or obturator branches.",
  "descriptionHi": "प्रोस्टेट की नसों में सूक्ष्म कण और छल्ले डालकर कैंसर ग्रस्त प्रोस्टेट का रक्त प्रवाह बंद किया जाता है, जिससे पेशाब में खून आना तुरंत रुक जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of prostatic artery embolization for intractable hematuria secondary to advanced prostate carcinoma without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "पेशाब में खून आने की जानलेवा समस्या से तुरंत मुक्ति।",
    "बार-बार खून चढ़ाने और अस्पताल में भर्ती होने से राहत।",
    "कैंसर की गांठ के आकार में कमी।"
  ],
  "specificRisksEn": [
    "Non-target rectal or bladder mucosal ischemia",
    "Post-embolization perineal pain and pelvic spasm",
    "Transient acute urinary retention from clot accumulation",
    "Puncture site hematoma"
  ],
  "specificRisksHi": [
    "पेशाब की थैली में जलन या दर्द।",
    "कैंसर के कारण भविष्य में पुनः हल्का रक्तस्राव।",
    "मूत्र मार्ग में थक्के जमना।"
  ],
  "alternativesEn": "Transurethral resection of the prostate (TURP), robotic/open prostatectomy, or medical therapy with alpha-blockers.",
  "alternativesHi": "रेडिएशन थेरेपी, सिस्टोस्कोपी द्वारा कॉटरी, अथवा ब्लैडर इरिगेशन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "gae-knee-osteoarthritis-pain": {
  "id": "gae-knee-osteoarthritis-pain",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Genicular Artery Embolization (GAE) for Refractory Knee Osteoarthritis Pain",
  "nameHi": "घुटने के गठिया के दर्द की जेनिकुलर धमनी एम्बोलाइजेशन (GAE - घुटने के दर्द का बिना ऑपरेशन इलाज)",
  "indicationEn": "Moderate-to-severe pain from Kellgren-Lawrence (KL) Grade 2-3 knee osteoarthritis refractory to conservative therapy (NSAIDs, physiotherapy, intra-articular steroid / hyaluronic acid injections); Mild-to-moderate knee OA in patients ineligible for or wishing to delay Total Knee Arthroplasty (TKA); Persistent moderate-to-severe knee pain with localized tenderness over medial or lateral joint lines",
  "indicationHi": "घुटने के पुराने गठिया (Knee Osteoarthritis Grade 2-3) के कारण असहनीय दर्द, सूजन और चलने में लाचारी, जहां दवाइयां व इंजेक्शन बेअसर हो चुके हों और मरीज नी-रिप्लेसमेंट नहीं कराना चाहता हो।",
  "descriptionEn": "Antegrade ipsilateral superficial femoral artery puncture under ultrasound (or contralateral crossover approach) with 4F/5F slender sheath. Popliteal and genicular artery angiography in AP and oblique views: identify the descending genicular artery (DGA), superior medial genicular (SMGA), inferior medial genicular (IMGA), superior lateral genicular (SLGA), and inferior lateral genicular (ILGA). Correlate clinical point of maximum tenderness (e.g., medial joint line) with angiographic hypervascular \"tumor-like\" synovial capillary blush (\"hyperemic blush\"). Superselective cannulation of the branch supplying the inflamed synovium using a 1.7F-2.0F microcatheter over a 0.014\" wire.",
  "descriptionHi": "जांघ की नस से घुटने के जोड़ के चारों ओर सूजन पैदा करने वाली असामान्य सूक्ष्म नसों (Hypervascular Neovessels) में माइक्रोकैथेटर ले जाया जाता है। वहां विशेष सूक्ष्म कण (Imipenem/Cilastatin या Embozene 100 um) डालकर केवल दर्द व सूजन पैदा करने वाली नसों को सील कर दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of genicular artery embolization (gae) for refractory knee osteoarthritis pain without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "घुटने के असहनीय दर्द में 70-80% की भारी व स्थायी कमी।",
    "चलने-फिरने, सीढ़ियां चढ़ने और दैनिक कार्यों की क्षमता में अभूतपूर्व सुधार।",
    "घुटने का बड़ा ऑपरेशन (Total Knee Replacement) टलना या उससे बचाव।",
    "डे-केयर प्रक्रिया: 2 घंटे बाद मरीज अपने पैरों पर चलकर घर जा सकता है।"
  ],
  "specificRisksEn": [
    "Transient cutaneous erythema / mild skin discoloration over knee (resolves in 1-3 weeks)",
    "Subcutaneous paresthesia / local numbness",
    "Target vessel spasm during microcatheter manipulation",
    "Access site hematoma"
  ],
  "specificRisksHi": [
    "घुटने की त्वचा पर हल्का नीलापन या छाला (Transient Cutaneous Ischemia - 1-2 हफ्तों में स्वतः ठीक)।",
    "घुटने में शुरुआती 2-3 दिन हल्का दर्द या भारीपन।",
    "जांघ के पंक्चर स्थल पर हल्का नील पड़ना।"
  ],
  "alternativesEn": "Total knee arthroplasty (TKR), intra-articular steroid/PRP injections, or oral analgesics with physical therapy.",
  "alternativesHi": "घुटना बदलने का ऑपरेशन (Total Knee Replacement), घुटने में स्टेरॉयड/पीआरपी इंजेक्शन, अथवा फिजियोथेरेपी व दर्द की दवाइयां।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवा।"
},
  "frozen-shoulder-embolization": {
  "id": "frozen-shoulder-embolization",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Adhesive Capsulitis (Frozen Shoulder): Lateral Thoracic / Circumflex Humeral Artery Micro-Embolization",
  "nameHi": "कंधे के जकड़न व दर्द का एम्बोलाइजेशन (Frozen Shoulder Embolization - कंधे का दर्द रहित इलाज)",
  "indicationEn": "Refractory adhesive capsulitis in the freezing/frozen stage (>3 months duration) with severe night pain and restricted range of motion; Failure of conservative treatment (intra-articular corticosteroids, physical therapy, hydrodilatation); Persistent neovascularization and hypervascular synovial proliferation identified around the rotator interval and joint capsule",
  "indicationHi": "कंधे का गंभीर रूप से जाम होना (Adhesive Capsulitis / Frozen Shoulder), असहनीय रात का दर्द और हाथ ऊपर न उठ पाना, जो फिजियोथेरेपी से ठीक न हो रहा हो।",
  "descriptionEn": "Ipsilateral radial artery (preferred) or right common femoral artery puncture under ultrasound; 4F/5F sheath insertion. Selective cannulation of the ipsilateral subclavian and axillary artery using 4F JR4 or MPA catheter. Digital subtraction angiography of the axillary artery in neutral and externally rotated shoulder views. Identify pathological hypervascular neovascular blush around the glenohumeral joint capsule fed by branches of: anterior/posterior circumflex humeral, thoracoacromial, suprascapular, or lateral thoracic arteries.",
  "descriptionHi": "कलाई या जांघ की नस से कंधे के जोड़ के कैप्सूल में सूजन पैदा करने वाली नसों में सूक्ष्म कण डालकर असामान्य रक्त प्रवाह को शांत कर दिया जाता है, जिससे सूजन और दर्द तुरंत खत्म हो जाते हैं।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of adhesive capsulitis (frozen shoulder): lateral thoracic / circumflex humeral artery micro-embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "कंधे के दर्द में तुरंत भारी राहत और रात की सुकून भरी नींद।",
    "हाथ की गति और कंधे के लचीलेपन में त्वरित सुधार।",
    "कंधे के ऑपरेशन या एनेस्थीसिया में हाथ खींचने (Manipulation) से बचाव।"
  ],
  "specificRisksEn": [
    "Transient cutaneous erythema or mild shoulder aching",
    "Radial artery spasm or temporary occlusion",
    "Non-target muscle embolization",
    "Puncture site bruising"
  ],
  "specificRisksHi": [
    "कंधे की त्वचा पर हल्का नीलापन।",
    "हाथ में अस्थायी भारीपन।",
    "पंक्चर स्थल पर सूजन।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "कंधे में स्टेरॉयड इंजेक्शन, आर्थ्रोस्कोपिक कैप्सुलर रिलीज सर्जरी, अथवा दीर्घकालिक फिजियोथेरेपी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
},
  "lateral-epicondylitis-radial-recurrent-embolization": {
  "id": "lateral-epicondylitis-radial-recurrent-embolization",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Refractory Lateral Epicondylitis (Tennis Elbow): Radial Recurrent Artery Branch Micro-Embolization",
  "nameHi": "टेनिस एल्बो का एम्बोलाइजेशन (Lateral Epicondylitis - कोहनी के पुराने दर्द का नस द्वारा इलाज)",
  "indicationEn": "Chronic, debilitating lateral epicondylitis (>6 months) refractory to eccentric exercises, bracing, PRP, and steroid injections; Severe tenderness at the common extensor origin (extensor carpi radialis brevis - ECRB); Demonstrated angiofibroblastic hyperplasia and neovascularization on Doppler ultrasound",
  "indicationHi": "कोहनी के बाहरी हिस्से में पुराना व गंभीर दर्द (Tennis Elbow), हाथ से वजन उठाने या निचोड़ने में असमर्थता।",
  "descriptionEn": "Ipsilateral retrograde distal radial, retrograde brachial, or transfemoral access under ultrasound; 4F slender sheath placement. Brachial and proximal radial/interosseous arteriography to delineate the radial recurrent artery and interosseous recurrent branches. Identify the abnormal hyperemic capillary arborization matching the lateral epicondyle / ECRB insertion site. Superselective cannulation of the radial recurrent branch using a 1.7F microcatheter.",
  "descriptionHi": "कलाई की नस से कोहनी के टेंडन को खून देने वाली रेडियल रीकरंट धमनी की सूजन वाली शाखाओं में सूक्ष्म कण डालकर दर्द पैदा करने वाली नसों को बंद किया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of refractory lateral epicondylitis (tennis elbow): radial recurrent artery branch micro-embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "कोहनी के पुराने जिद्दी दर्द से स्थायी राहत।",
    "हाथ की पकड़ की ताकत में सुधार।",
    "कोहनी की सर्जरी से बचाव।"
  ],
  "specificRisksEn": [
    "Transient numbness or tingling over lateral epicondyle",
    "Local skin blanching or transient petechiae",
    "Radial/brachial artery vasospasm",
    "Access site ecchymosis"
  ],
  "specificRisksHi": [
    "त्वचा पर अस्थायी लालिमा।",
    "हल्की ऐंठन।",
    "पंक्चर स्थल पर नील पड़ना।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "पीआरपी इंजेक्शन, फिजियोथेरेपी, अथवा ओपन टेंडन रिलीज सर्जरी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता।"
},
  "plantar-fasciitis-medial-plantar-embolization": {
  "id": "plantar-fasciitis-medial-plantar-embolization",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Plantar Fasciitis: Medial Plantar Artery Hypervascular Branch Micro-Embolization",
  "nameHi": "एड़ी के पुराने दर्द का एम्बोलाइजेशन (Plantar Fasciitis Embolization - एड़ी का नस द्वारा इलाज)",
  "indicationEn": "Chronic recalcitrant plantar fasciitis (>6-12 months) with severe heel pain upon first morning steps; Failure of plantar orthotics, physical therapy, extracorporeal shockwave therapy (ESWT), and corticosteroid injections; Power Doppler ultrasound demonstration of neovascularization at the calcaneal insertion of the plantar fascia",
  "indicationHi": "सुबह उठकर पहला कदम रखने पर एड़ी में चुभनदार तेज दर्द (Plantar Fasciitis), जो महीनों के इलाज के बाद भी ठीक न हो रहा हो।",
  "descriptionEn": "Antegrade ipsilateral common femoral artery puncture or contralateral crossover access; 4F sheath placement. Selective catheterization of the posterior tibial artery using a 4F catheter; obtain foot arteriography in lateral and oblique projections. Identify the bifurcation of posterior tibial artery into medial and lateral plantar arteries, and detect pathological capillary blush over the medial calcaneal tuberosity. Superselective microcatheterization of the calcaneal branch of the medial or lateral plantar artery using a 1.7F microcatheter.",
  "descriptionHi": "जांघ या पंजे की नस से एड़ी की हड्डी व फेशिया में सूजन पैदा करने वाली मेडियल प्लांटर धमनी की सूक्ष्म शाखाओं को कैलिब्रेटेड कणों द्वारा सील किया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of plantar fasciitis: medial plantar artery hypervascular branch micro-embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "एड़ी के असहनीय दर्द से त्वरित और स्थायी मुक्ति।",
    "बिना दर्द के सामान्य चलने की क्षमता लौटना।",
    "एड़ी के ऑपरेशन से बचाव।"
  ],
  "specificRisksEn": [
    "Transient plantar dysesthesia or sole numbness (resolves in 1-2 weeks)",
    "Subcutaneous ecchymosis over medial heel",
    "Accidental non-target embolization of digital arteries (prevented by strict micro-roadmap)",
    "Groin puncture site hematoma"
  ],
  "specificRisksHi": [
    "तलवे में हल्का सुन्नपन।",
    "अस्थायी त्वचा का रंग बदलना।",
    "पंक्चर स्थल पर दर्द।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "एड़ी में स्टेरॉयड/पीआरपी इंजेक्शन, सिलिकॉन हील पैड, शॉकवेव थेरेपी, अथवा सर्जरी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता।"
},
  "varicocele-embolization-coils-foam": {
  "id": "varicocele-embolization-coils-foam",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Varicocele Embolization: Retrograde Spermatic Vein Embolization with Coils & STS 3% Foam",
  "nameHi": "वेरिकोसील एम्बोलाइजेशन (अंडकोष की फूली नसों का बिना चीरे का इलाज - निःसंतानता व दर्द से मुक्ति)",
  "indicationEn": "Symptomatic Grade II or III clinical varicocele causing persistent dull scrotal ache or heavy sensation; Male subfertility with abnormal semen analysis parameters (oligozoospermia, asthenozoospermia, teratozoospermia) in presence of palpable varicocele; Recurrent or persistent varicocele post-surgical ligation (Palomo, Ivanissevich, or subinguinal microsurgery)",
  "indicationHi": "अंडकोष में नसों का गुच्छा फूलना (Varicocele Grade 2-3), अंडकोष में भारीपन/दर्द, अथवा शुक्राणुओं की कमी (Male Infertility / Oligospermia)।",
  "descriptionEn": "Right internal jugular vein (preferred for direct downward trajectory) or right common femoral vein access under ultrasound; 5F sheath placement. Selective cannulation of the left renal vein and left internal spermatic vein (ISV) orifice using a 5F Cobra or Simmons catheter. Perform retrograde venography with patient performing Valsalva maneuver to grade incompetent valvular reflux and map collaterals (retroperitoneal, colonic, cross-pelvic). Advance catheter deep into the distal ISV to the level of the internal inguinal ring / superior pubic ramus.",
  "descriptionHi": "गर्दन या जांघ की नस से एक कैथेटर सीधे अंडकोष की खराब नस (Spermatic Vein) में डाला जाता है। उल्टे बहने वाले खून की पुष्टि के बाद नस के अंदर धातु के सूक्ष्म छल्ले (Coils) और फोम दवा (STS Foam) डालकर खराब नस को अंदर से स्थायी रूप से सील कर दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of varicocele embolization: retrograde spermatic vein embolization with coils & sts 3% foam without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "अंडकोष पर बिना कोई चीरा लगाए शत-प्रतिशत सुरक्षित इलाज।",
    "शुक्राणुओं की संख्या व गुणवत्ता में भारी सुधार (निःसंतानता का सफल इलाज)।",
    "अंडकोष के दर्द व भारीपन से तुरंत मुक्ति।",
    "डे-केयर प्रक्रिया: 2 घंटे बाद घर जा सकते हैं, अगले दिन से काम शुरू।"
  ],
  "specificRisksEn": [
    "Pampiniform plexus thrombophlebitis / scrotal swelling and tenderness (1-3%)",
    "Coil migration into the renal vein or pulmonary arterial circulation (<0.5%)",
    "Retroperitoneal vein perforation or extravasation",
    "Varicocele recurrence via parallel collateral channels"
  ],
  "specificRisksHi": [
    "पीठ या कमर के निचले हिस्से में हल्का दर्द (Flank Pain - 1-2 दिन)।",
    "छल्ले का अपनी जगह से फेफड़े की तरफ खिसकना (< 0.5% अत्यंत दुर्लभ)।",
    "अंडकोष में अस्थायी सूजन या दर्द (Thrombophlebitis)।",
    "समय के साथ नसों का दोबारा उभरना (Recurrence - 2-5%)।"
  ],
  "alternativesEn": "Open surgical or microscopic subinguinal varicocelectomy, or scrotal support.",
  "alternativesHi": "अंडकोष या पेट पर चीरा लगाकर नस बांधने का ऑपरेशन (Microscopic Varicocelectomy / Laparoscopic Surgery) अथवा केवल सपोर्टर पहनना।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "गर्दन या जांघ में स्थानीय सुन्नता (Local Anesthesia) का इंजेक्शन।"
},
  "high-flow-priapism-embolization": {
  "id": "high-flow-priapism-embolization",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "High-Flow Priapism (Arterial Priapism): Superselective Pudendal / Cavernosal Artery Microcoil / Autologous Clot Embolization",
  "nameHi": "हाई-फ्लो प्रियापिज्म की एम्बोलाइजेशन (चोट के बाद लिंग के असामान्य लगातार तनाव का इलाज)",
  "indicationEn": "Persistent non-ischemic, painless high-flow priapism secondary to blunt perineal/straddle trauma lacerating the cavernosal artery; Color Doppler demonstration of high-flow arterio-lacunar fistula with turbulent flow within corpus cavernosum (normal blood gases: pO2 > 90 mmHg, pH > 7.4); Failure of conservative perineal ice compression or refractory to intracavernosal aspiration",
  "indicationHi": "चोट लगने के बाद लिंग की धमनी फटने से लिंग का लगातार बिना दर्द के कड़ा बने रहना (High-Flow / Non-Ischemic Arterial Priapism)।",
  "descriptionEn": "Retrograde right common femoral artery puncture under ultrasound; 4F/5F sheath placement. Selective cannulation of the internal iliac artery and anterior division using a 5F Cobra or Roberts catheter. Catheterize the internal pudendal artery and perform high-resolution DSA in 30-degree ipsilateral oblique projection with caudal angulation. Identify the arterio-lacunar fistula arising from the cavernosal artery with pooling of contrast directly into the sinusoidal space of the corpus cavernosum.",
  "descriptionHi": "जांघ की नस से पुडेंडल या कैवर्नोसल धमनी में माइक्रोकैथेटर ले जाकर फटी हुई नस में मरीज के अपने खून का थक्का (Autologous Blood Clot) या सूक्ष्म छल्ले डाले जाते हैं, जिससे असामान्य दबाव सामान्य हो जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of high-flow priapism (arterial priapism): superselective pudendal / cavernosal artery microcoil / autologous clot embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "लिंग के असामान्य तनाव से तुरंत मुक्ति।",
    "भविष्य में सामान्य इरेक्शन और यौन क्षमता का पूर्ण संरक्षण।",
    "सर्जरी के बिना मिनिमली इनवेसिव इलाज।"
  ],
  "specificRisksEn": [
    "Permanent erectile dysfunction (significantly minimized with superselective temporary autologous clot/Gelfoam technique)",
    "Non-target embolization to dorsal penile artery causing glans ischemia",
    "Penile gangrene / skin necrosis",
    "Fistula recurrence following autologous clot lysis (requires repeat coiling)"
  ],
  "specificRisksHi": [
    "इरेक्टाइल डिस्फंक्शन (नपुंसकता) का दुर्लभ जोखिम यदि गलत नस बंद हो जाए।",
    "प्रियापिज्म का दोबारा होना।",
    "पंक्चर स्थल पर हेमेटोमा।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "बर्फ की सिकाई, वेसोकॉन्स्ट्रिक्टर इंजेक्शन, अथवा सर्जिकल वैस्कुलर लिगेशन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "radiation-cystitis-sva-embolization": {
  "id": "radiation-cystitis-sva-embolization",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Intractable Hematuria from Radiation Cystitis: Bilateral Superior Vesical Artery Superselective Embolization",
  "nameHi": "रेडिएशन सिस्टाइटिस में पेशाब से खून आने पर सुपीरियर वेसिकल धमनी की एम्बोलाइजेशन",
  "indicationEn": "Severe, life-threatening gross hematuria secondary to radiation cystitis (post-pelvic radiotherapy for cervical, prostate, rectal, or bladder cancer); Failure of conservative measures (continuous bladder irrigation, intravesical alum / formalin instillation, hyperbaric oxygen therapy); Transfusion-dependent bleeding in patients unsuitable for emergency cystectomy and urinary diversion",
  "indicationHi": "कैंसर के रेडिएशन के बाद पेशाब की थैली से लगातार भारी खून आना (Radiation Cystitis Hematuria), जिससे मरीज को बार-बार खून चढ़ाना पड़ रहा हो।",
  "descriptionEn": "Ultrasound-guided retrograde right common femoral artery puncture; 5F sheath placement. Selective cannulation of the contralateral internal iliac artery anterior division using a 5F Roberts Uterine Catheter or Cobra catheter. Pelvic DSA in 25-30 degree ipsilateral oblique projection to identify the origin of the superior vesical artery (SVA) from the umbilical artery trunk. Superselective cannulation of the SVA using a 2.0F/2.4F microcatheter over a 0.014\" wire.",
  "descriptionHi": "जांघ की नस से पेशाब की थैली को खून देने वाली दोनों तरफ की सुपीरियर वेसिकल धमनियों में माइक्रोकैथेटर ले जाकर सूक्ष्म कण और छल्ले डाले जाते हैं, जिससे थैली से ब्लीडिंग बंद हो जाती है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of intractable hematuria from radiation cystitis: bilateral superior vesical artery superselective embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "पेशाब में खून आने से तुरंत स्थायी राहत।",
    "बार-बार खून चढ़ाने और अस्पताल में भर्ती होने से मुक्ति।",
    "पेशाब की थैली निकालने (Cystectomy) के भयानक ऑपरेशन से बचाव।"
  ],
  "specificRisksEn": [
    "Bladder wall ischemic necrosis or perforation (rare with superselective microcatheter technique)",
    "Transient pelvic pain, vesical tenesmus, and bladder spasms",
    "Non-target embolization to prostate, uterus, or rectum",
    "Puncture site hematoma or pseudoaneurysm"
  ],
  "specificRisksHi": [
    "पेशाब की थैली में दर्द या ऐंठन।",
    "थैली की दीवार में आंशिक नेक्रोसिस का बहुत दुर्लभ जोखिम।",
    "हल्का बुखार।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "हाइपरबेरिक ऑक्सीजन, फॉर्मेलिन इंस्टिलेशन, सिस्टोस्कोपी, अथवा सिस्टेक्टॉमी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "budd-chiari-hv-angioplasty": {
  "id": "budd-chiari-hv-angioplasty",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Budd-Chiari Syndrome: Hepatic Vein Balloon Angioplasty & Recanalization",
  "nameHi": "बड-कियारी सिंड्रोम: हेपेटिक वेन बैलून एंजियोप्लास्टी (लिवर की बंद नस को गुब्बारे से खोलना)",
  "indicationEn": "Symptomatic short-segment (< 2 cm) membranous or fibrotic hepatic vein web / stenosis; Refractory ascites, congestive hepatopathy, and portal hypertension secondary to hepatic venous outflow tract obstruction; Early-stage Budd-Chiari syndrome with preserved liver parenchyma and patent downstream segment",
  "indicationHi": "लिवर से खून ले जाने वाली हेपेटिक नसों का बंद होना (Budd-Chiari Syndrome), जिससे पेट में अत्यधिक पानी भरना (Ascites), पीलिया और लिवर फेल होने का खतरा हो।",
  "descriptionEn": "Ultrasound-guided right internal jugular vein (RIJV) puncture and placement of an 8F 45cm vascular sheath directed into the suprahepatic IVC. Suprahepatic cavography and selective catheterization of the thrombosed/stenosed hepatic vein ostium using a 5F MPA or Cobra catheter. Engagement and sharp or blunt recanalization across the membranous web using a stiff 0.035\" hydrophilic angled wire supported by catheter or 16G Rösch-Uchida needle under dual-plane fluoroscopic guidance. Advancement of wire into distal hepatic vein branch followed by catheter exchange over an extra-stiff exchange wire (Amplatz Super Stiff 260 cm).",
  "descriptionHi": "गले या जांघ की नस से कैथेटर डालकर लिवर की बंद नस में तार ले जाया जाता है। नस की रुकावट को हाई-प्रेशर गुब्बारे से फैलाकर रास्ता खोला जाता है जिससे लिवर का रक्त प्रवाह सामान्य हो सके।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of budd-chiari syndrome: hepatic vein balloon angioplasty & recanalization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "लिवर के अंदर का खतरनाक दबाव तुरंत कम होना।",
    "पेट में पानी भरने की समस्या से मुक्ति और लिवर सिरोसिस से बचाव।",
    "बिना किसी बड़े ऑपरेशन के प्राकृतिक नसों का पुनरुद्धार।"
  ],
  "specificRisksEn": [
    "Hepatic vein rupture / intra-peritoneal capsular hemorrhage (emergency balloon tamponade/covered stent required)",
    "Subcapsular hepatic hematoma",
    "Thromboembolism to pulmonary arterial tree",
    "Early recoil and acute re-thrombosis (necessitating secondary bare metal stenting)"
  ],
  "specificRisksHi": [
    "लिवर की नस का फटना या लिवर में आंतरिक रक्तस्राव।",
    "नस का दोबारा बंद होना (Restenosis - जिसके लिए स्टेंट लगाना पड़ सकता है)।",
    "हार्ट फेलियर या हृदय पर दबाव बढ़ना (अचानक वीनस रिटर्न बढ़ने के कारण)।",
    "संक्रमण या बुखार।"
  ],
  "alternativesEn": "Surgical portosystemic shunt, emergency liver transplantation, or medical anticoagulation and diuretics.",
  "alternativesHi": "लिवर वेन स्टेंटिंग, टिप्स (TIPS/DIPS), सर्जिकल शंट, अथवा लिवर ट्रांसप्लांट।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवाइयां।"
},
  "budd-chiari-hv-stenting": {
  "id": "budd-chiari-hv-stenting",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Budd-Chiari Syndrome: Hepatic Vein Self-Expanding Bare Metallic Stenting (Wallstent / E-Luminexx)",
  "nameHi": "बड-कियारी सिंड्रोम: हेपेटिक वेन स्टेंटिंग (लिवर की नस में स्थायी धातु की जाली लगाना)",
  "indicationEn": "Significant residual stenosis (> 30%) or persistent trans-stenotic pressure gradient > 5 mmHg after balloon angioplasty of hepatic vein; Elastic recoil, flow-limiting intimal dissection, or recurrent hepatic vein occlusion post-angioplasty; Long-segment fibrotic hepatic venous obstruction unsuitable for balloon dilation alone",
  "indicationHi": "लिवर की नस में ऐसा कड़ा अवरोध जो केवल गुब्बारे से न खुल रहा हो अथवा बार-बार सिकुड़ जाता हो (Recurrent Occlusion)।",
  "descriptionEn": "Transjugular access via right internal jugular vein with 9F/10F 45cm sheath parked in IVC above the hepatic vein confluence. Recanalization of the obstructed hepatic vein using a 5F MPA catheter and angled hydrophilic stiff guidewire, followed by wire exchange for an Amplatz Super Stiff wire anchored deep in a peripheral hepatic vein branch. Pre-dilatation with an 8 mm or 10 mm high-pressure balloon to prep the fibrotic tract and establish a runway. Precise deployment of a self-expanding bare metallic stent (10-14 mm diameter, sized 10-20% larger than normal reference vein), ensuring 5-10 mm protrusion into the IVC to prevent ostial slippage without jailing the contralateral hepatic vein or compromising cava flow.",
  "descriptionHi": "लिवर की नस को गुब्बारे से फैलाने के बाद उसमें एक मजबूत सेल्फ-एक्सपैंडिंग धातु का स्टेंट (Wallstent / E-Luminexx) स्थापित किया जाता है, जो नस को जीवन भर खुला रखता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of budd-chiari syndrome: hepatic vein self-expanding bare metallic stenting (wallstent / e-luminexx) without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "लिवर की नस के लंबे समय तक खुले रहने (Long-term Patency) की उच्च सफलता दर।",
    "पेट के पानी और लिवर की सूजन से स्थायी राहत।",
    "लिवर ट्रांसप्लांट की आवश्यकता टालना।"
  ],
  "specificRisksEn": [
    "Stent migration into the IVC or right atrium / right ventricle",
    "Hepatic venous rupture / hemoperitoneum",
    "Acute in-stent thrombosis (requires emergency thrombolysis/mechanical thrombectomy)",
    "Late in-stent intimal hyperplasia"
  ],
  "specificRisksHi": [
    "स्टेंट का अपनी जगह से दिल की तरफ खिसकना (Stent Migration into Right Atrium - बहुत दुर्लभ)।",
    "स्टेंट में थक्का जमना (Stent Thrombosis)।",
    "लिवर में हेमेटोमा या ब्लीडिंग।"
  ],
  "alternativesEn": "Surgical portosystemic shunt, emergency liver transplantation, or medical anticoagulation and diuretics.",
  "alternativesHi": "टिप्स (TIPS/DIPS), सर्जिकल पोर्टो-कैवल शंट, अथवा लिवर ट्रांसप्लांट।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "budd-chiari-dips": {
  "id": "budd-chiari-dips",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Budd-Chiari Syndrome: Direct Intrahepatic Portosystemic Shunt (DIPS) Transcaval Puncture",
  "nameHi": "बड-कियारी सिंड्रोम: डायरेक्ट इंट्राहेपेटिक पोर्टोसिस्टेमिक शंट (DIPS - आईवीसी से पोर्टल वेन तक नया बाईपास)",
  "indicationEn": "Complete, extensive occlusion/obliteration of all three major hepatic veins and accessory veins refractory to angioplasty or stenting; Budd-Chiari syndrome with refractory ascites, hydrothorax, or recurrent bleeding esophageal/gastric varices; Caudate lobe hypertrophy compressing the intrahepatic IVC with failed conventional transjugular intrahepatic portosystemic shunt (TIPS)",
  "indicationHi": "लिवर की तीनों मुख्य नसों का पूर्णतः बंद व सूख जाना (Complete HV Occlusion), जहां सामान्य टिप्स या स्टेंटिंग संभव न हो और लिवर फेल हो रहा हो।",
  "descriptionEn": "Ultrasound-guided cannulation of the right internal jugular vein and placement of a 10F 40cm TIPS sheath into the intrahepatic IVC. Intravascular ultrasound (IVUS) guidance or biplane fluoroscopic targeting aligned with the main portal vein bifurcation from the anterior IVC wall. Direct transcaval liver puncture from the anterior wall of the intrahepatic IVC directly traversing caudate lobe parenchyma into the portal vein bifurcation or main portal vein trunk using a 16G Rösch-Uchida needle. Aspiration of portal venous blood and diagnostic portogram confirming robust intrahepatic/extrahepatic portal venous anatomy and measuring baseline portal systemic pressure gradient (PSG).",
  "descriptionHi": "गले की नस से मुख्य शिरा (IVC) के रास्ते लिवर के आर-पार सीधे पोर्टल वेन में सुई डाली जाती है (Transcaval Puncture)। फिर इस रास्ते में एक विशेष आवरणयुक्त स्टेंट (Gore Viatorr) लगाकर लिवर का नया बाईपास बना दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of budd-chiari syndrome: direct intrahepatic portosystemic shunt (dips) transcaval puncture without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "असाध्य बड-कियारी सिंड्रोम में एकमात्र जीवन रक्षक एंडोवैस्कुलर समाधान।",
    "लिवर का दबाव तुरंत सामान्य होना और जानलेवा असाइटिस का खात्मा।",
    "लिवर ट्रांसप्लांट से बचाव अथवा ट्रांसप्लांट तक सुरक्षित ब्रिज।"
  ],
  "specificRisksEn": [
    "Intraperitoneal hemorrhage from extrahepatic portal or IVC laceration",
    "Biliary fistula / hemobilia",
    "Hepatic encephalopathy (grade II-IV)",
    "Acute shunt thrombosis or stent-graft migration"
  ],
  "specificRisksHi": [
    "पेट के अंदर भारी आंतरिक रक्तस्राव (Intraperitoneal Hemorrhage - 2-5%)।",
    "मानसिक भ्रम या सुस्ती (Hepatic Encephalopathy - 15-25%)।",
    "स्टेंट में थक्का जमना।",
    "हार्ट पर दबाव बढ़ना।"
  ],
  "alternativesEn": "Surgical portosystemic shunt, emergency liver transplantation, or medical anticoagulation and diuretics.",
  "alternativesHi": "आपातकालीन लिवर ट्रांसप्लांटेशन (Liver Transplant)।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा गहन शामक मॉनिटरिंग।"
},
  "budd-chiari-ivc-membranotomy": {
  "id": "budd-chiari-ivc-membranotomy",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Budd-Chiari Syndrome: IVC Membranotomy with Cutting Balloon & Stenting",
  "nameHi": "आईवीसी मेम्ब्रेनोटॉमी व स्टेंटिंग (महाशिरा के जन्मजात पर्दे को काटकर स्टेंट लगाना)",
  "indicationEn": "Congenital or post-thrombotic web/membrane of the suprahepatic or intrahepatic IVC causing severe outflow stenosis or complete occlusion; Lower extremity edema, severe stasis ulceration, hepatomegaly, and intractable ascites secondary to IVC hypertension; Elevated caval pressure gradient (> 5-10 mmHg) across the membranous segment",
  "indicationHi": "पेट की मुख्य महाशिरा (IVC) में झिल्ली या पर्दा (Congenital Web/Membrane) होना, जिससे दोनों पैरों में भारी सूजन, पेट में पानी और नसों का फूलना हो।",
  "descriptionEn": "Simultaneous dual vascular access: Right common femoral vein (10F) and right internal jugular vein (8F) under ultrasound guidance. Simultaneous biplane inferior and superior vena cavography defining the exact thickness, morphology, and cranial-caudal margins of the IVC web. Sharp puncture of the tough, fibrous membrane from either the jugular or femoral approach using a Brockenbrough or Rösch-Uchida needle under cross-table fluoroscopic targeting. Advancement of a 0.035\" stiff angled Glidewire through the punctured pinhole, snaring the wire from the opposite access site to establish continuous through-and-through jugular-femoral wire control.",
  "descriptionHi": "जांघ और गले दोनों तरफ से कैथेटर डालकर झिल्ली को विशेष कटिंग बैलून (Cutting Balloon) या सुई द्वारा काटा जाता है और उस जगह बड़ा धातु का स्टेंट लगाकर महाशिरा को पूरी तरह खोल दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of budd-chiari syndrome: ivc membranotomy with cutting balloon & stenting without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "दोनों पैरों की असहनीय सूजन और पेट के पानी से तुरंत स्थायी मुक्ति।",
    "महाशिरा के रक्त प्रवाह का प्राकृतिक पुनर्निर्माण।",
    "बिना कोई चीरा लगाए न्यूनतम इनवेसिव सफल इलाज।"
  ],
  "specificRisksEn": [
    "IVC perforation leading to fatal hemoperitoneum or hemothorax",
    "Massive pulmonary thromboembolism from fragmented upstream clot",
    "Cardiac tamponade if perforation extends into intrapericardial IVC segment",
    "Stent migration into right atrium"
  ],
  "specificRisksHi": [
    "झिल्ली काटते समय महाशिरा का फटना (IVC Rupture - बहुत दुर्लभ)।",
    "दिल में थक्का या हवा जाना।",
    "स्टेंट का खिसकना।",
    "जांघ में हेमेटोमा।"
  ],
  "alternativesEn": "Surgical portosystemic shunt, emergency liver transplantation, or medical anticoagulation and diuretics.",
  "alternativesHi": "ओपन सर्जिकल ट्रांस-एट्रियल मेम्ब्रेनेक्टॉमी (Open Heart-Lung Machine Surgery) अथवा कैवो-एट्रियल बाईपास।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा अथवा पूर्ण बेहोशी।"
},
  "may-thurner-thrombolysis-stenting": {
  "id": "may-thurner-thrombolysis-stenting",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "May-Thurner Syndrome: Left Common Iliac Vein Catheter-Directed Thrombolysis & Stenting",
  "nameHi": "मे-थर्नर सिंड्रोम: बाएं पैर की नस में थक्का गलाकर स्टेंट लगाना (May-Thurner CDT & Stenting)",
  "indicationEn": "Acute or subacute extensive left iliofemoral deep venous thrombosis (DVT) with phlegmasia cerulea dolens or high risk of post-thrombotic syndrome; Extrinsic compression of the left common iliac vein by the overlying right common iliac artery against the L5 vertebral body; Residual > 50% stenosis with significant venous flow stagnation post-thrombus clearance",
  "indicationHi": "दाहिनी धमनी द्वारा बाईं मुख्य नस (Left Common Iliac Vein) के दबने के कारण बाएं पैर में अचानक भारी सूजन, दर्द और गहरा थक्का जमना (Left Lower Limb DVT)।",
  "descriptionEn": "Prone or semi-prone positioning; ultrasound-guided retrograde left popliteal vein puncture and insertion of an 8F vascular sheath. Ascending pelvic venogram documenting acute left femoral and iliac venous occlusion with extensive collaterals crossing the pelvis. Traversing the thrombosed segment into the IVC using a 5F glide catheter and 0.035\" angled hydrophilic wire; exchange for a multi-sidehole Cragg-McNamara infusion catheter. Delivery of catheter-directed thrombolytic therapy (rtPA 0.5 - 1.0 mg/hr with sub-therapeutic systemic heparin 400-500 IU/hr) or pharmacomechanical thrombectomy (AngioJet ZelanteDVT).",
  "descriptionHi": "घुटने के पीछे की नस से कैथेटर डालकर थक्का गलाने वाली दवा (tPA) दी जाती है ताकि थक्का पिघल जाए। इसके बाद दबी हुई नस में विशेष उच्च-शक्ति शिरा स्टेंट (Dedicated Venous Stent) लगाया जाता है ताकि नस दोबारा कभी न दबे।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of may-thurner syndrome: left common iliac vein catheter-directed thrombolysis & stenting without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "बाएं पैर की सूजन और दर्द से 95% तुरंत मुक्ति।",
    "पोस्ट-थ्रोम्बोटिक सिंड्रोम (भविष्य में पैर काला पड़ना, घाव होना) से संपूर्ण बचाव।",
    "फेफड़ों में थक्का जाने (Pulmonary Embolism) के जानलेवा खतरे की रोकथाम।"
  ],
  "specificRisksEn": [
    "Major retroperitoneal or gastrointestinal hemorrhage secondary to thrombolytic infusion",
    "Symptomatic pulmonary embolism (prophylactic IVC filter placement indicated in free-floating thrombus)",
    "Iliac vein rupture / retroperitoneal hematoma during high-pressure post-dilation",
    "In-stent re-thrombosis"
  ],
  "specificRisksHi": [
    "थक्का गलाने वाली दवा से रक्तस्राव का जोखिम (Bleeding Risk)।",
    "स्टेंट में दोबारा थक्का जमना (In-stent Thrombosis - 5-10%)।",
    "स्टेंट का थोड़ा महाशिरा में बाहर निकलना।",
    "घुटने के पीछे पंक्चर स्थल पर हेमेटोमा।"
  ],
  "alternativesEn": "Long-term oral anticoagulation with graduated medical compression stockings, or open surgical venous transposition.",
  "alternativesHi": "केवल रक्त पतला करने वाली दवाएं (Blood Thinners) और मोज़े (Compression Stockings) अथवा ओपन वैस्कुलर ट्रांसपोजीशन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवा।"
},
  "may-thurner-kissing-iliac-stenting": {
  "id": "may-thurner-kissing-iliac-stenting",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "May-Thurner Syndrome: Bilateral Kissing Common Iliac Vein Stenting Extending into IVC Confluence",
  "nameHi": "मे-थर्नर किसिंग इलिएक वेन स्टेंटिंग (दोनों तरफ की पेल्विक नसों में संयुक्त स्टेंट लगाना)",
  "indicationEn": "Severe bilateral common iliac vein compression or ostial stenosis extending directly to the iliocaval confluence; Left common iliac stent deployment that risks over-jailing or mechanically compromising the right common iliac vein inflow; Extensive iliocaval confluence post-thrombotic fibrotic stricture",
  "indicationHi": "बाईं नस में स्टेंट लगाते समय दाहिनी नस का मुहाना दबने का खतरा होना अथवा दोनों तरफ की पेल्विक नसों में सिकुड़न।",
  "descriptionEn": "Simultaneous ultrasound-guided cannulation of bilateral common femoral veins and placement of 9F/10F sheaths. Ascending bilateral iliocavography through both sheaths to visualize simultaneous confluence anatomy and bilateral pressure recordings. Passage of 0.035\" stiff guidewires through both common iliac veins into the suprarenal IVC. Simultaneous pre-dilatation of bilateral common iliac vein ostia using matched balloons.",
  "descriptionHi": "दोनों पैरों से एक साथ कैथेटर डालकर महाशिरा के संगम पर दो स्टेंट एक साथ 'किसिंग' तकनीक से स्थापित किए जाते हैं ताकि दोनों पैरों का खून सुचारू रूप से बह सके।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of may-thurner syndrome: bilateral kissing common iliac vein stenting extending into ivc confluence without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "दूसरे (दाहिने) पैर की नस बंद होने के खतरे से बचाव।",
    "दोनों पैरों में वीनस ड्रेनेज का संतुलित पुनर्निर्माण।",
    "टिकाऊ दीर्घकालिक परिणाम।"
  ],
  "specificRisksEn": [
    "Asymmetric stent expansion leading to contralateral iliac vein thrombosis",
    "Iliocaval rupture / massive retroperitoneal hemorrhage",
    "Stent migration cranial into heart or caudal into external iliac vein",
    "Late occlusion of one or both stent limbs"
  ],
  "specificRisksHi": [
    "स्टेंट में थक्का जमना।",
    "महाशिरा में स्टेंट का खिसकना।",
    "रक्तस्राव।"
  ],
  "alternativesEn": "Open surgical bypass grafting (e.g., femoropopliteal / distal vein bypass), open endarterectomy, or conservative medical therapy with supervised exercise.",
  "alternativesHi": "सिंगल स्टेंटिंग अथवा केवल दवाइयां।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "nutcracker-anterior-stenting": {
  "id": "nutcracker-anterior-stenting",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Nutcracker Syndrome (Anterior): Left Renal Vein Balloon Angioplasty & Self-Expanding Stenting",
  "nameHi": "नटक्रेकर सिंड्रोम (एंटीरियर): बाएं गुर्दे की नस की स्टेंटिंग (पेशाब में खून व पेडू दर्द का इलाज)",
  "indicationEn": "Severe anterior nutcracker syndrome (compression of left renal vein between SMA and abdominal aorta); Refractory macroscopic or microscopic hematuria causing anemia, severe left flank pain, or pelvic congestion symptoms; Documented renocaval pullback pressure gradient >= 4-5 mmHg",
  "indicationHi": "महाधमनी और आंत की धमनी के बीच बाएं गुर्दे की नस का अखरोट की तरह दब जाना (Nutcracker Syndrome), जिससे पेशाब में खून (Hematuria), बाईं कमर व पेडू में दर्द या अंडकोष में नसों का गुच्छा हो।",
  "descriptionEn": "Ultrasound-guided right common femoral vein access; advancement of an 8F 45cm guiding sheath into the IVC at the level of the renal veins. Selective cannulation of the left renal vein (LRV) using a 5F Cobra or RDC catheter and 0.035\" angled Glidewire, navigating past the aortomesenteric compression into a distal interlobar renal vein branch. Renocaval manometry: Simultaneous or pullback pressure gradient measurement between the distended hilar left renal vein and the inferior vena cava (confirming gradient >= 4 mmHg). Diagnostic left renal venography showing contrast stagnation, pelvic/gonadal collateral reflux, and the classic \"beak sign\" at the aortomesenteric clamp.",
  "descriptionHi": "गर्दन या जांघ की नस से गुर्दे की दबी हुई नस में कैथेटर ले जाकर एक विशेष सेल्फ-एक्सपैंडिंग धातु का स्टेंट स्थापित किया जाता है, जिससे नस का रास्ता खुल जाता है और गुर्दे का दबाव तुरंत सामान्य हो जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of nutcracker syndrome (anterior): left renal vein balloon angioplasty & self-expanding stenting without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "पेशाब में खून आने और कमर के दर्द से तत्काल स्थायी मुक्ति।",
    "गुर्दे को स्थायी नुकसान से बचाना।",
    "गुर्दा काटकर दूसरी जगह लगाने (Renal Autotransplantation) के अत्यंत बड़े ऑपरेशन से बचाव।"
  ],
  "specificRisksEn": [
    "Stent migration into the IVC or right atrium / heart (most critical hazard in nutcracker stenting)",
    "Renal vein laceration / retroperitoneal bleeding",
    "Erosion of stent into adjacent abdominal aorta or SMA",
    "Renal parenchymal infarction from branch vessel jailing"
  ],
  "specificRisksHi": [
    "स्टेंट का अपनी जगह से खिसककर दिल या महाशिरा में चले जाना (Stent Migration - 2-4%)।",
    "गुर्दे की नस में थक्का जमना।",
    "पेशाब में हल्का खून बना रहना।",
    "जांघ में हेमेटोमा।"
  ],
  "alternativesEn": "Open surgical left renal vein transposition, renal autotransplantation, or watchful waiting.",
  "alternativesHi": "ओपन सर्जिकल रीनल वेन ट्रांसपोजीशन अथवा रीनल ऑटोट्रांसप्लांटेशन या केवल निगरानी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवा।"
},
  "nutcracker-posterior-decompression": {
  "id": "nutcracker-posterior-decompression",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Nutcracker Syndrome (Posterior): Retro-Aortic Left Renal Vein Balloon Angioplasty & Decompression",
  "nameHi": "पोस्टीरियर नटक्रेकर सिंड्रोम: रेट्रो-एओर्टिक रीनल वेन बैलून एंजियोप्लास्टी",
  "indicationEn": "Posterior nutcracker phenomenon: Extrinsic compression of a retro-aortic left renal vein between the abdominal aorta and the lumbar vertebral body; Orthostatic proteinuria, intractable left flank pain, gross hematuria, and left varicocele; Persistent venous hypertension with renocaval pressure gradient >= 4 mmHg",
  "indicationHi": "बाएं गुर्दे की नस का महाधमनी और रीढ़ की हड्डी के बीच पीछे दबना (Posterior Nutcracker)।",
  "descriptionEn": "Ultrasound-guided right femoral vein puncture and placement of an 8F 45cm guiding sheath. Selective catheterization of the retro-aortic left renal vein entering the IVC at a lower, more posterior anatomical level than normal. Selective venogram depicting severe focal pinch between the posterior aortic pulsation and the anterior vertebral cortex. Direct pressure measurement in distal LRV and proximal IVC to document hemodynamic significance (gradient >= 4 mmHg).",
  "descriptionHi": "गुर्दे की नस में कैथेटर ले जाकर दबे हुए हिस्से को गुब्बारे से फैलाया जाता है और आवश्यकतानुसार विशेष स्टेंट स्थापित किया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of nutcracker syndrome (posterior): retro-aortic left renal vein balloon angioplasty & decompression without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "गुर्दे के दबाव और कमर दर्द से मुक्ति।",
    "बिना पेट खोले मिनिमली इनवेसिव उपचार।"
  ],
  "specificRisksEn": [
    "Posterior rupture of thin-walled renal vein against osteophytes / vertebra",
    "Stent crushing or migration due to intense pulsatile compression between aorta and spine",
    "Retroperitoneal hematoma",
    "Renal vein thrombosis"
  ],
  "specificRisksHi": [
    "नस का फटना या थक्का।",
    "स्टेंट माइग्रेशन।"
  ],
  "alternativesEn": "Open surgical left renal vein transposition, renal autotransplantation, or watchful waiting.",
  "alternativesHi": "सर्जिकल ट्रांसपोजीशन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "mals-angioplasty-stenting": {
  "id": "mals-angioplasty-stenting",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Median Arcuate Ligament Syndrome (MALS): Celiac Artery Angioplasty & Covered Stenting Post-Ligament Release",
  "nameHi": "मीडियन आर्कुएट लिगामेंट सिंड्रोम (MALS) स्टेंटिंग (डायाफ्राम के लिगामेंट रिलीज के बाद नस खोलना)",
  "indicationEn": "Persistent or recurrent postprandial epigastric pain, severe weight loss, and epigastric bruit post-laparoscopic/open surgical release of the median arcuate ligament; Residual fixed intrinsic intimal fibrosis / stenosis of the celiac trunk ostium with peak systolic velocity > 200 cm/s; Documented celiac-aortic systolic pressure gradient > 20 mmHg",
  "indicationHi": "डायाफ्राम के लिगामेंट द्वारा सीलिएक धमनी दबने के कारण पेट में गंभीर दर्द, जहां सर्जरी से लिगामेंट काटने के बाद भी नस की आंतरिक सिकुड़न बनी हुई हो।",
  "descriptionEn": "Access via right common femoral artery (or left brachial/radial artery if sharp downward takeoff of celiac axis) with a 6F guiding sheath. Aortography in lateral projection during quiet respiration, inspiration, and expiration documenting the classic hooked indentation at the superior aspect of the celiac ostium. Selective cannulation of celiac trunk using a 5F Simmons 1 or Cobra catheter, followed by crossing the stenosis with an extra-support 0.014\" or 0.018\" guidewire anchored into the common hepatic or splenic artery. Pressure wire or catheter pullback recording confirming significant trans-stenotic systolic pressure drop (> 20 mmHg).",
  "descriptionHi": "जांघ की नस से सीलिएक धमनी में बैलून-एक्सपैंडेबल कवर्ड स्टेंट स्थापित किया जाता है, जिससे आंतों और लिवर को पूरा खून मिलने लगता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of median arcuate ligament syndrome (mals): celiac artery angioplasty & covered stenting post-ligament release without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "खाना खाने के बाद पेट दर्द से पूर्ण मुक्ति।",
    "लिवर और तिल्ली का रक्त प्रवाह सामान्य होना।"
  ],
  "specificRisksEn": [
    "Celiac artery dissection or rupture with life-threatening retroperitoneal bleed",
    "Stent fracture or collapse if extrinsic crural ligament fibers were incompletely divided surgically",
    "Non-target embolization to spleen or liver",
    "Access site pseudoaneurysm"
  ],
  "specificRisksHi": [
    "स्टेंट का दबना (यदि लिगामेंट पूरी तरह न कटा हो)।",
    "नस का डिसेक्शन।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल रीवास्कुलराइजेशन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "sma-syndrome-nj-tube-mapping": {
  "id": "sma-syndrome-nj-tube-mapping",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Superior Mesenteric Artery Syndrome (Wilkie): Fluoroscopic Nasojejunal Tube & Vascular Mapping",
  "nameHi": "एसएमए सिंड्रोम: फ्लोरोस्कोपिक नासोजेजुनल ट्यूब डालना व वैस्कुलर मैपिंग (आंत दबने का इलाज)",
  "indicationEn": "Acute or chronic postprandial bilious vomiting, profound weight loss, and gastric dilation secondary to compression of third part of duodenum between SMA and aorta; Aortomesenteric angle < 22 degrees and aortomesenteric distance < 8 mm on cross-sectional imaging; Need for immediate post-ligament of Treitz enteral nutritional decompression and feeding prior to definitive therapy",
  "indicationHi": "महाधमनी और एसएमए नस के बीच छोटी आंत (Duodenum) का दब जाना, जिससे बार-बार हरी उल्टी, पेट फूलना और भोजन का आगे न बढ़ना (Wilkie Syndrome)।",
  "descriptionEn": "Patient seated or supine; topical lidocaine spray to nasal cavity and pharynx. Transnasal insertion of a 5F Kumpe or MPA diagnostic catheter into the stomach under continuous fluoroscopic visualization. Insufflation of stomach with 100-200 mL air to visualize the gastric antrum and pylorus. Manipulation of catheter and 0.035\" hydrophilic angled Glidewire across the pyloric channel into the duodenal bulb.",
  "descriptionHi": "एक्स-रे की लाइव स्क्रीन पर देखते हुए नाक के रास्ते एक बारीक पोषण नली (Nasojejunal Tube) रुकावट के पार छोटी आंत के स्वस्थ हिस्से में पहुंचा दी जाती है, जिससे मरीज को बिना उल्टी के तुरंत पोषण मिलना शुरू हो जाता है और नस का कोण सामान्य हो जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of superior mesenteric artery syndrome (wilkie): fluoroscopic nasojejunal tube & vascular mapping without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "बार-बार होने वाली उल्टियों से तुरंत मुक्ति और आंत का डीकंप्रेशन।",
    "पोषण तुरंत बहाल होना जिससे मरीज का वजन बढ़ता है और नस का दबाव स्वतः खत्म हो जाता है।",
    "पेट के बड़े बाईपास ऑपरेशन (Duodenojejunostomy) से 80% बचाव।"
  ],
  "specificRisksEn": [
    "Duodenal perforation at the acute compressed crossing point",
    "Aspiration of gastric contents during tube manipulation",
    "Epistaxis / pharyngeal trauma",
    "Tube displacement back into the stomach"
  ],
  "specificRisksHi": [
    "नली डालते समय गले या आंत में हल्की खरोंच।",
    "नली का खिसकना या बंद होना।",
    "अस्थायी गले में खराश।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन अथवा लैप्रोस्कोपिक डुओडेनो-जेजुनोस्टॉमी सर्जरी (आंत का बाईपास)।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "गले में सुन्न करने वाला स्प्रे (Lidocaine Spray)।"
},
  "tos-venous-thrombolysis-venoplasty": {
  "id": "tos-venous-thrombolysis-venoplasty",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Venous TOS (Paget-Schroetter Syndrome): Catheter-Directed Thrombolysis & Subclavian Venoplasty",
  "nameHi": "थोरैसिक आउटलेट सिंड्रोम: हाथ की नस का थक्का पिघलाना व वेनोप्लास्टी (Paget-Schroetter Syndrome)",
  "indicationEn": "Acute effort-induced thrombosis of the subclavian-axillary vein (\"effort thrombosis\") in young active individuals or athletes; Severe upper extremity swelling, cyanosis, and throbbing pain secondary to costoclavicular space compression; Presentation within 14 days of symptom onset",
  "indicationHi": "कॉलर बोन और पहली पसली के बीच दबने के कारण हाथ की मुख्य नस (Subclavian Vein) में थक्का जमना, जिससे पूरा हाथ नीला, सूजा हुआ और दर्दनाक हो जाता है।",
  "descriptionEn": "Ultrasound-guided cannulation of the ipsilateral basilic or brachial vein in the mid-upper arm; placement of a 6F sheath directed centrally. Diagnostic venogram detailing total occlusion of the axillary-subclavian vein with extensive chest wall collaterals. Crossing the thrombosed segment using a 0.035\" hydrophilic guidewire and 5F glide catheter into the superior vena cava. Pharmacomechanical thrombectomy (AngioJet) or placement of a multi-sidehole Cragg-McNamara catheter for catheter-directed thrombolysis (rtPA 0.5 - 1.0 mg/hr for 12-24 hours).",
  "descriptionHi": "हाथ की नस से कैथेटर डालकर दवा द्वारा थक्के को पिघलाया जाता है और दबी हुई नस को गुब्बारे से फुलाकर चौड़ा किया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of venous tos (paget-schroetter syndrome): catheter-directed thrombolysis & subclavian venoplasty without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "हाथ की जानलेवा सूजन और नीलेपन से त्वरित मुक्ति।",
    "हाथ में स्थायी विकलांगता या कमजोरी से बचाव।",
    "हाथ के सामान्य उपयोग की बहाली।"
  ],
  "specificRisksEn": [
    "Major intracranial, gastrointestinal, or pulmonary hemorrhage during rtPA infusion",
    "Pulmonary embolism from dislodged axillary thrombus fragments",
    "Venous rupture / dissection during balloon angioplasty",
    "Early re-thrombosis before surgical decompression"
  ],
  "specificRisksHi": [
    "थक्का गलाने वाली दवा से ब्लीडिंग का जोखिम।",
    "नस का दोबारा बंद होना (जब तक पहली पसली सर्जरी से न निकाली जाए)।",
    "हाथ में हेमेटोमा।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "केवल ब्लड थिनर दवाएं अथवा आपातकालीन ओपन थ्रोम्बेक्टॉमी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "tos-arterial-aneurysm-exclusion": {
  "id": "tos-arterial-aneurysm-exclusion",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Arterial Thoracic Outlet Syndrome: Subclavian Aneurysm Exclusion & Thromboembolectomy",
  "nameHi": "आर्टीरियल टीओएस: सबक्लेवियन एन्यूरिज्म का कवर्ड स्टेंट द्वारा उपचार (हाथ की नस का फटना रोकना)",
  "indicationEn": "Subclavian artery aneurysm or post-stenotic dilation secondary to compression by a cervical rib or anomalous first rib; Acute upper extremity digital ischemia / micro-embolization (\"blue finger syndrome\") from mural thrombus within the aneurysm; Rapidly expanding or symptomatic pulsatile supraclavicular mass with high risk of rupture",
  "indicationHi": "गर्दन की अतिरिक्त पसली (Cervical Rib) के दबाव से हाथ की मुख्य धमनी का फूल जाना और हाथ में थक्के जाना।",
  "descriptionEn": "Retrograde common femoral artery access (or combined retrograde brachial access) under ultrasound guidance. Arch aortography and selective subclavian arteriography depicting post-stenotic subclavian dilation/aneurysm and distal thromboembolic cutoffs in the forearm/digital arteries. Aspiration thrombectomy of downstream thromboemboli in the brachial, radial, and ulnar arteries using Penumbra CAT6/CAT8 or catheter-directed intra-arterial thrombolysis. Exchange for a stiff 0.035\" Amplatz wire anchored in the brachial artery.",
  "descriptionHi": "जांघ या हाथ से आवरणयुक्त स्टेंट (Covered Stent) फूली हुई नस में स्थापित कर एन्यूरिज्म को सुरक्षित सील किया जाता है और हाथ में गए थक्कों को खींच लिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of arterial thoracic outlet syndrome: subclavian aneurysm exclusion & thromboembolectomy without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "नस फटने और हाथ में गैंग्रीन होने से संपूर्ण बचाव।",
    "हाथ की नाड़ी और रक्त प्रवाह का पुनरुद्धार।"
  ],
  "specificRisksEn": [
    "Inadvertent coverage of vertebral artery origin causing cerebellar/brainstem infarction",
    "Distal shower of atheroemboli to the hand and digits",
    "Stent graft thrombosis, kinking, or endoleak",
    "Access site hematoma / pseudoaneurysm"
  ],
  "specificRisksHi": [
    "हड्डी के लगातार दबाव से स्टेंट का टूटना (जब तक पसली न निकाली जाए)।",
    "हाथ में थक्का जाना।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल बाईपास और सर्वाइकल रिब निकालना।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "kts-marginal-vein-sclerotherapy-rfa": {
  "id": "kts-marginal-vein-sclerotherapy-rfa",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Klippel-Trenaunay Syndrome: Marginal Vein of Servelle Sclerotherapy & Radiofrequency Ablation",
  "nameHi": "क्लिपेल-ट्रेनाउनी सिंड्रोम: मार्जिनल वेन की स्क्लेरोथेरेपी व लेजर/आरएफए (पैर की विकृत नस बंद करना)",
  "indicationEn": "Congenital embryonic persistent lateral marginal vein of Servelle in Klippel-Trenaunay Syndrome with severe venous hypertension and leg hypertrophy; Recurrent thrombophlebitis, stasis ulceration, spontaneous hemorrhage, or high-volume venous pooling; Documented PATENCY and competence of the deep venous system (femoral and popliteal veins)",
  "indicationHi": "जन्मजात क्लिपेल-ट्रेनाउनी सिंड्रोम (KTS) के कारण पैर के बाहरी हिस्से में असामान्य मोटी विकृत नस (Marginal Vein of Servelle), जिससे पैर का अत्यधिक भारी होना, दर्द, अल्सर और थक्के जमना।",
  "descriptionEn": "Comprehensive ultrasound evaluation confirming patency of the ipsilateral deep femoral and popliteal veins. Ultrasound-guided retrograde puncture of the lateral marginal vein in the distal calf or mid-thigh using a 21G micro-puncture needle; insertion of a 7F sheath. Venographic mapping of the entire marginal vein delineating points of communication with the deep system and termination in the internal iliac or common femoral vein. Placement of embolic coils at large perforator junctions to prevent sclerosant migration into the deep system.",
  "descriptionHi": "सोनोग्राफी की निगरानी में विकृत नस के अंदर रेडियोफ्रीक्वेंसी या लेजर फाइबर डाला जाता है तथा फोम दवा (STS Foam Sclerotherapy) इंजेक्ट करके इस विशाल असामान्य नस को अंदर से स्थायी रूप से सील कर दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of klippel-trenaunay syndrome: marginal vein of servelle sclerotherapy & radiofrequency ablation without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "पैर के भारीपन, दर्द और बार-बार होने वाले घावों से स्थायी राहत।",
    "फेफड़ों में खतरनाक थक्का जाने (Pulmonary Embolism) से 90% बचाव।",
    "पैर की बनावट और सुंदरता में सुधार।"
  ],
  "specificRisksEn": [
    "Deep venous thrombosis (DVT) or pulmonary embolism due to sclerosant/thermal extension",
    "Skin necrosis or thermal blistering over superficial vein tracts",
    "Common peroneal nerve thermal injury causing foot drop",
    "Disseminated intravascular coagulation (worsening of LIC)"
  ],
  "specificRisksHi": [
    "गहरी सामान्य नसों में थक्का जमना (Deep Vein Thrombosis - DVT < 2%)।",
    "त्वचा पर खिंचाव, जलन या भूरापन (Hyperpigmentation)।",
    "अस्थायी पैर में कड़ापन व दर्द।",
    "भविष्य में अन्य छोटी नसों का उभरना।"
  ],
  "alternativesEn": "Open surgical excision with high intraoperative bleeding risk, targeted medical therapy (Sirolimus), or lifelong compression therapy.",
  "alternativesHi": "सर्जिकल स्ट्रिपिंग (अत्यधिक रक्तस्राव का उच्च जोखिम) अथवा केवल आजीवन टाइट कम्प्रेशन मोजे पहनना।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "ट्यूमेसेंट लोकल एनेस्थीसिया (नस के चारों ओर सुन्न करने वाला तरल) व हल्की शामक दवा।"
},
  "kts-vm-sclerotherapy-bleo-sts": {
  "id": "kts-vm-sclerotherapy-bleo-sts",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Klippel-Trenaunay Syndrome: Pelvic & Extremity Venous Malformation Bleomycin / STS Sclerotherapy",
  "nameHi": "केटीएस वैस्कुलर मॉलफॉर्मेशन स्क्लेरोथेरेपी (ब्लियोमाइसिन व एसटीएस फोम द्वारा नसों के गुच्छे का इलाज)",
  "indicationEn": "Low-flow spongiform venous malformations involving pelvis, buttocks, and extremity in KTS; Painful phlebolith formation, chronic muscular aching, swelling, and localized bleeding; Recurrent cellulitis and severe functional limb impairment",
  "indicationHi": "पैर या पेडू में नसों के दर्दनाक गुच्छे (Venous Malformations), त्वचा से खून रिसना, सूजन और नसों में कंकड़ जैसे थक्के (Phleboliths) जमने से गंभीर दर्द।",
  "descriptionEn": "General anesthesia or monitored sedation with patient positioned for optimal access to pelvic/limb malformation. Ultrasound-guided direct percutaneous puncture of dysplastic venous lakes using 21G echogenic needles; aspiration of dark, sluggish venous blood confirming intraluminal position. Direct-puncture phlebography under fluoroscopy assessing lesion volume, drainage speed, and identifying any direct efferent outflow conduits into deep veins. Application of manual compression or pneumatic tourniquet on draining veins to promote prolonged sclerosant contact time and avoid systemic escape.",
  "descriptionHi": "सोनोग्राफी और एक्स-रे की सीधी लाइव स्क्रीन पर देखते हुए बारीक सुइयों से नसों के गुच्छों में सीधे ब्लियोमाइसिन (Bleomycin) अथवा एसटीएस फोम इंजेक्ट किया जाता है, जो गुच्छे को सुखाकर खत्म कर देता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of klippel-trenaunay syndrome: pelvic & extremity venous malformation bleomycin / sts sclerotherapy without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "बिना कोई चीरा या टांका लगाए नसों के भयानक गुच्छों से 80-90% राहत।",
    "दर्द और सूजन का तेजी से खात्मा।",
    "अंग की कार्यक्षमता और सामान्य जीवन की बहाली।"
  ],
  "specificRisksEn": [
    "Pulmonary fibrosis (dose-dependent Bleomycin toxicity)",
    "Compartment syndrome of the extremity secondary to acute post-sclerotherapy inflammatory edema",
    "Skin necrosis and ulceration",
    "Hemoglobinuria and acute renal injury"
  ],
  "specificRisksHi": [
    "इंजेक्शन के बाद 3-5 दिन तक स्थानीय सूजन व दर्द।",
    "त्वचा पर फफोले या अस्थायी रंग बदलना।",
    "ब्लियोमाइसिन से फेफड़ों पर असर (Pulmonary Fibrosis - कुल संचयी डोज की कड़ी सीमा रखी जाती है)।",
    "अंग सुन्न होना।"
  ],
  "alternativesEn": "Open surgical excision with high intraoperative bleeding risk, targeted medical therapy (Sirolimus), or lifelong compression therapy.",
  "alternativesHi": "ओपन सर्जिकल रिसेक्शन (अत्यधिक रक्तस्राव व अंग विकृति का उच्च खतरा) अथवा कम्प्रेशन गारमेंट्स।",
  "sedationTypeEn": "General endotracheal anesthesia with continuous arterial blood pressure and invasive monitoring.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा अथवा बच्चों में पूर्ण बेहोशी।"
},
  "pws-avf-embolization-onyx-coils": {
  "id": "pws-avf-embolization-onyx-coils",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Parkes Weber Syndrome: High-Flow Limb AVF Embolization with Detachable Coils & Onyx",
  "nameHi": "पार्क्स वेबर सिंड्रोम: हाई-फ्लो फिस्टुला की कोइलिंग व ऑनिक्स एम्बोलाइजेशन (दिल फेल होने से बचाव)",
  "indicationEn": "Congenital high-flow arteriovenous fistulae/malformations associated with bony and soft tissue hypertrophy in Parkes Weber syndrome; High-output congestive heart failure, severe distal limb steal syndrome, ischemic ulceration, or life-threatening hemorrhage; Progressive thrill, audible machinery bruit, and venous stasis dermatitis",
  "indicationHi": "जन्मजात पार्क्स वेबर सिंड्रोम में धमनी व शिरा के बीच असामान्य सीधे कनेक्शन (AV Fistula), जिससे पैर अत्यधिक लंबा व मोटा हो और दिल पर भारी दबाव (High-Output Cardiac Failure) आ रहा हो।",
  "descriptionEn": "Ultrasound-guided common femoral or brachial arterial access with placement of a 6F sheath. High-resolution multi-station digital subtraction angiography (DSA) with high frame rates (4-6 frames/s) characterizing the exact nidus location, feeding arteries, and early draining veins. Navigation of a 5F base catheter into the main feeding arterial trunk (e.g., superficial femoral, profunda femoris, or popliteal branch). Superselective coaxial catheterization of the fistulous nidus using a DMSO-compatible microcatheter (Rebar-18 or Marathon) placed directly into the transition zone.",
  "descriptionHi": "माइक्रोकैथेटर द्वारा सीधे धमनी और शिरा के जोड़ पर पहुंचकर डिटैचेबल कॉइल्स और ऑनिक्स लिक्विड द्वारा हाई-फ्लो कनेक्शन को बंद किया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of parkes weber syndrome: high-flow limb avf embolization with detachable coils & onyx without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "दिल पर पड़ रहा अत्यधिक जानलेवा दबाव तुरंत सामान्य होना।",
    "पैर में असामान्य धड़कन और सूजन में भारी कमी।",
    "पैर कटने के खतरे से बचाव।"
  ],
  "specificRisksEn": [
    "Non-target embolization to distal foot/hand leading to digital gangrene",
    "Venous migration of liquid embolic causing pulmonary embolism",
    "Reflux of Onyx gluing microcatheter tip (requires gentle traction release)",
    "Acute afterload increase triggering left ventricular failure"
  ],
  "specificRisksHi": [
    "ऑनिक्स या छल्ले का फेफड़े में चले जाना।",
    "पैर के सामान्य हिस्से में खून की कमी।",
    "पुनः नई शाखाएं बनना।"
  ],
  "alternativesEn": "Open surgical excision with high intraoperative bleeding risk, targeted medical therapy (Sirolimus), or lifelong compression therapy.",
  "alternativesHi": "सर्जिकल लिगेशन अथवा विच्छेदन (Amputation)।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा अथवा पूर्ण बेहोशी।"
},
  "hht-pavm-embolization": {
  "id": "hht-pavm-embolization",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Hereditary Hemorrhagic Telangiectasia (HHT): Pulmonary AVM Coil & Vascular Plug Embolization",
  "nameHi": "एचएचटी: पल्मोनरी एवीएम एम्बोलाइजेशन (फेफड़े की असामान्य नस में प्लग व छल्ले डालना - स्ट्रोक व ब्रेन एब्सेस से बचाव)",
  "indicationEn": "Simple or complex pulmonary arteriovenous malformations (PAVMs) with feeding artery diameter >= 2-3 mm; Paradoxical embolic stroke, transient ischemic attack, or cerebral abscess secondary to right-to-left pulmonary shunt; Refractory hypoxemia, dyspnea on exertion, or massive hemoptysis/hemothorax",
  "indicationHi": "वंशानुगत एचएचटी (Osler-Weber-Rendu) के कारण फेफड़े की धमनी व शिरा का सीधा जुड़ना (Pulmonary AVM), जिससे खून में ऑक्सीजन कम होना, सांस फूलना, और मस्तिष्क में स्ट्रोक या मवाद (Brain Abscess) का गंभीर खतरा हो।",
  "descriptionEn": "Ultrasound-guided right common femoral vein access; placement of an 8F sheath. Rigorous air-free protocol with double filter line. Main pulmonary artery DSA with 5F Pigtail catheter followed by selective lobar pulmonary angiography identifying all feeding subsegmental arteries. Advancement of the 7F 90cm guiding sheath into the targeted segmental pulmonary artery. Selective microcatheter/catheter navigation to the absolute distal-most segment of the feeding artery, immediately adjacent to the aneurysmal sac (to preserve healthy pulmonary parenchyma).",
  "descriptionHi": "जांघ की नस से कैथेटर फेफड़े की विकृत नस के फीडिंग मुहाने तक ले जाकर विशेष वैस्कुलर प्लग (Amplatzer Vascular Plug) या टाइटेनियम छल्ले स्थापित किए जाते हैं, जिससे बिना छने दिमाग में जाने वाला गंदा खून तुरंत बंद हो जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of hereditary hemorrhagic telangiectasia (hht): pulmonary avm coil & vascular plug embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "मस्तिष्क में पक्षाघात (Stroke) और दिमाग में मवाद/फोड़ा (Brain Abscess) बनने के जानलेवा खतरे से 99% बचाव।",
    "खून में ऑक्सीजन (SpO2) का स्तर तुरंत सामान्य होना और सांस फूलने से मुक्ति।",
    "फेफड़े के किसी बड़े ऑपरेशन के बिना न्यूनतम इनवेसिव संपूर्ण समाधान।"
  ],
  "specificRisksEn": [
    "Paradoxical coil/plug migration through the low-resistance fistula into the pulmonary vein, left atrium, and systemic circulation (stroke risk)",
    "Transient pleurisy / self-limiting pleuritic chest pain (post-embolization syndrome)",
    "Pulmonary infarction",
    "Air embolism"
  ],
  "specificRisksHi": [
    "प्लग या छल्ले का फेफड़े से निकलकर महाधमनी या दिमाग में चले जाना (Paradoxical Embolization - बहुत दुर्लभ)।",
    "छाती में हल्का दर्द (Pleuritic Chest Pain - 1-2 दिन)।",
    "पीएवीएम का समय के साथ दोबारा खुलना (Recanalization - 5-8%)।"
  ],
  "alternativesEn": "Open surgical excision with high intraoperative bleeding risk, targeted medical therapy (Sirolimus), or lifelong compression therapy.",
  "alternativesHi": "ओपन सर्जिकल थोरेकोटॉमी और फेफड़े की वेज रीसेक्शन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवा।"
},
  "hht-hepatic-vm-embolization": {
  "id": "hht-hepatic-vm-embolization",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "HHT: Hepatic Vascular Malformation Staged Arterial Embolization for High-Output Heart Failure",
  "nameHi": "एचएचटी लिवर वैस्कुलर मॉलफॉर्मेशन एम्बोलाइजेशन (लिवर की असामान्य नसों द्वारा हार्ट फेलियर का इलाज)",
  "indicationEn": "Severe high-output heart failure (cardiac index > 4.5 L/min/m2) refractory to intensive medical therapy (diuretics, beta-blockers, and IV bevacizumab) in HHT patients with massive hepatic AVMs; Portobiliary fistula causing recurrent cholangitis or severe portal hypertension with bleeding varices; Severe hepatic artery steal syndrome causing mesenteric/biliary ischemia",
  "indicationHi": "एचएचटी बीमारी में लिवर के अंदर भारी रक्त शंटिंग से दिल की धड़कन तेज होना और हार्ट फेलियर (High-output Cardiac Failure) अथवा पोर्टल हाइपरटेंशन।",
  "descriptionEn": "Ultrasound-guided common femoral artery puncture and 5F sheath insertion. Abdominal aortogram and selective celiac/hepatic angiograms detailing massive tortuous hepatic artery enlargement and rapid shunting into hepatic veins or portal branches. Superselective cannulation of the largest dominant intrahepatic arterial shunting branch using a 2.7F microcatheter. CAUTIONARY PRINCIPLE: Never use small particles (< 300 um) or liquid adhesives (glue/Onyx) as they cause fatal diffuse ischemic biliary necrosis and liver failure.",
  "descriptionHi": "हेपेटिक धमनी की शाखाओं में माइक्रोकैथेटर द्वारा सूक्ष्म कण और छल्ले डालकर शंट के बहाव को चरणबद्ध तरीके से कम किया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of hht: hepatic vascular malformation staged arterial embolization for high-output heart failure without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "दिल पर पड़ रहा भयानक दबाव कम होना और सांस फूलने में भारी कमी।",
    "लिवर ट्रांसप्लांट की आवश्यकता टालना।"
  ],
  "specificRisksEn": [
    "Ischemic cholangitis / biliary tree necrosis and abscess formation (major dreaded hazard)",
    "Acute liver failure / hepatic infarction",
    "Biliary stricture development",
    "Post-embolization syndrome"
  ],
  "specificRisksHi": [
    "लिवर में नेक्रोसिस या पित्त नली में क्षति (Biliary Ischemia)।",
    "लिवर फेलियर।",
    "बुखार व दर्द।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "लिवर ट्रांसप्लांटेशन अथवा बेवाकिज़ुमैब (Bevacizumab) मेडिकल थेरेपी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "abernethy-type1-occlusion-test": {
  "id": "abernethy-type1-occlusion-test",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Abernethy Malformation Type 1: Portal Vein Reconstruction Assessment & Shunt Balloon Occlusion Test",
  "nameHi": "एबरनेथी मॉलफॉर्मेशन टाइप 1: शंट बैलून ऑक्लूजन टेस्ट (पोर्टल नस पुनर्निर्माण की जांच)",
  "indicationEn": "Congenital extrahepatic portosystemic shunt (CEPS) Type 1 (end-to-side shunt with apparent complete congenital absence of intrahepatic portal vein branches); Hepatopulmonary syndrome (HPS), portopulmonary hypertension (POPH), or recurrent hyperammonemic hepatic encephalopathy; Critical diagnostic differentiation: testing whether dormant hypoplastic intrahepatic portal veins exist that can be recruited by temporary shunt balloon occlusion",
  "indicationHi": "जन्मजात रूप से आंतों का खून लिवर में न जाकर सीधे दिल में जाना (Congenital Extrahepatic Portosystemic Shunt), जिससे लिवर सूखना, पीलिया या दिमाग पर असर हो।",
  "descriptionEn": "Right common femoral vein access under ultrasound guidance; placement of an 8F/9F vascular sheath. Advancement of a 5F MPA catheter into the Abernethy extrahepatic shunt connecting the portal mesenteric confluence directly to the IVC. Baseline portosystemic manometry recording portal pressure and IVC pressure. Advancement of a large compliant balloon catheter (Coda or Equalizer, 20-32 mm) across the shunt mouth over an Amplatz Super Stiff wire.",
  "descriptionHi": "शंट वाली असामान्य नस में गुब्बारा फुलाकर अस्थायी रूप से खून रोककर देखा जाता है कि क्या लिवर के अंदर की प्राकृतिक नसों में खून बहना शुरू होता है या नहीं।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of abernethy malformation type 1: portal vein reconstruction assessment & shunt balloon occlusion test without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "यह पता लगाने की एकमात्र अचूक जांच कि क्या बिना लिवर ट्रांसप्लांट के शंट बंद किया जा सकता है।",
    "लिवर के भविष्य के इलाज की सटीक योजना।"
  ],
  "specificRisksEn": [
    "Acute mesenteric venous congestion and bowel ischemia during prolonged balloon occlusion",
    "Shunt rupture / retroperitoneal bleeding",
    "Thrombus formation on the occlusion balloon",
    "Transient severe portal hypertensive spike"
  ],
  "specificRisksHi": [
    "गुब्बारा फुलाने पर आंतों का दबाव बहुत अधिक बढ़ जाना (Mesenteric Ischemia)।",
    "नस का फटना।",
    "थक्का जमना।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "लिवर बायोप्सी और एंजियो-सीटी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "पूर्ण बेहोशी (बच्चों में) अथवा गहरी शामक बेहोशी।"
},
  "abernethy-type2-plug-closure": {
  "id": "abernethy-type2-plug-closure",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Abernethy Malformation Type 2: Transcatheter Amplatzer Vascular Plug Closure of Portocaval Shunt",
  "nameHi": "एबरनेथी टाइप 2: वैस्कुलर प्लग द्वारा शंट बंद करना (लिवर की बाईपास नस को प्लग से सील करना)",
  "indicationEn": "Congenital extrahepatic portosystemic shunt Type 2 (side-to-side communication with preserved intrahepatic portal vein arborization); Documented post-occlusion portal pressure <= 25 mmHg during preliminary occlusion test; Hepatopulmonary syndrome, refractory encephalopathy, or prevention of liver adenomas/malignant degeneration",
  "indicationHi": "एबरनेथी टाइप 2 शंट जहां लिवर के अंदर की नसें मौजूद हैं लेकिन खून बाईपास होकर सीधा महाशिरा में जा रहा हो।",
  "descriptionEn": "Right internal jugular or right common femoral vein access with a 9F/10F 45cm guiding sheath positioned in the IVC at the level of the shunt. Selective cannulation of the portocaval fistula from the systemic side using a 5F MPA catheter and 0.035\" stiff guidewire. Advancement of the delivery sheath across the shunt into the extrahepatic portal vein. Precise introduction of an appropriately sized Amplatzer Vascular Plug II (oversized by 30-50% relative to the narrowest waist of the shunt).",
  "descriptionHi": "जांघ की नस से एक बड़ा वैस्कुलर प्लग (Amplatzer Plug) असामान्य शंट में स्थापित किया जाता है, जिससे सारा खून दोबारा लिवर के अंदर से बहने लगता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of abernethy malformation type 2: transcatheter amplatzer vascular plug closure of portocaval shunt without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "लिवर की प्राकृतिक कार्यप्रणाली का पूर्ण पुनरुद्धार।",
    "खून में अमोनिया कम होना और मानसिक स्पष्टता लौटना।",
    "लिवर ट्रांसप्लांट से शत-प्रतिशत बचाव।"
  ],
  "specificRisksEn": [
    "Plug migration into IVC, right heart, or main pulmonary artery",
    "Acute severe portal hypertension with variceal hemorrhage or mesenteric ischemia",
    "Incomplete shunt occlusion with persistent high-velocity residual flow",
    "Main portal vein trunk thrombosis"
  ],
  "specificRisksHi": [
    "प्लग का खिसकना।",
    "पोर्टल हाइपरटेंशन या आंतों में सूजन।",
    "रक्तस्राव।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल शंट लिगेशन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "पूर्ण बेहोशी अथवा शामक दवा।"
},
  "gorham-stout-bone-sclerotherapy": {
  "id": "gorham-stout-bone-sclerotherapy",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Gorham-Stout Disease & Generalized Lymphatic Anomaly: Osseous Sclerotherapy with Bleomycin",
  "nameHi": "गोरहम-स्टाउट बीमारी: हड्डी के लिंफेटिक गुच्छों की ब्लियोमाइसिन स्क्लेरोथेरेपी",
  "indicationEn": "Progressive osteolysis (\"vanishing bone disease\") and intraosseous cystic lymphatic malformations in Gorham-Stout disease or generalized lymphatic anomaly (GLA); Imminent pathological fracture, spinal instability, or cortical destruction; Refractory bone pain, localized swelling, and secondary chylothorax/chyloperitoneum",
  "indicationHi": "हड्डी का रहस्यमयी ढंग से गलना (Vanishing Bone Disease / Generalized Lymphatic Anomaly), जिससे हड्डी टूटने या छाती में दूधिया पानी भरने (Chylothorax) का खतरा हो।",
  "descriptionEn": "Procedure performed under general anesthesia or deep conscious sedation in the CT/Angio hybrid suite. Pre-procedure high-resolution CT cross-sections identifying the most active lytic bone pockets and cortical breaches. Percutaneous cortical perforation into the osteolytic cavity using an 11G/13G Jamshidi or Osteo-Site needle under real-time CT and fluoroscopic control. Gentle aspiration of intraosseous contents (yielding watery lymphatic fluid, chyle, or serosanguinous fluid).",
  "descriptionHi": "सीटी स्कैन की निगरानी में हड्डी के खोखले हिस्सों में सुई डालकर ब्लियोमाइसिन दवा छोड़ी जाती है, जिससे हड्डी को गलाने वाली असामान्य वाहिकाएं सूख जाती हैं।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of gorham-stout disease & generalized lymphatic anomaly: osseous sclerotherapy with bleomycin without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "हड्डी का गलना रुकना और हड्डी का दोबारा मजबूत होना।",
    "गंभीर फ्रैक्चर और दर्द से बचाव।"
  ],
  "specificRisksEn": [
    "Systemic intravasation of sclerosant causing pulmonary toxicity",
    "Pathological fracture through weakened cortical bone during needle advancement",
    "Infection / osteomyelitis in immunosuppressed lymphatic tissue",
    "Transient severe post-injection inflammatory pain"
  ],
  "specificRisksHi": [
    "हड्डी में अस्थायी दर्द व सूजन।",
    "ब्लियोमाइसिन के प्रभाव से हल्का बुखार।",
    "संक्रमण।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "रेडियोथेरेपी, सिरोलिमस (Sirolimus) दवा, अथवा सर्जिकल ग्राफ्टिंग।",
  "sedationTypeEn": "General endotracheal anesthesia with continuous arterial blood pressure and invasive monitoring.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा अथवा पूर्ण बेहोशी।"
},
  "pelvic-congestion-syndrome-coiling": {
  "id": "pelvic-congestion-syndrome-coiling",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Pelvic Congestion Syndrome: Bilateral Ovarian Vein & Internal Iliac Tributary Coil/Foam Embolization",
  "nameHi": "पेल्विक कंजेशन सिंड्रोम: डिम्बग्रंथि नस (Ovarian Vein) की कोइलिंग (महिलाओं के पुराने पेडू दर्द का इलाज)",
  "indicationEn": "Chronic pelvic pain (> 6 months duration) exacerbated by standing, coitus (dyspareunia), or menstruation in multiparous women; Significant ovarian vein reflux with dilated pelvic venous plexus (> 6-8 mm diameter varices) on imaging; Vulvar, perineal, or upper thigh varicosities communicating with pelvic reservoir",
  "indicationHi": "महिलाओं में गर्भाशय व डिम्बग्रंथि की नसों का फूल जाना (Pelvic Congestion Syndrome), जिससे खड़े रहने या संबंध बनाने के बाद पेडू में लगातार भारी दर्द व असहजता हो।",
  "descriptionEn": "Right internal jugular vein (or common femoral vein) access under ultrasound guidance; 6F sheath placement. Selective cannulation of the left ovarian vein at its junction with the left renal vein using a 5F Cobra catheter and Glidewire. Descendant venography in reversed Trendelenburg position (or with Valsalva maneuver) documenting severe reflux, incompetence of valves, and massive pelvic/parauterine pooling. Advance catheter deep into the pelvic portion of the left ovarian vein, immediately superior to the pelvic brim.",
  "descriptionHi": "गर्दन या जांघ की नस से कैथेटर डालकर बाईं ओवेरियन वेन में सूक्ष्म धातु के छल्ले (Coils) और फोम दवा डाली जाती है, जिससे उल्टी दिशा में खून बहने वाली नस स्थायी रूप से सील हो जाती है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of pelvic congestion syndrome: bilateral ovarian vein & internal iliac tributary coil/foam embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "सालों पुराने पेडू के असहनीय दर्द और भारीपन से 85-90% स्थायी मुक्ति।",
    "बिना पेट खोले और बिना बच्चेदानी/अंडाशय निकाले मिनिमली इनवेसिव इलाज।",
    "उसी दिन या अगले दिन सामान्य दिनचर्या में वापसी।"
  ],
  "specificRisksEn": [
    "Coil migration into left renal vein, IVC, right heart, or pulmonary artery",
    "Ovarian vein perforation / retroperitoneal hematoma",
    "Post-embolization thrombophlebitis pain and low-grade fever (self-limiting, 3-5 days)",
    "Transient worsening of pelvic heaviness"
  ],
  "specificRisksHi": [
    "पीठ या पेट के निचले हिस्से में हल्का दर्द (1-2 दिन)।",
    "छल्ले का फेफड़े की तरफ खिसकना (< 0.5% बहुत दुर्लभ)।",
    "पंक्चर स्थल पर हल्का नील पड़ना।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "लैप्रोस्कोपिक ओवेरियन वेन लिगेशन, हिस्टेरेक्टॉमी (बच्चेदानी निकालना), अथवा हार्मोनल दवाइयां।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवा।"
},
  "ovarian-vein-vulvar-varices-coiling": {
  "id": "ovarian-vein-vulvar-varices-coiling",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Left Ovarian Vein Reflux & Vulvar Varices: Superselective Transjugular Coil Embolization",
  "nameHi": "वल्वर वेरिकोजिटी एवं ओवेरियन वेन कोइलिंग (गुप्तांग की फूली नसों का ट्रांसजुगुलर इलाज)",
  "indicationEn": "Painful, protruding vulvar and labial varicosities in multiparous females exacerbated by sitting or standing; Direct communication and feeding from an incompetent, refluxing left ovarian vein confirmed on duplex ultrasound; Refractory pain, recurrent thrombophlebitis of external genitalia, or contact bleeding",
  "indicationHi": "गर्भावस्था के बाद गुप्तांग (Vulva) और जांघ के ऊपरी हिस्से में नसों के दर्दनाक गुच्छे उभरना, जिससे बैठने या चलने में तेज दर्द हो।",
  "descriptionEn": "Right internal jugular vein cannulation with a 6F sheath under real-time ultrasound guidance. Selective catheterization of the left renal vein, then engaging the ostium of the left ovarian vein using a 5F Cobra or Simmons catheter. Valsalva-augmented venography demonstrating retrograde rush of contrast across the pelvic brim down into the labial/vulvar venous reservoir via trans-pelvic communications. Superselective advancement of a 2.7F microcatheter into the lowermost pelvic escape branch feeding the vulvar plexus.",
  "descriptionHi": "गर्दन की नस से कैथेटर डालकर ओवेरियन वेन और पेडू की खराब नसों को छल्लों से बंद किया जाता है, जिससे गुप्तांग की नसें स्वतः सिकुड़कर गायब हो जाती हैं।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of left ovarian vein reflux & vulvar varices: superselective transjugular coil embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "गुप्तांग की फूली व दर्दनाक नसों से पूर्ण छुटकारा।",
    "बिना किसी दर्दनाक बाहरी चीरे के त्वरित समाधान।"
  ],
  "specificRisksEn": [
    "Non-target coil migration to the pulmonary circulation",
    "Vulvar or perineal tissue thrombophlebitic induration",
    "Left renal vein ostial thrombosis",
    "Retroperitoneal dye extravasation"
  ],
  "specificRisksHi": [
    "अस्थायी पेडू दर्द।",
    "हल्का बुखार।",
    "पंक्चर स्थल पर सूजन।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "लोकल फोम स्क्लेरोथेरेपी अथवा सर्जिकल एक्सीजन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "fmd-renal-angioplasty": {
  "id": "fmd-renal-angioplasty",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Fibromuscular Dysplasia (FMD): Renal Artery Balloon Angioplasty without Stenting",
  "nameHi": "फाइब्रोमस्कुलर डिस्प्लेसिया (FMD) रीनल एंजियोप्लास्टी (युवाओं में बीपी का बिना स्टेंट गुब्बारे से इलाज)",
  "indicationEn": "Medial fibroplasia with classic \"string-of-beads\" appearance in middle or distal main renal artery or branch vessels; Refractory or malignant renovascular hypertension in young/middle-aged patients (especially females); Preservation of renal function / ischemic nephropathy reversal",
  "indicationHi": "कम उम्र में (विशेष रूप से युवतियों में) गुर्दे की धमनी में मोतियों की माला जैसी बनावट (String-of-Beads FMD) के कारण गंभीर अनियंत्रित ब्लड प्रेशर।",
  "descriptionEn": "Retrograde common femoral artery access; introduction of a 6F renal guiding sheath into the abdominal aorta. Selective non-traumatic cannulation of the affected renal artery ostium using a 5F RDC catheter; administer intra-arterial heparin (5,000 IU) and 100-200 mcg Nitroglycerin to prevent vasospasm. High-magnification DSA documenting multiple web-like stenoses alternating with aneurysmal ectasias (string-of-beads) in the mid-to-distal renal artery. Advance an 0.014\" atraumatic soft-tip guidewire across the dysplastic webs into a distal interlobar branch under fluoroscopic guidance.",
  "descriptionHi": "जांघ की नस से गुर्दे की धमनी में विशेष गुब्बारा ले जाकर फुलाया जाता है। एफएमडी में स्टेंट नहीं लगाया जाता, केवल गुब्बारे से ही नस की दीवार के जाल टूट जाते हैं और बीपी हमेशा के लिए ठीक हो जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of fibromuscular dysplasia (fmd): renal artery balloon angioplasty without stenting without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "युवा मरीजों में ब्लड प्रेशर का 80-90% पूर्ण स्थायी खात्मा (Cure of Hypertension)।",
    "शरीर में कोई धातु का स्टेंट छोड़े बिना प्राकृतिक नस का सफल फैलाव।",
    "जीवन भर दवाइयां खाने की मजबूरी से मुक्ति।"
  ],
  "specificRisksEn": [
    "Acute renal artery dissection (may mandate bailout stent deployment)",
    "Renal artery rupture / retroperitoneal hemorrhage",
    "Severe intrarenal vasospasm (manage with intra-arterial NTG/verapamil)",
    "Distal micro-thromboembolism"
  ],
  "specificRisksHi": [
    "गुर्दे की नस का फटना या डिसेक्शन (1-2%)।",
    "गुर्दे में रक्तस्राव।",
    "पंक्चर स्थल पर हेमेटोमा।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "आजीवन कई प्रकार की बीपी दवाएं खाना अथवा सर्जिकल बाईपास।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ हल्की शामक दवा।"
},
  "fmd-carotid-dissection-covered-stent": {
  "id": "fmd-carotid-dissection-covered-stent",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "FMD with Carotid Dissection / Pseudoaneurysm: Endovascular Covered Stent Reconstruction",
  "nameHi": "गर्दन की धमनी में एफएमडी व डिसेक्शन पर कवर्ड स्टेंट लगाना (गर्दन की नस फटने व स्ट्रोक का इलाज)",
  "indicationEn": "Extracranial internal carotid artery (ICA) dissection or expanding dissecting pseudoaneurysm secondary to underlying fibromuscular dysplasia; Recurrent transient ischemic attacks (TIAs) or stroke refractory to therapeutic anticoagulation/antiplatelet therapy; Critical flow limitation in true lumen with risk of impending total ICA occlusion",
  "indicationHi": "एफएमडी के कारण गर्दन की मुख्य कैरोटिड धमनी की आंतरिक परत फटना (Carotid Dissection) अथवा स्यूडोएन्यूरिज्म बनना, जिससे स्ट्रोक का गंभीर खतरा हो।",
  "descriptionEn": "Ultrasound-guided common femoral artery puncture; placement of a 6F 90cm guiding sheath into the distal common carotid artery. Diagnostic biplane cerebral angiography detailing the cervical carotid dissection, true/false lumens, pseudoaneurysm neck, and circle of Willis collateral cross-filling. Careful negotiation of the true lumen across the dissected segment using an 0.014\" steerable microguidewire under roadmapping, anchoring the wire in the petrous/cavernous ICA. Deployment of an embolic protection filter in the high cervical ICA petrous landing zone (if anatomy permits).",
  "descriptionHi": "जांघ की नस से गर्दन की कैरोटिड धमनी में आवरणयुक्त स्टेंट स्थापित किया जाता है, जो फटी हुई परत को चिपकाकर मस्तिष्क को खून का सुरक्षित बहाव बहाल करता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of fmd with carotid dissection / pseudoaneurysm: endovascular covered stent reconstruction without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "घातक स्ट्रोक (मस्तिष्क पक्षाघात) से तुरंत बचाव।",
    "नस के झूठे एन्यूरिज्म के फटने की रोकथाम।",
    "ओपन वैस्कुलर सर्जरी से बचाव।"
  ],
  "specificRisksEn": [
    "Intracranial thromboembolism / acute ischemic stroke",
    "Hyperperfusion syndrome post-recanalization",
    "Carotid sinus reflex bradycardia/hypotension (have atropine ready)",
    "Access site hematoma"
  ],
  "specificRisksHi": [
    "प्रक्रिया के दौरान स्ट्रोक का जोखिम (2-3%)।",
    "स्टेंट में थक्का जमना।",
    "रक्तचाप में गिरावट (Carotid Sinus Reflex)।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "दीर्घकालिक एंटीकोआगुलेशन दवाएं अथवा ओपन सर्जिकल रीकंस्ट्रक्शन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा अथवा पूर्ण बेहोशी।"
},
  "takayasu-subclavian-stenting": {
  "id": "takayasu-subclavian-stenting",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Takayasu Arteritis: Subclavian Artery Severe Stenosis Balloon Angioplasty & Covered Stenting",
  "nameHi": "टकायासु आर्टराइटिस: सबक्लेवियन धमनी में कवर्ड स्टेंट लगाना (हाथ में नाड़ी गायब होने का इलाज)",
  "indicationEn": "Severe upper limb claudication, pulse deficit, or subclavian steal syndrome in inactive/burnt-out phase of Takayasu arteritis; Critical stenosis (> 70%) of the subclavian artery with resting inter-arm systolic pressure differential > 30 mmHg; Recurrent arm ischemia impairing daily activities",
  "indicationHi": "युवा महिलाओं में टकायासु धमनियों की सूजन (Takayasu Arteritis) के कारण हाथ की नस बंद होना, जिससे हाथ की नाड़ी गायब हो, हाथ में कमजोरी व दर्द हो।",
  "descriptionEn": "Access via right common femoral artery (and retrograde left brachial access if severe ostial flush occlusion). Arch aortography in 45-degree LAO projection delineating subclavian artery ostium, vertebral origin, and internal mammary collateralization. Systemic heparinization (70-100 IU/kg, target ACT > 250s). Careful recanalization of the fibrotic, heavily thickened arterial stenosis using an angled Glidewire supported by a 5F Headhunter catheter; exchange for a stiff support wire.",
  "descriptionHi": "सूजन शांत होने (Quiescent Phase) की पुष्टि के बाद हाथ की मुख्य धमनी में आवरणयुक्त स्टेंट स्थापित किया जाता है ताकि नस दोबारा न सिकुड़े।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of takayasu arteritis: subclavian artery severe stenosis balloon angioplasty & covered stenting without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "हाथ में सामान्य नाड़ी व ताकत की वापसी।",
    "हाथ में गैंग्रीन के खतरे से बचाव।",
    "ओपन सर्जिकल बाईपास से बचाव।"
  ],
  "specificRisksEn": [
    "Arterial rupture secondary to high-pressure dilation of inflamed, brittle arterial wall",
    "Early restenosis or stent occlusion if performed during active inflammatory phase",
    "Inadvertent coverage of vertebral or internal mammary artery",
    "Cerebral thromboembolism"
  ],
  "specificRisksHi": [
    "नस में दोबारा सिकुड़न (Restenosis - टकायासु में 20-30% जोखिम, कवर्ड स्टेंट से कम)।",
    "नस का फटना।",
    "स्ट्रोक का दुर्लभ जोखिम।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल बाईपास (Carotid-Subclavian Bypass) अथवा केवल स्टेरॉयड दवाएं।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "takayasu-carotid-angioplasty": {
  "id": "takayasu-carotid-angioplasty",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Takayasu Arteritis: Innominate / Common Carotid Artery Balloon Angioplasty",
  "nameHi": "टकायासु आर्टराइटिस: कॉमन कैरोटिड धमनी की एंजियोप्लास्टी (दिमाग की नस में रुकावट खोलना)",
  "indicationEn": "Symptomatic severe stenosis (> 70%) of innominate or common carotid artery causing cerebral hypoperfusion, amaurosis fugax, or syncope; Quiescent phase Takayasu arteritis with documented medical control of active inflammation; Bilateral supra-aortic trunk stenoses with critical global cerebral ischemia",
  "indicationHi": "टकायासु बीमारी से गर्दन की कैरोटिड नस का सिकुड़ना, जिससे दिमाग में खून की कमी, चक्कर, बेहोशी या आंखों की रोशनी जाने का खतरा हो।",
  "descriptionEn": "Ultrasound-guided common femoral artery puncture; placement of a 6F 90cm sheath parked in the aortic arch. Arch aortogram and selective common carotid/innominate angiogram measuring stenosis caliber and cranial intracranial circulation. Systemic anticoagulation with IV unfractionated heparin (target ACT 250-300 seconds). Careful crossing of the fibrotic innominate/carotid stenosis with an 0.014\" microguidewire; deploy distal embolic protection filter in distal cervical ICA if anatomically accessible.",
  "descriptionHi": "जांघ की नस से गर्दन की कैरोटिड धमनी में बैलून ले जाकर सिकुड़न को फैलाया जाता है और आवश्यकतानुसार स्टेंट लगाया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of takayasu arteritis: innominate / common carotid artery balloon angioplasty without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "मस्तिष्क में रक्त संचार बहाल होना और स्ट्रोक से बचाव।",
    "आंखों की रोशनी सुरक्षित रहना।",
    "चक्कर और बेहोशी से मुक्ति।"
  ],
  "specificRisksEn": [
    "Distal embolization / ischemic stroke",
    "Cerebral hyperperfusion syndrome / intracranial hemorrhage",
    "Arterial dissection / rupture",
    "Acute restenosis triggered by inflammatory flare"
  ],
  "specificRisksHi": [
    "प्रक्रिया के दौरान स्ट्रोक (2-4%)।",
    "नस का फटना।",
    "री-स्टेनोसिस।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल एओर्टो-कैरोटिड बाईपास अथवा इम्यूनोसप्रेसिव दवाएं।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "takayasu-aortoplasty-large-stent": {
  "id": "takayasu-aortoplasty-large-stent",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Takayasu Arteritis: Aortic Coarctation / Mid-Aortic Syndrome Balloon Aortoplasty & Stenting",
  "nameHi": "टकायासु एओर्टोप्लास्टी व लार्ज स्टेंटिंग (पेट की महाधमनी की सिकुड़न को खोलना)",
  "indicationEn": "Severe atypical coarctation of descending thoracic or abdominal aorta secondary to chronic panarteritis; Malignant upper body hypertension with upper-to-lower limb systolic pressure gradient > 30-40 mmHg; Lower limb claudication, congestive cardiac failure, or mesenteric/renal hypoperfusion",
  "indicationHi": "टकायासु बीमारी के कारण पेट की मुख्य महाधमनी का सिकुड़ जाना (Mid-Aortic Syndrome), जिससे ऊपरी शरीर में अत्यधिक बीपी और पैरों में खून न पहुंचना।",
  "descriptionEn": "Bilateral common femoral access under ultrasound guidance: 12F sheath on the intervention side, 5F sheath on contralateral side. Simultaneous dual pressure monitoring (ascending/descending thoracic aorta via radial or upper femoral access vs. distal femoral pressure) measuring baseline trans-coarctation gradient. Thoracoabdominal aortography using marked pigtail catheter identifying relation to visceral and renal branches. Advance Lunderquist extra-stiff wire across the coarctation into the ascending aorta.",
  "descriptionHi": "जांघ की नस से महाधमनी में बड़ा धातु का स्टेंट ले जाकर फुलाया जाता है, जिससे महाधमनी पूरी तरह चौड़ी हो जाती है और पैरों तक खून का बहाव सामान्य हो जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of takayasu arteritis: aortic coarctation / mid-aortic syndrome balloon aortoplasty & stenting without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "खतरनाक हाई ब्लड प्रेशर का नियंत्रण और पैरों में रक्त प्रवाह की बहाली।",
    "हार्ट फेलियर और स्ट्रोक के जानलेवा खतरे से बचाव।",
    "छाती व पेट खोलने के भयानक बाईपास ऑपरेशन से बचाव।"
  ],
  "specificRisksEn": [
    "Aortic rupture / catastrophic retroperitoneal or mediastinal hemorrhage",
    "Aortic dissection (Stanford type A or B)",
    "Inadvertent coverage of renal or mesenteric arterial origins",
    "Stent migration"
  ],
  "specificRisksHi": [
    "महाधमनी की दीवार में फटन (Aortic Rupture)।",
    "गुर्दे की नसों का मुहाना ढक जाना।",
    "जांघ में रक्तस्राव।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन थोरेको-एब्डॉमिनल बाईपास सर्जरी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा गहन मॉनिटर्ड केयर।"
},
  "tao-pedal-arch-angioplasty-sympathectomy": {
  "id": "tao-pedal-arch-angioplasty-sympathectomy",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Buerger's Disease (TAO): Deep Pedal Arch Balloon Angioplasty & Chemical Lumbar Sympathectomy",
  "nameHi": "बर्जर बीमारी (TAO): पैर के तलवे की एंजियोप्लास्टी एवं केमिकल लंबर सिम्पैथेक्टॉमी (बीड़ी पीने से पैर सड़ने का इलाज)",
  "indicationEn": "Severe rest pain (Rutherford Category 4) or ischemic non-healing digital ulceration/gangrene (Rutherford Category 5-6) in Buerger's disease; Severe multi-segment infrapopliteal and pedal arch occlusions with characteristic \"corkscrew\" collateralization; Failure of smoking cessation and medical vasodilator therapy alone to relieve limb-threatening ischemia",
  "indicationHi": "बीड़ी/तंबाकू पीने वाले युवाओं में पिंडलियों और पंजों की नसों का बंद होना (Buerger's Disease / Thromboangiitis Obliterans), जिससे पैर की उंगलियां काली पड़ना (Gangrene) और असहनीय दर्द हो।",
  "descriptionEn": "Step 1 (Chemical Lumbar Sympathectomy): Prone position on CT table; under CT guidance, advance 21G 15cm Chiba needle to the anterolateral aspect of L2-L3 vertebral bodies (lumbar sympathetic chain). Verify needle position with 0.5 mL contrast confirming retroperitoneal longitudinal spread along psoas fascia without intravascular/psoas injection. Instill 5-8 mL of 100% absolute ethanol (or 6% phenol) preceded by 2 mL 2% lidocaine; document immediate warming and hyperemic flush of the ipsilateral foot. Step 2 (Endovascular Pedal Arch Angioplasty): Supine position; antegrade ultrasound-guided puncture of ipsilateral superficial femoral or popliteal artery with a 4F sheath.",
  "descriptionHi": "पैर के तलवे की सूक्ष्म नसों को 1.5 मिमी के छोटे गुब्बारों से खोला जाता है। साथ ही कमर की रीढ़ के पास सुई डालकर सिम्पैथेटिक नसों को केमिकल (Phenol/Alcohol) द्वारा सुन्न कर दिया जाता है, जिससे पैर की नसें फैल जाती हैं और खून का बहाव बढ़ जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of buerger's disease (tao): deep pedal arch balloon angioplasty & chemical lumbar sympathectomy without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "पैर की उंगलियों को कटने (Amputation) से 90% बचाव।",
    "रात में होने वाले असहनीय दर्द से तुरंत मुक्ति।",
    "घावों का तेजी से भरना।"
  ],
  "specificRisksEn": [
    "Vessel rupture of delicate, inflamed pedal branches (manage with prolonged low-pressure balloon tamponade)",
    "Post-sympathectomy postsympathetic neuralgia (transient thigh dysesthesia)",
    "Retroperitoneal hematoma / psoas hematoma",
    "Distal microthrombosis"
  ],
  "specificRisksHi": [
    "अस्थायी रूप से जांघ में सुन्नपन या न्यूराल्जिया (Post-sympathectomy Neuralgia)।",
    "नस में दोबारा थक्का जमना (यदि मरीज बीड़ी न छोड़े)।",
    "पंक्चर स्थल पर दर्द।"
  ],
  "alternativesEn": "Open surgical bypass grafting (e.g., femoropopliteal / distal vein bypass), open endarterectomy, or conservative medical therapy with supervised exercise.",
  "alternativesHi": "पैर का विच्छेदन (Amputation), सर्जिकल सिम्पैथेक्टॉमी, अथवा प्रोस्टासाइक्लिन इंजेक्शन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ हल्की शामक दवा।"
},
  "raynaud-digital-vasodilator-botox": {
  "id": "raynaud-digital-vasodilator-botox",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Raynaud Phenomenon with Ulceration: Upper Extremity Vasodilatory Infusion & Botulinum Toxin Block",
  "nameHi": "रेनॉड फिनोमेनन: डिजिटल वैसोडाइलेटर इन्फ्यूजन व बोटॉक्स ब्लॉक (सर्दियों में उंगलियां नीली पड़ने का इलाज)",
  "indicationEn": "Severe secondary Raynaud phenomenon (associated with systemic sclerosis / crest syndrome) with refractory, excruciating digital ulceration or threatened gangrene; Failed conservative, calcium-channel blocker, PDE-5 inhibitor, and IV prostacyclin therapy; Severe digital vasospasm with profound microvascular hypoperfusion on laser Doppler / thermography",
  "indicationHi": "सर्दियों में या ठंड लगने पर हाथ की उंगलियों का अचानक सफेद, नीला पड़ना और तेज दर्द/घाव होना (Severe Raynaud's)।",
  "descriptionEn": "Step 1 (Selective Intra-Arterial Infusion): Retrograde 4F brachial or radial access under ultrasound guidance. Selective palmar digital arteriography using 4F MPA and 2.0F microcatheter documenting diffuse corkscrewing, spasm, and non-filling of digital branches. Superselective slow intra-arterial infusion of vasodilators: Nitroglycerin (100-200 mcg) and Alprostadil (PGE-1, 20 mcg over 20 minutes) into the radial/ulnar palmar arches; document opening of previously spastic digital branches on serial runs. Step 2 (Targeted Botulinum Toxin A Sympathetic Block): Following angiographic restoration, patient positioned supine; hand prepped sterilely.",
  "descriptionHi": "हाथ की धमनी में कैथेटर से नस फैलाने वाली दवाएं दी जाती हैं तथा हथेली की नसों के चारों ओर बोटुलिनम टॉक्सिन (Botox) के सूक्ष्म इंजेक्शन लगाए जाते हैं, जिससे नसों की ऐंठन महीनों के लिए बंद हो जाती है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of raynaud phenomenon with ulceration: upper extremity vasodilatory infusion & botulinum toxin block without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "उंगलियों के दर्द, नीलेपन और घावों से 4-6 महीने तक निरंतर राहत।",
    "उंगलियों में रक्त प्रवाह की संपूर्ण बहाली।",
    "उंगलियां कटने से बचाव।"
  ],
  "specificRisksEn": [
    "Transient intrinsic hand muscle weakness (intrinsic hand paresis from botulinum diffusion)",
    "Systemic hypotension / headache from vasodilatory infusion",
    "Radial / brachial artery access site hematoma or spasm",
    "Infection at injection sites"
  ],
  "specificRisksHi": [
    "हाथ की पकड़ में हल्की अस्थायी कमजोरी (2-3 सप्ताह)।",
    "इंजेक्शन स्थल पर हल्का दर्द।",
    "दवा का असर खत्म होने पर भविष्य में दोबारा इंजेक्शन की जरूरत।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "दवाइयां (Nifedipine, Sildenafil), गर्म दस्ताने, अथवा थोरैसिक सिम्पैथेक्टॉमी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
},
  "blue-toe-atheroma-exclusion-stent": {
  "id": "blue-toe-atheroma-exclusion-stent",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Blue Toe Syndrome / Micro-Embolism: Diagnostic Localization & Atheroma Stent-Graft Exclusion",
  "nameHi": "ब्लू टो सिंड्रोम: एथेरोमा एक्सक्लूजन स्टेंटिंग (पैर का अंगूठा अचानक नीला पड़ने का इलाज)",
  "indicationEn": "Acute or recurrent painful cyanosis/petechiae of one or more toes (\"blue toe\") with preserved palpable pedal pulses; Ulcerated, shaggy, non-stenosing atheromatous plaque or eccentric pseudoaneurysm of the abdominal aorta, iliac, or common femoral artery serving as the embolic source; Prevention of progressive digital gangrene, recurrent atheroembolization, or limb loss",
  "indicationHi": "महाधमनी या जांघ की नस में जमा कचरा/कोलेस्ट्रॉल टूटकर पैर के अंगूठे में चले जाना (Blue Toe Syndrome / Micro-embolism), जिससे अंगूठा अचानक नीला व दर्दनाक हो जाए।",
  "descriptionEn": "Retrograde common femoral artery access contralateral (or ipsilateral if lesion is proximal) under ultrasound guidance. High-resolution non-magnified and magnified digital subtraction angiography in multiple oblique views identifying the ragged, ulcerated embolic plaque source (often subtle and non-stenotic). Intravascular ultrasound (IVUS) evaluation: Pullback through the suspected arterial segment to definitively localize the mobile, hypoechoic protruding thrombus or ulcerated crater and measure accurate reference vessel diameters. Systemic heparinization (5,000 IU IV bolus).",
  "descriptionHi": "पेट या जांघ की मुख्य नस में जहां से कचरा छूट रहा है (Ulcerated Plaque), उस जगह आवरणयुक्त स्टेंट (Covered Stent) लगाकर कचरे को अंदर ही सील कर दिया जाता है ताकि वह नीचे न बह सके।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of blue toe syndrome / micro-embolism: diagnostic localization & atheroma stent-graft exclusion without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "पैर की उंगलियों में बार-बार कचरा जाने और उंगलियां कटने से पूर्ण बचाव।",
    "बीमारी के मूल स्रोत का स्थायी समाधान।"
  ],
  "specificRisksEn": [
    "Procedural dislodgement of atheromatous debris causing catastrophic downstream pedal micro-embolization (trash foot)",
    "Renal atheroembolism (cholesterol crystal embolization / acute kidney injury)",
    "Stent-graft thrombosis",
    "Access site hematoma"
  ],
  "specificRisksHi": [
    "स्टेंट लगाने के दौरान अतिरिक्त कचरा नीचे जाना।",
    "स्टेंट में थक्का।",
    "जांघ में हेमेटोमा।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल एंडार्टेरेक्टॉमी अथवा केवल रक्त पतला करने वाली दवाएं।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "scimitar-anomalous-artery-embolization": {
  "id": "scimitar-anomalous-artery-embolization",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Scimitar Syndrome: Transcatheter Occlusion of Anomalous Systemic Arterial Supply",
  "nameHi": "सिमिटार सिंड्रोम: असामान्य धमनी की एम्बोलाइजेशन (फेफड़े की जन्मजात विकृत नस बंद करना)",
  "indicationEn": "Scimitar syndrome (congenital venolobar syndrome) with large anomalous systemic arterial feeder originating from abdominal/descending thoracic aorta supplying hypoplastic right lung; Significant left-to-right or left-to-systemic shunt causing high-output cardiac strain, pulmonary hypertension, or recurrent respiratory infections; Hemoptysis secondary to high-pressure systemic perfusion of the dysplastic right lower lobe",
  "indicationHi": "जन्मजात सिमिटार सिंड्रोम में पेट की महाधमनी से फेफड़े में असामान्य धमनी का जाना, जिससे फेफड़े में बार-बार इन्फेक्शन और सांस फूलना हो।",
  "descriptionEn": "Retrograde right common femoral artery puncture and 5F/6F sheath placement. Descending thoracic and abdominal aortography using a 5F pigtail catheter identifying the origin, caliber, and path of the large anomalous systemic feeding artery arising from the supradiaphragmatic or subdiaphragmatic aorta. Selective engagement of the anomalous artery using a 5F Cobra or Yashiro catheter. Selective angiography and rotational DSA documenting the aberrant vessel supplying the sequestered/hypoplastic right lower lung lobe with return into the scimitar vein.",
  "descriptionHi": "जांघ की नस से असामान्य धमनी में जाकर वैस्कुलर प्लग या छल्लों द्वारा उस नस को बंद किया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of scimitar syndrome: transcatheter occlusion of anomalous systemic arterial supply without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "फेफड़े में रक्त का अत्यधिक दबाव कम होना।",
    "बार-बार होने वाले निमोनिया से बचाव।"
  ],
  "specificRisksEn": [
    "Inadvertent migration of coil/plug into the abdominal aorta",
    "Transient pleurisy / fever (pulmonary infarction of dysplastic segment)",
    "Aortic wall dissection at the anomalous vessel takeoff",
    "Groin hematoma"
  ],
  "specificRisksHi": [
    "फेफड़े में हल्का दर्द या इन्फार्क्शन।",
    "छल्ले का खिसकना।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल लिगेशन अथवा लोबेक्टॉमी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा अथवा पूर्ण बेहोशी।"
},
  "pulmonary-sequestration-embolization": {
  "id": "pulmonary-sequestration-embolization",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Pulmonary Sequestration: Aberrant Systemic Arterial Feeder Coil / Plug Embolization",
  "nameHi": "पल्मोनरी सीक्वेस्ट्रेशन: असामान्य धमनी की कोइलिंग (फेफड़े के अतिरिक्त टुकड़े की नस बंदी)",
  "indicationEn": "Intralobar or extralobar bronchopulmonary sequestration with symptomatic recurrent pneumonias, hemoptysis, or high-output cardiac strain; Definitive transcatheter cure or preoperative embolization to prevent life-threatening intraoperative hemorrhage during thoracic lobectomy; Anomalous large systemic feeding artery arising from thoracic or abdominal aorta",
  "indicationHi": "फेफड़े का एक जन्मजात अलग टुकड़ा जिसे महाधमनी से खून मिल रहा हो (Pulmonary Sequestration), जिससे खांसी में खून या बार-बार संक्रमण हो।",
  "descriptionEn": "Ultrasound-guided retrograde common femoral artery access; placement of a 6F 45cm guiding sheath. Descending thoracic and upper abdominal aortography locating the aberrant systemic artery (most commonly arising between T8 and L1). Selective cannulation of the sequestration feeder using a 5F Cobra or Mikaelson catheter. Selective angiogram defining the branch arborization within the sequestered segment and confirming absence of communication with normal pulmonary arterial branches.",
  "descriptionHi": "महाधमनी से उस टुकड़े को खून देने वाली असामान्य धमनी में धातु के छल्ले या प्लग डालकर उसका खून बंद कर दिया जाता है, जिससे वह टुकड़ा सूख जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of pulmonary sequestration: aberrant systemic arterial feeder coil / plug embolization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "छाती चीरकर फेफड़ा काटने के बड़े ऑपरेशन (Lobectomy) से बचाव।",
    "खांसी में खून और संक्रमण से पूर्ण मुक्ति।"
  ],
  "specificRisksEn": [
    "Post-embolization syndrome (fever, pleuritic chest pain, leukocytosis)",
    "Abscess formation within the ischemic sequestered mass (requires antibiotic coverage)",
    "Migration of embolic material into aorta or mesenteric vessels",
    "Access site pseudoaneurysm"
  ],
  "specificRisksHi": [
    "हल्का बुखार व छाती में दर्द (1-3 दिन)।",
    "छल्ले का खिसकना।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन थोरेसिक लोबेक्टॉमी।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा।"
},
  "bronchial-dieulafoy-embolization": {
  "id": "bronchial-dieulafoy-embolization",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Bronchial Dieulafoy Lesion: Superselective Microcoil Embolization for Catastrophic Hemoptysis",
  "nameHi": "ब्रोंकियल ड्युलाफॉय लीज़न एम्बोलाइजेशन (सांस की नली में फटी नस की सुपरसिलेक्टिव कोइलिंग)",
  "indicationEn": "Bronchial Dieulafoy disease: Rare, life-threatening congenital vascular anomaly characterized by a tortuous, dysplastic, large-caliber bronchial submucosal artery protruding into the bronchus without arborization; Catastrophic, recurrent, massive hemoptysis often provoked by diagnostic bronchoscopic biopsy (biopsy strictly contraindicated!); Failure or contraindication to emergency pulmonary resection in critically ill patient",
  "indicationHi": "सांस की नली की दीवार में असामान्य रूप से फूली हुई धमनी का अचानक फटना, जिससे मुंह से अत्यधिक जानलेवा खून आता है। ब्रोंकोस्कोपी से बायोप्सी करने पर मरीज की तुरंत मृत्यु हो सकती है।",
  "descriptionEn": "Immediate femoral arterial access under ultrasound guidance; 5F/6F sheath placement. Selective cannulation of the involved bronchial artery using a 5F Mikaelson or Cobra catheter. Bronchial arteriography identifying the non-tapering, large-caliber dysplastic submucosal branch terminating abruptly at the bleeding bronchial wall site. CRITICAL SAFETY RULE: Scrutinize all views to positively exclude the anterior spinal artery (artery of Adamkiewicz) arising from the bronchial/intercostal trunk.",
  "descriptionHi": "जांघ की नस से ब्रोंकियल धमनी में माइक्रोकैथेटर ले जाकर केवल फटी हुई नस के मुहाने पर सूक्ष्म छल्ले डालकर तुरंत रक्तस्राव सील किया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of bronchial dieulafoy lesion: superselective microcoil embolization for catastrophic hemoptysis without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "अचानक होने वाले जानलेवा रक्तस्राव से तत्काल जीवन रक्षा।",
    "फेफड़े के ऑपरेशन से बचाव।"
  ],
  "specificRisksEn": [
    "Fatal bronchial airway flooding / suffocation if vessel ruptures during wire manipulation",
    "Spinal cord ischemia (if spinal artery branch was unrecognized)",
    "Bronchial wall necrosis",
    "Recurrent hemoptysis"
  ],
  "specificRisksHi": [
    "स्पाइनल आर्टरी में दवा जाना (< 1%)।",
    "छाती में दर्द।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "आपातकालीन सर्जिकल वेज रीसेक्शन।",
  "sedationTypeEn": "Regional spinal anesthesia or monitored conscious sedation with local anesthesia.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा अथवा एयरवे इंट्यूबेशन।"
},
  "leriche-cerab-reconstruction": {
  "id": "leriche-cerab-reconstruction",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Leriche Syndrome: Total Occlusion Recanalization with Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB)",
  "nameHi": "लेरिश सिंड्रोम: सेराब तकनीक द्वारा महाधमनी का पूर्ण पुनर्निर्माण (LERICH CERAB - कूल्हों व पैरों का रक्त संचार)",
  "indicationEn": "Leriche syndrome triad: Bilateral buttock/thigh claudication, erectile dysfunction, and absent femoral pulses in aortoiliac occlusive disease (TASC II Type D lesions); Chronic total occlusion (CTO) of the infrarenal abdominal aorta extending into both common iliac arteries; Severe lifestyle-limiting claudication or critical limb ischemia in patients at prohibitive open surgical risk for aortobifemoral bypass",
  "indicationHi": "महाधमनी और दोनों जांघों की नसों का 100% पूर्ण पुराना अवरोध (Leriche Syndrome), जिससे दोनों कूल्हों व जांघों में असहनीय दर्द, चलने में असमर्थता, नपुंसकता और पैरों में गैंग्रीन हो।",
  "descriptionEn": "Simultaneous triple access: Bilateral common femoral retrograde access (8F/9F) and left brachial/radial antegrade access (6F 90cm). Abdominal aortogram via brachial sheath detailing infrarenal aortic occlusion stump and relationship to renal artery ostia. Bidirectional recanalization: Retrograde subintimal or intraluminal crossing from femoral sheaths complemented by antegrade wire navigation from the brachial access; re-entry into true lumen using Outback LTD or flossing snare technique. Exchange for bilateral extra-stiff 0.035\" Amplatz wires establishing secure through-and-through tracks.",
  "descriptionHi": "दोनों जांघों और हाथों की नसों से एक साथ बंद रास्ते को पार कर महाधमनी में एक मुख्य कवर्ड स्टेंट और दोनों जांघों की नसों में दो कवर्ड स्टेंट एक साथ जोड़कर बिल्कुल नया आंतरिक बाईपास तैयार किया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of leriche syndrome: total occlusion recanalization with covered endovascular reconstruction of aortic bifurcation (cerab) without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "सालों से बंद दोनों पैरों में सामान्य रक्त संचार की तुरंत बहाली।",
    "ओपन सर्जिकल बाईपास (Aortobifemoral Bypass) के बड़े चीरे व जानलेवा खतरों से बचाव।",
    "पैरों के विच्छेदन (Amputation) से मुक्ति।"
  ],
  "specificRisksEn": [
    "Aortic rupture or iliac arterial avulsion during recanalization/balloon inflation (emergency covered stent bailout)",
    "Distal atheroembolization (trash foot)",
    "Renal artery coverage or acute occlusion",
    "Access site thrombosis / brachial hematoma"
  ],
  "specificRisksHi": [
    "नस का फटना (Arterial Rupture)।",
    "पैरों में थक्का जाना।",
    "जांघ में रक्तस्राव।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन सर्जिकल एओर्टोबाइफेमोरल बाईपास (Aortobifemoral Bypass Surgery) अथवा एक्सिलो-बाइफेमोरल बाईपास।",
  "sedationTypeEn": "Regional spinal anesthesia or monitored conscious sedation with local anesthesia.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा अथवा स्पाइनल एनेस्थीसिया।"
},
  "middle-aortic-syndrome-reconstruction": {
  "id": "middle-aortic-syndrome-reconstruction",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Middle Aortic Syndrome: Kissing Balloon Expandable Covered Stent Reconstruction",
  "nameHi": "मिडिल एओर्टिक सिंड्रोम: किसिंग कवर्ड स्टेंट पुनर्निर्माण (पेट की महाधमनी व गुर्दे की नसों का संयुक्त स्टेंट)",
  "indicationEn": "Middle Aortic Syndrome (MAS): Severe segmental hypoplasia or coarctation of the inter-renal or infrarenal abdominal aorta, frequently involving renal and mesenteric ostia; Severe renovascular hypertension in children or young adults refractory to multi-drug medical therapy; Intermittent lower extremity claudication, weak/absent femoral pulses, and left ventricular failure",
  "indicationHi": "पेट की महाधमनी और दोनों गुर्दों की नसों का एक साथ अत्यधिक सिकुड़ जाना (Middle Aortic Syndrome), जिससे युवा उम्र में अनियंत्रित खतरनाक ब्लड प्रेशर और गुर्दे खराब होने का खतरा हो।",
  "descriptionEn": "Simultaneous bilateral common femoral access and left trans-brachial access under ultrasound guidance. Simultaneous dual aortography and invasive pressure recordings: Confirm trans-stenotic peak systolic gradient > 30-40 mmHg. Positioning of protective 0.014\" guidewires into renal and superior mesenteric arteries from the brachial/contralateral sheath if branch ostia are contiguous with the landing zone. Advancement of a large-diameter balloon-expandable covered stent (CP Covered Stent or BeGraft Aortic) mounted on a BIB catheter over a Lunderquist extra-stiff wire across the hypoplastic mid-aorta.",
  "descriptionHi": "महाधमनी में बड़ा कवर्ड स्टेंट और दोनों गुर्दों की नसों में दो स्टेंट एक साथ सिंक्रोनाइज़्ड तरीके से लगाए जाते हैं, जिससे महाधमनी और गुर्दे दोनों का रास्ता एक साथ खुल जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of middle aortic syndrome: kissing balloon expandable covered stent reconstruction without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "घातक ब्लड प्रेशर का तुरंत नियंत्रण और गुर्दों का संरक्षण।",
    "ओपन थोरेको-एब्डॉमिनल बाईपास सर्जरी के भयानक खतरे से बचाव।"
  ],
  "specificRisksEn": [
    "Aortic rupture / retroperitoneal exsanguination during balloon expansion of hypoplastic aorta",
    "Inadvertent permanent occlusion of renal or mesenteric arteries causing renal or bowel infarction",
    "Stent migration",
    "Reperfusion cardiac overload"
  ],
  "specificRisksHi": [
    "गुर्दे की नस में स्टेंट बंद होना।",
    "महाधमनी फटना।",
    "रक्तस्राव।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "ओपन थोरेको-एब्डॉमिनल एओर्टिक बाईपास व रीनल रीवैस्कुलराइजेशन।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia)।"
},
  "carotid-artery-stenting-cas": {
  "id": "carotid-artery-stenting-cas",
  "category": "Carotid & Neurovascular Interventions",
  "nameEn": "Carotid Artery Angioplasty and Stenting (CAS) with Distal Embolic Protection",
  "nameHi": "कैरोटिड धमनी स्टेंटिंग (CAS - गर्दन की नस में स्टेंट लगाकर ब्रेन स्ट्रोक से बचाव)",
  "indicationEn": "Severe symptomatic internal carotid artery stenosis (>= 50-70% NASCET) following TIA or minor stroke, or high-risk asymptomatic stenosis (>= 80%) with hostile neck or medical co-morbidities.",
  "indicationHi": "गर्दन की मुख्य कैरोटिड धमनी में 70-99% गंभीर रुकावट, जिसके कारण दिमाग में खून की कमी से लकवे के दौरे (TIA / Minor Stroke) आ चुके हों अथवा भविष्य में बड़े ब्रेन स्ट्रोक का अत्यधिक खतरा हो।",
  "descriptionEn": "Under local anesthesia via femoral or radial access, an embolic protection filter (SpiderFX / FilterWire) is advanced past the stenosis to capture any dislodged debris. A self-expanding carotid stent is deployed across the plaque and gently post-dilated with a balloon, restoring cerebral blood flow while preventing distal embolization.",
  "descriptionHi": "जांघ या कलाई की नस से एक कैथेटर गर्दन की कैरोटिड नस में ले जाया जाता है। दिमाग में कचरा जाने से रोकने के लिए पहले नस के अंदर एक सुरक्षा छतरी (Embolic Protection Filter) खोली जाती है। इसके बाद सिकुड़ी हुई जगह पर एक मजबूत धातु का स्टेंट लगाकर नस को पूरी तरह चौड़ा कर दिया जाता है, जिससे दिमाग को भरपूर खून मिलने लगता है।",
  "benefitsEn": [
    "Substantial reduction (over 80-90%) in long-term risk of disabling or fatal ischemic stroke.",
    "Restoration of adequate cerebral hemispheric perfusion, relieving transient ischemic attacks (TIAs).",
    "Avoidance of surgical neck incision and cranial nerve injury risks associated with open carotid endarterectomy (CEA)."
  ],
  "benefitsHi": [
    "भविष्य में होने वाले जानलेवा या स्थायी लकवे (Paralytic Stroke) के खतरे से 80-90% बचाव।",
    "मस्तिष्क में रक्त संचार की तुरंत बहाली जिससे चक्कर, आंखों के आगे अंधेरा और कमजोरी से राहत।",
    "गर्दन पर बिना कोई चीरा लगाए (ओपन कैरोटिड सर्जरी रहित) न्यूनतम इनवेसिव सुरक्षित उपचार।"
  ],
  "specificRisksEn": [
    "Periprocedural ischemic stroke or transient ischemic attack (2-4% risk from microemboli during wire/stent manipulation).",
    "Hemodynamic depression: Sudden profound bradycardia or severe hypotension triggered by carotid sinus baroreceptor stimulation during balloon inflation.",
    "Carotid artery dissection, thrombosis, or perforation.",
    "Cerebral Hyperperfusion Syndrome (severe headache, focal seizures, or intracranial hemorrhage following rapid revascularization).",
    "Puncture site hematoma or pseudoaneurysm formation."
  ],
  "specificRisksHi": [
    "प्रक्रिया के दौरान दिमाग में बारीक कण चले जाने से स्ट्रोक (पक्षाघात) का 2-3% जोखिम (सुरक्षा छतरी द्वारा न्यूनतम किया जाता है)।",
    "गुब्बारा फुलाते समय गर्दन की नस दबने से अचानक दिल की धड़कन धीमी होना (Bradycardia) या ब्लड प्रेशर गिरना (दवाओं द्वारा तुरंत नियंत्रित)।",
    "नस की आंतरिक परत में खिंचाव या फटना (Dissection)।",
    "अचानक बहुत ज्यादा खून दिमाग में पहुंचने से तेज सिरदर्द या मस्तिष्क में रक्तस्राव (Cerebral Hyperperfusion Syndrome)।",
    "जांघ या कलाई के पंक्चर स्थल पर सूजन या रक्त का थक्का।"
  ],
  "alternativesEn": "Open surgical Carotid Endarterectomy (CEA), or aggressive best medical therapy with dual antiplatelets, high-intensity statin, and strict blood pressure control.",
  "alternativesHi": "गर्दन चीरकर नस खोलने का खुला ऑपरेशन (Carotid Endarterectomy - CEA) अथवा केवल खून पतला करने की अंग्रेजी गोलियां (Aspirin, Clopidogrel, Statins)।",
  "sedationTypeEn": "Local anesthesia with subcutaneous lidocaine infiltration and mild conscious sedation (patient must remain awake and responsive for continuous neurological monitoring).",
  "sedationTypeHi": "गर्दन व पंक्चर स्थल पर स्थानीय सुन्नता (Local Anesthesia); मरीज का होश में रहना अनिवार्य है ताकि दिमाग की सक्रियता की लगातार जांच की जा सके।"
},
  "acute-stroke-mechanical-thrombectomy": {
  "id": "acute-stroke-mechanical-thrombectomy",
  "category": "Carotid & Neurovascular Interventions",
  "nameEn": "Acute Ischemic Stroke Endovascular Mechanical Thrombectomy (ADAPT / Solumbra)",
  "nameHi": "एक्यूट स्ट्रोक मैकेनिकल थ्रोम्बेक्टॉमी (ब्रेन स्ट्रोक / लकवे के तुरंत बाद दिमाग की नस से थक्का खींचना)",
  "indicationEn": "Hyperacute ischemic stroke presenting within 0-24 hours of onset with large vessel occlusion (LVO) involving internal carotid artery, MCA (M1/M2 segment), or basilar artery, with salvageable ischemic penumbra.",
  "indicationHi": "अचानक लकवे का दौरा (Acute Ischemic Stroke) पड़ने के 24 घंटे के भीतर दिमाग की मुख्य नस (ICA, MCA, Basilar Artery) में खून का थक्का जमने से शरीर का एक हिस्सा सुन्न या बेजान होना, मुंह टेढ़ा होना या आवाज चले जाना।",
  "descriptionEn": "Under emergent conditions, a large-bore aspiration catheter and stent-retriever (Solitaire / Trevo) are navigated through the femoral or radial artery directly into the occluded cerebral artery in the brain. The clot is engaged by the stent-retriever and sucked out under continuous vacuum aspiration (Solumbra technique), restoring cerebral perfusion instantly.",
  "descriptionHi": "जांघ या हाथ की नस से एक विशेष कैथेटर और स्टेंट-रीट्रीवर दिमाग की बंद नस तक ले जाया जाता है। वहां फंसे हुए खून के थक्के को पकड़कर हाई-वैक्यूम सक्शन द्वारा बाहर खींच लिया जाता है, जिससे दिमाग में खून का प्रवाह तुरंत दोबारा चालू हो जाता है।",
  "benefitsEn": [
    "Dramatic restoration of cerebral blood flow, preventing permanent brain death and severe lifelong paralysis.",
    "High rate of independent functional recovery (mRS 0-2 at 90 days increased by 2-3 fold compared to medical therapy alone).",
    "Significant reduction in stroke-related mortality and long-term bedridden disability."
  ],
  "benefitsHi": [
    "लकवे के तुरंत बाद दिमाग में खून का प्रवाह बहाल कर मरीज को स्थायी अपंगता या मृत्यु से बचाना।",
    "हाथ-पैर की ताकत और बोलने की क्षमता का तेजी से लौटना (2 से 3 गुना बेहतर रिकवरी)।",
    "जीवन भर बिस्तर पर पड़े रहने की लाचारी से मुक्ति।"
  ],
  "specificRisksEn": [
    "Intracranial hemorrhage (reperfusion parenchymal hematoma or hemorrhagic transformation of ischemic core - 4-6%).",
    "Vascular perforation or arterial dissection of intracranial arteries.",
    "Distal clot embolization into previously unaffected brain territories.",
    "Inability to achieve recanalization (technical failure in 10-15% of tortuous vessels).",
    "Groin access site hematoma or pseudoaneurysm."
  ],
  "specificRisksHi": [
    "मस्तिष्क में खून का रिसाव या ब्लीडिंग (Hemorrhagic Transformation - 4-6% जोखिम)।",
    "दिमाग की नाजुक नस में खिंचाव या छेद होना (Intracranial Perforation)।",
    "थक्के के बारीक टुकड़े दिमाग के अन्य स्वस्थ हिस्सों में चले जाना।",
    "नस के अत्यधिक टेढ़े-मेढ़े होने से प्रक्रिया का असफल होना (10-15%)।",
    "जांघ के पंक्चर स्थल पर रक्तस्राव।"
  ],
  "alternativesEn": "Intravenous thrombolysis with IV alteplase / tenecteplase alone (effective in only 15-30% of large vessel clots), or conservative palliative stroke care.",
  "alternativesHi": "नस द्वारा थक्का गलाने वाला इंजेक्शन (IV r-tPA / Tenecteplase - जो बड़ी नसों में केवल 15-30% सफल होता है) अथवा केवल दवाइयों द्वारा आईसीयू देखभाल।",
  "sedationTypeEn": "Conscious sedation or emergency general endotracheal anesthesia (if patient is uncooperative, agitated, or unable to protect airway).",
  "sedationTypeHi": "हल्की बेहोशी (Conscious Sedation) अथवा सांस की नली डालकर पूर्ण बेहोशी (General Anesthesia) यदि मरीज अत्यधिक बेचैन हो।"
},
  "avm-vascular-malformation-sclerotherapy": {
  "id": "avm-vascular-malformation-sclerotherapy",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Peripheral Arteriovenous Malformation (AVM) / Vascular Malformation Sclerotherapy and Embolization",
  "nameHi": "पेरिफेरल एवीएम एवं वैस्कुलर मॉलफॉर्मेशन स्क्लेरोथेरेपी व एम्बोलाइजेशन (असामान्य नसों के गुच्छे का आधुनिक इलाज)",
  "indicationEn": "Symptomatic high-flow or low-flow vascular malformations (AVM, venous malformations, lymphatic malformations) causing progressive pain, soft tissue hypertrophy, skin ulceration, bleeding, or high-output cardiac strain.",
  "indicationHi": "हाथ, पैर, चेहरे या शरीर के किसी अंग में नसों का जन्मजात विकृत गुच्छा (AVM / Hemangioma / Vascular Malformation), जिससे लगातार दर्द, सूजन, अंग का असामान्य बढ़ना, त्वचा से खून आना या दिल पर दबाव पड़ना।",
  "descriptionEn": "Under fluoroscopic and ultrasound guidance, percutaneous access directly into the malformation nidus or transarterial superselective microcatheterization is performed. Liquid sclerosants (Bleomycin, STS, Absolute Alcohol) or permanent liquid embolic agents (Onyx / Glubran) are delivered precisely to obliterate the vascular nidus while preserving adjacent normal tissue.",
  "descriptionHi": "सोनोग्राफी एवं एक्स-रे की सीधी निगरानी में नसों के असामान्य गुच्छे में सीधे सुई या बारीक कैथेटर डाला जाता है। वहां विशेष दवा (Bleomycin, STS, Absolute Alcohol) अथवा लिक्विड एम्बोलिक (Onyx/Glue) डालकर गुच्छे को सुखाकर स्थायी रूप से बंद कर दिया जाता है।",
  "benefitsEn": [
    "Significant reduction in malformation bulk, stopping recurrent ulcerations and bleeding episodes.",
    "Alleviation of severe ischemic pain and preservation of limb/tissue function without mutilating surgery.",
    "Minimally invasive alternative to high-risk surgical resection associated with catastrophic intraoperative bleeding."
  ],
  "benefitsHi": [
    "बिना कोई बड़ा चीरा लगाए नसों के जटिल व खतरनाक गुच्छे का 80-90% संपूर्ण इलाज।",
    "दर्द, सूजन और त्वचा से खून बहने की समस्या का स्थायी समाधान।",
    "अंग की बनावट व कार्यक्षमता का संरक्षण, अंग विच्छेदन (Amputation) से बचाव।"
  ],
  "specificRisksEn": [
    "Post-procedure localized edema, pain, and inflammatory reaction (managed with short-course steroids and analgesics).",
    "Skin necrosis or superficial ulceration from inadvertent dermal capillary thrombosis.",
    "Non-target embolization into deep venous system or systemic pulmonary circulation.",
    "Need for multiple staged sessions for large, extensive, or infiltrative lesions.",
    "Transient hemoglobinuria or sensory nerve paresthesia."
  ],
  "specificRisksHi": [
    "प्रक्रिया के बाद 3-7 दिन तक अंग में तेज सूजन व दर्द (Post-embolization Swelling)।",
    "दवा के आसपास की त्वचा में जाने से त्वचा पर छाले या कालापन (Skin Necrosis)।",
    "दवा का मुख्य शिराओं द्वारा फेफड़ों में चले जाना (Pulmonary Embolism - बहुत दुर्लभ)।",
    "नसों के गुच्छे की जटिल प्रकृति के कारण भविष्य में अतिरिक्त सत्रों (Staged Sessions) की आवश्यकता।"
  ],
  "alternativesEn": "High-risk open surgical excision (associated with massive hemorrhage and high recurrence), systemic targeted therapy (Sirolimus / Alpelisib), or conservative compression garments.",
  "alternativesHi": "चीर-फाड़ वाला बड़ा ऑपरेशन (जिसमें अत्यधिक जानलेवा रक्तस्राव का जोखिम होता है), नई अंग्रेजी दवाएं (Sirolimus), अथवा कम्प्रेशन गारमेंट्स।",
  "sedationTypeEn": "Local anesthesia with conscious sedation, or general anesthesia for extensive, pediatric, or facial lesions.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ शामक दवा, अथवा बच्चों एवं बड़े गुच्छों के लिए पूर्ण बेहोशी (General Anesthesia)।"
},
  "evar": {
    ...{
  "id": "evar-bifurcated-modular",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Endovascular Abdominal Aortic Aneurysm Repair (EVAR) with Modular Bifurcated Stent-Graft System",
  "nameHi": "एंडोवैस्कुलर एब्डॉमिनल एओर्टिक एन्यूरिज्म रिपेयर (इवार / पेट की महाधमनी में स्टेंट ग्राफ्ट लगाना)",
  "indicationEn": "Infrarenal abdominal aortic aneurysm (AAA) with maximal diameter >= 5.5 cm in males or >= 5.0 cm in females; Rapidly expanding infrarenal AAA (growth rate > 1.0 cm/year or > 0.5 cm in 6 months); Symptomatic non-ruptured infrarenal AAA (back, flank, or abdominal pain attributable to aneurysm expansion); Saccular infrarenal or juxtarenal aortic aneurysm regardless of diameter due to high rupture risk",
  "indicationHi": "पेट की मुख्य महाधमनी (इन्फ्रारेनल एओर्टा) का आकार 5.0-5.5 सेमी से अधिक फूल जाना अथवा फटने के उच्च जोखिम वाला एन्यूरिज्म।",
  "descriptionEn": "Bilateral common femoral artery access obtained under real-time ultrasound guidance and pre-closed using dual Perclose ProStyle devices deployed at 10 and 2 o'clock orientations. Systemic anticoagulation initiated with intravenous unfractionated heparin (70-100 IU/kg) targeting an activated clotting time (ACT) of 250-300 seconds throughout the procedure. Bilateral retrograde insertion of 5F sheaths, exchange over stiff wires for 18F/20F DrySeal sheaths, and positioning of a 5F calibrated marker pigtail catheter in the upper abdominal aorta. Abdominal aortography performed in LAO/cranial or dedicated neck-perpendicular projection to delineate the lowest renal artery origin (landing zone 3) and aortic bifurcation.",
  "descriptionHi": "दोनों जांघों की नसों (फेमोरल धमनियों) में बिना बड़ा चीरा लगाए एक्स-रे (फ्लुओरोस्कोपी) की निगरानी में एक विशेष दो मुंहा आवरणयुक्त धातु का स्टेंट-ग्राफ्ट महाधमनी के अंदर स्थापित किया जाता है, जिससे रक्त का बहाव कमजोर नस से हटकर सीधे स्टेंट से होने लगता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of endovascular abdominal aortic aneurysm repair (evar) with modular bifurcated stent-graft system without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "पेट की महाधमनी फटने के 80-90% जानलेवा खतरे से संपूर्ण बचाव।",
    "बिना पेट का बड़ा चीरा लगाए (ओपन सर्जरी रहित) न्यूनतम रक्तस्राव एवं सुरक्षित उपचार।",
    "अस्पताल में मात्र 2-3 दिन का ठहराव एवं 1-2 सप्ताह में सामान्य दिनचर्या में वापसी।"
  ],
  "specificRisksEn": [
    "Type IA / IB endoleak (proximal or distal seal failure risking persistent aneurysm pressurization)",
    "Accidental coverage or dissection of renal artery ostia requiring emergency renal stenting or fenestration",
    "Iliac limb thrombosis or graft kinking causing acute lower limb ischemia",
    "Access vessel rupture, dissection, or retroperitoneal hematoma from large-bore sheath manipulation",
    "Post-implantation syndrome (systemic inflammatory response with pyrexia and elevated CRP)",
    "Distal microembolization / trash foot syndrome"
  ],
  "specificRisksHi": [
    "एंडोलीक (Endoleak): स्टेंट के किनारे या शाखाओं से थैली में खून का रिसाव जारी रहना (10-15%), जिसकी आगे निगरानी या अतिरिक्त कोइलिंग की आवश्यकता हो सकती है।",
    "गुर्दे की धमनियों (Renal Arteries) के मुहाने पर प्रभाव, जिससे गुर्दे की कार्यक्षमता में गिरावट हो सकती है।",
    "स्टेंट की पैर वाली शाखा में खून का थक्का जमना (Iliac Limb Thrombosis) जिससे पैर में खून की कमी हो सकती है।",
    "जांघ की नस में चोट, हेमेटोमा अथवा स्यूडोएन्यूरिज्म बनना।",
    "पोस्ट-इम्प्लांटेशन सिंड्रोम (प्रक्रिया के बाद 2-3 दिन तक हल्का बुखार एवं शरीर में सूजन के लक्षण)।"
  ],
  "alternativesEn": "Open surgical aortic repair with synthetic graft replacement, or conservative medical management with strict anti-impulse blood pressure control.",
  "alternativesHi": "पेट का बड़ा खुला ऑपरेशन (Open Surgical Aortic Repair with Dacron Graft) अथवा रक्तचाप नियंत्रित कर केवल नियमित निगरानी रखना (Watchful Waiting)।",
  "sedationTypeEn": "Regional spinal anesthesia or monitored conscious sedation with local anesthesia.",
  "sedationTypeHi": "रीढ़ की हड्डी में सुन्नता का इंजेक्शन (Spinal Anesthesia) अथवा पूर्ण बेहोशी (General Anesthesia)।"
},
    id: "evar"
  },
  "tevar": {
    ...{
  "id": "tevar-thoracic-aneurysm",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aortic Aneurysm with Landing Zone Optimization",
  "nameHi": "थोरेसिक एंडोवैस्कुलर एओर्टिक रिपेयर (टेवार / छाती की महाधमनी में स्टेंट-ग्राफ्ट लगाना)",
  "indicationEn": "Descending thoracic aortic aneurysm (DTAA) with maximum diameter >= 5.5 cm in low-risk surgical patients or >= 6.0 cm in high-risk patients; Rapid thoracic aneurysm expansion (> 5 mm within 6 months or > 10 mm per year); Saccular aneurysm or penetrating atherosclerotic ulcer (PAU) of descending thoracic aorta with high risk of transmural rupture; Symptomatic thoracic aortic aneurysm with chest or intrascapular back pain",
  "indicationHi": "छाती की अवरोही महाधमनी (Descending Thoracic Aorta) का 5.5-6.0 सेमी से अधिक फूल जाना, तेजी से बढ़ना अथवा फटने का आसन्न जोखिम।",
  "descriptionEn": "General anesthesia with continuous arterial line monitoring in both right and left radial arteries to detect accidental left subclavian artery compromise. Active CSF drainage initialized with intracranial/intrathecal pressure transducer maintained at <= 10-12 mmHg. Ultrasound-guided retrograde puncture of unilateral common femoral artery with pre-closure using two Perclose ProStyle devices; secondary 5F femoral or radial access for diagnostic pigtail. Full heparinization administered to achieve target ACT >= 250-300 seconds.",
  "descriptionHi": "जांघ की धमनी के माध्यम से एक्स-रे व दिल की धड़कन को नियंत्रित करते हुए छाती की महाधमनी में एक विशेष लचीला आवरणयुक्त स्टेंट-ग्राफ्ट पहुंचाया जाता है और फूले हुए हिस्से पर खोलकर महाधमनी की दीवार को सुरक्षित किया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of thoracic endovascular aortic repair (tevar) for descending thoracic aortic aneurysm with landing zone optimization without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "छाती की महाधमनी फटने के अत्यंत जानलेवा जोखिम से तुरंत जीवन रक्षा।",
    "छाती को पूरी तरह खोलने (Thoracotomy) और हार्ट-लंग मशीन के गंभीर खतरों से बचाव।",
    "आईसीयू और अस्पताल में बहुत कम समय का ठहराव।"
  ],
  "specificRisksEn": [
    "Spinal cord ischemia resulting in paraplegia or paraparesis (incidence 2-8%)",
    "Stroke / Cerebrovascular accident secondary to arch wire manipulation or branch coverage",
    "Type IA endoleak (proximal gutter or inadequate landing zone seal)",
    "Retrograde Type A aortic dissection triggered by balloon molding or bare stent edge trauma",
    "Access artery disruption or retroperitoneal hemorrhage",
    "Aortoesophageal or aortobronchial fistulization (late complication in large saccular/infective aneurysms)"
  ],
  "specificRisksHi": [
    "रीढ़ की हड्डी में खून की आपूर्ति कम होने से दोनों पैरों में कमजोरी या पक्षाघात (Spinal Cord Ischemia / Paraplegia - 2-6% जोखिम)।",
    "मस्तिष्क में खून की नस में थक्का जाने से स्ट्रोक (Stroke / पक्षाघात - 2-4% जोखिम)।",
    "प्रॉक्सिमल एंडोलीक (Type IA Endoleak - स्टेंट के ऊपरी किनारे से रिसाव)।",
    "रिट्रोग्रेड टाइप ए डिसेक्शन (महाधमनी की उल्टी दिशा में परत फटना)।",
    "बाएं हाथ की नस (Left Subclavian Artery) ढकने की स्थिति में बाएं हाथ में कमजोरी या चक्कर आना।"
  ],
  "alternativesEn": "Open surgical aortic repair with synthetic graft replacement, or conservative medical management with strict anti-impulse blood pressure control.",
  "alternativesHi": "छाती का बड़ा ऑपरेशन (Open Thoracoabdominal Aortic Repair) अथवा केवल गहन रक्तचाप नियंत्रण।",
  "sedationTypeEn": "General endotracheal anesthesia with continuous arterial blood pressure and invasive monitoring.",
  "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) सांस की नली (Endotracheal tube) एवं दोनों हाथों में धमनी लाइन के साथ।"
},
    id: "tevar"
  },
  "fevar": {
    ...{
  "id": "fevar-bevar-juxtarenal-thoracoabdominal",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Fenestrated / Branched Endovascular Aortic Repair (FEVAR / BEVAR) for Juxtarenal and Thoracoabdominal Aneurysms",
  "nameHi": "फेनेस्ट्रेटेड / ब्रांक्ड एंडोवैस्कुलर एओर्टिक रिपेयर (फेवार / बेवार - गुर्दे व आंतों की शाखाओं वाला विशेष स्टेंट)",
  "indicationEn": "Juxtarenal, pararenal, or Crawford Extent I-IV thoracoabdominal aortic aneurysms (TAAA) with insufficient non-aneurysmal neck length (< 10 mm); Severe infrarenal neck angulation (> 60 degrees) or reverse taper neck precluding standard infrarenal EVAR in patients unfit for open surgery; Post-dissection thoracoabdominal aneurysm expansion >= 5.5-6.0 cm",
  "indicationHi": "गुर्दे व आंतों की नसों के पास (Juxtarenal/Pararenal) अथवा थोरेको-एब्डॉमिनल महाधमनी का विशाल एन्यूरिज्म, जहां सामान्य स्टेंट लगाने की जगह न हो।",
  "descriptionEn": "General endotracheal anesthesia, continuous CSF drainage monitoring, and systemic anticoagulation titrated to maintain ACT > 250-300 seconds. Surgical cutdown or percutaneous ultrasound-guided access to bilateral common femoral arteries and left axillary / brachial artery. Marker pigtail angiogram to map visceral takeoff levels under fluoroscopic roadmapping. Advancement and deployment of the main fenestrated/branched aortic endograft over a Lunderquist stiff wire, meticulously aligning fenestrations/cuffs with celiac, SMA, and right/left renal ostia.",
  "descriptionHi": "यह विश्व की सबसे उन्नत एंडोवैस्कुलर तकनीकों में से एक है। मरीज के शरीर की 3D सीटी स्कैन मैपिंग के आधार पर विशेष खिड़कियों (Fenestrations) अथवा शाखाओं (Branches) वाला स्टेंट महाधमनी में लगाया जाता है, और प्रत्येक खिड़की से गुर्दे व आंतों की नसों में छोटे आवरणयुक्त स्टेंट जोड़कर खून का बहाव अक्षुण्ण रखा जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of fenestrated / branched endovascular aortic repair (fevar / bevar) for juxtarenal and thoracoabdominal aneurysms without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "गुर्दे, आंतें और लिवर को सुरक्षित रखते हुए जटिलतम एन्यूरिज्म का पूर्ण उपचार।",
    "छाती व पेट को एक साथ खोलने वाली अत्यंत भयानक ओपन सर्जरी (Thoracoabdominal Aneurysm Repair) से बचाव।",
    "शारीरिक रूप से कमजोर व बुजुर्ग मरीजों के लिए सुरक्षित विकल्प।"
  ],
  "specificRisksEn": [
    "Target visceral vessel occlusion or dissection (loss of kidney or bowel infarction)",
    "Spinal cord ischemia and permanent paraplegia (5-10% in extensive TAAA repairs)",
    "Type IIIC endoleak (bridging stent-graft connection leak or disconnection)",
    "Stroke / upper extremity neurological deficits from axillary/brachial manipulation",
    "Acute tubular necrosis or contrast-induced nephropathy"
  ],
  "specificRisksHi": [
    "गुर्दे या आंतों की नस में स्टेंट बंद होना या फटना (Loss of target renal/visceral branch), जिससे डायलिसिस या आंतों के ऑपरेशन की जरूरत पड़ सकती है।",
    "रीढ़ की हड्डी पर असर से पैरों में स्थायी पक्षाघात (Spinal Cord Ischemia / Paraplegia - 5-10% जोखिम)।",
    "शाखाओं के जोड़ों से रक्त रिसाव (Type IIIC Gutter Endoleak)।",
    "हाथ या गर्दन की नसों में तार डालने से स्ट्रोक या हाथ में तंत्रिका क्षति।",
    "कंट्रास्ट डाई से गुर्दे की कार्यक्षमता में गिरावट (Contrast-Induced AKI)।"
  ],
  "alternativesEn": "Open surgical aortic repair with synthetic graft replacement, or conservative medical management with strict anti-impulse blood pressure control.",
  "alternativesHi": "ओपन थोरेको-एब्डॉमिनल एन्यूरिज्म सर्जरी (अत्यंत उच्च मृत्यु दर 15-25%) अथवा केवल दर्द निवारक/पैलिएटिव देखभाल।",
  "sedationTypeEn": "General endotracheal anesthesia with continuous arterial blood pressure and invasive monitoring.",
  "sedationTypeHi": "पूर्ण बेहोशी (General Endotracheal Anesthesia) निरंतर इनवेसिव धमनी व केंद्रीय शिरा मॉनिटरिंग के साथ।"
},
    id: "fevar"
  },
  "chevar": {
    ...{
  "id": "chevar-parallel-grafts",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Chimney / Snorkel EVAR (ChEVAR) with Parallel Renal and Visceral Covered Stents",
  "nameHi": "चिमनी / स्नोर्कल इवार (ChEVAR - गुर्दे की नसों के समानांतर स्टेंट लगाकर महाधमनी रिपेयर)",
  "indicationEn": "Juxtarenal, pararenal, or short-neck (< 10 mm) infrarenal abdominal aortic aneurysms in emergency or emergent settings where custom fenestrated grafts are unavailable; Hostile infrarenal neck (severe conical shape, thrombus lining, angulation > 60 degrees) precluding standard EVAR in patients unfit for open clamp repair; Rescue bail-out during EVAR for accidental coverage of a renal artery ostium",
  "indicationHi": "गुर्दे की नसों के अत्यंत समीप का एन्यूरिज्म (Short Neck < 10 mm) जहां आपातकालीन स्थिति में कस्टम फेनेस्ट्रेटेड स्टेंट उपलब्ध न हो या ओपन सर्जरी संभव न हो।",
  "descriptionEn": "Establish bilateral common femoral artery access and left axillary (or left brachial) artery access under ultrasound guidance. Administer weight-adjusted heparin to achieve ACT >= 250-300 seconds throughout intervention. From the upper extremity access, navigate 6F/7F long guiding sheaths (90 cm) into the abdominal aorta; selectively cannulate target renal arteries (and/or SMA) with angled catheters and support wires. Park balloon-expandable covered stents (e.g., Viabahn VBX or Advanta V12) well within the target renal arteries with proximal stent segments extending 10-15 mm above the planned proximal edge of the aortic endograft.",
  "descriptionHi": "हाथ की नस (Axillary/Brachial Artery) से गुर्दे की नसों में समानांतर स्टेंट (चिमनी स्टेंट) डाले जाते हैं तथा जांघ से महाधमनी का मुख्य स्टेंट डाला जाता है। दोनों को एक साथ खोलकर गुर्दे की नसों को चालू रखते हुए महाधमनी के एन्यूरिज्म को सुरक्षित सील किया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of chimney / snorkel evar (chevar) with parallel renal and visceral covered stents without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "बिना हफ्तों तक कस्टम स्टेंट का इंतजार किए तुरंत उपलब्ध ऑफ-द-शेल्फ उपकरणों से जटिल एन्यूरिज्म का इलाज।",
    "गुर्दे की नसों को सुरक्षित बचाते हुए महाधमनी फटने के खतरे से मुक्ति।",
    "ओपन सर्जरी के अयोग्य मरीजों के लिए जीवन रक्षक मिनिमली इनवेसिव विकल्प।"
  ],
  "specificRisksEn": [
    "Type IA gutter endoleak (persistent channel between aortic wall, aortic endograft, and parallel chimney grafts)",
    "Chimney covered stent compression, kink, or thrombosis leading to acute renal infarction",
    "Stroke, brachial plexus injury, or upper extremity arterial thrombosis from axillary access",
    "Aortic wall rupture from aggressive simultaneous kissing post-dilation",
    "Distal microembolization"
  ],
  "specificRisksHi": [
    "गटर एंडोलीक (Type IA Gutter Endoleak - समानांतर स्टेंटों के बीच की खाली जगह से खून का रिसाव 5-15%)।",
    "चिमनी स्टेंट का दबना या बंद होना, जिससे गुर्दे में खून की कमी हो सकती है।",
    "हाथ की नस के रास्ते तार जाने से स्ट्रोक अथवा हाथ की तंत्रिका (Brachial Plexus) पर दबाव।",
    "अत्यधिक बैलून फुलाने से महाधमनी की दीवार में चोट।",
    "जांघ या हाथ के पंक्चर स्थल पर खून का थक्का जमना।"
  ],
  "alternativesEn": "Open surgical aortic repair with synthetic graft replacement, or conservative medical management with strict anti-impulse blood pressure control.",
  "alternativesHi": "ओपन क्लैम्प एओर्टिक सर्जरी, फेनेस्ट्रेटेड स्टेंट-ग्राफ्ट (FEVAR), अथवा केवल दवाइयों द्वारा रक्तचाप नियंत्रण।",
  "sedationTypeEn": "Regional spinal anesthesia or monitored conscious sedation with local anesthesia.",
  "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा डीप मॉनिटर्ड एनेस्थीसिया केयर (MAC)।"
},
    id: "chevar"
  },
  "pevar": {
    ...{
  "id": "pevar-percutaneous-preclose",
  "category": "Aortic & Peripheral Arterial Interventions",
  "nameEn": "Percutaneous EVAR (PEVAR) with Totally Percutaneous Pre-Close Suture Technique",
  "nameHi": "परक्यूटेनियस इवार (PEVAR - बिना जांघ काटे टांके वाली सुई द्वारा स्टेंट ग्राफ्ट लगाना)",
  "indicationEn": "Elective or urgent EVAR candidates meeting anatomical criteria for endovascular repair who prefer minimally invasive totally percutaneous access without surgical groin cutdown; Obese patients with deep inguinal creases where surgical exposure carries high surgical site infection (SSI) or lymphocele risk; Fast-track day-surgery / early ambulation endovascular aortic repair protocols",
  "indicationHi": "पेट की महाधमनी का एन्यूरिज्म (AAA) जिसमें जांघ पर चीरा लगाए बिना केवल सुई के छेद द्वारा स्टेंट डालना प्रस्तावित हो।",
  "descriptionEn": "Real-time high-resolution ultrasound mapping of bilateral common femoral arteries; identify femoral head landmark on fluoroscopy and ensure puncture is well above the CFA bifurcation and below the inguinal ligament. Micropuncture 21G needle cannulation of the anterior wall of CFA; confirm pulsatile arterial backflow and insert 0.018\" wire followed by 4F transitional dilator. Perform femoral angiogram via 4F dilator to confirm optimal mid-CFA anterior wall puncture location without local dissection. Exchange 0.018\" wire for a standard 0.035\" J-wire. Insert first Perclose ProStyle device rotated to 10 o'clock position; deploy needles, retrieve sutures, and secure suture tails with mosquito clamp without tying knot.",
  "descriptionHi": "सोनोग्राफी की मदद से जांघ की मुख्य धमनी में केवल सुई चुभोकर विशेष टांके लगाने वाले यंत्र (Perclose ProStyle) पहले से स्थापित किए जाते हैं। इसके बाद स्टेंट डालकर प्रक्रिया पूर्ण होने पर बाहर से ही धागा खींचकर नस का छेद पूर्णतः सील कर दिया जाता है, जिससे कोई सर्जिकल चीरा नहीं लगता।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of percutaneous evar (pevar) with totally percutaneous pre-close suture technique without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "जांघ पर कोई सर्जिकल चीरा या बड़ा घाव नहीं, संक्रमण और लिम्फोसील (पानी भरने) का शून्य खतरा।",
    "प्रक्रिया के कुछ ही घंटों बाद मरीज अपने पैरों पर चल-फिर सकता है (Early Ambulation)।",
    "अस्पताल से अगले ही दिन शीघ्र छुट्टी और न्यूनतम दर्द।"
  ],
  "specificRisksEn": [
    "Pre-close failure requiring emergency surgical cutdown or bailout covered stent placement",
    "Iatrogenic CFA lumen narrowing / stenosis from overly aggressive suture cinching",
    "Femoral pseudoaneurysm, groin hematoma, or retroperitoneal bleeding",
    "Dissection of external iliac or common femoral artery",
    "Distal arterial thrombosis"
  ],
  "specificRisksHi": [
    "परक्लोज़ उपकरण द्वारा नस न सिल पाना (Pre-close failure - 2-5%), जिसके लिए आपातकालीन छोटा सर्जिकल चीरा लगाना पड़ सकता है।",
    "जांघ की नस के मुहाने पर सिकुड़न (Femoral Artery Stenosis) आना।",
    "जांघ के अंदर खून का रिसाव, हेमेटोमा या स्यूडोएन्यूरिज्म बनना।",
    "इवार प्रक्रिया से जुड़े मानक जोखिम (एंडोलीक, स्टेंट की शाखा बंद होना)।"
  ],
  "alternativesEn": "Open surgical aortic repair with synthetic graft replacement, or conservative medical management with strict anti-impulse blood pressure control.",
  "alternativesHi": "पारंपरिक सर्जिकल कटडाउन द्वारा जांघ की नस खोलकर इवार करना अथवा ओपन एओर्टिक सर्जरी।",
  "sedationTypeEn": "Regional spinal anesthesia or monitored conscious sedation with local anesthesia.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवाइयां (Conscious Sedation) अथवा स्पाइनल एनेस्थीसिया।"
},
    id: "pevar"
  },
  "bae": {
    ...{
  "id": "bae-massive-hemoptysis",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Bronchial Artery Embolization (BAE) for Massive Hemoptysis",
  "nameHi": "ब्रोंकियल आर्टीरियल एम्बोलाइजेशन (बीएई / फेफड़े से खून की उल्टी रोकने हेतु नस बंदी)",
  "indicationEn": "Life-threatening massive hemoptysis (>300-600 mL/24h or >100 mL/h with respiratory compromise); Submassive hemoptysis refractory to conservative / anti-fibrinolytic therapy; Underlying pulmonary tuberculosis, post-tubercular bronchiectasis, aspergilloma, or cavitary lung disease",
  "indicationHi": "खांसी में जानलेवा भारी खून आना (Massive Hemoptysis > 300-600 mL/24h), टीबी (Tuberculosis), ब्रोन्किइक्टेसिस, फंगस बॉल (Aspergilloma) या फेफड़े के कैंसर के कारण।",
  "descriptionEn": "Ultrasound-guided retrograde right common femoral artery puncture; insertion of 5F vascular sheath. Descending thoracic aortography (pigtail catheter at T4-T6 level) in AP and shallow LAO/RAO views to identify origin of bronchial arteries. Selective bronchial artery cannulation with 5F Mikaelson or Cobra catheter. High-resolution DSA to evaluate hypertrophy, tortuosity, parenchymal hypervascularity, shunts, and meticulously check for the anterior spinal artery (Artery of Adamkiewicz / hairpin loop).",
  "descriptionHi": "जांघ की नस से एक सूक्ष्म कैथेटर फेफड़ों को खून पहुंचाने वाली असामान्य ब्रोंकियल धमनियों में ले जाया जाता है। अत्यधिक सावधानी से रीढ़ की हड्डी की नस (Adamkiewicz Artery) की जांच के बाद विशेष सूक्ष्म कणों (PVA Particles) या छल्लों (Microcoils) द्वारा खून बहाने वाली नस को बंद कर दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of bronchial artery embolization (bae) for massive hemoptysis without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "खांसी में खून आने की जानलेवा आपातकालीन स्थिति में 85-95% तुरंत स्थायी रोक।",
    "गंभीर व नाजुक स्थिति में फेफड़े का बड़ा व खतरनाक ऑपरेशन (Lobectomy) करने से बचाव।",
    "स्वस्थ फेफड़े को नुकसान पहुंचाए बिना केवल खून बहने वाली नस का सटीक उपचार।"
  ],
  "specificRisksEn": [
    "Spinal cord ischemia / anterior spinal artery embolization causing transverse myelitis / paraplegia (<1%)",
    "Transitory retrosternal / intercostal chest pain and dysphagia",
    "Bronchial wall / esophageal necrosis",
    "Non-target embolization to systemic circulation (stroke, limb ischemia) via pulmonary venous shunts"
  ],
  "specificRisksHi": [
    "रीढ़ की हड्डी की नस (Anterior Spinal Artery) में गलती से कण चले जाने पर दोनों पैरों में पक्षाघात (Paralysis / Paraplegia - < 1% अत्यंत दुर्लभ लेकिन गंभीर)।",
    "छाती में दर्द, सीने में भारीपन व हल्का बुखार (24-48 घंटे तक)।",
    "खाना निगलने में अस्थायी दर्द/कठिनाई (भोजन नली की शाखाओं के कारण)।",
    "भविष्य में नई नसें बनने से दोबारा खून आना (10-20% संभावना)।"
  ],
  "alternativesEn": "Open surgical intervention, conservative pharmacotherapy, or supportive clinical monitoring.",
  "alternativesHi": "दवाइयां (Tranexamic acid, कफ सिरप), ब्रोंकोस्कोपी द्वारा बैलून लगाना, अथवा फेफड़े का सर्जिकल ऑपरेशन (Lobectomy)।",
  "sedationTypeEn": "Regional spinal anesthesia or monitored conscious sedation with local anesthesia.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवाइयां (Conscious Sedation)।"
},
    id: "bae"
  },
  "uae": {
    ...{
  "id": "uae-primary-pph-gelfoam",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Uterine Artery Embolization (UAE) for Primary Postpartum Hemorrhage (PPH) with Gelfoam Slurry",
  "nameHi": "प्रसव के बाद भारी रक्तस्राव पर बच्चेदानी की नस बंदी (PPH UAE - प्रसूता की जान व बच्चेदानी बचाना)",
  "indicationEn": "Severe primary postpartum hemorrhage refractory to uterotonic agents (Oxytocin, Ergometrine, Carboprost, Misoprostol) and uterine balloon tamponade (Bakri balloon); Persistent bleeding from uterine atony, genital tract lacerations, or coagulopathy post-vaginal or cesarean delivery; Desire to avoid emergent peripartum hysterectomy and preserve future fertility in hemodynamically stabilized patient",
  "indicationHi": "डिलीवरी या सिजेरियन के बाद बच्चेदानी से अत्यधिक जानलेवा रक्तस्राव (Primary Postpartum Hemorrhage), जो दवाइयों या मसाज से न रुक रहा हो।",
  "descriptionEn": "Bilateral or unilateral right common femoral artery puncture under ultrasound; 5F sheath placement. Non-selective pelvic DSA using a pigtail/flush catheter to assess uterine enlargement and identify active extravasation or pseudoaneurysm. Selective catheterization of the contralateral internal iliac artery and anterior division using a 5F Roberts Uterine Catheter (RUC) or Cobra C2. Superselective cannulation of the ascending uterine artery with a 2.7F microcatheter, placing the tip beyond the cervicovaginal branch.",
  "descriptionHi": "जांघ की नस से आपातकालीन कैथेटर बच्चेदानी को खून देने वाली दोनों यूटेराइन धमनियों में डाला जाता है। वहां विशेष अवशोष्य जेलफोम (Gelfoam Slurry) छोड़ी जाती है, जो रक्तस्राव तुरंत बंद कर देती है और कुछ हफ्तों में स्वतः घुल जाती है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of uterine artery embolization (uae) for primary postpartum hemorrhage (pph) with gelfoam slurry without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "अत्यधिक रक्तस्राव से प्रसूता की तत्काल जीवन रक्षा।",
    "बच्चेदानी को काटकर बाहर निकालने (Emergency Hysterectomy) से 90-95% बचाव।",
    "भविष्य में पुनः मां बनने की क्षमता (Fertility Preservation) का संरक्षण।"
  ],
  "specificRisksEn": [
    "Transient pelvic pain, fever, and leukocytosis (post-embolization syndrome)",
    "Endometritis / pelvic infection",
    "Uterine necrosis (extremely rare with temporary Gelfoam slurry)",
    "Groin puncture site hematoma or pseudoaneurysm"
  ],
  "specificRisksHi": [
    "रक्तस्राव जारी रहना जिसके कारण अंतिम विकल्प के रूप में बच्चेदानी निकालनी पड़े।",
    "प्रक्रिया के बाद पेडू में दर्द या ऐंठन।",
    "हल्का बुखार या योनि स्राव।",
    "जांघ में हेमेटोमा।"
  ],
  "alternativesEn": "Emergency exploratory laparotomy with open surgical ligation, packing, or organ resection, with blood product resuscitation.",
  "alternativesHi": "आपातकालीन ऑपरेशन द्वारा बच्चेदानी निकालना (Emergency Peripartum Hysterectomy) अथवा यूटेराइन पैकिंग।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ आईवी दर्द निवारक व शामक दवा।"
},
    id: "uae"
  },
  "ufe": {
    ...{
  "id": "ufe-uterine-fibroids-microspheres",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Uterine Fibroid Embolization (UFE) using Calibrated Microspheres (500-700 / 700-900 um)",
  "nameHi": "बच्चेदानी की रसौली की नस बंदी (Uterine Fibroid Embolization - UFE / बिना ऑपरेशन रसौली का इलाज)",
  "indicationEn": "Symptomatic uterine leiomyomas (heavy menstrual bleeding, pelvic bulk pain, urinary frequency); Desire for uterine preservation and avoidance of hysterectomy or myomectomy; Failed or refused hormonal medical management (progestins, GnRH analogues)",
  "indicationHi": "बच्चेदानी में रसौली (Fibroids) के कारण अत्यधिक व दर्दनाक माहवारी, खून की भारी कमी (Anemia), पेट में भारीपन या बार-बार पेशाब आना।",
  "descriptionEn": "Right common femoral or left radial artery access under ultrasound; 5F sheath placement. Pelvic aortography (optional) followed by selective catheterization of the contralateral internal iliac artery using a 5F Roberts Uterine Catheter. Superselective cannulation of the horizontal segment of the uterine artery using a 2.4F/2.7F microcatheter, positioned well distal to the cervicovaginal branch to prevent vaginal necrosis. DSA showing characteristic hypervascular fibroid blush (\"corymb of vessels\"). Check for utero-ovarian anastomoses.",
  "descriptionHi": "जांघ या कलाई की नस में एक छोटे से सुई के छेद द्वारा दोनों यूटेराइन धमनियों में माइक्रोकैथेटर पहुंचाया जाता है। वहां विशेष कैलिब्रेटेड माइक्रोस्फीयर कण (500-700 / 700-900 um) छोड़े जाते हैं, जो रसौली को मिलने वाला खून बंद कर देते हैं। रसौली धीरे-धीरे सूखकर सिकुड़ जाती है और बच्चेदानी सुरक्षित बच जाती है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of uterine fibroid embolization (ufe) using calibrated microspheres (500-700 / 700-900 um) without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "बिना बच्चेदानी निकाले (Uterus Preservation) रसौली का 100% संपूर्ण व स्थायी इलाज।",
    "पेट पर कोई बड़ा चीरा या टांका नहीं, कोई निशान नहीं।",
    "माहवारी में अत्यधिक रक्तस्राव से 90% महिलाओं को तुरंत स्थायी राहत।",
    "अस्पताल में केवल 24 घंटे का ठहराव और 1 सप्ताह में काम पर वापसी।"
  ],
  "specificRisksEn": [
    "Post-Embolization Syndrome (severe pelvic cramping, low-grade fever, nausea)",
    "Vaginal expulsion of necrotic submucosal fibroid (transcervical sloughing)",
    "Premature ovarian failure / transient amenorrhea (<1-2% under age 40; up to 8% >45 yrs)",
    "Inadvertent non-target embolization to ovaries or bladder"
  ],
  "specificRisksHi": [
    "प्रक्रिया के बाद 12 से 24 घंटे तक पेडू में तेज मरोड़/दर्द और उल्टी (Post-Embolization Syndrome - दवाओं द्वारा नियंत्रित)।",
    "हल्का बुखार और कुछ हफ्तों तक योनि से स्राव अथवा मृत रसौली के टुकड़ों का निकलना।",
    "अंडकोष (Ovary) पर प्रभाव से माहवारी का समय से पहले बंद होना (45 वर्ष से अधिक उम्र में 1-5%)।",
    "बच्चेदानी में संक्रमण (Endometritis - < 1%)।"
  ],
  "alternativesEn": "Total or subtotal abdominal/laparoscopic hysterectomy, myomectomy, or medical hormonal therapy.",
  "alternativesHi": "बच्चेदानी निकालने का ऑपरेशन (Hysterectomy), दूरबीन द्वारा केवल रसौली निकालना (Myomectomy), अथवा हार्मोनल दवाइयां।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ आईवी दर्द निवारक (PCA) एवं शामक दवाइयां।"
},
    id: "ufe"
  },
  "pae": {
    ...{
  "id": "pae-bph-microspheres",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Prostatic Artery Embolization (PAE) for Symptomatic BPH using 300-500 um Microspheres",
  "nameHi": "प्रोस्टेट धमनी एम्बोलाइजेशन (PAE - बिना चीरे या पेशाब की नली काटे गदूद का आधुनिक इलाज)",
  "indicationEn": "Moderate-to-severe lower urinary tract symptoms (LUTS) secondary to BPH (IPSS > 18, QoL score >= 3, Qmax < 12 mL/s); Prostate gland enlargement > 40-50 cc (particularly beneficial in large glands > 80-100 cc where TURP has high morbidity); Refractory urinary retention with catheter dependence, or patients unfit / unwilling for transurethral resection (TURP) / enucleation (HoLEP)",
  "indicationHi": "उम्र बढ़ने के कारण प्रोस्टेट ग्रंथि (गदूद - BPH) का बढ़ जाना, जिससे पेशाब रुक-रुक कर आना, रात में बार-बार उठना, पेशाब में रुकावट या बार-बार कैथेटर लगना।",
  "descriptionEn": "Retrograde right common femoral artery or left transradial artery access; insertion of 5F hydrophilic sheath. Crossover into contralateral internal iliac artery; perform 3D Cone Beam CT (CBCT) with non-ionic contrast injection in shallow ipsilateral oblique (30-35 deg) with caudal angulation (10 deg). Identify the origin of the prostatic artery (PA): type I (anterior division), type II (superior vesical), type III (obturator), or type IV (internal pudendal). Superselective cannulation of the 1-1.5 mm prostatic artery using a 1.9F/2.0F microcatheter over a 0.014\" microwire under roadmap guidance.",
  "descriptionHi": "जांघ या कलाई की नस से 1 मिमी से भी पतले माइक्रोकैथेटर द्वारा प्रोस्टेट ग्रंथि को खून देने वाली दोनों प्रोस्टेटिक धमनियों में सूक्ष्म कण (300-500 um Microspheres) छोड़े जाते हैं। गदूद को खून मिलना बंद होने से वह सूखकर सिकुड़ जाता है और पेशाब का रास्ता खुल जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of prostatic artery embolization (pae) for symptomatic bph using 300-500 um microspheres without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "पेशाब के रास्ते दूरबीन या ब्लेड से प्रोस्टेट काटने (TURP Surgery) से शत-प्रतिशत बचाव।",
    "पेशाब का स्वतः स्वाभाविक नियंत्रण और धार में भारी सुधार।",
    "यौन दुर्बलता (Erectile Dysfunction) या वीर्य के उल्टे बहने (Retrograde Ejaculation) का शून्य खतरा।",
    "डे-केयर प्रक्रिया: 24 घंटे में छुट्टी और दर्द रहित रिकवरी।"
  ],
  "specificRisksEn": [
    "Non-target embolization causing ischemic rectal ulceration or ischemic cystitis / bladder wall necrosis",
    "Transient dysuria, hematuria, or perineal discomfort (post-PAE syndrome in 10-20%)",
    "Transient acute urinary retention requiring catheter placement for 3-7 days",
    "Balanitis or penile skin ischemic breakdown (if internal pudendal collateral reflux)"
  ],
  "specificRisksHi": [
    "दवा का पेशाब की थैली (Bladder) या मलाशय की नसों में चले जाना (Non-target Embolization - < 1-2%)।",
    "प्रक्रिया के बाद 2-3 दिन तक पेशाब में जलन, बार-बार हाजत या हल्का दर्द (Post-PAE Symptoms)।",
    "अस्थायी रूप से कुछ दिनों हेतु कैथेटर की आवश्यकता पड़ना।",
    "पेशाब में हल्का खून आना।"
  ],
  "alternativesEn": "Transurethral resection of the prostate (TURP), robotic/open prostatectomy, or medical therapy with alpha-blockers.",
  "alternativesHi": "पेशाब के रास्ते दूरबीन का ऑपरेशन (TURP / Laser Prostatectomy), दवाइयां (Tamsulosin, Finasteride), अथवा परमानेंट कैथेटर।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवा।"
},
    id: "pae"
  },
  "gae": {
    ...{
  "id": "gae-knee-osteoarthritis-pain",
  "category": "Arterial Embolization & Pelvic Interventions",
  "nameEn": "Genicular Artery Embolization (GAE) for Refractory Knee Osteoarthritis Pain",
  "nameHi": "घुटने के गठिया के दर्द की जेनिकुलर धमनी एम्बोलाइजेशन (GAE - घुटने के दर्द का बिना ऑपरेशन इलाज)",
  "indicationEn": "Moderate-to-severe pain from Kellgren-Lawrence (KL) Grade 2-3 knee osteoarthritis refractory to conservative therapy (NSAIDs, physiotherapy, intra-articular steroid / hyaluronic acid injections); Mild-to-moderate knee OA in patients ineligible for or wishing to delay Total Knee Arthroplasty (TKA); Persistent moderate-to-severe knee pain with localized tenderness over medial or lateral joint lines",
  "indicationHi": "घुटने के पुराने गठिया (Knee Osteoarthritis Grade 2-3) के कारण असहनीय दर्द, सूजन और चलने में लाचारी, जहां दवाइयां व इंजेक्शन बेअसर हो चुके हों और मरीज नी-रिप्लेसमेंट नहीं कराना चाहता हो।",
  "descriptionEn": "Antegrade ipsilateral superficial femoral artery puncture under ultrasound (or contralateral crossover approach) with 4F/5F slender sheath. Popliteal and genicular artery angiography in AP and oblique views: identify the descending genicular artery (DGA), superior medial genicular (SMGA), inferior medial genicular (IMGA), superior lateral genicular (SLGA), and inferior lateral genicular (ILGA). Correlate clinical point of maximum tenderness (e.g., medial joint line) with angiographic hypervascular \"tumor-like\" synovial capillary blush (\"hyperemic blush\"). Superselective cannulation of the branch supplying the inflamed synovium using a 1.7F-2.0F microcatheter over a 0.014\" wire.",
  "descriptionHi": "जांघ की नस से घुटने के जोड़ के चारों ओर सूजन पैदा करने वाली असामान्य सूक्ष्म नसों (Hypervascular Neovessels) में माइक्रोकैथेटर ले जाया जाता है। वहां विशेष सूक्ष्म कण (Imipenem/Cilastatin या Embozene 100 um) डालकर केवल दर्द व सूजन पैदा करने वाली नसों को सील कर दिया जाता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of genicular artery embolization (gae) for refractory knee osteoarthritis pain without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "घुटने के असहनीय दर्द में 70-80% की भारी व स्थायी कमी।",
    "चलने-फिरने, सीढ़ियां चढ़ने और दैनिक कार्यों की क्षमता में अभूतपूर्व सुधार।",
    "घुटने का बड़ा ऑपरेशन (Total Knee Replacement) टलना या उससे बचाव।",
    "डे-केयर प्रक्रिया: 2 घंटे बाद मरीज अपने पैरों पर चलकर घर जा सकता है।"
  ],
  "specificRisksEn": [
    "Transient cutaneous erythema / mild skin discoloration over knee (resolves in 1-3 weeks)",
    "Subcutaneous paresthesia / local numbness",
    "Target vessel spasm during microcatheter manipulation",
    "Access site hematoma"
  ],
  "specificRisksHi": [
    "घुटने की त्वचा पर हल्का नीलापन या छाला (Transient Cutaneous Ischemia - 1-2 हफ्तों में स्वतः ठीक)।",
    "घुटने में शुरुआती 2-3 दिन हल्का दर्द या भारीपन।",
    "जांघ के पंक्चर स्थल पर हल्का नील पड़ना।"
  ],
  "alternativesEn": "Total knee arthroplasty (TKR), intra-articular steroid/PRP injections, or oral analgesics with physical therapy.",
  "alternativesHi": "घुटना बदलने का ऑपरेशन (Total Knee Replacement), घुटने में स्टेरॉयड/पीआरपी इंजेक्शन, अथवा फिजियोथेरेपी व दर्द की दवाइयां।",
  "sedationTypeEn": "Local anesthesia with intravenous conscious sedation and analgesic support.",
  "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवा।"
},
    id: "gae"
  },
  "carotid-stenting": {
    ...{
  "id": "carotid-artery-stenting-cas",
  "category": "Carotid & Neurovascular Interventions",
  "nameEn": "Carotid Artery Angioplasty and Stenting (CAS) with Distal Embolic Protection",
  "nameHi": "कैरोटिड धमनी स्टेंटिंग (CAS - गर्दन की नस में स्टेंट लगाकर ब्रेन स्ट्रोक से बचाव)",
  "indicationEn": "Severe symptomatic internal carotid artery stenosis (>= 50-70% NASCET) following TIA or minor stroke, or high-risk asymptomatic stenosis (>= 80%) with hostile neck or medical co-morbidities.",
  "indicationHi": "गर्दन की मुख्य कैरोटिड धमनी में 70-99% गंभीर रुकावट, जिसके कारण दिमाग में खून की कमी से लकवे के दौरे (TIA / Minor Stroke) आ चुके हों अथवा भविष्य में बड़े ब्रेन स्ट्रोक का अत्यधिक खतरा हो।",
  "descriptionEn": "Under local anesthesia via femoral or radial access, an embolic protection filter (SpiderFX / FilterWire) is advanced past the stenosis to capture any dislodged debris. A self-expanding carotid stent is deployed across the plaque and gently post-dilated with a balloon, restoring cerebral blood flow while preventing distal embolization.",
  "descriptionHi": "जांघ या कलाई की नस से एक कैथेटर गर्दन की कैरोटिड नस में ले जाया जाता है। दिमाग में कचरा जाने से रोकने के लिए पहले नस के अंदर एक सुरक्षा छतरी (Embolic Protection Filter) खोली जाती है। इसके बाद सिकुड़ी हुई जगह पर एक मजबूत धातु का स्टेंट लगाकर नस को पूरी तरह चौड़ा कर दिया जाता है, जिससे दिमाग को भरपूर खून मिलने लगता है।",
  "benefitsEn": [
    "Substantial reduction (over 80-90%) in long-term risk of disabling or fatal ischemic stroke.",
    "Restoration of adequate cerebral hemispheric perfusion, relieving transient ischemic attacks (TIAs).",
    "Avoidance of surgical neck incision and cranial nerve injury risks associated with open carotid endarterectomy (CEA)."
  ],
  "benefitsHi": [
    "भविष्य में होने वाले जानलेवा या स्थायी लकवे (Paralytic Stroke) के खतरे से 80-90% बचाव।",
    "मस्तिष्क में रक्त संचार की तुरंत बहाली जिससे चक्कर, आंखों के आगे अंधेरा और कमजोरी से राहत।",
    "गर्दन पर बिना कोई चीरा लगाए (ओपन कैरोटिड सर्जरी रहित) न्यूनतम इनवेसिव सुरक्षित उपचार।"
  ],
  "specificRisksEn": [
    "Periprocedural ischemic stroke or transient ischemic attack (2-4% risk from microemboli during wire/stent manipulation).",
    "Hemodynamic depression: Sudden profound bradycardia or severe hypotension triggered by carotid sinus baroreceptor stimulation during balloon inflation.",
    "Carotid artery dissection, thrombosis, or perforation.",
    "Cerebral Hyperperfusion Syndrome (severe headache, focal seizures, or intracranial hemorrhage following rapid revascularization).",
    "Puncture site hematoma or pseudoaneurysm formation."
  ],
  "specificRisksHi": [
    "प्रक्रिया के दौरान दिमाग में बारीक कण चले जाने से स्ट्रोक (पक्षाघात) का 2-3% जोखिम (सुरक्षा छतरी द्वारा न्यूनतम किया जाता है)।",
    "गुब्बारा फुलाते समय गर्दन की नस दबने से अचानक दिल की धड़कन धीमी होना (Bradycardia) या ब्लड प्रेशर गिरना (दवाओं द्वारा तुरंत नियंत्रित)।",
    "नस की आंतरिक परत में खिंचाव या फटना (Dissection)।",
    "अचानक बहुत ज्यादा खून दिमाग में पहुंचने से तेज सिरदर्द या मस्तिष्क में रक्तस्राव (Cerebral Hyperperfusion Syndrome)।",
    "जांघ या कलाई के पंक्चर स्थल पर सूजन या रक्त का थक्का।"
  ],
  "alternativesEn": "Open surgical Carotid Endarterectomy (CEA), or aggressive best medical therapy with dual antiplatelets, high-intensity statin, and strict blood pressure control.",
  "alternativesHi": "गर्दन चीरकर नस खोलने का खुला ऑपरेशन (Carotid Endarterectomy - CEA) अथवा केवल खून पतला करने की अंग्रेजी गोलियां (Aspirin, Clopidogrel, Statins)।",
  "sedationTypeEn": "Local anesthesia with subcutaneous lidocaine infiltration and mild conscious sedation (patient must remain awake and responsive for continuous neurological monitoring).",
  "sedationTypeHi": "गर्दन व पंक्चर स्थल पर स्थानीय सुन्नता (Local Anesthesia); मरीज का होश में रहना अनिवार्य है ताकि दिमाग की सक्रियता की लगातार जांच की जा सके।"
},
    id: "carotid-stenting"
  },
  "stroke-thrombectomy": {
    ...{
  "id": "acute-stroke-mechanical-thrombectomy",
  "category": "Carotid & Neurovascular Interventions",
  "nameEn": "Acute Ischemic Stroke Endovascular Mechanical Thrombectomy (ADAPT / Solumbra)",
  "nameHi": "एक्यूट स्ट्रोक मैकेनिकल थ्रोम्बेक्टॉमी (ब्रेन स्ट्रोक / लकवे के तुरंत बाद दिमाग की नस से थक्का खींचना)",
  "indicationEn": "Hyperacute ischemic stroke presenting within 0-24 hours of onset with large vessel occlusion (LVO) involving internal carotid artery, MCA (M1/M2 segment), or basilar artery, with salvageable ischemic penumbra.",
  "indicationHi": "अचानक लकवे का दौरा (Acute Ischemic Stroke) पड़ने के 24 घंटे के भीतर दिमाग की मुख्य नस (ICA, MCA, Basilar Artery) में खून का थक्का जमने से शरीर का एक हिस्सा सुन्न या बेजान होना, मुंह टेढ़ा होना या आवाज चले जाना।",
  "descriptionEn": "Under emergent conditions, a large-bore aspiration catheter and stent-retriever (Solitaire / Trevo) are navigated through the femoral or radial artery directly into the occluded cerebral artery in the brain. The clot is engaged by the stent-retriever and sucked out under continuous vacuum aspiration (Solumbra technique), restoring cerebral perfusion instantly.",
  "descriptionHi": "जांघ या हाथ की नस से एक विशेष कैथेटर और स्टेंट-रीट्रीवर दिमाग की बंद नस तक ले जाया जाता है। वहां फंसे हुए खून के थक्के को पकड़कर हाई-वैक्यूम सक्शन द्वारा बाहर खींच लिया जाता है, जिससे दिमाग में खून का प्रवाह तुरंत दोबारा चालू हो जाता है।",
  "benefitsEn": [
    "Dramatic restoration of cerebral blood flow, preventing permanent brain death and severe lifelong paralysis.",
    "High rate of independent functional recovery (mRS 0-2 at 90 days increased by 2-3 fold compared to medical therapy alone).",
    "Significant reduction in stroke-related mortality and long-term bedridden disability."
  ],
  "benefitsHi": [
    "लकवे के तुरंत बाद दिमाग में खून का प्रवाह बहाल कर मरीज को स्थायी अपंगता या मृत्यु से बचाना।",
    "हाथ-पैर की ताकत और बोलने की क्षमता का तेजी से लौटना (2 से 3 गुना बेहतर रिकवरी)।",
    "जीवन भर बिस्तर पर पड़े रहने की लाचारी से मुक्ति।"
  ],
  "specificRisksEn": [
    "Intracranial hemorrhage (reperfusion parenchymal hematoma or hemorrhagic transformation of ischemic core - 4-6%).",
    "Vascular perforation or arterial dissection of intracranial arteries.",
    "Distal clot embolization into previously unaffected brain territories.",
    "Inability to achieve recanalization (technical failure in 10-15% of tortuous vessels).",
    "Groin access site hematoma or pseudoaneurysm."
  ],
  "specificRisksHi": [
    "मस्तिष्क में खून का रिसाव या ब्लीडिंग (Hemorrhagic Transformation - 4-6% जोखिम)।",
    "दिमाग की नाजुक नस में खिंचाव या छेद होना (Intracranial Perforation)।",
    "थक्के के बारीक टुकड़े दिमाग के अन्य स्वस्थ हिस्सों में चले जाना।",
    "नस के अत्यधिक टेढ़े-मेढ़े होने से प्रक्रिया का असफल होना (10-15%)।",
    "जांघ के पंक्चर स्थल पर रक्तस्राव।"
  ],
  "alternativesEn": "Intravenous thrombolysis with IV alteplase / tenecteplase alone (effective in only 15-30% of large vessel clots), or conservative palliative stroke care.",
  "alternativesHi": "नस द्वारा थक्का गलाने वाला इंजेक्शन (IV r-tPA / Tenecteplase - जो बड़ी नसों में केवल 15-30% सफल होता है) अथवा केवल दवाइयों द्वारा आईसीयू देखभाल।",
  "sedationTypeEn": "Conscious sedation or emergency general endotracheal anesthesia (if patient is uncooperative, agitated, or unable to protect airway).",
  "sedationTypeHi": "हल्की बेहोशी (Conscious Sedation) अथवा सांस की नली डालकर पूर्ण बेहोशी (General Anesthesia) यदि मरीज अत्यधिक बेचैन हो।"
},
    id: "stroke-thrombectomy"
  },
  "stroke-adapt-thrombectomy": {
    ...{
  "id": "acute-stroke-mechanical-thrombectomy",
  "category": "Carotid & Neurovascular Interventions",
  "nameEn": "Acute Ischemic Stroke Endovascular Mechanical Thrombectomy (ADAPT / Solumbra)",
  "nameHi": "एक्यूट स्ट्रोक मैकेनिकल थ्रोम्बेक्टॉमी (ब्रेन स्ट्रोक / लकवे के तुरंत बाद दिमाग की नस से थक्का खींचना)",
  "indicationEn": "Hyperacute ischemic stroke presenting within 0-24 hours of onset with large vessel occlusion (LVO) involving internal carotid artery, MCA (M1/M2 segment), or basilar artery, with salvageable ischemic penumbra.",
  "indicationHi": "अचानक लकवे का दौरा (Acute Ischemic Stroke) पड़ने के 24 घंटे के भीतर दिमाग की मुख्य नस (ICA, MCA, Basilar Artery) में खून का थक्का जमने से शरीर का एक हिस्सा सुन्न या बेजान होना, मुंह टेढ़ा होना या आवाज चले जाना।",
  "descriptionEn": "Under emergent conditions, a large-bore aspiration catheter and stent-retriever (Solitaire / Trevo) are navigated through the femoral or radial artery directly into the occluded cerebral artery in the brain. The clot is engaged by the stent-retriever and sucked out under continuous vacuum aspiration (Solumbra technique), restoring cerebral perfusion instantly.",
  "descriptionHi": "जांघ या हाथ की नस से एक विशेष कैथेटर और स्टेंट-रीट्रीवर दिमाग की बंद नस तक ले जाया जाता है। वहां फंसे हुए खून के थक्के को पकड़कर हाई-वैक्यूम सक्शन द्वारा बाहर खींच लिया जाता है, जिससे दिमाग में खून का प्रवाह तुरंत दोबारा चालू हो जाता है।",
  "benefitsEn": [
    "Dramatic restoration of cerebral blood flow, preventing permanent brain death and severe lifelong paralysis.",
    "High rate of independent functional recovery (mRS 0-2 at 90 days increased by 2-3 fold compared to medical therapy alone).",
    "Significant reduction in stroke-related mortality and long-term bedridden disability."
  ],
  "benefitsHi": [
    "लकवे के तुरंत बाद दिमाग में खून का प्रवाह बहाल कर मरीज को स्थायी अपंगता या मृत्यु से बचाना।",
    "हाथ-पैर की ताकत और बोलने की क्षमता का तेजी से लौटना (2 से 3 गुना बेहतर रिकवरी)।",
    "जीवन भर बिस्तर पर पड़े रहने की लाचारी से मुक्ति।"
  ],
  "specificRisksEn": [
    "Intracranial hemorrhage (reperfusion parenchymal hematoma or hemorrhagic transformation of ischemic core - 4-6%).",
    "Vascular perforation or arterial dissection of intracranial arteries.",
    "Distal clot embolization into previously unaffected brain territories.",
    "Inability to achieve recanalization (technical failure in 10-15% of tortuous vessels).",
    "Groin access site hematoma or pseudoaneurysm."
  ],
  "specificRisksHi": [
    "मस्तिष्क में खून का रिसाव या ब्लीडिंग (Hemorrhagic Transformation - 4-6% जोखिम)।",
    "दिमाग की नाजुक नस में खिंचाव या छेद होना (Intracranial Perforation)।",
    "थक्के के बारीक टुकड़े दिमाग के अन्य स्वस्थ हिस्सों में चले जाना।",
    "नस के अत्यधिक टेढ़े-मेढ़े होने से प्रक्रिया का असफल होना (10-15%)।",
    "जांघ के पंक्चर स्थल पर रक्तस्राव।"
  ],
  "alternativesEn": "Intravenous thrombolysis with IV alteplase / tenecteplase alone (effective in only 15-30% of large vessel clots), or conservative palliative stroke care.",
  "alternativesHi": "नस द्वारा थक्का गलाने वाला इंजेक्शन (IV r-tPA / Tenecteplase - जो बड़ी नसों में केवल 15-30% सफल होता है) अथवा केवल दवाइयों द्वारा आईसीयू देखभाल।",
  "sedationTypeEn": "Conscious sedation or emergency general endotracheal anesthesia (if patient is uncooperative, agitated, or unable to protect airway).",
  "sedationTypeHi": "हल्की बेहोशी (Conscious Sedation) अथवा सांस की नली डालकर पूर्ण बेहोशी (General Anesthesia) यदि मरीज अत्यधिक बेचैन हो।"
},
    id: "stroke-adapt-thrombectomy"
  },
  "stroke-solumbra-thrombectomy": {
    ...{
  "id": "acute-stroke-mechanical-thrombectomy",
  "category": "Carotid & Neurovascular Interventions",
  "nameEn": "Acute Ischemic Stroke Endovascular Mechanical Thrombectomy (ADAPT / Solumbra)",
  "nameHi": "एक्यूट स्ट्रोक मैकेनिकल थ्रोम्बेक्टॉमी (ब्रेन स्ट्रोक / लकवे के तुरंत बाद दिमाग की नस से थक्का खींचना)",
  "indicationEn": "Hyperacute ischemic stroke presenting within 0-24 hours of onset with large vessel occlusion (LVO) involving internal carotid artery, MCA (M1/M2 segment), or basilar artery, with salvageable ischemic penumbra.",
  "indicationHi": "अचानक लकवे का दौरा (Acute Ischemic Stroke) पड़ने के 24 घंटे के भीतर दिमाग की मुख्य नस (ICA, MCA, Basilar Artery) में खून का थक्का जमने से शरीर का एक हिस्सा सुन्न या बेजान होना, मुंह टेढ़ा होना या आवाज चले जाना।",
  "descriptionEn": "Under emergent conditions, a large-bore aspiration catheter and stent-retriever (Solitaire / Trevo) are navigated through the femoral or radial artery directly into the occluded cerebral artery in the brain. The clot is engaged by the stent-retriever and sucked out under continuous vacuum aspiration (Solumbra technique), restoring cerebral perfusion instantly.",
  "descriptionHi": "जांघ या हाथ की नस से एक विशेष कैथेटर और स्टेंट-रीट्रीवर दिमाग की बंद नस तक ले जाया जाता है। वहां फंसे हुए खून के थक्के को पकड़कर हाई-वैक्यूम सक्शन द्वारा बाहर खींच लिया जाता है, जिससे दिमाग में खून का प्रवाह तुरंत दोबारा चालू हो जाता है।",
  "benefitsEn": [
    "Dramatic restoration of cerebral blood flow, preventing permanent brain death and severe lifelong paralysis.",
    "High rate of independent functional recovery (mRS 0-2 at 90 days increased by 2-3 fold compared to medical therapy alone).",
    "Significant reduction in stroke-related mortality and long-term bedridden disability."
  ],
  "benefitsHi": [
    "लकवे के तुरंत बाद दिमाग में खून का प्रवाह बहाल कर मरीज को स्थायी अपंगता या मृत्यु से बचाना।",
    "हाथ-पैर की ताकत और बोलने की क्षमता का तेजी से लौटना (2 से 3 गुना बेहतर रिकवरी)।",
    "जीवन भर बिस्तर पर पड़े रहने की लाचारी से मुक्ति।"
  ],
  "specificRisksEn": [
    "Intracranial hemorrhage (reperfusion parenchymal hematoma or hemorrhagic transformation of ischemic core - 4-6%).",
    "Vascular perforation or arterial dissection of intracranial arteries.",
    "Distal clot embolization into previously unaffected brain territories.",
    "Inability to achieve recanalization (technical failure in 10-15% of tortuous vessels).",
    "Groin access site hematoma or pseudoaneurysm."
  ],
  "specificRisksHi": [
    "मस्तिष्क में खून का रिसाव या ब्लीडिंग (Hemorrhagic Transformation - 4-6% जोखिम)।",
    "दिमाग की नाजुक नस में खिंचाव या छेद होना (Intracranial Perforation)।",
    "थक्के के बारीक टुकड़े दिमाग के अन्य स्वस्थ हिस्सों में चले जाना।",
    "नस के अत्यधिक टेढ़े-मेढ़े होने से प्रक्रिया का असफल होना (10-15%)।",
    "जांघ के पंक्चर स्थल पर रक्तस्राव।"
  ],
  "alternativesEn": "Intravenous thrombolysis with IV alteplase / tenecteplase alone (effective in only 15-30% of large vessel clots), or conservative palliative stroke care.",
  "alternativesHi": "नस द्वारा थक्का गलाने वाला इंजेक्शन (IV r-tPA / Tenecteplase - जो बड़ी नसों में केवल 15-30% सफल होता है) अथवा केवल दवाइयों द्वारा आईसीयू देखभाल।",
  "sedationTypeEn": "Conscious sedation or emergency general endotracheal anesthesia (if patient is uncooperative, agitated, or unable to protect airway).",
  "sedationTypeHi": "हल्की बेहोशी (Conscious Sedation) अथवा सांस की नली डालकर पूर्ण बेहोशी (General Anesthesia) यदि मरीज अत्यधिक बेचैन हो।"
},
    id: "stroke-solumbra-thrombectomy"
  },
  "kts-sclerotherapy": {
    ...{
  "id": "kts-vm-sclerotherapy-bleo-sts",
  "category": "Rare Syndromes & Vascular Disorders",
  "nameEn": "Klippel-Trenaunay Syndrome: Pelvic & Extremity Venous Malformation Bleomycin / STS Sclerotherapy",
  "nameHi": "केटीएस वैस्कुलर मॉलफॉर्मेशन स्क्लेरोथेरेपी (ब्लियोमाइसिन व एसटीएस फोम द्वारा नसों के गुच्छे का इलाज)",
  "indicationEn": "Low-flow spongiform venous malformations involving pelvis, buttocks, and extremity in KTS; Painful phlebolith formation, chronic muscular aching, swelling, and localized bleeding; Recurrent cellulitis and severe functional limb impairment",
  "indicationHi": "पैर या पेडू में नसों के दर्दनाक गुच्छे (Venous Malformations), त्वचा से खून रिसना, सूजन और नसों में कंकड़ जैसे थक्के (Phleboliths) जमने से गंभीर दर्द।",
  "descriptionEn": "General anesthesia or monitored sedation with patient positioned for optimal access to pelvic/limb malformation. Ultrasound-guided direct percutaneous puncture of dysplastic venous lakes using 21G echogenic needles; aspiration of dark, sluggish venous blood confirming intraluminal position. Direct-puncture phlebography under fluoroscopy assessing lesion volume, drainage speed, and identifying any direct efferent outflow conduits into deep veins. Application of manual compression or pneumatic tourniquet on draining veins to promote prolonged sclerosant contact time and avoid systemic escape.",
  "descriptionHi": "सोनोग्राफी और एक्स-रे की सीधी लाइव स्क्रीन पर देखते हुए बारीक सुइयों से नसों के गुच्छों में सीधे ब्लियोमाइसिन (Bleomycin) अथवा एसटीएस फोम इंजेक्ट किया जाता है, जो गुच्छे को सुखाकर खत्म कर देता है।",
  "benefitsEn": [
    "Prompt revascularization / targeted embolization of klippel-trenaunay syndrome: pelvic & extremity venous malformation bleomycin / sts sclerotherapy without large surgical incisions.",
    "Significant reduction in procedural morbidity, intraoperative blood loss, and recovery time compared to open surgery.",
    "Shorter hospital stay with fast return to baseline functional activities."
  ],
  "benefitsHi": [
    "बिना कोई चीरा या टांका लगाए नसों के भयानक गुच्छों से 80-90% राहत।",
    "दर्द और सूजन का तेजी से खात्मा।",
    "अंग की कार्यक्षमता और सामान्य जीवन की बहाली।"
  ],
  "specificRisksEn": [
    "Pulmonary fibrosis (dose-dependent Bleomycin toxicity)",
    "Compartment syndrome of the extremity secondary to acute post-sclerotherapy inflammatory edema",
    "Skin necrosis and ulceration",
    "Hemoglobinuria and acute renal injury"
  ],
  "specificRisksHi": [
    "इंजेक्शन के बाद 3-5 दिन तक स्थानीय सूजन व दर्द।",
    "त्वचा पर फफोले या अस्थायी रंग बदलना।",
    "ब्लियोमाइसिन से फेफड़ों पर असर (Pulmonary Fibrosis - कुल संचयी डोज की कड़ी सीमा रखी जाती है)।",
    "अंग सुन्न होना।"
  ],
  "alternativesEn": "Open surgical excision with high intraoperative bleeding risk, targeted medical therapy (Sirolimus), or lifelong compression therapy.",
  "alternativesHi": "ओपन सर्जिकल रिसेक्शन (अत्यधिक रक्तस्राव व अंग विकृति का उच्च खतरा) अथवा कम्प्रेशन गारमेंट्स।",
  "sedationTypeEn": "General endotracheal anesthesia with continuous arterial blood pressure and invasive monitoring.",
  "sedationTypeHi": "स्थानीय सुन्नता के साथ शामक दवा अथवा बच्चों में पूर्ण बेहोशी।"
},
    id: "kts-sclerotherapy"
  },
};

/**
 * Master Dictionary of Clinical Preparation Protocols & Safety Thresholds
 */
export const VASCULAR_AND_AORTIC_PREPARATION_CRITERIA: Record<string, ProcedureClinicalPreparation> = {
  "evar-bifurcated-modular": {
  "id": "evar-bifurcated-modular",
  "procedureNameEn": "Endovascular Abdominal Aortic Aneurysm Repair (EVAR) with Modular Bifurcated Stent-Graft System",
  "procedureNameHi": "एंडोवैस्कुलर एब्डॉमिनल एओर्टिक एन्यूरिज्म रिपेयर (इवार / पेट की महाधमनी में स्टेंट ग्राफ्ट लगाना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से कम से कम 6 घंटे पूर्व ठोस आहार व दूध पूर्णतः बंद रखें; सादा पानी प्रक्रिया से 2 घंटे पूर्व तक ही लें।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Contrast-enhanced High-Resolution CT Angiography (slice thickness <= 1 mm) of Chest-Abdomen-Pelvis with bilateral lower limb runoff",
  "imagingProtocolHi": "छाती, पेट व दोनों पैरों की हाई-रेज़ोल्यूशन सीटी एंजियोग्राफी (1 मिमी से पतले स्लाइस) 3D सेंटरलाइन रीकंस्ट्रक्शन के साथ।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन जारी रखें; क्लोपिडोग्रेल (Clopidogrel) यदि संभव हो तो 5 दिन पूर्व बंद करें।",
    "anticoagulants": "वारफारिन (Warfarin) 5 दिन पूर्व बंद करें (INR ≤ 1.4); नोएक (DOAC) 48 घंटे पूर्व बंद करें।",
    "metformin": "कंट्रास्ट डाई के कारण मेटफॉर्मिन प्रक्रिया के दिन और 48 घंटे बाद तक बंद रखें।",
    "antihypertensives": "रक्तचाप की नियमित दवाएं (बीटा-ब्लॉकर) सुबह एक घूंट पानी के साथ अवश्य लें (ACEi/ARB रोकें)।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "किडनी सुरक्षा हेतु 0.9% नॉर्मल सलाइन 1 mL/kg/h की दर से प्रक्रिया से 6 घंटे पूर्व एवं 12 घंटे बाद तक चालू रखें।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "कम से कम 2 से 4 यूनिट पैक्ड रेड ब्लड सेल्स (PRBC) ब्लड बैंक में क्रॉस-मैच कराकर सुरक्षित रखें।",
  "specialPrecautionsEn": [
    "Proximal infrarenal aortic neck length >= 10-15 mm, neck diameter <= 32 mm, and infrarenal neck angulation <= 60 degrees",
    "Distal landing zone in common iliac arteries with length >= 15 mm and non-aneurysmal caliber (diameter <= 20 mm)",
    "Adequate iliofemoral access vessel luminal caliber (>= 6-7 mm) without circumferential calcification or extreme tortuosity"
  ],
  "specialPrecautionsHi": [
    "दोनों जांघों की नसों के लिए परक्लोज़ (Perclose ProStyle) सूचर-क्लोज़र डिवाइस की उपलब्धता सुनिश्चित करें।",
    "प्रक्रिया के दौरान ACT (सक्रिय क्लॉटिंग समय) 250-300 सेकंड बनाए रखने हेतु हेपरिन की तैयारी।",
    "प्रक्रिया के तुरंत बाद दोनों पैरों की नाड़ी (Dorsalis pedis/Tibial pulses) की डॉप्लर जांच अनिवार्य।"
  ]
},
  "tevar-thoracic-aneurysm": {
  "id": "tevar-thoracic-aneurysm",
  "procedureNameEn": "Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aortic Aneurysm with Landing Zone Optimization",
  "procedureNameHi": "थोरेसिक एंडोवैस्कुलर एओर्टिक रिपेयर (टेवार / छाती की महाधमनी में स्टेंट-ग्राफ्ट लगाना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व भूखा पेट (NPO) रहें; तरल पदार्थ 2 घंटे पूर्व तक ही लें।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Gated Thoracic and Abdominopelvic CT Angiography with fine-cut MPR/3D volume rendering",
  "imagingProtocolHi": "ईसीजी-गेटेड छाती व पेट की सीटी एंजियोग्राफी (इशिमारू ज़ोन 2 से 4 और एडमकीविक्ज़ धमनी का मूल्यांकन)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन जारी रखें; आवश्यक होने पर प्लेटलेट इनहिबिटर्स के संबंध में कार्डियोलॉजिस्ट से परामर्श करें।",
    "anticoagulants": "वारफारिन 5 दिन पूर्व बंद; हेपरिन प्रक्रिया के 4 घंटे पूर्व बंद; DOAC 48 घंटे पूर्व बंद।",
    "metformin": "प्रक्रिया के दिन एवं 48 घंटे बाद तक मेटफॉर्मिन बंद रखें।",
    "antihypertensives": "एंटी-इम्पल्स थेरेपी (बीटा-ब्लॉकर) द्वारा सिस्टोलिक बीपी < 120 mmHg और हृदय गति < 60/min बनाए रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सीटी कंट्रास्ट नेफ्रोपैथी से बचाव हेतु प्रक्रिया पूर्व व पश्चात नॉर्मल सलाइन ड्रिप 1-1.5 mL/kg/h।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "4 यूनिट पीआरबीसी (PRBC) एवं 4 यूनिट एफएफपी (FFP) आपातकालीन प्रयोग हेतु क्रॉस-मैच रखें।",
  "specialPrecautionsEn": [
    "Proximal landing zone length >= 20 mm in healthy non-aneurysmal aorta (Ishimaru Zones 2-4); assessment of left subclavian artery (LSA) and vertebral artery dominance",
    "Evaluation of distal landing zone (>= 20 mm above celiac axis) and assessment of Adamkiewicz artery origin level (typically T8-L1)",
    "CSF drainage catheter placement pre-operatively for extensive descending aortic coverage (> 20 cm) or previous infrarenal aortic repair"
  ],
  "specialPrecautionsHi": [
    "रीढ़ की हड्डी में लकवे के बचाव हेतु प्रक्रिया से पूर्व कमर में सीएसएफ ड्रेन (CSF Lumbar Drain) स्थापित करना।",
    "स्टेंट खोलते समय रक्तचाप अचानक कम करने हेतु रैपिड वेंट्रिकुलर पेसिंग (RVP) अथवा दवा (Adenosine) तैयार रखना।",
    "प्रक्रिया पश्चात आईसीयू में निरंतर न्यूरोलॉजिकल और मोटर फंक्शन की निगरानी।"
  ]
},
  "tevar-acute-type-b-dissection": {
  "id": "tevar-acute-type-b-dissection",
  "procedureNameEn": "TEVAR for Acute Complicated Stanford Type B Aortic Dissection (Entry Tear Coverage)",
  "procedureNameHi": "एक्यूट कॉम्प्लिकेटेड टाइप बी एओर्टिक डिसेक्शन टेवार (महाधमनी का पर्दा फटने पर आपातकालीन स्टेंट ग्राफ्ट)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकालीन स्थिति में मरीज को तुरंत पूर्णतः भूखा पेट (Strict NPO) रखा जाए तथा राइल्स ट्यूब डाली जाए।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Electrocardiogram-gated High-Resolution CTA of Chest, Abdomen, and Pelvis identifying primary proximal intimal tear, true and false lumen anatomy, and visceral takeoff origins",
  "imagingProtocolHi": "आपातकालीन ट्राइफेसिक सीटी एंजियोग्राफी (CTA Chest, Abdomen & Pelvis) एंट्री टियर एवं ऑर्गन परफ्यूजन मैपिंग हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "स्थिति के अनुसार आपातकालीन निर्णय; हेपरिन प्रक्रिया के दौरान टाइट्रेट की जाएगी।",
    "anticoagulants": "एंटीकोआगुलेशन तुरंत रोकी जाए और आवश्यकता पड़ने पर पीसीसी/विटामिन के द्वारा उलटी जाए।",
    "metformin": "तत्काल प्रभाव से बंद रखें।",
    "antihypertensives": "आईवी लेबेटालोल (Labetalol) या एस्मोलोल (Esmolol) द्वारा सिस्टोलिक बीपी 100-120 mmHg और पल्स < 60/min बनाए रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आपातकालीन आईवी हाइड्रेशन और सीरम लैक्टेट, एबीजी व यूरिन आउटपुट की प्रति घंटा निगरानी।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "4 यूनिट पीआरबीसी, 4 यूनिट एफएफपी, और 1 सिंगल डोनर प्लेटलेट (SDP) आरक्षित रखें।",
  "specialPrecautionsEn": [
    "Strict systolic blood pressure target < 120 mmHg and heart rate < 60 bpm achieved with IV beta-blockers (Esmolol / Labetalol)",
    "Pre-procedure baseline neurological evaluation, spinal cord perfusion pressure monitoring, and CSF drain placement if extensive coverage (> 15 cm) planned",
    "Renal function tests, serum lactate, base deficit, and coagulation profile (INR < 1.4, Platelets > 80,000/uL)"
  ],
  "specialPrecautionsHi": [
    "आईवीयूएस (IVUS - इंट्रावैस्कुलर अल्ट्रासाउंड) द्वारा असली रास्ते (True Lumen) की 100% पक्की पहचान।",
    "डिसेक्शन के किनारों पर हाई-प्रेशर बैलून फुलाने की सख्त मनाही (नो बैलूनिंग डायरेक्टिव)।",
    "प्रक्रिया पश्चात आईसीयू में सख्त बीपी नियंत्रण और अंग परफ्यूजन मॉनिटरिंग।"
  ]
},
  "fevar-bevar-juxtarenal-thoracoabdominal": {
  "id": "fevar-bevar-juxtarenal-thoracoabdominal",
  "procedureNameEn": "Fenestrated / Branched Endovascular Aortic Repair (FEVAR / BEVAR) for Juxtarenal and Thoracoabdominal Aneurysms",
  "procedureNameHi": "फेनेस्ट्रेटेड / ब्रांक्ड एंडोवैस्कुलर एओर्टिक रिपेयर (फेवार / बेवार - गुर्दे व आंतों की शाखाओं वाला विशेष स्टेंट)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व पूर्ण NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 80,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Thin-cut (<= 0.75 mm) ECG-gated CTA from thoracic inlet to femoral bifurcations with precise 3D center-line reconstruction of target visceral vessels (celiac, SMA, bilateral renals)",
  "imagingProtocolHi": "पतले स्लाइस (≤ 0.75 मिमी) ईसीजी-गेटेड सीटीए नेक से फेमोरल तक, 3D सेंटरलाइन और क्लॉक-फेस कोण निर्धारण।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन चालू रखें; डीएपीटी योजना अनुसार।",
    "anticoagulants": "वारफारिन 5 दिन पूर्व बंद; DOAC 48 घंटे पूर्व बंद।",
    "metformin": "प्रक्रिया से 48 घंटे पूर्व एवं पश्चात बंद।",
    "antihypertensives": "कार्डियक व बीपी दवाएं नियमानुसार चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "प्रक्रिया पूर्व 12 घंटे और पश्चात 24 घंटे सलाइन हाइड्रेशन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "4-6 यूनिट पीआरबीसी, 4 यूनिट एफएफपी, 2 यूनिट प्लेटलेट्स आरक्षित।",
  "specialPrecautionsEn": [
    "Customized device planning: calculation of clock-face positions, longitudinal distances, branch takeoff angulations, and vessel diameters",
    "Prophylactic lumbar cerebrospinal fluid (CSF) drain placement 24h prior to procedure to mitigate spinal cord ischemia",
    "Baseline cardiac evaluation (dobutamine stress echo / coronary angiogram), pulmonary function tests, and renal clearance (eGFR > 30 mL/min/1.73m2 preferred)"
  ],
  "specialPrecautionsHi": [
    "प्रक्रिया से 24 घंटे पूर्व अनिवार्य स्पाइनल लंबर सीएसएफ ड्रेन (CSF Drain) लगाना।",
    "हाथ की एक्सिलरी/ब्रेकियल धमनी का सुरक्षित एक्सेस और पल्स मॉनिटरिंग।",
    "आईसीयू में स्पाइनल परफ्यूजन प्रेशर (MAP - CSFP > 70-80 mmHg) का सख्त प्रबंधन।"
  ]
},
  "chevar-parallel-grafts": {
  "id": "chevar-parallel-grafts",
  "procedureNameEn": "Chimney / Snorkel EVAR (ChEVAR) with Parallel Renal and Visceral Covered Stents",
  "procedureNameHi": "चिमनी / स्नोर्कल इवार (ChEVAR - गुर्दे की नसों के समानांतर स्टेंट लगाकर महाधमनी रिपेयर)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व ठोस आहार वर्जित; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "CTA Abdomen-Pelvis with 3D reconstructed neck dimensions, renal artery origins, and branch takeoff angles",
  "imagingProtocolHi": "सीटी एंजियोग्राफी छाती, पेट और दोनों हाथों की एक्सिलरी धमनियों की बनावट और व्यास की जांच सहित।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन चालू रखें।",
    "anticoagulants": "वारफारिन 5 दिन पूर्व बंद; DOAC 48 घंटे पूर्व बंद।",
    "metformin": "प्रक्रिया के दिन और बाद में 48 घंटे बंद।",
    "antihypertensives": "बीपी दवाएं समय पर लें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 1 mL/kg/h प्रक्रिया से 6 घंटे पूर्व चालू।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "2-4 यूनिट पीआरबीसी क्रॉस-मैच तैयार रखें।",
  "specialPrecautionsEn": [
    "Left axillary or brachial artery luminal caliber >= 6-7 mm (or bilateral upper extremity access if bilateral chimneys required)",
    "Evaluation of suprarenal aortic neck quality (length >= 15 mm in healthy parallel landing zone to accommodate gutter seal)",
    "Baseline creatinine, eGFR, coagulation indices, and blood crossmatch"
  ],
  "specialPrecautionsHi": [
    "हाथ की एक्सिलरी धमनी और दोनों जांघों की धमनियों के संयुक्त एक्सेस की तैयारी।",
    "सिंक्रोनाइज़्ड 'किसिंग' बैलून पोस्ट-डाइलेशन हेतु उचित आकार के बैलून उपलब्ध रखना।",
    "प्रक्रिया पश्चात दोनों हाथों व पैरों की नाड़ी एवं गुर्दे के फंक्शन (RFT) की गहन जांच।"
  ]
},
  "pevar-percutaneous-preclose": {
  "id": "pevar-percutaneous-preclose",
  "procedureNameEn": "Percutaneous EVAR (PEVAR) with Totally Percutaneous Pre-Close Suture Technique",
  "procedureNameHi": "परक्यूटेनियस इवार (PEVAR - बिना जांघ काटे टांके वाली सुई द्वारा स्टेंट ग्राफ्ट लगाना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Pre-procedure CTA or vascular ultrasound confirming non-calcified, plaque-free anterior common femoral artery (CFA) wall at puncture zone",
  "imagingProtocolHi": "सीटीए अथवा हाई-रिज़ॉल्यूशन सोनोग्राफी द्वारा जांघ की कॉमन फेमोरल धमनी में कैल्शियम व दीवार की मोटाई की जांच।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन चालू; क्लॉपिडोग्रेल पर स्थिति अनुसार निर्णय।",
    "anticoagulants": "वारफारिन/DOAC मानक नियमानुसार रोकी जाए।",
    "metformin": "48 घंटे पूर्व व पश्चात बंद।",
    "antihypertensives": "बीटा-ब्लॉकर सुबह नियमित लें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "कंट्रास्ट नेफ्रोपैथी रोकथाम प्रोटोकॉल: आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी आरक्षित रखें।",
  "specialPrecautionsEn": [
    "CFA diameter >= 6.0 mm without high-grade stenosis, circumferential calcification, or excessive scar tissue from prior groin surgery",
    "Absence of morbid obesity precluding ultrasound-guided perpendicular puncture trajectory",
    "Standard EVAR anatomical and physiological eligibility"
  ],
  "specialPrecautionsHi": [
    "जांघ की नस पर 10 बजे और 2 बजे की स्थिति में दो परक्लोज़ उपकरण लगाने की पूर्व-तैयारी।",
    "टांके बांधने के बाद टेबल पर ही कलर डॉप्लर सोनोग्राफी द्वारा नस के खुले रहने की पुष्टि।"
  ]
},
  "endoleak-transarterial-coiling": {
  "id": "endoleak-transarterial-coiling",
  "procedureNameEn": "Endoleak Treatment: Transarterial Superselective Coiling of Type II Lumbar / IMA Endoleak",
  "procedureNameHi": "एंडोलीक का ट्रांस-आर्टीरियल कोइलिंग उपचार (इवार के बाद थैली में लीक बंद करने हेतु छल्ले डालना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व ठोस आहार वर्जित; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Triphasic CTA Abdomen with delayed venous/washout phase precisely identifying feeding collaterals (e.g., enlarged Inferior Mesenteric Artery via Drummond/Riolan arcade, or retrogradely filling lumbar arteries via internal iliac/iliolumbar network)",
  "imagingProtocolHi": "ट्राइफेसिक सीटी एंजियोग्राफी (विलंबित शिरापरक फेज़ सहित) फीडिंग धमनियों के मार्ग की पहचान हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन चालू रखें।",
    "anticoagulants": "वारफारिन INR ≤ 1.5; DOAC 48 घंटे पूर्व बंद।",
    "metformin": "प्रक्रिया के दिन बंद।",
    "antihypertensives": "नियमित दवाएं चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सीटी कंट्रास्ट से सुरक्षा हेतु नॉर्मल सलाइन ड्रिप।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन तैयार रखें।",
  "specialPrecautionsEn": [
    "Duplex ultrasound confirming bidirectional flow within the excluded aneurysm sac",
    "Renal function and coagulation status (INR < 1.5, Platelets > 60,000/uL)"
  ],
  "specialPrecautionsHi": [
    "डीएमएसओ (DMSO) संगत माइक्रोकैथेटर और डिटैचेबल कॉइल्स की उपलब्धता।",
    "प्रक्रिया के दौरान आंतों के मुख्य आर्क (Arc of Riolan) के सुरक्षित रहने की पुष्टि।"
  ]
},
  "endoleak-direct-puncture-embolization": {
  "id": "endoleak-direct-puncture-embolization",
  "procedureNameEn": "Endoleak Treatment: Direct Translumbar / Transcaval Sac Puncture and Onyx / Thrombin Embolization",
  "procedureNameHi": "कमर के रास्ते सीधे सुई द्वारा एंडोलीक एम्बोलाइजेशन (Translumbar / Transcaval Puncture & Onyx)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Thin-slice contrast CT identifying exact spatial coordinates of the patent endoleak cavity in relation to the spine, vena cava, psoas muscle, and aortic endograft",
  "imagingProtocolHi": "थिन-स्लाइस कंट्रास्ट सीटी द्वारा सुई के सटीक मार्ग और रीढ़ की हड्डी के कोण की 3D मैपिंग।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "रक्तस्राव के खतरे के कारण आवश्यकतानुसार 3-5 दिन पूर्व एंटीप्लेटलेट्स का प्रबंधन।",
    "anticoagulants": "वारफारिन INR ≤ 1.3 होना अनिवार्य; हेपरिन पूर्णतः सामान्य।",
    "metformin": "प्रक्रिया के दिन बंद।",
    "antihypertensives": "रक्तचाप सामान्य बनाए रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी तैयार रखें।",
  "specialPrecautionsEn": [
    "Absolute exclusion of Type I or Type III endoleak requiring endograft relining",
    "Coagulation indices: Platelets > 80,000/uL, INR < 1.3 to avoid uncontrollable retroperitoneal hemorrhage",
    "Patient capable of maintaining prone or lateral decubitus position under deep sedation / general anesthesia"
  ],
  "specialPrecautionsHi": [
    "थैली का प्री व पोस्ट एम्बोलाइजेशन प्रेशर मॉनिटरिंग लाइन से नापना।",
    "सुई निकालने के बाद पंक्चर मार्ग की डॉप्लर जांच द्वारा खून के रिसाव का अभाव सुनिश्चित करना।"
  ]
},
  "endoleak-type-ia-cuff-extension": {
  "id": "endoleak-type-ia-cuff-extension",
  "procedureNameEn": "Endoleak Treatment: Proximal Cuff Extension / Giant Palmaz Stent Placement for Type IA Endoleak",
  "procedureNameHi": "टाइप 1A एंडोलीक सुधार: प्रॉक्सिमल कफ एक्सटेंशन एवं पाल्माज़ स्टेंट (महाधमनी स्टेंट के ऊपरी रिसाव को सील करना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकालीन स्थिति में तुरंत NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "High-resolution CT Angiography quantifying distance between lowest renal artery and top of stent-graft, residual non-aneurysmal neck length, and aortic neck diameter",
  "imagingProtocolHi": "आपातकालीन सीटी एंजियोग्राफी महाधमनी की गर्दन की लंबाई, चौड़ाई और रीनल धमनियों की दूरी नापने हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "स्थिति अनुसार।",
    "anticoagulants": "हेपरिन प्रक्रिया के दौरान ACT 250-300 सेकंड पर रखी जाएगी।",
    "metformin": "तत्काल बंद।",
    "antihypertensives": "रक्तचाप नियंत्रित रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन इन्फ्यूजन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2-4 यूनिट पीआरबीसी क्रॉस-मैच तैयार।",
  "specialPrecautionsEn": [
    "Assessment of iliofemoral access vessels for large-bore sheath re-entry (18F-20F)",
    "Coagulation screen: INR < 1.4, Platelets > 75,000/uL; crossmatched packed red blood cells on standby"
  ],
  "specialPrecautionsHi": [
    "गुर्दे की नसों की सुरक्षा हेतु रीनल गाइडवायर पहले से पार्क करके रखना।",
    "पाल्माज़ स्टेंट को सटीक माउंट करने हेतु हाई-प्रेशर मैक्स-बैलून तैयार रखना।"
  ]
},
  "cerab-technique": {
  "id": "cerab-technique",
  "procedureNameEn": "Aortoiliac Occlusive Disease: Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB Technique)",
  "procedureNameHi": "महाधमनी विभाजन का कवर्ड स्टेंट द्वारा पुनर्निर्माण (CERAB तकनीक - पेट व जांघ की नसों का बाईपास स्टेंट)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "CT Angiography of Aorta and Bilateral Lower Extremities demonstrating occlusive lesion length, distal aortic caliber (>= 16-18 mm), and iliac bifurcation runoff",
  "imagingProtocolHi": "पेट व दोनों पैरों की रन-ऑफ सीटी एंजियोग्राफी (CTA Abdomen & Lower Limbs)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट दवाएं (Aspirin 75-150 mg + Clopidogrel 75 mg) प्रक्रिया से पूर्व शुरू की जाएं।",
    "anticoagulants": "वारफारिन/DOAC नियमानुसार बंद।",
    "metformin": "48 घंटे पूर्व व पश्चात बंद।",
    "antihypertensives": "नियमित बीपी दवाएं चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "0.9% सलाइन ड्रिप 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी तैयार रखें।",
  "specialPrecautionsEn": [
    "Evaluation of common femoral access vessels for dual 7F-10F sheaths",
    "Baseline ankle-brachial index (ABI), creatinine, coagulation parameters"
  ],
  "specialPrecautionsHi": [
    "दोनों जांघों में एक साथ पंक्चर और सिंक्रोनाइज़्ड डिप्लॉयमेंट की तैयारी।",
    "प्रक्रिया पश्चात पैरों की सभी नाड़ियों की डॉप्लर जांच एवं पल्स पल्पेशन।"
  ]
},
  "aortoiliac-kissing-stenting": {
  "id": "aortoiliac-kissing-stenting",
  "procedureNameEn": "Aortoiliac Kissing Balloon Angioplasty and Kissing Bare-Metal / Covered Stenting",
  "procedureNameHi": "एओर्टो-इलिएक किसिंग स्टेंटिंग (महाधमनी व दोनों इलिएक नसों में एक साथ दो स्टेंट लगाना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Pelvic CTA or duplex ultrasound defining calcification extent, luminal diameters of distal aorta (>= 14 mm) and common iliacs (>= 7 mm)",
  "imagingProtocolHi": "सीटी एंजियोग्राफी दोनों पैरों की रनऑफ सहित।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन व क्लोपिडोग्रेल लोडिंग डोज प्रक्रिया से पूर्व।",
    "anticoagulants": "एंटीकोआगुलेंट नियमानुसार रोके जाएं।",
    "metformin": "48 घंटे पूर्व व पश्चात बंद।",
    "antihypertensives": "बीपी दवाएं समय पर लें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी हाइड्रेशन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व क्रॉस-मैच सुरक्षित रखें।",
  "specialPrecautionsEn": [
    "Adequate distal runoff in external and internal iliac arteries",
    "Coagulation profile (INR < 1.5, Platelets > 60,000/uL), baseline ABI"
  ],
  "specialPrecautionsHi": [
    "दोनों बैलून का एक साथ फूलना और पिचकना सुनिश्चित करना।",
    "आपातकालीन कवर्ड स्टेंट (Covered Stent bail-out) कैथ-लैब में तैयार रखना।"
  ]
},
  "iliac-cto-subintimal-stenting": {
  "id": "iliac-cto-subintimal-stenting",
  "procedureNameEn": "Common and External Iliac Artery Chronic Total Occlusion (CTO) Crossing with Subintimal Angioplasty and Stenting",
  "procedureNameHi": "इलिएक धमनी के पुराने पूर्ण अवरोध को खोलना (Iliac CTO सब-इंटिमल एंजियोप्लास्टी व स्टेंटिंग)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "CTA or MRA with multiplanar reconstruction showing CTO length, degree of calcification, and reconstitution of patent femoral runoff",
  "imagingProtocolHi": "सीटी एंजियोग्राफी अथवा डॉप्लर द्वारा इलिएक धमनी की लंबाई व कैल्शिफिकेशन का आकलन।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट (Aspirin + Clopidogrel) अनिवार्य।",
    "anticoagulants": "वारफारिन/DOAC मानक अनुसार बंद।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी क्रॉस-मैच।",
  "specialPrecautionsEn": [
    "Assessment of contralateral crossover feasibility or ipsilateral retrograde access suitability",
    "Baseline ankle-brachial index (ABI), renal panel, and bleeding parameters"
  ],
  "specialPrecautionsHi": [
    "आउटबैक (Outback) री-एंट्री डिवाइस और कवर्ड स्टेंट की उपलब्धता।",
    "प्रक्रिया पश्चात दोनों पैरों के पल्स व परफ्यूजन की निगरानी।"
  ]
},
  "sfa-cto-recanalization-dcb": {
  "id": "sfa-cto-recanalization-dcb",
  "procedureNameEn": "Superficial Femoral Artery (SFA) Long Segment CTO Recanalization and Drug-Coated Balloon (DCB) Angioplasty",
  "procedureNameHi": "जांघ की धमनी (SFA) के पुराने अवरोध की रीकैनेलाइजेशन एवं दवा वाले गुब्बारे (DCB) से एंजियोप्लास्टी",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Duplex ultrasound and lower extremity CTA/MRA confirming occlusion length, distal reconstitution above the knee, and tibial runoff status (at least one patent tibial artery to the foot)",
  "imagingProtocolHi": "दोनों पैरों की सीटी एंजियोग्राफी अथवा आर्टीरियल कलर डॉप्लर सोनोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "प्रक्रिया पूर्व एस्पिरिन और क्लोपिडोग्रेल शुरू करना अनिवार्य।",
    "anticoagulants": "वारफारिन INR ≤ 1.5; DOAC 48 घंटे पूर्व बंद।",
    "metformin": "प्रक्रिया के दिन बंद।",
    "antihypertensives": "नियमित दवाएं लें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन ड्रिप 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "ब्लड ग्रुपिंग व स्क्रीनिंग।",
  "specialPrecautionsEn": [
    "Pre-procedure ABI (< 0.6) and pulse volume recording (PVR)",
    "Absence of untreated ipsilateral inflow (aortoiliac) stenosis"
  ],
  "specialPrecautionsHi": [
    "दवा वाले गुब्बारे (DCB) को नस में कम से कम 2 से 3 मिनट तक फुलाकर रखना।",
    "फ्लो-लिमिटिंग डिसेक्शन होने पर बेयर-मेटल स्टेंट लगाने की तैयारी।"
  ]
},
  "sfa-directional-rotational-atherectomy-dcb": {
  "id": "sfa-directional-rotational-atherectomy-dcb",
  "procedureNameEn": "SFA Directional / Rotational Atherectomy Followed by Drug-Coated Balloon (DCB) Angioplasty",
  "procedureNameHi": "एसएफए एथेरेक्टॉमी एवं डीसीबी एंजियोप्लास्टी (नस के अंदर जमी सख्त पथरी/कैल्शियम को छीलना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "CTA or fluoroscopic roadmapping demonstrating eccentric or circumferential \"sheet-like\" calcium (PACSS Grade 3-4 calcification)",
  "imagingProtocolHi": "सीटी एंजियोग्राफी में कैल्शियम की परिधि (Circumferential Calcium Score) का मूल्यांकन।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट थेरेपी (DAPT) अनिवार्य।",
    "anticoagulants": "वारफारिन/DOAC नियमानुसार बंद।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सलाइन हाइड्रेशन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Lumbar and femoral inflow verified patent without high-grade stenosis",
    "Renal function within safe range, coagulation profile normal (INR < 1.4, Platelets > 80,000/uL)"
  ],
  "specialPrecautionsHi": [
    "पंजे में कचरा जाने से रोकने हेतु डिस्टल एम्बोलिक प्रोटेक्शन फिल्टर (SpiderFX) अनिवार्य लगाना।",
    "परफोरेशन की स्थिति के लिए कवर्ड स्टेंट तैयार रखना।"
  ]
},
  "sfa-popliteal-viabahn-covered-stenting": {
  "id": "sfa-popliteal-viabahn-covered-stenting",
  "procedureNameEn": "SFA and Popliteal Artery Covered Stenting with Self-Expanding Viabahn Stent-Graft for Complex TASC D Lesions",
  "procedureNameHi": "एसएफए व पॉपलीटील धमनी में वायाभान कवर्ड स्टेंट लगाना (जटिल व लंबी रुकावटों के लिए आंतरिक ग्राफ्ट)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "CT Angiography confirming distal landing zone in patent P1/P2 popliteal segment with adequate lumen (>= 4.5 mm) above the knee joint flexion crease",
  "imagingProtocolHi": "सीटी एंजियोग्राफी जांघ से लेकर पैर के पंजों तक (Runoff Vessels)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट (Aspirin + Clopidogrel) कम से कम 6 महीने तक जारी रखनी होगी।",
    "anticoagulants": "वारफारिन/DOAC नियमानुसार बंद।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी हाइड्रेशन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Adequate distal runoff: at least one continuous, robust tibial vessel to the ankle/foot to maintain runoff velocity and prevent graft thrombosis",
    "Platelets > 80,000/uL, INR < 1.4; commitment to long-term dual antiplatelet therapy (DAPT: Aspirin + Clopidogrel) post-procedure"
  ],
  "specialPrecautionsHi": [
    "कवर्ड स्टेंट को स्वस्थ नस के किनारे से 5-10% ओवरसाइज़ करना।",
    "स्टेंट लगाने के तुरंत बाद हेपरिन रिवर्सल से बचना।"
  ]
},
  "sfa-popliteal-supera-interwoven-stenting": {
  "id": "sfa-popliteal-supera-interwoven-stenting",
  "procedureNameEn": "SFA Dedicated Interwoven Nitinol Stenting (Supera) for Popliteal / Distal SFA with High Torsional Stress",
  "procedureNameHi": "सुपेरा इंटरवोवन स्टेंटिंग (घुटने की मुड़ने वाली धमनी हेतु अत्यधिक लचीला व मजबूत स्टेंट)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Pre-procedure CTA or DSA showing lesion anatomy extending into or across the knee joint",
  "imagingProtocolHi": "सीटी एंजियोग्राफी एवं घुटने के मोड़ने पर डॉप्लर जांच।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट (DAPT) न्यूनतम 1 वर्ष।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Exact measurement of reference vessel diameter under non-magnified calibrated conditions (Supera requires strict 1:1 matching without oversizing to prevent elongation)",
    "Patent distal tibial runoff vessels; baseline ABI and coagulation profile"
  ],
  "specialPrecautionsHi": [
    "सुपेरा स्टेंट को 1:1 सटीक आकार में खोलना, किसी भी प्रकार के खिंचाव से बचना।",
    "स्टेंट लगाने से पूर्व नस की सख्त तैयारी (Vessel Preparation) आवश्यक।"
  ]
},
  "popliteal-aneurysm-viabahn-exclusion": {
  "id": "popliteal-aneurysm-viabahn-exclusion",
  "procedureNameEn": "Popliteal Artery Aneurysm Exclusion with Percutaneous Viabahn Covered Stent-Graft",
  "procedureNameHi": "पॉपलीटील धमनी के एन्यूरिज्म का कवर्ड स्टेंट द्वारा उपचार (घुटने के पीछे की फूली नस में स्टेंट)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "High-resolution CT Angiography or duplex ultrasound confirming adequate proximal (P1) and distal (P3) landing zones with length >= 15-20 mm and non-aneurysmal caliber (diameter <= 8-9 mm)",
  "imagingProtocolHi": "सीटी एंजियोग्राफी दोनों घुटनों की (50% मरीजों में दूसरे घुटने और पेट में भी एन्यूरिज्म होता है)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन और क्लोपिडोग्रेल अनिवार्य।",
    "anticoagulants": "वारफारिन/DOAC मानक नियमानुसार।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Patency of at least 1-2 distal tibial runoff vessels to the foot (runoff patency is the primary predictor of long-term covered stent patency)",
    "Ruling out concomitant abdominal aortic aneurysm (coexists in 40-50% of popliteal aneurysm cases)",
    "Full blood counts, baseline ABI, and coagulation profile"
  ],
  "specialPrecautionsHi": [
    "घुटने के मोड़ के स्तर पर पर्याप्त ओवरलैप और लचीलेपन की जांच।",
    "प्रक्रिया पश्चात मरीज को अत्यधिक घुटना मोड़कर बैठने से कुछ सप्ताह परहेज की सलाह।"
  ]
},
  "btk-tibial-balloon-angioplasty": {
  "id": "btk-tibial-balloon-angioplasty",
  "procedureNameEn": "Below-the-Knee (BTK) Tibial Artery Balloon Angioplasty with Dedicated Long Tapered Balloons for CLTI",
  "procedureNameHi": "घुटने के नीचे पिंडली की नसों की बैलून एंजियोप्लास्टी (BTK Angioplasty - डायबिटिक पैर को कटने से बचाना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Pre-procedure diagnostic duplex or CTA showing infrapopliteal occlusions and identifying the primary target angiosome artery corresponding to the ulcer bed",
  "imagingProtocolHi": "पैर के तलवे तक की हाई-रिज़ॉल्यूशन डॉप्लर सोनोग्राफी अथवा कार्बन-डाइऑक्साइड (CO2) / आयोडिनेटेड सीटीए।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन 150 mg + क्लोपिडोग्रेल 75 mg दैनिक चालू रखें।",
    "anticoagulants": "वारफारिन/DOAC मानक नियमानुसार।",
    "metformin": "डायबिटिक मरीजों में मेटफॉर्मिन 48 घंटे पूर्व व पश्चात बंद; इंसुलिन द्वारा शुगर नियंत्रण।",
    "antihypertensives": "नियमित दवाएं लें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "डायबिटिक नेफ्रोपैथी से बचाव हेतु अनिवार्य आईवी नॉर्मल सलाइन हाइड्रेशन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "ब्लड ग्रुपिंग तैयार।",
  "specialPrecautionsEn": [
    "Toe pressure < 30 mmHg or transcutaneous oxygen pressure (TcPO2) < 30 mmHg",
    "Coagulation status: INR < 1.5, Platelets > 60,000/uL; baseline renal panel"
  ],
  "specialPrecautionsHi": [
    "घाव वाले विशिष्ट एंजियोसोम (Angiosome Concept) की नस को प्राथमिकता से खोलना।",
    "नस की ऐंठन रोकने हेतु आईए नाइट्रोग्लिसरीन (Nitroglycerin) या वेरापामिल का प्रयोग।"
  ]
},
  "btk-retrograde-pedal-rendezvous": {
  "id": "btk-retrograde-pedal-rendezvous",
  "procedureNameEn": "BTK Retrograde Pedal / Transpedal / Transmetatarsal Arterial Access and Rendezvous Recanalization",
  "procedureNameHi": "पैर के पंजे से उल्टी दिशा में नस खोलना (रिवर्स पीडल / ट्रांस-मेटाटार्सल रेंडेवू तकनीक)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "High-resolution vascular ultrasound mapping of the distal anterior tibial / dorsalis pedis, posterior tibial / retromalleolar, or lateral plantar artery at the foot level, assessing luminal diameter (>= 1.2 mm) and calcification",
  "imagingProtocolHi": "पैर के पंजे (Dorsalis Pedis व Plantar Arteries) की हाई-फ्रीक्वेंसी डॉप्लर सोनोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट थेरेपी अनिवार्य।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Failed or impossible antegrade wire crossing attempt during current or prior session",
    "Acceptable coagulation parameters (INR < 1.4, Platelets > 60,000/uL)"
  ],
  "specialPrecautionsHi": [
    "पंजे की नस के पंक्चर हेतु माइक्रो-पंक्चर 21G सुई और हाई-रिज़ॉल्यूशन अल्ट्रासाउंड का प्रयोग।",
    "प्रक्रिया पश्चात पंजे की नस का सुरक्षित हीमोस्टेसिस (Prolonged Gentle Manual Compression)।"
  ]
},
  "pedal-arch-loop-angioplasty": {
  "id": "pedal-arch-loop-angioplasty",
  "procedureNameEn": "Pedal Arch Reconstruction and Plantar Artery Loop Angioplasty for Neuroischemic Diabetic Foot Ulcer",
  "procedureNameHi": "पैर के तलवे का लूप पुनर्निर्माण (पीडल आर्च लूप एंजियोप्लास्टी - तलवे की नसों का चक्र खोलना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "High-magnification selective digital subtraction angiography of the foot in AP, lateral, and oblique projections delineating pedal arch integrity (Categories: Complete, Incomplete, Absent)",
  "imagingProtocolHi": "हाई-रिज़ॉल्यूशन डिजिटल सबट्रैक्शन एंजियोग्राफी (DSA) मैग्निफाइड पीडल व्यूज़ के साथ।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "डीएपीटी चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Identification of target communicating vessels (dorsalis pedis, lateral plantar, deep plantar branch, medial plantar artery)",
    "Serum creatinine and baseline renal parameters"
  ],
  "specialPrecautionsHi": [
    "माइक्रो-बैलून का प्रयोग और अत्यधिक कम दबाव (4-6 atm) पर सुरक्षित फैलाव।",
    "वैसोडाइलेटर (Nitroglycerin) का स्थानीय प्रयोग।"
  ]
},
  "ali-catheter-directed-thrombolysis-aspiration": {
  "id": "ali-catheter-directed-thrombolysis-aspiration",
  "procedureNameEn": "Acute Lower Extremity Limb Ischemia (ALI): Catheter-Directed Thrombolysis (CDT) with tPA and Aspiration Embolectomy",
  "procedureNameHi": "पैर में अचानक थक्का जमने का आपातकालीन उपचार (ALI: कैथेटर-डायरेक्टेड थ्रोम्बोलाइज़िस व एस्पिरेशन)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकालीन स्थिति में तुरंत NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Clinical staging confirming Rutherford Category I or IIa (Class IIb immediately threatened limbs require emergent surgical revascularization or hybrid intervention; Class III irreversible dead limbs are contraindicated)",
  "imagingProtocolHi": "आपातकालीन डॉप्लर सोनोग्राफी अथवा सीटी एंजियोग्राफी थक्के के फैलाव का पता लगाने हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "थ्रोम्बोलाइज़िस के दौरान अतिरिक्त एंटीप्लेटलेट्स बंद रखी जाएं।",
    "anticoagulants": "सिस्टमिक हेपरिन को प्रोटोकॉल अनुसार कम डोज (500 IU/h) पर मॉनिटर करें।",
    "metformin": "तत्काल बंद।",
    "antihypertensives": "रक्तचाप < 160/90 mmHg बनाए रखें (मस्तिष्क में रक्तस्राव रोकने हेतु)।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन इन्फ्यूजन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "4 यूनिट पीआरबीसी, 4 यूनिट एफएफपी, एवं क्रायोप्रेसिपिटेट आरक्षित रखें (फाइब्रिनोजेन कम होने पर देने हेतु)।",
  "specialPrecautionsEn": [
    "Absolute contraindications ruled out: active internal bleeding, recent hemorrhagic stroke (< 3 months), recent major surgery/trauma (< 10 days), intracranial neoplasm",
    "Baseline coagulation status: Fibrinogen level (> 150 mg/dL), INR, aPTT, Platelet count (> 100,000/uL)"
  ],
  "specialPrecautionsHi": [
    "आईसीयू में हर 4-6 घंटे पर सीरम फाइब्रिनोजेन (Fibrinogen level) और हीमोग्लोबिन की अनिवार्य जांच।",
    "यदि फाइब्रिनोजेन < 150 mg/dL हो जाए तो tPA की गति कम करें या रोकें।"
  ]
},
  "ali-rotational-mechanical-thrombectomy-rotarex": {
  "id": "ali-rotational-mechanical-thrombectomy-rotarex",
  "procedureNameEn": "Acute Limb Ischemia: Percutaneous Rotational Mechanical Thrombectomy (Rotarex / Straub Medical)",
  "procedureNameHi": "रोटारेक्स मैकेनिकल थ्रोम्बेक्टॉमी (घूमने वाले कटर द्वारा पैर का थक्का काटकर बाहर निकालना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकालीन स्थिति में तुरंत NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "CTA or bedside duplex demonstrating occlusion length and absence of heavy circumferential calcification that could jam the rotational head",
  "imagingProtocolHi": "आपातकालीन एंजियोग्राफी या डॉप्लर।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन चालू।",
    "anticoagulants": "हेपरिन प्रक्रिया के दौरान दी जाएगी।",
    "metformin": "बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "हेमोलिसिस से गुर्दे की सुरक्षा हेतु प्रचुर आईवी सलाइन हाइड्रेशन और यूरिन का क्षारीकरण (Alkalinization)।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Vessel caliber >= 3.0 mm (Rotarex 6F requires vessel diameter >= 3.0 mm; 8F requires >= 5.0 mm)",
    "Platelet count > 60,000/uL, INR < 1.5"
  ],
  "specialPrecautionsHi": [
    "रोटारेक्स कैथेटर को हमेशा 0.018\" डेडिकेटेड गाइडवायर पर ही चलाना।",
    "प्रक्रिया पश्चात यूरिन का रंग और सीरम हीमोग्लोबिन की जांच।"
  ]
},
  "renal-artery-stenting-aras": {
  "id": "renal-artery-stenting-aras",
  "procedureNameEn": "Renal Artery Balloon Angioplasty and Stenting for Atherosclerotic Renal Artery Stenosis (ARAS) with Flash Pulmonary Edema",
  "procedureNameHi": "गुर्दे की धमनी की स्टेंटिंग (Renal Artery Stenting - अनियंत्रित बीपी व फेफड़ों में पानी भरने का उपचार)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Renal duplex ultrasound or CTA/MRA documenting ostial/proximal renal artery stenosis >= 70% and preserved renal pole-to-pole bipolar length >= 8.5-9.0 cm (to exclude end-stage atrophy)",
  "imagingProtocolHi": "सीटी/एमआर एंजियोग्राफी अथवा रीनल डॉप्लर सोनोग्राफी (Renal-Aortic Ratio > 3.5)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन व क्लोपिडोग्रेल लोडिंग डोज प्रक्रिया से पूर्व।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे पूर्व व पश्चात बंद।",
    "antihypertensives": "एसीई-इनहिबिटर (ACEi/ARB) प्रक्रिया के दिन रोकें; अन्य बीपी दवाएं चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "किडनी सुरक्षा हेतु नॉर्मल सलाइन ड्रिप 1 mL/kg/h प्रक्रिया से 6 घंटे पूर्व व 12 घंटे बाद।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Renal resistive index (RI) < 0.80 on duplex (RI > 0.80 correlates with irreversible parenchymal damage and poor revascularization response)",
    "Serum creatinine, eGFR, potassium, and baseline arterial blood pressure"
  ],
  "specialPrecautionsHi": [
    "न्यूनतम संभव कंट्रास्ट डाई का प्रयोग (संभव हो तो CO2 एंजियोग्राफी का उपयोग)।",
    "स्टेंट लगाते समय रीनल धमनी के मुहाने (Ostium) पर 1-2 मिमी का सटीक प्रोट्रूज़न।"
  ]
},
  "mesenteric-artery-stenting-cmi": {
  "id": "mesenteric-artery-stenting-cmi",
  "procedureNameEn": "Mesenteric Artery Stenting (SMA and Celiac Trunk) for Chronic Mesenteric Ischemia (Intestinal Angina)",
  "procedureNameHi": "आंतों की धमनी की स्टेंटिंग (Mesenteric Stenting - खाना खाने के बाद पेट में तेज दर्द का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Triphasic CT Angiography of Abdomen with sagittal reconstructions demonstrating sharp downward angulation of SMA/celiac takeoff, calcification extent, and mesenteric arcade collaterals (Arc of Riolan / Pancreaticoduodenal arches)",
  "imagingProtocolHi": "ट्राइफेसिक सीटी एंजियोग्राफी पेट की (लैट्रल व्यूज़ में सीलिएक व एसएमए के मुहाने की मैपिंग)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट दवाएं (DAPT) अनिवार्य।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Exclusion of active intra-abdominal malignancy or peptic ulcer disease via endoscopy",
    "Nutritional optimization, baseline renal function, and bleeding panel"
  ],
  "specialPrecautionsHi": [
    "लैट्रल प्रोजेक्शन (Lateral Fluoroscopy) में स्टेंट के मुहाने की 100% सटीक पोजीशनिंग।",
    "आपातकालीन कवर्ड स्टेंट की उपलब्धता।"
  ]
},
  "acute-sma-thromboembolism-aspiration-cdt": {
  "id": "acute-sma-thromboembolism-aspiration-cdt",
  "procedureNameEn": "Acute Superior Mesenteric Artery (SMA) Thromboembolism Percutaneous Aspiration Embolectomy and Catheter Thrombolysis",
  "procedureNameHi": "आंत की नस में अचानक थक्का जमने का आपातकालीन उपचार (Acute SMA Embolectomy - आंत सड़ने से बचाव)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकाल: तुरंत पूर्ण NPO और राइल्स ट्यूब सक्शन।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Urgent contrast CTA Abdomen demonstrating filling defect / abrupt cut-off in the mid-to-distal SMA (typically 3-8 cm distal to ostium, sparing the first jejunal branches in cardioembolic cases)",
  "imagingProtocolHi": "आपातकालीन सीटी एंजियोग्राफी (CTA Abdomen) आंतों की दीवार की मोटाई और थक्के की स्थिति जानने हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "आपातकालीन निर्णय।",
    "anticoagulants": "हेपरिन तुरंत शुरू की जाएगी।",
    "metformin": "तत्काल बंद।",
    "antihypertensives": "रक्तचाप व लैक्टेट की सघन निगरानी।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आक्रामक आईवी क्रिस्टलॉइड रिससिटेशन और एसिडोसिस का सुधार।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "4 यूनिट पीआरबीसी, 4 यूनिट एफएफपी आरक्षित रखें।",
  "specialPrecautionsEn": [
    "Absence of definitive signs of transmural bowel gangrene (no pneumatosis intestinalis, portomesenteric venous gas, or free intraperitoneal air requiring immediate laparotomy)",
    "Serum lactate level, arterial blood gas base deficit, and coagulation parameters"
  ],
  "specialPrecautionsHi": [
    "गैस्ट्रो-सर्जरी टीम को इमरजेंसी लैप्रोटोमी हेतु स्टैंडबाय पर रखना।",
    "प्रक्रिया पश्चात आईसीयू में पेट के कड़ेपन (Peritoneal Signs) और लैक्टेट की हर 2 घंटे पर जांच।"
  ]
},
  "innominate-artery-angioplasty-stenting": {
  "id": "innominate-artery-angioplasty-stenting",
  "procedureNameEn": "Innominate (Brachiocephalic) Artery Severe Stenosis / Occlusion Balloon Angioplasty and Covered Stenting",
  "procedureNameHi": "इनॉमिनेट धमनी की स्टेंटिंग (छाती से दाहिने हाथ व दिमाग की मुख्य नस की रुकावट खोलना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Arch CTA with cerebral angiographic circle of Willis reconstructions evaluating intracranial collateral pathways and vertebral artery flow direction",
  "imagingProtocolHi": "आर्च एओर्टोग्राफी और गर्दन व दिमाग की सीटी एंजियोग्राफी (CTA Arch & Brain)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट (DAPT) लोडिंग डोज अनिवार्य।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Carotid and vertebral duplex ultrasound showing flow reversal or dampened pulsatility in right common carotid and right vertebral arteries",
    "Baseline neurological assessment, platelet count, INR, and antiplatelet pre-loading"
  ],
  "specialPrecautionsHi": [
    "दाहिनी कैरोटिड धमनी में डिस्टल एम्बोलिक प्रोटेक्शन फिल्टर लगाना।",
    "प्रक्रिया के दौरान निरंतर न्यूरोलॉजिकल निगरानी।"
  ]
},
  "subclavian-stenosis-steal-syndrome-stenting": {
  "id": "subclavian-stenosis-steal-syndrome-stenting",
  "procedureNameEn": "Subclavian Artery Proximal Stenosis / Subclavian Steal Syndrome Balloon Angioplasty and Stenting",
  "procedureNameHi": "सबक्लेवियन स्टील सिंड्रोम स्टेंटिंग (हाथ हिलाने पर दिमाग का खून खिंचने व चक्कर आने का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Arch and head/neck CTA or duplex ultrasound demonstrating > 70% proximal subclavian stenosis proximal to the vertebral artery takeoff, and retrograde or alternating flow in the ipsilateral vertebral artery",
  "imagingProtocolHi": "आर्च व गर्दन की सीटी एंजियोग्राफी और वर्टिब्रल धमनी में उल्टे बहाव (Retrograde Flow) की डॉप्लर जांच।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन व क्लोपिडोग्रेल चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Upper extremity blood pressure differential (> 15-20 mmHg systolic difference between arms)",
    "Coagulation indices: INR < 1.4, Platelets > 80,000/uL; dual antiplatelet loading (Aspirin + Clopidogrel)"
  ],
  "specialPrecautionsHi": [
    "वर्टिब्रल धमनी के मुहाने (Vertebral Artery Ostium) की सुरक्षा सुनिश्चित करना।",
    "प्रक्रिया पश्चात दोनों हाथों के ब्लड प्रेशर की तुलनात्मक जांच।"
  ]
},
  "cfa-ivl-shockwave-dcb": {
  "id": "cfa-ivl-shockwave-dcb",
  "procedureNameEn": "Common Femoral Artery (CFA) Calcified Plaque Shockwave Intravascular Lithotripsy (IVL) and DCB Angioplasty",
  "procedureNameHi": "कॉमन फेमोरल धमनी की शॉकवेव लिथोट्रिप्सी (IVL) एवं डीसीबी (जांघ के जोड़ की नस में जमी पथरी को साउंड वेव से फोड़ना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "CTA or duplex ultrasound documenting circumferential or horseshoe calcification (calcium arc > 180-270 degrees, thickness > 1.5 mm) in the CFA trunk extending toward the superficial/profunda femoral bifurcation",
  "imagingProtocolHi": "सीटी एंजियोग्राफी अथवा डॉप्लर द्वारा कैल्शियम की गहराई व मोटाई की जांच।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट (DAPT) चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सलाइन ड्रिप 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Evaluation of contralateral crossover access route (since ipsilateral CFA puncture is precluded by lesion)",
    "Baseline ABI, renal panel, and bleeding parameters"
  ],
  "specialPrecautionsHi": [
    "शॉकवेव पल्स (प्रति साइकिल 30 पल्स, कुल 120-300 पल्स) का सटीक वितरण।",
    "दवायुक्त गुब्बारे को कम से कम 2 मिनट तक इन्फ्लेट रखना।"
  ]
},
  "femoral-pseudoaneurysm-thrombin-injection": {
  "id": "femoral-pseudoaneurysm-thrombin-injection",
  "procedureNameEn": "External Iliac / Common Femoral Artery Iatrogenic Pseudoaneurysm Percutaneous US-Guided Thrombin Injection",
  "procedureNameHi": "जांघ के स्यूडोएन्यूरिज्म में थ्रॉम्बिन इंजेक्शन (नस के रिसाव वाले खून के गोले को सुई द्वारा जमाना)",
  "fastingHoursSolid": 4,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 4 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 4 घंटे पूर्व ठोस भोजन न लें।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Color Doppler ultrasound confirming false aneurysm sac with classic \"yin-yang\" swirling color jet and identifying clear communicating neck connecting to native artery",
  "imagingProtocolHi": "कलर डॉप्लर सोनोग्राफी द्वारा स्यूडोएन्यूरिज्म की गर्दन (Neck Width) और मुख्य नस के बहाव की जांच।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एंटीप्लेटलेट्स बंद करने की आवश्यकता नहीं है।",
    "anticoagulants": "यदि मरीज हेपरिन या वारफारिन पर है तो भी प्रक्रिया सुरक्षित रूप से की जा सकती है।",
    "metformin": "कोई रोक नहीं (कंट्रास्ट डाई का प्रयोग नहीं होता)।",
    "antihypertensives": "नियमित दवाएं लें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सामान्य मौखिक या आईवी हाइड्रेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "आवश्यकता नहीं।",
  "specialPrecautionsEn": [
    "Measurement of pseudoaneurysm neck dimensions: neck length >= 3-5 mm and neck width (narrow neck is favorable; wide neck > 5-8 mm requires balloon protection during injection)",
    "Exclusion of active groin sepsis / infected pseudoaneurysm (infected pseudoaneurysms require open surgical debridement and arterial reconstruction)"
  ],
  "specialPrecautionsHi": [
    "सुई की नोक को स्यूडोएन्यूरिज्म की गर्दन से दूर थैली के केंद्र में रखना।",
    "इंजेक्शन के तुरंत बाद डॉप्लर पर मुख्य फेमोरल धमनी के खुले रहने और पैर की नाड़ी की पुष्टि।"
  ]
},
  "femoral-pseudoaneurysm-covered-stent": {
  "id": "femoral-pseudoaneurysm-covered-stent",
  "procedureNameEn": "Femoral Pseudoaneurysm Neck Covered Stent-Graft Exclusion",
  "procedureNameHi": "जांघ के स्यूडोएन्यूरिज्म में कवर्ड स्टेंट लगाना (फटी हुई नस के मुहाने को अंदर से सील करना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "CTA or duplex ultrasound defining pseudoaneurysm neck origin in relation to CFA bifurcation and inguinal ligament",
  "imagingProtocolHi": "सीटी एंजियोग्राफी अथवा डॉप्लर द्वारा छेद के आकार और प्रोफ़न्डा फेमोरिस की दूरी की जांच।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट (DAPT) अनिवार्य रूप से शुरू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी आरक्षित।",
  "specialPrecautionsEn": [
    "Distal landing zone caliber in superficial femoral or external iliac artery (minimum 5-6 mm) ensuring that covering the neck will not sacrifice an essential profunda femoris artery",
    "Coagulation status, baseline hemoglobin/hematocrit, and blood group crossmatching"
  ],
  "specialPrecautionsHi": [
    "कवर्ड स्टेंट का सटीक आकार चुनना ताकि प्रोफ़न्डा फेमोरिस का मुहाना न ढके।"
  ]
},
  "popliteal-artery-entrapment-provocation-planning": {
  "id": "popliteal-artery-entrapment-provocation-planning",
  "procedureNameEn": "Popliteal Artery Entrapment Syndrome (PAES) Diagnostic Dynamic Provocation Angiography and Endovascular Planning",
  "procedureNameHi": "पॉपलीटील आर्टरी एंट्रैपमेंट डायग्नोस्टिक प्रोवोकेशन एंजियोग्राफी (घुटने की नस दबने की विशेष जांच)",
  "fastingHoursSolid": 4,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 4 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 4 घंटे पूर्व हल्का भोजन न लें।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Duplex ultrasound demonstrating loss of popliteal artery Doppler flow during sustained active plantarflexion against resistance",
  "imagingProtocolHi": "डायनामिक डॉप्लर एवं डायनामिक सीटी/एमआर एंजियोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू रख सकते हैं।",
    "anticoagulants": "मानक नियम।",
    "metformin": "प्रक्रिया के दिन बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सामान्य हाइड्रेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "आवश्यकता नहीं।",
  "specialPrecautionsEn": [
    "MRI / MRA of the knee joint delineating gastrocnemius muscle belly anatomy and popliteal neurovascular bundle course",
    "Baseline pedal pulses, ABI at rest and post-exercise"
  ],
  "specialPrecautionsHi": [
    "मरीज को प्रोवोकेशन मूवमेंट (पंजे का खिंचाव) पहले से समझाना।"
  ]
},
  "upper-extremity-digital-ischemia-angioplasty": {
  "id": "upper-extremity-digital-ischemia-angioplasty",
  "procedureNameEn": "Upper Extremity Digital Ischemia: Brachial-Radial-Ulnar Runoff Balloon Angioplasty",
  "procedureNameHi": "हाथ व उंगलियों की नसों की एंजियोप्लास्टी (हाथ की उंगलियों में कालापन व दर्द का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "High-resolution upper extremity duplex or CTA confirming patency of subclavian and axillary inflow and identifying focal or diffuse forearm/palmar occlusions",
  "imagingProtocolHi": "हाथ की सीटी एंजियोग्राफी अथवा हाई-रिज़ॉल्यूशन डीएसए।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन व क्लोपिडोग्रेल चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Palmar arch evaluation via Allen test and duplex Doppler",
    "Coagulation parameters: INR < 1.4, Platelets > 80,000/uL"
  ],
  "specialPrecautionsHi": [
    "नस की ऐंठन रोकने हेतु आईए नाइट्रोग्लिसरीन, वेरापामिल या डिल्टियाज़ेम तैयार रखना।"
  ]
},
  "endovascular-foreign-body-snare-retrieval": {
  "id": "endovascular-foreign-body-snare-retrieval",
  "procedureNameEn": "Endovascular Retrieval of Sheared / Fractured Peripheral Guidewire or Balloon Catheter",
  "procedureNameHi": "नस के अंदर टूटे हुए तार या कैथेटर को फंदे (स्नेयर) द्वारा बाहर निकालना",
  "fastingHoursSolid": 4,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 4 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकाल अनुसार NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Immediate biplane fluoroscopic localization of foreign body: identification of proximal and distal ends, orientation, and relationship to branch takeoffs",
  "imagingProtocolHi": "एक्स-रे व फ्लोरोस्कोपी द्वारा टूटे हुए टुकड़े की सटीक स्थिति का निर्धारण।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू रख सकते हैं।",
    "anticoagulants": "हेपरिन प्रक्रिया के दौरान दी जाएगी।",
    "metformin": "स्थिति अनुसार।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सामान्य हाइड्रेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Assessment of vessel caliber housing the fragment",
    "Maintenance of full systemic anticoagulation (ACT > 250s) to prevent thrombus formation around the retained intravascular hardware"
  ],
  "specialPrecautionsHi": [
    "विभिन्न आकारों के स्नेयर (Amplatz Goose Neck Snare 5-35 मिमी) तैयार रखना।"
  ]
},
  "retroperitoneal-hemorrhage-balloon-tamponade-coiling": {
  "id": "retroperitoneal-hemorrhage-balloon-tamponade-coiling",
  "procedureNameEn": "Retroperitoneal Hemorrhage Control: Internal Iliac Artery Balloon Tamponade and Coil Embolization",
  "procedureNameHi": "पेट के पीछे भारी रक्तस्राव पर बैलून द्वारा तत्काल रोक व कोइलिंग (जीवन रक्षक एम्बोलाइजेशन)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकाल: तुरंत NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Emergency CTA Abdomen-Pelvis demonstrating contrast extravasation into retroperitoneum or pelvis, or acute intra-procedural hemodynamic collapse following high puncture/sheath manipulation",
  "imagingProtocolHi": "आपातकालीन सीटीएंजियोग्राफी अथवा डायरेक्ट डिजिटल सबट्रैक्शन एंजियोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "तत्काल प्रभाव से रोकें।",
    "anticoagulants": "एंटीकोआगुलेशन तुरंत रिवर्स की जाए (Protamine/PCC)।",
    "metformin": "बंद।",
    "antihypertensives": "शॉक का प्रबंधन; आईवी फ्लुइड्स व इनोट्रोप्स।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आक्रामक आईवी रिससिटेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "4-6 यूनिट पीआरबीसी, 4 यूनिट एफएफपी, प्लेटलेट्स तुरंत मंगवाएं।",
  "specialPrecautionsEn": [
    "Massive transfusion protocol (MTP) activated: PRBCs, FFP, Platelets, Cryoprecipitate",
    "Emergency access to fluoroscopy suite or hybrid operating room"
  ],
  "specialPrecautionsHi": [
    "कंप्लायंट ऑक्लूजन बैलून पहले से तैयार रखना।",
    "प्रक्रिया पश्चात आईसीयू में हीमोग्लोबिन और वाइटल्स की प्रति 15 मिनट पर निगरानी।"
  ]
},
  "radial-artery-pseudoaneurysm-thrombin-injection": {
  "id": "radial-artery-pseudoaneurysm-thrombin-injection",
  "procedureNameEn": "Radial Artery Pseudoaneurysm Post-Coronary / Neuro Intervention Ultrasound-Guided Compression and Thrombin Injection",
  "procedureNameHi": "कलाई की नस के स्यूडोएन्यूरिज्म का थ्रॉम्बिन इंजेक्शन उपचार (हाथ के खून के गोले को जमाना)",
  "fastingHoursSolid": 2,
  "fastingHoursLiquid": 1,
  "npoInstructionsEn": "Strict NPO for solids for at least 2 hours prior to procedure; clear liquids permitted up to 1 hours before call time.",
  "npoInstructionsHi": "हल्का नाश्ता ले सकते हैं।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "High-resolution duplex ultrasound of the wrist confirming radial pseudoaneurysm sac, measurement of neck length/width, and patency of the ulnar artery",
  "imagingProtocolHi": "कलाई की कलर डॉप्लर सोनोग्राफी और एलन टेस्ट (Allen's Test)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू रख सकते हैं।",
    "anticoagulants": "दवाएं सामान्य रूप से चालू रखी जा सकती हैं।",
    "metformin": "कोई रोक नहीं।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सामान्य हाइड्रेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "आवश्यकता नहीं।",
  "specialPrecautionsEn": [
    "Modified Allen test or duplex confirmation of complete palmar arch flow supplied by the ulnar artery",
    "Exclusion of infected pseudoaneurysm / suppurative thrombophlebitis"
  ],
  "specialPrecautionsHi": [
    "हाथ की उंगलियों की नाड़ी (Ulnar & Palmar arch) की डॉप्लर पुष्टि।"
  ]
},
  "bae-massive-hemoptysis": {
  "id": "bae-massive-hemoptysis",
  "procedureNameEn": "Bronchial Artery Embolization (BAE) for Massive Hemoptysis",
  "procedureNameHi": "ब्रोंकियल आर्टीरियल एम्बोलाइजेशन (बीएई / फेफड़े से खून की उल्टी रोकने हेतु नस बंदी)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकाल: तुरंत NPO; सांस की नली में खून जाने पर तुरंत सक्शन।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "CT Angiography of Thorax (CTA chest) to map hypertrophied bronchial and non-bronchial systemic arteries",
  "imagingProtocolHi": "छाती की आपातकालीन सीटी एंजियोग्राफी (CTA Chest) ब्रोन्कियल धमनियों की मैपिंग हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "स्थिति अनुसार।",
    "anticoagulants": "एंटीकोआगुलेशन तुरंत रोकी जाए।",
    "metformin": "प्रक्रिया के दिन बंद।",
    "antihypertensives": "रक्तचाप नियंत्रित रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन इन्फ्यूजन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी क्रॉस-मैच तैयार।",
  "specialPrecautionsEn": [
    "Endotracheal intubation with double-lumen tube or bronchial blocker if airway compromise exists",
    "Coagulation profile: INR < 1.5, Platelets > 50,000/uL, Serum Creatinine < 1.5 mg/dL"
  ],
  "specialPrecautionsHi": [
    "स्पाइनल आर्टरी (Hairpin Loop of Adamkiewicz) की फ्लोरोस्कोपी पर अनिवार्य गहन जांच।",
    "सक्शन उपकरण और आपातकालीन एयरवे/इंट्यूबेशन बैकअप तैयार।"
  ]
},
  "nbsa-embolization-recurrent-hemoptysis": {
  "id": "nbsa-embolization-recurrent-hemoptysis",
  "procedureNameEn": "Non-Bronchial Systemic Arterial (NBSA) Embolization for Recurrent Hemoptysis",
  "procedureNameHi": "नॉन-ब्रोंकियल सिस्टमिक आर्टरी एम्बोलाइजेशन (NBSA - फेफड़े के बाहर की अतिरिक्त नसों की बंदी)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Multidetector CT Angiography with systemic collateral reconstruction (subclavian, internal thoracic, intercostal branches)",
  "imagingProtocolHi": "सीटी एंजियोग्राफी छाती की दीवार के सिस्टमिक कोलेटरल्स की जांच हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू या बंद स्थिति अनुसार।",
    "anticoagulants": "वारफारिन/DOAC बंद।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी हाइड्रेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी।",
  "specialPrecautionsEn": [
    "Platelet count > 50,000/uL, INR < 1.5, Serum Creatinine < 1.5 mg/dL",
    "Cardiopulmonary stabilization and supplemental oxygenation"
  ],
  "specialPrecautionsHi": [
    "इंटरकोस्टल धमनियों से निकलने वाली स्पाइनल शाखाओं की सूक्ष्म पहचान।"
  ]
},
  "rasmussen-pa-embolization": {
  "id": "rasmussen-pa-embolization",
  "procedureNameEn": "Pulmonary Artery Pseudoaneurysm (Rasmussen Aneurysm) Embolization",
  "procedureNameHi": "रासमुसेन एन्यूरिज्म एम्बोलाइजेशन (टीबी की कैविटी में फेफड़े की पल्मोनरी धमनी का फटना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकाल: तुरंत NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "CT Pulmonary Angiography (CTPA) documenting exact lobar/segmental branch and aneurysm diameter",
  "imagingProtocolHi": "आपातकालीन सीटी पल्मोनरी एंजियोग्राफी (CTPA)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "बंद।",
    "anticoagulants": "तुरंत रोकें और रिवर्स करें।",
    "metformin": "बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "4 यूनिट पीआरबीसी क्रॉस-मैच।",
  "specialPrecautionsEn": [
    "Hemodynamic monitoring; access to blood products and rapid infusor",
    "INR < 1.6, Platelet count > 50,000/uL"
  ],
  "specialPrecautionsHi": [
    "वेनस एक्सेस (जांघ की शिरा) द्वारा पल्मोनरी कैथेटराइजेशन की तैयारी।",
    "डिटैचेबल कॉइल्स और वैस्कुलर प्लग की उपलब्धता।"
  ]
},
  "lga-embolization-peptic-ulcer": {
  "id": "lga-embolization-peptic-ulcer",
  "procedureNameEn": "Upper GI Bleed: Left Gastric Artery (LGA) Coil & Gelfoam Embolization",
  "procedureNameHi": "आमाशय के अल्सर से भारी रक्तस्राव की नस बंदी (LGA Embolization - खून की उल्टी का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकाल: तुरंत NPO और राइल्स ट्यूब एस्पिरेशन।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Upper gastrointestinal endoscopy report detailing ulcer location and failed intervention",
  "imagingProtocolHi": "आपातकालीन सीटीए एब्डॉमिन अथवा डायरेक्ट एंजियोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "अस्थायी रूप से रोकी जाएं।",
    "anticoagulants": "तत्काल प्रभाव से बंद और रिवर्स।",
    "metformin": "प्रक्रिया के दिन बंद।",
    "antihypertensives": "शॉक प्रबंधन; पीपीआई (PPI) का हाई-डोज आईवी इन्फ्यूजन जारी रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी क्रिस्टलॉइड व ब्लड रिससिटेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2-4 यूनिट पीआरबीसी, 2 यूनिट एफएफपी आरक्षित।",
  "specialPrecautionsEn": [
    "Active resuscitation: crossmatched packed red cells, correction of coagulopathy",
    "Hemoglobin, platelet count, INR, renal function panel"
  ],
  "specialPrecautionsHi": [
    "माइक्रोकैथेटर द्वारा सुपरसिलेक्टिव एम्बोलाइजेशन ताकि सामान्य पेट सुरक्षित रहे।"
  ]
},
  "gda-sandwich-embolization": {
  "id": "gda-sandwich-embolization",
  "procedureNameEn": "Upper GI Bleed: Gastroduodenal Artery (GDA) Sandwich Coil Embolization",
  "procedureNameHi": "गैस्ट्रोडुओडनल धमनी की 'सैंडविच' कोइलिंग (GDA Sandwich Coiling - आंत के अल्सर से रक्तस्राव की रोक)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "तुरंत NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Urgent endoscopy confirming posterior bulbar duodenal ulceration",
  "imagingProtocolHi": "सीटी एंजियोग्राफी पेट की।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "रोकी जाएं।",
    "anticoagulants": "रिवर्स करें।",
    "metformin": "बंद।",
    "antihypertensives": "आईवी पीपीआई इन्फ्यूजन।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन रिससिटेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2-4 यूनिट पीआरबीसी।",
  "specialPrecautionsEn": [
    "Active hemodynamic resuscitation and ongoing blood transfusion",
    "Baseline INR, Platelets, Creatinine"
  ],
  "specialPrecautionsHi": [
    "सैंडविच तकनीक अनिवार्य: पहले दूर का सिरा बंद करना, फिर मुख्य नस का सिरा।"
  ]
},
  "right-short-gastric-embolization": {
  "id": "right-short-gastric-embolization",
  "procedureNameEn": "Upper GI Bleed: Right Gastric / Short Gastric Artery Microcoil Embolization",
  "procedureNameHi": "राइट गैस्ट्रिक व शॉर्ट गैस्ट्रिक धमनी एम्बोलाइजेशन (आमाशय की शाखाओं की सूक्ष्म कोइलिंग)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Endoscopic visualization of bleeding pyloric channel or gastric fundus ulcer",
  "imagingProtocolHi": "सीटी एंजियोग्राफी पेट।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "स्थिति अनुसार।",
    "anticoagulants": "रिवर्स।",
    "metformin": "बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी फ्लुइड्स।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी।",
  "specialPrecautionsEn": [
    "Hemodynamic resuscitation, coagulopathy workup (INR, Platelets)",
    "Contrast-enhanced multiphasic CT abdomen detailing vascular variants"
  ],
  "specialPrecautionsHi": [
    "सुपर-सिलेक्टिव माइक्रोकैथेटर नैविगेशन।"
  ]
},
  "lgib-colic-microcoil-embolization": {
  "id": "lgib-colic-microcoil-embolization",
  "procedureNameEn": "Lower GI Bleed: Superselective Colic Branch Microcoil Embolization",
  "procedureNameHi": "बड़ी आंत से भारी रक्तस्राव की सुपरसिलेक्टिव कोइलिंग (Lower GI Bleed - मलाशय से खून आने का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "तुरंत NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Positive CT Mesenteric Angiogram showing active extravasation rate >= 0.3-0.5 mL/min",
  "imagingProtocolHi": "आपातकालीन ट्राइफेसिक सीटी एंजियोग्राफी (CTA Abdomen & Pelvis) ब्लीडिंग पॉइंट की पहचान हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "अस्थायी रूप से बंद।",
    "anticoagulants": "तत्काल बंद और रिवर्सल।",
    "metformin": "बंद।",
    "antihypertensives": "आईवी सपोर्ट।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन व ब्लड ट्रांसफ्यूजन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2-4 यूनिट पीआरबीसी तैयार।",
  "specialPrecautionsEn": [
    "Correction of severe coagulopathy (INR < 1.6, Platelets > 50,000/uL)",
    "Rapid crystalloid/blood product resuscitation"
  ],
  "specialPrecautionsHi": [
    "कणों (Particles) के प्रयोग से सख्त परहेज - केवल और केवल सुपरसिलेक्टिव माइक्रोकॉइल्स का उपयोग (आंत सड़ने से बचाने हेतु)।"
  ]
},
  "sra-embolization-rectal-bleed": {
  "id": "sra-embolization-rectal-bleed",
  "procedureNameEn": "Lower GI Bleed: Superior Rectal Artery (SRA) Microcoil Embolization",
  "procedureNameHi": "सुपीरियर रेक्टल धमनी की कोइलिंग (SRA Embolization - मलाशय से ब्लीडिंग व बवासीर की आधुनिक नस बंदी)",
  "fastingHoursSolid": 4,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 4 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 4 घंटे पूर्व हल्का भोजन रोकें।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Rigid or flexible sigmoidoscopy documenting bleeding origin from upper/mid rectum",
  "imagingProtocolHi": "सीटी एंजियोग्राफी अथवा सिग्मायडोस्कोपी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "स्थिति अनुसार।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सामान्य हाइड्रेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Multiphasic pelvic CTA showing SRA hypertrophy or contrast pooling",
    "Serum Creatinine, Platelet count, Prothrombin Time"
  ],
  "specialPrecautionsHi": [
    "मलाशय के दोहरे रक्त प्रवाह (Middle/Inferior Rectal) का मूल्यांकन।"
  ]
},
  "trauma-pelvic-fracture-embolization": {
  "id": "trauma-pelvic-fracture-embolization",
  "procedureNameEn": "Trauma: Pelvic Fracture Hemodynamic Instability Gelfoam Slurry Embolization",
  "procedureNameHi": "पेल्विक फ्रैक्चर में जानलेवा रक्तस्राव की आपातकालीन एम्बोलाइजेशन (कूल्हे की हड्डी टूटने पर नस बंदी)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकाल: तुरंत NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Implementation of Massive Transfusion Protocol (MTP: 1:1:1 PRBC, FFP, Platelets)",
  "imagingProtocolHi": "आपातकालीन ट्रॉमा सीटी स्कैन (Trauma Whole Body CTA) पेल्विक हेमाटोमा हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "तुरंत रोकें।",
    "anticoagulants": "तत्काल रिवर्स करें।",
    "metformin": "बंद।",
    "antihypertensives": "शॉक रिससिटेशन, वैसोप्रेसर्स।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "मैसिव ट्रांसफ्यूजन प्रोटोकॉल (MTP)।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "4-6 यूनिट पीआरबीसी, 4 यूनिट एफएफपी, प्लेटलेट्स तत्काल मंगवाएं।",
  "specialPrecautionsEn": [
    "Pelvic binder or external fixator applied to stabilize osseous ring",
    "Rule out associated intra-thoracic or intra-peritoneal surgical hemorrhage (e-FAST / CT)"
  ],
  "specialPrecautionsHi": [
    "जेलफोम स्लरी को सावधानीपूर्वक इंजेक्ट करना ताकि एक्सटर्नल इलिएक में रिफ्लक्स न हो।"
  ]
},
  "trauma-superselective-pelvic-branch-embolization": {
  "id": "trauma-superselective-pelvic-branch-embolization",
  "procedureNameEn": "Trauma: Superselective Internal Pudendal / Obturator / Superior Gluteal Artery Microcoil Embolization",
  "procedureNameHi": "पेल्विक ट्रॉमा सुपरसिलेक्टिव ब्रांच कोइलिंग (कूल्हे की विशिष्ट खून बहाने वाली नस की सूक्ष्म बंदी)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "High-resolution trauma pelvic CTA showing precise isolated arterial bleeding focus",
  "imagingProtocolHi": "ट्रॉमा सीटी एंजियोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "बंद।",
    "anticoagulants": "रिवर्स।",
    "metformin": "बंद।",
    "antihypertensives": "रिससिटेशन।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी फ्लुइड्स व ब्लड।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "2-4 यूनिट पीआरबीसी।",
  "specialPrecautionsEn": [
    "Patient resuscitated to MAP > 65 mmHg",
    "Coagulation parameters optimized with blood components"
  ],
  "specialPrecautionsHi": [
    "माइक्रोकैथेटर और डिटैचेबल कॉइल्स तैयार रखना।"
  ]
},
  "trauma-proximal-splenic-artery-embolization": {
  "id": "trauma-proximal-splenic-artery-embolization",
  "procedureNameEn": "Trauma: High-Grade Splenic Laceration Proximal Splenic Artery Embolization (Plug / Coils)",
  "procedureNameHi": "तिल्ली (प्लीहा) की चोट पर प्रॉक्सिमल स्प्लेनिक धमनी एम्बोलाइजेशन (तिल्ली को कटने से बचाना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकाल: तुरंत NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Triphasic CT Abdomen confirming high-grade splenic laceration and grading hemoperitoneum",
  "imagingProtocolHi": "आपातकालीन सीटी स्कैन पेट (Contrast CT Abdomen) तिल्ली की चोट की ग्रेडिंग हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "बंद।",
    "anticoagulants": "रिवर्स करें।",
    "metformin": "बंद।",
    "antihypertensives": "वाइटल्स सपोर्ट।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "2-4 यूनिट पीआरबीसी तैयार।",
  "specialPrecautionsEn": [
    "Absence of peritonitis or other indication for emergent laparotomy",
    "Coagulation profile, Crossmatched blood availability"
  ],
  "specialPrecautionsHi": [
    "प्लग को डोर्सल पैनक्रिएटिक धमनी के बाद स्थापित करना ताकि प्लीहा का कोलेटरल फ्लो बना रहे।"
  ]
},
  "trauma-distal-splenic-microcoil-embolization": {
  "id": "trauma-distal-splenic-microcoil-embolization",
  "procedureNameEn": "Trauma: Splenic Parenchymal Pseudoaneurysm Superselective Distal Microcoil Embolization",
  "procedureNameHi": "तिल्ली के स्यूडोएन्यूरिज्म की डिस्टल माइक्रोकोइलिंग (तिल्ली के घाव की सुपरसिलेक्टिव नस बंदी)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Contrast-enhanced abdominal CT mapping exact segmental branch feeding the pseudoaneurysm",
  "imagingProtocolHi": "सीटी पेट।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "बंद।",
    "anticoagulants": "रिवर्स।",
    "metformin": "बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी फ्लुइड्स।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी।",
  "specialPrecautionsEn": [
    "Hemoglobin and hematocrit monitoring",
    "Platelet count > 50,000/uL, INR < 1.5"
  ],
  "specialPrecautionsHi": [
    "सुपरसिलेक्टिव माइक्रोकॉइल्स का सटीक प्लेसमेंट।"
  ]
},
  "trauma-hepatic-bleeding-embolization": {
  "id": "trauma-hepatic-bleeding-embolization",
  "procedureNameEn": "Trauma: Hepatic Parenchymal Bleeding & Pseudoaneurysm Microcoil / Liquid Embolization",
  "procedureNameHi": "लिवर की चोट व रक्तस्राव की एम्बोलाइजेशन (लिवर फटने पर आपातकालीन नस बंदी)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकाल: तुरंत NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Trauma CT Abdomen documenting liver segment involvement (Couinaud segments) and vascular leaks",
  "imagingProtocolHi": "आपातकालीन ट्राइफेसिक सीटी पेट।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "बंद।",
    "anticoagulants": "रिवर्स।",
    "metformin": "बंद।",
    "antihypertensives": "सपोर्ट।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन व ब्लड ट्रांसफ्यूजन।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "4 यूनिट पीआरबीसी, 2 यूनिट एफएफपी तैयार।",
  "specialPrecautionsEn": [
    "Coagulation optimization and blood transfusion in progress",
    "Confirm patency of the portal vein (critical: hepatic arterial embolization requires an intact portal venous inflow to prevent massive hepatic necrosis)"
  ],
  "specialPrecautionsHi": [
    "पोर्टल वेन के खुले रहने (Patent Portal Vein) की प्रक्रिया से पूर्व पुष्टि अनिवार्य।"
  ]
},
  "trauma-renal-artery-embolization": {
  "id": "trauma-renal-artery-embolization",
  "procedureNameEn": "Trauma: Renal Artery Pseudoaneurysm / Active Extravasation Superselective Microcoil Embolization",
  "procedureNameHi": "गुर्दे की चोट व रक्तस्राव की सुपरसिलेक्टिव एम्बोलाइजेशन (गुर्दा फटने पर नस बंदी)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Contrast CT Abdomen/Pelvis demonstrating Grade III-IV renal laceration and vascular blush",
  "imagingProtocolHi": "सीटी यूरो एंजियोग्राफी (CTA Abdomen with Delayed Phase)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "बंद।",
    "anticoagulants": "रिवर्स।",
    "metformin": "बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी।",
  "specialPrecautionsEn": [
    "Baseline Serum Creatinine, eGFR, Complete Blood Count, Coagulation Screen",
    "Confirm existence and functional status of contralateral normal kidney"
  ],
  "specialPrecautionsHi": [
    "अत्यंत सुपर-सिलेक्टिव तकनीक ताकि केवल घायल शाखा बंद हो, मुख्य गुर्दा नहीं।"
  ]
},
  "pph-covered-stenting-viabahn": {
  "id": "pph-covered-stenting-viabahn",
  "procedureNameEn": "Post-Pancreatectomy Hemorrhage (PPH): Hepatic / Gastroduodenal Stump Covered Stenting (Viabahn)",
  "procedureNameHi": "व्हिपल ऑपरेशन के बाद रक्तस्राव पर कवर्ड स्टेंट लगाना (PPH Viabahn Stenting - जानलेवा ब्लीडिंग का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकाल: तुरंत NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Emergency multiphasic CT Angiogram showing pseudoaneurysm at CHA or GDA stump near surgical clips",
  "imagingProtocolHi": "आपातकालीन सीटी एंजियोग्राफी पेट।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "स्थिति अनुसार।",
    "anticoagulants": "रिवर्स।",
    "metformin": "बंद।",
    "antihypertensives": "सपोर्ट।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी रिससिटेशन।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "4 यूनिट पीआरबीसी, 4 यूनिट एफएफपी।",
  "specialPrecautionsEn": [
    "Hemodynamic resuscitation; correction of coagulopathy",
    "Vascular access planning for 6F - 7F sheath required for stent-graft delivery"
  ],
  "specialPrecautionsHi": [
    "कवर्ड स्टेंट के आकार का सटीक चयन ताकि लिवर को जाने वाला खून न रुके।"
  ]
},
  "pph-coil-isolation-thrombin": {
  "id": "pph-coil-isolation-thrombin",
  "procedureNameEn": "Post-Pancreatectomy Hemorrhage: Pseudoaneurysm Coil Isolation & Percutaneous / Transcatheter Thrombin Injection",
  "procedureNameHi": "अग्न्याशय ऑपरेशन पश्चात स्यूडोएन्यूरिज्म का कोइलिंग व थ्रॉम्बिन उपचार",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "CT angiogram detailing precise anatomical neck and inflow/outflow of the pseudoaneurysm",
  "imagingProtocolHi": "सीटी एंजियोग्राफी पेट।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "बंद।",
    "anticoagulants": "रिवर्स।",
    "metformin": "बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी।",
  "specialPrecautionsEn": [
    "Patient resuscitated to tolerate endovascular / percutaneous procedure",
    "INR < 1.6, Platelets > 50,000/uL"
  ],
  "specialPrecautionsHi": [
    "स्यूडोएन्यूरिज्म की थैली के अंदर थ्रॉम्बिन की अत्यंत धीमी डिलीवरी।"
  ]
},
  "splenic-aneurysm-covered-stent": {
  "id": "splenic-aneurysm-covered-stent",
  "procedureNameEn": "Splenic Artery Aneurysm (SAA): Endovascular Covered Stent-Graft Exclusion",
  "procedureNameHi": "तिल्ली की धमनी के एन्यूरिज्म का कवर्ड स्टेंट द्वारा उपचार (SAA Viabahn Exclusion)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "High-resolution CT Angiography measuring proximal/distal landing zone lengths and inner luminal diameters",
  "imagingProtocolHi": "सीटी एंजियोग्राफी पेट (तिल्ली की नस के घुमाव और लैंडिंग ज़ोन का मापन)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन व क्लोपिडोग्रेल चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Assessment of vessel tortuosity (splenic artery \"corkscrew\" loop evaluation)",
    "Cardiovascular assessment, INR, Platelets, Creatinine"
  ],
  "specialPrecautionsHi": [
    "गाइडिंग शीथ का पर्याप्त सपोर्ट और लचीले स्टेंट का चयन।"
  ]
},
  "splenic-aneurysm-sac-packing-onyx": {
  "id": "splenic-aneurysm-sac-packing-onyx",
  "procedureNameEn": "Splenic Artery Aneurysm (SAA): Sac Packing with Detachable Coils & Onyx / Thrombin",
  "procedureNameHi": "तिल्ली के एन्यूरिज्म की छल्लों व ऑनिक्स लिक्विड द्वारा पैकिंग (SAA Sac Packing)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "3D volume-rendered CT Angiography to characterize sac dimensions, neck width, and branch origins",
  "imagingProtocolHi": "सीटी एंजियोग्राफी पेट।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "स्थिति अनुसार।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Renal profile, Baseline coagulation status",
    "Consent regarding potential risk of partial splenic infarction"
  ],
  "specialPrecautionsHi": [
    "डीएमएसओ-कंपैटिबल माइक्रोकैथेटर का प्रयोग।"
  ]
},
  "renal-artery-aneurysm-stent-assisted-coiling": {
  "id": "renal-artery-aneurysm-stent-assisted-coiling",
  "procedureNameEn": "Renal Artery Aneurysm (RAA): Stent-Assisted Coiling at Main Renal Bifurcation",
  "procedureNameHi": "गुर्दे की धमनी के एन्यूरिज्म की स्टेंट-असिस्टेड कोइलिंग (गुर्दा बचाते हुए थैली में छल्ले डालना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "High-resolution CT Angiography with multiplanar reformation to evaluate bifurcation angle and segmental branches",
  "imagingProtocolHi": "हाई-रिज़ॉल्यूशन सीटी एंजियोग्राफी 3D रीकंस्ट्रक्शन सहित।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट (DAPT) लोडिंग अनिवार्य।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "किडनी सुरक्षा हेतु नॉर्मल सलाइन ड्रिप 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Dual antiplatelet therapy (DAPT: Aspirin 75 mg + Clopidogrel 75 mg) started 3-5 days pre-procedure",
    "Baseline Renal function (Serum Creatinine, eGFR) and coagulation profile"
  ],
  "specialPrecautionsHi": [
    "इंट्राक्रैनियल-ग्रेड सेल्फ-एक्सपैंडिंग स्टेंट (LVIS/Enterprise/Neuroform) और 3D डिटैचेबल कॉइल्स की उपलब्धता।"
  ]
},
  "renal-pseudoaneurysm-post-pcnl-nephrectomy": {
  "id": "renal-pseudoaneurysm-post-pcnl-nephrectomy",
  "procedureNameEn": "Renal Artery Pseudoaneurysm Post-Partial Nephrectomy / PCNL Superselective Microcoil Embolization",
  "procedureNameHi": "गुर्दे की पथरी सर्जरी (PCNL) के बाद पेशाब में खून आने पर सुपरसिलेक्टिव कोइलिंग",
  "fastingHoursSolid": 4,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 4 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 4 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Renal CTA documenting exact branch injury and exclusion of collect-system transection",
  "imagingProtocolHi": "सीटी एंजियोग्राफी पेट अथवा डायरेक्ट एंजियोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "स्थिति अनुसार।",
    "anticoagulants": "रिवर्स करें।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन ड्रिप।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी तैयार।",
  "specialPrecautionsEn": [
    "Pre-procedure Hb, Platelet count, INR, Serum Creatinine",
    "Urinary bladder catheterization to prevent clot retention"
  ],
  "specialPrecautionsHi": [
    "सुपर-सिलेक्टिव माइक्रोकॉइलिंग ताकि सामान्य गुर्दा पूर्णतः सुरक्षित रहे।"
  ]
},
  "uae-primary-pph-gelfoam": {
  "id": "uae-primary-pph-gelfoam",
  "procedureNameEn": "Uterine Artery Embolization (UAE) for Primary Postpartum Hemorrhage (PPH) with Gelfoam Slurry",
  "procedureNameHi": "प्रसव के बाद भारी रक्तस्राव पर बच्चेदानी की नस बंदी (PPH UAE - प्रसूता की जान व बच्चेदानी बचाना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकाल: तुरंत NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Activation of massive obstetric hemorrhage protocol; ongoing transfusion of packed cells, FFP, cryoprecipitate, platelets",
  "imagingProtocolHi": "क्लिनिकल व अल्ट्रासाउंड असेसमेंट।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "लागू नहीं।",
    "anticoagulants": "रिवर्सल यदि चालू थी।",
    "metformin": "लागू नहीं।",
    "antihypertensives": "वाइटल्स व शॉक का प्रबंधन।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "मैसिव ब्लड व क्रिस्टलॉइड रिससिटेशन।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "4 यूनिट पीआरबीसी, 4 यूनिट एफएफपी तुरंत उपलब्ध रखें।",
  "specialPrecautionsEn": [
    "Exclude retained products of conception and extensive uterine rupture requiring laparotomy",
    "Hemodynamic resuscitation to maintain SBP > 90 mmHg"
  ],
  "specialPrecautionsHi": [
    "दोनों तरफ की यूटेराइन धमनियों का अनिवार्य एम्बोलाइजेशन।",
    "ओवेरियन कोलेटरल्स की जांच यदि ब्लीडिंग बनी रहे।"
  ]
},
  "placenta-accreta-balloon-occlusion": {
  "id": "placenta-accreta-balloon-occlusion",
  "procedureNameEn": "Prophylactic Internal Iliac Artery Balloon Occlusion Catheters for Placenta Accreta Spectrum (PAS)",
  "procedureNameHi": "प्लेसेंटा एक्रेटा में बैलून कैथेटर लगाना (सिजेरियन के दौरान अत्यधिक ब्लीडिंग रोकने की पूर्व-तैयारी)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "सिजेरियन के मानक नियमानुसार 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Obstetric MRI / Color Doppler USG confirming Placenta Accreta / Increta / Percreta with bladder invasion assessment",
  "imagingProtocolHi": "एमआरआई पेल्विस एवं कलर डॉप्लर द्वारा प्लेसेंटा एक्रेटा की गहराई का निर्धारण।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "मानक प्रसूति नियम।",
    "anticoagulants": "LMWH डिलीवरी से 12-24 घंटे पूर्व बंद।",
    "metformin": "लागू नहीं।",
    "antihypertensives": "बीपी दवाएं चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन ड्रिप।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "4 यूनिट पीआरबीसी, 4 यूनिट एफएफपी, 1 एसडीपी आरक्षित रखें।",
  "specialPrecautionsEn": [
    "Multidisciplinary planning: Interventional Radiology, Obstetric Surgery, Gynecologic Oncology, Anesthesia, Neonatology",
    "Pre-procedure bilateral groin shaving and surgical draping in hybrid OR / Angio suite"
  ],
  "specialPrecautionsHi": [
    "कैथ-लैब और प्रसूति ओटी (Hybrid OR) का संयुक्त समन्वय।",
    "शिशु के जन्म के समय तक न्यूनतम फ्लोरोस्कोपी रेडिएशन।"
  ]
},
  "ufe-uterine-fibroids-microspheres": {
  "id": "ufe-uterine-fibroids-microspheres",
  "procedureNameEn": "Uterine Fibroid Embolization (UFE) using Calibrated Microspheres (500-700 / 700-900 um)",
  "procedureNameHi": "बच्चेदानी की रसौली की नस बंदी (Uterine Fibroid Embolization - UFE / बिना ऑपरेशन रसौली का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व ठोस आहार वर्जित; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Pelvic Contrast-Enhanced MRI documenting fibroid size, number, transmural location (submucosal, intramural, subserosal), and excluding adenomyosis / malignancy",
  "imagingProtocolHi": "पेल्विस का कंट्रास्ट एमआरआई (MRI Pelvis) रसोलियों की संख्या, आकार और वैस्कुलैरिटी जानने हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन 3-5 दिन पूर्व बंद की जा सकती है।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन हाइड्रेशन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Cervical cancer screening (Pap smear) and endometrial biopsy if abnormal bleeding pattern",
    "Serum Creatinine, Coagulation profile, pregnancy test negative"
  ],
  "specialPrecautionsHi": [
    "प्रक्रिया पश्चात दर्द प्रबंधन हेतु पीसीए (Patient-Controlled Analgesia) पंप या सुपीरियर हाइपोगैस्ट्रिक नर्व ब्लॉक की तैयारी।",
    "यूरिनरी कैथेटर (Foley) लगाना।"
  ]
},
  "uae-symptomatic-adenomyosis": {
  "id": "uae-symptomatic-adenomyosis",
  "procedureNameEn": "Uterine Artery Embolization for Symptomatic Diffuse / Focal Adenomyosis",
  "procedureNameHi": "एडेनोमायोसिस की यूटेराइन आर्टरी एम्बोलाइजेशन (बच्चेदानी की सूजन व दर्दनाक माहवारी का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Pelvic MRI confirming diffuse junctional zone expansion or adenomyoma, excluding coexisting high-grade pelvic endometriosis",
  "imagingProtocolHi": "एमआरआई पेल्विस (Junctional Zone Thickness > 12 मिमी का मापन)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "मानक नियम।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Normal endometrial histology and negative cervical smear",
    "Serum Creatinine, Coagulation profile, negative beta-hCG"
  ],
  "specialPrecautionsHi": [
    "गहन पोस्ट-प्रोसीजर दर्द निवारक प्रोटोकॉल।"
  ]
},
  "uterine-avm-embolization-onyx-glue": {
  "id": "uterine-avm-embolization-onyx-glue",
  "procedureNameEn": "Uterine Arteriovenous Malformation (AVM) Superselective Embolization with Onyx / Glue",
  "procedureNameHi": "बच्चेदानी की रक्तवाहिनी विकृति की एम्बोलाइजेशन (Uterine AVM - जानलेवा ब्लीडिंग का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकाल: NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Pelvic CTA / MRA identifying feeding uterine branches and early draining pelvic veins",
  "imagingProtocolHi": "कलर डॉप्लर एवं सीटी/एमआर एंजियोग्राफी (High-velocity low-resistance flow)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "बंद।",
    "anticoagulants": "रिवर्स।",
    "metformin": "बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी फ्लुइड्स।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2-4 यूनिट पीआरबीसी तैयार।",
  "specialPrecautionsEn": [
    "Beta-hCG level to exclude active Gestational Trophoblastic Disease (GTD)",
    "Rapid crossmatch and blood product availability"
  ],
  "specialPrecautionsHi": [
    "ग्लू या ऑनिक्स की डिलीवरी के समय वीनस आउटफ्लो की गति का सटीक आकलन।"
  ]
},
  "ectopic-cervical-scar-chemoembolization": {
  "id": "ectopic-cervical-scar-chemoembolization",
  "procedureNameEn": "Ectopic Pregnancy (Cervical / Cesarean Scar): Bilateral Uterine Artery Chemoembolization with Methotrexate",
  "procedureNameHi": "सिजेरियन स्कार / सर्वाइकल एक्टोपिक गर्भधारण की कीमोएम्बोलाइजेशन (नसों द्वारा दवा व नस बंदी)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Transvaginal Ultrasound (TVS) and Pelvic MRI defining gestational sac location, myometrial thinning (<2 mm), and bladder wall interface",
  "imagingProtocolHi": "ट्रांसवेजाइनल सोनोग्राफी एवं पेल्विक सीटी/एमआरआई।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "मानक नियम।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी।",
  "specialPrecautionsEn": [
    "Baseline serum beta-hCG, Liver Function Tests, Renal Profile, Complete Blood Count",
    "Informed consent regarding chemotherapy administration and transient ovarian effects"
  ],
  "specialPrecautionsHi": [
    "सीरम बीटा-एचसीजी (Serum Beta-hCG) स्तर की नियमित प्री व पोस्ट मॉनिटरिंग।"
  ]
},
  "pae-bph-microspheres": {
  "id": "pae-bph-microspheres",
  "procedureNameEn": "Prostatic Artery Embolization (PAE) for Symptomatic BPH using 300-500 um Microspheres",
  "procedureNameHi": "प्रोस्टेट धमनी एम्बोलाइजेशन (PAE - बिना चीरे या पेशाब की नली काटे गदूद का आधुनिक इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Multi-parametric Prostate MRI (mpMRI) calculating prostate volume, median lobe protrusion, and ruling out prostate cancer (PIRADS <= 2)",
  "imagingProtocolHi": "सीटी एंजियोग्राफी पेल्विस की (पेल्विक धमनियों के 3D कोण व एथेरोस्क्लेरोसिस की जांच) एवं प्रोस्टेट एमआरआई / यूएसजी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन चालू रख सकते हैं।",
    "anticoagulants": "वारफारिन/DOAC मानक नियमानुसार रोकी जाए।",
    "metformin": "48 घंटे पूर्व व पश्चात बंद।",
    "antihypertensives": "चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Pre-procedure pelvic CTA with thin-slice arterial reconstruction (essential to map tortuous prostatic artery origins: internal pudendal, obturator, or gluteal)",
    "Baseline IPSS score, IIEF-5 score, uroflowmetry (Qmax), post-void residual volume (PVR), PSA level, and Serum Creatinine"
  ],
  "specialPrecautionsHi": [
    "सीबीसी, पीएसए (PSA), और यूरिन कल्चर अनिवार्य (संक्रमण रहित होना आवश्यक)।",
    "कोन-बीम सीटी (CBCT) द्वारा नॉन-टारगेट ब्रांच का शत-प्रतिशत बहिष्करण।"
  ]
},
  "pae-prostate-cancer-hematuria": {
  "id": "pae-prostate-cancer-hematuria",
  "procedureNameEn": "Prostatic Artery Embolization for Intractable Hematuria Secondary to Advanced Prostate Carcinoma",
  "procedureNameHi": "प्रोस्टेट कैंसर में पेशाब से खून आने पर प्रोस्टेट एम्बोलाइजेशन (PAE for Hematuria)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Pelvic Contrast CT / MRI demonstrating advanced prostate tumor margins and bladder floor infiltration",
  "imagingProtocolHi": "सीटी/एमआरआई पेल्विस।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "बंद।",
    "anticoagulants": "रिवर्स।",
    "metformin": "बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी।",
  "specialPrecautionsEn": [
    "Urinary continuous 3-way catheter irrigation with normal saline to clear intravesical clot burden",
    "Optimization of coagulation profile (INR < 1.6, Platelets > 50,000/uL)"
  ],
  "specialPrecautionsHi": [
    "थ्री-वे फॉली कैथेटर द्वारा ब्लैडर की निरंतर सफाई।"
  ]
},
  "gae-knee-osteoarthritis-pain": {
  "id": "gae-knee-osteoarthritis-pain",
  "procedureNameEn": "Genicular Artery Embolization (GAE) for Refractory Knee Osteoarthritis Pain",
  "procedureNameHi": "घुटने के गठिया के दर्द की जेनिकुलर धमनी एम्बोलाइजेशन (GAE - घुटने के दर्द का बिना ऑपरेशन इलाज)",
  "fastingHoursSolid": 4,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 4 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 4 घंटे पूर्व ठोस आहार वर्जित।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Weight-bearing Knee Radiographs (KL grading) and Knee Contrast MRI demonstrating localized synovitis / joint effusion without osteonecrosis",
  "imagingProtocolHi": "घुटने का एक्स-रे (Kellgren-Lawrence Grading) एवं घुटना एमआरआई।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन जारी रख सकते हैं।",
    "anticoagulants": "मानक नियम अनुसार।",
    "metformin": "प्रक्रिया के दिन बंद।",
    "antihypertensives": "चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सामान्य मौखिक हाइड्रेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "आवश्यकता नहीं।",
  "specialPrecautionsEn": [
    "Baseline WOMAC (Western Ontario and McMaster Universities Osteoarthritis Index) and Visual Analog Scale (VAS) pain scoring",
    "Coagulation profile, Renal parameters within acceptable limits"
  ],
  "specialPrecautionsHi": [
    "त्वचा को खून देने वाली शाखाओं की पहचान कर उन्हें बचाना ताकि त्वचा पर छाले न पड़ें।"
  ]
},
  "frozen-shoulder-embolization": {
  "id": "frozen-shoulder-embolization",
  "procedureNameEn": "Adhesive Capsulitis (Frozen Shoulder): Lateral Thoracic / Circumflex Humeral Artery Micro-Embolization",
  "procedureNameHi": "कंधे के जकड़न व दर्द का एम्बोलाइजेशन (Frozen Shoulder Embolization - कंधे का दर्द रहित इलाज)",
  "fastingHoursSolid": 4,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 4 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "हल्का नाश्ता 4 घंटे पूर्व।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Shoulder Contrast MRI confirming joint capsule thickening (>4 mm), coracohumeral ligament thickening, and rotator interval hypervascular synovitis",
  "imagingProtocolHi": "कंधे का एमआरआई।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू रख सकते हैं।",
    "anticoagulants": "मानक नियम।",
    "metformin": "प्रक्रिया के दिन बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सामान्य हाइड्रेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "आवश्यकता नहीं।",
  "specialPrecautionsEn": [
    "Pre-procedure Shoulder Pain and Disability Index (SPADI) and VAS scoring",
    "Standard pre-interventional laboratory workup"
  ],
  "specialPrecautionsHi": [
    "प्रक्रिया के 48 घंटे बाद सौम्य फिजियोथेरेपी शुरू करने की सलाह।"
  ]
},
  "lateral-epicondylitis-radial-recurrent-embolization": {
  "id": "lateral-epicondylitis-radial-recurrent-embolization",
  "procedureNameEn": "Refractory Lateral Epicondylitis (Tennis Elbow): Radial Recurrent Artery Branch Micro-Embolization",
  "procedureNameHi": "टेनिस एल्बो का एम्बोलाइजेशन (Lateral Epicondylitis - कोहनी के पुराने दर्द का नस द्वारा इलाज)",
  "fastingHoursSolid": 2,
  "fastingHoursLiquid": 1,
  "npoInstructionsEn": "Strict NPO for solids for at least 2 hours prior to procedure; clear liquids permitted up to 1 hours before call time.",
  "npoInstructionsHi": "सामान्य।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "High-resolution MSK Ultrasound showing tendon thickening, hypoechoic tears, and hypervascular Power Doppler signal at the ECRB origin",
  "imagingProtocolHi": "कोहनी का अल्ट्रासाउंड/एमआरआई।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "कोई रोक नहीं।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सामान्य।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "आवश्यकता नहीं।",
  "specialPrecautionsEn": [
    "Elbow MRI to exclude osteochondritis dissecans or ligamentous instability",
    "Baseline Patient-Rated Tennis Elbow Evaluation (PRTEE) and VAS scores"
  ],
  "specialPrecautionsHi": [
    "सुपर-सिलेक्टिव रेडियल रीकरंट आर्टीरियल कैथेटराइजेशन।"
  ]
},
  "plantar-fasciitis-medial-plantar-embolization": {
  "id": "plantar-fasciitis-medial-plantar-embolization",
  "procedureNameEn": "Plantar Fasciitis: Medial Plantar Artery Hypervascular Branch Micro-Embolization",
  "procedureNameHi": "एड़ी के पुराने दर्द का एम्बोलाइजेशन (Plantar Fasciitis Embolization - एड़ी का नस द्वारा इलाज)",
  "fastingHoursSolid": 2,
  "fastingHoursLiquid": 1,
  "npoInstructionsEn": "Strict NPO for solids for at least 2 hours prior to procedure; clear liquids permitted up to 1 hours before call time.",
  "npoInstructionsHi": "सामान्य।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Foot Ultrasound / MRI documenting plantar fascia thickness > 4.5 mm and hypervascularity at medial calcaneal tubercle",
  "imagingProtocolHi": "एड़ी का अल्ट्रासाउंड/एमआरआई।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "कोई रोक नहीं।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सामान्य।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "आवश्यकता नहीं।",
  "specialPrecautionsEn": [
    "Visual Analog Scale (VAS) pain score >= 6 and Foot and Ankle Ability Measure (FAAM) baseline",
    "Standard baseline coagulogram and renal function"
  ],
  "specialPrecautionsHi": [
    "प्लांटर फेशिया की मोटाई का प्री-प्रोसीजर मापन।"
  ]
},
  "varicocele-embolization-coils-foam": {
  "id": "varicocele-embolization-coils-foam",
  "procedureNameEn": "Varicocele Embolization: Retrograde Spermatic Vein Embolization with Coils & STS 3% Foam",
  "procedureNameHi": "वेरिकोसील एम्बोलाइजेशन (अंडकोष की फूली नसों का बिना चीरे का इलाज - निःसंतानता व दर्द से मुक्ति)",
  "fastingHoursSolid": 4,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 4 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 4 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Scrotal Color Doppler Ultrasound with Valsalva maneuver documenting retrograde venous reflux > 2 seconds and pampiniform venous diameter > 3 mm",
  "imagingProtocolHi": "अंडकोष की स्क्रोटल कलर डॉप्लर सोनोग्राफी (खड़े होकर और वाल्साल्वा के साथ नस का व्यास > 3 मिमी)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू रख सकते हैं।",
    "anticoagulants": "मानक नियम।",
    "metformin": "प्रक्रिया के दिन बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सामान्य हाइड्रेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "आवश्यकता नहीं।",
  "specialPrecautionsEn": [
    "Semen analysis (minimum 2 samples performed 1 month apart)",
    "Standard coagulation screen (INR < 1.5, Platelets > 50,000/uL)"
  ],
  "specialPrecautionsHi": [
    "सीमेन एनालिसिस (Semen Analysis) की प्री-प्रोसीजर बेसलाइन रिपोर्ट।",
    "दाहिनी व बाईं स्पर्मेटिक शिरा के कोण का सटीक मूल्यांकन।"
  ]
},
  "high-flow-priapism-embolization": {
  "id": "high-flow-priapism-embolization",
  "procedureNameEn": "High-Flow Priapism (Arterial Priapism): Superselective Pudendal / Cavernosal Artery Microcoil / Autologous Clot Embolization",
  "procedureNameHi": "हाई-फ्लो प्रियापिज्म की एम्बोलाइजेशन (चोट के बाद लिंग के असामान्य लगातार तनाव का इलाज)",
  "fastingHoursSolid": 4,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 4 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 4 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Penile duplex ultrasound demonstrating arterio-lacunar fistula and measuring peak systolic velocities (>50 cm/s)",
  "imagingProtocolHi": "पेनाइल कलर डॉप्लर सोनोग्राफी (Fistula Flow Velocity)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "बंद।",
    "anticoagulants": "बंद।",
    "metformin": "बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Cavernosal blood gas analysis confirming non-ischemic bright red blood (excluding low-flow ischemic priapism)",
    "Coagulation profile and renal parameters within normal limits"
  ],
  "specialPrecautionsHi": [
    "अस्थायी एम्बोलिक एजेंट (ऑटोलॉगस क्लॉट या जेलफोम) को प्राथमिकता ताकि लिंग की सामान्य क्षमता बची रहे।"
  ]
},
  "radiation-cystitis-sva-embolization": {
  "id": "radiation-cystitis-sva-embolization",
  "procedureNameEn": "Intractable Hematuria from Radiation Cystitis: Bilateral Superior Vesical Artery Superselective Embolization",
  "procedureNameHi": "रेडिएशन सिस्टाइटिस में पेशाब से खून आने पर सुपीरियर वेसिकल धमनी की एम्बोलाइजेशन",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Cystoscopy confirming diffuse telangiectatic mucosal bleeding with mucosal ulceration and excluding focal bladder tumor recurrence",
  "imagingProtocolHi": "पेल्विक सीटी एंजियोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "बंद।",
    "anticoagulants": "रिवर्स।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन ड्रिप।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी तैयार।",
  "specialPrecautionsEn": [
    "Correction of severe anemia (Hb > 8 g/dL) and coagulopathy (INR < 1.6, Platelets > 50,000/uL)",
    "Baseline Renal function profile (Serum Creatinine, eGFR)"
  ],
  "specialPrecautionsHi": [
    "दोनों तरफ की सुपीरियर वेसिकल धमनियों की सुपरसिलेक्टिव मैपिंग।"
  ]
},
  "budd-chiari-hv-angioplasty": {
  "id": "budd-chiari-hv-angioplasty",
  "procedureNameEn": "Budd-Chiari Syndrome: Hepatic Vein Balloon Angioplasty & Recanalization",
  "procedureNameHi": "बड-कियारी सिंड्रोम: हेपेटिक वेन बैलून एंजियोप्लास्टी (लिवर की बंद नस को गुब्बारे से खोलना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Multiphasic CT/MRI liver with hepatic venous phase delineating focal hepatic vein obstruction and accessory inferior right hepatic vein anatomy",
  "imagingProtocolHi": "ट्राइफेसिक सीटी/एमआरआई लिवर एवं हेपेटिक वेन डॉप्लर सोनोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "मानक नियम।",
    "anticoagulants": "एंटीकोआगुलेशन की सावधानीपूर्वक समीक्षा (वारफारिन INR 1.5-1.8 लक्षित)।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी, 2 यूनिट एफएफपी तैयार।",
  "specialPrecautionsEn": [
    "Liver function panel: Total Bilirubin, INR, Serum Albumin, MELD score calculation",
    "Baseline Doppler ultrasound documenting reversed/absent hepatic vein flow and congested spider-web intrahepatic collaterals",
    "Platelet count >= 50,000/uL and INR <= 1.5 (correct with FFP/platelets as necessary)"
  ],
  "specialPrecautionsHi": [
    "प्रक्रिया के तुरंत बाद आजीवन एंटीकोआगुलेशन थेरेपी की योजना (थक्का जमने की बीमारी के कारण)।"
  ]
},
  "budd-chiari-hv-stenting": {
  "id": "budd-chiari-hv-stenting",
  "procedureNameEn": "Budd-Chiari Syndrome: Hepatic Vein Self-Expanding Bare Metallic Stenting (Wallstent / E-Luminexx)",
  "procedureNameHi": "बड-कियारी सिंड्रोम: हेपेटिक वेन स्टेंटिंग (लिवर की नस में स्थायी धातु की जाली लगाना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Pre-op CECT/MRI Abdomen demonstrating hepatic venous obstruction with viable downstream hepatic parenchyma",
  "imagingProtocolHi": "लिवर सीटी/एमआरआई एवं वेनोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू।",
    "anticoagulants": "प्रक्रिया के तुरंत बाद हेपरिन/वारफारिन शुरू करना अनिवार्य।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी।",
  "specialPrecautionsEn": [
    "Baseline trans-stenotic hepatic venous pressure gradient documented during index intervention",
    "Stable baseline coagulation and platelet parameters (INR < 1.5, Platelets > 50,000/uL)"
  ],
  "specialPrecautionsHi": [
    "स्टेंट का निचला सिरा आईवीसी (IVC) में बहुत अधिक न निकले, इसका ध्यान रखना।"
  ]
},
  "budd-chiari-dips": {
  "id": "budd-chiari-dips",
  "procedureNameEn": "Budd-Chiari Syndrome: Direct Intrahepatic Portosystemic Shunt (DIPS) Transcaval Puncture",
  "procedureNameHi": "बड-कियारी सिंड्रोम: डायरेक्ट इंट्राहेपेटिक पोर्टोसिस्टेमिक शंट (DIPS - आईवीसी से पोर्टल वेन तक नया बाईपास)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 80,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Multiphasic CT/MRI Abdomen demonstrating absent/fibrosed hepatic venous trunks, patent portal vein trunk/bifurcation, and retrohepatic IVC anatomy",
  "imagingProtocolHi": "आईवीयूएस (IVUS) एवं सीटी एंजियोग्राफी पोर्टल व आईवीसी की दूरी नापने हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "मानक नियम।",
    "anticoagulants": "सावधानीपूर्वक प्रबंधन; ब्लीडिंग रिस्क कंट्रोल।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "4 यूनिट पीआरबीसी, 4 यूनिट एफएफपी, प्लेटलेट्स तैयार।",
  "specialPrecautionsEn": [
    "Endoscopic assessment of varices; echocardiography excluding pulmonary hypertension / severe right ventricular dysfunction",
    "MELD score, serum bilirubin, creatinine, and baseline hepatic encephalopathy grading",
    "Coagulation correction: INR < 1.6, Platelets > 50,000/uL"
  ],
  "specialPrecautionsHi": [
    "इंट्रा-ऑपरेटिव इंट्रावैस्कुलर अल्ट्रासाउंड (IVUS) की लाइव निगरानी में पंक्चर।"
  ]
},
  "budd-chiari-ivc-membranotomy": {
  "id": "budd-chiari-ivc-membranotomy",
  "procedureNameEn": "Budd-Chiari Syndrome: IVC Membranotomy with Cutting Balloon & Stenting",
  "procedureNameHi": "आईवीसी मेम्ब्रेनोटॉमी व स्टेंटिंग (महाशिरा के जन्मजात पर्दे को काटकर स्टेंट लगाना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Contrast-enhanced abdominal CT/MRI or cavography demonstrating suprahepatic IVC web / diaphragm with collateral flow via azygos/hemiazygos veins",
  "imagingProtocolHi": "सीटी वेनोग्राफी और आईवीसी प्रेशर ग्रेडिएंट मापन।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू।",
    "anticoagulants": "प्रक्रिया बाद आजीवन एंटीकोआगुलेशन।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी।",
  "specialPrecautionsEn": [
    "Duplex ultrasound of lower extremity deep veins to rule out concurrent deep vein thrombosis",
    "Baseline renal and liver function panels, INR < 1.5, Platelets > 50,000/uL"
  ],
  "specialPrecautionsHi": [
    "प्रक्रिया पूर्व और पश्चात आईवीसी और राइट एट्रियम के बीच प्रेशर ग्रेडिएंट नापना।"
  ]
},
  "may-thurner-thrombolysis-stenting": {
  "id": "may-thurner-thrombolysis-stenting",
  "procedureNameEn": "May-Thurner Syndrome: Left Common Iliac Vein Catheter-Directed Thrombolysis & Stenting",
  "procedureNameHi": "मे-थर्नर सिंड्रोम: बाएं पैर की नस में थक्का गलाकर स्टेंट लगाना (May-Thurner CDT & Stenting)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Lower extremity venous Doppler and CT Venogram Pelvis confirming left iliofemoral DVT and May-Thurner anatomic compression",
  "imagingProtocolHi": "सीटी वेनोग्राफी पेल्विस व पैरों की, और इंट्रावैस्कुलर अल्ट्रासाउंड (IVUS)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "स्टेंटिंग पश्चात एस्पिरिन शुरू।",
    "anticoagulants": "एंटीकोआगुलेशन (वारफारिन/DOAC) कम से कम 6-12 महीने अनिवार्य।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Absence of absolute contraindications to thrombolysis (recent intracranial bleed, major surgery < 14 days, severe active bleeding)",
    "Baseline CBC, Platelets (> 100,000/uL), Fibrinogen (> 150 mg/dL), and baseline INR/aPTT"
  ],
  "specialPrecautionsHi": [
    "आईवीयूएस (IVUS) द्वारा दबी हुई नस के व्यास और स्टेंट के मुहाने की सटीक जांच।"
  ]
},
  "may-thurner-kissing-iliac-stenting": {
  "id": "may-thurner-kissing-iliac-stenting",
  "procedureNameEn": "May-Thurner Syndrome: Bilateral Kissing Common Iliac Vein Stenting Extending into IVC Confluence",
  "procedureNameHi": "मे-थर्नर किसिंग इलिएक वेन स्टेंटिंग (दोनों तरफ की पेल्विक नसों में संयुक्त स्टेंट लगाना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "CT Venography or MRV documenting iliocaval junction architecture, right common iliac ostium caliber, and L5/S1 compression",
  "imagingProtocolHi": "सीटी वेनोग्राफी पेल्विस।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू।",
    "anticoagulants": "अनिवार्य एंटीकोआगुलेशन।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Bilateral lower extremity venous duplex ultrasound mapping",
    "Serum creatinine, eGFR, coagulation panel (INR < 1.5, Platelets > 60,000/uL)"
  ],
  "specialPrecautionsHi": [
    "दोनों स्टेंट का एक साथ डिप्लॉयमेंट।"
  ]
},
  "nutcracker-anterior-stenting": {
  "id": "nutcracker-anterior-stenting",
  "procedureNameEn": "Nutcracker Syndrome (Anterior): Left Renal Vein Balloon Angioplasty & Self-Expanding Stenting",
  "procedureNameHi": "नटक्रेकर सिंड्रोम (एंटीरियर): बाएं गुर्दे की नस की स्टेंटिंग (पेशाब में खून व पेडू दर्द का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Contrast-enhanced multiphasic CT/MRI abdomen demonstrating acute aortomesenteric angle (< 35 degrees) and LRV beak sign with collateral dilation (gonadal/lumbar veins)",
  "imagingProtocolHi": "सीटी एंजियोग्राफी पेट की (एओर्टो-मेसेंटेरिक कोण < 16 डिग्री और बीक साइन) एवं रीनल वेन डॉप्लर।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन शुरू।",
    "anticoagulants": "स्टेंट के बाद 3-6 महीने एंटीकोआगुलेशन।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Urologic cystoscopy documenting selective hematuria from left ureteral orifice (excluding intrinsic bladder/urothelial pathology)",
    "Serum creatinine, urinalysis (proteinuria/hematuria documentation), INR < 1.5, Platelets > 70,000/uL"
  ],
  "specialPrecautionsHi": [
    "स्टेंट का व्यास नस से 2-3 मिमी बड़ा (Oversized) चुनना ताकि स्टेंट खिसकने का खतरा न रहे।"
  ]
},
  "nutcracker-posterior-decompression": {
  "id": "nutcracker-posterior-decompression",
  "procedureNameEn": "Nutcracker Syndrome (Posterior): Retro-Aortic Left Renal Vein Balloon Angioplasty & Decompression",
  "procedureNameHi": "पोस्टीरियर नटक्रेकर सिंड्रोम: रेट्रो-एओर्टिक रीनल वेन बैलून एंजियोप्लास्टी",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Cross-sectional CT/MRI Angiogram identifying retro-aortic left renal vein course compressed against L3/L4 vertebral spur/body",
  "imagingProtocolHi": "सीटी एंजियोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Detailed venocaval Doppler ultrasound confirming velocity ratio > 5:1 between compressed and hilar segments",
    "Routine renal function tests, urinalysis, bleeding profile"
  ],
  "specialPrecautionsHi": [
    "रेट्रो-एओर्टिक वेन के कोण का सटीक मापन।"
  ]
},
  "mals-angioplasty-stenting": {
  "id": "mals-angioplasty-stenting",
  "procedureNameEn": "Median Arcuate Ligament Syndrome (MALS): Celiac Artery Angioplasty & Covered Stenting Post-Ligament Release",
  "procedureNameHi": "मीडियन आर्कुएट लिगामेंट सिंड्रोम (MALS) स्टेंटिंग (डायाफ्राम के लिगामेंट रिलीज के बाद नस खोलना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Post-surgical CT Angiogram demonstrating surgical transection of diaphragmatic crus but persistent intrinsic narrowing/fibrosis of the celiac origin",
  "imagingProtocolHi": "सांस अंदर व बाहर लेते हुए (Inspiration/Expiration) सीटी एंजियोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Inspiratory/expiratory mesenteric duplex ultrasound documenting persistent elevated velocities during full inspiration",
    "Prior surgical release of median arcuate ligament (endovascular stenting WITHOUT surgical release is strongly contraindicated due to high stent fracture/compression risk)"
  ],
  "specialPrecautionsHi": [
    "सर्जिकल लिगामेंट रिलीज के बाद ही स्टेंट लगाना (वरना लिगामेंट स्टेंट को तोड़ सकता है)।"
  ]
},
  "sma-syndrome-nj-tube-mapping": {
  "id": "sma-syndrome-nj-tube-mapping",
  "procedureNameEn": "Superior Mesenteric Artery Syndrome (Wilkie): Fluoroscopic Nasojejunal Tube & Vascular Mapping",
  "procedureNameHi": "एसएमए सिंड्रोम: फ्लोरोस्कोपिक नासोजेजुनल ट्यूब डालना व वैस्कुलर मैपिंग (आंत दबने का इलाज)",
  "fastingHoursSolid": 4,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 4 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 4 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Contrast CT Abdomen or Upper GI Barium series demonstrating abrupt transverse cutoff of barium at the third part of duodenum with proximal megaduodenum",
  "imagingProtocolHi": "कंट्रास्ट सीटी पेट (Aorto-mesenteric distance < 8 mm और angle < 22 degree)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "कोई रोक नहीं।",
    "anticoagulants": "कोई रोक नहीं।",
    "metformin": "कोई रोक नहीं।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी फ्लुइड्स।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "आवश्यकता नहीं।",
  "specialPrecautionsEn": [
    "Profound malnutrition (BMI < 16, Serum Albumin < 2.5 g/dL, electrolyte disturbances)",
    "Nasogastric tube decompression already initiated for gastric stasis"
  ],
  "specialPrecautionsHi": [
    "नली के सिरे का लिगामेंट ऑफ ट्रीट्स (Ligament of Treitz) के पार जाने की फ्लोरोस्कोपी पर पक्की पुष्टि।"
  ]
},
  "tos-venous-thrombolysis-venoplasty": {
  "id": "tos-venous-thrombolysis-venoplasty",
  "procedureNameEn": "Venous TOS (Paget-Schroetter Syndrome): Catheter-Directed Thrombolysis & Subclavian Venoplasty",
  "procedureNameHi": "थोरैसिक आउटलेट सिंड्रोम: हाथ की नस का थक्का पिघलाना व वेनोप्लास्टी (Paget-Schroetter Syndrome)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Color Doppler Ultrasound and CT/MR Venography of upper chest/shoulder demonstrating axillary-subclavian vein thrombosis at the costoclavicular junction",
  "imagingProtocolHi": "हाथ व सीने की सीटी वेनोग्राफी एवं चेस्ट एक्स-रे (Cervical Rib)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू।",
    "anticoagulants": "थ्रोम्बोलाइज़िस पश्चात हेपरिन/DOAC।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Evaluation of bleeding risk profile; baseline aPTT, INR, Platelet count (> 100,000/uL), Fibrinogen (> 150 mg/dL)",
    "Surgical thoracic surgery consult for planned first rib resection post-thrombolysis"
  ],
  "specialPrecautionsHi": [
    "प्रक्रिया पश्चात मरीज को पहली पसली निकालने (First Rib Resection) हेतु थोरेसिक सर्जरी परामर्श की सलाह।"
  ]
},
  "tos-arterial-aneurysm-exclusion": {
  "id": "tos-arterial-aneurysm-exclusion",
  "procedureNameEn": "Arterial Thoracic Outlet Syndrome: Subclavian Aneurysm Exclusion & Thromboembolectomy",
  "procedureNameHi": "आर्टीरियल टीओएस: सबक्लेवियन एन्यूरिज्म का कवर्ड स्टेंट द्वारा उपचार (हाथ की नस का फटना रोकना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "CT Angiography of the chest and upper extremity demonstrating cervical rib, subclavian artery compression/aneurysm, and mural thrombus",
  "imagingProtocolHi": "सीटी एंजियोग्राफी दोनों हाथों की।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट अनिवार्य।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी।",
  "specialPrecautionsEn": [
    "Upper extremity arterial Doppler detailing digital runoff and patency of radial/ulnar palmar arches",
    "Full cardiac evaluation, CBC, Renal parameters, Bleeding profile (INR < 1.4)"
  ],
  "specialPrecautionsHi": [
    "सर्वाइकल रिब की सर्जिकल रीसेक्शन की अनिवार्य योजना।"
  ]
},
  "kts-marginal-vein-sclerotherapy-rfa": {
  "id": "kts-marginal-vein-sclerotherapy-rfa",
  "procedureNameEn": "Klippel-Trenaunay Syndrome: Marginal Vein of Servelle Sclerotherapy & Radiofrequency Ablation",
  "procedureNameHi": "क्लिपेल-ट्रेनाउनी सिंड्रोम: मार्जिनल वेन की स्क्लेरोथेरेपी व लेजर/आरएफए (पैर की विकृत नस बंद करना)",
  "fastingHoursSolid": 4,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 4 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 4 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Duplex ultrasound and MR Venography of the affected lower limb and pelvis MANDATORY to verify deep venous patency (ablation of marginal vein in the absence of a patent deep system results in catastrophic venous infarction)",
  "imagingProtocolHi": "पूरे पैर की डीप वेनस सिस्टम (Deep Venous System Patency) की संपूर्ण डॉप्लर व एमआर वेनोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू रख सकते हैं।",
    "anticoagulants": "स्थिति अनुसार।",
    "metformin": "प्रक्रिया के दिन बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Assessment of d-dimer and baseline coagulation parameters (screening for localized intravascular coagulopathy / LIC)",
    "Pre-procedure limb photography and circumference measurements"
  ],
  "specialPrecautionsHi": [
    "गहरी नसों (Deep Veins - Femoral & Popliteal) के पूरी तरह खुले होने की अनिवार्य पुष्टि (यदि गहरी नसें न हों तो मार्जिनल वेन बंद नहीं की जा सकती)।"
  ]
},
  "kts-vm-sclerotherapy-bleo-sts": {
  "id": "kts-vm-sclerotherapy-bleo-sts",
  "procedureNameEn": "Klippel-Trenaunay Syndrome: Pelvic & Extremity Venous Malformation Bleomycin / STS Sclerotherapy",
  "procedureNameHi": "केटीएस वैस्कुलर मॉलफॉर्मेशन स्क्लेरोथेरेपी (ब्लियोमाइसिन व एसटीएस फोम द्वारा नसों के गुच्छे का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Contrast-enhanced MRI with T2 STIR sequences mapping the extent and tissue planes of the low-flow malformation",
  "imagingProtocolHi": "कंट्रास्ट एमआरआई (STIR Sequences) वैस्कुलर मॉलफॉर्मेशन की सीमाओं के निर्धारण हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी हाइड्रेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Baseline d-dimer, fibrinogen, platelets to rule out consumptive coagulopathy (Kassabach-Merritt / severe LIC)",
    "Cumulative bleomycin exposure calculation (lifetime limit < 300-400 mg or < 15 mg/session in adults, < 0.5 mg/kg in pediatrics)",
    "Chest radiograph and baseline pulmonary function testing"
  ],
  "specialPrecautionsHi": [
    "ब्लियोमाइसिन की कुल खुराक प्रति सत्र < 0.5-1 mg/kg और जीवन भर की कुल खुराक < 300 mg की सख्त सीमा।",
    "फ्लोरोस्कोपी पर कंट्रास्ट डालकर सामान्य नसों में तेजी से दवा न जाए, यह देखना।"
  ]
},
  "pws-avf-embolization-onyx-coils": {
  "id": "pws-avf-embolization-onyx-coils",
  "procedureNameEn": "Parkes Weber Syndrome: High-Flow Limb AVF Embolization with Detachable Coils & Onyx",
  "procedureNameHi": "पार्क्स वेबर सिंड्रोम: हाई-फ्लो फिस्टुला की कोइलिंग व ऑनिक्स एम्बोलाइजेशन (दिल फेल होने से बचाव)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Detailed CT/MR Angiography and 4D Flow MRI defining multiple high-flow micro/macro-fistulous shunts and limb arterial arborization",
  "imagingProtocolHi": "सीटी/एमआर एंजियोग्राफी और इकोकार्डियोग्राफी (कार्डियक आउटपुट असेसमेंट)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "स्थिति अनुसार।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी।",
  "specialPrecautionsEn": [
    "Echocardiography calculating cardiac output, stroke volume, and pulmonary artery systolic pressures",
    "Renal function tests, baseline neurovascular examination of extremity, INR < 1.4, Platelets > 80,000/uL"
  ],
  "specialPrecautionsHi": [
    "फ्लो-कंट्रोल तकनीक (बैलून ऑक्लूजन के तहत ऑनिक्स डिलीवरी)।"
  ]
},
  "hht-pavm-embolization": {
  "id": "hht-pavm-embolization",
  "procedureNameEn": "Hereditary Hemorrhagic Telangiectasia (HHT): Pulmonary AVM Coil & Vascular Plug Embolization",
  "procedureNameHi": "एचएचटी: पल्मोनरी एवीएम एम्बोलाइजेशन (फेफड़े की असामान्य नस में प्लग व छल्ले डालना - स्ट्रोक व ब्रेन एब्सेस से बचाव)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "High-resolution non-contrast and contrast chest CT (1 mm thin cuts) detailing 3D architecture, feeding segmental/subsegmental arteries, and aneurysmal sacs",
  "imagingProtocolHi": "छाती की सीटी एंजियोग्राफी (Thin-slice Chest CTA) फीडिंग आर्टरी का व्यास (≥ 2-3 मिमी) नापने हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू रख सकते हैं।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Agitated saline contrast echocardiography documenting Grade III-IV right-to-left intrapulmonary shunt",
    "Meticulous debubbling of all IV lines (vital rule: zero air bubbles to avoid stroke in right-to-left shunt anatomy)",
    "Coagulation panel, renal parameters"
  ],
  "specialPrecautionsHi": [
    "सभी सिरिंजों और आईवी लाइनों से हवा के बुलबुलों को 100% बाहर निकालना (हवा का बुलबुला सीधे दिमाग में जा सकता है)।",
    "प्लग को फीडिंग आर्टरी के सबसे संकरे हिस्से में कसकर लगाना।"
  ]
},
  "hht-hepatic-vm-embolization": {
  "id": "hht-hepatic-vm-embolization",
  "procedureNameEn": "HHT: Hepatic Vascular Malformation Staged Arterial Embolization for High-Output Heart Failure",
  "procedureNameHi": "एचएचटी लिवर वैस्कुलर मॉलफॉर्मेशन एम्बोलाइजेशन (लिवर की असामान्य नसों द्वारा हार्ट फेलियर का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Triphasic CECT or Dynamic MRI Liver revealing diffuse telangiectasias, marked hepatic artery dilatation (> 10 mm), and arterioportal or arteriovenous shunts",
  "imagingProtocolHi": "लिवर सीटी/एमआरआई और 2D इकोकार्डियोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "स्थिति अनुसार।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी।",
  "specialPrecautionsEn": [
    "Echocardiography documenting cardiac index, ejection fraction, and pulmonary hypertension",
    "Serum bilirubin, alkaline phosphatase, and GGT (elevated ALP/GGT signals microvascular biliary tree ischemia: extreme caution mandatory)",
    "Multidisciplinary tumor/vascular board evaluation (staged embolization vs. liver transplantation)"
  ],
  "specialPrecautionsHi": [
    "चरणबद्ध एम्बोलाइजेशन (Staged Embolization) ताकि एक ही बार में लिवर पर ज्यादा दबाव न पड़े।"
  ]
},
  "abernethy-type1-occlusion-test": {
  "id": "abernethy-type1-occlusion-test",
  "procedureNameEn": "Abernethy Malformation Type 1: Portal Vein Reconstruction Assessment & Shunt Balloon Occlusion Test",
  "procedureNameHi": "एबरनेथी मॉलफॉर्मेशन टाइप 1: शंट बैलून ऑक्लूजन टेस्ट (पोर्टल नस पुनर्निर्माण की जांच)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "High-resolution CT/MR Portography revealing total diversion of mesenteric/splenic venous return into the IVC or iliac veins",
  "imagingProtocolHi": "सीटी पोर्टोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "स्थिति अनुसार।",
    "anticoagulants": "मानक नियम।",
    "metformin": "बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Baseline ammonia levels, arterial blood gas with PaO2 on room air, and macroaggregated albumin (MAA) lung shunt scan",
    "Pediatric/adult liver transplant team notification and baseline coagulogram"
  ],
  "specialPrecautionsHi": [
    "शंट ऑक्लूजन के दौरान पोर्टल प्रेशर की निरंतर लाइव रिकॉर्डिंग।"
  ]
},
  "abernethy-type2-plug-closure": {
  "id": "abernethy-type2-plug-closure",
  "procedureNameEn": "Abernethy Malformation Type 2: Transcatheter Amplatzer Vascular Plug Closure of Portocaval Shunt",
  "procedureNameHi": "एबरनेथी टाइप 2: वैस्कुलर प्लग द्वारा शंट बंद करना (लिवर की बाईपास नस को प्लग से सील करना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Successful test balloon occlusion confirming intrahepatic portal arborization and post-test portal venous pressure <= 25 mmHg",
  "imagingProtocolHi": "सीटी पोर्टोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Echocardiogram and baseline pulmonary function tests (assessing baseline HPS)",
    "Normal baseline liver enzymes and platelet counts"
  ],
  "specialPrecautionsHi": [
    "प्लग का आकार शंट से 30-50% बड़ा चुनना।"
  ]
},
  "gorham-stout-bone-sclerotherapy": {
  "id": "gorham-stout-bone-sclerotherapy",
  "procedureNameEn": "Gorham-Stout Disease & Generalized Lymphatic Anomaly: Osseous Sclerotherapy with Bleomycin",
  "procedureNameHi": "गोरहम-स्टाउट बीमारी: हड्डी के लिंफेटिक गुच्छों की ब्लियोमाइसिन स्क्लेरोथेरेपी",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "CT and MRI of the affected skeletal structure detailing trabecular resorption, cortical thinning, and intraosseous/extraosseous microcystic lymphatic channels",
  "imagingProtocolHi": "सीटी और एमआरआई प्रभावित हड्डी की।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "मानक नियम।",
    "anticoagulants": "मानक नियम।",
    "metformin": "बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी हाइड्रेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Baseline pulmonary function tests and chest CT (mandatory screening for chylothorax / pulmonary lymphangiomatosis)",
    "Calculated cumulative Bleomycin lifetime dose tracking (< 300 mg total, <= 15 mg per single treatment)",
    "Platelet count > 60,000/uL, INR < 1.5"
  ],
  "specialPrecautionsHi": [
    "ब्लियोमाइसिन की डोज का शरीर के वजन अनुसार सख्त नियंत्रण।"
  ]
},
  "pelvic-congestion-syndrome-coiling": {
  "id": "pelvic-congestion-syndrome-coiling",
  "procedureNameEn": "Pelvic Congestion Syndrome: Bilateral Ovarian Vein & Internal Iliac Tributary Coil/Foam Embolization",
  "procedureNameHi": "पेल्विक कंजेशन सिंड्रोम: डिम्बग्रंथि नस (Ovarian Vein) की कोइलिंग (महिलाओं के पुराने पेडू दर्द का इलाज)",
  "fastingHoursSolid": 4,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 4 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 4 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Transvaginal Duplex Doppler ultrasound and Pelvic MRV documenting retrograde ovarian vein flow and parauterine/ovarian venous engorgement",
  "imagingProtocolHi": "कंट्रास्ट सीटी/एमआर वेनोग्राफी अथवा ट्रांसवेजाइनल डॉप्लर (Ovarian vein diameter > 6 mm)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू रख सकते हैं।",
    "anticoagulants": "मानक नियम।",
    "metformin": "प्रक्रिया के दिन बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सामान्य हाइड्रेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "आवश्यकता नहीं।",
  "specialPrecautionsEn": [
    "Exclusion of primary gynecologic pathologies (endometriosis, adenomyosis, pelvic inflammatory disease)",
    "Exclusion of secondary compression syndromes (Nutcracker syndrome or May-Thurner syndrome) on CT venography",
    "Coagulation screen: INR < 1.5, Platelets > 80,000/uL; pregnancy excluded (negative beta-hCG)"
  ],
  "specialPrecautionsHi": [
    "दोनों ओवेरियन वेन्स और इंटरनल इलिएक शाखाओं का संपूर्ण वेनोग्राफी मूल्यांकन।"
  ]
},
  "ovarian-vein-vulvar-varices-coiling": {
  "id": "ovarian-vein-vulvar-varices-coiling",
  "procedureNameEn": "Left Ovarian Vein Reflux & Vulvar Varices: Superselective Transjugular Coil Embolization",
  "procedureNameHi": "वल्वर वेरिकोजिटी एवं ओवेरियन वेन कोइलिंग (गुप्तांग की फूली नसों का ट्रांसजुगुलर इलाज)",
  "fastingHoursSolid": 4,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 4 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 4 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Standing perineal and translabial color Doppler ultrasound tracing variceal source to the pelvic venous escape points (inguinal / obturator / perineal)",
  "imagingProtocolHi": "पेल्विक एमआर वेनोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "आवश्यकता नहीं।",
  "specialPrecautionsEn": [
    "Negative pregnancy test; baseline blood panel",
    "Exclusion of iliofemoral deep venous obstruction via lower extremity duplex"
  ],
  "specialPrecautionsHi": [
    "ट्रांसजुगुलर एक्सेस द्वारा ओवेरियन वेन में आसान प्रवेश।"
  ]
},
  "fmd-renal-angioplasty": {
  "id": "fmd-renal-angioplasty",
  "procedureNameEn": "Fibromuscular Dysplasia (FMD): Renal Artery Balloon Angioplasty without Stenting",
  "procedureNameHi": "फाइब्रोमस्कुलर डिस्प्लेसिया (FMD) रीनल एंजियोप्लास्टी (युवाओं में बीपी का बिना स्टेंट गुब्बारे से इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "CT/MR Renal Angiogram demonstrating medial fibroplasia (string-of-beads) or intimal fibroplasia (focal concentric band) in mid-to-distal renal artery",
  "imagingProtocolHi": "सीटी एंजियोग्राफी (String-of-beads appearance) अथवा रीनल डॉप्लर।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन प्रक्रिया पूर्व शुरू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "एसीई-इनहिबिटर प्रक्रिया के दिन रोकें; अन्य चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Failure of blood pressure control on >= 2-3 antihypertensive agents",
    "Normal baseline serum creatinine, INR < 1.4, Platelets > 80,000/uL"
  ],
  "specialPrecautionsHi": [
    "सख्त चेतावनी: एफएमडी में रूटीन स्टेंटिंग से बचें (केवल फ्लो-लिमिटिंग डिसेक्शन होने पर ही स्टेंट लगाएं)।",
    "ट्रांस-लेशनल प्रेशर ग्रेडिएंट (Pd/Pa) 0.90 से अधिक लाने का लक्ष्य।"
  ]
},
  "fmd-carotid-dissection-covered-stent": {
  "id": "fmd-carotid-dissection-covered-stent",
  "procedureNameEn": "FMD with Carotid Dissection / Pseudoaneurysm: Endovascular Covered Stent Reconstruction",
  "procedureNameHi": "गर्दन की धमनी में एफएमडी व डिसेक्शन पर कवर्ड स्टेंट लगाना (गर्दन की नस फटने व स्ट्रोक का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "CTA or MRA Head and Neck documenting string-of-beads in mid-cervical ICA, intimal flap, false lumen, or dissecting pseudoaneurysm with distal intracranial runoff",
  "imagingProtocolHi": "सीटी एंजियोग्राफी गर्दन व दिमाग की।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट अनिवार्य।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Neurological baseline examination (NIHSS score)",
    "Dual antiplatelet therapy (DAPT: Aspirin 150mg + Clopidogrel 300mg loading dose or Ticagrelor 180mg) administered prior to stenting"
  ],
  "specialPrecautionsHi": [
    "एट्रोपिन (Atropine 0.6 mg) टेबल पर तैयार रखना (कैरोटिड साइनस ब्रेडीकार्डिया रोकने हेतु)।"
  ]
},
  "takayasu-subclavian-stenting": {
  "id": "takayasu-subclavian-stenting",
  "procedureNameEn": "Takayasu Arteritis: Subclavian Artery Severe Stenosis Balloon Angioplasty & Covered Stenting",
  "procedureNameHi": "टकायासु आर्टराइटिस: सबक्लेवियन धमनी में कवर्ड स्टेंट लगाना (हाथ में नाड़ी गायब होने का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "MANDATORY: Documentation of disease remission / quiescent phase (normal ESR < 20 mm/hr, normal high-sensitivity CRP, lack of systemic inflammatory signs; pre-treated with immunosuppression/steroids)",
  "imagingProtocolHi": "सीटी एंजियोग्राफी आर्च व हाथ की, और ईएसआर/सीआरपी (ESR & CRP) की जांच।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "स्टेरॉयड (Prednisolone) नियमित चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "PET-CT or Contrast MRI Angiogram verifying lack of active transmural mural enhancement/edema in aortic arch and branch vessels",
    "Aortic arch CTA assessing ostial vs. truncal involvement and vertebral artery origin patency"
  ],
  "specialPrecautionsHi": [
    "सख्त नियम: ईएसआर और सीआरपी सामान्य होने पर ही इलेक्टिव प्रक्रिया करें (सक्रिय सूजन में स्टेंट लगाने पर नस तुरंत बंद हो सकती है)।"
  ]
},
  "takayasu-carotid-angioplasty": {
  "id": "takayasu-carotid-angioplasty",
  "procedureNameEn": "Takayasu Arteritis: Innominate / Common Carotid Artery Balloon Angioplasty",
  "procedureNameHi": "टकायासु आर्टराइटिस: कॉमन कैरोटिड धमनी की एंजियोप्लास्टी (दिमाग की नस में रुकावट खोलना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Biochemical remission confirmed: ESR < 20 mm/hr, hsCRP normal, stable steroid maintenance dose",
  "imagingProtocolHi": "सीटी एंजियोग्राफी दिमाग व गर्दन की।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Arch CTA and MRA brain showing circle of Willis collateral sufficiency and supra-aortic trunk mural thickness",
    "Pre-procedure dual antiplatelet therapy; baseline neurological deficit scoring"
  ],
  "specialPrecautionsHi": [
    "एम्बोलिक प्रोटेक्शन फिल्टर का उपयोग।"
  ]
},
  "takayasu-aortoplasty-large-stent": {
  "id": "takayasu-aortoplasty-large-stent",
  "procedureNameEn": "Takayasu Arteritis: Aortic Coarctation / Mid-Aortic Syndrome Balloon Aortoplasty & Stenting",
  "procedureNameHi": "टकायासु एओर्टोप्लास्टी व लार्ज स्टेंटिंग (पेट की महाधमनी की सिकुड़न को खोलना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Thoracoabdominal CT Angiography mapping the narrowest aortic diameter, length of affected segment, and visceral/renal artery origins",
  "imagingProtocolHi": "सीटी एंजियोग्राफी महाधमनी व गुर्दे की नसों की।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2-4 यूनिट पीआरबीसी तैयार।",
  "specialPrecautionsEn": [
    "Verified inflammatory disease quiescence (normal ESR and hsCRP; immunosuppressive therapy optimized)",
    "Transthoracic echocardiogram assessing left ventricular hypertrophy and cardiac output"
  ],
  "specialPrecautionsHi": [
    "अत्यधिक बड़े व्यास के हाई-प्रेशर बैलून और लार्ज स्टेंट (CP Stent / Palmaz XL) की तैयारी।"
  ]
},
  "tao-pedal-arch-angioplasty-sympathectomy": {
  "id": "tao-pedal-arch-angioplasty-sympathectomy",
  "procedureNameEn": "Buerger's Disease (TAO): Deep Pedal Arch Balloon Angioplasty & Chemical Lumbar Sympathectomy",
  "procedureNameHi": "बर्जर बीमारी (TAO): पैर के तलवे की एंजियोप्लास्टी एवं केमिकल लंबर सिम्पैथेक्टॉमी (बीड़ी पीने से पैर सड़ने का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Strict verification of tobacco/bidi smoking cessation counseling; baseline cotinine levels if feasible",
  "imagingProtocolHi": "डीएसए एंजियोग्राफी और लंबर स्पाइन सीटी/एक्स-रे।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन और सिलोस्टाजोल (Cilostazol) चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Detailed CT Angiogram or digital runoff mapping showing disease sparing proximal femoropopliteal segment with severe distal tibial/pedal involvement",
    "Skin inspection, baseline ankle-brachial index (ABI) or toe-brachial index (TBI), serum creatinine"
  ],
  "specialPrecautionsHi": [
    "मरीज और परिजनों को तंबाकू/बीड़ी का शत-प्रतिशत त्याग करने की कड़ी हिदायत (धूम्रपान जारी रखने पर कोई भी प्रक्रिया काम नहीं करेगी)।"
  ]
},
  "raynaud-digital-vasodilator-botox": {
  "id": "raynaud-digital-vasodilator-botox",
  "procedureNameEn": "Raynaud Phenomenon with Ulceration: Upper Extremity Vasodilatory Infusion & Botulinum Toxin Block",
  "procedureNameHi": "रेनॉड फिनोमेनन: डिजिटल वैसोडाइलेटर इन्फ्यूजन व बोटॉक्स ब्लॉक (सर्दियों में उंगलियां नीली पड़ने का इलाज)",
  "fastingHoursSolid": 2,
  "fastingHoursLiquid": 1,
  "npoInstructionsEn": "Strict NPO for solids for at least 2 hours prior to procedure; clear liquids permitted up to 1 hours before call time.",
  "npoInstructionsHi": "सामान्य भोजन ले सकते हैं।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Clinical assessment of digital trophic changes and ulcer depth",
  "imagingProtocolHi": "हाथ की डॉप्लर सोनोग्राफी एवं कोल्ड प्रोवोकेशन टेस्ट।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "कोई रोक नहीं।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सामान्य।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "आवश्यकता नहीं।",
  "specialPrecautionsEn": [
    "Upper extremity Doppler ultrasound detailing patency of radial, ulnar, and superficial/deep palmar arches",
    "Screening for proximal subclavian/brachial fixed occlusions; baseline inflammatory and renal labs"
  ],
  "specialPrecautionsHi": [
    "बोटॉक्स इंजेक्शन हथेली के न्यूरोवैस्कुलर बंडल के पास अत्यंत सटीक लगाना।"
  ]
},
  "blue-toe-atheroma-exclusion-stent": {
  "id": "blue-toe-atheroma-exclusion-stent",
  "procedureNameEn": "Blue Toe Syndrome / Micro-Embolism: Diagnostic Localization & Atheroma Stent-Graft Exclusion",
  "procedureNameHi": "ब्लू टो सिंड्रोम: एथेरोमा एक्सक्लूजन स्टेंटिंग (पैर का अंगूठा अचानक नीला पड़ने का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "High-resolution CT Angiography of the abdominal aorta and lower extremities to identify non-calcified ulcerated atheroma, mural thrombus, or shaggy aorta",
  "imagingProtocolHi": "हाई-रिज़ॉल्यूशन सीटी एंजियोग्राफी कचरे के स्रोत की पहचान हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Verification of normal palpable distal pedal pulses or normal resting ankle-brachial index (ruling out low-flow macrovascular occlusion)",
    "Renal profile, coagulation screen, exclusion of cardiac sources (transesophageal echocardiogram to rule out left atrial/ventricular mural thrombi)"
  ],
  "specialPrecautionsHi": [
    "डिस्टल फिल्टर प्रोटेक्शन का उपयोग।"
  ]
},
  "scimitar-anomalous-artery-embolization": {
  "id": "scimitar-anomalous-artery-embolization",
  "procedureNameEn": "Scimitar Syndrome: Transcatheter Occlusion of Anomalous Systemic Arterial Supply",
  "procedureNameHi": "सिमिटार सिंड्रोम: असामान्य धमनी की एम्बोलाइजेशन (फेफड़े की जन्मजात विकृत नस बंद करना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "CT Thorax / CTA Abdomen confirming hypoplastic right lung, dextroposition of heart, scimitar vein draining into IVC, and aberrant systemic feeder vessel from lower aorta/celiac territory",
  "imagingProtocolHi": "सीटी एंजियोग्राफी छाती व पेट।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "मानक नियम।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Echocardiography assessing pulmonary arterial hypertension and associated cardiac anomalies (e.g., ASD, VSD)",
    "Baseline CBC, renal function, coagulation screen"
  ],
  "specialPrecautionsHi": [
    "असामान्य नस के पूरे मार्ग का 3D सीटी मूल्यांकन।"
  ]
},
  "pulmonary-sequestration-embolization": {
  "id": "pulmonary-sequestration-embolization",
  "procedureNameEn": "Pulmonary Sequestration: Aberrant Systemic Arterial Feeder Coil / Plug Embolization",
  "procedureNameHi": "पल्मोनरी सीक्वेस्ट्रेशन: असामान्य धमनी की कोइलिंग (फेफड़े के अतिरिक्त टुकड़े की नस बंदी)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Contrast-enhanced thoracic CT Angiography mapping the aberrant systemic feeder(s), non-functioning lung mass, and venous drainage (pulmonary veins in intralobar, systemic veins/azygos in extralobar)",
  "imagingProtocolHi": "सीटी एंजियोग्राफी छाती की।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "मानक नियम।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Baseline CBC, Coagulation screen, Renal parameters, Blood type and cross-match"
  ],
  "specialPrecautionsHi": [
    "एबनॉर्मल सिस्टमिक फीडर आर्टरी की सटीक कोइलिंग।"
  ]
},
  "bronchial-dieulafoy-embolization": {
  "id": "bronchial-dieulafoy-embolization",
  "procedureNameEn": "Bronchial Dieulafoy Lesion: Superselective Microcoil Embolization for Catastrophic Hemoptysis",
  "procedureNameHi": "ब्रोंकियल ड्युलाफॉय लीज़न एम्बोलाइजेशन (सांस की नली में फटी नस की सुपरसिलेक्टिव कोइलिंग)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकाल: तुरंत NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Emergency CT Thorax Angiogram identifying the focal protruding submucosal bronchial artery nodule projecting into the airway lumen without parenchymal mass or bronchiectasis",
  "imagingProtocolHi": "सीटी एंजियोग्राफी छाती।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "बंद।",
    "anticoagulants": "रिवर्स।",
    "metformin": "बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2-4 यूनिट पीआरबीसी।",
  "specialPrecautionsEn": [
    "Airway protection / stabilization: Double-lumen endotracheal tube intubation or bronchial blocker if active bleeding",
    "Baseline coagulogram, blood cross-matching for 4 units PRBCs"
  ],
  "specialPrecautionsHi": [
    "बायोप्सी करने की सख्त मनाही (Contraindicated for biopsy)।"
  ]
},
  "leriche-cerab-reconstruction": {
  "id": "leriche-cerab-reconstruction",
  "procedureNameEn": "Leriche Syndrome: Total Occlusion Recanalization with Covered Endovascular Reconstruction of Aortic Bifurcation (CERAB)",
  "procedureNameHi": "लेरिश सिंड्रोम: सेराब तकनीक द्वारा महाधमनी का पूर्ण पुनर्निर्माण (LERICH CERAB - कूल्हों व पैरों का रक्त संचार)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "High-resolution CT Angiography from diaphragm to feet defining the level of aortic occlusion relative to the lowest renal artery, calcification burden, and distal runoff",
  "imagingProtocolHi": "सीटी एंजियोग्राफी पेट व दोनों पैरों की।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट अनिवार्य।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी तैयार।",
  "specialPrecautionsEn": [
    "Baseline cardiac clearance (coronary artery disease is present in > 60% of Leriche patients)",
    "Dual antiplatelet therapy (Aspirin + Clopidogrel) initiated; baseline serum creatinine and eGFR"
  ],
  "specialPrecautionsHi": [
    "दोनों फेमोरल और ब्रेकियल एक्सेस का सुरक्षित प्रबंधन।"
  ]
},
  "middle-aortic-syndrome-reconstruction": {
  "id": "middle-aortic-syndrome-reconstruction",
  "procedureNameEn": "Middle Aortic Syndrome: Kissing Balloon Expandable Covered Stent Reconstruction",
  "procedureNameHi": "मिडिल एओर्टिक सिंड्रोम: किसिंग कवर्ड स्टेंट पुनर्निर्माण (पेट की महाधमनी व गुर्दे की नसों का संयुक्त स्टेंट)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "High-resolution CT Angiography or 4D MR Angiography measuring exact hypoplastic aortic segment length, luminal caliber, and takeoff of celiac, SMA, and bilateral renal arteries",
  "imagingProtocolHi": "सीटी एंजियोग्राफी 3D रीकंस्ट्रक्शन सहित।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2-4 यूनिट पीआरबीसी तैयार।",
  "specialPrecautionsEn": [
    "Echocardiography assessing left ventricular mass index and cardiac function",
    "Baseline renal scintigraphy (DMSA/DTPA) and invasive baseline pressure gradient recordings across the coarctation"
  ],
  "specialPrecautionsHi": [
    "मल्टी-एक्सेस कैथेटराइजेशन और सिंक्रोनाइज़्ड बैलून इन्फ्लेशन की तैयारी।"
  ]
},
  "carotid-artery-stenting-cas": {
  "id": "carotid-artery-stenting-cas",
  "procedureNameEn": "Carotid Artery Angioplasty and Stenting (CAS) with Distal Embolic Protection",
  "procedureNameHi": "कैरोटिड धमनी स्टेंटिंग (CAS - गर्दन की नस में स्टेंट लगाकर ब्रेन स्ट्रोक से बचाव)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Fine-cut contrast-enhanced CT Angiography or diagnostic Doppler ultrasound.",
  "imagingProtocolHi": "सीटी एंजियोग्राफी दिमाग व गर्दन की (CTA Neck & Brain) और कैरोटिड कलर डॉप्लर सोनोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट (Aspirin 150 mg + Clopidogrel 75-300 mg) कम से कम 3-5 दिन पूर्व शुरू होना अनिवार्य।",
    "anticoagulants": "वारफारिन INR ≤ 1.5; DOAC 48 घंटे पूर्व बंद।",
    "metformin": "प्रक्रिया के दिन एवं 48 घंटे बाद तक बंद।",
    "antihypertensives": "रक्तचाप 140/90 mmHg से नीचे रखें; सुबह की बीपी दवा एक घूंट पानी से लें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सीटी कंट्रास्ट से बचाव हेतु 0.9% सलाइन ड्रिप 1 mL/kg/h प्रक्रिया से 6 घंटे पूर्व व 12 घंटे बाद।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन तैयार रखें।",
  "specialPrecautionsEn": [
    "Dual large-bore peripheral IV access (18G).",
    "Continuous telemetry and pulse oximetry monitoring.",
    "Emergency rescue hardware available in angiosuite store."
  ],
  "specialPrecautionsHi": [
    "कैरोटिड साइनस ब्रेडीकार्डिया रोकने हेतु एट्रोपिन (Atropine 0.6-1.0 mg) पहले से सिरिंज में लोड रखें।",
    "प्रक्रिया के दौरान और पश्चात आईसीयू में हर 15 मिनट पर न्यूरोलॉजिकल स्कोर (NIHSS) की जांच।"
  ]
},
  "acute-stroke-mechanical-thrombectomy": {
  "id": "acute-stroke-mechanical-thrombectomy",
  "procedureNameEn": "Acute Ischemic Stroke Endovascular Mechanical Thrombectomy (ADAPT / Solumbra)",
  "procedureNameHi": "एक्यूट स्ट्रोक मैकेनिकल थ्रोम्बेक्टॉमी (ब्रेन स्ट्रोक / लकवे के तुरंत बाद दिमाग की नस से थक्का खींचना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "अत्यंत आपातकाल (Golden Hour): तुरंत पूर्ण NPO; समय ही दिमाग है (Time is Brain - बिना समय गंवाए तत्काल प्रक्रिया)।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Fine-cut contrast-enhanced CT Angiography or diagnostic Doppler ultrasound.",
  "imagingProtocolHi": "आपातकालीन नॉन-कंट्रास्ट ब्रेन सीटी (NCCT Head) रक्तस्राव खारिज करने हेतु (ASPECTS ≥ 6) तथा सीटी एंजियोग्राफी (CTA Brain & Neck) बड़ी नस के अवरोध की पुष्टि हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "आईवी टीपीए दिए जाने पर प्रक्रिया के दौरान अतिरिक्त एंटीप्लेटलेट्स रोकी जाएं।",
    "anticoagulants": "स्थिति अनुसार।",
    "metformin": "तत्काल बंद।",
    "antihypertensives": "रक्तचाप सख्त नियंत्रण में रखें (सिस्टोलिक बीपी < 180 mmHg और डायस्टोलिक < 105 mmHg)।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी नॉर्मल सलाइन इन्फ्यूजन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन तैयार रखें।",
  "specialPrecautionsEn": [
    "Dual large-bore peripheral IV access (18G).",
    "Continuous telemetry and pulse oximetry monitoring.",
    "Emergency rescue hardware available in angiosuite store."
  ],
  "specialPrecautionsHi": [
    "डोर-टू-ग्रोइन पंक्चर समय (Door to Puncture Time) 60 मिनट से कम रखने का लक्ष्य।",
    "स्टेंट-रीट्रीवर (Solitaire/Trevo) और लार्ज-बोर एस्पिरेशन कैथेटर (Sofia/React/Red) की तत्काल उपलब्धता।"
  ]
},
  "avm-vascular-malformation-sclerotherapy": {
  "id": "avm-vascular-malformation-sclerotherapy",
  "procedureNameEn": "Peripheral Arteriovenous Malformation (AVM) / Vascular Malformation Sclerotherapy and Embolization",
  "procedureNameHi": "पेरिफेरल एवीएम एवं वैस्कुलर मॉलफॉर्मेशन स्क्लेरोथेरेपी व एम्बोलाइजेशन (असामान्य नसों के गुच्छे का आधुनिक इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Fine-cut contrast-enhanced CT Angiography or diagnostic Doppler ultrasound.",
  "imagingProtocolHi": "कंट्रास्ट एमआरआई (STIR Sequences) तथा सीटी/डीएसए एंजियोग्राफी (Nidus Hemodynamics)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "मानक नियम।",
    "anticoagulants": "मानक नियम।",
    "metformin": "प्रक्रिया के दिन बंद।",
    "antihypertensives": "चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन तैयार रखें।",
  "specialPrecautionsEn": [
    "Dual large-bore peripheral IV access (18G).",
    "Continuous telemetry and pulse oximetry monitoring.",
    "Emergency rescue hardware available in angiosuite store."
  ],
  "specialPrecautionsHi": [
    "अल्कोहल या ऑनिक्स के प्रयोग के समय पल्मोनरी आर्टरी प्रेशर और वीनस आउटफ्लो की निगरानी।",
    "प्रक्रिया पश्चात सूजन कम करने हेतु आईवी डेक्सामेथासोन (Dexamethasone) का प्रयोग।"
  ]
},
  "evar": {
    ...{
  "id": "evar-bifurcated-modular",
  "procedureNameEn": "Endovascular Abdominal Aortic Aneurysm Repair (EVAR) with Modular Bifurcated Stent-Graft System",
  "procedureNameHi": "एंडोवैस्कुलर एब्डॉमिनल एओर्टिक एन्यूरिज्म रिपेयर (इवार / पेट की महाधमनी में स्टेंट ग्राफ्ट लगाना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से कम से कम 6 घंटे पूर्व ठोस आहार व दूध पूर्णतः बंद रखें; सादा पानी प्रक्रिया से 2 घंटे पूर्व तक ही लें।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Contrast-enhanced High-Resolution CT Angiography (slice thickness <= 1 mm) of Chest-Abdomen-Pelvis with bilateral lower limb runoff",
  "imagingProtocolHi": "छाती, पेट व दोनों पैरों की हाई-रेज़ोल्यूशन सीटी एंजियोग्राफी (1 मिमी से पतले स्लाइस) 3D सेंटरलाइन रीकंस्ट्रक्शन के साथ।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन जारी रखें; क्लोपिडोग्रेल (Clopidogrel) यदि संभव हो तो 5 दिन पूर्व बंद करें।",
    "anticoagulants": "वारफारिन (Warfarin) 5 दिन पूर्व बंद करें (INR ≤ 1.4); नोएक (DOAC) 48 घंटे पूर्व बंद करें।",
    "metformin": "कंट्रास्ट डाई के कारण मेटफॉर्मिन प्रक्रिया के दिन और 48 घंटे बाद तक बंद रखें।",
    "antihypertensives": "रक्तचाप की नियमित दवाएं (बीटा-ब्लॉकर) सुबह एक घूंट पानी के साथ अवश्य लें (ACEi/ARB रोकें)।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "किडनी सुरक्षा हेतु 0.9% नॉर्मल सलाइन 1 mL/kg/h की दर से प्रक्रिया से 6 घंटे पूर्व एवं 12 घंटे बाद तक चालू रखें।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "कम से कम 2 से 4 यूनिट पैक्ड रेड ब्लड सेल्स (PRBC) ब्लड बैंक में क्रॉस-मैच कराकर सुरक्षित रखें।",
  "specialPrecautionsEn": [
    "Proximal infrarenal aortic neck length >= 10-15 mm, neck diameter <= 32 mm, and infrarenal neck angulation <= 60 degrees",
    "Distal landing zone in common iliac arteries with length >= 15 mm and non-aneurysmal caliber (diameter <= 20 mm)",
    "Adequate iliofemoral access vessel luminal caliber (>= 6-7 mm) without circumferential calcification or extreme tortuosity"
  ],
  "specialPrecautionsHi": [
    "दोनों जांघों की नसों के लिए परक्लोज़ (Perclose ProStyle) सूचर-क्लोज़र डिवाइस की उपलब्धता सुनिश्चित करें।",
    "प्रक्रिया के दौरान ACT (सक्रिय क्लॉटिंग समय) 250-300 सेकंड बनाए रखने हेतु हेपरिन की तैयारी।",
    "प्रक्रिया के तुरंत बाद दोनों पैरों की नाड़ी (Dorsalis pedis/Tibial pulses) की डॉप्लर जांच अनिवार्य।"
  ]
},
    id: "evar"
  },
  "tevar": {
    ...{
  "id": "tevar-thoracic-aneurysm",
  "procedureNameEn": "Thoracic Endovascular Aortic Repair (TEVAR) for Descending Thoracic Aortic Aneurysm with Landing Zone Optimization",
  "procedureNameHi": "थोरेसिक एंडोवैस्कुलर एओर्टिक रिपेयर (टेवार / छाती की महाधमनी में स्टेंट-ग्राफ्ट लगाना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व भूखा पेट (NPO) रहें; तरल पदार्थ 2 घंटे पूर्व तक ही लें।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Gated Thoracic and Abdominopelvic CT Angiography with fine-cut MPR/3D volume rendering",
  "imagingProtocolHi": "ईसीजी-गेटेड छाती व पेट की सीटी एंजियोग्राफी (इशिमारू ज़ोन 2 से 4 और एडमकीविक्ज़ धमनी का मूल्यांकन)।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन जारी रखें; आवश्यक होने पर प्लेटलेट इनहिबिटर्स के संबंध में कार्डियोलॉजिस्ट से परामर्श करें।",
    "anticoagulants": "वारफारिन 5 दिन पूर्व बंद; हेपरिन प्रक्रिया के 4 घंटे पूर्व बंद; DOAC 48 घंटे पूर्व बंद।",
    "metformin": "प्रक्रिया के दिन एवं 48 घंटे बाद तक मेटफॉर्मिन बंद रखें।",
    "antihypertensives": "एंटी-इम्पल्स थेरेपी (बीटा-ब्लॉकर) द्वारा सिस्टोलिक बीपी < 120 mmHg और हृदय गति < 60/min बनाए रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सीटी कंट्रास्ट नेफ्रोपैथी से बचाव हेतु प्रक्रिया पूर्व व पश्चात नॉर्मल सलाइन ड्रिप 1-1.5 mL/kg/h।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "4 यूनिट पीआरबीसी (PRBC) एवं 4 यूनिट एफएफपी (FFP) आपातकालीन प्रयोग हेतु क्रॉस-मैच रखें।",
  "specialPrecautionsEn": [
    "Proximal landing zone length >= 20 mm in healthy non-aneurysmal aorta (Ishimaru Zones 2-4); assessment of left subclavian artery (LSA) and vertebral artery dominance",
    "Evaluation of distal landing zone (>= 20 mm above celiac axis) and assessment of Adamkiewicz artery origin level (typically T8-L1)",
    "CSF drainage catheter placement pre-operatively for extensive descending aortic coverage (> 20 cm) or previous infrarenal aortic repair"
  ],
  "specialPrecautionsHi": [
    "रीढ़ की हड्डी में लकवे के बचाव हेतु प्रक्रिया से पूर्व कमर में सीएसएफ ड्रेन (CSF Lumbar Drain) स्थापित करना।",
    "स्टेंट खोलते समय रक्तचाप अचानक कम करने हेतु रैपिड वेंट्रिकुलर पेसिंग (RVP) अथवा दवा (Adenosine) तैयार रखना।",
    "प्रक्रिया पश्चात आईसीयू में निरंतर न्यूरोलॉजिकल और मोटर फंक्शन की निगरानी।"
  ]
},
    id: "tevar"
  },
  "fevar": {
    ...{
  "id": "fevar-bevar-juxtarenal-thoracoabdominal",
  "procedureNameEn": "Fenestrated / Branched Endovascular Aortic Repair (FEVAR / BEVAR) for Juxtarenal and Thoracoabdominal Aneurysms",
  "procedureNameHi": "फेनेस्ट्रेटेड / ब्रांक्ड एंडोवैस्कुलर एओर्टिक रिपेयर (फेवार / बेवार - गुर्दे व आंतों की शाखाओं वाला विशेष स्टेंट)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व पूर्ण NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 80,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Thin-cut (<= 0.75 mm) ECG-gated CTA from thoracic inlet to femoral bifurcations with precise 3D center-line reconstruction of target visceral vessels (celiac, SMA, bilateral renals)",
  "imagingProtocolHi": "पतले स्लाइस (≤ 0.75 मिमी) ईसीजी-गेटेड सीटीए नेक से फेमोरल तक, 3D सेंटरलाइन और क्लॉक-फेस कोण निर्धारण।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन चालू रखें; डीएपीटी योजना अनुसार।",
    "anticoagulants": "वारफारिन 5 दिन पूर्व बंद; DOAC 48 घंटे पूर्व बंद।",
    "metformin": "प्रक्रिया से 48 घंटे पूर्व एवं पश्चात बंद।",
    "antihypertensives": "कार्डियक व बीपी दवाएं नियमानुसार चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "प्रक्रिया पूर्व 12 घंटे और पश्चात 24 घंटे सलाइन हाइड्रेशन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "4-6 यूनिट पीआरबीसी, 4 यूनिट एफएफपी, 2 यूनिट प्लेटलेट्स आरक्षित।",
  "specialPrecautionsEn": [
    "Customized device planning: calculation of clock-face positions, longitudinal distances, branch takeoff angulations, and vessel diameters",
    "Prophylactic lumbar cerebrospinal fluid (CSF) drain placement 24h prior to procedure to mitigate spinal cord ischemia",
    "Baseline cardiac evaluation (dobutamine stress echo / coronary angiogram), pulmonary function tests, and renal clearance (eGFR > 30 mL/min/1.73m2 preferred)"
  ],
  "specialPrecautionsHi": [
    "प्रक्रिया से 24 घंटे पूर्व अनिवार्य स्पाइनल लंबर सीएसएफ ड्रेन (CSF Drain) लगाना।",
    "हाथ की एक्सिलरी/ब्रेकियल धमनी का सुरक्षित एक्सेस और पल्स मॉनिटरिंग।",
    "आईसीयू में स्पाइनल परफ्यूजन प्रेशर (MAP - CSFP > 70-80 mmHg) का सख्त प्रबंधन।"
  ]
},
    id: "fevar"
  },
  "chevar": {
    ...{
  "id": "chevar-parallel-grafts",
  "procedureNameEn": "Chimney / Snorkel EVAR (ChEVAR) with Parallel Renal and Visceral Covered Stents",
  "procedureNameHi": "चिमनी / स्नोर्कल इवार (ChEVAR - गुर्दे की नसों के समानांतर स्टेंट लगाकर महाधमनी रिपेयर)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व ठोस आहार वर्जित; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "CTA Abdomen-Pelvis with 3D reconstructed neck dimensions, renal artery origins, and branch takeoff angles",
  "imagingProtocolHi": "सीटी एंजियोग्राफी छाती, पेट और दोनों हाथों की एक्सिलरी धमनियों की बनावट और व्यास की जांच सहित।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन चालू रखें।",
    "anticoagulants": "वारफारिन 5 दिन पूर्व बंद; DOAC 48 घंटे पूर्व बंद।",
    "metformin": "प्रक्रिया के दिन और बाद में 48 घंटे बंद।",
    "antihypertensives": "बीपी दवाएं समय पर लें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "नॉर्मल सलाइन ड्रिप 1 mL/kg/h प्रक्रिया से 6 घंटे पूर्व चालू।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "2-4 यूनिट पीआरबीसी क्रॉस-मैच तैयार रखें।",
  "specialPrecautionsEn": [
    "Left axillary or brachial artery luminal caliber >= 6-7 mm (or bilateral upper extremity access if bilateral chimneys required)",
    "Evaluation of suprarenal aortic neck quality (length >= 15 mm in healthy parallel landing zone to accommodate gutter seal)",
    "Baseline creatinine, eGFR, coagulation indices, and blood crossmatch"
  ],
  "specialPrecautionsHi": [
    "हाथ की एक्सिलरी धमनी और दोनों जांघों की धमनियों के संयुक्त एक्सेस की तैयारी।",
    "सिंक्रोनाइज़्ड 'किसिंग' बैलून पोस्ट-डाइलेशन हेतु उचित आकार के बैलून उपलब्ध रखना।",
    "प्रक्रिया पश्चात दोनों हाथों व पैरों की नाड़ी एवं गुर्दे के फंक्शन (RFT) की गहन जांच।"
  ]
},
    id: "chevar"
  },
  "pevar": {
    ...{
  "id": "pevar-percutaneous-preclose",
  "procedureNameEn": "Percutaneous EVAR (PEVAR) with Totally Percutaneous Pre-Close Suture Technique",
  "procedureNameHi": "परक्यूटेनियस इवार (PEVAR - बिना जांघ काटे टांके वाली सुई द्वारा स्टेंट ग्राफ्ट लगाना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Pre-procedure CTA or vascular ultrasound confirming non-calcified, plaque-free anterior common femoral artery (CFA) wall at puncture zone",
  "imagingProtocolHi": "सीटीए अथवा हाई-रिज़ॉल्यूशन सोनोग्राफी द्वारा जांघ की कॉमन फेमोरल धमनी में कैल्शियम व दीवार की मोटाई की जांच।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन चालू; क्लॉपिडोग्रेल पर स्थिति अनुसार निर्णय।",
    "anticoagulants": "वारफारिन/DOAC मानक नियमानुसार रोकी जाए।",
    "metformin": "48 घंटे पूर्व व पश्चात बंद।",
    "antihypertensives": "बीटा-ब्लॉकर सुबह नियमित लें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "कंट्रास्ट नेफ्रोपैथी रोकथाम प्रोटोकॉल: आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी आरक्षित रखें।",
  "specialPrecautionsEn": [
    "CFA diameter >= 6.0 mm without high-grade stenosis, circumferential calcification, or excessive scar tissue from prior groin surgery",
    "Absence of morbid obesity precluding ultrasound-guided perpendicular puncture trajectory",
    "Standard EVAR anatomical and physiological eligibility"
  ],
  "specialPrecautionsHi": [
    "जांघ की नस पर 10 बजे और 2 बजे की स्थिति में दो परक्लोज़ उपकरण लगाने की पूर्व-तैयारी।",
    "टांके बांधने के बाद टेबल पर ही कलर डॉप्लर सोनोग्राफी द्वारा नस के खुले रहने की पुष्टि।"
  ]
},
    id: "pevar"
  },
  "bae": {
    ...{
  "id": "bae-massive-hemoptysis",
  "procedureNameEn": "Bronchial Artery Embolization (BAE) for Massive Hemoptysis",
  "procedureNameHi": "ब्रोंकियल आर्टीरियल एम्बोलाइजेशन (बीएई / फेफड़े से खून की उल्टी रोकने हेतु नस बंदी)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकाल: तुरंत NPO; सांस की नली में खून जाने पर तुरंत सक्शन।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "CT Angiography of Thorax (CTA chest) to map hypertrophied bronchial and non-bronchial systemic arteries",
  "imagingProtocolHi": "छाती की आपातकालीन सीटी एंजियोग्राफी (CTA Chest) ब्रोन्कियल धमनियों की मैपिंग हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "स्थिति अनुसार।",
    "anticoagulants": "एंटीकोआगुलेशन तुरंत रोकी जाए।",
    "metformin": "प्रक्रिया के दिन बंद।",
    "antihypertensives": "रक्तचाप नियंत्रित रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन इन्फ्यूजन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "2 यूनिट पीआरबीसी क्रॉस-मैच तैयार।",
  "specialPrecautionsEn": [
    "Endotracheal intubation with double-lumen tube or bronchial blocker if airway compromise exists",
    "Coagulation profile: INR < 1.5, Platelets > 50,000/uL, Serum Creatinine < 1.5 mg/dL"
  ],
  "specialPrecautionsHi": [
    "स्पाइनल आर्टरी (Hairpin Loop of Adamkiewicz) की फ्लोरोस्कोपी पर अनिवार्य गहन जांच।",
    "सक्शन उपकरण और आपातकालीन एयरवे/इंट्यूबेशन बैकअप तैयार।"
  ]
},
    id: "bae"
  },
  "uae": {
    ...{
  "id": "uae-primary-pph-gelfoam",
  "procedureNameEn": "Uterine Artery Embolization (UAE) for Primary Postpartum Hemorrhage (PPH) with Gelfoam Slurry",
  "procedureNameHi": "प्रसव के बाद भारी रक्तस्राव पर बच्चेदानी की नस बंदी (PPH UAE - प्रसूता की जान व बच्चेदानी बचाना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "आपातकाल: तुरंत NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "2-4 Units PRBC Crossmatched"
  },
  "imagingProtocolEn": "Activation of massive obstetric hemorrhage protocol; ongoing transfusion of packed cells, FFP, cryoprecipitate, platelets",
  "imagingProtocolHi": "क्लिनिकल व अल्ट्रासाउंड असेसमेंट।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "लागू नहीं।",
    "anticoagulants": "रिवर्सल यदि चालू थी।",
    "metformin": "लागू नहीं।",
    "antihypertensives": "वाइटल्स व शॉक का प्रबंधन।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "मैसिव ब्लड व क्रिस्टलॉइड रिससिटेशन।",
  "bloodProductsArrangedEn": "2-4 units PRBC and 2-4 units FFP crossmatched in Blood Bank",
  "bloodProductsArrangedHi": "4 यूनिट पीआरबीसी, 4 यूनिट एफएफपी तुरंत उपलब्ध रखें।",
  "specialPrecautionsEn": [
    "Exclude retained products of conception and extensive uterine rupture requiring laparotomy",
    "Hemodynamic resuscitation to maintain SBP > 90 mmHg"
  ],
  "specialPrecautionsHi": [
    "दोनों तरफ की यूटेराइन धमनियों का अनिवार्य एम्बोलाइजेशन।",
    "ओवेरियन कोलेटरल्स की जांच यदि ब्लीडिंग बनी रहे।"
  ]
},
    id: "uae"
  },
  "ufe": {
    ...{
  "id": "ufe-uterine-fibroids-microspheres",
  "procedureNameEn": "Uterine Fibroid Embolization (UFE) using Calibrated Microspheres (500-700 / 700-900 um)",
  "procedureNameHi": "बच्चेदानी की रसौली की नस बंदी (Uterine Fibroid Embolization - UFE / बिना ऑपरेशन रसौली का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व ठोस आहार वर्जित; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Pelvic Contrast-Enhanced MRI documenting fibroid size, number, transmural location (submucosal, intramural, subserosal), and excluding adenomyosis / malignancy",
  "imagingProtocolHi": "पेल्विस का कंट्रास्ट एमआरआई (MRI Pelvis) रसोलियों की संख्या, आकार और वैस्कुलैरिटी जानने हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन 3-5 दिन पूर्व बंद की जा सकती है।",
    "anticoagulants": "मानक नियम।",
    "metformin": "48 घंटे बंद।",
    "antihypertensives": "चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन हाइड्रेशन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Cervical cancer screening (Pap smear) and endometrial biopsy if abnormal bleeding pattern",
    "Serum Creatinine, Coagulation profile, pregnancy test negative"
  ],
  "specialPrecautionsHi": [
    "प्रक्रिया पश्चात दर्द प्रबंधन हेतु पीसीए (Patient-Controlled Analgesia) पंप या सुपीरियर हाइपोगैस्ट्रिक नर्व ब्लॉक की तैयारी।",
    "यूरिनरी कैथेटर (Foley) लगाना।"
  ]
},
    id: "ufe"
  },
  "pae": {
    ...{
  "id": "pae-bph-microspheres",
  "procedureNameEn": "Prostatic Artery Embolization (PAE) for Symptomatic BPH using 300-500 um Microspheres",
  "procedureNameHi": "प्रोस्टेट धमनी एम्बोलाइजेशन (PAE - बिना चीरे या पेशाब की नली काटे गदूद का आधुनिक इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Multi-parametric Prostate MRI (mpMRI) calculating prostate volume, median lobe protrusion, and ruling out prostate cancer (PIRADS <= 2)",
  "imagingProtocolHi": "सीटी एंजियोग्राफी पेल्विस की (पेल्विक धमनियों के 3D कोण व एथेरोस्क्लेरोसिस की जांच) एवं प्रोस्टेट एमआरआई / यूएसजी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन चालू रख सकते हैं।",
    "anticoagulants": "वारफारिन/DOAC मानक नियमानुसार रोकी जाए।",
    "metformin": "48 घंटे पूर्व व पश्चात बंद।",
    "antihypertensives": "चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी सलाइन 1 mL/kg/h।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Pre-procedure pelvic CTA with thin-slice arterial reconstruction (essential to map tortuous prostatic artery origins: internal pudendal, obturator, or gluteal)",
    "Baseline IPSS score, IIEF-5 score, uroflowmetry (Qmax), post-void residual volume (PVR), PSA level, and Serum Creatinine"
  ],
  "specialPrecautionsHi": [
    "सीबीसी, पीएसए (PSA), और यूरिन कल्चर अनिवार्य (संक्रमण रहित होना आवश्यक)।",
    "कोन-बीम सीटी (CBCT) द्वारा नॉन-टारगेट ब्रांच का शत-प्रतिशत बहिष्करण।"
  ]
},
    id: "pae"
  },
  "gae": {
    ...{
  "id": "gae-knee-osteoarthritis-pain",
  "procedureNameEn": "Genicular Artery Embolization (GAE) for Refractory Knee Osteoarthritis Pain",
  "procedureNameHi": "घुटने के गठिया के दर्द की जेनिकुलर धमनी एम्बोलाइजेशन (GAE - घुटने के दर्द का बिना ऑपरेशन इलाज)",
  "fastingHoursSolid": 4,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 4 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 4 घंटे पूर्व ठोस आहार वर्जित।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Weight-bearing Knee Radiographs (KL grading) and Knee Contrast MRI demonstrating localized synovitis / joint effusion without osteonecrosis",
  "imagingProtocolHi": "घुटने का एक्स-रे (Kellgren-Lawrence Grading) एवं घुटना एमआरआई।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "एस्पिरिन जारी रख सकते हैं।",
    "anticoagulants": "मानक नियम अनुसार।",
    "metformin": "प्रक्रिया के दिन बंद।",
    "antihypertensives": "चालू रखें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सामान्य मौखिक हाइड्रेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "आवश्यकता नहीं।",
  "specialPrecautionsEn": [
    "Baseline WOMAC (Western Ontario and McMaster Universities Osteoarthritis Index) and Visual Analog Scale (VAS) pain scoring",
    "Coagulation profile, Renal parameters within acceptable limits"
  ],
  "specialPrecautionsHi": [
    "त्वचा को खून देने वाली शाखाओं की पहचान कर उन्हें बचाना ताकि त्वचा पर छाले न पड़ें।"
  ]
},
    id: "gae"
  },
  "carotid-stenting": {
    ...{
  "id": "carotid-artery-stenting-cas",
  "procedureNameEn": "Carotid Artery Angioplasty and Stenting (CAS) with Distal Embolic Protection",
  "procedureNameHi": "कैरोटिड धमनी स्टेंटिंग (CAS - गर्दन की नस में स्टेंट लगाकर ब्रेन स्ट्रोक से बचाव)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO; 2 घंटे पूर्व तक सादा पानी।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Fine-cut contrast-enhanced CT Angiography or diagnostic Doppler ultrasound.",
  "imagingProtocolHi": "सीटी एंजियोग्राफी दिमाग व गर्दन की (CTA Neck & Brain) और कैरोटिड कलर डॉप्लर सोनोग्राफी।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "दोहरी एंटीप्लेटलेट (Aspirin 150 mg + Clopidogrel 75-300 mg) कम से कम 3-5 दिन पूर्व शुरू होना अनिवार्य।",
    "anticoagulants": "वारफारिन INR ≤ 1.5; DOAC 48 घंटे पूर्व बंद।",
    "metformin": "प्रक्रिया के दिन एवं 48 घंटे बाद तक बंद।",
    "antihypertensives": "रक्तचाप 140/90 mmHg से नीचे रखें; सुबह की बीपी दवा एक घूंट पानी से लें।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "सीटी कंट्रास्ट से बचाव हेतु 0.9% सलाइन ड्रिप 1 mL/kg/h प्रक्रिया से 6 घंटे पूर्व व 12 घंटे बाद।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन तैयार रखें।",
  "specialPrecautionsEn": [
    "Dual large-bore peripheral IV access (18G).",
    "Continuous telemetry and pulse oximetry monitoring.",
    "Emergency rescue hardware available in angiosuite store."
  ],
  "specialPrecautionsHi": [
    "कैरोटिड साइनस ब्रेडीकार्डिया रोकने हेतु एट्रोपिन (Atropine 0.6-1.0 mg) पहले से सिरिंज में लोड रखें।",
    "प्रक्रिया के दौरान और पश्चात आईसीयू में हर 15 मिनट पर न्यूरोलॉजिकल स्कोर (NIHSS) की जांच।"
  ]
},
    id: "carotid-stenting"
  },
  "stroke-thrombectomy": {
    ...{
  "id": "acute-stroke-mechanical-thrombectomy",
  "procedureNameEn": "Acute Ischemic Stroke Endovascular Mechanical Thrombectomy (ADAPT / Solumbra)",
  "procedureNameHi": "एक्यूट स्ट्रोक मैकेनिकल थ्रोम्बेक्टॉमी (ब्रेन स्ट्रोक / लकवे के तुरंत बाद दिमाग की नस से थक्का खींचना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "अत्यंत आपातकाल (Golden Hour): तुरंत पूर्ण NPO; समय ही दिमाग है (Time is Brain - बिना समय गंवाए तत्काल प्रक्रिया)।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Fine-cut contrast-enhanced CT Angiography or diagnostic Doppler ultrasound.",
  "imagingProtocolHi": "आपातकालीन नॉन-कंट्रास्ट ब्रेन सीटी (NCCT Head) रक्तस्राव खारिज करने हेतु (ASPECTS ≥ 6) तथा सीटी एंजियोग्राफी (CTA Brain & Neck) बड़ी नस के अवरोध की पुष्टि हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "आईवी टीपीए दिए जाने पर प्रक्रिया के दौरान अतिरिक्त एंटीप्लेटलेट्स रोकी जाएं।",
    "anticoagulants": "स्थिति अनुसार।",
    "metformin": "तत्काल बंद।",
    "antihypertensives": "रक्तचाप सख्त नियंत्रण में रखें (सिस्टोलिक बीपी < 180 mmHg और डायस्टोलिक < 105 mmHg)।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी नॉर्मल सलाइन इन्फ्यूजन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन तैयार रखें।",
  "specialPrecautionsEn": [
    "Dual large-bore peripheral IV access (18G).",
    "Continuous telemetry and pulse oximetry monitoring.",
    "Emergency rescue hardware available in angiosuite store."
  ],
  "specialPrecautionsHi": [
    "डोर-टू-ग्रोइन पंक्चर समय (Door to Puncture Time) 60 मिनट से कम रखने का लक्ष्य।",
    "स्टेंट-रीट्रीवर (Solitaire/Trevo) और लार्ज-बोर एस्पिरेशन कैथेटर (Sofia/React/Red) की तत्काल उपलब्धता।"
  ]
},
    id: "stroke-thrombectomy"
  },
  "stroke-adapt-thrombectomy": {
    ...{
  "id": "acute-stroke-mechanical-thrombectomy",
  "procedureNameEn": "Acute Ischemic Stroke Endovascular Mechanical Thrombectomy (ADAPT / Solumbra)",
  "procedureNameHi": "एक्यूट स्ट्रोक मैकेनिकल थ्रोम्बेक्टॉमी (ब्रेन स्ट्रोक / लकवे के तुरंत बाद दिमाग की नस से थक्का खींचना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "अत्यंत आपातकाल (Golden Hour): तुरंत पूर्ण NPO; समय ही दिमाग है (Time is Brain - बिना समय गंवाए तत्काल प्रक्रिया)।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Fine-cut contrast-enhanced CT Angiography or diagnostic Doppler ultrasound.",
  "imagingProtocolHi": "आपातकालीन नॉन-कंट्रास्ट ब्रेन सीटी (NCCT Head) रक्तस्राव खारिज करने हेतु (ASPECTS ≥ 6) तथा सीटी एंजियोग्राफी (CTA Brain & Neck) बड़ी नस के अवरोध की पुष्टि हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "आईवी टीपीए दिए जाने पर प्रक्रिया के दौरान अतिरिक्त एंटीप्लेटलेट्स रोकी जाएं।",
    "anticoagulants": "स्थिति अनुसार।",
    "metformin": "तत्काल बंद।",
    "antihypertensives": "रक्तचाप सख्त नियंत्रण में रखें (सिस्टोलिक बीपी < 180 mmHg और डायस्टोलिक < 105 mmHg)।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी नॉर्मल सलाइन इन्फ्यूजन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन तैयार रखें।",
  "specialPrecautionsEn": [
    "Dual large-bore peripheral IV access (18G).",
    "Continuous telemetry and pulse oximetry monitoring.",
    "Emergency rescue hardware available in angiosuite store."
  ],
  "specialPrecautionsHi": [
    "डोर-टू-ग्रोइन पंक्चर समय (Door to Puncture Time) 60 मिनट से कम रखने का लक्ष्य।",
    "स्टेंट-रीट्रीवर (Solitaire/Trevo) और लार्ज-बोर एस्पिरेशन कैथेटर (Sofia/React/Red) की तत्काल उपलब्धता।"
  ]
},
    id: "stroke-adapt-thrombectomy"
  },
  "stroke-solumbra-thrombectomy": {
    ...{
  "id": "acute-stroke-mechanical-thrombectomy",
  "procedureNameEn": "Acute Ischemic Stroke Endovascular Mechanical Thrombectomy (ADAPT / Solumbra)",
  "procedureNameHi": "एक्यूट स्ट्रोक मैकेनिकल थ्रोम्बेक्टॉमी (ब्रेन स्ट्रोक / लकवे के तुरंत बाद दिमाग की नस से थक्का खींचना)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "अत्यंत आपातकाल (Golden Hour): तुरंत पूर्ण NPO; समय ही दिमाग है (Time is Brain - बिना समय गंवाए तत्काल प्रक्रिया)।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Fine-cut contrast-enhanced CT Angiography or diagnostic Doppler ultrasound.",
  "imagingProtocolHi": "आपातकालीन नॉन-कंट्रास्ट ब्रेन सीटी (NCCT Head) रक्तस्राव खारिज करने हेतु (ASPECTS ≥ 6) तथा सीटी एंजियोग्राफी (CTA Brain & Neck) बड़ी नस के अवरोध की पुष्टि हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "आईवी टीपीए दिए जाने पर प्रक्रिया के दौरान अतिरिक्त एंटीप्लेटलेट्स रोकी जाएं।",
    "anticoagulants": "स्थिति अनुसार।",
    "metformin": "तत्काल बंद।",
    "antihypertensives": "रक्तचाप सख्त नियंत्रण में रखें (सिस्टोलिक बीपी < 180 mmHg और डायस्टोलिक < 105 mmHg)।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी नॉर्मल सलाइन इन्फ्यूजन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन तैयार रखें।",
  "specialPrecautionsEn": [
    "Dual large-bore peripheral IV access (18G).",
    "Continuous telemetry and pulse oximetry monitoring.",
    "Emergency rescue hardware available in angiosuite store."
  ],
  "specialPrecautionsHi": [
    "डोर-टू-ग्रोइन पंक्चर समय (Door to Puncture Time) 60 मिनट से कम रखने का लक्ष्य।",
    "स्टेंट-रीट्रीवर (Solitaire/Trevo) और लार्ज-बोर एस्पिरेशन कैथेटर (Sofia/React/Red) की तत्काल उपलब्धता।"
  ]
},
    id: "stroke-solumbra-thrombectomy"
  },
  "kts-sclerotherapy": {
    ...{
  "id": "kts-vm-sclerotherapy-bleo-sts",
  "procedureNameEn": "Klippel-Trenaunay Syndrome: Pelvic & Extremity Venous Malformation Bleomycin / STS Sclerotherapy",
  "procedureNameHi": "केटीएस वैस्कुलर मॉलफॉर्मेशन स्क्लेरोथेरेपी (ब्लियोमाइसिन व एसटीएस फोम द्वारा नसों के गुच्छे का इलाज)",
  "fastingHoursSolid": 6,
  "fastingHoursLiquid": 2,
  "npoInstructionsEn": "Strict NPO for solids for at least 6 hours prior to procedure; clear liquids permitted up to 2 hours before call time.",
  "npoInstructionsHi": "प्रक्रिया से 6 घंटे पूर्व NPO।",
  "mandatoryLabs": {
    "hb": "≥ 9.0 g/dL (transfuse PRBC if < 8.0 g/dL)",
    "platelets": "≥ 50,000 /μL",
    "inr": "≤ 1.4 - 1.5 (correct with FFP or Vitamin K if elevated)",
    "aptt": "< 1.3 × control",
    "creatinine": "< 1.5 mg/dL (or eGFR > 30 mL/min/1.73m²; calculate Cigarroa MACD)",
    "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
    "bloodGrouping": "Type and Screen"
  },
  "imagingProtocolEn": "Contrast-enhanced MRI with T2 STIR sequences mapping the extent and tissue planes of the low-flow malformation",
  "imagingProtocolHi": "कंट्रास्ट एमआरआई (STIR Sequences) वैस्कुलर मॉलफॉर्मेशन की सीमाओं के निर्धारण हेतु।",
  "medicationHoldsEn": {
    "antiplatelets": "Maintain Aspirin; hold Clopidogrel/Ticagrelor 5-7 days prior for high-bleeding-risk, or load DAPT for stenting.",
    "anticoagulants": "Hold Warfarin 5 days prior (target INR ≤ 1.4-1.5); hold DOACs 48 hours prior (72h if renal impairment); stop IV Heparin 4-6h prior.",
    "metformin": "Withhold Metformin on procedure day and for 48 hours post-procedure due to iodinated contrast.",
    "antihypertensives": "Continue baseline beta-blockers and cardiovascular medications with sips of water; hold morning ACE-inhibitors/ARBs."
  },
  "medicationHoldsHi": {
    "antiplatelets": "चालू।",
    "anticoagulants": "मानक नियम।",
    "metformin": "बंद।",
    "antihypertensives": "चालू।"
  },
  "hydrationProtocolEn": "Pre-hydration with 0.9% Normal Saline at 1 mL/kg/h for 6-12 hours prior and 6-12 hours post-procedure for contrast nephropathy prevention; enforce Cigarroa MACD limit = (5 × Weight)/Cr.",
  "hydrationProtocolHi": "आईवी हाइड्रेशन।",
  "bloodProductsArrangedEn": "Type and screen; blood products on standby.",
  "bloodProductsArrangedHi": "टाइप व स्क्रीन।",
  "specialPrecautionsEn": [
    "Baseline d-dimer, fibrinogen, platelets to rule out consumptive coagulopathy (Kassabach-Merritt / severe LIC)",
    "Cumulative bleomycin exposure calculation (lifetime limit < 300-400 mg or < 15 mg/session in adults, < 0.5 mg/kg in pediatrics)",
    "Chest radiograph and baseline pulmonary function testing"
  ],
  "specialPrecautionsHi": [
    "ब्लियोमाइसिन की कुल खुराक प्रति सत्र < 0.5-1 mg/kg और जीवन भर की कुल खुराक < 300 mg की सख्त सीमा।",
    "फ्लोरोस्कोपी पर कंट्रास्ट डालकर सामान्य नसों में तेजी से दवा न जाए, यह देखना।"
  ]
},
    id: "kts-sclerotherapy"
  },
};

/**
 * Convenience Getter Functions
 */
export function getVascularConsentTemplate(id: string): ProcedureConsentTemplate | undefined {
  return VASCULAR_AND_AORTIC_CONSENT_TEMPLATES[id];
}

export function getVascularPreparationCriteria(id: string): ProcedureClinicalPreparation | undefined {
  return VASCULAR_AND_AORTIC_PREPARATION_CRITERIA[id];
}

/**
 * Standard Default Clean Export
 */
export const vascularAndAorticConsent = VASCULAR_AND_AORTIC_CONSENT_TEMPLATES;
export const vascularAndAorticPreparation = VASCULAR_AND_AORTIC_PREPARATION_CRITERIA;

export default VASCULAR_AND_AORTIC_CONSENT_TEMPLATES;
