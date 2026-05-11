const isPages = process.env.GITHUB_PAGES === "true";
const repo = "hotely-site";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  ...(isPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
        env: { NEXT_PUBLIC_BASE_PATH: `/${repo}` },
      }
    : {}),
};

export default nextConfig;
