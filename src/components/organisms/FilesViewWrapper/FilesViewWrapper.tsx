"use client";
import { useEffect, useState } from "react";
import { useAppContext } from "@/contexts/AppContext";
import FilesViewList from "../FilesViewList";
import FilesViewGrid from "../FilesViewGrid";
import { TFileDictionary } from "@/types/file";
import { TFilesViewWrapperProps } from "./type";

const FilesViewWrapper = ({
  sortBy,
  sortDirection,
}: TFilesViewWrapperProps) => {
  const { state } = useAppContext();
  const [filesToShow, setFilesToShow] = useState(state.files);
  const { displayFileView } = state;

  useEffect(() => {
    const { files, filterByText, showFavorite } = state;
    const filteredFiles: TFileDictionary = {};
    Object.keys(files).map((key) => {
      const fileNameContainsFilterText = files[key].name
        .toLowerCase()
        .includes(filterByText.toLowerCase());

      if (showFavorite) {
        if (fileNameContainsFilterText && files[key].isFavorite) {
          filteredFiles[key] = files[key];
        }
      } else if (fileNameContainsFilterText) {
        filteredFiles[key] = files[key];
      }
    });
    setFilesToShow(filteredFiles);
  }, [state]);

  useEffect(() => {
    console.log("HELOSE IN the useeffect with sortBy = ", sortBy);
    console.log("HELOSE IN the useeffect with sortDirecton = ", sortDirection);
  }, [sortBy, sortDirection]);

  return (
    <>
      {displayFileView === "list" && <FilesViewList files={filesToShow} />}
      {displayFileView === "grid" && <FilesViewGrid files={filesToShow} />}
    </>
  );
};

export default FilesViewWrapper;
