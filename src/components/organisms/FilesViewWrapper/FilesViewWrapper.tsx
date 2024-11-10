"use client";
import { useAppContext } from "@/contexts/AppContext";
import FileViewList from "../FilesViewList";
import FileViewGrid from "../FilesViewGrid";
import { TFileDictionary } from "@/types/file";
import { useEffect, useState } from "react";

const FilesViewWrapper = () => {
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

  return (
    <>
      {displayFileView === "list" && <FileViewList files={filesToShow} />}
      {displayFileView === "grid" && <FileViewGrid files={filesToShow} />}
    </>
  );
};

export default FilesViewWrapper;
