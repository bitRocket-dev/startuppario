export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const BASE_PATH = IS_PRODUCTION
  ? "https://startuppario.vercel.app"
  : "http://localhost:3000";

export const letterList = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "Z",
];
