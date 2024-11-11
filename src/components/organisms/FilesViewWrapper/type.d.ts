import { ESortBy, ESortDirection } from "@/components/molecules/SortBar/enums";

export type TFilesViewWrapperProps = {
  sortBy: ESortBy | null;
  sortDirection: ESortDirection | null;
  clearSortingValues: () => void;
};
