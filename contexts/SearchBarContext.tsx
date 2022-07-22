import React, { createContext, useContext, useState } from "react";
import {
  categories,
  CategoryType,
  countries,
  CountryType,
} from "../constants/selectBoxDetails";

interface SearchBarContextProps {
  children: React.ReactNode;
}

interface StatesTypes {
  country: CountryType;
  setCountry: React.Dispatch<React.SetStateAction<CountryType>>;
  category: CategoryType;
  setCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}

const SearchBarContextStore = createContext({} as StatesTypes);

const SearchBarContext = ({ children }: SearchBarContextProps) => {
  const [country, setCountry] = useState<CountryType>(countries[0]);
  const [category, setCategory] = useState<CategoryType>(categories[0]);

  return (
    <SearchBarContextStore.Provider
      value={{ category, country, setCategory, setCountry }}
    >
      {children}
    </SearchBarContextStore.Provider>
  );
};

export default SearchBarContext;
export const useSearchBarContext = () => useContext(SearchBarContextStore);
