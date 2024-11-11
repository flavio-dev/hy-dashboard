import { useRef } from "react";
import { TSortBarProps } from "./type";
import { ESortBy, ESortDirection } from "./enums";
import ArrowUpDown from "@/components/atoms/icons/ArrowUpDown";
import ArrowIcon from "@/components/atoms/icons/ArrowIcon";

const SortBar = ({ setSortBy, setSortDirection }: TSortBarProps) => {
  const currSortBy = useRef<ESortBy>();
  const currSortDirection = useRef<ESortDirection>();

  const handleSetSortingValues = (sortBy: ESortBy) => {
    if (sortBy === currSortBy.current) {
      const sortDirection =
        currSortDirection.current === ESortDirection.DOWN
          ? ESortDirection.UP
          : ESortDirection.DOWN;
      setSortDirection(sortDirection);
      currSortDirection.current = sortDirection;
    } else {
      setSortBy(sortBy);
      setSortDirection(ESortDirection.DOWN);
      currSortBy.current = sortBy;
      currSortDirection.current = ESortDirection.DOWN;
    }
  };

  return (
    <div className="flex justify-between border-l border-r border-b pb-4 pt-4">
      <div
        className="w-6 mr-2 cursor-pointer"
        onClick={() => handleSetSortingValues(ESortBy.TYPE)}
      >
        {currSortBy.current && currSortBy.current === ESortBy.TYPE && (
          <ArrowIcon direction={currSortDirection.current} />
        )}
        {(!currSortBy.current || currSortBy.current !== ESortBy.TYPE) && (
          <ArrowUpDown />
        )}
      </div>
      <div
        className="flex flex-grow basis-0 cursor-pointer"
        onClick={() => handleSetSortingValues(ESortBy.NAME)}
      >
        <span>Name</span>
        {currSortBy.current && currSortBy.current === ESortBy.NAME && (
          <ArrowIcon direction={currSortDirection.current} />
        )}
      </div>
      <div
        className="flex w-32 text-left cursor-pointer"
        onClick={() => handleSetSortingValues(ESortBy.DATE)}
      >
        <span>Last Modified</span>
        {currSortBy.current && currSortBy.current === ESortBy.DATE && (
          <ArrowIcon direction={currSortDirection.current} />
        )}
      </div>
      <div
        className="flex w-24 text-left cursor-pointer"
        onClick={() => handleSetSortingValues(ESortBy.SIZE)}
      >
        <span>File size</span>
        {currSortBy.current && currSortBy.current === ESortBy.SIZE && (
          <ArrowIcon direction={currSortDirection.current} />
        )}
      </div>
      <div className="w-6" />
    </div>
  );
};

export default SortBar;
