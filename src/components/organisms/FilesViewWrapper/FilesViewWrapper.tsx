"use client";
import { useEffect, useRef } from "react";
import { useAppContext } from "@/contexts/AppContext";
import { EAction, EDisplayFileView } from "@/contexts/AppContext/enums";
import { ESortBy, ESortDirection } from "@/contexts/SortingContext/enums";
import FilesViewList from "../FilesViewList";
import FilesViewGrid from "../FilesViewGrid";
import { TFilesViewWrapperProps } from "./type";

const FilesViewWrapper = ({
  sortBy,
  sortDirection,
  clearSortingValues,
}: TFilesViewWrapperProps) => {
  const { state, dispatch } = useAppContext();
  const {
    files,
    filterByText,
    showFavorite,
    arrayFileIds: fileIdsToShow,
  } = state;
  const { displayFileView } = state;
  const prevFilterByText = useRef<string>("");
  const prevShowFavorite = useRef<boolean>(false);

  useEffect(() => {
    if (
      filterByText !== prevFilterByText.current ||
      showFavorite !== prevShowFavorite.current
    ) {
      clearSortingValues();
      prevFilterByText.current = filterByText;
      prevShowFavorite.current = showFavorite;
    }
    const filteredFileIds: string[] = [];
    Object.keys(files).map((key) => {
      const fileNameContainsFilterText = files[key].name
        .toLowerCase()
        .includes(filterByText.toLowerCase());

      if (showFavorite) {
        if (fileNameContainsFilterText && files[key].isFavorite) {
          filteredFileIds.push(key);
        }
      } else if (fileNameContainsFilterText) {
        filteredFileIds.push(key);
      }
    });
    dispatch({
      type: EAction.SET_FILTERED_ARRAY_FILE_IDS,
      value: filteredFileIds,
    });
  }, [files, filterByText, showFavorite]);

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
      dispatch({
        type: EAction.SET_FILTERED_ARRAY_FILE_IDS,
        value: [...sortedArrayOfFileIds],
      });
    }
  }, [sortBy, sortDirection]);

  return (
    <>
      {displayFileView === EDisplayFileView.LIST && (
        <FilesViewList files={files} fileIds={fileIdsToShow} />
      )}
      {displayFileView === EDisplayFileView.GRID && (
        <FilesViewGrid files={files} fileIds={fileIdsToShow} />
      )}
    </>
  );
};

export default FilesViewWrapper;
