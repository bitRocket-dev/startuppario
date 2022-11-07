export const utilityGetTheme = () => {
  let theme = "light";
  if (
    typeof window !== "undefined" &&
    localStorage.getItem("startuppario-bitrocket-theme")
  ) {
    return localStorage.getItem("startuppario-bitrocket-theme");
  } else localStorage.setItem("startuppario-bitrocket-theme", "light");
  return theme;
};
