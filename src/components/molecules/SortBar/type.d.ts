import { ESortBy, ESortDirection } from "./enums";

export type TSortBarProps = {
  setSortBy: Dispatch<
    SetStateAction<ESortBy.DATE | ESortBy.NAME | ESortBy.SIZE | ESortBy.TYPE>
  >;
  setSortDirection: Dispatch<
    SetStateAction<ESortDirection.DOWN | ESortDirection.UP>
  >;
};
