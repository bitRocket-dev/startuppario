import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import jsonData from "../json/startuppario.json";

const ViewStartuppario: NextPage = () => {
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
      <Navbar />
      <div>
        {word.map((el, index) => {
          return (
            <>
              <SectionContainer style={{ zIndex: index + 1 }}>
                <SectionLabel>{el}</SectionLabel>
                <hr />
              </SectionContainer>
              <WrapperTitle>
                {jsonData.map((obj) => {
                  if (obj.sez === el)
                    return (
                      <Title
                        target={"_blank"}
                        href={`./${obj.title.replaceAll(" ", "-")}`}
                      >
                        {obj.title}
                      </Title>
                    );
                })}
              </WrapperTitle>
            </>
          );
        })}
      </div>
    </Container>
  );
};

const Container = styled.div({});
const SectionLabel = styled.h1({
  margin: 0,
  padding: "0 50px",
});
const SectionContainer = styled.section({
  fontSize: "2rem",
  fontWeight: 900,
  position: "sticky",
  top: "240px",
  background: "#3c3c3b",
});

const Sticky = styled.div({
  fontSize: "2rem",
  fontWeight: "900",
  background: "#3c3c3b",
});

const Title = styled.a({
  fontSize: "22px",
  color: "whitesmoke",
  textDecoration: "none",
  padding: "0 250px",
  width: "100%",
  margin: "30px 0",
  cursor: "pointer",
  "&:hover": {
    color: "#b82335",
    boxShadow: "5px 5px 5px 0 #b82335",
  },
});
const WrapperTitle = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "30px 0",
});

export default ViewStartuppario;
