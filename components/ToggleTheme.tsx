import styled from "@emotion/styled";
import DarkModeToggle from "react-dark-mode-toggle";

export const ToggleTheme = ({ theme, setTheme }: any) => {
  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    localStorage.setItem(
      "startuppario-bitrocket-theme",
      theme === "light" ? "dark" : "light"
    );
  };

  return <Toggle onChange={onChange} checked={theme === "dark"} size={50} />;
};

const Toggle = styled(DarkModeToggle)({
  position: "fixed",
  zIndex: "27",
  right: "32px",
  top: "20px",
});
