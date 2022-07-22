// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface News {
  status?: string;
  sources?: Source[];
}

export interface Source {
  id?: string;
  name?: string;
  description?: string;
  url?: string;
  category?: Category;
  language?: string;
  country?: string;
}

export enum Category {
  Business = "business",
  Entertainment = "entertainment",
  General = "general",
  Health = "health",
  Science = "science",
  Sports = "sports",
  Technology = "technology",
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<News>
) {
  const url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&country=${req.query.country}&category=${req.query.category}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => console.log(e));
}
