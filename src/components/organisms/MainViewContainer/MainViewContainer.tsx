"use client";
import { useState } from "react";
import { SortingProvider } from "@/contexts/SortingContext";
import { useAppContext } from "@/contexts/AppContext";
import FilesViewWrapper from "@/components/organisms/FilesViewWrapper";
import SortByWrapper from "../SortBarWrapper";

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
      <SortingProvider
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
      >
        <SortByWrapper displayFileView={displayFileView} />
      </SortingProvider>
      <FilesViewWrapper
        sortBy={sortBy}
        sortDirection={sortDirection}
        clearSortingValues={clearSortingValues}
      />
    </>
  );
};

export default MainViewContainer;
