/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withVideos = require('next-videos')

module.exports = withVideos();

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['mimsoft.uz'],
  },
  i18n: {
    locales: ["en-US", "fr-FR", "es-ES", "uz-Uz"],
    defaultLocale: "en-US",
  },
};