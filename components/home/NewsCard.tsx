import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Stack } from "@mui/material";
import Image from "next/image";
import { News, Article } from "../../pages/api/news";
import { useRouter } from "next/router";

interface NewsCardProps {
  news: Article;
}

const noImagePlaceholderLink =
  "https://aestheticmedicalpractitioner.com.au/wp-content/uploads/2021/06/no-image.jpg";

export default function NewsCard({ news }: NewsCardProps) {
  // console.log(news);
  return (
    <Card
      sx={{
        width: 300,
        height: 350,
      }}
    >
      <CardActionArea href={news.url ?? ""} target="_blank">
        <Image
          //loader={({ src, width }) => news.urlToImage ?? noImagePlaceholderLink}
          src={news.urlToImage ?? noImagePlaceholderLink}
          width={300}
          height={140}
          unoptimized
          // layout="fixed"
        />

        <CardContent>
          <Stack direction="row">
            <Typography sx={{ fontSize: 10 }} flex={1}>
              {new Date(news.publishedAt!).toDateString()}
            </Typography>
            <Typography sx={{ fontSize: 10 }}>{news.source?.name}</Typography>
          </Stack>
          <Typography variant="subtitle2" pt={2} gutterBottom fontWeight="bold">
            {news.title}
          </Typography>
          <Typography sx={{ fontSize: 10 }}>
            {news.description?.slice(0, 200) + "..."}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
