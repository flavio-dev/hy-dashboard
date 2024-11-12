"use client";
import { useEffect, useState } from "react";
import { useAppContext } from "@/contexts/AppContext";
import FilesViewList from "../FilesViewList";
import FilesViewGrid from "../FilesViewGrid";
import { TFilesViewWrapperProps } from "./type";
import { ESortBy, ESortDirection } from "@/components/molecules/SortBar/enums";

const FilesViewWrapper = ({
  sortBy,
  sortDirection,
  clearSortingValues,
}: TFilesViewWrapperProps) => {
  const { state } = useAppContext();
  const { files } = state;
  const [fileIdsToShow, setFileIdsToShow] = useState(state.arrayFileIds);
  const { displayFileView } = state;

  useEffect(() => {
    clearSortingValues();
    const { files, filterByText, showFavorite } = state;
    const filteredFilesId: string[] = [];
    Object.keys(files).map((key) => {
      const fileNameContainsFilterText = files[key].name
        .toLowerCase()
        .includes(filterByText.toLowerCase());

      if (showFavorite) {
        if (fileNameContainsFilterText && files[key].isFavorite) {
          filteredFilesId.push(key);
        }
      } else if (fileNameContainsFilterText) {
        filteredFilesId.push(key);
      }
    });
    setFileIdsToShow(filteredFilesId);
  }, [state]);

  useEffect(() => {
    let sortedArrayOfFileIds: string[] = [];
    switch (sortBy) {
      case ESortBy.NAME:
        sortedArrayOfFileIds = fileIdsToShow.sort((a, b) => {
          if (sortDirection === ESortDirection.UP) {
            return files[a].name
              .toLowerCase()
              .localeCompare(files[b].name.toLowerCase());
          } else {
            return files[b].name
              .toLowerCase()
              .localeCompare(files[a].name.toLowerCase());
          }
        });
        break;
      case ESortBy.DATE:
        sortedArrayOfFileIds = fileIdsToShow.sort((a, b) => {
          if (sortDirection === ESortDirection.UP) {
            return files[a].date.localeCompare(files[b].date);
          } else {
            return files[b].date.localeCompare(files[a].date);
          }
        });
        break;
      case ESortBy.SIZE:
        sortedArrayOfFileIds = fileIdsToShow.sort((a, b) => {
          if (sortDirection === ESortDirection.UP) {
            return files[a].size - files[b].size;
          } else {
            return files[b].size - files[a].size;
          }
        });
        break;
      case ESortBy.TYPE:
        sortedArrayOfFileIds = fileIdsToShow.sort((a, b) => {
          if (sortDirection === ESortDirection.DOWN) {
            return files[a].type.localeCompare(files[b].type);
          } else {
            return files[b].type.localeCompare(files[a].type);
          }
        });
        break;
    }

    if (sortBy) {
      setFileIdsToShow([...sortedArrayOfFileIds]);
    }
  }, [sortBy, sortDirection, setFileIdsToShow]);

  return (
    <>
      {displayFileView === "list" && (
        <FilesViewList files={files} fileIds={fileIdsToShow} />
      )}
      {displayFileView === "grid" && (
        <FilesViewGrid files={files} fileIds={fileIdsToShow} />
      )}
    </>
  );
};

export default FilesViewWrapper;
