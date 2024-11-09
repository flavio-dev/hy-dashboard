"use client";
import { createContext, useContext, useState } from "react";
import { TAppContext, TAppContextProviderProps } from "./types";

export const AppContext = createContext<TAppContext | null>(null);

const AppProvider = ({ children, files }: TAppContextProviderProps) => {
  const [filterByText, setFilterByText] = useState("");
  const [showFavorite, setShowFavorite] = useState(false);

  return (
    <AppContext.Provider
      value={{
        files,
        filterByText,
        setFilterByText,
        showFavorite,
        setShowFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return context;
};

export default AppProvider;
