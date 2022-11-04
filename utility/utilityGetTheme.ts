export const utilityGetTheme = () => {
  if (typeof window !== "undefined") {
    const theme =
      localStorage.getItem("startuppario-bitrocket-theme") || "light";
    return JSON.parse(theme);
  }
};
