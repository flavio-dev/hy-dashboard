import { useFilesDisplayingContext } from "@/contexts/FilesDisplayingProvider";
import { TFileLineProps } from "./type";
import { EFileType } from "@/types/file";
import {
  AudioIcon,
  VideoIcon,
  DocumentIcon,
  SpreadsheetIcon,
} from "@/components/atoms/icons";
import SetFavouriteToggle from "@/components/atoms/SetFavouriteToggle";
import formatFileSize from "@/helpers/formatSize";
import formatDate from "@/helpers/formatDate";

const FileLine = ({ file }: TFileLineProps) => {
  const { selectedFiles, setSelectedFiles } = useFilesDisplayingContext();
  const date = formatDate(file.date);
  const size = formatFileSize(file.size);
  const { id: fileId } = file;

  const handleToggleSelectFile = () => {
    if (selectedFiles[fileId]) {
      delete selectedFiles[fileId];
    } else {
      selectedFiles[fileId] = true;
    }
    setSelectedFiles({ ...selectedFiles });
  };

  return (
    <div
      className={`flex justify-between border-l border-r border-b pb-4 pt-4 ${
        selectedFiles[fileId] ? "bg-blue-100" : "hover:bg-black/5"
      }`}
      onClick={() => handleToggleSelectFile()}
    >
      <div className="w-6 mr-2">
        {file.type === EFileType.AUDIO && <AudioIcon />}
        {file.type === EFileType.DOCUMENT && <DocumentIcon />}
        {file.type === EFileType.SPREADSHEET && <SpreadsheetIcon />}
        {file.type === EFileType.VIDEO && <VideoIcon />}
      </div>

      <div className="flex-grow basis-0 truncate">{file.name}</div>

      <div className="w-32 text-left">{date}</div>
      <div className="w-24 text-left">{size}</div>
      <SetFavouriteToggle fileId={fileId} />
    </div>
  );
};

export default FileLine;
