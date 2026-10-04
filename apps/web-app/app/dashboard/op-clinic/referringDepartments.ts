/**
 * Departments that may refer a patient into the IR OPD.
 *
 * Lives outside page.tsx deliberately: Next only permits a fixed set of named
 * exports from a route entry, and an extra one fails the generated type check
 * at build time.
 */
export const REFERRING_DEPARTMENTS = [
  "Gastroenterology & Hepatology",
  "General Surgery & GI Surgery",
  "Urology & Renal Transplant",
  "Pulmonary Medicine / Chest TB",
  "Obstetrics & Gynecology",
  "Medical & Surgical Oncology",
  "Internal Medicine",
  "Emergency Medicine & Trauma",
  "Cardiology & Vascular Surgery",
  "Neurology & Neurosurgery",
  "Orthopedics",
  "Pediatrics",
  "Other / Custom Unit",
];
