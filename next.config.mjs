/** Static export: `npm run build` writes a plain HTML site to /out that any host can serve. */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
