/**
 * SMS Jaipur - Interventional Radiology Master Hub Controller
 * Coordinates Clinical Intake, OCR, Storage, Presets, and IHMS Automation
 */

// Global State
let currentPatientId = null;
let patients = [];

// High-Yield IR Procedure Presets
const IR_PRESETS = {
  tace: {
    name: "Transarterial Chemoembolization (TACE)",
    diagnosis: "Hepatocellular Carcinoma (HCC), BCLC Stage B",
    icd10: "C22.0",
    schemeCode: "2849-IN061A",
    schemeDocs: "Pre-op Triphasic CT/MRI, Pre-embolization selective angiogram, Post-embolization completion devascularization run, Chemotherapeutic empty vial / barcode.",
    chiefComplaints: "Right upper quadrant abdominal pain and fullness for 3 months.",
    history: "Known case of Chronic Liver Disease (HCV/HBV/NASH-related). Triphasic CT/MRI abdomen revealed hypervascular arterial enhancing lesion in liver with portal venous washout. Child-Pugh Class A/B. Planned for conventional/DEB-TACE.",
    accessSite: "Right Common Femoral Artery (RCFA)",
    sheath: "5F Radiofocus Introducer Sheath (Terumo)",
    hardware: "5F Yashiro / Cobra diagnostic catheter, 0.035\" Hydrophilic Radifocus Guidewire (Terumo), 2.7F/2.4F Progreat Microcatheter system (Terumo) with 0.014\" microguidewire.",
    embolics: "Lipiodol (10 ml) mixed with Doxorubicin (50 mg) / Epirubicin emulsion, followed by Gelfoam slurry / 300-500 um PVA particles.",
    contrast: "60",
    fluoroTime: "14.5",
    operativeNotes: "Under local anesthesia (2% Lignocaine), RCFA punctured. 5F sheath placed. Selective Celiac & Common Hepatic Artery angiograms performed. Tumor blush identified in hepatic segment. Microcatheter navigated superselectively into tumor feeding arterial branch. Chemoembolic emulsion administered under real-time fluoroscopic control until tumor saturation and stasis achieved. Completion angiogram confirmed devascularization. Sheath removed, manual hemostasis achieved.",
    complications: "None. No immediate post-embolization hemodynamic instability.",
    hemostasis: "Manual compression for 15 minutes. Pressure bandage applied.",
    hospitalCourse: "Post-procedure observed for 6 hours with right lower limb immobilization. Monitored for Post-Embolization Syndrome (fever, pain, nausea). Vitals remained stable throughout. Tolerated well.",
    dischargeVitals: "BP: 124/78 mmHg, PR: 74/min, SpO2: 99% RA, Temp: Afebrile",
    medications: "1. Tab. Paracetamol 650 mg TDS x 3 days\n2. Tab. Pantoprazole 40 mg OD before breakfast x 7 days\n3. Tab. Ondansetron 4 mg TDS x 3 days\n4. Tab. Ursodeoxycholic Acid (UDCA) 300 mg BD\n5. Continue underlying Liver Disease medications as advised by Gastroenterology",
    dischargeAdvice: "Bed rest for 24 hours. Keep puncture site dry and clean for 48 hours. Avoid strenuous activity / heavy lifting for 5 days. Watch for high-grade fever, severe abdominal pain, or black stools.",
    followup: "Review in Interventional Radiology OPD (New OT Block / Special Clinic, SMS Hospital Jaipur) after 4 weeks with repeat LFT, Serum Creatinine, and follow-up Triphasic CECT Abdomen."
  },

  bae: {
    name: "Bronchial Artery Embolization (BAE)",
    diagnosis: "Recurrent / Massive Hemoptysis secondary to Sequelae of Pulmonary TB / Bronchiectasis",
    icd10: "R04.2 / A15.0",
    schemeCode: "2849-MC018A",
    schemeDocs: "Pre-procedure CT Angiography Chest, Diagnostic Aortogram, Selective Bronchial & Non-Bronchial Systemic Artery (NBSA) runs showing hypervascularity/hypertrophy, Post-embolization completion run.",
    chiefComplaints: "Recurrent episodes of coughing out blood (approx. 100-200 ml/day) for 4 days.",
    history: "Old treated pulmonary tuberculosis with left/right lung fibro-cavitary changes and bronchiectasis. CT Thorax Angio showed hypertrophied bronchial arteries with parenchymal hypervascularity. Planned for emergent/elective BAE.",
    accessSite: "Right Common Femoral Artery (RCFA)",
    sheath: "5F Radiofocus Sheath",
    hardware: "5F Mikaelson / Cobra / Simmons diagnostic catheter, 2.7F Progreat Microcatheter with 0.014\" wire.",
    embolics: "350-500 um / 500-700 um Polyvinyl Alcohol (PVA) particles, Gelatin sponge (Gelfoam) slurry.",
    contrast: "50",
    fluoroTime: "12.0",
    operativeNotes: "RCFA cannulated under local anesthesia. Descending thoracic aortogram performed. Selective catheterization of right/left bronchial and intercostal arteries performed. Hypertrophied, tortuous bronchial arterial branches with parenchymal hypervascularity identified. Anterior Spinal Artery (Adamkiewicz) origin carefully excluded. Microcatheter positioned distally. Embolization performed with PVA particles until near stasis. Completion run showed complete cessation of abnormal blush.",
    complications: "None. No chest pain, spinal ischemia, or arterial dissection.",
    hemostasis: "Manual compression x 15 mins. Tight pressure dressing applied.",
    hospitalCourse: "Observed in HDU/Ward. No fresh episode of hemoptysis post-procedure. Stable vitals.",
    dischargeVitals: "BP: 118/76 mmHg, PR: 80/min, SpO2: 98% on room air",
    medications: "1. Tab. Tranexamic Acid 500 mg TDS x 3 days\n2. Tab. Amoxicillin-Clavulanate 625 mg BD x 5 days\n3. Tab. Pantoprazole 40 mg OD x 7 days\n4. Syp. Dextromethorphan 10 ml TDS SOS for cough\n5. Tab. Paracetamol 650 mg SOS for chest discomfort",
    dischargeAdvice: "Avoid severe coughing fits, strain, and heavy exertion. Report immediately to SMS Emergency in case of recurrence of hemoptysis or groin swelling.",
    followup: "Review in Interventional Radiology OPD & Pulmonary Medicine OPD after 10 days."
  },

  ptbd: {
    name: "Percutaneous Transhepatic Biliary Drainage (PTBD) ± Stenting",
    diagnosis: "Malignant Obstructive Jaundice secondary to Cholangiocarcinoma / Gallbladder Ca / Periampullary Ca",
    icd10: "C24.0 / K83.1",
    schemeCode: "1849-SG105 A",
    schemeDocs: "Pre-procedure MRCP / CECT Abdomen showing dilated IHBR, Chiba needle puncture spot film, Cholangiogram, Guide wire across stricture confirmation, Stent / Drain deployment spot radiograph.",
    chiefComplaints: "Deepening yellowish discoloration of eyes and dark urine with generalized pruritus for 1 month.",
    history: "Patient diagnosed with advanced biliary obstruction / Klatskin tumor / Ca Gallbladder with severe hyperbilirubinemia (Total Bili > 15 mg/dl). Failed ERCP / unsuitable for surgical resection. Planned for Right/Left PTBD.",
    accessSite: "Right 10th/11th Intercostal Mid-Axillary Line / Left Epigastric Subxiphoid",
    sheath: "Nephro-Drain Accustick / 6F introducer set",
    hardware: "21G Chiba Needle, 0.018\" Nitinol wire, 0.035\" stiff Glidewire / Amplatz wire, 8.5F/10F Locking Pigtail Biliary Drainage Catheter, 10mm x 80mm Self-Expanding Metallic Biliary Stent (SEMS).",
    embolics: "Not applicable (External-Internal Drain / SEMS deployed).",
    contrast: "25",
    fluoroTime: "11.0",
    operativeNotes: "Under USG and fluoroscopic guidance with local anesthesia and conscious sedation, peripheral right/left biliary duct punctured with 21G Chiba needle. Cholangiogram revealed dilated IHBR with high-grade stricture. 0.018\" wire followed by 0.035\" Terumo wire manipulated across the stricture into the duodenum. Tract dilated. 8.5F/10F internal-external drainage catheter positioned with side holes above and below stricture / SEMS deployed across stricture. Good flow of clear golden bile established.",
    complications: "None. No hemobilia, pneumothorax, or peritonitis.",
    hemostasis: "Catheter locked, secured to skin with 2-0 silk and fixation device. Connected to bile drainage bag.",
    hospitalCourse: "Drainage functional with golden yellow bile (>300 ml/day). Serum bilirubin showing downward trend. Vitals stable.",
    dischargeVitals: "BP: 120/80 mmHg, PR: 76/min, SpO2: 98% RA, Temp: 98.4 F",
    medications: "1. Tab. Cefixime 200 mg BD x 5 days\n2. Tab. Metronidazole 400 mg TDS x 5 days\n3. Tab. Ursodeoxycholic Acid 300 mg BD\n4. Tab. Pantoprazole 40 mg OD\n5. Tab. Tramadol + Paracetamol SOS for pain",
    dischargeAdvice: "Daily drain site inspection and dressing. Flush drain with 5-10 ml sterile normal saline daily. Empty drainage bag and measure 24-hr output. Do not kink or pull the tube.",
    followup: "Review in IR OPD (SMS Hospital) after 7 days with repeat LFT (Serum Bilirubin) & drainage output chart."
  },

  pcn: {
    name: "Percutaneous Nephrostomy (PCN) / Antegrade DJ Stent",
    diagnosis: "Severe Hydronephrosis & Obstructive Uropathy secondary to Ureteric Stricture / Calculus / Cervical Ca / Pelvic Malignancy",
    icd10: "N13.0 / N13.3",
    schemeCode: "1849-IN057A",
    schemeDocs: "Pre-procedure USG KUB / NCCT KUB showing severe hydronephrosis, Calyx puncture & Nephrostogram spot film, Post-pigtail lock confirmation spot radiograph.",
    chiefComplaints: "Right/Left flank pain, decreased urine output, and fever for 5 days.",
    history: "Severe hydroureteronephrosis with deranged renal function tests (Serum Creatinine elevated). Urologist requested urgent decompression of obstructed collecting system.",
    accessSite: "Posterior Flank (Subcostal / 11th-12th Rib, posterior calyx puncture under USG)",
    sheath: "Nephrostomy Initial Puncture Set",
    hardware: "18G Initial Puncture Needle, 0.035\" J-tip Guidewire / Amplatz Stiff Wire, Dilators (6F, 8F, 10F), 8.5F/10F Locking Pigtail Nephrostomy Catheter.",
    embolics: "Nil",
    contrast: "15",
    fluoroTime: "6.5",
    operativeNotes: "Patient placed in prone oblique position. Under USG guidance, lower/middle posterior calyx punctured with 18G needle. Urine aspirated and sent for routine/culture. Nephrostogram confirmed pelvicalyceal anatomy. 0.035\" guidewire coiled in renal pelvis. Tract dilated sequentially to 10F. 8.5F locking pigtail catheter deployed into renal pelvis. Free flow of clear urine noted. Catheter locked and anchored to skin.",
    complications: "None. No macroscopic hematuria or retroperitoneal hematoma.",
    hemostasis: "Catheter anchored to flank skin with silk 1-0 and adhesive fixation plate. Connected to urobag.",
    hospitalCourse: "Immediate decompression achieved with excellent urine output. Serum creatinine improved post-procedure.",
    dischargeVitals: "BP: 130/80 mmHg, PR: 78/min, SpO2: 99% RA",
    medications: "1. Tab. Nitrofurantoin 100 mg BD / Ciprofloxacin 500 mg BD x 5 days\n2. Tab. Paracetamol 650 mg TDS\n3. Tab. Pantoprazole 40 mg OD\n4. High fluid intake (>2.5 liters/day if not contraindicated)",
    dischargeAdvice: "Keep nephrostomy tube anchored and avoid traction. Empty urine bag regularly and measure daily output. Report immediately if catheter falls out, gets blocked, or if fresh blood is noted in the tube.",
    followup: "Review in IR OPD & Urology OPD with repeat Serum Urea & Creatinine after 7 days."
  },

  evla: {
    name: "Endovenous Laser Ablation (EVLA) / RFA & Foam Sclerotherapy",
    diagnosis: "Varicose Veins of Lower Extremity with Great Saphenous Vein (GSV) Incompetence (CEAP Class C2-C4)",
    icd10: "I83.9",
    schemeCode: "492 (RGHS) / 1849-IN057A",
    schemeDocs: "Pre-procedure Venous Color Doppler report with SFJ/SPJ reflux (>0.5s), Intra-op USG laser fiber localization film at SFJ, Post-ablation occlusion Doppler confirmation.",
    chiefComplaints: "Engorged, tortuous veins over right/left lower limb with aching pain, leg heaviness, and ankle swelling for 2 years.",
    history: "Venous Doppler confirmed Great Saphenous Vein (GSV) incompetence with SFJ reflux (>3.5 sec) and dilated tributary varicosities. No deep venous thrombosis. Planned for USG-guided EVLA.",
    accessSite: "Right/Left GSV (Below Knee / Mid-Calf under USG guidance)",
    sheath: "6F Introducer Sheath",
    hardware: "1470nm Radial Laser Fiber (Biolitec) / ClosureFast RFA Catheter, 21G Echogenic Needle, 0.035\" Guidewire, Tumescent Infiltration Pump/Needle.",
    embolics: "Polidocanol 1-3% foam (for tributary sclerotherapy).",
    contrast: "0",
    fluoroTime: "0.0 (USG-Guided)",
    operativeNotes: "Under ultrasound guidance, GSV punctured below knee. 6F sheath introduced. 1470nm radial laser fiber positioned precisely 2.0 cm distal to Saphenofemoral Junction (SFJ) below superficial epigastric vein. Copious chilled tumescent anesthesia (Normal saline + 2% Lignocaine + Adrenaline + Sodium Bicarbonate) infiltrated in perivenous saphenous sheath under continuous USG control. Laser energy delivered at 8-10 W with slow continuous pullback (LEED approx. 60-80 J/cm). Tributaries treated with ultrasound-guided foam sclerotherapy. Immediate vein spasm and complete occlusion confirmed on Doppler.",
    complications: "None. No skin burns, nerve paresthesia, or DVT.",
    hemostasis: "Puncture site bandage applied. Class II compression stockings applied immediately.",
    hospitalCourse: "Patient encouraged to ambulate immediately after procedure. Discharged on same day in stable condition.",
    dischargeVitals: "BP: 120/78 mmHg, PR: 72/min, SpO2: 100%",
    medications: "1. Tab. Aceclofenac + Paracetamol BD x 3 days\n2. Tab. Pantoprazole 40 mg OD x 5 days\n3. Tab. Flavonoid / Calcium Dobesilate 500 mg BD x 15 days",
    dischargeAdvice: "Wear Class II (20-30 mmHg) compression stockings continuously during daytime for 3 weeks. Walk for 30-40 minutes daily. Avoid prolonged standing or sitting without leg elevation.",
    followup: "Review in IR OPD after 7 days with Venous Doppler to assess GSV occlusion."
  },

  uae: {
    name: "Uterine Artery Embolization (UAE / UFE)",
    diagnosis: "Symptomatic Uterine Leiomyoma (Fibroid) / Adenomyosis / Post-Partum Hemorrhage (PPH)",
    icd10: "D25.9 / O72.0",
    schemeCode: "2849-IN017B",
    schemeDocs: "Pre-procedure Pelvic MRI / USG, Diagnostic bilateral internal iliac / uterine angiograms, Post-embolization stasis angiograms, PVA/Gelatin sponge barcodes.",
    chiefComplaints: "Heavy menstrual bleeding (menorrhagia) with dysmenorrhea and bulk-related pelvic pressure.",
    history: "Pelvic USG & MRI demonstrated multiple intramural and subserosal uterine fibroids. Patient desires uterine preservation. Planned for bilateral UAE.",
    accessSite: "Right Common Femoral Artery (RCFA)",
    sheath: "5F Radiofocus Sheath",
    hardware: "5F Roberts Uterine Catheter (RUC) / Cobra / Glidecath, 2.7F Progreat Microcatheter system.",
    embolics: "500-700 um / 700-900 um PVA particles, Gelfoam slurry.",
    contrast: "45",
    fluoroTime: "11.5",
    operativeNotes: "Under local anesthesia and conscious sedation, RCFA punctured. Bilateral internal iliac and selective uterine artery catheterization performed. Classic hypervascular 'fibroid blush' seen bilaterally. Microcatheter navigated into horizontal/ascending segment of uterine artery. Embolization performed with PVA particles until complete stasis of flow achieved (prune-tree appearance). Sheath removed, manual compression done.",
    complications: "None. No arterial dissection or non-target embolization.",
    hemostasis: "Manual compression for 15 mins. Pressure dressing applied.",
    hospitalCourse: "Observed overnight with PCA/analgesia for post-embolization cramping pain. Vitals stable.",
    dischargeVitals: "BP: 116/74 mmHg, PR: 76/min, SpO2: 99%",
    medications: "1. Tab. Mefenamic Acid 500 mg + Drotaverine TDS x 4 days\n2. Tab. Tramadol 50 mg SOS for severe pelvic pain\n3. Tab. Pantoprazole 40 mg OD x 7 days\n4. Tab. Cefixime 200 mg BD x 5 days",
    dischargeAdvice: "Bed rest for 48 hours. Mild vaginal spotting and pelvic cramping are expected. Avoid heavy exertion. Report immediately in case of high fever, foul-smelling vaginal discharge, or heavy bleeding.",
    followup: "Review in IR OPD (SMS Hospital) after 2 weeks; repeat Pelvic MRI at 3-6 months."
  },

  dvt: {
    name: "Catheter-Directed Thrombolysis (CDT) & IVC Filter Placement",
    diagnosis: "Acute Extensive Iliofemoral Deep Vein Thrombosis (DVT)",
    icd10: "I82.40",
    schemeCode: "2849-IN024A",
    schemeDocs: "Pre-procedure Venous Doppler / CTV Pelvis showing iliofemoral thrombus, Diagnostic Cavagram / Venogram, Filter deployment radiograph, Post-lysis venogram.",
    chiefComplaints: "Sudden onset severe left/right lower limb painful swelling and bluish discoloration for 3 days.",
    history: "Patient presented with phlegmasia cerulea dolens / acute extensive iliofemoral DVT. High risk of pulmonary embolism. Planned for IVC Filter placement followed by Catheter-Directed Thrombolysis (CDT).",
    accessSite: "Right Internal Jugular Vein (RIJV) & Ipsilateral Popliteal Vein (under USG)",
    sheath: "6F / 8F Vascular Sheaths",
    hardware: "Retrievable IVC Filter (Cook Celect / Gunther Tulip), Multi-sidehole Thrombolysis Infusion Catheter, 0.035\" Glidewire.",
    embolics: "Recombinant Tissue Plasminogen Activator (r-tPA) infusion.",
    contrast: "40",
    fluoroTime: "10.0",
    operativeNotes: "Under USG guidance, RIJV cannulated. Cavagram confirmed infrarenal IVC patency. Retrievable IVC filter deployed infrarenally. Popliteal vein punctured under USG. Guidewire navigated across occluded femoral and iliac venous segments into IVC. Multi-sidehole infusion catheter placed across thrombus. Thrombolysis initiated with r-tPA infusion + systemic unfractionated heparin.",
    complications: "None. No major bleeding or hematoma.",
    hemostasis: "Catheters secured. Pressure dressing applied.",
    hospitalCourse: "Monitored in ICU. Fibrinogen checked q6h. Venous flow restoration confirmed on check venogram. Limb edema markedly reduced.",
    dischargeVitals: "BP: 122/80 mmHg, PR: 76/min, SpO2: 99%",
    medications: "1. Tab. Rivaroxaban 15 mg BD x 21 days (then 20 mg OD)\n2. Tab. Pantoprazole 40 mg OD\n3. Tab. Paracetamol 650 mg SOS",
    dischargeAdvice: "Mandatory Class II compression stockings. Ambulate regularly. Watch for any bleeding manifestations.",
    followup: "Review in IR OPD at 4 weeks for IVC Filter Retrieval planning and follow-up Doppler."
  },

  biopsy: {
    name: "Image-Guided Core Biopsy / Pigtail Drainage",
    diagnosis: "Lung / Liver / Renal / Retroperitoneal Mass / Intra-Abdominal Abscess Collection",
    icd10: "R93.2",
    schemeCode: "1849-MG076A",
    schemeDocs: "Pre-procedure CT/USG, Intra-procedure needle-in-lesion / drain confirmation spot image, Post-procedure radiograph.",
    chiefComplaints: "Space occupying lesion / fluid collection noted on routine screening imaging.",
    history: "Patient referred from Oncology/Medicine/Surgery for diagnostic tissue characterization or therapeutic catheter drainage.",
    accessSite: "Percutaneous Image-Guided Direct Access (CT/USG)",
    sheath: "Coaxial Biopsy Introducer / Drainage Trocar",
    hardware: "18G/16G Semi-Automated / Automated Tru-Cut Biopsy Needle, 10F/12F Locking Pigtail Drainage Catheter.",
    embolics: "Nil",
    contrast: "10",
    fluoroTime: "2.0 (CT/USG)",
    operativeNotes: "Under real-time USG / CT guidance with local anesthesia, lesion localized. 17G coaxial needle advanced to lesion edge. 18G Tru-cut core biopsy needle introduced. 3-4 adequate tissue core cylinders obtained and preserved in 10% formalin. Post-procedure scan showed no hematoma or pneumothorax.",
    complications: "None. No bleeding, pain, or visceral injury.",
    hemostasis: "Puncture site compression x 5 mins. Sterile dressing applied.",
    hospitalCourse: "Observed for 3 hours. Hemodynamically stable.",
    dischargeVitals: "BP: 120/80 mmHg, PR: 74/min, SpO2: 99%",
    medications: "1. Tab. Ciprofloxacin 500 mg BD x 3 days\n2. Tab. Paracetamol 650 mg SOS for pain\n3. Tab. Pantoprazole 40 mg OD",
    dischargeAdvice: "Keep puncture dressing dry for 24 hours. Send biopsy specimen for Histopathology & IHC.",
    followup: "Review in IR OPD with Histopathology report after 5-7 days."
  }
};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  // Safe module initializer — one failing module won't break the rest
  function safeInit(name, fn) {
    try { fn(); }
    catch (e) {
      console.error(`[${name}] Module failed to initialize:`, e);
      if (typeof showToast === 'function') showToast(`${name} module error — other modules unaffected.`, 'warning');
    }
  }

  safeInit("PWA", initPWA);
  safeInit("Patients", loadPatients);
  safeInit("Tabs", setupTabs);
  safeInit("Events", setupEventListeners);
  safeInit("OCR", setupOCR);
  safeInit("Bookmarklet", updateBookmarkletLink);

  // Initialize Submodules with error boundaries
  safeInit("Biopsy Tracker", () => {
    if (typeof IR_BIOPSY_TRACKER !== "undefined") IR_BIOPSY_TRACKER.init();
  });
  safeInit("Case Simulator", () => {
    if (typeof IR_CASE_SIMULATOR !== "undefined") IR_CASE_SIMULATOR.renderSimulator("case-presentation-container", "dpds");
  });
  safeInit("Scheme Directory", setupSchemeDirectory);
  safeInit("SMS Parser", setupSMSParser);
  safeInit("Calculators", setupCalculators);
  safeInit("OT Booking Calendar", initBookingCalendar);
  safeInit("IR Encyclopedia", initEncyclopedia);
  safeInit("IR Drug Protocols", () => {
    if (typeof window.IR_DRUG_PROTOCOLS_MANAGER !== "undefined") {
      window.IR_DRUG_PROTOCOLS_MANAGER.render("drug-protocols-container");
    }
  });
  safeInit("RIS Launchpad & Roles", () => {
    if (typeof window.SMS_IR_RIS !== "undefined") {
      window.SMS_IR_RIS.init();
    }
  });

  if (patients.length === 0) {
    applyPreset("tace");
  } else {
    loadPatientIntoForm(patients[0].id);
  }

  // Initialize Theme and Active Patient Banner
  initThemeManager();
  initPatientBanner();

  // Update tab badges with live counts
  updateTabBadges();

  // Auto-backup localStorage to console on first load (safety net)
  autoBackupLocalStorage();
});

// Ambient Theme Manager (Cath-Lab Dark Mode & Day Clinic Light Mode)
function initThemeManager() {
  try {
    const toggleBtn = document.getElementById("btn-theme-toggle");
    const iconSpan = document.getElementById("theme-toggle-icon");
    const savedTheme = localStorage.getItem("sms_ir_theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    function applyTheme(theme) {
      if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        document.body.classList.add("cath-lab-theme");
        if (iconSpan) {
          iconSpan.innerHTML = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
        }
        localStorage.setItem("sms_ir_theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        document.body.classList.remove("cath-lab-theme");
        if (iconSpan) {
          iconSpan.innerHTML = '<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
        }
        localStorage.setItem("sms_ir_theme", "light");
      }
    }

    applyTheme(initialTheme);

    if (toggleBtn) {
      toggleBtn.onclick = () => {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark" || document.body.classList.contains("cath-lab-theme");
        const nextTheme = isDark ? "light" : "dark";
        applyTheme(nextTheme);
        showToast(nextTheme === "dark" ? "Cath-Lab Angio Suite Dark Mode active" : "Day Clinic Mode active", "info");
      };
    }
  } catch (err) {
    console.warn("Theme initialization skipped:", err);
  }
}

// Persistent Active Patient Banner Manager
function initPatientBanner() {
  const switchBtn = document.getElementById("btn-banner-switch");
  if (switchBtn) {
    switchBtn.onclick = () => {
      // Switch to discharge tab and focus patient list
      const dischargeTabBtn = document.querySelector('.nav-tab-btn[data-tab="tab-discharge"]');
      if (dischargeTabBtn) dischargeTabBtn.click();
      const patientListEl = document.getElementById("patient-list");
      if (patientListEl) {
        patientListEl.scrollIntoView({ behavior: "smooth" });
      }
    };
  }
}

function updatePatientBanner(p) {
  const banner = document.getElementById("patient-active-banner");
  if (!banner) return;

  if (!p || (!p.name && !p.crNo)) {
    banner.style.display = "none";
    return;
  }

  const nameEl = document.getElementById("banner-patient-name");
  const crEl = document.getElementById("banner-patient-cr");
  const ipdEl = document.getElementById("banner-patient-ipd");
  const bedEl = document.getElementById("banner-patient-bed");
  const schemeEl = document.getElementById("banner-patient-scheme");
  const procEl = document.getElementById("banner-patient-proc");

  if (nameEl) nameEl.textContent = p.name || "Patient Profile";
  if (crEl) crEl.innerHTML = `CR: <b>${p.crNo || "-"}</b>`;
  if (ipdEl) ipdEl.innerHTML = `IPD: <b>${p.ipdNo || "-"}</b>`;
  if (bedEl) bedEl.innerHTML = `Bed: <b>${p.bedNo || "-"}</b>`;
  if (schemeEl) schemeEl.innerHTML = `Scheme: <b>${p.scheme || "-"}</b>`;
  if (procEl) procEl.innerHTML = `Proc: <b>${p.procedureName || "-"}</b>`;

  banner.style.display = "flex";
}

// Tab Count Badges — live counts without wiping out vector icons
function updateTabBadges() {
  try {
    // Booking count
    const bookingBadge = document.getElementById("badge-booking-count");
    if (bookingBadge && window.bookingSuite) {
      bookingBadge.textContent = window.bookingSuite.patients.length;
      bookingBadge.style.display = "inline-flex";
    }

    // Biopsy pending count
    const biopsyBadge = document.getElementById("badge-biopsy-count");
    if (biopsyBadge && typeof IR_BIOPSY_TRACKER !== "undefined") {
      const pending = IR_BIOPSY_TRACKER.biopsies.filter(b => b.status === "Pending Report").length;
      biopsyBadge.textContent = pending;
      biopsyBadge.style.display = pending > 0 ? "inline-flex" : "none";
    }

    // Discharge saved patients count
    const dischargeBadge = document.getElementById("badge-discharge-count");
    if (dischargeBadge && typeof patients !== "undefined") {
      dischargeBadge.textContent = patients.length;
      dischargeBadge.style.display = patients.length > 0 ? "inline-flex" : "none";
    }
  } catch (e) {
    console.warn("Tab badge update skipped:", e);
  }
}

// Auto-backup: Save a timestamped JSON snapshot of all localStorage data
function autoBackupLocalStorage() {
  try {
    const backupKey = "sms_ir_last_backup_date";
    const lastBackup = localStorage.getItem(backupKey);
    const today = new Date().toISOString().split("T")[0];

    if (lastBackup === today) return; // Already backed up today

    const allData = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("sms_ir_")) {
        allData[key] = JSON.parse(localStorage.getItem(key) || "null");
      }
    }

    if (Object.keys(allData).length > 0) {
      const backupJson = JSON.stringify(allData, null, 2);
      const blob = new Blob([backupJson], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      // Store backup link for manual download
      window._lastAutoBackupUrl = url;
      localStorage.setItem(backupKey, today);
      console.log(`[AutoBackup] Daily backup ready (${Object.keys(allData).length} keys, ${backupJson.length} bytes). Access via window._lastAutoBackupUrl`);
    }
  } catch (e) {
    console.warn("Auto-backup skipped:", e);
  }
}

// PWA Service Worker Registration
function initPWA() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(err => {
      console.warn("PWA Service Worker registration skipped:", err);
    });
  }
}

// Tab Switching
function setupTabs() {
  document.querySelectorAll(".nav-tab-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".nav-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-view").forEach(v => v.classList.remove("active"));

      btn.classList.add("active");
      const targetId = btn.getAttribute("data-tab");
      const targetView = document.getElementById(targetId);
      if (targetView) targetView.classList.add("active");

      const sticky = document.getElementById("sticky-bar");
      if (sticky) {
        sticky.style.display = targetId === "tab-discharge" ? "flex" : "none";
      }
    };
  });

  // Support direct deep-linking via URL hash (e.g. #tab-drugs)
  if (window.location.hash) {
    const hashTab = document.querySelector(`.nav-tab-btn[data-tab="${window.location.hash.substring(1)}"]`);
    if (hashTab) hashTab.click();
  }
}

// Bookmarklet Link Generator
function updateBookmarkletLink() {
  const origin = window.location.origin || 'http://localhost:8899';
  const bookmarkletCode = `javascript:(function(){const s=document.createElement('script');s.src='${origin}/ihms-autofill-bookmarklet.js?t='+Date.now();s.onerror=function(){alert('Please ensure local app server is running or paste payload manually.')};document.body.appendChild(s);})();`;
  const link = document.getElementById("bookmarklet-btn");
  if (link) link.setAttribute("href", bookmarkletCode);
}

// Preset Handler
function applyPreset(presetKey) {
  const p = IR_PRESETS[presetKey];
  if (!p) return;

  setVal("procedureName", p.name);
  setVal("diagnosis", p.diagnosis);
  setVal("icd10", p.icd10);
  setVal("schemeCode", p.schemeCode);
  setVal("schemeDocs", p.schemeDocs);
  setVal("chiefComplaints", p.chiefComplaints);
  setVal("history", p.history);
  setVal("accessSite", p.accessSite);
  setVal("sheath", p.sheath);
  setVal("hardware", p.hardware);
  setVal("embolics", p.embolics);
  setVal("contrast", p.contrast);
  setVal("fluoroTime", p.fluoroTime);
  setVal("operativeNotes", p.operativeNotes);
  setVal("complications", p.complications);
  setVal("hemostasis", p.hemostasis);
  setVal("hospitalCourse", p.hospitalCourse);
  setVal("dischargeVitals", p.dischargeVitals);
  setVal("medications", p.medications);
  setVal("dischargeAdvice", p.dischargeAdvice);
  setVal("followup", p.followup);

  if (!getVal("procedureDate")) {
    setVal("procedureDate", new Date().toISOString().split("T")[0]);
  }

  checkContrastSafety();
  showToast(`Loaded preset: ${p.name}`);
}

function getVal(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val !== undefined && val !== null ? val : "";
}

function setupEventListeners() {
  document.querySelectorAll(".btn-preset").forEach(btn => {
    btn.onclick = () => applyPreset(btn.getAttribute("data-preset"));
  });

  const btnSave = document.getElementById("btn-save-patient");
  if (btnSave) btnSave.onclick = saveCurrentPatient;

  const btnNew = document.getElementById("btn-new-patient");
  if (btnNew) btnNew.onclick = createNewPatient;

  const btnCopy = document.getElementById("btn-copy-ihms");
  if (btnCopy) btnCopy.onclick = copyPayloadForIHMS;

  const btnPrint = document.getElementById("btn-print-summary");
  if (btnPrint) btnPrint.onclick = () => window.print();

  const btnExport = document.getElementById("btn-export-data");
  if (btnExport) btnExport.onclick = exportPatientData;

  const btnImport = document.getElementById("btn-import-data");
  const fileInput = document.getElementById("import-file-input");
  if (btnImport && fileInput) btnImport.onclick = () => fileInput.click();
  if (fileInput) fileInput.onchange = importPatientData;

  const btnParse = document.getElementById("btn-parse-text");
  if (btnParse) btnParse.onclick = parseRawTextInput;

  // Contrast Safety Live Watcher
  const contrastInput = document.getElementById("contrast");
  if (contrastInput) {
    contrastInput.oninput = checkContrastSafety;
  }

  // Case Selector
  const caseSelect = document.getElementById("case-topic-selector");
  if (caseSelect) {
    caseSelect.onchange = (e) => {
      IR_CASE_SIMULATOR.renderSimulator("case-presentation-container", e.target.value);
    };
  }
}

// Contrast AKI Safety Real-Time Checker
function checkContrastSafety() {
  if (typeof IR_CALCULATORS === "undefined") return;
  const weight = parseFloat(getVal("patientWeight")) || 60;
  const creat = parseFloat(getVal("patientCreatinine")) || 1.0;
  const contrast = parseFloat(getVal("contrast")) || 0;

  const res = IR_CALCULATORS.calculateContrastSafety(weight, creat, contrast, null);
  const alertBox = document.getElementById("contrast-safety-badge");
  if (!alertBox) return;

  if (res.isExceeded) {
    alertBox.style.display = "inline-flex";
    alertBox.className = "calc-result-badge badge-overdue";
    alertBox.innerHTML = `MACD Exceeded (${contrast} ml / max ${res.macd} ml)`;
  } else {
    alertBox.style.display = "inline-flex";
    alertBox.className = "calc-result-badge badge-received";
    alertBox.innerHTML = `Contrast Safe (${contrast} ml / max ${res.macd} ml)`;
  }
}

// OCR Setup
function setupOCR() {
  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("ocr-file-input");
  if (!dropzone || !fileInput) return;

  dropzone.onclick = () => fileInput.click();
  dropzone.ondragover = (e) => { e.preventDefault(); dropzone.classList.add("dragover"); };
  dropzone.ondragleave = () => dropzone.classList.remove("dragover");
  dropzone.ondrop = (e) => {
    e.preventDefault();
    dropzone.classList.remove("dragover");
    if (e.dataTransfer.files.length > 0) handleImageOCR(e.dataTransfer.files[0]);
  };
  fileInput.onchange = (e) => {
    if (e.target.files.length > 0) handleImageOCR(e.target.files[0]);
  };
  window.addEventListener("paste", (e) => {
    const items = (e.clipboardData || e.originalEvent.clipboardData).items;
    for (const item of items) {
      if (item.type.indexOf("image") === 0) {
        const blob = item.getAsFile();
        showToast("Image pasted from clipboard. Starting OCR...");
        handleImageOCR(blob);
        break;
      }
    }
  });
}

async function handleImageOCR(file) {
  const progressBox = document.getElementById("ocr-progress");
  const progressBar = document.getElementById("ocr-progress-bar");
  const progressText = document.getElementById("ocr-progress-text");
  
  if (progressBox) progressBox.style.display = "block";
  if (progressBar) progressBar.style.width = "10%";
  if (progressText) progressText.innerText = "Initializing OCR Engine...";

  try {
    if (typeof Tesseract === "undefined") {
      throw new Error("Tesseract OCR not loaded. Please paste text directly.");
    }

    const { data: { text } } = await Tesseract.recognize(
      file,
      'eng',
      {
        logger: m => {
          if (m.status === 'recognizing text') {
            const pct = Math.round(m.progress * 100);
            if (progressBar) progressBar.style.width = `${pct}%`;
            if (progressText) progressText.innerText = `Recognizing text: ${pct}%`;
          }
        }
      }
    );

    if (progressBox) progressBox.style.display = "none";
    document.getElementById("raw-notes-input").value = text;
    showToast("OCR completed. Parsing clinical fields...");
    parseClinicalNotes(text);
  } catch (err) {
    if (progressBox) progressBox.style.display = "none";
    showToast(err.message, "error");
    document.getElementById("raw-notes-input").focus();
  }
}

function parseClinicalNotes(raw) {
  if (!raw) return;

  const nameMatch = raw.match(/(?:Name|Pt|Patient|Smt|Shri|Mr|Mrs|Ms)[:\s]+([A-Za-z\s]+?)(?=\n|,|Age|CR|Sex|\d|$)/i);
  if (nameMatch && nameMatch[1].trim().length > 2) setVal("patientName", nameMatch[1].trim());

  const ageSexMatch = raw.match(/(?:Age\/Sex|Age|Sex)[:\s]*(\d{1,3})\s*(?:Y|yr|yrs)?\s*[\/\s-]\s*([MFmf]|Male|Female)/i) ||
                      raw.match(/(\d{1,2})\s*(?:Y|yr|yrs)?\s*[\/]\s*([MFmf])/i);
  if (ageSexMatch) {
    setVal("patientAge", ageSexMatch[1]);
    setVal("patientSex", ageSexMatch[2].toUpperCase().startsWith("M") ? "Male" : "Female");
  }

  const crMatch = raw.match(/(?:CR|CR\s*No|CRN|Reg|Reg\s*No)[:\s]*([A-Za-z0-9\/-]+)/i);
  if (crMatch) setVal("crNo", crMatch[1]);

  const ipdMatch = raw.match(/(?:IPD|IPD\s*No|Admission\s*No)[:\s]*([A-Za-z0-9\/-]+)/i);
  if (ipdMatch) setVal("ipdNo", ipdMatch[1]);

  const bedMatch = raw.match(/(?:Bed|Bed\s*No|Ward)[:\s]*([A-Za-z0-9\s-]+?)(?=\n|,|$)/i);
  if (bedMatch) setVal("bedNo", bedMatch[1].trim());

  if (/chiranjeevi|maay|mukhyamantri/i.test(raw)) setVal("scheme", "Mukhya Mantri Ayushman Arogya (Chiranjeevi)");
  else if (/rghs/i.test(raw)) setVal("scheme", "RGHS");
  else if (/pmjay|ayushman bharat/i.test(raw)) setVal("scheme", "PMJAY");

  const labsFound = [];
  const hb = raw.match(/Hb[:\s]*([\d\.]+)/i); if (hb) labsFound.push(`Hb: ${hb[1]} g/dL`);
  const tlc = raw.match(/TLC[:\s]*([\d\.,]+)/i); if (tlc) labsFound.push(`TLC: ${tlc[1]} /cu mm`);
  const plt = raw.match(/(?:Plt|Platelet|Platelets)[:\s]*([\d\.,k]+)/i); if (plt) labsFound.push(`Platelets: ${plt[1]}`);
  const inr = raw.match(/(?:PT\/INR|INR|PT)[:\s]*([\d\.\/]+)/i); if (inr) labsFound.push(`PT/INR: ${inr[1]}`);
  const cr = raw.match(/(?:Creat|Creatinine|Sr\.?\s*Cr)[:\s]*([\d\.]+)/i); 
  if (cr) {
    labsFound.push(`Sr. Creatinine: ${cr[1]} mg/dL`);
    setVal("patientCreatinine", cr[1]);
  }
  const urea = raw.match(/(?:Urea|Blood\s*Urea)[:\s]*([\d\.]+)/i); if (urea) labsFound.push(`Blood Urea: ${urea[1]} mg/dL`);
  const bili = raw.match(/(?:Bili|Bilirubin|T\.?\s*Bili)[:\s]*([\d\.]+)/i); if (bili) labsFound.push(`Total Bilirubin: ${bili[1]} mg/dL`);
  const viral = raw.match(/(?:Viral|HIV|HBsAg|HCV)[:\s]*([A-Za-z\s\/-]+?)(?=\n|$)/i); if (viral) labsFound.push(`Viral Markers: ${viral[1].trim()}`);

  if (labsFound.length > 0) setVal("labs", labsFound.join(" | "));

  if (/tace|chemoembol|hcc|lipiodol/i.test(raw)) applyPreset("tace");
  else if (/bae|bronchial|hemoptysis/i.test(raw)) applyPreset("bae");
  else if (/ptbd|biliary|drainage|jaundice|klatskin/i.test(raw)) applyPreset("ptbd");
  else if (/pcn|nephrostomy|hydronephrosis|dj stent/i.test(raw)) applyPreset("pcn");
  else if (/evla|laser|varicose|gsv|rfa/i.test(raw)) applyPreset("evla");
  else if (/uae|uterine|fibroid|ufe|pph/i.test(raw)) applyPreset("uae");
  else if (/dvt|thrombolysis|ivc filter|phlegmasia/i.test(raw)) applyPreset("dvt");
  else if (/biopsy|tru-cut|pigtail/i.test(raw)) applyPreset("biopsy");

  showToast("Clinical data extracted successfully.", "success");
}

function parseRawTextInput() {
  const text = document.getElementById("raw-notes-input").value;
  if (!text.trim()) {
    showToast("Please enter notes or upload an image first.", "error");
    return;
  }
  parseClinicalNotes(text);
}

function generatePayload() {
  return {
    id: currentPatientId || Date.now().toString(),
    name: getVal("patientName"),
    age: getVal("patientAge"),
    sex: getVal("patientSex"),
    crNo: getVal("crNo"),
    ipdNo: getVal("ipdNo"),
    bedNo: getVal("bedNo"),
    admissionDate: getVal("admissionDate"),
    dischargeDate: getVal("dischargeDate"),
    scheme: getVal("scheme"),
    tid: getVal("tid"),
    schemeCode: getVal("schemeCode"),
    schemeDocs: getVal("schemeDocs"),
    diagnosis: getVal("diagnosis"),
    icd10: getVal("icd10"),
    secondaryDiagnosis: getVal("secondaryDiagnosis"),
    chiefComplaints: getVal("chiefComplaints"),
    history: getVal("history"),
    labs: getVal("labs"),
    imaging: getVal("imaging"),
    procedureName: getVal("procedureName"),
    procedureDate: getVal("procedureDate"),
    operator: getVal("operator"),
    accessSite: getVal("accessSite"),
    sheath: getVal("sheath"),
    hardware: getVal("hardware"),
    embolics: getVal("embolics"),
    contrast: getVal("contrast"),
    fluoroTime: getVal("fluoroTime"),
    operativeNotes: getVal("operativeNotes"),
    complications: getVal("complications"),
    hemostasis: getVal("hemostasis"),
    hospitalCourse: getVal("hospitalCourse"),
    dischargeVitals: getVal("dischargeVitals"),
    medications: getVal("medications"),
    dischargeAdvice: getVal("dischargeAdvice"),
    followup: getVal("followup"),
    lastUpdated: new Date().toISOString()
  };
}

async function copyPayloadForIHMS() {
  const data = generatePayload();
  const jsonStr = JSON.stringify(data, null, 2);

  try {
    await navigator.clipboard.writeText(jsonStr);
    showToast("Patient record copied. Ready for IHMS bookmarklet.", "success");
  } catch (e) {
    const t = document.createElement("textarea");
    t.value = jsonStr;
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
    showToast("Patient record copied. Ready for IHMS bookmarklet.", "success");
  }
}

function saveCurrentPatient() {
  const data = generatePayload();
  const idx = patients.findIndex(p => p.id === data.id);
  if (idx >= 0) {
    patients[idx] = data;
  } else {
    patients.unshift(data);
  }
  currentPatientId = data.id;
  localStorage.setItem("sms_ir_patients", JSON.stringify(patients));
  renderPatientList();
  updatePatientBanner(data);
  updateTabBadges();
  showToast("Patient profile saved to workstation registry.", "success");
}

function loadPatients() {
  const saved = localStorage.getItem("sms_ir_patients");
  if (saved) {
    try {
      patients = JSON.parse(saved);
      renderPatientList();
      if (patients.length > 0) {
        updatePatientBanner(patients[0]);
      }
    } catch (e) {
      patients = [];
    }
  }
}

function renderPatientList() {
  const listEl = document.getElementById("patient-list");
  if (!listEl) return;
  listEl.innerHTML = "";

  if (patients.length === 0) {
    listEl.innerHTML = `<div style="font-size: 11px; color: var(--text-muted); text-align: center; padding: 12px;">No saved patients in registry.</div>`;
    return;
  }

  patients.forEach(p => {
    const li = document.createElement("li");
    li.className = `patient-item ${p.id === currentPatientId ? "active" : ""}`;
    li.onclick = () => loadPatientIntoForm(p.id);

    li.innerHTML = `
      <div class="patient-item-header">
        <span class="patient-name">${p.name || "Unnamed Patient"}</span>
        <span class="patient-badge">${p.scheme ? (p.scheme.length > 15 ? p.scheme.substring(0, 15) + '...' : p.scheme) : "General"}</span>
      </div>
      <div class="patient-meta">
        CR: ${p.crNo || "N/A"} • ${p.procedureName ? p.procedureName.split(' ')[0] : "IR"}
      </div>
    `;
    listEl.appendChild(li);
  });
}

function loadPatientIntoForm(id) {
  const p = patients.find(item => item.id === id);
  if (!p) return;

  currentPatientId = p.id;
  for (const key in p) {
    if (document.getElementById(key)) setVal(key, p[key]);
  }
  setVal("patientName", p.name);
  setVal("patientAge", p.age);
  setVal("patientSex", p.sex);

  renderPatientList();
  updatePatientBanner(p);
  checkContrastSafety();
  showToast(`Loaded patient: ${p.name || "Record"}`, "info");
}

function createNewPatient() {
  currentPatientId = Date.now().toString();
  document.querySelectorAll("#tab-discharge input, #tab-discharge textarea").forEach(el => {
    if (el.type !== "button" && el.id !== "ocr-file-input") el.value = "";
  });
  setVal("scheme", "Mukhya Mantri Ayushman Arogya (Chiranjeevi)");
  const today = new Date().toISOString().split("T")[0];
  setVal("admissionDate", today);
  setVal("dischargeDate", today);
  setVal("procedureDate", today);
  renderPatientList();
  
  // Switch to discharge summary tab
  const dischargeTabBtn = document.querySelector('.nav-tab-btn[data-tab="tab-discharge"]');
  if (dischargeTabBtn) dischargeTabBtn.click();

  updatePatientBanner(null);
  showToast("Started fresh patient profile.", "info");
}

function exportPatientData() {
  const fullBackup = { 
    patients, 
    biopsies: typeof IR_BIOPSY_TRACKER !== "undefined" ? IR_BIOPSY_TRACKER.biopsies : [], 
    bookings: window.bookingSuite ? window.bookingSuite.patients : [],
    exportDate: new Date().toISOString() 
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fullBackup, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `SMS_IR_Hub_Backup_${new Date().toISOString().split("T")[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importPatientData(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const imported = JSON.parse(event.target.result);
      if (imported.patients) {
        patients = imported.patients;
        if (typeof IR_BIOPSY_TRACKER !== "undefined") {
          IR_BIOPSY_TRACKER.biopsies = imported.biopsies || [];
          IR_BIOPSY_TRACKER.save();
        }
        // Restore OT bookings if present in backup
        if (imported.bookings && window.bookingSuite) {
          window.bookingSuite.patients = imported.bookings;
          window.bookingSuite.saveBookings();
          window.bookingSuite.renderBookingTable("booking-table-container");
        }
      } else if (Array.isArray(imported)) {
        patients = imported;
      }
      localStorage.setItem("sms_ir_patients", JSON.stringify(patients));
      renderPatientList();
      updateTabBadges();
      showToast("Imported patient data successfully.");
    } catch (err) {
      showToast("Invalid JSON file format.", "error");
    }
  };
  reader.readAsText(file);
}

// Scheme Master Directory Setup
function setupSchemeDirectory() {
  renderSchemeTables();
  const searchInput = document.getElementById("scheme-search-input");
  if (searchInput) {
    searchInput.oninput = (e) => renderSchemeTables(e.target.value);
  }
}

function renderSchemeTables(query = "") {
  const q = query.toLowerCase().trim();
  const maayTbody = document.getElementById("maay-table-body");
  const rghsTbody = document.getElementById("rghs-table-body");
  if (!maayTbody || !rghsTbody || typeof SMS_IR_SCHEME_DB === "undefined") return;

  maayTbody.innerHTML = "";
  rghsTbody.innerHTML = "";

  const filteredMaay = SMS_IR_SCHEME_DB.maay.filter(item => 
    !q || item.code.toLowerCase().includes(q) || item.name.toLowerCase().includes(q) || (item.category && item.category.toLowerCase().includes(q))
  );

  filteredMaay.forEach(pkg => {
    const tr = document.createElement("tr");
    const implantsText = pkg.implants && pkg.implants.length > 0 
      ? `<div style="font-size: 10.5px; color: #64748b; margin-top: 2px;">Implants: ${pkg.implants.map(i => `${i.code}: ${i.name} (Rs ${i.price.toLocaleString("en-IN")})`).join(" | ")}</div>` 
      : "";

    tr.innerHTML = `
      <td><b style="color: #0369a1; font-size: 11.5px;">${pkg.code}</b></td>
      <td>
        <div style="font-weight: 600;">${pkg.name}</div>
        ${implantsText}
      </td>
      <td><b style="color: #047857;">Rs ${pkg.price.toLocaleString("en-IN")}</b></td>
    `;
    tr.style.cursor = "pointer";
    tr.onclick = () => {
      setVal("schemeCode", pkg.code);
      if (pkg.docs) setVal("schemeDocs", pkg.docs);
      showToast(`Selected Package: ${pkg.code} - ${pkg.name}`);
      document.querySelector('[data-tab="tab-discharge"]').click();
    };
    maayTbody.appendChild(tr);
  });

  const filteredRghs = SMS_IR_SCHEME_DB.rghs.filter(item =>
    !q || item.code.toLowerCase().includes(q) || item.name.toLowerCase().includes(q)
  );

  filteredRghs.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><b style="color: #047857; font-size: 12px;">${r.code}</b></td>
      <td><div style="font-weight: 600;">${r.name}</div></td>
      <td><span class="patient-badge" style="background: #e0f2fe; color: #0369a1;">RGHS</span></td>
    `;
    tr.style.cursor = "pointer";
    tr.onclick = () => {
      setVal("schemeCode", `RGHS-${r.code}`);
      setVal("scheme", "RGHS");
      showToast(`Selected RGHS Code: ${r.code} - ${r.name}`);
      document.querySelector('[data-tab="tab-discharge"]').click();
    };
    rghsTbody.appendChild(tr);
  });
}

// SMS / WhatsApp Message Parser
let parsedSchemePayload = null;

function setupSMSParser() {
  const parseBtn = document.getElementById("btn-parse-sms");
  if (parseBtn) parseBtn.onclick = parseSMSMessage;
  const applyBtn = document.getElementById("btn-apply-parsed-scheme");
  if (applyBtn) applyBtn.onclick = applyParsedSchemeToPatient;
}

function parseSMSMessage() {
  const text = document.getElementById("raw-sms-input").value;
  if (!text.trim()) {
    showToast("Please paste SMS text first.", "error");
    return;
  }

  const tidMatch = text.match(/(?:TID|TID\s*No|PreAuth\s*ID|Approval\s*ID)[:\s]*([A-Za-z0-9\/-]+)/i);
  const cardMatch = text.match(/(?:Card|Card\s*No|Jan\s*Aadhaar|PMJAY\s*ID|ABHA)[:\s]*([A-Za-z0-9\/-]+)/i);
  const pkgMatch = text.match(/(?:Package|Pkg|Code|Procedure\s*Code)[:\s]*([A-Za-z0-9\/-]+)/i);
  const amtMatch = text.match(/(?:Amount|Rs\.?|INR)[:\s]*([\d,]+)/i);
  const nameMatch = text.match(/(?:Patient|Pt|Name)[:\s]+([A-Za-z\s]+?)(?=\n|,|Card|TID|$)/i);

  parsedSchemePayload = {
    tid: tidMatch ? tidMatch[1] : "",
    card: cardMatch ? cardMatch[1] : "",
    pkg: pkgMatch ? pkgMatch[1] : "",
    amt: amtMatch ? amtMatch[1] : "",
    name: nameMatch ? nameMatch[1].trim() : ""
  };

  document.getElementById("parsed-tid").innerText = parsedSchemePayload.tid || "N/A";
  document.getElementById("parsed-card").innerText = parsedSchemePayload.card || "N/A";
  document.getElementById("parsed-pkg").innerText = parsedSchemePayload.pkg || "N/A";
  document.getElementById("parsed-amt").innerText = parsedSchemePayload.amt ? `Rs ${parsedSchemePayload.amt}` : "N/A";

  document.getElementById("btn-apply-parsed-scheme").style.display = "block";
  showToast("Extracted Scheme and Card details.");
}

function applyParsedSchemeToPatient() {
  if (!parsedSchemePayload) return;
  if (parsedSchemePayload.tid) setVal("tid", parsedSchemePayload.tid);
  if (parsedSchemePayload.pkg) setVal("schemeCode", parsedSchemePayload.pkg);
  if (parsedSchemePayload.name && !getVal("patientName")) setVal("patientName", parsedSchemePayload.name);
  showToast("Applied to current patient summary!");
  document.querySelector('[data-tab="tab-discharge"]').click();
}

// Clinical Calculators Setup
function setupCalculators() {
  const calcBtn = document.getElementById("btn-run-calculators");
  if (calcBtn) calcBtn.onclick = runAllCalculators;

  const meldBtn = document.getElementById("btn-run-meld-egfr");
  if (meldBtn) meldBtn.onclick = runMELDandEGFR;
}

function runAllCalculators() {
  if (typeof IR_CALCULATORS === "undefined") return;

  const w = parseFloat(document.getElementById("calc-weight")?.value) || 60;
  const cr = parseFloat(document.getElementById("calc-cr")?.value) || 1.0;
  const contrast = parseFloat(document.getElementById("calc-contrast")?.value) || 50;
  const egfr = parseFloat(document.getElementById("calc-egfr")?.value) || 75;

  const safety = IR_CALCULATORS.calculateContrastSafety(w, cr, contrast, egfr);
  const safetyResEl = document.getElementById("calc-contrast-result");
  if (safetyResEl) {
    safetyResEl.innerHTML = `
      <div class="calc-result-badge ${safety.isExceeded ? 'badge-overdue' : 'badge-received'}">
        ${safety.recommendation}
      </div>
      <div style="font-size: 11.5px; color: #475569; margin-top: 4px;">
        MACD Limit: <b>${safety.macd} ml</b> | Contrast given: <b>${safety.contrastGiven} ml</b> ${safety.contrastToEgfrRatio ? '| Contrast/eGFR Ratio: <b>' + safety.contrastToEgfrRatio + '</b>' : ''}
      </div>
    `;
  }

  // Child-Pugh
  const bili = parseFloat(document.getElementById("calc-bili")?.value) || 1.2;
  const alb = parseFloat(document.getElementById("calc-alb")?.value) || 3.8;
  const inr = parseFloat(document.getElementById("calc-inr")?.value) || 1.1;
  const asc = document.getElementById("calc-ascites")?.value || 1;
  const enc = document.getElementById("calc-enceph")?.value || 1;

  const cp = IR_CALCULATORS.calculateChildPugh(bili, alb, inr, asc, enc);
  const cpResEl = document.getElementById("calc-cp-result");
  if (cpResEl) {
    cpResEl.innerHTML = `
      <div class="calc-result-badge ${cp.score <= 6 ? 'badge-received' : (cp.score <= 9 ? 'badge-pending' : 'badge-overdue')}">
        Child-Pugh Score: ${cp.score} points • ${cp.grade}
      </div>
    `;
  }

  // ALBI
  const albi = IR_CALCULATORS.calculateALBI(bili, alb);
  const albiResEl = document.getElementById("calc-albi-result");
  if (albiResEl && albi) {
    albiResEl.innerHTML = `
      <div class="calc-result-badge badge-received">
        ALBI Score: ${albi.score} • ${albi.grade}
      </div>
    `;
  }

  showToast("Calculated clinical safety scores.");
}

function runMELDandEGFR() {
  if (typeof IR_CALCULATORS === "undefined") return;

  // MELD 3.0
  const mBili = parseFloat(document.getElementById("calc-meld-bili")?.value) || 1.0;
  const mCr = parseFloat(document.getElementById("calc-meld-cr")?.value) || 1.0;
  const mInr = parseFloat(document.getElementById("calc-meld-inr")?.value) || 1.0;
  const mNa = parseFloat(document.getElementById("calc-meld-na")?.value) || 137;
  const mFemale = document.getElementById("calc-meld-sex")?.value === "female";

  const meld = IR_CALCULATORS.calculateMELD(mBili, mCr, mInr, mNa, mFemale);
  const meldResEl = document.getElementById("calc-meld-result");
  if (meldResEl && meld.valid) {
    const meldColor = meld.meld3 <= 15 ? 'badge-received' : (meld.meld3 <= 25 ? 'badge-pending' : 'badge-overdue');
    meldResEl.innerHTML = `
      <div class="calc-result-badge ${meldColor}">
        MELD-Na: <b>${meld.meldNa}</b> | MELD 3.0: <b>${meld.meld3}</b>
      </div>
      <div style="font-size: 11.5px; color: #475569; margin-top: 4px;">
        3-Month Mortality: <b>${meld.mortality3Mo}</b> | ${meld.tipsEligibility}
      </div>
    `;
  } else if (meldResEl && !meld.valid) {
    meldResEl.innerHTML = `<div class="calc-result-badge badge-overdue">${meld.message}</div>`;
  }

  // eGFR (CKD-EPI 2021)
  const eCr = parseFloat(document.getElementById("calc-egfr-cr")?.value) || 1.0;
  const eAge = parseFloat(document.getElementById("calc-egfr-age")?.value) || 55;
  const eFemale = document.getElementById("calc-egfr-sex")?.value === "female";

  const egfr = IR_CALCULATORS.calculateEGFR(eCr, eAge, eFemale);
  const egfrResEl = document.getElementById("calc-egfr-result");
  if (egfrResEl && egfr.valid) {
    const egfrColor = egfr.egfr >= 60 ? 'badge-received' : (egfr.egfr >= 30 ? 'badge-pending' : 'badge-overdue');
    egfrResEl.innerHTML = `
      <div class="calc-result-badge ${egfrColor}">
        eGFR: <b>${egfr.egfr} mL/min/1.73m²</b> — ${egfr.ckdStage}
      </div>
      <div style="font-size: 11.5px; color: #475569; margin-top: 4px;">
        ${egfr.contrastAdvice}
      </div>
    `;

    // Auto-fill eGFR value into the contrast safety calculator
    const egfrInput = document.getElementById("calc-egfr");
    if (egfrInput) egfrInput.value = egfr.egfr;
  }

  showToast("MELD 3.0 and eGFR computed.");
}

// Toast Notifications
function showToast(msg, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerText = msg;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// =========================================================================
// OT Booking & 2026 Calendar Module Initialization
// =========================================================================
function initBookingCalendar() {
  if (window.bookingSuite) {
    window.bookingSuite.renderUnifiedCalendarSuite("unified-calendar-opd-container");
    window.bookingSuite.renderBookingTable("booking-table-container");
    window.bookingSuite.updateStatsCards();

    const btnUnified = document.getElementById("btn-show-unified-view");
    const btnTable = document.getElementById("btn-show-booking-table");
    const secUnified = document.getElementById("unified-calendar-opd-section");
    const secTable = document.getElementById("booking-table-view-section");

    if (btnUnified && btnTable && secUnified && secTable) {
      btnUnified.onclick = () => {
        btnUnified.className = "btn btn-primary";
        btnTable.className = "btn btn-outline";
        secUnified.style.display = "block";
        secTable.style.display = "none";
        window.bookingSuite.renderUnifiedCalendarSuite("unified-calendar-opd-container");
      };

      btnTable.onclick = () => {
        btnTable.className = "btn btn-primary";
        btnUnified.className = "btn btn-outline";
        secUnified.style.display = "none";
        secTable.style.display = "block";
        window.bookingSuite.renderBookingTable("booking-table-container");
      };
    }

    const btnAddGlobal = document.getElementById("btn-open-add-booking-global");
    if (btnAddGlobal) {
      btnAddGlobal.onclick = () => window.bookingSuite.showAddBookingModal();
    }

    const btnExportGlobal = document.getElementById("btn-export-booking-csv-global");
    if (btnExportGlobal) {
      btnExportGlobal.onclick = () => window.bookingSuite.exportBookingsToCSV();
    }
  }
}

// =========================================================================
// IR Procedure Encyclopedia Module Initialization
// =========================================================================
function initEncyclopedia() {
  if (typeof IR_PROCEDURE_ENCYCLOPEDIA === "undefined") return;

  const listEl = document.getElementById("enc-procedure-list");
  const detailsEl = document.getElementById("enc-procedure-details-container");
  const searchInput = document.getElementById("enc-search-input");

  function renderProcedureDetails(procId) {
    const p = IR_PROCEDURE_ENCYCLOPEDIA[procId];
    if (!p || !detailsEl) return;

    let html = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px;">
        <div>
          <h2 style="font-size: 18px; color: #0f172a; margin: 0; font-weight: 800;">${p.name}</h2>
          <div style="font-size: 12px; color: #0284c7; font-weight: 600; margin-top: 2px;">
            ${p.specialty} • Category: ${p.category}
          </div>
          <div style="display: flex; gap: 6px; margin-top: 6px; flex-wrap: wrap;">
            <span class="scheme-badge-maay">MAAY: ${p.schemeDetails.maayCode} (${p.schemeDetails.maayBaseRate})</span>
            <span class="scheme-badge-rghs">RGHS: ${p.schemeDetails.rghsCode} (${p.schemeDetails.rghsRate})</span>
            <span style="background: #f1f5f9; color: #334155; padding: 2px 6px; border-radius: 4px; font-size: 10.5px; font-weight: 700; font-family: monospace;">ICD-10: ${p.schemeDetails.icd10Code}</span>
          </div>
        </div>
        <div>
          <button class="btn btn-primary" id="btn-apply-enc-to-form" data-id="${p.id}">
            Apply Protocol to Discharge & IHMS
          </button>
        </div>
      </div>

      <!-- Indications & Contraindications -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
        <div style="background: var(--success-subtle); border: 1px solid var(--success-border); padding: 12px; border-radius: var(--radius-md);">
          <h4 style="color: var(--success); font-size: 13px; font-weight: 700; margin: 0 0 6px 0;">Clinical Indications</h4>
          <ul style="margin: 0; padding-left: 18px; font-size: 12px; color: var(--text-primary); line-height: 1.4;">
            ${p.indications.map(i => `<li>${i}</li>`).join('')}
          </ul>
        </div>
        <div style="background: var(--danger-subtle); border: 1px solid var(--danger-border); padding: 12px; border-radius: var(--radius-md);">
          <h4 style="color: var(--danger); font-size: 13px; font-weight: 700; margin: 0 0 6px 0;">Contraindications & Safety Halts</h4>
          <ul style="margin: 0; padding-left: 18px; font-size: 12px; color: var(--text-primary); line-height: 1.4;">
            ${p.contraindications.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Pre-Op Workup & Criteria -->
      <div style="margin-bottom: 16px;">
        <h4 style="color: var(--text-primary); font-size: 13px; font-weight: 700; margin: 0 0 6px 0;">Pre-Op Workup Checklist & Safety Limits</h4>
        <div style="background: var(--bg-surface-raised); border: 1px solid var(--border-subtle); padding: 12px 16px; border-radius: var(--radius-md);">
          <ul style="margin: 0; padding-left: 18px; font-size: 12px; color: var(--text-secondary); line-height: 1.45;">
            ${p.preOpChecklist.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- In-Going Hardware & Specifications Table -->
      <div style="margin-bottom: 16px;">
        <h4 style="color: var(--text-primary); font-size: 13px; font-weight: 700; margin: 0 0 6px 0;">In-Going Hardware Specifications & Consumables</h4>
        <table class="clinical-table" style="font-size: 11.5px;">
          <thead>
            <tr><th>Category</th><th>Item & Description</th><th>Specification / Size</th><th>Qty</th></tr>
          </thead>
          <tbody>
            ${p.hardwareSpecs.map(h => `
              <tr>
                <td><strong>${h.category}</strong></td>
                <td>${h.item}</td>
                <td><code style="color: var(--primary);">${h.size}</code></td>
                <td>${h.qty}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Scheme Details & Authorized Vendors -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
        <div style="background: var(--bg-surface-raised); border: 1px solid var(--border-subtle); padding: 12px; border-radius: var(--radius-md);">
          <h4 style="color: var(--primary); font-size: 13px; font-weight: 700; margin: 0 0 6px 0;">Scheme Implants & Price Ceilings</h4>
          <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.45;">
            <div><strong>MAAY Package:</strong> ${p.schemeDetails.maayName}</div>
            <div><strong>Base Rate:</strong> ${p.schemeDetails.maayBaseRate}</div>
            ${p.schemeDetails.maayImplants && p.schemeDetails.maayImplants.length > 0 ? `
              <div style="margin-top: 6px;"><strong>Approved Implants:</strong></div>
              <ul style="margin: 0; padding-left: 16px;">
                ${p.schemeDetails.maayImplants.map(imp => `<li><code>${imp.code}</code>: ${imp.name} (Max ${imp.maxRate})</li>`).join('')}
              </ul>
            ` : '<div>No separate implant billing.</div>'}
          </div>
        </div>

        <div style="background: var(--bg-surface-raised); border: 1px solid var(--border-subtle); padding: 12px; border-radius: var(--radius-md);">
          <h4 style="color: var(--text-primary); font-size: 13px; font-weight: 700; margin: 0 0 6px 0;">Authorized Vendor Contacts & Stores</h4>
          <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.45;">
            ${p.distributorContacts.map(v => `
              <div style="margin-bottom: 4px;">
                <strong>${v.name}</strong>: ${v.contact} (${v.location})
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Step-by-Step Operative Technique -->
      <div style="margin-bottom: 16px;">
        <h4 style="color: var(--text-primary); font-size: 13px; font-weight: 700; margin: 0 0 6px 0;">Step-by-Step Operative Technique Template</h4>
        <div style="background: var(--bg-surface-raised); border: 1px solid var(--border-subtle); padding: 12px; border-radius: var(--radius-md); font-family: monospace; font-size: 11px; white-space: pre-wrap; line-height: 1.5; color: var(--text-primary); max-height: 220px; overflow-y: auto;">
${p.operativeSteps}
        </div>
      </div>

      <!-- Post-Op Orders & e-Aushadhi Medication Kit -->
      <div style="margin-bottom: 16px;">
        <h4 style="color: var(--text-primary); font-size: 13px; font-weight: 700; margin: 0 0 6px 0;">RMSCL e-Aushadhi Post-Op Prescription Kit</h4>
        <table class="clinical-table" style="font-size: 11.5px;">
          <thead>
            <tr><th>Drug Name</th><th>Dose & Route</th><th>Frequency</th><th>Category</th></tr>
          </thead>
          <tbody>
            ${p.postOpDrugsEAushadhi.map(d => `
              <tr>
                <td><strong>${d.name}</strong></td>
                <td>${d.dose}</td>
                <td>${d.freq}</td>
                <td><span style="font-size: 10px; background: var(--bg-surface-raised); border: 1px solid var(--border-subtle); padding: 1px 5px; border-radius: 3px;">${d.category}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Discharge Summary Advice -->
      <div style="margin-bottom: 16px;">
        <h4 style="color: var(--text-primary); font-size: 13px; font-weight: 700; margin: 0 0 6px 0;">Discharge Summary Advice & Red-Flag Warnings</h4>
        <div style="background: var(--warning-subtle); border: 1px solid var(--warning-border); padding: 12px; border-radius: var(--radius-md); font-size: 12px; white-space: pre-wrap; line-height: 1.5; color: var(--warning);">
${p.dischargeAdvice}
        </div>
      </div>
    `;

    detailsEl.innerHTML = html;

    const applyBtn = document.getElementById("btn-apply-enc-to-form");
    if (applyBtn) {
      applyBtn.onclick = () => {
        applyEncyclopediaToDischargeForm(procId);
      };
    }
  }

  function applyEncyclopediaToDischargeForm(procId) {
    const p = IR_PROCEDURE_ENCYCLOPEDIA[procId];
    if (!p) return;

    // Switch to discharge tab
    document.querySelector('.nav-tab-btn[data-tab="tab-discharge"]').click();

    setVal("procedureName", p.name);
    setVal("diagnosis", p.shortName);
    setVal("icd10", p.schemeDetails.icd10Code.split(' ')[0]);
    setVal("schemeCode", p.schemeDetails.maayCode.split(' ')[0]);
    setVal("schemeDocs", p.schemeDetails.ihmsPreAuthDocs);
    setVal("operativeNotes", p.operativeSteps);
    setVal("dischargeAdvice", p.dischargeAdvice);

    if (p.hardwareSpecs) {
      const hwText = p.hardwareSpecs.map(h => `${h.category}: ${h.item} (${h.size}) x${h.qty}`).join('\n');
      setVal("hardware", hwText);
    }

    if (p.postOpDrugsEAushadhi) {
      const medText = p.postOpDrugsEAushadhi.map((d, i) => `${i + 1}. ${d.name} - ${d.dose} - ${d.freq} [${d.category}]`).join('\n');
      setVal("medications", medText);
    }

    showToast(`Applied ${p.shortName} clinical protocol to active discharge form.`, "success");
  }

  // Attach procedure button clicks
  document.querySelectorAll(".enc-item-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".enc-item-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const procId = btn.getAttribute("data-id");
      renderProcedureDetails(procId);
    };
  });

  // Attach search
  if (searchInput) {
    searchInput.oninput = (e) => {
      const q = e.target.value.toLowerCase().trim();
      document.querySelectorAll(".enc-item-btn").forEach(btn => {
        const text = btn.innerText.toLowerCase();
        btn.style.display = text.includes(q) ? "flex" : "none";
      });
    };
  }

  // Initial render
  renderProcedureDetails("tace");
}

