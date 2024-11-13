import { TFilesDisplayingDictionary } from "@/types/file";

export type TBulkActionBarProps = {
  selectedFiles: TFilesDisplayingDictionary;
  clearSelectedFiles: () => void;
};
