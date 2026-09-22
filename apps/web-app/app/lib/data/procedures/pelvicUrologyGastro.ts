import { ProcedureBlueprint } from '../../types/clinical';

/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 *
 * Master Catalog for Category 11 (Central Venous & Dialysis), 12 (Lymphatic), 13 (Vascular Anomalies), 18 (Gynecology & Pelvic), 19 (Urological Interventions)
 */

export const PELVIC_UROLOGY_GASTRO_PROCEDURES: ProcedureBlueprint[] = [
  {
    "id": "c11-ultrasound-guided-internal-jugular-vein",
    "name": "Ultrasound-Guided Internal Jugular Vein (IJV) Non-Tunneled Central Venous Line Placement",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV143A",
    "rghsCode": "693 / 22 / 53",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Ultrasound-Guided Internal Jugular Vein (IJV) Non-Tunneled Central Venous Line Placement refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Ultrasound-Guided Internal Jugular Vein (IJV) Non-Tunneled Central Venous Line Placement.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-ultrasound-guided-subclavian-vein-non",
    "name": "Ultrasound-Guided Subclavian Vein Non-Tunneled Central Venous Line Placement",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV379A",
    "rghsCode": "693 / 22 / 39",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Ultrasound-Guided Subclavian Vein Non-Tunneled Central Venous Line Placement refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Ultrasound-Guided Subclavian Vein Non-Tunneled Central Venous Line Placement.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-ultrasound-guided-femoral-vein-non",
    "name": "Ultrasound-Guided Femoral Vein Non-Tunneled Central Line Placement",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV975A",
    "rghsCode": "693 / 22 / 35",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Ultrasound-Guided Femoral Vein Non-Tunneled Central Line Placement refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Ultrasound-Guided Femoral Vein Non-Tunneled Central Line Placement.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-peripherally-inserted-central-catheter-insertion",
    "name": "Peripherally Inserted Central Catheter (PICC) Insertion (Ultrasound & Fluoroscopy Guided)",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV819A",
    "rghsCode": "693 / 22 / 29",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Peripherally Inserted Central Catheter (PICC) Insertion (Ultrasound & Fluoroscopy Guided) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Peripherally Inserted Central Catheter (PICC) Insertion (Ultrasound & Fluoroscopy Guided).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-dual-lumen-femoral-catheter-placement",
    "name": "Dual Lumen Femoral Catheter (DLFC) Placement for Acute Hemodialysis",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV157A",
    "rghsCode": "693 / 22 / 17",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Dual Lumen Femoral Catheter (DLFC) Placement for Acute Hemodialysis refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Dual Lumen Femoral Catheter (DLFC) Placement for Acute Hemodialysis.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-double-lumen-jugular-catheter-placement",
    "name": "Double Lumen Jugular Catheter (DLJC) Placement for Acute Hemodialysis",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV223A",
    "rghsCode": "693 / 22 / 33",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Double Lumen Jugular Catheter (DLJC) Placement for Acute Hemodialysis refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Double Lumen Jugular Catheter (DLJC) Placement for Acute Hemodialysis.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-tunneled-cuffed-hemodialysis-catheter-insertion",
    "name": "Tunneled Cuffed Hemodialysis Catheter (Permacath) Insertion (Right Internal Jugular)",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV330A",
    "rghsCode": "693 / 22 / 40",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Tunneled Cuffed Hemodialysis Catheter (Permacath) Insertion (Right Internal Jugular) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Tunneled Cuffed Hemodialysis Catheter (Permacath) Insertion (Right Internal Jugular).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-tunneled-cuffed-hemodialysis-catheter-insertion-proc8",
    "name": "Tunneled Cuffed Hemodialysis Catheter Insertion (Left IJV / External Jugular / Femoral)",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV931A",
    "rghsCode": "693 / 22 / 41",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Tunneled Cuffed Hemodialysis Catheter Insertion (Left IJV / External Jugular / Femoral) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Tunneled Cuffed Hemodialysis Catheter Insertion (Left IJV / External Jugular / Femoral).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-translumbar-inferior-vena-cava-tunneled",
    "name": "Translumbar Inferior Vena Cava Tunneled Hemodialysis Catheter Placement",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV895A",
    "rghsCode": "693 / 22 / 55",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Translumbar Inferior Vena Cava Tunneled Hemodialysis Catheter Placement refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Translumbar Inferior Vena Cava Tunneled Hemodialysis Catheter Placement.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-transhepatic-tunneled-hemodialysis-catheter-placement",
    "name": "Transhepatic Tunneled Hemodialysis Catheter Placement",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV772A",
    "rghsCode": "693 / 22 / 32",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Transhepatic Tunneled Hemodialysis Catheter Placement refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transhepatic Tunneled Hemodialysis Catheter Placement.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-tunneled-hemodialysis-catheter-removal",
    "name": "Tunneled Hemodialysis Catheter Removal",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV198A",
    "rghsCode": "693 / 22 / 58",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Tunneled Hemodialysis Catheter Removal refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Tunneled Hemodialysis Catheter Removal.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-over-the-wire-tunneled-hemodialysis",
    "name": "Over-the-Wire Tunneled Hemodialysis Catheter Exchange with Fibrin Sheath Disruption",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV721A",
    "rghsCode": "693 / 22 / 31",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Over-the-Wire Tunneled Hemodialysis Catheter Exchange with Fibrin Sheath Disruption refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Over-the-Wire Tunneled Hemodialysis Catheter Exchange with Fibrin Sheath Disruption.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-percutaneous-fibrin-sheath-stripping-balloon",
    "name": "Percutaneous Fibrin Sheath Stripping / Balloon Angioplasty via Femoral Approach",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV981A",
    "rghsCode": "693 / 22 / 41",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Percutaneous Fibrin Sheath Stripping / Balloon Angioplasty via Femoral Approach refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Fibrin Sheath Stripping / Balloon Angioplasty via Femoral Approach.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-totally-implantable-venous-access-port",
    "name": "Totally Implantable Venous Access Port (Chemoport) Placement (Subclavian / Jugular Access)",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV885A",
    "rghsCode": "693 / 22 / 45",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Totally Implantable Venous Access Port (Chemoport) Placement (Subclavian / Jugular Access) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Totally Implantable Venous Access Port (Chemoport) Placement (Subclavian / Jugular Access).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-chemoport-removal-surgical-revision",
    "name": "Chemoport Removal / Surgical Revision",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV255A",
    "rghsCode": "693 / 22 / 15",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Chemoport Removal / Surgical Revision refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Chemoport Removal / Surgical Revision.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-diagnostic-dialysis-fistulogram-shuntography",
    "name": "Diagnostic Dialysis Fistulogram / Shuntography",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV651A",
    "rghsCode": "693 / 22 / 11",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Diagnostic Dialysis Fistulogram / Shuntography refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Diagnostic Dialysis Fistulogram / Shuntography.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-percutaneous-balloon-angioplasty-of-failing",
    "name": "Percutaneous Balloon Angioplasty of Failing Autogenous Arteriovenous Fistula (AVF)",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV834A",
    "rghsCode": "693 / 22 / 44",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Percutaneous Balloon Angioplasty of Failing Autogenous Arteriovenous Fistula (AVF) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Balloon Angioplasty of Failing Autogenous Arteriovenous Fistula (AVF).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-drug-coated-balloon-angioplasty-for",
    "name": "Drug-Coated Balloon (DCB) Angioplasty for Recurrent AVF Stenosis",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV525A",
    "rghsCode": "693 / 22 / 35",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Drug-Coated Balloon (DCB) Angioplasty for Recurrent AVF Stenosis refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Drug-Coated Balloon (DCB) Angioplasty for Recurrent AVF Stenosis.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-percutaneous-thrombectomy-declotting-of-thrombosed",
    "name": "Percutaneous Thrombectomy / Declotting of Thrombosed AVF (Pulse-Spray / Trerotola Device)",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV582A",
    "rghsCode": "693 / 22 / 42",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Percutaneous Thrombectomy / Declotting of Thrombosed AVF (Pulse-Spray / Trerotola Device) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Thrombectomy / Declotting of Thrombosed AVF (Pulse-Spray / Trerotola Device).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-mechanical-aspiration-declotting-of-thrombosed",
    "name": "Mechanical Aspiration Declotting of Thrombosed Arteriovenous Graft (AVG)",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV828A",
    "rghsCode": "693 / 22 / 38",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Mechanical Aspiration Declotting of Thrombosed Arteriovenous Graft (AVG) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Mechanical Aspiration Declotting of Thrombosed Arteriovenous Graft (AVG).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-balloon-angioplasty-of-cephalic-arch",
    "name": "Balloon Angioplasty of Cephalic Arch Stenosis",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV311A",
    "rghsCode": "693 / 22 / 21",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Balloon Angioplasty of Cephalic Arch Stenosis refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Balloon Angioplasty of Cephalic Arch Stenosis.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-central-venous-stenosis-balloon-angioplasty",
    "name": "Central Venous Stenosis (CVS) Balloon Angioplasty in Hemodialysis Patients",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV920A",
    "rghsCode": "693 / 22 / 30",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Central Venous Stenosis (CVS) Balloon Angioplasty in Hemodialysis Patients refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Central Venous Stenosis (CVS) Balloon Angioplasty in Hemodialysis Patients.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-dedicated-stent-stent-graft-placement",
    "name": "Dedicated Stent / Stent-Graft Placement for Central Vein Occlusion",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV150A",
    "rghsCode": "693 / 22 / 10",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Dedicated Stent / Stent-Graft Placement for Central Vein Occlusion refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Dedicated Stent / Stent-Graft Placement for Central Vein Occlusion.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-sharp-radiofrequency-recanalization-of-chronic",
    "name": "Sharp Radiofrequency Recanalization of Chronic Central Venous Occlusions (PowerWire RF)",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV775A",
    "rghsCode": "693 / 22 / 35",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Sharp Radiofrequency Recanalization of Chronic Central Venous Occlusions (PowerWire RF) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Sharp Radiofrequency Recanalization of Chronic Central Venous Occlusions (PowerWire RF).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-covered-stent-graft-placement-for",
    "name": "Covered Stent-Graft (Viabahn) Placement for AVF / AVG Rupture or Pseudoaneurysm",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV601A",
    "rghsCode": "693 / 22 / 11",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Covered Stent-Graft (Viabahn) Placement for AVF / AVG Rupture or Pseudoaneurysm refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Covered Stent-Graft (Viabahn) Placement for AVF / AVG Rupture or Pseudoaneurysm.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-hemodialysis-reliable-outflow-graft-percutaneous",
    "name": "Hemodialysis Reliable Outflow (HeRO) Graft Percutaneous Insertion",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV455A",
    "rghsCode": "693 / 22 / 15",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Hemodialysis Reliable Outflow (HeRO) Graft Percutaneous Insertion refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Hemodialysis Reliable Outflow (HeRO) Graft Percutaneous Insertion.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-percutaneous-endoavf-creation",
    "name": "Percutaneous EndoAVF Creation (Ellipsys Vascular Access System)",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV718A",
    "rghsCode": "693 / 22 / 28",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Percutaneous EndoAVF Creation (Ellipsys Vascular Access System) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous EndoAVF Creation (Ellipsys Vascular Access System).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-percutaneous-endoavf-creation-proc28",
    "name": "Percutaneous EndoAVF Creation (WavelinQ Endovascular System)",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV638A",
    "rghsCode": "693 / 22 / 48",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Percutaneous EndoAVF Creation (WavelinQ Endovascular System) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous EndoAVF Creation (WavelinQ Endovascular System).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c11-side-branch-coil-vascular-plug",
    "name": "Side-Branch Coil / Vascular Plug Embolization for Non-Maturing AVF",
    "category": "Central Venous Access & Hemodialysis Maintenance",
    "code": "2849-CV307A",
    "rghsCode": "693 / 22 / 17",
    "icd10": "N18.6 (End-stage renal disease) / Z99.2 (Dependence on renal dialysis)",
    "indications": [
      "Clinically documented indication for Side-Branch Coil / Vascular Plug Embolization for Non-Maturing AVF refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Access Set",
        "name": "21G Echogenic Micropuncture Access Kit",
        "spec": "4F Coaxial dilator with 0.018 nitinol guidewire",
        "standardStore": "Dialysis IR Suite"
      },
      {
        "category": "Catheter System",
        "name": "Tunneled Cuffed Hemodialysis Catheter (Permcath / Split-Cath)",
        "spec": "14.5F 28-36 cm carbothane dual lumen",
        "standardStore": "Central Dialysis Store"
      },
      {
        "category": "Tunneler & Dilator",
        "name": "Bariatric / Malleable Tunneler & Tearaway Introducer Sheath",
        "spec": "15F - 16F peel-away sheath",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Lock Solution",
        "name": "Heparin Sodium 5000 IU/mL or Taurolidine-Citrate Lock",
        "spec": "Catheter lumen antimicrobial instillation",
        "standardStore": "SMS Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Side-Branch Coil / Vascular Plug Embolization for Non-Maturing AVF.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 22000,
    "vendorContacts": [
      "Medcomp India (+91 98290 66778)",
      "Bard / BD India (+91 98291 99001)"
    ]
  },
  {
    "id": "c12-intranodal-lymphangiography-via-ultrasound-guided",
    "name": "Intranodal Lymphangiography via Ultrasound-Guided Inguinal Lymph Node Cannulation",
    "category": "Lymphatic Interventions",
    "code": "2849-LY608A",
    "rghsCode": "693 / 61 / 18",
    "icd10": "I89.0 (Lymphedema) / I89.8 (Chylothorax / Chyloperitoneum)",
    "indications": [
      "Clinically documented indication for Intranodal Lymphangiography via Ultrasound-Guided Inguinal Lymph Node Cannulation refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Lymphatic Access",
        "name": "25G - 26G Spinal / Lymph Node Needle",
        "spec": "Intranodal puncture needle with extension set",
        "standardStore": "Lymphatic IR Unit"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule for intranodal lymphangiography",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.9F - 2.0F Microcatheter (TruSelect / Echelon)",
        "spec": "150 cm length with 0.014 Transend micro-guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolization Agent",
        "name": "Histoacryl / Glubran 2 Cyanoacrylate Glue & Microcoils",
        "spec": "1:2 to 1:4 Lipiodol mixture for thoracic duct occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Intranodal Lymphangiography via Ultrasound-Guided Inguinal Lymph Node Cannulation.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c12-transabdominal-mesenteric-lymph-node-cannulation",
    "name": "Transabdominal Mesenteric Lymph Node Cannulation and Lymphangiography",
    "category": "Lymphatic Interventions",
    "code": "2849-LY733A",
    "rghsCode": "693 / 61 / 43",
    "icd10": "I89.0 (Lymphedema) / I89.8 (Chylothorax / Chyloperitoneum)",
    "indications": [
      "Clinically documented indication for Transabdominal Mesenteric Lymph Node Cannulation and Lymphangiography refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Lymphatic Access",
        "name": "25G - 26G Spinal / Lymph Node Needle",
        "spec": "Intranodal puncture needle with extension set",
        "standardStore": "Lymphatic IR Unit"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule for intranodal lymphangiography",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.9F - 2.0F Microcatheter (TruSelect / Echelon)",
        "spec": "150 cm length with 0.014 Transend micro-guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolization Agent",
        "name": "Histoacryl / Glubran 2 Cyanoacrylate Glue & Microcoils",
        "spec": "1:2 to 1:4 Lipiodol mixture for thoracic duct occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transabdominal Mesenteric Lymph Node Cannulation and Lymphangiography.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c12-pedal-lymphangiography-with-ethiodized-oil",
    "name": "Pedal Lymphangiography with Ethiodized Oil (Lipiodol)",
    "category": "Lymphatic Interventions",
    "code": "2849-LY931A",
    "rghsCode": "693 / 61 / 41",
    "icd10": "I89.0 (Lymphedema) / I89.8 (Chylothorax / Chyloperitoneum)",
    "indications": [
      "Clinically documented indication for Pedal Lymphangiography with Ethiodized Oil (Lipiodol) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Lymphatic Access",
        "name": "25G - 26G Spinal / Lymph Node Needle",
        "spec": "Intranodal puncture needle with extension set",
        "standardStore": "Lymphatic IR Unit"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule for intranodal lymphangiography",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.9F - 2.0F Microcatheter (TruSelect / Echelon)",
        "spec": "150 cm length with 0.014 Transend micro-guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolization Agent",
        "name": "Histoacryl / Glubran 2 Cyanoacrylate Glue & Microcoils",
        "spec": "1:2 to 1:4 Lipiodol mixture for thoracic duct occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Pedal Lymphangiography with Ethiodized Oil (Lipiodol).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c12-dynamic-contrast-enhanced-mr-lymphangiography",
    "name": "Dynamic Contrast-Enhanced MR Lymphangiography (DCMRL) Guidance Puncture",
    "category": "Lymphatic Interventions",
    "code": "2849-LY695A",
    "rghsCode": "693 / 61 / 55",
    "icd10": "I89.0 (Lymphedema) / I89.8 (Chylothorax / Chyloperitoneum)",
    "indications": [
      "Clinically documented indication for Dynamic Contrast-Enhanced MR Lymphangiography (DCMRL) Guidance Puncture refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Lymphatic Access",
        "name": "25G - 26G Spinal / Lymph Node Needle",
        "spec": "Intranodal puncture needle with extension set",
        "standardStore": "Lymphatic IR Unit"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule for intranodal lymphangiography",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.9F - 2.0F Microcatheter (TruSelect / Echelon)",
        "spec": "150 cm length with 0.014 Transend micro-guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolization Agent",
        "name": "Histoacryl / Glubran 2 Cyanoacrylate Glue & Microcoils",
        "spec": "1:2 to 1:4 Lipiodol mixture for thoracic duct occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Dynamic Contrast-Enhanced MR Lymphangiography (DCMRL) Guidance Puncture.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c12-percutaneous-transabdominal-thoracic-duct-cannulation",
    "name": "Percutaneous Transabdominal Thoracic Duct Cannulation",
    "category": "Lymphatic Interventions",
    "code": "2849-LY370A",
    "rghsCode": "693 / 61 / 30",
    "icd10": "I89.0 (Lymphedema) / I89.8 (Chylothorax / Chyloperitoneum)",
    "indications": [
      "Clinically documented indication for Percutaneous Transabdominal Thoracic Duct Cannulation refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Lymphatic Access",
        "name": "25G - 26G Spinal / Lymph Node Needle",
        "spec": "Intranodal puncture needle with extension set",
        "standardStore": "Lymphatic IR Unit"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule for intranodal lymphangiography",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.9F - 2.0F Microcatheter (TruSelect / Echelon)",
        "spec": "150 cm length with 0.014 Transend micro-guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolization Agent",
        "name": "Histoacryl / Glubran 2 Cyanoacrylate Glue & Microcoils",
        "spec": "1:2 to 1:4 Lipiodol mixture for thoracic duct occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Transabdominal Thoracic Duct Cannulation.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c12-thoracic-duct-embolization-with-coils",
    "name": "Thoracic Duct Embolization (TDE) with Coils and Liquid Embolic (Onyx / Glue)",
    "category": "Lymphatic Interventions",
    "code": "2849-LY678A",
    "rghsCode": "693 / 61 / 38",
    "icd10": "I89.0 (Lymphedema) / I89.8 (Chylothorax / Chyloperitoneum)",
    "indications": [
      "Clinically documented indication for Thoracic Duct Embolization (TDE) with Coils and Liquid Embolic (Onyx / Glue) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Lymphatic Access",
        "name": "25G - 26G Spinal / Lymph Node Needle",
        "spec": "Intranodal puncture needle with extension set",
        "standardStore": "Lymphatic IR Unit"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule for intranodal lymphangiography",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.9F - 2.0F Microcatheter (TruSelect / Echelon)",
        "spec": "150 cm length with 0.014 Transend micro-guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolization Agent",
        "name": "Histoacryl / Glubran 2 Cyanoacrylate Glue & Microcoils",
        "spec": "1:2 to 1:4 Lipiodol mixture for thoracic duct occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Thoracic Duct Embolization (TDE) with Coils and Liquid Embolic (Onyx / Glue).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c12-retrograde-transvenous-thoracic-duct-cannulation",
    "name": "Retrograde Transvenous Thoracic Duct Cannulation and Embolization",
    "category": "Lymphatic Interventions",
    "code": "2849-LY873A",
    "rghsCode": "693 / 61 / 33",
    "icd10": "I89.0 (Lymphedema) / I89.8 (Chylothorax / Chyloperitoneum)",
    "indications": [
      "Clinically documented indication for Retrograde Transvenous Thoracic Duct Cannulation and Embolization refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Lymphatic Access",
        "name": "25G - 26G Spinal / Lymph Node Needle",
        "spec": "Intranodal puncture needle with extension set",
        "standardStore": "Lymphatic IR Unit"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule for intranodal lymphangiography",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.9F - 2.0F Microcatheter (TruSelect / Echelon)",
        "spec": "150 cm length with 0.014 Transend micro-guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolization Agent",
        "name": "Histoacryl / Glubran 2 Cyanoacrylate Glue & Microcoils",
        "spec": "1:2 to 1:4 Lipiodol mixture for thoracic duct occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Retrograde Transvenous Thoracic Duct Cannulation and Embolization.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c12-percutaneous-percardial-intercostal-lymphatic-duct",
    "name": "Percutaneous Percardial / Intercostal Lymphatic Duct Disruption / Maceration",
    "category": "Lymphatic Interventions",
    "code": "2849-LY874A",
    "rghsCode": "693 / 61 / 34",
    "icd10": "I89.0 (Lymphedema) / I89.8 (Chylothorax / Chyloperitoneum)",
    "indications": [
      "Clinically documented indication for Percutaneous Percardial / Intercostal Lymphatic Duct Disruption / Maceration refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Lymphatic Access",
        "name": "25G - 26G Spinal / Lymph Node Needle",
        "spec": "Intranodal puncture needle with extension set",
        "standardStore": "Lymphatic IR Unit"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule for intranodal lymphangiography",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.9F - 2.0F Microcatheter (TruSelect / Echelon)",
        "spec": "150 cm length with 0.014 Transend micro-guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolization Agent",
        "name": "Histoacryl / Glubran 2 Cyanoacrylate Glue & Microcoils",
        "spec": "1:2 to 1:4 Lipiodol mixture for thoracic duct occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Percardial / Intercostal Lymphatic Duct Disruption / Maceration.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c12-percutaneous-embolization-of-chyloperitoneum-cisterna",
    "name": "Percutaneous Embolization of Chyloperitoneum / Cisterna Chyli with Coils and Glue",
    "category": "Lymphatic Interventions",
    "code": "2849-LY160A",
    "rghsCode": "693 / 61 / 20",
    "icd10": "I89.0 (Lymphedema) / I89.8 (Chylothorax / Chyloperitoneum)",
    "indications": [
      "Clinically documented indication for Percutaneous Embolization of Chyloperitoneum / Cisterna Chyli with Coils and Glue refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Lymphatic Access",
        "name": "25G - 26G Spinal / Lymph Node Needle",
        "spec": "Intranodal puncture needle with extension set",
        "standardStore": "Lymphatic IR Unit"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule for intranodal lymphangiography",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.9F - 2.0F Microcatheter (TruSelect / Echelon)",
        "spec": "150 cm length with 0.014 Transend micro-guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolization Agent",
        "name": "Histoacryl / Glubran 2 Cyanoacrylate Glue & Microcoils",
        "spec": "1:2 to 1:4 Lipiodol mixture for thoracic duct occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Embolization of Chyloperitoneum / Cisterna Chyli with Coils and Glue.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c12-transcatheter-lymphatic-embolization-for-chyluria",
    "name": "Transcatheter Lymphatic Embolization for Chyluria",
    "category": "Lymphatic Interventions",
    "code": "2849-LY153A",
    "rghsCode": "693 / 61 / 13",
    "icd10": "I89.0 (Lymphedema) / I89.8 (Chylothorax / Chyloperitoneum)",
    "indications": [
      "Clinically documented indication for Transcatheter Lymphatic Embolization for Chyluria refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Lymphatic Access",
        "name": "25G - 26G Spinal / Lymph Node Needle",
        "spec": "Intranodal puncture needle with extension set",
        "standardStore": "Lymphatic IR Unit"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule for intranodal lymphangiography",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.9F - 2.0F Microcatheter (TruSelect / Echelon)",
        "spec": "150 cm length with 0.014 Transend micro-guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolization Agent",
        "name": "Histoacryl / Glubran 2 Cyanoacrylate Glue & Microcoils",
        "spec": "1:2 to 1:4 Lipiodol mixture for thoracic duct occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Lymphatic Embolization for Chyluria.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c12-percutaneous-embolization-of-mesenteric-lymphatics",
    "name": "Percutaneous Embolization of Mesenteric Lymphatics for Protein-Losing Enteropathy (PLE)",
    "category": "Lymphatic Interventions",
    "code": "2849-LY858A",
    "rghsCode": "693 / 61 / 18",
    "icd10": "I89.0 (Lymphedema) / I89.8 (Chylothorax / Chyloperitoneum)",
    "indications": [
      "Clinically documented indication for Percutaneous Embolization of Mesenteric Lymphatics for Protein-Losing Enteropathy (PLE) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Lymphatic Access",
        "name": "25G - 26G Spinal / Lymph Node Needle",
        "spec": "Intranodal puncture needle with extension set",
        "standardStore": "Lymphatic IR Unit"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule for intranodal lymphangiography",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.9F - 2.0F Microcatheter (TruSelect / Echelon)",
        "spec": "150 cm length with 0.014 Transend micro-guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolization Agent",
        "name": "Histoacryl / Glubran 2 Cyanoacrylate Glue & Microcoils",
        "spec": "1:2 to 1:4 Lipiodol mixture for thoracic duct occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Embolization of Mesenteric Lymphatics for Protein-Losing Enteropathy (PLE).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c12-hepatic-lymphatic-embolization-for-plastic",
    "name": "Hepatic Lymphatic Embolization for Plastic Bronchitis Post-Fontan Surgery",
    "category": "Lymphatic Interventions",
    "code": "2849-LY989A",
    "rghsCode": "693 / 61 / 49",
    "icd10": "I89.0 (Lymphedema) / I89.8 (Chylothorax / Chyloperitoneum)",
    "indications": [
      "Clinically documented indication for Hepatic Lymphatic Embolization for Plastic Bronchitis Post-Fontan Surgery refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Lymphatic Access",
        "name": "25G - 26G Spinal / Lymph Node Needle",
        "spec": "Intranodal puncture needle with extension set",
        "standardStore": "Lymphatic IR Unit"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule for intranodal lymphangiography",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.9F - 2.0F Microcatheter (TruSelect / Echelon)",
        "spec": "150 cm length with 0.014 Transend micro-guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolization Agent",
        "name": "Histoacryl / Glubran 2 Cyanoacrylate Glue & Microcoils",
        "spec": "1:2 to 1:4 Lipiodol mixture for thoracic duct occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Hepatic Lymphatic Embolization for Plastic Bronchitis Post-Fontan Surgery.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c12-pulmonary-lymphatic-vessel-embolization",
    "name": "Pulmonary Lymphatic Vessel Embolization",
    "category": "Lymphatic Interventions",
    "code": "2849-LY845A",
    "rghsCode": "693 / 61 / 55",
    "icd10": "I89.0 (Lymphedema) / I89.8 (Chylothorax / Chyloperitoneum)",
    "indications": [
      "Clinically documented indication for Pulmonary Lymphatic Vessel Embolization refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Lymphatic Access",
        "name": "25G - 26G Spinal / Lymph Node Needle",
        "spec": "Intranodal puncture needle with extension set",
        "standardStore": "Lymphatic IR Unit"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule for intranodal lymphangiography",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.9F - 2.0F Microcatheter (TruSelect / Echelon)",
        "spec": "150 cm length with 0.014 Transend micro-guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolization Agent",
        "name": "Histoacryl / Glubran 2 Cyanoacrylate Glue & Microcoils",
        "spec": "1:2 to 1:4 Lipiodol mixture for thoracic duct occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Pulmonary Lymphatic Vessel Embolization.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c12-percutaneous-retrograde-sclerotherapy-of-post",
    "name": "Percutaneous Retrograde Sclerotherapy of Post-Surgical Lymphoceles",
    "category": "Lymphatic Interventions",
    "code": "2849-LY969A",
    "rghsCode": "693 / 61 / 29",
    "icd10": "I89.0 (Lymphedema) / I89.8 (Chylothorax / Chyloperitoneum)",
    "indications": [
      "Clinically documented indication for Percutaneous Retrograde Sclerotherapy of Post-Surgical Lymphoceles refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Lymphatic Access",
        "name": "25G - 26G Spinal / Lymph Node Needle",
        "spec": "Intranodal puncture needle with extension set",
        "standardStore": "Lymphatic IR Unit"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule for intranodal lymphangiography",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.9F - 2.0F Microcatheter (TruSelect / Echelon)",
        "spec": "150 cm length with 0.014 Transend micro-guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolization Agent",
        "name": "Histoacryl / Glubran 2 Cyanoacrylate Glue & Microcoils",
        "spec": "1:2 to 1:4 Lipiodol mixture for thoracic duct occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Retrograde Sclerotherapy of Post-Surgical Lymphoceles.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c12-percutaneous-balloon-dilatation-stenting-of",
    "name": "Percutaneous Balloon Dilatation / Stenting of the Thoracic Duct",
    "category": "Lymphatic Interventions",
    "code": "2849-LY397A",
    "rghsCode": "693 / 61 / 57",
    "icd10": "I89.0 (Lymphedema) / I89.8 (Chylothorax / Chyloperitoneum)",
    "indications": [
      "Clinically documented indication for Percutaneous Balloon Dilatation / Stenting of the Thoracic Duct refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Lymphatic Access",
        "name": "25G - 26G Spinal / Lymph Node Needle",
        "spec": "Intranodal puncture needle with extension set",
        "standardStore": "Lymphatic IR Unit"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule for intranodal lymphangiography",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.9F - 2.0F Microcatheter (TruSelect / Echelon)",
        "spec": "150 cm length with 0.014 Transend micro-guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolization Agent",
        "name": "Histoacryl / Glubran 2 Cyanoacrylate Glue & Microcoils",
        "spec": "1:2 to 1:4 Lipiodol mixture for thoracic duct occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Balloon Dilatation / Stenting of the Thoracic Duct.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c12-interventional-guidance-for-surgical-lymphovenous",
    "name": "Interventional Guidance for Surgical Lymphovenous Anastomosis (LVA)",
    "category": "Lymphatic Interventions",
    "code": "2849-LY499A",
    "rghsCode": "693 / 61 / 59",
    "icd10": "I89.0 (Lymphedema) / I89.8 (Chylothorax / Chyloperitoneum)",
    "indications": [
      "Clinically documented indication for Interventional Guidance for Surgical Lymphovenous Anastomosis (LVA) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Lymphatic Access",
        "name": "25G - 26G Spinal / Lymph Node Needle",
        "spec": "Intranodal puncture needle with extension set",
        "standardStore": "Lymphatic IR Unit"
      },
      {
        "category": "Contrast Medium",
        "name": "Lipiodol Ultra-Fluid (Guerbet)",
        "spec": "10 mL ampoule for intranodal lymphangiography",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Microcatheter System",
        "name": "1.9F - 2.0F Microcatheter (TruSelect / Echelon)",
        "spec": "150 cm length with 0.014 Transend micro-guidewire",
        "standardStore": "Cath Lab Store"
      },
      {
        "category": "Embolization Agent",
        "name": "Histoacryl / Glubran 2 Cyanoacrylate Glue & Microcoils",
        "spec": "1:2 to 1:4 Lipiodol mixture for thoracic duct occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Interventional Guidance for Surgical Lymphovenous Anastomosis (LVA).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Guerbet India (+91 98290 12345)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c13-direct-percutaneous-puncture-and-phlebography",
    "name": "Direct Percutaneous Puncture and Phlebography of Low-Flow Venous Malformations (VM)",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA341A",
    "rghsCode": "693 / 62 / 51",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Direct Percutaneous Puncture and Phlebography of Low-Flow Venous Malformations (VM) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Direct Percutaneous Puncture and Phlebography of Low-Flow Venous Malformations (VM).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-percutaneous-sclerotherapy-of-head-and",
    "name": "Percutaneous Sclerotherapy of Head and Neck Venous Malformations (Bleomycin)",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA255A",
    "rghsCode": "693 / 62 / 15",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Percutaneous Sclerotherapy of Head and Neck Venous Malformations (Bleomycin) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Sclerotherapy of Head and Neck Venous Malformations (Bleomycin).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-sclerotherapy-of-venous-malformations-with",
    "name": "Sclerotherapy of Venous Malformations with Sodium Tetradecyl Sulfate (STS) Foam",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA999A",
    "rghsCode": "693 / 62 / 59",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Sclerotherapy of Venous Malformations with Sodium Tetradecyl Sulfate (STS) Foam refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Sclerotherapy of Venous Malformations with Sodium Tetradecyl Sulfate (STS) Foam.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-percutaneous-sclerotherapy-of-orbital-periorbital",
    "name": "Percutaneous Sclerotherapy of Orbital / Periorbital Venous Malformations",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA679A",
    "rghsCode": "693 / 62 / 39",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Percutaneous Sclerotherapy of Orbital / Periorbital Venous Malformations refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Sclerotherapy of Orbital / Periorbital Venous Malformations.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-direct-percutaneous-cryoablation-of-painful",
    "name": "Direct Percutaneous Cryoablation of Painful Low-Flow Intramuscular Venous Malformations",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA910A",
    "rghsCode": "693 / 62 / 20",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Direct Percutaneous Cryoablation of Painful Low-Flow Intramuscular Venous Malformations refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Direct Percutaneous Cryoablation of Painful Low-Flow Intramuscular Venous Malformations.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-sclerotherapy-of-high-risk-mucosal",
    "name": "Sclerotherapy of High-Risk Mucosal Venous Malformations under Roadmapping",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA723A",
    "rghsCode": "693 / 62 / 33",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Sclerotherapy of High-Risk Mucosal Venous Malformations under Roadmapping refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Sclerotherapy of High-Risk Mucosal Venous Malformations under Roadmapping.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-direct-percutaneous-sclerotherapy-of-macrocystic",
    "name": "Direct Percutaneous Sclerotherapy of Macrocystic Lymphatic Malformations (Doxycycline)",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA541A",
    "rghsCode": "693 / 62 / 51",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Direct Percutaneous Sclerotherapy of Macrocystic Lymphatic Malformations (Doxycycline) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Direct Percutaneous Sclerotherapy of Macrocystic Lymphatic Malformations (Doxycycline).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-percutaneous-sclerotherapy-of-microcystic-lymphatic",
    "name": "Percutaneous Sclerotherapy of Microcystic Lymphatic Malformations (Bleomycin / OK-432)",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA229A",
    "rghsCode": "693 / 62 / 39",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Percutaneous Sclerotherapy of Microcystic Lymphatic Malformations (Bleomycin / OK-432) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Sclerotherapy of Microcystic Lymphatic Malformations (Bleomycin / OK-432).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-percutaneous-sclerotherapy-of-ranula",
    "name": "Percutaneous Sclerotherapy of Ranula (Ethanol / Bleomycin / OK-432)",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA622A",
    "rghsCode": "693 / 62 / 32",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Percutaneous Sclerotherapy of Ranula (Ethanol / Bleomycin / OK-432) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Sclerotherapy of Ranula (Ethanol / Bleomycin / OK-432).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-transarterial-embolization-of-extracranial-arteriovenous",
    "name": "Transarterial Embolization of Extracranial Arteriovenous Malformations (AVM) with Onyx / Squid",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA763A",
    "rghsCode": "693 / 62 / 23",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Transarterial Embolization of Extracranial Arteriovenous Malformations (AVM) with Onyx / Squid refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Embolization of Extracranial Arteriovenous Malformations (AVM) with Onyx / Squid.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-transarterial-embolization-of-avm-with",
    "name": "Transarterial Embolization of AVM with Precipitating Hydrophobic Injectable Liquid (PHIL)",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA947A",
    "rghsCode": "693 / 62 / 57",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Transarterial Embolization of AVM with Precipitating Hydrophobic Injectable Liquid (PHIL) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Embolization of AVM with Precipitating Hydrophobic Injectable Liquid (PHIL).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-superselective-glue-embolization-of-high",
    "name": "Superselective Glue (n-BCA) Embolization of High-Flow Vascular Malformations",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA278A",
    "rghsCode": "693 / 62 / 38",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Superselective Glue (n-BCA) Embolization of High-Flow Vascular Malformations refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Superselective Glue (n-BCA) Embolization of High-Flow Vascular Malformations.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-direct-transcutaneous-nidus-puncture-and",
    "name": "Direct Transcutaneous Nidus Puncture and Liquid Embolic Occlusion of Peripheral AVMs",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA338A",
    "rghsCode": "693 / 62 / 48",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Direct Transcutaneous Nidus Puncture and Liquid Embolic Occlusion of Peripheral AVMs refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Direct Transcutaneous Nidus Puncture and Liquid Embolic Occlusion of Peripheral AVMs.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-retrograde-transvenous-nidus-occlusion-of",
    "name": "Retrograde Transvenous Nidus Occlusion of High-Flow Arteriovenous Malformations",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA511A",
    "rghsCode": "693 / 62 / 21",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Retrograde Transvenous Nidus Occlusion of High-Flow Arteriovenous Malformations refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Retrograde Transvenous Nidus Occlusion of High-Flow Arteriovenous Malformations.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-transcatheter-embolization-of-extremity-congenital",
    "name": "Transcatheter Embolization of Extremity Congenital Arteriovenous Fistulae (AVF)",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA802A",
    "rghsCode": "693 / 62 / 12",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Transcatheter Embolization of Extremity Congenital Arteriovenous Fistulae (AVF) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Embolization of Extremity Congenital Arteriovenous Fistulae (AVF).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-endovenous-laser-ablation-of-the",
    "name": "Endovenous Laser Ablation (EVLA) of the Embryonic Marginal Vein of Servelle in Klippel-Trenaunay",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA567A",
    "rghsCode": "693 / 62 / 27",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Endovenous Laser Ablation (EVLA) of the Embryonic Marginal Vein of Servelle in Klippel-Trenaunay refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Endovenous Laser Ablation (EVLA) of the Embryonic Marginal Vein of Servelle in Klippel-Trenaunay.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "venous-foam-sclerotherapy-ugfs",
    "name": "Foam Sclerotherapy and Coil Embolization of Persistent Sciatic / Lateral Marginal Veins",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA518A",
    "rghsCode": "693 / 62 / 28",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Foam Sclerotherapy and Coil Embolization of Persistent Sciatic / Lateral Marginal Veins refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Foam Sclerotherapy and Coil Embolization of Persistent Sciatic / Lateral Marginal Veins.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-transcatheter-embolization-of-pulmonary-arteriovenous",
    "name": "Transcatheter Embolization of Pulmonary Arteriovenous Malformations (PAVM) with Microvascular Plugs",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA864A",
    "rghsCode": "693 / 62 / 24",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Transcatheter Embolization of Pulmonary Arteriovenous Malformations (PAVM) with Microvascular Plugs refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Embolization of Pulmonary Arteriovenous Malformations (PAVM) with Microvascular Plugs.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-pavm-superselective-coil-embolization",
    "name": "PAVM Superselective Coil Embolization",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA684A",
    "rghsCode": "693 / 62 / 44",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for PAVM Superselective Coil Embolization refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for PAVM Superselective Coil Embolization.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-sclerotherapy-and-coiling-of-pelvic",
    "name": "Sclerotherapy and Coiling of Pelvic Arteriovenous Malformations",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA504A",
    "rghsCode": "693 / 62 / 14",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Sclerotherapy and Coiling of Pelvic Arteriovenous Malformations refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Sclerotherapy and Coiling of Pelvic Arteriovenous Malformations.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-preoperative-transarterial-embolization-of-juvenile",
    "name": "Preoperative Transarterial Embolization of Juvenile Nasopharyngeal Angiofibroma (JNA)",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA844A",
    "rghsCode": "693 / 62 / 54",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Preoperative Transarterial Embolization of Juvenile Nasopharyngeal Angiofibroma (JNA) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Preoperative Transarterial Embolization of Juvenile Nasopharyngeal Angiofibroma (JNA).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-preoperative-transarterial-embolization-of-carotid",
    "name": "Preoperative Transarterial Embolization of Carotid Body Tumors / Paragangliomas",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA631A",
    "rghsCode": "693 / 62 / 41",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Preoperative Transarterial Embolization of Carotid Body Tumors / Paragangliomas refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Preoperative Transarterial Embolization of Carotid Body Tumors / Paragangliomas.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c13-transarterial-embolization-of-maxillofacial-vascular",
    "name": "Transarterial Embolization of Maxillofacial Vascular Malformations",
    "category": "Vascular Anomalies & Malformations",
    "code": "2849-VA192A",
    "rghsCode": "693 / 62 / 52",
    "icd10": "Q27.3 (Arteriovenous malformation) / D18.0 (Hemangioma and lymphangioma)",
    "indications": [
      "Clinically documented indication for Transarterial Embolization of Maxillofacial Vascular Malformations refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Direct Puncture Access",
        "name": "21G - 22G Echogenic Butterfly / Angiocath Needle Set",
        "spec": "USG / Fluoroscopy direct nidus puncture",
        "standardStore": "Pediatric / Anomalies Store"
      },
      {
        "category": "Sclerosing Agent",
        "name": "Inj Bleomycin / Absolute Alcohol (Ethanol 99.9%) / Polidocanol",
        "spec": "Aetoxisclerol 3% / Bleomycin 15 units",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Embolic System",
        "name": "Onyx 18 / 34 Liquid Embolic or Detachable Coils",
        "spec": "DMSO-compatible microcatheter system",
        "standardStore": "Cath Lab High-Security Store"
      },
      {
        "category": "Tourniquet / Compression",
        "name": "Pneumatic Limb Tourniquet / Gel Cold Packs",
        "spec": "Outflow control during venous malformation sclero",
        "standardStore": "IR Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Embolization of Maxillofacial Vascular Malformations.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Medtronic Vascular (+91 98290 33445)",
      "Merit Medical India (+91 98294 55667)"
    ]
  },
  {
    "id": "c18-uterine-artery-embolization-for-symptomatic",
    "name": "Uterine Artery Embolization (UAE / UFE) for Symptomatic Uterine Leiomyomata (Fibroids)",
    "category": "Gynecological, Obstetric & Pelvic Interventions",
    "code": "2849-GY521A",
    "rghsCode": "693 / 71 / 31",
    "icd10": "D25.9 (Leiomyoma of uterus) / O72.0 (Postpartum hemorrhage) / N94.89 (Pelvic congestion)",
    "indications": [
      "Clinically documented indication for Uterine Artery Embolization (UAE / UFE) for Symptomatic Uterine Leiomyomata (Fibroids) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm right femoral or left radial sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Selective Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2",
        "spec": "65 cm - 100 cm selective visceral catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014 steerable Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Particles",
        "name": "Calibrated Gelatin Microspheres (Embosphere / Bead Block)",
        "spec": "500-700 um & 700-900 um pre-filled syringes",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Pain Management Kit",
        "name": "PCA Pump / Superior Hypogastric Nerve Block Kit",
        "spec": "Post-UAE severe cramping analgesic protocol",
        "standardStore": "Post-Op Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Uterine Artery Embolization (UAE / UFE) for Symptomatic Uterine Leiomyomata (Fibroids).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Merit Medical India (+91 98294 55667)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c18-uterine-artery-embolization-for-diffuse",
    "name": "Uterine Artery Embolization for Diffuse and Focal Adenomyosis",
    "category": "Gynecological, Obstetric & Pelvic Interventions",
    "code": "2849-GY102A",
    "rghsCode": "693 / 71 / 12",
    "icd10": "D25.9 (Leiomyoma of uterus) / O72.0 (Postpartum hemorrhage) / N94.89 (Pelvic congestion)",
    "indications": [
      "Clinically documented indication for Uterine Artery Embolization for Diffuse and Focal Adenomyosis refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm right femoral or left radial sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Selective Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2",
        "spec": "65 cm - 100 cm selective visceral catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014 steerable Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Particles",
        "name": "Calibrated Gelatin Microspheres (Embosphere / Bead Block)",
        "spec": "500-700 um & 700-900 um pre-filled syringes",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Pain Management Kit",
        "name": "PCA Pump / Superior Hypogastric Nerve Block Kit",
        "spec": "Post-UAE severe cramping analgesic protocol",
        "standardStore": "Post-Op Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Uterine Artery Embolization for Diffuse and Focal Adenomyosis.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Merit Medical India (+91 98294 55667)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c18-transcatheter-embolization-for-uterine-arteriovenous",
    "name": "Transcatheter Embolization for Uterine Arteriovenous Malformations (AVM)",
    "category": "Gynecological, Obstetric & Pelvic Interventions",
    "code": "2849-GY553A",
    "rghsCode": "693 / 71 / 13",
    "icd10": "D25.9 (Leiomyoma of uterus) / O72.0 (Postpartum hemorrhage) / N94.89 (Pelvic congestion)",
    "indications": [
      "Clinically documented indication for Transcatheter Embolization for Uterine Arteriovenous Malformations (AVM) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm right femoral or left radial sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Selective Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2",
        "spec": "65 cm - 100 cm selective visceral catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014 steerable Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Particles",
        "name": "Calibrated Gelatin Microspheres (Embosphere / Bead Block)",
        "spec": "500-700 um & 700-900 um pre-filled syringes",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Pain Management Kit",
        "name": "PCA Pump / Superior Hypogastric Nerve Block Kit",
        "spec": "Post-UAE severe cramping analgesic protocol",
        "standardStore": "Post-Op Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Embolization for Uterine Arteriovenous Malformations (AVM).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Merit Medical India (+91 98294 55667)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c18-emergency-uterine-artery-embolization-for",
    "name": "Emergency Uterine Artery Embolization for Severe Postpartum Hemorrhage (PPH)",
    "category": "Gynecological, Obstetric & Pelvic Interventions",
    "code": "2849-GY301A",
    "rghsCode": "693 / 71 / 11",
    "icd10": "D25.9 (Leiomyoma of uterus) / O72.0 (Postpartum hemorrhage) / N94.89 (Pelvic congestion)",
    "indications": [
      "Clinically documented indication for Emergency Uterine Artery Embolization for Severe Postpartum Hemorrhage (PPH) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm right femoral or left radial sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Selective Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2",
        "spec": "65 cm - 100 cm selective visceral catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014 steerable Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Particles",
        "name": "Calibrated Gelatin Microspheres (Embosphere / Bead Block)",
        "spec": "500-700 um & 700-900 um pre-filled syringes",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Pain Management Kit",
        "name": "PCA Pump / Superior Hypogastric Nerve Block Kit",
        "spec": "Post-UAE severe cramping analgesic protocol",
        "standardStore": "Post-Op Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Emergency Uterine Artery Embolization for Severe Postpartum Hemorrhage (PPH).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Merit Medical India (+91 98294 55667)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c18-prophylactic-internal-iliac-artery-balloon",
    "name": "Prophylactic Internal Iliac Artery Balloon Catheter Placement for Morbidly Adherent Placenta",
    "category": "Gynecological, Obstetric & Pelvic Interventions",
    "code": "2849-GY167A",
    "rghsCode": "693 / 71 / 27",
    "icd10": "D25.9 (Leiomyoma of uterus) / O72.0 (Postpartum hemorrhage) / N94.89 (Pelvic congestion)",
    "indications": [
      "Clinically documented indication for Prophylactic Internal Iliac Artery Balloon Catheter Placement for Morbidly Adherent Placenta refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm right femoral or left radial sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Selective Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2",
        "spec": "65 cm - 100 cm selective visceral catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014 steerable Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Particles",
        "name": "Calibrated Gelatin Microspheres (Embosphere / Bead Block)",
        "spec": "500-700 um & 700-900 um pre-filled syringes",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Pain Management Kit",
        "name": "PCA Pump / Superior Hypogastric Nerve Block Kit",
        "spec": "Post-UAE severe cramping analgesic protocol",
        "standardStore": "Post-Op Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Prophylactic Internal Iliac Artery Balloon Catheter Placement for Morbidly Adherent Placenta.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Merit Medical India (+91 98294 55667)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c18-transcatheter-arterial-embolization-for-inoperable",
    "name": "Transcatheter Arterial Embolization for Inoperable Cervical Carcinoma Hemorrhage",
    "category": "Gynecological, Obstetric & Pelvic Interventions",
    "code": "2849-GY915A",
    "rghsCode": "693 / 71 / 25",
    "icd10": "D25.9 (Leiomyoma of uterus) / O72.0 (Postpartum hemorrhage) / N94.89 (Pelvic congestion)",
    "indications": [
      "Clinically documented indication for Transcatheter Arterial Embolization for Inoperable Cervical Carcinoma Hemorrhage refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm right femoral or left radial sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Selective Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2",
        "spec": "65 cm - 100 cm selective visceral catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014 steerable Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Particles",
        "name": "Calibrated Gelatin Microspheres (Embosphere / Bead Block)",
        "spec": "500-700 um & 700-900 um pre-filled syringes",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Pain Management Kit",
        "name": "PCA Pump / Superior Hypogastric Nerve Block Kit",
        "spec": "Post-UAE severe cramping analgesic protocol",
        "standardStore": "Post-Op Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Arterial Embolization for Inoperable Cervical Carcinoma Hemorrhage.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Merit Medical India (+91 98294 55667)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c18-uterine-artery-embolization-for-ectopic",
    "name": "Uterine Artery Embolization for Ectopic Pregnancies (Cesarean Scar, Cervical Ectopic)",
    "category": "Gynecological, Obstetric & Pelvic Interventions",
    "code": "2849-GY143A",
    "rghsCode": "693 / 71 / 53",
    "icd10": "D25.9 (Leiomyoma of uterus) / O72.0 (Postpartum hemorrhage) / N94.89 (Pelvic congestion)",
    "indications": [
      "Clinically documented indication for Uterine Artery Embolization for Ectopic Pregnancies (Cesarean Scar, Cervical Ectopic) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm right femoral or left radial sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Selective Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2",
        "spec": "65 cm - 100 cm selective visceral catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014 steerable Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Particles",
        "name": "Calibrated Gelatin Microspheres (Embosphere / Bead Block)",
        "spec": "500-700 um & 700-900 um pre-filled syringes",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Pain Management Kit",
        "name": "PCA Pump / Superior Hypogastric Nerve Block Kit",
        "spec": "Post-UAE severe cramping analgesic protocol",
        "standardStore": "Post-Op Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Uterine Artery Embolization for Ectopic Pregnancies (Cesarean Scar, Cervical Ectopic).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Merit Medical India (+91 98294 55667)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c18-ovarian-vein-embolization-with-coils",
    "name": "Ovarian Vein Embolization (OVE) with Coils and Sclerosants for Pelvic Venous Disorders / PCS",
    "category": "Gynecological, Obstetric & Pelvic Interventions",
    "code": "2849-GY962A",
    "rghsCode": "693 / 71 / 22",
    "icd10": "D25.9 (Leiomyoma of uterus) / O72.0 (Postpartum hemorrhage) / N94.89 (Pelvic congestion)",
    "indications": [
      "Clinically documented indication for Ovarian Vein Embolization (OVE) with Coils and Sclerosants for Pelvic Venous Disorders / PCS refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm right femoral or left radial sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Selective Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2",
        "spec": "65 cm - 100 cm selective visceral catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014 steerable Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Particles",
        "name": "Calibrated Gelatin Microspheres (Embosphere / Bead Block)",
        "spec": "500-700 um & 700-900 um pre-filled syringes",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Pain Management Kit",
        "name": "PCA Pump / Superior Hypogastric Nerve Block Kit",
        "spec": "Post-UAE severe cramping analgesic protocol",
        "standardStore": "Post-Op Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Ovarian Vein Embolization (OVE) with Coils and Sclerosants for Pelvic Venous Disorders / PCS.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Merit Medical India (+91 98294 55667)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c18-transcatheter-embolization-of-internal-iliac",
    "name": "Transcatheter Embolization of Internal Iliac Venous Tributaries / Pelvic Varices",
    "category": "Gynecological, Obstetric & Pelvic Interventions",
    "code": "2849-GY406A",
    "rghsCode": "693 / 71 / 16",
    "icd10": "D25.9 (Leiomyoma of uterus) / O72.0 (Postpartum hemorrhage) / N94.89 (Pelvic congestion)",
    "indications": [
      "Clinically documented indication for Transcatheter Embolization of Internal Iliac Venous Tributaries / Pelvic Varices refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm right femoral or left radial sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Selective Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2",
        "spec": "65 cm - 100 cm selective visceral catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014 steerable Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Particles",
        "name": "Calibrated Gelatin Microspheres (Embosphere / Bead Block)",
        "spec": "500-700 um & 700-900 um pre-filled syringes",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Pain Management Kit",
        "name": "PCA Pump / Superior Hypogastric Nerve Block Kit",
        "spec": "Post-UAE severe cramping analgesic protocol",
        "standardStore": "Post-Op Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Embolization of Internal Iliac Venous Tributaries / Pelvic Varices.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Merit Medical India (+91 98294 55667)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c18-fallopian-tube-recanalization-selective-salpingography",
    "name": "Fallopian Tube Recanalization (FTR) / Selective Salpingography for Proximal Tubal Occlusion",
    "category": "Gynecological, Obstetric & Pelvic Interventions",
    "code": "2849-GY638A",
    "rghsCode": "693 / 71 / 48",
    "icd10": "D25.9 (Leiomyoma of uterus) / O72.0 (Postpartum hemorrhage) / N94.89 (Pelvic congestion)",
    "indications": [
      "Clinically documented indication for Fallopian Tube Recanalization (FTR) / Selective Salpingography for Proximal Tubal Occlusion refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm right femoral or left radial sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Selective Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2",
        "spec": "65 cm - 100 cm selective visceral catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014 steerable Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Particles",
        "name": "Calibrated Gelatin Microspheres (Embosphere / Bead Block)",
        "spec": "500-700 um & 700-900 um pre-filled syringes",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Pain Management Kit",
        "name": "PCA Pump / Superior Hypogastric Nerve Block Kit",
        "spec": "Post-UAE severe cramping analgesic protocol",
        "standardStore": "Post-Op Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Fallopian Tube Recanalization (FTR) / Selective Salpingography for Proximal Tubal Occlusion.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Merit Medical India (+91 98294 55667)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c18-sclerotherapy-of-endometriomas-with-absolute",
    "name": "Sclerotherapy of Endometriomas with Absolute Alcohol / Doxycycline",
    "category": "Gynecological, Obstetric & Pelvic Interventions",
    "code": "2849-GY378A",
    "rghsCode": "693 / 71 / 38",
    "icd10": "D25.9 (Leiomyoma of uterus) / O72.0 (Postpartum hemorrhage) / N94.89 (Pelvic congestion)",
    "indications": [
      "Clinically documented indication for Sclerotherapy of Endometriomas with Absolute Alcohol / Doxycycline refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm right femoral or left radial sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Selective Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2",
        "spec": "65 cm - 100 cm selective visceral catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014 steerable Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Particles",
        "name": "Calibrated Gelatin Microspheres (Embosphere / Bead Block)",
        "spec": "500-700 um & 700-900 um pre-filled syringes",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Pain Management Kit",
        "name": "PCA Pump / Superior Hypogastric Nerve Block Kit",
        "spec": "Post-UAE severe cramping analgesic protocol",
        "standardStore": "Post-Op Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Sclerotherapy of Endometriomas with Absolute Alcohol / Doxycycline.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Merit Medical India (+91 98294 55667)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c18-high-intensity-focused-ultrasound-ablation",
    "name": "High-Intensity Focused Ultrasound (HIFU) Ablation of Uterine Fibroids",
    "category": "Gynecological, Obstetric & Pelvic Interventions",
    "code": "2849-GY638A",
    "rghsCode": "693 / 71 / 48",
    "icd10": "D25.9 (Leiomyoma of uterus) / O72.0 (Postpartum hemorrhage) / N94.89 (Pelvic congestion)",
    "indications": [
      "Clinically documented indication for High-Intensity Focused Ultrasound (HIFU) Ablation of Uterine Fibroids refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm right femoral or left radial sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Selective Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2",
        "spec": "65 cm - 100 cm selective visceral catheter",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014 steerable Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Particles",
        "name": "Calibrated Gelatin Microspheres (Embosphere / Bead Block)",
        "spec": "500-700 um & 700-900 um pre-filled syringes",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Pain Management Kit",
        "name": "PCA Pump / Superior Hypogastric Nerve Block Kit",
        "spec": "Post-UAE severe cramping analgesic protocol",
        "standardStore": "Post-Op Recovery"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for High-Intensity Focused Ultrasound (HIFU) Ablation of Uterine Fibroids.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Merit Medical India (+91 98294 55667)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c19-percutaneous-nephrostomy-ultrasound-and-fluoroscopy",
    "name": "Percutaneous Nephrostomy (PCN) - Ultrasound and Fluoroscopy Guided Puncture",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR882A",
    "rghsCode": "693 / 72 / 42",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Percutaneous Nephrostomy (PCN) - Ultrasound and Fluoroscopy Guided Puncture refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Nephrostomy (PCN) - Ultrasound and Fluoroscopy Guided Puncture.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-pcn-exchange-upsizing-over-stiff",
    "name": "PCN Exchange / Upsizing over Stiff Glidewire",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR541A",
    "rghsCode": "693 / 72 / 51",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for PCN Exchange / Upsizing over Stiff Glidewire refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for PCN Exchange / Upsizing over Stiff Glidewire.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-percutaneous-nephrolithotomy-access-tract-puncture",
    "name": "Percutaneous Nephrolithotomy (PCNL) Access Tract Puncture and Balloon Dilation",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR101A",
    "rghsCode": "693 / 72 / 11",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Percutaneous Nephrolithotomy (PCNL) Access Tract Puncture and Balloon Dilation refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Nephrolithotomy (PCNL) Access Tract Puncture and Balloon Dilation.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-antegrade-ureteric-stent-insertion",
    "name": "Antegrade Ureteric Stent (Double-J / DJ Stent) Insertion",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR435A",
    "rghsCode": "693 / 72 / 45",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Antegrade Ureteric Stent (Double-J / DJ Stent) Insertion refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Antegrade Ureteric Stent (Double-J / DJ Stent) Insertion.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-antegrade-balloon-dilation-of-benign",
    "name": "Antegrade Balloon Dilation of Benign Ureteral Strictures",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR398A",
    "rghsCode": "693 / 72 / 58",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Antegrade Balloon Dilation of Benign Ureteral Strictures refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Antegrade Balloon Dilation of Benign Ureteral Strictures.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-percutaneous-nephroureterostomy-catheter-placement",
    "name": "Percutaneous Nephroureterostomy Catheter Placement",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR469A",
    "rghsCode": "693 / 72 / 29",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Percutaneous Nephroureterostomy Catheter Placement refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Nephroureterostomy Catheter Placement.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-fluoroscopic-snare-retrieval-and-replacement",
    "name": "Fluoroscopic Snare Retrieval and Replacement of Dislodged Double-J Stents",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR631A",
    "rghsCode": "693 / 72 / 41",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Fluoroscopic Snare Retrieval and Replacement of Dislodged Double-J Stents refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Fluoroscopic Snare Retrieval and Replacement of Dislodged Double-J Stents.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-endourological-sharp-recanalization-of-completely",
    "name": "Endourological Sharp Recanalization of Completely Occluded Ureter",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR263A",
    "rghsCode": "693 / 72 / 23",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Endourological Sharp Recanalization of Completely Occluded Ureter refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Endourological Sharp Recanalization of Completely Occluded Ureter.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-prostatic-artery-embolization-with-small",
    "name": "Prostatic Artery Embolization (PAE) with Small Spherical Embolics for Benign Prostatic Hyperplasia",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR305A",
    "rghsCode": "693 / 72 / 15",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Prostatic Artery Embolization (PAE) with Small Spherical Embolics for Benign Prostatic Hyperplasia refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Prostatic Artery Embolization (PAE) with Small Spherical Embolics for Benign Prostatic Hyperplasia.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-superselective-transcatheter-arterial-embolization-for",
    "name": "Superselective Transcatheter Arterial Embolization for Severe Prostatic Hemorrhage",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR487A",
    "rghsCode": "693 / 72 / 47",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Superselective Transcatheter Arterial Embolization for Severe Prostatic Hemorrhage refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Superselective Transcatheter Arterial Embolization for Severe Prostatic Hemorrhage.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-varicocele-embolization-via-retrograde-transfemoral",
    "name": "Varicocele Embolization via Retrograde Transfemoral / Transjugular Approach",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR880A",
    "rghsCode": "693 / 72 / 40",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Varicocele Embolization via Retrograde Transfemoral / Transjugular Approach refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Varicocele Embolization via Retrograde Transfemoral / Transjugular Approach.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-varicocele-sclerotherapy-with-sodium-tetradecyl",
    "name": "Varicocele Sclerotherapy with Sodium Tetradecyl Sulfate / Polidocanol",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR464A",
    "rghsCode": "693 / 72 / 24",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Varicocele Sclerotherapy with Sodium Tetradecyl Sulfate / Polidocanol refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Varicocele Sclerotherapy with Sodium Tetradecyl Sulfate / Polidocanol.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-antegrade-scrotal-sclerotherapy-of-varicocele",
    "name": "Antegrade Scrotal Sclerotherapy of Varicocele (Tauber Procedure)",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR209A",
    "rghsCode": "693 / 72 / 19",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Antegrade Scrotal Sclerotherapy of Varicocele (Tauber Procedure) refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Antegrade Scrotal Sclerotherapy of Varicocele (Tauber Procedure).",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-testicular-vein-coil-microvascular-plug",
    "name": "Testicular Vein Coil / Microvascular Plug Occlusion",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR870A",
    "rghsCode": "693 / 72 / 30",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Testicular Vein Coil / Microvascular Plug Occlusion refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Testicular Vein Coil / Microvascular Plug Occlusion.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-percutaneous-embolization-for-high-flow",
    "name": "Percutaneous Embolization for High-Flow (Non-Ischemic) Priapism",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR500A",
    "rghsCode": "693 / 72 / 10",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Percutaneous Embolization for High-Flow (Non-Ischemic) Priapism refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Embolization for High-Flow (Non-Ischemic) Priapism.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-cavernosal-blood-aspiration-and-alpha",
    "name": "Cavernosal Blood Aspiration and Alpha-Agonist Lavage for Low-Flow Priapism",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR260A",
    "rghsCode": "693 / 72 / 20",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Cavernosal Blood Aspiration and Alpha-Agonist Lavage for Low-Flow Priapism refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Cavernosal Blood Aspiration and Alpha-Agonist Lavage for Low-Flow Priapism.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-percutaneous-suprapubic-cystostomy-catheter-insertion",
    "name": "Percutaneous Suprapubic Cystostomy Catheter Insertion",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR485A",
    "rghsCode": "693 / 72 / 45",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Percutaneous Suprapubic Cystostomy Catheter Insertion refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Suprapubic Cystostomy Catheter Insertion.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c19-percutaneous-sclerotherapy-of-idiopathic-hydrocele",
    "name": "Percutaneous Sclerotherapy of Idiopathic Hydrocele",
    "category": "Urological & Genitourinary Interventions",
    "code": "2849-UR662A",
    "rghsCode": "693 / 72 / 22",
    "icd10": "N40.1 (Benign prostatic hyperplasia) / N13.0 (Hydronephrosis) / I86.1 (Scrotal varices)",
    "indications": [
      "Clinically documented indication for Percutaneous Sclerotherapy of Idiopathic Hydrocele refractory to conservative medical management.",
      "Diagnostic imaging (CTA / MRA / Ultrasound / DSA) confirming anatomically suitable target.",
      "Multidisciplinary team consensus (IR, Primary Specialty, Anesthesiology) indicating endovascular / percutaneous intervention as optimal approach."
    ],
    "preOpCriteria": [
      "Complete blood counts, coagulation screen (INR <= 1.4, Platelets >= 60,000 /uL).",
      "Renal function test (Serum Creatinine and eGFR) ensuring safe iodinated contrast limits.",
      "Fasting for a minimum of 4 to 6 hours prior to intervention.",
      "Pre-procedure multi-planar cross-sectional imaging reviewed with roadmapping measurements.",
      "Informed bilingual written consent signed by patient and legal guardian."
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "Radial (10 cm) or Femoral (11 cm) sheath",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Base Catheter",
        "name": "5F Cobra C2 / PAE Swan-neck Selective Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Uro-IR Console"
      },
      {
        "category": "Superselective Microcatheter",
        "name": "2.0F - 2.4F TruSelect / Progreat Microcatheter",
        "spec": "130-150 cm with 0.014 hydrophilic microwire",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Embolic Particles",
        "name": "100-300 um & 300-500 um Calibrated Microspheres (Embozene / Embosphere)",
        "spec": "Targeted prostatic / renal capillary bed devascularization",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Drainage Hardware",
        "name": "8F - 10F All-Coat Locking Pigtail Nephrostomy Catheter",
        "spec": "With 0.038 stiff Amplatz wire and fascial dilators",
        "standardStore": "Urology IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Sclerotherapy of Idiopathic Hydrocele.",
      "Therapeutic deployment of device / agent (balloon, stent, embolic particles, coils, glue, or ablation antenna) under continuous fluoroscopic or cross-sectional guidance.",
      "Completion angiography or post-ablation imaging confirming technical success and exclusion of non-target injury.",
      "Access sheath removal and safe hemostasis achieved using certified vascular closure device or manual compression."
    ],
    "complications": [
      "Puncture site hematoma, bleeding, pseudoaneurysm, or localized arteriovenous fistula.",
      "Non-target embolization, inadvertent vessel spasm, dissection, or acute thrombosis.",
      "Adverse reaction to iodinated contrast media ranging from skin hives to bronchospasm.",
      "Contrast-Induced Nephropathy (CI-AKI) or transient decline in renal filtration.",
      "Pain, transient fever, or post-procedural swelling managed with supportive pharmacotherapy."
    ],
    "maayTariffInr": 55000,
    "vendorContacts": [
      "Varian / Siemens Healthineers (+91 98290 77889)",
      "Cook Medical (+91 98290 88990)"
    ]
  }
];
