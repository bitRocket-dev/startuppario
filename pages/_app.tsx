import type { AppProps } from "next/app";
import { ToggleTheme } from "../components/ToggleTheme";
import { useEffect, useState } from "react";
import { utilityGetTheme } from "../utility/utilityGetTheme";
import { PoweredBy } from "../components/PoweredBy";
import { ThemeProvider } from "../theme/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storageTheme = utilityGetTheme() || "light";
    setTheme(storageTheme);
  }, []);

  return (
    <>
      <ThemeProvider themeSelected={theme}>
        <PoweredBy />
        <ToggleTheme theme={theme} setTheme={setTheme} />
        <Component {...pageProps} theme={theme} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
