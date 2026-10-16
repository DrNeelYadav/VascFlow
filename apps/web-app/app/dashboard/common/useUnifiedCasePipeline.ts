"use client";

import { useMemo, useCallback } from "react";
import { useEndoflowStore } from "../useEndoflowStore";
import { AUTHENTIC_SMS_MASTER_CASES } from "../../lib/realData/smsMasterAnalysisCases";

export interface UnifiedPipelineCase {
  id: string;
  patientName: string;
  age: number;
  gender: string;
  crNumber: string;
  dsaNo: string;
  unit: string;
  schemeType: string;
  procedureName: string;
  scheduledDate: string;
  diagnosis: string;
  accessRoute?: string;
  radiationDose?: string;
  contrastVolumeMl?: string;
  hemostasisMethod?: string;
}

export function useUnifiedCasePipeline() {
  const store = useEndoflowStore();

  // Combine store patients with authentic SMS cases for unified cross-module lookup
  const activeCases = useMemo<UnifiedPipelineCase[]>(() => {
    const fromStore: UnifiedPipelineCase[] = store.patients.map((p) => ({
      id: p.id,
      patientName: p.name,
      age: p.age,
      gender: p.sex,
      crNumber: p.hid,
      dsaNo: p.scanId || `DSA-${p.id}`,
      unit: p.unit || "Interventional Radiology",
      schemeType: p.scheme || "RGHS",
      procedureName: p.procedure || "Diagnostic Angiography",
      scheduledDate: new Date().toISOString().split("T")[0],
      diagnosis: p.chiefComplaints || p.summary || "IR Evaluation",
      accessRoute: p.inRoom?.activeSheathAccess || "Right Common Femoral Artery (CFA)",
      radiationDose: p.inRoom?.elapsedFluoroSeconds
        ? `${Math.round(p.inRoom.elapsedFluoroSeconds / 60)} min`
        : undefined,
      contrastVolumeMl: p.inRoom?.contrastInjectedMl
        ? `${p.inRoom.contrastInjectedMl} ml`
        : undefined,
      hemostasisMethod: p.postOp?.punctureSiteSeal || "Manual Compression 15 min",
    }));

    const fromRegistry: UnifiedPipelineCase[] = AUTHENTIC_SMS_MASTER_CASES.slice(0, 15).map((c) => ({
      id: `reg-${c.dsaNo}`,
      patientName: c.patientName,
      age: Number(c.age) || 0,
      gender: c.gender,
      crNumber: c.crNumber,
      dsaNo: `DSA-${c.dsaNo}`,
      unit: c.unit,
      schemeType: c.schemeType,
      procedureName: c.procedureName,
      scheduledDate: c.date,
      diagnosis: c.diagnosis,
      accessRoute: "Right Common Femoral Artery (CFA)",
      radiationDose: c.radiationDose,
    }));

    return [...fromStore, ...fromRegistry];
  }, [store.patients]);

  const findCaseById = useCallback(
    (id: string): UnifiedPipelineCase | undefined => {
      return activeCases.find((c) => c.id === id || c.crNumber === id || c.dsaNo === id);
    },
    [activeCases]
  );

  return {
    activeCases,
    findCaseById,
  };
}
