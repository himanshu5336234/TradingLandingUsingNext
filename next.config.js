module.exports = {
    webpack(config) {
      config.resolve.extensions.push('.ts', '.tsx');
      return config;
    },
    experimental: {
      taint: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'density-uploads-dev.s3.ap-south-1.amazonaws.com',
          port: '',
          pathname: '/market-assets/Images/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
        }
      ],
    },
  };