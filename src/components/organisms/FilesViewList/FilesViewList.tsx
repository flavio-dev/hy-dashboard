import FileLine from "@/components/molecules/FileLine";
import { TFile } from "@/types/file";
import { TFilesViewListProps } from "./types";

const FileViewList = ({ files }: TFilesViewListProps) => (
  <div>
    {Object.keys(files).map((key: string) => {
      const currFile: TFile = files[key];
      return <FileLine key={currFile.id} file={currFile} />;
    })}
  </div>
);

export default FileViewList;
