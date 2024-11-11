import { ESortBy, ESortDirection } from "./enums";

export type TSortBarProps = {
  setSortBy: Dispatch<SetStateAction<ESortBy>>;
  setSortDirection: Dispatch<SetStateAction<ESortDirection>>;
  sortBy: ESortBy | null;
  sortDirection: ESortDirection | null;
};
