import { NextResponse } from 'next/server';
import { calculateMacd } from '../../../lib/calculators';

export interface DischargeApiPayload {
  patientId: string;
  patientName: string;
  crNo: string;
  ipdNo: string;
  weightKg: number;
  serumCreatinine: number;
  contrastVolumeMl: number;
  procedureName: string;
  operator: string;
  accessSite: string;
  sheath: string;
  hardwareUsed: string;
  embolicAgents: string;
  intraOpNotes: string;
  complications: string;
  dischargeAdvice: string;
  followUpAdvice: string;
  dischargeMedications: string;
}

export async function POST(request: Request) {
  try {
    const body: Partial<DischargeApiPayload> = await request.json();

    if (!body.crNo || !body.patientName || !body.procedureName) {
      return NextResponse.json(
        { error: 'Mandatory clinical fields missing: crNo, patientName, and procedureName are required.' },
        { status: 400 }
      );
    }

    const weight = Number(body.weightKg) || 60;
    const creatinine = Number(body.serumCreatinine) || 1.0;
    const contrast = Number(body.contrastVolumeMl) || 50;

    const macdResult = calculateMacd(weight, creatinine, contrast);

    const dischargeRecord = {
      id: `ds-${Date.now()}`,
      crNo: body.crNo,
      ipdNo: body.ipdNo || 'N/A',
      patientName: body.patientName,
      procedureName: body.procedureName,
      operator: body.operator || 'Dr. Sharma (DM Fellow)',
      accessSite: body.accessSite || 'Right Common Femoral Artery',
      sheath: body.sheath || '5F Radiofocus Sheath',
      hardwareUsed: body.hardwareUsed || 'Diagnostic catheter & microcatheter',
      embolicAgents: body.embolicAgents || 'None',
      intraOpNotes: body.intraOpNotes || 'Procedure completed successfully without complications.',
      complications: body.complications || 'None',
      contrastSafety: {
        administeredContrastVolumeMl: contrast,
        maxAllowableContrastDoseMl: macdResult.macdMl,
        ratio: macdResult.contrastToEgfrRatio ?? 0,
        isCiAkiHighRisk: macdResult.highAkiRisk,
        alertMessage: macdResult.recommendation,
      },
      dischargeAdvice: body.dischargeAdvice || 'Keep puncture site dry for 48 hours. Rest for 24 hours.',
      followUpAdvice: body.followUpAdvice || 'Review in IR OPD Room 922 after 4 weeks.',
      dischargeMedications: body.dischargeMedications || 'Standard post-op kit prescribed.',
      createdAt: new Date().toISOString(),
      ihmsReadyPayload: {
        CR_NO: body.crNo,
        IPD_NO: body.ipdNo,
        PATIENT_NAME: body.patientName,
        DIAGNOSIS_PROCEDURE: body.procedureName,
        OP_NOTES: body.intraOpNotes,
        MEDICATIONS: body.dischargeMedications,
        ADVICE: body.dischargeAdvice,
      },
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Discharge summary generated and validated for IHMS injection.',
        dischargeRecord,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Failed to process discharge record.', details: error?.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    engine: 'SMS-IR-RIS Discharge Engine',
    status: 'Operational',
    version: '1.2.0',
    ihmsSyncCompatible: true,
  });
}
