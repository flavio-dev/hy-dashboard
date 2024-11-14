import withToggleSelect from "@/components/hocs/withToggleSelect";
import { TFileProps } from "../types";
import { EFileType } from "@/types/file";
import {
  AudioIcon,
  VideoIcon,
  DocumentIcon,
  SpreadsheetIcon,
} from "@/components/atoms/icons";
import SetFavouriteToggle from "@/components/atoms/SetFavouriteToggle";

const FileLine = ({
  file,
  handleToggleSelectFile,
  date,
  size,
  fileId,
  selectedFiles,
}: TFileProps) => {
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

export default withToggleSelect(FileLine);
