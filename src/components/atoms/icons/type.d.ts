import { ESortDirection } from "@/contexts/SortingContext/enums";

export type TIconDefaultProps = {
  isSelected: boolean;
};

export type TSortIconProps = {
  direction: ESortDirection | null;
};
