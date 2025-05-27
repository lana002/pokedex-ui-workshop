/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/pokemon',
                destination: 'https://sxd6x1vm59.execute-api.eu-west-2.amazonaws.com/Prod/pokemon',
            },
            {
                source: '/api/pokemon/:id',
                destination: 'https://sxd6x1vm59.execute-api.eu-west-2.amazonaws.com/Prod/pokemon/:id',
            },
        ];
    }
};

export default nextConfig;
