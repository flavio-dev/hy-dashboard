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
      className={`flex justify-between border-b transition-all ease-in-out duration-200 ${
        selectedFiles[fileId]
          ? "bg-blue-100 pl-3 pr-1"
          : "hover:bg-black/5 px-2"
      }`}
    >
      <div className="w-6 mr-2 py-4" onClick={() => handleToggleSelectFile()}>
        {file.type === EFileType.AUDIO && <AudioIcon />}
        {file.type === EFileType.DOCUMENT && <DocumentIcon />}
        {file.type === EFileType.SPREADSHEET && <SpreadsheetIcon />}
        {file.type === EFileType.VIDEO && <VideoIcon />}
      </div>

      <div
        className="flex-grow basis-0 truncate py-4 pr-2"
        onClick={() => handleToggleSelectFile()}
      >
        {file.name}
      </div>

      <div
        className="w-32 text-left py-4 hidden sm:block"
        onClick={() => handleToggleSelectFile()}
      >
        {date}
      </div>
      <div
        className="w-24 text-left py-4 hidden md:block"
        onClick={() => handleToggleSelectFile()}
      >
        {size}
      </div>
      <SetFavouriteToggle fileId={fileId} />
    </div>
  );
};

export default FileLine;
