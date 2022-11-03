import styled from "@emotion/styled";
import Image from "next/image";
import React, { FC } from "react";
import srcLogo from "../assets/logoRocketWhite.png";

interface Props {
  theme: string;
}

export const PoweredBy: FC<Props> = ({ theme }): JSX.Element => (
  <Container theme={theme}>
    <Label>
      Powered by
      <WrapperPoweredBy
        theme={theme}
        title="bitrocket.dev"
        target="_blank"
        href="https://www.bitrocket.dev"
      >
        BitRocket.dev
      </WrapperPoweredBy>
    </Label>
    <Image src={srcLogo} alt="bitRocket.dev" width={30} height={30} />
  </Container>
);

const Container = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "10px",
  position: "fixed",
  zIndex: "999",
  bottom: "10px",
  right: "10px",
  backgroundColor: theme === "Light" ? "White" : "#3c3c3bdb",
  boxShadow:
    theme === "Light" ? "0 0 20px 20px white" : "0 0 20px 20px #3c3c3b",
}));
const Label = styled.p({
  margin: "0 5px",
});
const WrapperPoweredBy = styled.a(({ theme }) => ({
  textDecoration: "none",
  color: theme === "Light" ? "#3c3c3b" : "white",
  margin: "0 5px",
  cursor: "pointer",
}));
