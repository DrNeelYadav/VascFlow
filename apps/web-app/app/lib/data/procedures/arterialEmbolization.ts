import { ProcedureBlueprint } from '../../types/clinical';

export const ARTERIAL_EMBOLIZATION_PROCEDURES: ProcedureBlueprint[] = [
  {
    "id": "bae-massive-hemoptysis",
    "name": "Bronchial Artery Embolization (BAE) for Massive Hemoptysis",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-BAE001",
    "rghsCode": "693 / 15",
    "icd10": "R04.2 (Hemoptysis) / A15.0 (Respiratory Tuberculosis)",
    "indications": [
      "Life-threatening massive hemoptysis (>300-600 mL/24h or >100 mL/h with respiratory compromise)",
      "Submassive hemoptysis refractory to conservative / anti-fibrinolytic therapy",
      "Underlying pulmonary tuberculosis, post-tubercular bronchiectasis, aspergilloma, or cavitary lung disease"
    ],
    "preOpCriteria": [
      "CT Angiography of Thorax (CTA chest) to map hypertrophied bronchial and non-bronchial systemic arteries",
      "Endotracheal intubation with double-lumen tube or bronchial blocker if airway compromise exists",
      "Coagulation profile: INR < 1.5, Platelets > 50,000/uL, Serum Creatinine < 1.5 mg/dL"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length, 0.035\" wire compatible",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Mikaelson / Cobra C2 / Simmons 1",
        "spec": "65-100 cm length, braided torque shaft",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014\" - 0.016\" hydrophilic guidewire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Particulate Embolic",
        "name": "Contour / Bead Block Calibrated PVA Particles",
        "spec": "355-500 um or 500-710 um vials",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Metallic Coils",
        "name": "0.014\" - 0.018\" Pushable / Detachable Microcoils",
        "spec": "2-4 mm diameter, platinum fibered",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided retrograde right common femoral artery puncture; insertion of 5F vascular sheath.",
      "Descending thoracic aortography (pigtail catheter at T4-T6 level) in AP and shallow LAO/RAO views to identify origin of bronchial arteries.",
      "Selective bronchial artery cannulation with 5F Mikaelson or Cobra catheter.",
      "High-resolution DSA to evaluate hypertrophy, tortuosity, parenchymal hypervascularity, shunts, and meticulously check for the anterior spinal artery (Artery of Adamkiewicz / hairpin loop).",
      "Coaxial superselective microcatheter advancement distal to any spinal or esophageal branches into target feeding vessels.",
      "Slow, fluoroscopy-guided injection of calibrated PVA particles (355-500 um or 500-710 um) suspended in contrast and saline under continuous real-time visual control until flow arrest / column stasis.",
      "Deployment of 0.018\" fibered microcoils in the main arterial trunk or side branches if required for complete devascularization without proximal-only occlusion.",
      "Completion angiography confirming total devascularization of the bleeding territory and absolute absence of spinal artery reflux; femoral compression / closure."
    ],
    "complications": [
      "Spinal cord ischemia / anterior spinal artery embolization causing transverse myelitis / paraplegia (<1%)",
      "Transitory retrosternal / intercostal chest pain and dysphagia",
      "Bronchial wall / esophageal necrosis",
      "Non-target embolization to systemic circulation (stroke, limb ischemia) via pulmonary venous shunts"
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 11223)",
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Boston Scientific India (+91 98100 44556)"
    ]
  },
  {
    "id": "nbsa-embolization-recurrent-hemoptysis",
    "name": "Non-Bronchial Systemic Arterial (NBSA) Embolization for Recurrent Hemoptysis",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-NBSA002",
    "rghsCode": "693 / 16",
    "icd10": "R04.2 (Recurrent Hemoptysis) / J84.1 (Chronic Lung Disease)",
    "indications": [
      "Recurrent or persistent hemoptysis post-bronchial artery embolization",
      "Pleural thickening > 3 mm or apical fibrocavitary disease recruiting chest wall collaterals",
      "Transpleural systemic collateral supply from intercostal, internal mammary, subclavian, lateral thoracic, or inferior phrenic arteries"
    ],
    "preOpCriteria": [
      "Multidetector CT Angiography with systemic collateral reconstruction (subclavian, internal thoracic, intercostal branches)",
      "Platelet count > 50,000/uL, INR < 1.5, Serum Creatinine < 1.5 mg/dL",
      "Cardiopulmonary stabilization and supplemental oxygenation"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm length, hemostatic valve",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Headhunter / Simmons 1 / IMA Catheter",
        "spec": "100 cm, selective tip",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat / Maestro Microcatheter",
        "spec": "130 cm length, flexible hydrophilic tip",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Particles",
        "name": "PVA / Embosphere Microspheres",
        "spec": "500-700 um calibrated particles",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcoils",
        "name": "Interlocking / Fibered Platinum Microcoils",
        "spec": "2-4 mm, 0.014\" - 0.018\"",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Right common femoral arterial access under ultrasound guidance; 5F sheath placement.",
      "Selective catheterization of ipsilateral subclavian artery, internal mammary artery (IMA), costocervical / thyrocervical trunk, and thoracic intercostal arteries using 5F Headhunter or Simmons-1.",
      "For lower lobe/basal bleeding, selective catheterization of the ipsilateral inferior phrenic artery via celiac trunk or direct aortic origin.",
      "DSA acquisition identifying transpleural hypervascular arborization, parenchymal blush, and systemic-to-pulmonary vascular shunting.",
      "Superselective microcatheterization past spinal radiculomedullary branches (hairpin radicular branches off posterior intercostal arteries).",
      "PVA/microsphere embolization (500-700 um) to occlude transpleural capillary networks without reflux into vital muscular/spinal branches.",
      "Selective microcoil placement to seal proximal feeding vessel branches if pseudoaneurysms or high-flow shunts are evident.",
      "Post-embolization DSA demonstrating complete obliteration of collateral blush."
    ],
    "complications": [
      "Intercostal nerve ischemia / chronic neuropathic chest wall pain",
      "Spinal cord ischemia from occult radiculomedullary feeders",
      "Internal mammary territory ischemia (skin blanching / sternal necrosis)",
      "Diaphragmatic dysfunction following inferior phrenic artery embolization"
    ],
    "maayTariffInr": 46500,
    "vendorContacts": [
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Merit Medical Systems (+91 98292 33445)",
      "Cook Medical India (+91 98290 11223)"
    ]
  },
  {
    "id": "rasmussen-pa-embolization",
    "name": "Pulmonary Artery Pseudoaneurysm (Rasmussen Aneurysm) Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-PAE003",
    "rghsCode": "693 / 18",
    "icd10": "I72.5 (Aneurysm/Pseudoaneurysm of Pulmonary Artery) / A15.0 (TB)",
    "indications": [
      "Active hemoptysis arising from cavity-associated pulmonary arterial pseudoaneurysm (Rasmussen aneurysm)",
      "Traumatic, iatrogenic (Swan-Ganz catheter-induced), or infectious pulmonary artery pseudoaneurysm",
      "High rupture risk pulmonary arterial ectasia / saccular dilation within tubercular cavity"
    ],
    "preOpCriteria": [
      "CT Pulmonary Angiography (CTPA) documenting exact lobar/segmental branch and aneurysm diameter",
      "Hemodynamic monitoring; access to blood products and rapid infusor",
      "INR < 1.6, Platelet count > 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Venous Access",
        "name": "6F - 7F Ansel Guiding Sheath / Introducer Sheath",
        "spec": "45-65 cm length, radiopaque tip",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Grollman / Berman / Pigtail Pulmonary Catheter",
        "spec": "100 cm length with torque shaft",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Renegade Hi-Flo / Progreat Microcatheter",
        "spec": "130 cm length, high-pressure rating (800 psi)",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Vascular Occlusion Plug",
        "name": "Amplatzer Vascular Plug (AVP II / AVP 4)",
        "spec": "4-8 mm diameter, self-expanding nitinol mesh",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Detachable Coils",
        "name": "Interlock 0.018\" / 0.035\" Detachable Fibered Coils",
        "spec": "3-10 mm diameter, dense thrombogenic fibers",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Right common femoral vein ultrasound-guided puncture; insertion of 6F/7F long guiding sheath.",
      "Navigation across the right heart chambers (RA -> RV -> Main PA) using a Berman/Grollman catheter over a 0.035\" stiff hydrophilic wire under continuous ECG monitoring.",
      "Digital subtraction pulmonary angiography (CTPA correlation) targeting the affected segmental pulmonary artery feeding the pseudoaneurysm.",
      "Stable positioning of guiding sheath in the main/lobar pulmonary trunk.",
      "Coaxial advancement of 2.7F microcatheter into the segmental arterial feeder, taking care not to advance wire tip into fragile aneurysm sac.",
      "Front-door and back-door isolation (trapping) or dense intra-saccular packing using controlled-release detachable fibered microcoils.",
      "Deployment of Amplatzer Vascular Plug (AVP 4) or 0.035\" coils in the feeding segmental branch for secure proximal anchor.",
      "Control pulmonary angiogram demonstrating total exclusion of the pseudoaneurysm with preserved adjacent segmental flow."
    ],
    "complications": [
      "Aneurysm rupture / exsanguination during wire/catheter manipulation",
      "Pulmonary infarction / wedge necrosis",
      "Cardiac dysrhythmias (transient RBBB / ventricular ectopy during heart crossing)",
      "Embolic migration of coil/plug into distal pulmonary arterial bed"
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Abbott Vascular India (+91 98293 88990)",
      "Boston Scientific India (+91 98100 44556)",
      "Cook Medical India (+91 98290 11223)"
    ]
  },
  {
    "id": "lga-embolization-peptic-ulcer",
    "name": "Upper GI Bleed: Left Gastric Artery (LGA) Coil & Gelfoam Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-GIB004",
    "rghsCode": "693 / 19",
    "icd10": "K25.0 (Acute Gastric Ulcer with Hemorrhage) / K92.2 (Gastrointestinal Bleed)",
    "indications": [
      "Massive upper gastrointestinal bleeding from gastric body / lesser curvature peptic ulcer refractory to endoscopic clipping/thermal therapy",
      "Forrest Class Ia/Ib bleeding ulcer with hemodynamic instability",
      "High-risk endoscopic recurrence or inaccessible lesser curve ulceration"
    ],
    "preOpCriteria": [
      "Upper gastrointestinal endoscopy report detailing ulcer location and failed intervention",
      "Active resuscitation: crossmatched packed red cells, correction of coagulopathy",
      "Hemoglobin, platelet count, INR, renal function panel"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length, 0.035\" wire compatible",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Celiac / Yashiro / SOS Omni Catheter",
        "spec": "65-80 cm length, high torque",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat Microcatheter",
        "spec": "130 cm length with 0.014\" steerable wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Temporary Embolic",
        "name": "Gelfoam Absorbable Gelatin Sponge",
        "spec": "Poured slurry / calibrated cubes (1-2 mm)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcoils",
        "name": "0.018\" Pushable / Detachable Microcoils",
        "spec": "2-5 mm diameter, platinum fibered",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Right common femoral artery retrograde access under ultrasound; 5F sheath insertion.",
      "Celiac axis angiography using 5F Yashiro catheter to identify left gastric artery origin, caliber, and presence of aberrant left hepatic artery branches.",
      "Selective engaged cannulation of LGA and DSA runs demonstrating contrast extravasation, pseudoaneurysm, or hypervascular ulcer crater.",
      "Superselective cannulation with 2.0F/2.4F microcatheter into anterior/posterior descending gastric branches feeding the ulcer crater.",
      "Slow injection of Gelfoam slurry mixed with iodinated contrast until mucosal blush attenuation is achieved.",
      "Coil embolization using 0.018\" fibered microcoils across the bleeding branch; if diffuse mucosal bleeding without focal extravasation (blind prophylactic embolization), target the main descending LGA trunk.",
      "Completion celiac angiogram ensuring complete occlusion of bleeding branch and patent celiac trunk, splenic, and hepatic arteries.",
      "Manual compression or vascular closure device at femoral puncture site."
    ],
    "complications": [
      "Gastric mucosal necrosis / ischemic perforation (<1% due to rich gastric collaterals)",
      "Non-target embolization to aberrant left hepatic artery causing focal liver infarct",
      "Reflux into splenic or common hepatic artery",
      "Rebleeding from right gastric or gastroepiploic collaterals"
    ],
    "maayTariffInr": 44000,
    "vendorContacts": [
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Cook Medical India (+91 98290 11223)",
      "Merit Medical Systems (+91 98292 33445)"
    ]
  },
  {
    "id": "gda-sandwich-embolization",
    "name": "Upper GI Bleed: Gastroduodenal Artery (GDA) Sandwich Coil Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-GIB005",
    "rghsCode": "693 / 20",
    "icd10": "K26.0 (Acute Duodenal Ulcer with Hemorrhage)",
    "indications": [
      "Massive or recurrent duodenal bulb peptic ulcer bleeding (posterior wall erosions into GDA)",
      "Failed endoscopic hemostasis for Forrest Ia/Ib or IIa duodenal ulcer",
      "Hemodynamically unstable patient with active contrast blush in the duodenal C-loop"
    ],
    "preOpCriteria": [
      "Urgent endoscopy confirming posterior bulbar duodenal ulceration",
      "Active hemodynamic resuscitation and ongoing blood transfusion",
      "Baseline INR, Platelets, Creatinine"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length, 0.035\" wire compatible",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / Cobra C2 / Simmons-1 Catheter",
        "spec": "65-80 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.4F - 2.8F Progreat / Renegade Microcatheter",
        "spec": "130 cm length with 0.014\" - 0.018\" hydrophilic wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Coils",
        "name": "0.018\" and 0.035\" Fibered Detachable / Pushable Coils",
        "spec": "3 mm to 6 mm diameter, platinum/tungsten",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Gelfoam Sponge",
        "name": "Spongostan / Gelfoam Sheet",
        "spec": "Cut torpedos / slurry",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Right common femoral artery ultrasound-guided puncture and 5F sheath placement.",
      "Celiac axis and common hepatic artery angiography to demonstrate GDA anatomy and extravasation.",
      "Superselective cannulation of GDA with 2.7F microcatheter.",
      "Execution of Sandwich Technique (crucial to prevent back-bleeding from SMA retrograde supply via anterior/posterior inferior pancreaticoduodenal arteries):",
      "Step A (Back-door occlusion): Deploy microcoils distally in the GDA, just past the ulcer origin and beyond the pancreaticoduodenal arcades.",
      "Step B (Middle occlusion): Administer Gelfoam torpedos/slurry or dense microcoils at the bleeding ulcer site / pseudoaneurysm neck.",
      "Step C (Front-door occlusion): Deploy microcoils proximally at the origin of the GDA near its bifurcation from the common hepatic artery.",
      "Confirmation SMA arteriography showing collateral flow opacifying the arcade without retrograde filling of the bleeding duodenal branch."
    ],
    "complications": [
      "Rebleeding due to failure of back-door occlusion (retrograde fill from inferior pancreaticoduodenal arcade)",
      "Duodenal wall ischemia / stricture (rare)",
      "Hepatic artery dissection or inadvertent coil protrusion into proper hepatic artery",
      "Acute pancreatitis due to branch occlusion"
    ],
    "maayTariffInr": 46000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 11223)",
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Boston Scientific India (+91 98100 44556)"
    ]
  },
  {
    "id": "right-short-gastric-embolization",
    "name": "Upper GI Bleed: Right Gastric / Short Gastric Artery Microcoil Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-GIB006",
    "rghsCode": "693 / 21",
    "icd10": "K25.4 (Chronic or Unspecified Gastric Ulcer with Hemorrhage) / K29.0 (Acute Gastritis)",
    "indications": [
      "Pyloric or antral ulcer hemorrhage supplied by the right gastric artery (RGA)",
      "Gastric fundal ulcer bleeding or splenic hilum pathology involving short gastric branches",
      "Endoscopically refractory upper GI bleeding failing routine LGA/GDA devascularization"
    ],
    "preOpCriteria": [
      "Endoscopic visualization of bleeding pyloric channel or gastric fundus ulcer",
      "Hemodynamic resuscitation, coagulopathy workup (INR, Platelets)",
      "Contrast-enhanced multiphasic CT abdomen detailing vascular variants"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length, 0.035\" wire compatible",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Cobra C2 / Yashiro Catheter",
        "spec": "65-80 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "1.9F - 2.4F Asahi Corsair / Progreat Microcatheter",
        "spec": "130 cm length with 0.014\" Chikai / Fielder wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Microcoils",
        "name": "0.014\" - 0.018\" Helical Microcoils",
        "spec": "2 mm - 4 mm diameter, soft detachable platinum",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Liquid / Slurry",
        "name": "Gelfoam Slurry / Micro-pledgets",
        "spec": "Resorbable gelatin particles",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Right common femoral artery retrograde puncture and 5F sheath placement.",
      "Selective proper hepatic and splenic artery angiograms to visualize the right gastric artery (arising from proper or left hepatic artery) or short gastric arteries (arising from distal splenic branches).",
      "Coaxial navigation of 1.9F/2.4F microcatheter into small-caliber, highly tortuous target vessels under roadmap guidance.",
      "Magnification DSA to confirm direct extravasation or pseudoaneurysm at the pyloric or fundic margin.",
      "Targeted deployment of soft detachable 0.014\" microcoils directly across the bleeding nidus.",
      "Supplementary gentle injection of small Gelfoam pledgets for peripheral capillary bed occlusion.",
      "Post-embolization angiography in the parent hepatic or splenic artery showing preserved organ perfusion and complete cessation of hemorrhage.",
      "Sheath removal and manual hemostatic compression."
    ],
    "complications": [
      "Hepatic artery spasm or intimal dissection",
      "Splenic focal infarction (for short gastric embolization)",
      "Target vessel perforation with stiff microguidewire",
      "Recurrent bleeding via collateral intramural gastric networks"
    ],
    "maayTariffInr": 43500,
    "vendorContacts": [
      "Asahi Intecc India (+91 98294 66778)",
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Cook Medical India (+91 98290 11223)"
    ]
  },
  {
    "id": "lgib-colic-microcoil-embolization",
    "name": "Lower GI Bleed: Superselective Colic Branch Microcoil Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-GIB007",
    "rghsCode": "693 / 22",
    "icd10": "K57.31 (Diverticulosis of Large Intestine with Hemorrhage) / K55.21 (Angiodysplasia with Bleed)",
    "indications": [
      "Acute, severe lower gastrointestinal bleeding (LGIB) with hemodynamic compromise",
      "Active contrast extravasation demonstrated on CT Mesenteric Angiography in ileocolic, right, middle, or left colic artery branches",
      "Endoscopically unmanageable or failed colonoscopic clip application for diverticular or angiodysplastic bleed"
    ],
    "preOpCriteria": [
      "Positive CT Mesenteric Angiogram showing active extravasation rate >= 0.3-0.5 mL/min",
      "Correction of severe coagulopathy (INR < 1.6, Platelets > 50,000/uL)",
      "Rapid crystalloid/blood product resuscitation"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Simmons-1 / Cobra C2 / SOS Omni Catheter",
        "spec": "65-80 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat / Merit Maestro Microcatheter",
        "spec": "130-150 cm length with 0.014\" steerable wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Microcoils",
        "name": "0.014\" - 0.018\" Soft Platinum Detachable Microcoils",
        "spec": "2-3 mm diameter, controlled mechanical detachment",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Microvascular Plugs",
        "name": "Micro Vascular Plug (MVP)",
        "spec": "3 mm - 5 mm nitinol / ePTFE",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Right common femoral artery retrograde access under ultrasound; 5F sheath placement.",
      "Selective Superior Mesenteric Artery (SMA) or Inferior Mesenteric Artery (IMA) catheterization using 5F Simmons-1 or Cobra catheter.",
      "High-frame rate DSA (4-6 fps) with bowel motion suppression (Inj Buscopan / Glucagon 1 mg IV) to capture subtle extravasation.",
      "Superselective microcatheterization down to the vasa recta level immediately supplying the diverticulum or bleeding focus (strictly distal to the marginal artery of Drummond).",
      "Selective microcoil deployment directly into the bleeding vasa recta or immediate arcuate branch to minimize ischemic risk to the colon wall.",
      "Strict avoidance of liquid embolics or small PVA particles in the colon to prevent full-thickness transmural bowel infarction.",
      "Post-embolization SMA/IMA DSA to verify complete cessation of blush/extravasation and preserved perfusion of adjacent bowel loops.",
      "Post-procedure observation with serial abdominal examinations and telemetry."
    ],
    "complications": [
      "Segmental bowel ischemia / ischemic colitis (1-3% with superselective vasa recta technique)",
      "Bowel stricture or delayed perforation",
      "Target vasa recta dissection or spasm simulating hemostasis",
      "Rebleeding from collateral marginal vessels"
    ],
    "maayTariffInr": 47000,
    "vendorContacts": [
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Cook Medical India (+91 98290 11223)",
      "Medtronic India (+91 98295 99001)"
    ]
  },
  {
    "id": "sra-embolization-rectal-bleed",
    "name": "Lower GI Bleed: Superior Rectal Artery (SRA) Microcoil Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-GIB008",
    "rghsCode": "693 / 23",
    "icd10": "K62.5 (Hemorrhage of Anus and Rectum) / K64.8 (Hemorrhoids with Bleeding)",
    "indications": [
      "Refractory lower GI rectal hemorrhage secondary to advanced rectal neoplasm, severe hemorrhoidal bleed, or solitary rectal ulcer",
      "Radiation proctitis with torrential bleeding unresponsive to topical formalin or APC argon plasma coagulation",
      "Patients unfit for surgical resection or transanal suture ligation"
    ],
    "preOpCriteria": [
      "Rigid or flexible sigmoidoscopy documenting bleeding origin from upper/mid rectum",
      "Multiphasic pelvic CTA showing SRA hypertrophy or contrast pooling",
      "Serum Creatinine, Platelet count, Prothrombin Time"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Simmons-1 / SOS Omni Catheter",
        "spec": "65-80 cm length, selective curve",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014\" hydrophilic guidewire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Microcoils",
        "name": "0.014\" - 0.018\" Detachable / Pushable Fibered Microcoils",
        "spec": "2-4 mm diameter, platinum",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Embolic Particles",
        "name": "Embozene / Bead Block Microspheres",
        "spec": "500-700 um calibrated spheres (sparingly used)",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Retrograde right common femoral artery puncture and 5F sheath placement.",
      "Inferior Mesenteric Artery (IMA) cannulation using a 5F Simmons-1 catheter formed in the abdominal aorta.",
      "Selective IMA angiogram in shallow RAO view to visualize the terminal continuation into the superior rectal artery (SRA) and its terminal bifurcation into right and left branches.",
      "Coaxial navigation of 2.0F microcatheter into both terminal branches of the SRA.",
      "Deployment of 2-4 mm fibered microcoils across the bilateral terminal branches of the SRA to eliminate the arterial inflow pressure.",
      "Preservation of the middle colic and left colic (marginal branch) inflow to prevent sigmoid colonic ischemia.",
      "Post-embolization control DSA confirming stagnation in the superior rectal branches with active mucosal preservation via middle/inferior rectal pelvic collaterals.",
      "Sheath extraction and standard femoral compression hemostasis."
    ],
    "complications": [
      "Rectal mucosal ischemic necrosis (rare due to robust middle/inferior rectal anastomoses)",
      "Transient tenesmus and pelvic cramping pain",
      "Accidental embolization of left colic artery branch causing left-sided ischemic colitis",
      "Puncture site hematoma"
    ],
    "maayTariffInr": 44500,
    "vendorContacts": [
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Boston Scientific India (+91 98100 44556)",
      "Cook Medical India (+91 98290 11223)"
    ]
  },
  {
    "id": "trauma-pelvic-fracture-embolization",
    "name": "Trauma: Pelvic Fracture Hemodynamic Instability Gelfoam Slurry Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-TRM009",
    "rghsCode": "693 / 24",
    "icd10": "S32.89 (Fracture of Other Parts of Pelvis) / T79.4 (Traumatic Shock)",
    "indications": [
      "Severe pelvic ring fracture (vertical shear, APC-II/III, lateral compression) with ongoing hemodynamic shock despite external binder application and transfusion",
      "Active arterial contrast extravasation or extensive pelvic retroperitoneal hematoma on trauma contrast CT",
      "Persistent transfusion requirement (>4 units PRBCs/24h) directly attributable to pelvic fractures"
    ],
    "preOpCriteria": [
      "Implementation of Massive Transfusion Protocol (MTP: 1:1:1 PRBC, FFP, Platelets)",
      "Pelvic binder or external fixator applied to stabilize osseous ring",
      "Rule out associated intra-thoracic or intra-peritoneal surgical hemorrhage (e-FAST / CT)"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm length, radiopaque marker",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Omni Flush / Cobra C2 / Roberts Uterine Catheter",
        "spec": "65-100 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.7F Progreat / Renegade Microcatheter",
        "spec": "130 cm length with 0.014\" - 0.018\" wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Temporary Embolic",
        "name": "Gelfoam Absorbable Gelatin Sponge",
        "spec": "Slurry mixed with 50% contrast / saline",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcoils",
        "name": "0.035\" and 0.018\" Fibered Coils",
        "spec": "3-8 mm diameter",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Emergency ultrasound-guided common femoral artery cannulation (contralateral or ipsilateral unaffected side) with 5F or 6F sheath.",
      "Abdominal aortography and pelvic DSA using 5F Omni Flush catheter positioned at L3/L4 bifurcation to assess bilateral internal and external iliac trees.",
      "Rapid crossover / selective engagement of the affected internal iliac artery (IIA) using a 5F Cobra C2 or Roberts catheter.",
      "Selective anterior division IIA angiography in 20-30 degree ipsilateral oblique view.",
      "In exsanguinating, unstable trauma patients: Non-selective anterior division / main trunk temporary embolization using freshly prepared Gelfoam slurry injected under direct fluoroscopic guidance until stasis is reached.",
      "If active extravasation from specific trunk (pudendal, obturator, gluteal) is visualized and patient permits: superselective microcatheterization and coil occlusion of the bleeding vessel.",
      "Contralateral IIA angiography and repeat embolization (pelvic fractures routinely tear bilateral internal iliac branch vessels).",
      "Final completion pelvic angiogram confirming cessation of extravasation with preservation of femoral inflow; intensive care transfer for ongoing resuscitation."
    ],
    "complications": [
      "Gluteal muscle necrosis or Morel-Lavallee lesion ischemia",
      "Pelvic nerve palsy / sciatic neuropathy from ischemic damage",
      "Bladder necrosis or erectile dysfunction",
      "Distal lower extremity accidental thromboembolism"
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 11223)",
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Boston Scientific India (+91 98100 44556)"
    ]
  },
  {
    "id": "trauma-superselective-pelvic-branch-embolization",
    "name": "Trauma: Superselective Internal Pudendal / Obturator / Superior Gluteal Artery Microcoil Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-TRM010",
    "rghsCode": "693 / 25",
    "icd10": "S35.511 (Injury of Internal Iliac Artery) / S32.4 (Fracture of Acetabulum)",
    "indications": [
      "Hemodynamically stabilized pelvic trauma patient with focal arterial contrast extravasation, pseudoaneurysm, or AV fistula",
      "Targeted branch injury: Superior Gluteal (sacroiliac disruption), Obturator (pubic ramus fracture), or Internal Pudendal artery",
      "Desire to avoid global internal iliac occlusion and prevent gluteal/pelvic floor ischemia"
    ],
    "preOpCriteria": [
      "High-resolution trauma pelvic CTA showing precise isolated arterial bleeding focus",
      "Patient resuscitated to MAP > 65 mmHg",
      "Coagulation parameters optimized with blood components"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Cobra C2 / Roberts Uterine / SOS Omni",
        "spec": "65-80 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat / Maestro Microcatheter",
        "spec": "130 cm length with 0.014\" hydrophilic wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Microcoils",
        "name": "0.014\" - 0.018\" Detachable Soft Platinum Coils",
        "spec": "2 mm to 6 mm diameter",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Gelfoam Slurry",
        "name": "Sterile Absorbable Gelatin Powder/Sponge",
        "spec": "Prepared with dilute contrast",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Retrograde common femoral artery access and 5F sheath insertion; cross bifurcation to the injured internal iliac artery.",
      "Targeted selective angiogram of posterior division (for superior gluteal artery) or anterior division (for obturator and internal pudendal branches).",
      "Superselective microcatheter advancement into the bleeding vessel to a point immediately adjacent to the laceration or pseudoaneurysm.",
      "Deployment of mechanically detachable soft microcoils to trap and occlude the injured vessel segment both distal and proximal to the injury.",
      "Injection of small aliquots of Gelfoam slurry if secondary capillary bed avulsion is visible.",
      "Check angiogram demonstrating complete elimination of pseudoaneurysm/contrast extravasation with robust collateral flow to unaffected pelvic viscera.",
      "Bilateral evaluation if bilateral ramus or SI joint fractures exist.",
      "Puncture site closure using manual pressure or collagen-based closure device."
    ],
    "complications": [
      "Superior gluteal ischemic necrosis (if non-superselective occlusion occurs)",
      "Transient or permanent erectile dysfunction / clitoral numbness",
      "Vessel dissection / rupture during superselective wire crossing",
      "Groin hematoma"
    ],
    "maayTariffInr": 46000,
    "vendorContacts": [
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Cook Medical India (+91 98290 11223)",
      "Merit Medical Systems (+91 98292 33445)"
    ]
  },
  {
    "id": "trauma-proximal-splenic-artery-embolization",
    "name": "Trauma: High-Grade Splenic Laceration Proximal Splenic Artery Embolization (Plug / Coils)",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-TRM011",
    "rghsCode": "693 / 26",
    "icd10": "S36.031 (Grade III-V Laceration of Spleen) / T79.4 (Traumatic Shock)",
    "indications": [
      "Hemodynamically stable or stabilized blunt splenic injury Grade III, IV, or V (AAST Classification)",
      "Multiple parenchymal lacerations or diffuse intrasplenic contrast pooling without focal pseudoaneurysm",
      "Goal to lower intrasplenic perfusion pressure while preserving splenic immune function via collateral flow (short gastric & pancreatic branches)"
    ],
    "preOpCriteria": [
      "Triphasic CT Abdomen confirming high-grade splenic laceration and grading hemoperitoneum",
      "Absence of peritonitis or other indication for emergent laparotomy",
      "Coagulation profile, Crossmatched blood availability"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic / Guiding Catheter",
        "name": "5F - 6F Yashiro / Cobra C2 / MPA Guiding Catheter",
        "spec": "65-100 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Vascular Plug",
        "name": "Amplatzer Vascular Plug (AVP II / AVP 4)",
        "spec": "6 mm - 12 mm diameter (oversized 30-50% to splenic artery caliber)",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Embolic Coils",
        "name": "0.035\" Fibered Stainless Steel / Platinum Coils",
        "spec": "6-10 mm diameter, high packing density",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Right common femoral artery retrograde access under ultrasound; 5F or 6F sheath placement.",
      "Celiac axis and selective splenic artery angiography using 5F Yashiro catheter.",
      "Advance catheter into the main splenic artery trunk to identify the dorsal pancreatic and great pancreatic (arteria pancreatica magna) artery takeoff.",
      "Target proximal landing zone: strictly distal to the dorsal pancreatic artery takeoff and proximal to the arteria pancreatica magna / splenic hilum.",
      "Deploy an oversized (30-50%) Amplatzer Vascular Plug (AVP II) or a tight nest of 0.035\" fibered coils in the mid-proximal splenic artery.",
      "Wait 5-10 minutes for thrombus induction; perform post-deployment DSA.",
      "Verify dampening of arterial pressure wave and preserved delayed opacification of splenic parenchyma via short gastric, gastroepiploic, and transverse pancreatic collaterals.",
      "Avoid distal microcoil embolization into parenchymal beds to maintain splenic phagocytic and immunologic viability.",
      "Hemostasis at femoral puncture site."
    ],
    "complications": [
      "Total splenic infarction / abscess formation requiring splenectomy (<3%)",
      "Left pleural effusion and atelectasis",
      "Coil / plug migration or incorrect deployment covering celiac trunk or dorsal pancreatic artery",
      "Post-splenic embolization syndrome (pain, fever, leukocytosis)"
    ],
    "maayTariffInr": 51000,
    "vendorContacts": [
      "Abbott Vascular India (+91 98293 88990)",
      "Cook Medical India (+91 98290 11223)",
      "Terumo India Pvt Ltd (+91 98291 55678)"
    ]
  },
  {
    "id": "trauma-distal-splenic-microcoil-embolization",
    "name": "Trauma: Splenic Parenchymal Pseudoaneurysm Superselective Distal Microcoil Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-TRM012",
    "rghsCode": "693 / 27",
    "icd10": "S36.031 (Splenic Laceration/Pseudoaneurysm) / I72.8 (Aneurysm of Splenic Artery Branch)",
    "indications": [
      "Blunt abdominal trauma with isolated focal splenic pseudoaneurysm or arteriovenous fistula on CT",
      "Delayed presentation of traumatic splenic rupture / expanding intraparenchymal hematoma",
      "Hemodynamically stable patient where preservation of remaining splenic parenchyma is paramount"
    ],
    "preOpCriteria": [
      "Contrast-enhanced abdominal CT mapping exact segmental branch feeding the pseudoaneurysm",
      "Hemoglobin and hematocrit monitoring",
      "Platelet count > 50,000/uL, INR < 1.5"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / Cobra C2 Catheter",
        "spec": "65-80 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat / Maestro Microcatheter",
        "spec": "130 cm length with 0.014\" steerable wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Microcoils",
        "name": "0.014\" - 0.018\" Soft Platinum Detachable Microcoils",
        "spec": "2 mm - 4 mm diameter, 3D and helical shapes",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Gelatin Sponge",
        "name": "Gelfoam Slurry",
        "spec": "Small aliquot for segmental capillary arrest",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided retrograde right common femoral artery puncture; 5F sheath insertion.",
      "Selective celiac and main splenic artery angiography.",
      "Identification of the injured polar or intrasplenic segmental branch supplying the pseudoaneurysm.",
      "Coaxial superselective catheterization using a 2.0F microcatheter directly into the segmental or subsegmental feeder.",
      "Trapping technique: coil embolization distal to the pseudoaneurysm neck, across the sac or neck, and proximal to the lesion to eliminate retrograde arcade filling.",
      "If pseudoaneurysm has a wide neck, pack sac directly using detachable soft microcoils.",
      "Completion angiography through parent splenic artery demonstrating complete exclusion of pseudoaneurysm and normal vascularity of the remaining 85-90% of the spleen.",
      "Femoral compression hemostasis."
    ],
    "complications": [
      "Segmental splenic infarction (<10-15% of spleen volume; usually asymptomatic)",
      "Pseudoaneurysm rupture during microcatheter manipulation",
      "Splenic abscess formation",
      "Persistent flow via secondary collateral feeding branches"
    ],
    "maayTariffInr": 46500,
    "vendorContacts": [
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Cook Medical India (+91 98290 11223)",
      "Boston Scientific India (+91 98100 44556)"
    ]
  },
  {
    "id": "trauma-hepatic-bleeding-embolization",
    "name": "Trauma: Hepatic Parenchymal Bleeding & Pseudoaneurysm Microcoil / Liquid Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-TRM013",
    "rghsCode": "693 / 28",
    "icd10": "S36.115 (Laceration of Liver, Major) / T79.4 (Traumatic Hemorrhage)",
    "indications": [
      "Blunt or penetrating liver trauma (Grade III-V AAST) with active arterial blush or expanding intrahepatic pseudoaneurysm on CT",
      "Post-surgical ongoing hepatic hemorrhage following perihepatic packing or damage control laparotomy",
      "Hemobilia presenting with Quincke triad (biliary colic, jaundice, upper GI bleeding) following liver trauma"
    ],
    "preOpCriteria": [
      "Trauma CT Abdomen documenting liver segment involvement (Couinaud segments) and vascular leaks",
      "Coagulation optimization and blood transfusion in progress",
      "Confirm patency of the portal vein (critical: hepatic arterial embolization requires an intact portal venous inflow to prevent massive hepatic necrosis)"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / Cobra C2 / Simmons-1 Catheter",
        "spec": "65-80 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat / Renegade Microcatheter",
        "spec": "130 cm length with 0.014\" hydrophilic wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Microcoils",
        "name": "0.014\" - 0.018\" Detachable Fibered Platinum Microcoils",
        "spec": "2 mm - 6 mm diameter",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Liquid Embolic / Slurry",
        "name": "Onyx-18 / Gelfoam Slurry / Histoacryl Glue",
        "spec": "Onyx 18 (1.5 mL) or Glubran2 1:3 Lipiodol",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided retrograde right common femoral artery puncture; 5F sheath placement.",
      "Celiac axis, common hepatic, and superior mesenteric artery (SMA) arteriography to evaluate hepatic arterial anatomy and detect replaced right hepatic artery from SMA.",
      "Confirm portal vein opacification on delayed venous phase angiography.",
      "Superselective cannulation of right or left hepatic arterial segmental branch feeding the parenchymal laceration / pseudoaneurysm using 2.4F microcatheter.",
      "Execution of superselective microcoil trapping (distal and proximal to the injury) or careful slow injection of Onyx-18 / Gelfoam slurry.",
      "Avoid non-selective lobar embolization whenever feasible to prevent ischemic cholangiopathy or hepatic abscess.",
      "Post-embolization celiac and proper hepatic arteriograms verifying complete hemostasis and intact perfusion of adjacent hepatic segments.",
      "Groin sheath removal and manual compression hemostasis."
    ],
    "complications": [
      "Hepatic necrosis / ischemic hepatitis (elevated AST/ALT transaminases)",
      "Bile duct necrosis / ischemic stricture / intrahepatic biloma",
      "Liver abscess formation requiring percutaneous drainage",
      "Gallbladder ischemia / acute ischemic cholecystitis if cystic artery involved"
    ],
    "maayTariffInr": 49000,
    "vendorContacts": [
      "Medtronic India (+91 98295 99001)",
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Cook Medical India (+91 98290 11223)"
    ]
  },
  {
    "id": "trauma-renal-artery-embolization",
    "name": "Trauma: Renal Artery Pseudoaneurysm / Active Extravasation Superselective Microcoil Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-TRM014",
    "rghsCode": "693 / 29",
    "icd10": "S37.001 (Injury of Kidney) / I72.2 (Aneurysm of Renal Artery)",
    "indications": [
      "Blunt or penetrating renal trauma (Grade III-IV AAST) with active arterial contrast extravasation, pseudoaneurysm, or large retroperitoneal hematoma",
      "Gross persistent hematuria with hemodynamic instability due to segmental renal artery branch laceration",
      "Preservation of maximum viable functioning nephron mass in traumatic kidney injury"
    ],
    "preOpCriteria": [
      "Contrast CT Abdomen/Pelvis demonstrating Grade III-IV renal laceration and vascular blush",
      "Baseline Serum Creatinine, eGFR, Complete Blood Count, Coagulation Screen",
      "Confirm existence and functional status of contralateral normal kidney"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Renal Double Curve (RDC) / Cobra C2 Catheter",
        "spec": "65 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat / Maestro Microcatheter",
        "spec": "130 cm length with 0.014\" steerable wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Microcoils",
        "name": "0.014\" - 0.018\" Controlled-Release Fibered Platinum Coils",
        "spec": "2 mm - 4 mm diameter",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Liquid Embolic / Slurry",
        "name": "Gelfoam Slurry / Onyx-18",
        "spec": "Optional for terminal parenchymal capillary bed",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Right common femoral artery retrograde access under ultrasound guidance; 5F sheath placement.",
      "Selective main renal artery catheterization using 5F RDC or Cobra catheter; baseline high-resolution DSA in AP and oblique projections.",
      "Identification of active contrast extravasation, arteriovenous shunting, or pseudoaneurysm arising from anterior/posterior division or interlobar branches.",
      "Coaxial superselective cannulation of the bleeding interlobar or arcuate vessel using 2.0F/2.4F microcatheter.",
      "Placement of small 2-3 mm fibered microcoils across the point of transection / pseudoaneurysm neck (trapping technique).",
      "Preservation of all unaffected interlobar and segmental renal arteries supplying viable cortex.",
      "Post-embolization renal angiogram confirming complete occlusion of bleeding branch and robust, preserved parenchymal nephrogram in remaining >80-90% kidney parenchyma.",
      "Hemostasis at access site; transfer to trauma ICU with Foley catheter monitoring of urine clearance."
    ],
    "complications": [
      "Focal renal cortical infarction (planned/minimized to <10%)",
      "Post-embolization syndrome (flank pain, fever, nausea)",
      "Contrast-induced acute kidney injury (CI-AKI)",
      "Renal artery main trunk dissection or spasm"
    ],
    "maayTariffInr": 47500,
    "vendorContacts": [
      "Cook Medical India (+91 98290 11223)",
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Medtronic India (+91 98295 99001)"
    ]
  },
  {
    "id": "pph-covered-stenting-viabahn",
    "name": "Post-Pancreatectomy Hemorrhage (PPH): Hepatic / Gastroduodenal Stump Covered Stenting (Viabahn)",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-PPH015",
    "rghsCode": "693 / 30",
    "icd10": "K91.840 (Postprocedural Hemorrhage of a Digestive System Organ Following Procedure) / I72.8",
    "indications": [
      "Severe delayed Post-Pancreatectomy Hemorrhage (ISGPS Grade C PPH) following Whipple procedure / pancreaticoduodenectomy",
      "Pseudoaneurysm of common hepatic artery (CHA) or gastroduodenal artery (GDA) stump with active bleeding or sentry bleed into surgical drains",
      "Mandatory preservation of hepatic arterial flow to prevent fulminant ischemic liver necrosis or biliary anastomotic breakdown"
    ],
    "preOpCriteria": [
      "Emergency multiphasic CT Angiogram showing pseudoaneurysm at CHA or GDA stump near surgical clips",
      "Hemodynamic resuscitation; correction of coagulopathy",
      "Vascular access planning for 6F - 7F sheath required for stent-graft delivery"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "6F - 7F Ansel Guiding Sheath / Radiofocus Sheath",
        "spec": "45-55 cm length, braided radiopaque tip",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Celiac / Yashiro / SOS Omni Catheter",
        "spec": "65-80 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035\" Rosen / Amplatz Extra-Stiff Wire",
        "spec": "180-260 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Covered Stent-Graft",
        "name": "GORE VIABAHN Endoprosthesis with Heparin Bioactive Surface",
        "spec": "5-7 mm diameter, 2.5-5 cm length, 6F/7F delivery system",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Angioplasty Balloon",
        "name": "PTA Dilatation Balloon (Admiral / Sterling)",
        "spec": "5-6 mm diameter x 20 mm length for post-dilatation",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Right common femoral artery puncture under ultrasound; placement of 6F or 7F long guiding sheath (45 cm).",
      "Selective celiac trunk catheterization and baseline DSA in AP and RAO cranial views to map CHA, proper hepatic artery (PHA), and GDA stump pseudoaneurysm.",
      "Exchange over a 0.035\" stiff guidewire (Rosen or Amplatz) placed deeply into the right or left hepatic artery.",
      "Advance the 6F/7F guiding sheath into the common hepatic artery to provide robust support.",
      "Deploy the GORE VIABAHN self-expanding covered stent-graft across the GDA stump / CHA pseudoaneurysm neck, extending from healthy CHA into healthy proper hepatic artery (at least 1 cm landing zones proximally and distally).",
      "Perform gentle balloon post-dilatation with a 5-6 mm PTA balloon to ensure complete seal and wall apposition.",
      "Immediate repeat DSA demonstrating complete exclusion of the pseudoaneurysm with brisk, unimpeded laminar flow into the intrahepatic branches.",
      "Close femoral access with Perclose ProGlide or Angio-Seal vascular closure device; initiate antiplatelet therapy as clinically tolerated."
    ],
    "complications": [
      "Stent-graft thrombosis causing acute hepatic ischemia",
      "Endoleak (Type I or Type II) with persistent pseudoaneurysm perfusion",
      "Hepatic artery dissection or spasm during device delivery",
      "Stent infection secondary to adjacent pancreatic fluid collection / infected fistula"
    ],
    "maayTariffInr": 68000,
    "vendorContacts": [
      "W.L. Gore & Associates India (+91 98296 11224)",
      "Cook Medical India (+91 98290 11223)",
      "Medtronic India (+91 98295 99001)"
    ]
  },
  {
    "id": "pph-coil-isolation-thrombin",
    "name": "Post-Pancreatectomy Hemorrhage: Pseudoaneurysm Coil Isolation & Percutaneous / Transcatheter Thrombin Injection",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-PPH016",
    "rghsCode": "693 / 31",
    "icd10": "K91.840 (Post-Pancreatectomy Hemorrhage) / I72.8 (Visceral Pseudoaneurysm)",
    "indications": [
      "Grade B or C post-pancreatectomy hemorrhage where anatomy or vessel tortuosity precludes covered stent graft placement",
      "Isolated pseudoaneurysm arising from branch of splenic, left gastric, or jejunal artery with intact alternate liver perfusion",
      "Direct percutaneous ultrasound-guided thrombin injection for accessible superficial visceral pseudoaneurysm sacs"
    ],
    "preOpCriteria": [
      "CT angiogram detailing precise anatomical neck and inflow/outflow of the pseudoaneurysm",
      "Patient resuscitated to tolerate endovascular / percutaneous procedure",
      "INR < 1.6, Platelets > 50,000/uL"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / Cobra C2 Catheter",
        "spec": "65-80 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat / Maestro Microcatheter",
        "spec": "130 cm length with 0.014\" steerable wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Detachable Microcoils",
        "name": "0.014\" - 0.018\" Controlled-Release Platinum Coils",
        "spec": "2 mm - 6 mm diameter",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Thrombin Embolic",
        "name": "Human / Bovine Thrombin (Tisseel / Floseal)",
        "spec": "500 - 1000 IU/mL concentration",
        "standardStore": "SMS Pharmacy DDC-14"
      },
      {
        "category": "Spinal Needle",
        "name": "21G - 22G Chiba / Echogenic Needle",
        "spec": "10-15 cm length (for direct puncture)",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Transcatheter Route: Femoral arterial access and selective cannulation of the parent feeding vessel (e.g., splenic, dorsal pancreatic, or jejunal branch).",
      "Advance 2.0F microcatheter across the pseudoaneurysm neck: perform coil trapping (coiling outflow branch, followed by sac or parent artery packing across the defect).",
      "Percutaneous Route (for large accessible pseudoaneurysm sacs): Ultrasound-guided direct puncture of the pseudoaneurysm center using a 22G Chiba needle.",
      "Confirm intra-saccular tip position with color Doppler \"yin-yang\" sign and blood aspiration.",
      "Slow, controlled injection of 200-500 IU of reconstituted thrombin (1000 IU/mL) under continuous real-time color Doppler observation until immediate thrombosis and flow cessation.",
      "Avoid injection near the neck to prevent thrombin escape into the main mesenteric/hepatic circulation.",
      "Control angiogram / Doppler confirming complete thrombosis of the aneurysm lumen and patency of downstream native vessels.",
      "Needle removal and compression; monitor for 24-48 hours in ICU."
    ],
    "complications": [
      "Distal thromboembolism into portal or mesenteric circulation",
      "Aneurysmal sac rupture during direct puncture or catheter advancement",
      "Allergic reaction to bovine thrombin preparation",
      "Ischemic bowel or liver infarction"
    ],
    "maayTariffInr": 49500,
    "vendorContacts": [
      "Baxter India (+91 98297 33445)",
      "Cook Medical India (+91 98290 11223)",
      "Terumo India Pvt Ltd (+91 98291 55678)"
    ]
  },
  {
    "id": "splenic-aneurysm-covered-stent",
    "name": "Splenic Artery Aneurysm (SAA): Endovascular Covered Stent-Graft Exclusion",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-SAA017",
    "rghsCode": "693 / 32",
    "icd10": "I72.8 (Aneurysm of Splenic Artery)",
    "indications": [
      "True splenic artery aneurysm > 2 cm in diameter or documented rapid enlargement (>0.5 cm/yr)",
      "Splenic artery aneurysm in women of childbearing age, during pregnancy, or prior to liver transplantation",
      "Symptomatic or ruptured splenic artery aneurysm with favorable non-calcified proximal and distal landing zones (>15 mm) in the mid-splenic artery"
    ],
    "preOpCriteria": [
      "High-resolution CT Angiography measuring proximal/distal landing zone lengths and inner luminal diameters",
      "Assessment of vessel tortuosity (splenic artery \"corkscrew\" loop evaluation)",
      "Cardiovascular assessment, INR, Platelets, Creatinine"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "6F - 7F Ansel Guiding Sheath",
        "spec": "45-55 cm length, braided radiopaque tip",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Yashiro / Cobra C2 / MPA Catheter",
        "spec": "65-80 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035\" Rosen / Glidewire Advantage / Amplatz Wire",
        "spec": "260 cm length, stiff body, floppy tip",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Covered Stent-Graft",
        "name": "GORE VIABAHN Endoprosthesis",
        "spec": "6-8 mm diameter, 5-10 cm length, 6F-7F delivery",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Angioplasty Balloon",
        "name": "PTA Balloon Dilatation Catheter",
        "spec": "6-7 mm diameter x 40 mm length",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Retrograde right common femoral artery puncture under ultrasound; insertion of 7F long guiding sheath into upper abdominal aorta.",
      "Selective celiac axis catheterization and engagement of the main splenic artery origin.",
      "Deliver stiff 0.035\" Rosen or Amplatz wire into the distal splenic artery past the aneurysm neck into the splenic hilum.",
      "Track 7F Ansel sheath across the tortuous celiac-splenic take-off over the stiff wire.",
      "Advance and position the self-expanding GORE VIABAHN covered stent across the aneurysm sac, ensuring >= 1.5 cm overlap with normal caliber vessel proximally and distally.",
      "Deploy the covered stent under roadmapping; perform gentle balloon post-dilatation at the landing zones.",
      "Completion angiography confirming total exclusion of the aneurysm sac without endoleak and preserved distal splenic parenchymal perfusion.",
      "Femoral puncture closure using Perclose ProGlide or manual pressure."
    ],
    "complications": [
      "Inability to track device due to extreme splenic artery tortuosity (\"gun-barrel\" effect)",
      "Endoleak (Type I or Type II via collateral branches) leading to persistent sac pressure",
      "Stent thrombosis resulting in splenic infarction",
      "Vessel rupture during delivery or post-dilatation"
    ],
    "maayTariffInr": 69000,
    "vendorContacts": [
      "W.L. Gore & Associates India (+91 98296 11224)",
      "Cook Medical India (+91 98290 11223)",
      "Boston Scientific India (+91 98100 44556)"
    ]
  },
  {
    "id": "splenic-aneurysm-sac-packing-onyx",
    "name": "Splenic Artery Aneurysm (SAA): Sac Packing with Detachable Coils & Onyx / Thrombin",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-SAA018",
    "rghsCode": "693 / 33",
    "icd10": "I72.8 (Aneurysm of Splenic Artery)",
    "indications": [
      "Splenic artery aneurysm > 2 cm with excessive tortuosity, wide neck, or bifurcated hilar location unsuitable for covered stenting",
      "Saccular aneurysm of splenic artery branch where parent vessel preservation is required",
      "Recurrent flow or endoleak following previous stent-grafting"
    ],
    "preOpCriteria": [
      "3D volume-rendered CT Angiography to characterize sac dimensions, neck width, and branch origins",
      "Renal profile, Baseline coagulation status",
      "Consent regarding potential risk of partial splenic infarction"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guiding Catheter",
        "name": "5F - 6F Guiding Sheath / MPA Catheter",
        "spec": "65-90 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "1.9F - 2.4F DMSO-Compatible Microcatheter (Rebar 18 / Marathon / Progreat)",
        "spec": "130-150 cm length",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Microcoils",
        "name": "0.014\" - 0.018\" 3D Framing and Helical Soft Platinum Detachable Coils",
        "spec": "4 mm to 16 mm diameter, complex framing shapes",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Liquid Embolic",
        "name": "Onyx-18 / Onyx-34 Ethylene Vinyl Alcohol Copolymer",
        "spec": "1.5 mL vial with DMSO solvent",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Right common femoral artery access and 6F guiding sheath placement into the splenic artery trunk.",
      "Roadmap fluoroscopy to identify aneurysm neck and parent vessel takeoff.",
      "Advance DMSO-compatible microcatheter (e.g., Rebar 18) directly into the center of the aneurysm sac.",
      "Deploy 3D framing detachable coils along the aneurysm wall to construct a stabilizing scaffold/basket (\"framing coil basket\").",
      "Fill the core of the basket with soft filling coils until dense packing (>20-25% packing density) is achieved.",
      "If wide-necked or flow persists: purge microcatheter with DMSO and slowly inject Onyx-18 under continuous subtracted fluoroscopy to polymerize within the coil interstices and seal the sac.",
      "Avoid reflux of Onyx into the parent splenic artery or distal splenic hilum.",
      "Post-procedure DSA showing complete exclusion of the aneurysm sac with patent parent splenic artery.",
      "Closure of femoral puncture site."
    ],
    "complications": [
      "Onyx / coil herniation or migration into distal splenic bed causing splenic infarction",
      "Aneurysmal sac rupture during microcoil framing",
      "Microcatheter entrapment in Onyx polymer",
      "Post-embolization syndrome (pain, fever)"
    ],
    "maayTariffInr": 58000,
    "vendorContacts": [
      "Medtronic India (+91 98295 99001)",
      "MicroVention India (+91 98298 77889)",
      "Terumo India Pvt Ltd (+91 98291 55678)"
    ]
  },
  {
    "id": "renal-artery-aneurysm-stent-assisted-coiling",
    "name": "Renal Artery Aneurysm (RAA): Stent-Assisted Coiling at Main Renal Bifurcation",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-RAA019",
    "rghsCode": "693 / 34",
    "icd10": "I72.2 (Aneurysm of Renal Artery)",
    "indications": [
      "Wide-necked (>4 mm or dome-to-neck ratio < 2) true renal artery aneurysm > 2 cm at the primary bifurcation",
      "Symptomatic RAA (refractory renovascular hypertension, flank pain, hematuria)",
      "Renal artery aneurysm in women of childbearing age due to severe catastrophic rupture risk during pregnancy"
    ],
    "preOpCriteria": [
      "High-resolution CT Angiography with multiplanar reformation to evaluate bifurcation angle and segmental branches",
      "Dual antiplatelet therapy (DAPT: Aspirin 75 mg + Clopidogrel 75 mg) started 3-5 days pre-procedure",
      "Baseline Renal function (Serum Creatinine, eGFR) and coagulation profile"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "6F Radiofocus Introducer Sheath / Ansel Guiding Sheath",
        "spec": "45 cm length, 6F lumen",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guiding Catheter",
        "name": "6F RDC / MPA Guiding Catheter",
        "spec": "100 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Self-Expanding Stent",
        "name": "LVIS / Enterprise / Solitaire / Dynamic Self-Expanding Nitinol Stent",
        "spec": "4-6 mm diameter, 20-30 mm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Microcatheter",
        "name": "1.7F - 2.1F Headway / Echelon / Progreat Microcatheter",
        "spec": "130-150 cm length with 0.014\" microwire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Detachable Microcoils",
        "name": "0.010\" - 0.014\" Helical and 3D Complex Detachable Coils",
        "spec": "3 mm to 12 mm diameter, soft platinum",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided retrograde right common femoral artery puncture; insertion of 6F long guiding sheath into the renal artery.",
      "Selective renal angiogram detailing the aneurysm neck, relationship to anterior/posterior divisions, and parent vessel dimensions.",
      "Deliver a 0.014\" wire into the major outflow branch spanning across the aneurysm neck.",
      "Advance the microcatheter through or jailing alongside the stent delivery system into the aneurysm sac (\"jailing technique\").",
      "Deploy the self-expanding nitinol open- or closed-cell stent across the wide neck, bridging from the main renal trunk into the daughter branch to act as a mechanical barrier.",
      "Introduce soft 3D detachable microcoils through the jailed microcatheter into the aneurysm sac, packing it densely while the stent struts prevent coil herniation into the parent vessel.",
      "Carefully detach coils under fluoroscopic confirmation; withdraw microcatheter.",
      "Final DSA confirming dense coil occlusion of the aneurysm sac, perfect preservation of all segmental renal divisions, and no intra-stent thrombosis.",
      "Vascular closure device hemostasis; maintain DAPT post-procedure."
    ],
    "complications": [
      "Thrombosis of the stent or renal segmental branches causing partial renal infarction",
      "Coil migration through stent struts into segmental renal vasculature",
      "Renal artery dissection from guiding sheath / stent manipulation",
      "Distal micro-embolism and acute deterioration of renal function"
    ],
    "maayTariffInr": 65000,
    "vendorContacts": [
      "MicroVention India (+91 98298 77889)",
      "Medtronic India (+91 98295 99001)",
      "Cook Medical India (+91 98290 11223)"
    ]
  },
  {
    "id": "renal-pseudoaneurysm-post-pcnl-nephrectomy",
    "name": "Renal Artery Pseudoaneurysm Post-Partial Nephrectomy / PCNL Superselective Microcoil Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-RAP020",
    "rghsCode": "693 / 35",
    "icd10": "N99.820 (Postprocedural Hemorrhage of a Genitourinary System Organ) / I72.2",
    "indications": [
      "Severe gross hematuria or retroperitoneal hemorrhage following partial nephrectomy, percutaneous nephrolithotomy (PCNL), or percutaneous renal biopsy",
      "Contrast CT or Doppler showing active pseudoaneurysm or high-flow arteriovenous fistula (AVF)",
      "Hemodynamic instability or rapid drop in hematocrit post-urological intervention"
    ],
    "preOpCriteria": [
      "Renal CTA documenting exact branch injury and exclusion of collect-system transection",
      "Pre-procedure Hb, Platelet count, INR, Serum Creatinine",
      "Urinary bladder catheterization to prevent clot retention"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Renal Double Curve (RDC) / Cobra C2 Catheter",
        "spec": "65 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "1.9F - 2.4F Asahi Corsair / Terumo Progreat Microcatheter",
        "spec": "130 cm length with 0.014\" Chikai / Fielder wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Microcoils",
        "name": "0.014\" - 0.018\" Controlled-Release Soft Platinum Microcoils",
        "spec": "1.5 mm - 4 mm diameter",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Liquid Embolic",
        "name": "Glubran2 / Histoacryl mixed with Lipiodol (1:2 to 1:4 ratio)",
        "spec": "Optional for rapid AVF occlusion",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided retrograde right common femoral artery puncture; 5F sheath insertion.",
      "Selective main renal artery angiogram using 5F RDC catheter in AP and RAO/LAO projections.",
      "Identify the surgical clip / nephrostomy tract and detect the injured interlobar or arcuate branch showing pseudoaneurysm sac or rapid venous filling (AVF).",
      "Superselective cannulation of the tiny feeding vessel using a 2.0F microcatheter over a 0.014\" guidewire.",
      "Advance microcatheter tip directly to the pseudoaneurysm neck or through the AV fistula nidus.",
      "Deploy controlled-release 0.014\" microcoils (sandwich or isolation technique) until complete stasis in the pseudoaneurysm is achieved.",
      "If high-flow AVF: employ cyanoacrylate glue (1:3 Lipiodol) or detachable microcoils to avoid pulmonary embolization.",
      "Post-embolization renal angiogram confirming total obliteration of the lesion with preservation of >95% functioning renal parenchymal blush.",
      "Femoral puncture closure."
    ],
    "complications": [
      "Minor wedge-shaped focal renal parenchymal infarction (<5% of kidney volume)",
      "Reflux of embolic material into main renal artery branch",
      "Transient worsening of gross hematuria as existing parenchymal clots wash out",
      "Pseudoaneurysm recurrence or delayed rupture"
    ],
    "maayTariffInr": 47000,
    "vendorContacts": [
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Cook Medical India (+91 98290 11223)",
      "Asahi Intecc India (+91 98294 66778)"
    ]
  },
  {
    "id": "uae-primary-pph-gelfoam",
    "name": "Uterine Artery Embolization (UAE) for Primary Postpartum Hemorrhage (PPH) with Gelfoam Slurry",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-UAE021",
    "rghsCode": "693 / 36",
    "icd10": "O72.0 (Third-stage Hemorrhage) / O72.1 (Other Immediate Postpartum Hemorrhage)",
    "indications": [
      "Severe primary postpartum hemorrhage refractory to uterotonic agents (Oxytocin, Ergometrine, Carboprost, Misoprostol) and uterine balloon tamponade (Bakri balloon)",
      "Persistent bleeding from uterine atony, genital tract lacerations, or coagulopathy post-vaginal or cesarean delivery",
      "Desire to avoid emergent peripartum hysterectomy and preserve future fertility in hemodynamically stabilized patient"
    ],
    "preOpCriteria": [
      "Activation of massive obstetric hemorrhage protocol; ongoing transfusion of packed cells, FFP, cryoprecipitate, platelets",
      "Exclude retained products of conception and extensive uterine rupture requiring laparotomy",
      "Hemodynamic resuscitation to maintain SBP > 90 mmHg"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2 Catheter",
        "spec": "65-80 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.4F - 2.8F Progreat / Renegade Microcatheter",
        "spec": "130 cm length with 0.014\" - 0.018\" hydrophilic wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Temporary Embolic",
        "name": "Gelfoam Absorbable Gelatin Sponge",
        "spec": "Freshly prepared slurry and 1-2 mm pledgets",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcoils",
        "name": "0.018\" Fibered Microcoils",
        "spec": "3 mm - 5 mm (standby for focal arterial laceration)",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Bilateral or unilateral right common femoral artery puncture under ultrasound; 5F sheath placement.",
      "Non-selective pelvic DSA using a pigtail/flush catheter to assess uterine enlargement and identify active extravasation or pseudoaneurysm.",
      "Selective catheterization of the contralateral internal iliac artery and anterior division using a 5F Roberts Uterine Catheter (RUC) or Cobra C2.",
      "Superselective cannulation of the ascending uterine artery with a 2.7F microcatheter, placing the tip beyond the cervicovaginal branch.",
      "Injection of Gelfoam slurry (prepared using a 3-way stopcock with 50% iodinated contrast and 50% saline) until near-stasis / slow forward clearance of flow (\"tree in winter\" appearance).",
      "If active arterial laceration or focal pseudoaneurysm is noted, deploy 0.018\" fibered microcoils across the laceration.",
      "Form catheter loop (Waltman loop) or cross over to perform identical superselective embolization of the ipsilateral uterine artery (bilateral embolization is mandatory in uterine atony).",
      "Completion pelvic angiogram to ensure stasis in uterine arteries with preserved ovarian and internal iliac trunk flow; sheath removal / manual compression."
    ],
    "complications": [
      "Transient pelvic pain, fever, and leukocytosis (post-embolization syndrome)",
      "Endometritis / pelvic infection",
      "Uterine necrosis (extremely rare with temporary Gelfoam slurry)",
      "Groin puncture site hematoma or pseudoaneurysm"
    ],
    "maayTariffInr": 45000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 11223)",
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Boston Scientific India (+91 98100 44556)"
    ]
  },
  {
    "id": "placenta-accreta-balloon-occlusion",
    "name": "Prophylactic Internal Iliac Artery Balloon Occlusion Catheters for Placenta Accreta Spectrum (PAS)",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-PAS022",
    "rghsCode": "693 / 37",
    "icd10": "O43.2 (Morbidly Adherent Placenta - Accreta / Increta / Percreta)",
    "indications": [
      "Antenatally diagnosed Placenta Accreta Spectrum (Placenta Increta or Percreta) scheduled for elective or semi-emergent Cesarean delivery",
      "High risk of catastrophic hemorrhage during placental separation or Cesarean hysterectomy",
      "Targeted temporary pelvic arterial devascularization to optimize surgical field visualization and reduce blood loss"
    ],
    "preOpCriteria": [
      "Obstetric MRI / Color Doppler USG confirming Placenta Accreta / Increta / Percreta with bladder invasion assessment",
      "Multidisciplinary planning: Interventional Radiology, Obstetric Surgery, Gynecologic Oncology, Anesthesia, Neonatology",
      "Pre-procedure bilateral groin shaving and surgical draping in hybrid OR / Angio suite"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "6F Radiofocus Introducer Sheaths (x2)",
        "spec": "11 cm length (bilateral CFA access)",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Cobra C2 / Roberts Uterine Catheter",
        "spec": "65 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Balloon Occlusion Catheter",
        "name": "6F / 7F Compliant / Non-Compliant Occlusion Balloon Catheter (Mustang / Reliant)",
        "spec": "8 mm - 10 mm diameter, 2-4 cm length, 0.035\" wire lumen",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Guidewire",
        "name": "0.035\" Stiff Glidewire / Amplatz Extra-Stiff Wire",
        "spec": "180-260 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Temporary Embolic",
        "name": "Gelfoam Sponge / Microcoils (on standby)",
        "spec": "For post-delivery persistent bleeding",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Patient positioned on hybrid operating table or transferred from IR suite; bilateral common femoral artery puncture under ultrasound; placement of 6F sheaths in both groins.",
      "Selective catheterization of bilateral internal iliac arteries (IIA) using 5F Cobra catheters.",
      "Exchange over 0.035\" stiff guidewires to position 8-10 mm compliant occlusion balloon catheters within the main anterior division or proximal trunk of both internal iliac arteries.",
      "Test balloon inflation with 1:1 contrast/saline under fluoroscopy to confirm complete vessel occlusion without migration; immediately deflate balloons.",
      "Secure balloon catheters and sheaths firmly to the thighs; drape patient for Cesarean section.",
      "Obstetric team performs Cesarean delivery of the neonate and clamps umbilical cord.",
      "Upon cord clamping and initiation of placental dissection / hysterectomy, simultaneously inflate both internal iliac balloons to full occlusive diameter.",
      "Monitor inflation time (maximum 30-40 minutes continuous; deflate for 5 minutes if prolonged surgery to allow pelvic washout).",
      "Following surgical hemostasis, deflate balloons and perform control angiography; if persistent bleeding, proceed with Gelfoam embolization; remove sheaths and balloons."
    ],
    "complications": [
      "Internal iliac or external iliac artery thrombosis / dissection",
      "Distal lower extremity ischemia from accidental external iliac occlusion",
      "Balloon rupture or catheter migration during patient manipulation",
      "Puncture site bleeding or retroperitoneal hematoma"
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 11223)",
      "Boston Scientific India (+91 98100 44556)",
      "Medtronic India (+91 98295 99001)"
    ]
  },
  {
    "id": "ufe-uterine-fibroids-microspheres",
    "name": "Uterine Fibroid Embolization (UFE) using Calibrated Microspheres (500-700 / 700-900 um)",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-UFE023",
    "rghsCode": "693 / 38",
    "icd10": "D25.9 (Leiomyoma of Uterus, Unspecified) / N92.0 (Excessive Menstruation)",
    "indications": [
      "Symptomatic uterine leiomyomas (heavy menstrual bleeding, pelvic bulk pain, urinary frequency)",
      "Desire for uterine preservation and avoidance of hysterectomy or myomectomy",
      "Failed or refused hormonal medical management (progestins, GnRH analogues)"
    ],
    "preOpCriteria": [
      "Pelvic Contrast-Enhanced MRI documenting fibroid size, number, transmural location (submucosal, intramural, subserosal), and excluding adenomyosis / malignancy",
      "Cervical cancer screening (Pap smear) and endometrial biopsy if abnormal bleeding pattern",
      "Serum Creatinine, Coagulation profile, pregnancy test negative"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length, 0.035\" wire compatible",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2 Catheter",
        "spec": "65-80 cm length, high torque braided",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.4F - 2.8F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014\" - 0.018\" hydrophilic wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Calibrated Microspheres",
        "name": "Embosphere / Embozene Calibrated Microspheres",
        "spec": "500-700 um and 700-900 um syringes",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Closure Device",
        "name": "Angio-Seal / Perclose ProGlide Vascular Closure Device",
        "spec": "6F femoral closure",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Right common femoral or left radial artery access under ultrasound; 5F sheath placement.",
      "Pelvic aortography (optional) followed by selective catheterization of the contralateral internal iliac artery using a 5F Roberts Uterine Catheter.",
      "Superselective cannulation of the horizontal segment of the uterine artery using a 2.4F/2.7F microcatheter, positioned well distal to the cervicovaginal branch to prevent vaginal necrosis.",
      "DSA showing characteristic hypervascular fibroid blush (\"corymb of vessels\"). Check for utero-ovarian anastomoses.",
      "Slow, pulsation-synchronous injection of calibrated 500-700 um microspheres mixed with contrast under fluoroscopy until complete obliteration of the tumor capillary bed.",
      "Progress to 700-900 um particles until the therapeutic endpoint is reached: sluggish forward flow in the main uterine artery (\"tree in winter\" or 5-10 heartbeats clearance stasis).",
      "Form Waltman loop or reposition catheter to engage and embolize the ipsilateral uterine artery with identical technique.",
      "Post-embolization angiogram verifying complete devascularization of fibroid beds; deploy vascular closure device at femoral access site; initiate aggressive IV PCA analgesia protocol."
    ],
    "complications": [
      "Post-Embolization Syndrome (severe pelvic cramping, low-grade fever, nausea)",
      "Vaginal expulsion of necrotic submucosal fibroid (transcervical sloughing)",
      "Premature ovarian failure / transient amenorrhea (<1-2% under age 40; up to 8% >45 yrs)",
      "Inadvertent non-target embolization to ovaries or bladder"
    ],
    "maayTariffInr": 49000,
    "vendorContacts": [
      "Merit Medical Systems (+91 98292 33445)",
      "Cook Medical India (+91 98290 11223)",
      "Terumo India Pvt Ltd (+91 98291 55678)"
    ]
  },
  {
    "id": "uae-symptomatic-adenomyosis",
    "name": "Uterine Artery Embolization for Symptomatic Diffuse / Focal Adenomyosis",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-ADE024",
    "rghsCode": "693 / 39",
    "icd10": "N80.0 (Adenomyosis of Uterus) / N94.6 (Dysmenorrhea, Unspecified)",
    "indications": [
      "Severe, debilitating dysmenorrhea and menorrhagia refractory to medical therapy (LNG-IUS, oral dienogest, GnRH analogues)",
      "Diffuse or focal adenomyosis with junctional zone thickness > 12 mm on MRI",
      "Desire for uterine preservation and avoidance of definitive hysterectomy"
    ],
    "preOpCriteria": [
      "Pelvic MRI confirming diffuse junctional zone expansion or adenomyoma, excluding coexisting high-grade pelvic endometriosis",
      "Normal endometrial histology and negative cervical smear",
      "Serum Creatinine, Coagulation profile, negative beta-hCG"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2 Catheter",
        "spec": "65 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.4F - 2.8F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014\" - 0.018\" wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Calibrated Microspheres",
        "name": "Embosphere / Bead Block Microspheres",
        "spec": "500-700 um calibrated particles",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Analgesia Accessories",
        "name": "Hypogastric Nerve Block Kit (Chiba Needle 21G)",
        "spec": "Optional intra-procedural regional block",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Retrograde right common femoral or left transradial arterial access; 5F sheath placement.",
      "Selective cannulation of contralateral internal iliac artery and anterior division with 5F Roberts catheter.",
      "Coaxial superselective catheterization of the ascending uterine artery beyond the cervicovaginal branch using 2.4F microcatheter.",
      "Angiography revealing diffuse hypervascular myometrial enlargement without discrete circumscribed fibroid margins.",
      "Slow, incremental administration of 500-700 um calibrated microspheres under continuous fluoroscopic subtraction until total stasis of the myometrial branches is achieved.",
      "Repeat technique on the ipsilateral uterine artery via Waltman loop or contralateral groin approach.",
      "Endpoints for adenomyosis require slightly denser particle deposition than fibroids to permanently obliterate the ectopic endometrial-myometrial microvascular bed.",
      "Post-procedure analgesia protocol: patient-controlled analgesia (PCA) or bilateral superior hypogastric nerve block for intense cramping."
    ],
    "complications": [
      "Severe acute ischemic pelvic pain requiring prolonged opioid analgesia",
      "Transient amenorrhea or permanent ovarian insufficiency in perimenopausal women",
      "Endometritis or delayed uterine infection",
      "Non-target embolization to bladder or ovaries"
    ],
    "maayTariffInr": 48500,
    "vendorContacts": [
      "Merit Medical Systems (+91 98292 33445)",
      "Cook Medical India (+91 98290 11223)",
      "Terumo India Pvt Ltd (+91 98291 55678)"
    ]
  },
  {
    "id": "uterine-avm-embolization-onyx-glue",
    "name": "Uterine Arteriovenous Malformation (AVM) Superselective Embolization with Onyx / Glue",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-AVM025",
    "rghsCode": "693 / 40",
    "icd10": "Q27.30 (Arteriovenous Malformation) / T81.0 (Hemorrhage Complicating a Procedure)",
    "indications": [
      "Catastrophic, recurrent vaginal bleeding secondary to congenital or acquired uterine arteriovenous malformation (often post-D&C, Cesarean section, or trophoblastic disease)",
      "Color Doppler demonstrating high-velocity, low-resistance mosaic turbulence within myometrium (PSV > 50-80 cm/s, RI < 0.4)",
      "Avoidance of curettage (which precipitates torrential fatal hemorrhage)"
    ],
    "preOpCriteria": [
      "Pelvic CTA / MRA identifying feeding uterine branches and early draining pelvic veins",
      "Beta-hCG level to exclude active Gestational Trophoblastic Disease (GTD)",
      "Rapid crossmatch and blood product availability"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2",
        "spec": "65 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "DMSO-Compatible Microcatheter",
        "name": "1.9F - 2.1F Rebar 18 / Marathon Microcatheter",
        "spec": "130-150 cm length with 0.014\" steerable wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Liquid Embolic",
        "name": "Onyx-18 / Onyx-34 or N-BCA Glue (Glubran2)",
        "spec": "Onyx 1.5 mL vial with DMSO or N-BCA 1:2-1:3 Lipiodol",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcoils",
        "name": "0.014\" - 0.018\" Detachable Soft Platinum Coils",
        "spec": "2 mm - 5 mm diameter",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided right common femoral artery puncture; 5F sheath placement.",
      "Pelvic DSA and selective bilateral uterine arteriography identifying high-flow AVM nidus with immediate venous shunting into enlarged pelvic/internal iliac veins.",
      "Superselective microcatheterization of primary feeding arterial vessels directly into the proximal AVM nidus using DMSO-compatible microcatheter.",
      "If high-flow arteriovenous shunt: prime with a soft detachable microcoil or flow-directed glue (N-BCA:Lipiodol 1:2) to slow transit.",
      "Under high-resolution subtracted fluoroscopy, perform controlled injection of Onyx-18 / Onyx-34 into the nidus, allowing slow precipitative filling of the vascular tangle without pulmonary venous migration.",
      "Repeat on contralateral uterine artery or ipsilateral ovarian collateral feeders if bilateral recruitment is present.",
      "Post-embolization angiography showing complete obliteration of the AVM nidus and venous filling with preserved normal uterine parenchymal arborization.",
      "Closure of femoral puncture site; pelvic ultrasound follow-up at 24 hours."
    ],
    "complications": [
      "Pulmonary embolism of liquid embolic via pelvic venous drainage",
      "Uterine necrosis or endometrial cavity scarring",
      "Microcatheter entrapment during Onyx casting",
      "Recurrence from ovarian or transpelvic collateral recruitment"
    ],
    "maayTariffInr": 54000,
    "vendorContacts": [
      "Medtronic India (+91 98295 99001)",
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Cook Medical India (+91 98290 11223)"
    ]
  },
  {
    "id": "ectopic-cervical-scar-chemoembolization",
    "name": "Ectopic Pregnancy (Cervical / Cesarean Scar): Bilateral Uterine Artery Chemoembolization with Methotrexate",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-ECT026",
    "rghsCode": "693 / 41",
    "icd10": "O00.0 (Abdominal Pregnancy) / O00.8 (Other Ectopic Pregnancy - Cervical / Scar)",
    "indications": [
      "Hemodynamically stable cervical pregnancy or Cesarean scar pregnancy (CSP) with high risk of uterine rupture and torrential hemorrhage during evacuation",
      "Failure of systemic intramuscular Methotrexate therapy with persistent gestational cardiac activity or rising beta-hCG",
      "Fertility-sparing management to achieve avascular necrosis prior to ultrasound-guided hysteroscopic or suction curettage"
    ],
    "preOpCriteria": [
      "Transvaginal Ultrasound (TVS) and Pelvic MRI defining gestational sac location, myometrial thinning (<2 mm), and bladder wall interface",
      "Baseline serum beta-hCG, Liver Function Tests, Renal Profile, Complete Blood Count",
      "Informed consent regarding chemotherapy administration and transient ovarian effects"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Roberts Uterine Catheter (RUC) / Cobra C2",
        "spec": "65 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.4F - 2.8F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014\" hydrophilic wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Chemotherapy Agent",
        "name": "Inj Methotrexate (MTX)",
        "spec": "50 mg - 100 mg lyophilized vial",
        "standardStore": "Oncology Pharmacy"
      },
      {
        "category": "Temporary Embolic",
        "name": "Gelfoam Absorbable Gelatin Sponge",
        "spec": "Torpedos / Slurry mixed with dilute contrast",
        "standardStore": "Central IR Store"
      }
    ],
    "techniqueSteps": [
      "Retrograde right common femoral artery puncture under ultrasound; 5F sheath insertion.",
      "Selective catheterization of the contralateral internal iliac artery and anterior division using 5F Roberts Uterine Catheter.",
      "Superselective microcatheterization of the cervicovaginal or ascending uterine artery supplying the ectopic gestational sac.",
      "High-resolution DSA demonstrating hypervascular trophoblastic blush at the lower uterine segment or cervix.",
      "Infuse 25 mg - 50 mg of Methotrexate dissolved in saline directly into the target feeding uterine branch.",
      "Immediately follow with Gelfoam slurry or micro-pledget embolization to occlude flow and trap the high-concentration chemotherapeutic agent within the gestational trophoblastic bed.",
      "Cross over or use Waltman loop to perform identical intra-arterial MTX infusion (25-50 mg) and Gelfoam embolization of the contralateral uterine artery.",
      "Verify near-complete stasis on completion pelvic angiogram; transfer for elective D&C / hysteroscopy after 24-48 hours once beta-hCG drops and devascularization is established."
    ],
    "complications": [
      "Delayed uterine rupture / perforation requiring emergent laparotomy",
      "Systemic methotrexate toxicities (stomatitis, elevated transaminases, myelosuppression)",
      "Severe vaginal bleeding during subsequent surgical evacuation",
      "Post-embolization pain and fever"
    ],
    "maayTariffInr": 46000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 11223)",
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "SMS Oncology Central Pharmacy (+91 98299 11002)"
    ]
  },
  {
    "id": "pae-bph-microspheres",
    "name": "Prostatic Artery Embolization (PAE) for Symptomatic BPH using 300-500 um Microspheres",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-PAE027",
    "rghsCode": "693 / 42",
    "icd10": "N40.1 (Benign Prostatic Hyperplasia with Lower Urinary Tract Symptoms) / R33.8",
    "indications": [
      "Moderate-to-severe lower urinary tract symptoms (LUTS) secondary to BPH (IPSS > 18, QoL score >= 3, Qmax < 12 mL/s)",
      "Prostate gland enlargement > 40-50 cc (particularly beneficial in large glands > 80-100 cc where TURP has high morbidity)",
      "Refractory urinary retention with catheter dependence, or patients unfit / unwilling for transurethral resection (TURP) / enucleation (HoLEP)"
    ],
    "preOpCriteria": [
      "Multi-parametric Prostate MRI (mpMRI) calculating prostate volume, median lobe protrusion, and ruling out prostate cancer (PIRADS <= 2)",
      "Pre-procedure pelvic CTA with thin-slice arterial reconstruction (essential to map tortuous prostatic artery origins: internal pudendal, obturator, or gluteal)",
      "Baseline IPSS score, IIEF-5 score, uroflowmetry (Qmax), post-void residual volume (PVR), PSA level, and Serum Creatinine"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "4F - 5F Glidesheath Slender / Radiofocus Sheath",
        "spec": "11 cm length (femoral or transradial)",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "4F - 5F Roberts Uterine Catheter / Cobra C2 / MPA",
        "spec": "65-100 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "1.9F - 2.0F Asahi Corsair / Merit Maestro / Terumo Progreat Microcatheter",
        "spec": "130-150 cm length with 0.014\" steerable hydrophilic microwire (Chikai / Fielder)",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Calibrated Microspheres",
        "name": "Embozene / Embosphere Microspheres",
        "spec": "300-500 um calibrated particles (yellow/orange code)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Vasodilator Drug",
        "name": "Inj Nitroglycerin (NTG) / Papaverine",
        "spec": "100-200 mcg intra-arterial doses",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Retrograde right common femoral artery or left transradial artery access; insertion of 5F hydrophilic sheath.",
      "Crossover into contralateral internal iliac artery; perform 3D Cone Beam CT (CBCT) with non-ionic contrast injection in shallow ipsilateral oblique (30-35 deg) with caudal angulation (10 deg).",
      "Identify the origin of the prostatic artery (PA): type I (anterior division), type II (superior vesical), type III (obturator), or type IV (internal pudendal).",
      "Superselective cannulation of the 1-1.5 mm prostatic artery using a 1.9F/2.0F microcatheter over a 0.014\" microwire under roadmap guidance.",
      "Administer 100-200 mcg intra-arterial Nitroglycerin to relieve vasospasm and dilate capsular vessels.",
      "Rigorous verification of non-target branches: check for rectosigmoid, penile (dorsal/internal pudendal), and bladder (vesical) collateral escape.",
      "Slow, incremental infusion of 300-500 um calibrated microspheres under real-time subtraction until complete glandular parenchymal saturation and column stasis (\"PErFecTED technique\").",
      "Repeat superselective catheterization and embolization of the ipsilateral prostatic artery (bilateral PAE is critical for sustained clinical IPSS reduction).",
      "Post-procedure DSA verifying complete bilateral glandular devascularization and preserved rectal/penile inflow; access site closure."
    ],
    "complications": [
      "Non-target embolization causing ischemic rectal ulceration or ischemic cystitis / bladder wall necrosis",
      "Transient dysuria, hematuria, or perineal discomfort (post-PAE syndrome in 10-20%)",
      "Transient acute urinary retention requiring catheter placement for 3-7 days",
      "Balanitis or penile skin ischemic breakdown (if internal pudendal collateral reflux)"
    ],
    "maayTariffInr": 52000,
    "vendorContacts": [
      "Merit Medical Systems (+91 98292 33445)",
      "Asahi Intecc India (+91 98294 66778)",
      "Boston Scientific India (+91 98100 44556)"
    ]
  },
  {
    "id": "pae-prostate-cancer-hematuria",
    "name": "Prostatic Artery Embolization for Intractable Hematuria Secondary to Advanced Prostate Carcinoma",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-PAE028",
    "rghsCode": "693 / 43",
    "icd10": "C61 (Malignant Neoplasm of Prostate) / R31.0 (Gross Hematuria)",
    "indications": [
      "Life-threatening or persistent gross hematuria secondary to locally advanced, castrate-resistant prostate cancer (CRPC) invading the bladder base/urethra",
      "Failure of palliative radiotherapy, transurethral fulguration, and bladder irrigation",
      "Severe transfusion dependency in palliative oncology patients unfit for radical surgery"
    ],
    "preOpCriteria": [
      "Pelvic Contrast CT / MRI demonstrating advanced prostate tumor margins and bladder floor infiltration",
      "Urinary continuous 3-way catheter irrigation with normal saline to clear intravesical clot burden",
      "Optimization of coagulation profile (INR < 1.6, Platelets > 50,000/uL)"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Roberts Uterine Catheter / Cobra C2",
        "spec": "65-80 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat / Maestro Microcatheter",
        "spec": "130 cm length with 0.014\" steerable wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Particles",
        "name": "Embosphere / PVA Particles",
        "spec": "300-500 um and 500-700 um calibrated particles",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcoils",
        "name": "0.014\" - 0.018\" Detachable Microcoils",
        "spec": "2-4 mm diameter (for high-flow tumor shunts)",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Right common femoral artery access under ultrasound; 5F sheath placement.",
      "Selective pelvic angiogram to delineate pathological tumor hypervascularity, disorganized neoplastic vessels, and prostatic feeders.",
      "Superselective cannulation of the tumor-feeding prostatic arteries and accessory branches using 2.0F microcatheter.",
      "Roadmap verification to prevent non-target reflux into the middle rectal or obturator branches.",
      "Infuse 300-500 um calibrated particles until hypervascular tumor blush is eradicated.",
      "Deploy 0.018\" microcoils if dominant tumor-arteriovenous fistulas or pseudoaneurysms are demonstrated.",
      "Embolize contralateral prostatic feeders to secure durable long-term hemostasis.",
      "Final DSA confirming cessation of tumor blush and intact internal pudendal / rectal flow.",
      "Sheath removal and groin compression."
    ],
    "complications": [
      "Non-target rectal or bladder mucosal ischemia",
      "Post-embolization perineal pain and pelvic spasm",
      "Transient acute urinary retention from clot accumulation",
      "Puncture site hematoma"
    ],
    "maayTariffInr": 48000,
    "vendorContacts": [
      "Merit Medical Systems (+91 98292 33445)",
      "Cook Medical India (+91 98290 11223)",
      "Terumo India Pvt Ltd (+91 98291 55678)"
    ]
  },
  {
    "id": "gae-knee-osteoarthritis-pain",
    "name": "Genicular Artery Embolization (GAE) for Refractory Knee Osteoarthritis Pain",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-GAE029",
    "rghsCode": "693 / 44",
    "icd10": "M17.11 (Primary Unilateral Knee Osteoarthritis) / M25.561 (Pain in Right Knee)",
    "indications": [
      "Moderate-to-severe pain from Kellgren-Lawrence (KL) Grade 2-3 knee osteoarthritis refractory to conservative therapy (NSAIDs, physiotherapy, intra-articular steroid / hyaluronic acid injections)",
      "Mild-to-moderate knee OA in patients ineligible for or wishing to delay Total Knee Arthroplasty (TKA)",
      "Persistent moderate-to-severe knee pain with localized tenderness over medial or lateral joint lines"
    ],
    "preOpCriteria": [
      "Weight-bearing Knee Radiographs (KL grading) and Knee Contrast MRI demonstrating localized synovitis / joint effusion without osteonecrosis",
      "Baseline WOMAC (Western Ontario and McMaster Universities Osteoarthritis Index) and Visual Analog Scale (VAS) pain scoring",
      "Coagulation profile, Renal parameters within acceptable limits"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "4F - 5F Glidesheath Slender / Radiofocus Sheath",
        "spec": "11 cm length (antegrade ipsilateral or retrograde contralateral)",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "4F - 5F Vertebral / Berenstein / Cobra Catheter",
        "spec": "65-100 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "1.7F - 2.0F Asahi Corsair / Terumo Progreat Microcatheter",
        "spec": "130-150 cm length with 0.014\" soft microwire (Chikai 0.014\")",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Agent",
        "name": "Embozene / Hydropearl / Imipenem-Cilastatin Microspheres",
        "spec": "100-300 um calibrated particles (e.g. 100-250 um)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Vasodilator",
        "name": "Inj Nitroglycerin",
        "spec": "50-100 mcg intra-arterial aliquots",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Antegrade ipsilateral superficial femoral artery puncture under ultrasound (or contralateral crossover approach) with 4F/5F slender sheath.",
      "Popliteal and genicular artery angiography in AP and oblique views: identify the descending genicular artery (DGA), superior medial genicular (SMGA), inferior medial genicular (IMGA), superior lateral genicular (SLGA), and inferior lateral genicular (ILGA).",
      "Correlate clinical point of maximum tenderness (e.g., medial joint line) with angiographic hypervascular \"tumor-like\" synovial capillary blush (\"hyperemic blush\").",
      "Superselective cannulation of the branch supplying the inflamed synovium using a 1.7F-2.0F microcatheter over a 0.014\" wire.",
      "Confirm tip position distal to cutaneous and muscular branches (to prevent skin ischemia / cutaneous paresthesia).",
      "Administer 50-100 mcg Nitroglycerin intra-arterially to reverse vasospasm.",
      "Slow, controlled infusion of 100-300 um calibrated microspheres (or 0.5-1.0 mL of emulsified Imipenem/Cilastatin) until the hyperemic capillary blush disappears while parent genicular trunk flow is maintained.",
      "Repeat superselective embolization for secondary genicular branches (e.g., IMGA / DGA) matching symptomatic pain zones.",
      "Post-embolization popliteal DSA confirming resolution of synovial hyperemia and patent popliteal/tibial runoff.",
      "Manual compression hemostasis; early mobilization within 2 hours."
    ],
    "complications": [
      "Transient cutaneous erythema / mild skin discoloration over knee (resolves in 1-3 weeks)",
      "Subcutaneous paresthesia / local numbness",
      "Target vessel spasm during microcatheter manipulation",
      "Access site hematoma"
    ],
    "maayTariffInr": 44000,
    "vendorContacts": [
      "Merit Medical Systems (+91 98292 33445)",
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Boston Scientific India (+91 98100 44556)"
    ]
  },
  {
    "id": "frozen-shoulder-embolization",
    "name": "Adhesive Capsulitis (Frozen Shoulder): Lateral Thoracic / Circumflex Humeral Artery Micro-Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-ADH030",
    "rghsCode": "693 / 45",
    "icd10": "M75.0 (Adhesive Capsulitis of Shoulder) / M25.511 (Pain in Right Shoulder)",
    "indications": [
      "Refractory adhesive capsulitis in the freezing/frozen stage (>3 months duration) with severe night pain and restricted range of motion",
      "Failure of conservative treatment (intra-articular corticosteroids, physical therapy, hydrodilatation)",
      "Persistent neovascularization and hypervascular synovial proliferation identified around the rotator interval and joint capsule"
    ],
    "preOpCriteria": [
      "Shoulder Contrast MRI confirming joint capsule thickening (>4 mm), coracohumeral ligament thickening, and rotator interval hypervascular synovitis",
      "Pre-procedure Shoulder Pain and Disability Index (SPADI) and VAS scoring",
      "Standard pre-interventional laboratory workup"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "4F - 5F Radial / Femoral Introducer Sheath",
        "spec": "11 cm length (ipsilateral transradial preferred)",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "4F - 5F Multipurpose / Judkins Right (JR4) Catheter",
        "spec": "100 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "1.7F - 2.0F Asahi Corsair / Progreat Microcatheter",
        "spec": "130-150 cm length with 0.014\" hydrophilic wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Agent",
        "name": "Calibrated Microspheres / Imipenem-Cilastatin",
        "spec": "100-300 um microspheres or suspended antibiotic particles",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Vasodilator",
        "name": "Inj Nitroglycerin",
        "spec": "100 mcg aliquots",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Ipsilateral radial artery (preferred) or right common femoral artery puncture under ultrasound; 4F/5F sheath insertion.",
      "Selective cannulation of the ipsilateral subclavian and axillary artery using 4F JR4 or MPA catheter.",
      "Digital subtraction angiography of the axillary artery in neutral and externally rotated shoulder views.",
      "Identify pathological hypervascular neovascular blush around the glenohumeral joint capsule fed by branches of: anterior/posterior circumflex humeral, thoracoacromial, suprascapular, or lateral thoracic arteries.",
      "Superselective cannulation of the hypervascular capsular branch using a 1.9F microcatheter over a 0.014\" wire.",
      "Verify catheter tip position distal to cutaneous and deltoid muscular branches.",
      "Infuse small aliquots of 100-300 um microspheres or Imipenem/Cilastatin suspension under real-time fluoroscopy until neovascular blush clears completely.",
      "Completion angiography confirming preservation of the main circumflex humeral trunks and axillary artery flow.",
      "Patent hemostasis band (TR band) applied to radial artery; immediate post-procedure physiotherapy guidance."
    ],
    "complications": [
      "Transient cutaneous erythema or mild shoulder aching",
      "Radial artery spasm or temporary occlusion",
      "Non-target muscle embolization",
      "Puncture site bruising"
    ],
    "maayTariffInr": 43000,
    "vendorContacts": [
      "Asahi Intecc India (+91 98294 66778)",
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Merit Medical Systems (+91 98292 33445)"
    ]
  },
  {
    "id": "lateral-epicondylitis-radial-recurrent-embolization",
    "name": "Refractory Lateral Epicondylitis (Tennis Elbow): Radial Recurrent Artery Branch Micro-Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-TEN031",
    "rghsCode": "693 / 46",
    "icd10": "M77.10 (Lateral Epicondylitis, Unspecified Elbow) / M25.531 (Pain in Right Elbow)",
    "indications": [
      "Chronic, debilitating lateral epicondylitis (>6 months) refractory to eccentric exercises, bracing, PRP, and steroid injections",
      "Severe tenderness at the common extensor origin (extensor carpi radialis brevis - ECRB)",
      "Demonstrated angiofibroblastic hyperplasia and neovascularization on Doppler ultrasound"
    ],
    "preOpCriteria": [
      "High-resolution MSK Ultrasound showing tendon thickening, hypoechoic tears, and hypervascular Power Doppler signal at the ECRB origin",
      "Elbow MRI to exclude osteochondritis dissecans or ligamentous instability",
      "Baseline Patient-Rated Tennis Elbow Evaluation (PRTEE) and VAS scores"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "4F Glidesheath Slender / Radiofocus Sheath",
        "spec": "11 cm length (brachial or retrograde femoral)",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "4F Multipurpose (MPA) / Berenstein Catheter",
        "spec": "65-100 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "1.7F - 1.9F Asahi Corsair / Carnelian Microcatheter",
        "spec": "130 cm length with 0.010\" - 0.014\" soft steerable microwire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Agent",
        "name": "Calibrated Microspheres / Imipenem-Cilastatin",
        "spec": "100-250 um microspheres or dilute antibiotic emulsion",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Vasodilator",
        "name": "Inj Nitroglycerin",
        "spec": "50-100 mcg intra-arterial aliquots",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Ipsilateral retrograde distal radial, retrograde brachial, or transfemoral access under ultrasound; 4F slender sheath placement.",
      "Brachial and proximal radial/interosseous arteriography to delineate the radial recurrent artery and interosseous recurrent branches.",
      "Identify the abnormal hyperemic capillary arborization matching the lateral epicondyle / ECRB insertion site.",
      "Superselective cannulation of the radial recurrent branch using a 1.7F microcatheter.",
      "Perform micro-DSA to confirm lack of flow into deep muscular arcade of the forearm.",
      "Administer 50 mcg Nitroglycerin to prevent mechanical vasospasm.",
      "Slowly infuse small volumes of 100-250 um calibrated microspheres or Imipenem/Cilastatin until the pathological neovascular blush is eliminated.",
      "Post-embolization angiography confirming eradication of the neovascular stain with brisk flow in the main radial and recurrent arteries.",
      "Hemostatic compression of the access vessel."
    ],
    "complications": [
      "Transient numbness or tingling over lateral epicondyle",
      "Local skin blanching or transient petechiae",
      "Radial/brachial artery vasospasm",
      "Access site ecchymosis"
    ],
    "maayTariffInr": 41000,
    "vendorContacts": [
      "Asahi Intecc India (+91 98294 66778)",
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Merit Medical Systems (+91 98292 33445)"
    ]
  },
  {
    "id": "plantar-fasciitis-medial-plantar-embolization",
    "name": "Plantar Fasciitis: Medial Plantar Artery Hypervascular Branch Micro-Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-PLN032",
    "rghsCode": "693 / 47",
    "icd10": "M72.2 (Plantar Fascial Fibromatosis / Plantar Fasciitis) / M79.671 (Pain in Right Foot)",
    "indications": [
      "Chronic recalcitrant plantar fasciitis (>6-12 months) with severe heel pain upon first morning steps",
      "Failure of plantar orthotics, physical therapy, extracorporeal shockwave therapy (ESWT), and corticosteroid injections",
      "Power Doppler ultrasound demonstration of neovascularization at the calcaneal insertion of the plantar fascia"
    ],
    "preOpCriteria": [
      "Foot Ultrasound / MRI documenting plantar fascia thickness > 4.5 mm and hypervascularity at medial calcaneal tubercle",
      "Visual Analog Scale (VAS) pain score >= 6 and Foot and Ankle Ability Measure (FAAM) baseline",
      "Standard baseline coagulogram and renal function"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "4F Glidesheath Slender Introducer Sheath",
        "spec": "11 cm length (antegrade ipsilateral CFA or contralateral)",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "4F Multipurpose / Vertebral Catheter",
        "spec": "65-100 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "1.7F - 2.0F Asahi Corsair / Carnelian Microcatheter",
        "spec": "130-150 cm length with 0.014\" soft steerable wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Agent",
        "name": "Calibrated Microspheres / Imipenem-Cilastatin",
        "spec": "100-250 um calibrated microspheres",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Vasodilator",
        "name": "Inj Nitroglycerin",
        "spec": "50-100 mcg aliquots",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Antegrade ipsilateral common femoral artery puncture or contralateral crossover access; 4F sheath placement.",
      "Selective catheterization of the posterior tibial artery using a 4F catheter; obtain foot arteriography in lateral and oblique projections.",
      "Identify the bifurcation of posterior tibial artery into medial and lateral plantar arteries, and detect pathological capillary blush over the medial calcaneal tuberosity.",
      "Superselective microcatheterization of the calcaneal branch of the medial or lateral plantar artery using a 1.7F microcatheter.",
      "Roadmap confirmation ensuring the microcatheter tip is well distal to the weight-bearing digital plantar arteries.",
      "Slow, incremental infusion of 100-250 um calibrated microspheres or Imipenem/Cilastatin particles until the neovascular tangle resolves.",
      "Completion angiography verifying complete devascularization of the calcaneal inflammatory nidus with preserved plantar arch and digital perfusion.",
      "Sheath removal and manual hemostasis; allow immediate full weight-bearing."
    ],
    "complications": [
      "Transient plantar dysesthesia or sole numbness (resolves in 1-2 weeks)",
      "Subcutaneous ecchymosis over medial heel",
      "Accidental non-target embolization of digital arteries (prevented by strict micro-roadmap)",
      "Groin puncture site hematoma"
    ],
    "maayTariffInr": 41500,
    "vendorContacts": [
      "Asahi Intecc India (+91 98294 66778)",
      "Merit Medical Systems (+91 98292 33445)",
      "Terumo India Pvt Ltd (+91 98291 55678)"
    ]
  },
  {
    "id": "varicocele-embolization-coils-foam",
    "name": "Varicocele Embolization: Retrograde Spermatic Vein Embolization with Coils & STS 3% Foam",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-VAR033",
    "rghsCode": "693 / 48",
    "icd10": "I86.1 (Scrotal Varices / Varicocele) / N46.1 (Male Infertility)",
    "indications": [
      "Symptomatic Grade II or III clinical varicocele causing persistent dull scrotal ache or heavy sensation",
      "Male subfertility with abnormal semen analysis parameters (oligozoospermia, asthenozoospermia, teratozoospermia) in presence of palpable varicocele",
      "Recurrent or persistent varicocele post-surgical ligation (Palomo, Ivanissevich, or subinguinal microsurgery)"
    ],
    "preOpCriteria": [
      "Scrotal Color Doppler Ultrasound with Valsalva maneuver documenting retrograde venous reflux > 2 seconds and pampiniform venous diameter > 3 mm",
      "Semen analysis (minimum 2 samples performed 1 month apart)",
      "Standard coagulation screen (INR < 1.5, Platelets > 50,000/uL)"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F / 6F Radiofocus Introducer Sheath",
        "spec": "11 cm length (right internal jugular, basilica, or common femoral)",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Cobra C2 / Simmons-1 / MPA / Multipurpose Catheter",
        "spec": "65-100 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.4F - 2.8F Progreat Microcatheter",
        "spec": "130 cm length with 0.014\" - 0.018\" wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Embolic Coils",
        "name": "0.035\" and 0.018\" Fibered Platinum / Stainless Steel Coils",
        "spec": "4 mm to 12 mm diameter",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Sclerosant Agent",
        "name": "Sodium Tetradecyl Sulfate (STS) 3% (Setrol)",
        "spec": "Mixed with air/contrast in 1:4 Tessari technique for sclerosing foam",
        "standardStore": "SMS Pharmacy DDC-14"
      }
    ],
    "techniqueSteps": [
      "Right internal jugular vein (preferred for direct downward trajectory) or right common femoral vein access under ultrasound; 5F sheath placement.",
      "Selective cannulation of the left renal vein and left internal spermatic vein (ISV) orifice using a 5F Cobra or Simmons catheter.",
      "Perform retrograde venography with patient performing Valsalva maneuver to grade incompetent valvular reflux and map collaterals (retroperitoneal, colonic, cross-pelvic).",
      "Advance catheter deep into the distal ISV to the level of the internal inguinal ring / superior pubic ramus.",
      "Deploy 0.035\" or 0.018\" fibered coils at the distal spermatic vein just above the inguinal ligament (\"distal coil nest\").",
      "Inject 2-4 mL of STS 3% sclerosant foam (Tessari method: 1 mL STS 3% + 1 mL contrast + 2 mL air) into the mid-segment of the vein while manual compression is applied over the external ring to prevent pampiniform thrombophlebitis.",
      "Deploy proximal fibered coils within 2-3 cm of the ISV junction with the left renal vein (\"proximal coil nest\") creating a secure sandwich.",
      "Perform completion venogram to verify complete occlusion of the main spermatic vein and all parallel bypass collateral channels; sheath removal."
    ],
    "complications": [
      "Pampiniform plexus thrombophlebitis / scrotal swelling and tenderness (1-3%)",
      "Coil migration into the renal vein or pulmonary arterial circulation (<0.5%)",
      "Retroperitoneal vein perforation or extravasation",
      "Varicocele recurrence via parallel collateral channels"
    ],
    "maayTariffInr": 44000,
    "vendorContacts": [
      "Cook Medical India (+91 98290 11223)",
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Samarth Pharma India (+91 98292 77665)"
    ]
  },
  {
    "id": "high-flow-priapism-embolization",
    "name": "High-Flow Priapism (Arterial Priapism): Superselective Pudendal / Cavernosal Artery Microcoil / Autologous Clot Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-PRI034",
    "rghsCode": "693 / 49",
    "icd10": "N48.32 (Non-ischemic Priapism / High-flow Priapism)",
    "indications": [
      "Persistent non-ischemic, painless high-flow priapism secondary to blunt perineal/straddle trauma lacerating the cavernosal artery",
      "Color Doppler demonstration of high-flow arterio-lacunar fistula with turbulent flow within corpus cavernosum (normal blood gases: pO2 > 90 mmHg, pH > 7.4)",
      "Failure of conservative perineal ice compression or refractory to intracavernosal aspiration"
    ],
    "preOpCriteria": [
      "Penile duplex ultrasound demonstrating arterio-lacunar fistula and measuring peak systolic velocities (>50 cm/s)",
      "Cavernosal blood gas analysis confirming non-ischemic bright red blood (excluding low-flow ischemic priapism)",
      "Coagulation profile and renal parameters within normal limits"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "4F - 5F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "4F - 5F Cobra C2 / Roberts Uterine / MPA Catheter",
        "spec": "65-80 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "1.9F - 2.0F Asahi Corsair / Terumo Progreat Microcatheter",
        "spec": "130 cm length with 0.014\" steerable wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Temporary Embolic",
        "name": "Autologous Blood Clot / Gelatin Sponge (Gelfoam)",
        "spec": "Freshly clotted blood or tiny 1 mm Gelfoam cubes (first-line to preserve long-term erectile potency)",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcoils",
        "name": "0.014\" Detachable Platinum Microcoils",
        "spec": "2 mm - 3 mm diameter (second-line for large chronic fistula)",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Retrograde right common femoral artery puncture under ultrasound; 4F/5F sheath placement.",
      "Selective cannulation of the internal iliac artery and anterior division using a 5F Cobra or Roberts catheter.",
      "Catheterize the internal pudendal artery and perform high-resolution DSA in 30-degree ipsilateral oblique projection with caudal angulation.",
      "Identify the arterio-lacunar fistula arising from the cavernosal artery with pooling of contrast directly into the sinusoidal space of the corpus cavernosum.",
      "Superselective cannulation of the cavernosal feeder using a 1.9F/2.0F microcatheter, placing the tip directly at the rupture point.",
      "First-line preferred embolic: slow injection of autologous clotted blood or small calibrated Gelfoam pledgets to achieve temporary occlusion and allow spontaneous vessel healing without permanent erectile impotence.",
      "If wide laceration or recurrence: deploy 1-2 small detachable 0.014\" soft microcoils strictly across the fistula orifice.",
      "Check completion angiogram confirming closure of the fistula and preserved contralateral internal pudendal / dorsal penile perfusion; manual hemostasis."
    ],
    "complications": [
      "Permanent erectile dysfunction (significantly minimized with superselective temporary autologous clot/Gelfoam technique)",
      "Non-target embolization to dorsal penile artery causing glans ischemia",
      "Penile gangrene / skin necrosis",
      "Fistula recurrence following autologous clot lysis (requires repeat coiling)"
    ],
    "maayTariffInr": 46000,
    "vendorContacts": [
      "Terumo India Pvt Ltd (+91 98291 55678)",
      "Cook Medical India (+91 98290 11223)",
      "Asahi Intecc India (+91 98294 66778)"
    ]
  },
  {
    "id": "radiation-cystitis-sva-embolization",
    "name": "Intractable Hematuria from Radiation Cystitis: Bilateral Superior Vesical Artery Superselective Embolization",
    "category": "Arterial Embolization & Pelvic Interventions",
    "code": "2849-CYT035",
    "rghsCode": "693 / 50",
    "icd10": "N30.41 (Radiation Cystitis with Hematuria) / R31.0 (Gross Hematuria)",
    "indications": [
      "Severe, life-threatening gross hematuria secondary to radiation cystitis (post-pelvic radiotherapy for cervical, prostate, rectal, or bladder cancer)",
      "Failure of conservative measures (continuous bladder irrigation, intravesical alum / formalin instillation, hyperbaric oxygen therapy)",
      "Transfusion-dependent bleeding in patients unsuitable for emergency cystectomy and urinary diversion"
    ],
    "preOpCriteria": [
      "Cystoscopy confirming diffuse telangiectatic mucosal bleeding with mucosal ulceration and excluding focal bladder tumor recurrence",
      "Correction of severe anemia (Hb > 8 g/dL) and coagulopathy (INR < 1.6, Platelets > 50,000/uL)",
      "Baseline Renal function profile (Serum Creatinine, eGFR)"
    ],
    "hardware": [
      {
        "category": "Vascular Access",
        "name": "5F Radiofocus Introducer Sheath",
        "spec": "11 cm length",
        "standardStore": "Angio Suite Store"
      },
      {
        "category": "Diagnostic Catheter",
        "name": "5F Roberts Uterine Catheter / Cobra C2 Catheter",
        "spec": "65-80 cm length",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcatheter",
        "name": "2.0F - 2.4F Progreat / Merit Maestro Microcatheter",
        "spec": "130 cm length with 0.014\" steerable wire",
        "standardStore": "DDC-14 Central"
      },
      {
        "category": "Particulate Embolic",
        "name": "PVA Particles / Embosphere Microspheres",
        "spec": "300-500 um or 500-700 um calibrated particles",
        "standardStore": "Central IR Store"
      },
      {
        "category": "Microcoils",
        "name": "0.014\" - 0.018\" Soft Fibered Detachable Microcoils",
        "spec": "2 mm - 4 mm diameter",
        "standardStore": "Angio Suite Store"
      }
    ],
    "techniqueSteps": [
      "Ultrasound-guided retrograde right common femoral artery puncture; 5F sheath placement.",
      "Selective cannulation of the contralateral internal iliac artery anterior division using a 5F Roberts Uterine Catheter or Cobra catheter.",
      "Pelvic DSA in 25-30 degree ipsilateral oblique projection to identify the origin of the superior vesical artery (SVA) from the umbilical artery trunk.",
      "Superselective cannulation of the SVA using a 2.0F/2.4F microcatheter over a 0.014\" wire.",
      "Angiography demonstrating diffuse mucosal hypervascularity, corkscrew telangiectatic vessels, and persistent capillary stain over the bladder dome/walls.",
      "Slow injection of 300-500 um or 500-700 um calibrated particles mixed with contrast until total cessation of mucosal hypervascular blush.",
      "Deploy 1-2 small fibered microcoils at the proximal SVA if persistent high-pressure inflow is noted.",
      "Cross over or re-engage to perform identical superselective embolization of the ipsilateral superior vesical artery (bilateral SVA embolization is essential).",
      "Final completion pelvic DSA verifying eradication of bladder mucosal blush while preserving gluteal, obturator, and internal pudendal branches.",
      "Femoral compression hemostasis; continuous Foley catheter monitoring until clear urine output is observed."
    ],
    "complications": [
      "Bladder wall ischemic necrosis or perforation (rare with superselective microcatheter technique)",
      "Transient pelvic pain, vesical tenesmus, and bladder spasms",
      "Non-target embolization to prostate, uterus, or rectum",
      "Puncture site hematoma or pseudoaneurysm"
    ],
    "maayTariffInr": 47500,
    "vendorContacts": [
      "Merit Medical Systems (+91 98292 33445)",
      "Cook Medical India (+91 98290 11223)",
      "Terumo India Pvt Ltd (+91 98291 55678)"
    ]
  }
];
