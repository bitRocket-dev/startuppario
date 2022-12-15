import styled from "@emotion/styled";
import Image from "next/image";
import React, { FC } from "react";
import srcLogo from "../assets/logoRocketWhite.png";

export const PoweredBy: FC = (): JSX.Element => (
  <Container>
    <Label>
      Powered by
      <WrapperPoweredBy
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
  zIndex: "26",
  bottom: "20px",
  right: "32px",
  backgroundColor: theme.background,
  boxShadow: theme.field.boxShadow,
  "@media only screen and (max-width:1024)": {
    bottom: "5px",
    right: "5px",
  },
}));
const Label = styled.p({
  margin: "0 5px",
});
const WrapperPoweredBy = styled.a(({ theme }) => ({
  color: theme.text,
  margin: "0 5px",
  cursor: "pointer",
  textDecoration: "underline",
}));
