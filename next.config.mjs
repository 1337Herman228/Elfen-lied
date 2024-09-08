
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/Elfen-lied' : '',
    output:'export',
    distDir: 'build',
    images:{
        unoptimized: true
    }
};

export default nextConfig;

