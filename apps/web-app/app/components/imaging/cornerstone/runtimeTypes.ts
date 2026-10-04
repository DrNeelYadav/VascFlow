/**
 * The parts of the Cornerstone API this viewer layer touches, typed.
 *
 * These are declared structurally rather than re-exported from the packages
 * so that the three Cornerstone modules (`init`, `dicomSource`, `tools`) can
 * share one vocabulary without each importing a different private deep path.
 * A `.d.ts`-only import of a private module path is the kind of thing that
 * breaks silently on a patch upgrade, and the surface actually used here is
 * small: the tool-group store, the wadors metadata store, and the core
 * viewport surface.
 *
 * Everything is `readonly` because these describe a module the viewer drives,
 * not data it owns.
 */

/**
 * `IToolGroup` is re-exported from `@cornerstonejs/tools` only through its
 * `Types` namespace, not as a root named export. This alias is the single place
 * that knows that.
 */
import type { Types as CornerstoneToolsTypes } from '@cornerstonejs/tools';

export type ToolGroup = CornerstoneToolsTypes.IToolGroup;

/**
 * A Cornerstone tool class.
 *
 * Registration reads `toolName` off the class, so this is the class itself and
 * not an instance: `addTool(ToolClass)` stores `{ toolClass }` in the tools
 * state, and `toolGroup.addTool(name)` later looks the name up there. Passing a
 * name to the module-level `addTool` throws, and passing a name straight to the
 * tool group silently registers nothing.
 */
export interface ToolClass {
  toolName?: string;
  name?: string;
}

/** The `@cornerstonejs/tools` members this layer uses. */
export interface ToolsModule {
  /**
   * Registers a tool class so a tool group can reference it by name.
   *
   * This is required before `ToolGroup.addTool(name)`: the tools `init()` does
   * NOT register tools, it only installs event listeners and config.
   */
  addTool(ToolClass: ToolClass): void;
  /** Creates a tool group. Returns undefined for an unusable id. */
  ToolGroupManager: {
    createToolGroup(id: string): ToolGroup | undefined;
    destroyToolGroup(id: string): void;
    /** Every live tool group. Used to detect a pre-existing group. */
    getAllToolGroups(): ToolGroup[];
    getToolGroup(id: string): ToolGroup | undefined;
  };
}

/** The DICOMweb metadata store the wadors loader reads geometry from. */
export interface WadorsMetaDataStore {
  /** Every key is a DICOMweb tag; values may omit `Value` when absent. */
  add(imageId: string, metadata: Record<string, unknown>): void;
  get(imageId: string): Record<string, unknown> | undefined;
  remove(imageId: string): void;
  purge(): void;
}

/** The DICOM image loader members this layer uses. */
export interface LoaderModule {
  /** The wadors scheme, which owns both the loader and the metadata store. */
  wadors: {
    metaDataManager: WadorsMetaDataStore;
  };
}

/** The core members this layer uses. */
export interface CoreModule {
  isCornerstoneInitialized(): boolean;
  init(configuration?: Record<string, unknown>): boolean;
  /** Resolves a viewport by id. */
  getRenderingEngine(id: string): unknown;
  /** Metadata lookup, used to read back what the overlay displays. */
  metaData: {
    get<T = unknown>(type: string, imageId: string): T | undefined;
  };
  /** Cornerstone's event target, for viewport lifecycle events. */
  eventTarget: unknown;
}
