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
  | "documentation"
  | "logbook"
  | "suite"
  | "library"
  | "inventory"
  | "research"
  | "admin";

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
    id: "clinic",
    shortLabel: "Clinic",
    label: "OPD Clinic",
    icon: "clinic",
    href: "/dashboard/op-clinic",
    members: [
      { href: "/dashboard/op-clinic", label: "OPD Clinic", keywords: "consultation review booking disposition" },
    ],
  },
  {
    id: "documentation",
    shortLabel: "Docs",
    label: "Documentation",
    icon: "documentation",
    href: "/dashboard/operative-notes",
    members: [
      { href: "/dashboard/operative-notes", label: "Op Notes & Discharge", keywords: "operative note summary sms sheet print discharge" },
    ],
  },
  {
    id: "logbook",
    shortLabel: "Registry",
    label: "Master Registry",
    icon: "logbook",
    href: "/dashboard/logbook",
    members: [
      { href: "/dashboard/logbook", label: "Cath-Lab Registry", keywords: "master logbook 1090 cases export csv" },
    ],
  },
  {
    id: "suite",
    shortLabel: "Imaging",
    label: "Imaging",
    icon: "suite",
    href: "/dashboard/imaging",
    members: [
      { href: "/dashboard/imaging", label: "Imaging", keywords: "dicom cine xa ct mr us viewer" },
    ],
  },
  {
    id: "library",
    shortLabel: "Schemes",
    label: "Scheme Codes",
    icon: "library",
    href: "/dashboard/schemes-correlation",
    members: [
      { href: "/dashboard/schemes-correlation", label: "Scheme Codes", keywords: "scheme package icd billing maay rghs" },
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
