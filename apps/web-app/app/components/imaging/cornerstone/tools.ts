/**
 * The Cornerstone tools stack, bound to HOROS interaction.
 *
 * Mouse map (HOROS / PACS convention, not the library default):
 *
 *   left drag   window/level     MouseBindings.Primary
 *   right drag  pan              MouseBindings.Secondary
 *   middle drag zoom             MouseBindings.Auxiliary
 *   wheel       scroll the stack MouseBindings.Wheel
 *
 * Cornerstone's own defaults differ: the W/L tool wants
 * Primary_And_Secondary, and the stack scroll tool is passive by default. Both
 * are overridden here because the default map is a modifier-chord scheme that a
 * radiologist driving a workstation mouse will not use.
 *
 * Two tool groups, not one
 * ------------------------
 * `StackScrollTool` consumes wheel events to change slice. If it shared a group
 * with `ZoomTool` and `WindowLevelTool`, a single wheel gesture would be
 * arbitrated between them by the tool group's active-primary-button rules and
 * would behave differently depending on which tool was last clicked. Splitting
 * the wheel-owning tool into its own group makes the gesture deterministic:
 * wheel always scrolls, always.
 */

import type { ToolClass, ToolsModule } from './runtimeTypes';
import { HOROS_MOUSE_BINDINGS, ToolMode } from './types';

/**
 * Every tool class the HOROS tool panel can activate.
 *
 * `@cornerstonejs/tools` `init()` installs event listeners and configuration
 * but registers NO tools. The module-level `addTool(ToolClass)` populates
 * `state.tools[toolName]`, and `ToolGroup.addTool(name)` looks the name up
 * there. Skipping registration produces a tool group whose tools silently do
 * nothing: window/level, zoom and pan would all look selectable and move
 * nothing.
 *
 * A literal list rather than runtime discovery, so a tool dropped in a future
 * release fails loudly instead of leaving a dead button in the panel. Each
 * entry's static `toolName` matches an entry in TOOL_MODE_TO_TOOL below.
 */
export const CORNERSTONE_TOOL_CLASS_NAMES = [
  'WindowLevelTool',
  'PanTool',
  'ZoomTool',
  'PlanarRotateTool',
  'StackScrollTool',
  'LengthTool',
  'ProbeTool',
  'RectangleROITool',
  'PlanarFreehandROITool',
  'LivewireContourTool',
  'BidirectionalTool',
  'ArrowAnnotateTool',
] as const;

/**
 * Registers the tool classes with the tools layer, then reports which ones were
 * found.
 *
 * Idempotent: `addTool` only stores a class that is not yet present, so repeated
 * calls (React StrictMode double-invokes effects) are harmless.
 *
 * The classes are read off the `tools` module object rather than imported here,
 * because that object is the already-dynamic import of `@cornerstonejs/tools`
 * made in init.ts. Importing it again at module scope would both duplicate the
 * bundle and force top-level await into this module.
 */
export function registerHorosToolClasses(tools: ToolsModule): {
  registered: string[];
  missing: string[];
} {
  const classes = tools as unknown as Record<string, ToolClass | undefined>;
  const registered: string[] = [];
  const missing: string[] = [];

  for (const exportName of CORNERSTONE_TOOL_CLASS_NAMES) {
    const ToolClass = classes[exportName];
    if (!ToolClass || typeof ToolClass.toolName !== 'string' || ToolClass.toolName === '') {
      missing.push(exportName);
      continue;
    }
    tools.addTool(ToolClass);
    registered.push(ToolClass.toolName);
  }

  return { registered, missing };
}

/** Thrown when a tool group cannot be created, which is not recoverable. */
export class ToolGroupUnavailableError extends Error {
  constructor(id: string) {
    super(
      `Cornerstone refused to create the tool group "${id}". This happens when ` +
        'another copy of @cornerstonejs/tools is loaded, so two tool stores ' +
        'exist and this one is not the one the viewports are registered in.',
    );
    this.name = 'ToolGroupUnavailableError';
  }
}

/** Returns a tool group by id, or throws with the reason it is missing. */
function requireToolGroup(tools: ToolsModule, id: string) {
  const group = tools.ToolGroupManager.getToolGroup(id);
  if (!group) throw new ToolGroupUnavailableError(id);
  return group;
}

/** True when a tool group with this id already exists. */
function toolGroupExists(tools: ToolsModule, id: string): boolean {
  return tools.ToolGroupManager.getAllToolGroups().some((group) => group.id === id);
}

/**
 * The single tool group owning every viewport, the pointer tools and the wheel.
 *
 * There is deliberately only ONE group. Cornerstone 5 resolves the tool group
 * for an event with `getToolGroupForViewport`, which throws as soon as two
 * groups claim the same (renderingEngineId, viewportId) pair:
 *
 *     Error: Multiple tool groups found for renderingEngineId ... You should
 *     only have one tool group per viewport in a renderingEngine.
 *
 * A viewport in two groups therefore breaks every pointer event, not just the
 * scroll one. Wheel does not need its own group to be reliable: Cornerstone
 * de-duplicates conflicting mouse bindings within a group (`hasSameBinding`)
 * and dispatches wheel separately from drag, so `StackScroll` bound to the
 * wheel button and `WindowLevel` bound to the primary button coexist in one
 * group without arbitrating against each other.
 */
export const PRIMARY_TOOL_GROUP_ID = 'horos-primary-tool-group';

/**
 * Retained id of the former dedicated wheel group.
 *
 * Kept only so `destroyHorosToolGroups` can remove one left behind by an older
 * bundle in a long-lived session. Nothing attaches to it any more.
 */
const LEGACY_SCROLL_TOOL_GROUP_ID = 'horos-scroll-tool-group';

/**
 * Pointer tools added to the primary group, in right-panel order.
 *
 * `Magnify`, `ReferenceCursors` and the segmentation families are deliberately
 * absent: the product intent calls for a fixed measurement stack, and adding a
 * tool here puts its button in the panel.
 */
export const PRIMARY_TOOL_NAMES = [
  'WindowLevel',
  'Pan',
  'Zoom',
  'PlanarRotate',
  'StackScroll',
  'Length',
  'Probe',
  'RectangleROI',
  'PlanarFreehandROI',
  'LivewireContour',
  'ArrowAnnotate',
  'Bidirectional',
  'ScaleOverlay',
  'OrientationMarker',
] as const;

/** Freehand/livewire style annotation tools present in 5.11.4. */
export const ANNOTATION_TOOL_NAMES = ['PlanarFreehandROI', 'LivewireContour', 'ArrowAnnotate'] as const;

/**
 * Maps a viewer tool mode to the Cornerstone tool name.
 *
 * `Flip` and `Invert` are absent on purpose: in Cornerstone they are
 * camera/property operations on the viewport, not tools with bindings, and
 * modelling them as tools here would produce a button that silently does
 * nothing. `Cine` likewise drives playback through the cine utility rather than
 * a mouse tool.
 */
const TOOL_MODE_TO_TOOL: Readonly<Partial<Record<ToolMode, string>>> = {
  [ToolMode.WindowLevel]: 'WindowLevel',
  [ToolMode.Pan]: 'Pan',
  [ToolMode.Zoom]: 'Zoom',
  [ToolMode.Rotate]: 'PlanarRotate',
  [ToolMode.StackScroll]: 'StackScroll',
  [ToolMode.Length]: 'Length',
  [ToolMode.Probe]: 'Probe',
  [ToolMode.RectangleRoi]: 'RectangleROI',
  [ToolMode.FreehandRoi]: 'PlanarFreehandROI',
  [ToolMode.Livewire]: 'LivewireContour',
  [ToolMode.Bidirectional]: 'Bidirectional',
  [ToolMode.ArrowAnnotate]: 'ArrowAnnotate',
};

/** The Cornerstone tool a viewer tool mode maps to, or null when there is none. */
export function toolNameForMode(mode: ToolMode): string | null {
  return TOOL_MODE_TO_TOOL[mode] ?? null;
}

/** A handle to the two tool groups. */
export interface HorosToolGroups {
  primary: string;
  scroll: string;
}

/**
 * Creates both tool groups and binds the HOROS mouse map.
 *
 * Destroys any existing groups under the same ids first: `createToolGroup`
 * throws on a duplicate id, and a StrictMode double-invoke reaches this twice.
 */
export function createHorosToolGroups(tools: ToolsModule): HorosToolGroups {
  const { ToolGroupManager } = tools;

  // Drop a group left by an older two-group bundle before creating ours.
  if (toolGroupExists(tools, LEGACY_SCROLL_TOOL_GROUP_ID)) {
    ToolGroupManager.destroyToolGroup(LEGACY_SCROLL_TOOL_GROUP_ID);
  }

  // Destroys any existing group under the same id first: `createToolGroup`
  // throws on a duplicate id, and a StrictMode double-invoke reaches this twice.
  if (toolGroupExists(tools, PRIMARY_TOOL_GROUP_ID)) {
    ToolGroupManager.destroyToolGroup(PRIMARY_TOOL_GROUP_ID);
  }

  const primary = ToolGroupManager.createToolGroup(PRIMARY_TOOL_GROUP_ID);
  if (!primary) throw new ToolGroupUnavailableError(PRIMARY_TOOL_GROUP_ID);
  for (const name of PRIMARY_TOOL_NAMES) {
    primary.addTool(name);
  }

  // Both ids report the one group. The shape is kept because callers read
  // `.scroll` to bind the wheel, and the wheel now lives in the primary group.
  return { primary: PRIMARY_TOOL_GROUP_ID, scroll: PRIMARY_TOOL_GROUP_ID };
}

/**
 * Binds the pointer tools and the wheel to the HOROS mouse map.
 *
 * Only the left, right and middle pointers are bound actively, and nothing here
 * claims Primary_And_Secondary, so a two-button chord reaches no tool instead of
 * a second window/level gesture.
 */
export function applyHorosMouseBindings(tools: ToolsModule): void {
  const primary = requireToolGroup(tools, PRIMARY_TOOL_GROUP_ID);

  primary.setToolActive('WindowLevel', {
    bindings: [{ mouseButton: HOROS_MOUSE_BINDINGS.windowLevel }],
  });
  primary.setToolActive('Pan', {
    bindings: [{ mouseButton: HOROS_MOUSE_BINDINGS.pan }],
  });
  primary.setToolActive('Zoom', {
    bindings: [{ mouseButton: HOROS_MOUSE_BINDINGS.zoom }],
  });

  // Scroll-through-stack on the wheel. The wheel is dispatched separately from
  // the drag bindings above and shares no mouse button with them, so the two
  // coexist in one group.
  primary.setToolActive('StackScroll', {
    bindings: [{ mouseButton: HOROS_MOUSE_BINDINGS.wheel }],
  });
}

/**
 * Arms one tool and disarms the others, so a single left-drag gesture maps to a
 * single interpretation.
 *
 * Returns the tool that was armed, or null for a mode with no tool binding
 * (`None`, `Flip`, `Cine`). Measurement tools are armed with
 * `Primary_And_Secondary` so the usual left-drag draw works while the plain
 * left drag stays available to the caller for W/L.
 */
export function activateToolMode(tools: ToolsModule, mode: ToolMode): string | null {
  const primary = requireToolGroup(tools, PRIMARY_TOOL_GROUP_ID);
  const target = toolNameForMode(mode);

  for (const name of PRIMARY_TOOL_NAMES) {
    if (name === 'StackScroll') continue;
    primary.setToolPassive(name);
  }

  if (!target) return null;

  if (isMeasurementTool(target)) {
    primary.setToolActive(target, {
      bindings: [{ mouseButton: HOROS_MOUSE_BINDINGS.windowLevel | HOROS_MOUSE_BINDINGS.pan }],
    });
  } else {
    primary.setToolActive(target);
  }
  return target;
}

/** True for tools that draw an annotation rather than transform the image. */
export function isMeasurementTool(toolName: string): boolean {
  return (ANNOTATION_TOOL_NAMES as readonly string[]).includes(toolName) ||
    toolName === 'RectangleROI' ||
    toolName === 'Probe' ||
    toolName === 'Bidirectional';
}

/**
 * Adds a viewport to the tool group so it receives pointer and wheel events.
 *
 * Registers it in exactly ONE group. Cornerstone's `getToolGroupForViewport`
 * throws when two groups claim the same (renderingEngineId, viewportId) pair,
 * so a viewport present in two groups loses every pointer event - which is how
 * the viewports ended up rendering nothing at all.
 *
 * Any pre-existing registration for this viewport id is pruned first. Nothing
 * else removes it: destroying a RenderingEngine does not touch the tools store,
 * so an unmounted viewport would otherwise linger and poison later mounts.
 *
 * Throws when the group is missing: a viewport that is not in the tool group
 * silently ignores every drag, and a radiologist reads that as a frozen
 * workstation rather than as a bug. Failing loudly here is the honest option.
 */
export function attachViewportToToolGroups(
  tools: ToolsModule,
  viewportId: string,
  renderingEngineId?: string,
): void {
  const group = requireToolGroup(tools, PRIMARY_TOOL_GROUP_ID);

  // Prune by viewport id, which is unique per mount. `removeViewports` matches
  // on the stored renderingEngineId, so each stored pair is removed on its own
  // terms rather than with a guessed engine id.
  if (renderingEngineId) group.removeViewports(renderingEngineId, viewportId);
  for (const info of [...group.viewportsInfo]) {
    if (info.viewportId === viewportId && info.renderingEngineId) {
      group.removeViewports(info.renderingEngineId, info.viewportId);
    }
  }

  group.addViewport(viewportId, renderingEngineId);
}

/** Removes a viewport from the tool group. Called when a viewport is torn down. */
export function detachViewportFromToolGroups(
  tools: ToolsModule,
  renderingEngineId: string,
  viewportId: string,
): void {
  // `removeViewports(renderingEngineId, viewportId?)` matches on the engine id
  // stored by addViewport, NOT on the tool group id. Passing the group id here
  // matched nothing, so torn-down viewports stayed registered forever.
  if (!toolGroupExists(tools, PRIMARY_TOOL_GROUP_ID)) return;
  requireToolGroup(tools, PRIMARY_TOOL_GROUP_ID).removeViewports(
    renderingEngineId,
    viewportId,
  );
}

/**
 * Destroys the tool group.
 *
 * Part of a full workstation teardown only. Individual viewports should use
 * `detachViewportFromToolGroups` instead, since destroying the shared group
 * strips tools from every live viewport at once.
 */
export function destroyHorosToolGroups(tools: ToolsModule): void {
  for (const id of [PRIMARY_TOOL_GROUP_ID, LEGACY_SCROLL_TOOL_GROUP_ID]) {
    if (toolGroupExists(tools, id)) tools.ToolGroupManager.destroyToolGroup(id);
  }
}
