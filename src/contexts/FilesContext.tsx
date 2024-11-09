"use client";
import { createContext, useContext, useState } from "react";
import { TFileContext, TFileContextProviderProps } from "./types";

export const FileContext = createContext<TFileContext | null>(null);

const FilesProvider = ({ children }: TFileContextProviderProps) => {
  const [files, setFiles] = useState<TFile[]>([]);
  const [filteredFiles, setFilteredFiles] = useState<TFile[]>([]);

  return (
    <FileContext.Provider
      value={{ files, setFiles, filteredFiles, setFilteredFiles }}
    >
      {children}
    </FileContext.Provider>
  );
};

export const useFilesContext = () => {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error(
      "useFilesContext must be used within a FileContextProvider"
    );
  }

  return context;
};

export default FilesProvider;
