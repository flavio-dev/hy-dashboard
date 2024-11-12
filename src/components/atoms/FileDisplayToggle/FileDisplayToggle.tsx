"use client";
import { useAppContext } from "@/contexts/AppContext";
import ListIcon from "../icons/ListIcon";
import GridIcon from "../icons/GridIcon";
import { EAction, EDisplayFileView } from "@/contexts/AppContext/enums";

export const FileDisplayToggle = () => {
  const { state, dispatch } = useAppContext();
  const { displayFileView } = state;

  const handleListView = () => {
    dispatch({
      type: EAction.SET_DISPLAY_FILES_VIEW,
      value: EDisplayFileView.LIST,
    });
  };

  const handleGridView = () => {
    dispatch({
      type: EAction.SET_DISPLAY_FILES_VIEW,
      value: EDisplayFileView.GRID,
    });
  };

  return (
    <div className="flex items-center cursor-pointer">
      <div onClick={handleListView}>
        <ListIcon isSelected={displayFileView === EDisplayFileView.LIST} />
      </div>
      <div onClick={handleGridView}>
        <GridIcon isSelected={displayFileView === EDisplayFileView.GRID} />
      </div>
    </div>
  );
};

export default FileDisplayToggle;
