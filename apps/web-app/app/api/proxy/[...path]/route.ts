import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

/**
 * Hop-by-hop headers as defined in RFC 2616 Section 13.5.1 and RFC 7230.
 * These headers are meaningful only for a single transport-level connection
 * and MUST be removed before forwarding requests or responses.
 */
const HOP_BY_HOP_HEADERS = new Set([
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "host",
  "content-length",
]);

interface RouteContext {
  params: Promise<{ path: string[] }> | { path: string[] };
}

/**
 * Circuit Breaker State & Resilience Configuration
 */
export type CircuitState = "CLOSED" | "OPEN" | "HALF_OPEN";

export interface CircuitBreakerConfig {
  failureThreshold: number;
  resetTimeoutMs: number;
  timeoutMs: number;
}

export interface ServiceCircuitStatus {
  state: CircuitState;
  consecutiveFailures: number;
  lastFailureTime: number;
  nextAllowedAttempt: number;
}

const DEFAULT_CIRCUIT_CONFIG: CircuitBreakerConfig = {
  failureThreshold: 3,
  resetTimeoutMs: 15000, // 15 seconds cooldown
  timeoutMs: 2500,        // 2.5 seconds timeout
};

export const circuitRegistry = new Map<string, ServiceCircuitStatus>();

export function getServiceCircuitKey(urlOrTarget: string): string {
  try {
    const parsed = new URL(urlOrTarget);
    return `${parsed.protocol}//${parsed.host}`;
  } catch {
    return urlOrTarget;
  }
}

export function getCircuitStatus(targetKey: string): ServiceCircuitStatus {
  let status = circuitRegistry.get(targetKey);
  if (!status) {
    status = {
      state: "CLOSED",
      consecutiveFailures: 0,
      lastFailureTime: 0,
      nextAllowedAttempt: 0,
    };
    circuitRegistry.set(targetKey, status);
  }

  // Check state transition from OPEN to HALF_OPEN after cooldown expires
  if (status.state === "OPEN" && Date.now() >= status.nextAllowedAttempt) {
    status.state = "HALF_OPEN";
  }

  return status;
}

export function recordCircuitSuccess(targetKey: string): void {
  const status = getCircuitStatus(targetKey);
  status.state = "CLOSED";
  status.consecutiveFailures = 0;
  status.lastFailureTime = 0;
  status.nextAllowedAttempt = 0;
}

export function recordCircuitFailure(
  targetKey: string,
  config: CircuitBreakerConfig = DEFAULT_CIRCUIT_CONFIG
): CircuitState {
  const status = getCircuitStatus(targetKey);
  status.consecutiveFailures++;
  status.lastFailureTime = Date.now();

  if (status.state === "HALF_OPEN" || status.consecutiveFailures >= config.failureThreshold) {
    status.state = "OPEN";
    status.nextAllowedAttempt = Date.now() + config.resetTimeoutMs;
  }

  return status.state;
}

export function resetCircuitBreakerRegistry(): void {
  circuitRegistry.clear();
}

/**
 * Generates an instantaneous graceful degraded mock clinical payload
 * when the circuit breaker is OPEN, preventing downstream UI crashes.
 */
export function getDegradedClinicalFallback(path: string, traceId: string) {
  if (path.includes("patients")) {
    return {
      status: "degraded",
      circuitBreaker: "OPEN-FALLBACK",
      message: "Clinical service temporarily degraded. Displaying cached telemetry baseline.",
      traceId,
      data: {
        id: "IR-FALLBACK-001",
        mrn: "#FALLBACK-ANGIO",
        name: "OFFLINE PATIENT CACHE",
        hemodynamics: {
          abp: "120/80",
          map: 93,
          hr: 75,
          spo2: 98,
        },
        degradedMode: true,
      },
    };
  }

  if (path.includes("studies")) {
    return {
      status: "degraded",
      circuitBreaker: "OPEN-FALLBACK",
      message: "PACS/DICOM service unavailable. Returning emergency local study cache.",
      traceId,
      studies: [
        {
          studyInstanceUid: "1.2.840.113619.FALLBACK.EMERGENCY",
          modality: "XA",
          patientName: "OFFLINE^CACHE",
          degradedMode: true,
        },
      ],
    };
  }

  if (path.includes("ai")) {
    return {
      status: "degraded",
      circuitBreaker: "OPEN-FALLBACK",
      message: "AI Clinical Decision Support service degraded. Adhere to manual SIR/CIRSE guidelines.",
      traceId,
      queryId: "AI-FALLBACK-001",
      recommendation: "AI service temporarily in degraded fallback mode. Consult attending physician directly.",
      riskLevel: "HIGH",
      physicianSignOffRequired: true,
      guidelines: [
        {
          citation: "SIR-2023-FALLBACK",
          title: "Society of Interventional Radiology Standard Operating Guidelines (Offline)",
          publishingBody: "SIR",
          year: 2023,
          evidenceGrade: "Class I, Level A",
        },
      ],
      confidenceScore: 0.5,
      degradedMode: true,
    };
  }

  if (path.includes("notifications")) {
    return {
      status: "degraded",
      circuitBreaker: "OPEN-FALLBACK",
      message: "Push notification service unavailable. Storing alert in local queue.",
      traceId,
      dispatched: false,
      degradedMode: true,
    };
  }

  return {
    status: "degraded",
    circuitBreaker: "OPEN-FALLBACK",
    message: "Upstream clinical microservice offline; circuit breaker is OPEN.",
    traceId,
    timestamp: Date.now(),
    degradedMode: true,
  };
}

/**
 * Core BFF proxy handler connecting browser clients to internal microservices.
 */
async function handleProxy(request: NextRequest, context: RouteContext) {
  const resolvedParams = await Promise.resolve(context.params);
  const pathParam = resolvedParams?.path;
  const pathSegments = Array.isArray(pathParam)
    ? pathParam
    : [pathParam || ""];
  const subPath = pathSegments.map((seg) => encodeURIComponent(seg)).join("/");
  const url = new URL(request.url);

  // Dynamic Multi-Microservice Gateway Routing
  const joinedPath = pathSegments.join("/");
  let targetBase = process.env.AUTH_SERVICE_INTERNAL_URL || "http://127.0.0.1:8080";

  if (
    joinedPath.startsWith("api/v1/patients") ||
    joinedPath.startsWith("api/v1/hl7") ||
    joinedPath.startsWith("api/v1/telemetry") ||
    joinedPath.startsWith("ws/vitals") ||
    pathSegments[0] === "patients" ||
    pathSegments[0] === "hl7"
  ) {
    targetBase = process.env.FHIR_SERVICE_INTERNAL_URL || "http://127.0.0.1:8081";
  } else if (
    joinedPath.startsWith("api/v1/studies") ||
    pathSegments[0] === "studies"
  ) {
    targetBase = process.env.DICOM_SERVICE_INTERNAL_URL || "http://127.0.0.1:8082";
  } else if (
    joinedPath.startsWith("api/v1/ai") ||
    pathSegments[0] === "ai"
  ) {
    targetBase = process.env.AI_AGENT_SERVICE_INTERNAL_URL || "http://127.0.0.1:8083";
  } else if (
    joinedPath.startsWith("api/v1/notifications") ||
    pathSegments[0] === "notifications"
  ) {
    targetBase = process.env.NOTIFICATION_SERVICE_INTERNAL_URL || "http://127.0.0.1:8084";
  }

  const cleanBase = targetBase.replace(/\/+$/, "");
  const destinationUrl = `${cleanBase}/${subPath}${url.search}`;
  const targetKey = getServiceCircuitKey(cleanBase);

  // 2. Resolve or generate distributed tracing identifier
  const traceId =
    request.headers.get("x-trace-id") ||
    request.headers.get("traceparent") ||
    request.headers.get("x-request-id") ||
    crypto.randomUUID();

  // 3. Fast Circuit Breaker Check: If OPEN, fast-fail with graceful degraded clinical state
  const circuit = getCircuitStatus(targetKey);
  if (circuit.state === "OPEN") {
    const degradedData = getDegradedClinicalFallback(joinedPath, traceId);
    return NextResponse.json(degradedData, {
      status: 200,
      headers: {
        "x-trace-id": traceId,
        "x-circuit-breaker": "OPEN-FALLBACK",
        "retry-after": Math.ceil(
          Math.max(0, (circuit.nextAllowedAttempt - Date.now()) / 1000)
        ).toString(),
      },
    });
  }

  // 4. Prepare sanitized forwarding headers
  const forwardHeaders = new Headers();

  request.headers.forEach((value, key) => {
    const lowerKey = key.toLowerCase();
    if (
      !HOP_BY_HOP_HEADERS.has(lowerKey) &&
      lowerKey !== "cookie" &&
      lowerKey !== "authorization"
    ) {
      forwardHeaders.set(key, value);
    }
  });

  const clientIp =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "127.0.0.1";

  forwardHeaders.set("x-forwarded-for", clientIp);
  forwardHeaders.set(
    "x-forwarded-proto",
    url.protocol.replace(":", "") || "http"
  );
  forwardHeaders.set(
    "x-forwarded-host",
    request.headers.get("host") || url.host
  );
  forwardHeaders.set("x-trace-id", traceId);
  const tenantId =
    request.headers.get("x-tenant-id") ||
    request.cookies.get("vascule_tenant_id")?.value ||
    "tenant_sms_jaipur";
  forwardHeaders.set("x-tenant-id", tenantId);

  // 5. Resolve and attach Bearer token
  let bearerToken: string | undefined;

  const incomingAuth = request.headers.get("authorization");
  if (incomingAuth?.toLowerCase().startsWith("bearer ")) {
    bearerToken = incomingAuth.substring(7).trim();
  }

  if (!bearerToken) {
    const candidateCookies = [
      "vascule_token",
      "access_token",
      "auth_token",
      "__Secure-authjs.session-token",
      "authjs.session-token",
      "__Secure-next-auth.session-token",
      "next-auth.session-token",
    ];

    for (const cookieName of candidateCookies) {
      const val = request.cookies.get(cookieName)?.value;
      if (val) {
        bearerToken = val;
        break;
      }
    }
  }

  if (!bearerToken) {
    try {
      const session = await auth();
      if (session?.accessToken) {
        bearerToken = session.accessToken;
      }
    } catch {
      // Non-fatal if session is unauthenticated
    }
  }

  if (bearerToken) {
    forwardHeaders.set("authorization", `Bearer ${bearerToken}`);
  }

  // 6. Handle request body and streaming configuration
  const method = request.method.toUpperCase();
  const hasBody = method !== "GET" && method !== "HEAD";

  let body: BodyInit | null | undefined = undefined;
  if (hasBody && request.body) {
    body = request.body;
  }

  const abortController = new AbortController();
  const timeoutId = setTimeout(
    () => abortController.abort(),
    DEFAULT_CIRCUIT_CONFIG.timeoutMs
  );

  const fetchOptions: RequestInit & { duplex?: string } = {
    method,
    headers: forwardHeaders,
    body,
    cache: "no-store",
    signal: abortController.signal,
  };

  if (body) {
    fetchOptions.duplex = "half";
  }

  // 7. Execute upstream fetch with resilience tracking
  try {
    const upstreamResponse = await fetch(destinationUrl, fetchOptions);
    clearTimeout(timeoutId);

    if (upstreamResponse.status >= 500) {
      recordCircuitFailure(targetKey);
    } else {
      recordCircuitSuccess(targetKey);
    }

    const responseHeaders = new Headers();
    upstreamResponse.headers.forEach((value, key) => {
      const lowerKey = key.toLowerCase();
      if (
        !HOP_BY_HOP_HEADERS.has(lowerKey) &&
        lowerKey !== "transfer-encoding" &&
        lowerKey !== "content-encoding"
      ) {
        responseHeaders.set(key, value);
      }
    });

    if (!responseHeaders.has("x-trace-id")) {
      responseHeaders.set("x-trace-id", traceId);
    }
    responseHeaders.set("x-circuit-breaker", circuit.state);

    return new NextResponse(upstreamResponse.body, {
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    clearTimeout(timeoutId);
    const newState = recordCircuitFailure(targetKey);

    console.error(
      `[BFF Proxy Gateway Error] Target: ${destinationUrl}, TraceID: ${traceId}, Circuit: ${newState}`,
      error
    );

    if (newState === "OPEN") {
      const fallback = getDegradedClinicalFallback(joinedPath, traceId);
      return NextResponse.json(fallback, {
        status: 200,
        headers: {
          "x-trace-id": traceId,
          "x-circuit-breaker": "OPEN-FALLBACK",
        },
      });
    }

    return NextResponse.json(
      {
        status: 502,
        error: "Bad Gateway",
        message: "Internal clinical microservice unreachable",
        traceId,
        target: destinationUrl,
        detail: error instanceof Error ? error.message : "Network communication error",
        circuitBreaker: newState,
      },
      {
        status: 502,
        headers: {
          "x-trace-id": traceId,
          "x-circuit-breaker": newState,
        },
      }
    );
  }
}

export async function GET(request: NextRequest, context: RouteContext) {
  return handleProxy(request, context);
}

export async function POST(request: NextRequest, context: RouteContext) {
  return handleProxy(request, context);
}

export async function PUT(request: NextRequest, context: RouteContext) {
  return handleProxy(request, context);
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  return handleProxy(request, context);
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  return handleProxy(request, context);
}
