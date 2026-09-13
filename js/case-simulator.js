/**
 * SMS Jaipur - Interventional Radiology Morning Case Presentation & Interactive Simulator
 * Provides Step-by-Step Decision Trees & Academic Class Slides
 */

const IR_CASE_SIMULATOR = {
  // Case Database & Branching Steps
  cases: {
    dpds: {
      id: "dpds",
      title: "Disconnected Pancreatic Duct Syndrome (DPDS)",
      scenario: "A 42-year-old male with history of acute necrotizing pancreatitis 8 weeks ago presents with persistent left upper quadrant pain, early satiety, and a palpable non-tender epigastric mass. Serum amylase is mildly elevated.",
      imaging: "CECT Abdomen: 9 x 7 cm Walled-Off Necrosis (WON) in lesser sac/body region. Non-enhancing necrosed pancreatic neck. Viable, enhancing pancreatic tail with dilated upstream main pancreatic duct (MPD, 4.5 mm) abruptly terminating at the collection.\nMRCP: Discontinuity of MPD with upstream secretion draining into the WON.",
      steps: [
        {
          question: "Step 1: What is the optimal primary drainage strategy?",
          options: [
            { text: "EUS-guided Transmural Cystogastrostomy with Lumen-Apposing Metal Stent (LAMS) or indwelling double-pigtail stents", correct: true, feedback: "<strong>[RECOMMENDED]</strong> EUS transmural drainage creates permanent internal drainage into the stomach, preventing chronic external pancreatic fistulae." },
            { text: "Immediate Surgical Pancreaticoduodenectomy (Whipple's)", correct: false, feedback: "<strong>[CONTRAINDICATED]</strong> Unnecessary high morbidity in acute-on-chronic inflammatory setting." },
            { text: "Exclusive Percutaneous Catheter Drainage (PCD) without internal drainage plan", correct: false, feedback: "<strong>[CAUTION]</strong> Pure external drainage of an isolated viable pancreatic tail leads to a high-output chronic pancreaticocutaneous fistula in >80% of DPDS cases." }
          ]
        },
        {
          question: "Step 2: The patient has a secondary deep paracolic gutter extension not accessible via transgastric route. How should IR manage this?",
          options: [
            { text: "Place CT-guided 12F-14F locking pigtail drainage catheter in the paracolic gutter while maintaining transmural internal cystogastrostomy", correct: true, feedback: "<strong>[RECOMMENDED]</strong> Dual-modality drainage (percutaneous for dependent gutters + transmural for disconnected duct) provides rapid sepsis control while avoiding chronic external fistula." },
            { text: "Inject cyanoacrylate glue directly into the paracolic collection", correct: false, feedback: "<strong>[HAZARDOUS]</strong> High risk of non-target tissue necrosis and infection." }
          ]
        }
      ],
      schemeCode: "1849-IN057A / 1660 (RGHS)",
      pearl: "Rule of Thumb: In DPDS, never remove internal transgastric plastic stents prematurely. Indwelling internal transmural stents must remain permanently to prevent recurrent WON."
    },

    bae: {
      id: "bae",
      title: "Massive Hemoptysis - BAE Procedural Algorithm",
      scenario: "A 36-year-old female with old pulmonary tuberculosis presents to SMS Emergency with acute massive hemoptysis (~400 ml in last 6 hours). Hemodynamically borderline (BP 94/60 mmHg, HR 112/min).",
      imaging: "CT Angiography Thorax: Left upper lobe fibro-cavitary changes with bronchiectasis. Hypertrophied left bronchial artery (diameter 3.2 mm) and hypertrophied left 4th/5th intercostal arteries.",
      steps: [
        {
          question: "Step 1: Which diagnostic overview run is mandatory before selective catheterization?",
          options: [
            { text: "Arch and Descending Thoracic Aortogram using a 5F Pigtail Catheter", correct: true, feedback: "<strong>[RECOMMENDED]</strong> Maps all bronchial origins and identifies non-bronchial systemic collaterals (intercostals, subclavian, internal mammary)." },
            { text: "Direct selective cannulation without aortogram", correct: false, feedback: "<strong>[INCOMPLETE]</strong> Risk of missing anomalous bronchial origins or hypertrophied non-bronchial systemic arteries." }
          ]
        },
        {
          question: "Step 2: Selective angiogram of the right intercostobronchial trunk reveals a hairpin-loop arterial feeder supplying the mid-thoracic spinal cord. What is your action?",
          options: [
            { text: "Navigate a 2.7F/2.4F microcatheter superselectively DISTAL to the spinal feeder (Artery of Adamkiewicz) before PVA injection", correct: true, feedback: "<strong>[RECOMMENDED]</strong> Anterior Spinal Artery must be protected. Embolization must only occur distal to its takeoff." },
            { text: "Embolize from the main trunk with 350 um PVA particles", correct: false, feedback: "<strong>[CRITICAL ERROR]</strong> Will cause anterior spinal artery occlusion and permanent paraplegia (Brown-Séquard / spinal cord infarction)!" }
          ]
        }
      ],
      schemeCode: "2849-MC018A (Rs 30,000) / RGHS Code 693",
      pearl: "Never use liquid glue or absolute ethanol for standard BAE due to risk of bronchial wall necrosis and pulmonary infarction. Use calibrated PVA particles (350-500 um / 500-700 um)."
    },

    tace: {
      id: "tace",
      title: "Hepatocellular Carcinoma - TACE Strategy & BCLC Staging",
      scenario: "A 58-year-old male with HCV-related cirrhosis presents with a single 5.2 cm hypervascular SOL in Segment VI/VII. ECOG 0, Child-Pugh Class A (Score 5), Platelets 1.2 Lakh, INR 1.1, Total Bilirubin 1.2 mg/dL.",
      imaging: "Triphasic CT Abdomen: APHE (Arterial Phase Hyperenhancement) in Segment VI/VII with rapid washout in portal venous/delayed phases. Main Portal Vein is patent.",
      steps: [
        {
          question: "Step 1: How do you classify this case and determine initial IR management?",
          options: [
            { text: "BCLC Stage B (Intermediate) -> Conventional TACE (cTACE) or DEB-TACE", correct: true, feedback: "<strong>[RECOMMENDED]</strong> Preserved liver function (Child-Pugh A), patent portal vein, and unresectable tumor size >3cm makes TACE the first-line standard." },
            { text: "Systemic Sorafenib alone without loco-regional therapy", correct: false, feedback: "<strong>[UNDER-TREATMENT]</strong> Inappropriate for BCLC Stage B with preserved hepatic reserve." }
          ]
        },
        {
          question: "Step 2: During selective angiogram, the tumor feeder arises close to the Cystic Artery origin. How do you prevent ischemic cholecystitis?",
          options: [
            { text: "Coaxially advance a 2.7F microcatheter superselectively distal to the cystic artery takeoff into the tumor feeder (Segmental TACE)", correct: true, feedback: "<strong>[RECOMMENDED]</strong> Superselective microcatheter navigation avoids non-target chemoembolization into the cystic artery." },
            { text: "Inject chemoembolic mixture from proper hepatic artery", correct: false, feedback: "<strong>[INAPPROPRIATE]</strong> High risk of gallbladder necrosis / severe ischemic cholecystitis." }
          ]
        }
      ],
      schemeCode: "2849-IN061A (cTACE - Rs 47,960) / 2849-IN061B (DEB TACE)",
      pearl: "Doxorubicin dose is calibrated to bilirubin (50 mg for normal bilirubin; reduce by 50% if bilirubin 1.5-3.0 mg/dL). Always confirm main portal vein patency."
    },

    ptbd: {
      id: "ptbd",
      title: "Malignant Biliary Obstruction - PTBD & SEMS Stenting",
      scenario: "A 62-year-old female with inoperable Hilar Cholangiocarcinoma (Bismuth-Corlette Type IIIa) presents with deep jaundice (Total Bilirubin 18.4 mg/dL, Direct 14.2 mg/dL), severe pruritus, and failed ERCP cannulation.",
      imaging: "MRCP / CECT: Dilated Right Anterior, Right Posterior, and Left hepatic ducts with confluence stricture extending into Right hepatic duct.",
      steps: [
        {
          question: "Step 1: Which puncture route should be chosen first for decompression?",
          options: [
            { text: "Right mid-axillary intercostal approach targeting a peripheral Segment VI/VII duct under combined USG and Fluoroscopy", correct: true, feedback: "<strong>[RECOMMENDED]</strong> Peripheral duct puncture minimizes major vascular injury (portal vein/hepatic artery pseudoaneurysm) and avoids pneumothorax." },
            { text: "Central puncture near the porta hepatis", correct: false, feedback: "<strong>[HIGH RISK]</strong> Severe risk of catastrophic hemobilia from portal vein or hepatic artery puncture!" }
          ]
        },
        {
          question: "Step 2: Guidewire successfully navigates the stricture into the duodenum. For palliative care, what is the definitive drainage choice?",
          options: [
            { text: "Deploy an uncovered 10 mm x 80 mm Self-Expanding Metallic Stent (SEMS) across the stricture with internal-external safety drain", correct: true, feedback: "<strong>[RECOMMENDED]</strong> SEMS provides superior long-term patency and lowest occlusion rate compared to plastic stents in malignant obstructive jaundice." },
            { text: "Permanent external bag drainage only without stenting", correct: false, feedback: "<strong>[SUB-OPTIMAL]</strong> Causes chronic electrolyte loss, bile depletion, and poor quality of life." }
          ]
        }
      ],
      schemeCode: "1849-SG105 A (PTBD) + 2849-IN006A (SEMS - Rs 25,000 + Stent Rs 37,000)",
      pearl: "Always obtain a post-puncture cholangiogram road-map before wire manipulation. Puncture peripheral ducts, never central bifurcation."
    }
  },

  // Render Simulator UI
  renderSimulator: (containerId, caseKey = "dpds") => {
    const c = IR_CASE_SIMULATOR.cases[caseKey];
    const container = document.getElementById(containerId);
    if (!c || !container) return;

    let stepsHtml = c.steps.map((s, stepIdx) => `
      <div style="background: var(--bg-surface-raised); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 14px; margin-top: 10px;">
        <div style="font-weight: 700; font-size: 13px; color: var(--primary); margin-bottom: 8px;">${s.question}</div>
        <div style="display: flex; flex-direction: column; gap: 6px;">
          ${s.options.map((opt, optIdx) => `
            <button class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-size: 12px; line-height: 1.4;" onclick="IR_CASE_SIMULATOR.handleChoice('${caseKey}', ${stepIdx}, ${optIdx})">
              <strong style="margin-right: 6px; color: var(--text-primary);">${String.fromCharCode(65 + optIdx)}.</strong> ${opt.text}
            </button>
          `).join("")}
        </div>
        <div id="sim-feedback-${caseKey}-${stepIdx}" style="display: none; margin-top: 10px; padding: 10px 14px; border-radius: var(--radius-sm); font-size: 12px; line-height: 1.45;"></div>
      </div>
    `).join("");

    container.innerHTML = `
      <div class="case-card">
        <div class="case-card-header" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--border-subtle);">
          <div>
            <span class="status-badge badge-received" style="font-size: 11px;">Interactive Morning Case</span>
            <div class="case-card-title" style="margin-top: 6px; font-size: 18px; font-weight: 700; color: var(--text-primary);">${c.title}</div>
          </div>
          <button class="btn btn-sm btn-outline" onclick="IR_CASE_SIMULATOR.copySlideMarkdown('${caseKey}')">
            <svg class="icon icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            Copy Academic Slide
          </button>
        </div>

        <div class="case-card-section" style="margin-bottom: 14px;">
          <div class="case-card-section-title" style="font-size: 13px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">Clinical Scenario</div>
          <div style="font-size: 13px; line-height: 1.5; color: var(--text-secondary);">${c.scenario}</div>
        </div>

        <div class="case-card-section" style="margin-bottom: 14px;">
          <div class="case-card-section-title" style="font-size: 13px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">Diagnostic Imaging Findings</div>
          <div style="font-size: 13px; line-height: 1.5; color: var(--text-secondary); white-space: pre-line;">${c.imaging}</div>
        </div>

        <div class="case-card-section" style="margin-bottom: 14px;">
          <div class="case-card-section-title" style="font-size: 13px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">Interactive Decision-Tree Steps</div>
          ${stepsHtml}
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px;">
          <div class="case-card-section">
            <div class="case-card-section-title" style="font-size: 12px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">Scheme Package Code</div>
            <div style="font-size: 12px; font-weight: 700; color: var(--primary); padding: 8px 10px; background: var(--bg-surface-raised); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">${c.schemeCode}</div>
          </div>

          <div class="case-card-section">
            <div class="case-card-section-title" style="font-size: 12px; font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">Clinical Pearl</div>
            <div style="font-size: 12px; color: var(--success); padding: 8px 10px; background: var(--success-subtle); border: 1px solid var(--success-border); border-radius: var(--radius-sm); line-height: 1.4;">${c.pearl}</div>
          </div>
        </div>
      </div>
    `;
  },

  handleChoice: (caseKey, stepIdx, optIdx) => {
    const c = IR_CASE_SIMULATOR.cases[caseKey];
    const opt = c.steps[stepIdx].options[optIdx];
    const fb = document.getElementById(`sim-feedback-${caseKey}-${stepIdx}`);
    if (!fb) return;

    fb.style.display = "block";
    fb.innerHTML = opt.feedback;
    if (opt.correct) {
      fb.style.background = "var(--success-subtle)";
      fb.style.color = "var(--success)";
      fb.style.border = "1px solid var(--success-border)";
    } else {
      fb.style.background = "var(--danger-subtle)";
      fb.style.color = "var(--danger)";
      fb.style.border = "1px solid var(--danger-border)";
    }
  },

  copySlideMarkdown: (caseKey) => {
    const c = IR_CASE_SIMULATOR.cases[caseKey];
    if (!c) return;

    const md = `# ${c.title}\n**Department of Interventional Radiology, SMS Hospital Jaipur**\n\n## Clinical Scenario\n${c.scenario}\n\n## Imaging Findings\n${c.imaging}\n\n## Procedural Management Strategy\n${c.steps.map(s => `* **${s.question}**\n  - Recommended: ${s.options.find(o => o.correct).text}`).join("\n")}\n\n## Scheme & Package\n${c.schemeCode}\n\n## Clinical Pearl\n${c.pearl}`;

    navigator.clipboard.writeText(md).then(() => {
      if (typeof showToast === 'function') {
        showToast("Academic Slide Markdown copied to clipboard", "success");
      } else {
        alert("Academic Slide Markdown copied! You can paste this directly into PowerPoint or Markdown presentations.");
      }
    });
  }
};
