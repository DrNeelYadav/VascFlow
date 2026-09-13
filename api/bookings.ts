/**
 * Vercel Serverless Function: OT Angiosuite Bookings
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
    const { date } = req.query || {};

    if (date) {
      const parsedDate = new Date(date);
      const isSunday = !isNaN(parsedDate.getTime()) && parsedDate.getDay() === 0;

      return res.status(200).json({
        date,
        isConflict: isSunday,
        isSunday,
        notes: isSunday ? 'Sunday - Emergency cases only' : 'Working Day',
      });
    }

    return res.status(200).json({
      message: 'SMS IR-RIS Angiosuite Booking API active.',
      endpoints: {
        checkDate: '/api/bookings?date=YYYY-MM-DD',
        createBooking: 'POST /api/bookings',
      },
    });
  }

  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};

      if (!body.crNo || !body.patientName || !body.targetDate || !body.slotTime) {
        return res.status(400).json({
          error: 'Mandatory fields missing: crNo, patientName, targetDate, and slotTime are required.',
        });
      }

      const booking = {
        id: `bk-${Date.now()}`,
        patientId: body.patientId || `pt-${Date.now()}`,
        patientName: body.patientName,
        crNo: body.crNo,
        ipdNo: body.ipdNo || 'N/A',
        bedNo: body.bedNo || 'Daycare',
        diagnosis: body.diagnosis || 'Interventional Radiology Indication',
        procedureCode: body.procedureCode || 'IR-GEN',
        procedureName: body.procedureName || 'IR Procedure',
        targetDate: body.targetDate,
        slotTime: body.slotTime,
        isEmergency: Boolean(body.isEmergency),
        emergencyOverrideReason: body.emergencyOverrideReason || null,
        hardwareIndented: body.hardwareIndented || 'Standard Access Kit',
        vendorContact: body.vendorContact || 'SMS Central Store',
        notes: body.notes || 'Routine case',
        status: 'Scheduled',
        d1CallCompleted: false,
        createdAt: new Date().toISOString(),
      };

      return res.status(201).json({
        success: true,
        message: `Angiosuite slot reserved successfully for ${body.patientName} on ${body.targetDate}`,
        booking,
      });
    } catch (err: any) {
      return res.status(500).json({
        error: 'Failed to create booking.',
        details: err?.message,
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
