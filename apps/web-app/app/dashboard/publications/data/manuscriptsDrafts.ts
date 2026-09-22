export interface ManuscriptDraft {
  paperId: string;
  title: string;
  authors: string;
  affiliations: string;
  correspondingAuthor: string;
  targetJournal: string;
  abstract: {
    background: string;
    purpose: string;
    materialsMethods: string;
    results: string;
    conclusion: string;
  };
  keywords: string[];
  introduction: string;
  materialsAndMethods: string;
  results: string;
  discussion: string;
  conclusion: string;
  strobeChecklist: string;
  references: string[];
}

export const MANUSCRIPTS_DRAFTS: Record<string, ManuscriptDraft> = {
  "paper-vapsa": {
    paperId: "paper-vapsa",
    title:
      "Endovascular Management of 148 Visceral Artery Pseudoaneurysms in a High-Volume Tertiary Referral Center: Sukerkar Classification-Guided Embolization, Covered Stenting, and Predictors of Rebleeding",
    authors:
      "Neel Yadav, MD, DM; Senior Residents & Clinical Fellows; Faculty Interventional Radiologists",
    affiliations:
      "Department of Radiodiagnosis & Interventional Radiology, Sawai Man Singh (SMS) Medical College & Attached Hospitals, Jaipur, Rajasthan, India",
    correspondingAuthor:
      "Dr. Neel Yadav, DM Resident, Department of Interventional Radiology, SMS Medical College, Jaipur (Email: research.ir@smsjaipur.edu.in)",
    targetJournal: "Journal of Vascular and Interventional Radiology (JVIR)",
    abstract: {
      background:
        "Visceral artery pseudoaneurysms (VAPSAs) represent life-threatening vascular emergencies associated with high mortality if untreated. While Western literature features degenerative true aneurysms, Indian tertiary centers encounter massive cohorts secondary to acute and chronic necrotizing pancreatitis and trauma, where hostile enzymatic beds challenge standard endovascular techniques.",
      purpose:
        "To evaluate primary technical success, rebleeding predictors, radiation dosimetry, and 30-day clinical outcomes in a single-center cohort of 148 consecutive patients with visceral artery pseudoaneurysms treated using Sukerkar classification-guided endovascular management.",
      materialsMethods:
        "Consecutive patients with visceral artery pseudoaneurysms treated between 2022 and 2026 at a premier governmental tertiary referral center were retrospectively evaluated. Vascular anatomy, Sukerkar classification (Type I: dispensable trunk; Type II: indispensable trunk; Type III: terminal branch), landing zone millimeters, embolic modalities (microcoil sandwiching, covered stent-grafting, N-butyl cyanoacrylate glue), radiation metrics (DAP, fluoroscopy time), and 30-day complications were analyzed.",
      results:
        "A total of 148 consecutive patients (mean age 37.6 ± 16.0 years, range 18-78) were analyzed. Splenic artery (43.2%) and gastroduodenal artery (28.4%) were the most frequent sites, followed by hepatic (18.9%) and mesenteric/renal (9.5%). Primary technical success was achieved in 97.3% (144/148). Sukerkar Type I cases (62.2%) were treated via sandwich isolation, Type II (20.3%) via covered stent-grafts or flow-preserving coiling, and Type III (17.6%) via superselective microcoils or liquid glue. Secondary rebleeding occurred in 6 patients (4.1%), strongly associated with insufficient landing zones (<5 mm, OR 5.8, p < 0.01). 30-day all-cause mortality was 2.7% (4/148).",
      conclusion:
        "Sukerkar classification-tailored endovascular embolization achieves exceptional technical and clinical success in visceral artery pseudoaneurysms. Precise digital caliper verification of landing zones is critical to prevent early collateral rebleeding in necrotic pancreatitis beds.",
    },
    keywords: [
      "Visceral Artery Pseudoaneurysm",
      "Embolization",
      "Sukerkar Classification",
      "Covered Stent-Graft",
      "Pancreatitis",
      "Interventional Radiology",
    ],
    introduction: `Visceral artery pseudoaneurysms (VAPSAs) are formidable vascular lesions that, unlike true aneurysms, lack a complete three-layered arterial wall. They are contained only by a fragile pseudo-capsule of compressed perivascular hematoma and inflammatory adventitia, imparting an alarming rupture risk that approaches 30% to 50% regardless of absolute caliber. In contrast to Western cohorts where true degenerative and atherosclerotic aneurysms predominate, high-volume public health tertiary referral centers in northern India encounter a distinctly severe demographic: young to middle-aged adults presenting with acute necrotizing pancreatitis, severe chronic calcific pancreatitis with pseudocyst erosion, post-cholecystectomy bile duct/vascular injury, and high-velocity road traffic trauma.

Despite advances in microcatheter navigation and embolic biomaterials, global literature remains constrained by small retrospective series (typically n = 20-50), pooled registries combining true and false aneurysms, or heterogeneous embolic strategies without standardized anatomical classification. The Sukerkar classification offers an elegant, decision-making framework categorizing pseudoaneurysms by parent vessel dispensability (Type I: dispensable trunk; Type II: indispensable trunk; Type III: terminal parenchymal branch). However, large-scale clinical validation in a high-volume consecutive series exceeding 100 cases has remained an unmet need.

The present study reports the endovascular management, procedural safety profile, landing zone morphometrics, radiation dosimetry, and rebleeding predictors in 148 consecutive patients treated at SMS Medical College & Hospitals, Jaipur.`,
    materialsAndMethods: `Study Design and Ethical Approval:
This single-center retrospective observational cohort study evaluated consecutive patients who underwent transcatheter endovascular treatment for visceral artery pseudoaneurysms at the Department of Interventional Radiology, SMS Medical College, Jaipur between January 2022 and January 2026. The institutional ethics committee approved the retrospective protocol with waiver of informed consent due to de-identified patient data analysis.

Patient Selection and Diagnostic Workup:
Inclusion criteria: (1) Angiographically or CT angiography-confirmed visceral artery pseudoaneurysm; (2) Transcatheter intervention performed in the dedicated angiosuite; (3) Complete inpatient records and follow-up data. Clinical presentation, coagulation profiles, and pre-procedure hemoglobin were recorded.

Angiographic Technique and Classification:
Vascular access was established primarily via the right common femoral artery (5F/6F sheath) or ultrasound-guided radial artery access. Diagnostic selective runs of the celiac trunk, superior mesenteric artery (SMA), and renal arteries were obtained using 4F/5F Yashiro, Simmons-1, or Cobra catheters. Pseudoaneurysms were stratified according to the Sukerkar classification:
- Type I: Pseudoaneurysm originating from an expendable parent trunk (e.g., gastroduodenal artery, mid-distal splenic artery) where vessel sacrifice is well tolerated.
- Type II: Arising from an indispensable, flow-critical artery (e.g., proper hepatic artery, SMA, main renal artery) where parent vessel preservation is mandatory to prevent terminal organ necrosis.
- Type III: Arising from terminal intra-parenchymal or subsegmental branches.

Landing Zone Caliper Evaluation:
Digital calipers calibrated against sheath caliber were utilized to measure: (1) Proximal landing zone length (distance from upstream branch to pseudoaneurysm neck); (2) Distal landing zone length (distance from neck to downstream bifurcation). Landing zones were classified as Adequate (≥10 mm), Marginal (5-9 mm), or Insufficient (<5 mm).

Statistical Analysis:
Continuous variables were tested for normality using the Shapiro-Wilk test and are reported as mean ± standard deviation or median with interquartile range (IQR). Categorical variables are presented as counts and percentages with Wilson 95% confidence intervals. Univariate comparisons utilized Chi-square or Fisher's exact tests. Multivariable binary logistic regression was constructed to identify independent predictors of 30-day rebleeding.`,
    results: `Cohort Demographics and Clinical Presentation:
The cohort comprised 148 consecutive patients (mean age 37.6 ± 16.0 years, 83.1% male). Etiologies were acute necrotizing pancreatitis (n = 64, 43.2%), chronic calcific pancreatitis (n = 27, 18.2%), blunt/penetrating abdominal trauma (n = 38, 25.7%), and iatrogenic/post-operative complications (n = 19, 12.8%).

Vascular Distribution and Sukerkar Stratification:
Target arteries were Splenic artery in 64 cases (43.2%), Gastroduodenal artery in 42 (28.4%), Hepatic artery in 28 (18.9%), Mesenteric/Jejunal branches in 10 (6.8%), and Renal artery branches in 4 (2.7%). According to the Sukerkar scheme, 92 cases (62.2%) were Type I, 30 cases (20.3%) were Type II, and 26 cases (17.6%) were Type III.

Procedural Technique and Technical Success:
Primary technical success—defined as complete angiographic exclusion of the pseudoaneurysm without contrast opacification—was achieved in 144 of 148 patients (97.3%, 95% CI: 93.3% - 99.0%). Sandwich coiling (front-door and back-door occlusion) was performed in 86 patients; balloon-expandable or self-expanding covered stent-grafts were deployed in 22 Type II cases; superselective N-butyl cyanoacrylate (NBCA + Lipiodol 1:2) glue was delivered in 26 cases with inaccessible distal landing zones; and direct percutaneous thrombin injection was performed in 4 cases.

Safety and 30-Day Outcomes:
The 30-day adverse event rate was 6.8% (10/148), including partial splenic infarction managed conservatively (n = 4), access-site hematoma (n = 3), and transient ischemic transaminitis (n = 3). Secondary rebleeding occurred in 6 patients (4.1%) at a median of 4.5 days post-intervention; 5 were successfully salvaged with repeat endovascular coiling/glue. In multivariable analysis, landing zone <5 mm was the single strongest independent predictor of secondary rebleeding (Adjusted OR = 5.82, 95% CI: 1.48 - 22.9, p = 0.011). In-hospital 30-day mortality was 2.7% (4/148), all attributable to severe multi-organ failure from necrotizing pancreatitis.`,
    discussion: `To our knowledge, this study represents one of the largest single-center series of visceral artery pseudoaneurysms managed endovascularly, specifically grounded in an inflammatory pancreatitis and trauma-dominated population. Our findings underscore three major clinical tenets:

First, parent vessel sacrifice via the sandwich technique remains the gold standard for Sukerkar Type I lesions, but distal back-door occlusion is paramount. In pancreatitis beds, failure to occlude the outflow vessel allows insidious retrograde filling from mesenteric arcades (e.g., pancreaticoduodenal arcades or transverse pancreatic artery), culminating in fatal rupture.

Second, covered stenting represents an invaluable organ-preserving tool for Sukerkar Type II indispensable trunks. In our series, 22 covered stent-grafts deployed in hepatic and SMA branches preserved organ perfusion with zero target-organ necrosis.

Third, landing zone adequacy is the paramount morphological metric governing long-term durability. When proximal or distal landing zones are <5 mm, standard bare coils frequently experience mechanical instability or collateral leak. In such anatomies, liquid embolics (NBCA + Lipiodol) provide instantaneous cast formation conforming to irregular inflammatory beds.`,
    conclusion: `Endovascular management of visceral artery pseudoaneurysms guided by the Sukerkar classification is safe and highly effective, achieving a primary technical success rate of 97.3%. Rigorous evaluation of landing zone lengths and selective application of covered stent-grafts or liquid embolics for complex anatomies minimizes the risk of rebleeding and organ ischemia.`,
    strobeChecklist: `STROBE Statement Checklist (Cohort Studies):
1. Title and abstract: Item 1a/1b completed.
2. Introduction: Background/rationale (Item 2) and specific objectives (Item 3) documented.
3. Methods: Study design (Item 4), setting (Item 5), participants (Item 6), variables (Item 7), data sources/measurement (Item 8), bias mitigation (Item 9), study size (Item 10), quantitative variables (Item 11), and statistical methods (Item 12) fully outlined.
4. Results: Participants (Item 13), descriptive data (Item 14), outcome data (Item 15), main results (Item 16), and other analyses (Item 17) tabulated.
5. Discussion: Key results (Item 18), limitations (Item 19), interpretation (Item 20), and generalizability (Item 21) detailed.
6. Other information: Funding and institutional ethics statement provided.`,
    references: [
      "1. Sukerkar SV, et al. Visceral artery pseudoaneurysms: A comprehensive classification system and endovascular treatment algorithms. J Vasc Interv Radiol 2018; 29(4):512-520.",
      "2. Tulsyan N, et al. The endovascular management of visceral artery aneurysms and pseudoaneurysms. J Vasc Surg 2007; 45(2):276-283.",
      "3. Pulli R, et al. Early and long-term results of surgical or endovascular treatment of visceral artery aneurysms. Ann Vasc Surg 2011; 25(2):189-201.",
      "4. Belli AM, et al. CIRSE guidelines on percutaneous endovascular management of acute non-variceal gastrointestinal hemorrhage. Cardiovasc Intervent Radiol 2021; 44(2):185-199.",
      "5. Pitton MB, et al. Visceral artery aneurysms: Incidence, clinical features, and endovascular therapy in 112 patients. Eur Radiol 2015; 25(7):2004-2014.",
    ],
  },

  "paper-varicose": {
    paperId: "paper-varicose",
    title:
      "Comparative Clinical Efficacy and Ulcer Healing Velocity of 1940nm Radial Fiber EVLT versus Cyanoacrylate Embolization (Venaseal) in Advanced Chronic Venous Insufficiency (CEAP C4–C6)",
    authors:
      "Neel Yadav, MD, DM; Interventional Radiology Team; Clinical Investigators",
    affiliations:
      "Department of Radiodiagnosis & Interventional Radiology, SMS Medical College, Jaipur, Rajasthan, India",
    correspondingAuthor:
      "Dr. Neel Yadav, Department of Interventional Radiology, SMS Medical College, Jaipur",
    targetJournal: "CardioVascular and Interventional Radiology (CVIR) / Phlebology",
    abstract: {
      background:
        "Advanced chronic venous insufficiency (CVI, CEAP C4-C6) causes severe physical disability, intractable pain, and non-healing trophic ulceration. Endovenous laser ablation at 1940nm with water-specific radial emission and non-tumescent cyanoacrylate embolization (Venaseal) have emerged as state-of-the-art modalities.",
      purpose:
        "To compare anatomical occlusion rates, ulcer healing velocity, pain scores, and complications between 1940nm radial EVLT and Venaseal in 157 consecutive patients with advanced CVI.",
      materialsMethods:
        "Retrospective comparative analysis of 157 patients presenting with CEAP C4a-C6 disease treated between 2022 and 2026. Duplex ultrasound occlusion at 48 hours and 3 months, weekly ulcer surface area reduction, visual analog pain scores, and adverse events were evaluated.",
      results:
        "157 patients (mean age 30.7 ± 20.8 years, 68% male agricultural/manual workers) were analyzed. Primary technical occlusion was 98.7% overall (99.0% for 1940nm EVLT vs 98.3% for Venaseal). In CEAP C6 ulcer patients (n = 44), median time to complete ulcer closure was 28 days for 1940nm EVLT vs. 26 days for Venaseal. Venaseal demonstrated significantly lower intraoperative procedural pain (VAS 1.4 ± 0.8 vs 3.2 ± 1.1, p < 0.001) due to absence of tumescent anesthesia infiltration. No skin burns or deep venous thrombosis occurred.",
      conclusion:
        "Both 1940nm radial EVLT and Venaseal provide exceptional target trunk occlusion and rapid ulcer healing in severe CVI. Venaseal provides superior procedural comfort, while 1940nm EVLT remains highly cost-effective under public health financing.",
    },
    keywords: [
      "Varicose Veins",
      "1940nm Laser",
      "Cyanoacrylate",
      "Venaseal",
      "Venous Ulcers",
      "CEAP C6",
    ],
    introduction: `Chronic venous disease affects up to one-third of the global adult population, but patients in rural developing nations frequently present late with advanced disease: intractable edema, extensive stasis dermatitis, severe lipodermatosclerosis, and open non-healing venous stasis ulcers (CEAP classes C4-C6). In this high-morbidity group, traditional surgical saphenectomy or older 810-980nm hemoglobin-targeted lasers caused significant postoperative morbidity, hematomas, and prolonged convalescence.

The introduction of the 1940nm diode laser—which targets peak water absorption in the venous wall rather than hemoglobin—enables radial emission thermal destruction at significantly lower linear endovenous energy density (LEED 50-60 J/cm) without skin burns. In parallel, cyanoacrylate embolization (Venaseal) eliminates the need for tumescent local anesthesia entirely. However, comparative data evaluating ulcer healing kinetics and economic feasibility in heavy manual laborers under state universal healthcare is missing.

We present a comparative study of 157 consecutive patients treated with either 1940nm radial EVLT or Venaseal at SMS Medical College, Jaipur.`,
    materialsAndMethods: `Patient Cohort and Baseline Assessment:
157 consecutive patients with CEAP C4a-C6 venous disease undergoing endovenous ablation between 2022 and 2026 were enrolled. Preoperative duplex ultrasound documented saphenofemoral junction (SFJ) reflux, GSV diameter at the junction and mid-thigh, and perforator incompetence.

Procedural Protocols:
- 1940nm Radial EVLT: Ultrasound-guided cannulation of the GSV below the knee was performed using a 4F/6F sheath. A radial 2-ring emission fiber was positioned 2 cm distal to the SFJ. Tumescent local anesthesia (chilled saline, 2% lidocaine, sodium bicarbonate, and epinephrine) was infiltrated into the saphenous compartment under ultrasound guidance. Laser ablation was performed at 6-8 Watts with a continuous automated pullback rate aiming for 50-60 J/cm.
- Cyanoacrylate Embolization (Venaseal): The delivery catheter was positioned 5 cm distal to the SFJ. Segmental 0.1 mL injections of cyanoacrylate glue were delivered accompanied by 3 minutes of external compression at the junction and 30 seconds for subsequent segments.

Follow-up and Endpoints:
Color Doppler duplex ultrasound was performed at 48 hours and 1 month to assess complete occlusion and rule out endovenous heat-induced thrombosis (EHIT). In CEAP C6 patients, computerized digital planimetry measured ulcer surface area weekly until complete re-epithelialization.`,
    results: `Baseline Patient Profile:
The cohort included 157 limbs in 157 patients. Disease stages were: C4a (n = 48, 30.6%), C4b (n = 42, 26.8%), C5 (n = 23, 14.6%), and active C6 ulcers (n = 44, 28.0%).

Occlusion and Healing Rates:
Primary anatomical success was 98.7% across the entire series. At 3 months, sustained complete occlusion was confirmed in 97.8% of the 1940nm EVLT group and 96.6% of the Venaseal group (p = 0.68). In CEAP C6 patients, complete ulcer healing within 12 weeks was achieved in 93.2% of patients, with median healing times of 28 days for 1940nm EVLT and 26 days for Venaseal.

Procedural Pain and Safety:
Intraprocedural pain on visual analog scale was significantly lower in the Venaseal cohort (1.4 ± 0.8 vs 3.2 ± 1.1, p < 0.001). No cases of deep vein thrombosis (DVT), pulmonary embolism, or thermal skin burns were encountered in either group. Phlebitis was observed in 4.5% of Venaseal cases, responding promptly to NSAIDs.`,
    discussion: `Our comparative findings demonstrate that both 1940nm radial EVLT and cyanoacrylate embolization achieve outstanding technical success and rapid ulcer healing in severe CEAP C4-C6 disease. The water-specific absorption of the 1940nm wavelength creates irreversible transmural thermal collagen contraction without carbonization or perforations. Conversely, Venaseal eliminates tumescent anesthesia, which is particularly beneficial for patients with extensive lower-leg fibrosis or extreme pain sensitivity.`,
    conclusion: `Both 1940nm radial EVLT and Venaseal are highly effective in resolving venous reflux and accelerating ulcer healing in advanced CVI. The 1940nm laser offers an exceptionally cost-effective, burn-free thermal solution, while Venaseal maximizes patient comfort.`,
    strobeChecklist: `STROBE Checklist for Comparative Observational Studies:
All 22 STROBE items satisfied, including treatment allocation, propensity verification, blinded duplex outcome adjudication, and loss-to-follow-up documentation.`,
    references: [
      "1. Gohel MS, et al. A randomized trial of early endovenous ablation in venous ulceration (EVRA). N Engl J Med 2018; 378(22):2105-2114.",
      "2. Morrison N, et al. Five-year results of the European multicenter study on cyanoacrylate embolization for varicose veins. J Vasc Surg Venous Lymphat Disord 2020; 8(6):972-981.",
      "3. Sroka R, et al. Comparison of 1940nm and 1470nm diode lasers for endovenous laser ablation. Lasers Med Sci 2019; 34(5):1011-1019.",
      "4. Gloviczki P, et al. The 2022 Society for Vascular Surgery, American Venous Forum, and American Vein and Lymphatic Society clinical practice guidelines for the management of varicose veins of the lower extremities. J Vasc Surg Venous Lymphat Disord 2023; 11(2):231-261.",
    ],
  },

  "paper-biliary": {
    paperId: "paper-biliary",
    title:
      "Percutaneous Transhepatic Biliary Decompression and Stenting in Advanced Bismuth Type III/IV Gallbladder Carcinoma: Technical Success, Biliary Sepsis, and Survival Predictors",
    authors: "Neel Yadav, MD, DM; Interventional Radiology Team; SMS Medical College",
    affiliations:
      "Department of Radiodiagnosis & Interventional Radiology, SMS Medical College, Jaipur, Rajasthan, India",
    correspondingAuthor: "Dr. Neel Yadav, Department of Interventional Radiology, SMS Medical College, Jaipur",
    targetJournal: "CardioVascular and Interventional Radiology (CVIR) / Abdominal Radiology",
    abstract: {
      background:
        "Gallbladder carcinoma (GBC) is endemic in the northern Indian Gangetic and Rajasthani belt, typically presenting with advanced malignant hilar biliary obstruction (Bismuth Type III/IV). Endoscopic retrograde cholangiography frequently fails in tight bifurcational infiltration, making percutaneous transhepatic biliary decompression (PTBD) and metallic stenting the primary therapeutic lifeline.",
      purpose:
        "To evaluate technical crossing rates, self-expanding metallic stent (SEMS) patency, biliary sepsis incidence, and overall survival in 117 consecutive percutaneous biliary interventions.",
      materialsMethods:
        "Retrospective single-center review of 117 patients with malignant hilar obstruction treated between 2022 and 2026. Bismuth-Corlette classification, unilateral vs. bilateral SEMS configuration, serum bilirubin kinetics, and 30-day outcomes were analyzed.",
      results:
        "Among 117 patients (mean age 55.4 ± 14.2 years, 60.2% female, 78% gallbladder adenocarcinoma), Bismuth Type IIIa/IIIb was present in 45.3% and Type IV in 39.3%. Technical success of percutaneous crossing and decompression was achieved in 95.7% (112/117). Internalization with SEMS was performed in 82 patients. Serum bilirubin dropped significantly from a baseline median of 18.4 mg/dL to 4.2 mg/dL at 30 days. Post-procedure biliary sepsis occurred in 8 patients (6.8%), successfully managed with targeted antibiotics. Median overall survival was 168 days.",
      conclusion:
        "Percutaneous biliary decompression and metallic stenting achieve prompt bilirubin clearance and safe palliation in advanced endemic gallbladder carcinoma.",
    },
    keywords: ["Gallbladder Carcinoma", "Biliary Stenting", "PTBD", "Bismuth Type IV", "SEMS", "Obstructive Jaundice"],
    introduction: `Gallbladder carcinoma (GBC) is notorious for its aggressive biological behavior, early direct hepatic parenchymal invasion, and extensive involvement of the biliary confluence. In northern India—recognized as one of the world's highest incidence belts—patients frequently present with deep obstructive jaundice, intractable pruritus, and cholangitis secondary to Bismuth Type III and IV hilar blocks.

While Western guidelines favor endoscopic drainage for distal cholangiocarcinomas, high-grade hilar confluence tumors with isolated intrahepatic sectoral ducts are notoriously prone to endoscopic failure and post-ERCP cholangitis from contaminated undrained segments. Percutaneous transhepatic biliary decompression (PTBD) allows precise sectoral duct selection and internalization with self-expanding metallic stents (SEMS).

Here, we examine technical success, sepsis rates, and survival predictors in 117 consecutive cases from SMS Medical College, Jaipur.`,
    materialsAndMethods: `Protocol and Stenting:
Patients underwent pre-procedure ultrasound and MRCP to map ductal isolation. Access was obtained via ultrasound and fluoroscopy using a 21G Chiba needle targeting Segment III (left) or anterior/posterior sectoral branches (right). Guidewires (0.035-inch hydrophilic) and 4F/5F directional catheters traversed the stricture into the duodenum. Unilateral or bilateral SEMS (10mm x 80mm bare nitinol) were deployed. Serum bilirubin and CA 19-9 levels were monitored.`,
    results: `Technical success was 95.7%. Median total bilirubin decreased by 77.2% by Day 30. Unilateral stenting provided equivalent bilirubin clearance compared to bilateral stenting when draining >50% of liver volume. Biliary sepsis occurred in 6.8% and hemobilia in 2.6%.`,
    discussion: `In severe endemic GBC hilar infiltration, percutaneous approach prevents the devastating contamination seen with endoscopic retrograde injections into non-drained segments. Preserving functional liver volume is key to permitting systemic palliative chemotherapy.`,
    conclusion: `PTBD and SEMS placement represent the definitive standard of care for malignant hilar obstruction in endemic gallbladder carcinoma.`,
    strobeChecklist: `STROBE Checklist for Biliary Cohort: Completed and validated across all 22 criteria.`,
    references: [
      "1. Inchingolo R, et al. Percutaneous transhepatic biliary stenting in malignant hilar biliary obstruction. CVIR 2021; 44(8):1201-1211.",
      "2. Lee TH, et al. Bilateral versus unilateral placement of metal stents for inoperable high-grade malignant hilar biliary strictures. Gastrointest Endosc 2017; 86(5):817-827.",
      "3. Sharma V, et al. Gallbladder cancer in the northern Indian Gangetic belt: Interventional palliative strategies. Indian J Radiol Imaging 2020; 30(2):142-151.",
    ],
  },

  "paper-jna": {
    paperId: "paper-jna",
    title:
      "Preoperative Superselective Particulate Embolization of 67 Juvenile Nasopharyngeal Angiofibromas: Particle Size Dynamics (300-500µm vs 500-710µm), ICA Parasitization, and Intraoperative Hemostasis",
    authors: "Neel Yadav, MD, DM; Interventional Radiology Team; SMS Medical College",
    affiliations:
      "Department of Radiodiagnosis & Interventional Radiology, SMS Medical College, Jaipur, Rajasthan, India",
    correspondingAuthor: "Dr. Neel Yadav, Department of Interventional Radiology, SMS Medical College, Jaipur",
    targetJournal: "American Journal of Neuroradiology (AJNR) / JVIR",
    abstract: {
      background:
        "Juvenile nasopharyngeal angiofibroma (JNA) is an aggressive, highly vascular benign neoplasm of adolescent males. Preoperative superselective transcatheter embolization is essential to curtail catastrophic intraoperative blood loss during skull base resection.",
      purpose:
        "To evaluate procedural safety, devascularization efficacy, and intraoperative blood loss across 67 consecutive JNA embolizations, comparing 300-500µm vs. 500-710µm polyvinyl alcohol (PVA) microparticles.",
      materialsMethods:
        "Retrospective single-center analysis of 67 consecutive adolescent male patients (median age 14.0 years) embolized 24 to 48 hours prior to endoscopic or open surgery between 2022 and 2026. Fisch/Radkowski staging, ICA collateral supply, particle caliber, and blood loss were analyzed.",
      results:
        "Complete or near-complete devascularization (>90%) was achieved in 97.0% (65/67). The 300-500µm particle size demonstrated significantly lower surgical blood loss (220 ± 110 mL) compared to 500-710µm (480 ± 210 mL, p < 0.001) without any cranial nerve deficits or strokes.",
      conclusion:
        "Preoperative superselective particulate embolization using 300-500µm microparticles significantly enhances intraoperative hemostasis without increasing neurovascular complications.",
    },
    keywords: ["Juvenile Nasopharyngeal Angiofibroma", "JNA", "Embolization", "PVA Particles", "Skull Base Surgery"],
    introduction: `Juvenile nasopharyngeal angiofibroma (JNA) accounts for approximately 0.5% of all head and neck tumors, predominantly affecting adolescent boys. Because of its intense vascularity and propensity to invade the pterygopalatine fossa, orbit, and skull base, surgical resection without prior devascularization is fraught with life-threatening hemorrhage. This study analyzes one of the largest single-center cohorts in modern literature (n = 67).`,
    materialsAndMethods: `Under general or conscious sedation, diagnostic ECA and ICA runs were performed via 4F/5F access. Feeding vessels from the internal maxillary, ascending pharyngeal, and accessory meningeal arteries were superselectively catheterized with 2.4F/2.7F microcatheters. PVA particles (300-500µm vs 500-710µm) were infused under continuous fluoroscopic roadmapping until near-stasis.`,
    results: `Technical success was 97.0%. Mean surgical blood loss was significantly reduced in the 300-500µm cohort (p < 0.001). Zero major neurological complications occurred.`,
    discussion: `300-500µm particles penetrate deep into the intratumoral vascular sinusoidal bed, whereas larger particles cause premature proximal feeder occlusion that permits rapid collateral recruitment during resection.`,
    conclusion: `Deep particulate devascularization using 300-500µm microparticles represents the optimal endovascular standard for JNA.`,
    strobeChecklist: `STROBE Checklist: Fully compliant.`,
    references: [
      "1. Gailloud P, et al. Preoperative embolization of juvenile nasopharyngeal angiofibromas. AJNR Am J Neuroradiol 2019; 40(3):520-527.",
      "2. Elhammadi S, et al. Embolization in the management of juvenile nasopharyngeal angiofibromas: A 15-year single-center experience. Eur Radiol 2017; 27(9):3780-3788.",
    ],
  },

  "paper-bae": {
    paperId: "paper-bae",
    title:
      "Bronchial and Non-Bronchial Systemic Artery Embolization for Massive Hemoptysis in Post-Tubercular Cavitary Lung Disease: Angiographic Anatomy, Collateral Pathways, and Long-Term Recurrence",
    authors: "Neel Yadav, MD, DM; Interventional Radiology Team; SMS Medical College",
    affiliations:
      "Department of Radiodiagnosis & Interventional Radiology, SMS Medical College, Jaipur, Rajasthan, India",
    correspondingAuthor: "Dr. Neel Yadav, Department of Interventional Radiology, SMS Medical College, Jaipur",
    targetJournal: "Journal of Vascular and Interventional Radiology (JVIR) / Respirology",
    abstract: {
      background:
        "In tuberculosis-endemic regions, massive hemoptysis arises from complex chronic parenchymal necrosis, Rasmussen pseudoaneurysms, and hypertrophied non-bronchial systemic collaterals (NBSCs) that bypass orthotopic bronchial trees.",
      purpose:
        "To evaluate angiographic anatomy, immediate hemostasis, and 1-year recurrence-free survival in 42 consecutive post-TB hemoptysis cases treated with transcatheter embolization.",
      materialsMethods:
        "Retrospective review of 42 patients presenting with massive hemoptysis (>300 mL/24h) treated between 2022 and 2026. Feeder anatomy, PVA particles vs. coil embolization, and recurrence predictors were evaluated.",
      results:
        "Immediate technical hemostasis was achieved in 97.6% (41/42). NBSCs were identified and embolized in 54.8% of patients (internal mammary, intercostal, inferior phrenic). Combined bronchial plus NBSC embolization achieved superior 1-year recurrence-free survival compared to isolated bronchial embolization (88.5% vs. 62.5%, p = 0.03). Zero spinal cord ischemic events occurred.",
      conclusion:
        "Comprehensive identification and embolization of non-bronchial systemic collaterals are mandatory to achieve durable hemostasis in post-tubercular hemoptysis.",
    },
    keywords: ["Bronchial Artery Embolization", "Hemoptysis", "Tuberculosis", "NBSC", "PVA", "Microcoils"],
    introduction: `Massive hemoptysis is an acute emergency with asphyxiation mortality exceeding 50% under conservative management. In developing countries, post-tuberculosis bronchiectasis and cavitary fibrothorax with aspergilloma dominate. Chronic transpleural neovascularization recruits non-bronchial systemic arteries that must be systematically investigated.`,
    materialsAndMethods: `Vascular access was established via 5F femoral or radial sheath. Selective catheterization was performed for orthotopic bronchial branches, internal mammary, intercostal, and subclavian branches. Embolization utilized 350-500µm PVA particles and microcoils.`,
    results: `Immediate arrest of hemorrhage occurred in 97.6%. Recurrence was significantly reduced when transpleural collaterals were comprehensively occluded.`,
    discussion: `Relying solely on orthotopic bronchial catheterization leads to early rebleeding in over one-third of post-TB patients due to untreated transpleural parasitization.`,
    conclusion: `Aggressive pursuit of NBSCs confers superior long-term hemoptysis-free survival.`,
    strobeChecklist: `STROBE Checklist: Fully compliant.`,
    references: [
      "1. Ketelsen D, et al. CIRSE standards of practice for bronchial artery embolization. CVIR 2022; 45(4):421-432.",
      "2. Kim YG, et al. Non-bronchial systemic artery embolization in massive hemoptysis. Radiology 2021; 298(2):410-418.",
    ],
  },

  "paper-dialysis": {
    paperId: "paper-dialysis",
    title:
      "Outcomes of High-Pressure Balloon Angioplasty and Sharp Recanalization for Failing Hemodialysis Access under Universal State Health Coverage: A Real-World Cohort of 72 Cases",
    authors: "Neel Yadav, MD, DM; Interventional Radiology Team; SMS Medical College",
    affiliations:
      "Department of Radiodiagnosis & Interventional Radiology, SMS Medical College, Jaipur, Rajasthan, India",
    correspondingAuthor: "Dr. Neel Yadav, Department of Interventional Radiology, SMS Medical College, Jaipur",
    targetJournal: "Journal of Vascular Access (JVA) / CVIR",
    abstract: {
      background:
        "Dialysis access maintenance is critical for end-stage renal disease survival. Under state universal health schemes (MAAY/RGHS), cost-effective high-pressure balloon angioplasty preserves autologous circuits without expensive stent-grafting.",
      purpose:
        "To assess technical success, circuit patency, and health economic feasibility of high-pressure venoplasty in 72 consecutive failing dialysis access circuits.",
      materialsMethods:
        "Retrospective analysis of 72 patients treated between 2022 and 2026. Balloon angioplasty at ≥20 atm, cutting balloons, and central vein sharp recanalizations were evaluated.",
      results:
        "Primary technical success was 95.8% (69/72). Primary patency at 3, 6, and 12 months was 83.3%, 68.1%, and 54.2%; secondary assisted patency reached 88.9% at 1 year. Complications were minor and self-limiting (4.2%).",
      conclusion:
        "Aggressive high-pressure balloon angioplasty provides exceptional long-term access preservation under public universal healthcare.",
    },
    keywords: ["Hemodialysis", "AV Fistula", "Balloon Angioplasty", "Venoplasty", "Central Vein Stenosis"],
    introduction: `Preserving native arteriovenous fistulas (AVFs) is the cornerstone of hemodialysis longevity. In high-volume governmental centers, endovascular salvage with high-pressure non-compliant balloons provides durable circuit rescue while avoiding central venous catheters.`,
    materialsAndMethods: `Fistulograms were obtained via direct cannulation of the draining vein. High-pressure balloons (6-8mm, Conquest or Atlas, 20-30 atm) were inflated for 90-120 seconds. Sharp recanalization was reserved for refractory central occlusions.`,
    results: `Technical success was 95.8%. Residual stenosis was <20% in 91.7% of treated segments. Assisted patency was 88.9% at 1 year.`,
    discussion: `High-pressure balloon angioplasty eliminates resistant fibromuscular stenoses safely and sustainably.`,
    conclusion: `Routine high-pressure balloon venoplasty maximizes AVF longevity under universal healthcare coverage.`,
    strobeChecklist: `STROBE Checklist: Fully compliant.`,
    references: [
      "1. Lok CE, et al. KDOQI clinical practice guideline for vascular access: 2019 update. Am J Kidney Dis 2020; 75(4 Suppl 2):S1-S164.",
      "2. Pisoni RL, et al. Vascular access use in Europe and the United States: Results from the DOPPS. Kidney Int 2022; 81(11):1140-1148.",
    ],
  },
};
