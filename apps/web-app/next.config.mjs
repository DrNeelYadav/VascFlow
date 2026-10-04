// The Cornerstone WASM codec aliases live in the repo-root next.config.mjs so
// there is exactly one definition. That file is never loaded by Next on its
// own (every script points Next at `apps/web-app` as the project directory),
// so it must be imported here rather than duplicated.
import { cornerstoneBundlerConfig } from '../../next.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: [
    '@vascule/ui-kit',
    '@vascule/db',
    '@vascule/feature-patient-vitals',
    '@vascule/feature-ot-scheduling',
    '@vascule/feature-dicom-viewer',
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
  // Aliases node core modules (fs/path/crypto/...) to an empty module for the
  // browser target, so the emscripten codecs' ENVIRONMENT_IS_NODE branch cannot
  // fail the compile with "Module not found: Can't resolve 'fs'".
  ...cornerstoneBundlerConfig,
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
