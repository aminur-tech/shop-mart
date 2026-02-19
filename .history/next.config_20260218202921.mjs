/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true, // তোমার আগের অপশন রাখা আছে

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.cnet.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imageio.forbes.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hips.hearstapps.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'marketplace.canva.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.etsystatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'coutureusa.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imboldn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.mos.cms.futurecdn.net',
        port: '',
        pathname: '/**',
      },
      
      // ← এই নতুন লাইনটা অ্যাড করো (এররের জন্য যেটা দরকার)
      {
        protocol: 'https',
        hostname: 'www.iwantek.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'thegadgetflow.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.rollingstone.com',
        port: '',
        pathname: '/**',
      },
      {
  protocol: 'https',
  hostname: 'images.squarespace-cdn.com',
  port: '',
  pathname: '/**',
},
{
        protocol: 'https',
        hostname: 'www.digitaltrends.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;