export enum EFileType {
  AUDIO = "audio",
  DOCUMENT = "document",
  SPREADSHEET = "spreadsheet",
  VIDEO = "video",
}

export type TFile = {
  id: string;
  name: string;
  type:
    | EFileType.AUDIO
    | EFileType.DOCUMENT
    | EFileType.SPREADSHEET
    | EFileType.VIDEO;
  size: number;
  date: string;
  isFavorite: boolean;
};

export type TFileDictionary = {
  [key: string]: TFile;
};

export type TFilesDisplayingDictionary = {
  [key: string]: true;
};
