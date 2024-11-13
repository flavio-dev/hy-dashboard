"use client";
import { useAppContext } from "@/contexts/AppContext";
import { EAction } from "@/contexts/AppContext/enums";
import StarIcon from "../icons/StarIcon";
import { TSetFavouriteToggleProps } from "./type";

export const SetFavouriteToggle = ({ fileId }: TSetFavouriteToggleProps) => {
  const { state, dispatch } = useAppContext();
  const { files } = state;

  const handleToggle = () => {
    dispatch({ type: EAction.TOGGLE_SET_FAVOURITE, fileId: fileId });
  };

  return (
    <div onClick={handleToggle} className="flex items-center cursor-pointer">
      <StarIcon isSelected={files[fileId].isFavorite} />
    </div>
  );
};

export default SetFavouriteToggle;
