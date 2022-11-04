/** @format */

import { FC, memo, ReactNode } from "react";

import { ThemeProvider as EmotionProvider } from "@emotion/react";

import { theme } from "./general/mapColors";
import styled from "@emotion/styled";

interface Props {
  themeSelected: "dark" | "light";
  children: ReactNode;
}

export const ThemeProvider: FC<Props> = memo(
  ({ children, themeSelected }): JSX.Element => {
    const { light, dark } = theme;

    return (
      <EmotionProvider theme={themeSelected === "light" ? light : dark}>
        <StyledTheme>{children}</StyledTheme>
      </EmotionProvider>
    );
  }
);

const StyledTheme = styled.div(({ theme }) => ({
  backgroundColor: theme.background,
  color: theme.text,
  margin: "0",
  padding: "0",
  boxSizing: "border-box",
  fontFamily: "Arial, Helvetica, sans-serif",
}));
