/**
 * Cornerstone codec bundler configuration - the single source of truth.
 *
 * This module is imported by `apps/web-app/next.config.mjs`, which is the
 * config Next.js actually loads: every `dev`/`build` script in the root
 * package.json passes `apps/web-app` as the project directory, and
 * `npm run dev` inside the app also runs from that directory. A standalone
 * `next.config.mjs` at the repo root is never read, which is why an earlier
 * attempt to fix the codec failure here had no effect at all.
 *
 * Why an alias is needed
 * ----------------------
 * `@cornerstonejs/dicom-image-loader`'s `dist/esm/shared/decoders/index.js`
 * barrel statically imports every WASM decoder, and each of those is an
 * emscripten bundle containing
 *
 *     if (ENVIRONMENT_IS_NODE) { var fs = require('fs'); var nodePath = require('path'); ... }
 *
 * The runtime guard means a browser never executes the branch, but the
 * `require()` calls are statically visible to the bundler, so Turbopack tries
 * to resolve `fs` for the browser target and fails the compile with
 * "Module not found: Can't resolve 'fs'", which surfaces as HTTP 500 on
 * /dashboard/imaging. Aliasing the node core modules to an empty module makes
 * that branch dead at build time while leaving every codec fully functional:
 * the WASM binaries still load through the bundler's
 * `new URL(..., import.meta.url)` asset resolution, so JPEG, JPEG-LS, JPEG2000
 * and HTJ2K decoding keeps working.
 *
 * Turbopack supports conditional (`browser`) aliasing; the value shape is
 * `{ browser: '<module>' }` per the Next 16 docs. Bare and `node:`-prefixed
 * specifiers are both listed because the emscripten bundles use the bare form
 * while other transitive dependencies use the prefixed one.
 */

/** Module specifiers the emscripten codec bundles can pull into a browser build. */
export const CORECODEC_MODULE_IDS = [
  'fs',
  'node:fs',
  'path',
  'node:path',
  'crypto',
  'node:crypto',
  'stream',
  'node:stream',
  'buffer',
  'node:buffer',
  'util',
  'node:util',
  'url',
  'node:url',
  'os',
  'node:os',
];

/**
 * The empty stub each node core module is aliased to.
 *
 * Must stay RELATIVE to the Turbopack root. Turbopack rejects Windows
 * absolute paths in `resolveAlias` outright - it fails the compile with
 * "Can't resolve 'C:/...'" / "windows imports are not implemented yet" - so an
 * absolute path here trades one resolution error for another.
 *
 * The Turbopack root is the project directory Next was pointed at, which is
 * `apps/web-app` in every supported invocation: `npm run dev` inside the app,
 * and the root `dev`/`build` scripts which all pass `apps/web-app` as the
 * directory argument. So this specifier resolves to
 * apps/web-app/src/__tests__/empty-module.ts in both cases.
 */
const EMPTY_MODULE = './src/__tests__/empty-module.ts';

/**
 * Turbopack + webpack configuration required to bundle the Cornerstone codecs.
 *
 * Safe to spread into any NextConfig: `turbopack` and `webpack` are both
 * top-level NextConfig keys.
 */
export const cornerstoneBundlerConfig = {
  turbopack: {
    resolveAlias: Object.fromEntries(
      CORECODEC_MODULE_IDS.map((id) => [id, { browser: EMPTY_MODULE }]),
    ),
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Webpack path: Next 16 defaults to Turbopack, but `next build --webpack`
      // still needs this. `false` means "resolve to an empty module", which is
      // the same guarantee the `browser` alias above gives Turbopack.
      config.resolve.fallback = {
        ...config.resolve.fallback,
        ...Object.fromEntries(CORECODEC_MODULE_IDS.map((id) => [id, false])),
      };
    }
    return config;
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-label',
      '@radix-ui/react-slot',
      'framer-motion',
      '@tanstack/react-query',
      'zustand',
    ],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'route.ts'],
  // Cornerstone WASM codec aliases for both bundlers. Defined above so
  // apps/web-app/next.config.mjs (the config Next actually loads) can share
  // this exact object rather than re-declaring it.
  ...cornerstoneBundlerConfig,
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(self), microphone=(), geolocation=()',
        },
      ],
    },
    {
      source: '/encyclopedia/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=86400, stale-while-revalidate=604800',
        },
      ],
    },
    {
      source: '/calculators/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=86400, stale-while-revalidate=604800',
        },
      ],
    },
  ],
};

export default nextConfig;
