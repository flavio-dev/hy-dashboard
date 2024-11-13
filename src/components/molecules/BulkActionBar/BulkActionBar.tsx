import { useRef } from "react";
import { useAppContext } from "@/contexts/AppContext";
import { BinIcon, StarIcon } from "@/components/atoms/icons";
import { TBulkActionBarProps } from "./types";
import { EAction } from "@/contexts/AppContext/enums";

const BulkActionBar = ({ selectedFiles }: TBulkActionBarProps) => {
  const toggleFavourite = useRef<boolean>(false);
  const { dispatch } = useAppContext();

  const handleBulkSetFavouriteToggle = () => {
    toggleFavourite.current = !toggleFavourite.current;
    dispatch({
      type: EAction.SET_MULTIPLE_FAVOURITE,
      files: selectedFiles,
      value: toggleFavourite.current,
    });
  };

  const handleBulkDelete = () => {
    dispatch({
      type: EAction.DELETE_MULTIPLE_FILES,
      files: selectedFiles,
    });
  };

  return (
    <div className="flex items-center">
      <span className="mr-2">
        {Object.entries(selectedFiles).length} selected
      </span>
      <span onClick={handleBulkSetFavouriteToggle} className="mr-2">
        <StarIcon isSelected={toggleFavourite.current} />
      </span>
      <span onClick={handleBulkDelete}>
        <BinIcon />
      </span>
    </div>
  );
};

export default BulkActionBar;
