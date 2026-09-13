import { NextResponse } from 'next/server';
import { isHolidayOrSunday, getHolidayDetails } from '../../../data/holidays2026';

export interface BookingPayload {
  patientId: string;
  patientName: string;
  crNo: string;
  ipdNo: string;
  bedNo: string;
  diagnosis: string;
  procedureCode: string;
  procedureName: string;
  targetDate: string; // YYYY-MM-DD
  slotTime: string;
  isEmergency?: boolean;
  emergencyOverrideReason?: string;
  hardwareIndented?: string;
  vendorContact?: string;
  notes?: string;
}

/**
 * GET /api/bookings
 * Returns query parameters or documentation
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');

  if (date) {
    const conflict = isHolidayOrSunday(date);
    const holiday = getHolidayDetails(date);

    return NextResponse.json({
      date,
      isConflict: conflict.isBlocked,
      isHoliday: !!holiday,
      holidayName: holiday?.nameEn || null,
      notes: conflict.reason || 'Working Day',
    });
  }

  return NextResponse.json({
    message: 'SMS IR-RIS Angiosuite Booking API active.',
    endpoints: {
      checkDate: '/api/bookings?date=YYYY-MM-DD',
      createBooking: 'POST /api/bookings',
    },
  });
}

/**
 * POST /api/bookings
 * Validates 2026 Rajasthan Gazetted Public Holidays and Sunday constraints server-side
 */
export async function POST(request: Request) {
  try {
    const body: BookingPayload = await request.json();

    // 1. Mandatory Fields Validation
    if (!body.patientName || !body.crNo || !body.targetDate || !body.procedureName) {
      return NextResponse.json(
        { error: 'Missing mandatory fields: patientName, crNo, targetDate, and procedureName are required.' },
        { status: 400 }
      );
    }

    // 2. Server-side Holiday & Sunday Conflict Validation
    const conflict = isHolidayOrSunday(body.targetDate);
    const holidayInfo = getHolidayDetails(body.targetDate);

    // If slot falls on Gazetted Holiday or Sunday, require emergency flag and justification
    if (conflict.isBlocked && !body.isEmergency && !body.emergencyOverrideReason) {
      const conflictType = holidayInfo
        ? `Rajasthan Gazetted Holiday: ${holidayInfo.nameEn}`
        : 'Sunday (Restricted Angiosuite Schedule)';

      return NextResponse.json(
        {
          error: `Booking blocked: ${body.targetDate} is a ${conflictType}.`,
          conflictType,
          holiday: holidayInfo,
          requiresOverride: true,
          hint: 'To schedule on a holiday or Sunday, specify isEmergency: true and provide emergencyOverrideReason.',
        },
        { status: 409 }
      );
    }

    // 3. Construct Verified Booking Record
    const newBooking = {
      id: `book-${Date.now()}`,
      patientId: body.patientId || `pt-${Date.now()}`,
      patientName: body.patientName,
      crNo: body.crNo,
      ipdNo: body.ipdNo || 'IPD-PENDING',
      bedNo: body.bedNo || 'IR Daycare',
      diagnosis: body.diagnosis || 'Interventional Radiology Candidate',
      procedureCode: body.procedureCode || 'IR-GEN-01',
      procedureName: body.procedureName,
      targetDate: body.targetDate,
      slotTime: body.slotTime || '09:00 AM',
      isEmergency: !!body.isEmergency,
      isHolidayOverride: conflict.isBlocked,
      holidayOverrideReason: body.emergencyOverrideReason || null,
      d1CallCompleted: false,
      status: 'SCHEDULED',
      hardwareIndented: body.hardwareIndented || 'Standard Access Kit',
      vendorContact: body.vendorContact || 'SMS Central Store',
      notes: body.notes || '',
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        message: conflict.isBlocked
          ? `Emergency Angio OT booking scheduled with override on ${body.targetDate}`
          : `Elective Angio OT booking successfully scheduled for ${body.targetDate}`,
        booking: newBooking,
      },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Invalid JSON payload or internal server error.', details: err?.message },
      { status: 500 }
    );
  }
}
