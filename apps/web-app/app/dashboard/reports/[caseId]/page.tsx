import React from "react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SynopticEditor, SynopticReportData } from "../SynopticEditor";
import { getAdminFirestore } from "@/app/lib/firebaseAdmin";
import {
  canViewIdentifiableClinicalData,
  getVerifiedStaff,
} from "@/app/lib/auth/clinicalAccess";

interface ReportPageProps {
  params: Promise<{
    caseId: string;
  }>;
}

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function ProceduralReportPage({ params }: ReportPageProps) {
  const { caseId } = await params;
  const staff = await getVerifiedStaff();
  if (!staff) redirect("/");
  if (!canViewIdentifiableClinicalData(staff)) notFound();

  let liveCase: Record<string, any> = {};
  try {
    const snapshot = await getAdminFirestore().collection("cases").doc(caseId).get();
    if (snapshot.exists) {
      liveCase = snapshot.data() || {};
    }
  } catch {
    // Live database offline or unconfigured; gracefully initialize blank synoptic report
    liveCase = {};
  }

  const initialData: Partial<SynopticReportData> = {
    caseId,
    patientName: liveCase.patientName || liveCase.name || "",
    crNumber: liveCase.crNumber || liveCase.crNo || liveCase.hid || "",
    procedureName: liveCase.procedureName || liveCase.procedure || "",
    age: typeof liveCase.age === "number" ? liveCase.age : undefined,
    gender: liveCase.gender === "Female" || liveCase.sex === "Female"
      ? "Female"
      : liveCase.gender === "Male" || liveCase.sex === "Male"
        ? "Male"
        : "",
    indication: liveCase.indication || liveCase.summary || "",
    contrastVolumeMl: liveCase.contrastVolumeMl ?? liveCase.inRoom?.contrastInjectedMl,
    fluoroscopyTime: liveCase.fluoroscopyTime ?? (
      typeof liveCase.inRoom?.elapsedFluoroSeconds === "number"
        ? +(liveCase.inRoom.elapsedFluoroSeconds / 60).toFixed(1)
        : undefined
    ),
    dapDose: liveCase.dapDose,
    accessSite: liveCase.accessSite || liveCase.inRoom?.activeSheathAccess,
    sheathSize: liveCase.sheathSize,
    technicalFindings: liveCase.technicalFindings || "",
    complications: liveCase.complications || "",
    implantLotNumbers: liveCase.implantLotNumbers || "",
    postOpOrders: liveCase.postOpOrders || "",
  };

  return (
    <div className="space-y-4 pb-8">
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

      </div>

      {/* Editor Card */}
      <SynopticEditor caseId={caseId} initialData={initialData} />
    </div>
  );
}
