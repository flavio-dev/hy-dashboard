"use client";
import { useAppContext } from "@/contexts/AppContext";
import { EAction } from "@/contexts/enums";

export const SearchBar = () => {
  const { state, dispatch } = useAppContext();
  const filterByText = state.filterByText;

  const handleFilterByText = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: EAction.SET_FILTERED_TEXT, value: e.target.value });
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
