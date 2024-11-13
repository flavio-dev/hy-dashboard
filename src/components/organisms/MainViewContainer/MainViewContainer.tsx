"use client";
import { useState } from "react";
import { SortingProvider } from "@/contexts/SortingContext";
import { useAppContext } from "@/contexts/AppContext";
import FilesViewWrapper from "@/components/organisms/FilesViewWrapper";
import SortByWrapper from "../SortBarWrapper";
import { FilesDisplayingProvider } from "@/contexts/FilesDisplayingProvider";

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

  return (
    <div className="pl-3 pr-3">
      {!!Object.entries(selectedFiles).length && (
        <SortingProvider
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
        >
          <SortByWrapper displayFileView={displayFileView} />
        </SortingProvider>
      )}
      {!Object.entries(selectedFiles).length && (
        <SortingProvider
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
        >
          <SortByWrapper displayFileView={displayFileView} />
        </SortingProvider>
      )}
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
