import FavouriteToggle from "@/components/atoms/FavouriteToggle";
import SearchBar from "@/components/atoms/SearchBar";

export const FilterBar = () => {
  return (
    <div className="flex items-center h-14">
      <SearchBar />
      <FavouriteToggle />
    </div>
  );
};

export default FilterBar;
