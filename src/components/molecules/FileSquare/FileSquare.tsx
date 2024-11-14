import { useFilesDisplayingContext } from "@/contexts/FilesDisplayingProvider";
import { TFileSquareProps } from "./type";
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

const FileSquare = ({ file }: TFileSquareProps) => {
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
      className={`rounded-lg border-2 border-[#e5e7eb] p-2 ${
        selectedFiles[fileId] ? "bg-blue-100" : "hover:bg-black/5"
      }`}
      onClick={() => handleToggleSelectFile()}
    >
      <div className="flex justify-end">
        <SetFavouriteToggle fileId={fileId} />
      </div>
      <div className="flex justify-center">
        <div
          className={`w-20 transition-all ease-in-out duration-200 ${
            selectedFiles[fileId] ? "p-0" : "p-1"
          }`}
        >
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
