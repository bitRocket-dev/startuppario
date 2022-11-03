export const ToggleTheme = ({ theme, setTheme }: any) => {
  const toggleTheme = () => {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
    localStorage.setItem(
      "themeValue",
      JSON.stringify(theme === "Light" ? "Dark" : "Light")
    );
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "Light" ? "Dark" : "Light"}
    </button>
  );
};
