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
      <Card className="border border-[#DADCE0] bg-white shadow-xl text-[#202124]">
        <CardHeader className="space-y-2 pb-4 border-b border-[#F1F3F4]">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#FCE8E6] border border-[#F5C2C7] text-[10px] font-mono text-[#C5221F]">
              <ShieldAlert className="w-3.5 h-3.5 text-[#C5221F]" />
              PRIVILEGE BOUNDARY ENFORCED
            </div>
            <span className="text-[10px] font-mono text-[#5F6368]">HTTP 403 FORBIDDEN</span>
          </div>
          <CardTitle className="text-xl font-bold tracking-tight text-[#202124] font-heading pt-1 flex items-center gap-2">
            Access Restricted: Insufficient Tier
          </CardTitle>
          <CardDescription className="text-xs text-[#5F6368] leading-relaxed">
            Your authenticated session does not possess the cryptographic privilege tier required to
            access this surgical administration surface.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-5 space-y-4">
          {/* RBAC Comparison Matrix */}
          <div className="rounded-xl bg-[#F8F9FA] border border-[#DADCE0] p-4 space-y-3 font-mono text-xs text-[#202124]">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-[#DADCE0]">
              <span className="text-[#5F6368]">Required Privilege Tier:</span>
              <span className="px-2 py-0.5 rounded bg-[#E8F0FE] text-[#1A73E8] font-bold border border-[#D2E3FC]">
                {requiredRole}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#5F6368]">Your Current Active Tier:</span>
              <span className="px-2 py-0.5 rounded bg-[#FCE8E6] border border-[#F5C2C7] text-[#C5221F] font-bold">
                {currentRole}
              </span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#FEF7E0] border border-[#FEEFC3] flex items-start gap-2.5 text-xs text-[#B06000]">
            <AlertTriangle className="w-4 h-4 text-[#F9AB00] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Administrative route guarding prevents unauthorized access to PACS routing configurations,
              HL7 intake ports, and staff directory databases. All unauthorized route traversal attempts
              are recorded to the institutional tamper-evident audit ledger.
            </p>
          </div>
        </CardContent>

        <CardFooter className="pt-2 pb-5 flex flex-col sm:flex-row items-center gap-3">
          <Button
            onClick={() => router.push("/?callbackUrl=/admin")}
            className="w-full sm:w-auto flex-1 gap-2 font-semibold text-xs py-2.5 bg-[#1A73E8] hover:bg-[#1557B0] text-white shadow-xs cursor-pointer"
          >
            <KeyRound className="w-4 h-4" />
            Authenticate as Admin / Faculty
            <ChevronRight className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => router.push("/dashboard")}
            className="w-full sm:w-auto gap-2 text-xs py-2.5 border border-[#DADCE0] bg-white hover:bg-[#F1F3F4] text-[#202124] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Dashboard
          </Button>
        </CardFooter>
      </Card>

      <div className="text-center text-[11px] font-mono text-[#5F6368]">
        Security Incident Ref: SEC-RBAC-{(Date.now() % 1000000).toString(16).toUpperCase()} // Vascule OS Guard
      </div>
    </div>
  );
}

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#202124] flex flex-col items-center justify-center p-4">
      <Suspense fallback={<div className="text-sm font-mono text-[#5F6368]">Verifying privileges...</div>}>
        <UnauthorizedContent />
      </Suspense>
    </div>
  );
}
