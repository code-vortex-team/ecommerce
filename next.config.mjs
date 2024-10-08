/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '185.8.174.74',
                port: '8090',
            },
        ],
    }
};

export default nextConfig;
