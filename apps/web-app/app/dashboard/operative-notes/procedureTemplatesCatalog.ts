/**
 * 25 Core Authentic SMS Hospital Interventional Radiology Procedure Templates.
 * Extracted directly from clinical Word (.docx) operative records on NEEL pendrive (F:\Scans).
 */

export interface ProcedureTemplate {
  id: string;
  title: string;
  category: "Vascular Embolization" | "Hepatobiliary" | "Venous & Dialysis" | "Head, Neck & Neuro" | "Non-Vascular & Drainage";
  clinicalProfile: string;
  allergies: string;
  anesthesia: string;
  medication: string;
  field: string;
  procedureClassification: string;
  position: string;
  technique: string;
  postOpPlan: string;
}

export const PROCEDURE_TEMPLATES: ProcedureTemplate[] = [
  {
    id: "biliary-sems",
    title: "Biliary Stenting with SEMS",
    category: "Hepatobiliary",
    clinicalProfile: "Locally Advanced Ca GB with obstructive jaundice, post palliative RYGJ, post ring biliary catheter insertion.",
    allergies: "None",
    anesthesia: "Local + Mild Sedation",
    medication: "IV Antibiotics & Analgesic",
    field: "Sterile",
    procedureClassification: "Clean-Contaminated",
    position: "Supine",
    technique: `Under strict aseptic precaution, via previously placed ring biliary catheter, cholangiogram done which revealed tight stricture at primary confluence and proximal CBD. 10x100 mm metallic self-expanding metallic stent (SEMS) placed across the stricture. Post procedure there was good flow of contrast through SEMS noted into duodenum. No intra and immediate post-procedure complications were noted. 8 Fr sheath in situ and connected with urobag.`,
    postOpPlan: `1. Inj. Ceftriaxone 1gm IV BD
2. Inj. Pantoprazole 40mg IV OD
3. Inj. Ondansetron 4mg IV SOS
4. Inj. Tramadol / PCM infusion for pain SOS
5. IV Fluid Normal Saline @ 60 ml/hr
6. Monitor bile output and vitals every 2 hours`,
  },
  {
    id: "bae-hemoptysis",
    title: "PVA Embolization for Massive Hemoptysis (BAE)",
    category: "Vascular Embolization",
    clinicalProfile: "Massive / recurrent hemoptysis secondary to post-tubercular bronchiectasis with hypertrophic bronchial collaterals.",
    allergies: "None",
    anesthesia: "Local Anesthesia",
    medication: "Nil / IV Hemostats",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition under USG and fluoro guidance, Right CFA access taken with 18 G needle and 5 F sheath placed. With the help of C1 catheter, left bronchial artery cannulated and angiogram done which revealed tortuous vessel with abnormal hypervascular blush. Super selective cannulation done using 2.7F microcatheter. Embolisation done using 355-500 micron PVA particles till complete flow stasis. Post embolization angiogram showed complete resolution of abnormal hypervascular blush. No intra / immediate post procedural complication were seen. Femoral sheath removed and manual compression bandage applied. During Procedure 3500 units of heparin given.`,
    postOpPlan: `1. Complete bed rest with right leg straight and extended for 6-8 hours.
2. Check right groin puncture site for bleeding/hematoma; neurovascular exam and vital monitoring every 15 min x 4, every 30 min x 2, then every 1 hr x 2.
3. Resume oral diet after 2 hours if vitals stable.
4. Notify IR resident SOS for any bleeding or severe chest pain.`,
  },
  {
    id: "tjlb",
    title: "DSA and TJLB (Transjugular Liver Biopsy)",
    category: "Hepatobiliary",
    clinicalProfile: "Acute on chronic liver failure / coagulopathy with deranged INR, ascites, requiring histopathological confirmation.",
    allergies: "None",
    anesthesia: "Local Anesthesia",
    medication: "Nil",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition, right IJV punctured with 18 G needle under USG guidance and 10 Fr sheath placed. IVC and Right Hepatic Vein (RHV) cannulated with MPA catheter and hydrophilic guide wire combination. Venogram taken to confirm positioning of the catheter in RHV. Wire exchanged with superstiff guidewire. 10 Fr long sheath placed. Venogram revealed good flow in the RHV. Using metallic cannula and sheath, 18G Quick-Core biopsy gun placed in the anterior liver parenchyma. Two adequate cores taken from liver parenchyma and preserved in formalin. Sample handed over to relatives. Free and wedged hepatic venous pressures recorded. IJV sheath removed, manual compression given and sterile dressing applied. No intra / immediate post procedural complication were seen. 1500 IU heparin given during procedure.`,
    postOpPlan: `1. Bed rest for 4 hours; keep head end flat.
2. Monitor right neck puncture site for hematoma.
3. Vitals monitoring (BP, Pulse, RR) every 30 mins for 4 hours.
4. Send liver core samples for histopathology in formalin.`,
  },
  {
    id: "jna-pva",
    title: "PVA Embolization for JNA (Juvenile Nasopharyngeal Angiofibroma)",
    category: "Head, Neck & Neuro",
    clinicalProfile: "Post-op recurrence / pre-operative vascular tumor embolization for Juvenile Nasopharyngeal Angiofibroma.",
    allergies: "None",
    anesthesia: "Local Anesthesia + Monitored Care",
    medication: "Nil",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition USG and fluoroscopy guidance, Right CFA access taken with 18 G needle and 5 F sheath placed. With the help of 5 Fr H1 catheter, right ICA and ECA run were performed in AP and lateral views. Tumor blush noted in the nasopharynx arising from branches of internal maxillary artery (IMA) of ECA. After super selective cannulation of IMA using microcatheter, embolisation of culprit branches done using 355-500 micron PVA particles. Post embolization right ECA run revealed no residual tumoral blush.
With the help of 5 Fr AR catheter, left CCA, ECA and ICA run were performed which revealed abnormal blush from internal maxillary artery branch of left ECA. Super selective cannulation of IMA done using microcatheter, embolisation done using 500-700 micron PVA particles. Post embolization run revealed no residual tumoral blush.
The patient tolerated the procedure well. Femoral sheath removed and manual compression bandage applied. During procedure 3500 units of heparin given. No intraprocedural / immediate post procedural complications seen.`,
    postOpPlan: `1. Complete flat supine bed rest for 6 hours; right leg extended.
2. Check groin puncture site for hematoma/bleeding.
3. Ice pack over nose/face for comfort SOS.
4. Planned for definitive ENT surgical excision within 24-48 hours.`,
  },
  {
    id: "central-venoplasty",
    title: "Central Venoplasty & Recanalization",
    category: "Venous & Dialysis",
    clinicalProfile: "Known case of B-ALL / CKD with central venous stenosis, right upper limb venous engorgement and collaterals.",
    allergies: "None",
    anesthesia: "Local Anesthesia",
    medication: "IV Heparin",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition under USG and fluoro guidance, Right common femoral vein access taken with 18G needle and 7 Fr sheath placed. Right basilic vein access taken with 18G needle and 6 F sheath placed. Venogram done through right arm sheath revealed tight focal stenosis/occlusion of the right brachiocephalic/subclavian vein with extensive chest wall collaterals. Through femoral and arm access, lesion crossed with 0.035 hydrophilic wire and MPA catheter. Balloon venoplasty done using 10x40 mm balloon dilated up to nominal pressure. Post venoplasty check venogram revealed prompt flow through central vein with marked reduction in collateral flow. Sheaths removed, manual compression given, pressure bandages applied. No immediate complication seen.`,
    postOpPlan: `1. Bed rest for 4 hours.
2. Limb elevation of right arm.
3. Check arm and groin puncture sites for bleeding or hematoma.
4. Continue antiplatelet / anticoagulant as advised.`,
  },
  {
    id: "avs-adrenal",
    title: "DSA for Adrenal Venous Sampling (AVS)",
    category: "Vascular Embolization",
    clinicalProfile: "Hypertension with hypokalemia, primary hyperaldosteronism, suspected Conn's syndrome for lateralization.",
    allergies: "None",
    anesthesia: "Local Anesthesia",
    medication: "ACTH Infusion + IV PCM",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition, under USG and fluoro guidance, Right Femoral Vein access taken with 18 G needle and 5 F sheath placed. ACTH infusion was started 30 min prior to venous access. With the help of Cobra catheter the ostium of a vein arising from the posterolateral aspect of the IVC at D12 level cannulated (right adrenal vein) and sample taken with gravity assistance. Right adrenal venography confirmed gland blush without extravasation. Subsequently, left renal vein was catheterized with Cobra catheter and selective cannulation of the phrenicoadrenal trunk was done using microcatheter. Blood samples taken from phrenicoadrenal trunk. Samples also taken from the IVC caudal and cranial to renal veins. No intra/immediate post procedural complication seen. Femoral sheath removed and manual compression bandage applied. 2500 units heparin given.`,
    postOpPlan: `1. Complete bed rest with right leg extended for 3 hours.
2. Check right groin for bleeding/hematoma; vitals monitoring every 15 min x 4, then every 30 min x 2.
3. Samples immediately labeled (RAV, LAV, IVC) and sent on wet ice to Biochemistry lab for Aldosterone & Cortisol assay.
4. Resume diet and previous antihypertensive medications.`,
  },
  {
    id: "gda-bleed-embolization",
    title: "GI Bleed / GDA Pseudoaneurysm Embolization (Coil & Glue)",
    category: "Vascular Embolization",
    clinicalProfile: "Upper GI bleed / massive hematemesis / post acute pancreatitis with pseudoaneurysm arising from gastroduodenal artery (GDA).",
    allergies: "None",
    anesthesia: "Local Anesthesia + Monitored Anesthesia Care",
    medication: "IV PPI Infusion",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition, right CFA access taken with 18G needle under USG guidance and 5F sheath placed. Celiac axis and SMA cannulated using 5F Cobra/C2 catheter. Selective GDA run showed contrast extravasation / pseudoaneurysm arising from mid segment of GDA. Superselective catheterization of GDA achieved across the neck using 2.7F microcatheter. Front-door and back-door coil embolization performed using 0.018 microcoils, followed by 1:3 Histoacryl-Lipiodol glue mixture. Post embolization celiac and SMA runs showed complete exclusion of the pseudoaneurysm with intact hepatic arterial flow. Sheath removed, manual compression given. No immediate complication.`,
    postOpPlan: `1. Strict bed rest for 8 hours with right leg immobilised.
2. Nil orally for 6 hours, then clear liquids if no hematemesis/melena.
3. IV Pantoprazole 80mg bolus followed by 8mg/hr infusion.
4. Serial hemoglobin & vitals monitoring every 1 hour.`,
  },
  {
    id: "gelfoam-embolization",
    title: "Gel Foam Embolisation",
    category: "Vascular Embolization",
    clinicalProfile: "Active chest wall / intercostal arterial bleed with hematoma / acute trauma.",
    allergies: "None",
    anesthesia: "Local Anesthesia",
    medication: "Nil",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition under USG and fluoro guidance, right CFA access taken with 18G needle and 5F sheath placed. With the help of C1 catheter, angiograms taken from culprit right 8th-12th posterior intercostal arteries which revealed active contrast extravasation and abnormal parenchymal blush. Superselective cannulation achieved with microcatheter. Embolisation done using Gel Foam slurry till complete cessation of bleeding. Check angiogram confirmed complete technical success with no residual extravasation. Femoral sheath removed and manual compression bandage applied. Procedure uneventful.`,
    postOpPlan: `1. Complete bed rest with right leg extended for 6 hours.
2. Check groin and chest wall puncture site for swelling or hematoma.
3. Chest wall analgesia as advised. Vitals monitoring every 30 minutes.`,
  },
  {
    id: "diagnostic-dsa",
    title: "Digital Subtraction Angiography (Diagnostic DSA)",
    category: "Vascular Embolization",
    clinicalProfile: "Vascular evaluation for suspected aneurysm, vasculitis, peripheral vascular disease, or portal hypertension.",
    allergies: "None",
    anesthesia: "Local Anesthesia",
    medication: "Nil",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition under USG guidance, right CFV / CFA punctured with 18G needle and 5F / 6F sheath placed. Diagnostic 5Fr catheter (MPA / Cobra / Pigtail) navigated over 0.035 hydrophilic wire. Multi-angle serial digital subtraction angiographic acquisitions performed in AP and oblique projections. Target vascular anatomy, caliber, and flow dynamics documented. Sheath removed and hemostasis achieved with manual compression for 15 minutes followed by pressure dressing. Procedure completed uneventfully.`,
    postOpPlan: `1. Bed rest for 4 hours; limb straight.
2. Monitor puncture site for active oozing or hematoma.
3. Encourage oral hydration (1.5 - 2 Liters over 6 hours) to facilitate contrast excretion.`,
  },
  {
    id: "varicose-venaseal",
    title: "Varicose Vein Glue Embolisation by VenaSeal",
    category: "Venous & Dialysis",
    clinicalProfile: "Symptomatic lower limb varicose veins with primary Great Saphenous Vein (GSV) incompetence and CEAP C2-C4 insufficiency.",
    allergies: "None",
    anesthesia: "Local Anesthesia at puncture site (No Tumescent Needed)",
    medication: "Nil",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition under real-time ultrasound guidance, access of the Great Saphenous Vein (GSV) achieved below the knee with 18G needle and 5F micro-introducer sheath placed. 5F VenaSeal delivery catheter navigated under ultrasound guidance and tip positioned 5 cm distal to the Saphenofemoral Junction (SFJ). Under continuous ultrasound compression, 2 doses of 0.09 mL n-butyl cyanoacrylate glue injected at SFJ, followed by 3 minutes of firm compression. Serial glue delivery done at 3 cm intervals with 30s compression each down the entire incompetent GSV segment. Completion ultrasound demonstrated 100% acoustic shadowing and non-compressibility of the GSV with preserved common femoral vein flow. Sheath removed, single adhesive bandage applied.`,
    postOpPlan: `1. Immediate ambulation encouraged; walk for 20 minutes before discharge.
2. No heavy weight lifting (>10 kg) or strenuous exercise for 5 days.
3. Bandage can be removed after 24 hours; normal bathing permitted.
4. Follow-up Doppler ultrasound at 1 month.`,
  },
  {
    id: "tace",
    title: "Transarterial Chemoembolization (TACE)",
    category: "Vascular Embolization",
    clinicalProfile: "Hepatocellular carcinoma (HCC) / hypervascular liver tumor BCLC Stage A/B, preserved liver function (CTP A/B).",
    allergies: "None",
    anesthesia: "Local Anesthesia + Mild IV Analgesia",
    medication: "IV Doxorubicin / Epirubicin + Lipiodol + Gelfoam",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition, right CFA punctured under USG guidance and 5F sheath placed. Celiac axis and superior mesenteric artery catheterized using 5F Cobra/C2 catheter. Diagnostic hepatic angiogram and indirect portogram performed, confirming patent main portal vein. Using 2.7F microcatheter, superselective cannulation of the tumor feeding segmental hepatic artery branch achieved. Chemoembolic emulsion of Doxorubicin (30-50 mg) mixed with 5-10 mL Lipiodol was injected under real-time fluoroscopic visualization until complete tumor saturation and sluggish flow. Embolization topped with Gel-Foam particles. Post-procedure run showed dense Lipiodol uptake in tumor blush with pruning of tumor vessels. Sheath removed and compression bandage applied. 3000 IU Heparin given.`,
    postOpPlan: `1. Complete bed rest for 6-8 hours with right leg extended.
2. IV hydration: 100 mL/hr Normal Saline for 12 hours.
3. Post-TACE syndrome prophylaxis: Inj. Ondansetron 4mg TDS, Inj. Paracetamol 1g IV TDS, Inj. Pantoprazole 40mg OD.
4. Monitor liver function tests (LFTs) and serum electrolytes on Day 1 post-procedure.`,
  },
  {
    id: "ptbd",
    title: "Percutaneous Transhepatic Biliary Drainage (PTBD)",
    category: "Hepatobiliary",
    clinicalProfile: "Malignant obstructive jaundice (Ca Gallbladder / Cholangiocarcinoma / Periampullary Ca) with dilated intrahepatic biliary radicals (IHBR).",
    allergies: "None",
    anesthesia: "Local Anesthesia (2% Lignocaine)",
    medication: "IV Antibiotics (Ceftriaxone + Metronidazole)",
    field: "Sterile",
    procedureClassification: "Clean-Contaminated",
    position: "Supine",
    technique: `Under strict aseptic precaution under ultrasound guidance, peripheral right / left duct IHBR punctured with 21G/18G Chiba needle. Bile aspirated and contrast injected to outline the biliary tree, showing tight stricture at common hepatic duct. 0.018 / 0.035 wire negotiated across duct into common bile duct / duodenum. Tract dilated with 8F fascial dilator. 8.5F / 10F ring biliary / pigtail drainage catheter successfully placed with multi-sideholes spanning proximal and distal to stricture. Free flow of golden-brown bile observed. Catheter secured to skin with 2-0 silk sutures and connected to external drainage bag. Procedure completed uneventfully.`,
    postOpPlan: `1. Strict catheter care; keep drainage bag below puncture site level.
2. Measure and record 24-hour bile output daily.
3. Flush catheter with 5 mL sterile saline daily to maintain patency.
4. Continue IV antibiotics; check serum bilirubin on Day 2 post-procedure.`,
  },
  {
    id: "pcd",
    title: "Percutaneous Drainage (PCD / Pigtail Placement)",
    category: "Non-Vascular & Drainage",
    clinicalProfile: "Abdominal / pelvic abscess, infected pancreatic necrotic collection, infected seroma, or subdiaphragmatic fluid collection.",
    allergies: "None",
    anesthesia: "Local Anesthesia (2% Lignocaine)",
    medication: "Nil",
    field: "Sterile",
    procedureClassification: "Contaminated",
    position: "Supine / Oblique depending on window",
    technique: `Maintaining all aseptic precautions, ultrasound / CT guidance used to identify the safest acoustic window free of intervening bowel or major vasculature. Puncture performed with 18G needle, frank pus / serous fluid aspirated and sent for Gram stain, culture, and sensitivity. 0.035 J-tip guide wire coiled within the collection. Tract dilated over wire with 8F and 10F dilators. 10F / 12F locking pigtail catheter placed. Locking thread cinched, catheter hub connected to gravity drainage bag. Initial aspiration of 250 mL purulent fluid achieved. Catheter secured to skin with suture and drain fix dressing. Procedure uneventful.`,
    postOpPlan: `1. Monitor catheter output, color, and consistency every 12 hours.
2. Flush catheter with 10 mL sterile saline every 12 hours to prevent blocking.
3. Review pus culture & sensitivity report and adjust targeted antibiotics.
4. Review with follow-up USG after 5-7 days.`,
  },
  {
    id: "varicocele-embolization",
    title: "Varicocele Embolization (Coils & Sclerosant)",
    category: "Vascular Embolization",
    clinicalProfile: "Symptomatic left-sided scrotal aching pain / subfertility with clinical Grade II/III varicocele and retrograde venous reflux.",
    allergies: "None",
    anesthesia: "Local Anesthesia",
    medication: "Nil",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition under USG guidance, right CFA / right Internal Jugular Vein / CFV access taken with 5F sheath. Left renal vein selected with Cobra / MPA catheter and left internal spermatic vein (ISV) cannulated. Valsalva venography demonstrated marked retrograde flow and multiple collateral channels. 2.7F microcatheter advanced to level of inguinal canal above the deep ring. Distal ISV embolized with 0.035/0.018 microcoils, followed by 2 mL of 3% Sodium Tetradecyl Sulfate (STS) foam / tissue adhesive, followed by proximal coil pack to prevent collateral recruitment. Post-embolization venogram confirmed complete occlusion of the ISV with no persistent reflux. Sheath removed, pressure bandage applied.`,
    postOpPlan: `1. Bed rest for 2-3 hours; can be discharged same day.
2. Wear scrotal support / tight briefs for 1 week.
3. Avoid heavy lifting (>10 kg) or strenuous gym workouts for 2 weeks.
4. Mild flank/groin dull ache is common; manage with oral Paracetamol SOS.`,
  },
  {
    id: "uae-fibroid-bleed",
    title: "Uterine Artery Embolization (UAE)",
    category: "Vascular Embolization",
    clinicalProfile: "Symptomatic uterine leiomyomas / adenomyosis with menorrhagia, bulk symptoms, or post-partum / post-D&C hemorrhage.",
    allergies: "None",
    anesthesia: "Local Anesthesia + IV Analgesia & Sedation",
    medication: "IV Antibiotic + PCA / NSAID for post-embolization pain",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition, right CFA punctured with 18G needle and 5F sheath placed. Left uterine artery selected using Roberts Uterine Catheter (RUC) / Cobra catheter and cannulated superselectively with 2.7F microcatheter beyond the cervicovaginal branches. Embolization performed using 500-700 micron PVA particles / calibrated microspheres until complete stasis of flow ('pruned tree' appearance). Contralateral right uterine artery selected via Waltman loop or crossover technique and similarly embolized to stasis. Post-procedure pelvic angiogram confirmed complete bilateral devascularization of fibroid beds with preserved ovarian arterial supply. Sheath removed, manual compression given. 3500 IU Heparin given.`,
    postOpPlan: `1. Strict bed rest for 6-8 hours with right leg straight.
2. Scheduled multimodal analgesia for post-embolization syndrome (Inj. Tramadol + Diclofenac / Paracetamol IV).
3. Foley catheter in situ for 12 hours; monitor urine output.
4. Discharge planned on Day 2 post-procedure.`,
  },
  {
    id: "splenic-pseudoaneurysm",
    title: "Splenic Artery Pseudoaneurysm Embolization",
    category: "Vascular Embolization",
    clinicalProfile: "Severe acute necrotizing pancreatitis with bleeding splenic artery pseudoaneurysm into peripancreatic collection / lesser sac.",
    allergies: "None",
    anesthesia: "Local Anesthesia + Monitored Care",
    medication: "IV PPI Infusion",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition under USG guidance, right CFA access taken with 18G needle and 5F sheath placed. Celiac axis engaged with 5F Cobra catheter. Selective splenic artery angiogram demonstrated a large pseudoaneurysm arising from the mid/distal splenic artery. 2.7F microcatheter navigated across the aneurysm neck. Sandwich technique performed: outflow tract of splenic artery distal to aneurysm packed with 0.018 microcoils, followed by packing of the aneurysm sac and inflow splenic artery proximal to the neck. Check celiac angiogram demonstrated complete thrombosis and exclusion of the pseudoaneurysm with preservation of short gastric collateral distal perfusion. Sheath removed and hemostasis secured.`,
    postOpPlan: `1. Bed rest for 8 hours; vitals and abdominal girth monitoring every hour.
2. Serial CBC / Hemoglobin at 6 hours and 12 hours post-procedure.
3. Continue intensive medical management for acute pancreatitis.`,
  },
  {
    id: "hepatic-pseudoaneurysm",
    title: "Hepatic Artery Pseudoaneurysm Embolization",
    category: "Vascular Embolization",
    clinicalProfile: "Post-cholecystectomy / post-biliary intervention hemobilia / bleeding right hepatic artery pseudoaneurysm.",
    allergies: "None",
    anesthesia: "Local Anesthesia + Sedation",
    medication: "Nil",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition, right CFA punctured and 5F sheath placed. Celiac axis and common hepatic artery cannulated with 5F C2 catheter. Selective hepatic angiogram revealed active bleeding / pseudoaneurysm arising from branch of Right Hepatic Artery. Superselective catheterization achieved using microcatheter. Front-door and back-door coil occlusion performed using detachable microcoils with liquid embolic (Histoacryl:Lipiodol 1:2). Check angiogram showed complete exclusion of the pseudoaneurysm with preserved perfusion to surrounding hepatic parenchyma. Sheath removed, pressure bandage applied.`,
    postOpPlan: `1. Strict bed rest for 6 hours; right groin monitoring.
2. Watch for clearance of hemobilia (clearer bile in PTBD bag if present).
3. Check liver function tests (LFTs) on Day 1.`,
  },
  {
    id: "avm-peripheral",
    title: "Peripheral Arteriovenous Malformation (AVM) Embolization",
    category: "Vascular Embolization",
    clinicalProfile: "High-flow arteriovenous malformation of lower/upper limb with soft tissue swelling, thrill, bruit, and high-output risk.",
    allergies: "None",
    anesthesia: "Local Anesthesia / Regional Block",
    medication: "IV Analgesia",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition under USG guidance, ipsilateral / contralateral CFA access taken with 6F sheath. Lower limb diagnostic angiogram performed demonstrating extensive nidus with multiple hypertrophied arterial feeders and early draining veins. Superselective microcatheter cannulation of the dominant arterial feeders achieved. Embolization performed using Onyx / Squid liquid embolic agent under roadmapping / dilute cyanoacrylate glue with Lipiodol, followed by coil occlusion of large venous outflow pouches. Completion run demonstrated marked reduction (>80%) of AV shunting and closure of the primary nidus. Sheath removed, hemostasis achieved.`,
    postOpPlan: `1. Bed rest for 6 hours.
2. Limb elevation and distal neurovascular checks (pulse, warmth, sensory examination) every 1 hour x 6.
3. Manage post-embolization inflammatory pain with NSAIDs and cold compresses.`,
  },
  {
    id: "parto-brto",
    title: "PARTO / BRTO for Gastric Varices",
    category: "Venous & Dialysis",
    clinicalProfile: "Cirrhosis with portal hypertension, large bleeding isolated gastric varices (IGV-1 / GOV-2) with gastrorenal shunt (GRS).",
    allergies: "None",
    anesthesia: "Local Anesthesia + Mild Sedation",
    medication: "IV Somatostatin / Octreotide Infusion",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition under USG guidance, right CFV / right IJV access obtained with 8F / 10F sheath. Left renal vein selected with Cobra catheter and gastrorenal shunt (GRS) cannulated. Retrograde balloon occlusion catheter (12 mm / 16 mm) inflated within the GRS. Shunt venogram showed large fundal gastric varices with afferent supply from left gastric and posterior gastric veins. Plug-assisted retrograde transvenous obliteration (PARTO) performed using vascular plug deployed within the outflow GRS, followed by injection of 3% STS foam sclerosant into the gastric variceal bed. Repeat venogram showed stagnation and dense opacification of varices. Catheter removed, manual compression given. Procedure uneventful.`,
    postOpPlan: `1. Bed rest for 6 hours; vitals monitoring.
2. Continue Octreotide infusion for 24 hours.
3. Follow-up upper GI endoscopy at 4-6 weeks to document complete variceal eradication.`,
  },
  {
    id: "hj-plasty",
    title: "Percutaneous Hepaticojejunostomy (HJ) Balloon Plasty",
    category: "Hepatobiliary",
    clinicalProfile: "Benign biliary anastomotic stricture post-cholecystectomy / hepaticojejunostomy with recurrent cholangitis and jaundice.",
    allergies: "None",
    anesthesia: "Local Anesthesia + IV Analgesia",
    medication: "IV Ceftriaxone 1g",
    field: "Sterile",
    procedureClassification: "Clean-Contaminated",
    position: "Supine",
    technique: `Under strict aseptic precaution under fluoro guidance via existing PTBD tract, cholangiogram performed demonstrating high-grade anastomotic stricture at the hepaticojejunostomy site. 0.035 hydrophilic wire successfully navigated across the stricture into the jejunal loop. Stricture dilated using 8 mm x 40 mm high-pressure balloon (Conquest/Mustang) up to 14 atmospheres until complete waist disappearance was observed. Dilatation maintained for 3 minutes. Post-plasty check cholangiogram showed widely patent anastomotic lumen with free contrast run-off into jejunum. 10F ring biliary catheter placed across anastomosis with sideholes above and below. Catheter clamped and capped.`,
    postOpPlan: `1. Keep catheter capped; uncap to free drainage if patient develops fever, pain, or leakage.
2. Watch for signs of cholangitis or peritonism.
3. Repeat plasty session planned in 4-6 weeks as part of standard protocol.`,
  },
  {
    id: "sclerotherapy-vm",
    title: "Percutaneous Sclerotherapy for Venous / Lymphatic Malformation",
    category: "Non-Vascular & Drainage",
    clinicalProfile: "Low-flow venous / lymphatic malformation of head/neck/extremity with pain, swelling, and functional impairment.",
    allergies: "None",
    anesthesia: "Local Anesthesia (1% Lignocaine) / GA for pediatrics",
    medication: "Bleomycin / Polidocanol Foam",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition under real-time ultrasound guidance, direct percutaneous puncture of venous / cystic lymphatic spaces performed using 20G/22G scalp vein needle. Aspiration of venous blood / lymphatic straw-colored fluid confirmed intra-lesional needle tip position. Under direct fluoroscopy with contrast (Omnipaque), direct venography performed showing slow-flow venous lakes without direct high-flow drainage into deep venous system. Sclerosant foam (Polidocanol 2% mixed 1:4 with air) / Bleomycin (15 IU reconstituted) injected slowly under real-time USG visualization, ensuring homogeneous distribution. Compression applied for 10 minutes. Dressing applied.`,
    postOpPlan: `1. Compression garment / crepe bandage over treated site for 48 hours.
2. Mild transient swelling and pain expected; oral analgesics as prescribed.
3. Advise patient that inflammatory firmness indicates therapeutic response.
4. Review in IR clinic at 6 weeks for second session if needed.`,
  },
  {
    id: "dips-tips",
    title: "TIPS / DIPS Revision & Stent Plasty",
    category: "Hepatobiliary",
    clinicalProfile: "Cirrhosis with recurrent variceal hemorrhage or refractory ascites, shunt stenosis or occlusion post-TIPS.",
    allergies: "None",
    anesthesia: "Local Anesthesia + Monitored Care",
    medication: "Nil",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition under USG guidance, right IJV punctured with 18G needle and 10F sheath placed. Existing Viatorr stent catheterized using 5F MPA catheter and hydrophilic wire. Direct portal venogram and pressure measurements obtained, showing elevated Portosystemic Gradient (PSG = 18 mmHg). Thrombectomy / balloon maceration performed over wire, followed by balloon dilation with 8 mm / 10 mm balloon. Relining with bare-metal stent / covered extension performed. Post-revision portal venogram showed prompt, brisk hepatofugal flow into IVC. Post-revision PSG was 8 mmHg (<12 mmHg target achieved). Sheath removed, manual compression given. No immediate complication.`,
    postOpPlan: `1. Strict bed rest for 4 hours; neck puncture site monitoring.
2. Low-salt diet; monitor for any signs of hepatic encephalopathy (asterixis, confusion).
3. Syrup Lactulose 15-30 mL TDS as prescribed.
4. Doppler ultrasound of shunt at Day 1 and 1 month.`,
  },
  {
    id: "ivc-venoplasty",
    title: "IVC Venoplasty & Stenting (Budd-Chiari Syndrome)",
    category: "Hepatobiliary",
    clinicalProfile: "Budd-Chiari syndrome with suprahepatic / retrohepatic IVC membrane or severe segmental stenosis, refractory ascites, hepatomegaly.",
    allergies: "None",
    anesthesia: "Local Anesthesia + Mild Sedation",
    medication: "IV Heparin 5000 IU",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine",
    technique: `Under strict aseptic condition, right CFV and right IJV access obtained under USG guidance with 8F and 10F sheaths. Simultaneous cavography from above and below demonstrated tight membranous web / severe stenosis of retrohepatic IVC with pressure gradient of 22 mmHg between infra-web IVC and right atrium. Web crossed with stiff wire and MPA catheter. Balloon pre-dilatation performed with 12 mm x 40 mm balloon. Subsequently, 18 mm x 60 mm self-expanding metallic stent (Wallstent / E-Luminexx) deployed across the web. Post-stent dilation performed with 16 mm balloon. Completion cavography showed widely patent IVC with brisk flow and elimination of gradient (residual gradient = 2 mmHg). Sheaths removed, pressure bandages applied.`,
    postOpPlan: `1. Complete bed rest for 6 hours; right groin and neck checks.
2. Therapeutic anticoagulation (Low Molecular Weight Heparin bridging to Warfarin / DOAC) started at 4 hours.
3. Daily abdominal girth and weight measurements.
4. Liver function test monitoring.`,
  },
  {
    id: "picc-catheter",
    title: "HD / Tunneled Permcath Catheter Insertion",
    category: "Venous & Dialysis",
    clinicalProfile: "End-stage renal disease (ESRD) requiring long-term hemodialysis access / failed peripheral AV access.",
    allergies: "None",
    anesthesia: "Local Anesthesia (2% Lignocaine)",
    medication: "Nil",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Trendelenburg (15 degrees)",
    technique: `Under strict aseptic condition with full surgical drape, right Internal Jugular Vein (IJV) punctured under real-time ultrasound guidance using 18G needle. 0.035 J-wire advanced into inferior vena cava under fluoroscopy. Subcutaneous tunnel created over anterior chest wall using tunneling stylet from exit site to venotomy. 14.5 Fr x 24 cm tunneled hemodialysis catheter pulled through tunnel so Dacron cuff sits 2 cm within subcutaneous tract. Over 15 Fr peel-away sheath, catheter inserted with tip positioned in mid-to-lower right atrium. Both venous and arterial lumens aspirated easily with brisk backflow and flushed with heparinized saline lock (5000 IU/mL). Exit site closed with 3-0 Ethilon, catheter wings sutured, sterile dry dressing applied.`,
    postOpPlan: `1. Keep dressing clean, dry, and untouched; no wet bathing for 7 days.
2. Catheter ready for immediate hemodialysis use.
3. Instruct dialysis staff: strict sterile handling of catheter hubs; heparin lock after each dialysis.
4. Suture removal at exit site after 14 days.`,
  },
  {
    id: "dialysis-fistuloplasty",
    title: "Dialysis AV Fistula Angioplasty (Fistuloplasty)",
    category: "Venous & Dialysis",
    clinicalProfile: "Radiocephalic / brachiocephalic AV fistula dysfunction with high venous pressures (>200 mmHg), poor dialysis flow, prolonged cannulation bleeding.",
    allergies: "None",
    anesthesia: "Local Anesthesia (1% Lignocaine)",
    medication: "IV Heparin 3000 IU",
    field: "Sterile",
    procedureClassification: "Clean",
    position: "Supine with arm abducted",
    technique: `Under strict aseptic precaution under USG and fluoro guidance, retrograde / antegrade puncture of outflow cephalic vein performed with 18G needle and 6F short vascular sheath placed. Fistulogram performed showing high-grade (>80%) stenosis at the juxta-anastomotic outflow vein / cephalic arch. 0.035 stiff hydrophilic wire navigated across the stenosis into feeding brachial artery / central vein. Angioplasty performed with 6 mm x 40 mm high-pressure balloon (Conquest up to 20 atm) with full waist effacement. Post-angioplasty check fistulogram confirmed prompt laminar flow with complete resolution of stenosis and disappearance of collateral flow. Sheath removed, manual purse-string compression given. Strong thrill palpable over entire fistula tract.`,
    postOpPlan: `1. Keep arm elevated on a pillow; gentle compression dressing for 4 hours.
2. Check for continuous palpable thrill over fistula every 1 hour.
3. AV fistula can be cannulated for hemodialysis after 24 hours.
4. Avoid tight clothes, blood pressure cuffs, or blood draws on the fistula arm.`,
  },
];
