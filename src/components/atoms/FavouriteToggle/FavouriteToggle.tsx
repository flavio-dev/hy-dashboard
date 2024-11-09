"use client";
import { useAppContext } from "@/contexts/AppContext";

export const FavouriteToggle = () => {
  const { showFavorite, setShowFavorite } = useAppContext();

  const handleToggle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterByText(e.target.value);
  };

  return (
    <input type="text" onChange={handleFilterByText} value={filterByText} />
  );
};

export default FavouriteToggle;
