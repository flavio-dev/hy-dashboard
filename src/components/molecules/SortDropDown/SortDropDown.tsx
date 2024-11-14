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

  let buttonText = "";
  switch (sortByFromContext) {
    case ESortBy.TYPE:
      buttonText = "Type of file";
      break;
    case ESortBy.NAME:
      buttonText = "Name";
      break;
    case ESortBy.DATE:
      buttonText = "Last modified";
      break;
    case ESortBy.SIZE:
      buttonText = "Size";
      break;
    default:
      buttonText = "Sorting by";
      break;
  }

  return (
    <div className="flex items-center justify-end border-b border-black pb-4 pt-4">
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
        <MenuButton className="min-w-32 rounded-lg border-none bg-black/5 py-1.5 px-3 data-[active]:outline-2 data-[active]:-outline-offset-2 data-[active]:outline-black data-[active]:outline-none">
          {buttonText}
        </MenuButton>
        <MenuItems
          anchor="bottom end"
          className="bg-white w-max rounded-lg border-2 border-bg-black/5"
        >
          <MenuItem>
            <div
              className={`cursor-pointer py-1.5 px-3 bg-black/5 ${
                sortByFromContext === ESortBy.TYPE
                  ? "bg-blue-100"
                  : "data-[focus]:bg-white"
              }`}
              onClick={() => handleSelectionSortingByGridView(ESortBy.TYPE)}
            >
              Type of file
            </div>
          </MenuItem>
          <MenuItem>
            <div
              className={`cursor-pointer py-1.5 px-3 bg-black/5 ${
                sortByFromContext === ESortBy.NAME
                  ? "bg-blue-100"
                  : "data-[focus]:bg-white"
              }`}
              onClick={() => handleSelectionSortingByGridView(ESortBy.NAME)}
            >
              Name
            </div>
          </MenuItem>
          <MenuItem>
            <div
              className={`cursor-pointer py-1.5 px-3 bg-black/5 ${
                sortByFromContext === ESortBy.DATE
                  ? "bg-blue-100"
                  : "data-[focus]:bg-white"
              }`}
              onClick={() => handleSelectionSortingByGridView(ESortBy.DATE)}
            >
              Last modified
            </div>
          </MenuItem>
          <MenuItem>
            <div
              className={`cursor-pointer py-1.5 px-3 bg-black/5 ${
                sortByFromContext === ESortBy.SIZE
                  ? "bg-blue-100"
                  : "data-[focus]:bg-white"
              }`}
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
