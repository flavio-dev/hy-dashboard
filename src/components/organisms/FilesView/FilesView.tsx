"use client";

import formatDate from "@/helpers/formatDate";
import { useEffect, useState } from "react";

const FilesView = () => {
  const [files, setFiles] = useState<TFile[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const res = await fetch("/api/files");
      const files: TFile[] = await res.json();
      setFiles(files);
    };

    fetchFiles();
  }, []);

  return (
    <div>
      {files.map((file) => {
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
