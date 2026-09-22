import { ProcedureBlueprint } from '../../types/clinical';

/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 *
 * Master Catalog of 104 Non-Vascular Procedures:
 * - Category 1: Image-Guided Percutaneous Biopsies & Cytology (Procedures 1 to 53)
 * - Category 2: Catheter Drainages, Fluid Aspiration & Stenting (Procedures 54 to 91)
 * - Category 20: Gastrointestinal & Enteric Interventions (Procedures 92 to 104)
 */

export const NON_VASCULAR_BIOPSY_PROCEDURES: ProcedureBlueprint[] = [
  {
    "id": "usg-liver-biopsy-parenchymal",
    "name": "Ultrasound-Guided Liver Biopsy (Non-targeted Parenchymal / Medical Liver)",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV001",
    "rghsCode": "693 / 41",
    "icd10": "K76.0 (Fatty liver) / K74.60 (Unspecified cirrhosis of liver)",
    "indications": [
      "Histological staging of chronic hepatitis B or C infection",
      "Evaluation of unexplained elevated transaminases / abnormal liver enzymes",
      "Diagnosis and grading of non-alcoholic steatohepatitis (NASH / MASH)",
      "Assessment of autoimmune hepatitis, primary biliary cholangitis, or metabolic storage disease"
    ],
    "preOpCriteria": [
      "Coagulation screen within 48h: INR <= 1.4, Platelets >= 60,000/uL",
      "Hemoglobin >= 9.0 g/dL; blood group and crossmatch confirmed",
      "Fasting for at least 4 hours prior to elective procedure",
      "Pre-procedure abdominal ultrasound ruling out gross ascites along needle trajectory"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "16G / 18G Menghini / Tru-Cut Core Biopsy Needle",
        "spec": "15 cm length, automated spring-loaded with 20 mm notch",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "Curvilinear Ultrasound Probe with Needle Guide",
        "spec": "3.5 - 5.0 MHz with multi-angle biopsy bracket",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "20 mL vial (preservative-free)",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Histopathology Formalin Container",
        "spec": "10% neutral buffered formalin container with pre-printed labels",
        "standardStore": "Pathology Receiving Counter"
      }
    ],
    "techniqueSteps": [
      "Perform preliminary right upper quadrant ultrasonography to identify segment VI/VII away from large vessels and gallbladder.",
      "Sterilize the lateral lower intercostal or subcostal skin and drape under aseptic precautions.",
      "Infiltrate local anesthetic (10-15 mL of 2% Lignocaine) from dermis down to the liver capsule under real-time ultrasound guidance.",
      "Make a 2-mm skin nick; introduce the 16G or 18G core biopsy needle under continuous real-time acoustic visualization.",
      "Instruct the patient to hold breath at end-expiration; rapidly advance needle into liver parenchyma and trigger the cutting mechanism.",
      "Withdraw the needle swiftly, transfer specimen into 10% formalin, and confirm adequate portal tract representation (>1.5 cm core length).",
      "Scan liver capsule and subcapsular space with color Doppler for active hemorrhage or expanding hematoma.",
      "Apply sterile compression dressing; place patient in right lateral decubitus position for 2 hours of strict bed rest."
    ],
    "complications": [
      "Right upper quadrant pleuritic pain radiating to right shoulder (20-30%)",
      "Subcapsular or intrahepatic hematoma (1-3%)",
      "Significant hemoperitoneum requiring blood transfusion or transarterial embolization (<0.5%)",
      "Biliary leak or transient hemobilia (<0.2%)",
      "Pneumothorax or inadvertent pleural transgression (<0.1%)"
    ],
    "maayTariffInr": 4800,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-focal-liver-lesion-biopsy",
    "name": "Ultrasound-Guided Focal Liver Lesion Core Needle Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV002",
    "rghsCode": "693 / 41",
    "icd10": "C22.0 (Liver cell carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Characterization of focal solid hepatic mass suspicious for primary liver carcinoma (HCC / Cholangiocarcinoma)",
      "Confirmation and molecular profiling of suspected metastatic liver deposits (colorectal, breast, lung)",
      "Differentiating benign lesions (adenoma, focal nodular hyperplasia) from well-differentiated malignancy",
      "Evaluation of inconclusive multi-phase dynamic CT or contrast MRI liver findings"
    ],
    "preOpCriteria": [
      "Coagulation profile: INR <= 1.5, Platelets >= 50,000/uL",
      "Cross-sectional imaging (contrast CT / MRI) reviewed within prior 4 weeks",
      "Fasting for 4 hours; baseline vital signs documented",
      "Target lesion confirmed visible on pre-procedure bedside ultrasound with safe non-vascular acoustic window"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G Coaxial Core Biopsy System",
        "spec": "17G introducer cannula with 18G semi-automated cutting needle (15-20 cm)",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "Dedicated Abdominal Probe",
        "spec": "3.5 - 5 MHz curved array with needle guidance bracket",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "20 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Preparation",
        "name": "Formalin Vials & Glass Slides",
        "spec": "10% formalin plus glass slides for touch imprint cytology",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Scan liver to localize target focal lesion; plan needle path traversing an intervening rim of normal liver parenchyma to minimize tumor seeding.",
      "Sterilize and drape right upper abdomen or epigastrium under strict surgical asepsis.",
      "Infiltrate skin, subcutaneous tissues, and Glisson's capsule with 10-15 mL 2% Lignocaine.",
      "Advance 17G coaxial introducer needle under direct real-time sonographic guidance to the margin of the focal lesion.",
      "Remove stylet and insert 18G cutting biopsy needle through coaxial cannula into viable non-necrotic tumor margin.",
      "Fire cutting mechanism during suspended respiration; obtain 2-3 adequate core specimens through the single puncture tract.",
      "Inspect cores for fleshy viable tumor tissue and prepare optional touch imprint cytology.",
      "Perform coaxial tract embolization with gelatin sponge slurry if vascular vascularity is high; withdraw cannula and apply pressure dressing."
    ],
    "complications": [
      "Capsular or intrahepatic bleeding / hematoma (1-2%)",
      "Tumor tract seeding (<0.1% with coaxial technique)",
      "Right upper quadrant pain and vasovagal reaction (5-10%)",
      "Hemoperitoneum requiring emergency intervention (<0.5%)",
      "Inadvertent bowel or gallbladder perforation (<0.2%)"
    ],
    "maayTariffInr": 5200,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Boston Scientific India (+91 98293 45678)"
    ]
  },
  {
    "id": "usg-liver-transplant-biopsy",
    "name": "Ultrasound-Guided Liver Allograft / Transplant Protocol Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV003",
    "rghsCode": "693 / 41",
    "icd10": "T86.41 (Liver transplant rejection) / T86.49 (Other complications of liver transplant)",
    "indications": [
      "Investigation of acute liver allograft dysfunction (elevated LFTs, hyperbilirubinemia)",
      "Differentiation between acute cellular rejection, ischemic cholangiopathy, and CMV infection",
      "Protocol surveillance biopsy at 1, 3, or 5 years post-transplantation",
      "Evaluation of recurrence of primary disease (HCV, NASH, autoimmune hepatitis) in graft"
    ],
    "preOpCriteria": [
      "Platelets >= 50,000/uL, INR <= 1.5 (correct with fresh frozen plasma or platelets if required)",
      "Doppler ultrasound confirming patency of hepatic artery, portal vein, and hepatic veins",
      "Fasting for 4 hours; blood pressure well controlled (<140/90 mmHg)",
      "Exclusion of biliary dilation or perihepatic fluid collection along planned trajectory"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G Automated Core Biopsy Needle",
        "spec": "15 cm length, 15-20 mm throw, echogenic tip",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Resolution Vascular/Abdominal Probe",
        "spec": "3.5 - 6.0 MHz broadband curved probe",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "10 mL ampoule",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Transplant Histology & Electron Microscopy Vials",
        "spec": "Formalin vial and glutaraldehyde/Michel medium",
        "standardStore": "Transplant Coordinator Store"
      }
    ],
    "techniqueSteps": [
      "Review transplant anatomy (subcostal scar, organ orientation, vascular anastomosis).",
      "Perform comprehensive Doppler scan verifying hepatic artery resistive index (0.55-0.75) and unobstructed outflow.",
      "Identify an accessible peripheral zone of the transplant liver (segment V or VI) away from hilar vascular anastomoses.",
      "Sterilize the right hypochondrium and administer 10 mL 2% Lignocaine down to allograft capsule.",
      "Introduce 18G biopsy needle under continuous real-time US monitoring tangential to capsule avoiding deep hilar vessels.",
      "Fire needle to obtain 1-2 core specimens with at least 10 complete portal tracts.",
      "Examine graft capsule with color Doppler for active bleeding; apply direct manual pressure over entry site for 10 minutes.",
      "Maintain strict bed rest for 4-6 hours with hourly blood pressure and pulse monitoring."
    ],
    "complications": [
      "Allograft subcapsular hematoma (2-4%)",
      "Significant intraperitoneal bleeding requiring transfusion (<1%)",
      "Hepatic artery pseudoaneurysm or arteriovenous fistula (<0.5%)",
      "Bile leak or peritonitis (<0.2%)",
      "Vasovagal syncope or transient hypotension (3-5%)"
    ],
    "maayTariffInr": 6500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-liver-abscess-infiltrative-biopsy",
    "name": "Ultrasound-Guided Liver Abscess Wall / Infiltrative Mass Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV004",
    "rghsCode": "693 / 41",
    "icd10": "K75.0 (Abscess of liver) / C22.9 (Malignant neoplasm of liver, unspecified)",
    "indications": [
      "Atypical cystic-necrotic liver lesion unresponsive to standard antimicrobial therapy",
      "Differentiating chronic pyogenic / tubercular liver abscess from necrotic cholangiocarcinoma or necrotic metastasis",
      "Sampling thickened nodular abscess wall or enhancing septa",
      "Microbiological culture and histopathological confirmation of fungal or mycobacterial hepatic granulomas"
    ],
    "preOpCriteria": [
      "Coagulation status: INR <= 1.5, Platelets >= 50,000/uL",
      "Broad-spectrum IV antibiotic coverage administered pre-procedure",
      "Fasting for 4 hours; baseline hemodynamic stability verified",
      "US/CT review showing accessible thickened peripheral wall away from central liquefaction"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G Coaxial Core Biopsy System",
        "spec": "17G outer cannula with 18G semi-automated core needle",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "Curvilinear Abdominal Probe",
        "spec": "3.5 - 5.0 MHz with puncture guidance line",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "15 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lab Supplies",
        "name": "Sterile Culture Bottles & Formalin Container",
        "spec": "Aerobic/anaerobic, fungal, AFB GeneXpert vials + formalin",
        "standardStore": "Microbiology Collection Unit"
      }
    ],
    "techniqueSteps": [
      "Sonographically survey the necrotic mass; identify the thickest viable non-liquefied mural nodule or rim.",
      "Aseptically clean and drape the abdominal wall overlying the selected puncture site.",
      "Infiltrate 2% Lignocaine into skin, subcutaneous fat, and parietal peritoneum.",
      "Introduce 17G coaxial introducer needle targeting the solid peripheral wall under real-time acoustic control.",
      "Aspirate any high-pressure purulent fluid first to decompress cavity, sending aspirate for bacterial/mycobacterial PCR.",
      "Pass 18G core needle through coaxial sheath and fire across the enhancing wall or solid septations.",
      "Obtain 2-3 core tissue samples for histology, AFB stain, GeneXpert, and fungal culture.",
      "Optionally instill 1-2 mL of antibiotic solution through the sheath; remove needle and apply sterile compression dressing."
    ],
    "complications": [
      "Transient bacteremia or post-procedure rigors / fever spike (5-10%)",
      "Intrahepatic bleeding or hematoma (1-3%)",
      "Peritoneal spillage causing localized peritonitis (<1%)",
      "Pain requiring intravenous analgesia (10-15%)",
      "Sample showing non-diagnostic necrotic debris (<8%)"
    ],
    "maayTariffInr": 5000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Merit Medical Systems (+91 98294 56789)"
    ]
  },
  {
    "id": "tglb-transjugular-liver-biopsy",
    "name": "Transjugular Liver Biopsy (TGLB)",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV005",
    "rghsCode": "693 / 36",
    "icd10": "K74.60 (Unspecified cirrhosis) / R58 (Hemorrhage, not elsewhere classified)",
    "indications": [
      "Liver biopsy in patients with severe coagulopathy (INR > 1.5, Platelets < 50,000/uL)",
      "Presence of moderate-to-severe ascites precluding percutaneous transthoracic access",
      "Morbid obesity, mechanical ventilation, or small shrunken cirrhotic liver",
      "Simultaneous measurement of Hepatic Venous Pressure Gradient (HVPG) and liver histology"
    ],
    "preOpCriteria": [
      "Coagulation profile reviewed; blood products on standby",
      "Fasting 4-6 hours; patient lying comfortably in supine position",
      "Ultrasound documentation of patent right internal jugular vein (RIJV)",
      "Renal panel and contrast allergy history documented"
    ],
    "hardware": [
      {
        "category": "TGLB Set",
        "name": "Cook Quick-Core / LABS Transjugular Liver Biopsy Set",
        "spec": "7F x 50-60 cm sheath with 18G/19G x 60 cm spring-loaded biopsy needle",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Vascular Access",
        "name": "7F Vascular Introducer Sheath",
        "spec": "11 cm sheath with 0.035-inch J-wire and 18G/21G needle",
        "standardStore": "Cath Lab Access Cabinet"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F MPA / Cobra / Rosch Catheter",
        "spec": "65-100 cm length",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Manometry Line",
        "name": "Electronic Pressure Transducer Kit",
        "spec": "Calibrated pressure line for HVPG recording",
        "standardStore": "Cath Lab Bio-Station"
      }
    ],
    "techniqueSteps": [
      "Under ultrasound guidance, cannulate right internal jugular vein and place 7F vascular sheath.",
      "Advance 0.035 guidewire and 5F catheter through SVC and right atrium into inferior vena cava (IVC).",
      "Select right (or middle) hepatic vein under fluoroscopy; obtain free hepatic venous pressure (FHVP).",
      "Advance catheter into wedged position (or inflate balloon) to measure wedged hepatic venous pressure (WHVP); calculate HVPG (WHVP - FHVP).",
      "Exchange for 7F curved guiding sheath placed deeply into the right hepatic vein pointing anteriorly and inferiorly.",
      "Perform hepatic venogram to confirm position well within liver parenchyma and rule out capsular proximity.",
      "Advance 18G/19G Quick-Core needle through sheath, instruct patient to hold breath, and deploy needle into anterior parenchyma.",
      "Aspirate and retrieve core; repeat for 2-3 passes until sufficient portal tracts obtained; perform post-biopsy venogram verifying no extravasation."
    ],
    "complications": [
      "Transient cardiac arrhythmias during atrial catheter transit (5-10%, benign)",
      "Liver capsule perforation and hemoperitoneum (<1-2%)",
      "Hepatic hematoma or intrahepatic vascular injury (1-2%)",
      "Neck puncture site hematoma or pseudoaneurysm (<1%)",
      "Transient hemobilia (<0.5%)"
    ],
    "maayTariffInr": 35000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "usg-native-kidney-biopsy",
    "name": "Ultrasound-Guided Native Kidney Biopsy (Cortical Core)",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV006",
    "rghsCode": "693 / 41",
    "icd10": "N04.9 (Nephrotic syndrome) / N17.9 (Acute kidney failure)",
    "indications": [
      "Unexplained nephrotic syndrome or persistent heavy proteinuria (>1-2 g/day)",
      "Rapidly progressive glomerulonephritis (RPGN) or unexplained acute kidney injury",
      "Systemic lupus erythematosus (SLE) nephritis staging (ISN/RPS classification)",
      "Unexplained hematuria with impaired renal filtration"
    ],
    "preOpCriteria": [
      "Strict blood pressure control (target < 140/90 mmHg, preferably < 130/80 mmHg)",
      "Coagulation parameters: INR <= 1.3, Platelets >= 100,000/uL, normal bleeding time",
      "Pre-procedure ultrasound documenting two functioning kidneys of normal size (>9 cm) and ruling out hydronephrosis",
      "Fasting for 4 hours; crossmatched blood available on call"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "16G / 18G Automated Spring-Loaded Renal Biopsy Needle",
        "spec": "16G x 15 cm, 15-20 mm excursion depth, echogenic tip",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "Curvilinear High-Resolution Probe",
        "spec": "3.5 - 5.0 MHz with needle guide bracket",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "20 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Renal Biopsy Kit",
        "name": "Renal Pathology Specimen Vials",
        "spec": "Formalin (Light Microscopy), Glutaraldehyde (Electron Microscopy), Michel's media (Immunofluorescence)",
        "standardStore": "Nephrology Procedure Cart"
      }
    ],
    "techniqueSteps": [
      "Position the patient prone with a firm sandbag/pillow under abdomen to flatten lumbar lordosis.",
      "Sonographically identify the lower pole of the left kidney (preferred for mobility and safety).",
      "Verify adequate cortical thickness (>12 mm) and observe respiratory excursion.",
      "Prep and drape the flank; administer 10-15 mL 2% Lignocaine from skin to renal capsule under direct vision.",
      "Make small dermatotomy; introduce 16G or 18G automated needle down to the renal capsule targeting the lower pole cortex.",
      "Instruct patient to hold breath at mid-inspiration; advance needle through capsule into renal cortex and trigger firing mechanism.",
      "Withdraw needle immediately; separate cores under dissecting loupe/stereomicroscope to confirm glomeruli count (>10-15 glomeruli).",
      "Divide cores into formalin, Michel's media, and glutaraldehyde; scan lower pole with color Doppler for hematoma, then maintain supine bed rest for 6 hours."
    ],
    "complications": [
      "Microscopic hematuria (expected, 90-95%)",
      "Macroscopic (gross) hematuria (2-5%, resolves spontaneously)",
      "Perirenal or subcapsular hematoma (5-10%, usually asymptomatic)",
      "Major hemorrhage requiring blood transfusion or transarterial renal embolization (<1%)",
      "Arteriovenous fistula or renal pseudoaneurysm (<0.5%)"
    ],
    "maayTariffInr": 5500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-renal-transplant-biopsy",
    "name": "Ultrasound-Guided Renal Allograft / Transplant Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV007",
    "rghsCode": "693 / 41",
    "icd10": "T86.11 (Kidney transplant rejection) / T86.19 (Other kidney transplant complications)",
    "indications": [
      "Deteriorating renal allograft function (rising serum creatinine post-transplant)",
      "Distinction between acute cellular rejection, antibody-mediated rejection (ABMR), and CNI nephrotoxicity",
      "Polyomavirus (BK virus) nephropathy or CMV nephritis assessment",
      "Protocol surveillance biopsy in sensitized or high-immunological risk transplant recipients"
    ],
    "preOpCriteria": [
      "Coagulation screen: INR <= 1.3, Platelets >= 80,000/uL",
      "Blood pressure strictly normalized (< 130/80 mmHg) to reduce post-biopsy bleed risk",
      "Pre-biopsy Doppler scan verifying patent renal transplant artery, vein, and absence of hydronephrosis",
      "Patient fasting 3-4 hours; informed written consent obtained"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "16G / 18G Automated Core Biopsy Needle",
        "spec": "11-15 cm length, 15 mm throw, echogenic bevel",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Frequency Linear / Curved Probe",
        "spec": "5 - 7.5 MHz linear or 3.5 - 5 MHz curved",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "10 mL ampoule",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Media",
        "name": "Triple Transplant Histology Media",
        "spec": "Formalin (LM), Michel's (IF: C4d stain), Glutaraldehyde (EM)",
        "standardStore": "Transplant Coordinator Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine; locate the transplanted kidney in the right or left iliac fossa.",
      "Perform Doppler imaging to identify the renal cortex of the upper pole, away from the renal hilum, ureter, and iliac vessels.",
      "Sterilize the iliac fossa and drape under strict aseptic surgical conditions.",
      "Infiltrate 2% Lignocaine into skin, subcutaneous layer, and allograft capsule under sonographic guidance.",
      "Advance 16G or 18G automated core needle under continuous real-time visualization tangential to the upper pole cortex.",
      "Trigger biopsy during shallow breathing; verify core sample adequacy and confirm presence of cortical tissue with glomeruli.",
      "Obtain 2 passes, dividing cores for LM, IF (specifically for C4d staining), and EM.",
      "Perform immediate color Doppler assessment of puncture tract to exclude arteriovenous fistula or active bleeding; apply pressure for 10 minutes and enforce supine bed rest for 4 hours."
    ],
    "complications": [
      "Transient microscopic/gross hematuria (2-4%)",
      "Periallograft hematoma (2-5%, mostly subclinical)",
      "Arteriovenous fistula (AVF) or allograft pseudoaneurysm (1-2%)",
      "Major hemorrhage requiring allograft exploration or embolization (<0.5%)",
      "Inadvertent laceration of adjacent colon or iliac vessels (<0.1%)"
    ],
    "maayTariffInr": 6000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-renal-mass-core-biopsy",
    "name": "Ultrasound-Guided Renal Mass Core Needle Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV008",
    "rghsCode": "693 / 41",
    "icd10": "C64.9 (Malignant neoplasm of unspecified kidney, except renal pelvis) / D41.00 (Neoplasm of uncertain behavior of kidney)",
    "indications": [
      "Histopathological characterization of solid or complex cystic renal mass prior to systemic therapy or percutaneous ablation",
      "Differentiating Renal Cell Carcinoma (RCC) subtypes (clear cell, papillary, chromophobe) from benign oncocytoma or angiomyolipoma",
      "Evaluation of suspected metastatic lesion to the kidney or primary renal lymphoma",
      "Small renal mass (cT1a < 4 cm) under active surveillance protocol in elderly or high-risk surgical candidates"
    ],
    "preOpCriteria": [
      "Coagulation parameters: INR <= 1.4, Platelets >= 60,000/uL",
      "Contrast-enhanced CT or MRI reviewed to assess tumor vascularity, necrosis, and perinephric fat invasion",
      "Fasting 4 hours; blood pressure maintained < 140/90 mmHg",
      "Target lesion clearly visualized on real-time ultrasound with safe acoustic window avoiding bowel and spleen/liver"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G Coaxial Core Biopsy System",
        "spec": "17G outer cannula with 18G semi-automated cutting needle (15 cm)",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "Curvilinear Abdominal Probe with Guide",
        "spec": "3.5 - 5.0 MHz with multi-angle needle guide",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "20 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Touch Imprint Slides",
        "spec": "10% neutral buffered formalin vials and cytology slides",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient prone or lateral decubitus; sonographically locate the renal tumor and evaluate vascularity using Color Doppler.",
      "Choose a needle trajectory that traverses a thin rim of normal renal parenchyma to promote hemostasis and prevent capsular pseudoaneurysm.",
      "Aseptically prepare and drape flank; infiltrate skin, retroperitoneal fat, and renal capsule with 15 mL 2% Lignocaine.",
      "Introduce 17G coaxial introducer needle under real-time acoustic control to the edge of the viable solid tumor mass.",
      "Remove stylet and insert 18G cutting needle through coaxial cannula into the tumor periphery, avoiding central necrotic areas.",
      "Trigger cutting needle during breath-hold; obtain 2-3 cores for histopathology and immunohistochemical profiling.",
      "Perform tract plugging with Gelfoam slurry if significant hypervascularity is noted; carefully withdraw the coaxial sheath.",
      "Scan kidney and retroperitoneum with ultrasound to verify absence of active bleed or hematoma; apply pressure dressing."
    ],
    "complications": [
      "Flank pain or local discomfort (10-15%)",
      "Perirenal or subcapsular hematoma (2-4%)",
      "Gross hematuria (1-3%, self-limiting)",
      "Major hemorrhage requiring embolization (<0.5%)",
      "Tumor tract seeding (exceedingly rare, <0.01%)"
    ],
    "maayTariffInr": 5500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "ct-renal-mass-core-biopsy",
    "name": "CT-Guided Renal Mass Core Needle Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV009",
    "rghsCode": "693 / 42",
    "icd10": "C64.9 (Malignant neoplasm of kidney) / D41.01 (Neoplasm of uncertain behavior of right kidney)",
    "indications": [
      "Small endophytic, upper pole, or deeply located renal tumors poorly visualized on ultrasound",
      "Obese patients or acoustic shadowing precluding safe ultrasound guidance",
      "Complex renal mass with intimate relationship to colon, duodenum, or spleen requiring sub-millimeter CT precision",
      "Histological confirmation prior to CT-guided cryoablation or radiofrequency ablation"
    ],
    "preOpCriteria": [
      "Coagulation profile within 48h: INR <= 1.4, Platelets >= 60,000/uL",
      "Renal function: Serum Creatinine and eGFR documented",
      "Fasting 4 hours; IV cannula placed in upper extremity",
      "Prior contrast-enhanced CT reviewed to plan patient positioning (prone, oblique, or lateral)"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G Coaxial Bone/Soft Tissue Biopsy Needle Set",
        "spec": "17G x 13-15 cm introducer with 18G semi-automated core needle",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "CT Localization",
        "name": "Radiopaque Skin Grid & Laser Marker",
        "spec": "Adhesive radio-dense grid with CT laser alignment",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "20 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Preparation",
        "name": "Formalin Vials & Saline Vials",
        "spec": "10% formalin and sterile normal saline for molecular diagnostics",
        "standardStore": "Pathology Receiving Counter"
      }
    ],
    "techniqueSteps": [
      "Position patient prone or in modified oblique position on the CT table with radiopaque grid on flank.",
      "Perform limited low-dose unenhanced (or contrast-enhanced) planning CT scan to map the renal mass and trajectory.",
      "Mark skin entry site using gantry laser lights; measure depth and angle avoiding pleura, rib, and bowel loops.",
      "Scrub, sterilize, and drape flank; infiltrate 2% Lignocaine from skin down to Gerota's fascia.",
      "Introduce 17G coaxial introducer cannula along calculated trajectory; perform check CT scan to confirm tip at tumor margin.",
      "Pass 18G automated cutting needle through cannula into viable enhancing tumor periphery.",
      "Trigger needle during suspended respiration; obtain 2-3 adequate core specimens.",
      "Perform post-biopsy non-contrast CT to check for perinephric hematoma or retroperitoneal bleeding; apply sterile dressing."
    ],
    "complications": [
      "Perirenal or subcapsular hematoma (3-6%, usually stable)",
      "Flank pain / muscular ache (10-15%)",
      "Gross hematuria (1-3%)",
      "Retroperitoneal bleed requiring intervention (<0.5%)",
      "Pneumothorax if high upper-pole lesion (<0.5%)"
    ],
    "maayTariffInr": 8500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-native-spleen-core-biopsy",
    "name": "Ultrasound-Guided Native Spleen Core Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV010",
    "rghsCode": "693 / 41",
    "icd10": "D73.89 (Other diseases of spleen) / C85.90 (Non-Hodgkin lymphoma, unspecified)",
    "indications": [
      "Splenomegaly with unexplained focal hypoechoic lesions suspicious for lymphoma",
      "Disseminated mycobacterial or fungal infection with splenic microabscesses",
      "Diagnosis of splenic sarcoidosis or non-caseating granulomatous disease",
      "Exclusion of metastatic disease in patients with known primary malignancy"
    ],
    "preOpCriteria": [
      "Coagulation profile strictly verified: INR <= 1.3, Platelets >= 80,000/uL",
      "Blood type and screen with 2 units packed red cells available on standby",
      "Pre-procedure ultrasound establishing a safe subcostal / intercostal window below pleural reflection",
      "Fasting 4 hours; patient trained in breath-holding technique"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G / 20G Coaxial Core Biopsy System",
        "spec": "19G outer introducer with 20G/18G automated cutting needle (11-15 cm)",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Resolution Curved Probe",
        "spec": "3.5 - 5 MHz curvilinear with needle guide",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "15 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Hemostatic Agent",
        "name": "Gelfoam Slurry / Torpedoes",
        "spec": "Absorbable gelatin sponge for tract embolization",
        "standardStore": "Central IR Consignment Store"
      }
    ],
    "techniqueSteps": [
      "Position patient in right lateral decubitus position to elevate the left flank and spleen.",
      "Locate splenic focal lesion using real-time sonography, selecting a tract crossing normal splenic parenchyma without traversing the costodiaphragmatic recess.",
      "Sterilize and drape left lower lateral thoracic and abdominal wall.",
      "Infiltrate 10-15 mL 2% Lignocaine into skin, intercostal space, and splenic capsule.",
      "Introduce 19G coaxial needle under real-time guidance to the splenic capsule during suspended respiration.",
      "Advance 20G/18G core biopsy needle into target lesion and trigger cutting mechanism.",
      "Obtain 1-2 core biopsies rapidly; prepare immediate slide smears and deposit cores in formalin.",
      "Deploy gelatin sponge slurry through the coaxial cannula to seal the splenic tract and prevent hemorrhage; monitor with color Doppler for 10 minutes."
    ],
    "complications": [
      "Left upper quadrant or left shoulder tip pain (15-25%)",
      "Subcapsular splenic hematoma (2-4%)",
      "Significant hemoperitoneum requiring embolization or splenectomy (<1%)",
      "Pneumothorax from pleural recess transgression (<0.5%)",
      "Inadvertent colonic laceration (<0.1%)"
    ],
    "maayTariffInr": 6000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "ct-splenic-lesion-biopsy",
    "name": "CT-Guided Splenic Lesion Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV011",
    "rghsCode": "693 / 42",
    "icd10": "D73.89 (Splenic disease) / C85.90 (Non-Hodgkin lymphoma)",
    "indications": [
      "Deep, small, or subdiaphragmatic splenic lesions not visible on ultrasonography",
      "High-risk lesion location adjacent to splenic flexure of colon or left pleural dome",
      "Obese patients with thick subcutaneous mantle where acoustic shadow obscures spleen",
      "Precise coaxial biopsy with immediate gelatin sponge tract embolization"
    ],
    "preOpCriteria": [
      "Coagulation testing: INR <= 1.3, Platelets >= 80,000/uL",
      "Hemoglobin >= 9.5 g/dL; blood crossmatched",
      "Fasting 4 hours; intravenous access secured",
      "Pre-procedure CT reviewed to define angle avoiding left pleura and splenic hilum"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "19G / 20G Coaxial Biopsy Set",
        "spec": "19G x 10-15 cm introducer with 20G automated cutting needle",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "CT Accessories",
        "name": "Radiopaque Skin Marking Grid",
        "spec": "Sterile adhesive grid",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Hemostatic Embolic",
        "name": "Gelfoam Embolic Slurry Kit",
        "spec": "Absorbable gelatin sponge with 3-way stopcock",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "20 mL vial",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient in right lateral oblique or prone position on the CT gantry.",
      "Acquire low-dose planning CT images through the upper abdomen; identify the splenic lesion.",
      "Select skin entry point below the costodiaphragmatic pleural reflection and clear of the colon.",
      "Infiltrate local anesthetic (10-15 mL 2% Lignocaine) along planned intercostal tract.",
      "Advance 19G coaxial needle toward target; verify needle tip position with volumetric CT check slices.",
      "Deploy 20G cutting needle into lesion; obtain 2 distinct core passes for histopathology and flow cytometry.",
      "Inject gelatin sponge pledgets through the coaxial cannula while withdrawing across the splenic parenchyma.",
      "Obtain completion CT scan to confirm lack of hemoperitoneum or pneumothorax; admit for 6 hours of observation."
    ],
    "complications": [
      "Splenic parenchymal hematoma (2-4%)",
      "Left flank / pleuritic pain (15-20%)",
      "Pneumothorax requiring observation (<1%)",
      "Delayed splenic bleeding requiring transcatheter embolization (<0.5%)",
      "Colonic perforation (<0.1%)"
    ],
    "maayTariffInr": 9000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-pancreatic-mass-core-biopsy",
    "name": "Ultrasound-Guided Pancreatic Mass Core Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV012",
    "rghsCode": "693 / 41",
    "icd10": "C25.9 (Malignant neoplasm of pancreas, unspecified) / D37.7 (Neoplasm of uncertain behavior of pancreas)",
    "indications": [
      "Large anteriorly located pancreatic body or tail mass readily visualized through epigastric acoustic window",
      "Confirmation of locally advanced or metastatic pancreatic adenocarcinoma prior to palliative chemotherapy",
      "Differentiating pancreatic neuroendocrine tumor (pNET) or lymphoma from adenocarcinoma",
      "Evaluation of autoimmune pancreatitis (IgG4-related disease) mass mimicking malignancy"
    ],
    "preOpCriteria": [
      "Coagulation profile: INR <= 1.4, Platelets >= 60,000/uL",
      "Fasting for at least 6 hours to minimize gastric and duodenal distension",
      "Triple-phase abdominal CT reviewed to identify relationship with celiac axis, SMA, and portal vein",
      "Clear acoustic trajectory confirmed on pre-procedure sonography without traversing colon"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G / 20G Coaxial Core Biopsy System",
        "spec": "19G x 15 cm introducer with 20G/18G automated cutting needle",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "Curvilinear Abdominal Probe with Guide",
        "spec": "3.5 - 5.0 MHz with multi-angle biopsy bracket",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "20 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Saline",
        "spec": "10% neutral buffered formalin with cytology slides for touch prep",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine; apply gentle transducer compression in the epigastrium to displace overlying bowel gas and stomach.",
      "Use Color Doppler to map the superior mesenteric artery, portal vein, and splenic vein relative to the pancreatic tumor.",
      "Sterilize the epigastrium and infiltrate 15 mL 2% Lignocaine through skin, linea alba, and down to retroperitoneal anterior pararenal space.",
      "Introduce 19G coaxial needle under real-time acoustic control, traversing left hepatic lobe or collapsed stomach wall if unavoidable.",
      "Position needle tip within the viable peripheral rim of the pancreatic mass, strictly avoiding the pancreatic duct and mesenteric vessels.",
      "Pass 20G or 18G cutting needle through cannula and obtain 2-3 tissue cores during suspended respiration.",
      "Examine cores for firm white tumor tissue; deposit into formalin and prepare touch prep for immediate cytopathologist review.",
      "Withdraw needle, compress epigastrium for 5 minutes, and verify absence of retroperitoneal or intraperitoneal hemorrhage."
    ],
    "complications": [
      "Post-biopsy acute pancreatitis (1-3%, usually mild)",
      "Epigastric or back pain (10-20%)",
      "Retroperitoneal hematoma or intra-abdominal bleeding (<1%)",
      "Tumor tract seeding (<0.05%)",
      "Inadvertent vascular laceration (SMA/SMV) (<0.2%)"
    ],
    "maayTariffInr": 5500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "ct-pancreatic-mass-biopsy",
    "name": "CT-Guided Pancreatic Head / Body / Tail Mass Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV013",
    "rghsCode": "693 / 42",
    "icd10": "C25.0 (Malignant neoplasm of head of pancreas) / C25.1 (Malignant neoplasm of body of pancreas)",
    "indications": [
      "Deeply situated pancreatic head, uncinate process, body, or tail mass obscured by bowel gas on USG",
      "Inconclusive endoscopic ultrasound (EUS) biopsy or altered surgical upper GI anatomy (e.g. Roux-en-Y)",
      "Confirmation of locally advanced unresectable pancreatic cancer prior to systemic chemotherapy or radiotherapy",
      "Evaluation of retroperitoneal recurrence following pancreaticoduodenectomy (Whipple procedure)"
    ],
    "preOpCriteria": [
      "Coagulation testing: INR <= 1.4, Platelets >= 60,000/uL",
      "Contrast-enhanced CT / MRI reviewed to establish safe anterior transgastric, transhepatic, or posterior retroperitoneal path",
      "Fasting for 6 hours; peripheral IV line functional",
      "Renal function documented if IV contrast is required for CT-fluoroscopy guidance"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G / 20G Coaxial Biopsy Needle System",
        "spec": "17G/19G x 15-20 cm coaxial cannula with 18G/20G semi-automated core needle",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "CT Accessories",
        "name": "Radiopaque Skin Grid & Laser Pointer",
        "spec": "Sterile skin localization grid",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "20 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Touch Prep Slides",
        "spec": "10% formalin and glass slides for rapid on-site cytopathology review",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine, prone, or decubitus depending on selected trajectory (anterior transgastric vs posterior retroperitoneal).",
      "Acquire low-dose planning CT through the pancreas; apply radiopaque grid to skin.",
      "Calculate entry site, angle, and depth; ensure path avoids colon, aorta, IVC, and mesenteric root vessels.",
      "Prep and drape skin; infiltrate 15-20 mL 2% Lignocaine into skin, deep musculature, and retroperitoneum.",
      "Advance coaxial introducer needle incrementally with intermittent CT check scans to confirm position in tumor margin.",
      "Pass 18G or 20G automated cutting needle through cannula and obtain 2-3 core biopsies during breath-hold.",
      "Inspect cores visually for viable tumor; perform touch imprint smears for rapid evaluation.",
      "Remove needle and perform completion CT to exclude retroperitoneal hemorrhage or significant hematoma; apply pressure dressing."
    ],
    "complications": [
      "Post-biopsy acute pancreatitis (1-3%)",
      "Back and abdominal discomfort (15-20%)",
      "Retroperitoneal hematoma (<1%)",
      "Transient fever or bacteremia (<1%)",
      "Major vascular injury requiring intervention (<0.2%)"
    ],
    "maayTariffInr": 9500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "eus-fna-fnb-pancreas",
    "name": "Endoscopic Ultrasound-Guided Fine Needle Aspiration / Biopsy (EUS-FNA/FNB) of Pancreas",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV014",
    "rghsCode": "693 / 43",
    "icd10": "C25.9 (Pancreatic neoplasm) / D13.6 (Benign neoplasm of pancreas)",
    "indications": [
      "Solid or cystic pancreatic head, uncinate, body, or tail mass requiring histological sampling",
      "Suspected pancreatic neuroendocrine tumor (pNET), solid pseudopapillary neoplasm, or cystic mucinous neoplasm",
      "Staging and sampling of regional peripancreatic and celiac lymph nodes",
      "High-risk surgical candidate where percutaneous transabdominal approach is hindered by intervening colon or vessels"
    ],
    "preOpCriteria": [
      "Coagulation screen: INR <= 1.5, Platelets >= 50,000/uL",
      "Fasting 6-8 hours; pre-anesthesia clearance for deep conscious sedation or general anesthesia",
      "CT or MRI demonstrating lesion accessible via transgastric or transduodenal acoustic window",
      "Prophylactic antibiotic administration if cystic component is present"
    ],
    "hardware": [
      {
        "category": "Endosonoscope",
        "name": "Linear Echoendoscope System",
        "spec": "Curved linear array echoendoscope with 3.7 mm working channel",
        "standardStore": "Endoscopy Suite Store"
      },
      {
        "category": "Biopsy Needle",
        "name": "22G / 25G EUS Core Biopsy Needle (Franseen / Fork-Tip)",
        "spec": "Acquire / SharkCore / EchoTip ProCore needle (22G/25G)",
        "standardStore": "Endoscopy Suite Consignment Store"
      },
      {
        "category": "Aspiration System",
        "name": "VacuStent / Syringe with Stopcock",
        "spec": "20 mL locking negative pressure aspiration syringe",
        "standardStore": "Endoscopy Consumables Store"
      },
      {
        "category": "Cytology Supplies",
        "name": "ROSE Cyto-Fixative & Cell Block Vials",
        "spec": "95% ethanol slides, air-dried slides, and formalin for cell block",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Administer IV sedation/analgesia; introduce linear echoendoscope through mouth into stomach and duodenum.",
      "Sonographically survey the pancreatic parenchyma, duct, surrounding vessels, and lymph node stations.",
      "Locate the target mass and establish a clean transmural acoustic window through gastric or duodenal wall, verifying lack of interposed vessels with Color Doppler.",
      "Advance 22G/25G Franseen or fork-tip needle through the endoscope channel into the mass under continuous real-time EUS vision.",
      "Remove stylet; apply negative suction or slow-pull capillary technique while making 3-4 gentle fanning passes through the lesion.",
      "Retract needle inside the sheath, withdraw from endoscope, and express core into formalin / prepare smears for Rapid On-Site Evaluation (ROSE).",
      "Repeat for 2-3 passes until ROSE confirms diagnostic malignant or representative cells.",
      "Examine the puncture site in the stomach/duodenum for bleeding or perforation; gently withdraw endoscope."
    ],
    "complications": [
      "Post-EUS acute pancreatitis (1-2%)",
      "Infection / cystic collection seeding (<1%)",
      "Intraluminal gastric/duodenal bleeding (<1%)",
      "Sore throat, nausea, and abdominal cramping (5-10%)",
      "Transmural perforation (<0.2%)"
    ],
    "maayTariffInr": 12000,
    "vendorContacts": [
      "Boston Scientific India (+91 98293 45678)",
      "Olympus Medical Systems India (+91 98299 01234)"
    ]
  },
  {
    "id": "ct-lung-core-biopsy-coaxial",
    "name": "CT-Guided Percutaneous Lung Core Needle Biopsy (Coaxial Technique)",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV015",
    "rghsCode": "693 / 42",
    "icd10": "C34.90 (Malignant neoplasm of unspecified part of bronchus or lung) / R91.8 (Other abnormal findings on diagnostic imaging of lung)",
    "indications": [
      "Solitary pulmonary nodule (SPN > 8 mm) or lung mass highly suspicious for primary lung carcinoma",
      "Peripheral lung lesion inaccessible to conventional fiberoptic bronchoscopy",
      "Tissue requirement for molecular testing (EGFR, ALK, ROS1, PD-L1) and next-generation sequencing",
      "Suspected lung metastasis in a patient with an extrapulmonary primary cancer"
    ],
    "preOpCriteria": [
      "Coagulation status: INR <= 1.4, Platelets >= 50,000/uL",
      "Platelet antiaggregants / anticoagulants held appropriately (Aspirin/Clopidogrel 5-7 days)",
      "Chest CT reviewed to choose shortest aerated lung parenchymal path avoiding bullae and pulmonary vessels",
      "Patient capable of following breath-hold instructions; oxygen saturation >= 92% on room air"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "19G / 20G Coaxial Lung Biopsy System",
        "spec": "19G introducer needle with 20G automated spring-loaded cutting needle (10-15 cm)",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "CT Localization",
        "name": "Radio-opaque Skin Grid & Laser Alignment",
        "spec": "CT skin localization grid with fiducial markers",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "15 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Emergency Equipment",
        "name": "8F - 10F Emergency Chest Drain Kit & Heimlich Valve",
        "spec": "Pigtail chest tube set with trocar for pneumothorax",
        "standardStore": "CT Suite Emergency Cabinet"
      }
    ],
    "techniqueSteps": [
      "Position patient prone, supine, or lateral decubitus depending on nodule location (lesion down or dependent position preferred).",
      "Perform helical low-dose planning CT across the region of interest; place radiopaque grid on chest wall.",
      "Select skin entry site to ensure perpendicular pleural crossing and minimize aerated lung transit distance (<2-3 cm).",
      "Scrub, drape, and administer 10-15 mL 2% Lignocaine from skin down to the parietal pleura.",
      "Introduce 19G coaxial needle through chest wall; advance through pleura in a single swift motion during breath-hold.",
      "Verify needle tip inside or abutting the lung nodule on confirmation CT slices.",
      "Pass 20G cutting needle through coaxial cannula into the nodule; fire mechanism to harvest 2-3 core tissue samples.",
      "Optionally instill saline or blood patch along parenchymal tract during cannula withdrawal; obtain immediate post-biopsy expiratory CT to evaluate for pneumothorax or pulmonary hemorrhage; place patient biopsy-side down for 2 hours."
    ],
    "complications": [
      "Pneumothorax (15-25%, with 3-5% requiring chest tube / pigtail catheter placement)",
      "Hemoptysis / alveolar hemorrhage (5-10%, usually self-limiting streak hemoptysis)",
      "Pleuritic chest pain (10-15%)",
      "Air embolism (<0.02%, rare but catastrophic; avoid coughing with open cannula)",
      "Hemothorax requiring tube thoracostomy (<0.5%)"
    ],
    "maayTariffInr": 8500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Merit Medical Systems (+91 98294 56789)"
    ]
  },
  {
    "id": "ct-lung-fnac",
    "name": "CT-Guided Percutaneous Lung Fine Needle Aspiration (FNAC)",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV016",
    "rghsCode": "693 / 42",
    "icd10": "R91.1 (Solitary pulmonary nodule) / C34.90 (Lung neoplasm)",
    "indications": [
      "Small sub-centimeter pulmonary nodules (<10 mm) where core cutting needle carries excessive risk",
      "Cavitary or necrotic lung lesions with high risk of hemoptysis from cutting needle",
      "Rapid cytological confirmation of small-cell lung carcinoma or recurrent known malignancy",
      "Microbiological cytology and fungal / AFB stain in suspected pulmonary tuberculosis or aspergilloma"
    ],
    "preOpCriteria": [
      "Coagulation profile: INR <= 1.5, Platelets >= 50,000/uL",
      "Fasting 3-4 hours; baseline vital signs and respiratory rate recorded",
      "Chest CT reviewed to determine trajectory through least amount of aerated lung parenchyma",
      "Cytopathologist on-site for immediate adequacy assessment (ROSE)"
    ],
    "hardware": [
      {
        "category": "Aspiration Needle",
        "name": "22G Chiba / Spinal Aspiration Needle",
        "spec": "22G x 9-15 cm needle with clear hub and stylet",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "Aspiration Syringe",
        "name": "10 mL / 20 mL Aspiration Syringe with Pistol Grip",
        "spec": "Syringe holder for continuous negative pressure suction",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "10 mL ampoule",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Cytology Supplies",
        "name": "Glass Slides & Fixative Spray",
        "spec": "Air-dried and 95% ethanol fixative slides with Giemsa / Papanicolaou stains",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient comfortably on CT table (prone, supine, or lateral) based on nodule location.",
      "Acquire localized planning CT slices; mark skin entry site using gantry laser lights.",
      "Sterilize and drape chest wall; infiltrate 2% Lignocaine from skin down to pleura.",
      "Advance 22G Chiba needle across pleura directly into target nodule during held respiration.",
      "Perform CT check slice verifying needle tip position within the lesion.",
      "Attach 10 mL syringe, apply gentle negative pressure, and move needle back and forth 3-4 times within the nodule.",
      "Release suction before exiting lesion; withdraw needle and immediately spray aspirate onto glass slides.",
      "Perform immediate on-site cytological review (ROSE); obtain post-procedure CT scan to exclude pneumothorax."
    ],
    "complications": [
      "Pneumothorax (10-18%, ~2-3% needing chest drain)",
      "Mild hemoptysis / blood-tinged sputum (5-8%)",
      "Chest wall soreness (5-10%)",
      "Vasovagal episode (2-4%)",
      "Non-diagnostic aspirate requiring repeat or core biopsy (<10%)"
    ],
    "maayTariffInr": 6500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-subpleural-lung-biopsy",
    "name": "Ultrasound-Guided Peripheral Subpleural Lung Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV017",
    "rghsCode": "693 / 41",
    "icd10": "C34.90 (Lung neoplasm) / J98.4 (Other disorders of lung)",
    "indications": [
      "Peripheral subpleural lung consolidation or mass directly abutting the parietal pleura",
      "Subpleural lesion with absent intervening aerated lung, creating a clear acoustic window",
      "Patients with severe respiratory distress, emphysema, or inability to hold breath under CT",
      "Bedside biopsy in ICU / HDU settings for critically ill ventilated patients"
    ],
    "preOpCriteria": [
      "Coagulation parameters: INR <= 1.4, Platelets >= 50,000/uL",
      "Bedside ultrasound confirming lesion abuts the chest wall with loss of normal lung sliding and absence of aerated lung artifact",
      "Fasting for 3 hours (unless urgent ICU bedside)",
      "Color Doppler mapping to identify and avoid intercostal neurovascular bundles"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G Automated Core Biopsy Needle",
        "spec": "18G x 10-15 cm automated cutting needle with 15-20 mm throw",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "Linear / Curvilinear Ultrasound Probe",
        "spec": "High-frequency 7-12 MHz linear probe for pleural wall, 3.5-5 MHz for mass",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "15 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Microbiology Vials",
        "spec": "10% formalin plus sterile saline container for culture",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient seated leaning forward or lateral decubitus with target side up.",
      "Perform sonographic assessment to identify the pleural abutment, internal vascularity, and respiratory movement of the subpleural consolidation.",
      "Select intercostal space along superior border of lower rib to avoid intercostal vessels.",
      "Sterilize and drape chest wall; infiltrate 10 mL 2% Lignocaine into skin, intercostal muscles, and parietal pleura.",
      "Advance 18G automated needle under real-time acoustic visualization through pleura directly into solid mass.",
      "Trigger cutting mechanism under direct vision, ensuring needle throw stays entirely within solid consolidation and does not enter aerated lung.",
      "Obtain 2-3 cores; deposit into formalin for histopathology and saline for mycobacterial/fungal PCR.",
      "Scan pleura immediately with ultrasound: presence of 'lung sliding' or 'comet-tail' artifacts excludes pneumothorax; apply dressing."
    ],
    "complications": [
      "Pneumothorax (<3-5%, dramatically lower than CT due to absent aerated lung transit)",
      "Hemoptysis (<3%)",
      "Chest wall pain at puncture site (10-15%)",
      "Pleural fluid leak / reactive effusion (2-3%)",
      "Intercostal artery laceration (<0.2%)"
    ],
    "maayTariffInr": 5500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "ct-mediastinal-mass-biopsy",
    "name": "CT-Guided Mediastinal Mass Core Needle Biopsy (Anterior, Middle, Posterior)",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV018",
    "rghsCode": "693 / 42",
    "icd10": "C38.3 (Malignant neoplasm of mediastinum, unspecified) / D15.2 (Benign neoplasm of mediastinum)",
    "indications": [
      "Anterior mediastinal mass suspicious for thymoma, lymphoma, germ cell tumor, or thyroid substernal extension",
      "Middle mediastinal mass or subcarinal / paratracheal lymphadenopathy",
      "Posterior mediastinal neurogenic tumor (schwannoma, neurofibroma) or paravertebral mass",
      "Histological typing and immunohistochemistry to avoid invasive median sternotomy"
    ],
    "preOpCriteria": [
      "Coagulation profile: INR <= 1.4, Platelets >= 60,000/uL",
      "Contrast-enhanced chest CT carefully evaluated to map internal mammary vessels, aorta, SVC, and pulmonary trunk",
      "Supine positioning tolerance evaluated (exclude severe superior vena cava syndrome / airway collapse)",
      "Fasting 4 hours; intravenous line in lower extremity if SVC obstruction present"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G / 20G Coaxial Biopsy Needle System",
        "spec": "17G/19G x 10-15 cm introducer with 18G/20G automated cutting needle",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "CT Accessories",
        "name": "Radiopaque Skin Grid & Laser Marker",
        "spec": "Sterile skin grid for precise parasternal / paravertebral approach",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "20 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Emergency Equipment",
        "name": "Thoracostomy Kit & Resuscitation Drugs",
        "spec": "Chest drainage tube and crash cart available",
        "standardStore": "CT Suite Emergency Cabinet"
      }
    ],
    "techniqueSteps": [
      "Position patient supine (anterior mediastinum) or prone (posterior mediastinum) on CT couch.",
      "Acquire contrast-enhanced CT slices to highlight mediastinal vasculature (internal mammary vessels, SVC, aorta).",
      "Select an extrapleural parasternal, trans-sternal, or paravertebral access path avoiding aerated lung.",
      "Prep, drape, and administer 15-20 mL 2% Lignocaine from skin through costal cartilage/intercostal space into mediastinal fat.",
      "Advance coaxial introducer needle incrementally under intermittent CT guidance directly into mediastinal tumor margin.",
      "Fire 18G/20G cutting needle during suspended respiration; obtain 2-3 tissue cores for histopathology and flow cytometry.",
      "Inspect cores for fleshy diagnostic tumor; deposit into formalin and saline for immunophenotyping.",
      "Carefully withdraw needle; acquire post-biopsy non-contrast CT to rule out anterior mediastinal hematoma, hemothorax, or pneumothorax."
    ],
    "complications": [
      "Anterior mediastinal hematoma (2-4%, usually self-limiting)",
      "Pneumothorax (5-10%, ~2% needing drainage)",
      "Retrosternal or chest wall pain (15-20%)",
      "Internal mammary artery or major vascular injury (<0.5%)",
      "Transient phrenic or recurrent laryngeal nerve neuropraxia (<0.2%)"
    ],
    "maayTariffInr": 9500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "ct-pleural-mass-biopsy",
    "name": "CT-Guided Pleural Mass / Thickening Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV019",
    "rghsCode": "693 / 42",
    "icd10": "C45.0 (Mesothelioma of pleura) / C78.2 (Secondary malignant neoplasm of pleura)",
    "indications": [
      "Nodular or circumferential pleural thickening suspicious for malignant pleural mesothelioma",
      "Metastatic pleural deposits from adenocarcinoma (lung, breast, ovary)",
      "Chronic tuberculous pleurisy or fibrothorax with negative pleural fluid cytology",
      "Solitary fibrous tumor of the pleura"
    ],
    "preOpCriteria": [
      "Coagulation profile: INR <= 1.4, Platelets >= 60,000/uL",
      "Contrast-enhanced chest CT evaluated to identify areas of nodular pleural thickening (>5 mm)",
      "Trajectory planned tangential to chest wall to maximize pleural core length and avoid deep aerated lung",
      "Fasting 4 hours; baseline vital signs documented"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G Cutting Core Biopsy System",
        "spec": "18G x 10 cm semi-automated or automated needle with coaxial cannula",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "CT Accessories",
        "name": "Radiopaque Skin Grid & Laser Guide",
        "spec": "Sterile localization grid",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "15 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Preparation",
        "name": "Formalin Vials & Saline Vials",
        "spec": "10% neutral buffered formalin with saline for GeneXpert MTB testing",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient in prone, supine, or decubitus posture placing the target pleural thickening uppermost or dependent.",
      "Acquire thin-section planning CT; mark skin entry site using laser lights.",
      "Select an oblique tangential approach traversing the thickened parietal/visceral pleura while skimming the lung surface to prevent parenchymal puncture.",
      "Clean, drape, and infiltrate 10-15 mL 2% Lignocaine into skin, intercostal space, and down to the pleural plaque.",
      "Introduce coaxial needle along tangential path under CT guidance into the thickened pleura.",
      "Pass 18G cutting needle through cannula and trigger within the pleural nodule.",
      "Obtain 2-3 tissue cores for histopathology (including calretinin, WT1 for mesothelioma) and GeneXpert for tuberculosis.",
      "Withdraw needle; perform completion CT scan checking for pneumothorax or hemothorax; apply dressing."
    ],
    "complications": [
      "Pneumothorax (5-10%, rarely requiring drainage if purely tangential)",
      "Chest wall / intercostal pain (10-15%)",
      "Pleural bleeding / small hemothorax (1-3%)",
      "Subcutaneous emphysema (<2%)",
      "Tumor tract seeding in malignant mesothelioma (<0.5%)"
    ],
    "maayTariffInr": 8000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "ct-adrenal-gland-biopsy",
    "name": "CT-Guided Adrenal Gland Core Needle Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV020",
    "rghsCode": "693 / 42",
    "icd10": "C74.90 (Malignant neoplasm of unspecified adrenal gland) / D44.10 (Neoplasm of uncertain behavior of adrenal gland)",
    "indications": [
      "Enlarging solitary adrenal mass in a patient with known malignancy (e.g. lung, melanoma, renal cell carcinoma)",
      "Differentiating adrenal cortical carcinoma (ACC) or adrenal metastasis from benign adenoma",
      "Investigation of suspected bilateral adrenal enlargement due to tuberculosis, histoplasmosis, or lymphoma",
      "Assessment of atypical non-functioning adrenal mass when imaging is indeterminate"
    ],
    "preOpCriteria": [
      "MANDATORY BIOCHEMICAL EXCLUSION OF PHEOCHROMOCYTOMA: Normal 24-hour urinary or plasma free metanephrines / normetanephrines",
      "Coagulation testing within 48h: INR <= 1.4, Platelets >= 60,000/uL",
      "Contrast-enhanced CT / MRI reviewed to choose posterior transhepatic (right) or transsplenic/retroperitoneal (left) approach",
      "Fasting 4 hours; blood pressure well controlled (<140/90 mmHg)"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G / 20G Coaxial Biopsy Needle Set",
        "spec": "17G/19G x 13-15 cm introducer with 18G/20G automated cutting needle",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "CT Accessories",
        "name": "Radiopaque Skin Grid & Laser Pointer",
        "spec": "CT skin localization grid",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "20 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Emergency Medications",
        "name": "IV Alpha / Beta Blockers & Vasopressors",
        "spec": "Phentolamine, Labetalol, and Esmolol available on call",
        "standardStore": "CT Suite Emergency Cabinet"
      }
    ],
    "techniqueSteps": [
      "Position patient prone or in modified decubitus position on the CT table.",
      "Acquire low-dose planning CT slices through the adrenal glands; identify the adrenal mass.",
      "Select trajectory: for right adrenal, transhepatic or direct posterior approach avoiding kidney and IVC; for left adrenal, posterior paravertebral retroperitoneal approach avoiding spleen, kidney, and pancreas.",
      "Sterilize and drape the posterior flank; infiltrate 15 mL 2% Lignocaine from skin down to perinephric/adrenal space.",
      "Advance coaxial introducer needle incrementally under intermittent CT confirmation into the edge of the adrenal mass.",
      "Deploy 18G or 20G automated cutting needle into the mass during breath-hold; retrieve 2-3 core tissue specimens.",
      "Continuously monitor non-invasive blood pressure and pulse during each needle firing to detect sudden adrenergic surges.",
      "Withdraw coaxial cannula; perform completion CT to exclude retroperitoneal or subcapsular hematoma; admit for 4 hours of vital signs surveillance."
    ],
    "complications": [
      "Retroperitoneal or periadrenal hematoma (2-4%, usually self-limiting)",
      "Hypertensive crisis during puncture if occult pheochromocytoma (<0.5%)",
      "Pneumothorax from pleural transgression (<1-2%)",
      "Flank pain / soreness (10-15%)",
      "Inadvertent renal or splenic capsule laceration (<0.2%)"
    ],
    "maayTariffInr": 9000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "ct-retroperitoneal-mass-biopsy",
    "name": "CT-Guided Retroperitoneal Mass / Lymph Node Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV021",
    "rghsCode": "693 / 42",
    "icd10": "C48.0 (Malignant neoplasm of retroperitoneum) / C77.2 (Intra-abdominal lymph nodes)",
    "indications": [
      "Retroperitoneal mass suspicious for soft tissue sarcoma (liposarcoma, leiomyosarcoma)",
      "Enlarged retroperitoneal / para-aortic lymphadenopathy suspicious for lymphoma or testicular cancer metastasis",
      "Differentiating retroperitoneal fibrosis (RPF / IgG4-RD) from malignant infiltration",
      "Confirmation of retroperitoneal recurrence following oncological resection"
    ],
    "preOpCriteria": [
      "Coagulation profile within 48h: INR <= 1.4, Platelets >= 60,000/uL",
      "Contrast CT reviewed to plan posterior, trans-iliopsoas, or lateral extraperitoneal access",
      "Fasting for 4 hours; IV access verified",
      "Safe distance maintained from aorta, IVC, renal hilum, and lumbar nerve plexus"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G Coaxial Biopsy Needle System",
        "spec": "17G x 15-20 cm introducer cannula with 18G semi-automated core needle",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "CT Accessories",
        "name": "Radiopaque Skin Grid & Laser Pointer",
        "spec": "Sterile skin localization grid",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "20 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin & Flow Cytometry Transport Media",
        "spec": "10% formalin and RPMI medium for lymphoma profiling",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient prone or in lateral oblique posture on the CT table with skin grid across lumbar back.",
      "Acquire low-dose planning CT images through the retroperitoneum; map the target lesion and calculate needle path.",
      "Plan trajectory through the erector spinae or quadratus lumborum muscles, avoiding the kidney, colon, aorta, and IVC.",
      "Prep, drape, and infiltrate 15-20 mL 2% Lignocaine into skin, lumbar musculature, and retroperitoneal fat.",
      "Advance 17G coaxial needle under intermittent CT fluoroscopy or check scans until tip touches mass capsule.",
      "Pass 18G cutting needle through cannula and deploy into viable non-necrotic portion of the tumor.",
      "Harvest 2-3 substantial core specimens; divide between formalin and RPMI medium for lymphoma immunophenotyping.",
      "Withdraw needle; perform non-contrast CT to rule out retroperitoneal hemorrhage or hematoma; apply pressure dressing."
    ],
    "complications": [
      "Lumbar back pain or muscular stiffness (15-20%)",
      "Retroperitoneal hematoma (2-4%, usually contained)",
      "Transient femoral or lumbar nerve neuropraxia / leg paresthesia (<1%)",
      "Major retroperitoneal hemorrhage (<0.5%)",
      "Inadvertent colonic or renal injury (<0.2%)"
    ],
    "maayTariffInr": 8500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "ct-deep-pelvic-presacral-biopsy",
    "name": "CT-Guided Deep Pelvic / Presacral Mass Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV022",
    "rghsCode": "693 / 42",
    "icd10": "C76.3 (Malignant neoplasm of pelvis) / D48.0 (Neoplasm of uncertain behavior of bone and articular cartilage)",
    "indications": [
      "Presacral / retrorectal mass suspicious for chordoma, schwannoma, teratoma, or sarcoma",
      "Deep pelvic sidewall recurrence following surgical resection of rectal, ovarian, or cervical cancer",
      "Enlarged deep internal or external iliac lymph nodes obscured by pelvic bones and bladder",
      "Evaluation of non-healing presacral collection or chronic granuloma"
    ],
    "preOpCriteria": [
      "Coagulation status: INR <= 1.4, Platelets >= 60,000/uL",
      "Contrast-enhanced pelvic CT or MRI reviewed to establish transgluteal or trans-sciatic notch trajectory",
      "Fasting for 4 hours; bowel preparation / rectal emptying advised prior to procedure",
      "Mapping to strictly avoid sciatic nerve, gluteal vessels, rectum, and bladder"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G Coaxial Biopsy Needle System",
        "spec": "17G x 15-20 cm introducer with 18G semi-automated core needle",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "CT Accessories",
        "name": "Radiopaque Skin Grid & Laser Marker",
        "spec": "Sterile pelvic localization grid",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "20 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Touch Imprint Slides",
        "spec": "10% formalin and cytology slides",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient prone on the CT gantry with a pillow beneath pelvis to elevate hips.",
      "Acquire thin-section planning CT through the sacrum and pelvis; apply radiopaque grid across the buttock.",
      "Select a transgluteal approach traversing the greater sciatic foramen medial to the sciatic nerve and gluteal vessels, directly into the presacral space.",
      "Sterilize and drape buttock; infiltrate 15-20 mL 2% Lignocaine through skin, gluteus maximus, and sacrospinous ligament.",
      "Advance 17G coaxial cannula under intermittent CT guidance; check needle tip within presacral tumor.",
      "Fire 18G cutting needle during held expiration; obtain 2-3 tissue cores avoiding the rectal wall.",
      "Verify core adequacy and prepare touch imprints for cytopathology confirmation.",
      "Carefully retract coaxial needle; acquire post-biopsy pelvic CT to exclude hematoma or rectal wall violation; apply pressure dressing."
    ],
    "complications": [
      "Gluteal pain and buttock tenderness (15-25%)",
      "Sciatic nerve irritation / transient shooting leg pain (1-3%)",
      "Pelvic hematoma or gluteal bleeding (1-3%)",
      "Inadvertent rectal puncture with pelvic infection (<0.5%)",
      "Inadequate tissue sample (<5%)"
    ],
    "maayTariffInr": 9000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-mesenteric-omental-biopsy",
    "name": "Ultrasound-Guided Mesenteric Mass / Omental Cake Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV023",
    "rghsCode": "693 / 41",
    "icd10": "C48.1 (Malignant neoplasm of specified parts of peritoneum) / C78.6 (Secondary malignant neoplasm of retroperitoneum and peritoneum)",
    "indications": [
      "Thickened, nodular omental caking in suspected peritoneal carcinomatosis (ovarian, gastric, colorectal cancer)",
      "Mesenteric mass suspicious for gastrointestinal stromal tumor (GIST), lymphoma, or desmoid tumor",
      "Tuberculous peritonitis / peritoneal tuberculosis with nodular omental thickening",
      "Unexplained ascites with mesenteric root lymphadenopathy"
    ],
    "preOpCriteria": [
      "Coagulation profile: INR <= 1.4, Platelets >= 50,000/uL",
      "Pre-procedure ultrasound establishing omental cake thickness (>10 mm) directly beneath the abdominal wall",
      "Fasting for 4 hours; patient positioned supine comfortably",
      "Color Doppler mapping to avoid epigastric and mesenteric blood vessels"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G Automated Core Biopsy Needle",
        "spec": "18G x 10-15 cm automated cutting needle with 15-20 mm throw",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "Linear / Curvilinear Probe",
        "spec": "High-frequency linear (5-12 MHz) or curved (3.5-5 MHz) array",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "15 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Preparation",
        "name": "Formalin Vials & GeneXpert Medium",
        "spec": "10% formalin plus sterile saline for mycobacterial PCR",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine; sonographically map the anterior abdominal wall and omental cake.",
      "Select an area of maximal omental thickening, ensuring safe clearance from underlying peristaltic small bowel loops.",
      "Prep and drape the anterior abdominal wall under aseptic precautions.",
      "Infiltrate 10-15 mL 2% Lignocaine into skin, subcutaneous fat, rectus sheath, and parietal peritoneum.",
      "Make a 2-mm skin nick; introduce 18G automated needle under real-time acoustic control into the omental mass.",
      "Trigger needle firing mechanism during shallow breathing, keeping throw strictly within omentum and away from bowel wall.",
      "Obtain 2-3 firm core biopsies; transfer to formalin for IHC and sterile saline for GeneXpert/culture.",
      "Scan omentum and peritoneal space with Color Doppler for active bleeding; apply sterile pressure dressing."
    ],
    "complications": [
      "Abdominal wall soreness and mild cramping (10-15%)",
      "Intra-omental or peritoneal hematoma (1-2%)",
      "Inadvertent bowel perforation (<0.2%)",
      "Localized peritonitis (<0.2%)",
      "Inadequate tissue showing only fibrofatty tissue (<5%)"
    ],
    "maayTariffInr": 5000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-peritoneal-deposit-biopsy",
    "name": "Ultrasound-Guided Peritoneal Deposit Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV024",
    "rghsCode": "693 / 41",
    "icd10": "C48.2 (Malignant neoplasm of peritoneum, unspecified) / C78.6 (Secondary neoplasm of peritoneum)",
    "indications": [
      "Discrete nodular peritoneal implants along abdominal wall, diaphragm, or pelvic peritoneum",
      "Staging of suspected gynecological (ovarian/fallopian tube) or gastrointestinal carcinomatosis",
      "Confirmation of recurrent peritoneal malignancy in patients with prior surgical debulking",
      "Differentiating peritoneal carcinomatosis from pseudomyxoma peritonei or tuberculous peritonitis"
    ],
    "preOpCriteria": [
      "Coagulation testing: INR <= 1.4, Platelets >= 50,000/uL",
      "Peritoneal nodule thickness >= 5-8 mm verified on high-frequency linear ultrasound",
      "Fasting for 3 hours; patient supine or semi-recumbent",
      "Color Doppler mapping of epigastric / abdominal wall vessels"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G / 20G Semi-Automated Core Biopsy Needle",
        "spec": "18G/20G x 10 cm core biopsy needle with 10-15 mm throw",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Frequency Linear Probe",
        "spec": "7 - 12 MHz linear array for superficial peritoneal visualization",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "10 mL ampoule",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Molecular Kits",
        "spec": "10% formalin and saline container",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient comfortably supine; scan abdominal wall with high-frequency linear transducer to pinpoint nodular deposit.",
      "Verify deposit is adherent to parietal peritoneum, measuring thickness and checking underlying fluid or bowel movement.",
      "Sterilize and drape chosen puncture site under sterile surgical conditions.",
      "Infiltrate 5-10 mL 2% Lignocaine into skin, muscle layers, and peritoneal surface adjacent to nodule.",
      "Advance 18G/20G core needle under continuous real-time high-resolution sonographic control into nodule center.",
      "Trigger cutting needle tangential to abdominal wall to prevent penetration of deeper visceral structures.",
      "Obtain 2-3 distinct core specimens; examine for fleshy diagnostic tumor tissue.",
      "Scan area with Color Doppler for abdominal wall or peritoneal hematoma; apply sterile adhesive dressing."
    ],
    "complications": [
      "Abdominal wall bruise or local tenderness (10-15%)",
      "Peritoneal hematoma (1-2%)",
      "Inadvertent bowel serosal scratch (<0.2%)",
      "Localized infection (<0.2%)",
      "Inadequate tissue sample (<5%)"
    ],
    "maayTariffInr": 5000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-thyroid-fnac",
    "name": "Ultrasound-Guided Thyroid Fine Needle Aspiration Cytology (FNAC)",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV025",
    "rghsCode": "693 / 41",
    "icd10": "E04.1 (Nontoxic single thyroid nodule) / C73 (Malignant neoplasm of thyroid gland)",
    "indications": [
      "Thyroid nodule meeting EU-TIRADS or ACR-TIRADS 3, 4, or 5 suspicious ultrasound criteria",
      "Nodule with microcalcifications, marked hypoechogenicity, irregular margins, or taller-than-wide shape",
      "Thyroid nodule associated with ipsilateral suspicious cervical lymphadenopathy",
      "Prior history of neck irradiation or family history of medullary thyroid carcinoma"
    ],
    "preOpCriteria": [
      "Anticoagulant / antiplatelet history reviewed (Aspirin held 3 days if clinical risk allows, though fine 23-25G needle is safe)",
      "High-resolution neck ultrasound documenting nodule size, TIRADS category, and vascularity",
      "Patient informed to avoid swallowing or speaking during active needle insertion",
      "Coagulation: normal platelet count and INR"
    ],
    "hardware": [
      {
        "category": "Aspiration Needle",
        "name": "23G - 25G Fine Needle with Clear Hub",
        "spec": "23G/25G x 1.0 - 1.5 inch needle with 10 mL syringe",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Frequency Linear Neck Probe",
        "spec": "8 - 15 MHz high-resolution linear array",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% (Optional)",
        "spec": "Subcutaneous wheal (1-2 mL) or topical anesthetic cream",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Cytology Supplies",
        "name": "Glass Slides & Fixative Spray",
        "spec": "Frosted glass slides with 95% ethanol and air-dried slides",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with a shoulder roll to extend the neck comfortably.",
      "Perform ultrasound mapping of thyroid gland; measure nodule and characterize suspicious focal features.",
      "Clean anterior neck with povidone-iodine / chlorhexidine under sterile conditions.",
      "Optional: raise tiny dermal wheal with 0.5 mL 2% Lignocaine over entry point.",
      "Introduce 23G-25G needle along linear probe axis under continuous real-time acoustic visualization (in-plane technique).",
      "Advance needle tip into solid hypoechoic nodular component; instruct patient: 'Do not swallow, do not speak'.",
      "Perform capillary action / gentle negative pressure fanning passes (4-6 excursions) within the nodule over 10-15 seconds.",
      "Withdraw needle; immediately express droplets onto glass slides, smear gently, fix half in 95% ethanol (Papanicolaou stain) and air-dry half (Giemsa stain); apply manual compression for 5 minutes."
    ],
    "complications": [
      "Mild localized neck soreness or minor bruising (5-10%)",
      "Transient vagal dizziness or lightheadedness (1-2%)",
      "Minor intrathyroidal hematoma (1-2%, resolves spontaneously)",
      "Significant neck hematoma requiring airway observation (<0.1%)",
      "Inadequate Bethesda Category I cytology requiring repeat FNAC (<5-8%)"
    ],
    "maayTariffInr": 2800,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-thyroid-core-biopsy",
    "name": "Ultrasound-Guided Thyroid Core Needle Biopsy (CNB)",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV026",
    "rghsCode": "693 / 41",
    "icd10": "C73 (Malignant neoplasm of thyroid gland) / E04.2 (Nontoxic multinodular goiter)",
    "indications": [
      "Repeatedly non-diagnostic (Bethesda I) or indeterminate (Bethesda III/IV - AUS/FLUS) thyroid FNAC",
      "Suspected medullary thyroid carcinoma, anaplastic thyroid carcinoma, or thyroid lymphoma",
      "Dense calcified or sclerotic thyroid nodules where fine needles fail to yield cellular material",
      "Evaluation of post-radiation or fibrosing thyroiditis"
    ],
    "preOpCriteria": [
      "Coagulation status: INR <= 1.3, Platelets >= 80,000/uL",
      "Anticoagulant and antiplatelet drugs safely paused (Aspirin 5 days, DOACs 48 hours)",
      "High-resolution ultrasound demonstrating safe approach distance from common carotid artery and trachea",
      "Informed consent detailing neck hematoma precautions"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G / 20G Spring-Loaded Core Needle",
        "spec": "18G/20G x 10 cm automated needle with 10-15 mm throw, echogenic tip",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Frequency Linear Neck Probe",
        "spec": "10 - 15 MHz linear array with dedicated superficial preset",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "10 mL ampoule",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Molecular Kits",
        "spec": "10% neutral buffered formalin vials",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Place patient supine with neck extension; map thyroid nodule, carotid artery, jugular vein, and trachea with Color Doppler.",
      "Plan a trans-isthmic or lateral in-plane approach keeping needle parallel to the probe and pointing away from the carotid artery.",
      "Sterilize anterior neck; infiltrate 5-8 mL 2% Lignocaine into subcutaneous fat and thyroid capsule under real-time vision.",
      "Introduce 18G/20G core needle under continuous sonographic guidance into the anterior margin of the nodule.",
      "Verify needle excursion trajectory; instruct patient to hold breath without swallowing.",
      "Trigger automated cutting mechanism; swiftly withdraw needle and confirm intact tissue core in specimen notch.",
      "Obtain 1-2 core passes; transfer to formalin for histopathology and immunohistochemistry (calcitonin, TTF-1, Ki-67).",
      "Perform immediate manual compression of thyroid bed for 10 minutes; scan neck with Doppler to rule out hematoma; apply pressure dressing."
    ],
    "complications": [
      "Neck pain and soreness radiating to ear/jaw (10-15%)",
      "Subcapsular or intrathyroidal hematoma (2-4%)",
      "Transient hoarseness / recurrent laryngeal nerve neuropraxia (<1%)",
      "Major cervical hematoma requiring surgical evacuation (<0.2%)",
      "Tracheal puncture with transient hemoptysis (<0.1%)"
    ],
    "maayTariffInr": 4800,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-parathyroid-fnac-pth-washout",
    "name": "Ultrasound-Guided Parathyroid Mass FNAC with Parathyroid Hormone (PTH) Washout",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV027",
    "rghsCode": "693 / 41",
    "icd10": "E21.0 (Primary hyperparathyroidism) / D35.1 (Benign neoplasm of parathyroid gland)",
    "indications": [
      "Localization and confirmation of suspected parathyroid adenoma in primary hyperparathyroidism",
      "Differentiating parathyroid lesion from thyroid nodule or cervical lymph node",
      "Re-operative neck surgery for persistent or recurrent hyperparathyroidism with discordant Sestamibi / 4D-CT findings",
      "Ectopic parathyroid tissue confirmation prior to targeted minimally invasive parathyroidectomy"
    ],
    "preOpCriteria": [
      "Serum Calcium, Phosphate, and intact Parathyroid Hormone (iPTH) documented",
      "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
      "Technetium-99m Sestamibi / SPECT-CT and neck ultrasound reviewed",
      "Laboratory coordination confirmed for STAT needle washout iPTH assay"
    ],
    "hardware": [
      {
        "category": "Aspiration Needle",
        "name": "25G Fine Needle with Syringe",
        "spec": "25G x 1.5 inch needle with 5 mL syringe and 1 mL sterile normal saline",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Resolution Linear Neck Probe",
        "spec": "10 - 15 MHz linear transducer",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "5 mL ampoule",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Biochemical Supplies",
        "name": "Saline Washout Tubes & EDTA Tubes",
        "spec": "1 mL sterile normal saline wash tubes for iPTH chemiluminescence",
        "standardStore": "Biochemistry Special Lab"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with neck hyperextension; identify polar parathyroid lesion (polar vessel / hypoechoic oval gland).",
      "Map recurrent laryngeal nerve groove and carotid sheath with Color Doppler.",
      "Sterilize anterior neck; raise tiny dermal wheal of 2% Lignocaine.",
      "Introduce 25G needle under direct real-time in-plane sonographic guidance into the center of the parathyroid lesion.",
      "Make 3-4 gentle capillary excursions without high negative suction to prevent bloody dilution.",
      "Withdraw needle; express small cellular drop onto slide for cytopathology.",
      "Immediately flush needle lumen with exactly 1.0 mL of sterile normal saline into an EDTA / plain tube labeled 'Needle Washout'.",
      "Dispatch immediately on ice to biochemistry lab for iPTH measurement (iPTH in washout > serum iPTH confirms parathyroid origin); compress neck 5 minutes."
    ],
    "complications": [
      "Localized neck soreness or bruise (5-10%)",
      "Periparathyroid or capsular hematoma (1-2%)",
      "Parathyroid capsular fibrosis / rupture complicating subsequent surgery (<1%)",
      "Transient voice alteration (<0.5%)",
      "Inadequate washout volume (<2%)"
    ],
    "maayTariffInr": 3800,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Merit Medical Systems (+91 98294 56789)"
    ]
  },
  {
    "id": "usg-cervical-ln-fnac-washout",
    "name": "Ultrasound-Guided Cervical Lymph Node FNAC with Thyroglobulin / Calcitonin Washout",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV028",
    "rghsCode": "693 / 41",
    "icd10": "C77.0 (Secondary malignant neoplasm of lymph nodes of head, face and neck) / C73 (Thyroid cancer)",
    "indications": [
      "Suspicious cervical lymph node in patients with known or treated papillary thyroid carcinoma (PTC)",
      "Suspected nodal metastasis in medullary thyroid carcinoma (MTC) for Calcitonin washout",
      "Cystic or necrotic cervical lymph nodes where cytology alone is frequently false-negative",
      "Preoperative mapping of lateral neck compartments (Levels II-V) prior to neck dissection"
    ],
    "preOpCriteria": [
      "Serum Thyroglobulin (Tg) or Calcitonin documented",
      "Neck ultrasound documenting round shape, loss of fatty hilum, microcalcifications, or cystic changes",
      "Coagulation: normal platelet count and INR",
      "Coordination with biochemistry for immediate needle washout assay"
    ],
    "hardware": [
      {
        "category": "Aspiration Needle",
        "name": "23G - 25G Fine Aspiration Needle",
        "spec": "23G/25G x 1.0-1.5 inch needle with 5 mL syringe and 1.0 mL sterile normal saline",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Frequency Linear Neck Probe",
        "spec": "10 - 15 MHz linear array",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "5 mL ampoule",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Assay Containers",
        "name": "Saline Washout Vials & Cytology Slides",
        "spec": "Plain/EDTA vials for Tg / Calcitonin washout and glass slides for cytology",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with head turned away from target lymph node station.",
      "Scan lateral neck compartments (Levels II through VI) to identify suspicious lymph nodes.",
      "Sterilize the lateral neck under sterile precautions; raise intradermal wheal with 0.5 mL 2% Lignocaine.",
      "Introduce 23G-25G needle under direct real-time linear probe visualization into the solid cortex of the lymph node.",
      "Perform capillary fanning passes across the nodal cortex, avoiding the internal jugular vein and carotid artery.",
      "Withdraw needle; express one drop for cytological smears (Papanicolaou and Giemsa).",
      "Rinse needle barrel and hub with exactly 1.0 mL sterile saline into dedicated washout vial labeled for Thyroglobulin (or Calcitonin).",
      "Send washout for chemiluminescent immunoassay (washout Tg > serum Tg confirms metastatic thyroid cancer); apply pressure for 5 minutes."
    ],
    "complications": [
      "Neck soreness or mild skin ecchymosis (5-10%)",
      "Intranodal hematoma (1-2%)",
      "Carotid or jugular puncture (<0.5%, easily controlled with manual pressure)",
      "Vagal dizziness (1-2%)",
      "Diluted washout requiring repeat aspiration (<2%)"
    ],
    "maayTariffInr": 3500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-cervical-ln-core-biopsy",
    "name": "Ultrasound-Guided Cervical Lymph Node Core Needle Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV029",
    "rghsCode": "693 / 41",
    "icd10": "C85.91 (Non-Hodgkin lymphoma of lymph nodes of head, face, and neck) / A18.2 (Tuberculous peripheral lymphadenopathy)",
    "indications": [
      "Suspected lymphoma requiring preserved tissue architecture for WHO classification and flow cytometry",
      "Metastatic squamous cell carcinoma of unknown head and neck primary (HNSCC)",
      "Repeatedly non-diagnostic or necrotic FNAC of enlarged cervical lymph nodes",
      "Differentiating tuberculous lymphadenitis from fungal, sarcoid, or malignant lymphadenopathy"
    ],
    "preOpCriteria": [
      "Coagulation profile: INR <= 1.4, Platelets >= 60,000/uL",
      "High-resolution ultrasound demonstrating lymph node size >= 10-15 mm and safe clearance from internal jugular vein and carotid artery",
      "Antiplatelet medications held appropriately",
      "Fasting 2-3 hours; patient supine with head supported"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G / 20G Spring-Loaded Core Needle",
        "spec": "18G/20G x 10 cm automated needle with 10-15 mm excursion, echogenic tip",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Frequency Linear Neck Probe",
        "spec": "10 - 15 MHz linear array with vascular preset",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "10 mL ampoule",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Flow Cytometry RPMI",
        "spec": "10% formalin, RPMI transport medium, and saline for GeneXpert",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with head rotated away from target neck side.",
      "Use linear ultrasound probe and Color Doppler to map the enlarged lymph node and identify carotid artery, internal jugular vein, and accessory nerve.",
      "Sterilize the lateral neck; infiltrate 5-8 mL 2% Lignocaine into skin and perinodal capsule under direct visualization.",
      "Advance 18G/20G core needle along probe axis (in-plane) into the solid cortex of the node, pointing away from the great vessels.",
      "Trigger cutting mechanism; swiftly retrieve needle and inspect core for white, fleshy lymphoid tissue.",
      "Obtain 2-3 core passes; distribute into formalin (histopathology/IHC), RPMI (flow cytometry), and saline (GeneXpert MTB).",
      "Apply firm manual pressure over the puncture site for 10 minutes.",
      "Re-scan lateral neck with Color Doppler to verify absence of hematoma or pseudoaneurysm; apply compression dressing."
    ],
    "complications": [
      "Neck pain and muscular soreness (10-15%)",
      "Cervical hematoma or bruising (2-4%)",
      "Transient accessory / facial nerve neuropraxia (<0.5%)",
      "Carotid or jugular vascular injury (<0.2%)",
      "Inadequate tissue sample (<3%)"
    ],
    "maayTariffInr": 4500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-salivary-gland-fnac",
    "name": "Ultrasound-Guided Salivary Gland (Parotid / Submandibular) FNAC",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV030",
    "rghsCode": "693 / 41",
    "icd10": "D11.0 (Benign neoplasm of parotid gland) / C08.9 (Malignant neoplasm of major salivary gland)",
    "indications": [
      "Focal solid or cystic mass in parotid or submandibular salivary gland (Milan System classification)",
      "Differentiating benign pleomorphic adenoma or Warthin tumor from salivary gland carcinomas",
      "Evaluation of salivary gland involvement in lymphoma or Sjögren syndrome",
      "Sampling of intraparotid lymphadenopathy"
    ],
    "preOpCriteria": [
      "Coagulation: normal platelet count and INR",
      "High-resolution ultrasound documenting lesion depth (superficial vs deep lobe parotid) and relationship to retromandibular vein and external carotid artery",
      "Patient informed to avoid facial grimacing or chewing during needle placement",
      "Cytopathologist on-site for rapid on-site adequacy evaluation (ROSE)"
    ],
    "hardware": [
      {
        "category": "Aspiration Needle",
        "name": "23G - 25G Fine Aspiration Needle",
        "spec": "23G/25G x 1.0-1.5 inch needle with 10 mL syringe",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Frequency Linear Probe",
        "spec": "8 - 15 MHz linear transducer",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "5 mL ampoule (optional dermal wheal)",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Cytology Supplies",
        "name": "Glass Slides & Cyto-Fixative",
        "spec": "95% ethanol fixative slides and air-dried slides",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with head turned to contralateral side.",
      "Sonographically identify the salivary lesion; map facial nerve plane and retromandibular vessels using Color Doppler.",
      "Sterilize cheek / submandibular skin under aseptic conditions.",
      "Optional: raise 0.5 mL 2% Lignocaine subcutaneous wheal.",
      "Introduce 23G-25G needle under direct real-time in-plane sonographic guidance directly into the solid portion of the mass.",
      "Perform 4-6 gentle capillary fanning excursions within the nodule over 10 seconds.",
      "Withdraw needle, express aspirate onto glass slides, smear gently, and fix in 95% ethanol for Milan System cytological assessment.",
      "Apply manual digital pressure over salivary gland puncture site for 5 minutes."
    ],
    "complications": [
      "Local cheek / jaw pain or minor bruise (5-10%)",
      "Transient facial nerve twitching / neuropraxia (<0.2%, virtually absent with 25G needle)",
      "Intraglandular hematoma (1-2%)",
      "Salivary fistula (<0.1%)",
      "Non-diagnostic aspirate (Milan I) requiring repeat FNAC (<5-8%)"
    ],
    "maayTariffInr": 2800,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-salivary-gland-core-biopsy",
    "name": "Ultrasound-Guided Salivary Gland Core Needle Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV031",
    "rghsCode": "693 / 41",
    "icd10": "C08.9 (Malignant neoplasm of salivary gland) / D11.9 (Benign neoplasm of salivary gland)",
    "indications": [
      "Inconclusive or indeterminate salivary gland FNAC (Milan Category III/IV)",
      "Suspected salivary gland lymphoma, adenoid cystic carcinoma, or mucoepidermoid carcinoma",
      "Large or infiltrative salivary mass where histopathological grading and immunohistochemistry are required",
      "Recurrent salivary gland tumor prior to revision surgery"
    ],
    "preOpCriteria": [
      "Coagulation profile: INR <= 1.3, Platelets >= 80,000/uL",
      "High-resolution ultrasound with Color Doppler mapping facial nerve trajectory and retromandibular vein",
      "Patient instructed to remain completely still without swallowing or speaking during firing",
      "Fasting 2 hours; local surgical consent obtained"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G / 20G Spring-Loaded Core Needle",
        "spec": "18G/20G x 10 cm automated needle with 10 mm short throw, echogenic tip",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Frequency Linear Neck Probe",
        "spec": "10 - 15 MHz linear array",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "10 mL ampoule",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Flow Cytometry Media",
        "spec": "10% formalin and RPMI medium for lymphoma analysis",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with head rotated away from affected salivary gland.",
      "Perform comprehensive ultrasound assessment of parotid or submandibular mass, noting distance from retromandibular vein and external carotid artery.",
      "Select in-plane approach tangential to facial nerve plane, choosing a short-throw (10 mm) needle.",
      "Sterilize cheek / submandibular region; infiltrate 5 mL 2% Lignocaine into subcutaneous fat and glandular capsule.",
      "Introduce 18G/20G core needle under continuous real-time sonographic guidance into the periphery of the lesion.",
      "Trigger 10 mm cutting throw strictly within tumor boundary under direct acoustic vision.",
      "Obtain 1-2 core specimens; transfer to formalin for histopathology, IHC, and molecular translocation testing.",
      "Apply immediate direct manual pressure over the cheek / jaw for 10-15 minutes; scan with Doppler to confirm hemostasis."
    ],
    "complications": [
      "Cheek or jaw tenderness and swelling (10-15%)",
      "Intraglandular hematoma (2-4%)",
      "Transient facial nerve neuropraxia / weakness (<0.5%)",
      "Salivary fistula (<0.2%)",
      "Tumor spillage / seeding (<0.1%)"
    ],
    "maayTariffInr": 4500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-breast-core-biopsy-14g",
    "name": "Ultrasound-Guided Breast Core Needle Biopsy (14-Gauge Automated)",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV032",
    "rghsCode": "693 / 41",
    "icd10": "C50.919 (Malignant neoplasm of unspecified breast) / N63.0 (Unspecified lump in breast)",
    "indications": [
      "BI-RADS category 4 or 5 solid or complex cystic/solid breast mass detected on mammography or ultrasound",
      "Palpable breast lump requiring histological characterization prior to definitive surgical or oncological therapy",
      "Assessment of receptor status (ER, PR, HER2-neu, Ki-67) for invasive breast carcinoma",
      "Differentiating invasive ductal carcinoma from fibroadenoma, phyllodes tumor, or fat necrosis"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
      "Diagnostic mammogram and breast ultrasound reviewed with lesion quadrant and clock-face position documented",
      "Aspirin / NSAIDs held 3-5 days if feasible; patient supine or slightly rolled with ipsilateral arm raised",
      "Fasting not required; informed consent obtained"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "14G Automated Spring-Loaded Breast Biopsy Needle",
        "spec": "14G x 10 cm automated cutting needle with 22 mm throw and echogenic tip",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Frequency Linear Breast Probe",
        "spec": "10 - 15 MHz linear array with dedicated breast software",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "10 mL ampoule (1:200,000 epinephrine)",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Biopsy Marker",
        "name": "Titanium Breast Tissue Marker Clip (Optional)",
        "spec": "14G delivery cannula with radiopaque titanium marker",
        "standardStore": "Central IR Consignment Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine or slightly rolled (contralateral posterior oblique) with ipsilateral hand behind head.",
      "Sonographically locate breast mass; measure dimensions and orient needle parallel to chest wall and pectoralis muscle.",
      "Sterilize breast skin; infiltrate 10 mL 2% Lignocaine with adrenaline into skin, subcutaneous fat, and retromammary space under US guidance.",
      "Make a 2-mm skin dermatotomy using an 11-blade scalpel.",
      "Introduce 14G automated needle under real-time continuous sonographic vision along the long axis of the transducer.",
      "Position needle notch at the anterior margin of the mass, keeping trajectory strictly parallel to chest wall to eliminate pneumothorax risk.",
      "Fire automated needle; confirm needle traversing center of tumor; retrieve core; obtain 3-5 cores for full biomarker profiling.",
      "Deploy titanium tissue marker clip if neoadjuvant chemotherapy is planned; apply direct manual compression for 10-15 minutes and pressure dressing."
    ],
    "complications": [
      "Breast bruising and local hematoma (5-10%, usually self-limiting)",
      "Local pain and breast tenderness (10-15%)",
      "Significant hematoma requiring drainage (<1%)",
      "Skin infection / cellulitis (<0.5%)",
      "Pneumothorax (<0.01% with strict parallel-to-chest-wall technique)"
    ],
    "maayTariffInr": 4500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-breast-vabb",
    "name": "Ultrasound-Guided Breast Vacuum-Assisted Core Biopsy (VABB)",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV033",
    "rghsCode": "693 / 43",
    "icd10": "D24.9 (Benign neoplasm of breast) / C50.919 (Breast malignancy)",
    "indications": [
      "Complete therapeutic percutaneous excision of symptomatic benign breast lesions (fibroadenoma, papilloma < 2-3 cm)",
      "High-volume diagnostic sampling of subtle architectural distortion or small complex cysts",
      "Indeterminate (B3) lesions on prior core biopsy (atypical ductal hyperplasia, lobular neoplasia, radial scar)",
      "Cosmetically sensitive scarless breast lesion removal"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.3, Platelets >= 80,000/uL",
      "Complete bilateral mammogram and ultrasound mapping within 6 weeks",
      "Discontinuation of anticoagulants and antiplatelet agents for 5-7 days",
      "Fasting not required; patient supine with ipsilateral arm overhead"
    ],
    "hardware": [
      {
        "category": "VABB System",
        "name": "7G - 10G Vacuum-Assisted Breast Biopsy Handpiece & Driver",
        "spec": "EnCor Enspire / Mammotome Elite / BD EleVation VABB system with rotating cutter and continuous vacuum",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Resolution Linear Probe",
        "spec": "10 - 15 MHz linear transducer",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline & Bicarbonate",
        "spec": "20-30 mL tumescent anesthetic mixture",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Biopsy Marker",
        "name": "Tissue Localization Clip",
        "spec": "Titanium / nitinol radiopaque tissue marker",
        "standardStore": "Central IR Consignment Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine-oblique; sonographically measure the lesion in orthogonal planes.",
      "Infiltrate 20-30 mL buffered 1% Lignocaine with adrenaline around and beneath the lesion to create an acoustic cushion over pectoralis muscle.",
      "Make a single 3-mm skin nick; introduce the 8G-10G VABB probe under continuous real-time sonography directly beneath the lesion.",
      "Engage vacuum suction; the tissue is drawn into the specimen aperture, severed cleanly by the motorized rotating cutter, and transported out automatically without needle withdrawal.",
      "Rotate probe clock-wise (360 degrees) under continuous real-time US vision until the entire mass is completely excised.",
      "Confirm complete lesion clearance on orthogonal sonographic views.",
      "Deploy radiopaque titanium clip into the biopsy cavity through the probe cannula to mark the site for future mammographic surveillance.",
      "Aspirate residual hematoma using vacuum; apply firm manual compression for 15-20 minutes, followed by a pressure compression bandage for 24-48 hours."
    ],
    "complications": [
      "Breast hematoma or ecchymosis (5-12%, controlled with compression)",
      "Post-procedure breast discomfort / aching (15-20%)",
      "Skin tethering or subtle subcutaneous fat necrosis (<1%)",
      "Clip migration away from cavity (<1%)",
      "Infection / abscess (<0.5%)"
    ],
    "maayTariffInr": 18000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Merit Medical Systems (+91 98294 56789)"
    ]
  },
  {
    "id": "stereotactic-breast-vabb",
    "name": "Stereotactic / Tomosynthesis-Guided Vacuum-Assisted Breast Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV034",
    "rghsCode": "693 / 43",
    "icd10": "R92.0 (Mammographic microcalcifications) / D05.10 (Ductal carcinoma in situ)",
    "indications": [
      "Suspicious clustered, linear, or branching microcalcifications (BI-RADS 4 or 5) invisible on ultrasound",
      "Architectural distortion or subtle asymmetry identified only on digital breast tomosynthesis (DBT)",
      "Detection and sampling of Ductal Carcinoma In Situ (DCIS)",
      "Preoperative histological confirmation prior to oncoplastic breast conservation surgery"
    ],
    "preOpCriteria": [
      "Coagulation testing: INR <= 1.3, Platelets >= 80,000/uL",
      "Digital mammogram / DBT demonstrating calcification cluster is safely accessible (>25-30 mm compressed breast thickness)",
      "Aspirin / antiplatelet agents discontinued 5-7 days prior",
      "Patient capable of remaining motionless in prone or seated position for 30 minutes"
    ],
    "hardware": [
      {
        "category": "Biopsy System",
        "name": "9G - 11G Stereotactic / DBT Vacuum Biopsy System",
        "spec": "Hologic Affirm / Brevera / BD EnCor system with computerized coordinate driver",
        "standardStore": "Stereotactic Biopsy Suite"
      },
      {
        "category": "Mammography Unit",
        "name": "Dedicated Digital Mammography / DBT System with Biopsy Add-On",
        "spec": "Upright / prone stereotactic table with stereo-pair tube angulation (+/-15 deg)",
        "standardStore": "Mammography Department"
      },
      {
        "category": "Specimen Radiography",
        "name": "Specimen Radiography Cabinet (Faxitron)",
        "spec": "High-magnification digital specimen radiograph unit",
        "standardStore": "Mammography Department"
      },
      {
        "category": "Marker Clip",
        "name": "Radiopaque Titanium Micro-Marker Clip",
        "spec": "9G delivery system with bioabsorbable collagen / titanium clip",
        "standardStore": "Central IR Consignment Store"
      }
    ],
    "techniqueSteps": [
      "Position patient prone or seated on stereotactic table; apply gentle breast compression targeting the microcalcifications.",
      "Acquire scout stereo-pair mammographic images (+15 and -15 degrees) or DBT sweep; computer calculates 3D coordinates (X, Y, Z depth).",
      "Prep skin; infiltrate 10-15 mL 2% Lignocaine with adrenaline down to the pre-calculated target depth.",
      "Make a 3-mm skin nick; mount 9G-11G vacuum needle on motorized stage and advance to target Z-depth.",
      "Acquire pre-fire stereo check images confirming needle aperture exactly aligned with microcalcifications.",
      "Execute automated 360-degree vacuum aspiration; harvest 6-12 contiguous tissue cores.",
      "Immediately radiograph harvested cores in Faxitron cabinet to verify presence of target microcalcifications in specimens.",
      "Deploy titanium marker clip into biopsy cavity; acquire post-marker release stereo image confirming clip position; apply compression for 15 minutes."
    ],
    "complications": [
      "Breast hematoma or skin bruising (5-10%)",
      "Vasovagal presyncope during compression / upright position (3-5%)",
      "Local breast pain and tenderness (10-15%)",
      "Target calcifications missed, requiring repeat sampling (<2%)",
      "Clip migration (<1%)"
    ],
    "maayTariffInr": 20000,
    "vendorContacts": [
      "Hologic India (+91 98295 67890)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "mri-breast-biopsy",
    "name": "MRI-Guided Breast Core Needle / Vacuum Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV035",
    "rghsCode": "693 / 43",
    "icd10": "C50.919 (Malignant neoplasm of breast) / R92.8 (Other abnormal findings on diagnostic imaging of breast)",
    "indications": [
      "Suspicious enhancing breast lesion seen only on contrast-enhanced dynamic MRI (MRI-only lesion)",
      "Second-look ultrasound and targeted mammography negative for MRI-detected abnormality",
      "High-risk screening (BRCA1/BRCA2 mutation carriers) with occult dynamic enhancing lesion",
      "Assessing multicentricity or contralateral occult malignancy prior to breast cancer surgery"
    ],
    "preOpCriteria": [
      "Standard MRI safety screening: absence of incompatible pacemakers, ferromagnetic clips, or severe claustrophobia",
      "Renal function: Serum Creatinine and eGFR adequate for Gadolinium-based contrast agent",
      "Coagulation: INR <= 1.3, Platelets >= 80,000/uL",
      "Scheduled during days 7-14 of menstrual cycle (if premenopausal) to minimize background parenchymal enhancement"
    ],
    "hardware": [
      {
        "category": "MRI Biopsy System",
        "name": "MRI-Compatible Vacuum Biopsy System",
        "spec": "9G - 10G fully non-magnetic vacuum biopsy handpiece with titanium components",
        "standardStore": "MRI Suite Interventional Cabinet"
      },
      {
        "category": "MRI Coil & Grid",
        "name": "Dedicated Breast Biopsy Coil with Compression Grid",
        "spec": "4-8 channel phased array breast coil with fiducial localization plates",
        "standardStore": "MRI Suite Main Store"
      },
      {
        "category": "MRI Marker",
        "name": "MRI-Compatible Titanium / Nitinol Tissue Marker Clip",
        "spec": "Radiopaque and MRI-compatible post-biopsy marker",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Contrast Agent",
        "name": "Gadolinium-Based Contrast Agent (GBCA)",
        "spec": "0.1 mmol/kg IV macrocyclic Gadolinium",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient prone in the dedicated MRI breast coil with target breast immobilized in the grid compression plate.",
      "Acquire non-contrast T1 and dynamic contrast-enhanced T1-weighted fat-suppressed MRI sequences with fiducial markers.",
      "Identify target enhancing lesion; calculate grid coordinate (alpha-numeric hole) and depth (Z-axis).",
      "Displace patient from gantry bore; sterilize breast grid; infiltrate 15 mL 2% Lignocaine with adrenaline.",
      "Make a 3-mm skin nick; insert MRI-compatible 9G/10G needle sleeve with MRI obturator to calculated depth.",
      "Slide patient back into bore; acquire fast T1 verification scan confirming obturator artifact intersects target lesion.",
      "Replace obturator with MRI-compatible vacuum biopsy cutter; harvest 6-12 circumferential tissue cores.",
      "Deploy MRI-compatible titanium marker clip; acquire confirmation scan verifying clip at site; withdraw probe and apply pressure dressing."
    ],
    "complications": [
      "Breast hematoma and bruising (5-12%)",
      "Vasovagal episode or claustrophobia during MRI bore positioning (3-5%)",
      "Local pain and soreness (10-15%)",
      "Lesion non-visualization after contrast washout (<2%)",
      "Allergic reaction to Gadolinium contrast (<0.1%)"
    ],
    "maayTariffInr": 25000,
    "vendorContacts": [
      "Hologic India (+91 98295 67890)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "trus-prostate-biopsy-12core",
    "name": "Ultrasound-Guided Transrectal Prostate Biopsy (TRUS-Biopsy, 12-Core Systematic)",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV036",
    "rghsCode": "693 / 41",
    "icd10": "C61 (Malignant neoplasm of prostate) / R97.20 (Elevated prostate specific antigen [PSA])",
    "indications": [
      "Serum Prostate-Specific Antigen (PSA) > 4.0 ng/mL or abnormal PSA density (>0.15 ng/mL2)",
      "Abnormal digital rectal examination (DRE) with palpable nodule or induration",
      "Systematic 12-core sampling of peripheral zone (base, mid, apex bilaterally)",
      "Surveillance biopsy in active surveillance protocols for low-risk prostate carcinoma"
    ],
    "preOpCriteria": [
      "Prophylactic fluoroquinolone / cephalosporin + aminoglycoside coverage (e.g. Ciprofloxacin/Ceftriaxone + Amikacin) administered 1-2 hours prior",
      "Fleet enema / rectal cleansing 2 hours prior to clear rectal ampulla",
      "Coagulation: INR <= 1.4, Platelets >= 50,000/uL; Aspirin held 5-7 days",
      "Urine routine/culture negative for active urinary tract infection"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "18G Automated Core Biopsy Needle",
        "spec": "18G x 20-25 cm automated needle with 15-20 mm throw, echogenic tip",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Probe",
        "name": "Endocavitary Biplane TRUS Transducer",
        "spec": "5 - 9 MHz biplane endocavitary probe with disposable needle guide",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 1% - 2% (Preservative-Free)",
        "spec": "10-15 mL with 22G x 20 cm Chiba needle for periprostatic nerve block",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Pre-Labeled 12-Vial Prostate Cassettes",
        "spec": "12 formalin containers labeled for right/left base, mid, apex, lateral/medial",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient in left lateral decubitus position with knees flexed toward chest.",
      "Perform gentle digital rectal examination; insert lubricated transrectal probe covered with sterile condom.",
      "Survey prostate gland, measure volume (Height x Width x Length x 0.52), and inspect peripheral zone.",
      "Perform bilateral periprostatic nerve block (PPNB): inject 5 mL 1% Lignocaine at the prostatic-seminal vesicle junction bilaterally under vision.",
      "Attach sterile needle guide to probe; introduce 18G automated core needle through rectal wall.",
      "Harvest 12 systematic cores: 6 from right peripheral zone (base lateral/medial, mid lateral/medial, apex lateral/medial) and 6 from left.",
      "Deposit each core into its individually pre-labeled formalin container.",
      "Withdraw probe; apply rectal compression for 2 minutes; instruct patient on hydration and red-flag symptoms (fever, urinary retention)."
    ],
    "complications": [
      "Hematuria (blood in urine) (50-60%, usually mild, self-limiting for 3-7 days)",
      "Hematospermia (blood in semen) (60-80%, can persist for 3-4 weeks)",
      "Rectal bleeding / minor hematochezia (15-20%)",
      "Urinary tract infection / post-biopsy sepsis (1-3%, requires urgent IV antibiotics)",
      "Acute urinary retention requiring temporary catheterization (1-2%)"
    ],
    "maayTariffInr": 4800,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "mri-us-fusion-transperineal-prostate-biopsy",
    "name": "MRI-Ultrasound Fusion Targeted Transperineal Prostate Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV037",
    "rghsCode": "693 / 43",
    "icd10": "C61 (Malignant neoplasm of prostate) / R97.20 (Elevated PSA)",
    "indications": [
      "PI-RADS 3, 4, or 5 lesion identified on multiparametric prostate MRI (mpMRI)",
      "Anterior gland, transition zone, or apical prostate lesions notoriously missed on standard TRUS",
      "Patients with prior negative TRUS biopsy despite persistently rising PSA",
      "Elimination of post-biopsy urosepsis risk via clean transperineal access"
    ],
    "preOpCriteria": [
      "High-quality multiparametric MRI (T2W, DWI/ADC, DCE) reviewed with PIRADS scoring and ROI contours exported",
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "Single prophylactic dose of oral/IV antibiotic (no intense broad-spectrum cocktail required)",
      "Perineal skin clean; patient suitable for lithotomy positioning under sedation"
    ],
    "hardware": [
      {
        "category": "Fusion Platform",
        "name": "MRI-US Fusion Biopsy Navigation System",
        "spec": "Eigen Artemis / Koelis Trinity / Philips UroNav fusion platform with stepper unit",
        "standardStore": "Urology / IR Fusion Suite"
      },
      {
        "category": "Biopsy Needle",
        "name": "18G Coaxial Transperineal Biopsy Needle",
        "spec": "18G x 15-20 cm needle with disposable brachytherapy-style grid",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "Biplane Transrectal Ultrasound Probe",
        "spec": "Sagittal and transverse array with stepper tracking",
        "standardStore": "Fusion Suite"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% + Bupivacaine 0.5%",
        "spec": "Perineal subcutaneous and pelvic floor block",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient in dorsal lithotomy posture with legs elevated in stirrups.",
      "Sterilize the perineal skin between scrotum and anus under surgical asepsis.",
      "Insert tracking transrectal ultrasound probe; upload mpMRI data into fusion software and perform 3D image co-registration.",
      "Administer perineal subcutaneous and periprostatic / pelvic floor nerve block with 15-20 mL Lignocaine/Bupivacaine.",
      "Verify overlay of MRI-identified PIRADS lesion on live transrectal ultrasound images.",
      "Introduce 18G needle through perineal skin template grid directly into the targeted MRI region of interest.",
      "Harvest 3-5 targeted cores specifically from the PIRADS lesion; followed by systematic template sampling (12-14 cores).",
      "Withdraw needle and probe; apply pressure to perineum for 5 minutes; verify clear spontaneous voiding prior to discharge."
    ],
    "complications": [
      "Perineal bruising and local discomfort (10-15%)",
      "Hematuria (20-30%, clears in 2-4 days)",
      "Urosepsis / severe infection (<0.1%, virtually zero compared to transrectal route)",
      "Hematospermia (40-50%)",
      "Transient urinary retention (2-3%)"
    ],
    "maayTariffInr": 16000,
    "vendorContacts": [
      "Koelis / Jaipur Medical Systems (+91 98296 78901)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "mri-us-fusion-transrectal-prostate-biopsy",
    "name": "MRI-Ultrasound Fusion Targeted Transrectal Prostate Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV038",
    "rghsCode": "693 / 43",
    "icd10": "C61 (Malignant neoplasm of prostate) / R97.20 (Elevated PSA)",
    "indications": [
      "Targeted sampling of PIRADS 3, 4, or 5 suspicious lesions identified on multiparametric prostate MRI",
      "Patients undergoing transrectal biopsy where software fusion equipment is available",
      "Targeted lesion cores combined with 12-core systematic template for comprehensive staging",
      "Repeat biopsy after initial negative systematic biopsy in patients with high clinical suspicion"
    ],
    "preOpCriteria": [
      "Prophylactic antibiotic regimen administered (Ciprofloxacin/Ceftriaxone + Amikacin)",
      "Rectal cleaning enema administered 2 hours prior",
      "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
      "Pre-procedure mpMRI DICOM loaded into fusion console with target contours marked"
    ],
    "hardware": [
      {
        "category": "Fusion System",
        "name": "MRI-US Fusion Transrectal Biopsy Platform",
        "spec": "UroNav / Artemis fusion station with electromagnetic or mechanical tracker",
        "standardStore": "Urology / IR Fusion Suite"
      },
      {
        "category": "Biopsy Needle",
        "name": "18G Automated Core Needle",
        "spec": "18G x 25 cm automated needle with echogenic tip",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Probe",
        "name": "Endocavitary Transrectal Probe with Tracker",
        "spec": "Biplane probe with calibrated spatial tracking sensor",
        "standardStore": "Fusion Suite"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 1% - 2%",
        "spec": "15 mL for bilateral periprostatic nerve block",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient in left lateral decubitus position with knees drawn to chest.",
      "Insert tracked endocavitary probe into rectum; perform spatial calibration to register live US with 3D MRI contours.",
      "Administer bilateral periprostatic nerve block (PPNB) under direct US guidance.",
      "Align transrectal biopsy guide with computer-projected MRI target trajectory.",
      "Advance 18G needle through rectal wall into the center of the PIRADS lesion; harvest 3-5 targeted cores.",
      "Complete procedure by performing standard 12-core systematic biopsy of the peripheral zone.",
      "Deposit targeted and systematic cores into separate pre-labeled formalin containers.",
      "Remove probe; compress rectum for 2 minutes; monitor vital signs and voiding."
    ],
    "complications": [
      "Hematuria (50-60%, usually mild)",
      "Hematospermia (60-80%, lasts several weeks)",
      "Rectal bleeding (15-20%)",
      "Post-biopsy infection / sepsis (1-3%, requires prompt IV antibiotics)",
      "Urinary retention (<2%)"
    ],
    "maayTariffInr": 14000,
    "vendorContacts": [
      "Philips Healthcare India (+91 98297 89012)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "ct-bone-biopsy-jamshidi",
    "name": "CT-Guided Bone Biopsy with Jamshidi Trephine Needle",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV039",
    "rghsCode": "693 / 42",
    "icd10": "M89.9 (Disorder of bone, unspecified) / C79.51 (Secondary malignant neoplasm of bone)",
    "indications": [
      "Destructive or mixed osteolytic bone lesion in pelvis, long bones, or vertebral column",
      "Suspected bone metastasis from unknown primary carcinoma",
      "Confirmation of multiple myeloma or solitary plasmacytoma",
      "Chronic osteomyelitis / tubercular skeletal disease requiring microbiological culture"
    ],
    "preOpCriteria": [
      "Coagulation status: INR <= 1.4, Platelets >= 60,000/uL",
      "Recent CT, MRI, or PET-CT reviewed to evaluate cortical breakthrough vs intact bone cortex",
      "Fasting 4 hours; adequate analgesia premedication administered",
      "Needle trajectory mapped perpendicular to bone cortex avoiding adjacent neurovascular bundles"
    ],
    "hardware": [
      {
        "category": "Bone Needle",
        "name": "11G / 13G Jamshidi Trephine Bone Biopsy Needle",
        "spec": "11G/13G x 10-15 cm manual trephine needle with extraction cannula and stylet",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "CT Accessories",
        "name": "Radiopaque Skin Grid & Laser Pointer",
        "spec": "Sterile skin localization grid",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% + Bupivacaine 0.5%",
        "spec": "20 mL for generous subperiosteal infiltration",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Microbiology Transport Tubes",
        "spec": "10% formalin and sterile saline containers for fungal and AFB culture",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient prone, supine, or decubitus on CT table depending on bone lesion location.",
      "Acquire planning CT images; locate cortical breach or thinned cortex for optimal entry site.",
      "Sterilize and drape skin; infiltrate 15-20 mL local anesthetic into skin, subcutaneous tissues, and profusely under the bone periosteum.",
      "Make a 4-mm skin incision with scalpel.",
      "Introduce 11G/13G Jamshidi needle down to the bone surface under CT guidance; confirm needle angle perpendicular to cortex.",
      "Remove trocar stylet; advance trephine cannula through bone cortex with firm clockwise/counter-clockwise rotational pressure.",
      "Advance 15-20 mm into lesion marrow cavity; tilt needle 360 degrees to cleave the bone core base; withdraw needle.",
      "Eject intact bony cylindrical core using probe into formalin; send soft-tissue marrow for microbiology; apply sterile pressure dressing."
    ],
    "complications": [
      "Localized bone pain and deep muscular soreness (15-25%)",
      "Periosteal / subcutaneous hematoma (2-4%)",
      "Pathological fracture through biopsied bone cortex (<1%)",
      "Inadvertent neurovascular bundle injury (<0.5%)",
      "Inadequate crushed bone core (<5%)"
    ],
    "maayTariffInr": 8500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "ct-bone-biopsy-mechanical-drill",
    "name": "CT-Guided Bone Biopsy with Powered Mechanical Drill (Bonopty / OnControl)",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV040",
    "rghsCode": "693 / 43",
    "icd10": "M89.9 (Disorder of bone, unspecified) / C79.51 (Secondary bone malignancy)",
    "indications": [
      "Dense sclerotic or osteoblastic bone lesions (e.g. prostate or breast sclerotic metastases) where manual needles fail",
      "Deep cortical bone lesions through thick, intact cortex (femoral shaft, pelvic ring, sclerotic spine)",
      "Rapid, torque-free bone penetration in patients with severe pain or frail bone stability",
      "Retrieval of uncrushed, high-quality architectural bone core specimens"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "CT reviewed to plan exact entry trajectory through sclerotic cortex",
      "Battery pack charged and sterile drill handpiece checked prior to draping",
      "Patient premedicated with analgesia and conscious sedation"
    ],
    "hardware": [
      {
        "category": "Powered Drill System",
        "name": "Motorized Bone Biopsy System (OnControl / Bonopty)",
        "spec": "Battery-powered drill driver with 11G/13G coaxial cannulas and drill biopsy needles",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "CT Accessories",
        "name": "Radiopaque Skin Grid & Laser Pointer",
        "spec": "Sterile CT localization grid",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% + Bupivacaine 0.5%",
        "spec": "20 mL for deep periosteal block",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Microbiology Medium",
        "spec": "10% formalin and saline transport tubes",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient comfortably on CT couch based on target bone location.",
      "Acquire planning CT images; calculate entry coordinates through dense sclerotic bone.",
      "Aseptically prepare and drape; infiltrate 15-20 mL local anesthetic down to periosteum.",
      "Make 3-4 mm skin nick; introduce coaxial outer cannula to contact dense bone cortex under CT fluoroscopy.",
      "Insert powered drill needle through cannula; attach battery-operated drill handpiece.",
      "Depress drill trigger; penetrate dense cortex smoothly without manual twisting or excessive axial force under CT monitoring.",
      "Advance drill cannula 15-20 mm into sclerotic lesion to core out intact bone cylinder.",
      "Reverse drill, withdraw cannula, and eject intact bone core using extraction rod; confirm lack of hematoma on post-biopsy CT; apply pressure dressing."
    ],
    "complications": [
      "Post-procedure bone ache / soreness (15-20%)",
      "Periosteal hematoma (2-4%)",
      "Drill tip overheating if saline flush not used (<0.5%)",
      "Pathological fracture in heavily diseased bone (<1%)",
      "Adjacent nerve irritation (<0.5%)"
    ],
    "maayTariffInr": 12000,
    "vendorContacts": [
      "Teleflex / Arrow Medical India (+91 98295 67890)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "ct-sclerotic-vertebral-biopsy",
    "name": "CT-Guided Sclerotic Vertebral Body Core Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV041",
    "rghsCode": "693 / 42",
    "icd10": "C79.51 (Secondary malignant neoplasm of bone) / M84.58 (Pathological fracture in other disease)",
    "indications": [
      "Dense osteoblastic / sclerotic vertebral body lesion suspicious for metastatic prostate, breast, or carcinoid cancer",
      "Evaluation of single or multiple sclerotic vertebrae of unknown etiology (Paget's vs osteosclerotic myeloma vs metastasis)",
      "Patients with back pain and sclerotic vertebral body without epidural compression",
      "Differentiating chronic sclerosing osteomyelitis from osteosarcoma"
    ],
    "preOpCriteria": [
      "Coagulation profile strictly verified: INR <= 1.3, Platelets >= 80,000/uL",
      "Spine CT and MRI reviewed to plan transpedicular vs extrapedicular access route and confirm spinal canal clearance",
      "Fasting 4 hours; patient capable of lying prone for 30 minutes",
      "Neurological examination documented pre-procedure (motor, sensory, reflexes in lower limbs)"
    ],
    "hardware": [
      {
        "category": "Bone Biopsy Set",
        "name": "11G / 13G Transpedicular Vertebral Biopsy Needle",
        "spec": "11G x 12-15 cm trocared cannula with diamond-tip drill and trephine cutting needle",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "CT Accessories",
        "name": "Radiopaque Skin Grid & Laser Alignment",
        "spec": "Sterile CT localization grid",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% + Bupivacaine 0.5%",
        "spec": "20 mL for paraspinal and periosteal block",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Preparation",
        "name": "Formalin Vials & Microbiology Kits",
        "spec": "10% neutral buffered formalin and sterile saline containers",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient strictly prone on CT table with pillows under chest and pelvis to reduce lumbar lordosis.",
      "Acquire thin-slice CT through the target vertebra; map pedicle dimensions (width, height, angle).",
      "Select transpedicular route: entrance at junction of superior articular process and transverse process, aiming through center of pedicle into vertebral body.",
      "Sterilize back; infiltrate 15-20 mL local anesthetic into skin, paraspinal muscles, and pedicle periosteum under CT vision.",
      "Introduce 11G/13G coaxial needle onto posterior pedicle cortex; confirm 'bulls-eye' trajectory on CT check slices avoiding medial pedicle wall.",
      "Advance trephine / drill needle through the dense sclerotic pedicle into the anterior two-thirds of the vertebral body.",
      "Harvest 1-2 dense bony cores; inspect cores for solid bone/marrow; deposit into formalin and saline.",
      "Withdraw needle; perform post-biopsy CT scan to verify pedicle integrity and absence of epidural or paraspinal hematoma; apply pressure dressing."
    ],
    "complications": [
      "Post-procedure back soreness and muscular stiffness (15-20%)",
      "Paraspinal hematoma (1-3%)",
      "Medial pedicle wall breach with transient radicular nerve pain (<1%)",
      "Epidural hematoma or spinal cord irritation (<0.2%)",
      "Pneumothorax in thoracic spine biopsy (<0.5%)"
    ],
    "maayTariffInr": 11000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "ct-lytic-vertebral-biopsy",
    "name": "CT-Guided Lytic Vertebral Lesion Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV042",
    "rghsCode": "693 / 42",
    "icd10": "C79.51 (Secondary bone malignancy) / M46.20 (Osteomyelitis of vertebra)",
    "indications": [
      "Destructive osteolytic vertebral collapse with or without soft tissue epidural / paravertebral mass",
      "Suspected solitary plasmacytoma, multiple myeloma, or osteolytic metastasis (lung, breast, renal)",
      "Infectious spondylodiscitis (tuberculous Pott's spine vs pyogenic / fungal discitis)",
      "Histological typing prior to percutaneous vertebroplasty or kyphoplasty"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "Spine MRI reviewed to identify soft-tissue components, cord compression, and disc involvement",
      "Fasting 4 hours; IV line running",
      "Pre-procedure neurological assessment documented"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "13G / 15G Coaxial Vertebral Needle System",
        "spec": "13G introducer cannula with 15G trephine and 18G semi-automated core needle",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "CT Accessories",
        "name": "Radiopaque Skin Grid & Laser Pointer",
        "spec": "Sterile CT localization grid",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "20 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Microbiology Medium",
        "name": "Aerobic, Anaerobic, Fungal, and BACTEC Vials",
        "spec": "Sterile tubes for culture and GeneXpert MTB/RIF assay",
        "standardStore": "Microbiology Collection Unit"
      }
    ],
    "techniqueSteps": [
      "Position patient prone on CT gantry with support pillows beneath chest and hips.",
      "Acquire thin-slice CT through the lytic vertebral level; locate soft tissue marrow replacement and destroyed cortex.",
      "Plan transpedicular or posterolateral extrapedicular approach traversing the lytic epicenter.",
      "Sterilize and drape back; infiltrate 15 mL 2% Lignocaine into skin, paraspinal muscles, and periosteum.",
      "Advance 13G coaxial needle under intermittent CT guidance through the pedicle or soft tissue destruction directly into the lesion.",
      "Verify tip position in the non-necrotic portion of the lytic cavity on CT check slices.",
      "Pass 15G trephine needle or 18G soft tissue cutting needle and harvest 2-3 core tissue passes.",
      "Send cores for histopathology, myeloma stains, GeneXpert MTB, and bacterial/fungal culture; acquire completion CT; apply pressure dressing."
    ],
    "complications": [
      "Post-biopsy back soreness (15-20%)",
      "Paraspinal hematoma (1-3%)",
      "Transient radicular nerve pain (<1%)",
      "Worsening vertebral collapse (<0.5%)",
      "Epidural hematoma (<0.2%)"
    ],
    "maayTariffInr": 10000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "ct-sacral-iliac-bone-biopsy",
    "name": "CT-Guided Sacral / Iliac Bone Core Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV043",
    "rghsCode": "693 / 42",
    "icd10": "C79.51 (Secondary malignant neoplasm of bone) / D48.0 (Neoplasm of bone and articular cartilage)",
    "indications": [
      "Sacral tumor suspicious for chordoma, giant cell tumor (GCT), or chondrosarcoma",
      "Iliac bone lytic or sclerotic lesions suspicious for metastatic disease, lymphoma, or Ewing sarcoma",
      "Sacroiliac joint infection / septic sacroiliitis requiring synovial and bone culture",
      "Atypical pelvic ring lesions detected on staging PET-CT"
    ],
    "preOpCriteria": [
      "Coagulation profile: INR <= 1.4, Platelets >= 60,000/uL",
      "Pelvic CT and MRI reviewed to evaluate sacral canal, sacral neural foramina, and iliac vessels",
      "Fasting 4 hours; patient positioned prone comfortably with hip support",
      "Planning to avoid sacral nerves (S1-S4) and internal iliac neurovascular bundle"
    ],
    "hardware": [
      {
        "category": "Bone Biopsy Needle",
        "name": "11G / 13G Trephine Bone Biopsy System",
        "spec": "11G/13G x 10-15 cm trephine needle with extraction cannula",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "CT Accessories",
        "name": "Radiopaque Skin Grid & Laser Pointer",
        "spec": "Sterile CT localization grid",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% + Bupivacaine 0.5%",
        "spec": "20 mL for periosteal infiltration",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Microbiology Media",
        "spec": "10% formalin and sterile culture containers",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient prone on CT couch with foam pads supporting pelvic crests.",
      "Acquire planning CT through the sacrum and iliac wings; identify target lesion and select entry point.",
      "Plan trajectory avoiding sacral neural foramina, sciatic notch, and deep pelvic viscera.",
      "Sterilize buttock/sacral region; infiltrate 15-20 mL local anesthetic into skin, gluteal fascia, and periosteum.",
      "Introduce 11G/13G coaxial needle onto the outer cortical surface under CT guidance.",
      "Advance trephine needle through the cortex into the center of the sacral or iliac mass with rotary motion.",
      "Harvest 1-2 intact bone core specimens; inspect for diagnostic marrow/bone tissue.",
      "Withdraw needle; perform completion non-contrast CT to rule out pelvic or gluteal hematoma; apply pressure dressing."
    ],
    "complications": [
      "Gluteal / buttock pain and soreness (15-20%)",
      "Local hematoma or bruising (2-4%)",
      "Sacral nerve root irritation with transient sciatica / buttock numbness (<1%)",
      "Pelvic hematoma (<0.5%)",
      "Crushed or fragmented specimen (<3%)"
    ],
    "maayTariffInr": 8500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "ct-appendicular-bone-biopsy",
    "name": "CT-Guided Appendicular Skeleton Bone Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV044",
    "rghsCode": "693 / 42",
    "icd10": "M89.9 (Disorder of bone, unspecified) / C40.90 (Malignant neoplasm of unspecified bones of limb)",
    "indications": [
      "Lytic, blastic, or permeative bone lesion in long bones (femur, tibia, humerus, radius, fibula)",
      "Suspected primary bone sarcoma (osteosarcoma, chondrosarcoma, Ewing sarcoma) requiring strict limb-salvage longitudinal biopsy tract",
      "Metastatic bone lesion in extremity bone causing impending pathological fracture",
      "Chronic Brodie's abscess / subacute osteomyelitis requiring microbiological isolation"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "Biopsy tract STRICTLY planned in consultation with orthopedic oncological surgeon along the planned future surgical incision line to allow en-bloc tract excision during limb salvage",
      "Fasting 4 hours; limb securely immobilized on CT table",
      "Avoiding joint transgression, neurovascular bundle, and multiple muscle compartments"
    ],
    "hardware": [
      {
        "category": "Bone Needle",
        "name": "11G / 13G Coaxial Bone Trephine Needle",
        "spec": "11G/13G x 10-15 cm trephine needle with extraction cannula",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "CT Accessories",
        "name": "Radiopaque Skin Grid & Laser Marker",
        "spec": "Sterile CT skin grid",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% + Bupivacaine 0.5%",
        "spec": "20 mL for deep periosteal block",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Microbiology Kits",
        "spec": "10% formalin and sterile saline culture bottles",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine or lateral with affected extremity immobilized with sandbags on CT table.",
      "Acquire thin-slice planning CT; mark biopsy entry site strictly along the longitudinal axis of the anticipated future surgical resection scar.",
      "Aseptically prepare and drape limb; infiltrate local anesthetic down to the periosteum under CT vision.",
      "Make small 3-4 mm skin nick; introduce 11G/13G coaxial needle directly through a single anatomical compartment onto the bone cortex.",
      "Advance trephine needle through cortex into the epicenter of the tumor during continuous CT surveillance.",
      "Harvest 2-3 intact bone core specimens; inspect for diagnostic tissue; transfer to formalin and culture vials.",
      "Perform coaxial tract embolization with gelatin sponge or bone wax if indicated to minimize hematoma and tumor seeding.",
      "Obtain completion CT to confirm cortical integrity and absence of expanding hematoma; apply firm compression dressing."
    ],
    "complications": [
      "Extremity pain and bone aching (15-20%)",
      "Subperiosteal or intramuscular hematoma (2-4%)",
      "Iatrogenic fracture of weakened cortex (<1%)",
      "Tumor tract contamination if proper surgical line not adhered to (<0.5%)",
      "Neurovascular injury (<0.2%)"
    ],
    "maayTariffInr": 8000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-soft-tissue-extremity-biopsy",
    "name": "Ultrasound-Guided Soft Tissue Extremity Mass Core Needle Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV045",
    "rghsCode": "693 / 41",
    "icd10": "C49.9 (Malignant neoplasm of connective and soft tissue, unspecified) / D21.9 (Benign neoplasm of connective and soft tissue)",
    "indications": [
      "Deep intramuscular or subcutaneous soft tissue mass suspicious for soft tissue sarcoma (liposarcoma, leiomyosarcoma, synovial sarcoma)",
      "Differentiation of benign soft tissue tumors (schwannoma, desmoid fibromatosis, hemangioma) from malignancy",
      "Metastatic soft tissue deposits in extremities",
      "Recurrent soft tissue sarcoma following surgical resection"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "Pre-procedure contrast-enhanced MRI reviewed to identify solid viable non-necrotic areas and compartmental anatomy",
      "Biopsy tract planned strictly longitudinally along the planned surgical limb-salvage resection incision",
      "Avoiding cross-compartmental spread and avoiding adjacent major neurovascular bundles"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "14G / 16G Automated Core Needle Biopsy System",
        "spec": "14G/16G x 10-15 cm automated cutting needle with 20 mm throw, echogenic tip",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Frequency Linear Probe",
        "spec": "7 - 15 MHz linear array with musculoskeletal preset",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "15 mL vial",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Cytogenetic Media",
        "spec": "10% formalin and sterile saline for molecular sarcoma translocation testing",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient comfortably with extremity supported on procedure table.",
      "Perform ultrasound examination to evaluate tumor margins, internal vascularity with Color Doppler, and necrotic cystic components.",
      "Select a strictly longitudinal in-plane trajectory within a single anatomical muscle compartment.",
      "Sterilize and drape skin under surgical asepsis.",
      "Infiltrate 10-15 mL 2% Lignocaine into skin, subcutaneous layer, and pseudocapsule of the mass under direct vision.",
      "Make a 2-mm skin nick; advance 14G/16G needle under continuous real-time linear probe visualization into viable solid tumor margin.",
      "Trigger automated cutting mechanism; harvest 3-5 cores from multiple angles through the single skin entry site.",
      "Examine cores for firm diagnostic tumor tissue; deposit into formalin; apply firm manual pressure for 10 minutes and pressure bandage."
    ],
    "complications": [
      "Local muscle pain and soreness (10-15%)",
      "Intramuscular hematoma (2-4%)",
      "Tumor tract contamination (<0.5% when strict longitudinal path followed)",
      "Minor sensory nerve irritation (<0.5%)",
      "Inadequate or necrotic tissue sample (<3%)"
    ],
    "maayTariffInr": 5000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-subcutaneous-nodule-fnac",
    "name": "Ultrasound-Guided Subcutaneous Nodule FNAC",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV046",
    "rghsCode": "693 / 41",
    "icd10": "L98.9 (Disorder of the skin and subcutaneous tissue, unspecified) / C44.90 (Malignant neoplasm of skin)",
    "indications": [
      "Palpable or impalpable subcutaneous nodule of uncertain clinical etiology",
      "Suspected subcutaneous metastases (sister Mary Joseph nodule, cutaneous melanoma or breast recurrence)",
      "Differentiating epidermal inclusion cyst, pilomatricoma, or neurofibroma from malignant soft tissue nodule",
      "Infectious subcutaneous granulomas (mycobacterial / fungal / parasitic cysts)"
    ],
    "preOpCriteria": [
      "Coagulation: normal platelet count and screening",
      "Superficial ultrasound documenting nodule depth, margins, and relationship to dermal layer and deep fascia",
      "Informed verbal and written consent",
      "Clean skin surface without active cellulitis over entry site"
    ],
    "hardware": [
      {
        "category": "Aspiration Needle",
        "name": "22G - 24G Fine Needle with Syringe",
        "spec": "22G/24G x 1.0 inch needle with 5-10 mL syringe",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Frequency Linear Probe",
        "spec": "10 - 18 MHz ultra-high frequency linear probe",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "2 mL ampoule (optional dermal wheal)",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Cytology Supplies",
        "name": "Glass Slides & Fixative Spray",
        "spec": "Air-dried and 95% ethanol fixative slides",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient comfortably with the target skin nodule exposed.",
      "Apply generous ultrasound gel; scan nodule with ultra-high frequency linear probe to assess cystic vs solid nature.",
      "Sterilize overlying skin with chlorhexidine swab.",
      "Optional: administer 0.5 mL 2% Lignocaine into superficial dermis.",
      "Introduce 22G-24G needle under real-time in-plane sonographic guidance directly into the nodule center.",
      "Execute 4-6 rapid capillary fanning passes across the nodule over 10 seconds.",
      "Withdraw needle; express aspirate onto glass slides, smear gently, and fix half in 95% alcohol and air-dry half.",
      "Apply direct manual pressure over puncture site for 3 minutes; apply sterile band-aid."
    ],
    "complications": [
      "Minor local tenderness or small bruise (5-10%)",
      "Small subcutaneous hematoma (1-2%)",
      "Superficial skin infection (<0.5%)",
      "Transient vasovagal lightheadedness (<1%)",
      "Inadequate cellularity requiring repeat aspiration (<5%)"
    ],
    "maayTariffInr": 2500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-subcutaneous-mass-core-biopsy",
    "name": "Ultrasound-Guided Subcutaneous Lipomatous / Fibrous Mass Core Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV047",
    "rghsCode": "693 / 41",
    "icd10": "D17.9 (Benign lipomatous neoplasm) / C49.9 (Malignant neoplasm of connective tissue)",
    "indications": [
      "Large (>5 cm) or rapidly growing subcutaneous lipomatous lesion suspicious for well-differentiated liposarcoma (WDLPS)",
      "Fibrous or infiltrative subcutaneous mass (dermatofibrosarcoma protuberans [DFSP] or nodular fasciitis)",
      "Inconclusive prior FNAC yielding only mature adipocytes or hypocellular fibrotic material",
      "Preoperative histology to plan surgical margins for atypical subcutaneous tumors"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "High-resolution ultrasound demonstrating mass dimensions, internal echogenicity, septal thickness (>2 mm), and vascularity",
      "Informed consent obtained",
      "Aspirin / NSAIDs paused 3-5 days if feasible"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "16G / 18G Automated Core Biopsy Needle",
        "spec": "16G/18G x 10 cm automated cutting needle with 15-20 mm throw",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Frequency Linear Probe",
        "spec": "7 - 15 MHz linear array",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "10 mL ampoule",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Molecular Kits",
        "spec": "10% formalin and saline for MDM2 amplification testing",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient comfortably with subcutaneous mass clearly exposed.",
      "Sonographically survey the entire lesion; identify thickened septa, nodular solid components, or vascularized foci.",
      "Aseptically prepare and drape skin over the mass.",
      "Infiltrate 5-10 mL 2% Lignocaine into skin, subcutaneous layer, and pseudocapsule of the mass.",
      "Make 2-mm skin nick; introduce 16G/18G core needle under continuous real-time linear probe visualization into the solid septal component.",
      "Fire cutting mechanism tangential to underlying deep muscle fascia to prevent fascial transgression.",
      "Harvest 3-4 substantial cores; confirm presence of firm tissue rather than liquefactive fat.",
      "Deposit cores into formalin (for MDM2/CDK4 FISH analysis for liposarcoma); compress puncture site for 5 minutes and apply dressing."
    ],
    "complications": [
      "Local tenderness and bruising (10-15%)",
      "Subcutaneous hematoma (2-4%)",
      "Superficial wound infection (<0.5%)",
      "Fat necrosis nodule (<1%)",
      "Sample containing only mature fat requiring repeat biopsy (<3%)"
    ],
    "maayTariffInr": 4500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-superficial-ln-fnac",
    "name": "Ultrasound-Guided Superficial Lymph Node (Axillary, Inguinal, Supraclavicular) FNAC",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV048",
    "rghsCode": "693 / 41",
    "icd10": "R59.0 (Localized lymphadenopathy) / C77.9 (Secondary malignant neoplasm of lymph node)",
    "indications": [
      "Suspicious axillary lymph node in breast cancer staging or surveillance",
      "Enlarged inguinal lymph node in penile, vulvar, anal, or lower limb melanoma/carcinoma",
      "Left supraclavicular lymphadenopathy (Virchow's node) in suspected gastrointestinal or thoracic malignancy",
      "Tuberculous lymphadenitis screening with GeneXpert / AFB cytology"
    ],
    "preOpCriteria": [
      "Coagulation: normal platelet count and screening",
      "Ultrasound documentation of cortical thickening (>3 mm), loss of fatty hilum, or rounded shape",
      "Skin clean and intact without overlying ulceration",
      "Rapid on-site cytopathology review available"
    ],
    "hardware": [
      {
        "category": "Aspiration Needle",
        "name": "22G - 24G Fine Aspiration Needle",
        "spec": "22G/24G x 1.0-1.5 inch needle with 10 mL syringe",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Frequency Linear Probe",
        "spec": "8 - 15 MHz linear array with lymph node preset",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "2 mL ampoule (optional dermal wheal)",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Cytology Supplies",
        "name": "Glass Slides & GeneXpert Vials",
        "spec": "Air-dried, 95% ethanol slides, and sterile saline for GeneXpert MTB",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine (axilla: arm abducted; groin: hip abducted; supraclavicular: neck extended).",
      "Sonographically survey the lymph node basin; identify the most suspicious node with eccentric cortical thickening.",
      "Sterilize the skin under sterile surgical precautions.",
      "Optional: raise tiny dermal wheal of 0.5 mL 2% Lignocaine.",
      "Advance 22G-24G needle under continuous real-time in-plane sonographic guidance directly into the thickened cortex, strictly avoiding the axillary/femoral/subclavian vessels.",
      "Perform 4-6 capillary fanning passes across the nodal cortex over 10 seconds.",
      "Withdraw needle; express aspirate onto glass slides, smear gently, and fix in 95% alcohol and air-dry; rinse hub into saline for GeneXpert if infection suspected.",
      "Apply direct manual pressure for 5 minutes; verify absence of hematoma with Color Doppler."
    ],
    "complications": [
      "Local soreness and mild bruising (5-10%)",
      "Intranodal hematoma (1-2%)",
      "Inadvertent adjacent vessel puncture (<0.5%, controlled with 5 min pressure)",
      "Transient dizziness / vasovagal episode (<1%)",
      "Inadequate cellular sample requiring repeat test (<5%)"
    ],
    "maayTariffInr": 2800,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-superficial-ln-core-biopsy",
    "name": "Ultrasound-Guided Superficial Lymph Node Core Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV049",
    "rghsCode": "693 / 41",
    "icd10": "C85.90 (Non-Hodgkin lymphoma) / A18.2 (Tuberculous peripheral lymphadenopathy)",
    "indications": [
      "Superficial lymphadenopathy (axillary, inguinal, supraclavicular) suspicious for lymphoma requiring intact tissue for architecture and IHC",
      "Metastatic breast or melanoma nodal involvement requiring complete biomarker receptor profiling",
      "Repeatedly non-diagnostic, necrotic, or hypocellular FNAC in enlarged superficial lymph nodes",
      "Microbiological isolation and histological confirmation of resistant mycobacterial or fungal infections"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "High-resolution ultrasound demonstrating node size >= 10-15 mm with safe clearance from axillary/femoral/subclavian vessels",
      "Antiplatelet agents paused appropriately",
      "Informed written procedural consent"
    ],
    "hardware": [
      {
        "category": "Biopsy Needle",
        "name": "16G / 18G Automated Core Needle",
        "spec": "16G/18G x 10 cm automated cutting needle with 15-20 mm throw",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "High-Frequency Linear Probe",
        "spec": "7 - 15 MHz linear array with vascular preset",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "10 mL ampoule",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Flow Cytometry Media",
        "spec": "10% formalin, RPMI medium for lymphoma, and saline for GeneXpert",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Position patient based on anatomical nodal station (axillary, inguinal, or supraclavicular).",
      "Scan nodal station with high-frequency linear transducer and Color Doppler to map adjacent major arteries and veins.",
      "Sterilize and drape skin under surgical asepsis.",
      "Infiltrate 5-10 mL 2% Lignocaine into skin, subcutaneous layer, and perinodal capsule under direct visualization.",
      "Make a 2-mm skin dermatotomy; introduce 16G/18G needle under real-time in-plane guidance into the solid cortex of the node, pointing away from the major vascular bundle.",
      "Trigger automated cutting mechanism; swiftly retrieve needle and inspect core for fleshy lymphoid tissue.",
      "Obtain 2-3 substantial core passes; divide into formalin (IHC), RPMI (flow cytometry), and saline (GeneXpert MTB).",
      "Apply direct manual pressure for 10 minutes; scan with Color Doppler to verify absence of hematoma; apply sterile compression dressing."
    ],
    "complications": [
      "Local soreness and bruising (10-15%)",
      "Intranodal / perinodal hematoma (2-4%)",
      "Inadvertent major vascular puncture (<0.2%)",
      "Transient local nerve irritation (<0.5%)",
      "Inadequate tissue sample (<3%)"
    ],
    "maayTariffInr": 4500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "fluoroscopic-endobiliary-forceps-biopsy",
    "name": "Fluoroscopic Endobiliary Forceps Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV050",
    "rghsCode": "693 / 43",
    "icd10": "C24.0 (Malignant neoplasm of extrahepatic bile duct) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Indeterminate biliary stricture (Klatskin tumor / hilar cholangiocarcinoma vs benign inflammatory stricture)",
      "Histological tissue acquisition during Percutaneous Transhepatic Biliary Drainage (PTBD)",
      "Failed or inconclusive endoscopic retrograde cholangiopancreatography (ERCP) brush cytology",
      "Histological confirmation of intrinsic biliary tract malignancy prior to biliary stent placement"
    ],
    "preOpCriteria": [
      "Established percutaneous transhepatic biliary access (7F-8F sheath in place)",
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "Broad-spectrum IV antibiotic prophylaxis administered",
      "Fasting 4 hours; fluoroscopy table and C-arm operational"
    ],
    "hardware": [
      {
        "category": "Biopsy Forceps",
        "name": "Flexible Endobiliary Biopsy Forceps",
        "spec": "1.8 - 2.4 mm flexible jaw forceps, 120 cm length, radiopaque cup",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Biliary Access",
        "name": "7F - 8F Transhepatic Vascular / Biliary Sheath",
        "spec": "Check-Flo / Radiofocus introducer sheath with radiopaque tip",
        "standardStore": "Cath Lab Access Cabinet"
      },
      {
        "category": "Guidewire & Catheter",
        "name": "0.035 Stiff Glidewire & 5F Kumpe Catheter",
        "spec": "260 cm angled hydrophilic wire with 100 cm catheter",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Pathology Cassettes",
        "spec": "10% neutral buffered formalin containers",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Under fluoroscopy, advance 0.035 hydrophilic wire and 5F catheter through existing PTBD tract across the biliary stricture into duodenum.",
      "Perform cholangiogram to precisely delineate the proximal and distal margins of the stricture.",
      "Exchange for an 8F vascular/biliary sheath placed with its tip positioned immediately proximal to the stricture margin.",
      "Advance flexible endobiliary biopsy forceps through the sheath under fluoroscopic monitoring directly into the strictured lumen.",
      "Open the forceps jaws; advance into the mucosal lesion; firmly close jaws to bite the tumor tissue; gently pull back to sever the specimen.",
      "Withdraw forceps from sheath; tease out intact tissue bite into formalin; repeat for 3-5 distinct bites.",
      "Perform completion cholangiogram to ensure no biliary perforation or major extravasation.",
      "Re-advance guidewire and replace external-internal biliary drainage catheter (8.5F or 10F) across the stricture; secure to skin."
    ],
    "complications": [
      "Transient hemobilia (5-10%, usually self-limiting venous bleeding)",
      "Post-procedure cholangitis or bacteremia (2-4%)",
      "Bile duct wall perforation (<1%)",
      "Abdominal pain / biliary colic (10-15%)",
      "Catheter displacement (<1%)"
    ],
    "maayTariffInr": 12000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Boston Scientific India (+91 98293 45678)"
    ]
  },
  {
    "id": "fluoroscopic-endobiliary-brush-cytology",
    "name": "Fluoroscopic Endobiliary Brush Cytology",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV051",
    "rghsCode": "693 / 43",
    "icd10": "C24.0 (Malignant neoplasm of extrahepatic bile duct) / K83.1 (Obstruction of bile duct)",
    "indications": [
      "Tight or tortuous biliary strictures impassable by biopsy forceps during PTBD",
      "Cytological confirmation of suspected cholangiocarcinoma or pancreatic cancer invading the common bile duct",
      "Surveillance of biliary strictures in primary sclerosing cholangitis (PSC)",
      "Complimentary sampling combined with endobiliary forceps biopsy to increase overall diagnostic yield"
    ],
    "preOpCriteria": [
      "Percutaneous biliary access sheath in place across liver parenchyma",
      "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
      "Prophylactic intravenous antibiotics on board",
      "Fasting 4 hours; fluoroscopic C-arm ready"
    ],
    "hardware": [
      {
        "category": "Cytology Brush",
        "name": "Endobiliary Cytology Brush Catheter",
        "spec": "8F compatible, 2.0 mm diameter bristle brush with radiopaque markers, 120 cm",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Guidewire & Sheath",
        "name": "0.035 Guidewire & 7F-8F Biliary Sheath",
        "spec": "Hydrophilic angled wire and 7F-8F Check-Flo sheath",
        "standardStore": "Cath Lab Access Cabinet"
      },
      {
        "category": "Cytology Supplies",
        "name": "Glass Slides & CytoLyt Fixative Vials",
        "spec": "95% ethanol fixative slides and preservative fluid bottles",
        "standardStore": "Pathology Consumables Store"
      },
      {
        "category": "Contrast Medium",
        "name": "Iohexol 300 mg I/mL",
        "spec": "50 mL contrast vial for cholangiography",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Perform baseline cholangiogram through existing transhepatic biliary access to outline the stricture location and length.",
      "Pass 0.035 hydrophilic wire across the stricture into the duodenum.",
      "Advance the sheathed cytology brush catheter over the wire until radiopaque markers straddle the strictured segment under fluoroscopy.",
      "Retract the protective sheath to expose the bristles within the malignant narrowing.",
      "Vigorously advance and pull back the brush with 360-degree rotational movements 10-15 times across the stricture to abrade surface tumor cells.",
      "Pull the exposed brush back inside the protective outer sheath before withdrawing from the patient to prevent cell loss in the tract.",
      "Withdraw brush system; immediately extend bristles outside and vigorously smear onto glass slides, cutting brush tip into CytoLyt solution for cell block.",
      "Re-advance wire, verify stricture patency, and replace biliary drainage catheter into stable position."
    ],
    "complications": [
      "Mild transient hemobilia (2-5%)",
      "Post-procedure cholangitis / bacteremia (1-3%)",
      "Biliary colic / discomfort (5-10%)",
      "Brush entrapment or detachment (<0.2%)",
      "False-negative cytology due to submucosal tumor growth (20-30%)"
    ],
    "maayTariffInr": 9000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Boston Scientific India (+91 98293 45678)"
    ]
  },
  {
    "id": "transvascular-endomyocardial-biopsy",
    "name": "Transvascular Endomyocardial Biopsy (Right Ventricular Septal)",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV052",
    "rghsCode": "693 / 36",
    "icd10": "T86.21 (Heart transplant rejection) / I42.0 (Dilated cardiomyopathy)",
    "indications": [
      "Surveillance and diagnosis of allograft rejection following orthotopic heart transplantation",
      "Unexplained new-onset heart failure / rapidly progressive cardiomyopathy",
      "Diagnosis of cardiac amyloidosis, sarcoidosis, hemochromatosis, or myocarditis",
      "Evaluation of drug-induced (e.g. anthracycline) cardiotoxicity"
    ],
    "preOpCriteria": [
      "Coagulation status: INR <= 1.4, Platelets >= 80,000/uL",
      "Continuous 12-lead ECG, pulse oximetry, and invasive blood pressure monitoring arranged",
      "Transthoracic echocardiography documenting ventricular anatomy and lack of intracardiac thrombi",
      "Fasting 4 hours; resuscitation drugs and transcutaneous pacing on standby"
    ],
    "hardware": [
      {
        "category": "Bioptome",
        "name": "Caves-Schulz / Cordis 7F Flexible Endomyocardial Bioptome",
        "spec": "7F x 100 cm flexible radiopaque bioptome with 2.3 mm cutting jaws",
        "standardStore": "Cath Lab Dedicated Cardiac Cabinet"
      },
      {
        "category": "Sheath",
        "name": "7F / 8F Curved Guiding Sheath (Mullins / St. Jude)",
        "spec": "7F/8F x 45-60 cm sheath with dilator pre-shaped for RV septum",
        "standardStore": "Cath Lab Access Cabinet"
      },
      {
        "category": "Vascular Access",
        "name": "7F Vascular Introducer Sheath",
        "spec": "11 cm sheath for right internal jugular vein access",
        "standardStore": "Cath Lab Access Cabinet"
      },
      {
        "category": "Specimen Container",
        "name": "Formalin Vials & Glutaraldehyde Vials",
        "spec": "10% formalin (LM/IHC) and glutaraldehyde (Electron Microscopy)",
        "standardStore": "Pathology Consumables Store"
      }
    ],
    "techniqueSteps": [
      "Under ultrasound guidance, cannulate right internal jugular vein (preferred) and place 7F vascular sheath.",
      "Advance 7F curved guiding sheath over 0.035 wire through SVC, right atrium, and tricuspid valve into right ventricle.",
      "Orient sheath tip anteriorly and medially directly against the muscular interventricular septum (avoiding free RV wall).",
      "Introduce flexible 7F bioptome through sheath under fluoroscopic monitoring until jaws touch the interventricular septum.",
      "Under fluoroscopy in RAO 30 and LAO 60 views, open bioptome jaws, advance gently against septum, and observe premature ventricular contractions (PVCs) confirming myocardial contact.",
      "Firmly close bioptome jaws, pull back gently to sever myocardial specimen, and withdraw bioptome from sheath.",
      "Inspect sample: firm, brown-red myocardial tissue; harvest 4-6 distinct bites from different septal regions.",
      "Transfer specimens into formalin, glutaraldehyde, and Michel's medium; perform immediate post-biopsy echocardiogram to rule out pericardial effusion / tamponade."
    ],
    "complications": [
      "Transient ventricular arrhythmias / PVCs during contact (expected, 80-90%, self-limiting)",
      "Right ventricular free-wall perforation and cardiac tamponade (<0.5-1%, life-threatening, requires pericardiocentesis)",
      "Transient right bundle branch block (RBBB) (2-4%)",
      "Tricuspid valve leaflet trauma / worsening tricuspid regurgitation (<0.5%)",
      "Access site neck hematoma (<1%)"
    ],
    "maayTariffInr": 35000,
    "vendorContacts": [
      "Cordis / Cardinal Health India (+91 98294 56789)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "transvenous-renal-mass-biopsy",
    "name": "Transvenous Renal Mass Biopsy",
    "category": "Non-Vascular: Image-Guided Biopsies",
    "code": "2849-NV053",
    "rghsCode": "693 / 36",
    "icd10": "C64.9 (Malignant neoplasm of kidney) / I82.3 (Embolism and thrombosis of renal vein)",
    "indications": [
      "Renal mass in patients with severe uncorrectable coagulopathy (INR > 1.8, Platelets < 40,000/uL)",
      "Renal cell carcinoma with extensive tumor thrombus extending into renal vein or inferior vena cava (IVC)",
      "Severe ascites, solitary kidney with central tumor, or morbid obesity precluding percutaneous flank access",
      "Confirmation of intravascular renal tumor thrombus histology prior to cavo-atrial thrombectomy"
    ],
    "preOpCriteria": [
      "Coagulation profile evaluated; blood products on standby",
      "Contrast-enhanced CT or MR venography defining renal vein anatomy and tumor thrombus level",
      "Fasting 4-6 hours; patient supine on fluoroscopy table",
      "Ultrasound documentation of patent right internal jugular or common femoral vein"
    ],
    "hardware": [
      {
        "category": "Transvenous Biopsy Set",
        "name": "Cook Quick-Core / LABS Transvenous Biopsy System",
        "spec": "7F x 60-80 cm curved guiding sheath with 18G/19G x 80 cm cutting needle",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Vascular Access",
        "name": "7F - 8F Vascular Introducer Sheath",
        "spec": "11 cm sheath with 0.035 wire and needle",
        "standardStore": "Cath Lab Access Cabinet"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Cobra / Renal Double-Curve / RDC Catheter",
        "spec": "65-100 cm length, 0.035 lumen",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Contrast Medium",
        "name": "Iodinated Contrast / CO2 Gas",
        "spec": "Iohexol 300 for selective renal venography",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Cannulate right internal jugular vein (or common femoral vein) under ultrasound guidance; place 7F-8F vascular sheath.",
      "Advance 0.035 guidewire and 5F Cobra/RDC catheter through IVC into the affected main renal vein.",
      "Perform selective renal venogram to visualize the tumor thrombus or renal parenchymal tumor blush.",
      "Advance 7F guiding sheath deeply into the renal vein branch wedged against or adjacent to the tumor.",
      "Introduce 18G/19G long Quick-Core biopsy needle through sheath; verify position under fluoroscopy in two projections.",
      "Instruct patient to hold breath; deploy cutting needle directly into the intravascular tumor thrombus or renal parenchyma.",
      "Retrieve 2-3 core tissue samples; transfer into formalin for histopathology and immunohistochemistry.",
      "Perform completion renal venogram to verify absence of capsular perforation or contrast extravasation; remove sheath and compress vein."
    ],
    "complications": [
      "Renal vein thrombosis / propagation of tumor thrombus (1-2%)",
      "Renal capsule perforation and retroperitoneal hematoma (<1%)",
      "Transient gross hematuria (2-4%)",
      "Neck or groin access site hematoma (1-2%)",
      "Pulmonary tumor or bland embolism (<0.5%)"
    ],
    "maayTariffInr": 35000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "usg-liver-abscess-aspiration",
    "name": "Ultrasound-Guided Liver Abscess Aspiration",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV054",
    "rghsCode": "693 / 41",
    "icd10": "K75.0 (Abscess of liver) / A06.4 (Amebic liver abscess)",
    "indications": [
      "Small to moderate liver abscess (<5 cm) with clinical symptoms of pain and persistent pyrexia",
      "Diagnostic fluid sampling to differentiate amebic (anchovy sauce) from pyogenic (purulent) abscess",
      "Urgent cavity decompression to relieve pain or impending rupture risk",
      "Microbiological culture, Gram stain, and Entamoeba histolytica serology/antigen testing"
    ],
    "preOpCriteria": [
      "Coagulation status: INR <= 1.5, Platelets >= 50,000/uL",
      "Broad-spectrum antimicrobial therapy initiated (IV Metronidazole + 3rd gen Cephalosporin)",
      "Pre-procedure ultrasound documenting clear liquefaction and absence of intervening pleura or gallbladder",
      "Fasting 3-4 hours; baseline vitals stable"
    ],
    "hardware": [
      {
        "category": "Aspiration Needle",
        "name": "18G - 20G Chiba / Spinal Aspiration Needle",
        "spec": "18G/20G x 15-20 cm needle with stylet and echogenic tip",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "Curvilinear Abdominal Probe",
        "spec": "3.5 - 5.0 MHz curved array",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Aspiration Syringe",
        "name": "20 mL / 50 mL Luer Lock Syringes with 3-Way Stopcock",
        "spec": "Sterile high-volume aspiration kit",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Culture Containers",
        "name": "Sterile Microbiology Specimen Tubes",
        "spec": "Aerobic, anaerobic culture bottles and sterile transport tube",
        "standardStore": "Microbiology Collection Unit"
      }
    ],
    "techniqueSteps": [
      "Position patient supine or left lateral decubitus; sonographically evaluate abscess size, location, and liquefaction.",
      "Choose a needle trajectory traversing a rim of normal liver parenchyma to minimize peritoneal leakage.",
      "Sterilize the right upper abdominal / lower intercostal skin and drape aseptically.",
      "Infiltrate 10-15 mL 2% Lignocaine into skin, subcutaneous fat, and liver capsule under real-time guidance.",
      "Advance 18G/20G Chiba needle under continuous real-time acoustic control directly into the center of the cavity.",
      "Withdraw stylet, attach 3-way stopcock with 50 mL syringe, and aspirate purulent cavity contents until collapsed.",
      "Record total aspirated volume, color, and consistency (e.g. anchovy sauce vs foul-smelling creamy pus).",
      "Withdraw needle; apply gentle compression over puncture site; scan with Color Doppler to confirm lack of bleeding; apply dressing."
    ],
    "complications": [
      "Post-aspiration fever spike / transient bacteremia (5-10%)",
      "Right upper quadrant pain (10-15%)",
      "Intraperitoneal fluid leak / localized peritonitis (1-2%)",
      "Intrahepatic hematoma (<1%)",
      "Abscess recurrence requiring catheter drainage (15-25%)"
    ],
    "maayTariffInr": 3500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "pcd-amebic-liver-abscess",
    "name": "Ultrasound-Guided Percutaneous Catheter Drainage (PCD) of Amebic Liver Abscess",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV055",
    "rghsCode": "693 / 41",
    "icd10": "A06.4 (Amebic liver abscess) / K75.0 (Abscess of liver)",
    "indications": [
      "Large amebic liver abscess (>5 cm in diameter or volume > 100 mL)",
      "Failure of medical therapy (persistent fever and pain after 48-72 hours of IV Metronidazole)",
      "Abscess located in left lobe or peripheral right lobe with imminent risk of intraperitoneal or pericardial rupture",
      "Secondarily infected amebic liver abscess with systemic toxic features"
    ],
    "preOpCriteria": [
      "Coagulation screen: INR <= 1.5, Platelets >= 50,000/uL",
      "Intravenous Metronidazole (750 mg TID) and 3rd-generation Cephalosporin administered",
      "Bedside ultrasound confirming safe parenchymal puncture path avoiding pleural reflection and gallbladder",
      "Fasting 4 hours; closed drainage bag and connector ready"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "8.5F - 10F Locking Pigtail Drainage Catheter Kit",
        "spec": "8.5F/10F x 25-30 cm hydrophilic locking pigtail with trocar and cannula",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Access Needle & Wire",
        "name": "18G Chiba Needle & 0.038 J-Tip Stiff Guidewire",
        "spec": "18G x 15 cm needle with 0.038 x 80 cm Amplatz wire",
        "standardStore": "Cath Lab Access Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "Curvilinear Abdominal Probe",
        "spec": "3.5 - 5.0 MHz curved array",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Drainage Bag",
        "name": "Closed Gravity Drainage Bag System",
        "spec": "1000 mL sterile collection bag with luer-lock anti-reflux connector",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient supine or left lateral decubitus; sonographically evaluate abscess dimensions and locate the deepest fluid pocket.",
      "Choose a transhepatic trajectory traversing at least 1-2 cm of healthy liver parenchyma.",
      "Sterilize the right flank/hypochondrium and drape under strict sterile surgical precautions.",
      "Infiltrate 15 mL 2% Lignocaine from skin through intercostal/subcostal tissues into Glisson's capsule.",
      "Puncture cavity with 18G needle under real-time acoustic guidance; aspirate characteristic 'anchovy-paste' fluid.",
      "Advance 0.038 J-tip stiff guidewire through needle, coiling multiple loops inside the abscess cavity.",
      "Dilate tract sequentially using 8F and 10F fascial dilators over the guidewire.",
      "Advance 8.5F or 10F locking pigtail catheter over wire into cavity; lock the pigtail suture tightly; evacuate pus completely; connect to closed gravity drainage bag."
    ],
    "complications": [
      "Post-drainage transient bacteremia or rigors (5-10%)",
      "Catheter blockage by thick necrotic debris (5-10%, managed with saline irrigation)",
      "Premature catheter dislodgement (2-4%)",
      "Subcapsular liver bleeding (<1%)",
      "Pneumothorax / empyema if high intercostal approach (<0.5%)"
    ],
    "maayTariffInr": 7000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "pcd-pyogenic-liver-abscess",
    "name": "Ultrasound-Guided Percutaneous Catheter Drainage of Pyogenic Liver Abscess",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV056",
    "rghsCode": "693 / 41",
    "icd10": "K75.0 (Abscess of liver) / A41.9 (Sepsis, unspecified organism)",
    "indications": [
      "Pyogenic (bacterial) liver abscess with severe sepsis, high spiking fevers, and leukocytosis",
      "Multiloculated or viscous abscess cavity > 3-4 cm in diameter",
      "Biliary tract-related liver abscess (ascending cholangitis origin)",
      "Immuno-compromised or diabetic patients with high risk of septic shock"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.5, Platelets >= 50,000/uL",
      "Hemodynamic stability supported with IV fluids and broad-spectrum antibiotics (Pip-Taz / Carbapenem)",
      "Bedside ultrasound confirming liquefaction and acoustic access route",
      "Fasting 4 hours; drainage kit ready at bedside"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "10F - 12F Multi-Sidehole Locking Pigtail Catheter",
        "spec": "10F/12F x 30 cm radiopaque pigtail with large drainage sideholes",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Access System",
        "name": "18G Trocar / Chiba Access Set",
        "spec": "18G x 15 cm needle with 0.038 Amplatz Extra Stiff wire",
        "standardStore": "Cath Lab Access Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "Curvilinear Abdominal Probe",
        "spec": "3.5 - 5.0 MHz curved array",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Drainage Bag & Flush",
        "name": "Closed Drainage Bag & Sterile Saline Flush",
        "spec": "1000 mL collection bag and 100 mL sterile saline for intermittent irrigation",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient supine or oblique; sonographically survey liver to locate main abscess cavity and internal septations.",
      "Select puncture angle that traverses a healthy parenchymal margin, avoiding pleura, lung, colon, and gallbladder.",
      "Sterilize right upper quadrant; infiltrate 15-20 mL 2% Lignocaine down to Glisson's capsule.",
      "Puncture cavity with 18G needle under continuous real-time acoustic control; aspirate thick creamy bacterial pus.",
      "Pass 0.038 Amplatz Extra Stiff guidewire into cavity, ensuring multiple turns around cavity perimeter.",
      "Serial tract dilation over wire with 8F, 10F, and 12F dilators.",
      "Advance 10F or 12F large-bore locking pigtail catheter into the abscess; securely lock pigtail mechanism.",
      "Completely evacuate viscous pus; gently flush cavity with 10-20 mL sterile normal saline until return is clear; connect to closed gravity bag."
    ],
    "complications": [
      "Transient bacteremic septic spike / rigors (5-10%)",
      "Catheter clogging with thick pus / fibrin (10-15%, managed with saline flushes)",
      "Catheter displacement (2-4%)",
      "Subcapsular hematoma or intrahepatic bleeding (<1%)",
      "Bilio-cutaneous fistula (<1%)"
    ],
    "maayTariffInr": 7500,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "usg-hydatid-cyst-pair",
    "name": "Ultrasound-Guided Percutaneous Drainage of Hydatid Cyst (PAIR Technique)",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV057",
    "rghsCode": "693 / 41",
    "icd10": "B67.0 (Echinococcus granulosus infection of liver) / B67.8 (Echinococcosis, unspecified)",
    "indications": [
      "Unilocular hepatic hydatid cysts (WHO Stage CE1 and CE3a) >= 5 cm in diameter",
      "Symptomatic hydatid cysts unresponsive to albendazole medical therapy alone",
      "Inoperable surgical candidates, recurrent cysts post-surgery, or patient refusal of surgery",
      "Exclusion of communicating biliary fistula (cystobiliary communication)"
    ],
    "preOpCriteria": [
      "MANDATORY PRE-TREATMENT WITH ALBENDAZOLE (400 mg BD) for at least 1-2 weeks prior to reduce risk of secondary peritoneal hydatidosis",
      "Coagulation status: INR <= 1.4, Platelets >= 60,000/uL",
      "Exclusion of biliary communication: pre-procedure MRCP / contrast ultrasound confirming no cystobiliary fistula",
      "Prophylactic IV anti-allergic premedication administered (Hydrocortisone 100 mg + Pheniramine 22.75 mg) with emergency adrenaline on table"
    ],
    "hardware": [
      {
        "category": "Puncture Needle",
        "name": "18G - 19G Chiba / Trocar Needle with Stopcock",
        "spec": "18G/19G x 15-20 cm needle with luer-lock 3-way stopcock",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Scolicidal Agent",
        "name": "Hypertonic Saline (20% NaCl) / Absolute Alcohol (95%)",
        "spec": "Sterile 20% hypertonic saline bottles (500 mL) and 95% ethanol",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "Curvilinear Abdominal Probe",
        "spec": "3.5 - 5.0 MHz with needle guide",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Emergency Allergy Kit",
        "name": "Anaphylaxis Emergency Set",
        "spec": "Inj Adrenaline (1:1000), Hydrocortisone, Chlorpheniramine, IV fluids",
        "standardStore": "CT/USG Emergency Crash Cart"
      }
    ],
    "techniqueSteps": [
      "Position patient supine; confirm continuous vital signs monitoring and venous access.",
      "Sonographically locate hydatid cyst; plan puncture trajectory traversing at least 2 cm of normal liver parenchyma to anchor needle and prevent peritoneal spillage.",
      "Administer prophylactic IV Hydrocortisone and Pheniramine.",
      "Sterilize and drape right hypochondrium; infiltrate 15 mL 2% Lignocaine down to Glisson's capsule.",
      "PUNCTURE: Advance 18G needle under real-time acoustic control into the cyst center.",
      "ASPIRATION: Aspirate 30-50% of the crystal-clear 'rock-water' hydatid fluid; visually verify absence of bile (yellow tint); perform bedside dipstick bilirubin test to rule out cystobiliary fistula.",
      "INJECTION: Slowly inject scolicidal agent (20% Hypertonic Saline or 95% Absolute Alcohol) equal to 1/3 of aspirated volume; leave in cavity for 15-20 minutes contact time to kill protoscolices.",
      "RE-ASPIRATION: Completely aspirate all scolicidal fluid and remaining cyst contents until cyst collapses; withdraw needle; compress site 5 minutes; monitor in recovery for 4 hours."
    ],
    "complications": [
      "Anaphylactic allergic reaction / urticaria / bronchospasm (<1-2%, treated with adrenaline/steroids)",
      "Chemical cholangitis if occult cystobiliary communication missed (<0.5%)",
      "Transient fever or urticarial skin rash (3-5%)",
      "Intrahepatic hematoma (<1%)",
      "Cyst recurrence (<3-5% with proper albendazole coverage)"
    ],
    "maayTariffInr": 6500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "modified-pair-pd-hydatid-cyst",
    "name": "Modified PAIR-PD (Percutaneous Aspiration, Injection, Re-aspiration with Drainage) of Hydatid Cyst",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV058",
    "rghsCode": "693 / 41",
    "icd10": "B67.0 (Echinococcus granulosus of liver) / B67.8 (Echinococcosis, unspecified)",
    "indications": [
      "Large (>10 cm) hydatid cysts with high intracystic pressure",
      "Hydatid cyst containing detached endocyst membranes or daughter cysts (WHO Stage CE2 / CE3b)",
      "Secondarily infected hydatid cyst with purulent content (pyo-hydatid)",
      "Hydatid cyst where complete single-session fluid collapse cannot be achieved with simple needle aspiration"
    ],
    "preOpCriteria": [
      "Albendazole pre-treatment administered for at least 2 weeks",
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "Premedication with IV hydrocortisone and antihistamines; emergency adrenaline readily accessible",
      "Fluoroscopy / Ultrasound dual-modality guidance arranged"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "8.5F - 10F Locking Pigtail Drainage Catheter Kit",
        "spec": "8.5F/10F x 25 cm pigtail with large sideholes for membrane aspiration",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Access Needle & Wire",
        "name": "18G Chiba Needle & 0.035 Stiff Wire",
        "spec": "18G x 15 cm needle with 0.035 Amplatz Super Stiff wire",
        "standardStore": "Cath Lab Access Cabinet"
      },
      {
        "category": "Scolicidal Agent",
        "name": "20% Hypertonic Saline Solution",
        "spec": "Sterile 20% NaCl bottles (500 mL)",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Contrast Medium",
        "name": "Iohexol 300 mg I/mL",
        "spec": "50 mL contrast for cystography to rule out biliary communication",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient supine; administer IV hydrocortisone and pheniramine premedication.",
      "Under ultrasound guidance, puncture cyst with 18G needle through an intervening rim of normal liver parenchyma.",
      "Aspirate 30-50 mL hydatid fluid; inject contrast medium under fluoroscopy (cystogram) to strictly verify absence of contrast opacification of bile ducts.",
      "Advance 0.035 Amplatz stiff wire into the cyst, coiling it around the cavity.",
      "Dilate tract to 8F/10F; advance 8.5F-10F locking pigtail catheter into the cyst.",
      "Aspirate fluid and detached germinal membranes; instill 20% hypertonic saline for 15 minutes; re-aspirate completely.",
      "Leave pigtail catheter locked in place connected to gravity drainage bag to ensure complete ongoing evacuation of residual membranes and cavity obliteration.",
      "Perform daily catheter flushes with normal saline; remove catheter when daily drainage is <10 mL and cavity is collapsed on follow-up ultrasound."
    ],
    "complications": [
      "Allergic reaction / anaphylactoid symptoms (<2%, treated promptly)",
      "Catheter obstruction with detached laminated membrane debris (10-15%)",
      "Delayed cystobiliary fistula manifested as bilious catheter output (2-4%)",
      "Superficial wound infection or localized pain (10-15%)",
      "Premature catheter displacement (2-4%)"
    ],
    "maayTariffInr": 8500,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "ct-subdiaphragmatic-abscess-drainage",
    "name": "CT-Guided Percutaneous Subdiaphragmatic Abscess Drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV059",
    "rghsCode": "693 / 42",
    "icd10": "K65.1 (Peritoneal abscess) / T81.4XXA (Infection following a procedure)",
    "indications": [
      "Postoperative or post-traumatic subdiaphragmatic (subphrenic) abscess (e.g. post-splenectomy, post-gastrectomy, post-hepatectomy)",
      "Deep subphrenic collection causing persistent sepsis, spiking fever, and diaphragmatic splinting",
      "Acoustically obscured collection under the costal margin impassable under ultrasound",
      "Safe extrapleural catheter drainage avoiding the costodiaphragmatic pleural recess"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.5, Platelets >= 50,000/uL",
      "Contrast-enhanced CT reviewed to locate the pleural reflection (usually crosses the 10th rib in midaxillary line) to plan subpleural trajectory",
      "Broad-spectrum IV antibiotics initiated",
      "Fasting 4 hours; closed drainage bag ready"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "10F - 12F Locking Pigtail Drainage Kit",
        "spec": "10F/12F x 25 cm pigtail with large sideholes and trocar assembly",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "Guidewire & Needle",
        "name": "18G Trocar Needle & 0.038 Amplatz Stiff Wire",
        "spec": "18G x 15 cm needle with 0.038 x 80 cm wire",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "CT Accessories",
        "name": "Radiopaque Skin Grid & Laser Pointer",
        "spec": "Sterile CT localization grid",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Drainage Bag",
        "name": "Closed Gravity Collection Bag",
        "spec": "1000 mL sterile drainage bag with connector",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient prone or lateral decubitus on CT table, placing the affected side accessible.",
      "Acquire low-dose planning CT through the lower chest and upper abdomen; identify the subphrenic abscess and costodiaphragmatic recess.",
      "Plan an oblique caudocranial subcostal or low intercostal trajectory entering below the pleural reflection.",
      "Sterilize and drape skin; infiltrate 15-20 mL 2% Lignocaine into skin, intercostal muscles, and diaphragmatic peritoneum.",
      "Introduce 18G needle along the planned trajectory under CT guidance directly into the subdiaphragmatic collection.",
      "Aspirate pus for Gram stain and culture; advance 0.038 Amplatz wire into the cavity; dilate tract to 10F/12F.",
      "Advance 10F or 12F locking pigtail catheter over wire; confirm complete intra-cavity positioning on CT check slices.",
      "Evacuate pus, flush with 10-20 mL sterile saline, and connect to closed drainage bag; obtain post-procedure CT to confirm lack of pneumothorax."
    ],
    "complications": [
      "Pneumothorax / empyema from inadvertent pleural transgression (2-4%)",
      "Post-drainage transient bacteremic fever spike (5-10%)",
      "Catheter clogging with thick fibrinous pus (5-10%)",
      "Subcapsular hematoma or intercostal vessel injury (<1%)",
      "Catheter dislodgement (2-4%)"
    ],
    "maayTariffInr": 8500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "ct-subhepatic-abscess-drainage",
    "name": "CT-Guided Percutaneous Subhepatic Abscess Drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV060",
    "rghsCode": "693 / 42",
    "icd10": "K65.1 (Peritoneal abscess) / T81.4XXA (Infection following a procedure)",
    "indications": [
      "Subhepatic fluid collection or abscess in Morison's pouch (post-cholecystectomy, post-liver resection, or duodenal ulcer perforation)",
      "Persistent post-operative fever, abdominal guarding, and rising inflammatory markers",
      "Loculated subhepatic collection obscured by overlying hepatic flexure or surgical dressings",
      "Safe catheter drainage avoiding duodenum, hepatic flexure, and biliary tree"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.5, Platelets >= 50,000/uL",
      "Contrast-enhanced CT reviewed to locate hepatic flexure of colon, duodenum, and inferior vena cava",
      "Broad-spectrum IV antibiotics administered",
      "Fasting 4 hours; drainage bag ready"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "10F - 12F Locking Pigtail Drainage Catheter Kit",
        "spec": "10F/12F x 25-30 cm pigtail with large oval sideholes",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "Access Needle & Wire",
        "name": "18G Chiba Needle & 0.038 Amplatz Stiff Wire",
        "spec": "18G x 15 cm needle with 0.038 x 80 cm wire",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "CT Accessories",
        "name": "Radiopaque Skin Grid & Laser Alignment",
        "spec": "Sterile CT skin grid",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Drainage Bag",
        "name": "Closed Gravity Collection Bag",
        "spec": "1000 mL sterile collection bag",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient supine or in slight left lateral tilt on CT couch.",
      "Acquire thin-slice planning CT through the right upper quadrant; map Morison's pouch collection.",
      "Select an anterior or lateral subcostal entry trajectory keeping lateral to the colon and anterior to the kidney.",
      "Sterilize and drape right upper abdomen; infiltrate 15 mL 2% Lignocaine into skin, abdominal wall muscles, and peritoneum.",
      "Introduce 18G needle under CT guidance directly into the subhepatic abscess; verify needle tip position on check slices.",
      "Aspirate purulent/bilious fluid for culture; advance 0.038 Amplatz wire into collection.",
      "Dilate tract to 10F/12F; advance locking pigtail catheter over wire into Morison's pouch.",
      "Evacuate collection completely; lock pigtail; connect to drainage bag; obtain completion CT confirming lack of hematoma or bowel injury."
    ],
    "complications": [
      "Post-procedure fever spike (5-10%)",
      "Catheter clogging by thick fibrin / bile sludge (5-10%)",
      "Inadvertent colonic or duodenal puncture (<0.5%)",
      "Biliary leak through drainage tract (<1%)",
      "Catheter dislodgement (2-4%)"
    ],
    "maayTariffInr": 8000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "ct-pancreatic-pseudocyst-drainage",
    "name": "CT-Guided Percutaneous Pancreatic Pseudocyst Drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV061",
    "rghsCode": "693 / 42",
    "icd10": "K86.3 (Pseudocyst of pancreas) / K85.90 (Acute pancreatitis)",
    "indications": [
      "Symptomatic or complicated pancreatic pseudocyst (>6 cm) persistent >6 weeks following acute pancreatitis",
      "Gastric outlet obstruction, biliary obstruction, or early satiety caused by mass effect",
      "Infected pancreatic pseudocyst presenting with sepsis and fever",
      "Pseudocyst anatomically unsuitable for endoscopic transmural cystogastrostomy (distance from stomach > 1-1.5 cm or altered anatomy)"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "Contrast-enhanced CT or MRCP reviewed to assess cyst wall maturity, absence of pseudoaneurysm, and lack of extensive solid necrosis",
      "Trajectory planned strictly extrapleural and transperitoneal avoiding splenic vessels, SMA, and colon",
      "Fasting 6 hours; broad-spectrum IV antibiotic prophylaxis on board"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "10F - 12F Locking Pigtail Drainage Catheter Kit",
        "spec": "10F/12F x 30 cm locking pigtail with hydrophilic coating and multiple large sideholes",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "Access Needle & Wire",
        "name": "18G Chiba Needle & 0.038 Amplatz Extra Stiff Wire",
        "spec": "18G x 15-20 cm needle with 0.038 x 80 cm wire",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "CT Accessories",
        "name": "Radiopaque Skin Grid & Laser Marker",
        "spec": "Sterile CT skin grid",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Drainage Bag",
        "name": "Closed Gravity Drainage Bag",
        "spec": "1000 mL collection bag with luer connector",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient supine, prone, or lateral depending on pseudocyst location (tail vs body vs head).",
      "Acquire thin-section planning CT; confirm thick mature fibrous capsule (>2-3 mm) and absence of enhancing pseudoaneurysms.",
      "Select trajectory: anterior transgastric (self-sealing tract into stomach) or direct flank retroperitoneal / lateral approach avoiding spleen and colon.",
      "Sterilize and drape abdomen; infiltrate 15-20 mL 2% Lignocaine through skin, deep fascia, and pseudocyst capsule.",
      "Introduce 18G needle into pseudocyst center under CT guidance; aspirate dark 'motor-oil' or clear fluid (send for amylase, lipase, CEA, culture).",
      "Advance 0.038 Amplatz stiff wire into cavity; dilate tract sequentially to 10F/12F.",
      "Advance 10F-12F locking pigtail catheter over wire into cyst; confirm symmetrical pigtail loop on CT check slices.",
      "Evacuate cyst contents; connect to closed gravity bag; manage catheter with regular flushes until daily output is <10 mL and follow-up CT confirms cavity obliteration."
    ],
    "complications": [
      "Secondary infection / abscess transformation of sterile pseudocyst (5-10%)",
      "Pancreaticocutaneous fistula (5-10%, usually closes spontaneously or with Octreotide)",
      "Catheter clogging by thick necrotic debris (5-10%)",
      "Hemorrhage from pseudoaneurysm rupture (<1%)",
      "Catheter dislodgement (2-4%)"
    ],
    "maayTariffInr": 9000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "ct-wopn-drainage",
    "name": "CT-Guided Percutaneous Walled-Off Pancreatic Necrosis (WOPN) Drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV062",
    "rghsCode": "693 / 43",
    "icd10": "K85.92 (Acute pancreatitis with other necrosis) / K65.1 (Peritoneal abscess)",
    "indications": [
      "Infected walled-off pancreatic necrosis (WOPN) presenting with persistent sepsis > 4 weeks post-acute necrotizing pancreatitis",
      "Gas within the retroperitoneal necrotic collection on contrast-enhanced CT",
      "First step of the minimally invasive 'Step-Up Approach' for infected necrotizing pancreatitis (PANTER trial protocol)",
      "Decompression of large retroperitoneal necrotic collections extending into paracolic gutters or pelvis"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "Contrast CT carefully evaluated to rule out pseudoaneurysm of splenic, gastroduodenal, or pancreaticoduodenal arteries",
      "Left retroperitoneal / retrocolic approach planned avoiding the colon and spleen",
      "Intensive Care Unit (ICU) / High Dependency Unit (HDU) bed secured post-procedure"
    ],
    "hardware": [
      {
        "category": "Large-Bore Catheter",
        "name": "14F - 16F Large-Bore Locking Pigtail Drainage Catheter",
        "spec": "14F/16F x 30 cm radiopaque catheter with large sideholes for viscous sludge",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Access Set",
        "name": "18G Chiba Needle & 0.038 Amplatz Extra Stiff Guidewire",
        "spec": "18G x 20 cm needle with 0.038 x 100 cm heavy-duty wire",
        "standardStore": "CT Interventional Suite D-9211"
      },
      {
        "category": "Dilators",
        "name": "Sequential Vascular / Fascial Dilators",
        "spec": "8F, 10F, 12F, 14F, 16F fascial dilators",
        "standardStore": "CT Suite D-9211"
      },
      {
        "category": "Irrigation Kit",
        "name": "Continuous / Intermittent Saline Lavage Set",
        "spec": "3-way stopcock with 500 mL sterile saline bags for regular irrigation",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient prone or in right lateral decubitus on CT gantry to expose the left flank.",
      "Acquire thin-slice contrast CT; map the necrotic collection extending down the left retroperitoneum and paracolic gutter.",
      "Plan a retroperitoneal trajectory via the left flank (posterolateral approach) traversing between the descending colon anteriorly and kidney posteriorly.",
      "Sterilize and drape left flank; infiltrate 20 mL 2% Lignocaine into skin, quadratus lumborum/abdominal muscles, and collection wall.",
      "Introduce 18G needle under CT guidance into the epicenter of the necrotic collection; aspirate turbid, foul-smelling necrotic debris (send for culture).",
      "Advance 0.038 Amplatz extra-stiff wire into collection; sequentially dilate tract up to 14F or 16F.",
      "Advance 14F or 16F large-bore locking catheter over wire into collection; verify symmetrical loop on CT check slices.",
      "Evacuate thick necrotic sludge; gently flush with 50-100 mL saline; connect to closed drainage bag with regular q4-6h saline irrigation protocol."
    ],
    "complications": [
      "Post-procedural sepsis / septic shock due to cavity manipulation (5-10%, requires ICU support)",
      "Catheter clogging by thick solid necrosis (20-30%, requires frequent saline flushes / upsizing)",
      "Pancreaticocutaneous or colocutaneous fistula (5-10%)",
      "Retroperitoneal bleeding from erosion of eroded vessels (1-3%)",
      "Catheter dislodgement (3-5%)"
    ],
    "maayTariffInr": 12000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "stepup-percutaneous-pancreatic-necrosectomy",
    "name": "Percutaneous Catheter Debridement / Step-Up Necrosectomy for Infected Pancreatic Necrosis",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV063",
    "rghsCode": "693 / 43",
    "icd10": "K85.92 (Acute pancreatitis with necrosis) / K65.1 (Peritoneal abscess)",
    "indications": [
      "Infected pancreatic necrosis failing to improve clinically after 72 hours of primary percutaneous catheter drainage",
      "Persistent organ failure or systemic sepsis with large volumes of solid necrotic debris in retroperitoneum",
      "Secondary step of the Step-Up Approach (VARD or Sinus Tract Endoscopy / Percutaneous Necrosectomy)",
      "Serial tract dilatation (up to 24F-30F) with mechanical extraction of non-liquefied necrotic sequestra"
    ],
    "preOpCriteria": [
      "Prior percutaneous drain in place >= 7-10 days establishing a mature retroperitoneal sinus tract",
      "Coagulation: INR <= 1.3, Platelets >= 80,000/uL",
      "Contrast CT / CT-angiography within 48h to rule out pseudoaneurysms of visceral arteries",
      "General anesthesia or deep monitored anesthesia care in Hybrid OR / Interventional Suite with ICU bed reserved"
    ],
    "hardware": [
      {
        "category": "Tract Dilation System",
        "name": "Nephrostomy / Large-Bore Balloon Dilation Set",
        "spec": "30F x 10 cm high-pressure radial balloon dilator with 30F Amplatz working sheath",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Endoscopy & Extraction",
        "name": "Flexible / Rigid Nephroscope & Grasping Forceps",
        "spec": "24F-26F nephroscope with continuous warm saline irrigation and stone/tissue grasping forceps",
        "standardStore": "Endoscopy / IR Dedicated Cabinet"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Amplatz Super Stiff & Lunderquist Wires",
        "spec": "260 cm heavy-duty stainless steel wires",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Post-Debridement Drain",
        "name": "24F - 28F Large-Bore Sump / Malecot Drainage Catheter",
        "spec": "Triple-lumen continuous irrigation and aspiration sump tube",
        "standardStore": "Central IR Consignment Store"
      }
    ],
    "techniqueSteps": [
      "Under general anesthesia or deep sedation, position patient in right lateral decubitus posture.",
      "Advance 0.035 stiff guidewire through existing retroperitoneal drainage catheter into the necrotic cavity under fluoroscopy.",
      "Remove existing catheter; dilate the sinus tract over the wire using a 30F high-pressure balloon dilation catheter.",
      "Advance 30F Amplatz working sheath over the inflated balloon into the necrotic cavity; deflate and remove balloon.",
      "Introduce rigid or flexible nephroscope through the working sheath under continuous warm normal saline irrigation.",
      "Directly visualize black/grey necrotic pancreatic sequestra; grasp and extract non-liquefied slough gently with stone/foreign body forceps under direct vision.",
      "Avoid aggressive traction on adherent tissue to prevent avulsion of retroperitoneal vascular structures.",
      "Place 24F-28F multi-lumen sump irrigation catheter into the debrided cavity; initiate continuous warm saline post-procedure lavage (100-200 mL/hr) and transfer to ICU."
    ],
    "complications": [
      "Severe retroperitoneal hemorrhage from vascular pseudoaneurysm rupture (2-5%, requires urgent embolization)",
      "Septic shock / bacteremic shower during irrigation (5-10%)",
      "Colocutaneous or gastrointestinal fistula (5-10%)",
      "Pancreatic fistula requiring long-term drainage (10-15%)",
      "Need for multiple repeat necrosectomy sessions (60-80%)"
    ],
    "maayTariffInr": 25000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Olympus Medical Systems (+91 98299 01234)"
    ]
  },
  {
    "id": "ct-splenic-abscess-drainage",
    "name": "CT-Guided Percutaneous Splenic Abscess Drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV064",
    "rghsCode": "693 / 41",
    "icd10": "D73.3 (Abscess of spleen)",
    "indications": [
      "Unilocular or discrete multilocular splenic abscess in patients unfit for primary splenectomy",
      "Persistent septic spikes and left upper quadrant tenderness despite broad-spectrum intravenous antibiotics",
      "Splenic collection secondary to infective endocarditis, typhoid fever, or contiguous infection",
      "Spleen-preserving catheter drainage in immunocompromised or pediatric/young adult patients"
    ],
    "preOpCriteria": [
      "Coagulation parameters: INR <= 1.4, Platelet count >= 60,000/uL",
      "Diagnostic contrast CT documenting safe percutaneous subcostal or lower intercostal access avoiding left pleura/lung and colon",
      "Broad-spectrum IV antibiotics initiated >= 24 hours prior",
      "NPO for 4-6 hours; baseline vitals and ICU backup confirmed"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "10F - 12F Locking Pigtail Catheter",
        "spec": "10F/12F x 25-30 cm hydrophilic locking loop catheter with Trocar/Seldinger set",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Access Needle",
        "name": "18G Trocar / Chiba Access Needle",
        "spec": "18G x 15-20 cm echogenic needle with stylet",
        "standardStore": "D9211 CT Suite Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Amplatz Super Stiff Guidewire",
        "spec": "145 cm length with 3 mm J-tip",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Fascial Dilator",
        "name": "8F - 12F Vascular Dilators",
        "spec": "Serial polyurethane radiopaque dilators",
        "standardStore": "D9211 CT Suite Store"
      },
      {
        "category": "Drainage Bag",
        "name": "Closed Gravity Drainage Bag System",
        "spec": "1000 mL collection bag with anti-reflux valve and luer lock connector",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient supine or right lateral oblique on CT table; perform planning scan with 3-5 mm slices through spleen.",
      "Select access route traversing minimal normal splenic parenchyma and avoiding costophrenic sulcus/pleural recess and splenic flexure.",
      "Sterilize left flank/subcostal area; administer 10-15 mL 2% Lignocaine down to the splenic capsule under CT verification.",
      "Advance 18G Chiba needle into the center of the splenic abscess under tandem CT slice confirmation; remove stylet and aspirate frank pus.",
      "Collect pus for aerobic, anaerobic, fungal, and AFB cultures; insert 0.035 Amplatz stiff wire and coil within the cavity.",
      "Dilate the tract sequentially over the wire using 8F, 10F, and 12F fascial dilators.",
      "Advance 10F-12F locking pigtail drainage catheter over the wire into the cavity; lock the pigtail securely and withdraw wire.",
      "Aspirate cavity contents completely; flush gently with 5-10 mL sterile saline without excessive pressure; secure catheter to skin with 2-0 silk and suture wing; attach to closed gravity bag."
    ],
    "complications": [
      "Splenic hemorrhage / subcapsular hematoma (2-5%)",
      "Left pleural transgression / pneumothorax or empyema (1-3%)",
      "Transient bacteremia / septic shock post-drainage (3-6%)",
      "Persistent abscess cavity or secondary multiloculation requiring secondary intervention or splenectomy (10-15%)",
      "Colonic perforation (<0.5%)"
    ],
    "maayTariffInr": 6500,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "ct-retroperitoneal-psoas-abscess-drainage",
    "name": "CT-Guided Percutaneous Retroperitoneal / Psoas Abscess Drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV065",
    "rghsCode": "693 / 41",
    "icd10": "K68.12 (Psoas muscle abscess) / K68.19 (Other retroperitoneal abscess)",
    "indications": [
      "Primary psoas abscess or secondary collection due to spondylodiscitis (Pott's spine), Crohn's disease, or appendicitis",
      "Large symptomatic retroperitoneal collection producing high fever, flank pain, or femoral nerve palsy (psoas sign)",
      "Need for definitive microbiological diagnosis (Pyogenic vs Tubercular cold abscess GeneXpert/AFB)",
      "Failure of conservative antibiotic/antitubercular therapy to resolve fever and inflammatory markers"
    ],
    "preOpCriteria": [
      "INR <= 1.4, Platelets >= 50,000/uL",
      "Contrast-enhanced CT scan delineating abscess extent, bone destruction, and relationship to iliac vessels and ureter",
      "Prone or lateral decubitus tolerance for CT procedure duration (30-45 minutes)",
      "Adequate analgesia planned; IV line established"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "10F - 14F Locking Pigtail Catheter",
        "spec": "10F-14F x 30 cm locking pigtail drainage catheter with hydrophilic coating",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Puncture Needle",
        "name": "18G Trocar Introducer Needle",
        "spec": "18G x 15-20 cm with echogenic bevel",
        "standardStore": "D9211 CT Suite Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Rosen / Amplatz Stiff Wire",
        "spec": "145 cm length with flexible atraumatic tip",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Dilators",
        "name": "Fascial Dilator Set",
        "spec": "8F, 10F, 12F, 14F radiopaque dilators",
        "standardStore": "D9211 CT Suite Store"
      },
      {
        "category": "Drainage System",
        "name": "Closed Urine / Pus Drainage Bag",
        "spec": "1000 mL bag with anti-reflux valve",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient prone or slightly oblique; acquire pre-procedure axial CT images through retroperitoneum/psoas.",
      "Plan posterolateral needle trajectory entering through erector spinae / quadratus lumborum, avoiding kidney, ureter, and bowel.",
      "Sterilize lumbar/flank skin; infiltrate 15-20 mL 2% Lignocaine into skin, subcutis, and deep muscular fascia.",
      "Advance 18G needle under CT guidance directly into the core of the psoas collection; confirm purulent return.",
      "Aspirate 20-30 mL for urgent Gram stain, bacterial culture, and GeneXpert MTB/RIF; advance 0.035 guidewire into collection.",
      "Perform serial tract dilation up to 12F or 14F over the stiff wire.",
      "Insert 10F-14F locking pigtail catheter; lock pigtail under CT confirmation; evacuate viscous pus completely.",
      "Perform gentle sterile saline irrigation until return is clear; secure catheter to skin with 2-0 silk and fixation patch."
    ],
    "complications": [
      "Transient femoral nerve paresthesia or anterior thigh numbness (2-4%)",
      "Local flank pain and muscle spasm (10-20%)",
      "Bacteremia / septic shock post-drainage (3-5%)",
      "Persistent sinus tract or tubercular cold abscess recurrence (5-10%)",
      "Retroperitoneal hematoma (<1%)"
    ],
    "maayTariffInr": 6000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "usg-iliopsoas-abscess-drainage",
    "name": "Ultrasound-Guided Iliopsoas Abscess Catheter Drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV066",
    "rghsCode": "693 / 41",
    "icd10": "K68.12 (Psoas muscle abscess) / M46.20 (Osteomyelitis of vertebra with abscess)",
    "indications": [
      "Acoustically accessible iliopsoas fluid collection in iliac fossa or groin",
      "Superficial or anteriorly pointing psoas cold abscess / pyogenic collection",
      "Patient unable to undergo CT due to pregnancy, severe hemodynamic instability, or pediatric age",
      "Rapid bedside decompression of tense iliac fossa collection causing severe flexion contracture of hip"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.5, Platelets >= 50,000/uL",
      "Ultrasound documentation of a safe acoustic window free from iliac vessels, femoral nerve, and bowel loops",
      "Pre-procedure antibiotics initiated",
      "Informed consent and baseline vital sign monitoring"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "8F - 10F Locking Pigtail Catheter",
        "spec": "8F/10F x 25 cm hydrophilic locking loop catheter",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Probe",
        "name": "Curvilinear & Linear Ultrasound Probes",
        "spec": "3.5 MHz curved and 7.5-10 MHz linear probes with color Doppler",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Puncture Needle",
        "name": "18G Echogenic Introducer Needle",
        "spec": "18G x 15 cm with depth markers",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Guidewire",
        "name": "0.035 J-Tip Guidewire",
        "spec": "145 cm stainless steel wire",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Collection System",
        "name": "Sterile Drainage Bag",
        "spec": "1000 mL capacity with connector",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with hip slightly extended as tolerated; perform real-time ultrasound scan of iliac fossa and groin.",
      "Use Color Doppler to map external iliac vessels and inferior epigastric artery; identify safe anterior extraperitoneal route.",
      "Clean and drape skin aseptically; infiltrate 10-15 mL 2% Lignocaine into abdominal/groin musculature under direct vision.",
      "Advance 18G needle under continuous real-time US visualization into center of collection; verify pus return on aspiration.",
      "Send samples for GeneXpert MTB, Gram stain, and aerobic/anaerobic cultures; feed 0.035 wire into cavity.",
      "Dilate entry tract with 8F-10F dilators over wire.",
      "Introduce 8F-10F locking pigtail catheter over wire; tighten lock suture and confirm loop coiling on ultrasound.",
      "Evacuate collection completely; dress site and secure catheter with adhesive fixation device and suture."
    ],
    "complications": [
      "Femoral cutaneous nerve paresthesia (1-3%)",
      "Iliac fossa hematoma (<1%)",
      "Bowel transgression if atypical trajectory used (<0.2%)",
      "Bacteremic shivers (3-5%)",
      "Catheter obstruction by thick cheesy tubercular pus (10-15%)"
    ],
    "maayTariffInr": 5000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-transabdominal-pelvic-abscess-drainage",
    "name": "Ultrasound-Guided Transabdominal Pelvic Abscess Drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV067",
    "rghsCode": "693 / 41",
    "icd10": "K65.1 (Peritoneal abscess) / N73.5 (Female pelvic peritonitis)",
    "indications": [
      "Postoperative pelvic fluid collection / abscess following appendectomy, colorectal surgery, or gynecological resection",
      "Pelvic inflammatory disease (PID) with tubo-ovarian abscess refractory to medical therapy",
      "Superficial or anteriorly situated pelvic abscess accessible through full urinary bladder acoustic window",
      "Severe pelvic pain, spiking pyrexia, and leukocytosis with localized pelvic mass"
    ],
    "preOpCriteria": [
      "Coagulation status: INR <= 1.5, Platelets >= 50,000/uL",
      "Full urinary bladder or Foley catheter clamped to create acoustic window displacing bowel loops",
      "Pre-procedure antibiotics administered",
      "Absence of uncorrectable coagulopathy"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "8F - 12F Locking Pigtail Catheter",
        "spec": "Hydrophilic coated with trocar/cannula assembly",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound System",
        "name": "Curvilinear Abdominal Probe",
        "spec": "3.5 - 5.0 MHz with needle trajectory software",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Access Needle",
        "name": "18G Chiba / Trocar Needle",
        "spec": "18G x 15-20 cm echogenic tip",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Stiff Guidewire",
        "spec": "145 cm J-tip guidewire",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Closed Drainage Kit",
        "name": "External Pus Drainage Bag",
        "spec": "1000 mL closed bag",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient supine; confirm pelvic collection and relationship to bladder, uterus/prostate, and bowel using ultrasound.",
      "Map safe extraperitoneal or anterior transabdominal route avoiding rectus muscle epigastric vessels and bladder dome.",
      "Sterilize suprapubic region; infiltrate 10-15 mL 2% Lignocaine into skin and anterior abdominal wall down to pelvic peritoneum.",
      "Introduce 18G needle under real-time acoustic control into the pelvic abscess cavity; withdraw stylet and aspirate foul pus.",
      "Send pus for urgent microbiology (aerobic, anaerobic, gram stain); advance 0.035 stiff guidewire into cavity.",
      "Progressively dilate tract over wire using 8F, 10F, and 12F dilators.",
      "Advance 8F-12F locking pigtail catheter over wire; confirm complete curl of pigtail inside the collection.",
      "Aspirate cavity to near collapse; secure catheter with locking suture and adhesive dressing; connect to gravity bag."
    ],
    "complications": [
      "Inadvertent urinary bladder puncture (1-2%, usually self-limiting)",
      "Intraperitoneal leak causing generalized peritonitis (<0.5%)",
      "Pelvic pain and bladder tenesmus (5-10%)",
      "Bowel perforation (<0.2%)",
      "Catheter occlusion requiring irrigation or replacement (5-10%)"
    ],
    "maayTariffInr": 5500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-transrectal-pelvic-abscess-drainage",
    "name": "Ultrasound-Guided Transrectal Pelvic Abscess Catheter Drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV068",
    "rghsCode": "693 / 41",
    "icd10": "K65.1 (Peritoneal abscess) / K68.11 (Postprocedural retroperitoneal abscess)",
    "indications": [
      "Deep pouch of Douglas (rectovesical / rectouterine) abscess abutting the anterior rectal wall",
      "Inability to access pelvic abscess via anterior transabdominal route due to overlying small bowel loops",
      "Post-colorectal, appendiceal, or prostatectomy pelvic collections directly palpable per rectum",
      "Drainage of deep pelvic collection in male patients where transvaginal route is not applicable"
    ],
    "preOpCriteria": [
      "Coagulation screen: INR <= 1.4, Platelets >= 50,000/uL",
      "Pre-procedure rectal enema to evacuate feces from rectal vault",
      "Broad-spectrum IV antibiotic prophylaxis (Ceftriaxone + Metronidazole)",
      "Endocavitary ultrasound probe with biopsy guide available"
    ],
    "hardware": [
      {
        "category": "Endocavitary Probe",
        "name": "Transrectal Ultrasound Probe (TRUS)",
        "spec": "5.0 - 9.0 MHz endorectal biplane probe with sterile needle guide",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Drainage Catheter",
        "name": "8F - 10F Locking Pigtail Catheter",
        "spec": "8F/10F x 25 cm trocar/seldinger locking catheter",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Puncture Needle",
        "name": "18G Transrectal Biopsy / Access Needle",
        "spec": "18G x 25 cm echogenic needle",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Stiff Amplatz Wire",
        "spec": "145 cm J-tip wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Drainage Bag",
        "name": "Leg Drainage Bag",
        "spec": "500 mL leg-mounted drainage bag with strap",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient in left lateral decubitus posture with knees flexed; administer IV analgesia/sedation.",
      "Introduce endocavitary TRUS probe covered in sterile sheath with mounted needle guide into rectum.",
      "Identify the deep pelvic abscess directly through the anterior rectal wall; measure distance and wall thickness.",
      "Instill 5-10 mL 1% Lignocaine into rectal mucosa and perirectal fat under real-time guidance.",
      "Advance 18G needle through the guide directly traversing the rectal wall into the collection; verify frank pus return.",
      "Collect pus for culture; insert 0.035 Amplatz guidewire through needle and coil loops inside the abscess cavity.",
      "Withdraw needle; dilate the tract over wire using 8F and 10F dilators.",
      "Advance 8F-10F locking pigtail catheter over wire into the abscess; lock pigtail securely.",
      "Aspirate pus; flush with saline; secure catheter externally to perineal skin or inner thigh; connect to drainage bag."
    ],
    "complications": [
      "Rectal bleeding / minor mucosal hemorrhage (1-3%)",
      "Transient tenesmus or rectal fullness sensation (15-25%)",
      "Transient bacteremia / septic chills (3-6%)",
      "Catheter dislodgement during defecation (5-10%)",
      "Pelvic fistulization (<0.5%)"
    ],
    "maayTariffInr": 6000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-transvaginal-pelvic-abscess-drainage",
    "name": "Ultrasound-Guided Transvaginal Pelvic Abscess Catheter Drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV069",
    "rghsCode": "693 / 41",
    "icd10": "N73.5 (Female pelvic peritonitis) / N70.93 (Infective tubo-ovarian abscess)",
    "indications": [
      "Ruptured or complex tubo-ovarian abscess (TOA) refractory to 48-72 hours of parenteral antibiotics",
      "Post-hysterectomy or post-cesarean vault hematoma / infected pelvic collection in cul-de-sac",
      "Pelvic abscess in female patients directly abutting the posterior vaginal fornix",
      "Preservation of ovarian reserve and fertility by avoiding surgical salpingo-oophorectomy"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "Pre-procedure bimanual pelvic examination and transvaginal ultrasound documenting proximity to posterior fornix (<1-2 cm)",
      "Broad-spectrum IV antibiotic coverage ongoing",
      "Patient consent and lithotomy position tolerance"
    ],
    "hardware": [
      {
        "category": "Transvaginal Ultrasound",
        "name": "Endocavitary Transvaginal Probe (TVS)",
        "spec": "5.0 - 9.0 MHz multi-frequency TVS probe with needle bracket",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Drainage Catheter",
        "name": "8F - 10F Locking Pigtail Catheter",
        "spec": "8F/10F x 25 cm hydrophilic catheter with locking string",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Access Needle",
        "name": "18G Transvaginal Puncture Needle",
        "spec": "18G x 25-30 cm needle with echogenic tip",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Stiff Guidewire",
        "spec": "145 cm J-tip wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Drainage System",
        "name": "Thigh-Mounted Drainage Bag",
        "spec": "500-750 mL bag with secure leg strap",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient in dorsal lithotomy posture; place sterile vaginal speculum and cleanse vagina with povidone-iodine.",
      "Infiltrate 10 mL 2% Lignocaine into posterior vaginal fornix (culdocentesis site) under direct vision.",
      "Insert sterile-sheathed transvaginal probe with biopsy guide; visualize abscess in pouch of Douglas directly.",
      "Pass 18G puncture needle through posterior fornix under continuous ultrasound guidance into the center of the cavity.",
      "Aspirate purulent/turbid fluid for culture and cytology; introduce 0.035 guidewire into cavity.",
      "Dilate vaginal tract over wire with 8F-10F dilators.",
      "Advance 8F-10F locking pigtail catheter over wire into collection; lock the pigtail loop.",
      "Aspirate collection to complete collapse; secure catheter to perineal skin or inner thigh; connect to leg bag."
    ],
    "complications": [
      "Transient vaginal spotting / mild bleeding (2-4%)",
      "Pelvic crampy pain (10-15%)",
      "Post-drainage fever or bacteremia (3-5%)",
      "Premature catheter dislodgement (5-8%)",
      "Bowel injury (<0.2%)"
    ],
    "maayTariffInr": 6000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "ct-gluteal-infragluteal-deep-pelvic-abscess-drainage",
    "name": "CT-Guided Gluteal / Infragluteal Deep Pelvic Abscess Drainage",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV070",
    "rghsCode": "693 / 41",
    "icd10": "K65.1 (Peritoneal abscess) / K68.12 (Psoas/pelvic abscess)",
    "indications": [
      "Deep pelvic abscess in the presacral space, ischiorectal fossa, or true pelvis inaccessible transabdominally",
      "Transgluteal access through greater sciatic foramen infrapiriform compartment avoiding sciatic nerve",
      "Failure or contraindicated transrectal / transvaginal drainage route",
      "Post-Miles operation (abdominoperineal resection) or pelvic exenteration infected collections"
    ],
    "preOpCriteria": [
      "Coagulation parameters: INR <= 1.4, Platelets >= 50,000/uL",
      "Planning CT documenting safe trajectory traversing sacrosciatic ligament as close to sacrum as possible to spare sciatic nerve and superior/inferior gluteal vessels",
      "Prone tolerance on CT gantry for 30-45 minutes",
      "Broad-spectrum antibiotics initiated"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "10F - 12F Locking Pigtail Catheter",
        "spec": "10F/12F x 30 cm hydrophilic locking catheter",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "CT Guidance Needle",
        "name": "18G Trocar Needle",
        "spec": "18G x 15-20 cm needle with echogenic tip",
        "standardStore": "D9211 CT Suite Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Stiff Amplatz Wire",
        "spec": "145 cm J-tip wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Dilators",
        "name": "Serial Fascial Dilators",
        "spec": "8F, 10F, 12F dilators",
        "standardStore": "D9211 CT Suite Store"
      },
      {
        "category": "Drainage Bag",
        "name": "Closed Drainage Bag",
        "spec": "1000 mL bag with anti-reflux valve",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient prone on CT couch; obtain 3-5 mm axial images through buttocks and pelvis.",
      "Select infrapiriform transgluteal trajectory as close to the sacral margin as possible to safeguard the sciatic nerve and gluteal vessels.",
      "Sterilize buttock skin; infiltrate 15-20 mL 2% Lignocaine into gluteal skin, fat, and deep muscle down to sciatic notch.",
      "Advance 18G trocar needle incrementally under CT fluoroscopy into the deep presacral/pelvic collection.",
      "Aspirate pus for microbiology; advance 0.035 stiff wire and curl several loops within cavity.",
      "Progressively dilate gluteal tract over wire using 8F to 12F dilators.",
      "Advance 10F-12F locking pigtail catheter over wire into the pelvic abscess; lock pigtail securely under CT verification.",
      "Evacuate collection completely; confirm decompression on CT scan; secure catheter to buttock skin with suture and tape."
    ],
    "complications": [
      "Sciatic nerve irritation / transient radiating buttock/leg pain (3-6%)",
      "Gluteal muscle soreness and difficulty sitting (20-30%)",
      "Inferior gluteal vessel bleeding (<1%)",
      "Catheter kinking or dislodgement when sitting (5-10%)",
      "Bacteremia / post-drainage pyrexia (3-5%)"
    ],
    "maayTariffInr": 6500,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "usg-diagnostic-paracentesis",
    "name": "Ultrasound-Guided Paracentesis (Diagnostic)",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV071",
    "rghsCode": "693 / 41",
    "icd10": "R18.8 (Other ascites) / K70.31 (Alcoholic cirrhosis with ascites)",
    "indications": [
      "New-onset ascites of unknown etiology in patients with suspected cirrhosis, malignancy, or heart failure",
      "Suspicion of spontaneous bacterial peritonitis (SBP) in cirrhotic patients with fever, pain, or encephalopathy",
      "Rule out peritoneal carcinomatosis, tuberculosis peritonitis, or chylous ascites",
      "Calculation of Serum-Ascites Albumin Gradient (SAAG) and cell count with differential"
    ],
    "preOpCriteria": [
      "Coagulation: Routine coagulopathy in cirrhosis (elevated INR / thrombocytopenia) is NOT an absolute contraindication; Platelets >= 30,000/uL",
      "Real-time ultrasound confirming adequate fluid pocket (depth >= 2-3 cm) free from adherent bowel loops",
      "Patient voided immediately prior or Foley catheter in situ to decompress bladder",
      "Sterile collection tubes ready (blood culture bottles, EDTA, plain tube)"
    ],
    "hardware": [
      {
        "category": "Aspiration Needle",
        "name": "20G - 22G Echogenic Spinal / Introducer Needle",
        "spec": "20G/22G x 7-9 cm needle with stylet",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound System",
        "name": "Curvilinear Abdominal Probe",
        "spec": "3.5 - 5.0 MHz with Color Doppler",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Syringes & Collection",
        "name": "20 mL / 50 mL Luer Lock Syringes & Specimen Kit",
        "spec": "Sterile syringes with aerobic/anaerobic blood culture bottles",
        "standardStore": "Microbiology Collection Unit"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "5 mL ampoule",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with slight head elevation; perform ultrasound survey of abdomen to identify largest fluid pocket (usually left lower quadrant, 2 fingerbreadths medial and cephalad to ASIS).",
      "Use Color Doppler to verify absence of inferior epigastric vessels or abdominal wall varices along needle path.",
      "Sterilize the selected skin site and drape under aseptic precautions.",
      "Infiltrate 3-5 mL 2% Lignocaine into skin, subcutis, and parietal peritoneum under ultrasound observation.",
      "Use Z-track technique (displacing skin 1-2 cm) to introduce 20G/22G needle directly into peritoneal cavity under real-time vision.",
      "Aspirate 30-50 mL of ascitic fluid smoothly; record gross appearance (straw-colored, cloudy, bloody, or chylous).",
      "Inoculate 10 mL directly into aerobic and anaerobic blood culture bottles at bedside; aliquot into EDTA (cell count) and plain tube (biochemistry/SAAG).",
      "Withdraw needle rapidly; release skin (sealing puncture tract); apply light pressure and sterile adhesive band-aid."
    ],
    "complications": [
      "Puncture site ascitic fluid leak (1-2%)",
      "Localized abdominal wall hematoma (<0.5%)",
      "Inadvertent bowel perforation (<0.1%, managed conservatively)",
      "Localized mild discomfort (5-10%)"
    ],
    "maayTariffInr": 2000,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Hindustan Syringes / Dispovan (+91 98291 55555)"
    ]
  },
  {
    "id": "usg-therapeutic-large-volume-paracentesis",
    "name": "Ultrasound-Guided Large-Volume Therapeutic Paracentesis with Albumin Replacement",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV072",
    "rghsCode": "693 / 41",
    "icd10": "R18.8 (Other ascites) / K74.60 (Unspecified cirrhosis of liver)",
    "indications": [
      "Tense, refractory ascites unresponsive to maximum tolerated diuretic therapy (Spironolactone + Furosemide)",
      "Severe abdominal discomfort, respiratory compromise due to diaphragmatic elevation, or early satiety in cirrhotic ascites",
      "Malignant ascites secondary to peritoneal carcinomatosis producing severe abdominal distension",
      "Scheduled periodic maintenance paracentesis in end-stage liver disease"
    ],
    "preOpCriteria": [
      "Platelets >= 30,000/uL, INR acceptable for cirrhosis",
      "Serum Albumin level known; 20% Intravenous Albumin ordered (6-8 g of Albumin per liter of ascites removed over 5 liters)",
      "Pre-procedure blood pressure and renal function (Serum Creatinine/eGFR) verified",
      "Voided bladder confirmed; patient positioned comfortably"
    ],
    "hardware": [
      {
        "category": "Paracentesis Set",
        "name": "High-Flow Paracentesis Catheter Kit (Caldwell / Centesis)",
        "spec": "6F - 8F multi-sidehole sheath-needle assembly with tubing connector",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound System",
        "name": "Curvilinear Abdominal Probe",
        "spec": "3.5 MHz curved array",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "IV Albumin",
        "name": "Human Albumin 20% Infusion",
        "spec": "100 mL vials (20 g / 100 mL) for post-paracentesis infusion",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Drainage System",
        "name": "High-Volume Vacuum Drainage Bottles / Gravity Drainage Tubing",
        "spec": "Sterile high-flow tubing set with roller clamp and collection canister",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient in semi-recumbent position tilted slightly to the left; sonographically identify deep pocket in left lower quadrant.",
      "Use Color Doppler to rule out abdominal wall collateral vessels; mark puncture site 3-4 cm superior-medial to left anterior superior iliac spine.",
      "Prep and drape skin; infiltrate 10 mL 2% Lignocaine into skin, subcutis, and peritoneum.",
      "Apply Z-track technique; advance 6F-8F multi-sidehole centesis catheter assembly into peritoneal fluid pocket under real-time guidance.",
      "Remove sharp stylet; advance soft radiopaque cannula smoothly over the needle; attach high-flow drainage tubing.",
      "Drain fluid by gravity or gentle controlled vacuum; monitor patient vitals, comfort, and drainage rate (1-2 liters per 15-20 min).",
      "When volume exceeds 5 liters, administer IV 20% Albumin (8 grams per liter of ascites evacuated) to prevent Paracentesis-Induced Circulatory Dysfunction (PICD).",
      "Upon completion of desired drainage (typically 5 to 10 liters), withdraw cannula swiftly; apply pressure for 5 minutes; apply pressure dressing; keep patient supine for 2 hours."
    ],
    "complications": [
      "Paracentesis-Induced Circulatory Dysfunction (PICD) / hypotension / renal failure (2-5% if albumin under-dosed)",
      "Persistent fluid leak from puncture site (2-5%)",
      "Electrolyte disturbances (hyponatremia) (5-10%)",
      "Abdominal wall hematoma (<1%)",
      "Secondary peritoneal infection (<0.5%)"
    ],
    "maayTariffInr": 3500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Reliance Life Sciences / Albumin Supply (+91 98290 88888)"
    ]
  },
  {
    "id": "tunneled-peritoneal-catheter-placement-ascites",
    "name": "Tunneled Peritoneal Drainage Catheter Placement (PleurX / Rocket) for Malignant Ascites",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV073",
    "rghsCode": "693 / 41",
    "icd10": "R18.0 (Malignant ascites) / C78.6 (Secondary malignant neoplasm of retroperitoneum and peritoneum)",
    "indications": [
      "Refractory malignant ascites requiring frequent hospital visits for paracentesis (e.g. ovarian, gastric, or pancreatic cancer)",
      "Palliative symptom control allowing patient/family to perform comfortable home drainage",
      "Failure of systemic chemotherapy or diuretics to control rapid peritoneal fluid recurrence",
      "Patient preference to avoid recurrent traumatic needle punctures and emergency room visits"
    ],
    "preOpCriteria": [
      "Coagulation status: INR <= 1.5, Platelets >= 50,000/uL",
      "Ultrasound confirming significant ascites pocket and healthy skin along proposed subcutaneous tunnel path in lower abdomen",
      "Absence of severe loculation or generalized peritonitis",
      "Dedicated patient/caregiver training plan arranged for sterile vacuum bottle drainage at home"
    ],
    "hardware": [
      {
        "category": "Tunneled Catheter",
        "name": "PleurX / Rocket Tunneled Peritoneal Catheter Set",
        "spec": "15.5F silicone fenestrated catheter with polyester cuff and safety valve",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Tunneler",
        "name": "Subcutaneous Tunneler & Peel-Away Introducer Sheath",
        "spec": "Plastic/metal tunneling rod with 16F peel-away sheath",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Ultrasound Probe",
        "name": "Curvilinear Probe",
        "spec": "3.5 MHz ultrasound transducer",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Guidewire",
        "name": "0.038 J-Tip Guidewire",
        "spec": "70 cm heavy duty guidewire",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Home Drainage Kit",
        "name": "Vacuum Drainage Bottles",
        "spec": "1000 mL evacuated vacuum glass/plastic bottles with line connector",
        "standardStore": "Central IR Consignment Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine; perform ultrasound evaluation of lower abdomen; mark insertion site (anterior lower quadrant) and separate tunnel exit site 5-8 cm inferior-laterally.",
      "Scrub, prep, and drape abdominal wall widely under strict sterile surgical precautions.",
      "Infiltrate 15-20 mL 1-2% Lignocaine with adrenaline along the proposed subcutaneous tunnel and peritoneal entry site.",
      "Make 1 cm skin incision at entry site and 5 mm incision at exit site; attach catheter to tunneler and pull from exit to entry incision.",
      "Position polyester cuff 1-2 cm inside the subcutaneous tunnel from exit site to promote tissue ingrowth.",
      "Puncture peritoneal cavity with 18G needle at entry incision under ultrasound guidance; introduce 0.038 J-wire.",
      "Pass 16F peel-away sheath over the wire into the peritoneal cavity; peel away sheath while advancing fenestrated catheter into pelvis.",
      "Attach drainage line; confirm free gravity flow of ascites; close entry incision with absorbable subcuticular sutures; secure exit site with suture and sterile protective dressing."
    ],
    "complications": [
      "Peritoneal bacterial peritonitis / catheter tract infection (2-5%)",
      "Catheter clogging by fibrinous or malignant debris (5-8%)",
      "Hypotension or electrolyte depletion if excessive fluid drained at once (2-4%)",
      "Tumor seeding along subcutaneous tract (<1%)",
      "Subcutaneous fluid leakage prior to cuff tissue integration (2-4%)"
    ],
    "maayTariffInr": 12000,
    "vendorContacts": [
      "BD India / CareFusion PleurX (+91 98290 12345)",
      "Rocket Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "peritoneovenous-denver-shunt-placement",
    "name": "Peritoneovenous Shunt Placement (Denver Shunt)",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV074",
    "rghsCode": "693 / 41",
    "icd10": "R18.0 (Malignant ascites) / K70.31 (Cirrhosis with ascites)",
    "indications": [
      "Intractable, refractory cirrhotic or chylous ascites in patients ineligible for TIPS or liver transplant",
      "Malignant ascites causing rapid protein loss and cachexia through frequent paracenteses",
      "Patient unable to manage external tunneled drainage catheters or living in remote rural regions",
      "Preservation of endogenous albumin and electrolytes by re-infusing ascites directly into central venous circulation"
    ],
    "preOpCriteria": [
      "Coagulation parameters: INR <= 1.5, Platelets >= 50,000/uL",
      "Peritoneal fluid evaluation: Absolute polymorphonuclear cell count < 250/uL, negative cultures (ruling out SBP)",
      "Absence of congestive heart failure (Normal or mildly depressed ejection fraction) or severe pulmonary hypertension",
      "General anesthesia or deep monitored anesthesia tolerance in hybrid OR / cath lab"
    ],
    "hardware": [
      {
        "category": "Shunt System",
        "name": "Denver Peritoneovenous Shunt Kit",
        "spec": "Dual miter valve pump chamber with 11.5F fenestrated peritoneal tube and 12F radiopaque venous catheter",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Subcutaneous Tunneler",
        "name": "Long Subcutaneous Tunneler Rod",
        "spec": "45-60 cm malleable stainless steel tunneling shaft with bullet tip",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Vascular Access",
        "name": "12F Peel-Away Sheath Introducer Set",
        "spec": "12F x 14 cm peel-away sheath with 0.035 wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "Vascular & Abdominal Ultrasound Probes",
        "spec": "Linear 7-12 MHz and Curvilinear 3.5 MHz probes",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Fluoroscopy",
        "name": "Digital C-Arm / Cath Lab Flat Panel",
        "spec": "Real-time roadmapping with cine run recording",
        "standardStore": "Cath Lab Main Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine; prep and drape right neck, chest, and anterior abdominal wall under general anesthesia or conscious sedation.",
      "Under ultrasound guidance, puncture right internal jugular vein with 18G needle; insert 0.035 wire and dilate to place a 12F peel-away sheath.",
      "Make a 4 cm transverse incision over lower right ribcage / costal margin; create a subcutaneous pocket for the Denver compressible pump chamber.",
      "Tunnel the venous arm of the catheter subcutaneously from costal pocket over the clavicle to the right neck venotomy site.",
      "Under fluoroscopy, advance venous catheter through peel-away sheath until tip rests at the superior vena cava / right atrial junction.",
      "Puncture peritoneal cavity through lower margin of the costal pocket; introduce 11.5F fenestrated peritoneal limb into right paracolic gutter.",
      "Connect peritoneal and venous limbs to the manual pump chamber; test valve patency and aspirate ascites freely.",
      "Implant pump chamber securely over lower ribs so patient can compress it postoperatively; close all surgical incisions in layers."
    ],
    "complications": [
      "Acute circulatory overload / pulmonary edema (3-5%, requires prophylactic furosemide)",
      "Disseminated Intravascular Coagulation (DIC) from rapid peritoneal thromboplastin re-infusion (2-4%)",
      "Shunt thrombosis / valve occlusion (10-20%)",
      "Bacterial sepsis / peritonitis (3-6%)",
      "Superior vena cava thrombosis (1-3%)"
    ],
    "maayTariffInr": 18000,
    "vendorContacts": [
      "BD India / CareFusion Denver Shunt (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "usg-thoracentesis-diagnostic-therapeutic",
    "name": "Ultrasound-Guided Thoracentesis (Diagnostic & Therapeutic)",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV075",
    "rghsCode": "693 / 41",
    "icd10": "J90 (Pleural effusion, not elsewhere classified) / J91.0 (Malignant pleural effusion)",
    "indications": [
      "New-onset undiagnosed pleural effusion requiring biochemical, microbiological, and cytological analysis (Light's criteria)",
      "Symptomatic moderate to large pleural effusion producing dyspnea, orthopnea, or hypoxemia",
      "Suspected parapneumonic effusion or empyema requiring urgent pH and culture evaluation",
      "Tuberculous pleural effusion or congestive heart failure effusion refractory to diuretics"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.5, Platelets >= 50,000/uL",
      "Thoracic ultrasound demonstrating pleural fluid depth >= 15 mm at proposed puncture site",
      "Patient able to sit upright leaning forward over a cardiac table (or lateral decubitus if immobile)",
      "Sterile vacuum collection bottles and collection tubes prepared"
    ],
    "hardware": [
      {
        "category": "Thoracentesis Kit",
        "name": "Over-The-Needle Centesis Catheter Set",
        "spec": "8F x 10 cm polyurethane catheter with self-sealing safety valve and 18G introducer needle",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "Linear & Curvilinear Probes",
        "spec": "3.5 MHz curved and 7.5 MHz high-frequency linear probes",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Drainage Bottles",
        "name": "Evacuated Vacuum Drainage Canister",
        "spec": "1000 mL glass vacuum bottle with connection line and three-way stopcock",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Specimen Tubes",
        "name": "Pleural Fluid Analysis Tubes",
        "spec": "Heparinized tube (pH), EDTA (cell count), plain tube (protein/LDH), and culture bottles",
        "standardStore": "Microbiology Collection Unit"
      }
    ],
    "techniqueSteps": [
      "Position patient comfortably seated upright leaning over bedside table; perform thoracic ultrasound from posterior approach.",
      "Identify lung base, diaphragm, and subdiaphragmatic organs (liver on right, spleen on left); mark rib interspace with maximal fluid depth.",
      "Prep and drape posterior hemithorax under aseptic conditions.",
      "Infiltrate 5-10 mL 2% Lignocaine into skin, intercostal muscles, and parietal pleura, marching over the superior border of the rib to avoid neurovascular bundle.",
      "Advance 8F over-the-needle centesis catheter into pleural space; verify smooth aspiration of pleural fluid.",
      "Advance soft plastic cannula into pleural cavity while withdrawing sharp needle; connect three-way stopcock and aspiration line.",
      "Collect 50-60 mL for diagnostic tests (LDH, protein, glucose, pH, Gram/AFB stain, cytology); then connect vacuum canister for therapeutic drainage.",
      "Drain up to 1000-1500 mL smoothly; stop immediately if patient develops persistent cough, chest tightness, or vasovagal symptoms.",
      "Withdraw catheter at end-expiration; apply airtight sterile dressing; obtain post-procedure ultrasound to verify lung re-expansion and absence of pneumothorax."
    ],
    "complications": [
      "Pneumothorax (1-2%, reduced to <0.5% with real-time USG)",
      "Re-expansion pulmonary edema (REPE) (<1% if drainage capped at 1.5 L)",
      "Post-procedure cough / chest tightness (10-15%)",
      "Intercostal artery laceration / hemothorax (<0.2%)",
      "Vasovagal syncope (1-2%)"
    ],
    "maayTariffInr": 2500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "small-bore-pigtail-insertion-pleural-effusion",
    "name": "Small-Bore Pigtail Catheter Insertion for Pleural Effusion",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV076",
    "rghsCode": "693 / 41",
    "icd10": "J90 (Pleural effusion, not elsewhere classified) / J91.0 (Malignant pleural effusion)",
    "indications": [
      "Recurrent symptomatic pleural effusion requiring continuous multi-day drainage",
      "Complicated parapneumonic effusion requiring slow controlled evacuation",
      "Malignant pleural effusion planned for bedside chemical pleurodesis (Talc, Bleomycin, or Doxycycline)",
      "Patient comfort preference: 8F-14F pigtail catheter causes significantly less pain than traditional large-bore chest tubes"
    ],
    "preOpCriteria": [
      "INR <= 1.5, Platelets >= 50,000/uL",
      "Ultrasound documentation of free-flowing or minimally septated pleural fluid collection",
      "Chest radiograph / CT review confirming fluid volume and diaphragm position",
      "Underwater seal chest drainage system (ICD bag / Bulau bottle) ready at bedside"
    ],
    "hardware": [
      {
        "category": "Pigtail Catheter",
        "name": "8.5F - 12F Locking Pleural Pigtail Catheter Set",
        "spec": "8.5F/12F x 25-30 cm locking loop catheter with Trocar and Seldinger insertion components",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Ultrasound Probe",
        "name": "Curvilinear & Linear Ultrasound Probes",
        "spec": "3.5 MHz and 7.5 MHz transducers",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Guidewire",
        "name": "0.035 J-Tip Guidewire",
        "spec": "145 cm stainless steel wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Chest Drainage System",
        "name": "Underwater Seal Chest Drainage Unit",
        "spec": "Single/dual chamber water-seal drainage bottle with tubing and connector",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Fixation",
        "name": "Pleural Catheter Fixation Dressing",
        "spec": "Adhesive anchoring pad and 2-0 silk suture",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient seated leaning forward or semirecumbent; evaluate hemithorax with ultrasound to mark ideal intercostal space (posterior axillary or mid-axillary line, 5th-7th ICS).",
      "Scrub, prep, and drape chest wall under sterile surgical conditions.",
      "Infiltrate 10-15 mL 2% Lignocaine into skin, periosteum of upper rib edge, and pleura until fluid is freely aspirated into syringe.",
      "Advance 18G introducer needle over superior border of rib into pleural space; confirm free return of pleural fluid.",
      "Pass 0.035 J-tip guidewire through needle into pleural cavity; verify smooth entry without resistance.",
      "Make small 3 mm skin nick; dilate tract with 8F-10F fascial dilator over wire.",
      "Advance 8.5F-12F locking pigtail catheter over wire into pleural space; pull back needle/stiffener and tighten locking string.",
      "Connect catheter to underwater seal drainage bottle; clamp temporarily after initial 1000 mL to avoid re-expansion pulmonary edema; secure catheter with 2-0 silk suture and protective dressing."
    ],
    "complications": [
      "Pneumothorax / air leak (1-2%)",
      "Catheter occlusion by fibrin or blood (5-8%)",
      "Re-expansion pulmonary edema (<1%)",
      "Intercostal neuralgia / pain at insertion site (5-10%)",
      "Catheter kinking or accidental pullout (3-5%)"
    ],
    "maayTariffInr": 4500,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "large-bore-icd-insertion-hemothorax-empyema",
    "name": "Large-Bore Intercostal Drain (ICD) Insertion for Hemothorax / Empyema",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV077",
    "rghsCode": "693 / 41",
    "icd10": "J86.9 (Pyothorax / Empyema without fistula) / S27.1 (Traumatic hemothorax)",
    "indications": [
      "Acute traumatic or post-surgical hemothorax with ongoing blood accumulation requiring rapid evacuation and monitoring",
      "Frankly purulent, thick, loculated empyema (stage II/III) where small-bore pigtail catheters fail or become occluded",
      "Massive tension pneumothorax or large bronchopleural fistula requiring high-flow suction drainage",
      "Need for urgent lung re-expansion to prevent fibrothorax, trapped lung, and emergency thoracotomy"
    ],
    "preOpCriteria": [
      "Coagulation status: INR <= 1.5, Platelets >= 50,000/uL (in trauma, proceed with resuscitation in tandem)",
      "Point-of-care thoracic ultrasound confirming fluid collection and diaphragm boundary",
      "Patient supine with arm abducted over head (triangle of safety: anterior border of latissimus dorsi, lateral border of pectoralis major, apex of axilla, 5th intercostal space)",
      "Three-chamber thoracic drainage unit and underwater seal ready"
    ],
    "hardware": [
      {
        "category": "Chest Tube",
        "name": "Large-Bore Intercostal Chest Tube (24F - 32F)",
        "spec": "Straight / curved medical-grade PVC chest tube with radiopaque sentinel line and trocar",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Surgical Instruments",
        "name": "Minor Thoracostomy Instrument Tray",
        "spec": "Scalpel #11, curved Kelly/Rochester Pean forceps, mayo scissors, needle holder",
        "standardStore": "D9211 CT Suite Store"
      },
      {
        "category": "Sutures",
        "name": "Heavy Silk Suture with Curved Needle",
        "spec": "1-0 or 2-0 Silk with cutting needle for mattress anchoring and purse-string suture",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Drainage System",
        "name": "Under-Water Seal Chest Drainage Canister",
        "spec": "Dual/triple chamber thoracic suction unit with graduated collection chamber",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Ultrasound Unit",
        "name": "Portable Sonography Machine",
        "spec": "3.5 MHz abdominal probe for diaphragmatic mapping",
        "standardStore": "USG Suite 922"
      }
    ],
    "techniqueSteps": [
      "Position patient semirecumbent (30-45 degrees) with ipsilateral arm elevated and hand placed behind head.",
      "Sonographically verify free pleural space within the 'safe triangle' (5th intercostal space, anterior/mid-axillary line).",
      "Widely prep with chlorhexidine/povidone-iodine and drape hemithorax aseptically.",
      "Generously infiltrate 15-25 mL 2% Lignocaine into skin, subcutis, intercostal muscles, and periosteum of 6th rib, finishing with parietal pleura.",
      "Make a 2.5-3 cm transverse skin incision over the 6th rib; blunt-dissect subcutaneous tissues down to intercostal fascia.",
      "Direct curved Kelly clamp over the superior margin of the 6th rib; push firmly through the intercostal muscles and parietal pleura into pleural space with a controlled 'pop'.",
      "Spread clamp jaws widely to create a 2 cm tract; insert gloved index finger into pleural cavity to confirm entry, feel lung/diaphragm, and sweep away adhesions.",
      "Grasp tip of 24F-32F chest tube with Kelly clamp; guide tube along finger tract directed posteriorly and superiorly (or basally for hemothorax).",
      "Ensure all side-eyelets are well within the pleural cavity; connect to underwater seal system; secure tube with 1-0 silk horizontal mattress and stay sutures; apply occlusive petroleum gauze dressing."
    ],
    "complications": [
      "Severe chest wall pain and intercostal nerve neuralgia (30-50%)",
      "Subcutaneous emphysema (2-5%)",
      "Diaphragm, liver, or spleen laceration (<0.5%, prevented by staying above 5th ICS and using finger sweep)",
      "Chest tube malposition (intrafissural or subcutaneous) (3-5%)",
      "Empyema or insertion site surgical wound infection (2-4%)"
    ],
    "maayTariffInr": 5000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "intracavitary-fibrinolytic-therapy-loculated-empyema",
    "name": "Image-Guided Intracavitary Fibrinolytic / Enzyme Therapy for Loculated Empyema (tPA/DNase)",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV078",
    "rghsCode": "693 / 41",
    "icd10": "J86.0 (Pyothorax with fistula) / J86.9 (Pyothorax without fistula)",
    "indications": [
      "Loculated, fibrinous parapneumonic effusion or organized empyema failing to drain through chest tube (MIST-2 protocol)",
      "CT evidence of multiloculated pleural collections with thick pleural peel and trapped lung",
      "High surgical risk patient unfit for general anesthesia and Video-Assisted Thoracoscopic Surgery (VATS) decortication",
      "Clearing intrapleural fibrin adhesions and dissolving viscous DNA-rich bacterial slough using Alteplase (tPA) and Dornase Alfa (DNase)"
    ],
    "preOpCriteria": [
      "Functioning, correctly positioned pleural pigtail or chest drain confirmed on CT/radiograph",
      "Absence of active bronchopleural fistula, major hemothorax, or recent intracranial hemorrhage (<3 months)",
      "Coagulation status: INR <= 1.5, Platelets >= 60,000/uL",
      "ICU / HDU monitoring bed available; Alteplase (10 mg) and Dornase Alfa (5 mg) reconstituted at bedside"
    ],
    "hardware": [
      {
        "category": "Fibrinolytic Drugs",
        "name": "Tissue Plasminogen Activator (tPA / Alteplase)",
        "spec": "10 mg Alteplase reconstituted in 30-50 mL sterile normal saline",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Enzyme Therapy",
        "name": "Dornase Alfa (Pulmozyme / DNase)",
        "spec": "5 mg Dornase Alfa diluted in 30 mL sterile normal saline",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chest Tube Assembly",
        "name": "3-Way Stopcock & Luer Connectors",
        "spec": "High-pressure 3-way stopcock with luer-lock extension tubing",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Drainage System",
        "name": "Closed Thoracic Suction Drainage System",
        "spec": "Under-water seal drainage unit with -20 cm H2O suction capability",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Review baseline chest CT and verify catheter position within the loculated collection; confirm chest drain is patent.",
      "Reconstitute 10 mg Alteplase (tPA) in 30 mL sterile 0.9% saline; reconstitute 5 mg Dornase Alfa (DNase) in 30 mL saline.",
      "Swab catheter connector with chlorhexidine; attach 3-way stopcock directly to chest catheter.",
      "Slowly instill 10 mg tPA into the pleural cavity; flush immediately with 10 mL normal saline.",
      "Instill 5 mg DNase into the pleural space; flush with 10 mL normal saline.",
      "Clamp the drainage catheter for precisely 1 to 2 hours, instructing patient to gently change position (supine, lateral decubitus, sitting) to distribute the enzymes across all locules.",
      "Unclamp the catheter after 2 hours; connect to low-pressure continuous wall suction (-10 to -20 cm H2O) or water seal; record drainage volume and appearance.",
      "Repeat the combined tPA/DNase instillation twice daily (every 12 hours) for up to 6 doses (3 days) according to the MIST-2 protocol, monitoring chest radiographs daily."
    ],
    "complications": [
      "Intrapleural hemorrhage / secondary hemothorax (2-4%, requires monitoring of drainage color and hematocrit)",
      "Transient chest pain during drug instillation (10-15%, pre-medicate with analgesics)",
      "Systemic bleeding (<1%)",
      "Failure to dissolve thick peel requiring surgical VATS decortication (10-15%)",
      "Pleural fluid leak around catheter (<2%)"
    ],
    "maayTariffInr": 15000,
    "vendorContacts": [
      "Boehringer Ingelheim India (+91 98290 66666)",
      "Roche Products India (+91 98291 77777)"
    ]
  },
  {
    "id": "tunneled-pleural-catheter-placement-effusion",
    "name": "Tunneled Pleural Drainage Catheter Placement (PleurX) for Refractory Malignant Pleural Effusion",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV079",
    "rghsCode": "693 / 41",
    "icd10": "J91.0 (Malignant pleural effusion) / C34.90 (Malignant neoplasm of bronchus or lung)",
    "indications": [
      "Symptomatic recurrent malignant pleural effusion in lung, breast, or ovarian carcinoma requiring repeated hospital visits",
      "Trapped lung / non-expandable lung where chemical pleurodesis is ineffective and contraindicated",
      "Patient-centered outpatient palliative care enabling self-directed, home-based drainage with vacuum bottles",
      "Elimination of repetitive emergency room visits for thoracentesis in end-stage oncological patients"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.5, Platelets >= 50,000/uL",
      "Thoracic ultrasound documenting significant pleural fluid pocket and absence of extensive solid chest wall tumor invasion",
      "Patient / family willing and capable of learning sterile vacuum drainage protocol at home",
      "Local skin healthy over proposed anterior-lateral subcutaneous tunnel route"
    ],
    "hardware": [
      {
        "category": "Tunneled Catheter",
        "name": "PleurX Tunneled Pleural Catheter Kit",
        "spec": "15.5F silicone fenestrated catheter with polyester cuff and self-sealing one-way valve",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Tunneler",
        "name": "Malleable Subcutaneous Tunneler & 16F Peel-Away Sheath",
        "spec": "Curved stainless steel tunneling rod with disposable tear-away sheath",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Guidewire",
        "name": "0.038 J-Tip Guidewire",
        "spec": "70 cm heavy duty guidewire",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Ultrasound Probe",
        "name": "Curvilinear Probe",
        "spec": "3.5 MHz transducer",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Drainage Bottles",
        "name": "PleurX Vacuum Drainage Canisters",
        "spec": "1000 mL glass vacuum drainage bottles with sterile procedure kits",
        "standardStore": "Central IR Consignment Store"
      }
    ],
    "techniqueSteps": [
      "Position patient in lateral decubitus or semi-recumbent posture with arm elevated; identify effusion with ultrasound.",
      "Mark pleural insertion site in 6th/7th intercostal space mid-axillary line; mark separate skin tunnel exit site 5-8 cm inferior-anteriorly.",
      "Scrub, prep, and drape hemithorax under strict surgical sterility.",
      "Infiltrate 15-20 mL 1% Lignocaine with adrenaline along proposed subcutaneous tunnel and pleural insertion site.",
      "Make small 1 cm incision at insertion site and 5 mm incision at exit site; pull fenestrated silicone catheter from exit to entry using tunneler.",
      "Ensure the polyester retention cuff lies 1-2 cm inside the tunnel from the exit aperture to stimulate fibrous fixation.",
      "Puncture pleural space with 18G needle at entry incision over superior rib edge; insert 0.038 wire; advance 16F peel-away sheath over wire.",
      "Peel away sheath while advancing fenestrated catheter into pleural cavity; confirm easy aspiration of fluid through safety valve.",
      "Close entry incision with 3-0 absorbable subcuticular sutures; anchor exit catheter with suture and attach sterile cap; connect initial vacuum bottle to evacuate up to 1000 mL."
    ],
    "complications": [
      "Pleural infection / empyema (2-4%, prevented with strict aseptic technique)",
      "Catheter blockage by fibrin or tumor flakes (5-8%, cleared with tPA or saline)",
      "Pain during home vacuum drainage (10-15%, managed by slowing vacuum flow clamp)",
      "Tumor seeding along the subcutaneous tract (<1%)",
      "Catheter accidental removal or cuff extrusion (1-3%)"
    ],
    "maayTariffInr": 12000,
    "vendorContacts": [
      "BD India / CareFusion PleurX (+91 98290 12345)",
      "Rocket Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "pcd-lung-abscess",
    "name": "Percutaneous Catheter Drainage of Lung Abscess",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV080",
    "rghsCode": "693 / 41",
    "icd10": "J85.2 (Abscess of lung without pneumonia) / J85.1 (Abscess of lung with pneumonia)",
    "indications": [
      "Severe, large (>4-5 cm) or refractory lung abscess failing to improve after 10-14 days of optimal intravenous antibiotic therapy",
      "Poorly draining cavity causing persistent high swinging pyrexia, severe productive cough, or sepsis",
      "Lung abscess abutting the visceral and parietal pleura with pleural symphysis (preventing pneumothorax)",
      "Patients who are poor surgical candidates for lung resection (lobectomy) due to severe debility or respiratory failure"
    ],
    "preOpCriteria": [
      "Coagulation parameters: INR <= 1.4, Platelets >= 60,000/uL",
      "Contrast CT of chest documenting pleural symphysis / adhesion (abscess directly touching chest wall without intervening aerated lung) to prevent fatal tension pneumothorax or empyema",
      "Broad-spectrum IV antibiotic therapy initiated",
      "Patient able to tolerate prone, lateral, or sitting posture in CT / fluoroscopy room"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "8.5F - 10F Locking Pigtail Catheter",
        "spec": "8.5F/10F x 25 cm hydrophilic locking loop catheter with Trocar/Seldinger set",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "CT Guidance Needle",
        "name": "18G Chiba / Trocar Needle",
        "spec": "18G x 15 cm echogenic needle with stylet",
        "standardStore": "D9211 CT Suite Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Stiff Amplatz Wire",
        "spec": "145 cm J-tip wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Underwater Seal",
        "name": "Underwater Seal Chest Drainage Unit",
        "spec": "Dual chamber underwater seal container with suction port",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Microbiology Kit",
        "name": "Anaerobic & Aerobic Culture Vials",
        "spec": "Sterile transport media for pus and fungal/mycobacterial workup",
        "standardStore": "Microbiology Collection Unit"
      }
    ],
    "techniqueSteps": [
      "Position patient in CT scanner (prone or oblique) such that the abscess cavity is in the dependent position to prevent spillage into contralateral bronchus.",
      "Acquire fine-cut planning CT images; confirm that trajectory passes directly through adherent pleura into abscess without traversing healthy aerated lung parenchyma.",
      "Sterilize thoracic skin; infiltrate 15 mL 2% Lignocaine into skin, intercostal space, and pleural rind.",
      "Under CT guidance, advance 18G needle directly through chest wall into the necrotic center of the lung abscess; confirm frank foul pus aspiration.",
      "Send samples for aerobic, anaerobic, fungal, and AFB cultures; advance 0.035 stiff wire and curl inside abscess cavity.",
      "Carefully dilate entry tract over wire using 8F and 10F dilators.",
      "Advance 8.5F-10F locking pigtail catheter over wire; confirm loop deployment inside the abscess on CT.",
      "Evacuate pus; gently flush with 5 mL sterile saline (avoiding excessive pressure to prevent broncho-aspiration); connect catheter to underwater seal drainage system."
    ],
    "complications": [
      "Bronchopleural fistula / pneumothorax (5-10%)",
      "Empyema from pleural contamination (3-6%)",
      "Hemoptysis / pulmonary parenchymal hemorrhage (2-5%)",
      "Endobronchial aspiration into healthy lung segments (1-2%, prevented by dependent patient positioning)",
      "Systemic air embolism (<0.2%)"
    ],
    "maayTariffInr": 7500,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "pcd-pneumothorax-heimlich-valve-placement",
    "name": "Percutaneous Catheter Drainage of Pneumothorax (Aspiration & Heimlich Valve Placement)",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV081",
    "rghsCode": "693 / 41",
    "icd10": "J93.0 (Spontaneous tension pneumothorax) / J93.11 (Primary spontaneous pneumothorax)",
    "indications": [
      "Primary or secondary spontaneous pneumothorax with symptom duration > 24 hours or lung collapse > 20-30%",
      "Iatrogenic pneumothorax following CT-guided lung biopsy, central venous catheterization, or thoracentesis",
      "Ambulatory outpatient management allowing patient mobility without bulky underwater seal water bottles",
      "Tension pneumothorax stabilization following initial needle decompression"
    ],
    "preOpCriteria": [
      "Patient sitting or semi-recumbent; vital signs documented (oxygen saturation, heart rate, blood pressure)",
      "Point-of-care thoracic ultrasound demonstrating absence of lung sliding, barcode sign on M-mode, and lung point",
      "Chest radiograph or ultrasound confirming pneumothorax extent",
      "Heimlich flutter valve / compact ambulatory chest drain kit ready"
    ],
    "hardware": [
      {
        "category": "Pneumothorax Kit",
        "name": "8F - 10F Pneumothorax Catheter Set with Heimlich Valve",
        "spec": "Polyurethane radiopaque pigtail catheter with blunt-tip stylet and one-way Heimlich flutter valve",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Valve",
        "name": "Heimlich Flutter Valve",
        "spec": "One-way rubber flutter valve in clear casing preventing air re-entry into chest",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Ultrasound Probe",
        "name": "High-Frequency Linear Probe",
        "spec": "7.5 - 12 MHz vascular/small parts transducer",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Aspiration Syringe",
        "name": "60 mL Syringe with 3-Way Stopcock",
        "spec": "Manual evacuation syringe set",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Fixation",
        "name": "Chest Tube Anchor Dressing",
        "spec": "Occlusive transparent dressing with suture lock",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient supine with head elevated 30-45 degrees; verify pneumothorax with thoracic ultrasound (absence of lung sliding in 2nd/3rd anterior intercostal space).",
      "Prep anterior chest wall aseptically; infiltrate 5-10 mL 2% Lignocaine into 2nd intercostal space mid-clavicular line (or 4th-5th intercostal space anterior axillary line).",
      "Advance 18G needle over superior border of rib until air bubbles are easily aspirated into liquid-filled syringe.",
      "Insert guidewire into pleural cavity; advance 8F-10F pigtail catheter over wire into apical pleural space.",
      "Connect 3-way stopcock and 60 mL syringe; manually aspirate free intrapleural air until resistance is met (typically 500-2000 mL).",
      "Attach the one-way Heimlich flutter valve to the catheter, observing correct directional arrows (allowing air out but blocking air entry).",
      "Verify flutter valve action during expiration/coughing; confirm lung re-expansion with ultrasound and follow-up chest radiograph.",
      "Secure catheter with adhesive fixation device; patient can mobilize and ambulate immediately."
    ],
    "complications": [
      "Subcutaneous emphysema around catheter site (2-4%)",
      "Catheter occlusion or kinking (<3%)",
      "Persistent air leak requiring underwater seal suction (5-10%)",
      "Re-expansion pulmonary edema (<0.5%)",
      "Intercostal nerve irritation (3-5%)"
    ],
    "maayTariffInr": 3500,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "usg-pericardiocentesis-diagnostic-evacuative",
    "name": "Ultrasound-Guided Pericardiocentesis (Diagnostic & Evacuative)",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV082",
    "rghsCode": "693 / 41",
    "icd10": "I30.9 (Acute pericarditis, unspecified) / I31.3 (Pericardial effusion, noninflammatory)",
    "indications": [
      "Emergency cardiac tamponade: Beck's triad (hypotension, jugular venous distension, muffled heart sounds) with pulsus paradoxus",
      "Hemodynamically significant moderate-to-large pericardial effusion producing dyspnea, orthopnea, or tachycardia",
      "Diagnostic sampling for suspected tuberculous pericarditis, purulent bacterial pericarditis, or neoplastic effusion",
      "Decompression of pericardial space prior to life-threatening cardiovascular collapse"
    ],
    "preOpCriteria": [
      "Emergency procedure in tamponade; if stable, verify INR <= 1.5, Platelets >= 50,000/uL",
      "Echocardiography / bedside ultrasound confirming pericardial fluid depth >= 10 mm (subxiphoid, apical, or parasternal window) and right ventricular diastolic collapse",
      "Continuous ECG, non-invasive BP, and pulse oximetry monitoring established",
      "Emergency resuscitation medications (Atropine, Adrenaline, IV fluids) at bedside"
    ],
    "hardware": [
      {
        "category": "Pericardiocentesis Kit",
        "name": "Pericardiocentesis Access Kit",
        "spec": "18G x 12-15 cm echogenic needle with side-arm tubing and 0.035 guidewire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Ultrasound / Echo",
        "name": "Phased Array Cardiac Ultrasound Probe",
        "spec": "2.0 - 4.0 MHz cardiac echo probe with continuous ECG tracing",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Guidewire",
        "name": "0.035 J-Tip Guidewire",
        "spec": "80 cm fluoroscopy-compatible J-wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Aspiration Syringe",
        "name": "50 mL Luer Lock Syringe with 3-Way Stopcock",
        "spec": "Sterile high-volume syringe kit",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Emergency Medications",
        "name": "Inj Atropine & Adrenaline",
        "spec": "0.6 mg Atropine and 1:1000 Adrenaline ampoules",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient in semi-Fowler position (30-45 degrees); attach continuous ECG leads and pulse oximeter.",
      "Perform bedside echocardiogram to evaluate maximal fluid pocket and select access route (subxiphoid trajectory directed toward left shoulder, or apical/parasternal window).",
      "Prep subxiphoid region and anterior chest wall with povidone-iodine; infiltrate 10-15 mL 2% Lignocaine into skin, subcutis, and rectus sheath down to pericardium.",
      "Advance 18G echogenic needle under real-time ultrasound guidance at a 30-45 degree angle beneath the costal margin toward the left shoulder.",
      "Maintain continuous gentle negative pressure on syringe; enter pericardial sac with sudden loss of resistance and aspiration of non-clotting pericardial fluid.",
      "Confirm needle position with agitated saline contrast echocardiography ('bubble test' showing bubbles in pericardium, NOT in cardiac chambers).",
      "Collect 50-100 mL for urgent diagnostic testing (cell count, protein/LDH, GeneXpert MTB, adenosine deaminase [ADA], cytology, and culture).",
      "Carefully evacuate fluid slowly (200-500 mL) while observing immediate hemodynamic recovery (blood pressure rise, resolution of pulsus paradoxus); withdraw needle or exchange for drain if indicated."
    ],
    "complications": [
      "Cardiac chamber puncture (right ventricle / atrium) (1-2%, managed with immediate aspiration/repositioning)",
      "Coronary artery laceration (<0.5%)",
      "Ventricular arrhythmias or severe vasovagal bradycardia (2-4%, pre-medicate with Atropine if needed)",
      "Liver laceration or pneumothorax (<0.5%)",
      "Re-accumulation of fluid (15-25% without indwelling catheter)"
    ],
    "maayTariffInr": 8000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "indwelling-pericardial-catheter-malignant-effusion",
    "name": "Indwelling Pericardial Catheter Placement for Malignant Pericardial Effusion",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV083",
    "rghsCode": "693 / 41",
    "icd10": "I31.3 (Pericardial effusion) / C79.89 (Secondary malignant neoplasm of other specified sites)",
    "indications": [
      "Recurrent symptomatic malignant pericardial effusion (lung, breast carcinoma, lymphoma, leukemia)",
      "Cardiac tamponade recurring rapidly within days of simple needle pericardiocentesis",
      "Need for extended multi-day controlled pericardial drainage to allow visceral and parietal pericardium to adhere",
      "Access for intrapericardial instillation of sclerosing or chemotherapeutic agents (Bleomycin, Cisplatin, Thiotepa)"
    ],
    "preOpCriteria": [
      "Coagulation status: INR <= 1.4, Platelets >= 60,000/uL",
      "Echocardiogram documenting persistent or recurring pericardial collection >= 10-15 mm depth",
      "Continuous ECG and hemodynamic monitoring in cath lab / ICU setting",
      "Closed gravity pericardial drainage system prepared"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "6F - 8F Locking Pigtail Pericardial Catheter Set",
        "spec": "6F/8F x 20 cm soft polyurethane multi-hole catheter with locking string and J-tip wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Rosen / Amplatz J-Tip Wire",
        "spec": "145 cm flexible stainless steel guidewire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Ultrasound / Echo",
        "name": "Echocardiography Machine",
        "spec": "Phased array probe with agitated saline bubble software",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Dilators",
        "name": "Vascular Dilator Set",
        "spec": "6F and 8F short dilators",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Drainage System",
        "name": "Closed Pericardial Drainage Bag System",
        "spec": "500-1000 mL bag with anti-reflux valve and 3-way stopcock",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient at 45 degrees elevation; connect continuous ECG monitor and arterial line / pulse oximeter.",
      "Identify optimal subxiphoid or lower parasternal window using echocardiography.",
      "Scrub, prep, and drape subxiphoid area aseptically; infiltrate 10-15 mL 2% Lignocaine into skin and retrosternal tissues.",
      "Introduce 18G puncture needle under ultrasound guidance into the pericardial space; confirm non-clotting pericardial fluid return.",
      "Inject 5 mL agitated saline to verify pericardial contrast swirl on echo; advance 0.035 Rosen J-wire into pericardium, coiling smoothly along cardiac contour.",
      "Dilate subxiphoid tract with 6F-8F dilators over wire.",
      "Advance 6F-8F locking pigtail catheter over wire into posterior pericardial gutter; lock pigtail string and withdraw wire.",
      "Evacuate initial 200-400 mL slowly; connect catheter to closed sterile gravity drainage bag; secure catheter to epigastric skin with 2-0 silk suture and adhesive wing; transfer patient to ICU with q4h drainage charting."
    ],
    "complications": [
      "Cardiac arrhythmia (atrial fibrillation, premature ventricular contractions) (3-6%)",
      "Right ventricular epicardial abrasion (<1%)",
      "Catheter occlusion by fibrin / malignant debris (5-10%, cleared with gentle sterile saline flush)",
      "Catheter-related purulent pericarditis / infection (1-3%)",
      "Catheter dislodgement (3-5%)"
    ],
    "maayTariffInr": 10000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "pcd-urinoma-drainage",
    "name": "Percutaneous Catheter Drainage of Urinoma",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV084",
    "rghsCode": "693 / 41",
    "icd10": "N28.89 (Other specified disorders of kidney and ureter) / S37.1 (Injury of ureter)",
    "indications": [
      "Encapsulated retroperitoneal urine collection (urinoma) following iatrogenic ureteral injury, trauma, or calculus rupture",
      "Urinoma producing severe flank pain, pyrexia, persistent ileus, or impending secondary bacterial infection",
      "Decompression of perinephric or pelvic urine collection to prevent retroperitoneal fibrosis, stricture, and loss of renal function",
      "Diagnostic fluid sampling to demonstrate high creatinine level relative to serum (confirming urine extravasation)"
    ],
    "preOpCriteria": [
      "Coagulation parameters: INR <= 1.4, Platelets >= 50,000/uL",
      "Contrast CT urogram or ultrasound documenting size, exact location, and proximity to kidney/ureter",
      "Broad-spectrum antimicrobial prophylaxis initiated (Ceftriaxone / Amikacin)",
      "Concomitant plan for antegrade or retrograde ureteral stenting (Double-J stent / PCN) to divert upstream urinary flow"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "8.5F - 10F Locking Pigtail Catheter",
        "spec": "8.5F/10F x 25 cm hydrophilic locking loop catheter with Trocar and Seldinger set",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Puncture Needle",
        "name": "18G - 21G Chiba Needle",
        "spec": "18G/21G x 15 cm echogenic access needle",
        "standardStore": "D9211 CT Suite Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Stiff Amplatz Wire",
        "spec": "145 cm J-tip guidewire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Ultrasound / CT",
        "name": "Ultrasound & CT Fluoroscopy Systems",
        "spec": "3.5 MHz curved probe and multi-slice CT",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Drainage Bag",
        "name": "Standard Closed Urine Bag",
        "spec": "2000 mL collection bag with anti-reflux valve",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient prone or in lateral oblique posture; identify urinoma via ultrasound or non-contrast CT.",
      "Sterilize the flank or lower back skin; infiltrate 10-15 mL 2% Lignocaine down to the retroperitoneal fascia under image guidance.",
      "Advance 18G/21G Chiba needle into the center of the encapsulated fluid collection under real-time acoustic/CT guidance.",
      "Aspirate 10-20 mL of clear yellowish or turbid fluid; send urgently for biochemical fluid Creatinine, Potassium, and bacterial culture.",
      "Insert 0.035 Amplatz guidewire through needle and coil multiple loops within the collection cavity.",
      "Dilate entry tract over wire with 8F and 10F serial fascial dilators.",
      "Advance 8.5F-10F locking pigtail catheter over wire into collection; lock the pigtail securely.",
      "Evacuate collection completely; connect catheter to closed gravity drainage bag; secure catheter to skin with 2-0 silk and fixation dressing; coordinate upstream ureteral stenting/PCN to achieve source control."
    ],
    "complications": [
      "Secondary infection / purulent abscess transformation of urinoma (3-5%)",
      "Persistent urinary leakage requiring prolonged drainage (10-20% if ureter not stented)",
      "Localized flank pain and discomfort (10-15%)",
      "Catheter occlusion or kinking (5-8%)",
      "Retroperitoneal hematoma (<1%)"
    ],
    "maayTariffInr": 5500,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "pcd-biloma-drainage",
    "name": "Percutaneous Catheter Drainage of Biloma",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV085",
    "rghsCode": "693 / 41",
    "icd10": "K83.8 (Other specified diseases of biliary tract) / K91.89 (Other postprocedural complications of digestive system)",
    "indications": [
      "Encapsulated intrahepatic or perihepatic bile collection (biloma) following cholecystectomy, liver resection, or trauma",
      "Biloma producing right upper quadrant pain, persistent fever, nausea, or secondary bacterial infection (infected biloma)",
      "Decompression of tense bile collection to prevent bile peritonitis, hepatic abscess, or mass effect on portal triad",
      "Fluid aspiration confirming high total bilirubin (confirming bile leak) and guiding microbiological treatment"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "Pre-procedure ultrasound or CT abdomen characterizing biloma size, location, and potential communication with biliary tree",
      "Parenteral antibiotics covering enteric gram-negative bacilli and anaerobes (Piperacillin-Tazobactam)",
      "Plan for post-drainage cholangiography / ERCP or PTBD if high-output persistent biliary fistula is identified"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "8.5F - 10F Locking Pigtail Catheter",
        "spec": "8.5F/10F x 25 cm hydrophilic loop catheter with Trocar/Seldinger components",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Access Needle",
        "name": "18G Chiba / Trocar Needle",
        "spec": "18G x 15 cm with echogenic tip",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Probe",
        "name": "Curvilinear Abdominal Probe",
        "spec": "3.5 - 5.0 MHz with Color Doppler",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Stiff Amplatz Wire",
        "spec": "145 cm J-tip wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Drainage Bag",
        "name": "Closed Bile Drainage Bag",
        "spec": "1000 mL bag with anti-reflux valve",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient supine or left lateral oblique; evaluate biloma using real-time ultrasound and Color Doppler.",
      "Choose a needle trajectory traversing a small margin of normal liver parenchyma (to prevent peritoneal bile leak) away from portal structures and colon.",
      "Sterilize the right upper quadrant or flank; infiltrate 10-15 mL 2% Lignocaine into skin, subcutis, and liver capsule.",
      "Under continuous ultrasound visualization, advance 18G needle directly into the center of the biloma; confirm aspiration of golden-yellow, dark green, or murky bile.",
      "Send fluid for bilirubin quantification, Gram stain, and aerobic/anaerobic cultures; pass 0.035 stiff wire and curl within the cavity.",
      "Dilate tract over wire using 8F and 10F dilators.",
      "Advance 8.5F-10F locking pigtail catheter over wire into the cavity; lock the pigtail securely under ultrasound.",
      "Aspirate the cavity completely; connect catheter to closed gravity bile bag; anchor with 2-0 silk suture and adhesive dressing; chart daily bile output."
    ],
    "complications": [
      "Secondary bacterial superinfection / cholangitis (3-5%)",
      "Persistent biliary-cutaneous fistula requiring biliary stenting (ERCP / PTBD) (15-25%)",
      "Bile leak into free peritoneal cavity causing localized peritonitis (1-2%)",
      "Intrahepatic hematoma or hemobilia (<1%)",
      "Catheter blockage or accidental dislodgement (5-8%)"
    ],
    "maayTariffInr": 6000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "pcd-lymphocele-drainage",
    "name": "Percutaneous Drainage of Lymphocele",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV086",
    "rghsCode": "693 / 41",
    "icd10": "I89.8 (Other specified noninfective disorders of lymphatic vessels and lymph nodes)",
    "indications": [
      "Symptomatic post-surgical pelvic or retroperitoneal lymphocele following renal transplantation, pelvic lymphadenectomy, or vascular reconstruction",
      "Lymphocele producing mass effect: hydronephrosis (ureteral compression), deep vein thrombosis (iliac vein compression), or lower extremity lymphedema",
      "Infected lymphocele producing pelvic pain, leukocytosis, and pyrexia",
      "First-stage diagnostic fluid evacuation and cavity preparation prior to definitive sclerotherapy"
    ],
    "preOpCriteria": [
      "Coagulation parameters: INR <= 1.4, Platelets >= 50,000/uL",
      "Ultrasound and contrast CT/MRI documenting lymphocele size, septations, and displacement of ureter/transplant graft/iliac vessels",
      "Parenteral antibiotic prophylaxis initiated",
      "Aseptic procedure setup"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "8F - 10F Locking Pigtail Catheter",
        "spec": "8F/10F x 25 cm hydrophilic locking loop catheter",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Ultrasound Probe",
        "name": "Curvilinear Abdominal Probe",
        "spec": "3.5 - 5.0 MHz curved transducer",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Access Needle",
        "name": "18G Echogenic Needle",
        "spec": "18G x 15 cm with depth calibration",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Guidewire",
        "name": "0.035 J-Tip Guidewire",
        "spec": "145 cm stainless steel wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Collection System",
        "name": "Closed Drainage Bag",
        "spec": "1000 mL bag with anti-reflux valve",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient supine; scan lower abdomen/iliac fossa with ultrasound to identify lymphocele and relationship to iliac vessels and transplanted kidney/ureter.",
      "Scrub, prep, and drape lower quadrant aseptically.",
      "Infiltrate 10 mL 2% Lignocaine into skin and abdominal musculature down to collection wall under ultrasound guidance.",
      "Introduce 18G needle under real-time guidance directly into center of lymphocele; confirm aspiration of clear straw-colored lymphatic fluid.",
      "Send fluid for protein, triglycerides, creatinine, cell count, and microbiology (ruling out urinoma and infection); advance 0.035 wire into cavity.",
      "Dilate tract with 8F and 10F dilators over wire.",
      "Advance 8F-10F locking pigtail catheter over wire into collection; lock pigtail securely under ultrasound confirmation.",
      "Evacuate collection completely; connect to closed gravity drainage bag; record daily 24-hour lymphatic output in preparation for sclerotherapy."
    ],
    "complications": [
      "Secondary infection / infected lymphocele transformation (3-6%)",
      "Persistent high-output lymphatic drainage (20-30%, requires chemical sclerosis)",
      "Iliac vessel injury (<0.2%)",
      "Catheter occlusion or dislodgement (5-8%)",
      "Localized pelvic pain (5-10%)"
    ],
    "maayTariffInr": 5000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "percutaneous-lymphocele-sclerotherapy",
    "name": "Percutaneous Lymphocele Sclerotherapy (Ethanol, Doxycycline, Bleomycin, Povidone-Iodine)",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV087",
    "rghsCode": "693 / 41",
    "icd10": "I89.8 (Other specified noninfective disorders of lymphatic vessels and lymph nodes)",
    "indications": [
      "Persistent symptomatic pelvic or retroperitoneal lymphocele with daily output < 100-150 mL following catheter drainage",
      "Failure of simple catheter drainage alone to achieve spontaneous cavity obliteration",
      "Chemical sclerosis of lymphatic endothelial lining to achieve permanent fibrosis and prevent recurrence",
      "Alternative to laparoscopic peritoneal fenestration in post-renal transplant or post-pelvic lymphadenectomy patients"
    ],
    "preOpCriteria": [
      "Indwelling drainage catheter in place with fluoroscopic lymphocelogram confirming absence of communication with peritoneal cavity, ureter, or major vascular structures",
      "Daily drainage volume < 100 mL/24h and fluid clear/non-infected (negative gram stain/culture)",
      "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
      "Sclerosant selected and prepared: 96% Absolute Ethanol, Doxycycline (500-1000 mg in 20-50 mL saline), Bleomycin (15-30 IU), or 10% Povidone-Iodine"
    ],
    "hardware": [
      {
        "category": "Sclerosant Agent",
        "name": "Doxycycline / Absolute Ethanol / Bleomycin",
        "spec": "Doxycycline 500 mg vials / Absolute dehydrated alcohol ampoules / Bleomycin 15 IU",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Contrast Medium",
        "name": "Non-Ionic Iodinated Contrast (Omnipaque 300)",
        "spec": "50 mL vial for fluoroscopic cavity delineation",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Fluoroscopy System",
        "name": "Digital C-Arm Fluoroscopy Machine",
        "spec": "High-resolution roadmapping unit",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2%",
        "spec": "10 mL for intra-cavity pre-instillation pain control",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Syringes",
        "name": "Sterile 20 mL Luer Lock Syringes with 3-Way Stopcock",
        "spec": "Solvent-resistant syringes",
        "standardStore": "Central IR Consignment Store"
      }
    ],
    "techniqueSteps": [
      "Perform fluoroscopic cavity cystogram via existing catheter using 50% non-ionic contrast; record cavity volume and verify no extravasation into peritoneum or retroperitoneal veins.",
      "Aspirate contrast and lymphatic fluid completely to minimize dilution of the sclerosant agent.",
      "Pre-instill 5-10 mL 1% Lignocaine into cavity for 5 minutes if using Ethanol or Doxycycline to blunt visceral chemical pain.",
      "Instill selected sclerosant agent (e.g. Doxycycline 500-1000 mg dissolved in 20-30 mL saline, or 96% Ethanol equal to 25-50% of measured cavity volume, max 50 mL).",
      "Clamp the drainage catheter for precisely 30 to 60 minutes.",
      "Instruct patient to rotate position every 10-15 minutes (supine, left lateral, prone, right lateral) to ensure uniform contact of sclerosant with all endothelial walls.",
      "Unclamp the catheter; completely aspirate and evacuate all sclerosant agent; reconnect catheter to gravity drainage.",
      "Repeat sclerotherapy sessions daily or alternate days for 2-4 sessions until 24-hour drainage falls below 10-15 mL; obtain ultrasound to confirm cavity obliteration, then remove catheter."
    ],
    "complications": [
      "Chemical burning pain during sclerosant dwell time (20-40%, controlled with intracavitary lignocaine and IV analgesia)",
      "Systemic ethanol absorption / intoxication or hypotension (1-2% if high-volume ethanol used)",
      "Secondary infection / abscess formation (2-4%)",
      "Allergic reaction to sclerosant (<1%)",
      "Failure of sclerosis requiring laparoscopic fenestration (5-10%)"
    ],
    "maayTariffInr": 7500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "pcd-retroperitoneal-hematoma-aspiration",
    "name": "Percutaneous Aspiration and Drainage of Retroperitoneal Hematoma",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV088",
    "rghsCode": "693 / 41",
    "icd10": "K68.11 (Postprocedural retroperitoneal abscess/hematoma) / S36.892 (Contusion of retroperitoneum)",
    "indications": [
      "Secondary infection of a retroperitoneal hematoma (fever, leukocytosis, gas on CT) following pelvic fracture, surgery, or anticoagulation",
      "Massive expanding retroperitoneal hematoma causing severe compressive femoral neuropathy or bowel obstruction AFTER active arterial bleeding has been ruled out / embolized",
      "Chronic liquefied retroperitoneal hematoma producing intractable pain, nausea, and mechanical compression",
      "Diagnostic sampling to rule out abscess or mycotic transformation"
    ],
    "preOpCriteria": [
      "CT-Angiography confirming complete absence of active arterial contrast extravasation / pseudoaneurysm (embolization must precede drainage if active bleeding exists)",
      "Coagulation status normalized: INR <= 1.4, Platelets >= 75,000/uL, anticoagulants reversed",
      "Broad-spectrum intravenous antibiotics initiated",
      "CT or ultrasound guidance ready"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "12F - 16F Large-Bore Locking Catheter",
        "spec": "12F-16F multi-hole sump or pigtail drainage catheter with large side-eyelets",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Puncture Needle",
        "name": "18G Trocar Introducer Needle",
        "spec": "18G x 15-20 cm needle with large lumen",
        "standardStore": "D9211 CT Suite Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Super Stiff Amplatz Wire",
        "spec": "145 cm heavy-duty wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Fascial Dilators",
        "name": "Vascular / Tract Dilator Set",
        "spec": "8F, 10F, 12F, 14F, 16F dilators",
        "standardStore": "D9211 CT Suite Store"
      },
      {
        "category": "Saline Flush Kit",
        "name": "Normal Saline Irrigation Kit",
        "spec": "500 mL sterile saline with 50 mL catheter-tip syringe",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient prone or lateral decubitus on CT table; acquire contrast-enhanced CT to confirm absence of active pseudoaneurysm or blush.",
      "Select posterolateral trans-muscular trajectory through quadratus lumborum avoiding kidney, colon, and ureter.",
      "Sterilize flank skin; infiltrate 15-20 mL 2% Lignocaine down to retroperitoneal fascia under CT fluoroscopy.",
      "Advance 18G needle into the center of the liquefied hematoma; aspirate dark, altered 'crankcase oil' liquefied blood and send for culture.",
      "Introduce 0.035 stiff wire and curl loops within the collection cavity.",
      "Dilate entry tract progressively up to 14F or 16F over the stiff wire.",
      "Introduce 12F-16F large-bore drainage catheter over wire; confirm complete deployment inside the hematoma on CT.",
      "Aspirate thick lysed blood; perform gentle low-pressure sterile saline irrigation; attach to gravity drainage bag; anchor securely with 2-0 silk suture."
    ],
    "complications": [
      "Reactivation of retroperitoneal hemorrhage / rebleeding (3-5%, requires immediate transarterial embolization)",
      "Secondary infection / abscess transformation of remaining clot (5-10%)",
      "Catheter occlusion by thick, non-liquefied blood clots (10-20%)",
      "Femoral nerve sensory paresthesia (2-4%)",
      "Localized flank pain (15-20%)"
    ],
    "maayTariffInr": 7000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "usg-soft-tissue-muscle-hematoma-evacuation",
    "name": "Ultrasound-Guided Soft Tissue / Muscle Hematoma Evacuation",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV089",
    "rghsCode": "693 / 41",
    "icd10": "M62.89 (Other specified disorders of muscle) / T81.0 (Hemorrhage and hematoma complicating a procedure)",
    "indications": [
      "Symptomatic rectus sheath, iliopsoas, gluteal, or thigh muscle hematoma in anticoagulated or trauma patients",
      "Severe localized pain, swelling, rapid hemoglobin drop, or impending compartment syndrome of an extremity",
      "Secondary bacterial infection of a soft tissue hematoma (abscess transformation)",
      "Failed spontaneous reabsorption of large chronic liquefied hematoma causing mass effect on adjacent neurovascular bundles"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.5, Platelets >= 50,000/uL; therapeutic anticoagulation held or reversed (Protamine / Vitamin K / PCC) if active bleeding suspected",
      "Color Doppler ultrasound documenting liquefied center and absence of active arterial pseudoaneurysm or jet",
      "Aseptic procedure tray and appropriate needle/catheter prepared",
      "Baseline limb pulses and neurological status charted"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "8.5F - 10F Pigtail Catheter / 16G Large Needle",
        "spec": "8.5F/10F locking loop catheter or 14G-16G large-bore cannula",
        "standardStore": "Room 922 USG Procedure Cabinet"
      },
      {
        "category": "Ultrasound Probe",
        "name": "Linear & Curvilinear High-Resolution Probes",
        "spec": "7.5 - 12 MHz linear probe for superficial muscle, 3.5 MHz curved for deep pelvic muscle",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Guidewire",
        "name": "0.035 J-Tip Guidewire",
        "spec": "80-145 cm stainless steel wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Syringes & Tubing",
        "name": "50 mL Luer Lock Syringes with 3-Way Stopcock",
        "spec": "Manual evacuation kit",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Drainage Bag",
        "name": "Gravity Drainage Bag",
        "spec": "1000 mL closed collection bag",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient comfortably based on hematoma site; perform ultrasound survey with Color Doppler to confirm liquefaction and rule out active arterial pseudoaneurysm.",
      "Prep skin widely with chlorhexidine; infiltrate 10-15 mL 2% Lignocaine into skin and muscle sheath.",
      "For simple aspiration: introduce 14G-16G needle into center of collection; aspirate liquefied altered dark blood until resistance is met.",
      "For catheter placement: introduce 18G needle, advance 0.035 wire, dilate tract to 10F, and advance 8.5F-10F locking pigtail catheter.",
      "Lock pigtail; evacuate contents completely; confirm collapse of muscle collection on ultrasound.",
      "Send aspirated sample for bacterial culture and Gram stain; connect catheter to closed gravity bag or apply pressure dressing after needle withdrawal; monitor limb girth and distal pulses."
    ],
    "complications": [
      "Re-bleeding into the muscle cavity (2-4%, requires compression or transcatheter embolization)",
      "Secondary bacterial infection of remaining clot (2-5%)",
      "Catheter blockage by firm clots (5-10%)",
      "Transient muscle tenderness and bruising (15-25%)",
      "Skin ecchymosis around puncture site (<5%)"
    ],
    "maayTariffInr": 3500,
    "vendorContacts": [
      "Jaipur Surgical / BD India (+91 98290 12345)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "sclerotherapy-simple-hepatic-cysts",
    "name": "Sclerotherapy of Simple Hepatic Cysts",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV090",
    "rghsCode": "693 / 41",
    "icd10": "K76.89 (Other specified diseases of liver) / Q44.6 (Cystic disease of liver)",
    "indications": [
      "Large symptomatic simple hepatic cyst (>5-10 cm) causing persistent right upper quadrant pain, early satiety, or palpable mass",
      "Extrinsic mass effect compressing biliary tree (obstructive jaundice) or portal vein/IVC",
      "Recurrence of symptoms following prior simple needle aspiration (aspiration alone has >90% recurrence rate)",
      "Destruction of secretor epithelial cyst lining using absolute alcohol (99% Ethanol) or Minocycline/Doxycycline to achieve permanent obliteration"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "Triple-phase CT or MRI confirming benign simple cyst (thin wall, no mural nodules, no internal septations) and ruling out biliary cystadenoma, echinococcal hydatid cyst, or cyst communicating with biliary tree",
      "Pre-procedure hydatid serology (Echinococcus IgG ELISA) negative",
      "NPO 4-6 hours; informed consent documented"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "8.5F Locking Pigtail Catheter",
        "spec": "8.5F x 25 cm alcohol-resistant locking loop catheter with Trocar/Seldinger set",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Sclerosant",
        "name": "99% Absolute Dehydrated Ethanol / Doxycycline",
        "spec": "Sterile absolute alcohol vials (preservative-free) or Doxycycline 1 g",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Contrast Media",
        "name": "Non-Ionic Iodinated Contrast",
        "spec": "50 mL contrast for cystography",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Ultrasound Transducer",
        "name": "Curvilinear Abdominal Probe",
        "spec": "3.5 MHz probe with needle guide",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Syringes",
        "name": "Alcohol-Resistant Luer-Lock Syringes",
        "spec": "20 mL and 50 mL polypropylene syringes with 3-way stopcocks",
        "standardStore": "Central IR Consignment Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine; scan liver with ultrasound to identify cyst and choose safe trajectory through 1-2 cm of normal liver parenchyma (preventing peritoneal spillage).",
      "Sterilize right upper quadrant skin; infiltrate 10-15 mL 2% Lignocaine down to liver capsule under real-time acoustic control.",
      "Introduce 18G needle into center of cyst under ultrasound; advance 0.035 wire and dilate tract to 8.5F.",
      "Advance 8.5F alcohol-resistant pigtail catheter over wire into cyst; lock loop securely.",
      "Aspirate cyst fluid completely and measure total volume (send fluid for cytology, CEA, CA 19-9, and bilirubin).",
      "Inject 20-30 mL non-ionic contrast under fluoroscopy (cystogram) to strictly verify absence of contrast passage into intrahepatic bile ducts.",
      "Aspirate all contrast; pre-instill 5 mL 1% Lignocaine into cyst cavity.",
      "Slowly instill 99% Absolute Ethanol equivalent to 15-25% of aspirated volume (maximum 50-100 mL per session); clamp catheter for 15-20 minutes while rotating patient into left/right lateral and prone positions.",
      "Aspirate all ethanol completely to avoid systemic absorption; flush cavity with saline; remove catheter or keep to gravity for 24h if repeat session planned."
    ],
    "complications": [
      "Chemical burning pain during ethanol dwell time (15-25%, managed with intracavitary lignocaine and IV analgesia)",
      "Systemic alcohol intoxication / flushed sensation / mild inebriation (2-5% if dwell time exceeds 20 minutes)",
      "Transient transaminitis / mild liver enzyme elevation (10-15%)",
      "Intraperitoneal alcohol leak causing severe chemical peritonitis (<0.5%, prevented by transhepatic route)",
      "Cyst recurrence requiring repeat sclerotherapy (5-10%)"
    ],
    "maayTariffInr": 9000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "sclerotherapy-adpkd-renal-cysts",
    "name": "Sclerotherapy of Autosomal Dominant Polycystic Kidney Disease (ADPKD) Cysts",
    "category": "Non-Vascular: Catheter Drainage & Stenting",
    "code": "2849-NV091",
    "rghsCode": "693 / 41",
    "icd10": "Q61.2 (Polycystic kidney, adult type / ADPKD) / N28.1 (Cyst of kidney, acquired)",
    "indications": [
      "Dominant, exceptionally large painful cyst (>5-8 cm) in patients with Autosomal Dominant Polycystic Kidney Disease (ADPKD)",
      "Intractable chronic flank/abdominal pain refractory to analgesics due to capsular stretch by dominant cyst",
      "Renal cyst causing extrinsic compression of renal pelvic-infundibular drainage resulting in localized obstruction",
      "Selective volume reduction of dominant cyst to relieve pain while preserving residual functioning nephrons"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "Pre-procedure CT/MRI identifying dominant cyst responsible for focal pain; confirming absence of calcifications, septations, or enhancement (Bosniak IIF/III/IV excluded)",
      "Baseline serum creatinine, eGFR, and blood pressure recorded",
      "Absolute alcohol (99% Ethanol) or Doxycycline/Bleomycin prepared"
    ],
    "hardware": [
      {
        "category": "Drainage Catheter",
        "name": "7F - 8.5F Alcohol-Resistant Locking Pigtail Catheter",
        "spec": "7F/8.5F x 25 cm polyurethane catheter with locking string",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Ultrasound Probe",
        "name": "Curvilinear High-Resolution Probe",
        "spec": "3.5 - 5.0 MHz curved transducer with biopsy guidance line",
        "standardStore": "USG Suite 922"
      },
      {
        "category": "Sclerosant",
        "name": "99% Absolute Ethanol / Doxycycline",
        "spec": "Preservative-free sterile ethanol ampoules or Doxycycline 500 mg",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Contrast Medium",
        "name": "Non-Ionic Contrast",
        "spec": "50 mL contrast for fluoroscopic cystogram",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Fluoroscopy System",
        "name": "Digital C-Arm Fluoroscopy Machine",
        "spec": "Real-time radiographic imaging",
        "standardStore": "Cath Lab Main Store"
      }
    ],
    "techniqueSteps": [
      "Position patient prone or lateral oblique; scan kidney with ultrasound to locate dominant culprit cyst causing capsular distension.",
      "Sterilize flank; infiltrate 10-15 mL 2% Lignocaine into skin, subcutis, and renal capsule under ultrasound.",
      "Introduce 18G needle under direct ultrasound guidance into the center of the dominant cyst; advance 0.035 wire and dilate tract to 8F.",
      "Advance 7F-8.5F alcohol-resistant pigtail catheter over wire into cyst cavity; lock loop securely.",
      "Completely aspirate cyst fluid and measure total volume; perform fluoroscopic cystography to strictly confirm absence of communication with the renal calyces or pelvicalyceal collecting system.",
      "Completely aspirate contrast; pre-instill 3-5 mL 1% Lignocaine into cavity to blunt chemical pain.",
      "Instill 99% Absolute Ethanol (equal to 15-20% of aspirated volume, max 30-50 mL) or Doxycycline solution (500 mg in 20 mL saline); clamp catheter for 15 minutes while rotating patient into prone, oblique, and lateral postures.",
      "Completely aspirate all sclerosant; flush cavity with saline; verify total fluid removal on ultrasound; withdraw catheter smoothly and apply sterile compression dressing."
    ],
    "complications": [
      "Flank chemical burning pain during sclerotherapy (20-30%, managed with analgesia)",
      "Microscopic hematuria (5-10%, self-limiting)",
      "Transient creatinine rise or renal parenchymal irritation (2-4%)",
      "Inadvertent pelvicalyceal sclerosant extravasation (<0.2%, prevented by strict pre-sclerosis cystogram)",
      "Recurrence of cyst or compensatory enlargement of adjacent cysts (10-15%)"
    ],
    "maayTariffInr": 8500,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Jaipur Surgical / BD India (+91 98290 12345)"
    ]
  },
  {
    "id": "prg-gastropexy-t-fasteners",
    "name": "Percutaneous Radiologic Gastrostomy (PRG) with Gastropexy T-Fasteners",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "code": "2849-NV092",
    "rghsCode": "693 / 41",
    "icd10": "Z93.1 (Gastrostomy status) / K22.2 (Esophageal obstruction)",
    "indications": [
      "Severe neurogenic dysphagia (ALS, stroke, Parkinson's disease, traumatic brain injury) with intact stomach",
      "Obstructing head, neck, or esophageal malignancies preventing oral nutrition where endoscopic PEG cannot pass",
      "Long-term enteral nutritional support (>4-6 weeks) avoiding chronic nasal decubitus of nasogastric tubes",
      "Gastric decompression in advanced mechanical bowel obstruction / carcinomatosis"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "Fasting >= 6-8 hours; nasogastric tube or air insufflation catheter in situ (or 20 mL effervescent granules given if patient can swallow)",
      "Absence of massive uncorrectable ascites, severe gastric varices, or interposition of transverse colon over anterior gastric wall",
      "Broad-spectrum IV antibiotic prophylaxis (Cefazolin 1-2 g) administered 30-60 min prior"
    ],
    "hardware": [
      {
        "category": "Gastrostomy Kit",
        "name": "PRG Catheter Kit (14F - 18F Balloon-Retention Gastrostomy Tube)",
        "spec": "14F-18F silicone balloon-retention feeding tube with bolus and medication ports",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Gastropexy Fasteners",
        "name": "Gastropexy T-Fastener Set (Saf-T-Pexy)",
        "spec": "Kit containing 3-4 absorbable/non-absorbable T-fastener needles with locking suture retainers",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Puncture & Dilator Set",
        "name": "Tract Dilation / Peel-Away Sheath Set",
        "spec": "18G puncture needle, 0.035 stiff wire, serial 8F-18F dilators and 16F/18F peel-away sheath",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Super Stiff Guidewire",
        "spec": "145 cm J-tip wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Contrast Medium",
        "name": "Water-Soluble Iodinated Contrast (Omnipaque / Telebrix)",
        "spec": "50 mL contrast for fluoroscopic stomach distension",
        "standardStore": "Cath Lab Main Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine; insufflate 500-1000 mL room air through nasogastric tube into stomach under fluoroscopy to distend gastric body and displace transverse colon inferiorly.",
      "Use ultrasound / fluoroscopy to mark puncture triangle on anterior abdominal wall between left costal margin, midline, and transverse colon.",
      "Sterilize upper abdomen; infiltrate 15-20 mL 2% Lignocaine down to anterior gastric wall.",
      "Deploy 3 or 4 T-fasteners in a triangular or square configuration, firing needles into the air-filled stomach and securing sutures to anchor anterior gastric wall flush against abdominal wall.",
      "Puncture the center of the gastropexy zone with 18G needle; confirm intragastric air/contrast aspiration.",
      "Advance 0.035 stiff wire into gastric antrum or duodenal sweep; serially dilate tract up to 16F or 18F.",
      "Advance 14F-18F balloon gastrostomy tube through peel-away sheath into stomach; inflate balloon with 5-7 mL sterile water; gently retract until snug against gastric wall.",
      "Inject 15 mL water-soluble contrast through tube to fluoroscopically confirm free intragastric mucosal fold distribution without perigastric leak; connect enteral feeding adapter; dress site."
    ],
    "complications": [
      "Peristomal leakage or localized skin maceration (5-10%)",
      "Inadvertent colon transgression (colocutaneous / gastrocolic fistula) (<1%)",
      "Peritonitis from premature balloon rupture or T-fastener failure (<1%)",
      "Abdominal wall bleeding or rectus sheath hematoma (1-2%)",
      "Tube occlusion or early accidental removal (3-5%)"
    ],
    "maayTariffInr": 9000,
    "vendorContacts": [
      "Avanos Medical India (+91 98290 33333)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "direct-percutaneous-radiologic-jejunostomy",
    "name": "Direct Percutaneous Radiologic Jejunostomy (PRJ)",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "code": "2849-NV093",
    "rghsCode": "693 / 41",
    "icd10": "Z93.4 (Other artificial openings of gastrointestinal tract) / K31.89 (Other diseases of stomach and duodenum)",
    "indications": [
      "Total gastrectomy, prior subtotal gastric resection, or caustic gastric destruction where gastrostomy is anatomically impossible",
      "Severe gastric outlet obstruction, severe gastroparesis, or recurrent life-threatening pulmonary aspiration of gastric feedings",
      "Direct small bowel enteric access required for elemental enteral nutrition below ligament of Treitz",
      "Alternative to surgical open feeding Witzel jejunostomy in high-risk frail patients"
    ],
    "preOpCriteria": [
      "Coagulation status: INR <= 1.4, Platelets >= 60,000/uL",
      "Pre-procedure barium or water-soluble contrast transit / CT identifying non-dilated proximal jejunal loop in left upper quadrant / umbilical region",
      "Broad-spectrum IV antibiotic prophylaxis given",
      "High-resolution fluoroscopy suite with tilt-table available"
    ],
    "hardware": [
      {
        "category": "Jejunostomy Kit",
        "name": "Direct PRJ Enteral Catheter Kit (10F - 12F)",
        "spec": "10F/12F x 30 cm locking pigtail or retention jejunal feeding tube with non-slip cuff",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "T-Fasteners",
        "name": "Enteropexy T-Fastener Set",
        "spec": "Set of 2-3 T-fastener anchor needles",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Access Needle",
        "name": "18G Chiba / Trocar Needle",
        "spec": "18G x 10 cm echogenic needle",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Rosen & Glidewire",
        "spec": "145 cm flexible guidewire set",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Peel-Away Sheath",
        "name": "10F - 12F Peel-Away Introducer Sheath",
        "spec": "Tear-away vascular sheath",
        "standardStore": "Central IR Consignment Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine; pass steerable catheter through mouth/nose or existing tract into proximal jejunum; inject air and dilute contrast to opacify and distend proximal jejunal loop.",
      "Under fluoroscopy, identify an anteriorly positioned, mobile jejunal loop in left periumbilical abdomen.",
      "Sterilize skin; infiltrate 15 mL 2% Lignocaine into abdominal wall.",
      "Deploy 2-3 T-fastener needles to anchor the selected jejunal loop against the anterior abdominal wall (enteropexy).",
      "Puncture jejunal lumen between fasteners with 18G needle; confirm intraluminal position by contrast injection and mucosal fold outlining.",
      "Advance 0.035 wire antegrade into distal jejunum; serially dilate tract over wire.",
      "Advance 10F-12F peel-away sheath; introduce jejunostomy feeding tube into efferent jejunum; peel away sheath.",
      "Confirm antegrade contrast transit down small bowel without retroperitoneal or peritoneal extravasation; lock retention mechanism; secure with sutures."
    ],
    "complications": [
      "Jejunostomy dislodgement / peritoneal leak requiring emergency exploration (2-4%)",
      "Bowel perforation or bleeding (1-3%)",
      "Peristomal skin excoriation from small bowel enteric enzymes (5-10%)",
      "Jejunal small-bowel volvulus or obstruction around enteropexy (<1%)",
      "Tube occlusion by viscous enteral formulas (5-10%)"
    ],
    "maayTariffInr": 11000,
    "vendorContacts": [
      "Avanos Medical India (+91 98290 33333)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "prgj-catheter-insertion",
    "name": "Percutaneous Radiologic Gastrojejunostomy (PRGJ) Catheter Insertion",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "code": "2849-NV094",
    "rghsCode": "693 / 41",
    "icd10": "K31.5 (Obstruction of duodenum) / K31.84 (Gastroparesis)",
    "indications": [
      "Severe diabetic or idiopathic gastroparesis with refractory nausea, vomiting, and delayed gastric emptying",
      "Gastric outlet obstruction (duodenal stenosis, inoperable pancreatic carcinoma) requiring concurrent gastric decompression and post-ligament of Treitz jejunal feeding",
      "Dual-lumen enteric management: simultaneous gastric drainage port and jejunal feeding port",
      "Conversion of existing PRG tract to transgastric jejunal feeding"
    ],
    "preOpCriteria": [
      "Coagulation parameters: INR <= 1.4, Platelets >= 60,000/uL",
      "Fasting 6-8 hours; gastric distension setup ready (or existing mature gastrostomy tract available)",
      "Intravenous motilin agonist / prokinetic (Metoclopramide 10 mg / Erythromycin) available to facilitate pyloric transit",
      "Dual-lumen gastrojejunostomy tube and steerable angled catheters ready"
    ],
    "hardware": [
      {
        "category": "PRGJ Catheter",
        "name": "Transgastric Dual-Lumen Gastrojejunostomy Tube (16F-22F with 8F-10F jejunal limb)",
        "spec": "Dual-lumen silicone tube with gastric aspiration ports and 8F x 45 cm weighted/pigtail jejunal limb",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Steerable Catheter",
        "name": "5F Kumpe / Cobra / Headhunter Catheter",
        "spec": "65-100 cm selective hydrophilic catheter",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Terumo Glidewire & 260 cm Amplatz Stiff Wire",
        "spec": "Hydrophilic angled wire and heavy duty exchange wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "T-Fasteners / Access Kit",
        "name": "Gastrostomy Access Kit",
        "spec": "T-fasteners, peel-away sheath, and fascial dilators",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Contrast Medium",
        "name": "Water-Soluble Iodinated Contrast",
        "spec": "50 mL Telebrix / Omnipaque",
        "standardStore": "Cath Lab Main Store"
      }
    ],
    "techniqueSteps": [
      "Establish transgastric access via new gastropexy puncture or existing mature gastrostomy stoma.",
      "Introduce 5F directional catheter (Kumpe or Cobra) over 0.035 angled Terumo Glidewire through stomach toward antrum.",
      "Under continuous fluoroscopy, navigate wire through the pylorus, duodenal bulb, C-loop, and across the ligament of Treitz into proximal jejunum.",
      "Exchange the hydrophilic wire for a 260 cm 0.035 Amplatz stiff wire anchored deep in the proximal jejunal loops.",
      "Dilate the stoma tract to 18F-22F over the stiff wire.",
      "Advance the dual-lumen PRGJ catheter over the wire: guide long jejunal limb across duodenal C-loop into jejunum while positioning gastric retention balloon/loop in gastric body.",
      "Inflate gastric balloon or lock gastric retention mechanism; withdraw wire.",
      "Inject water-soluble contrast through both ports under fluoroscopy to confirm gastric port decompresses stomach and jejunal port flows freely into small bowel; secure stoma."
    ],
    "complications": [
      "Retrograde migration of jejunal limb back into stomach (10-15%, causing vomiting of feeding formula)",
      "Catheter kinking at pylorus or duodenojejunal flexure (5-8%)",
      "Jejunal lumen clogging by medications (5-10%)",
      "Peristomal leakage or skin breakdown (5-10%)",
      "Minor gastric mucosal bleeding (1-2%)"
    ],
    "maayTariffInr": 12000,
    "vendorContacts": [
      "Avanos Medical India (+91 98290 33333)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "fluoroscopic-exchange-repositioning-gj-tubes",
    "name": "Fluoroscopy-Guided Exchange and Repositioning of Gastrojejunostomy Tubes",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "code": "2849-NV095",
    "rghsCode": "693 / 41",
    "icd10": "T85.528A (Displacement of gastrointestinal tube) / T85.598A (Other mechanical complication of gastrointestinal tube)",
    "indications": [
      "Retrograde displacement / migration of jejunal feeding limb back into the stomach, resulting in feeding intolerance and vomiting",
      "Mechanical occlusion of jejunal lumen by solidified enteral formula or encrusted medications unresponsive to enzymatic unblocking",
      "Perished, degraded, or fractured gastrojejunostomy tube requiring routine semi-annual or annual exchange",
      "Balloon rupture, deflation, or stomal enlargement with severe peristomal leakage"
    ],
    "preOpCriteria": [
      "Fasting 4-6 hours; enteral feeds stopped >= 4 hours prior",
      "Pre-procedure fluoroscopic contrast check confirming stomal tract maturity (>4 weeks old)",
      "Review of prior tube specifications (Fr size, length of jejunal limb in cm, stomal tract length)",
      "Replacement GJ tube, steerable catheter, and exchange wires ready"
    ],
    "hardware": [
      {
        "category": "Replacement Tube",
        "name": "Dual-Lumen GJ Replacement Tube",
        "spec": "16F-20F tube with 8F-10F jejunal limb matched to patient tract length",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Guidewires",
        "name": "0.035 Bentson & 0.035 260 cm Amplatz Stiff Wire",
        "spec": "Floppy starter wire and heavy duty exchange wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Angled Catheter",
        "name": "5F Kumpe / Cobra Catheter",
        "spec": "Hydrophilic directional catheter",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Contrast Medium",
        "name": "Water-Soluble Iodinated Contrast",
        "spec": "30 mL Telebrix / Omnipaque",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Lubricant",
        "name": "Sterile Water-Soluble Lubricant Gel",
        "spec": "Lignocaine 2% jelly",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient supine on fluoroscopy table; clean mature stomal site with chlorhexidine.",
      "Inject 10 mL contrast through jejunal port under fluoroscopy to document tube position, migration into stomach, or occlusion.",
      "Pass 0.035 Bentson or Glidewire through the jejunal port into the intestine (if patent); or deflate gastric balloon and remove displaced tube over a wire.",
      "Through existing stoma, advance 5F Kumpe catheter and angled Glidewire under fluoroscopy across pylorus, duodenal C-loop, and into jejunum.",
      "Exchange Glidewire for 260 cm Amplatz stiff wire anchored deeply in small bowel loop.",
      "Lubricate new GJ tube; advance smoothly over the stiff wire through mature stoma, stomach, and across pylorus into distal jejunum.",
      "Inflate gastric retention balloon with 5 mL sterile water; gently snug balloon against gastric wall.",
      "Perform fluoroscopic contrast checks through both gastric and jejunal lumens to verify correct positioning and absence of extravasation; connect feeding adapters."
    ],
    "complications": [
      "Disruption / loss of stomal tract into peritoneal cavity (<1%, managed with urgent wire recanalization)",
      "Transient mild abdominal cramping (5-10%)",
      "Minor peristomal bleeding or granulation tissue irritation (2-4%)",
      "Immediate re-migration if wire not anchored deep in jejunum (<2%)",
      "Contrast aspiration during coughing (<0.5%)"
    ],
    "maayTariffInr": 4500,
    "vendorContacts": [
      "Avanos Medical India (+91 98290 33333)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "balloon-dilatation-esophageal-peptic-strictures",
    "name": "Balloon Dilatation of Esophageal Anastomotic / Peptic Strictures",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "code": "2849-NV096",
    "rghsCode": "693 / 41",
    "icd10": "K22.2 (Esophageal obstruction) / K91.89 (Other postprocedural complications of digestive system)",
    "indications": [
      "Benign esophageal peptic strictures secondary to severe gastroesophageal reflux disease (GERD)",
      "Post-surgical esophageal anastomotic strictures following esophagectomy, gastrectomy, or gastric bypass",
      "Corrosive/caustic-induced chronic benign esophageal stenosis refractory to medical therapy",
      "Radiation-induced benign fibrotic esophageal strictures producing severe dysphagia to solids/liquids"
    ],
    "preOpCriteria": [
      "Coagulation status: INR <= 1.4, Platelets >= 50,000/uL",
      "Pre-procedure water-soluble esophagogram confirming stricture level, length, and caliber, and ruling out active perforation",
      "Fasting >= 6 hours; pharyngeal topical anesthesia (Lignocaine spray) and IV conscious sedation ready",
      "Balloon sizes selected (e.g. 10-12-14 mm or 12-15-18 mm Controlled Radial Expansion balloon)"
    ],
    "hardware": [
      {
        "category": "Dilatation Balloon",
        "name": "Esophageal Radial Dilation Balloon (CRE / Rigiflex)",
        "spec": "Wire-guided multi-diameter non-compliant esophageal balloon (10-12-14 mm or 15-18-20 mm x 5.5-8 cm)",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Inflation Device",
        "name": "High-Pressure Balloon Inflation Syringe with Gauge",
        "spec": "30 atm dedicated inflation manometer syringe",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Savary-Gilliard / Amplatz Super Stiff Wire",
        "spec": "260 cm wire with floppy atraumatic spring tip",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Contrast Medium",
        "name": "Water-Soluble Iodinated Contrast",
        "spec": "Telebrix Gastro / Omnipaque diluted 50% for balloon inflation and post-dilatation check",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Pharyngeal Spray",
        "name": "Lignocaine 10% Topical Spray",
        "spec": "Metered-dose throat spray",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient in semi-recumbent or lateral position under fluoroscopy; administer 3-4 sprays 10% Lignocaine to posterior pharynx followed by IV conscious sedation.",
      "Introduce hydrophilic 0.035 wire and 5F directional catheter orally; navigate gently across esophageal stricture under fluoroscopic roadmapping into stomach.",
      "Inject 5-10 mL water-soluble contrast to verify gastric entry; exchange wire for 260 cm Amplatz stiff wire.",
      "Advance uninflated esophageal radial balloon over the wire, centering the radio-opaque markers directly across the stricture waist.",
      "Inflate balloon with 50% contrast-saline mixture using inflation syringe until balloon waist effacement is fluoroscopically visualized; maintain pressure for 60 to 120 seconds.",
      "Perform incremental step-up radial expansion (e.g. 12 mm, then 13.5 mm, then 15 mm) in accordance with the 'rule of threes' to avoid esophageal rupture.",
      "Deflate balloon completely; withdraw balloon while maintaining guidewire position.",
      "Administer 20-30 mL oral water-soluble contrast under real-time fluoroscopy to verify wide stricture patency and strictly rule out transmural perforation; remove wire; monitor patient for 2-4 hours before initiating clear liquids."
    ],
    "complications": [
      "Esophageal transmural perforation (1-2%, requires immediate stent placement or surgical repair)",
      "Chest pain / substernal burning post-dilation (20-30%, self-limiting over 24 hours)",
      "Mucosal bleeding / hematemesis (2-4%)",
      "Aspiration pneumonia (<1%)",
      "Stricture recurrence requiring repeat dilatations (20-40%)"
    ],
    "maayTariffInr": 8000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 44444)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "esophageal-covered-sems-deployment",
    "name": "Percutaneous Deployment of Covered Self-Expanding Metal Stents (SEMS) for Esophageal Carcinoma",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "code": "2849-NV097",
    "rghsCode": "693 / 41",
    "icd10": "C15.9 (Malignant neoplasm of esophagus) / K22.2 (Esophageal obstruction)",
    "indications": [
      "Inoperable advanced esophageal carcinoma (squamous cell or adenocarcinoma) producing severe grade 3-4 dysphagia",
      "Malignant extrinsic compression of esophagus by lung cancer or mediastinal lymphadenopathy",
      "Palliative relief of dysphagia to restore oral soft/solid diet and eliminate salivary drooling",
      "Rapid single-session recanalization of obstructing tumors refractory to radiotherapy/chemotherapy"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 60,000/uL",
      "Barium swallow or CT chest defining exact stricture proximal and distal margins, lumen caliber, and relationship to upper esophageal sphincter (UES must be >= 2 cm above stent)",
      "Selection of stent length (tumor length + 2 cm proximal and distal coverage margin)",
      "Covered SEMS (silicone/polyurethane covered nitinol stent, 18-22 mm diameter) prepared"
    ],
    "hardware": [
      {
        "category": "Esophageal Stent",
        "name": "Fully/Partially Covered Esophageal SEMS",
        "spec": "18-20 mm body / 24 mm flared ends x 8-14 cm covered Nitinol self-expanding stent with delivery system",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Super Stiff Amplatz Wire",
        "spec": "260 cm heavy duty guidewire with atraumatic J-tip",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Angled Catheter",
        "name": "5F Kumpe / Cobra Catheter",
        "spec": "Hydrophilic directional catheter",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Contrast Medium",
        "name": "Water-Soluble Non-Ionic Contrast",
        "spec": "50 mL Telebrix / Omnipaque",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Pharyngeal Anesthetic",
        "name": "10% Lignocaine Spray & IV Sedation",
        "spec": "Topical spray and Midazolam/Fentanyl",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Spray posterior pharynx with 10% Lignocaine; administer IV conscious sedation; position patient in left lateral oblique position under fluoroscopy.",
      "Advance 5F catheter and 0.035 Terumo wire orally across the malignant stricture into the stomach under fluoroscopic roadmapping.",
      "Inject 10 mL water-soluble contrast to mark distal stricture margin; exchange wire for 260 cm Amplatz super-stiff wire.",
      "Place radio-opaque cutaneous markers on chest skin at proximal and distal tumor boundaries.",
      "Advance the covered SEMS delivery system over the stiff wire; align proximal stent flare at least 2 cm above proximal tumor margin.",
      "Under continuous real-time fluoroscopic vision, deploy the self-expanding stent by gradually retracting outer sheath while maintaining forward counter-traction on inner shaft.",
      "Confirm full stent expansion, correct alignment spanning the entire lesion, and lack of proximal/distal migration.",
      "Administer 30 mL oral water-soluble contrast; observe immediate unobstructed contrast passage through stent into stomach; remove delivery system and wire; keep patient upright for 2 hours."
    ],
    "complications": [
      "Severe retrosternal chest pain during stent expansion (30-50%, managed with scheduled analgesics for 48-72h)",
      "Stent migration into stomach (3-6% for fully covered SEMS)",
      "Esophageal perforation or tumor hemorrhage (1-2%)",
      "Globus sensation / foreign body feeling (10-15%)",
      "Tumor overgrowth at stent ends over long-term (10-15%)"
    ],
    "maayTariffInr": 16000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 44444)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "closure-tracheoesophageal-bronchoesophageal-fistulas",
    "name": "Endovascular / Radiologic Closure of Tracheoesophageal and Bronchoesophageal Fistulas",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "code": "2849-NV098",
    "rghsCode": "693 / 41",
    "icd10": "J86.0 (Pyothorax with fistula) / J95.04 (Tracheo-esophageal fistula)",
    "indications": [
      "Malignant tracheoesophageal (TEF) or bronchoesophageal fistula complicating esophageal or lung carcinoma",
      "Severe uncontrollable paroxysmal coughing and choking immediately upon swallowing liquids (Ono's sign)",
      "Recurrent, life-threatening aspiration pneumonia, chemical pneumonitis, and sepsis due to airway soiling",
      "Endoluminal exclusion of fistula using customized covered esophageal SEMS (with or without companion airway Y-stent)"
    ],
    "preOpCriteria": [
      "Coagulation status: INR <= 1.4, Platelets >= 50,000/uL",
      "Pre-procedure thin-slice CT chest with oral water-soluble contrast and virtual bronchoscopy defining exact fistula orifice, size, and relationship to carina and vocal cords",
      "Airway patency verified (if trachea/bronchus compromised by tumor, dual stenting: airway stent first, then esophageal stent)",
      "Fully covered esophageal SEMS (with silicone or polyurethane membrane spanning >= 2 cm above and below fistula) ready"
    ],
    "hardware": [
      {
        "category": "Esophageal Stent",
        "name": "Fully Covered Esophageal SEMS",
        "spec": "18-20 mm body x 10-14 cm fully covered Nitinol stent with retrieval suture loop",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Companion Airway Stent",
        "name": "Tracheobronchial Covered Stent (if indicated)",
        "spec": "Dedicated silicone Dumon or dynamic Y-stent / covered metallic airway stent",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Super Stiff Amplatz Guidewire",
        "spec": "260 cm heavy-duty wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Angled Catheter",
        "name": "5F Hydrophilic Headhunter / Kumpe Catheter",
        "spec": "100 cm selective catheter",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Contrast Medium",
        "name": "Water-Soluble Iso-Osmolar Contrast (Visipaque 320)",
        "spec": "Iso-osmolar non-ionic contrast (prevents pulmonary edema if aspirated)",
        "standardStore": "Cath Lab Main Store"
      }
    ],
    "techniqueSteps": [
      "Administer pharyngeal anesthesia and IV conscious sedation; attach continuous pulse oximeter, ECG, and blood pressure monitor.",
      "Carefully advance 5F catheter and 0.035 wire across esophagus, deliberately avoiding cannulating the fistula tract into the bronchial tree under fluoroscopy.",
      "Inject 5 mL iso-osmolar contrast to outline fistula level and confirm wire is in the distal esophagus and stomach.",
      "Exchange for 260 cm Amplatz super-stiff wire; measure fistula location relative to vertebral and cutaneous radio-opaque markers.",
      "Introduce fully covered esophageal SEMS delivery system over wire; position covered segment to provide at least 2.5-3 cm overlap above and below the fistula opening.",
      "Deploy the covered SEMS under continuous fluoroscopy; confirm full radial expansion sealing the esophageal wall against the fistula defect.",
      "(If airway narrowing is present or provoked, coordinate immediate bronchoscope/tracheal stent deployment).",
      "Perform oral water-soluble contrast swallow test on table; confirm 100% complete seal of fistula with contrast flowing cleanly into stomach and zero spillage into trachea/bronchi."
    ],
    "complications": [
      "Incomplete fistula seal / persistent leak around stent ends (5-10%, requires coaxial overlapping stent)",
      "Tracheal compression / acute airway compromise following esophageal stent expansion (2-4%, requires airway stenting)",
      "Severe retrosternal pain (20-30%)",
      "Stent migration (5-8% in fully covered designs)",
      "Massive fatal hemoptysis from tumor erosion into pulmonary vessels (1-3%)"
    ],
    "maayTariffInr": 18000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 44444)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "balloon-dilatation-gastroduodenal-strictures",
    "name": "Balloon Dilatation of Benign Gastroduodenal Strictures",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "code": "2849-NV099",
    "rghsCode": "693 / 41",
    "icd10": "K31.1 (Adult hypertrophic pyloric stenosis) / K31.5 (Obstruction of duodenum)",
    "indications": [
      "Benign peptic pyloric or duodenal bulb strictures secondary to chronic scarring from peptic ulcer disease (PUD)",
      "Post-surgical anastomotic stenosis following Billroth I/II gastrectomy, Whipple procedure, or Roux-en-Y reconstruction",
      "Corrosive/acid ingestion-induced gastric outlet stenosis with preserved gastric motility",
      "Persistent nausea, early satiety, large-volume vomiting of undigested food, and metabolic hypochloremic alkalosis"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
      "Upper GI endoscopy / barium fluoroscopy confirming benign etiology (biopsies negative for gastric carcinoma/lymphoma)",
      "Stomach decompressed with large-bore nasogastric tube lavage >= 12 hours prior to clear retained food residue",
      "Non-compliant angioplasty / GI dilatation balloons (12 to 20 mm diameter) selected"
    ],
    "hardware": [
      {
        "category": "Dilatation Balloon",
        "name": "Gastroduodenal Radial Dilation Balloon",
        "spec": "12-15 mm or 15-18 mm x 4-6 cm non-compliant balloon with dual radio-opaque markers",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Inflation Manometer",
        "name": "High-Pressure Inflation Syringe",
        "spec": "Dedicated 30 atm pressure gauge inflation syringe",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Super Stiff Amplatz Guidewire",
        "spec": "260 cm wire with atraumatic tip",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Directional Catheter",
        "name": "5F Kumpe / Cobra Catheter",
        "spec": "100 cm hydrophilic catheter",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Contrast Medium",
        "name": "Water-Soluble Non-Ionic Contrast",
        "spec": "Telebrix Gastro / Omnipaque",
        "standardStore": "Cath Lab Main Store"
      }
    ],
    "techniqueSteps": [
      "Aspirate residual gastric fluid via NG tube; position patient in right lateral decubitus posture under fluoroscopy.",
      "Administer pharyngeal anesthesia and IV conscious sedation.",
      "Introduce 5F directional catheter and 0.035 hydrophilic wire orally (or transgastrically if mature stoma exists); steer across stomach, through pyloric stricture into distal duodenum.",
      "Confirm intraluminal duodenal wire position by gentle contrast injection; exchange for 260 cm Amplatz stiff wire.",
      "Advance uninflated balloon catheter over the wire; center balloon across the narrowed pyloroduodenal waist.",
      "Slowly inflate balloon with 50% contrast-saline mixture; observe progressive waist disappearance under fluoroscopy; hold inflation for 60 to 90 seconds.",
      "Perform serial incremental dilatations (e.g. 12 mm, then 14 mm, up to 16-18 mm) ensuring mucosal safety.",
      "Deflate balloon; perform completion fluoroscopic water-soluble contrast examination to confirm rapid free gastric emptying into jejunum and rule out duodenal perforation."
    ],
    "complications": [
      "Duodenal / pyloric transmural perforation (1-2%, requires immediate surgical or endoscopic clip repair)",
      "Mucosal bleeding / hematemesis (2-4%)",
      "Abdominal pain / cramping (15-25%)",
      "Re-stenosis requiring repeat dilation sessions (20-35%)",
      "Aspiration of retained gastric contents during sedation (<1%)"
    ],
    "maayTariffInr": 8500,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 44444)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "percutaneous-enteral-stenting-malignant-outlet-obstruction",
    "name": "Percutaneous Enteral Stenting for Malignant Gastric Outlet Obstruction (Enteral SEMS)",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "code": "2849-NV100",
    "rghsCode": "693 / 41",
    "icd10": "C25.9 (Malignant neoplasm of pancreas) / K31.5 (Obstruction of duodenum)",
    "indications": [
      "Inoperable advanced pancreatic head adenocarcinoma, gastric antral carcinoma, or metastatic cholangiocarcinoma causing gastric outlet obstruction (GOO)",
      "Intractable vomiting, severe dehydration, and inability to tolerate oral nutrition (Gastric Outlet Obstruction Scoring System GOOSS score 0)",
      "Frail patient with short life expectancy or high surgical risk unfit for surgical gastrojejunostomy",
      "Rapid palliation restoring oral liquid/soft diet intake within 24-48 hours"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
      "Pre-procedure contrast CT and water-soluble barium study delineating site, length (usually 3-8 cm), and degree of duodenal obstruction",
      "Large-bore nasogastric tube decompression performed overnight to evacuate stagnant gastric contents",
      "Uncovered or partially covered enteric SEMS (20-22 mm diameter, 6-12 cm length) available"
    ],
    "hardware": [
      {
        "category": "Enteral Stent",
        "name": "Self-Expanding Metal Enteral Stent (WallFlex / Cook Enteral SEMS)",
        "spec": "20-22 mm diameter x 6-12 cm uncovered/partially covered Nitinol stent on 10F delivery system",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Guidewires",
        "name": "0.035 Terumo Glidewire & 260 cm Amplatz Super Stiff Wire",
        "spec": "Hydrophilic angled wire and heavy duty support wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Catheter",
        "name": "5F Kumpe / Cobra Catheter",
        "spec": "100 cm selective hydrophilic catheter",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Contrast Medium",
        "name": "Water-Soluble Non-Ionic Contrast",
        "spec": "50 mL Telebrix / Omnipaque",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Pharyngeal Anesthetic",
        "name": "10% Lignocaine Spray & Sedation",
        "spec": "Throat spray and IV analgesia/sedation",
        "standardStore": "DDC-14 Central"
      }
    ],
    "techniqueSteps": [
      "Position patient in right lateral oblique posture; spray throat with 10% Lignocaine; administer IV sedation.",
      "Introduce 5F catheter and 0.035 Terumo wire orally (or via transgastric route if stoma exists); steer across gastric antrum.",
      "Under fluoroscopic roadmapping, carefully negotiate the wire across the malignant duodenal stricture into the normal distal duodenum and proximal jejunum.",
      "Inject 10 mL contrast to confirm distal jejunal position and determine stricture margins; exchange for 260 cm Amplatz super-stiff wire.",
      "Advance enteral SEMS delivery system over the wire; center the stent across the tumor stenosis, ensuring at least 2 cm of stent extends beyond proximal and distal tumor margins.",
      "Deploy the self-expanding stent under continuous live fluoroscopy; observe radial expansion locking the mesh across the obstruction.",
      "Verify stent position, patency, and absence of acute complications; perform oral contrast swallow showing free flow into jejunum.",
      "Remove wire and delivery system; keep patient semi-recumbent; begin clear liquid diet after 12 hours, advancing to soft pureed diet over 48 hours."
    ],
    "complications": [
      "Stent re-occlusion by tumor ingrowth/overgrowth (10-15%, managed by repeat coaxial stent placement)",
      "Stent migration into distal bowel (3-5% for covered SEMS, <1% for uncovered SEMS)",
      "Duodenal perforation (<1%)",
      "Bleeding from friable tumor tissue (2-4%)",
      "Mild abdominal discomfort (10-15%)"
    ],
    "maayTariffInr": 18000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 44444)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "colonic-sems-deployment-malignant-obstruction",
    "name": "Transanal / Fluoroscopic Deployment of Colonic SEMS for Malignant Bowel Obstruction",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "code": "2849-NV101",
    "rghsCode": "693 / 41",
    "icd10": "C18.9 (Malignant neoplasm of colon) / K56.60 (Unspecified intestinal obstruction)",
    "indications": [
      "Acute large bowel obstruction due to left-sided colorectal carcinoma (rectosigmoid, descending colon, or splenic flexure)",
      "Bridge to surgery (BTS): converts emergency high-morbidity laparotomy with colostomy into elective one-stage resection with primary anastomosis",
      "Palliative treatment of bowel obstruction in patients with advanced metastatic colorectal cancer",
      "Relief of massive colonic distension (impending cecal perforation when cecal diameter > 9-10 cm)"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
      "Contrast CT abdomen/pelvis ruling out free colonic perforation / peritonitis and measuring stricture length and location",
      "Gentle rectal cleansing enema with warm saline (avoid aggressive bowel prep to prevent perforation)",
      "Dedicated enteral colonic SEMS (22-25 mm diameter x 6-12 cm length) ready"
    ],
    "hardware": [
      {
        "category": "Colonic Stent",
        "name": "Colonic Self-Expanding Metal Stent (WallFlex Colonic)",
        "spec": "22-25 mm body / 30 mm flared ends x 6-12 cm uncovered Nitinol stent on 10F delivery system",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Terumo Glidewire & 260 cm Amplatz Super Stiff Wire",
        "spec": "Hydrophilic angled wire and heavy duty support wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Catheter",
        "name": "5F Kumpe / Cobra Catheter",
        "spec": "100 cm selective catheter",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Contrast Medium",
        "name": "Water-Soluble Non-Ionic Contrast",
        "spec": "Telebrix / Omnipaque diluted 50%",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Fluoroscopy System",
        "name": "Digital C-Arm / Cath Lab Suite",
        "spec": "Real-time radiographic imaging",
        "standardStore": "Cath Lab Main Store"
      }
    ],
    "techniqueSteps": [
      "Position patient in left lateral decubitus or lithotomy position on fluoroscopy table; administer IV analgesia/sedation.",
      "Under fluoroscopy (with or without endoscopic assistance), advance 5F catheter and 0.035 hydrophilic wire transanally to the rectosigmoid tumor.",
      "Inject 10-15 mL water-soluble contrast to outline the distal tumor shelf; carefully negotiate wire through the eccentric malignant lumen into dilated proximal colon.",
      "Confirm proximal intraluminal positioning by contrast injection outlining colonic haustra; exchange for 260 cm Amplatz super-stiff wire.",
      "Advance the colonic SEMS delivery system over the stiff wire; align stent so that proximal and distal margins extend at least 2 cm beyond the tumor boundaries.",
      "Under continuous live fluoroscopy, gradually release the self-expanding stent; observe the stent flares anchoring above and below the stricture waist.",
      "Confirm instant decompression: passage of large volumes of trapped flatus and liquid feces through the expanding stent on the table.",
      "Perform completion fluoroscopy with contrast; withdraw wire; place patient in observation bed; monitor clinical abdominal decompression."
    ],
    "complications": [
      "Colonic perforation (3-5%, requires emergency laparotomy)",
      "Stent migration (2-4% in uncovered stents)",
      "Stent re-obstruction by tumor ingrowth or fecal impaction (5-10%)",
      "Tenesmus, pelvic cramping, or mild rectal bleeding (10-20%)",
      "Transient bacteremia / post-decompression fever (3-5%)"
    ],
    "maayTariffInr": 18000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 44444)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "balloon-dilatation-colonic-anastomotic-strictures",
    "name": "Fluoroscopy-Guided Balloon Dilation of Colonic Anastomotic Strictures",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "code": "2849-NV102",
    "rghsCode": "693 / 41",
    "icd10": "K91.89 (Other postprocedural complications of digestive system) / K62.4 (Stenosis of anus and rectum)",
    "indications": [
      "Benign colonic anastomotic strictures following low anterior resection, colectomy, or reversal of Hartmann's procedure",
      "Symptomatic narrowing producing constipation, tenesmus, pencil-thin stools, and painful defecation",
      "Radiation-induced benign rectosigmoid stenosis following pelvic radiotherapy",
      "Preservation of natural transanal defecation and avoidance of permanent colostomy"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
      "Contrast enema / sigmoidoscopy confirming benign nature (no tumor recurrence) and measuring distance from anal verge",
      "Gentle phosphate or saline enema to clear lower rectum",
      "High-pressure colonic / esophageal dilation balloons (15 to 20 mm diameter) prepared"
    ],
    "hardware": [
      {
        "category": "Dilatation Balloon",
        "name": "Colonic / Enteral High-Pressure Balloon (CRE / Rigiflex)",
        "spec": "15-18 mm or 18-20 mm x 5.5 cm non-compliant balloon with radiopaque markers",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Inflation Manometer",
        "name": "High-Pressure Inflation Device",
        "spec": "30 atm gauge inflation syringe",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Super Stiff Amplatz Wire",
        "spec": "145-260 cm heavy-duty wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Catheter",
        "name": "5F Kumpe / Multipurpose Catheter",
        "spec": "100 cm selective catheter",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Contrast Medium",
        "name": "Water-Soluble Iodinated Contrast",
        "spec": "Telebrix Gastro / Omnipaque",
        "standardStore": "Cath Lab Main Store"
      }
    ],
    "techniqueSteps": [
      "Position patient in left lateral or prone oblique posture; administer IV analgesia and conscious sedation.",
      "Introduce 5F catheter and 0.035 Glidewire transanally under fluoroscopic roadmapping to the anastomotic narrowing.",
      "Inject 10-15 mL water-soluble contrast to delineate stricture length and caliber; steer wire across the narrow waist into dilated proximal colon.",
      "Exchange for 0.035 Amplatz super-stiff wire.",
      "Advance uninflated colonic dilation balloon over wire, centering radio-opaque markers directly across the anastomotic scar.",
      "Inflate balloon with 50% contrast-saline mixture; observe progressive waist abolition under fluoroscopy; hold inflation for 60 to 120 seconds.",
      "Perform gentle sequential step-up expansion (e.g. 15 mm, then 16.5 mm, up to 18 mm).",
      "Deflate balloon; perform completion contrast enema under fluoroscopy to confirm wide opening of the stoma and rule out transmural perforation; observe for 2-4 hours."
    ],
    "complications": [
      "Colonic wall perforation (1-2%, requires immediate surgical or endoscopic intervention)",
      "Rectal bleeding / minor mucosal laceration (2-4%)",
      "Pelvic pain and tenesmus (10-15%)",
      "Stricture recurrence requiring repeat dilatation sessions (15-25%)",
      "Transient vasovagal reaction during inflation (1-3%)"
    ],
    "maayTariffInr": 8000,
    "vendorContacts": [
      "Boston Scientific India (+91 98290 44444)",
      "Cook Medical India (+91 98292 34567)"
    ]
  },
  {
    "id": "percutaneous-cecostomy-colonic-pseudo-obstruction",
    "name": "Percutaneous Cecostomy for Colonic Pseudo-Obstruction (Ogilvie Syndrome)",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "code": "2849-NV103",
    "rghsCode": "693 / 41",
    "icd10": "K59.89 (Other specified functional intestinal disorders) / K56.69 (Other intestinal obstruction)",
    "indications": [
      "Acute massive colonic pseudo-obstruction (Ogilvie syndrome) with cecal diameter > 9-11 cm refractory to Neostigmine and colonoscopic decompression",
      "Impending ischemic cecal perforation in critically ill, postoperative, or ICU patients",
      "Severe neurogenic constipation / fecal incontinence in pediatric or quadriplegic patients requiring antegrade continence enema (Malone ACE / Cecostomy)",
      "Decompression of large bowel obstruction in patients unfit for emergency laparotomy"
    ],
    "preOpCriteria": [
      "Coagulation: INR <= 1.4, Platelets >= 50,000/uL",
      "CT abdomen/pelvis or plain abdominal radiograph demonstrating marked cecal distension (>9 cm) without mechanical obstructing mass",
      "Real-time ultrasound and fluoroscopy confirming anterior cecal position abutting right lower quadrant abdominal wall without intervening small bowel",
      "Broad-spectrum IV antibiotic coverage ongoing"
    ],
    "hardware": [
      {
        "category": "Cecostomy Kit",
        "name": "Percutaneous Cecostomy Tube Kit (10F - 14F Retention Catheter)",
        "spec": "10F-14F silicone balloon or locking pigtail catheter with retention bolster",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "T-Fasteners",
        "name": "Cecopexy T-Fasteners Set",
        "spec": "Kit containing 3-4 T-fastener needles with locking retention buttons",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Access Needle",
        "name": "18G Chiba / Trocar Needle",
        "spec": "18G x 10 cm echogenic tip needle",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035 Stiff Rosen / Amplatz Wire",
        "spec": "145 cm J-tip wire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Contrast Medium",
        "name": "Water-Soluble Non-Ionic Contrast",
        "spec": "50 mL Telebrix / Omnipaque",
        "standardStore": "Cath Lab Main Store"
      }
    ],
    "techniqueSteps": [
      "Position patient supine; scan right lower quadrant with ultrasound to identify maximally distended cecal anterior wall and verify absence of epigastric vessels.",
      "Sterilize right iliac fossa skin; infiltrate 15-20 mL 2% Lignocaine down to anterior cecal wall under ultrasound.",
      "Deploy 3 or 4 T-fasteners in a triangular or square configuration, firing into cecal lumen under ultrasound/fluoroscopic verification and locking sutures to anchor cecum firmly to abdominal wall (cecopexy).",
      "Puncture center of cecopexy zone with 18G needle; confirm free escape of trapped colonic gas and fecal fluid.",
      "Inject 10 mL water-soluble contrast to outline cecal mucosal haustra; advance 0.035 stiff wire and curl inside ascending colon.",
      "Dilate tract over wire with serial 8F to 12F dilators.",
      "Advance 10F-14F locking pigtail or balloon retention catheter over wire into cecum; lock loop or inflate retention balloon with 3-5 mL sterile water.",
      "Connect catheter to bedside drainage bag for immediate continuous decompression of trapped gas and liquid stool; apply sterile dressing."
    ],
    "complications": [
      "Fecal peritonitis / peritoneal leakage (<1% when cecopexy T-fasteners used)",
      "Peristomal skin excoriation from fecal drainage (5-10%)",
      "Abdominal wall cellulitis / wound infection (3-5%)",
      "Catheter blockage by solid feces (5-10%, managed with saline irrigations)",
      "Premature catheter dislodgement (2-4%)"
    ],
    "maayTariffInr": 9500,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Avanos Medical India (+91 98290 33333)"
    ]
  },
  {
    "id": "fluoroscopic-nasojejunal-feeding-tube-placement",
    "name": "Fluoroscopic Nasojejunal (NJ) Feeding Tube Placement with Steerable Guidewire",
    "category": "Non-Vascular: Gastrointestinal & Enteric Interventions",
    "code": "2849-NV104",
    "rghsCode": "693 / 41",
    "icd10": "Z93.4 (Other artificial openings of gastrointestinal tract) / K85.90 (Acute pancreatitis)",
    "indications": [
      "Severe acute necrotizing pancreatitis requiring early post-ligament of Treitz enteral feeding to prevent gut bacterial translocation",
      "Severe gastroparesis, gastric atony, or recurrent vomiting where gastric feeding is contraindicated",
      "High aspiration risk in critically ill, intubated, or neurologically impaired ICU patients",
      "Short-to-intermediate term enteral nutritional support (2-6 weeks) avoiding surgical feeding tubes"
    ],
    "preOpCriteria": [
      "Coagulation: Coagulopathy is not a contraindication (minimal bleeding risk); Platelets >= 30,000/uL",
      "Nasal patency verified; topical nasal vasoconstrictor/decongestant (Xylometazoline drops) administered",
      "Fasting 4 hours; patient upright or semi-recumbent on fluoroscopy table",
      "Enteral feeding tube (8F - 12F x 120-140 cm with tungsten-weighted tip) ready"
    ],
    "hardware": [
      {
        "category": "Enteral Feeding Tube",
        "name": "Nasojejunal (NJ) Feeding Tube (8F - 12F)",
        "spec": "8F-12F x 130-145 cm polyurethane radiopaque feeding tube with weighted tip and internal stylet",
        "standardStore": "Central IR Consignment Store"
      },
      {
        "category": "Steerable Guidewire",
        "name": "0.035 Terumo Hydrophilic Glidewire Angled",
        "spec": "180-260 cm angled hydrophilic guidewire",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Directional Catheter",
        "name": "5F Kumpe / Cobra Catheter",
        "spec": "100 cm selective hydrophilic catheter",
        "standardStore": "Cath Lab Main Store"
      },
      {
        "category": "Topical Anesthesia",
        "name": "2% Lignocaine Jelly & Xylometazoline Drops",
        "spec": "Sterile lubricating anesthetic gel",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Contrast Medium",
        "name": "Water-Soluble Non-Ionic Contrast",
        "spec": "20 mL Telebrix / Omnipaque",
        "standardStore": "Cath Lab Main Store"
      }
    ],
    "techniqueSteps": [
      "Instill 2-3 drops of Xylometazoline and 5 mL 2% Lignocaine jelly into selected patent nostril.",
      "Introduce 5F directional catheter and 0.035 angled Terumo Glidewire through the nose into pharynx and esophagus under fluoroscopic visualization.",
      "Advance catheter into stomach; gently form a loop along the greater curvature directed toward the pyloric antrum.",
      "Under fluoroscopy, steer the angled Glidewire across the pyloric sphincter into duodenal bulb, sweep around duodenal C-loop, and cross the ligament of Treitz into proximal jejunum.",
      "Confirm jejunal position: inject 5 mL contrast to demonstrate characteristic jejunal feathery mucosal fold pattern.",
      "Exchange the 5F catheter over a 260 cm stiff/exchange wire, or directly slide the 8F-12F weighted NJ feeding tube over the stiff wire into the jejunum.",
      "Verify the NJ tube tip lies at least 20-30 cm past the ligament of Treitz to prevent retrograde gastric reflux.",
      "Carefully remove guidewire while holding forward counter-pressure on the tube; inject 10 mL water-soluble contrast to document free flow into jejunum; secure tube to nose with hypoallergenic tape; clear for enteral feeding immediately."
    ],
    "complications": [
      "Retrograde curling / dislodgement of the tube into stomach during vomiting (5-10%)",
      "Tube clogging by formula or medication pellets (5-10%)",
      "Minor epistaxis (nasal bleeding) (2-4%)",
      "Nasal alar necrosis from tight taping (1-2%)",
      "Transient coughing / pharyngeal gagging (10-15%)"
    ],
    "maayTariffInr": 4000,
    "vendorContacts": [
      "Cook Medical India (+91 98292 34567)",
      "Avanos Medical India (+91 98290 33333)"
    ]
  }
];

export function getNonVascularBiopsyProcedure(id: string): ProcedureBlueprint | undefined {
  return NON_VASCULAR_BIOPSY_PROCEDURES.find((p) => p.id === id);
}

export default NON_VASCULAR_BIOPSY_PROCEDURES;
