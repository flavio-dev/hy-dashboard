"use client";
import { useState } from "react";
import FilesViewWrapper from "@/components/organisms/FilesViewWrapper";
import SortBar from "@/components/molecules/SortBar";

const MainViewContainer = () => {
  const [sortBy, setSortBy] = useState();
  const [sortDirection, setSortDirection] = useState();
  return (
    <>
      <SortBar setSortBy={setSortBy} setSortDirection={setSortDirection} />
      <FilesViewWrapper sortBy={sortBy} sortDirection={sortDirection} />
    </>
  );
};

export default MainViewContainer;
