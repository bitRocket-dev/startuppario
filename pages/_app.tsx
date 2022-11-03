import type { AppProps } from "next/app";
import { ToggleTheme } from "../components/ToggleTheme";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { utilityGetTheme } from "../utility/utilityGetTheme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    const storageTheme = utilityGetTheme();
    setTheme(storageTheme);
  }, []);

  return (
    <>
      <ProviderTheme theme={theme}>
        <ToggleTheme theme={theme} setTheme={setTheme} />
        <Component {...pageProps} theme={theme} />
      </ProviderTheme>
    </>
  );
}

const ProviderTheme = styled.div(({ theme = "Light" }) => ({
  backgroundColor: theme === "Light" ? "White" : "#3c3c3b",
  color: theme === "Light" ? "#3c3c3b" : "White",
  margin: "0",
  padding: "0",
  boxSizing: "border-box",
  fontFamily: "Arial, Helvetica, sans-serif",
}));

export default MyApp;
