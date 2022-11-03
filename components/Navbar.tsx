import React, { FC } from "react";
import styled from "@emotion/styled";

interface Props {
  theme: string;
}

export const Navbar: FC<Props> = ({ theme }) => {
  return (
    <Wrapper theme={theme}>
      <Image src={iconRocket} alt="rocket" width={116} height={116} />
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
  zIndex: 99,
  top: 0,
  position: "sticky",
  width: "100%",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  borderBottom: theme === "Light" ? "4px solid #429CD6" : "4px solid #CC5454",
  color: theme === "Light" ? "#3c3c3b" : "WhiteSmoke",
  background: theme === "Light" ? "white" : "#3c3c3b",
}));
