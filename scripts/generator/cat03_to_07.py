# -*- coding: utf-8 -*-
"""
Categories 03 to 07 Procedure Data Definitions
"""

CATEGORY_03_PROCEDURES = [
    {
        "id": "cat03-ptbd-right",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Right Percutaneous Transhepatic Biliary Drainage (PTBD)",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Percutaneous Transhepatic Biliary Drainage (PTBD)",
            "packageCode": "1849-IN058A",
            "icd10": "K83.1",
            "tariffInr": 12000
        },
        "modality": "XA",
        "targetAnatomy": ["Right Intrahepatic Biliary Radicles", "Common Hepatic Duct", "Common Bile Duct"],
        "sedation": "Local Anesthesia with Conscious Sedation (IV Midazolam 1-2mg + Fentanyl 50mcg)",
        "accessSiteDefault": "Right 10th/11th intercostal space mid-axillary line",
        "sheathDefault": "8F/10F Biliary introducer sheath",
        "cathetersAndWires": "21G Chiba needle, 0.018\" Nitinol wire, Neff Percutaneous Access Set, 0.035\" stiff Glidewire, 5F Kumpe / KMP catheter",
        "embolicOrImplants": "8.5F / 10F Ring-type multiple side-hole locking biliary drainage catheter",
        "proceduralNarrativeTemplate": "Patient supine. Ultrasound localization of dilated right peripheral biliary radicle (Segment 6/7). Aseptic prep and drape. Local anesthesia with 2% lignocaine down to liver capsule. 21G Chiba needle advanced into target duct under fluoroscopy and sonography. Bile aspirated and sent for culture/cytology. Cholangiogram obtained demonstrating high-grade biliary obstruction. 0.018\" wire inserted, upsized via Neff set to 0.035\" stiff Glidewire. 5F KMP catheter manipulated across stricture into duodenum. Exchange performed for an 8.5F/10F internal-external locking biliary drainage pigtail catheter with side-holes positioned proximal and distal to stricture. Catheter locked, flushed, secured to skin with 2-0 silk, and connected to drainage bag.",
        "postOpCare": {
            "immobilizationHours": 4,
            "immobilizationInstructions": "Supine bedrest x 4 hours. Keep bile collection bag dependent below bed level.",
            "hematomaChecks": "Monitor puncture site for bile leak or blood; vitals q15m x 1h, q30m x 2h, then q1h.",
            "requiredImaging": "Bedside USG abdomen if severe abdominal pain or suspected biloma/hemoperitoneum.",
            "hydrationProtocol": "IV Normal Saline at 100 mL/hr to replace bile salt/fluid losses.",
            "medications": ["IV Piperacillin-Tazobactam 4.5g TDS", "IV Tramadol 50mg SOS", "Tab Ursodeoxycholic Acid 300mg BD"],
            "redFlags": ["Severe biliary peritonitis / guarding", "High fever with rigors (septic cholangitis)", "Frank hemobilia in drainage bag", "Catheter dislodgement"]
        },
        "consentId": "consent-ptbd-drainage",
        "calculatorId": "cigarroa_macd"
    },
    {
        "id": "cat03-ptbd-left",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Left Percutaneous Transhepatic Biliary Drainage (PTBD)",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Percutaneous Transhepatic Biliary Drainage (PTBD)",
            "packageCode": "1849-IN058A",
            "icd10": "K83.1",
            "tariffInr": 12000
        },
        "modality": "XA",
        "targetAnatomy": ["Left Intrahepatic Biliary Radicles (Segment 3/2)", "Common Hepatic Duct"],
        "sedation": "Local Anesthesia with Conscious Sedation",
        "accessSiteDefault": "Subxiphoid epigastric approach under direct sonographic visualization",
        "sheathDefault": "8.5F Biliary drainage set",
        "cathetersAndWires": "21G Chiba, 0.018\" wire, 0.035\" hydrophilic Stiff Glidewire, 5F Kumpe catheter",
        "embolicOrImplants": "8.5F locking biliary pigtail catheter",
        "proceduralNarrativeTemplate": "Subxiphoid ultrasound localized dilated Segment 3 intrahepatic duct. Sterile prep. 1% lignocaine infiltration. Real-time US puncture with 21G Chiba needle into Segment 3 duct. Bile aspirated, contrast injected delineating left ductal system. 0.018\" wire advanced, transitioned with 6F coaxial dilator to 0.035\" stiff Glidewire. Stricture crossed into CBD and duodenum. 8.5F internal-external drainage catheter positioned with sideholes bridging stricture. Locked and secured.",
        "postOpCare": {
            "immobilizationHours": 4,
            "immobilizationInstructions": "Supine bedrest x 4 hours. Keep bag dependent.",
            "hematomaChecks": "Monitor subxiphoid puncture site for bile leak or hematoma q30m x 2h, then q1h.",
            "requiredImaging": "Bedside USG if acute epigastric peritonism.",
            "hydrationProtocol": "IV Normal Saline 100 mL/hr.",
            "medications": ["IV Piperacillin-Tazobactam 4.5g TDS", "IV Ondansetron 4mg TDS"],
            "redFlags": ["Peritoneal signs", "Frank blood in bile", "Persistent rigors"]
        },
        "consentId": "consent-ptbd-drainage",
        "calculatorId": "cigarroa_macd"
    },
    {
        "id": "cat03-biliary-stent-sems",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Percutaneous Transhepatic Biliary Stenting (Uncovered / Covered SEMS)",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Biliary Stenting",
            "packageCode": "1849-IN059A",
            "icd10": "C24.0",
            "tariffInr": 25000
        },
        "modality": "XA",
        "targetAnatomy": ["Common Bile Duct", "Biliary Confluence", "Duodenum"],
        "sedation": "Conscious Sedation / MAC",
        "accessSiteDefault": "Existing PTBD tract or fresh right/left transhepatic access",
        "sheathDefault": "8F - 10F Vascular / Biliary Sheath",
        "cathetersAndWires": "0.035\" Amplatz Super Stiff wire, 5F angled Glidecath, 8mm-10mm x 60-80mm Self-Expanding Metal Stent (SEMS)",
        "embolicOrImplants": "10mm x 80mm Biliary Nitinol SEMS",
        "proceduralNarrativeTemplate": "Access via mature PTBD tract. Cholangiogram delineated location and length of malignant biliary stricture. 0.035\" Amplatz Super Stiff guidewire placed into distal duodenum. Pre-dilation performed using a 6mm x 40mm balloon catheter if tight. 10mm x 80mm Nitinol SEMS advanced across stricture with 1cm coverage proximal and distal. Stent deployed under continuous fluoroscopy. Immediate contrast drainage into duodenum confirmed with no residual trans-stenotic gradient. 8.5F safety check tube left in place.",
        "postOpCare": {
            "immobilizationHours": 4,
            "immobilizationInstructions": "Bedrest x 4 hours. Safety tube clamped after 24 hours if patient remains afebrile.",
            "hematomaChecks": "Vitals and abdominal examination q30m x 2h, then q1h.",
            "requiredImaging": "Check cholangiogram / fluoroscopy at 24h prior to safety catheter removal.",
            "hydrationProtocol": "IV fluids 100 mL/hr x 12 hours.",
            "medications": ["IV Ceftriaxone 1g BD", "Tab Ursodeoxycholic acid 300mg BD"],
            "redFlags": ["Severe abdominal peritonitis", "Septic shock", "Melena or hemobilia"]
        },
        "consentId": "consent-biliary-stent",
        "calculatorId": "cigarroa_macd"
    },
    {
        "id": "cat03-hvpg-measurement",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Hepatic Venous Pressure Gradient (HVPG) Measurement",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Hepatic Venous Pressure Gradient (HVPG)",
            "packageCode": "1849-CV021A",
            "icd10": "K76.6",
            "tariffInr": 8000
        },
        "modality": "XA",
        "targetAnatomy": ["Right Hepatic Vein", "Middle Hepatic Vein", "Inferior Vena Cava"],
        "sedation": "Local Anesthesia (2% Lignocaine 10 mL)",
        "accessSiteDefault": "Right Internal Jugular Vein (IJV) under real-time US guidance",
        "sheathDefault": "6F 11cm Check-Flo Vascular Sheath",
        "cathetersAndWires": "7F Balloon-tipped occlusion catheter (Swan-Ganz or Berenstein), 0.035\" J-tip wire, transducer line connected to pressure monitor",
        "embolicOrImplants": "N/A",
        "proceduralNarrativeTemplate": "Right IJV accessed under real-time ultrasound with 18G needle; 6F sheath inserted. 7F balloon-tipped catheter advanced under fluoroscopy into right hepatic vein. Catheter zeroed at mid-axillary line level. Free Hepatic Venous Pressure (FHVP) measured in triplicate. Balloon inflated with 1.0-1.5 mL air to achieve complete wedge occlusion; Wedged Hepatic Venous Pressure (WHVP) measured in triplicate with contrast test verifying absence of collateral runoff. IVC pressure recorded. HVPG calculated as WHVP minus FHVP. Tracings recorded; sheath removed with manual compression.",
        "postOpCare": {
            "immobilizationHours": 2,
            "immobilizationInstructions": "Bedrest for 2 hours; neck in neutral position.",
            "hematomaChecks": "Inspect right neck puncture site for swelling or hematoma q15m x 1h, then q30m.",
            "requiredImaging": "None routine.",
            "hydrationProtocol": "Oral fluids allowed immediately.",
            "medications": ["Tab Paracetamol 650mg PO SOS"],
            "redFlags": ["Neck hematoma / airway compromise", "Stridor", "Chest pain"]
        },
        "consentId": "consent-hvpg",
        "calculatorId": "cigarroa_macd"
    },
    {
        "id": "cat03-tips-viatorr",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Transjugular Intrahepatic Portosystemic Shunt (TIPS) with Viatorr Stent-Graft",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Transjugular Intrahepatic Portosystemic Shunt (TIPS)",
            "packageCode": "1849-IN060A",
            "icd10": "K76.6",
            "tariffInr": 65000
        },
        "modality": "XA",
        "targetAnatomy": ["Right Hepatic Vein", "Right Branch of Portal Vein", "Main Portal Vein", "IVC"],
        "sedation": "General Anesthesia or Deep Sedation with Anesthesia Standby",
        "accessSiteDefault": "Right Internal Jugular Vein (IJV) under ultrasound guidance",
        "sheathDefault": "10F 40cm TIPS Introducer Sheath (Cook Rosch-Uchida or Haskal set)",
        "cathetersAndWires": "16G Colapinto or Rosch-Uchida needle, 0.038\" stiff wire, 5F multipurpose catheter, 8mm/10mm x 40mm PTA balloon, 10mm x 70-80mm (2cm bare) Viatorr Controlled Expansion TIPS Endoprosthesis",
        "embolicOrImplants": "Gore Viatorr TIPS Endoprosthesis with Controlled Expansion (10mm x 80mm)",
        "proceduralNarrativeTemplate": "Right IJV accessed under US guidance; 10F 40cm sheath advanced into IVC and right hepatic vein. Baseline FHVP, IVC, and right atrium pressures recorded. Right hepatic venogram obtained. Rosch-Uchida needle curved anterior-medially; transhepatic parenchymal puncture directed towards right portal vein bifurcation under fluoroscopic/roadmapping guidance. Portal vein branch entered; dark venous blood aspirated. Portogram confirmed intrahepatic portal vein position. 0.035\" stiff Glidewire advanced to splenic/SMV vein. Portal pressure measured. Parenchymal tract dilated with 8mm x 40mm balloon. 10mm x 80mm Viatorr stent-graft deployed spanning from right portal vein to right hepatic vein-IVC junction. Post-dilation with 8mm/9mm balloon. Post-TIPS portography demonstrated brisk flow through shunt into IVC. Final portosystemic gradient decreased to <12 mmHg (target achieved). Right IJV sheath removed; manual compression hemostasis.",
        "postOpCare": {
            "immobilizationHours": 4,
            "immobilizationInstructions": "Strict supine bedrest x 4 hours. Keep head slightly elevated (30 degrees).",
            "hematomaChecks": "Monitor neck puncture site and vitals q15m x 1h, q30m x 2h, then q1h.",
            "requiredImaging": "Duplex Doppler Ultrasound of TIPS shunt at 24 hours to record baseline shunt velocities (normal 90-190 cm/s) and main PV velocity.",
            "hydrationProtocol": "IV Normal Saline 75-100 mL/hr, carefully monitoring fluid balance to prevent pulmonary edema.",
            "medications": ["Syp Lactulose 30mL PO TDS (titrated to 2-3 soft stools/day)", "Tab Rifaximin 550mg PO BD", "IV Ceftriaxone 1g BD x 48h"],
            "redFlags": ["Acute hepatic encephalopathy / altered sensorium", "Abdominal pain or drop in Hb (intra-abdominal bleeding)", "Dyspnea / acute right heart failure"]
        },
        "consentId": "consent-tips",
        "calculatorId": "meld3_score"
    },
    {
        "id": "cat03-dips-ivus",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Direct Intrahepatic Portocaval Shunt (DIPS) under Intravascular Ultrasound (IVUS)",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Transjugular Intrahepatic Portosystemic Shunt (TIPS)",
            "packageCode": "1849-IN060A",
            "icd10": "I82.0",
            "tariffInr": 75000
        },
        "modality": "XA",
        "targetAnatomy": ["Retrohepatic IVC", "Caudate Lobe", "Portal Vein Main Trunk / Bifurcation"],
        "sedation": "General Anesthesia",
        "accessSiteDefault": "Right IJV under ultrasound guidance",
        "sheathDefault": "10F 40cm TIPS Sheath",
        "cathetersAndWires": "Volcano / Philips IVUS catheter, 16G Colapinto needle, 0.035\" stiff Glidewire, 8mm/10mm angioplasty balloon",
        "embolicOrImplants": "10mm x 70-80mm Viatorr Stent-Graft",
        "proceduralNarrativeTemplate": "Indicated for Budd-Chiari syndrome with total hepatic vein occlusion. Right IJV accessed; 10F sheath placed in retrohepatic IVC. IVUS catheter advanced to identify portal vein bifurcation through caudate lobe. Under real-time IVUS guidance, 16G Colapinto needle punctured anteriorly from IVC through caudate parenchyma directly into main portal vein. Portal vein entered, wire secured into SMV. Portosystemic gradient recorded. Tract dilated with 8mm balloon. 10mm Viatorr stent-graft deployed directly from portal vein into retrohepatic IVC. Portosystemic gradient reduced to <10 mmHg. Excellent shunt patency confirmed.",
        "postOpCare": {
            "immobilizationHours": 6,
            "immobilizationInstructions": "Strict supine bedrest x 6 hours.",
            "hematomaChecks": "Neck inspection, vitals and neuro checks q15m x 1h, q30m x 2h, then q1h.",
            "requiredImaging": "Duplex Doppler Ultrasound at 24 hours to assess DIPS shunt patency and flow velocity.",
            "hydrationProtocol": "IV Normal Saline 75 mL/hr.",
            "medications": ["Syp Lactulose 30mL TDS", "Tab Rifaximin 550mg BD", "IV Ceftriaxone 1g BD"],
            "redFlags": ["Encephalopathy", "Sudden abdominal distension", "Hypotension"]
        },
        "consentId": "consent-tips",
        "calculatorId": "rotterdam_bcs"
    },
    {
        "id": "cat03-bcs-hv-angioplasty",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Budd-Chiari Syndrome: Hepatic Vein Web Balloon Angioplasty",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Venoplasty",
            "packageCode": "1849-VS012A",
            "icd10": "I82.0",
            "tariffInr": 20000
        },
        "modality": "XA",
        "targetAnatomy": ["Right / Middle / Left Hepatic Vein Ostium", "Retrohepatic IVC"],
        "sedation": "Conscious Sedation with Local Anesthesia",
        "accessSiteDefault": "Right Internal Jugular Vein or Right Common Femoral Vein",
        "sheathDefault": "8F 45cm Vascular Sheath",
        "cathetersAndWires": "5F MPA / Cobra catheter, 0.035\" stiff Glidewire, 10mm-14mm x 40mm High-Pressure PTA Balloon (Conquest/Atlas)",
        "embolicOrImplants": "N/A",
        "proceduralNarrativeTemplate": "Right IJV access established; 8F sheath advanced into IVC. Hepatic venogram demonstrated focal membranous web occlusion at the ostium of right hepatic vein with prominent spider-web collateral network. A 0.035\" stiff angled Glidewire and 5F MPA catheter manipulated across web into distal parenchymal hepatic vein. Pressure gradient across web measured (>15 mmHg). Serial balloon dilatations performed using 10mm and 12mm x 40mm high-pressure balloon inflated to rated burst pressure until waist completely abolished. Completion venogram demonstrated rapid forward clearance of contrast into IVC without collateral filling. Pressure gradient eliminated (<3 mmHg). Sheath removed; hemostasis achieved.",
        "postOpCare": {
            "immobilizationHours": 4,
            "immobilizationInstructions": "Bedrest for 4 hours.",
            "hematomaChecks": "Neck/groin puncture site inspection q15m x 1h, q30m x 2h.",
            "requiredImaging": "Hepatic Vein Doppler Ultrasound at 24 hours to confirm patency and triphasic/monophasic flow.",
            "hydrationProtocol": "IV Normal Saline 75 mL/hr x 6h.",
            "medications": ["Therapeutic Anticoagulation: Low Molecular Weight Heparin (Enoxaparin 1mg/kg SC BD)", "Tab Paracetamol 650mg SOS"],
            "redFlags": ["Sudden acute RUQ pain", "Neck hematoma", "Rapid recurrence of ascites"]
        },
        "consentId": "consent-bcs-angioplasty",
        "calculatorId": "rotterdam_bcs"
    },
    {
        "id": "cat03-bcs-hv-stenting",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Budd-Chiari Syndrome: Hepatic Vein Dedicated Venous Stenting",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Venous Stenting",
            "packageCode": "1849-VS014A",
            "icd10": "I82.0",
            "tariffInr": 35000
        },
        "modality": "XA",
        "targetAnatomy": ["Right / Middle Hepatic Vein", "IVC"],
        "sedation": "Conscious Sedation",
        "accessSiteDefault": "Right IJV or Transhepatic Parenchymal Access",
        "sheathDefault": "9F-10F 45cm Vascular Sheath",
        "cathetersAndWires": "0.035\" Amplatz Super Stiff wire, 12mm-14mm x 60mm dedicated self-expanding venous stent (Venovo / Abre / Wallstent)",
        "embolicOrImplants": "14mm x 60mm Self-Expanding Nitinol Venous Stent",
        "proceduralNarrativeTemplate": "Indicated for recurrent or elastic stenosis of hepatic vein in Budd-Chiari syndrome failing POBA. Right IJV access. Hepatic vein cannulated, crossing focal stricture onto Amplatz Super Stiff wire. Pre-dilation with 10mm balloon showed significant recoil (>50%). 14mm x 60mm self-expanding Nitinol venous stent deployed across ostial lesion extending slightly (3-5mm) into IVC lumen. Post-dilated with 12mm balloon. Completion venogram showed brisk inline venous drainage from liver directly into right atrium. Rest gradient normalized to 2 mmHg. Anticoagulation initiated.",
        "postOpCare": {
            "immobilizationHours": 4,
            "immobilizationInstructions": "Supine bedrest x 4 hours.",
            "hematomaChecks": "Vitals and neck puncture site checks q30m x 2h, then q1h.",
            "requiredImaging": "Hepatic Vein Doppler Ultrasound at 24 hours to confirm stent patency and flow velocities.",
            "hydrationProtocol": "IV Normal Saline 75 mL/hr.",
            "medications": ["LMWH Enoxaparin 1mg/kg BD bridging to oral anticoagulation (Warfarin / DOAC)", "Tab Pantoprazole 40mg OD"],
            "redFlags": ["RUQ swelling / pain", "Hematoma", "Dyspnea"]
        },
        "consentId": "consent-bcs-angioplasty",
        "calculatorId": "rotterdam_bcs"
    },
    {
        "id": "cat03-bcs-ivc-cavoplasty",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Budd-Chiari Syndrome: IVC Balloon Cavoplasty",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Venoplasty",
            "packageCode": "1849-VS012A",
            "icd10": "I82.0",
            "tariffInr": 22000
        },
        "modality": "XA",
        "targetAnatomy": ["Inferior Vena Cava (Suprahepatic / Retrohepatic)", "Right Atrium"],
        "sedation": "Conscious Sedation",
        "accessSiteDefault": "Right Common Femoral Vein (CFV) under ultrasound guidance",
        "sheathDefault": "10F - 12F 45cm Vascular Sheath",
        "cathetersAndWires": "0.035\" stiff wire, 18mm - 24mm x 40mm Large Diameter PTA Balloon (Atlas Gold / XXL)",
        "embolicOrImplants": "N/A",
        "proceduralNarrativeTemplate": "Right CFV accessed; 10F sheath placed. Inferior vena cavography revealed critical membranous / segmental stenosis of retrohepatic IVC with extensive retroperitoneal collaterals. Pull-through pressure gradient between distal IVC and right atrium was 24 mmHg. 0.035\" Amplatz Super Stiff wire crossed into right atrium. Sequential balloon cavoplasty performed using 18mm and 20mm large diameter balloons. Balloon waist fully effaced. Repeat cavogram showed rapid contrast clearance into RA with disappearance of azygos-hemiazygos collateral flow. Pull-through gradient decreased to <3 mmHg. Femoral venous sheath removed; figure-of-eight suture and manual compression hemostasis.",
        "postOpCare": {
            "immobilizationHours": 6,
            "immobilizationInstructions": "Strict supine flat bedrest x 6 hours; right leg straight.",
            "hematomaChecks": "Monitor right groin for hematoma or active oozing; distal pulse and venous checks q15m x 1h, q30m x 2h, then q1h.",
            "requiredImaging": "IVC Doppler Ultrasound at 24 hours.",
            "hydrationProtocol": "IV Normal Saline 100 mL/hr x 6h.",
            "medications": ["LMWH Enoxaparin 1mg/kg SC BD", "Tab Paracetamol 650mg SOS"],
            "redFlags": ["Groin hematoma / pseudoaneurysm", "Severe back/abdominal pain", "Acute bilateral lower extremity edema"]
        },
        "consentId": "consent-bcs-angioplasty",
        "calculatorId": "rotterdam_bcs"
    },
    {
        "id": "cat03-bcs-ivc-stenting",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Budd-Chiari Syndrome: Inferior Vena Cava (IVC) Dedicated Stenting",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Venous Stenting",
            "packageCode": "1849-VS014A",
            "icd10": "I82.0",
            "tariffInr": 45000
        },
        "modality": "XA",
        "targetAnatomy": ["Retrohepatic / Suprahepatic IVC", "Cavoatrial Junction"],
        "sedation": "Conscious Sedation / General Anesthesia",
        "accessSiteDefault": "Right CFV and Right IJV (through-and-through wire access if needed)",
        "sheathDefault": "12F - 14F Long Vascular Sheath",
        "cathetersAndWires": "0.035\" Lunderquist Extra Stiff wire, 20mm-24mm x 60-80mm Large Caliber Dedicated Stent (Cook Z-Stent / Sinus-XL / Wallstent)",
        "embolicOrImplants": "22mm x 70mm Self-Expanding IVC Stent",
        "proceduralNarrativeTemplate": "Indicated for long-segment severe retrohepatic IVC occlusion in Budd-Chiari syndrome unresponsive to POBA alone. Bilateral femoral/jugular access. Lesion crossed and pre-dilated. A 22mm x 70mm large caliber self-expanding IVC stent deployed across the retrohepatic obstruction ensuring upper edge sits precisely at cavoatrial junction without atrial protrusion. Post-dilation performed with 20mm balloon. Cavography confirmed widely patent IVC channel with immediate hemodynamic relief. Gradient dropped from 22 mmHg to 2 mmHg. Venous closure achieved.",
        "postOpCare": {
            "immobilizationHours": 6,
            "immobilizationInstructions": "Strict bedrest x 6 hours.",
            "hematomaChecks": "Groin check q15m x 1h, q30m x 2h, then q1h.",
            "requiredImaging": "Doppler USG of IVC and liver at 24 hours.",
            "hydrationProtocol": "IV Normal Saline 75 mL/hr.",
            "medications": ["Therapeutic LMWH bridging to long-term Warfarin/DOAC (target INR 2.0-3.0)"],
            "redFlags": ["Groin bleeding", "Cardiac arrhythmia", "Hypotension"]
        },
        "consentId": "consent-bcs-angioplasty",
        "calculatorId": "rotterdam_bcs"
    },
    {
        "id": "cat03-brto-varices",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Balloon-Occluded Retrograde Transvenous Obliteration (BRTO) of Gastric Varices",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Percutaneous Transvenous Embolization / Obliteration of Varices",
            "packageCode": "1849-IN061A",
            "icd10": "I85.0",
            "tariffInr": 35000
        },
        "modality": "XA",
        "targetAnatomy": ["Gastrorenal Shunt", "Fundic Gastric Varices", "Left Renal Vein"],
        "sedation": "Local Anesthesia with IV Conscious Sedation",
        "accessSiteDefault": "Right Common Femoral Vein (CFV) or Right IJV",
        "sheathDefault": "8F - 9F 45cm Ansel Vascular Sheath",
        "cathetersAndWires": "5F Cobra / Simmons catheter, 8.5F-10mm/12mm Occlusion Balloon Catheter (Edwards / Cook), 2.7F microcatheter, 0.014\" wire",
        "embolicOrImplants": "Sclerosant: 3% Sodium Tetradecyl Sulfate (STS) foam or Ethanolamine Oleate (EOI) mixed with Lipiodol (1:1 ratio)",
        "proceduralNarrativeTemplate": "Right CFV accessed; 8F sheath placed. Selective left renal venogram identified large gastrorenal shunt draining prominent IGV-1/GOV-2 gastric varices. An 8.5F occlusion balloon catheter navigated into outflow of gastrorenal shunt. Balloon inflated with dilute contrast until complete occlusion of gastrorenal shunt confirmed on retrograde venography. Retrograde varicography under balloon occlusion mapped gastric variceal complex and excluded non-target collaterals (pericardiophrenic/azygos). A 2.7F microcatheter advanced coaxially into nidus of varices. Total 18 mL of 3% STS foam sclerosant mixed with Lipiodol (1:1 ratio) slowly injected under continuous fluoroscopy until variceal complex completely filled without systemic escape. Occlusion balloon maintained inflated for 45 minutes to prevent sclerosant wash-out. Sclerosant aspirated; balloon deflated. Completion venography confirmed complete thrombosis and absence of gastric variceal flow. Sheath removed; manual compression hemostasis.",
        "postOpCare": {
            "immobilizationHours": 6,
            "immobilizationInstructions": "Strict flat supine bedrest x 6 hours; right leg straight.",
            "hematomaChecks": "Monitor groin access site for bleeding or hematoma; distal pulse check q15m x 1h, q30m x 2h, then q1h.",
            "requiredImaging": "Follow-up Contrast CT Abdomen or Upper GI Endoscopy at 4-6 weeks to document total variceal eradication.",
            "hydrationProtocol": "IV Normal Saline 100 mL/hr x 8 hours to promote renal clearance.",
            "medications": ["IV H2-blocker / Pantoprazole 40mg BD", "IV Ceftriaxone 1g BD x 3 days", "Tab Paracetamol 650mg TDS"],
            "redFlags": ["Severe hematemesis / melena", "Hemoglobinuria / tea-colored urine (hemolysis)", "Severe left flank pain (renal vein thrombosis)"]
        },
        "consentId": "consent-brto-parto",
        "calculatorId": "meld3_score"
    },
    {
        "id": "cat03-parto-varices",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Plug-Assisted Retrograde Transvenous Obliteration (PARTO) of Gastric Varices",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Percutaneous Transvenous Embolization / Obliteration of Varices",
            "packageCode": "1849-IN061A",
            "icd10": "I85.0",
            "tariffInr": 38000
        },
        "modality": "XA",
        "targetAnatomy": ["Gastrorenal Shunt", "Gastric Fundic Varices"],
        "sedation": "Conscious Sedation",
        "accessSiteDefault": "Right Common Femoral Vein (CFV)",
        "sheathDefault": "8F 45cm Vascular Sheath",
        "cathetersAndWires": "5F Cobra, 0.035\" stiff wire, 2.7F microcatheter, Amplatzer Vascular Plug II (AVP II, 10-14mm)",
        "embolicOrImplants": "Amplatzer Vascular Plug II (AVP II) and Gelfoam sponge slurry / 3% STS foam",
        "proceduralNarrativeTemplate": "Right CFV access. 8F sheath advanced into gastrorenal shunt. Sizing venography determined narrowest shunt diameter to be 9mm. An Amplatzer Vascular Plug II (12mm, 30-50% oversizing) deployed in the distal narrow segment of gastrorenal shunt. Through a 2.7F microcatheter passed through or alongside plug into gastric varices, gelfoam sponge slurry and 3% STS sclerosant foam were injected until complete stasis achieved within gastric fundic varices. Plug detached. No post-procedure balloon indwelling required. Rapid permanent obliteration confirmed.",
        "postOpCare": {
            "immobilizationHours": 6,
            "immobilizationInstructions": "Strict supine bedrest x 6 hours; access leg straight.",
            "hematomaChecks": "Monitor groin puncture site q15m x 1h, q30m x 2h, then q1h.",
            "requiredImaging": "Abdominal Doppler USG / CT at 4 weeks.",
            "hydrationProtocol": "IV Normal Saline 75-100 mL/hr.",
            "medications": ["IV Pantoprazole 40mg BD", "Tab Paracetamol 650mg SOS"],
            "redFlags": ["Active GI bleeding", "Groin hematoma", "Flank pain"]
        },
        "consentId": "consent-brto-parto",
        "calculatorId": "meld3_score"
    },
    {
        "id": "cat03-carto-varices",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Coil-Assisted Retrograde Transvenous Obliteration (CARTO) of Gastric Varices",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Percutaneous Transvenous Embolization / Obliteration of Varices",
            "packageCode": "1849-IN061A",
            "icd10": "I85.0",
            "tariffInr": 36000
        },
        "modality": "XA",
        "targetAnatomy": ["Gastrorenal Shunt", "Gastric Fundic Varices"],
        "sedation": "Conscious Sedation",
        "accessSiteDefault": "Right CFV",
        "sheathDefault": "7F - 8F Vascular Sheath",
        "cathetersAndWires": "5F Cobra, 2.7F microcatheter, 0.014\" wire, 0.035\" and 0.018\" detachable/pushable fibered microcoils",
        "embolicOrImplants": "Detachable fibered coils (8-14mm) + 3% STS foam sclerosant",
        "proceduralNarrativeTemplate": "Right CFV access; 8F sheath placed. Left renal vein and gastrorenal shunt cannulated. Gastrorenal shunt outflow packed densely with 0.035\" and 0.018\" fibered metallic microcoils (CARTO technique) creating flow restriction matrix. Through microcatheter positioned deep to coil pack, 3% STS foam sclerosant mixed with Lipiodol injected directly into gastric variceal lumen until complete stagnation. Final venography showed complete occlusion of shunt and varices.",
        "postOpCare": {
            "immobilizationHours": 6,
            "immobilizationInstructions": "Strict supine bedrest x 6 hours.",
            "hematomaChecks": "Check puncture site and distal pulses q15m x 1h, q30m x 2h, then q1h.",
            "requiredImaging": "CT Abdomen at 4 weeks to verify variceal sclerosis.",
            "hydrationProtocol": "IV Normal Saline 75 mL/hr.",
            "medications": ["IV Pantoprazole 40mg BD", "Tab Paracetamol 650mg SOS"],
            "redFlags": ["Hematemesis", "Melena", "Groin swelling"]
        },
        "consentId": "consent-brto-parto",
        "calculatorId": "meld3_score"
    },
    {
        "id": "cat03-glue-varices",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Cyanoacrylate Glue (n-BCA / Histoacryl) Variceal Embolization",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Percutaneous Transvenous Embolization / Obliteration of Varices",
            "packageCode": "1849-IN061A",
            "icd10": "I85.0",
            "tariffInr": 34000
        },
        "modality": "XA",
        "targetAnatomy": ["Gastroesophageal Varices", "Portosystemic Collateral Nidus"],
        "sedation": "Conscious Sedation",
        "accessSiteDefault": "Transjugular (via TIPS/IJV) or Transhepatic Access",
        "sheathDefault": "6F - 7F Vascular Sheath",
        "cathetersAndWires": "5F Simmons / Cobra catheter, 2.7F microcatheter, 0.014\" microwire, 5% Dextrose flush",
        "embolicOrImplants": "n-Butyl Cyanoacrylate (n-BCA) glue mixed with Lipiodol (1:1 to 1:2 ratio)",
        "proceduralNarrativeTemplate": "Indicated for active bleeding or secondary prophylaxis of large gastroesophageal varices. Portal venous access achieved via transjugular/TIPS route. Selective catheterization of coronary vein / left gastric vein using 5F Cobra and 2.7F microcatheter. Varicography mapped inflow and draining channels. Microcatheter advanced into variceal nidus. Microcatheter thoroughly flushed with 5% Dextrose (D5W) to remove all ionic flush. Under high-resolution subtraction fluoroscopy, 3.0 mL of n-BCA cyanoacrylate glue mixed with Lipiodol (1:1.5 ratio) injected rapidly into varices until complete solid cast formed. Microcatheter immediately withdrawn in single swift motion to prevent glue adherence to catheter tip. Repeat portogram demonstrated total occlusion of bleeding varices with patent main portal flow.",
        "postOpCare": {
            "immobilizationHours": 4,
            "immobilizationInstructions": "Bedrest for 4 hours.",
            "hematomaChecks": "Puncture site and vitals surveillance q15m x 1h, q30m x 2h, then q1h.",
            "requiredImaging": "Chest X-ray to confirm absence of non-target pulmonary glue embolization; Endoscopy at 4 weeks.",
            "hydrationProtocol": "IV Normal Saline 75 mL/hr.",
            "medications": ["IV Pantoprazole 40mg BD", "IV Ceftriaxone 1g BD"],
            "redFlags": ["Pleuritic chest pain / dyspnea (pulmonary glue embolus)", "Upper GI bleed", "Fever"]
        },
        "consentId": "consent-bcs-embolization",
        "calculatorId": "meld3_score"
    },
    {
        "id": "cat03-coils-plus-glue-collaterals",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Combined Coils Plus Cyanoacrylate Glue Embolization of Portosystemic Collaterals",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Percutaneous Transvenous Embolization / Obliteration of Varices",
            "packageCode": "1849-IN061A",
            "icd10": "I85.0",
            "tariffInr": 40000
        },
        "modality": "XA",
        "targetAnatomy": ["Left Gastric Vein", "Posterior Gastric Veins", "Splenorenal Collaterals"],
        "sedation": "Conscious Sedation",
        "accessSiteDefault": "Transjugular (TIPS access) or Transhepatic Puncture",
        "sheathDefault": "7F Vascular Sheath",
        "cathetersAndWires": "5F Cobra, 2.7F microcatheter, 0.014\" wire, microcoils (4mm-8mm), D5W flush",
        "embolicOrImplants": "Detachable / Pushable Microcoils (0.018\") + n-BCA glue / Lipiodol (1:2 ratio)",
        "proceduralNarrativeTemplate": "Indicated for high-flow portosystemic collaterals causing variceal hemorrhage or shunt encephalopathy. Portal venous system accessed. Left gastric / posterior gastric collateral cannulated. Because of high-velocity flow, distal coil scaffold placed using three 0.018\" fibered microcoils to reduce flow velocity and anchor the embolic agent. Through the microcatheter flushed with non-ionic D5W, 2.5 mL of n-BCA cyanoacrylate glue + Lipiodol (1:2 ratio) was delivered behind the coil scaffold. The glue polymerized rapidly within the coil mesh, achieving instantaneous, solid, durable closure without distal systemic glue migration. Completion run confirmed total collateral obliteration.",
        "postOpCare": {
            "immobilizationHours": 4,
            "immobilizationInstructions": "Bedrest for 4 hours.",
            "hematomaChecks": "Access site surveillance q15m x 1h, q30m x 2h, then q1h.",
            "requiredImaging": "Chest X-ray to document coil/glue stability and rule out pulmonary migration.",
            "hydrationProtocol": "IV Normal Saline 75 mL/hr.",
            "medications": ["IV Pantoprazole 40mg BD", "Tab Paracetamol 650mg SOS"],
            "redFlags": ["Chest pain", "Hemoptysis", "Melena"]
        },
        "consentId": "consent-bcs-embolization",
        "calculatorId": "meld3_score"
    },
    {
        "id": "cat03-bcs-veno-venous-collateral-coiling-glue",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Budd-Chiari Syndrome: Intrahepatic Veno-Venous Collateral Embolization using Microcoils and Glue",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Percutaneous Transvenous Embolization / Obliteration of Varices",
            "packageCode": "1849-IN061A",
            "icd10": "I82.0",
            "tariffInr": 38000
        },
        "modality": "XA",
        "targetAnatomy": ["Intrahepatic Veno-Venous Collateral Veins", "Accessory Hepatic Veins", "IVC"],
        "sedation": "Local Anesthesia with IV Conscious Sedation",
        "accessSiteDefault": "Right IJV or Transhepatic Parenchymal Approach under US",
        "sheathDefault": "6F - 7F Vascular Sheath",
        "cathetersAndWires": "5F MPA / Cobra catheter, 2.0F / 2.7F microcatheter, 0.014\" microguidewire",
        "embolicOrImplants": "Detachable 0.014\"/0.018\" Microcoils + Cyanoacrylate Glue (n-BCA) with Lipiodol (1:2 ratio)",
        "proceduralNarrativeTemplate": "In Budd-Chiari syndrome with persistent steal or shunt insufficiency due to prominent tortuous intrahepatic veno-venous collaterals, transhepatic/transjugular access was established. Diagnostic venography delineated extensive large-caliber intrahepatic veno-venous bypass channels diverting flow away from revascularized hepatic veins. A 2.0F microcatheter was navigated superselectively into the dominant communicating venous channel. Detachable microcoils were deployed to create an embolic nest, followed by slow injection of n-BCA glue and Lipiodol mixture (1:2 ratio) after D5W flush. Complete occlusive thrombosis of the collateral circuit was achieved with redirection of hepatopetal and hepatic venous outflow through the primary stented hepatic vein. Rest run showed excellent parenchymal perfusion without residual collateral runoff.",
        "postOpCare": {
            "immobilizationHours": 4,
            "immobilizationInstructions": "Strict supine bedrest x 4 hours.",
            "hematomaChecks": "Monitor neck / transhepatic puncture site q15m x 1h, q30m x 2h, then q1h.",
            "requiredImaging": "Hepatic Doppler USG at 24 hours to assess hepatic vein velocity and flow pattern.",
            "hydrationProtocol": "IV Normal Saline 75 mL/hr x 6 hours.",
            "medications": ["Therapeutic LMWH (Enoxaparin 1mg/kg BD)", "Tab Paracetamol 650mg SOS"],
            "redFlags": ["Sudden severe RUQ pain", "Hypotension", "Increasing ascites"]
        },
        "consentId": "consent-bcs-embolization",
        "calculatorId": "rotterdam_bcs"
    },
    {
        "id": "cat03-pve-ipsilateral",
        "categoryNumber": 3,
        "categoryName": "Hepatobiliary & Portal Interventions",
        "title": "Portal Vein Embolization (PVE) - Ipsilateral Approach",
        "maayRghsCompatibility": {
            "schemeName": "BOTH",
            "packageName": "Portal Vein Embolization (PVE)",
            "packageCode": "1849-IN062A",
            "icd10": "K76.8",
            "tariffInr": 35000
        },
        "modality": "XA",
        "targetAnatomy": ["Right Portal Vein Branches (Segments 5, 6, 7, 8)", "Main Portal Vein"],
        "sedation": "Conscious Sedation with Local Anesthesia",
        "accessSiteDefault": "Right intercostal transhepatic ultrasound-guided puncture",
        "sheathDefault": "6F 11cm Vascular Sheath",
        "cathetersAndWires": "21G Chiba, 0.018\" wire, 0.035\" Glidewire, 5F Cobra, 2.7F microcatheter",
        "embolicOrImplants": "PVA particles (300-500um), n-BCA glue + Lipiodol (1:5 ratio), or Amplatzer Plugs / Coils",
        "proceduralNarrativeTemplate": "Indicated to induce future liver remnant (FLR) hypertrophy prior to extended right hepatectomy. Right portal branch accessed under US with 21G Chiba needle; 6F sheath placed. Portography mapped right and left portal systems and confirmed adequate FLR branch anatomy (Segments 2, 3, 4). 5F Cobra and 2.7F microcatheter advanced selectively into Segment 5/8 and 6/7 branches. Embolization performed using PVA particles (300-500um) followed by n-BCA glue-Lipiodol mixture (1:5 ratio) and vascular plugs/coils. Care taken to strictly spare Segment 4 and left portal branches. Completion portogram demonstrated total occlusion of right portal branches with brisk diverted flow into left portal vein. Puncture tract plugged with gelfoam slurry.",
        "postOpCare": {
            "immobilizationHours": 4,
            "immobilizationInstructions": "Right lateral decubitus x 2 hours, then supine bedrest x 2 hours.",
            "hematomaChecks": "Vitals and abdominal checks q15m x 1h, q30m x 2h, then q1h.",
            "requiredImaging": "Volumetric CT Abdomen at 3-4 weeks to calculate Future Liver Remnant (FLR) hypertrophy rate.",
            "hydrationProtocol": "IV Normal Saline 100 mL/hr.",
            "medications": ["IV Ceftriaxone 1g BD", "Tab Paracetamol 650mg TDS PRN"],
            "redFlags": ["Peritonitis", "High fever", "Drop in Hb"]
        },
        "consentId": "consent-pve",
        "calculatorId": "cigarroa_macd"
    }
]

print(f"Loaded {len(CATEGORY_03_PROCEDURES)} sample procedures for Cat 03.")
