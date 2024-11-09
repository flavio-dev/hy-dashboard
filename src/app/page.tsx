import SearchBar from "@/components/molecules/SearchBar";
import FilesView from "@/components/organisms/FilesView";
import FilesProvider from "@/contexts/FilesContext";

export default function Home() {
  return (
    <FilesProvider>
      <SearchBar />
      <FilesView />
    </FilesProvider>
  );
}
