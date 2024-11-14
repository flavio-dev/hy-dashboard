"use client";
import { useAppContext } from "@/contexts/AppContext";
import StarIcon from "../icons/StarIcon";
import { EAction } from "@/contexts/AppContext/enums";

export const ShowFavouriteToggle = () => {
  const { state, dispatch } = useAppContext();
  const { showFavorite } = state;

  const handleToggle = () => {
    dispatch({ type: EAction.TOGGLE_SHOW_FAVOURITE });
  };

  return (
    <div onClick={handleToggle} className="flex items-center cursor-pointer">
      <label className="mr-2">Only Starred:</label>
      <StarIcon isSelected={showFavorite} />
    </div>
  );
};

export default ShowFavouriteToggle;
