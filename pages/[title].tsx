import styled from "@emotion/styled";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TWord } from "../declaration/general";
import apiWordDetail from "./api/apiWordDetail";

export const getServerSideProps: GetServerSideProps<{
  wordDetail: TWord;
}> = async (context) => {
  const { title } = context.query;
  const wordDetail = await apiWordDetail(title);

  return { props: { wordDetail } };
};

const ViewIdStartuppario = ({
  wordDetail,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  if (!wordDetail) return null;
  return (
    <>
      <Head>
        <title>Startuppario: {wordDetail.title}</title>
      </Head>
      <WrapperPage>
        <Container>
          <Title>{wordDetail.title}</Title>
          <Description>{wordDetail.description}</Description>
          <HomeButton title="torna alla home" onClick={() => router.push("/")}>
            Torna alla Home
          </HomeButton>
        </Container>
      </WrapperPage>
    </>
  );
};

const Title = styled.h2({
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
