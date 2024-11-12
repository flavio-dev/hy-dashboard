"use client";
import { createContext, useContext } from "react";
import { TSortingContext, TSortingContextProviderProps } from "./types";

export const SortingContext = createContext<TSortingContext | null>(null);

const SortingProvider = ({
  children,
  sortBy,
  setSortBy,
  sortDirection,
  setSortDirection,
}: TSortingContextProviderProps) => {
  return (
    <SortingContext.Provider
      value={{
        sortBy,
        setSortBy,
        sortDirection,
        setSortDirection,
      }}
    >
      {children}
    </SortingContext.Provider>
  );
};

export const useSortingContext = () => {
  const context = useContext(SortingContext);

  if (!context) {
    throw new Error(
      "useSortingContext must be used within a SortingContextProvider"
    );
  }

  return context;
};

export default SortingProvider;
