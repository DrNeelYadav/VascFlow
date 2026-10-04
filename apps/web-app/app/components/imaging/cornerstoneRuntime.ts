/**
 * Boots Cornerstone in the browser for the imaging viewer.
 *
 * Cornerstone 5.x is the rendering engine behind OHIF's viewer extension. OHIF
 * itself cannot be embedded here: its published viewer package is the abandoned
 * v2 line (React 16 peer deps, cornerstone 2.x), and the current v3 line
 * publishes only core/ui/i18n to npm while keeping extensions-cornerstone and
 * dicom-image-loader in the monorepo. Cornerstone is what actually decodes
 * DICOM, paints pixels, windows/levels and runs the measurement tools, so it is
 * the same engine without the dead v2 wrapper around it.
 *
 * Browser-only: the loader starts web workers and codecs, so nothing here may
 * run during server rendering.
 */

import type * as CornerstoneCore from "@cornerstonejs/core";
import type { StackViewport } from "@cornerstonejs/core";

/**
 * The Cornerstone core namespace.
 *
 * In v5 there is no exported `Cornerstone3D` type. The module itself carries
 * `getRenderingEngine`, `RenderingEngine`, `cache` and friends, and that module
 * object is the namespace.
 */
export type CornerstoneNamespace = typeof CornerstoneCore;
export type { StackViewport };

export const RENDERING_ENGINE_ID = "endoflow-rendering-engine";
export const VIEWPORT_ID = "endoflow-viewport";
export const TOOL_GROUP_ID = "endoflow-tool-group";
export const STACK_TOOL_GROUP_ID = "endoflow-stack-tool-group";

/**
 * The tool-group surface this viewer uses.
 *
 * Declared structurally rather than imported: @cornerstonejs/tools does export
 * IToolGroup, but only from a deep path, and pinning a private module path into
 * a type signature makes the build brittle across patch upgrades.
 */
export interface ViewerToolGroup {
  addTool(toolName: string, configuration?: unknown): void;
  addViewport(viewportId: string): void;
  removeViewport?(viewportId: string): void;
  setToolActive(toolName: string, bindingsOptions?: { bindings?: unknown[] }): void;
  setToolEnabled?(toolName: string, enabled?: boolean): void;
}

export interface CornerstoneToolsModule {
  init: (config?: unknown) => void;
  destroy: () => void;
  addTool: (tool: unknown) => void;
  ToolGroupManager: {
    createToolGroup: (id: string) => ViewerToolGroup;
    destroyToolGroup: (id: string) => void;
  };
  PanTool: unknown;
  ZoomTool: unknown;
  WindowLevelTool: unknown;
  StackScrollTool: unknown;
  LengthTool: unknown;
  ProbeTool: unknown;
  RectangleROITool: unknown;
  MagnifyTool: unknown;
  ArrowAnnotateTool: unknown;
}

export interface ImagingRuntime {
  cornerstone: CornerstoneNamespace;
  tools: CornerstoneToolsModule;
}

let runtimePromise: Promise<ImagingRuntime> | null = null;

/** Tool names registered at init, in the order the tool panel shows them. */
export const REGISTERED_TOOLS = [
  "Pan",
  "Zoom",
  "WindowLevel",
  "StackScroll",
  "Length",
  "Probe",
  "RectangleROI",
  "Magnify",
  "ArrowAnnotate",
] as const;

/**
 * Initialises Cornerstone and the DICOM image loader exactly once.
 *
 * Repeat calls return the first promise. Cornerstone and the tools layer both
 * throw on a second init, so this guard is load-bearing, not an optimisation.
 * A rejected init clears the memo so the next mount retries instead of
 * replaying the same failure forever.
 */
export function ensureCornerstoneReady(): Promise<ImagingRuntime> {
  if (runtimePromise) return runtimePromise;

  runtimePromise = (async (): Promise<ImagingRuntime> => {
    const cornerstone = await import("@cornerstonejs/core");
    const tools = (await import("@cornerstonejs/tools")) as unknown as CornerstoneToolsModule;
    const loader = await import("@cornerstonejs/dicom-image-loader");

    await cornerstone.init();

    // init() registers the wadouri:/wadors: schemes and starts the decode
    // workers. Two workers suits the departmental workstation: enough to keep a
    // stack scrolling smoothly without starving the Next.js server.
    await loader.init({ maxWebWorkers: 2 });

    tools.init();

    // Each tool must be registered before a tool group may reference it. v5
    // takes the constructor; the tool name is read off its static toolName.
    for (const ctor of [
      tools.PanTool,
      tools.ZoomTool,
      tools.WindowLevelTool,
      tools.StackScrollTool,
      tools.LengthTool,
      tools.ProbeTool,
      tools.RectangleROITool,
      tools.MagnifyTool,
      tools.ArrowAnnotateTool,
    ]) {
      tools.addTool(ctor);
    }

    return { cornerstone, tools };
  })().catch((err: unknown) => {
    runtimePromise = null;
    throw err;
  });

  return runtimePromise;
}

/**
 * Creates the viewer's two tool groups.
 *
 * Two groups are needed because the stack-scrolling group consumes wheel events
 * to change slice, which would otherwise fight window/level zoom on the same
 * input.
 */
export function createViewerToolGroups(tools: CornerstoneToolsModule): ViewerToolGroup {
  const { ToolGroupManager } = tools;

  ToolGroupManager.destroyToolGroup(TOOL_GROUP_ID);
  ToolGroupManager.destroyToolGroup(STACK_TOOL_GROUP_ID);

  const group = ToolGroupManager.createToolGroup(TOOL_GROUP_ID);
  for (const name of REGISTERED_TOOLS) {
    if (name !== "StackScroll") group.addTool(name);
  }

  const stackGroup = ToolGroupManager.createToolGroup(STACK_TOOL_GROUP_ID);
  stackGroup.addTool("StackScroll");

  return group;
}

/**
 * Binds the primary tool group to a laid-out viewport element.
 *
 * Returns false when the element has no size yet, so the caller retries on the
 * next frame instead of throwing: Cornerstone cannot measure a zero-height div,
 * which is the normal state on first paint inside a flex row.
 */
export function bindToolGroups(
  group: ViewerToolGroup,
  element: HTMLDivElement,
): boolean {
  if (!element || element.clientWidth === 0 || element.clientHeight === 0) return false;
  group.addViewport(VIEWPORT_ID);
  // PACS default mouse map: left drag window/level, right drag pan, middle zoom.
  group.setToolActive("WindowLevel", { bindings: [{ mouseButton: 1 }] });
  group.setToolActive("Pan", { bindings: [{ mouseButton: 2 }] });
  group.setToolActive("Zoom", { bindings: [{ mouseButton: 3 }] });
  group.setToolActive("Magnify", { bindings: [{ mouseButton: 4 }] });
  return true;
}