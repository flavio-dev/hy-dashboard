"use client";
import { useAppContext } from "@/contexts/AppContext";
import StarIcon from "../StarIcon";

export const FavouriteToggle = () => {
  const { showFavorite, setShowFavorite } = useAppContext();

  const handleToggle = () => {
    console.log("jcsdiojosdjcosdij showFavorite = ", showFavorite);
    setShowFavorite(!showFavorite);
  };

  return (
    <div onClick={handleToggle} className="flex items-center cursor-pointer">
      <label className="mr-2">Stared:</label>
      <StarIcon showFavorite={showFavorite} />
    </div>
  );
};

export default FavouriteToggle;
