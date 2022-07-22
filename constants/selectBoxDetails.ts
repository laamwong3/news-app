export interface CountryType {
  name: string;
  country: "au" | "us" | "hk" | "tw";
}

export const countries: CountryType[] = [
  { name: "Australia", country: "au" },
  { name: "US", country: "us" },
  { name: "Hong Kong", country: "hk" },
  { name: "Taiwan", country: "tw" },
];

export interface CategoryType {
  category:
    | "business"
    | "entertainment"
    | "general"
    | "health"
    | "science"
    | "sports"
    | "technology";
}

export const categories: CategoryType[] = [
  { category: "business" },
  { category: "entertainment" },
  { category: "general" },
  { category: "health" },
  { category: "science" },
  { category: "sports" },
  { category: "technology" },
];
