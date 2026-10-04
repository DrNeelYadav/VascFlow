export const WARD_FILTER_OPTIONS = [
  { label: "All Wards / Units", value: "ALL" },
  { label: "Liver ICU / HPB", value: "LIVER_ICU" },
  { label: "Old Gastro Ward", value: "OLD_GASTRO" },
  { label: "SSB (Super Speciality)", value: "SSB" },
  { label: "AGH (Attached General Hospital)", value: "AGH" },
  { label: "SSH (Speciality Hospital)", value: "SSH" },
  { label: "BMRC / Neurology", value: "BMRC_NEURO" },
  { label: "ENT Wards", value: "ENT" },
  { label: "OPD Cases", value: "OPD" },
] as const;

export function matchWardFilter(unit: string, filter: string): boolean {
  if (filter === "ALL") return true;
  const u = (unit || "").toUpperCase();
  if (filter === "LIVER_ICU") {
    return u.includes("ICU") || u.includes("LIVER") || u.includes("HPB") || u.includes("BILLIARY");
  }
  if (filter === "OLD_GASTRO") {
    return u.includes("OLD GASTRO") || u.includes("GASTRO WARD") || u.includes("GASTROLOGY");
  }
  if (filter === "SSB") {
    return u.includes("SSB");
  }
  if (filter === "AGH") {
    return u.includes("AGH") || u.includes("ARUNA");
  }
  if (filter === "SSH") {
    return u.includes("SSH");
  }
  if (filter === "BMRC_NEURO") {
    return u.includes("BMRC") || u.includes("NEURO");
  }
  if (filter === "ENT") {
    return u.includes("ENT");
  }
  if (filter === "OPD") {
    return u.includes("OPD");
  }
  return u.includes(filter.toUpperCase());
}

export function getWardBadgeStyle(unit: string): { bg: string; text: string; border: string } {
  const u = (unit || "").toUpperCase();
  if (u.includes("ICU") || u.includes("LIVER") || u.includes("HPB")) {
    return { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" };
  }
  if (u.includes("OLD GASTRO") || u.includes("GASTRO")) {
    return { bg: "bg-amber-50", text: "text-amber-800", border: "border-amber-200" };
  }
  if (u.includes("SSB")) {
    return { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" };
  }
  if (u.includes("NEURO") || u.includes("BMRC")) {
    return { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" };
  }
  if (u.includes("SSH")) {
    return { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" };
  }
  if (u.includes("AGH") || u.includes("ARUNA")) {
    return { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" };
  }
  if (u.includes("ENT")) {
    return { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" };
  }
  if (u.includes("OPD")) {
    return { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" };
  }
  return { bg: "bg-slate-100", text: "text-slate-700", border: "border-slate-200" };
}
