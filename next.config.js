const { withContentlayer } = require('next-contentlayer');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  // typescript: {
  //   ignoreBuildErrors: true
  // },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }

    return config;
  }
};

module.exports = withContentlayer(nextConfig);
