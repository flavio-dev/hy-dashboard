import { ArrowIcon, ArrowUpDown } from "@/components/atoms/icons";
import { ESortBy, ESortDirection } from "@/contexts/SortingContext/enums";
import { useSortingContext } from "@/contexts/SortingContext";

const SortBar = () => {
  const {
    setSortBy,
    setSortDirection,
    sortBy: sortByFromContext,
    sortDirection: sortDirectionFromContext,
  } = useSortingContext();

  const handleSetSortingValuesListView = (sortBy: ESortBy) => {
    if (sortBy === sortByFromContext) {
      const sortDirection =
        sortDirectionFromContext === ESortDirection.DOWN
          ? ESortDirection.UP
          : ESortDirection.DOWN;
      setSortDirection(sortDirection);
    } else {
      setSortBy(sortBy);
      setSortDirection(ESortDirection.DOWN);
    }
  };

  return (
    <div className="flex justify-between border-l border-r border-b pb-4 pt-4">
      <div
        className="w-6 mr-2 cursor-pointer py-1.5"
        onClick={() => handleSetSortingValuesListView(ESortBy.TYPE)}
      >
        {sortByFromContext && sortByFromContext === ESortBy.TYPE && (
          <ArrowIcon direction={sortDirectionFromContext} />
        )}
        {(!sortByFromContext || sortByFromContext !== ESortBy.TYPE) && (
          <ArrowUpDown />
        )}
      </div>
      <div
        className="flex flex-grow basis-0 cursor-pointer py-1.5"
        onClick={() => handleSetSortingValuesListView(ESortBy.NAME)}
      >
        <span>Name</span>
        {sortByFromContext && sortByFromContext === ESortBy.NAME && (
          <ArrowIcon direction={sortDirectionFromContext} />
        )}
      </div>
      <div
        className="flex w-32 text-left cursor-pointer py-1.5"
        onClick={() => handleSetSortingValuesListView(ESortBy.DATE)}
      >
        <span>Last Modified</span>
        {sortByFromContext && sortByFromContext === ESortBy.DATE && (
          <ArrowIcon direction={sortDirectionFromContext} />
        )}
      </div>
      <div
        className="flex w-24 text-left cursor-pointer py-1.5"
        onClick={() => handleSetSortingValuesListView(ESortBy.SIZE)}
      >
        <span>File size</span>
        {sortByFromContext && sortByFromContext === ESortBy.SIZE && (
          <ArrowIcon direction={sortDirectionFromContext} />
        )}
      </div>
      <div className="w-6" />
    </div>
  );
};

export default SortBar;
