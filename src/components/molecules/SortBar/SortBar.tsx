import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ArrowUpDown from "@/components/atoms/icons/ArrowUpDown";
import ArrowIcon from "@/components/atoms/icons/ArrowIcon";
import { EDisplayFileView } from "@/components/atoms/FileDisplayToggle/enums";
import { TSortBarProps } from "./type";
import { ESortBy, ESortDirection } from "./enums";

const SortBar = ({
  setSortBy,
  setSortDirection,
  sortBy: sortByFromProps,
  sortDirection: sortDirectionFromProps,
  displayFileView,
}: TSortBarProps) => {
  const handleSetSortingValuesListView = (sortBy: ESortBy) => {
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

  const handleSetSortingValuesGridView = () => {
    if (sortByFromProps) {
      const sortDirection =
        sortDirectionFromProps === ESortDirection.DOWN
          ? ESortDirection.UP
          : ESortDirection.DOWN;
      setSortDirection(sortDirection);
    } else {
      setSortDirection(ESortDirection.DOWN);
      setSortBy(ESortBy.NAME);
    }
  };

  const handleSelectionSortingByGridView = (sortBy: ESortBy) => {
    if (sortBy !== sortByFromProps) {
      setSortBy(sortBy);
      setSortDirection(ESortDirection.DOWN);
    }
  };

  return (
    <>
      {displayFileView === EDisplayFileView.LIST && (
        <div className="flex justify-between border-l border-r border-b pb-4 pt-4">
          <div
            className="w-6 mr-2 cursor-pointer"
            onClick={() => handleSetSortingValuesListView(ESortBy.TYPE)}
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
            onClick={() => handleSetSortingValuesListView(ESortBy.NAME)}
          >
            <span>Name</span>
            {sortByFromProps && sortByFromProps === ESortBy.NAME && (
              <ArrowIcon direction={sortDirectionFromProps} />
            )}
          </div>
          <div
            className="flex w-32 text-left cursor-pointer"
            onClick={() => handleSetSortingValuesListView(ESortBy.DATE)}
          >
            <span>Last Modified</span>
            {sortByFromProps && sortByFromProps === ESortBy.DATE && (
              <ArrowIcon direction={sortDirectionFromProps} />
            )}
          </div>
          <div
            className="flex w-24 text-left cursor-pointer"
            onClick={() => handleSetSortingValuesListView(ESortBy.SIZE)}
          >
            <span>File size</span>
            {sortByFromProps && sortByFromProps === ESortBy.SIZE && (
              <ArrowIcon direction={sortDirectionFromProps} />
            )}
          </div>
          <div className="w-6" />
        </div>
      )}
      {displayFileView === EDisplayFileView.GRID && (
        <div className="flex justify-end border-b pb-4 pt-4">
          <div
            className="w-6 mr-2 cursor-pointer"
            onClick={() => handleSetSortingValuesGridView()}
          >
            {sortByFromProps && (
              <ArrowIcon direction={sortDirectionFromProps} />
            )}
            {!sortByFromProps && <ArrowUpDown />}
          </div>
          <Menu>
            <MenuButton>Sorting by</MenuButton>
            <MenuItems anchor="bottom">
              <MenuItem>
                <div
                  className="block data-[focus]:bg-black-400 cursor-pointer"
                  onClick={() => handleSelectionSortingByGridView(ESortBy.TYPE)}
                >
                  Type of file
                </div>
              </MenuItem>
              <MenuItem>
                <div
                  className="block data-[focus]:bg-black-400 cursor-pointer"
                  onClick={() => handleSelectionSortingByGridView(ESortBy.NAME)}
                >
                  Name
                </div>
              </MenuItem>
              <MenuItem>
                <div
                  className="block data-[focus]:bg-black-400 cursor-pointer"
                  onClick={() => handleSelectionSortingByGridView(ESortBy.DATE)}
                >
                  Last modified
                </div>
              </MenuItem>
              <MenuItem>
                <div
                  className="block data-[focus]:bg-black-400 cursor-pointer"
                  onClick={() => handleSelectionSortingByGridView(ESortBy.SIZE)}
                >
                  Size
                </div>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      )}
    </>
  );
};

export default SortBar;
