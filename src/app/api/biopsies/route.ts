import { NextResponse } from 'next/server';

export interface BiopsyPayload {
  patientId: string;
  crNo: string;
  name: string;
  phone?: string;
  modality: 'D9211_CT' | 'ROOM_922_USG';
  organ: string;
  needleGauge: string;
  coresCount: number;
  operatorResident: string;
  pathLab?: string;
  status?: string;
  diagnosticYield?: boolean;
  histopathologyDiagnosis?: string;
  complications?: string;
}

/**
 * GET /api/biopsies
 * Returns simulated summary statistics of CT D9211 and Room 922 USG biopsies
 */
export async function GET() {
  return NextResponse.json({
    activeModalities: ['D9211 CT Scanner', 'Room 922 USG Suite'],
    benchmarkYieldRate: '94.8%',
    totalLoggedYearToDate: 412,
    ctBiopsiesCount: 238,
    usgBiopsiesCount: 174,
    statusBreakdown: {
      completed: 368,
      pendingPathology: 32,
      lostToFollowup: 12,
    },
  });
}

/**
 * POST /api/biopsies
 * Logs a new core needle biopsy procedure and calculates immediate adequacy status
 */
export async function POST(request: Request) {
  try {
    const body: BiopsyPayload = await request.json();

    if (!body.crNo || !body.name || !body.organ || !body.modality) {
      return NextResponse.json(
        { error: 'Missing required parameters: crNo, name, organ, and modality are mandatory.' },
        { status: 400 }
      );
    }

    const cores = Number(body.coresCount) || 1;
    // Core needle biopsy standard: >= 2 intact cores represents adequate specimen sample
    const isAdequate = cores >= 2;

    const newBiopsy = {
      id: `bx-${Date.now()}`,
      patientId: body.patientId || `pt-${Date.now()}`,
      crNo: body.crNo,
      name: body.name,
      phone: body.phone || 'N/A',
      modality: body.modality,
      organ: body.organ,
      needleGauge: body.needleGauge || '18G Coaxial',
      coresCount: cores,
      operatorResident: body.operatorResident || 'Dr. Choudhary (SR)',
      pathLab: body.pathLab || 'SMS Central Pathology',
      status: body.status || 'Pending_Pathology',
      diagnosticYield: isAdequate,
      histopathologyDiagnosis: body.histopathologyDiagnosis || 'Pending report (< 7 days)',
      complications: body.complications || 'None',
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        message: `Biopsy specimen logged successfully for ${body.name} (${body.modality})`,
        isAdequateSpecimen: isAdequate,
        biopsy: newBiopsy,
      },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Internal processing error', details: err?.message },
      { status: 500 }
    );
  }
}
