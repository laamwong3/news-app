import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface CategoryType {
  category:
    | "business"
    | "entertainment"
    | "general"
    | "health"
    | "science"
    | "sports"
    | "technology";
}

const categories: CategoryType[] = [
  { category: "business" },
  { category: "entertainment" },
  { category: "general" },
  { category: "health" },
  { category: "science" },
  { category: "sports" },
  { category: "technology" },
];

export default function CategorySelect() {
  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={categories}
      autoHighlight
      getOptionLabel={(option) => option.category.toUpperCase()}
      renderInput={(params) => (
        <TextField {...params} label="Choose a category" />
      )}
    />
  );
}
