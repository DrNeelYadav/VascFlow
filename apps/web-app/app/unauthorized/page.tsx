"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@vascule/ui-kit";
import { ShieldAlert, ArrowLeft, KeyRound, Lock, AlertTriangle, ChevronRight } from "lucide-react";

function UnauthorizedContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const requiredRole = searchParams.get("required") || "Administrative, Faculty";
  const currentRole = searchParams.get("current") || "Unprivileged";

  return (
    <div className="w-full max-w-lg space-y-6">
      <Card variant="oled" className="border-[#EF4444]/30 shadow-[0_0_50px_rgba(239,68,68,0.12)]">
        <CardHeader className="space-y-2 pb-4 border-b border-[#1E293B]/60">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/30 text-[10px] font-mono text-[#F87171]">
              <ShieldAlert className="w-3.5 h-3.5 text-[#EF4444]" />
              PRIVILEGE BOUNDARY ENFORCED
            </div>
            <span className="text-[10px] font-mono text-[#64748B]">HTTP 403 FORBIDDEN</span>
          </div>
          <CardTitle className="text-xl font-bold tracking-tight text-white font-heading pt-1 flex items-center gap-2">
            Access Restricted: Insufficient Tier
          </CardTitle>
          <CardDescription className="text-xs text-[#94A3B8] leading-relaxed">
            Your authenticated session does not possess the cryptographic privilege tier required to
            access this surgical administration surface.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6 space-y-4">
          {/* RBAC Comparison Matrix */}
          <div className="rounded-xl bg-[#090A0F] border border-[#1E293B] p-4 space-y-3 font-mono">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-[#1E293B]">
              <span className="text-[#94A3B8]">Required Privilege Tier:</span>
              <span className="px-2 py-0.5 rounded bg-[#1E293B] text-[#38BDF8] font-bold">
                {requiredRole}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#94A3B8]">Your Current Active Tier:</span>
              <span className="px-2 py-0.5 rounded bg-[#7F1D1D]/40 border border-[#EF4444]/40 text-[#FCA5A5] font-bold">
                {currentRole}
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#0F172A]/60 border border-[#1E293B] flex items-start gap-3 text-xs text-[#94A3B8]">
            <AlertTriangle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Administrative route guarding prevents unauthorized access to PACS routing configurations,
              HL7 intake ports, and staff directory databases. All unauthorized route traversal attempts
              are recorded to the institutional tamper-evident audit ledger.
            </p>
          </div>
        </CardContent>

        <CardFooter className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <Button
            variant="cobalt"
            size="lg"
            onClick={() => router.push("/?callbackUrl=/admin")}
            className="w-full sm:w-auto flex-1 gap-2 font-medium shadow-cobalt-glow cursor-pointer"
          >
            <KeyRound className="w-4 h-4" />
            Authenticate as Admin / Faculty
            <ChevronRight className="w-4 h-4" />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => router.push("/dashboard")}
            className="w-full sm:w-auto gap-2 font-medium cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Dashboard
          </Button>
        </CardFooter>
      </Card>

      <div className="text-center text-[11px] font-mono text-[#64748B]">
        Security Incident Ref: SEC-RBAC-{(Date.now() % 1000000).toString(16).toUpperCase()} // Vascule OS Guard
      </div>
    </div>
  );
}

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col items-center justify-center p-4 selection:bg-[#EF4444] selection:text-white">
      <Suspense fallback={<div className="text-sm font-mono text-[#64748B]">Verifying privileges...</div>}>
        <UnauthorizedContent />
      </Suspense>
    </div>
  );
}
