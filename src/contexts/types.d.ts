import { TFile, TFileDictionary } from "@/types/file";

export type TAppContext = {
  files: TFileDictionary;
  filterByText: string;
  setFilterByText: React.SetStateAction;
  showFavorite: boolean;
  setShowFavorite: React.SetStateAction;
  isFavorite: boolean;
  setIsFavorite: React.SetStateAction;
};

export type TAppContextProviderProps = {
  children: React.ReactNode;
  files: TFile[];
};
