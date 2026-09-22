# -*- coding: utf-8 -*-
"""
Neuro & Head/Neck Data Definition and Generator (51 procedures)
Categories 16 and 17
"""
import json
import os

cat16_items = [
    ("dsa-4-vessel-cerebral", "Diagnostic Four-Vessel Cerebral Digital Subtraction Angiography (DSA)", "NEURO-DSA-001", "694 / 01", "I67.89", 18500),
    ("stroke-stent-retriever-thrombectomy", "Mechanical Thrombectomy for Acute Ischemic Stroke using Stent Retrievers (Solitaire / Trevo)", "NEURO-MT-002", "694 / 02", "I63.50", 115000),
    ("stroke-adapt-aspiration", "Contact Aspiration Mechanical Thrombectomy for Stroke (ADAPT Technique)", "NEURO-MT-003", "694 / 03", "I63.40", 110000),
    ("stroke-save-captive-thrombectomy", "Combined Stent Retriever and Direct Aspiration Technique (SAVE / CAPTIVE)", "NEURO-MT-004", "694 / 04", "I63.511", 125000),
    ("stroke-ia-thrombolysis-rtpa", "Superselective Intra-Arterial Thrombolysis (rtPA) for Acute Cerebral Infarction", "NEURO-MT-005", "694 / 05", "I63.59", 48000),
    ("stroke-tandem-angioplasty-stent", "Emergent Intracranial Angioplasty and Stenting for Acute Tandem Stroke Occlusions", "NEURO-MT-006", "694 / 06", "I63.512", 135000),
    ("aneurysm-detachable-coiling", "Endovascular Embolization of Intracranial Aneurysms with Detachable Bare Platinum Coils", "NEURO-ANEUR-007", "694 / 07", "I67.1", 95000),
    ("aneurysm-balloon-assisted-coiling-bace", "Balloon-Assisted Coil Embolization (BACE) for Wide-Neck Cerebral Aneurysms", "NEURO-ANEUR-008", "694 / 08", "I67.1", 105000),
    ("aneurysm-stent-assisted-coiling-sace", "Stent-Assisted Coil Embolization (SACE) for Complex Intracranial Aneurysms", "NEURO-ANEUR-009", "694 / 09", "I67.1", 118000),
    ("aneurysm-flow-diverter", "Flow-Diverter Embolization (Pipeline, Surpass, FRED, Silk) for Unruptured Wide-Neck Aneurysms", "NEURO-ANEUR-010", "694 / 10", "I67.1", 145000),
    ("aneurysm-web-device-disruption", "Endosaccular Flow Disruption using the Woven EndoBridge (WEB) Device", "NEURO-ANEUR-011", "694 / 11", "I67.1", 140000),
    ("aneurysm-contour-neurovascular-system", "Intrasaccular Contour Neurovascular System Implantation", "NEURO-ANEUR-012", "694 / 12", "I67.1", 138000),
    ("therapeutic-pvo-with-bto", "Therapeutic Parent Vessel Occlusion (PVO) with Balloon Test Occlusion (BTO)", "NEURO-PVO-013", "694 / 13", "I67.1", 85000),
    ("bavm-onyx-squid-embolization", "Transarterial Onyx / Squid Embolization of Brain Arteriovenous Malformations (bAVM)", "NEURO-AVM-014", "694 / 14", "Q28.2", 125000),
    ("bavm-phil-embolization", "Transarterial PHIL Embolization of bAVMs", "NEURO-AVM-015", "694 / 15", "Q28.2", 128000),
    ("bavm-transvenous-retrograde-embolization", "Transvenous Retrograde Embolization of Ruptured Brain AVMs", "NEURO-AVM-016", "694 / 16", "Q28.2", 132000),
    ("davf-transarterial-embolization-liquid", "Transarterial Embolization of Dural Arteriovenous Fistulae (dAVF)", "NEURO-DAVF-017", "694 / 17", "I67.841", 115000),
    ("davf-transvenous-sinus-occlusion", "Transvenous Sinus Coil and Liquid Embolic Occlusion of Cranial dAVFs", "NEURO-DAVF-018", "694 / 18", "I67.841", 120000),
    ("ccf-direct-sov-puncture-embolization", "Transorbital / Direct Superior Ophthalmic Vein Puncture for Carotid-Cavernous Fistula (CCF)", "NEURO-CCF-019", "694 / 19", "I67.848", 98000),
    ("ccf-transfemoral-transvenous-occlusion", "Transfemoral Transvenous Occlusion of Direct and Indirect CCFs", "NEURO-CCF-020", "694 / 20", "I67.848", 105000),
    ("vgam-neonatal-transarterial-embolization", "Transarterial Embolization of Vein of Galen Aneurysmal Malformations (VGAM) in Neonates", "NEURO-VGAM-021", "694 / 21", "Q28.2", 155000),
    ("sdavf-transcatheter-embolization", "Transcatheter Embolization of Spinal Dural Arteriovenous Fistulae (SDAVF)", "NEURO-SDAVF-022", "694 / 22", "I67.848", 110000),
    ("cas-distal-filter-protection", "Extracranial Carotid Artery Stenting (CAS) with Distal Filter Embolic Protection", "NEURO-CAS-023", "694 / 23", "I65.2", 82000),
    ("tcar-flow-reversal-stenting", "Transcarotid Artery Revascularization (TCAR) with Dynamic Flow Reversal", "NEURO-CAS-024", "694 / 24", "I65.2", 125000),
    ("cas-proximal-balloon-moma", "Carotid Stenting with Proximal Balloon Occlusion Protection (Mo.Ma System)", "NEURO-CAS-025", "694 / 25", "I65.2", 95000),
    ("vertebral-artery-origin-stenting", "Extracranial Vertebral Artery Origin Angioplasty and Stenting", "NEURO-VA-026", "694 / 26", "I65.0", 78000),
    ("subclavian-steal-angioplasty-stenting", "Subclavian Steal Syndrome Balloon Angioplasty and Stenting", "NEURO-SUBCL-027", "694 / 27", "I65.3", 82000),
    ("icas-gateway-balloon-angioplasty", "Intracranial Atherosclerotic Stenosis (ICAS) Balloon Angioplasty (Gateway Balloon)", "NEURO-ICAS-028", "694 / 28", "I67.848", 85000),
    ("icas-wingspan-stenting", "Intracranial Stenting for ICAS (Wingspan Stent System)", "NEURO-ICAS-029", "694 / 29", "I67.848", 115000),
    ("mma-embolization-chronic-sdh", "Middle Meningeal Artery (MMA) Embolization for Subacute and Chronic Subdural Hematoma (SDH)", "NEURO-MMA-030", "694 / 30", "I62.03", 72000),
    ("dural-venous-sinus-stenting-iih", "Dural Venous Sinus Stenting for Idiopathic Intracranial Hypertension (IIH)", "NEURO-SINUS-031", "694 / 31", "G93.2", 98000),
    ("cvst-thrombectomy-thrombolysis", "Catheter-Directed Thrombolysis and Thrombectomy for Cerebral Venous Sinus Thrombosis (CVST)", "NEURO-CVST-032", "694 / 32", "I67.6", 92000),
    ("ipss-cushings-syndrome", "Inferior Petrosal Sinus Sampling (IPSS) for ACTH-Dependent Cushing's Syndrome", "NEURO-IPSS-033", "694 / 33", "E24.0", 45000),
    ("spinal-avm-glomus-embolization", "Embolization of Spinal Arteriovenous Malformations (Glomus / Juvenile Types)", "NEURO-SPINE-034", "694 / 34", "Q28.2", 118000),
    ("csf-venous-fistula-embolization", "Embolization of CSF-Venous Fistulas with Onyx / Glue for Intracranial Hypotension", "NEURO-CSF-035", "694 / 35", "G96.0", 88000),
]

cat17_items = [
    ("thyroid-artery-embolization-goiter", "Thyroid Artery Embolization (TAE) for Massive Non-toxic Multinodular Goiter", "ENDO-TAE-001", "694 / 36", "E04.2", 52000),
    ("thyroid-artery-embolization-graves", "Thyroid Artery Embolization for Refractory Graves' Disease", "ENDO-TAE-002", "694 / 37", "E05.00", 54000),
    ("thyroid-rfa-benign-nodule", "Ultrasound-Guided Radiofrequency Ablation (RFA) of Benign Solid Thyroid Nodules", "ENDO-RFA-003", "694 / 38", "E04.1", 38000),
    ("thyroid-mwa-benign-nodule", "Percutaneous Microwave Ablation (MWA) of Benign Thyroid Nodules", "ENDO-MWA-004", "694 / 39", "E04.1", 40000),
    ("thyroid-laser-ablation-pla", "Percutaneous Laser Ablation (PLA) of Cold Thyroid Nodules", "ENDO-PLA-005", "694 / 40", "E04.1", 42000),
    ("thyroid-pei-cystic-nodule", "Percutaneous Ethanol Injection (PEI) of Toxic / Non-Toxic Thyroid Cysts", "ENDO-PEI-006", "694 / 41", "E04.1", 16000),
    ("thyroid-cryoablation-recurrent-carcinoma", "Percutaneous Cryoablation of Locally Recurrent Thyroid Carcinoma", "ENDO-CRYO-007", "694 / 42", "C73", 68000),
    ("parathyroid-rfa-hyperparathyroidism", "Ultrasound-Guided Radiofrequency Ablation of Secondary Hyperparathyroidism", "ENDO-PARA-008", "694 / 43", "E21.1", 44000),
    ("parathyroid-pei-adenoma", "Percutaneous Ethanol Injection of Hyperfunctioning Parathyroid Adenoma", "ENDO-PARA-009", "694 / 44", "E21.0", 18000),
    ("parathyroid-selective-arterial-embolization", "Selective Intra-Arterial Parathyroid Embolization", "ENDO-PARA-010", "694 / 45", "E21.0", 56000),
    ("parathyroid-venous-sampling-pvs", "Parathyroid Venous Sampling (PVS) with Rapid Intraoperative PTH Assay", "ENDO-PVS-011", "694 / 46", "E21.0", 38000),
    ("adrenal-artery-embolization-pheochromocytoma", "Transcatheter Adrenal Artery Embolization for Malignant Pheochromocytoma", "ENDO-ADR-012", "694 / 47", "C74.10", 65000),
    ("adrenal-vein-sampling-avs-conns", "Adrenal Vein Sampling (AVS) for Primary Aldosteronism (Conn's Syndrome)", "ENDO-AVS-013", "694 / 48", "E26.01", 42000),
    ("sialolithiasis-basket-extraction", "Percutaneous Sialolithiasis Extraction under Fluoroscopic / Wire Basket Guidance", "HN-SIAL-014", "694 / 49", "K11.5", 28000),
    ("balloon-sialoplasty-duct-stenosis", "Fluoroscopy-Guided Balloon Sialoplasty for Duct Stenosis", "HN-SIAL-015", "694 / 50", "K11.8", 32000),
    ("sialocele-parotid-cyst-sclerotherapy", "Sclerotherapy of Sialoceles and Parotid Cysts", "HN-SIAL-016", "694 / 51", "K11.6", 18000),
]

print(f"Cat 16 count: {len(cat16_items)}, Cat 17 count: {len(cat17_items)}, Total: {len(cat16_items) + len(cat17_items)}")
