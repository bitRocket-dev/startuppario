export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const BASE_PATH = IS_PRODUCTION
  ? "https://startuppario.vercel.app"
  : "http://localhost:3000";
