/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    DEEPSEEK_API_KEY: process.env.DEEPSEEK_API_KEY,
  }
};

export default nextConfig;
