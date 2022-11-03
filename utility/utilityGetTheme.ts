export const utilityGetTheme = () => {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("themeValue") || "Light";
    return JSON.parse(theme);
  }
};
