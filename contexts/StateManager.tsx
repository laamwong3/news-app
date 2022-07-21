import React, { createContext, useContext, useState } from "react";

interface StateManagerProps {
  children: React.ReactNode;
}

interface StatesTypes {}

const StateStore = createContext({} as StatesTypes);

const StateManager = ({ children }: StateManagerProps) => {
  return <StateStore.Provider value={{}}>{children}</StateStore.Provider>;
};

export default StateManager;
export const useStateAPI = () => useContext(StateStore);
