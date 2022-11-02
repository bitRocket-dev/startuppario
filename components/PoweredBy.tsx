import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import srcLogo from "../assets/logoRocketWhite.png";

export const PoweredBy = () => (
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

const Container = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "10px",
});
const Label = styled.p({
  margin: "0 5px",
});
const WrapperPoweredBy = styled.a({
  textDecoration: "none",
  color: "whitesmoke",
  margin: "0 5px",
  cursor: "pointer",
});
