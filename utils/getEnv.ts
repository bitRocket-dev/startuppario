export const utilityGetEnv = () => {
  if (process.env.NODE_ENV === "production") {
    return process.env.ENV_PRODUCTION;
  }
  return process.env.ENV_DEVELOPMENT;
};
