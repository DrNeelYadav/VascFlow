/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 * 
 * Statutory Specialized Bilingual (Hindi & English) Informed Consent Templates
 * for Musculoskeletal (MSK) Interventions, Sports Medicine, Interventional Spine & Pain Management.
 * Compliant with National Medical Commission (NMC), Indian Medical Council &
 * Supreme Court Guidelines (Samira Kohli vs. Dr. Prabha Manchanda Standard).
 */

import { ProcedureConsentTemplate } from '../consentData';

export const MSK_SPINE_CONSENT_TEMPLATES: Record<string, ProcedureConsentTemplate> = {
  "gae-knee-osteoarthritis": {
    "id": "gae-knee-osteoarthritis",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Transcatheter Arterial Microembolization (TAME) / Genicular Artery Embolization (GAE) for Knee Osteoarthritis",
    "nameHi": "ट्रांसकैथेटर आर्टीरियल माइक्रोएम्बोलाइजेशन (TAME) / जेनिकुलर आर्टरी एम्बोलाइजेशन (GAE - घुटने के गठिया हेतु सूक्ष्म नस बंदी)",
    "indicationEn": "Moderate-to-severe knee osteoarthritis (Kellgren-Lawrence Grade 2-4) with persistent inflammatory pain, joint stiffness, and synovitis unresponsive to physical therapy, NSAIDs, or intra-articular injections.",
    "indicationHi": "घुटने का मध्यम से गंभीर पुराना गठिया (ऑस्टियोआर्थराइटिस), जोड़ों में निरंतर दर्द, जकड़न व सूजन जो दवाइयों, कसरत अथवा घुटने के इंजेक्शन से ठीक न हो रही हो।",
    "descriptionEn": "Under local anesthesia and fluoroscopic X-ray guidance, a tiny microcatheter is navigated from the groin or ankle artery into the genicular branches supplying the inflamed knee synovium. Microscopic calibrated particles or antibiotic emulsion are injected to shut down abnormal neovascular blush and sensory nerve irritation while preserving normal blood supply to the leg.",
    "descriptionHi": "जांघ या टखने की नस में सुन्न करने का इंजेक्शन देकर एक्स-रे की निगरानी में एक बेहद बारीक नली (माइक्रो-कैथेटर) घुटने की सूजी हुई नसों (जेनिकुलर धमनियों) में पहुंचाई जाती है। वहां सूजन पैदा करने वाली अतिरिक्त रक्त वाहिकाओं को सूक्ष्म कणों द्वारा बंद कर दिया जाता है, जिससे घुटने का दर्द व सूजन कम हो जाती है जबकि पैर का सामान्य रक्त संचार पूरी तरह सुरक्षित रहता है।",
    "benefitsEn": [
      "Substantial and durable reduction in chronic arthritic knee pain and stiffness for up to 1-2 years.",
      "Significant improvement in joint mobility, walking distance, and daily physical functioning (WOMAC score).",
      "Minimally invasive alternative that avoids or delays the need for major total knee replacement surgery.",
      "Daycare or overnight procedure with rapid recovery and no surgical joint opening."
    ],
    "benefitsHi": [
      "घुटने के पुराने दर्द एवं जकड़न में 1 से 2 वर्ष तक उल्लेखनीय एवं निरंतर राहत।",
      "चलने-फिरने की क्षमता, सीढ़ियां चढ़ने और दैनिक गतिविधियों में महत्वपूर्ण सुधार।",
      "बिना घुटना बदले (टोटल नी रिप्लेसमेंट सर्जरी के बिना या उसे टालने हेतु) एक सुरक्षित व न्यूनतम चीर-फाड़ वाला उपचार।",
      "प्रक्रिया के बाद उसी दिन या अगले दिन घर वापसी तथा तेजी से सामान्य दिनचर्या में लौटना।"
    ],
    "specificRisksEn": [
      "Transient skin redness, mild blanching, or bruising over the knee (10-20%, resolves within days).",
      "Post-embolization pain, mild swelling, or low-grade fever for 24-48 hours.",
      "Groin or puncture site hematoma, localized bleeding, or pseudoaneurysm formation.",
      "Extremely rare non-target cutaneous necrosis or distal lower extremity thromboembolism (<1%).",
      "Temporary numbness or sensory tingling along the saphenous nerve distribution."
    ],
    "specificRisksHi": [
      "घुटने की त्वचा पर हल्का लालपन, सफेदी या नील पड़ना (10-20% मामलों में, जो कुछ दिनों में स्वतः ठीक हो जाता है)।",
      "प्रक्रिया के बाद 24 से 48 घंटे तक घुटने में हल्का दर्द, सूजन या हल्का बुखार।",
      "जांघ में सुई चुभाने के स्थान पर खून का थक्का जमना (हेमेटोमा) या सूजन।",
      "अत्यंत दुर्लभ परिस्थितियों में त्वचा की सूक्ष्म क्षति या पैर की अन्य नसों में थक्का जाना (<1%)।",
      "पैर में कुछ समय के लिए झनझनाहट या सुन्नपन का एहसास होना।"
    ],
    "alternativesEn": "Conservative medical management (NSAIDs, duloxetine), physical therapy, intra-articular steroid or viscosupplementation injections, genicular nerve radiofrequency neurotomy, or total knee arthroplasty (joint replacement surgery).",
    "alternativesHi": "दर्द निवारक दवाइयां एवं फिजियोथेरेपी, घुटने में स्टेरॉयड या हयालूरोनिक एसिड का इंजेक्शन, जेनिकुलर नर्व रेडियोफ्रीक्वेंसी, अथवा घुटना प्रत्यारोपण का बड़ा ऑपरेशन (टोटल नी रिप्लेसमेंट)।",
    "sedationTypeEn": "Local anesthesia with monitored conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ नस द्वारा हल्की शामक दवा (Conscious Sedation)।"
  },
  "tame-frozen-shoulder": {
    "id": "tame-frozen-shoulder",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Transcatheter Arterial Microembolization for Refractory Frozen Shoulder / Adhesive Capsulitis",
    "nameHi": "ट्रांसकैथेटर आर्टीरियल माइक्रोएम्बोलाइजेशन (TAME - फ्रोजन शोल्डर / कंधे की गंभीर जकड़न हेतु सूक्ष्म नस बंदी)",
    "indicationEn": "Severe, chronic adhesive capsulitis (frozen shoulder) with intractable night pain, severe motion restriction, and capsular hypervascularity refractory to physical therapy and intra-articular injections.",
    "indicationHi": "कंधे की गंभीर पुरानी जकड़न (फ्रोजन शोल्डर / एडहेसिव कैप्सुलाइटिस), रात में असहनीय दर्द, हाथ हिलाने में अत्यधिक असमर्थता जो फिजियोथेरेपी और इंजेक्शन से ठीक न हो रही हो।",
    "descriptionEn": "Under fluoroscopic guidance, a microcatheter is advanced into the branches of the thoracoacromial, anterior/posterior circumflex humeral, or suprascapular arteries supplying the hyperemic shoulder joint capsule. Micro-embolic agents are delivered selectively to suppress pathological neo-vessels and reduce capsular inflammation and severe pain.",
    "descriptionHi": "एक्स-रे की निगरानी में कलाई या जांघ की धमनी से एक माइक्रो-कैथेटर कंधे के जोड़ के चारों ओर सूजन पैदा करने वाली रक्त वाहिकाओं में पहुंचाया जाता है। वहां सूक्ष्म कणों द्वारा असामान्य नसों को बंद किया जाता है, जिससे कंधे के कैप्सूल की सूजन व दर्द में तुरंत गिरावट आती है और हाथ की हरकत खुलने लगती है।",
    "benefitsEn": [
      "Rapid and profound relief of intractable nocturnal resting shoulder pain.",
      "Substantial improvement in glenohumeral joint range of motion and functional recovery.",
      "Avoidance of aggressive manipulation under anesthesia or open/arthroscopic surgical capsular release.",
      "Short outpatient procedure with immediate mobilization."
    ],
    "benefitsHi": [
      "रात में होने वाले कंधे के असहनीय दर्द और नींद में खलल से त्वरित व स्थायी राहत।",
      "कंधे के हिलने-डुलने के दायरे (Range of Motion) और हाथ के उपयोग में उल्लेखनीय सुधार।",
      "बेहोश करके कंधे को जबरन खींचने (मैनिपुलेशन) या दूरबीन से ऑपरेशन (आर्थ्रोस्कोपिक रिलीज) से बचाव।",
      "बिना चीरा लगाए डे-केयर प्रक्रिया जिससे मरीज जल्दी सामान्य काम कर सकता है।"
    ],
    "specificRisksEn": [
      "Transient arm weakness, heaviness, or muscle ache lasting 24-72 hours.",
      "Local skin erythema or cutaneous discoloration around the shoulder girdle.",
      "Puncture site hematoma or arterial spasm in the radial or femoral artery.",
      "Mild post-procedural flare of inflammatory capsular pain.",
      "Rare non-target embolization to muscular branches or distal forearm arteries."
    ],
    "specificRisksHi": [
      "हाथ में 1 से 3 दिन के लिए अस्थायी भारीपन, कमजोरी या मांसपेशियों में खिंचाव।",
      "कंधे के आसपास की त्वचा पर हल्का लालपन या निशान।",
      "कलाई या जांघ के पंक्चर स्थल पर खून का थक्का जमना या नस में सिकुड़न।",
      "प्रक्रिया के बाद 1-2 दिन तक कंधे के दर्द में हल्का अस्थायी उभार।",
      "अत्यंत दुर्लभ मामलों में दवा का अन्य मांसपेशियों की नसों में चले जाना।"
    ],
    "alternativesEn": "Intra-articular corticosteroid hydrodistension, suprascapular nerve block, intensive physical therapy, manipulation under anesthesia (MUA), or arthroscopic surgical capsulotomy.",
    "alternativesHi": "जोड़ में सुई द्वारा पानी व स्टेरॉयड डालकर फुलाना (हाइड्रोडिस्टेंशन), सुप्रास्कैपुलर नर्व ब्लॉक, गहन फिजियोथेरेपी, बेहोशी में मैनिपुलेशन अथवा दूरबीन का ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia with conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक शामक दवा।"
  },
  "tame-lateral-epicondylitis": {
    "id": "tame-lateral-epicondylitis",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Transcatheter Arterial Microembolization for Refractory Lateral Epicondylitis (Tennis Elbow)",
    "nameHi": "ट्रांसकैथेटर आर्टीरियल माइक्रोएम्बोलाइजेशन (TAME - टेनिस एल्बो / कोहनी के पुराने दर्द हेतु सूक्ष्म नस बंदी)",
    "indicationEn": "Chronic refractory lateral epicondylitis (tennis elbow) lasting > 6 months with severe common extensor tendinosis, hypervascularity, and failed conservative treatment, braces, and local injections.",
    "indicationHi": "कोहनी के बाहरी हिस्से का पुराना असाध्य दर्द (टेनिस एल्बो / लैटरल एपिकॉन्डिलाइटिस), स्नायु की पुरानी सूजन व अतिरिक्त नसें, जो आराम, बेल्ट, कसरत अथवा इंजेक्शन के बाद भी 6 महीने से अधिक समय से ठीक न हो रही हों।",
    "descriptionEn": "Under fluoroscopic guidance, a microcatheter is navigated via radial or brachial artery access into the radial recurrent artery supplying the hypervascular common extensor tendon origin. A calibrated embolic suspension is infused to eliminate abnormal neo-vessels that drive chronic pain and hyperalgesia.",
    "descriptionHi": "कलाई या बांह की धमनी से एक सूक्ष्म नली को कोहनी की रेडियल रिकरेंट धमनी में पहुंचाया जाता है। वहां एक्स-रे में दिखने वाली दर्द कारक असामान्य नसों में सूक्ष्म कण प्रवाहित कर उन्हें बंद किया जाता है, जिससे स्नायु का पुराना दर्द समाप्त होता है और घाव भरने की प्रक्रिया तेज होती है।",
    "benefitsEn": [
      "Durable resolution of elbow pain and tenderness during gripping and lifting activities.",
      "Restoration of forearm grip strength and return to sports or manual work.",
      "Avoidance of open surgical common extensor release or tendon debridement.",
      "Pinhole access without surgical incision, stitches, or prolonged splinting."
    ],
    "benefitsHi": [
      "हाथ से वजन उठाने, मुट्ठी भींचने और कोहनी मोड़ने के दौरान होने वाले दर्द में स्थायी राहत।",
      "हाथ की पकड़ की ताकत (Grip Strength) और काम करने की क्षमता की बहाली।",
      "कोहनी के खुले ऑपरेशन या स्नायु की चीर-फाड़ से बचाव।",
      "बिना टांके व बिना बड़े प्लास्टर के सुई के रास्ते से सुरक्षित उपचार।"
    ],
    "specificRisksEn": [
      "Transient skin blanching, mottled redness, or mild dysesthesia over the lateral elbow.",
      "Access site hematoma, radial spasm, or mild forearm ecchymosis.",
      "Temporary post-embolization ache or stiffness for 48 hours.",
      "Rare non-target embolization to deep interosseous or radial artery distribution."
    ],
    "specificRisksHi": [
      "कोहनी के बाहरी हिस्से पर हल्का लालपन, त्वचा का हल्का सफेद पड़ना या झनझनाहट।",
      "कलाई या बांह के पंक्चर स्थल पर नील पड़ना, नस की सिकुड़न या सूजन।",
      "प्रक्रिया के बाद 2 दिनों तक कोहनी में हल्का दर्द या खिंचाव।",
      "अत्यंत दुर्लभ स्थिति में हाथ की मुख्य धमनी में दवा का रिसाव।"
    ],
    "alternativesEn": "PRP or autologous blood injection, tendon dry needling, ultrasound-guided barbotage, extracorporeal shockwave therapy (ESWT), or open/arthroscopic Nirschl surgical release.",
    "alternativesHi": "पीआरपी (PRP) या खून का इंजेक्शन, ड्राई नीडलिंग, शॉकवेव थेरेपी, अथवा कोहनी का खुला या दूरबीन द्वारा ऑपरेशन (Nirschl Surgical Release)।",
    "sedationTypeEn": "Local anesthesia with mild intravenous sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा हल्की दर्द निवारक दवा।"
  },
  "tame-plantar-fasciitis": {
    "id": "tame-plantar-fasciitis",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Transcatheter Arterial Microembolization for Refractory Plantar Fasciitis",
    "nameHi": "ट्रांसकैथेटर आर्टीरियल माइक्रोएम्बोलाइजेशन (TAME - प्लांटर फैसाइटिस / एड़ी के पुराने दर्द हेतु सूक्ष्म नस बंदी)",
    "indicationEn": "Intractable plantar fasciitis persisting > 6 months with severe first-step morning heel pain, thick hypervascular plantar fascia, and failure of orthotics, night splints, physiotherapy, and steroid/PRP injections.",
    "indicationHi": "एड़ी के तलवे का पुराना दर्द (प्लांटर फैसाइटिस), सुबह उठते ही जमीन पर पैर रखने में तेज चुभन, जो जूते के सोल (Orthotics), कसरत और इंजेक्शन के बाद भी 6 महीने से अधिक समय से ठीक न हुआ हो।",
    "descriptionEn": "Under fluoroscopic guidance, through a small puncture in the pedal, tibial, or femoral artery, a microcatheter is guided into the medial/lateral plantar arteries supplying the hyperemic calcaneal insertion of the plantar fascia. Calibrated microparticles are injected to seal the inflammatory neo-capillaries.",
    "descriptionHi": "पैर या जांघ की धमनी में बारीक सुई डालकर एक्स-रे की निगरानी में एक सूक्ष्म नली एड़ी की प्लांटर धमनियों तक पहुंचाई जाती है। एड़ी की हड्डी के पास जहां स्नायु जुड़ा होता है, वहां सूजी हुई अवांछित नसों को सूक्ष्म कणों द्वारा बंद कर दिया जाता है जिससे नसों की सूजन व सुबह का तीखा दर्द समाप्त हो जाता है।",
    "benefitsEn": [
      "Substantial reduction in morning startup pain and weight-bearing heel discomfort.",
      "Marked improvement in walking endurance and daily standing capacity.",
      "Avoidance of open or endoscopic plantar fascia surgical release.",
      "Rapid recovery without casting or protracted immobilization."
    ],
    "benefitsHi": [
      "सुबह उठकर पहला कदम रखने पर होने वाले असहनीय दर्द और एड़ी की चुभन से स्थायी छुटकारा।",
      "लंबे समय तक खड़े रहने और पैदल चलने की क्षमता में वृद्धि।",
      "एड़ी की चीर-फाड़ या दूरबीन के ऑपरेशन (Plantar Fascia Release) से बचाव।",
      "बिना प्लास्टर लगाए त्वरित रिकवरी और जल्द चलना-फिरना शुरू होना।"
    ],
    "specificRisksEn": [
      "Transient plantar foot numbness, paresthesia, or mild aching for 2-5 days.",
      "Puncture site bruising or hematoma at the anterior/posterior tibial or femoral access.",
      "Temporary localized plantar skin discoloration or blanching.",
      "Rare digital or pedal ischemic complications (<1%)."
    ],
    "specificRisksHi": [
      "पैर के तलवे में 2 से 5 दिन तक हल्का सुन्नपन, झनझनाहट या भारीपन।",
      "पैर या जांघ के पंक्चर स्थल पर नील पड़ना या खून का थक्का जमना।",
      "एड़ी की त्वचा का रंग हल्का बदलना जो समय के साथ सामान्य हो जाता है।",
      "पैर की उंगलियों में खून की कमी होने का अत्यंत दुर्लभ जोखिम (<1%)।"
    ],
    "alternativesEn": "Custom orthotic insoles, extracorporeal shockwave therapy, ultrasound-guided PRP injection, botulinum toxin injection, or endoscopic plantar fasciotomy.",
    "alternativesHi": "कस्टम इनसोल और जूते के पैड, शॉकवेव थेरेपी, अल्ट्रासाउंड गाइडेड पीआरपी (PRP) या बोटॉक्स इंजेक्शन, अथवा प्लांटर फेशियोटॉमी सर्जरी।",
    "sedationTypeEn": "Local anesthesia with monitored conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ हल्की शामक दवा।"
  },
  "tame-achilles-tendinopathy": {
    "id": "tame-achilles-tendinopathy",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Transcatheter Arterial Microembolization for Chronic Achilles Tendinopathy",
    "nameHi": "ट्रांसकैथेटर आर्टीरियल माइक्रोएम्बोलाइजेशन (TAME - अकिलीस टेंडिनोपैथी / एड़ी के पिछले स्नायु की सूजन हेतु नस बंदी)",
    "indicationEn": "Chronic midportion or insertional Achilles tendinopathy with recalcitrant morning stiffness, pain on running or jumping, tendon thickening with Doppler neovascularization refractory to eccentric loading, orthotics, and physiotherapy.",
    "indicationHi": "एड़ी के मुख्य पिछले स्नायु (अकिलीस टेंडन) की पुरानी सूजन, दर्द व अकड़न, चलने-दौड़ने में दर्द, स्नायु में अत्यधिक अवांछित नसें जो नियमित फिजियोथेरेपी व आराम से ठीक न हो रही हों।",
    "descriptionEn": "Under fluoroscopic roadmap guidance, an ultra-microcatheter is navigated into posterior tibial and peroneal arterial perforators supplying the neovascularized Achilles tendon paratenon. A temporary or calibrated micro-embolic agent is carefully infused until pathological hyperemic blush resolves.",
    "descriptionHi": "एक्स-रे की मदद से पैर की धमनी से एक अति-सूक्ष्म कैथेटर को अकिलीस टेंडन के आसपास की सूजन वाली सूक्ष्म धमनियों में ले जाया जाता है। वहां विशेष कणों का घोल डालकर उन अवांछित नसों को बंद किया जाता है जो स्नायु में लगातार दर्द का संकेत भेजती रहती हैं।",
    "benefitsEn": [
      "Substantial relief of chronic pain during walking, running, and athletic training.",
      "Reduction in tendon swelling and reversal of pathological neovascularization.",
      "Preservation of native tendon structural continuity without surgical resection.",
      "Early return to rehabilitation and athletic conditioning."
    ],
    "benefitsHi": [
      "चलने, दौड़ने और खेलकूद के दौरान एड़ी के पिछले हिस्से के दर्द से दीर्घकालिक राहत।",
      "टेंडन की सूजन में कमी और स्नायु का सामान्य रूप में लौटना।",
      "टेंडन को काटने या सिलने के जोखिम भरे ऑपरेशन से बचाव।",
      "तेजी से व्यायाम और सामान्य जीवन में वापसी।"
    ],
    "specificRisksEn": [
      "Transient posterior calf or heel discomfort for 24-72 hours.",
      "Puncture site ecchymosis, hematoma, or arterial spasm.",
      "Temporary skin blanching or sensitivity in the retrocalcaneal area.",
      "Extremely rare tendon necrosis or rupture (<0.5%)."
    ],
    "specificRisksHi": [
      "पिंडली या एड़ी के पिछले हिस्से में 1 से 3 दिन तक हल्का खिंचाव या दर्द।",
      "सुई लगाने के स्थान पर नील पड़ना या खून का थक्का जमना।",
      "एड़ी की त्वचा पर अस्थायी सफेदी या संवेदनशीलता।",
      "टेंडन की क्षति या फटने का अत्यंत दुर्लभ खतरा (<0.5%)।"
    ],
    "alternativesEn": "Eccentric exercise rehabilitation, high-volume image-guided saline injection (HVIGI), ultrasound-guided dry needling or PRP, extracorporeal shockwave therapy, or surgical tendon debridement.",
    "alternativesHi": "गहन टेंडन कसरत, हाई-वॉल्यूम सलाइन इंजेक्शन, अल्ट्रासाउंड द्वारा पीआरपी (PRP) या ड्राई नीडलिंग, शॉकवेव थेरेपी, अथवा टेंडन डिब्राइडमेंट सर्जरी।",
    "sedationTypeEn": "Local anesthesia with conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और हल्की शामक दवा।"
  },
  "tame-patellar-tendinopathy": {
    "id": "tame-patellar-tendinopathy",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Transcatheter Arterial Microembolization for Patellar Tendinopathy (Jumper's Knee)",
    "nameHi": "ट्रांसकैथेटर आर्टीरियल माइक्रोएम्बोलाइजेशन (TAME - पटेलर टेंडिनोपैथी / जम्पर्स नी हेतु सूक्ष्म नस बंदी)",
    "indicationEn": "Chronic symptomatic patellar tendinopathy (Jumper's knee) in athletes or active individuals with intractable anterior knee pain, tendon hypoechogenicity, and marked Doppler neovascularity unresponsive to eccentric training and injections.",
    "indicationHi": "घुटने की कटोरी के नीचे मुख्य स्नायु की पुरानी सूजन (पटेलर टेंडिनोपैथी / जम्पर्स नी), कूदने, दौड़ने या सीढ़ी चढ़ने पर तीव्र दर्द, स्नायु में अतिरिक्त नसों का जाल जो आराम और कसरत से ठीक न हो रहा हो।",
    "descriptionEn": "Under fluoroscopic guidance, a microcatheter is positioned in the inferior patellar branch of the descending genicular or inferior medial/lateral genicular arteries. Microscopic embolic particles are gently delivered to occlude the pathological hypervascular plexus at the inferior patellar pole.",
    "descriptionHi": "एक्स-रे की मदद से सूक्ष्म कैथेटर को घुटने की कटोरी के नीचे खून पहुंचाने वाली जेनिकुलर धमनियों में डाला जाता है। वहां टेंडन में दर्द पैदा करने वाली अतिरिक्त सूक्ष्म नसों को सूक्ष्म कणों द्वारा बंद कर दिया जाता है, जिससे घुटने के सामने का पुराना दर्द समाप्त हो जाता है।",
    "benefitsEn": [
      "Rapid resolution of anterior knee loading pain and patellar tendon tenderness.",
      "Restoration of jumping, squatting, and sports performance capability (VISA-P score).",
      "Avoidance of open or arthroscopic surgical patellar tendon scraping or excision.",
      "Minimally invasive pinhole procedure without leg cast or prolonged immobilization."
    ],
    "benefitsHi": [
      "घुटने के सामने होने वाले चुभन भरे दर्द और कटोरी के नीचे की सूजन से त्वरित राहत।",
      "कूदने, दौड़ने और खेलकूद में पुनः भाग लेने की क्षमता की बहाली।",
      "घुटने के खुले या दूरबीन द्वारा किए जाने वाले जटिल ऑपरेशन से बचाव।",
      "बिना प्लास्टर और बिना लंबे समय तक बिस्तर पर रहे शीघ्र स्वास्थ्य लाभ।"
    ],
    "specificRisksEn": [
      "Transient infrapatellar skin discoloration, mild redness, or dysesthesia.",
      "Access site hematoma in the common femoral or pedal artery.",
      "Temporary post-procedure knee soreness for 48 hours.",
      "Extremely rare non-target embolization to knee articular cartilage branches."
    ],
    "specificRisksHi": [
      "घुटने की कटोरी के नीचे की त्वचा पर हल्का लालपन या संवेदनशीलता।",
      "जांघ या पैर के पंक्चर स्थल पर नील पड़ना या रक्त संचय होना।",
      "प्रक्रिया के बाद 2 दिनों तक घुटने में हल्का दर्द व कसाव।",
      "घुटने के अन्य हिस्सों में दवा जाने का अत्यंत दुर्लभ जोखिम।"
    ],
    "alternativesEn": "Decline board eccentric rehabilitation, ultrasound-guided tendon fenestration, PRP injection, shockwave therapy, or open/arthroscopic tendon debridement.",
    "alternativesHi": "विशिष्ट व्यायाम, अल्ट्रासाउंड गाइडेड पीआरपी (PRP) या ड्राई नीडलिंग, शॉकवेव थेरेपी, अथवा दूरबीन द्वारा टेंडन की सफाई का ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia with conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) के साथ नस द्वारा शामक दवा।"
  },
  "usg-barbotage-shoulder-supraspinatus": {
    "id": "usg-barbotage-shoulder-supraspinatus",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Barbotage / Lavage of Calcific Tendinitis of the Shoulder (Supraspinatus)",
    "nameHi": "अल्ट्रासाउंड-गाइडेड बार्बोटेज एवं लवाज (कंधे के सुप्रास्पाइनेटस टेंडन में जमे कैल्शियम को धोकर निकालना)",
    "indicationEn": "Acute or chronic calcific tendinitis of the shoulder rotator cuff (supraspinatus/infraspinatus) with severe resting pain, limited abduction, and dense intratendinous calcification on ultrasound or X-ray.",
    "indicationHi": "कंधे के रोटेटर कफ स्नायु (सुप्रास्पाइनेटस) में कैल्शियम का पत्थर जैसा जमाव (कैल्सीफिक टेंडिनाइटिस), कंधे का तेज चुभन भरा दर्द, हाथ ऊपर न उठ पाना जो सामान्य दवाइयों से ठीक न हो रहा हो।",
    "descriptionEn": "Under continuous high-resolution ultrasound guidance, local anesthetic is placed around the tendon and subacromial bursa. One or two 18-20G needles are inserted directly into the calcium deposit. Warm saline is repeatedly flushed and aspirated (barbotage) to dissolve and aspirate the milky calcium paste, followed by a subacromial corticosteroid injection to suppress inflammatory bursitis.",
    "descriptionHi": "उच्च क्षमता वाली सोनोग्राफी मशीन की निरंतर निगरानी में कंधे को सुन्न किया जाता है। एक या दो विशेष सुइयों को सीधे टेंडन में जमे कैल्शियम के अंदर डाला जाता है। गुनगुने सलाइन के पानी से बार-बार धोकर चूने जैसे कैल्शियम को घोलकर बाहर खींच लिया जाता है, और अंत में सूजन रोकने हेतु सब-एक्रोमियल बर्सा में दवा डाल दी जाती है।",
    "benefitsEn": [
      "Direct mechanical removal of the calcium deposit providing dramatic pain relief.",
      "Rapid restoration of shoulder mobility, arm elevation, and restful sleep.",
      "Avoidance of arthroscopic surgical calcium debridement or cuff repair.",
      "Performed in the ultrasound procedure room without surgical incision or stitches."
    ],
    "benefitsHi": [
      "जमे हुए कैल्शियम को सुई द्वारा बाहर निकाल देने से कंधे के तीव्र दर्द से तुरंत भारी राहत।",
      "हाथ को ऊपर उठाने और घुमाने की पूरी क्षमता की त्वरित वापसी तथा चैन की नींद।",
      "कंधे के दूरबीन द्वारा ऑपरेशन (आर्थ्रोस्कोपी) और स्नायु काटने के खतरे से बचाव।",
      "बिना किसी चीरे या टांके के सोनोग्राफी रूम में ही सुरक्षित रूप से संपन्न।"
    ],
    "specificRisksEn": [
      "Transient post-procedure pain flare lasting 24-48 hours due to micro-crystalline release.",
      "Incomplete calcium aspiration (dense hard phase calcium may only partially dissolve).",
      "Subdeltoid or intratendinous hematoma or minor localized bleeding.",
      "Rare infection (septic bursitis or tendon infection, <0.1%).",
      "Extremely rare iatrogenic rotator cuff tendon tear from aggressive needle fenestration."
    ],
    "specificRisksHi": [
      "कैल्शियम के कणों के हिलने से प्रक्रिया के बाद 24 से 48 घंटे तक कंधे के दर्द में हल्का अस्थायी उभार।",
      "यदि कैल्शियम बहुत सख्त/पथरीला हो तो उसका केवल आंशिक हिस्सा ही निकल पाना।",
      "सुई के स्थान पर हल्का खून जमा होना या नील पड़ना।",
      "संक्रमण का अत्यंत दुर्लभ खतरा (<0.1%)।",
      "स्नायु में सूक्ष्म चोट लगने की अत्यंत दुर्लभ संभावना।"
    ],
    "alternativesEn": "Extracorporeal shockwave therapy (ESWT), oral NSAIDs and watchful waiting, blind subacromial steroid injection, or arthroscopic surgical calcium excision.",
    "alternativesHi": "शॉकवेव थेरेपी (ESWT), केवल दर्द निवारक गोलियां, सामान्य सब-एक्रोमियल स्टेरॉयड इंजेक्शन, अथवा दूरबीन का ऑपरेशन (आर्थ्रोस्कोपिक रिमूवल)।",
    "sedationTypeEn": "Local anesthesia with optional mild oral/IV anxiolysis.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) आवश्यकतानुसार हल्की चिंता निवारक दवा के साथ।"
  },
  "usg-barbotage-achilles": {
    "id": "usg-barbotage-achilles",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Calcific Tendinitis Barbotage of the Achilles Tendon",
    "nameHi": "अल्ट्रासाउंड-गाइडेड अकिलीस टेंडन बार्बोटेज (एड़ी के मुख्य स्नायु में जमे कैल्शियम का निष्कासन)",
    "indicationEn": "Symptomatic calcific tendinitis of the Achilles tendon (insertional or midsubstance) with localized sharp pain, mechanical friction, and discrete intratendinous calcified foci unresponsive to conservative care.",
    "indicationHi": "एड़ी के मुख्य स्नायु (अकिलीस टेंडन) में कैल्शियम का जमाव, चलने पर एड़ी के पीछे तेज चुभन, जो दवाइयों व कुशन पैड से ठीक न हो रही हो।",
    "descriptionEn": "Under real-time ultrasound guidance, local anesthesia is injected around the paratenon. A needle is introduced into the calcified mass within the Achilles tendon. Repeated pulsing with sterile saline breaks down and washes out the calcium crystals without harming surrounding healthy tendon fibers.",
    "descriptionHi": "सोनोग्राफी की निगरानी में एड़ी के टेंडन के आसपास का हिस्सा सुन्न किया जाता है। एक बारीक सुई को सीधे टेंडन में जमे कैल्शियम में डालकर सलाइन द्वारा धोकर चूने जैसे जमाव को बाहर निकाला जाता है, जिससे स्नायु पर दबाव और घर्षण समाप्त हो जाता है।",
    "benefitsEn": [
      "Removal of calcium nidus that creates chronic tendon mechanical irritation.",
      "Significant reduction in posterior heel pain during walking and stair climbing.",
      "Minimally invasive alternative to open surgical calcification debridement.",
      "Preserves Achilles tendon structural integrity and minimizes rupture risk."
    ],
    "benefitsHi": [
      "कठोर कैल्शियम को निकाल देने से एड़ी के लगातार होने वाले घर्षण और दर्द का खात्मा।",
      "चलने, दौड़ने और सीढ़ियां चढ़ने में तुरंत सहूलियत।",
      "एड़ी की चीर-फाड़ वाले बड़े ऑपरेशन से बचाव।",
      "स्नायु की मजबूती को सुरक्षित रखते हुए उसके फटने के खतरे को कम करना।"
    ],
    "specificRisksEn": [
      "Post-barbotage soreness and localized heel swelling for 2-4 days.",
      "Minor puncture site bleeding or superficial bruising.",
      "Partial calcium retention if deposits are heavily ossified.",
      "Extremely rare Achilles tendon tear or tendon rupture (<0.5%)."
    ],
    "specificRisksHi": [
      "प्रक्रिया के बाद 2 से 4 दिन तक एड़ी में हल्का दर्द या सूजन।",
      "सुई के स्थान पर मामूली रक्तस्राव या नील पड़ना।",
      "यदि कैल्शियम अत्यधिक पथरीला हो तो कुछ भाग का अंदर रह जाना।",
      "टेंडन के फटने का अत्यंत दुर्लभ जोखिम (<0.5%)।"
    ],
    "alternativesEn": "Extracorporeal shockwave therapy, heel lift orthotics, eccentric exercises, or open surgical tendon debridement with calcification excision.",
    "alternativesHi": "शॉकवेव थेरेपी, हील लिफ्ट पैड, विशिष्ट व्यायाम, अथवा खुला ऑपरेशन करके टेंडन की सफाई।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-tendon-fenestration-dry-needling": {
    "id": "usg-tendon-fenestration-dry-needling",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Percutaneous Tendon Fenestration / Dry Needling (Patellar / Common Extensor)",
    "nameHi": "अल्ट्रासाउंड-गाइडेड परक्यूटेनियस टेंडन फेनेस्ट्रेशन / ड्राई नीडलिंग (पटेलर / कोहनी स्नायु में सूक्ष्म छिद्रण उपचार)",
    "indicationEn": "Chronic recalcitrant tendinopathy (patellar, lateral epicondyle, hamstring, gluteal) characterized by degenerative tendinosis, collagen disorganization, and failure to heal with conservative therapy.",
    "indicationHi": "पुराना असाध्य टेंडन विकार (घुटने की कटोरी, कोहनी का टेनिस एल्बो, कूल्हा या हैमस्ट्रिंग स्नायु), स्नायु के तंतुओं की विकृति जो साधारण उपचार से न भर रही हो।",
    "descriptionEn": "Under high-frequency ultrasound guidance, local anesthesia is administered to the overlying tissues while sparing the tendon substance. A 20-22G needle is repeatedly passed through the diseased hypoechoic tendinopathic area 20-30 times. This disrupts the chronic degenerative scar, causes local bleeding, releases autologous growth factors, and converts a chronic non-healing state into an active healing cascade.",
    "descriptionHi": "सोनोग्राफी की सीधी निगरानी में चमड़ी को सुन्न करने के बाद एक बारीक सुई द्वारा खराब और कमजोर हो चुके स्नायु में 20 से 30 बार सूक्ष्म छिद्र (Fenestration) किए जाते हैं। इससे वहां नया रक्त संचार शुरू होता है, शरीर के प्राकृतिक हीलिंग तत्व सक्रिय होते हैं और पुराना सड़ा हुआ स्नायु दोबारा स्वस्थ होने लगता है।",
    "benefitsEn": [
      "Triggers the body's natural tendon regeneration and collagen remodeling cascade.",
      "Breakdown of painful degenerative fibrocartilaginous scar tissue.",
      "High rate of long-term symptomatic relief and return to activity.",
      "Inexpensive, safe, and completely avoids surgical tendon exploration."
    ],
    "benefitsHi": [
      "शरीर की प्राकृतिक स्नायु पुनर्जनन (Tendon Healing) प्रक्रिया को सक्रिय करना।",
      "दर्द कारक पुराने रेशेदार निशान (Scar Tissue) को तोड़कर नए स्वस्थ तंतु बनाना।",
      "बिना किसी चीर-फाड़ के दीर्घकालिक दर्द से मुक्ति और खेलों में वापसी।",
      "अत्यंत सुरक्षित एवं ओपीडी आधारित आधुनिक प्रक्रिया।"
    ],
    "specificRisksEn": [
      "Post-procedure localized soreness, aching, or tightness for 3-7 days.",
      "Localized subcutaneous ecchymosis or minor hematoma.",
      "Transient worsening of pain before tissue remodeling takes effect.",
      "Extremely rare tendon rupture if aggressive loading occurs before tissue healing."
    ],
    "specificRisksHi": [
      "प्रक्रिया के बाद 3 से 7 दिनों तक संबंधित जोड़ या स्नायु में भारीपन, खिंचाव या दर्द।",
      "त्वचा के नीचे हल्का नील पड़ना।",
      "शुरुआती कुछ दिनों में दर्द का थोड़ा सा बढ़ना (जो हीलिंग प्रक्रिया का हिस्सा है)।",
      "पूरी तरह ठीक होने से पहले अत्यधिक वजन उठाने पर स्नायु को नुकसान पहुंचने का दुर्लभ जोखिम।"
    ],
    "alternativesEn": "PRP injection, extracorporeal shockwave therapy, nitroglycerin patches, eccentric exercise rehabilitation, or open surgical tendon debridement.",
    "alternativesHi": "पीआरपी (PRP) का इंजेक्शन, शॉकवेव थेरेपी, विशिष्ट फिजियोथेरेपी अथवा खुला सर्जिकल ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-prp-tendinopathy": {
    "id": "usg-prp-tendinopathy",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Platelet-Rich Plasma (PRP) Injection for Tendinopathy",
    "nameHi": "अल्ट्रासाउंड-गाइडेड प्लेटलेट-रिच प्लाज्मा (PRP) इंजेक्शन (स्नायु विकारों हेतु जैविक हीलिंग उपचार)",
    "indicationEn": "Chronic tendinopathy (Achilles, patellar, rotator cuff, lateral epicondyle, plantar fascia) with partial tears, hypoechoic clefts, or persistent tendinosis refractory to standard conservative care.",
    "indicationHi": "स्नायुओं की पुरानी सूजन व आंशिक फटन (अकिलीस, घुटना, कंधा, कोहनी या तलवा), स्नायु में दरारें जो कसरत और साधारण दवाइयों से न भर रही हों।",
    "descriptionEn": "A small sample (20-60 mL) of the patient's own peripheral venous blood is drawn and centrifuged under sterile conditions to concentrate platelets and healing growth factors (PDGF, TGF-beta, VEGF). Under real-time ultrasound guidance, the autologous PRP is precisely injected directly into the torn or degenerated tendon fibers.",
    "descriptionHi": "मरीज की बांह से 20 से 60 मिलीलीटर खून लेकर एक विशेष सेंट्रीफ्यूज मशीन द्वारा रक्त के घाव भरने वाले तत्वों और प्लेटलेट्स को कई गुना सांद्रित (PRP) किया जाता है। इसके बाद अल्ट्रासाउंड की सीधी निगरानी में इस अमृत समान प्राकृतिक प्लाज्मा को सीधे फटे हुए या कमजोर स्नायु के अंदर सुई से इंजेक्ट कर दिया जाता है।",
    "benefitsEn": [
      "Accelerated biological tendon healing, collagen synthesis, and neovascular repair.",
      "Autologous biological product with zero risk of allergic reaction, rejection, or disease transmission.",
      "Durable long-term reduction in pain and prevention of progressive complete tendon tears.",
      "Avoidance of repeated corticosteroid injections which can cause tendon rupture or atrophy."
    ],
    "benefitsHi": [
      "शरीर के अपने प्राकृतिक तत्वों द्वारा स्नायु के तंतुओं का तेजी से पुनः निर्माण और घाव भरना।",
      "मरीज के स्वयं के रक्त से तैयार होने के कारण एलर्जी, रिएक्शन या बीमारी फैलने का शून्य खतरा।",
      "दर्द से स्थायी राहत और टेंडन को पूरी तरह फटने से बचाने में प्रभावी।",
      "बार-बार स्टेरॉयड इंजेक्शन के दुष्प्रभावों (स्नायु का कमजोर होना या फटना) से मुक्ति।"
    ],
    "specificRisksEn": [
      "Moderate inflammatory pain flare and stiffness for 48-96 hours as healing begins.",
      "Local bruising, swelling, or skin erythema at the injection site.",
      "Delayed therapeutic onset (symptom improvement typically takes 2-6 weeks).",
      "Extremely rare needle tract infection (<0.05%)."
    ],
    "specificRisksHi": [
      "इंजेक्शन के बाद 2 से 4 दिनों तक जोड़ में सूजन व दर्द का हल्का उभार (प्राकृतिक हीलिंग शुरू होने के कारण)।",
      "इंजेक्शन के स्थान पर हल्का नील पड़ना या सूजन।",
      "आराम मिलने में 2 से 6 सप्ताह का समय लगना (क्योंकि यह प्राकृतिक जैविक उपचार है)।",
      "संक्रमण का अत्यंत दुर्लभ जोखिम (<0.05%)।"
    ],
    "alternativesEn": "Corticosteroid injection (provides short-term relief but risks tendon weakening), dry needling, autologous whole blood injection, physical therapy, or surgical repair.",
    "alternativesHi": "स्टेरॉयड इंजेक्शन (अल्पकालिक राहत देता है पर स्नायु को कमजोर कर सकता है), ड्राई नीडलिंग, फिजियोथेरेपी अथवा सर्जरी।",
    "sedationTypeEn": "Local anesthesia (buffering without local anesthetic in tendon to preserve platelet activation).",
    "sedationTypeHi": "स्थानीय सुन्नता (त्वचा पर Local Anesthesia, प्लेटलेट की सक्रियता बनाए रखने हेतु)।"
  },
  "autologous-blood-injection-epicondylitis": {
    "id": "autologous-blood-injection-epicondylitis",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Autologous Blood Injection for Chronic Epicondylitis",
    "nameHi": "ऑटोलॉगस ब्लड इंजेक्शन (कोहनी के पुराने टेनिस एल्बो हेतु मरीज के अपने रक्त का इंजेक्शन)",
    "indicationEn": "Chronic lateral or medial epicondylitis with persistent tendinosis and angiofibroblastic degeneration refractory to physiotherapy, splinting, and analgesics.",
    "indicationHi": "कोहनी का पुराना टेनिस एल्बो अथवा गोल्फर्स एल्बो, स्नायु में पुराना दर्द जो फिजियोथेरेपी व दवाइयों से ठीक न हुआ हो।",
    "descriptionEn": "Under strict aseptic precautions, 2-3 mL of the patient's own uncoagulated venous blood is aspirated from the cubital vein. Under real-time ultrasound guidance, the autologous blood is injected into the degenerate common extensor tendon origin with gentle needle fenestration to stimulate a cellular proliferative healing response.",
    "descriptionHi": "मरीज की बांह से 2-3 मिलीलीटर ताजा रक्त निकालकर अल्ट्रासाउंड की सीधी निगरानी में तुरंत कोहनी के कमजोर स्नायु में इंजेक्ट किया जाता है और सुई से हल्के सूक्ष्म छिद्र किए जाते हैं ताकि रक्त में मौजूद वृद्धि कारक स्नायु की मरम्मत शुरू कर सकें।",
    "benefitsEn": [
      "Cost-effective biological stimulus for tendon regeneration.",
      "Utilizes patient's own cellular mediators without foreign substances or preservatives.",
      "Significant reduction in elbow tenderness and improvement in grip force.",
      "Avoidance of open surgical tendon release."
    ],
    "benefitsHi": [
      "स्नायु की मरम्मत के लिए एक किफायती और प्राकृतिक जैविक उपचार।",
      "मरीज के अपने ही रक्त का उपयोग, जिससे किसी बाहरी रसायन या एलर्जी का डर नहीं।",
      "कोहनी के दर्द में कमी और हाथ की मुट्ठी की ताकत में सुधार।",
      "कोहनी के सर्जिकल ऑपरेशन से बचाव।"
    ],
    "specificRisksEn": [
      "Localized pain flare and tenderness for 3-5 days after injection.",
      "Elbow stiffness and temporary reduction in grip strength during the initial week.",
      "Bruising at the venipuncture or elbow injection sites.",
      "Rare risk of superficial soft tissue infection."
    ],
    "specificRisksHi": [
      "इंजेक्शन के बाद 3 से 5 दिनों तक कोहनी में दर्द या भारीपन।",
      "शुरुआती हफ्ते में हाथ की पकड़ में थोड़ी कमजोरी या अकड़न।",
      "खून निकालने या इंजेक्शन लगाने की जगह पर नील पड़ना।",
      "संक्रमण का बहुत ही कम जोखिम।"
    ],
    "alternativesEn": "PRP injection, corticosteroid injection, extracorporeal shockwave therapy, or open surgical extensor debridement.",
    "alternativesHi": "पीआरपी (PRP) इंजेक्शन, स्टेरॉयड इंजेक्शन, शॉकवेव थेरेपी, अथवा सर्जिकल ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-suprascapular-nerve-hydrodissection-prf": {
    "id": "usg-suprascapular-nerve-hydrodissection-prf",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Suprascapular Nerve Hydrodissection and Pulsed Radiofrequency",
    "nameHi": "अल्ट्रासाउंड-गाइडेड सुप्रास्कैपुलर नर्व हाइड्रोडिसेक्शन एवं पल्स्ड रेडियोफ्रीक्वेंसी (कंधे के असाध्य दर्द हेतु तंत्रिका विमुक्ति व न्यूरोमॉड्यूलेशन)",
    "indicationEn": "Intractable chronic shoulder pain from rotator cuff arthropathy, frozen shoulder, suprascapular nerve entrapment at the suprascapular or spinoglenoid notch, or painful inoperable shoulder osteoarthritis.",
    "indicationHi": "कंधे का गंभीर पुराना दर्द (रोटेटर कफ आर्थ्रोपैथी, फ्रोजन शोल्डर, सुप्रास्कैपुलर नस का दबना या कंधे का पुराना गठिया) जिसमें अन्य उपचार निष्फल रहे हों।",
    "descriptionEn": "Under high-resolution ultrasound guidance, an insulated radiofrequency needle is guided to the suprascapular notch adjacent to the suprascapular nerve and artery. After sensory/motor stimulation testing, pulsed radiofrequency energy (42°C for 240 seconds) is delivered to modulate pain transmission. This is followed by hydrodissection using saline, local anesthetic, and steroid to free the nerve from surrounding compressive fascia.",
    "descriptionHi": "सोनोग्राफी की मदद से कंधे के पीछे स्थित सुप्रास्कैपुलर नस के पास एक विशेष इंसुलेटेड सुई पहुंचाई जाती है। नस की जांच करने के बाद पल्स्ड रेडियोफ्रीक्वेंसी तरंगों द्वारा दर्द के संकेतों को शांत (Neuromodulation) किया जाता है। इसके पश्चात दवा और सलाइन डालकर नस को चिपके हुए तंतुओं से अलग (Hydrodissection) कर दिया जाता है।",
    "benefitsEn": [
      "Long-lasting relief (6-12 months) of deep shoulder pain without motor weakness.",
      "Preserves motor function of the supraspinatus and infraspinatus muscles.",
      "Frees the nerve from mechanical entrapment and restores microvascular perfusion.",
      "Improves active range of motion and tolerability of physical rehabilitation."
    ],
    "benefitsHi": [
      "कंधे के गहरे पुराने दर्द से 6 से 12 महीने तक लंबी राहत, बिना किसी कमजोरी के।",
      "कंधे की मांसपेशियों की ताकत और कार्यक्षमता पूरी तरह सुरक्षित रहना।",
      "दबी हुई नस का दबाव हट जाना और उसमें रक्त संचार सुधरना।",
      "कंधे की हरकत खुलना और कसरत करने में आसानी होना।"
    ],
    "specificRisksEn": [
      "Transient numbness or mild dysesthesia in the shoulder region for 24-48 hours.",
      "Puncture site soreness or minor muscular hematoma.",
      "Extremely rare injury to the suprascapular artery leading to pseudoaneurysm.",
      "Extremely rare pneumothorax (<0.1%) if needle passes too deep toward the thorax."
    ],
    "specificRisksHi": [
      "कंधे में 1 से 2 दिन के लिए हल्का सुन्नपन या भारीपन।",
      "सुई के स्थान पर मांसपेशियों में हल्का दर्द या नील।",
      "पास की रक्त धमनी में चोट का अत्यंत दुर्लभ जोखिम।",
      "छाती की झिल्ली में हवा भरने (Pneumothorax) का अत्यंत दुर्लभ खतरा (<0.1%)।"
    ],
    "alternativesEn": "Diagnostic suprascapular nerve block with local anesthetic/steroid alone, glenohumeral joint steroid injection, shoulder arthroplasty, or open surgical nerve decompression.",
    "alternativesHi": "साधारण नर्व ब्लॉक इंजेक्शन, कंधे के जोड़ में स्टेरॉयड, कंधा प्रत्यारोपण सर्जरी, अथवा नस खोलने का खुला ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia with optional conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) आवश्यकतानुसार हल्की शामक दवा के साथ।"
  },
  "usg-median-nerve-hydrodissection-cts": {
    "id": "usg-median-nerve-hydrodissection-cts",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Median Nerve Hydrodissection for Carpal Tunnel Syndrome",
    "nameHi": "अल्ट्रासाउंड-गाइडेड मीडियन नर्व हाइड्रोडिसेक्शन (कारपेल टनल सिंड्रोम - कलाई में दबी नस की द्रव विमुक्ति)",
    "indicationEn": "Mild to moderate carpal tunnel syndrome with nocturnal hand paresthesias, thenar numbness, or failed conservative splinting, wishing to avoid surgical carpal tunnel release.",
    "indicationHi": "कारपेल टनल सिंड्रोम (कलाई में मीडियन नस का दबना), रात में हाथ व उंगलियों में तेज झनझनाहट, सुन्नपन और दर्द, जो कलाई के पट्टे (Splint) से ठीक न हो रहा हो।",
    "descriptionEn": "Under high-frequency ultrasound guidance, a fine needle is introduced in-plane into the carpal tunnel beneath the flexor retinaculum. An injectable solution (5% dextrose in water or saline with dilute steroid) is infused around the circumference of the median nerve to gently strip adhesions, reduce epineurial edema, and restore nerve gliding.",
    "descriptionHi": "उच्च आवृति वाली सोनोग्राफी में कलाई की दबी हुई नस (मीडियन नर्व) को देखते हुए एक बारीक सुई पहुंचाई जाती है। नस के चारों ओर विशेष द्रव (5% डेक्सट्रोज या सलाइन व सूक्ष्म स्टेरॉयड) का घेरा बनाकर नस को चिपके हुए लिगामेंट से पूरी तरह छुड़ाया जाता है, जिससे नस का दबाव समाप्त हो जाता है और उंगलियों में खून व संवेदना लौट आती है।",
    "benefitsEn": [
      "Rapid reduction in nocturnal hand tingling, numbness, and waking episodes.",
      "Restoration of nerve gliding and reduction of intraneural swelling.",
      "Completely nonsurgical procedure performed in 15-20 minutes under local anesthesia.",
      "Immediate return to light hand use without surgical incisions, bandages, or pillar pain."
    ],
    "benefitsHi": [
      "रात को हाथ में होने वाली झनझनाहट, सुन्नपन और बार-बार नींद टूटने से तुरंत राहत।",
      "नस पर पड़ रहा दबाव हटने से नसों की सूजन में तेजी से कमी।",
      "बिना किसी चीरा-फाड़ी के 15-20 मिनट में संपन्न होने वाला आसान उपचार।",
      "प्रक्रिया के तुरंत बाद हाथ का दैनिक उपयोग शुरू करने की सुविधा।"
    ],
    "specificRisksEn": [
      "Transient tingling or numbness in thumb, index, and middle fingers for several hours.",
      "Localized wrist soreness or minor subcutaneous bruising.",
      "Temporary recurrence if severe anatomical compressive stenosis exists.",
      "Extremely rare direct needle trauma to the median nerve (<0.1%)."
    ],
    "specificRisksHi": [
      "अंगूठे और उंगलियों में कुछ घंटों के लिए अस्थायी सुन्नपन या झनझनाहट।",
      "कलाई पर हल्का दर्द या छोटा नील पड़ना।",
      "यदि कलाई का रास्ता बहुत अधिक संकरा हो तो भविष्य में दोबारा लक्षण आने की संभावना।",
      "नस को सुई से चोट पहुंचने का अत्यंत दुर्लभ जोखिम (<0.1%)।"
    ],
    "alternativesEn": "Wrist splinting, oral NSAIDs/pregabalin, open or endoscopic surgical carpal tunnel release, or blind carpal tunnel steroid injection.",
    "alternativesHi": "कलाई का पट्टा (Splint), दवाइयां, कारपेल टनल का खुला या दूरबीन द्वारा ऑपरेशन, अथवा साधारण स्टेरॉयड इंजेक्शन।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-percutaneous-carpal-tunnel-release": {
    "id": "usg-percutaneous-carpal-tunnel-release",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Percutaneous Carpal Tunnel Release (Flexor Retinaculum Transection)",
    "nameHi": "अल्ट्रासाउंड-गाइडेड परक्यूटेनियस कारपेल टनल रिलीज (कलाई के लिगामेंट का सुई/माइक्रो-ब्लेड द्वारा सूक्ष्म विच्छेदन)",
    "indicationEn": "Moderate to severe carpal tunnel syndrome with continuous daytime/nighttime numbness, thenar muscle atrophy, or prolonged electrodiagnostic distal motor latency unresponsive to conservative measures.",
    "indicationHi": "मध्यम से गंभीर कारपेल टनल सिंड्रोम, हाथ में लगातार सुन्नपन, अंगूठे के पास की मांसपेशियों का सूखना, तथा ईएमजी (EMG) जांच में नस के गंभीर रूप से दबने की पुष्टि।",
    "descriptionEn": "Under real-time high-resolution ultrasound guidance, local anesthesia and wide hydrodissection are established around the median nerve and superficial palmar arch. Through a 1-2 mm skin nick, a specialized retrograde micro-cutting hook or looped thread is positioned around the transverse carpal ligament (flexor retinaculum) and completely transected under continuous direct sonographic visualization, fully decompressing the carpal tunnel.",
    "descriptionHi": "सोनोग्राफी की अत्यंत सटीक निगरानी में कलाई की नस और खून की नलियों को बचाते हुए केवल 1-2 मिमी के सूक्ष्म छिद्र से एक विशेष माइक्रो-कटिंग नाइफ या धागा डाला जाता है। नस को दबाने वाले कड़े लिगामेंट (फ्लेक्सर रेटिनाकुलम) को सीधे कैमरे में देखते हुए पूरी तरह काट दिया जाता है, जिससे नस का दबाव हमेशा के लिए खत्म हो जाता है।",
    "benefitsEn": [
      "Definitive anatomical decompression of the median nerve equal to open surgery.",
      "Minimal skin disruption (1-2 mm puncture) with no stitches or large palmar scars.",
      "Virtually eliminates painful pillar pain and prolonged scar tenderness associated with open surgery.",
      "Rapid return to work and hand activities within days rather than 4-6 weeks."
    ],
    "benefitsHi": [
      "खुले ऑपरेशन के बराबर नस को हमेशा के लिए दबाव मुक्त करने की पक्की तकनीक।",
      "हथेली पर कोई बड़ा चीरा या टांका नहीं (केवल 1-2 मिमी का सुई जैसा निशान)।",
      "खुले ऑपरेशन के बाद हथेली में महीनों तक रहने वाले दर्द (Pillar Pain) से पूर्ण बचाव।",
      "महीनों के बजाय कुछ ही दिनों में अपने काम पर लौटने की सुविधा।"
    ],
    "specificRisksEn": [
      "Transient palm soreness, swelling, or bruising lasting 3-7 days.",
      "Incomplete ligament transection requiring secondary intervention.",
      "Extremely rare injury to the recurrent motor branch of median nerve or palmar cutaneous branch.",
      "Extremely rare vascular laceration of the superficial palmar arterial arch (<0.2%)."
    ],
    "specificRisksHi": [
      "हथेली में 3 से 7 दिनों तक हल्का दर्द, सूजन या नील।",
      "लिगामेंट का कोई छोटा हिस्सा अधूरा कटने पर पुनः प्रक्रिया की आवश्यकता का दुर्लभ जोखिम।",
      "अंगूठे की गति वाली नस (Motor Branch) को चोट का अत्यंत दुर्लभ जोखिम।",
      "हथेली की रक्त धमनी में चोट लगने का बहुत ही दुर्लभ खतरा (<0.2%)।"
    ],
    "alternativesEn": "Standard open carpal tunnel release surgery (requires palmar incision and sutures), endoscopic carpal tunnel release, or continuous wrist splinting.",
    "alternativesHi": "हथेली का खुला ऑपरेशन (Open CTR - जिसमें चीरा और टांके लगते हैं), एंडोस्कोपिक सर्जरी, अथवा कलाई का पट्टा।",
    "sedationTypeEn": "Local anesthesia with WALANT technique (Wide Awake Local Anesthesia No Tourniquet).",
    "sedationTypeHi": "स्थानीय सुन्नता (WALANT तकनीक - बिना हाथ बांधे और बिना बेहोशी के पूर्णतः सुन्न)।"
  },
  "usg-ulnar-nerve-hydrodissection-cubital": {
    "id": "usg-ulnar-nerve-hydrodissection-cubital",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Ulnar Nerve Hydrodissection at the Cubital Tunnel",
    "nameHi": "अल्ट्रासाउंड-गाइडेड अलनर नर्व हाइड्रोडिसेक्शन (क्यूबाइटल टनल - कोहनी में दबी नस की विमुक्ति)",
    "indicationEn": "Cubital tunnel syndrome with ulnar neuropathy, medial elbow pain, numbness and paresthesia in the ring and little fingers, and Osborne's ligament compression.",
    "indicationHi": "क्यूबाइटल टनल सिंड्रोम (कोहनी में अलनर नस का दबना), छोटी उंगली व अनामिका में सुन्नपन, झनझनाहट और हाथ में कमजोरी जो सामान्य उपचार से ठीक न हो रही हो।",
    "descriptionEn": "Under high-frequency ultrasound guidance, the ulnar nerve is visualized within the retroepicondylar groove beneath Osborne's ligament. A fine needle is guided adjacent to the nerve and a hydrodissection fluid (saline/D5W with dilute anti-inflammatory) is injected to separate the nerve from the fibrous band, release adhesions, and diminish epineurial congestion.",
    "descriptionHi": "सोनोग्राफी की निगरानी में कोहनी के पीछे स्थित अलनर नस को देखा जाता है। नस के चारों ओर एक बारीक सुई से विशेष तरल पदार्थ का इंजेक्शन देकर नस को दबाने वाले कड़े रेशों और लिगामेंट से अलग कर दिया जाता है, जिससे नस की सूजन घटती है और उंगलियों में सुन्नपन बंद हो जाता है।",
    "benefitsEn": [
      "Effective decompression of the ulnar nerve without requiring open surgical transposition.",
      "Resolution of medial elbow aching and little-finger paresthesias.",
      "Restoration of intrinsic hand muscle coordination and grip endurance.",
      "Rapid outpatient procedure with zero immobilization needed."
    ],
    "benefitsHi": [
      "बिना कोहनी को काटे या नस को खिसकाए (नर्व ट्रांसपोजिशन के बिना) नस का दबाव समाप्त होना।",
      "कोहनी के दर्द और छोटी उंगली की झनझनाहट से त्वरित मुक्ति।",
      "हाथ की उंगलियों की पकड़ और बारीक काम करने की क्षमता में सुधार।",
      "बिना किसी प्लास्टर के ओपीडी में ही संपन्न होने वाली सुरक्षित विधि।"
    ],
    "specificRisksEn": [
      "Transient numbness or tingling in the ulnar distribution for several hours.",
      "Puncture site ecchymosis or localized elbow tenderness.",
      "Nerve subluxation if medial epicondyle anatomy is hypermobile.",
      "Extremely rare intraneural needle puncture or localized neuritis."
    ],
    "specificRisksHi": [
      "छोटी उंगली में कुछ घंटों के लिए हल्का सुन्नपन या भारीपन।",
      "कोहनी पर हल्का नील पड़ना या छूने पर दर्द।",
      "कोहनी मोड़ने पर नस के अपनी जगह से फिसलने का दुर्लभ जोखिम।",
      "नस में सुई से सूजन आने का अत्यंत दुर्लभ खतरा।"
    ],
    "alternativesEn": "Elbow pad splinting, open cubital tunnel decompression with or without anterior ulnar nerve transposition, or blind local injection.",
    "alternativesHi": "कोहनी का सुरक्षात्मक पैड, अलनर नस का खुला ऑपरेशन (क्यूबाईटल टनल सर्जरी / ट्रांसपोजिशन), अथवा दवाइयां।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-radial-nerve-hydrodissection": {
    "id": "usg-radial-nerve-hydrodissection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Radial Nerve Hydrodissection",
    "nameHi": "अल्ट्रासाउंड-गाइडेड रेडियल नर्व हाइड्रोडिसेक्शन (रेडियल टनल सिंड्रोम - बांह में दबी नस की विमुक्ति)",
    "indicationEn": "Radial tunnel syndrome or posterior interosseous nerve (PIN) entrapment at the Arcade of Frohse with deep aching dorsal forearm pain, extensor fatigue, and refractory lateral arm symptoms.",
    "indicationHi": "रेडियल टनल सिंड्रोम (बांह/कोहनी में रेडियल अथवा पिन नस का दबना), बांह के पिछले हिस्से में गहरा दर्द, कलाई व उंगलियां उठाने में कमजोरी, जो टेनिस एल्बो जैसा महसूस होता है पर ठीक नहीं होता।",
    "descriptionEn": "Under real-time ultrasound guidance, the deep branch of the radial nerve / posterior interosseous nerve is traced through the supinator muscle and Arcade of Frohse. A needle is steered between the nerve and the fibrous arcade, injecting fluid to release the entrapment and alleviate perineural ischemia.",
    "descriptionHi": "सोनोग्राफी में बांह के अंदर रेडियल नस की गहरी शाखा (PIN) की पहचान की जाती है। एक बारीक सुई को नस और उसे दबाने वाली सुपीनेटर मांसपेशी के कड़े किनारे के बीच पहुंचाकर तरल प्रवाहित किया जाता है, जिससे नस का जकड़ाव खुल जाता है और बांह का दर्द दूर हो जाता है।",
    "benefitsEn": [
      "Direct anatomical decompression of the radial/PIN nerve under direct visualization.",
      "Marked relief of persistent deep proximal forearm pain.",
      "Restoration of wrist and finger extension endurance.",
      "Avoidance of surgical radial tunnel exploration and muscle splitting."
    ],
    "benefitsHi": [
      "सोनोग्राफी में देखकर नस के दबाव को सटीक रूप से दूर करना।",
      "बांह के गहरे पुराने दर्द से दीर्घकालिक राहत।",
      "कलाई और उंगलियों को सीधा रखने की ताकत में सुधार।",
      "मांसपेशियों को काटकर नस खोलने वाले बड़े ऑपरेशन से बचाव।"
    ],
    "specificRisksEn": [
      "Transient motor weakness of wrist/finger extensors lasting 2-6 hours from local anesthetic.",
      "Localized forearm soreness, swelling, or superficial bruising.",
      "Extremely rare mechanical nerve irritation or needle-induced paresthesias."
    ],
    "specificRisksHi": [
      "लोकल एनेस्थीसिया के असर से 2 से 6 घंटे तक कलाई या उंगलियों में अस्थायी कमजोरी (जो दवा का असर खत्म होते ही सामान्य हो जाती है)।",
      "बांह पर हल्का दर्द या छोटा नील पड़ना।",
      "नस में हल्की सुई की संवेदनशीलता का अत्यंत दुर्लभ खतरा।"
    ],
    "alternativesEn": "Forearm bracing, physical therapy, oral neuropathic agents, or open surgical radial tunnel decompression.",
    "alternativesHi": "बांह का ब्रेस (पट्टा), फिजियोथेरेपी, नस दर्द की दवाइयां अथवा सर्जिकल ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-lfcn-hydrodissection-meralgia": {
    "id": "usg-lfcn-hydrodissection-meralgia",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Lateral Femoral Cutaneous Nerve Hydrodissection for Meralgia Paresthetica",
    "nameHi": "अल्ट्रासाउंड-गाइडेड लेटरल फेमोरल क्यूटेनियस नर्व हाइड्रोडिसेक्शन (मेरैल्जिया पैरेस्थेटिका - जांघ के बाहरी हिस्से में जलन व सुन्नपन का उपचार)",
    "indicationEn": "Meralgia paresthetica with burning anterolateral thigh pain, numbness, and cutaneous hyperesthesia caused by entrapment of the lateral femoral cutaneous nerve (LFCN) under the inguinal ligament.",
    "indicationHi": "मेरैल्जिया पैरेस्थेटिका (जांघ की बाहरी नस का दबना), जांघ के बाहरी हिस्से में तेज जलन, सुन्नपन, झनझनाहट अथवा सुई चुभने जैसा अहसास जो बेल्ट या टाइट कपड़ों से बढ़ता हो।",
    "descriptionEn": "Under high-frequency ultrasound guidance, the LFCN is identified medial to the anterior superior iliac spine (ASIS) passing beneath or through the inguinal ligament. A needle is placed adjacent to the nerve sheath and fluid (5% dextrose or saline with corticosteroid) is infused to expand the fascial compartment and separate the nerve from the compressive ligament.",
    "descriptionHi": "सोनोग्राफी की मदद से कमर की हड्डी के पास जांघ की बाहरी नस (LFCN) को देखा जाता है। नस के पास एक बारीक सुई पहुंचाकर विशेष तरल प्रवाहित किया जाता है ताकि नस पर दबाव डाल रहे लिगामेंट और खिंचाव वाले तंतुओं को अलग किया जा सके, जिससे जांघ की जलन तुरंत शांत हो जाती है।",
    "benefitsEn": [
      "Immediate and profound alleviation of burning thigh dysesthesias and hypersensitivity.",
      "Completely pure sensory nerve release with zero risk of leg motor weakness.",
      "Rapid outpatient procedure taking under 15 minutes.",
      "Prevents chronic entrapment neuroma and permanent sensory loss."
    ],
    "benefitsHi": [
      "जांघ की जलन, सुन्नपन और असहजता से तुरंत और टिकाऊ राहत।",
      "यह केवल संवेदी नस होने के कारण पैर में कमजोरी आने का कोई खतरा नहीं।",
      "ओपीडी में 15 मिनट में पूरा होने वाला आसान व सुरक्षित उपचार।",
      "नस के हमेशा के लिए खराब होने या सुन्न पड़ने से बचाव।"
    ],
    "specificRisksEn": [
      "Transient complete numbness of the anterolateral thigh for several hours.",
      "Minor puncture site bruising or tenderness near the pelvic crest.",
      "Transient motor weakness if local anesthetic inadvertently tracks to the femoral nerve (<0.5%).",
      "Recurrence in patients with persistent mechanical abdominal wall compression."
    ],
    "specificRisksHi": [
      "जांघ के बाहरी हिस्से में कुछ घंटों के लिए पूरी तरह सुन्नपन।",
      "कमर की हड्डी के पास हल्का नील पड़ना या दर्द।",
      "दवा के फैलने से पैर में कुछ घंटों के लिए हल्की कमजोरी आने की बहुत दुर्लभ संभावना (<0.5%)।",
      "वजन अधिक होने या टाइट बेल्ट पहनने पर लंबे समय बाद लक्षण दोबारा उभरने की संभावना।"
    ],
    "alternativesEn": "Weight reduction, avoidance of constrictive belts, oral gabapentinoids, pulsed radiofrequency of LFCN, or open surgical neurolysis/neurectomy.",
    "alternativesHi": "ढीले कपड़े पहनना, वजन कम करना, नसों की दवाइयां, रेडियोफ्रीक्वेंसी उपचार अथवा नस का सर्जिकल ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-common-peroneal-nerve-hydrodissection": {
    "id": "usg-common-peroneal-nerve-hydrodissection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Common Peroneal Nerve Hydrodissection at the Fibular Neck",
    "nameHi": "अल्ट्रासाउंड-गाइडेड कॉमन पेरोनियल नर्व हाइड्रोडिसेक्शन (घुटने के पास दबी पैर की नस की विमुक्ति - फुट ड्रॉप बचाव)",
    "indicationEn": "Common peroneal neuropathy / entrapment at the fibular head with lateral calf pain, dorsal foot numbness, and early foot drop / ankle dorsiflexion weakness refractory to conservative bracing.",
    "indicationHi": "कॉमन पेरोनियल नर्व का दबाव (घुटने के बाहरी हिस्से में फिबुला हड्डी के पास), पैर के ऊपरी हिस्से में सुन्नपन, झनझनाहट अथवा पंजा उठाने में कमजोरी (फुट ड्रॉप का खतरा)।",
    "descriptionEn": "Under real-time ultrasound guidance, the common peroneal nerve is traced as it winds around the fibular neck beneath the peroneus longus fascia. A needle is advanced tangential to the nerve and a hydrodissection solution is injected to liberate the nerve from the tight fibrous arcade and resolve compressive microvascular ischemia.",
    "descriptionHi": "सोनोग्राफी की सीधी निगरानी में घुटने के नीचे फिबुला हड्डी के पास घूम रही कॉमन पेरोनियल नस को देखा जाता है। एक बारीक सुई द्वारा नस के चारों ओर विशेष तरल डालकर उसे जकड़ने वाले कड़े रेशों से मुक्त कराया जाता है, जिससे पैर का पंजा उठाने वाली मांसपेशियों में जान लौटती है और फुट ड्रॉप से बचाव होता है।",
    "benefitsEn": [
      "Releases mechanical compression on the most vulnerable peripheral nerve in the lower extremity.",
      "Restores ankle dorsiflexion power and prevents permanent foot drop.",
      "Relieves tingling and burning pain over the lateral leg and foot dorsum.",
      "Avoids open surgical decompression or nerve transposition."
    ],
    "benefitsHi": [
      "पैर की सबसे महत्वपूर्ण नस का दबाव हटाकर उसे हमेशा के लिए खराब होने से बचाना।",
      "पैर का पंजा उठाने की ताकत को बहाल करना और स्थायी फुट ड्रॉप (लंगड़ाकर चलना) से बचाव।",
      "पैर की पिंडली और पंजे के ऊपरी हिस्से में जलन व झनझनाहट से राहत।",
      "चीर-फाड़ वाले सर्जिकल ऑपरेशन से बचाव।"
    ],
    "specificRisksEn": [
      "Transient motor weakness of foot dorsiflexion lasting 2-4 hours from local anesthetic.",
      "Puncture site bruising or local tenderness over the fibular head.",
      "Extremely rare direct intraneural puncture or axonal trauma (<0.2%)."
    ],
    "specificRisksHi": [
      "सुन्न करने वाली दवा के असर से 2 से 4 घंटे तक पंजा उठाने में अस्थायी कमजोरी (दवा उतरते ही सामान्य)।",
      "हड्डी के पास हल्का दर्द या नील पड़ना।",
      "नस में सुई से खरोंच आने का अत्यंत दुर्लभ खतरा (<0.2%)।"
    ],
    "alternativesEn": "Ankle-foot orthosis (AFO splint), physical therapy, oral neurotropic agents, or open surgical peroneal nerve release.",
    "alternativesHi": "फुट ड्रॉप स्प्लिंट (AFO पट्टा), फिजियोथेरेपी, नसों की दवाइयां अथवा सर्जिकल ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-morton-neuroma-alcohol-neurolysis": {
    "id": "usg-morton-neuroma-alcohol-neurolysis",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Morton's Neuroma Percutaneous Alcohol Neurolysis",
    "nameHi": "अल्ट्रासाउंड-गाइडेड मॉर्टन न्यूरोमा परक्यूटेनियस अल्कोहल न्यूरोलिसिस (पैर की सूजी हुई तंत्रिका का रासायनिक विच्छेदन)",
    "indicationEn": "Morton's intermetatarsal neuroma (most commonly 3rd or 2nd webspace) with chronic burning plantar forefoot pain, Mulder's click, and failed conservative shoe modifications and corticosteroid injections.",
    "indicationHi": "मॉर्टन न्यूरोमा (पैर के पंजों/उंगलियों के बीच तंत्रिका की सूजन व गांठ), तलवे में तेज चुभन, चलने पर कंकड़ जैसा चुभना व जलन, जो चौड़े जूतों और इंजेक्शन से ठीक न हो रही हो।",
    "descriptionEn": "Under high-resolution ultrasound guidance, a 25-27G needle is advanced through the dorsal intermetatarsal webspace directly into the core of the neuroma. A precise aliquot of dehydrated neurolytic alcohol (20-30% ethanol diluted with local anesthetic) is slowly injected into the perineural fibrous tissue to ablate sensory pain fibers while avoiding cutaneous necrosis.",
    "descriptionHi": "सोनोग्राफी की मदद से पैर की उंगलियों के बीच बनी मॉर्टन न्यूरोमा की गांठ में एक अति-सूक्ष्म सुई डाली जाती है। सुन्न करने की दवा के साथ विशेष मेडिकल अल्कोहल की निश्चित मात्रा गांठ के अंदर छोड़ी जाती है, जिससे दर्द ले जाने वाले तंत्रिका तंतु निष्क्रिय हो जाते हैं और तलवे की जलन व चुभन समाप्त हो जाती है।",
    "benefitsEn": [
      "High rate of pain relief without surgical plantar or dorsal incision.",
      "Eliminates painful sensation of walking on a pebble or hot coal.",
      "Avoids open surgical neurectomy risks including stump neuroma formation and prolonged shoe restrictions.",
      "Quick outpatient procedure with immediate weight-bearing in supportive footwear."
    ],
    "benefitsHi": [
      "बिना पैर के पंजे में चीरा लगाए दर्द से स्थायी व उच्च स्तरीय राहत।",
      "जूता पहनने या चलने पर कंकड़ चुभने जैसे असहनीय दर्द का खात्मा।",
      "नस काटने के सर्जिकल ऑपरेशन (Neurectomy) और दोबारा गांठ बनने (Stump Neuroma) के खतरे से बचाव।",
      "ओपीडी में 15 मिनट की प्रक्रिया जिसके तुरंत बाद मरीज सामान्य जूते पहनकर चल सकता है।"
    ],
    "specificRisksEn": [
      "Transient burning sensation and forefoot ache lasting 24-72 hours after injection.",
      "Local skin necrosis or fat pad atrophy if alcohol leaks along the needle tract.",
      "Temporary numbness or sensory loss in the adjacent interdigital toe spaces.",
      "Requirement for a series of 2-4 sessions for complete chemical neurolysis."
    ],
    "specificRisksHi": [
      "इंजेक्शन के बाद 1 से 3 दिनों तक पंजे में हल्की जलन या खिंचाव।",
      "यदि अल्कोहल त्वचा में रिसे तो चमड़ी पर हल्का घाव या तलवे की चर्बी में कमी का दुर्लभ जोखिम।",
      "पैर की संबंधित उंगलियों के बीच कुछ समय के लिए सुन्नपन।",
      "पूरी तरह दर्द खत्म करने के लिए 2 से 4 सप्ताह के अंतराल पर 2-3 बार इंजेक्शन की आवश्यकता हो सकती है।"
    ],
    "alternativesEn": "Metatarsal pads, custom orthotics, corticosteroid injection, radiofrequency ablation, cryoablation, or open surgical neuroma excision.",
    "alternativesHi": "विशेष इनसोल पैड, स्टेरॉयड इंजेक्शन, रेडियोफ्रीक्वेंसी, क्रायोएब्लेशन, अथवा सर्जिकल ऑपरेशन द्वारा नस की गांठ निकालना।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-morton-neuroma-rfa": {
    "id": "usg-morton-neuroma-rfa",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Radiofrequency Ablation for Morton's Neuroma",
    "nameHi": "अल्ट्रासाउंड-गाइडेड रेडियोफ्रीक्वेंसी एब्लेशन (मॉर्टन न्यूरोमा - पैर की तंत्रिका गांठ का थर्मल न्यूरोटॉमी उपचार)",
    "indicationEn": "Intractable Morton's neuroma of the foot unresponsive to conservative management, alcohol neurolysis, or corticosteroid injections, seeking definitive non-surgical thermal ablation.",
    "indicationHi": "पैर का मॉर्टन न्यूरोमा, उंगलियों के बीच निरंतर चुभन और जलन, जो दवाइयों, पैड अथवा इंजेक्शन से ठीक न हो रही हो।",
    "descriptionEn": "Under real-time ultrasound guidance, an insulated radiofrequency cannula with an active tip is steered into the center of the swollen interdigital nerve. After motor testing confirms safe sensory-only localization, thermal RF (80°C for 90 seconds) or pulsed RF is applied to disrupt pain signal conduction in the neuroma.",
    "descriptionHi": "सोनोग्राफी की मदद से पैर की सूजी हुई नस के बीच में एक विशेष रेडियोफ्रीक्वेंसी सुई डाली जाती है। नस की जांच के बाद नियंत्रित ऊष्मा (रेडियोफ्रीक्वेंसी ऊर्जा) द्वारा दर्द पैदा करने वाले तंतुओं को निष्प्रभावी कर दिया जाता है, जिससे पैर का दर्द हमेशा के लिए शांत हो जाता है।",
    "benefitsEn": [
      "Precise thermal ablation of the neuroma without damaging surrounding structures.",
      "High clinical success rate exceeding 80% with sustained pain relief.",
      "Completely avoids open surgical dorsal or plantar scar and painful stump neuroma recurrence.",
      "Minimal downtime with immediate return to ambulation."
    ],
    "benefitsHi": [
      "आसपास के ऊतकों को नुकसान पहुंचाए बिना केवल दर्द वाली नस का सटीक थर्मल उपचार।",
      "80% से अधिक मरीजों में स्थायी और उत्कृष्ट दर्द निवारण।",
      "पंजे के चीरे, टांकों और ऑपरेशन के बाद दोबारा गांठ बनने के खतरे से पूर्ण बचाव।",
      "प्रक्रिया के तुरंत बाद चलने-फिरने की पूर्ण स्वतंत्रता।"
    ],
    "specificRisksEn": [
      "Post-ablation forefoot edema and soreness lasting 3-7 days.",
      "Permanent sensory numbness in the adjacent webspace and toes (expected trade-off for pain relief).",
      "Skin burn if the active tip is positioned too superficial to the dermis.",
      "Transient foreign-body sensation in the intermetatarsal space."
    ],
    "specificRisksHi": [
      "उपचार के बाद 3 से 7 दिनों तक पंजे में हल्की सूजन या दर्द।",
      "संबंधित दो उंगलियों के बीच स्थायी सुन्नपन (दर्द से मुक्ति के लिए अपेक्षित)।",
      "सुई यदि त्वचा के बहुत पास हो तो चमड़ी पर हल्का निशान आने का दुर्लभ जोखिम।",
      "उंगलियों के बीच कुछ दिनों तक भारीपन का अहसास।"
    ],
    "alternativesEn": "Cryoablation, percutaneous alcohol neurolysis, custom metatarsal pads, or open surgical neurectomy.",
    "alternativesHi": "क्रायोएब्लेशन, अल्कोहल इंजेक्शन, ऑर्थोपेडिक इनसोल, अथवा सर्जिकल ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia with mild sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) हल्की शामक दवा के साथ।"
  },
  "usg-morton-neuroma-cryoablation": {
    "id": "usg-morton-neuroma-cryoablation",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Cryoablation for Morton's Neuroma",
    "nameHi": "अल्ट्रासाउंड-गाइडेड क्रायोएब्लेशन (मॉर्टन न्यूरोमा - अत्यधिक ठंडक / बर्फ द्वारा तंत्रिका का दर्द निवारण)",
    "indicationEn": "Persistent Morton's neuroma where heat-based ablation is contraindicated or in patients seeking minimal post-procedural pain flare through cryoneurolysis.",
    "indicationHi": "मॉर्टन न्यूरोमा का पुराना दर्द, जहां बिना जलन या अत्यधिक दर्द के बर्फ की ठंडक (Cryoablation) द्वारा नस को सुन्न व शांत करना श्रेष्ठ विकल्प हो।",
    "descriptionEn": "Under direct ultrasound visualization, a specialized cryoprobe is introduced into the intermetatarsal space abutting the neuroma. Pressurized nitrous oxide or argon gas is cycled through the probe tip to form an ice ball (-60°C to -70°C) engulfing the neuroma for two freeze-thaw cycles (3 minutes freeze, 2 minutes thaw), producing axonotmesis without damaging the nerve connective sheath.",
    "descriptionHi": "सोनोग्राफी में देखते हुए एक विशेष क्रायो-प्रोब को पैर के न्यूरोमा के पास पहुंचाया जाता है। अत्यंत ठंडी गैस के प्रवाह से प्रोब की नोक पर -60 डिग्री का एक सूक्ष्म बर्फ का गोला (Ice Ball) बनाया जाता है। यह ठंडक दर्द की नस को जमाकर निष्क्रिय कर देती है, जिससे नस का आवरण सुरक्षित रहता है और दर्द पूरी तरह गायब हो जाता है।",
    "benefitsEn": [
      "Extremely low incidence of post-procedural pain flare due to natural anesthetic effect of freezing.",
      "Preserves the perineural architecture, preventing painful stump neuroma formation.",
      "High rate of symptom resolution with rapid recovery.",
      "Safe and non-destructive to surrounding skin and tendons."
    ],
    "benefitsHi": [
      "अत्यधिक ठंडक के प्राकृतिक सुन्न करने वाले प्रभाव के कारण प्रक्रिया के बाद दर्द बिल्कुल न के बराबर।",
      "नस का बाहरी ढांचा सुरक्षित रहने से भविष्य में दर्दनाक गांठ (Stump Neuroma) बनने का कोई खतरा नहीं।",
      "त्वरित दर्द निवारण और बहुत जल्दी सामान्य जीवन में वापसी।",
      "आसपास की त्वचा व मांसपेशियों के लिए पूर्णतः सुरक्षित।"
    ],
    "specificRisksEn": [
      "Transient local numbness, frostbite, or skin depigmentation if ice ball abuts dermis.",
      "Localized forefoot swelling for 2-4 days.",
      "Gradual sensory regeneration over 6-12 months occasionally requiring repeat treatment.",
      "Minor puncture site ecchymosis."
    ],
    "specificRisksHi": [
      "त्वचा के पास होने पर चमड़ी का रंग हल्का पड़ना या अस्थायी रूप से ज्यादा ठंडा महसूस होना।",
      "पैर में 2 से 4 दिन तक हल्की सूजन।",
      "6 से 12 महीने बाद बहुत धीमी गति से तंत्रिका के पुनः जाग्रत होने पर भविष्य में दोबारा उपचार की दुर्लभ संभावना।",
      "सुई के स्थान पर हल्का नील पड़ना।"
    ],
    "alternativesEn": "Radiofrequency ablation, alcohol sclerotherapy, corticosteroid injection, or surgical neuroma excision.",
    "alternativesHi": "रेडियोफ्रीक्वेंसी एब्लेशन, अल्कोहल इंजेक्शन, स्टेरॉयड इंजेक्शन अथवा ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-a1-pulley-release-trigger-finger": {
    "id": "usg-a1-pulley-release-trigger-finger",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided A1 Pulley Percutaneous Release for Trigger Finger",
    "nameHi": "अल्ट्रासाउंड-गाइडेड ए1 पुली परक्यूटेनियस रिलीज (ट्रिगर फिंगर - उंगली अटकने की समस्या में सुई द्वारा पुली विच्छेदन)",
    "indicationEn": "Stenosing flexor tenosynovitis (trigger finger / trigger thumb, Green Grade 2-4) with painful clicking, locking, or fixed contracture of the finger unresponsive to splinting or corticosteroid injection.",
    "indicationHi": "ट्रिगर फिंगर / ट्रिगर थंब (उंगली या अंगूठे का मुड़ने पर अटक जाना या झटके से खुलना), हथेली में दर्दनाक गांठ, जो आराम और स्टेरॉयड इंजेक्शन से ठीक न हो रही हो।",
    "descriptionEn": "Under real-time high-resolution ultrasound guidance, local anesthesia is injected around the flexor tendon sheath. A 18G needle or micro-knife is introduced into the tendon sheath and passed back-and-forth along the inner aspect of the thickened A1 pulley under continuous sonographic visualization until complete transection is achieved and the tendon glides smoothly without triggering.",
    "descriptionHi": "सोनोग्राफी में हथेली के अंदर फंसे हुए स्नायु और उसकी कड़े छल्ले (A1 Pulley) को देखते हुए सुन्न किया जाता है। एक विशेष सुई या सूक्ष्म ब्लेड से उस कड़े छल्ले को अंदर से पूरी तरह काट दिया जाता है। मरीज से तुरंत उंगली मोड़कर और सीधी करके दिखवाया जाता है जिससे उंगली का अटकना तुरंत बंद हो जाता है।",
    "benefitsEn": [
      "Instantaneous, permanent cure of finger locking and triggering.",
      "Percutaneous needle technique with no surgical open incision, stitches, or scar formation.",
      "Immediate full functional hand mobility on the procedure table.",
      "Zero risk of open wound breakdown or post-surgical scar tenderness."
    ],
    "benefitsHi": [
      "उंगली के अटकने और झटके से खुलने की समस्या से उसी क्षण हमेशा के लिए मुक्ति।",
      "बिना किसी चीरे या टांके के केवल एक सुई द्वारा संपन्न।",
      "प्रक्रिया की मेज पर ही तुरंत उंगली को मोड़ना और सीधा करना संभव।",
      "हाथ में कोई घाव या टांका न होने से इन्फेक्शन और दर्द का कोई जोखिम नहीं।"
    ],
    "specificRisksEn": [
      "Minor palm soreness, stiffness, or small subcutaneous ecchymosis for 3-5 days.",
      "Incomplete pulley transection requiring minor repeat needle pass.",
      "Extremely rare digital nerve or digital artery injury (<0.2%).",
      "Extremely rare superficial flexor tendon scratch / partial laceration."
    ],
    "specificRisksHi": [
      "हथेली में 3 से 5 दिनों तक हल्का खिंचाव, कसाव या नील।",
      "छल्ले का कोई छोटा हिस्सा छूट जाने पर तुरंत दोबारा सुई चलाने की आवश्यकता का दुर्लभ जोखिम।",
      "उंगली की रक्त धमनी या संवेदी नस को चोट लगने का अत्यंत दुर्लभ खतरा (<0.2%)।",
      "स्नायु की ऊपरी सतह पर हल्की खरोंच आने की बहुत दुर्लभ संभावना।"
    ],
    "alternativesEn": "Corticosteroid injection into tendon sheath, finger splinting, or standard open surgical A1 pulley release (requires palmar incision and stitches).",
    "alternativesHi": "स्टेरॉयड इंजेक्शन, उंगली का स्प्लिंट (पट्टा), अथवा हथेली का खुला ऑपरेशन (जिसमें चीरा और टांके लगते हैं)।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-glenohumeral-joint-injection": {
    "id": "usg-glenohumeral-joint-injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Glenohumeral Joint Arthrocentesis and Corticosteroid Injection",
    "nameHi": "अल्ट्रासाउंड-गाइडेड ग्लेनोह्यूमरल जॉइंट इंजेक्शन (कंधे के मुख्य जोड़ में द्रव निष्कासन एवं सूजन-रोधी दवा का इंजेक्शन)",
    "indicationEn": "Glenohumeral osteoarthritis, inflammatory rheumatoid/psoriatic arthritis, adhesive capsulitis, or acute inflammatory joint effusion with severe shoulder pain and motion restriction.",
    "indicationHi": "कंधे के मुख्य जोड़ का गठिया (ऑस्टियोआर्थराइटिस), रूमेटाइड आर्थराइटिस, फ्रोजन शोल्डर, अथवा जोड़ में अत्यधिक पानी/सूजन भरना जिससे हाथ हिलाने में तेज दर्द हो।",
    "descriptionEn": "Under real-time ultrasound guidance via a posterior approach, the glenohumeral joint space and posterior labrum are imaged. A 21-22G needle is directed with millimeter precision into the joint recess. If effusion is present, fluid is aspirated for diagnostic analysis, followed by injection of long-acting corticosteroid (Triamcinolone) mixed with local anesthetic.",
    "descriptionHi": "सोनोग्राफी की मदद से कंधे के पीछे के रास्ते से जोड़ के अंदर की खाली जगह को देखते हुए सुई डाली जाती है। यदि जोड़ में सूजन का पानी भरा हो तो उसे खींचकर निकाला जाता है, और फिर सूजन शांत करने वाली दवा (कॉर्टिकोस्टेरॉयड) और सुन्न करने की दवा सीधे जोड़ के भीतर छोड़ी जाती है।",
    "benefitsEn": [
      "Guaranteed 100% intra-articular needle placement confirmed by ultrasound visualization (vs. ~70% with blind injections).",
      "Rapid and profound suppression of joint inflammation and pain.",
      "Improves arm range of motion and tolerability of shoulder physiotherapy.",
      "Aspiration of joint effusion relieves painful capsular tension."
    ],
    "benefitsHi": [
      "अल्ट्रासाउंड में देखकर सुई लगाने से दवा का 100% सीधे जोड़ के अंदर पहुंचना सुनिश्चित (बिना मशीन के 30% दवा बाहर गिर सकती है)।",
      "कंधे के दर्द और सूजन में तेजी से भारी कमी।",
      "हाथ को ऊपर उठाने व घुमाने में आसानी और फिजियोथेरेपी करने में सहूलियत।",
      "जोड़ से अतिरिक्त पानी निकाल देने से भारीपन व तनाव से तुरंत मुक्ति।"
    ],
    "specificRisksEn": [
      "Post-injection steroid flare (temporary pain worsening for 24-48 hours, 2-10%).",
      "Transient facial flushing, elevated blood glucose in diabetic patients for 48-72 hours.",
      "Subcutaneous fat atrophy or skin hypopigmentation if steroid tracks superficially.",
      "Rare septic arthritis (<1 in 20,000 under sterile technique)."
    ],
    "specificRisksHi": [
      "इंजेक्शन के बाद 1-2 दिन तक कंधे के दर्द में हल्का अस्थायी उभार (स्टेरॉयड फ्लेयर)।",
      "मधुमेह (डायबिटीज) के मरीजों में 2 से 3 दिन तक शुगर का स्तर थोड़ा बढ़ जाना अथवा चेहरे पर हल्की लालिमा।",
      "यदि दवा चमड़ी में रह जाए तो त्वचा का रंग हल्का पड़ना या चर्बी कम होना।",
      "जोड़ में संक्रमण (सेप्टिक आर्थराइटिस) का अत्यंत दुर्लभ जोखिम (20,000 में 1 से भी कम)।"
    ],
    "alternativesEn": "Oral NSAIDs/analgesics, physical therapy, viscosupplementation (hyaluronic acid), PRP injection, suprascapular nerve block, or shoulder joint replacement.",
    "alternativesHi": "दर्द निवारक गोलियां, फिजियोथेरेपी, हयालूरोनिक एसिड या पीआरपी इंजेक्शन, नर्व ब्लॉक अथवा कंधा प्रत्यारोपण सर्जरी।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "fluro-glenohumeral-distension-brisement": {
    "id": "fluro-glenohumeral-distension-brisement",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Fluoroscopy-Guided Glenohumeral Joint Injection / Distension Arthrography (Brisement)",
    "nameHi": "फ्लोरोस्कोपी-गाइडेड ग्लेनोह्यूमरल जॉइंट डिस्टेंशन एवं ब्राइजमेंट (एक्स-रे निगरानी में कंधे के जोड़ का फैलाव व चिपके कैप्सूल को खोलना)",
    "indicationEn": "Severe adhesive capsulitis (frozen shoulder, Stage 2-3) with extreme loss of passive external rotation and abduction refractory to physical therapy and routine steroid injections.",
    "indicationHi": "गंभीर फ्रोजन शोल्डर (कंधे का अत्यधिक अकड़ जाना), हाथ बिल्कुल ऊपर न उठना या बाहर न घूमना, जो साधारण कसरत और इंजेक्शन से न खुला हो।",
    "descriptionEn": "Under fluoroscopic X-ray control, a 20-22G spinal needle is placed into the anterior glenohumeral joint space. Intra-articular position is verified with radiopaque iodinated contrast. A high-volume therapeutic cocktail (30-60 mL of sterile saline, local anesthetic, and corticosteroid) is infused under controlled manual pressure until the contracted joint capsule distends or audibly ruptures (brisement), releasing fibrotic adhesions.",
    "descriptionHi": "एक्स-रे (फ्लोरोस्कोपी) की निगरानी में कंधे के जोड़ में सुई डालकर डाई से जोड़ की पुष्टि की जाती है। इसके बाद नियंत्रित दबाव के साथ भारी मात्रा (30-60 मिलीलीटर) में सलाइन, सुन्न करने की दवा और स्टेरॉयड प्रवाहित किया जाता है। इससे कंधे का सिकुड़ा व चिपका हुआ कैप्सूल फूलकर खुल जाता है (ब्राइजमेंट), जिससे कंधे की जकड़न तुरंत ढीली पड़ जाती है।",
    "benefitsEn": [
      "Mechanical stretching and lysis of dense glenohumeral capsular adhesions.",
      "Immediate, noticeable gains in passive and active shoulder range of motion on the table.",
      "Effective alternative to dangerous closed manipulation under general anesthesia (which risks humeral fracture).",
      "Enables patients to rapidly resume aggressive physical therapy."
    ],
    "benefitsHi": [
      "कंधे के चिपके हुए जोड़ के पर्दों (Adhesions) का खिंचकर खुल जाना।",
      "प्रक्रिया की मेज पर ही तुरंत हाथ के हिलने-डुलने और ऊपर उठने में स्पष्ट सुधार।",
      "बेहोश करके कंधे को जबरन मरोड़ने (Manipulation under GA) के खतरनाक जोखिमों (जैसे हड्डी टूटने) से बचाव।",
      "तुरंत फिजियोथेरेपी शुरू करके कंधे की पूरी ताकत वापस पाने का मार्ग प्रशस्त होना।"
    ],
    "specificRisksEn": [
      "Considerable procedural discomfort and pressure sensation during high-volume capsular stretching.",
      "Post-procedure shoulder ache lasting 2-4 days.",
      "Capsular extravasation into surrounding soft tissues (expected finding of successful rupture).",
      "Transient vasovagal reaction or lightheadedness during pressure expansion.",
      "Rare hemarthrosis or joint infection."
    ],
    "specificRisksHi": [
      "प्रक्रिया के दौरान पानी भरते समय कंधे में भारी दबाव व खिंचाव का दर्द महसूस होना।",
      "प्रक्रिया के बाद 2 से 4 दिनों तक कंधे में हल्का भारीपन व दर्द।",
      "कैप्सूल फटने पर दवा का आसपास की मांसपेशियों में फैलना (जो प्रक्रिया की सफलता का सामान्य हिस्सा है)।",
      "दबाव के समय हल्का चक्कर या पसीना आना (वेसोवेगल प्रतिक्रिया)।",
      "जोड़ में रक्त स्राव या इन्फेक्शन का बहुत ही दुर्लभ खतरा।"
    ],
    "alternativesEn": "Intensive physical therapy, suprascapular nerve pulsed RF, manipulation under anesthesia (MUA), or arthroscopic surgical capsular release.",
    "alternativesHi": "गहन फिजियोथेरेपी, नर्व ब्लॉक, बेहोशी में मैनिपुलेशन अथवा दूरबीन का ऑपरेशन (आर्थ्रोस्कोपिक कैप्सुलर रिलीज)।",
    "sedationTypeEn": "Local anesthesia with intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा दर्द निवारक शामक दवा।"
  },
  "fluro-subacromial-bursa-injection": {
    "id": "fluro-subacromial-bursa-injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Fluoroscopy-Guided Subacromial-Subdeltoid Bursa Injection",
    "nameHi": "फ्लोरोस्कोपी-गाइडेड सब-एक्रोमियल सब-डेल्टॉइड बर्सा इंजेक्शन (कंधे की अंदरूनी सूजन थैली में एक्स-रे निर्देशित इंजेक्शन)",
    "indicationEn": "Subacromial impingement syndrome, subdeltoid bursitis, rotator cuff tendinopathy (without full-thickness tear), and painful arc syndrome unresponsive to oral NSAIDs and physical therapy.",
    "indicationHi": "कंधे का सब-एक्रोमियल इम्प्रिंजमेंट सिंड्रोम (कंधे की हड्डी के नीचे नसों का रगड़ खाना व सूजन), बर्साइटिस, तथा हाथ उठाने पर बीच में तेज दर्द होना।",
    "descriptionEn": "Under fluoroscopic guidance in an oblique projection, a 22G needle is advanced into the subacromial-subdeltoid bursa beneath the acromion arch. Proper bursal spread is verified by injecting 0.5 mL of iodinated contrast, showing free flow beneath the acromion without joint entry, followed by injection of local anesthetic and corticosteroid.",
    "descriptionHi": "एक्स-रे की निगरानी में कंधे की एक्रोमियन हड्डी के नीचे स्थित बर्सा (चिकनाई वाली थैली) में एक बारीक सुई पहुंचाई जाती है। एक्स-रे डाई डालकर पुष्टि की जाती है कि सुई सही थैली में है। इसके बाद सूजन रोधी दवा (स्टेरॉयड) और सुन्न करने की दवा डाली जाती है, जिससे नसों का घर्षण और दर्द तुरंत बंद हो जाता है।",
    "benefitsEn": [
      "Fluoroscopic confirmation prevents inadvertent intratendinous rotator cuff injection (which can cause tendon rupture).",
      "Rapid reduction of subacromial friction, pain, and painful arc during arm abduction.",
      "Facilitates pain-free participation in rotator cuff strengthening exercises.",
      "Diagnostic clarification of impingement vs. cervical radiculopathy."
    ],
    "benefitsHi": [
      "एक्स-रे से सुनिश्चित होता है कि दवा सीधे थैली में जा रही है, स्नायु के अंदर नहीं (जिससे स्नायु कमजोर होने का खतरा नहीं रहता)।",
      "हाथ को ऊपर उठाने पर होने वाले घर्षण और तेज चुभन से तुरंत राहत।",
      "मरीज बिना दर्द के कंधे को मजबूत करने की कसरत आसानी से कर सकता है।",
      "कंधे के दर्द और गर्दन की नस के दर्द में अंतर स्पष्ट होना।"
    ],
    "specificRisksEn": [
      "Transient post-injection discomfort or steroid flare for 24-48 hours.",
      "Facial flushing and short-term blood sugar rise in diabetic patients.",
      "Skin atrophy or depigmentation if medication leaks along subcutaneous track.",
      "Extremely rare bursal infection (<1 in 20,000)."
    ],
    "specificRisksHi": [
      "इंजेक्शन के बाद 1 से 2 दिन तक हल्का दर्द बढ़ना (स्टेरॉयड फ्लेयर)।",
      "चेहरे पर लाली या डायबिटीज के मरीजों में कुछ दिनों के लिए शुगर बढ़ना।",
      "दवा के त्वचा में रिसाव से हल्का सफेद निशान बनना।",
      "संक्रमण का अत्यंत दुर्लभ खतरा।"
    ],
    "alternativesEn": "Oral anti-inflammatory drugs, active physical therapy, ultrasound-guided bursal injection, or arthroscopic subacromial decompression (acromioplasty).",
    "alternativesHi": "दर्द निवारक दवाइयां, फिजियोथेरेपी, अल्ट्रासाउंड गाइडेड इंजेक्शन अथवा दूरबीन का ऑपरेशन (एक्रोमियोप्लास्टी)।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "fluro-hip-joint-injection": {
    "id": "fluro-hip-joint-injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Fluoroscopy-Guided Hip Joint Diagnostic and Therapeutic Injection",
    "nameHi": "फ्लोरोस्कोपी-गाइडेड हिप जॉइंट इंजेक्शन (कूल्हे के जोड़ में एक्स-रे निर्देशित निदान एवं उपचार इंजेक्शन)",
    "indicationEn": "Moderate-to-severe hip osteoarthritis, femoral head avascular necrosis (early stage), labral tear synovitis, inflammatory hip arthritis, or diagnostic differentiation between intra-articular hip pathology and lumbar spine radiculopathy.",
    "indicationHi": "कूल्हे का गठिया (हिप ऑस्टियोआर्थराइटिस), कूल्हे की हड्डी सूखना (एवैस्कुलर नेक्रोसिस - AVN), लैब्रम की चोट, अथवा यह पता लगाना कि दर्द कूल्हे का है या कमर की नस (साइटिका) का।",
    "descriptionEn": "Under fluoroscopic guidance, a 20-22G spinal needle is guided via an anterior or anterolateral approach onto the femoral head-neck junction. Intra-articular positioning is confirmed with arthrographic contrast outline of the hip capsule. A mixture of long-acting local anesthetic and corticosteroid (or hyaluronic acid) is injected directly into the joint.",
    "descriptionHi": "एक्स-रे की सीधी निगरानी में कमर/जांघ के आगे से एक बारीक सुई कूल्हे की मुख्य गेंद व गर्दन (फीमर हेड-नेक) के जोड़ में डाली जाती है। डाई डालकर जोड़ के आवरण की पुष्टि की जाती है और फिर सुन्न करने की दवा व स्टेरॉयड (अथवा हयालूरोनिक एसिड) सीधे जोड़ में पहुंचा दिया जाता है।",
    "benefitsEn": [
      "100% verified intra-articular delivery in a deep, challenging joint where blind injections have high failure rates.",
      "Rapid and substantial relief of groin, buttock, and anterior thigh hip pain.",
      "Definitive diagnostic proof of whether hip arthritis is the true cause of groin/walking pain.",
      "Improves walking tolerance and delays total hip arthroplasty."
    ],
    "benefitsHi": [
      "कूल्हे के गहरे जोड़ में 100% सही जगह दवा पहुंचना सुनिश्चित (बिना एक्स-रे के सुई गलत जगह जाने का भारी जोखिम होता है)।",
      "जांघ के मोड़ (Groin) और कूल्हे के तेज दर्द में तुरंत भारी आराम।",
      "सटीक जांच कि चलने में होने वाला दर्द वास्तव में कूल्हे का है या रीढ़ की हड्डी का।",
      "चलने-फिरने की क्षमता में सुधार और कूल्हा बदलने के ऑपरेशन को टालना।"
    ],
    "specificRisksEn": [
      "Transient leg weakness or numbness for 2-4 hours if local anesthetic spills near the femoral nerve.",
      "Post-injection soreness or temporary steroid flare for 24-48 hours.",
      "Hematoma or bleeding from puncture of lateral circumflex femoral vessels.",
      "Extremely rare septic arthritis of the hip (<1 in 25,000)."
    ],
    "specificRisksHi": [
      "दवा के फैलाव से 2 से 4 घंटे तक पैर में हल्का सुन्नपन या भारीपन (जो जल्दी ठीक हो जाता है)।",
      "इंजेक्शन के बाद 1-2 दिन तक हल्का दर्द बढ़ना।",
      "पंक्चर के स्थान पर हल्का नील पड़ना या रक्त संचय।",
      "कूल्हे के जोड़ में संक्रमण का अत्यंत दुर्लभ खतरा।"
    ],
    "alternativesEn": "Oral NSAIDs, cane/walking stick unloading, physical therapy, total hip arthroplasty (THA surgery), or hip denervation (sensory nerve RFA).",
    "alternativesHi": "दर्द निवारक दवाइयां, छड़ी लेकर चलना, फिजियोथेरेपी, कूल्हा प्रत्यारोपण (Total Hip Replacement) अथवा हिप नर्व रेडियोफ्रीक्वेंसी।",
    "sedationTypeEn": "Local anesthesia with optional mild sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) आवश्यकतानुसार हल्की शामक दवा के साथ।"
  },
  "usg-knee-intraarticular-ha-steroid": {
    "id": "usg-knee-intraarticular-ha-steroid",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Knee Joint Intra-Articular Hyaluronic Acid / Steroid Injection",
    "nameHi": "अल्ट्रासाउंड-गाइडेड नी जॉइंट इंजेक्शन (घुटने के जोड़ में हयालूरोनिक एसिड जेल अथवा स्टेरॉयड का सटीक इंजेक्शन)",
    "indicationEn": "Mild to severe knee osteoarthritis (Kellgren-Lawrence Grades 1-4) with joint effusion, crepitus, mechanical weight-bearing pain, and stiffness restricting walking distance.",
    "indicationHi": "घुटने का गठिया (ऑस्टियोआर्थराइटिस), घुटने में ग्रीस/तरल की कमी, कट-कट की आवाज, सूजन, सीढ़ी चढ़ने व चलने में दर्द, तथा सुबह की अकड़न।",
    "descriptionEn": "Under real-time ultrasound guidance, the suprapatellar bursa and lateral/medial patellofemoral recesses are visualized. A 20-21G needle is guided under continuous visualization into the knee joint. Any excess synovial fluid is completely aspirated (relieving intra-articular pressure), followed by delivery of high-molecular-weight Hyaluronic Acid (viscosupplement) and/or depot Corticosteroid directly between the articular cartilage surfaces.",
    "descriptionHi": "सोनोग्राफी में घुटने की कटोरी के ऊपर जोड़ की थैली को सीधे देखते हुए सुई डाली जाती है। यदि घुटने में सूजन का गंदा पानी भरा हो तो उसे पूरी तरह बाहर खींच लिया जाता है, और फिर घुटने को चिकनाहट देने वाला विशेष जेल (हयालूरोनिक एसिड / कृत्रिम ग्रीस) अथवा सूजन-रोधी स्टेरॉयड सीधे दोनों हड्डियों के बीच छोड़ दिया जाता है।",
    "benefitsEn": [
      "Accurate 100% intra-articular placement avoiding painful extra-articular fat pad infiltration.",
      "Aspiration of inflammatory fluid provides immediate mechanical pressure relief.",
      "Hyaluronic acid restores synovial fluid viscoelasticity, lubricates cartilage, and shocks-absorbs load for 6-12 months.",
      "Postpones total knee replacement and enhances mobility."
    ],
    "benefitsHi": [
      "सोनोग्राफी द्वारा दवा का 100% सही स्थान पर पहुंचना सुनिश्चित, चर्बी में दवा जाने का दर्द नहीं होता।",
      "गंदा पानी खींच लेने से घुटने का तनाव व भारीपन तुरंत खत्म हो जाता है।",
      "हयालूरोनिक एसिड जेल घुटने में प्राकृतिक ग्रीस की तरह काम करता है और 6 से 12 महीने तक घर्षण रोकता है।",
      "घुटना प्रत्यारोपण को टालने और चलने-फिरने में मदद।"
    ],
    "specificRisksEn": [
      "Post-injection pseudo-septic flare or synovitis (1-3% with hyaluronic acid, resolves in 48 hours).",
      "Temporary knee stiffness or fullness feeling after gel injection.",
      "Bruising at needle entry site.",
      "Extremely rare septic arthritis (<1 in 30,000)."
    ],
    "specificRisksHi": [
      "जेल डालने के बाद 1 से 2 दिन तक घुटने में भारीपन या दर्द का हल्का उभार।",
      "घुटने में कुछ दिनों तक कसाव महसूस होना।",
      "सुई के स्थान पर हल्का नील पड़ना।",
      "संक्रमण का अत्यंत दुर्लभ खतरा।"
    ],
    "alternativesEn": "Oral analgesics, knee offloader braces, quadriceps strengthening exercises, genicular artery embolization (GAE), genicular nerve RFA, or total knee arthroplasty.",
    "alternativesHi": "दर्द की गोलियां, नी ब्रेस (पट्टा), कसरत, जेनिकुलर आर्टरी एम्बोलाइजेशन (GAE), नर्व RFA अथवा घुटना प्रत्यारोपण सर्जरी।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "fluro-sacroiliac-joint-injection": {
    "id": "fluro-sacroiliac-joint-injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Fluoroscopy-Guided Sacroiliac Joint Injection",
    "nameHi": "फ्लोरोस्कोपी-गाइडेड सैक्रोइलिएक जॉइंट इंजेक्शन (कमर-कूल्हे के जोड़ में एक्स-रे निर्देशित इंजेक्शन)",
    "indicationEn": "Sacroiliac joint dysfunction, sacroiliitis (ankylosing spondylitis, enteropathic, psoriatic), or chronic low back and buttock pain with positive Fortin finger test, Patrick/FABER, and Gaenslen tests.",
    "indicationHi": "सैक्रोइलिएक जॉइंट का दर्द (कमर के निचले हिस्से और नितंब का दर्द), एंकिलोज़िंग स्पॉन्डिलाइटिस, अथवा जोड़ की सूजन जो बैठने, करवट लेने या झुकने पर बढ़ती हो।",
    "descriptionEn": "Under fluoroscopic guidance with an oblique contralateral beam angle, the inferior third of the sacroiliac joint is targeted. A 22G spinal needle is placed into the synovial joint space. A small volume of iodinated contrast is injected confirming intra-articular arthrogram line, followed by slow injection of long-acting corticosteroid and local anesthetic.",
    "descriptionHi": "एक्स-रे मशीन (फ्लोरोस्कोपी) में विशेष कोण बनाकर कमर और कूल्हे की हड्डी को जोड़ने वाले जोड़ (SI Joint) के निचले हिस्से को देखा जाता है। जोड़ के अंदर बारीक सुई डालकर डाई से पुष्टि की जाती है और फिर सूजन शांत करने वाली दवा व सुन्न करने की दवा डाली जाती है।",
    "benefitsEn": [
      "Fluoroscopic confirmation guarantees true intra-articular placement (blind injections miss the joint in >80% of attempts).",
      "Rapid reduction in buttock pain, sitting intolerance, and groin ache.",
      "Definitive diagnostic validation of sacroiliac pain origin vs. lumbar disc or facet disease.",
      "Restores mobility and enables active physical therapy."
    ],
    "benefitsHi": [
      "एक्स-रे द्वारा 100% सही जोड़ के अंदर दवा पहुंचना सुनिश्चित (बिना एक्स-रे के 80% मामलों में सुई जोड़ से बाहर रह जाती है)।",
      "नितंब के दर्द, बैठने में परेशानी और कमर के दर्द में तेजी से राहत।",
      "सटीक पुष्टि कि दर्द रीढ़ की डिस्क का है या कमर-कूल्हे के जोड़ का।",
      "मरीज के चलने-फिरने और कसरत करने में सुधार।"
    ],
    "specificRisksEn": [
      "Transient lower extremity numbness or weakness if anesthetic tracks to the sciatic or lumbosacral plexus.",
      "Post-injection soreness or temporary steroid flare for 24-48 hours.",
      "Bleeding or hematoma over the posterior superior iliac spine.",
      "Rare infection (<1 in 20,000)."
    ],
    "specificRisksHi": [
      "दवा के थोड़ा फैलने पर कुछ घंटों के लिए पैर में हल्का भारीपन या सुन्नपन (जो कुछ घंटों में ठीक हो जाता है)।",
      "इंजेक्शन के बाद 1 से 2 दिन तक हल्का दर्द।",
      "सुई के स्थान पर हल्का नील पड़ना।",
      "संक्रमण का अत्यंत दुर्लभ खतरा।"
    ],
    "alternativesEn": "Sacroiliac belt, core stabilization physiotherapy, cooled radiofrequency neurotomy of lateral branches (S1-S3), or minimally invasive sacroiliac joint fusion surgery.",
    "alternativesHi": "एसआई बेल्ट, फिजियोथेरेपी, सैक्रोइलिएक नर्व रेडियोफ्रीक्वेंसी (RFA) अथवा जोड़ को जोड़ने का ऑपरेशन (SI Joint Fusion)।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-ankle-tibiotalar-injection": {
    "id": "usg-ankle-tibiotalar-injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Ankle (Tibiotalar) Intra-Articular Injection",
    "nameHi": "अल्ट्रासाउंड-गाइडेड एंकल जॉइंट इंजेक्शन (टखने के जोड़ में सोनोग्राफी निर्देशित दवा इंजेक्शन)",
    "indicationEn": "Tibiotalar osteoarthritis (post-traumatic, primary), inflammatory arthritis (rheumatoid, gout), anterior ankle impingement, or painful synovitis restricting ankle dorsiflexion and walking.",
    "indicationHi": "टखने का गठिया (पोस्ट-ट्रॉमेटिक या पुराना ऑस्टियोआर्थराइटिस), यूरिक एसिड / गाउट, टखने के आगे की सूजन जो चलने और पैर मोड़ने में तेज दर्द देती हो।",
    "descriptionEn": "Under real-time ultrasound guidance via an anteromedial or anterolateral window (strictly avoiding the anterior tibial artery and deep peroneal nerve), a 21-23G needle is introduced into the tibiotalar joint space. Effusion is aspirated if present, followed by slow delivery of corticosteroid and local anesthetic or viscosupplement directly over the talar dome.",
    "descriptionHi": "सोनोग्राफी में टखने की मुख्य नस और खून की धमनी को बचाते हुए टखने के जोड़ (टिबियोटालर जॉइंट) में एक बारीक सुई डाली जाती है। जोड़ से सूजन का पानी निकालकर सीधे हड्डियों के बीच सूजन-रोधी दवा या चिकनाई देने वाला जेल डाला जाता है।",
    "benefitsEn": [
      "Precision guidance completely protects the nearby dorsalis pedis artery and deep peroneal nerve.",
      "Rapid reduction in ankle joint pain, swelling, and morning stiffness.",
      "Improves walking endurance, ankle mobility, and weight-bearing stability.",
      "Delays or prevents the need for ankle arthrodesis (fusion) or total ankle replacement."
    ],
    "benefitsHi": [
      "टखने की मुख्य रक्त वाहिनी और नस को बिना किसी चोट के सुरक्षित रखते हुए सटीक दवा पहुंचाना।",
      "टखने के दर्द, सूजन और अकड़न में तेजी से आराम।",
      "पैर पर वजन देकर चलने की क्षमता और स्थिरता में सुधार।",
      "टखने को जाम करने (Ankle Fusion) या टखना बदलने के ऑपरेशन से बचाव।"
    ],
    "specificRisksEn": [
      "Post-injection ankle soreness or temporary steroid flare for 24-48 hours.",
      "Transient dorsal foot paresthesias if local anesthetic tracks along peroneal branches.",
      "Subcutaneous fat atrophy or skin hypopigmentation.",
      "Extremely rare joint infection (<1 in 30,000)."
    ],
    "specificRisksHi": [
      "इंजेक्शन के बाद 1 से 2 दिन तक टखने में हल्का दर्द।",
      "पैर के पंजे के ऊपर कुछ घंटों के लिए हल्की झनझनाहट।",
      "सुई के स्थान पर त्वचा का रंग हल्का पड़ना।",
      "जोड़ में संक्रमण का बहुत ही दुर्लभ खतरा।"
    ],
    "alternativesEn": "Rocker-bottom shoe modifications, ankle-foot orthosis (AFO), physical therapy, arthroscopic ankle debridement, or ankle fusion/replacement.",
    "alternativesHi": "विशेष जूते, टखने का पट्टा (ब्रेस), फिजियोथेरेपी, दूरबीन से सफाई अथवा टखने का ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-subtalar-joint-injection": {
    "id": "usg-subtalar-joint-injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Subtalar Joint Arthrocentesis and Steroid Injection",
    "nameHi": "अल्ट्रासाउंड-गाइडेड सबटालर जॉइंट इंजेक्शन (एड़ी के निचले जोड़ में सोनोग्राफी निर्देशित इंजेक्शन)",
    "indicationEn": "Subtalar osteoarthritis (post-calcaneal fracture, flatfoot deformity), sinus tarsi syndrome, or lateral hindfoot pain aggravated by walking on uneven ground.",
    "indicationHi": "सबटालर जॉइंट का गठिया (एड़ी की हड्डी टूटने के बाद का दर्द), साइनस टार्सल सिंड्रोम, अथवा उबड़-खाबड़ जमीन पर चलने पर एड़ी के बाहरी हिस्से में तेज दर्द।",
    "descriptionEn": "Under high-frequency ultrasound guidance, the posterior or anterolateral subtalar facet is visualized below the lateral malleolus. A 22G needle is guided under direct vision into the narrow subtalar joint line. A mixture of long-acting corticosteroid and local anesthetic is slowly injected.",
    "descriptionHi": "सोनोग्राफी की मदद से टखने की बाहरी हड्डी के नीचे स्थित सबटालर जोड़ की संकरी जगह को देखा जाता है। सीधी निगरानी में बारीक सुई जोड़ में डालकर सूजन-रोधी दवा और सुन्न करने की दवा इंजेक्ट की जाती है जिससे एड़ी का अंदरूनी घर्षण समाप्त हो जाता है।",
    "benefitsEn": [
      "Direct visualization overcomes the severe anatomical difficulty of this narrow, curved joint.",
      "Substantial relief of hindfoot pain and improvement in walking on uneven surfaces.",
      "Differentiates subtalar pathology from ankle (tibiotalar) arthritis.",
      "Minimally invasive alternative to subtalar joint fusion surgery."
    ],
    "benefitsHi": [
      "अत्यंत संकरे जोड़ में बिना भटके सीधे सही जगह दवा पहुंचाने की अचूक क्षमता।",
      "एड़ी के गहरे दर्द और उबड़-खाबड़ जमीन पर चलने में होने वाली तकलीफ से राहत।",
      "सटीक पहचान कि दर्द टखने का है या एड़ी के निचले जोड़ का।",
      "एड़ी का जोड़ जाम करने के बड़े ऑपरेशन से बचाव।"
    ],
    "specificRisksEn": [
      "Transient numbness in the sural nerve distribution for several hours.",
      "Localized lateral hindfoot soreness for 24-48 hours.",
      "Subcutaneous bruising or mild ecchymosis.",
      "Rare infection (<1 in 25,000)."
    ],
    "specificRisksHi": [
      "पैर के बाहरी किनारे पर कुछ घंटों के लिए हल्का सुन्नपन।",
      "एड़ी के बाहर 1 से 2 दिन तक हल्का खिंचाव या दर्द।",
      "सुई के स्थान पर हल्का नील पड़ना।",
      "संक्रमण का अत्यंत दुर्लभ खतरा।"
    ],
    "alternativesEn": "Custom orthotic arch supports, heel cups, physical therapy, or subtalar arthrodesis (surgical fusion).",
    "alternativesHi": "ऑर्थोपेडिक इनसोल, हील कप, फिजियोथेरेपी अथवा सबटालर फ्यूजन सर्जरी।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-acromioclavicular-joint-injection": {
    "id": "usg-acromioclavicular-joint-injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Acromioclavicular Joint Injection",
    "nameHi": "अल्ट्रासाउंड-गाइडेड एक्रोमियोक्लेविकुलर जॉइंट इंजेक्शन (कंधे व कॉलर बोन के जोड़ में सटीक दवा इंजेक्शन)",
    "indicationEn": "Acromioclavicular (AC) joint osteoarthritis, post-traumatic AC separation arthrosis, distal clavicle osteolysis (weightlifter's shoulder), or focal superior shoulder pain with cross-body adduction test.",
    "indicationHi": "कंधे और कॉलर बोन (हंसली की हड्डी) के जोड़ का गठिया (AC Joint Osteoarthritis), वजन उठाने पर कंधे के ऊपरी हिस्से में तेज चुभन, तथा हाथ को दूसरी तरफ ले जाने पर दर्द।",
    "descriptionEn": "Under high-frequency ultrasound guidance, the narrow acromioclavicular joint space and superior AC ligament are visualized. A 25G needle is guided in-plane into the superficial joint capsule. A small, precise volume (1.0-1.5 mL) of corticosteroid and local anesthetic is delivered directly into the joint space.",
    "descriptionHi": "सोनोग्राफी की मदद से कंधे के ऊपरी जोड़ की संकरी जगह को देखकर एक अति-बारीक सुई सीधे जोड़ के अंदर डाली जाती है। जोड़ बहुत छोटा होने के कारण केवल 1 से 1.5 मिलीलीटर दवा की सटीक मात्रा छोड़ी जाती है, जिससे जोड़ की सूजन और हड्डियों का घर्षण तुरंत रुक जाता है।",
    "benefitsEn": [
      "Overcomes the high failure rate of blind AC joint injections into a tiny 2-3 mm space.",
      "Rapid resolution of focal superior shoulder pain and tenderness.",
      "Restores overhead lifting and cross-body arm movement without pain.",
      "Avoids open or arthroscopic distal clavicle resection (Mumford procedure)."
    ],
    "benefitsHi": [
      "2-3 मिमी के अत्यंत छोटे जोड़ में भी 100% सटीक दवा पहुंचना।",
      "कंधे के ऊपर छूने पर होने वाले तेज दर्द से त्वरित राहत।",
      "हाथ ऊपर उठाने, वजन उठाने और कपड़े पहनने में तुरंत आसानी।",
      "कॉलर बोन की हड्डी काटने के ऑपरेशन (Mumford Procedure) से बचाव।"
    ],
    "specificRisksEn": [
      "Mild localized pain or capsule fullness for 24-48 hours.",
      "Skin hypopigmentation or subcutaneous fat atrophy (due to superficial joint depth).",
      "Post-injection steroid flare.",
      "Extremely rare infection (<1 in 30,000)."
    ],
    "specificRisksHi": [
      "इंजेक्शन के बाद 1 से 2 दिनों तक कंधे के ऊपर हल्का भारीपन।",
      "जोड़ चमड़ी के बहुत पास होने के कारण त्वचा पर हल्का सफेद निशान बनने का जोखिम।",
      "स्टेरॉयड के असर से 24 घंटे तक हल्का दर्द।",
      "संक्रमण का अत्यंत दुर्लभ खतरा।"
    ],
    "alternativesEn": "Oral anti-inflammatory drugs, activity modification (avoiding heavy overhead bench pressing), or surgical excision of the distal clavicle.",
    "alternativesHi": "दवाइयां, भारी वजन उठाने से परहेज, अथवा कॉलर बोन के सिरे को काटने का ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-sternoclavicular-joint-injection": {
    "id": "usg-sternoclavicular-joint-injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Sternoclavicular Joint Injection",
    "nameHi": "अल्ट्रासाउंड-गाइडेड स्टर्नोक्लेविकुलर जॉइंट इंजेक्शन (छाती व कॉलर बोन के जोड़ में सोनोग्राफी निर्देशित इंजेक्शन)",
    "indicationEn": "Sternoclavicular (SC) joint osteoarthritis, inflammatory arthritis (ankylosing spondylitis, SAPHO syndrome), post-traumatic subluxation arthropathy, or painful focal swelling at the base of the neck.",
    "indicationHi": "छाती की हड्डी और कॉलर बोन के जोड़ का गठिया (SC Joint Osteoarthritis), गले के निचले हिस्से में दर्दनाक सूजन, तथा हाथ हिलाने पर छाती के ऊपरी हिस्से में तेज दर्द।",
    "descriptionEn": "Under real-time ultrasound guidance with continuous visualization of the retrosternal great vessels and pleural dome, a 25G needle is carefully introduced into the anterior sternoclavicular joint space. A small volume of local anesthetic and corticosteroid is injected with absolute safety.",
    "descriptionHi": "सोनोग्राफी की मदद से छाती के अंदर स्थित फेफड़ों और मुख्य रक्त धमनियों को पूरी तरह सुरक्षित रखते हुए अत्यंत सावधानी से जोड़ के अंदर सुई डाली जाती है। सूजन-रोधी दवा की सूक्ष्म मात्रा सीधे जोड़ में पहुंचाई जाती है जिससे गले और छाती का दर्द शांत हो जाता है।",
    "benefitsEn": [
      "Essential ultrasound guidance completely eliminates catastrophic risk of puncturing the retrosternal brachiocephalic vessels or pleura.",
      "Rapid reduction in localized anterior neck and chest wall pain.",
      "Restores shoulder girdle biomechanics and neck mobility.",
      "Avoids dangerous open surgical SC joint resection."
    ],
    "benefitsHi": [
      "सोनोग्राफी द्वारा फेफड़ों और दिल की मुख्य नसों को 100% सुरक्षित रखते हुए बिना किसी खतरे के दवा पहुंचाना।",
      "गले और छाती की हड्डी के दर्द व सूजन में तुरंत भारी आराम।",
      "गर्दन और कंधे को घुमाने में पूरी सहजता।",
      "छाती के पास होने वाले जोखिम भरे खुले ऑपरेशन से बचाव।"
    ],
    "specificRisksEn": [
      "Local soreness or tenderness over the sternum for 24-48 hours.",
      "Skin blanching or subcutaneous thinning.",
      "Extremely rare mediastinal extravasation or vascular puncture (prevented by ultrasound visualization).",
      "Rare infection (<1 in 30,000)."
    ],
    "specificRisksHi": [
      "छाती की हड्डी के पास 1 से 2 दिन तक हल्का दर्द।",
      "त्वचा का रंग हल्का पड़ना।",
      "अत्यंत दुर्लभ परिस्थितियों में दवा का आसपास जाना (सोनोग्राफी से पूर्णतः बचाव)।",
      "संक्रमण का अत्यंत दुर्लभ खतरा।"
    ],
    "alternativesEn": "Oral analgesics, heat/cold therapy, physical therapy, or surgical sternoclavicular joint debridement/resection.",
    "alternativesHi": "दर्द की गोलियां, सिकाई, फिजियोथेरेपी अथवा सर्जिकल ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-psoas-bursa-aspiration-sclerosis": {
    "id": "usg-psoas-bursa-aspiration-sclerosis",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Psoas Bursa Aspiration and Sclerosis",
    "nameHi": "अल्ट्रासाउंड-गाइडेड सोआस बर्सा एस्पिरेशन एवं स्क्लेरोथेरेपी (कमर-जांघ की अंदरूनी थैली से पानी निकालना व चिपकाना)",
    "indicationEn": "Iliopectineal / iliopsoas bursitis with painful anterior groin swelling, snapping hip syndrome, femoral nerve compression symptoms, or large persistent fluid collection refractory to conservative treatment.",
    "indicationHi": "इलिओसोआस बर्साइटिस (जांघ के मोड़ में गहरी थैली का सूज जाना व पानी भरना), चलने पर जांघ में चटकने की आवाज व तेज दर्द, अथवा पैर की मुख्य नस पर दबाव पड़ना।",
    "descriptionEn": "Under real-time ultrasound guidance, the femoral nerve, femoral artery, and psoas tendon are mapped in the groin. A 18-20G needle is steered directly into the distended iliopsoas bursa beneath the psoas tendon. All cystic/inflammatory fluid is completely aspirated to decompress adjacent neurovascular structures, followed by instillation of corticosteroid or dilute sclerosant to prevent fluid re-accumulation.",
    "descriptionHi": "सोनोग्राफी में जांघ की मुख्य नस व धमनी को बचाते हुए सोआस टेंडन के नीचे बनी पानी की बड़ी थैली (बर्सा) में एक सुई डाली जाती है। थैली का सारा द्रव बाहर खींचकर खाली कर दिया जाता है और फिर अंदर विशेष दवा डाली जाती है ताकि थैली की दीवारें आपस में चिपक जाएं और दोबारा पानी न भरे।",
    "benefitsEn": [
      "Immediate decompression of the femoral nerve and relief of groin tension and pain.",
      "Complete visualization protects the femoral neurovascular bundle from accidental puncture.",
      "Sclerotherapy significantly reduces the recurrence rate of chronic psoas bursal effusion.",
      "Avoids deep retroperitoneal surgical bursal excision."
    ],
    "benefitsHi": [
      "पैर की नस पर पड़ रहा दबाव तुरंत खत्म होना और जांघ के तनाव व दर्द से तुरंत राहत।",
      "सोनोग्राफी द्वारा जांघ की मुख्य नसों को सुरक्षित रखना।",
      "थैली को अंदर से सुखा देने से दोबारा पानी भरने का खतरा बहुत कम।",
      "पेट और जांघ के गहरे जटिल ऑपरेशन से बचाव।"
    ],
    "specificRisksEn": [
      "Groin aching or soreness lasting 2-4 days.",
      "Transient femoral nerve irritation or anterior thigh numbness if fluid extravasates.",
      "Fluid recurrence requiring repeat aspiration in extensive cases.",
      "Puncture site hematoma in the groin.",
      "Rare infection (<0.2%)."
    ],
    "specificRisksHi": [
      "जांघ के मोड़ में 2 से 4 दिन तक हल्का भारीपन या दर्द।",
      "कुछ घंटों के लिए जांघ के आगे हल्का सुन्नपन।",
      "कुछ मामलों में बहुत समय बाद दोबारा थोड़ा पानी बनने की संभावना।",
      "सुई के स्थान पर हल्का नील पड़ना।",
      "संक्रमण का बहुत ही दुर्लभ खतरा।"
    ],
    "alternativesEn": "Oral NSAIDs, hip rest, physical therapy, or open surgical/laparoscopic iliopsoas bursa excision.",
    "alternativesHi": "दवाइयां, आराम, फिजियोथेरेपी अथवा दूरबीन/चीरे द्वारा थैली निकालने का ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia with optional conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) आवश्यकतानुसार हल्की शामक दवा के साथ।"
  },
  "usg-trochanteric-bursa-injection-gtps": {
    "id": "usg-trochanteric-bursa-injection-gtps",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Greater Trochanteric Bursa Injection for GTPS",
    "nameHi": "अल्ट्रासाउंड-गाइडेड ग्रेटर ट्रोकैंटेरिक बर्सा इंजेक्शन (जीटीपीएस - कूल्हे के बाहरी हिस्से में दर्द व सूजन का सटीक उपचार)",
    "indicationEn": "Greater Trochanteric Pain Syndrome (GTPS) comprising trochanteric bursitis, gluteus medius/minimus tendinopathy, or external snapping hip with intractable lateral hip pain preventing sleeping on the affected side.",
    "indicationHi": "ग्रेटर ट्रोकैंटेरिक पेन सिंड्रोम (GTPS - कूल्हे के बाहरी हिस्से का पुराना दर्द), करवट लेकर सोने में तेज दर्द, सीढ़ियां चढ़ने व चलने में तकलीफ जो साधारण दवाइयों से ठीक न हो रही हो।",
    "descriptionEn": "Under real-time ultrasound guidance, the greater trochanter facets (anterior, lateral, posterior) and gluteal tendon insertions are examined. A 21-22G needle is guided with precision into the subgluteus maximus or trochanteric bursa immediately superficial to the gluteus medius tendon. A mixture of long-acting corticosteroid and local anesthetic is deposited directly into the inflamed bursal plane.",
    "descriptionHi": "सोनोग्राफी में कूल्हे की बाहरी हड्डी और उस पर जुड़े स्नायुओं को देखकर बर्सा (सूजन वाली थैली) में एक बारीक सुई डाली जाती है। सूजन-रोधी दवा और सुन्न करने की दवा सीधे थैली में पहुंचाई जाती है, जिससे कूल्हे के बाहरी हिस्से की सूजन शांत होती है और मरीज उसी दिन से करवट लेकर बिना दर्द के सो सकता है।",
    "benefitsEn": [
      "Differentiates and accurately treats trochanteric bursitis vs. underlying gluteal tendon tears.",
      "Rapid relief of lateral hip pain, allowing patients to sleep comfortably on the affected side.",
      "Significantly superior clinical outcomes compared to blind palpation-guided injections.",
      "Restores normal walking gait and eliminates compensatory limp."
    ],
    "benefitsHi": [
      "सोनोग्राफी से स्पष्ट पता चलता है कि दर्द थैली की सूजन का है या स्नायु फटने का, और सटीक इलाज संभव होता है।",
      "कूल्हे के बाहरी हिस्से के दर्द से तुरंत राहत जिससे मरीज रात को आराम से सो सकता है।",
      "बिना मशीन के लगाए जाने वाले इंजेक्शन की तुलना में कहीं अधिक असरदार और सटीक।",
      "लंगड़ाकर चलने की समस्या से मुक्ति और सामान्य चाल की बहाली।"
    ],
    "specificRisksEn": [
      "Transient lateral thigh soreness or steroid flare for 24-48 hours.",
      "Subcutaneous fat atrophy or skin depigmentation over the trochanter.",
      "Transient systemic steroid effects (facial flush, mild hyperglycemia in diabetics).",
      "Extremely rare deep tissue infection (<1 in 25,000)."
    ],
    "specificRisksHi": [
      "इंजेक्शन के बाद 1 से 2 दिनों तक कूल्हे पर हल्का दर्द या कसाव।",
      "त्वचा का रंग हल्का पड़ना या चर्बी कम होना।",
      "डायबिटीज के मरीजों में 2-3 दिन के लिए शुगर का स्तर थोड़ा बढ़ना।",
      "संक्रमण का अत्यंत दुर्लभ खतरा।"
    ],
    "alternativesEn": "Extracorporeal shockwave therapy (ESWT), gluteal isometric strengthening physiotherapy, PRP injection, or endoscopic surgical bursectomy/iliotibial band release.",
    "alternativesHi": "शॉकवेव थेरेपी, फिजियोथेरेपी, पीआरपी (PRP) इंजेक्शन अथवा दूरबीन का ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-baker-cyst-aspiration-sclerosis": {
    "id": "usg-baker-cyst-aspiration-sclerosis",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Aspiration and Sclerotherapy of Baker's (Popliteal) Cyst",
    "nameHi": "अल्ट्रासाउंड-गाइडेड बेकर्स सिस्ट एस्पिरेशन एवं स्क्लेरोथेरेपी (घुटने के पीछे बनी पानी की गांठ को खाली करना व सुखाना)",
    "indicationEn": "Symptomatic popliteal (Baker's) cyst with posterior knee tightness, restricted knee flexion, calf pain mimicking deep vein thrombosis (pseudothrombophlebitis), or impending rupture.",
    "indicationHi": "बेकर्स सिस्ट (घुटने के पीछे पानी की बड़ी गांठ), घुटना मोड़ने में रुकावट व भारीपन, पिंडली में खिंचाव या गांठ के फटने का खतरा।",
    "descriptionEn": "Under real-time ultrasound guidance, the popliteal cyst neck (between the medial head of gastrocnemius and semimembranosus tendon) and adjacent popliteal artery and tibial nerve are identified. An 18G needle is inserted into the cyst. The thick gelatinous synovial fluid is completely evacuated, followed by instillation of corticosteroid or dilute sclerosant into the cyst cavity to seal the walls, along with addressing intra-articular pathology.",
    "descriptionHi": "सोनोग्राफी की सीधी निगरानी में घुटने के पीछे की मुख्य रक्त धमनी और नस को बचाते हुए गांठ के अंदर एक सुई डाली जाती है। गांठ के अंदर भरा सारा गाढ़ा जेली जैसा पानी पूरी तरह बाहर खींच लिया जाता है। इसके बाद अंदर दवा डालकर गांठ की दीवारों को चिपका दिया जाता है ताकि वह दोबारा न फूले।",
    "benefitsEn": [
      "Immediate decompression of the popliteal fossa, restoring full knee flexion and walking comfort.",
      "Real-time ultrasound guidance protects the vital popliteal neurovascular bundle.",
      "Sclerotherapy/steroid application dramatically lowers cyst recurrence rates.",
      "Avoids open surgical cyst excision, which has high morbidity and high recurrence if the valvular neck is not addressed."
    ],
    "benefitsHi": [
      "घुटने के पीछे का भारीपन और तनाव तुरंत खत्म होना, जिससे घुटना पूरी तरह मुड़ने लगता है।",
      "सोनोग्राफी द्वारा घुटने की मुख्य नस और खून की नाड़ी की 100% सुरक्षा।",
      "दवा डालने से गांठ के दोबारा भरने की संभावना में भारी कमी।",
      "घुटने के पीछे चीरा लगाकर गांठ निकालने के जटिल ऑपरेशन से बचाव।"
    ],
    "specificRisksEn": [
      "Transient posterior knee soreness or stiffness for 24-48 hours.",
      "Fluid recurrence if underlying intra-articular knee effusion/meniscal tear is untreated.",
      "Local subcutaneous ecchymosis or minor hematoma.",
      "Extremely rare popliteal vessel puncture or infection (<0.1%)."
    ],
    "specificRisksHi": [
      "प्रक्रिया के बाद 1 से 2 दिनों तक घुटने के पीछे हल्का खिंचाव।",
      "यदि घुटने के अंदर का गठिया या गद्दी फटने का इलाज न हो तो कुछ समय बाद दोबारा पानी भरने की संभावना।",
      "सुई के स्थान पर हल्का नील पड़ना।",
      "खून की नस में चोट या संक्रमण का अत्यंत दुर्लभ खतरा (<0.1%)।"
    ],
    "alternativesEn": "Compression knee sleeve, treatment of underlying knee arthritis/meniscal tear, watchful waiting, or open surgical popliteal cystectomy.",
    "alternativesHi": "घुटने का सपोर्टर, घुटने के अंदरूनी गठिया का इलाज, अथवा सर्जिकल ऑपरेशन द्वारा गांठ निकालना।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-ganglion-cyst-aspiration-sclerosis": {
    "id": "usg-ganglion-cyst-aspiration-sclerosis",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Ganglion Cyst Aspiration, Fenestration, and Sclerosis (Wrist, Foot)",
    "nameHi": "अल्ट्रासाउंड-गाइडेड गैंग्लियन सिस्ट एस्पिरेशन एवं स्क्लेरोथेरेपी (कलाई या पैर की गांठ से जेली निकालना व चिपकाना)",
    "indicationEn": "Painful, disfiguring, or compressive ganglion cyst of the wrist (dorsal/volar) or foot/ankle causing mechanical discomfort, nerve compression, or cosmetic concern.",
    "indicationHi": "गैंग्लियन सिस्ट (कलाई या पैर पर उभरी हुई जेली जैसी गांठ), हाथ या पैर हिलाने में दर्द, नस पर दबाव पड़ना, अथवा गांठ का भद्दा दिखना।",
    "descriptionEn": "Under high-frequency ultrasound guidance, the cyst wall, multilocular internal septa, and stalk connecting to the joint capsule are mapped. Adjacent radial/ulnar vessels and tendons are strictly avoided. A 16-18G needle is inserted into the cyst, the thick viscid mucinous jelly is aspirated under negative pressure, the internal septa and capsule wall are fenestrated with the needle tip, and a small volume of corticosteroid/sclerosant is injected into the collapsed cavity.",
    "descriptionHi": "सोनोग्राफी में गांठ, उसकी जड़ और आसपास की नसों को देखते हुए एक सुई डाली जाती है। गांठ के अंदर भरी गाढ़ी जेली को पूरी तरह खींचकर बाहर निकाल दिया जाता है। सुई की नोक से थैली की आंतरिक दीवारों में बारीक छेद किए जाते हैं और दवा डाली जाती है ताकि गांठ सूखकर पूरी तरह बैठ जाए।",
    "benefitsEn": [
      "Instant flattening and disappearance of the visible cyst deformity.",
      "Relief of focal pain, nerve tingling, and mechanical joint restriction.",
      "Ultrasonic fenestration and sclerosis reduce the traditional 50% recurrence of simple aspiration down to <15-20%.",
      "Pinhole outpatient procedure without surgical scars, stitches, or wrist splinting."
    ],
    "benefitsHi": [
      "हाथ या पैर पर उभरी हुई गांठ का उसी समय पूरी तरह बैठ जाना व गायब होना।",
      "कलाई या पैर के दर्द और जकड़न से तुरंत राहत।",
      "दीवारों को छेदने और दवा डालने से दोबारा गांठ बनने का खतरा साधारण सुई की तुलना में बहुत कम हो जाता है।",
      "बिना किसी चीरे, टांके या निशान के ओपीडी में 10 मिनट में आसान इलाज।"
    ],
    "specificRisksEn": [
      "Cyst recurrence over long-term follow-up (15-25% in complex multilocular cysts).",
      "Transient wrist or foot ache for 24-48 hours.",
      "Localized skin hypopigmentation or subcutaneous fat atrophy from steroid.",
      "Extremely rare radial or ulnar vessel injury or infection (<0.1%)."
    ],
    "specificRisksHi": [
      "जटिल गांठों में भविष्य में दोबारा थोड़ा द्रव भरने की 15-20% संभावना।",
      "प्रक्रिया के बाद 1-2 दिन तक हल्का दर्द।",
      "त्वचा का रंग हल्का पड़ना।",
      "रक्त धमनी में चोट या इन्फेक्शन का अत्यंत दुर्लभ खतरा (<0.1%)।"
    ],
    "alternativesEn": "Observation / watchful waiting, heavy pressure rupture (not recommended), or open surgical ganglionectomy.",
    "alternativesHi": "निगरानी रखना, अथवा चीरा लगाकर गांठ निकालने का सर्जिकल ऑपरेशन (Ganglionectomy)।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "usg-piriformis-injection-botox-steroid": {
    "id": "usg-piriformis-injection-botox-steroid",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Piriformis Muscle Botulinum Toxin / Steroid Injection",
    "nameHi": "अल्ट्रासाउंड-गाइडेड पिरिफॉर्मिस इंजेक्शन (कूल्हे की गहरी मांसपेशी में बोटॉक्स अथवा स्टेरॉयड - साइटिका दर्द निवारण)",
    "indicationEn": "Piriformis syndrome with deep gluteal pain, buttock aching radiating down the posterior thigh (pseudo-sciatica), aggravated by sitting, with normal lumbar spine MRI and positive FAIR / Beatty tests.",
    "indicationHi": "पिरिफॉर्मिस सिंड्रोम (कूल्हे की गहरी मांसपेशी की ऐंठन व साइटिक नस का दबना), नितंब में तेज दर्द जो जांघ के पीछे पैर तक जाता हो, बैठने में अत्यधिक तकलीफ, जबकि कमर की एमआरआई सामान्य हो।",
    "descriptionEn": "Under real-time curved-array ultrasound guidance, the gluteus maximus, piriformis muscle belly, and underlying sciatic nerve are imaged in the deep gluteal space. A 22G spinal needle is guided in-plane directly into the thickest substance of the piriformis muscle, strictly avoiding the sciatic nerve. Botulinum toxin type A (50-100 units) or a corticosteroid/local anesthetic solution is injected to induce prolonged muscle relaxation and eliminate compression on the sciatic nerve.",
    "descriptionHi": "सोनोग्राफी की मदद से नितंब की गहरी मांसपेशियों और उसके नीचे से गुजर रही साइटिक नस (पैर की मुख्य नस) को देखा जाता है। साइटिक नस को बचाते हुए सुई को सीधे पिरिफॉर्मिस मांसपेशी के अंदर पहुंचाया जाता है। वहां बोटुलिनम टॉक्सिन (बोटॉक्स) अथवा स्टेरॉयड दवा डाली जाती है, जिससे अकड़ी हुई मांसपेशी ढीली पड़ जाती है और साइटिक नस का दबाव तुरंत खत्म हो जाता है।",
    "benefitsEn": [
      "Direct visualization guarantees intramuscular placement while fully protecting the sciatic nerve.",
      "Profound, prolonged relief (3-6 months with Botox) of deep buttock pain and radiating leg discomfort.",
      "Enables comfortable sitting and painless walking.",
      "Avoids deep surgical piriformis tenotomy or open sciatic nerve neurolysis."
    ],
    "benefitsHi": [
      "सोनोग्राफी द्वारा साइटिक नस को सुरक्षित रखते हुए केवल अकड़ी हुई मांसपेशी में दवा पहुंचाना।",
      "नितंब के असहनीय दर्द और पैर में जाने वाले करंट जैसे दर्द से 3 से 6 महीने तक लंबी राहत।",
      "बिना दर्द के आसानी से बैठने और चलने-फिरने की क्षमता की वापसी।",
      "कूल्हे के गहरे चीर-फाड़ वाले ऑपरेशन (Piriformis Tenotomy) से बचाव।"
    ],
    "specificRisksEn": [
      "Transient lower extremity motor weakness or numbness for 2-4 hours if local anesthetic contacts the sciatic nerve.",
      "Post-injection deep muscular soreness or aching for 3-5 days.",
      "Delayed therapeutic onset with Botox (full relaxation takes 7-14 days).",
      "Extremely rare sciatic nerve direct puncture or deep gluteal hematoma (<0.2%)."
    ],
    "specificRisksHi": [
      "दवा के हल्के असर से 2 से 4 घंटे तक पैर में थोड़ा सुन्नपन या कमजोरी (जो जल्दी ठीक हो जाती है)।",
      "मांसपेशी में 3 से 5 दिनों तक हल्का खिंचाव या दर्द।",
      "बोटॉक्स का पूरा असर आने में 7 से 14 दिन का समय लगना।",
      "साइटिक नस में चोट या गहरा खून जमा होने का बहुत ही दुर्लभ खतरा (<0.2%)।"
    ],
    "alternativesEn": "Targeted piriformis stretching physiotherapy, oral muscle relaxants and neuropathic agents, blind landmark-guided injection, or open surgical piriformis release.",
    "alternativesHi": "विशिष्ट फिजियोथेरेपी व स्ट्रेचिंग, मांसपेशी ढीली करने वाली दवाइयां, अथवा सर्जिकल ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "percutaneous-thermal-ablation-msk-tumors": {
    "id": "percutaneous-thermal-ablation-msk-tumors",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Percutaneous Thermal Ablation (RFA / Laser / Cryo) for Musculoskeletal Tumors",
    "nameHi": "परक्यूटेनियस थर्मल एब्लेशन (हड्डी व मांसपेशियों के ट्यूमर - ऑस्टियोइड ऑस्टियोमा व मेटास्टेसिस का ताप विच्छेदन)",
    "indicationEn": "Benign bone tumors such as Osteoid Osteoma (nidus < 1.5 cm) with intractable night pain relieved by NSAIDs, or painful osteolytic/mixed bone metastases in the pelvis, spine, or extremities requiring palliative local tumor control.",
    "indicationHi": "हड्डी का ट्यूमर (ऑस्टियोइड ऑस्टियोमा - रात में हड्डी का तेज असहनीय दर्द), अथवा कैंसर के शरीर की हड्डियों में फैलने (बोन मेटास्टेसिस) पर होने वाला गंभीर दर्द, जिसका लक्ष्य बिना बड़े ऑपरेशन के गांठ को सुई द्वारा जलाकर नष्ट करना हो।",
    "descriptionEn": "Under precise CT or CBCT fluoroscopic guidance, an access cannula and bone drill are navigated directly into the tumor epicenter or osteoid osteoma nidus. Thermal protection techniques (hydrodissection / thermocouple monitoring) are established for adjacent nerves or skin. Radiofrequency (RFA, 90°C for 4-6 minutes), microwave, or cryoablation energy is applied to achieve complete coagulative necrosis of the tumor cells while preserving normal cortical bone.",
    "descriptionHi": "सीटी स्कैन (CT) की 3D निगरानी में एक विशेष सुई व हड्डी की ड्रिल को सीधे ट्यूमर के बीच में पहुंचाया जाता है। आसपास की मुख्य नसों और त्वचा को ठंडक या पानी से सुरक्षित किया जाता है। इसके बाद रेडियोफ्रीक्वेंसी या माइक्रोवेव की ऊष्मा द्वारा ट्यूमर कोशिकाओं को पूरी तरह जलाकर निष्प्रभावी कर दिया जाता है, जिससे दर्द तुरंत समाप्त हो जाता है।",
    "benefitsEn": [
      ">95% primary clinical cure rate for osteoid osteoma with single-session ablation.",
      "Instantaneous, permanent relief of deep nocturnal bone aching.",
      "Avoids open surgical bone resection (en-bloc excision) which requires large bone grafts and internal metal plates.",
      "Minimal downtime; patients walk out the same day or next morning without crutches."
    ],
    "benefitsHi": [
      "ऑस्टियोइड ऑस्टियोमा ट्यूमर में 95% से अधिक मामलों में एक ही बार में स्थायी रूप से पूर्ण इलाज।",
      "रात को होने वाले असहनीय हड्डी के दर्द से उसी दिन हमेशा के लिए मुक्ति।",
      "हड्डी को काटकर निकालने के बड़े ऑपरेशन, हड्डी के ग्राफ्ट और लोहे की प्लेट लगाने से बचाव।",
      "प्रक्रिया के कुछ ही घंटों बाद बिना सहारे के चलने-फिरने की सुविधा।"
    ],
    "specificRisksEn": [
      "Thermal injury to adjacent major peripheral nerves causing sensory numbness or motor weakness (mitigated by CT monitoring and hydrodissection).",
      "Post-ablation focal bone soreness or inflammatory swelling for 3-7 days.",
      "Skin thermal burn or blister if tumor is very superficial to cortical margin.",
      "Secondary pathological bone fracture through ablated cortical defect during heavy physical loading.",
      "Extremely rare bone infection or osteomyelitis (<0.5%)."
    ],
    "specificRisksHi": [
      "ट्यूमर के पास की किसी मुख्य नस पर ताप का असर होने पर पैर या हाथ में सुन्नपन का दुर्लभ जोखिम (सीटी स्कैन से सुरक्षा)।",
      "प्रक्रिया के बाद 3 से 7 दिनों तक हड्डी में हल्का दर्द या सूजन।",
      "त्वचा के बहुत पास होने पर चमड़ी पर हल्का छाला बनने की दुर्लभ संभावना।",
      "उपचार के बाद भारी वजन उठाने पर हड्डी में फ्रैक्चर का हल्का जोखिम (जब तक हड्डी दोबारा मजबूत न हो जाए)।",
      "हड्डी में संक्रमण का अत्यंत दुर्लभ खतरा (<0.5%)।"
    ],
    "alternativesEn": "Long-term high-dose oral NSAIDs, open surgical curettage and bone grafting, external beam radiation therapy (for metastases), or palliative opioid analgesics.",
    "alternativesHi": "जीवन भर तेज दर्द निवारक दवाइयां, हड्डी काटकर ट्यूमर निकालने का बड़ा ऑपरेशन, बाहर से सिकाई (रेडिएशन थेरेपी), अथवा मॉर्फिन जैसी दवाइयां।",
    "sedationTypeEn": "General anesthesia or deep intravenous monitored conscious sedation.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा गहरी नस द्वारा शामक दवा (Deep Sedation)।"
  },
  "usg-si-joint-rfa-simplicity": {
    "id": "usg-si-joint-rfa-simplicity",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "nameEn": "Ultrasound-Guided Radiofrequency Ablation for Chronic Sacroiliac Joint Pain (Simplicity Probe)",
    "nameHi": "अल्ट्रासाउंड-गाइडेड सैक्रोइलिएक जॉइंट रेडियोफ्रीक्वेंसी एब्लेशन (सिम्प्लिसिटी प्रोब - कमर-कूल्हे के जोड़ के दर्द हेतु थर्मल न्यूरोटॉमी)",
    "indicationEn": "Intractable chronic sacroiliac joint pain confirmed by >= 50-80% pain relief following diagnostic lateral branch or intra-articular blocks, lasting > 6 months refractory to conservative therapy.",
    "indicationHi": "कमर-कूल्हे के जोड़ (SI Joint) का गंभीर पुराना दर्द, जो जांच वाले इंजेक्शन (Diagnostic Block) से अस्थाई रूप से शांत हुआ हो, लेकिन कसरत और दवाइयों से स्थायी राहत न मिली हो।",
    "descriptionEn": "Under real-time ultrasound or fluoroscopic fusion guidance, a specialized curved multi-electrode radiofrequency probe (Simplicity III) is inserted parallel to the lateral sacral crest from S1 to S4. Controlled thermal radiofrequency energy creates a continuous strip lesion along the lateral sacral branch nerves innervating the posterior sacroiliac joint ligamentous complex.",
    "descriptionHi": "सोनोग्राफी और एक्स-रे की मदद से कमर की त्रिक हड्डी (Sacrum) के पास एक विशेष मल्टी-इलेक्ट्रोड प्रोब (Simplicity Probe) डाली जाती है। यह प्रोब जोड़ को दर्द का संकेत भेजने वाली सूक्ष्म नसों की पूरी पट्टी को रेडियोफ्रीक्वेंसी ऊष्मा द्वारा निष्क्रिय कर देती है, जिससे जोड़ का पुराना दर्द लंबे समय के लिए बंद हो जाता है।",
    "benefitsEn": [
      "Durable, long-term pain relief (6 to 18 months) for recalcitrant sacroiliac joint pain.",
      "Single-puncture continuous strip lesion replaces multiple individual needle punctures (S1, S2, S3, L5).",
      "Significantly improves sitting tolerance, walking distance, and daily physical functioning.",
      "Avoids invasive surgical sacroiliac joint fusion instrumentation."
    ],
    "benefitsHi": [
      "कमर और नितंब के पुराने दर्द से 6 से 18 महीने तक लंबी और निरंतर राहत।",
      "बार-बार कई सुइयां चुभाने के बजाय केवल एक ही सुई से पूरी नसों का एक साथ इलाज।",
      "बैठने, झुकने और चलने-फिरने की क्षमता में जबरदस्त सुधार।",
      "कमर में लोहे के पेंच व रॉड लगाने वाली बड़ी सर्जरी (SI Joint Fusion) से बचाव।"
    ],
    "specificRisksEn": [
      "Post-procedure localized back/buttock muscle soreness and sunburn sensation lasting 1-2 weeks.",
      "Transient sensory dysesthesias in the posterior gluteal skin.",
      "Puncture site hematoma or superficial subcutaneous bruising.",
      "Extremely rare thermal injury to the S1 or S2 ventral nerve roots causing lower limb weakness (<0.2%)."
    ],
    "specificRisksHi": [
      "उपचार के बाद 1 से 2 सप्ताह तक नितंब की मांसपेशियों में धूप में जलने जैसा खिंचाव या भारीपन।",
      "नितंब की त्वचा में कुछ समय के लिए संवेदनशीलता का बदलाव।",
      "सुई के स्थान पर हल्का नील पड़ना।",
      "पैर की मुख्य नस पर ताप लगने का अत्यंत दुर्लभ खतरा (<0.2%)।"
    ],
    "alternativesEn": "Cooled radiofrequency ablation, repeated corticosteroid SI joint injections, specialized pelvic stabilization physical therapy, or surgical SI joint fusion.",
    "alternativesHi": "कूल्ड रेडियोफ्रीक्वेंसी (Cooled RFA), बार-बार स्टेरॉयड इंजेक्शन, पेल्विक फिजियोथेरेपी अथवा सर्जिकल जॉइंट फ्यूजन।",
    "sedationTypeEn": "Local anesthesia with intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक दवा।"
  },
  "pvp-vertebroplasty-osteoporotic": {
    "id": "pvp-vertebroplasty-osteoporotic",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Percutaneous Vertebroplasty (PVP) for Osteoporotic Vertebral Compression Fractures",
    "nameHi": "परक्यूटेनियस वर्टीब्रोप्लास्टी (PVP - कमजोर/टूटे हुए मनके में हड्डी का विशेष सीमेंट भरना)",
    "indicationEn": "Acute or subacute osteoporotic vertebral compression fracture (OVCF, Thoracic T4-T12 or Lumbar L1-L5) with severe focal back pain, bone marrow edema on STIR MRI, and failure to mobilize or ambulate despite optimal analgesics.",
    "indicationHi": "ऑस्टियोपोरोसिस (हड्डियों की कमजोरी) के कारण रीढ़ की हड्डी के मनके का दबना या टूटना (Vertebral Fracture), उठने-बैठने व करवट लेने में रीढ़ में असहनीय दर्द, तथा एमआरआई में हड्डी में सूजन की पुष्टि।",
    "descriptionEn": "Under continuous biplane fluoroscopic X-ray guidance under local anesthesia and sedation, a 11-13G bone biopsy needle is guided transpedicularly into the anterior two-thirds of the fractured vertebral body. Viscous, radiopaque polymethylmethacrylate (PMMA) bone cement is slowly injected under real-time fluoroscopic monitoring to stabilize micro-fractures and permanently consolidate the vertebral body.",
    "descriptionHi": "मरीज को पेट के बल लिटाकर पीठ को सुन्न किया जाता है। एक्स-रे की निरंतर सीधी निगरानी में एक मजबूत सुई (बोन नीडल) को रीढ़ की हड्डी के टूटे हुए मनके के अंदर पहुंचाया जाता है। वहां हड्डी का विशेष मेडिकल सीमेंट (PMMA Bone Cement) अत्यंत सावधानी से भरा जाता है। यह सीमेंट 10 मिनट में पत्थर जैसा सख्त हो जाता है और मनके के दर्द को तुरंत जड़ से खत्म कर देता है।",
    "benefitsEn": [
      "Immediate, dramatic relief of excruciating fracture pain (often >80% pain reduction within 2-4 hours).",
      "Rapid restoration of independent standing and walking, avoiding dangerous prolonged bed rest complications (DVT, bedsores, pneumonia).",
      "Immediate structural stabilization of the fractured vertebral body.",
      "Minimally invasive pinhole procedure without surgical incision, metal screws, or open spine surgery."
    ],
    "benefitsHi": [
      "टूटी हड्डी के असहनीय दर्द से 2 से 4 घंटे के अंदर 80% से अधिक तुरंत व जादुई राहत।",
      "मरीज का उसी दिन अपने पैरों पर खड़ा होना और चलना-फिरना संभव, जिससे बिस्तर पर पड़े रहने से होने वाले खतरों (जैसे खून का थक्का जमना, फेफड़ों का इन्फेक्शन, छाले) से पूर्ण बचाव।",
      "टूटे हुए मनके को तुरंत पत्थर जैसी मजबूती मिलना।",
      "बिना कोई चीरा लगाए, बिना टांके और बिना रीढ़ में लोहे के पेंच कसे केवल एक सुई से सुरक्षित इलाज।"
    ],
    "specificRisksEn": [
      "Cement extravasation into surrounding veins or disc space (usually asymptomatic, monitored carefully during injection).",
      "Extremely rare symptomatic cement leakage into epidural space or neural foramen causing spinal cord or nerve root compression (<0.5%).",
      "Extremely rare pulmonary cement microembolism (<0.5%).",
      "Transient post-procedure localized back puncture soreness.",
      "Risk of adjacent vertebral level fracture over the subsequent 1-2 years due to underlying systemic osteoporosis."
    ],
    "specificRisksHi": [
      "सीमेंट का सूक्ष्म हिस्सा आसपास की नसों या डिस्क में जाना (जिस पर डॉक्टर एक्स-रे में निरंतर नजर रखते हैं)।",
      "रीढ़ की मुख्य नस (स्पाइनल कॉर्ड) के पास सीमेंट रिसने का अत्यंत दुर्लभ खतरा (<0.5%)।",
      "सीमेंट का सूक्ष्म कण खून के रास्ते फेफड़ों में जाने का अत्यंत दुर्लभ जोखिम (<0.5%)।",
      "पीठ पर सुई के स्थान पर 1-2 दिन तक हल्का दर्द।",
      "ऑस्टियोपोरोसिस की पुरानी कमजोरी के कारण भविष्य में किसी अन्य मनके के दबने का जोखिम (जिसके लिए हड्डियों को मजबूत करने की दवा जरूरी है)।"
    ],
    "alternativesEn": "Strict bed rest with heavy narcotic analgesics, rigid thoracolumbosacral orthosis (TLSO back brace), balloon kyphoplasty (BKP), or open spine fusion with pedicle screw fixation.",
    "alternativesHi": "हफ्तों तक बिस्तर पर पड़े रहना व तेज दर्द निवारक गोलियां, कमर का कड़ा बेल्ट (TLSO ब्रेस), बैलून काइफोप्लास्टी, अथवा रीढ़ में पेंच व रॉड कसने का बड़ा ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia with intravenous conscious sedation or monitored anesthesia care.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा गहरी दर्द निवारक व शामक दवा।"
  },
  "bkp-balloon-kyphoplasty": {
    "id": "bkp-balloon-kyphoplasty",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Percutaneous Balloon Kyphoplasty (BKP)",
    "nameHi": "परक्यूटेनियस बैलून काइफोप्लास्टी (BKP - मनके में गुब्बारा फुलाकर ऊंचाई वापस लाना एवं सीमेंट भरना)",
    "indicationEn": "Painful acute or subacute osteoporotic vertebral compression fracture with substantial height loss (>20-30%) or progressive focal kyphotic deformity of the thoracolumbar junction (T10-L2), or multiple myeloma osteolytic collapse.",
    "indicationHi": "रीढ़ की हड्डी के मनके का दबकर चपटा होना, पीठ में कूबड़ निकलना (Kyphosis), उठने-बैठने में गंभीर दर्द, अथवा मल्टीपल मायलोमा कैंसर द्वारा मनके का खोखला होना।",
    "descriptionEn": "Under fluoroscopic guidance, working cannulas are placed bipedicularly into the collapsed vertebral body. High-pressure inflatable bone balloons (KyphX) are inserted into the trabecular space and inflated with radiopaque contrast under pressure monitoring. Balloon expansion compacts the cancellous bone and elevates the collapsed endplates, restoring vertebral height. After balloon deflation, high-viscosity PMMA bone cement is gently injected into the preformed cavity at low pressure, drastically minimizing cement leakage risk.",
    "descriptionHi": "एक्स-रे की निगरानी में दोनों तरफ से सुइयां टूटे हुए मनके में डाली जाती हैं। मनके के अंदर एक विशेष मेडिकल गुब्बारा (Balloon) डालकर फुलाया जाता है। गुब्बारा फूलने से दबा हुआ मनका दोबारा अपनी पूरी ऊंचाई पर उठ जाता है और कूबड़ सीधा हो जाता है। गुब्बारा निकालने के बाद बने हुए खाली स्थान में बिना किसी दबाव के गाढ़ा सीमेंट भर दिया जाता है, जिससे सीमेंट बाहर रिसने का खतरा लगभग शून्य हो जाता है।",
    "benefitsEn": [
      "Restores lost vertebral height and corrects forward spinal kyphotic curvature.",
      "Controlled, low-pressure cement filling with significantly lower leakage rates compared to vertebroplasty.",
      "Immediate, permanent relief of fracture pain and rapid restoration of upright posture.",
      "Minimally invasive pinhole procedure without incisions or open spine surgery."
    ],
    "benefitsHi": [
      "दबे हुए मनके की ऊंचाई दोबारा बहाल होना और पीठ के कूबड़ का सीधा होना।",
      "गुब्बारे से खाली जगह बनने के कारण सीमेंट बाहर रिसने का खतरा बहुत ही कम।",
      "टूटी हड्डी के भयंकर दर्द से तुरंत स्थायी राहत और बिना सहारे के सीधे खड़े होने की क्षमता।",
      "बिना किसी बड़े चीरे या रीढ़ में लोहे के पेंच लगाए सुरक्षित आधुनिक उपचार।"
    ],
    "specificRisksEn": [
      "Extremely low risk of cement extravasation into epidural or foraminal veins (<1%).",
      "Balloon rupture during expansion in hard, dense osteosclerotic bone (benign, balloon retrieved intact).",
      "Transient back soreness at entry sites for 48 hours.",
      "Subsequent adjacent level fracture risk due to underlying generalized osteoporosis."
    ],
    "specificRisksHi": [
      "सीमेंट का नसों के पास रिसने का अत्यंत कम जोखिम (<1%)।",
      "हड्डी के बहुत कठोर होने पर गुब्बारे के फटने का दुर्लभ जोखिम (जिसे सुरक्षित बाहर निकाल लिया जाता है)।",
      "पीठ पर 1 से 2 दिन तक हल्का दर्द।",
      "हड्डियों की पुरानी कमजोरी के कारण भविष्य में अन्य मनकों के फ्रैक्चर का जोखिम।"
    ],
    "alternativesEn": "Percutaneous vertebroplasty (PVP), expandable titanium implants (SpineJack), rigid TLSO bracing, or open instrumented posterior spinal stabilization.",
    "alternativesHi": "वर्टीब्रोप्लास्टी (PVP), स्पाइनजैक टाइटेनियम इम्प्लांट, कड़ा बेल्ट, अथवा रीढ़ का बड़ा ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia with monitored conscious sedation or general anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) शामक दवा के साथ अथवा पूर्ण बेहोशी।"
  },
  "spinejack-titanium-implant": {
    "id": "spinejack-titanium-implant",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Expandable Titanium Intravertebral Implant Placement (SpineJack System)",
    "nameHi": "स्पाइनजैक टाइटेनियम इम्प्लांट (टूटे मनके में खुलने वाला टाइटेनियम जैक लगाकर ऊंचाई बहाल करना व सीमेंट भरना)",
    "indicationEn": "High-grade painful traumatic or osteoporotic vertebral compression fractures (Magerl Type A1/A2/A3.1) in active individuals where anatomical restoration of vertebral height and mechanical endplate reduction are paramount.",
    "indicationHi": "दुर्घटना, चोट अथवा हड्डियों की कमजोरी से मनके का गंभीर रूप से पिचक जाना (Vertebral Fracture), जहां मनके की सामान्य शारीरिक ऊंचाई और रीढ़ के संतुलन को दोबारा हासिल करना अत्यंत आवश्यक हो।",
    "descriptionEn": "Under fluoroscopic guidance, specialized guidewires and drill reamers are introduced into the fractured vertebra bipedicularly. Two precision-machined titanium expandable implants (SpineJack) are deployed within the anterior and middle columns. The implants are mechanically expanded craniocaudally using a calibrated driver, generating strong directional force that lifts the collapsed endplate back to normal anatomical position. High-viscosity bone cement is then injected through and around the titanium jacks to permanently lock the reduction.",
    "descriptionHi": "एक्स-रे की मदद से मनके के दोनों तरफ से दो विशेष टाइटेनियम जैक (SpineJack) मनके के अंदर पहुंचाए जाते हैं। एक विशेष स्क्रू ड्राइवर से इन जैक को धीरे-धीरे खोला जाता है जैसे कार का जैक खुलता है। यह जैक पिचके हुए मनके की छत को ऊपर उठाकर उसकी पूरी प्राकृतिक ऊंचाई वापस ला देता है। इसके बाद जैक के चारों तरफ सीमेंट भरकर मनके को हमेशा के लिए पत्थर की तरह मजबूत कर दिया जाता है।",
    "benefitsEn": [
      "Superior mechanical craniocaudal height restoration compared to balloons, which tend to follow the path of least resistance.",
      "Rigid titanium scaffolding prevents post-procedure height deflation before cement cures.",
      "Significantly reduces adjacent vertebral fracture rates by normalizing spinal sagittal balance.",
      "Immediate fracture pain elimination and rapid mobilization."
    ],
    "benefitsHi": [
      "गुब्बारे से भी अधिक शक्तिशाली व सटीक तरीके से मनके को उठाकर उसकी प्राकृतिक ऊंचाई वापस लाना।",
      "टाइटेनियम का मजबूत ढांचा सीमेंट सूखने तक और उसके बाद भी मनके को दोबारा दबने नहीं देता।",
      "रीढ़ का संतुलन सही होने से पास के अन्य मनकों के टूटने का खतरा काफी घट जाता है।",
      "दर्द से तुरंत पूर्ण मुक्ति और उसी दिन या अगले दिन चलना-फिरना संभव।"
    ],
    "specificRisksEn": [
      "Cortical breach or endplate perforation during mechanical jack expansion.",
      "Cement extravasation into perivertebral soft tissues or disc space.",
      "Extremely rare implant displacement or technical failure to expand in sclerotic bone.",
      "Extremely rare neural compromise (<0.2%)."
    ],
    "specificRisksHi": [
      "जैक खोलते समय हड्डी की ऊपरी परत में हल्की दरार आने का दुर्लभ जोखिम।",
      "सीमेंट का थोड़ा सा हिस्सा डिस्क में जाना।",
      "बहुत सख्त हड्डी में जैक के पूरी तरह न खुल पाने की दुर्लभ स्थिति।",
      "नस पर दबाव आने का अत्यंत दुर्लभ खतरा (<0.2%)।"
    ],
    "alternativesEn": "Balloon kyphoplasty (BKP), percutaneous vertebroplasty (PVP), Kiva VCF system, or open pedicle screw spinal instrumentation.",
    "alternativesHi": "बैलून काइफोप्लास्टी, वर्टीब्रोप्लास्टी, किवा इम्प्लांट, अथवा रीढ़ की खुली सर्जरी।",
    "sedationTypeEn": "General anesthesia or deep conscious sedation with local anesthesia.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा गहरी शामक दवा के साथ स्थानीय सुन्नता।"
  },
  "kiva-vcf-vertebral-augmentation": {
    "id": "kiva-vcf-vertebral-augmentation",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Radiofrequency-Targeted Vertebral Augmentation (Kiva VCF Treatment System)",
    "nameHi": "किवा वीसीएफ वर्टीब्रल ऑगमेंटेशन (मनके में कॉइल जैसा सहारा देकर सीमेंट भरना)",
    "indicationEn": "Painful osteoporotic or neoplastic vertebral compression fractures requiring predictable structural containment of bone cement and uniform height maintenance with low cement leakage risk.",
    "indicationHi": "कमजोर या कैंसर से प्रभावित मनके का फ्रैक्चर, जहां सीमेंट को बिखरने से रोकने और मनके को अंदर से कॉइल जैसा सहारा देकर मजबूती देने की आवश्यकता हो।",
    "descriptionEn": "Under fluoroscopic guidance via a unilateral transpedicular approach, a deployment cannula is seated in the fractured vertebra. A flexible, memory-shaped PEEK polymer implant is fed over a nitinol guidewire, coiling into a cylindrical nesting stack within the cancellous bone. Low-pressure radiopaque PMMA cement is injected through the central core of the PEEK coil, locking the implant and vertebral trabeculae into an integrated solid construct.",
    "descriptionHi": "एक्स-रे की निगरानी में मनके के अंदर केवल एक ही तरफ से सुई डाली जाती है। अंदर एक विशेष लचीला छल्ला (PEEK Polymer Coil) डाला जाता है जो अंदर जाकर गोल छल्लों की मीनार जैसा रूप ले लेता है। इसके बीच में सीमेंट भरा जाता है, जिससे सीमेंट छल्लों के अंदर सुरक्षित रहता है और बाहर नहीं फैलता।",
    "benefitsEn": [
      "Unilateral single-pedicle access reduces procedure time and patient discomfort.",
      "Mechanical containment of bone cement inside the PEEK coil drastically reduces venous cement leakage.",
      "Predictable, uniform height restoration and structural reinforcement.",
      "Immediate stabilization and rapid pain resolution."
    ],
    "benefitsHi": [
      "केवल एक ही तरफ से सुई लगाने के कारण प्रक्रिया में कम समय और कम दर्द।",
      "सीमेंट छल्लों के भीतर बंधा रहने से नसों में रिसने का खतरा न्यूनतम।",
      "मनके को अंदर से ठोस और संतुलित मजबूती।",
      "दर्द से तुरंत राहत और जल्दी सामान्य दिनचर्या में वापसी।"
    ],
    "specificRisksEn": [
      "Implant misdeployment or jamming during insertion.",
      "Cement extravasation outside the PEEK coil matrix.",
      "Transient localized entry site back pain for 48 hours.",
      "Adjacent level fracture risk due to progressive bone mineral density loss."
    ],
    "specificRisksHi": [
      "इम्प्लांट डालते समय अंदर फंसने या मुड़ने की तकनीकी कठिनाई का दुर्लभ जोखिम।",
      "सीमेंट का थोड़ा सा हिस्सा छल्ले से बाहर निकलना।",
      "पीठ पर 1-2 दिन तक हल्का दर्द।",
      "हड्डियों की कमजोरी के कारण भविष्य में दूसरे मनके पर असर।"
    ],
    "alternativesEn": "Balloon kyphoplasty (BKP), SpineJack expandable implants, percutaneous vertebroplasty, or conservative medical brace therapy.",
    "alternativesHi": "बैलून काइफोप्लास्टी, स्पाइनजैक, वर्टीब्रोप्लास्टी अथवा कमर का पट्टा।",
    "sedationTypeEn": "Local anesthesia with conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और हल्की शामक दवा।"
  },
  "percutaneous-sacroplasty": {
    "id": "percutaneous-sacroplasty",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Percutaneous Sacroplasty for Sacral Insufficiency Fractures",
    "nameHi": "परक्यूटेनियस सैक्रोप्लास्टी (कमर के त्रिक भाग - सैक्रम हड्डी के फ्रैक्चर में सीमेंट भरना)",
    "indicationEn": "Painful sacral insufficiency fracture (SIF, vertical alar fractures, H-sign, Denis Zone I/II) in elderly osteoporotic or post-radiotherapy patients with severe buttock, low back, and pelvic pain preventing sitting or ambulation.",
    "indicationHi": "सैक्रम हड्डी का फ्रैक्चर (कमर के ठीक नीचे त्रिक हड्डी का टूटना/दरकना), बैठने, करवट लेने या खड़े होने में असहनीय दर्द, जो गंभीर ऑस्टियोपोरोसिस या कैंसर की पुरानी रेडिएशन के बाद कमजोर हुई हड्डी में होता है।",
    "descriptionEn": "Under combined CT and fluoroscopic guidance, 11-13G bone access needles are advanced through the posterior sacral cortex into the fractured sacral ala (lateral to the sacral neural foramina and medial to the sacroiliac joint). Highly viscous radiopaque PMMA cement is slowly injected under continuous monitoring to consolidate the microfracture lines while rigorously preventing cement migration into the S1-S4 anterior/posterior neural foramina or presacral venous plexus.",
    "descriptionHi": "सीटी स्कैन और एक्स-रे की संयुक्त निगरानी में सुई को सैक्रम हड्डी के टूटे हुए हिस्से में पहुंचाया जाता है। वहां पेशाब और शौच की नसों (Sacral Foramina) को बचाते हुए हड्डी का विशेष सीमेंट भरा जाता है। सीमेंट भरते ही टूटी हुई हड्डी आपस में जुड़ जाती है और मरीज का भयंकर दर्द तुरंत बंद हो जाता है।",
    "benefitsEn": [
      "Immediate, dramatic relief of intractable sacral fracture pain.",
      "Enables bedridden, frail elderly patients to sit and walk within hours.",
      "Drastically reduces complications of immobility (thrombosis, pulmonary infections, decubitus ulcers).",
      "Avoids major pelvic screw fixation and complex reconstructive sacropelvic surgery."
    ],
    "benefitsHi": [
      "बिस्तर पर पड़े लाचार मरीज को कुछ ही घंटों में बैठने और चलने-फिरने लायक बनाना।",
      "हड्डी टूटने के असहनीय दर्द से तुरंत और हमेशा के लिए मुक्ति।",
      "लंबे समय तक लेटे रहने से होने वाले जानलेवा खतरों (जैसे नसों में खून जमना या छाले पड़ना) से बचाव।",
      "कमर और कूल्हे में लोहे के लंबे पेंच लगाने वाले बड़े ऑपरेशन से बचाव।"
    ],
    "specificRisksEn": [
      "Cement leakage into the sacral neural foramina (S1-S4) potentially causing radicular pain or bowel/bladder sphincter disturbance (<1%).",
      "Presacral venous plexus cement intravasation.",
      "Transient puncture site bruising or buttock aching for 48 hours.",
      "Incomplete fracture filling requiring staged bilateral intervention."
    ],
    "specificRisksHi": [
      "सीमेंट का नसों के सुराख (Sacral Foramina) में जाने का दुर्लभ जोखिम (<1%), जिससे पैर में दर्द या पेशाब की नस पर असर पड़ सकता है (सीटी स्कैन से पूर्ण सुरक्षा रखी जाती है)।",
      "सीमेंट का रक्त वाहिकाओं में थोड़ा सा रिसाव।",
      "नितंब पर 1 से 2 दिन तक हल्का खिंचाव या दर्द।",
      "दोनों तरफ फ्रैक्चर होने पर कभी-कभी दो बार में प्रक्रिया करने की आवश्यकता।"
    ],
    "alternativesEn": "Prolonged bed rest (6-12 weeks) with high-dose opioids, lumbopelvic / iliosacral percutaneous screw fixation, or conservative medical therapy with teriparatide.",
    "alternativesHi": "2 से 3 महीने तक लगातार बिस्तर पर पड़े रहना व दर्द की गोलियां, पेंच कसने का ऑपरेशन, अथवा टेरीपैराटाइड इंजेक्शन।",
    "sedationTypeEn": "Monitored conscious sedation with local anesthesia or general anesthesia.",
    "sedationTypeHi": "गहरी शामक दवा के साथ स्थानीय सुन्नता अथवा पूर्ण बेहोशी।"
  },
  "star-osteocool-spine-rfa-cement": {
    "id": "star-osteocool-spine-rfa-cement",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Target Spine Tumor Radiofrequency Ablation (STAR / OsteoCool) with Cement Augmentation",
    "nameHi": "रीढ़ की हड्डी के ट्यूमर का रेडियोफ्रीक्वेंसी एब्लेशन एवं सीमेंट भरना (STAR / ऑस्टियोकूल - कैंसर की गांठ को जलाना व मनके को मजबूत करना)",
    "indicationEn": "Painful osteolytic metastatic spinal tumors or multiple myeloma involving the vertebral body and/or posterior element with intractable localized back pain, impending pathological fracture, or failed response to external beam radiation.",
    "indicationHi": "रीढ़ की हड्डी के मनके में कैंसर की गांठ फैलना (स्पाइनल मेटास्टेसिस / मायलोमा), रीढ़ में असहनीय दर्द, मनके के टूटने का खतरा, अथवा रेडिएशन की सिकाई के बाद भी दर्द ठीक न होना।",
    "descriptionEn": "Under CT or fluoroscopic guidance, steerable articulating or water-cooled radiofrequency probes (STAR / OsteoCool) are introduced into the vertebral tumor. Navigable RF energy creates a controlled thermal burn zone tailored to the tumor margins, devitalizing malignant cells and sensory nerve endings while internal thermocouple sensors protect the spinal cord. Immediately following tumor ablation, polymethylmethacrylate (PMMA) bone cement is injected to consolidate the void and provide instant biomechanical stabilization.",
    "descriptionHi": "सीटी स्कैन और एक्स-रे की 3D निगरानी में एक विशेष वाटर-कूल्ड रेडियोफ्रीक्वेंसी प्रोब को मनके के अंदर स्थित कैंसर की गांठ में डाला जाता है। रीढ़ की मुख्य नस (स्पाइनल कॉर्ड) के तापमान पर लगातार नजर रखते हुए कैंसर कोशिकाओं को ऊष्मा द्वारा पूरी तरह जलाकर नष्ट कर दिया जाता है। इसके तुरंत बाद उसी जगह हड्डी का विशेष सीमेंट भर दिया जाता है ताकि मनका मजबूत हो जाए और टूटने से बच सके।",
    "benefitsEn": [
      "Simultaneous biological tumor ablation and immediate biomechanical stabilization in a single pinhole session.",
      "Profound, rapid reduction in intractable oncologic spine pain (>85% relief).",
      "Creates a cavity that allows low-pressure, controlled cement distribution with minimal risk of epidural tumor displacement.",
      "Enables continuation of systemic chemotherapy or radiation without surgical delay."
    ],
    "benefitsHi": [
      "एक ही बार में कैंसर की गांठ का खात्मा और रीढ़ की हड्डी को तुरंत पत्थर जैसी मजबूती।",
      "कैंसर के असहनीय रीढ़ के दर्द से तुरंत 85% से अधिक स्थायी राहत।",
      "गांठ के जलने से बनी खाली जगह में सीमेंट आराम से भर जाता है और नस पर दबाव नहीं पड़ता।",
      "कीमोथेरेपी या रेडिएशन के इलाज में बिना किसी रुकावट के मरीज का तुरंत स्वस्थ होना।"
    ],
    "specificRisksEn": [
      "Thermal injury to spinal cord or traversing nerve roots causing motor weakness, numbness, or radiculopathy (<1%, minimized by real-time thermometry).",
      "Cement extravasation into the epidural space or perivertebral venous plexus.",
      "Transient post-procedure pain flare or localized tumor necrosis reaction.",
      "Pathological fracture progression if tumor extensively invades the pedicles."
    ],
    "specificRisksHi": [
      "रीढ़ की मुख्य नस पर ताप लगने का दुर्लभ खतरा (<1%), जिससे पैर में कमजोरी आ सकती है (तापमान सेंसर से पूर्ण निगरानी रखी जाती है)।",
      "सीमेंट का नसों के आसपास थोड़ा सा रिसाव।",
      "प्रक्रिया के बाद 24 से 48 घंटे तक हल्का दर्द व बुखार।",
      "यदि कैंसर हड्डी को बहुत ज्यादा गला चुका हो तो भविष्य में अतिरिक्त सहारे की आवश्यकता।"
    ],
    "alternativesEn": "External beam radiation therapy (stereotactic body radiotherapy - SBRT), high-dose opioid analgesics, open palliative spinal decompression with pedicle screw stabilization, or systemic chemotherapy/immunotherapy.",
    "alternativesHi": "रेडिएशन सिकाई (SBRT), तेज मॉर्फिन दवाइयां, रीढ़ की हड्डी को काटकर रॉड लगाने का बड़ा ऑपरेशन, अथवा कीमोथेरेपी।",
    "sedationTypeEn": "General anesthesia or deep monitored conscious sedation.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा गहरी नस द्वारा शामक दवा।"
  },
  "cervical-interlaminar-epidural-steroid": {
    "id": "cervical-interlaminar-epidural-steroid",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Percutaneous Cervical Interlaminar Epidural Steroid Injection",
    "nameHi": "परक्यूटेनियस सर्वाइकल इंटरलैमिनार एपिड्यूरल स्टेरॉयड इंजेक्शन (गर्दन की दबी नस हेतु एपिड्यूरल स्पेस में सूजन-रोधी दवा का इंजेक्शन)",
    "indicationEn": "Cervical radiculopathy, cervical disc herniation, spinal stenosis, or spondylotic radicular pain radiating into the neck, shoulder, arm, and hand refractory to physical therapy and oral neuropathic analgesics.",
    "indicationHi": "गर्दन का स्लिप डिस्क (सर्वाइकल डिस्क प्रोलैप्स), रीढ़ की नसों का दबना, गर्दन से लेकर कंधे, बांह और उंगलियों तक जाने वाला तेज करंट जैसा दर्द व सुन्नपन जो दवाइयों से ठीक न हो रहा हो।",
    "descriptionEn": "Under true lateral and AP fluoroscopic guidance, with the patient prone, a 18-20G Tuohy epidural needle is introduced at the C7-T1 interspace. The epidural space is identified using the loss-of-resistance to air or saline technique and confirmed by epidurogram contrast flow verifying epidural dorsal spread without vascular or intrathecal entry. A non-particulate corticosteroid (Dexamethasone) with local anesthetic is gently injected to wash over inflamed cervical nerve roots.",
    "descriptionHi": "मरीज को पेट के बल लिटाकर गर्दन को सुन्न किया जाता है। एक्स-रे की सीधी निगरानी में गर्दन के निचले हिस्से (C7-T1) में एक विशेष कुंद सुई द्वारा रीढ़ की नसों के बाहर स्थित खाली जगह (एपिड्यूरल स्पेस) में पहुंचा जाता है। डाई डालकर पुष्टि की जाती है कि सुई सही जगह पर है। इसके बाद सूजन शांत करने वाली सुरक्षित दवा (डेक्सामेथासोन) और सुन्न करने की दवा छोड़ी जाती है जिससे गर्दन व हाथ का दर्द तुरंत शांत हो जाता है।",
    "benefitsEn": [
      "Direct suppression of inflamed cervical nerve root edema and chemical radiculitis.",
      "Multi-level spread of medication covering several compressed cervical roots simultaneously.",
      "Rapid reduction in shooting arm pain, numbness, and neck stiffness.",
      "Often avoids anterior cervical discectomy and fusion (ACDF) surgical neck surgery."
    ],
    "benefitsHi": [
      "गर्दन की सूजी हुई नसों की सूजन और दबाव को सीधे शांत करना।",
      "एक ही इंजेक्शन से गर्दन के कई स्तरों की नसों पर दवा का फैलना।",
      "हाथ में जाने वाले तेज दर्द, झनझनाहट और गर्दन की अकड़न में तेजी से आराम।",
      "गर्दन के आगे से चीरा लगाकर हड्डी व डिस्क बदलने के ऑपरेशन (ACDF) से बचाव।"
    ],
    "specificRisksEn": [
      "Dural puncture causing low-pressure post-dural puncture headache (PDPH, 0.5-1%).",
      "Epidural hematoma or vascular penetration requiring strict pre-op coagulation adherence.",
      "Transient vasovagal reaction (hypotension, dizziness) during needle placement.",
      "Extremely rare spinal cord injury (<0.05%) strictly avoided by using C7-T1 entry, non-particulate steroids, and fluoroscopy."
    ],
    "specificRisksHi": [
      "मस्तिष्क की पानी की झिल्ली में हल्का सुराख होने से सिरदर्द होना (0.5-1%), जो आराम व दवा से ठीक हो जाता है।",
      "सुई के स्थान पर खून जमा होना (जिससे बचाव हेतु खून पतला करने की दवा पहले बंद कराई जाती है)।",
      "प्रक्रिया के समय हल्का चक्कर या घबराहट होना।",
      "रीढ़ की मुख्य नस को नुकसान का अत्यंत दुर्लभ खतरा (<0.05%) जिसे एक्स-रे द्वारा पूर्णतः टाला जाता है।"
    ],
    "alternativesEn": "Oral gabapentin/pregabalin, cervical traction and physical therapy, transforaminal epidural injection, or anterior cervical discectomy and fusion (ACDF).",
    "alternativesHi": "नसों की दवाइयां, गर्दन का पट्टा व ट्रैक्शन, फिजियोथेरेपी अथवा गर्दन का सर्जिकल ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia with optional mild anxiolysis.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) आवश्यकतानुसार हल्की चिंता-निवारक दवा के साथ।"
  },
  "lumbar-interlaminar-epidural-steroid": {
    "id": "lumbar-interlaminar-epidural-steroid",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Percutaneous Lumbar Interlaminar Epidural Steroid Injection",
    "nameHi": "परक्यूटेनियस लम्बर इंटरलैमिनार एपिड्यूरल स्टेरॉयड इंजेक्शन (कमर में स्लिप डिस्क व साइटिका हेतु एपिड्यूरल इंजेक्शन)",
    "indicationEn": "Lumbar disc herniation, central/lateral recess spinal canal stenosis, degenerative spondylolisthesis, or bilateral multi-level lumbar radiculopathy (sciatica) unresponsive to conservative treatment > 4-6 weeks.",
    "indicationHi": "कमर की स्लिप डिस्क (लम्बर डिस्क हर्नियेशन), रीढ़ की नसों का दबना (स्पाइनल स्टेनोसिस), साइटिका का दर्द (कमर से दोनों पैरों में जाने वाला तेज दर्द व झनझनाहट), जो दवाइयों व आराम से ठीक न हुआ हो।",
    "descriptionEn": "Under AP and lateral fluoroscopic guidance, a Tuohy needle is advanced between the lumbar spinous processes (typically L4-L5 or L5-S1) into the posterior epidural space using loss-of-resistance technique. Radiopaque contrast is injected to document bilateral interlaminar epidurogram spread with neuroforaminal runoff and exclude intravascular injection. A mixture of corticosteroid and local anesthetic is slowly administered to bathe the irritated cauda equina and nerve roots.",
    "descriptionHi": "एक्स-रे की निगरानी में मरीज की कमर के निचले हिस्से में मनकों के बीच की खाली जगह (एपिड्यूरल स्पेस) में एक विशेष सुई पहुंचाई जाती है। डाई डालकर देखा जाता है कि दवा सही जगह फैल रही है और नस में नहीं जा रही। इसके बाद सूजन दूर करने वाली दवा (स्टेरॉयड) और सुन्न करने की दवा प्रवाहित की जाती है, जिससे नसों की सूजन खत्म होती है और दोनों पैरों का दर्द गायब हो जाता है।",
    "benefitsEn": [
      "Broad, bilateral coverage of multiple inflamed nerve roots and the central canal.",
      "Rapid and substantial relief of debilitating low back and leg radicular pain.",
      "Restores walking distance, standing tolerance, and ability to return to work.",
      "Safely avoids or postpones open lumbar laminectomy or discectomy surgery."
    ],
    "benefitsHi": [
      "एक ही बार में रीढ़ की कई नसों और दोनों पैरों के दर्द को शांत करने की अचूक क्षमता।",
      "कमर और पैरों के असहनीय दर्द से त्वरित और लंबे समय तक राहत।",
      "चलने, खड़े रहने और अपने दैनिक कामकाज में लौटने की क्षमता की बहाली।",
      "रीढ़ की हड्डी के बड़े ऑपरेशन (लैमिनेक्टॉमी / डिस्क सर्जरी) से बचाव।"
    ],
    "specificRisksEn": [
      "Accidental dural puncture causing post-dural puncture headache (1-2%, manageable with hydration or blood patch).",
      "Transient lower extremity numbness or weakness for 2-4 hours from local anesthetic.",
      "Transient elevation of blood glucose in diabetic patients for 48-72 hours.",
      "Rare epidural hematoma or abscess (<0.1%)."
    ],
    "specificRisksHi": [
      "झिल्ली में सुई लगने से सिरदर्द होने का 1-2% जोखिम, जो आराम व दवा से ठीक हो जाता है।",
      "सुन्न करने वाली दवा के असर से 2 से 4 घंटे तक पैरों में थोड़ा भारीपन (जो जल्दी उतर जाता है)।",
      "डायबिटीज के मरीजों में 2-3 दिन तक शुगर का स्तर थोड़ा बढ़ जाना।",
      "खून का थक्का जमने या इन्फेक्शन का अत्यंत दुर्लभ खतरा (<0.1%)।"
    ],
    "alternativesEn": "Oral NSAIDs and pregabalin/gabapentin, core strengthening physiotherapy, transforaminal epidural injection, or open lumbar microdiscectomy/laminectomy.",
    "alternativesHi": "दवाइयां, कमर की कसरत, ट्रांसफोरामिनल एपिड्यूरल इंजेक्शन, अथवा दूरबीन/चीरे द्वारा डिस्क का ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "lumbar-transforaminal-epidural-snrb": {
    "id": "lumbar-transforaminal-epidural-snrb",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Fluoroscopy-Guided Lumbar Transforaminal Epidural Steroid Injection (Selective Nerve Root Block)",
    "nameHi": "फ्लोरोस्कोपी-गाइडेड लम्बर ट्रांसफोरामिनल एपिड्यूरल इंजेक्शन (सेलेक्टिव नर्व रूट ब्लॉक - SNRB / दबी हुई नस की जड़ पर सटीक दवा)",
    "indicationEn": "Unilateral single-level lumbar radicular pain (sciatica) caused by foraminal or paracentral disc herniation, lateral recess stenosis, or failed back surgery syndrome with severe dermatomal radiating pain.",
    "indicationHi": "एक तरफ का तीव्र साइटिका दर्द (कमर से नितंब, जांघ, पिंडली और पैर के पंजे तक जाने वाला तेज करंट जैसा दर्द), डिस्क खिसककर नस की जड़ को दबाना, अथवा पहले के ऑपरेशन के बाद भी नस में सूजन रहना।",
    "descriptionEn": "Under fluoroscopic guidance in oblique, AP, and lateral projections, a 22-25G spinal needle is steered under the subpedicular \"safe triangle\" into the superior neuroforamen directly adjacent to the exit of the compressed spinal nerve root. Non-ionic contrast is injected under live fluoroscopy to outline the nerve sheath (radiculogram) and strictly rule out intra-arterial vascular uptake. A non-particulate steroid (Dexamethasone) and local anesthetic are delivered precisely onto the target nerve root.",
    "descriptionHi": "एक्स-रे की 3D निगरानी में एक बहुत बारीक सुई को सीधे उस सुराख में ले जाया जाता है जहां से दर्द वाली नस रीढ़ की हड्डी से बाहर निकलती है। डाई डालकर लाइव एक्स-रे में नस की जड़ की पुष्टि की जाती है और यह सुनिश्चित किया जाता है कि दवा किसी खून की नस में न जाए। इसके बाद सूजन दूर करने वाली सुरक्षित दवा सीधे दबी हुई नस की जड़ पर छोड़ी जाती है।",
    "benefitsEn": [
      "Highest concentration of anti-inflammatory medication delivered directly to the exact site of disc herniation and nerve compression.",
      "Substantially higher pain relief and lower steroid dose compared to interlaminar injections.",
      "Immediate diagnostic confirmation of the culprit pain generator level.",
      "High rate of avoiding surgical discectomy in acute disc herniations."
    ],
    "benefitsHi": [
      "दवा की सबसे शक्तिशाली मात्रा सीधे उस जगह पहुंचना जहां डिस्क नस को दबा रही है।",
      "कम दवा में भी अन्य इंजेक्शनों की तुलना में कहीं अधिक और सटीक दर्द निवारण।",
      "पक्की जांच कि किस नस के दबने से पैर में दर्द हो रहा था।",
      "अत्याधुनिक व सुरक्षित तरीका जो 80% से अधिक मरीजों को ऑपरेशन से बचा लेता है।"
    ],
    "specificRisksEn": [
      "Transient numbness, tingling, or weakness in the corresponding leg for 2-4 hours.",
      "Puncture site soreness for 24-48 hours.",
      "Transient vasovagal reaction.",
      "Extremely rare radicular artery vascular injury or infarction (<0.01%, virtually eliminated by using non-particulate Dexamethasone and live contrast injection)."
    ],
    "specificRisksHi": [
      "संबंधित पैर में 2 से 4 घंटे तक हल्का सुन्नपन या भारीपन (जो दवा का असर खत्म होते ही ठीक हो जाता है)।",
      "पीठ पर सुई के स्थान पर 1-2 दिन तक हल्का दर्द।",
      "हल्का चक्कर या पसीना आना।",
      "नस की रक्त वाहिनी में चोट लगने का अत्यंत दुर्लभ जोखिम (<0.01%) जिसे सुरक्षित दवा और लाइव डाई द्वारा पूरी तरह टाला जाता है।"
    ],
    "alternativesEn": "Lumbar interlaminar epidural injection, oral analgesics, physical therapy, or surgical microdiscectomy/endoscopic discectomy.",
    "alternativesHi": "इंटरलेमिनार एपिड्यूरल इंजेक्शन, दवाइयां, फिजियोथेरेपी अथवा दूरबीन द्वारा डिस्क का ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "cervical-transforaminal-epidural": {
    "id": "cervical-transforaminal-epidural",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Fluoroscopy-Guided Cervical Transforaminal Epidural Injection",
    "nameHi": "फ्लोरोस्कोपी-गाइडेड सर्वाइकल ट्रांसफोरामिनल एपिड्यूरल इंजेक्शन (गर्दन की विशिष्ट नस की जड़ पर एक्स-रे निर्देशित सटीक दवा)",
    "indicationEn": "Severe single-level cervical radiculopathy (C5, C6, C7, or C8) caused by foraminal stenosis or lateral disc protrusion refractory to conservative therapy and interlaminar epidural injection.",
    "indicationHi": "गर्दन की किसी एक विशिष्ट नस के गंभीर रूप से दबने से हाथ में असहनीय दर्द (सर्वाइकल रेडिकुलोपैथी), उंगलियों में झनझनाहट और कमजोरी, जो सामान्य दवाइयों और साधारण इंजेक्शन से ठीक न हुई हो।",
    "descriptionEn": "Under fluoroscopic guidance with oblique visualization of the cervical neural foramen, a 25G needle is guided along the posterior-inferior quadrant of the neural foramen to avoid the anteriorly situated vertebral artery and radicular vessels. Real-time DSA (Digital Subtraction Angiography) with non-ionic contrast is performed to confirm neurogram spread and categorically exclude intravascular uptake. Strictly non-particulate corticosteroid (Dexamethasone) and local anesthetic are delivered.",
    "descriptionHi": "एक्स-रे की विशेष तिरछी निगरानी में गर्दन की खून की बड़ी नाड़ी (वर्टिब्रल आर्टरी) को पूरी तरह बचाते हुए सुई को नस के सुराख के पिछले हिस्से में ले जाया जाता है। डिजिटल सबट्रैक्शन एंजियोग्राफी (DSA) द्वारा डाई डालकर पक्का किया जाता है कि सुई नस की जड़ पर है और खून की नाली में नहीं है। इसके बाद सुरक्षित स्टेरॉयड दवा छोड़ी जाती है जिससे हाथ का असहनीय दर्द तुरंत शांत हो जाता है।",
    "benefitsEn": [
      "Precision target-specific delivery to the inflamed cervical root.",
      "Rapid resolution of radiating arm pain, tingling, and motor weakness.",
      "High success in patients who failed interlaminar cervical injections.",
      "Preserves cervical spine anatomy without open surgical fusion."
    ],
    "benefitsHi": [
      "दर्द करने वाली विशिष्ट नस पर 100% सटीक दवा का पहुंचना।",
      "हाथ में जाने वाले भयंकर दर्द और उंगलियों के सुन्नपन से तुरंत राहत।",
      "उन मरीजों में भी असरदार जहां साधारण इंजेक्शन काम न किया हो।",
      "गर्दन के ऑपरेशन और हड्डियों को जोड़ने वाली सर्जरी से बचाव।"
    ],
    "specificRisksEn": [
      "Transient sensory numbness or motor weakness in the arm/hand for 2-4 hours.",
      "Localized neck soreness or headache for 24-48 hours.",
      "Transient facial flushing or elevated blood sugar.",
      "Extremely rare vertebral or radicular artery injury, spasm, or cerebellar/cord infarction (<0.01%, prevented by strict DSA fluoroscopy and non-particulate dexamethasone)."
    ],
    "specificRisksHi": [
      "हाथ में 2 से 4 घंटे तक हल्का सुन्नपन या कमजोरी (दवा उतरते ही सामान्य)।",
      "गर्दन पर 1-2 दिन तक हल्का खिंचाव।",
      "चेहरे पर लाली या शुगर का स्तर थोड़ा बढ़ना।",
      "गर्दन की मुख्य धमनी में सिकुड़न का अत्यंत दुर्लभ खतरा (<0.01%) जिसे आधुनिक DSA जांच और सुरक्षित दवा द्वारा पूरी तरह रोका जाता है।"
    ],
    "alternativesEn": "Cervical interlaminar epidural injection, oral medications, cervical collar immobilization, or surgical anterior cervical discectomy and fusion (ACDF).",
    "alternativesHi": "सर्वाइकल इंटरलैमिनार इंजेक्शन, दवाइयां, गर्दन का पट्टा अथवा गर्दन की सर्जरी (ACDF)।",
    "sedationTypeEn": "Local anesthesia (patient must remain fully awake and communicative during needle placement).",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia - मरीज का पूरी तरह सचेत रहना अनिवार्य ताकि नसों की सुरक्षा जांची जा सके)।"
  },
  "caudal-epidural-steroid-fluoroscopy": {
    "id": "caudal-epidural-steroid-fluoroscopy",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Caudal Epidural Steroid Injection with Fluoroscopic Guidance",
    "nameHi": "कौडल एपिड्यूरल स्टेरॉयड इंजेक्शन (पूंछ की हड्डी के रास्ते से रीढ़ की नसों में सूजन-रोधी दवा पहुंचाना)",
    "indicationEn": "Multi-level lumbar spinal canal stenosis, central disc protrusion, failed back surgery syndrome (post-laminectomy epidural fibrosis), or severe bilateral sciatica where interlaminar access is blocked by scar tissue or surgical metal instrumentation.",
    "indicationHi": "रीढ़ की कई नसों का एक साथ दबना (लम्बर कैनाल स्टेनोसिस), दोनों पैरों में साइटिका का दर्द, अथवा कमर के पुराने ऑपरेशन के बाद टांकों के रेशे बनने से दोबारा दर्द होना जहां कमर से सुई डालना संभव न हो।",
    "descriptionEn": "Under lateral and AP fluoroscopic guidance, a 20-22G Tuohy or spinal needle is advanced through the sacral hiatus into the caudal epidural space. Proper epidural spread without intravascular or subarachnoid placement is confirmed by contrast epidurography demonstrating the classic \"Christmas tree\" arborization pattern. A high-volume therapeutic solution (10-20 mL of local anesthetic, saline, and corticosteroid) is infused to decompress lower lumbar nerve roots and mechanically wash away perineural scar adhesions.",
    "descriptionHi": "मरीज को पेट के बल लिटाकर पूंछ की हड्डी के जोड़ (सैक्रल हियाटस) को सुन्न किया जाता है। एक्स-रे की निगरानी में एक बारीक सुई को रीढ़ की निचली नसों के खाली स्थान में डाला जाता है। डाई डालकर पुष्टि की जाती है और फिर 10 से 20 मिलीलीटर दवा का घोल प्रवाहित किया जाता है। यह दवा ऊपर तक जाकर रीढ़ की सभी सूजी हुई नसों को धो देती है और चिपकन को छुड़ा देती है।",
    "benefitsEn": [
      "Safest epidural approach with virtually zero risk of direct spinal cord or high dural injury.",
      "High-volume flush mechanically lyses epidural adhesions and washes out inflammatory cytokines.",
      "Ideal route for patients with extensive previous spine surgery, metal hardware, or severe lumbar stenosis.",
      "Significantly improves walking tolerance and standing time in spinal stenosis."
    ],
    "benefitsHi": [
      "रीढ़ की हड्डी में दवा पहुंचाने का सबसे सुरक्षित रास्ता, जिसमें मुख्य नस को नुकसान का कोई खतरा नहीं।",
      "दवा की भरपूर मात्रा से नसों की सूजन और पुराने ऑपरेशन की चिपकन का पूरी तरह धुल जाना।",
      "जिन मरीजों की कमर में पहले ऑपरेशन हो चुका हो या लोहे की रॉड लगी हो, उनके लिए सर्वोत्तम विकल्प।",
      "पैरों में भारीपन और लंगड़ाकर चलने की समस्या में तुरंत राहत।"
    ],
    "specificRisksEn": [
      "Transient lower extremity numbness, tingling, or heaviness for 2-4 hours.",
      "Puncture site soreness over the sacrum or tailbone for 24-48 hours.",
      "Transient flushing, dizziness, or vasovagal reaction.",
      "Accidental intravascular injection (immediately detected and avoided by fluoroscopic contrast check)."
    ],
    "specificRisksHi": [
      "पैरों में 2 से 4 घंटे तक हल्का सुन्नपन या भारीपन।",
      "पूंछ की हड्डी पर 1 से 2 दिन तक हल्का दर्द।",
      "हल्का चक्कर या पसीना आना।",
      "दवा का नस में जाने का खतरा (जिसे एक्स-रे में डाई देखकर तुरंत रोक दिया जाता है)।"
    ],
    "alternativesEn": "Lumbar interlaminar or transforaminal epidural injections, oral neuropathic analgesics, physical therapy, or surgical decompression/revision surgery.",
    "alternativesHi": "कमर का इंटरलैमिनार इंजेक्शन, दवाइयां, फिजियोथेरेपी अथवा रीढ़ की दोबारा सर्जरी।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "lumbar-facet-joint-injection": {
    "id": "lumbar-facet-joint-injection",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Fluoroscopy-Guided Lumbar Facet Joint Intra-Articular Injection",
    "nameHi": "फ्लोरोस्कोपी-गाइडेड लम्बर फैसेट जॉइंट इंजेक्शन (कमर के छोटे जोड़ों में एक्स-रे निर्देशित दवा इंजेक्शन)",
    "indicationEn": "Lumbar facet arthropathy, facet joint osteoarthritis, synovial facet cysts causing foraminal impingement, or chronic non-radicular axial low back pain exacerbated by spinal extension, twisting, or prolonged standing.",
    "indicationHi": "कमर के छोटे जोड़ों का गठिया (फैसेट आर्थ्रोपैथी), पीछे झुकने, कमर मोड़ने या लंबे समय तक खड़े रहने पर कमर के निचले हिस्से और नितंब में तेज दर्द, जो पैरों में नीचे नहीं जाता।",
    "descriptionEn": "Under fluoroscopic guidance in an oblique projection, a 22-25G spinal needle is placed directly into the true synovial cavity of the targeted lumbar facet joints (e.g., L4-L5, L5-S1). A small drop of radiopaque contrast is injected to verify intra-articular arthrogram line. A mixture of long-acting corticosteroid and local anesthetic (1.0-1.5 mL per joint) is administered to extinguish intra-articular inflammation.",
    "descriptionHi": "एक्स-रे की विशेष तिरछी निगरानी में कमर के छोटे जोड़ों (फैसेट जॉइंट्स) के अंदर एक बारीक सुई डाली जाती है। डाई डालकर जोड़ के अंदर की पुष्टि की जाती है और फिर सूजन दूर करने वाली दवा व सुन्न करने की दवा सीधे जोड़ के भीतर छोड़ी जाती है, जिससे जोड़ों का घर्षण और दर्द तुरंत शांत हो जाता है।",
    "benefitsEn": [
      "Direct intra-articular anti-inflammatory therapy extinguishing facet synovitis and capsule distension.",
      "Significant relief of mechanical extension-type axial low back pain.",
      "Improves lumbar range of motion and tolerability of core strengthening exercises.",
      "Provides both diagnostic confirmation and therapeutic benefit."
    ],
    "benefitsHi": [
      "कमर के जोड़ों की सूजन और रगड़ को सीधे अंदर से समाप्त करना।",
      "पीछे झुकने और कमर मोड़ने में होने वाले जकड़न भरे दर्द से तुरंत राहत।",
      "कमर को मजबूत करने की कसरत आसानी से कर पाने में मदद।",
      "दर्द के कारण की सटीक पहचान और तत्काल उपचार।"
    ],
    "specificRisksEn": [
      "Transient post-injection soreness or steroid flare for 24-48 hours.",
      "Capsular rupture if joint is over-distended with > 1.5 mL fluid (causes transient back ache).",
      "Subcutaneous bruising or mild puncture tenderness.",
      "Extremely rare septic facet arthritis (<1 in 30,000)."
    ],
    "specificRisksHi": [
      "इंजेक्शन के बाद 1 से 2 दिन तक कमर में हल्का दर्द।",
      "जोड़ छोटा होने के कारण थोड़ा दबाव महसूस होना।",
      "सुई के स्थान पर हल्का नील पड़ना।",
      "जोड़ में संक्रमण का अत्यंत दुर्लभ खतरा।"
    ],
    "alternativesEn": "Lumbar medial branch blocks (MBB), facet radiofrequency neurotomy (RFA), core stabilization physiotherapy, or spinal fusion surgery.",
    "alternativesHi": "मीडियल ब्रांच ब्लॉक (MBB), रेडियोफ्रीक्वेंसी न्यूरोटॉमी (RFA), फिजियोथेरेपी अथवा स्पाइनल फ्यूजन सर्जरी।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "lumbar-medial-branch-block-mbb": {
    "id": "lumbar-medial-branch-block-mbb",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Lumbar Medial Branch Block (MBB) for Facetogenic Pain",
    "nameHi": "लम्बर मीडियल ब्रांच ब्लॉक (MBB - कमर के जोड़ों की दर्द नसों की जांच हेतु डायग्नोस्टिक सुन्नता ब्लॉक)",
    "indicationEn": "Diagnostic evaluation of chronic axial lower back pain suspected to originate from the lumbar facet joints, requiring confirmation of >= 50-80% temporary pain reduction before approving definitive radiofrequency neurotomy.",
    "indicationHi": "कमर के पुराने दर्द की जांच, यह सुनिश्चित करने के लिए कि दर्द फैसेट जोड़ों की नसों का है या नहीं, ताकि स्थायी रेडियोफ्रीक्वेंसी (RFA) उपचार की सफलता तय की जा सके।",
    "descriptionEn": "Under oblique and AP fluoroscopic guidance, 22-25G needles are placed precisely onto the anatomical junction of the transverse process and superior articular process (the groove through which the medial branch nerve runs) at two or more levels (each facet joint is innervated by two medial branches). A tiny volume (0.25-0.5 mL) of local anesthetic (Lidocaine or Bupivacaine) is deposited onto each nerve to temporarily anesthetize the facet sensory innervation.",
    "descriptionHi": "एक्स-रे की निगरानी में कमर के जोड़ों को दर्द पहुंचाने वाली सूक्ष्म नसों (मीडियल ब्रांच) के सटीक रास्ते पर बारीक सुइयां लगाई जाती हैं। प्रत्येक नस पर सुन्न करने की दवा की बहुत थोड़ी मात्रा (0.5 मिलीलीटर) डाली जाती है। मरीज से तुरंत झुककर और मुड़कर दर्द का स्तर जांचने को कहा जाता है ताकि यह तय हो सके कि दर्द इन्हीं नसों से था।",
    "benefitsEn": [
      "Gold-standard diagnostic test to definitively identify or rule out facet joints as the primary back pain generator.",
      "High predictive value for successful long-term pain relief with radiofrequency ablation (RFA).",
      "Extremely quick, safe, and minimally invasive outpatient test.",
      "Immediate temporary relief verifying the exact pain pathway."
    ],
    "benefitsHi": [
      "कमर दर्द के असली कारण की पहचान करने की दुनिया की सबसे सटीक जांच (गोल्ड स्टैंडर्ड टेस्ट)।",
      "यह पक्का करना कि आगे होने वाली रेडियोफ्रीक्वेंसी (RFA) से मरीज को 100% आराम मिलेगा।",
      "मात्र 10-15 मिनट में होने वाला सुरक्षित व बिना चीरे का टेस्ट।",
      "जांच के तुरंत बाद मरीज को दर्द से राहत का अनुभव होना।"
    ],
    "specificRisksEn": [
      "False-positive or false-negative test results.",
      "Transient soreness or minor muscular bruising at needle entry sites.",
      "Temporary numbness or heaviness in the leg if anesthetic spills to the ventral root (<1%).",
      "Short duration of relief (expected, as local anesthetic wears off in 2-6 hours)."
    ],
    "specificRisksHi": [
      "जांच में कभी-कभी अस्थायी भ्रम की संभावना।",
      "पीठ पर सुई के स्थान पर 1-2 दिन तक हल्का खिंचाव।",
      "दवा थोड़ा फैलने पर पैर में कुछ घंटों के लिए हल्का भारीपन (<1%)।",
      "आराम का केवल कुछ घंटों तक रहना (क्योंकि यह केवल जांच के लिए सुन्न किया जाता है)।"
    ],
    "alternativesEn": "Intra-articular lumbar facet injections, physical therapy, oral analgesics, or proceeding directly without diagnostic nerve block.",
    "alternativesHi": "फैसेट जोड़ में सीधे इंजेक्शन, फिजियोथेरेपी अथवा दर्द निवारक गोलियां।",
    "sedationTypeEn": "Local anesthesia (sedation minimized to ensure accurate patient pain reporting).",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia - मरीज को पूरी तरह होश में रखा जाता है ताकि दर्द के घटने की सही जानकारी मिल सके)।"
  },
  "lumbar-facet-medial-branch-rfa": {
    "id": "lumbar-facet-medial-branch-rfa",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Lumbar Facet Medial Branch Radiofrequency Neurotomy (Rhizotomy)",
    "nameHi": "लम्बर फैसेट मीडियल ब्रांच रेडियोफ्रीक्वेंसी न्यूरोटॉमी (राइजोटॉमी - कमर के जोड़ों की दर्द नसों का स्थायी ताप विच्छेदन)",
    "indicationEn": "Intractable chronic facetogenic lower back pain confirmed by >= 50-80% pain relief following dual diagnostic medial branch blocks, lasting > 6 months refractory to conservative therapy.",
    "indicationHi": "कमर का पुराना असहनीय दर्द जो झुकने और मुड़ने पर बढ़ता हो, और जो जांच वाले इंजेक्शन (MBB) से सिद्ध हो चुका हो, उसका रेडियोफ्रीक्वेंसी किरणों द्वारा 1 से 2 साल के लिए स्थायी इलाज।",
    "descriptionEn": "Under precise fluoroscopic guidance, insulated radiofrequency cannulas are positioned parallel along the groove between the transverse process and superior articular process adjacent to target medial branch nerves. Sensory stimulation (50 Hz, concordance < 0.5V) and motor testing (2 Hz, confirming multifidus contraction and ruling out lower extremity fasciculations) are strictly verified. Thermal radiofrequency lesions (80°C for 90 seconds) are created at each level, interrupting pain signal transmission from the facet joints.",
    "descriptionHi": "एक्स-रे की 3D निगरानी में कमर के जोड़ों की दर्द नसों के पास विशेष रेडियोफ्रीक्वेंसी सुइयां लगाई जाती हैं। हल्की बिजली की तरंग देकर पहले जांच की जाती है कि सुई केवल दर्द वाली नस पर है और पैर की किसी मुख्य नस पर नहीं। इसके बाद नियंत्रित ऊष्मा (80°C तापमान) देकर दर्द की नस को निष्क्रिय (Ablate) कर दिया जाता है, जिससे जोड़ों का दर्द मस्तिष्क तक पहुंचना बंद हो जाता है।",
    "benefitsEn": [
      "Durable, long-term pain relief lasting 9 to 24 months (until nerve fibers regenerate).",
      "Restores spinal mobility, standing duration, and ability to perform daily physical activities.",
      "Significantly reduces or eliminates dependence on opioid pain medications.",
      "Can be safely repeated if nerve regeneration occurs and pain eventually recurs."
    ],
    "benefitsHi": [
      "कमर दर्द से 9 से 24 महीने (1 से 2 साल) तक लंबी व टिकाऊ राहत।",
      "खड़े रहने, चलने-फिरने और झुकने की क्षमता में जबरदस्त सुधार।",
      "दर्द की तेज गोलियों और नशे वाली दवाइयों से हमेशा के लिए मुक्ति।",
      "भविष्य में यदि नसें दोबारा जाग्रत हों तो इस प्रक्रिया को दोबारा सुरक्षित रूप से दोहराया जा सकता है।"
    ],
    "specificRisksEn": [
      "Post-procedure localized back muscle soreness and sunburn sensation lasting 1-2 weeks (neuritis/hyperalgesia).",
      "Transient numbness in localized lumbar skin.",
      "Puncture site ecchymosis or muscle hematoma.",
      "Extremely rare thermal injury to spinal nerve root causing leg weakness or sensory deficit (<0.1%, prevented by motor testing)."
    ],
    "specificRisksHi": [
      "प्रक्रिया के बाद 1 से 2 सप्ताह तक पीठ में हल्की जलन, धूप में जलने जैसा खिंचाव या भारीपन।",
      "कमर की त्वचा का कुछ भाग थोड़े समय के लिए सुन्न होना।",
      "सुई के स्थान पर हल्का नील पड़ना।",
      "पैर की मुख्य नस पर ताप लगने का अत्यंत दुर्लभ जोखिम (<0.1%) जिसे मोटर टेस्टिंग द्वारा पूरी तरह टाला जाता है।"
    ],
    "alternativesEn": "Repeated medial branch blocks, intra-articular facet steroid injections, continuous physical therapy, or lumbar spinal fusion surgery.",
    "alternativesHi": "बार-बार सुन्न करने के इंजेक्शन, स्टेरॉयड इंजेक्शन, फिजियोथेरेपी अथवा रीढ़ का बड़ा ऑपरेशन (Spinal Fusion)।",
    "sedationTypeEn": "Local anesthesia with light conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और हल्की शामक दवा।"
  },
  "cervical-medial-branch-block-rfa": {
    "id": "cervical-medial-branch-block-rfa",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Cervical Medial Branch Block and Radiofrequency Denervation",
    "nameHi": "सर्वाइकल मीडियल ब्रांच ब्लॉक एवं रेडियोफ्रीक्वेंसी डिनर्वेशन (गर्दन व सिरदर्द हेतु जोड़ों की दर्द नसों का ताप विच्छेदन)",
    "indicationEn": "Chronic cervicogenic headaches, whiplash injury pain, or cervical facet arthropathy with persistent neck and occipital pain exacerbated by neck rotation or extension, confirmed by diagnostic cervical medial branch blocks.",
    "indicationHi": "गर्दन का पुराना अकड़न भरा दर्द, गर्दन से सिर के पीछे चढ़ने वाला तेज सिरदर्द (Cervicogenic Headache), तथा गर्दन मोड़ने पर होने वाला तेज दर्द जो दवाइयों से ठीक न हो रहा हो।",
    "descriptionEn": "Under lateral and AP fluoroscopic guidance, specialized radiofrequency needles are positioned along the waist of the cervical articular pillars at the targeted levels (C3, C4, C5, C6, or third occipital nerve). Sensory and motor testing confirm absence of arm or diaphragm (phrenic) motor stimulation. Thermal lesions (80°C for 90 seconds) are placed to disrupt the sensory pain transmission from the painful cervical facet joints.",
    "descriptionHi": "एक्स-रे की निगरानी में गर्दन के जोड़ों की नसों के पास रेडियोफ्रीक्वेंसी सुइयां लगाई जाती हैं। हाथ और सांस की नसों की सुरक्षा जांचने के बाद नियंत्रित ऊष्मा द्वारा दर्द ले जाने वाली नसों को निष्क्रिय कर दिया जाता है, जिससे गर्दन का पुराना दर्द और सिरदर्द हमेशा के लिए शांत हो जाता है।",
    "benefitsEn": [
      "Long-lasting relief (9-18 months) of chronic neck pain and cervicogenic headaches.",
      "Restores pain-free neck rotation, driving comfort, and restful sleep.",
      "Reduces chronic tension headaches and eliminates need for daily painkillers.",
      "Non-surgical treatment without neck incisions, hardware, or fusion."
    ],
    "benefitsHi": [
      "गर्दन के पुराने दर्द और सिरदर्द से 9 से 18 महीने तक लंबी और सुखद राहत।",
      "गर्दन को दाएँ-बाएँ घुमाने, गाड़ी चलाने और बिना दर्द के सोने की क्षमता की वापसी।",
      "रोज-रोज दर्द की गोलियां खाने की मजबूरी से छुटकारा।",
      "बिना किसी चीरे या लोहे की प्लेट के सुरक्षित आधुनिक उपचार।"
    ],
    "specificRisksEn": [
      "Post-procedure neck soreness, stiffness, and cutaneous sunburn sensation lasting 1-2 weeks.",
      "Transient numbness in the lateral neck or posterior scalp.",
      "Localized bruising or muscle tenderness.",
      "Extremely rare injury to the spinal cord, vertebral artery, or cervical nerve root (<0.1%)."
    ],
    "specificRisksHi": [
      "प्रक्रिया के बाद 1 से 2 सप्ताह तक गर्दन में हल्का खिंचाव या भारीपन।",
      "सिर के पीछे या गर्दन की त्वचा में कुछ समय के लिए हल्का सुन्नपन।",
      "सुई के स्थान पर हल्का नील पड़ना।",
      "मुख्य नस या धमनी को नुकसान का अत्यंत दुर्लभ खतरा (<0.1%)।"
    ],
    "alternativesEn": "Cervical facet intra-articular steroid injections, physical therapy and postural training, chiropractic manipulation, or cervical fusion surgery.",
    "alternativesHi": "गर्दन के जोड़ों में स्टेरॉयड इंजेक्शन, फिजियोथेरेपी, अथवा गर्दन की सर्जरी।",
    "sedationTypeEn": "Local anesthesia with light conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और हल्की शामक दवा।"
  },
  "sacroiliac-cooled-rfa-lateral-branch": {
    "id": "sacroiliac-cooled-rfa-lateral-branch",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Sacroiliac Joint Cooled Radiofrequency Neurotomy (Lateral Branch RFA)",
    "nameHi": "सैक्रोइलिएक जॉइंट कूल्ड रेडियोफ्रीक्वेंसी न्यूरोटॉमी (कूल्ड RFA - जल-शीतित तकनीक द्वारा नितंब-कमर जोड़ की नसों का विच्छेदन)",
    "indicationEn": "Intractable chronic sacroiliac joint pain lasting > 6 months confirmed by diagnostic lateral branch blocks, refractory to physical therapy, joint injections, and medical management.",
    "indicationHi": "कमर-कूल्हे के जोड़ (SI Joint) का गंभीर पुराना दर्द, नितंब में बैठने पर तेज चुभन, जो जांच वाले इंजेक्शन से सिद्ध हुआ हो और दवाइयों से ठीक न हो रहा हो।",
    "descriptionEn": "Under fluoroscopic guidance, specialized internally water-cooled radiofrequency probes (Coolief / SInergy) are positioned adjacent to the lateral sacral foramina (S1, S2, S3 lateral branches) and the L5 dorsal ramus. Circulating sterile water cools the tissue immediately surrounding the electrode, allowing large, spherical thermal lesions (3-4 times larger than conventional RF) that reliably encompass the variable and unpredictable anatomical path of the sacral lateral branch nerves.",
    "descriptionHi": "एक्स-रे की निगरानी में एक अत्याधुनिक वाटर-कूल्ड रेडियोफ्रीक्वेंसी प्रोब (Coolief System) को कमर की त्रिक हड्डी के पास लगाया जाता है। प्रोब के अंदर बहता ठंडा पानी सुई के सिरे को ठंडा रखता है जिससे सामान्य सुई की तुलना में 3 से 4 गुना बड़ा और सुरक्षित ऊष्मा का घेरा बनता है। यह घेरा जोड़ की सभी नसों को पूरी तरह शांत कर देता है, जिससे वर्षों पुराना दर्द हमेशा के लिए खत्म हो जाता है।",
    "benefitsEn": [
      "Highest success rate and longest duration of pain relief (up to 12-24 months) for sacroiliac joint pain.",
      "Large spherical lesions overcome the notoriously variable anatomical course of sacral lateral branch nerves.",
      "Significantly improves sitting tolerance, walking gait, and quality of life.",
      "Avoids open or minimally invasive sacroiliac joint fusion surgery."
    ],
    "benefitsHi": [
      "कमर-कूल्हे के जोड़ के दर्द में सबसे ज्यादा सफल और 1 से 2 साल तक चलने वाला सबसे असरदार इलाज।",
      "बड़ा और गहरा घेरा बनने के कारण नसों के छूटने की कोई गुंजाइश नहीं रहती।",
      "लंबे समय तक बिना दर्द के बैठने और चलने की क्षमता में जबरदस्त सुधार।",
      "जोड़ में लोहे के पेंच लगाने के बड़े ऑपरेशन से बचाव।"
    ],
    "specificRisksEn": [
      "Localized gluteal and lower back muscle soreness and sunburn sensation lasting 1-2 weeks.",
      "Transient skin numbness or dysesthesia over the posterior buttock.",
      "Puncture site bruising or subcutaneous hematoma.",
      "Extremely rare thermal injury to S1 or S2 ventral nerve roots (<0.1%)."
    ],
    "specificRisksHi": [
      "प्रक्रिया के बाद 1 से 2 सप्ताह तक नितंब में हल्का भारीपन या धूप में जलने जैसा अहसास।",
      "नितंब की त्वचा में कुछ समय के लिए हल्का सुन्नपन।",
      "सुई के स्थान पर हल्का नील पड़ना।",
      "पैर की मुख्य नस पर ताप का असर होने का अत्यंत दुर्लभ खतरा (<0.1%)।"
    ],
    "alternativesEn": "Conventional radiofrequency ablation, repeated steroid joint injections, specialized pelvic stabilization physiotherapy, or minimally invasive SI joint fusion.",
    "alternativesHi": "साधारण रेडियोफ्रीक्वेंसी, बार-बार स्टेरॉयड इंजेक्शन, फिजियोथेरेपी अथवा सर्जिकल जॉइंट फ्यूजन।",
    "sedationTypeEn": "Local anesthesia with intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक दवा।"
  },
  "basivertebral-nerve-ablation-intracept": {
    "id": "basivertebral-nerve-ablation-intracept",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Basivertebral Nerve Ablation (Intracept Procedure) for Vertebrogenic Chronic Low Back Pain",
    "nameHi": "बेसीवर्टीब्रल नर्व एब्लेशन (इंट्रासेप्ट प्रक्रिया - मनके की भीतरी दर्द नस का रेडियोफ्रीक्वेंसी विच्छेदन)",
    "indicationEn": "Chronic vertebrogenic low back pain lasting >= 6 months with Modic Type 1 or Type 2 degenerative endplate changes on lumbar MRI (L3-S1), unresponsive to >= 6 months of conservative therapy.",
    "indicationHi": "कमर का पुराना असहनीय दर्द (वर्टीब्रोजेनिक दर्द), बैठने व आगे झुकने पर तेज दर्द, तथा एमआरआई में मनके की हड्डी और एंडप्लेट में सूजन (Modic Changes 1 या 2) की पुष्टि, जो दवाइयों व कसरत से ठीक न हुआ हो।",
    "descriptionEn": "Under fluoroscopic guidance, a transpedicular cannula and curved steerable stylet are introduced into the center of the vertebral body to the precise anatomical location of the basivertebral nerve trunk (located at the junction of the anterior and middle thirds of the vertebral body). A bipolar radiofrequency probe is deployed and thermal radiofrequency energy (85°C for 15 minutes) is delivered to permanently ablate the basivertebral nerve, disconnecting transmission of endplate pain signals.",
    "descriptionHi": "एक्स-रे की 3D निगरानी में रीढ़ के मनके के अंदर एक विशेष मुड़ने वाली सुई को मनके के ठीक बीच में पहुंचाया जाता है, जहां मनके की मुख्य दर्द नस (Basivertebral Nerve) स्थित होती है। वहां रेडियोफ्रीक्वेंसी प्रोब द्वारा 85°C का नियंत्रित तापमान देकर इस नस को हमेशा के लिए निष्क्रिय कर दिया जाता है, जिससे मनके का पुराना दर्द मस्तिष्क तक पहुंचना स्थायी रूप से बंद हो जाता है।",
    "benefitsEn": [
      "Targeted, permanent treatment for vertebrogenic pain that treats the actual damaged bone endplates rather than just disc bulging.",
      "Statistically significant and clinically sustained pain relief demonstrated out to 5+ years in clinical trials.",
      "Preserves native spinal biomechanics and stability without implants or bone fusion.",
      "Minimally invasive outpatient procedure with small puncture sites."
    ],
    "benefitsHi": [
      "मनके की क्षतिग्रस्त हड्डी के दर्द का जड़ से पक्का और स्थायी इलाज।",
      "क्लिनिकल अध्ययनों में 5 वर्ष से अधिक समय तक निरंतर दर्द मुक्ति और जीवन में सुधार प्रमाणित।",
      "रीढ़ की हड्डी में बिना कोई स्क्रू, रॉड या इम्प्लांट लगाए प्राकृतिक बनावट को सुरक्षित रखना।",
      "ओपीडी आधारित सुई द्वारा उपचार जिसके बाद मरीज उसी दिन घर जा सकता है।"
    ],
    "specificRisksEn": [
      "Post-procedure back soreness and incision tenderness lasting 1-2 weeks.",
      "Transient lower extremity radiculopathy or numbness if cannula breaches pedicle wall (<1%).",
      "Pedicle cortical breach or fracture during cannula passage in dense bone.",
      "Extremely rare vertebral osteomyelitis or deep infection (<0.2%)."
    ],
    "specificRisksHi": [
      "उपचार के बाद 1 से 2 सप्ताह तक पीठ में हल्का खिंचाव या भारीपन।",
      "सुई के रास्ते में पैर में कुछ समय के लिए हल्का खिंचाव या सुन्नपन का दुर्लभ जोखिम (<1%)।",
      "हड्डी में सुई डालते समय मामूली दरार आने की बहुत दुर्लभ संभावना।",
      "गहरे संक्रमण का अत्यंत दुर्लभ खतरा (<0.2%)।"
    ],
    "alternativesEn": "Lumbar spinal fusion surgery (TLIF/ALIF), long-term high-dose opioid medications, spinal cord stimulation (SCS), or conservative physical rehabilitation.",
    "alternativesHi": "रीढ़ की हड्डी को जोड़ने का बड़ा ऑपरेशन (Spinal Fusion), तेज दर्द निवारक गोलियां, स्पाइनल कॉर्ड स्टिमुलेटर, अथवा फिजियोथेरेपी।",
    "sedationTypeEn": "General anesthesia or deep monitored conscious sedation.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) अथवा गहरी शामक दवा।"
  },
  "percutaneous-lumbar-disc-decompression": {
    "id": "percutaneous-lumbar-disc-decompression",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Percutaneous Lumbar Disc Decompression (Mechanical Nucleoplasty / Decompressor)",
    "nameHi": "परक्यूटेनियस लम्बर डिस्क डिकम्प्रेशन (सुई द्वारा डिस्क का भीतरी भाग निकालकर नस का दबाव हटाना)",
    "indicationEn": "Contained lumbar disc protrusion/herniation (<5-6 mm) with predominant radicular leg pain (sciatica), preserved disc height (>50%), failure of conservative care and transforaminal epidural injections, and absence of disc sequestration or spinal canal stenosis.",
    "indicationHi": "कमर की डिस्क का हल्का बाहर निकलना (कंटेन्ड डिस्क हर्नियेशन), पैर में जाने वाला साइटिका का तेज दर्द, जो इंजेक्शन और दवाइयों से ठीक न हो रहा हो, जहां डिस्क की थैली फटी न हो।",
    "descriptionEn": "Under fluoroscopic guidance, a specialized 17-19G cannula is guided into the posterolateral annulus fibrosus into the center of the nucleus pulposus via an extrapedicular Kambin's triangle approach. A motorized high-speed mechanical auger probe (DeCompressor) or plasma coblation wand (Nucleoplasty) is activated to mechanically core out and vaporize a precise volume (1-2 mL) of disc tissue. This reduces intradiscal pressure by >50%, allowing the herniated disc contour to retract away from the compressed nerve root.",
    "descriptionHi": "एक्स-रे की निगरानी में बिना किसी चीरे के, एक पतली नली को सीधे खिसकी हुई डिस्क के अंदर डाला जाता है। एक सूक्ष्म मोटर चालित यंत्र या प्लाज्मा तरंगों द्वारा डिस्क के बीच के 1-2 मिलीलीटर हिस्से को भाप बनाकर बाहर खींच लिया जाता है। डिस्क के अंदर का दबाव तुरंत आधा हो जाता है, जिससे उभरा हुआ हिस्सा अंदर खिंच जाता है और नस पर से दबाव हमेशा के लिए हट जाता है।",
    "benefitsEn": [
      "Rapid decompression of the entrapped nerve root with immediate leg pain relief.",
      "Pinhole percutaneous outpatient procedure under local anesthesia without bone resection or muscle stripping.",
      "Eliminates the risks of post-surgical epidural fibrosis, scar tissue, and spinal instability seen with open discectomy.",
      "Return to sedentary work within 2-5 days."
    ],
    "benefitsHi": [
      "दबी हुई नस का दबाव तुरंत हटना और पैर के दर्द से तत्काल राहत।",
      "बिना कोई हड्डी काटे और बिना मांसपेशी फाड़े केवल सुई के रास्ते से सुरक्षित उपचार।",
      "खुले ऑपरेशन के बाद बनने वाले टांकों के रेशों (Epidural Scar) और रीढ़ के ढीलेपन से बचाव।",
      "मात्र 2 से 5 दिनों में अपने काम पर लौटने की सुविधा।"
    ],
    "specificRisksEn": [
      "Transient discogenic back ache or spasm for 3-7 days after decompression.",
      "Discitis (bacterial infection of the intervertebral disc space, <0.2%, minimized by prophylactic IV/intradiscal antibiotics).",
      "Nerve root puncture causing transient radicular paresthesias.",
      "Extremely rare dural tear or CSF leak."
    ],
    "specificRisksHi": [
      "प्रक्रिया के बाद 3 से 7 दिनों तक कमर में हल्का खिंचाव या मांसपेशियों में अकड़न।",
      "डिस्क में संक्रमण (Discitis) का अत्यंत दुर्लभ खतरा (<0.2%) जिससे बचाव हेतु एंटीबायोटिक दी जाती है।",
      "सुई के स्पर्श से पैर में कुछ क्षण के लिए झनझनाहट।",
      "झिल्ली में रिसाव का अत्यंत दुर्लभ जोखिम।"
    ],
    "alternativesEn": "Transforaminal epidural steroid injection, open surgical microdiscectomy, full-endoscopic lumbar discectomy, or intensive core stabilization physiotherapy.",
    "alternativesHi": "एपिड्यूरल स्टेरॉयड इंजेक्शन, दूरबीन या चीरे से डिस्क का ऑपरेशन (Microdiscectomy), अथवा फिजियोथेरेपी।",
    "sedationTypeEn": "Local anesthesia with light conscious sedation (patient must communicate during needle positioning).",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और हल्की शामक दवा (मरीज से बात करते हुए की जाती है)।"
  },
  "intradiscal-ozone-chemonucleolysis": {
    "id": "intradiscal-ozone-chemonucleolysis",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Percutaneous Intradiscal Ozone-Oxygen (O2-O3) Chemonucleolysis",
    "nameHi": "परक्यूटेनियस इंट्राडिस्कल ओजोन-ऑक्सीजन कीमोन्यूक्लियोलिसिस (डिस्क में मेडिकल ओजोन गैस डालकर उभार व सूजन कम करना)",
    "indicationEn": "Contained lumbar or cervical disc herniation with nerve root compression and radicular pain refractory to conservative therapy, seeking biological non-surgical disc shrinkage.",
    "indicationHi": "कमर या गर्दन की डिस्क का उभार (स्लिप डिस्क), नस दबने से हाथ या पैर में दर्द, जहां बिना चीर-फाड़ के मेडिकल ओजोन गैस द्वारा डिस्क को सुखाकर छोटा करना हो।",
    "descriptionEn": "Under sterile conditions and biplane fluoroscopic guidance, a 22G Chiba needle is inserted into the center of the herniated intervertebral disc. Medical-grade ozone gas (O2-O3 mixture at 27-30 mcg/mL concentration, freshly generated) is slowly injected into the nucleus pulposus (5-10 mL) and periganglionic epidural space. Ozone reacts with disc proteoglycans, breaking down hydrophilic glycosaminoglycans, shrinking the disc volume, neutralizing inflammatory prostaglandins, and stimulating cellular antioxidant repair.",
    "descriptionHi": "एक्स-रे की सीधी निगरानी में एक बहुत बारीक सुई सीधे खिसकी हुई डिस्क के अंदर पहुंचाई जाती है। तुरंत तैयार की गई मेडिकल ग्रेड ओजोन गैस (O2-O3) की निश्चित मात्रा डिस्क के अंदर और नस के चारों तरफ छोड़ी जाती है। ओजोन गैस डिस्क के सूजे हुए रसायनों को तोड़कर डिस्क को सुखाकर सिकोड़ देती है और सूजन पैदा करने वाले तत्वों को तुरंत खत्म कर देती है।",
    "benefitsEn": [
      "Natural biological shrinkage of the herniated disc without mechanical cutting or tissue removal.",
      "Potent anti-inflammatory and analgesic effect neutralizing chemical radiculitis.",
      "High clinical efficacy (>75-80% pain relief) comparable to surgical discectomy.",
      "Virtually zero post-procedural scar tissue formation and same-day discharge."
    ],
    "benefitsHi": [
      "बिना कोई टुकड़ा काटे प्राकृतिक रूप से डिस्क का सिकुड़ना और नस से दूर होना।",
      "नसों की सूजन और रासायनिक जलन को शांत करने की अचूक क्षमता।",
      "75 से 80% से अधिक मरीजों में ऑपरेशन के बराबर उत्कृष्ट व स्थायी लाभ।",
      "शरीर के अंदर कोई घाव या निशान न बनना और उसी दिन घर वापसी।"
    ],
    "specificRisksEn": [
      "Transient sensation of fullness or pressure in the lower back during gas injection.",
      "Temporary discogenic pain flare lasting 24-48 hours.",
      "Extremely rare discitis or spinal infection (<0.1%).",
      "Extremely rare gas embolization (prevented by strict avoidance of intravascular placement)."
    ],
    "specificRisksHi": [
      "गैस डालते समय कमर में कुछ पलों के लिए हल्का दबाव या भारीपन महसूस होना।",
      "प्रक्रिया के बाद 1-2 दिन तक हल्का खिंचाव।",
      "डिस्क में संक्रमण का अत्यंत दुर्लभ खतरा (<0.1%)।",
      "गैस का खून में जाने का अत्यंत दुर्लभ जोखिम (एक्स-रे जांच से पूर्ण बचाव)।"
    ],
    "alternativesEn": "Epidural steroid injection, mechanical disc decompression, endoscopic discectomy, or open microdiscectomy.",
    "alternativesHi": "एपिड्यूरल इंजेक्शन, मैकेनिकल डिस्क डिकम्प्रेशन, दूरबीन द्वारा सर्जरी अथवा खुला ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia with optional mild anxiolysis.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) आवश्यकतानुसार हल्की दवा के साथ।"
  },
  "fluro-celiac-plexus-block-neurolysis": {
    "id": "fluro-celiac-plexus-block-neurolysis",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Fluoroscopy-Guided Celiac Plexus Block / Neurolysis (Retrocrural / Transaortic Technique)",
    "nameHi": "फ्लोरोस्कोपी-गाइडेड सीलिएक प्लेक्सस ब्लॉक एवं न्यूरोलिसिस (अग्नाशय व पेट के कैंसर के असहनीय दर्द हेतु तंत्रिका विच्छेदन)",
    "indicationEn": "Intractable upper abdominal pain due to unresectable pancreatic cancer, gastric cancer, cholangiocarcinoma, or chronic painful pancreatitis requiring high doses of opioid analgesics.",
    "indicationHi": "अग्नाशय (पैंक्रियाज), आमाशय या पेट के कैंसर का असहनीय दर्द, अथवा क्रॉनिक पैंक्रियाटाइटिस का गंभीर दर्द, जिसमें तेज मॉर्फिन दवाइयों से भी आराम न मिल रहा हो या दवाइयों के भारी दुष्प्रभाव हो रहे हों।",
    "descriptionEn": "Under fluoroscopic or CT guidance, two long 20-22G Chiba needles are advanced bilaterally from the back under the 12th ribs into the retrocrural or preceliac space immediately anterior to the abdominal aorta at the level of the T12-L1 vertebra. Contrast injection confirms retroperitoneal spread surrounding the celiac artery trunk without vascular entry. Following diagnostic local anesthetic test, dehydrated absolute alcohol (50-100 mL of 98% ethanol diluted 50:50 with contrast/bupivacaine) is infused to produce permanent chemical neurolysis of the celiac sympathetic plexus.",
    "descriptionHi": "एक्स-रे या सीटी स्कैन की निगरानी में पीठ के रास्ते से दो लंबी बारीक सुइयों को पेट की मुख्य महाधमनी (Aorta) के पास सीलिएक नसों के जाल तक पहुंचाया जाता है। डाई डालकर सही जगह की पुष्टि की जाती है। इसके बाद शुद्ध मेडिकल अल्कोहल का घोल डालकर इन दर्द वाली नसों को हमेशा के लिए निष्क्रिय (Neurolysis) कर दिया जाता है, जिससे पेट का कैंसर का दर्द तुरंत समाप्त हो जाता है।",
    "benefitsEn": [
      "Dramatic and sustained relief of severe intractable upper abdominal oncologic pain (>80-90% relief).",
      "Significant reduction or complete cessation of high-dose opioid painkillers, eliminating opioid-induced constipation, nausea, and cognitive clouding.",
      "Improves quality of life, sleep, and nutritional intake for cancer patients.",
      "Minimally invasive pinhole procedure through the back."
    ],
    "benefitsHi": [
      "पेट और अग्नाशय के कैंसर के भयंकर दर्द से 80 से 90% तुरंत व स्थायी मुक्ति।",
      "मॉर्फिन जैसी नशीली दर्द की दवाइयों की भारी खुराक और उनके दुष्प्रभावों (जैसे कब्ज, उल्टी, सुस्ती) से छुटकारा।",
      "मरीज के खाने-पीने, चैन से सोने और जीवन की गुणवत्ता में भारी सुधार।",
      "पीठ पर बिना कोई चीरा लगाए केवल सुई द्वारा सुरक्षित उपचार।"
    ],
    "specificRisksEn": [
      "Transient orthostatic hypotension (drop in blood pressure upon standing, 30-50%, usually self-limiting in 24-48 hours due to splanchnic vasodilation).",
      "Transient diarrhea (due to unopposed parasympathetic bowel activity, lasts 2-5 days).",
      "Back soreness or retroperitoneal irritation for 48-72 hours.",
      "Extremely rare retroperitoneal hemorrhage or aortic pseudoaneurysm.",
      "Catastrophic paraplegia (<0.1%) caused by accidental disruption of the artery of Adamkiewicz (strictly prevented by real-time fluoroscopic contrast injection)."
    ],
    "specificRisksHi": [
      "प्रक्रिया के बाद 1-2 दिन तक खड़े होने पर रक्तचाप (BP) का थोड़ा कम होना और चक्कर आना (30-50% मरीजों में, जो ड्रिप से ठीक हो जाता है)।",
      "आंतों की गति बढ़ने से 2 से 5 दिनों तक हल्का दस्त होना।",
      "पीठ में 2-3 दिन तक हल्का दर्द।",
      "रक्तस्राव का बहुत दुर्लभ खतरा।",
      "रीढ़ की हड्डी की नस में दवा जाने से पैरों में कमजोरी का अत्यंत दुर्लभ खतरा (<0.1%) जिसे एक्स-रे में डाई देखकर पूरी तरह टाला जाता है।"
    ],
    "alternativesEn": "Intrathecal drug delivery system (pain pump), high-dose oral/transdermal opioids with adjuvant analgesics, splanchnic nerve radiofrequency, or endoscopic ultrasound (EUS) guided celiac neurolysis.",
    "alternativesHi": "कमर में दर्द का पंप लगाना (Intrathecal Pump), मॉर्फिन के पैच और दवाइयां, दूरबीन द्वारा सीलिएक ब्लॉक (EUS), अथवा स्प्लैंकनिक नर्व RFA।",
    "sedationTypeEn": "Monitored intravenous conscious sedation with local anesthesia.",
    "sedationTypeHi": "नस द्वारा गहरी शामक व दर्द निवारक दवा के साथ स्थानीय सुन्नता।"
  },
  "fluro-splanchnic-nerve-rfa": {
    "id": "fluro-splanchnic-nerve-rfa",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Fluoroscopy-Guided Splanchnic Nerve Radiofrequency Neurolysis",
    "nameHi": "फ्लोरोस्कोपी-गाइडेड स्प्लैंकनिक नर्व रेडियोफ्रीक्वेंसी न्यूरोलिसिस (छाती-पेट के जोड़ की नसों का ताप विच्छेदन - कैंसर व पैंक्रियाटाइटिस दर्द निवारण)",
    "indicationEn": "Intractable upper abdominal pain from pancreatic cancer or chronic pancreatitis where celiac plexus anatomy is distorted by tumor encasement, adenopathy, or prior surgery.",
    "indicationHi": "अग्नाशय कैंसर या क्रॉनिक पैंक्रियाटाइटिस का असहनीय पेट दर्द, जहां पेट में ट्यूमर फैलने या पुरानी सर्जरी के कारण सीलिएक नसों तक पहुंचना संभव न हो।",
    "descriptionEn": "Under fluoroscopic guidance, curved radiofrequency needles are advanced bilaterally to the anterolateral margin of the T10 and T11 vertebral bodies where the greater and lesser splanchnic nerves traverse the thoracic retropleural space. Contrast injection rules out pleural or vascular entry. Sensory and motor stimulation testing are performed, followed by multiple thermal radiofrequency lesions (80°C for 90 seconds) to destroy the splanchnic visceral pain fibers before they coalesce into the celiac plexus.",
    "descriptionHi": "एक्स-रे की निगरानी में पीठ के रास्ते से T10 और T11 मनकों के सामने स्प्लैंकनिक नसों के पास विशेष रेडियोफ्रीक्वेंसी सुइयां लगाई जाती हैं। फेफड़ों और नसों की पूरी सुरक्षा जांचने के बाद नियंत्रित ऊष्मा (रेडियोफ्रीक्वेंसी ऊर्जा) द्वारा इन दर्द वाली नसों को जलाकर निष्क्रिय कर दिया जाता है, जिससे पेट का गहरा दर्द पूरी तरह समाप्त हो जाता है।",
    "benefitsEn": [
      "Bypasses dense upper abdominal tumor masses and distorted retroperitoneal anatomy.",
      "Durable, long-lasting reduction in excruciating abdominal visceral cancer pain.",
      "Less incidence of transient orthostatic hypotension compared to celiac plexus neurolysis.",
      "Enables major decrease in narcotic opioid requirements."
    ],
    "benefitsHi": [
      "ट्यूमर के फैलाव और बिगड़ी हुई शारीरिक बनावट के बावजूद पेट के दर्द को रोकने का सबसे अचूक उपाय।",
      "कैंसर और पैंक्रियाज के असहनीय दर्द से लंबी व टिकाऊ मुक्ति।",
      "सीलिएक ब्लॉक की तुलना में रक्तचाप (BP) कम होने की संभावना काफी कम।",
      "नशे वाली तेज दर्द की गोलियों की जरूरत में भारी कमी।"
    ],
    "specificRisksEn": [
      "Pneumothorax (air in pleural space, <1%, strictly monitored under fluoroscopy).",
      "Intercostal neuralgia or transient chest wall dysesthesias for 1-2 weeks.",
      "Transient mild postural hypotension or loose stools.",
      "Extremely rare vascular penetration of the thoracic aorta or hemiazygos vein."
    ],
    "specificRisksHi": [
      "फेफड़े की झिल्ली में हवा जाने का बहुत ही दुर्लभ खतरा (<1%) जिसे एक्स-रे द्वारा पूरी तरह टाला जाता है।",
      "पसलियों के बीच 1 से 2 सप्ताह तक हल्का खिंचाव या भारीपन।",
      "हल्का दस्त या हल्का चक्कर।",
      "खून की नाड़ी में चोट लगने का अत्यंत दुर्लभ खतरा।"
    ],
    "alternativesEn": "Celiac plexus chemical neurolysis, intrathecal morphine pump implant, surgical splanchnicectomy, or palliative systemic opioids.",
    "alternativesHi": "सीलिएक प्लेक्सस ब्लॉक, पेन पंप इम्प्लांट, दूरबीन द्वारा नस काटने की सर्जरी, अथवा तेज दवाइयां।",
    "sedationTypeEn": "Monitored conscious sedation with local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक दवा।"
  },
  "fluro-superior-hypogastric-plexus-neurolysis": {
    "id": "fluro-superior-hypogastric-plexus-neurolysis",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Fluoroscopy-Guided Superior Hypogastric Plexus Block / Chemical Neurolysis",
    "nameHi": "फ्लोरोस्कोपी-गाइडेड सुपीरियर हाइपोगैस्ट्रिक प्लेक्सस न्यूरोलिसिस (पेल्विस, गर्भाशय, मूत्राशय व मलाशय के कैंसर दर्द का तंत्रिका ब्लॉक)",
    "indicationEn": "Intractable visceral pelvic pain caused by advanced cervical, uterine, ovarian, bladder, prostate, or colorectal malignancies, or severe refractory pelvic pain syndromes unresponsive to oral opioids.",
    "indicationHi": "पेल्विस (पेड़ू) और जननांगों का गंभीर कैंसर दर्द (बच्चेदानी का कैंसर, अंडाशय, मूत्राशय, प्रोस्टेट या मलाशय का कैंसर), जिसमें तेज दवाइयों से भी आराम न मिल रहा हो।",
    "descriptionEn": "Under fluoroscopic AP and lateral guidance, two 20-22G Chiba needles are inserted bilaterally from the back, crossing below the L5 transverse process and traversing over the sacral promontory into the retroperitoneal space anterior to the L5-S1 interspace. Proper placement is verified by contrast spread outlining the iliac vessel bifurcations. Chemical neurolysis is performed by injecting 8-10 mL of 10% aqueous phenol or 50-70% ethanol per side to destroy sympathetic pain fibers innervating pelvic viscera.",
    "descriptionHi": "एक्स-रे की निगरानी में पीठ के निचले हिस्से से दो बारीक सुइयों को कमर और सैक्रम हड्डी के ठीक आगे स्थित हाइपोगैस्ट्रिक नसों के जाल तक पहुंचाया जाता है। डाई डालकर खून की नसों से दूरी की पुष्टि की जाती है। इसके बाद मेडिकल फिनोल या अल्कोहल डालकर इन नसों को निष्क्रिय कर दिया जाता है, जिससे पेड़ू, पेशाब की थैली और मलाशय का असहनीय दर्द बंद हो जाता है।",
    "benefitsEn": [
      "Dramatic relief of deep, burning, intractable pelvic visceral cancer pain (>75% reduction).",
      "Significantly reduces required opioid doses, alleviating opioid side effects.",
      "Preserves somatic motor strength in both legs and preserves bladder/bowel sphincter control.",
      "Pinhole outpatient intervention avoiding morbid pelvic resections."
    ],
    "benefitsHi": [
      "पेल्विस और पेड़ू के असहनीय कैंसर दर्द से 75% से अधिक तुरंत व स्थायी राहत।",
      "मॉर्फिन जैसी भारी दर्द की दवाइयों की खुराक में भारी कमी।",
      "पैरों की चलने की ताकत और पेशाब-शौच के नियंत्रण पर कोई बुरा असर नहीं पड़ता।",
      "बिना किसी चीर-फाड़ के केवल सुई द्वारा सुरक्षित रूप से संपन्न।"
    ],
    "specificRisksEn": [
      "Puncture of internal/external iliac vessels leading to retroperitoneal hematoma (<1%).",
      "Transient L5 or S1 nerve root paresthesias or sensory numbness during needle traversal.",
      "Transient warm sensation in the lower extremities.",
      "Extremely rare unintended somatic nerve root chemical injury (<0.2%)."
    ],
    "specificRisksHi": [
      "पेल्विस की रक्त नाड़ी में खरोंच या हल्का आंतरिक रक्तस्राव का बहुत दुर्लभ खतरा (<1%)।",
      "सुई डालते समय पैर में कुछ पलों के लिए झनझनाहट महसूस होना।",
      "पैरों में हल्का गर्माहट का अहसास।",
      "पैर की मुख्य नस पर दवा लगने का अत्यंत दुर्लभ खतरा (<0.2%)।"
    ],
    "alternativesEn": "Ganglion impar block, intrathecal morphine pump, high-dose transdermal fentanyl/methadone, or palliative palliative surgical diversion.",
    "alternativesHi": "गैंग्लियन इम्पर ब्लॉक, पेन पंप, तेज दर्द के पैच अथवा दवाइयां।",
    "sedationTypeEn": "Local anesthesia with monitored conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक दवा।"
  },
  "fluro-ganglion-impar-neurolysis": {
    "id": "fluro-ganglion-impar-neurolysis",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Fluoroscopy-Guided Ganglion Impar (Walther) Neurolysis for Intractable Perineal Pain",
    "nameHi": "फ्लोरोस्कोपी-गाइडेड गैंग्लियन इम्पर न्यूरोलिसिस (गुदा, पेल्विक फ्लोर व पूंछ की हड्डी के पुराने दर्द का तंत्रिका ब्लॉक)",
    "indicationEn": "Intractable chronic perineal, rectal, anal, scrotal/vulvar, or coccygeal pain (coccydynia) caused by terminal pelvic malignancies (rectal/anal carcinoma), radiation proctitis, or refractory chronic perineal pain syndromes.",
    "indicationHi": "गुदा (मलद्वार), पेल्विक फ्लोर, जननांगों अथवा पूंछ की हड्डी (Coccyx) का असहनीय पुराना दर्द, मलाशय का कैंसर, रेडिएशन के बाद का दर्द, अथवा बैठने पर होने वाला भयंकर दर्द।",
    "descriptionEn": "Under lateral fluoroscopic guidance, a 22G curved spinal needle is inserted either trans-sacrococcygeal (through the sacrococcygeal ligament) or via an anococcygeal approach into the retrorectal presacral space immediately anterior to the sacrococcygeal junction (where the solitary retroperitoneal sympathetic Ganglion of Walther lies). Contrast injection demonstrates the classic smooth crescentic presacral \"comma-shaped\" spread without rectal lumen entry. Chemical neurolytic solution (4-6 mL of 6-10% phenol or 50% alcohol) is infused to permanently abolish sympathetic perineal pain signals.",
    "descriptionHi": "एक्स-रे की निगरानी में पूंछ की हड्डी के पास से एक बारीक मुड़ी हुई सुई को मलाशय के ठीक पीछे स्थित गैंग्लियन इम्पर (Walther Ganglion) तक पहुंचाया जाता है। डाई डालकर पक्का किया जाता है कि सुई सही स्थान पर है और आंत के अंदर नहीं है। इसके बाद विशेष दवा डालकर इन नसों को शांत कर दिया जाता है, जिससे मलद्वार और पूंछ की हड्डी का दर्द हमेशा के लिए खत्म हो जाता है।",
    "benefitsEn": [
      "Targeted elimination of burning, intractable perineal and coccygeal cancer pain.",
      "Restores the ability to sit comfortably without specialized donut cushions.",
      "Pure sympathetic block that does not paralyze leg motor nerves or urinary/anal sphincters.",
      "Rapid, simple outpatient procedure."
    ],
    "benefitsHi": [
      "गुदा, पूंछ की हड्डी और पेड़ू के असहनीय दर्द और जलन से तुरंत छुटकारा।",
      "बिना दर्द के सामान्य रूप से बैठने की क्षमता की वापसी।",
      "पैरों की नसों और पेशाब-शौच के नियंत्रण पर कोई विपरीत प्रभाव नहीं पड़ता।",
      "ओपीडी में 15 मिनट में पूरा होने वाला आसान और सुरक्षित उपचार।"
    ],
    "specificRisksEn": [
      "Accidental rectal wall puncture (promptly identified by fluoroscopy; procedure aborted and prophylactic antibiotics given).",
      "Transient localized pain or burning sensation in the perineum for 24-48 hours.",
      "Temporary bowel/bladder urgency or mild sphincter dysesthesia.",
      "Extremely rare presacral abscess or fistula formation (<0.1%)."
    ],
    "specificRisksHi": [
      "मलाशय की दीवार में सुई छूने का दुर्लभ जोखिम (जिसे एक्स-रे में तुरंत पहचानकर एंटीबायोटिक से सुरक्षित किया जाता है)।",
      "गुदा के आसपास 1 से 2 दिन तक हल्की जलन या दर्द।",
      "कुछ समय के लिए पेशाब या शौच की हल्की जल्दी महसूस होना।",
      "इन्फेक्शन का अत्यंत दुर्लभ खतरा (<0.1%)।"
    ],
    "alternativesEn": "Caudal epidural block, pudendal nerve pulsed RF, sacrococcygeal joint steroid injection, oral high-dose opioids, or coccygectomy (surgical excision of tailbone).",
    "alternativesHi": "कौडल एपिड्यूरल इंजेक्शन, पुडेंडल नर्व ब्लॉक, पूंछ की हड्डी में स्टेरॉयड, अथवा पूंछ की हड्डी काटने का ऑपरेशन (Coccygectomy)।",
    "sedationTypeEn": "Local anesthesia with optional conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) आवश्यकतानुसार हल्की शामक दवा के साथ।"
  },
  "lumbar-sympathetic-block-rfa": {
    "id": "lumbar-sympathetic-block-rfa",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Lumbar Sympathetic Ganglion Block / Radiofrequency Neurolysis",
    "nameHi": "लम्बर सिम्पैथेटिक गैंग्लियन ब्लॉक / रेडियोफ्रीक्वेंसी न्यूरोलिसिस (पैरों में रक्त संचार बढ़ाने व सीआरपीएस दर्द का तंत्रिका विच्छेदन)",
    "indicationEn": "Complex Regional Pain Syndrome (CRPS Type I/II) of the lower extremity, severe peripheral arterial disease (PAD) with non-reconstructable critical limb ischemia, frostbite, painful phantom limb pain, or refractory hyperhidrosis.",
    "indicationHi": "पैर का सीआरपीएस सिंड्रोम (चोट के बाद पैर में असहनीय जलन, सूजन और रंग बदलना), पैर की नसों का बंद होना जहां ऑपरेशन संभव न हो (Critical Limb Ischemia - पैर को कटने से बचाने हेतु रक्त संचार बढ़ाना), अथवा पैर का पुराना असाध्य दर्द।",
    "descriptionEn": "Under fluoroscopic AP and lateral guidance, 20-22G needles are inserted at the L2, L3, and L4 vertebral levels. The needle tips are advanced until positioned at the anterolateral border of the vertebral bodies, immediately anterior to the psoas major muscle. Contrast spread confirms linear prevertebral spread without vascular uptake in the lumbar vessels or inferior vena cava/aorta. Temperature probes monitor distal foot temperature. Diagnostic local anesthetic or thermal radiofrequency (80°C for 90 seconds per level) or chemical neurolysis (phenol) is applied, producing sympathetic denervation and vasodilatation.",
    "descriptionHi": "एक्स-रे की निगरानी में पीठ के रास्ते से L2, L3 और L4 मनकों के सामने स्थित सिम्पैथेटिक नसों के पास सुइयां पहुंचाई जाती हैं। डाई डालकर नसों की पुष्टि की जाती है और पैर की उंगलियों में तापमान नापने वाला सेंसर लगाया जाता है। इन नसों को सुन्न करने या रेडियोफ्रीक्वेंसी से निष्क्रिय करने पर पैर की रक्त वाहिकाएं चौड़ी हो जाती हैं, पैर का तापमान तुरंत 2 से 3 डिग्री बढ़ जाता है, खून का दौरा तेज होता है और भयंकर जलन व दर्द शांत हो जाता है।",
    "benefitsEn": [
      "Immediate, marked increase in lower extremity peripheral blood flow (vasodilatation).",
      "Durable relief of agonizing burning neuropathic pain and allodynia in CRPS.",
      "Promotes healing of ischemic foot ulcers and can prevent limb amputation.",
      "Pinhole percutaneous outpatient procedure."
    ],
    "benefitsHi": [
      "पैर में खून के दौरे में तुरंत भारी इजाफा, जिससे पैर गर्म और स्वस्थ होता है।",
      "पैर की असहनीय जलन, छूने पर भी होने वाले तेज दर्द और सूजन से स्थायी राहत।",
      "पैर के न भरने वाले घावों (Gangrene / Ulcers) को भरने में मदद और पैर को कटने से बचाना।",
      "बिना किसी चीरे के केवल सुई द्वारा सुरक्षित उपचार।"
    ],
    "specificRisksEn": [
      "Genitofemoral neuralgia (groin / upper anterior thigh burning pain, 5-15%, usually self-limiting in 2-6 weeks).",
      "Puncture of the aorta, inferior vena cava, or lumbar segmental vessels.",
      "Transient lower extremity motor weakness if somatic nerve roots are inadvertently anesthetized.",
      "Transient orthostatic lightheadedness."
    ],
    "specificRisksHi": [
      "जांघ के ऊपरी हिस्से में 2 से 4 सप्ताह तक हल्की जलन या खिंचाव (Genitofemoral Neuralgia - 5-10% मामलों में, जो दवा से ठीक हो जाता है)।",
      "पेट की मुख्य रक्त नाड़ी के पास सुई होने से हल्का रक्तस्राव का जोखिम।",
      "दवा थोड़ा फैलने पर पैर में कुछ घंटों के लिए हल्की कमजोरी।",
      "हल्का चक्कर आना।"
    ],
    "alternativesEn": "Spinal cord stimulation (SCS), intravenous iloprost/prostanoid infusions, aggressive physical rehabilitation, or surgical open/laparoscopic lumbar sympathectomy.",
    "alternativesHi": "स्पाइनल कॉर्ड स्टिमुलेटर (SCS), नस द्वारा दवाइयां, अथवा दूरबीन द्वारा नस काटने की सर्जरी (Sympathectomy)।",
    "sedationTypeEn": "Local anesthesia with intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक दवा।"
  },
  "stellate-ganglion-block": {
    "id": "stellate-ganglion-block",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Stellate Ganglion Block (Ultrasound / Fluoroscopy Guided)",
    "nameHi": "स्टैलेट गैंग्लियन ब्लॉक (गर्दन की सिम्पैथेटिक नस का ब्लॉक - हाथ के सीआरपीएस दर्द, रक्त संचार विकार व पीटीएसडी हेतु)",
    "indicationEn": "Complex Regional Pain Syndrome (CRPS Type I/II) of the upper extremity, refractory Raynaud's phenomenon, upper limb ischemic pain, refractory post-traumatic stress disorder (PTSD), or ventricular electrical storm.",
    "indicationHi": "हाथ का सीआरपीएस (चोट के बाद हाथ में अत्यधिक जलन, सूजन व दर्द), रेनॉड्स रोग (हाथ की उंगलियों में खून का दौरा बंद होना व नीला पड़ना), हाथ का पुराना दर्द, अथवा गंभीर पीटीएसडी (PTSD) विकार।",
    "descriptionEn": "Under real-time ultrasound guidance, the anterior tubercle of C6 (Chassaignac's tubercle), carotid artery, internal jugular vein, vertebral artery, and longus colli muscle are clearly visualized. A 25G needle is guided in-plane beneath the prevertebral fascia directly onto the surface of the longus colli muscle. Following negative aspiration for blood and CSF, 4-5 mL of local anesthetic (Bupivacaine/Ropivacaine) is deposited. Block success is verified by the immediate development of ipsilateral Horner's syndrome (ptosis, miosis, anhidrosis) and temperature rise in the hand.",
    "descriptionHi": "सोनोग्राफी की मदद से गर्दन की मुख्य खून की नाड़ियों (कैरोटिड धमनी व वर्टिब्रल धमनी) को पूरी तरह बचाते हुए गर्दन के निचले हिस्से (C6) में लोंगस कोली मांसपेशी के ऊपर एक बारीक सुई डाली जाती है। सुन्न करने की दवा की थोड़ी मात्रा डालते ही हाथ का रक्त संचार तुरंत बढ़ जाता है, हाथ गर्म हो जाता है और आंख की पलक थोड़ी झुकती है (हॉर्नर सिंड्रोम), जो ब्लॉक के 100% सफल होने का प्रमाण है।",
    "benefitsEn": [
      "Immediate increase in upper limb microvascular blood supply and temperature.",
      "Profound reduction of severe burning allodynia and sympathetic maintained pain in the arm.",
      "Real-time ultrasound guidance completely eliminates catastrophic intravascular vertebral artery injection.",
      "Enables patients to engage in active physical hand therapy."
    ],
    "benefitsHi": [
      "हाथ की उंगलियों में रक्त संचार का तुरंत बढ़ना और हाथ का सामान्य रंग लौटना।",
      "हाथ की असहनीय जलन, छूने पर भी होने वाले दर्द और सूजन से तुरंत मुक्ति।",
      "सोनोग्राफी द्वारा गर्दन की मुख्य नसों को 100% सुरक्षित रखना।",
      "हाथ की फिजियोथेरेपी और दैनिक कामकाज फिर से शुरू करने में मदद।"
    ],
    "specificRisksEn": [
      "Expected transient Horner's syndrome (drooping eyelid, constricted pupil, facial flushing, nasal congestion lasting 4-6 hours).",
      "Temporary hoarseness of voice or difficulty swallowing (due to spread to recurrent laryngeal nerve, resolves in 2-4 hours).",
      "Extremely rare intravascular injection into the vertebral artery causing immediate seizure (<0.01%, virtually eliminated by ultrasound guidance).",
      "Neck hematoma or vasovagal syncope."
    ],
    "specificRisksHi": [
      "प्रक्रिया के बाद 4 से 6 घंटे तक आंख की पलक का हल्का झुकना, चेहरे पर लाली या नाक बंद होना (जो ब्लॉक के सही काम करने का सामान्य लक्षण है)।",
      "आवाज में थोड़ा भारीपन या थूक निगलने में कुछ घंटों के लिए हल्का सूखापन।",
      "गर्दन की मुख्य धमनी में दवा जाने का अत्यंत दुर्लभ जोखिम (<0.01%) जिसे सोनोग्राफी द्वारा पूरी तरह रोका जाता है।",
      "सुई के स्थान पर हल्का नील पड़ना।"
    ],
    "alternativesEn": "Oral calcium channel blockers, physical therapy, spinal cord stimulation (cervical SCS), or surgical thoracic sympathectomy.",
    "alternativesHi": "रक्तचाप की दवाइयां, फिजियोथेरेपी, सर्वाइकल स्पाइनल कॉर्ड स्टिमुलेटर, अथवा सर्जरी द्वारा नस काटना।",
    "sedationTypeEn": "Local anesthesia (sedation kept minimal so patient can phonate and verify vocal cord safety).",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia - मरीज को होश में रखा जाता है ताकि आवाज की जांच हो सके)।"
  },
  "genicular-nerve-diagnostic-block": {
    "id": "genicular-nerve-diagnostic-block",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Genicular Nerve Diagnostic Block",
    "nameHi": "जेनिकुलर नर्व डायग्नोस्टिक ब्लॉक (घुटने की दर्द नसों की जांच हेतु सुन्नता ब्लॉक - RFA पूर्व परीक्षण)",
    "indicationEn": "Diagnostic evaluation of chronic refractory knee osteoarthritis pain or post-total knee arthroplasty (TKA) pain, to determine if >= 50-80% pain relief is achieved prior to performing radiofrequency ablation (RFA).",
    "indicationHi": "घुटने के पुराने गठिया अथवा घुटना बदलवाने (TKA) के बाद भी रहने वाले दर्द की जांच, यह देखने के लिए कि क्या जेनिकुलर नर्व रेडियोफ्रीक्वेंसी (RFA) से मरीज को 100% स्थायी आराम मिलेगा या नहीं।",
    "descriptionEn": "Under fluoroscopic or high-resolution ultrasound guidance, 25G needles are placed at the cortical junctions of the femoral and tibial shafts where the three main sensory genicular nerves travel: Superior Medial Genicular Nerve (SMGN), Superior Lateral Genicular Nerve (SLGN), and Inferior Medial Genicular Nerve (IMGN). A small volume (0.5-1.0 mL) of local anesthetic (Lidocaine or Bupivacaine) is deposited onto each target nerve. The patient immediately ambulates and records knee pain reduction over the next 4-6 hours.",
    "descriptionHi": "एक्स-रे या सोनोग्राफी की निगरानी में घुटने के तीन मुख्य दर्द बिंदुओं (SMGN, SLGN, IMGN) पर तीन बहुत बारीक सुइयां लगाई जाती हैं। प्रत्येक नस पर थोड़ी सी सुन्न करने की दवा डाली जाती है। मरीज को तुरंत चलाकर और सीढ़ी चढ़वाकर देखा जाता है कि घुटने का दर्द कितना कम हुआ है ताकि आगे का स्थायी इलाज तय किया जा सके।",
    "benefitsEn": [
      "Accurate, predictive test verifying whether knee pain is transmitted via the genicular nerves.",
      "Prerequisite test ensuring high clinical success (>80%) before permanent radiofrequency ablation.",
      "Quick 10-minute outpatient procedure with zero downtime.",
      "Provides patients with immediate firsthand experience of potential post-RFA pain relief."
    ],
    "benefitsHi": [
      "यह पक्का करने की सटीक जांच कि घुटने का दर्द किन नसों से आ रहा है।",
      "स्थायी रेडियोफ्रीक्वेंसी (RFA) कराने से पहले सफलता की गारंटी तय करने वाला अनिवार्य परीक्षण।",
      "मात्र 10 मिनट में होने वाला आसान व सुरक्षित टेस्ट।",
      "जांच के तुरंत बाद मरीज को खुद अनुभव होता है कि दर्द कितना गायब हो गया।"
    ],
    "specificRisksEn": [
      "Transient numbness or weakness in the leg if local anesthetic inadvertently tracks to the peroneal or tibial nerve (<1%).",
      "Minor puncture site tenderness or subcutaneous bruising.",
      "False-positive or false-negative test result.",
      "Short duration of relief (expected, local anesthetic wears off in a few hours)."
    ],
    "specificRisksHi": [
      "दवा थोड़ा फैलने पर पैर में कुछ घंटों के लिए हल्का सुन्नपन या भारीपन (<1%)।",
      "सुई के स्थान पर हल्का दर्द या नील।",
      "जांच में कभी-कभी अस्पष्ट परिणाम की संभावना।",
      "आराम केवल कुछ घंटों तक रहना (क्योंकि यह केवल सुन्न करने की जांच है)।"
    ],
    "alternativesEn": "Intra-articular steroid or hyaluronic acid injection, genicular artery embolization (GAE), oral analgesics, or proceeding with total knee replacement.",
    "alternativesHi": "घुटने के जोड़ में स्टेरॉयड या ग्रीस का इंजेक्शन, जेनिकुलर आर्टरी एम्बोलाइजेशन (GAE), अथवा घुटना प्रत्यारोपण।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "genicular-nerve-cooled-rfa": {
    "id": "genicular-nerve-cooled-rfa",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Genicular Nerve Cooled Radiofrequency Ablation for Chronic Knee Pain",
    "nameHi": "जेनिकुलर नर्व कूल्ड रेडियोफ्रीक्वेंसी एब्लेशन (घुटने के पुराने दर्द हेतु जल-शीतित तकनीक द्वारा दर्द नसों का स्थायी विच्छेदन)",
    "indicationEn": "Intractable knee pain due to moderate-to-severe osteoarthritis (Kellgren-Lawrence Grade 3-4) or persistent post-knee replacement pain, with >= 50% relief on diagnostic genicular blocks, ineligible for or wishing to avoid joint replacement surgery.",
    "indicationHi": "घुटने का पुराना गंभीर गठिया, अथवा घुटना बदलवाने (Knee Replacement) के बाद भी रहने वाला पुराना दर्द, जो जांच वाले इंजेक्शन से सिद्ध हो चुका हो, और मरीज बिना बड़ा ऑपरेशन कराए 1 से 2 साल के लिए दर्द से पूर्ण मुक्ति चाहता हो।",
    "descriptionEn": "Under fluoroscopic guidance, specialized internally water-cooled radiofrequency probes (Coolief) are navigated to the SMGN, SLGN, and IMGN bony landmarks. Water circulation keeps the probe tip cool, allowing creation of large, spherical thermal lesions (8-10 mm diameter, 60°C tissue temperature for 150 seconds per lesion). These large lesions overcome anatomical nerve variations and reliably ablate the sensory genicular nerves transmitting arthritic knee pain.",
    "descriptionHi": "एक्स-रे की निगरानी में एक अत्याधुनिक वाटर-कूल्ड रेडियोफ्रीक्वेंसी प्रोब (Coolief System) को घुटने की दर्द नसों के पास लगाया जाता है। प्रोब में बहता ठंडा पानी सुई के सिरे को जलने से बचाता है और सामान्य सुई से 3 से 4 गुना बड़ा सुरक्षित ऊष्मा का घेरा बनाता है। यह घेरा घुटने की सभी दर्द नसों को पूरी तरह निष्क्रिय कर देता है, जिससे घुटने का पुराना दर्द 1 से 2 साल के लिए गायब हो जाता है।",
    "benefitsEn": [
      "Superior, durable pain relief lasting 12 to 24 months, significantly outperforming conventional RF and intra-articular steroid injections.",
      "Substantial improvement in knee joint function, walking distance, and Oxford Knee Score.",
      "Large spherical lesions overcome genicular nerve anatomical variations.",
      "Completely non-surgical outpatient treatment avoiding joint replacement surgery."
    ],
    "benefitsHi": [
      "घुटने के पुराने दर्द से 12 से 24 महीने (1 से 2 साल) तक लंबी व निरंतर राहत।",
      "चलने-फिरने, सीढ़ियां चढ़ने और दैनिक कामकाज करने की क्षमता में जबरदस्त सुधार।",
      "बड़ा घेरा बनने से नस छूटने की कोई गुंजाइश नहीं रहती।",
      "बिना कोई चीरा लगाए और बिना घुटना बदले ओपीडी में ही सुरक्षित इलाज।"
    ],
    "specificRisksEn": [
      "Post-procedure localized knee soreness, burning sensation, or swelling lasting 1-2 weeks.",
      "Cutaneous numbness or dysesthesia over the anterior knee skin.",
      "Subcutaneous ecchymosis or minor hematoma at entry sites.",
      "Extremely rare injury to the common peroneal or saphenous nerve (<0.1%, prevented by anatomical positioning and sensory/motor testing)."
    ],
    "specificRisksHi": [
      "उपचार के बाद 1 से 2 सप्ताह तक घुटने में हल्की जलन, भारीपन या सूजन।",
      "घुटने की त्वचा का कुछ हिस्सा थोड़े समय के लिए सुन्न होना।",
      "सुई के स्थान पर हल्का नील पड़ना।",
      "पैर की मुख्य नस पर ताप लगने का अत्यंत दुर्लभ खतरा (<0.1%)।"
    ],
    "alternativesEn": "Conventional or pulsed radiofrequency, genicular artery embolization (GAE), repeated viscosupplementation injections, or total knee arthroplasty (TKA).",
    "alternativesHi": "साधारण रेडियोफ्रीक्वेंसी, जेनिकुलर आर्टरी एम्बोलाइजेशन (GAE), ग्रीस के इंजेक्शन अथवा घुटना प्रत्यारोपण सर्जरी।",
    "sedationTypeEn": "Local anesthesia with intravenous conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक दवा।"
  },
  "genicular-nerve-pulsed-rfa": {
    "id": "genicular-nerve-pulsed-rfa",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Genicular Nerve Conventional / Pulsed Radiofrequency Neurotomy",
    "nameHi": "जेनिकुलर नर्व कन्वेंशनल / पल्स्ड रेडियोफ्रीक्वेंसी न्यूरोटॉमी (घुटने की दर्द नसों का पल्स्ड न्यूरोमॉड्यूलेशन उपचार)",
    "indicationEn": "Chronic knee osteoarthritis pain or post-arthroplasty knee pain in patients seeking a non-destructive neuromodulatory approach (pulsed RF) or standard thermal neurotomy.",
    "indicationHi": "घुटने का पुराना दर्द, जहां नस को बिना जलाए केवल विद्युत तरंगों (Pulsed RF) द्वारा शांत करना हो, अथवा मानक थर्मल रेडियोफ्रीक्वेंसी द्वारा दर्द रोकना हो।",
    "descriptionEn": "Under fluoroscopic or ultrasound guidance, 20-22G RF cannulas with 5-10 mm active tips are placed at the SMGN, SLGN, and IMGN sites. In pulsed RF mode, bursts of high-voltage radiofrequency energy (42°C maximum, 20 ms pulses at 2 Hz for 240-360 seconds) are delivered to create an electromagnetic field that modulates pain gene expression and interrupts nociceptive signaling without causing thermal coagulative tissue destruction.",
    "descriptionHi": "एक्स-रे या सोनोग्राफी की निगरानी में घुटने की तीन दर्द नसों के पास रेडियोफ्रीक्वेंसी सुइयां लगाई जाती हैं। पल्स्ड मोड में 42 डिग्री से कम तापमान पर उच्च आवृति वाली विद्युत तरंगों द्वारा नसों के दर्द संकेतों को शांत (Neuromodulation) किया जाता है। इससे नस को कोई भौतिक नुकसान पहुंचाए बिना दर्द का अहसास होना बंद हो जाता है।",
    "benefitsEn": [
      "Non-destructive pain relief with zero risk of cutaneous thermal burns or motor nerve damage.",
      "Minimal post-procedure discomfort and no neuritis or deafferentation pain.",
      "Provides 6 to 12 months of significant knee pain reduction and functional improvement.",
      "Can be safely repeated as needed."
    ],
    "benefitsHi": [
      "बिना नस को जलाए या नुकसान पहुंचाए सुरक्षित दर्द निवारण।",
      "प्रक्रिया के बाद दर्द या जलन का बिल्कुल न होना।",
      "घुटने के दर्द में 6 से 12 महीने तक उल्लेखनीय राहत और चलने में सुधार।",
      "आवश्यकता पड़ने पर भविष्य में इसे दोबारा सुरक्षित रूप से दोहराया जा सकता है।"
    ],
    "specificRisksEn": [
      "Shorter duration of clinical efficacy (6-9 months) compared to cooled RFA.",
      "Minor puncture site bruising or mild swelling.",
      "Variable patient response.",
      "Extremely rare needle tract infection."
    ],
    "specificRisksHi": [
      "कूल्ड RFA की तुलना में आराम की अवधि थोड़ी कम (6 से 9 महीने) होना।",
      "सुई के स्थान पर हल्का नील या सूजन।",
      "अलग-अलग मरीजों में राहत के स्तर में अंतर।",
      "संक्रमण का अत्यंत दुर्लभ खतरा।"
    ],
    "alternativesEn": "Cooled radiofrequency ablation (Coolief), genicular artery embolization, intra-articular steroid/HA injections, or surgical knee replacement.",
    "alternativesHi": "कूल्ड रेडियोफ्रीक्वेंसी (Cooled RFA), जेनिकुलर आर्टरी एम्बोलाइजेशन (GAE), इंजेक्शन अथवा घुटना प्रत्यारोपण।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "occipital-nerve-block-pulsed-rf": {
    "id": "occipital-nerve-block-pulsed-rf",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Occipital Nerve Block and Pulsed Radiofrequency",
    "nameHi": "ऑसीपिटल नर्व ब्लॉक एवं पल्स्ड रेडियोफ्रीक्वेंसी (सिर के पीछे के पुराने दर्द व माइग्रेन हेतु तंत्रिका मॉड्यूलेशन)",
    "indicationEn": "Occipital neuralgia, chronic refractory migraine, cluster headache, or cervicogenic headache with shooting, throbbing, or lancinating pain from the suboccipital skull base radiating over the vertex.",
    "indicationHi": "ऑसीपिटल न्यूरेल्जिया (सिर के पिछले हिस्से से शुरू होकर पूरे सिर में फैलने वाला करंट जैसा तेज दर्द), पुराना माइग्रेन, क्लस्टर सिरदर्द, जो सामान्य दवाइयों से ठीक न हो रहा हो।",
    "descriptionEn": "Under high-frequency ultrasound guidance, the greater and lesser occipital nerves are mapped at the level of C2 over the obliquus capitis inferior muscle or along the superior nuchal line adjacent to the occipital artery. Pulsed radiofrequency energy (42°C, 2 Hz, 45V for 240-360 seconds) is delivered to the nerve to alter synaptic plasticity and inhibit pain signal conduction without thermal axonal injury, followed by infiltration of local anesthetic and corticosteroid.",
    "descriptionHi": "सोनोग्राफी की मदद से सिर के पिछले हिस्से की मुख्य रक्त नाड़ी को बचाते हुए ऑसीपिटल नस के पास एक विशेष सुई पहुंचाई जाती है। पल्स्ड रेडियोफ्रीक्वेंसी तरंगों द्वारा नस के दर्द संकेतों को शांत (Neuromodulation) किया जाता है। इसके पश्चात थोड़ी सूजन-रोधी दवा डाली जाती है जिससे सिर का पुराना दर्द और माइग्रेन के दौरे हमेशा के लिए शांत हो जाते हैं।",
    "benefitsEn": [
      "Profound reduction in the frequency, severity, and duration of debilitating headaches and occipital neuralgia.",
      "Pulsed RF avoids painful thermal neuritis or scalp alopecia associated with continuous RF.",
      "High-precision ultrasound guidance prevents occipital artery puncture or hematoma.",
      "Significantly decreases consumption of triptans and narcotic analgesics."
    ],
    "benefitsHi": [
      "सिर के भयंकर दर्द, माइग्रेन के हमलों और सिर की झनझनाहट में तुरंत भारी कमी।",
      "पल्स्ड तकनीक होने के कारण सिर की त्वचा में जलन या बाल झड़ने का कोई खतरा नहीं।",
      "सोनोग्राफी द्वारा सिर की खून की नस को सुरक्षित रखना।",
      "रोज-रोज सिरदर्द की तेज दवाइयां खाने से मुक्ति।"
    ],
    "specificRisksEn": [
      "Scalp numbness, hypersensitivity, or itching for several days.",
      "Puncture site soreness or localized scalp bruising.",
      "Transient lightheadedness or vasovagal episode during injection.",
      "Extremely rare occipital artery hematoma or localized alopecia (<0.1%)."
    ],
    "specificRisksHi": [
      "सिर के पीछे की चमड़ी में कुछ दिनों तक हल्का सुन्नपन या खुजली।",
      "सुई के स्थान पर हल्का दर्द या नील।",
      "हल्का चक्कर आना।",
      "बाल झड़ने या खून जमा होने का अत्यंत दुर्लभ खतरा (<0.1%)।"
    ],
    "alternativesEn": "Oral anticonvulsants (carbamazepine, gabapentin), botulinum toxin (Botox) injections for migraine, CGRP inhibitors, or occipital nerve stimulator implant.",
    "alternativesHi": "माइग्रेन की गोलियां, बोटॉक्स (Botox) इंजेक्शन, अथवा ऑसीपिटल नर्व स्टिमुलेटर इम्प्लांट।",
    "sedationTypeEn": "Local anesthesia.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia)।"
  },
  "pudendal-nerve-block-pulsed-rf": {
    "id": "pudendal-nerve-block-pulsed-rf",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Pudendal Nerve Block / Pulsed Radiofrequency Neurotomy",
    "nameHi": "पुडेंडल नर्व ब्लॉक एवं पल्स्ड रेडियोफ्रीक्वेंसी न्यूरोटॉमी (पेल्विक फ्लोर, जननांगों व गुदा के असहनीय दर्द का उपचार)",
    "indicationEn": "Pudendal neuralgia (Alcock's canal syndrome) with burning, sharp, electric perineal, genital, and anorectal pain aggravated by sitting, relieved by standing or sitting on a toilet seat, with positive Nantes criteria.",
    "indicationHi": "पुडेंडल न्यूरेल्जिया (पेल्विक फ्लोर व जननांगों की मुख्य नस का दबना), बैठने पर मलद्वार, अंडकोष/योनि अथवा पेड़ू में असहनीय जलन, करंट व चुभन का दर्द, जो खड़े होने या टॉयलेट सीट पर बैठने पर घटता हो।",
    "descriptionEn": "Under fluoroscopic, CT, or ultrasound guidance via a transgluteal approach, a radiofrequency cannula is advanced to the ischial spine where the pudendal nerve traverses between the sacrospinous and sacrotuberous ligaments (or at Alcock's canal). Sensory stimulation (50 Hz) reproduces patient's perineal pain at <0.5V, while motor testing (2 Hz) confirms anal sphincter twitching without leg movement. Pulsed radiofrequency (42°C for 240-360 seconds) is delivered, followed by hydrodissection with local anesthetic and corticosteroid to release ligamentous entrapment.",
    "descriptionHi": "एक्स-रे या सीटी स्कैन की निगरानी में नितंब के रास्ते से एक बारीक सुई को कमर की इस्चियल हड्डी के पास पुडेंडल नस तक पहुंचाया जाता है। नस की जांच करने के बाद पल्स्ड रेडियोफ्रीक्वेंसी तरंगों द्वारा नस को बिना जलाए उसके दर्द संकेतों को शांत किया जाता है। इसके पश्चात दवा डालकर नस को जकड़ने वाले कड़े लिगामेंट से छुड़ा दिया जाता है, जिससे बैठने पर होने वाला तेज दर्द समाप्त हो जाता है।",
    "benefitsEn": [
      "Profound, long-lasting relief of excruciating neuropathic perineal and genital pain.",
      "Restores the ability to sit comfortably and resume normal intimate and occupational activities.",
      "Pulsed radiofrequency does not cause permanent nerve injury, sphincter incontinence, or erectile dysfunction.",
      "Avoids radical surgical transgluteal or transperineal pudendal nerve decompression."
    ],
    "benefitsHi": [
      "जननांगों और पेल्विक फ्लोर के असहनीय दर्द, जलन और करंट से स्थायी राहत।",
      "बिना दर्द के कुर्सी पर बैठने और सामान्य पारिवारिक व वैवाहिक जीवन जीने की क्षमता की वापसी।",
      "पल्स्ड तकनीक होने से पेशाब-शौच के नियंत्रण या पुरुष कमजोरी (Erectile Dysfunction) का कोई खतरा नहीं।",
      "चीर-फाड़ वाले बड़े और जोखिम भरे ऑपरेशन से पूर्ण बचाव।"
    ],
    "specificRisksEn": [
      "Transient perineal or gluteal numbness and tingling for several hours to days.",
      "Post-procedure muscle soreness or pain flare lasting 1-2 weeks.",
      "Puncture site hematoma from proximity to the internal pudendal artery.",
      "Extremely rare transient urinary retention or sphincter weakness (<0.5%)."
    ],
    "specificRisksHi": [
      "नितंब या जननांगों में कुछ दिनों तक हल्का सुन्नपन या झनझनाहट।",
      "मांसपेशी में 1 से 2 सप्ताह तक खिंचाव या भारीपन।",
      "सुई के स्थान पर हल्का नील पड़ना।",
      "पेशाब करने में कुछ समय के लिए हल्की रुकावट का दुर्लभ जोखिम (<0.5%)।"
    ],
    "alternativesEn": "Pudendal cushion offloading, specialized pelvic floor physical therapy, oral neuromodulators (duloxetine, pregabalin), or surgical decompression of the pudendal nerve.",
    "alternativesHi": "विशेष डोनट तकिया, पेल्विक फिजियोथेरेपी, दवाइयां अथवा सर्जिकल ऑपरेशन।",
    "sedationTypeEn": "Local anesthesia with monitored conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और नस द्वारा शामक दवा।"
  },
  "targeted-epidural-blood-patch-sih": {
    "id": "targeted-epidural-blood-patch-sih",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Targeted Epidural Blood Patch (Fluoroscopy / CT Guided) for Spontaneous Intracranial Hypotension",
    "nameHi": "टारगेटेड एपिड्यूरल ब्लड पैच (मस्तिष्क के पानी के रिसाव - SIH हेतु रीढ़ में मरीज के अपने रक्त का सीलिंग पैच)",
    "indicationEn": "Spontaneous Intracranial Hypotension (SIH) or severe refractory post-dural puncture headache (PDPH) caused by spinal CSF leaks, with severe orthostatic headache (relieved when lying flat), pachymeningeal enhancement, subdural hygromas, or brain sagging on MRI.",
    "indicationHi": "स्पॉन्टेनियस इंट्राक्रैनियल हाइपोटेंशन (SIH - रीढ़ की हड्डी से मस्तिष्क के पानी का रिसाव), खड़े होते ही सिर फटने जैसा तेज सिरदर्द जो लेटते ही गायब हो जाता हो, तथा एमआरआई में मस्तिष्क में खिंचाव की पुष्टि।",
    "descriptionEn": "Under precise biplane fluoroscopy or CT guidance, a 18-20G Tuohy needle is steered to the exact anatomical level of the confirmed or suspected dural tear / CSF leak (cervical, thoracic, or lumbar level). After contrast confirms targeted epidural spread directly over the leak site without intrathecal or intravascular entry, 15-30 mL of freshly drawn autologous sterile whole venous blood (with or without fibrin glue) is slowly injected into the epidural space to form an immediate biological gelatinous patch that permanently seals the dural hole.",
    "descriptionHi": "सीटी स्कैन या एक्स-रे की सटीक निगरानी में ठीक उस जगह पर सुई पहुंचाई जाती है जहां से मस्तिष्क का पानी (CSF) रिस रहा होता है। मरीज की बांह से 15 से 30 मिलीलीटर शुद्ध रक्त निकालकर तुरंत उसी जगह रीढ़ की नस के बाहर डाला जाता है। यह रक्त वहां जाकर थक्के (Blood Patch) का रूप ले लेता है और फटे हुए सुराख को तुरंत सील कर देता है, जिससे सिरदर्द उसी दिन हमेशा के लिए गायब हो जाता है।",
    "benefitsEn": [
      ">85-90% cure rate for severe orthostatic headaches and intracranial hypotension.",
      "Immediate cessation of brain sagging, reversing risk of brain herniation or subdural hematoma.",
      "Targeted placement directly at the leak site has vastly superior success compared to non-targeted blind lumbar patches.",
      "Completely biological, autologous sealing avoiding open surgical dural repair."
    ],
    "benefitsHi": [
      "खड़े होने पर होने वाले असहनीय सिरदर्द से 85 से 90% मरीजों में तुरंत व स्थायी मुक्ति।",
      "मस्तिष्क के नीचे खिसकने (Brain Sagging) और अंदर खून जमने के जानलेवा खतरे से तुरंत जीवन रक्षा।",
      "सटीक सुराख के ऊपर खून डालने से साधारण इंजेक्शन की तुलना में कई गुना अधिक सफलता।",
      "बिना रीढ़ की हड्डी को काटे मरीज के अपने रक्त द्वारा प्राकृतिक रूप से सुराख का बंद होना।"
    ],
    "specificRisksEn": [
      "Transient rebound intracranial hypertension (frontal/orbital headache, blurred vision, nausea in 15-25%, treated with acetazolamide).",
      "Backache, radicular tightness, or epidural pressure sensation during blood injection.",
      "Accidental repeat dural puncture (<1%).",
      "Extremely rare spinal cord compression if excessive blood volume is injected in a tight thoracic canal."
    ],
    "specificRisksHi": [
      "सुराख बंद होने के बाद सिर में मस्तिष्क का दबाव सामान्य होने पर कुछ दिनों तक आंखों के आगे हल्का भारीपन (रिबाउंड हाइपरटेंशन - 15-25%, जो दवा से ठीक हो जाता है)।",
      "खून डालते समय कमर या पीठ में हल्का खिंचाव व दबाव।",
      "झिल्ली में दोबारा सुई लगने का दुर्लभ जोखिम (<1%)।",
      "नस पर अधिक दबाव का अत्यंत दुर्लभ खतरा (सीटी स्कैन से पूर्ण नियंत्रण)।"
    ],
    "alternativesEn": "Prolonged flat bed rest with heavy oral hydration and high-dose caffeine, non-targeted blind lumbar epidural blood patch, or open neurosurgical dural clipping/repair.",
    "alternativesHi": "हफ्तों तक सीधे लेटे रहना व कॉफी/कैफीन पीना, साधारण कमर का ब्लड पैच, अथवा रीढ़ का खुला ऑपरेशन करके सुराख को सिलना।",
    "sedationTypeEn": "Local anesthesia with optional conscious sedation.",
    "sedationTypeHi": "स्थानीय सुन्नता (Local Anesthesia) और आवश्यकतानुसार हल्की शामक दवा।"
  },
  "trigeminal-glycerol-rhizotomy": {
    "id": "trigeminal-glycerol-rhizotomy",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "CT-Guided Percutaneous Trigeminal Ganglion (Gasserian) Glycerol Rhizotomy",
    "nameHi": "सीटी-गाइडेड ट्राइजैमिनल ग्लिसरॉल राइजोटॉमी (चेहरे के असहनीय करंट जैसे दर्द हेतु ग्लिसरॉल द्वारा नस का रासायनिक विच्छेदन)",
    "indicationEn": "Intractable trigeminal neuralgia (tic douloureux, V1, V2, or V3 distribution) refractory to high-dose medical therapy (carbamazepine, oxcarbazepine) or in patients medically unfit for microvascular decompression (MVD) surgery, particularly in patients wishing to preserve facial touch sensation.",
    "indicationHi": "ट्राइजैमिनल न्यूरेल्जिया (चेहरे पर बिजली के झटके और करंट जैसा असहनीय दर्द), जो दवाइयों (कार्बामाजेपाइन) से ठीक न हो रहा हो, अथवा मरीज ब्रेन सर्जरी (MVD) कराने में असमर्थ हो और चेहरे का स्पर्श सुरक्षित रखना चाहता हो।",
    "descriptionEn": "Under CT or biplane fluoroscopy with Hartel's anterior approach, a 20-22G spinal needle is guided through the cheek into the foramen ovale into Meckel's cave (trigeminal cistern). CSF flow confirms cistern entry. Cisternography with non-ionic contrast verifies the shape and volume of the trigeminal cistern. With the patient seated upright, sterile anhydrous glycerol (0.2-0.4 mL) is slowly instilled into the cistern. The hypertonic glycerol selectively lyses unmyelinated and small myelinated pain fibers over 1-2 hours while largely sparing large myelinated touch fibers.",
    "descriptionHi": "सीटी स्कैन की 3D निगरानी में गाल के रास्ते से एक बारीक सुई को खोपड़ी के अंदर फोरमैन ओवेल के रास्ते ट्राइजैमिनल नस के कक्ष (Meckel's Cave) में पहुंचाया जाता है। मस्तिष्क के पानी (CSF) और डाई से सही स्थान की पुष्टि की जाती है। मरीज को बैठाकर शुद्ध मेडिकल ग्लिसरॉल की कुछ बूंदें छोड़ी जाती हैं। यह दवा केवल दर्द ले जाने वाले तंतुओं को शांत करती है जबकि चेहरे के सामान्य छूने के अहसास को बचाए रखती है।",
    "benefitsEn": [
      "Profound and rapid relief (>85-90%) of excruciating electric-shock facial pain.",
      "Significantly lower incidence of severe facial numbness, anesthesia dolorosa, or corneal numbness compared to thermal RF.",
      "Minimally invasive pinhole cheek approach without open craniotomy or brain retraction.",
      "Ideal treatment for multiple sclerosis-associated trigeminal neuralgia."
    ],
    "benefitsHi": [
      "चेहरे के बिजली के झटके जैसे असहनीय दर्द से 85 से 90% तुरंत व स्थायी मुक्ति।",
      "चेहरे का छूने का प्राकृतिक अहसास पूरी तरह सुरक्षित रहना और आंख की पुतली का सुन्न न होना।",
      "खोपड़ी खोलने की बड़ी ब्रेन सर्जरी (Craniotomy) से पूर्ण बचाव, केवल गाल पर सुई से सुरक्षित इलाज।",
      "मल्टीपल स्केलेरोसिस के मरीजों के लिए सबसे सुरक्षित व उत्तम विकल्प।"
    ],
    "specificRisksEn": [
      "Transient mild facial hypesthesia or numbness (usually mild and well-tolerated).",
      "Cheek hematoma, swelling, or minor masseter muscle weakness for 1-2 weeks.",
      "Transient herpes simplex labialis reactivation (lip cold sore, 10-20%, treated with acyclovir).",
      "Chemical meningitis (aseptic, self-limiting with steroids) or carotid artery puncture (<0.5%).",
      "Pain recurrence over 2-5 years (can be safely repeated)."
    ],
    "specificRisksHi": [
      "चेहरे पर कुछ समय के लिए हल्का सुन्नपन (जो आसानी से सहन हो जाता है)।",
      "गाल पर 1 से 2 सप्ताह तक हल्की सूजन या नील।",
      "होठों पर हल्की फुंसी (हर्पीस) निकलना (10-20% मरीजों में, जो मलहम से ठीक हो जाती है)।",
      "सिर में हल्की सूजन या रक्त नाड़ी में खरोंच का अत्यंत दुर्लभ खतरा (<0.5%)।",
      "कुछ वर्षों बाद दर्द के दोबारा उभरने पर इसे दोबारा सुरक्षित रूप से दोहराया जा सकता है।"
    ],
    "alternativesEn": "Microvascular decompression (MVD open brain surgery), percutaneous radiofrequency thermocoagulation, percutaneous balloon compression, Stereotactic Radiosurgery (Gamma Knife), or long-term high-dose carbamazepine.",
    "alternativesHi": "माइक्रोवैस्कुलर डिकम्प्रेशन (MVD - ब्रेन सर्जरी), रेडियोफ्रीक्वेंसी एब्लेशन, बैलून कम्प्रेशन, गामा नाइफ रेडिएशन, अथवा दवाइयां।",
    "sedationTypeEn": "Brief intravenous deep conscious sedation or general anesthesia during needle positioning, then awake for injection.",
    "sedationTypeHi": "सुई लगाते समय अल्पकालिक गहरी शामक दवा अथवा बेहोशी, फिर दवा डालते समय मरीज का होश में रहना।"
  },
  "trigeminal-balloon-compression": {
    "id": "trigeminal-balloon-compression",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "CT-Guided Percutaneous Trigeminal Balloon Compression",
    "nameHi": "सीटी-गाइडेड परक्यूटेनियस ट्राइजैमिनल बैलून कम्प्रेशन (गाल के रास्ते गुब्बारा फुलाकर चेहरे की दर्द नस को दबाना)",
    "indicationEn": "Intractable primary or secondary trigeminal neuralgia, particularly involving the ophthalmic (V1) or multi-division distribution, in patients with severe pain refractory to anticonvulsant pharmacotherapy or failed prior interventions.",
    "indicationHi": "चेहरे का असहनीय करंट जैसा दर्द (ट्राइजैमिनल न्यूरेल्जिया), विशेषकर आंख और माथे के हिस्से (V1) का दर्द, जो दवाइयों से ठीक न हुआ हो और जिसमें आंख की पुतली को सुन्न किए बिना सुरक्षित इलाज चाहिए हो।",
    "descriptionEn": "Under general anesthesia with biplane fluoroscopy or CT guidance, a 14G cannula is introduced through the cheek into the foramen ovale into Meckel's cave. A Fogarty No. 4 balloon catheter is threaded into the cave. The balloon is slowly inflated with 0.7-1.0 mL of radiopaque contrast until a classic \"pear shape\" is fluoroscopically verified (the narrow waist constrained by the porus trigemini). Balloon inflation is maintained for 60 to 90 seconds to mechanically crush the intermediate- and small-diameter pain-transmitting sensory axons while sparing motor fibers.",
    "descriptionHi": "मरीज को पूरी तरह बेहोश करके गाल के रास्ते एक पतली नली खोपड़ी के अंदर ट्राइजैमिनल नस के पास पहुंचाई जाती है। वहां एक विशेष सूक्ष्म मेडिकल गुब्बारा (Balloon) डालकर 60 से 90 सेकंड के लिए फुलाया जाता है। गुब्बारा फूलकर नाशपाती जैसा आकार लेता है और दर्द ले जाने वाले तंतुओं को दबाकर निष्प्रभावी कर देता है, जिससे चेहरे का दर्द तुरंत बंद हो जाता है।",
    "benefitsEn": [
      "Immediate, dramatic pain relief exceeding 90% on awakening from anesthesia.",
      "Lowest risk of corneal anesthesia among destructive percutaneous procedures, making it the technique of choice for V1 (ophthalmic) trigeminal pain.",
      "Completely non-cooperative procedure performed under general anesthesia (painless during execution).",
      "Avoids open surgical craniotomy."
    ],
    "benefitsHi": [
      "बेहोशी से उठते ही चेहरे के भयंकर दर्द से 90% से अधिक तुरंत व जादुई राहत।",
      "आंख की पुतली का स्पर्श सुरक्षित रहने के कारण आंख व माथे के दर्द के लिए सबसे सुरक्षित व सर्वोत्तम तकनीक।",
      "पूरी बेहोशी में होने के कारण प्रक्रिया के दौरान मरीज को कोई दर्द या घबराहट नहीं होती।",
      "खोपड़ी खोलने वाले बड़े ऑपरेशन से पूर्ण बचाव।"
    ],
    "specificRisksEn": [
      "Masticatory (masseter/pterygoid) muscle weakness on the treated side (common, resolves spontaneously over 6-12 weeks).",
      "Facial numbness and dysesthesia (expected mechanism of sensory neurolysis).",
      "Severe intraoperative bradycardia or hypotension (trigeminocardiac reflex during balloon inflation, treated immediately with IV atropine).",
      "Transient cheek hematoma or swelling.",
      "Extremely rare trochlear or abducens cranial nerve palsy (<0.5%)."
    ],
    "specificRisksHi": [
      "उपचार वाले तरफ खाना चबाने वाली मांसपेशी में कुछ हफ्तों के लिए हल्का ढीलापन (जो 6-12 सप्ताह में स्वतः ठीक हो जाता है)।",
      "चेहरे पर कुछ समय के लिए सुन्नपन (जो दर्द खत्म करने का सामान्य हिस्सा है)।",
      "गुब्बारा फुलाते समय दिल की धड़कन का थोड़ा कम होना (जिसे डॉक्टर तुरंत दवा देकर नियंत्रित रखते हैं)।",
      "गाल पर हल्की सूजन या नील।",
      "आंख की पुतली की नस में खिंचाव का अत्यंत दुर्लभ खतरा (<0.5%)।"
    ],
    "alternativesEn": "Microvascular decompression (MVD), glycerol rhizotomy, radiofrequency thermocoagulation, Gamma Knife radiosurgery, or oral medical therapy.",
    "alternativesHi": "ब्रेन सर्जरी (MVD), ग्लिसरॉल राइजोटॉमी, रेडियोफ्रीक्वेंसी एब्लेशन, गामा नाइफ रेडिएशन अथवा दवाइयां।",
    "sedationTypeEn": "General anesthesia with endotracheal intubation.",
    "sedationTypeHi": "पूर्ण बेहोशी (General Anesthesia) सांस की नली के साथ।"
  },
  "trigeminal-rf-thermocoagulation": {
    "id": "trigeminal-rf-thermocoagulation",
    "category": "Interventional Spine & Pain Management",
    "nameEn": "Percutaneous Radiofrequency Thermocoagulation of the Gasserian Ganglion",
    "nameHi": "परक्यूटेनियस रेडियोफ्रीक्वेंसी थर्मोकोएगुलेशन (ट्राइजैमिनल गैंग्लियन - चेहरे के असहनीय दर्द हेतु रेडियोफ्रीक्वेंसी ताप विच्छेदन)",
    "indicationEn": "Intractable classical trigeminal neuralgia strictly localized to the maxillary (V2) or mandibular (V3) divisions refractory to medical therapy or prior blocks, seeking highly selective dermatomal pain control.",
    "indicationHi": "चेहरे के गाल, जबड़े या होंठ का भयंकर बिजली के झटके जैसा दर्द (ट्राइजैमिनल न्यूरेल्जिया - V2/V3), जो दवाइयों से ठीक न हो रहा हो, और जिसमें केवल दर्द वाले हिस्से का सटीक इलाज चाहिए हो।",
    "descriptionEn": "Under fluoroscopic or CT guidance using Hartel's technique, an insulated radiofrequency cannula with a 2-5 mm curved active tip is guided through the cheek into the foramen ovale into the Gasserian ganglion cistern. Under light sedation, electrophysiological sensory stimulation (50 Hz, 0.1-0.3V) is delivered to recreate tingling precisely in the patient's trigger zone (e.g., upper lip, lower jaw) without touching the ophthalmic division. Once concordant localization is established, brief general anesthesia or IV propofol bolus is administered while a controlled thermal lesion (65-75°C for 60-90 seconds) is applied to selectively coagulate the pain-transmitting A-delta and C fibers.",
    "descriptionHi": "एक्स-रे या सीटी स्कैन की 3D निगरानी में गाल के रास्ते से एक विशेष सुई को खोपड़ी के अंदर ट्राइजैमिनल नस के केंद्र (Gasserian Ganglion) में ले जाया जाता है। हल्की बिजली देकर मरीज से पूछा जाता है कि क्या झनझनाहट ठीक उसी जगह हो रही है जहां दर्द होता था (जैसे ऊपरी होंठ या जबड़ा)। पुष्टि होते ही मरीज को हल्का बेहोश करके 65 से 75 डिग्री तापमान देकर केवल उस दर्द वाली नस को निष्क्रिय कर दिया जाता है।",
    "benefitsEn": [
      "Highest immediate pain relief rate (>95%) of all percutaneous trigeminal interventions.",
      "Millimeter-level division-selective precision targeting only the affected branch (e.g., V2 or V3) while sparing uninvolved facial divisions.",
      "Immediate cure of facial pain on waking from the procedure table.",
      "Avoids open surgical craniotomy and microvascular decompression."
    ],
    "benefitsHi": [
      "95% से अधिक मरीजों में चेहरे के भयंकर दर्द से तुरंत पूर्ण मुक्ति (सबसे तेज व अचूक इलाज)।",
      "केवल उसी नस का सटीक इलाज जहां दर्द है (जैसे केवल जबड़ा या गाल), बाकी चेहरे को पूरी तरह सुरक्षित रखना।",
      "प्रक्रिया की मेज से उठते ही वर्षों पुराने असहनीय दर्द का हमेशा के लिए गायब हो जाना।",
      "खोपड़ी खोलने के बड़े ऑपरेशन (MVD Brain Surgery) से पूर्ण बचाव।"
    ],
    "specificRisksEn": [
      "Facial sensory numbness in the target division (necessary trade-off to eliminate agonizing neuralgia).",
      "Risk of corneal numbness / keratitis if lesion unintentionally spreads to the V1 ophthalmic fibers (prevented by strict physiological stimulation testing).",
      "Masseter muscle weakness or chewing fatigue for several weeks.",
      "Extremely rare dysesthesia / anesthesia dolorosa (<1-2%).",
      "Pain recurrence in 15-25% over 3-5 years (readily repeatable)."
    ],
    "specificRisksHi": [
      "चेहरे के संबंधित हिस्से में सुन्नपन होना (जो दर्द को रोकने के लिए जरूरी है)।",
      "आंख की पुतली में सुन्नपन आने का दुर्लभ जोखिम (जिसे सटीक टेस्टिंग द्वारा पूरी तरह रोका जाता है)।",
      "खाना चबाने में कुछ हफ्तों के लिए हल्का ढीलापन।",
      "चेहरे पर असहज झनझनाहट का बहुत दुर्लभ खतरा (<1-2%)।",
      "कुछ वर्षों बाद दर्द दोबारा आने पर इसे आसानी से दोबारा सुरक्षित रूप से दोहराया जा सकता है।"
    ],
    "alternativesEn": "Microvascular decompression (MVD), trigeminal balloon compression, glycerol rhizotomy, Gamma Knife stereotactic radiosurgery, or oral medical therapy.",
    "alternativesHi": "ब्रेन सर्जरी (MVD), ट्राइजैमिनल बैलून कम्प्रेशन, ग्लिसरॉल राइजोटॉमी, गामा नाइफ रेडिएशन, अथवा दवाइयां।",
    "sedationTypeEn": "Monitored conscious sedation with brief deep intravenous bolus during thermal lesioning.",
    "sedationTypeHi": "जांच के समय सचेत शामक दवा (Conscious Sedation), तथा थर्मल सिकाई के समय अल्पकालिक बेहोशी का इंजेक्शन।"
  }
};
