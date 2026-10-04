"use client";

import React, { useEffect } from "react";
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@vascule/ui-kit";
import { RefreshCw, ArrowLeft, AlertCircle } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected workstation exceptions safely to client console
    console.error("Workstation view exception caught:", error);
  }, [error]);

  const handleReload = () => {
    if (typeof reset === "function") {
      reset();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  const handleReturnToWorklist = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/dashboard/worklist";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border border-slate-200 bg-white shadow-sm text-slate-900 rounded-xl overflow-hidden">
          <CardHeader className="space-y-3 pb-3 pt-8 text-center">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6 text-slate-500" />
            </div>
            <CardTitle className="text-lg font-semibold tracking-tight text-slate-900">
              Something went wrong while loading this view.
            </CardTitle>
            <CardDescription className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
              The workstation encountered an issue displaying this page. You can reload the workstation or return to the procedure worklist.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-2 pb-4">
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 text-xs text-slate-500 text-center">
              Active patient data and unsaved background records remain preserved.
            </div>
          </CardContent>

          <CardFooter className="pt-2 pb-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              onClick={handleReload}
              className="w-full sm:w-auto flex-1 gap-2 font-medium text-xs py-2.5 bg-blue-600 hover:bg-blue-700 text-white shadow-none cursor-pointer rounded-lg justify-center"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reload Workstation
            </Button>
            <Button
              onClick={handleReturnToWorklist}
              className="w-full sm:w-auto flex-1 gap-2 font-medium text-xs py-2.5 border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 shadow-none cursor-pointer rounded-lg justify-center"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Return to Worklist
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
