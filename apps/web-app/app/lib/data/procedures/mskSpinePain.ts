import { ProcedureBlueprint } from '../../types/clinical';

/**
 * Musculoskeletal (MSK) Interventions, Embolization, Sports Medicine,
 * Interventional Spine & Pain Management Procedures Library
 * 
 * SMS Medical College & Attached Hospitals, Jaipur
 * Categories 14 and 15 (73 Procedures Total)
 * Aligned with CIRSE, SIR, ASRA, and Rajasthan Health Schemes (MAAY / RGHS).
 */

export const MSK_SPINE_PAIN_PROCEDURES: ProcedureBlueprint[] = [
  {
    "id": "gae-knee-osteoarthritis",
    "name": "Transcatheter Arterial Microembolization (TAME) / Genicular Artery Embolization (GAE) for Knee OA",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-TAME-001",
    "rghsCode": "741 / 14",
    "icd10": "M17.1 (Primary Unilateral Knee Osteoarthritis)",
    "indications": [
      "Moderate to severe symptomatic knee osteoarthritis (Kellgren-Lawrence Grade 2-4) unresponsive to conservative therapy > 6 months",
      "Intractable knee pain in patients ineligible for or wishing to defer total knee arthroplasty (TKA)",
      "Persistent post-arthroplasty genicular synovial hyperemia or recurrent hemarthrosis",
      "Failure of intra-articular steroid or hyaluronic acid viscosupplementation injections"
    ],
    "preOpCriteria": [
      "Weight-bearing knee radiograph (AP, lateral, skyline) and/or MRI knee demonstrating synovitis/hypervascularity",
      "Baseline WOMAC (Western Ontario and McMaster Universities Osteoarthritis Index) and KOOS scores documented",
      "Normal peripheral distal pulses (Dorsalis pedis and Posterior tibial 2+) and ABI >= 0.9",
      "Coagulation profile: INR <= 1.4, Platelets >= 50,000/uL, Serum Creatinine <= 1.5 mg/dL"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "4F / 5F Radifocus Introducer Sheath",
        "spec": "10-11 cm length, 0.035\" valve with dilatator",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "4F / 5F Kumpe Access / Royal Flush Catheter",
        "spec": "65-100 cm length, hydrophilic torque shaft",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.7F - 2.0F Ultra-microcatheter (Asahi Caravel / Merit Maestro)",
        "spec": "130-150 cm, 0.0165\" - 0.021\" inner lumen",
        "standardStore": "DDC-14 Central Store"
      },
      {
        "category": "Microguidewire",
        "name": "0.014\" Hydrophilic Steerable Microguidewire (Transcend / Fielder)",
        "spec": "200 cm length, angled tip",
        "standardStore": "DDC-14 Central Store"
      },
      {
        "category": "Embolic Material",
        "name": "Imipenem/Cilastatin (IPM/CS) or Embozene 75-100 um microspheres",
        "spec": "0.5 g vial reconstituted with contrast or calibrated 100 um spheres",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Vasodilator / Spasmolytic",
        "name": "Inj Nitroglycerin / Papaverine",
        "spec": "100-200 mcg intra-arterial bolus to prevent vasospasm",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided ipsilateral antegrade or contralateral crossover common femoral artery access with placement of 4F/5F sheath under 2% lignocaine local anesthesia.",
      "Diagnostic popliteal and distal superficial femoral digital subtraction arteriography (DSA) to identify pathological genicular hypervascular synovial blush (\"tumor-like blush\").",
      "Subselective cannulation of culprit genicular arteries (superior medial, superior lateral, inferior medial, inferior lateral, or descending genicular artery) using a 1.7F-2.0F microcatheter.",
      "Roadmap confirmation of target blush and strict exclusion of distal cutaneous branches to avoid non-target skin necrosis.",
      "Slow, pulsatile infusion of calibrated embolic suspension (Imipenem/Cilastatin suspension 0.5g in 5 mL contrast + 5 mL saline, or 75-100 um microspheres) until hyperemia blush resolves while preserving trunk flow.",
      "Completion angiography verifying complete devascularization of the synovial hyperemic blush with patency of the popliteal trunk and trifurcation runoff.",
      "Sheath removal with manual compression or 4F/5F vascular closure device application."
    ],
    "complications": [
      "Transient cutaneous erythema or mild blanching over the knee (self-limiting, 10-20%)",
      "Mild post-embolization pain or low-grade pyrexia (manageable with oral NSAIDs)",
      "Groin hematoma or pseudoaneurysm at femoral puncture site",
      "Rare non-target cutaneous necrosis or distal pedal thromboembolism (<1%)",
      "Transient sensory paresthesias in the saphenous nerve distribution"
    ],
    "maayTariffInr": 42500,
    "vendorContacts": [
      "Terumo India Interventional (+91 98291 55678)",
      "Merit Medical India (+91 98292 44321)",
      "Boston Scientific Interventional (+91 98293 66554)"
    ]
  },
  {
    "id": "tame-frozen-shoulder",
    "name": "Transcatheter Embolization for Refractory Frozen Shoulder / Adhesive Capsulitis",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-TAME-002",
    "rghsCode": "741 / 14",
    "icd10": "M75.0 (Adhesive Capsulitis of Shoulder)",
    "indications": [
      "Chronic adhesive capsulitis of shoulder (Stage 1-2 freezing/frozen phase, duration > 3-6 months) refractory to conservative physical therapy and oral analgesics",
      "Persistent night-time pain, severe sleep disturbances, and limitation of active/passive glenohumeral motion",
      "Failure of intra-articular steroid injection and suprascapular nerve blocks",
      "Severe capsular hypervascularity demonstrated on shoulder power Doppler or MRI"
    ],
    "preOpCriteria": [
      "Shoulder MRI or high-frequency ultrasound confirming joint capsule thickening (>4 mm in axillary recess) and rotator interval hypervascularity",
      "Documented baseline shoulder range of motion (ROM: abduction, forward flexion, external rotation) and ASES score",
      "Normal coagulation profile: INR <= 1.4, Platelets >= 60,000/uL",
      "Absence of full-thickness rotator cuff tears or glenohumeral septic arthritis"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "4F / 5F Radial / Femoral Access Sheath",
        "spec": "11 cm length, hydrophilic coated",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "4F / 5F Berenstein / C1 Catheter",
        "spec": "100 cm length, torque response shaft",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.7F - 2.0F Ultra-flexible Microcatheter",
        "spec": "130-150 cm length with 0.014\" steerable wire",
        "standardStore": "DDC-14 Central Store"
      },
      {
        "category": "Embolic Agent",
        "name": "Imipenem/Cilastatin (IPM/CS) micro-slurry or 100 um Embozene",
        "spec": "0.5 g vial mixed with non-ionic iodinated contrast",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Spasmolytic Solution",
        "name": "Intra-arterial Verapamil / Nitroglycerin",
        "spec": "2.5 mg Verapamil / 200 mcg NTG ampoules",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Ipsilateral radial artery or retrograde right common femoral artery cannulation under ultrasound guidance and local anesthesia.",
      "Selective subclavian and axillary digital subtraction arteriography to evaluate shoulder arterial anatomy (anterior and posterior circumflex humeral arteries, thoracoacromial artery, and suprascapular artery).",
      "Identification of abnormal capsular neovascular blush at the rotator interval, coracohumeral ligament, and inferior axillary pouch.",
      "Superselective catheterization of feeding branches (anterior circumflex humeral artery - anteromedial branch; posterior circumflex humeral; or pectoral branches of thoracoacromial artery) using a 1.7F microcatheter.",
      "Administration of 100-200 mcg intra-arterial nitroglycerin to relieve catheter-induced vasospasm.",
      "Slow, incremental delivery of Imipenem/Cilastatin microparticle suspension under fluoroscopic monitoring until abnormal capsular capillary staining disappears.",
      "Completion angiogram confirming resolution of hypervascular blush with intact main branch perfusion.",
      "Hemostasis with radial compression band or femoral manual compression."
    ],
    "complications": [
      "Transient skin erythema or cutaneous warmth over the anterior deltoid (15-25%)",
      "Mild post-procedure shoulder soreness lasting 24-48 hours",
      "Access site hematoma or radial artery spasm",
      "Non-target embolization causing transient triceps/deltoid muscle tenderness",
      "Infection or neurovascular injury (rare, <0.5%)"
    ],
    "maayTariffInr": 39800,
    "vendorContacts": [
      "Terumo India Interventional (+91 98291 55678)",
      "Merit Medical India (+91 98292 44321)",
      "Cook Medical India (+91 98294 33211)"
    ]
  },
  {
    "id": "tame-lateral-epicondylitis",
    "name": "Transcatheter Arterial Microembolization for Lateral Epicondylitis (Tennis Elbow)",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-TAME-003",
    "rghsCode": "741 / 14",
    "icd10": "M77.1 (Lateral Epicondylitis)",
    "indications": [
      "Refractory chronic lateral epicondylitis (> 6 months) failing conservative bracing, eccentrics, physiotherapy, and injections",
      "Severe pain at common extensor origin aggravated by resisted wrist extension and gripping",
      "Neovascularization demonstrated on power Doppler at the extensor carpi radialis brevis (ECRB) origin",
      "Patient desires minimally invasive transcatheter option to avoid open or arthroscopic surgical debridement"
    ],
    "preOpCriteria": [
      "High-resolution MSK ultrasound or MRI elbow demonstrating tendinosis and neovascularity at ECRB tendon origin",
      "Baseline Patient-Rated Tennis Elbow Evaluation (PRTEE) and Visual Analog Scale (VAS) pain score",
      "Palpable radial and ulnar pulses with normal Allen test",
      "Coagulation panel within normal surgical parameters (INR <= 1.4)"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "4F Radial Access Sheath Kit",
        "spec": "7-11 cm length with 21G echogenic needle",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "4F Berenstein / Multi-purpose (MP) Catheter",
        "spec": "100 cm length, 0.035\" lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.7F Ultra-microcatheter",
        "spec": "130 cm length with 0.014\" steerable wire",
        "standardStore": "DDC-14 Central Store"
      },
      {
        "category": "Embolic Agent",
        "name": "Imipenem/Cilastatin micro-slurry",
        "spec": "0.25-0.5 g reconstituted in iodinated contrast",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Radial Band",
        "name": "Pneumatic Radial Compression Hemostasis Band",
        "spec": "Adjustable air syringe compression cuff",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided ipsilateral distal radial (snuffbox) or proximal radial artery puncture with 4F hydrophilic sheath insertion.",
      "Selective brachial and radial recurrent arteriography to map the vascular arcade supplying the lateral epicondyle and common extensor origin.",
      "Superselective cannulation of the radial recurrent artery or radial collateral branches using a 1.7F microcatheter.",
      "Magnified roadmapping to identify the characteristic neovascular hypervascular blush over the lateral epicondyle.",
      "Careful exclusion of intramuscular and cutaneous branches supplying the forearm extensor bellies.",
      "Slow titration of Imipenem/Cilastatin slurry until the pathological hypervascular blush is completely eliminated.",
      "Follow-up run verifying preservation of trunk flow in the radial recurrent and interosseous recurrent vessels.",
      "Sheath removal and pneumatic radial band hemostasis."
    ],
    "complications": [
      "Transient mild skin discoloration or dusky erythema over the lateral elbow (self-limiting, 10-15%)",
      "Temporary forearm aching or post-procedure pain flare for 24-48 hours",
      "Radial artery spasm or minor access site hematoma",
      "Non-target muscle ischemia (<1%)"
    ],
    "maayTariffInr": 34500,
    "vendorContacts": [
      "Terumo India (+91 98291 55678)",
      "Merit Medical India (+91 98292 44321)"
    ]
  },
  {
    "id": "tame-plantar-fasciitis",
    "name": "Transcatheter Arterial Microembolization for Plantar Fasciitis",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-TAME-004",
    "rghsCode": "741 / 14",
    "icd10": "M72.2 (Plantar Fascial Fibromatosis / Plantar Fasciitis)",
    "indications": [
      "Severe chronic plantar fasciitis (> 6 months) failing orthotic heel cups, physical therapy, night splints, and corticosteroid/PRP injections",
      "Disabling first-step morning heel pain and weight-bearing agony at the medial calcaneal tuberosity",
      "Power Doppler ultrasound confirming marked hypervascularity and plantar fascia thickening (> 4.5 mm)",
      "Inability to walk or perform daily weight-bearing activities without analgesics"
    ],
    "preOpCriteria": [
      "Ultrasound or MRI of the ankle/foot confirming proximal plantar fascia thickening, intrasubstance tear, or calcaneal spur hyperemia",
      "Baseline American Orthopaedic Foot and Ankle Society (AOFAS) score and VAS pain score recorded",
      "Palpable dorsalis pedis and posterior tibial arterial pulses",
      "Coagulation profile: INR <= 1.4, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "4F Antegrade Femoral / Popliteal Introducer Sheath",
        "spec": "11 cm length, 0.035\" valve",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "4F Kumpe / Royal Flush Catheter",
        "spec": "65-100 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.7F - 2.0F Microcatheter with 0.014\" Wire",
        "spec": "130-150 cm length",
        "standardStore": "DDC-14 Central Store"
      },
      {
        "category": "Embolic Agent",
        "name": "Imipenem/Cilastatin (IPM/CS) or 75-100 um Embozene",
        "spec": "Reconstituted 0.5 g with 5 mL non-ionic contrast",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Vasodilator",
        "name": "Intra-arterial Nitroglycerin 100-200 mcg",
        "spec": "1 mg/mL ampoule",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided antegrade ipsilateral common femoral artery or popliteal access with placement of 4F vascular sheath.",
      "Selective posterior tibial artery angiogram under digital subtraction imaging with the foot profiled to visualize the calcaneal branches.",
      "Superselective catheterization of the medial plantar artery or lateral plantar artery branches supplying the calcaneal attachment of the plantar fascia.",
      "Verification of characteristic neovascular blush at the anteromedial calcaneal tuberosity.",
      "Slow, selective infusion of Imipenem/Cilastatin suspension under roadmapping until the abnormal inflammatory blush clears.",
      "Control angiogram documenting preservation of main plantar arch and digital plantar arteries.",
      "Hemostasis at access site with manual pressure or 4F closure device."
    ],
    "complications": [
      "Transient plantar cutaneous erythema or mild heel numbness (self-limiting, 10%)",
      "Mild post-embolization heel aching for 2-3 days",
      "Puncture site hematoma or pseudoaneurysm",
      "Extremely rare plantar fat pad necrosis or distal toe non-target embolization (<0.5%)"
    ],
    "maayTariffInr": 36000,
    "vendorContacts": [
      "Terumo India (+91 98291 55678)",
      "Merit Medical (+91 98292 44321)",
      "Boston Scientific (+91 98293 66554)"
    ]
  },
  {
    "id": "tame-achilles-tendinopathy",
    "name": "Transcatheter Arterial Microembolization for Chronic Achilles Tendinopathy",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-TAME-005",
    "rghsCode": "741 / 14",
    "icd10": "M76.6 (Achilles Tendinitis / Tendinopathy)",
    "indications": [
      "Midportion or insertional Achilles tendinopathy with pain > 6 months refractory to eccentric training and physiotherapy",
      "Intense neovascularization on power Doppler along the ventral paratenon and mid-tendon body",
      "Tendinopathy failing dry needling, PRP, or extracorporeal shockwave therapy (ESWT)",
      "Athletes and active patients seeking minimally invasive intervention without open surgical debridement"
    ],
    "preOpCriteria": [
      "High-resolution MSK ultrasound showing tendon fusiform thickening (> 6 mm), hypoechoic collagen disruption, and prominent neovascular flow",
      "Baseline VISA-A (Victorian Institute of Sport Assessment - Achilles) score documented",
      "Adequate distal posterior tibial and peroneal arterial runoff on clinical examination",
      "INR <= 1.4, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "4F Antegrade Femoral Sheath",
        "spec": "11 cm length, 0.035\" valve",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "4F Kumpe Catheter",
        "spec": "65-100 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.7F - 2.0F Ultra-microcatheter",
        "spec": "130 cm length with 0.014\" wire",
        "standardStore": "DDC-14 Central Store"
      },
      {
        "category": "Embolic Agent",
        "name": "Imipenem/Cilastatin micro-slurry",
        "spec": "0.25-0.5 g reconstituted with iodinated contrast",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Spasmolytic",
        "name": "Intra-arterial Nitroglycerin 100 mcg",
        "spec": "Pre-mixed dilution",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided antegrade puncture of the ipsilateral common femoral artery with 4F sheath placement.",
      "Selective posterior tibial and peroneal digital subtraction angiography in lateral ankle projection.",
      "Identification of abnormal paratendinous hypervascular branches originating from the posterior tibial or peroneal arteries.",
      "Superselective cannulation of feeding paratenon branches using a 1.7F microcatheter.",
      "Slow microcatheter injection of Imipenem/Cilastatin suspension until the neovascular blush over the Achilles tendon is extinguished.",
      "Preservation of calcaneal nutrient branches and pedal digital vessels confirmed on completion angiography.",
      "Access sheath removal with manual compression."
    ],
    "complications": [
      "Transient posterior heel skin flushing or warmth (10%)",
      "Mild post-procedural soreness for 24-48 hours",
      "Access site hematoma",
      "Rare tendon rupture if forced early high-impact loading occurs (<0.5%)"
    ],
    "maayTariffInr": 36000,
    "vendorContacts": [
      "Terumo India (+91 98291 55678)",
      "Merit Medical (+91 98292 44321)"
    ]
  },
  {
    "id": "tame-patellar-tendinopathy",
    "name": "Transcatheter Arterial Microembolization for Patellar Tendinopathy (Jumper's Knee)",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-TAME-006",
    "rghsCode": "741 / 14",
    "icd10": "M76.5 (Patellar Tendinitis / Tendinopathy)",
    "indications": [
      "Refractory jumper's knee with chronic proximal patellar tendon pain > 6 months in competitive or recreational athletes",
      "Severe focal tenderness at the inferior pole of the patella failing eccentric decline squats and shockwave therapy",
      "Extensive power Doppler neovascularity at the deep infrapatellar tendon interface",
      "Patient wishing to avoid open tendon tenotomy / debridement"
    ],
    "preOpCriteria": [
      "Ultrasound or MRI showing proximal patellar tendon thickening, intrasubstance signal alteration, and Hoffa fat pad edema",
      "Baseline VISA-P score and functional jumping assessment",
      "Coagulation parameters: INR <= 1.4, Platelets >= 50,000/uL",
      "Intact patellar tendon continuity without full-thickness avulsion"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "4F / 5F Antegrade Femoral Sheath",
        "spec": "11 cm length, 0.035\" valve",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "4F Kumpe / Multipurpose Catheter",
        "spec": "65-100 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.7F - 2.0F Microcatheter with 0.014\" Wire",
        "spec": "130 cm length",
        "standardStore": "DDC-14 Central Store"
      },
      {
        "category": "Embolic Agent",
        "name": "Imipenem/Cilastatin micro-slurry or Embozene 75-100 um",
        "spec": "0.25-0.5 g vial mixed with contrast",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Spasmolytic",
        "name": "Intra-arterial Nitroglycerin 100 mcg",
        "spec": "Bolus dilution",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Antegrade common femoral artery puncture with 4F sheath placement under ultrasound guidance and local anesthesia.",
      "Popliteal and distal superficial femoral digital subtraction arteriography to profile the genicular arcade.",
      "Superselective cannulation of the inferior medial genicular artery or descending genicular artery branches supplying the proximal patellar tendon and infrapatellar fat pad.",
      "Careful confirmation of the hypervascular blush at the inferior patellar pole without filling cutaneous anterior skin branches.",
      "Slow titration of Imipenem/Cilastatin suspension under roadmapping until the neovascular blush is eliminated.",
      "Verification of preserved main genicular trunks and normal distal runoff.",
      "Sheath removal and manual hemostasis."
    ],
    "complications": [
      "Transient skin erythema over the anterior tibial tuberosity / inferior patella (10-15%)",
      "Temporary post-procedure knee tightness for 48 hours",
      "Puncture site bruise / hematoma",
      "Rare skin necrosis if cutaneous vessels inadvertently embolized (<0.5%)"
    ],
    "maayTariffInr": 37500,
    "vendorContacts": [
      "Terumo India (+91 98291 55678)",
      "Merit Medical (+91 98292 44321)"
    ]
  },
  {
    "id": "usg-barbotage-shoulder-supraspinatus",
    "name": "Ultrasound-Guided Barbotage / Lavage of Calcific Tendinitis of the Shoulder (Supraspinatus)",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-USG-007",
    "rghsCode": "742 / 14",
    "icd10": "M75.3 (Calcific Tendinitis of Shoulder)",
    "indications": [
      "Symptomatic calcific tendinitis of the supraspinatus/infraspinatus tendon in the resorptive or formative phase causing severe acute or chronic shoulder pain",
      "Impingement symptoms and night pain failing conservative analgesics and physiotherapy",
      "Ultrasound-confirmed dense or soft calcium deposit >= 5 mm within the rotator cuff tendon"
    ],
    "preOpCriteria": [
      "Shoulder radiograph and high-frequency MSK ultrasound evaluating calcium morphology (Gartner Type I-III), size, and acoustic shadowing",
      "Absence of full-thickness rotator cuff tear and local skin infection",
      "Coagulation profile: INR <= 1.5, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Ultrasound Probe",
        "name": "High-Frequency Linear Transducer (12-18 MHz)",
        "spec": "Sterile probe cover and acoustic gel",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Puncture Needles",
        "name": "18G - 20G Spinal Needles (Dual Needle Barbotage)",
        "spec": "3.5 inch length, Quincke bevel",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Syringes & Solutions",
        "name": "10 mL Luer-Lock Syringes with Normal Saline & 2% Lignocaine",
        "spec": "Warm sterile saline for lavage",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Corticosteroid & Anesthetic",
        "name": "Triamcinolone Acetonide 40 mg + 0.5% Ropivacaine",
        "spec": "For subacromial bursa instillation",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient seated or supine with shoulder in modified Crass position (arm behind back, elbow flexed) to expose the supraspinatus tendon.",
      "High-frequency ultrasound localization of the calcific deposit in long- and short-axis planes.",
      "Aseptic preparation, drape, and extensive local anesthesia of the skin, subcutaneous tissues, and subacromial bursa using 1% lignocaine.",
      "Introduction of one or two 18G/20G needles into the calcific deposit under real-time in-plane ultrasound guidance.",
      "Repetitive barbotage: Pulsatile injection and aspiration of warm sterile saline through a 10 mL syringe, breaking up and dissolving the calcium chalk-like paste into the syringe.",
      "Continuation of lavage until the aspirated fluid becomes clear or the deposit is substantially collapsed on sonography.",
      "Subsequent deposition of 40 mg Triamcinolone and 2 mL 0.5% Ropivacaine into the overlying subacromial-subdeltoid bursa to prevent post-procedural chemical bursitis.",
      "Needle withdrawal, gentle pressure dressing, and post-procedure passive range of motion assessment."
    ],
    "complications": [
      "Post-barbotage pain flare / acute chemical bursitis (10-20%, treated with ice and NSAIDs)",
      "Transient vasovagal reaction during needle manipulation",
      "Partial tendon fiber disruption from needle punctures",
      "Infection / septic bursitis (very rare, <0.1%)",
      "Subcutaneous fat atrophy or skin hypopigmentation from steroid extravasation"
    ],
    "maayTariffInr": 12500,
    "vendorContacts": [
      "BD India Medical (+91 98290 33441)",
      "GE Healthcare Ultrasound (+91 98291 99882)"
    ]
  },
  {
    "id": "usg-barbotage-achilles",
    "name": "Ultrasound-Guided Calcific Tendinitis Barbotage of the Achilles Tendon",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-USG-008",
    "rghsCode": "742 / 14",
    "icd10": "M76.6 (Achilles Tendinitis with Calcification)",
    "indications": [
      "Painful insertional or midportion calcific Achilles tendinopathy with discrete intratendinous calcific plaque > 5 mm",
      "Localized heel pain and morning stiffness refractory to physical therapy and eccentric loading",
      "Impingement against shoe wear with sonographic evidence of intratendinous calcific deposit"
    ],
    "preOpCriteria": [
      "Sagittal and axial ultrasound demonstrating location of calcification within tendon fibers vs enthesophyte spur",
      "Absence of complete Achilles tendon rupture",
      "INR <= 1.4, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Ultrasound System",
        "name": "High-Frequency Linear Probe (10-18 MHz)",
        "spec": "Sterile sheath",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Puncture Needles",
        "name": "18G - 20G Needles",
        "spec": "1.5 - 2 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Lavage Solution",
        "name": "Warm 0.9% Sterile Normal Saline & 2% Lignocaine",
        "spec": "10 mL syringes",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Anti-inflammatory Injection",
        "name": "Platelet-Rich Plasma (PRP) or Traumeel / Saline",
        "spec": "Avoid intratendinous corticosteroid to prevent rupture",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient positioned prone with feet hanging freely over the examination couch in slight dorsiflexion.",
      "Sonographic localization of the calcific deposit in longitudinal and transverse planes.",
      "Peritendinous local anesthetic infiltration with 1% lignocaine (avoiding intratendinous depot).",
      "Under real-time in-plane ultrasound guidance, 18G/20G needle advanced into the core of the calcific nidus.",
      "Pulsatile saline lavage and fenestration to aspirate and pulverize the calcific material.",
      "Gentle lavage until substantial volume reduction is visible on live ultrasound.",
      "Peritendinous infiltration of physiological saline or PRP along the paratenon (corticosteroid strictly avoided within the tendon body).",
      "Needle withdrawal, sterile compression bandage, and 48-hour partial weight-bearing instructions with a heel lift."
    ],
    "complications": [
      "Post-procedure localized soreness and swelling for 3-5 days",
      "Achilles tendon rupture risk if forceful eccentric loading occurs prematurely (<1%)",
      "Infection or hematoma at puncture site",
      "Residual calcification requiring repeat session"
    ],
    "maayTariffInr": 13500,
    "vendorContacts": [
      "BD India Medical (+91 98290 33441)",
      "Sonosite Fujifilm (+91 98292 77665)"
    ]
  },
  {
    "id": "usg-tendon-fenestration-dry-needling",
    "name": "Ultrasound-Guided Percutaneous Tendon Fenestration / Dry Needling (Patellar / Common Extensor)",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-USG-009",
    "rghsCode": "742 / 14",
    "icd10": "M77.9 (Enthesopathy, Unspecified)",
    "indications": [
      "Chronic recalcitrant tendinosis of patellar tendon, common extensor tendon (elbow), or hamstring origin failing conservative rehabilitation > 6 months",
      "Sonographic evidence of degenerative collagen disorganization, mucoid degeneration, and focal hypoechoic tendinosis without full tear",
      "Induction of localized micro-bleeding and acute inflammatory cascade to promote tendon remodeling"
    ],
    "preOpCriteria": [
      "Detailed MSK ultrasound mapping area of tendinosis and confirming absence of high-grade partial tear (>50%) or full-thickness disruption",
      "Patient willing to comply with structured eccentric rehabilitation protocol post-procedure",
      "Coagulation parameters: INR <= 1.4, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Ultrasound Machine",
        "name": "High-Frequency Linear Probe (12-18 MHz)",
        "spec": "Musculoskeletal preset",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Fenestration Needle",
        "name": "20G - 22G Hypodermic Needles",
        "spec": "1.5 - 2.5 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Local Anesthesia",
        "name": "1% Lignocaine without Adrenaline",
        "spec": "5 mL ampoules",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient positioned comfortably with target tendon relaxed and immobilized.",
      "High-resolution sonographic identification of the hypoechoic, degenerated tendinopathic zone.",
      "Sterile preparation and superficial local anesthetic infiltration over skin and peritendinous soft tissue.",
      "Advancement of a 20G/22G needle under continuous longitudinal in-plane ultrasound guidance directly into the degenerative collagen zone.",
      "Performance of 20 to 30 rapid, controlled passes through the degenerated fibers (fenestration / tenotomy), creating localized micro-bleeding and disrupting scarred tendinopathic matrix.",
      "Visual sonographic confirmation of hyperemic speckling and mechanical disruption of the tight hypoechoic tissue.",
      "Needle withdrawal, firm pressure hemostasis for 3 minutes, and application of a sterile dressing.",
      "Instruction on 48-hour rest followed by eccentric loading rehabilitation program."
    ],
    "complications": [
      "Post-procedure inflammatory soreness lasting 3-7 days (expected therapeutic response)",
      "Subcutaneous bruising or mild hematoma",
      "Infection (extremely rare with aseptic technique, <0.05%)",
      "Tendon rupture if aggressive premature loading occurs"
    ],
    "maayTariffInr": 11500,
    "vendorContacts": [
      "BD India (+91 98290 33441)",
      "Mindray Medical India (+91 98293 88123)"
    ]
  },
  {
    "id": "usg-prp-tendinopathy",
    "name": "Ultrasound-Guided Platelet-Rich Plasma (PRP) Injection for Tendinopathy",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-PRP-010",
    "rghsCode": "743 / 14",
    "icd10": "M76.9 (Enthesopathy of Lower Limb / Tendinopathy)",
    "indications": [
      "Chronic recalcitrant tendinopathies (Patellar, Common Extensor/Tennis Elbow, Achilles, Gluteal, or Plantar Fascia) failing standard therapy",
      "Degenerative partial-thickness tendon tears with refractory pain",
      "Mild-to-moderate knee osteoarthritis in active young individuals seeking biological augmentation"
    ],
    "preOpCriteria": [
      "MSK ultrasound confirming focal tendon pathology, partial-thickness tear < 50%, and no full rupture",
      "Platelet count >= 150,000/uL for effective platelet concentration factor (>= 4-6x baseline)",
      "Discontinuation of oral NSAIDs and systemic steroids for at least 2 weeks prior to avoid platelet inhibition",
      "Absence of systemic infection, hematological malignancy, or severe anemia (Hb >= 10 g/dL)"
    ],
    "hardware": [
      {
        "category": "PRP Harvesting Kit",
        "name": "Closed-System PRP Centrifuge Preparation Kit",
        "spec": "20-60 mL dual-spin buffy coat extraction tube with ACD-A anticoagulant",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Centrifuge Machine",
        "name": "Calibrated Variable-Speed Medical Centrifuge",
        "spec": "Dedicated soft/hard spin program",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Injection Needle",
        "name": "21G - 22G Echogenic Needles",
        "spec": "1.5 - 2 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Ultrasound System",
        "name": "High-Frequency Linear Transducer (12-18 MHz)",
        "spec": "Sterile sheath",
        "standardStore": "SMS Interventional Pain Lab Store"
      }
    ],
    "techniqueSteps": [
      "Venipuncture: 20-40 mL autologous whole blood collected aseptically into ACD-A anticoagulated PRP collection tubes.",
      "Centrifugation: Standard dual-spin protocol (first soft spin to separate RBCs, followed by hard spin of plasma to concentrate platelets in buffy coat layer).",
      "Buffy coat extraction: 3-5 mL leukocyte-rich or leukocyte-poor PRP drawn into sterile syringe under laminar flow / sterile field.",
      "Patient positioning and high-frequency ultrasound localization of the pathological tendon defect / interstitial tear.",
      "Skin antisepsis and minimal local anesthesia of superficial subcutaneous layer only (avoiding direct anesthetic contact with tendon to prevent platelet activation inhibition).",
      "Under real-time ultrasound guidance, 21G/22G needle positioned into the interstitial tendon cleft or degenerated core.",
      "Precise fenestration combined with slow instillation of 2-4 mL autologous PRP directly into the pathological fibers.",
      "Needle removal, compression dressing, and observation for 15 minutes.",
      "Post-procedure guidance: strict avoidance of NSAIDs for 3-4 weeks (paracetamol allowed for pain); rest for 48 hours followed by structured rehab."
    ],
    "complications": [
      "Acute localized pain flare for 48-72 hours due to release of platelet cytokines and local inflammation",
      "Puncture site bruising or mild swelling",
      "Infection (rare, prevented by closed preparation system)",
      "Lack of expected therapeutic response (15-20%)"
    ],
    "maayTariffInr": 18500,
    "vendorContacts": [
      "Regen Lab India (+91 98294 11223)",
      "Arthrex India (+91 98295 66778)",
      "BD Medical (+91 98290 33441)"
    ]
  },
  {
    "id": "autologous-blood-injection-epicondylitis",
    "name": "Autologous Blood Injection for Chronic Epicondylitis",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-ABI-011",
    "rghsCode": "743 / 14",
    "icd10": "M77.1 (Lateral Epicondylitis)",
    "indications": [
      "Chronic recalcitrant lateral or medial epicondylitis failing standard conservative care > 6 months",
      "Tendinosis with intrasubstance clefts or micro-tears demonstrated on MSK ultrasound",
      "Cost-effective alternative to PRP for biological tendon healing"
    ],
    "preOpCriteria": [
      "Ultrasound confirmation of common extensor tendon hypoechogenicity and neovascularity",
      "Normal baseline platelet count and hemoglobin",
      "Discontinuation of NSAIDs for 1 week prior",
      "No active skin infection over cubital fossa or lateral elbow"
    ],
    "hardware": [
      {
        "category": "Venipuncture Kit",
        "name": "18G Venipuncture Needle & 5 mL Syringe",
        "spec": "Aseptic blood collection set",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injection Needle",
        "name": "21G - 22G Needle",
        "spec": "1.5 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Ultrasound System",
        "name": "High-Frequency Linear Probe (12-15 MHz)",
        "spec": "Sterile cover",
        "standardStore": "SMS Interventional Pain Lab Store"
      }
    ],
    "techniqueSteps": [
      "Patient seated with elbow flexed at 90 degrees and resting on examination table.",
      "High-frequency sonographic identification of the pathological hypoechoic defect at the common extensor origin.",
      "Superficial skin wheal with 1% lignocaine (avoiding tendon infiltration).",
      "Aseptic venipuncture of contralateral median cubital vein to draw 3-4 mL of non-anticoagulated fresh autologous whole blood.",
      "Immediate (within 60 seconds) ultrasound-guided puncture of the common extensor tendon with 21G needle.",
      "Dry needling / fenestration of the tendinopathic tissue followed by direct intratendinous injection of 2-3 mL autologous blood.",
      "Needle withdrawal, compression dressing, and immobilization in forearm splint for 48 hours."
    ],
    "complications": [
      "Post-injection pain flare and stiffness lasting 2-4 days",
      "Local bruising or hematoma",
      "Puncture site infection (<0.1%)",
      "Transient radial nerve sensory irritation"
    ],
    "maayTariffInr": 9500,
    "vendorContacts": [
      "BD India Medical (+91 98290 33441)",
      "Hindustan Syringes (DISPOVAN) (+91 98291 11223)"
    ]
  },
  {
    "id": "usg-suprascapular-nerve-hydrodissection-prf",
    "name": "Ultrasound-Guided Suprascapular Nerve Hydrodissection and Pulsed Radiofrequency",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-SSN-012",
    "rghsCode": "744 / 14",
    "icd10": "G56.8 (Other Mononeuropathies of Upper Limb) / M75.8",
    "indications": [
      "Chronic intractable shoulder pain from severe rotator cuff arthropathy, inoperable massive cuff tear, or glenohumeral osteoarthritis",
      "Suprascapular nerve entrapment neuropathy at the suprascapular notch or spinoglenoid notch (spinoglenoid cyst / paralabral cyst)",
      "Pain palliation in patients unfit for total shoulder replacement"
    ],
    "preOpCriteria": [
      "High-resolution ultrasound or MRI confirming nerve morphology, muscle atrophy of supraspinatus/infraspinatus, or compressing ganglion cyst",
      "Diagnostic suprascapular nerve block demonstrating >= 50% pain relief for at least 4 hours",
      "Coagulation: INR <= 1.5, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Ultrasound Probe",
        "name": "High-Frequency Linear Probe (10-15 MHz)",
        "spec": "Sterile sheath",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "PRF Cannula",
        "name": "20G - 22G RF Cannula with 5-10 mm Active Tip",
        "spec": "10 cm length, echogenic coated",
        "standardStore": "Central IR Store"
      },
      {
        "category": "RF Generator",
        "name": "Multi-Lesion Radiofrequency Generator",
        "spec": "Pulsed RF mode (42°C, 2 Hz, 20 ms pulses for 240-360 s)",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Injectate Solutions",
        "name": "5% Dextrose (D5W) / 0.5% Ropivacaine + Triamcinolone 20 mg",
        "spec": "For hydrodissection and long-acting analgesia",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient seated with neck flexed or prone with arm by side.",
      "Ultrasound transducer placed in transverse plane over the scapular spine, angled anteriorly to visualize the suprascapular notch, superior transverse scapular ligament, and suprascapular artery/nerve.",
      "Skin infiltration with 2% lignocaine.",
      "RF cannula advanced in-plane from medial to lateral into the suprascapular notch beneath the ligament.",
      "Sensory stimulation (50 Hz, <0.5 V) reproduces concordant shoulder pain; motor stimulation (2 Hz) confirms supraspinatus/infraspinatus muscle twitching without trapezius contraction.",
      "Hydrodissection with 5-8 mL D5W or dilute local anesthetic to free the nerve from fibrotic entrapment.",
      "Pulsed radiofrequency applied at 42°C for 2 cycles of 120 seconds (non-neurodestructive neuromodulation).",
      "Subsequent instillation of 2 mL 0.5% Ropivacaine and 20 mg Triamcinolone.",
      "Cannula removal, dressing, and immediate assessment of shoulder abduction strength and pain score."
    ],
    "complications": [
      "Transient mild motor weakness in external rotation or abduction",
      "Puncture site soreness for 24-48 hours",
      "Pneumothorax risk if needle trajectory angles too anteriorly/deeply (minimized by strict US guidance)",
      "Suprascapular artery puncture / hematoma (<1%)"
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Avanos Medical India (+91 98295 22119)",
      "Cosman / Boston Scientific (+91 98293 66554)",
      "Stryker Pain Management (+91 98290 88231)"
    ]
  },
  {
    "id": "usg-median-nerve-hydrodissection-cts",
    "name": "Ultrasound-Guided Median Nerve Hydrodissection for Carpal Tunnel Syndrome",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-CTS-013",
    "rghsCode": "744 / 14",
    "icd10": "G56.0 (Carpal Tunnel Syndrome)",
    "indications": [
      "Mild to moderate Carpal Tunnel Syndrome failing splinting, oral medications, and wrist rest",
      "Severe nocturnal paresthesias, numbness in thumb, index, and middle fingers, and positive Phalen/Tinel tests",
      "Recurrent CTS after previous carpal tunnel release with perineural scarring / adhesions",
      "Patients preferring non-surgical decompression"
    ],
    "preOpCriteria": [
      "Electrodiagnostic studies (EMG/NCS) showing delayed median nerve distal motor and sensory latencies",
      "High-resolution wrist ultrasound demonstrating cross-sectional area (CSA) of median nerve >= 10-12 mm² at carpal tunnel inlet, flattening ratio, and palmar bowing of flexor retinaculum",
      "Coagulation: INR <= 1.5, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Ultrasound Probe",
        "name": "High-Frequency Hockey-Stick / Linear Transducer (15-22 MHz)",
        "spec": "Ultra-high resolution nerve imaging",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Hydrodissection Needle",
        "name": "25G - 27G Echogenic Needle",
        "spec": "1.5 - 2 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Hydrodissection Fluid",
        "name": "5% Dextrose in Water (D5W) or 0.2% Ropivacaine + Dexamethasone 4 mg",
        "spec": "10 mL volume",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient seated or supine with hand supinated and wrist resting on a firm pad in slight dorsiflexion.",
      "High-frequency probe placed transversely at the distal wrist crease to identify the median nerve, flexor tendons, and transverse carpal ligament (TCL).",
      "Aseptic preparation and local subcutaneous anesthesia at ulnar or radial aspect of distal wrist.",
      "In-plane needle advancement under continuous live ultrasound visualization from ulnar to radial (or radial to ulnar), entering the carpal tunnel.",
      "Hydrodissection of the superficial plane: 3-5 mL of D5W or dilute anesthetic/steroid injected between the transverse carpal ligament and the epineurium of the median nerve, visibly peeling the ligament off the nerve.",
      "Hydrodissection of the deep plane: needle redirected deep to the median nerve and 3-5 mL injected to separate the nerve from the underlying flexor digitorum superficialis tendons (\"halo sign\" achieving 360-degree circumferential neurolysis).",
      "Real-time Doppler check confirming brisk intraneural reperfusion.",
      "Needle withdrawal, compression dressing, and immediate finger mobilization."
    ],
    "complications": [
      "Transient increase in finger paresthesias for several hours (anesthetic effect)",
      "Direct intraneural needle puncture causing electric shock dysesthesia (avoided by live visualization)",
      "Subcutaneous hematoma or palmar bruising",
      "Infection (<0.1%)"
    ],
    "maayTariffInr": 16500,
    "vendorContacts": [
      "GE Healthcare Ultrasound (+91 98291 99882)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "usg-percutaneous-carpal-tunnel-release",
    "name": "Ultrasound-Guided Percutaneous Carpal Tunnel Release (Flexor Retinaculum Transection)",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-CTR-014",
    "rghsCode": "745 / 14",
    "icd10": "G56.0 (Carpal Tunnel Syndrome)",
    "indications": [
      "Moderate to severe carpal tunnel syndrome with persistent thenar weakness, constant numbness, or failed conservative hydrodissection",
      "Confirmed median nerve compression on electrodiagnostics and sonography",
      "Desire for rapid recovery and minimal incision compared to open or mini-open surgery"
    ],
    "preOpCriteria": [
      "Detailed ultrasound mapping of the transverse carpal ligament, superficial palmar arterial arch, recurrent motor branch of median nerve, and Berrettini anastomoses",
      "Patient off anticoagulants/antiplatelets with INR <= 1.4",
      "Absence of space-occupying lesions (schwannoma, tenosynovial giant cell tumor) requiring formal open excision"
    ],
    "hardware": [
      {
        "category": "Specialized Cutting Device",
        "name": "Percutaneous Micro-hook Knife / Thread Carpal Tunnel Release (TCTR) Device (SX-One MicroKnife / Sonex)",
        "spec": "Ultra-thin retro-cutting blade with protective shroud",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Ultrasound System",
        "name": "High-Frequency Linear Probe (15-22 MHz)",
        "spec": "Sterile drape",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Local Anesthetic",
        "name": "1% Lignocaine with 1:200,000 Adrenaline",
        "spec": "10-15 mL for tumescent palmar dissection",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Palmar mapping under high-frequency ultrasound: marking the distal margin of transverse carpal ligament, superficial palmar arterial arch, and median nerve course.",
      "Local tumescent anesthesia: 10 mL injected under ultrasound guidance into the carpal tunnel and subcutaneously above the ligament, creating a wide protective fluid cushion.",
      "Small 3 mm skin puncture proximal to the distal wrist crease.",
      "Introduction of the shielded micro-hook knife or thread cutting wire into the carpal tunnel under continuous sonographic longitudinal visualization.",
      "Deployment of the probe immediately beneath the transverse carpal ligament, keeping the median nerve and palmar arch strictly outside the cutting zone.",
      "Controlled retrograde transection of the transverse carpal ligament while visualizing the release of tension and separation of ligament edges.",
      "Sonographic verification of complete ligament transection and free decompression of the median nerve.",
      "Skin puncture closure with Steri-Strip or single 4-0 nylon suture, compressive palm bandage."
    ],
    "complications": [
      "Palmar tenderness or pillar pain lasting 1-3 weeks",
      "Incomplete transection requiring re-intervention (<2%)",
      "Iatrogenic injury to superficial palmar arterial arch or recurrent motor branch (extremely rare under experienced US visualization)",
      "Transient median nerve neuropraxia or palmar hematoma"
    ],
    "maayTariffInr": 28000,
    "vendorContacts": [
      "Sonex Health / Stryker (+91 98290 88231)",
      "Merit Medical India (+91 98292 44321)"
    ]
  },
  {
    "id": "usg-ulnar-nerve-hydrodissection-cubital",
    "name": "Ultrasound-Guided Ulnar Nerve Hydrodissection at the Cubital Tunnel",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-ULN-015",
    "rghsCode": "744 / 14",
    "icd10": "G56.2 (Lesion of Ulnar Nerve / Cubital Tunnel Syndrome)",
    "indications": [
      "Cubital tunnel syndrome with chronic paresthesias in the little finger and ulnar half of ring finger, medial elbow aching, or early intrinsic muscle weakness",
      "Failed conservative splinting and physical therapy",
      "Recurrent ulnar neuropathy post-transposition surgery due to perineural fibrosis"
    ],
    "preOpCriteria": [
      "NCS showing slowing of ulnar conduction velocity across the elbow (<50 m/s)",
      "Ultrasound showing ulnar nerve CSA > 10 mm² at the retrocondylar groove or under Osborne's arcade, with loss of fascicular pattern; evaluation for nerve subluxation during elbow flexion",
      "Coagulation: INR <= 1.4, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Ultrasound System",
        "name": "High-Frequency Linear Probe (12-18 MHz)",
        "spec": "Sterile cover",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Hydrodissection Needle",
        "name": "25G Echogenic Needle",
        "spec": "1.5 - 2 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate",
        "name": "5% Dextrose (D5W) 8-10 mL + optional Dexamethasone 4 mg",
        "spec": "Aseptic syringe",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient supine with arm abducted, externally rotated, and elbow semi-flexed.",
      "Sonographic short-axis scan of the ulnar nerve at the medial epicondyle and through Osborne's ligament into the flexor carpi ulnaris heads.",
      "Local anesthetic wheal proximal or distal to the cubital tunnel.",
      "In-plane needle insertion into the retrocondylar groove adjacent to the ulnar nerve.",
      "Careful injection of 5-8 mL D5W between the nerve and Osborne's ligament, lifting the ligament and expanding the tight fibro-osseous space.",
      "Additional hydrodissection deep to the nerve against the bone/joint capsule, creating a circumferential fluid cushion (\"donut sign\").",
      "Dynamic elbow flexion check on ultrasound to ensure smooth gliding without subluxation.",
      "Needle removal, compression, and active mobilization."
    ],
    "complications": [
      "Transient numbness or paresthesias in ulnar digits",
      "Puncture site bruise or localized tenderness",
      "Intraneural injection if needle not monitored continuously",
      "Infection (<0.1%)"
    ],
    "maayTariffInr": 16500,
    "vendorContacts": [
      "GE Healthcare (+91 98291 99882)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "usg-radial-nerve-hydrodissection",
    "name": "Ultrasound-Guided Radial Nerve Hydrodissection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-RAD-016",
    "rghsCode": "744 / 14",
    "icd10": "G56.3 (Lesion of Radial Nerve / Radial Tunnel Syndrome)",
    "indications": [
      "Radial tunnel syndrome or posterior interosseous nerve (PIN) entrapment at the Arcade of Frohse or leash of Henry",
      "Chronic deep dull ache in the dorsal forearm and lateral elbow mimicking resistant tennis elbow",
      "Cheiralgia paresthetica (superficial radial nerve entrapment at Wartenberg's syndrome) causing burning pain on dorsal thumb/index finger"
    ],
    "preOpCriteria": [
      "Clinical tenderness 4-5 cm distal to lateral epicondyle over the radial tunnel, exacerbated by resisted middle finger extension or forearm supination",
      "High-frequency ultrasound showing nerve swelling or compression at the arcade of Frohse",
      "Coagulation profile within normal limits"
    ],
    "hardware": [
      {
        "category": "Ultrasound Probe",
        "name": "High-Frequency Linear Transducer (15-20 MHz)",
        "spec": "Sterile cover",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Hydrodissection Needle",
        "name": "25G Echogenic Needle",
        "spec": "1.5 - 2 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate Fluid",
        "name": "5% Dextrose (D5W) 5-10 mL + 0.2% Ropivacaine",
        "spec": "Sterile preparation",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient seated with forearm pronated on the table.",
      "Ultrasound visualization of the main radial nerve bifurcating into superficial sensory branch and deep motor branch (PIN) as it enters the supinator muscle (Arcade of Frohse).",
      "Subcutaneous skin wheal with 1% lignocaine.",
      "In-plane needle approach from lateral to medial targeting the PIN at the entrance of the supinator.",
      "Incremental injection of 5-8 mL D5W to open the fibrous arcade of Frohse and release perineural tethering.",
      "Verification of full nerve separation from surrounding muscular fascial planes.",
      "Needle withdrawal, light dressing, and post-procedure motor examination."
    ],
    "complications": [
      "Transient finger or wrist drop if local anesthetic diffuses into motor fibers (resolves in 2-4 hours)",
      "Puncture site tenderness",
      "Localized bruising",
      "Infection (<0.1%)"
    ],
    "maayTariffInr": 16500,
    "vendorContacts": [
      "GE Healthcare (+91 98291 99882)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "usg-lfcn-hydrodissection-meralgia",
    "name": "Ultrasound-Guided Lateral Femoral Cutaneous Nerve Hydrodissection for Meralgia Paresthetica",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-LFCN-017",
    "rghsCode": "744 / 14",
    "icd10": "G57.1 (Meralgia Paresthetica)",
    "indications": [
      "Chronic burning pain, dysesthesia, and numbness over the anterolateral thigh (Bernhardt-Roth syndrome / meralgia paresthetica)",
      "Entrapment of the lateral femoral cutaneous nerve (LFCN) at the inguinal ligament or beneath the fascia lata",
      "Failure of weight loss, loose clothing, neuropathic medications (gabapentin/pregabalin), and simple landmark injections"
    ],
    "preOpCriteria": [
      "Clinical reproduction of symptoms on pelvic compression test or reverse Phalen sign",
      "High-resolution ultrasound tracing the LFCN as it passes medial/inferior to the anterior superior iliac spine (ASIS) between the tensor fasciae latae and sartorius muscles",
      "Coagulation: INR <= 1.5, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Ultrasound System",
        "name": "High-Frequency Linear Probe (12-18 MHz)",
        "spec": "Sterile cover",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Needle",
        "name": "22G - 25G Spinal / Echogenic Needle",
        "spec": "2.5 - 3 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate",
        "name": "5% Dextrose (D5W) 10 mL + 0.25% Bupivacaine 3 mL + Dexamethasone 4 mg",
        "spec": "Luer-lock syringe",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient positioned supine with legs extended in comfortable neutral position.",
      "Ultrasound probe placed 1-2 cm medial and inferior to the ASIS in an oblique transverse orientation to identify the sartorius, tensor fasciae latae, and the interfascial space containing the LFCN.",
      "Skin infiltration with 2 mL 1% lignocaine.",
      "Needle introduced in-plane from lateral to medial towards the interfascial tunnel surrounding the nerve.",
      "Hydrodissection with 8-10 mL D5W and local anesthetic/steroid mixture to separate the nerve from the overlying tight fascia lata and inguinal ligament.",
      "Sonographic visualization of fluid completely surrounding the nerve fascicles (\"halo sign\").",
      "Needle removal, compression for 2 minutes, and immediate assessment of sensory symptom relief."
    ],
    "complications": [
      "Transient quadriceps femoral nerve block if fluid tracks excessively medial into the femoral sheath (causes transient knee buckling / weakness, resolves in 4 hours)",
      "Puncture site bruising or hematoma",
      "Temporary paresthesia flare",
      "Infection (<0.1%)"
    ],
    "maayTariffInr": 16500,
    "vendorContacts": [
      "Sonosite Fujifilm (+91 98292 77665)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "usg-common-peroneal-nerve-hydrodissection",
    "name": "Ultrasound-Guided Common Peroneal Nerve Hydrodissection at the Fibular Neck",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-CPN-018",
    "rghsCode": "744 / 14",
    "icd10": "G57.3 (Lesion of Lateral Popliteal / Common Peroneal Nerve)",
    "indications": [
      "Common peroneal nerve entrapment / compression at the fibular head causing foot drop, weakness of ankle dorsiflexion, and lateral leg/dorsal foot sensory loss",
      "Post-surgical, post-traumatic, or tight cast/splint compression neuropathy",
      "Perineural ganglion cyst or fibrotic entrapment at the entrance of the fibular tunnel (peroneus longus arch)"
    ],
    "preOpCriteria": [
      "NCS/EMG documenting peroneal conduction block or axonal loss across the fibular neck",
      "High-resolution ultrasound demonstrating nerve enlargement (CSA > 12 mm²), loss of fascicular architecture, intraneural ganglion cyst, or tight fibular fibrous band",
      "Coagulation parameters: INR <= 1.4, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Ultrasound Probe",
        "name": "High-Frequency Linear Probe (12-18 MHz)",
        "spec": "Sterile sheath",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Hydrodissection Needle",
        "name": "25G Echogenic Needle",
        "spec": "1.5 - 2 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate",
        "name": "5% Dextrose (D5W) 8-10 mL + Triamcinolone 20 mg",
        "spec": "Aseptic preparation",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient positioned in lateral decubitus position with affected leg up and knee slightly flexed.",
      "Sonographic short-axis identification of the common peroneal nerve as it wraps obliquely around the posterior and lateral aspect of the fibular neck beneath the peroneus longus fascia.",
      "Skin antisepsis and superficial local anesthesia.",
      "In-plane needle advancement into the fibrous tunnel between the nerve epineurium and the peroneus longus origin.",
      "Hydrodissection with 8-10 mL D5W, expanding the tight fibro-osseous tunnel and separating the nerve from the underlying periosteum and overlying fascia.",
      "Confirmation of 360-degree fluid dissection around the nerve and down into its superficial and deep branches.",
      "Needle withdrawal, compression dressing, and active foot dorsiflexion assessment."
    ],
    "complications": [
      "Transient exacerbation of foot numbness or drop if local anesthetic is used (D5W preferred to minimize motor block)",
      "Local puncture site soreness",
      "Puncture site hematoma",
      "Infection (<0.1%)"
    ],
    "maayTariffInr": 17500,
    "vendorContacts": [
      "GE Healthcare (+91 98291 99882)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "usg-morton-neuroma-alcohol-neurolysis",
    "name": "Ultrasound-Guided Morton's Neuroma Percutaneous Alcohol Neurolysis",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-MN-019",
    "rghsCode": "746 / 14",
    "icd10": "G57.6 (Lesion of Plantar Nerve / Morton's Metatarsalgia)",
    "indications": [
      "Chronic intractable Morton's neuroma (intermetatarsal neuroma, most commonly 3rd webspace) failing wide-toe shoes, metatarsal pads, and local steroid injections",
      "Severe burning plantar pain and electric shocks radiating into toes during walking (Mulder's sign positive)",
      "Patient seeking non-surgical ablation to avoid surgical neurectomy and stump neuroma risk"
    ],
    "preOpCriteria": [
      "Dynamic high-frequency ultrasound demonstrating hypoechoic interdigital mass >= 5 mm between metatarsal heads with Mulder's click",
      "Absence of active forefoot cellulitis or severe peripheral neuropathy / diabetic foot ulcer",
      "Coagulation: INR <= 1.5, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Ultrasound Probe",
        "name": "High-Frequency Linear / Hockey-Stick Transducer (15-22 MHz)",
        "spec": "Sterile cover",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Injection Needle",
        "name": "25G - 27G Needle",
        "spec": "1.5 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Neurolytic Solution",
        "name": "Dehydrated Sterile Ethanol (4% to 20% dilution with 0.5% Bupivacaine)",
        "spec": "Filtered sterile ampoule",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Local Anesthetic",
        "name": "2% Lignocaine plain",
        "spec": "For pre-injection regional block",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient supine with knee flexed and foot flat on the examination table.",
      "Dorsal approach: ultrasound probe placed transversally or longitudinally over the intermetatarsal space while manual plantar pressure is applied from below to push the neuroma into the dorsal field of view.",
      "Aseptic preparation and local digital nerve block with 1-2 mL 2% lignocaine.",
      "Under real-time ultrasound guidance, 25G needle advanced from dorsal into the center of the hypoechoic neuroma mass.",
      "Slow, controlled injection of 0.5 - 1.0 mL of 4-20% ethanol-bupivacaine solution directly into and around the neuroma sheath.",
      "Real-time visualization of echogenic cloud / whitening of the neuroma tissue, confirming accurate target deposition without extravasation into the subcutaneous fat.",
      "Needle withdrawal, sterile dressing, and 24-hour non-weight-bearing/heel-walking instructions."
    ],
    "complications": [
      "Post-injection burning pain flare lasting 24-48 hours (neurolytic response)",
      "Dorsal or plantar skin necrosis or fat pad atrophy if alcohol leaks into superficial tissues (<2%)",
      "Permanent toe numbness (expected therapeutic outcome)",
      "Transient metatarsalgia or local swelling"
    ],
    "maayTariffInr": 15500,
    "vendorContacts": [
      "BD India (+91 98290 33441)",
      "Sonosite Fujifilm (+91 98292 77665)"
    ]
  },
  {
    "id": "usg-morton-neuroma-rfa",
    "name": "Ultrasound-Guided Radiofrequency Ablation for Morton's Neuroma",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-MN-020",
    "rghsCode": "746 / 14",
    "icd10": "G57.6 (Morton's Neuroma)",
    "indications": [
      "Refractory Morton's interdigital neuroma > 5 mm failing conservative orthotics and steroid injections",
      "Patient desires thermal neurotomy with lower tissue necrosis risk compared to chemical alcohol neurolysis"
    ],
    "preOpCriteria": [
      "Sonographic measurement of neuroma dimensions (length, transverse, AP diameter) and Mulder test confirmation",
      "Diagnostic local anesthetic block providing >= 80% temporary relief",
      "Coagulation profile: INR <= 1.4, Platelets >= 60,000/uL"
    ],
    "hardware": [
      {
        "category": "RF Generator",
        "name": "Radiofrequency Generator Unit",
        "spec": "Continuous thermal or cooled RF mode",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "RF Cannula",
        "name": "20G - 22G RF Cannula with 5 mm Active Tip",
        "spec": "5-10 cm length, echogenic coated",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Ultrasound System",
        "name": "High-Frequency Linear Probe (15-20 MHz)",
        "spec": "Sterile cover",
        "standardStore": "SMS Interventional Pain Lab Store"
      }
    ],
    "techniqueSteps": [
      "Patient positioned supine with affected foot prepared and draped under sterile conditions.",
      "High-frequency ultrasound localization of the neuroma from dorsal aspect with plantar finger counterpressure.",
      "Local anesthetic track created with 1% lignocaine.",
      "RF cannula inserted in-plane under continuous ultrasound guidance directly into the longitudinal axis of the neuroma.",
      "Sensory stimulation (50 Hz, 0.3-0.5 V) reproduces burning dysesthesia in the 3rd and 4th toes.",
      "Motor stimulation (2 Hz, 1.5 V) confirms absence of intrinsic foot muscle twitches.",
      "Deposition of 1 mL 2% lignocaine for anesthesia.",
      "Thermal lesioning performed at 80°C for 90 seconds (or pulsed RF 42°C for 360 s).",
      "Follow-up second cycle after slight 2 mm retraction if neuroma length exceeds 8 mm.",
      "Cannula removal, sterile dressing, and ice application."
    ],
    "complications": [
      "Post-procedure forefoot aching and swelling for 3-5 days",
      "Persistent or partial numbness in the interdigital cleft (expected)",
      "Subcutaneous burn or fat necrosis if cannula active tip is too superficial",
      "Infection (<0.1%)"
    ],
    "maayTariffInr": 24500,
    "vendorContacts": [
      "Avanos Medical India (+91 98295 22119)",
      "Boston Scientific (+91 98293 66554)"
    ]
  },
  {
    "id": "usg-morton-neuroma-cryoablation",
    "name": "Ultrasound-Guided Cryoablation for Morton's Neuroma",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-MN-021",
    "rghsCode": "746 / 14",
    "icd10": "G57.6 (Morton's Neuroma)",
    "indications": [
      "Symptomatic interdigital Morton's neuroma failing orthotic pads and injections",
      "Excellent alternative preserving endoneurial architecture (Wallerian degeneration without permanent neuroma formation)",
      "Extremely low post-procedure neuroma recurrence or deafferentation dysesthesia rate"
    ],
    "preOpCriteria": [
      "MSK ultrasound confirming intermetatarsal neuroma location and absence of deep intermetatarsal bursitis alone",
      "Normal distal foot perfusion and capillary refill < 2 seconds",
      "INR <= 1.4, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Cryoablation Unit",
        "name": "Nitrous Oxide / Argon Gas Cryoablation Console",
        "spec": "Closed-loop Joule-Thomson expansion system",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Cryoprobe",
        "name": "14G - 16G Handheld Cryoneurolysis Probe",
        "spec": "Echogenic ice-ball generation tip (-60°C to -80°C)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Ultrasound System",
        "name": "High-Frequency Linear Probe (15-22 MHz)",
        "spec": "Sterile drape",
        "standardStore": "SMS Interventional Pain Lab Store"
      }
    ],
    "techniqueSteps": [
      "Patient supine with foot draped under full sterile conditions.",
      "Ultrasound visualization of the neuroma between the metatarsal heads.",
      "Local infiltration of 1% plain lignocaine into skin and dorsal track.",
      "Small 1.5 mm skin nick and insertion of the cryoprobe under real-time ultrasound guidance into the center of the neuroma.",
      "Hydrodissection with 3 mL normal saline to push the skin and plantar epidermis away from the probe.",
      "Activation of cryo-cycle: 2 cycles of 3-minute freeze (-60°C) separated by 2-minute passive thaw.",
      "Continuous ultrasound monitoring of the hyperechoic ice-ball with posterior acoustic shadowing, ensuring the ice-ball completely engulfs the neuroma while sparing skin margins.",
      "Probe warm-up, extraction, sterile dressing, and immediate ambulation."
    ],
    "complications": [
      "Mild forefoot swelling and transient numbness (lasts several weeks to months)",
      "Frostbite or skin blanching if ice-ball encroaches within 5 mm of epidermis (prevented by US monitoring and hydrodissection)",
      "Local hematoma",
      "Infection (<0.1%)"
    ],
    "maayTariffInr": 28500,
    "vendorContacts": [
      "Pacira Cryoablation (iovera) (+91 98296 44332)",
      "Boston Scientific Cryo (+91 98293 66554)"
    ]
  },
  {
    "id": "usg-a1-pulley-release-trigger-finger",
    "name": "Ultrasound-Guided A1 Pulley Percutaneous Release for Trigger Finger",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-TF-022",
    "rghsCode": "745 / 14",
    "icd10": "M65.3 (Trigger Finger / Stenosing Tenosynovitis)",
    "indications": [
      "Grade 2 to 4 trigger finger (Green's classification: catching, lockable, or fixed flexion contracture of MCP/PIP joints)",
      "Failed conservative splinting and corticosteroid sheath injections",
      "Patient desires office-based percutaneous transection with zero stitches and immediate return to work"
    ],
    "preOpCriteria": [
      "High-frequency ultrasound showing A1 pulley thickening (> 1.0 mm), hypervascularity on power Doppler, and flexor tendon nodular entrapment during dynamic flexion/extension",
      "Identification of adjacent digital neurovascular bundles to ensure safe cutting margins",
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL"
    ],
    "hardware": [
      {
        "category": "Cutting Needle / Knife",
        "name": "18G / 19G Angled Bevel Needle or Micro-Hook Percutaneous Knife",
        "spec": "Sterile surgical cutting edge",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Ultrasound Probe",
        "name": "Ultra-High Frequency Linear / Hockey-Stick Probe (18-24 MHz)",
        "spec": "Sterile cover",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Local Anesthetic",
        "name": "1% Plain Lignocaine (2-3 mL)",
        "spec": "Aseptic syringe",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient seated with hand resting supinated on table under sterile field.",
      "Longitudinal and transverse ultrasound imaging of the thickened A1 pulley over the metacarpal head and flexor digitorum tendons.",
      "Local anesthetic infiltration strictly superficial to the A1 pulley, creating a fluid layer that lifts the skin and digital nerves away.",
      "Under continuous longitudinal ultrasound guidance, an 18G needle (or hook-knife) is introduced distally and advanced proximally beneath the pulley, or vice versa.",
      "The bevel of the needle is used to systematically saw / slice the taut fibers of the A1 pulley from deep to superficial under direct live vision.",
      "A palpable and audible \"crunch\" is felt as the dense pulley fibers part.",
      "Dynamic intra-procedural testing: the patient is asked to actively make a tight fist and fully extend the finger; smooth gliding without any snapping or catching confirms complete release.",
      "Sonographic check confirms complete discontinuity of the A1 pulley and intact flexor tendon margins.",
      "Needle removal, small pressure bandage, and immediate full active range of motion permitted."
    ],
    "complications": [
      "Mild soreness and palm bruising for 3-5 days",
      "Incomplete release requiring immediate additional passes (<2%)",
      "Flexor tendon surface scuffing or fraying (minimized by strictly controlling needle bevel angle under US)",
      "Digital nerve or artery laceration (extremely rare under continuous direct high-resolution US visualization)"
    ],
    "maayTariffInr": 14500,
    "vendorContacts": [
      "BD India (+91 98290 33441)",
      "GE Healthcare Ultrasound (+91 98291 99882)"
    ]
  },
  {
    "id": "usg-glenohumeral-joint-injection",
    "name": "Ultrasound-Guided Glenohumeral Joint Arthrocentesis and Corticosteroid Injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-INJ-023",
    "rghsCode": "747 / 14",
    "icd10": "M19.01 (Primary Osteoarthritis, Shoulder)",
    "indications": [
      "Moderate to severe glenohumeral osteoarthritis, inflammatory arthritis (rheumatoid arthritis), or crystalline arthropathy",
      "Evaluation and aspiration of unexplained glenohumeral joint effusion",
      "Pre-rehabilitation pain relief for frozen shoulder or rotator cuff pathology"
    ],
    "preOpCriteria": [
      "Shoulder radiograph confirming joint space narrowing or effusion",
      "Aseptic skin surface with no overlying cellulitis",
      "Coagulation profile within acceptable limits (INR <= 1.8)"
    ],
    "hardware": [
      {
        "category": "Ultrasound System",
        "name": "High-Frequency Linear Probe (10-15 MHz)",
        "spec": "Sterile sheath",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Injection Needle",
        "name": "21G - 22G Spinal Needle",
        "spec": "2.5 - 3.5 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate Medication",
        "name": "Triamcinolone Acetonide 40-80 mg + 0.5% Bupivacaine 3-4 mL",
        "spec": "Luer-lock syringe",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient seated or in lateral decubitus position with arm across chest (hand resting on opposite shoulder) to profile the posterior joint line.",
      "Transducer placed horizontally below the scapular spine to image the infraspinatus muscle, posterior glenoid labrum, and humeral head.",
      "Aseptic preparation and local skin infiltration with 1% lignocaine.",
      "In-plane needle advancement from lateral to medial targeting the cleft between the humeral head cartilage and the posterior labrum.",
      "Aspiration of any joint effusion for laboratory analysis (cell count, Gram stain, crystals).",
      "Deposition of steroid and local anesthetic under live visualization, observing distension of the posterior joint capsule.",
      "Needle withdrawal, gentle pressure dressing, and passive shoulder movement."
    ],
    "complications": [
      "Post-injection steroid flare (flushing, transient joint soreness in 5-10%)",
      "Joint sepsis / septic arthritis (<0.02% with sterile technique)",
      "Subcutaneous fat atrophy or skin depigmentation",
      "Transient elevation of blood glucose in diabetic patients"
    ],
    "maayTariffInr": 8500,
    "vendorContacts": [
      "BD India (+91 98290 33441)",
      "Zydus Healthcare (+91 98292 11002)"
    ]
  },
  {
    "id": "fluro-glenohumeral-distension-brisement",
    "name": "Fluoroscopy-Guided Glenohumeral Joint Injection / Distension Arthrography (Brisement)",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-BRISE-024",
    "rghsCode": "747 / 14",
    "icd10": "M75.0 (Adhesive Capsulitis / Frozen Shoulder)",
    "indications": [
      "Refractory adhesive capsulitis (frozen shoulder) in the stiff/fibrotic stage with severe limitation of external rotation and abduction",
      "Failure of oral analgesics and physical therapy",
      "Mechanical hydraulic distension / capsular rupture to instantly restore joint volume and range of motion"
    ],
    "preOpCriteria": [
      "Clinical examination demonstrating capsular pattern restriction (loss of passive external rotation > 50%)",
      "Radiographs ruling out glenohumeral dislocation or advanced bony ankylosis",
      "INR <= 1.5, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Fluoroscopy Unit",
        "name": "Digital C-Arm Fluoroscopy System",
        "spec": "High-definition pulsed fluoroscopy",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Spinal Needle",
        "name": "20G - 21G Spinal Needle (Quincke)",
        "spec": "3.5 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Distension Fluid System",
        "name": "50 mL High-Pressure Syringe with 3-Way Stopcock & Extension Tubing",
        "spec": "Saline + Contrast + Local Anesthetic + Steroid",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate Mixture",
        "name": "40 mg Triamcinolone + 10 mL 1% Lignocaine + 5 mL Omnipaque 300 + 20-30 mL Normal Saline",
        "spec": "Total volume 35-50 mL",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient supine on fluoroscopy table with shoulder in slight external rotation.",
      "C-arm positioned in AP projection with 15-20 degree external tilt to profile the glenohumeral joint space (Grashey view).",
      "Skin marked over the junction of the middle and lower thirds of the humeral head; aseptic prep and local anesthesia.",
      "21G spinal needle advanced vertically under intermittent fluoroscopic guidance until bony resistance of the humeral head is felt.",
      "Injection of 1-2 mL iodinated contrast confirming intra-articular position (opacification of joint capsule, subscapularis bursa, and axillary recess without extravasation).",
      "Hydrodilatation: Rapid, pressurized infusion of saline-anesthetic-steroid solution through high-pressure tubing.",
      "Joint capacity monitored: initial high resistance, capsular distension, followed by sudden loss of resistance or tactile \"pop\" indicating capsular rupture (typically at 30-45 mL volume).",
      "Fluoroscopic confirmation of contrast extravasation into the subscapularis recess or subacromial space indicating successful capsulotomy.",
      "Needle removal, sterile dressing, and immediate vigorous physical therapy mobilization within 30 minutes."
    ],
    "complications": [
      "Marked post-procedure shoulder ache lasting 24-48 hours",
      "Capsular rupture with temporary fluid extravasation into soft tissues",
      "Transient vasovagal response during high-pressure distension",
      "Septic arthritis (<0.02%)"
    ],
    "maayTariffInr": 14500,
    "vendorContacts": [
      "GE Healthcare (+91 98291 99882)",
      "Merit Medical (+91 98292 44321)"
    ]
  },
  {
    "id": "fluro-subacromial-bursa-injection",
    "name": "Fluoroscopy-Guided Subacromial-Subdeltoid Bursa Injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-INJ-025",
    "rghsCode": "747 / 14",
    "icd10": "M75.5 (Bursitis of Shoulder)",
    "indications": [
      "Subacromial impingement syndrome, subdeltoid bursitis, and rotator cuff tendinopathy with positive Neer and Hawkins impingement tests",
      "Diagnostic distinction between subacromial pathology and cervical radiculopathy",
      "Pre-physiotherapy pain mitigation"
    ],
    "preOpCriteria": [
      "Clinical exam demonstrating painful arc between 60-120 degrees of active abduction",
      "Shoulder X-ray assessing acromial morphology (Bigliani Type I-III) and acromioclavicular osteophytes",
      "Coagulation: INR <= 1.5"
    ],
    "hardware": [
      {
        "category": "Imaging",
        "name": "C-Arm Fluoroscope or Ultrasound",
        "spec": "Standard imaging",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Needle",
        "name": "21G - 23G Needle",
        "spec": "2.5 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate",
        "name": "Triamcinolone 40 mg + 1% Lignocaine 3 mL + 1 mL Contrast",
        "spec": "Combined syringe",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient seated or supine with shoulder in neutral position.",
      "Fluoroscopic AP view with 10-15 degree caudal angulation to open the subacromial space.",
      "Lateral or posterolateral needle approach advanced beneath the lateral acromion edge.",
      "Test injection of 0.5 mL contrast demonstrating characteristic flat, linear pooling in the subacromial-subdeltoid bursa beneath the acromion.",
      "Injection of corticosteroid and local anesthetic mixture.",
      "Needle withdrawal, dressing, and re-testing of impingement signs."
    ],
    "complications": [
      "Post-injection steroid flare",
      "Subcutaneous fat atrophy or skin blanching",
      "Tendon weakening if steroid is inadvertently injected into rotator cuff substance",
      "Infection (<0.02%)"
    ],
    "maayTariffInr": 7500,
    "vendorContacts": [
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "fluro-hip-joint-injection",
    "name": "Fluoroscopy-Guided Hip Joint Diagnostic and Therapeutic Injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-INJ-026",
    "rghsCode": "748 / 14",
    "icd10": "M16.1 (Primary Osteoarthritis of Hip)",
    "indications": [
      "Moderate to severe osteoarthritis of hip, femoroacetabular impingement (FAI), labral tears, or avascular necrosis (AVN Stage I-II)",
      "Diagnostic injection to differentiate intra-articular hip pathology from lumbar spine radiculopathy or sacroiliac pain",
      "Administration of hyaluronic acid (viscosupplementation) or corticosteroid"
    ],
    "preOpCriteria": [
      "Hip radiograph (AP pelvis, Dunn or cross-table lateral) and/or MRI hip",
      "Absence of hip joint prosthesis infection or active groin skin sepsis",
      "Coagulation: INR <= 1.5, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Fluoroscopy System",
        "name": "Digital C-Arm Unit",
        "spec": "Pulsed mode",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Spinal Needle",
        "name": "20G - 22G Spinal Needle",
        "spec": "3.5 - 5.0 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate Solution",
        "name": "Triamcinolone 40-80 mg / Hyaluronic Acid (Synvisc) + 0.5% Bupivacaine 3 mL + 1 mL Non-ionic Contrast",
        "spec": "Luer-lock syringes",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient supine on fluoroscopy table with legs in 15 degrees of internal rotation (secured with tape) to elongate the femoral neck.",
      "C-arm positioned in true AP projection over the target hip joint.",
      "Palpation of femoral artery pulse; skin entry point marked 1-2 cm lateral to the pulse over the femoral head-neck junction.",
      "Aseptic preparation, drape, and deep local anesthesia with 1% lignocaine.",
      "22G spinal needle advanced vertically or anterolaterally under fluoroscopic guidance towards the lateral aspect of the femoral head-neck junction.",
      "Tactile contact with bone followed by gentle aspiration (ensuring no blood or unexpected purulence).",
      "Injection of 1 mL iodinated contrast showing immediate outline of the femoral head and filling of the zona orbicularis (arthrogram confirmation).",
      "Injection of therapeutic corticosteroid, local anesthetic, or hyaluronic acid.",
      "Needle withdrawal, sterile dressing, and documentation of immediate post-injection walking pain score."
    ],
    "complications": [
      "Transient femoral nerve palsy (numbness or leg weakness resolving in 3-4 hours if local anesthetic spills anteriorly)",
      "Puncture site hematoma or pseudoaneurysm (prevented by entering lateral to femoral pulse)",
      "Post-injection pain flare",
      "Septic arthritis (<0.02%)"
    ],
    "maayTariffInr": 12500,
    "vendorContacts": [
      "GE Healthcare (+91 98291 99882)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "usg-knee-intraarticular-ha-steroid",
    "name": "Ultrasound-Guided Knee Joint Intra-Articular Hyaluronic Acid / Steroid Injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-INJ-027",
    "rghsCode": "747 / 14",
    "icd10": "M17.1 (Primary Knee Osteoarthritis)",
    "indications": [
      "Symptomatic knee osteoarthritis (Kellgren-Lawrence Grade 1-3) with joint effusion and joint line tenderness",
      "Failed physical therapy, weight management, and oral analgesics",
      "Viscosupplementation with high molecular weight Hyaluronic Acid or depot corticosteroid"
    ],
    "preOpCriteria": [
      "Radiographic evaluation of knee alignment and joint space narrowing",
      "Absence of active skin sepsis or bacteremia",
      "Coagulation: INR <= 1.8"
    ],
    "hardware": [
      {
        "category": "Ultrasound System",
        "name": "High-Frequency Linear Probe (10-15 MHz)",
        "spec": "Sterile cover",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Aspiration/Injection Needle",
        "name": "18G - 21G Needles",
        "spec": "1.5 - 2 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate",
        "name": "Hyaluronic Acid (Synvisc-One / Orthovisc) or Triamcinolone 40 mg + 0.5% Bupivacaine 3 mL",
        "spec": "Pre-filled or sterile vials",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient supine with knee slightly flexed (20-30 degrees) supported by a small roller under the popliteal fossa.",
      "Transducer placed in transverse or longitudinal orientation over the suprapatellar pouch.",
      "Aseptic preparation and local subcutaneous anesthesia.",
      "In-plane needle insertion from superolateral approach entering the suprapatellar bursa beneath the quadriceps tendon.",
      "Complete aspiration of any joint effusion (relieving intra-articular pressure and preventing viscosupplement dilution).",
      "Under continuous ultrasound monitoring, slow injection of hyaluronic acid or corticosteroid mixture.",
      "Real-time visualization of echogenic viscosupplement bolus expanding the suprapatellar recess.",
      "Needle removal, compression dressing, and passive knee flexion/extension."
    ],
    "complications": [
      "Pseudoseptic / acute crystalline inflammatory flare post-hyaluronic acid (1-3%)",
      "Puncture site bruise or mild effusion",
      "Septic arthritis (<0.01%)",
      "Transient hyperglycemia in diabetic patients"
    ],
    "maayTariffInr": 9500,
    "vendorContacts": [
      "Sanofi India (Synvisc) (+91 98293 22119)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "fluro-sacroiliac-joint-injection",
    "name": "Fluoroscopy-Guided Sacroiliac Joint Injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-SIJ-028",
    "rghsCode": "748 / 14",
    "icd10": "M46.1 (Sacroiliitis) / M53.3",
    "indications": [
      "Sacroiliac joint dysfunction, ankylosing spondylitis, or sacroiliitis with localized buttock and posterior thigh pain",
      "Positive provocation tests (FABER/Patrick, Gaenslen, distraction, thigh thrust)",
      "Diagnostic validation prior to radiofrequency neurotomy"
    ],
    "preOpCriteria": [
      "Pelvic radiograph or MRI sacroiliac joints assessing joint space erosion, subchondral sclerosis, or bone marrow edema",
      "Coagulation: INR <= 1.5, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Fluoroscopy",
        "name": "Digital C-Arm Fluoroscope",
        "spec": "Oblique tilt capability",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Needle",
        "name": "22G Spinal Needle",
        "spec": "3.5 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate",
        "name": "Triamcinolone 40 mg + 0.5% Bupivacaine 1.5 mL + 0.5 mL Contrast",
        "spec": "Total volume <= 2-2.5 mL to prevent capsule blowout",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient positioned prone on fluoroscopy table with a pillow under the pelvis.",
      "C-arm tilted with contralateral oblique angle (15-25 degrees) and slight cranial-caudal tilt to align the posterior and anterior margins of the inferior third of the sacroiliac joint.",
      "Skin marked over the inferior 1-2 cm of the joint line; local anesthesia with 1% lignocaine.",
      "22G spinal needle advanced under intermittent fluoroscopic control into the inferior third of the synovial SI joint.",
      "Tactile sensation of cartilage entry; injection of 0.3-0.5 mL contrast showing characteristic sharp, thin intra-articular line without vascular uptake.",
      "Slow injection of corticosteroid and local anesthetic mixture (volume limited to 1.5-2.0 mL).",
      "Needle removal, dressing, and pain provocation re-testing."
    ],
    "complications": [
      "Transient sciatic or sacral nerve numbness if contrast/anesthetic leaks anteriorly",
      "Post-injection soreness for 24-48 hours",
      "Puncture site hematoma",
      "Infection (<0.02%)"
    ],
    "maayTariffInr": 13500,
    "vendorContacts": [
      "GE Healthcare (+91 98291 99882)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "usg-ankle-tibiotalar-injection",
    "name": "Ultrasound-Guided Ankle (Tibiotalar) Intra-Articular Injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-INJ-029",
    "rghsCode": "747 / 14",
    "icd10": "M19.07 (Primary Osteoarthritis, Ankle & Foot)",
    "indications": [
      "Tibiotalar osteoarthritis, post-traumatic ankle arthrosis, or rheumatoid arthritis of the ankle",
      "Diagnostic aspiration of unexplained ankle joint effusion",
      "Intra-articular administration of hyaluronic acid or corticosteroids"
    ],
    "preOpCriteria": [
      "Weight-bearing ankle radiographs confirming joint space narrowing and anterior osteophytes",
      "Absence of anterior tibial artery aneurysm or local cellulitis",
      "Coagulation: INR <= 1.5"
    ],
    "hardware": [
      {
        "category": "Ultrasound Probe",
        "name": "High-Frequency Linear Transducer (12-18 MHz)",
        "spec": "Sterile cover",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Needle",
        "name": "21G - 23G Needle",
        "spec": "1.5 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate",
        "name": "Triamcinolone 20-40 mg + 0.5% Bupivacaine 1.5 mL",
        "spec": "Sterile syringe",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient seated with knee flexed and foot flat on table in slight plantarflexion.",
      "Transducer placed in sagittal plane over anterior ankle to identify the distal tibia, talar dome, and anterior joint capsule, identifying and avoiding the dorsalis pedis artery and deep peroneal nerve.",
      "Aseptic preparation and local subcutaneous anesthesia.",
      "In-plane needle insertion from distal to proximal (or proximal to distal) beneath the anterior joint capsule.",
      "Aspiration of any joint effusion followed by injection of medication under live sonographic vision.",
      "Needle removal, compression dressing, and gentle ankle mobilization."
    ],
    "complications": [
      "Transient pain flare",
      "Puncture of dorsalis pedis artery or deep peroneal nerve irritation (prevented by US Doppler visualization)",
      "Infection (<0.02%)"
    ],
    "maayTariffInr": 9000,
    "vendorContacts": [
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "usg-subtalar-joint-injection",
    "name": "Ultrasound-Guided Subtalar Joint Arthrocentesis and Steroid Injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-INJ-030",
    "rghsCode": "747 / 14",
    "icd10": "M19.07 (Primary Osteoarthritis, Subtalar Joint)",
    "indications": [
      "Subtalar joint arthrosis (calcaneotalar joint) causing severe hindfoot pain aggravated by walking on uneven ground",
      "Diagnostic injection to distinguish subtalar pain from tibiotalar or sinus tarsi syndrome",
      "Post-calcaneal fracture subtalar post-traumatic arthritis"
    ],
    "preOpCriteria": [
      "Radiographs (Broden views) or CT/MRI hindfoot confirming subtalar joint space narrowing",
      "Normal coagulation parameters"
    ],
    "hardware": [
      {
        "category": "Ultrasound Probe",
        "name": "High-Frequency Linear Probe (12-18 MHz)",
        "spec": "Sterile sheath",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Needle",
        "name": "22G - 23G Needle",
        "spec": "1.5 - 2 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate",
        "name": "Triamcinolone 20 mg + 0.5% Ropivacaine 1 mL",
        "spec": "Small volume",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient in lateral decubitus position with affected ankle facing upwards, foot resting on a support.",
      "Transducer placed obliquely over the lateral hindfoot inferior to the tip of the lateral malleolus to visualize the posterior subtalar facet between the talus and calcaneus.",
      "Sterile preparation and local wheal with 1% lignocaine.",
      "In-plane needle advancement into the posterior subtalar joint line, avoiding the peroneal tendons.",
      "Injection of 1-1.5 mL of local anesthetic/steroid mixture under live visualization of joint capsule expansion.",
      "Needle removal and walking assessment."
    ],
    "complications": [
      "Peroneal tendon sheath extravasation",
      "Post-injection aching",
      "Infection (<0.02%)"
    ],
    "maayTariffInr": 9500,
    "vendorContacts": [
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "usg-acromioclavicular-joint-injection",
    "name": "Ultrasound-Guided Acromioclavicular Joint Injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-INJ-031",
    "rghsCode": "747 / 14",
    "icd10": "M19.01 (Acromioclavicular Joint Arthrosis)",
    "indications": [
      "Acromioclavicular (AC) joint osteoarthritis, distal clavicular osteolysis, or post-traumatic AC sprain",
      "Point tenderness over the superior shoulder and positive cross-body adduction test",
      "Pain palliation and diagnostic discrimination from subacromial pathology"
    ],
    "preOpCriteria": [
      "Shoulder radiograph (Zanca view) demonstrating AC joint narrowing and osteophytes",
      "Absence of skin infection over the superior shoulder"
    ],
    "hardware": [
      {
        "category": "Ultrasound Probe",
        "name": "High-Frequency Linear Probe (12-18 MHz)",
        "spec": "Sterile cover",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Needle",
        "name": "25G Needle",
        "spec": "1.0 - 1.5 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate",
        "name": "Triamcinolone 10-20 mg + 1% Lignocaine 0.5-1.0 mL",
        "spec": "Total volume <= 1 mL",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient seated with arm by side.",
      "Transducer placed in coronal plane over the superior shoulder to visualize the joint space between the distal clavicle and acromion process.",
      "Local skin prep and minimal subcutaneous wheal.",
      "In-plane needle insertion from lateral to medial (or out-of-plane) directly into the small joint cavity.",
      "Slow injection of <= 1.0 mL solution, observing capsule elevation without capsular rupture.",
      "Needle withdrawal, light dressing, and cross-body adduction re-test."
    ],
    "complications": [
      "Post-injection pain flare",
      "Subcutaneous atrophy and skin depigmentation (common if fluid leaks superficially over the thin clavicular skin)",
      "Capsular rupture from excessive injectate volume"
    ],
    "maayTariffInr": 7500,
    "vendorContacts": [
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "usg-sternoclavicular-joint-injection",
    "name": "Ultrasound-Guided Sternoclavicular Joint Injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-INJ-032",
    "rghsCode": "747 / 14",
    "icd10": "M19.01 (Sternoclavicular Joint Arthrosis)",
    "indications": [
      "Sternoclavicular (SC) joint osteoarthritis, condensing osteitis of the clavicle, or SAPHO syndrome",
      "Localized anterior chest/sternal pain on arm elevation and adduction",
      "Careful image-guided injection strictly avoiding deep mediastinal great vessels"
    ],
    "preOpCriteria": [
      "CT or ultrasound of SC joint ruling out sternoclavicular septic arthritis or retrosternal soft tissue abscess",
      "Strict coagulation verification (INR <= 1.4) due to proximity of brachiocephalic vessels",
      "Normal platelets >= 60,000/uL"
    ],
    "hardware": [
      {
        "category": "Ultrasound Probe",
        "name": "High-Frequency Linear Probe (12-18 MHz)",
        "spec": "Sterile sheath",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Needle",
        "name": "25G - 27G Needle",
        "spec": "1.0 - 1.5 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate",
        "name": "Triamcinolone 10-20 mg + 1% Lignocaine 0.5 mL",
        "spec": "Ultra-small volume",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient supine on examination table with neck slightly extended.",
      "High-frequency probe placed horizontally over the SC joint identifying the medial clavicle, manubrium sterni, intra-articular disc, and underlying retrosternal pleura/great vessels.",
      "Aseptic preparation and local skin infiltration.",
      "Needle advanced under continuous real-time in-plane ultrasound guidance into the anterior SC joint compartment, keeping the needle strictly anterior to the posterior clavicular cortex.",
      "Careful aspiration; slow injection of 0.5-0.8 mL of medication.",
      "Needle withdrawal and gentle pressure dressing."
    ],
    "complications": [
      "Pneumothorax or mediastinal hematoma if needle is advanced too deeply (prevented by strict US guidance and bone stops)",
      "Subcutaneous atrophy or skin depigmentation",
      "Infection (<0.02%)"
    ],
    "maayTariffInr": 9500,
    "vendorContacts": [
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "usg-psoas-bursa-aspiration-sclerosis",
    "name": "Ultrasound-Guided Psoas Bursa Aspiration and Sclerosis",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-BUR-033",
    "rghsCode": "748 / 14",
    "icd10": "M70.85 (Other Bursitis, Pelvic Region and Thigh)",
    "indications": [
      "Symptomatic iliopsoas bursitis or giant communicating iliopsoas cyst compressing the femoral nerve/vessels",
      "Severe groin pain exacerbated by hip extension, snapping hip syndrome (coxa saltans interna)",
      "Cyst recurrence despite simple needle aspiration"
    ],
    "preOpCriteria": [
      "Pelvic ultrasound or MRI defining psoas bursa dimensions, relationship to femoral neurovascular bundle, and communication with hip joint",
      "Exclusion of psoas abscess (fever, elevated inflammatory markers, positive culture)",
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL"
    ],
    "hardware": [
      {
        "category": "Ultrasound System",
        "name": "Curved Array (3-5 MHz) or Linear Probe (6-12 MHz)",
        "spec": "Deep tissue penetration",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Puncture Needle",
        "name": "18G - 20G Spinal Needle",
        "spec": "3.5 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Sclerosant / Injectate",
        "name": "Doxycycline 100 mg or 1% Polidocanol / Triamcinolone 40 mg",
        "spec": "For aspiration and chemical ablation",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient supine with hip in neutral extension.",
      "Ultrasound identification of the iliopsoas tendon over the iliopectineal eminence, the underlying cystic bursa, and the femoral artery/nerve medially.",
      "Aseptic preparation, drape, and local anesthesia lateral to the femoral artery.",
      "In-plane needle insertion from lateral to medial into the psoas bursa under real-time ultrasound monitoring.",
      "Complete aspiration of gelatinous or clear bursal fluid.",
      "Instillation of steroid/local anesthetic or dilute sclerosant (Doxycycline 100 mg in 5 mL saline) with 5-minute dwell time, followed by re-aspiration.",
      "Needle withdrawal, compression for 3 minutes, and sterile dressing."
    ],
    "complications": [
      "Femoral nerve paresthesias or motor weakness (transient)",
      "Puncture site hematoma",
      "Infection / conversion to psoas abscess (<0.1%)",
      "Recurrence of fluid collection"
    ],
    "maayTariffInr": 15500,
    "vendorContacts": [
      "BD India (+91 98290 33441)",
      "Sonosite Fujifilm (+91 98292 77665)"
    ]
  },
  {
    "id": "usg-trochanteric-bursa-injection-gtps",
    "name": "Ultrasound-Guided Greater Trochanteric Bursa Injection for GTPS",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-BUR-034",
    "rghsCode": "747 / 14",
    "icd10": "M70.6 (Trochanteric Bursitis / Greater Trochanteric Pain Syndrome)",
    "indications": [
      "Greater trochanteric pain syndrome (GTPS) with severe lateral hip tenderness, gluteus medius/minimus tendinopathy, or subgluteal bursitis",
      "Inability to lie on affected side, pain during stair climbing and walking",
      "Failed conservative therapy and unguided blind injections"
    ],
    "preOpCriteria": [
      "High-frequency ultrasound evaluating gluteus medius/minimus insertion, partial tear, calcification, and trochanteric bursal fluid",
      "Coagulation: INR <= 1.6"
    ],
    "hardware": [
      {
        "category": "Ultrasound Probe",
        "name": "High-Frequency Linear Probe (8-14 MHz)",
        "spec": "Musculoskeletal preset",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Needle",
        "name": "21G - 22G Spinal Needle",
        "spec": "2.5 - 3.5 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate",
        "name": "Triamcinolone 40-80 mg + 0.5% Bupivacaine 3-4 mL",
        "spec": "Combined syringe",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient in lateral decubitus position with affected hip up, knees slightly flexed.",
      "Transverse and longitudinal ultrasound imaging over the greater trochanter identifying the lateral, anterior, and posterior facets and overlying gluteal tendons and bursa.",
      "Skin antisepsis and local anesthesia.",
      "In-plane needle guidance into the subgluteus maximus bursa directly overlying the bony lateral facet or into the gluteus medius tendon cleft.",
      "Slow injection of corticosteroid and local anesthetic, observing fluid spreading through the bursal plane.",
      "Needle removal, compression dressing, and lateral decubitus pain re-check."
    ],
    "complications": [
      "Post-injection steroid flare",
      "Subcutaneous fat atrophy (common in lateral thigh)",
      "Tendon rupture if injected under high resistance into tendon body",
      "Infection (<0.02%)"
    ],
    "maayTariffInr": 8500,
    "vendorContacts": [
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "usg-baker-cyst-aspiration-sclerosis",
    "name": "Ultrasound-Guided Aspiration and Sclerotherapy of Baker's (Popliteal) Cyst",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-CYST-035",
    "rghsCode": "748 / 14",
    "icd10": "M71.2 (Synovial Cyst of Popliteal Space [Baker])",
    "indications": [
      "Large, tense, symptomatic popliteal (Baker's) cyst causing posterior knee pain, tightness, and limitation of knee flexion",
      "Compression of popliteal vein or tibial nerve by cyst",
      "Recurrent cyst despite simple drainage"
    ],
    "preOpCriteria": [
      "Ultrasound or MRI demonstrating communication between semimembranosus and medial head of gastrocnemius (SM-MG neck/stalk)",
      "Assessment of underlying intra-articular pathology (meniscal tear, cartilage degeneration)",
      "Coagulation: INR <= 1.5, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Ultrasound Probe",
        "name": "High-Frequency Linear Probe (8-14 MHz)",
        "spec": "Sterile cover",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Aspiration Needle",
        "name": "16G - 18G Needle",
        "spec": "2.5 inch length (large bore for thick synovial fluid)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Sclerosant / Injectate",
        "name": "Triamcinolone 40 mg + 1% Polidocanol or Doxycycline 50 mg",
        "spec": "Sterile ampoules",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient positioned prone with knee fully extended or slight flexion on a pillow.",
      "Transverse ultrasound mapping of the popliteal cyst, identifying the neck between the semimembranosus tendon and medial gastrocnemius head; Doppler check to confirm popliteal artery and vein location laterally.",
      "Aseptic preparation and local anesthesia.",
      "Under real-time in-plane ultrasound guidance, 16G/18G needle advanced into the dependent portion of the cyst.",
      "Complete evacuation of thick, gelatinous synovial fluid using 20 mL syringe.",
      "Fenestration of internal septations with the needle tip.",
      "Injection of sclerosing agent (Polidocanol 1-2% or Doxycycline) or depot corticosteroid (Triamcinolone 40 mg) with gentle massage.",
      "Needle removal, compressive elastic knee wrap for 48 hours to promote coaptation of cyst walls."
    ],
    "complications": [
      "Post-sclerotherapy chemical inflammation",
      "Puncture site bruise or popliteal hematoma",
      "Infection (<0.1%)",
      "Recurrence if underlying intra-articular pathology remains untreated"
    ],
    "maayTariffInr": 13500,
    "vendorContacts": [
      "BD India (+91 98290 33441)",
      "Chemische Fabrik Kreussler (Aethoxysklerol) (+91 98294 55667)"
    ]
  },
  {
    "id": "usg-ganglion-cyst-aspiration-sclerosis",
    "name": "Ultrasound-Guided Ganglion Cyst Aspiration, Fenestration, and Sclerosis (Wrist, Foot)",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-CYST-036",
    "rghsCode": "748 / 14",
    "icd10": "M67.4 (Ganglion)",
    "indications": [
      "Painful, cosmetically disfiguring, or nerve-compressing ganglion cysts of dorsal/volar wrist, foot, or ankle",
      "Failed conservative observation or simple unguided aspiration",
      "Recurrent wrist ganglion causing dorsal impingement pain on extension"
    ],
    "preOpCriteria": [
      "High-frequency ultrasound confirming anechoic/hypoechoic multilocular cystic lesion and identifying stalk origin (scapholunate ligament)",
      "Doppler confirmation to rule out pseudoaneurysm (radial artery) or solid synovial tumor",
      "Normal coagulation"
    ],
    "hardware": [
      {
        "category": "Ultrasound System",
        "name": "Ultra-High Frequency Probe (15-22 MHz)",
        "spec": "Musculoskeletal preset",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Needle",
        "name": "18G Needle for aspiration and 22G for fenestration",
        "spec": "1.5 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Sclerosant",
        "name": "Hypertonic Saline (10-20%) / Sodium Tetradecyl Sulfate (STS 1%) / Triamcinolone 20 mg",
        "spec": "Small volume",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient seated with wrist/hand resting comfortably on examination table.",
      "Sonographic localization of the ganglion cyst and its relationship to radial/ulnar vessels and extensor tendons.",
      "Aseptic preparation and local subcutaneous anesthesia.",
      "18G needle inserted in-plane under continuous ultrasound guidance into the center of the cyst.",
      "Evacuation of thick, tenacious \"apple-jelly\" mucinous fluid using high suction.",
      "Cross-hatch needle fenestration: the needle tip is repeatedly advanced through the cyst capsule and internal septae to shred the cyst wall.",
      "Instillation of 0.5 mL sclerosant or Triamcinolone 20 mg.",
      "Needle removal, firm pressure dressing, and immobilization splint for 5 days to prevent refill."
    ],
    "complications": [
      "Recurrence of ganglion cyst (15-30% long-term)",
      "Subcutaneous fat atrophy or skin discoloration from steroid",
      "Radial artery puncture if volar ganglion near radial artery (prevented by live Doppler)",
      "Infection (<0.1%)"
    ],
    "maayTariffInr": 9500,
    "vendorContacts": [
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "usg-piriformis-injection-botox-steroid",
    "name": "Ultrasound-Guided Piriformis Muscle Botulinum Toxin / Steroid Injection",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-PIR-037",
    "rghsCode": "748 / 14",
    "icd10": "G57.0 (Piriformis Syndrome / Sciatic Nerve Entrapment)",
    "indications": [
      "Piriformis syndrome causing deep buttock pain and sciatic radiculopathy (pseudo-sciatica) aggravated by prolonged sitting, walking, or internal hip rotation",
      "Tenderness over the greater sciatic notch with positive FAIR (Flexion, Adduction, Internal Rotation) test and Freiberg sign",
      "Failed conservative stretching, physiotherapy, and oral neuropathic agents"
    ],
    "preOpCriteria": [
      "Lumbar spine MRI excluding disc herniation or canal stenosis compressing L5/S1 roots",
      "Ultrasound or pelvic MRI showing piriformis muscle hypertrophy, asymmetry, or sciatic nerve impingement",
      "Coagulation: INR <= 1.5, Platelets >= 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Ultrasound Probe",
        "name": "Low-Frequency Curved Array (2-5 MHz) or Linear Probe",
        "spec": "Deep gluteal imaging",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Injection Needle",
        "name": "21G - 22G Spinal Needle",
        "spec": "3.5 - 5.0 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate Medication",
        "name": "Botulinum Toxin Type A (Botox / Dysport 100 Units) or Triamcinolone 80 mg + 0.5% Bupivacaine 3 mL",
        "spec": "Reconstituted with preservative-free saline",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient positioned prone on examination table with pillow under abdomen and toes pointed inward (internal hip rotation).",
      "Transducer placed obliquely between the greater trochanter and the sacrum to identify the gluteus maximus, the piriformis muscle belly, and the deep sciatic nerve lying beneath the piriformis.",
      "Skin antisepsis and local anesthesia.",
      "In-plane needle advancement through the gluteus maximus into the mid-substance of the piriformis muscle under real-time ultrasound guidance.",
      "Aspiration check to ensure no intravascular placement (superior or inferior gluteal vessels).",
      "Injection of 100 Units Botulinum Toxin A or corticosteroid/local anesthetic directly into the piriformis muscle belly, visualizing muscle expansion while ensuring the underlying sciatic nerve remains unaffected.",
      "Needle withdrawal, compression dressing, and post-procedure neurological exam."
    ],
    "complications": [
      "Transient sciatic nerve motor block (foot drop or leg numbness lasting 2-4 hours if local anesthetic diffuses into nerve)",
      "Puncture site muscle soreness",
      "Gluteal hematoma",
      "Infection (<0.1%)"
    ],
    "maayTariffInr": 21500,
    "vendorContacts": [
      "Allergan India (Botox) (+91 98295 11009)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "percutaneous-thermal-ablation-msk-tumors",
    "name": "Percutaneous Thermal Ablation (RFA / Laser / Cryo) for Musculoskeletal Tumors",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-TUMOR-038",
    "rghsCode": "749 / 14",
    "icd10": "C79.51 (Secondary Malignant Neoplasm of Bone) / D16.9",
    "indications": [
      "Benign bone tumors (osteoid osteoma, chondroblastoma) in children and adults",
      "Painful localized musculoskeletal metastases or desmoid tumors refractory to systemic therapy and radiotherapy",
      "Symptomatic osseous oligometastases where surgical resection is contraindicated"
    ],
    "preOpCriteria": [
      "Thin-slice CT and contrast MRI mapping tumor dimensions, cortical destruction, and proximity to major motor nerves / spinal cord (safe margin >= 10-15 mm or active thermoprotection planned)",
      "Pre-op biopsy confirmation of histopathology",
      "Coagulation: INR <= 1.4, Platelets >= 75,000/uL"
    ],
    "hardware": [
      {
        "category": "Imaging Guidance",
        "name": "Computed Tomography (CT) or Cone-Beam CT Guidance",
        "spec": "Multi-slice helical CT",
        "standardStore": "CT Intervention Suite"
      },
      {
        "category": "Bone Access System",
        "name": "10G - 11G Bone Biopsy / Drill Kit (Bonopty / OnControl)",
        "spec": "Powered bone drill for dense cortical bone",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Ablation System",
        "name": "RFA / Cryoablation / Laser System",
        "spec": "Dedicated bone probe with thermocouple temperature monitoring",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Thermoprotection System",
        "name": "Hydrodissection Kit with Warm/Cold D5W and Thermocouple Sensors",
        "spec": "Active nerve monitoring",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient placed under deep conscious sedation or general anesthesia on the CT table in comfortable position.",
      "Planning CT scan (1 mm slices) to determine needle trajectory through safe bone corridor avoiding major neurovascular bundles.",
      "Sterile preparation and local anesthesia down to the periosteum.",
      "Cortical penetration using powered bone drill or coaxial bone trephine needle into the tumor nidus.",
      "Biopsy core harvested for histopathological confirmation.",
      "Ablation electrode / cryoprobe positioned centrally within the tumor.",
      "If adjacent to vulnerable nerves, continuous motor evoked potential monitoring and active CO2 or warm saline hydrodissection instituted.",
      "Thermal cycle applied (RFA: 90°C for 4-6 minutes; Cryo: dual freeze-thaw cycles to -40°C).",
      "Post-ablation CT verifying complete ablation zone coverage.",
      "Optional cementoplasty if substantial weight-bearing bone defect remains.",
      "Probe removal, sterile dressing, and 4-hour post-op monitoring."
    ],
    "complications": [
      "Post-procedure bone pain flare for 24-48 hours",
      "Thermal injury to adjacent motor nerve causing neuropraxia (prevented by hydrodissection and neuro-monitoring)",
      "Pathological fracture of treated bone",
      "Skin burn at probe entry site (<1%)",
      "Infection / osteomyelitis (<0.5%)"
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Stryker Interventional Spine (+91 98290 88231)",
      "Medtronic Ablation (+91 98291 77342)",
      "Boston Scientific (+91 98293 66554)"
    ]
  },
  {
    "id": "usg-si-joint-rfa-simplicity",
    "name": "Ultrasound-Guided Radiofrequency Ablation for Chronic Sacroiliac Joint Pain (Simplicity Probe)",
    "category": "Musculoskeletal Interventions & Sports Medicine",
    "code": "MSK-SIJ-039",
    "rghsCode": "749 / 14",
    "icd10": "M46.1 (Sacroiliitis) / M53.3",
    "indications": [
      "Chronic intractable sacroiliac joint pain > 6 months failing conservative rehabilitation and steroid injections",
      "Confirmed response (>= 75% relief) to dual comparative diagnostic lateral branch blocks",
      "Patient suitable for multi-electrode strip radiofrequency neurotomy (Simplicity probe)"
    ],
    "preOpCriteria": [
      "Dual diagnostic lateral branch blocks of S1-S3 and L5 dorsal ramus with concordant temporary relief",
      "Absence of active local skin infection or bleeding diathesis",
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL"
    ],
    "hardware": [
      {
        "category": "RFA System",
        "name": "Simplicity Multi-Electrode Sacral RF Probe System",
        "spec": "Single-entry probe with multiple active electrodes creating a continuous linear strip lesion",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "RF Generator",
        "name": "Multi-Channel Radiofrequency Generator",
        "spec": "Temperature control 80-85°C",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Imaging Guidance",
        "name": "Fluoroscopy or Ultrasound System",
        "spec": "Sacral anatomy visualization",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient prone with abdomen supported on a pillow.",
      "C-arm positioned in AP projection with cephalad tilt to visualize the lateral sacral margin and S1-S4 sacral foramina.",
      "Single entry skin puncture created lateral to S4 under local anesthesia.",
      "Simplicity probe advanced cephalad along the lateral sacral groove between the dorsal sacral foramina and the sacroiliac joint line under continuous imaging.",
      "Impedance check and motor stimulation (2 Hz, 2 V) to confirm no lower limb motor nerve stimulation.",
      "Sequential thermal lesioning at 85°C for 90 seconds per electrode pair, creating a continuous strip of thermal denervation covering S1, S2, S3, and S4 lateral branches.",
      "Probe withdrawal, sterile dressing, and recovery."
    ],
    "complications": [
      "Post-procedure deafferentation aching and soreness for 1-2 weeks",
      "Skin burn if probe inserted too superficially",
      "Localized hematoma",
      "Infection (<0.1%)"
    ],
    "maayTariffInr": 38500,
    "vendorContacts": [
      "Boston Scientific / Neurotherm (+91 98293 66554)",
      "Avanos Medical (+91 98295 22119)"
    ]
  },
  {
    "id": "pvp-vertebroplasty-osteoporotic",
    "name": "Percutaneous Vertebroplasty (PVP) for Osteoporotic Vertebral Compression Fractures",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-PVP-001",
    "rghsCode": "751 / 15",
    "icd10": "M80.08 (Age-Related Osteoporosis with Current Pathological Fracture, Vertebra)",
    "indications": [
      "Severe, debilitating back pain from acute or subacute osteoporotic vertebral compression fractures (VCF, T5 to L5, duration < 6-12 weeks) failing conservative analgesia",
      "Fracture bone marrow edema demonstrated on fat-suppressed T2/STIR MRI corresponding to focal spinal tenderness",
      "Failure of conservative bed rest, bracing, and calcitonin/opioid medical management",
      "Painful non-healing vertebral collapse with pseudoarthrosis (Kümmell disease)"
    ],
    "preOpCriteria": [
      "MRI spine (sagittal T1, T2, and STIR) confirming active bone marrow edema in target vertebral body and assessing posterior cortex integrity",
      "Thin-slice CT spine ruling out retropulsed bone fragments causing spinal canal stenosis > 30% or compressive myelopathy",
      "Normal coagulation profile: INR <= 1.4, aPTT normal, Platelets >= 75,000/uL",
      "No systemic sepsis, bacteremia, or local spinal osteomyelitis/discitis"
    ],
    "hardware": [
      {
        "category": "Bone Access Needle",
        "name": "10G - 13G Beveled Vertebroplasty Cannula Kit (Osteo-Force / Jamshidi)",
        "spec": "10-15 cm length with diamond/bevel tip trocars",
        "standardStore": "SMS Ortho-Spine OT Store"
      },
      {
        "category": "Bone Cement System",
        "name": "High-Viscosity Polymethylmethacrylate (PMMA) Radiopaque Bone Cement",
        "spec": "20 g PMMA powder with liquid monomer and barium sulfate/zirconium dioxide radiopacifier",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Delivery Device",
        "name": "Threaded High-Pressure Hydraulic Injection Syringe System (1-2 mL screw syringes)",
        "spec": "High-pressure threaded injector for controlled micro-aliquots",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Imaging Guidance",
        "name": "High-Resolution Biplane or Single-Plane Digital C-Arm Fluoroscopy",
        "spec": "Continuous lateral and AP magnification",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient positioned prone on radiolucent fluoroscopy table with chest and pelvic bolsters to promote spinal extension and fracture reduction.",
      "Conscious sedation with IV Midazolam/Fentanyl and local anesthesia down to periosteum.",
      "C-arm positioned in AP projection with en-face pedicle view (\"owl eye\" appearance: pedicle centered in upper outer quadrant of vertebral body).",
      "Transpedicular (lumbar/lower thoracic) or parapedicular (mid/upper thoracic) puncture: 11G/13G trocar advanced to the anterior third of the vertebral body on lateral fluoroscopy, while remaining medial to the lateral pedicle wall and lateral to the medial pedicle wall on AP view.",
      "Preparation of PMMA bone cement: mixed to a toothpaste-like high-viscosity consistency.",
      "Under continuous, real-time high-definition lateral fluoroscopic imaging, incremental delivery of PMMA cement (0.2-0.5 mL aliquots) via threaded syringe.",
      "Immediate cessation of injection if cement approaches posterior vertebral cortex, basivertebral venous plexus, or epidural venous space.",
      "Typical cement volume: 2.5-4.5 mL for lumbar vertebrae, 1.5-3.0 mL for thoracic vertebrae, achieving bilateral trabecular interdigitation.",
      "Stylet rotated and withdrawn after cement polymerization; pressure dressing applied; patient remains flat supine for 2 hours post-procedure."
    ],
    "complications": [
      "Cement extravasation into epidural space or neural foramen causing radicular pain or spinal cord compression (<1%)",
      "Cement pulmonary embolism via prevertebral veins / azygos system (mostly asymptomatic, clinical PE < 0.5%)",
      "Transient drop in blood pressure during PMMA polymerization (monomer reaction)",
      "Subsequent adjacent-level vertebral compression fracture (10-15% over 1-2 years due to altered biomechanics)",
      "Infection / spondylodiscitis (<0.1%)"
    ],
    "maayTariffInr": 46500,
    "vendorContacts": [
      "Stryker Interventional Spine (+91 98290 88231)",
      "Medtronic Spine (+91 98291 77342)",
      "Merit Medical Spine (+91 98292 44321)"
    ]
  },
  {
    "id": "bkp-balloon-kyphoplasty",
    "name": "Percutaneous Balloon Kyphoplasty (BKP)",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-BKP-002",
    "rghsCode": "751 / 15",
    "icd10": "M80.08 (Osteoporotic Vertebral Compression Fracture with Kyphosis)",
    "indications": [
      "Painful acute/subacute vertebral compression fractures with marked loss of vertebral height and progressive kyphotic deformity",
      "Vertebral collapse in multiple myeloma or metastatic osteolytic disease with severe back pain",
      "Need for controlled void creation and height restoration with low cement leakage risk"
    ],
    "preOpCriteria": [
      "Sagittal MRI (STIR) showing hyperintense edema in compressed vertebra and intact posterior wall",
      "CT spine confirming fracture configuration and pedicle dimensions (>= 5 mm diameter for balloon sheath)",
      "Coagulation: INR <= 1.4, Platelets >= 75,000/uL"
    ],
    "hardware": [
      {
        "category": "Access Cannula Kit",
        "name": "10G - 11G BKP Introducer Sheath and Drill/Curette Kit",
        "spec": "Coaxial bone access set",
        "standardStore": "SMS Ortho-Spine OT Store"
      },
      {
        "category": "Kyphoplasty Balloon",
        "name": "Inflatable High-Pressure Bone Tamps (Kyphon / KyphX Balloon)",
        "spec": "10, 15, or 20 mm balloons rated up to 300-400 psi",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Inflation Syringe",
        "name": "Digital/Mechanical Pressure Gauge Balloon Inflator",
        "spec": "Calibrated in atmospheres/psi with contrast mixture",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Cement Delivery",
        "name": "High-Viscosity PMMA Bone Cement & Nozzle Cannulas",
        "spec": "Radio-opaque PMMA",
        "standardStore": "SMS Ortho-Spine OT Store"
      }
    ],
    "techniqueSteps": [
      "Prone positioning with bolster extension under biplane fluoroscopic monitoring.",
      "Bilateral transpedicular cannulation with 10G/11G access needles under AP and lateral guidance.",
      "Creation of working channels using hand drill and blunt curette into the anterior two-thirds of the vertebral body.",
      "Insertion of inflatable balloon tamps into each vertebral hemibody.",
      "Controlled balloon inflation using radiopaque contrast under continuous digital pressure monitoring until height restoration is achieved, balloon reaches cortical margin, or maximum pressure limit (300 psi) is reached.",
      "Deflation and withdrawal of balloons, leaving a distinct, pre-formed trabecular cavity (void) and compacted cancellous bone perimeter.",
      "Low-pressure controlled delivery of high-viscosity PMMA cement into the created cavity under continuous fluoroscopy.",
      "Delivery halted once cavity is filled, avoiding posterior or venous extravasation.",
      "Cannula removal, sterile dressing, and 2-hour flat supine bed rest."
    ],
    "complications": [
      "Balloon rupture during inflation (liquid contrast enters bone, non-toxic)",
      "Cement leakage into perivertebral veins or neural canal (<0.5%, significantly lower than PVP)",
      "Adjacent level fracture over follow-up period (8-12%)",
      "Pedicle breach or hematoma",
      "Infection (<0.1%)"
    ],
    "maayTariffInr": 58500,
    "vendorContacts": [
      "Medtronic Kyphon (+91 98291 77342)",
      "Stryker Spine (+91 98290 88231)",
      "Merit Medical Spine (+91 98292 44321)"
    ]
  },
  {
    "id": "spinejack-titanium-implant",
    "name": "Expandable Titanium Intravertebral Implant Placement (SpineJack System)",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-JACK-003",
    "rghsCode": "752 / 15",
    "icd10": "M80.08 / S32.0 (Vertebral Compression Fracture)",
    "indications": [
      "Acute, traumatic, or osteoporotic vertebral compression fractures (A1/A2 Magerl type) with significant anterior/middle column height collapse",
      "Young active patients requiring mechanical anatomical reduction and cranial-caudal height maintenance before cement stabilization",
      "Kyphotic deformity correction where balloon tamp recoils upon deflation"
    ],
    "preOpCriteria": [
      "Thin-slice CT and STIR MRI confirming intact pedicles and posterior vertebral wall integrity",
      "Evaluation of pedicle diameter (>= 5.5 mm for 5.0 mm implant, >= 6.5 mm for 5.8 mm implant)",
      "INR <= 1.4, Platelets >= 75,000/uL"
    ],
    "hardware": [
      {
        "category": "Implant System",
        "name": "SpineJack Titanium Expandable Intravertebral Device Kit",
        "spec": "4.2 mm, 5.0 mm, or 5.8 mm titanium implants (grade 5 titanium alloy)",
        "standardStore": "SMS Ortho-Spine OT Store"
      },
      {
        "category": "Deployment Tool",
        "name": "Dedicated SpineJack Expansion Instrument",
        "spec": "Mechanical screw expansion handle with digital displacement indicator",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Bone Cement",
        "name": "Coaxial High-Viscosity Radiopaque PMMA Cement Kit",
        "spec": "Specially formulated for inter-implant trabecular flow",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient prone under general or deep conscious sedation with biplane fluoroscopy.",
      "Bilateral transpedicular puncture using specialized reamer pins under strict AP and lateral views.",
      "Insertion of working cannulas and sequential reaming/broaching of bilateral intravertebral tracks.",
      "Insertion of unexpanded SpineJack titanium implants into the anterior and middle thirds of the vertebral body parallel to the superior and inferior endplates.",
      "Simultaneous, controlled mechanical expansion of both implants: the titanium wings open in a pure cranio-caudal vector, restoring collapsed endplates and directly locking vertebral height mechanically.",
      "Implants uncoupled from insertion rods, remaining permanently locked in expanded configuration.",
      "Low-pressure injection of PMMA bone cement through the cannulas to fill the implants and surrounding trabeculae.",
      "Cannula removal, skin closure with Dermabond or single suture, compressive dressing."
    ],
    "complications": [
      "Endplate perforation during expansion (rare with proper sizing)",
      "Pedicle wall micro-fracture",
      "Cement leakage (<1%)",
      "Adjacent level fracture over long term"
    ],
    "maayTariffInr": 82500,
    "vendorContacts": [
      "Stryker Spine / SpineJack Division (+91 98290 88231)",
      "Merit Medical (+91 98292 44321)"
    ]
  },
  {
    "id": "kiva-vcf-vertebral-augmentation",
    "name": "Radiofrequency-Targeted Vertebral Augmentation (Kiva VCF Treatment System)",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-KIVA-004",
    "rghsCode": "752 / 15",
    "icd10": "M80.08 (Vertebral Fracture)",
    "indications": [
      "Painful osteoporotic VCFs and pathological vertebral fractures",
      "Desire for predictable cylindrical implant deployment with structured cement containment",
      "Unipedicular approach for thoracic or lumbar fractures"
    ],
    "preOpCriteria": [
      "Pre-procedure CT/MRI assessing fracture morphology and endplate depression",
      "Normal coagulation profile"
    ],
    "hardware": [
      {
        "category": "Implant System",
        "name": "Kiva VCF Coiled PEEK-OPTIMA Implant System",
        "spec": "Nitinol guidewire and continuous coil-forming PEEK polymer implant",
        "standardStore": "SMS Ortho-Spine OT Store"
      },
      {
        "category": "Delivery Cannula",
        "name": "Unipedicular Access Sheath",
        "spec": "11G bevel sheath",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Bone Cement",
        "name": "High-Viscosity PMMA Bone Cement",
        "spec": "Low-pressure delivery",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Prone positioning under fluoroscopic guidance.",
      "Unipedicular transpedicular cannulation with Kiva access needle into anterior vertebral body.",
      "Deployment of curved nitinol guidewire creating a cylindrical helical pathway across the vertebral fracture.",
      "Advancement of the flexible PEEK-OPTIMA coiled implant over the wire, nesting into a cylindrical column.",
      "Withdrawal of guidewire, leaving the coiled cage.",
      "Injection of PMMA bone cement directly into the core of the PEEK coil, interlocking the structure.",
      "Cannula removal and recovery."
    ],
    "complications": [
      "Implant misplacement or migration during coiling",
      "Cement extravasation (<1%)",
      "Adjacent vertebral collapse"
    ],
    "maayTariffInr": 74500,
    "vendorContacts": [
      "Merit Medical Spine (+91 98292 44321)",
      "Stryker Spine (+91 98290 88231)"
    ]
  },
  {
    "id": "percutaneous-sacroplasty",
    "name": "Percutaneous Sacroplasty for Sacral Insufficiency Fractures",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-SAC-005",
    "rghsCode": "753 / 15",
    "icd10": "M84.35 (Stress / Insufficiency Fracture, Pelvis / Sacrum)",
    "indications": [
      "Severe, disabling sacral insufficiency fractures (Honda sign / H-pattern fracture of sacral ala) in elderly osteoporotic patients or post-pelvic radiotherapy",
      "Inability to walk, sit, or bear weight failing bed rest and opioids",
      "MRI STIR hyperintensity across one or both sacral alae"
    ],
    "preOpCriteria": [
      "Pelvic CT and sacral MRI confirming acute sacral fracture edema without pelvic ring gross displacement",
      "Careful planning of needle trajectories parallel to the sacroiliac joint, strictly avoiding the S1, S2, and S3 anterior and posterior sacral neural foramina",
      "Coagulation: INR <= 1.4, Platelets >= 75,000/uL"
    ],
    "hardware": [
      {
        "category": "Bone Access Needle",
        "name": "10G - 11G Bone Biopsy / Sacroplasty Trocar",
        "spec": "10-15 cm length, beveled tip",
        "standardStore": "SMS Ortho-Spine OT Store"
      },
      {
        "category": "Bone Cement",
        "name": "High-Viscosity PMMA Radiopaque Bone Cement",
        "spec": "20 g kit with extended working time",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Imaging Guidance",
        "name": "CT-Fluoroscopy or Multi-Angle C-Arm (Pelvic Inlet / Outlet views)",
        "spec": "True sacral view capability",
        "standardStore": "CT Intervention Suite"
      }
    ],
    "techniqueSteps": [
      "Patient prone with pelvic support under conscious sedation or general anesthesia.",
      "Imaging guidance: CT guidance or biplane fluoroscopy using pelvic inlet, outlet, and lateral sacral views.",
      "Aseptic preparation and deep local anesthesia down to sacral periosteum.",
      "Short-axis or long-axis (caudal-to-cranial) needle advancement: 10G/11G trocar introduced into the fractured sacral ala (lateral to sacral foramina and medial to SI joint line).",
      "Confirmation of trocar tip in the anterior-middle trabecular zone of the sacral ala on CT/lateral view.",
      "Slow, highly controlled injection of high-viscosity PMMA cement in 0.2 mL increments.",
      "Continuous monitoring to prevent anterior extravasation into the presacral retroperitoneal space or medial leakage into the sacral foramina / canal.",
      "Total volume: 3-5 mL per fractured sacral ala.",
      "Trocar removal, sterile dressing, and flat bed rest for 2 hours followed by supported mobilization."
    ],
    "complications": [
      "Cement leakage into anterior sacral foramen causing S1/S2 radiculopathy or bowel/bladder dysfunction (<1%)",
      "Extravasation into presacral space or internal iliac venous branches",
      "Transient post-procedure pain flare",
      "Infection (<0.1%)"
    ],
    "maayTariffInr": 49500,
    "vendorContacts": [
      "Stryker Spine (+91 98290 88231)",
      "Merit Medical Spine (+91 98292 44321)",
      "Medtronic (+91 98291 77342)"
    ]
  },
  {
    "id": "star-osteocool-spine-rfa-cement",
    "name": "Target Spine Tumor Radiofrequency Ablation (STAR / OsteoCool) with Cement Augmentation",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-STAR-006",
    "rghsCode": "754 / 15",
    "icd10": "C79.51 (Secondary Malignant Neoplasm of Bone / Spine Metastasis)",
    "indications": [
      "Painful osteolytic spinal metastases or primary malignant vertebral tumors refractory to radiation or chemotherapy",
      "Impending pathological vertebral collapse in metastatic disease (breast, lung, renal cell, prostate)",
      "Need for synergistic targeted thermal tumor destruction and structural stabilization (cementoplasty) in a single session"
    ],
    "preOpCriteria": [
      "Contrast-enhanced MRI and thin-slice CT spine documenting tumor dimensions, posterior cortical wall breach, and epidural extension (Bilsky score <= 1b)",
      "Minimum 10 mm safe zone between RF ablation zone and spinal thecal sac, or real-time continuous thermocouple temperature monitoring",
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL"
    ],
    "hardware": [
      {
        "category": "Spine RF System",
        "name": "Steerable / Water-Cooled Spine Tumor RF Ablation System (STAR / OsteoCool)",
        "spec": "Articulating steerable bipolar probe or dual internally cooled RF probes",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Bone Access Needle",
        "name": "10G - 11G Transpedicular Access Cannula Kit",
        "spec": "10-15 cm beveled working cannula",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Bone Cement",
        "name": "High-Viscosity PMMA Radiopaque Bone Cement",
        "spec": "Inter-trabecular polymerizing cement",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Thermocouple Sensors",
        "name": "Independent Epidural Thermocouple Temperature Probes",
        "spec": "Real-time 0.1°C temperature readout for spinal cord safety",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient prone under general anesthesia or deep conscious sedation with continuous multimodal neuro-monitoring (MEP/SSEP).",
      "CT or biplane fluoroscopy guidance: transpedicular or extrapedicular cannulation with 10G cannula into the osteolytic vertebral tumor bed.",
      "Core needle biopsy harvested for molecular tumor profiling.",
      "Deployment of the steerable STAR RF probe or OsteoCool cooled RF electrode into the tumor center.",
      "Placement of independent epidural temperature monitoring probe in the anterior epidural space (cut-off temperature set at 43°C to prevent thermal cord injury).",
      "Bipolar radiofrequency ablation delivered at controlled power (70-85°C for 10-15 minutes), creating an elliptical ablation zone tailored to tumor dimensions.",
      "Real-time temperature verification and continuous impedance tracking.",
      "Probe removed; high-viscosity PMMA bone cement injected into the newly ablated cavity under continuous fluoroscopic visualization to prevent pathological collapse.",
      "Cannula extraction, wound closure, and recovery."
    ],
    "complications": [
      "Thermal injury to spinal cord or nerve root (<0.5% with temperature monitoring)",
      "Epidural cement extravasation requiring surgical decompression (<1%)",
      "Transient post-ablation inflammatory syndrome / pain flare",
      "Vertebral body fracture if cement volume inadequate"
    ],
    "maayTariffInr": 72000,
    "vendorContacts": [
      "Medtronic OsteoCool (+91 98291 77342)",
      "Merit Medical STAR Tumor Ablation (+91 98292 44321)",
      "Stryker Spine (+91 98290 88231)"
    ]
  },
  {
    "id": "cervical-interlaminar-epidural-steroid",
    "name": "Percutaneous Cervical Interlaminar Epidural Steroid Injection",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-ESI-007",
    "rghsCode": "755 / 15",
    "icd10": "M50.1 (Cervical Disc Disorder with Radiculopathy)",
    "indications": [
      "Multilevel cervical radiculopathy, cervical central spinal canal stenosis, or post-laminectomy neck and upper extremity pain",
      "Bilateral or multilevel upper limb burning radiating pain, paresthesias, and dermatomal dysesthesia failing 6 weeks of conservative therapy",
      "Inability to tolerate transforaminal approach due to tortuous vertebral arteries"
    ],
    "preOpCriteria": [
      "Cervical MRI confirming disc herniation or canal stenosis and verifying patent dorsal epidural space (target interlaminar space strictly at C7-T1 or C6-C7, never above C6)",
      "Normal coagulation: INR <= 1.3, Platelets >= 100,000/uL; antiplatelet/anticoagulant drugs held per ASRA guidelines",
      "Absence of cervical cord myelomalacia spanning the puncture level"
    ],
    "hardware": [
      {
        "category": "Epidural Needle",
        "name": "18G - 20G Tuohy Epidural Needle with Curved Bevel",
        "spec": "3.5 inch length with 1 mm calibrated markings",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Loss of Resistance",
        "name": "Glass / Low-Friction Plastic Loss of Resistance (LOR) Syringe",
        "spec": "Saline-filled LOR syringe (air strictly avoided in cervical spine)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate Medication",
        "name": "Non-Particulate Dexamethasone Sodium Phosphate (8-10 mg) + 0.2% Ropivacaine 1.5-2.0 mL",
        "spec": "Non-particulate steroid mandatory to avoid spinal cord infarction",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Imaging Guidance",
        "name": "High-Resolution C-Arm Fluoroscopy",
        "spec": "AP, lateral, and contralateral oblique (CLO) views",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient positioned prone with chest bolster and head supported in neutral or slight flexion on radiolucent pillow.",
      "C-arm positioned in AP view to align the C7-T1 spinous processes, and Contralateral Oblique (CLO / MacCallum view, 45-50 degrees) to profile the lamina-ligamentum flavum interface.",
      "Aseptic preparation and local infiltration with 1% plain lignocaine.",
      "Tuohy needle introduced in midline or paramedian approach at C7-T1 interlaminar space.",
      "Needle advanced under CLO fluoroscopic guidance until ligamentum flavum engaged (dense rubbery resistance).",
      "Attachment of glass saline-filled LOR syringe; millimeter-by-millimeter advance until distinct, sudden loss of resistance occurs as needle enters the posterior cervical epidural space.",
      "Aspiration check: negative for blood and cerebrospinal fluid.",
      "Injection of 0.5-1.0 mL non-ionic iodinated contrast under real-time fluoroscopy demonstrating smooth epidural contrast spread (cervical epidurogram) without vascular uptake or dural sleeve filling.",
      "Slow instillation of non-particulate Dexamethasone (8-10 mg) and dilute local anesthetic (total volume <= 2.5-3.0 mL).",
      "Needle removal, compression dressing, and 30-minute neurological recovery monitoring."
    ],
    "complications": [
      "Dural puncture with post-dural puncture headache (PDPH, <0.5%)",
      "Epidural hematoma causing compressive quadriparesis (prevented by strict coagulation adherence and ASRA guidelines)",
      "Spinal cord puncture or direct cord injury if performed above C6-C7 or without CLO imaging",
      "Transient vasovagal reaction or Horner syndrome",
      "Infection / epidural abscess (<0.01%)"
    ],
    "maayTariffInr": 16500,
    "vendorContacts": [
      "B. Braun Medical India (+91 98292 66771)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "lumbar-interlaminar-epidural-steroid",
    "name": "Percutaneous Lumbar Interlaminar Epidural Steroid Injection",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-ESI-008",
    "rghsCode": "755 / 15",
    "icd10": "M54.5 (Low Back Pain) / M51.1 (Lumbar Disc Disorder with Radiculopathy)",
    "indications": [
      "Lumbar central canal stenosis, neurogenic claudication, or bilateral multilevel lumbar radiculopathy (sciatica)",
      "Lower back and bilateral buttock/leg pain failing conservative physical therapy and oral analgesics",
      "Post-lumbar decompression / fusion syndrome (failed back surgery syndrome) with recurrent stenosis"
    ],
    "preOpCriteria": [
      "Lumbar MRI confirming spinal canal stenosis or disc protrusion at target level (L3-L4, L4-L5, or L5-S1)",
      "Coagulation: INR <= 1.4, Platelets >= 80,000/uL",
      "Absence of systemic infection or local skin boils"
    ],
    "hardware": [
      {
        "category": "Epidural Needle",
        "name": "18G - 20G Tuohy Needle",
        "spec": "3.5 - 5.0 inch length",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "LOR Syringe",
        "name": "Loss of Resistance Syringe (Saline/Air)",
        "spec": "Glass/low-friction plastic",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate Medication",
        "name": "Triamcinolone 40-80 mg / Dexamethasone 8 mg + 0.25% Bupivacaine 3-5 mL",
        "spec": "Total volume 4-6 mL",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient prone with abdomen supported on pillow to reduce lumbar lordosis.",
      "C-arm positioned in AP view to align endplates and interlaminar space; lateral view for depth confirmation.",
      "Midline or paramedian approach at L4-L5 or L3-L4 under local anesthesia.",
      "Tuohy needle advanced into ligamentum flavum; loss of resistance achieved with saline.",
      "Aspiration check; injection of 1-2 mL iodinated contrast confirming longitudinal and cephalocaudal epidural spread.",
      "Slow infusion of steroid and dilute local anesthetic mixture.",
      "Needle withdrawal, dressing, and 20-minute post-procedure recovery."
    ],
    "complications": [
      "Post-dural puncture headache (1%)",
      "Transient lower extremity numbness or weakness",
      "Post-injection back soreness",
      "Epidural hematoma or abscess (very rare, <0.01%)"
    ],
    "maayTariffInr": 14500,
    "vendorContacts": [
      "B. Braun Medical (+91 98292 66771)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "lumbar-transforaminal-epidural-snrb",
    "name": "Fluoroscopy-Guided Lumbar Transforaminal Epidural Steroid Injection (Selective Nerve Root Block)",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-ESI-009",
    "rghsCode": "755 / 15",
    "icd10": "M54.16 (Radiculopathy, Lumbar Region)",
    "indications": [
      "Unilateral single-level lumbar radiculopathy (L1 to S1 sciatica) caused by foraminal or paracentral disc herniation, lateral recess stenosis, or foraminal osteophyte",
      "Targeted diagnostic root block prior to minimally invasive microdiscectomy or endoscopic spine surgery",
      "Failure of oral gabapentinoids and physical therapy"
    ],
    "preOpCriteria": [
      "Lumbar spine MRI demonstrating nerve root compression corresponding exactly to clinical dermatomal pain distribution (e.g., L5 nerve root in L4-L5 lateral recess / foraminal zone)",
      "Normal coagulation parameters (INR <= 1.4, Platelets >= 80,000/uL)",
      "Contrast allergy check"
    ],
    "hardware": [
      {
        "category": "Needle",
        "name": "22G - 25G Spinal Needle (Quincke or Chiba tip)",
        "spec": "3.5 - 5.0 inch length",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Extension Line",
        "name": "Low-Pressure Micro-Extension Set with 3-Way Stopcock",
        "spec": "Prevents needle displacement during syringe exchange",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Contrast Agent",
        "name": "Non-Ionic Iso-Osmolar Contrast (Omnipaque 240 / 300)",
        "spec": "Digital subtraction imaging compatible",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate Medication",
        "name": "Dexamethasone Sodium Phosphate 4-8 mg (Non-Particulate) + 0.5% Bupivacaine 1 mL",
        "spec": "Non-particulate steroid mandatory to avoid radicular artery thrombosis / paraplegia",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient positioned prone with a pillow under the lower abdomen.",
      "C-arm positioned in ipsilateral oblique projection (20-30 degrees) to profile the \"Scotty dog\" appearance and subpedicular \"safe triangle\" (bordered by pedicle superiorly, vertebral body anteriorly, and exiting nerve root medially).",
      "Skin marked at the inferior border of the pedicle; local anesthesia with 1% lignocaine.",
      "22G/25G needle advanced under intermittent fluoroscopic guidance toward the 6 o'clock position of the pedicle (subpedicular approach) or infraneural / retrodiscal approach.",
      "Lateral fluoroscopic view: needle tip positioned in the superior-posterior quadrant of the neural foramen.",
      "Aspiration test: absolutely negative for blood or CSF.",
      "Real-time digital subtraction angiography (DSA) fluoroscopy with 0.5-1.0 mL contrast injection: verification of smooth neurogram tracing the exiting nerve root medially into the epidural space and laterally along the nerve, with absolute exclusion of vascular run-off (artery of Adamkiewicz or radicular veins).",
      "Slow, incremental delivery of non-particulate Dexamethasone (4-8 mg) and dilute local anesthetic (total volume <= 1.5-2.0 mL).",
      "Needle removal, light dressing, and immediate dermatomal sensory mapping."
    ],
    "complications": [
      "Radicular artery spasm or thromboembolism causing anterior spinal artery syndrome / paraplegia (virtually eliminated by strictly using non-particulate Dexamethasone and live DSA contrast test)",
      "Transient motor weakness in the corresponding myotome (e.g., foot drop after L5 block, resolves in 2-4 hours)",
      "Intravascular injection requiring needle repositioning",
      "Transient paresthesias",
      "Infection (<0.01%)"
    ],
    "maayTariffInr": 16000,
    "vendorContacts": [
      "B. Braun Medical (+91 98292 66771)",
      "BD India (+91 98290 33441)",
      "GE Healthcare (+91 98291 99882)"
    ]
  },
  {
    "id": "cervical-transforaminal-epidural",
    "name": "Fluoroscopy-Guided Cervical Transforaminal Epidural Injection",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-ESI-010",
    "rghsCode": "755 / 15",
    "icd10": "M50.1 (Cervical Disc Disorder with Radiculopathy)",
    "indications": [
      "Severe intractable single-level cervical radiculopathy (C5, C6, C7, or C8) failing conservative management",
      "Foraminal disc herniation or unco-vertebral joint osteophyte compressing the exiting cervical spinal nerve"
    ],
    "preOpCriteria": [
      "Cervical MRI/CT evaluating foraminal stenosis and vertebral artery anatomical variations",
      "Strict coagulation verification (INR <= 1.3, normal aPTT, Platelets >= 100,000/uL)",
      "Non-particulate steroid (Dexamethasone) mandatory"
    ],
    "hardware": [
      {
        "category": "Needle",
        "name": "25G Spinal Needle with Extension Tubing",
        "spec": "2.5 inch length",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Contrast Media",
        "name": "Non-Ionic Contrast Media with Live Digital Subtraction Angiography (DSA)",
        "spec": "300 mg I/mL",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Steroid Solution",
        "name": "Non-Particulate Dexamethasone 4-8 mg + 0.2% Ropivacaine 0.5-1.0 mL",
        "spec": "Preservative-free",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient supine on fluoroscopy table with head slightly turned away from the affected side.",
      "C-arm positioned in ipsilateral anterior oblique projection (45-55 degrees) and slight caudal tilt to profile the cervical neural foramen.",
      "Needle directed under live fluoroscopy to the posterior aspect of the neural foramen against the superior articular process (staying posterior to avoid the vertebral and radicular arteries located in the anterior foramen).",
      "Lateral and AP views confirming needle depth.",
      "Aspiration check followed by continuous live DSA fluoroscopy with 0.5 mL contrast: confirmation of perineural spread without vertebral artery opacification.",
      "Slow injection of non-particulate Dexamethasone (4 mg) and dilute local anesthetic (total volume <= 1.5 mL).",
      "Needle removal and recovery observation."
    ],
    "complications": [
      "Vertebral artery injury / cerebellar or brainstem stroke (mitigated by posterior foraminal entry, live DSA, and non-particulate steroid)",
      "Transient Horner syndrome or hoarseness",
      "Dural puncture",
      "Infection (<0.01%)"
    ],
    "maayTariffInr": 18500,
    "vendorContacts": [
      "B. Braun Medical (+91 98292 66771)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "caudal-epidural-steroid-fluoroscopy",
    "name": "Caudal Epidural Steroid Injection with Fluoroscopic Guidance",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-ESI-011",
    "rghsCode": "755 / 15",
    "icd10": "M54.4 (Lumbago with Sciatica)",
    "indications": [
      "Low back and radiating lower extremity pain from L5-S1 disc herniation, post-laminectomy syndrome, or widespread lumbar canal stenosis",
      "Patients with prior extensive spinal fusion / instrumentation where interlaminar access is blocked",
      "Severe pain in elderly patients with difficult lumbar anatomy"
    ],
    "preOpCriteria": [
      "MRI lumbar spine / sacrum evaluating sacral hiatus patency and absence of sacral perineural (Tarlov) cysts",
      "Coagulation: INR <= 1.4, Platelets >= 80,000/uL",
      "No active pilonidal cyst, perianal sepsis, or decubitus sacral ulcer"
    ],
    "hardware": [
      {
        "category": "Epidural Needle",
        "name": "20G - 22G Tuohy or Spinal Needle",
        "spec": "2.5 - 3.5 inch length",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Contrast Media",
        "name": "Non-Ionic Contrast",
        "spec": "240-300 mg I/mL",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate Medication",
        "name": "Triamcinolone 80 mg / Dexamethasone 8 mg + 0.25% Bupivacaine 10-15 mL + Normal Saline",
        "spec": "Total volume 15-20 mL for cephalad wash",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient prone with toes pointing inward and a pillow under the pelvis.",
      "Palpation of sacral cornua and sacral hiatus under C-arm AP and lateral fluoroscopy.",
      "Aseptic preparation of natal cleft and sacral region; local anesthesia.",
      "Needle inserted at 45-degree angle to the skin through the sacrococcygeal ligament until a distinct pop is felt, then flattened to 15-20 degrees and advanced into the sacral canal below the S2 level (to avoid thecal sac).",
      "Lateral fluoroscopy verifying needle tip in the caudal epidural canal.",
      "Aspiration check (negative for blood/CSF); injection of 2-3 mL contrast demonstrating characteristic \"Christmas tree\" caudal epidurogram.",
      "Slow infusion of 15-20 mL of steroid and dilute local anesthetic mixture, propelling medication up to the lower lumbar nerve roots.",
      "Needle removal, sterile dressing, and 20-minute recovery."
    ],
    "complications": [
      "Intravascular injection into sacral venous plexus",
      "Dural puncture if needle advanced above S2",
      "Transient leg weakness or urinary retention",
      "Post-injection soreness"
    ],
    "maayTariffInr": 12500,
    "vendorContacts": [
      "B. Braun Medical (+91 98292 66771)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "lumbar-facet-joint-injection",
    "name": "Fluoroscopy-Guided Lumbar Facet Joint Intra-Articular Injection",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-FACET-012",
    "rghsCode": "756 / 15",
    "icd10": "M47.816 (Spondylosis with Radiculopathy, Lumbar) / M54.5",
    "indications": [
      "Lumbar facet syndrome: axial low back pain exacerbated by extension, rotation, and standing, radiating to buttocks and thighs",
      "Absence of neurological deficit or true radicular pain below the knee",
      "Focal facet joint arthropathy, synovitis, or capsular distension"
    ],
    "preOpCriteria": [
      "Lumbar spine radiographs/MRI showing facet hypertrophy and subchondral sclerosis",
      "Coagulation: INR <= 1.5"
    ],
    "hardware": [
      {
        "category": "Needle",
        "name": "22G - 25G Spinal Needle",
        "spec": "3.5 inch length",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Contrast",
        "name": "Non-Ionic Contrast",
        "spec": "0.5 mL",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate",
        "name": "Triamcinolone 20-40 mg + 0.5% Bupivacaine 1.0 mL",
        "spec": "Total volume <= 1.5 mL per joint",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient prone with abdominal pillow.",
      "C-arm angled obliquely (30-40 degrees) to align the target facet joint space (\"Scotty dog\" ear and front leg articulation).",
      "Local skin wheal with 1% lignocaine.",
      "Needle advanced down the x-ray beam into the posterior joint line.",
      "Arthrographic confirmation with 0.2-0.4 mL contrast outlining the facet capsule.",
      "Deposition of 1.0 mL of steroid/anesthetic mixture.",
      "Needle removal and dressing."
    ],
    "complications": [
      "Capsular rupture from overfilling",
      "Transient localized back soreness",
      "Infection (<0.02%)"
    ],
    "maayTariffInr": 12500,
    "vendorContacts": [
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "lumbar-medial-branch-block-mbb",
    "name": "Lumbar Medial Branch Block (MBB) for Facetogenic Pain",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-MBB-013",
    "rghsCode": "756 / 15",
    "icd10": "M54.5 (Low Back Pain - Facetogenic)",
    "indications": [
      "Diagnostic evaluation of suspected lumbar facetogenic pain prior to radiofrequency neurotomy",
      "Axial low back pain worsening with lumbar extension and facet loading tests",
      "Requirement of >= 80% pain relief from dual diagnostic blocks to qualify for definitive RFA"
    ],
    "preOpCriteria": [
      "Physical exam positive for Kemp test / facet loading",
      "Patient keeps an accurate pain diary for 6 hours post-injection",
      "Coagulation: INR <= 1.5"
    ],
    "hardware": [
      {
        "category": "Needle",
        "name": "22G - 25G Spinal Needles (Dual or Triple level)",
        "spec": "3.5 inch length",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Local Anesthetic",
        "name": "0.5% Bupivacaine or 2% Lignocaine",
        "spec": "0.5 mL per target nerve (strictly low volume)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Contrast",
        "name": "Non-Ionic Contrast",
        "spec": "0.2 mL per site",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient prone with abdomen supported.",
      "C-arm positioned in ipsilateral oblique projection (25-30 degrees) to profile the junction of the superior articular process (SAP) and transverse process (TP).",
      "Needle inserted to contact bone at the junction of the SAP and TP (for L1-L4 medial branches) or the junction of the sacral ala and S1 SAP (for L5 dorsal ramus).",
      "Confirmation on lateral fluoroscopy that needle tip lies at the posterior-superior edge of the transverse process.",
      "Contrast injection (0.2 mL) confirming localized bony pooling without vascular or foraminal spread.",
      "Injection of 0.5 mL local anesthetic per nerve target.",
      "Needle withdrawal, dressing, and immediate baseline pain score recording for the post-procedure diary."
    ],
    "complications": [
      "Transient back soreness",
      "Inadvertent motor block if injectate spreads into ventral ramus",
      "Infection (<0.01%)"
    ],
    "maayTariffInr": 13500,
    "vendorContacts": [
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "lumbar-facet-medial-branch-rfa",
    "name": "Lumbar Facet Medial Branch Radiofrequency Neurotomy (Rhizotomy)",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-RFA-014",
    "rghsCode": "757 / 15",
    "icd10": "M54.5 (Chronic Facetogenic Low Back Pain)",
    "indications": [
      "Chronic facetogenic low back pain > 6 months failing conservative rehabilitation",
      "Confirmed >= 80% relief following two separate diagnostic medial branch blocks (Lignocaine and Bupivacaine)",
      "Need for sustained, long-term pain relief (6-18 months) via thermal neurolysis"
    ],
    "preOpCriteria": [
      "Documented dual positive diagnostic MBB records",
      "Normal coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "Absence of implantable cardiac pacemakers/defibrillators (or cleared by cardiology for RF use)"
    ],
    "hardware": [
      {
        "category": "RF Generator",
        "name": "Multi-Lesion Radiofrequency Generator",
        "spec": "Continuous thermal RF mode with sensory/motor testing",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "RF Cannula Kit",
        "name": "20G - 22G RF Cannulas with 10 mm Active Curved Tip",
        "spec": "10-15 cm length, echogenic silicone insulated",
        "standardStore": "Central IR Store"
      },
      {
        "category": "RF Electrodes",
        "name": "Reusable / Disposable Nitinol Thermocouple Electrodes",
        "spec": "Match cannula length",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient prone under fluoroscopic guidance.",
      "Oblique and AP fluoroscopy: cannulas placed parallel to the medial branch nerves along the groove between the SAP and transverse process.",
      "Lateral view confirming cannula lying along the bony neck of the SAP.",
      "Electrophysiological testing: Sensory stimulation (50 Hz, 0.3-0.5 V) reproduces familiar back pain; Motor stimulation (2 Hz, up to 2.0 V) confirms absence of lower extremity leg twitches (sparing multifidus twitch allowed, but no L4/L5 root motor twitch).",
      "Administration of 1.0 mL 2% lignocaine for anesthesia.",
      "Thermal lesioning performed at 80-85°C for 90 seconds per nerve level.",
      "Optional second burn after rotating the curved active tip by 180 degrees to enlarge the lesion volume.",
      "Post-lesion injection of 0.5 mL 0.5% Bupivacaine and 10 mg Triamcinolone to prevent post-RFA neuritis.",
      "Cannula removal and recovery."
    ],
    "complications": [
      "Post-RFA neuritis / localized sunburn-like deafferentation back ache lasting 1-3 weeks (10-15%)",
      "Transient multifidus muscle weakness",
      "Thermal injury to spinal nerve root (prevented by strict motor testing > 2.0 V)",
      "Infection (<0.02%)"
    ],
    "maayTariffInr": 32500,
    "vendorContacts": [
      "Avanos Medical India (+91 98295 22119)",
      "Boston Scientific / Neurotherm (+91 98293 66554)",
      "Stryker Pain Management (+91 98290 88231)"
    ]
  },
  {
    "id": "cervical-medial-branch-block-rfa",
    "name": "Cervical Medial Branch Block and Radiofrequency Denervation",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-RFA-015",
    "rghsCode": "757 / 15",
    "icd10": "M53.0 (Cervicocranial Syndrome) / M54.2 (Cervicalgia)",
    "indications": [
      "Chronic cervical facet pain, cervicogenic headache (C2-C3 third occipital nerve / TON, or C3-C4), and whiplash neck pain",
      "Dual positive diagnostic cervical medial branch blocks confirming facet origin",
      "Failure of conservative physical therapy and medications"
    ],
    "preOpCriteria": [
      "Cervical MRI evaluating facet joints and ruling out instability",
      "Documented relief from comparative local anesthetic diagnostic blocks",
      "Normal coagulation profile (INR <= 1.4)"
    ],
    "hardware": [
      {
        "category": "RF Generator",
        "name": "Radiofrequency Generator",
        "spec": "Continuous thermal mode",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "RF Cannulas",
        "name": "20G - 22G RF Cannulas with 5-10 mm Active Tip",
        "spec": "5-10 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Electrodes",
        "name": "Thermocouple Electrodes",
        "spec": "Calibrated length",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient in lateral decubitus or prone position with head immobilized.",
      "Lateral fluoroscopy: identifying the rhomboid-shaped articular pillars of C3-C7.",
      "RF cannulas introduced from posterior approach parallel to the waist of the articular pillar.",
      "AP view confirming needle tip at the centroid of the pillar.",
      "Sensory stimulation (50 Hz, <0.5 V) reproduces concordant neck/headache pain; motor stimulation (2 Hz, >2 V) confirms no upper limb or diaphragm twitches.",
      "Thermal lesioning at 80°C for 90 seconds per target level.",
      "Post-lesion local anesthetic/steroid instillation.",
      "Cannula removal and recovery."
    ],
    "complications": [
      "Post-procedure neck soreness and third occipital dysesthesia (5-10%)",
      "Transient ataxia or dizziness (proprioceptive disturbance from cervical deafferentation, lasts 1-3 days)",
      "Thermal nerve root injury (<0.5%)",
      "Infection (<0.01%)"
    ],
    "maayTariffInr": 34500,
    "vendorContacts": [
      "Avanos Medical (+91 98295 22119)",
      "Boston Scientific (+91 98293 66554)"
    ]
  },
  {
    "id": "sacroiliac-cooled-rfa-lateral-branch",
    "name": "Sacroiliac Joint Cooled Radiofrequency Neurotomy (Lateral Branch RFA)",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-RFA-016",
    "rghsCode": "757 / 15",
    "icd10": "M46.1 (Sacroiliitis) / M53.3",
    "indications": [
      "Chronic intractable sacroiliac joint pain failing conservative management and intra-articular steroid injections",
      "Confirmed >= 75% relief from dual comparative diagnostic lateral branch blocks (L5 dorsal ramus and S1, S2, S3 lateral branches)",
      "Need for large-volume spherical thermal lesioning across variable sacral lateral branch nerve pathways"
    ],
    "preOpCriteria": [
      "Dual diagnostic lateral branch blocks confirming sacroiliac pain origin",
      "Normal coagulation: INR <= 1.4, Platelets >= 60,000/uL"
    ],
    "hardware": [
      {
        "category": "Cooled RF System",
        "name": "Cooled Radiofrequency Generator and Peristaltic Pump Unit",
        "spec": "Internally water-cooled RF technology (Avanos SInergy System)",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Cooled RF Probes",
        "name": "17G - 18G Cooled RF Introducer Cannulas and Probes",
        "spec": "4 mm active tip with continuous water circulation creating 8-10 mm spherical lesions",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Tubing System",
        "name": "Sterile Cooling Water Circulating Pump Tubing",
        "spec": "Peristaltic chilled saline loop",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient prone under fluoroscopic guidance.",
      "AP view with cranial tilt to visualize sacral foramina and lateral sacral margin.",
      "Cannulas placed along the lateral clock-face positions: S1 (1 o'clock, 2:30, 4 o'clock), S2 (1 o'clock, 2:30, 4 o'clock), S3 (1:30, 3 o'clock), and standard L5 dorsal ramus groove.",
      "Sensory and motor stimulation to ensure adequate distance from anterior sacral roots.",
      "Water-cooled RF lesioning delivered at 60°C set temperature (tissue heating reaching 75-80°C over an 8-10 mm spherical zone) for 150 seconds per lesion site.",
      "Overlapping spherical lesions effectively disrupt the variable arborizing sacral lateral branches.",
      "Post-lesion bupivacaine/steroid instillation; recovery."
    ],
    "complications": [
      "Post-RFA localized buttock soreness for 1-2 weeks",
      "Puncture site hematoma",
      "Skin burn if cannula placed too shallowly",
      "Infection (<0.02%)"
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Avanos Medical India (SInergy) (+91 98295 22119)",
      "Boston Scientific (+91 98293 66554)"
    ]
  },
  {
    "id": "basivertebral-nerve-ablation-intracept",
    "name": "Basivertebral Nerve Ablation (Intracept Procedure) for Vertebrogenic Chronic Low Back Pain",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-BVN-017",
    "rghsCode": "758 / 15",
    "icd10": "M54.5 (Chronic Vertebrogenic Low Back Pain) / M47.816",
    "indications": [
      "Chronic axial low back pain > 6 months failing conservative therapy",
      "Confirmed Modic Type 1 or Type 2 changes (endplate inflammation, edema, fibrovascular change) at L3 to S1 on sagittal MRI",
      "Pain exacerbated by sitting, forward bending, and lumbar loading (vertebrogenic pain transmitted via the basivertebral nerve)"
    ],
    "preOpCriteria": [
      "MRI lumbar spine (T1, T2) confirming Modic changes in adjacent vertebral endplates",
      "Failure of >= 6 months of non-operative conservative management",
      "CT spine confirming intact pedicles and determining transpedicular trajectory to basivertebral foramen (midline, 30-50% from posterior cortex)",
      "Normal coagulation parameters (INR <= 1.4, Platelets >= 75,000/uL)"
    ],
    "hardware": [
      {
        "category": "BVN Access Kit",
        "name": "Intracept Access Cannula & Curved Introducer Trocar Kit",
        "spec": "Transpedicular curved cannula creating curved bone channel",
        "standardStore": "SMS Ortho-Spine OT Store"
      },
      {
        "category": "BVN RF Probe",
        "name": "Bipolar Basivertebral Nerve Radiofrequency Probe",
        "spec": "Active bipolar tip with temperature regulation",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "RF Generator",
        "name": "Intracept Smart RF Generator Console",
        "spec": "85°C thermal ablation program (15 minutes per vertebra)",
        "standardStore": "SMS Interventional Pain Lab Store"
      }
    ],
    "techniqueSteps": [
      "Patient positioned prone under general anesthesia or deep IV sedation on radiolucent table with biplane fluoroscopy.",
      "Transpedicular access into the target vertebral body using the rigid trocar and cannula.",
      "Curved nitinol cannula deployed to drill a curved channel through the cancellous bone towards the anatomical terminus of the basivertebral nerve (located in the posterior midline, approximately 30-50% anterior to the posterior vertebral wall).",
      "Bipolar RF probe advanced into the created channel under AP and lateral fluoroscopic confirmation.",
      "Thermal ablation delivered at 85°C for 15 minutes, coagulating the trunk of the basivertebral nerve before it arborizes into the endplates.",
      "Repeat procedure on the adjacent vertebral level if Modic changes span two levels (e.g., L4-L5).",
      "Probe removed, bone wax/plug applied to pedicle canal, skin closure with Dermabond."
    ],
    "complications": [
      "Transient post-procedure back pain flare for 7-10 days",
      "Pedicle fracture or breach",
      "Thermal injury to thecal sac if probe placed too posterior (<30% from posterior wall)",
      "Infection (<0.1%)"
    ],
    "maayTariffInr": 89000,
    "vendorContacts": [
      "Boston Scientific / Relievant Medsystems (+91 98293 66554)",
      "Stryker Spine (+91 98290 88231)"
    ]
  },
  {
    "id": "percutaneous-lumbar-disc-decompression",
    "name": "Percutaneous Lumbar Disc Decompression (Mechanical Nucleoplasty / Decompressor)",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-DISC-018",
    "rghsCode": "758 / 15",
    "icd10": "M51.26 (Other Intervertebral Disc Displacement, Lumbar)",
    "indications": [
      "Contained lumbar disc herniation (protrusion < 6 mm) causing intractable lumbar radiculopathy failing conservative care > 3 months",
      "Intact posterior longitudinal ligament and absence of free disc fragment / extrusion",
      "Discogenic low back pain with concordant provocative discography"
    ],
    "preOpCriteria": [
      "MRI lumbar spine confirming contained disc protrusion with preserved disc height >= 50%",
      "Exclusion of sequestered/extruded fragments or severe central canal stenosis",
      "Coagulation: INR <= 1.4, Platelets >= 75,000/uL"
    ],
    "hardware": [
      {
        "category": "Disc Decompression Device",
        "name": "Percutaneous Mechanical Nucleotome / Decompressor / Coblation Wand",
        "spec": "17G - 19G rotating mechanical Archimedes screw or bipolar plasma coblation wand",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Introducer Cannula",
        "name": "17G - 19G Disc Access Cannula",
        "spec": "15 cm length with depth stop",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Imaging Guidance",
        "name": "Biplane C-Arm Fluoroscopy",
        "spec": "High-definition spine imaging",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient prone under local anesthesia and conscious sedation.",
      "Posterolateral oblique approach (45-55 degrees) targeting the center of the intervertebral disc (Kambin's triangle, staying anterior to superior articular process).",
      "Needle entry confirmed on AP (center of disc) and lateral (center of nucleus pulposus) views.",
      "Introduction of mechanical decompressor or coblation wand into the nucleus.",
      "Resection / vaporisation of 1-2 mL of nucleus pulposus tissue in multiple channels, reducing intradiscal pressure and allowing disc retraction.",
      "Prophylactic intradiscal antibiotic (Cefazolin 10 mg) injected.",
      "Cannula removal, dressing, and 1-hour observation."
    ],
    "complications": [
      "Discitis / intradiscal infection (<0.1%)",
      "Transient root irritation",
      "Incomplete symptom relief requiring microdiscectomy",
      "Post-procedure back ache"
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Stryker Spine (+91 98290 88231)",
      "Smith & Nephew / ArthroCare (+91 98292 33445)"
    ]
  },
  {
    "id": "intradiscal-ozone-chemonucleolysis",
    "name": "Percutaneous Intradiscal Ozone-Oxygen (O2-O3) Chemonucleolysis",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-DISC-019",
    "rghsCode": "758 / 15",
    "icd10": "M51.26 (Lumbar Disc Displacement)",
    "indications": [
      "Contained lumbar disc herniation with radicular pain unresponsive to conservative treatments",
      "Chemical disc volume reduction and anti-inflammatory cytokine breakdown without surgical trauma"
    ],
    "preOpCriteria": [
      "MRI lumbar spine showing contained disc herniation",
      "Normal G6PD enzyme levels (relative contraindication for ozone therapy if deficient)",
      "INR <= 1.4"
    ],
    "hardware": [
      {
        "category": "Ozone Generator",
        "name": "Medical-Grade Ozone Generator",
        "spec": "Calibrated O2-O3 concentration (27-30 mcg/mL)",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Chiba Needle",
        "name": "21G - 22G Chiba Needle",
        "spec": "15-20 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Ozone-Resistant Syringes",
        "name": "Polycarbonate / Siliconized Glass Syringes",
        "spec": "Ozone-compatible Luer-lock",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient prone under local anesthesia.",
      "Fluoroscopy-guided posterolateral transforaminal puncture into the center of the target intervertebral disc.",
      "Generation of fresh O2-O3 mixture at 28 mcg/mL concentration immediately before injection.",
      "Intradiscal slow infusion of 5-8 mL of O2-O3 mixture.",
      "Needle withdrawn into the periradicular epidural space; additional 5-10 mL O2-O3 injected around the exiting nerve root.",
      "Needle removal, compression dressing, and recovery."
    ],
    "complications": [
      "Transient fullness sensation in back",
      "Discitis (<0.05%)",
      "Nerve root injury"
    ],
    "maayTariffInr": 18500,
    "vendorContacts": [
      "Sedecal Medical Ozone (+91 98293 77661)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "fluro-celiac-plexus-block-neurolysis",
    "name": "Fluoroscopy-Guided Celiac Plexus Block / Neurolysis (Retrocrural / Transaortic Technique)",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-NEURO-020",
    "rghsCode": "759 / 15",
    "icd10": "C25.9 (Malignant Neoplasm of Pancreas) / R10.13 (Epigastric Pain)",
    "indications": [
      "Severe, intractable upper abdominal pain from inoperable pancreatic cancer, gastric cancer, or chronic calcific pancreatitis",
      "High opioid consumption causing disabling constipation, nausea, and sedation",
      "Neurolytic destruction of celiac plexus to provide long-lasting visceral analgesia"
    ],
    "preOpCriteria": [
      "Abdominal CT/MRI mapping celiac axis, retroperitoneal tumor infiltration, and aortic calcification",
      "Adequate pre-procedure hydration (500-1000 mL normal saline IV to prevent severe hypotension)",
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL"
    ],
    "hardware": [
      {
        "category": "Needle Kit",
        "name": "20G - 22G Chiba Needles (Bilateral set)",
        "spec": "15 cm length, calibrated markings",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Neurolytic Agent",
        "name": "Dehydrated Absolute Alcohol (100% Ethanol) or 8-10% Phenol",
        "spec": "20-40 mL total volume",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Contrast Media",
        "name": "Non-Ionic Contrast",
        "spec": "For pre-neurolytic spread verification",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient positioned prone with abdominal pillow under biplane fluoroscopy or CT guidance.",
      "C-arm positioned in AP and 15-20 degree ipsilateral oblique views targeting the body of L1/T12.",
      "Bilateral retrocrural or transaortic needle advancement: 20G Chiba needle inserted 7-9 cm lateral to midline below the 12th rib, angled toward the anterolateral surface of the L1 vertebral body.",
      "Transaortic approach (left-sided): needle traverses the aorta until a \"give\" is felt and pulsatile blood stops as the needle exits anterior aortic wall into the celiac ganglionic bed.",
      "Aspiration check: negative for blood, urine, or CSF.",
      "Contrast injection (3-5 mL) showing smooth anterolateral pre-aortic crescentic spread outlining the celiac axis, with no vascular uptake or posterior somatic spread.",
      "Diagnostic test with 5 mL 1% lignocaine.",
      "Injection of 20-30 mL of absolute alcohol mixed with 2 mL bupivacaine.",
      "Needle flushed with 1 mL saline before withdrawal to prevent cutaneous alcohol track necrosis.",
      "Post-procedure monitoring: IV fluid hydration for post-sympathectomy orthostatic hypotension."
    ],
    "complications": [
      "Orthostatic hypotension (common, transient due to splanchnic vasodilation, treated with IV fluids)",
      "Transient diarrhea and abdominal cramping for 24-72 hours (unopposed parasympathetic tone)",
      "Retroperitoneal hematoma or aortic puncture bleeding (<1%)",
      "Paraplegia from anterior spinal artery (Adamkiewicz) injury (<0.1%, prevented by strict contrast verification and non-particulate/non-somatosensory spread)",
      "Pneumothorax if entered above 12th rib"
    ],
    "maayTariffInr": 28500,
    "vendorContacts": [
      "BD India (+91 98290 33441)",
      "GE Healthcare (+91 98291 99882)"
    ]
  },
  {
    "id": "fluro-splanchnic-nerve-rfa",
    "name": "Fluoroscopy-Guided Splanchnic Nerve Radiofrequency Neurolysis",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-NEURO-021",
    "rghsCode": "759 / 15",
    "icd10": "C25.9 (Pancreatic Cancer) / K86.0 (Chronic Pancreatitis)",
    "indications": [
      "Intractable upper abdominal cancer pain or chronic pancreatitis where celiac plexus anatomy is distorted by tumor/lymphadenopathy",
      "Targeted thoracic splanchnic nerve ablation (greater, lesser, least splanchnic nerves) at T10-T11"
    ],
    "preOpCriteria": [
      "CT abdomen/thorax defining lower thoracic spine and pleural reflection",
      "INR <= 1.4, Platelets >= 60,000/uL",
      "Pre-procedure IV hydration"
    ],
    "hardware": [
      {
        "category": "RF Generator",
        "name": "Radiofrequency Generator",
        "spec": "Thermal lesioning mode",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "RF Cannula",
        "name": "20G - 22G RF Cannula with 10 mm Active Tip",
        "spec": "15 cm length, curved tip",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Thermocouple Probe",
        "name": "RF Electrode Probe",
        "spec": "15 cm length",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient prone under fluoroscopic guidance.",
      "AP and lateral fluoroscopy targeting the junction of the anterior third and posterior two-thirds of the T10 and T11 vertebral bodies.",
      "Cannulas placed bilaterally hugging the lateral vertebral body, remaining medial to the pleural reflection.",
      "Sensory stimulation (50 Hz) reproduces deep epigastric sensation; motor stimulation (2 Hz) confirms absence of intercostal muscle contraction.",
      "Thermal RF lesioning performed at 80°C for 90 seconds bilaterally.",
      "Cannula removal, dressing, and observation."
    ],
    "complications": [
      "Pneumothorax (<1%, monitored on chest fluoroscopy)",
      "Orthostatic hypotension and diarrhea",
      "Intercostal neuralgia"
    ],
    "maayTariffInr": 34500,
    "vendorContacts": [
      "Avanos Medical (+91 98295 22119)",
      "Boston Scientific (+91 98293 66554)"
    ]
  },
  {
    "id": "fluro-superior-hypogastric-plexus-neurolysis",
    "name": "Fluoroscopy-Guided Superior Hypogastric Plexus Block / Chemical Neurolysis",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-NEURO-022",
    "rghsCode": "759 / 15",
    "icd10": "C53.9 (Cervical Cancer) / C67.9 (Bladder Cancer) / R10.2 (Pelvic Pain)",
    "indications": [
      "Intractable pelvic pain from advanced gynecological (cervical, ovarian, uterine), colorectal, or bladder malignancies",
      "Severe endometriosis or chronic non-malignant pelvic pain syndrome failing medical therapy"
    ],
    "preOpCriteria": [
      "Pelvic CT/MRI assessing L5-S1 vertebral anatomy and iliac vessels bifurcation",
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL"
    ],
    "hardware": [
      {
        "category": "Chiba Needles",
        "name": "20G - 22G Chiba Needles (Bilateral)",
        "spec": "15 cm length",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Neurolytic Agent",
        "name": "Absolute Alcohol (100% Ethanol) or 6-8% Aqueous Phenol",
        "spec": "15-20 mL total volume",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Contrast Media",
        "name": "Non-Ionic Contrast",
        "spec": "For retroperitoneal spread verification",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient prone with pelvic support.",
      "C-arm positioned in AP and 15-20 degree oblique views targeting the L5-S1 junction.",
      "Bilateral needle insertion 5-7 cm lateral to midline, advanced across the iliac crest towards the anterolateral aspect of the L5 vertebral body / upper sacral promontory.",
      "Lateral fluoroscopy confirms needle tip anterior to the L5-S1 disc space.",
      "Aspiration check (negative for blood from iliac vessels); contrast injection (2-3 mL) showing smooth vertical retroperitoneal spread in the pre-vertebral space without vascular uptake.",
      "Injection of 15-20 mL of absolute alcohol or phenol.",
      "Needle removal and recovery."
    ],
    "complications": [
      "Iliac vessel puncture / hematoma (<1%)",
      "Transient bladder or bowel dysfunction",
      "L5 nerve root irritation",
      "Infection (<0.02%)"
    ],
    "maayTariffInr": 29500,
    "vendorContacts": [
      "BD India (+91 98290 33441)",
      "GE Healthcare (+91 98291 99882)"
    ]
  },
  {
    "id": "fluro-ganglion-impar-neurolysis",
    "name": "Fluoroscopy-Guided Ganglion Impar (Walther) Neurolysis for Intractable Perineal Pain",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-NEURO-023",
    "rghsCode": "759 / 15",
    "icd10": "C21.0 (Anorectal Carcinoma) / R10.2 (Perineal Pain)",
    "indications": [
      "Intractable burning perineal, perianal, rectal, or coccygeal pain from advanced anorectal, vulvar, or prostate cancer",
      "Severe coccydynia refractory to local injections and physical therapy",
      "Sympathetic-mediated chronic pelvic/perineal visceral pain"
    ],
    "preOpCriteria": [
      "Pelvic CT/MRI checking sacrococcygeal anatomy and tumor involvement",
      "Normal coagulation profile"
    ],
    "hardware": [
      {
        "category": "Needle",
        "name": "22G - 25G Spinal Needle (Trans-sacrococcygeal approach)",
        "spec": "2.5 - 3.5 inch length",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Neurolytic Solution",
        "name": "Absolute Alcohol (100%) or 6% Phenol in Saline",
        "spec": "4-6 mL total volume",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Contrast",
        "name": "Non-Ionic Contrast",
        "spec": "1-2 mL",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient prone with a pillow under the pelvis and legs slightly abducted.",
      "True lateral fluoroscopy of the sacrococcygeal junction.",
      "Trans-sacrococcygeal ligament approach: needle advanced through the sacrococcygeal joint disc space under lateral fluoroscopy until the tip emerges just anterior to the ventral sacrococcygeal ligament (retro-rectal space).",
      "Aspiration check; injection of 1 mL contrast showing characteristic comma-shaped or linear collection anterior to the coccyx, with no rectal mucosal entry.",
      "Injection of 4-6 mL absolute alcohol or phenol.",
      "Needle removal and recovery."
    ],
    "complications": [
      "Rectal puncture (prevented by strict lateral fluoroscopy and contrast check)",
      "Transient worsening of perineal pain",
      "Fecal or urinary incontinence (extremely rare with correct retro-rectal placement)",
      "Infection (<0.1%)"
    ],
    "maayTariffInr": 26500,
    "vendorContacts": [
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "lumbar-sympathetic-block-rfa",
    "name": "Lumbar Sympathetic Ganglion Block / Radiofrequency Neurolysis",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-NEURO-024",
    "rghsCode": "759 / 15",
    "icd10": "G90.52 (Complex Regional Pain Syndrome Type I of Lower Limb) / I73.9",
    "indications": [
      "Complex Regional Pain Syndrome (CRPS Type I/II) of the lower extremity",
      "Inoperable lower extremity critical limb ischemia with non-reconstructible peripheral vascular disease (phantom limb pain, Buerger disease / TAO)",
      "Intractable frostbite or vasospastic lower extremity disorder"
    ],
    "preOpCriteria": [
      "Doppler / ABI documentation of lower extremity perfusion",
      "Skin temperature measurement (demonstrating cold extremity)",
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL"
    ],
    "hardware": [
      {
        "category": "Cannula Kit",
        "name": "20G - 22G RF Cannulas with 10 mm Active Tip",
        "spec": "15 cm length",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "RF Generator",
        "name": "Radiofrequency Generator Unit",
        "spec": "Thermal lesioning mode",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Skin Thermometer",
        "name": "Dual-Channel Digital Surface Skin Thermometer",
        "spec": "Real-time temperature verification (>1.5-2°C rise)",
        "standardStore": "SMS Interventional Pain Lab Store"
      }
    ],
    "techniqueSteps": [
      "Patient prone under fluoroscopic guidance with skin temperature sensors on both feet.",
      "Oblique C-arm view (15-20 degrees) targeting the anterolateral aspect of the L2 and L3 vertebral bodies.",
      "Cannula advanced to contact the anterolateral margin of the vertebral body on lateral fluoroscopy.",
      "Contrast injection (1-2 mL) showing linear prevertebral fascial spread.",
      "Sensory and motor stimulation to exclude somatic nerve root stimulation.",
      "Thermal RFA delivered at 80°C for 90 seconds (or 10 mL chemical neurolysis with phenol).",
      "Real-time confirmation of a >= 1.5-2.0°C temperature increase in the ipsilateral foot confirming successful sympatholysis.",
      "Cannula removal and recovery."
    ],
    "complications": [
      "Post-sympathectomy genitofemoral neuralgia (groin/thigh burning pain, 5-10%, usually self-limiting)",
      "Retroperitoneal hematoma",
      "Psoas muscle hematoma",
      "Inadvertent somatic nerve block"
    ],
    "maayTariffInr": 32000,
    "vendorContacts": [
      "Avanos Medical (+91 98295 22119)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "stellate-ganglion-block",
    "name": "Stellate Ganglion Block (Ultrasound / Fluoroscopy Guided)",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-SGB-025",
    "rghsCode": "759 / 15",
    "icd10": "G90.51 (Complex Regional Pain Syndrome Type I of Upper Limb)",
    "indications": [
      "Complex Regional Pain Syndrome (CRPS Type I/II) of the upper extremity or head and neck",
      "Refractory Raynaud's disease, upper extremity vascular insufficiency, or post-herpetic neuralgia of the face/arm",
      "Refractory ventricular electrical storm / ventricular tachycardia resistant to ablation",
      "Post-Traumatic Stress Disorder (PTSD) refractory to psychotherapy"
    ],
    "preOpCriteria": [
      "High-resolution ultrasound assessing cervical anatomy at C6 level (Chassaignac tubercle, carotid artery, internal jugular vein, thyroid gland, and vertebral artery)",
      "Coagulation: INR <= 1.3, Platelets >= 80,000/uL"
    ],
    "hardware": [
      {
        "category": "Ultrasound System",
        "name": "High-Frequency Linear Probe (10-15 MHz)",
        "spec": "Vascular/musculoskeletal preset",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Needle",
        "name": "22G - 25G Needle",
        "spec": "1.5 - 2.5 inch length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Injectate Medication",
        "name": "0.25% Bupivacaine or 0.5% Ropivacaine (4-6 mL)",
        "spec": "Low volume to prevent recurrent laryngeal or phrenic block",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient supine with neck slightly extended and mouth slightly open to relax cervical musculature.",
      "Ultrasound placed transversely at C6 level identifying the anterior tubercle of C6 transverse process (Chassaignac's tubercle), longus colli muscle, prevertebral fascia, carotid sheath, and vertebral artery in foramen transversarium.",
      "Needle advanced in-plane from lateral to medial, passing deep to the carotid artery towards the prevertebral fascia overlying the longus colli muscle.",
      "Needle tip positioned deep to the prevertebral fascia and superficial to the longus colli.",
      "Aspiration check; test dose of 0.5 mL local anesthetic under live ultrasound (ensuring no subfascial or vascular expansion).",
      "Injection of 4-6 mL local anesthetic, watching fluid track caudally toward C7-T1.",
      "Needle removal; patient assessed for Horner's syndrome (ptosis, miosis, anhidrosis, enophthalmos, conjunctival injection) and ipsilateral arm warming within 5-10 minutes."
    ],
    "complications": [
      "Intra-arterial injection into vertebral artery (causes immediate grand mal seizure, avoided by US Doppler and aspiration)",
      "Recurrent laryngeal nerve block (hoarseness of voice, temporary for 2-4 hours)",
      "Phrenic nerve block (hemidiaphragmatic paresis, caution in severe COPD)",
      "Epidural / intrathecal injection (<0.01%)"
    ],
    "maayTariffInr": 16500,
    "vendorContacts": [
      "GE Healthcare (+91 98291 99882)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "genicular-nerve-diagnostic-block",
    "name": "Genicular Nerve Diagnostic Block",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-GEN-026",
    "rghsCode": "760 / 15",
    "icd10": "M17.1 (Knee Osteoarthritis - Intractable Pain)",
    "indications": [
      "Severe chronic knee osteoarthritis pain in patients who have failed conservative treatment or total knee arthroplasty candidates unfit for surgery",
      "Diagnostic prognostic test prior to genicular nerve radiofrequency ablation (RFA)"
    ],
    "preOpCriteria": [
      "Baseline pain score >= 6/10 on walking",
      "Normal coagulation profile"
    ],
    "hardware": [
      {
        "category": "Needle Kit",
        "name": "22G - 25G Spinal Needles (3 needles)",
        "spec": "2.5 - 3.5 inch length",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Local Anesthetic",
        "name": "0.5% Bupivacaine or 1% Lignocaine",
        "spec": "1 mL per nerve target (SLGN, SMGN, IMGN)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Imaging Guidance",
        "name": "Ultrasound or Fluoroscopy System",
        "spec": "Knee osseous landmarks",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient supine with a small bolster under the popliteal fossa.",
      "Fluoroscopy or ultrasound guidance targeting three sensory genicular nerves:",
      "1. Superior Lateral Genicular Nerve (SLGN): junction of femoral shaft and lateral epicondyle.",
      "2. Superior Medial Genicular Nerve (SMGN): junction of femoral shaft and medial epicondyle.",
      "3. Inferior Medial Genicular Nerve (IMGN): junction of tibial shaft and medial epicondyle.",
      "Needles placed at the osseous-periosteal junction of each target landmark.",
      "Injection of 0.8-1.0 mL local anesthetic per site.",
      "Needles removed, and patient immediately tested with walking/weight-bearing to record percentage pain reduction."
    ],
    "complications": [
      "Puncture site bruising",
      "Transient numbness or motor weakness (rare, if injected into peroneal nerve)",
      "Post-injection soreness"
    ],
    "maayTariffInr": 12500,
    "vendorContacts": [
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "genicular-nerve-cooled-rfa",
    "name": "Genicular Nerve Cooled Radiofrequency Ablation for Chronic Knee Pain",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-GEN-027",
    "rghsCode": "760 / 15",
    "icd10": "M17.1 (Knee Osteoarthritis) / M25.561",
    "indications": [
      "Chronic intractable knee osteoarthritis pain failing conservative therapy",
      "Persistent pain following total knee arthroplasty (post-TKA pain syndrome)",
      "Confirmed >= 50-80% pain relief from diagnostic genicular nerve block"
    ],
    "preOpCriteria": [
      "Positive response to prior genicular nerve diagnostic block",
      "INR <= 1.4, Platelets >= 60,000/uL"
    ],
    "hardware": [
      {
        "category": "Cooled RF System",
        "name": "Cooled Radiofrequency Generator Unit (COOLIEF)",
        "spec": "Internally cooled water circulating system",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Cooled RF Probes",
        "name": "17G - 18G Cooled RF Introducer Cannulas and Probes",
        "spec": "4 mm active tip creating 8-10 mm spherical ablation zones",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient supine under fluoroscopic or ultrasound guidance.",
      "Placement of three cooled RF cannulas at SLGN, SMGN, and IMGN bony landmarks.",
      "Sensory and motor stimulation: 50 Hz sensory stimulation produces local knee ache; 2 Hz motor stimulation up to 2.0 V confirms no peroneal motor twitch (no ankle dorsiflexion).",
      "Local anesthetic injection (1 mL 2% lignocaine) through each cannula.",
      "Cooled radiofrequency ablation delivered at 60°C set temperature for 150 seconds per nerve.",
      "Cannulas removed, dressing, and recovery."
    ],
    "complications": [
      "Post-procedural knee soreness for 1-2 weeks",
      "Skin burn if cannula placed too shallowly",
      "Puncture site hematoma",
      "Infection (<0.02%)"
    ],
    "maayTariffInr": 44000,
    "vendorContacts": [
      "Avanos Medical COOLIEF (+91 98295 22119)",
      "Boston Scientific (+91 98293 66554)"
    ]
  },
  {
    "id": "genicular-nerve-pulsed-rfa",
    "name": "Genicular Nerve Conventional / Pulsed Radiofrequency Neurotomy",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-GEN-028",
    "rghsCode": "760 / 15",
    "icd10": "M17.1 (Knee Osteoarthritis)",
    "indications": [
      "Knee osteoarthritis pain in patients where thermal ablation is preferred with conventional or pulsed RF",
      "Non-destructive neuromodulation using pulsed radiofrequency"
    ],
    "preOpCriteria": [
      "Positive diagnostic genicular block"
    ],
    "hardware": [
      {
        "category": "RF Generator",
        "name": "Standard RF Generator",
        "spec": "Pulsed and continuous RF modes",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "RF Cannula",
        "name": "20G - 22G RF Cannulas with 10 mm Active Tip",
        "spec": "10 cm length",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient supine under fluoroscopy or ultrasound.",
      "Cannulas placed at SLGN, SMGN, and IMGN sites.",
      "Pulsed RF delivered at 42°C for 240 seconds per site (or thermal RF 80°C for 90 s).",
      "Cannulas removed, dressing applied."
    ],
    "complications": [
      "Mild post-procedure soreness",
      "Bruising"
    ],
    "maayTariffInr": 31000,
    "vendorContacts": [
      "Avanos Medical (+91 98295 22119)",
      "Stryker (+91 98290 88231)"
    ]
  },
  {
    "id": "occipital-nerve-block-pulsed-rf",
    "name": "Occipital Nerve Block and Pulsed Radiofrequency",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-OCC-029",
    "rghsCode": "761 / 15",
    "icd10": "G44.847 (Occipital Neuralgia) / G43.9 (Migraine)",
    "indications": [
      "Occipital neuralgia, cervicogenic headache, or chronic refractory migraine with tenderness over greater and lesser occipital nerves",
      "Paroxysmal stabbing or burning pain originating in the suboccipital region and radiating to the vertex"
    ],
    "preOpCriteria": [
      "Positive Tinel sign over superior nuchal line at greater occipital nerve (GON) course",
      "Brain and cervical spine imaging ruling out posterior fossa or craniocervical junction mass lesions"
    ],
    "hardware": [
      {
        "category": "Ultrasound System",
        "name": "High-Frequency Linear Transducer (12-18 MHz)",
        "spec": "Sterile cover",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "RF Cannula",
        "name": "22G RF Cannula with 5 mm Active Tip",
        "spec": "5-7 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "RF Unit",
        "name": "Radiofrequency Generator",
        "spec": "Pulsed RF mode (42°C, 2 Hz, 20 ms pulses)",
        "standardStore": "SMS Interventional Pain Lab Store"
      }
    ],
    "techniqueSteps": [
      "Patient prone or seated with head flexed.",
      "Ultrasound placed transversely over C2 level identifying the bifid spinous process of C2, obliquus capitis inferior (OCI) muscle, and the greater occipital nerve coursing between OCI and semispinalis capitis.",
      "Local anesthesia infiltration.",
      "Needle/cannula advanced in-plane towards the nerve.",
      "Pulsed radiofrequency neuromodulation delivered at 42°C for 240-360 seconds.",
      "Followed by instillation of 2 mL 0.25% bupivacaine and 20 mg triamcinolone.",
      "Cannula removal and recovery."
    ],
    "complications": [
      "Scalp numbness or dysesthesia",
      "Occipital artery puncture / hematoma",
      "Dizziness / vasovagal reaction"
    ],
    "maayTariffInr": 18500,
    "vendorContacts": [
      "Avanos Medical (+91 98295 22119)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "pudendal-nerve-block-pulsed-rf",
    "name": "Pudendal Nerve Block / Pulsed Radiofrequency Neurotomy",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-PUD-030",
    "rghsCode": "761 / 15",
    "icd10": "G57.8 (Other Mononeuropathies of Lower Limb / Pudendal Neuralgia)",
    "indications": [
      "Pudendal neuralgia (Alcock canal syndrome) with burning perineal, scrotal/vulvar, and rectal pain exacerbated by sitting (Nantes criteria positive)",
      "Failed conservative medications and pelvic floor physical therapy"
    ],
    "preOpCriteria": [
      "Clinical evaluation meeting Nantes criteria (pain in territory of pudendal nerve, worsened by sitting, no night pain, no sensory loss, positive block)",
      "Normal coagulation parameters"
    ],
    "hardware": [
      {
        "category": "Ultrasound System",
        "name": "Curved Array (2-5 MHz) or Linear Probe",
        "spec": "Deep transgluteal imaging",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "RF Cannula",
        "name": "20G - 22G RF Cannula with 5-10 mm Active Tip",
        "spec": "10-15 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "RF Generator",
        "name": "Radiofrequency Generator (Pulsed RF mode)",
        "spec": "42°C pulsed RF",
        "standardStore": "SMS Interventional Pain Lab Store"
      }
    ],
    "techniqueSteps": [
      "Patient prone under ultrasound or fluoroscopic guidance.",
      "Transgluteal ultrasound approach: probe placed obliquely over the ischial spine identifying the sacrospinous and sacrotuberous ligaments, internal pudendal artery, and pudendal nerve.",
      "Cannula advanced in-plane between the sacrospinous and sacrotuberous ligaments into the pudendal canal.",
      "Sensory stimulation (50 Hz, 0.3-0.5 V) reproduces paresthesias in the perineum/genitalia.",
      "Pulsed RF applied at 42°C for 240 seconds.",
      "Injection of 3 mL 0.25% bupivacaine and 20 mg triamcinolone.",
      "Cannula removed and dressing applied."
    ],
    "complications": [
      "Transient perineal or leg numbness",
      "Pudendal artery puncture / hematoma",
      "Infection (<0.05%)"
    ],
    "maayTariffInr": 24500,
    "vendorContacts": [
      "Avanos Medical (+91 98295 22119)",
      "GE Healthcare (+91 98291 99882)"
    ]
  },
  {
    "id": "targeted-epidural-blood-patch-sih",
    "name": "Targeted Epidural Blood Patch (Fluoroscopy / CT Guided) for Spontaneous Intracranial Hypotension",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-EBP-031",
    "rghsCode": "762 / 15",
    "icd10": "G97.0 (Postprocedural CSF Leak) / G96.0 (Cerebrospinal Fluid Leak)",
    "indications": [
      "Severe, disabling orthostatic headache from Spontaneous Intracranial Hypotension (SIH) or post-dural puncture CSF leak",
      "MRI brain showing pachymeningeal enhancement, subdural fluid collections, and brain sag (Bern score positive)",
      "Failure of non-targeted lumbar blood patches and conservative hydration/caffeine"
    ],
    "preOpCriteria": [
      "Dynamic CT myelography or intrathecal gadolinium MR myelography localizing exact CSF leak site (ventral thoracic dural tear or CSF-venous fistula)",
      "Coagulation: INR <= 1.3, Platelets >= 100,000/uL",
      "Strict asepsis"
    ],
    "hardware": [
      {
        "category": "Imaging Guidance",
        "name": "Multi-Slice CT or C-Arm Fluoroscopy",
        "spec": "Sub-millimeter slice reconstruction",
        "standardStore": "CT Intervention Suite"
      },
      {
        "category": "Epidural Needle",
        "name": "18G - 20G Tuohy Needle",
        "spec": "3.5 - 5.0 inch length",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Autologous Blood Set",
        "name": "Aseptic Venipuncture Kit with 20 mL Syringe",
        "spec": "For fresh autologous blood draw",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient prone under CT or fluoroscopic guidance.",
      "Tuohy needle placed into the epidural space directly at the target spinal level of the confirmed CSF leak (often thoracic or cervicothoracic junction).",
      "Loss of resistance confirmed with saline; small contrast test (0.5 mL) showing epidural layering without intrathecal entry.",
      "Simultaneous sterile venipuncture: 15-20 mL of fresh autologous non-anticoagulated blood drawn from patient's antecubital vein.",
      "Immediate slow injection of autologous blood through Tuohy needle into the target epidural space.",
      "Injection halted if patient reports severe interscapular or radicular pressure pain.",
      "Needle removed, patient maintained strictly flat supine for 4 hours to allow blood clotting over the dural defect."
    ],
    "complications": [
      "Transient rebound intracranial hypertension (treated with acetazolamide)",
      "Local back or neck tightness",
      "Accidental dural re-puncture",
      "Infection (<0.01%)"
    ],
    "maayTariffInr": 22500,
    "vendorContacts": [
      "B. Braun Medical (+91 98292 66771)",
      "BD India (+91 98290 33441)"
    ]
  },
  {
    "id": "trigeminal-glycerol-rhizotomy",
    "name": "CT-Guided Percutaneous Trigeminal Ganglion (Gasserian) Glycerol Rhizotomy",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-TRIG-032",
    "rghsCode": "763 / 15",
    "icd10": "G50.0 (Trigeminal Neuralgia)",
    "indications": [
      "Intractable classical trigeminal neuralgia (V1, V2, or V3 territory) refractory to carbamazepine/oxcarbazepine",
      "Elderly or high-risk surgical patients unfit for microvascular decompression (MVD)",
      "Recurrent trigeminal neuralgia post-surgery or post-stereotactic radiosurgery"
    ],
    "preOpCriteria": [
      "High-resolution MRI CISS/FIESTA ruling out epidermoid or acoustic neuroma and identifying neurovascular contact",
      "Coagulation: INR <= 1.3, Platelets >= 80,000/uL"
    ],
    "hardware": [
      {
        "category": "Imaging Guidance",
        "name": "High-Resolution Multi-Slice CT Scanner",
        "spec": "Multi-planar skull base reconstruction",
        "standardStore": "CT Intervention Suite"
      },
      {
        "category": "Needle Kit",
        "name": "20G - 22G Spinal / Hartel Needle",
        "spec": "10 cm length with stylet",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "Neurolytic Solution",
        "name": "Sterile Anhydrous Glycerol (99.9%)",
        "spec": "0.2-0.5 mL ampoule",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Patient supine on CT table under local anesthesia and light sedation.",
      "Hartel approach: needle entry point 2.5-3.0 cm lateral to the oral commissure.",
      "Needle trajectory aligned with intersection of pupil (looking straight ahead) and external auditory meatus.",
      "CT-guided navigation through the foramen ovale into Meckel's cave and trigeminal cistern.",
      "CSF aspiration from the trigeminal cistern confirms placement.",
      "Patient seated upright; slow instillation of 0.2-0.4 mL of sterile anhydrous glycerol into the trigeminal cistern.",
      "Patient kept seated with head flexed for 2 hours to allow glycerol to pool around the trigeminal retrogasserian fibers.",
      "Recovery and facial sensation monitoring."
    ],
    "complications": [
      "Facial hypesthesia or numbness (expected, mild)",
      "Corneal numbness (rare with glycerol compared to RF)",
      "Cheek hematoma",
      "Masticatory muscle weakness",
      "Herpes simplex reactivation"
    ],
    "maayTariffInr": 36000,
    "vendorContacts": [
      "BD India (+91 98290 33441)",
      "GE Healthcare (+91 98291 99882)"
    ]
  },
  {
    "id": "trigeminal-balloon-compression",
    "name": "CT-Guided Percutaneous Trigeminal Balloon Compression",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-TRIG-033",
    "rghsCode": "763 / 15",
    "icd10": "G50.0 (Trigeminal Neuralgia)",
    "indications": [
      "Severe, refractory trigeminal neuralgia, particularly with prominent V1 involvement (low corneal anesthesia risk)",
      "Patients with multiple sclerosis-associated trigeminal neuralgia",
      "Failed prior medical therapy and glycerol rhizotomy"
    ],
    "preOpCriteria": [
      "Thin-slice skull base CT defining foramen ovale diameter and orientation",
      "Patient under brief general anesthesia (with endotracheal intubation) due to severe trigeminal depressor response during balloon inflation",
      "Coagulation: INR <= 1.3, Platelets >= 80,000/uL"
    ],
    "hardware": [
      {
        "category": "Introducer Needle",
        "name": "14G Fogarty Balloon Introducer Cannula",
        "spec": "10 cm length with blunt/sharp obturators",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Balloon Catheter",
        "name": "No. 4 French Fogarty Arterial Embolectomy Balloon Catheter",
        "spec": "0.75 mL volume capacity",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Imaging Guidance",
        "name": "High-Definition Biplane Fluoroscopy or CT Guidance",
        "spec": "Lateral skull view profiling sella and clivus",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient supine on table under general anesthesia with hemodynamic monitoring and IV atropine ready.",
      "Hartel percutaneous puncture: 14G cannula guided through foramen ovale into Meckel's cave under lateral fluoroscopy.",
      "No. 4F Fogarty balloon catheter advanced through the cannula so the balloon lies in Meckel's cave.",
      "Inflation of balloon with 0.6-0.8 mL non-ionic contrast: verification of characteristic \"pear shape\" appearance on lateral fluoroscopy (the stem of the pear corresponds to the foramen ovale, and the body lies within Meckel's cave compressing the ganglion against the petrous apex and dura).",
      "Trigeminal depressor response (bradycardia and hypotension) monitored and treated with atropine as needed.",
      "Compression maintained for 60 to 90 seconds.",
      "Balloon deflated and removed along with the cannula.",
      "Hemostasis achieved by manual cheek compression for 5 minutes; extubation and recovery."
    ],
    "complications": [
      "Severe bradycardia or asystole during balloon inflation (managed with prophylactic atropine)",
      "Masseter muscle weakness (temporary, resolves in 6-12 weeks)",
      "Facial numbness (mild to moderate, well-tolerated)",
      "Carotid-cavernous fistula (extremely rare with correct foraminal trajectory)",
      "Cheek hematoma"
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Edwards Lifesciences (Fogarty Catheter) (+91 98291 33442)",
      "Cook Medical India (+91 98294 33211)",
      "Stryker Neurovascular (+91 98290 88231)"
    ]
  },
  {
    "id": "trigeminal-rf-thermocoagulation",
    "name": "Percutaneous Radiofrequency Thermocoagulation of the Gasserian Ganglion",
    "category": "Interventional Spine & Pain Management",
    "code": "SPINE-TRIG-034",
    "rghsCode": "763 / 15",
    "icd10": "G50.0 (Trigeminal Neuralgia)",
    "indications": [
      "Severe classical trigeminal neuralgia isolated to V2 (maxillary) or V3 (mandibular) branches",
      "Desire for division-specific selective thermal lesioning sparing V1 and the corneal reflex",
      "Patients failing antiepileptic pharmacotherapy"
    ],
    "preOpCriteria": [
      "Skull base CT/MRI confirming foramen ovale anatomy and excluding intracranial mass",
      "Normal coagulation: INR <= 1.3, Platelets >= 80,000/uL"
    ],
    "hardware": [
      {
        "category": "RF Generator",
        "name": "Radiofrequency Generator with Sensory Stimulation",
        "spec": "Continuous thermal mode (60-75°C)",
        "standardStore": "SMS Interventional Pain Lab Store"
      },
      {
        "category": "RF Cannula",
        "name": "20G - 22G Curved-Tip RF Cannula with 2-5 mm Active Tip",
        "spec": "10 cm length, insulated shaft",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Thermocouple Electrode",
        "name": "Gasserian Ganglion RF Electrode",
        "spec": "10 cm length",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient supine under monitored conscious sedation (Propofol/Fentanyl) with awake testing intervals.",
      "Hartel approach: cannula introduced through foramen ovale into Meckel's cave under lateral and submentovertex fluoroscopy.",
      "Sedation lightened; electrophysiological stimulation performed:",
      "- Sensory stimulation (50 Hz, 0.1-0.3 V) reproduces paresthesias in the specific trigger division (V2 or V3).",
      "- Motor stimulation (2 Hz, 0.5-1.0 V) checks for masseter contraction (to avoid motor root).",
      "Corneal reflex checked to ensure V1 is spared.",
      "Sedation deepened with IV propofol.",
      "Thermal coagulation delivered at 65-75°C for 60 seconds.",
      "Awake check of pinprick hypesthesia in the target division; repeat cycle if sensation is intact.",
      "Cannula removed, manual compression for hemostasis."
    ],
    "complications": [
      "Facial numbness (controlled hypesthesia)",
      "Masseter muscle weakness",
      "Corneal anesthesia and keratitis if V1 inadvertently lesioned (<2%)",
      "Anesthesia dolorosa (rare, <1%)",
      "Carotid artery puncture"
    ],
    "maayTariffInr": 42000,
    "vendorContacts": [
      "Avanos Medical (+91 98295 22119)",
      "Cosman / Boston Scientific (+91 98293 66554)",
      "Stryker (+91 98290 88231)"
    ]
  }
];
