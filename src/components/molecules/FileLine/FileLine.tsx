import React from "react";
import AudioIcon from "@/components/atoms/AudioIcon";
import { TFileLineProps } from "./type";
import formatDate from "@/helpers/formatDate";
import formatFileSize from "@/helpers/formatSize";
import DocumentIcon from "@/components/atoms/DocumentIcon";
import SpreadsheetIcon from "@/components/atoms/SpreadsheetIcon";

const FileLine = ({ file }: TFileLineProps) => {
  const date = formatDate(file.date);
  const size = formatFileSize(file.size);
  return (
    <div className="flex justify-between border-l border-r border-b pb-4 pt-4">
      <div className="flex-grow border-r">{file.name}</div>
      <div className="w-24 text-left border-r">{date}</div>
      <div className="w-20 text-left border-r">{size}</div>
      <div className="w-10 flex justify-center">
        {file.type === "audio" && <AudioIcon />}
        {file.type === "document" && <DocumentIcon />}
        {file.type === "spreadsheet" && <SpreadsheetIcon />}
      </div>
    </div>
  );
};

export default FileLine;
