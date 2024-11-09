"use client";
import { useAppContext } from "@/contexts/AppContext";

export const SearchBar = () => {
  const { filterByText, setFilterByText } = useAppContext();

  const handleFilterByText = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterByText(e.target.value);
  };

  return (
    <input type="text" onChange={handleFilterByText} value={filterByText} />
  );
};

export default SearchBar;
