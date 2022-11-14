import styled from "@emotion/styled";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Link from "next/link";
import { TWord } from "../declaration/general";
import { letterList } from "../constants/general";
import apiTitleDetail from "./api/apiWordList";

export const getServerSideProps: GetServerSideProps<{
  wordList: TWord[];
}> = async () => {
  const wordList = await apiTitleDetail();

  return { props: { wordList } };
};

const ViewStartuppario = ({
  wordList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Container>
      <Head>
        <title>Startuppario: Il vocabolario delle startup</title>
      </Head>

      <Navbar />
      <div>
        {letterList.map((letter, index) => (
          <div key={index}>
            <SectionContainer style={{ zIndex: index + 1 }}>
              <WrapperSection>
                <SectionLabel>{letter}</SectionLabel>
                <Divider />
              </WrapperSection>
            </SectionContainer>
            <WrapperTitle>
              {wordList.map((word) => {
                if (word.sez !== letter) return null;
                return (
                  <Link
                    title={word.title}
                    href={`./${word.title.replaceAll(" ", "-")}`}
                    key={`${word.id}-${word.title}`}
                  >
                    <TitleLink
                      href={`./${word.title.replaceAll(" ", "-")}`}
                      key={word.id}
                    >
                      {word.title}
                    </TitleLink>
                  </Link>
                );
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

const TitleLink = styled.a(({ theme }) => ({
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
