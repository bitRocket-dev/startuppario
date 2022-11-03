import styled from "@emotion/styled";
import DarkModeToggle from "react-dark-mode-toggle";

export const ToggleTheme = ({ theme, setTheme }: any) => {
  const onChange = () => {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
    localStorage.setItem(
      "themeValue",
      JSON.stringify(theme === "Light" ? "Dark" : "Light")
    );
  };

  return <Toggle onChange={onChange} checked={theme === "Dark"} size={50} />;
};

const Toggle = styled(DarkModeToggle)({
  position: "fixed",
  zIndex: "9999",
  right: "10px",
  top: "10px",
});
