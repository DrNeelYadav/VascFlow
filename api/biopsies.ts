/**
 * Vercel Serverless Function: Biopsies Registry
 */

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-clinical-persona'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    return res.status(200).json({
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

  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};

      if (!body.crNo || !body.name || !body.organ || !body.modality) {
        return res.status(400).json({
          error: 'Missing required parameters: crNo, name, organ, and modality are mandatory.',
        });
      }

      const cores = Number(body.coresCount) || 1;
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

      return res.status(201).json({
        success: true,
        message: `Biopsy specimen logged successfully for ${body.name} (${body.modality})`,
        isAdequateSpecimen: isAdequate,
        biopsy: newBiopsy,
      });
    } catch (err: any) {
      return res.status(500).json({
        error: 'Internal processing error',
        details: err?.message,
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
