import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Award
} from 'lucide-react';

interface SimulationStep {
  question: string;
  options: {
    text: string;
    correct: boolean;
    feedback: string;
  }[];
}

interface CaseScenario {
  id: string;
  title: string;
  clinicalPresentation: string;
  imagingFindings: string;
  schemeCode: string;
  steps: SimulationStep[];
  clinicalPearl: string;
  guidelineCitation: string;
}

const ACADEMIC_CASES: CaseScenario[] = [
  {
    id: 'bae',
    title: 'Scenario A: Massive Hemoptysis & Spinal Artery (Adamkiewicz) Protection',
    clinicalPresentation:
      'A 36-year-old female with old pulmonary tuberculosis presents to SMS Emergency with acute massive hemoptysis (approx 400 mL within 6 hours). Blood Pressure 94/60 mmHg, Heart Rate 114 bpm, SpO2 91% on oxygen.',
    imagingFindings:
      'CT Thoracic Angiogram: Left upper lobe fibro-cavitary destruction and bronchiectasis. Hypertrophied left bronchial artery (caliber 3.2 mm) arising from T5 level and hypertrophied 4th/5th left intercostal arteries.',
    schemeCode: '2849-MC018A (Rs 30,000) / RGHS Code 693',
    steps: [
      {
        question: 'Step 1: Which diagnostic overview angiography is mandatory before selective bronchial cannulation?',
        options: [
          {
            text: 'Arch and descending thoracic aortography using a 5F Pigtail catheter positioned at T4-T6.',
            correct: true,
            feedback:
              '[RECOMMENDED - SIR GUIDELINES] An initial thoracic aortogram maps all orthotopic bronchial arterial origins and identifies non-bronchial systemic arterial collaterals (intercostal, internal mammary, inferior phrenic).'
          },
          {
            text: 'Immediate direct selective catheterization without an aortogram.',
            correct: false,
            feedback:
              '[INCOMPLETE] Omitting an aortogram risks missing aberrant bronchial origins or extensive non-bronchial systemic feeders that maintain persistent bleeding.'
          },
          {
            text: 'Pulmonary artery angiography via femoral vein.',
            correct: false,
            feedback:
              '[SUB-OPTIMAL] > 90% of massive hemoptysis originates from high-pressure systemic bronchial arteries, not low-pressure pulmonary arteries, unless Rasmussen aneurysm is suspected.'
          }
        ]
      },
      {
        question: 'Step 2: Selective angiogram of the right intercostobronchial trunk reveals a hairpin-loop arterial branch ascending towards the mid-thoracic spinal cord. What is your immediate procedural action?',
        options: [
          {
            text: 'Superselectively navigate a 2.7F/2.4F microcatheter DISTAL to the spinal feeder takeoff before particle injection.',
            correct: true,
            feedback:
              '[RECOMMENDED - CRITICAL SAFETY] The Anterior Spinal Artery (Artery of Adamkiewicz) must be strictly protected. Embolization must proceed only distal to its origin.'
          },
          {
            text: 'Embolize from the proximal main trunk with 350-500 um PVA particles.',
            correct: false,
            feedback:
              '[CRITICAL ERROR] Embolizing proximal to the hairpin spinal feeder occludes the Anterior Spinal Artery, causing spinal cord infarction and permanent paraplegia.'
          },
          {
            text: 'Inject 50% n-BCA glue rapidly to secure instant stasis.',
            correct: false,
            feedback:
              '[HAZARDOUS] Liquid tissue adhesives have high risk of spinal reflux, bronchial necrosis, and pulmonary infarction.'
          }
        ]
      }
    ],
    clinicalPearl:
      'Always use calibrated PVA particles (355-500 um or 500-710 um) suspended in contrast. Never use coils as primary embolic in the main bronchial trunk because proximal coiling precludes future repeat endovascular access when recurrent collaterals develop.',
    guidelineCitation:
      'CIRSE Standards of Practice on Bronchial Artery Embolization in Hemoptysis (CVIR 2022)'
  },
  {
    id: 'tace',
    title: 'Scenario B: Multifocal BCLC Stage B Hepatocellular Carcinoma (TACE Strategy)',
    clinicalPresentation:
      'A 62-year-old male with HCV-related cirrhosis presents for liver oncology evaluation. Child-Pugh Score 6 (Class A). Serum Bilirubin 1.3 mg/dL, Albumin 3.6 g/dL, INR 1.15, Platelets 125,000 /uL, ECOG Performance Status 0.',
    imagingFindings:
      'Triphasic CECT Liver: Multifocal HCC. 4.8 cm arterial hyperenhancing lesion in Segment VI with portal venous washout, and a secondary 2.3 cm hypervascular lesion in Segment VII. Main portal vein and lobar portal branches are widely patent.',
    schemeCode: '2849-IN061A (Conventional TACE) / 2849-IN061B (DEB-TACE)',
    steps: [
      {
        question: 'Step 1: How should this patient be categorized and what is the guideline-directed first-line therapy?',
        options: [
          {
            text: 'BCLC Stage B (Intermediate Stage); Transarterial Chemoembolization (cTACE or DEB-TACE) is the first-line standard of care.',
            correct: true,
            feedback:
              '[RECOMMENDED - EASL / AASLD GUIDELINES] Preserved hepatic function (Child-Pugh A), good performance status, and multinodular HCC without vascular invasion make this an ideal TACE candidate.'
          },
          {
            text: 'BCLC Stage C; Start immediate systemic immunotherapy (Atezolizumab + Bevacizumab).',
            correct: false,
            feedback:
              '[INCORRECT] Absence of portal vein tumor thrombosis and extrahepatic metastases classifies this as BCLC Stage B, where locoregional therapy provides proven median survival of > 26-30 months.'
          },
          {
            text: 'Emergency surgical right hepatectomy.',
            correct: false,
            feedback:
              '[HIGH RISK] Resection of multiple bilobar lesions in underlying cirrhosis carries significant risk of post-hepatectomy liver failure.'
          }
        ]
      },
      {
        question: 'Step 2: During selective catheterization, what technique optimizes tumor response while preserving non-tumorous liver parenchyma?',
        options: [
          {
            text: 'Superselective microcatheter cannulation of Segment VI and Segment VII subsegmental feeders to achieve complete tumor stasis while sparing lobar arterial flow.',
            correct: true,
            feedback:
              '[RECOMMENDED] Superselective / ultraselective TACE maximizes local drug concentration (Lipiodol + Doxorubicin) and avoids post-embolization ischemic injury to normal parenchyma.'
          },
          {
            text: 'Non-selective chemoembolic infusion from the Proper Hepatic Artery trunk.',
            correct: false,
            feedback:
              '[CONTRAINDICATED] Non-selective lobar embolization damages uninvolved liver tissue, worsens hepatic reserve, and increases risk of acute decompensation.'
          }
        ]
      }
    ],
    clinicalPearl:
      'Always calculate Cigarroa Maximum Allowable Contrast Dose (5 x Wt / Cr) before TACE. Ensure Lipiodol emulsion is prepared with 20 pumping strokes through a metal 3-way stopcock to create an optimal water-in-oil emulsion.',
    guidelineCitation:
      'EASL Clinical Practice Guidelines: Management of Hepatocellular Carcinoma (J Hepatol 2018)'
  },
  {
    id: 'dpds',
    title: 'Scenario C: Disconnected Pancreatic Duct Syndrome (DPDS Management)',
    clinicalPresentation:
      'A 42-year-old male with severe acute necrotizing pancreatitis 8 weeks ago presents with persistent recurrent abdominal fullness, early satiety, and a palpable left epigastric mass. Afebrile.',
    imagingFindings:
      'CECT & MRCP Abdomen: Complete ductal disruption at the pancreatic neck with viable, enhancing pancreatic body/tail. Large (11 x 8 cm) Walled-Off Pancreatic Necrosis (WON) in the lesser sac communicating with the upstream isolated pancreatic duct.',
    schemeCode: '1849-IN057A / RGHS Code 1660',
    steps: [
      {
        question: 'Step 1: What is the optimal primary drainage strategy to prevent chronic external pancreatic fistula?',
        options: [
          {
            text: 'EUS-guided Transmural Cystogastrostomy with indwelling double-pigtail stents or lumen-apposing metal stent (LAMS).',
            correct: true,
            feedback:
              '[RECOMMENDED] Internal transmural drainage diverts pancreatic secretions directly into the stomach, preventing chronic pancreaticocutaneous fistula.'
          },
          {
            text: 'Exclusive Percutaneous Catheter Drainage (PCD) without internal drainage.',
            correct: false,
            feedback:
              '[CAUTION] Pure external drainage of an isolated viable pancreatic tail leads to a high-output chronic pancreaticocutaneous fistula in > 80% of DPDS cases.'
          },
          {
            text: 'Immediate total pancreatectomy.',
            correct: false,
            feedback:
              '[CONTRAINDICATED] Unnecessary high surgical morbidity and permanent endocrine/exocrine insufficiency.'
          }
        ]
      },
      {
        question: 'Step 2: The patient has a secondary deep paracolic gutter extension not accessible via transgastric approach. How should Interventional Radiology collaborate?',
        options: [
          {
            text: 'Dual-modality drainage: Place CT-guided 12F-14F percutaneous catheter in the dependent paracolic gutter while maintaining the internal transmural cystogastrostomy.',
            correct: true,
            feedback:
              '[RECOMMENDED - DUAL MODALITY] Percutaneous drainage controls dependent sepsis in pelvic/paracolic gutters while the transmural cystogastrostomy provides the permanent internal duct drainage.'
          },
          {
            text: 'Inject cyanoacrylate tissue adhesive into the paracolic gutter collection.',
            correct: false,
            feedback:
              '[HAZARDOUS] High risk of non-target tissue necrosis and abscess formation.'
          }
        ]
      }
    ],
    clinicalPearl:
      'Rule of Thumb in DPDS: Never remove internal transmural plastic stents prematurely. Indwelling transmural double-pigtail stents must remain in-situ indefinitely to act as permanent internal drainage conduits for the disconnected viable pancreatic tail.',
    guidelineCitation:
      'International Consensus Guidelines on Disconnected Pancreatic Duct Syndrome (Gastrointest Endosc 2021)'
  }
];

export const CaseSimulatorPage: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentCase = ACADEMIC_CASES[activeCaseIndex];
  const currentStep = currentCase.steps[currentStepIndex];

  const handleSelectOption = (idx: number) => {
    if (selectedOptionIndex !== null) return; // Prevent changing choice
    setSelectedOptionIndex(idx);
    if (currentStep.options[idx].correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNextStep = () => {
    if (currentStepIndex + 1 < currentCase.steps.length) {
      setCurrentStepIndex((s) => s + 1);
      setSelectedOptionIndex(null);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestartCase = (caseIdx: number) => {
    setActiveCaseIndex(caseIdx);
    setCurrentStepIndex(0);
    setSelectedOptionIndex(null);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="space-y-5 pb-12 font-sans max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-crimson-500" />
            <span>Morning Academic Rounds & Interactive Case Simulator</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Step-by-step clinical decision trees • Evidence-based CIRSE/SIR guidelines • Resident academic scoring
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
          {ACADEMIC_CASES.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => handleRestartCase(idx)}
              className={`px-3 py-1.5 rounded-lg transition ${
                activeCaseIndex === idx
                  ? 'bg-crimson-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {cs.id.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Case Header Card */}
      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-800">
          <h2 className="text-sm font-bold text-slate-100">{currentCase.title}</h2>
          <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-slate-950 px-2.5 py-0.5 rounded-full border border-slate-800">
            {currentCase.schemeCode}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
            <span className="text-slate-400 font-bold block text-[11px]">Clinical Presentation:</span>
            <p className="text-slate-300 leading-relaxed">{currentCase.clinicalPresentation}</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
            <span className="text-slate-400 font-bold block text-[11px]">Diagnostic Imaging Findings:</span>
            <p className="text-slate-300 leading-relaxed">{currentCase.imagingFindings}</p>
          </div>
        </div>
      </div>

      {/* Active Step Question or Completed Summary */}
      {!isCompleted ? (
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
            <span className="font-bold text-slate-200 uppercase tracking-wider">
              Question {currentStepIndex + 1} of {currentCase.steps.length}
            </span>
            <span className="font-mono">Current Score: {score}</span>
          </div>

          <h3 className="text-sm font-bold text-slate-100 leading-relaxed">
            {currentStep.question}
          </h3>

          <div className="space-y-2.5 pt-1">
            {currentStep.options.map((opt, idx) => {
              const isSelected = selectedOptionIndex === idx;
              const hasAnswered = selectedOptionIndex !== null;

              return (
                <div key={idx} className="space-y-2">
                  <button
                    onClick={() => handleSelectOption(idx)}
                    disabled={hasAnswered}
                    className={`w-full text-left p-3 rounded-xl border text-xs leading-relaxed transition flex items-start justify-between gap-3 ${
                      hasAnswered
                        ? opt.correct
                          ? 'bg-emerald-950/60 border-emerald-700 text-emerald-200'
                          : isSelected
                          ? 'bg-red-950/60 border-red-700 text-red-200'
                          : 'bg-slate-950/40 border-slate-800 text-slate-500'
                        : 'bg-slate-950 hover:bg-slate-850 border-slate-800 text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <span>{opt.text}</span>
                    {hasAnswered && opt.correct && <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />}
                    {hasAnswered && isSelected && !opt.correct && <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />}
                  </button>

                  {/* Feedback on selection */}
                  {isSelected && (
                    <div
                      className={`p-3 rounded-xl text-xs leading-relaxed border ${
                        opt.correct
                          ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300'
                          : 'bg-red-950/40 border-red-800 text-red-300'
                      }`}
                    >
                      {opt.feedback}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {selectedOptionIndex !== null && (
            <div className="flex justify-end pt-3 border-t border-slate-800">
              <button
                onClick={handleNextStep}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-bold text-xs shadow-md shadow-crimson-900/30 transition"
              >
                <span>{currentStepIndex + 1 < currentCase.steps.length ? 'Next Step' : 'View Case Summary'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Case Completion Summary */
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-5 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-950 border border-emerald-800 text-emerald-400">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100">
                Academic Simulation Completed!
              </h3>
              <p className="text-xs text-slate-400">
                Final Score: <b className="text-emerald-400 font-mono">{score} / {currentCase.steps.length}</b> correct answers
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="font-bold text-slate-200 text-xs flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>SMS Interventional Radiology Clinical Pearl</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              {currentCase.clinicalPearl}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-slate-400 text-[11px] font-mono">
            Citation: <span className="text-slate-300">{currentCase.guidelineCitation}</span>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              onClick={() => handleRestartCase(activeCaseIndex)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry Case</span>
            </button>
            <button
              onClick={() => handleRestartCase((activeCaseIndex + 1) % ACADEMIC_CASES.length)}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-crimson-600 hover:bg-crimson-500 text-white font-bold text-xs transition shadow-sm"
            >
              <span>Next Scenario</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
