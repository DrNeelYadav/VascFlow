"use client";

import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@vascule/ui-kit/card";
import { Button } from "@vascule/ui-kit/button";
import {
  MessageSquarePlus,
  Star,
  Monitor,
  Tablet,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  Send,
  RefreshCw,
} from "lucide-react";

interface FeedbackRecord {
  id: string;
  tenantId: string;
  staffName: string;
  roleTier: string;
  deviceType: "DESKTOP" | "TABLET" | "MOBILE";
  clinicalModule: string;
  workflowRating: number;
  uiClutterRating: number;
  feedbackText: string;
  category: string;
  priority: string;
  status: string;
  createdAt: string;
}

export default function ClinicalUatPage() {
  const [deviceType, setDeviceType] = useState<"DESKTOP" | "TABLET" | "MOBILE">("DESKTOP");
  const [clinicalModule, setClinicalModule] = useState("IMAGING_PACS");
  const [workflowRating, setWorkflowRating] = useState(5);
  const [uiClutterRating, setUiClutterRating] = useState(1);
  const [feedbackText, setFeedbackText] = useState("");
  const [category, setCategory] = useState("USABILITY");
  const [priority, setPriority] = useState("MEDIUM");
  const [staffName, setStaffName] = useState("Dr. Roy (Faculty IR)");
  const [roleTier, setRoleTier] = useState("Faculty");

  const [feedbacks, setFeedbacks] = useState<FeedbackRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const fetchFeedbacks = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/uat");
      if (res.ok) {
        const json = await res.json();
        setFeedbacks(json.data || []);
      }
    } catch {
      // Fallback
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;

    setIsSubmitting(true);
    setSubmissionSuccess(false);

    try {
      const res = await fetch("/api/uat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          staffName,
          roleTier,
          deviceType,
          clinicalModule,
          workflowRating,
          uiClutterRating,
          feedbackText,
          category,
          priority,
        }),
      });

      if (res.ok) {
        setFeedbackText("");
        setSubmissionSuccess(true);
        fetchFeedbacks();
        setTimeout(() => setSubmissionSuccess(false), 4000);
      }
    } catch {
      // Error handling
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded">
              PHASE 15
            </span>
            <span className="text-xs text-slate-400 font-mono">
              HIPAA & CLINICAL USER ACCEPTANCE TESTING (UAT)
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <MessageSquarePlus className="w-8 h-8 text-blue-500" />
            Clinical UAT & Workflow Quality Studio
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            SMS Medical College & Attached Hospitals — Interventional Radiology Feedback Console
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={fetchFeedbacks}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            Sync Submissions
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Feedback Ingestion Form (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="bg-slate-900/90 border-slate-800">
            <CardHeader>
              <CardTitle className="text-lg text-white flex items-center gap-2">
                <Send className="w-5 h-5 text-blue-400" />
                Submit Usability Assessment or Bug Report
              </CardTitle>
              <CardDescription className="text-slate-400">
                Log clinical workflow friction, UI clutter flags, or critical angio suite feature requests.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Clinician Attribution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                      Clinician Name / Title
                    </label>
                    <input
                      type="text"
                      value={staffName}
                      onChange={(e) => setStaffName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                      Governance Tier
                    </label>
                    <select
                      value={roleTier}
                      onChange={(e) => setRoleTier(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                    >
                      <option value="Faculty">Faculty IR / Consultant</option>
                      <option value="Resident">Senior Resident / Fellow</option>
                      <option value="Nursing">Cath Lab Nurse Coordinator</option>
                      <option value="Technician">Radiographer / Technician</option>
                      <option value="Administrative">Hospital Administrator</option>
                    </select>
                  </div>
                </div>

                {/* Device Type Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2">
                    Operating Environment / Device
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { type: "DESKTOP", icon: Monitor, label: "Cath Lab Desktop" },
                      { type: "TABLET", icon: Tablet, label: "Angio iPad/Tablet" },
                      { type: "MOBILE", icon: Smartphone, label: "Mobile Rounds" },
                    ].map((d) => {
                      const Icon = d.icon;
                      const active = deviceType === d.type;
                      return (
                        <button
                          key={d.type}
                          type="button"
                          onClick={() => setDeviceType(d.type as any)}
                          className={`flex items-center justify-center gap-2 p-3 rounded-lg border text-xs font-medium transition-all ${
                            active
                              ? "bg-blue-600/20 border-blue-500 text-blue-300"
                              : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          {d.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Module Selector & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                      Clinical Module Under Test
                    </label>
                    <select
                      value={clinicalModule}
                      onChange={(e) => setClinicalModule(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                    >
                      <option value="IMAGING_PACS">PACS Canvas & DICOM Viewer</option>
                      <option value="REPORTING_STUDIO">Structured Reporting Studio</option>
                      <option value="AI_COPILOT">Clinical AI Decision Copilot</option>
                      <option value="WARD_ROUNDS">Mobile Ward Rounds Workspace</option>
                      <option value="SCHEMES">MAAY / RGHS Tariff Directory</option>
                      <option value="SCHEDULER">OT & Cath Lab Scheduling</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                      Feedback Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                    >
                      <option value="USABILITY">Usability & Ergonomics</option>
                      <option value="BUG">Software Bug / Defect</option>
                      <option value="FEATURE_REQUEST">Clinical Feature Request</option>
                      <option value="PERFORMANCE">Speed & Latency Concern</option>
                    </select>
                  </div>
                </div>

                {/* Ratings: Workflow Speed & UI Clutter */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2">
                      Workflow Efficiency (1 = Slow, 5 = Instant)
                    </label>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setWorkflowRating(star)}
                          className="p-1 focus:outline-none"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= workflowRating
                                ? "fill-amber-400 text-amber-400"
                                : "text-slate-700"
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-2 text-xs font-bold text-amber-400">
                        {workflowRating}/5 Stars
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2">
                      UI Clutter Level (1 = Pristine, 5 = Cluttered)
                    </label>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <button
                          key={level}
                          type="button"
                          onClick={() => setUiClutterRating(level)}
                          className={`w-8 h-8 rounded-lg text-xs font-bold border transition-all ${
                            uiClutterRating === level
                              ? level <= 2
                                ? "bg-emerald-600 text-white border-emerald-500"
                                : "bg-rose-600 text-white border-rose-500"
                              : "bg-slate-900 text-slate-400 border-slate-800"
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                      <span className="ml-2 text-xs text-slate-400">
                        {uiClutterRating <= 2 ? "Clean" : "Needs Trimming"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Feedback Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5">
                    Specific Clinical Feedback & Observations
                  </label>
                  <textarea
                    rows={4}
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="Describe specific procedural friction, button responsiveness, or missing macros in the angiosuite..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-white focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>

                {/* Priority Selector & Submit Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <span className="text-xs text-slate-400 font-semibold">Priority:</span>
                    <div className="flex gap-1.5">
                      {["LOW", "MEDIUM", "HIGH", "CRITICAL"].map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setPriority(p)}
                          className={`text-xs px-2.5 py-1 rounded-md font-bold transition-all ${
                            priority === p
                              ? p === "CRITICAL"
                                ? "bg-red-600 text-white"
                                : p === "HIGH"
                                ? "bg-amber-600 text-white"
                                : "bg-blue-600 text-white"
                              : "bg-slate-950 text-slate-500 border border-slate-800"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="cobalt"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 min-w-[160px]"
                  >
                    {isSubmitting ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    Submit Feedback
                  </Button>
                </div>

                {submissionSuccess && (
                  <div className="p-3 bg-emerald-950/80 border border-emerald-800 rounded-lg flex items-center gap-2 text-emerald-300 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>UAT feedback recorded and attributed with HIPAA-compliant audit hash.</span>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Live Submissions & Triaged Logs (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="bg-slate-900/90 border-slate-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-white flex items-center justify-between">
                <span>Recent UAT Logs ({feedbacks.length})</span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                  ALL GREEN
                </span>
              </CardTitle>
              <CardDescription className="text-xs text-slate-400">
                Live feedback stream across Sawai Man Singh Hospital angiosuites.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 max-h-[640px] overflow-y-auto pr-1">
              {feedbacks.length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-sm">
                  No feedback records logged yet.
                </div>
              ) : (
                feedbacks.map((f) => (
                  <div
                    key={f.id}
                    className="bg-slate-950 border border-slate-800/80 rounded-xl p-3.5 space-y-2 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-white">{f.staffName}</span>
                        <span className="text-slate-500">({f.roleTier})</span>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          f.priority === "CRITICAL"
                            ? "bg-red-950 text-red-400 border border-red-800"
                            : f.priority === "HIGH"
                            ? "bg-amber-950 text-amber-400 border border-amber-800"
                            : "bg-slate-800 text-slate-300"
                        }`}
                      >
                        {f.priority}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-blue-400 flex items-center gap-2">
                      <span>{f.clinicalModule}</span>
                      <span className="text-slate-600">•</span>
                      <span>{f.deviceType}</span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      "{f.feedbackText}"
                    </p>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-900 text-[11px] text-slate-500">
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span className="font-bold">{f.workflowRating}/5</span>
                      </div>
                      <span>Clutter: {f.uiClutterRating}/5</span>
                      <span className="text-[10px] text-slate-600">
                        {new Date(f.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
