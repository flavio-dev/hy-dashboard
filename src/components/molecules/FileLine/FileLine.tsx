import React from "react";
import AudioIcon from "@/components/atoms/AudioIcon";
import { TFileLineProps } from "./type";
import formatDate from "@/helpers/formatDate";
import formatFileSize from "@/helpers/formatSize";
import DocumentIcon from "@/components/atoms/DocumentIcon";
import SpreadsheetIcon from "@/components/atoms/SpreadsheetIcon";
import { EFileType } from "@/types/file";

const FileLine = ({ file }: TFileLineProps) => {
  const date = formatDate(file.date);
  const size = formatFileSize(file.size);
  return (
    <div className="flex justify-between border-l border-r border-b pb-4 pt-4">
      <div className="w-10 flex justify-center">
        {file.type === EFileType.AUDIO && <AudioIcon />}
        {file.type === EFileType.DOCUMENT && <DocumentIcon />}
        {file.type === EFileType.SPREADSHEET && <SpreadsheetIcon />}
      </div>
      <div className="flex-grow">{file.name}</div>
      <div className="w-24 text-left">{date}</div>
      <div className="w-20 text-left">{size}</div>
    </div>
  );
};

export default FileLine;
