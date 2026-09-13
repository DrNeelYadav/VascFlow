import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Persona to Role mapping for the 10 SMS Medical College Clinical Roles
 */
export const ROLE_PERMISSIONS: Record<string, string[]> = {
  ADMIN: ['*'],
  FACULTY: ['read', 'write', 'override_holiday', 'signoff_discharge', 'export_audit'],
  RESIDENT: ['read', 'write', 'book_slot', 'log_biopsy', 'calculate_safety'],
  NURSE: ['read', 'update_vitals', 'toggle_d1_call', 'update_fasting'],
  TECH: ['read', 'update_hardware', 'log_radiation_dap'],
};

export const PERSONA_ROLE_MAP: Record<string, string> = {
  FC01: 'FACULTY', // Prof. & HOD
  FC02: 'FACULTY', // Assoc. Prof
  DM01: 'RESIDENT', // Senior Fellow
  DM02: 'RESIDENT', // Junior Fellow
  SR01: 'RESIDENT', // Senior Resident
  NO01: 'NURSE',    // Cath Lab In-Charge
  NO02: 'NURSE',    // Daycare In-Charge
  TC01: 'TECH',     // Chief Cath Lab Tech
  TC02: 'TECH',     // Asst. Radiographer
  CR01: 'ADMIN',    // Scheme Desk / Registration In-Charge
};

/**
 * Next.js Edge Middleware for Role-Based Access Control (RBAC)
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static assets, public manifests, and auth routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/manifest.json') ||
    pathname === '/api/auth'
  ) {
    return NextResponse.next();
  }

  // Retrieve persona token from cookie or authorization header
  const personaHeader = request.headers.get('x-clinical-persona') || request.cookies.get('sms_persona')?.value || 'DM01';
  const role = PERSONA_ROLE_MAP[personaHeader] || 'RESIDENT';

  // Protect Admin / Configuration endpoints
  if (pathname.startsWith('/api/admin') && role !== 'ADMIN' && role !== 'FACULTY') {
    return NextResponse.json(
      { error: 'Unauthorized: Administrative or Faculty privileges required.' },
      { status: 403 }
    );
  }

  // Protect Emergency Override endpoints (requires Resident or Faculty justification)
  if (pathname.startsWith('/api/bookings/emergency-override') && role !== 'FACULTY' && role !== 'RESIDENT') {
    return NextResponse.json(
      { error: 'Unauthorized: Clinical override requires Resident or Faculty authorization.' },
      { status: 403 }
    );
  }

  // Attach enriched clinical role context to request headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-user-role', role);
  requestHeaders.set('x-persona-code', personaHeader);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ['/api/:path*'],
};
