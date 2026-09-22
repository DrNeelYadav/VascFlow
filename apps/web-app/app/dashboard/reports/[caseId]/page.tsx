import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Activity } from "lucide-react";
import { SynopticEditor, SynopticReportData } from "../SynopticEditor";
import { INITIAL_RIS_WORKLIST_CASES } from "../../worklist/worklistData";
import { INITIAL_ENDOFLOW_PATIENTS } from "../../useEndoflowStore";

interface ReportPageProps {
  params: Promise<{
    caseId: string;
  }>;
  searchParams?: Promise<{
    contrast?: string;
    fluoro?: string;
    dap?: string;
    access?: string;
    sheath?: string;
    bp?: string;
    hr?: string;
    spo2?: string;
    act?: string;
  }>;
}

export default async function ProceduralReportPage({ params, searchParams }: ReportPageProps) {
  const { caseId } = await params;
  const sParams = searchParams ? await searchParams : {};

  const matchedCase = INITIAL_RIS_WORKLIST_CASES.find(
    (c) => c.caseId.toUpperCase() === caseId.toUpperCase()
  );
  const matchedEndoflowPatient = INITIAL_ENDOFLOW_PATIENTS.find(
    (p) => p.id.toUpperCase() === caseId.toUpperCase()
  );

  const initialData: Partial<SynopticReportData> = {
    caseId,
    patientName: matchedCase?.patientName || matchedEndoflowPatient?.name || "Ramswaroop Meena",
    crNumber: matchedCase?.crNumber || matchedEndoflowPatient?.hid || "SMS-2026-089",
    procedureName: matchedCase?.procedureName || matchedEndoflowPatient?.procedure || "Direct Transcaval Portosystemic Shunt (DIPS)",
    age: matchedEndoflowPatient?.age,
    gender: matchedEndoflowPatient?.sex,
    indication: matchedEndoflowPatient?.summary,
    contrastVolumeMl: sParams.contrast ? parseFloat(sParams.contrast) : matchedEndoflowPatient?.inRoom?.contrastInjectedMl,
    fluoroscopyTime: sParams.fluoro
      ? parseFloat(sParams.fluoro)
      : matchedEndoflowPatient?.inRoom?.elapsedFluoroSeconds
      ? +(matchedEndoflowPatient.inRoom.elapsedFluoroSeconds / 60).toFixed(1)
      : undefined,
    dapDose: sParams.dap ? parseFloat(sParams.dap) : undefined,
    accessSite: sParams.access || matchedEndoflowPatient?.inRoom?.activeSheathAccess,
    sheathSize: sParams.sheath,
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Top Breadcrumb Navigation */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link
            href="/dashboard/worklist"
            className="hover:text-blue-600 flex items-center gap-1"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to RIS Worklist
          </Link>
          <span>/</span>
          <span className="font-semibold text-slate-800">
            Synoptic Report: {caseId}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/dashboard/cath-lab-flowsheet?caseId=${caseId}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-sm"
          >
            <Activity className="h-3.5 w-3.5 text-blue-600" /> View Flowsheet Telemetry
          </Link>
        </div>
      </div>

      {/* Editor Card */}
      <SynopticEditor caseId={caseId} initialData={initialData} />
    </div>
  );
}
