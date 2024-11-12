"use client";
import { useState } from "react";
import FilesViewWrapper from "@/components/organisms/FilesViewWrapper";
import SortBar from "@/components/molecules/SortBar";
import { useAppContext } from "@/contexts/AppContext";

const MainViewContainer = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const { state } = useAppContext();
  const { displayFileView } = state;

  const clearSortingValues = () => {
    setSortBy(null);
    setSortDirection(null);
  };
  return (
    <>
      <SortBar
        setSortBy={setSortBy}
        setSortDirection={setSortDirection}
        sortBy={sortBy}
        sortDirection={sortDirection}
        displayFileView={displayFileView}
      />
      <FilesViewWrapper
        sortBy={sortBy}
        sortDirection={sortDirection}
        clearSortingValues={clearSortingValues}
      />
    </>
  );
};

export default MainViewContainer;
