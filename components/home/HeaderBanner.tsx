import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { banner } from "../../images";

const HeaderBanner = () => {
  return (
    <>
      <Box height="100vh" position="absolute" width="100vw" zIndex={-2}>
        <Image src={banner} objectFit="cover" layout="fill" priority />
      </Box>
    </>
  );
};

export default HeaderBanner;
