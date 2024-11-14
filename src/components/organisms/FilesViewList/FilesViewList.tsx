import FileLine from "@/components/molecules/File/FileLine";
import { TFile } from "@/types/file";
import { TFilesViewListProps } from "./types";

const FileViewList = ({ fileIds, files }: TFilesViewListProps) => (
  <div>
    {fileIds.map((id: string) => {
      const currFile: TFile = files[id];
      return <FileLine key={currFile.id} file={currFile} />;
    })}
  </div>
);

export default FileViewList;
