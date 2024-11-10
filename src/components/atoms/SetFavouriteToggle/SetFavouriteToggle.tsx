"use client";
import { useAppContext } from "@/contexts/AppContext";
import { EAction } from "@/contexts/enums";
import StarIcon from "../StarIcon";
import { TSetFavouriteToggleProps } from "./type";

export const SetFavouriteToggle = ({ fileId }: TSetFavouriteToggleProps) => {
  const { state, dispatch } = useAppContext();
  const { files } = state;

  const handleToggle = () => {
    dispatch({ type: EAction.SET_IS_FAVOURITE, fileId: fileId });
  };

  return (
    <div onClick={handleToggle} className="flex items-center cursor-pointer">
      <StarIcon isSelected={files[fileId].isFavorite} />
    </div>
  );
};

export default SetFavouriteToggle;
