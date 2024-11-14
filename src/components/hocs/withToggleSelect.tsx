import { useFilesDisplayingContext } from "@/contexts/FilesDisplayingProvider";
import { TwithToggleSelectProps } from "./types";
import { TFile } from "@/types/file";
import formatDate from "@/helpers/formatDate";
import formatFileSize from "@/helpers/formatSize";

const withToggleSelect = <P extends { file: TFile }>(
  WrappedComponent: React.ComponentType<P & TwithToggleSelectProps>
) => {
  return function withToggleSelect(props: P) {
    const { selectedFiles, setSelectedFiles } = useFilesDisplayingContext();
    const date = formatDate(props.file.date);
    const size = formatFileSize(props.file.size);
    const { id: fileId } = props.file;

    const handleToggleSelectFile = () => {
      if (selectedFiles[fileId]) {
        delete selectedFiles[fileId];
      } else {
        selectedFiles[fileId] = true;
      }
      setSelectedFiles({ ...selectedFiles });
    };

    return (
      <WrappedComponent
        {...props}
        handleToggleSelectFile={handleToggleSelectFile}
        date={date}
        size={size}
        fileId={fileId}
        selectedFiles={selectedFiles}
      />
    );
  };
};
export default withToggleSelect;
