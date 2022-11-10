/** @format */
/**
 * @type {import('next').NextConfig}
 */
import constants from "next/constants.js";
const { PRODUCTION_BUILD = "phase-production-build" } = constants;

const nextConfig = (phase) => {
  const isProd = phase === PRODUCTION_BUILD && process.env.STAGING !== "1";

  const env = {
    RESTURL_SPEAKERS: (() => {
      if (isProd) {
        return process.env.ENV_PRODUCTION;
      } else return process.env.ENV_DEVELOPMENT;
    })(),
  };

  return { env };
};

export default nextConfig;
