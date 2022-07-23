// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface News {
  status?: string;
  totalResults?: number;
  articles?: Article[];
}

export interface Article {
  source?: Source;
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: Date;
  content?: string;
}

export interface Source {
  id?: string;
  name?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<News>
) {
  const url = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&country=${req.query.country}&category=${req.query.category}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => console.log(e));
}
