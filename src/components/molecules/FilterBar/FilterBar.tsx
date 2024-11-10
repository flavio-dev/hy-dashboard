import ShowFavouriteToggle from "@/components/atoms/ShowFavouriteToggle";
import SearchBar from "@/components/atoms/SearchBar";

export const FilterBar = () => {
  return (
    <div className="flex items-center h-14">
      <SearchBar />
      <ShowFavouriteToggle />
    </div>
  );
};

export default FilterBar;
