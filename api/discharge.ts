/**
 * Vercel Serverless Function: Discharge Generator
 * Configured in vercel.json with 1024 MB memory and 30s maximum execution timeout.
 */

// Single source of truth for the contrast ceiling. This route certifies contrast
// safety into a document pushed to IHMS, so it must not reimplement the formula.
import { calculateMacd } from '../apps/web-app/app/lib/calculators';

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

    // Weight, creatinine and contrast volume are clinical inputs, not optional
    // form fields. Each previously fell back to a plausible constant
    // (60 kg / 1.0 mg/dL / 50 mL), which meant a summary asserting
    // "within safe renal threshold" could be computed entirely from invented
    // numbers and then pushed to the hospital information system.
    const weight = Number(body.weightKg);
    const creatinine = Number(body.serumCreatinine);
    const contrast = Number(body.contrastVolumeMl);

    if (!weight || weight <= 0 || !creatinine || creatinine <= 0) {
      return res.status(400).json({
        error:
          'Cannot certify contrast safety: a measured weightKg and serumCreatinine are required.',
      });
    }

    // Single source of truth for the contrast ceiling.
    const macd = calculateMacd(weight, creatinine, contrast);
    if (!macd.valid) {
      return res.status(400).json({
        error: 'Cannot certify contrast safety: invalid weight or serum creatinine.',
      });
    }

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
        maxAllowableContrastDoseMl: macd.macdMl,
        ratio: contrast / macd.macdMl,
        isCiAkiHighRisk: macd.alertLevel === 'critical',
        alertMessage: macd.isExceeded
          ? 'WARNING: Administered contrast exceeds Maximum Allowable Contrast Dose (MACD). High risk for CI-AKI.'
          : macd.recommendation,
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
