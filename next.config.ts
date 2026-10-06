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
      {
        source: "/ortodoncista-en-monterrey",
        destination: "/ortodoncista",
        permanent: true,
      },
      {
        source: "/periodoncistas-en-monterrey",
        destination: "/periodoncista",
        permanent: true,
      },
      {
        source: "/rehabilitacion-dental-en-monterrey",
        destination: "/rehabiliitacion-dental",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
