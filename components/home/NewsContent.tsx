import { Box, Container, Grid, Grow, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useSearchBarContext } from "../../contexts/SearchBarContext";
import { News, Article } from "../../pages/api/news";
import NewsCard from "./NewsCard";

const NewsContent = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const {
    category: { category },
    country: { country },
  } = useSearchBarContext();
  const { data, mutate } = useSWR<News>(
    `/api/news?country=${country}&category=${category}`,
    fetcher
  );
  const [newsData, setNewsData] = useState<Article[]>();

  // useEffect(() => {
  //   mutate();
  // }, [category, country]);

  useEffect(() => {
    if (data?.articles) {
      setNewsData(data.articles);
    }
  }, [data?.articles]);

  // console.log(newsData);

  return (
    <>
      <Grow in>
        <Grid
          paddingX={5}
          paddingTop={2}
          container
          justifyContent="center"
          alignItems="center"
          gap={5}
          // columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        >
          {newsData &&
            newsData.map((news, index) => (
              <Grid item key={index}>
                <NewsCard news={news} />
              </Grid>
            ))}
        </Grid>
      </Grow>
    </>
  );
};

export default NewsContent;
