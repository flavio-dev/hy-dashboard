"use client";
import FileLine from "@/components/molecules/FileLine";
import { useAppContext } from "@/contexts/AppContext";
import { TFile, TFileDictionary } from "@/types/file";
import { useEffect, useState } from "react";

const FilesView = () => {
  const { state } = useAppContext();
  const [filesToShow, setFilesToShow] = useState(state.files);

  useEffect(() => {
    const { files, filterByText, showFavorite } = state;
    const filteredFiles: TFileDictionary = {};
    Object.keys(files).map((key) => {
      if (files[key].name.toLowerCase().includes(filterByText.toLowerCase())) {
        filteredFiles[key] = files[key];
      }

      if (showFavorite && !files[key].isFavorite) {
        delete filteredFiles[key];
      }
    });
    setFilesToShow(filteredFiles);
  }, [state]);

  return (
    <div>
      {Object.keys(filesToShow).map((key: string) => {
        const currFile: TFile = filesToShow[key];
        return <FileLine key={currFile.id} file={currFile} />;
      })}
    </div>
  );
};

export default FilesView;
