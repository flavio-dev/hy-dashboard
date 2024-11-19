"use client";
import { createContext, useContext } from "react";
import {
  TFilesDisplayingContext,
  TFilesDisplayingContextProviderProps,
} from "./types";

export const FilesDisplayingContext =
  createContext<TFilesDisplayingContext | null>(null);

const FilesDisplayingProvider = ({
  children,
  selectedFiles,
  setSelectedFiles,
}: TFilesDisplayingContextProviderProps) => {
  return (
    <FilesDisplayingContext.Provider
      value={{
        selectedFiles,
        setSelectedFiles,
      }}
    >
      {children}
    </FilesDisplayingContext.Provider>
  );
};

export const useFilesDisplayingContext = () => {
  const context = useContext(FilesDisplayingContext);

  if (!context) {
    throw new Error(
      "useFilesDisplayingContext must be used within a FilesDisplayingContextProvider"
    );
  }

  return context;
};

export default FilesDisplayingProvider;
