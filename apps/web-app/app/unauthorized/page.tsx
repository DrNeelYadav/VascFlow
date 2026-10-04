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
      <Card className="border border-slate-200 bg-white shadow-xl text-slate-900">
        <CardHeader className="space-y-2 pb-4 border-b border-slate-100">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[10px] font-mono text-rose-700">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
              PRIVILEGE BOUNDARY ENFORCED
            </div>
            <span className="text-[10px] font-mono text-slate-500">HTTP 403 FORBIDDEN</span>
          </div>
          <CardTitle className="text-xl font-bold tracking-tight text-slate-900 font-heading pt-1 flex items-center gap-2">
            Access Restricted: Insufficient Tier
          </CardTitle>
          <CardDescription className="text-xs text-slate-500 leading-relaxed">
            Your authenticated session does not possess the cryptographic privilege tier required to
            access this surgical administration surface.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-5 space-y-4">
          {/* RBAC Comparison Matrix */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-3 font-mono text-xs text-slate-900">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
              <span className="text-slate-500">Required Privilege Tier:</span>
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 font-bold border border-blue-200">
                {requiredRole}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Your Current Active Tier:</span>
              <span className="px-2 py-0.5 rounded bg-rose-50 border border-rose-200 text-rose-700 font-bold">
                {currentRole}
              </span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-amber-50 border border-amber-100 flex items-start gap-2.5 text-xs text-amber-700">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
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
            className="w-full sm:w-auto flex-1 gap-2 font-semibold text-xs py-2.5 bg-blue-600 hover:bg-blue-700 text-white shadow-xs cursor-pointer"
          >
            <KeyRound className="w-4 h-4" />
            Authenticate as Admin / Faculty
            <ChevronRight className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => router.push("/dashboard")}
            className="w-full sm:w-auto gap-2 text-xs py-2.5 border border-slate-200 bg-white hover:bg-slate-100 text-slate-900 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Dashboard
          </Button>
        </CardFooter>
      </Card>

      <div className="text-center text-[11px] font-mono text-slate-500">
        Security Incident Ref: SEC-RBAC-{(Date.now() % 1000000).toString(16).toUpperCase()} // Vascule OS Guard
      </div>
    </div>
  );
}

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-4">
      <Suspense fallback={<div className="text-sm font-mono text-slate-500">Verifying privileges...</div>}>
        <UnauthorizedContent />
      </Suspense>
    </div>
  );
}
