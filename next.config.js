/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'development' ? '' : '/aviahack_2022',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return defaultPathMap;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/1/logistic',
        permanent: false,
      },
      {
        source: '/:storeId',
        destination: '/:storeId/logistic',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
