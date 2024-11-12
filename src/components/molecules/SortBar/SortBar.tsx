import { TSortBarProps } from "./type";
import { ESortBy, ESortDirection } from "./enums";
import { EDisplayFileView } from "@/components/atoms/FileDisplayToggle/enums";
import ArrowUpDown from "@/components/atoms/icons/ArrowUpDown";
import ArrowIcon from "@/components/atoms/icons/ArrowIcon";

const SortBar = ({
  setSortBy,
  setSortDirection,
  sortBy: sortByFromProps,
  sortDirection: sortDirectionFromProps,
  displayFileView,
}: TSortBarProps) => {
  const handleSetSortingValues = (sortBy: ESortBy) => {
    if (sortBy === sortByFromProps) {
      const sortDirection =
        sortDirectionFromProps === ESortDirection.DOWN
          ? ESortDirection.UP
          : ESortDirection.DOWN;
      setSortDirection(sortDirection);
    } else {
      setSortBy(sortBy);
      setSortDirection(ESortDirection.DOWN);
    }
  };

  return (
    <>
      {(displayFileView === EDisplayFileView.LIST ||
        displayFileView === EDisplayFileView.GRID) && (
        <div className="flex justify-between border-l border-r border-b pb-4 pt-4">
          <div
            className="w-6 mr-2 cursor-pointer"
            onClick={() => handleSetSortingValues(ESortBy.TYPE)}
          >
            {sortByFromProps && sortByFromProps === ESortBy.TYPE && (
              <ArrowIcon direction={sortDirectionFromProps} />
            )}
            {(!sortByFromProps || sortByFromProps !== ESortBy.TYPE) && (
              <ArrowUpDown />
            )}
          </div>
          <div
            className="flex flex-grow basis-0 cursor-pointer"
            onClick={() => handleSetSortingValues(ESortBy.NAME)}
          >
            <span>Name</span>
            {sortByFromProps && sortByFromProps === ESortBy.NAME && (
              <ArrowIcon direction={sortDirectionFromProps} />
            )}
          </div>
          <div
            className="flex w-32 text-left cursor-pointer"
            onClick={() => handleSetSortingValues(ESortBy.DATE)}
          >
            <span>Last Modified</span>
            {sortByFromProps && sortByFromProps === ESortBy.DATE && (
              <ArrowIcon direction={sortDirectionFromProps} />
            )}
          </div>
          <div
            className="flex w-24 text-left cursor-pointer"
            onClick={() => handleSetSortingValues(ESortBy.SIZE)}
          >
            <span>File size</span>
            {sortByFromProps && sortByFromProps === ESortBy.SIZE && (
              <ArrowIcon direction={sortDirectionFromProps} />
            )}
          </div>
          <div className="w-6" />
        </div>
      )}
    </>
  );
};

export default SortBar;
