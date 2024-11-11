"use client";
import { useState } from "react";
import FilesViewWrapper from "@/components/organisms/FilesViewWrapper";
import SortBar from "@/components/molecules/SortBar";

const MainViewContainer = () => {
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

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
