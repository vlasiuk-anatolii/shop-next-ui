import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: 'shop-backend-env.eba-kpsmmad2.eu-north-1.elasticbeanstalk.com',
      }
    ]
  }
};

export default nextConfig;
