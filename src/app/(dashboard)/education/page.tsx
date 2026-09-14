'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Eye,
  EyeOff,
  Layers,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Sparkles,
  Search,
  BookOpen,
  Maximize2,
  FileText,
  ShieldCheck,
  Award,
  Check,
  Copy,
  AlertTriangle,
  Activity,
  Filter,
  ExternalLink,
  ShieldAlert,
  Calendar,
  Pill
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { CLINICAL_GUIDELINES, ClinicalGuidelineItem } from '../../../data/clinicalGuidelines';

export interface AnatomicalPin {
  id: string;
  name: string;
  x: number; // Percentage X (0-100)
  y: number; // Percentage Y (0-100)
  svgPath?: string;
  category: 'Artery' | 'Vein' | 'Duct' | 'Organ' | 'Lesion';
  clinicalPearl: string;
  variantNote?: string;
}

export interface ImagingStack {
  id: string;
  title: string;
  modality: 'Angiography (DSA)' | 'Triphasic CECT' | 'Biliary Cholangiogram';
  indication: string;
  slices: Array<{
    sliceNumber: number;
    sliceLabel: string;
    description: string;
    backgroundSvg: string;
    pins: AnatomicalPin[];
  }>;
}

const IMAGING_STACKS: ImagingStack[] = [
  {
    id: 'celiac-hepatic',
    title: 'Celiac Axis & Hepatic Artery Trifurcation',
    modality: 'Angiography (DSA)',
    indication: 'Pre-TACE Vascular Mapping for Hepatocellular Carcinoma (HCC)',
    slices: [
      {
        sliceNumber: 1,
        sliceLabel: 'Celiac Trunk Master Angiogram',
        description: 'Selective 5F Cobra catheter angiogram injected at the celiac axis takeoff.',
        backgroundSvg: 'celiac-main',
        pins: [
          {
            id: 'p1',
            name: 'Celiac Trunk',
            x: 48,
            y: 32,
            category: 'Artery',
            clinicalPearl: 'Arises at T12-L1 level anteriorly from the abdominal aorta. Normal diameter: 6-8mm.',
            variantNote: 'Celiacomesenteric trunk seen in ~1-2% of cases (common origin with SMA).'
          },
          {
            id: 'p2',
            name: 'Common Hepatic Artery (CHA)',
            x: 62,
            y: 42,
            category: 'Artery',
            clinicalPearl: 'Extends from celiac trunk to the origin of the gastroduodenal artery (GDA).',
            variantNote: 'Michels Type I standard anatomy occurs in ~55-60% of population.'
          },
          {
            id: 'p3',
            name: 'Splenic Artery',
            x: 32,
            y: 38,
            category: 'Artery',
            clinicalPearl: 'Tortuous course along upper border of pancreas. Most common visceral artery aneurysm site.',
            variantNote: 'Gives off dorsal pancreatic and short gastric arteries.'
          },
          {
            id: 'p4',
            name: 'Left Gastric Artery',
            x: 44,
            y: 20,
            category: 'Artery',
            clinicalPearl: 'Smallest branch of celiac trunk. Ascends towards gastroesophageal junction.',
            variantNote: 'Replaced left hepatic artery arises from LGA in ~10-15% (Michels Type II).'
          }
        ]
      },
      {
        sliceNumber: 2,
        sliceLabel: 'Proper Hepatic & Lobar Bifurcation',
        description: 'Microcatheter advanced into proper hepatic artery past GDA origin.',
        backgroundSvg: 'pha-lobar',
        pins: [
          {
            id: 'p5',
            name: 'Proper Hepatic Artery (PHA)',
            x: 68,
            y: 36,
            category: 'Artery',
            clinicalPearl: 'Runs within hepatoduodenal ligament medial to common bile duct and anterior to portal vein.',
            variantNote: 'Absence of CHA with separate origins of RHA and LHA occurs in Michels Type IV.'
          },
          {
            id: 'p6',
            name: 'Right Hepatic Artery (RHA)',
            x: 78,
            y: 28,
            category: 'Artery',
            clinicalPearl: 'Crosses posterior to common hepatic duct in 85% of cases. Gives rise to cystic artery.',
            variantNote: 'Replaced RHA arises from SMA in 10-12% (Michels Type III).'
          },
          {
            id: 'p7',
            name: 'Left Hepatic Artery (LHA)',
            x: 70,
            y: 20,
            category: 'Artery',
            clinicalPearl: 'Supplies segments II, III, and IV. Often gives off Middle Hepatic Artery (Segment IV).',
            variantNote: 'Middle hepatic can arise from RHA or LHA.'
          },
          {
            id: 'p8',
            name: 'Gastroduodenal Artery (GDA)',
            x: 65,
            y: 58,
            category: 'Artery',
            clinicalPearl: 'Major landmark demarcating CHA from PHA. Crucial to coil prior to Y-90 SIRT to prevent gastroduodenal ulceration.',
            variantNote: 'Bifurcates into right gastroepiploic and superior pancreaticoduodenal arteries.'
          }
        ]
      },
      {
        sliceNumber: 3,
        sliceLabel: 'Subsegmental Tumor Blush (Segment 6 HCC)',
        description: 'Superselective microcatheter run in posterior inferior branch of RHA.',
        backgroundSvg: 'tumor-blush',
        pins: [
          {
            id: 'p9',
            name: 'Segment 6 Arterial Feeder',
            x: 82,
            y: 46,
            category: 'Artery',
            clinicalPearl: 'Terminal subsegmental branch. Target for selective microcatheter DEB-TACE delivery.',
            variantNote: 'May receive accessory parasitic supply from right renal capsular or inferior phrenic arteries.'
          },
          {
            id: 'p10',
            name: 'Hypervascular HCC Tumor Blush',
            x: 86,
            y: 44,
            category: 'Lesion',
            clinicalPearl: 'Classic intense early arterial contrast pooling with rapid parenchymal washout on delayed phase.',
            variantNote: 'Typical BCLC intermediate stage indication for locoregional chemoembolization.'
          }
        ]
      }
    ]
  },
  {
    id: 'biliary-tree',
    title: 'Biliary Ductal Confluence & Strictures',
    modality: 'Biliary Cholangiogram',
    indication: 'Percutaneous Transhepatic Biliary Drainage (PTBD) & Rendezvous Planning',
    slices: [
      {
        sliceNumber: 1,
        sliceLabel: 'Biliary Tree Confluence Overview',
        description: 'Fluoroscopic cholangiogram via 22G Chiba needle prior to 8.5F ring drainage.',
        backgroundSvg: 'biliary-main',
        pins: [
          {
            id: 'b1',
            name: 'Right Posterior Sectoral Duct',
            x: 72,
            y: 34,
            category: 'Duct',
            clinicalPearl: 'Drains segments 6 and 7. Courses horizontally and posterior to right anterior duct.',
            variantNote: 'Most frequent variant: drains directly into left hepatic duct (20%).'
          },
          {
            id: 'b2',
            name: 'Right Anterior Sectoral Duct',
            x: 64,
            y: 28,
            category: 'Duct',
            clinicalPearl: 'Drains segments 5 and 8. Has a more vertical anatomical course.',
            variantNote: 'Confluence with posterior duct forms right hepatic duct.'
          },
          {
            id: 'b3',
            name: 'Left Hepatic Duct (LHD)',
            x: 42,
            y: 38,
            category: 'Duct',
            clinicalPearl: 'Longer extrahepatic course (2-3cm) under Segment 2/3 bridge. Ideal for left PTBD.',
            variantNote: 'Often less acutely angled than right ductal confluence.'
          },
          {
            id: 'b4',
            name: 'Common Hepatic Duct Stricture (Klatskin Tumor)',
            x: 52,
            y: 56,
            category: 'Lesion',
            clinicalPearl: 'Abrupt "rat-tail" caliber tapering with proximal intrahepatic duct dilatation.',
            variantNote: 'Bismuth-Corlette Type II involves confluence without extending into secondaries.'
          }
        ]
      }
    ]
  }
];

const GUIDELINE_SYSTEMS = [
  'ALL',
  'Hepatobiliary & Portal',
  'Thoracic & Pulmonology',
  'Venous & Lymphatic',
  'Genitourinary & Pelvic',
  'Vascular & Arterial',
  'Oncology & Ablation',
  'Gastrointestinal & Mesenteric',
  'Dialysis & Access'
] as const;

export default function EducationPage() {
  const [activeMode, setActiveMode] = useState<'guidelines' | 'anatomy'>('guidelines');

  // CIRSE Guidelines State
  const [selectedGuidelineId, setSelectedGuidelineId] = useState<string>(CLINICAL_GUIDELINES[0].id);
  const [guidelineSearch, setGuidelineSearch] = useState<string>('');
  const [activeSystemFilter, setActiveSystemFilter] = useState<string>('ALL');
  const [copiedGuidelineId, setCopiedGuidelineId] = useState<string | null>(null);

  // Anatomical Spotter State
  const [selectedStackId, setSelectedStackId] = useState<string>(IMAGING_STACKS[0].id);
  const [currentSliceIndex, setCurrentSliceIndex] = useState<number>(0);
  const [examMode, setExamMode] = useState<boolean>(true);
  const [revealedPins, setRevealedPins] = useState<Record<string, boolean>>({});
  const [activePin, setActivePin] = useState<AnatomicalPin | null>(null);

  const activeStack = IMAGING_STACKS.find((s) => s.id === selectedStackId) || IMAGING_STACKS[0];
  const activeSlice = activeStack.slices[currentSliceIndex] || activeStack.slices[0];

  const filteredGuidelines = CLINICAL_GUIDELINES.filter((g) => {
    if (activeSystemFilter !== 'ALL' && g.organSystem !== activeSystemFilter) {
      return false;
    }
    if (!guidelineSearch) return true;
    const q = guidelineSearch.toLowerCase();
    return (
      g.procedureName.toLowerCase().includes(q) ||
      g.title.toLowerCase().includes(q) ||
      g.code.toLowerCase().includes(q) ||
      g.organSystem.toLowerCase().includes(q) ||
      g.summary.toLowerCase().includes(q) ||
      g.indications.some((i) => i.toLowerCase().includes(q)) ||
      g.gradingCriteria.some(
        (c) => c.definition.toLowerCase().includes(q) || c.management.toLowerCase().includes(q)
      )
    );
  });

  const activeGuideline: ClinicalGuidelineItem =
    CLINICAL_GUIDELINES.find((g) => g.id === selectedGuidelineId) ||
    filteredGuidelines[0] ||
    CLINICAL_GUIDELINES[0];

  const handleCopyGuideline = (item: ClinicalGuidelineItem) => {
    const lines = [
      `CIRSE STANDARDS OF PRACTICE & QUALITY IMPROVEMENT GUIDELINE`,
      `Document: ${item.title}`,
      `Code: ${item.code} (${item.society}) | Year: ${item.year} | Evidence Level: ${item.evidenceGrade}`,
      `Organ System: ${item.organSystem}`,
      `======================================================================`,
      `CLINICAL SUMMARY:`,
      item.summary,
      ``,
      `QUALITY PERFORMANCE BENCHMARKS:`,
      `• Technical Success Benchmark: >= ${item.technicalSuccessThreshold}%`,
      `• Major Complication Ceiling: <= ${item.majorComplicationThreshold}%`,
      ``,
      `KEY CIRSE PROCEDURAL MANDATES:`,
      ...item.keyCirsePoints.map((pt) => `• ${pt}`),
      ``,
      `INDICATIONS:`,
      ...item.indications.map((ind) => `• ${ind}`),
      ``,
      `CONTRAINDICATIONS:`,
      ...item.contraindications.map((con) => `• ${con}`),
      ``,
      `CIRSE ANTIMICROBIAL PROPHYLAXIS REGIMEN:`,
      item.antibioticProphylaxis,
      ``,
      `PRE-PROCEDURE SAFETY CHECKLIST:`,
      ...item.preProcedureChecklist.map((chk) => `• ${chk}`),
      ``,
      `POST-PROCEDURE SURVEILLANCE & RECOVERY:`,
      ...item.postProcedureCare.map((pst) => `• ${pst}`),
      ``,
      `CIRSE COMPLICATION CLASSIFICATION (GRADES 1-5):`,
      ...item.gradingCriteria.map(
        (g) =>
          `[${g.grade} - ${g.category}] (Expected Rate: ~${g.expectedRatePercent}%)\n  Definition: ${g.definition}\n  Management: ${g.management}`
      )
    ];

    navigator.clipboard?.writeText(lines.join('\n'));
    setCopiedGuidelineId(item.id);
    setTimeout(() => setCopiedGuidelineId(null), 2500);
  };

  const handlePrevSlice = () => {
    if (currentSliceIndex > 0) {
      setCurrentSliceIndex(currentSliceIndex - 1);
      setActivePin(null);
    }
  };

  const handleNextSlice = () => {
    if (currentSliceIndex < activeStack.slices.length - 1) {
      setCurrentSliceIndex(currentSliceIndex + 1);
      setActivePin(null);
    }
  };

  const handleTogglePin = (pin: AnatomicalPin) => {
    setActivePin(pin);
    setRevealedPins((prev) => ({
      ...prev,
      [pin.id]: true
    }));
  };

  const handleResetQuiz = () => {
    setRevealedPins({});
    setActivePin(null);
  };

  return (
    <div className="space-y-4 pb-12">
      {/* Top Header Card & Mode Switcher */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-heading font-bold text-lg text-[#202124] flex items-center gap-2 flex-wrap">
              <span>CIRSE Standards of Practice & Clinical Guidelines Studio</span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#E8F0FE] text-[#1A73E8]">
                Official European IR Society
              </span>
            </h1>
            <p className="text-xs text-[#5F6368]">
              Evidence-based procedural standards, indications, CIRSE complication classifications (Grades 1-5), and anatomical spotters
            </p>
          </div>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F1F3F4] rounded-xl border border-[#DADCE0]">
          <button
            onClick={() => setActiveMode('guidelines')}
            className={cn(
              'flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition',
              activeMode === 'guidelines'
                ? 'bg-white text-[#1A73E8] shadow-xs font-bold'
                : 'text-[#5F6368] hover:text-[#202124]'
            )}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#1A73E8]" />
            <span>CIRSE Guidelines</span>
            <span className="px-1.5 py-0.2 text-[10px] rounded-full bg-[#E8F0FE] text-[#1A73E8] font-mono font-bold">
              {CLINICAL_GUIDELINES.length}
            </span>
          </button>
          <button
            onClick={() => setActiveMode('anatomy')}
            className={cn(
              'flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition',
              activeMode === 'anatomy'
                ? 'bg-white text-[#1A73E8] shadow-xs font-bold'
                : 'text-[#5F6368] hover:text-[#202124]'
            )}
          >
            <Eye className="w-3.5 h-3.5 text-[#1A73E8]" />
            <span>Anatomical Stacks & Spotter</span>
          </button>
        </div>
      </div>

      {/* ================= MODE 1: CIRSE STANDARDS OF PRACTICE ================= */}
      {activeMode === 'guidelines' && (
        <div className="space-y-4">
          {/* Search & System Filter Bar */}
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-3 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#5F6368] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search CIRSE guidelines by procedure, code (CIRSE-TACE-2024), indication, antibiotic, or complication..."
                  value={guidelineSearch}
                  onChange={(e) => setGuidelineSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-[#DADCE0] text-xs text-[#202124] focus:border-[#1A73E8] outline-none transition"
                />
              </div>
              <span className="text-xs text-[#5F6368] font-medium font-mono whitespace-nowrap">
                {filteredGuidelines.length} Guidelines
              </span>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              {GUIDELINE_SYSTEMS.map((sys) => {
                const isActive = activeSystemFilter === sys;
                return (
                  <button
                    key={sys}
                    onClick={() => setActiveSystemFilter(sys)}
                    className={cn(
                      'px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition shadow-xs',
                      isActive
                        ? 'bg-[#1A73E8] text-white font-bold'
                        : 'bg-[#FFFFFF] border border-[#DADCE0] text-[#5F6368] hover:bg-[#F8F9FA]'
                    )}
                  >
                    {sys}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Guidelines Grid: Left Menu + Right Detailed Dossier */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left Guidelines List (4 Cols) */}
            <div className="lg:col-span-4 bg-white border border-[#DADCE0] rounded-2xl p-3 shadow-xs space-y-1.5 max-h-[820px] overflow-y-auto">
              <div className="px-2 py-1 text-[11px] font-bold text-[#5F6368] uppercase tracking-wider flex items-center justify-between">
                <span>Standards of Practice</span>
                <span className="font-mono text-[#1A73E8] font-bold">CIRSE Europe</span>
              </div>

              {filteredGuidelines.map((item) => {
                const isSelected = item.id === activeGuideline.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedGuidelineId(item.id)}
                    className={cn(
                      'w-full text-left p-3 rounded-xl border transition text-xs shadow-xs space-y-1',
                      isSelected
                        ? 'bg-[#E8F0FE] border-[#1A73E8] text-[#1A73E8]'
                        : 'bg-white border-[#DADCE0] hover:bg-[#F8F9FA] text-[#202124]'
                    )}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-bold text-xs truncate">{item.procedureName}</span>
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-[#FFFFFF] border border-[#DADCE0] text-[#1A73E8] shrink-0">
                        {item.society}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#5F6368] line-clamp-1">{item.title}</div>
                    <div className="flex items-center justify-between text-[10px] font-mono pt-1 text-[#5F6368]">
                      <span>{item.organSystem}</span>
                      <span className="font-semibold text-[#137333]">
                        Success ≥{item.technicalSuccessThreshold}%
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Dossier Pane (8 Cols) */}
            <div className="lg:col-span-8 bg-white border border-[#DADCE0] rounded-2xl p-5 shadow-xs space-y-5">
              {/* Header */}
              <div className="flex items-start justify-between flex-wrap gap-3 pb-4 border-b border-[#DADCE0]">
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#E8F0FE] text-[#1A73E8] border border-[#1A73E8]/30 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#1A73E8]" />
                      CIRSE Standards of Practice
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-xs font-mono font-bold bg-[#FEF7E0] text-[#B06000] border border-[#B06000]/30">
                      {activeGuideline.code}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#F1F3F4] text-[#3C4043] border border-[#DADCE0]">
                      {activeGuideline.organSystem}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#E6F4EA] text-[#137333] border border-[#137333]/30">
                      Year: {activeGuideline.year}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-[#202124] leading-snug">
                    {activeGuideline.title}
                  </h2>
                  <p className="text-xs text-[#5F6368] leading-relaxed">
                    {activeGuideline.summary}
                  </p>
                </div>

                {/* Quick Action Button */}
                <button
                  onClick={() => handleCopyGuideline(activeGuideline)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#1A73E8] hover:bg-[#1557B0] text-white font-bold text-xs transition shadow-xs shrink-0"
                >
                  {copiedGuidelineId === activeGuideline.id ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>
                    {copiedGuidelineId === activeGuideline.id ? 'Copied CIRSE SOP!' : 'Copy CIRSE SOP'}
                  </span>
                </button>
              </div>

              {/* 1. Quality Performance Thresholds */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0]">
                  <div className="text-[10px] uppercase font-bold text-[#5F6368]">Technical Success Benchmark</div>
                  <div className="text-xl font-black text-[#137333] mt-0.5 font-mono">
                    ≥ {activeGuideline.technicalSuccessThreshold}%
                  </div>
                  <div className="text-[10px] text-[#5F6368] mt-0.5">CIRSE Quality Threshold</div>
                </div>

                <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0]">
                  <div className="text-[10px] uppercase font-bold text-[#5F6368]">Major Complication Ceiling</div>
                  <div className="text-xl font-black text-[#C5221F] mt-0.5 font-mono">
                    ≤ {activeGuideline.majorComplicationThreshold}%
                  </div>
                  <div className="text-[10px] text-[#5F6368] mt-0.5">Maximum CIRSE Acceptable Rate</div>
                </div>

                <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0]">
                  <div className="text-[10px] uppercase font-bold text-[#5F6368]">Evidence Level</div>
                  <div className="text-xs font-bold text-[#1A73E8] mt-1 line-clamp-1">
                    {activeGuideline.evidenceGrade}
                  </div>
                  <div className="text-[10px] text-[#5F6368] mt-0.5">GRADE Methodology Standard</div>
                </div>
              </div>

              {/* 2. Key CIRSE Procedural Mandates */}
              {activeGuideline.keyCirsePoints && activeGuideline.keyCirsePoints.length > 0 && (
                <div className="p-4 rounded-xl bg-[#FEF7E0] border border-[#F9AB00]/30 text-[#B06000] space-y-2 text-xs">
                  <div className="font-bold flex items-center gap-1.5 text-sm">
                    <Sparkles className="w-4 h-4 text-[#B06000]" />
                    <span>CIRSE European Standards of Practice Key Mandates</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] leading-relaxed text-[#202124]">
                    {activeGuideline.keyCirsePoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="font-bold text-[#B06000] shrink-0 mt-0.5">★</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 3. Indications & Contraindications (2 Columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Indications */}
                <div className="p-3.5 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] space-y-2">
                  <div className="font-bold text-xs text-[#202124] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#137333]" />
                    <span>CIRSE Documented Clinical Indications</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-[#3C4043]">
                    {activeGuideline.indications.map((ind, idx) => (
                      <li key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-white border border-[#DADCE0] leading-relaxed">
                        <span className="w-4 h-4 rounded-full bg-[#E6F4EA] text-[#137333] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contraindications */}
                <div className="p-3.5 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] space-y-2">
                  <div className="font-bold text-xs text-[#202124] flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-[#C5221F]" />
                    <span>Absolute & Relative Contraindications</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-[#3C4043]">
                    {activeGuideline.contraindications.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-white border border-[#DADCE0] leading-relaxed">
                        <span className="w-4 h-4 rounded-full bg-[#FCE8E6] text-[#C5221F] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✕</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 4. CIRSE Antimicrobial Prophylaxis Regimen */}
              <div className="p-3.5 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] space-y-2 text-xs">
                <div className="font-bold text-[#202124] flex items-center gap-1.5">
                  <Pill className="w-4 h-4 text-[#1A73E8]" />
                  <span>CIRSE Antimicrobial Prophylaxis Regimen</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#DADCE0] text-[11px] text-[#3C4043] leading-relaxed">
                  {activeGuideline.antibioticProphylaxis}
                </div>
              </div>

              {/* 5. Pre-Procedure Safety Checklist vs Post-Op Surveillance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Pre-Procedure Checklist */}
                <div className="p-3.5 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] space-y-2">
                  <div className="font-bold text-xs text-[#202124] flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-[#1A73E8]" />
                    <span>CIRSE Pre-Procedure Quality Checklist</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-[#3C4043]">
                    {activeGuideline.preProcedureChecklist.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-white border border-[#DADCE0] leading-relaxed">
                        <span className="text-[#1A73E8] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Post-Procedure Care */}
                <div className="p-3.5 rounded-xl border border-[#DADCE0] bg-[#F8F9FA] space-y-2">
                  <div className="font-bold text-xs text-[#202124] flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#137333]" />
                    <span>Post-Procedure Care & Recovery Surveillance</span>
                  </div>
                  <ul className="space-y-1.5 text-[11px] text-[#3C4043]">
                    {activeGuideline.postProcedureCare.map((care, idx) => (
                      <li key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-white border border-[#DADCE0] leading-relaxed">
                        <span className="text-[#137333] font-bold">•</span>
                        <span>{care}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 6. CIRSE Complication Classification (Grades 1 to 5) */}
              <div className="space-y-2 text-xs">
                <div className="font-bold text-[#202124] flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-[#C5221F]" />
                    CIRSE Complication Classification System (Grades 1-5)
                  </span>
                  <span className="text-[10px] text-[#5F6368] font-mono">Official CIRSE Criteria</span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-[#DADCE0] bg-white shadow-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#DADCE0] bg-[#F8F9FA] text-[11px] text-[#5F6368] uppercase font-mono">
                        <th className="p-2.5">CIRSE Grade</th>
                        <th className="p-2.5">Category</th>
                        <th className="p-2.5">Definition & Clinical Presentation</th>
                        <th className="p-2.5">Expected Rate</th>
                        <th className="p-2.5">Evidence-Based Management</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DADCE0] text-[11px]">
                      {activeGuideline.gradingCriteria.map((grade, idx) => {
                        const isSevere =
                          grade.category === 'Severe' || grade.category === 'Catastrophic';
                        return (
                          <tr key={idx} className="hover:bg-[#F8F9FA]">
                            <td className="p-2.5 font-bold font-mono text-[#202124] whitespace-nowrap">
                              {grade.grade}
                            </td>
                            <td className="p-2.5 whitespace-nowrap">
                              <span
                                className={cn(
                                  'px-2 py-0.5 rounded text-[10px] font-bold font-mono',
                                  grade.category === 'Minor'
                                    ? 'bg-[#E8F0FE] text-[#1A73E8]'
                                    : grade.category === 'Moderate'
                                    ? 'bg-[#FEF7E0] text-[#B06000]'
                                    : grade.category === 'Severe'
                                    ? 'bg-[#FCE8E6] text-[#C5221F]'
                                    : 'bg-[#202124] text-white'
                                )}
                              >
                                {grade.category}
                              </span>
                            </td>
                            <td className="p-2.5 text-[#202124] leading-relaxed max-w-xs">
                              {grade.definition}
                            </td>
                            <td className="p-2.5 font-mono font-bold text-[#5F6368] whitespace-nowrap">
                              ~{grade.expectedRatePercent}%
                            </td>
                            <td className="p-2.5 text-[#3C4043] leading-relaxed max-w-sm">
                              {grade.management}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODE 2: ANATOMICAL SPOTTER & STACKS ================= */}
      {activeMode === 'anatomy' && (
        <div className="space-y-4">
          {/* Main Grid: Left Viewer & Right Anatomy Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left Column: Stack Navigator & SVG Vector Canvas */}
            <div className="lg:col-span-8 space-y-3">
              {/* Stack Selector Bar */}
              <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-2.5 flex items-center justify-between flex-wrap gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-[#5F6368] font-medium">Case:</span>
                  <select
                    value={selectedStackId}
                    onChange={(e) => {
                      setSelectedStackId(e.target.value);
                      setCurrentSliceIndex(0);
                      setActivePin(null);
                    }}
                    className="font-semibold text-[#202124] bg-transparent outline-none cursor-pointer"
                  >
                    {IMAGING_STACKS.map((stack) => (
                      <option key={stack.id} value={stack.id}>
                        {stack.title} ({stack.modality})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Exam Mode Toggle & Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setExamMode(!examMode)}
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition shadow-xs border',
                      examMode
                        ? 'bg-[#E8F0FE] text-[#1A73E8] border-[#1A73E8]/30'
                        : 'bg-[#FFFFFF] text-[#202124] border-[#DADCE0] hover:bg-[#F8F9FA]'
                    )}
                    title="Toggle Exam Mode (Hides labels until clicked)"
                  >
                    {examMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{examMode ? 'Exam Mode' : 'Study Mode'}</span>
                  </button>

                  <button
                    onClick={handleResetQuiz}
                    className="p-1 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] transition border border-[#DADCE0]"
                    title="Reset Revealed Structures"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  {/* Slice Navigation Chevrons */}
                  <div className="flex items-center gap-1 ml-2 border-l border-[#DADCE0] pl-2">
                    <button
                      onClick={handlePrevSlice}
                      disabled={currentSliceIndex === 0}
                      className="p-1 rounded-full border border-[#DADCE0] hover:bg-[#F1F3F4] disabled:opacity-40 transition"
                    >
                      <ChevronLeft className="w-3.5 h-3.5 text-[#5F6368]" />
                    </button>
                    <span className="font-mono text-xs text-[#202124]">
                      Slice {currentSliceIndex + 1}/{activeStack.slices.length}
                    </span>
                    <button
                      onClick={handleNextSlice}
                      disabled={currentSliceIndex === activeStack.slices.length - 1}
                      className="p-1 rounded-full border border-[#DADCE0] hover:bg-[#F1F3F4] disabled:opacity-40 transition"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#5F6368]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Imaging Vector Canvas */}
              <div className="relative bg-[#1A1C1E] border border-[#DADCE0] rounded-2xl overflow-hidden shadow-xs min-h-[440px] flex items-center justify-center select-none">
                <svg className="w-full h-[440px]" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="fluoroGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#2D3135" />
                      <stop offset="100%" stopColor="#111315" />
                    </radialGradient>
                    <filter id="contrastEnhance">
                      <feGaussianBlur stdDeviation="1.5" result="blur" />
                      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" />
                    </filter>
                  </defs>
                  <rect width="800" height="500" fill="url(#fluoroGlow)" />
                  <rect x="360" y="20" width="80" height="460" rx="12" fill="#202327" opacity="0.4" />

                  {activeStack.id === 'celiac-hepatic' && (
                    <g filter="url(#contrastEnhance)">
                      <path d="M 390 10 L 390 490" stroke="#3A3F45" strokeWidth="36" strokeLinecap="round" opacity="0.6" />
                      <path d="M 390 160 Q 420 160 450 170" stroke="#F1F3F4" strokeWidth="16" strokeLinecap="round" />
                      <path d="M 450 170 Q 380 180 340 190 T 260 200 T 180 210" stroke="#E8EAED" strokeWidth="10" strokeLinecap="round" fill="none" />
                      <path d="M 440 165 Q 430 120 420 80" stroke="#DADCE0" strokeWidth="6" strokeLinecap="round" fill="none" />
                      <path d="M 450 170 Q 520 185 550 205" stroke="#F8F9FA" strokeWidth="12" strokeLinecap="round" fill="none" />
                      <path d="M 550 205 Q 560 270 550 360" stroke="#BDC1C6" strokeWidth="8" strokeLinecap="round" fill="none" />
                      <path d="M 550 205 Q 580 180 610 160" stroke="#F1F3F4" strokeWidth="10" strokeLinecap="round" fill="none" />
                      <path d="M 610 160 Q 670 140 710 130" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" fill="none" />
                      <path d="M 610 160 Q 590 120 570 100" stroke="#E8EAED" strokeWidth="7" strokeLinecap="round" fill="none" />
                      <circle cx="680" cy="220" r="32" fill="#D93025" opacity="0.45" />
                      <circle cx="680" cy="220" r="22" fill="#D93025" opacity="0.75" />
                    </g>
                  )}

                  {activeStack.id === 'biliary-tree' && (
                    <g filter="url(#contrastEnhance)">
                      <path d="M 620 120 Q 550 150 510 170" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" fill="none" />
                      <path d="M 560 110 Q 530 140 510 170" stroke="#F1F3F4" strokeWidth="8" strokeLinecap="round" fill="none" />
                      <path d="M 330 140 Q 420 160 480 175" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" fill="none" />
                      <path d="M 510 170 L 480 175" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" fill="none" />
                      <path d="M 495 172 Q 490 220 485 260" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" fill="none" />
                      <path d="M 485 260 L 485 285" stroke="#9AA0A6" strokeWidth="3" strokeLinecap="round" fill="none" />
                      <path d="M 485 285 Q 480 340 475 420" stroke="#E8EAED" strokeWidth="6" strokeLinecap="round" fill="none" />
                    </g>
                  )}
                </svg>

                {/* Interactive Anatomical Vector Pins */}
                {activeSlice.pins.map((pin, idx) => {
                  const isRevealed = revealedPins[pin.id] || !examMode;
                  const isSelected = activePin?.id === pin.id;

                  return (
                    <div
                      key={pin.id}
                      style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                      onClick={() => handleTogglePin(pin)}
                    >
                      <div
                        className={cn(
                          'w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-all shadow-md',
                          isSelected
                            ? 'bg-[#1A73E8] text-white ring-4 ring-[#1A73E8]/40 scale-110'
                            : isRevealed
                            ? 'bg-[#FFFFFF] text-[#202124] border border-[#DADCE0] hover:scale-105'
                            : 'bg-[#F9AB00] text-[#202124] border border-[#FFFFFF] animate-pulse'
                        )}
                      >
                        {isRevealed ? (
                          <span className="font-mono text-[11px]">{idx + 1}</span>
                        ) : (
                          <HelpCircle className="w-4 h-4" />
                        )}
                      </div>

                      {isRevealed && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-8 whitespace-nowrap bg-[#FFFFFF] border border-[#DADCE0] px-2 py-0.5 rounded-full text-[11px] font-medium text-[#202124] shadow-xs pointer-events-none">
                          {pin.name}
                        </div>
                      )}
                    </div>
                  );
                })}

                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white/90 px-2.5 py-1 rounded text-[11px] font-mono border border-white/10">
                  {activeSlice.sliceLabel}
                </div>
              </div>

              {/* Slice Clinical Description */}
              <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-xl p-3 text-xs text-[#5F6368]">
                <span className="font-semibold text-[#202124]">Radiological Technique: </span>
                {activeSlice.description}
              </div>
            </div>

            {/* Right Column: High-Yield Anatomy Detail Panel */}
            <div className="lg:col-span-4 space-y-3">
              <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-4 shadow-xs">
                <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#1A73E8]" />
                    <h3 className="font-heading font-bold text-sm text-[#202124]">
                      Anatomical Landmark Dossier
                    </h3>
                  </div>
                  <span className="text-[11px] text-[#5F6368]">
                    {Object.keys(revealedPins).length} / {activeSlice.pins.length} identified
                  </span>
                </div>

                {activePin ? (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#DADCE0]">
                      <div className="text-[11px] text-[#5F6368] font-medium">Selected Structure</div>
                      <div className="font-bold text-base text-[#202124] mt-0.5">{activePin.name}</div>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E8F0FE] text-[#1A73E8]">
                        {activePin.category}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl border border-[#DADCE0] bg-[#FFFFFF]">
                      <div className="text-[11px] text-[#5F6368] font-semibold mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#F9AB00]" />
                        <span>Clinical & Procedural Pearl</span>
                      </div>
                      <p className="text-xs text-[#202124] leading-relaxed">
                        {activePin.clinicalPearl}
                      </p>
                    </div>

                    {activePin.variantNote && (
                      <div className="p-3 rounded-xl bg-[#FEF7E0] border border-[#F9AB00]/30 text-[#B06000]">
                        <div className="text-[11px] font-bold mb-0.5">Anatomical Variant / Michels Rule</div>
                        <p className="text-xs leading-relaxed">{activePin.variantNote}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12 px-4 text-[#5F6368]">
                    <HelpCircle className="w-8 h-8 text-[#DADCE0] mx-auto mb-2" />
                    <p className="font-medium text-xs text-[#202124]">No Structure Selected</p>
                    <p className="text-[11px] mt-1">
                      Click on any numbered pin or question marker on the imaging stack to test your knowledge and reveal high-yield anatomical pearls.
                    </p>
                  </div>
                )}
              </div>

              {/* Rapid Reference: Michels Classification Summary */}
              <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-3 text-xs text-[#5F6368] space-y-1.5">
                <div className="font-semibold text-[#202124] text-[11px] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1E8E3E]" />
                  <span>Michels Hepatic Artery Reference (Resident High-Yield)</span>
                </div>
                <ul className="text-[11px] space-y-1 list-disc pl-4">
                  <li><b>Type I (55%):</b> Standard branching (CHA from Celiac, bifurcates to RHA & LHA).</li>
                  <li><b>Type II (10%):</b> Replaced LHA arising from Left Gastric Artery.</li>
                  <li><b>Type III (11%):</b> Replaced RHA arising from Superior Mesenteric Artery (SMA).</li>
                  <li><b>Type IV (1%):</b> Both replaced RHA (from SMA) and LHA (from LGA).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
