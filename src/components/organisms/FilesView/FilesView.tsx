"use client";
import { useAppContext } from "@/contexts/AppContext";
import formatDate from "@/helpers/formatDate";
import { useEffect, useState } from "react";

const FilesView = () => {
  const { files, filterByText } = useAppContext();
  const [filesToShow, setFilesToShow] = useState(files);

  useEffect(() => {
    const filteredFiles = files.filter((file) =>
      file.name.toLowerCase().includes(filterByText.toLowerCase())
    );

    setFilesToShow(filteredFiles);
  }, [files, filterByText]);

  return (
    <div>
      {filesToShow.map((file: TFile) => {
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
