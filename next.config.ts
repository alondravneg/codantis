import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/los-dentistas-mas-recomendados-en-monterrey",
        destination: "/nosotros",
        permanent: true,
      },
      {
        source: "/dentistas-en-cumbres-monterrey",
        destination: "/nosotros",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;