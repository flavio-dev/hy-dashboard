export type TFileContext = {
  files: TFile[];
  setFiles: Dispatch<SetStateAction<TFile[]>>;
  filteredFiles: TFile[];
  setFilteredFiles: Dispatch<SetStateAction<TFile[]>>;
};

export type TFileContextProviderProps = {
  children: React.ReactNode;
};
