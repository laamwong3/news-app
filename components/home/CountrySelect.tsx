import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { countries } from "../../constants/selectBoxDetails";
import { useSearchBarContext } from "../../contexts/SearchBarContext";

export default function CountrySelect() {
  const { country, setCountry } = useSearchBarContext();

  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={countries}
      value={country}
      onChange={(e, newValue) => {
        if (newValue) {
          setCountry(newValue);
        }
      }}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField {...params} label="Choose a country" />
      )}
    />
  );
}
