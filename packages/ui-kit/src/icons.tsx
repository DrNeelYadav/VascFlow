"use client";

import * as React from "react";
import { cn } from "./utils";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: IconSize;
  className?: string;
}

const SIZE_MAP: Record<IconSize, { width: number; height: number; strokeWidth: number }> = {
  xs: { width: 12, height: 12, strokeWidth: 1.5 },
  sm: { width: 14, height: 14, strokeWidth: 1.5 },
  md: { width: 16, height: 16, strokeWidth: 1.5 },
  lg: { width: 20, height: 20, strokeWidth: 1.5 },
  xl: { width: 24, height: 24, strokeWidth: 1.5 },
};

/**
 * Unified EndoFlow Clinical Vector Icon Base
 * Pure deterministic SVG line renderer with constant 1.5px stroke width
 */
function createClinicalIcon(
  displayName: string,
  svgContent: (strokeWidth: number) => React.ReactNode
) {
  const IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
    ({ size = "md", className, strokeWidth, ...props }, ref) => {
      const cfg = SIZE_MAP[size];
      const effectiveStroke =
        typeof strokeWidth === "number"
          ? strokeWidth
          : Number(strokeWidth) || cfg.strokeWidth;

      return (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={cfg.width}
          height={cfg.height}
          fill="none"
          stroke="currentColor"
          strokeWidth={effectiveStroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("shrink-0 select-none", className)}
          aria-hidden="true"
          {...props}
        >
          {svgContent(effectiveStroke)}
        </svg>
      );
    }
  );

  IconComponent.displayName = displayName;
  return IconComponent;
}

// 1. Schedule & Monthly Calendar Grid
export const IconCalendarSchedule = createClinicalIcon("IconCalendarSchedule", () => (
  <>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
  </>
));

// 2. OPD Consultation & Stethoscope
export const IconStethoscopeClinic = createClinicalIcon("IconStethoscopeClinic", () => (
  <>
    <path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3" />
    <path d="M9 12.5v4a3 3 0 0 0 6 0v-2.5" />
    <circle cx="15" cy="11.5" r="2.5" />
    <path d="M4.5 3H3M13.5 3H15" />
  </>
));

// 3. Clinical Operative Notes & Documentation
export const IconDocumentNotes = createClinicalIcon("IconDocumentNotes", () => (
  <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </>
));

// 4. Cath-Lab Master Registry & Logbook
export const IconMasterLogbook = createClinicalIcon("IconMasterLogbook", () => (
  <>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="9" y1="7" x2="15" y2="7" />
    <line x1="9" y1="11" x2="15" y2="11" />
  </>
));

// 5. Fluoroscopy Cine & DICOM Imaging
export const IconImagingCine = createClinicalIcon("IconImagingCine", () => (
  <>
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="17" x2="22" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
  </>
));

// 6. Rajasthan Government Health Schemes (MAAY / RGHS)
export const IconSchemeTariff = createClinicalIcon("IconSchemeTariff", () => (
  <>
    <path d="M12 2l8 4.5v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10v-6L12 2z" />
    <path d="M9 12l2 2 4-4" />
  </>
));

// 7. Publications & Academic Studio (VAPSA)
export const IconResearchStudio = createClinicalIcon("IconResearchStudio", () => (
  <>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </>
));

// 8. Vascular Catheter & Angiosuite Table
export const IconVascularAccess = createClinicalIcon("IconVascularAccess", () => (
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v10M7 12h10" />
    <circle cx="12" cy="12" r="3" />
  </>
));

// 9. RMSCL Formulary Medication & Prescription
export const IconMedicationPill = createClinicalIcon("IconMedicationPill", () => (
  <>
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <path d="m8.5 8.5 7 7" />
  </>
));
