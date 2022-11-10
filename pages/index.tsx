import styled from "@emotion/styled";
import type {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { TList } from "../declaration/general";
import { utilityGetEnv } from "../utils/getEnv";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${utilityGetEnv()}/api/requestTitleList`);
  const titleList = await response.json();

  return { props: { titleList } };
};

const ViewStartuppario: NextPage = ({
  titleList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const wordList = [
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
        {wordList.map((el, index) => (
          <div key={index}>
            <SectionContainer style={{ zIndex: index + 1 }}>
              <WrapperSection>
                <SectionLabel>{el}</SectionLabel>
                <Divider />
              </WrapperSection>
            </SectionContainer>
            <WrapperTitle>
              {titleList.map((obj: TList) => {
                if (obj.sez === el) {
                  return (
                    <Title
                      title={obj.title}
                      href={`./${obj.title.replaceAll(" ", "-")}`}
                      key={obj.id}
                    >
                      {obj.title}
                    </Title>
                  );
                }
              })}
            </WrapperTitle>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div({});
const WrapperSection = styled.div({});

const SectionLabel = styled.h1({
  margin: 0,
  padding: "16px 300px 0 300px",
});
const SectionContainer = styled.section(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 900,
  position: "sticky",
  top: "240px",
  background: theme.field.background,
}));

const Title = styled.a(({ theme }) => ({
  fontSize: "24px",
  color: theme.text,
  textDecoration: "none",
  paddingLeft: "300px",
  width: "100%",
  margin: "30px 0",
  cursor: "pointer",
  fontWeight: "bold",
  "&:hover": {
    color: theme.home.textHover,
  },
}));
const WrapperTitle = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "30px 0",
});
const Divider = styled.hr({
  backgroundColor: "#E1E1E1",
  height: "1px",
  border: "none",
  width: "100%",
});

export default ViewStartuppario;
