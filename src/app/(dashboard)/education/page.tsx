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
  Maximize2
} from 'lucide-react';
import { cn } from '@/lib/utils';

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
    backgroundSvg: string; // Procedural anatomical SVG render
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
        sliceLabel: 'Proper Hepatic & Gastroduodenal Artery Bifurcation',
        description: 'Superselective coaxial microcatheter engagement beyond the GDA takeoff.',
        backgroundSvg: 'proper-hepatic',
        pins: [
          {
            id: 'p5',
            name: 'Gastroduodenal Artery (GDA)',
            x: 60,
            y: 64,
            category: 'Artery',
            clinicalPearl: 'Crucial landmark during TACE. Must be protected from non-target chemoembolization.',
            variantNote: 'May supply gastric / duodenal ulcers; embolization landmark during acute UGI bleed.'
          },
          {
            id: 'p6',
            name: 'Proper Hepatic Artery (PHA)',
            x: 68,
            y: 36,
            category: 'Artery',
            clinicalPearl: 'Runs in hepatoduodenal ligament medial to common bile duct and anterior to portal vein.',
            variantNote: 'Bifurcates into Right and Left Hepatic Arteries.'
          },
          {
            id: 'p7',
            name: 'Right Gastric Artery',
            x: 54,
            y: 48,
            category: 'Artery',
            clinicalPearl: 'Arises commonly from PHA or CHA; non-target reflux can lead to gastric antral necrosis.',
            variantNote: 'Origin can vary between PHA, CHA, or left hepatic artery.'
          }
        ]
      },
      {
        sliceNumber: 3,
        sliceLabel: 'Lobar Hepatic Bifurcation & Segmental Anatomy',
        description: 'Selective right hepatic lobar run delineating anterior/posterior divisions and tumor blush.',
        backgroundSvg: 'lobar-run',
        pins: [
          {
            id: 'p8',
            name: 'Right Hepatic Artery (RHA)',
            x: 78,
            y: 28,
            category: 'Artery',
            clinicalPearl: 'Supplies Segments 5, 6, 7, and 8. Crosses behind the common hepatic duct in 85%.',
            variantNote: 'Replaced RHA arises directly from SMA in ~10-12% (Michels Type III).'
          },
          {
            id: 'p9',
            name: 'Left Hepatic Artery (LHA)',
            x: 58,
            y: 24,
            category: 'Artery',
            clinicalPearl: 'Supplies Segments 2, 3, and 4 (including segment 4a and 4b).',
            variantNote: 'Middle hepatic artery supplying Segment 4 may arise from RHA or LHA.'
          },
          {
            id: 'p10',
            name: 'Tumor Hypervascular Blush (HCC Segment 6)',
            x: 84,
            y: 46,
            category: 'Lesion',
            clinicalPearl: 'Classic "cotton-wool" dense hypervascular staining with early venous washout.',
            variantNote: 'Target for Lipiodol + Doxorubicin emulsion followed by PVA particles.'
          }
        ]
      }
    ]
  },
  {
    id: 'biliary-tree',
    title: 'Biliary Tree & Confluence Anatomy',
    modality: 'Biliary Cholangiogram',
    indication: 'Percutaneous Transhepatic Cholangiogram for Obstructive Jaundice',
    slices: [
      {
        sliceNumber: 1,
        sliceLabel: 'Bismuth-Corlette Level Cholangiogram',
        description: 'Fluoroscopic spot image with 22G Chiba needle opacifying biliary confluence.',
        backgroundSvg: 'biliary-main',
        pins: [
          {
            id: 'b1',
            name: 'Right Posterior Biliary Sectoral Duct',
            x: 74,
            y: 24,
            category: 'Duct',
            clinicalPearl: 'Drains Segments 6 and 7. Courses horizontally and loops over right portal vein.',
            variantNote: 'Anomalous drainage into left hepatic duct occurs in ~15-20%.'
          },
          {
            id: 'b2',
            name: 'Right Anterior Biliary Sectoral Duct',
            x: 64,
            y: 34,
            category: 'Duct',
            clinicalPearl: 'Drains Segments 5 and 8. Ascends vertically before joining posterior duct.',
            variantNote: 'Can form a trifurcation with left duct in ~12%.'
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

export default function EducationPage() {
  const [selectedStackId, setSelectedStackId] = useState<string>(IMAGING_STACKS[0].id);
  const [currentSliceIndex, setCurrentSliceIndex] = useState<number>(0);
  const [examMode, setExamMode] = useState<boolean>(true); // Hide labels by default for quiz
  const [revealedPins, setRevealedPins] = useState<Record<string, boolean>>({});
  const [activePin, setActivePin] = useState<AnatomicalPin | null>(null);

  const activeStack = IMAGING_STACKS.find((s) => s.id === selectedStackId) || IMAGING_STACKS[0];
  const activeSlice = activeStack.slices[currentSliceIndex] || activeStack.slices[0];

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
      {/* Top Header Card */}
      <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg p-3 sm:p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center font-bold">
            <Eye className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-heading font-medium text-lg text-[#202124] flex items-center gap-2">
              <span>Interventional Radiology Diagnostic Spotter & Anatomy Engine</span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#E8F0FE] text-[#1A73E8]">
                Resident Board Prep
              </span>
            </h1>
            <p className="text-xs text-[#5F6368]">
              Interactive SVG vector overlay stacks, Michels hepatic classifications, and high-yield board spotters
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Exam Mode Toggle */}
          <button
            onClick={() => setExamMode(!examMode)}
            className={cn(
              'flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition shadow-xs border',
              examMode
                ? 'bg-[#E8F0FE] text-[#1A73E8] border-[#1A73E8]/30'
                : 'bg-[#FFFFFF] text-[#202124] border-[#DADCE0] hover:bg-[#F8F9FA]'
            )}
            title="Toggle Exam Mode (Hides labels until clicked)"
          >
            {examMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{examMode ? 'Exam Mode Active' : 'Study Mode (All Labels)'}</span>
          </button>

          <button
            onClick={handleResetQuiz}
            className="p-1.5 rounded-full hover:bg-[#F1F3F4] text-[#5F6368] hover:text-[#202124] transition border border-[#DADCE0]"
            title="Reset Revealed Structures"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid: Left Viewer & Right Anatomy Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column: Stack Navigator & SVG Vector Canvas */}
        <div className="lg:col-span-8 space-y-3">
          {/* Stack Selector Bar */}
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg p-2.5 flex items-center justify-between flex-wrap gap-2 text-xs">
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

            {/* Slice Navigation Chevrons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevSlice}
                disabled={currentSliceIndex === 0}
                className="p-1 rounded-full border border-[#DADCE0] hover:bg-[#F1F3F4] disabled:opacity-40 transition"
              >
                <ChevronLeft className="w-4 h-4 text-[#5F6368]" />
              </button>
              <span className="font-mono text-xs text-[#202124]">
                Slice {currentSliceIndex + 1} of {activeStack.slices.length}
              </span>
              <button
                onClick={handleNextSlice}
                disabled={currentSliceIndex === activeStack.slices.length - 1}
                className="p-1 rounded-full border border-[#DADCE0] hover:bg-[#F1F3F4] disabled:opacity-40 transition"
              >
                <ChevronRight className="w-4 h-4 text-[#5F6368]" />
              </button>
            </div>
          </div>

          {/* Imaging Vector Canvas (Pure White Background with Medical Dark Vector Overlay) */}
          <div className="relative bg-[#1A1C1E] border border-[#DADCE0] rounded-lg overflow-hidden shadow-xs min-h-[440px] flex items-center justify-center select-none">
            {/* Background Medical Diagram / Angiogram Simulation SVG */}
            <svg className="w-full h-[440px]" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Background Fluoroscopy Noise / Grid */}
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

              {/* Fluoroscopic Spine / Vertebral Body Shadow */}
              <rect x="360" y="20" width="80" height="460" rx="12" fill="#202327" opacity="0.4" />

              {/* Procedural Vascular Anatomy Vector Render */}
              {activeStack.id === 'celiac-hepatic' && (
                <g filter="url(#contrastEnhance)">
                  {/* Abdominal Aorta */}
                  <path d="M 390 10 L 390 490" stroke="#3A3F45" strokeWidth="36" strokeLinecap="round" opacity="0.6" />

                  {/* Celiac Axis Trunk */}
                  <path d="M 390 160 Q 420 160 450 170" stroke="#F1F3F4" strokeWidth="16" strokeLinecap="round" />

                  {/* Splenic Artery (Tortuous) */}
                  <path d="M 450 170 Q 380 180 340 190 T 260 200 T 180 210" stroke="#E8EAED" strokeWidth="10" strokeLinecap="round" fill="none" />

                  {/* Left Gastric Artery */}
                  <path d="M 440 165 Q 430 120 420 80" stroke="#DADCE0" strokeWidth="6" strokeLinecap="round" fill="none" />

                  {/* Common Hepatic Artery */}
                  <path d="M 450 170 Q 520 185 550 205" stroke="#F8F9FA" strokeWidth="12" strokeLinecap="round" fill="none" />

                  {/* Gastroduodenal Artery (GDA descending) */}
                  <path d="M 550 205 Q 560 270 550 360" stroke="#BDC1C6" strokeWidth="8" strokeLinecap="round" fill="none" />

                  {/* Proper Hepatic Artery (Ascending) */}
                  <path d="M 550 205 Q 580 180 610 160" stroke="#F1F3F4" strokeWidth="10" strokeLinecap="round" fill="none" />

                  {/* Right Hepatic Artery */}
                  <path d="M 610 160 Q 670 140 710 130" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" fill="none" />

                  {/* Left Hepatic Artery */}
                  <path d="M 610 160 Q 590 120 570 100" stroke="#E8EAED" strokeWidth="7" strokeLinecap="round" fill="none" />

                  {/* Tumor Blush (Segment 6) */}
                  <circle cx="680" cy="220" r="32" fill="#D93025" opacity="0.45" />
                  <circle cx="680" cy="220" r="22" fill="#D93025" opacity="0.75" />
                </g>
              )}

              {activeStack.id === 'biliary-tree' && (
                <g filter="url(#contrastEnhance)">
                  {/* Right Posterior Duct */}
                  <path d="M 620 120 Q 550 150 510 170" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" fill="none" />
                  {/* Right Anterior Duct */}
                  <path d="M 560 110 Q 530 140 510 170" stroke="#F1F3F4" strokeWidth="8" strokeLinecap="round" fill="none" />
                  {/* Left Hepatic Duct */}
                  <path d="M 330 140 Q 420 160 480 175" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" fill="none" />
                  {/* Confluence */}
                  <path d="M 510 170 L 480 175" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" fill="none" />
                  {/* Common Hepatic Duct with Stricture */}
                  <path d="M 495 172 Q 490 220 485 260" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" fill="none" />
                  <path d="M 485 260 L 485 285" stroke="#9AA0A6" strokeWidth="3" strokeLinecap="round" fill="none" /> {/* Stricture */}
                  <path d="M 485 285 Q 480 340 475 420" stroke="#E8EAED" strokeWidth="6" strokeLinecap="round" fill="none" /> {/* Distal CBD */}
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
                  {/* Pin Circle */}
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

                  {/* Floating Tag / Label if revealed */}
                  {isRevealed && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-8 whitespace-nowrap bg-[#FFFFFF] border border-[#DADCE0] px-2 py-0.5 rounded-full text-[11px] font-medium text-[#202124] shadow-xs pointer-events-none">
                      {pin.name}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Watermark / Modality Chip */}
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white/90 px-2.5 py-1 rounded text-[11px] font-mono border border-white/10">
              {activeSlice.sliceLabel}
            </div>
          </div>

          {/* Slice Clinical Description */}
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg p-3 text-xs text-[#5F6368]">
            <span className="font-semibold text-[#202124]">Radiological Technique: </span>
            {activeSlice.description}
          </div>
        </div>

        {/* Right Column: High-Yield Anatomy Detail Panel */}
        <div className="lg:col-span-4 space-y-3">
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg p-4 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#DADCE0] pb-2 mb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#1A73E8]" />
                <h3 className="font-heading font-medium text-sm text-[#202124]">
                  Anatomical Landmark Dossier
                </h3>
              </div>
              <span className="text-[11px] text-[#5F6368]">
                {Object.keys(revealedPins).length} / {activeSlice.pins.length} identified
              </span>
            </div>

            {activePin ? (
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-[#F8F9FA] border border-[#DADCE0]">
                  <div className="text-[11px] text-[#5F6368] font-medium">Selected Structure</div>
                  <div className="font-bold text-base text-[#202124] mt-0.5">{activePin.name}</div>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E8F0FE] text-[#1A73E8]">
                    {activePin.category}
                  </span>
                </div>

                <div className="p-3 rounded-lg border border-[#DADCE0] bg-[#FFFFFF]">
                  <div className="text-[11px] text-[#5F6368] font-semibold mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#F9AB00]" />
                    <span>Clinical & Procedural Pearl</span>
                  </div>
                  <p className="text-xs text-[#202124] leading-relaxed">
                    {activePin.clinicalPearl}
                  </p>
                </div>

                {activePin.variantNote && (
                  <div className="p-3 rounded-lg bg-[#FEF7E0] border border-[#F9AB00]/30 text-[#B06000]">
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
          <div className="bg-[#FFFFFF] border border-[#DADCE0] rounded-lg p-3 text-xs text-[#5F6368] space-y-1.5">
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
  );
}
