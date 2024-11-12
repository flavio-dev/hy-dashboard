"use client";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "@/contexts/AppContext";
import FilesViewList from "../FilesViewList";
import FilesViewGrid from "../FilesViewGrid";
import { TFilesViewWrapperProps } from "./type";
import { ESortBy, ESortDirection } from "@/components/molecules/SortBar/enums";
import { EDisplayFileView } from "@/components/atoms/FileDisplayToggle/enums";

const FilesViewWrapper = ({
  sortBy,
  sortDirection,
  clearSortingValues,
}: TFilesViewWrapperProps) => {
  const { state } = useAppContext();
  const { files, filterByText, showFavorite } = state;
  const [fileIdsToShow, setFileIdsToShow] = useState(state.arrayFileIds);
  const { displayFileView } = state;
  const prevFilterByText = useRef<string>("");
  const prevShowFavorite = useRef<boolean>(false);

  useEffect(() => {
    console.log("filterByText - ", filterByText);
    console.log("prevFilterByText.current - ", prevFilterByText.current);
    if (
      filterByText !== prevFilterByText.current ||
      showFavorite !== prevShowFavorite.current
    ) {
      console.log("pppp do we enter here when changing to grid?");
      clearSortingValues();
      prevFilterByText.current = filterByText;
      prevShowFavorite.current = showFavorite;
    }
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
  }, [files, filterByText, showFavorite]);

  useEffect(() => {
    console.log("ssss do we enter here when changing to grid?");
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

  console.log("fileIdsToShow = ", fileIdsToShow);

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
