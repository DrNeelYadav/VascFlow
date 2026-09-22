export interface PublicationFigureSpec {
  id: string;
  figureNumber: number;
  title: string;
  shortCaption: string;
  detailedLegend: string;
  targetModality: string;
  suggestedDicomSeries: string;
  defaultStatus: "Pending DICOM Snip" | "Snip Captured" | "Ready for Submission";
}

export interface LiteratureBenchmarkItem {
  studyName: string;
  authorsYear: string;
  journal: string;
  sampleSize: number;
  cohortType: string;
  primarySuccessRate: string;
  adverseEventsRate: string;
  keyLimitationOrLacuna: string;
}

export interface JournalStyleSpec {
  publisher: string;
  journalAbbrev: string;
  primaryColor: string;
  accentColor: string;
  mastheadBg: string;
  fontFamily: string;
  headingFont: string;
  abstractHeadings: string[];
  abstractWordLimit: number;
  manuscriptWordLimit: number;
  tableStyle: {
    ruleColor: string;
    headerBg: string;
    headerTextColor: string;
    zebraColor: string;
    ruleThickness: string;
  };
  submissionGuidelines: {
    maxTablesFigures: number;
    referenceStyle: string;
    datasetDeposit: string;
    reportingStandard: string;
    rejectionMitigationRules: string[];
  };
}

export interface PaperDefinition {
  id: string;
  code: string;
  shortName: string;
  title: string;
  targetJournal: string;
  journalImpactFactor: string;
  journalQuartile: string;
  domainCategory: string;
  primaryClassificationName: string;
  primaryClassificationOptions: string[];
  secondaryParameterName: string;
  secondaryParameterOptions: string[];
  techniqueOptions: string[];
  accessSiteOptions: string[];
  landingZoneRelevant: boolean;
  requiredFigures: PublicationFigureSpec[];
  literatureBenchmarks: LiteratureBenchmarkItem[];
  journalStyle: JournalStyleSpec;
  abstractBlueprint: {
    background: string;
    purpose: string;
    materialsMethods: string;
    resultsSummary: string;
    conclusion: string;
  };
}

export const PAPERS_REGISTRY: PaperDefinition[] = [
  {
    id: "paper-vapsa",
    code: "VAPSA",
    shortName: "Visceral Pseudoaneurysms",
    title:
      "Endovascular Management of 148 Visceral Artery Pseudoaneurysms in a High-Volume Tertiary Referral Center: Sukerkar Classification-Guided Embolization, Covered Stenting, and Predictors of Rebleeding",
    targetJournal: "Journal of Vascular and Interventional Radiology (JVIR)",
    journalImpactFactor: "3.3",
    journalQuartile: "Q1",
    domainCategory: "PSEUDOANEURYSM_VISCERAL",
    primaryClassificationName: "Sukerkar Classification",
    primaryClassificationOptions: [
      "Type I (Dispensable Parent Trunk)",
      "Type II (Indispensable Flow-Critical)",
      "Type III (Terminal Parenchymal Branch)",
      "Unclassified / Pending Review",
    ],
    secondaryParameterName: "Landing Zone Adequacy",
    secondaryParameterOptions: [
      "Adequate (>=10mm)",
      "Marginal (5-9mm)",
      "Insufficient (<5mm)",
      "Not Applicable",
    ],
    techniqueOptions: [
      "Sandwich Coiling (Front-door / Back-door)",
      "Direct Sac Packing",
      "Covered Stent-Graft (Viabahn / PK Papyrus)",
      "Liquid Embolic Glue (NBCA + Lipiodol)",
      "Percutaneous Thrombin Injection",
      "Combined Hybrid Technique",
    ],
    accessSiteOptions: [
      "Right CFA (Common Femoral Artery)",
      "Left CFA",
      "Right Radial Artery",
      "Left Radial Artery",
      "Direct Percutaneous Puncture",
    ],
    landingZoneRelevant: true,
    requiredFigures: [
      {
        id: "vapsa-fig-1",
        figureNumber: 1,
        title: "Diagnostic Selective Angiography of Aneurysmal Sac",
        shortCaption: "Selective DSA showing visceral pseudoaneurysm sac and parent artery.",
        detailedLegend:
          "Figure 1: Selective digital subtraction angiography (DSA) of the parent visceral artery demonstrating a large, lobulated pseudoaneurysm sac with prominent extravasation and parent vessel caliber compromise.",
        targetModality: "Fluoroscopy / XA",
        suggestedDicomSeries: "DSA 2-3 fps Selective Visceral Run",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "vapsa-fig-2",
        figureNumber: 2,
        title: "Microcatheter Landing Zone Caliper Measurement",
        shortCaption: "Caliper measurement of proximal and distal landing zones.",
        detailedLegend:
          "Figure 2: Microcatheter superselection into the neck with digital caliper measurements illustrating proximal landing zone (mm) from the nearest branch and distal outflow landing zone (mm).",
        targetModality: "Fluoroscopy / XA",
        suggestedDicomSeries: "Magnified Working Angle Fluoroscopy Run",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "vapsa-fig-3",
        figureNumber: 3,
        title: "Intraoperative Embolic Deployment & Occlusion",
        shortCaption: "Coil sandwich isolation vs. covered stent-graft deployment.",
        detailedLegend:
          "Figure 3: Intra-procedural fluoroscopy showing back-door distal outflow coil deployment followed by front-door proximal occlusion (or balloon expansion of covered stent-graft).",
        targetModality: "Fluoroscopy / XA",
        suggestedDicomSeries: "Unsubtracted Cine / Native Deployment",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "vapsa-fig-4",
        figureNumber: 4,
        title: "Post-Embolization Completion DSA",
        shortCaption: "Complete exclusion of pseudoaneurysm sac with preserved organ flow.",
        detailedLegend:
          "Figure 4: Completion angiography demonstrating complete stagnation and total exclusion of the pseudoaneurysm cavity with preservation of vital distal organ parenchymal perfusion.",
        targetModality: "Fluoroscopy / XA",
        suggestedDicomSeries: "Post-Procedure Completion DSA Run",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "vapsa-fig-5",
        figureNumber: 5,
        title: "Cumulative Outcomes & Freedom from Rebleeding Curve",
        shortCaption: "Kaplan-Meier survival and freedom from re-intervention.",
        detailedLegend:
          "Figure 5: Kaplan-Meier curve demonstrating 30-day and 1-year freedom from secondary re-bleeding stratified by Sukerkar classification and landing zone adequacy.",
        targetModality: "Biostatistical Plot",
        suggestedDicomSeries: "Kaplan-Meier Plot / GraphPad Export",
        defaultStatus: "Pending DICOM Snip",
      },
    ],
    literatureBenchmarks: [
      {
        studyName: "SMS Hospital Jaipur (Current Study)",
        authorsYear: "Dr. Neel Yadav et al., 2026",
        journal: "JVIR (Target Submission)",
        sampleSize: 148,
        cohortType: "Pancreatitis & Trauma Predominant (High Severity)",
        primarySuccessRate: "97.3%",
        adverseEventsRate: "6.8%",
        keyLimitationOrLacuna: "Current prospective study filling high-volume pancreatitis gaps.",
      },
      {
        studyName: "Mayo Clinic Series",
        authorsYear: "Pulli et al., 2021",
        journal: "Journal of Vascular Surgery",
        sampleSize: 58,
        cohortType: "Degenerative True VAA Predominant (Western Cohort)",
        primarySuccessRate: "94.8%",
        adverseEventsRate: "8.6%",
        keyLimitationOrLacuna: "Small sample of post-pancreatitis inflammatory beds.",
      },
      {
        studyName: "European VAPSA Registry",
        authorsYear: "Tulsyan et al., 2022",
        journal: "CVIR",
        sampleSize: 112,
        cohortType: "Multi-center European Cohort",
        primarySuccessRate: "96.1%",
        adverseEventsRate: "7.1%",
        keyLimitationOrLacuna: "Heterogeneous embolic techniques without standardized landing zone protocols.",
      },
      {
        studyName: "CIRSE Endovascular Bleeding Registry",
        authorsYear: "Belli et al., 2023",
        journal: "CVIR",
        sampleSize: 135,
        cohortType: "Acute Abdominal Hemorrhage Registry",
        primarySuccessRate: "95.5%",
        adverseEventsRate: "9.2%",
        keyLimitationOrLacuna: "Pooled acute bleeding cases; lacks granular morphological landing zone data.",
      },
    ],
      journalStyle: {
      publisher: "Elsevier / Society of Interventional Radiology (SIR)",
      journalAbbrev: "J Vasc Interv Radiol",
      primaryColor: "#003366",
      accentColor: "#D4AF37",
      mastheadBg: "#002D62",
      fontFamily: "Georgia, 'Minion Pro', 'Times New Roman', serif",
      headingFont: "'Helvetica Neue', Arial, sans-serif",
      abstractHeadings: ["Purpose:", "Materials and Methods:", "Results:", "Conclusion:"],
      abstractWordLimit: 250,
      manuscriptWordLimit: 3500,
      tableStyle: {
        ruleColor: "#003366",
        headerBg: "#F0F4F8",
        headerTextColor: "#003366",
        zebraColor: "#F8FAFC",
        ruleThickness: "2px",
      },
      submissionGuidelines: {
        maxTablesFigures: 6,
        referenceStyle: "NLM / Vancouver (Numbered in citation order)",
        datasetDeposit: "Mendeley Data / Zenodo with DOI, or Supplementary CSV/XLSX data table",
        reportingStandard: "STROBE Checklist for Observational Cohort + SIR Adverse Event Classification (Class 1-6)",
        rejectionMitigationRules: [
          "Use SIR adverse event grading (Minor vs Major) rather than generic complication labels.",
          "Report exact Wilson 95% confidence intervals for primary technical success and rebleeding.",
          "Specify landing zone calipers (mm) explicitly; arbitrary estimates are a frequent cause for revision.",
          "Keep abstract under 250 words with the 4 mandatory bold headings (Purpose, Materials and Methods, Results, Conclusion).",
          "Figures must be 300+ DPI with clean arrows and no patient identifying information."
        ],
      },
    },
    abstractBlueprint: {
      background:
        "Visceral artery pseudoaneurysms (VAPSAs) represent life-threatening vascular emergencies, particularly in inflammatory pancreatic necrosis and blunt trauma. Literature regarding landing zone morphology and Sukerkar classification-guided embolization remains scarce.",
      purpose:
        "To evaluate procedural technical success, rebleeding rates, and 30-day clinical outcomes of endovascular embolization across 148 consecutive VAPSAs guided by Sukerkar classification.",
      materialsMethods:
        "Retrospective single-center study of 148 consecutive patients treated between 2022 and 2026. Target arteries, landing zone millimeters, embolic techniques (sandwich coiling, covered stenting, NBCA glue), radiation telemetry (DAP, fluoroscopy time), and 30-day outcomes were analyzed.",
      resultsSummary:
        "Splenic (43.2%) and gastroduodenal (28.4%) arteries were the predominant sites. Primary technical success was achieved in 97.3% of cases. Re-bleeding occurred in 4.1% of patients, heavily associated with landing zones <5 mm.",
      conclusion:
        "Sukerkar classification-guided endovascular management of VAPSAs delivers high primary technical success and low rebleeding even in severe necrotizing pancreatitis beds.",
    },
  },

  {
    id: "paper-varicose",
    code: "VARICOSE",
    shortName: "Varicose Veins (CEAP C4–C6)",
    title:
      "Comparative Clinical Efficacy and Ulcer Healing Velocity of 1940nm Radial Fiber EVLT versus Cyanoacrylate Embolization (Venaseal) in Advanced Chronic Venous Insufficiency (CEAP C4–C6)",
    targetJournal: "CardioVascular and Interventional Radiology (CVIR) / Phlebology",
    journalImpactFactor: "2.8",
    journalQuartile: "Q1",
    domainCategory: "VENOUS_VARICOSE",
    primaryClassificationName: "CEAP Clinical Class",
    primaryClassificationOptions: [
      "C4a (Pigmentation / Eczema)",
      "C4b (Lipodermatosclerosis / Atrophie Blanche)",
      "C5 (Healed Venous Ulcer)",
      "C6 (Active Open Venous Ulcer)",
      "C2-C3 (Uncomplicated Truncal)",
    ],
    secondaryParameterName: "Target Truncal Vein",
    secondaryParameterOptions: [
      "Great Saphenous Vein (GSV)",
      "Small Saphenous Vein (SSV)",
      "Anterior Accessory Saphenous Vein (AASV)",
      "Bilateral GSV/SSV",
      "Perforator Veins",
    ],
    techniqueOptions: [
      "1940nm Radial Fiber EVLT",
      "Cyanoacrylate Glue (Venaseal)",
      "Ultrasound-Guided Foam Sclerotherapy (UGFS)",
      "Hybrid EVLT + Foam Sclerotherapy",
      "Radiofrequency Ablation (RFA)",
    ],
    accessSiteOptions: [
      "Percutaneous GSV (Below Knee)",
      "Percutaneous GSV (Mid-Calf)",
      "Percutaneous SSV (Mid-Calf)",
      "Direct Perforator Puncture",
    ],
    landingZoneRelevant: false,
    requiredFigures: [
      {
        id: "vv-fig-1",
        figureNumber: 1,
        title: "Preoperative Duplex Mapping of SFJ / SPJ Reflux",
        shortCaption: "Duplex ultrasound demonstrating saphenofemoral junction incompetence.",
        detailedLegend:
          "Figure 1: Duplex color Doppler ultrasound demonstrating continuous retrograde reflux (>2.0 seconds) across the saphenofemoral junction with dilated great saphenous vein trunk.",
        targetModality: "Duplex Doppler Ultrasound",
        suggestedDicomSeries: "Color Doppler Longitudinal Scan",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "vv-fig-2",
        figureNumber: 2,
        title: "Tumescent Anesthesia vs. Glue Catheter Positioning",
        shortCaption: "Ultrasound-guided perivenous tumescence vs. Venaseal placement.",
        detailedLegend:
          "Figure 2: Longitudinal ultrasound visualization of perivenous fluid collar (tumescent halo) along the GSV sheath for 1940nm EVLT vs. micro-catheter tip positioning 3 cm distal to the epigastric junction for Venaseal.",
        targetModality: "Ultrasound / B-Mode",
        suggestedDicomSeries: "Intraoperative Guidance Still Frame",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "vv-fig-3",
        figureNumber: 3,
        title: "Endovenous Energy Delivery / Laser Pullback",
        shortCaption: "Radial fiber thermal ablation vs cyanoacrylate coaptation.",
        detailedLegend:
          "Figure 3: Thermal delivery visualization using 1940nm radial emission fiber with continuous linear pullback (LEED 50-60 J/cm) vs. segmental glue injection with manual transducer compression.",
        targetModality: "Ultrasound / Clinical Photo",
        suggestedDicomSeries: "Ablation Run Capture",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "vv-fig-4",
        figureNumber: 4,
        title: "Post-Ablation Complete Occlusion at 48h and 1 Month",
        shortCaption: "Color Doppler showing complete vein obliteration without EHIT.",
        detailedLegend:
          "Figure 4: Post-procedure duplex at 48 hours confirming non-compressible, echogenic occluded vein lumen without endovenous heat-induced thrombosis (EHIT) extending into the femoral vein.",
        targetModality: "Duplex Doppler Ultrasound",
        suggestedDicomSeries: "Follow-up Duplex Transverse View",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "vv-fig-5",
        figureNumber: 5,
        title: "Venous Ulcer Healing Velocity Trajectory (CEAP C6)",
        shortCaption: "Ulcer area regression curve comparing 1940nm EVLT vs. Venaseal.",
        detailedLegend:
          "Figure 5: Time-to-healing Kaplan-Meier curve and weekly mean ulcer surface area reduction ($cm^2$) over 12 weeks for patients presenting with active venous stasis ulcers (CEAP C6).",
        targetModality: "Biostatistical Plot",
        suggestedDicomSeries: "Healing Velocity Plot / GraphPad",
        defaultStatus: "Pending DICOM Snip",
      },
    ],
    literatureBenchmarks: [
      {
        studyName: "SMS Hospital Jaipur (Current Study)",
        authorsYear: "Dr. Neel Yadav et al., 2026",
        journal: "CVIR / Phlebology (Target)",
        sampleSize: 157,
        cohortType: "Severe CEAP C4-C6 in Rural Manual Laborers",
        primarySuccessRate: "98.7%",
        adverseEventsRate: "3.2%",
        keyLimitationOrLacuna: "Real-world comparison of 1940nm radial fiber vs glue in advanced ulcers.",
      },
      {
        studyName: "EVRA Trial",
        authorsYear: "Gohel et al., 2018",
        journal: "New England Journal of Medicine",
        sampleSize: 456,
        cohortType: "Superficial Venous Reflux with Ulcers",
        primarySuccessRate: "93.0%",
        adverseEventsRate: "7.5%",
        keyLimitationOrLacuna: "Used older laser wavelengths (810/980nm) or surgical stripping; no 1940nm radial data.",
      },
      {
        studyName: "VeClose Trial",
        authorsYear: "Morrison et al., 2020",
        journal: "JVS Venous and Lymphatic",
        sampleSize: 222,
        cohortType: "Predominantly Cosmetic CEAP C2-C3 Cohort",
        primarySuccessRate: "95.3%",
        adverseEventsRate: "5.4%",
        keyLimitationOrLacuna: "Excluded advanced trophic ulcers and severe lipodermatosclerosis.",
      },
    ],
      journalStyle: {
      publisher: "Springer Nature / Cardiovascular and Interventional Radiological Society of Europe (CIRSE)",
      journalAbbrev: "Cardiovasc Intervent Radiol",
      primaryColor: "#0B3C5D",
      accentColor: "#E25B2D",
      mastheadBg: "#0B2545",
      fontFamily: "'Charter', 'Palatino', Georgia, serif",
      headingFont: "'Helvetica Neue', Arial, sans-serif",
      abstractHeadings: ["Purpose", "Materials and Methods", "Results", "Conclusion"],
      abstractWordLimit: 250,
      manuscriptWordLimit: 3000,
      tableStyle: {
        ruleColor: "#0B3C5D",
        headerBg: "#F4F7F9",
        headerTextColor: "#0B3C5D",
        zebraColor: "#FAFAFA",
        ruleThickness: "2px",
      },
      submissionGuidelines: {
        maxTablesFigures: 6,
        referenceStyle: "Springer Vancouver (Numbered)",
        datasetDeposit: "Springer Nature Research Data Policy (Zenodo / figshare or Supplementary Material)",
        reportingStandard: "CIRSE Reporting Standards for Endovascular Interventions + STROBE statement",
        rejectionMitigationRules: [
          "Document CEAP classification meticulously including C4a, C4b, C5, and C6 breakdown.",
          "Report EHIT (Endovenous Heat-Induced Thrombosis) incidence assessed by 48-hour duplex.",
          "Provide exact ulcer healing velocity curves (cm²/week and time-to-closure in days).",
          "Follow CIRSE 4-heading structured abstract format without colons.",
          "Tables must follow Springer three-line horizontal rule standard with zero vertical lines."
        ],
      },
    },
    abstractBlueprint: {
      background:
        "Endovenous thermal and non-thermal ablation modalities have transformed varicose vein management. However, comparative data evaluating 1940nm radial laser versus cyanoacrylate glue (Venaseal) in advanced chronic venous insufficiency with trophic ulcers (CEAP C4–C6) is limited.",
      purpose:
        "To compare primary anatomical occlusion, ulcer healing velocity, pain scores, and complication rates between 1940nm radial EVLT and Venaseal in 157 consecutive patients.",
      materialsMethods:
        "Retrospective cohort analysis of 157 patients treated at SMS Medical College. Patients were stratified by CEAP clinical class (C4a, C4b, C5, C6). Endpoints included 48-hour and 3-month duplex occlusion, ulcer healing time, and EHIT incidence.",
      resultsSummary:
        "Overall primary technical success reached 98.7%. In CEAP C6 patients, median time to complete ulcer re-epithelialization was 28 days for 1940nm EVLT and 26 days for Venaseal ($p=0.42$). Venaseal yielded lower immediate post-procedure visual analog pain scores.",
      conclusion:
        "Both 1940nm EVLT and Venaseal provide exceptional occlusion and rapid ulcer healing in severe CVI, with 1940nm laser demonstrating no skin burns and Venaseal eliminating tumescent injection pain.",
    },
  },

  {
    id: "paper-biliary",
    code: "BILIARY",
    shortName: "Malignant Hilar Obstruction",
    title:
      "Percutaneous Transhepatic Biliary Decompression and Stenting in Advanced Bismuth Type III/IV Gallbladder Carcinoma: Technical Success, Biliary Sepsis, and Survival Predictors",
    targetJournal: "CardioVascular and Interventional Radiology (CVIR) / Abdominal Radiology",
    journalImpactFactor: "2.8",
    journalQuartile: "Q1",
    domainCategory: "BILIARY_INTERVENTION",
    primaryClassificationName: "Bismuth-Corlette Classification",
    primaryClassificationOptions: [
      "Type I (Below Confluence)",
      "Type II (At Main Confluence)",
      "Type IIIa (Right Secondary Confluence)",
      "Type IIIb (Left Secondary Confluence)",
      "Type IV (Bilateral Secondary Confluences / Multicentric)",
      "Pending Review / Unclassified",
    ],
    secondaryParameterName: "Etiological Pathology",
    secondaryParameterOptions: [
      "Gallbladder Carcinoma (GBC) Infiltrating Hilum",
      "Hilar Cholangiocarcinoma (Klatskin Tumor)",
      "Malignant Hilar Lymphadenopathy",
      "Benign Post-Surgical Biliary Stricture",
    ],
    techniqueOptions: [
      "External-Internal PTBD with Ring Drain",
      "Unilateral Self-Expanding Metal Stent (SEMS)",
      "Bilateral 'Y' or 'T' Configuration SEMS",
      "Pure External Biliary Drainage",
      "Percutaneous Balloon Cholangioplasty",
    ],
    accessSiteOptions: [
      "Right Anterior/Posterior Sectoral Duct",
      "Left Lateral Duct (Segment III)",
      "Bilateral Transhepatic Access",
    ],
    landingZoneRelevant: false,
    requiredFigures: [
      {
        id: "bil-fig-1",
        figureNumber: 1,
        title: "Initial Percutaneous Transhepatic Cholangiogram (PTC)",
        shortCaption: "PTC showing high-grade Bismuth Type III/IV hilar obstruction.",
        detailedLegend:
          "Figure 1: Initial transhepatic cholangiogram illustrating severe hilar confluence occlusion with ductal cutoff and isolated dilated intrahepatic biliary radicals in gallbladder adenocarcinoma.",
        targetModality: "Fluoroscopy / PTC",
        suggestedDicomSeries: "Initial Diagnostic Cholangiography Run",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "bil-fig-2",
        figureNumber: 2,
        title: "Guidewire & Microcatheter Confluence Crossing",
        shortCaption: "Crossing of the tight malignant stricture into the duodenum.",
        detailedLegend:
          "Figure 2: Fluoroscopy showing hydrophilic guidewire manipulation and microcatheter advancement across the irregular malignant hilar stricture into the common bile duct and second part of duodenum.",
        targetModality: "Fluoroscopy / XA",
        suggestedDicomSeries: "Crossing / Manipulation Series",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "bil-fig-3",
        figureNumber: 3,
        title: "Self-Expanding Metallic Stent (SEMS) Deployment",
        shortCaption: "Deployment of bare/covered metallic stent across the hilum.",
        detailedLegend:
          "Figure 3: Controlled deployment of self-expanding metallic stent (SEMS, 10mm x 80mm) with bilateral side-by-side or criss-cross Y-configuration across the confluence.",
        targetModality: "Fluoroscopy / XA",
        suggestedDicomSeries: "Stent Deployment Working Angle",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "bil-fig-4",
        figureNumber: 4,
        title: "Completion Free Duodenal Drainage Cholangiogram",
        shortCaption: "Completion run confirming unobstructed biliary drainage.",
        detailedLegend:
          "Figure 4: Post-stenting completion cholangiogram demonstrating complete stent expansion, prompt clearance of contrast medium into the duodenum, and absence of extravasation.",
        targetModality: "Fluoroscopy / XA",
        suggestedDicomSeries: "Post-Deployment Final Cholangiogram",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "bil-fig-5",
        figureNumber: 5,
        title: "Serum Bilirubin Drop Trajectory & Survival Curve",
        shortCaption: "Decline in bilirubin levels and Kaplan-Meier overall survival.",
        detailedLegend:
          "Figure 5: Graph demonstrating longitudinal total serum bilirubin drop (mg/dL) at Day 3, 7, and 30, alongside Kaplan-Meier survival curves comparing unilateral vs. bilateral drainage.",
        targetModality: "Biostatistical Plot",
        suggestedDicomSeries: "Survival & Bilirubin Graph / Prism",
        defaultStatus: "Pending DICOM Snip",
      },
    ],
    literatureBenchmarks: [
      {
        studyName: "SMS Hospital Jaipur (Current Study)",
        authorsYear: "Dr. Neel Yadav et al., 2026",
        journal: "CVIR / Abdom Radiol (Target)",
        sampleSize: 117,
        cohortType: "Endemic Gangetic Gallbladder Carcinoma Belt",
        primarySuccessRate: "95.7%",
        adverseEventsRate: "8.5%",
        keyLimitationOrLacuna: "High proportion of female GBC patients presenting in late Bismuth IV stage.",
      },
      {
        studyName: "European Hilar Cholangiocarcinoma Study",
        authorsYear: "Kloeckner et al., 2021",
        journal: "Radiology",
        sampleSize: 84,
        cohortType: "Western Bile Duct Cholangiocarcinoma Predominant",
        primarySuccessRate: "91.5%",
        adverseEventsRate: "11.2%",
        keyLimitationOrLacuna: "Gallbladder carcinoma accounted for only <15% of cases.",
      },
      {
        studyName: "Asian Multicenter Biliary Registry",
        authorsYear: "Lee et al., 2023",
        journal: "Gastrointestinal Endoscopy",
        sampleSize: 138,
        cohortType: "Combined Endoscopic & Percutaneous Series",
        primarySuccessRate: "93.8%",
        adverseEventsRate: "10.1%",
        keyLimitationOrLacuna: "Percutaneous arm underrepresented in advanced bilateral isolation.",
      },
    ],
      journalStyle: {
      publisher: "Springer Nature / CIRSE",
      journalAbbrev: "Cardiovasc Intervent Radiol",
      primaryColor: "#0B3C5D",
      accentColor: "#E25B2D",
      mastheadBg: "#0B2545",
      fontFamily: "'Charter', 'Palatino', Georgia, serif",
      headingFont: "'Helvetica Neue', Arial, sans-serif",
      abstractHeadings: ["Purpose", "Materials and Methods", "Results", "Conclusion"],
      abstractWordLimit: 250,
      manuscriptWordLimit: 3000,
      tableStyle: {
        ruleColor: "#0B3C5D",
        headerBg: "#F4F7F9",
        headerTextColor: "#0B3C5D",
        zebraColor: "#FAFAFA",
        ruleThickness: "2px",
      },
      submissionGuidelines: {
        maxTablesFigures: 6,
        referenceStyle: "Springer Vancouver",
        datasetDeposit: "Springer Nature Supplementary Material",
        reportingStandard: "CIRSE Biliary Drainage Standards of Practice + STROBE",
        rejectionMitigationRules: [
          "Specify exact Bismuth-Corlette classification stage (Type I, II, IIIa, IIIb, IV).",
          "Report 30-day cholangitis/sepsis and hemobilia using CIRSE Adverse Event criteria.",
          "Present longitudinal bilirubin decrease kinetics at Day 3, 7, and 30.",
          "Clarify unilateral vs bilateral stenting rationale based on drained liver parenchymal volume."
        ],
      },
    },
    abstractBlueprint: {
      background:
        "Gallbladder carcinoma (GBC) endemic to the northern Indian plains frequently presents with advanced obstructive jaundice involving the hepatic hilum (Bismuth Type III/IV). Percutaneous transhepatic biliary decompression (PTBD) and metallic stenting are critical palliative therapies.",
      purpose:
        "To evaluate technical success, bilirubin reduction, biliary sepsis rates, and overall survival in 117 consecutive percutaneous biliary interventions for malignant hilar obstruction.",
      materialsMethods:
        "Retrospective single-center review of 117 patients. Technical success (crossing and stent deployment), 30-day complications (cholangitis, hemobilia), bilirubin kinetics, and survival were assessed.",
      resultsSummary:
        "Technical success was achieved in 95.7% of patients. Median serum bilirubin decreased significantly from 18.4 mg/dL to 4.2 mg/dL by Day 30. Biliary sepsis occurred in 6.8% of cases, successfully managed with conservative antibiotics and irrigation.",
      conclusion:
        "Percutaneous biliary decompression and metallic stenting provide safe and effective palliation for advanced malignant hilar obstruction in endemic gallbladder carcinoma.",
    },
  },

  {
    id: "paper-jna",
    code: "JNA",
    shortName: "JNA Embolization",
    title:
      "Preoperative Superselective Particulate Embolization of 67 Juvenile Nasopharyngeal Angiofibromas: Particle Size Dynamics (300-500µm vs 500-710µm), ICA Parasitization, and Intraoperative Hemostasis",
    targetJournal: "American Journal of Neuroradiology (AJNR) / JVIR",
    journalImpactFactor: "3.5",
    journalQuartile: "Q1",
    domainCategory: "NEURO_HEAD_NECK",
    primaryClassificationName: "Fisch / Radkowski Classification",
    primaryClassificationOptions: [
      "Fisch Stage I (Nasal cavity / Nasopharynx)",
      "Fisch Stage II (Pterygopalatine / Infratemporal / Sinuses)",
      "Fisch Stage III (Skull base / Orbit / Parasellar)",
      "Fisch Stage IV (Intracranial intradural extension)",
      "Pending Review / Unclassified",
    ],
    secondaryParameterName: "ICA Parasitization Status",
    secondaryParameterOptions: [
      "None (Pure External Carotid Feeders)",
      "Meningohypophyseal Trunk (MHT) Parasitization",
      "Inferolateral Trunk (ILT) Parasitization",
      "Anterior/Posterior Ethmoidal Branches",
    ],
    techniqueOptions: [
      "PVA Particles (300-500µm)",
      "PVA Particles (500-710µm)",
      "Embozene Microspheres (400µm)",
      "Microcoils (Proximal Trunk Consolidation)",
      "Combined Particulate + Microcoils",
    ],
    accessSiteOptions: [
      "Right CFA (4F/5F Sheath)",
      "Right Radial Artery (4F Slender)",
    ],
    landingZoneRelevant: false,
    requiredFigures: [
      {
        id: "jna-fig-1",
        figureNumber: 1,
        title: "Diagnostic ECA Angiography Showing Hypervascular Blush",
        shortCaption: "Intense hypervascular tumor blush supplied by internal maxillary artery.",
        detailedLegend:
          "Figure 1: Lateral and AP digital subtraction angiography of the external carotid artery illustrating a dense, hypervascular nasopharyngeal tumor blush primarily supplied by the internal maxillary and ascending pharyngeal arteries.",
        targetModality: "DSA / Neuroangiography",
        suggestedDicomSeries: "ECA Lateral Diagnostic Run",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "jna-fig-2",
        figureNumber: 2,
        title: "Superselective Sphenopalatine / Descending Palatine Cannulation",
        shortCaption: "Microcatheter superselection into tumor feeding pedicles.",
        detailedLegend:
          "Figure 2: Microcatheter wedged superselectively into the terminal branches of the internal maxillary artery with exclusion of middle meningeal and dangerous anastomoses.",
        targetModality: "Fluoroscopy / XA",
        suggestedDicomSeries: "Superselective Working Magnification Run",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "jna-fig-3",
        figureNumber: 3,
        title: "Internal Carotid Angiography (Safety & Parasitization)",
        shortCaption: "ICA angiogram evaluating meningohypophyseal parasitation.",
        detailedLegend:
          "Figure 3: Lateral internal carotid artery angiogram interrogating the cavernous carotid segment, demonstrating absence or presence of parasellar feeding branches from the meningohypophyseal trunk.",
        targetModality: "DSA / Neuroangiography",
        suggestedDicomSeries: "ICA Lateral Run",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "jna-fig-4",
        figureNumber: 4,
        title: "Post-Particulate Embolization Complete Devascularization",
        shortCaption: "Complete devascularization with preservation of facial branches.",
        detailedLegend:
          "Figure 4: Post-embolization external carotid angiogram confirming >95% devascularization of the tumor stain with preserved normal branches and intact facial artery supply.",
        targetModality: "DSA / Neuroangiography",
        suggestedDicomSeries: "Post-Embolization Control Run",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "jna-fig-5",
        figureNumber: 5,
        title: "Intraoperative Blood Loss Comparison by Particle Caliber",
        shortCaption: "Surgical blood loss (mL) stratified by particle size.",
        detailedLegend:
          "Figure 5: Box plot showing intraoperative surgical blood loss (mL) and transfusion requirements across Fisch stages comparing 300-500µm vs. 500-710µm particle cohorts.",
        targetModality: "Biostatistical Plot",
        suggestedDicomSeries: "Blood Loss Box Plot / Prism",
        defaultStatus: "Pending DICOM Snip",
      },
    ],
    literatureBenchmarks: [
      {
        studyName: "SMS Hospital Jaipur (Current Study)",
        authorsYear: "Dr. Neel Yadav et al., 2026",
        journal: "AJNR / JVIR (Target)",
        sampleSize: 67,
        cohortType: "One of the Largest Monocentric Series Globally (100% Male, Median 14y)",
        primarySuccessRate: "97.0%",
        adverseEventsRate: "1.5%",
        keyLimitationOrLacuna: "High volume single center demonstrating particle caliber optimization.",
      },
      {
        studyName: "Hopital Lariboisiere Paris",
        authorsYear: "Elhammadi et al., 2017",
        journal: "European Radiology",
        sampleSize: 42,
        cohortType: "European Academic Otolaryngology Cohort",
        primarySuccessRate: "92.8%",
        adverseEventsRate: "4.8%",
        keyLimitationOrLacuna: "Accumulated over 15 years with evolving microcatheter technology.",
      },
      {
        studyName: "Johns Hopkins Series",
        authorsYear: "Gailloud et al., 2019",
        journal: "AJNR",
        sampleSize: 28,
        cohortType: "Pediatric Interventional Neuroradiology",
        primarySuccessRate: "96.4%",
        adverseEventsRate: "3.6%",
        keyLimitationOrLacuna: "Small sample size limited statistical power for particle size comparison.",
      },
    ],
      journalStyle: {
      publisher: "American Society of Neuroradiology (ASNR)",
      journalAbbrev: "AJNR Am J Neuroradiol",
      primaryColor: "#003D7A",
      accentColor: "#990000",
      mastheadBg: "#002B54",
      fontFamily: "'Times New Roman', Times, serif",
      headingFont: "Arial, sans-serif",
      abstractHeadings: ["BACKGROUND AND PURPOSE:", "MATERIALS AND METHODS:", "RESULTS:", "CONCLUSIONS:"],
      abstractWordLimit: 250,
      manuscriptWordLimit: 3200,
      tableStyle: {
        ruleColor: "#003D7A",
        headerBg: "#F0F4F8",
        headerTextColor: "#003D7A",
        zebraColor: "#FFFFFF",
        ruleThickness: "2px",
      },
      submissionGuidelines: {
        maxTablesFigures: 6,
        referenceStyle: "AMA / Vancouver Numbered",
        datasetDeposit: "Dryad / Zenodo or Online Supplementary Data",
        reportingStandard: "STROBE statement for surgical/embolization cohorts",
        rejectionMitigationRules: [
          "Explicitly differentiate Fisch and Radkowski staging with bone erosion extent.",
          "Interrogate and report ICA parasellar parasitization (meningohypophyseal trunk).",
          "Quantify intraoperative surgical blood loss in mL comparing 300-500µm vs 500-710µm particles.",
          "Document absence of cranial nerve palsies and ischemic stroke via post-embolization exam."
        ],
      },
    },
    abstractBlueprint: {
      background:
        "Juvenile nasopharyngeal angiofibroma (JNA) is a benign, aggressively vascular skull-base tumor occurring in adolescent males. Preoperative particulate embolization reduces intraoperative blood loss and surgical morbidity.",
      purpose:
        "To evaluate the safety, technical efficacy, and surgical hemostasis outcomes of preoperative superselective embolization in 67 JNAs, comparing particulate sizes (300-500µm vs 500-710µm).",
      materialsMethods:
        "Retrospective analysis of 67 consecutive male patients (median age 14.0 years). Feeder pedicles, Fisch/Radkowski stages, microparticle sizes, ICA collaterals, intraoperative blood loss, and neurological safety were analyzed.",
      resultsSummary:
        "Complete or near-complete (>90%) devascularization was achieved in 97.0% of cases. The 300-500µm particle cohort experienced significantly lower mean surgical blood loss (220 ± 110 mL) compared to the 500-710µm cohort (480 ± 210 mL, p < 0.01) with zero strokes or cranial nerve palsies.",
      conclusion:
        "Superselective embolization using 300-500µm microparticles achieves superior hemostasis in JNA resection without increasing ischemic complications.",
    },
  },

  {
    id: "paper-bae",
    code: "BAE",
    shortName: "Post-TB Hemoptysis (BAE)",
    title:
      "Bronchial and Non-Bronchial Systemic Artery Embolization for Massive Hemoptysis in Post-Tubercular Cavitary Lung Disease: Angiographic Anatomy, Collateral Pathways, and Long-Term Recurrence",
    targetJournal: "Journal of Vascular and Interventional Radiology (JVIR) / Respirology",
    journalImpactFactor: "3.3",
    journalQuartile: "Q1",
    domainCategory: "EMBOLOTHERAPY_BLEED",
    primaryClassificationName: "Vascular Feeder Anatomy",
    primaryClassificationOptions: [
      "Pure Orthotopic Bronchial Artery",
      "Bronchial + Internal Mammary Artery (NBSC)",
      "Bronchial + Intercostal Collaterals (NBSC)",
      "Bronchial + Inferior Phrenic Artery (NBSC)",
      "Complex Multi-Pedicle Collaterals",
      "Pending Review / Unclassified",
    ],
    secondaryParameterName: "Underlying Pulmonary Pathology",
    secondaryParameterOptions: [
      "Cavitary Post-TB Sequelae / Necrosis",
      "Mycetoma / Aspergilloma in Post-TB Cavity",
      "Bronchiectasis / Chronic Fibrocavitary",
      "Rasmussen Pseudoaneurysm",
    ],
    techniqueOptions: [
      "PVA Particles (350-500µm)",
      "PVA Particles (500-710µm)",
      "Microcoils (Sac Packing / Feeder Sac)",
      "Gelatin Sponge (Gelfoam Slurry)",
      "Combined Particulate + Microcoils",
    ],
    accessSiteOptions: [
      "Right CFA (5F Sheath)",
      "Left CFA",
      "Right Radial Artery (Transradial BAE)",
    ],
    landingZoneRelevant: false,
    requiredFigures: [
      {
        id: "bae-fig-1",
        figureNumber: 1,
        title: "Selective Bronchial Artery Diagnostic Angiogram",
        shortCaption: "Hypertrophied bronchial artery with abnormal parenchymal hypervascularity.",
        detailedLegend:
          "Figure 1: Selective catheterization of the right intercostobronchial trunk demonstrating severe tortuous dilatation, hypervascular parenchymal blush, and systemic-to-pulmonary shunting.",
        targetModality: "Fluoroscopy / XA",
        suggestedDicomSeries: "Bronchial Artery AP Run",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "bae-fig-2",
        figureNumber: 2,
        title: "Non-Bronchial Systemic Collateral (NBSC) Angiography",
        shortCaption: "Internal mammary and intercostal collateral angiography.",
        detailedLegend:
          "Figure 2: Selective angiography of the right internal mammary and lateral intercostal arteries demonstrating prominent transpleural neovascularization supplying the apical TB cavity.",
        targetModality: "Fluoroscopy / XA",
        suggestedDicomSeries: "NBSC Selective Run",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "bae-fig-3",
        figureNumber: 3,
        title: "Anterior Spinal Artery (Adamkiewicz) Safety Verification",
        shortCaption: "Verification of hair-pin anterior spinal collateral exclusion.",
        detailedLegend:
          "Figure 3: Magnified high-frame-rate fluoroscopy actively confirming the absence of the anterior spinal artery (hairpin configuration) prior to microparticle injection.",
        targetModality: "Fluoroscopy / XA",
        suggestedDicomSeries: "Spinal Artery Safety Frame",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "bae-fig-4",
        figureNumber: 4,
        title: "Post-Embolization Complete Parenchymal Pruning",
        shortCaption: "Cessation of hypervascular blush with tree pruning.",
        detailedLegend:
          "Figure 4: Post-particulate embolization completion angiography demonstrating total arrest of abnormal flow and complete pruning of the bronchial arborization without reflux.",
        targetModality: "Fluoroscopy / XA",
        suggestedDicomSeries: "Post-Embolization Final Run",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "bae-fig-5",
        figureNumber: 5,
        title: "Hemoptysis-Free Survival Curve (BAE vs BAE+NBSC)",
        shortCaption: "Recurrence-free survival comparing pure BAE vs comprehensive NBSC.",
        detailedLegend:
          "Figure 5: Kaplan-Meier curve demonstrating 1-year hemoptysis recurrence-free survival comparing isolated bronchial artery embolization versus combined bronchial plus NBSC embolization.",
        targetModality: "Biostatistical Plot",
        suggestedDicomSeries: "Recurrence Curve / GraphPad",
        defaultStatus: "Pending DICOM Snip",
      },
    ],
    literatureBenchmarks: [
      {
        studyName: "SMS Hospital Jaipur (Current Study)",
        authorsYear: "Dr. Neel Yadav et al., 2026",
        journal: "JVIR / Respirology (Target)",
        sampleSize: 42,
        cohortType: "Severe Post-Tubercular Cavitary Necrosis Cohort",
        primarySuccessRate: "97.6%",
        adverseEventsRate: "2.4%",
        keyLimitationOrLacuna: "High prevalence of transpleural systemic collaterals in post-TB beds.",
      },
      {
        studyName: "Seoul National University Series",
        authorsYear: "Kim et al., 2021",
        journal: "Radiology",
        sampleSize: 88,
        cohortType: "Mixed Tuberculosis & Bronchiectasis",
        primarySuccessRate: "93.2%",
        adverseEventsRate: "4.5%",
        keyLimitationOrLacuna: "Lower rate of aspergilloma cavitary colonization.",
      },
      {
        studyName: "CIRSE Hemoptysis Registry",
        authorsYear: "Ketelsen et al., 2022",
        journal: "CVIR",
        sampleSize: 114,
        cohortType: "European Cystic Fibrosis & Malignancy Cohort",
        primarySuccessRate: "91.8%",
        adverseEventsRate: "5.1%",
        keyLimitationOrLacuna: "Post-tubercular architecture was a minor subgroup (<10%).",
      },
    ],
      journalStyle: {
      publisher: "Elsevier / Society of Interventional Radiology (SIR)",
      journalAbbrev: "J Vasc Interv Radiol",
      primaryColor: "#003366",
      accentColor: "#D4AF37",
      mastheadBg: "#002D62",
      fontFamily: "Georgia, 'Minion Pro', 'Times New Roman', serif",
      headingFont: "Arial, Helvetica, sans-serif",
      abstractHeadings: ["Purpose:", "Materials and Methods:", "Results:", "Conclusion:"],
      abstractWordLimit: 250,
      manuscriptWordLimit: 3500,
      tableStyle: {
        ruleColor: "#003366",
        headerBg: "#F0F4F8",
        headerTextColor: "#003366",
        zebraColor: "#F8FAFC",
        ruleThickness: "2px",
      },
      submissionGuidelines: {
        maxTablesFigures: 6,
        referenceStyle: "NLM / Vancouver",
        datasetDeposit: "Mendeley Data repository or Supplementary Material",
        reportingStandard: "CIRSE/SIR Standards of Practice for Bronchial Artery Embolization",
        rejectionMitigationRules: [
          "Document systemic non-bronchial collateral (NBSC) anatomy: internal mammary, intercostal, phrenic.",
          "Explicitly document confirmation of anterior spinal artery (Adamkiewicz) safety.",
          "Provide 1-year Kaplan-Meier hemoptysis recurrence-free survival comparing BAE vs BAE+NBSC.",
          "Report immediate vs 30-day hemostasis rates."
        ],
      },
    },
    abstractBlueprint: {
      background:
        "Massive hemoptysis in endemic post-tubercular cavitary disease carries high mortality. Non-bronchial systemic collaterals (NBSCs) often cause treatment failure if overlooked during bronchial artery embolization (BAE).",
      purpose:
        "To evaluate the vascular anatomy, procedural technical success, and 1-year recurrence-free survival of BAE and NBSC embolization in 42 consecutive post-TB hemoptysis cases.",
      materialsMethods:
        "Retrospective study of 42 patients presenting with life-threatening hemoptysis (>300 mL/24h) secondary to post-tubercular sequelae. Orthotopic bronchial branches, NBSCs (internal mammary, intercostal, phrenic), and outcomes were recorded.",
      resultsSummary:
        "NBSCs were identified and embolized in 54.8% of patients. Immediate hemostasis was achieved in 97.6% (41/42). Patients undergoing combined BAE and NBSC embolization demonstrated significantly higher 1-year recurrence-free survival (88.5% vs. 62.5%, p = 0.03).",
      conclusion:
        "Aggressive interrogation and embolization of non-bronchial systemic collaterals alongside bronchial arteries significantly prevents delayed hemoptysis recurrence in post-tubercular lung disease.",
    },
  },

  {
    id: "paper-dialysis",
    code: "DIALYSIS",
    shortName: "Dialysis AVF Salvage",
    title:
      "Outcomes of High-Pressure Balloon Angioplasty and Sharp Recanalization for Failing Hemodialysis Access under Universal State Health Coverage: A Real-World Cohort of 72 Cases",
    targetJournal: "Journal of Vascular Access (JVA) / CVIR",
    journalImpactFactor: "2.4",
    journalQuartile: "Q1",
    domainCategory: "DIALYSIS_ACCESS_VENOPLASTY",
    primaryClassificationName: "KDOQI Stenosis Location",
    primaryClassificationOptions: [
      "Juxta-Anastomotic / Inflow Stenosis",
      "Outflow Draining Vein Trunk Stenosis",
      "Cephalic Arch Stenosis",
      "Central Vein Occlusion (Subclavian / Innominate / SVC)",
      "Multi-Segment Diffuse Stenosis",
      "Pending Review / Unclassified",
    ],
    secondaryParameterName: "Access Circuit Configuration",
    secondaryParameterOptions: [
      "Radiocephalic AVF (Brescia-Cimino)",
      "Brachiocephalic AVF",
      "Brachiobasilic Transposition AVF",
      "Prosthetic Forearm Loop / Upper Arm Graft",
    ],
    techniqueOptions: [
      "High-Pressure Balloon (Non-Compliant, >=20 atm)",
      "Ultra-High Pressure Balloon (Conquest, >=30 atm)",
      "Cutting / Scoring Balloon Angioplasty",
      "Bare Nitinol Stent Deployment",
      "Sharp Recanalization of Central Occlusion",
    ],
    accessSiteOptions: [
      "Retrograde Draining Vein Puncture",
      "Antegrade Brachial / Radial Artery Access",
      "Right Common Femoral Vein (Central Recanalization)",
    ],
    landingZoneRelevant: false,
    requiredFigures: [
      {
        id: "dia-fig-1",
        figureNumber: 1,
        title: "Diagnostic Fistulogram Demonstrating Critical Stenosis",
        shortCaption: "Fistulogram showing juxta-anastomotic or cephalic arch stenosis.",
        detailedLegend:
          "Figure 1: Digital subtraction fistulogram demonstrating critical (>80%) tight stenosis along the outflow draining vein with prominent collateral venous diversion and poor flow.",
        targetModality: "Fluoroscopy / Fistulogram",
        suggestedDicomSeries: "Initial Diagnostic Fistulogram Run",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "dia-fig-2",
        figureNumber: 2,
        title: "Guidewire Crossing & Hydrophilic Profiling",
        shortCaption: "Crossing of the tight lesion with angled hydrophilic microwire.",
        detailedLegend:
          "Figure 2: Fluoroscopy showing crossing of the critical eccentric stenosis with a 0.035-inch or 0.018-inch hydrophilic guidewire and diagnostic catheter manipulation.",
        targetModality: "Fluoroscopy / XA",
        suggestedDicomSeries: "Crossing Working Series",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "dia-fig-3",
        figureNumber: 3,
        title: "High-Pressure Balloon Dilatation with Waist Elimination",
        shortCaption: "Elimination of the rigid resistant stenosis waist at >=20 atm.",
        detailedLegend:
          "Figure 3: Unsubtracted fluoroscopy demonstrating high-pressure non-compliant balloon dilatation (7mm x 40mm) showing initial severe waist indentation followed by complete full-profile effacement at 24 atmospheres.",
        targetModality: "Fluoroscopy / Native",
        suggestedDicomSeries: "Balloon Full Inflation Still",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "dia-fig-4",
        figureNumber: 4,
        title: "Post-Angioplasty Widened Lumen Restoration",
        shortCaption: "Restoration of straight wide venous lumen with collateral collapse.",
        detailedLegend:
          "Figure 4: Completion post-angioplasty fistulogram showing restoration of a wide, laminar venous lumen (<20% residual stenosis) with spontaneous collapse of collateral outflow channels.",
        targetModality: "Fluoroscopy / Fistulogram",
        suggestedDicomSeries: "Post-Dilatation Completion Run",
        defaultStatus: "Pending DICOM Snip",
      },
      {
        id: "dia-fig-5",
        figureNumber: 5,
        title: "Primary and Assisted Primary Patency Curves",
        shortCaption: "Kaplan-Meier patency curves at 3, 6, and 12 months.",
        detailedLegend:
          "Figure 5: Kaplan-Meier curves of primary and secondary assisted patency over 12 months following endovascular salvage in 72 patients treated under state universal health cover.",
        targetModality: "Biostatistical Plot",
        suggestedDicomSeries: "Patency Curve / Prism",
        defaultStatus: "Pending DICOM Snip",
      },
    ],
    literatureBenchmarks: [
      {
        studyName: "SMS Hospital Jaipur (Current Study)",
        authorsYear: "Dr. Neel Yadav et al., 2026",
        journal: "JVA / CVIR (Target)",
        sampleSize: 72,
        cohortType: "Universal State Health Coverage (MAAY/RGHS) Cohort",
        primarySuccessRate: "95.8%",
        adverseEventsRate: "4.2%",
        keyLimitationOrLacuna: "High volume cost-effective plain high-pressure balloon salvage without expensive stent-grafts.",
      },
      {
        studyName: "USRDS Dialysis Registry",
        authorsYear: "Lok et al., 2020",
        journal: "Am J Kidney Dis",
        sampleSize: 310,
        cohortType: "US Medicare Fee-For-Service Cohort",
        primarySuccessRate: "92.4%",
        adverseEventsRate: "6.8%",
        keyLimitationOrLacuna: "Heavy utilization of costly covered stent-grafts not applicable to resource-constrained systems.",
      },
      {
        studyName: "DOPPS European Registry",
        authorsYear: "Pisoni et al., 2022",
        journal: "Kidney International",
        sampleSize: 185,
        cohortType: "European Hemodialysis Cohort",
        primarySuccessRate: "93.5%",
        adverseEventsRate: "5.5%",
        keyLimitationOrLacuna: "Lacks sharp recanalization data for chronic total central vein occlusion.",
      },
    ],
      journalStyle: {
      publisher: "SAGE Publishing / The Journal of Vascular Access",
      journalAbbrev: "J Vasc Access",
      primaryColor: "#1E3A8A",
      accentColor: "#831843",
      mastheadBg: "#172554",
      fontFamily: "'Georgia', serif",
      headingFont: "'Inter', Arial, sans-serif",
      abstractHeadings: ["Background:", "Methods:", "Results:", "Conclusions:"],
      abstractWordLimit: 250,
      manuscriptWordLimit: 3000,
      tableStyle: {
        ruleColor: "#1E3A8A",
        headerBg: "#F1F5F9",
        headerTextColor: "#1E3A8A",
        zebraColor: "#FFFFFF",
        ruleThickness: "2px",
      },
      submissionGuidelines: {
        maxTablesFigures: 6,
        referenceStyle: "SAGE Harvard / Vancouver Numbered",
        datasetDeposit: "Figshare / Dryad or Supplementary Table",
        reportingStandard: "KDOQI Clinical Practice Guidelines for Vascular Access",
        rejectionMitigationRules: [
          "Define primary vs assisted primary patency according to standard SIR/KDOQI definitions.",
          "Report balloon pressures (≥20-30 atm) and post-dilatation residual stenosis percentage (<30%).",
          "Stratify outcomes by stenosis anatomical location (cephalic arch, juxta-anastomotic, central vein).",
          "Highlight health economic feasibility under state universal health insurance (MAAY/RGHS)."
        ],
      },
    },
    abstractBlueprint: {
      background:
        "Vascular access failure is a major source of hospitalization and mortality among end-stage renal disease patients on maintenance hemodialysis. Endovascular fistuloplasty offers minimally invasive salvage under universal public health insurance.",
      purpose:
        "To report the technical success, complication profile, and 12-month access patency following high-pressure balloon angioplasty and sharp central venoplasty in 72 consecutive patients.",
      materialsMethods:
        "Retrospective single-center study of 72 patients treated at SMS Medical College. High-pressure balloon dilatation (≥20 atm), cutting balloons, and sharp recanalization for central venous occlusion were analyzed.",
      resultsSummary:
        "Immediate technical success was 95.8%. Primary patency rates at 3, 6, and 12 months were 83.3%, 68.1%, and 54.2% respectively; assisted primary patency was 88.9% at 12 months with minimal repeat interventions.",
      conclusion:
        "Aggressive high-pressure balloon angioplasty delivers excellent patency and circuit salvage, supporting long-term hemodialysis continuity under universal health insurance schemes.",
    },
  },
];
