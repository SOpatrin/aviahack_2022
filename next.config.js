/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH || '',
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
        source: '/aviahack_2022',
        destination: '/1/logistic',
        permanent: false,
      },
      {
        source: '/:storeId',
        destination: '/:storeId/logistic',
        permanent: false,
      },
      {
        source: '/aviahack_2022/:storeId',
        destination: '/:storeId/logistic',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
