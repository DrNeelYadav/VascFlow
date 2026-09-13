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
