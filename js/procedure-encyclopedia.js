/**
 * SMS Medical College & Hospitals, Jaipur - Dept of Radiodiagnosis & Interventional Radiology
 * Exhaustive Interventional Radiology Procedure Encyclopedia & Hardware Master
 * Contains full clinical specs, hardware requirements, MAAY/RGHS package codes, implant codes,
 * distributor vendor contacts, step-by-step operative notes, post-op monitoring, e-Aushadhi drugs, and discharge advice.
 */

const IR_PROCEDURE_ENCYCLOPEDIA = {
  "tace": {
    id: "tace",
    name: "Transarterial Chemoembolization (cTACE / DEB-TACE)",
    shortName: "TACE (HCC / Hepatic Metastases)",
    specialty: "Vascular Interventional Radiology - Hepato-Biliary",
    category: "Oncology / Embolization",
    indications: [
      "Intermediate-stage Hepatocellular Carcinoma (BCLC Stage B - multinodular, preserved liver function, ECOG PS 0)",
      "Early-stage HCC (BCLC Stage A) in patients unsuitable for resection, ablation, or liver transplant",
      "Bridge to Liver Transplantation (Milan Criteria: single lesion <=5cm or up to 3 lesions <=3cm)",
      "Hypervascular hepatic metastases (e.g. Neuroendocrine tumors NET, ocular melanoma)",
      "Ruptured HCC with active bleeding (Emergency chemo/bland embolization)"
    ],
    contraindications: [
      "Absolute: Complete Main Portal Vein Thrombosis (without adequate collaterals), Decompensated Cirrhosis (Child-Pugh C, total bilirubin > 3.0 mg/dL), Severe encephalopathy, Extrahepatic metastasis with extensive burden",
      "Relative: Serum Creatinine > 2.0 mg/dL (Contrast-induced nephropathy risk), Platelets < 50,000/uL, INR > 1.6, Active sepsis/cholangitis"
    ],
    preOpChecklist: [
      "Triphasic Dynamic Contrast CT / MRI Abdomen (Liver Protocol) documenting lesion size, segment location, feeding arteries (RHA/LHA/AHA), and portal vein patency",
      "Baseline LFT (Total/Direct Bilirubin, Albumin, SGOT/SGPT, ALP, GGT), Serum Creatinine, Urea, Electrolytes",
      "Coagulation Profile (PT/INR, APTT), Complete Blood Count (Hemoglobin, Platelets)",
      "Serum Alpha-Fetoprotein (AFP) quantitative level",
      "Viral Markers (HBsAg, Anti-HCV, HIV)",
      "Calculators: Child-Pugh Score, ALBI Grade, MELD 3.0, Cigarroa MACD Contrast Limit [5 x Wt(kg) / Cr(mg/dL)]",
      "NPO for 6 hours prior to procedure; IV access with 18G cannula on left forearm; Pre-op IV Hydration (NS @ 100ml/hr x 4h)"
    ],
    hardwareSpecs: [
      { category: "Vascular Access", item: "5F / 6F Radial or Femoral Introducer Sheath", size: "11 cm length (Radiofocus / Terumo / Cordis)", qty: "1" },
      { category: "Puncture Needle", item: "18G / 21G Echogenic Vascular Puncture Needle", size: "7 cm / 21G Micro-puncture set (Cook / BD)", qty: "1" },
      { category: "Base Catheter", item: "5F Cobra (C2) / Simmons-1 / Yashiro / RC1 diagnostic catheter", size: "65 cm / 100 cm length", qty: "1" },
      { category: "Base Guidewire", item: "0.035\" Hydrophilic Angiographic Guidewire (Radiofocus Glidewire)", size: "150 cm / 180 cm, Angled / Straight tip", qty: "1" },
      { category: "Microcatheter", item: "2.7F / 2.0F Co-axial Superselective Microcatheter (Progreat / Renegade / Corsair)", size: "130 cm / 150 cm length", qty: "1" },
      { category: "Microwire", item: "0.014\" / 0.018\" Steerable Hydrophilic Microwire (Transend / Fathom / Synchro)", size: "180 cm / 200 cm length", qty: "1" },
      { category: "Chemoembolic Agent", item: "Lipiodol Ultra-Fluid (Ethiodized Oil - Guerbet)", size: "10 ml ampoule (emulsified 1:1 or 2:1 with Doxorubicin)", qty: "1-2 amp" },
      { category: "Chemotherapeutic", item: "Doxorubicin Hydrochloride / Epirubicin / Cisplatin", size: "50 mg vial (powder reconstituted with non-ionic contrast)", qty: "1 vial" },
      { category: "Embolic Particle", item: "Gel-Foam Torpedoes / PVA Particles (100-300 um, 300-500 um) / DC Beads (DEB-TACE)", size: "100-300 um vial (DC Bead / HepaSphere)", qty: "1 vial" },
      { category: "Accessories", item: "3-Way Stopcocks, High-Pressure Extension Lines, Luer-Lock Syringes (1ml, 3ml, 10ml, 20ml), Scalpel blade #11", size: "Standard Angio Pack", qty: "1 kit" }
    ],
    schemeDetails: {
      maayCode: "2849-IN061A (cTACE) / 2849-IN061B (DEB-TACE)",
      maayName: "Transarterial chemoembolization - conventional (cTACE) / Drug eluting beads (DEB-TACE)",
      maayBaseRate: "₹47,960 (cTACE) / ₹41,160 (DEB-TACE)",
      maayImplants: [
        { code: "2849-IN061A-IMP38", name: "Lipiodol Ultra-Fluid", maxRate: "₹18,000" },
        { code: "2849-IN061A-IMP39", name: "Microcatheter System", maxRate: "₹19,000" },
        { code: "2849-IN061B-IMP40", name: "DEB (Drug Eluting Beads)", maxRate: "₹50,000" },
        { code: "2849-IN061B-IMP41", name: "Microcatheter System", maxRate: "₹19,000" }
      ],
      rghsCode: "693 (Arterial Embolization) / 1321",
      rghsName: "Arterial Embolization / Hepatic Chemoembolization",
      rghsRate: "₹35,000",
      icd10Code: "C22.0 (Hepatocellular Carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
      ihmsPreAuthDocs: "Clinical rounds note, Triphasic CT/MRI liver report & CD stills, LFT/CBC/PT-INR/Creatinine reports, Pre-auth photo with patient bedhead ticket."
    },
    distributorContacts: [
      { name: "Lipiodol (Guerbet India) - Jaipur Surgical Agency", contact: "+91 98290 12345 / SMS Central IR Store", location: "Jaipur / SMS IR OT Block" },
      { name: "Terumo India (Progreat Microcatheter / Glidewire)", contact: "+91 98292 45678", location: "Jaipur" },
      { name: "Boston Scientific (Renegade / DC Bead)", contact: "+91 98295 67890", location: "Jaipur" },
      { name: "SMS Pharmacy Indenting Counter", contact: "DDC-14 (Admitted Patients) / DDC-2 (OPD)", location: "SMS Hospital Main Block" }
    ],
    operativeSteps: `1. Patient placed in supine position on the DSA table; sterile painting and draping of right inguinal and groin area under aseptic precautions.
2. Local anesthesia achieved with 10 mL of 2% Lignocaine infiltrated subcutaneously at right femoral puncture site.
3. Ultrasound-guided anterior wall puncture of the Right Common Femoral Artery (RCFA) performed using 18G echogenic needle.
4. J-tip 0.035" guidewire introduced under fluoroscopic guidance and 5F 11cm vascular sheath placed smoothly; sheath aspirated and flushed with heparinized saline.
5. 5F Cobra (C2) / Yashiro diagnostic catheter advanced over 0.035" Radiofocus Glidewire into Celiac Trunk and Superior Mesenteric Artery (SMA).
6. Diagnostic digital subtraction angiography (DSA) performed: Celiac axis angiogram and SMA angiogram (with indirect portography) performed confirming patent portal vein and delineating tumor vascular anatomy.
7. Hypervascular tumor blush identified in the target hepatic segment(s) supplied by selective hepatic arterial branches.
8. 2.7F Progreat microcatheter coaxially navigated over 0.014" microwire and superselected into the target feeding subsegmental arterial branch.
9. Chemoembolic emulsion prepared using Doxorubicin 50 mg reconstituted in non-ionic contrast and Lipiodol Ultra-Fluid (10 mL) pumped between two syringes through a 3-way stopcock until homogenous emulsion formed.
10. Slow, pulsatile fluoroscopic injection of Lipiodol-Doxorubicin emulsion administered under direct visualization until dense tumor retention and pruning of feeding branches achieved, taking strict precautions to prevent reflux into Gastroduodenal Artery (GDA) or Falciform/Cystic artery.
11. Gelfoam slurry / PVA particles injected for embolization of the feeding trunk until complete stasis reached.
12. Post-embolization angiogram confirmed dense Lipiodol accumulation in the tumor bed with complete devascularization and preserved non-target arterial flow.
13. Microcatheter and diagnostic catheter removed; femoral sheath removed and manual compression applied at puncture site for 15-20 minutes until complete hemostasis achieved; sterile pressure dressing applied.`,
    postOpOrders: [
      "Strict supine bed rest with right leg immobilisation for 6 hours.",
      "Monitor puncture site for bleeding/hematoma and check distal DP/PT pulses q15min x 1h, q30min x 2h, q1h x 4h.",
      "Vital signs (BP, Pulse, RR, SpO2) and Temperature monitoring q1h x 6h.",
      "Post-Chemoembolization Syndrome prophylaxis: Monitor for severe abdominal pain, nausea, vomiting, fever.",
      "Maintain adequate IV hydration with Normal Saline @ 100 mL/hr to flush contrast and prevent CI-AKI.",
      "Strict Intake/Output charting; notify doctor if urine output < 0.5 mL/kg/hr.",
      "Resume clear oral fluids after 2 hours if non-vomiting; light soft diet after 4 hours."
    ],
    postOpDrugsEAushadhi: [
      { name: "Inj. Paracetamol", dose: "1 gm in 100 mL IV infusion", freq: "sos / q8h for post-embolization fever & pain", category: "Analgesic" },
      { name: "Inj. Tramadol", dose: "50 mg in 100 mL NS IV", freq: "sos for severe RUQ abdominal pain", category: "Analgesic (Opioid)" },
      { name: "Inj. Ondansetron", dose: "4 mg IV stat & q8h", freq: "q8h x 24 hours", category: "Antiemetic" },
      { name: "Inj. Pantoprazole", dose: "40 mg IV stat & od", freq: "od before breakfast", category: "Proton Pump Inhibitor" },
      { name: "Tab. Ursodeoxycholic Acid (UDCA)", dose: "300 mg PO", freq: "bd x 1 month", category: "Hepatoprotective" },
      { name: "Tab. Ciprofloxacin", dose: "500 mg PO", freq: "bd x 5 days", category: "Antibiotic Prophylaxis" },
      { name: "Tab. Paracetamol", dose: "650 mg PO", freq: "sos for fever/mild pain", category: "Antipyretic / Analgesic" },
      { name: "Tab. Pantoprazole", dose: "40 mg PO", freq: "od (30 min before breakfast) x 7 days", category: "Gastroprotective" }
    ],
    dischargeAdvice: `1. Follow-up in Interventional Radiology OPD (SMS Hospital) after 4 to 6 weeks with fresh Triphasic CT Liver + Serum AFP + LFT + RFT.
2. Avoid strenuous physical activity, heavy weight lifting (>5 kg), and vigorous exercise for 10 days.
3. Keep the right groin puncture site clean and dry for 48 hours. Sponge bath permitted after 24 hours.
4. Continue oral medications as prescribed: Tab. UDCA 300mg bd, Tab. Ciprofloxacin 500mg bd x 5 days, Tab. Pantoprazole 40mg od.
5. RED-FLAG WARNINGS (Emergency Red-Flags - Report to SMS Emergency / IR Room immediately):
   - Sudden swelling, lump, or active bleeding from the right groin puncture site.
   - High-grade fever (> 101°F) with chills or persistent vomiting.
   - Severe intractable abdominal pain not relieved by medications.
   - Yellowish discoloration of eyes/skin (jaundice), abdominal distension, or altered mental state/confusion.`
  },

  "bae": {
    id: "bae",
    name: "Bronchial Artery Embolization (BAE)",
    shortName: "BAE (Hemoptysis / Bronchiectasis / Post-TB)",
    specialty: "Vascular Interventional Radiology - Thoracic / Pulmonary",
    category: "Emergency Vascular / Embolization",
    indications: [
      "Massive Hemoptysis (>300-600 mL / 24 hours or causing airway compromise / asphyxiation risk)",
      "Recurrent moderate hemoptysis secondary to Post-Tubercular Bronchiectasis, Aspergilloma, Cavitary TB, or Cystic Fibrosis",
      "Bronchial artery pseudoaneurysm / Hypertrophied systemic non-bronchial collateral (NBSA) bleeding",
      "Bleeding thoracic arteriovenous malformation (AVM)"
    ],
    contraindications: [
      "Absolute: Severe uncorrectable coagulopathy (relative in life-threatening massive hemoptysis)",
      "Relative: Anterior Spinal Artery (Great Anterior Radiculomedullary Artery of Adamkiewicz) arising from the target bronchial trunk (must superselect distal to spinal branch before embolizing)"
    ],
    preOpChecklist: [
      "CT Bronchial Angiography (CTBA) with 3D MPR reconstructing bronchial arteries, intercostobronchial trunks, and systemic non-bronchial collaterals (intercostals, subclavian, internal mammary, inferior phrenic)",
      "CXR PA view, Arterial Blood Gas (ABG) if hypoxia present",
      "CBC (Hb, Platelets), Coagulation profile (PT/INR, APTT), RFT (Creatinine/Urea)",
      "Identify active bleeding side on imaging/bronchoscopy; position patient with bleeding side down if intubated",
      "Two large bore IV lines; keep 2 units Packed Red Blood Cells (PRBC) cross-matched on standby"
    ],
    hardwareSpecs: [
      { category: "Vascular Access", item: "5F / 6F Femoral or Right Radial Introducer Sheath", size: "11 cm / 23 cm length", qty: "1" },
      { category: "Base Catheter", item: "5F Mikaelson / Simmons-1 / Cobra C2 / RC1 / Yashiro diagnostic catheter", size: "100 cm length (Cordis / Terumo / Cook)", qty: "1" },
      { category: "Base Guidewire", item: "0.035\" Hydrophilic Radiofocus Glidewire (Angled Tip)", size: "150 cm / 260 cm length", qty: "1" },
      { category: "Microcatheter", item: "2.4F / 2.7F Superselective Microcatheter (Progreat / Renegade)", size: "130 cm / 150 cm length", qty: "1" },
      { category: "Microwire", item: "0.014\" / 0.018\" Hydrophilic Steerable Microwire (Transend / Fathom)", size: "180 cm length", qty: "1" },
      { category: "Embolic Material", item: "Polyvinyl Alcohol (PVA) Particles (300-500 um / 500-700 um)", size: "Avoid <300 um particles to prevent spinal cord & bronchopulmonary shunting", qty: "1-2 vials" },
      { category: "Temporary Embolic", item: "Gel-Foam Torpedoes / Sponge", size: "Sterile sheet", qty: "1 pack" },
      { category: "Microcoils", item: "0.014\" / 0.018\" Microcoils (for aneurysm/shunt sacrifice)", size: "2 mm to 4 mm diameter", qty: "2-4 coils" }
    ],
    schemeDetails: {
      maayCode: "2849-MC018A",
      maayName: "Bronchial Artery Embolization (BAE) - Govt Reserved",
      maayBaseRate: "₹30,000",
      maayImplants: [
        { code: "2849-MC018A-IMP22", name: "PVA Particle (Max 4)", maxRate: "₹5,500" },
        { code: "2849-MC018A-IMP23", name: "Microcatheter System", maxRate: "₹19,000" }
      ],
      rghsCode: "693",
      rghsName: "Arterial Embolization (BAE / Bleeding Vessel)",
      rghsRate: "₹35,000",
      icd10Code: "R04.2 (Hemoptysis) / B90.9 (Sequelae of respiratory TB) / J47 (Bronchiectasis)",
      ihmsPreAuthDocs: "CTBA Angiography report, CXR, Hemoptysis clinical notes, CBC/PT-INR, Bedside clinical photograph."
    },
    distributorContacts: [
      { name: "PVA Particles & Microcatheters - Terumo India / Boston Scientific", contact: "+91 98292 45678 / +91 98295 67890", location: "Jaipur" },
      { name: "Cook Medical India (Mikaelson / Cobra Catheters)", contact: "+91 98291 33445", location: "Jaipur" },
      { name: "SMS Pharmacy Counter", contact: "DDC-14 / IR Central Store", location: "SMS Hospital" }
    ],
    operativeSteps: `1. Patient positioned supine; right groin cleaned, painted, and draped under sterile conditions.
2. Local infiltration of 2% Lignocaine (10 mL) given subcutaneously in right groin.
3. Right common femoral artery punctured using 18G needle; 5F vascular sheath introduced over 0.035" J-wire.
4. Thoracic descending aortography performed using 5F Pigtail catheter at T4-T6 level to survey bronchial arterial origins and aberrant collateral branches.
5. Right intercostobronchial trunk (ICBT) and Left bronchial arteries cannulated selectively using 5F Mikaelson / Cobra C2 / Simmons-1 catheter.
6. Diagnostic angiograms acquired in AP and slight oblique projections demonstrating marked arterial hypertrophy, tortuosity, hypervascular parenchymal blush, and systemic-to-pulmonary shunts.
7. CRITICAL STEP: Detailed evaluation of spinal arterial branches (Hairpin loop appearance of anterior spinal artery) performed. Confirmed no anterior spinal branch arising from the target cannulated segment.
8. 2.7F Progreat microcatheter superselected into the distal pathological branches past any potential spinal collaterals.
9. PVA particles (350-500 um / 500-700 um) suspended in dilute contrast slowly injected under continuous real-time fluoroscopic roadmapping until complete pruned stasis and cessation of abnormal hypervascular parenchymal blush.
10. Evaluation of non-bronchial systemic collaterals (intercostal arteries, internal mammary, thyrocervical trunk) performed and embolized if hypervascular.
11. Final post-embolization run confirmed complete obliteration of bleeding supply with preservation of main aortic branches.
12. Sheath removed, 15 minutes manual compression applied, sterile pressure bandage applied.`,
    postOpOrders: [
      "Complete bed rest for 6 hours; keep right leg straight.",
      "Continuous SpO2 and vital signs monitoring q30min x 2h, then q1h x 6h.",
      "Monitor for hemoptysis recurrence (record volume and color of any sputum).",
      "Neurological surveillance: Assess lower extremity motor strength, sensation, and reflex q1h x 6h (to rule out spinal cord ischemia/anterior spinal artery thrombosis).",
      "Cough suppressant and anti-tussive medication to prevent paroxysms of coughing.",
      "IV hydration @ 80-100 mL/hr to prevent contrast nephrotoxicity."
    ],
    postOpDrugsEAushadhi: [
      { name: "Inj. Tranexamic Acid", dose: "500 mg in 100 mL NS IV", freq: "tid x 48 hours", category: "Antifibrinolytic" },
      { name: "Inj. Cefoperazone + Sulbactam", dose: "1.5 gm IV", freq: "bd x 3 days", category: "Antibiotic" },
      { name: "Inj. Pantoprazole", dose: "40 mg IV", freq: "od", category: "PPI" },
      { name: "Inj. Ondansetron", dose: "4 mg IV", freq: "sos", category: "Antiemetic" },
      { name: "Syrup Dextromethorphan", dose: "10 mL PO", freq: "tid x 5 days (anti-tussive)", category: "Cough Suppressant" },
      { name: "Tab. Amoxicillin + Clavulanic Acid", dose: "625 mg PO", freq: "bd x 5 days", category: "Antibiotic" },
      { name: "Tab. Tranexamic Acid", dose: "500 mg PO", freq: "tid x 3 days", category: "Hemostatic" }
    ],
    dischargeAdvice: `1. Follow up in IR OPD / Chest & TB OPD after 2 weeks with fresh CXR.
2. Avoid strenuous physical exertion, vigorous coughing, bending over, or heavy lifting for 14 days.
3. Continue Anti-Tubercular Therapy (ATT) / Bronchiectasis nebulization regimen as prescribed.
4. RED-FLAG WARNINGS:
   - Recurrence of fresh red blood coughing (hemoptysis > 1 cup).
   - Any weakness, numbness, tingling, or heaviness in lower limbs/legs (immediate emergency visit).
   - Chest pain, severe breathlessness, or bleeding at the puncture site.`
  },

  "parto_brto": {
    id: "parto_brto",
    name: "PARTO / BRTO (Plug-Assisted / Balloon-Occluded Retrograde Transvenous Obliteration)",
    shortName: "PARTO / BRTO (Gastric Varices)",
    specialty: "Vascular Interventional Radiology - Portal Hypertension",
    category: "Portal Hypertension / Embolization",
    indications: [
      "Bleeding or high-risk Fundal / Cardio-fundal Gastric Varices (Sarin Classification: GOV2, IGV1) with Gastrorenal Shunt (GRS) or Gastrocaval Shunt",
      "Gastric varices refractory to or unsuitable for endoscopic cyanoacrylate glue injection or band ligation",
      "Refractory Hepatic Encephalopathy associated with large gastrorenal / splenorenal shunt",
      "Patients with gastric varices where TIPS is contraindicated (e.g. baseline severe encephalopathy, heart failure, high MELD)"
    ],
    contraindications: [
      "Absolute: Complete absence of gastrorenal or gastrocaval shunt (cannot perform retrograde access), Complete Portal Vein Thrombosis without cavernoma (BRTO/PARTO increases portal pressure)",
      "Relative: Severe unmanageable tense ascites or bleeding esophageal varices (may worsen post-procedure due to portal pressure elevation)"
    ],
    preOpChecklist: [
      "Contrast-enhanced Triphasic CT Abdomen with Multiplanar Reformations demonstrating size, anatomy, and caliber of Gastrorenal Shunt (GRS), draining Left Renal Vein, and inferior phrenic/pericardiac collaterals",
      "Upper GI Endoscopy report confirming Sarin Type GOV2/IGV1 gastric varices",
      "CBC, Coagulation Profile (Platelets, PT/INR, APTT), LFT (Bilirubin, Albumin), RFT (Creatinine)",
      "Child-Pugh Score, ALBI Score, MELD 3.0",
      "Sizing of Amplatzer Vascular Plug (AVP II / AVP IV) neck: Measure narrowest diameter of shunt neck on CT/DSA and size plug 30% to 50% larger",
      "Pre-op NPO 6h; IV cannula 18G on left arm"
    ],
    hardwareSpecs: [
      { category: "Vascular Access", item: "8F / 10F Long Vascular Sheath / Cook Flexor Guiding Sheath", size: "45 cm / 55 cm length (Cook / Terumo Destination)", qty: "1" },
      { category: "Base Guidewire", item: "0.035\" Hydrophilic Glidewire & 0.035\" Amplatz Super Stiff wire", size: "260 cm length", qty: "1 each" },
      { category: "Base Catheter", item: "5F Cobra C2 / Simmons-1 / MPA diagnostic catheter", size: "100 cm / 125 cm length", qty: "1" },
      { category: "Vascular Plug (PARTO)", item: "Amplatzer Vascular Plug II (AVP II) / AVP IV (Abbott / Medtronic)", size: "10 mm to 16 mm diameter (sized 30-50% > shunt neck)", qty: "1" },
      { category: "Occlusion Balloon (BRTO)", item: "Balloon Occlusion Catheter (Cook / Terumo)", size: "8.5F / 10F, 20 mm to 32 mm balloon diameter", qty: "1" },
      { category: "Microcatheter", item: "2.7F / 2.8F High-flow Microcatheter (Progreat / Renegade)", size: "130 cm / 150 cm length", qty: "1" },
      { category: "Microwire", item: "0.014\" / 0.018\" Hydrophilic Microwire", size: "180 cm length", qty: "1" },
      { category: "Embolic Material", item: "Gel-Foam Torpedoes / 3% Sodium Tetradecyl Sulfate (STS) / Polidocanol 3% / Lipiodol Ultra-Fluid", size: "Gelfoam sheets / 10ml Lipiodol / STS 3%", qty: "1 kit" },
      { category: "Microcoils", item: "0.018\" / 0.035\" Fibered Microcoils (for draining collateral occlusion)", size: "4 mm to 8 mm diameter", qty: "2-4 coils" }
    ],
    schemeDetails: {
      maayCode: "2849-IN064A (PARTO) / 2849-IN063A (BRTO)",
      maayName: "PARTO - Govt Reserve / BRTO - Govt Reserve",
      maayBaseRate: "₹46,020 (PARTO) / ₹40,760 (BRTO)",
      maayImplants: [
        { code: "2849-IN064A-IMP49", name: "Vascular Plug (Amplatzer)", maxRate: "₹44,000" },
        { code: "2849-IN064A-IMP50", name: "Coil (Max 3)", maxRate: "₹7,900" },
        { code: "2849-IN064A-IMP51", name: "Lipiodol Ultra-Fluid", maxRate: "₹18,000" },
        { code: "2849-IN063A-IMP46", name: "Lipiodol Ultra-Fluid", maxRate: "₹18,000" },
        { code: "2849-IN063A-IMP47", name: "Microcatheter System", maxRate: "₹19,000" },
        { code: "2849-IN063A-IMP48", name: "Coils", maxRate: "₹7,900" }
      ],
      rghsCode: "1324 (BRTO) / 693",
      rghsName: "BRTO / Transvenous Variceal Obliteration",
      rghsRate: "₹40,000",
      icd10Code: "I85.0 (Esophageal / Gastric varices with bleeding) / K76.6 (Portal hypertension) / K74.6 (Cirrhosis of liver)",
      ihmsPreAuthDocs: "Endoscopy report, Triphasic CT Abdomen showing GRS, LFT, CBC, PT-INR, Pre-procedure clinical photograph."
    },
    distributorContacts: [
      { name: "Amplatzer Vascular Plug (Abbott India / Medtronic)", contact: "+91 98290 88776", location: "Jaipur" },
      { name: "Lipiodol Ultra-Fluid (Guerbet India)", contact: "+91 98290 12345", location: "Jaipur / SMS IR Store" },
      { name: "Terumo India (Destination Sheath & Progreat)", contact: "+91 98292 45678", location: "Jaipur" },
      { name: "SMS Pharmacy Counter", contact: "DDC-14 / IR Central Store", location: "SMS Hospital" }
    ],
    operativeSteps: `1. Patient placed in supine position; right internal jugular vein (RIJV) or right common femoral vein (RCFV) cleaned, painted, draped under sterile conditions.
2. Local anesthesia given with 10 mL 2% Lignocaine.
3. Ultrasound-guided puncture of Right Internal Jugular Vein (or Right Femoral Vein) performed using 18G needle; 8F/10F 45cm vascular sheath positioned over 0.035" guidewire.
4. 5F Cobra C2 / MPA catheter used to selectively cannulate the Left Renal Vein and enter the Gastrorenal Shunt (GRS).
5. Retrograde venography of the shunt performed in multiple views demonstrating the anatomy of gastric varices, afferent feeding portal/splenic veins (posterior gastric, left gastric, short gastric veins), and efferent collaterals (inferior phrenic, pericardiac veins).
6. 0.035" Amplatz Super Stiff guidewire anchored securely within the variceal complex.
7. Delivery sheath advanced to the constriction of the shunt neck.
8. [PARTO Technique]: Appropriately sized Amplatzer Vascular Plug II (e.g. 12-14 mm) deployed at the narrowest portion of the shunt. Co-axial microcatheter advanced through/past the plug into the gastric variceal sac.
9. [Embolization]: Embolic slurry (Gelfoam torpedoes mixed with contrast and Lipiodol, or 3% STS foam) slowly injected into the gastric variceal nest until complete stagnation and obliteration of the varices achieved.
10. Collateral draining veins (inferior phrenic vein) coil embolized if significant escape noted.
11. Final delayed venogram showed complete thrombosis and obliteration of gastric varices with no residual shunt flow.
12. Sheath removed; manual compression applied for 10 minutes; sterile dressing applied.`,
    postOpOrders: [
      "Bed rest for 6 hours with vitals monitoring q1h.",
      "Monitor for abdominal pain, fever, or signs of worsening portal hypertension (e.g. new onset ascites, esophageal variceal bleeding).",
      "Strict I/O monitoring; maintain urine output > 30 mL/hr.",
      "Check abdomen girth daily.",
      "Oral soft diet after 4 hours if stable."
    ],
    postOpDrugsEAushadhi: [
      { name: "Inj. Ceftriaxone", dose: "1 gm IV", freq: "bd x 3 days", category: "Antibiotic Prophylaxis" },
      { name: "Inj. Pantoprazole", dose: "40 mg IV", freq: "od", category: "PPI" },
      { name: "Inj. Tramadol", dose: "50 mg IV in 100 mL NS", freq: "sos for abdominal pain", category: "Analgesic" },
      { name: "Syrup Lactulose", dose: "20-30 mL PO", freq: "tid (titrate to 2-3 soft stools/day)", category: "Laxative / Anti-Encephalopathy" },
      { name: "Tab. Rifaximin", dose: "550 mg PO", freq: "bd x 1 month", category: "Gut Flora Modifier" },
      { name: "Tab. Carvedilol / Propranolol", dose: "6.25 mg / 20 mg PO", freq: "bd (target resting HR 55-60 bpm)", category: "Non-Selective Beta Blocker" },
      { name: "Tab. Pantoprazole", dose: "40 mg PO", freq: "od x 14 days", category: "Gastroprotective" }
    ],
    dischargeAdvice: `1. Follow up in IR OPD and Gastroenterology OPD after 4 weeks with fresh Upper GI Endoscopy (EGD) to assess esophageal varices and Ultrasound Abdomen with Portal Doppler.
2. Maintain low-salt diet (<2g/day) and avoid NSAID painkillers.
3. Continue Beta-blocker (Tab. Carvedilol 6.25mg bd) and Lactulose strictly.
4. RED-FLAG WARNINGS:
   - Any vomiting of blood (hematemesis) or passage of black tarry stools (melena).
   - Abdominal distension, severe abdominal pain, or leg swelling.
   - Drowsiness, confusion, day-night reversal, or flapping tremors of hands (hepatic encephalopathy).`
  },

  "pve": {
    id: "pve",
    name: "Portal Vein Embolization (PVE)",
    shortName: "PVE (Pre-Hepatectomy FLR Hypertrophy)",
    specialty: "Vascular Interventional Radiology - Hepato-Pancreato-Biliary",
    category: "Oncology / Pre-Surgical Optimization",
    indications: [
      "Planned major right hepatectomy / extended right hepatectomy where Future Liver Remnant (FLR) is insufficient (< 25-30% in normal liver, < 40% in cirrhotic or post-chemotherapy damaged liver)",
      "Unilobar Hepatocellular Carcinoma (HCC), Intrahepatic Cholangiocarcinoma (ICC), or Colorectal Liver Metastases (CRLM) planned for curative surgical resection"
    ],
    contraindications: [
      "Absolute: Complete tumor invasion of the planned Future Liver Remnant (FLR) or its portal vein branch, Severe portal hypertension with high-grade varices, Extensive distant extrahepatic metastases",
      "Relative: Uncorrectable coagulopathy (Platelets < 50k, INR > 1.8), Biliary infection / active cholangitis (must decompress before PVE)"
    ],
    preOpChecklist: [
      "Contrast-enhanced CT Liver Volumetry calculating Total Functional Liver Volume (TFLV), Tumor Volume, and Future Liver Remnant Volume (% FLR = FLR Vol / [TFLV - Tumor Vol] x 100)",
      "Baseline LFT (Bilirubin, Albumin, Transaminases), CBC, Coagulation (PT/INR)",
      "Screening for underlying cirrhosis / non-alcoholic steatohepatitis (NASH) / chemotherapy-associated steatohepatitis (CASH)",
      "NPO 6h; IV hydration; 18G IV cannula"
    ],
    hardwareSpecs: [
      { category: "Percutaneous Access", item: "21G / 22G Chiba Needle (15 cm / 20 cm) + 4F/5F Micropuncture Access Set (AccuStick/Neff)", size: "4F / 5F set (Cook / BD)", qty: "1" },
      { category: "Base Guidewire", item: "0.018\" Nitinol wire & 0.035\" Hydrophilic Glidewire", size: "150 cm / 180 cm length", qty: "1 each" },
      { category: "Base Catheter", item: "5F Cobra C2 / Berenstein / Kumpe / Omni Flush catheter", size: "65 cm / 100 cm length", qty: "1" },
      { category: "Microcatheter", item: "2.7F / 2.0F Progreat / Renegade Microcatheter", size: "130 cm length", qty: "1" },
      { category: "Microwire", item: "0.014\" / 0.018\" Steerable Hydrophilic Microwire", size: "180 cm length", qty: "1" },
      { category: "Embolic Material", item: "Polyvinyl Alcohol (PVA) Particles (300-500 um / 500-700 um) / Gel-Foam slurry", size: "2 vials PVA", qty: "2" },
      { category: "Liquid Embolic", item: "N-butyl Cyanoacrylate (NBCA) Glue (Histoacryl / Glubran 2) + Lipiodol Ultra-Fluid", size: "1:2 to 1:4 Glue-Lipiodol ratio", qty: "1 kit" },
      { category: "Vascular Plugs / Coils", item: "Amplatzer Vascular Plug / Fibered Coils (for main right PV branches & tract embolization)", size: "6 mm to 10 mm", qty: "2-4" }
    ],
    schemeDetails: {
      maayCode: "2849-IN065A",
      maayName: "Portal Vein Embolization (PVE) - Govt Reserved",
      maayBaseRate: "₹26,680",
      maayImplants: [
        { code: "2849-IN065A-IMP46", name: "Lipiodol Ultra-Fluid", maxRate: "₹18,000" },
        { code: "2849-IN065A-IMP47", name: "Microcatheter System", maxRate: "₹19,000" },
        { code: "2849-IN065A-IMP48", name: "Coils", maxRate: "₹7,900" }
      ],
      rghsCode: "693",
      rghsName: "Arterial & Venous Embolization (PVE)",
      rghsRate: "₹35,000",
      icd10Code: "C22.0 (HCC) / C22.1 (Intrahepatic cholangiocarcinoma) / C78.7 (Secondary neoplasm liver)",
      ihmsPreAuthDocs: "CT Volumetry report, Surgical referral note, LFT/CBC/PT-INR, Bedside clinical photograph."
    },
    distributorContacts: [
      { name: "Histoacryl Glue (B. Braun) / Glubran 2 - Jaipur Surgical", contact: "+91 98290 55667", location: "Jaipur" },
      { name: "Lipiodol Ultra-Fluid (Guerbet India)", contact: "+91 98290 12345", location: "Jaipur / SMS IR Store" },
      { name: "Cook Medical (AccuStick Micropuncture)", contact: "+91 98291 33445", location: "Jaipur" }
    ],
    operativeSteps: `1. Patient in supine position; right mid-axillary flank and epigastrium prepared and draped under aseptic precautions.
2. Local anesthesia administered with 15 mL of 2% Lignocaine down to liver capsule.
3. Ipsilateral (or contralateral) ultrasound-guided puncture of a right peripheral portal vein branch (anterior or posterior branch) performed using 21G Chiba needle.
4. Free blood flow confirmed; 0.018" nitinol wire placed and exchanged for 5F vascular sheath via 5F micropuncture transition dilator.
5. Portography performed through 5F Omni Flush / Cobra catheter confirming portal branching anatomy, portal vein trunk patency, and absence of flow-limiting thrombus.
6. Catheter and 2.7F microcatheter superselected into right anterior and right posterior portal branches (and segment 4 branches if extended right hepatectomy planned).
7. PVA particles (300-500 um) injected followed by slow injection of NBCA Glue-Lipiodol mixture (1:3 ratio with non-ionic contrast/lipiodol) under strict fluoroscopic lock to occlude all target portal branches completely.
8. Care taken to ensure no spillover or reflux into left portal vein (FLR branch).
9. Post-embolization portogram confirmed complete occlusion of right portal branches with hyperemic, accelerated flow redirecting exclusively into the left portal vein / FLR.
10. Transhepatic puncture tract embolized with Gelfoam torpedoes / microcoils during sheath withdrawal to prevent hemoperitoneum or subcapsular hematoma.
11. Sterile dressing applied.`,
    postOpOrders: [
      "Strict bed rest for 6 hours; right lateral decubitus positioning for 2 hours to compress puncture site.",
      "Monitor vitals and abdominal tenderness q1h x 6h.",
      "Monitor for Post-Embolization syndrome (fever, mild RUQ pain, transient transaminitis).",
      "Check LFT and CBC at 24 hours post-procedure.",
      "Plan repeat CT Volumetry after 3 to 4 weeks to assess Kinetic Growth Rate (KGR > 2%/week) and FLR hypertrophy prior to definitive hepatectomy."
    ],
    postOpDrugsEAushadhi: [
      { name: "Inj. Paracetamol", dose: "1 gm IV infusion", freq: "sos for pain/fever", category: "Analgesic" },
      { name: "Inj. Tramadol", dose: "50 mg IV in 100 mL NS", freq: "sos", category: "Analgesic" },
      { name: "Inj. Pantoprazole", dose: "40 mg IV", freq: "od", category: "PPI" },
      { name: "Inj. Cefuroxime", dose: "1.5 gm IV", freq: "bd x 2 days", category: "Antibiotic" },
      { name: "Tab. Paracetamol", dose: "650 mg PO", freq: "sos", category: "Analgesic" },
      { name: "Tab. Pantoprazole", dose: "40 mg PO", freq: "od x 7 days", category: "PPI" }
    ],
    dischargeAdvice: `1. Follow up in IR OPD and GI Surgery OPD after 3-4 weeks with fresh Triphasic CT Abdomen with Liver Volumetry.
2. Maintain high-protein diet to support hepatic parenchymal regeneration.
3. Avoid heavy physical exertion and alcohol consumption.
4. RED-FLAG WARNINGS: Severe right upper quadrant pain, high fever (>101°F), jaundice, or sudden dizziness/weakness.`
  },

  "avm": {
    id: "avm",
    name: "Arteriovenous Malformation (AVM) Embolization",
    shortName: "Peripheral / Hand / Extremity AVM Embolization",
    specialty: "Vascular Interventional Radiology - Peripheral Vascular / Malformations",
    category: "Vascular Malformations / Liquid Embolic",
    indications: [
      "High-flow Peripheral Arteriovenous Malformations (Hand / Upper extremity / Lower extremity / Head & Neck / Pelvic)",
      "Symptomatic AVM with intractable pain, ischemic steal phenomenon, ulceration, bleeding, or functional impairment (Schobinger Stage II-IV)",
      "High-output cardiac failure due to large arteriovenous shunting"
    ],
    contraindications: [
      "Absolute: Asymptomatic quiescent AVM (Schobinger Stage I) without risk factors (intervention may stimulate rapid progression)",
      "Relative: High risk of non-target distal digit ischemia or compartment syndrome"
    ],
    preOpChecklist: [
      "Dynamic Contrast-Enhanced MRI / MRA of the extremity characterizing nidus morphology (Cho / Yakes / ISSVA classification)",
      "Color Doppler Ultrasound showing flow velocities and resistance index",
      "Detailed baseline neurovascular examination of the extremity (motor power, sensation, 2-point discrimination, capillary refill time, distal pulses)",
      "CBC, Coagulation (PT/INR, APTT), RFT",
      "NPO 6h; IV access on contralateral limb"
    ],
    hardwareSpecs: [
      { category: "Vascular Access", item: "5F / 6F Introducer Sheath (Femoral / Brachial / Radial)", size: "11 cm / 23 cm length", qty: "1" },
      { category: "Base Catheter", item: "5F Guiding Catheter (Envoy / Guider / Mach 1) / Diagnostic Catheter", size: "90 cm / 100 cm length", qty: "1" },
      { category: "Base Guidewire", item: "0.035\" Hydrophilic Glidewire", size: "150 cm / 260 cm length", qty: "1" },
      { category: "Microcatheter", item: "DMSO-compatible Microcatheter (Marathon / Apollo / Rebound) or Flow-directed (Magic / Sonic) / Progreat", size: "150 cm / 165 cm length", qty: "1-2" },
      { category: "Microwire", item: "0.010\" / 0.014\" Steerable Hydrophilic Microwire (Synchro / Transend / Traxcess)", size: "200 cm length", qty: "1" },
      { category: "Liquid Embolic", item: "Onyx 18 / Onyx 34 (EVOH) or SQUID / PHIL or NBCA Glue (Histoacryl) + Lipiodol", size: "1.5 mL vials Onyx / 1 mL NBCA", qty: "2-3 vials" },
      { category: "Percutaneous Needles", item: "20G / 21G Direct Puncture Needles (for direct transvenous/transnidal puncture)", size: "4 cm / 7 cm", qty: "2" },
      { category: "Detachable Coils", item: "Target / Concerto Detachable Microcoils (for outflow vein occlusion)", size: "2 mm to 8 mm", qty: "2-4" }
    ],
    schemeDetails: {
      maayCode: "2849-IN049B (AVM Embolization) / 2849-IN077B (EVOH Package)",
      maayName: "AVM Package - Govt Reserved / EVOH Package - AVM",
      maayBaseRate: "₹1,04,300 (IN049B) / ₹69,500 (IN077B)",
      maayImplants: [
        { code: "2849-IN077B-IMP54", name: "DMSO Compatible Microcatheter (Max 2)", maxRate: "₹1,50,000" },
        { code: "2849-IN077B-IMP55", name: "Guide Catheter", maxRate: "₹1,50,000" },
        { code: "2849-IN077B-IMP56", name: "Micro-Guidewire", maxRate: "₹1,50,000" },
        { code: "2849-IN077B-IMP57", name: "Upto 2 EVOH (Onyx)", maxRate: "₹1,50,000" }
      ],
      rghsCode: "693",
      rghsName: "Arteriovenous Malformation (AVM) Embolization",
      rghsRate: "₹35,000",
      icd10Code: "Q27.31 (AVM of vessel of upper limb) / Q27.32 (AVM lower limb) / I77.0 (Acquired AV fistula)",
      ihmsPreAuthDocs: "MRI/MRA extremity report, Clinical photos of AVM, Pre-op DSA stills, CBC/PT-INR."
    },
    distributorContacts: [
      { name: "Medtronic India (Onyx 18/34, Marathon Microcatheter)", contact: "+91 98290 44332", location: "Jaipur" },
      { name: "MicroVention / Terumo (SQUID / Traxcess / Headway)", contact: "+91 98292 45678", location: "Jaipur" },
      { name: "B. Braun India (Histoacryl Glue)", contact: "+91 98290 55667", location: "Jaipur" }
    ],
    operativeSteps: `1. Patient in supine position; extremity and vascular access site (RCFA or Right Radial) prepared and draped aseptically.
2. Local anesthesia given with 2% Lignocaine; vascular sheath positioned under ultrasound guidance.
3. 5F Guiding catheter advanced into subclavian / brachial artery (for hand AVM) or femoral/iliac artery.
4. Multi-projection high-frame-rate DSA angiography performed identifying feeding arterial pedicles, exact nidus configuration (Yakes Type II/III/IV), and early draining venous channels.
5. Microcatheter advanced coaxially over 0.010"/0.014" microwire and wedged superselectively into the nidus epicentre.
6. (If using Onyx): Microcatheter flushed with 10 mL saline, dead space filled with DMSO, followed by slow, controlled injection of Onyx 18/34 under continuous fluoroscopic subtracted roadmap.
7. Onyx lava-like casting achieved within the nidal network, taking care to observe reflux along microcatheter tip and halt injection when adequate nidus penetration achieved.
8. (If direct puncture): 21G butterfly needle placed directly into nidal venous lake under USG; direct injection of NBCA glue-Lipiodol (1:2) performed with tourniquet flow control.
9. Final control angiography showed complete eradication/subtotal occlusion of the AVM nidus with preservation of normal distal digital/extremity perfusion.
10. Catheter retrieved with gentle traction; vascular sheath removed; hemostasis achieved with manual compression.`,
    postOpOrders: [
      "Keep the affected limb elevated on 2 pillows to minimize inflammatory edema.",
      "Check distal capillary refill, radial/ulnar/pedal pulse, and finger warmth q30min x 2h, then q1h x 6h.",
      "Monitor for compartment syndrome: Severe pain out of proportion, pallor, paresthesias, pulselessness.",
      "Cold ice packs applied intermittently over the treated area.",
      "Anti-inflammatory steroid taper (Tab. Prednisolone / Deflazacort) to reduce post-embolic swelling."
    ],
    postOpDrugsEAushadhi: [
      { name: "Tab. Prednisolone", dose: "30 mg PO od with breakfast", freq: "Taper by 10mg every 3 days (total 9 days)", category: "Corticosteroid" },
      { name: "Tab. Aceclofenac + Paracetamol", dose: "100 mg / 325 mg PO", freq: "bd x 5 days", category: "Analgesic / Anti-inflammatory" },
      { name: "Tab. Pantoprazole", dose: "40 mg PO", freq: "od (before breakfast)", category: "PPI" },
      { name: "Inj. Tramadol", dose: "50 mg IV", freq: "sos for breakthrough pain", category: "Analgesic" },
      { name: "Tab. Amoxicillin + Clavulanic Acid", dose: "625 mg PO", freq: "bd x 5 days", category: "Antibiotic" }
    ],
    dischargeAdvice: `1. Keep the limb elevated while resting. Do not let the treated arm/leg hang dependent for long periods.
2. Follow up in IR OPD at 2 weeks and 6 weeks for clinical evaluation and repeat MRI at 3 months.
3. Some local swelling, firmness, and mild throbbing pain are expected during the first 5-7 days as the AVM thromboses.
4. RED-FLAG WARNINGS:
   - Severe severe pain, dusky blue/pale cold fingers/toes, or loss of sensation in digits.
   - Puncture site swelling, bleeding, or fever > 101°F.`
  },

  "varicocele": {
    id: "varicocele",
    name: "Varicocele Embolization (Coil & Foam Sclerotherapy)",
    shortName: "Varicocele Embolization (Testicular Vein)",
    specialty: "Vascular Interventional Radiology - Men's Health / Embolization",
    category: "Venous / Sclerotherapy",
    indications: [
      "Symptomatic primary or recurrent Varicocele (Grade II or III) with chronic dull scrotal pain / heaviness",
      "Male infertility / Subfertility with abnormal semen analysis parameters (oligospermia, asthenospermia, teratospermia)",
      "Testicular hypotrophy or growth arrest in adolescents",
      "Recurrent varicocele following surgical ligation (Palomo / Marmar / Laparoscopic repair)"
    ],
    contraindications: [
      "Absolute: Uncontrolled active systemic infection, Severe iodinated contrast allergy",
      "Relative: Isolated subclinical Grade I varicocele without pain or infertility"
    ],
    preOpChecklist: [
      "Scrotal Color Doppler Ultrasound documenting pampiniform venous plexus diameter (>3.0 mm), retrograde flow duration > 2 seconds on Valsalva maneuver, testicular volumes",
      "Semen Analysis report (for infertility workup)",
      "CBC, Coagulation (PT/INR), RFT (Creatinine)",
      "NPO 4h; local preparation"
    ],
    hardwareSpecs: [
      { category: "Vascular Access", item: "5F / 6F Introducer Sheath (Right CFA or Right IJV / Basilic)", size: "11 cm length", qty: "1" },
      { category: "Base Catheter", item: "5F Cobra C2 / Simmons-1 / MPA / Berenstein catheter", size: "100 cm / 125 cm length", qty: "1" },
      { category: "Base Guidewire", item: "0.035\" Hydrophilic Angled Radiofocus Glidewire", size: "180 cm / 260 cm length", qty: "1" },
      { category: "Microcatheter", item: "2.7F Progreat Microcatheter", size: "130 cm length", qty: "1" },
      { category: "Embolic Coils", item: "0.035\" / 0.018\" Fibered Platinum/Nitinol Coils (Nestler / Tornado / Nester)", size: "6 mm, 8 mm, 10 mm, 12 mm x 14 cm", qty: "4-6 coils" },
      { category: "Sclerosant", item: "Sodium Tetradecyl Sulfate (STS) 3% (Fibrovein) or Polidocanol 3% (Aethoxysklerol)", size: "3% ampoule (foamed 1:4 with air/contrast via Tessari method)", qty: "1-2 amp" },
      { category: "Syringes", item: "3-Way Stopcock + Two 5 mL Luer Lock Syringes for Tessari foam generation", size: "Standard set", qty: "1 kit" }
    ],
    schemeDetails: {
      maayCode: "2849-IN020B (Coil Embolization) / 1849-IN057A (Sclerotherapy)",
      maayName: "Coil embolization (with microcatheter) / Sclerotherapy",
      maayBaseRate: "₹30,340",
      maayImplants: [
        { code: "2849-IN020B-IMP379", name: "Microcatheter System", maxRate: "₹19,000" },
        { code: "2849-IN020B-IMP380", name: "Coil (Max 3)", maxRate: "₹21,700" }
      ],
      rghsCode: "693 / 17",
      rghsName: "Venous / Arterial Embolization (Varicocele)",
      rghsRate: "₹35,000",
      icd10Code: "I86.1 (Scrotal varices / Varicocele) / N46.8 (Other male infertility)",
      ihmsPreAuthDocs: "Scrotal Doppler report, Semen analysis, Pre-procedure clinical notes, Bedside photo."
    },
    distributorContacts: [
      { name: "Cook Medical (Nester / Tornado Coils)", contact: "+91 98291 33445", location: "Jaipur" },
      { name: "Fibrovein / STS 3% Sclerosant - SMS IR Store", contact: "+91 98290 12345", location: "Jaipur" },
      { name: "Terumo India (Cobra / Glidewire)", contact: "+91 98292 45678", location: "Jaipur" }
    ],
    operativeSteps: `1. Patient supine on angio table; right groin (or right arm/neck) cleaned, painted, draped under aseptic precautions.
2. Local anesthesia infiltrated with 2% Lignocaine; 5F vascular sheath introduced over guidewire.
3. 5F Cobra C2 / Simmons-1 catheter advanced into Left Renal Vein; selective cannulation of the Left Internal Spermatic (Testicular) Vein orifice achieved at L1-L2 level.
4. Diagnostic venogram performed in supine position and with Valsalva maneuver demonstrating retrograde flow, incompetent valves, multiple parallel collaterals (Bahren Type I-IV), and retroperitoneal cross-connections.
5. Catheter / microcatheter navigated deep down the testicular vein to the level of the superior pubic ramus / inguinal canal.
6. [Sandwich Technique Embolization]: 
   a. Distal coil pack deployed at pelvic brim level (0.035" 6-8mm fibered coils).
   b. Microcatheter retracted to mid-portion; 3-5 mL of 3% STS sclerosant foam (Tessari ratio 1:4 with air and contrast) injected under strict manual compression of the superficial inguinal ring to ensure dwell time in collateral channels.
   c. Proximal coil pack (8-10mm coils) deployed in the upper testicular vein 1-2 cm below the left renal vein junction.
7. Final control venogram through renal vein confirmed complete occlusion of the testicular vein trunk and all collateral channels with no reflux or non-target embolization.
8. Sheath removed; manual compression applied for 10 minutes; sterile dressing placed.`,
    postOpOrders: [
      "Bed rest for 2 hours; ambulation permitted after 2 hours.",
      "Wear tight scrotal support (athletic supporter / V-shaped brief) continuously for 7 days.",
      "Mild scrotal ache or flank discomfort is expected secondary to thrombophlebitis / chemical phlebitis.",
      "Ice pack application to scrotum for 15 minutes q4h x 24 hours.",
      "Discharge on same day (Day care procedure)."
    ],
    postOpDrugsEAushadhi: [
      { name: "Tab. Ibuprofen + Paracetamol", dose: "400 mg / 325 mg PO", freq: "tid x 3 days (after meals)", category: "NSAID Analgesic" },
      { name: "Tab. Pantoprazole", dose: "40 mg PO", freq: "od (before breakfast) x 5 days", category: "PPI" },
      { name: "Tab. Cefuroxime", dose: "500 mg PO", freq: "bd x 3 days", category: "Antibiotic Prophylaxis" },
      { name: "Tab. Deflazacort", dose: "6 mg PO", freq: "bd x 3 days (reduces phlebitis pain)", category: "Anti-inflammatory" }
    ],
    dischargeAdvice: `1. Wear scrotal support day and night for 1 week.
2. Avoid heavy weight lifting (>10 kg), strenuous gym workouts, running, cycling, and sexual intercourse for 10 days.
3. Follow up in IR OPD at 6 weeks with scrotal Doppler; repeat Semen Analysis at 3 months and 6 months (spermatogenesis cycle takes ~74 days).
4. RED-FLAG WARNINGS: Severe increasing testicular pain, high fever, marked scrotal swelling, or groin hematoma.`
  },

  "central_venoplasty": {
    id: "central_venoplasty",
    name: "Central Venoplasty & Stenting (SVC / Subclavian / Innominate / Ilio-Caval)",
    shortName: "Central Venous Angioplasty & Stenting",
    specialty: "Vascular Interventional Radiology - Hemodialysis Access & Central Venous",
    category: "Angioplasty / Stenting",
    indications: [
      "Central Vein Stenosis (CVS) or Occlusion in hemodialysis patients causing massive arm/breast/facial swelling, prolonged bleeding post-dialysis (>30 min), elevated dynamic venous pressures (>200 mmHg), or dialysis inadequacy (low Kt/V)",
      "Superior Vena Cava (SVC) Syndrome secondary to mediastinal fibrosis, malignancy, or indwelling catheter trauma",
      "Ilio-caval venous occlusion / May-Thurner Syndrome / Post-thrombotic syndrome"
    ],
    contraindications: [
      "Absolute: Active bacteremia / untreated catheter sepsis (must clear sepsis before stenting)",
      "Relative: Uncorrected severe coagulopathy"
    ],
    preOpChecklist: [
      "CT Venogram of Chest & Neck / Fistulogram showing site, length, and degree of central venous stenosis (Subclavian, Innominate, SVC, or Iliac vein)",
      "Dialysis parameters: Access flow rate (Qa), Dynamic venous pressure (Vp), Dialysis schedule (coordinate with Nephrology)",
      "CBC, Coagulation (PT/INR, APTT), RFT (Creatinine)",
      "NPO 4h; Heparinization plan (3000-5000 IU intra-op)"
    ],
    hardwareSpecs: [
      { category: "Vascular Access", item: "6F to 10F Vascular Sheath (Femoral / Brachial / Fistula)", size: "11 cm / 23 cm / 45 cm length", qty: "1" },
      { category: "Base Guidewire", item: "0.035\" Hydrophilic Glidewire & 0.035\" Amplatz Super Stiff wire", size: "260 cm length", qty: "1 each" },
      { category: "Base Catheter", item: "5F Kumpe / Berenstein / Headhunter / Cobra catheter", size: "100 cm length", qty: "1" },
      { category: "High-Pressure PTA Balloon", item: "High-Pressure Angioplasty Balloon (Conquest / Atlas / Mustang / XXL)", size: "8 mm to 14 mm diameter x 40 mm / 60 mm (rated to 20-30 atm)", qty: "1-2 balloons" },
      { category: "Self-Expanding Venous Stent", item: "Dedicated Venous Bare Metal Stent (Wallstent / SMART / Abre / Venovo) or Covered Stent (Fluency / Viabahn)", size: "10 mm to 16 mm diameter x 40 mm to 80 mm length", qty: "1 stent" },
      { category: "Inflation Device", item: "High-Pressure 30 atm Inflation Syringe Device with Gauge", size: "20 mL / 30 atm", qty: "1" },
      { category: "Anticoagulation", item: "Inj. Heparin Sodium", size: "5000 IU / 5 mL", qty: "1 vial" }
    ],
    schemeDetails: {
      maayCode: "2849-IN026C (Bare Stent) / 2849-IN026E (Covered Stent)",
      maayName: "Angioplasty and bare metal stenting (venous) Govt Reserve / Covered Stenting",
      maayBaseRate: "₹35,440 (IN026C) / ₹45,080 (IN026E)",
      maayImplants: [
        { code: "2849-IN026C-IMP385", name: "High Pressure Balloon", maxRate: "₹9,800" },
        { code: "2849-IN026C-IMP386", name: "High Pressure Large Balloon", maxRate: "₹18,800" },
        { code: "2849-IN026C-IMP387", name: "Metallic Venous Stent", maxRate: "₹37,000" },
        { code: "2849-IN026E-IMP390", name: "Covered Stent", maxRate: "₹95,000" }
      ],
      rghsCode: "583 / 843",
      rghsName: "Venous Angioplasty & Stenting",
      rghsRate: "₹35,000",
      icd10Code: "I87.1 (Compression of vein / Venous stenosis) / T82.858A (Vascular graft stenosis) / I87.9 (Venous disorder)",
      ihmsPreAuthDocs: "CT Venography report, Fistulogram stills, Nephrology referral, Bedside photograph."
    },
    distributorContacts: [
      { name: "BD Bard (Conquest High-Pressure Balloon / Fluency Covered Stent)", contact: "+91 98290 77889", location: "Jaipur" },
      { name: "Boston Scientific (Wallstent / Mustang Balloon)", contact: "+91 98295 67890", location: "Jaipur" },
      { name: "Medtronic (Abre Venous Stent)", contact: "+91 98290 44332", location: "Jaipur" }
    ],
    operativeSteps: `1. Patient in supine position; right femoral vein and/or dialysis fistula arm prepped and draped under sterile conditions.
2. 2% Lignocaine local anesthesia administered; vascular sheath placed smoothly under ultrasound guidance.
3. Diagnostic venography performed through 5F catheter confirming high-grade (>80%) central venous stenosis / occlusion of the Innominate / Subclavian / SVC vein with dense retrograde collateral venous drainage.
4. Lesion crossed carefully using 0.035" angled Glidewire supported by 5F Kumpe / Berenstein catheter.
5. Intravenous Heparin (3000-5000 IU) administered.
6. Guidewire exchanged for 0.035" 260cm Amplatz Super Stiff wire anchored safely in IVC (if femoral) or SVC/RA.
7. Graded balloon angioplasty performed with High-Pressure Balloon (e.g. 10 mm / 12 mm x 40 mm) inflated up to 20-26 atmospheres with inflation device until waist fully effaced (sustained for 60-90 seconds).
8. Post-angioplasty venogram evaluated: If significant elastic recoil (>30%) or flow-limiting dissection observed, a self-expanding bare metal stent (e.g. 12 mm x 60 mm Wallstent) or covered stent deployed across the lesion.
9. Post-stent balloon dilatation performed to ensure complete stent wall apposition.
10. Final venogram demonstrated brisk, unobstructed central flow into the Right Atrium with immediate disappearance of collateral venous distension.
11. Sheath removed; manual hemostasis achieved; sterile compression dressing applied.`,
    postOpOrders: [
      "Bed rest for 4-6 hours (if femoral) or 2 hours (if brachial/fistula).",
      "Monitor access site for hematoma and record arm circumference at baseline and 6 hours.",
      "Check distal radial thrill and bruit of AV fistula frequently.",
      "Hemodialysis can be scheduled for the following day (inform nephrology to use minimal/regional heparin).",
      "Antiplatelet therapy initiated."
    ],
    postOpDrugsEAushadhi: [
      { name: "Tab. Aspirin", dose: "75 mg PO od", freq: "od (after lunch) x 3 months", category: "Antiplatelet" },
      { name: "Tab. Clopidogrel", dose: "75 mg PO od", freq: "od x 3 months (if stented)", category: "Antiplatelet" },
      { name: "Tab. Pantoprazole", dose: "40 mg PO", freq: "od", category: "PPI" },
      { name: "Tab. Paracetamol", dose: "650 mg PO", freq: "sos for pain", category: "Analgesic" }
    ],
    dischargeAdvice: `1. Dialysis can proceed as scheduled from tomorrow. Inform the dialysis technician that central venoplasty was performed and high venous pressures should resolve.
2. Do NOT allow blood pressure measurement or tourniquet application on the fistula arm.
3. Take antiplatelet medications (Aspirin + Clopidogrel) strictly to maintain stent patency.
4. Follow up in IR OPD at 4 weeks with access flow measurement.
5. RED-FLAG WARNINGS: Sudden rapid swelling of arm, face, or neck, loss of fistula thrill/vibration, or bleeding from puncture site.`
  },

  "ptbd": {
    id: "ptbd",
    name: "Percutaneous Transhepatic Biliary Drainage (PTBD) & Stenting",
    shortName: "PTBD & Biliary SEMS",
    specialty: "Non-Vascular Interventional Radiology - Hepato-Biliary",
    category: "Biliary / Drainage / Stenting",
    indications: [
      "Malignant Biliary Obstruction (Carcinoma Gallbladder, Cholangiocarcinoma / Klatskin Tumor Bismuth I-IV, Periampullary Ca, Ca Head of Pancreas, Metastatic lymphadenopathy) with failed/unfeasible ERCP",
      "Acute Cholangitis / Pyogenic Cholangitis requiring urgent biliary decompression",
      "Post-cholecystectomy / Post-surgical Biliary Stricture or Bile Duct Transection/Leak",
      "Pre-operative biliary decompression before major liver resection"
    ],
    contraindications: [
      "Absolute: Uncorrectable severe coagulopathy (INR > 1.8, Platelets < 50k - must transfuse FFP/platelets)",
      "Relative: Massive tense ascites (drain ascites prior to puncture to prevent peritonitis/catheter dislodgement)"
    ],
    preOpChecklist: [
      "MRCP / Triphasic CT Abdomen defining level of obstruction (Bismuth classification), right/left ductal anatomy, and intrahepatic biliary radical (IHBR) dilatation",
      "Baseline LFT (Total & Direct Bilirubin, SGOT, SGPT, ALP), CBC, PT/INR, Serum Creatinine",
      "Prophylactic Antibiotic: Inj. Cefoperazone + Sulbactam 1.5g IV given 1 hour prior to procedure",
      "NPO 6h; IV line with 18G cannula; consent for external vs internal-external drainage vs stenting"
    ],
    hardwareSpecs: [
      { category: "Percutaneous Access", item: "21G / 22G Chiba Needle (15 cm / 20 cm) + 4F/5F AccuStick / Neff Micropuncture set", size: "4F / 5F set (Cook / BD)", qty: "1" },
      { category: "Base Guidewires", item: "0.018\" Nitinol Platinum wire & 0.035\" Hydrophilic Stiff Glidewire & 0.035\" Amplatz Super Stiff wire", size: "180 cm / 260 cm length", qty: "1 each" },
      { category: "Manipulation Catheter", item: "5F Kumpe / KMP / Cobra C2 catheter", size: "65 cm / 100 cm length", qty: "1" },
      { category: "Fascial Dilators", item: "6F, 8F, 10F Dilators", size: "Standard pack", qty: "1 set" },
      { category: "Biliary Drainage Catheter", item: "8.5F / 10F Multi-purpose Ring / Locking Pigtail Biliary Drainage Catheter", size: "Cook Medical / Boston Scientific / Devicor", qty: "1" },
      { category: "Biliary SEMS Stent", item: "Self-Expanding Metallic Stent (SEMS) - Uncovered / Covered (Epic / Wallflex / Zilver)", size: "8 mm / 10 mm diameter x 60 mm / 80 mm / 100 mm length", qty: "1-2 stents" },
      { category: "Fixation Device", item: "Drain-Fix / StatLock Catheter Securing Device + Bile Drainage Bag + Connecting Tube", size: "Standard kit", qty: "1 kit" }
    ],
    schemeDetails: {
      maayCode: "1849-SG105 A (PTBD External) / 2849-IN006A (PTBD + SEMS)",
      maayName: "Percutaneous transhepatic biliary drainage (PTBD) / Primary SEMS",
      maayBaseRate: "₹16,000 (PTBD) / ₹25,000 (SEMS)",
      maayImplants: [
        { code: "2849-IN006A-IMP381", name: "Metallic Biliary Stent (SEMS)", maxRate: "₹37,000" }
      ],
      rghsCode: "1318 (PTBD) / 1308 (Biliary Stenting)",
      rghsName: "PTBD / Percutaneous Biliary Stenting",
      rghsRate: "₹15,000 (PTBD) / ₹35,000 (Stenting)",
      icd10Code: "K83.1 (Biliary obstruction) / C22.1 (Cholangiocarcinoma) / C23 (Ca Gallbladder) / C24.0 (Extrahepatic bile duct Ca)",
      ihmsPreAuthDocs: "MRCP/CT report, LFT (Bilirubin), Pre-op clinical notes, Bedside clinical photograph."
    },
    distributorContacts: [
      { name: "Cook Medical (Ring Biliary Catheters / Zilver Stent)", contact: "+91 98291 33445", location: "Jaipur" },
      { name: "Boston Scientific (Wallflex / Percuflex Catheter)", contact: "+91 98295 67890", location: "Jaipur" },
      { name: "Poly Medicure / Meditech (Biliary Drainage Bags)", contact: "+91 98290 12345", location: "Jaipur / SMS IR Store" }
    ],
    operativeSteps: `1. Patient in supine position; right lateral chest/abdominal wall (for right lobe) or subxiphoid epigastrium (for left lobe) prepared and draped under sterile precautions.
2. Local anesthesia infiltrated with 15 mL 2% Lignocaine along intercostal space down to liver capsule.
3. Under real-time ultrasound guidance, peripheral right hepatic duct branch punctured using 21G Chiba needle targeting Segment 6/7 duct.
4. Bile aspirated confirming duct entry; gentle cholangiography performed showing arborization and site of stricture/obstruction.
5. 0.018" nitinol wire placed into duct; 4F/5F micropuncture sheath introduced and wire exchanged for 0.035" Stiff Glidewire.
6. 5F Kumpe / KMP catheter used to manipulate and cross the biliary stricture into Common Bile Duct (CBD) and advance into Duodenum.
7. [For Internal-External Drainage]: Guidewire exchanged for Amplatz Super Stiff wire; tract dilated to 10F; 8.5F/10F Ring internal-external biliary drainage catheter placed with side-holes spanning both biliary tree and duodenum; pigtail loop locked in duodenum.
8. [For Primary SEMS Stenting]: Self-Expanding Metallic Stent (e.g. 10 mm x 80 mm Wallflex/Zilver) deployed across the stricture with 1 cm landing zone above and below; free flow of contrast and bile into duodenum confirmed.
9. Catheter secured to skin with 2-0 silk suture and Drain-Fix dressing; connected to sterile bile drainage collection bag.`,
    postOpOrders: [
      "Bed rest for 6 hours; right lateral decubitus for 2 hours.",
      "Monitor vitals and abdominal signs q1h x 6h (watch for biliary peritonitis, hemobilia, sepsis).",
      "Record 24-hour bile bag drainage volume, color, and character.",
      "Flush catheter with 5-10 mL sterile Normal Saline once daily under strict aseptic technique to maintain patency.",
      "Check LFT and CBC at 48 hours post-procedure."
    ],
    postOpDrugsEAushadhi: [
      { name: "Inj. Cefoperazone + Sulbactam", dose: "1.5 gm IV", freq: "bd x 3 days", category: "Biliary-excreted Antibiotic" },
      { name: "Inj. Metronidazole", dose: "500 mg IV infusion", freq: "tid x 3 days", category: "Anaerobic Coverage" },
      { name: "Inj. Pantoprazole", dose: "40 mg IV", freq: "od", category: "PPI" },
      { name: "Inj. Tramadol", dose: "50 mg IV", freq: "sos for pain", category: "Analgesic" },
      { name: "Tab. Ursodeoxycholic Acid (UDCA)", dose: "300 mg PO", freq: "bd x 1 month", category: "Choleretic" },
      { name: "Tab. Cefixime", dose: "200 mg PO", freq: "bd x 5 days", category: "Oral Antibiotic" }
    ],
    dischargeAdvice: `1. Keep the biliary drainage bag hanging below the level of the waist/hip at all times.
2. Measure and record daily bile output in a diary. Empty bag when half full.
3. Flush catheter with 5-10 mL sterile saline daily as demonstrated by nursing staff.
4. Follow up in IR OPD after 2 weeks with fresh LFT (Serum Bilirubin) to assess drainage adequacy.
5. RED-FLAG WARNINGS:
   - Sudden stoppage of bile output accompanied by abdominal pain or jaundice.
   - Leakage of bile or fresh red blood around the catheter entry site.
   - High fever (> 101°F) with shaking chills (acute cholangitis).
   - Accidental slipping or dislodgement of the catheter.`
  },

  "pcn": {
    id: "pcn",
    name: "Percutaneous Nephrostomy (PCN) & Antegrade DJ Stenting",
    shortName: "PCN & Antegrade DJ Stenting",
    specialty: "Non-Vascular Interventional Radiology - Uroradiology",
    category: "Urinary / Decompression / Drainage",
    indications: [
      "Moderate to severe Hydronephrosis / Pyonephrosis with obstructive uropathy (Calculus, Stricture, Cervical / Bladder / Colorectal Ca)",
      "Urosepsis secondary to upper urinary tract obstruction requiring emergent renal decompression",
      "Urinary diversion for ureteric fistula / trauma / leak",
      "Failed retrograde double-J (DJ) stenting via cystoscopy"
    ],
    contraindications: [
      "Absolute: Uncorrectable severe bleeding diathesis (INR > 1.8, Platelets < 50k)",
      "Relative: Severe hyperkalemia / metabolic acidosis (must stabilize concurrently)"
    ],
    preOpChecklist: [
      "Ultrasound / CT KUB documenting hydronephrosis grade, renal cortical thickness, calyceal dilatation, site and cause of ureteric obstruction",
      "Serum Creatinine, Urea, Electrolytes (Potassium, Sodium)",
      "CBC, Coagulation Profile (PT/INR)",
      "Urine routine/microscopy & culture",
      "Prophylactic Antibiotic (Inj. Ceftriaxone 1g IV or Piperacillin-Tazobactam 4.5g IV if pyonephrosis)"
    ],
    hardwareSpecs: [
      { category: "Access Needle", item: "18G Two-part Trocar Needle / 21G Chiba Needle", size: "15 cm / 20 cm length", qty: "1" },
      { category: "Base Guidewires", item: "0.035\" J-Tip Fixed Core & Stiff Hydrophilic Glidewire & 0.035\" Lunderquist / Amplatz Stiff wire", size: "150 cm / 180 cm length", qty: "1 each" },
      { category: "Fascial Dilators", item: "6F, 8F, 10F Dilators", size: "Standard renal dilator set", qty: "1 set" },
      { category: "Nephrostomy Catheter", item: "8.5F / 10F / 12F Locking Pigtail Catheter (Cook / Boston / Poly Medicure)", size: "25 cm / 30 cm length with retention string", qty: "1" },
      { category: "DJ Stent (if antegrade stenting)", item: "6F / 7F Antegrade Double-J (DJ) Stent with Pusher", size: "26 cm / 28 cm length", qty: "1 stent" },
      { category: "Drainage Bag", item: "Urine Leg Bag / Collection Bag with Anti-reflux valve & connector", size: "Standard 750 mL / 2000 mL", qty: "1 bag" }
    ],
    schemeDetails: {
      maayCode: "1849-IN057A (PCN Drainage) / 2849-IN006A",
      maayName: "Percutaneous catheter drainage / Nephrostomy",
      maayBaseRate: "₹7,000 (PCN) / ₹25,000 (Stenting)",
      rghsCode: "910",
      rghsName: "Percutaneous Nephrostomy (PCN)",
      rghsRate: "₹8,000",
      icd10Code: "N13.0 (Hydronephrosis with ureteropelvic obstruction) / N13.2 (Hydronephrosis with calculus) / N13.8 (Other hydronephrosis)",
      ihmsPreAuthDocs: "USG/CT KUB report, RFT (Creatinine/Urea), Clinical notes, Bedside photograph."
    },
    distributorContacts: [
      { name: "Cook Medical (Universa Nephrostomy / Ultra-Flex)", contact: "+91 98291 33445", location: "Jaipur" },
      { name: "Poly Medicure / Romsons (PCN Kits & Urine Bags)", contact: "+91 98290 12345", location: "Jaipur / SMS IR Store" }
    ],
    operativeSteps: `1. Patient placed in prone / prone-oblique position; ipsilateral flank and renal angle prepared and draped under sterile conditions.
2. Local infiltration with 15 mL 2% Lignocaine from skin down to renal capsule.
3. Ultrasound-guided puncture of a posterior lower/middle pole calyx (Brodel's avascular line) performed using 18G needle.
4. Turbid / clear urine aspirated; gentle nephrostogram performed with dilute contrast outlining renal pelvis and pelvi-ureteric junction.
5. 0.035" J-tip guidewire introduced and coiled securely in renal pelvis / upper ureter.
6. Tract sequentially dilated over wire using 6F, 8F, and 10F dilators.
7. 8.5F/10F Locking Pigtail Nephrostomy catheter advanced over guidewire into renal pelvis; loop locked tightly and string secured.
8. Contrast injection confirmed excellent positioning in renal pelvis without calyceal tear.
9. Catheter secured to flank skin with 2-0 silk suture and adhesive dressing; connected to sterile urine drainage collection bag.`,
    postOpOrders: [
      "Bed rest for 4 hours; monitor vitals q1h x 4h.",
      "Record hourly urine output from PCN and clear transurethral bladder urine separately.",
      "Post-obstructive diuresis watch: If urine output > 200 mL/hr, replace 50% of urine output volume with 0.45% NS / Ringer Lactate and monitor serum potassium q6h.",
      "Flush catheter with 5 mL sterile saline if debris / clots block tube.",
      "Repeat RFT (Serum Creatinine & Potassium) at 24 and 48 hours."
    ],
    postOpDrugsEAushadhi: [
      { name: "Inj. Ceftriaxone", dose: "1 gm IV", freq: "bd x 3 days", category: "Antibiotic" },
      { name: "Inj. Pantoprazole", dose: "40 mg IV", freq: "od", category: "PPI" },
      { name: "Inj. Tramadol", dose: "50 mg IV", freq: "sos for flank pain", category: "Analgesic" },
      { name: "Tab. Cefpodoxime", dose: "200 mg PO", freq: "bd x 5 days", category: "Oral Antibiotic" },
      { name: "Tab. Paracetamol", dose: "650 mg PO", freq: "sos", category: "Analgesic" }
    ],
    dischargeAdvice: `1. Keep urine bag secured below kidney level. Never lift bag above waist level.
2. Empty urine bag regularly when 2/3 full and note total daily volume.
3. Follow up in IR OPD / Urology OPD after 1-2 weeks with fresh RFT and Ultrasound KUB.
4. RED-FLAG WARNINGS:
   - Sudden cessation of urine drainage from PCN accompanied by flank pain or fever.
   - Frank red blood or large clots in the urine bag.
   - Leakage of urine around the tube dressing.
   - High fever with chills.`
  },

  "evla": {
    id: "evla",
    name: "Endovenous Laser Ablation (EVLA) / RFA for Varicose Veins",
    shortName: "EVLA / RFA (Varicose Veins)",
    specialty: "Vascular Interventional Radiology - Phlebology",
    category: "Venous / Thermal Ablation",
    indications: [
      "Symptomatic Lower Extremity Varicose Veins (CEAP Clinical Class C2 to C6)",
      "Saphenofemoral Junction (SFJ) / Great Saphenous Vein (GSV) or Small Saphenous Vein (SSV) incompetence with reflux time > 0.5 seconds on Doppler",
      "Venous stasis dermatitis, lipodermatosclerosis, or active/healed venous ulceration (CEAP C5/C6)",
      "Recurrent superficial thrombophlebitis or variceal hemorrhage"
    ],
    contraindications: [
      "Absolute: Acute Deep Vein Thrombosis (DVT), Non-ambulatory / bedridden patient, Severe Peripheral Arterial Disease (ABI < 0.5)",
      "Relative: Deep venous insufficiency with deep system obstruction (superficial veins act as primary collateral return)"
    ],
    preOpChecklist: [
      "Detailed Venous Duplex Doppler mapping in standing position documenting GSV/SSV diameter, SFJ/SPJ reflux time (>500ms), tortuous tributaries, and deep venous system patency (CFV, FV, PopV)",
      "Pre-op clinical marking of varicose veins with skin marker under ultrasound",
      "CBC, Coagulation (PT/INR), RFT",
      "Prescription of Class II Graduated Compression Stockings (20-30 mmHg) before procedure"
    ],
    hardwareSpecs: [
      { category: "Laser System", item: "1470 nm Diode Laser Generator + Radial 2ring / Slim Laser Fiber (Biolitec / AngioDynamics)", size: "400 um / 600 um radial fiber", qty: "1 fiber" },
      { category: "Vascular Access", item: "6F Introducer Sheath & 21G Echogenic Needle", size: "11 cm / 21G micropuncture", qty: "1" },
      { category: "Base Guidewire", item: "0.035\" J-Tip Fixed Core Guidewire", size: "150 cm length", qty: "1" },
      { category: "Tumescent Infiltration", item: "Tumescent Anesthesia Pump / 18G Tuohy Needle / Spinal Needle (20G 9cm)", size: "Standard tumescent infusion set", qty: "1 set" },
      { category: "Tumescent Solution", item: "500 mL Normal Saline + 30 mL 2% Lignocaine + 0.5 mL Adrenaline (1:1000) + 10 mL 8.4% Sodium Bicarbonate", size: "Chilled mixture", qty: "1-2 bags" },
      { category: "Foam Sclerosant (for tributaries)", item: "3% Polidocanol / STS 3% (Aethoxysklerol)", size: "2 mL ampoules (foamed 1:4 Tessari)", qty: "1-2 amp" },
      { category: "Compression", item: "Class II (20-30 mmHg) Thigh-Length Compression Stocking", size: "S / M / L / XL sized to patient", qty: "1 pair" }
    ],
    schemeDetails: {
      maayCode: "2849-IN017B / 1849-IN057A",
      maayName: "Endovenous Ablation / Sclerotherapy",
      maayBaseRate: "₹7,000 - ₹30,400",
      rghsCode: "492",
      rghsName: "Endovenous Laser Ablation (EVLA) of Varicose Veins",
      rghsRate: "₹38,000",
      icd10Code: "I83.9 (Varicose veins of lower extremities) / I83.0 (Varicose veins with ulcer) / I83.2 (Varicose veins with ulcer and inflammation)",
      ihmsPreAuthDocs: "Venous Doppler mapping report, Clinical photos of varicose veins / ulcer, Pre-procedure notes."
    },
    distributorContacts: [
      { name: "Biolitec India (1470nm Radial Laser Fibers)", contact: "+91 98290 66778", location: "Jaipur" },
      { name: "Medtronic (ClosureFast RFA Catheters)", contact: "+91 98290 44332", location: "Jaipur" },
      { name: "SMS Pharmacy Counter", contact: "DDC-14 / IR Central Store", location: "SMS Hospital" }
    ],
    operativeSteps: `1. Patient in supine position with slight reverse Trendelenburg; target leg prepared and draped under sterile conditions.
2. GSV accessed at upper calf / knee level under real-time ultrasound guidance using 21G echogenic needle; 6F vascular sheath positioned over 0.035" guidewire.
3. 1470 nm Radial 2ring laser fiber introduced through sheath and tip positioned precisely 2.0 cm distal to the Saphenofemoral Junction (SFJ), inferior to the superficial epigastric vein confluence under direct longitudinal and transverse ultrasound visualization.
4. Perivenous tumescent anesthesia solution (500 mL NS + 30 mL 2% Lignocaine + Adrenaline + NaHCO3) infiltrated circumferentially along the entire GSV sheath under ultrasound guidance, achieving a >10 mm circumferential fluid halo (heat sink effect and pain prevention).
5. Laser activated at 7-10 Watts continuous power; fiber withdrawn smoothly at 1 mm/sec delivering a Linear Endovenous Energy Density (LEED) of 60-80 J/cm.
6. Ultrasound confirmed immediate vein wall collapse, luminal occlusion, and absence of flow throughout treated GSV length.
7. Concomitant ultrasound-guided foam sclerotherapy (1:4 Polidocanol 3% foam) performed for residual tortuous tributary varices.
8. Compression dressing and Class II graduated compression stocking applied immediately on the table.
9. Immediate post-procedure ambulation for 30 minutes.`,
    postOpOrders: [
      "Walk continuously for 30 minutes immediately post-procedure before discharge.",
      "Wear Class II compression stockings day and night for the first 48 hours, then daytime for 2 weeks.",
      "Avoid prolonged standing or sitting; elevate legs when sitting.",
      "Normal walking and routine daily activities encouraged immediately.",
      "Same-day discharge (Day Care procedure)."
    ],
    postOpDrugsEAushadhi: [
      { name: "Tab. Aceclofenac + Paracetamol", dose: "100 mg / 325 mg PO", freq: "bd x 3 days", category: "Analgesic" },
      { name: "Tab. Pantoprazole", dose: "40 mg PO", freq: "od x 5 days", category: "PPI" },
      { name: "Tab. Deflazacort", dose: "6 mg PO", freq: "bd x 3 days (reduces cord phlebitis)", category: "Anti-inflammatory" },
      { name: "Tab. Cefuroxime", dose: "500 mg PO", freq: "bd x 3 days", category: "Antibiotic Prophylaxis" }
    ],
    dischargeAdvice: `1. Wear your Class II Compression Stockings during waking hours for 2 weeks.
2. Walk for at least 30-45 minutes daily. Do not remain bedridden.
3. A mild pulling sensation, tightness, or firmness along the inner thigh is normal and indicates vein closure.
4. Follow up in IR OPD at 1 week and 4 weeks with repeat Venous Doppler.
5. RED-FLAG WARNINGS:
   - Sudden painful swelling of the whole leg or calf (rule out DVT).
   - Chest pain or sudden shortness of breath.
   - Puncture site bleeding or signs of infection.`
  }
};

if (typeof window !== 'undefined') {
  window.IR_PROCEDURE_ENCYCLOPEDIA = IR_PROCEDURE_ENCYCLOPEDIA;
}
