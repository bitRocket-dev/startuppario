import React from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";

const ViewIdStartuppario = () => {
  const { query } = useRouter();

  const fetcher = async (url: string) => {
    if (query.title) {
      const res = await fetch(url);

      if (!res.ok) {
        const error = "il titolo cercato non è esistente!";

        throw error;
      }

      return res.json();
    }
  };
  const { data, error } = useSWR(`/api/dataStartup/${query.title}`, fetcher);

  const router = useRouter();

  if (error) router.push("/");

  return (
    <>
      <Head>
        <title>Startuppario {data?.title}</title>
        <meta
          name="description"
          content="Startuppario: Il vocabolario delle startup"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <title>Startuppario: {data?.title}</title>
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
          {data && (
            <>
              <ContainerTitle>{data.title}</ContainerTitle>
              <Description>{data.description}</Description>
              <HomeButton
                title="torna alla home"
                onClick={() => router.push("/")}
              >
                Torna alla Home
              </HomeButton>
            </>
          )}
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
