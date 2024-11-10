import FileSquare from "@/components/molecules/FileSquare";
import { TFile } from "@/types/file";
import { TFileViewGridProps } from "./types";

const FileViewGrid = ({ files }: TFileViewGridProps) => (
  <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))]">
    {Object.keys(files).map((key: string) => {
      const currFile: TFile = files[key];
      return <FileSquare key={currFile.id} file={currFile} />;
    })}
  </div>
);

export default FileViewGrid;
