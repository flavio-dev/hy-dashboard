import { AppProvider } from "@/contexts/AppContext";
import { EFileType, TFile } from "@/types/file";
import FilterBar from "@/components/molecules/FilterBar";
import FileDisplayToggle from "@/components/atoms/FileDisplayToggle";
import MainViewContainer from "@/components/organisms/MainViewContainer";
import ScrollToTopContainer from "@/components/atoms/ScrollToTopContainer";

const mapApiToFile = (apiResponse: any): TFile => {
  const typeMap: Record<string, EFileType> = {
    audio: EFileType.AUDIO,
    document: EFileType.DOCUMENT,
    spreadsheet: EFileType.SPREADSHEET,
    video: EFileType.VIDEO,
  };

  return {
    ...apiResponse,
    type: typeMap[apiResponse.type],
  };
};

const fetchFiles = async () => {
  const res = await fetch("http://localhost:3000/api/files");

  const files = await res.json();
  const mappedFiles: TFile[] = files.map(mapApiToFile);

  return mappedFiles;
};

export default async function Home() {
  const files: TFile[] = await fetchFiles();
  return (
    <AppProvider files={files}>
      <div className="px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between flex-wrap">
          <FilterBar />
          <FileDisplayToggle />
        </div>
        <MainViewContainer />
      </div>
      <ScrollToTopContainer />
    </AppProvider>
  );
}
