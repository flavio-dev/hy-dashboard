"use client";
import { createContext, useContext, useReducer } from "react";
import {
  TAction,
  TAppContext,
  TAppContextProviderProps,
  TState,
} from "./types";
import { EAction } from "./enums";
import { TFileDictionary } from "@/types/file";
import { EDisplayFileView } from "@/components/atoms/FileDisplayToggle/enums";

const appReducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case EAction.SET_IS_FAVOURITE:
      const { files: newFiles } = { ...state };
      newFiles[action.fileId].isFavorite =
        !state.files[action.fileId].isFavorite;
      return { ...state, files: newFiles };
    case EAction.SET_FILTERED_TEXT:
      return { ...state, filterByText: action.value };
    case EAction.SET_SHOW_FAVOURITE:
      const newShowFavorite = !state.showFavorite;
      return { ...state, showFavorite: newShowFavorite };
    case EAction.SET_DISPLAY_FILES_VIEW:
      return { ...state, displayFileView: action.value };
    case EAction.SET_FILTERED_ARRAY_FILE_IDS:
      return { ...state, filteredArrayFileIds: action.value };
    default:
      return state;
  }
};

export const AppContext = createContext<TAppContext | null>(null);

const AppProvider = ({ children, files }: TAppContextProviderProps) => {
  const filesMap: TFileDictionary = {};
  const arrayFileIds: string[] = [];
  const filteredArrayFileIds: string[] = [];

  for (let i = 0; i < files.length; i++) {
    const currFile = files[i];
    filesMap[currFile.id] = currFile;
    arrayFileIds.push(currFile.id);
    filteredArrayFileIds.push(currFile.id);
  }

  const [state, dispatch] = useReducer(appReducer, {
    files: filesMap,
    arrayFileIds,
    filteredArrayFileIds,
    filterByText: "",
    showFavorite: false,
    displayFileView: EDisplayFileView.LIST,
  });

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return context;
};

export default AppProvider;
