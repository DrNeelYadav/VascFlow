/**
 * Single source of truth for clinical workspace navigation.
 *
 * Every navigation surface in the application - desktop sidebar, mobile bottom
 * dock, command palette, and the in-page workspace tab bar - renders from this
 * registry. Adding a destination here makes it appear everywhere at once; there
 * is no second list to keep in sync.
 *
 * Routes are stable. Workspace membership is presentation only: collapsing
 * twenty-two routes into eight slots never changes a URL, so every existing
 * bookmark, deep link and printed handout keeps working.
 */

/** Icon keys, resolved to lucide components by `WorkspaceIcon`. */
export type NavIconKey =
  | "today"
  | "clinic"
  | "pipeline"
  | "dating"
  | "documentation"
  | "consent"
  | "discharge"
  | "logbook"
  | "suite"
  | "library"
  | "inventory"
  | "research"
  | "admin"
  | "quiz";

export interface WorkspaceMember {
  /** Route path, stable and externally linkable. */
  href: string;
  /** Short label for tabs and command palette results. */
  label: string;
  /** Extra search terms so the palette matches clinical vocabulary. */
  keywords?: string;
}

export interface Workspace {
  id: string;
  label: string;
  /** Abbreviated label for the mobile dock, where width is scarce. */
  shortLabel: string;
  icon: NavIconKey;
  /** The route a slot click lands on. Always the member listed first. */
  href: string;
  /** True for personal tools that should not crowd the department workflow. */
  secondary?: boolean;
  /** True for personal items strictly visible only to Dr. Neel Yadav. */
  privateNeelOnly?: boolean;
  members: WorkspaceMember[];
}

/**
 * Department workflow first, in the order a clinician actually moves through a
 * case: see today's list, consult, document, then look things up.
 */
export const WORKSPACES: Workspace[] = [
  {
    id: "today",
    shortLabel: "Schedule",
    label: "Schedule",
    icon: "today",
    href: "/dashboard/calendar",
    members: [
      { href: "/dashboard/calendar", label: "Schedule", keywords: "calendar appointments cath lab slots" },
    ],
  },
  {
    id: "pipeline",
    shortLabel: "Pipeline",
    label: "OPD Pipeline",
    icon: "pipeline",
    href: "/dashboard/op-clinic",
    members: [
      { href: "/dashboard/op-clinic", label: "1. Booking Clinic", keywords: "consultation review booking disposition triage opd clinic" },
      { href: "/dashboard/pre-booking", label: "2. Dating Form", keywords: "dating pre-booking sclerotherapy tace bae bleeder aiims rghs maay a4" },
      { href: "/dashboard/consent", label: "3. Informed Consent", keywords: "consent statutory authorization risks bilingual legal" },
      { href: "/dashboard/operative-notes", label: "4. Operative Note", keywords: "operative note procedure summary wordpad dsa cath lab" },
      { href: "/dashboard/discharge", label: "5. Discharge Card", keywords: "discharge card summary advice wound care surveillance" },
    ],
  },
  {
    id: "imaging",
    shortLabel: "Imaging",
    label: "Imaging & PACS",
    icon: "suite",
    href: "/dashboard/imaging",
    members: [
      { href: "/dashboard/imaging", label: "Imaging & PACS", keywords: "imaging pacs dicom viewer ct dsa angio stone horos" },
    ],
  },
  {
    id: "logbook",
    shortLabel: "Register",
    label: "Register",
    icon: "logbook",
    href: "/dashboard/logbook",
    members: [
      { href: "/dashboard/logbook", label: "Register", keywords: "master register 1090 cases export csv" },
    ],
  },
  {
    id: "research",
    shortLabel: "Research",
    label: "Publications Studio",
    icon: "research",
    href: "/dashboard/publications",
    members: [
      { href: "/dashboard/publications", label: "Publications Studio", keywords: "research manuscripts papers publications vapsa" },
    ],
  },
  {
    id: "quiz",
    shortLabel: "Quiz",
    label: "FRCR 2A Quiz",
    icon: "quiz",
    href: "/dashboard/quiz",
    secondary: true,
    privateNeelOnly: true,
    members: [
      { href: "/dashboard/quiz", label: "FRCR 2A Quiz", keywords: "frcr 2a quiz paeds msk chest gut git cns exam tutor mcq radiodiagnosis" },
    ],
  },
];

/** Administrative console. Rendered outside the workflow, gated on staff role. */
export const ADMIN_ENTRY = {
  href: "/admin",
  label: "Admin Console",
  icon: "admin" as NavIconKey,
};

/** Routes that are not workspace members and render no tab bar. */
const UNGROUPED_ROUTES = new Set(["/dashboard"]);

/** Every member href, flattened. Used for link validation in tests. */
export const ALL_MEMBER_HREFS: string[] = WORKSPACES.flatMap((w) =>
  w.members.map((m) => m.href)
);

/** Find the workspace owning a pathname, if any. */
export function getWorkspaceForPath(pathname: string): Workspace | null {
  if (!pathname || UNGROUPED_ROUTES.has(pathname)) return null;
  // Longest match first so /reports resolves to the Documentation workspace
  // rather than being swallowed by a shorter sibling route.
  const candidates = ALL_MEMBER_HREFS.filter((href) => pathname.startsWith(href));
  if (candidates.length === 0) return null;
  const best = candidates.sort((a, b) => b.length - a.length)[0];
  return WORKSPACES.find((w) => w.members.some((m) => m.href === best)) ?? null;
}

/** True when a workspace slot should read as active for the current route. */
export function isWorkspaceActive(workspace: Workspace, pathname: string): boolean {
  if (workspace.members.some((m) => pathname === m.href)) return true;
  // /dashboard/reports/PT01 is a detail route of the reports member.
  return workspace.members.some(
    (m) => m.href !== "/dashboard" && pathname.startsWith(`${m.href}/`)
  );
}
