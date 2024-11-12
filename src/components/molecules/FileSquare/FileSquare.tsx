import { TFileSquareProps } from "./type";
import { EFileType } from "@/types/file";
import AudioIcon from "@/components/atoms/icons/AudioIcon";
import VideoIcon from "@/components/atoms/icons/VideoIcon";
import DocumentIcon from "@/components/atoms/icons/DocumentIcon";
import SpreadsheetIcon from "@/components/atoms/icons/SpreadsheetIcon";
import SetFavouriteToggle from "@/components/atoms/SetFavouriteToggle";
import formatFileSize from "@/helpers/formatSize";
import formatDate from "@/helpers/formatDate";

const FileSquare = ({ file }: TFileSquareProps) => {
  const date = formatDate(file.date);
  const size = formatFileSize(file.size);

  return (
    <div className="rounded-lg border-2 border-black hover:bg-black/5">
      <div className="flex justify-end">
        <SetFavouriteToggle fileId={file.id} />
      </div>
      <div className="flex justify-center">
        <div className="w-20">
          {file.type === EFileType.AUDIO && <AudioIcon />}
          {file.type === EFileType.DOCUMENT && <DocumentIcon />}
          {file.type === EFileType.SPREADSHEET && <SpreadsheetIcon />}
          {file.type === EFileType.VIDEO && <VideoIcon />}
        </div>
      </div>
      <div>
        <div className="truncate w-100%">{file.name}</div>
      </div>
      <div className="flex justify-between">
        <div className="w-24 text-left">{date}</div>
        <div className="w-20 text-right">{size}</div>
      </div>
    </div>
  );
};

export default FileSquare;
