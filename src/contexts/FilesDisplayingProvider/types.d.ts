import { TFilesDisplayingDictionary } from "@/types/file";

export type TFilesDisplayingContextProviderProps = {
  children: React.ReactNode;
  selectedFiles: TFilesDisplayingDictionary;
  setSelectedFiles: Dispatch<SetStateAction<TFilesDisplayingDictionary>>;
};

export type TFilesDisplayingContext = {
  selectedFiles: TFilesDisplayingDictionary;
  setSelectedFiles: Dispatch<SetStateAction<TFilesDisplayingDictionary>>;
};
