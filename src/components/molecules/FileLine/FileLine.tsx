import { TFileLineProps } from "./type";
import { EFileType } from "@/types/file";
import AudioIcon from "@/components/atoms/icons/AudioIcon";
import VideoIcon from "@/components/atoms/icons/VideoIcon";
import DocumentIcon from "@/components/atoms/icons/DocumentIcon";
import SpreadsheetIcon from "@/components/atoms/icons/SpreadsheetIcon";
import SetFavouriteToggle from "@/components/atoms/SetFavouriteToggle";
import formatFileSize from "@/helpers/formatSize";
import formatDate from "@/helpers/formatDate";

const FileLine = ({ file }: TFileLineProps) => {
  const date = formatDate(file.date);
  const size = formatFileSize(file.size);

  return (
    <div className="flex justify-between border-l border-r border-b pb-4 pt-4 hover:bg-black/5">
      <div className="w-6 mr-2">
        {file.type === EFileType.AUDIO && <AudioIcon />}
        {file.type === EFileType.DOCUMENT && <DocumentIcon />}
        {file.type === EFileType.SPREADSHEET && <SpreadsheetIcon />}
        {file.type === EFileType.VIDEO && <VideoIcon />}
      </div>

      <div className="flex-grow basis-0 truncate">{file.name}</div>

      <div className="w-32 text-left">{date}</div>
      <div className="w-24 text-left">{size}</div>
      <SetFavouriteToggle fileId={file.id} />
    </div>
  );
};

export default FileLine;
