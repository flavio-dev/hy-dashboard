"use client";
import { createContext, useContext, useReducer } from "react";
import {
  TAction,
  TAppContext,
  TAppContextProviderProps,
  TState,
} from "./types";
import { EAction, EDisplayFileView } from "./enums";
import { TFileDictionary } from "@/types/file";

const appReducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case EAction.TOGGLE_SET_FAVOURITE:
      const { files: newFilesSF } = { ...state };
      newFilesSF[action.fileId].isFavorite =
        !state.files[action.fileId].isFavorite;
      return { ...state, files: newFilesSF };
    case EAction.SET_MULTIPLE_FAVOURITE:
      const { files: newFilesMF } = { ...state };
      const filesFromAction = action.files;
      for (const key in filesFromAction) {
        newFilesMF[key].isFavorite = action.value;
      }
      return { ...state, files: newFilesMF };
    case EAction.DELETE_MULTIPLE_FILES:
      const { files: newFilesDF, arrayFileIds: newArrayFileIdsDF } = {
        ...state,
      };
      const filesToDeleteFromAction = action.files;
      for (const key in filesToDeleteFromAction) {
        delete newFilesDF[key];
        const index = newArrayFileIdsDF.indexOf(key);
        if (index !== -1) {
          newArrayFileIdsDF.splice(index, 1);
        }
      }
      return { ...state, files: newFilesDF, arrayFileIds: newArrayFileIdsDF };
    case EAction.SET_FILTERED_TEXT:
      return { ...state, filterByText: action.value };
    case EAction.TOGGLE_SHOW_FAVOURITE:
      const newShowFavorite = !state.showFavorite;
      return { ...state, showFavorite: newShowFavorite };
    case EAction.SET_DISPLAY_FILES_VIEW:
      return { ...state, displayFileView: action.value };
    case EAction.SET_FILTERED_ARRAY_FILE_IDS:
      return { ...state, arrayFileIds: action.value };
    default:
      return state;
  }
};

export const AppContext = createContext<TAppContext | null>(null);

const AppProvider = ({ children, files }: TAppContextProviderProps) => {
  const filesMap: TFileDictionary = {};
  const arrayFileIds: string[] = [];

  for (let i = 0; i < files.length; i++) {
    const currFile = files[i];
    filesMap[currFile.id] = currFile;
    arrayFileIds.push(currFile.id);
  }

  const [state, dispatch] = useReducer(appReducer, {
    files: filesMap,
    arrayFileIds,
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
