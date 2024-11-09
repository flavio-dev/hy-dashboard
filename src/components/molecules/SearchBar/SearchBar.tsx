"use client";
import { useFilesContext } from "@/contexts/FilesContext";
import { useState } from "react";

export const SearchBar = () => {
  const [inputText, setInputText] = useState("");
  const { files, setFilteredFiles } = useFilesContext();

  const handleChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    const searchText = e.target.value.toLowerCase();
    if (searchText === "") {
      setFilteredFiles(files);
    } else {
      const filteredFiles = files.filter((file) =>
        file.name.toLowerCase().includes(searchText)
      );
      setFilteredFiles(filteredFiles);
    }
  };

  return <input type="text" onChange={handleChangeInput} value={inputText} />;
};

export default SearchBar;
