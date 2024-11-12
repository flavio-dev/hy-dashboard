import { ESortBy, ESortDirection } from "./enums";
import { EDisplayFileView } from "@/components/atoms/FileDisplayToggle/enums";

export type TSortBarProps = {
  setSortBy: Dispatch<SetStateAction<ESortBy>>;
  setSortDirection: Dispatch<SetStateAction<ESortDirection>>;
  sortBy: ESortBy | null;
  sortDirection: ESortDirection | null;
  displayFileView: EDisplayFileView;
};
