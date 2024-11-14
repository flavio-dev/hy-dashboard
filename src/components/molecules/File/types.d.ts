import { TFile, TFilesDisplayingDictionary } from "@/types/file";

export type TFileProps = {
  file: TFile;
  handleToggleSelectFile: () => void;
  date: string;
  size: string;
  fileId: string;
  selectedFiles: TFilesDisplayingDictionary;
};
