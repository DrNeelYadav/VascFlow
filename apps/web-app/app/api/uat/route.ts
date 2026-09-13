import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export interface UatFeedbackItem {
  id: string;
  tenantId: string;
  staffId: string;
  staffName: string;
  roleTier: string;
  deviceType: "DESKTOP" | "TABLET" | "MOBILE";
  clinicalModule:
    | "IMAGING_PACS"
    | "REPORTING_STUDIO"
    | "AI_COPILOT"
    | "WARD_ROUNDS"
    | "SCHEMES"
    | "SCHEDULER";
  workflowRating: number; // 1 - 5
  uiClutterRating: number; // 1 - 5
  feedbackText: string;
  category: "USABILITY" | "BUG" | "FEATURE_REQUEST" | "PERFORMANCE";
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  status: "OPEN" | "TRIAGED" | "RESOLVED";
  createdAt: string;
}

// In-memory persistent mock store for demonstration & testing
export const uatFeedbackStore: UatFeedbackItem[] = [
  {
    id: "uat_sms_001",
    tenantId: "tenant_sms_jaipur",
    staffId: "dr.roy@hospital.lan",
    staffName: "Dr. Roy",
    roleTier: "Faculty",
    deviceType: "DESKTOP",
    clinicalModule: "IMAGING_PACS",
    workflowRating: 5,
    uiClutterRating: 1,
    feedbackText: "Window/Level preset transitions are exceptionally fluid during hepatic DSA runs. High contrast text is very legible in Cath Lab dark mode.",
    category: "USABILITY",
    priority: "LOW",
    status: "RESOLVED",
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: "uat_sms_002",
    tenantId: "tenant_sms_jaipur",
    staffId: "fellow@hospital.lan",
    staffName: "Dr. Sarah Chen",
    roleTier: "Resident",
    deviceType: "TABLET",
    clinicalModule: "WARD_ROUNDS",
    workflowRating: 4,
    uiClutterRating: 2,
    feedbackText: "Bedside rapid sign-off saved 20 minutes during CTVS ICU rounds. Would like direct 1-tap WhatsApp alert for post-op attendings.",
    category: "FEATURE_REQUEST",
    priority: "MEDIUM",
    status: "OPEN",
    createdAt: new Date(Date.now() - 1800000).toISOString(),
  },
];

/**
 * Sanitizes input text against Cross-Site Scripting (XSS).
 */
export function sanitizeFeedbackText(text: string): string {
  if (!text) return "";
  return text
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
}

/**
 * Validates rating integers between 1 and 5.
 */
export function validateRating(val: unknown): number {
  const num = typeof val === "number" ? val : parseInt(String(val), 10);
  if (isNaN(num) || num < 1) return 1;
  if (num > 5) return 5;
  return num;
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const tenantFilter =
    request.headers.get("x-tenant-id") ||
    url.searchParams.get("tenantId") ||
    "tenant_sms_jaipur";
  const moduleFilter = url.searchParams.get("module");

  let results = uatFeedbackStore.filter((f) => f.tenantId === tenantFilter);

  if (moduleFilter) {
    results = results.filter((f) => f.clinicalModule === moduleFilter);
  }

  return NextResponse.json({
    status: "success",
    tenantId: tenantFilter,
    total: results.length,
    data: results,
  });
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    const body = await request.json();

    const tenantId =
      body.tenantId ||
      request.headers.get("x-tenant-id") ||
      session?.user?.institutionId ||
      "tenant_sms_jaipur";

    const staffId = session?.user?.email || body.staffId || "anonymous.clinician@hospital.lan";
    const staffName = session?.user?.name || body.staffName || "Visiting Faculty";
    const roleTier = session?.user?.roleTier || body.roleTier || "Faculty";

    const feedbackRaw = typeof body.feedbackText === "string" ? body.feedbackText : "";
    if (!feedbackRaw.trim()) {
      return NextResponse.json(
        { error: "feedbackText is required" },
        { status: 400 }
      );
    }

    const sanitizedText = sanitizeFeedbackText(feedbackRaw);
    const workflowRating = validateRating(body.workflowRating);
    const uiClutterRating = validateRating(body.uiClutterRating);

    const validDeviceTypes = ["DESKTOP", "TABLET", "MOBILE"];
    const deviceType = validDeviceTypes.includes(body.deviceType)
      ? body.deviceType
      : "DESKTOP";

    const validModules = [
      "IMAGING_PACS",
      "REPORTING_STUDIO",
      "AI_COPILOT",
      "WARD_ROUNDS",
      "SCHEMES",
      "SCHEDULER",
    ];
    const clinicalModule = validModules.includes(body.clinicalModule)
      ? body.clinicalModule
      : "IMAGING_PACS";

    const validCategories = ["USABILITY", "BUG", "FEATURE_REQUEST", "PERFORMANCE"];
    const category = validCategories.includes(body.category)
      ? body.category
      : "USABILITY";

    const validPriorities = ["LOW", "MEDIUM", "HIGH", "CRITICAL"];
    const priority = validPriorities.includes(body.priority)
      ? body.priority
      : "MEDIUM";

    const newFeedback: UatFeedbackItem = {
      id: `uat_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      tenantId,
      staffId,
      staffName,
      roleTier,
      deviceType,
      clinicalModule,
      workflowRating,
      uiClutterRating,
      feedbackText: sanitizedText,
      category,
      priority,
      status: "OPEN",
      createdAt: new Date().toISOString(),
    };

    uatFeedbackStore.unshift(newFeedback);

    return NextResponse.json(
      {
        status: "created",
        message: "Clinical UAT feedback logged successfully",
        data: newFeedback,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process UAT feedback submission", detail: String(error) },
      { status: 500 }
    );
  }
}
