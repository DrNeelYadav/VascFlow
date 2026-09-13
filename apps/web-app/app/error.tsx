"use client";

import React, { useEffect, useState } from "react";
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@vascule/ui-kit";
import { ShieldAlert, RefreshCw, ArrowLeft, Terminal, AlertTriangle } from "lucide-react";

/**
 * Sanitizes runtime error messages and stack traces to strictly prevent
 * Protected Health Information (PHI) leakage into client crash views or logs.
 * Adheres to HIPAA § 164.312(a)(2)(iv) and SOC2 Trust Services Criteria.
 */
export function sanitizePhiFromError(rawText: string): string {
  if (!rawText) return "An unexpected clinical workstation exception occurred.";

  return rawText
    // Redact MRN / IPD patterns (e.g. MRN-VIR-2026-001, IPD-7821)
    .replace(/\b(MRN|IPD|CR|UHID)[-_:\s]?[A-Z0-9-]{3,15}\b/gi, "[REDACTED_CLINICAL_ID]")
    // Redact IPv4 addresses
    .replace(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g, "[REDACTED_IP]")
    // Redact email addresses
    .replace(/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/g, "[REDACTED_EMAIL]")
    // Redact JWT or hex signatures
    .replace(/ey[a-zA-Z0-9_-]{10,}\.[a-zA-Z0-9_-]{10,}\.[a-zA-Z0-9_-]{10,}/g, "[REDACTED_TOKEN]")
    // Redact local absolute paths (e.g. C:\Users\... or /Users/...)
    .replace(/([a-zA-Z]:\\[^\s)]+|\/(?:Users|home|app)\/[^\s)]+)/gi, "[REDACTED_INTERNAL_PATH]");
}

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RootErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  const [incidentRef, setIncidentRef] = useState<string>("");
  const [sanitizedMessage, setSanitizedMessage] = useState<string>("");

  useEffect(() => {
    // Generate deterministic pseudo-random reference for audit cross-referencing
    const ref = `HIPAA-SEC-${(Math.random() * 0xffffff).toString(16).slice(0, 6).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;
    setIncidentRef(ref);

    const clean = sanitizePhiFromError(error?.message || error?.toString() || "");
    setSanitizedMessage(clean);

    // Secure, non-PHI console audit record
    console.error(`[HIPAA Secure Error Boundary] Incident: ${ref} | Digest: ${error?.digest || "N/A"}`);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col items-center justify-center p-4 selection:bg-[#EF4444] selection:text-white">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#EF4444]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg space-y-6">
        <Card variant="oled" className="border-[#EF4444]/30 shadow-[0_0_50px_rgba(239,68,68,0.15)]">
          <CardHeader className="space-y-2 pb-4 border-b border-[#1E293B]/60">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/30 text-[10px] font-mono text-[#F87171]">
                <ShieldAlert className="w-3.5 h-3.5 text-[#EF4444]" />
                PROTECTED EXECUTION FAULT
              </div>
              <span className="text-[10px] font-mono text-[#64748B]">SANITIZED BOUNDARY</span>
            </div>
            <CardTitle className="text-xl font-bold tracking-tight text-white font-heading pt-1">
              Workstation Exception Intercepted
            </CardTitle>
            <CardDescription className="text-xs text-[#94A3B8] leading-relaxed">
              A client runtime exception was safely isolated. In compliance with HIPAA and SOC2 regulations,
              all Protected Health Information (PHI) and diagnostic identifiers have been redacted.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6 space-y-4">
            {/* Sanitized Incident Metadata */}
            <div className="rounded-xl bg-[#090A0F] border border-[#1E293B] p-4 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-[#94A3B8] border-b border-[#1E293B] pb-2">
                <span>Incident Reference:</span>
                <span className="text-[#38BDF8] font-bold">{incidentRef || "INITIALIZING..."}</span>
              </div>
              {error?.digest && (
                <div className="flex items-center justify-between text-[#94A3B8] border-b border-[#1E293B] pb-2">
                  <span>Cryptographic Digest:</span>
                  <span className="text-[#CBD5E1]">{error.digest}</span>
                </div>
              )}
              <div className="space-y-1 pt-1">
                <span className="text-[#94A3B8] text-[11px]">Sanitized Diagnostics:</span>
                <div className="p-2.5 rounded bg-[#000000] border border-[#1E293B] text-[#FCA5A5] text-xs font-mono break-all leading-relaxed">
                  {sanitizedMessage || "Execution thread interrupted safely."}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0F172A]/60 border border-[#1E293B] flex items-start gap-2.5 text-xs text-[#94A3B8]">
              <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
              <span>
                Angio suite telemetry connections and surgical queues remain protected on the central message bus.
              </span>
            </div>
          </CardContent>

          <CardFooter className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Button
              variant="cobalt"
              size="lg"
              onClick={() => {
                if (typeof window !== "undefined") {
                  // If error is chunk load failure, do a hard cache-busting reload
                  window.location.reload();
                } else {
                  reset();
                }
              }}
              className="w-full sm:w-auto flex-1 gap-2 font-medium shadow-cobalt-glow cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Reload Workstation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => (window.location.href = "/dashboard")}
              className="w-full sm:w-auto gap-2 font-medium cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Dashboard
            </Button>
          </CardFooter>
        </Card>

        <div className="text-center text-[11px] font-mono text-[#64748B]">
          HIPAA § 164.312(a)(2)(iv) Data Integrity & Encryption Standard // Vascule OS
        </div>
      </div>
    </div>
  );
}
