import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useSortingContext } from "@/contexts/SortingContext";
import { ESortBy, ESortDirection } from "@/contexts/SortingContext/enums";
import ArrowIcon from "@/components/atoms/icons/ArrowIcon";
import ArrowUpDown from "@/components/atoms/icons/ArrowUpDown";

const SortDropDown = () => {
  const {
    setSortBy,
    setSortDirection,
    sortBy: sortByFromContext,
    sortDirection: sortDirectionFromContext,
  } = useSortingContext();

  const handleSetSortingValuesGridView = () => {
    if (sortByFromContext) {
      const sortDirection =
        sortDirectionFromContext === ESortDirection.DOWN
          ? ESortDirection.UP
          : ESortDirection.DOWN;
      setSortDirection(sortDirection);
    } else {
      setSortDirection(ESortDirection.DOWN);
      setSortBy(ESortBy.NAME);
    }
  };

  const handleSelectionSortingByGridView = (sortBy: ESortBy) => {
    if (sortBy !== sortByFromContext) {
      setSortBy(sortBy);
      setSortDirection(ESortDirection.DOWN);
    }
  };

  return (
    <div className="flex justify-end border-b pb-4 pt-4">
      <div
        className="w-6 mr-2 cursor-pointer"
        onClick={() => handleSetSortingValuesGridView()}
      >
        {sortByFromContext && (
          <ArrowIcon direction={sortDirectionFromContext} />
        )}
        {!sortByFromContext && <ArrowUpDown />}
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
  );
};

export default SortDropDown;
