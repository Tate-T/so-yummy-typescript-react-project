/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ftp.goit.study", 'res.cloudinary.com'],
  },
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
