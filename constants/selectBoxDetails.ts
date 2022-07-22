export interface CountryType {
  name: string;
  country: "au" | "us";
}

export const countries: CountryType[] = [
  { name: "US", country: "us" },
  { name: "Australia", country: "au" },
];

export interface CategoryType {
  category:
    | "all"
    | "business"
    | "entertainment"
    | "general"
    | "health"
    | "science"
    | "sports"
    | "technology";
}

export const categories: CategoryType[] = [
  { category: "all" },
  { category: "business" },
  { category: "entertainment" },
  { category: "general" },
  { category: "health" },
  { category: "science" },
  { category: "sports" },
  { category: "technology" },
];
