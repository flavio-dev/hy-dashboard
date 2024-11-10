export enum EFileType {
  AUDIO = "audio",
  DOCUMENT = "document",
  SPREADSHEET = "spreadsheet",
}

export type TFile = {
  id: string;
  name: string;
  type: EFileType.AUDIO | EFileType.DOCUMENT | EFileType.SPREADSHEET;
  size: number;
  date: string;
  favorite: boolean;
};
