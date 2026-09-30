/**
 * De-identified Reference Interventional Radiology Patient Archive Dataset
 * Fully sanitized and synthetic reference dataset for clinical simulation,
 * resident training, and UI evaluation.
 * All patient names, registration numbers, and dates are synthetic and de-identified.
 * Preserves clinical schema integrity and procedure taxonomy.
 */

export interface ArchivedPatientRecord {
  irNumber: string; // e.g. "IR-SYN-001"
  dsaNo: string; // "101"
  year: number; // 2024, 2025, 2026
  month: string; // "January" ... "December"
  monthNum: number; // 1 - 12
  patientName: string;
  age: number | string;
  gender: "Male" | "Female";
  crNo: string;
  admissionNo?: string;
  procedureName: string;
  procedureCategory: string;
  diagnosis: string;
  scheme: string;
  unitOrWard: string;
  procedureDate: string; // YYYY-MM-DD
  folderPath?: string | null;
  filesAvailable: string[];
  hasDischargeCard: boolean;
  hasOperativeNote: boolean;
  dischargeData?: {
    admissionDate: string;
    dischargeDate: string;
    chiefComplaints: string;
    caseHistory: string;
    physicalExam: {
      bloodPressure: string;
      pulse: string;
      temperature: string;
      respiratoryRate: string;
      spo2: string;
      systemicExam: string;
      localExam: string;
    };
    operativeSummary: string;
    medications: Array<{
      sNo: number;
      medicine: string;
      dosePower: string;
      frequency: string;
      days: number;
      instructions: string;
    }>;
    dischargeAdvice: string;
    followUp: string;
  } | null;
  operativeNoteData?: {
    indication: string;
    operators: string;
    accessSite: string;
    sheath: string;
    diagnosticCath: string;
    microCath: string;
    microWire: string;
    embolicAgent: string;
    balloon: string;
    contrastMl: string | number;
    heparinUnits: string | number;
    findings: string;
    techniqueSummary: string;
    technicalSuccess: string;
    complications: string;
    postOpCare: string;
  } | null;
}

export const SMS_PATIENT_ARCHIVE_DATASET: ArchivedPatientRecord[] = [
  {
    "irNumber": "IR-SYN-001",
    "dsaNo": "101",
    "year": 2026,
    "month": "May",
    "monthNum": 5,
    "patientName": "Synthetic Patient 01",
    "age": "52",
    "gender": "Male",
    "crNo": "CR-SYN-001",
    "admissionNo": "ADM-SYN-001",
    "procedureName": "AV Fistuloplasty (Dialysis Access Salvage)",
    "procedureCategory": "AV Fistuloplasty",
    "diagnosis": "End-Stage Renal Disease (ESRD) on maintenance hemodialysis with failing left brachiocephalic AV fistula due to juxta-anastomotic stenosis",
    "scheme": "MAAY",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2026-05-12",
    "folderPath": "SYNTHETIC_ARCHIVE/2026/IR-SYN-001",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "11-05-2026",
      "dischargeDate": "13-05-2026",
      "chiefComplaints": "High venous pressures during hemodialysis and diminished thrill over left arm AV fistula for 2 weeks.",
      "caseHistory": "A 52-year-old male with long-standing diabetic nephropathy on bi-weekly hemodialysis presented with recurring high venous access pressure (>220 mmHg) preventing adequate dialysis clearance. Duplex ultrasound confirmed critical focal stenosis at juxta-anastomotic segment.",
      "physicalExam": {
        "bloodPressure": "134/82 mmHg",
        "pulse": "76 bpm",
        "temperature": "98.4 F",
        "respiratoryRate": "16 /min",
        "spo2": "99% on room air",
        "systemicExam": "Chest clear bilaterally, S1/S2 heard, abdomen soft non-tender.",
        "localExam": "Left brachiocephalic fistula: Puncture site clean, bandage dry, palpable soft continuous thrill restored throughout outflow tract."
      },
      "operativeSummary": "Successful retrograde percutaneous puncture of outflow cephalic vein under ultrasound guidance. Diagnostic fistulogram confirmed 85% focal stenosis. Balloon angioplasty performed with 6 mm x 40 mm Conquest high-pressure balloon inflated to 24 atm. Post-angioplasty run showed restoration of luminal caliber with <10% residual stenosis and brisk venous return.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Tab Amoxicillin + Clavulanic Acid",
          "dosePower": "625 mg",
          "frequency": "BD",
          "days": 5,
          "instructions": "After meals (dose adjusted for renal function)"
        },
        {
          "sNo": 2,
          "medicine": "Tab Pantoprazole",
          "dosePower": "40 mg",
          "frequency": "OD",
          "days": 5,
          "instructions": "Before breakfast"
        },
        {
          "sNo": 3,
          "medicine": "Tab Paracetamol",
          "dosePower": "650 mg",
          "frequency": "SOS",
          "days": 3,
          "instructions": "For pain"
        }
      ],
      "dischargeAdvice": "1. Keep left puncture dressing dry and intact for 24 hours.\n2. Avoid blood pressure measurements or intravenous cannulation in fistula arm.\n3. Verify presence of thrill twice daily by palpation.\n4. Hemodialysis can be resumed after 24 hours using alternate puncture site.",
      "followUp": "Review in IR OPD / Dialysis unit in 1 week with hemodialysis flow parameters."
    },
    "operativeNoteData": {
      "indication": "Failing left arm hemodialysis AV fistula with elevated venous pressures.",
      "operators": "Dr. Meenu Bagarhatta (Sr. Prof & Head); Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Left cephalic vein retrograde puncture",
      "sheath": "6F 11cm Terumo Radiofocus Sheath",
      "diagnosticCath": "4F Kumpe Access Catheter",
      "microCath": "N/A",
      "microWire": "0.035\" Terumo Glidewire 180cm",
      "embolicAgent": "None",
      "balloon": "Conquest High-Pressure 6mm x 40mm, Mustang 7mm x 40mm",
      "contrastMl": "25",
      "heparinUnits": "3000 IU",
      "findings": "Fistulogram revealed 85% diameter stenosis involving juxta-anastomotic segment of cephalic vein over a length of 2.5 cm. Outflow central veins widely patent.",
      "techniqueSummary": "Under local anesthesia (2% lignocaine) and ultrasound guidance, retrograde puncture of outflow vein performed with 18G needle. 6F sheath placed. Guidewire crossed stenosis effortlessly. Balloon angioplasty executed at 24 atm. Full balloon waist effacement achieved.",
      "technicalSuccess": "Technical Success Achieved (<10% residual stenosis, excellent flow thrill)",
      "complications": "None. No dissection or extravasation.",
      "postOpCare": "Manual compression at puncture site for 15 minutes. Pressure dressing applied. Monitor distal pulse and fistula thrill every 30 minutes for 3 hours."
    }
  },
  {
    "irNumber": "IR-SYN-002",
    "dsaNo": "102",
    "year": 2026,
    "month": "April",
    "monthNum": 4,
    "patientName": "Synthetic Patient 02",
    "age": "46",
    "gender": "Male",
    "crNo": "CR-SYN-002",
    "admissionNo": "ADM-SYN-002",
    "procedureName": "Bronchial Artery Embolization (BAE)",
    "procedureCategory": "Bronchial Artery Embolization (BAE)",
    "diagnosis": "Post-tubercular bronchiectasis with recurrent massive hemoptysis (>350 mL/24h)",
    "scheme": "MAAY",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2026-04-18",
    "folderPath": "SYNTHETIC_ARCHIVE/2026/IR-SYN-002",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "17-04-2026",
      "dischargeDate": "20-04-2026",
      "chiefComplaints": "Recurrent bouts of coughing up fresh red blood (~350 mL) over 24 hours.",
      "caseHistory": "A 46-year-old male treated for pulmonary tuberculosis 3 years ago presented with sudden severe hemoptysis. CT bronchial angiography demonstrated hypertrophied, tortuous right intercostobronchial trunk and right superior bronchial artery with parenchymal hypervascularity in right upper lobe.",
      "physicalExam": {
        "bloodPressure": "122/78 mmHg",
        "pulse": "88 bpm",
        "temperature": "98.6 F",
        "respiratoryRate": "20 /min",
        "spo2": "97% on room air",
        "systemicExam": "Right upper zone coarse crepitations, otherwise chest clear, cardiovascular exam normal.",
        "localExam": "Right common femoral artery puncture site clean, no pseudoaneurysm, palpable distal dorsalis pedis pulse."
      },
      "operativeSummary": "Emergency right femoral access. Aortic arch angiography and selective catheterization of right intercostobronchial trunk using 4F Mikaelsson catheter. Coaxial 2.7F microcatheter advanced distally beyond spinal artery branches. Superselective embolization performed with 350-500 micron PVA particles until complete stasis. Immediate cessation of bleeding achieved.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Tab Cefpodoxime Proxetil",
          "dosePower": "200 mg",
          "frequency": "BD",
          "days": 5,
          "instructions": "After meals"
        },
        {
          "sNo": 2,
          "medicine": "Tab Tranexamic Acid",
          "dosePower": "500 mg",
          "frequency": "TDS",
          "days": 3,
          "instructions": "After meals"
        },
        {
          "sNo": 3,
          "medicine": "Tab Cough Suppressant (Dextromethorphan)",
          "dosePower": "10 mL",
          "frequency": "TDS",
          "days": 5,
          "instructions": "Symptomatic for cough"
        }
      ],
      "dischargeAdvice": "1. Bed rest for 48 hours; avoid heavy lifting or strenuous coughing.\n2. Complete prescribed antibiotic course.\n3. Report immediately if hemoptysis recurs or if groin hematoma develops.",
      "followUp": "Review in IR OPD & Chest Medicine in 2 weeks or SOS."
    },
    "operativeNoteData": {
      "indication": "Severe life-threatening hemoptysis secondary to post-TB bronchiectasis.",
      "operators": "Dr. Naresh Mangalhara (Associate Professor); Dr. Neel Yadav",
      "accessSite": "Right Common Femoral Artery (CFA)",
      "sheath": "5F 11cm Cordis Sheath",
      "diagnosticCath": "4F Mikaelsson (Cobra C2) Catheter",
      "microCath": "2.7F Progreat (Terumo) Microcatheter",
      "microWire": "0.014\" Transend Platinum Microwire",
      "embolicAgent": "PVA Particles 350-500 um (Cook Medical) & 500-710 um",
      "balloon": "N/A",
      "contrastMl": "45",
      "heparinUnits": "1500 IU",
      "findings": "Markedly hypertrophied, hypervascular right intercostobronchial trunk with systemic-pulmonary parenchymal shunting in right upper lobe. Anterior spinal artery (Adamkiewicz) meticulously visualized and ruled out.",
      "techniqueSummary": "Right CFA accessed under fluoroscopic roadmapping. Mikaelsson catheter engaged right bronchial artery. Progreat microcatheter tracked coaxially into distal branches. PVA particles injected under continuous fluoroscopic visualization to prune capillary beds until near-stasis.",
      "technicalSuccess": "Complete angiographic devascularization of pathological bronchial tree.",
      "complications": "None. No spinal ischemic symptoms; lower extremity sensorimotor exam intact.",
      "postOpCare": "Strict flat bed rest for 6 hours. Groin compression bandage maintained. Hourly vital signs and bilateral pedal pulse monitoring."
    }
  },
  {
    "irNumber": "IR-SYN-003",
    "dsaNo": "103",
    "year": 2026,
    "month": "March",
    "monthNum": 3,
    "patientName": "Synthetic Patient 03",
    "age": "64",
    "gender": "Female",
    "crNo": "CR-SYN-003",
    "admissionNo": "ADM-SYN-003",
    "procedureName": "Percutaneous Transhepatic Biliary Drainage (PTBD) & Biliary SEMS",
    "procedureCategory": "PTBD / Biliary SEMS",
    "diagnosis": "Inoperable Bismuth Type II Klatskin tumor (Hilar Cholangiocarcinoma) with severe obstructive jaundice (Total Bilirubin 21.4 mg/dL)",
    "scheme": "MAAY",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2026-03-22",
    "folderPath": "SYNTHETIC_ARCHIVE/2026/IR-SYN-003",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "20-03-2026",
      "dischargeDate": "24-03-2026",
      "chiefComplaints": "Deepening yellowish discoloration of eyes and skin, generalized pruritus, and clay-colored stools for 3 weeks.",
      "caseHistory": "A 64-year-old female presenting with progressive painless obstructive jaundice. CECT abdomen revealed mass at biliary confluence causing Bismuth Type II hilar block. Endoscopic retrograde access had failed due to tight stricture. Total bilirubin was 21.4 mg/dL (direct 18.2 mg/dL).",
      "physicalExam": {
        "bloodPressure": "128/74 mmHg",
        "pulse": "78 bpm",
        "temperature": "98.2 F",
        "respiratoryRate": "16 /min",
        "spo2": "98% on room air",
        "systemicExam": "Icterus +++, non-tender soft abdomen, no palpable mass.",
        "localExam": "Right mid-axillary line PTBD site intact, 10F Ring external-internal biliary drain draining clear golden-green bile, catheter secured with 2-0 silk."
      },
      "operativeSummary": "Right transhepatic puncture under ultrasound guidance. Cholangiogram demonstrated marked intrahepatic biliary radical dilation with tight confluence stricture. Successfully negotiated past stricture into duodenum with 0.035\" stiff Glidewire. Deployed 10 mm x 80 mm self-expanding metallic stent (SEMS) across stricture. Excellent transpapillary contrast clearance confirmed.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Tab Cefixime",
          "dosePower": "200 mg",
          "frequency": "BD",
          "days": 7,
          "instructions": "After meals"
        },
        {
          "sNo": 2,
          "medicine": "Tab Ursodeoxycholic Acid",
          "dosePower": "300 mg",
          "frequency": "BD",
          "days": 14,
          "instructions": "With food"
        },
        {
          "sNo": 3,
          "medicine": "Tab Ondansetron",
          "dosePower": "4 mg",
          "frequency": "TDS",
          "days": 3,
          "instructions": "For nausea"
        }
      ],
      "dischargeAdvice": "1. Empty and measure bile drainage bag volume twice daily if external port open.\n2. Keep insertion site dressing clean and waterproof.\n3. Report promptly if fever, chills, severe abdominal pain, or bile leakage occurs.",
      "followUp": "Review in IR OPD in 10 days with repeat Liver Function Tests (LFT)."
    },
    "operativeNoteData": {
      "indication": "Malignant biliary obstruction with failed ERCP.",
      "operators": "Dr. Meenu Bagarhatta; Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Right 10th intercostal mid-axillary line",
      "sheath": "8F 11cm Check-Flo Introducer Sheath",
      "diagnosticCath": "4F Kumpe Catheter & 5F Torcon Biliary Catheter",
      "microCath": "N/A",
      "microWire": "0.035\" Stiff Terumo Glidewire 260cm & 0.035\" Amplatz Super Stiff Wire",
      "embolicAgent": "None",
      "balloon": "Admiral 8mm x 40mm PTA Balloon",
      "contrastMl": "30",
      "heparinUnits": "None",
      "findings": "Significant dilation of right hepatic duct branches with abrupt cut-off at confluence. Bile sample sent for cytology.",
      "techniqueSummary": "Target duct punctured with 21G Chiba needle. Accustick system placed. Wire maneuvered past hilar block into duodenum. Track dilated to 8 mm. 10mm x 80mm uncovered SEMS deployed spanning hilar stricture into common bile duct. Free transpapillary flow documented.",
      "technicalSuccess": "Successful Stent Deployment with prompt contrast clearance into duodenum.",
      "complications": "None. No hemobilia or bile peritonitis.",
      "postOpCare": "Monitor vitals every hour for 4 hours. Keep catheter clamped if internalization achieved. Check abdominal signs."
    }
  },
  {
    "irNumber": "IR-SYN-004",
    "dsaNo": "104",
    "year": 2026,
    "month": "February",
    "monthNum": 2,
    "patientName": "Synthetic Patient 04",
    "age": "58",
    "gender": "Male",
    "crNo": "CR-SYN-004",
    "admissionNo": "ADM-SYN-004",
    "procedureName": "Transarterial Chemoembolization (TACE)",
    "procedureCategory": "TACE / Oncology",
    "diagnosis": "Hepatocellular Carcinoma (HCC) BCLC Stage B in Segment VII/VIII on background of Hepatitis B cirrhosis (Child-Pugh A6)",
    "scheme": "MAAY",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2026-02-14",
    "folderPath": "SYNTHETIC_ARCHIVE/2026/IR-SYN-004",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "13-02-2026",
      "dischargeDate": "16-02-2026",
      "chiefComplaints": "Known chronic Hepatitis B cirrhosis with newly detected 4.8 cm hypervascular liver mass on surveillance MRI.",
      "caseHistory": "A 58-year-old male with Child-Pugh A cirrhosis (score 6) and alpha-fetoprotein (AFP) of 420 ng/mL. Triphasic CT showed 4.8 cm lesion in segment VII with arterial phase hyperenhancement and portal venous washout, typical for HCC. Multidisciplinary liver board recommended conventional TACE.",
      "physicalExam": {
        "bloodPressure": "118/76 mmHg",
        "pulse": "72 bpm",
        "temperature": "98.8 F",
        "respiratoryRate": "18 /min",
        "spo2": "99% on room air",
        "systemicExam": "No ascites, no hepatic encephalopathy, mild hepatosplenomegaly.",
        "localExam": "Right groin puncture site soft, no bruit, strong peripheral pulses."
      },
      "operativeSummary": "Right common femoral artery access. Celiac and common hepatic angiography performed. Selective engagement of right hepatic artery followed by superselective catheterization of anterior segment VII arterial branch feeding the tumor. Emulsion of Doxorubicin (50 mg) with Lipiodol (8 mL) administered followed by Gelfoam slurry embolization. Complete tumor devascularization achieved.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Tab Entecavir",
          "dosePower": "0.5 mg",
          "frequency": "OD",
          "days": 30,
          "instructions": "Empty stomach (ongoing antiviral therapy)"
        },
        {
          "sNo": 2,
          "medicine": "Tab Tramadol + Paracetamol",
          "dosePower": "37.5/325 mg",
          "frequency": "BD",
          "days": 4,
          "instructions": "For post-embolization pain"
        },
        {
          "sNo": 3,
          "medicine": "Tab Pantoprazole",
          "dosePower": "40 mg",
          "frequency": "OD",
          "days": 7,
          "instructions": "Before breakfast"
        }
      ],
      "dischargeAdvice": "1. Mild right upper quadrant pain or low-grade fever may occur (post-embolization syndrome).\n2. Maintain good hydration (>2.5 L/day).\n3. Continue regular antiviral medication uninterrupted.\n4. Seek emergency review if persistent vomiting, high fever, or confusion develops.",
      "followUp": "Review in IR / Hepatology OPD in 4 weeks with dynamic liver CT and AFP."
    },
    "operativeNoteData": {
      "indication": "Intermediate stage HCC (BCLC B) for conventional TACE.",
      "operators": "Dr. Meenu Bagarhatta; Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Right Common Femoral Artery",
      "sheath": "5F 11cm Terumo Sheath",
      "diagnosticCath": "5F Celiac / RH Catheter (Cook Medical)",
      "microCath": "2.4F Progreat Microcatheter (Terumo)",
      "microWire": "0.014\" Fielder Microwire",
      "embolicAgent": "Doxorubicin 50 mg mixed with 8 mL Lipiodol emulsion + Gelfoam slurry",
      "balloon": "N/A",
      "contrastMl": "40",
      "heparinUnits": "2000 IU",
      "findings": "Hypervascular tumor blush in Segments VII/VIII supplied by branches of right hepatic artery. Main portal vein and right portal vein patent.",
      "techniqueSummary": "5F RH catheter placed in proper hepatic artery. 2.4F microcatheter coaxially navigated into feeding segmental branches. Chemolipiodol emulsion infused slowly under fluoroscopic guidance until dense tumor staining seen. Embolization finalized with Gelfoam particles.",
      "technicalSuccess": "Dense Lipiodol accumulation within tumor with complete cessation of tumor arterial flow.",
      "complications": "None. No non-target embolization.",
      "postOpCare": "Strict supine bed rest with limb immobilized for 6 hours. Prophylactic antiemetics and IV fluids administered."
    }
  },
  {
    "irNumber": "IR-SYN-005",
    "dsaNo": "105",
    "year": 2026,
    "month": "January",
    "monthNum": 1,
    "patientName": "Synthetic Patient 05",
    "age": "48",
    "gender": "Male",
    "crNo": "CR-SYN-005",
    "admissionNo": "ADM-SYN-005",
    "procedureName": "Transjugular Intrahepatic Portosystemic Shunt (TIPS)",
    "procedureCategory": "TIPS / DIPS",
    "diagnosis": "Cirrhosis with refractory ascites and recurrent variceal hemorrhage refractory to endoscopic band ligation",
    "scheme": "RGHS",
    "unitOrWard": "IR ICU",
    "procedureDate": "2026-01-25",
    "folderPath": "SYNTHETIC_ARCHIVE/2026/IR-SYN-005",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "24-01-2026",
      "dischargeDate": "28-01-2026",
      "chiefComplaints": "Recurrent massive ascites requiring weekly therapeutic paracenteses and prior variceal bleeding episodes.",
      "caseHistory": "A 48-year-old male with alcoholic cirrhosis, Child-Pugh B8, MELD-Na 14, presenting with diuretic-intractable ascites and secondary portal hypertension. Pre-TIPS portosystemic gradient (PSG) was 22 mmHg.",
      "physicalExam": {
        "bloodPressure": "110/68 mmHg",
        "pulse": "82 bpm",
        "temperature": "98.4 F",
        "respiratoryRate": "18 /min",
        "spo2": "98% on room air",
        "systemicExam": "Abdomen distended but non-tender, no flapping tremors, alert and oriented x3.",
        "localExam": "Right internal jugular vein puncture site healed, clean, dry, no hematoma."
      },
      "operativeSummary": "Right internal jugular vein accessed. Right hepatic vein catheterized. Colapinto needle passed through parenchyma into right portal vein branch. Portal venogram confirmed correct positioning. Track dilated to 8 mm. Gore Viatorr 10 mm x 70 mm (20 mm unconstrained) stent-graft successfully deployed. Post-TIPS PSG dropped from 22 mmHg to 7 mmHg.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Syrup Lactulose",
          "dosePower": "20 mL",
          "frequency": "TDS",
          "days": 30,
          "instructions": "Titrate to 2-3 soft stools per day"
        },
        {
          "sNo": 2,
          "medicine": "Tab Rifaximin",
          "dosePower": "550 mg",
          "frequency": "BD",
          "days": 30,
          "instructions": "With food"
        },
        {
          "sNo": 3,
          "medicine": "Tab Spironolactone",
          "dosePower": "50 mg",
          "frequency": "OD",
          "days": 14,
          "instructions": "Morning with breakfast"
        }
      ],
      "dischargeAdvice": "1. Monitor daily weight, abdominal girth, and cognitive clarity.\n2. Maintain low-salt diet (<2 g/day).\n3. Strictly take lactulose to avoid hepatic encephalopathy.\n4. Report immediately if confusion, lethargy, or gastrointestinal bleeding occurs.",
      "followUp": "Review in IR OPD in 2 weeks with Doppler ultrasound of TIPS shunt."
    },
    "operativeNoteData": {
      "indication": "Refractory ascites secondary to portal hypertension in cirrhosis.",
      "operators": "Dr. Meenu Bagarhatta; Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Right Internal Jugular Vein (IJV)",
      "sheath": "10F 40cm Cook TIPS Set Sheath",
      "diagnosticCath": "5F MPA catheter",
      "microCath": "N/A",
      "microWire": "0.035\" Amplatz Super Stiff 260cm Wire",
      "embolicAgent": "None",
      "balloon": "Conquest 8mm x 60mm PTA Balloon",
      "contrastMl": "50",
      "heparinUnits": "3000 IU",
      "findings": "High baseline portosystemic gradient of 22 mmHg (Right hepatic vein wedged: 31 mmHg, Free: 9 mmHg). Widely patent main portal vein.",
      "techniqueSummary": "Transjugular liver access achieved under US guidance. Colapinto needle deployed anteriorly and caudally into portal vein branch. Portogram confirmed portal venous system. Track dilated with 8mm balloon. Gore Viatorr controlled expansion stent deployed. Post-procedure PSG measured 7 mmHg.",
      "technicalSuccess": "Technical Success Achieved with target portosystemic gradient < 12 mmHg.",
      "complications": "None. No capsular perforation or acute encephalopathy.",
      "postOpCare": "Continuous neuro-observation in IR ICU. Hourly mental status evaluation. Daily electrolytes and serum ammonia."
    }
  },
  {
    "irNumber": "IR-SYN-006",
    "dsaNo": "106",
    "year": 2025,
    "month": "November",
    "monthNum": 11,
    "patientName": "Synthetic Patient 06",
    "age": "17",
    "gender": "Male",
    "crNo": "CR-SYN-006",
    "admissionNo": "ADM-SYN-006",
    "procedureName": "Juvenile Nasopharyngeal Angiofibroma (JNA) Embolization",
    "procedureCategory": "JNA Embolization",
    "diagnosis": "Radkowski Stage IIb Juvenile Nasopharyngeal Angiofibroma with extension into sphenopalatine foramen and pterygopalatine fossa",
    "scheme": "GENERAL",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2025-11-14",
    "folderPath": "SYNTHETIC_ARCHIVE/2025/IR-SYN-006",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "13-11-2025",
      "dischargeDate": "16-11-2025",
      "chiefComplaints": "Recurrent unprovoked heavy epistaxis and unilateral left nasal obstruction for 4 months.",
      "caseHistory": "A 17-year-old adolescent male presenting with recurrent epistaxis. Diagnostic CT and MRI demonstrated a lobulated hypervascular lesion originating in posterior nasal cavity with remodeling of pterygoid plates. Pre-operative embolization requested by ENT surgery 24-48 hours before surgical excision.",
      "physicalExam": {
        "bloodPressure": "114/72 mmHg",
        "pulse": "74 bpm",
        "temperature": "98.6 F",
        "respiratoryRate": "16 /min",
        "spo2": "100% on room air",
        "systemicExam": "Normal heart and lung sounds, no neurological deficits.",
        "localExam": "Right groin puncture clean and dry; left nasal cavity packing intact."
      },
      "operativeSummary": "Right CFA access. Left external carotid angiography demonstrated intense tumor blush supplied predominantly by left internal maxillary artery (IMA) and ascending pharyngeal artery. Superselective microcatheterization performed. Embolization with 300-500 um PVA particles and pushable microcoils resulted in near-total devascularization. Patient transferred to ENT for scheduled resection.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Tab Cefuroxime Axetil",
          "dosePower": "500 mg",
          "frequency": "BD",
          "days": 5,
          "instructions": "After meals"
        },
        {
          "sNo": 2,
          "medicine": "Tab Diclofenac + Paracetamol",
          "dosePower": "50/325 mg",
          "frequency": "BD",
          "days": 3,
          "instructions": "With meals"
        }
      ],
      "dischargeAdvice": "1. Avoid vigorous nose blowing or nasal manipulation.\n2. Keep head elevated at 30-45 degrees.\n3. Pre-op surgical transfer as per ENT schedule.",
      "followUp": "Surgical excision scheduled within 48 hours in ENT OT."
    },
    "operativeNoteData": {
      "indication": "Pre-operative devascularization of vascular nasopharyngeal tumor to minimize intraoperative blood loss.",
      "operators": "Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Right Common Femoral Artery",
      "sheath": "5F 11cm Cordis Sheath",
      "diagnosticCath": "5F Headhunter (H1) Catheter",
      "microCath": "1.9F Marathon / 2.1F Echelon Microcatheter",
      "microWire": "0.010\" Traxcess Microwire",
      "embolicAgent": "PVA Particles 300-500 um + 2x VortX Microcoils (2mm x 4mm)",
      "balloon": "N/A",
      "contrastMl": "35",
      "heparinUnits": "1000 IU",
      "findings": "Prominent left internal maxillary artery branches (sphenopalatine, descending palatine) providing 90% of tumor blush. No anomalous ophthalmic or internal carotid collateral anastomoses.",
      "techniqueSummary": "5F diagnostic catheter seated in external carotid artery. Microcatheter navigated past middle meningeal artery into distal internal maxillary artery. Careful roadmapping confirmed absence of intracranial communication. PVA particles injected to complete capillary stasis, reinforced with proximal microcoils.",
      "technicalSuccess": ">95% Tumor Devascularization Achieved.",
      "complications": "None. Cranial nerve II-XII functions intact post-procedure.",
      "postOpCare": "Strict flat bed rest for 6 hours. Neurological monitoring every 30 minutes for 2 hours."
    }
  },
  {
    "irNumber": "IR-SYN-007",
    "dsaNo": "107",
    "year": 2025,
    "month": "October",
    "monthNum": 10,
    "patientName": "Synthetic Patient 07",
    "age": "42",
    "gender": "Female",
    "crNo": "CR-SYN-007",
    "admissionNo": "ADM-SYN-007",
    "procedureName": "Endovenous Laser Ablation (EVLT) & VenaSeal for Varicose Veins",
    "procedureCategory": "Varicose Veins (VenaSeal / EVLT)",
    "diagnosis": "Chronic Venous Insufficiency (CEAP C4a) with severe Great Saphenous Vein (GSV) reflux and stasis dermatitis",
    "scheme": "MAAY",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2025-10-09",
    "folderPath": "SYNTHETIC_ARCHIVE/2025/IR-SYN-007",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "08-10-2025",
      "dischargeDate": "09-10-2025",
      "chiefComplaints": "Painful bulging veins, heavy dragging sensation, and brown pigmentation over right lower calf for 1 year.",
      "caseHistory": "A 42-year-old female schoolteacher presenting with symptomatic right lower limb varicose veins. Venous duplex ultrasound demonstrated saphenofemoral junction (SFJ) incompetence with GSV retrograde reflux time > 3.2 seconds and trunk diameter of 9.2 mm.",
      "physicalExam": {
        "bloodPressure": "120/78 mmHg",
        "pulse": "72 bpm",
        "temperature": "98.4 F",
        "respiratoryRate": "16 /min",
        "spo2": "99% on room air",
        "systemicExam": "Normal cardiopulmonary examination.",
        "localExam": "Right leg: Below-knee GSV puncture site sealed, no hematoma, Grade II compression stocking in place, distal capillary refill < 2 sec."
      },
      "operativeSummary": "Under ultrasound guidance, right GSV accessed at upper calf. 1470 nm radial laser fiber positioned 2 cm distal to SFJ. Perivenous tumescent anesthesia infiltrated along the saphenous compartment under continuous US guidance. Thermal ablation executed with 1470 nm laser delivering 65 J/cm. Complete venous occlusion confirmed on post-procedure ultrasound.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Tab Paracetamol + Aceclofenac",
          "dosePower": "325/100 mg",
          "frequency": "BD",
          "days": 3,
          "instructions": "After meals"
        },
        {
          "sNo": 2,
          "medicine": "Tab Flavonoid Micronized Purified Fraction (MPFF)",
          "dosePower": "500 mg",
          "frequency": "BD",
          "days": 14,
          "instructions": "With food"
        }
      ],
      "dischargeAdvice": "1. Ambulate for 15-20 minutes every 2-3 hours; avoid prolonged motionless standing or sitting.\n2. Wear Class II (20-30 mmHg) graduated compression stockings during daytime for 2 weeks.\n3. May shower after 48 hours; do not soak in tub.",
      "followUp": "Review in IR OPD in 1 week with follow-up venous duplex."
    },
    "operativeNoteData": {
      "indication": "Symptomatic CEAP C4a varicose veins with saphenofemoral junction reflux.",
      "operators": "Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Right below-knee GSV percutaneous access",
      "sheath": "6F 11cm Introducer Sheath",
      "diagnosticCath": "N/A",
      "microCath": "N/A",
      "microWire": "0.035\" J-tip Guidewire",
      "embolicAgent": "None (Thermal Laser Ablation)",
      "balloon": "N/A",
      "contrastMl": "0",
      "heparinUnits": "None",
      "findings": "Incompetent right GSV measuring 9.2 mm at SFJ and 7.4 mm at mid-thigh. Deep venous system (femoral, popliteal) fully patent and competent.",
      "techniqueSummary": "GSV accessed at calf with 18G needle under US guidance. 6F sheath placed. 1470nm radial laser fiber positioned precisely 20 mm below SFJ confirmed on US. 250 mL cold tumescent solution injected. Laser ablation executed at 7 W with pull-back speed 1 mm/sec. Total energy: 2450 J.",
      "technicalSuccess": "100% Occlusion of treated GSV with competent SFJ closure.",
      "complications": "None. No EHIT (Endovenous Heat-Induced Thrombosis) or nerve injury.",
      "postOpCare": "Immediate ambulation encouraged in recovery bay. Thigh-high compression stockings applied."
    }
  },
  {
    "irNumber": "IR-SYN-008",
    "dsaNo": "108",
    "year": 2025,
    "month": "September",
    "monthNum": 9,
    "patientName": "Synthetic Patient 08",
    "age": "29",
    "gender": "Male",
    "crNo": "CR-SYN-008",
    "admissionNo": "ADM-SYN-008",
    "procedureName": "Left Gonadal Vein Coil Embolization for Varicocele",
    "procedureCategory": "Varicocele Embolization",
    "diagnosis": "Grade III symptomatic left varicocele with severe scrotal ache and subfertility (oligoasthenozoospermia)",
    "scheme": "GENERAL",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2025-09-18",
    "folderPath": "SYNTHETIC_ARCHIVE/2025/IR-SYN-008",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "18-09-2025",
      "dischargeDate": "19-09-2025",
      "chiefComplaints": "Dull dragging scrotal pain worsening with standing, and difficulty conceiving for 1.5 years.",
      "caseHistory": "A 29-year-old male with palpable visible 'bag of worms' Grade III left varicocele. Scrotal ultrasound confirmed multiple dilated pampiniform plexus veins measuring up to 4.2 mm with continuous retrograde reflux on Valsalva maneuver.",
      "physicalExam": {
        "bloodPressure": "122/80 mmHg",
        "pulse": "68 bpm",
        "temperature": "98.4 F",
        "respiratoryRate": "14 /min",
        "spo2": "100% on room air",
        "systemicExam": "Normal cardiopulmonary examination.",
        "localExam": "Right internal jugular puncture site sealed, no hematoma; scrotal tenderness resolving."
      },
      "operativeSummary": "Transjugular access via right IJV. Left renal vein selectively cannulated. Left gonadal vein engaged and descending venography revealed severe retrograde incompetent reflux. Coaxial microcatheter placed into distal gonadal vein near pelvic brim. Embolization performed with fibered microcoils and 2% sodium tetradecyl sulfate (STS) foam. Complete occlusion achieved.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Tab Ibuprofen",
          "dosePower": "400 mg",
          "frequency": "BD",
          "days": 3,
          "instructions": "After meals"
        },
        {
          "sNo": 2,
          "medicine": "Tab Pantoprazole",
          "dosePower": "40 mg",
          "frequency": "OD",
          "days": 3,
          "instructions": "Before breakfast"
        }
      ],
      "dischargeAdvice": "1. Wear tight scrotal support / brief for 1 week.\n2. Avoid strenuous gym workouts, heavy weightlifting, or bike riding for 10 days.\n3. Return immediately if sharp groin pain, swelling, or fever occurs.",
      "followUp": "Review in IR OPD in 4 weeks; repeat semen analysis in 3 months."
    },
    "operativeNoteData": {
      "indication": "Grade III left varicocele with chronic scrotal pain and subfertility.",
      "operators": "Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Right Internal Jugular Vein (IJV)",
      "sheath": "5F 11cm Cordis Sheath",
      "diagnosticCath": "5F Cobra C2 / MPA Catheter",
      "microCath": "2.7F Progreat Microcatheter",
      "microWire": "0.018\" Glidewire",
      "embolicAgent": "Fibered Platinum Interlock Coils (6mm x 20cm, 8mm x 20cm) + STS 2% Foam",
      "balloon": "N/A",
      "contrastMl": "25",
      "heparinUnits": "1000 IU",
      "findings": "Incompetent ostial and mid-ureteral valves in left testicular vein with massive retrograde filling of pelvic pampiniform plexus.",
      "techniqueSummary": "Right IJV access under ultrasound. 5F Cobra catheter engaged left renal vein. Coaxial microcatheter navigated deep to sacroiliac joint level. STS sclerosant foam (2 mL) injected under balloon occlusion, followed by dense packing with 6 fibered microcoils across the length of the vein.",
      "technicalSuccess": "Total technical occlusion of left testicular vein with cessation of pampiniform filling.",
      "complications": "None. No coil migration.",
      "postOpCare": "Sitting recovery after 2 hours. Discharge on same evening or next morning."
    }
  },
  {
    "irNumber": "IR-SYN-009",
    "dsaNo": "109",
    "year": 2025,
    "month": "August",
    "monthNum": 8,
    "patientName": "Synthetic Patient 09",
    "age": "38",
    "gender": "Male",
    "crNo": "CR-SYN-009",
    "admissionNo": "ADM-SYN-009",
    "procedureName": "Percutaneous Catheter Drainage (PCD) for Pancreatic Collection",
    "procedureCategory": "PCD / Abscess Drainage",
    "diagnosis": "Severe Acute Necrotizing Pancreatitis with infected walled-off pancreatic necrosis (WOPN) in lesser sac",
    "scheme": "MAAY",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2025-08-11",
    "folderPath": "SYNTHETIC_ARCHIVE/2025/IR-SYN-009",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "09-08-2025",
      "dischargeDate": "15-08-2025",
      "chiefComplaints": "High spiking fever (103 F), epigastric pain, and septic leukocytosis 3 weeks after acute pancreatitis onset.",
      "caseHistory": "A 38-year-old male with severe gallstone pancreatitis. Follow-up CECT showed a large 12 x 8 cm non-enhancing lesser sac necrotic collection with intra-cystic gas bubbles indicative of secondary bacterial infection. Step-up minimally invasive percutaneous drainage was indicated.",
      "physicalExam": {
        "bloodPressure": "116/70 mmHg",
        "pulse": "94 bpm",
        "temperature": "100.2 F",
        "respiratoryRate": "20 /min",
        "spo2": "97% on room air",
        "systemicExam": "Epigastric fullness, voluntary guarding, chest clear.",
        "localExam": "Left flank PCD tube draining murky purulent fluid, catheter fixed with 2-0 silk, skin entry clean."
      },
      "operativeSummary": "CT-guided percutaneous access to the lesser sac collection via a retroperitoneal left flank trans-splenorenal approach avoiding colon and spleen. 14F locking pigtail drainage catheter successfully placed with Seldinger technique. 350 mL of thick purulent necrotic fluid evacuated and sent for culture.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Inj Meropenem",
          "dosePower": "1 g",
          "frequency": "TDS",
          "days": 7,
          "instructions": "Slow IV infusion"
        },
        {
          "sNo": 2,
          "medicine": "Tab Metronidazole",
          "dosePower": "400 mg",
          "frequency": "TDS",
          "days": 7,
          "instructions": "After meals"
        },
        {
          "sNo": 3,
          "medicine": "Tab Pantoprazole",
          "dosePower": "40 mg",
          "frequency": "OD",
          "days": 14,
          "instructions": "Before breakfast"
        }
      ],
      "dischargeAdvice": "1. Flush drainage catheter with 10 mL sterile normal saline twice daily.\n2. Keep drainage bag below waist level.\n3. Measure and record 24-hour drainage output daily.\n4. Contact IR emergency if drain stops draining, slips out, or fever spikes.",
      "followUp": "Weekly review in IR OPD with repeat ultrasound / non-contrast CT in 2 weeks."
    },
    "operativeNoteData": {
      "indication": "Infected walled-off pancreatic necrosis for percutaneous decompression.",
      "operators": "Dr. Meenu Bagarhatta; Dr. Neel Yadav",
      "accessSite": "Left retroperitoneal flank approach",
      "sheath": "N/A (Tandem Dilators up to 14F)",
      "diagnosticCath": "N/A",
      "microCath": "N/A",
      "microWire": "0.035\" Lunderquist Extra Stiff Wire",
      "embolicAgent": "None",
      "balloon": "N/A",
      "contrastMl": "15 (dilute non-ionic contrast)",
      "heparinUnits": "None",
      "findings": "Large 12 cm complex necrotic collection in retroperitoneum displacing stomach anteriorly. No intervening bowel on access trajectory.",
      "techniqueSummary": "Collection localized on planning CT. 18G puncture needle placed into collection center; thick foul-smelling necrotic pus aspirated. Guidewire coiled within cavity. Tract serially dilated from 8F to 14F. 14F Cook locking pigtail catheter deployed. Cavity gently irrigated with warm saline until returns clear.",
      "technicalSuccess": "Successful 14F PCD placement with immediate drainage of 350 mL purulent collection.",
      "complications": "None. No injury to spleen, left kidney, or descending colon.",
      "postOpCare": "Connect to gravity drainage bag. Flush with 10 mL saline q12h. Daily output charting."
    }
  },
  {
    "irNumber": "IR-SYN-010",
    "dsaNo": "110",
    "year": 2025,
    "month": "July",
    "monthNum": 7,
    "patientName": "Synthetic Patient 10",
    "age": "62",
    "gender": "Male",
    "crNo": "CR-SYN-010",
    "admissionNo": "ADM-SYN-010",
    "procedureName": "Diagnostic Visceral & Peripheral Angiography (DSA)",
    "procedureCategory": "Diagnostic Angiography (DSA)",
    "diagnosis": "Suspected vascular malformation / ischemic colitis with intermittent rectal bleeding and normal colonoscopy",
    "scheme": "RGHS",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2025-07-29",
    "folderPath": "SYNTHETIC_ARCHIVE/2025/IR-SYN-010",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "28-07-2025",
      "dischargeDate": "30-07-2025",
      "chiefComplaints": "Intermittent dark red rectal bleeding and crampy post-prandial abdominal pain for 2 months.",
      "caseHistory": "A 62-year-old male with coronary artery disease and hypertension presenting with recurrent painless lower GI bleeding episodes without identifiable source on repeated colonoscopy. Mesenteric angiography requested.",
      "physicalExam": {
        "bloodPressure": "132/84 mmHg",
        "pulse": "74 bpm",
        "temperature": "98.4 F",
        "respiratoryRate": "16 /min",
        "spo2": "98% on room air",
        "systemicExam": "Abdomen soft, non-tender, no masses or organomegaly.",
        "localExam": "Right femoral access site healed cleanly, soft without tenderness or hematoma."
      },
      "operativeSummary": "Right common femoral access. Comprehensive selective angiography of celiac axis, superior mesenteric artery (SMA), and inferior mesenteric artery (IMA). Demonstrated 60% ostial narrowing of SMA with brisk collateral arcade from IMA (meandering mesenteric artery). No active contrast extravasation, aneurysm, or angiodysplasia observed.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Tab Aspirin",
          "dosePower": "75 mg",
          "frequency": "OD",
          "days": 30,
          "instructions": "After lunch"
        },
        {
          "sNo": 2,
          "medicine": "Tab Atorvastatin",
          "dosePower": "40 mg",
          "frequency": "HS",
          "days": 30,
          "instructions": "At bedtime"
        }
      ],
      "dischargeAdvice": "1. Normal activity may resume after 48 hours.\n2. Maintain cardiac and antihypertensive medications.\n3. Report promptly if fresh blood appears in stool or groin swelling develops.",
      "followUp": "Review in IR / Gastroenterology OPD in 2 weeks."
    },
    "operativeNoteData": {
      "indication": "Diagnostic evaluation of occult lower gastrointestinal bleed and suspected mesenteric ischemia.",
      "operators": "Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Right Common Femoral Artery",
      "sheath": "5F 11cm Terumo Sheath",
      "diagnosticCath": "5F Simmons 1 & Cobra C2 Catheters",
      "microCath": "N/A",
      "microWire": "0.035\" Terumo Glidewire",
      "embolicAgent": "None (Diagnostic study)",
      "balloon": "N/A",
      "contrastMl": "45",
      "heparinUnits": "2000 IU",
      "findings": "Celiac artery widely patent. SMA demonstrated 60% eccentric calcified ostial stenosis. IMA patent with prominent arc of Riolan filling distal SMA branches. No active bleeding, tumor blush, or arteriovenous fistula.",
      "techniqueSummary": "Right CFA punctured under fluoroscopic guidance. 5F sheath placed. Selective engagement of celiac, SMA, and IMA performed with Simmons 1 catheter. High-frame rate DSA acquisition (3-4 fps) in AP and lateral projections.",
      "technicalSuccess": "Diagnostic study successfully completed with complete visualization of mesenteric vascular tree.",
      "complications": "None. Puncture site hemostasis achieved with manual compression.",
      "postOpCare": "Supine bed rest for 4 hours. Monitor vital signs and distal dorsalis pedis pulses hourly."
    }
  },
  {
    "irNumber": "IR-SYN-011",
    "dsaNo": "111",
    "year": 2025,
    "month": "June",
    "monthNum": 6,
    "patientName": "Synthetic Patient 11",
    "age": "50",
    "gender": "Male",
    "crNo": "CR-SYN-011",
    "admissionNo": "ADM-SYN-011",
    "procedureName": "Splenic Artery Pseudoaneurysm Coil Embolization",
    "procedureCategory": "Other IR",
    "diagnosis": "Post-pancreatitis splenic artery pseudoaneurysm (2.8 cm) with impending rupture",
    "scheme": "MAAY",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2025-06-20",
    "folderPath": "SYNTHETIC_ARCHIVE/2025/IR-SYN-011",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "19-06-2025",
      "dischargeDate": "22-06-2025",
      "chiefComplaints": "Sudden onset severe left upper quadrant abdominal pain 6 weeks after acute pancreatitis.",
      "caseHistory": "A 50-year-old male with history of necrotizing pancreatitis presented with worsening left hypochondrial pain. CECT angiography demonstrated a 2.8 cm pseudoaneurysm arising from the mid-splenic artery surrounded by inflammatory fluid collection.",
      "physicalExam": {
        "bloodPressure": "126/80 mmHg",
        "pulse": "80 bpm",
        "temperature": "98.6 F",
        "respiratoryRate": "18 /min",
        "spo2": "99% on room air",
        "systemicExam": "Left upper quadrant tenderness, no rebound guarding.",
        "localExam": "Right groin puncture site clean, non-tender, no hematoma."
      },
      "operativeSummary": "Right CFA access. Celiac and splenic arteriography delineated 28 mm pseudoaneurysm in mid-splenic artery. Microcatheter navigated across aneurysm neck. Sandwich technique performed: distal embolization followed by proximal splenic artery coil occlusion using detachable platinum coils. Complete aneurysm exclusion confirmed with preserved collateral splenic perfusion via short gastrics.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Tab Cefpodoxime",
          "dosePower": "200 mg",
          "frequency": "BD",
          "days": 5,
          "instructions": "After meals"
        },
        {
          "sNo": 2,
          "medicine": "Tab Tramadol + Paracetamol",
          "dosePower": "37.5/325 mg",
          "frequency": "BD",
          "days": 3,
          "instructions": "For pain"
        }
      ],
      "dischargeAdvice": "1. Strict rest for 1 week.\n2. Avoid any abdominal trauma or heavy straining.\n3. Return immediately if severe left upper abdominal pain or dizziness occurs.",
      "followUp": "Review in IR OPD in 3 weeks with follow-up Doppler ultrasound."
    },
    "operativeNoteData": {
      "indication": "Splenic artery pseudoaneurysm with high risk of rupture.",
      "operators": "Dr. Meenu Bagarhatta; Dr. Neel Yadav",
      "accessSite": "Right Common Femoral Artery",
      "sheath": "5F 11cm Cordis Sheath",
      "diagnosticCath": "5F Cobra C2 Catheter",
      "microCath": "2.7F Progreat Microcatheter",
      "microWire": "0.014\" Transend Platinum Microwire",
      "embolicAgent": "Interlock Detachable Coils (6mm x 20cm, 8mm x 20cm, 10mm x 30cm)",
      "balloon": "N/A",
      "contrastMl": "40",
      "heparinUnits": "2500 IU",
      "findings": "2.8 cm pseudoaneurysm originating from mid-portion of tortuous splenic artery with wide neck.",
      "techniqueSummary": "Celiac artery engaged with 5F Cobra. Progreat microcatheter coaxially tracked into splenic artery beyond the neck. Outflow parenchymal branches packed first with 2 coils (distal trap). Microcatheter pulled back to inflow parent vessel and densely packed with 3 large coils (proximal trap). Completion run showed zero flow into pseudoaneurysm sac.",
      "technicalSuccess": "Complete Sandwich Embolization with total exclusion of pseudoaneurysm.",
      "complications": "None. Distal splenic parenchymal viability preserved.",
      "postOpCare": "Bed rest for 6 hours. Monitor hemoglobin and abdominal girth."
    }
  },
  {
    "irNumber": "IR-SYN-012",
    "dsaNo": "112",
    "year": 2025,
    "month": "May",
    "monthNum": 5,
    "patientName": "Synthetic Patient 12",
    "age": "40",
    "gender": "Female",
    "crNo": "CR-SYN-012",
    "admissionNo": "ADM-SYN-012",
    "procedureName": "Uterine Artery Embolization (UAE)",
    "procedureCategory": "Other IR",
    "diagnosis": "Symptomatic uterine leiomyomata (fibroids) with severe menorrhagia and secondary iron-deficiency anemia",
    "scheme": "GENERAL",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2025-05-16",
    "folderPath": "SYNTHETIC_ARCHIVE/2025/IR-SYN-012",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "15-05-2025",
      "dischargeDate": "17-05-2025",
      "chiefComplaints": "Heavy prolonged menstrual bleeding with clots, pelvic fullness, and chronic fatigue for 8 months.",
      "caseHistory": "A 40-year-old female with multiple intramural fibroids (dominant 6.5 cm fundal fibroid) desiring uterine preservation. Pre-procedure hemoglobin was 8.8 g/dL. Pelvic MRI confirmed hypervascular fibroids suitable for bilateral uterine artery embolization.",
      "physicalExam": {
        "bloodPressure": "118/74 mmHg",
        "pulse": "72 bpm",
        "temperature": "98.4 F",
        "respiratoryRate": "16 /min",
        "spo2": "99% on room air",
        "systemicExam": "Normal heart and lungs, mild pallor.",
        "localExam": "Right groin puncture healed cleanly, no hematoma, palpable distal pulses."
      },
      "operativeSummary": "Right CFA access. Bilateral internal iliac and uterine artery catheterization using 4F Roberts Uterine Catheter (RUC) and 2.7F microcatheter. Bilateral superselective embolization performed with 500-700 um calibrated spherical particles (Embosphere) to sluggish flow / near-stasis. Significant reduction in fibroid vascularity achieved.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Tab Naproxen",
          "dosePower": "500 mg",
          "frequency": "BD",
          "days": 4,
          "instructions": "With food for pelvic cramping"
        },
        {
          "sNo": 2,
          "medicine": "Tab Pantoprazole",
          "dosePower": "40 mg",
          "frequency": "OD",
          "days": 5,
          "instructions": "Before breakfast"
        },
        {
          "sNo": 3,
          "medicine": "Tab Ferrous Ascorbate + Folic Acid",
          "dosePower": "100 mg",
          "frequency": "OD",
          "days": 30,
          "instructions": "After meals"
        }
      ],
      "dischargeAdvice": "1. Mild to moderate pelvic cramping and low-grade fever are expected for 48-72 hours.\n2. Hydrate well and rest.\n3. Report immediately if foul vaginal discharge, heavy bleeding, or high fever develops.",
      "followUp": "Review in IR / Gynecology OPD in 4 weeks; repeat pelvic ultrasound in 3 months."
    },
    "operativeNoteData": {
      "indication": "Symptomatic uterine fibroids desiring uterine-sparing therapy.",
      "operators": "Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Right Common Femoral Artery",
      "sheath": "5F 11cm Cordis Sheath",
      "diagnosticCath": "4F Roberts Uterine Catheter (RUC)",
      "microCath": "2.7F Progreat Microcatheter",
      "microWire": "0.014\" Transend Microwire",
      "embolicAgent": "Embosphere 500-700 um (2 vials)",
      "balloon": "N/A",
      "contrastMl": "50",
      "heparinUnits": "2000 IU",
      "findings": "Markedly enlarged and tortuous bilateral uterine arteries feeding extensive hypervascular tumor plexus in uterine fundus.",
      "techniqueSummary": "Crossover maneuver performed to engage left internal iliac and uterine artery. Microcatheter navigated into ascending uterine artery. Embosphere particles injected slowly until 5-beat contrast clearance achieved. Same technique applied to right uterine artery via Waltman loop.",
      "technicalSuccess": "Bilateral technical success with complete devascularization of fibroid vascular bed.",
      "complications": "None. No non-target embolization into ovarian or gluteal branches.",
      "postOpCare": "Strict bed rest for 6 hours. Patient-controlled analgesia (PCA) protocol initiated."
    }
  },
  {
    "irNumber": "IR-SYN-013",
    "dsaNo": "113",
    "year": 2025,
    "month": "April",
    "monthNum": 4,
    "patientName": "Synthetic Patient 13",
    "age": "55",
    "gender": "Male",
    "crNo": "CR-SYN-013",
    "admissionNo": "ADM-SYN-013",
    "procedureName": "Direct Intrahepatic Portosystemic Shunt (DIPS)",
    "procedureCategory": "TIPS / DIPS",
    "diagnosis": "Budd-Chiari syndrome with completely occluded hepatic veins and progressive ascites",
    "scheme": "MAAY",
    "unitOrWard": "IR ICU",
    "procedureDate": "2025-04-10",
    "folderPath": "SYNTHETIC_ARCHIVE/2025/IR-SYN-013",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "09-04-2025",
      "dischargeDate": "14-04-2025",
      "chiefComplaints": "Intractable ascites and painful liver enlargement not responding to diuretics.",
      "caseHistory": "A 55-year-old male with primary Budd-Chiari syndrome. Hepatic venography demonstrated complete occlusion of all three major hepatic veins, precluding standard TIPS. Intravascular ultrasound (IVUS) guided DIPS from intrahepatic IVC directly into portal vein was indicated.",
      "physicalExam": {
        "bloodPressure": "114/72 mmHg",
        "pulse": "76 bpm",
        "temperature": "98.4 F",
        "respiratoryRate": "16 /min",
        "spo2": "98% on room air",
        "systemicExam": "Hepatomegaly, moderate ascites, alert and oriented.",
        "localExam": "Right internal jugular puncture site clean, dressing dry."
      },
      "operativeSummary": "Right IJV access. IVC venography showed retrohepatic IVC narrowing. Under transabdominal ultrasound and fluoroscopic guidance, Rosch-Uchida needle advanced directly from suprahepatic IVC through caudate lobe into main portal vein. Tract dilated with 8 mm balloon and 10 mm x 80 mm Gore Viatorr stent-graft deployed. Portosystemic gradient reduced from 24 mmHg to 8 mmHg.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Tab Rivaroxaban",
          "dosePower": "20 mg",
          "frequency": "OD",
          "days": 30,
          "instructions": "With dinner (ongoing anticoagulation)"
        },
        {
          "sNo": 2,
          "medicine": "Syrup Lactulose",
          "dosePower": "15 mL",
          "frequency": "BD",
          "days": 30,
          "instructions": "After meals"
        }
      ],
      "dischargeAdvice": "1. Lifelong anticoagulation is critical to keep the shunt and IVC patent.\n2. Measure daily abdominal girth and weight.\n3. Report promptly if confusion or bruising occurs.",
      "followUp": "Review in IR OPD in 2 weeks with shunt Doppler."
    },
    "operativeNoteData": {
      "indication": "Budd-Chiari syndrome with occluded hepatic veins for DIPS.",
      "operators": "Dr. Meenu Bagarhatta; Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Right Internal Jugular Vein",
      "sheath": "10F 40cm Check-Flo Sheath",
      "diagnosticCath": "5F MPA Catheter",
      "microCath": "N/A",
      "microWire": "0.035\" Amplatz Super Stiff Wire",
      "embolicAgent": "None",
      "balloon": "Mustang 8mm x 60mm PTA Balloon",
      "contrastMl": "45",
      "heparinUnits": "3000 IU",
      "findings": "Complete occlusion of right, middle, and left hepatic veins with 'spider web' collateral pattern. Patent intrahepatic IVC and main portal vein.",
      "techniqueSummary": "Direct transcaval puncture performed into portal vein bifurcation under real-time ultrasound. Wire secured in mesenteric vein. Tract balloon-dilated and 10mm x 80mm Viatorr stent-graft positioned connecting IVC directly to portal vein. Final PSG: 8 mmHg.",
      "technicalSuccess": "Successful DIPS deployment with excellent hepatofugal portosystemic shunt flow.",
      "complications": "None. No intra-abdominal hemoperitoneum.",
      "postOpCare": "Strict ICU monitoring. Continuous anticoagulant infusion transitioned to oral agents."
    }
  },
  {
    "irNumber": "IR-SYN-014",
    "dsaNo": "114",
    "year": 2025,
    "month": "March",
    "monthNum": 3,
    "patientName": "Synthetic Patient 14",
    "age": "36",
    "gender": "Female",
    "crNo": "CR-SYN-014",
    "admissionNo": "ADM-SYN-014",
    "procedureName": "Renal Angiomyolipoma Particle & Microcoil Embolization",
    "procedureCategory": "Other IR",
    "diagnosis": "Large right renal angiomyolipoma (6.8 cm) with microaneurysms at high risk of spontaneous retroperitoneal hemorrhage (Wunderlich syndrome)",
    "scheme": "MAAY",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2025-03-08",
    "folderPath": "SYNTHETIC_ARCHIVE/2025/IR-SYN-014",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "07-03-2025",
      "dischargeDate": "10-03-2025",
      "chiefComplaints": "Dull right flank ache and episodic gross hematuria for 1 month.",
      "caseHistory": "A 36-year-old female found to have a 6.8 cm right renal exophytic tumor on ultrasound, confirmed on CT to be an angiomyolipoma with fat-attenuation areas and multiple intralesional pseudoaneurysms > 5 mm. Elective prophylactic embolization was indicated.",
      "physicalExam": {
        "bloodPressure": "124/80 mmHg",
        "pulse": "72 bpm",
        "temperature": "98.4 F",
        "respiratoryRate": "16 /min",
        "spo2": "99% on room air",
        "systemicExam": "Normal cardiopulmonary examination.",
        "localExam": "Right groin puncture clean and dry; right flank tenderness resolving."
      },
      "operativeSummary": "Right CFA access. Selective right renal arteriography demonstrated hypervascular lower pole mass with abnormal corkscrew vessels and microaneurysms. Coaxial 2.4F microcatheter navigated into feeding interlobar branches. Embolization performed using 300-500 um PVA particles followed by pushable microcoils. Normal upper and interpolar renal cortex successfully spared.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Tab Cefuroxime",
          "dosePower": "500 mg",
          "frequency": "BD",
          "days": 5,
          "instructions": "After meals"
        },
        {
          "sNo": 2,
          "medicine": "Tab Paracetamol + Tramadol",
          "dosePower": "325/37.5 mg",
          "frequency": "BD",
          "days": 3,
          "instructions": "For pain"
        }
      ],
      "dischargeAdvice": "1. Mild right flank discomfort may persist for a few days.\n2. Maintain good hydration (>2 L/day).\n3. Avoid contact sports or heavy lifting for 2 weeks.",
      "followUp": "Review in IR OPD in 3 weeks; repeat renal ultrasound in 3 months."
    },
    "operativeNoteData": {
      "indication": "Large symptomatic renal angiomyolipoma > 4 cm with microaneurysms.",
      "operators": "Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Right Common Femoral Artery",
      "sheath": "5F 11cm Terumo Sheath",
      "diagnosticCath": "5F Cobra C2 Catheter",
      "microCath": "2.4F Progreat Microcatheter",
      "microWire": "0.014\" Transend Wire",
      "embolicAgent": "PVA 300-500 um + 3x VortX Platinum Microcoils",
      "balloon": "N/A",
      "contrastMl": "35",
      "heparinUnits": "2000 IU",
      "findings": "Large exophytic tumor blush in right lower pole supplied by 2 distinct subsegmental renal arterial branches. Rest of kidney normal.",
      "techniqueSummary": "Cobra catheter engaged right main renal artery. 2.4F microcatheter coaxially advanced into tumor feeders. PVA particle suspension infused to stasis. Feeder trunks secured with 3 microcoils. Follow-up renal run confirmed complete devascularization of tumor blush with pristine preservation of remaining renal parenchyma.",
      "technicalSuccess": "Nephron-sparing superselective complete embolization achieved.",
      "complications": "None. No non-target embolization to normal kidney.",
      "postOpCare": "Supine bed rest for 6 hours. Monitor blood pressure and urine output."
    }
  },
  {
    "irNumber": "IR-SYN-015",
    "dsaNo": "115",
    "year": 2024,
    "month": "December",
    "monthNum": 12,
    "patientName": "Synthetic Patient 15",
    "age": "33",
    "gender": "Female",
    "crNo": "CR-SYN-015",
    "admissionNo": "ADM-SYN-015",
    "procedureName": "Hepatic Venoplasty for Budd-Chiari Syndrome",
    "procedureCategory": "Other IR",
    "diagnosis": "Membranous web obstruction of right hepatic vein causing chronic Budd-Chiari syndrome and refractory ascites",
    "scheme": "MAAY",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2024-12-05",
    "folderPath": "SYNTHETIC_ARCHIVE/2024/IR-SYN-015",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "04-12-2024",
      "dischargeDate": "07-12-2024",
      "chiefComplaints": "Progressive abdominal distension and pedal edema for 3 months.",
      "caseHistory": "A 33-year-old female with diagnosed Budd-Chiari syndrome. Hepatic venous Doppler demonstrated ostial membranous web of right hepatic vein with high pressure gradient (18 mmHg) between vein and IVC. Hepatic venoplasty was planned.",
      "physicalExam": {
        "bloodPressure": "116/76 mmHg",
        "pulse": "74 bpm",
        "temperature": "98.4 F",
        "respiratoryRate": "16 /min",
        "spo2": "99% on room air",
        "systemicExam": "Moderate ascites, tender hepatomegaly.",
        "localExam": "Right internal jugular puncture site clean, no hematoma."
      },
      "operativeSummary": "Right IJV access. Right hepatic vein engaged and web traversed with 0.035\" stiff Glidewire. Balloon venoplasty performed using 10 mm x 40 mm and 12 mm x 40 mm high-pressure balloons. Pressure gradient between RHV and IVC dropped from 18 mmHg to 2 mmHg. Brisk antegrade venous drainage restored.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Tab Warfarin",
          "dosePower": "5 mg",
          "frequency": "OD",
          "days": 30,
          "instructions": "Target INR 2.0 - 3.0"
        },
        {
          "sNo": 2,
          "medicine": "Tab Spironolactone",
          "dosePower": "50 mg",
          "frequency": "OD",
          "days": 14,
          "instructions": "Morning"
        }
      ],
      "dischargeAdvice": "1. Monitor INR weekly.\n2. Maintain consistent dietary vitamin K intake.\n3. Report promptly if any unusual bleeding or jaundice occurs.",
      "followUp": "Review in IR OPD in 2 weeks with INR report."
    },
    "operativeNoteData": {
      "indication": "Short-segment membranous stenosis of right hepatic vein in Budd-Chiari syndrome.",
      "operators": "Dr. Meenu Bagarhatta; Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Right Internal Jugular Vein",
      "sheath": "8F 11cm Check-Flo Sheath",
      "diagnosticCath": "5F MPA Catheter",
      "microCath": "N/A",
      "microWire": "0.035\" Stiff Terumo Glidewire",
      "embolicAgent": "None",
      "balloon": "Conquest 10mm x 40mm & 12mm x 40mm PTA Balloon",
      "contrastMl": "30",
      "heparinUnits": "3000 IU",
      "findings": "Focal web-like severe stenosis at RHV-IVC junction. Pre-dilation gradient: 18 mmHg.",
      "techniqueSummary": "Transjugular cannulation of RHV. Guidewire crossed web into distal vein. Balloon dilation performed up to 18 atm until waist disappeared. Post-dilation venogram confirmed wide patency with post-dilation gradient of 2 mmHg.",
      "technicalSuccess": "Technical Success Achieved with complete resolution of hemodynamic gradient.",
      "complications": "None. No venous rupture.",
      "postOpCare": "Monitor vitals and abdominal girth. Continue systemic anticoagulation."
    }
  },
  {
    "irNumber": "IR-SYN-016",
    "dsaNo": "116",
    "year": 2024,
    "month": "November",
    "monthNum": 11,
    "patientName": "Synthetic Patient 16",
    "age": "68",
    "gender": "Male",
    "crNo": "CR-SYN-016",
    "admissionNo": "ADM-SYN-016",
    "procedureName": "Upper GI Bleed Embolization (Gastroduodenal Artery)",
    "procedureCategory": "Other IR",
    "diagnosis": "Refractory peptic ulcer bleed with massive hematemesis and failed endoscopic clipping",
    "scheme": "MAAY",
    "unitOrWard": "IR ICU",
    "procedureDate": "2024-11-22",
    "folderPath": "SYNTHETIC_ARCHIVE/2024/IR-SYN-016",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "21-11-2024",
      "dischargeDate": "25-11-2024",
      "chiefComplaints": "Massive hematemesis (800 mL) and melena with hemodynamic instability.",
      "caseHistory": "A 68-year-old male with duodenal bulb ulcer (Forrest Ia) failing two endoscopic clipping attempts. Patient required 4 units of PRBC transfusion. Emergency angiography requested for transcatheter arterial embolization.",
      "physicalExam": {
        "bloodPressure": "112/68 mmHg (post-resuscitation)",
        "pulse": "86 bpm",
        "temperature": "98.4 F",
        "respiratoryRate": "18 /min",
        "spo2": "98% on 2 L O2",
        "systemicExam": "Epigastric tenderness, pallor present, chest clear.",
        "localExam": "Right groin puncture dressing dry, distal pedal pulses intact."
      },
      "operativeSummary": "Emergency right CFA access. Celiac arteriography demonstrated active contrast extravasation from gastroduodenal artery (GDA) into duodenal lumen. Superselective microcatheterization of GDA performed. GDA trunk occluded both distally and proximally using microcoils (sandwich technique) to prevent retrograde filling via SMA arcade. Immediate cessation of extravasation documented.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Inj Pantoprazole",
          "dosePower": "40 mg",
          "frequency": "BD",
          "days": 3,
          "instructions": "IV followed by oral 40 mg OD"
        },
        {
          "sNo": 2,
          "medicine": "Tab Sucralfate",
          "dosePower": "1 g",
          "frequency": "QID",
          "days": 14,
          "instructions": "1 hour before meals and at bedtime"
        }
      ],
      "dischargeAdvice": "1. Strictly avoid NSAIDs and blood thinners unless reviewed by cardiologist.\n2. Report immediately if dark stools or vomiting occurs.",
      "followUp": "Review in IR / GI OPD in 2 weeks with repeat hemoglobin."
    },
    "operativeNoteData": {
      "indication": "Life-threatening non-variceal upper GI bleeding refractory to endoscopic therapy.",
      "operators": "Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Right Common Femoral Artery",
      "sheath": "5F 11cm Cordis Sheath",
      "diagnosticCath": "5F Cobra C2 Catheter",
      "microCath": "2.4F Progreat Microcatheter",
      "microWire": "0.014\" Transend Microwire",
      "embolicAgent": "Fibered Microcoils (3mm x 14cm, 4mm x 14cm)",
      "balloon": "N/A",
      "contrastMl": "45",
      "heparinUnits": "None (active bleeding)",
      "findings": "Active jet-like contrast extravasation into first part of duodenum originating from right gastroepiploic / pancreaticoduodenal branches of GDA.",
      "techniqueSummary": "Celiac axis engaged. Microcatheter navigated deep into GDA beyond bleeding vessel. Distal branches coiled first, followed by coiling proximal to bleeding source up to hepatic artery takeoff. SMA run confirmed no retrograde collateral refilling.",
      "technicalSuccess": "Complete Hemostatic Sandwich Embolization of GDA.",
      "complications": "None. No hepatic or duodenal ischemia.",
      "postOpCare": "Strict ICU care. Monitor hemoglobin every 6 hours for 24 hours."
    }
  },
  {
    "irNumber": "IR-SYN-017",
    "dsaNo": "117",
    "year": 2024,
    "month": "October",
    "monthNum": 10,
    "patientName": "Synthetic Patient 17",
    "age": "66",
    "gender": "Male",
    "crNo": "CR-SYN-017",
    "admissionNo": "ADM-SYN-017",
    "procedureName": "Peripheral Lower Limb Angioplasty (SFA Stenting)",
    "procedureCategory": "Other IR",
    "diagnosis": "Peripheral Arterial Disease (Fontaine Stage IIb / Rutherford Category 3) with severe lifestyle-limiting claudication (<50 meters)",
    "scheme": "RGHS",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2024-10-18",
    "folderPath": "SYNTHETIC_ARCHIVE/2024/IR-SYN-017",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "17-10-2024",
      "dischargeDate": "19-10-2024",
      "chiefComplaints": "Severe cramping right calf pain occurring after walking 50 meters, relieved only by 10 minutes of rest.",
      "caseHistory": "A 66-year-old diabetic hypertensive male with severe right lower limb claudication. Ankle-Brachial Index (ABI) was 0.52 on right side. CT angiography revealed a 9 cm occlusion of the mid-to-distal right superficial femoral artery (SFA).",
      "physicalExam": {
        "bloodPressure": "130/82 mmHg",
        "pulse": "70 bpm",
        "temperature": "98.4 F",
        "respiratoryRate": "16 /min",
        "spo2": "99% on room air",
        "systemicExam": "Normal cardiopulmonary examination.",
        "localExam": "Right pedal pulses (dorsalis pedis and posterior tibial) strong and palpable post-procedure; right foot warm."
      },
      "operativeSummary": "Contralateral left CFA crossover access. 6F 45cm Destination sheath positioned in right common femoral artery. 9 cm SFA chronic total occlusion crossed subintimally with 0.035\" Glidewire and Kumpe catheter. Pre-dilation with 5 mm x 100 mm balloon followed by deployment of 6 mm x 100 mm self-expanding nitinol stent (EverFlex). Post-dilation performed with 6 mm balloon. Full in-line flow to foot restored.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Tab Clopidogrel",
          "dosePower": "75 mg",
          "frequency": "OD",
          "days": 90,
          "instructions": "With food"
        },
        {
          "sNo": 2,
          "medicine": "Tab Aspirin",
          "dosePower": "75 mg",
          "frequency": "OD",
          "days": 90,
          "instructions": "After lunch"
        },
        {
          "sNo": 3,
          "medicine": "Tab Cilostazol",
          "dosePower": "100 mg",
          "frequency": "BD",
          "days": 30,
          "instructions": "30 min before meals"
        }
      ],
      "dischargeAdvice": "1. Dual antiplatelet therapy (Aspirin + Clopidogrel) is strictly mandatory.\n2. Daily structured walking program.\n3. Keep puncture site dry for 48 hours.",
      "followUp": "Review in IR Vascular OPD in 4 weeks with ABI measurement."
    },
    "operativeNoteData": {
      "indication": "Severe right SFA occlusion causing disabling claudication.",
      "operators": "Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Contralateral Left Common Femoral Artery (Crossover)",
      "sheath": "6F 45cm Terumo Destination Guiding Sheath",
      "diagnosticCath": "4F Kumpe Catheter",
      "microCath": "N/A",
      "microWire": "0.035\" Terumo Glidewire 260cm & 0.018\" SteelCore Wire",
      "embolicAgent": "None",
      "balloon": "Mustang 5mm x 100mm & 6mm x 80mm PTA Balloon",
      "contrastMl": "50",
      "heparinUnits": "5000 IU",
      "findings": "9 cm flush occlusion of right mid SFA with reconstitution of distal SFA above adductor canal. 2-vessel runoff to foot (PTA and Peroneal).",
      "techniqueSummary": "Crossover sheath placed over aortic bifurcation into right CFA. Subintimal track developed and re-entry achieved into true lumen of distal SFA. Predilated at 10 atm. 6mm x 100mm EverFlex nitinol stent deployed and post-dilated. Completion angiogram showed zero residual stenosis with immediate capillary blush in right foot.",
      "technicalSuccess": "Complete Revascularization of SFA with palpable distal pulses.",
      "complications": "None. No distal embolization.",
      "postOpCare": "Bed rest with left leg straight for 6 hours. Hourly monitoring of pedal pulses."
    }
  },
  {
    "irNumber": "IR-SYN-018",
    "dsaNo": "118",
    "year": 2024,
    "month": "September",
    "monthNum": 9,
    "patientName": "Synthetic Patient 18",
    "age": "61",
    "gender": "Female",
    "crNo": "CR-SYN-018",
    "admissionNo": "ADM-SYN-018",
    "procedureName": "Bilateral Biliary SEMS Placement",
    "procedureCategory": "PTBD / Biliary SEMS",
    "diagnosis": "Bismuth Type IV Hilar Cholangiocarcinoma with bilateral lobar biliary isolation and cholangitis",
    "scheme": "MAAY",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2024-09-24",
    "folderPath": "SYNTHETIC_ARCHIVE/2024/IR-SYN-018",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "22-09-2024",
      "dischargeDate": "27-09-2024",
      "chiefComplaints": "High fever with chills, severe jaundice, and right hypochondrial pain.",
      "caseHistory": "A 61-year-old female with advanced Bismuth IV Klatskin tumor involving right and left hepatic ducts beyond secondary radicles. Bilateral percutaneous biliary intervention indicated to achieve adequate liver parenchymal drainage (>50%).",
      "physicalExam": {
        "bloodPressure": "118/74 mmHg",
        "pulse": "82 bpm",
        "temperature": "98.6 F",
        "respiratoryRate": "16 /min",
        "spo2": "98% on room air",
        "systemicExam": "Icterus ++, abdomen soft, liver mildly enlarged.",
        "localExam": "Bilateral mid-axillary puncture sites clean and dry; internal drainage functioning."
      },
      "operativeSummary": "Dual percutaneous access via right and left hepatic duct radicles. Bilateral strictures negotiated into common bile duct and duodenum. Y-configuration bilateral self-expanding metallic stents (SEMS) successfully deployed (Right: 10 mm x 80 mm; Left: 10 mm x 60 mm). Bilateral free transpapillary contrast clearance confirmed.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Tab Cefixime",
          "dosePower": "200 mg",
          "frequency": "BD",
          "days": 7,
          "instructions": "After meals"
        },
        {
          "sNo": 2,
          "medicine": "Tab Ursodeoxycholic Acid",
          "dosePower": "300 mg",
          "frequency": "BD",
          "days": 14,
          "instructions": "With food"
        }
      ],
      "dischargeAdvice": "1. Monitor temperature daily.\n2. Maintain adequate fluid intake.\n3. Return immediately if fever or jaundice returns.",
      "followUp": "Review in IR OPD in 10 days with LFT."
    },
    "operativeNoteData": {
      "indication": "Bismuth Type IV malignant hilar biliary obstruction for bilateral stenting.",
      "operators": "Dr. Meenu Bagarhatta; Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Bilateral: Right 10th ICS and Left subxiphoid access",
      "sheath": "8F 11cm Introducer Sheaths (x2)",
      "diagnosticCath": "4F Kumpe & Torcon Catheters",
      "microCath": "N/A",
      "microWire": "0.035\" Stiff Terumo Glidewires & Amplatz Super Stiff Wires",
      "embolicAgent": "None",
      "balloon": "Mustang 8mm x 40mm PTA Balloon",
      "contrastMl": "40",
      "heparinUnits": "None",
      "findings": "Severe bilateral secondary biliary branch separation by infiltrative confluence tumor.",
      "techniqueSummary": "Punctured right anterior duct and left lateral duct under ultrasound. Both systems negotiated across tight hilar stricture into duodenum. Balloon predilation performed. Deployed bilateral uncovered SEMS in Y-configuration. Excellent flow documented.",
      "technicalSuccess": "Successful Bilateral Biliary SEMS Placement with complete internal drainage.",
      "complications": "None. No hemobilia.",
      "postOpCare": "Monitor vitals and abdominal tenderness. Check bilirubin trend at 48 hours."
    }
  },
  {
    "irNumber": "IR-SYN-019",
    "dsaNo": "119",
    "year": 2024,
    "month": "August",
    "monthNum": 8,
    "patientName": "Synthetic Patient 19",
    "age": "45",
    "gender": "Male",
    "crNo": "CR-SYN-019",
    "admissionNo": "ADM-SYN-019",
    "procedureName": "Ultrasound-guided Liver Abscess Drainage (PCD)",
    "procedureCategory": "PCD / Abscess Drainage",
    "diagnosis": "Large liquefied pyogenic liver abscess in Segment VII/VIII (9.5 x 8.0 cm) with impending rupture",
    "scheme": "GENERAL",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2024-08-14",
    "folderPath": "SYNTHETIC_ARCHIVE/2024/IR-SYN-019",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "13-08-2024",
      "dischargeDate": "17-08-2024",
      "chiefComplaints": "High grade fever with rigors, right upper quadrant pain, and malaise for 10 days.",
      "caseHistory": "A 45-year-old male presenting with toxic fever. Abdominal ultrasound revealed a 9.5 cm liquefied collection in right liver lobe. Percutaneous catheter drainage was performed under ultrasound guidance.",
      "physicalExam": {
        "bloodPressure": "120/78 mmHg",
        "pulse": "84 bpm",
        "temperature": "99.0 F",
        "respiratoryRate": "18 /min",
        "spo2": "99% on room air",
        "systemicExam": "Tender hepatomegaly, lungs clear.",
        "localExam": "Right 9th ICS catheter draining anchovy-sauce purulent fluid, tube secured with 2-0 silk."
      },
      "operativeSummary": "Under local anesthesia and real-time ultrasound guidance, right liver lobe abscess accessed via 9th intercostal space. 12F locking pigtail catheter placed. 450 mL thick pus drained immediately and sent for Gram stain and culture.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Inj Ceftriaxone",
          "dosePower": "1 g",
          "frequency": "BD",
          "days": 5,
          "instructions": "Slow IV followed by oral"
        },
        {
          "sNo": 2,
          "medicine": "Tab Metronidazole",
          "dosePower": "400 mg",
          "frequency": "TDS",
          "days": 10,
          "instructions": "After meals"
        }
      ],
      "dischargeAdvice": "1. Flush catheter with 10 mL sterile saline daily.\n2. Keep drainage bag connected to gravity.\n3. Return if tube dislodges or fever persists.",
      "followUp": "Review in IR OPD in 1 week with repeat ultrasound."
    },
    "operativeNoteData": {
      "indication": "Large pyogenic liver abscess > 5 cm with high risk of rupture.",
      "operators": "Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Right 9th intercostal space mid-axillary line",
      "sheath": "N/A (Tandem Dilators)",
      "diagnosticCath": "N/A",
      "microCath": "N/A",
      "microWire": "0.035\" J-tip Glidewire",
      "embolicAgent": "None",
      "balloon": "N/A",
      "contrastMl": "10 (dilute)",
      "heparinUnits": "None",
      "findings": "9.5 cm thick-walled abscess cavity in segments VII/VIII.",
      "techniqueSummary": "Ultrasound guidance used for 18G trochar puncture. Aspirated thick pus. Wire coiled inside cavity. Dilated to 12F. 12F Cook locking pigtail catheter placed. Flushed until clear.",
      "technicalSuccess": "Successful 12F PCD placement with 450 mL evacuation.",
      "complications": "None. No pneumothorax or hemoperitoneum.",
      "postOpCare": "Connect to drainage bag. Monitor vital signs every 4 hours."
    }
  },
  {
    "irNumber": "IR-SYN-020",
    "dsaNo": "120",
    "year": 2024,
    "month": "July",
    "monthNum": 7,
    "patientName": "Synthetic Patient 20",
    "age": "59",
    "gender": "Male",
    "crNo": "CR-SYN-020",
    "admissionNo": "ADM-SYN-020",
    "procedureName": "Diagnostic Carotid & Cerebral Angiography (4-Vessel DSA)",
    "procedureCategory": "Diagnostic Angiography (DSA)",
    "diagnosis": "Recurrent left hemisphere transient ischemic attacks (TIAs) with suspected high-grade internal carotid artery stenosis",
    "scheme": "RGHS",
    "unitOrWard": "Old Gastro IR Ward",
    "procedureDate": "2024-07-15",
    "folderPath": "SYNTHETIC_ARCHIVE/2024/IR-SYN-020",
    "filesAvailable": [
      "BHT.pdf",
      "REPORT.pdf"
    ],
    "hasDischargeCard": true,
    "hasOperativeNote": true,
    "dischargeData": {
      "admissionDate": "14-07-2024",
      "dischargeDate": "16-07-2024",
      "chiefComplaints": "Two episodes of transient right arm weakness and expressive speech arrest lasting 10-15 minutes.",
      "caseHistory": "A 59-year-old male with hypertension and hyperlipidemia presenting with crescendo TIAs. Carotid Doppler suggested >70% left internal carotid artery (ICA) stenosis. Confirmatory 4-vessel cerebral DSA performed for carotid endarterectomy vs stenting evaluation.",
      "physicalExam": {
        "bloodPressure": "134/82 mmHg",
        "pulse": "72 bpm",
        "temperature": "98.4 F",
        "respiratoryRate": "16 /min",
        "spo2": "99% on room air",
        "systemicExam": "Normal neurological examination, left carotid bruit audible.",
        "localExam": "Right groin puncture clean and dry, strong pedal pulses."
      },
      "operativeSummary": "Right CFA access. Selective 4-vessel angiography (bilateral common, internal, and external carotid arteries, and left vertebral artery). Demonstrated 75% NASCET ulcerated eccentric stenosis at origin of left ICA. Intracranial circulation demonstrated patent anterior and posterior communicating collateral channels.",
      "medications": [
        {
          "sNo": 1,
          "medicine": "Tab Aspirin",
          "dosePower": "75 mg",
          "frequency": "OD",
          "days": 30,
          "instructions": "After lunch"
        },
        {
          "sNo": 2,
          "medicine": "Tab Atorvastatin",
          "dosePower": "40 mg",
          "frequency": "HS",
          "days": 30,
          "instructions": "At bedtime"
        }
      ],
      "dischargeAdvice": "1. Continue dual antiplatelet and statin therapy without interruption.\n2. Avoid sudden neck rotation.\n3. Return immediately if any focal weakness or speech difficulty occurs.",
      "followUp": "Review in IR / Neurosurgery OPD in 1 week for carotid revascularization planning."
    },
    "operativeNoteData": {
      "indication": "Symptomatic carotid stenosis for revascularization roadmap.",
      "operators": "Dr. Naresh Mangalhara; Dr. Neel Yadav",
      "accessSite": "Right Common Femoral Artery",
      "sheath": "5F 11cm Cordis Sheath",
      "diagnosticCath": "5F Headhunter (H1) & Simmons 2 Catheters",
      "microCath": "N/A",
      "microWire": "0.035\" Terumo Glidewire 260cm",
      "embolicAgent": "None (Diagnostic study)",
      "balloon": "N/A",
      "contrastMl": "45",
      "heparinUnits": "3000 IU",
      "findings": "75% NASCET-measured stenosis at left ICA bulb with irregular ulcerated plaque. Right carotid and vertebrobasilar systems intact.",
      "techniqueSummary": "5F sheath placed in right CFA. Diagnostic catheters navigated sequentially into bilateral CCA and left vertebral artery. Magnified high-speed biplane DSA performed in AP, lateral, and oblique views.",
      "technicalSuccess": "Complete diagnostic cerebral angiographic survey successfully accomplished.",
      "complications": "None. No embolic events or neurological changes.",
      "postOpCare": "Flat supine bed rest for 4 hours. Neurological checks every 30 minutes for 4 hours."
    }
  }
];
