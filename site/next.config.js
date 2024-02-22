/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Marks Kasm Repo',
    description: 'This workspace was generated using Kasms site-registry template. I will use this to create and upload my custom Kasm images.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.io/Mlabarbara/',
    contactUrl: 'https://github.com/Mlabarbara/kasm-registry/issues',
  },
  reactStrictMode: true ,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
