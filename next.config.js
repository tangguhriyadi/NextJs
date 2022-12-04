/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    BASE_URL:'https://jsonplaceholder.typicode.com'
  }
}

module.exports = nextConfig
