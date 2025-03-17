const nextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/account123/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com",
        port: "",
        pathname: "/cdn/**",
        search: "",
      },
    ],
    localPatterns: [
      {
        pathname: "/assets/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
