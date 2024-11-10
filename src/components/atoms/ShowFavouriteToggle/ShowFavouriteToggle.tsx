"use client";
import { useAppContext } from "@/contexts/AppContext";
import StarIcon from "../StarIcon";

export const ShowFavouriteToggle = () => {
  const { showFavorite, setShowFavorite } = useAppContext();

  const handleToggle = () => {
    setShowFavorite(!showFavorite);
  };

  return (
    <div onClick={handleToggle} className="flex items-center cursor-pointer">
      <label className="mr-2">Stared:</label>
      <StarIcon isSelected={showFavorite} />
    </div>
  );
};

export default ShowFavouriteToggle;
