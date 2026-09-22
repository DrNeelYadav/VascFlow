/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 * 
 * Statutory Bilingual (Hindi & English) Informed Consent Templates
 * & Clinical Preparation Criteria for Venous, Dialysis Access & Non-Vascular Interventions.
 * 
 * Compliant with National Medical Commission (NMC), Indian Medical Council,
 * and Supreme Court Guidelines (Samira Kohli vs. Dr. Prabha Manchanda Standard).
 */

import { ProcedureConsentTemplate } from "../consentData";

export interface MedicationHoldingRule {
  drug: string;
  holdingInstruction: string;
}

export interface ClinicalPrepCriteria {
  procedureId: string;
  category: string;
  riskTier: "LOW" | "MODERATE" | "HIGH";
  labThresholds: {
    platelets: string;
    inr: string;
    creatinineEgfr?: string;
    hemoglobin?: string;
    viralSerology?: string;
    specialLabs?: string;
  };
  fastingHours: {
    solids: number;
    liquids: number;
  };
  medicationHolding: MedicationHoldingRule[];
  preProcedureHydration?: string;
  postOpSurveillance: string[];
  dischargeReadinessCriteria: string[];
  specialPreps?: string[];
}

export const VENOUS_AND_DIALYSIS_CONSENT_TEMPLATES: Record<string, ProcedureConsentTemplate> = {
  "avf_radiocephalic_pta": {
      "id": "avf_radiocephalic_pta",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "Radiocephalic (Brescia-Cimino) AV Fistula Plain Balloon Angioplasty (PTA)",
      "nameHi": "रेडियोकेफेलिक (कलाई) एवी फिस्टुला बैलून एंजियोप्लास्टी (कलाई के डायलिसिस फिस्टुला की नस को गुब्बारे से खोलना)",
      "indicationEn": "Clinically significant (>50% luminal reduction) forearm cephalic vein outflow stenosis causing elevated dialysis circuit venous pressures, circuit flow Qa < 500 mL/min, or prolonged bleeding post-cannulation.",
      "indicationHi": "कलाई के पास डायलिसिस फिस्टुला की नस में 50% से अधिक सिकुड़न, डायलिसिस के दौरान मशीन का अत्यधिक दबाव (हाई वेनस प्रेशर), रक्त प्रवाह में कमी अथवा सुई निकालने के बाद देर तक खून बहना।",
      "descriptionEn": "Under local anesthesia and ultrasound guidance, percutaneous vascular access is obtained in the fistula tract. Under fluoroscopy, a hydrophilic guidewire crosses the stenotic forearm segment, followed by controlled dilation using an appropriately sized high-pressure angioplasty balloon (5-6 mm) to restore full luminal caliber.",
      "descriptionHi": "सोनोग्राफी की मदद से फिस्टुला की नस में सुन्न करने का इंजेक्शन लगाकर एक बारीक कैथेटर नली डाली जाती है। एक्स-रे की निगरानी में एक बारीक तार सिकुड़न के पार ले जाकर वहां 5 से 6 मिमी का विशेष उच्च-दाब गुब्बारा फुलाया जाता है जिससे नस का रास्ता दोबारा खुल जाता है।",
      "benefitsEn": [
          "Restores adequate blood flow (>500 mL/min) necessary for efficient hemodialysis clearances.",
          "Reduces dialysis venous circuit pressure, eliminating machine alarms and prolonged post-dialysis bleeding.",
          "Salvages the existing mature fistula, avoiding temporary or tunneled catheter insertion."
      ],
      "benefitsHi": [
          "डायलिसिस के लिए आवश्यक रक्त प्रवाह (खून की रफ्तार) दोबारा सामान्य होना जिससे डायलिसिस अच्छी तरह हो सके।",
          "डायलिसिस मशीन में बार-बार अलार्म बजना बंद होना और डायलिसिस के बाद सुई की जगह से खून बहना रुकना।",
          "मौजूदा फिस्टुला को बंद होने से बचाना, जिससे गले में दर्दनाक अस्थायी नली (कैथेटर) डालने की आवश्यकता नहीं पड़ती।"
      ],
      "specificRisksEn": [
          "Vessel rupture or contrast extravasation during high-pressure inflation (1-3%, may require balloon tamponade or emergency covered stent).",
          "Acute post-angioplasty fistula thrombosis secondary to flow-limiting intimal dissection (<2%).",
          "Access site hematoma or pseudoaneurysm formation.",
          "Distal hand ischemia or steal symptoms due to altered hemodynamics."
      ],
      "specificRisksHi": [
          "गुब्बारा फुलाते समय अत्यधिक दबाव से नस में दरार या फटना (1-3%, जिसे गुब्बारा दबाकर या स्टेंट लगाकर बंद किया जाता है)।",
          "प्रक्रिया के तुरंत बाद नस में खून का थक्का जमना जिससे फिस्टुला बंद हो सकता है (<2%)।",
          "सुई लगने की जगह पर खून का रिसाव, थक्का जमना (हेमेटोमा) या सूजन होना।",
          "प्रक्रिया के बाद हाथ की उंगलियों में हल्का ठंडापन या सुन्नपन महसूस होना।"
      ],
      "alternativesEn": "Surgical patch angioplasty, surgical jump graft revision, creation of a new upstream fistula (brachiocephalic), or placement of a tunneled hemodialysis catheter (Permcath).",
      "alternativesHi": "ऑपरेशन द्वारा नस को काटकर ठीक करना, कोहनी पर नया फिस्टुला बनाना, अथवा गले में पक्की डायलिसिस नली (Permcath) डालना।",
      "sedationTypeEn": "Local infiltration anesthesia (1-2% Lignocaine) with optional IV analgesia (Fentanyl) during painful balloon inflation.",
      "sedationTypeHi": "नस में सुई लगाने की जगह पर स्थानीय सुन्नता (Local Anesthesia) तथा गुब्बारा फुलाते समय दर्द कम करने की नस द्वारा दवा।"
  },
  "avf_juxta_conquest": {
      "id": "avf_juxta_conquest",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "Brachiocephalic AVF Juxta-Anastomotic Stenosis Ultra-High-Pressure Balloon Angioplasty (Conquest/Atlas)",
      "nameHi": "ब्रेकियोकेफेलिक एवी फिस्टुला जुक्सटा-एनास्टोमोटिक सिकुड़न अल्ट्रा-हाई-प्रेशर एंजियोप्लास्टी (कोहनी के जोड़ के पास कठोर नस को खोलना)",
      "indicationEn": "High-grade fibrotic juxta-anastomotic stenosis (first 2-3 cm from arteriovenous anastomosis) in a brachiocephalic AVF causing access dysfunction, thrill loss, or inadequate dialysis adequacy (Kt/V < 1.2).",
      "indicationHi": "कोहनी के जोड़ पर मुख्य धमनी और नस के मिलन स्थल (एनास्टोमोसिस) के ठीक पास अत्यधिक कठोर सिकुड़न, फिस्टुला में कंपन (Thrill) खत्म होना या डायलिसिस ठीक से न होना।",
      "descriptionEn": "Under ultrasound guidance, retrograde or antegrade access is established in the cephalic vein. Using high-pressure non-compliant balloons rated up to 30 atmospheres (e.g. Conquest / Atlas), the rigid fibromuscular hyperplastic waist at the juxta-anastomotic segment is fractured and effaced under continuous fluoroscopy.",
      "descriptionHi": "सोनोग्राफी द्वारा कोहनी की नस में नली डालकर एक्स-रे में नस की सिकुड़न को देखा जाता है। 30 एटमॉस्फियर तक अत्यधिक दबाव सहन करने वाले विशेष गैर-लचीले गुब्बारे (Conquest/Atlas) की मदद से कठोर फाइब्रस सिकुड़न को तोड़कर नस को पूरी तरह फैलाया जाता है।",
      "benefitsEn": [
          "Overcomes rigid fibrotic resistance refractory to conventional balloons.",
          "Restores strong palpable thrill and diastolic flow into the draining cephalic vein.",
          "Extends functional lifespan of the brachiocephalic access circuit."
      ],
      "benefitsHi": [
          "कठोर सिकुड़न को पूरी तरह खोलना जो साधारण गुब्बारों से नहीं खुल पाती।",
          "फिस्टुला में मजबूत कंपन और खून का बहाव तुरंत दोबारा शुरू होना।",
          "कोहनी के फिस्टुला की कार्यक्षमता और जीवन को लम्बा खींचना।"
      ],
      "specificRisksEn": [
          "Juxta-anastomotic venous rupture from ultra-high inflation pressures requiring immediate prolonged balloon occlusion or covered stenting.",
          "Arterial spasm or dissection of the adjacent brachial artery.",
          "Acute thrombosis or re-occlusion within 24-48 hours.",
          "Local hematoma at the puncture site."
      ],
      "specificRisksHi": [
          "अत्यधिक दबाव के कारण नस के फटने का जोखिम, जिसके लिए तुरंत गुब्बारे से दबाव बनाकर या कवर्ड स्टेंट लगाकर नस सील करनी पड़ सकती है।",
          "हाथ की मुख्य धमनी में सिकुड़न या चोट।",
          "प्रक्रिया के 24-48 घंटों के भीतर नस में दोबारा थक्का जमना।",
          "सुई के स्थान पर खून का थक्का या सूजन।"
      ],
      "alternativesEn": "Surgical anastomotic refashioning (surgical juxta-anastomotic bypass or revision), conversion to arteriovenous graft (AVG), or Permcath placement.",
      "alternativesHi": "सर्जरी द्वारा जोड़ को दोबारा काटकर नया जोड़ बनाना, कृत्रिम नली (Graft) लगाना, या गले में डायलिसिस कैथेटर डालना।",
      "sedationTypeEn": "Local anesthesia with monitored conscious sedation (IV Midazolam/Fentanyl) due to substantial pain during ultra-high pressure fracture.",
      "sedationTypeHi": "स्थानीय सुन्नता का इंजेक्शन एवं नस द्वारा शांत करने व दर्द निवारक दवाइयां (Conscious Sedation)।"
  },
  "avf_brachiobasilic_transposition_pta_stent": {
      "id": "avf_brachiobasilic_transposition_pta_stent",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "Brachiobasilic Transposition AVF Outflow Stenosis PTA & Stenting",
      "nameHi": "ब्रेकियोबेसिलिक ट्रांसपोजिशन फिस्टुला आउटफ्लो सिकुड़न एंजियोप्लास्टी एवं स्टेंटिंग (अंदरूनी नस की सिकुड़न में स्टेंट लगाना)",
      "indicationEn": "Recurrent or recalcitrant stenosis along the transposed basilic vein tunnel or swing segment, associated with cannulation failure, elevated dynamic pressures, or localized aneurysmal dilatation.",
      "indicationHi": "हाथ के अंदरूनी हिस्से की नस (बेसिलिक नस) के मुड़ाव या टनल वाले हिस्से में बार-बार सिकुड़न आना, सुई लगाने में कठिनाई या अत्यधिक वेनस प्रेशर।",
      "descriptionEn": "Transposed basilic vein is cannulated under ultrasound. The stenosis is crossed with an angled wire, dilated with high-pressure balloons, and if elastic recoil (>30% residual stenosis) or flow-limiting dissection occurs, a dedicated flexible self-expanding nitinol stent or covered stent-graft is deployed.",
      "descriptionHi": "सोनोग्राफी से बेसिलिक नस में तार डालकर सिकुड़न को गुब्बारे द्वारा चौड़ा किया जाता है। यदि गुब्बारा निकालने के बाद नस दोबारा सिकुड़ जाती है या अंदरूनी परत में दरार आती है, तो वहां एक लचीला धातु का स्टेंट (Stent) लगाया जाता है ताकि नस हमेशा खुली रहे।",
      "benefitsEn": [
          "Eliminates elastic recoil in challenging transposed venous tunnels.",
          "Restores uniform lumen diameter for predictable, safe two-needle dialysis cannulation.",
          "Prevents repeated fistula clottings and access failure."
      ],
      "benefitsHi": [
          "नस के बार-बार सिकुड़ने की समस्या से स्थायी राहत।",
          "डायलिसिस के समय दोनों सुइयां आसानी से और सुरक्षित रूप से लगना।",
          "फिस्टुला के बंद होने और खराब होने के खतरे को टालना।"
      ],
      "specificRisksEn": [
          "Stent migration, fracture, or crushing from external pressure in the upper arm.",
          "In-stent restenosis requiring surveillance and repeat balloon dilation.",
          "Venous rupture necessitating emergency stent-graft deployment.",
          "Puncture site pseudoaneurysm."
      ],
      "specificRisksHi": [
          "स्टेंट का अपनी जगह से खिसकना, टूटना या बाहर से दबाव पड़ने पर दब जाना।",
          "स्टेंट के अंदर भविष्य में दोबारा मांसल परत जमना (In-stent restenosis) जिसे दोबारा साफ करना पड़ सकता है।",
          "नस का फटना जिसके लिए आपातकालीन कवर्ड स्टेंट लगाना पड़ सकता है।",
          "सुई के स्थान पर गांठ या खून का थक्का बनना।"
      ],
      "alternativesEn": "Surgical venous superficialization revision, open surgical jump graft, or conversion to a prosthetic graft.",
      "alternativesHi": "ओपन सर्जरी द्वारा नस का मुड़ाव बदलना, बाईपास ग्राफ्ट लगाना या परमैकैथ डालना।",
      "sedationTypeEn": "Local anesthesia with IV analgesia.",
      "sedationTypeHi": "लोकल एनेस्थीसिया (स्थानीय सुन्नता) एवं नस द्वारा दर्द निवारक।"
  },
  "avf_cephalic_arch_cas_viabahn": {
      "id": "avf_cephalic_arch_cas_viabahn",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "Cephalic Arch Stenosis (CAS) Ultra-High-Pressure Angioplasty & Viabahn Covered Stenting",
      "nameHi": "केफेलिक आर्च स्टेनोसिस एंजियोप्लास्टी एवं वायाभान कवर्ड स्टेंटिंग (कंधे के पास मुख्य नस की सिकुड़न में स्टेंट लगाना)",
      "indicationEn": "Refractory stenosis at the cephalic vein arch terminating into the axillary vein in a brachiocephalic AVF, causing marked upper extremity edema, prolonged cannulation bleeding, and recurrent access failure.",
      "indicationHi": "कंधे के पास केफेलिक नस के मोड़ पर गंभीर सिकुड़न, जिसके कारण पूरे हाथ और कंधे में भारी सूजन, डायलिसिस के बाद घंटों खून बहना और फिस्टुला के बंद होने का खतरा।",
      "descriptionEn": "Via peripheral fistula access, a hydrophilic wire crosses the cephalic arch into the axillary vein. Following pre-dilation with high-pressure balloons, a flexible heparin-bonded PTFE-covered stent (Gore Viabahn) is precisely deployed across the arch and post-dilated, optimizing outflow hemodynamics.",
      "descriptionHi": "हाथ के फिस्टुला से तार डालकर कंधे के पास जहां नस बड़ी नस से मिलती है, उस मोड़ पर गुब्बारा फुलाया जाता है। उसके बाद एक विशेष आवरणयुक्त लचीला स्टेंट (Viabahn Stent-Graft) उस मोड़ पर प्रत्यारोपित किया जाता है ताकि नस दोबारा न सिकुड़े।",
      "benefitsEn": [
          "Dramatically resolves upper extremity and hand swelling by restoring unobstructed drainage into the deep axillary system.",
          "Significantly superior primary patency compared to balloon angioplasty alone at the cephalic arch.",
          "Normalizes dialysis circuit venous pressure."
      ],
      "benefitsHi": [
          "हाथ, कंधे और उंगलियों की अत्यधिक सूजन से तुरंत मुक्ति।",
          "साधारण गुब्बारे की तुलना में स्टेंट लगाने से नस के लम्बे समय तक खुले रहने की संभावना बहुत अधिक।",
          "डायलिसिस का उच्च वेनस प्रेशर सामान्य होना।"
      ],
      "specificRisksEn": [
          "Jailing or accidental occlusion of the adjacent axillary/subclavian venous drainage.",
          "Stent migration into the central circulation or right atrium during deployment.",
          "Edge stenosis proximal or distal to the covered stent requiring re-intervention.",
          "Acute in-stent thrombosis."
      ],
      "specificRisksHi": [
          "बगल की मुख्य नस (Axillary vein) के रास्ते में रुकावट आना।",
          "स्टेंट का अपनी जगह से खिसककर दिल या छाती की नस की तरफ चले जाने का अत्यंत दुर्लभ जोखिम।",
          "स्टेंट के दोनों किनारों पर भविष्य में दोबारा सिकुड़न आना।",
          "स्टेंट में अचानक खून का थक्का जमना।"
      ],
      "alternativesEn": "Surgical cephalic vein transposition (turn-down to axillary or internal jugular vein) or placement of an AVG loop.",
      "alternativesHi": "सर्जरी द्वारा नस का मुंह बदलकर छाती की दूसरी नस से जोड़ना या नया ग्राफ्ट लगाना।",
      "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं नस द्वारा शामक/दर्द निवारक दवा।"
  },
  "avf_accessory_branch_embolization": {
      "id": "avf_accessory_branch_embolization",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "Radiocephalic AVF Accessory Branch Embolization (Coil / Vascular Plug)",
      "nameHi": "रेडियोकेफेलिक एवी फिस्टुला एक्सेसरी ब्रांच एम्बोलाइजेशन (फिस्टुला की फालतू शाखाओं को छल्ले/प्लग द्वारा बंद करना)",
      "indicationEn": "Failure of fistula maturation due to large competing accessory tributary veins stealing blood flow away from the main cannulation tract (flow diversion).",
      "indicationHi": "फिस्टुला की मुख्य नस का मोटा और परिपक्व (Mature) न होना, क्योंकि फिस्टुला से निकलने वाली फालतू नसें खून का बहाव चुराकर दूसरी तरफ ले जा रही हैं।",
      "descriptionEn": "The main fistula vein is cannulated under ultrasound. Using a microcatheter system, competing collateral branches are selectively catheterized and permanently occluded using metallic microcoils or vascular plugs (Amplatzer Vascular Plug), redirecting 100% of blood flow into the primary fistula trunk.",
      "descriptionHi": "फिस्टुला की नस में माइक्रो-कैथेटर (अति-सूक्ष्म नली) डालकर खून चुराने वाली फालतू शाखाओं में छोटे धातु के छल्ले (Coils) या प्लग लगाए जाते हैं ताकि वे बंद हो जाएं और सारा खून मुख्य नस में बहने लगे, जिससे नस फूलकर डायलिसिस योग्य बन सके।",
      "benefitsEn": [
          "Increases blood volume and flow rate in the main cephalic vein by 50-100%, accelerating fistula maturation.",
          "Permits successful needle cannulation without open surgical ligation.",
          "Minimally invasive endovascular procedure performed without surgical incisions."
      ],
      "benefitsHi": [
          "मुख्य नस में खून की रफ्तार दोगुनी होना, जिससे नस फूलकर जल्द डायलिसिस के लिए तैयार हो जाती है।",
          "बिना कोई चीरा लगाए केवल सुई के रास्ते फालतू नसों का स्थायी इलाज।",
          "अस्पताल से उसी दिन छुट्टी।"
      ],
      "specificRisksEn": [
          "Non-target embolization of coils/plugs into the central venous circulation or pulmonary artery.",
          "Transient localized pain or phlebitis along the embolized tributary.",
          "Persistent non-maturation due to occult downstream stenosis.",
          "Access site hematoma."
      ],
      "specificRisksHi": [
          "धातु के छल्ले का खिसककर फेफड़े या छाती की मुख्य नस में चले जाने का दुर्लभ जोखिम।",
          "बंद की गई नस में कुछ दिनों तक हल्का दर्द या सूजन।",
          "यदि नस में आगे कोई अन्य सिकुड़न हो तो नस के फूलने में कमी रहना।",
          "सुई के स्थान पर हल्का नीला पड़ना या खून जमना।"
      ],
      "alternativesEn": "Surgical cutdown and ligation of accessory venous branches under local anesthesia.",
      "alternativesHi": "चीरा लगाकर फालतू नसों को धागे से बांधने का ऑपरेशन (Surgical Ligation)।",
      "sedationTypeEn": "Local anesthesia alone.",
      "sedationTypeHi": "केवल स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "endoavf_ellipsys_creation": {
      "id": "endoavf_ellipsys_creation",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "Percutaneous Endovascular AVF Creation (Ellipsys Vascular Access System)",
      "nameHi": "परक्यूटेनियस एंडोवैस्कुलर एवी फिस्टुला क्रिएशन (एलिप्सिस तकनीक - बिना चीर-फाड़ के सुई से नया फिस्टुला बनाना)",
      "indicationEn": "Patients with end-stage renal disease (ESRD) requiring permanent hemodialysis access with suitable radial artery (>=2.0 mm) and perforating vein (>=2.0 mm) anatomy without prior surgical scars.",
      "indicationHi": "गुर्दा रोग (किडनी फेलियर) के मरीजों में डायलिसिस हेतु नया फिस्टुला बनाना, जहां कलाई की धमनी और नस की बनावट बिना चीरे के सुई द्वारा नया जोड़ बनाने के लिए उपयुक्त हो।",
      "descriptionEn": "Under ultrasound guidance, a single percutaneous puncture is made into the proximal radial artery and adjacent perforating cubital vein. The Ellipsys catheter is advanced across, capturing both vessel walls. Thermal resistance energy is applied, fusing and cutting the tissue to create a pristine anastomotic fistula without open surgical dissection.",
      "descriptionHi": "सोनोग्राफी की सहायता से कोहनी के पास धमनी और नस में एक सुई डाली जाती है। एलिप्सिस कैथेटर द्वारा दोनों नसों की दीवारों को आपस में जोड़कर विशेष थर्मल ऊर्जा (हल्की गर्मी) से एक प्राकृतिक सुराख (फिस्टुला) बना दिया जाता है। इसमें कोई चीरा, टांका या घाव नहीं होता।",
      "benefitsEn": [
          "No surgical scars, no surgical dissection, and near-zero surgical wound infections.",
          "Lower incidence of early juxta-anastomotic intimal hyperplasia compared to surgical AVFs.",
          "High patient satisfaction and preservation of forearm vascular real estate."
      ],
      "benefitsHi": [
          "शरीर पर कोई कट, चीरा या टांका नहीं, जिससे घाव में मवाद या इन्फेक्शन का खतरा बिल्कुल नहीं रहता।",
          "पारंपरिक ऑपरेशन की तुलना में नस के सिकुड़ने की संभावना कम होना।",
          "हाथ की सुंदरता बरकरार रहना और जल्द ठीक होना।"
      ],
      "specificRisksEn": [
          "Failure of anastomosis creation requiring open surgical conversion.",
          "Brachial/radial artery pseudoaneurysm, dissection, or spasm.",
          "Delayed or slow maturation requiring secondary balloon maturation assistance.",
          "Deep vein thrombosis or hematoma."
      ],
      "specificRisksHi": [
          "फिस्टुला का सही से न बन पाना जिसके लिए सामान्य ऑपरेशन की जरूरत पड़ सकती है।",
          "हाथ की मुख्य धमनी में सिकुड़न, चोट या खून का रिसाव।",
          "फिस्टुला को डायलिसिस के लिए पूरी तरह तैयार होने में अतिरिक्त समय लगना या बाद में गुब्बारे से फुलाने की आवश्यकता होना।",
          "खून का थक्का जमना।"
      ],
      "alternativesEn": "Standard open surgical radiocephalic or brachiocephalic AV fistula creation, or arteriovenous prosthetic graft.",
      "alternativesHi": "हाथ पर चीरा लगाकर सामान्य ऑपरेशन द्वारा फिस्टुला बनाना, या कृत्रिम ग्राफ्ट लगाना।",
      "sedationTypeEn": "Local anesthesia with regional block (axillary/brachial plexus block) or mild conscious sedation.",
      "sedationTypeHi": "हाथ सुन्न करने का नर्व ब्लॉक इंजेक्शन (Regional Block) अथवा स्थानीय सुन्नता।"
  },
  "endoavf_wavelinq_creation": {
      "id": "endoavf_wavelinq_creation",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "Percutaneous Endovascular AVF Creation (WavelinQ 4F EndoAVF System)",
      "nameHi": "वेवलिंक एंडोएवीएफ फिस्टुला क्रिएशन (दोहरी कैथेटर तकनीक द्वारा सुई से फिस्टुला बनाना)",
      "indicationEn": "Non-surgical candidates for hemodialysis access creation with paired radial/ulnar artery and adjacent deep vein diameter >= 2.0 mm on Doppler mapping.",
      "indicationHi": "डायलिसिस के लिए बिना चीर-फाड़ नया फिस्टुला बनाना, जहां कलाई या अग्रभुजा की धमनी और नस की मोटाई 2 मिमी या उससे अधिक हो।",
      "descriptionEn": "Dual 4F catheters are placed under fluoroscopy—one in the target artery and one in the adjacent vein. Rare-earth magnets align the two catheters precisely across the vessel walls. Radiofrequency energy is activated for 1-2 seconds, creating a clean channel between artery and vein, followed by embolization of the brachial vein if indicated to direct flow superficially.",
      "descriptionHi": "एक्स-रे की निगरानी में दो पतली नलियां डाली जाती हैं—एक धमनी में और एक नस में। दोनों नलियों के सिरों पर लगे विशेष चुंबक उन्हें एक-दूसरे से सटीक रूप से चिपका देते हैं। इसके बाद रेडियोफ्रीक्वेंसी ऊर्जा द्वारा एक सेकेंड में दोनों नसों के बीच रक्त प्रवाह का प्राकृतिक रास्ता तैयार कर दिया जाता है।",
      "benefitsEn": [
          "Completely percutaneous creation of ulnar or radial AV fistulas with zero surgical incisions.",
          "Preserves superficial veins for future access options if ever required.",
          "Lower systemic steal syndrome compared to large surgical brachiocephalic fistulas."
      ],
      "benefitsHi": [
          "बिना किसी चीरे या टांके के नया फिस्टुला बनना।",
          "हाथ की त्वचा की ऊपरी नसों को सुरक्षित रखना ताकि वे भविष्य में भी काम आ सकें।",
          "हाथ में खून की कमी (Steal syndrome) का खतरा पारंपरिक ऑपरेशन से कम होना।"
      ],
      "specificRisksEn": [
          "Target vessel perforation or arteriovenous dissection.",
          "Failure of fistula maturation requiring secondary angioplasty or coil embolization of deep veins.",
          "Radial/ulnar artery occlusion.",
          "Forearm compartment syndrome or hematoma."
      ],
      "specificRisksHi": [
          "नस या धमनी में सुई से अतिरिक्त छेद होना या खून का रिसाव।",
          "फिस्टुला का धीमी गति से तैयार होना जिसके लिए आगे चलकर गुब्बारा फुलाने की आवश्यकता हो सकती है।",
          "हाथ की मुख्य धमनी का अस्थायी रूप से बंद होना।",
          "हाथ में अत्यधिक सूजन या मांसपेशियों में खिंचाव।"
      ],
      "alternativesEn": "Surgical AVF creation (Brescia-Cimino or brachiocephalic), prosthetic AV graft, or tunneled catheter.",
      "alternativesHi": "चीरा लगाकर फिस्टुला का सामान्य ऑपरेशन, कृत्रिम ग्राफ्ट या परमैकैथ।",
      "sedationTypeEn": "Local anesthesia with regional nerve block and conscious sedation.",
      "sedationTypeHi": "हाथ को सुन्न करने का विशेष ब्लॉक इंजेक्शन (Brachial Block) एवं हल्की बेहोशी।"
  },
  "avg_arterial_anastomosis_pta": {
      "id": "avg_arterial_anastomosis_pta",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "AV Graft Arterial Anastomosis Stenosis Balloon Angioplasty",
      "nameHi": "एवी ग्राफ्ट आर्टीरियल एनास्टोमोसिस एंजियोप्लास्टी (कृत्रिम ग्राफ्ट के धमनी वाले जोड़ की सिकुड़न खोलना)",
      "indicationEn": "Hemodynamically significant stenosis at the arterial inflow anastomosis of a prosthetic dialysis graft (AVG), presenting with poor arterial pull, low circuit flow, or collapse during dialysis aspiration.",
      "indicationHi": "कृत्रिम डायलिसिस ग्राफ्ट (AVG) के उस जोड़ पर सिकुड़न जहां से खून ग्राफ्ट में प्रवेश करता है, जिसके कारण डायलिसिस मशीन में खून का खिंचाव कम होना या ग्राफ्ट का बार-बार पिचकना।",
      "descriptionEn": "Retrograde puncture of the prosthetic graft is performed under ultrasound. A low-profile balloon catheter is navigated across the arterial anastomosis into the native brachial/radial artery. Controlled angioplasty is performed to expand the inflow lumen while carefully avoiding arterial dissection.",
      "descriptionHi": "ग्राफ्ट में सुई लगाकर एक्स-रे की निगरानी में एक बारीक गुब्बारा धमनी वाले जोड़ तक ले जाया जाता है। वहां गुब्बारे को सावधानीपूर्वक फुलाकर जोड़ को चौड़ा किया जाता है ताकि धमनी से ग्राफ्ट में पूरा खून आने लगे।",
      "benefitsEn": [
          "Restores adequate inflow into the dialysis graft, preventing total graft thrombosis.",
          "Maintains effective blood aspiration rates (>350 mL/min) on the dialysis machine.",
          "Prolongs the functional life of synthetic dialysis conduits."
      ],
      "benefitsHi": [
          "ग्राफ्ट में खून का भरपूर प्रवाह दोबारा शुरू होना, जिससे ग्राफ्ट में थक्का जमने से बचाव होता है।",
          "डायलिसिस मशीन पर बिना रुकावट के खून का सही बहाव मिलना।",
          "महंगे कृत्रिम ग्राफ्ट को खराब होने से बचाना।"
      ],
      "specificRisksEn": [
          "Dissection or rupture of the native feeding artery (brachial/radial artery).",
          "Distal embolic shower causing digital micro-emboli and hand pain.",
          "Graft pseudoaneurysm at the cannulation site.",
          "Acute thrombosis requiring urgent thrombectomy."
      ],
      "specificRisksHi": [
          "मुख्य धमनी की दीवार का छिलना या फटना।",
          "खून के नन्हें कण उंगलियों की बारीक नसों में चले जाना जिससे उंगलियों में दर्द या नीलापन हो सकता है।",
          "सुई लगाने की जगह पर ग्राफ्ट में खून की गांठ (स्यूडोएन्यूरिज्म) बनना।",
          "अचानक ग्राफ्ट में थक्का जमना।"
      ],
      "alternativesEn": "Surgical jump graft revision, surgical thrombectomy and patch angioplasty, or conversion to a new access site.",
      "alternativesHi": "ऑपरेशन द्वारा जोड़ को दोबारा जोड़ना, नया ग्राफ्ट लगाना या परमैकैथ डालना।",
      "sedationTypeEn": "Local infiltration anesthesia with IV analgesia.",
      "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं दर्द निवारक।"
  },
  "avg_venous_anastomosis_pta_stent": {
      "id": "avg_venous_anastomosis_pta_stent",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "AV Graft Venous Anastomosis Pseudo-Intimal Hyperplasia Angioplasty & Covered Stenting",
      "nameHi": "एवी ग्राफ्ट वेनस एनास्टोमोसिस एंजियोप्लास्टी एवं कवर्ड स्टेंटिंग (ग्राफ्ट के निकास वाले जोड़ की सिकुड़न में स्टेंट लगाना)",
      "indicationEn": "Intractable fibromuscular intimal hyperplasia at the graft-vein outflow anastomosis (>50% stenosis) resulting in severe venous hypertension, prolonged bleeding, or recurrent graft thrombosis.",
      "indicationHi": "ग्राफ्ट और नस के मिलन स्थल पर कठोर मांसल परत जमने से नस का बंद होना, जिसके कारण हाथ में सूजन, अत्यधिक वेनस प्रेशर और ग्राफ्ट में बार-बार खून का थक्का जमना।",
      "descriptionEn": "Antegrade access into the graft is obtained. Following high-pressure balloon dilation, if elastic recoil or recurrent stenosis occurs, a dedicated covered stent-graft (e.g., Gore Viabahn or Bard Flair) is deployed across the venous anastomosis, extending into the native draining vein.",
      "descriptionHi": "ग्राफ्ट में नली डालकर जोड़ की सिकुड़न को उच्च-दाब गुब्बारे से फैलाया जाता है। यदि नस दोबारा सिकुड़ती है, तो उस जोड़ पर कपड़े जैसी विशेष परत से ढका हुआ स्टेंट (Covered Stent-Graft) लगा दिया जाता है ताकि नस हमेशा के लिए खुली रहे।",
      "benefitsEn": [
          "Proven superior patency of covered stent-grafts over plain balloon angioplasty at the graft-vein junction.",
          "Prevents recurrent acute graft thrombosis and emergency declotting procedures.",
          "Normalizes dialysis venous return pressure."
      ],
      "benefitsHi": [
          "साधारण गुब्बारे की तुलना में कवर्ड स्टेंट लगाने से जोड़ के लम्बे समय तक खुले रहने की सिद्ध सफलता।",
          "ग्राफ्ट में बार-बार खून जमने की समस्या से स्थायी छुटकारा।",
          "हाथ की सूजन और डायलिसिस का अत्यधिक दबाव खत्म होना।"
      ],
      "specificRisksEn": [
          "Stent-edge restenosis or intimal hyperplasia at the distal venous landing zone.",
          "Stent migration, malposition, or infection.",
          "Graft rupture at the anastomotic suture line requiring emergency balloon occlusion.",
          "In-stent thrombosis."
      ],
      "specificRisksHi": [
          "स्टेंट के अगले सिरे पर भविष्य में दोबारा सिकुड़न आना।",
          "स्टेंट का अपनी जगह से खिसकना या स्टेंट में इन्फेक्शन होना।",
          "जोड़ के फटने का जोखिम जिसके लिए तत्काल कवर्ड स्टेंट से सील करना पड़ता है।",
          "स्टेंट में खून का थक्का जमना।"
      ],
      "alternativesEn": "Surgical outflow jump graft to higher deep veins (axillary or jugular vein), surgical patch venoplasty, or new fistula creation.",
      "alternativesHi": "ओपन सर्जरी द्वारा बाईपास नली को ऊपर की नस से जोड़ना या नया फिस्टुला बनाना।",
      "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं नस द्वारा हल्की बेहोशी व दर्द निवारक दवा।"
  },
  "avf_acute_clot_pharmacomechanical_thrombectomy": {
      "id": "avf_acute_clot_pharmacomechanical_thrombectomy",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "Acute Clotted AV Fistula Pharmacomechanical Thrombectomy (Aspirex / Cleaner) & Lyse-and-Wait",
      "nameHi": "अचानक बंद हुए फिस्टुला की थ्रॉम्बेक्टोमी (थक्का तोड़ना व खींचना - बंद पड़े फिस्टुला को तत्काल खोलना)",
      "indicationEn": "Acute thrombosis of a mature arteriovenous fistula with sudden cessation of thrill/bruit (<48-72 hours duration) precluding scheduled hemodialysis.",
      "indicationHi": "अचानक डायलिसिस फिस्टुला का बंद हो जाना, फिस्टुला में कंपन या आवाज (Bruit/Thrill) पूरी तरह बंद हो जाना और फिस्टुला में खून का थक्का जमना।",
      "descriptionEn": "Criss-cross dual-sheath access or single-sheath access is established under ultrasound. Thrombolytic agent (Alteplase 2-5 mg) is pulse-sprayed into the clot. A rotational mechanical thrombectomy device (Cleaner / Aspirex) or aspiration catheter macerates and extracts the clot burden, followed by balloon angioplasty of the causative underlying stenosis.",
      "descriptionHi": "फिस्टुला में दो सुइयां डालकर थक्के को गलाने की दवा (Alteplase) छोड़ी जाती है। इसके बाद एक विशेष घूमने वाले कैथेटर या सक्शन मशीन (Cleaner/Aspirex) द्वारा थक्के को महीन टुकड़ों में पीसकर बाहर निकाल लिया जाता है। इसके तुरंत बाद जिस रुकावट के कारण थक्का जमा था, उसे गुब्बारे से फुलाकर फिस्टुला को चालू किया जाता है।",
      "benefitsEn": [
          "Immediate salvage and restoration of flow in an acutely clotted fistula without open surgical incisional exploration.",
          "Identifies and treats the underlying culprit stenosis in the same session.",
          "Avoids emergency insertion of a central venous hemodialysis catheter."
      ],
      "benefitsHi": [
          "बिना किसी बड़े ऑपरेशन के अचानक बंद हुए फिस्टुला को उसी दिन तुरंत चालू करना।",
          "थक्का बनने की मूल वजह (नस की सिकुड़न) का पता लगाकर उसी समय गुब्बारे से ठीक करना।",
          "गले में आपातकालीन डायलिसिस नली डालने की तकलीफ से मरीज को बचाना।"
      ],
      "specificRisksEn": [
          "Distal arterial embolization of thrombus fragments into the radial/ulnar or digital arteries (requiring aspiration or intra-arterial vasodilators/lysis).",
          "Symptomatic pulmonary embolism from dislodged venous clot (<1%).",
          "Venous rupture or extravasation during aggressive thrombectomy/angioplasty.",
          "Early re-thrombosis within 24-72 hours."
      ],
      "specificRisksHi": [
          "थक्के के नन्हें टुकड़े हाथ की उंगलियों की धमनियों में जाने से उंगलियों में दर्द या खून की कमी का खतरा।",
          "थक्के का टुकड़ा फेफड़ों की नस में चले जाना (पल्मोनरी एम्बोलिज्म - 1% से कम)।",
          "नस का फटना या सुई के स्थान से खून बहना।",
          "प्रक्रिया के 1-3 दिन के भीतर दोबारा थक्का जमने की संभावना।"
      ],
      "alternativesEn": "Surgical Fogarty catheter thrombectomy under local anesthesia, surgical fistula abandonment and creation of a new access, or placement of a Permcath.",
      "alternativesHi": "ओपन सर्जरी द्वारा चीरा लगाकर थक्का निकालना, फिस्टुला को बंद मानकर नया फिस्टुला बनाना या गले में कैथेटर डालना।",
      "sedationTypeEn": "Local anesthesia with IV analgesia and conscious sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं नस द्वारा दर्द निवारक व शामक दवा।"
  },
  "avg_acute_clot_fogarty_declot": {
      "id": "avg_acute_clot_fogarty_declot",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "Acute Clotted Forearm Loop AV Graft Mechanical Thrombectomy & Fogarty Balloon Declot",
      "nameHi": "अचानक बंद हुए कृत्रिम एवी ग्राफ्ट का डिक्लोटिंग उपचार (फॉगार्र्टी बैलून द्वारा थक्का बाहर निकालना)",
      "indicationEn": "Acute thrombotic occlusion of a prosthetic loop or straight arteriovenous graft (PTFE) within 1-7 days of cessation of flow.",
      "indicationHi": "हाथ में लगे कृत्रिम डायलिसिस ग्राफ्ट में खून का थक्का जमने से ग्राफ्ट का पूरी तरह बंद हो जाना।",
      "descriptionEn": "Crossed-sheath technique is used. Low-profile over-the-wire Fogarty balloon catheters are passed into the venous and arterial limbs. The arterial plug is dislodged and pulled back into the graft lumen, while venous thrombus is swept into the central circulation or aspirated. Angioplasty of the venous anastomotic stenosis is completed.",
      "descriptionHi": "ग्राफ्ट में विपरीत दिशाओं में दो छोटी नलियां डाली जाती हैं। एक विशेष गुब्बारे वाले कैथेटर (Fogarty balloon) की सहायता से ग्राफ्ट के अंदर जमे पूरे थक्के को खींचकर बाहर निकाला जाता है और निकास वाली नस की सिकुड़न को फुलाकर ग्राफ्ट को तुरंत चालू किया जाता है।",
      "benefitsEn": [
          "Rapid restoration of graft patency in a single outpatient session.",
          "Eliminates the entire thrombus burden without extensive open surgery.",
          "Allows same-day or next-day hemodialysis via the salvaged graft."
      ],
      "benefitsHi": [
          "कुछ ही घंटों में बंद पड़े ग्राफ्ट का पुनः चालू होना।",
          "बिना कोई बड़ा चीरा लगाए पूरे थक्के की सुरक्षित सफाई।",
          "मरीज उसी दिन या अगले दिन उसी ग्राफ्ट से डायलिसिस करवा सकता है।"
      ],
      "specificRisksEn": [
          "Arterial steal or distal arterial embolization into the palmar arches.",
          "Graft disruption or suture line blowout at the venous anastomosis.",
          "Subclinical or symptomatic pulmonary embolism.",
          "Immediate re-thrombosis due to resistant outflow stenosis."
      ],
      "specificRisksHi": [
          "हाथ की उंगलियों में खून का थक्का चले जाना।",
          "ग्राफ्ट के टांकों वाली जगह पर चोट या रिसाव।",
          "फेफड़ों की नसों में थक्का जाने का जोखिम।",
          "प्रक्रिया के तुरंत बाद ग्राफ्ट में दोबारा थक्का जमना।"
      ],
      "alternativesEn": "Surgical graft thrombectomy with patch revision, graft abandonment, or Permcath insertion.",
      "alternativesHi": "चीरा लगाकर सर्जरी द्वारा थक्का निकालना, नया ग्राफ्ट लगाना या परमैकैथ डालना।",
      "sedationTypeEn": "Local anesthesia with IV sedation.",
      "sedationTypeHi": "लोकल एनेस्थीसिया और हल्की शामक दवा।"
  },
  "avf_pseudoaneurysm_covered_stent_exclusion": {
      "id": "avf_pseudoaneurysm_covered_stent_exclusion",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "AV Fistula Venous Outflow Pseudoaneurysm Covered Stent Exclusion (Fluency / Viabahn)",
      "nameHi": "एवी फिस्टुला स्यूडोएन्यूरिज्म कवर्ड स्टेंट एक्सक्लूजन (फिस्टुला की नस में बने खतरनाक खून के गुब्बारे को स्टेंट से बंद करना)",
      "indicationEn": "Rapidly expanding, painful, or skin-thinning pseudoaneurysm or true aneurysm along the dialysis cannulation zone at high risk of spontaneous external rupture and fatal exsanguination.",
      "indicationHi": "फिस्टुला की नस पर खून की बड़ी थैली या गुब्बारा (Pseudoaneurysm) बनना, जिसकी ऊपर की चमड़ी बिल्कुल पतली, चमकदार हो गई हो और जिसके कभी भी फटकर जानलेवा रक्तस्राव होने का भारी खतरा हो।",
      "descriptionEn": "Under fluoroscopic and ultrasound guidance, vascular access is secured remote from the aneurysm. A covered stent-graft (e.g. Gore Viabahn or Fluency) sized 10-20% larger than the native landing veins is deployed across the neck of the pseudoaneurysm, excluding blood flow from the sac while maintaining in-line flow through the stent lumen.",
      "descriptionHi": "फिस्टुला में सुरक्षित दूरी पर नली डालकर एक्स-रे की मदद से एक विशेष कपड़े से ढका हुआ वाटर-प्रूफ स्टेंट (Covered Stent-Graft) उस फूली हुई थैली के आर-पार लगाया जाता है। स्टेंट के खुलते ही खून का बहाव स्टेंट के अंदर से होने लगता है और कमजोर थैली में खून जाना पूरी तरह बंद हो जाता है जिससे फटने का खतरा टल जाता है।",
      "benefitsEn": [
          "Instantly eliminates the catastrophic risk of fatal spontaneous pseudoaneurysm rupture.",
          "Preserves the existing vascular access circuit without requiring surgical ligation.",
          "Promotes gradual shrinkage and thrombosis of the excluded aneurysm sac."
      ],
      "benefitsHi": [
          "थैली फटने से होने वाले अत्यधिक और जानलेवा खून बहने के खतरे को तुरंत खत्म करना।",
          "फिस्टुला को बंद होने से बचाना ताकि डायलिसिस जारी रह सके।",
          "फूली हुई गांठ का धीरे-धीरे सूखकर सिकुड़ जाना।"
      ],
      "specificRisksEn": [
          "Endoleak (type I or type II) with persistent pressurization of the aneurysm sac.",
          "Covered stent infection, particularly if cannulated through the stent fabric prematurely.",
          "Stent migration, fracture, or thrombosis.",
          "Access site hematoma."
      ],
      "specificRisksHi": [
          "स्टेंट के किनारे से थैली में हल्का खून रिसते रहना (एंडोलीक), जिसके लिए अतिरिक्त उपचार की जरूरत हो सकती है।",
          "स्टेंट में संक्रमण (Infection) होना, विशेषकर यदि स्टेंट पर गलती से डायलिसिस की सुई लगा दी जाए।",
          "स्टेंट का अपनी जगह से खिसकना या स्टेंट में थक्का जमना।",
          "सुई के स्थान पर खून का जमाव।"
      ],
      "alternativesEn": "Open surgical aneurysm resection with interposition vein graft or prosthetic conduit, or surgical fistula ligation and Permcath placement.",
      "alternativesHi": "चीरा लगाकर नस की थैली को काटकर निकालना और नई नस जोड़ना, अथवा फिस्टुला को हमेशा के लिए बंद कर गले में कैथेटर डालना।",
      "sedationTypeEn": "Local infiltration anesthesia with monitored IV analgesia/sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता तथा आवश्यकतानुसार दर्द निवारक दवा।"
  },
  "avf_pseudoaneurysm_thrombin_injection": {
      "id": "avf_pseudoaneurysm_thrombin_injection",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "AV Fistula Pseudoaneurysm Ultrasound-Guided Percutaneous Thrombin Injection",
      "nameHi": "एवी फिस्टुला स्यूडोएन्यूरिज्म थ्रॉम्बिन इंजेक्शन (सोनोग्राफी देखकर खून की थैली में दवा डालकर जमाना)",
      "indicationEn": "Focal post-cannulation pseudoaneurysm with a narrow neck arising from a hemodialysis fistula or graft, demonstrating persistent 'yin-yang' swirling color flow and risk of enlargement.",
      "indicationHi": "डायलिसिस की सुई लगने के बाद नस से रिसकर बनी खून की थैली (Pseudoaneurysm), जिसका मुंह संकरा हो और जिसमें खून का भंवर घूम रहा हो।",
      "descriptionEn": "Under high-frequency real-time Doppler ultrasound guidance, a 22G spinal needle is accurately placed into the center of the pseudoaneurysm sac away from the neck. Human or bovine thrombin (100-500 IU) is slowly injected under continuous visualization until instant thrombosis of the sac is observed, with careful preservation of flow in the parent vein.",
      "descriptionHi": "हाई-डेफिनिशन सोनोग्राफी मशीन की लाइव निगरानी में एक अत्यंत बारीक सुई सीधे उस खून की थैली के बीच में डाली जाती है। मुख्य नस से सुरक्षित दूरी रखते हुए थक्के जमाने वाली विशेष दवा (थ्रॉम्बिन) की कुछ बूंदें डाली जाती हैं, जिससे थैली में भरा खून कुछ ही सेकंडों में जमकर ठोस हो जाता है और मुख्य नस सुरक्षित रहती है।",
      "benefitsEn": [
          "Immediate, non-surgical cure of post-cannulation pseudoaneurysms.",
          "Extremely safe, minimally invasive outpatient bed-side or suite procedure taking < 15 minutes.",
          "Zero recovery downtime; avoids open vascular surgery."
      ],
      "benefitsHi": [
          "बिना किसी ऑपरेशन के केवल एक सुई की मदद से खून की थैली का तत्काल पक्का इलाज।",
          "अत्यंत सुरक्षित और 15 मिनट में होने वाली आसान प्रक्रिया।",
          "अस्पताल में भर्ती होने की जरूरत नहीं, तुरंत घर जा सकते हैं।"
      ],
      "specificRisksEn": [
          "Inadvertent escape of thrombin into the parent fistula vein causing downstream thrombosis of the fistula circuit.",
          "Systemic thromboembolism or distal digital embolization.",
          "Allergic or anaphylactic reaction to thrombin preparation (rare).",
          "Recurrence of pseudoaneurysm requiring repeat injection or surgical repair."
      ],
      "specificRisksHi": [
          "दवा का मुख्य नस में चले जाने का जोखिम जिससे पूरी नस में थक्का जम सकता है।",
          "थक्के का टुकड़ा हाथ की उंगलियों में चले जाना।",
          "दवा से एलर्जी की दुर्लभ संभावना।",
          "थैली का दोबारा खुलना जिसके लिए दोबारा इंजेक्शन या ऑपरेशन की जरूरत पड़ सकती है।"
      ],
      "alternativesEn": "Ultrasound-guided compression therapy, endovascular covered stenting, or surgical ligation and vein repair.",
      "alternativesHi": "सोनोग्राफी प्रोब से घंटों दबाकर रखना, कवर्ड स्टेंट लगाना या चीरा लगाकर ऑपरेशन करना।",
      "sedationTypeEn": "Local skin anesthesia with 1% Lignocaine (without epinephrine).",
      "sedationTypeHi": "त्वचा पर सुन्न करने का हल्का इंजेक्शन (Local Anesthesia)।"
  },
  "avf_dass_miller_banding": {
      "id": "avf_dass_miller_banding",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "Dialysis Access Steal Syndrome: Minimally Invasive Flow Reduction (MILLER Banding)",
      "nameHi": "डायलिसिस एक्सेस स्टील सिंड्रोम: मिलर बैंडिंग तकनीक (हाथ में खून की कमी दूर करने हेतु फिस्टुला को नियंत्रित रूप से कसना)",
      "indicationEn": "Dialysis Access-Associated Steal Syndrome (DASS) or high-output cardiac failure due to excessive fistula flow (Qa > 1500-2000 mL/min), causing hand pain, coldness, numbness, or digital ischemia during dialysis.",
      "indicationHi": "फिस्टुला में अत्यधिक खून बहने के कारण हाथ की उंगलियों में खून की कमी होना (Steal Syndrome) - उंगलियों में तेज दर्द, ठंडा पड़ना, नीलापन, छाले पड़ना अथवा हृदय पर अत्यधिक दबाव (High Output Heart Failure) पड़ना।",
      "descriptionEn": "Under fluoroscopy and local anesthesia, a balloon catheter of calibrated diameter (e.g. 3-4 mm) is inflated inside the inflow tract of the fistula. A non-absorbable ligature or suture is tightened externally around the vein over the inflated balloon under direct tactile and manometric control (MILLER technique), reducing fistula flow while preserving distal hand perfusion.",
      "descriptionHi": "फिस्टुला की नस के अंदर एक छोटा गुब्बारा फुलाया जाता है। नस के बाहर एक छोटा चीरा लगाकर उस गुब्बारे के ऊपर एक मजबूत धागे से नस को उतना ही कसा जाता है जितना जरूरी हो। इससे फिस्टुला का बहाव नियंत्रित हो जाता है और हाथ की उंगलियों को पर्याप्त खून मिलने लगता है जबकि डायलिसिस भी चलता रहता है।",
      "benefitsEn": [
          "Prompt relief of severe ischemic hand pain, digital coldness, and rest pain.",
          "Preserves the dialysis fistula for continuing hemodialysis while curing arterial steal.",
          "Precisely calibrated, reproducible flow reduction with intra-procedural hemodynamic feedback."
      ],
      "benefitsHi": [
          "हाथ और उंगलियों के तेज दर्द, ठंडेपन और सुन्नपन से तुरंत राहत।",
          "फिस्टुला को बंद किए बिना बचाए रखना ताकि डायलिसिस भी चलता रहे और हाथ भी सुरक्षित रहे।",
          "अत्यंत सटीक और नपा-तुला इलाज।"
      ],
      "specificRisksEn": [
          "Over-banding resulting in acute thrombosis and loss of the fistula access.",
          "Under-banding with persistent or recurrent steal symptoms.",
          "Wound infection or erosion of the banding suture.",
          "Access site hematoma."
      ],
      "specificRisksHi": [
          "नस ज्यादा कस जाने पर फिस्टुला में थक्का जमना और फिस्टुला का बंद हो जाना।",
          "नस कम कसने पर हाथ के दर्द और ठंडेपन में पूरा आराम न मिलना।",
          "टांके की जगह पर इन्फेक्शन होना या घाव पकना।",
          "सुई या चीरे की जगह पर खून जमना।"
      ],
      "alternativesEn": "Surgical DRIL procedure (Distal Revascularization Interval Ligation), surgical RUDI/PAI procedures, or complete surgical fistula ligation.",
      "alternativesHi": "बड़ा ऑपरेशन (DRIL प्रक्रिया) जिसमें पैर से नस निकालकर हाथ की बाईपास सर्जरी की जाती है, अथवा फिस्टुला को हमेशा के लिए बांधकर बंद करना।",
      "sedationTypeEn": "Local anesthesia with IV sedation or regional block.",
      "sedationTypeHi": "स्थानीय सुन्नता अथवा हाथ का नर्व ब्लॉक इंजेक्शन एवं शामक दवा।"
  },
  "avf_dass_clip_suture_banding": {
      "id": "avf_dass_clip_suture_banding",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "Dialysis Access Steal Syndrome: Percutaneous Balloon-Assisted Clip Banding",
      "nameHi": "डायलिसिस एक्सेस स्टील सिंड्रोम: क्लिप बैंडिंग प्रक्रिया (गुब्बारे की मदद से क्लिप लगाकर फिस्टुला का बहाव सीमित करना)",
      "indicationEn": "Symptomatic hand hypoperfusion from hyperdynamic arteriovenous fistula flow refractory to conservative measures.",
      "indicationHi": "फिस्टुला के बहुत तेज चलने के कारण हाथ की उंगलियों में खून न पहुंचना और डायलिसिस के दौरान हाथ में असहनीय दर्द होना।",
      "descriptionEn": "A semi-compliant angioplasty balloon (2.5-4 mm) is positioned across the fistula inflow. Under fluoroscopic manometry, titanium surgical clips or non-absorbable sutures are deployed percutaneously around the vein segment constrained by the balloon, securing exact hemodynamic luminal narrowing.",
      "descriptionHi": "नस के अंदर एक 3 मिमी का गुब्बारा फुलाकर बाहर से टाइटेनियम की क्लिप या टांके से नस को नियंत्रित रूप से बांध दिया जाता है जिससे हाथ की उंगलियों की ओर जाने वाला खून बढ़ जाता है।",
      "benefitsEn": [
          "Minimally invasive percutaneous flow tapering with minimal tissue trauma.",
          "Immediate restoration of palpable radial/ulnar pulses and digital oximetry.",
          "Dialysis access remains fully viable."
      ],
      "benefitsHi": [
          "बिना बड़ा चीरा लगाए नसों के बहाव को संतुलित करना।",
          "हाथ की नब्ज (Pulse) तुरंत वापस आना और उंगलियों का रंग सामान्य होना।",
          "डायलिसिस फिस्टुला सुचारू रूप से चलता रहना।"
      ],
      "specificRisksEn": [
          "Acute fistula thrombosis if band is over-tightened.",
          "Clip dislodgement or migration.",
          "Inadequate flow reduction.",
          "Puncture site bleeding."
      ],
      "specificRisksHi": [
          "नस अधिक दबने से फिस्टुला का रुक जाना।",
          "क्लिप का अपनी जगह से हिलना।",
          "खून की गति में पर्याप्त सुधार न होना।",
          "खून का रिसाव।"
      ],
      "alternativesEn": "Open surgical banding, DRIL procedure, or fistula ligation.",
      "alternativesHi": "ओपन सर्जरी द्वारा नस बांधना, जटिल बाईपास ऑपरेशन या फिस्टुला बंद करना।",
      "sedationTypeEn": "Local anesthesia with IV analgesia.",
      "sedationTypeHi": "स्थानीय सुन्नता और दर्द निवारक।"
  },
  "cvs_subclavian_pta_stent": {
      "id": "cvs_subclavian_pta_stent",
      "category": "Central Venous Stenosis & Occlusion",
      "nameEn": "Central Venous Stenosis: Subclavian Vein Balloon Venoplasty & Bare Metal Stenting",
      "nameHi": "सबक्लेवियन नस की सिकुड़न: बैलून वेनोप्लास्टी एवं स्टेंटिंग (हंसली की हड्डी के नीचे मुख्य नस को खोलना व स्टेंट लगाना)",
      "indicationEn": "Symptomatic high-grade stenosis or occlusion of the subclavian vein in a dialysis patient presenting with marked ipsilateral arm edema, dilated chest wall collateral veins, and severely elevated dialysis circuit pressures.",
      "indicationHi": "हंसली की हड्डी के नीचे स्थित मुख्य नस (Subclavian vein) में गंभीर रुकावट, जिसके कारण पूरे हाथ, कंधे और चेहरे पर भारी सूजन, छाती पर उभरी हुई नीली नसें और डायलिसिस में अत्यधिक दबाव होना।",
      "descriptionEn": "Via forearm fistula or femoral access, guidewires cross the subclavian stenosis into the superior vena cava. High-pressure large-diameter balloons (10-14 mm) dilate the lesion. If elastic recoil >30% or extrinsic bone compression is present, a dedicated bare metal self-expanding nitinol stent is precisely placed, avoiding the costoclavicular junction.",
      "descriptionHi": "हाथ या जांघ की नस से तार डालकर हंसली की हड्डी के नीचे वाली मुख्य नस की रुकावट को पार किया जाता है। 10 से 14 मिमी के बड़े गुब्बारे से नस को फुलाया जाता है। यदि नस दोबारा सिकुड़ती है, तो वहां एक मजबूत धातु की जालीदार नली (Stent) प्रत्यारोपित की जाती है ताकि छाती का रास्ता खुला रहे।",
      "benefitsEn": [
          "Rapid resolution of disfiguring, painful arm and facial swelling.",
          "Normalizes venous return, allowing normal, problem-free hemodialysis sessions.",
          "Avoids loss of existing dialysis fistula or graft access."
      ],
      "benefitsHi": [
          "हाथ, कंधे और चेहरे की भयंकर सूजन और दर्द से तुरंत राहत।",
          "खून का बहाव दिल की तरफ सामान्य होना जिससे डायलिसिस बिना किसी परेशानी के होने लगता है।",
          "हाथ के फिस्टुला को बंद होने से बचाना।"
      ],
      "specificRisksEn": [
          "Stent fracture or crushing due to repetitive musculoskeletal motion at the thoracic outlet.",
          "Vessel rupture or mediastinal hemorrhage requiring covered stent deployment.",
          "In-stent restenosis from neointimal hyperplasia requiring future re-dilations.",
          "Stent migration into the right atrium."
      ],
      "specificRisksHi": [
          "हंसली की हड्डी और पसलियों की हलचल के दबाव से स्टेंट का दबना या टूटना।",
          "नस के फटने से छाती के अंदर रक्तस्राव का जोखिम (जिसके लिए आपातकालीन कवर्ड स्टेंट लगाया जाता है)।",
          "भविष्य में स्टेंट के अंदर दोबारा सिकुड़न आना जिसके लिए दोबारा गुब्बारा फुलाना पड़ सकता है।",
          "स्टेंट का अपनी जगह से दिल की तरफ खिसकना।"
      ],
      "alternativesEn": "Surgical subclavian-jugular bypass, claviculectomy for thoracic outlet decompression, or abandonment of the access.",
      "alternativesHi": "छाती का बड़ा ऑपरेशन करके नसों का बाईपास बनाना, हंसली की हड्डी काटना, या फिस्टुला को हमेशा के लिए बंद करना।",
      "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं नस द्वारा शामक/दर्द निवारक दवा।"
  },
  "cvo_brachiocephalic_sharp_recanalization": {
      "id": "cvo_brachiocephalic_sharp_recanalization",
      "category": "Central Venous Stenosis & Occlusion",
      "nameEn": "Central Venous Occlusion: Brachiocephalic Vein Sharp Recanalization (RF Wire / Chiba Needle)",
      "nameHi": "ब्रेकियोकेफेलिक नस का क्रोनिक ब्लॉकेज: शार्प रीकैनेलाइजेशन (पूरी तरह बंद मुख्य नस को विशेष सुई/आरएफ तार से छेदकर नया रास्ता बनाना)",
      "indicationEn": "Chronic, impenetrable total occlusion (CTO) of the innominate/brachiocephalic vein refractory to standard blunt catheter and guidewire crossing, in a dialysis patient with exhausted vascular options.",
      "indicationHi": "छाती के भीतर की मुख्य नस (Brachiocephalic Vein) का वर्षों से पूरी तरह बंद और पथरीला हो जाना, जिसे साधारण तार से नहीं खोला जा सकता और मरीज के पास डायलिसिस के लिए कोई अन्य नस नहीं बची हो।",
      "descriptionEn": "Dual access is obtained (femoral and ipsilateral arm/jugular). A target snare is positioned on one side of the occlusion. A stiff transseptal needle, Chiba needle, or radiofrequency wire (PowerWire) is carefully driven under biplane fluoroscopy across the fibrous occlusive plug directly into the snare loop. The wire is captured, externalized, dilated with serial balloons, and stabilized with covered or bare stents.",
      "descriptionHi": "जांघ और हाथ दोनों तरफ से नलियां डाली जाती हैं। रुकावट के एक तरफ एक फंदा (Snare) रखा जाता है और दूसरी तरफ से एक विशेष नुकीली सुई या रेडियोफ्रीक्वेंसी तार से एक्स-रे की दोहरी निगरानी में उस पथरीली रुकावट को छेदते हुए फंदे के अंदर ले जाया जाता है। इसके बाद उस रास्ते को गुब्बारों से चौड़ा करके धातु का स्टेंट लगा दिया जाता है।",
      "benefitsEn": [
          "Restores outflow patency when all conventional endovascular techniques have failed.",
          "Life-saving salvage of the patient's remaining hemodialysis access circuit.",
          "Resolves massive refractory arm and superior vena cava collateral congestion."
      ],
      "benefitsHi": [
          "जब सारे रास्ते बंद हो चुके हों, तब भी पूरी तरह बंद नस को दोबारा चालू करने की आधुनिकतम तकनीक।",
          "मरीज के अंतिम बचे हुए डायलिसिस फिस्टुला को बचाकर जीवनदान देना।",
          "हाथ, गर्दन और छाती की असहनीय सूजन को दूर करना।"
      ],
      "specificRisksEn": [
          "Catastrophic mediastinal perforation, hemothorax, or pericardial tamponade from extravascular needle pass (requiring emergency thoracotomy or covered stent).",
          "Damage to the ascending aorta, brachiocephalic artery, or pulmonary artery.",
          "Stent migration or acute re-thrombosis.",
          "Pneumothorax."
      ],
      "specificRisksHi": [
          "सुई के गलत दिशा में जाने से छाती के भीतर या दिल की थैली में जानलेवा रक्तस्राव (Hemothorax/Tamponade), जिसके लिए तत्काल छाती का ऑपरेशन या कवर्ड स्टेंट की आवश्यकता हो सकती है।",
          "छाती की मुख्य महाधमनी को चोट पहुंचना।",
          "स्टेंट का अपनी जगह से हिलना या थक्का जमना।",
          "फेफड़े में हवा भरना (न्यूमोथोरैक्स)।"
      ],
      "alternativesEn": "Surgical sternotomy and central venous bypass graft, HeRO graft, or lifelong translumbar/transhepatic dialysis catheter.",
      "alternativesHi": "छाती की हड्डी को बीच से काटकर बाईपास सर्जरी करना, या कमर/लिवर के रास्ते डायलिसिस कैथेटर डालना।",
      "sedationTypeEn": "General Anesthesia or Monitored Anesthesia Care (MAC) with deep sedation.",
      "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा गहन मॉनीटर्ड बेहोशी।"
  },
  "cvo_svc_kissing_balloon_stent": {
      "id": "cvo_svc_kissing_balloon_stent",
      "category": "Central Venous Stenosis & Occlusion",
      "nameEn": "Superior Vena Cava (SVC) Stenosis: Kissing Balloon Angioplasty & Bilateral Stenting",
      "nameHi": "सुपीरियर वेना कावा (एसवीसी) सिकुड़न: किसिंग बैलून एंजियोप्लास्टी एवं बाईलेटरल स्टेंटिंग (छाती की दोनों मुख्य नसों में एक साथ स्टेंट लगाना)",
      "indicationEn": "Bifurcation stenosis involving both right and left brachiocephalic vein junctions emptying into the superior vena cava, threatening bilateral upper extremity and cranial venous drainage.",
      "indicationHi": "छाती की सबसे बड़ी नस (SVC) और दोनों तरफ की मुख्य नसों के जोड़ पर गंभीर रुकावट, जिसके कारण दोनों हाथों, गर्दन और पूरे चेहरे पर अत्यधिक सूजन तथा सांस लेने में तकलीफ।",
      "descriptionEn": "Bilateral simultaneous access is secured. Two large balloons and stents are navigated across the confluence into the SVC in parallel ('kissing' configuration). They are simultaneously deployed and expanded to avoid crushing one branch while opening the other, reconstructing the carina of the superior vena cava.",
      "descriptionHi": "दोनों तरफ की नसों से एक साथ दो गुब्बारे और दो मजबूत धातु के स्टेंट छाती की मुख्य नस में लाकर एक साथ फुलाए जाते हैं (Kissing Technique)। इससे दोनों तरफ का रास्ता एक समान खुलता है और कोई भी नस दबने से बच जाती है।",
      "benefitsEn": [
          "Simultaneously relieves venous hypertension across both upper extremities and cerebral drainage.",
          "Reconstructs the anatomical bifurcation without leaving unaerated residual stenosis.",
          "Ensures long-term patency of bilaterally dependent dialysis circuits."
      ],
      "benefitsHi": [
          "दोनों हाथों, गर्दन और चेहरे की सूजन से एक साथ पूर्ण छुटकारा।",
          "नसों के प्राकृतिक जोड़ को दोबारा पूरी तरह नया और मजबूत रास्ता देना।",
          "दोनों हाथों के डायलिसिस फिस्टुला को लम्बे समय तक चालू रखना।"
      ],
      "specificRisksEn": [
          "SVC rupture with catastrophic pericardial tamponade or hemothorax.",
          "Asymmetric stent expansion or stent crushing.",
          "Stent migration into the right ventricle or atrium.",
          "Cardiac arrhythmias."
      ],
      "specificRisksHi": [
          "छाती की मुख्य नस के फटने से दिल के चारों ओर खून जमा होना जो जानलेवा हो सकता है।",
          "एक स्टेंट द्वारा दूसरे स्टेंट का दब जाना।",
          "स्टेंट का खिसककर दिल के अंदर चले जाना।",
          "दिल की धड़कन में अचानक असंतुलन।"
      ],
      "alternativesEn": "Open surgical central venous reconstruction under cardiopulmonary bypass, or supportive elevation and palliative dialysis access.",
      "alternativesHi": "हार्ट-लंग मशीन पर दिल और छाती खोलकर बाईपास सर्जरी, या अन्य आपातकालीन कैथेटर।",
      "sedationTypeEn": "General Anesthesia or Deep Conscious Sedation.",
      "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा गहरी शामक दवाइयां।"
  },
  "hero_graft_endovascular_deployment": {
      "id": "hero_graft_endovascular_deployment",
      "category": "Central Venous Stenosis & Occlusion",
      "nameEn": "Dialysis Access HeRO (Hemodialysis Reliable Outflow) Graft Endovascular Deployment",
      "nameHi": "हीरो ग्राफ्ट एंडोवैस्कुलर डिप्लॉयमेंट (छाती की बंद नसों को बाईपास करके सीधे दिल में उतरने वाला विशेष डायलिसिस ग्राफ्ट)",
      "indicationEn": "Catheter-dependent ESRD patients with bilateral central venous occlusions who have exhausted all upper arm AV fistula/graft possibilities but have patent femoral or brachial arterial inflow.",
      "indicationHi": "ऐसे किडनी फेलियर के मरीज जिनकी छाती की सभी मुख्य नसें पूरी तरह बंद हो चुकी हों, कोई सामान्य फिस्टुला बनना असंभव हो और जो बार-बार गले के कैथेटर से परेशान और संक्रमण के शिकार हो रहे हों।",
      "descriptionEn": "Under general anesthesia, the Venous Outflow Component (a reinforced silicone tube) is advanced percutaneously across the central venous occlusion into the right atrium. A standard ePTFE arterial graft is tunneled through the arm, anastomosed to the brachial artery, and mechanically joined to the venous component using a proprietary connector.",
      "descriptionHi": "बेहोशी में एक विशेष सिलिकॉन ट्यूब को छाती की बंद नसों के आर-पार सीधे दिल के दाहिने हिस्से (Right Atrium) तक पहुंचाया जाता है। हाथ में चमड़ी के नीचे एक कृत्रिम ग्राफ्ट डालकर उसे धमनी से जोड़ा जाता है और फिर उसे इस सिलिकॉन ट्यूब से जोड़ दिया जाता है। मरीज इसी ग्राफ्ट से सीधे डायलिसिस करवा सकता है।",
      "benefitsEn": [
          "Provides reliable subcutaneous hemodialysis access in patients with zero remaining central veins.",
          "Significantly lower bacteremia and infection rates compared to chronic hemodialysis catheters (up to 70% reduction).",
          "Higher dialysis blood flow rates (>400 mL/min) and superior Kt/V clearances."
      ],
      "benefitsHi": [
          "जिन मरीजों की छाती की नसें बंद हो चुकी हैं, उनके लिए यह एकमात्र क्रांतिकारी जीवनरक्षक विकल्प है।",
          "गले के कैथेटर की तुलना में खून में इन्फेक्शन (Bacteremia) का खतरा 70% तक कम हो जाना।",
          "डायलिसिस के दौरान बेहतरीन रफ्तार और शरीर से कचरे की पूरी सफाई।"
      ],
      "specificRisksEn": [
          "Right atrial or central venous perforation with pericardial effusion or cardiac tamponade.",
          "Arterial steal syndrome in the cannulated arm.",
          "Graft thrombosis or fibrous encapsulation at the atrial tip.",
          "Prosthetic device infection requiring total surgical explantation."
      ],
      "specificRisksHi": [
          "दिल की दीवार या मुख्य नस में चोट लगने से दिल के चारों ओर खून जमा होने का जोखिम।",
          "हाथ में खून की कमी (Steal Syndrome) से दर्द या उंगलियों का ठंडा होना।",
          "ग्राफ्ट में खून का थक्का जमना।",
          "ग्राफ्ट में गंभीर संक्रमण होने पर पूरे ग्राफ्ट को ऑपरेशन से निकालना पड़ सकता है।"
      ],
      "alternativesEn": "Translumbar or transhepatic IVC catheter, peritoneal dialysis, or lower extremity thigh AVG.",
      "alternativesHi": "कमर या लिवर के रास्ते जीवनभर कैथेटर डलवाना, पेट वाली डायलिसिस (Peritoneal Dialysis), या जांघ में ग्राफ्ट लगाना।",
      "sedationTypeEn": "General Anesthesia with endotracheal intubation.",
      "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) सांस की नली डालकर।"
  },
  "cvo_left_bc_outback_reentry": {
      "id": "cvo_left_bc_outback_reentry",
      "category": "Central Venous Stenosis & Occlusion",
      "nameEn": "Left Brachiocephalic Vein CTO Crossing with Outback / Frontrunner Re-Entry Catheter",
      "nameHi": "लेफ्ट ब्रेकियोकेफेलिक नस का री-एंट्री कैथेटर द्वारा ब्लॉकेज खोलना (विशेष आउटबैक सुई द्वारा बंद नस को पुनः मुख्य रास्ते में लाना)",
      "indicationEn": "Subintimal dissection during recanalization attempts of a left brachiocephalic chronic total occlusion, where standard wires cannot re-enter the true lumen of the superior vena cava.",
      "indicationHi": "बाईं तरफ की मुख्य नस की पुरानी रुकावट खोलते समय तार का नस की दीवार की परतों के बीच चले जाना और मुख्य नस में वापस न आ पाना।",
      "descriptionEn": "An Outback LTD or Pioneer catheter is advanced into the subintimal space. Under orthogonal fluoroscopic views, the catheter is rotated until the marker aligns with the SVC lumen. A nitinol needle is extruded through the intervening tissue into the true lumen, allowing wire passage and subsequent stenting.",
      "descriptionHi": "एक विशेष दिशा-निर्देशित कैथेटर (Outback Catheter) को नस के अंदर ले जाया जाता है। एक्स-रे में देखकर उसकी सुई को सीधे मुख्य नस के केंद्र में दागा जाता है जिससे रास्ता तुरंत मिल जाता है। इसके बाद तार डालकर गुब्बारा फुलाया जाता है और स्टेंट लगा दिया जाता है।",
      "benefitsEn": [
          "Enables successful crossing of complex central occlusions that would otherwise be abandoned.",
          "Prevents extensive false-lumen propagation and mediastinal hematoma.",
          "Salvages left arm dialysis fistula drainage."
      ],
      "benefitsHi": [
          "ऐसी जटिल रुकावटों को भी सफलता से खोलना जिन्हें साधारण तौर पर छोड़ना पड़ता था।",
          "नस की दीवार फटने के खतरे को टालना।",
          "बाएं हाथ के डायलिसिस फिस्टुला को बचाना।"
      ],
      "specificRisksEn": [
          "Mediastinal perforation or arterial puncture (aorta or left carotid artery).",
          "Needle breakage or catheter malfunction.",
          "Venous dissection and loss of collateral pathways.",
          "Acute thrombosis."
      ],
      "specificRisksHi": [
          "छाती की मुख्य धमनी में सुई लगने से अंदरूनी रक्तस्राव का जोखिम।",
          "कैथेटर की खराबी या सुई टूटना।",
          "नस की परतों का छिलना।",
          "नस में अचानक थक्का जमना।"
      ],
      "alternativesEn": "Sharp needle recanalization, surgical bypass, or right-sided access creation.",
      "alternativesHi": "शार्प नीडल तकनीक, ओपन सर्जरी बाईपास, अथवा दाएं हाथ में नया फिस्टुला बनाना।",
      "sedationTypeEn": "General anesthesia or deep conscious sedation.",
      "sedationTypeHi": "पूर्ण बेहोशी अथवा गहरी शामक दवा।"
  },
  "permcath_right_ijv_placement": {
      "id": "permcath_right_ijv_placement",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "nameEn": "Tunneled Cuffed Dual-Lumen Hemodialysis Catheter (Permcath) Placement via Right Internal Jugular Vein",
      "nameHi": "परमैकैथ प्रत्यारोपण - राइट इंटरनल जुगुलर वेन (दाहिनी गर्दन की नस से छाती की चमड़ी के नीचे पक्की डायलिसिस नली डालना)",
      "indicationEn": "Need for long-term hemodialysis vascular access in patients with acute-on-chronic kidney disease, non-maturing AV fistulas, failed vascular accesses, or awaiting kidney transplantation.",
      "indicationHi": "गुर्दा फेलियर के मरीजों में लम्बे समय तक नियमित डायलिसिस के लिए गर्दन की नस के रास्ते छाती पर पक्की, कफ वाली नली (परमैकैथ) डालना, जब तक हाथ का फिस्टुला तैयार न हो या जब फिस्टुला बनना संभव न हो।",
      "descriptionEn": "Under ultrasound guidance, the right internal jugular vein is punctured. Under fluoroscopy, a subcutaneous tunnel is created across the anterior chest wall. A cuffed dual-lumen catheter (14.5F, 19-24 cm) is pulled through the tunnel placing the Dacron cuff 2 cm inside the exit site. The catheter is advanced over a guidewire into the right atrium, verified by fluoroscopy, and locked with heparin.",
      "descriptionHi": "सोनोग्राफी की मदद से गर्दन की दाहिनी नस को देखकर सुन्न किया जाता है। छाती की चमड़ी के नीचे एक छोटा रास्ता (Tunnel) बनाकर विशेष कफ वाली दोहरी नली (Permacath) को अंदर डालकर दिल के दाहिने हिस्से के मुहाने पर स्थापित किया जाता है। एक्स-रे पर सटीक स्थिति देखकर नली में हेपरिन का ताला (Lock) लगा दिया जाता है।",
      "benefitsEn": [
          "Provides immediate, dependable high-volume blood flow (>350 mL/min) for dialysis.",
          "Subcutaneous Dacron cuff creates a tissue seal, dramatically reducing bacterial migration and infection compared to temporary lines.",
          "Straight, direct anatomical trajectory via right IJV minimizes central vein thrombosis and stenosis."
      ],
      "benefitsHi": [
          "डायलिसिस के लिए तुरंत भरपूर और तेज खून का बहाव (350 मिली/मिनट) मिलना।",
          "चमड़ी के नीचे कफ होने के कारण अस्थायी नली की तुलना में इन्फेक्शन और मवाद का खतरा बहुत कम होना।",
          "दाहिनी गर्दन की नस सीधी होने के कारण नस के बंद होने की संभावना बहुत कम होना और नली का लम्बे समय तक चलना।"
      ],
      "specificRisksEn": [
          "Puncture of adjacent common carotid artery or inadvertent arterial cannulation.",
          "Pneumothorax / hemothorax (<1%).",
          "Air embolism during sheath introduction.",
          "Catheter-related bloodstream infection (CRBSI) or tunnel tract infection over time.",
          "Central venous thrombosis or fibrin sheath formation."
      ],
      "specificRisksHi": [
          "गर्दन की मुख्य धमनी (Carotid Artery) में सुई लगने से खून का जमाव।",
          "फेफड़े में हवा या खून भरना (न्यूमोथोरैक्स - 1% से कम)।",
          "नली डालते समय नस में हवा चले जाना (Air Embolism)।",
          "समय के साथ नली में संक्रमण (इन्फेक्शन) होना जिसके कारण बुखार या ठंड लग सकती है।",
          "नली के चारों ओर खून का थक्का या जाला (Fibrin sheath) जमना जिससे नली से खून आना बंद हो सकता है।"
      ],
      "alternativesEn": "Temporary non-tunneled double lumen catheter, arteriovenous fistula/graft creation, or peritoneal dialysis.",
      "alternativesHi": "गले में कुछ दिनों वाली कच्ची नली डालना, हाथ में फिस्टुला का ऑपरेशन, या पेट की डायलिसिस।",
      "sedationTypeEn": "Local infiltration anesthesia (2% Lignocaine) with mild IV conscious sedation.",
      "sedationTypeHi": "गर्दन और छाती पर स्थानीय सुन्नता का इंजेक्शन (Local Anesthesia) एवं हल्की शांत करने वाली दवा।"
  },
  "permcath_left_ijv_placement": {
      "id": "permcath_left_ijv_placement",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "nameEn": "Left Internal Jugular Vein Permcath Placement with Fluoroscopic Steering & Bend Relief",
      "nameHi": "लेफ्ट इंटरनल जुगुलर वेन परमैकैथ प्रत्यारोपण (बाईं गर्दन की नस से घुमावदार रास्ते द्वारा पक्की डायलिसिस नली डालना)",
      "indicationEn": "Need for tunneled hemodialysis catheter placement when the right internal jugular vein is occluded, stenosed, or already harboring previous indwelling hardware.",
      "indicationHi": "जब दाहिनी गर्दन की नस बंद हो या उसमें रुकावट हो, तब बाईं गर्दन की नस के जरिए छाती पर पक्की डायलिसिस नली (परमैकैथ) लगाना।",
      "descriptionEn": "Under ultrasound and fluoroscopy, left IJV access is achieved. Because the left brachiocephalic vein enters the SVC at a sharp right angle, a longer catheter (28-32 cm) with a gentle subcutaneous sweep is shaped to prevent kink at the thoracic inlet. The tip is placed in the mid-to-lower right atrium under fluoroscopy.",
      "descriptionHi": "सोनोग्राफी और एक्स-रे की मदद से बाईं गर्दन की नस में सुई डाली जाती है। चूंकि बाईं नस छाती में एक तेज मोड़ लेकर दिल में उतरती है, इसलिए नली में मुड़ाव (Kink) न आए, इसके लिए विशेष तकनीक से लम्बी नली को दिल के अंदर सही स्थान पर स्थापित किया जाता है।",
      "benefitsEn": [
          "Provides reliable dialysis access when the primary right-sided neck anatomy is exhausted.",
          "Fluoroscopic optimization prevents mechanical catheter kinks and poor dialysis aspiration.",
          "Maintains effective dialysis clearance."
      ],
      "benefitsHi": [
          "दाहिनी नस खराब होने की स्थिति में मरीज को डायलिसिस का मजबूत और सुरक्षित विकल्प देना।",
          "एक्स-रे से देखकर लगाने से नली के मुड़ने और खून न आने की समस्या से बचाव।",
          "डायलिसिस अच्छी रफ्तार से होना।"
      ],
      "specificRisksEn": [
          "Higher incidence of left brachiocephalic vein stenosis or thrombosis due to anatomical angle.",
          "Thoracic duct injury leading to chylothorax or chylous leakage.",
          "Catheter kinking at the venous entry site.",
          "Accidental left subclavian artery or carotid puncture."
      ],
      "specificRisksHi": [
          "बाईं नस के मुड़ाव के कारण नस में भविष्य में रुकावट आने का थोड़ा अधिक खतरा।",
          "लसिका नली (Thoracic duct) में चोट लगने से छाती में दूधिया तरल (काइल) रिसने का दुर्लभ जोखिम।",
          "नली का अपनी जगह पर मुड़ जाना।",
          "गर्दन की धमनी में सुई लगना।"
      ],
      "alternativesEn": "Transfemoral tunneled catheter, translumbar catheter, or peritoneal dialysis.",
      "alternativesHi": "जांघ में परमैकैथ डालना, कमर के रास्ते कैथेटर डालना, या पेट की डायलिसिस।",
      "sedationTypeEn": "Local anesthesia with mild IV conscious sedation.",
      "sedationTypeHi": "लोकल एनेस्थीसिया और हल्की शामक दवा।"
  },
  "permcath_external_jugular_placement": {
      "id": "permcath_external_jugular_placement",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "nameEn": "External Jugular Vein Cutdown / Percutaneous Permcath Placement",
      "nameHi": "एक्सटर्नल जुगुलर वेन परमैकैथ (गर्दन की बाहरी नस द्वारा पक्की डायलिसिस नली डालना)",
      "indicationEn": "Occlusion or thrombosis of bilateral internal jugular veins with a patent external jugular vein of adequate caliber (>=6-7 mm) on Doppler.",
      "indicationHi": "जब गर्दन की दोनों अंदरूनी मुख्य नसें (IJV) बंद हो चुकी हों, तब गर्दन की बाहरी नस (EJV) के माध्यम से परमैकैथ डालना।",
      "descriptionEn": "Under ultrasound, the external jugular vein is accessed percutaneously or via mini-cutdown. Hydrophilic wires navigate the acute angle into the subclavian and innominate veins. Serial dilation facilitates passage of the 14.5F tunneled catheter into the right atrium.",
      "descriptionHi": "सोनोग्राफी से गर्दन की बाहरी नस में बारीक सुई डालकर तार को दिल तक पहुंचाया जाता है। इसके बाद धीरे-धीरे रास्ता चौड़ा करके छाती की चमड़ी के नीचे से परमैकैथ को स्थापित किया जाता है।",
      "benefitsEn": [
          "Spares the need for deep femoral or translumbar punctures in patients with lost IJVs.",
          "Avoids deep neck structures, minimizing carotid artery and pleural puncture risk.",
          "Restores life-sustaining dialysis access."
      ],
      "benefitsHi": [
          "कमर या जांघ में नली डालने की आवश्यकता से बचाव।",
          "गहरी नसों से दूर होने के कारण फेफड़े या मुख्य धमनी में चोट का जोखिम नगण्य होना।",
          "डायलिसिस के लिए नया सुरक्षित रास्ता तैयार होना।"
      ],
      "specificRisksEn": [
          "Difficulty negotiating the sharp EJV-subclavian junction leading to vein dissection.",
          "Venous spasm during dilator advancement.",
          "Catheter dysfunction from extrinsic venous pinching.",
          "Hematoma."
      ],
      "specificRisksHi": [
          "नस के मुड़ाव पर तार या नली का अटकना और नस छिलना।",
          "नस का अचानक सिकुड़ जाना।",
          "नली पर बाहर से दबाव पड़ने से खून की गति कम होना।",
          "खून का जमाव।"
      ],
      "alternativesEn": "Transfemoral or translumbar IVC catheter, or surgical bypass.",
      "alternativesHi": "जांघ या कमर के रास्ते कैथेटर डालना।",
      "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं हल्की बेहोशी।"
  },
  "permcath_transfemoral_placement": {
      "id": "permcath_transfemoral_placement",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "nameEn": "Transfemoral / Common Femoral Vein Tunneled Cuffed Hemodialysis Catheter Placement",
      "nameHi": "ट्रांसफेमोरल परमैकैथ (जांघ की नस से पेट की चमड़ी के नीचे पक्की डायलिसिस नली डालना)",
      "indicationEn": "Exhaustion or occlusion of all superior central venous access routes (bilateral internal jugular, external jugular, and subclavian veins).",
      "indicationHi": "गर्दन और छाती की सभी नसें बंद हो जाने पर जांघ की नस (Femoral Vein) के माध्यम से पेट या जांघ की चमड़ी के नीचे परमैकैथ डालना।",
      "descriptionEn": "Under ultrasound guidance, the common femoral vein is punctured below the inguinal ligament. A long tunneled catheter (36-45 cm length) is tunneled anterolaterally onto the mid-thigh or anterior abdominal wall. The tip is advanced under fluoroscopy into the infrarenal or suprarenal inferior vena cava.",
      "descriptionHi": "सोनोग्राफी से जांघ की नस में सुई डालकर एक्स-रे में देखते हुए एक विशेष लम्बा कैथेटर (36-45 सेमी) पेट की निचली चमड़ी से गुजारकर पेट की मुख्य नस (IVC) में स्थापित किया जाता है।",
      "benefitsEn": [
          "Provides functional dialysis access when all upper body veins are completely obstructed.",
          "Abdominal or mid-thigh exit site allows comfortable sitting and mobility.",
          "Lowers risk of thoracic and pleural complications."
      ],
      "benefitsHi": [
          "ऊपरी शरीर की सभी नसें बंद होने पर मरीज के लिए जीवनरक्षक विकल्प।",
          "बैठने और चलने-फिरने में कोई खास रुकावट न आना।",
          "छाती या फेफड़े में चोट लगने का कोई जोखिम नहीं।"
      ],
      "specificRisksEn": [
          "Significantly higher risk of catheter-related bacteremia and groin colonization compared to neck lines.",
          "Deep vein thrombosis of the iliofemoral system or IVC.",
          "Catheter tip migration or malposition during hip flexion.",
          "Femoral hematoma or retroperitoneal bleeding."
      ],
      "specificRisksHi": [
          "गर्दन की तुलना में जांघ के स्थान पर बैक्टीरिया और इन्फेक्शन का खतरा अधिक होना।",
          "पैर की गहरी नस में खून का थक्का (DVT) जमने से पैर में सूजन आना।",
          "उठने-बैठने के दौरान नली का अपनी जगह से थोड़ा खिसकना।",
          "जांघ या पेट के अंदर खून का जमाव।"
      ],
      "alternativesEn": "Translumbar or transhepatic IVC catheter, or peritoneal dialysis.",
      "alternativesHi": "कमर या लिवर के रास्ते कैथेटर डालना, या पेट की डायलिसिस।",
      "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं नस द्वारा शामक दवा।"
  },
  "permcath_translumbar_ivc_placement": {
      "id": "permcath_translumbar_ivc_placement",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "nameEn": "Translumbar Inferior Vena Cava (IVC) Tunneled Hemodialysis Catheter Placement",
      "nameHi": "ट्रांसलंबर परमैकैथ (कमर के रास्ते सीधे महाशिरा - आईवीसी में पक्की डायलिसिस नली डालना)",
      "indicationEn": "Complete exhaustion of all thoracic and femoral venous accesses in dialysis-dependent patients with patent inferior vena cava.",
      "indicationHi": "जब मरीज की गर्दन, छाती और दोनों जांघों की सभी नसें पूरी तरह बंद हो चुकी हों, तब पीठ/कमर के रास्ते सीधे पेट की महाशिरा (IVC) में पक्की डायलिसिस नली डालना।",
      "descriptionEn": "With the patient prone, under fluoroscopy and ultrasound, a 21G needle is advanced from the right flank at the level of L3 directly into the infrarenal IVC. An extra-stiff guidewire is secured. A long 14.5F catheter (45-55 cm) is tunneled through the subcutaneous tissue to the flank/abdomen, dilated over wire, and placed with the tip at the right atrial-caval junction.",
      "descriptionHi": "मरीज को पेट के बल लिटाकर एक्स-रे की निगरानी में कमर के दाहिने हिस्से से एक बारीक सुई सीधे पेट की मुख्य नस (IVC) में डाली जाती है। तार डालकर कमर की चमड़ी के नीचे से 50 सेमी लम्बी नली को दिल के मुहाने पर स्थापित कर दिया जाता है।",
      "benefitsEn": [
          "Absolute lifeline access for end-stage dialysis patients with zero remaining peripheral or central options.",
          "High blood flow rates (>350-400 mL/min) directly from the large-caliber IVC.",
          "Flank exit site is clean and far from groin contamination."
      ],
      "benefitsHi": [
          "सभी रास्ते बंद हो जाने पर अंतिम जीवनरक्षक वरदान जिससे मरीज की डायलिसिस अनवरत जारी रह सकती है।",
          "बड़ी नस में नली होने से डायलिसिस बहुत तेज और अच्छी रफ्तार से होना।",
          "कमर पर नली रहने से जांघ की तुलना में इन्फेक्शन का खतरा कम होना।"
      ],
      "specificRisksEn": [
          "Retroperitoneal hemorrhage or lumbar artery puncture requiring transcatheter embolization.",
          "Bowel perforation (duodenum or colon) from aberrant needle trajectory.",
          "Catheter dislodgement or migration from back muscle movement.",
          "IVC thrombosis."
      ],
      "specificRisksHi": [
          "कमर के अंदरूनी हिस्से में रक्तस्राव (Retroperitoneal Hemorrhage) जिसके लिए तुरंत नस बंद करने की जरूरत पड़ सकती है।",
          "सुई से आंत में खरोंच या छेद होने का अत्यंत दुर्लभ खतरा।",
          "कमर की मांसपेशियों की हलचल से नली का खिसकना।",
          "महाशिरा में थक्का जमना।"
      ],
      "alternativesEn": "Transhepatic catheter, surgical peritoneovenous bypass, peritoneal dialysis, or palliative care.",
      "alternativesHi": "लिवर के रास्ते कैथेटर डालना, पेट की डायलिसिस, या उपशामक देखभाल।",
      "sedationTypeEn": "Monitored Anesthesia Care (MAC) with deep sedation or General Anesthesia.",
      "sedationTypeHi": "गहरी बेहोशी (Monitored Anesthesia Care) अथवा पूर्ण बेहोशी।"
  },
  "permcath_transhepatic_ivc_placement": {
      "id": "permcath_transhepatic_ivc_placement",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "nameEn": "Transhepatic IVC Tunneled Hemodialysis Catheter Placement",
      "nameHi": "ट्रांसहेपेटिक परमैकैथ (लिवर के रास्ते महाशिरा में पक्की डायलिसिस नली डालना)",
      "indicationEn": "End-stage vascular access exhaustion where thoracic, femoral, and translumbar routes are occluded or anatomically impossible.",
      "indicationHi": "जब मरीज के शरीर की सभी नसें (गर्दन, छाती, जांघ, कमर) बंद हो चुकी हों, तब लिवर (यकृत) के रास्ते से दिल की मुख्य नस में डायलिसिस कैथेटर डालना।",
      "descriptionEn": "Under real-time ultrasound and fluoroscopy, a peripheral right hepatic vein branch is punctured through the right intercostal space. A guidewire is advanced through the hepatic vein into the IVC and right atrium. The tract is dilated and a tunneled catheter is placed exiting on the right lower chest/abdomen.",
      "descriptionHi": "सोनोग्राफी और एक्स-रे की लाइव निगरानी में पसलियों के बीच से लिवर की एक नस में सुई डाली जाती है। तार को लिवर से होते हुए दिल के पास मुख्य नस में पहुंचाया जाता है और पेट की चमड़ी के नीचे से नली को स्थापित किया जाता है।",
      "benefitsEn": [
          "Provides desperate rescue dialysis access when no other anatomical route exists on earth.",
          "Enables high blood flow directly into the cavoatrial junction.",
          "Keeps the patient alive while awaiting potential renal transplant."
      ],
      "benefitsHi": [
          "मरीज के लिए अंतिम जीवनरक्षक उम्मीद, जब सारे रास्ते बंद हो चुके हों।",
          "डायलिसिस के लिए भरपूर रक्त प्रवाह मिलना।",
          "किडनी ट्रांसप्लांट तक मरीज का जीवन सुरक्षित रखना।"
      ],
      "specificRisksEn": [
          "Intrahepatic hematoma, liver capsular bleed, or hemoperitoneum.",
          "Biliary tract injury, hemobilia, or biloma formation.",
          "Pneumothorax from pleural transgression.",
          "Catheter dislodgement from respiratory liver motion."
      ],
      "specificRisksHi": [
          "लिवर में अंदरूनी रक्तस्राव या पेट में खून रिसना।",
          "पित्त की नली में चोट या पित्त का रिसाव (Biloma)।",
          "फेफड़े में हवा भरना (न्यूमोथोरैक्स)।",
          "सांस लेने के साथ लिवर के हिलने से नली का खिसकना।"
      ],
      "alternativesEn": "Translumbar catheter, peritoneal dialysis, or supportive palliative care.",
      "alternativesHi": "कमर का कैथेटर, पेट की डायलिसिस या केवल दवाइयों द्वारा देखभाल।",
      "sedationTypeEn": "General Anesthesia or Deep MAC with local intercostal nerve blocks.",
      "sedationTypeHi": "पूर्ण बेहोशी अथवा नर्व ब्लॉक के साथ गहरी बेहोशी।"
  },
  "permcath_transcollateral_intercostal_placement": {
      "id": "permcath_transcollateral_intercostal_placement",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "nameEn": "Transcollateral / Transcostal Intercostal Vein Access for Salvage Hemodialysis Catheter",
      "nameHi": "ट्रांसकोलेटरल इंटरकोस्टल परमैकैथ (पसलियों की कोलेटरल नसों के रास्ते विशेष डायलिसिस कैथेटर डालना)",
      "indicationEn": "Severe chronic central venous occlusion where hyperdilated intercostal or azygos collaterals provide the only remaining venous conduit to the heart.",
      "indicationHi": "छाती की मुख्य नसें बंद होने पर पसलियों के बीच फैली हुई बड़ी सहायक नसों (Collateral Veins) के जरिए दिल तक कैथेटर पहुंचाना।",
      "descriptionEn": "Targeting a dilated intercostal collateral under ultrasound and fluoroscopy, micropuncture technique enters the vein. Hydrophilic wires navigate tortuous collaterals into the azygos/SVC or IVC, dilating sequentially to place a functional tunneled line.",
      "descriptionHi": "पसलियों के बीच की नस को सोनोग्राफी से देखकर तार डाला जाता है और सावधानी से छाती की नसों से होते हुए दिल के पास पहुंचकर डायलिसिस नली स्थापित की जाती है।",
      "benefitsEn": [
          "Creative anatomical salvage preserving life in desperate situations.",
          "Avoids invasive surgical cutdowns in hostile anatomy.",
          "Maintains dialysis adequacy."
      ],
      "benefitsHi": [
          "कठिन और लाचार परिस्थितियों में मरीज की जान बचाने का असाधारण विकल्प।",
          "बिना कोई बड़ा चीरा लगाए नली डालना।",
          "डायलिसिस जारी रहना।"
      ],
      "specificRisksEn": [
          "Intercostal artery laceration and hemothorax.",
          "Collateral vein rupture.",
          "Pneumothorax.",
          "Inadequate flow rates due to tortuosity."
      ],
      "specificRisksHi": [
          "पसली की धमनी में चोट और छाती में खून भरना।",
          "पतली नस का फटना।",
          "फेफड़े में हवा भरना।",
          "नस के टेढ़े-मेढ़े होने से खून की रफ्तार में कमी।"
      ],
      "alternativesEn": "Translumbar, transhepatic, or peritoneal dialysis.",
      "alternativesHi": "कमर/लिवर का कैथेटर या पेट की डायलिसिस।",
      "sedationTypeEn": "Deep conscious sedation with local intercostal block.",
      "sedationTypeHi": "पसली सुन्न करने का इंजेक्शन और गहरी शामक दवा।"
  },
  "permcath_fibrin_sheath_snare_stripping": {
      "id": "permcath_fibrin_sheath_snare_stripping",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "nameEn": "Fibrin Sheath Stripping of Malfunctioning Hemodialysis Catheter via Transfemoral Snare Loop",
      "nameHi": "परमैकैथ फाइब्रिन शीथ स्ट्रिपिंग (जांघ के रास्ते फंदा डालकर नली पर जमी झिल्ली को छीलकर साफ करना)",
      "indicationEn": "Persistent catheter dysfunction refractory to intra-luminal thrombolytics (Alteplase) characterized by poor aspiration ('one-way obstruction') secondary to an encasing pericatheter fibrin sheath.",
      "indicationHi": "परमैकैथ नली से खून का खिंचाव बंद हो जाना, जब दवा डालने के बाद भी नली चालू न हो क्योंकि नली के बाहरी सिरे पर शरीर की एक सख्त झिल्ली (Fibrin Sheath) लिपट गई है जो वाल्व की तरह काम कर रही है।",
      "descriptionEn": "Under local anesthesia, the common femoral vein is accessed. A 6F guiding catheter and loop snare (e.g. Amplatz GooseNeck Snare, 15-25 mm) are advanced under fluoroscopy into the SVC/right atrium. The snare is lassoed around the dialysis catheter body, cinched tight, and pulled down along the shaft to strip the adherent fibrin sleeve off the tips.",
      "descriptionHi": "जांघ की नस से एक बारीक नली डालकर दिल के पास परमैकैथ के चारों ओर एक विशेष फंदा (Snare Loop) फंसाया जाता है। फंदे को कसकर नली के ऊपर से नीचे की तरफ खींचा जाता है, जिससे नली पर लिपटी हुई पूरी झिल्ली छिलकर अलग हो जाती है और नली से दोबारा तेज खून बहने लगता है।",
      "benefitsEn": [
          "Immediately restores high blood flow through the existing catheter without losing the tunneled site.",
          "Avoids the trauma, pain, and vascular risks of removing and replacing a new catheter.",
          "Safe, elegant endovascular procedure taking < 30 minutes."
      ],
      "benefitsHi": [
          "पुरानी नली को बिना निकाले और बिना नई नली डाले, उसी नली को तुरंत 100% चालू कर देना।",
          "नई नली डालने के दर्द, खर्च और जोखिम से पूरी तरह बचत।",
          "केवल 20-30 मिनट में होने वाली अत्यंत सुरक्षित प्रक्रिया।"
      ],
      "specificRisksEn": [
          "Catheter fracture, tear, or dislodgement from excessive traction during snaring.",
          "Fibrin embolization to pulmonary circulation (usually subclinical, rarely symptomatic).",
          "Access site hematoma at the groin.",
          "Early recurrence of fibrin sheath."
      ],
      "specificRisksHi": [
          "फंदे के खिंचाव से कैथेटर नली के टूटने या कटने का जोखिम।",
          "झिल्ली के टुकड़ों का फेफड़ों में जाना (आमतौर पर कोई तकलीफ नहीं होती)।",
          "जांघ में सुई के स्थान पर हल्का खून जमना।",
          "कुछ महीनों बाद दोबारा झिल्ली जमने की संभावना।"
      ],
      "alternativesEn": "Through-catheter balloon sheath disruption, catheter exchange over wire, or placement of a brand new catheter.",
      "alternativesHi": "नली के अंदर से गुब्बारा फुलाकर झिल्ली तोड़ना, तार डालकर नई नली बदलना या नई जगह नली डालना।",
      "sedationTypeEn": "Local anesthesia at the groin puncture site.",
      "sedationTypeHi": "जांघ में स्थानीय सुन्नता का इंजेक्शन (Local Anesthesia)।"
  },
  "permcath_fibrin_sheath_balloon_disruption": {
      "id": "permcath_fibrin_sheath_balloon_disruption",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "nameEn": "Fibrin Sheath Disruption via Through-Catheter High-Pressure Balloon Angioplasty",
      "nameHi": "थ्रू-कैथेटर बैलून डिसरप्शन (परमैकैथ के अंदर से गुब्बारा निकालकर नली की झिल्ली को फाड़ना)",
      "indicationEn": "Fibrin sheath sleeve causing dialysis catheter aspiration failure where transfemoral snaring is contraindicated, undesirable, or unavailable.",
      "indicationHi": "परमैकैथ नली के सिरे पर जमी झिल्ली को बिना जांघ में सुई लगाए, सीधे उसी नली के अंदर से गुब्बारा ले जाकर फाड़कर साफ करना।",
      "descriptionEn": "A stiff hydrophilic wire is advanced through the dysfunctional catheter lumen into the inferior vena cava. The catheter is temporarily pulled back over the wire, or a low-profile high-pressure angioplasty balloon (8-10 mm) is advanced through the catheter lumen across the tip and inflated, rupturing the constricting fibrin sleeve.",
      "descriptionHi": "परमैकैथ के छेद से एक तार दिल के अंदर डाला जाता है। तार के सहारे एक छोटा गुब्बारा नली के सिरे से थोड़ा बाहर निकालकर फुलाया जाता है। गुब्बारे के फूलते ही नली को जकड़ने वाली झिल्ली फटकर बिखर जाती है और नली का रास्ता साफ हो जाता है।",
      "benefitsEn": [
          "Requires zero additional vascular puncture sites (no groin puncture needed).",
          "Fast, painless catheter salvage performed directly through the existing lumens.",
          "Restores normal inflow and outflow for ongoing dialysis."
      ],
      "benefitsHi": [
          "शरीर में कहीं भी कोई नया सुई या चीरा नहीं लगाना पड़ता।",
          "मौजूदा नली के छेद से ही बिना किसी दर्द के तुरंत झिल्ली की सफाई।",
          "डायलिसिस तुरंत सामान्य रफ्तार से शुरू हो जाना।"
      ],
      "specificRisksEn": [
          "Catheter splitting or rupture during balloon inflation.",
          "Incomplete disruption with early recurrence of flow failure.",
          "Transient micro-embolization of fibrin.",
          "Air embolism."
      ],
      "specificRisksHi": [
          "गुब्बारे के दबाव से नली के फटने का जोखिम।",
          "झिल्ली पूरी तरह न फटने पर दोबारा खून का खिंचाव कम होना।",
          "झिल्ली के महीन कणों का फेफड़ों में जाना।",
          "हवा का नली में प्रवेश।"
      ],
      "alternativesEn": "Transfemoral snare stripping, catheter exchange over wire, or placement of a new permcath.",
      "alternativesHi": "जांघ से फंदा डालकर झिल्ली छीलना, तार डालकर नली बदलना या नया परमैकैथ डालना।",
      "sedationTypeEn": "Minimal local anesthesia at catheter hub.",
      "sedationTypeHi": "बिना बेहोशी या केवल नली के सिरे पर सुन्नता।"
  },
  "permcath_exchange_subcutaneous_relocation": {
      "id": "permcath_exchange_subcutaneous_relocation",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "nameEn": "Exchange of Infected / Dysfunctional Permcath Over Stiff Wire with Subcutaneous Tract Relocation",
      "nameHi": "परमैकैथ एक्सचेंज एवं नया टनल निर्माण (तार के सहारे पुरानी नली बदलकर नया रास्ता बनाना)",
      "indicationEn": "Exit-site or tunnel-tract infection, cuff extrusion, mechanical catheter crack, or irreversible lumen clotting in a patient with limited remaining venous sites.",
      "indicationHi": "परमैकैथ नली के बाहर निकलने की जगह पर मवाद या इन्फेक्शन होना, नली का कफ बाहर निकल आना, नली का कट जाना या नली में पत्थर जैसा थक्का जम जाना।",
      "descriptionEn": "Under sterile precautions and local anesthesia, a stiff hydrophilic exchange wire is parked in the IVC through the existing catheter. The old catheter is freed from its subcutaneous cuff and withdrawn. A fresh subcutaneous tunnel is created across healthy skin remote from the infected tract, and a new cuffed catheter is advanced over the wire into the SVC/RA.",
      "descriptionHi": "पुरानी नली के अंदर से एक तार दिल की नस में सुरक्षित डाल दिया जाता है। पुरानी नली को चमड़ी के अंदर से काटकर बाहर निकाल लिया जाता है। इसके बाद इन्फेक्शन वाली जगह से दूर बिल्कुल साफ चमड़ी में नया रास्ता (Tunnel) बनाकर तार के सहारे नया परमैकैथ स्थापित कर दिया जाता है। नस वही रहती है परंतु रास्ता नया हो जाता है।",
      "benefitsEn": [
          "Saves the patient's critical vein entry site without sacrificing the central vein.",
          "Eliminates the infected tunnel while simultaneously securing uninterrupted hemodialysis access.",
          "One-stage exchange avoiding temporary femoral line bridge."
      ],
      "benefitsHi": [
          "मरीज की अमूल्य नस को बचाए रखना, जिससे गर्दन की नस खराब होने से बच जाती है।",
          "इन्फेक्शन से तुरंत मुक्ति और उसी दिन नई नली से डायलिसिस चालू रहना।",
          "अस्थायी नली डालने की परेशानी से बचाव।"
      ],
      "specificRisksEn": [
          "Transmission of bacterial biofilm to the new catheter resulting in recurrent bacteremia.",
          "Loss of guidewire access during exchange requiring repeat venous puncture.",
          "Bleeding from the debrided old tunnel tract.",
          "Pneumothorax (rare during wire exchange)."
      ],
      "specificRisksHi": [
          "पुराने इन्फेक्शन का असर नई नली पर आने का जोखिम जिसके लिए एंटीबायोटिक की आवश्यकता होती है।",
          "नली बदलते समय तार के फिसलने पर दोबारा सुई लगानी पड़ सकती है।",
          "पुराने रास्ते से खून का रिसाव।",
          "हल्की सूजन।"
      ],
      "alternativesEn": "Complete catheter removal, temporary femoral line placement during antibiotic therapy, followed by delayed re-puncture at a different site.",
      "alternativesHi": "नली पूरी तरह निकालकर जांघ में अस्थायी नली डालना और इन्फेक्शन ठीक होने के बाद दूसरी जगह नई नली डालना।",
      "sedationTypeEn": "Local infiltration anesthesia with IV conscious sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं नस द्वारा दर्द निवारक व शांत करने वाली दवा।"
  },
  "avf_deep_perforator_embolization": {
      "id": "avf_deep_perforator_embolization",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "Incompetent Deep Perforator Vein Embolization in Non-Maturing Radiocephalic AV Fistula",
      "nameHi": "डीप परफोरेटर नस एम्बोलाइजेशन (फिस्टुला की गहराई में जाने वाली फालतू नस को छल्लों से बंद करना)",
      "indicationEn": "Failure of forearm fistula maturation due to a large incompetent communicating perforator vein directing flow into the deep venous system instead of the superficial cephalic vein.",
      "indicationHi": "कलाई का फिस्टुला फूल नहीं पा रहा क्योंकि एक बड़ी गहरी नस (Perforator Vein) सारा खून गहराई में बहाकर ले जा रही है और ऊपरी नस में खून नहीं पहुंच रहा।",
      "descriptionEn": "Ultrasound identifies the high-flow perforator vein. Via antegrade cephalic access, a microcatheter is advanced into the deep branch. Detachable microcoils or gel foam are deployed to occlude the branch, forcing all arterialized flow up the superficial cannulation channel.",
      "descriptionHi": "सोनोग्राफी से उस गहरी नस को खोजकर एक अत्यंत बारीक माइक्रो-कैथेटर उसके अंदर ले जाया जाता है। वहां छोटे धातु के छल्ले (Coils) डालकर उस नस को बंद कर दिया जाता है जिससे सारा खून ऊपरी नस में बहने लगता है और फिस्टुला फूल जाता है।",
      "benefitsEn": [
          "Prompts immediate flow redistribution into the superficial cephalic vein, achieving clinical maturation.",
          "Non-surgical endovascular precision avoiding deep tissue trauma.",
          "Enables successful two-needle cannulation within weeks."
      ],
      "benefitsHi": [
          "ऊपरी नस में तुरंत खून का बहाव बढ़ना जिससे फिस्टुला कुछ ही हफ्तों में डायलिसिस के लिए तैयार हो जाता है।",
          "बिना किसी चीर-फाड़ के अंदरूनी नस का सटीक इलाज।",
          "फिस्टुला को बेकार होने से बचाना।"
      ],
      "specificRisksEn": [
          "Coil migration into the deep brachial/radial veins.",
          "Perforator vein rupture during coil packing.",
          "Persistent non-maturation if inflow stenosis coexists.",
          "Local hematoma."
      ],
      "specificRisksHi": [
          "छल्ले का खिसककर हाथ की मुख्य गहरी नस में चले जाना।",
          "नस का फटना।",
          "यदि फिस्टुला के मुंह पर सिकुड़न हो तो फिस्टुला का कम फूलना।",
          "हल्का नीला पड़ना या खून जमना।"
      ],
      "alternativesEn": "Open surgical ligation of the perforator vein under regional anesthesia.",
      "alternativesHi": "चीरा लगाकर गहरी नस को धागे से बांधने का ऑपरेशन।",
      "sedationTypeEn": "Local anesthesia alone.",
      "sedationTypeHi": "केवल स्थानीय सुन्नता।"
  },
  "avf_basilic_superficialization_pta": {
      "id": "avf_basilic_superficialization_pta",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "Basilic Vein Superficialization Percutaneous Balloon Maturation Assistance",
      "nameHi": "बेसिलिक नस सुपरफिशियलाइजेशन बैलून मैचुरेशन (गहरी नस के फिस्टुला को गुब्बारे से फुलाकर तैयार करना)",
      "indicationEn": "Delayed maturation or borderline caliber (3-4 mm) of a transposed or elevated basilic vein fistula, preventing needle cannulation for hemodialysis.",
      "indicationHi": "ऑपरेशन द्वारा ऊपर लाई गई बेसिलिक नस का पूरी तरह न फूलना (पतली रह जाना) जिससे उसमें डायलिसिस की सुई लगाना संभव न हो रहा हो।",
      "descriptionEn": "Under ultrasound guidance, the basilic vein is accessed. Under fluoroscopy, serial long balloon angioplasties (5-7 mm x 100 mm) are performed along the entire length of the transposed vein, stimulating flow-mediated outward remodeling and luminal enlargement.",
      "descriptionHi": "सोनोग्राफी से नस में सुई डालकर एक्स-रे की निगरानी में एक लम्बा गुब्बारा पूरी नस के अंदर फुलाया जाता है। इससे नस का आकार तुरंत चौड़ा हो जाता है और नस की दीवार मजबूत होकर डायलिसिस के लिए तैयार हो जाती है।",
      "benefitsEn": [
          "Accelerates access maturation from months to days.",
          "Ensures uniform caliber along the cannulation zone for easy dual-needle access.",
          "Prevents access abandonment."
      ],
      "benefitsHi": [
          "महीनों का इंतजार खत्म करके नस को कुछ ही दिनों में डायलिसिस योग्य बनाना।",
          "पूरी नस एक समान मोटी होना जिससे सुई आसानी से लग सके।",
          "फिस्टुला को बंद होने से बचाना।"
      ],
      "specificRisksEn": [
          "Venous rupture or intimal tearing requiring prolonged balloon inflation or covered stenting.",
          "Venous spasm.",
          "Acute thrombosis.",
          "Cannulation site hematoma."
      ],
      "specificRisksHi": [
          "नस की अंदरूनी परत का फटना।",
          "नस का अचानक सिकुड़ जाना।",
          "नस में खून का थक्का जमना।",
          "सुई के स्थान पर खून का रिसाव।"
      ],
      "alternativesEn": "Watchful waiting with isometric hand exercises, or surgical patch revision.",
      "alternativesHi": "गेंद दबाने की कसरत करते हुए इंतजार करना, या दोबारा ऑपरेशन।",
      "sedationTypeEn": "Local anesthesia with IV analgesia.",
      "sedationTypeHi": "स्थानीय सुन्नता और दर्द निवारक दवा।"
  },
  "avf_snuffbox_balloon_angioplasty": {
      "id": "avf_snuffbox_balloon_angioplasty",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "Snuffbox (Anatomical Snuffbox) AV Fistula Balloon Angioplasty",
      "nameHi": "स्नफबॉक्स एवी फिस्टुला बैलून एंजियोप्लास्टी (अंगूठे के पास बने फिस्टुला की सिकुड़न खोलना)",
      "indicationEn": "Stenosis at the distal radial artery or cephalic vein within the anatomical snuffbox causing access hypoperfusion, loss of thrill, or cannulation difficulty.",
      "indicationHi": "अंगूठे के आधार (स्नफबॉक्स) पर बने फिस्टुला की नस सिकुड़ जाना, कंपन कम होना या डायलिसिस में खून न आना।",
      "descriptionEn": "Retrograde or antegrade puncture of the forearm cephalic vein is performed. A 0.014 or 0.018-inch wire crosses the distal snuffbox anastomosis. Controlled angioplasty with dedicated high-pressure 3-4 mm balloons relieves the tight stenotic waist.",
      "descriptionHi": "हाथ की नस में बारीक तार डालकर अंगूठे के पास स्थित फिस्टुला के जोड़ पर 3 से 4 मिमी का उच्च-दाब गुब्बारा फुलाया जाता है जिससे सिकुड़न खुल जाती है।",
      "benefitsEn": [
          "Salvages the most distal possible fistula site, preserving all proximal forearm and upper arm veins for the future.",
          "Restores robust thrill and flow without open surgery.",
          "Minimally invasive day-care procedure."
      ],
      "benefitsHi": [
          "हाथ के सबसे निचले हिस्से के फिस्टुला को बचाना, जिससे ऊपर की सारी नसें भविष्य के लिए सुरक्षित रहती हैं।",
          "बिना ऑपरेशन फिस्टुला का कंपन और बहाव पूरी तरह वापस आना।",
          "उसी दिन अस्पताल से छुट्टी।"
      ],
      "specificRisksEn": [
          "Small-vessel rupture or radial artery spasm.",
          "Distal digital ischemia.",
          "Puncture site hematoma.",
          "Early re-stenosis."
      ],
      "specificRisksHi": [
          "अंगूठे की बारीक नस का फटना या सिकुड़ना।",
          "अंगूठे में हल्का दर्द या ठंडापन।",
          "सुई की जगह पर खून जमना।",
          "दोबारा सिकुड़न आना।"
      ],
      "alternativesEn": "Surgical creation of a new radiocephalic wrist fistula upstream, or Permcath.",
      "alternativesHi": "कलाई पर थोड़ा ऊपर नया फिस्टुला बनाना या परमैकैथ डालना।",
      "sedationTypeEn": "Local infiltration anesthesia.",
      "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "avg_thigh_femoral_thrombectomy_pta": {
      "id": "avg_thigh_femoral_thrombectomy_pta",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "nameEn": "Lower Extremity Thigh AV Graft Thrombectomy & Venous Anastomosis PTA",
      "nameHi": "जांघ के कृत्रिम एवी ग्राफ्ट की थ्रॉम्बेक्टोमी एवं एंजियोप्लास्टी (जांघ में लगे ग्राफ्ट से थक्का निकालना व नस खोलना)",
      "indicationEn": "Thrombosis of a lower extremity loop thigh graft (common/superficial femoral artery to common femoral/femoral vein) causing complete loss of dialysis access.",
      "indicationHi": "जांघ में लगे कृत्रिम डायलिसिस ग्राफ्ट में खून का थक्का जमने से ग्राफ्ट का बंद हो जाना।",
      "descriptionEn": "Criss-cross access into the thigh graft is established. Mechanical thrombectomy or Fogarty sweeps clear the extensive thrombus burden. The outflow venous anastomosis at the femoral vein is aggressively dilated with large balloons (8-10 mm) and stented if refractory intimal hyperplasia is present.",
      "descriptionHi": "जांघ के ग्राफ्ट में दो सुइयां डालकर विशेष कैथेटर द्वारा पूरे थक्के को बाहर निकाला जाता है और जांघ की मुख्य नस वाले जोड़ की रुकावट को बड़े गुब्बारे से फुलाकर (और जरूरत पड़ने पर स्टेंट लगाकर) ग्राफ्ट को पुनः चालू किया जाता है।",
      "benefitsEn": [
          "Restores large-bore high-flow hemodialysis access in patients with exhausted upper extremity veins.",
          "Rapid endovascular clearance avoids major groin cutdown incisions prone to severe wound infection.",
          "Allows resumption of dialysis within 24 hours."
      ],
      "benefitsHi": [
          "जिन मरीजों के हाथ की नसें खत्म हो चुकी हैं, उनके जांघ के ग्राफ्ट को बचाना।",
          "बिना कोई बड़ा चीरा लगाए थक्के की सफाई, जिससे जांघ में घाव पकने का खतरा नहीं रहता।",
          "24 घंटे में दोबारा डायलिसिस शुरू होना।"
      ],
      "specificRisksEn": [
          "Embolization into the deep femoral artery or distal popliteal/tibial vessels with acute leg ischemia.",
          "Pulmonary embolism from dislodged femoral clot.",
          "Graft disruption or femoral vein perforation.",
          "Groin hematoma or seroma."
      ],
      "specificRisksHi": [
          "पैर की नीचे की धमनियों में थक्के का टुकड़ा जाने से पैर में खून की कमी और दर्द का खतरा।",
          "फेफड़ों में थक्का चले जाना।",
          "ग्राफ्ट के टांकों का फटना।",
          "जांघ में खून या पानी का जमाव।"
      ],
      "alternativesEn": "Surgical groin thrombectomy, translumbar catheter, or peritoneal dialysis.",
      "alternativesHi": "चीरा लगाकर सर्जरी द्वारा थक्का निकालना, कमर का कैथेटर या पेट की डायलिसिस।",
      "sedationTypeEn": "Local anesthesia with monitored IV sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं शामक दवा।"
  },
  "cvo_sharp_recanalization_snare_rendezvous": {
      "id": "cvo_sharp_recanalization_snare_rendezvous",
      "category": "Central Venous Stenosis & Occlusion",
      "nameEn": "Sharp Central Venous Recanalization with Snare-Target Fluoroscopic Rendezvous Technique",
      "nameHi": "शार्प सेंट्रल वेनस रीकैनेलाइजेशन एवं स्नेयर रोंडेवू (फंदे की मदद से बंद मुख्य नस को आर-पार छेदकर जोड़ना)",
      "indicationEn": "Total long-segment occlusions of central thoracic veins where conventional recanalization fails, in a patient dependent on an upper extremity access circuit.",
      "indicationHi": "छाती की मुख्य नस का लम्बा और पूरी तरह बंद हो जाना जिसे किसी भी साधारण तरीके से न खोला जा सके और मरीज का जीवन हाथ के फिस्टुला पर निर्भर हो।",
      "descriptionEn": "From femoral access, an endovascular snare is placed at the downstream margin of the occlusion in the SVC. From the jugular or arm access, a sharp transseptal needle or Rösch-Uchida needle is precisely steered through the occluded tissue directly into the open snare under orthogonal biplane fluoroscopy. The snare captures the wire, pulling it through to create a continuous through-and-through through-rail for covered stenting.",
      "descriptionHi": "जांघ से एक फंदा छाती की मुख्य नस में रुकावट के ठीक पीछे रखा जाता है। गर्दन या हाथ से एक विशेष नुकीली सुई एक्स-रे में देखकर रुकावट को भेदते हुए सीधे उस फंदे के अंदर डाली जाती है। फंदा उस तार को पकड़कर खींच लेता है, जिससे पूरी रुकावट में एक मजबूत तार डल जाता है और उस पर कवर्ड स्टेंट लगाकर नस को हमेशा के लिए खोल दिया जाता है।",
      "benefitsEn": [
          "Unlocks otherwise completely impassable central occlusions.",
          "Fluoroscopic target rendezvous eliminates blind puncturing, minimizing non-target vascular trauma.",
          "Salvages upper extremity dialysis circuits, avoiding translumbar catheters."
      ],
      "benefitsHi": [
          "पूरी तरह बंद और असंभव रुकावटों को भी सफलतापूर्वक खोलना।",
          "फंदे का निशाना होने से सुई के भटकने और गलत अंग में जाने का जोखिम न्यूनतम होना।",
          "हाथ के डायलिसिस फिस्टुला को नया जीवन मिलना।"
      ],
      "specificRisksEn": [
          "Mediastinal vascular perforation (aorta, pulmonary artery, pericardium) requiring emergency sternotomy or covered stent.",
          "Hemothorax or pneumothorax.",
          "Cardiac arrhythmias.",
          "Loss of wire rail during exchange."
      ],
      "specificRisksHi": [
          "छाती के अंदर किसी मुख्य धमनी में सुई लगने से गंभीर रक्तस्राव का जोखिम, जिसके लिए आपातकालीन स्टेंट या ऑपरेशन की जरूरत हो सकती है।",
          "छाती या फेफड़े में खून या हवा भरना।",
          "दिल की धड़कन का अनियंत्रित होना।",
          "प्रक्रिया के दौरान तार का फिसलना।"
      ],
      "alternativesEn": "Open surgical thoracic bypass grafting, HeRO graft, or lifelong translumbar IVC catheter.",
      "alternativesHi": "छाती खोलकर बाईपास का बड़ा ऑपरेशन, हीरो ग्राफ्ट, या कमर में डायलिसिस कैथेटर।",
      "sedationTypeEn": "General Anesthesia with continuous hemodynamic monitoring.",
      "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) गहन निगरानी के साथ।"
  },
  "dvt-catheter-directed-thrombolysis": {
      "id": "dvt-catheter-directed-thrombolysis",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "nameEn": "Acute Iliofemoral Deep Vein Thrombosis: Catheter-Directed Thrombolysis (CDT)",
      "nameHi": "गंभीर डीप वेन थ्रॉम्बोसिस (DVT): कैथेटर-निर्देशित थ्रॉम्बोलीसिस (पैर की मुख्य नस में जमी खून की गांठ को दवा की नली से सीधे गलाना)",
      "indicationEn": "Acute extensive iliofemoral deep vein thrombosis (<14 days symptom onset) causing massive limb swelling, phlegmasia cerulea dolens, or high risk of post-thrombotic syndrome (PTS) in low-bleeding-risk patients.",
      "indicationHi": "पैर और पेडू की मुख्य नस में अचानक बड़ा खून का थक्का जमना (Acute DVT), पैर में भारी सूजन, अत्यधिक दर्द, पैर नीला पड़ना या पैर की नसें हमेशा के लिए खराब होने का खतरा।",
      "descriptionEn": "Under ultrasound guidance, the popliteal or femoral vein is punctured. A dedicated multi-sidehole infusion catheter is advanced across the thrombus under fluoroscopy. Recombinant tPA (Alteplase) is continuously infused directly into the clot over 12-24 hours in the ICU, followed by venographic restudy and correction of any underlying May-Thurner vein compression.",
      "descriptionHi": "सोनोग्राफी से घुटने के पीछे की नस में सुन्न करके एक बारीक नली (Catheter) डाली जाती है। एक्स-रे की निगरानी में नली को खून के थक्के के अंदर स्थापित किया जाता है। आईसीयू में रखकर 12 से 24 घंटे तक लगातार थक्का पिघलाने वाली विशेष दवा (Alteplase) सीधे थक्के में छोड़ी जाती है। थक्का गलने के बाद नस की सिकुड़न की जांच कर उसे गुब्बारे या स्टेंट से खोला जाता है।",
      "benefitsEn": [
          "Rapidly dissolves occlusive deep venous thrombus, restoring venous patency and valve function.",
          "Reduces the long-term risk of severe post-thrombotic syndrome (chronic leg ulceration, intractable swelling) by up to 50%.",
          "Prevents limb-threatening venous gangrene (phlegmasia cerulea dolens)."
      ],
      "benefitsHi": [
          "पैर की गहरी नस में जमे खतरनाक थक्के को तुरंत पिघलाकर खून का बहाव सामान्य करना।",
          "भविष्य में पैर के काले पड़ने, न भरने वाले नासूर घाव (Venous Ulcer) और जीवनभर की सूजन से 50% तक बचाव।",
          "पैर में सड़न (गैंग्रीन) और पैर कटने के खतरे से बचाना।"
      ],
      "specificRisksEn": [
          "Major internal bleeding including retroperitoneal or gastrointestinal hemorrhage (1-3%).",
          "Intracranial hemorrhage (<1%, life-threatening stroke requiring emergency termination of lytic infusion).",
          "Systemic hypofibrinogenemia requiring fresh frozen plasma or cryoprecipitate.",
          "Access site popliteal hematoma or pseudoaneurysm.",
          "Pulmonary embolism during clot lysis."
      ],
      "specificRisksHi": [
          "शरीर के अंदरूनी हिस्सों (पेट या आंत) में गंभीर रक्तस्राव का जोखिम (1-3%)।",
          "दिमाग के अंदर नस फटने या ब्लीडिंग का अत्यंत दुर्लभ लेकिन जानलेवा जोखिम (1% से कम)।",
          "खून जमने की क्षमता में अत्यधिक गिरावट जिसके लिए प्लाज्मा चढ़ाने की आवश्यकता हो सकती है।",
          "घुटने के पीछे सुई लगने की जगह पर खून जमना।",
          "थक्के का टुकड़ा फेफड़ों में जाने का जोखिम (Pulmonary Embolism)।"
      ],
      "alternativesEn": "Systemic intravenous anticoagulation alone (unfractionated heparin / LMWH / DOACs), surgical venous thrombectomy, or conservative elastic compression stockings.",
      "alternativesHi": "केवल खून पतला करने वाली दवाइयां या इंजेक्शन (Heparin/DOAC), चीरा लगाकर सर्जरी द्वारा थक्का निकालना, अथवा केवल तंग मोजे पहनना।",
      "sedationTypeEn": "Local infiltration anesthesia at puncture site with ICU monitored conscious analgesia.",
      "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं आईसीयू में दर्द निवारक निगरानी।"
  },
  "dvt-pharmacomechanical-thrombectomy-angiojet": {
      "id": "dvt-pharmacomechanical-thrombectomy-angiojet",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "nameEn": "Acute Iliofemoral DVT: Pharmacomechanical Catheter-Directed Thrombectomy (AngioJet / ClotTriever)",
      "nameHi": "फार्माको-मैकेनिकल थ्रॉम्बेक्टोमी (एंजियोजेट तकनीक - मशीन द्वारा थक्का फोड़कर तुरंत चूसकर बाहर निकालना)",
      "indicationEn": "Limb-threatening iliofemoral DVT or phlegmasia requiring single-stage rapid clot debulking, or patients at intermediate bleeding risk where prolonged 24h ICU thrombolysis is undesirable.",
      "indicationHi": "पैर में अत्यधिक थक्का जमने से पैर के सुन्न व नीला पड़ने की आपातकालीन स्थिति, जहां तुरंत 1 घंटे के भीतर नस खोलना अनिवार्य हो और लम्बे समय तक आईसीयू में दवा चलाने का जोखिम न लिया जा सके।",
      "descriptionEn": "Ultrasound-guided popliteal access is achieved. An AngioJet catheter delivers a low-dose pulse-spray of Alteplase directly into the clot. After a 20-minute dwell time, high-velocity rheolytic saline jets shatter the thrombus and evacuate the fragments via vacuum venturi suction out of the body in a single session.",
      "descriptionHi": "घुटने के पीछे से नस में एंजियोजेट कैथेटर डाला जाता है। यह कैथेटर पहले थक्के के अंदर दवा की फुहार छोड़ता है। इसके बाद पानी के अत्यंत तेज दबाव (Saline Jets) और वैक्यूम सक्शन की मदद से थक्के को छोटे-छोटे टुकड़ों में तोड़कर तुरंत मशीन द्वारा शरीर से बाहर खींच लेता है।",
      "benefitsEn": [
          "Immediate single-session clearance of massive clot burden without prolonged ICU thrombolysis.",
          "Reduces total thrombolytic dose by 75-90%, dramatically decreasing intracranial bleeding risk.",
          "Immediate reduction in compartment pressures and pain."
      ],
      "benefitsHi": [
          "एक ही बार में कुछ ही मिनटों के अंदर पूरे थक्के का खात्मा, आईसीयू में 24 घंटे रुकने की जरूरत नहीं।",
          "दवा की मात्रा में भारी कमी होने से दिमाग में खून रिसने का खतरा नगण्य हो जाना।",
          "पैर का भारीपन और असहनीय दर्द तुरंत गायब होना।"
      ],
      "specificRisksEn": [
          "Intravascular hemolysis causing transient macroscopic red urine (hemoglobinuria) and acute tubular necrosis.",
          "Severe bradycardia or heart block during rheolysis in close proximity to the right atrium (secondary to adenosine release).",
          "Hyperkalemia from erythrocyte lysis.",
          "Pulmonary embolism."
      ],
      "specificRisksHi": [
          "लाल रक्त कोशिकाओं के टूटने से कुछ घंटों तक लाल पेशाब (Hemoglobinuria) आना और गुर्दों पर अस्थायी असर पड़ना।",
          "मशीन चलने के दौरान दिल की धड़कन का अचानक बहुत धीमा होना (Bradycardia)।",
          "रक्त में पोटेशियम का स्तर बढ़ना।",
          "थक्के का टुकड़ा फेफड़े में जाना।"
      ],
      "alternativesEn": "Catheter-directed slow infusion thrombolysis, mechanical aspiration alone, systemic anticoagulation, or surgical thrombectomy.",
      "alternativesHi": "24 घंटे धीरे-धीरे दवा की ड्रिप चलाना, साधारण खून पतला करने वाली दवाएं या ओपन सर्जरी।",
      "sedationTypeEn": "Local anesthesia with monitored conscious sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं हल्की शामक दवा।"
  },
  "dvt-large-bore-aspiration-thrombectomy": {
      "id": "dvt-large-bore-aspiration-thrombectomy",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "nameEn": "Acute Iliofemoral DVT: Dedicated Large-Bore Venous Mechanical Aspiration Thrombectomy (Inari ClotTriever / Indigo)",
      "nameHi": "लार्ज-बोर मैकेनिकल एस्पिरेशन थ्रॉम्बेक्टोमी (इनारी क्लॉट-ट्रीवर - बिना किसी दवा के थक्के को जाली में छीलकर बाहर खींचना)",
      "indicationEn": "Iliofemoral DVT in patients with absolute contraindications to thrombolytic drugs (recent major surgery <14 days, recent neurosurgery/stroke, gastrointestinal bleeding, active coagulopathy, pregnancy/postpartum).",
      "indicationHi": "पैर की नसों में भारी थक्का जमना लेकिन मरीज को खून पतला करने या थक्का गलाने वाली दवाएं देना सख्त मना हो (जैसे हाल ही में बड़ा ऑपरेशन, सिर की चोट, पेट का अल्सर या प्रसव के तुरंत बाद)।",
      "descriptionEn": "Under ultrasound, a 13F-16F ClotTriever sheath with an expandable funnel is introduced. An expandable coring element and nitinol collection mesh bag is deployed proximal to the clot in the IVC, then drawn down, coring adherent thrombus directly off the vein wall and retrieving it out through the funnel without any lytic drugs.",
      "descriptionHi": "पैर की नस में एक विशेष कीप वाली बड़ी नली (ClotTriever Sheath) डाली जाती है। एक विशेष धातु की जालीदार टोकरी को नस के अंदर खोलकर ऊपर से नीचे खींचा जाता है। यह जाली नस की दीवार से चिपके हुए कठोर थक्के को छीलकर अपनी टोकरी में समेट लेती है और बिना किसी दवा के पूरा थक्का बाहर निकाल लिया जाता है।",
      "benefitsEn": [
          "Zero thrombolytic drug usage—completely eliminates drug-induced systemic bleeding and stroke risk.",
          "Effective single-session extraction of both acute and chronic/subacute adherent thrombus.",
          "Immediate, definitive luminal restoration with discharge within 24-48 hours."
      ],
      "benefitsHi": [
          "थक्का गलाने वाली किसी भी खतरनाक दवा का शून्य इस्तेमाल—दिमाग में ब्लीडिंग का खतरा बिल्कुल शून्य।",
          "पुराने और चिपचिपे थक्के को भी एक ही बार में पूरी तरह साफ करना।",
          "मरीज को तुरंत राहत और 24 से 48 घंटे में अस्पताल से छुट्टी।"
      ],
      "specificRisksEn": [
          "Venous wall dissection or intimal disruption from the coring element.",
          "Large-bore sheath access site bleeding or hematoma.",
          "Transient blood loss during aspiration (minimized with clot separation).",
          "Pulmonary embolism during device manipulation."
      ],
      "specificRisksHi": [
          "नस की अंदरूनी परत में रगड़ या खरोंच आना।",
          "बड़ी नली वाली जगह (जांघ) पर खून का रिसाव या हेमेटोमा।",
          "प्रक्रिया के दौरान थोड़ा रक्तस्राव होना।",
          "थक्के का टुकड़ा फेफड़ों की ओर तैरना।"
      ],
      "alternativesEn": "Systemic anticoagulation alone, catheter-directed thrombolysis (if bleeding risk subsides), or surgical thrombectomy.",
      "alternativesHi": "केवल खून पतला करने के इंजेक्शन या गोलियां, अथवा बड़ा सर्जिकल ऑपरेशन।",
      "sedationTypeEn": "Moderate conscious sedation with local anesthesia.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं मध्यम शामक/दर्द निवारक दवा।"
  },
  "chronic-pts-recanalization-stenting": {
      "id": "chronic-pts-recanalization-stenting",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "nameEn": "Chronic Iliofemoral Post-Thrombotic Syndrome (PTS): Recanalization and Dedicated Venous Stenting (Venovo / Abre)",
      "nameHi": "क्रोनिक पोस्ट-थ्रॉम्बोटिक सिंड्रोम (PTS) रीकैनेलाइजेशन एवं वेनस स्टेंटिंग (सालों पुरानी बंद नस को खोलकर विशेष नसों का स्टेंट लगाना)",
      "indicationEn": "Severe intractable Post-Thrombotic Syndrome with CEAP C4-C6 disease (severe skin hyperpigmentation, lipodermatosclerosis, intractable venous stasis ulcers, severe venous claudication) refractory to compression therapy.",
      "indicationHi": "पुराने डीवीटी (DVT) के कारण पैर का वर्षों से सूजा रहना, पैर की त्वचा का पत्थर की तरह कड़ा व काला पड़ जाना, असहनीय दर्द तथा पैर में सालों से न भरने वाले गहरे घाव (Venous Ulcers)।",
      "descriptionEn": "Via femoral/popliteal access, stiff hydrophilic wires and crossing catheters navigate through the chronically occluded, fibrotic iliofemoral venous cord. High-pressure balloon pre-dilation is performed, followed by deployment of dedicated large-diameter, high-radial-force self-expanding venous stents (14-16 mm, e.g. Venovo/Abre/Wallstent) from the healthy inflow zone up into the IVC.",
      "descriptionHi": "पैर की नस से मजबूत तार और विशेष नलियों की सहायता से सालों से बंद पड़ी कठोर और सूखी नस के आर-पार रास्ता बनाया जाता है। उच्च-दाब गुब्बारों से रास्ता चौड़ा करके नसों के लिए विशेष रूप से बने 14 से 16 मिमी के मजबूत धातु के स्टेंट (Venovo/Abre) लगाए जाते हैं ताकि पैर का रुका हुआ खून सीधे दिल की तरफ बह सके।",
      "benefitsEn": [
          "Dramatically accelerates rapid healing of chronic, painful venous stasis leg ulcers.",
          "Resolves severe bursting leg pain and venous claudication, restoring walking capability.",
          "Re-establishes permanent, unobstructed venous return from the lower limb."
      ],
      "benefitsHi": [
          "वर्षों पुराने असहनीय और बदबूदार पैर के घावों का तेजी से भरना।",
          "चलने पर पैर में होने वाले भयंकर तनाव और दर्द से हमेशा के लिए मुक्ति।",
          "पैर की नसों में खून का बहाव जीवनभर के लिए सामान्य होना।"
      ],
      "specificRisksEn": [
          "Iliac vein or IVC rupture from aggressive dilation of fibrotic synechiae (requiring immediate covered stent-graft).",
          "Early or late in-stent thrombosis requiring lifelong anticoagulation and surveillance.",
          "Stent migration or contralateral iliac vein jailing/compression.",
          "Access site hematoma."
      ],
      "specificRisksHi": [
          "कठोर नस को फुलाते समय नस के फटने का जोखिम जिसके लिए आपातकालीन कवर्ड स्टेंट लगाना पड़ता है।",
          "स्टेंट में दोबारा खून का थक्का जमना जिससे बचने के लिए जीवनभर खून पतला करने की दवा लेनी होती है।",
          "स्टेंट का अपनी जगह से खिसकना या दूसरी तरफ की नस के मुहाने को दबाना।",
          "सुई के स्थान पर खून जमा होना।"
      ],
      "alternativesEn": "Lifelong medical compression hosiery, surgical venous bypass (Palma crossover bypass), or chronic wound management alone.",
      "alternativesHi": "जीवनभर तंग मोजे पहनना और घाव पर पट्टी करते रहना, अथवा जांघ का बड़ा बाईपास ऑपरेशन।",
      "sedationTypeEn": "Conscious sedation with IV analgesia or General Anesthesia.",
      "sedationTypeHi": "नस द्वारा गहरी शामक व दर्द निवारक दवाइयां अथवा पूर्ण बेहोशी।"
  },
  "ivc-filter-placement-infrarenal": {
      "id": "ivc-filter-placement-infrarenal",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "nameEn": "Inferior Vena Cava (IVC) Filter Placement: Infrarenal Retrievable Filter",
      "nameHi": "इन्फीरियर वेना कावा (IVC) फिल्टर प्रत्यारोपण (पेट की मुख्य नस में खून का थक्का रोकने वाली छतरी लगाना)",
      "indicationEn": "Acute deep vein thrombosis or pulmonary embolism with absolute contraindication to anticoagulation (active major bleeding, upcoming major urgent surgery), recurrent PE despite therapeutic anticoagulation, or severe cardiopulmonary compromise.",
      "indicationHi": "पैर में खतरनाक थक्का जमा होना लेकिन खून पतला करने की दवा देना असंभव हो (जैसे पेट में अल्सर से खून बहना, हाल ही में दिमाग का ऑपरेशन या तुरंत बड़ी सर्जरी होना), जिससे थक्का टूटकर दिल व फेफड़ों में जाने का भारी खतरा हो।",
      "descriptionEn": "Under local anesthesia and ultrasound guidance, the right internal jugular or common femoral vein is accessed. Under fluoroscopy, cavography identifies the renal vein origins. A retrievable nitinol IVC filter is precisely deployed in the infrarenal inferior vena cava with its apex oriented toward the heart.",
      "descriptionHi": "गर्दन या जांघ की नस से सुन्न करके एक नली डाली जाती है। एक्स-रे पर पेट की मुख्य नस (IVC) और गुर्दों की नसों को देखकर, गुर्दों की नस के ठीक नीचे धातु की एक विशेष छतरी (IVC Filter) स्थापित कर दी जाती है। यह छतरी पैर से आने वाले थक्कों को पकड़ लेती है लेकिन खून को बहने देती है।",
      "benefitsEn": [
          "Provides mechanical protection against catastrophic, fatal pulmonary embolism.",
          "Safe, reversible endovascular intervention taking < 20 minutes.",
          "Retrievable design allows safe removal once anticoagulation can be safely resumed."
      ],
      "benefitsHi": [
          "फेफड़ों में खून का थक्का फंसने से होने वाली अचानक और जानलेवा मौत से 100% सुरक्षा।",
          "केवल 15-20 मिनट में होने वाली अत्यंत सुरक्षित प्रक्रिया।",
          "जब मरीज ठीक हो जाए और खून पतला करने की दवा शुरू हो सके, तब इस छतरी को वापस बाहर निकाला जा सकता है।"
      ],
      "specificRisksEn": [
          "Filter strut perforation of the IVC wall into adjacent duodenum, aorta, or vertebral body.",
          "Filter tilt (>15 degrees), fracture, or cephalad migration into the heart/pulmonary artery.",
          "Caval thrombosis (IVC occlusion) causing bilateral lower limb and scrotal/pelvic swelling.",
          "Access site hematoma or DVT at puncture site."
      ],
      "specificRisksHi": [
          "छतरी के तार (Struts) का नस की दीवार को छेदकर आंत या महाधमनी की तरफ निकलना।",
          "छतरी का टेढ़ा होना, टूटना या खिसककर दिल की तरफ चले जाना।",
          "छतरी के अंदर ही बड़ा थक्का जमने से पेट की मुख्य नस का बंद होना जिससे दोनों पैरों में भारी सूजन आ सकती है।",
          "गर्दन या जांघ में सुई की जगह खून जमना।"
      ],
      "alternativesEn": "Carefully titrated therapeutic anticoagulation, subcutaneous heparin/LMWH, or placement of an external pneumatic compression device.",
      "alternativesHi": "अस्पताल में निगरानी में खून पतला करने की दवा देना, या पैरों पर विशेष हवा वाले प्रेशर कफ बांधना।",
      "sedationTypeEn": "Local infiltration anesthesia alone.",
      "sedationTypeHi": "केवल स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "ivc-filter-placement-suprarenal": {
      "id": "ivc-filter-placement-suprarenal",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "nameEn": "IVC Filter Placement: Suprarenal Placement for Gonadal / Renal Vein Thrombosis or Pregnancy",
      "nameHi": "सुप्रारिनल आईवीसी फिल्टर (गुर्दे की नसों के ऊपर छाती के पास थक्का रोकने वाली छतरी लगाना)",
      "indicationEn": "Thrombus propagating into the infrarenal IVC above the renal vein ostia, renal vein or gonadal vein thrombosis, megacava (>28 mm diameter), or extrinsic pelvic mass/compression in advanced pregnancy.",
      "indicationHi": "जब खून का थक्का गुर्दे की नसों तक या उससे ऊपर पहुंच गया हो, गर्भावस्था में पेडू की नसों का भारी दबाव हो, या सामान्य जगह पर नस बहुत चौड़ी हो।",
      "descriptionEn": "Via right IJV access, the cavocaval junction is identified. A retrievable or permanent filter is deployed in the suprarenal IVC segment above the renal vein inflows and below the major hepatic vein orifices under precise fluoroscopy.",
      "descriptionHi": "गर्दन की नस से नली डालकर एक्स-रे में गुर्दों और लिवर की नसों को देखकर, गुर्दे की नसों के ठीक ऊपर पेट की नस में फिल्टर छतरी स्थापित की जाती है।",
      "benefitsEn": [
          "Traps emboli originating from renal, ovarian, or high infrarenal thrombus that would bypass an infrarenal filter.",
          "Prevents renal vein outflow entrapment and fatal PE.",
          "Life-saving protection in complicated thromboembolic anatomies."
      ],
      "benefitsHi": [
          "गुर्दे या डिम्बग्रंथि (अंडाशय) की नसों से उठने वाले थक्कों को सीधे दिल में जाने से रोकना।",
          "गुर्दों के बंद होने और जानलेवा फेफड़े के अटैक से संपूर्ण बचाव।",
          "जटिल परिस्थितियों में अचूक जीवनरक्षा।"
      ],
      "specificRisksEn": [
          "Strut penetration into adjacent retroperitoneal structures or aorta.",
          "Renal vein thrombosis or decline in renal function.",
          "Filter migration into the right atrium.",
          "Difficult or complex retrieval later."
      ],
      "specificRisksHi": [
          "फिल्टर के तारों का नस की दीवार से बाहर निकलना।",
          "गुर्दे की नस में थक्का जमने से किडनी पर असर।",
          "फिल्टर का दिल की ओर खिसकना।",
          "बाद में फिल्टर को बाहर निकालने में अतिरिक्त जटिलता।"
      ],
      "alternativesEn": "Systemic anticoagulation if tolerated, or surgical caval clip ligation.",
      "alternativesHi": "दवाइयों द्वारा थक्का नियंत्रित करना या सर्जरी।",
      "sedationTypeEn": "Local infiltration anesthesia with mild IV sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता और हल्की शामक दवा।"
  },
  "ivc-filter-retrieval-routine": {
      "id": "ivc-filter-retrieval-routine",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "nameEn": "Routine Endovascular IVC Filter Retrieval with Loop Snare",
      "nameHi": "रूटीन आईवीसी फिल्टर निकालना (गर्दन की नस से फंदा डालकर पुरानी छतरी को सुरक्षित बाहर निकालना)",
      "indicationEn": "Patients who have completed their required period of transient PE protection and can safely resume therapeutic anticoagulation, with filter dwell time ideally < 3-6 months.",
      "indicationHi": "जब मरीज की बीमारी ठीक हो गई हो, खून पतला करने की दवा शुरू हो चुकी हो और पेट की नस में लगी फिल्टर छतरी की अब कोई आवश्यकता न रह गई हो (आमतौर पर 1 से 6 महीने के भीतर)।",
      "descriptionEn": "Under ultrasound, the right internal jugular vein is cannulated. Under fluoroscopy, cavography confirms the absence of massive trapped clot (>25% filter volume). A goose-neck snare engages the retrieval hook at the filter apex. A sheath is advanced over the collapsed filter, fully capturing it and withdrawing it through the neck puncture.",
      "descriptionHi": "गर्दन की नस में सुन्न करके एक नली डाली जाती है। एक्स-रे में डाई डालकर पहले यह पक्का किया जाता है कि छतरी में कोई बड़ा थक्का तो नहीं फंसा है। इसके बाद एक विशेष फंदे (Loop Snare) से छतरी के ऊपरी हुक को फंसाकर नली के अंदर बंद कर लिया जाता है और पूरी छतरी को गर्दन के रास्ते बाहर निकाल लिया जाता है।",
      "benefitsEn": [
          "Completely eliminates all long-term risks of indwelling filters: caval perforation, strut fracture, and chronic IVC thrombosis.",
          "Minimally invasive 15-minute outpatient procedure under local anesthesia.",
          "Leaves zero permanent foreign bodies in the patient's vascular system."
      ],
      "benefitsHi": [
          "छतरी को शरीर में हमेशा के लिए छोड़ देने से होने वाले खतरों (नस का फटना, तार टूटना, नस का बंद होना) से हमेशा के लिए मुक्ति।",
          "केवल 15 मिनट में स्थानीय सुन्नता में होने वाली आसान प्रक्रिया, उसी दिन घर वापसी।",
          "शरीर के अंदर कोई भी बाहरी धातु नहीं छूटती।"
      ],
      "specificRisksEn": [
          "Inability to engage or collapse the filter due to significant tilt (>15 deg) or tissue endothelialization.",
          "IVC intimal tearing, dissection, or caval rupture during collapse.",
          "Dislodgement of small residual thrombus during retrieval.",
          "Neck puncture site hematoma."
      ],
      "specificRisksHi": [
          "छतरी के टेढ़े होने या नस की दीवार में धंस जाने के कारण साधारण तरीके से न निकल पाना।",
          "छतरी को खींचते समय नस की दीवार पर खरोंच या फटने का जोखिम।",
          "छतरी में फंसे छोटे थक्के का फेफड़ों में चले जाना।",
          "गर्दन में सुई के स्थान पर खून का जमाव।"
      ],
      "alternativesEn": "Leaving the filter in place permanently (requires lifelong clinical surveillance and potential anticoagulation).",
      "alternativesHi": "छतरी को हमेशा के लिए शरीर में ही छोड़ देना (जिसके लिए जीवनभर नियमित जांच व दवाइयों की जरूरत हो सकती है)।",
      "sedationTypeEn": "Local infiltration anesthesia alone.",
      "sedationTypeHi": "केवल स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "ivc-filter-retrieval-complex-forceps": {
      "id": "ivc-filter-retrieval-complex-forceps",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "nameEn": "Complex / Advanced IVC Filter Retrieval: Endobronchial Forceps Dissection of Embedded Filter Tip",
      "nameHi": "जटिल आईवीसी फिल्टर निकालना: एंडोब्रोंकियल चिमटी तकनीक (नस की दीवार में धंसी हुई छतरी को विशेष चिमटी से छुड़ाकर निकालना)",
      "indicationEn": "Retrievable IVC filters with severe tilt, embedded tip/hook encased in proliferative tissue, extended dwell time (>6-12 months), or failed standard snare retrieval.",
      "indicationHi": "जब फिल्टर छतरी बहुत पुरानी हो गई हो, टेढ़ी होकर पेट की नस की दीवार में धंस चुकी हो और नस का मांस उसके हुक पर चढ़ गया हो जिससे वह साधारण फंदे से न निकल पा रही हो।",
      "descriptionEn": "Via right IJV access, a large sheath (10-12F) is positioned. Rigid or flexible endobronchial biopsy forceps are advanced to dissect and strip the fibrous endothelial tissue encasing the hook under high-magnification fluoroscopy. The hook is grasped, drawn into the sheath, collapsed, and extracted.",
      "descriptionHi": "गर्दन की नस से एक मजबूत नली डालकर उसके अंदर से विशेष माइक्रो-चिमटी (Forceps) ले जाई जाती है। एक्स-रे की निगरानी में चिमटी से छतरी के हुक पर चढ़े मांस को धीरे-धीरे छीलकर अलग किया जाता है और हुक को मजबूती से पकड़कर नली के अंदर खींच लिया जाता है।",
      "benefitsEn": [
          "Successfully removes embedded, 'unretrievable' filters, achieving >95% complex retrieval success.",
          "Prevents catastrophic complications of late strut migration or organ perforation.",
          "Avoids major open transabdominal cavotomy."
      ],
      "benefitsHi": [
          "फंसी हुई और असंभव मानी जाने वाली छतरी को भी 95% से अधिक मामलों में सफलतापूर्वक बाहर निकालना।",
          "भविष्य में छतरी के अंगों में धंसने या नस फटने के भयंकर खतरे को टालना।",
          "पेट का बड़ा ऑपरेशन किए बिना सुरक्षित समाधान।"
      ],
      "specificRisksEn": [
          "IVC laceration, transmural perforation, or catastrophic retroperitoneal hemorrhage (1-2%).",
          "Filter strut fracture during forceful traction with fragment embolization to pulmonary artery.",
          "Transient vasovagal bradycardia or hypotension.",
          "Access site hematoma."
      ],
      "specificRisksHi": [
          "नस की दीवार में छेद होना या पेट के अंदर रक्तस्राव का जोखिम (1-2%), जिसके लिए तुरंत स्टेंट या ऑपरेशन की आवश्यकता हो सकती है।",
          "खिंचाव के कारण छतरी का कोई तार टूटकर फेफड़े या दिल की नस में चले जाना।",
          "प्रक्रिया के दौरान रक्तचाप या धड़कन का कम होना।",
          "गर्दन में सूजन या खून का थक्का।"
      ],
      "alternativesEn": "Leaving the filter in place permanently, or open surgical removal through laparotomy.",
      "alternativesHi": "फिल्टर को शरीर में ही छोड़ देना या पेट चीरकर ऑपरेशन द्वारा निकालना।",
      "sedationTypeEn": "Monitored Anesthesia Care (MAC) with deep conscious sedation or General Anesthesia.",
      "sedationTypeHi": "गहरी बेहोशी (MAC Sedation) अथवा पूर्ण बेहोशी।"
  },
  "ivc-filter-retrieval-complex-laser": {
      "id": "ivc-filter-retrieval-complex-laser",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "nameEn": "Complex IVC Filter Retrieval: Laser Sheath Assisted Removal of Endothelialized Struts",
      "nameHi": "लेजर शीथ द्वारा जटिल फिल्टर निकालना (नस में धंसी छतरी को लेजर ऊर्जा से छुड़ाकर बाहर निकालना)",
      "indicationEn": "Chronically embedded IVC filters with extensive circumferentially incorporated struts refractory to forcep dissection.",
      "indicationHi": "सालों पुरानी छतरी जिसके सभी तार नस की अंदरूनी परत में पूरी तरह धंसकर जम चुके हों और जो चिमटी से भी न छूट रही हो।",
      "descriptionEn": "A 14F-16F excimer laser sheath (Spectranetics CVX-300) is advanced over the captured filter hook. Cool ultraviolet laser energy photoablates the dense fibrous tissue holding the struts to the IVC wall without thermal injury, allowing the sheath to smoothly advance over and collapse the entire filter.",
      "descriptionHi": "गर्दन से एक विशेष लेजर नली (Excimer Laser Sheath) को फिल्टर के ऊपर ले जाया जाता है। लेजर की ठंडी किरणें फिल्टर के तारों को जकड़ने वाले रेशों को वाष्पीकृत (पिघला) कर देती हैं, जिससे नस को बिना जलाए छतरी तुरंत नली के अंदर सिमट जाती है और बाहर निकाल ली जाती है।",
      "benefitsEn": [
          "Highest success rate for ultra-complex, long-dwell embedded filters (>1-5 years).",
          "Minimal mechanical traction on the fragile vena cava wall.",
          "Avoids open surgical explantation."
      ],
      "benefitsHi": [
          "वर्षों पुरानी धंसी हुई छतरी को भी सुरक्षित निकालने की दुनिया की सबसे आधुनिक तकनीक।",
          "नस की दीवार पर अत्यधिक जोर या खिंचाव नहीं पड़ता।",
          "पेट के बड़े ऑपरेशन से संपूर्ण बचाव।"
      ],
      "specificRisksEn": [
          "Laser perforation of the inferior vena cava wall into the retroperitoneum.",
          "Strut fracture or fragmentation.",
          "Caval dissection.",
          "Groin or neck hematoma."
      ],
      "specificRisksHi": [
          "लेजर से नस की दीवार में छेद होने का जोखिम।",
          "फिल्टर का तार टूटना।",
          "नस की परत छिलना।",
          "गर्दन में खून का जमाव।"
      ],
      "alternativesEn": "Permanent retention of filter with anticoagulation, or open surgical cavotomy.",
      "alternativesHi": "फिल्टर को हमेशा छोड़ देना या पेट खोलकर सर्जरी।",
      "sedationTypeEn": "General Anesthesia with endotracheal intubation.",
      "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia)।"
  },
  "pe-mechanical-thrombectomy-flowtriever": {
      "id": "pe-mechanical-thrombectomy-flowtriever",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "nameEn": "Acute Massive / Submassive Pulmonary Embolism: Catheter-Directed Mechanical Aspiration Thrombectomy (Inari FlowTriever)",
      "nameHi": "गंभीर पल्मोनरी एम्बोलिज्म: फ्लो-ट्रीवर थ्रॉम्बेक्टोमी (फेफड़ों की मुख्य नस में फंसे जानलेवा थक्के को मशीन द्वारा तुरंत खींचकर बाहर निकालना)",
      "indicationEn": "High-risk (massive) or intermediate-high-risk (submassive) acute pulmonary embolism with right ventricular dysfunction, elevated cardiac biomarkers, and hemodynamic instability or contraindications to systemic thrombolysis.",
      "indicationHi": "फेफड़ों की मुख्य नसों में खून का बड़ा थक्का अचानक फंस जाना, जिसके कारण मरीज का दिल फेल होने लगे (Right Heart Strain), रक्तचाप गिर जाए, सांस फूलने लगे और कभी भी दिल का दौरा पड़ने का जानलेवा खतरा हो।",
      "descriptionEn": "Under fluoroscopic guidance, large-bore access (20F-24F) is achieved via the common femoral vein. The FlowTriever catheter system is guided across the right heart into the occluded main pulmonary arteries. Nitinol mesh disks engage and disrupt the clot, followed by powerful syringe vacuum aspiration to retrieve large clot casts without requiring thrombolytic drugs.",
      "descriptionHi": "जांघ की नस से एक विशेष बड़ी नली दिल के दाहिने हिस्से से होते हुए सीधे फेफड़ों की मुख्य नसों में पहुंचाई जाती है। फ्लो-ट्रीवर की विशेष जालियां थक्के को पकड़ती हैं और एक शक्तिशाली वैक्यूम सक्शन सिरिंज द्वारा बड़े-बड़े थक्कों को तुरंत खींचकर शरीर से बाहर निकाल लेती हैं। इसके लिए थक्का गलाने वाली खतरनाक दवा की जरूरत नहीं पड़ती।",
      "benefitsEn": [
          "Instant, on-table reduction of pulmonary artery pressures and right ventricular strain.",
          "Immediate improvement in systemic oxygenation, cardiac output, and arterial blood pressure.",
          "Zero thrombolytic bleeding risk—safe even in perioperative or bleeding patients."
      ],
      "benefitsHi": [
          "टेबल पर ही फेफड़ों और दिल पर पड़ा अत्यधिक दबाव तुरंत कम होना।",
          "मरीज का ऑक्सीजन स्तर, रक्तचाप और दिल की कार्यक्षमता तत्काल सुधरना और जान बचना।",
          "दिमाग में नस फटने या रक्तस्राव का कोई खतरा नहीं।"
      ],
      "specificRisksEn": [
          "Pulmonary artery perforation or rupture with fatal hemoptysis / exsanguination.",
          "Right ventricular perforation, cardiac tamponade, or fatal cardiac arrhythmias (ventricular fibrillation, complete heart block).",
          "Excessive acute blood loss during large-bore aspiration.",
          "Access site femoral hematoma or retroperitoneal hemorrhage."
      ],
      "specificRisksHi": [
          "फेफड़े की मुख्य नस फटने से मुंह से अत्यधिक खून आने का जानलेवा जोखिम।",
          "दिल की दीवार में चोट या दिल की धड़कन का अनियंत्रित होना (Arrhythmia)।",
          "थक्का खींचते समय खून का नुकसान होना जिसके लिए खून चढ़ाना पड़ सकता है।",
          "जांघ में सुई की जगह गहरा खून जमा होना।"
      ],
      "alternativesEn": "Systemic intravenous thrombolysis (Alteplase infusion), surgical pulmonary embolectomy on cardiopulmonary bypass, or systemic anticoagulation alone.",
      "alternativesHi": "नस द्वारा पूरे शरीर में थक्का गलाने की दवा चलाना (जिसमें ब्रेन हेमरेज का भारी जोखिम होता है), दिल खोलकर आपातकालीन ओपन सर्जरी, अथवा केवल खून पतला करने की दवा।",
      "sedationTypeEn": "Conscious sedation with local anesthesia or General Anesthesia with arterial line hemodynamic monitoring.",
      "sedationTypeHi": "स्थानीय सुन्नता के साथ हल्की बेहोशी अथवा पूर्ण बेहोशी गहन आईसीयू निगरानी में।"
  },
  "pe-ultrasound-accelerated-thrombolysis-ekos": {
      "id": "pe-ultrasound-accelerated-thrombolysis-ekos",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "nameEn": "Acute Pulmonary Embolism: Ultrasound-Accelerated Catheter-Directed Thrombolysis (EKOS System with Low-Dose tPA)",
      "nameHi": "एकॉस सिस्टम द्वारा थ्रॉम्बोलीसिस (EKOS - अल्ट्रासाउंड तरंगों और सूक्ष्म दवा द्वारा फेफड़ों का थक्का पिघलाना)",
      "indicationEn": "Submassive or massive acute pulmonary embolism with right ventricular dilation (RV/LV ratio > 0.9) and high anticipated bleeding risk with standard-dose systemic lytics.",
      "indicationHi": "फेफड़ों में थक्का जमने से दिल का दायां हिस्सा फूल जाना (Heart Failure का खतरा), लेकिन पूरे शरीर में तेज दवा देने से दिमाग में नस फटने का डर हो।",
      "descriptionEn": "Via femoral or jugular access, dual EKOS catheters equipped with high-frequency ultrasound transducers and multi-sidehole infusion ports are parked inside the left and right main pulmonary arteries. Ultrasound energy unbinds fibrin fibers, accelerating the penetration of low-dose Alteplase (0.5-1 mg/h) infused over 6-12 hours.",
      "descriptionHi": "जांघ से दोनों फेफड़ों की नसों में एक-एक विशेष एकॉस (EKOS) कैथेटर स्थापित किया जाता है। यह कैथेटर उच्च-आवृत्ति वाली अल्ट्रासाउंड तरंगें छोड़ता है जिससे थक्के का जाल ढीला पड़ जाता है, और बहुत ही कम मात्रा में थक्का गलाने वाली दवा (Alteplase) सीधे थक्के के भीतर 6 से 12 घंटे तक दी जाती है।",
      "benefitsEn": [
          "Uses 70-80% lower dose of thrombolytics compared to systemic therapy, reducing major bleed risk to <2%.",
          "Rapidly reverses right ventricular strain and normalizes pulmonary arterial pressures within hours.",
          "Proven superior RV recovery compared to anticoagulation alone in clinical trials (ULTIMA, SEATTLE II)."
      ],
      "benefitsHi": [
          "साधारण दवा की तुलना में 70-80% कम दवा की जरूरत, जिससे ब्लीडिंग का खतरा 2% से भी कम रह जाता है।",
          "कुछ ही घंटों में दिल की सूजन और फेफड़ों का दबाव सामान्य होना।",
          "मरीज के दिल को स्थायी नुकसान से बचाना।"
      ],
      "specificRisksEn": [
          "Access site hematoma or pseudoaneurysm at femoral/jugular puncture.",
          "Pulmonary hemorrhage or hemoptysis.",
          "Intracranial hemorrhage (<1%).",
          "Arrhythmias during catheter placement."
      ],
      "specificRisksHi": [
          "जांघ या गर्दन में सुई के स्थान पर खून जमना।",
          "खांसी में खून आना।",
          "दिमाग में रक्तस्राव (1% से कम)।",
          "दिल की धड़कन में अस्थायी असंतुलन।"
      ],
      "alternativesEn": "Systemic intravenous thrombolysis, mechanical thrombectomy (FlowTriever), or anticoagulation alone.",
      "alternativesHi": "नसों में तेज दवा की ड्रिप, सक्शन मशीन से थक्का निकालना, या खून पतला करने का इंजेक्शन।",
      "sedationTypeEn": "Local anesthesia with ICU monitoring.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं आईसीयू निगरानी।"
  },
  "pe-low-dose-catheter-directed-infusion": {
      "id": "pe-low-dose-catheter-directed-infusion",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "nameEn": "Acute Pulmonary Embolism: Low-Dose Catheter-Directed Infusion Thrombolysis via Bilateral Pigtail Catheters",
      "nameHi": "लो-डोज कैथेटर-निर्देशित थ्रॉम्बोलीसिस (पिगटेल नली द्वारा फेफड़ों में सीधे थक्का गलाने की दवा पहुंचाना)",
      "indicationEn": "Intermediate-high risk acute PE where dedicated advanced thrombectomy consoles (EKOS/FlowTriever) are not immediately accessible or affordable.",
      "indicationHi": "फेफड़ों में थक्के के कारण सांस फूलना और दिल पर दबाव, जहां कम खर्च में सीधे फेफड़े में कम मात्रा में दवा पहुंचाकर जान बचाना जरूरी हो।",
      "descriptionEn": "Standard 5F multi-sidehole pigtail catheters are advanced via femoral veins into the pulmonary artery thrombi. An initial mechanical fragmentation of the central clot is performed, followed by low-dose continuous infusion of Alteplase (0.5-1.0 mg/hr/catheter) for 12-18 hours in the ICU.",
      "descriptionHi": "जांघ की नस से दो पतली नलियां (Pigtail Catheter) फेफड़ों के दोनों हिस्सों की नसों में थक्के के अंदर डाली जाती हैं। नली को घुमाकर थक्के को थोड़ा तोड़ा जाता है और फिर कम मात्रा में दवा 12 से 18 घंटे तक सीधे थक्के पर छोड़ी जाती है।",
      "benefitsEn": [
          "Cost-effective, universally available endovascular PE treatment with standard hospital inventory.",
          "Significantly lowers intracranial bleeding risk compared to full-dose systemic tPA.",
          "Accelerates hemodynamic stabilization and right heart recovery."
      ],
      "benefitsHi": [
          "अत्यंत किफायती और तुरंत उपलब्ध होने वाली तकनीक।",
          "पूरे शरीर में दवा देने की तुलना में ब्रेन हेमरेज का खतरा बहुत कम।",
          "मरीज के रक्तचाप और ऑक्सीजन में तेजी से सुधार।"
      ],
      "specificRisksEn": [
          "Major systemic hemorrhage (GI or retroperitoneal).",
          "Pulmonary artery dissection.",
          "Access site hematoma.",
          "Catheter dislodgement."
      ],
      "specificRisksHi": [
          "शरीर के अंदरूनी हिस्सों से रक्तस्राव।",
          "फेफड़े की नस में चोट।",
          "जांघ में खून का जमाव।",
          "नली का अपनी जगह से हिलना।"
      ],
      "alternativesEn": "Full-dose systemic tPA, mechanical thrombectomy, or heparin anticoagulation.",
      "alternativesHi": "पूरे शरीर में तेज दवा देना, बड़ी मशीन से थक्का खींचना या केवल हेपरिन।",
      "sedationTypeEn": "Local anesthesia with monitored conscious sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं हल्की शामक दवा।"
  },
  "cteph-balloon-pulmonary-angioplasty-bpa": {
      "id": "cteph-balloon-pulmonary-angioplasty-bpa",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "nameEn": "Chronic Thromboembolic Pulmonary Hypertension (CTEPH): Balloon Pulmonary Angioplasty (BPA)",
      "nameHi": "बैलून पल्मोनरी एंजियोप्लास्टी (BPA - फेफड़ों के पुराने सूखे थक्कों और जाले को गुब्बारे से फुलाकर खोलना)",
      "indicationEn": "Inoperable Chronic Thromboembolic Pulmonary Hypertension (CTEPH) due to distal web/ring/pouch lesions, or persistent/recurrent pulmonary hypertension after surgical pulmonary endarterectomy (PEA).",
      "indicationHi": "फेफड़ों की नसों में पुराने सूखे थक्के और जाले (Fibrotic Webs) जमने से फेफड़ों का रक्तचाप बहुत बढ़ जाना (Pulmonary Hypertension) जिससे थोड़ा चलने पर भी सांस उखड़ना और दिल का दायां हिस्सा फेल होना, जब मरीज बड़ा ऑपरेशन करवाने में असमर्थ हो।",
      "descriptionEn": "Via femoral access, a guiding catheter engages segmental and subsegmental pulmonary arteries. A 0.014-inch pressure wire crosses the target web/slit obstruction. Undersized semi-compliant balloons (2-5 mm) are carefully inflated under selective angiography to disrupt the fibrous webs without injuring the delicate lung parenchyma.",
      "descriptionHi": "जांघ की नस से एक विशेष नली फेफड़ों की छोटी-छोटी शाखाओं तक ले जाई जाती है। एक अत्यंत बारीक तार जाले के आर-पार डालकर 2 से 5 मिमी के छोटे-छोटे गुब्बारों से उस जाले को तोड़ा जाता है। यह प्रक्रिया फेफड़ों की कई शाखाओं में चरणबद्ध तरीके से (2-4 सत्रों में) की जाती है।",
      "benefitsEn": [
          "Progressively lowers pulmonary vascular resistance (PVR) and mean pulmonary arterial pressure.",
          "Dramatic improvement in exercise capacity (6-minute walk distance) and WHO functional class.",
          "Curative or life-prolonging catheter alternative to lung transplantation or high-risk open sternotomy."
      ],
      "benefitsHi": [
          "फेफड़ों का बढ़ा हुआ अत्यधिक रक्तचाप धीरे-धीरे कम होना।",
          "मरीज के चलने-फिरने की क्षमता में भारी सुधार और सांस फूलना पूरी तरह बंद होना।",
          "फेफड़े के ट्रांसप्लांट या छाती की महा-सर्जरी से पूर्ण बचाव।"
      ],
      "specificRisksEn": [
          "Reperfusion Pulmonary Edema (RPE): Acute lung flooding and hypoxemia in the dilated vascular bed.",
          "Pulmonary artery perforation / wire puncture causing severe hemoptysis (requiring covered stents, coil embolization, or balloon tamponade).",
          "Access site hematoma.",
          "Need for multiple treatment sessions."
      ],
      "specificRisksHi": [
          "नस खुलने के बाद फेफड़े में अचानक पानी भरना (Reperfusion Edema) जिससे कुछ समय सांस लेने में तकलीफ हो सकती है।",
          "फेफड़े की नस में सुई या तार से छेद होना जिससे मुंह से खून आ सकता है (इसके लिए तुरंत गुब्बारा या छल्ला लगाकर नस सील की जाती है)।",
          "जांघ में खून का जमाव।",
          "पूरी तरह ठीक होने के लिए 2 से 4 अलग-अलग सत्रों की आवश्यकता होना।"
      ],
      "alternativesEn": "Open surgical Pulmonary Endarterectomy (PEA) with deep hypothermic circulatory arrest, targeted medical vasodilator therapy (Riociguat / Treprostinil), or lung transplantation.",
      "alternativesHi": "दिल और फेफड़े रोककर शरीर को ठंडा करने वाली महा-सर्जरी (PEA), अत्यंत महंगी जीवनभर चलने वाली दवाइयां, या लंग ट्रांसप्लांट।",
      "sedationTypeEn": "Local anesthesia with mild conscious sedation (patient must remain awake to cough and report symptoms).",
      "sedationTypeHi": "स्थानीय सुन्नता के साथ हल्की दवा (मरीज का होश में रहना जरूरी है ताकि वह खांस सके)।"
  },
  "svc-syndrome-recanalization-stenting": {
      "id": "svc-syndrome-recanalization-stenting",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "nameEn": "Superior Vena Cava (SVC) Syndrome: Sharp Recanalization and Bilateral Kissing Brachiocephalic-to-SVC Stenting",
      "nameHi": "सुपीरियर वेना कावा (एसवीसी) सिंड्रोम: रीकैनेलाइजेशन एवं स्टेंटिंग (छाती की मुख्य नस में ट्यूमर के दबाव को स्टेंट लगाकर खोलना)",
      "indicationEn": "Severe symptomatic Superior Vena Cava obstruction from lung cancer, lymphoma, mediastinal mass, or benign dialysis catheter scarring causing facial plethora, severe periorbital edema, stridor, and cerebral congestion.",
      "indicationHi": "छाती के कैंसर, गांठ या पुरानी नली के कारण छाती की सबसे बड़ी नस (SVC) का पूरी तरह दब जाना या बंद हो जाना, जिससे चेहरे, आंखों और गर्दन पर भयंकर सूजन, सांस लेने में घरघराहट, सिर में भारीपन और दम घुटने का जानलेवा संकट।",
      "descriptionEn": "Via femoral and/or arm/jugular access, guidewires cross the high-grade SVC stenosis into the right atrium. Following progressive balloon venoplasty, large-diameter self-expanding metallic stents (14-20 mm, e.g. Wallstent / Sinus-XL) or covered stent-grafts are deployed across the obstruction into the SVC.",
      "descriptionHi": "जांघ या हाथ की नस से तार डालकर एक्स-रे में बंद नस को पार किया जाता है। गुब्बारा फुलाकर रास्ता बनाने के बाद 16 से 20 मिमी का विशाल धातु का स्टेंट उस दबी हुई नस में प्रत्यारोपित किया जाता है। स्टेंट के खुलते ही ट्यूमर का दबाव खत्म हो जाता है और सिर व चेहरे का खून सीधे दिल में बहने लगता है।",
      "benefitsEn": [
          "Dramatic, near-instant relief of life-threatening facial edema, head fullness, and airway compromise within 12-24 hours.",
          "Proven superior speed and efficacy compared to radiation therapy or chemotherapy alone.",
          "Restores quality of life, allowing continuation of oncological cancer therapy."
      ],
      "benefitsHi": [
          "12 से 24 घंटे के भीतर चेहरे और आंखों की भयंकर सूजन, सिरदर्द और दम घुटने से चमत्कारी राहत।",
          "रेडिएशन या कीमोथेरेपी की तुलना में 100 गुना तेज असर।",
          "मरीज आराम से लेट पाता है और कैंसर का आगे का इलाज संभव हो पाता है।"
      ],
      "specificRisksEn": [
          "SVC rupture into the pericardium or mediastinum with fatal cardiac tamponade.",
          "Stent migration into the right atrium or pulmonary artery.",
          "Tumor ingrowth or acute stent thrombosis requiring re-intervention.",
          "Transient worsening of laryngeal edema."
      ],
      "specificRisksHi": [
          "नस के फटने से छाती या दिल की थैली में खून जमा होना।",
          "स्टेंट का खिसककर दिल के अंदर चले जाना।",
          "कैंसर की गांठ के स्टेंट के अंदर दोबारा बढ़ने से भविष्य में नस का दोबारा बंद होना।",
          "गले में अस्थायी सूजन।"
      ],
      "alternativesEn": "Emergency external beam radiation therapy (radiotherapy), urgent chemotherapy (if lymphoma/small cell lung cancer), or high-dose corticosteroids alone.",
      "alternativesHi": "कैंसर की तुरंत सिकाई (Radiation), कीमोथेरेपी, या केवल स्टेरॉयड दवाइयां (जिनका असर आने में कई दिन लगते हैं)।",
      "sedationTypeEn": "Local infiltration anesthesia with IV conscious sedation or General Anesthesia.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं नस द्वारा दर्द निवारक दवाइयां अथवा पूर्ण बेहोशी।"
  },
  "evla-gsv-incompetence": {
      "id": "evla-gsv-incompetence",
      "category": "Superficial Venous Interventions (Varicose Veins)",
      "nameEn": "Endovenous Laser Ablation (EVLA 1470nm) for Great Saphenous Vein (GSV) Incompetence",
      "nameHi": "वेरिकोज वेन्स का लेजर उपचार (EVLA 1470nm - पैर की उभरी खराब नसों को अंदर से लेजर द्वारा सील करना)",
      "indicationEn": "Symptomatic lower extremity varicose veins (CEAP Class C2-C6) with documented duplex reflux (>0.5 sec) at the saphenofemoral junction and along the great saphenous vein trunk, presenting with leg pain, heaviness, stasis eczema, or venous ulcers.",
      "indicationHi": "पैरों में नीली-बैंगनी नसों का बदसूरत गुच्छा बनना (Varicose Veins), पैरों में भारीपन, शाम होते-होते तेज दर्द, टखने के पास त्वचा का काला पड़ना, खुजली होना या न भरने वाले घाव होना।",
      "descriptionEn": "Under ultrasound guidance, the diseased saphenous vein is punctured at the knee or mid-calf. A radial-emitting laser fiber (1470 nm) is advanced with its tip positioned 2.0 cm below the saphenofemoral junction. Ultrasound-guided cold tumescent anesthesia is infiltrated around the vein to insulate adjacent tissues. Laser energy is delivered in a continuous motorized pullback, thermally sealing the vein shut.",
      "descriptionHi": "सोनोग्राफी से देखकर पैर की खराब नस में एक बारीक सुई लगाई जाती है। नस के अंदर एक विशेष लेजर फाइबर डाला जाता है। नस के चारों ओर सोनोग्राफी की मदद से सुन्न करने वाला ठंडा तरल (Tumescent Anesthesia) डाला जाता है ताकि त्वचा न जले। इसके बाद लेजर की गर्मी से खराब नस को अंदर से हमेशा के लिए सील कर दिया जाता है। खून स्वतः अंदर की स्वस्थ नसों से बहने लगता है।",
      "benefitsEn": [
          "98% long-term success rate in permanently closing incompetent varicose trunks.",
          "Walk-in, walk-out daycare procedure performed through a 2 mm pinhole with zero stitches and zero scars.",
          "Immediate return to normal walking and daily activities within 24 hours.",
          "Eliminates unsightly bulging veins and promotes healing of venous ulcers."
      ],
      "benefitsHi": [
          "खराब नसों को हमेशा के लिए बंद करने में 98% से अधिक पक्की सफलता।",
          "बिना किसी चीरे या टांके के केवल 2 मिमी के सुई के छेद से पूरा उपचार, कोई दाग नहीं।",
          "मरीज प्रक्रिया के तुरंत बाद अपने पैरों पर चलकर घर जा सकता है और अगले दिन काम पर लौट सकता है।",
          "पैरों के भद्दे गुच्छे खत्म होना और पैरों के घाव तेजी से भरना।"
      ],
      "specificRisksEn": [
          "Skin burns or hyperpigmentation along the treated vein segment.",
          "Saphenous or sural nerve injury causing temporary numbness or tingling in the foot/ankle (2-5%).",
          "Superficial thrombophlebitis (firm, tender vein cord for 1-2 weeks).",
          "Endovenous Heat-Induced Thrombosis (EHIT) or deep vein thrombosis (DVT, <1%).",
          "Recurrence of branch varicosities over time."
      ],
      "specificRisksHi": [
          "त्वचा पर हल्का खिंचाव, जलन अथवा त्वचा का रंग हल्का गहरा होना।",
          "पैर के पंजे या टखने में अस्थायी सुन्नपन अथवा झनझनाहट (नसों में खिंचाव के कारण, जो समय के साथ ठीक हो जाती है)।",
          "सील की गई नस में कुछ दिनों तक कड़ापन व छूने पर हल्का दर्द।",
          "गहरी नस में थक्का जाना (DVT - अत्यंत दुर्लभ, 1% से कम)।",
          "भविष्य में पैरों की अन्य छोटी शाखाओं का उभरना।"
      ],
      "alternativesEn": "Open surgical high ligation and stripping under spinal anesthesia, radiofrequency ablation (RFA), mechanochemical ablation (ClariVein), or lifelong medical compression stockings.",
      "alternativesHi": "कमर सुन्न करके जांघ और पैर में चीरा लगाकर नस को खींचकर बाहर निकालने का पुराना ऑपरेशन (Stripping), रेडियोफ्रीक्वेंसी इलाज, या जीवनभर तंग मोजे पहनना।",
      "sedationTypeEn": "Tumescent local anesthesia (dilute lignocaine/saline/bicarbonate) with optional mild oral/IV anxiolysis.",
      "sedationTypeHi": "पैर की नस के चारों ओर विशेष सुन्न करने वाला तरल (Tumescent Local Anesthesia)।"
  },
  "rfa-gsv-ssv-reflux": {
      "id": "rfa-gsv-ssv-reflux",
      "category": "Superficial Venous Interventions (Varicose Veins)",
      "nameEn": "Radiofrequency Ablation (RFA / ClosureFast) for GSV and Small Saphenous Vein (SSV) Reflux",
      "nameHi": "रेडियोफ्रीक्वेंसी एब्लेशन (RFA ClosureFast - रेडियो तरंगों की गर्मी से वेरिकोज वेन्स को बंद करना)",
      "indicationEn": "Symptomatic reflux of the great or small saphenous vein causing varicose veins, nocturnal leg cramps, restless legs, or venous stasis ulceration.",
      "indicationHi": "पैरों की मुख्य या छोटी नसों में वाल्व खराब होने से खून का उल्टा बहना, रात को पिंडलियों में भयंकर ऐंठन, बेचैनी और नसों का गुच्छा बनना।",
      "descriptionEn": "Under ultrasound, an RFA catheter (ClosureFast, 7 cm heating segment) is positioned in the saphenous vein. Following extensive perivenous tumescent anesthesia, controlled thermal energy (120 degrees C in 20-second cycles) is delivered segmental along the vein, causing collagen contraction and irreversible vein closure.",
      "descriptionHi": "सोनोग्राफी की मदद से नस में एक विशेष रेडियोफ्रीक्वेंसी कैथेटर डाला जाता है। नस के चारों ओर ठंडा सुन्न पानी भरकर 120 डिग्री सेल्सियस की नियंत्रित ऊर्जा से नस की दीवार के कोलेजन को सिकोड़कर नस को स्थायी रूप से सील कर दिया जाता है।",
      "benefitsEn": [
          "Exceptional procedural safety with even less post-operative bruising and pain than laser ablation.",
          "Pinhole access with zero surgical scars and zero recovery downtime.",
          "Rapid relief of heavy, tired legs and night cramps."
      ],
      "benefitsHi": [
          "लेजर से भी कम दर्द और नीले निशान पड़ने की सुविधा।",
          "बिना कोई निशान छोड़े तुरंत आराम।",
          "रात में होने वाली पिंडलियों की ऐंठन और भारीपन से तत्काल मुक्ति।"
      ],
      "specificRisksEn": [
          "Sural or saphenous paresthesia (temporary foot tingling).",
          "Skin hyperpigmentation.",
          "Superficial phlebitis.",
          "Deep vein thrombosis (EHIT <1%)."
      ],
      "specificRisksHi": [
          "पैर में कुछ दिनों तक हल्का सुन्नपन या झनझनाहट।",
          "त्वचा पर हल्का गहरा निशान।",
          "नस में हल्का कड़ापन।",
          "गहरी नस में थक्का (1% से कम)।"
      ],
      "alternativesEn": "EVLA, mechanochemical ablation, surgical stripping, or compression stockings.",
      "alternativesHi": "लेजर इलाज, चीरे वाला ऑपरेशन, या कम्प्रेशन मोजे।",
      "sedationTypeEn": "Tumescent local anesthesia.",
      "sedationTypeHi": "ट्यूमेसेंट स्थानीय सुन्नता (Tumescent Anesthesia)।"
  },
  "ntnt-venous-ablation-clarivein-venaseal": {
      "id": "ntnt-venous-ablation-clarivein-venaseal",
      "category": "Superficial Venous Interventions (Varicose Veins)",
      "nameEn": "Non-Thermal Non-Tumescent (NTNT) Venous Ablation: ClariVein MOCA / VenaSeal Glue",
      "nameHi": "नॉन-थर्मल वेनस एब्लेशन (वेनासील सुपरग्लू / क्लारीवेन - बिना गर्मी और बिना दर्जनों इंजेक्शन के नसों को गोंद से चिपकाना)",
      "indicationEn": "Patients with varicose veins who have needle-phobia, cannot tolerate painful multiple tumescent needle pricks, or have saphenous veins running in close proximity to major nerves where heat carries risk.",
      "indicationHi": "वेरिकोज वेन्स का ऐसा आधुनिक उपचार जिसमें पैर में दर्जनों सुइयां लगाने या नस को गर्म करने की बिल्कुल जरूरत नहीं होती, विशेषकर उन मरीजों के लिए जिन्हें सुइयों से अत्यधिक डर लगता हो या नस तंत्रिकाओं के बहुत पास हो।",
      "descriptionEn": "Via a single 4F-5F puncture, the catheter is guided into the saphenous vein under ultrasound. In VenaSeal, calibrated micro-droplets of medical cyanoacrylate glue are injected while applying external compression, instantly sealing the vein. In ClariVein, a spinning wire abrades the vein wall while infusing liquid sclerosant (MOCA). Zero tumescent fluid is injected.",
      "descriptionHi": "सोनोग्राफी की मदद से पैर में केवल एक सुई लगाई जाती है। नली को नस के अंदर ले जाकर एक विशेष मेडिकल सुपर-ग्लू (Cyanoacrylate Glue) की कुछ बूंदें छोड़ी जाती हैं और ऊपर से हाथ से दबाकर नस को तुरंत आपस में चिपका दिया जाता है। इसमें पैर में कोई सुन्न करने वाले तरल के इंजेक्शन नहीं लगाए जाते।",
      "benefitsEn": [
          "Truly 100% painless procedure requiring only a single skin puncture—zero tumescent needles along the leg.",
          "No risk of thermal nerve damage or skin burns.",
          "No requirement for uncomfortable post-procedure tight compression stockings in VenaSeal.",
          "Immediate return to sports, work, and normal walking."
      ],
      "benefitsHi": [
          "वास्तव में 100% दर्दरहित प्रक्रिया जिसमें पैर में दर्जनों सुइयां लगाने का कोई झंझट नहीं होता।",
          "नसों के जलने या चमड़ी झुलसने का कोई खतरा नहीं।",
          "प्रक्रिया के बाद भारी और तंग मोजे पहनने की कोई मजबूरी नहीं।",
          "प्रक्रिया खत्म होते ही तुरंत अपने पैरों पर चलकर घर और अगले दिन से काम पर वापसी।"
      ],
      "specificRisksEn": [
          "Type IV hypersensitivity reaction or red erythematous phlebitis along the vein (5-10%, responds to antihistamines and NSAIDs).",
          "Glue extrusion or foreign body granuloma (rare).",
          "Deep vein thrombosis from glue extension into common femoral vein (<0.5%).",
          "Failure of complete vein occlusion."
      ],
      "specificRisksHi": [
          "गोंद से हल्की एलर्जी या पैर पर कुछ दिनों के लिए लालिमा व खुजली होना (दवाइयों से ठीक हो जाती है)।",
          "नस के ऊपर छोटी गांठ महसूस होना।",
          "गोंद का मुख्य नस में चले जाना (0.5% से कम)।",
          "नस का पूरी तरह न चिपकना।"
      ],
      "alternativesEn": "Thermal ablation (EVLA / RFA), surgical stripping, or foam sclerotherapy.",
      "alternativesHi": "लेजर या रेडियोफ्रीक्वेंसी तकनीक, सर्जरी, या केवल फोम इंजेक्शन।",
      "sedationTypeEn": "Single-point local skin anesthesia only (zero tumescence).",
      "sedationTypeHi": "केवल सुई लगने की एक जगह पर हल्का सुन्न करने का इंजेक्शन।"
  },
  "ugfs-foam-sclerotherapy": {
      "id": "ugfs-foam-sclerotherapy",
      "category": "Superficial Venous Interventions (Varicose Veins)",
      "nameEn": "Ultrasound-Guided Foam Sclerotherapy (UGFS) with Polidocanol / STS",
      "nameHi": "अल्ट्रासाउंड-निर्देशित फोम स्क्लेरोथेरेपी (सोनोग्राफी देखकर झाग वाले इंजेक्शन द्वारा नसों को सुखाना)",
      "indicationEn": "Tortuous tributary varicose veins, recurrent varices post-surgery, incompetent perforator veins, or venous malformations and active venous stasis ulcers.",
      "indicationHi": "पैरों की टेढ़ी-मेढ़ी उभरी हुई शाखाएं, ऑपरेशन के बाद दोबारा उभरी नसें, पैर के घाव को खून देने वाली खराब नसें अथवा नसों के जन्मजात गुच्छे (Vascular Malformations)।",
      "descriptionEn": "Under real-time ultrasound, a sclerosant agent (Polidocanol or Sodium Tetradecyl Sulfate) is mixed with air or CO2 to generate micro-foam using the Tessari technique. Under continuous visualization, the foam is precisely injected via fine butterfly needles or cannulas into the target veins, displacing blood and causing chemical endothelial spasm and permanent fibrosis.",
      "descriptionHi": "सोनोग्राफी में देखते हुए दवा (Polidocanol) का विशेष तकनीक द्वारा झाग (Micro-foam) बनाया जाता है। एक अत्यंत बारीक सुई से इस झाग को सीधे खराब नसों में डाला जाता है। झाग नस की अंदरूनी दीवार को सुखाकर चिपका देता है, जिससे नस धीरे-धीरे गायब हो जाती है।",
      "benefitsEn": [
          "Highly effective for tortuous veins that cannot accommodate straight laser fibers.",
          "Outpatient office procedure taking 10-15 minutes without any anesthesia.",
          "Accelerates rapid healing of chronic venous ulcers when targeting feeder veins."
      ],
      "benefitsHi": [
          "टेढ़ी-मेढ़ी नसों के लिए सबसे उपयुक्त इलाज जिनमें लेजर का तार नहीं जा सकता।",
          "ओपीडी में 10 से 15 मिनट में होने वाला आसान उपचार, बिना किसी बेहोशी के।",
          "पैर के घावों को बहुत तेजी से सुखाना।"
      ],
      "specificRisksEn": [
          "Skin staining, brown hyperpigmentation, or telangiectatic matting.",
          "Superficial thrombophlebitis requiring needle evacuation of trapped coagulum.",
          "Transient visual disturbances (scotoma), migraine aura, or transient chest tightness (<1%, due to micro-bubble transit).",
          "Deep vein thrombosis (<0.5%).",
          "Skin necrosis if extravasated into skin."
      ],
      "specificRisksHi": [
          "नस के ऊपर त्वचा का रंग हल्का भूरा या काला पड़ना।",
          "नस में हल्का दर्द या कड़ापन।",
          "झाग के नन्हें बुलबुलों के कारण कुछ मिनटों के लिए आंखों के आगे चमक या सिर में हल्का भारीपन महसूस होना (1% से कम)।",
          "गहरी नस में थक्का जमना।",
          "दवा के त्वचा में रिसने पर छाला पड़ना।"
      ],
      "alternativesEn": "Surgical ambulatory phlebectomy (micro-incisions), surface laser therapy, or compression stockings.",
      "alternativesHi": "छोटे-छोटे चीरे लगाकर नसों को बाहर खींचना (Phlebectomy), या कम्प्रेशन मोजे पहनना।",
      "sedationTypeEn": "None required (painless micro-needle injections).",
      "sedationTypeHi": "किसी बेहोशी की आवश्यकता नहीं।"
  },
  "percutaneous-nephrostomy-pcn": {
      "id": "percutaneous-nephrostomy-pcn",
      "category": "Urological Non-Vascular Interventions",
      "nameEn": "Percutaneous Nephrostomy (PCN): Ultrasound and Fluoroscopy Guided Posterior Calyx Puncture",
      "nameHi": "परक्यूटेनियस नेफ्रोस्टॉमी (PCN - गुर्दे में नली डालकर पेशाब का रास्ता खोलना)",
      "indicationEn": "Acute or chronic obstructive uropathy (ureteral calculus, cervical/prostate malignancy, retroperitoneal fibrosis) with hydronephrosis, urosepsis, acute renal failure, or failed retrograde stenting.",
      "indicationHi": "पेशाब की नली में पथरी, रसौली या कैंसर की गांठ के कारण पेशाब का रास्ता रुक जाना, गुर्दे में पेशाब भर जाना (Hydronephrosis), गुर्दे में मवाद पड़ना (Pyonephrosis) या दोनों गुर्दे फेल होने की आपातकालीन स्थिति।",
      "descriptionEn": "With the patient prone or oblique, under ultrasound guidance, an 18G/21G needle punctures a posterior lower-pole renal calyx through Brodel's avascular line. Dilute contrast confirms pyelocaliceal anatomy under fluoroscopy. Over a guidewire, the tract is sequentially dilated, and an 8.5F-10F locking pigtail drainage catheter is positioned in the renal pelvis and connected to a drainage bag.",
      "descriptionHi": "मरीज को पेट के बल लिटाकर पीठ के हिस्से को सुन्न किया जाता है। सोनोग्राफी और एक्स-रे की निगरानी में गुर्दे के अंदर एक अत्यंत बारीक सुई डाली जाती है। तार डालकर रास्ते को धीरे-धीरे चौड़ा किया जाता है और गुर्दे के अंदर एक विशेष घुमावदार नली (Pigtail Catheter) स्थापित कर दी जाती है जो बाहर पेशाब की थैली से जुड़ जाती है।",
      "benefitsEn": [
          "Immediate decompression of the obstructed kidney, preventing irreversible renal parenchymal destruction.",
          "Instant, life-saving drainage of infected pus in uroseptic shock.",
          "Rapid normalization of serum creatinine and relief of severe flank pain."
      ],
      "benefitsHi": [
          "रुके हुए गुर्दे का दबाव तुरंत खत्म करके गुर्दे को हमेशा के लिए खराब होने से बचाना।",
          "गुर्दे में भरे जानलेवा मवाद को तुरंत बाहर निकालकर सेप्सिस और मृत्यु से जीवनरक्षा।",
          "बढ़े हुए क्रिएटिनिन (Creatinine) को तुरंत नीचे लाना और असहनीय कमर दर्द से तत्काल राहत।"
      ],
      "specificRisksEn": [
          "Renal hemorrhage or hematuria (arteriovenous fistula or pseudoaneurysm, 1-3%, may require renal angioembolization).",
          "Pneumothorax or hemothorax (if intercostal puncture above 12th rib).",
          "Uroseptic bacteremic shower during initial contrast injection.",
          "Catheter dislodgement, kinking, or blockage requiring tube exchange.",
          "Bowel perforation (retrorenal colon, rare)."
      ],
      "specificRisksHi": [
          "पेशाब में खून आना या गुर्दे में रक्तस्राव (1-3%), जिसके लिए गुर्दे की नस बंद करने (Embolization) की जरूरत पड़ सकती है।",
          "पसली के ऊपर सुई लगने से फेफड़े में हवा या खून भरना।",
          "नली डालते समय रक्त में संक्रमण फैलने से अचानक तेज बुखार या कंपकंपी आना।",
          "नली का मुड़ना, बंद होना या बाहर खिसक जाना जिसके लिए नली बदलनी पड़ सकती है।",
          "आंत में सुई लगने का अत्यंत दुर्लभ खतरा।"
      ],
      "alternativesEn": "Retrograde ureteral stenting (cystoscopy-guided DJ stent) under general/spinal anesthesia, or emergency open nephrostomy.",
      "alternativesHi": "पेशाब के रास्ते से दूरबीन द्वारा डीजे स्टेंट डालना (यदि रास्ता खुला हो), अथवा बड़ा चीरा लगाकर गुर्दे का ऑपरेशन।",
      "sedationTypeEn": "Local infiltration anesthesia (2% Lignocaine) with IV analgesia and conscious sedation.",
      "sedationTypeHi": "पीठ पर स्थानीय सुन्नता का इंजेक्शन (Local Anesthesia) एवं नस द्वारा दर्द निवारक व शांत करने की दवा।"
  },
  "antegrade-dj-ureteral-stent": {
      "id": "antegrade-dj-ureteral-stent",
      "category": "Urological Non-Vascular Interventions",
      "nameEn": "Antegrade Double-J (DJ) Ureteral Stent Placement for Ureteric Obstruction",
      "nameHi": "एंटिग्रेड डीजे स्टेंट प्रत्यारोपण (गुर्दे के रास्ते से पेशाब की नली में दोनों तरफ घुमावदार स्टेंट डालना)",
      "indicationEn": "Ureteral obstruction (calculus, stricture, retroperitoneal or pelvic malignancy) where retrograde cystoscopic stenting has failed, or internal drainage is required without external drainage bags.",
      "indicationHi": "पेशाब की नली में रुकावट जहां नीचे से दूरबीन द्वारा स्टेंट डालना असफल हो गया हो, और मरीज की पीठ से बाहर लटकने वाली नली को हटाकर अंदर ही अंदर गुर्दे से पेशाब की थैली तक पक्का स्टेंट लगाना हो।",
      "descriptionEn": "Via existing or new percutaneous nephrostomy access, hydrophilic guidewires and angled glidecath navigate down the ureter past the obstruction into the urinary bladder. An antegrade Double-J stent (6F-7F, 24-28 cm) is pushed over the wire until its distal pigtail coils inside the bladder and proximal curl anchors inside the renal pelvis under fluoroscopy.",
      "descriptionHi": "गुर्दे के रास्ते से एक्स-रे की निगरानी में एक बारीक तार रुकावट को पार करते हुए सीधे पेशाब की थैली (Bladder) में पहुंचाया जाता है। तार के सहारे एक विशेष डीजे स्टेंट (DJ Stent) डाला जाता है जिसका एक सिरा गुर्दे में और दूसरा सिरा पेशाब की थैली में गोल मुड़ जाता है। इससे पेशाब अंदर ही अंदर प्राकृतिक रास्ते से बहने लगता है और पीठ की बाहरी थैली हटाई जा सकती है।",
      "benefitsEn": [
          "Provides complete internal urinary drainage, eliminating the need for uncomfortable external nephrostomy bags.",
          "Preserves normal urinary stream and physiological voiding.",
          "Bypasses tight or impassable pelvic ureteral strictures."
      ],
      "benefitsHi": [
          "पीठ पर बाहर लटकने वाली पेशाब की थैली और नली से हमेशा के लिए मुक्ति।",
          "पेशाब प्राकृतिक रास्ते से स्वतः बाहर आने लगना।",
          "कैंसर या पथरी से दबी हुई पेशाब की नली को अंदर से पूरी तरह खुला रखना।"
      ],
      "specificRisksEn": [
          "Ureteral perforation, false tract formation, or contrast extravasation.",
          "Hematuria (blood in urine).",
          "Stent-related lower urinary tract symptoms (dysuria, frequency, flank pain during micturition due to reflux).",
          "Stent migration, encrustation, or blockage requiring periodic stent exchange (every 3-6 months).",
          "Urosepsis."
      ],
      "specificRisksHi": [
          "पेशाब की नली में सुई या तार से छेद होना या छिलना।",
          "पेशाब में कुछ दिनों तक खून या लाल रंग आना।",
          "पेशाब करते समय कमर में हल्का दर्द, बार-बार पेशाब आना या जलन होना (स्टेंट के कारण)।",
          "समय के साथ स्टेंट पर नमक/पथरी की परत जमना या स्टेंट का खिसकना (हर 3 से 6 महीने में स्टेंट बदलना जरूरी होता है)।",
          "संक्रमण (Infection)।"
      ],
      "alternativesEn": "Permanent external percutaneous nephrostomy (PCN) drainage, repeat retrograde cystoscopic stenting attempt, or open surgical ureteroneocystostomy.",
      "alternativesHi": "पीठ पर जीवनभर पीसीएन नली और थैली लगाकर रखना, या पेट का बड़ा ऑपरेशन करके पेशाब की नली को दोबारा जोड़ना।",
      "sedationTypeEn": "Local anesthesia with IV conscious sedation and analgesia.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं नस द्वारा दर्द निवारक व शामक दवा।"
  },
  "pcnl-access-tract-dilation": {
      "id": "pcnl-access-tract-dilation",
      "category": "Urological Non-Vascular Interventions",
      "nameEn": "Percutaneous Nephrolithotomy (PCNL) Access Tract Creation with Balloon / Amplatz Dilation up to 30F",
      "nameHi": "पीसीएनएल ट्रैक्ट निर्माण (गुर्दे की बड़ी पथरी निकालने हेतु पीठ में दूरबीन का 1 सेमी का चौड़ा रास्ता बनाना)",
      "indicationEn": "Large or complex renal calculi (staghorn calculi, pelviureteric stones >2 cm) scheduled for single-stage percutaneous nephrolithotomy by urology.",
      "indicationHi": "गुर्दे में बड़ी पथरी (Staghorn Stone या 2 सेमी से बड़ी पथरी), जिसे दूरबीन द्वारा फोड़कर बाहर निकालने के लिए गुर्दे के अंदर एक चौड़ा रास्ता (Tract) बनाना।",
      "descriptionEn": "Under combined ultrasound and fluoroscopic guidance, the appropriate calyx directly targeting the stone burden is punctured. Over a safety wire and working wire, the retroperitoneal tract is dilated using a high-pressure balloon dilator or serial Amplatz dilators up to 24F-30F. An Amplatz working sheath is seated into the renal collecting system for immediate nephroscope entry.",
      "descriptionHi": "सोनोग्राफी और एक्स-रे से पथरी की सटीक दिशा देखकर गुर्दे में सुई डाली जाती है। तार डालकर उस रास्ते को विशेष गुब्बारे या डायलेटर द्वारा धीरे-धीरे 8 से 10 मिमी (24-30F) तक चौड़ा किया जाता है और एक विशेष खोखली नली (Amplatz Sheath) स्थापित कर दी जाती है जिसके रास्ते यूरोलॉजिस्ट दूरबीन डालकर पथरी को फोड़कर बाहर निकाल लेते हैं।",
      "benefitsEn": [
          "Precise anatomical calyceal targeting maximizes stone clearance while minimizing parenchymal vascular injury.",
          "Enables complete clearance of massive stones in a single minimally invasive sitting.",
          "Significantly less morbidity than traditional open anatrophic nephrolithotomy."
      ],
      "benefitsHi": [
          "गुर्दे की नसों को नुकसान पहुंचाए बिना सीधे पथरी के मुंह पर अचूक रास्ता बनना।",
          "बड़ी से बड़ी पथरी का एक ही बार में पूरा खात्मा।",
          "कमर पर 8-10 इंच का बड़ा चीरा लगाने और मांसपेशियों को काटने से बचाव।"
      ],
      "specificRisksEn": [
          "Severe renal parenchymal hemorrhage or interlobar artery pseudoaneurysm requiring urgent transcatheter embolization (1-3%).",
          "Pleural transgression and hydrothorax/pneumothorax (especially supracostal 11th/12th rib punctures).",
          "Collecting system tear or extravasation.",
          "Urosepsis."
      ],
      "specificRisksHi": [
          "गुर्दे से अत्यधिक रक्तस्राव या खून की नस का फटना (1-3%), जिसके लिए तुरंत नस में छल्ला लगाकर ब्लीडिंग रोकने की आवश्यकता हो सकती है।",
          "पसली के ऊपर से रास्ता बनाने पर फेफड़े की थैली में पानी या हवा भरना।",
          "गुर्दे की दीवार में खिंचाव या रिसाव।",
          "रक्त में संक्रमण फैलना।"
      ],
      "alternativesEn": "Retrograde intrarenal surgery (RIRS / flexible ureterorenoscopy), open surgical nephrolithotomy, or shock wave lithotripsy (ESWL).",
      "alternativesHi": "पेशाब के रास्ते से लचीली दूरबीन द्वारा लेजर से पथरी फोड़ना (RIRS), पेट खोलकर ऑपरेशन, या बाहर से शॉकवेव देना।",
      "sedationTypeEn": "General Anesthesia or combined Spinal-Epidural Anesthesia.",
      "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा रीढ़ की हड्डी में सुन्न करने का इंजेक्शन (Spinal Anesthesia)।"
  },
  "percutaneous-ureteral-stricture-balloon-dilation": {
      "id": "percutaneous-ureteral-stricture-balloon-dilation",
      "category": "Urological Non-Vascular Interventions",
      "nameEn": "Percutaneous Balloon Dilation of Benign Ureteral Stricture with Cutting / High-Pressure Balloon",
      "nameHi": "पेशाब की नली की सिकुड़न की बैलून एंजियोप्लास्टी (गुब्बारे द्वारा पेशाब की नली की अंदरूनी रुकावट खोलना)",
      "indicationEn": "Benign ureteral strictures (post-surgical, anastomotic post-transplant, post-radiation, or post-calculus impaction) causing hydronephrosis.",
      "indicationHi": "ऑपरेशन, पथरी फंसने या रेडिएशन के बाद पेशाब की नली का अंदर से सिकुड़ जाना जिससे गुर्दे में पेशाब रुकने लगा हो।",
      "descriptionEn": "Via percutaneous nephrostomy, guidewires cross the ureteral stricture. A cutting balloon or ultra-high-pressure non-compliant balloon (5-8 mm) is centered across the stricture and inflated to waist effacement under fluoroscopy, followed by placement of a temporary large-bore stent.",
      "descriptionHi": "गुर्दे के रास्ते से तार डालकर सिकुड़न वाली जगह पर एक विशेष उच्च-दाब गुब्बारा फुलाया जाता है जिससे सिकुड़ी हुई नली चौड़ी हो जाती है। इसके बाद नली को खुला रखने के लिए कुछ हफ्तों के लिए एक बड़ा स्टेंट अंदर छोड़ दिया जाता है।",
      "benefitsEn": [
          "Restores normal luminal caliber of the ureter without major open reconstructive surgery.",
          "Preserves kidney function and relieves obstructive pain.",
          "Minimally invasive percutaneous outpatient approach."
      ],
      "benefitsHi": [
          "बिना कोई चीरा लगाए पेशाब की नली का रास्ता चौड़ा करना।",
          "गुर्दे की कार्यक्षमता सुरक्षित रहना और दर्द से राहत।",
          "जल्द स्वास्थ्य लाभ।"
      ],
      "specificRisksEn": [
          "Ureteral rupture or transmural extravasation requiring prolonged stenting or nephrostomy drainage.",
          "Hematuria.",
          "Recurrence of stricture (30-40% over 1-2 years).",
          "Infection."
      ],
      "specificRisksHi": [
          "गुब्बारा फुलाते समय पेशाब की नली में दरार या रिसाव।",
          "पेशाब में खून आना।",
          "भविष्य में सिकुड़न का दोबारा लौट आना (30-40% मामलों में)।",
          "इन्फेक्शन।"
      ],
      "alternativesEn": "Open surgical ureteroneocystostomy or Boari flap reconstruction, or lifelong periodic DJ stent exchanges.",
      "alternativesHi": "पेशाब की नली का बड़ा प्लास्टिक सर्जरी ऑपरेशन, अथवा जीवनभर हर 3 महीने पर स्टेंट बदलना।",
      "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं नस द्वारा शामक/दर्द निवारक दवा।"
  },
  "percutaneous-radiologic-gastrostomy-prg": {
      "id": "percutaneous-radiologic-gastrostomy-prg",
      "category": "Enteric & Gastrointestinal Interventions",
      "nameEn": "Percutaneous Radiologic Gastrostomy (PRG) with T-Fastener Gastropexy",
      "nameHi": "परक्यूटेनियस रेडियोलॉजिक गैस्ट्रोस्टॉमी (PRG - पेट में सीधे भोजन पहुंचाने वाली नली डालना)",
      "indicationEn": "Patients requiring long-term enteral nutritional support who cannot swallow due to head/neck tumors, esophageal cancer, neurological disorders (ALS, stroke, Parkinson's), or failed endoscopic PEG.",
      "indicationHi": "मुंह या गले के कैंसर, भोजन की नली बंद होने, लकवा (Stroke) या तंत्रिका रोगों के कारण जब मरीज मुंह से खाना-पीना निगलने में पूरी तरह असमर्थ हो और लम्बे समय तक पेट में सीधे पोषण देना अनिवार्य हो।",
      "descriptionEn": "The stomach is distended with air via a nasogastric tube or catheter. Under fluoroscopic and ultrasound guidance, 2 to 3 gastropexy T-fasteners are deployed through the anterior abdominal wall to fixate the anterior stomach wall firmly against the abdominal wall. A 14F-18F balloon-retained gastrostomy tube is placed over a wire into the gastric antrum and secured.",
      "descriptionHi": "नाक में पतली नली डालकर पेट (आमाशय) में थोड़ी हवा भरकर उसे फुलाया जाता है। सोनोग्राफी और एक्स-रे में देखकर पेट की चमड़ी को सुन्न किया जाता है। विशेष छोटे धागों/बटनों (T-Fasteners) से आमाशय को पेट की दीवार से चिपकाकर सुरक्षित कर दिया जाता है। इसके बाद तार के सहारे पेट के अंदर सीधे भोजन पहुंचाने वाली विशेष नली (Gastrostomy Tube) स्थापित कर दी जाती है।",
      "benefitsEn": [
          "Provides direct, comfortable, long-term enteral nutrition, reversing severe malnutrition and weight loss.",
          "T-fastener gastropexy prevents gastric separation, dramatically reducing life-threatening peritonitis compared to blind endoscopy.",
          "Higher technical success rate than endoscopic PEG in patients with obstructing head/neck or esophageal tumors."
      ],
      "benefitsHi": [
          "मरीज को सीधे पेट में दूध, दाल, सूप, जूस और दवाइयां देने का सबसे सुरक्षित और आरामदायक रास्ता, जिससे मरीज कुपोषण और कमजोरी से बच जाता है।",
          "टी-फास्टनर टांके होने के कारण आमाशय के खिसकने और पेट में भोजन रिसने का खतरा बिल्कुल नहीं रहता।",
          "गले या भोजन की नली में ट्यूमर होने पर भी बिना किसी रुकावट के 100% सफल।"
      ],
      "specificRisksEn": [
          "Peritonitis secondary to premature tube dislodgement or gastric leak into the peritoneal cavity (1-2%).",
          "Transcolonic puncture (inadvertent passage of needle through the colon, causing gastrocolocutaneous fistula).",
          "Stomal site bleeding from the superior or inferior epigastric vessels.",
          "Stoma site superficial wound infection or peristomal leakage.",
          "Aspiration pneumonia."
      ],
      "specificRisksHi": [
          "नली के समय से पहले बाहर निकलने पर पेट के भीतर भोजन का रिसाव और इन्फेक्शन (पेरिटोनाइटिस)।",
          "सुई का बड़ी आंत को छूते हुए निकलने का दुर्लभ जोखिम।",
          "पेट की चमड़ी से खून का रिसाव।",
          "नली के चारों ओर त्वचा पर लालिमा, मवाद या हल्का रिसाव।",
          "फेफड़ों में भोजन का कण जाने से निमोनिया (Aspiration Pneumonia)।"
      ],
      "alternativesEn": "Endoscopic gastrostomy (PEG), surgical open or laparoscopic gastrostomy, long-term nasogastric (Ryle's) tube feeding, or total parenteral nutrition (TPN).",
      "alternativesHi": "दूरबीन द्वारा पेट में नली डालना (PEG), चीरा लगाकर सर्जरी, नाक में हमेशा के लिए नली डालकर रखना, अथवा नसों द्वारा ग्लूकोज व पोषण देना।",
      "sedationTypeEn": "Local infiltration anesthesia (1-2% Lignocaine) with mild IV conscious sedation.",
      "sedationTypeHi": "पेट की त्वचा पर स्थानीय सुन्नता का इंजेक्शन (Local Anesthesia) एवं हल्की शांत करने वाली दवा।"
  },
  "percutaneous-radiologic-gastrojejunostomy-prgj": {
      "id": "percutaneous-radiologic-gastrojejunostomy-prgj",
      "category": "Enteric & Gastrointestinal Interventions",
      "nameEn": "Percutaneous Radiologic Gastrojejunostomy (PRGJ) for Post-Pyloric Feeding",
      "nameHi": "परक्यूटेनियस गैस्ट्रोजेजुनोस्टॉमी (PRGJ - आमाशय को बाईपास करके छोटी आंत में सीधे भोजन की नली डालना)",
      "indicationEn": "Gastric outlet obstruction, severe gastroparesis, intractable vomiting, or recurrent pulmonary aspiration where intragastric feeding is contraindicated.",
      "indicationHi": "आमाशय के मुहाने पर रुकावट (ट्यूमर या अल्सर के कारण), पेट का खाना आगे न बढ़ना, बार-बार उल्टी होना, या जब पेट में भोजन डालने से वह फेफड़ों में चला जाता हो (Aspiration)।",
      "descriptionEn": "Through existing or primary gastrostomy access, steerable catheters and wires are navigated under fluoroscopy past the pylorus and duodenal C-loop into the proximal jejunum. A dual-lumen gastrojejunostomy tube (with a jejunal feeding port and gastric decompression port) is positioned and locked.",
      "descriptionHi": "पेट की नली के रास्ते से एक्स-रे में देखकर तार को आमाशय के पार ले जाकर सीधे छोटी आंत (Jejunum) में पहुंचाया जाता है। वहां दोहरी नली (PRGJ Tube) डाली जाती है, जिससे खाना सीधे छोटी आंत में पचता है और आमाशय में भरा खट्टा पानी अलग छेद से बाहर निकल जाता है।",
      "benefitsEn": [
          "Completely bypasses gastric outlet obstruction and prevents fatal pulmonary aspiration.",
          "Allows simultaneous gastric decompression while providing continuous small bowel feeding.",
          "Improves patient nutritional status without open surgical jejunostomy."
      ],
      "benefitsHi": [
          "रुकावट को बाईपास करके सीधे छोटी आंत में खाना पहुंचाना, जिससे खाना फेफड़ों में नहीं जाता।",
          "उल्टी और पेट का भारीपन पूरी तरह बंद होना।",
          "बिना कोई पेट का ऑपरेशन किए मरीज को संपूर्ण पोषण मिलना।"
      ],
      "specificRisksEn": [
          "Jejunal loop kinking or retrograde tube migration back into the stomach.",
          "Small bowel perforation or mucosal ulceration.",
          "Clogging of narrow jejunal feeding lumen.",
          "Peritonitis or peristomal infection."
      ],
      "specificRisksHi": [
          "नली का मुड़ना या आंत से खिसककर वापस आमाशय में आ जाना।",
          "छोटी आंत की नाजुक दीवार में खरोंच।",
          "पतली नली में खाना फंसने से नली का बंद होना।",
          "पेट में इन्फेक्शन।"
      ],
      "alternativesEn": "Surgical open/laparoscopic jejunostomy, surgical gastrojejunostomy bypass, or total parenteral nutrition.",
      "alternativesHi": "पेट चीरकर आंत में नली डालने का ऑपरेशन, बाईपास सर्जरी, या नसों से पोषण।",
      "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं हल्की शामक दवा।"
  },
  "percutaneous-cecostomy-colostomy": {
      "id": "percutaneous-cecostomy-colostomy",
      "category": "Enteric & Gastrointestinal Interventions",
      "nameEn": "Percutaneous Cecostomy / Colostomy Catheter Placement for Colonic Decompression",
      "nameHi": "परक्यूटेनियस सीकोस्टॉमी (बड़ी आंत में नली डालकर गैस और मल का दबाव कम करना)",
      "indicationEn": "Acute colonic pseudo-obstruction (Ogilvie syndrome) refractory to neostigmine and colonoscopy, or palliation of inoperable obstructing distal colorectal cancer in frail patients.",
      "indicationHi": "बड़ी आंत का गुब्बारे की तरह फूल जाना (Ogilvie Syndrome) जिससे आंत फटने का खतरा हो, या कैंसर के कारण बड़ी आंत बंद हो जाना और मरीज ऑपरेशन सहन करने की स्थिति में न हो।",
      "descriptionEn": "Under ultrasound and fluoroscopy, the distended cecum in the right lower quadrant is localized. After bowel wall fixation with T-fasteners, a puncture is made and dilated over a wire. A 12F-14F locking pigtail drainage catheter is seated in the cecum for gas venting and decompression.",
      "descriptionHi": "सोनोग्राफी और एक्स-रे से पेट के निचले दाहिने हिस्से में फूली हुई बड़ी आंत को देखकर सुन्न किया जाता है। आंत को टांकों से सुरक्षित करके उसके अंदर एक नली डाल दी जाती है जिससे फंसी हुई गैस और तरल तुरंत बाहर निकल जाता है और आंत फटने से बच जाती है।",
      "benefitsEn": [
          "Prevents imminent, catastrophic cecal perforation and fatal fecal peritonitis.",
          "Rapid, non-surgical colonic decompression in critically ill, frail ICU patients.",
          "Safe bedside or angiographic suite intervention under local anesthesia."
      ],
      "benefitsHi": [
          "बड़ी आंत के फटने और पेट में मल फैलने से होने वाली मौत से तत्काल बचाव।",
          "गंभीर रूप से बीमार मरीजों में बिना किसी बड़े ऑपरेशन के आंत का तनाव तुरंत खत्म करना।",
          "मरीज की जान बचाना।"
      ],
      "specificRisksEn": [
          "Fecal peritonitis from leak around the catheter tract.",
          "Bleeding from cecal wall or epigastric vessels.",
          "Catheter dislodgement requiring urgent revision.",
          "Infection."
      ],
      "specificRisksHi": [
          "नली के किनारे से मल का पेट में रिसाव और इन्फेक्शन।",
          "आंत की दीवार से रक्तस्राव।",
          "नली का खिसकना।",
          "घाव में मवाद पड़ना।"
      ],
      "alternativesEn": "Emergency laparotomy and surgical cecostomy/colostomy, or repeated endoscopic colonoscopic decompression.",
      "alternativesHi": "पेट का बड़ा आपातकालीन ऑपरेशन, अथवा दूरबीन द्वारा आंत की गैस निकालना।",
      "sedationTypeEn": "Local infiltration anesthesia with IV analgesia.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं दर्द निवारक दवा।"
  },
  "percutaneous-abdominopelvic-abscess-drainage": {
      "id": "percutaneous-abdominopelvic-abscess-drainage",
      "category": "Abscess & Fluid Drainage",
      "nameEn": "Percutaneous Drainage of Complex Multi-Loculated Abdominopelvic Abscess under CT/US Guidance",
      "nameHi": "पेट एवं पेडू के मवाद (एब्सेस) की परक्यूटेनियस ड्रेनेज (सोनोग्राफी/सीटी स्कैन देखकर पेट से मवाद निकालने की नली डालना)",
      "indicationEn": "Intra-abdominal or pelvic abscess collections (postoperative leak, appendicular abscess, diverticular abscess, infected fluid) causing septic fever, leukocytosis, and abdominal pain.",
      "indicationHi": "ऑपरेशन के बाद, अपेंडिक्स फटने या आंत में सुराख होने के कारण पेट या पेडू में मवाद (Pus) की थैली बनना, जिससे तेज बुखार, कंपकंपी, खून में गंभीर संक्रमण (Sepsis) और तेज पेट दर्द हो रहा हो।",
      "descriptionEn": "Using high-resolution CT or ultrasound guidance, a safe percutaneous route avoiding intervening bowel, bladder, and major vessels is planned. Under local anesthesia, an 18G needle is inserted into the collection. Fluid is aspirated for microbiological culture, followed by guidewire insertion, tract dilation, and placement of an 8F-14F locking pigtail drainage catheter connected to a closed drainage bag.",
      "descriptionHi": "सीटी स्कैन या सोनोग्राफी द्वारा पेट की आंतों और नसों को बचाते हुए बिल्कुल सुरक्षित रास्ता तय किया जाता है। चमड़ी को सुन्न करके एक बारीक सुई सीधे मवाद की थैली में डाली जाती है। जांच के लिए मवाद का नमूना लेकर तार के सहारे एक विशेष घुमावदार नली (Pigtail Drain) अंदर छोड़ दी जाती है जो बाहर थैली में मवाद निकालती रहती है।",
      "benefitsEn": [
          "Cures deep-seated intra-abdominal sepsis in >90% of cases without requiring repeat open exploratory laparotomy.",
          "Rapid resolution of septic fever, leukocytosis, and abdominal pain within 24-48 hours.",
          "Minimally invasive, organ-sparing intervention with minimal recovery time."
      ],
      "benefitsHi": [
          "90% से अधिक मरीजों में बिना दोबारा पेट का चीर-फाड़ वाला ऑपरेशन किए गहरे मवाद का संपूर्ण इलाज।",
          "24 से 48 घंटे के भीतर तेज बुखार, संक्रमण और दर्द से तुरंत राहत।",
          "मरीज की जान बचाना और अस्पताल से जल्दी छुट्टी।"
      ],
      "specificRisksEn": [
          "Inadvertent bowel perforation (enterocutaneous fistula) or bladder injury.",
          "Intra-abdominal hemorrhage from mesenteric or epigastric vessel laceration.",
          "Septic shock induced by transient bacteremic shower during initial catheter manipulation.",
          "Catheter blockage or premature dislodgement requiring tube flush/replacement."
      ],
      "specificRisksHi": [
          "सुई से आंत में खरोंच या सुराख होने का दुर्लभ जोखिम।",
          "पेट के अंदर रक्तस्राव।",
          "मवाद को छूने से रक्तचाप अचानक गिरना (Septic Shock)।",
          "गाढ़े मवाद के कारण नली का बंद होना या बाहर खिसकना।"
      ],
      "alternativesEn": "Open or laparoscopic surgical abscess drainage under general anesthesia, or prolonged intravenous broad-spectrum antibiotic therapy alone (if collection is very small < 3 cm).",
      "alternativesHi": "पेट चीरकर दोबारा बड़ा ऑपरेशन करना, अथवा केवल एंटीबायोटिक दवाइयां देना (यदि मवाद बहुत छोटा हो)।",
      "sedationTypeEn": "Local infiltration anesthesia (1-2% Lignocaine) with IV conscious sedation and analgesia.",
      "sedationTypeHi": "स्थानीय सुन्नता का इंजेक्शन एवं नस द्वारा दर्द निवारक व शामक दवा।"
  },
  "percutaneous-necrosectomy-won": {
      "id": "percutaneous-necrosectomy-won",
      "category": "Abscess & Fluid Drainage",
      "nameEn": "Percutaneous Necrosectomy and Multi-Catheter Irrigation for Walled-Off Pancreatic Necrosis (WON)",
      "nameHi": "पैंक्रियाटिक नेक्रोसिस ड्रेनेज एवं नेक्रोसेक्टॉमी (अग्न्याशय के सड़े हुए मृत ऊतकों को नली द्वारा धोकर बाहर निकालना)",
      "indicationEn": "Infected walled-off pancreatic necrosis (WON) complicating severe acute necrotizing pancreatitis, presenting with unremitting septic shock, organ failure, or pain refractory to antibiotics.",
      "indicationHi": "गंभीर तीव्र पैंक्रियाटाइटिस (Pancreatitis) के बाद अग्न्याशय और पेट के पीछे के अंगों का सड़ जाना, उसमें मवाद व मृत मांस के टुकड़े (Necrosis) जमा होना, जिससे मरीज का बीपी गिरना, अंग फेल होना और जान पर संकट बन जाना।",
      "descriptionEn": "Under CT guidance, retroperitoneal or transabdominal access into the necrotic collection is achieved. Up to two to three large-bore drains (16F-28F) are placed. Serial saline irrigation protocols are instituted, and if solid necrotic debris persists, flexible choledochoscopes or endoscopes are introduced through the mature percutaneous tract to mechanically debride solid debris.",
      "descriptionHi": "सीटी स्कैन की लाइव निगरानी में पेट के पीछे सड़े हुए पैंक्रियास के हिस्से में 2 से 3 मोटी नलियां (16 से 28F) डाली जाती हैं। इन नलियों के जरिए रोजाना सेलाइन डालकर मवाद और मृत मांस को धोकर बाहर निकाला जाता है। जरूरत पड़ने पर नली के रास्ते से सूक्ष्म दूरबीन डालकर सड़े हुए टुकड़ों को पकड़कर बाहर निकाल लिया जाता है (Percutaneous Necrosectomy)।",
      "benefitsEn": [
          "Key cornerstone of the internationally validated 'Step-Up Approach', reducing mortality and major morbidity by >50% compared to open necrosectomy.",
          "Avoids devastating surgical open necrosectomy in critically ill patients.",
          "Provides controlled, gradual retroperitoneal clearance with organ preservation."
      ],
      "benefitsHi": [
          "दुनिया भर में स्वीकृत 'स्टेप-अप' तकनीक जिसके द्वारा पुराने बड़े ऑपरेशन की तुलना में मृत्यु दर में 50% से अधिक की कमी आती है।",
          "गंभीर रूप से आईसीयू में भर्ती मरीज को बड़े जानलेवा ऑपरेशन से बचाना।",
          "धीरे-धीरे पूरी गंदगी और मवाद साफ होकर पैंक्रियास का पूरी तरह स्वस्थ होना।"
      ],
      "specificRisksEn": [
          "Severe retroperitoneal hemorrhage from erosion into splenic artery, portal vein, or pseudoaneurysm (requiring emergency coil/stent embolization).",
          "Pancreaticocutaneous or gastrointestinal fistula formation.",
          "Prolonged hospital stay and need for multiple catheter up-sizings.",
          "Persistent sepsis or multi-organ failure."
      ],
      "specificRisksHi": [
          "पेट के अंदर की मुख्य नस फटने से भारी रक्तस्राव (1-3%), जिसके लिए तुरंत नस को बंद करने (Embolization) की जरूरत पड़ सकती है।",
          "आंत या पैंक्रियास से चमड़ी तक रिसाव का रास्ता (Fistula) बनना।",
          "इलाज में लम्बा समय लगना और कई हफ्तों तक नलियों की देखरेख की आवश्यकता।",
          "गंभीर संक्रमण बना रहना।"
      ],
      "alternativesEn": "Endoscopic transgastric necrosectomy (EUS-guided lumen-apposing metal stents), or open surgical necrosectomy with open abdomen packing.",
      "alternativesHi": "एंडोस्कोपी द्वारा आमाशय के रास्ते स्टेंट डालकर सफाई करना, अथवा पेट को पूरी तरह खोलकर सड़े मांस को बाहर निकालने का खुला ऑपरेशन।",
      "sedationTypeEn": "Conscious sedation with analgesia or General Anesthesia in the CT/Angio suite.",
      "sedationTypeHi": "गहन शामक व दर्द निवारक दवाइयां अथवा पूर्ण बेहोशी।"
  },
  "hydatid-cyst-pair-procedure": {
      "id": "hydatid-cyst-pair-procedure",
      "category": "Abscess & Fluid Drainage",
      "nameEn": "Hydatid Cyst of Liver: PAIR Procedure (Puncture, Aspiration, Injection, Re-Aspiration)",
      "nameHi": "लिवर हाइड्रैटिड सिस्ट पीएआईआर प्रक्रिया (PAIR - लिवर में कीड़े की पानी वाली थैली को सुई से सुखाना)",
      "indicationEn": "Symptomatic or uncomplicated hepatic hydatid cysts (Echinococcus granulosus, WHO type CE1 and CE3a) >= 5 cm in diameter refusing or unsuitable for surgery.",
      "indicationHi": "लिवर में कीड़े (डॉग टेपवर्म) के कारण पानी की बड़ी थैली (Hydatid Cyst) बनना, जिसके कारण पेट में भारीपन, दर्द या थैली के पेट में फटकर जानलेवा एलर्जी होने का खतरा हो।",
      "descriptionEn": "With anti-parasitic cover (Albendazole) and anti-allergic prophylaxis on board, under real-time ultrasound guidance, the cyst is punctured through normal liver parenchyma (transhepatic route). Clear hydatid fluid is aspirated. A scolicidal agent (20% hypertonic saline or 95% sterile ethanol) is injected and allowed to dwell for 15-20 minutes, killing the parasite. The fluid is completely re-aspirated.",
      "descriptionHi": "मरीज को पहले से कीड़े की दवा (Albendazole) और एलर्जी रोकने की दवाइयां दी जाती हैं। सोनोग्राफी में देखकर लिवर के सामान्य ऊतक के रास्ते से सुई सीधे थैली के अंदर डाली जाती है। पहले अंदर का सारा पानी खींचा जाता है। फिर कीड़े को मारने वाली विशेष दवा (हाइपरटॉनिक सेलाइन या अल्कोहल) अंदर डाली जाती है और 15 मिनट रखकर दोबारा पूरी दवा बाहर खींच ली जाती है।",
      "benefitsEn": [
          "Minimally invasive, scar-free cure of liver hydatid disease with >95% success rate.",
          "Significantly shorter hospital stay (1-2 days) compared to open surgical deroofing (7-10 days).",
          "Lower complication and recurrence rate than traditional surgical marsupialization."
      ],
      "benefitsHi": [
          "बिना कोई चीरा लगाए 95% से अधिक सफलता दर के साथ कीड़े की थैली का पूर्ण खात्मा।",
          "केवल 1 से 2 दिन में अस्पताल से छुट्टी (सर्जरी में 10 दिन लगते हैं)।",
          "बीमारी के दोबारा लौटने का खतरा न्यूनतम होना।"
      ],
      "specificRisksEn": [
          "Anaphylactic shock / severe allergic reaction secondary to spillage of hydatid fluid into peritoneal cavity (0.5-1%).",
          "Secondary peritoneal hydatidosis from cystic fluid extravasation.",
          "Chemical cholangitis if communication with the biliary tree is inadvertently present.",
          "Secondary bacterial infection of the collapsed cavity."
      ],
      "specificRisksHi": [
          "थैली का पानी पेट में रिसने से गंभीर जानलेवा एलर्जी या शॉक (Anaphylaxis - 0.5-1%)।",
          "पेट के अन्य अंगों में कीड़े के अंडे फैलने का जोखिम।",
          "यदि थैली पित्त की नली से जुड़ी हो तो पित्त नली में जलन होना।",
          "थैली में मवाद पड़ना।"
      ],
      "alternativesEn": "Open or laparoscopic cyst unroofing / perikystectomy (surgery), PEVAC procedure, or medical therapy alone with Albendazole.",
      "alternativesHi": "पेट चीरकर या दूरबीन द्वारा थैली को काटने का ऑपरेशन, अथवा केवल कीड़े की गोलियां खाना।",
      "sedationTypeEn": "Local infiltration anesthesia with IV conscious sedation, under continuous monitoring with emergency epinephrine and hydrocortisone ready.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं हल्की बेहोशी (एलर्जी रोधी जीवनरक्षक दवाइयों की पूरी तैयारी के साथ)।"
  },
  "hydatid-cyst-pevac-procedure": {
      "id": "hydatid-cyst-pevac-procedure",
      "category": "Abscess & Fluid Drainage",
      "nameEn": "Hydatid Cyst of Liver: PEVAC Procedure (Percutaneous Evacuation of Cyst Contents)",
      "nameHi": "लिवर हाइड्रैटिड सिस्ट पेवैक प्रक्रिया (PEVAC - बड़ी नली द्वारा कीड़े की थैली के जाले व छिलके बाहर खींचना)",
      "indicationEn": "Complex hydatid cysts with daughter cysts, internal detached membranes, or thick mucinous debris (WHO type CE2 and CE3b) not amenable to fine-needle PAIR.",
      "indicationHi": "लिवर में कीड़े की ऐसी जटिल थैली जिसमें अंदर कई छोटी-छोटी थैलियां (Daughter Cysts), छिलके और जाले भरे हों जिन्हें केवल पतली सुई से नहीं निकाला जा सकता।",
      "descriptionEn": "Under ultrasound and fluoroscopy, transhepatic access is established with a 14F-18F large-bore cannula. Using large-volume suction and rigid instruments, detached endocyst membranes, germinative layers, and daughter vesicles are evacuated completely. Scolicidal agent is instilled, and a drain is left for several days until output ceases.",
      "descriptionHi": "सोनोग्राफी से देखकर एक बड़ी नली (14-18F) सीधे थैली के अंदर डाली जाती है। सक्शन मशीन द्वारा थैली के अंदर मौजूद सभी छोटी थैलियों, छिलकों और जालों को खींचकर बाहर निकाल लिया जाता है। दवा डालकर सफाई की जाती है और कुछ दिनों के लिए एक नली छोड़ दी जाती है ताकि बचा हुआ पानी भी निकल जाए।",
      "benefitsEn": [
          "Enables non-surgical clearance of complex multi-vesicular hydatid cysts previously manageable only by open surgery.",
          "High cure rate with very low long-term recurrence.",
          "Preserves maximal healthy liver parenchyma."
      ],
      "benefitsHi": [
          "जटिल और बहु-परतीय थैलियों का भी बिना किसी बड़े ऑपरेशन के पूर्ण खात्मा।",
          "बीमारी के दोबारा न लौटने की उच्च सफलता दर।",
          "स्वस्थ लिवर को कोई नुकसान नहीं पहुंचता।"
      ],
      "specificRisksEn": [
          "Biliary leakage and persistent biloma or biliary fistula.",
          "Anaphylactic allergic reaction.",
          "Intra-abdominal spillage of cyst contents.",
          "Bleeding from liver tract."
      ],
      "specificRisksHi": [
          "पित्त का रिसाव होना जिसके कारण कुछ दिनों तक नली में पित्त आ सकता है।",
          "गंभीर एलर्जी की प्रतिक्रिया।",
          "पेट के अंदर तरल का रिसाव।",
          "लिवर से हल्का रक्तस्राव।"
      ],
      "alternativesEn": "Laparoscopic or open surgical cystectomy, or PAIR (if unilocular).",
      "alternativesHi": "पेट चीरकर थैली निकालने का ऑपरेशन।",
      "sedationTypeEn": "General Anesthesia or Deep Monitored Conscious Sedation.",
      "sedationTypeHi": "पूर्ण बेहोशी अथवा गहरी शामक दवा।"
  },
  "percutaneous-liver-abscess-drainage": {
      "id": "percutaneous-liver-abscess-drainage",
      "category": "Abscess & Fluid Drainage",
      "nameEn": "Percutaneous Drainage of Amebic / Pyogenic Liver Abscess with Locking Pigtail Catheter",
      "nameHi": "लिवर एब्सेस ड्रेनेज (लिवर में मवाद/फोड़े की नली द्वारा सफाई)",
      "indicationEn": "Large (>5 cm) amebic or pyogenic liver abscess, left lobe abscess threatening cardiac rupture, failure of medical antibiotic therapy after 48-72h, or impending rupture.",
      "indicationHi": "लिवर में 5 सेमी से बड़ा मवाद का फोड़ा (Liver Abscess), तेज बुखार, ठंड लगना, पेट के ऊपरी हिस्से में तेज दर्द, या जब फोड़ा फटने की कगार पर हो अथवा दवाओं से आराम न मिल रहा हो।",
      "descriptionEn": "Under ultrasound guidance, an 18G needle is inserted into the liquefactive center of the liver abscess through a rim of normal liver tissue. Pus is aspirated for culture. Over a 0.035-inch J-tip wire, the tract is dilated and an 8.5F-12F locking pigtail catheter is placed, thoroughly irrigated with sterile saline, and connected to gravity drainage.",
      "descriptionHi": "सोनोग्राफी में देखते हुए पेट के दाहिने हिस्से को सुन्न किया जाता है। एक बारीक सुई सीधे लिवर के फोड़े में डालकर मवाद का नमूना लिया जाता है। इसके बाद तार के सहारे एक विशेष घुमावदार नली (Pigtail Drain) फोड़े के अंदर स्थापित कर दी जाती है जो बाहर थैली में सारा मवाद निकाल देती है।",
      "benefitsEn": [
          "Immediate cure of severe hepatic sepsis in >95% of patients without open surgical drainage.",
          "Rapid defervescence (fever drops to normal within 24-48 hours) and pain relief.",
          "Prevents catastrophic intraperitoneal, pericardial, or pleural rupture."
      ],
      "benefitsHi": [
          "बिना कोई ऑपरेशन किए 95% से अधिक मरीजों में लिवर के मवाद का तुरंत पक्का इलाज।",
          "24 से 48 घंटे में तेज बुखार का सामान्य होना और असहनीय दर्द से तुरंत मुक्ति।",
          "फोड़े के फटने और जानलेवा खतरे से संपूर्ण बचाव।"
      ],
      "specificRisksEn": [
          "Intra-abdominal hemorrhage or subcapsular liver hematoma.",
          "Pneumothorax or empyema (if intercostal transpleural trajectory).",
          "Transient bacteremic shock during catheter insertion.",
          "Premature catheter blockage or dislodgement."
      ],
      "specificRisksHi": [
          "लिवर में अंदरूनी रक्तस्राव।",
          "पसलियों के बीच से नली डालने पर फेफड़े की थैली में हवा या मवाद जाना।",
          "मवाद हिलने से कुछ समय के लिए तेज कंपकंपी या बीपी कम होना।",
          "नली का बंद होना या बाहर खिसकना।"
      ],
      "alternativesEn": "Repeated needle aspiration alone, open surgical drainage through laparotomy, or conservative medical antibiotics alone (if abscess is < 3-5 cm).",
      "alternativesHi": "बार-बार केवल सुई से मवाद खींचना, पेट चीरकर ऑपरेशन, अथवा केवल एंटीबायोटिक गोलियां (छोटे फोड़े में)।",
      "sedationTypeEn": "Local infiltration anesthesia (1-2% Lignocaine) with IV analgesia.",
      "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) एवं नस द्वारा दर्द निवारक दवा।"
  },
  "fallopian-tube-recanalization-ftr": {
      "id": "fallopian-tube-recanalization-ftr",
      "category": "Non-Vascular Diagnostic & Interventional",
      "nameEn": "Fallopian Tube Recanalization (FTR) for Proximal Tubal Obstruction in Female Infertility",
      "nameHi": "फैलोपियन ट्यूब रीकैनेलाइजेशन (FTR - बच्चेदानी की बंद नसों को बिना ऑपरेशन तार द्वारा खोलना)",
      "indicationEn": "Infertility in women with documented unilateral or bilateral proximal fallopian tube obstruction on hysterosalpingography (HSG), wishing to conceive naturally.",
      "indicationHi": "महिलाओं में बांझपन (गर्भधारण न होना) जब जांच (HSG) में बच्चेदानी से जुड़ी डिम्बवाही नलियां (Fallopian Tubes) शुरुआत में बंद पाई जाएं और महिला प्राकृतिक रूप से गर्भधारण करना चाहती हो।",
      "descriptionEn": "With the patient in lithotomy position under fluoroscopy, a speculum and cervical cannula are placed. A 5F curved catheter is engaged in the uterine ostium of the fallopian tube. A selective microcatheter and 0.014-inch soft steerable micro-guidewire are gently advanced across the obstructing mucus plug or spasm into the distal ampulla, followed by injection of contrast confirming free peritoneal spill.",
      "descriptionHi": "एक्स-रे की लाइव निगरानी में नीचे के रास्ते से एक पतली नली बच्चेदानी के अंदर पहुंचाई जाती है। वहां से एक अति-सूक्ष्म तार (Micro-guidewire) को बंद पड़ी नली के मुहाने पर ले जाकर जमी हुई रुकावट (म्यूकस प्लग या जाले) को धीरे से धकेलकर खोल दिया जाता है। इसके बाद डाई डालकर देखा जाता है कि नली पूरी तरह खुल गई है और पानी पेट में बहने लगा है।",
      "benefitsEn": [
          "Achieves 85-90% immediate technical patency for proximal tubal obstructions without surgery.",
          "Enables natural spontaneous pregnancy rates of 25-40% within 12 months, avoiding expensive IVF/ICSI cycles.",
          "Minimally invasive 20-minute outpatient procedure under mild analgesia."
      ],
      "benefitsHi": [
          "बिना किसी चीर-फाड़ या ऑपरेशन के 85-90% मामलों में बंद नली का तुरंत खुल जाना।",
          "अगले 12 महीनों में प्राकृतिक रूप से गर्भ ठहरने की 25 से 40% संभावना, जिससे लाखों रुपये के टेस्ट ट्यूब बेबी (IVF) के खर्च से बचत होती है।",
          "केवल 20 मिनट में होने वाली आसान प्रक्रिया, उसी दिन घर वापसी।"
      ],
      "specificRisksEn": [
          "Tubal perforation from microcatheter manipulation (rare, <2%, typically heals spontaneously without sequelae).",
          "Transient mild pelvic cramping and light vaginal spotting for 24-48 hours.",
          "Pelvic inflammatory disease (PID) flare (<1%, prevented by prophylactic antibiotics).",
          "Re-occlusion of the tube over subsequent months."
      ],
      "specificRisksHi": [
          "नली में तार से बहुत छोटा सुराख होना (अत्यंत दुर्लभ, जो स्वतः ही बिना दवा के भर जाता है)।",
          "प्रक्रिया के बाद 1-2 दिन तक पेट के निचले हिस्से में हल्का दर्द या हल्का खून का धब्बा (Spotting) आना।",
          "पेल्विक इन्फेक्शन का दुर्लभ जोखिम (एंटीबायोटिक द्वारा बचाव किया जाता है)।",
          "भविष्य में नली का दोबारा बंद हो जाना।"
      ],
      "alternativesEn": "Laparoscopic tubal microsurgery / surgical re-implantation, In Vitro Fertilization (IVF / Test-Tube Baby), or adoption.",
      "alternativesHi": "दूरबीन द्वारा पेट का बड़ा ऑपरेशन (Laparoscopic Tubal Surgery) अथवा टेस्ट ट्यूब बेबी (IVF)।",
      "sedationTypeEn": "Paracervical local block or oral/IV analgesia (NSAIDs + mild conscious sedation).",
      "sedationTypeHi": "गर्भाशय के मुहाने पर सुन्न करने का इंजेक्शन अथवा दर्द निवारक दवाइयां।"
  },
  "fluoroscopic-esophageal-stricture-dilation": {
      "id": "fluoroscopic-esophageal-stricture-dilation",
      "category": "Enteric & Gastrointestinal Interventions",
      "nameEn": "Fluoroscopically Guided Balloon Dilation of Benign Esophageal Stricture",
      "nameHi": "भोजन की नली की सिकुड़न की बैलून डाइलेशन (गुब्बारे द्वारा भोजन की सिकुड़ी नली को चौड़ा करना)",
      "indicationEn": "Severe dysphagia (inability to swallow solid foods or liquids) secondary to benign esophageal stricture (post-caustic ingestion, post-surgical anastomotic, radiation-induced, or peptic stricture).",
      "indicationHi": "भोजन की नली का सिकुड़ जाना (तेजाब/केमिकल पीने के बाद, ऑपरेशन के बाद या रेडिएशन के कारण), जिसके कारण खाना या पानी तक निगलने में भयंकर तकलीफ और छाती में दर्द होना।",
      "descriptionEn": "Under fluoroscopic guidance, a soft hydrophilic guidewire crosses the tight esophageal stricture into the stomach. A graduated radial expansion esophageal balloon (e.g. 10-12-14 mm or 15-18 mm) is positioned across the stricture under contrast monitoring. The balloon is slowly inflated to nominal pressure, effacing the waist for 60-120 seconds.",
      "descriptionHi": "एक्स-रे की निगरानी में मुंह के रास्ते से एक बारीक तार भोजन की नली की रुकावट को पार करते हुए पेट में ले जाया जाता है। उस सिकुड़न के बीच में एक विशेष मजबूत गुब्बारा रखकर उसमें डाई भरकर फुलाया जाता है। गुब्बारा सिकुड़ी हुई नली को फैलाकर चौड़ा कर देता है जिससे मरीज तुरंत आसानी से खाना-पीना निगल पाता है।",
      "benefitsEn": [
          "Immediate, dramatic relief of dysphagia, allowing resumption of soft and solid oral feeding.",
          "Fluoroscopic visualization ensures exact longitudinal balloon positioning, minimizing shear stress.",
          "Outpatient day-care procedure avoiding major surgical esophageal resection."
      ],
      "benefitsHi": [
          "खाना निगलने की तकलीफ से तुरंत मुक्ति, मरीज उसी दिन से खाना खाने में सक्षम हो जाता है।",
          "एक्स-रे में देखकर करने से नली के फटने का खतरा बहुत कम होता है।",
          "भोजन की नली को काटने के बड़े ऑपरेशन से बचाव।"
      ],
      "specificRisksEn": [
          "Esophageal perforation (1-2%, major complication requiring covered stent placement, surgical repair, or ICU management).",
          "Chest pain and transient odynophagia for 24-48 hours.",
          "Intra-luminal bleeding or mucosal laceration.",
          "Recurrence of stricture requiring repeated serial dilation sessions."
      ],
      "specificRisksHi": [
          "भोजन की नली की दीवार में दरार या छेद होना (1-2%), जिसके लिए तुरंत आपातकालीन कवर्ड स्टेंट लगाने या ऑपरेशन की आवश्यकता हो सकती है।",
          "प्रक्रिया के बाद 1-2 दिन तक सीने में हल्का दर्द या भारीपन।",
          "अंदरूनी परत छिलने से हल्का खून आना।",
          "सिकुड़न का दोबारा होना जिसके लिए कुछ हफ्तों बाद दोबारा गुब्बारा फुलाने की जरूरत पड़ सकती है।"
      ],
      "alternativesEn": "Endoscopic Savary-Gilliard wire-guided bougie dilation, esophageal covered metallic stenting, or surgical esophageal resection / gastric pull-up.",
      "alternativesHi": "दूरबीन द्वारा प्लास्टिक की सलाई से नली फैलाना, भोजन की नली में स्टेंट लगाना, या भोजन की नली को काटकर निकालने का बड़ा ऑपरेशन।",
      "sedationTypeEn": "Topical pharyngeal lignocaine spray with IV conscious sedation (Midazolam / Fentanyl).",
      "sedationTypeHi": "गले में सुन्न करने वाला स्प्रे तथा नस द्वारा हल्की बेहोशी व दर्द निवारक दवा।"
  },
  "percutaneous-retrieval-embolized-port-fragment": {
      "id": "percutaneous-retrieval-embolized-port-fragment",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "nameEn": "Endovascular / Percutaneous Retrieval of Embolized Central Line / Port Fragments Using Goose-Neck Snare",
      "nameHi": "दिल या नसों में टूटी हुई नली/कीमोपोर्ट को बाहर निकालना (जांघ के रास्ते फंदा डालकर टूटे कैथेटर को खींचना)",
      "indicationEn": "Spontaneous or iatrogenic fracture and intravascular embolization of a central venous catheter, PICC line, or chemoport catheter fragment lodged in the SVC, right atrium, right ventricle, or pulmonary artery.",
      "indicationHi": "कीमोथेरेपी का पोर्ट (Chemoport) या गले की नली (Central Line) टूटकर दिल या फेफड़े की मुख्य नस में बह जाना, जिससे दिल की धड़कन रुकने, दिल की दीवार में छेद होने या फेफड़े बंद होने का अत्यंत गंभीर जानलेवा खतरा हो।",
      "descriptionEn": "Under local anesthesia, common femoral vein access is obtained. Under continuous high-frame-rate fluoroscopy, a guiding catheter directs an Amplatz Goose-Neck loop snare (10-25 mm) or multi-loop snare to engage the free end of the fractured catheter fragment. Once lassoed, the snare is tightened and the fragment is pulled through the vascular sheath out of the body.",
      "descriptionHi": "जांघ की नस से सुन्न करके एक बारीक नली दिल की तरफ ले जाई जाती है। एक्स-रे की निगरानी में एक विशेष तार का फंदा (Goose-Neck Snare) टूटी हुई नली के सिरे के चारों ओर फंसाया जाता है। फंदे को कसकर टूटी हुई नली को जांघ की नली के अंदर खींच लिया जाता है और शरीर से बाहर निकाल लिया जाता है।",
      "benefitsEn": [
          ">98% technical success rate in safely removing foreign bodies from the heart and pulmonary arteries.",
          "Avoids emergency open-heart surgery (cardiopulmonary bypass sternotomy) to extract the foreign body.",
          "Painless, rapid procedure performed under local anesthesia in < 30 minutes."
      ],
      "benefitsHi": [
          "दिल और फेफड़ों से टूटे हुए टुकड़ों को 98% से अधिक सफलता से बिना किसी चीरे के बाहर निकालना।",
          "दिल को चीरकर टुकड़ा निकालने के महा-ऑपरेशन (Open Heart Surgery) से संपूर्ण बचाव।",
          "केवल 20-30 मिनट में जांघ की नस से सुरक्षित समाधान।"
      ],
      "specificRisksEn": [
          "Transient cardiac arrhythmias (premature ventricular contractions, VT) during intracardiac manipulation.",
          "Vascular intimal tear or cardiac valve entwinement/injury.",
          "Fragmentation of the foreign body into smaller distal pulmonary branches.",
          "Groin access site hematoma."
      ],
      "specificRisksHi": [
          "दिल के अंदर तार चलने के दौरान धड़कन का अचानक तेज या अनियमित होना।",
          "दिल के वाल्व में तार के उलझने का जोखिम।",
          "टूटे हुए टुकड़े का और छोटे टुकड़ों में विभाजित होकर गहराई में चले जाना।",
          "जांघ में सुई के स्थान पर खून का जमाव।"
      ],
      "alternativesEn": "Emergency open thoracotomy / median sternotomy under cardiopulmonary bypass, or conservative observation (carries high mortality from endocarditis, cardiac perforation, and fatal pulmonary thrombosis).",
      "alternativesHi": "छाती खोलकर ओपन हार्ट सर्जरी, अथवा शरीर में छोड़ देना (जो कभी भी दिल की दीवार छेदकर मौत का कारण बन सकता है)।",
      "sedationTypeEn": "Local infiltration anesthesia with light conscious sedation.",
      "sedationTypeHi": "जांघ पर स्थानीय सुन्नता एवं हल्की शामक दवा।"
  },
  "retroperitoneal-pelvic-hematoma-drainage": {
      "id": "retroperitoneal-pelvic-hematoma-drainage",
      "category": "Abscess & Fluid Drainage",
      "nameEn": "Retroperitoneal / Pelvic Hematoma Percutaneous Evacuation and Drainage",
      "nameHi": "पेट के पीछे जमे खून के थक्के (हेमेटोमा) की ड्रेनेज (नली डालकर पेट के अंदरूनी खून को बाहर निकालना)",
      "indicationEn": "Large, symptomatic, or infected retroperitoneal or pelvic hematoma (post-traumatic, post-surgical, or anticoagulant-induced) causing femoral nerve compression, severe pain, or secondary infection.",
      "indicationHi": "ऑपरेशन, चोट या खून पतला करने की दवाओं के कारण पेट या पेडू के पीछे खून का भारी जमाव (Hematoma) होना, जिसके कारण पैर की नसों पर दबाव, पैर में कमजोरी, तेज दर्द या उस खून में मवाद पड़ने का खतरा हो।",
      "descriptionEn": "Under CT or ultrasound guidance, a safe percutaneous extraperitoneal window is identified. An 18G needle enters the fluid collection. Following aspiration of liquefied blood, an 8.5F-12F large-bore drainage catheter is placed over a stiff wire, allowing gradual evacuation of the organized hematoma.",
      "descriptionHi": "सीटी स्कैन में देखकर पेट के अंदरूनी अंगों को बचाते हुए खून के थक्के के अंदर एक सुई डाली जाती है। तार डालकर एक ड्रेनेज नली अंदर स्थापित कर दी जाती है जो जमे हुए खून को धीरे-धीरे बाहर निकाल देती है जिससे नसों पर पड़ा दबाव खत्म हो जाता है।",
      "benefitsEn": [
          "Rapidly decompresses neural structures, relieving severe neuropathic femoral/sciatic pain and motor weakness.",
          "Evacuates culture medium, preventing catastrophic secondary abscess formation.",
          "Minimally invasive percutaneous alternative to open retroperitoneal exploration."
      ],
      "benefitsHi": [
          "दबी हुई नसों का दबाव तुरंत खत्म करके पैर के दर्द और लकवे के खतरे को टालना।",
          "जमे हुए खून में मवाद पड़ने और सेप्सिस होने से बचाव।",
          "बिना कोई बड़ा चीरा लगाए अंदरूनी खून की सुरक्षित निकासी।"
      ],
      "specificRisksEn": [
          "Re-bleeding into the evacuated cavity.",
          "Secondary bacterial infection of the sterile hematoma via the catheter tract.",
          "Inadvertent bowel, bladder, or vessel injury.",
          "Premature catheter occlusion by dense fibrin clots."
      ],
      "specificRisksHi": [
          "नली डालने के बाद अंदर दोबारा नया रक्तस्राव शुरू होना।",
          "नली के रास्ते से बाहर से कीटाणु अंदर जाकर इन्फेक्शन होना।",
          "आंत या पेशाब की थैली में चोट।",
          "खून के थक्कों से नली का बंद होना।"
      ],
      "alternativesEn": "Conservative watchful waiting with blood transfusion and analgesics, or open surgical hematoma evacuation.",
      "alternativesHi": "केवल दवाइयों द्वारा खून के सूखने का महीनों तक इंतजार करना, या पेट का बड़ा ऑपरेशन।",
      "sedationTypeEn": "Local infiltration anesthesia with IV analgesia and conscious sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं नस द्वारा दर्द निवारक व शामक दवा।"
  },
  "page-kidney-subcapsular-hematoma-decompression": {
      "id": "page-kidney-subcapsular-hematoma-decompression",
      "category": "Abscess & Fluid Drainage",
      "nameEn": "Subcapsular Renal Hematoma (Page Kidney) Percutaneous Decompression",
      "nameHi": "पेज किडनी सबकैप्सुलर हेमेटोमा ड्रेनेज (गुर्दे की झिल्ली में जमे खून को निकालकर गुर्दे को पिचकने से बचाना)",
      "indicationEn": "Acute or subacute subcapsular renal hematoma (following biopsy, trauma, or lithotripsy) compressing the renal parenchyma, inducing severe renin-mediated refractory malignant hypertension and renal failure (Page kidney phenomenon).",
      "indicationHi": "गुर्दे की बायोप्सी, चोट या पथरी के इलाज के बाद गुर्दे की बाहरी झिल्ली के नीचे खून जमा हो जाना, जिससे पूरा गुर्दा दबकर पिचकने लगे, अनियंत्रित और जानलेवा ब्लड प्रेशर बढ़ जाए और गुर्दा काम करना बंद कर दे (Page Kidney)।",
      "descriptionEn": "Under real-time ultrasound and CT guidance, an 18G needle is carefully directed into the subcapsular space without transgressing the deep renal parenchyma. Subcapsular blood is aspirated, followed by insertion of an 8F-10F pigtail drain over a wire to decompress the compressed kidney.",
      "descriptionHi": "सोनोग्राफी और सीटी स्कैन की निगरानी में गुर्दे की मुख्य नस और मांस को बचाते हुए झिल्ली के नीचे जमे हुए खून में सुई डाली जाती है। सारा खून खींचकर एक पतली नली छोड़ दी जाती है जिससे गुर्दे पर पड़ा दबाव तुरंत हट जाता है।",
      "benefitsEn": [
          "Immediately relieves parenchymal ischemia and stops hyperreninemia, normalizing refractory malignant blood pressure.",
          "Rescues renal filtration and prevents permanent nephron loss.",
          "Avoids surgical capsulotomy or emergency nephrectomy."
      ],
      "benefitsHi": [
          "गुर्दे पर पड़ा दबाव हटते ही जानलेवा ब्लड प्रेशर तुरंत सामान्य होना।",
          "गुर्दे को हमेशा के लिए सूखने और खराब होने से बचाना।",
          "गुर्दे को काटकर बाहर निकालने के भयानक ऑपरेशन से मुक्ति।"
      ],
      "specificRisksEn": [
          "Laceration of the renal cortex causing new active hemorrhage.",
          "Catheter clogging from thick coagulum.",
          "Pneumothorax if high intercostal approach.",
          "Infection of the subcapsular space."
      ],
      "specificRisksHi": [
          "गुर्दे की सतह छिलने से दोबारा रक्तस्राव का जोखिम।",
          "थक्के से नली का बंद होना।",
          "फेफड़े में हवा भरना।",
          "गुर्दे में इन्फेक्शन।"
      ],
      "alternativesEn": "Open surgical subcapsular evacuation / capsulotomy, nephrectomy (kidney removal), or multiple high-dose antihypertensive medications.",
      "alternativesHi": "चीरा लगाकर गुर्दे का ऑपरेशन या गुर्दा निकालना, अथवा भारी मात्रा में बीपी की दवाएं देना।",
      "sedationTypeEn": "Local infiltration anesthesia with IV analgesia.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं नस द्वारा दर्द निवारक।"
  },
  "thoracic-duct-embolization": {
      "id": "thoracic-duct-embolization",
      "category": "Lymphatic & Thoracic Interventions",
      "nameEn": "Thoracic Duct Embolization (TDE): Transabdominal Cisterna Chyli Puncture & Coil / Glue Occlusion",
      "nameHi": "थोरेसिक डक्ट एम्बोलाइजेशन (TDE - छाती में दूधिया पानी/काइल रिसने पर मुख्य लसिका नली को छल्लों व गोंद से बंद करना)",
      "indicationEn": "High-output or refractory chylothorax (>500-1000 mL/day of chyle) following thoracic, esophageal, or cardiac surgery, lymphoma, or trauma, unresponsive to conservative NPO, medium-chain triglyceride (MCT) diet, or octreotide therapy.",
      "indicationHi": "छाती, दिल या भोजन की नली के ऑपरेशन अथवा चोट के बाद छाती के फेफड़ों में रोजाना भारी मात्रा में दूधिया तरल (Chylothorax / काइल) रिसकर जमा होना, जिससे सांस फूलना, कुपोषण और जान का खतरा हो और जो दवाओं व खानपान से ठीक न हो रहा हो।",
      "descriptionEn": "Following ultrasound-guided intranodal lymphangiography with Lipiodol to opacify the retroperitoneal lymphatic system, the cisterna chyli or a major abdominal lymphatic duct is punctured percutaneously using a 21G/22G Chiba needle under fluoroscopy. A 0.014-inch micro-guidewire and microcatheter are steered into the thoracic duct past the leak. Embolization is achieved using microcoils followed by n-BCA cyanoacrylate glue or Onyx.",
      "descriptionHi": "जांघ की लसिका ग्रंथि में विशेष तेल (Lipiodol) डालकर एक्स-रे में पेट की लसिका थैली (Cisterna Chyli) को देखा जाता है। पेट की चमड़ी के रास्ते से एक अत्यंत बारीक सुई सीधे इस लसिका नली में डाली जाती है। एक अति-सूक्ष्म कैथेटर छाती की नली में रिसाव की जगह तक पहुंचाया जाता है और वहां सूक्ष्म धातु के छल्ले (Microcoils) और मेडिकल गोंद (Glue) भरकर रिसाव वाली नली को हमेशा के लिए सील कर दिया जाता है।",
      "benefitsEn": [
          "Achieves >85-90% clinical resolution of life-threatening chylothorax without invasive re-thoracotomy.",
          "Stops severe protein, lymphocyte, and lipid depletion, restoring nutritional and immunological stability.",
          "Minimally invasive percutaneous outpatient/short-stay cure."
      ],
      "benefitsHi": [
          "85 से 90% से अधिक मरीजों में बिना दोबारा छाती खोले जानलेवा दूधिया पानी के रिसाव का तुरंत स्थायी इलाज।",
          "शरीर से प्रोटीन, रोग प्रतिरोधक कोशिकाओं और पोषक तत्वों का बहना तुरंत बंद होना।",
          "मरीज की जान बचाना और छाती के बड़े ऑपरेशन से पूर्ण मुक्ति।"
      ],
      "specificRisksEn": [
          "Non-target glue embolization into the pulmonary arterial circulation via lymphovenous communications.",
          "Chronic lower extremity or genital lymphedema secondary to central lymphatic occlusion (<5%).",
          "Retroperitoneal or mesenteric hematoma from transabdominal needle passes.",
          "Temporary abdominal pain or diarrhea."
      ],
      "specificRisksHi": [
          "गोंद का लसिका नली से बहकर फेफड़े की नस में चले जाने का जोखिम।",
          "लसिका नली बंद होने के बाद पैरों या अंडकोश में हल्का पानी भरने (Lymphedema) की संभावना (<5%)।",
          "पेट के अंदर सुई लगने से हल्का रक्तस्राव।",
          "कुछ दिनों तक पेट दर्द या दस्त।"
      ],
      "alternativesEn": "Open or video-assisted thoracoscopic (VATS) thoracic duct surgical ligation under general anesthesia, pleurodesis, or supportive conservative chest tube drainage with TPN.",
      "alternativesHi": "छाती खोलकर या दूरबीन द्वारा थोरेसिक डक्ट को धागे से बांधने का बड़ा ऑपरेशन (Thoracotomy/VATS Ligation), फेफड़ों की परतों को चिपकाना, या महीनों नसों से पोषण।",
      "sedationTypeEn": "General Anesthesia or Deep Conscious Sedation with local abdominal wall infiltration.",
      "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा गहरी बेहोशी व पेट पर स्थानीय सुन्नता।"
  },
  "thoracic-duct-disruption": {
      "id": "thoracic-duct-disruption",
      "category": "Lymphatic & Thoracic Interventions",
      "nameEn": "Thoracic Duct Disruption / Maceration for Intractable Postoperative Chylothorax",
      "nameHi": "थोरेसिक डक्ट डिसरप्शन (जब नली में कैथेटर न जा सके तब सुई से लसिका नली को काटकर रिसाव रोकना)",
      "indicationEn": "Persistent refractory chylothorax where the cisterna chyli or thoracic duct cannot be selectively catheterized due to anatomical branching, hypoplasia, or severe tortuosity.",
      "indicationHi": "छाती में दूधिया पानी का भारी रिसाव लेकिन लसिका नली इतनी बारीक या टेढ़ी हो कि उसमें कैथेटर नली डालना संभव न हो रहा हो।",
      "descriptionEn": "Under fluoroscopy following nodal opacification, multiple crossing punctures with a 20G-22G Chiba needle are made through the retroperitoneal lymphatic duct network and cisterna chyli, mechanically disrupting and lacerating the lymphatic channel with needle sweeps to induce localized retroperitoneal thrombosis and seal the upstream flow.",
      "descriptionHi": "एक्स-रे में देखकर पेट की लसिका नली के चारों ओर कई बारीक सुइयों से उस नली को बीच में से काट और तोड़ (Disrupt) दिया जाता है। इससे वहां एक थक्का जम जाता है और छाती की तरफ जाने वाला दूधिया तरल रुक जाता है।",
      "benefitsEn": [
          "Rescue salvage technique when conventional duct catheterization fails (70-75% success rate).",
          "Completely percutaneous without surgical thoracotomy.",
          "Rapidly reduces chest tube drainage volume."
      ],
      "benefitsHi": [
          "कैथेटर न जा पाने की स्थिति में भी 70-75% मरीजों में रिसाव रोकने का कारगर उपाय।",
          "बिना कोई चीरा लगाए केवल सुई की मदद से समाधान।",
          "छाती की नली से पानी का आना तेजी से कम होना।"
      ],
      "specificRisksEn": [
          "Aortic, mesenteric artery, or IVC inadvertent puncture (usually self-limiting with fine needles).",
          "Transient retroperitoneal lymphocele.",
          "Failure to completely resolve chylothorax requiring surgery.",
          "Abdominal discomfort."
      ],
      "specificRisksHi": [
          "पास की मुख्य धमनी या नस में सुई लगना (बारीक सुई होने से स्वतः बंद हो जाता है)।",
          "पेट के पीछे लसिका की छोटी थैली बनना।",
          "रिसाव पूरी तरह न रुकने पर सर्जरी की आवश्यकता होना।",
          "पेट में हल्का दर्द।"
      ],
      "alternativesEn": "Open surgical thoracic duct ligation, talc pleurodesis, or conservative management.",
      "alternativesHi": "छाती चीरकर ऑपरेशन, फेफड़े की थैली में पाउडर डालना, या नसों से पोषण।",
      "sedationTypeEn": "Conscious sedation with local anesthesia.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं नस द्वारा शामक/दर्द निवारक।"
  },
  "retrograde-td-cannulation": {
      "id": "retrograde-td-cannulation",
      "category": "Lymphatic & Thoracic Interventions",
      "nameEn": "Retrograde Transvenous Thoracic Duct Cannulation via Left Internal Jugular / Subclavian Angle",
      "nameHi": "रेट्रोग्रेड ट्रांसवेनस थोरेसिक डक्ट कैनुलेशन (गर्दन की नस के रास्ते उल्टी दिशा में लसिका नली में जाकर इलाज करना)",
      "indicationEn": "Chylothorax, chylopericardium, or chylous ascites where transabdominal cisterna chyli access is impossible (e.g. absent cisterna chyli or severe abdominal scarring).",
      "indicationHi": "छाती या पेट में दूधिया पानी का रिसाव, जहां पेट के रास्ते से लसिका नली में जाना नामुमकिन हो, और गर्दन की नस के मुहाने से उल्टी दिशा में नली में उतरना पड़े।",
      "descriptionEn": "Via left brachial or internal jugular access, a microcatheter system is navigated under high-resolution fluoroscopy to the venous angle (junction of left internal jugular and subclavian veins). The thoracic duct ostium and its competent bicuspid valve are gently engaged with a 0.014-inch soft polymer wire, allowing retrograde contrast injection and distal coil/glue embolization.",
      "descriptionHi": "गर्दन या हाथ की नस से एक अति-सूक्ष्म माइक्रो-कैथेटर बाईं गर्दन की नस के मोड़ तक ले जाया जाता है। वहां जहां लसिका नली खून की नस में मिलती है, उस वाल्व के अंदर से उल्टा तार डालकर लसिका नली के अंदर पहुंचा जाता है और रिसाव वाली जगह को छल्लों व दवा से बंद कर दिया जाता है।",
      "benefitsEn": [
          "Eliminates transabdominal puncture through bowel and organs.",
          "Direct endoluminal route into the cervical and mediastinal thoracic duct.",
          "Successful in cases with absent abdominal cisterna chyli."
      ],
      "benefitsHi": [
          "पेट के किसी भी अंग को बिना छुए सीधे गर्दन के रास्ते इलाज।",
          "छाती की नली तक पहुंचने का सीधा और सुरक्षित रास्ता।",
          "पेट का रास्ता बंद होने पर भी सफल।"
      ],
      "specificRisksEn": [
          "Thoracic duct valve damage or ostial dissection preventing cannulation.",
          "Non-target embolization into internal jugular or subclavian vein.",
          "Left neck hematoma.",
          "Pneumothorax."
      ],
      "specificRisksHi": [
          "लसिका नली के मुहाने के छिलने से कैथेटर का अंदर न जा पाना।",
          "दवा का खून की मुख्य नस में चले जाना।",
          "गर्दन में खून जमना।",
          "फेफड़े में हवा भरना।"
      ],
      "alternativesEn": "Transabdominal antegrade embolization, surgical duct ligation, or pleurodesis.",
      "alternativesHi": "पेट के रास्ते इलाज, छाती खोलकर ऑपरेशन, या फेफड़े चिपकाना।",
      "sedationTypeEn": "Local anesthesia with IV conscious sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं नस द्वारा शामक दवा।"
  },
  "intranodal-lymphangiography": {
      "id": "intranodal-lymphangiography",
      "category": "Lymphatic & Thoracic Interventions",
      "nameEn": "Intranodal Lymphangiography: Ultrasound-Guided Inguinal Lymph Node Micro-Puncture & Lipiodol Infusion",
      "nameHi": "इंट्रानोडल लिम्फैन्जियोग्राफी (जांघ की गिल्टी में सुई डालकर विशेष तेल द्वारा लसिका नसों का एक्स-रे मैप बनाना)",
      "indicationEn": "Diagnostic localization and therapeutic treatment of suspected chylothorax, chylous ascites, plastic bronchitis, or post-surgical lymphatic leaks.",
      "indicationHi": "छाती या पेट में दूधिया पानी के रिसाव (Chylothorax / Chylous Ascites) की सटीक जगह का पता लगाना, अथवा ऑपरेशन के बाद लसिका के रिसाव को केवल इस विशेष तेल से ही बंद करना।",
      "descriptionEn": "Under high-resolution ultrasound guidance, a 25G-27G butterfly needle is positioned precisely into the transitional medulla/cortex of a bilateral superficial inguinal lymph node. Water-insoluble iodized oil (Lipiodol Ultra-Fluid, 6-12 mL) is slowly infused at 0.1-0.2 mL/min using a dedicated syringe pump. Fluoroscopy tracks the ascending lymphatic columns up through the cisterna chyli into the thoracic duct.",
      "descriptionHi": "सोनोग्राफी में देखकर दोनों जांघों की लसिका ग्रंथियों (Inguinal Lymph Nodes) में अत्यंत बारीक सुई लगाई जाती है। एक विशेष मशीन द्वारा आयोडीनयुक्त तेल (Lipiodol) बहुत धीमी गति से ग्रंथियों में छोड़ा जाता है। यह तेल लसिका नसों में बहते हुए ऊपर पेट और छाती तक जाता है और एक्स-रे पर रिसाव की जगह को पूरी तरह स्पष्ट दिखा देता है। अक्सर यह तेल स्वयं ही छोटे रिसावों को बंद भी कर देता है।",
      "benefitsEn": [
          "Replaces the archaic, painful foot pedal cutdown lymphangiography with a 5-minute painless nodal puncture.",
          "High therapeutic closure rate: Lipiodol's inflammatory/sclerotic properties spontaneously seal up to 50-70% of low-output leaks without further embolization.",
          "Crucial roadmap prerequisite for subsequent thoracic duct embolization."
      ],
      "benefitsHi": [
          "पुराने दर्दनाक ऑपरेशन की तुलना में केवल 5 मिनट में सुई से होने वाली आधुनिक और सुरक्षित जांच।",
          "50 से 70% मरीजों में यह तेल अपने आप ही सूजन पैदा करके रिसाव को बंद कर देता है, किसी अतिरिक्त ऑपरेशन की जरूरत नहीं पड़ती।",
          "छाती की नली को बंद करने के लिए सटीक नक्शा तैयार होना।"
      ],
      "specificRisksEn": [
          "Pulmonary oil micro-embolization (dyspnea, transient hypoxia if total dose exceeds 0.25 mL/kg).",
          "Cerebral or systemic oil embolization in the presence of right-to-left intracardiac shunts.",
          "Local node capsular extravasation and transient groin discomfort.",
          "Allergic reaction to iodinated oil."
      ],
      "specificRisksHi": [
          "तेल के बारीक कणों के फेफड़े में जाने से हल्की सांस फूलना (यदि अधिक मात्रा दी जाए)।",
          "दिल में छेद होने पर तेल का दिमाग में चले जाने का अत्यंत दुर्लभ खतरा।",
          "जांघ की गिल्टी में हल्का दर्द या तेल का बाहर रिसना।",
          "आयोडीन से एलर्जी।"
      ],
      "alternativesEn": "MR lymphangiography with subcutaneous gadolinium, non-contrast T2-weighted lymphangiography, or surgical re-exploration.",
      "alternativesHi": "एमआरआई (MRI Lymphangiography) या सीधे चीरा लगाकर ऑपरेशन।",
      "sedationTypeEn": "Local skin anesthesia with 1% Lignocaine.",
      "sedationTypeHi": "जांघ की चमड़ी पर स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "lymphocele-drainage-sclerotherapy": {
      "id": "lymphocele-drainage-sclerotherapy",
      "category": "Lymphatic & Thoracic Interventions",
      "nameEn": "Postoperative Lymphocele Percutaneous Drainage & Sclerosant Instillation (Bleomycin / Doxycycline)",
      "nameHi": "लिम्फोसील ड्रेनेज एवं स्क्लेरोथेरेपी (ऑपरेशन के बाद पेट में लसिका के पानी की थैली में नली डालना व दवा से चिपकाना)",
      "indicationEn": "Symptomatic pelvic or retroperitoneal lymphocele following pelvic lymphadenectomy, radical prostatectomy, or renal transplantation causing ureteral hydronephrosis, deep venous thrombosis from iliac compression, or infection.",
      "indicationHi": "किडनी ट्रांसप्लांट, प्रोस्टेट या गर्भाशय के कैंसर के ऑपरेशन के बाद पेट या पेडू में लसिका के पानी की बड़ी थैली (Lymphocele) बन जाना, जिससे पेशाब की नली दबना, पैर की नस दबकर पैर में सूजन आना, या उसमें मवाद पड़ना।",
      "descriptionEn": "Under ultrasound or CT guidance, an 8F-10F locking pigtail catheter is placed into the center of the lymphocele, evacuating all fluid. After complete drainage, a sclerosing agent (Bleomycin 15-30 IU, Doxycycline 500 mg, or 95% sterile ethanol) is instilled, allowed to dwell for 1-2 hours while repositioning the patient, and then drained to induce chemical pleurodesis/adhesion of the cavity walls.",
      "descriptionHi": "सोनोग्राफी या सीटी स्कैन में देखकर पानी की थैली में एक बारीक नली डाली जाती है और सारा पानी बाहर निकाल लिया जाता है। इसके बाद नली के रास्ते से थैली की दीवारों को चिपकाने वाली विशेष दवा (Doxycycline या Bleomycin) अंदर डाली जाती है और 1-2 घंटे रखकर निकाल ली जाती है। इससे थैली की अंदरूनी परत आपस में चिपक जाती है और दोबारा पानी नहीं भरता।",
      "benefitsEn": [
          ">85-90% success rate in permanently obliterating symptomatic lymphoceles.",
          "Immediately relieves compression on the transplanted kidney, ureter, and iliac veins.",
          "Avoids open surgical or laparoscopic peritoneal fenestration/marsupialization."
      ],
      "benefitsHi": [
          "85-90% से अधिक मरीजों में बिना ऑपरेशन पानी की थैली का हमेशा के लिए खात्मा।",
          "ट्रांसप्लांट वाली नई किडनी और पेशाब की नली पर पड़ा दबाव तुरंत खत्म होकर किडनी की रक्षा।",
          "पेट के बड़े ऑपरेशन या दूरबीन द्वारा खिड़की बनाने (Fenestration) से बचाव।"
      ],
      "specificRisksEn": [
          "Severe burning pelvic pain or cramping during sclerosant instillation.",
          "Secondary bacterial infection of the sterile cavity turning it into an abscess.",
          "Inadvertent leak of sclerosant into the peritoneal cavity causing chemical peritonitis.",
          "Recurrence requiring repeat sclerotherapy sessions."
      ],
      "specificRisksHi": [
          "दवा डालते समय पेडू में तेज जलन या दर्द होना (दर्द निवारक दवाओं से ठीक हो जाता है)।",
          "नली के रास्ते बाहर से कीटाणु जाकर थैली में मवाद पड़ना।",
          "दवा का पेट के अंदर रिसने पर पेट में जलन होना।",
          "थैली का दोबारा भरना जिसके लिए दोबारा दवा डालने की जरूरत हो सकती है।"
      ],
      "alternativesEn": "Laparoscopic peritoneal fenestration (marsupialization into the peritoneal cavity), open surgical drainage, or simple needle aspiration alone (carries >80% recurrence).",
      "alternativesHi": "दूरबीन द्वारा पेट में खिड़की बनाकर पानी को पेट में बहाना, बड़ा ऑपरेशन, या केवल सुई से पानी निकालना (जिसमें 80% दोबारा पानी भर जाता है)।",
      "sedationTypeEn": "Local infiltration anesthesia with IV analgesia during sclerosant dwell.",
      "sedationTypeHi": "स्थानीय सुन्नता एवं दवा डालते समय नस द्वारा दर्द निवारक दवा।"
  },
  "image-guided-core-needle-biopsy": {
      "id": "image-guided-core-needle-biopsy",
      "category": "Non-Vascular Diagnostic & Interventional",
      "nameEn": "Image-Guided Percutaneous Core Needle Biopsy (Liver, Kidney, Lung, Retroperitoneum, Soft Tissue)",
      "nameHi": "इमेज-निर्देशित कोर नीडल बायोप्सी (सोनोग्राफी/सीटी स्कैन द्वारा गांठ, लिवर, किडनी या फेफड़े से जांच हेतु मांस का टुकड़ा निकालना)",
      "indicationEn": "Definitive histopathological, immunohistochemical, and molecular/genetic tissue diagnosis of indeterminate masses, solid tumors, parenchymal renal/liver disease, or suspected recurrence.",
      "indicationHi": "शरीर के किसी भी अंग (लिवर, गुर्दे, फेफड़े, पेट की गांठ या मांसपेशियों) में बनी संदिग्ध गांठ, रसौली या कैंसर की सटीक जांच हेतु बिना चीरे के सुई द्वारा मांस का बारीक टुकड़ा (Core Biopsy) निकालना ताकि सही दवा और कीमोथेरेपी तय हो सके।",
      "descriptionEn": "Under real-time ultrasound, CT, or cone-beam CT guidance, a coaxial biopsy introducer system is accurately steered into the target lesion, meticulously avoiding critical vascular and neural structures. Multiple automated or semi-automated core biopsies (16G-18G with 10-20 mm throw) are obtained. The biopsy tract is inspected for post-procedure bleeding and embolized with Gelfoam slurry if indicated.",
      "descriptionHi": "सीटी स्कैन या सोनोग्राफी में गांठ को लाइव देखते हुए चमड़ी को सुन्न किया जाता है। एक विशेष गाइडिंग नली को गांठ के मुहाने तक पहुंचाया जाता है। इसके अंदर से एक ऑटोमैटिक बायोप्सी सुई (Tru-Cut Needle) से 1 से 2 सेकंड में धागे जैसे मांस के 2-3 बारीक टुकड़े लिए जाते हैं। सुई निकालते समय रास्ते को देख लिया जाता है कि कोई खून तो नहीं बह रहा।",
      "benefitsEn": [
          ">95-98% diagnostic accuracy for cancer staging and molecular genomics with minimal tissue injury.",
          "Pinhole percutaneous procedure under local anesthesia avoiding surgical open incisional biopsy.",
          "Outpatient day-care intervention with discharge in 3-4 hours."
      ],
      "benefitsHi": [
          "95 से 98% अचूक सटीकता से बीमारी और कैंसर के प्रकार की पक्की पहचान, जिससे सही इलाज शुरू हो सके।",
          "बिना किसी चीरे, टांके या बड़े ऑपरेशन के केवल एक सुई से जांच।",
          "प्रक्रिया के 3-4 घंटे बाद ही मरीज आराम से घर जा सकता है।"
      ],
      "specificRisksEn": [
          "Hemorrhage: Hematoma at target organ or retroperitoneal/peritoneal bleed (1-2%, rarely requiring blood transfusion or transcatheter arterial embolization).",
          "Pneumothorax / hemothorax during lung or upper abdominal biopsies (up to 15-20% for lung, 2-5% requiring chest tube insertion).",
          "Tumor tract seeding (extremely rare with modern coaxial techniques, <0.01%).",
          "Infection or localized post-biopsy soreness."
      ],
      "specificRisksHi": [
          "अंग से आंतरिक रक्तस्राव या खून का थक्का जमना (1-2%), जिसे जरूरत पड़ने पर नस बंद करके ठीक किया जाता है।",
          "फेफड़े की बायोप्सी होने पर फेफड़े से हवा का रिसाव होना (Pneumothorax - कभी-कभी छाती में पतली नली लगानी पड़ सकती है)।",
          "सुई के रास्ते में कैंसर के कण छूटने का अत्यंत दुर्लभ खतरा (<0.01%)।",
          "सुई लगने की जगह पर हल्का दर्द या सूजन।"
      ],
      "alternativesEn": "Surgical open or laparoscopic biopsy under general anesthesia, fine needle aspiration cytology (FNAC, yields only cells without tissue architecture), or empirical treatment without histopathology.",
      "alternativesHi": "ऑपरेशन थियेटर में चीरा लगाकर मांस काटना, केवल पतली सुई से पानी की जांच (FNAC - जिसमें अक्सर अधूरी रिपोर्ट आती है), अथवा बिना जांच के अंदाजे से इलाज।",
      "sedationTypeEn": "Local infiltration anesthesia (1-2% Lignocaine) with optional mild IV analgesia/sedation.",
      "sedationTypeHi": "स्थानीय सुन्नता का इंजेक्शन (Local Anesthesia) एवं आवश्यकतानुसार हल्की दर्द निवारक दवा।"
  },
  "vertebroplasty-kyphoplasty": {
      "id": "vertebroplasty-kyphoplasty",
      "category": "Spine & Musculoskeletal Interventions",
      "nameEn": "Percutaneous Vertebroplasty / Balloon Kyphoplasty with PMMA Bone Cement",
      "nameHi": "परक्यूटेनियस वर्टीब्रोप्लास्टी / काइफोप्लास्टी (रीढ़ की हड्डी के फ्रैक्चर में सुई द्वारा मेडिकल सीमेंट भरकर दर्द ठीक करना)",
      "indicationEn": "Severe, debilitating back pain refractory to medical analgesics and bracing, secondary to acute or subacute osteoporotic vertebral compression fractures (OVCF), multiple myeloma, or osteolytic spinal metastases.",
      "indicationHi": "ऑस्टियोपोरोसिस (हड्डियों की कमजोरी) या कैंसर के कारण रीढ़ के मनके का बैठ जाना या टूटना (Vertebral Fracture), जिसके कारण कमर में असहनीय दर्द, मरीज का बिस्तर से न उठ पाना, करवट तक न ले पाना और उठने-बैठने में चीख निकलना।",
      "descriptionEn": "Under continuous biplane fluoroscopy or CT guidance and local/sedation anesthesia, with the patient prone, an 11G-13G bone biopsy needle/trocar is advanced via a transpedicular or extrapedicular route directly into the collapsed vertebral body. In kyphoplasty, an inflatable bone balloon tamp creates a cavity and restores vertebral height. Viscous radiopaque polymethylmethacrylate (PMMA) bone cement is slowly injected under continuous fluoroscopy until stable trabecular interdigitation is achieved.",
      "descriptionHi": "मरीज को पेट के बल लिटाकर पीठ को सुन्न किया जाता है। एक्स-रे की दोहरी निगरानी में एक मजबूत खोखली सुई रीढ़ के मनके के अंदर पहुंचाई जाती है। काइफोप्लास्टी में पहले एक छोटा गुब्बारा फुलाकर दबे हुए मनके को ऊपर उठाया जाता है। फिर उस खाली जगह में विशेष गाढ़ा मेडिकल सीमेंट (PMMA Bone Cement) भरा जाता है। यह सीमेंट 10 मिनट में पत्थर जैसा सख्त होकर टूटी हड्डी को हमेशा के लिए जोड़ देता है।",
      "benefitsEn": [
          "Immediate, dramatic pain relief in >90% of patients within 2-4 hours of cement curing.",
          "Restores spinal mechanical stability, allowing elderly patients to stand and walk on the same day.",
          "Eliminates dependency on high-dose opioids and prevents life-threatening complications of prolonged bed rest (bedsores, DVT, pneumonia)."
      ],
      "benefitsHi": [
          "90% से अधिक मरीजों में सीमेंट जमते ही 2 से 4 घंटे के भीतर असहनीय कमर दर्द से चमत्कारी मुक्ति।",
          "मरीज उसी दिन शाम को बिना सहारे अपने पैरों पर खड़ा होकर चलने-फिरने लगता है।",
          "लम्बे समय तक बिस्तर पर पड़े रहने से होने वाले खतरों (घाव/बेडसोर, पैरों में थक्का जमना, निमोनिया) से संपूर्ण बचाव।"
      ],
      "specificRisksEn": [
          "Cement leakage into the spinal canal or neural foramen causing spinal cord or nerve root compression (may require emergency surgical spinal laminectomy decompression, <1%).",
          "Venous cement embolization into the azygos/caval system or pulmonary arterial circulation.",
          "Adjacent level vertebral compression fracture due to altered spinal biomechanics (10-15% over time).",
          "Pedicle fracture or local infection/spondylodiscitis."
      ],
      "specificRisksHi": [
          "सीमेंट का रीढ़ की नस की तरफ रिसने का दुर्लभ जोखिम जिससे पैरों में कमजोरी आ सकती है (1% से कम, जिसके लिए आपातकालीन सर्जरी की जरूरत पड़ सकती है)।",
          "सीमेंट के नन्हे कणों का नस द्वारा फेफड़ों में जाने का जोखिम।",
          "भविष्य में ऊपर या नीचे के दूसरे कमजोर मनके के बैठने का खतरा (10-15%)।",
          "हड्डी में संक्रमण।"
      ],
      "alternativesEn": "Conservative medical management with strict bed rest, rigid spinal orthotic braces, and calcitonin/teriparatide therapy, or open surgical spinal instrumentation and fusion with pedicle screws.",
      "alternativesHi": "महीनों तक बिस्तर पर लेटे रहना, भारी बेल्ट पहनना और दर्द की गोलियां खाना, अथवा रीढ़ में चीरा लगाकर रॉड और पेंच (Spinal Fusion Surgery) लगाने का बड़ा ऑपरेशन।",
      "sedationTypeEn": "Local infiltration anesthesia (deep periosteal lignocaine) with monitored conscious sedation or General Anesthesia.",
      "sedationTypeHi": "हड्डी की सतह पर स्थानीय सुन्नता (Local Anesthesia) एवं नस द्वारा गहरी दर्द निवारक व शांत करने की दवा।"
  },
  "osteoid-osteoma-rfa": {
      "id": "osteoid-osteoma-rfa",
      "category": "Spine & Musculoskeletal Interventions",
      "nameEn": "Osteoid Osteoma: CT-Guided Percutaneous Radiofrequency Ablation (RFA) with Bone Drill Access",
      "nameHi": "ओस्टियोइड ओस्टियोमा रेडियोफ्रीक्वेंसी एब्लेशन (CT-RFA - हड्डी की दर्दनाक गांठ को सीटी स्कैन में देखकर तार से जलाना)",
      "indicationEn": "Symptomatic osteoid osteoma (intractable nocturnal bone pain dramatically relieved by NSAIDs) with an imaging-proven nidus (<1.5 cm) in long bones, pelvis, or posterior spine elements.",
      "indicationHi": "हड्डी में होने वाली दर्दनाक गांठ (Osteoid Osteoma) जिसके कारण विशेष रूप से रात में भयंकर हड्डी का दर्द होता हो और मरीज को रोजाना पेनकिलर खानी पड़ती हो।",
      "descriptionEn": "Under continuous CT guidance, a coaxial bone biopsy drill or Bonopty cannula penetrates the dense sclerotic bone directly into the radiolucent nidus. A dedicated radiofrequency ablation electrode (cool-tip or expandable) is placed at the center of the nidus. Thermal ablation is conducted at 90 degrees C for 4-6 minutes, completely coagulating the nidus.",
      "descriptionHi": "सीटी स्कैन की निगरानी में हड्डी को सुन्न करके एक विशेष ड्रिल सुई द्वारा हड्डी के अंदर उस दर्द पैदा करने वाली गांठ के केंद्र (Nidus) तक पहुंचा जाता है। वहां एक आरएफ इलेक्ट्रोड तार डालकर 90 डिग्री तापमान पर 4-6 मिनट तक गर्मी दी जाती है। इससे गांठ के सारे दर्द वाले तंतु पूरी तरह जलकर नष्ट हो जाते हैं।",
      "benefitsEn": [
          ">95% complete curative success rate in a single outpatient sitting.",
          "Immediate, permanent cessation of nocturnal bone pain without open surgical bone resection.",
          "Preserves skeletal structural integrity and eliminates the need for bone grafting or casting."
      ],
      "benefitsHi": [
          "एक ही बार में 95% से अधिक मरीजों में हड्डी की गांठ का हमेशा के लिए जड़ से खात्मा।",
          "प्रक्रिया के तुरंत बाद रात के असहनीय दर्द से जीवनभर के लिए मुक्ति।",
          "हड्डी को बिना काटे सुरक्षित रखना, प्लास्टर या हड्डी बदलने की कोई जरूरत नहीं।"
      ],
      "specificRisksEn": [
          "Thermal injury to adjacent skin (burns), periosteum, or adjacent peripheral motor/sensory nerves.",
          "Iatrogenic post-ablation bone stress fracture (prevented by temporary protected weight-bearing).",
          "Secondary osteomyelitis or soft tissue infection.",
          "Incomplete ablation requiring repeat session (<5%)."
      ],
      "specificRisksHi": [
          "हड्डी के पास स्थित त्वचा या नसों में गर्मी लगने से हल्का सुन्नपन।",
          "उपचार के बाद हड्डी के कमजोर होने पर वजन पड़ने से हेयरलाइन फ्रैक्चर का खतरा (कुछ हफ्तों तक संभलकर चलने की सलाह दी जाती है)।",
          "हड्डी में संक्रमण।",
          "गांठ का कुछ हिस्सा बचने पर दोबारा सिकाई की जरूरत होना (<5%)।"
      ],
      "alternativesEn": "Open surgical en-bloc resection or curettage with bone grafting under general anesthesia, cryoablation, or chronic high-dose NSAID medical therapy.",
      "alternativesHi": "हड्डी को काटकर गांठ निकालने का बड़ा ऑपरेशन, या जीवनभर दर्द निवारक गोलियां खाना।",
      "sedationTypeEn": "General Anesthesia or Deep Monitored Conscious Sedation with regional nerve block.",
      "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा गहन शामक दवा।"
  },
  "celiac-plexus-neurolysis": {
      "id": "celiac-plexus-neurolysis",
      "category": "Pain & Interventional Neurolysis",
      "nameEn": "Celiac Plexus Neurolysis (CPN): Fluoroscopy / CT-Guided Percutaneous Neurolytic Alcohol Injection",
      "nameHi": "सीलिएक प्लेक्सस न्यूरोलीसिस (CPN - पेट के कैंसर के असहनीय दर्द को रोकने के लिए दर्द वाली नसों को सुन्न/नष्ट करना)",
      "indicationEn": "Severe intractable upper abdominal pain secondary to inoperable pancreatic adenocarcinoma, gastric carcinoma, cholangiocarcinoma, or chronic pancreatitis, requiring high-dose opioid medications.",
      "indicationHi": "अग्न्याशय (पैंक्रियास), पेट या पित्त की नली के कैंसर का असहनीय, कमर तक चुभने वाला दर्द, जब भारी मात्रा में मॉर्फीन और नशे वाली दवाइयों से भी आराम न मिल रहा हो और मरीज दर्द से तड़प रहा हो।",
      "descriptionEn": "With the patient prone, under CT or fluoroscopic guidance, dual 20G-22G Chiba needles are advanced via a retrocrural, transcrural, or transaortic route to position their tips anterior to the abdominal aorta at the level of the celiac axis (T12-L1). Following a diagnostic local anesthetic block confirming pain reduction, 20-40 mL of 98% dehydrated sterile absolute alcohol is injected, permanently interrupting nociceptive pain pathways.",
      "descriptionHi": "मरीज को पेट के बल लिटाकर पीठ को सुन्न किया जाता है। सीटी स्कैन में देखकर पेट की मुख्य महाधमनी के पास स्थित दर्द के मुख्य केंद्र (Celiac Plexus) पर दो बारीक सुइयां पहुंचाई जाती हैं। पहले सुन्न करने की दवा देकर दर्द की जांच की जाती है, फिर शुद्ध मेडिकल अल्कोहल (Absolute Alcohol) का इंजेक्शन दिया जाता है जो कैंसर का दर्द दिमाग तक ले जाने वाली नसों को हमेशा के लिए शांत कर देता है।",
      "benefitsEn": [
          "Substantial, long-lasting reduction in severe visceral cancer pain in 75-90% of patients.",
          "Reduces opioid consumption by 50-80%, eliminating debilitating opioid side effects (severe constipation, sedation, nausea).",
          "Dramatically improves quality of life and appetite in advanced cancer patients."
      ],
      "benefitsHi": [
          "75 से 90% मरीजों में कैंसर के भयंकर दर्द से तुरंत और लम्बे समय तक भारी राहत।",
          "मॉर्फीन और भारी दर्द निवारक गोलियों की जरूरत में 50-80% की कमी, जिससे कब्ज, चक्कर और उल्टी से छुटकारा मिलता है।",
          "मरीज का चैन से सोना, खाना खाना और सुकून से रहना संभव होना।"
      ],
      "specificRisksEn": [
          "Transient orthostatic hypotension (blood pressure drop upon standing for 24-48 hours due to splanchnic sympathetic vasodilation, 20-30%).",
          "Transient diarrhea or abdominal cramping for 48 hours.",
          "Catastrophic anterior spinal artery injury / paraplegia (extremely rare, <0.1%, due to Adamkiewicz artery spasm).",
          "Retroperitoneal hematoma or inadvertent retroperitoneal organ puncture."
      ],
      "specificRisksHi": [
          "उठने-बैठने पर रक्तचाप का कम होना और चक्कर आना (24-48 घंटे में स्वतः ठीक हो जाता है)।",
          "प्रक्रिया के बाद 1-2 दिन तक दस्त लगना या पेट में मरोड़।",
          "रीढ़ की नस पर असर से पैरों में कमजोरी आने का अत्यंत दुर्लभ जोखिम (<0.1%)।",
          "पेट के अंदर हल्का रक्तस्राव।"
      ],
      "alternativesEn": "Escalation of oral/transdermal opioid therapy (Fentanyl patches, oral morphine), intrathecal morphine pain pump implantation, or surgical splanchnicectomy.",
      "alternativesHi": "मॉर्फीन की डोज लगातार बढ़ाते रहना (पैच/इंजेक्शन), रीढ़ में परमानेंट मॉर्फीन पंप लगाना, या सर्जरी।",
      "sedationTypeEn": "Local infiltration anesthesia with IV conscious sedation and generous intravenous hydration.",
      "sedationTypeHi": "पीठ पर स्थानीय सुन्नता, नस द्वारा शामक दवा एवं ड्रिप द्वारा पानी चढ़ाना।"
  },
  "venous-sinus-stenting-iih": {
      "id": "venous-sinus-stenting-iih",
      "category": "Neurovascular Venous Interventions",
      "nameEn": "Intracranial Venous Sinus Stenting for Idiopathic Intracranial Hypertension (IIH) with Venous Manometry",
      "nameHi": "इंट्राक्रेनियल वेनस साइनस स्टेंटिंग (दिमाग की मुख्य नस में स्टेंट लगाकर सिरदर्द और अंधेपन के खतरे को ठीक करना)",
      "indicationEn": "Idiopathic Intracranial Hypertension (Pseudotumor Cerebri) with papilledema threatening irreversible vision loss, severe intractable headaches, and pulsatile tinnitus, with a documented pressure gradient (>=8 mmHg) across transverse sinus stenosis.",
      "indicationHi": "दिमाग की मुख्य नस (Transverse Sinus) के सिकुड़ने के कारण दिमाग के अंदर पानी का दबाव बहुत बढ़ जाना (IIH), जिसके कारण सिर में लगातार तेज दर्द, कानों में दिल की धड़कन जैसी आवाजें आना (Tinnitus) और आंखों की रोशनी तेजी से कम होना (अंधेपन का खतरा)।",
      "descriptionEn": "Via femoral access, a 6F guiding sheath is positioned in the internal jugular vein. A microcatheter and 0.014-inch pressure wire are navigated across the transverse-sigmoid sinus junction to record pressure manometry across the stenosis. If a significant trans-stenotic gradient is confirmed, a dedicated self-expanding intracranial/carotid stent is deployed across the venous narrowing, abolishing the pressure gradient under fluoroscopy.",
      "descriptionHi": "जांघ की नस से एक पतली नली गर्दन से होते हुए सीधे दिमाग की मुख्य नस तक पहुंचाई जाती है। एक विशेष प्रेशर तार से नस की सिकुड़न के दोनों तरफ दबाव मापा जाता है। रुकावट की पुष्टि होने पर दिमाग की नस के अंदर एक विशेष लचीला धातु का स्टेंट (Stent) खोल दिया जाता है। नस के खुलते ही दिमाग का बढ़ा हुआ पानी का दबाव तुरंत सामान्य हो जाता है।",
      "benefitsEn": [
          "Rapid resolution of papilledema, preserving vision and halting progressive optic nerve atrophy.",
          "Immediate cure or marked improvement of debilitating pulsatile tinnitus (whooshing ear sound) in >90% of cases.",
          "Eliminates the need for surgical ventriculoperitoneal or lumboperitoneal shunts (which carry high failure and revision rates)."
      ],
      "benefitsHi": [
          "आंखों के पर्दे की सूजन तुरंत उतरना और हमेशा के लिए अंधे होने के खतरे से पूर्ण बचाव।",
          "कानों में आने वाली असहनीय सनसनाहट और धड़कन जैसी आवाजों से तुरंत मुक्ति।",
          "सिर में चीरा लगाकर दिमाग से पेट तक प्लास्टिक की नली (VP Shunt) डालने के ऑपरेशन से 100% बचाव।"
      ],
      "specificRisksEn": [
          "Intracranial venous sinus perforation or dural tearing causing catastrophic subdural/intracranial hemorrhage.",
          "Acute in-stent thrombosis or transverse sinus occlusion.",
          "Transient ipsilateral headache from dural stretch during stent expansion.",
          "Femoral access site hematoma or pseudoaneurysm."
      ],
      "specificRisksHi": [
          "दिमाग की नस में खरोंच या फटने से सिर के अंदर रक्तस्राव का जोखिम।",
          "स्टेंट में खून का थक्का जमना (जिससे बचाव के लिए खून पतला करने की दवा दी जाती है)।",
          "स्टेंट खुलने के समय सिर में 1-2 दिन तक खिंचाव जैसा दर्द।",
          "जांघ में सुई के स्थान पर खून का जमाव।"
      ],
      "alternativesEn": "Medical management with Acetazolamide (Diamox) and Topiramate, repeated therapeutic lumbar punctures, surgical optic nerve sheath fenestration, or ventriculoperitoneal/lumboperitoneal shunting.",
      "alternativesHi": "दवाइयां (एसिटाजोलामाइड), बार-बार कमर से पानी निकालना, आंख के पीछे चीरा लगाने का ऑपरेशन, अथवा सिर से पेट तक नली डालने का ऑपरेशन (Shunt)।",
      "sedationTypeEn": "General Anesthesia with continuous invasive arterial pressure monitoring.",
      "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) गहन न्यूरो-निगरानी के साथ।"
  },
};

export const VENOUS_AND_DIALYSIS_PREP_CRITERIA: Record<string, ClinicalPrepCriteria> = {
  "avf_radiocephalic_pta": {
      "procedureId": "avf_radiocephalic_pta",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "LOW",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "avf_juxta_conquest": {
      "procedureId": "avf_juxta_conquest",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "avf_brachiobasilic_transposition_pta_stent": {
      "procedureId": "avf_brachiobasilic_transposition_pta_stent",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "LOW",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "avf_cephalic_arch_cas_viabahn": {
      "procedureId": "avf_cephalic_arch_cas_viabahn",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "avf_accessory_branch_embolization": {
      "procedureId": "avf_accessory_branch_embolization",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "endoavf_ellipsys_creation": {
      "procedureId": "endoavf_ellipsys_creation",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "endoavf_wavelinq_creation": {
      "procedureId": "endoavf_wavelinq_creation",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "avg_arterial_anastomosis_pta": {
      "procedureId": "avg_arterial_anastomosis_pta",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "LOW",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "avg_venous_anastomosis_pta_stent": {
      "procedureId": "avg_venous_anastomosis_pta_stent",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "LOW",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "avf_acute_clot_pharmacomechanical_thrombectomy": {
      "procedureId": "avf_acute_clot_pharmacomechanical_thrombectomy",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "avg_acute_clot_fogarty_declot": {
      "procedureId": "avg_acute_clot_fogarty_declot",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "avf_pseudoaneurysm_covered_stent_exclusion": {
      "procedureId": "avf_pseudoaneurysm_covered_stent_exclusion",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "avf_pseudoaneurysm_thrombin_injection": {
      "procedureId": "avf_pseudoaneurysm_thrombin_injection",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "avf_dass_miller_banding": {
      "procedureId": "avf_dass_miller_banding",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "LOW",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "avf_dass_clip_suture_banding": {
      "procedureId": "avf_dass_clip_suture_banding",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "LOW",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "cvs_subclavian_pta_stent": {
      "procedureId": "cvs_subclavian_pta_stent",
      "category": "Central Venous Stenosis & Occlusion",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.3",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 9.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Type & Crossmatch 2 Units PRBC reserved in SMS Blood Bank."
      },
      "fastingHours": {
          "solids": 8,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "HDU/ICU continuous monitoring for minimum 12-24 hours.",
          "Monitor for chest pain, dyspnea, hypotension, or signs of pericardial tamponade/mediastinal hematoma.",
          "Repeat chest radiograph at 4 hours post-procedure."
      ],
      "dischargeReadinessCriteria": [
          "Patient stable in HDU/ward for at least 24 hours.",
          "Resolution of upper extremity and facial swelling verified.",
          "No signs of hemothorax, access site hematoma, or neurological deficit."
      ],
      "specialPreps": [
          "Pre-procedure CT Venography reviewed for collateral pathways and occlusion length.",
          "Emergency covered stent-grafts (Gore Viabahn, Bard Fluency) and balloon tamponade systems on immediate standby.",
          "Invasive arterial blood pressure monitoring arranged if General Anesthesia planned."
      ]
  },
  "cvo_brachiocephalic_sharp_recanalization": {
      "procedureId": "cvo_brachiocephalic_sharp_recanalization",
      "category": "Central Venous Stenosis & Occlusion",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.3",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 9.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Type & Crossmatch 2 Units PRBC reserved in SMS Blood Bank."
      },
      "fastingHours": {
          "solids": 8,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "HDU/ICU continuous monitoring for minimum 12-24 hours.",
          "Monitor for chest pain, dyspnea, hypotension, or signs of pericardial tamponade/mediastinal hematoma.",
          "Repeat chest radiograph at 4 hours post-procedure."
      ],
      "dischargeReadinessCriteria": [
          "Patient stable in HDU/ward for at least 24 hours.",
          "Resolution of upper extremity and facial swelling verified.",
          "No signs of hemothorax, access site hematoma, or neurological deficit."
      ],
      "specialPreps": [
          "Pre-procedure CT Venography reviewed for collateral pathways and occlusion length.",
          "Emergency covered stent-grafts (Gore Viabahn, Bard Fluency) and balloon tamponade systems on immediate standby.",
          "Invasive arterial blood pressure monitoring arranged if General Anesthesia planned."
      ]
  },
  "cvo_svc_kissing_balloon_stent": {
      "procedureId": "cvo_svc_kissing_balloon_stent",
      "category": "Central Venous Stenosis & Occlusion",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.3",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 9.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Type & Crossmatch 2 Units PRBC reserved in SMS Blood Bank."
      },
      "fastingHours": {
          "solids": 8,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "HDU/ICU continuous monitoring for minimum 12-24 hours.",
          "Monitor for chest pain, dyspnea, hypotension, or signs of pericardial tamponade/mediastinal hematoma.",
          "Repeat chest radiograph at 4 hours post-procedure."
      ],
      "dischargeReadinessCriteria": [
          "Patient stable in HDU/ward for at least 24 hours.",
          "Resolution of upper extremity and facial swelling verified.",
          "No signs of hemothorax, access site hematoma, or neurological deficit."
      ],
      "specialPreps": [
          "Pre-procedure CT Venography reviewed for collateral pathways and occlusion length.",
          "Emergency covered stent-grafts (Gore Viabahn, Bard Fluency) and balloon tamponade systems on immediate standby.",
          "Invasive arterial blood pressure monitoring arranged if General Anesthesia planned."
      ]
  },
  "hero_graft_endovascular_deployment": {
      "procedureId": "hero_graft_endovascular_deployment",
      "category": "Central Venous Stenosis & Occlusion",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.3",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 9.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Type & Crossmatch 2 Units PRBC reserved in SMS Blood Bank."
      },
      "fastingHours": {
          "solids": 8,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "HDU/ICU continuous monitoring for minimum 12-24 hours.",
          "Monitor for chest pain, dyspnea, hypotension, or signs of pericardial tamponade/mediastinal hematoma.",
          "Repeat chest radiograph at 4 hours post-procedure."
      ],
      "dischargeReadinessCriteria": [
          "Patient stable in HDU/ward for at least 24 hours.",
          "Resolution of upper extremity and facial swelling verified.",
          "No signs of hemothorax, access site hematoma, or neurological deficit."
      ],
      "specialPreps": [
          "Pre-procedure CT Venography reviewed for collateral pathways and occlusion length.",
          "Emergency covered stent-grafts (Gore Viabahn, Bard Fluency) and balloon tamponade systems on immediate standby.",
          "Invasive arterial blood pressure monitoring arranged if General Anesthesia planned."
      ]
  },
  "cvo_left_bc_outback_reentry": {
      "procedureId": "cvo_left_bc_outback_reentry",
      "category": "Central Venous Stenosis & Occlusion",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.3",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 9.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Type & Crossmatch 2 Units PRBC reserved in SMS Blood Bank."
      },
      "fastingHours": {
          "solids": 8,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "HDU/ICU continuous monitoring for minimum 12-24 hours.",
          "Monitor for chest pain, dyspnea, hypotension, or signs of pericardial tamponade/mediastinal hematoma.",
          "Repeat chest radiograph at 4 hours post-procedure."
      ],
      "dischargeReadinessCriteria": [
          "Patient stable in HDU/ward for at least 24 hours.",
          "Resolution of upper extremity and facial swelling verified.",
          "No signs of hemothorax, access site hematoma, or neurological deficit."
      ],
      "specialPreps": [
          "Pre-procedure CT Venography reviewed for collateral pathways and occlusion length.",
          "Emergency covered stent-grafts (Gore Viabahn, Bard Fluency) and balloon tamponade systems on immediate standby.",
          "Invasive arterial blood pressure monitoring arranged if General Anesthesia planned."
      ]
  },
  "permcath_right_ijv_placement": {
      "procedureId": "permcath_right_ijv_placement",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "permcath_left_ijv_placement": {
      "procedureId": "permcath_left_ijv_placement",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "permcath_external_jugular_placement": {
      "procedureId": "permcath_external_jugular_placement",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "permcath_transfemoral_placement": {
      "procedureId": "permcath_transfemoral_placement",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "permcath_translumbar_ivc_placement": {
      "procedureId": "permcath_translumbar_ivc_placement",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "permcath_transhepatic_ivc_placement": {
      "procedureId": "permcath_transhepatic_ivc_placement",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "permcath_transcollateral_intercostal_placement": {
      "procedureId": "permcath_transcollateral_intercostal_placement",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "permcath_fibrin_sheath_snare_stripping": {
      "procedureId": "permcath_fibrin_sheath_snare_stripping",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "permcath_fibrin_sheath_balloon_disruption": {
      "procedureId": "permcath_fibrin_sheath_balloon_disruption",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "permcath_exchange_subcutaneous_relocation": {
      "procedureId": "permcath_exchange_subcutaneous_relocation",
      "category": "Tunneled Dialysis Catheters (Permacath)",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "avf_deep_perforator_embolization": {
      "procedureId": "avf_deep_perforator_embolization",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "avf_basilic_superficialization_pta": {
      "procedureId": "avf_basilic_superficialization_pta",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "LOW",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "avf_snuffbox_balloon_angioplasty": {
      "procedureId": "avf_snuffbox_balloon_angioplasty",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "avg_thigh_femoral_thrombectomy_pta": {
      "procedureId": "avg_thigh_femoral_thrombectomy_pta",
      "category": "Hemodialysis Access & AV Fistula Salvage",
      "riskTier": "LOW",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "ESRD on regular hemodialysis; note last dialysis session date and potassium level.",
          "hemoglobin": "≥ 8.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Serum Potassium must be < 5.5 mEq/L within 24 hours of intervention."
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Fluid restriction maintained according to patient's nephrology dialysis protocol.",
      "postOpSurveillance": [
          "Continuous palpation of thrill every 15 min for 1 hour, then every 30 min for 2 hours.",
          "Inspect access puncture site for active bleeding or expanding hematoma.",
          "Ensure hemostatic mattress suture or purse-string stitch is loosened/removed before discharge if bleeding has stopped."
      ],
      "dischargeReadinessCriteria": [
          "Strong continuous palpable thrill and audible bruit over the access tract.",
          "Hemostasis confirmed at sheath site with minimal dressing.",
          "Dialysis unit notified of restored access for upcoming dialysis run."
      ],
      "specialPreps": [
          "Coordinate with dialysis unit: ensure procedure scheduled on non-dialysis day or prior to next planned session.",
          "Palpate fistula thrill and listen for bruit over entire forearm/arm tract.",
          "Do NOT place IV cannula or take blood pressure on the fistula arm."
      ]
  },
  "cvo_sharp_recanalization_snare_rendezvous": {
      "procedureId": "cvo_sharp_recanalization_snare_rendezvous",
      "category": "Central Venous Stenosis & Occlusion",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.3",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 9.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Type & Crossmatch 2 Units PRBC reserved in SMS Blood Bank."
      },
      "fastingHours": {
          "solids": 8,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "HDU/ICU continuous monitoring for minimum 12-24 hours.",
          "Monitor for chest pain, dyspnea, hypotension, or signs of pericardial tamponade/mediastinal hematoma.",
          "Repeat chest radiograph at 4 hours post-procedure."
      ],
      "dischargeReadinessCriteria": [
          "Patient stable in HDU/ward for at least 24 hours.",
          "Resolution of upper extremity and facial swelling verified.",
          "No signs of hemothorax, access site hematoma, or neurological deficit."
      ],
      "specialPreps": [
          "Pre-procedure CT Venography reviewed for collateral pathways and occlusion length.",
          "Emergency covered stent-grafts (Gore Viabahn, Bard Fluency) and balloon tamponade systems on immediate standby.",
          "Invasive arterial blood pressure monitoring arranged if General Anesthesia planned."
      ]
  },
  "dvt-catheter-directed-thrombolysis": {
      "procedureId": "dvt-catheter-directed-thrombolysis",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 9.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline Serum Fibrinogen (must be ≥ 200 mg/dL), aPTT, PT/INR, and Type & Screen."
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Serial Fibrinogen and aPTT every 4 to 6 hours during lytic therapy; hold infusion if fibrinogen drops < 150 mg/dL.",
          "Hourly neurological pupillary and motor exams to screen for intracranial hemorrhage.",
          "Check puncture site (popliteal/femoral) for hematoma.",
          "Monitor urine for gross hematuria or hemoglobinuria."
      ],
      "dischargeReadinessCriteria": [
          "Catheter removed and complete hemostasis confirmed.",
          "Therapeutic oral or subcutaneous anticoagulation successfully transitioned.",
          "Marked reduction in limb swelling and pain with no active bleeding."
      ],
      "specialPreps": [
          "Confirm absence of active internal bleeding, stroke/neurosurgery within 3 months, or recent major surgery within 14 days.",
          "Dedicated ICU bed reserved with continuous syringe pumps.",
          "Protocolized Fibrinogen monitoring order set (q4-6h during infusion)."
      ]
  },
  "dvt-pharmacomechanical-thrombectomy-angiojet": {
      "procedureId": "dvt-pharmacomechanical-thrombectomy-angiojet",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 9.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline Serum Fibrinogen (must be ≥ 200 mg/dL), aPTT, PT/INR, and Type & Screen."
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Serial Fibrinogen and aPTT every 4 to 6 hours during lytic therapy; hold infusion if fibrinogen drops < 150 mg/dL.",
          "Hourly neurological pupillary and motor exams to screen for intracranial hemorrhage.",
          "Check puncture site (popliteal/femoral) for hematoma.",
          "Monitor urine for gross hematuria or hemoglobinuria."
      ],
      "dischargeReadinessCriteria": [
          "Catheter removed and complete hemostasis confirmed.",
          "Therapeutic oral or subcutaneous anticoagulation successfully transitioned.",
          "Marked reduction in limb swelling and pain with no active bleeding."
      ],
      "specialPreps": [
          "Confirm absence of active internal bleeding, stroke/neurosurgery within 3 months, or recent major surgery within 14 days.",
          "Dedicated ICU bed reserved with continuous syringe pumps.",
          "Protocolized Fibrinogen monitoring order set (q4-6h during infusion)."
      ]
  },
  "dvt-large-bore-aspiration-thrombectomy": {
      "procedureId": "dvt-large-bore-aspiration-thrombectomy",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 9.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline Serum Fibrinogen (must be ≥ 200 mg/dL), aPTT, PT/INR, and Type & Screen."
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Serial Fibrinogen and aPTT every 4 to 6 hours during lytic therapy; hold infusion if fibrinogen drops < 150 mg/dL.",
          "Hourly neurological pupillary and motor exams to screen for intracranial hemorrhage.",
          "Check puncture site (popliteal/femoral) for hematoma.",
          "Monitor urine for gross hematuria or hemoglobinuria."
      ],
      "dischargeReadinessCriteria": [
          "Catheter removed and complete hemostasis confirmed.",
          "Therapeutic oral or subcutaneous anticoagulation successfully transitioned.",
          "Marked reduction in limb swelling and pain with no active bleeding."
      ],
      "specialPreps": [
          "Confirm absence of active internal bleeding, stroke/neurosurgery within 3 months, or recent major surgery within 14 days.",
          "Dedicated ICU bed reserved with continuous syringe pumps.",
          "Protocolized Fibrinogen monitoring order set (q4-6h during infusion)."
      ]
  },
  "chronic-pts-recanalization-stenting": {
      "procedureId": "chronic-pts-recanalization-stenting",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Monitor drain output (color, volume, consistency) every 4 hours.",
          "Observe for bacteremic fever spikes or anaphylaxis (for hydatid).",
          "Flush catheter with 10 mL normal saline twice daily to prevent occlusion."
      ],
      "dischargeReadinessCriteria": [
          "Catheter securely locked, connected to closed drainage bag with zero leakage.",
          "Significant clinical defervescence and reduction in leukocytosis.",
          "Discharge instructions on drain output recording and follow-up scan."
      ],
      "specialPreps": [
          "Review diagnostic CT/US: confirm safe needle window avoiding bowel, spleen, and major vascular structures.",
          "Active IV antibiotics running.",
          "For hydatid cysts: ensure Albendazole 400 mg BID for minimum 7-14 days pre-op, and pre-medicate with IV Hydrocortisone 100 mg and Pheniramine 1h prior."
      ]
  },
  "ivc-filter-placement-infrarenal": {
      "procedureId": "ivc-filter-placement-infrarenal",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "riskTier": "LOW",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Bed rest for 2 hours post-femoral or 1 hour post-jugular access.",
          "Monitor puncture site for hematoma.",
          "Record vitals q30m x 2h."
      ],
      "dischargeReadinessCriteria": [
          "Hemostasis confirmed at puncture site.",
          "Filter placement or complete filter retrieval verified on final angiographic image.",
          "Anticoagulation management plan documented."
      ],
      "specialPreps": [
          "Review prior CT or cavogram: assess filter type, tilt angle, strut perforation, and trapped clot burden.",
          "Crossmatch 2 units PRBC if complex retrieval planned."
      ]
  },
  "ivc-filter-placement-suprarenal": {
      "procedureId": "ivc-filter-placement-suprarenal",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.3",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Bed rest for 2 hours post-femoral or 1 hour post-jugular access.",
          "Monitor puncture site for hematoma.",
          "Record vitals q30m x 2h."
      ],
      "dischargeReadinessCriteria": [
          "Hemostasis confirmed at puncture site.",
          "Filter placement or complete filter retrieval verified on final angiographic image.",
          "Anticoagulation management plan documented."
      ],
      "specialPreps": [
          "Review prior CT or cavogram: assess filter type, tilt angle, strut perforation, and trapped clot burden.",
          "Crossmatch 2 units PRBC if complex retrieval planned."
      ]
  },
  "ivc-filter-retrieval-routine": {
      "procedureId": "ivc-filter-retrieval-routine",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "riskTier": "LOW",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Bed rest for 2 hours post-femoral or 1 hour post-jugular access.",
          "Monitor puncture site for hematoma.",
          "Record vitals q30m x 2h."
      ],
      "dischargeReadinessCriteria": [
          "Hemostasis confirmed at puncture site.",
          "Filter placement or complete filter retrieval verified on final angiographic image.",
          "Anticoagulation management plan documented."
      ],
      "specialPreps": [
          "Review prior CT or cavogram: assess filter type, tilt angle, strut perforation, and trapped clot burden.",
          "Crossmatch 2 units PRBC if complex retrieval planned."
      ]
  },
  "ivc-filter-retrieval-complex-forceps": {
      "procedureId": "ivc-filter-retrieval-complex-forceps",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.3",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Bed rest for 2 hours post-femoral or 1 hour post-jugular access.",
          "Monitor puncture site for hematoma.",
          "Record vitals q30m x 2h."
      ],
      "dischargeReadinessCriteria": [
          "Hemostasis confirmed at puncture site.",
          "Filter placement or complete filter retrieval verified on final angiographic image.",
          "Anticoagulation management plan documented."
      ],
      "specialPreps": [
          "Review prior CT or cavogram: assess filter type, tilt angle, strut perforation, and trapped clot burden.",
          "Crossmatch 2 units PRBC if complex retrieval planned."
      ]
  },
  "ivc-filter-retrieval-complex-laser": {
      "procedureId": "ivc-filter-retrieval-complex-laser",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.3",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Bed rest for 2 hours post-femoral or 1 hour post-jugular access.",
          "Monitor puncture site for hematoma.",
          "Record vitals q30m x 2h."
      ],
      "dischargeReadinessCriteria": [
          "Hemostasis confirmed at puncture site.",
          "Filter placement or complete filter retrieval verified on final angiographic image.",
          "Anticoagulation management plan documented."
      ],
      "specialPreps": [
          "Review prior CT or cavogram: assess filter type, tilt angle, strut perforation, and trapped clot burden.",
          "Crossmatch 2 units PRBC if complex retrieval planned."
      ]
  },
  "pe-mechanical-thrombectomy-flowtriever": {
      "procedureId": "pe-mechanical-thrombectomy-flowtriever",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 9.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline Serum Fibrinogen (must be ≥ 200 mg/dL), aPTT, PT/INR, and Type & Screen."
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Serial Fibrinogen and aPTT every 4 to 6 hours during lytic therapy; hold infusion if fibrinogen drops < 150 mg/dL.",
          "Hourly neurological pupillary and motor exams to screen for intracranial hemorrhage.",
          "Check puncture site (popliteal/femoral) for hematoma.",
          "Monitor urine for gross hematuria or hemoglobinuria."
      ],
      "dischargeReadinessCriteria": [
          "Catheter removed and complete hemostasis confirmed.",
          "Therapeutic oral or subcutaneous anticoagulation successfully transitioned.",
          "Marked reduction in limb swelling and pain with no active bleeding."
      ],
      "specialPreps": [
          "Confirm absence of active internal bleeding, stroke/neurosurgery within 3 months, or recent major surgery within 14 days.",
          "Dedicated ICU bed reserved with continuous syringe pumps.",
          "Protocolized Fibrinogen monitoring order set (q4-6h during infusion)."
      ]
  },
  "pe-ultrasound-accelerated-thrombolysis-ekos": {
      "procedureId": "pe-ultrasound-accelerated-thrombolysis-ekos",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 9.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline Serum Fibrinogen (must be ≥ 200 mg/dL), aPTT, PT/INR, and Type & Screen."
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Serial Fibrinogen and aPTT every 4 to 6 hours during lytic therapy; hold infusion if fibrinogen drops < 150 mg/dL.",
          "Hourly neurological pupillary and motor exams to screen for intracranial hemorrhage.",
          "Check puncture site (popliteal/femoral) for hematoma.",
          "Monitor urine for gross hematuria or hemoglobinuria."
      ],
      "dischargeReadinessCriteria": [
          "Catheter removed and complete hemostasis confirmed.",
          "Therapeutic oral or subcutaneous anticoagulation successfully transitioned.",
          "Marked reduction in limb swelling and pain with no active bleeding."
      ],
      "specialPreps": [
          "Confirm absence of active internal bleeding, stroke/neurosurgery within 3 months, or recent major surgery within 14 days.",
          "Dedicated ICU bed reserved with continuous syringe pumps.",
          "Protocolized Fibrinogen monitoring order set (q4-6h during infusion)."
      ]
  },
  "pe-low-dose-catheter-directed-infusion": {
      "procedureId": "pe-low-dose-catheter-directed-infusion",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 9.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline Serum Fibrinogen (must be ≥ 200 mg/dL), aPTT, PT/INR, and Type & Screen."
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Serial Fibrinogen and aPTT every 4 to 6 hours during lytic therapy; hold infusion if fibrinogen drops < 150 mg/dL.",
          "Hourly neurological pupillary and motor exams to screen for intracranial hemorrhage.",
          "Check puncture site (popliteal/femoral) for hematoma.",
          "Monitor urine for gross hematuria or hemoglobinuria."
      ],
      "dischargeReadinessCriteria": [
          "Catheter removed and complete hemostasis confirmed.",
          "Therapeutic oral or subcutaneous anticoagulation successfully transitioned.",
          "Marked reduction in limb swelling and pain with no active bleeding."
      ],
      "specialPreps": [
          "Confirm absence of active internal bleeding, stroke/neurosurgery within 3 months, or recent major surgery within 14 days.",
          "Dedicated ICU bed reserved with continuous syringe pumps.",
          "Protocolized Fibrinogen monitoring order set (q4-6h during infusion)."
      ]
  },
  "cteph-balloon-pulmonary-angioplasty-bpa": {
      "procedureId": "cteph-balloon-pulmonary-angioplasty-bpa",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Monitor drain output (color, volume, consistency) every 4 hours.",
          "Observe for bacteremic fever spikes or anaphylaxis (for hydatid).",
          "Flush catheter with 10 mL normal saline twice daily to prevent occlusion."
      ],
      "dischargeReadinessCriteria": [
          "Catheter securely locked, connected to closed drainage bag with zero leakage.",
          "Significant clinical defervescence and reduction in leukocytosis.",
          "Discharge instructions on drain output recording and follow-up scan."
      ],
      "specialPreps": [
          "Review diagnostic CT/US: confirm safe needle window avoiding bowel, spleen, and major vascular structures.",
          "Active IV antibiotics running.",
          "For hydatid cysts: ensure Albendazole 400 mg BID for minimum 7-14 days pre-op, and pre-medicate with IV Hydrocortisone 100 mg and Pheniramine 1h prior."
      ]
  },
  "svc-syndrome-recanalization-stenting": {
      "procedureId": "svc-syndrome-recanalization-stenting",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.3",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 9.0 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Type & Crossmatch 2 Units PRBC reserved in SMS Blood Bank."
      },
      "fastingHours": {
          "solids": 8,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "HDU/ICU continuous monitoring for minimum 12-24 hours.",
          "Monitor for chest pain, dyspnea, hypotension, or signs of pericardial tamponade/mediastinal hematoma.",
          "Repeat chest radiograph at 4 hours post-procedure."
      ],
      "dischargeReadinessCriteria": [
          "Patient stable in HDU/ward for at least 24 hours.",
          "Resolution of upper extremity and facial swelling verified.",
          "No signs of hemothorax, access site hematoma, or neurological deficit."
      ],
      "specialPreps": [
          "Pre-procedure CT Venography reviewed for collateral pathways and occlusion length.",
          "Emergency covered stent-grafts (Gore Viabahn, Bard Fluency) and balloon tamponade systems on immediate standby.",
          "Invasive arterial blood pressure monitoring arranged if General Anesthesia planned."
      ]
  },
  "evla-gsv-incompetence": {
      "procedureId": "evla-gsv-incompetence",
      "category": "Superficial Venous Interventions (Varicose Veins)",
      "riskTier": "LOW",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 3,
          "liquids": 1
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Oral hydration encouraged prior to procedure; no contrast used.",
      "postOpSurveillance": [
          "Observe for 30 minutes following procedure completion.",
          "Mandatory 30-minute supervised ambulation in the recovery area prior to discharge.",
          "Check toe capillary refill and sensation."
      ],
      "dischargeReadinessCriteria": [
          "Patient actively ambulating without dizziness or severe pain.",
          "Compression stocking correctly fitted without distal constriction.",
          "Bandages clean and dry with zero bleeding."
      ],
      "specialPreps": [
          "Duplex ultrasound mapping performed and skin markings verified.",
          "Shave and prep treated leg from groin to foot.",
          "Prescribe Class II graduated compression stockings (20-30 mmHg) to be brought to the procedure suite."
      ]
  },
  "rfa-gsv-ssv-reflux": {
      "procedureId": "rfa-gsv-ssv-reflux",
      "category": "Superficial Venous Interventions (Varicose Veins)",
      "riskTier": "LOW",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 3,
          "liquids": 1
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Oral hydration encouraged prior to procedure; no contrast used.",
      "postOpSurveillance": [
          "Observe for 30 minutes following procedure completion.",
          "Mandatory 30-minute supervised ambulation in the recovery area prior to discharge.",
          "Check toe capillary refill and sensation."
      ],
      "dischargeReadinessCriteria": [
          "Patient actively ambulating without dizziness or severe pain.",
          "Compression stocking correctly fitted without distal constriction.",
          "Bandages clean and dry with zero bleeding."
      ],
      "specialPreps": [
          "Duplex ultrasound mapping performed and skin markings verified.",
          "Shave and prep treated leg from groin to foot.",
          "Prescribe Class II graduated compression stockings (20-30 mmHg) to be brought to the procedure suite."
      ]
  },
  "ntnt-venous-ablation-clarivein-venaseal": {
      "procedureId": "ntnt-venous-ablation-clarivein-venaseal",
      "category": "Superficial Venous Interventions (Varicose Veins)",
      "riskTier": "LOW",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 3,
          "liquids": 1
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Oral hydration encouraged prior to procedure; no contrast used.",
      "postOpSurveillance": [
          "Observe for 30 minutes following procedure completion.",
          "Mandatory 30-minute supervised ambulation in the recovery area prior to discharge.",
          "Check toe capillary refill and sensation."
      ],
      "dischargeReadinessCriteria": [
          "Patient actively ambulating without dizziness or severe pain.",
          "Compression stocking correctly fitted without distal constriction.",
          "Bandages clean and dry with zero bleeding."
      ],
      "specialPreps": [
          "Duplex ultrasound mapping performed and skin markings verified.",
          "Shave and prep treated leg from groin to foot.",
          "Prescribe Class II graduated compression stockings (20-30 mmHg) to be brought to the procedure suite."
      ]
  },
  "ugfs-foam-sclerotherapy": {
      "procedureId": "ugfs-foam-sclerotherapy",
      "category": "Superficial Venous Interventions (Varicose Veins)",
      "riskTier": "LOW",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 3,
          "liquids": 1
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Oral hydration encouraged prior to procedure; no contrast used.",
      "postOpSurveillance": [
          "Observe for 30 minutes following procedure completion.",
          "Mandatory 30-minute supervised ambulation in the recovery area prior to discharge.",
          "Check toe capillary refill and sensation."
      ],
      "dischargeReadinessCriteria": [
          "Patient actively ambulating without dizziness or severe pain.",
          "Compression stocking correctly fitted without distal constriction.",
          "Bandages clean and dry with zero bleeding."
      ],
      "specialPreps": [
          "Duplex ultrasound mapping performed and skin markings verified.",
          "Shave and prep treated leg from groin to foot.",
          "Prescribe Class II graduated compression stockings (20-30 mmHg) to be brought to the procedure suite."
      ]
  },
  "percutaneous-nephrostomy-pcn": {
      "procedureId": "percutaneous-nephrostomy-pcn",
      "category": "Urological Non-Vascular Interventions",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Serum Creatinine and Blood Urea Nitrogen checked within 24 hours.",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Record hourly nephrostomy urine output volume, clarity, and presence of hematuria.",
          "Monitor for post-puncture septic rigors or fever spikes; draw blood cultures if febrile.",
          "Bed rest for 4 hours."
      ],
      "dischargeReadinessCriteria": [
          "Nephrostomy catheter draining clear amber urine with tube securely locked and taped.",
          "Afebrile with stable vital signs for at least 6 hours.",
          "Patient/attendant educated on nephrostomy bag emptying, flushing, and care."
      ],
      "specialPreps": [
          "Pre-procedure broad-spectrum intravenous antibiotic mandatory 1 hour prior (e.g. Ceftriaxone 1g IV or Cefoperazone-Sulbactam 1.5g IV).",
          "Urinary culture report checked; if infected, initiate targeted culture-sensitive antibiotics."
      ]
  },
  "antegrade-dj-ureteral-stent": {
      "procedureId": "antegrade-dj-ureteral-stent",
      "category": "Urological Non-Vascular Interventions",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Serum Creatinine and Blood Urea Nitrogen checked within 24 hours.",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Record hourly nephrostomy urine output volume, clarity, and presence of hematuria.",
          "Monitor for post-puncture septic rigors or fever spikes; draw blood cultures if febrile.",
          "Bed rest for 4 hours."
      ],
      "dischargeReadinessCriteria": [
          "Nephrostomy catheter draining clear amber urine with tube securely locked and taped.",
          "Afebrile with stable vital signs for at least 6 hours.",
          "Patient/attendant educated on nephrostomy bag emptying, flushing, and care."
      ],
      "specialPreps": [
          "Pre-procedure broad-spectrum intravenous antibiotic mandatory 1 hour prior (e.g. Ceftriaxone 1g IV or Cefoperazone-Sulbactam 1.5g IV).",
          "Urinary culture report checked; if infected, initiate targeted culture-sensitive antibiotics."
      ]
  },
  "pcnl-access-tract-dilation": {
      "procedureId": "pcnl-access-tract-dilation",
      "category": "Urological Non-Vascular Interventions",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Serum Creatinine and Blood Urea Nitrogen checked within 24 hours.",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Record hourly nephrostomy urine output volume, clarity, and presence of hematuria.",
          "Monitor for post-puncture septic rigors or fever spikes; draw blood cultures if febrile.",
          "Bed rest for 4 hours."
      ],
      "dischargeReadinessCriteria": [
          "Nephrostomy catheter draining clear amber urine with tube securely locked and taped.",
          "Afebrile with stable vital signs for at least 6 hours.",
          "Patient/attendant educated on nephrostomy bag emptying, flushing, and care."
      ],
      "specialPreps": [
          "Pre-procedure broad-spectrum intravenous antibiotic mandatory 1 hour prior (e.g. Ceftriaxone 1g IV or Cefoperazone-Sulbactam 1.5g IV).",
          "Urinary culture report checked; if infected, initiate targeted culture-sensitive antibiotics."
      ]
  },
  "percutaneous-ureteral-stricture-balloon-dilation": {
      "procedureId": "percutaneous-ureteral-stricture-balloon-dilation",
      "category": "Urological Non-Vascular Interventions",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Serum Creatinine and Blood Urea Nitrogen checked within 24 hours.",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Record hourly nephrostomy urine output volume, clarity, and presence of hematuria.",
          "Monitor for post-puncture septic rigors or fever spikes; draw blood cultures if febrile.",
          "Bed rest for 4 hours."
      ],
      "dischargeReadinessCriteria": [
          "Nephrostomy catheter draining clear amber urine with tube securely locked and taped.",
          "Afebrile with stable vital signs for at least 6 hours.",
          "Patient/attendant educated on nephrostomy bag emptying, flushing, and care."
      ],
      "specialPreps": [
          "Pre-procedure broad-spectrum intravenous antibiotic mandatory 1 hour prior (e.g. Ceftriaxone 1g IV or Cefoperazone-Sulbactam 1.5g IV).",
          "Urinary culture report checked; if infected, initiate targeted culture-sensitive antibiotics."
      ]
  },
  "percutaneous-radiologic-gastrostomy-prg": {
      "procedureId": "percutaneous-radiologic-gastrostomy-prg",
      "category": "Enteric & Gastrointestinal Interventions",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 8,
          "liquids": 4
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Keep gastrostomy tube open to gravity drainage for initial 12 to 24 hours; do NOT initiate feeding immediately.",
          "Monitor abdominal exam hourly for signs of peritoneal irritation, rigidity, or severe tenderness.",
          "Water flush test (30-50 mL sterile water) at 12-24 hours; initiate dilute formula feeds at 24 hours if soft."
      ],
      "dischargeReadinessCriteria": [
          "T-fasteners secure; tube correctly positioned in gastric antrum.",
          "Enteral feeding initiated without pain, leakage, or peritoneal signs.",
          "Attendants trained in tube feeding, flushes, and skin site dressing."
      ],
      "specialPreps": [
          "Pass fine-bore nasogastric tube (Ryle's tube) for gastric air distension on procedure morning.",
          "Prophylactic IV antibiotic (Cefazolin 1g or Cefuroxime 1.5g) administered 30-60 min prior to puncture.",
          "Hold oral intake and suction gastric secretions."
      ]
  },
  "percutaneous-radiologic-gastrojejunostomy-prgj": {
      "procedureId": "percutaneous-radiologic-gastrojejunostomy-prgj",
      "category": "Enteric & Gastrointestinal Interventions",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 8,
          "liquids": 4
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Keep gastrostomy tube open to gravity drainage for initial 12 to 24 hours; do NOT initiate feeding immediately.",
          "Monitor abdominal exam hourly for signs of peritoneal irritation, rigidity, or severe tenderness.",
          "Water flush test (30-50 mL sterile water) at 12-24 hours; initiate dilute formula feeds at 24 hours if soft."
      ],
      "dischargeReadinessCriteria": [
          "T-fasteners secure; tube correctly positioned in gastric antrum.",
          "Enteral feeding initiated without pain, leakage, or peritoneal signs.",
          "Attendants trained in tube feeding, flushes, and skin site dressing."
      ],
      "specialPreps": [
          "Pass fine-bore nasogastric tube (Ryle's tube) for gastric air distension on procedure morning.",
          "Prophylactic IV antibiotic (Cefazolin 1g or Cefuroxime 1.5g) administered 30-60 min prior to puncture.",
          "Hold oral intake and suction gastric secretions."
      ]
  },
  "percutaneous-cecostomy-colostomy": {
      "procedureId": "percutaneous-cecostomy-colostomy",
      "category": "Enteric & Gastrointestinal Interventions",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 8,
          "liquids": 4
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Keep gastrostomy tube open to gravity drainage for initial 12 to 24 hours; do NOT initiate feeding immediately.",
          "Monitor abdominal exam hourly for signs of peritoneal irritation, rigidity, or severe tenderness.",
          "Water flush test (30-50 mL sterile water) at 12-24 hours; initiate dilute formula feeds at 24 hours if soft."
      ],
      "dischargeReadinessCriteria": [
          "T-fasteners secure; tube correctly positioned in gastric antrum.",
          "Enteral feeding initiated without pain, leakage, or peritoneal signs.",
          "Attendants trained in tube feeding, flushes, and skin site dressing."
      ],
      "specialPreps": [
          "Pass fine-bore nasogastric tube (Ryle's tube) for gastric air distension on procedure morning.",
          "Prophylactic IV antibiotic (Cefazolin 1g or Cefuroxime 1.5g) administered 30-60 min prior to puncture.",
          "Hold oral intake and suction gastric secretions."
      ]
  },
  "percutaneous-abdominopelvic-abscess-drainage": {
      "procedureId": "percutaneous-abdominopelvic-abscess-drainage",
      "category": "Abscess & Fluid Drainage",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Monitor drain output (color, volume, consistency) every 4 hours.",
          "Observe for bacteremic fever spikes or anaphylaxis (for hydatid).",
          "Flush catheter with 10 mL normal saline twice daily to prevent occlusion."
      ],
      "dischargeReadinessCriteria": [
          "Catheter securely locked, connected to closed drainage bag with zero leakage.",
          "Significant clinical defervescence and reduction in leukocytosis.",
          "Discharge instructions on drain output recording and follow-up scan."
      ],
      "specialPreps": [
          "Review diagnostic CT/US: confirm safe needle window avoiding bowel, spleen, and major vascular structures.",
          "Active IV antibiotics running.",
          "For hydatid cysts: ensure Albendazole 400 mg BID for minimum 7-14 days pre-op, and pre-medicate with IV Hydrocortisone 100 mg and Pheniramine 1h prior."
      ]
  },
  "percutaneous-necrosectomy-won": {
      "procedureId": "percutaneous-necrosectomy-won",
      "category": "Abscess & Fluid Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Monitor drain output (color, volume, consistency) every 4 hours.",
          "Observe for bacteremic fever spikes or anaphylaxis (for hydatid).",
          "Flush catheter with 10 mL normal saline twice daily to prevent occlusion."
      ],
      "dischargeReadinessCriteria": [
          "Catheter securely locked, connected to closed drainage bag with zero leakage.",
          "Significant clinical defervescence and reduction in leukocytosis.",
          "Discharge instructions on drain output recording and follow-up scan."
      ],
      "specialPreps": [
          "Review diagnostic CT/US: confirm safe needle window avoiding bowel, spleen, and major vascular structures.",
          "Active IV antibiotics running.",
          "For hydatid cysts: ensure Albendazole 400 mg BID for minimum 7-14 days pre-op, and pre-medicate with IV Hydrocortisone 100 mg and Pheniramine 1h prior."
      ]
  },
  "hydatid-cyst-pair-procedure": {
      "procedureId": "hydatid-cyst-pair-procedure",
      "category": "Abscess & Fluid Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Monitor drain output (color, volume, consistency) every 4 hours.",
          "Observe for bacteremic fever spikes or anaphylaxis (for hydatid).",
          "Flush catheter with 10 mL normal saline twice daily to prevent occlusion."
      ],
      "dischargeReadinessCriteria": [
          "Catheter securely locked, connected to closed drainage bag with zero leakage.",
          "Significant clinical defervescence and reduction in leukocytosis.",
          "Discharge instructions on drain output recording and follow-up scan."
      ],
      "specialPreps": [
          "Review diagnostic CT/US: confirm safe needle window avoiding bowel, spleen, and major vascular structures.",
          "Active IV antibiotics running.",
          "For hydatid cysts: ensure Albendazole 400 mg BID for minimum 7-14 days pre-op, and pre-medicate with IV Hydrocortisone 100 mg and Pheniramine 1h prior."
      ]
  },
  "hydatid-cyst-pevac-procedure": {
      "procedureId": "hydatid-cyst-pevac-procedure",
      "category": "Abscess & Fluid Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Monitor drain output (color, volume, consistency) every 4 hours.",
          "Observe for bacteremic fever spikes or anaphylaxis (for hydatid).",
          "Flush catheter with 10 mL normal saline twice daily to prevent occlusion."
      ],
      "dischargeReadinessCriteria": [
          "Catheter securely locked, connected to closed drainage bag with zero leakage.",
          "Significant clinical defervescence and reduction in leukocytosis.",
          "Discharge instructions on drain output recording and follow-up scan."
      ],
      "specialPreps": [
          "Review diagnostic CT/US: confirm safe needle window avoiding bowel, spleen, and major vascular structures.",
          "Active IV antibiotics running.",
          "For hydatid cysts: ensure Albendazole 400 mg BID for minimum 7-14 days pre-op, and pre-medicate with IV Hydrocortisone 100 mg and Pheniramine 1h prior."
      ]
  },
  "percutaneous-liver-abscess-drainage": {
      "procedureId": "percutaneous-liver-abscess-drainage",
      "category": "Abscess & Fluid Drainage",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Monitor drain output (color, volume, consistency) every 4 hours.",
          "Observe for bacteremic fever spikes or anaphylaxis (for hydatid).",
          "Flush catheter with 10 mL normal saline twice daily to prevent occlusion."
      ],
      "dischargeReadinessCriteria": [
          "Catheter securely locked, connected to closed drainage bag with zero leakage.",
          "Significant clinical defervescence and reduction in leukocytosis.",
          "Discharge instructions on drain output recording and follow-up scan."
      ],
      "specialPreps": [
          "Review diagnostic CT/US: confirm safe needle window avoiding bowel, spleen, and major vascular structures.",
          "Active IV antibiotics running.",
          "For hydatid cysts: ensure Albendazole 400 mg BID for minimum 7-14 days pre-op, and pre-medicate with IV Hydrocortisone 100 mg and Pheniramine 1h prior."
      ]
  },
  "fallopian-tube-recanalization-ftr": {
      "procedureId": "fallopian-tube-recanalization-ftr",
      "category": "Non-Vascular Diagnostic & Interventional",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 50,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Monitor vascular access puncture site for hematoma, thrill, or active bleeding every 15 min for 1st hour, then every 30 min for 2 hours.",
          "Check peripheral pulse and oxygen saturation in treated extremity.",
          "Record vital signs (BP, Pulse, RR, SpO2) hourly until discharge.",
          "Monitor urine output and hydration status."
      ],
      "dischargeReadinessCriteria": [
          "Complete hemostasis confirmed at access puncture site without hematoma or bruit.",
          "Stable vital signs for minimum 2-4 hours post-procedure.",
          "Pain adequately controlled with oral analgesics.",
          "Patient ambulatory and able to tolerate oral fluids."
      ],
      "specialPreps": []
  },
  "fluoroscopic-esophageal-stricture-dilation": {
      "procedureId": "fluoroscopic-esophageal-stricture-dilation",
      "category": "Enteric & Gastrointestinal Interventions",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.5",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 8,
          "liquids": 4
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Keep gastrostomy tube open to gravity drainage for initial 12 to 24 hours; do NOT initiate feeding immediately.",
          "Monitor abdominal exam hourly for signs of peritoneal irritation, rigidity, or severe tenderness.",
          "Water flush test (30-50 mL sterile water) at 12-24 hours; initiate dilute formula feeds at 24 hours if soft."
      ],
      "dischargeReadinessCriteria": [
          "T-fasteners secure; tube correctly positioned in gastric antrum.",
          "Enteral feeding initiated without pain, leakage, or peritoneal signs.",
          "Attendants trained in tube feeding, flushes, and skin site dressing."
      ],
      "specialPreps": [
          "Pass fine-bore nasogastric tube (Ryle's tube) for gastric air distension on procedure morning.",
          "Prophylactic IV antibiotic (Cefazolin 1g or Cefuroxime 1.5g) administered 30-60 min prior to puncture.",
          "Hold oral intake and suction gastric secretions."
      ]
  },
  "percutaneous-retrieval-embolized-port-fragment": {
      "procedureId": "percutaneous-retrieval-embolized-port-fragment",
      "category": "Venous Thromboembolism & Non-Vascular Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Monitor drain output (color, volume, consistency) every 4 hours.",
          "Observe for bacteremic fever spikes or anaphylaxis (for hydatid).",
          "Flush catheter with 10 mL normal saline twice daily to prevent occlusion."
      ],
      "dischargeReadinessCriteria": [
          "Catheter securely locked, connected to closed drainage bag with zero leakage.",
          "Significant clinical defervescence and reduction in leukocytosis.",
          "Discharge instructions on drain output recording and follow-up scan."
      ],
      "specialPreps": [
          "Review diagnostic CT/US: confirm safe needle window avoiding bowel, spleen, and major vascular structures.",
          "Active IV antibiotics running.",
          "For hydatid cysts: ensure Albendazole 400 mg BID for minimum 7-14 days pre-op, and pre-medicate with IV Hydrocortisone 100 mg and Pheniramine 1h prior."
      ]
  },
  "retroperitoneal-pelvic-hematoma-drainage": {
      "procedureId": "retroperitoneal-pelvic-hematoma-drainage",
      "category": "Abscess & Fluid Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Monitor drain output (color, volume, consistency) every 4 hours.",
          "Observe for bacteremic fever spikes or anaphylaxis (for hydatid).",
          "Flush catheter with 10 mL normal saline twice daily to prevent occlusion."
      ],
      "dischargeReadinessCriteria": [
          "Catheter securely locked, connected to closed drainage bag with zero leakage.",
          "Significant clinical defervescence and reduction in leukocytosis.",
          "Discharge instructions on drain output recording and follow-up scan."
      ],
      "specialPreps": [
          "Review diagnostic CT/US: confirm safe needle window avoiding bowel, spleen, and major vascular structures.",
          "Active IV antibiotics running.",
          "For hydatid cysts: ensure Albendazole 400 mg BID for minimum 7-14 days pre-op, and pre-medicate with IV Hydrocortisone 100 mg and Pheniramine 1h prior."
      ]
  },
  "page-kidney-subcapsular-hematoma-decompression": {
      "procedureId": "page-kidney-subcapsular-hematoma-decompression",
      "category": "Abscess & Fluid Drainage",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Monitor drain output (color, volume, consistency) every 4 hours.",
          "Observe for bacteremic fever spikes or anaphylaxis (for hydatid).",
          "Flush catheter with 10 mL normal saline twice daily to prevent occlusion."
      ],
      "dischargeReadinessCriteria": [
          "Catheter securely locked, connected to closed drainage bag with zero leakage.",
          "Significant clinical defervescence and reduction in leukocytosis.",
          "Discharge instructions on drain output recording and follow-up scan."
      ],
      "specialPreps": [
          "Review diagnostic CT/US: confirm safe needle window avoiding bowel, spleen, and major vascular structures.",
          "Active IV antibiotics running.",
          "For hydatid cysts: ensure Albendazole 400 mg BID for minimum 7-14 days pre-op, and pre-medicate with IV Hydrocortisone 100 mg and Pheniramine 1h prior."
      ]
  },
  "thoracic-duct-embolization": {
      "procedureId": "thoracic-duct-embolization",
      "category": "Lymphatic & Thoracic Interventions",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Hourly monitoring of chest tube or drain output volume and triglyceride levels.",
          "Observe for respiratory distress or oil embolization symptoms.",
          "Monitor abdominal puncture site."
      ],
      "dischargeReadinessCriteria": [
          "Chest drain output markedly diminished (<200 mL/24h) with clearing of chylous opacity.",
          "Normal oxygen saturation on room air.",
          "Vital signs stable and puncture wounds dressed."
      ],
      "specialPreps": [
          "For lymphangiography: patient given high-fat oral intake (butter/heavy cream) 3-4 hours prior to maximize lymphatic chyle flow.",
          "Confirm Lipiodol Ultra-Fluid, micro-infusion pump, and 25G butterfly needles in room.",
          "Review prior CT/MR imaging of cisterna chyli and chest tube output trends."
      ]
  },
  "thoracic-duct-disruption": {
      "procedureId": "thoracic-duct-disruption",
      "category": "Lymphatic & Thoracic Interventions",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Hourly monitoring of chest tube or drain output volume and triglyceride levels.",
          "Observe for respiratory distress or oil embolization symptoms.",
          "Monitor abdominal puncture site."
      ],
      "dischargeReadinessCriteria": [
          "Chest drain output markedly diminished (<200 mL/24h) with clearing of chylous opacity.",
          "Normal oxygen saturation on room air.",
          "Vital signs stable and puncture wounds dressed."
      ],
      "specialPreps": [
          "For lymphangiography: patient given high-fat oral intake (butter/heavy cream) 3-4 hours prior to maximize lymphatic chyle flow.",
          "Confirm Lipiodol Ultra-Fluid, micro-infusion pump, and 25G butterfly needles in room.",
          "Review prior CT/MR imaging of cisterna chyli and chest tube output trends."
      ]
  },
  "retrograde-td-cannulation": {
      "procedureId": "retrograde-td-cannulation",
      "category": "Lymphatic & Thoracic Interventions",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Hourly monitoring of chest tube or drain output volume and triglyceride levels.",
          "Observe for respiratory distress or oil embolization symptoms.",
          "Monitor abdominal puncture site."
      ],
      "dischargeReadinessCriteria": [
          "Chest drain output markedly diminished (<200 mL/24h) with clearing of chylous opacity.",
          "Normal oxygen saturation on room air.",
          "Vital signs stable and puncture wounds dressed."
      ],
      "specialPreps": [
          "For lymphangiography: patient given high-fat oral intake (butter/heavy cream) 3-4 hours prior to maximize lymphatic chyle flow.",
          "Confirm Lipiodol Ultra-Fluid, micro-infusion pump, and 25G butterfly needles in room.",
          "Review prior CT/MR imaging of cisterna chyli and chest tube output trends."
      ]
  },
  "intranodal-lymphangiography": {
      "procedureId": "intranodal-lymphangiography",
      "category": "Lymphatic & Thoracic Interventions",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Hourly monitoring of chest tube or drain output volume and triglyceride levels.",
          "Observe for respiratory distress or oil embolization symptoms.",
          "Monitor abdominal puncture site."
      ],
      "dischargeReadinessCriteria": [
          "Chest drain output markedly diminished (<200 mL/24h) with clearing of chylous opacity.",
          "Normal oxygen saturation on room air.",
          "Vital signs stable and puncture wounds dressed."
      ],
      "specialPreps": [
          "For lymphangiography: patient given high-fat oral intake (butter/heavy cream) 3-4 hours prior to maximize lymphatic chyle flow.",
          "Confirm Lipiodol Ultra-Fluid, micro-infusion pump, and 25G butterfly needles in room.",
          "Review prior CT/MR imaging of cisterna chyli and chest tube output trends."
      ]
  },
  "lymphocele-drainage-sclerotherapy": {
      "procedureId": "lymphocele-drainage-sclerotherapy",
      "category": "Lymphatic & Thoracic Interventions",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Hourly monitoring of chest tube or drain output volume and triglyceride levels.",
          "Observe for respiratory distress or oil embolization symptoms.",
          "Monitor abdominal puncture site."
      ],
      "dischargeReadinessCriteria": [
          "Chest drain output markedly diminished (<200 mL/24h) with clearing of chylous opacity.",
          "Normal oxygen saturation on room air.",
          "Vital signs stable and puncture wounds dressed."
      ],
      "specialPreps": [
          "For lymphangiography: patient given high-fat oral intake (butter/heavy cream) 3-4 hours prior to maximize lymphatic chyle flow.",
          "Confirm Lipiodol Ultra-Fluid, micro-infusion pump, and 25G butterfly needles in room.",
          "Review prior CT/MR imaging of cisterna chyli and chest tube output trends."
      ]
  },
  "image-guided-core-needle-biopsy": {
      "procedureId": "image-guided-core-needle-biopsy",
      "category": "Non-Vascular Diagnostic & Interventional",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 80,000 /μL",
          "inr": "≤ 1.3",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 4,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Strict bed rest for 3 to 4 hours post-biopsy (right lateral decubitus for liver biopsy).",
          "For lung biopsy: obtain upright inspiratory Chest X-ray at 2 hours post-biopsy to rule out pneumothorax.",
          "Vital signs q15m x 1h, then q30m x 2h."
      ],
      "dischargeReadinessCriteria": [
          "Post-biopsy imaging or observation confirms absence of active hemorrhage or symptomatic pneumothorax.",
          "Vital signs normal and puncture site clean and dry.",
          "Patient discharged with instructions to avoid strenuous lifting for 48 hours."
      ],
      "specialPreps": [
          "Review prior imaging: delineate lesion margins and planned coaxial needle trajectory.",
          "Hold Aspirin / NSAIDs 5 days prior; hold DOACs 48 hours prior.",
          "Prepare pathology specimen containers with 10% neutral buffered formalin and saline."
      ]
  },
  "vertebroplasty-kyphoplasty": {
      "procedureId": "vertebroplasty-kyphoplasty",
      "category": "Spine & Musculoskeletal Interventions",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 70,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Strict flat supine bed rest for 1 to 2 hours until PMMA cement completely polymerizes.",
          "Detailed neurological examination of lower extremities (motor power, sensation, deep tendon reflexes).",
          "Assist patient to sit and stand after 2 hours; evaluate back pain score reduction."
      ],
      "dischargeReadinessCriteria": [
          "Pain score markedly reduced; patient ambulatory with or without lumbar support.",
          "No neurological deficits or radicular pain.",
          "Puncture sites clean without hematoma."
      ],
      "specialPreps": [
          "Review MRI spine: confirm acute/subacute bone edema on STIR sequences matching localized pain.",
          "Verify bone cement kit, high-pressure injectors, and biopsy trephines available in suite.",
          "Assess prone positioning tolerance prior to procedure."
      ]
  },
  "osteoid-osteoma-rfa": {
      "procedureId": "osteoid-osteoma-rfa",
      "category": "Spine & Musculoskeletal Interventions",
      "riskTier": "MODERATE",
      "labThresholds": {
          "platelets": "≥ 70,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "Strict flat supine bed rest for 1 to 2 hours until PMMA cement completely polymerizes.",
          "Detailed neurological examination of lower extremities (motor power, sensation, deep tendon reflexes).",
          "Assist patient to sit and stand after 2 hours; evaluate back pain score reduction."
      ],
      "dischargeReadinessCriteria": [
          "Pain score markedly reduced; patient ambulatory with or without lumbar support.",
          "No neurological deficits or radicular pain.",
          "Puncture sites clean without hematoma."
      ],
      "specialPreps": [
          "Review MRI spine: confirm acute/subacute bone edema on STIR sequences matching localized pain.",
          "Verify bone cement kit, high-pressure injectors, and biopsy trephines available in suite.",
          "Assess prone positioning tolerance prior to procedure."
      ]
  },
  "celiac-plexus-neurolysis": {
      "procedureId": "celiac-plexus-neurolysis",
      "category": "Pain & Interventional Neurolysis",
      "riskTier": "LOW",
      "labThresholds": {
          "platelets": "≥ 60,000 /μL",
          "inr": "≤ 1.4",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 6,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "Pre-hydrate with 500-1000 mL Normal Saline bolus pre-procedure to prevent severe splanchnic vasodilation-induced hypotension.",
      "postOpSurveillance": [
          "Measure lying and standing blood pressure to check for orthostatic hypotension.",
          "Observe for 4 hours; encourage oral fluids.",
          "Monitor for transient diarrhea or abdominal cramping."
      ],
      "dischargeReadinessCriteria": [
          "Patient able to stand and walk without symptomatic orthostatic dizziness.",
          "Significant reduction in upper abdominal pain score.",
          "Stable vitals with discharge accompanied by family member."
      ],
      "specialPreps": [
          "Confirm presence of sterile 98% dehydrated absolute alcohol and 0.5% Bupivacaine in pharmacy.",
          "Assess baseline pain score (VAS 0-10) and current daily opioid consumption."
      ]
  },
  "venous-sinus-stenting-iih": {
      "procedureId": "venous-sinus-stenting-iih",
      "category": "Neurovascular Venous Interventions",
      "riskTier": "HIGH",
      "labThresholds": {
          "platelets": "≥ 100,000 /μL",
          "inr": "≤ 1.2",
          "creatinineEgfr": "Cr < 1.5 mg/dL, eGFR > 30 mL/min (Caution if diabetic / baseline renal disease)",
          "hemoglobin": "≥ 8.5 g/dL",
          "viralSerology": "Non-Reactive (HIV, HBsAg, HCV)",
          "specialLabs": "Baseline serum electrolytes (Na, K), blood typing"
      },
      "fastingHours": {
          "solids": 8,
          "liquids": 2
      },
      "medicationHolding": [
          {
              "drug": "Aspirin / Clopidogrel",
              "holdingInstruction": "Hold Clopidogrel 5 days prior if high bleeding risk; Aspirin may be continued in dialysis fistula interventions."
          },
          {
              "drug": "LMWH / Heparin",
              "holdingInstruction": "Hold therapeutic LMWH 24h prior, prophylactic LMWH 12h prior. Hold IV Heparin 4-6h prior."
          },
          {
              "drug": "DOACs (Rivaroxaban/Apixaban)",
              "holdingInstruction": "Hold 48 hours prior (72 hours if eGFR < 50 mL/min)."
          },
          {
              "drug": "Metformin",
              "holdingInstruction": "Hold morning of procedure and 48 hours post-contrast administration."
          },
          {
              "drug": "ACE-Inhibitors / ARBs",
              "holdingInstruction": "Withhold morning dose on procedure day to prevent severe intra-operative hypotension."
          }
      ],
      "preProcedureHydration": "0.9% Normal Saline @ 1.0 mL/kg/h for 4-6 hours pre-procedure and 6 hours post-procedure for contrast nephropathy prophylaxis.",
      "postOpSurveillance": [
          "24-hour HDU/ICU admission with strict systolic BP target (< 130 mmHg).",
          "Hourly Glasgow Coma Scale (GCS) and cranial nerve examinations.",
          "Non-contrast head CT performed before discharge to rule out intracranial bleed or edema."
      ],
      "dischargeReadinessCriteria": [
          "Neurologically intact with resolution of pulsatile tinnitus and headache.",
          "Access groin puncture site closed with vascular closure device or 6-hour manual hold with zero hematoma.",
          "Prescription for dual antiplatelet therapy for 3 to 6 months."
      ],
      "specialPreps": [
          "Dual antiplatelet therapy (Aspirin 150 mg + Clopidogrel 75 mg) loaded for 5 days prior; verify platelet inhibition.",
          "Pre-procedure MR venography or CT venography reviewed with transverse sinus stenosis identified.",
          "Invasive arterial line arranged for continuous intra-procedure blood pressure monitoring."
      ]
  },
};

/** Helper function to retrieve consent template by procedure ID */
export function getVenousOrDialysisConsent(id: string): ProcedureConsentTemplate | undefined {
  return VENOUS_AND_DIALYSIS_CONSENT_TEMPLATES[id];
}

/** Helper function to retrieve clinical preparation criteria by procedure ID */
export function getVenousOrDialysisPrepCriteria(id: string): ClinicalPrepCriteria | undefined {
  return VENOUS_AND_DIALYSIS_PREP_CRITERIA[id];
}

export default VENOUS_AND_DIALYSIS_CONSENT_TEMPLATES;