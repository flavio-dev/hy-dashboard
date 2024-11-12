import { ESortBy, ESortDirection } from "./enums";

export type TSortingContextProviderProps = {
  children: React.ReactNode;
  setSortBy: Dispatch<SetStateAction<ESortBy>>;
  setSortDirection: Dispatch<SetStateAction<ESortDirection>>;
  sortBy: ESortBy | null;
  sortDirection: ESortDirection | null;
};

export type TSortingContext = {
  setSortBy: Dispatch<SetStateAction<ESortBy>>;
  setSortDirection: Dispatch<SetStateAction<ESortDirection>>;
  sortBy: ESortBy | null;
  sortDirection: ESortDirection | null;
};
