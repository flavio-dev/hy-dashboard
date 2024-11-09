"use client";

import { useFilesContext } from "@/contexts/FilesContext";
import formatDate from "@/helpers/formatDate";
import { useEffect } from "react";

const FilesView = () => {
  const { filteredFiles, setFilteredFiles, setFiles } = useFilesContext();

  useEffect(() => {
    const fetchFiles = async () => {
      const res = await fetch("/api/files");
      const files: TFile[] = await res.json();
      setFiles(files);
      setFilteredFiles(files);
    };

    fetchFiles();
  }, []);

  return (
    <div>
      {filteredFiles.map((file: TFile) => {
        const date = formatDate(file.date);
        return (
          <li key={file.id}>
            {file.name} - {date}
          </li>
        );
      })}
    </div>
  );
};

export default FilesView;
