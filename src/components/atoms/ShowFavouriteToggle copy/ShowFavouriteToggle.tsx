"use client";
import { useAppContext } from "@/contexts/AppContext";
import { EAction } from "@/contexts/enums";
import StarIcon from "../icons/StarIcon";

export const ShowFavouriteToggle = () => {
  const { state, dispatch } = useAppContext();
  const { showFavorite } = state;

  const handleToggle = () => {
    dispatch({ type: EAction.SET_SHOW_FAVOURITE });
  };

  return (
    <div onClick={handleToggle} className="flex items-center cursor-pointer">
      <label className="mr-2">Stared:</label>
      <StarIcon isSelected={showFavorite} />
    </div>
  );
};

export default ShowFavouriteToggle;
