import { ESortDirection } from "@/components/molecules/SortBar/enums";

export type TIconDefaultProps = {
  isSelected: boolean;
};

export type TSortIconProps = {
  direction?: ESortDirection.DOWN | ESortDirection.UP;
};
