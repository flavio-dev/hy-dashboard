"use client";
import FileLine from "@/components/molecules/FileLine";
import { useAppContext } from "@/contexts/AppContext";
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
      {filesToShow.map((file: TFile) => (
        <FileLine key={file.id} file={file} />
      ))}
    </div>
  );
};

export default FilesView;
