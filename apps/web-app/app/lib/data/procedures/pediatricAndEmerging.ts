import { ProcedureBlueprint } from '../../types/clinical';

/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 *
 * Master Catalog for Category 8 & 9 (Interventional Oncology Transcatheter & Ablation), 21 (Pediatric Interventions), 22 (Emerging, Novel & Hybrid Interventions)
 */

export const PEDIATRIC_AND_EMERGING_PROCEDURES: ProcedureBlueprint[] = [
  {
    "id": "c8-conventional-transarterial-chemoembolization-with-lipiodol",
    "name": "Conventional Transarterial Chemoembolization (cTACE) with Lipiodol and Doxorubicin / Cisplatin",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON748A",
    "rghsCode": "693 / 11 / 58",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Conventional Transarterial Chemoembolization (cTACE) with Lipiodol and Doxorubicin / Cisplatin refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Conventional Transarterial Chemoembolization (cTACE) with Lipiodol and Doxorubicin / Cisplatin.",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-drug-eluting-bead-transarterial-chemoembolization",
    "name": "Drug-Eluting Bead Transarterial Chemoembolization (DEB-TACE) for Hepatocellular Carcinoma (HCC)",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON293A",
    "rghsCode": "693 / 11 / 53",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Drug-Eluting Bead Transarterial Chemoembolization (DEB-TACE) for Hepatocellular Carcinoma (HCC) refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Drug-Eluting Bead Transarterial Chemoembolization (DEB-TACE) for Hepatocellular Carcinoma (HCC).",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-balloon-occluded-transarterial-chemoembolization",
    "name": "Balloon-Occluded Transarterial Chemoembolization (B-TACE)",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON163A",
    "rghsCode": "693 / 11 / 23",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Balloon-Occluded Transarterial Chemoembolization (B-TACE) refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Balloon-Occluded Transarterial Chemoembolization (B-TACE).",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-degradable-starch-microsphere-transarterial-chemoembolization",
    "name": "Degradable Starch Microsphere Transarterial Chemoembolization (DSM-TACE)",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON519A",
    "rghsCode": "693 / 11 / 29",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Degradable Starch Microsphere Transarterial Chemoembolization (DSM-TACE) refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Degradable Starch Microsphere Transarterial Chemoembolization (DSM-TACE).",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-transarterial-bland-embolization-for-hepatocellular",
    "name": "Transarterial Bland Embolization (TAE) for Hepatocellular Carcinoma",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON513A",
    "rghsCode": "693 / 11 / 23",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Transarterial Bland Embolization (TAE) for Hepatocellular Carcinoma refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Bland Embolization (TAE) for Hepatocellular Carcinoma.",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-transarterial-bland-embolization-for-neuroendocrine",
    "name": "Transarterial Bland Embolization for Neuroendocrine Tumor (NET) Liver Metastases",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON575A",
    "rghsCode": "693 / 11 / 35",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Transarterial Bland Embolization for Neuroendocrine Tumor (NET) Liver Metastases refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Bland Embolization for Neuroendocrine Tumor (NET) Liver Metastases.",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-transarterial-chemoembolization-for-net-metastases",
    "name": "Transarterial Chemoembolization for NET Metastases",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON101A",
    "rghsCode": "693 / 11 / 11",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Transarterial Chemoembolization for NET Metastases refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Chemoembolization for NET Metastases.",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-transarterial-radioembolization-with-yttrium-90",
    "name": "Transarterial Radioembolization (TARE / SIRT) with Yttrium-90 Glass Microspheres (TheraSphere)",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON995A",
    "rghsCode": "693 / 11 / 55",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Transarterial Radioembolization (TARE / SIRT) with Yttrium-90 Glass Microspheres (TheraSphere) refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Radioembolization (TARE / SIRT) with Yttrium-90 Glass Microspheres (TheraSphere).",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-transarterial-radioembolization-with-yttrium-90-proc9",
    "name": "Transarterial Radioembolization with Yttrium-90 Resin Microspheres (SIR-Spheres)",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON856A",
    "rghsCode": "693 / 11 / 16",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Transarterial Radioembolization with Yttrium-90 Resin Microspheres (SIR-Spheres) refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Radioembolization with Yttrium-90 Resin Microspheres (SIR-Spheres).",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-tare-radiation-segmentectomy-for-solitary",
    "name": "TARE Radiation Segmentectomy for Solitary HCC",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON854A",
    "rghsCode": "693 / 11 / 14",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for TARE Radiation Segmentectomy for Solitary HCC refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for TARE Radiation Segmentectomy for Solitary HCC.",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-tare-radiation-lobectomy-for-contralateral",
    "name": "TARE Radiation Lobectomy for Contralateral Liver Hypertrophy Induction",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON952A",
    "rghsCode": "693 / 11 / 12",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for TARE Radiation Lobectomy for Contralateral Liver Hypertrophy Induction refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for TARE Radiation Lobectomy for Contralateral Liver Hypertrophy Induction.",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-diagnostic-shunt-fractions-assessment-with",
    "name": "Diagnostic Shunt Fractions Assessment with Technetium-99m Macroaggregated Albumin (Tc-99m MAA)",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON763A",
    "rghsCode": "693 / 11 / 23",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Diagnostic Shunt Fractions Assessment with Technetium-99m Macroaggregated Albumin (Tc-99m MAA) refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Diagnostic Shunt Fractions Assessment with Technetium-99m Macroaggregated Albumin (Tc-99m MAA).",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-prophylactic-coil-embolization-of-non",
    "name": "Prophylactic Coil Embolization of Non-Target Vessels (GDA, RGA) Prior to TARE",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON835A",
    "rghsCode": "693 / 11 / 45",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Prophylactic Coil Embolization of Non-Target Vessels (GDA, RGA) Prior to TARE refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Prophylactic Coil Embolization of Non-Target Vessels (GDA, RGA) Prior to TARE.",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-hepatic-arterial-infusion-chemotherapy-port",
    "name": "Hepatic Arterial Infusion Chemotherapy (HAIC) Port / Catheter Placement",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON927A",
    "rghsCode": "693 / 11 / 37",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Hepatic Arterial Infusion Chemotherapy (HAIC) Port / Catheter Placement refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Hepatic Arterial Infusion Chemotherapy (HAIC) Port / Catheter Placement.",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-transarterial-chemoembolization-for-unresectable-intrahepatic",
    "name": "Transarterial Chemoembolization for Unresectable Intrahepatic Cholangiocarcinoma",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON110A",
    "rghsCode": "693 / 11 / 20",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Transarterial Chemoembolization for Unresectable Intrahepatic Cholangiocarcinoma refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Chemoembolization for Unresectable Intrahepatic Cholangiocarcinoma.",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-transarterial-chemoembolization-for-colorectal-cancer",
    "name": "Transarterial Chemoembolization for Colorectal Cancer Liver Metastases (DEBIRI)",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON878A",
    "rghsCode": "693 / 11 / 38",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Transarterial Chemoembolization for Colorectal Cancer Liver Metastases (DEBIRI) refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Chemoembolization for Colorectal Cancer Liver Metastases (DEBIRI).",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-transarterial-embolization-for-renal-cell",
    "name": "Transarterial Embolization for Renal Cell Carcinoma (Pre-surgical / Palliative)",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON932A",
    "rghsCode": "693 / 11 / 42",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Transarterial Embolization for Renal Cell Carcinoma (Pre-surgical / Palliative) refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Embolization for Renal Cell Carcinoma (Pre-surgical / Palliative).",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-bronchial-arterial-chemoembolization-for-advanced",
    "name": "Bronchial Arterial Chemoembolization (BACE) for Advanced Lung Carcinoma",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON389A",
    "rghsCode": "693 / 11 / 49",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Bronchial Arterial Chemoembolization (BACE) for Advanced Lung Carcinoma refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Bronchial Arterial Chemoembolization (BACE) for Advanced Lung Carcinoma.",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-transarterial-chemoembolization-for-uterine-cervical",
    "name": "Transarterial Chemoembolization for Uterine Cervical Carcinoma",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON405A",
    "rghsCode": "693 / 11 / 15",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Transarterial Chemoembolization for Uterine Cervical Carcinoma refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Chemoembolization for Uterine Cervical Carcinoma.",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c8-transarterial-chemoembolization-for-osteosarcoma-soft",
    "name": "Transarterial Chemoembolization for Osteosarcoma / Soft Tissue Sarcoma",
    "category": "Interventional Oncology (IO): Transcatheter Therapies",
    "code": "2849-ON472A",
    "rghsCode": "693 / 11 / 32",
    "icd10": "C22.0 (Hepatocellular carcinoma) / C78.7 (Secondary malignant neoplasm of liver)",
    "indications": [
      "Clinically documented indication for Transarterial Chemoembolization for Osteosarcoma / Soft Tissue Sarcoma refractory to conservative medical management.",
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
        "name": "5F Radiofocus Sheath",
        "spec": "11 cm femoral access",
        "standardStore": "Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / RH Catheter",
        "spec": "65 cm 0.035 lumen",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat System",
        "spec": "130 cm with 0.014 Glidewire GT",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemoembolic Agents",
        "name": "Lipiodol Ultra-Fluid & Doxorubicin / DC Beads",
        "spec": "10 mL ampoule / 70-150 um beads",
        "standardStore": "Oncology Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Chemoembolization for Osteosarcoma / Soft Tissue Sarcoma.",
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
      "Terumo India (+91 98291 55678)"
    ]
  },
  {
    "id": "c9-percutaneous-ultrasound-guided-radiofrequency-ablation",
    "name": "Percutaneous Ultrasound-Guided Radiofrequency Ablation (RFA) of Liver Tumors (HCC, Metastases)",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB466A",
    "rghsCode": "693 / 13 / 26",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for Percutaneous Ultrasound-Guided Radiofrequency Ablation (RFA) of Liver Tumors (HCC, Metastases) refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Ultrasound-Guided Radiofrequency Ablation (RFA) of Liver Tumors (HCC, Metastases).",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-radiofrequency-ablation",
    "name": "CT-Guided Percutaneous Radiofrequency Ablation of Liver Tumors",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB177A",
    "rghsCode": "693 / 13 / 37",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for CT-Guided Percutaneous Radiofrequency Ablation of Liver Tumors refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for CT-Guided Percutaneous Radiofrequency Ablation of Liver Tumors.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-laparoscopic-assisted-ultrasound-guided-rfa",
    "name": "Laparoscopic-Assisted Ultrasound-Guided RFA of Liver Lesions",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB907A",
    "rghsCode": "693 / 13 / 17",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for Laparoscopic-Assisted Ultrasound-Guided RFA of Liver Lesions refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Laparoscopic-Assisted Ultrasound-Guided RFA of Liver Lesions.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-ultrasound-guided-percutaneous-microwave-ablation",
    "name": "Ultrasound-Guided Percutaneous Microwave Ablation (MWA) of Liver Tumors",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB526A",
    "rghsCode": "693 / 13 / 36",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for Ultrasound-Guided Percutaneous Microwave Ablation (MWA) of Liver Tumors refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Ultrasound-Guided Percutaneous Microwave Ablation (MWA) of Liver Tumors.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-microwave-ablation",
    "name": "CT-Guided Percutaneous Microwave Ablation of Liver Tumors",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB105A",
    "rghsCode": "693 / 13 / 15",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for CT-Guided Percutaneous Microwave Ablation of Liver Tumors refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for CT-Guided Percutaneous Microwave Ablation of Liver Tumors.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-percutaneous-cryoablation-of-liver-tumors",
    "name": "Percutaneous Cryoablation of Liver Tumors",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB373A",
    "rghsCode": "693 / 13 / 33",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for Percutaneous Cryoablation of Liver Tumors refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Cryoablation of Liver Tumors.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-percutaneous-irreversible-electroporation-of-locally",
    "name": "Percutaneous Irreversible Electroporation (IRE / NanoKnife) of Locally Advanced Pancreatic Carcinoma",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB773A",
    "rghsCode": "693 / 13 / 33",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for Percutaneous Irreversible Electroporation (IRE / NanoKnife) of Locally Advanced Pancreatic Carcinoma refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Irreversible Electroporation (IRE / NanoKnife) of Locally Advanced Pancreatic Carcinoma.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-percutaneous-ire-for-centrally-located",
    "name": "Percutaneous IRE for Centrally Located Hepatocellular Carcinoma / Cholangiocarcinoma",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB308A",
    "rghsCode": "693 / 13 / 18",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for Percutaneous IRE for Centrally Located Hepatocellular Carcinoma / Cholangiocarcinoma refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous IRE for Centrally Located Hepatocellular Carcinoma / Cholangiocarcinoma.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-histotripsy-focused-ultrasound-cavitation-ablation",
    "name": "Histotripsy Focused Ultrasound Cavitation Ablation for Primary / Metastatic Liver Tumors",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB242A",
    "rghsCode": "693 / 13 / 52",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for Histotripsy Focused Ultrasound Cavitation Ablation for Primary / Metastatic Liver Tumors refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Histotripsy Focused Ultrasound Cavitation Ablation for Primary / Metastatic Liver Tumors.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-microwave-ablation-proc30",
    "name": "CT-Guided Percutaneous Microwave Ablation of Primary Non-Small Cell Lung Cancer (NSCLC)",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB904A",
    "rghsCode": "693 / 13 / 14",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for CT-Guided Percutaneous Microwave Ablation of Primary Non-Small Cell Lung Cancer (NSCLC) refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for CT-Guided Percutaneous Microwave Ablation of Primary Non-Small Cell Lung Cancer (NSCLC).",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-cryoablation-of",
    "name": "CT-Guided Percutaneous Cryoablation of Pulmonary Metastases",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB819A",
    "rghsCode": "693 / 13 / 29",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for CT-Guided Percutaneous Cryoablation of Pulmonary Metastases refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for CT-Guided Percutaneous Cryoablation of Pulmonary Metastases.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-radiofrequency-ablation-proc32",
    "name": "CT-Guided Percutaneous Radiofrequency Ablation of Lung Tumors",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB600A",
    "rghsCode": "693 / 13 / 10",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for CT-Guided Percutaneous Radiofrequency Ablation of Lung Tumors refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for CT-Guided Percutaneous Radiofrequency Ablation of Lung Tumors.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-cryoablation-of-proc33",
    "name": "CT-Guided Percutaneous Cryoablation of Renal Cell Carcinoma (RCC)",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB672A",
    "rghsCode": "693 / 13 / 32",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for CT-Guided Percutaneous Cryoablation of Renal Cell Carcinoma (RCC) refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for CT-Guided Percutaneous Cryoablation of Renal Cell Carcinoma (RCC).",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-microwave-ablation-proc34",
    "name": "CT-Guided Percutaneous Microwave Ablation of Small Renal Masses",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB233A",
    "rghsCode": "693 / 13 / 43",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for CT-Guided Percutaneous Microwave Ablation of Small Renal Masses refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for CT-Guided Percutaneous Microwave Ablation of Small Renal Masses.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-radiofrequency-ablation-proc35",
    "name": "CT-Guided Percutaneous Radiofrequency Ablation of T1a Renal Masses",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB755A",
    "rghsCode": "693 / 13 / 15",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for CT-Guided Percutaneous Radiofrequency Ablation of T1a Renal Masses refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for CT-Guided Percutaneous Radiofrequency Ablation of T1a Renal Masses.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-cryoablation-of-proc36",
    "name": "CT-Guided Percutaneous Cryoablation of Adrenal Metastases",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB165A",
    "rghsCode": "693 / 13 / 25",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for CT-Guided Percutaneous Cryoablation of Adrenal Metastases refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for CT-Guided Percutaneous Cryoablation of Adrenal Metastases.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-ct-guided-percutaneous-microwave-ablation-proc37",
    "name": "CT-Guided Percutaneous Microwave Ablation of Adrenal Gland Lesions",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB679A",
    "rghsCode": "693 / 13 / 39",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for CT-Guided Percutaneous Microwave Ablation of Adrenal Gland Lesions refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for CT-Guided Percutaneous Microwave Ablation of Adrenal Gland Lesions.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-percutaneous-radiofrequency-ablation-of-osteoid",
    "name": "Percutaneous Radiofrequency Ablation of Osteoid Osteoma",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB173A",
    "rghsCode": "693 / 13 / 33",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for Percutaneous Radiofrequency Ablation of Osteoid Osteoma refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Radiofrequency Ablation of Osteoid Osteoma.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-percutaneous-laser-ablation-of-osteoid",
    "name": "Percutaneous Laser Ablation of Osteoid Osteoma",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB605A",
    "rghsCode": "693 / 13 / 15",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for Percutaneous Laser Ablation of Osteoid Osteoma refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Laser Ablation of Osteoid Osteoma.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-percutaneous-cryoablation-of-extra-abdominal",
    "name": "Percutaneous Cryoablation of Extra-Abdominal Desmoid Tumors",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB614A",
    "rghsCode": "693 / 13 / 24",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for Percutaneous Cryoablation of Extra-Abdominal Desmoid Tumors refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Cryoablation of Extra-Abdominal Desmoid Tumors.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-ct-guided-cryoablation-of-musculoskeletal",
    "name": "CT-Guided Cryoablation of Musculoskeletal / Bone Metastases for Pain Palliation",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB629A",
    "rghsCode": "693 / 13 / 39",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for CT-Guided Cryoablation of Musculoskeletal / Bone Metastases for Pain Palliation refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for CT-Guided Cryoablation of Musculoskeletal / Bone Metastases for Pain Palliation.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-combined-percutaneous-cryoablation-and-osteoplasty",
    "name": "Combined Percutaneous Cryoablation and Osteoplasty (Cementoplasty) for Pelvic Lytic Metastases",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB969A",
    "rghsCode": "693 / 13 / 29",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for Combined Percutaneous Cryoablation and Osteoplasty (Cementoplasty) for Pelvic Lytic Metastases refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Combined Percutaneous Cryoablation and Osteoplasty (Cementoplasty) for Pelvic Lytic Metastases.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-percutaneous-ethanol-injection-of-hepatocellular",
    "name": "Percutaneous Ethanol Injection (PEI) of Hepatocellular Carcinoma",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB825A",
    "rghsCode": "693 / 13 / 35",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for Percutaneous Ethanol Injection (PEI) of Hepatocellular Carcinoma refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Ethanol Injection (PEI) of Hepatocellular Carcinoma.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-chemical-neurolysis-of-celiac-plexus",
    "name": "Chemical Neurolysis (Alcohol / Phenol) of Celiac Plexus for Intractable Pancreatic Cancer Pain",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB451A",
    "rghsCode": "693 / 13 / 11",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for Chemical Neurolysis (Alcohol / Phenol) of Celiac Plexus for Intractable Pancreatic Cancer Pain refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Chemical Neurolysis (Alcohol / Phenol) of Celiac Plexus for Intractable Pancreatic Cancer Pain.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c9-intracavitary-photodynamic-therapy-for-cholangiocarcinoma",
    "name": "Intracavitary Photodynamic Therapy (PDT) for Cholangiocarcinoma",
    "category": "Interventional Oncology (IO): Percutaneous Ablative Therapies",
    "code": "2849-AB113A",
    "rghsCode": "693 / 13 / 23",
    "icd10": "C22.0 (Liver cell carcinoma) / C64.9 (Malignant neoplasm of kidney)",
    "indications": [
      "Clinically documented indication for Intracavitary Photodynamic Therapy (PDT) for Cholangiocarcinoma refractory to conservative medical management.",
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
        "category": "Ablation Generator & Probe",
        "name": "Microwave (MWA) / Radiofrequency (RFA) / Cryoablation System",
        "spec": "14G - 17G antenna with ceramic tip / gas-cooled cryoprobes",
        "standardStore": "Ablation Suite 921"
      },
      {
        "category": "Hydrodissection Set",
        "name": "18G Spinal Needle & 5% Dextrose Infusion Line",
        "spec": "Thermal protection of adjacent bowel / nerves",
        "standardStore": "USG / CT Ablation Store"
      },
      {
        "category": "Image Guidance",
        "name": "CT Fluoroscopy & Contrast-Enhanced USG",
        "spec": "Dedicated multi-planar navigation brackets",
        "standardStore": "CT Suite D9211"
      },
      {
        "category": "Track Embolization",
        "name": "Gelfoam Slurry / Track Coagulation Mode",
        "spec": "Prevention of tract seeding and bleeding",
        "standardStore": "DDC-14 Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Intracavitary Photodynamic Therapy (PDT) for Cholangiocarcinoma.",
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
    "maayTariffInr": 62000,
    "vendorContacts": [
      "Medtronic Ablation (+91 98290 33445)",
      "NeuWave / Ethicon (+91 98292 66778)"
    ]
  },
  {
    "id": "c21-pediatric-diagnostic-heart-catheterization-and",
    "name": "Pediatric Diagnostic Heart Catheterization and Angiocardiography",
    "category": "Pediatric Interventions",
    "code": "2849-PD858A",
    "rghsCode": "693 / 81 / 18",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Pediatric Diagnostic Heart Catheterization and Angiocardiography refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Pediatric Diagnostic Heart Catheterization and Angiocardiography.",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-transcatheter-closure-of-patent-ductus",
    "name": "Transcatheter Closure of Patent Ductus Arteriosus (PDA) with Plugs and Coils",
    "category": "Pediatric Interventions",
    "code": "2849-PD466A",
    "rghsCode": "693 / 81 / 26",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Transcatheter Closure of Patent Ductus Arteriosus (PDA) with Plugs and Coils refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Closure of Patent Ductus Arteriosus (PDA) with Plugs and Coils.",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-transcatheter-balloon-angioplasty-and-stenting",
    "name": "Transcatheter Balloon Angioplasty and Stenting for Aortic Coarctation",
    "category": "Pediatric Interventions",
    "code": "2849-PD984A",
    "rghsCode": "693 / 81 / 44",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Transcatheter Balloon Angioplasty and Stenting for Aortic Coarctation refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Balloon Angioplasty and Stenting for Aortic Coarctation.",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-percutaneous-atrial-septal-defect-device",
    "name": "Percutaneous Atrial Septal Defect (ASD) Device Closure",
    "category": "Pediatric Interventions",
    "code": "2849-PD318A",
    "rghsCode": "693 / 81 / 28",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Percutaneous Atrial Septal Defect (ASD) Device Closure refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Atrial Septal Defect (ASD) Device Closure.",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-percutaneous-ventricular-septal-defect-device",
    "name": "Percutaneous Ventricular Septal Defect (VSD) Device Closure",
    "category": "Pediatric Interventions",
    "code": "2849-PD256A",
    "rghsCode": "693 / 81 / 16",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Percutaneous Ventricular Septal Defect (VSD) Device Closure refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Ventricular Septal Defect (VSD) Device Closure.",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-balloon-pulmonary-valvuloplasty-in-pediatric",
    "name": "Balloon Pulmonary Valvuloplasty in Pediatric Pulmonary Stenosis",
    "category": "Pediatric Interventions",
    "code": "2849-PD817A",
    "rghsCode": "693 / 81 / 27",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Balloon Pulmonary Valvuloplasty in Pediatric Pulmonary Stenosis refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Balloon Pulmonary Valvuloplasty in Pediatric Pulmonary Stenosis.",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-balloon-aortic-valvuloplasty-in-congenital",
    "name": "Balloon Aortic Valvuloplasty in Congenital Aortic Stenosis",
    "category": "Pediatric Interventions",
    "code": "2849-PD921A",
    "rghsCode": "693 / 81 / 31",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Balloon Aortic Valvuloplasty in Congenital Aortic Stenosis refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Balloon Aortic Valvuloplasty in Congenital Aortic Stenosis.",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-transcatheter-coil-embolization-of-major",
    "name": "Transcatheter Coil Embolization of Major Aortopulmonary Collateral Arteries (MAPCAs)",
    "category": "Pediatric Interventions",
    "code": "2849-PD682A",
    "rghsCode": "693 / 81 / 42",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Transcatheter Coil Embolization of Major Aortopulmonary Collateral Arteries (MAPCAs) refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Coil Embolization of Major Aortopulmonary Collateral Arteries (MAPCAs).",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-pediatric-ultrasound-guided-air-oxygen",
    "name": "Pediatric Ultrasound-Guided Air / Oxygen Reduction of Intussusception",
    "category": "Pediatric Interventions",
    "code": "2849-PD715A",
    "rghsCode": "693 / 81 / 25",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Pediatric Ultrasound-Guided Air / Oxygen Reduction of Intussusception refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Pediatric Ultrasound-Guided Air / Oxygen Reduction of Intussusception.",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-ultrasound-guided-hydrostatic-saline-enema",
    "name": "Ultrasound-Guided Hydrostatic Saline Enema Reduction of Intussusception",
    "category": "Pediatric Interventions",
    "code": "2849-PD215A",
    "rghsCode": "693 / 81 / 25",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Ultrasound-Guided Hydrostatic Saline Enema Reduction of Intussusception refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Ultrasound-Guided Hydrostatic Saline Enema Reduction of Intussusception.",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-fluoroscopy-guided-balloon-dilation-of",
    "name": "Fluoroscopy-Guided Balloon Dilation of Congenital Esophageal Stenosis / Post-Repair Strictures",
    "category": "Pediatric Interventions",
    "code": "2849-PD978A",
    "rghsCode": "693 / 81 / 38",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Fluoroscopy-Guided Balloon Dilation of Congenital Esophageal Stenosis / Post-Repair Strictures refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Fluoroscopy-Guided Balloon Dilation of Congenital Esophageal Stenosis / Post-Repair Strictures.",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-pediatric-tunnelled-broviac-hickman-catheter",
    "name": "Pediatric Tunnelled Broviac / Hickman Catheter Placement",
    "category": "Pediatric Interventions",
    "code": "2849-PD951A",
    "rghsCode": "693 / 81 / 11",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Pediatric Tunnelled Broviac / Hickman Catheter Placement refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Pediatric Tunnelled Broviac / Hickman Catheter Placement.",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-pediatric-implantable-port-placement",
    "name": "Pediatric Implantable Port (Chemoport) Placement",
    "category": "Pediatric Interventions",
    "code": "2849-PD449A",
    "rghsCode": "693 / 81 / 59",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Pediatric Implantable Port (Chemoport) Placement refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Pediatric Implantable Port (Chemoport) Placement.",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-pediatric-percutaneous-transhepatic-cholangiography-and",
    "name": "Pediatric Percutaneous Transhepatic Cholangiography and Biliary Drainage",
    "category": "Pediatric Interventions",
    "code": "2849-PD569A",
    "rghsCode": "693 / 81 / 29",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Pediatric Percutaneous Transhepatic Cholangiography and Biliary Drainage refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Pediatric Percutaneous Transhepatic Cholangiography and Biliary Drainage.",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-pediatric-percutaneous-nephrostomy",
    "name": "Pediatric Percutaneous Nephrostomy (PCN)",
    "category": "Pediatric Interventions",
    "code": "2849-PD924A",
    "rghsCode": "693 / 81 / 34",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Pediatric Percutaneous Nephrostomy (PCN) refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Pediatric Percutaneous Nephrostomy (PCN).",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-pediatric-sclerotherapy-of-microcystic-and",
    "name": "Pediatric Sclerotherapy of Microcystic and Macrocystic Lymphatic Malformations",
    "category": "Pediatric Interventions",
    "code": "2849-PD347A",
    "rghsCode": "693 / 81 / 57",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Pediatric Sclerotherapy of Microcystic and Macrocystic Lymphatic Malformations refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Pediatric Sclerotherapy of Microcystic and Macrocystic Lymphatic Malformations.",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-sclerotherapy-of-extensive-infantile-hemangiomas",
    "name": "Sclerotherapy of Extensive Infantile Hemangiomas and Vascular Malformations",
    "category": "Pediatric Interventions",
    "code": "2849-PD883A",
    "rghsCode": "693 / 81 / 43",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Sclerotherapy of Extensive Infantile Hemangiomas and Vascular Malformations refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Sclerotherapy of Extensive Infantile Hemangiomas and Vascular Malformations.",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-pediatric-transjugular-liver-biopsy",
    "name": "Pediatric Transjugular Liver Biopsy (TGLB)",
    "category": "Pediatric Interventions",
    "code": "2849-PD971A",
    "rghsCode": "693 / 81 / 31",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Pediatric Transjugular Liver Biopsy (TGLB) refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Pediatric Transjugular Liver Biopsy (TGLB).",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-pediatric-transjugular-intrahepatic-portosystemic-shunt",
    "name": "Pediatric Transjugular Intrahepatic Portosystemic Shunt (TIPS)",
    "category": "Pediatric Interventions",
    "code": "2849-PD336A",
    "rghsCode": "693 / 81 / 46",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Pediatric Transjugular Intrahepatic Portosystemic Shunt (TIPS) refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Pediatric Transjugular Intrahepatic Portosystemic Shunt (TIPS).",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c21-percutaneous-management-of-vascular-complications",
    "name": "Percutaneous Management of Vascular Complications Post-Pediatric Liver Transplantation",
    "category": "Pediatric Interventions",
    "code": "2849-PD376A",
    "rghsCode": "693 / 81 / 36",
    "icd10": "K56.1 (Intussusception) / Q27.9 (Congenital vascular anomaly) / C64.9 (Wilms tumor)",
    "indications": [
      "Clinically documented indication for Percutaneous Management of Vascular Complications Post-Pediatric Liver Transplantation refractory to conservative medical management.",
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
        "category": "Pediatric Access",
        "name": "3F - 4F Micropuncture Pediatric Introducer Kit",
        "spec": "5 cm - 7 cm low profile sheath with 0.018 wire",
        "standardStore": "Pediatric IR Unit"
      },
      {
        "category": "Micro-Instruments",
        "name": "1.7F - 2.0F Ultra-Slim Microcatheter System",
        "spec": "Trackable low-deadspace microcatheter",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Radiation Protection",
        "name": "Pediatric Dose Reduction Protocol Filters",
        "spec": "Copper filtration (0.1 - 0.2 mm Cu) and low frame rate (3-7.5 fps)",
        "standardStore": "Cath Lab Pediatric Console"
      },
      {
        "category": "Fluid Warmer & Vitals",
        "name": "Pediatric Warming Blanket & Continuous Capnography",
        "spec": "Thermoregulation and micro-monitoring",
        "standardStore": "Pediatric Cath Lab"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Management of Vascular Complications Post-Pediatric Liver Transplantation.",
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
    "maayTariffInr": 38000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 88990)",
      "Terumo Medical (+91 98291 55678)"
    ]
  },
  {
    "id": "c22-transcatheter-bariatric-arterial-embolization-embolization",
    "name": "Transcatheter Bariatric Arterial Embolization (TAME) / Embolization of the Gastric Fundus for Obesity",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM523A",
    "rghsCode": "693 / 91 / 33",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Transcatheter Bariatric Arterial Embolization (TAME) / Embolization of the Gastric Fundus for Obesity refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Bariatric Arterial Embolization (TAME) / Embolization of the Gastric Fundus for Obesity.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-histotripsy-liver-tumor-non-thermal",
    "name": "Histotripsy Liver Tumor Non-Thermal Acoustic Cavitation Ablation",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM242A",
    "rghsCode": "693 / 91 / 52",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Histotripsy Liver Tumor Non-Thermal Acoustic Cavitation Ablation refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Histotripsy Liver Tumor Non-Thermal Acoustic Cavitation Ablation.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-endovascular-brain-computer-interface-implantation",
    "name": "Endovascular Brain-Computer Interface (Stentrode) Implantation via Transvenous Jugular Route",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM149A",
    "rghsCode": "693 / 91 / 59",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Endovascular Brain-Computer Interface (Stentrode) Implantation via Transvenous Jugular Route refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Endovascular Brain-Computer Interface (Stentrode) Implantation via Transvenous Jugular Route.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-catheter-directed-transvenous-splanchnic-nerve",
    "name": "Catheter-Directed Transvenous Splanchnic Nerve Denervation for Heart Failure",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM469A",
    "rghsCode": "693 / 91 / 29",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Catheter-Directed Transvenous Splanchnic Nerve Denervation for Heart Failure refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Catheter-Directed Transvenous Splanchnic Nerve Denervation for Heart Failure.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-transcatheter-pulmonary-vein-isolation-and",
    "name": "Transcatheter Pulmonary Vein Isolation and Cryoablation for Atrial Fibrillation",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM385A",
    "rghsCode": "693 / 91 / 45",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Transcatheter Pulmonary Vein Isolation and Cryoablation for Atrial Fibrillation refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Pulmonary Vein Isolation and Cryoablation for Atrial Fibrillation.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-endovascular-pulmonary-trunk-radiofrequency-denervation",
    "name": "Endovascular Pulmonary Trunk Radiofrequency Denervation for Pulmonary Hypertension",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM394A",
    "rghsCode": "693 / 91 / 54",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Endovascular Pulmonary Trunk Radiofrequency Denervation for Pulmonary Hypertension refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Endovascular Pulmonary Trunk Radiofrequency Denervation for Pulmonary Hypertension.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-biodegradable-drug-eluting-endovascular-scaffold",
    "name": "Biodegradable Drug-Eluting Endovascular Scaffold Implantation",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM613A",
    "rghsCode": "693 / 91 / 23",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Biodegradable Drug-Eluting Endovascular Scaffold Implantation refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Biodegradable Drug-Eluting Endovascular Scaffold Implantation.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-percutaneous-ultrasound-guided-augmented-reality",
    "name": "Percutaneous Ultrasound-Guided Augmented Reality Navigated Core Biopsy",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM634A",
    "rghsCode": "693 / 91 / 44",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Percutaneous Ultrasound-Guided Augmented Reality Navigated Core Biopsy refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Ultrasound-Guided Augmented Reality Navigated Core Biopsy.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-cone-beam-ct-virtual-roadmapping",
    "name": "Cone-Beam CT (CBCT) Virtual Roadmapping-Guided Lung Nodule Microcoil Localization",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM683A",
    "rghsCode": "693 / 91 / 43",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Cone-Beam CT (CBCT) Virtual Roadmapping-Guided Lung Nodule Microcoil Localization refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Cone-Beam CT (CBCT) Virtual Roadmapping-Guided Lung Nodule Microcoil Localization.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-endovascular-robotic-assisted-peripheral-arterial",
    "name": "Endovascular Robotic-Assisted Peripheral Arterial Stenting (Corindus Vascular Robotics)",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM136A",
    "rghsCode": "693 / 91 / 46",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Endovascular Robotic-Assisted Peripheral Arterial Stenting (Corindus Vascular Robotics) refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Endovascular Robotic-Assisted Peripheral Arterial Stenting (Corindus Vascular Robotics).",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-endovascular-robotic-assisted-coronary-and",
    "name": "Endovascular Robotic-Assisted Coronary and Carotid Interventions",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM254A",
    "rghsCode": "693 / 91 / 14",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Endovascular Robotic-Assisted Coronary and Carotid Interventions refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Endovascular Robotic-Assisted Coronary and Carotid Interventions.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-targeted-endovascular-gene-viral-vector",
    "name": "Targeted Endovascular Gene-Viral Vector Delivery using Microcatheter Infusion",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM618A",
    "rghsCode": "693 / 91 / 28",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Targeted Endovascular Gene-Viral Vector Delivery using Microcatheter Infusion refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Targeted Endovascular Gene-Viral Vector Delivery using Microcatheter Infusion.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-endovascular-transvenous-cardiac-pacemaker-lead",
    "name": "Endovascular Transvenous Cardiac Pacemaker Lead Extraction",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM318A",
    "rghsCode": "693 / 91 / 28",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Endovascular Transvenous Cardiac Pacemaker Lead Extraction refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Endovascular Transvenous Cardiac Pacemaker Lead Extraction.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-percutaneous-suture-mediated-patent-foramen",
    "name": "Percutaneous Suture-Mediated Patent Foramen Ovale (PFO) Closure",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM173A",
    "rghsCode": "693 / 91 / 33",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Percutaneous Suture-Mediated Patent Foramen Ovale (PFO) Closure refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Suture-Mediated Patent Foramen Ovale (PFO) Closure.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-transcatheter-pulmonary-embolectomy-with-smart",
    "name": "Transcatheter Pulmonary Embolectomy with Smart Automated Sensing (Penumbra Lightning Flash)",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM392A",
    "rghsCode": "693 / 91 / 52",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Transcatheter Pulmonary Embolectomy with Smart Automated Sensing (Penumbra Lightning Flash) refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Pulmonary Embolectomy with Smart Automated Sensing (Penumbra Lightning Flash).",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-percutaneous-hydrogel-spacer-injection-prior",
    "name": "Percutaneous Hydrogel Spacer (SpaceOAR) Injection Prior to Prostate Radiotherapy",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM222A",
    "rghsCode": "693 / 91 / 32",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Percutaneous Hydrogel Spacer (SpaceOAR) Injection Prior to Prostate Radiotherapy refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Hydrogel Spacer (SpaceOAR) Injection Prior to Prostate Radiotherapy.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-ultrasound-guided-contrast-enhanced-sentinel",
    "name": "Ultrasound-Guided Contrast-Enhanced Sentinel Lymph Node Localization and Biopsy",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM866A",
    "rghsCode": "693 / 91 / 26",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Ultrasound-Guided Contrast-Enhanced Sentinel Lymph Node Localization and Biopsy refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Ultrasound-Guided Contrast-Enhanced Sentinel Lymph Node Localization and Biopsy.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-ultrasound-guided-radiofrequency-ablation-for",
    "name": "Ultrasound-Guided Radiofrequency Ablation for Chronic Sacroiliac Joint Pain (Simplicity Probe)",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM195A",
    "rghsCode": "693 / 91 / 55",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Ultrasound-Guided Radiofrequency Ablation for Chronic Sacroiliac Joint Pain (Simplicity Probe) refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Ultrasound-Guided Radiofrequency Ablation for Chronic Sacroiliac Joint Pain (Simplicity Probe).",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-endovascular-interventional-creation-of-hemodialysis",
    "name": "Endovascular Interventional Creation of Hemodialysis Arteriovenous Fistula with Thermal Energy",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM541A",
    "rghsCode": "693 / 91 / 51",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Endovascular Interventional Creation of Hemodialysis Arteriovenous Fistula with Thermal Energy refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Endovascular Interventional Creation of Hemodialysis Arteriovenous Fistula with Thermal Energy.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  },
  {
    "id": "c22-fluoroscopically-guided-targeted-epidural-patching",
    "name": "Fluoroscopically-Guided Targeted Epidural Patching of Spinal CSF Leaks with Cryoprecipitate/Fibrin Glue",
    "category": "Emerging, Novel & Hybrid Interventions",
    "code": "2849-EM811A",
    "rghsCode": "693 / 91 / 21",
    "icd10": "Z98.89 (Other specified postprocedural states) / E66.01 (Morbid obesity)",
    "indications": [
      "Clinically documented indication for Fluoroscopically-Guided Targeted Epidural Patching of Spinal CSF Leaks with Cryoprecipitate/Fibrin Glue refractory to conservative medical management.",
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
        "category": "Advanced Navigation",
        "name": "Electromagnetic / Optical Tracking Sensor & Fusion Software",
        "spec": "Real-time CBCT / MRI co-registration",
        "standardStore": "Hybrid OR Console"
      },
      {
        "category": "Specialized Delivery System",
        "name": "Micro-Robotic Catheter Driver / High-Intensity Ultrasound Array",
        "spec": "Precision remote manipulation",
        "standardStore": "Advanced Robotics Lab"
      },
      {
        "category": "Bio-Engineered Agents",
        "name": "Bioresorbable Scaffold / Hydrogel Spacer (SpaceOAR)",
        "spec": "Dual-syringe applicator kit",
        "standardStore": "Specialized IR Store"
      },
      {
        "category": "Digital Telemetry",
        "name": "Smart Pressure-Sensor Guidewire",
        "spec": "Wireless hemodynamic continuous telemetry",
        "standardStore": "Cath Lab Control Room"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Fluoroscopically-Guided Targeted Epidural Patching of Spinal CSF Leaks with Cryoprecipitate/Fibrin Glue.",
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
    "maayTariffInr": 75000,
    "vendorContacts": [
      "Siemens Healthineers (+91 98290 77889)",
      "Boston Scientific (+91 98291 22334)"
    ]
  }
];
