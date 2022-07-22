import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { categories } from "../../constants/selectBoxDetails";
import { useSearchBarContext } from "../../contexts/SearchBarContext";

export default function CategorySelect() {
  const { category, setCategory } = useSearchBarContext();
  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={categories}
      value={category}
      onChange={(e, newValue) => {
        if (newValue) {
          setCategory(newValue);
        }
      }}
      autoHighlight
      getOptionLabel={(option) => option.category.toUpperCase()}
      renderInput={(params) => (
        <TextField {...params} label="Choose a category" />
      )}
    />
  );
}
