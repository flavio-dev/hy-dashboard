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

const FileSquare = ({
  file,
  handleToggleSelectFile,
  date,
  size,
  fileId,
  selectedFiles,
}: TFileProps) => {
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
        <div className="w-24 text-right">{size}</div>
      </div>
    </div>
  );
};

export default withToggleSelect(FileSquare);
