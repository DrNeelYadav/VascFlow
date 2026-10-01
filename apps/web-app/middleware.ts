import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

/**
 * Enterprise Clinical HTTP Security Headers
 * Defense-in-depth against MIME sniffing, clickjacking, protocol downgrade, and cross-origin leakage.
 */
export function applySecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");
  return response;
}

/**
 * Clinical Role Tier derivation for edge middleware.
 */
export function deriveRoleTier(roleCode?: string): string {
  if (!roleCode) return "Staff";
  const code = roleCode.toUpperCase().trim();
  if (code === "ADMIN" || code.startsWith("CR")) return "Administrative";
  if (
    code.includes("FACULTY") ||
    code === "INTERVENTIONAL_RADIOLOGIST" ||
    code.startsWith("FC")
  ) {
    return "Faculty";
  }
  if (
    code.includes("RESIDENT") ||
    code.startsWith("DM") ||
    code.startsWith("SR") ||
    code === "DOCTOR"
  ) {
    return "Resident";
  }
  if (code.includes("NURSE") || code.startsWith("NO")) return "Nursing";
  if (code.includes("TECH") || code.startsWith("TC") || code === "RADIOLOGIST") {
    return "Technician";
  }
  return "Clinician";
}

/**
 * Edge Rate-Limiting Rules & Sliding Window Store (RFC 7807 Compliant)
 */
export interface RateLimitRule {
  prefix: string;
  limit: number;
  windowSeconds: number;
  category: "auth" | "abdm" | "inventory";
}

export const RATE_LIMIT_RULES: RateLimitRule[] = [
  { prefix: "/api/auth", limit: 5, windowSeconds: 60, category: "auth" },
  { prefix: "/api/abdm", limit: 60, windowSeconds: 60, category: "abdm" },
  { prefix: "/api/inventory/use", limit: 120, windowSeconds: 60, category: "inventory" },
];

export interface RateLimitResult {
  allowed: boolean;
  limit: number;
  remaining: number;
  resetSeconds: number;
  retryAfterSeconds: number;
}

const rateLimitStore = new Map<string, number[]>();

export function getRateLimitKey(request: NextRequest, rule: RateLimitRule): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ip = (forwardedFor ? forwardedFor.split(",")[0].trim() : null) || realIp || "127.0.0.1";

  if (rule.category === "abdm") {
    const clientId =
      request.headers.get("x-gateway-client-id") ||
      request.headers.get("x-abdm-client-id");
    return clientId ? `abdm:${clientId}` : `abdm:${ip}`;
  }

  if (rule.category === "inventory") {
    const workstationId =
      request.headers.get("x-workstation-id") ||
      request.headers.get("x-angiosuite-id");
    return workstationId ? `inv:${workstationId}` : `inv:${ip}`;
  }

  return `auth:${ip}`;
}

export function checkRateLimit(
  request: NextRequest,
  rule: RateLimitRule,
  now = Date.now()
): RateLimitResult {
  const key = getRateLimitKey(request, rule);
  const windowMs = rule.windowSeconds * 1000;
  const windowStart = now - windowMs;

  const timestamps = (rateLimitStore.get(key) || []).filter((t) => t > windowStart);

  if (timestamps.length >= rule.limit) {
    const earliest = timestamps[0];
    const resetMs = earliest + windowMs - now;
    const retryAfter = Math.max(1, Math.ceil(resetMs / 1000));
    const resetTimestamp = Math.ceil((earliest + windowMs) / 1000);

    return {
      allowed: false,
      limit: rule.limit,
      remaining: 0,
      resetSeconds: resetTimestamp,
      retryAfterSeconds: retryAfter,
    };
  }

  timestamps.push(now);
  rateLimitStore.set(key, timestamps);

  // Prevent memory leaks
  if (rateLimitStore.size > 5000) {
    for (const [k, ts] of Array.from(rateLimitStore.entries())) {
      const active = ts.filter((t) => t > windowStart);
      if (active.length === 0) {
        rateLimitStore.delete(k);
      } else {
        rateLimitStore.set(k, active);
      }
    }
  }

  const resetTimestamp = Math.ceil((now + windowMs) / 1000);
  return {
    allowed: true,
    limit: rule.limit,
    remaining: Math.max(0, rule.limit - timestamps.length),
    resetSeconds: resetTimestamp,
    retryAfterSeconds: 0,
  };
}

export function resetRateLimitStore(): void {
  rateLimitStore.clear();
}

/**
 * Validates whether an incoming HTTP Origin belongs to trusted institutional domains
 * or dedicated mobile tablet and angiosuite workstation subnets.
 */
export function isTrustedOrigin(origin: string | null): boolean {
  if (!origin) return true; // Direct same-origin requests
  try {
    const url = new URL(origin);
    const hostname = url.hostname.toLowerCase();

    // 1. Institutional Hospital Domains
    if (
      hostname === "vascule.sms.rajasthan.gov.in" ||
      hostname.endsWith(".sms.rajasthan.gov.in") ||
      hostname === "hospital.lan" ||
      hostname.endsWith(".hospital.lan") ||
      hostname === "localhost" ||
      hostname === "127.0.0.1"
    ) {
      return true;
    }

    // 2. Dedicated mobile tablet / workstation subnets (10.200.x.x, 10.201.x.x, 192.168.100.x)
    if (
      hostname.startsWith("10.200.") ||
      hostname.startsWith("10.201.") ||
      hostname.startsWith("192.168.100.")
    ) {
      return true;
    }

    return false;
  } catch {
    return false;
  }
}

/**
 * Validates National Health Authority (NHA) ABDM Gateway mutual TLS (mTLS) client certificates.
 */
export function verifyAbdmMtlsHeaders(request: NextRequest): { valid: boolean; reason?: string } {
  const sslVerify = request.headers.get("x-ssl-client-verify");
  const clientDn = request.headers.get("x-ssl-client-dn");

  // In test or non-production, only enforce if x-ssl-client-verify header is provided
  if (!sslVerify && process.env.NODE_ENV !== "production") {
    return { valid: true };
  }

  if (sslVerify !== "SUCCESS") {
    return {
      valid: false,
      reason: `Client certificate verification failed: ${sslVerify || "NO_CERTIFICATE_PRESENT"}`,
    };
  }

  if (
    clientDn &&
    !clientDn.toLowerCase().includes("national health authority") &&
    !clientDn.toLowerCase().includes("abdm") &&
    !clientDn.toLowerCase().includes("nha") &&
    !clientDn.toLowerCase().includes("gov.in")
  ) {
    return { valid: false, reason: `Untrusted client certificate DN: ${clientDn}` };
  }

  return { valid: true };
}

/**
 * Extracts and decodes session claims from verified NextAuth JWT tokens at the edge.
 */
export async function getSessionClaims(request: NextRequest) {
  const secret =
    process.env.NEXTAUTH_SECRET ||
    process.env.AUTH_SECRET ||
    "vascflow-angiosuite-clinical-secret-2026-secure-session-key";

  try {
    const token = await getToken({
      req: request,
      secret,
    });

    if (token) {
      const roleCode = (token.roleCode as string) || (token.role as string) || "";
      const roleTier =
        (token.roleTier as string) || deriveRoleTier(roleCode);
      return {
        isAuthenticated: true,
        userId: (token.id as string) || token.sub || "",
        email: (token.email as string) || "",
        roleCode,
        roleTier,
      };
    }
  } catch {
    // Fail securely on token verification error or malformed token
  }

  return {
    isAuthenticated: false,
    userId: "",
    email: "",
    roleCode: "",
    roleTier: "",
  };
}


/**
 * Next.js Edge Middleware enforcing Role-Based Access Control (RBAC) and Security Headers.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const origin = request.headers.get("origin");

  // A. CORS Preflight Handling (OPTIONS)
  if (request.method === "OPTIONS") {
    if (!isTrustedOrigin(origin)) {
      return applySecurityHeaders(new NextResponse(null, { status: 403 }));
    }
    const preflight = new NextResponse(null, { status: 204 });
    if (origin) {
      preflight.headers.set("Access-Control-Allow-Origin", origin);
      preflight.headers.set("Access-Control-Allow-Credentials", "true");
      preflight.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
      preflight.headers.set(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, X-Requested-With, X-Gateway-Client-Id, X-Workstation-Id, X-Angiosuite-Id, X-SSL-Client-Verify, X-SSL-Client-DN"
      );
      preflight.headers.set("Access-Control-Max-Age", "86400");
    }
    return applySecurityHeaders(preflight);
  }

  // B. CORS & Origin Pinning on /api/* endpoints
  if (pathname.startsWith("/api/") && origin && !isTrustedOrigin(origin)) {
    const forbiddenDetails = {
      type: "https://vascflow.hospital.lan/errors/cors-forbidden",
      title: "Forbidden Origin",
      status: 403,
      detail: `Cross-origin access from untrusted origin '${origin}' blocked by hospital perimeter security policy.`,
      instance: pathname,
    };
    return applySecurityHeaders(
      new NextResponse(JSON.stringify(forbiddenDetails), {
        status: 403,
        headers: { "Content-Type": "application/problem+json" },
      })
    );
  }

  // C. ABDM Mutual TLS (mTLS) Gateway Verification
  if (pathname.startsWith("/api/abdm")) {
    const mtlsCheck = verifyAbdmMtlsHeaders(request);
    if (!mtlsCheck.valid) {
      const mtlsProblem = {
        type: "https://vascflow.hospital.lan/errors/mtls-unauthorized",
        title: "mTLS Certificate Required",
        status: 401,
        detail: `National Health Authority (NHA) gateway mutual TLS verification failed: ${mtlsCheck.reason}`,
        instance: pathname,
      };
      return applySecurityHeaders(
        new NextResponse(JSON.stringify(mtlsProblem), {
          status: 401,
          headers: { "Content-Type": "application/problem+json" },
        })
      );
    }
  }

  // 0. Edge Rate Limiting Perimeter Defense (Sliding Window RFC 7807)
  const isAuthRead =
    pathname === "/api/auth/session" ||
    pathname === "/api/auth/csrf" ||
    pathname === "/api/auth/providers";

  const matchedRule = isAuthRead
    ? undefined
    : RATE_LIMIT_RULES.find((rule) => pathname.startsWith(rule.prefix));

  let rateLimitHeaderInfo: RateLimitResult | null = null;
  if (matchedRule) {
    const rl = checkRateLimit(request, matchedRule);
    if (!rl.allowed) {
      const problemDetails = {
        type: "https://vascflow.hospital.lan/errors/rate-limit-exceeded",
        title: "Too Many Requests",
        status: 429,
        detail: `Rate limit of ${matchedRule.limit} requests per ${matchedRule.windowSeconds}s exceeded for ${matchedRule.prefix}.`,
        instance: pathname,
        retryAfter: rl.retryAfterSeconds,
      };

      const response = new NextResponse(JSON.stringify(problemDetails), {
        status: 429,
        headers: {
          "Content-Type": "application/problem+json",
          "Retry-After": String(rl.retryAfterSeconds),
          "X-RateLimit-Limit": String(rl.limit),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(rl.resetSeconds),
        },
      });
      return applySecurityHeaders(response);
    }
    rateLimitHeaderInfo = rl;
  }

  const attachPerimeterHeaders = (res: NextResponse) => {
    if (matchedRule && rateLimitHeaderInfo) {
      res.headers.set("X-RateLimit-Limit", String(rateLimitHeaderInfo.limit));
      res.headers.set("X-RateLimit-Remaining", String(rateLimitHeaderInfo.remaining));
      res.headers.set("X-RateLimit-Reset", String(rateLimitHeaderInfo.resetSeconds));
    }
    if (origin && isTrustedOrigin(origin)) {
      res.headers.set("Access-Control-Allow-Origin", origin);
      res.headers.set("Access-Control-Allow-Credentials", "true");
    }
    return applySecurityHeaders(res);
  };

  // 1. Bypass public assets, Auth.js handlers, and API Gateway proxies
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/api/proxy") ||
    pathname === "/unauthorized" ||
    pathname === "/favicon.ico"
  ) {
    return attachPerimeterHeaders(NextResponse.next());
  }

  // 1b. Permanently redirect any legacy /login requests to landing page
  if (pathname === "/login") {
    const landingUrl = new URL("/", request.url);
    return applySecurityHeaders(NextResponse.redirect(landingUrl, { status: 308 }));
  }

  // 2. Identify protected route zones
  const isAdminRoute = pathname.startsWith("/admin");
  const isDashboardRoute = pathname.startsWith("/dashboard");

  if (!isAdminRoute && !isDashboardRoute) {
    // Other routes pass through (including API routes)
    return attachPerimeterHeaders(NextResponse.next());
  }

  // 3. Extract authenticated session claims
  const session = await getSessionClaims(request);

  // 4. Redirect unauthenticated users to institutional login landing page
  if (!session.isAuthenticated) {
    const landingUrl = new URL("/", request.url);
    landingUrl.searchParams.set("callbackUrl", pathname);
    return applySecurityHeaders(NextResponse.redirect(landingUrl));
  }

  // 5. Enforce Admin & Faculty tier boundary for /admin routes
  if (isAdminRoute) {
    const hasAdminAccess =
      session.roleTier === "Administrative" ||
      session.roleTier === "Faculty" ||
      session.roleCode.toUpperCase() === "ADMIN" ||
      session.roleCode.toUpperCase().includes("FACULTY");

    if (!hasAdminAccess) {
      const unauthorizedUrl = new URL("/unauthorized", request.url);
      unauthorizedUrl.searchParams.set("required", "Administrative,Faculty");
      unauthorizedUrl.searchParams.set(
        "current",
        session.roleTier || session.roleCode
      );
      return applySecurityHeaders(NextResponse.redirect(unauthorizedUrl));
    }
  }

  // 6. Enforce Dashboard access for clinical tiers
  if (isDashboardRoute) {
    const allowedTiers = new Set([
      "Administrative",
      "Faculty",
      "Resident",
      "Nursing",
      "Technician",
      "Clinician",
    ]);

    if (!allowedTiers.has(session.roleTier)) {
      const unauthorizedUrl = new URL("/unauthorized", request.url);
      return applySecurityHeaders(NextResponse.redirect(unauthorizedUrl));
    }
  }

  return applySecurityHeaders(NextResponse.next());
}

/**
 * Configure matching paths for edge interception.
 */
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
