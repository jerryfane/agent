import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Add alias configuration
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': '.',
      },
    }
    
    // Add module rules
    config.module = {
      ...config.module,
      rules: [
        ...config.module?.rules || [],
        {
          test: /\.map$/,
          loader: 'ignore-loader'
        },
        {
          test: /\.d\.ts$/,
          loader: 'ignore-loader'
        }
      ]
    };

    return config;
  },
  // Add this to ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;