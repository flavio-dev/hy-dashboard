import { TFile, TFileDictionary } from "@/types/file";
import { EAction } from "./enums";

export type TAppContextProviderProps = {
  children: React.ReactNode;
  files: TFile[];
};

export type TAction =
  | {
      type: EAction.SET_IS_FAVOURITE;
      fileId: string;
    }
  | {
      type: EAction.SET_FILTERED_TEXT;
      value: string;
    }
  | {
      type: EAction.SET_SHOW_FAVOURITE;
    }
  | {
      type: EAction.SET_DISPLAY_FILES_VIEW;
      value: "list" | "grid";
    };

export type TState = {
  files: TFileDictionary;
  filterByText: string;
  showFavorite: boolean;
  displayFileView: "list" | "grid";
};

export type TAppContext = {
  state: TState;
  dispatch: React.Dispatch<TAction>;
};
