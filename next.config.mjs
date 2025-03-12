const nextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/**",
      },
    ],
    // localPatterns: [
    //   {
    //     pathname: "/assets/**",
    //     search: "",
    //   },
    // ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
