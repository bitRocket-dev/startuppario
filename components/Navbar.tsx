import React, { FC } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import iconRocket from "../assets/rocket.png";

export const Navbar: FC = () => {
  return (
    <Wrapper>
      <Image src={iconRocket} alt="rocket" width={80} height={80} />
      <h1
        style={{
          margin: "0",
          fontSize: "48px",
        }}
      >
        Startuppario, il vocabolario delle startup.
      </h1>
      <h2 style={{ fontWeight: "normal" }}>
        Tutti i termini chiave che devi sapere per fare bella figura (e buoni
        affari) nel mondo startup.
      </h2>
    </Wrapper>
  );
};

const Wrapper = styled.div(({ theme }) => ({
  zIndex: 25,
  top: 0,
  position: "sticky",
  backgroundColor: theme.navbar.background,
  width: "100%",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  borderBottom: theme.navbar.borderBottom,
  color: theme.text,
}));
