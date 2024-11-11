import AppProvider from "@/contexts/AppContext";
import { TFile } from "@/types/file";
import FilterBar from "@/components/molecules/FilterBar";
import FilesViewWrapper from "@/components/organisms/FilesViewWrapper";
import FileDisplayToggle from "@/components/atoms/FileDisplayToggle";
import SortBar from "@/components/molecules/SortBar";

const fetchFiles = async () => {
  const res = await fetch("http://localhost:3000/api/files");
  const files: TFile[] = await res.json();
  return files;
};

export default async function Home() {
  const files: TFile[] = await fetchFiles();
  return (
    <AppProvider files={files}>
      <div className="flex justify-between">
        <FilterBar />
        <FileDisplayToggle />
      </div>
      <SortBar />
      <FilesViewWrapper />
    </AppProvider>
  );
}
