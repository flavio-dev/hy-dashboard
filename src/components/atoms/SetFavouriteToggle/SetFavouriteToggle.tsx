"use client";
import { useAppContext } from "@/contexts/AppContext";
import StarIcon from "../StarIcon";
import { TSetFavouriteToggleProps } from "./type";

export const SetFavouriteToggle = ({ fileId }: TSetFavouriteToggleProps) => {
  const { isFavorite, setIsFavorite } = useAppContext();

  const handleToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div onClick={handleToggle} className="flex items-center cursor-pointer">
      <label className="mr-2">Stared:</label>
      <StarIcon isSelected={isFavorite} />
    </div>
  );
};

export default SetFavouriteToggle;
