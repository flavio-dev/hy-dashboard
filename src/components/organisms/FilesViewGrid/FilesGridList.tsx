import FileSquare from "@/components/molecules/FileSquare";
import { TFile } from "@/types/file";
import { TFilesViewGridProps } from "./types";

const FileViewGrid = ({ fileIds, files }: TFilesViewGridProps) => (
  <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] py-4">
    {fileIds.map((id: string) => {
      const currFile: TFile = files[id];
      return <FileSquare key={currFile.id} file={currFile} />;
    })}
  </div>
);

export default FileViewGrid;
