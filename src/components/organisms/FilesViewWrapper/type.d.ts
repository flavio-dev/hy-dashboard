import { ESortBy, ESortDirection } from "@/components/molecules/SortBar/enums";

export type TFilesViewWrapperProps = {
  sortBy?: ESortBy.DATE | ESortBy.NAME | ESortBy.SIZE | ESortBy.TYPE;
  sortDirection?: ESortDirection.DOWN | ESortDirection.UP;
};
