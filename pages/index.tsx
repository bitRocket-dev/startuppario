import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import jsonData from "../json/startuppario.json";
interface Props {
  theme: string;
}

const ViewStartuppario: NextPage<Props> = ({ theme }) => {
  const word = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "Z",
  ];

  return (
    <Container>
      <Head>
        <title>Startuppario</title>
        <meta
          name="description"
          content="Startuppario: Il vocabolario delle startup - Powered by BitRocket.dev https://www.bitrocket.dev/"
        />
        <link rel="icon" href="favicon.ico" />
        <meta charSet="utf-8" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <title>Startuppario: Il vocabolario delle startup</title>
        <meta
          content="Startuppario, il vocabolario delle startup. Impara tutti i termini chiave per fare bella figura e buoni affari nel mondo startup. Powered by BitRocket.dev https://www.bitrocket.dev/"
          name="description"
        />
        <link rel="icon" href="favicon.ico" />
        <link
          rel="canonical"
          href="http://example.ampproject.org/article-metadata.html"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,900"
          rel="stylesheet"
        />
      </Head>

      <Navbar theme={theme} />
      <>
        {word.map((el, index) => {
          return (
            <div key={index}>
              <SectionContainer theme={theme} style={{ zIndex: index + 1 }}>
                <SectionLabel>
                  <span
                    style={{
                      width: "50%",
                      margin: "0 auto",
                      fontSize: "48px",
                      display: "block",
                    }}
                  >
                    {el}
                  </span>
                </SectionLabel>
                <hr
                  style={{
                    backgroundColor: "#E1E1E1",
                    height: "1px",
                    border: "none",
                    width: "100%",
                  }}
                />
              </SectionContainer>
              <WrapperTitle style={{ width: "50%", margin: "0 auto" }}>
                {jsonData.map((obj) => {
                  if (obj.sez === el)
                    return (
                      <Title
                        title={obj.title}
                        target={"_blank"}
                        href={`./${obj.title.replaceAll(" ", "-")}`}
                      >
                        {obj.title}
                      </Title>
                    );
                })}
              </WrapperTitle>
            </div>
          );
        })}
      </>
    </Container>
  );
};

const Container = styled.div({});

const SectionLabel = styled.h1({
  margin: 0,
  padding: "16px 50px 0 50px",
});

const SectionContainer = styled.section(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 900,
  position: "sticky",
  top: "240px",
  background: theme === "Light" ? "WhiteSmoke" : "#5b5b5b",
}));

const Title = styled.a(({ theme }) => ({
  fontSize: "24px",
  color: theme === "Light" ? "#3c3c3b" : "WhiteSmoke",
  textDecoration: "none",
  paddingLeft: "100px",
  width: "100%",
  margin: "30px 0",
  cursor: "pointer",
  fontWeight: "bold",
  "&:hover": {
    color: theme === "Light" ? "#429CD6" : "#CC5454",
  },
}));

const WrapperTitle = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "30px 0",
});

export default ViewStartuppario;
