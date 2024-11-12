import { TFile, TFileDictionary } from "@/types/file";
import { EAction, EDisplayFileView } from "./enums";

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
      value: EDisplayFileView;
    }
  | {
      type: EAction.SET_FILTERED_ARRAY_FILE_IDS;
      value: string[];
    };

export type TState = {
  files: TFileDictionary;
  arrayFileIds: string[];
  filteredArrayFileIds: string[];
  filterByText: string;
  showFavorite: boolean;
  displayFileView: EDisplayFileView;
};

export type TAppContext = {
  state: TState;
  dispatch: React.Dispatch<TAction>;
};
