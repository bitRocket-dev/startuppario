/** @format */

import constants from "next/constants.js";
const {
  DEVELOPMENT_SERVER = "phase-development-server",
  PRODUCTION_BUILD = "phase-production-build",
} = constants;

const nextConfig = (phase) => {
  const isDev = phase === DEVELOPMENT_SERVER;

  const isProd = phase === PRODUCTION_BUILD && process.env.STAGING !== "1";

  console.info(`isDev:${isDev} |----| isProd:${isProd}`);

  const env = {
    RESTURL_SPEAKERS: (() => {
      if (isDev) return "http://localhost:3000";
      if (isProd) {
        return "https://startuppario.vercel.app";
      }
    })(),
  };
  return { env };
};
export default nextConfig;
