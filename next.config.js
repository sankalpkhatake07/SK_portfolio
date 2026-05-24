/** @type {import('next').NextConfig} */
const allowed = (process.env.ALLOWED_DEV_ORIGINS || 'http://localhost:3000,http://127.0.0.1:3000')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

const nextConfig = {
  allowedDevOrigins: allowed,
};

module.exports = nextConfig;
