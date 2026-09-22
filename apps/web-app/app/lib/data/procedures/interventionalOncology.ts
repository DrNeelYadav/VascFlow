import { ProcedureBlueprint } from '../../types/clinical';

export const INTERVENTIONAL_ONCOLOGY_PROCEDURES: ProcedureBlueprint[] = [
  {
    id: 'ctace-lipiodol-doxorubicin',
    name: 'Conventional Transarterial Chemoembolization (cTACE) with Lipiodol and Doxorubicin',
    category: 'Interventional Oncology',
    code: 'IO-TACE-001',
    rghsCode: '693 / 12',
    icd10: 'C22.0 (Hepatocellular Carcinoma)',
    indications: [
      'Intermediate stage hepatocellular carcinoma (BCLC Stage B: multinodular, preserved liver function, ECOG 0)',
      'Unresectable solitary HCC > 3 cm unsuitable for percutaneous thermal ablation or surgical resection',
      'Bridging or downstaging to orthotopic liver transplantation (within or exceeding Milan criteria)',
      'Recurrent intrahepatic HCC following surgical resection or previous locoregional therapy'
    ],
    preOpCriteria: [
      'Child-Pugh score <= 7 (Class A or selected well-compensated Class B)',
      'ECOG Performance Status 0-1',
      'Total serum bilirubin < 2.5 mg/dL; Serum albumin >= 2.8 g/dL; INR <= 1.5; Platelets >= 50,000/uL',
      'Patent main portal vein trunk and primary branches on multiphasic CT/MRI (no main trunk PVTT VP4)',
      'Creatinine clearance > 45 mL/min'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F Radiofocus Introducer Sheath', spec: '11 cm length, 0.035" guidewire compatible with hemostatic valve', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Yashiro / Cobra C2 catheter', spec: '65-100 cm, 0.035" lumen hydrophilic coated', standardStore: 'Central IR Store' },
      { category: 'Microcatheter System', name: '2.7F/2.0F Progreat / Merit Maestro Microcatheter', spec: '130 cm length, 0.021" inner lumen with 0.014" GT Glidewire', standardStore: 'DDC-14 Central Store' },
      { category: 'Chemoembolic Agent', name: 'Lipiodol Ultra-Fluid (Ethiodized Oil)', spec: '10 mL ampoule (Guerbet)', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Chemotherapy', name: 'Inj Doxorubicin Hydrochloride', spec: '50 mg lyophilized powder reconstituted in non-ionic contrast', standardStore: 'Oncology Central Pharmacy' },
      { category: 'Gelfoam Particulate', name: 'Gelita-Spon / Spongostan Absorbable Gelatin Sponge', spec: 'Calibrated particles hand-cut 300-500 um or Gelfoam torpedoes', standardStore: 'Central IR Store' },
      { category: 'Stopcock System', name: '3-way Polycarbonate High-Pressure Stopcock & Connectors', spec: 'Chemo-resistant polycarbonate Luer-lock 3-way connector', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Ultrasound-guided right common femoral artery puncture using 21G micropuncture kit and placement of 5F vascular sheath under local anesthesia.',
      'Selective celiac axis and superior mesenteric artery (SMA) angiography using 5F Yashiro/Cobra catheter to outline hepatic arterial anatomy and aberrant supply (replaced right or left hepatic arteries).',
      'Cone-beam CT (CBCT) or digital subtraction angiography (DSA) parenchymal phase to identify tumor feeding arterial branches, hypervascular blush, and extrahepatic parasitized collateral supply.',
      'Superselective cannulation of segment-specific tumor-feeding artery using a 2.7F/2.0F microcatheter and 0.014" steerable hydrophilic microguidewire.',
      'Preparation of stable water-in-oil (W/O) emulsion: 50 mg Doxorubicin dissolved in 2.5 mL non-ionic iodinated contrast, mixed with 5-10 mL Lipiodol in 1:2 to 1:3 ratio via repeated pumping through a 3-way polycarbonate stopcock for >= 20 cycles.',
      'Fluoroscopy-guided slow, pulsatile microcatheter injection of the Lipiodol-Doxorubicin emulsion under continuous roadmap subtraction until dense tumor retention and portal venule spillover is observed.',
      'Subsequent gelfoam slurry or particle embolization to achieve complete arterial inflow stasis and trap emulsion inside the tumor bed.',
      'Completion angiography verifying complete devascularization of the target tumor and preservation of non-target hepatic arterial branches.',
      'Femoral sheath removal and deployment of vascular closure device (Angio-Seal 6F) or manual compression hemostasis for 20 minutes.'
    ],
    complications: [
      'Post-embolization syndrome (fever, right upper quadrant pain, nausea, vomiting in 60-80%)',
      'Acute hepatic decompensation or ischemic liver failure',
      'Non-target embolization causing ischemic cholecystitis, gastric ulceration, or pancreatitis',
      'Contrast-induced acute kidney injury (CI-AKI)',
      'Liver abscess formation or biloma'
    ],
    maayTariffInr: 47960,
    vendorContacts: [
      'Guerbet India Pvt Ltd (+91 98290 12345)',
      'Terumo India Medical (+91 98291 55678)',
      'Merit Medical Systems (+91 98292 44321)'
    ]
  },
  {
    id: 'deb-tace-dcbeads-lifepearl',
    name: 'Drug-Eluting Bead TACE (DEB-TACE) with 70-150 um DC Beads / LifePearl',
    category: 'Interventional Oncology',
    code: 'IO-TACE-002',
    rghsCode: '693 / 12',
    icd10: 'C22.0 (Hepatocellular Carcinoma)',
    indications: [
      'Intermediate stage BCLC-B hepatocellular carcinoma in patients susceptible to systemic anthracycline toxicity',
      'Unresectable liver-dominant HCC in patients with mild cardiovascular comorbidities',
      'Downstaging/bridging to liver transplantation with standardized drug elution kinetics',
      'Large or multifocal HCC where sustained intratumoral drug elution and low systemic peak levels are required'
    ],
    preOpCriteria: [
      'Child-Pugh score 5-7 (Class A or early B)',
      'Total Bilirubin < 2.0 mg/dL, AST/ALT < 5x ULN, Albumin >= 3.0 g/dL',
      'Platelets >= 60,000/uL, INR <= 1.4, Absolute neutrophil count > 1500/uL',
      'Main portal vein flow confirmed patent on Doppler ultrasound or contrast CT'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F Radiofocus Vascular Introducer Sheath', spec: '11 cm length, 0.035" valve', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Yashiro / Simmons 1 Diagnostic Catheter', spec: '65-100 cm length, braided torque shaft', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: '2.0F - 2.4F Ultra-selective Microcatheter', spec: '0.021" internal lumen, DMSO/particle compatible, 130 cm', standardStore: 'DDC-14 Central Store' },
      { category: 'Drug-Eluting Microspheres', name: 'DC Bead / LifePearl / HepaSphere Microspheres', spec: 'Calibrated 70-150 um or 100-300 um vial', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Chemotherapy Agent', name: 'Doxorubicin Powder for Injection', spec: '50-75 mg lyophilized powder loaded into bead vial for 2 hours', standardStore: 'Oncology Central Pharmacy' },
      { category: 'Contrast Media', name: 'Non-ionic Iso-osmolar Contrast Media (Iodixanol 320)', spec: '100 mL bottle', standardStore: 'Radiology Pharmacy Store' }
    ],
    techniqueSteps: [
      'Pre-procedure loading: 50-75 mg Doxorubicin reconstituted and loaded into 1 vial of 70-150 um DC Beads/LifePearl for 90-120 minutes with gentle agitation; excess liquid aspirated and beads mixed 1:1 with non-ionic contrast.',
      'Standard sterile preparation of right common femoral or right radial artery access with 5F sheath placement.',
      'Selective hepatic arteriography with 5F Yashiro catheter and dual-phase CBCT to identify all tumor-feeding arteries.',
      'Superselective microcatheterization into segment-specific tumor feeders as close to the target lesion as possible (distal to cystic and gastroduodenal branches).',
      'Slow microcatheter injection of drug-loaded microspheres (1 mL over 1-2 minutes) under magnified real-time fluoroscopy to prevent reflux.',
      'Continued administration until near-stasis (clearing of contrast within 2 to 5 cardiac cycles) is reached in the feeding pedicles.',
      'Wait 5 minutes and perform gentle follow-up run; if residual tumor blush persists, administer remaining slurry or follow with small bland microspheres (100-300 um).',
      'Post-procedure DSA confirming near-total devascularization of the target lesion and preservation of the main lobar hepatic branches.'
    ],
    complications: [
      'Post-embolization syndrome (nausea, RUQ pain, transient transaminitis)',
      'Hepatic arterial dissection or vasospasm during microcatheterization',
      'Non-target bead reflux into cystic artery causing ischemic cholecystitis',
      'Biliary stricture / biloma due to peri-biliary capillary plexus ischemia'
    ],
    maayTariffInr: 58500,
    vendorContacts: [
      'Boston Scientific India (+91 98290 88990)',
      'Terumo India Medical (+91 98291 55678)',
      'Merit Medical Systems (+91 98292 44321)'
    ]
  },
  {
    id: 'btace-balloon-occluded-tace',
    name: 'Balloon-occluded Transarterial Chemoembolization (B-TACE)',
    category: 'Interventional Oncology',
    code: 'IO-TACE-003',
    rghsCode: '693 / 12',
    icd10: 'C22.0 (Hepatocellular Carcinoma)',
    indications: [
      'Refractory hepatocellular carcinoma with large arterial-portal shunts',
      'Tumors supplied by complex branching arteries requiring targeted redistribution of blood flow',
      'Hypovascular or moderately vascular HCC where elevated balloon inflation pressure forces chemoembolic emulsion into tumor sinusoids',
      'Prevention of proximal embolic reflux in challenging anatomical feeding vessels'
    ],
    preOpCriteria: [
      'Child-Pugh score <= 7 (Class A/B)',
      'Target tumor vessel diameter suitable for microballoon catheter (1.8 - 3.5 mm)',
      'Platelet count >= 50,000/uL, INR <= 1.5, serum creatinine <= 1.6 mg/dL',
      'Documented resistance or recurrence following standard cTACE'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F or 6F Parent Introducer Sheath', spec: '11-25 cm length, 0.035" compatible', standardStore: 'Angio Suite Store' },
      { category: 'Guiding Catheter', name: '5F / 6F Destination Guiding Sheath / Catheter', spec: '65-90 cm length, shape C1/C2', standardStore: 'Central IR Store' },
      { category: 'Microballoon Catheter', name: 'Occlusafe / Attendant Microballoon Catheter System', spec: '2.8F outer, 1.9F distal tip, compliant balloon (up to 4 mm), 130-150 cm', standardStore: 'DDC-14 Central Store' },
      { category: 'Microguidewire', name: '0.010" - 0.014" Steerable Hydrophilic Microguidewire', spec: 'Traxcess or Asahi Meister 200 cm', standardStore: 'Central IR Store' },
      { category: 'Indeflator Syringe', name: '1 mL Micro-calibrated Balloon Inflation Syringe', spec: 'Precise 0.05 mL increment graduation with pressure manometer', standardStore: 'Angio Suite Store' },
      { category: 'Chemoembolic Mixture', name: 'Lipiodol Ultra-Fluid & Doxorubicin / Epirubicin', spec: '10 mL Lipiodol + 50 mg Doxorubicin emulsion', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Femoral or radial vascular access secured with a 5F or 6F parent sheath and selective engagement of the common/proper hepatic artery.',
      'Advancement of the microballoon catheter over an 0.010-0.014" microguidewire into the subsegmental or segmental tumor-feeding artery.',
      'Inflation of the microballoon with 50% diluted contrast under fluoroscopy until vessel occlusion is confirmed on test angiogram (balloon occluded arterial stump pressure achieved).',
      'Verification of flow redistribution: balloon occlusion decreases local arterial pressure, causing reversal of flow in communicating collaterals and driving emulsion deep into tumor capsules.',
      'Slow injection of Lipiodol-Doxorubicin emulsion at a rate of 0.5-1 mL/min through the microballoon central lumen while maintaining balloon occlusion.',
      'Injection continued until dense opacification of tumor peripheral corona and visualization of draining peritumoral portal branches.',
      'Deflation of the microballoon after a 3-5 minute dwell time to prevent reflux and subsequent gelation particle plug placement if indicated.',
      'Final angiography demonstrating selective tumor eradication without sacrifice of mother hepatic branches.'
    ],
    complications: [
      'Arterial spasm or micro-dissection at balloon anchoring site',
      'Balloon rupture during over-inflation in calcified/tortuous branches',
      'Post-embolization syndrome and hepatic transaminitis',
      'Target segment ischemic cholangiopathy'
    ],
    maayTariffInr: 68400,
    vendorContacts: [
      'Terumo India Medical (+91 98291 55678)',
      'Kaneka Medix / Becton Dickinson India (+91 98294 66789)',
      'Guerbet India Pvt Ltd (+91 98290 12345)'
    ]
  },
  {
    id: 'tare-sirt-mapping-tc99m-maa',
    name: 'Transarterial Radioembolization (TARE / SIRT) mapping angiogram with Tc-99m MAA & coil skeletonization',
    category: 'Interventional Oncology',
    code: 'IO-TARE-004',
    rghsCode: '693 / 14',
    icd10: 'C22.0 (HCC) / C78.7 (Secondary Liver Malignancy)',
    indications: [
      'Pre-treatment simulation and dosimetry mapping for transarterial radioembolization (TARE) with Yttrium-90',
      'Quantification of hepatopulmonary shunt fraction (HPSF / lung shunt fraction)',
      'Assessment of gastrointestinal extrahepatic branch parasitization (gastroduodenal, right gastric, falciform, cystic arteries)',
      'Determination of vessel diameter and planning catheter positions for lobar, segmental, or radiation segmentectomy therapy'
    ],
    preOpCriteria: [
      'ECOG 0-1, Child-Pugh Score <= 7',
      'Total Bilirubin <= 2.0 mg/dL, Albumin >= 3.0 g/dL',
      'Nuclear medicine gamma camera / SPECT-CT scheduled on the same morning',
      'Adequate renal function for intra-arterial iodinated contrast administration'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F Vascular Introducer Sheath', spec: '11 cm length with sideport', standardStore: 'Angio Suite Store' },
      { category: 'Base Catheter', name: '5F Yashiro / Shepherd Hook / Cobra Catheter', spec: '100 cm length, high-flow braided', standardStore: 'Central IR Store' },
      { category: 'Microcatheter System', name: '2.0F - 2.4F Ultra-flexible Microcatheter', spec: '130-150 cm length with high radiopaque tip markers', standardStore: 'DDC-14 Central Store' },
      { category: 'Embolization Coils', name: 'Detachable / Pushable Microcoils (0.014" - 0.018")', spec: '2 mm - 5 mm diameter Platinum/Fibered coils for prophylactic skeletonization', standardStore: 'Central IR Store' },
      { category: 'Radiopharmaceutical', name: 'Technetium-99m Macroaggregated Albumin (Tc-99m MAA)', spec: '150 - 200 MBq (4-5 mCi) in 2-3 mL saline', standardStore: 'Nuclear Medicine Department' }
    ],
    techniqueSteps: [
      'Right common femoral or radial artery access and selective visceral catheterization of celiac axis and SMA.',
      'Detailed planar angiography and cone-beam CT (CBCT) to evaluate hepatic vascular arborization and rule out variant extrahepatic flow.',
      'Prophylactic coil embolization (skeletonization) of accessory vessels with high risk of non-target GI flow (e.g., accessory right gastric artery, falciform artery, or GDA if microcatheter cannot be placed distal to its takeoff).',
      'Advancement of microcatheter to the exact intended therapeutic position (e.g., right hepatic artery, left hepatic artery, or subsegmental feeder).',
      'Slow intra-arterial delivery of 150-200 MBq Tc-99m MAA over 60 seconds with saline flushing under meticulous anti-reflux conditions.',
      'Removal of hardware, hemostasis at arterial puncture site, and immediate transfer of patient to Nuclear Medicine department.',
      'Acquisition of planar anterior/posterior chest and abdomen scintigraphy and abdominal SPECT-CT to calculate Lung Shunt Fraction (LSF) and assess for extrahepatic tracer accumulation.',
      'Dosimetry calculation (MIRD / partition model) ensuring lung exposure will remain < 30 Gy per treatment (< 50 Gy cumulative).'
    ],
    complications: [
      'Catheter-induced arterial spasm or dissection',
      'False assessment of shunt fraction due to free pertechnetate or unstable macroaggregates',
      'Microcoil migration or incomplete target skeletonization',
      'Groin hematoma or pseudoaneurysm'
    ],
    maayTariffInr: 45000,
    vendorContacts: [
      'Sirtex Medical India (+91 98293 11223)',
      'Boston Scientific TheraSphere (+91 98290 88990)',
      'Board of Radiation & Isotope Technology (BRIT) India (+91 22 2556 1234)'
    ]
  },
  {
    id: 'tare-sirt-glass-therasphere',
    name: 'Transarterial Radioembolization (TARE / SIRT) therapeutic delivery of Y-90 Glass microspheres (TheraSphere)',
    category: 'Interventional Oncology',
    code: 'IO-TARE-005',
    rghsCode: '693 / 14',
    icd10: 'C22.0 (Hepatocellular Carcinoma)',
    indications: [
      'Unresectable hepatocellular carcinoma with branch or main portal vein tumor thrombosis (PVTT VP1-VP3)',
      'Radiation segmentectomy or lobectomy in patients ineligible for surgical resection or thermal ablation',
      'High tumor burden requiring intense localized beta radiation with minimal embolic effect on hepatic microvasculature',
      'Bridging or downstaging to transplant under MELD or expanded criteria'
    ],
    preOpCriteria: [
      'Tc-99m MAA mapping completed within 14-21 days showing lung shunt fraction (LSF) < 20% (projected lung dose < 30 Gy)',
      'Absence of non-correctable extrahepatic gastrointestinal tracer uptake on SPECT-CT',
      'Total Bilirubin <= 2.0 mg/dL, Albumin >= 3.0 g/dL, Child-Pugh Score <= 7',
      'Y-90 Dose calibrated and certified by Medical Physicist/RSO on the day of treatment'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F Vascular Introducer Sheath', spec: '11 cm length, 0.035" valve', standardStore: 'Angio Suite Store' },
      { category: 'Base Catheter', name: '5F Yashiro or C2 Catheter', spec: '100 cm length', standardStore: 'Central IR Store' },
      { category: 'Microcatheter System', name: '2.0F - 2.4F Progreat or Maestro Microcatheter', spec: '130 cm length, rigid hub with acrylic shield attachment', standardStore: 'DDC-14 Central Store' },
      { category: 'Radioembolization Device', name: 'TheraSphere Yttrium-90 Glass Microspheres', spec: 'Custom activity (1.2 to 20 GBq) calibrated glass microspheres (20-30 um)', standardStore: 'Nuclear Medicine Cold/Hot Lab' },
      { category: 'Delivery Administration Set', name: 'TheraSphere Administration Set with Acrylic Shielding', spec: 'Sterile tubings, injector box, relief needle, and waste container', standardStore: 'Nuclear Medicine Hot Lab' }
    ],
    techniqueSteps: [
      'Interventional Radiologist, Medical Physicist, and Radiation Safety Officer (RSO) verify patient identity, calibrated activity, and radiation survey baseline.',
      'Femoral or radial puncture and navigation of 5F base catheter into the selective celiac and hepatic tree.',
      'Navigation of the microcatheter to the exact anatomical landmark verified during MAA mapping.',
      'Performance of dual-phase CBCT and selective DSA to re-confirm absence of new collateral branches to the stomach or duodenum.',
      'Connection of the TheraSphere delivery apparatus to the microcatheter under sterile conditions using acrylic beta-radiation shield boxes.',
      'Pressure-controlled saline flush administration of the glass microspheres through the microcatheter at a rate of 20-30 mL/min.',
      'Post-delivery dosimetric radiation survey of the administration tubing, microcatheter, and waste reservoir to calculate residual waste and net delivered activity (typically > 98%).',
      'Withdrawal of microcatheter into protective waste canister and deployment of vascular closure device at puncture site.',
      'Immediate post-procedure PET/CT or Bremsstrahlung SPECT-CT to document precise geographic localization of Y-90 inside the tumor.'
    ],
    complications: [
      'Radiation-induced liver disease (RILD / ascites, anicteric hepatomegaly, transaminitis)',
      'Gastrointestinal ulceration from undetected non-target microsphere deposition',
      'Radiation pneumonitis (if cumulative dose exceeds 30-50 Gy)',
      'Radiation-induced cholecystitis'
    ],
    maayTariffInr: 125000,
    vendorContacts: [
      'Boston Scientific TheraSphere Division (+91 98290 88990)',
      'Bhabha Atomic Research Centre / BRIT (+91 22 2556 1234)'
    ]
  },
  {
    id: 'tare-sirt-resin-sirspheres',
    name: 'Transarterial Radioembolization (TARE / SIRT) therapeutic delivery of Y-90 Resin microspheres (SIR-Spheres)',
    category: 'Interventional Oncology',
    code: 'IO-TARE-006',
    rghsCode: '693 / 14',
    icd10: 'C78.7 (Secondary Malignant Neoplasm of Liver) / C22.0 (HCC)',
    indications: [
      'Unresectable colorectal cancer liver metastases (mCRC) refractory to first- and second-line systemic chemotherapy (FOLFOX/FOLFIRI)',
      'Diffuse bilobar liver-dominant metastatic disease from neuroendocrine tumors or breast cancer',
      'Intermediate to advanced hepatocellular carcinoma unsuitable for TACE due to tumor bulk or borderline vascularity',
      'Combination therapy with concurrent radiosensitizing fluoropyrimidine chemotherapy'
    ],
    preOpCriteria: [
      'Tc-99m MAA scan proving LSF < 15% (for full dose) or 15-20% (with BSA-dose reduction)',
      'No evidence of non-target gastrointestinal deposition on mapping SPECT-CT',
      'Adequate bone marrow function: ANC > 1500/uL, Platelets > 80,000/uL',
      'Bilirubin <= 1.8 mg/dL, Albumin >= 3.0 g/dL'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F Vascular Sheath Kit', spec: '11 cm length, 0.035" valve', standardStore: 'Angio Suite Store' },
      { category: 'Base Catheter', name: '5F Yashiro / Cobra C2', spec: '65-100 cm length', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: '2.4F - 2.8F Microcatheter', spec: '130 cm length with high radial clearance for particulate suspension', standardStore: 'DDC-14 Central Store' },
      { category: 'Radioembolization Device', name: 'SIR-Spheres Y-90 Resin Microspheres (Sirtex)', spec: '3 GBq activity glass vial containing biocompatible resin microspheres (20-60 um)', standardStore: 'Nuclear Medicine Hot Lab' },
      { category: 'Delivery System', name: 'Sirtex Delivery Apparatus with B-Shielding', spec: 'Delivery box, manifold, 20 mL D5W syringes, and lead/acrylic shield', standardStore: 'Nuclear Medicine Hot Lab' },
      { category: 'Infusion Medium', name: '5% Dextrose in Water (D5W) Infusion', spec: 'Sterile IV bags for microsphere suspension (prevents precipitation)', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Activity verification and calculation of patient-specific activity using BSA (Body Surface Area) and tumor volume model by the RSO.',
      'Percutaneous arterial access via common femoral or radial artery; placement of 5F guiding catheter into the celiac axis.',
      'Selective microcatheter positioning in the right or left hepatic artery according to the planned lobar/selective delivery plan.',
      'Slow, intermittent pulsatile injection of SIR-Spheres suspended in 5% Dextrose (D5W) alternating with contrast puffs under fluoroscopic roadmapping.',
      'Careful monitoring of arterial flow velocity; because resin spheres carry lower specific activity per sphere than glass, 30-50 million spheres are injected, creating moderate microvascular embolic resistance.',
      'Halt infusion immediately if contrast wash-in slows down significantly to avoid retrograde reflux into extrahepatic vessels.',
      'Complete post-administration line flushing with D5W and transfer waste line to radiation shielded containment.',
      'Immediate Bremsstrahlung SPECT/CT or Y-90 PET/CT scan to document in-vivo particle biodistribution.'
    ],
    complications: [
      'Hepatic arterial thrombosis or premature stasis leading to under-dosing',
      'Gastric or duodenal ulceration secondary to subtle resin bead reflux',
      'Post-SIRT asthenia, abdominal pain, and nausea',
      'Radiation hepatitis and late portal hypertension'
    ],
    maayTariffInr: 125000,
    vendorContacts: [
      'Sirtex Medical India (+91 98293 11223)',
      'Premier Medical Systems Jaipur (+91 98290 77665)'
    ]
  },
  {
    id: 'tare-radiation-segmentectomy',
    name: 'TARE Radiation Segmentectomy for solitary early HCC in difficult surgical locations',
    category: 'Interventional Oncology',
    code: 'IO-TARE-007',
    rghsCode: '693 / 14',
    icd10: 'C22.0 (Hepatocellular Carcinoma)',
    indications: [
      'Solitary early-stage HCC (<= 5 cm) located in segments I (caudate), VII, or VIII adjacent to hepatic veins or main portal bifurcation',
      'Patients with early HCC deemed high-risk surgical candidates due to severe portal hypertension, cirrhosis, or morbid obesity',
      'Lesions inaccessible for safe percutaneous thermal ablation due to cardiac motion, subdiaphragmatic location, or biliary tree proximity',
      'Ablative-intent transarterial radiation targeting with expected radiation doses > 190-400 Gy to the perfused volume'
    ],
    preOpCriteria: [
      'Target tumor limited to <= 2 hepatic segments on multiphasic MRI/CT',
      'Child-Pugh A (5-6 points), MELD <= 9',
      'Platelets >= 70,000/uL, Total Bilirubin <= 1.5 mg/dL',
      'Segmental mapping demonstrating favorable tumor-to-parenchyma perfusion without non-target gastrointestinal supply'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F Vascular Introducer Sheath', spec: '11 cm length, 0.035" valve', standardStore: 'Angio Suite Store' },
      { category: 'Base Catheter', name: '5F Yashiro / Sim-1 Catheter', spec: '100 cm braided', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: '2.0F - 2.4F Progreat or Merit Maestro Steerable Microcatheter', spec: '130 cm length with 0.014" Asahi Meister/Chikai microguidewire', standardStore: 'DDC-14 Central Store' },
      { category: 'Radioembolization Device', name: 'High-Specific Activity Y-90 Glass Microspheres (TheraSphere)', spec: 'Targeted dose delivery aiming for > 200 - 400 Gy to segment volume', standardStore: 'Nuclear Medicine Hot Lab' },
      { category: 'Cone Beam CT Software', name: 'Interventional CBCT Embolization Guidance Software', spec: 'Dual-phase parenchymal perfusion calculation package', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Ultraselective catheterization of the segmental or subsegmental feeding arteries supplying the target tumor using a 2.0F microcatheter.',
      'Intra-procedural CBCT hepatic arteriography during hand injection of contrast to confirm that the perfusion territory covers the tumor plus a > 5 mm ablative safety margin while sparing surrounding liver.',
      'Measurement of perfused segment volume from CBCT datasets and precise dosimetry calculation delivering > 190 to 400 Gy to the tissue.',
      'Deployment of high-concentration Y-90 glass microspheres under strict fluoroscopic monitoring to maintain forward antegrade flow.',
      'Saline flush cycle to clear microcatheter and confirmation of patent parent vessels on completion DSA.',
      'Immediate transfer to PET/CT suite for confirmation of high-dose radiation confinement to the targeted Couinaud segment.',
      'Follow-up imaging protocol at 1, 3, and 6 months: expected segment atrophy and complete tumor necrosis mimicking surgical resection.'
    ],
    complications: [
      'Segmental hepatic parenchymal necrosis and focal biloma',
      'Transient focal capsular pain due to high-dose radiation effect',
      'Arterial spasm preventing delivery of total planned microsphere dose',
      'Post-embolization transaminitis'
    ],
    maayTariffInr: 130000,
    vendorContacts: [
      'Boston Scientific TheraSphere (+91 98290 88990)',
      'Sirtex Medical India (+91 98293 11223)'
    ]
  },
  {
    id: 'hepatic-rfa-expandable-needle',
    name: 'Hepatic radiofrequency ablation (RFA) with multi-tined expandable needle for hepatocellular carcinoma',
    category: 'Interventional Oncology',
    code: 'IO-ABL-008',
    rghsCode: '693 / 11',
    icd10: 'C22.0 (Hepatocellular Carcinoma)',
    indications: [
      'Very early or early-stage HCC (single nodule <= 3 cm, or up to 3 nodules <= 3 cm each - Milan criteria)',
      'Surgical candidates refusing liver resection or patients with significant cardiopulmonary co-morbidities',
      'Recurrent small HCC post-hepatectomy without gross vascular invasion',
      'Bridging therapy to maintain transplant eligibility'
    ],
    preOpCriteria: [
      'Child-Pugh Class A or B, ECOG PS 0-1',
      'Platelet count >= 50,000/uL, INR <= 1.5, APTT normal',
      'Tumor separated by >= 10 mm from main biliary confluence (to avoid biliary strictures) and major vessels (heat-sink effect)',
      'NPO for 6 hours; conscious sedation or general anesthesia plan finalized'
    ],
    hardware: [
      { category: 'RF Generator', name: 'Boston Scientific RF3000 / Medtronic Covidien RF Generator', spec: '200W, 460 kHz generator with impedance feedback monitoring', standardStore: 'Central IR Store' },
      { category: 'Ablation Electrode', name: 'LeVeen Multi-Tined Expandable RFA Electrode', spec: '14-17G cannula, 15-25 cm length, expandable 10-12 tines (2.0 to 4.0 cm array)', standardStore: 'Central IR Store' },
      { category: 'Grounding Pads', name: 'Dispersive Hydrogel Grounding Pads', spec: '4 large electrosurgical pads applied to bilateral thighs', standardStore: 'Angio Suite Store' },
      { category: 'Imaging Guidance', name: 'Ultrasound / CT Guidance System with Needle Tracking', spec: 'Convex 3.5-5 MHz transducer with sterile biopsy guide adapter', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Application of four split-grounding dispersive pads to patient thighs; positioning on CT/US procedure table under conscious sedation and local lidocaine infiltration.',
      'Sonographic or CT confirmation of tumor dimensions, margins, and relation to adjacent critical structures.',
      'Percutaneous insertion of the LeVeen expandable cannula into the deep center of the HCC target under real-time US or CT guidance.',
      'Controlled deployment of the multi-tined array (e.g., initial deployment to 2 cm, progressing to full 3.5 or 4.0 cm umbrella diameter).',
      'Initiation of RF power starting at 30W and titrated by 10-20W/min until rapid impedance rise ("roll-off") occurs indicating tissue desiccation.',
      'Wait 30-60 seconds for tissue rehydration and deliver a second RF cycle to ensure a circumferential 5-10 mm safety margin of normal hepatic tissue.',
      'Retraction of electrode tines back into the cannula shaft.',
      'Active track ablation (temperature > 70°C) during needle withdrawal to prevent tumor seeding and tract hemorrhage.',
      'Immediate contrast-enhanced CT or contrast-enhanced ultrasound (CEUS) to confirm complete devascularization and margin coverage.'
    ],
    complications: [
      'Intraperitoneal hemorrhage from hepatic capsular breach',
      'Grounding pad thermal skin burns',
      'Heat-sink effect leading to local tumor recurrence adjacent to large vessels',
      'Thermal injury to diaphragm, gallbladder, or colon',
      'Post-ablation syndrome (low-grade fever, malaise)'
    ],
    maayTariffInr: 32500,
    vendorContacts: [
      'Boston Scientific India (+91 98290 88990)',
      'Medtronic India Medical (+91 98292 66778)',
      'Wipro GE Healthcare (+91 98291 33445)'
    ]
  },
  {
    id: 'hepatic-mwa-water-cooled',
    name: 'Hepatic microwave ablation (MWA) with water-cooled antenna for liver metastases',
    category: 'Interventional Oncology',
    code: 'IO-ABL-009',
    rghsCode: '693 / 11',
    icd10: 'C78.7 (Secondary Malignant Neoplasm of Liver)',
    indications: [
      'Colorectal cancer liver metastases (CRLM) <= 4 cm in patients who are non-surgical candidates or prefer parenchymal-sparing therapy',
      'Oligometastatic liver disease from neuroendocrine tumors, breast, or gastrointestinal stromal tumors (GIST)',
      'Lesions situated adjacent to large blood vessels (> 3 mm) where microwave overcomes the heat-sink effect',
      'Simultaneous multi-antenna ablation for large metastases (3 to 5 cm)'
    ],
    preOpCriteria: [
      'Controlled extrahepatic disease or oligometastatic status confirmed on PET-CT',
      'Adequate liver reserve: Child-Pugh A, Bilirubin < 2.0 mg/dL',
      'Coagulation profile: INR <= 1.4, Platelets >= 60,000/uL',
      'Patient cleared for deep conscious sedation or general anesthesia'
    ],
    hardware: [
      { category: 'MWA Generator', name: 'Emprint / NeuWave / Medwaves Microwave Generator', spec: '2450 MHz or 915 MHz frequency, 100-140W power output', standardStore: 'Central IR Store' },
      { category: 'MWA Antenna', name: 'Water-Cooled Microwave Antenna with Thermosphere Technology', spec: '13-14G, 15-20 cm shaft length with internal saline circulation pump', standardStore: 'Central IR Store' },
      { category: 'Peristaltic Pump', name: 'High-Flow Cold Saline Circulation Pump Unit', spec: 'Automated continuous chilled saline loop preventing shaft heating', standardStore: 'Central IR Store' },
      { category: 'Imaging Guidance', name: 'Siemens / GE Multi-slice CT Fluoroscopy System', spec: '0.5 sec reconstructed real-time axial CT guidance', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Pre-procedural planning on contrast-enhanced CT with multiplanar reconstruction to select puncture trajectory avoiding major biliary branches and bowel.',
      'Sterile preparation and induction of general anesthesia with controlled breath-hold or apnea.',
      'Percutaneous insertion of the water-cooled microwave antenna into the target liver metastasis under CT fluoroscopy or fused US-CT guidance.',
      'Verification of antenna tip positioning extending 5 mm beyond the deep margin of the tumor to create a spherical ablation zone.',
      'Activation of internal chilled saline cooling system.',
      'Microwave energy delivery at 65-100W for 4-8 minutes based on manufacturer ablation nomogram and target diameter.',
      'Real-time visualization of evolving hyperechoic bubble cloud (on US) or progressive low-attenuation ablation zone (on CT).',
      'Thermal tract ablation performed at 35-45W during gradual cannula retrieval.',
      'Post-procedure triphasic contrast-enhanced CT confirming a minimum 5 mm (ideally 10 mm) circumferential non-enhancing ablation margin.'
    ],
    complications: [
      'Liver abscess formation in necrotic cavity (especially in patients with prior biliary enteric anastomosis)',
      'Subcapsular hematoma or hemoperitoneum',
      'Pleural effusion or pneumothorax during trans-diaphragmatic needle approach',
      'Biliary ductal thermal stricture'
    ],
    maayTariffInr: 36000,
    vendorContacts: [
      'Medtronic India (Emprint) (+91 98292 66778)',
      'Johnson & Johnson / Ethicon NeuWave (+91 98290 33221)',
      'Healthium Medtech (+91 98295 11002)'
    ]
  },
  {
    id: 'hepatic-cryoablation-argon-helium',
    name: 'Hepatic cryoablation with argon-helium gas system and continuous ice-ball monitoring',
    category: 'Interventional Oncology',
    code: 'IO-ABL-010',
    rghsCode: '693 / 11',
    icd10: 'C22.0 (HCC) / C78.7 (Liver Metastasis)',
    indications: [
      'Primary or secondary hepatic malignancies situated close to the liver capsule, diaphragm, or gallbladder where precise ice-ball visualization prevents collateral damage',
      'Tumors adjacent to sensitive structures where thermal pain from RF/MWA is poorly tolerated under conscious sedation',
      'Large or irregularly contoured hepatic tumors requiring multi-probe synergism (isotherm sculpting)',
      'Preservation of collagenous architecture and biliary integrity in subcapsular locations'
    ],
    preOpCriteria: [
      'Platelet count >= 70,000/uL, INR <= 1.4 (higher threshold due to risk of "cryoshock")',
      'Pre-op tumor size <= 5 cm (larger tumors carry heightened risk of post-thaw coagulopathy)',
      'Adequate renal and hepatic functional reserve',
      'Argon and Helium gas cylinder pressures verified at > 2000 psi prior to patient positioning'
    ],
    hardware: [
      { category: 'Cryoablation Console', name: 'Galil Medical / Boston Scientific Visual-ICE Cryosystem', spec: 'Multi-channel gas expansion console utilizing Joule-Thomson effect', standardStore: 'Central IR Store' },
      { category: 'Cryoprobes', name: 'IceSeed / IceSphere 17G Cryoablation Needles', spec: '1.47 mm (17G) diameter, 15 cm length, sterile dual-lumen probes', standardStore: 'Central IR Store' },
      { category: 'Gases', name: 'High-Purity High-Pressure Argon and Helium Gas Tanks', spec: 'Grade 5.0 Argon (freezing at -140°C) and Helium (thawing at +40°C)', standardStore: 'Central IR Store' },
      { category: 'Temperature Sensor', name: 'Thermal Sensor Probes (Thermocouples)', spec: '0.035" needle thermocouple for margin temperature monitoring', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Placement of patient in supine or lateral decubitus position on CT table; local anesthesia and IV sedation.',
      'Insertion of 2 to 4 parallel cryoprobes spaced 1.5 to 2.0 cm apart around and within the hepatic lesion under CT fluoroscopic guidance.',
      'Placement of a needle thermocouple at the critical margin (e.g., adjacent to colon or gallbladder) to monitor real-time temperature.',
      'Initiation of Freeze 1: High-pressure Argon gas delivery for 10 minutes; real-time CT monitoring demonstrates the ice-ball as a sharply demarcated low-density zone (-10 to -40 Hounsfield Units) extending 5 mm beyond the tumor margin.',
      'Passive thaw for 3 minutes followed by active Helium gas thaw for 2 minutes (rapid intracellular crystallization mechanism).',
      'Initiation of Freeze 2: Second Argon freezing cycle for 10 minutes to guarantee complete cellular rupture through secondary recrystallization.',
      'Final active Helium thaw to release probes from the frozen tissue block.',
      'Needle tract cautery or tract plugging with bio-gelatin to prevent post-procedural bleeding.',
      'Delayed contrast-enhanced CT scanning to exclude hematoma and verify complete hypodense avascular necrosis.'
    ],
    complications: [
      'Hepatic cryoshock syndrome (severe systemic inflammatory response, DIC, acute renal failure - rare in tumors < 4 cm)',
      'Hepatic fracture or capsular tear due to ice-ball expansion and mechanical shear stress',
      'Post-procedure hemorrhage from unsealed needle tracks',
      'Myoglobinuria / transient acute tubular necrosis'
    ],
    maayTariffInr: 52000,
    vendorContacts: [
      'Boston Scientific (Galil Medical) (+91 98290 88990)',
      'Endocare / Varian Medical Systems (+91 98293 44556)'
    ]
  },
  {
    id: 'ire-nanoknife-pancreatic-lapc',
    name: 'Irreversible Electroporation (IRE / NanoKnife) for non-thermal ablation of locally advanced pancreatic adenocarcinoma (LAPC)',
    category: 'Interventional Oncology',
    code: 'IO-ABL-011',
    rghsCode: '693 / 11',
    icd10: 'C25.0 (Malignant Neoplasm of Head of Pancreas) / C25.9',
    indications: [
      'Locally advanced pancreatic adenocarcinoma (LAPC Stage III) without distant metastases after induction chemotherapy (FOLFIRINOX / Gem-Nab-Paclitaxel)',
      'Tumors encasing superior mesenteric artery (SMA), celiac axis, or portal vein / SMV confluence deemed surgically unresectable',
      'Preservation of adjacent arterial and venous elastic laminae and gastrointestinal mucosa',
      'Margin accentuation during surgical exploration or percutaneous CT-guided primary ablation'
    ],
    preOpCriteria: [
      'ECOG performance status 0-1, stable disease after minimum 3-4 months of induction systemic chemotherapy',
      'No evidence of distant hepatic or peritoneal metastases on staging CT/PET-CT within 3 weeks',
      'Absence of active cardiac arrhythmias or uncorrectable prolonged QT interval',
      'General anesthesia with complete neuromuscular blockade (paralytic infusion) and cardiac ECG R-wave synchronization'
    ],
    hardware: [
      { category: 'IRE Generator', name: 'AngioDynamics NanoKnife System', spec: 'High-voltage pulsed DC generator (up to 3000V, 50A) with ECG R-wave synchronizer', standardStore: 'Central IR Store' },
      { category: 'IRE Electrodes', name: 'NanoKnife 19G Monopolar Electrodes', spec: '15-20 cm length, adjustable exposed active tip length (10 to 25 mm)', standardStore: 'Central IR Store' },
      { category: 'Cardiac Synchronizer', name: 'AccuSync ECG Trigger Unit', spec: 'Detects cardiac R-waves to time high-voltage pulses within the absolute refractory period', standardStore: 'Angio Suite Store' },
      { category: 'CT Imaging Guidance', name: 'Dual-Energy / High-Resolution CT Scanner with Stereotactic Guide', spec: 'Continuous multi-slice axial reconstructor for parallel needle alignment', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Induction of general anesthesia with continuous rocuronium/cisatracurium infusion to achieve complete neuromuscular paralysis (train-of-four 0/4) preventing violent muscle contractions.',
      'Integration of AccuSync ECG leads to synchronize generator pulses strictly to the ST segment (refractory period) to avoid ventricular fibrillation.',
      'Percutaneous CT-guided transabdominal insertion of 2 to 6 monopolar 19G electrodes around the pancreatic lesion.',
      'Rigid maintenance of parallel probe alignment: probe spacing must be kept between 1.5 and 2.2 cm, with probe exposure adjusted to 15-20 mm based on software planning.',
      'Delivery of test pulses (10 pulses at 1500V/cm) to measure electrical conductivity and current draw across all probe pairs (optimal: 20-40 Amperes).',
      'Sequential delivery of therapeutic high-voltage pulses: 90 pulses per electrode pair (pulse duration 70-100 microseconds, field strength 1500-2500 V/cm).',
      'Dynamic monitoring of current draw: a gradual increase in amperes confirms progressive formation of permanent nanoscale bilayer pores and irreversible cell death.',
      'Gradual electrode retraction under CT verification and track observation for peripancreatic hematoma.',
      'Transfer to surgical ICU for continuous cardiac telemetry and serum amylase/lipase monitoring.'
    ],
    complications: [
      'Acute post-ablation pancreatitis and peripancreatic fluid collections',
      'Cardiac arrhythmias (ventricular ectopy or fibrillation if synchronization slips)',
      'Portal vein or SMV thrombosis',
      'Duodenal perforation or biliary fistula'
    ],
    maayTariffInr: 95000,
    vendorContacts: [
      'AngioDynamics India (+91 98294 88776)',
      'Medtronic Advanced Energy (+91 98292 66778)'
    ]
  },
  {
    id: 'ire-central-hepatic-malignancies',
    name: 'Irreversible Electroporation (IRE) for central hepatic malignancies adjacent to major portal pedicles',
    category: 'Interventional Oncology',
    code: 'IO-ABL-012',
    rghsCode: '693 / 11',
    icd10: 'C22.0 (HCC) / C22.1 (Intrahepatic Cholangiocarcinoma)',
    indications: [
      'Perihilar or central hepatic tumors (< 3.5 cm) abutted against main right/left hepatic bile ducts or primary portal veins',
      'Malignancies where thermal ablation (RFA/MWA) carries prohibitive risk of major bile duct stricture or ischemic liver necrosis',
      'Lesions situated directly beside the IVC or major hepatic vein tributaries where blood flow causes complete thermal heat-sink failure',
      'Patients ineligible for extensive anatomical liver resection due to inadequate future liver remnant (FLR)'
    ],
    preOpCriteria: [
      'ECOG 0-1, Child-Pugh Score <= 7',
      'Bilirubin < 2.0 mg/dL (or pre-procedure biliary drainage performed for obstructive jaundice)',
      'Normal sinus rhythm on 12-lead ECG, baseline QTc < 460 ms',
      'Platelets >= 60,000/uL, INR <= 1.4'
    ],
    hardware: [
      { category: 'IRE Generator', name: 'NanoKnife Electroporation Console', spec: 'Microsecond DC high-voltage generator with real-time impedance graphing', standardStore: 'Central IR Store' },
      { category: 'IRE Electrodes', name: '19G Single/Dual NanoKnife Needles', spec: '15 cm length, variable exposure (1.0 to 2.5 cm)', standardStore: 'Central IR Store' },
      { category: 'ECG Trigger System', name: 'AccuSync R-Wave Synchronization Module', spec: 'Fiber-optic trigger connection to IRE generator', standardStore: 'Angio Suite Store' },
      { category: 'Guidance Tools', name: 'CT Stereotactic Navigation Frame or Laser Guide', spec: 'Parallelism jig maintaining probe divergence < 1 mm', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Administration of general anesthesia with complete neuromuscular blockade (rocuronium with train-of-four monitoring 0/4).',
      'Stereotactic or CT-guided placement of 3 to 4 parallel 19G electrodes bracketing the central perihilar tumor.',
      'Verification that inter-electrode distances range between 15 mm and 20 mm using CT multiplanar reconstruction.',
      'Calibration of pulse parameters: 90 pulses per pair, 70 microsecond pulse width, voltage gradient 1500 to 2000 V/cm.',
      'Cardiac synchronization engagement ensuring pulse firing occurs during the ventricular refractory period.',
      'Execution of electroporation sequence across all active pairs with continuous monitoring of current escalation.',
      'Removal of electrodes under CT monitoring; assessment for subcapsular bleeding or central hematoma.',
      'Overnight observation on continuous cardiac telemetry and serial liver function tests.'
    ],
    complications: [
      'Transient hemobilia or mild transaminitis',
      'Segmental portal vein branch spasm or thrombosis',
      'Transient cardiac premature ventricular contractions (PVCs)',
      'Subcapsular biloma (significantly lower risk compared to thermal ablation)'
    ],
    maayTariffInr: 92000,
    vendorContacts: [
      'AngioDynamics India (+91 98294 88776)',
      'Healthline Systems Jaipur (+91 98290 22331)'
    ]
  },
  {
    id: 'lung-mwa-early-nsclc',
    name: 'Percutaneous microwave ablation of early-stage non-small cell lung cancer (NSCLC)',
    category: 'Interventional Oncology',
    code: 'IO-ABL-013',
    rghsCode: '693 / 11',
    icd10: 'C34.90 (Malignant Neoplasm of Bronchus and Lung, Unspecified)',
    indications: [
      'Medically inoperable Stage IA or IB non-small cell lung cancer (T1-T2a N0 M0, tumor <= 3 cm) due to severe COPD, FEV1 < 40%, or cardiovascular disease',
      'Patients refusing thoracic surgical resection (wedge resection/lobectomy)',
      'Isolated recurrence in remaining lung tissue following previous surgical resection',
      'Synchronous multiple primary lung adenocarcinomas'
    ],
    preOpCriteria: [
      'Pre-procedure PET-CT confirming absence of mediastinal lymphadenopathy (N0) and distant metastases',
      'Baseline spirometry (PFT): room air SpO2 >= 90%, patient able to tolerate temporary pneumothorax',
      'Platelet count >= 70,000/uL, INR <= 1.4',
      'Discontinuation of anticoagulants/antiplatelets per CIRSE/SIR guidelines'
    ],
    hardware: [
      { category: 'Microwave Generator', name: 'Emprint / NeuWave 2.45 GHz Microwave Unit', spec: '100-140W power with precise spherical thermal field technology', standardStore: 'Central IR Store' },
      { category: 'MWA Antenna', name: '13-14G Water-Cooled Lung Microwave Antenna', spec: '15 cm shaft length, ceramic non-stick tip, internal cooling jacket', standardStore: 'Central IR Store' },
      { category: 'Chest Drainage Kit', name: 'Pigtail Pleural Drainage Catheter Set', spec: '8.5F - 10F locking pigtail catheter with Heimlich valve / underwater seal', standardStore: 'Central IR Store' },
      { category: 'Imaging Guidance', name: 'CT Fluoroscopy / Low-Dose Helical CT', spec: 'Real-time guidance with multi-axis trajectory planning', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Patient positioned on CT gantry (prone, supine, or lateral) depending on tumor depth; planning the shortest non-transpleural or single pleural puncture path avoiding bullae and fissures.',
      'Administration of local anesthesia down to parietal pleura with conscious sedation.',
      'Percutaneous puncture under CT fluoroscopy, introducing the microwave antenna directly through the pleura into the center of the lung nodule during quiet respiration.',
      'Verification that the active zone covers the entire nodule with a planned 5-10 mm ground-glass ablation margin.',
      'Microwave power delivery: 45 to 65W for 3.5 to 6 minutes (lung tissue has low dielectric permittivity and low thermal conductivity, creating efficient heating).',
      'Serial CT monitoring during ablation: visualization of a progressive circumferential ground-glass halo surrounding the nodule representing thermal coagulative necrosis.',
      'Track ablation upon withdrawal to seal the pulmonary parenchymal track and reduce pneumothorax or needle-track seeding.',
      'Immediate end-procedure CT scan of the thorax to evaluate for pneumothorax and intraparenchymal hemorrhage.',
      'Placement of an 8.5F pigtail pleural catheter if symptomatic or large pneumothorax (> 20%) is detected.'
    ],
    complications: [
      'Pneumothorax (20-40%, with 10-15% requiring chest tube insertion)',
      'Self-limiting pulmonary parenchymal hemorrhage / hemoptysis',
      'Bronchopleural fistula or lung abscess (rare)',
      'Pleural effusion and post-ablation pleuritic chest pain'
    ],
    maayTariffInr: 38500,
    vendorContacts: [
      'Medtronic India (Emprint) (+91 98292 66778)',
      'Johnson & Johnson NeuWave (+91 98290 33221)',
      'Cook Medical India (+91 98291 99887)'
    ]
  },
  {
    id: 'lung-cryoablation-pleural-metastases',
    name: 'Percutaneous lung cryoablation for pulmonary metastases adjacent to pleura/chest wall',
    category: 'Interventional Oncology',
    code: 'IO-ABL-014',
    rghsCode: '693 / 11',
    icd10: 'C78.00 (Secondary Malignant Neoplasm of Unspecified Lung)',
    indications: [
      'Oligometastatic pulmonary lesions (< 3.5 cm) from colorectal, renal cell, melanoma, or sarcoma origin',
      'Subpleural lung metastases abutting the chest wall, ribs, or pericardium where microwave/RF causes unbearable severe pleuritic pain',
      'Tumors requiring preservation of adjacent chest wall nerve roots (intercostal nerves) through ice-ball visualization',
      'Patients with marginal respiratory reserve where cryoablation preserves native collagen matrix and reduces bronchopleural fistula risk'
    ],
    preOpCriteria: [
      'Oligometastatic disease (<= 3-5 pulmonary nodules) with controlled primary tumor',
      'INR <= 1.4, Platelets >= 75,000/uL',
      'Pre-procedure contrast CT thorax showing clear probe access trajectory',
      'Conscious sedation or monitored anesthesia care (MAC)'
    ],
    hardware: [
      { category: 'Cryoablation System', name: 'Visual-ICE / CryoHit Multi-Probe System', spec: 'Multi-channel gas expansion console with continuous pressure regulation', standardStore: 'Central IR Store' },
      { category: 'Cryoprobes', name: '17G IceSphere / IceRod Percutaneous Cryoprobes', spec: '1.47 mm needle, 15 cm length, sharp trocar tip', standardStore: 'Central IR Store' },
      { category: 'Pigtail Catheter', name: '8.5F Pleural Evacuation Kit', spec: 'Hydrophilic locking loop catheter with three-way stopcock', standardStore: 'Central IR Store' },
      { category: 'Thermal Thermocouple', name: 'Chest Wall Thermosensor Needle', spec: '21G needle sensor for intercostal space temperature verification', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Positioning patient on CT table to provide direct vertical or oblique access to the subpleural nodule.',
      'CT fluoroscopy-guided percutaneous puncture through the chest wall into the subpleural lesion using 1 to 3 parallel 17G cryoprobes.',
      'Spacing probes 10-15 mm apart to ensure intersecting ice-balls without mechanical damage to adjacent ribs.',
      'Execution of Dual-Freeze Protocol: Freeze 1 with Argon gas for 8-10 minutes. Ice-ball formation in lung parenchyma is visible on CT as a dense rim surrounding an expanding low-density ice front.',
      'Continuous verification that the ice margin encompasses the tumor plus 6 mm of surrounding pulmonary parenchyma while sparing the intercostal bundle.',
      'Passive thaw for 3 minutes, active Helium thaw for 2 minutes.',
      'Freeze 2 with Argon gas for 8 minutes to finalize tissue architecture disruption.',
      'Active Helium warm-up cycle to allow smooth atraumatic needle withdrawal without tearing visceral pleura.',
      'Immediate inspiratory and expiratory helical CT scan to assess for pneumothorax and track hemorrhage.'
    ],
    complications: [
      'Pneumothorax (treated conservatively or with 8.5F pigtail aspiration)',
      'Minor hemoptysis (blood-tinged sputum resolving within 24-48 hours)',
      'Subpleural hematoma',
      'Transient intercostal neural irritation / numbness'
    ],
    maayTariffInr: 49000,
    vendorContacts: [
      'Boston Scientific India (+91 98290 88990)',
      'Endocare India (+91 98293 44556)'
    ]
  },
  {
    id: 'renal-cryoablation-rcc-temperature-sensors',
    name: 'Renal Cell Carcinoma (RCC) percutaneous cryoablation with real-time temperature sensors',
    category: 'Interventional Oncology',
    code: 'IO-ABL-015',
    rghsCode: '693 / 11',
    icd10: 'C64.9 (Malignant Neoplasm of Unspecified Kidney)',
    indications: [
      'Biopsy-proven small renal masses (Stage T1a RCC, tumor diameter <= 4.0 cm) in elderly or comorbid patients',
      'Patients with solitary functioning kidney, bilateral RCC, or genetic predisposition (e.g., von Hippel-Lindau, Birt-Hogg-Dube) requiring maximal nephron-sparing',
      'High-risk surgical candidates for partial nephrectomy (severe cardiovascular or pulmonary disease)',
      'Posterior or lateral cortical exophytic renal tumors allowing direct percutaneous access'
    ],
    preOpCriteria: [
      'Normal contralateral kidney function or CKD Stage 1-3 (baseline eGFR documented)',
      'Platelets >= 75,000/uL, INR <= 1.4, normal bleeding parameters',
      'Contrast multiphasic CT/MRI demonstrating relationship to renal collecting system, ureter, and psoas muscle',
      'Patient positioned in prone or prone-oblique position'
    ],
    hardware: [
      { category: 'Cryoablation System', name: 'Visual-ICE / ProSense Multi-Needle Cryosystem', spec: 'Liquid nitrogen or argon-gas Joule-Thomson console', standardStore: 'Central IR Store' },
      { category: 'Cryoprobes', name: '17G IceSphere / IceEdge Cryoablation Needles', spec: '1.47 mm diameter, 15 cm length, sharp bevel tip', standardStore: 'Central IR Store' },
      { category: 'Temperature Probes', name: 'Multi-Point Thermocouple Sensor Needles', spec: '20G needle with real-time digital margin temperature readout', standardStore: 'Central IR Store' },
      { category: 'Hydrodissection Kit', name: 'Hydrodissection Sheath & Fluid Set', spec: '18G Chiba needle, 5% Dextrose in water, and 1:20 contrast mix', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Patient placed in prone position; sterile preparation and drape under local anesthesia and intravenous conscious sedation.',
      'If the tumor is close to the colon, psoas muscle, or ureter: perform percutaneous hydrodissection by injecting 200-500 mL of 5% Dextrose solution mixed with dilute iodinated contrast to displace adjacent organs > 15 mm away.',
      'Insertion of 2 to 4 parallel 17G cryoprobes spaced 1.5 cm apart into the renal tumor under continuous CT fluoroscopy.',
      'Placement of a thermocouple temperature sensor at the peripheral margin and adjacent to the renal sinus or psoas sheath.',
      'Delivery of Freeze 1: Argon gas activation for 10 minutes, generating an ice-ball at -140°C. Real-time CT monitoring demonstrates ice-ball progression as a well-demarcated -20 to -40 HU mass completely covering the tumor with a 5 mm buffer.',
      'Continuous thermocouple verification that the peripheral target margin reaches <= -20°C (lethal isotherm) while adjacent bowel remains > +15°C.',
      'Passive thaw for 5 minutes followed by active thaw for 2 minutes.',
      'Delivery of Freeze 2: Second freezing cycle for 10 minutes to induce secondary mechanical membrane disruption.',
      'Active thaw to release probes; probe track cauterization / gelfoam slurry injection to ensure renal cortical hemostasis.',
      'Immediate contrast CT to rule out retroperitoneal or subcapsular hematoma and verify complete avascular zone.'
    ],
    complications: [
      'Perirenal or retroperitoneal hematoma (1-4%)',
      'Ureteral stricture or thermal ureteral injury (if tumor is central/medial)',
      'Transient hematuria (usually resolves within 24-48 hours)',
      'Paresthesia in genitofemoral or lateral femoral cutaneous nerve distribution'
    ],
    maayTariffInr: 54000,
    vendorContacts: [
      'Boston Scientific India (+91 98290 88990)',
      'IceCure Medical / Medtronic India (+91 98292 66778)'
    ]
  },
  {
    id: 'renal-mwa-t1a-tumors',
    name: 'Renal microwave ablation for T1a renal parenchymal tumors',
    category: 'Interventional Oncology',
    code: 'IO-ABL-016',
    rghsCode: '693 / 11',
    icd10: 'C64.9 (Malignant Neoplasm of Kidney)',
    indications: [
      'Exophytic or parenchymal T1a renal cell carcinoma (<= 4 cm) in non-surgical patients',
      'Recurrent renal malignancies following prior partial nephrectomy',
      'Solid non-cystic renal cortical neoplasms in patients requiring short procedure times and rapid coagulation',
      'Ablation of highly vascular renal masses where microwave heating minimizes blood-flow-induced heat dissipation'
    ],
    preOpCriteria: [
      'Preserved renal baseline (eGFR > 30 mL/min)',
      'Coagulation screen: INR <= 1.4, Platelet count >= 60,000/uL',
      'Distance from tumor to renal pelvis/ureter > 15 mm (or ureteral cooling catheter planned)',
      'Strict fasting 6 hours pre-procedure'
    ],
    hardware: [
      { category: 'Microwave Generator', name: 'Emprint / NeuWave Microwave Ablation System', spec: '2450 MHz, water-cooled power delivery module', standardStore: 'Central IR Store' },
      { category: 'MWA Antenna', name: '14G Water-Cooled Renal Microwave Antenna', spec: '15-20 cm shaft length with internal thermocouple monitoring', standardStore: 'Central IR Store' },
      { category: 'Guidance Modality', name: 'CT Fluoroscopy & Ultrasound System', spec: 'Contrast-enhanced pre-scan with high-resolution multiplanar reformatting', standardStore: 'Angio Suite Store' },
      { category: 'Dissection Needles', name: '18G/20G Spinal / Chiba Needles', spec: '15 cm length for peri-renal hydrodissection', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Patient placed in prone or lateral oblique position under conscious sedation or general anesthesia.',
      'Perform hydrodissection if colon or duodenum is within 1.5 cm of renal tumor by infusing warm 5% Dextrose/contrast mix.',
      'Percutaneous insertion of the 14G water-cooled microwave antenna into the center of the renal tumor under CT fluoroscopic tracking.',
      'Confirm antenna position: the active radiating zone must be centered to achieve an ablation sphere extending 5 mm beyond the tumor margins.',
      'Deliver microwave energy at 65-75W for 3.5 to 5.5 minutes with continuous chilled saline circulation.',
      'Monitor tissue changes on CT: progressive appearance of parenchymal low attenuation and gas microbubbles.',
      'Perform track coagulation at 30W as the antenna is pulled through the renal parenchyma and capsule.',
      'Immediate contrast-enhanced CT verifying complete devascularization without contrast enhancement in the ablation bed and confirming renal artery/vein patency.'
    ],
    complications: [
      'Subcapsular perirenal hematoma',
      'Urinoma or caliceal fistula (if lesion was central or medially oriented)',
      'Transient microscopic or macroscopic hematuria',
      'Thermal injury to adjacent psoas muscle causing flank stiffness'
    ],
    maayTariffInr: 39500,
    vendorContacts: [
      'Medtronic India (Emprint) (+91 98292 66778)',
      'Johnson & Johnson Ethicon NeuWave (+91 98290 33221)'
    ]
  },
  {
    id: 'renal-angioinfarction-ethanol-aml',
    name: 'Renal angio-infarction: Superselective ethanol / particle embolization for giant angiomyolipoma',
    category: 'Interventional Oncology',
    code: 'IO-EMB-017',
    rghsCode: '693 / 12',
    icd10: 'D30.00 (Benign Neoplasm of Unspecified Kidney) / Q85.1 (Tuberous Sclerosis)',
    indications: [
      'Renal angiomyolipoma (AML) >= 4 cm in diameter due to significant lifetime risk of spontaneous retroperitoneal hemorrhage (Wunderlich syndrome)',
      'Renal AML with intralesional aneurysms measuring >= 5 mm on contrast imaging',
      'Acute retroperitoneal hemorrhage secondary to ruptured angiomyolipoma',
      'Multiple or bilateral AMLs in patients with Tuberous Sclerosis Complex (TSC) requiring maximum nephron preservation'
    ],
    preOpCriteria: [
      'Serum Creatinine <= 1.8 mg/dL, eGFR documented',
      'Coagulation screen: Platelets >= 50,000/uL, INR <= 1.5',
      'Multiphasic contrast CT confirming fat-attenuating renal mass and identifying feeder origins',
      'Peripheral venous access and pre-medication with antiemetics and analgesics'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F Vascular Introducer Sheath', spec: '11 cm length, 0.035" valve', standardStore: 'Angio Suite Store' },
      { category: 'Base Catheter', name: '5F Cobra C2 / Renal Double Curve (RDC) Catheter', spec: '65 cm length, 0.035" compatible', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: '2.0F - 2.4F DMSO-Compatible Microcatheter', spec: '130 cm length with 0.014" steerable hydrophilic microguidewire', standardStore: 'DDC-14 Central Store' },
      { category: 'Sclerosant / Embolic', name: 'Absolute Alcohol (Ethanol 99%) & Lipiodol Ultra-Fluid', spec: '10 mL ampoule 99% sterile ethanol + 10 mL Lipiodol mixed in 1:1 or 2:1 ratio', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Particulate Embolic', name: 'Calibrated PVA / Tris-acryl Microspheres', spec: '300-500 um or 500-700 um microspheres', standardStore: 'Central IR Store' },
      { category: 'Microcoils', name: 'Detachable 0.014" Platinum Microcoils', spec: '2 mm to 6 mm diameter for packing large feeding pseudoaneurysms', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Right common femoral artery access and 5F sheath insertion under local anesthesia.',
      'Selective renal arteriography using 5F Cobra/RDC catheter demonstrating the renal arterial anatomy, parenchymal angiomyolipoma blush, and abnormal tortuous aneurysmal neo-vessels.',
      'Ultraselective catheterization of the feeding interlobar or interlobular arterial branches using a 2.0F microcatheter, navigating as close to the tumor core as possible to preserve healthy parenchyma.',
      'Slow, controlled infusion of calibrated 300-500 um PVA/microspheres or an emulsion of absolute ethanol and Lipiodol (2:1 ratio) under continuous real-time fluoroscopic subtraction.',
      'In cases with large intralesional aneurysms (> 5 mm): superselective deployment of 0.014" microcoils to eliminate rupture risk.',
      'Infusion continued until complete stasis in the abnormal dysplastic vascular bed is attained.',
      'Completion renal arteriogram demonstrating total devascularization of the angiomyolipoma with preserved perfusion to the normal upper/lower pole parenchyma.',
      'Femoral sheath removal and deployment of vascular closure device or manual compression.'
    ],
    complications: [
      'Post-embolization syndrome (flank pain, fever, leukocytosis in up to 80%)',
      'Non-target embolization causing renal cortical infarction or healthy tissue necrosis',
      'Liquefactive necrosis or perirenal abscess formation in giant AMLs',
      'Transient acute kidney injury'
    ],
    maayTariffInr: 46200,
    vendorContacts: [
      'Merit Medical Systems (+91 98292 44321)',
      'Cook Medical India (+91 98291 99887)',
      'Terumo India Medical (+91 98291 55678)'
    ]
  },
  {
    id: 'total-renal-arterial-embolization',
    name: 'Total renal arterial embolization for end-stage renal tumor palliation / gross hematuria',
    category: 'Interventional Oncology',
    code: 'IO-EMB-018',
    rghsCode: '693 / 12',
    icd10: 'C64.9 (Malignant Neoplasm of Kidney) / R31.0 (Gross Hematuria)',
    indications: [
      'Unresectable, advanced renal cell carcinoma presenting with intractable gross hematuria or flank pain',
      'Pre-operative infarction for giant hypervascular RCC (to reduce intra-operative blood loss and facilitate nephrectomy)',
      'End-stage non-functioning kidneys with severe refractory hypertension or heavy proteinuria',
      'Palliative tumor devascularization in patients unfit for surgery'
    ],
    preOpCriteria: [
      'Confirmation of adequate contralateral renal function (or patient already established on hemodialysis)',
      'Coagulation profile: INR <= 1.5, Platelets >= 50,000/uL',
      'Pre-procedure analgesia protocol established for expected severe post-infarction pain',
      'Informed consent acknowledging permanent loss of ipsilateral kidney function'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F / 6F Vascular Introducer Sheath', spec: '11 cm length, 0.035" valve', standardStore: 'Angio Suite Store' },
      { category: 'Base Catheter', name: '5F Cobra C2 / RDC / Sidewinder Catheter', spec: '65-100 cm length', standardStore: 'Central IR Store' },
      { category: 'Embolic Particles', name: 'Polyvinyl Alcohol (PVA) / Calibrated Microspheres', spec: '500-700 um or 700-900 um vials', standardStore: 'Central IR Store' },
      { category: 'Sclerosant / Embolic', name: 'Absolute Alcohol (99% Ethanol) / Gelfoam Sponge', spec: '10 mL Ethanol + Gelfoam torpedoes', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Occlusion Coils / Plugs', name: '0.035" Fibered Stainless Steel / Platinum Coils or Amplatzer Vascular Plug', spec: '6 mm - 10 mm diameter main trunk embolization coils / Vascular Plug II (8-12 mm)', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Percutaneous arterial access via right common femoral artery using a 5F/6F sheath.',
      'Abdominal aortography and selective renal arteriography to delineate main renal artery, accessory renal arteries, and tumor angioarchitecture.',
      'Catheterization of the main renal artery beyond the adrenal and ureteral branches using a 5F Cobra/RDC catheter.',
      'Distal microvascular bed occlusion: slow infusion of 500-700 um PVA particles or absolute alcohol under flow control until peripheral parenchymal stasis is achieved.',
      'Intermediate occlusion with absorbable gelfoam torpedoes to obliterate interlobar and segmental trunks.',
      'Main renal artery trunk occlusion: deployment of multiple 0.035" fibered coils or an Amplatzer Vascular Plug (sized 30-50% larger than artery diameter) placed in the proximal-to-mid main renal artery.',
      'Repeat aortogram confirming complete absence of renal blood flow with patent aorta and contralateral renal artery.',
      'Hemostasis with closure device; initiation of aggressive IV hydration and patient-controlled analgesia (PCA).'
    ],
    complications: [
      'Severe post-infarction syndrome (severe flank pain, fever, nausea, paralytic ileus)',
      'Non-target coil or particulate reflux into aorta or lower extremity arteries',
      'Infection of necrotic renal tissue leading to perinephric abscess',
      'Transient hypertensive surge during alcohol infusion'
    ],
    maayTariffInr: 48500,
    vendorContacts: [
      'Cook Medical India (+91 98291 99887)',
      'Medtronic India (+91 98292 66778)',
      'Abbott Vascular India (+91 98290 66554)'
    ]
  },
  {
    id: 'adrenal-mwa-recurrent-metastases',
    name: 'Percutaneous microwave ablation for recurrent adrenal metastases',
    category: 'Interventional Oncology',
    code: 'IO-ABL-019',
    rghsCode: '693 / 11',
    icd10: 'C79.70 (Secondary Malignant Neoplasm of Unspecified Adrenal Gland)',
    indications: [
      'Isolated or oligometastatic adrenal metastases (<= 4 cm) from lung cancer, renal cell carcinoma, or melanoma',
      'Adrenal recurrences following surgical adrenalectomy in the contralateral gland',
      'Patients with controlled primary disease desiring locoregional eradication of active adrenal metastases',
      'Palliative local control of enlarging painful adrenal masses'
    ],
    preOpCriteria: [
      'Biochemical exclusion of pheochromocytoma (plasma/urinary metanephrines normal)',
      'Pre-medication with alpha-blockers (Prazosin/Phenoxybenzamine) if borderline catecholamine release suspected',
      'Platelets >= 70,000/uL, INR <= 1.4',
      'Anesthesia team prepared with rapid-acting IV vasodilators (Sodium Nitroprusside/Labetalol) for intra-operative hypertensive spikes'
    ],
    hardware: [
      { category: 'Microwave Generator', name: 'Emprint / NeuWave 2.45 GHz Ablation Unit', spec: 'Water-cooled microwave generator with fine power graduation', standardStore: 'Central IR Store' },
      { category: 'MWA Antenna', name: '14-16G Water-Cooled Microwave Antenna', spec: '15 cm length, ceramic tip, internally cooled shaft', standardStore: 'Central IR Store' },
      { category: 'Hydrodissection Kit', name: 'Hydrodissection Set with 18G Chiba Needle', spec: 'Saline / 5% Dextrose infusion kit for kidney/colon/diaphragm separation', standardStore: 'Central IR Store' },
      { category: 'Imaging Guidance', name: 'CT Multiplanar Fluoroscopy', spec: 'Rapid volumetric CT reconstruction module', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Patient placed in prone or ipsilateral decubitus position on CT scanner table.',
      'Continuous invasive arterial blood pressure monitoring established by anesthesia team.',
      'Percutaneous hydrodissection under CT guidance: injection of 150-300 mL 5% Dextrose to separate the adrenal mass from the IVC/liver (for right adrenal) or spleen/pancreas tail/colon (for left adrenal).',
      'CT fluoroscopy-guided insertion of the microwave antenna directly into the center of the adrenal metastasis avoiding the pleural recess.',
      'Initiation of microwave ablation at 45-65W for 3 to 5 minutes with real-time blood pressure monitoring (catecholamine release from surrounding normal adrenal medulla may trigger sudden severe hypertension).',
      'Immediate titration of IV labetalol or nitroprusside by anesthesiologist to manage hypertensive surge.',
      'Verification of confluent low-attenuation ablation zone encompassing the entire tumor and a 5 mm surrounding margin.',
      'Track ablation performed at 30W during probe removal.',
      'Immediate contrast-enhanced CT scan to verify absence of retroperitoneal hemorrhage or organ injury.'
    ],
    complications: [
      'Severe intra-procedural hypertensive crisis / tachycardia',
      'Pneumothorax or hemothorax (trans-diaphragmatic puncture)',
      'Adrenal insufficiency (especially in solitary remaining adrenal gland, requiring steroid supplementation)',
      'Retroperitoneal hematoma'
    ],
    maayTariffInr: 41000,
    vendorContacts: [
      'Medtronic India (Emprint) (+91 98292 66778)',
      'Johnson & Johnson NeuWave (+91 98290 33221)'
    ]
  },
  {
    id: 'adrenal-vein-sampling-acth',
    name: "Adrenal vein sampling (AVS) with ACTH stimulation for primary aldosteronism (Conn's Syndrome)",
    category: 'Interventional Oncology',
    code: 'IO-DIAG-020',
    rghsCode: '693 / 16',
    icd10: "E26.01 (Conn's Syndrome / Primary Aldosteronism)",
    indications: [
      'Differentiation between unilateral aldosterone-producing adenoma (APA, surgical candidate) and bilateral adrenal hyperplasia (BAH, medical therapy)',
      'Confirmed primary aldosteronism with elevated Aldosterone-to-Renin Ratio (ARR) and positive confirmatory suppression test',
      'Normal or equivocal CT/MRI findings of the adrenal glands in patients desiring laparoscopic adrenalectomy',
      'Patients > 35 years of age with unilateral adrenal microadenoma (to exclude co-existing contralateral hyperplasia)'
    ],
    preOpCriteria: [
      'Hypokalemia corrected (serum potassium >= 3.5-4.0 mEq/L) prior to procedure',
      'Spironolactone / Eplerenone withheld for >= 6 weeks; ACEi/ARBs/Beta-blockers adjusted to Alpha-blockers (Doxazosin) / Calcium channel blockers (Verapamil)',
      'Continuous IV infusion of Cosyntropin (synthetic ACTH, 50 ug/hr) initiated 30-45 minutes before sampling (continuous protocol) or bolus protocol',
      'Platelet count >= 50,000/uL, INR <= 1.4'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F / 6F Bilateral Femoral Introducer Sheaths', spec: '11 cm length with sideport valves', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheters', name: '5F Specialized AVS Catheters (Cobra C2, Mikaelsson, Sidewinder 2, Bentson)', spec: '65-100 cm length, shape-tailored for right and left adrenal vein anatomy', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: '2.0F - 2.4F Progreat Microcatheter', spec: '130 cm length with side-hole customization for right adrenal vein cannulation', standardStore: 'DDC-14 Central Store' },
      { category: 'ACTH Medication', name: 'Inj Cosyntropin / Synacthen (ACTH 1-24)', spec: '250 ug vial mixed in normal saline for continuous infusion', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Lab Sample Tubes', name: 'Heparinized / EDTA Blood Collection Tubes', spec: 'Pre-labeled tubes: Peripheral (IVC), Left Adrenal Vein, Right Adrenal Vein', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Bilateral or unilateral common femoral vein access; 5F sheaths placed under ultrasound guidance.',
      'Initiation of continuous Cosyntropin (ACTH) infusion at 50 ug/hour to achieve stable, maximal adrenal stimulation and minimize pulsatility.',
      'Left adrenal vein cannulation: 5F Cobra or Bentson catheter positioned into the left phrenic-adrenal trunk off the left renal vein; gentle hand contrast injection confirming adrenal capillary blush.',
      'Right adrenal vein cannulation: 5F Mikaelsson, Sidewinder, or microcatheter positioned directly into the short, small-caliber right adrenal vein arising from the posterolateral IVC at T11-T12 level; gentle retrograde contrast puff to confirm position without vein rupture.',
      'Simultaneous blood collection: aspirate 5 mL of blood from right adrenal vein, left adrenal vein, and infra-renal IVC (peripheral control) simultaneously over 2-3 minutes.',
      'Repeat confirmatory samples drawn at +10 and +15 minutes under continuous ACTH infusion.',
      'Immediate delivery of blood tubes on ice to biochemistry lab for Cortisol and Aldosterone measurement.',
      'Calculations: Selectivity Index (Adrenal Cortisol / Peripheral Cortisol >= 5:1 under ACTH) confirms successful cannulation; Lateralization Index (Aldosterone/Cortisol on dominant side divided by Aldosterone/Cortisol on non-dominant side >= 4:1 confirms unilateral adenoma; < 3:1 confirms bilateral hyperplasia).'
    ],
    complications: [
      'Right adrenal vein rupture / thrombosis from forceful contrast injection (0.5-2%)',
      'Adrenal hematoma causing retroperitoneal pain and transient hypocortisolism',
      'Groin venous hematoma or pseudoaneurysm',
      'Failure to cannulate the right adrenal vein (5-15% operator failure rate)'
    ],
    maayTariffInr: 34000,
    vendorContacts: [
      'Cook Medical India (+91 98291 99887)',
      'Terumo India Medical (+91 98291 55678)',
      'Merit Medical Systems (+91 98292 44321)'
    ]
  },
  {
    id: 'osteoid-osteoma-ct-guided-rfa',
    name: 'Osteoid osteoma CT-guided percutaneous radiofrequency ablation',
    category: 'Interventional Oncology',
    code: 'IO-MSK-021',
    rghsCode: '693 / 11',
    icd10: 'M89.8X9 (Other Specified Disorders of Bone) / D16.2 (Benign Neoplasm of Long Bones of Lower Limb)',
    indications: [
      'Classic clinical and radiological osteoid osteoma with nocturnal pain relieved promptly by NSAIDs',
      'Nidus diameter <= 15 mm surrounded by dense reactive cortical sclerosis on thin-section CT',
      'Failure, intolerance, or contraindication to prolonged medical management with NSAIDs',
      'Lesions located in long bones (femur, tibia), pelvis, or posterior spinal elements (>= 10 mm from neural structures)'
    ],
    preOpCriteria: [
      'Diagnostic thin-cut (<= 1 mm) CT demonstrating radiolucent nidus with central calcification',
      'Pre-procedure neurological examination documented',
      'Coagulation screen: Platelets >= 50,000/uL, INR <= 1.4',
      'General or regional spinal anesthesia required due to intense pain upon electrode heating'
    ],
    hardware: [
      { category: 'Bone Biopsy Drill / Cannula', name: 'Stryker / Bonopty Bone Coaxial Biopsy System', spec: '11-13G outer drill cannula with internal 14G trephine drill bit', standardStore: 'Central IR Store' },
      { category: 'RF Generator', name: 'Radionics / Covidien RF Ablation Generator', spec: '50-100W generator with continuous temperature and impedance monitoring', standardStore: 'Central IR Store' },
      { category: 'RF Electrode', name: 'Straight Rigid Osteo-RFA Electrode with Thermocouple', spec: '14-17G cannula with 5-10 mm exposed active tip and built-in sensor', standardStore: 'Central IR Store' },
      { category: 'CT Imaging', name: 'High-Resolution Multi-Slice CT Scanner', spec: 'Targeted bone reconstruction algorithm with sub-millimeter axial cuts', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Induction of general or spinal anesthesia with motor/sensory monitoring.',
      'High-resolution CT localization (0.625-1 mm slice thickness) of the sclerotic bone and central radiolucent nidus.',
      'Percutaneous puncture through skin and soft tissue down to the hyperostotic cortex along the planned shortest perpendicular trajectory.',
      'Penetration of the hard cortical bone using Bonopty coaxial drill system or hand-driven bone trephine into the exact epicenter of the nidus.',
      'Extraction of drill stylet and harvesting of a small core for histopathologic confirmation.',
      'Introduction of the RF ablation probe through the cannula sheath, advancing the active 5-10 mm tip directly into the nidus.',
      'Verification of probe tip location by repeat thin-slice CT confirming probe is >= 10 mm away from major adjacent motor nerves or articular cartilage.',
      'Heating cycle initiation: electrode tip temperature brought to 90°C and maintained continuously for 4 to 6 minutes.',
      'Delivery of sterile cold saline through cannula sheath during withdrawal to prevent cutaneous thermal injury.',
      'Post-procedure CT scan to exclude cortical fracture or surrounding hematoma; immediate recovery and weight-bearing as tolerated.'
    ],
    complications: [
      'Thermal injury to adjacent cutaneous nerve or spinal cord/nerve root',
      'Secondary pathologic bone fracture through drilled cortical tract',
      'Skin burn at the entry site',
      'Avascular necrosis or chondrolysis if performed within 5 mm of articular cartilage'
    ],
    maayTariffInr: 32000,
    vendorContacts: [
      'Stryker India Pvt Ltd (+91 98290 55443)',
      'Medtronic India Advanced Energy (+91 98292 66778)',
      'Boston Scientific India (+91 98290 88990)'
    ]
  },
  {
    id: 'cryo-cementoplasty-osseous-metastases',
    name: 'Painful osseous metastases percutaneous cryoablation combined with cementoplasty (cryo-cementoplasty)',
    category: 'Interventional Oncology',
    code: 'IO-MSK-022',
    rghsCode: '693 / 11',
    icd10: 'C79.51 (Secondary Malignant Neoplasm of Bone) / M84.50 (Pathologic Fracture in Neoplastic Disease)',
    indications: [
      'Severe intractable focal bone pain from osteolytic metastases (pelvis, acetabulum, sacrum, long bones) refractory to radiotherapy/opioids',
      'Impending pathologic fracture in weight-bearing bones requiring tumor necrosis combined with instant mechanical stabilization',
      'Metastatic renal cell carcinoma, breast cancer, lung cancer, or myeloma involving weight-bearing peri-acetabular zones (Harrington Class I-III)',
      'Pain palliation and restoration of ambulation'
    ],
    preOpCriteria: [
      'Contrast CT or MRI showing osteolytic bone destruction and proximity to sciatic nerve / major neural structures',
      'Platelet count >= 60,000/uL, INR <= 1.5',
      'No active systemic infection or osteomyelitis at entry site',
      'General anesthesia or deep conscious sedation'
    ],
    hardware: [
      { category: 'Cryoablation System', name: 'Visual-ICE Multi-Probe Gas Console', spec: 'High-pressure Argon/Helium gas freezing engine', standardStore: 'Central IR Store' },
      { category: 'Cryoprobes', name: '17G IceSphere / IceEdge Cryoprobes', spec: '1.47 mm diameter, 15 cm length, bone-penetrating trocar tip', standardStore: 'Central IR Store' },
      { category: 'Bone Access Cannula', name: '10-11G Osteo-Site Bone Access Needles', spec: '10-15 cm length bevel/trocar tip cannula for bone cement delivery', standardStore: 'Central IR Store' },
      { category: 'Bone Cement System', name: 'High-Viscosity Polymethylmethacrylate (PMMA) & Injector', spec: 'Radiopaque PMMA bone cement with barium sulfate and screw-press delivery syringe', standardStore: 'Central IR Store' },
      { category: 'Thermocouple', name: 'Real-Time Thermocouple Temperature Sensor Needle', spec: '20G sensor placed along sciatic nerve or spinal canal margin', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Patient placed in prone or lateral position under general anesthesia with neurological monitoring.',
      'Percutaneous insertion of 10G bone introducer needles into the osteolytic tumor under CT fluoroscopic guidance.',
      'Introduction of 2 to 4 17G cryoprobes through or alongside the bone cannulae into the osteolytic matrix.',
      'Placement of a thermocouple probe along the sciatic notch, spinal canal, or femoral vessels to monitor safety threshold (> 15°C).',
      'Cryoablation cycle: 10 minutes Argon freezing, 5 minutes passive thaw, 10 minutes Argon refreezing, producing complete cell membrane rupture and denervation of periosteal pain receptors.',
      'Thawing cycle completed; removal of cryoprobes.',
      'High-viscosity PMMA bone cement mixed in sterile field to doughy consistency.',
      'Slow, fluoroscopy-controlled injection of PMMA cement through the 10G cannulae into the newly created cryoablation cavity until structural void filling is achieved.',
      'Verification under live fluoroscopy to ensure no cement extravasation into the joint space, venous plexuses, or neural foramina.',
      'Holding cannula until cement polymerization is complete (exothermic hardening providing immediate rigidity).',
      'Post-procedure CT documenting complete tumor ablation, osteolytic cavity fill, and absence of extra-osseous leakage.'
    ],
    complications: [
      'PMMA cement leakage into sciatic notch or hip joint causing nerve compression or arthritis',
      'Venous cement embolism to pulmonary vasculature',
      'Sciatic or femoral nerve cryo-injury',
      'Secondary pathologic bone fracture before complete cement consolidation'
    ],
    maayTariffInr: 56000,
    vendorContacts: [
      'Stryker India (PMMA & Bone Access) (+91 98290 55443)',
      'Boston Scientific India (+91 98290 88990)',
      'DePuy Synthes / Johnson & Johnson (+91 98290 11998)'
    ]
  },
  {
    id: 'vertebroplasty-kyphoplasty-neoplastic-collapse',
    name: 'Percutaneous sacrolasty / vertebroplasty with balloon kyphoplasty for neoplastic vertebral collapse',
    category: 'Interventional Oncology',
    code: 'IO-MSK-023',
    rghsCode: '693 / 17',
    icd10: 'M84.58 (Pathologic Fracture in Neoplastic Disease, Other Specified Site) / C79.51',
    indications: [
      'Severe unremitting axial spine or sacral pain secondary to osteolytic vertebral metastases or multiple myeloma',
      'Neoplastic vertebral compression fracture with height loss and mechanical instability (Spine Instability Neoplastic Score - SINS 7-12)',
      'Neoplastic sacral insufficiency fractures or sacral chordoma/metastases causing inability to sit or stand (sacroplasty indication)',
      'Intact posterior vertebral body wall (absence of major retropulsion causing cord compression)'
    ],
    preOpCriteria: [
      'MRI spine confirming active bone marrow edema (STIR hyperintensity) corresponding to painful level',
      'CT spine confirming integrity of the posterior cortical wall (or minor defect manageable with high-viscosity cement)',
      'Absence of motor deficit indicating emergency surgical decompression',
      'Coagulation screen: Platelets >= 60,000/uL, INR <= 1.4'
    ],
    hardware: [
      { category: 'Access Cannula Kit', name: '10G / 11G Diamond-Tip Transpedicular Introducer Cannula', spec: '10-15 cm length with depth markings and ergonomic handle', standardStore: 'Central IR Store' },
      { category: 'Kyphoplasty Balloon', name: 'Inflatable Bone Tamp Kyphoplasty Balloon System', spec: '10-20 mm length balloon catheter rated up to 300-400 psi', standardStore: 'Central IR Store' },
      { category: 'Inflation Syringe', name: 'Digital Manometer High-Pressure Inflation Syringe', spec: 'Precise volume-pressure readout for balloon inflation with contrast', standardStore: 'Central IR Store' },
      { category: 'Bone Cement', name: 'High-Viscosity Radiopaque PMMA Kyphoplasty Cement', spec: 'Extended working time (18-20 minutes) with 30-40% barium sulfate', standardStore: 'Central IR Store' },
      { category: 'Sacral Needle', name: 'Long Sacroplasty Cannulae (10G, 15 cm)', spec: 'Curved/straight bevel needles for multi-axial sacral ala placement', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Patient placed prone on radiolucent fluoroscopy/CT table under local anesthesia and intravenous conscious sedation.',
      'Biplane fluoroscopic or CT visualization of the target pedicle (en-face "eye" of the pedicle).',
      'Transpedicular (thoracic/lumbar) or long-axis sacral ala puncture using 10G diamond-tip needle, maintaining lateral border trajectory until cortex breached.',
      'Advancement of cannula into the anterior third of the vertebral body on lateral projection, remaining strictly within the pedicle borders on AP projection.',
      'Drilling/tamping of working channel and introduction of the inflatable bone tamp balloon into the vertebral body.',
      'Gradual balloon inflation with 50% contrast under live fluoroscopy to create a low-pressure void and restore vertebral height (monitoring pressure up to 250-300 psi).',
      'Deflation and withdrawal of the balloon tamp leaving a well-formed cavity.',
      'Preparation of high-viscosity radiopaque PMMA cement to dough state; slow controlled injection into the cavity under continuous biplane fluoroscopic guidance.',
      'Immediate cessation of injection upon reaching the posterior fourth of the vertebral body or at the slightest sign of epidural or basivertebral venous egress.',
      'Rotation and withdrawal of the cannula with stylet re-inserted to prevent cement trailing into the pedicle.',
      'Bed rest for 2 hours post-procedure; early mobilization and assessment of visual analog pain score (VAS).'
    ],
    complications: [
      'Epidural or neuroforaminal cement leakage leading to spinal cord or nerve root compression',
      'Paravertebral venous cement intravasation and pulmonary cement embolism',
      'Pedicle fracture during transpedicular cortical penetration',
      'Infection / spondylodiscitis'
    ],
    maayTariffInr: 44000,
    vendorContacts: [
      'Medtronic Spine (Kyphon) (+91 98292 66778)',
      'Stryker Interventional Spine (+91 98290 55443)',
      'Merit Medical Systems (+91 98292 44321)'
    ]
  },
  {
    id: 'debiri-colorectal-liver-metastases',
    name: 'Transarterial Chemoembolization for Colorectal Liver Metastases using Irinotecan-loaded beads (DEBIRI)',
    category: 'Interventional Oncology',
    code: 'IO-TACE-024',
    rghsCode: '693 / 12',
    icd10: 'C78.7 (Secondary Malignant Neoplasm of Liver) / C18.9 (Colon Cancer)',
    indications: [
      'Unresectable, liver-dominant colorectal cancer liver metastases (mCRC)',
      'Chemo-refractory hepatic metastases progressing after first-line (FOLFOX) and second-line (FOLFIRI) systemic therapy',
      'Downstaging or conversion therapy to achieve surgical resectability in borderline oligometastatic hepatic disease',
      'Symptomatic control of large bulk colorectal liver metastases'
    ],
    preOpCriteria: [
      'Liver involvement < 50% of total liver volume',
      'Serum Total Bilirubin <= 2.0 mg/dL, Albumin >= 3.0 g/dL',
      'Absolute neutrophil count >= 1500/uL, Platelet count >= 75,000/uL',
      'Pre-medication with prophylactic IV antiemetics (Ondansetron/Aprepitant) and antispasmodics (intra-arterial lidocaine planned for visceral pain control)'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F Vascular Introducer Sheath', spec: '11 cm length, 0.035" valve', standardStore: 'Angio Suite Store' },
      { category: 'Selective Catheter', name: '5F Yashiro / Cobra C2 Catheter', spec: '65-100 cm length, hydrophilic coated', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: '2.0F - 2.4F Progreat or Merit Maestro Microcatheter', spec: '130 cm length, 0.021" lumen', standardStore: 'DDC-14 Central Store' },
      { category: 'Drug-Eluting Beads', name: 'DC Bead / LifePearl Microspheres', spec: '100-300 um calibrated beads (1-2 vials)', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Chemotherapy Agent', name: 'Inj Irinotecan Hydrochloride (Camptosar)', spec: '100 mg / 5 mL vials (100 mg loaded per 1 vial of beads over 90 minutes)', standardStore: 'Oncology Central Pharmacy' },
      { category: 'Local Anesthetic', name: 'Preservative-Free Lidocaine 1%', spec: 'Intra-arterial administration (50-100 mg slow bolus) prior to bead infusion', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Drug loading protocol: 100 mg Irinotecan dissolved in sterile water loaded into 1 vial of 100-300 um microspheres for 90-120 minutes with continuous rotation; excess fluid drawn off and beads mixed with non-ionic contrast in 1:1 ratio.',
      'Percutaneous common femoral artery puncture and 5F sheath placement.',
      'Diagnostic celiac and SMA angiogram to map hepatic arterial branches and exclude replaced arteries.',
      'Superselective microcatheterization of lobar or segmental tumor-feeding arteries.',
      'Slow intra-arterial infusion of 50-100 mg preservative-free lidocaine into the hepatic artery over 3 minutes to prevent severe visceral pain caused by acidic irinotecan release.',
      'Slow, pulsatile delivery of Irinotecan-loaded beads under roadmap fluoroscopy at a rate not exceeding 1 mL per minute.',
      'Delivery continued until near-stasis (contrast clearance takes > 5 cardiac beats). Maximum recommended dose: 100 mg irinotecan in single lobe, or 200 mg in bilobar disease over two sessions spaced 3 weeks apart.',
      'Post-embolization angiography confirming reduced tumor vascularity and preservation of proximal hepatic arterial branches.',
      'Access sheath removal and hemostasis with Angio-Seal or compression.'
    ],
    complications: [
      'Severe acute visceral abdominal pain during infusion (neuropathic irinotecan-induced arterial spasm)',
      'Post-embolization syndrome (fever, RUQ pain, nausea, leukocytosis)',
      'Delayed chemical ischemic cholecystitis',
      'Transient acute transaminitis and neutropenia'
    ],
    maayTariffInr: 58500,
    vendorContacts: [
      'Boston Scientific India (+91 98290 88990)',
      'Terumo India Medical (+91 98291 55678)',
      'Pfizer Oncology India (+91 98290 33456)'
    ]
  },
  {
    id: 'haic-port-catheter-implantation',
    name: 'Hepatic Arterial Infusion Chemotherapy (HAIC) port catheter surgical/radiological implantation (FOLFOX / Cisplatin)',
    category: 'Interventional Oncology',
    code: 'IO-DRUG-025',
    rghsCode: '693 / 13',
    icd10: 'C22.0 (Hepatocellular Carcinoma) / C78.7 (Liver Metastasis)',
    indications: [
      'Advanced hepatocellular carcinoma with portal vein tumor thrombosis (PVTT Vp3-Vp4) refractory to TACE/sorafenib',
      'High-burden bilobar colorectal cancer liver metastases receiving salvage hepatic arterial infusion (HAI) chemotherapy',
      'Intrahepatic cholangiocarcinoma with extensive liver infiltration unsuitable for curative surgery',
      'Continuous regional infusion chemotherapy delivering high local drug levels with minimal systemic spillover'
    ],
    preOpCriteria: [
      'Adequate performance status (ECOG 0-2)',
      'Serum Bilirubin < 2.5 mg/dL, Albumin >= 2.8 g/dL, INR <= 1.4',
      'Pre-procedure contrast CT angiography detailing celiac trunk, proper hepatic artery, and GDA anatomy',
      'Patient educated on subcutaneous port maintenance and external pump connection'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F / 6F Introducer Sheaths', spec: '11 cm length with radiopaque markers', standardStore: 'Angio Suite Store' },
      { category: 'Base Catheters', name: '5F Yashiro / Sim-1 / Cobra C2', spec: '65-100 cm length', standardStore: 'Central IR Store' },
      { category: 'Microcatheter System', name: '2.4F - 2.8F Side-Hole HAIC Microcatheter', spec: 'Hydrophilic tip with lateral port positioned in proper hepatic artery', standardStore: 'DDC-14 Central Store' },
      { category: 'Embolic Coils', name: '0.014" - 0.018" Detachable Platinum Coils', spec: '2 mm - 6 mm microcoils for complete GDA and right gastric artery skeletonization', standardStore: 'Central IR Store' },
      { category: 'Chemotherapy Port', name: 'Titanium Subcutaneous Implantable Arterial Port System (Celsite / Vital Port)', spec: 'Low-profile port with 5F-6F polyurethane/silicone arterial catheter and Huber needle set', standardStore: 'Central IR Store' },
      { category: 'Tissue Tunnelers', name: 'Subcutaneous Vascular Tunneler & Pocket Kit', spec: 'Sterile surgical tunneling rod with trocar tip', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Access right or left common femoral artery; perform celiac, SMA, and hepatic arteriography.',
      'Prophylactic embolization of gastrointestinal collaterals: Coil embolize the gastroduodenal artery (GDA) and right gastric artery to prevent continuous chemotherapy perfusion into the stomach and duodenum (preventing lethal gastrointestinal ulceration).',
      'Method A (Catheter-in-GDA technique): Catheter introduced through femoral/subclavian approach, its tip anchored in the occluded GDA with a side-hole positioned in the proper hepatic artery; or Method B: Direct percutaneous placement of catheter tip in common/proper hepatic artery.',
      'Creation of a subcutaneous pocket in the lower anterior abdominal wall or right groin under local lidocaine infiltration.',
      'Subcutaneous tunneling of the arterial port catheter from the arterial entry site to the subcutaneous pocket using the surgical tunneler.',
      'Connection of the trimmed catheter to the titanium port chamber; testing port with heparinized saline and non-ionic contrast to verify brisk flow and leak-free connection.',
      'Post-implantation technetium-99m MAA or DSA through the port chamber to confirm 100% hepatic distribution without gastrointestinal perfusion.',
      'Suture closure of pocket and incision in two layers; access port with non-coring Huber needle for initiation of HAIC regimen (e.g., FOLFOX or Cisplatin/5-FU).'
    ],
    complications: [
      'Gastric or duodenal ulceration from undetected extrahepatic arterial branches',
      'Hepatic arterial thrombosis or dissection around the indwelling catheter tip',
      'Port-pocket hematoma or infection requiring device explantation',
      'Catheter dislocation or occlusion by fibrin sheath'
    ],
    maayTariffInr: 65000,
    vendorContacts: [
      'B. Braun Medical India (Celsite Port) (+91 98290 44556)',
      'Cook Medical India (+91 98291 99887)',
      'Smiths Medical / ICU Medical (+91 98293 22110)'
    ]
  },
  {
    id: 'tace-neuroendocrine-liver-metastases',
    name: 'Transarterial chemoembolization (TACE) for symptomatic / progressive hepatic neuroendocrine tumor (NET) metastases',
    category: 'Interventional Oncology',
    code: 'IO-TACE-026',
    rghsCode: '693 / 12',
    icd10: 'C7B.02 (Secondary Neuroendocrine Tumors of Liver)',
    indications: [
      'Progressive or symptomatic neuroendocrine tumor (NET) liver metastases refractory to somatostatin analogues (Octreotide/Lanreotide)',
      'Carcinoid syndrome (flushing, intractable diarrhea, bronchospasm) uncontrolled by medical therapy',
      'Bulky hypervascular hepatic metastases from pancreatic, gastrointestinal, or lung neuroendocrine neoplasms',
      'Debulking prior to peptide receptor radionuclide therapy (PRRT with Lu-177 DOTATATE)'
    ],
    preOpCriteria: [
      'Somatostatin analogue prophylaxis: Octreotide continuous infusion (50-100 ug/hr) initiated 2 hours prior to prevent life-threatening carcinoid crisis',
      'Child-Pugh score <= 7, Total Bilirubin < 2.0 mg/dL',
      'Platelets >= 60,000/uL, INR <= 1.4',
      'Echocardiogram ruling out severe carcinoid heart disease (tricuspid/pulmonic valve regurgitation)'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F Vascular Introducer Sheath Kit', spec: '11 cm length, 0.035" valve', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Yashiro / Cobra C2 Catheter', spec: '65-100 cm length', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: '2.0F - 2.7F Progreat Microcatheter System', spec: '130 cm length with 0.014" Glidewire GT', standardStore: 'DDC-14 Central Store' },
      { category: 'Chemoembolic Mixture', name: 'Lipiodol Ultra-Fluid & Doxorubicin / Streptozocin', spec: '10 mL Lipiodol + 30-50 mg Doxorubicin or Streptozocin emulsion', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Particulate Agent', name: 'Gelatin Sponge Slurry / Calibrated Microspheres', spec: '100-300 um or 300-500 um particles', standardStore: 'Central IR Store' },
      { category: 'Emergency Drug', name: 'Inj Octreotide (Sandostatin)', spec: '500 ug in 50 mL normal saline IV infusion pump ready in suite', standardStore: 'SMS Pharmacy DDC-14' }
    ],
    techniqueSteps: [
      'Initiation of continuous IV Octreotide infusion (100 ug/hr) to block massive neuroendocrine hormone release triggered by tumor ischemia.',
      'Femoral or radial puncture and 5F sheath placement under local anesthesia.',
      'Celiac axis and SMA arteriography: identifying extreme hypervascular tumor blushes characteristic of NET liver metastases.',
      'Selective microcatheter navigation into right or left hepatic artery or segmental feeders (lobar staged approach preferred for bilobar disease to reduce liver failure risk).',
      'Pulsatile slow injection of Lipiodol-Doxorubicin (or Streptozocin) emulsion under continuous subtraction fluoroscopy.',
      'Subsequent delivery of calibrated microspheres or gelfoam slurry until dense tumor saturation and marked reduction of arterial inflow.',
      'Post-embolization control DSA confirming near-total devascularization of the target metastatic deposits.',
      'Hemostasis at arterial puncture site; transfer to ICU for continuous blood pressure and carcinoid crisis monitoring for 24 hours.'
    ],
    complications: [
      'Carcinoid crisis (profound hypotension or hypertension, bronchospasm, flushing, arrhythmias)',
      'Severe post-embolization syndrome and hepatic transaminitis',
      'Hepatic insufficiency / ischemic necrosis in high-burden disease (> 50% liver replacement)',
      'Biliary stricture or abscess'
    ],
    maayTariffInr: 49500,
    vendorContacts: [
      'Novartis Oncology India (Sandostatin) (+91 98290 88776)',
      'Guerbet India Pvt Ltd (+91 98290 12345)',
      'Terumo India Medical (+91 98291 55678)'
    ]
  },
  {
    id: 'tae-bland-embolization-net-metastases',
    name: 'Transarterial embolization (TAE / bland embolization) with calibrated microspheres for neuroendocrine liver metastases',
    category: 'Interventional Oncology',
    code: 'IO-EMB-027',
    rghsCode: '693 / 12',
    icd10: 'C7B.02 (Secondary Neuroendocrine Tumors of Liver)',
    indications: [
      'Hypervascular neuroendocrine tumor liver metastases in patients who are poor candidates for chemotherapy toxicity (pre-existing renal or cardiac impairment)',
      'Equally efficacious ischemic alternative to chemoembolization for NETs (ischemia being the primary driver of tumor necrosis in NET metastases)',
      'Refractory carcinoid syndrome with bilobar disease treated in staged sequential lobar sessions',
      'Downstaging hypervascular NET lesions prior to surgical enucleation or resection'
    ],
    preOpCriteria: [
      'Child-Pugh Class A or B, Total Bilirubin <= 2.0 mg/dL',
      'Patent main portal vein verified by contrast CT/Doppler',
      'Octreotide infusion initiated (100 ug/hr) to prevent intra-procedural carcinoid crisis',
      'Platelets >= 50,000/uL, INR <= 1.5'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F Vascular Introducer Sheath', spec: '11 cm length, 0.035" valve', standardStore: 'Angio Suite Store' },
      { category: 'Diagnostic Catheter', name: '5F Yashiro / Cobra Catheter', spec: '65-100 cm length', standardStore: 'Central IR Store' },
      { category: 'Microcatheter System', name: '2.0F - 2.4F Flexible Microcatheter', spec: '130 cm length with 0.014" steerable wire', standardStore: 'DDC-14 Central Store' },
      { category: 'Calibrated Microspheres', name: 'Embozene / Bead Block / Hydropearl Bland Microspheres', spec: 'Small-to-medium size calibrated particles: 100 um followed by 250-400 um vials', standardStore: 'Central IR Store' },
      { category: 'Contrast Media', name: 'Non-ionic Contrast (Iohexol 350)', spec: '100 mL bottle mixed 1:1 with microspheres', standardStore: 'Radiology Pharmacy Store' }
    ],
    techniqueSteps: [
      'Pre-procedure somatostatin receptor blockade with IV octreotide infusion running throughout.',
      'Percutaneous arterial access via right common femoral or right radial artery.',
      'Detailed mapping angiography of the hepatic artery branches to determine tumor vascular territory and identify cystic or right gastric takeoffs.',
      'Superselective microcatheterization of the lobar or segmental branches supplying the neuroendocrine metastases.',
      'Initial administration of 100 um calibrated bland microspheres to penetrate deeply into the fine capillary vascular bed of the hypervascular lesions.',
      'Stepwise up-sizing to 250-400 um microspheres to occlude intermediate feeding arterioles.',
      'Infusion continued under slow, pulsed fluoroscopy until the column of contrast clears in > 5 cardiac cycles (complete subjective angiographic stasis).',
      'Post-embolization DSA demonstrating complete disappearance of tumor blush with preservation of primary lobar branches.',
      'Femoral sheath removal and deployment of Angio-Seal vascular closure device.'
    ],
    complications: [
      'Carcinoid storm / acute vasomotor collapse',
      'Post-embolization syndrome (fever, pain, nausea)',
      'Transient acute hepatic transaminitis (AST/ALT peaking at 24-48 hours)',
      'Gallbladder ischemia / cholecystitis if cystic branch inadvertently embolized'
    ],
    maayTariffInr: 45500,
    vendorContacts: [
      'Varian Medical Systems / Boston Scientific (+91 98290 88990)',
      'Terumo India Medical (+91 98291 55678)',
      'Merit Medical Systems (+91 98292 44321)'
    ]
  },
  {
    id: 'sarcoma-palliative-tace-cryoablation',
    name: 'Soft tissue sarcoma palliative transarterial chemoembolization and cryoablation',
    category: 'Interventional Oncology',
    code: 'IO-COMB-028',
    rghsCode: '693 / 11',
    icd10: 'C49.9 (Malignant Neoplasm of Connective and Soft Tissue, Unspecified)',
    indications: [
      'Locally advanced, unresectable or recurrent soft tissue sarcoma (extremity, pelvis, retroperitoneum) causing intractable pain, fungation, or hemorrhage',
      'Patients having exhausted surgical resection and external beam radiation therapy (exceeded tissue tolerance doses)',
      'Synergistic hybrid therapy: transarterial embolization to control acute hemorrhage and induce ischemia, followed by percutaneous cryoablation for deep tumor debulking',
      'Palliation of foul-smelling, bleeding ulcerated fungating sarcoma masses'
    ],
    preOpCriteria: [
      'Multidisciplinary tumor board review confirming non-resectability and radiation limits reached',
      'Platelet count >= 60,000/uL, INR <= 1.5',
      'Contrast-enhanced CT or MRI mapping local neurovascular bundles and major feeding arteries',
      'Adequate cardiopulmonary reserve for combined embolization-cryoablation session under general anesthesia'
    ],
    hardware: [
      { category: 'Vascular Access', name: '5F Vascular Introducer Sheath', spec: '11 cm length', standardStore: 'Angio Suite Store' },
      { category: 'Selective Catheter', name: '5F Cobra / Roberts Uterine / Headhunter Catheter', spec: '65-100 cm length', standardStore: 'Central IR Store' },
      { category: 'Microcatheter', name: '2.0F - 2.4F High-Flow Microcatheter', spec: '130 cm length with 0.014" guidewire', standardStore: 'DDC-14 Central Store' },
      { category: 'Embolic Agent', name: 'Calibrated Microspheres & Doxorubicin', spec: '300-500 um DC Beads loaded with 50 mg Doxorubicin', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Cryoablation System', name: 'Visual-ICE Multi-Probe Cryosystem', spec: 'High-pressure Argon/Helium gas console with 4-6 probe ports', standardStore: 'Central IR Store' },
      { category: 'Cryoprobes', name: '17G IceSphere / IceRod Cryoprobes', spec: '1.47 mm diameter, 15 cm length trocar tip needles', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Phase 1 (Endovascular Chemoembolization): Common femoral artery access; catheterization of main arterial feeders supplying the sarcoma (e.g., deep femoral, internal iliac branches).',
      'Superselective microcatheter delivery of Doxorubicin-loaded beads (300-500 um) to achieve complete microvascular devascularization, tumor ischemia, and cessation of active bleeding.',
      'Phase 2 (Percutaneous Cryoablation): Immediate transfer to CT/ultrasound suite (or hybrid OR).',
      'Under CT guidance, percutaneous insertion of 3 to 6 17G cryoprobes distributed evenly across the devascularized sarcoma mass (spaced 1.5 to 2.0 cm apart).',
      'Thermocouple sensors placed along adjacent motor nerve trunks (e.g., sciatic or femoral nerve) to prevent cryo-neuropraxia.',
      'Execution of two 10-minute freeze cycles with Argon gas separated by a 5-minute thaw cycle.',
      'Real-time CT monitoring verifying that the low-density ice-ball encapsulates the deep tumor core while maintaining a 10 mm buffer from critical neurovascular structures.',
      'Probes thawed and withdrawn under track coagulation; sterile pressure dressing applied over fungating wound site.'
    ],
    complications: [
      'Extensive tumor lysis syndrome / myoglobinuria (prevented by vigorous hydration and urine alkalinization)',
      'Skin necrosis or ulceration overlying superficial ablation zone',
      'Peripheral motor neuropathy / foot drop from cold injury to adjacent nerves',
      'Post-procedure wound infection or sepsis'
    ],
    maayTariffInr: 62000,
    vendorContacts: [
      'Boston Scientific India (+91 98290 88990)',
      'Terumo India Medical (+91 98291 55678)',
      'Healthline Systems Jaipur (+91 98290 22331)'
    ]
  },
  {
    id: 'thyroid-mwa-benign-nodules',
    name: 'Percutaneous microwave ablation for benign symptomatic thyroid nodules',
    category: 'Interventional Oncology',
    code: 'IO-ABL-029',
    rghsCode: '693 / 11',
    icd10: 'E04.1 (Nontoxic Single Thyroid Nodule)',
    indications: [
      'Benign symptomatic thyroid nodules (Bethesda Category II confirmed on two separate fine needle aspirations or core biopsies)',
      'Cosmetic deformity (visible anterior neck bulge) or compressive symptoms (dysphagia, foreign body sensation, globus, neck tightness)',
      'Patients refusing surgical thyroidectomy or high-risk candidates for general anesthesia',
      'Autonomously functioning toxic thyroid nodules in patients refusing radioactive iodine'
    ],
    preOpCriteria: [
      'Two separate benign cytologies (Bethesda II) within 12 months (or one benign cytology with highly reassuring ACR-TIRADS 1-2 features)',
      'Normal thyroid function tests (Free T3, Free T4, TSH) and serum calcitonin within normal limits',
      'Direct fiberoptic laryngoscopy confirming bilateral vocal cord mobility prior to procedure',
      'Platelet count >= 80,000/uL, INR <= 1.3'
    ],
    hardware: [
      { category: 'Microwave Generator', name: 'ECO / Emprint Dedicated Thyroid MWA Generator', spec: '2450 MHz, low-power mode (15-35W) with precise power titration', standardStore: 'Central IR Store' },
      { category: 'MWA Thyroid Antenna', name: '16-18G Internally Cooled Thyroid MWA Needle', spec: '10 cm shaft length, short active tip (3.5 mm - 5 mm) for delicate neck anatomy', standardStore: 'Central IR Store' },
      { category: 'Ultrasound System', name: 'High-Frequency Linear Ultrasound System (10-15 MHz)', spec: 'Superb microvascular imaging (SMI) and elastography capabilities', standardStore: 'Central IR Store' },
      { category: 'Hydrodissection Kit', name: 'Hydrodissection Syringe & 23G Needle', spec: '20 mL syringe filled with 1% Lidocaine and cold 5% Dextrose', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Patient positioned supine with neck hyperextended by an interscapular shoulder roll; continuous ultrasound mapping of the nodule and the "danger triangle" (recurrent laryngeal nerve zone between tracheoesophageal groove and thyroid capsule).',
      'Local infiltration of 1-2% Lidocaine into subcutaneous tissue and thyroid capsule.',
      'Hydrodissection technique: injection of 15-30 mL of chilled 5% Dextrose solution into the peri-thyroidal space under real-time US to separate the thyroid nodule from the carotid sheath, trachea, and recurrent laryngeal nerve.',
      'Trans-isthmic approach: percutaneous insertion of the 16G/18G microwave antenna through the midline isthmus into the target nodule (this approach stabilizes the needle within normal thyroid tissue and prevents lateral heat leak).',
      'Moving-shot technique: activate microwave power at 15-30W. The nodule is divided conceptually into multiple small units; the antenna tip is moved backward and forward unit-by-unit.',
      'Transient hyperechoic vapor bubble formation indicates tissue coagulation; move immediately when bubble cloud appears to prevent carbonization.',
      'Constant vocal monitoring: ask the patient to speak continuously ("say one, two, three") to detect immediate changes in voice pitch indicating thermal irritation of the recurrent laryngeal nerve.',
      'Immediate power shut-off and cold saline flush if voice alteration occurs.',
      'Track ablation upon completion; ice pack applied to anterior neck for 30 minutes with light pressure dressing.'
    ],
    complications: [
      'Transient recurrent laryngeal nerve paresis / hoarseness (1-2%, typically resolving in 1-3 months)',
      'Subcapsular or cervical hematoma requiring observation',
      'Cutaneous skin burn at puncture site',
      'Transient Horner syndrome or vasovagal syncope'
    ],
    maayTariffInr: 28000,
    vendorContacts: [
      'ECO Microwave Electronic Institute (+91 98290 99887)',
      'Medtronic India (Emprint) (+91 98292 66778)',
      'Wipro GE Healthcare (+91 98291 33445)'
    ]
  },
  {
    id: 'pei-cystic-thyroid-lymph-nodes',
    name: 'Percutaneous ethanol ablation (PEI) for cystic thyroid nodules and recurrent metastatic cervical lymph nodes',
    category: 'Interventional Oncology',
    code: 'IO-ABL-030',
    rghsCode: '693 / 11',
    icd10: 'E04.1 (Thyroid Nodule) / C77.0 (Secondary Malignant Neoplasm of Head, Face and Neck)',
    indications: [
      'Recurrent predominantly cystic or purely cystic thyroid nodules failing simple aspiration',
      'Locally recurrent metastatic papillary thyroid carcinoma (PTC) in cervical lymph nodes in patients who have undergone multiple prior neck dissections',
      'Patients with cervical nodal recurrences in whom re-operative neck surgery carries high risk of permanent hypoparathyroidism or nerve injury',
      'Refusal of radioactive iodine (RAI) or iodine-refractory recurrent cervical lymphadenopathy'
    ],
    preOpCriteria: [
      'Diagnostic aspiration confirming benign cyst fluid (thyroid cyst) or positive thyroglobulin (Tg) in lymph node FNA needle washout',
      'High-resolution ultrasound verifying clear needle trajectory separated from carotid artery and internal jugular vein',
      'Platelet count >= 50,000/uL, INR <= 1.4',
      'Pre-procedure laryngoscopy confirming baseline vocal cord function'
    ],
    hardware: [
      { category: 'Needle System', name: '21G - 22G Chiba / Echogenic Biopsy Needles', spec: '7-10 cm length with high echogenicity tip', standardStore: 'Central IR Store' },
      { category: 'Sclerosant', name: 'Sterile 99% Dehydrated Absolute Ethanol', spec: '5 mL - 10 mL ampoules for intra-nodal sclerosis', standardStore: 'SMS Pharmacy DDC-14' },
      { category: 'Drainage Syringe', name: 'Luer-Lock Vacuum Aspiration Syringes (20 mL)', spec: 'Three-way stopcock connected to collection tubing', standardStore: 'Central IR Store' },
      { category: 'Ultrasound System', name: 'High-Frequency Linear Ultrasound Probe (12-18 MHz)', spec: 'Color Doppler capability for vascular exclusion', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Patient in supine position with extended neck; sterile skin preparation under local lidocaine anesthesia.',
      'Real-time US-guided puncture using a 20G/21G needle into the dependent portion of the cystic thyroid nodule or necrotic lymph node.',
      'Complete evacuation of cystic contents: aspirate viscous colloid or cystic fluid entirely until the nodule walls collapse around the needle tip.',
      'Without moving the needle tip, connect a syringe containing sterile 99% ethanol.',
      'For cystic thyroid nodules: slowly instill 50-80% of the aspirated fluid volume in ethanol (typically 2-6 mL); retain ethanol for 5-10 minutes under US observation, then re-aspirate completely to minimize post-procedural pain (retention vs aspiration method).',
      'For metastatic PTC lymph nodes: slowly inject 0.2 to 1.0 mL of absolute ethanol directly into the node substance until the entire nodal parenchyma turns intensely hyperechoic on ultrasound; no re-aspiration performed.',
      'Continuous color Doppler monitoring to ensure no ethanol extravasates into the internal jugular vein or peri-nodal soft tissues.',
      'Careful needle withdrawal with suction release to avoid ethanol tract seeding.',
      'Direct neck compression for 10 minutes and application of an ice pack.'
    ],
    complications: [
      'Severe transient burning cervical pain radiating to ear or jaw during injection',
      'Ethanol extravasation causing soft tissue fibrosis or recurrent laryngeal nerve chemical injury',
      'Intra-cystic hemorrhage',
      'Transient vocal cord hoarseness'
    ],
    maayTariffInr: 18500,
    vendorContacts: [
      'SMS Hospital Central Pharmacy DDC-14 (+91 141 2560291)',
      'Cook Medical India (+91 98291 99887)',
      'Merit Medical Systems (+91 98292 44321)'
    ]
  },
  {
    id: 'pelvic-rfa-hydrodissection-air',
    name: 'CT-guided percutaneous radiofrequency ablation of pelvic recurrences with hydrodissection / air dissection',
    category: 'Interventional Oncology',
    code: 'IO-ABL-031',
    rghsCode: '693 / 11',
    icd10: 'C79.89 (Secondary Malignant Neoplasm of Other Specified Sites) / C18.7 (Sigmoid Malignancy)',
    indications: [
      'Isolated pelvic sidewall, presacral, or retrovesical recurrences from colorectal, gynecologic (ovarian/cervical/endometrial), or bladder carcinomas',
      'Patients ineligible for pelvic exenteration or with prior definitive external beam radiation therapy limits reached',
      'Pelvic tumors abutting sigmoid colon, rectum, small bowel loops, ureters, or lumbosacral plexus requiring protective barrier creation',
      'Palliation of deep pelvic pain and sciatic/obturator neuralgia'
    ],
    preOpCriteria: [
      'Contrast-enhanced pelvic CT/MRI within 3 weeks detailing proximity to bowel, ureters, and iliac vessels',
      'Platelets >= 60,000/uL, INR <= 1.4',
      'No active pelvic abscess or peritonitis',
      'General anesthesia with motor neuro-monitoring (EMG) or deep conscious sedation'
    ],
    hardware: [
      { category: 'RF Generator', name: 'Covidien / Boston Scientific 200W RF System', spec: 'Impedance-controlled RF generator', standardStore: 'Central IR Store' },
      { category: 'RF Electrode', name: 'Internally Cooled Single or Cluster RF Electrodes', spec: '17G, 15-20 cm shaft length with 2-3 cm active exposed tip', standardStore: 'Central IR Store' },
      { category: 'Hydrodissection Needles', name: '18G-20G Chiba / Spinal Introducer Needles', spec: '15-20 cm length for deep pelvic space navigation', standardStore: 'Central IR Store' },
      { category: 'Dissection Fluids', name: 'Chilled 5% Dextrose in Water (D5W) & Room Air / CO2', spec: 'Non-ionic fluid (prevents electrical conduction) and 50 mL sterile syringes', standardStore: 'Central IR Store' },
      { category: 'Double-J Stent Set', name: 'Ureteral Stenting / Retrograde Cooling Catheter', spec: '6F open-ended ureteral catheter if lesion is adjacent to ureter', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Patient placed prone or lithotomy on CT gantry depending on transgluteal, anterior, or transperineal planned access path.',
      'Active bowel protection (Hydrodissection / Pneumodissection): Percutaneous placement of an 18G needle between the pelvic tumor and the adjacent rectosigmoid colon under CT fluoroscopy. Infusion of 200-500 mL of 5% Dextrose (D5W) or room air/CO2 to create a continuous > 15 mm thermal insulating barrier.',
      'If ureter is adjacent: continuous cold saline irrigation infused via retrograde ureteral stent.',
      'Percutaneous transgluteal (through greater sciatic foramen, medial to sacrosciatic ligament) or transabdominal introduction of the 17G RF electrode into the epicenter of the pelvic mass.',
      'Verification by thin-slice CT that the active tip is >= 15 mm away from the displaced bowel and lumbosacral nerve roots.',
      'Activation of RF energy for 8 to 12 minutes with chilled internal water circulation, maintaining tip temperature at 90-100°C.',
      'Continuous CT monitoring: repeat small boluses of D5W/air as needed to compensate for pelvic fluid resorption.',
      'Electrode track cauterization upon withdrawal to prevent track hemorrhage or tumor seeding.',
      'Post-procedure contrast CT confirming complete devascularization of the pelvic recurrence and intact bowel wall architecture.'
    ],
    complications: [
      'Thermal bowel perforation / pelvic peritonitis or enterocutaneous fistula',
      'Sciatic or obturator nerve injury resulting in leg weakness or numbness',
      'Pelvic hematoma from internal iliac branch laceration',
      'Ureteral stricture or urinary leak'
    ],
    maayTariffInr: 39500,
    vendorContacts: [
      'Boston Scientific India (+91 98290 88990)',
      'Medtronic India (+91 98292 66778)',
      'Cook Medical India (+91 98291 99887)'
    ]
  },
  {
    id: 'thermal-ablation-retroperitoneal-lymphadenopathy',
    name: 'Palliative thermal ablation of painful retroperitoneal lymphadenopathy',
    category: 'Interventional Oncology',
    code: 'IO-ABL-032',
    rghsCode: '693 / 11',
    icd10: 'C77.2 (Secondary Malignant Neoplasm of Retroperitoneal and Intra-abdominal Lymph Nodes)',
    indications: [
      'Enlarged, painful retroperitoneal lymph node metastases (para-aortic, interaortocaval, paracaval) causing somatic back pain or autonomic plexopathy',
      'Recurrent germ cell tumors, lymphoma, melanoma, or renal/cervical cancer metastases unresponsive to systemic therapy or re-irradiation',
      'Bulky retroperitoneal nodal masses causing impending compression of the inferior vena cava, renal vessels, or duodenal loop',
      'Palliative pain relief reducing high-dose oral opioid dependence'
    ],
    preOpCriteria: [
      'Contrast CT or PET-CT demonstrating tumor size <= 5 cm and delineating proximity to aorta, IVC, renal vessels, and duodenum',
      'Platelet count >= 70,000/uL, INR <= 1.4',
      'Normal mesenteric and bowel viability; no bowel obstruction',
      'General anesthesia or deep sedation with continuous arterial line blood pressure monitoring'
    ],
    hardware: [
      { category: 'Ablation Modality', name: 'Microwave / Radiofrequency Generator Unit', spec: 'High-frequency water-cooled generator with fast-switching power control', standardStore: 'Central IR Store' },
      { category: 'Ablation Antenna / Probe', name: '14-17G Cooled Percutaneous Ablation Probe', spec: '15-20 cm shaft length with short active tip (1.5-2.0 cm)', standardStore: 'Central IR Store' },
      { category: 'Dissection Needles', name: '18G/20G Chiba / Spinal Introducers', spec: '20 cm length for anterior or trans-hepatic/trans-mesenteric hydrodissection', standardStore: 'Central IR Store' },
      { category: 'Dissection Medium', name: '5% Dextrose with 2% Dilute Contrast Medium', spec: 'Injectable fluid buffer allowing radiopaque visualization on CT', standardStore: 'Central IR Store' },
      { category: 'CT Imaging Guidance', name: 'CT Fluoroscopy / Multi-Detector Helical CT', spec: 'Sub-second reconstruction capability with stereotactic targeting', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Patient placed in supine, prone, or lateral position depending on node location (para-aortic vs interaortocaval).',
      'Continuous invasive hemodynamic monitoring established.',
      'Mandatory hydrodissection: advance 20G Chiba needle under CT guidance between the nodal mass and the duodenum/pancreas/aorta; instill 100-300 mL 5% Dextrose to push sensitive duodenum and small bowel loops > 15 mm away.',
      'Percutaneous puncture under CT fluoroscopy, introducing the cooled ablation probe into the long axis of the retroperitoneal node.',
      'Careful planning: probe must be kept at least 5 mm away from the aortic and IVC adventitia (blood flow provides convective heat sink, but mechanical wall burn must be avoided).',
      'Apply thermal energy: Microwave at 45-60W for 3-5 minutes, or RFA to 90°C for 6-8 minutes.',
      'CT monitoring: confirm the low-attenuation ablation zone encompasses the lymph node center and capsule without spreading into adjacent nerve roots or bowel.',
      'Track coagulation performed at 25W during slow probe withdrawal.',
      'Immediate contrast-enhanced CT scanning to rule out retroperitoneal hemorrhage or bowel wall compromise.'
    ],
    complications: [
      'Duodenal perforation / retroperitoneal abscess (catastrophic complication prevented by strict hydrodissection)',
      'Pseudoaneurysm or injury to lumbar arteries, renal vessels, or aorta',
      'Lumbar plexus neuropathy or radicular pain',
      'Retroperitoneal hematoma'
    ],
    maayTariffInr: 41500,
    vendorContacts: [
      'Medtronic India (+91 98292 66778)',
      'Boston Scientific India (+91 98290 88990)',
      'Wipro GE Healthcare (+91 98291 33445)'
    ]
  },
  {
    id: 'chest-wall-desmoid-mwa',
    name: 'Percutaneous microwave ablation of chest wall / desmoid fibromatosis tumor',
    category: 'Interventional Oncology',
    code: 'IO-ABL-033',
    rghsCode: '693 / 11',
    icd10: 'D48.1 (Neoplasm of Uncertain Behavior of Connective and Other Soft Tissue / Desmoid Fibromatosis)',
    indications: [
      'Extra-abdominal desmoid fibromatosis (aggressive fibromatosis) of the chest wall, back, or shoulder girdle with progressive growth or pain',
      'Desmoid tumors failing medical therapy (sulindac, tamoxifen, sorafenib, or low-dose chemotherapy)',
      'Patients refusing wide local surgical resection due to extensive chest wall reconstruction / cosmetic or functional morbidity',
      'Locally recurrent desmoid tumor along surgical scar'
    ],
    preOpCriteria: [
      'Core needle biopsy confirming beta-catenin positive desmoid fibromatosis (excluding soft tissue sarcoma)',
      'Pre-procedure MRI thorax/chest wall demonstrating exact tumor extent, muscle infiltration, and intercostal nerve proximity',
      'Platelet count >= 60,000/uL, INR <= 1.4',
      'General anesthesia with muscle relaxation or monitored anesthesia care'
    ],
    hardware: [
      { category: 'Microwave Generator', name: 'Emprint / NeuWave 2450 MHz MWA Console', spec: 'Water-cooled microwave platform with precise spherical heating algorithm', standardStore: 'Central IR Store' },
      { category: 'MWA Antenna', name: '14G - 16G Internally Cooled Microwave Antenna', spec: '10-15 cm length, ceramic tip, temperature-resistant shaft', standardStore: 'Central IR Store' },
      { category: 'Ultrasound / CT Guidance', name: 'High-Frequency Linear US & CT Fluoroscopy', spec: 'Combined modality guidance for superficial muscle and deep ribs', standardStore: 'Central IR Store' },
      { category: 'Protective Barrier System', name: 'Saline / Dextrose Hydrodissection Syringe', spec: 'Subcutaneous and pleural hydrodissection set (20G needle)', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Position patient (prone or oblique) with skin mark over chest wall desmoid mass.',
      'Perform ultrasound and CT imaging to define margins with pectoral/intercostal musculature and parietal pleura.',
      'Subcutaneous and subpleural hydrodissection: inject 50-100 mL of saline or 5% Dextrose between the desmoid tumor and overlying skin/subcutaneous fat to prevent full-thickness skin burn, and between tumor and pleura to protect lung parenchyma.',
      'Percutaneous insertion of 1 or 2 microwave antennas under real-time ultrasound and CT guidance along the longest tumor dimension.',
      'Microwave ablation activation at 45-65W for 4 to 8 minutes depending on lesion volume.',
      'Real-time US visualization of expanding hyperechoic ablation cloud, ensuring it covers the infiltrative margins of the fibromatosis.',
      'Track ablation at 30W as the antenna is pulled through chest wall musculature.',
      'Application of cold packs to the skin entry site for 1 hour post-ablation.',
      'Follow-up contrast MRI at 6 weeks: expected involution, lack of contrast enhancement, and pain relief.'
    ],
    complications: [
      'Full-thickness skin burn / cutaneous blister formation',
      'Pneumothorax if intercostal pleura breached',
      'Intercostal nerve neuralgia / chest wall numbness',
      'Secondary wound infection or sterile fluid collection in ablated cavity'
    ],
    maayTariffInr: 36500,
    vendorContacts: [
      'Medtronic India (Emprint) (+91 98292 66778)',
      'Johnson & Johnson NeuWave (+91 98290 33221)',
      'Stryker India (+91 98290 55443)'
    ]
  },
  {
    id: 'fiducial-marker-placement-sbrt',
    name: 'Percutaneous fiducial marker placement (Gold seeds) for stereotactic body radiation therapy (SBRT)',
    category: 'Interventional Oncology',
    code: 'IO-NAV-034',
    rghsCode: '693 / 18',
    icd10: 'Z51.0 (Encounter for Antineoplastic Radiation Therapy) / C22.0 / C34.90',
    indications: [
      'Tumor tracking and respiratory motion management for Stereotactic Body Radiation Therapy (SBRT / CyberKnife) in liver, lung, pancreas, or prostate tumors',
      'Primary hepatocellular carcinoma or liver metastases planned for high-dose hypo-fractionated stereotactic radiation',
      'Centrally located or non-calcified soft tissue tumors lacking clear anatomical landmarks on cone-beam radiation simulation',
      'Placement of 3-5 non-collinear radio-opaque markers to enable 6-degree-of-freedom robotic tracking'
    ],
    preOpCriteria: [
      'Radiation oncologist treatment prescription specifying required number and configuration of markers (typically 3 to 4 seeds separated by >= 15-20 mm)',
      'Platelet count >= 50,000/uL, INR <= 1.5',
      'Multiphasic contrast CT/MRI identifying lesion location and safe vascular-free needle paths',
      'Patient able to cooperate with breath-hold commands'
    ],
    hardware: [
      { category: 'Fiducial Markers', name: 'Gold Anchor / Civco Pre-loaded Gold Seeds', spec: '99.99% pure gold markers: 0.8 mm x 3.0 mm or 1.2 mm x 5.0 mm knurled seeds', standardStore: 'Central IR Store' },
      { category: 'Delivery Needles', name: '18G - 19G Pre-loaded Echogenic Delivery Needles', spec: '10-20 cm needle with bone wax / bio-gel plug holding gold seed at distal tip', standardStore: 'Central IR Store' },
      { category: 'Spacer Media', name: 'Absorbable Gelatin / Bone Wax Plug', spec: 'Prevents retrograde marker migration along puncture track', standardStore: 'Central IR Store' },
      { category: 'Imaging Guidance', name: 'CT Fluoroscopy / High-End Ultrasound System', spec: 'Real-time multi-angle verification of seed trajectory', standardStore: 'Angio Suite Store' }
    ],
    techniqueSteps: [
      'Review SBRT tracking geometry: plan placement of 3 to 4 gold seeds in a non-collinear (triangular/tetrahedral) orientation around the tumor periphery, separated by at least 15-20 mm and angle > 15 degrees.',
      'Patient placed in supine or prone position under local anesthesia with 1% Lidocaine.',
      'Percutaneous puncture under real-time ultrasound or CT fluoroscopy: advance the first pre-loaded 18G fiducial needle into the deep border of the tumor.',
      'Deploy the gold seed by holding the stylet stationary and withdrawing the outer needle cannula ("unsheathing" technique to prevent seed misplacement).',
      'Repeat process for second, third, and fourth markers at different peripheral coordinates (e.g., cranial, caudal, lateral borders).',
      'Ensure markers are anchored securely in tissue parenchyma to prevent migration into vascular structures or biliary ducts.',
      'Perform thin-slice CT simulation scan (1 mm cuts) through the target volume to document final 3D coordinates, marker separation distances, and absence of pneumothorax or hematoma.',
      'Export DICOM datasets directly to radiation oncology treatment planning system (TPS).'
    ],
    complications: [
      'Fiducial marker migration (into portal vein, pulmonary vessels, or biliary tract)',
      'Pneumothorax (in lung fiducial placement, 10-15%)',
      'Local hematoma or minor capsular bleeding',
      'Marker clustering (failure to maintain > 15 mm separation, requiring additional marker)'
    ],
    maayTariffInr: 22000,
    vendorContacts: [
      'Civco Radiotherapy India (+91 98291 44332)',
      'Best Medical International (+91 98293 88112)',
      'Cook Medical India (+91 98291 99887)'
    ]
  },
  {
    id: 'spinal-metastasis-rfa-steerable-electrode',
    name: 'CT-guided transpedicular biopsy and RF ablation of spinal metastasis with steerable curved electrode',
    category: 'Interventional Oncology',
    code: 'IO-MSK-035',
    rghsCode: '693 / 11',
    icd10: 'C79.51 (Secondary Malignant Neoplasm of Bone) / M84.58 (Pathologic Fracture)',
    indications: [
      'Painful osteolytic metastatic spinal tumors or multiple myeloma involving thoracic or lumbar vertebral body',
      'Posterior vertebral body tumor involvement where rigid straight electrodes cannot achieve adequate coverage without risking cord injury',
      'Combined procedure: simultaneous diagnostic histopathological core biopsy, targeted steerable radiofrequency ablation, and cement consolidation (vertebroplasty)',
      'Refractory spinal tumor pain in patients with radiation-resistant metastases (renal cell, melanoma, thyroid)'
    ],
    preOpCriteria: [
      'Contrast MRI and thin-cut CT spine confirming tumor location, pedicle dimensions, and status of the posterior vertebral cortex',
      'Neurological examination documenting intact motor and sensory function in lower extremities',
      'Platelet count >= 70,000/uL, INR <= 1.4',
      'General anesthesia with motor evoked potentials (MEP) / somatosensory evoked potentials (SSEP) or deep conscious sedation'
    ],
    hardware: [
      { category: 'Bone Access Cannula', name: '10G - 11G Transpedicular Introducer Needle', spec: '10-15 cm length, beveled diamond tip with radiopaque depth graduations', standardStore: 'Central IR Store' },
      { category: 'Biopsy Needle', name: '12G Coaxial Bone Biopsy Trephine System', spec: 'High-yield bone core harvesting needle', standardStore: 'Central IR Store' },
      { category: 'Steerable RF System', name: 'STAR Tumor Ablation System (Merit Medical) / Medtronic OsteoCool', spec: 'Steerable curved articulating RF electrode with targeted directional ablation cavity', standardStore: 'Central IR Store' },
      { category: 'RF Generator', name: 'Dedicated Spinal RF Ablation Generator', spec: 'Internal thermocouple monitoring with dual-probe capability and impedance shut-off', standardStore: 'Central IR Store' },
      { category: 'PMMA Bone Cement', name: 'High-Viscosity Radiopaque Polymethylmethacrylate Kit', spec: 'Precision hydraulic delivery injector for cavity filling', standardStore: 'Central IR Store' }
    ],
    techniqueSteps: [
      'Patient placed in prone position on CT table under deep sedation or general anesthesia with continuous neuro-monitoring.',
      'Biplane fluoroscopic or CT-guided transpedicular cannulation: advance a 10G access cannula through the pedicle into the posterior third of the vertebral body.',
      'Introduce the 12G bone trephine needle through the cannula to obtain high-quality diagnostic core biopsy samples of the osteolytic tumor for pathology and molecular testing.',
      'Deploy the steerable articulating RF electrode (e.g., STAR / OsteoCool) through the cannula; steer the curved articulating tip into the center and anterior portion of the vertebral tumor body.',
      'Perform CT confirmation: ensure the active electrode tip is positioned > 10 mm away from the spinal canal and posterior cortex.',
      'Initiate temperature-controlled RF ablation: gradually heat target tissue to 70-80°C for 5 to 8 minutes while monitoring thermocouple sensors situated near the posterior vertebral wall (cut-off limit <= 45°C).',
      'Rotate the steerable curved electrode 180 degrees to address the contralateral vertebral compartment, creating an en-bloc symmetrical ablation zone.',
      'Withdraw the steerable electrode; introduce high-viscosity PMMA bone cement under continuous live fluoroscopy to fill the ablation cavity and stabilize the vertebra.',
      'Cease cement delivery before cement reaches the posterior wall; withdraw cannula after cement polymerizes.',
      'Perform final CT documenting complete tumor ablation zone, satisfactory PMMA void fill, and absence of canal extravasation.'
    ],
    complications: [
      'Thermal injury to spinal cord or traversing nerve root (prevented by strict thermocouple cut-off)',
      'Epidural or neuroforaminal cement leakage',
      'Transient radicular pain or paresthesias',
      'Pedicle fracture during cortical cannulation'
    ],
    maayTariffInr: 49000,
    vendorContacts: [
      'Merit Medical Systems (STAR Spine) (+91 98292 44321)',
      'Medtronic India (OsteoCool) (+91 98292 66778)',
      'Stryker Interventional Spine (+91 98290 55443)'
    ]
  }
];
