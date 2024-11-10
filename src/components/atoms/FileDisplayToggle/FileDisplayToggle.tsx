"use client";
import { useAppContext } from "@/contexts/AppContext";
import { EAction } from "@/contexts/enums";
import ListIcon from "../icons/ListIcon";
import GridIcon from "../icons/GridIcon";
import { useState } from "react";

export const FileDisplayToggle = () => {
  const { state, dispatch } = useAppContext();
  const { displayFileView } = state;

  const handleListView = () => {
    dispatch({ type: EAction.SET_DISPLAY_FILES_VIEW, value: "list" });
  };

  const handleGridView = () => {
    dispatch({ type: EAction.SET_DISPLAY_FILES_VIEW, value: "grid" });
  };

  return (
    <div className="flex items-center cursor-pointer">
      <div onClick={handleListView}>
        <ListIcon isSelected={displayFileView === "list"} />
      </div>
      <div onClick={handleGridView}>
        <GridIcon isSelected={displayFileView === "grid"} />
      </div>
    </div>
  );
};

export default FileDisplayToggle;
