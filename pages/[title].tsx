import styled from "@emotion/styled";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BASE_PATH } from "../constants/general";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { title } = context.query;
  const response = await fetch(`${BASE_PATH}/api/${title}`);
  const descriptionList = await response.json();

  return { props: { descriptionList } };
};

const ViewIdStartuppario = ({
  descriptionList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [stopLight, setStopLight] = useState(false);
  const router = useRouter();
  const { query } = useRouter();

  useEffect(() => {
    if (stopLight) {
      if (descriptionList === undefined) router.push("/");
    } else setStopLight(true);
  }, [query.title]);

  if (!descriptionList) return;
  return (
    <>
      <Head>
        <title>Startuppario {descriptionList?.title}</title>
        <meta
          name="description"
          content="Startuppario: Il vocabolario delle startup"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <title>Startuppario: {descriptionList?.title}</title>
        <meta
          content="Startuppario, il vocabolario delle startup. 
          Impara tutti i termini chiave per fare bella figura e buoni affari nel mondo startup"
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
      <WrapperPage>
        <Container>
          <ContainerTitle>{descriptionList?.title}</ContainerTitle>
          <Description>{descriptionList?.description}</Description>
          <HomeButton title="torna alla home" onClick={() => router.push("/")}>
            Torna alla Home
          </HomeButton>
        </Container>
      </WrapperPage>
    </>
  );
};

const ContainerTitle = styled.h2({
  margin: "0",
});

const WrapperPage = styled.div({
  padding: "20px",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
});

const Container = styled.div({
  padding: "0 100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  fontSize: "32px",
  width: "50%",
});

const Description = styled.p({
  fontSize: "20px",
  textAlign: "center",
  fontWeight: "bold",
  lineHeight: "32px",
  margin: "50px 0",
});

const HomeButton = styled.button(({ theme }) => ({
  textDecoration: "none",
  border: "none",
  padding: "10px",
  color: "whitesmoke",
  "&:hover": {
    boxShadow: theme.buttonHome.backgroundHover.boxShadow,
  },
  fontSize: "16px",
  borderRadius: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.buttonHome.background,
}));

export default ViewIdStartuppario;
