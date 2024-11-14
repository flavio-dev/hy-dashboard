"use client";
import { useState } from "react";
import { SortingProvider } from "@/contexts/SortingContext";
import { useAppContext } from "@/contexts/AppContext";
import FilesViewWrapper from "@/components/organisms/FilesViewWrapper";
import SortByWrapper from "../SortBarWrapper";
import { FilesDisplayingProvider } from "@/contexts/FilesDisplayingProvider";
import { BulkActionBar } from "@/components/molecules/BulkActionBar";

const MainViewContainer = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState({});
  const { state } = useAppContext();
  const { displayFileView } = state;

  const clearSortingValues = () => {
    setSortBy(null);
    setSortDirection(null);
  };

  const clearSelectedFiles = () => {
    setSelectedFiles({});
  };

  return (
    <div>
      <div
        className={`h-10 transition-all ease-in-out duration-200 ${
          !!Object.entries(selectedFiles).length ? "opacity-1" : "opacity-0"
        }`}
      >
        {!!Object.entries(selectedFiles).length && (
          <BulkActionBar
            selectedFiles={selectedFiles}
            clearSelectedFiles={clearSelectedFiles}
          />
        )}
      </div>
      <SortingProvider
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
      >
        <SortByWrapper displayFileView={displayFileView} />
      </SortingProvider>
      <FilesDisplayingProvider
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
      >
        <FilesViewWrapper
          sortBy={sortBy}
          sortDirection={sortDirection}
          clearSortingValues={clearSortingValues}
        />
      </FilesDisplayingProvider>
    </div>
  );
};

export default MainViewContainer;
