import { Box, Container, Grid, Grow, Stack } from "@mui/material";
import React from "react";
import NewsCard from "./NewsCard";

const NewsContent = () => {
  return (
    <>
      <Grid
        padding={10}
        container
        justifyContent="center"
        gap={5}
        // columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      >
        <Grid item>
          <NewsCard />
        </Grid>
        <Grid item>
          <NewsCard />
        </Grid>
        <Grid item>
          <NewsCard />
        </Grid>
        <Grid item>
          <NewsCard />
        </Grid>
      </Grid>
    </>
  );
};

export default NewsContent;
