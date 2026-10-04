/**
 * One-time Cornerstone initialisation for the browser.
 *
 * Why this file exists
 * --------------------
 * Cornerstone 5 registers global state in three separate places: the core
 * rendering registry, the `wadouri:`/`wadors:` image-loader schemes, and the
 * tools store. All three throw or corrupt state on a second init. React 18
 * StrictMode double-invokes effects, and Next.js App Router re-mounts on
 * navigation, so "call init once at module scope" is not sufficient on its own.
 * This module owns the single memo that all three share.
 *
 * The worker and WASM wiring
 * --------------------------
 * `@cornerstonejs/dicom-image-loader` starts its decode pool with
 *
 *     new Worker(new URL('./decodeImageFrameWorker.js', import.meta.url), { type: 'module' })
 *
 * and each codec resolves its `.wasm` through
 *
 *     new URL('@cornerstonejs/codec-openjpeg/decodewasm', import.meta.url)
 *
 * Both are bundler-specific `new URL(..., import.meta.url)` asset patterns with
 * a bare package specifier, which is exactly what webpack understands and what
 * needs explicit help elsewhere. See ../../../../../../../next.config.mjs (the
 * `turbopack.rules` entry and the `webpack` callback) for the build-side
 * half; this file is the runtime half and reports what actually initialised.
 *
 * Browser-only: the loader spawns workers and compiles WASM, neither of which
 * exists during server rendering. Every export degrades to a typed no-op
 * outside the browser rather than throwing inside React's render tree.
 */

import type { LoaderOptions } from './dicomSource';
import type { ToolsModule as ToolsSurface } from './runtimeTypes';
import { registerHorosToolClasses } from './tools';

/** Cornerstone core, as a value. Resolved lazily so SSR never pulls it in. */
type CoreModule = typeof import('@cornerstonejs/core');
/** Cornerstone tools, as a value. */
type ToolsModule = typeof import('@cornerstonejs/tools');
/** DICOM image loader, as a value. */
type LoaderModule = typeof import('@cornerstonejs/dicom-image-loader');

/** True only in a real browser. Guards every side-effecting entry point. */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Codecs wired at init, in the order they are registered.
 *
 * Every one is a WASM decoder; the two transfer syntaxes the departmental
 * archive actually uses (Implicit VR LE and Explicit VR LE) need none of them,
 * but the Telegram intake path can deliver compressed objects, and an
 * undecodable series is a silent black viewport rather than an error.
 */
export const CODEC_NAMES = [
  'JPEGBaseline8Bit',
  'JPEGLossless',
  'JPEGLS',
  'JPEG2000',
  'HTJ2K',
  'JPEGBaseline12Bit',
] as const;

export type CodecName = (typeof CODEC_NAMES)[number];

/** Outcome of initialising one codec. */
export interface CodecStatus {
  name: CodecName;
  /** True when the WASM module compiled and its decoder was constructed. */
  initialised: boolean;
  /** Populated on failure; null on success. */
  error: string | null;
}

/** What `initialiseCornerstone` resolves to. */
export interface CornerstoneRuntime {
  core: CoreModule;
  tools: ToolsModule;
  loader: LoaderModule;
  /** Per-codec outcome, so the UI can report a codec failure honestly. */
  codecs: CodecStatus[];
  /** Number of decode workers the loader was allowed to start. */
  maxWebWorkers: number;
  /**
   * `toolName` of every tool class registered with the tools layer.
   *
   * Recorded because registration is the step that silently fails: without it
   * the tool panel renders buttons that look live and move nothing.
   */
  registeredTools: string[];
}

/** Raised when initialisation is attempted outside a browser. */
export class CornerstoneBrowserOnlyError extends Error {
  constructor() {
    super(
      'Cornerstone can only be initialised in a browser: the decode pool ' +
        'spawns Web Workers and the codecs compile WebAssembly, neither of ' +
        'which exist during server rendering. Guard the call with ' +
        'isBrowser() or call it from a useEffect.',
    );
    this.name = 'CornerstoneBrowserOnlyError';
  }
}

/**
 * The in-flight or settled init, shared across every caller.
 *
 * Held on `globalThis` rather than in module scope on purpose: Next.js App
 * Router gives the client more than one module instance across route segments
 * and HMR boundaries, and a module-level variable would happily initialise
 * Cornerstone twice. The symbol key is non-enumerable-adjacent and namespaced
 * so it cannot collide with another library's global.
 */
const RUNTIME_KEY = '__horosCornerstoneRuntime__';

type RuntimeGlobal = typeof globalThis & {
  [RUNTIME_KEY]?: Promise<CornerstoneRuntime>;
};

function globalRef(): RuntimeGlobal {
  return globalThis as RuntimeGlobal;
}

/**
 * The shared init promise, or null if init has not started.
 *
 * Exposed so the viewport components can render a loading state against a
 * real promise rather than a boolean they maintain themselves.
 */
export function getCornerstoneRuntimePromise(): Promise<CornerstoneRuntime> | null {
  return globalRef()[RUNTIME_KEY] ?? null;
}

/**
 * Offscreen WebGL contexts per rendering engine.
 *
 * Cornerstone's own default is 7, sized for a workstation where ONE engine
 * hosts many viewports and shares a pool of contexts between them. This viewer
 * is the opposite shape: `StudyViewport` gives every grid slot its OWN
 * `RenderingEngine`, and an engine with a single viewport only ever uses pool
 * index 0 (`addVtkjsDrivenViewport` assigns
 * `this._viewports.size % contexts.length`, which is 0 for a lone viewport).
 *
 * The default therefore buys six unused contexts per slot. A 2x2 grid asks the
 * browser for 4 engines x 7 contexts = 28 offscreen contexts plus the one
 * capability probe, against Chrome's hard cap of 16 live WebGL contexts per
 * process. Past the cap the browser force-loses the OLDEST contexts, silently:
 * no `webglcontextlost` reaches a listener attached after the loss, and the
 * offscreen canvas keeps accepting draw calls while every GL object it holds is
 * gone. VTK then compiles shaders against a dead context, `readyShaderProgram`
 * returns null, and the render throws `Cannot read properties of null (reading
 * 'isAttributeUsed')` from `ImageMapper.setMapperShaderParameters` before a
 * single `drawImage` reaches the on-screen canvas. The symptom is a black
 * viewport whose overlay still reports a loaded image, which is exactly what a
 * radiologist cannot diagnose and what this value exists to prevent.
 *
 * One context per engine is not a workaround: it is the exact number a
 * one-viewport engine consumes. Raise it only alongside a change that puts
 * several viewports on one engine.
 */
export const WEBGL_CONTEXTS_PER_ENGINE = 1;

/** Options the viewer may override at init time. */
export interface CornerstoneInitOptions {
  /**
   * Decode worker count. Defaults to `navigator.hardwareConcurrency / 2`
   * (the loader's own default) clamped to 1..4: the viewer is one of several
   * Next.js dev processes on this workstation and the pool competes with them.
   */
  maxWebWorkers?: number;
  /**
   * Base path the codecs resolve `.wasm` against. Left unset so the bundler's
   * `new URL(..., import.meta.url)` resolution is used, which is the only
   * option that survives both Turbopack and webpack without a rewrite.
   */
  wasmBasePath?: string;
  /**
   * Offscreen WebGL contexts each rendering engine may create.
   *
   * Defaults to {@link WEBGL_CONTEXTS_PER_ENGINE}. Raise it only when several
   * viewports share one engine; see that constant for why the library default
   * of 7 exhausts the browser's context budget on this grid.
   */
  webGlContextCount?: number;
}

/**
 * Picks a worker count from `hardwareConcurrency`.
 *
 * Returns null outside a browser so the caller can fall back to the loader's
 * own default instead of guessing.
 */
export function resolveMaxWebWorkers(hardwareConcurrency?: number): number | null {
  const cores =
    hardwareConcurrency ??
    (typeof navigator !== 'undefined' ? navigator.hardwareConcurrency : undefined);
  if (typeof cores !== 'number' || !Number.isFinite(cores) || cores < 1) return null;
  return Math.max(1, Math.min(4, Math.floor(cores / 2)));
}

/**
 * Initialises a codec, converting a rejection into a reported status.
 *
 * Never throws: a codec that cannot compile must not take down the whole
 * viewer, but it must be reported rather than swallowed, or a compressed
 * series fails as a silent black rectangle.
 */
async function initialiseOneCodec(
  loader: LoaderModule,
  name: CodecName,
  decodeConfig: LoaderOptions['decodeConfig'],
): Promise<CodecStatus> {
  const initializer = loader.initializers[name] as
    | ((config?: LoaderOptions['decodeConfig']) => Promise<void>)
    | undefined;
  if (typeof initializer !== 'function') {
    return { name, initialised: false, error: 'initializer not exported by this build' };
  }
  try {
    await initializer(decodeConfig);
    return { name, initialised: true, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { name, initialised: false, error: message };
  }
}

/**
 * Initialises Cornerstone core, the DICOM image loader, the codecs and the
 * tools stack. Idempotent and safe under StrictMode double-invocation.
 *
 * Concurrent callers receive the same promise; callers that arrive after a
 * successful init also receive it rather than re-initialising. A rejected init
 * clears the memo so the next mount retries instead of replaying the failure
 * forever.
 */
export function initialiseCornerstone(
  options: CornerstoneInitOptions = {},
): Promise<CornerstoneRuntime> {
  if (!isBrowser()) return Promise.reject(new CornerstoneBrowserOnlyError());

  const existing = globalRef()[RUNTIME_KEY];
  if (existing) return existing;

  const started = runInit(options).catch((err: unknown) => {
    // Only clear if this is still the memo: a later successful init must not
    // be wiped by the failure of this one.
    if (globalRef()[RUNTIME_KEY] === started) {
      delete globalRef()[RUNTIME_KEY];
    }
    throw err;
  });

  globalRef()[RUNTIME_KEY] = started;
  return started;
}

/** The actual init sequence, isolated so it can be memoised safely. */
async function runInit(options: CornerstoneInitOptions): Promise<CornerstoneRuntime> {
  // Dynamic imports keep every Cornerstone module out of the server bundle.
  const core = (await import('@cornerstonejs/core')) as CoreModule;
  const loader = (await import('@cornerstonejs/dicom-image-loader')) as LoaderModule;

  // Bounded BEFORE the first engine exists. `ContextPoolRenderingEngine` reads
  // this value in its constructor to size its own `WebGLContextPool`, so a value
  // set later would leave already-constructed engines on the library default.
  // See WEBGL_CONTEXTS_PER_ENGINE for the failure this prevents.
  const webGlContextCount = Math.max(
    1,
    Math.floor(options.webGlContextCount ?? WEBGL_CONTEXTS_PER_ENGINE),
  );

  // core.init() is idempotent by contract in 5.11.4 (isCornerstoneInitialized),
  // but calling it under our own memo keeps the guard in one place.
  if (!core.isCornerstoneInitialized()) {
    // Only `rendering` is set, so Cornerstone's deepMerge keeps every other
    // default. The cast is confined to this one call because the published
    // `InitConfiguration` type predates partial configs.
    const initConfig = { rendering: { webGlContextCount } } as Parameters<
      typeof core.init
    >[0];
    core.init(initConfig);
  }

  const resolvedWorkers = resolveMaxWebWorkers(options.maxWebWorkers);
  const maxWebWorkers = resolvedWorkers ?? 2;

  // Deliberately no wasmBasePath: unset lets each codec fall back to the
  // bundler-resolved `new URL('@cornerstonejs/codec-*/decodewasm', import.meta.url)`
  // asset URL, which is the path that works under both bundlers. Setting a
  // base path here would pin the codecs to a static folder that does not exist.
  const decodeConfig = options.wasmBasePath ? { wasmBasePath: options.wasmBasePath } : undefined;

  const loaderOptions: LoaderOptions = { maxWebWorkers };
  if (decodeConfig) loaderOptions.decodeConfig = decodeConfig;

  // Registers wadouri:/wadors: and starts the decode worker pool.
  loader.init(loaderOptions);

  const codecs = await Promise.all(
    CODEC_NAMES.map((name) => initialiseOneCodec(loader, name, decodeConfig)),
  );

  const tools = (await import('@cornerstonejs/tools')) as ToolsModule;
  tools.init();

  // `tools.init()` registers no tools, so the tool classes must be registered
  // by hand. Without this every tool group resolves no tool class and the
  // window/level, zoom and pan buttons silently do nothing.
  // The module's full type and the structural surface `tools.ts` consumes are
  // two views of the same object; this is the boundary between them.
  const registration = registerHorosToolClasses(tools as unknown as ToolsSurface);
  if (registration.missing.length > 0) {
    throw new Error(
      'These Cornerstone tool classes are not exported by @cornerstonejs/tools: ' +
        `${registration.missing.join(', ')}. The tool panel would show buttons ` +
        'that cannot work, so the viewer refuses to start rather than present them.',
    );
  }

  return { core, tools, loader, codecs, maxWebWorkers, registeredTools: registration.registered };
}

/**
 * Test seam: forgets the memoised runtime.
 *
 * Only used by tests and by a genuine teardown of the whole workstation. The
 * Cornerstone registries themselves are process-global and are not torn down,
 * so this returns the module to its pre-init state without claiming the
 * engine is unloaded.
 */
export function resetCornerstoneRuntimeForTests(): void {
  delete globalRef()[RUNTIME_KEY];
}
