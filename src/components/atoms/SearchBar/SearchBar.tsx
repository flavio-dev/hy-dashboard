"use client";
import { useAppContext } from "@/contexts/AppContext";

export const SearchBar = () => {
  const { filterByText, setFilterByText } = useAppContext();

  const handleFilterByText = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterByText(e.target.value);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="search_input" className="mr-2">
        Search for a file:
      </label>
      <input
        type="text"
        id="search_input"
        value={filterByText}
        onChange={handleFilterByText}
        className=""
        placeholder="Start typing..."
        required
      />
    </div>
  );
};

export default SearchBar;
