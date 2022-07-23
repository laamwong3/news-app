import { Box, Stack } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  HeaderBanner,
  MainTitle,
  NewsContent,
  SearchBar,
} from "../components/home";

const Home: NextPage = () => {
  return (
    <>
      <Box position="relative">
        <HeaderBanner />
        <Stack
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <MainTitle />
          <SearchBar />
          <NewsContent />
        </Stack>
      </Box>
    </>
  );
};

export default Home;
