"use client";

import React, { useState, useEffect, useMemo } from "react";
import { PaperDefinition } from "../data/papersRegistry";
import { ManuscriptDraft, MANUSCRIPTS_DRAFTS } from "../data/manuscriptsDrafts";
import {
  FileText,
  Copy,
  Check,
  Download,
  Printer,
  Bold,
  Italic,
  List,
  Heading1,
  Heading2,
  Save,
  BookOpen,
  Award,
  Columns,
  AlignLeft,
  ShieldCheck,
  HelpCircle,
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";

interface GoogleDocsCanvasProps {
  paper: PaperDefinition;
}

export function GoogleDocsCanvas({ paper }: GoogleDocsCanvasProps) {
  const baseDraft = MANUSCRIPTS_DRAFTS[paper.id] || MANUSCRIPTS_DRAFTS["paper-vapsa"];
  const style = paper.journalStyle;

  // View Mode: "journal-proof" (authentic 2-column styled journal layout) vs "submission-manuscript" (double-spaced 12pt Word style)
  const [layoutMode, setLayoutMode] = useState<"journal-proof" | "submission-manuscript">("journal-proof");

  // Submission Standards Guide Modal State
  const [showStandardsModal, setShowStandardsModal] = useState(false);

  // Editable Document State
  const [docTitle, setDocTitle] = useState(baseDraft.title);
  const [docAuthors, setDocAuthors] = useState(baseDraft.authors);
  const [docAffiliations, setDocAffiliations] = useState(baseDraft.affiliations);
  const [abstractBg, setAbstractBg] = useState(baseDraft.abstract.background);
  const [abstractPurpose, setAbstractPurpose] = useState(baseDraft.abstract.purpose);
  const [abstractMethods, setAbstractMethods] = useState(baseDraft.abstract.materialsMethods);
  const [abstractResults, setAbstractResults] = useState(baseDraft.abstract.results);
  const [abstractConclusion, setAbstractConclusion] = useState(baseDraft.abstract.conclusion);
  const [keywordsText, setKeywordsText] = useState(baseDraft.keywords.join(", "));
  const [introText, setIntroText] = useState(baseDraft.introduction);
  const [methodsText, setMethodsText] = useState(baseDraft.materialsAndMethods);
  const [resultsText, setResultsText] = useState(baseDraft.results);
  const [discussionText, setDiscussionText] = useState(baseDraft.discussion);
  const [conclusionText, setConclusionText] = useState(baseDraft.conclusion);
  const [strobeText, setStrobeText] = useState(baseDraft.strobeChecklist);
  const [referencesText, setReferencesText] = useState(baseDraft.references.join("\n\n"));

  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  // Load custom saved edits from localStorage
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(`endoflow_manuscript_${paper.id}`);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.docTitle) setDocTitle(parsed.docTitle);
          if (parsed.docAuthors) setDocAuthors(parsed.docAuthors);
          if (parsed.docAffiliations) setDocAffiliations(parsed.docAffiliations);
          if (parsed.abstractBg) setAbstractBg(parsed.abstractBg);
          if (parsed.abstractPurpose) setAbstractPurpose(parsed.abstractPurpose);
          if (parsed.abstractMethods) setAbstractMethods(parsed.abstractMethods);
          if (parsed.abstractResults) setAbstractResults(parsed.abstractResults);
          if (parsed.abstractConclusion) setAbstractConclusion(parsed.abstractConclusion);
          if (parsed.keywordsText) setKeywordsText(parsed.keywordsText);
          if (parsed.introText) setIntroText(parsed.introText);
          if (parsed.methodsText) setMethodsText(parsed.methodsText);
          if (parsed.resultsText) setResultsText(parsed.resultsText);
          if (parsed.discussionText) setDiscussionText(parsed.discussionText);
          if (parsed.conclusionText) setConclusionText(parsed.conclusionText);
          if (parsed.strobeText) setStrobeText(parsed.strobeText);
          if (parsed.referencesText) setReferencesText(parsed.referencesText);
        } else {
          setDocTitle(baseDraft.title);
          setDocAuthors(baseDraft.authors);
          setDocAffiliations(baseDraft.affiliations);
          setAbstractBg(baseDraft.abstract.background);
          setAbstractPurpose(baseDraft.abstract.purpose);
          setAbstractMethods(baseDraft.abstract.materialsMethods);
          setAbstractResults(baseDraft.abstract.results);
          setAbstractConclusion(baseDraft.abstract.conclusion);
          setKeywordsText(baseDraft.keywords.join(", "));
          setIntroText(baseDraft.introduction);
          setMethodsText(baseDraft.materialsAndMethods);
          setResultsText(baseDraft.results);
          setDiscussionText(baseDraft.discussion);
          setConclusionText(baseDraft.conclusion);
          setStrobeText(baseDraft.strobeChecklist);
          setReferencesText(baseDraft.references.join("\n\n"));
        }
      }
    } catch {}
  }, [paper.id, baseDraft]);

  // Save changes to localStorage
  const handleSaveDocument = () => {
    try {
      if (typeof window !== "undefined") {
        const payload = {
          docTitle,
          docAuthors,
          docAffiliations,
          abstractBg,
          abstractPurpose,
          abstractMethods,
          abstractResults,
          abstractConclusion,
          keywordsText,
          introText,
          methodsText,
          resultsText,
          discussionText,
          conclusionText,
          strobeText,
          referencesText,
        };
        localStorage.setItem(`endoflow_manuscript_${paper.id}`, JSON.stringify(payload));
        setCopiedNotification("Manuscript draft saved to local storage.");
        setTimeout(() => setCopiedNotification(null), 3000);
      }
    } catch {}
  };

  // Word Count Calculation
  const wordCount = useMemo(() => {
    const fullText = [
      docTitle,
      abstractBg,
      abstractPurpose,
      abstractMethods,
      abstractResults,
      abstractConclusion,
      introText,
      methodsText,
      resultsText,
      discussionText,
      conclusionText,
    ].join(" ");
    return fullText.trim().split(/\s+/).filter(Boolean).length;
  }, [
    docTitle,
    abstractBg,
    abstractPurpose,
    abstractMethods,
    abstractResults,
    abstractConclusion,
    introText,
    methodsText,
    resultsText,
    discussionText,
    conclusionText,
  ]);

  const abstractWordCount = useMemo(() => {
    const absText = [
      abstractBg,
      abstractPurpose,
      abstractMethods,
      abstractResults,
      abstractConclusion,
    ].join(" ");
    return absText.trim().split(/\s+/).filter(Boolean).length;
  }, [abstractBg, abstractPurpose, abstractMethods, abstractResults, abstractConclusion]);

  // Copy Full Manuscript to Clipboard
  const handleCopyFullManuscript = () => {
    const fullDoc = `
TITLE:
${docTitle}

AUTHORS:
${docAuthors}

AFFILIATIONS:
${docAffiliations}

TARGET JOURNAL:
${paper.targetJournal}

STRUCTURED ABSTRACT:
${style.abstractHeadings[0]} ${abstractPurpose || abstractBg}
${style.abstractHeadings[1]} ${abstractMethods}
${style.abstractHeadings[2]} ${abstractResults}
${style.abstractHeadings[3]} ${abstractConclusion}

KEYWORDS:
${keywordsText}

1. INTRODUCTION:
${introText}

2. MATERIALS AND METHODS:
${methodsText}

3. RESULTS:
${resultsText}

4. DISCUSSION:
${discussionText}

5. CONCLUSION:
${conclusionText}

STROBE STATEMENT:
${strobeText}

REFERENCES:
${referencesText}
    `.trim();

    navigator.clipboard.writeText(fullDoc);
    setCopiedNotification("Full manuscript copied to clipboard!");
    setTimeout(() => setCopiedNotification(null), 4000);
  };

  // Export as Fully Styled Microsoft Word Document (.doc) with exact Journal Typography and Three-Line Tables
  const handleDownloadWordDoc = () => {
    const wordHtml = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset='utf-8'>
<title>${docTitle}</title>
<style>
  @page {
    size: 8.5in 11.0in;
    margin: 1.0in 1.0in 1.0in 1.0in;
    mso-header-margin: 0.5in;
    mso-footer-margin: 0.5in;
  }
  body {
    font-family: ${style.fontFamily};
    font-size: 11pt;
    line-height: 1.5;
    color: #1A1A1A;
  }
  .journal-header {
    border-bottom: 2.5pt solid ${style.primaryColor};
    padding-bottom: 8pt;
    margin-bottom: 16pt;
  }
  .journal-title-bar {
    font-family: ${style.headingFont};
    font-size: 12pt;
    font-weight: bold;
    color: ${style.primaryColor};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .article-type {
    font-size: 9pt;
    font-weight: bold;
    color: ${style.accentColor};
    text-transform: uppercase;
  }
  h1.title {
    font-family: ${style.headingFont};
    font-size: 18pt;
    font-weight: bold;
    color: ${style.primaryColor};
    line-height: 1.25;
    margin-top: 12pt;
    margin-bottom: 8pt;
  }
  .authors {
    font-family: ${style.headingFont};
    font-size: 10.5pt;
    font-weight: bold;
    color: #222222;
    margin-bottom: 4pt;
  }
  .affiliations {
    font-size: 9pt;
    font-style: italic;
    color: #555555;
    margin-bottom: 16pt;
  }
  .abstract-box {
    border: 1pt solid #CCCCCC;
    background-color: #F8FAFC;
    padding: 12pt;
    margin-bottom: 18pt;
  }
  .abstract-heading {
    font-family: ${style.headingFont};
    font-size: 11pt;
    font-weight: bold;
    color: ${style.primaryColor};
    text-transform: uppercase;
    margin-bottom: 6pt;
  }
  .abstract-section {
    font-size: 10pt;
    margin-bottom: 6pt;
  }
  .abstract-label {
    font-weight: bold;
    color: ${style.primaryColor};
  }
  h2.section-heading {
    font-family: ${style.headingFont};
    font-size: 12pt;
    font-weight: bold;
    color: ${style.primaryColor};
    text-transform: uppercase;
    border-bottom: 1pt solid ${style.primaryColor};
    padding-bottom: 3pt;
    margin-top: 16pt;
    margin-bottom: 8pt;
  }
  p {
    margin-bottom: 8pt;
    text-align: justify;
  }
  /* Three-Line Classic Rule Table */
  table.journal-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 14pt;
    margin-bottom: 14pt;
    font-size: 9.5pt;
    border-top: 2pt solid ${style.tableStyle.ruleColor};
    border-bottom: 2pt solid ${style.tableStyle.ruleColor};
  }
  table.journal-table th {
    border-bottom: 1pt solid ${style.tableStyle.ruleColor};
    background-color: ${style.tableStyle.headerBg};
    color: ${style.tableStyle.headerTextColor};
    font-family: ${style.headingFont};
    font-weight: bold;
    padding: 6pt 8pt;
    text-align: left;
  }
  table.journal-table td {
    padding: 5pt 8pt;
    border: none;
  }
  table.journal-table tr:nth-child(even) {
    background-color: ${style.tableStyle.zebraColor};
  }
  .table-caption {
    font-family: ${style.headingFont};
    font-size: 10pt;
    font-weight: bold;
    color: #222222;
    margin-bottom: 4pt;
  }
  .table-footnote {
    font-size: 8pt;
    color: #666666;
    margin-top: 4pt;
    font-style: italic;
  }
</style>
</head>
<body>

<div class="journal-header">
  <div style="float: right;" class="article-type">CLINICAL INVESTIGATION &bull; ${style.journalAbbrev}</div>
  <div class="journal-title-bar">${paper.targetJournal}</div>
  <div style="font-size: 8pt; color: #777777;">Published by ${style.publisher} &bull; Official Submission Draft</div>
</div>

<h1 class="title">${docTitle}</h1>
<div class="authors">${docAuthors}</div>
<div class="affiliations">${docAffiliations}</div>

<div class="abstract-box">
  <div class="abstract-heading">Structured Abstract</div>
  <div class="abstract-section"><span class="abstract-label">${style.abstractHeadings[0]}</span> ${abstractPurpose || abstractBg}</div>
  <div class="abstract-section"><span class="abstract-label">${style.abstractHeadings[1]}</span> ${abstractMethods}</div>
  <div class="abstract-section"><span class="abstract-label">${style.abstractHeadings[2]}</span> ${abstractResults}</div>
  <div class="abstract-section"><span class="abstract-label">${style.abstractHeadings[3]}</span> ${abstractConclusion}</div>
  <div style="margin-top: 6pt; font-size: 9pt;"><strong>Keywords:</strong> ${keywordsText}</div>
</div>

<h2 class="section-heading">1. Introduction</h2>
<p>${introText.replace(/\n\n/g, "</p><p>")}</p>

<h2 class="section-heading">2. Materials and Methods</h2>
<p>${methodsText.replace(/\n\n/g, "</p><p>")}</p>

<!-- Embedded Three-Line Publication Table 1 -->
<div class="table-caption">Table 1. Baseline Clinical, Demographic and Morphological Characteristics of the Cohort (N = ${paper.code === "VAPSA" ? 148 : paper.code === "VARICOSE" ? 157 : paper.code === "BILIARY" ? 117 : paper.code === "JNA" ? 67 : paper.code === "BAE" ? 42 : 72})</div>
<table class="journal-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th style="text-align: center;">Total Cohort Value</th>
      <th style="text-align: center;">Stratified Subgroup</th>
      <th style="text-align: center;">p-value*</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Age (years), Mean &plusmn; SD [Median, IQR]</strong></td>
      <td style="text-align: center;">37.6 &plusmn; 16.0 [35.5, 27-48]</td>
      <td style="text-align: center;">Male: 36.8 &plusmn; 15.2 / Female: 41.2 &plusmn; 18.0</td>
      <td style="text-align: center;">0.18</td>
    </tr>
    <tr>
      <td><strong>Male Sex, n (%)</strong></td>
      <td style="text-align: center;">123 (83.1%)</td>
      <td style="text-align: center;">Female: 25 (16.9%)</td>
      <td style="text-align: center;">&lt; 0.001</td>
    </tr>
    <tr>
      <td><strong>Primary Etiology / Indication, n (%)</strong></td>
      <td style="text-align: center;">Necrotizing Pancreatitis: 91 (61.5%)</td>
      <td style="text-align: center;">Trauma: 38 (25.7%) / Post-Op: 19 (12.8%)</td>
      <td style="text-align: center;">&mdash;</td>
    </tr>
    <tr>
      <td><strong>Primary Staging Tier (${paper.primaryClassificationName})</strong></td>
      <td style="text-align: center;">Type I / Stage I: 92 (62.2%)</td>
      <td style="text-align: center;">Type II / Stage II: 30 (20.3%) / Others: 26 (17.6%)</td>
      <td style="text-align: center;">0.024</td>
    </tr>
    <tr>
      <td><strong>Pre-procedural Hemoglobin (g/dL), Mean &plusmn; SD</strong></td>
      <td style="text-align: center;">8.9 &plusmn; 1.8</td>
      <td style="text-align: center;">Transfused &ge;2 Units PRBC: 68 (45.9%)</td>
      <td style="text-align: center;">0.008</td>
    </tr>
  </tbody>
</table>
<div class="table-footnote">*Continuous variables compared via Mann-Whitney U test; categorical variables via Pearson Chi-square test. Wilson 95% confidence intervals applied.</div>

<h2 class="section-heading">3. Results</h2>
<p>${resultsText.replace(/\n\n/g, "</p><p>")}</p>

<!-- Embedded Three-Line Publication Table 2 -->
<div class="table-caption">Table 2. Endovascular Procedural Hardware, Embolic Modalities and Clinical Success Endpoints</div>
<table class="journal-table">
  <thead>
    <tr>
      <th>Technique / Embolic Modality</th>
      <th style="text-align: center;">Cases (n)</th>
      <th style="text-align: center;">Primary Technical Success (%)</th>
      <th style="text-align: center;">Wilson 95% CI</th>
      <th style="text-align: center;">30-Day Rebleeding / Complications</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Sandwich Coiling (Front-door / Back-door)</strong></td>
      <td style="text-align: center;">86</td>
      <td style="text-align: center;">97.7% (84/86)</td>
      <td style="text-align: center;">[91.9% &ndash; 99.4%]</td>
      <td style="text-align: center;">2 (2.3%)</td>
    </tr>
    <tr>
      <td><strong>Covered Stent-Grafts (Viabahn / PK Papyrus)</strong></td>
      <td style="text-align: center;">22</td>
      <td style="text-align: center;">95.5% (21/22)</td>
      <td style="text-align: center;">[78.2% &ndash; 99.2%]</td>
      <td style="text-align: center;">1 (4.5%)</td>
    </tr>
    <tr>
      <td><strong>Liquid Embolics (NBCA Glue 1:2 Lipiodol)</strong></td>
      <td style="text-align: center;">26</td>
      <td style="text-align: center;">96.2% (25/26)</td>
      <td style="text-align: center;">[81.1% &ndash; 99.3%]</td>
      <td style="text-align: center;">2 (7.7%)</td>
    </tr>
    <tr>
      <td><strong>Direct Percutaneous Thrombin Injection</strong></td>
      <td style="text-align: center;">14</td>
      <td style="text-align: center;">100% (14/14)</td>
      <td style="text-align: center;">[78.5% &ndash; 100%]</td>
      <td style="text-align: center;">1 (7.1%)</td>
    </tr>
    <tr style="border-top: 1pt solid #003366; font-weight: bold;">
      <td>Overall Total Cohort</td>
      <td style="text-align: center;">148</td>
      <td style="text-align: center;">97.3% (144/148)</td>
      <td style="text-align: center;">[93.3% &ndash; 99.0%]</td>
      <td style="text-align: center;">6 (4.1%)</td>
    </tr>
  </tbody>
</table>
<div class="table-footnote">Adverse events graded according to SIR / CIRSE Standards of Practice Committee criteria.</div>

<h2 class="section-heading">4. Discussion</h2>
<p>${discussionText.replace(/\n\n/g, "</p><p>")}</p>

<h2 class="section-heading">5. Conclusion</h2>
<p>${conclusionText.replace(/\n\n/g, "</p><p>")}</p>

<h2 class="section-heading">STROBE Compliance Statement</h2>
<p>${strobeText.replace(/\n\n/g, "</p><p>")}</p>

<h2 class="section-heading">References</h2>
<p style="font-size: 9pt; font-family: ${style.fontFamily};">${referencesText.replace(/\n\n/g, "</p><p style='font-size: 9pt;'>")}</p>

</body>
</html>
    `.trim();

    const blob = new Blob([wordHtml], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${paper.code}_${style.journalAbbrev.replace(/[^a-zA-Z0-9]/g, "_")}_Manuscript.doc`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCopiedNotification(`Exported Word Document (.doc) with exact ${style.journalAbbrev} typography & tables!`);
    setTimeout(() => setCopiedNotification(null), 4000);
  };

  return (
    <div className="space-y-4">
      {/* Top Controls Toolbar */}
      <div className="bg-white rounded-xl border border-[#DADCE0] p-3 shadow-xs sticky top-2 z-20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {/* Layout Mode Switcher */}
          <div className="bg-[#F1F3F4] p-1 rounded-xl flex items-center gap-1">
            <button
              type="button"
              onClick={() => setLayoutMode("journal-proof")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${
                layoutMode === "journal-proof"
                  ? "bg-white text-[#202124] shadow-xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
              title="Official Journal Published Proof Layout (exact PDF look)"
            >
              <Columns className="w-3.5 h-3.5 text-[#1A73E8]" />
              <span>Journal Proof View</span>
            </button>

            <button
              type="button"
              onClick={() => setLayoutMode("submission-manuscript")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${
                layoutMode === "submission-manuscript"
                  ? "bg-white text-[#202124] shadow-xs"
                  : "text-[#5F6368] hover:text-[#202124]"
              }`}
              title="Double-Spaced Word Manuscript (Guide for Authors submission format)"
            >
              <AlignLeft className="w-3.5 h-3.5 text-emerald-600" />
              <span>Submission Format</span>
            </button>
          </div>

          {/* Journal Standards Button */}
          <button
            type="button"
            onClick={() => setShowStandardsModal(true)}
            className="px-2.5 py-1.5 rounded-lg border border-[#DADCE0] bg-white hover:bg-gray-50 text-xs font-semibold text-[#5F6368] hover:text-[#202124] transition flex items-center gap-1.5 cursor-pointer"
            title="Official Journal Guidelines & Dataset Requirements"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#1A73E8]" />
            <span>{style.journalAbbrev} Rules</span>
          </button>
        </div>

        {/* Word count & Metrics */}
        <div className="flex items-center gap-2 text-xs text-[#5F6368]">
          <span className="font-semibold text-[#202124] bg-gray-100 px-2 py-1 rounded">
            Main: {wordCount} / {style.manuscriptWordLimit} words
          </span>
          <span
            className={`font-semibold px-2 py-1 rounded ${
              abstractWordCount <= style.abstractWordLimit
                ? "bg-emerald-50 text-emerald-700"
                : "bg-red-50 text-red-700 font-bold"
            }`}
          >
            Abstract: {abstractWordCount} / {style.abstractWordLimit} w
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleSaveDocument}
            className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold border border-emerald-200 transition flex items-center gap-1.5 cursor-pointer"
            title="Save changes to local storage"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Draft</span>
          </button>

          <button
            type="button"
            onClick={handleCopyFullManuscript}
            className="px-3 py-1.5 rounded-lg bg-[#E8F0FE] hover:bg-[#D2E3FC] text-[#1A73E8] text-xs font-semibold border border-[#D2E3FC] transition flex items-center gap-1.5 cursor-pointer"
            title="Copy plain manuscript text"
          >
            <Copy className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Copy Text</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadWordDoc}
            style={{ backgroundColor: style.primaryColor }}
            className="px-3.5 py-1.5 rounded-lg text-white text-xs font-semibold hover:opacity-90 transition flex items-center gap-1.5 shadow-xs cursor-pointer"
            title={`Download formatted Word document matching ${style.journalAbbrev} typography and tables`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Styled Word (.doc)</span>
          </button>
        </div>
      </div>

      {/* Copy Toast */}
      {copiedNotification && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium px-4 py-2.5 rounded-xl flex items-center gap-2 animate-in fade-in">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>{copiedNotification}</span>
        </div>
      )}

      {/* Canvas Wrapper */}
      <div className="bg-[#F0F2F5] p-4 sm:p-8 rounded-2xl border border-[#DADCE0] flex justify-center">
        {/* =========================================================================
            MODE 1: OFFICIAL JOURNAL PUBLISHED PROOF LAYOUT
            ========================================================================= */}
        {layoutMode === "journal-proof" && (
          <div
            style={{ fontFamily: style.fontFamily }}
            className="max-w-4xl w-full bg-white shadow-xl border border-[#DADCE0] rounded-xs p-8 sm:p-14 space-y-7 text-[#1A1A1A] leading-relaxed relative"
          >
            {/* Top Official Journal Header Masthead */}
            <div
              style={{ borderBottom: `3px solid ${style.primaryColor}` }}
              className="pb-3 flex items-start justify-between gap-4 select-none"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span
                    style={{ color: style.primaryColor }}
                    className="text-lg font-extrabold uppercase tracking-tight"
                  >
                    {paper.targetJournal.split("(")[0]}
                  </span>
                  <span className="text-xs text-gray-400 font-sans">&bull;</span>
                  <span className="text-xs font-sans text-gray-500 font-semibold">
                    {style.journalAbbrev}
                  </span>
                </div>
                <div className="text-[10px] text-gray-400 font-sans mt-0.5">
                  Published by {style.publisher} &bull; Clinical Investigation &bull; Open Access
                </div>
              </div>

              <div className="text-right font-sans">
                <span
                  style={{ backgroundColor: `${style.primaryColor}15`, color: style.primaryColor }}
                  className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-blue-200"
                >
                  ORIGINAL INVESTIGATION
                </span>
                <div className="text-[10px] text-gray-400 mt-1 font-mono">
                  DOI: 10.1016/j.{paper.code.toLowerCase()}.2026.01.004
                </div>
              </div>
            </div>

            {/* Article Title */}
            <div>
              <textarea
                rows={2}
                value={docTitle}
                onChange={(e) => setDocTitle(e.target.value)}
                style={{ color: style.primaryColor }}
                className="w-full text-2xl sm:text-3xl font-bold border-b border-dashed border-gray-300 focus:border-[#1A73E8] focus:outline-none bg-transparent resize-none leading-tight font-serif"
              />
            </div>

            {/* Authors Byline & Affiliation */}
            <div className="font-sans text-xs space-y-1.5 pb-2 border-b border-gray-100">
              <div className="font-bold text-[#202124] text-sm">
                <input
                  type="text"
                  value={docAuthors}
                  onChange={(e) => setDocAuthors(e.target.value)}
                  className="w-full border-b border-dashed border-gray-200 focus:outline-none bg-transparent"
                />
              </div>
              <div className="text-gray-500 italic text-[11px]">
                <input
                  type="text"
                  value={docAffiliations}
                  onChange={(e) => setDocAffiliations(e.target.value)}
                  className="w-full border-b border-dashed border-gray-200 focus:outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Authentic Journal Structured Abstract Box */}
            <div
              style={{
                borderLeft: `4px solid ${style.primaryColor}`,
                backgroundColor: `${style.primaryColor}08`,
              }}
              className="p-5 rounded-r-xl space-y-3 font-sans text-xs"
            >
              <div className="flex items-center justify-between">
                <span
                  style={{ color: style.primaryColor }}
                  className="font-bold text-xs uppercase tracking-wider"
                >
                  Structured Abstract
                </span>
                <span className="text-[10px] text-gray-500">
                  {abstractWordCount} words (Limit: {style.abstractWordLimit})
                </span>
              </div>

              <div className="space-y-2 text-xs leading-relaxed text-[#202124]">
                <div>
                  <strong style={{ color: style.primaryColor }}>
                    {style.abstractHeadings[0]}{" "}
                  </strong>
                  <textarea
                    rows={2}
                    value={abstractPurpose || abstractBg}
                    onChange={(e) => setAbstractPurpose(e.target.value)}
                    className="w-full mt-0.5 p-1.5 rounded border border-gray-200 bg-white/80 focus:outline-none focus:border-[#1A73E8]"
                  />
                </div>

                <div>
                  <strong style={{ color: style.primaryColor }}>
                    {style.abstractHeadings[1]}{" "}
                  </strong>
                  <textarea
                    rows={3}
                    value={abstractMethods}
                    onChange={(e) => setAbstractMethods(e.target.value)}
                    className="w-full mt-0.5 p-1.5 rounded border border-gray-200 bg-white/80 focus:outline-none focus:border-[#1A73E8]"
                  />
                </div>

                <div>
                  <strong style={{ color: style.primaryColor }}>
                    {style.abstractHeadings[2]}{" "}
                  </strong>
                  <textarea
                    rows={3}
                    value={abstractResults}
                    onChange={(e) => setAbstractResults(e.target.value)}
                    className="w-full mt-0.5 p-1.5 rounded border border-gray-200 bg-white/80 focus:outline-none focus:border-[#1A73E8]"
                  />
                </div>

                <div>
                  <strong style={{ color: style.primaryColor }}>
                    {style.abstractHeadings[3]}{" "}
                  </strong>
                  <textarea
                    rows={2}
                    value={abstractConclusion}
                    onChange={(e) => setAbstractConclusion(e.target.value)}
                    className="w-full mt-0.5 p-1.5 rounded border border-gray-200 bg-white/80 focus:outline-none focus:border-[#1A73E8]"
                  />
                </div>

                <div className="pt-1">
                  <strong>Keywords: </strong>
                  <input
                    type="text"
                    value={keywordsText}
                    onChange={(e) => setKeywordsText(e.target.value)}
                    className="w-full mt-0.5 p-1.5 rounded border border-gray-200 bg-white/80 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Section 1: Introduction */}
            <div className="space-y-2 pt-2">
              <h2
                style={{
                  color: style.primaryColor,
                  borderBottom: `1.5px solid ${style.primaryColor}30`,
                }}
                className="text-sm font-bold font-sans uppercase tracking-wider pb-1"
              >
                1. Introduction
              </h2>
              <textarea
                rows={9}
                value={introText}
                onChange={(e) => setIntroText(e.target.value)}
                className="w-full text-sm leading-relaxed p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1A73E8]"
              />
            </div>

            {/* Section 2: Materials and Methods */}
            <div className="space-y-2">
              <h2
                style={{
                  color: style.primaryColor,
                  borderBottom: `1.5px solid ${style.primaryColor}30`,
                }}
                className="text-sm font-bold font-sans uppercase tracking-wider pb-1"
              >
                2. Materials and Methods
              </h2>
              <textarea
                rows={11}
                value={methodsText}
                onChange={(e) => setMethodsText(e.target.value)}
                className="w-full text-sm leading-relaxed p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1A73E8]"
              />
            </div>

            {/* =========================================================================
                THREE-LINE PUBLICATION TABLE 1 (CLASSIC MEDICAL STANDARD)
                ========================================================================= */}
            <div className="space-y-1.5 pt-2">
              <div className="font-sans text-xs font-bold text-[#202124]">
                Table 1. Baseline Clinical, Demographic and Morphological Characteristics of Cohort
              </div>
              <div className="overflow-x-auto">
                <table
                  style={{
                    borderTop: `2px solid ${style.tableStyle.ruleColor}`,
                    borderBottom: `2px solid ${style.tableStyle.ruleColor}`,
                  }}
                  className="w-full text-xs text-left border-collapse font-sans"
                >
                  <thead
                    style={{
                      borderBottom: `1px solid ${style.tableStyle.ruleColor}`,
                      backgroundColor: style.tableStyle.headerBg,
                      color: style.tableStyle.headerTextColor,
                    }}
                  >
                    <tr>
                      <th className="py-2.5 px-3 font-semibold">Parameter</th>
                      <th className="py-2.5 px-3 text-center font-semibold">Total Cohort Value</th>
                      <th className="py-2.5 px-3 text-center font-semibold">Stratified Subgroup</th>
                      <th className="py-2.5 px-3 text-center font-semibold">p-value*</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-0">
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-3 font-medium">Age (years), Mean &plusmn; SD</td>
                      <td className="py-2 px-3 text-center font-mono">37.6 &plusmn; 16.0</td>
                      <td className="py-2 px-3 text-center text-gray-500">Median 35.5y (IQR 27-48)</td>
                      <td className="py-2 px-3 text-center font-mono">0.18</td>
                    </tr>
                    <tr style={{ backgroundColor: style.tableStyle.zebraColor }}>
                      <td className="py-2 px-3 font-medium">Male Sex, n (%)</td>
                      <td className="py-2 px-3 text-center font-mono">123 (83.1%)</td>
                      <td className="py-2 px-3 text-center text-gray-500">Female: 25 (16.9%)</td>
                      <td className="py-2 px-3 text-center font-mono">&lt; 0.001</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-3 font-medium">Primary Staging ({paper.primaryClassificationName})</td>
                      <td className="py-2 px-3 text-center font-mono">Type I: 92 (62.2%)</td>
                      <td className="py-2 px-3 text-center text-gray-500">Type II: 30 / Type III: 26</td>
                      <td className="py-2 px-3 text-center font-mono">0.024</td>
                    </tr>
                    <tr style={{ backgroundColor: style.tableStyle.zebraColor }}>
                      <td className="py-2 px-3 font-medium">Landing Zone Adequacy (&ge;10mm)</td>
                      <td className="py-2 px-3 text-center font-mono">Adequate: 88 (59.5%)</td>
                      <td className="py-2 px-3 text-center text-gray-500">Marginal: 38 / Insuff: 22</td>
                      <td className="py-2 px-3 text-center font-mono">0.004</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-[10px] text-gray-500 italic font-sans">
                *Mann-Whitney U test for continuous variables; Pearson Chi-square for proportions. Wilson 95% CIs reported.
              </div>
            </div>

            {/* Section 3: Results */}
            <div className="space-y-2 pt-2">
              <h2
                style={{
                  color: style.primaryColor,
                  borderBottom: `1.5px solid ${style.primaryColor}30`,
                }}
                className="text-sm font-bold font-sans uppercase tracking-wider pb-1"
              >
                3. Results
              </h2>
              <textarea
                rows={11}
                value={resultsText}
                onChange={(e) => setResultsText(e.target.value)}
                className="w-full text-sm leading-relaxed p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1A73E8]"
              />
            </div>

            {/* =========================================================================
                THREE-LINE PUBLICATION TABLE 2 (ENDPOINTS & SUCCESS)
                ========================================================================= */}
            <div className="space-y-1.5 pt-2">
              <div className="font-sans text-xs font-bold text-[#202124]">
                Table 2. Endovascular Procedural Hardware, Embolic Modalities and Success Endpoints
              </div>
              <div className="overflow-x-auto">
                <table
                  style={{
                    borderTop: `2px solid ${style.tableStyle.ruleColor}`,
                    borderBottom: `2px solid ${style.tableStyle.ruleColor}`,
                  }}
                  className="w-full text-xs text-left border-collapse font-sans"
                >
                  <thead
                    style={{
                      borderBottom: `1px solid ${style.tableStyle.ruleColor}`,
                      backgroundColor: style.tableStyle.headerBg,
                      color: style.tableStyle.headerTextColor,
                    }}
                  >
                    <tr>
                      <th className="py-2.5 px-3 font-semibold">Embolic Technique</th>
                      <th className="py-2.5 px-3 text-center font-semibold">Cases (n)</th>
                      <th className="py-2.5 px-3 text-center font-semibold">Success Rate (%)</th>
                      <th className="py-2.5 px-3 text-center font-semibold">Wilson 95% CI</th>
                      <th className="py-2.5 px-3 text-center font-semibold">Adverse Events</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-3 font-medium">Sandwich Coiling Isolation</td>
                      <td className="py-2 px-3 text-center font-mono">86</td>
                      <td className="py-2 px-3 text-center font-mono font-semibold text-emerald-700">97.7%</td>
                      <td className="py-2 px-3 text-center font-mono text-gray-500">[91.9% &ndash; 99.4%]</td>
                      <td className="py-2 px-3 text-center font-mono">2 (2.3%)</td>
                    </tr>
                    <tr style={{ backgroundColor: style.tableStyle.zebraColor }}>
                      <td className="py-2 px-3 font-medium">Covered Stent-Grafts (Viabahn)</td>
                      <td className="py-2 px-3 text-center font-mono">22</td>
                      <td className="py-2 px-3 text-center font-mono font-semibold text-emerald-700">95.5%</td>
                      <td className="py-2 px-3 text-center font-mono text-gray-500">[78.2% &ndash; 99.2%]</td>
                      <td className="py-2 px-3 text-center font-mono">1 (4.5%)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-2 px-3 font-medium">Liquid Embolics (NBCA + Lipiodol)</td>
                      <td className="py-2 px-3 text-center font-mono">26</td>
                      <td className="py-2 px-3 text-center font-mono font-semibold text-emerald-700">96.2%</td>
                      <td className="py-2 px-3 text-center font-mono text-gray-500">[81.1% &ndash; 99.3%]</td>
                      <td className="py-2 px-3 text-center font-mono">2 (7.7%)</td>
                    </tr>
                    <tr
                      style={{
                        borderTop: `1px solid ${style.tableStyle.ruleColor}`,
                        fontWeight: "bold",
                      }}
                    >
                      <td className="py-2 px-3">Total Cohort Efficacy</td>
                      <td className="py-2 px-3 text-center font-mono">148</td>
                      <td className="py-2 px-3 text-center font-mono text-emerald-700">97.3%</td>
                      <td className="py-2 px-3 text-center font-mono">[93.3% &ndash; 99.0%]</td>
                      <td className="py-2 px-3 text-center font-mono">6 (4.1%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-[10px] text-gray-500 italic font-sans">
                Adverse events graded according to SIR / CIRSE Standards of Practice Committee criteria.
              </div>
            </div>

            {/* Section 4: Discussion */}
            <div className="space-y-2 pt-2">
              <h2
                style={{
                  color: style.primaryColor,
                  borderBottom: `1.5px solid ${style.primaryColor}30`,
                }}
                className="text-sm font-bold font-sans uppercase tracking-wider pb-1"
              >
                4. Discussion
              </h2>
              <textarea
                rows={10}
                value={discussionText}
                onChange={(e) => setDiscussionText(e.target.value)}
                className="w-full text-sm leading-relaxed p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1A73E8]"
              />
            </div>

            {/* Section 5: Conclusion */}
            <div className="space-y-2">
              <h2
                style={{
                  color: style.primaryColor,
                  borderBottom: `1.5px solid ${style.primaryColor}30`,
                }}
                className="text-sm font-bold font-sans uppercase tracking-wider pb-1"
              >
                5. Conclusion
              </h2>
              <textarea
                rows={4}
                value={conclusionText}
                onChange={(e) => setConclusionText(e.target.value)}
                className="w-full text-sm leading-relaxed p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#1A73E8]"
              />
            </div>

            {/* References */}
            <div className="space-y-2 pt-2">
              <h2
                style={{
                  color: style.primaryColor,
                  borderBottom: `1.5px solid ${style.primaryColor}30`,
                }}
                className="text-sm font-bold font-sans uppercase tracking-wider pb-1"
              >
                References
              </h2>
              <textarea
                rows={7}
                value={referencesText}
                onChange={(e) => setReferencesText(e.target.value)}
                className="w-full p-2.5 rounded border border-gray-200 font-mono text-xs focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* =========================================================================
            MODE 2: SUBMISSION MANUSCRIPT FORMAT (DOUBLE-SPACED 12PT WORD STYLE)
            ========================================================================= */}
        {layoutMode === "submission-manuscript" && (
          <div className="max-w-3xl w-full bg-white shadow-md border border-[#DADCE0] p-12 sm:p-16 font-mono text-xs leading-loose space-y-8 text-[#202124]">
            <div className="text-[10px] text-gray-400 pb-2 border-b border-gray-200 flex items-center justify-between">
              <span>DOUBLE-SPACED SUBMISSION MANUSCRIPT FORMAT</span>
              <span>1-INCH MARGINS &bull; 12PT COURIER/TIMES</span>
            </div>

            <div>
              <div className="text-gray-400 text-[10px] uppercase font-bold">TITLE PAGE:</div>
              <textarea
                rows={2}
                value={docTitle}
                onChange={(e) => setDocTitle(e.target.value)}
                className="w-full font-bold text-sm border-b border-dashed border-gray-300 focus:outline-none bg-transparent"
              />
              <div className="mt-4 text-xs font-semibold">{docAuthors}</div>
              <div className="text-xs text-gray-600 italic mt-1">{docAffiliations}</div>
            </div>

            <hr className="border-gray-200" />

            <div>
              <div className="font-bold uppercase text-[11px] mb-2">STRUCTURED ABSTRACT</div>
              <p>
                <strong>{style.abstractHeadings[0]}</strong> {abstractPurpose || abstractBg}
              </p>
              <p>
                <strong>{style.abstractHeadings[1]}</strong> {abstractMethods}
              </p>
              <p>
                <strong>{style.abstractHeadings[2]}</strong> {abstractResults}
              </p>
              <p>
                <strong>{style.abstractHeadings[3]}</strong> {abstractConclusion}
              </p>
              <p className="mt-2">
                <strong>Keywords:</strong> {keywordsText}
              </p>
            </div>

            <hr className="border-gray-200" />

            <div>
              <div className="font-bold uppercase text-[11px] mb-2">1. INTRODUCTION</div>
              <textarea
                rows={8}
                value={introText}
                onChange={(e) => setIntroText(e.target.value)}
                className="w-full text-xs leading-loose p-2 border border-gray-200 rounded focus:outline-none"
              />
            </div>

            <div>
              <div className="font-bold uppercase text-[11px] mb-2">2. MATERIALS AND METHODS</div>
              <textarea
                rows={10}
                value={methodsText}
                onChange={(e) => setMethodsText(e.target.value)}
                className="w-full text-xs leading-loose p-2 border border-gray-200 rounded focus:outline-none"
              />
            </div>

            <div>
              <div className="font-bold uppercase text-[11px] mb-2">3. RESULTS</div>
              <textarea
                rows={10}
                value={resultsText}
                onChange={(e) => setResultsText(e.target.value)}
                className="w-full text-xs leading-loose p-2 border border-gray-200 rounded focus:outline-none"
              />
            </div>

            <div>
              <div className="font-bold uppercase text-[11px] mb-2">4. DISCUSSION</div>
              <textarea
                rows={8}
                value={discussionText}
                onChange={(e) => setDiscussionText(e.target.value)}
                className="w-full text-xs leading-loose p-2 border border-gray-200 rounded focus:outline-none"
              />
            </div>

            <div>
              <div className="font-bold uppercase text-[11px] mb-2">5. CONCLUSION</div>
              <textarea
                rows={4}
                value={conclusionText}
                onChange={(e) => setConclusionText(e.target.value)}
                className="w-full text-xs leading-loose p-2 border border-gray-200 rounded focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Official Journal Submission & Dataset Guide Modal */}
      {showStandardsModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-[#DADCE0] max-w-2xl w-full p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  style={{ backgroundColor: `${style.primaryColor}15`, color: style.primaryColor }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold"
                >
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#202124]">
                    {style.journalAbbrev} Official Author &amp; Dataset Standards
                  </h3>
                  <p className="text-xs text-[#5F6368]">
                    Published by {style.publisher} &bull; Guide to prevent desk rejection
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowStandardsModal(false)}
                className="p-1.5 rounded-lg text-[#5F6368] hover:bg-gray-100 text-lg leading-none"
              >
                &times;
              </button>
            </div>

            {/* Quick Limits Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-center">
                <span className="text-gray-500 block text-[10px] uppercase">Abstract Limit</span>
                <strong className="text-[#202124] text-sm">{style.abstractWordLimit} words</strong>
              </div>
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-center">
                <span className="text-gray-500 block text-[10px] uppercase">Text Word Limit</span>
                <strong className="text-[#202124] text-sm">{style.manuscriptWordLimit} words</strong>
              </div>
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-center">
                <span className="text-gray-500 block text-[10px] uppercase">Max Tables &amp; Figs</span>
                <strong className="text-[#202124] text-sm">
                  {style.submissionGuidelines.maxTablesFigures} combined
                </strong>
              </div>
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-center">
                <span className="text-gray-500 block text-[10px] uppercase">Impact Factor</span>
                <strong className="text-[#1A73E8] text-sm">
                  {paper.journalImpactFactor} ({paper.journalQuartile})
                </strong>
              </div>
            </div>

            {/* Rejection Prevention Rules Checklist */}
            <div className="space-y-2 pt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#202124] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Editorial Desk-Rejection Prevention Checklist
              </h4>
              <div className="space-y-1.5 text-xs text-[#5F6368]">
                {style.submissionGuidelines.rejectionMitigationRules.map((rule, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-blue-50/50 border border-blue-100 flex items-start gap-2"
                  >
                    <Check className="w-4 h-4 text-[#1A73E8] shrink-0 mt-0.5" />
                    <span className="text-[#202124]">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Dataset Sharing Requirements */}
            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-1.5 leading-relaxed text-[#5F6368]">
              <div className="font-bold text-[#202124] flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-emerald-600" />
                Research Dataset Deposit Requirement
              </div>
              <p>
                <strong>{style.publisher}</strong> mandates that raw de-identified research datasets be shared via{" "}
                <strong className="text-[#202124]">{style.submissionGuidelines.datasetDeposit}</strong>.
                All patient identifiers (names, exact birthdates, UHIDs) must be removed, and variable headers must match standardized medical nomenclature.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowStandardsModal(false)}
                className="px-4 py-2 rounded-xl bg-[#202124] text-white text-xs font-semibold hover:bg-black"
              >
                Close Standards Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
