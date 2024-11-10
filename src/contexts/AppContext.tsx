"use client";
import { createContext, useContext, useState } from "react";
import { TAppContext, TAppContextProviderProps } from "./types";
import { TFileDictionary } from "@/types/file";

export const AppContext = createContext<TAppContext | null>(null);

const AppProvider = ({ children, files }: TAppContextProviderProps) => {
  const filesMap: TFileDictionary = {};

  for (let i = 0; i < files.length; i++) {
    const currFile = files[i];
    filesMap[currFile.id] = currFile;
  }

  const [filterByText, setFilterByText] = useState("");
  const [showFavorite, setShowFavorite] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <AppContext.Provider
      value={{
        files: filesMap,
        filterByText,
        setFilterByText,
        showFavorite,
        setShowFavorite,
        isFavorite,
        setIsFavorite,
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
