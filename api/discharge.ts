/**
 * Vercel Serverless Function: Discharge Generator
 * Configured in vercel.json with 1024 MB memory and 30s maximum execution timeout.
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
      engine: 'SMS-IR-RIS Discharge Engine',
      status: 'Operational',
      version: '1.2.0',
      ihmsSyncCompatible: true,
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};

    if (!body.crNo || !body.patientName || !body.procedureName) {
      return res.status(400).json({
        error: 'Mandatory clinical fields missing: crNo, patientName, and procedureName are required.',
      });
    }

    const weight = Number(body.weightKg) || 60;
    const creatinine = Number(body.serumCreatinine) || 1.0;
    const contrast = Number(body.contrastVolumeMl) || 50;

    // Cigarroa formula: MACD = (5 * Weight in kg) / Serum Creatinine (mg/dL)
    const macd = Math.round(((5 * weight) / Math.max(0.1, creatinine)) * 10) / 10;
    const ratio = Math.round((contrast / Math.max(1, macd)) * 100) / 100;
    const isHighRisk = ratio > 1.0;

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
        maxAllowableContrastDoseMl: macd,
        ratio,
        isCiAkiHighRisk: isHighRisk,
        alertMessage: isHighRisk
          ? 'WARNING: Administered contrast exceeds Maximum Allowable Contrast Dose (MACD). High risk for CI-AKI.'
          : 'Contrast volume is within safe renal threshold.',
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

    return res.status(201).json({
      success: true,
      message: 'Discharge summary generated and validated for IHMS injection.',
      dischargeRecord,
    });
  } catch (error: any) {
    return res.status(500).json({
      error: 'Failed to process discharge record.',
      details: error?.message,
    });
  }
}
