export const utilityGetTheme = () => {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("startuppario-bitrocket-theme");
    return theme ? JSON.parse(theme) : null;
  }
};
