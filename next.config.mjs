// /** @type {import('next').NextConfig} */
// const withTM = require('next-transpile-modules')(['@ant-design/icons']);

// const nextConfig = {
//     // reactStrictMode: true,
//     distDir: 'build',
//     // output: 'export',
//     // images: {
//     //     unoptimized: true,
//     // },
// };

// module.exports = withTM(nextConfig);


/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    // reactStrictMode: true,
    distDir: 'build',
    // images:{
    //     unoptimized: true
    // }
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output:'export',
//     distDir: 'dist',
//     images:{
//         unoptimized: true
//     }
// };

// module.exports = nextConfig
