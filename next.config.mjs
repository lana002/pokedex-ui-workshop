/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/pokemon',
                destination: 'https://cdewjecuj3.execute-api.eu-west-2.amazonaws.com/Prod/Prod/pokemon',
            },
            {
                source: '/api/pokemon/:id',
                destination: 'https://cdewjecuj3.execute-api.eu-west-2.amazonaws.com/Prod/Prod/pokemon/:id',
            },
        ];
    }
};

export default nextConfig;
