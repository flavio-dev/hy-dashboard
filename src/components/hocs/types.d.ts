import { TFile, TFilesDisplayingDictionary } from "@/types/file";

export type TwithToggleSelectProps = {
  handleToggleSelectFile: () => void;
  date: string;
  size: string;
  fileId: string;
  selectedFiles: TFilesDisplayingDictionary;
};
