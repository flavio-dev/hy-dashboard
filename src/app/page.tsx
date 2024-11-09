import SearchBar from "@/components/molecules/SearchBar";
import FilesView from "@/components/organisms/FilesView";
import AppProvider from "@/contexts/AppContext";

const fetchFiles = async () => {
  const res = await fetch("http://localhost:3000/api/files");
  const files: TFile[] = await res.json();
  return files;
};

export default async function Home() {
  const files: TFile[] = await fetchFiles();
  return (
    <AppProvider files={files}>
      <SearchBar />
      <FilesView />
    </AppProvider>
  );
}
