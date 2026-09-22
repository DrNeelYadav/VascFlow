import { ProcedureBlueprint } from '../../types/clinical';

/**
 * SMS Medical College & Attached Hospitals, Jaipur
 * Department of Radiodiagnosis & Interventional Radiology
 *
 * Master Catalog for Category 16 (Neurovascular Surgery) and Category 17 (Endocrine, Head & Neck Interventions)
 */

export const NEURO_AND_HEAD_NECK_PROCEDURES: ProcedureBlueprint[] = [
  {
    "id": "c16-diagnostic-four-vessel-cerebral-digital",
    "name": "Diagnostic Four-Vessel Cerebral Digital Subtraction Angiography (DSA)",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR721A",
    "rghsCode": "694 / 31",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Diagnostic Four-Vessel Cerebral Digital Subtraction Angiography (DSA) refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Diagnostic Four-Vessel Cerebral Digital Subtraction Angiography (DSA).",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-mechanical-thrombectomy-for-acute-ischemic",
    "name": "Mechanical Thrombectomy for Acute Ischemic Stroke using Stent Retrievers (Solitaire / Trevo)",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR642A",
    "rghsCode": "694 / 52",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Mechanical Thrombectomy for Acute Ischemic Stroke using Stent Retrievers (Solitaire / Trevo) refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Mechanical Thrombectomy for Acute Ischemic Stroke using Stent Retrievers (Solitaire / Trevo).",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-contact-aspiration-mechanical-thrombectomy-for",
    "name": "Contact Aspiration Mechanical Thrombectomy for Stroke (ADAPT Technique)",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR620A",
    "rghsCode": "694 / 30",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Contact Aspiration Mechanical Thrombectomy for Stroke (ADAPT Technique) refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Contact Aspiration Mechanical Thrombectomy for Stroke (ADAPT Technique).",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-combined-stent-retriever-and-direct",
    "name": "Combined Stent Retriever and Direct Aspiration Technique (SAVE / CAPTIVE)",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR361A",
    "rghsCode": "694 / 21",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Combined Stent Retriever and Direct Aspiration Technique (SAVE / CAPTIVE) refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Combined Stent Retriever and Direct Aspiration Technique (SAVE / CAPTIVE).",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-superselective-intra-arterial-thrombolysis-for",
    "name": "Superselective Intra-Arterial Thrombolysis (rtPA) for Acute Cerebral Infarction",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR317A",
    "rghsCode": "694 / 27",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Superselective Intra-Arterial Thrombolysis (rtPA) for Acute Cerebral Infarction refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Superselective Intra-Arterial Thrombolysis (rtPA) for Acute Cerebral Infarction.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-emergent-intracranial-angioplasty-and-stenting",
    "name": "Emergent Intracranial Angioplasty and Stenting for Acute Tandem Stroke Occlusions",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR199A",
    "rghsCode": "694 / 59",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Emergent Intracranial Angioplasty and Stenting for Acute Tandem Stroke Occlusions refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Emergent Intracranial Angioplasty and Stenting for Acute Tandem Stroke Occlusions.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-endovascular-embolization-of-intracranial-aneurysms",
    "name": "Endovascular Embolization of Intracranial Aneurysms with Detachable Bare Platinum Coils",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR691A",
    "rghsCode": "694 / 51",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Endovascular Embolization of Intracranial Aneurysms with Detachable Bare Platinum Coils refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Endovascular Embolization of Intracranial Aneurysms with Detachable Bare Platinum Coils.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-balloon-assisted-coil-embolization-for",
    "name": "Balloon-Assisted Coil Embolization (BACE) for Wide-Neck Cerebral Aneurysms",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR221A",
    "rghsCode": "694 / 31",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Balloon-Assisted Coil Embolization (BACE) for Wide-Neck Cerebral Aneurysms refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Balloon-Assisted Coil Embolization (BACE) for Wide-Neck Cerebral Aneurysms.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-stent-assisted-coil-embolization-for",
    "name": "Stent-Assisted Coil Embolization (SACE) for Complex Intracranial Aneurysms",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR815A",
    "rghsCode": "694 / 25",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Stent-Assisted Coil Embolization (SACE) for Complex Intracranial Aneurysms refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Stent-Assisted Coil Embolization (SACE) for Complex Intracranial Aneurysms.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-flow-diverter-embolization-for-unruptured",
    "name": "Flow-Diverter Embolization (Pipeline, Surpass, FRED, Silk) for Unruptured Wide-Neck Aneurysms",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR580A",
    "rghsCode": "694 / 40",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Flow-Diverter Embolization (Pipeline, Surpass, FRED, Silk) for Unruptured Wide-Neck Aneurysms refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Flow-Diverter Embolization (Pipeline, Surpass, FRED, Silk) for Unruptured Wide-Neck Aneurysms.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-endosaccular-flow-disruption-using-the",
    "name": "Endosaccular Flow Disruption using the Woven EndoBridge (WEB) Device",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR766A",
    "rghsCode": "694 / 26",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Endosaccular Flow Disruption using the Woven EndoBridge (WEB) Device refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Endosaccular Flow Disruption using the Woven EndoBridge (WEB) Device.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-intrasaccular-contour-neurovascular-system-implantation",
    "name": "Intrasaccular Contour Neurovascular System Implantation",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR581A",
    "rghsCode": "694 / 41",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Intrasaccular Contour Neurovascular System Implantation refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Intrasaccular Contour Neurovascular System Implantation.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-therapeutic-parent-vessel-occlusion-with",
    "name": "Therapeutic Parent Vessel Occlusion (PVO) with Balloon Test Occlusion (BTO)",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR151A",
    "rghsCode": "694 / 11",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Therapeutic Parent Vessel Occlusion (PVO) with Balloon Test Occlusion (BTO) refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Therapeutic Parent Vessel Occlusion (PVO) with Balloon Test Occlusion (BTO).",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-transarterial-onyx-squid-embolization-of",
    "name": "Transarterial Onyx / Squid Embolization of Brain Arteriovenous Malformations (bAVM)",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR222A",
    "rghsCode": "694 / 32",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Transarterial Onyx / Squid Embolization of Brain Arteriovenous Malformations (bAVM) refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Onyx / Squid Embolization of Brain Arteriovenous Malformations (bAVM).",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-transarterial-phil-embolization-of-bavms",
    "name": "Transarterial PHIL Embolization of bAVMs",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR574A",
    "rghsCode": "694 / 34",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Transarterial PHIL Embolization of bAVMs refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial PHIL Embolization of bAVMs.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-transvenous-retrograde-embolization-of-ruptured",
    "name": "Transvenous Retrograde Embolization of Ruptured Brain AVMs",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR929A",
    "rghsCode": "694 / 39",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Transvenous Retrograde Embolization of Ruptured Brain AVMs refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transvenous Retrograde Embolization of Ruptured Brain AVMs.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-transarterial-embolization-of-dural-arteriovenous",
    "name": "Transarterial Embolization of Dural Arteriovenous Fistulae (dAVF)",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR859A",
    "rghsCode": "694 / 19",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Transarterial Embolization of Dural Arteriovenous Fistulae (dAVF) refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Embolization of Dural Arteriovenous Fistulae (dAVF).",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-transvenous-sinus-coil-and-liquid",
    "name": "Transvenous Sinus Coil and Liquid Embolic Occlusion of Cranial dAVFs",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR997A",
    "rghsCode": "694 / 57",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Transvenous Sinus Coil and Liquid Embolic Occlusion of Cranial dAVFs refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transvenous Sinus Coil and Liquid Embolic Occlusion of Cranial dAVFs.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-transorbital-direct-superior-ophthalmic-vein",
    "name": "Transorbital / Direct Superior Ophthalmic Vein Puncture for Carotid-Cavernous Fistula (CCF)",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR489A",
    "rghsCode": "694 / 49",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Transorbital / Direct Superior Ophthalmic Vein Puncture for Carotid-Cavernous Fistula (CCF) refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transorbital / Direct Superior Ophthalmic Vein Puncture for Carotid-Cavernous Fistula (CCF).",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-transfemoral-transvenous-occlusion-of-direct",
    "name": "Transfemoral Transvenous Occlusion of Direct and Indirect CCFs",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR263A",
    "rghsCode": "694 / 23",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Transfemoral Transvenous Occlusion of Direct and Indirect CCFs refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transfemoral Transvenous Occlusion of Direct and Indirect CCFs.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-transarterial-embolization-of-vein-of",
    "name": "Transarterial Embolization of Vein of Galen Aneurysmal Malformations (VGAM) in Neonates",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR686A",
    "rghsCode": "694 / 46",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Transarterial Embolization of Vein of Galen Aneurysmal Malformations (VGAM) in Neonates refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transarterial Embolization of Vein of Galen Aneurysmal Malformations (VGAM) in Neonates.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-transcatheter-embolization-of-spinal-dural",
    "name": "Transcatheter Embolization of Spinal Dural Arteriovenous Fistulae (SDAVF)",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR542A",
    "rghsCode": "694 / 52",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Transcatheter Embolization of Spinal Dural Arteriovenous Fistulae (SDAVF) refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Embolization of Spinal Dural Arteriovenous Fistulae (SDAVF).",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-extracranial-carotid-artery-stenting-with",
    "name": "Extracranial Carotid Artery Stenting (CAS) with Distal Filter Embolic Protection",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR833A",
    "rghsCode": "694 / 43",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Extracranial Carotid Artery Stenting (CAS) with Distal Filter Embolic Protection refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Extracranial Carotid Artery Stenting (CAS) with Distal Filter Embolic Protection.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-transcarotid-artery-revascularization-with-dynamic",
    "name": "Transcarotid Artery Revascularization (TCAR) with Dynamic Flow Reversal",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR844A",
    "rghsCode": "694 / 54",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Transcarotid Artery Revascularization (TCAR) with Dynamic Flow Reversal refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcarotid Artery Revascularization (TCAR) with Dynamic Flow Reversal.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-carotid-stenting-with-proximal-balloon",
    "name": "Carotid Stenting with Proximal Balloon Occlusion Protection (Mo.Ma System)",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR894A",
    "rghsCode": "694 / 54",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Carotid Stenting with Proximal Balloon Occlusion Protection (Mo.Ma System) refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Carotid Stenting with Proximal Balloon Occlusion Protection (Mo.Ma System).",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-extracranial-vertebral-artery-origin-angioplasty",
    "name": "Extracranial Vertebral Artery Origin Angioplasty and Stenting",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR400A",
    "rghsCode": "694 / 10",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Extracranial Vertebral Artery Origin Angioplasty and Stenting refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Extracranial Vertebral Artery Origin Angioplasty and Stenting.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-subclavian-steal-syndrome-balloon-angioplasty",
    "name": "Subclavian Steal Syndrome Balloon Angioplasty and Stenting",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR648A",
    "rghsCode": "694 / 58",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Subclavian Steal Syndrome Balloon Angioplasty and Stenting refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Subclavian Steal Syndrome Balloon Angioplasty and Stenting.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-intracranial-atherosclerotic-stenosis-balloon-angioplasty",
    "name": "Intracranial Atherosclerotic Stenosis (ICAS) Balloon Angioplasty (Gateway Balloon)",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR525A",
    "rghsCode": "694 / 35",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Intracranial Atherosclerotic Stenosis (ICAS) Balloon Angioplasty (Gateway Balloon) refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Intracranial Atherosclerotic Stenosis (ICAS) Balloon Angioplasty (Gateway Balloon).",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-intracranial-stenting-for-icas",
    "name": "Intracranial Stenting for ICAS (Wingspan Stent System)",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR495A",
    "rghsCode": "694 / 55",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Intracranial Stenting for ICAS (Wingspan Stent System) refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Intracranial Stenting for ICAS (Wingspan Stent System).",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-middle-meningeal-artery-embolization-for",
    "name": "Middle Meningeal Artery (MMA) Embolization for Subacute and Chronic Subdural Hematoma (SDH)",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR957A",
    "rghsCode": "694 / 17",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Middle Meningeal Artery (MMA) Embolization for Subacute and Chronic Subdural Hematoma (SDH) refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Middle Meningeal Artery (MMA) Embolization for Subacute and Chronic Subdural Hematoma (SDH).",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-dural-venous-sinus-stenting-for",
    "name": "Dural Venous Sinus Stenting for Idiopathic Intracranial Hypertension (IIH)",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR662A",
    "rghsCode": "694 / 22",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Dural Venous Sinus Stenting for Idiopathic Intracranial Hypertension (IIH) refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Dural Venous Sinus Stenting for Idiopathic Intracranial Hypertension (IIH).",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-catheter-directed-thrombolysis-and-thrombectomy",
    "name": "Catheter-Directed Thrombolysis and Thrombectomy for Cerebral Venous Sinus Thrombosis (CVST)",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR978A",
    "rghsCode": "694 / 38",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Catheter-Directed Thrombolysis and Thrombectomy for Cerebral Venous Sinus Thrombosis (CVST) refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Catheter-Directed Thrombolysis and Thrombectomy for Cerebral Venous Sinus Thrombosis (CVST).",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-inferior-petrosal-sinus-sampling-for",
    "name": "Inferior Petrosal Sinus Sampling (IPSS) for ACTH-Dependent Cushing's Syndrome",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR772A",
    "rghsCode": "694 / 32",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Inferior Petrosal Sinus Sampling (IPSS) for ACTH-Dependent Cushing's Syndrome refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Inferior Petrosal Sinus Sampling (IPSS) for ACTH-Dependent Cushing's Syndrome.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-embolization-of-spinal-arteriovenous-malformations",
    "name": "Embolization of Spinal Arteriovenous Malformations (Glomus / Juvenile Types)",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR590A",
    "rghsCode": "694 / 50",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Embolization of Spinal Arteriovenous Malformations (Glomus / Juvenile Types) refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Embolization of Spinal Arteriovenous Malformations (Glomus / Juvenile Types).",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c16-embolization-of-csf-venous-fistulas",
    "name": "Embolization of CSF-Venous Fistulas with Onyx / Glue for Intracranial Hypotension",
    "category": "Neurovascular & Neurointerventional Surgery",
    "code": "2849-NR733A",
    "rghsCode": "694 / 43",
    "icd10": "I63.9 (Cerebral infarction) / I60.9 (Subarachnoid hemorrhage)",
    "indications": [
      "Clinically documented indication for Embolization of CSF-Venous Fistulas with Onyx / Glue for Intracranial Hypotension refractory to conservative medical management.",
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
        "name": "6F / 8F Femoral or Radial Sheath",
        "spec": "90 cm - 100 cm Guiding Sheath (Neuron MAX / Infinity)",
        "standardStore": "Neuro IR Angio Suite"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 2 Catheter",
        "spec": "100 cm 0.038 lumen",
        "standardStore": "Neuro IR Console"
      },
      {
        "category": "Microcatheter",
        "name": "Excelsior SL-10 / Prowler Select Plus / Duo",
        "spec": "150 cm length with 0.014 Syncro guidewire",
        "standardStore": "DDC-14 Neuro Store"
      },
      {
        "category": "Therapeutic Device",
        "name": "Neurovascular Stent Retriever / Microcoils / Liquid Embolic (Onyx/Squid)",
        "spec": "Solitaire / Trevo / TARGET coils",
        "standardStore": "Cath Lab High-Security Locker"
      },
      {
        "category": "Hemostasis",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F / 8F arteriotomy closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Embolization of CSF-Venous Fistulas with Onyx / Glue for Intracranial Hypotension.",
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
    "maayTariffInr": 85000,
    "vendorContacts": [
      "Medtronic Neurovascular (+91 98290 33445)",
      "Stryker India Neuro (+91 98291 77889)",
      "MicroVention India (+91 98292 11223)"
    ]
  },
  {
    "id": "c17-thyroid-artery-embolization-for-massive",
    "name": "Thyroid Artery Embolization (TAE) for Massive Non-toxic Multinodular Goiter",
    "category": "Endocrine, Head & Neck Interventions",
    "code": "2849-EN745A",
    "rghsCode": "693 / 52 / 55",
    "icd10": "E04.1 (Thyroid nodule) / E26.0 (Primary aldosteronism)",
    "indications": [
      "Clinically documented indication for Thyroid Artery Embolization (TAE) for Massive Non-toxic Multinodular Goiter refractory to conservative medical management.",
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
        "category": "Vascular / Percutaneous Access",
        "name": "4F-5F Radial / Femoral Introducer Sheath or 18G Coaxial Needle",
        "spec": "Echo-enhanced access set",
        "standardStore": "Head & Neck IR Unit"
      },
      {
        "category": "Ablation / Sampling Catheter",
        "name": "Thyroid RFA Electrode / Adrenal Venous Sampling Catheter",
        "spec": "18G 7cm internally-cooled needle / 4F Simmons-1",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Ultrasound Guidance",
        "name": "High-Frequency Linear Hockey-Stick Probe",
        "spec": "7.5 - 15.0 MHz dedicated neck transducer",
        "standardStore": "Room 922 USG"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "Perithyroidal / perivascular sensory block",
        "standardStore": "IR Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Thyroid Artery Embolization (TAE) for Massive Non-toxic Multinodular Goiter.",
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
    "maayTariffInr": 35000,
    "vendorContacts": [
      "RF Medical India (+91 98293 44556)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c17-thyroid-artery-embolization-for-refractory",
    "name": "Thyroid Artery Embolization for Refractory Graves' Disease",
    "category": "Endocrine, Head & Neck Interventions",
    "code": "2849-EN655A",
    "rghsCode": "693 / 52 / 15",
    "icd10": "E04.1 (Thyroid nodule) / E26.0 (Primary aldosteronism)",
    "indications": [
      "Clinically documented indication for Thyroid Artery Embolization for Refractory Graves' Disease refractory to conservative medical management.",
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
        "category": "Vascular / Percutaneous Access",
        "name": "4F-5F Radial / Femoral Introducer Sheath or 18G Coaxial Needle",
        "spec": "Echo-enhanced access set",
        "standardStore": "Head & Neck IR Unit"
      },
      {
        "category": "Ablation / Sampling Catheter",
        "name": "Thyroid RFA Electrode / Adrenal Venous Sampling Catheter",
        "spec": "18G 7cm internally-cooled needle / 4F Simmons-1",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Ultrasound Guidance",
        "name": "High-Frequency Linear Hockey-Stick Probe",
        "spec": "7.5 - 15.0 MHz dedicated neck transducer",
        "standardStore": "Room 922 USG"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "Perithyroidal / perivascular sensory block",
        "standardStore": "IR Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Thyroid Artery Embolization for Refractory Graves' Disease.",
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
    "maayTariffInr": 35000,
    "vendorContacts": [
      "RF Medical India (+91 98293 44556)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c17-ultrasound-guided-radiofrequency-ablation-of",
    "name": "Ultrasound-Guided Radiofrequency Ablation (RFA) of Benign Solid Thyroid Nodules",
    "category": "Endocrine, Head & Neck Interventions",
    "code": "2849-EN561A",
    "rghsCode": "693 / 52 / 21",
    "icd10": "E04.1 (Thyroid nodule) / E26.0 (Primary aldosteronism)",
    "indications": [
      "Clinically documented indication for Ultrasound-Guided Radiofrequency Ablation (RFA) of Benign Solid Thyroid Nodules refractory to conservative medical management.",
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
        "category": "Vascular / Percutaneous Access",
        "name": "4F-5F Radial / Femoral Introducer Sheath or 18G Coaxial Needle",
        "spec": "Echo-enhanced access set",
        "standardStore": "Head & Neck IR Unit"
      },
      {
        "category": "Ablation / Sampling Catheter",
        "name": "Thyroid RFA Electrode / Adrenal Venous Sampling Catheter",
        "spec": "18G 7cm internally-cooled needle / 4F Simmons-1",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Ultrasound Guidance",
        "name": "High-Frequency Linear Hockey-Stick Probe",
        "spec": "7.5 - 15.0 MHz dedicated neck transducer",
        "standardStore": "Room 922 USG"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "Perithyroidal / perivascular sensory block",
        "standardStore": "IR Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Ultrasound-Guided Radiofrequency Ablation (RFA) of Benign Solid Thyroid Nodules.",
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
    "maayTariffInr": 35000,
    "vendorContacts": [
      "RF Medical India (+91 98293 44556)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c17-percutaneous-microwave-ablation-of-benign",
    "name": "Percutaneous Microwave Ablation (MWA) of Benign Thyroid Nodules",
    "category": "Endocrine, Head & Neck Interventions",
    "code": "2849-EN971A",
    "rghsCode": "693 / 52 / 31",
    "icd10": "E04.1 (Thyroid nodule) / E26.0 (Primary aldosteronism)",
    "indications": [
      "Clinically documented indication for Percutaneous Microwave Ablation (MWA) of Benign Thyroid Nodules refractory to conservative medical management.",
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
        "category": "Vascular / Percutaneous Access",
        "name": "4F-5F Radial / Femoral Introducer Sheath or 18G Coaxial Needle",
        "spec": "Echo-enhanced access set",
        "standardStore": "Head & Neck IR Unit"
      },
      {
        "category": "Ablation / Sampling Catheter",
        "name": "Thyroid RFA Electrode / Adrenal Venous Sampling Catheter",
        "spec": "18G 7cm internally-cooled needle / 4F Simmons-1",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Ultrasound Guidance",
        "name": "High-Frequency Linear Hockey-Stick Probe",
        "spec": "7.5 - 15.0 MHz dedicated neck transducer",
        "standardStore": "Room 922 USG"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "Perithyroidal / perivascular sensory block",
        "standardStore": "IR Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Microwave Ablation (MWA) of Benign Thyroid Nodules.",
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
    "maayTariffInr": 35000,
    "vendorContacts": [
      "RF Medical India (+91 98293 44556)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c17-percutaneous-laser-ablation-of-cold",
    "name": "Percutaneous Laser Ablation (PLA) of Cold Thyroid Nodules",
    "category": "Endocrine, Head & Neck Interventions",
    "code": "2849-EN657A",
    "rghsCode": "693 / 52 / 17",
    "icd10": "E04.1 (Thyroid nodule) / E26.0 (Primary aldosteronism)",
    "indications": [
      "Clinically documented indication for Percutaneous Laser Ablation (PLA) of Cold Thyroid Nodules refractory to conservative medical management.",
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
        "category": "Vascular / Percutaneous Access",
        "name": "4F-5F Radial / Femoral Introducer Sheath or 18G Coaxial Needle",
        "spec": "Echo-enhanced access set",
        "standardStore": "Head & Neck IR Unit"
      },
      {
        "category": "Ablation / Sampling Catheter",
        "name": "Thyroid RFA Electrode / Adrenal Venous Sampling Catheter",
        "spec": "18G 7cm internally-cooled needle / 4F Simmons-1",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Ultrasound Guidance",
        "name": "High-Frequency Linear Hockey-Stick Probe",
        "spec": "7.5 - 15.0 MHz dedicated neck transducer",
        "standardStore": "Room 922 USG"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "Perithyroidal / perivascular sensory block",
        "standardStore": "IR Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Laser Ablation (PLA) of Cold Thyroid Nodules.",
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
    "maayTariffInr": 35000,
    "vendorContacts": [
      "RF Medical India (+91 98293 44556)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c17-percutaneous-ethanol-injection-of-toxic",
    "name": "Percutaneous Ethanol Injection (PEI) of Toxic / Non-Toxic Thyroid Cysts",
    "category": "Endocrine, Head & Neck Interventions",
    "code": "2849-EN387A",
    "rghsCode": "693 / 52 / 47",
    "icd10": "E04.1 (Thyroid nodule) / E26.0 (Primary aldosteronism)",
    "indications": [
      "Clinically documented indication for Percutaneous Ethanol Injection (PEI) of Toxic / Non-Toxic Thyroid Cysts refractory to conservative medical management.",
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
        "category": "Vascular / Percutaneous Access",
        "name": "4F-5F Radial / Femoral Introducer Sheath or 18G Coaxial Needle",
        "spec": "Echo-enhanced access set",
        "standardStore": "Head & Neck IR Unit"
      },
      {
        "category": "Ablation / Sampling Catheter",
        "name": "Thyroid RFA Electrode / Adrenal Venous Sampling Catheter",
        "spec": "18G 7cm internally-cooled needle / 4F Simmons-1",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Ultrasound Guidance",
        "name": "High-Frequency Linear Hockey-Stick Probe",
        "spec": "7.5 - 15.0 MHz dedicated neck transducer",
        "standardStore": "Room 922 USG"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "Perithyroidal / perivascular sensory block",
        "standardStore": "IR Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Ethanol Injection (PEI) of Toxic / Non-Toxic Thyroid Cysts.",
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
    "maayTariffInr": 35000,
    "vendorContacts": [
      "RF Medical India (+91 98293 44556)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c17-percutaneous-cryoablation-of-locally-recurrent",
    "name": "Percutaneous Cryoablation of Locally Recurrent Thyroid Carcinoma",
    "category": "Endocrine, Head & Neck Interventions",
    "code": "2849-EN490A",
    "rghsCode": "693 / 52 / 50",
    "icd10": "E04.1 (Thyroid nodule) / E26.0 (Primary aldosteronism)",
    "indications": [
      "Clinically documented indication for Percutaneous Cryoablation of Locally Recurrent Thyroid Carcinoma refractory to conservative medical management.",
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
        "category": "Vascular / Percutaneous Access",
        "name": "4F-5F Radial / Femoral Introducer Sheath or 18G Coaxial Needle",
        "spec": "Echo-enhanced access set",
        "standardStore": "Head & Neck IR Unit"
      },
      {
        "category": "Ablation / Sampling Catheter",
        "name": "Thyroid RFA Electrode / Adrenal Venous Sampling Catheter",
        "spec": "18G 7cm internally-cooled needle / 4F Simmons-1",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Ultrasound Guidance",
        "name": "High-Frequency Linear Hockey-Stick Probe",
        "spec": "7.5 - 15.0 MHz dedicated neck transducer",
        "standardStore": "Room 922 USG"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "Perithyroidal / perivascular sensory block",
        "standardStore": "IR Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Cryoablation of Locally Recurrent Thyroid Carcinoma.",
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
    "maayTariffInr": 35000,
    "vendorContacts": [
      "RF Medical India (+91 98293 44556)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c17-ultrasound-guided-radiofrequency-ablation-of-proc43",
    "name": "Ultrasound-Guided Radiofrequency Ablation of Secondary Hyperparathyroidism",
    "category": "Endocrine, Head & Neck Interventions",
    "code": "2849-EN971A",
    "rghsCode": "693 / 52 / 31",
    "icd10": "E04.1 (Thyroid nodule) / E26.0 (Primary aldosteronism)",
    "indications": [
      "Clinically documented indication for Ultrasound-Guided Radiofrequency Ablation of Secondary Hyperparathyroidism refractory to conservative medical management.",
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
        "category": "Vascular / Percutaneous Access",
        "name": "4F-5F Radial / Femoral Introducer Sheath or 18G Coaxial Needle",
        "spec": "Echo-enhanced access set",
        "standardStore": "Head & Neck IR Unit"
      },
      {
        "category": "Ablation / Sampling Catheter",
        "name": "Thyroid RFA Electrode / Adrenal Venous Sampling Catheter",
        "spec": "18G 7cm internally-cooled needle / 4F Simmons-1",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Ultrasound Guidance",
        "name": "High-Frequency Linear Hockey-Stick Probe",
        "spec": "7.5 - 15.0 MHz dedicated neck transducer",
        "standardStore": "Room 922 USG"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "Perithyroidal / perivascular sensory block",
        "standardStore": "IR Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Ultrasound-Guided Radiofrequency Ablation of Secondary Hyperparathyroidism.",
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
    "maayTariffInr": 35000,
    "vendorContacts": [
      "RF Medical India (+91 98293 44556)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c17-percutaneous-ethanol-injection-of-hyperfunctioning",
    "name": "Percutaneous Ethanol Injection of Hyperfunctioning Parathyroid Adenoma",
    "category": "Endocrine, Head & Neck Interventions",
    "code": "2849-EN707A",
    "rghsCode": "693 / 52 / 17",
    "icd10": "E04.1 (Thyroid nodule) / E26.0 (Primary aldosteronism)",
    "indications": [
      "Clinically documented indication for Percutaneous Ethanol Injection of Hyperfunctioning Parathyroid Adenoma refractory to conservative medical management.",
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
        "category": "Vascular / Percutaneous Access",
        "name": "4F-5F Radial / Femoral Introducer Sheath or 18G Coaxial Needle",
        "spec": "Echo-enhanced access set",
        "standardStore": "Head & Neck IR Unit"
      },
      {
        "category": "Ablation / Sampling Catheter",
        "name": "Thyroid RFA Electrode / Adrenal Venous Sampling Catheter",
        "spec": "18G 7cm internally-cooled needle / 4F Simmons-1",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Ultrasound Guidance",
        "name": "High-Frequency Linear Hockey-Stick Probe",
        "spec": "7.5 - 15.0 MHz dedicated neck transducer",
        "standardStore": "Room 922 USG"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "Perithyroidal / perivascular sensory block",
        "standardStore": "IR Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Ethanol Injection of Hyperfunctioning Parathyroid Adenoma.",
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
    "maayTariffInr": 35000,
    "vendorContacts": [
      "RF Medical India (+91 98293 44556)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c17-selective-intra-arterial-parathyroid-embolization",
    "name": "Selective Intra-Arterial Parathyroid Embolization",
    "category": "Endocrine, Head & Neck Interventions",
    "code": "2849-EN775A",
    "rghsCode": "693 / 52 / 35",
    "icd10": "E04.1 (Thyroid nodule) / E26.0 (Primary aldosteronism)",
    "indications": [
      "Clinically documented indication for Selective Intra-Arterial Parathyroid Embolization refractory to conservative medical management.",
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
        "category": "Vascular / Percutaneous Access",
        "name": "4F-5F Radial / Femoral Introducer Sheath or 18G Coaxial Needle",
        "spec": "Echo-enhanced access set",
        "standardStore": "Head & Neck IR Unit"
      },
      {
        "category": "Ablation / Sampling Catheter",
        "name": "Thyroid RFA Electrode / Adrenal Venous Sampling Catheter",
        "spec": "18G 7cm internally-cooled needle / 4F Simmons-1",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Ultrasound Guidance",
        "name": "High-Frequency Linear Hockey-Stick Probe",
        "spec": "7.5 - 15.0 MHz dedicated neck transducer",
        "standardStore": "Room 922 USG"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "Perithyroidal / perivascular sensory block",
        "standardStore": "IR Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Selective Intra-Arterial Parathyroid Embolization.",
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
    "maayTariffInr": 35000,
    "vendorContacts": [
      "RF Medical India (+91 98293 44556)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c17-parathyroid-venous-sampling-with-rapid",
    "name": "Parathyroid Venous Sampling (PVS) with Rapid Intraoperative PTH Assay",
    "category": "Endocrine, Head & Neck Interventions",
    "code": "2849-EN494A",
    "rghsCode": "693 / 52 / 54",
    "icd10": "E04.1 (Thyroid nodule) / E26.0 (Primary aldosteronism)",
    "indications": [
      "Clinically documented indication for Parathyroid Venous Sampling (PVS) with Rapid Intraoperative PTH Assay refractory to conservative medical management.",
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
        "category": "Vascular / Percutaneous Access",
        "name": "4F-5F Radial / Femoral Introducer Sheath or 18G Coaxial Needle",
        "spec": "Echo-enhanced access set",
        "standardStore": "Head & Neck IR Unit"
      },
      {
        "category": "Ablation / Sampling Catheter",
        "name": "Thyroid RFA Electrode / Adrenal Venous Sampling Catheter",
        "spec": "18G 7cm internally-cooled needle / 4F Simmons-1",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Ultrasound Guidance",
        "name": "High-Frequency Linear Hockey-Stick Probe",
        "spec": "7.5 - 15.0 MHz dedicated neck transducer",
        "standardStore": "Room 922 USG"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "Perithyroidal / perivascular sensory block",
        "standardStore": "IR Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Parathyroid Venous Sampling (PVS) with Rapid Intraoperative PTH Assay.",
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
    "maayTariffInr": 35000,
    "vendorContacts": [
      "RF Medical India (+91 98293 44556)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c17-transcatheter-adrenal-artery-embolization-for",
    "name": "Transcatheter Adrenal Artery Embolization for Malignant Pheochromocytoma",
    "category": "Endocrine, Head & Neck Interventions",
    "code": "2849-EN718A",
    "rghsCode": "693 / 52 / 28",
    "icd10": "E04.1 (Thyroid nodule) / E26.0 (Primary aldosteronism)",
    "indications": [
      "Clinically documented indication for Transcatheter Adrenal Artery Embolization for Malignant Pheochromocytoma refractory to conservative medical management.",
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
        "category": "Vascular / Percutaneous Access",
        "name": "4F-5F Radial / Femoral Introducer Sheath or 18G Coaxial Needle",
        "spec": "Echo-enhanced access set",
        "standardStore": "Head & Neck IR Unit"
      },
      {
        "category": "Ablation / Sampling Catheter",
        "name": "Thyroid RFA Electrode / Adrenal Venous Sampling Catheter",
        "spec": "18G 7cm internally-cooled needle / 4F Simmons-1",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Ultrasound Guidance",
        "name": "High-Frequency Linear Hockey-Stick Probe",
        "spec": "7.5 - 15.0 MHz dedicated neck transducer",
        "standardStore": "Room 922 USG"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "Perithyroidal / perivascular sensory block",
        "standardStore": "IR Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Transcatheter Adrenal Artery Embolization for Malignant Pheochromocytoma.",
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
    "maayTariffInr": 35000,
    "vendorContacts": [
      "RF Medical India (+91 98293 44556)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c17-adrenal-vein-sampling-for-primary",
    "name": "Adrenal Vein Sampling (AVS) for Primary Aldosteronism (Conn's Syndrome)",
    "category": "Endocrine, Head & Neck Interventions",
    "code": "2849-EN421A",
    "rghsCode": "693 / 52 / 31",
    "icd10": "E04.1 (Thyroid nodule) / E26.0 (Primary aldosteronism)",
    "indications": [
      "Clinically documented indication for Adrenal Vein Sampling (AVS) for Primary Aldosteronism (Conn's Syndrome) refractory to conservative medical management.",
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
        "category": "Vascular / Percutaneous Access",
        "name": "4F-5F Radial / Femoral Introducer Sheath or 18G Coaxial Needle",
        "spec": "Echo-enhanced access set",
        "standardStore": "Head & Neck IR Unit"
      },
      {
        "category": "Ablation / Sampling Catheter",
        "name": "Thyroid RFA Electrode / Adrenal Venous Sampling Catheter",
        "spec": "18G 7cm internally-cooled needle / 4F Simmons-1",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Ultrasound Guidance",
        "name": "High-Frequency Linear Hockey-Stick Probe",
        "spec": "7.5 - 15.0 MHz dedicated neck transducer",
        "standardStore": "Room 922 USG"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "Perithyroidal / perivascular sensory block",
        "standardStore": "IR Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Adrenal Vein Sampling (AVS) for Primary Aldosteronism (Conn's Syndrome).",
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
    "maayTariffInr": 35000,
    "vendorContacts": [
      "RF Medical India (+91 98293 44556)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c17-percutaneous-sialolithiasis-extraction-under-fluoroscopic",
    "name": "Percutaneous Sialolithiasis Extraction under Fluoroscopic / Wire Basket Guidance",
    "category": "Endocrine, Head & Neck Interventions",
    "code": "2849-EN246A",
    "rghsCode": "693 / 52 / 56",
    "icd10": "E04.1 (Thyroid nodule) / E26.0 (Primary aldosteronism)",
    "indications": [
      "Clinically documented indication for Percutaneous Sialolithiasis Extraction under Fluoroscopic / Wire Basket Guidance refractory to conservative medical management.",
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
        "category": "Vascular / Percutaneous Access",
        "name": "4F-5F Radial / Femoral Introducer Sheath or 18G Coaxial Needle",
        "spec": "Echo-enhanced access set",
        "standardStore": "Head & Neck IR Unit"
      },
      {
        "category": "Ablation / Sampling Catheter",
        "name": "Thyroid RFA Electrode / Adrenal Venous Sampling Catheter",
        "spec": "18G 7cm internally-cooled needle / 4F Simmons-1",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Ultrasound Guidance",
        "name": "High-Frequency Linear Hockey-Stick Probe",
        "spec": "7.5 - 15.0 MHz dedicated neck transducer",
        "standardStore": "Room 922 USG"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "Perithyroidal / perivascular sensory block",
        "standardStore": "IR Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Percutaneous Sialolithiasis Extraction under Fluoroscopic / Wire Basket Guidance.",
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
    "maayTariffInr": 35000,
    "vendorContacts": [
      "RF Medical India (+91 98293 44556)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c17-fluoroscopy-guided-balloon-sialoplasty-for",
    "name": "Fluoroscopy-Guided Balloon Sialoplasty for Duct Stenosis",
    "category": "Endocrine, Head & Neck Interventions",
    "code": "2849-EN611A",
    "rghsCode": "693 / 52 / 21",
    "icd10": "E04.1 (Thyroid nodule) / E26.0 (Primary aldosteronism)",
    "indications": [
      "Clinically documented indication for Fluoroscopy-Guided Balloon Sialoplasty for Duct Stenosis refractory to conservative medical management.",
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
        "category": "Vascular / Percutaneous Access",
        "name": "4F-5F Radial / Femoral Introducer Sheath or 18G Coaxial Needle",
        "spec": "Echo-enhanced access set",
        "standardStore": "Head & Neck IR Unit"
      },
      {
        "category": "Ablation / Sampling Catheter",
        "name": "Thyroid RFA Electrode / Adrenal Venous Sampling Catheter",
        "spec": "18G 7cm internally-cooled needle / 4F Simmons-1",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Ultrasound Guidance",
        "name": "High-Frequency Linear Hockey-Stick Probe",
        "spec": "7.5 - 15.0 MHz dedicated neck transducer",
        "standardStore": "Room 922 USG"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "Perithyroidal / perivascular sensory block",
        "standardStore": "IR Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Fluoroscopy-Guided Balloon Sialoplasty for Duct Stenosis.",
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
    "maayTariffInr": 35000,
    "vendorContacts": [
      "RF Medical India (+91 98293 44556)",
      "Cook Medical (+91 98290 88990)"
    ]
  },
  {
    "id": "c17-sclerotherapy-of-sialoceles-and-parotid",
    "name": "Sclerotherapy of Sialoceles and Parotid Cysts",
    "category": "Endocrine, Head & Neck Interventions",
    "code": "2849-EN658A",
    "rghsCode": "693 / 52 / 18",
    "icd10": "E04.1 (Thyroid nodule) / E26.0 (Primary aldosteronism)",
    "indications": [
      "Clinically documented indication for Sclerotherapy of Sialoceles and Parotid Cysts refractory to conservative medical management.",
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
        "category": "Vascular / Percutaneous Access",
        "name": "4F-5F Radial / Femoral Introducer Sheath or 18G Coaxial Needle",
        "spec": "Echo-enhanced access set",
        "standardStore": "Head & Neck IR Unit"
      },
      {
        "category": "Ablation / Sampling Catheter",
        "name": "Thyroid RFA Electrode / Adrenal Venous Sampling Catheter",
        "spec": "18G 7cm internally-cooled needle / 4F Simmons-1",
        "standardStore": "DDC-14 Store"
      },
      {
        "category": "Ultrasound Guidance",
        "name": "High-Frequency Linear Hockey-Stick Probe",
        "spec": "7.5 - 15.0 MHz dedicated neck transducer",
        "standardStore": "Room 922 USG"
      },
      {
        "category": "Local Anesthetic",
        "name": "Inj Lignocaine 2% with Adrenaline",
        "spec": "Perithyroidal / perivascular sensory block",
        "standardStore": "IR Central Pharmacy"
      }
    ],
    "techniqueSteps": [
      "Patient received in digital subtraction angiography (DSA) suite / procedural CT suite and identified with two institutional identifiers.",
      "Sterile prep and draping of target access site under aseptic precautions.",
      "Administration of local anesthesia and appropriate monitored sedation.",
      "Ultrasound or fluoroscopic guidance used for needle puncture and vascular / percutaneous access sheath placement.",
      "Selective catheterization and digital roadmapping of target anatomy for Sclerotherapy of Sialoceles and Parotid Cysts.",
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
    "maayTariffInr": 35000,
    "vendorContacts": [
      "RF Medical India (+91 98293 44556)",
      "Cook Medical (+91 98290 88990)"
    ]
  }
];
