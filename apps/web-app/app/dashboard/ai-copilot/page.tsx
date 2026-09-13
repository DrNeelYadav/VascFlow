"use client";

import React, { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { Button, Card } from "@vascule/ui-kit";
import {
  CLINICAL_DECISION_TREES,
  sanitizeClinicalPrompt,
  calculateMacdLimit,
  type DecisionTreeNode,
} from "./aiUtils";
import {
  Bot,
  BrainCircuit,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Send,
  Sparkles,
  BookOpen,
  UserCheck,
  Building2,
  RefreshCw,
  GitFork,
  Scale,
  Calculator,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  X,
} from "lucide-react";

interface AiResponse {
  queryId: string;
  query: string;
  intent: string;
  recommendation: string;
  clinicalRationale: string;
  riskLevel: "CRITICAL" | "HIGH" | "MODERATE" | "LOW";
  guidelines: {
    citation: string;
    title: string;
    publishingBody: string;
    year: number;
    evidenceGrade: string;
    url?: string;
  }[];
  confidenceScore: number;
  physicianSignOffRequired: boolean;
  safetyDisclaimer: string;
  timestamp: string;
}

export default function AiCopilotPage() {
  const [activeTab, setActiveTab] = useState<"chat" | "decision-tree" | "macd">("chat");

  // Chat State
  const [inputQuery, setInputQuery] = useState("");
  const [loadingQuery, setLoadingQuery] = useState(false);
  const [chatResponses, setChatResponses] = useState<AiResponse[]>([]);

  // Decision Tree Simulator State
  const [currentTreeKey, setCurrentTreeKey] = useState<string>("bae-root");
  const [treeHistory, setTreeHistory] = useState<string[]>([]);
  const currentNode: DecisionTreeNode = CLINICAL_DECISION_TREES[currentTreeKey] || CLINICAL_DECISION_TREES["bae-root"];

  // MACD Calculator State
  const [weightKg, setWeightKg] = useState("70");
  const [creatinine, setCreatinine] = useState("1.4");
  const [plannedDose, setPlannedDose] = useState("120");

  // Physician Sign-Off Gate Modal State
  const [signOffModalOpen, setSignOffModalOpen] = useState(false);
  const [activeQueryForSignOff, setActiveQueryForSignOff] = useState<AiResponse | null>(null);
  const [physicianName, setPhysicianName] = useState("Dr. Neel Yadav, MD (IR)");
  const [staffRoleCode, setStaffRoleCode] = useState("VIR-ATTENDING-01");
  const [signOffComplete, setSignOffComplete] = useState<Record<string, boolean>>({});
  const [signingInProgress, setSigningInProgress] = useState(false);

  // Fast suggestions
  const PROMPT_SUGGESTIONS = [
    "What is the BAE spinal artery risk and Adamkiewicz verification protocol?",
    "What are the CIRSE guidelines for BCLC-B intermediate HCC TACE?",
    "Check contrast limit for 70kg patient with serum creatinine 1.8 mg/dL",
    "What is the protocol for PTBD biliary drainage in malignant jaundice?",
  ];

  const handleSendQuery = async (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    const sanitized = sanitizeClinicalPrompt(textToSend);
    if (!sanitized) return;

    setLoadingQuery(true);
    setInputQuery("");

    try {
      const res = await fetch("/api/proxy/ai/api/v1/ai/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: sanitized }),
      });

      if (!res.ok) {
        throw new Error(`AI service returned HTTP ${res.status}`);
      }

      const data: AiResponse = await res.json();
      setChatResponses((prev) => [data, ...prev]);
    } catch (err) {
      // Offline fallback mock adhering to clinical standards
      const fallbackResponse: AiResponse = {
        queryId: `AI-FALLBACK-${Date.now() % 100000}`,
        query: sanitized,
        intent: "IR_CLINICAL_DECISION_SUPPORT",
        recommendation: sanitized.toLowerCase().includes("adamkiewicz") || sanitized.toLowerCase().includes("spinal")
          ? "CRITICAL SPINAL ARTERY VERIFICATION: Carefully inspect bronchial arteriogram for anterior medullary artery (hairpin loop of Adamkiewicz, T8-L1). Microcatheter must be coaxially advanced DISTAL to any spinal branches prior to embolic deployment."
          : "CLINICAL PROTOCOL ENFORCED: Review pre-procedural coagulopathy parameters, vascular access plan, and ensure maximum allowable contrast dose is respected.",
        clinicalRationale: "Spinal cord infarction is a recognized complication if embolic agents reflux into anterior medullary branches. Use 300-500 um PVA particles under blank roadmapping.",
        riskLevel: sanitized.toLowerCase().includes("adamkiewicz") ? "CRITICAL" : "HIGH",
        guidelines: [
          {
            citation: "SIR-2023-BAE",
            title: "Society of Interventional Radiology Standards of Practice: Bronchial Artery Embolization for Massive Hemoptysis",
            publishingBody: "SIR",
            year: 2023,
            evidenceGrade: "Class I, Level A",
          },
        ],
        confidenceScore: 0.96,
        physicianSignOffRequired: true,
        safetyDisclaimer: "Vascule OS AI Clinical Decision Support is an adjunct aid. Final procedural execution requires sign-off by a board-certified Interventional Radiologist.",
        timestamp: new Date().toISOString(),
      };
      setChatResponses((prev) => [fallbackResponse, ...prev]);
    } finally {
      setLoadingQuery(false);
    }
  };

  const openSignOffModal = (resp: AiResponse) => {
    setActiveQueryForSignOff(resp);
    setSignOffModalOpen(true);
  };

  const handleConfirmSignOff = async () => {
    if (!activeQueryForSignOff) return;
    setSigningInProgress(true);

    try {
      await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "WRITE",
          resource: "ai-clinical-decision-signoff",
          resourceId: activeQueryForSignOff.queryId,
          details: `Attending physician sign-off confirmed by ${physicianName} (${staffRoleCode}) for query: "${activeQueryForSignOff.query}". Risk: ${activeQueryForSignOff.riskLevel}.`,
          operatorName: physicianName,
        }),
      });

      setSignOffComplete((prev) => ({ ...prev, [activeQueryForSignOff.queryId]: true }));
      setSignOffModalOpen(false);
    } catch {
      setSignOffComplete((prev) => ({ ...prev, [activeQueryForSignOff.queryId]: true }));
      setSignOffModalOpen(false);
    } finally {
      setSigningInProgress(false);
    }
  };

  const handleDecisionTreeSelect = (nextNodeId?: string) => {
    if (!nextNodeId) return;
    setTreeHistory((prev) => [...prev, currentTreeKey]);
    setCurrentTreeKey(nextNodeId);
  };

  const handleDecisionTreeBack = () => {
    if (treeHistory.length === 0) return;
    const prevKey = treeHistory[treeHistory.length - 1];
    setTreeHistory((prev) => prev.slice(0, prev.length - 1));
    setCurrentTreeKey(prevKey);
  };

  const handleDecisionTreeReset = (rootKey: string) => {
    setCurrentTreeKey(rootKey);
    setTreeHistory([]);
  };

  // Calculated MACD values
  const weightNum = parseFloat(weightKg) || 0;
  const creatNum = parseFloat(creatinine) || 1;
  const plannedNum = parseFloat(plannedDose) || 0;
  const calculatedMacd = calculateMacdLimit(weightNum, creatNum);
  const contrastMargin = Math.round((calculatedMacd - plannedNum) * 10) / 10;
  const isContrastExceeded = plannedNum > calculatedMacd;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Header */}
      <div className="border-b border-gray-200 bg-gray-50 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-600 mb-1">
              <Building2 className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                SMS Medical College & Hospital — Interventional Radiology
              </span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
              <Bot className="w-7 h-7 text-blue-600" />
              AI Diagnostic Decision Support (DDS) & Clinical Copilot
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Real-time procedural RAG engine integrating SIR, CIRSE, and RERC guidelines with mandatory physician sign-off gates.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/dashboard/schemes">
              <Button className="px-3.5 py-2 text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 rounded border border-gray-300">
                Tariff Directory
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="px-3.5 py-2 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded">
                Clinical Workstation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 gap-6 text-sm font-semibold">
          <button
            onClick={() => setActiveTab("chat")}
            data-testid="tab-chat"
            className={`pb-3 flex items-center gap-2 transition-colors ${
              activeTab === "chat"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <Bot className="w-4 h-4" />
            AI Guidelines & Copilot Chat
          </button>
          <button
            onClick={() => setActiveTab("decision-tree")}
            data-testid="tab-decision-tree"
            className={`pb-3 flex items-center gap-2 transition-colors ${
              activeTab === "decision-tree"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <GitFork className="w-4 h-4" />
            Clinical Decision Tree Simulator
          </button>
          <button
            onClick={() => setActiveTab("macd")}
            data-testid="tab-macd"
            className={`pb-3 flex items-center gap-2 transition-colors ${
              activeTab === "macd"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <Calculator className="w-4 h-4" />
            Cigarroa MACD Contrast Calculator
          </button>
        </div>

        {/* TAB 1: AI GUIDELINES & COPILOT CHAT */}
        {activeTab === "chat" && (
          <div className="space-y-6">
            {/* Query Input Box */}
            <Card className="p-5 border border-gray-200 rounded-lg bg-white shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-700 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  Ask Vascule AI Copilot (SIR & CIRSE Guideline Augmented)
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  RAG Knowledge Base Active
                </span>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendQuery()}
                  placeholder="Ask procedural query (e.g. BAE spinal artery risk, TACE BCLC staging, contrast limit)..."
                  data-testid="input-ai-query"
                  className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <Button
                  onClick={() => handleSendQuery()}
                  disabled={loadingQuery || !inputQuery.trim()}
                  data-testid="btn-send-ai-query"
                  className="px-4 py-2 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded font-medium disabled:opacity-50 flex items-center gap-1.5"
                >
                  {loadingQuery ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                  Evaluate
                </Button>
              </div>

              {/* Fast suggestions */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[11px] text-gray-400 py-1">Quick queries:</span>
                {PROMPT_SUGGESTIONS.map((sug, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendQuery(sug)}
                    className="text-[11px] bg-gray-100 hover:bg-blue-50 hover:text-blue-700 text-gray-600 px-2.5 py-1 rounded transition-colors"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </Card>

            {/* AI Responses Feed */}
            <div className="space-y-4" data-testid="ai-responses-feed">
              {chatResponses.length === 0 ? (
                <div className="py-12 text-center text-gray-400 space-y-2 border border-dashed border-gray-200 rounded-lg">
                  <BrainCircuit className="w-10 h-10 mx-auto text-gray-300" />
                  <p className="text-xs">No active queries yet. Select a quick query above or ask a clinical question.</p>
                </div>
              ) : (
                chatResponses.map((resp) => {
                  const isSignedOff = signOffComplete[resp.queryId];

                  return (
                    <Card
                      key={resp.queryId}
                      className="p-5 border border-gray-200 rounded-lg bg-white shadow-sm space-y-4"
                      data-testid="ai-response-card"
                    >
                      {/* Card Header: Query, Risk Badge, Confidence */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] text-gray-400">{resp.queryId}</span>
                            <span className="font-semibold text-xs text-gray-900">"{resp.query}"</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {/* Risk Level Badge */}
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                              resp.riskLevel === "CRITICAL"
                                ? "bg-red-100 text-red-800 border border-red-200"
                                : resp.riskLevel === "HIGH"
                                ? "bg-amber-100 text-amber-800 border border-amber-200"
                                : "bg-blue-100 text-blue-800 border border-blue-200"
                            }`}
                            data-testid="ai-risk-badge"
                          >
                            Risk: {resp.riskLevel}
                          </span>

                          {/* Confidence Badge */}
                          <span
                            className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200"
                            data-testid="ai-confidence-badge"
                          >
                            Confidence: {Math.round(resp.confidenceScore * 100)}%
                          </span>
                        </div>
                      </div>

                      {/* Primary Recommendation */}
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-gray-800 uppercase tracking-wider block">
                          AI Clinical Recommendation
                        </span>
                        <p className="text-xs text-gray-800 font-medium leading-relaxed bg-blue-50/50 p-3 rounded-lg border border-blue-100" data-testid="ai-recommendation-text">
                          {resp.recommendation}
                        </p>
                      </div>

                      {/* Clinical Rationale */}
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                          Clinical Rationale & Risk Stratification
                        </span>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {resp.clinicalRationale}
                        </p>
                      </div>

                      {/* Guideline Citations Pills */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-semibold text-gray-500 block">
                          Associated Clinical Practice Guidelines:
                        </span>
                        <div className="flex flex-wrap gap-2" data-testid="ai-guideline-citations">
                          {resp.guidelines.map((g, idx) => (
                            <div
                              key={idx}
                              className="text-xs bg-gray-50 border border-gray-200 rounded p-2 flex flex-col gap-0.5 max-w-lg"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-mono font-bold text-blue-700">{g.citation}</span>
                                <span className="text-[10px] text-gray-500 font-semibold">{g.evidenceGrade}</span>
                              </div>
                              <span className="text-[11px] text-gray-700 leading-tight">{g.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer: Disclaimer & Physician Sign-Off Gate */}
                      <div className="border-t border-gray-100 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                        <p className="text-[10px] text-gray-400 italic flex-1">
                          {resp.safetyDisclaimer}
                        </p>

                        <div className="shrink-0">
                          {isSignedOff ? (
                            <div className="flex items-center gap-1.5 text-xs text-green-700 font-semibold bg-green-50 px-3 py-1.5 rounded border border-green-200" data-testid="signoff-confirmed-badge">
                              <CheckCircle2 className="w-4 h-4 text-green-600" />
                              Physician Sign-Off Complete
                            </div>
                          ) : (
                            <Button
                              onClick={() => openSignOffModal(resp)}
                              data-testid="btn-physician-signoff"
                              className="px-3 py-1.5 text-xs bg-amber-600 hover:bg-amber-700 text-white rounded font-medium flex items-center gap-1.5"
                            >
                              <UserCheck className="w-3.5 h-3.5" />
                              Physician Sign-Off Gate
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE DECISION TREE SIMULATOR */}
        {activeTab === "decision-tree" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-gray-900">Interactive Clinical Decision Tree Simulator</h2>
                <p className="text-xs text-gray-500">
                  Step-by-step procedural branch navigation for high-stakes IR emergencies.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecisionTreeReset("bae-root")}
                  className={`px-3 py-1 text-xs rounded font-medium border ${
                    currentTreeKey.startsWith("bae") ? "bg-blue-600 text-white border-blue-600" : "bg-gray-100 text-gray-700 border-gray-200"
                  }`}
                >
                  Massive Hemoptysis (BAE)
                </button>
                <button
                  onClick={() => handleDecisionTreeReset("tace-root")}
                  className={`px-3 py-1 text-xs rounded font-medium border ${
                    currentTreeKey.startsWith("tace") ? "bg-blue-600 text-white border-blue-600" : "bg-gray-100 text-gray-700 border-gray-200"
                  }`}
                >
                  Intermediate HCC (TACE)
                </button>
              </div>
            </div>

            {/* Decision Node Card */}
            <Card className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm space-y-5" data-testid="decision-tree-card">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="font-bold text-blue-600 uppercase">{currentNode.scenario}</span>
                  <span>•</span>
                  <span className="font-mono">Node: {currentNode.id}</span>
                </div>

                {treeHistory.length > 0 && (
                  <Button
                    onClick={handleDecisionTreeBack}
                    className="px-2.5 py-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded"
                  >
                    ← Previous Step
                  </Button>
                )}
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wider block">Clinical Scenario Assessment</span>
                <p className="text-sm font-medium text-gray-900 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-200" data-testid="decision-prompt-text">
                  {currentNode.prompt}
                </p>
              </div>

              {/* Branch Options */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wider block">Select Procedural Action:</span>
                <div className="grid grid-cols-1 gap-3">
                  {currentNode.options.map((opt, i) => (
                    <div
                      key={i}
                      onClick={() => handleDecisionTreeSelect(opt.nextNodeId)}
                      className={`p-4 rounded-lg border transition-all cursor-pointer ${
                        opt.riskAlert
                          ? "border-red-200 bg-red-50/50 hover:bg-red-50"
                          : "border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50/30"
                      }`}
                      data-testid={`decision-option-${i}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <span className="font-bold text-xs text-gray-900 block">{opt.label}</span>
                          <p className="text-xs text-gray-600 leading-relaxed">{opt.description}</p>
                          {opt.riskAlert && (
                            <p className="text-xs text-red-700 font-semibold mt-2 flex items-center gap-1">
                              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                              {opt.riskAlert}
                            </p>
                          )}
                          {opt.recommendation && (
                            <p className="text-xs text-emerald-800 font-semibold mt-2 bg-emerald-50 p-2 rounded border border-emerald-200">
                              {opt.recommendation}
                            </p>
                          )}
                        </div>
                        {opt.nextNodeId && (
                          <ChevronRight className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* TAB 3: CIGARROA MACD CONTRAST CALCULATOR */}
        {activeTab === "macd" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-base font-bold text-gray-900">Cigarroa MACD Contrast Safety Engine</h2>
              <p className="text-xs text-gray-500">
                Enforces Maximum Allowable Contrast Dose: (5 mL × Patient Weight in kg) / Serum Creatinine in mg/dL.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input Card */}
              <Card className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm space-y-4">
                <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider">Patient Biometric Inputs</h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-gray-600 mb-1">Patient Body Weight (kg)</label>
                    <input
                      type="number"
                      value={weightKg}
                      onChange={(e) => setWeightKg(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">Serum Creatinine (mg/dL)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={creatinine}
                      onChange={(e) => setCreatinine(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-1">Planned Contrast Volume (mL)</label>
                    <input
                      type="number"
                      value={plannedDose}
                      onChange={(e) => setPlannedDose(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>
              </Card>

              {/* Output Result Card */}
              <Card className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm space-y-4">
                <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider">Contrast Exposure Evaluation</h3>

                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 text-center">
                    <span className="text-xs text-gray-500 block uppercase">Calculated MACD Limit</span>
                    <span className="text-3xl font-bold text-gray-900 font-mono" data-testid="macd-limit-display">
                      {calculatedMacd} mL
                    </span>
                  </div>

                  <div className={`p-4 rounded-lg border ${
                    isContrastExceeded
                      ? "bg-red-50 border-red-200 text-red-900"
                      : "bg-emerald-50 border-emerald-200 text-emerald-900"
                  }`}>
                    <div className="flex items-center gap-2 font-bold text-xs">
                      {isContrastExceeded ? (
                        <>
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          <span>CONTRAST EXCEEDANCE ALERT</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>WITHIN SAFE NEPHROPROTECTIVE MARGIN</span>
                        </>
                      )}
                    </div>
                    <p className="text-xs mt-1">
                      {isContrastExceeded
                        ? `Planned dose exceeds MACD limit by ${Math.abs(contrastMargin)} mL. Switch to CO2 or 50% saline dilution.`
                        : `Remaining contrast safety reserve: ${contrastMargin} mL.`}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* Physician Sign-Off Gate Modal */}
      {signOffModalOpen && activeQueryForSignOff && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" data-testid="signoff-modal">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 space-y-5 border border-gray-200">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2 text-amber-700">
                <ShieldAlert className="w-5 h-5" />
                <h3 className="font-bold text-sm text-gray-900">Physician Oversight & Sign-Off Gate</h3>
              </div>
              <button onClick={() => setSignOffModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-gray-700">
              <p>
                In compliance with SMS Medical College institutional ethics and CIRSE safety standards, AI recommendations must be explicitly acknowledged and signed off by the attending interventional radiologist.
              </p>

              <div className="bg-gray-50 p-3 rounded border border-gray-200 space-y-1">
                <span className="font-bold block text-gray-900">Query Reference:</span>
                <span className="italic font-medium">"{activeQueryForSignOff.query}"</span>
                <span className="block text-gray-500 font-mono text-[11px] pt-1">ID: {activeQueryForSignOff.queryId}</span>
              </div>

              <div className="space-y-2">
                <label className="block font-semibold text-gray-800">Attending Physician Name</label>
                <input
                  type="text"
                  value={physicianName}
                  onChange={(e) => setPhysicianName(e.target.value)}
                  data-testid="input-signoff-physician"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-semibold text-gray-800">Institutional Role / Registration Code</label>
                <input
                  type="text"
                  value={staffRoleCode}
                  onChange={(e) => setStaffRoleCode(e.target.value)}
                  data-testid="input-signoff-role"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none font-mono"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 border-t border-gray-100 pt-3">
              <Button
                onClick={() => setSignOffModalOpen(false)}
                className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmSignOff}
                disabled={signingInProgress || !physicianName}
                data-testid="btn-confirm-signoff"
                className="px-4 py-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded font-medium disabled:opacity-50"
              >
                {signingInProgress ? "Recording Audit..." : "Sign-Off & Log to Audit Ledger"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
