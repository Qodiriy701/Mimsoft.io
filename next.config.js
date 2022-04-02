/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

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