import { Stack } from "@mui/material";
import React from "react";
import CategorySelect from "./CategorySelect";
import CountrySelect from "./CountrySelect";

const SearchBar = () => {
  return (
    <>
      <Stack
        direction={{ md: "row", xs: "column" }}
        spacing={5}
        justifyContent="center"
        alignItems="center"
      >
        <CategorySelect />
        <CountrySelect />
      </Stack>
    </>
  );
};

export default SearchBar;
