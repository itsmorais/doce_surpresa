/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images:{
    domains:['docesurpresa-backend.onrender.com'],
  }
  
}

module.exports = nextConfig